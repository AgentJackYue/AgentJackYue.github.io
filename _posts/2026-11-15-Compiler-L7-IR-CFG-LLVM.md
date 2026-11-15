---
title: Lecture 07 — IR Levels, Control-Flow Graphs (CFGs), and LLVM Storage
date: 2026-11-15 23:52:40 +0800
categories: [Notes, CS131 Compilers]
tags: [Intermediate Representation, Control Flow Graph, LLVM IR, SSA]
media_subpath: /assets/img/posts/CS131 Compilers
math: true
---

# Lecture 07 — IR Levels, Control-Flow Graphs (CFGs), and LLVM Storage

## 1. From a single IR to a family of IRs

Lecture 6 introduced the simple let-based IR. This lecture extends it toward a language with mutable variables, control flow, procedures, and LLVM-like identifiers.

The progression is:

| IR level | New capability |
|---|---|
| IR1 | Immutable globals and arithmetic expressions |
| IR2 | Mutable globals, assignment, and sequencing |
| IR3 | Comparisons, branches, basic blocks, and loops |
| IR4 | Procedures, calls, local storage, and `alloca` |
| IR5 | LLVM-like instructions and global identifiers, but no phi nodes yet |

The purpose is not to create increasingly complicated syntax. Each extension makes a source-language mechanism explicit while keeping the representation regular enough for later analysis.

## 2. Basic blocks and Control-Flow Graphs

A **Control-Flow Graph（控制流图，CFG）** represents control dependencies between regions of straight-line code.

Its nodes are **basic blocks（基本块）**. A basic block:

- starts at a label that is the only entry point;
- contains a straight-line instruction sequence;
- ends with exactly one control-flow instruction or **terminator（终结指令）**;
- contains no internal jump target;
- contains no other branch, call-return, or control-flow terminator.

![Basic-block and CFG definition](05_Lecture_07_IR_CFG_LLVM/basic_blocks.png)

A directed edge from block \(A\) to block \(B\) exists when the terminator of \(A\) may transfer control to the label of \(B\).

Terminators in IR3 are:

```ocaml
type terminator =
  | Ret
  | Br of lbl
  | Cbr of opn * lbl * lbl
```

- `Br label` is an unconditional branch.
- `Cbr condition, true_label, false_label` is a conditional branch.
- `Ret` exits the current control-flow graph.

![Example Control-Flow Graph](05_Lecture_07_IR_CFG_LLVM/cfg_example.png)

In the example, the `loop` block branches to `body` or `post`. The `body` block jumps back to `loop`, and `post` returns. The graph structure is determined entirely by the terminators.

## 3. IR2: mutable global state

IR2 extends expressions with commands:

```ocaml
type cmd =
  | Skip
  | Assn of var * exp
  | Seq of cmd * cmd
```

The IR now represents mutable globals through explicit load and store operations:

```ocaml
type insn =
  | Let of uid * bop * opn * opn
  | Load of uid * var
  | Store of var * opn
```

Important functions in `Notes/Reference_Code/lec06/ir2.ml`:

```ocaml
val Compile.compile_exp : SRC.exp -> IR.insn list * IR.opn
val Compile.compile_cmd : SRC.cmd -> IR.insn list
val Compile.compile : SRC.cmd -> IR.program
```

The transformation is:

1. A variable in an expression compiles to `Load (fresh, x)` and returns the fresh operand.
2. Assignment compiles the expression first, then appends `Store (x, result)`.
3. Sequencing concatenates the instruction lists from its children.
4. `Skip` emits no instructions.

This separates mutable source variables from immutable IR temporaries.

## 4. IR3: control flow and CFG construction

IR3 adds comparisons and control flow:

```ocaml
type cmpop = Eq | Lt

type insn =
  | Let of uid * bop * opn * opn
  | Load of uid * var
  | Store of var * opn
  | ICmp of uid * cmpop * opn * opn
```

It also introduces labeled blocks and a program-level `cfg`.

The generator emits an instruction stream containing block labels, instructions, and terminators:

```ocaml
type elt =
  | L of lbl
  | I of insn
  | T of terminator
```

`build_cfg : stream -> cfg` groups the stream into blocks. The implementation checks that every nonempty labeled block has a terminator and that the entry stream ends with one:

