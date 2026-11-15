---
title: Lecture 06 — Direct X86 Generation and Intermediate Representations
date: 2026-11-15 23:51:29 +0800
categories: [Notes, CS131 Compilers]
tags: [Code Generation, Intermediate Representation, X86, Stack Machine]
media_subpath: /assets/img/posts/CS131 Compilers
math: true
---

# Lecture 06 — Direct X86 Generation and Intermediate Representations

## 1. Where this lecture fits

[Note 3]({% post_url 2026-11-15-Compiler-L4-L5-X86lite-Calling-Conventions %}) established X86lite execution and calling conventions. This lecture asks how a compiler can systematically emit that assembly.

Two strategies are introduced:

1. Translate the AST directly to assembly while preserving register and stack invariants.
2. Translate the AST first into a small stack-oriented Intermediate Representation（中间表示，IR）, then lower each IR instruction independently.

The second strategy exposes why compilers use IRs: the source AST and target assembly are too far apart for robust analysis, optimization, and retargeting.

## 2. Direct AST-to-assembly translation

**Direct translation（直接翻译）** is syntax-directed code generation. For a simple arithmetic language, each AST constructor determines an instruction-emission rule.

The central invariant for the first strategy is:

> Compiling an expression leaves its result in `%rax`.

This invariant makes recursion manageable:

1. Compile the left child according to the same rule.
2. Save its `%rax` result on the stack if another value must be computed.
3. Compile the right child.
4. Restore the saved left value.
5. Apply the operation and leave the result in `%rax`.

Every `pushq` must have a matching `popq`; otherwise later return addresses or saved registers are corrupted.

### Why direct generation becomes difficult

Direct assembly is tied to concrete machine choices:

- specific registers are reserved for the current result and operation;
- temporary values consume the system stack;
- instruction operand restrictions must be handled immediately;
- arbitrary jumps lose structured control-flow information;
- optimization must reason about committed registers and stack operations;
- moving to a new target requires replacing much of the translation.

For a small expression language, these costs are manageable. They become obstacles when structured data, procedures, and richer control flow are added.

## 3. The actual source language and compiler

`Notes/Reference_Code/lec05/compile.ml` defines:

```ocaml
type exp =
  | Var of var
  | Const of int64
  | Add of exp * exp
  | Mul of exp * exp
  | Neg of exp
```

The legal source variables are `X1` through `X8`. The source checker is:

```ocaml
val static_check : exp -> unit
```

It recursively rejects variables outside that context.

The variable-location map is:

```ocaml
val compile_var : var -> X86.operand
```

It maps `X1`–`X6` to the six integer argument registers and `X7`/`X8` to `16(%rbp)` and `24(%rbp)`. This deliberately connects code generation to the calling convention from Note 3.

## 4. Strategy 1: emit with a `%rax` invariant

The core function is:

```ocaml
val compile_exp : exp -> X86.ins list
```

For a binary operation, the source implementation is equivalent to:

```text
compile e1                 result in %rax
pushq %rax                 save left result
compile e2                 result in %rax
popq %r10                  restore left result
op %r10, %rax              combine left and right
```

For addition, `addq %r10, %rax` computes `right + left`. For multiplication, `imulq %r10, %rax` produces the same product regardless of operand order.

### Worked generation

Compile:

```text
(1 + X4) + (3 + (X1 * 5))
```

Assume `X1` is in `%rdi` and `X4` is in `%rcx`.

| Generated region | Value in `%rax` |
|---|---:|
| Load constant `1` | 1 |
| Save left, load `X4`, restore to `%r10`, add | 5 |
| Save outer left value | 5 |
| Begin right sum with constant `3` | 3 |
| Compute `X1 * 5` through another push/pop pair | 5 |
| Restore `3` and add | 8 |
| Restore outer `5` and add | 13 |

`compile1 : exp -> X86.prog` wraps this instruction sequence with:

```asm
pushq %rbp
movq %rsp, %rbp
...
popq %rbp
retq
```