- a nonempty labeled block has a terminator;
- each labeled block is closed when the next block label appears;
- the entry block is distinguished.

The slide-level CFG invariant additionally requires every terminator destination to name a defined block. That invariant is part of the representation contract, although `build_cfg` itself does not perform the destination lookup.

The source produces the stream in reverse execution order so it can use efficient list construction. Operators `>@` and `>::` preserve natural source order while the underlying list grows from the head. `build_cfg` explicitly assumes this reverse-order representation.

### Conditional lowering

For:

```text
IFNZ e THEN c1 ELSE c2
```

`Compile.compile_cmd` emits:

1. instructions for `e`;
2. `guard = icmp eq result, 0`;
3. a conditional branch to a zero branch and a nonzero branch;
4. the translated then and else blocks;
5. unconditional branches to a merge block.

One notable implementation detail: `ICmp (guard, Eq, result, 0)` is true when the original condition is zero. The branch targets are therefore ordered `z_branch, nz_branch`.

### Loop lowering

`WhileNZ (e, body)` is represented with four blocks:

```text
entry → condition
condition → exit if e = 0
condition → body otherwise
body → condition
exit
```

The condition instructions are emitted inside the condition block so they are recomputed after every iteration.

## 5. Worked factorial CFG

The C source in `lec04/factorial64.c` computes:

```c
int64_t acc = 1;
while (n > 0) {
  acc = acc * n;
  n = n - 1;
}
return acc;
```

![Factorial Control-Flow Graph](05_Lecture_07_IR_CFG_LLVM/factorial_cfg.png)

The CFG has four blocks:

| Block | Responsibility | Terminator |
|---|---|---|
| Entry | Allocate `n` and `acc`; store initial values | `br loop` |
| Loop | Load `n`; compare with zero | `cbr` to `body` or `post` |
| Body | Multiply `acc` by `n`; decrement `n`; store results | `br loop` |
| Post | Load `acc` | `ret` |

For `n = 3`, the loop block is entered with values:

| Visit | `n` at comparison | `acc` before body |
|---|---:|---:|
| 1 | 3 | 1 |
| 2 | 2 | 3 |
| 3 | 1 | 6 |
| 4 | 0 | 6 |

On the fourth visit, the conditional branch selects `post`, which returns `6`.

## 6. IR4 and IR5: procedures and LLVM-like structure

IR4 adds:

```ocaml
| Call of uid * fn_name * (opn list)
| Alloca of uid
```

and function declarations:

```ocaml
type fdecl = {
  name : fn_name;
  param : uid list;
  cfg : cfg
}

type program = {
  globals : (var * int64) list;
  fdecls : fdecl list
}
```

These files are design representations: `ir4.ml` declares procedure-oriented IR structures and an OCaml meaning module, but it does not contain a complete source compiler.

IR5 refactors UID placement and names. Instructions such as `Binop`, `Load`, `Store`, `ICmp`, `Call`, and `Alloca` now receive their result identifier through the enclosing block record:

```ocaml
type block = {
  insns : (uid * insn) list;
  terminator : terminator
}
```

IR5 also introduces `gid` for global identifiers and separates global declarations from function declarations. This is the “almost LLVM” representation before phi nodes.

## 7. LLVM as compiler infrastructure

LLVM originally meant “Low-Level Virtual Machine.” It is a reusable compiler infrastructure centered on a typed SSA IR.

![LLVM compiler infrastructure](05_Lecture_07_IR_CFG_LLVM/llvm_infrastructure.png)

The architecture separates:

- front ends that produce LLVM IR;
- analyses and transformations over that IR;
- back ends/JITs that lower it to target code.

This separation is the same retargeting motivation introduced in Lecture 6. A C front end and a functional-language front end can use the same optimization and back-end infrastructure once they produce compatible IR.

## 8. From course IR syntax to LLVM syntax

The course IR uses OCaml-shaped notation:

```text
let tmp1 = add 3L 4L in
```

LLVM removes `let ... in` and marks locals with `%`:

```llvm
%tmp1 = add i64 3, 4
```

Course functions and blocks are rendered as `let rec ... and ...`; LLVM uses labels:

```llvm
entry:
  ...
foo:
  ...
```

Course globals are OCaml references; LLVM globals use `@`:

```llvm
@X = global i64 0
```