The body leaves the final value in `%rax`, which is the return-value register.

## 5. Strategy 2: a stack-oriented IR

The same source expression can first be lowered into stack-machine instructions:

```ocaml
type insn =
  | IPushC of int64
  | IPushV of var
  | IMul
  | IAdd
  | INeg

type program = insn list
```

The conversion function is:

```ocaml
val flatten : exp -> program
```

Its rules are:

| Source AST | Stack IR |
|---|---|
| `Const c` | `IPushC c` |
| `Var x` | `IPushV x` |
| `Add (e1, e2)` | `flatten e1 @ flatten e2 @ [IAdd]` |
| `Mul (e1, e2)` | `flatten e1 @ flatten e2 @ [IMul]` |
| `Neg e` | `flatten e @ [INeg]` |

For the running example, the IR is:

```text
IPushC 1
IPushV X4
IAdd
IPushC 3
IPushV X1
IPushC 5
IMul
IAdd
```

### Stack trace

Assume `X1 = 1` and `X4 = 4`.

| Instruction | Stack after execution |
|---|---|
| `IPushC 1` | `[1]` |
| `IPushV X4` | `[1, 4]` |
| `IAdd` | `[5]` |
| `IPushC 3` | `[5, 3]` |
| `IPushV X1` | `[5, 3, 1]` |
| `IPushC 5` | `[5, 3, 1, 5]` |
| `IMul` | `[5, 3, 5]` |
| `IAdd` | `[5, 8]` |
| `IAdd` | `[13]` |

The listing uses the mathematical order “bottom to top.” In actual X86 memory, the stack addresses grow downward.

### Lowering stack IR to X86

`compile_insn : insn -> X86.ins list` translates each instruction independently:

- `IPushC` and `IPushV` become `pushq`.
- `IMul` and `IAdd` pop the right and left values into `%rax` and `%r10`, apply the operation, and push the result.
- `INeg` pops a value, multiplies by `-1`, and pushes the result.

`compile2 : exp -> X86.prog`:

1. runs `static_check`;
2. flattens the AST to stack IR;
3. concatenates the lowering of every IR instruction;
4. pops the final stack value into `%rax`;
5. wraps the body in the function prologue/epilogue.

The two strategies produce different instruction organization but preserve the expression result.

## 6. Why intermediate representations matter

![AST to IR to multiple targets](04_Lecture_06_Direct_X86_IR/ir_architecture.png)

An IR is not merely a compact AST. It is designed to expose the properties needed by later compiler phases.

### Properties of a good IR

- It is easy to produce from the representation above it.
- It is straightforward to lower to one or more targets below it.
- It has a narrow interface with a small, regular set of constructs.
- It preserves information needed for analysis and optimization.

Example from the lecture:

```text
for (pre; cond; post) { body }
```

can be lowered to:

```text
pre;
while (cond) {
  body;
  post;
}
```

The IR does not need separate `for` and `foreach` constructs if lower phases can consume the simpler loop form.

## 7. High-, mid-, and low-level IRs

**High-level IR（高层中间表示）** stays close to source structure. It may contain type information, resolved names, and structured statements. It supports analyses such as type checking and optimizations such as inlining.

**Low-level IR（低层中间表示）** stays close to target assembly. It may have machine-dependent pseudo-instructions, architectural restrictions, and explicit registers or memory. It supports instruction selection and register allocation.

**Mid-level IR（中层中间表示）** sits between them. It often makes evaluation order and control flow explicit while retaining abstract registers or memory locations.

Common forms include:

| Form | Shape | Main idea |
|---|---|---|
| Triples | `OP a b` | Compact operations useful for instruction tiling |
| Quadruples | `a = b OP c` | RISC-like three-address form |
| SSA | `a = op b c` with a single assignment per name | Simplifies data-flow analysis |
| Stack IR | Push operands, apply operators | Easy to generate and lower |

**SSA（静态单赋值，Static Single Assignment）** means each local name is assigned exactly once. SSA becomes central to LLVM IR in later lectures.