Real LLVM also carries explicit types such as `i64`, `i64*`, and `i1`, alignment annotations, numeric identifiers, and predecessor information.

## 9. SSA temporaries and storage

**Static Single Assignment（静态单赋值，SSA）** means each `%uid` appears on the left side at most once in the entire CFG.

Consequences:

- a `%uid` value never changes after definition;
- it is closer to a mathematical `let` binding than to a mutable variable;
- duplicated definitions are a structural error;
- data-flow relationships become easier to analyze.

LLVM distinguishes several storage forms:

| Storage | Identification | Meaning |
|---|---|---|
| Local temporary | `%uid` | Result of one instruction; SSA-valued |
| Global | `@gid` | Program-level data or function |
| Abstract stack location | Result of `alloca` | Pointer-like reference to allocated storage |
| Heap object | External allocation, e.g. `malloc` | Storage whose lifetime is not the immediate frame |

### `alloca`, `load`, and `store`

```llvm
%acc = alloca i64
store i64 4521, i64* %acc
%x = load i64, i64* %acc
```

- `alloca i64` creates a storage slot and produces its reference as `%acc`.
- `store` writes through that reference.
- `load` reads through that reference into a new SSA temporary.

This is how mutable source variables coexist with SSA temporaries: the temporary pointer does not change, while the memory it points to can be updated.

## 10. Easily confused concepts

| Concept A | Concept B |
|---|---|
| Basic block | Entire CFG: one straight-line node versus the graph of blocks |
| CFG edge | CFG node: edge comes from a terminator; node is a block |
| SSA temporary | Mutable source variable: immutable value versus storage with changing contents |
| `alloca` | `load`: allocate a storage reference versus read its contents |
| `%uid` | `@gid`: function-local SSA result versus global identifier |
| IR2 | IR3: mutation/sequencing versus structured control flow |
| IR4 | IR5: procedure structure versus normalized UID/global identifiers |
| `icmp eq x, 0` | `IFNZ x`: explicit branch condition versus source-language construct |

## 11. Typical mistakes and edge cases

- Placing a branch or return in the middle of a basic block.
- Creating an internal label without splitting the block.
- Assigning the same SSA `%uid` twice.
- Forgetting that a loop condition must execute again on each back edge.
- Confusing the true branch of `icmp eq x, 0` with the true branch of “x is nonzero.”
- Treating `alloca` as if it loads the current stored value.
- Assuming `ir4.ml` and `ir5.ml` contain full compilers; they primarily define IR structure and meanings.
- Reversing a reverse-order IR stream without accounting for `build_cfg`'s representation assumption.
- Forgetting that `%uid` is a value, while the result of `alloca` is a pointer-like operand to memory.

## 12. Independent-revision checklist

You should be able to:

- **Define**: basic block, terminator, Control-Flow Graph, SSA, `alloca`, `load`, `store`.
- **Construct**: a CFG from labeled instructions and branch destinations.
- **Trace**: factorial around loop/body/post edges.
- **Compare**: IR1–IR5 and explain what each level adds.
- **Translate**: course-IR syntax into equivalent LLVM-shaped syntax.
- **Debug**: malformed blocks, premature loads, loop-condition placement, and duplicate SSA definitions.

## 13. Sources

- Course material: `lec07.pdf`, pp. 3–18.
- Local/reference source:
  - `lec04/factorial64.c`.
  - `Notes/Reference_Code/lec06/ir2.ml`: `Load`, `Store`, `compile_exp`, `compile_cmd`, `compile`.
  - `Notes/Reference_Code/lec06/ir3.ml`: `ICmp`, `terminator`, `block`, `cfg`, `build_cfg`, `compile_cmd`, `compile`.
  - `Notes/Reference_Code/lec06/ir4.ml`: `Call`, `Alloca`, `fdecl`, `program`.
  - `Notes/Reference_Code/lec06/ir5.ml`: `gid`, normalized `block`, `gdecl`, `fdecl`, `program`.
- Figures:
  - `lec07.pdf` p. 7 → `basic_blocks.png`.
  - `lec07.pdf` p. 8 → `cfg_example.png`.
  - `lec07.pdf` p. 11 → `llvm_infrastructure.png`.
  - `lec07.pdf` p. 15 → `factorial_cfg.png`.

The factorial iteration table and block-role table are supplementary explanations derived from the slide CFG and local C source.