## 8. The simple let-based IR

The first IR in `Notes/Reference_Code/lec06/ir1.ml` represents every intermediate expression value as a named operand:

```ocaml
type uid = int

type opn =
  | Id of uid
  | Const of int64
  | Var of var

type insn =
  | Let of uid * bop * opn * opn
```

It has no nested instructions. Every binary operation consumes two operands and binds one fresh temporary.

### Fresh identifiers

```ocaml
val IR.mk_uid : unit -> uid
```

uses a mutable counter to produce distinct temporary names. The mutable counter is a compiler implementation detail; source-language variables remain immutable in IR1.

### Translation procedure

```ocaml
val Compile.compile_exp :
  SRC.exp -> IR.insn list * IR.opn
```

returns both:

- the instructions needed to compute the expression;
- the operand containing the final result.

For a binary node:

1. Recursively compile the left child.
2. Recursively compile the right child.
3. Allocate a fresh `uid`.
4. Emit `Let (uid, bop, left_result, right_result)`.
5. Return `Id uid` as the result operand.

For the running expression, the result is:

```text
tmp0 = add 1L varX4
tmp1 = mul varX1 5L
tmp2 = add 3L tmp1
tmp3 = add tmp0 tmp2
result = tmp3
```

This representation makes order and data dependencies explicit without naming x86 registers.

`Compile.compile : exp -> IR.program` adds the global variable initialization and final result to the instruction list.

## 9. Easily confused concepts

| Concept A | Concept B |
|---|---|
| AST | IR: source structure versus a representation designed for later compilation |
| `%rax` invariant | Stack-result invariant: direct generation versus stack-machine lowering |
| Source expression order | Assembly instruction order: children must be evaluated before the parent operation can combine them |
| Temporary name | Source variable: temporaries are compiler-introduced values |
| SSA | Ordinary assignment: SSA permits one assignment per local name |
| Stack IR | Runtime call stack: both use a stack model, but one is a compiler representation |
| High-level IR | Low-level IR: proximity to source versus target |

## 10. Typical mistakes and edge cases

- Pushing a left operand without eventually popping it.
- Computing the right operand before saving a live left result.
- Assuming `%rax` survives recursive compilation of the right child.
- Reusing `%r10` while its value is still live across another recursive compilation.
- Flattening a binary expression as `right @ left @ [op]`; source evaluation order is left then right in these examples.
- Giving two intermediate values the same fresh identifier.
- Leaving a final stack value below the return address during function epilogue.
- Treating a stack IR instruction as an x86 instruction instead of a separate abstraction.
- Using an IR form with too many duplicate source constructs, making later passes unnecessarily complex.

## 11. Independent-revision checklist

You should be able to:

- **Explain**: the direct-generation `%rax` invariant and stack balance.
- **Trace**: registers and stack while compiling a binary expression.
- **Derive**: a stack-IR program for a nested expression and evaluate its stack.
- **Implement conceptually**: SLL conversion with fresh temporaries.
- **Compare**: direct assembly, stack IR, triples, quadruples, and SSA.
- **Reason**: why a narrow, explicit IR improves optimization and retargeting.

## 12. Sources

- Course material: `lec06.pdf`, pp. 3–17.
- Retrieved official code:
  - `Notes/Reference_Code/lec05/compile.ml`: `static_check`, `compile_var`, `compile_exp`, `compile1`, `flatten`, `compile_insn`, `compile2`.
  - `Notes/Reference_Code/lec06/ir1.ml`: `IR.uid`, `IR.opn`, `IR.insn`, `IR.program`, `IR.mk_uid`, `Compile.compile_exp`, `Compile.compile`.
  - `Notes/Reference_Code/lec06/ir_by_hand.ml`: worked by-hand representation progression.
- Figure:
  - `lec06.pdf` p. 9 → `ir_architecture.png`.

The stack traces and function-call order are supplementary derivations from the actual source implementation and the slide example.
