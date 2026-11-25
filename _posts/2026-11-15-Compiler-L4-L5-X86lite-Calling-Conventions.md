---
title: Lectures 04–05 — X86lite and Calling Conventions
date: 2026-11-15 23:50:29 +0800
categories: [Notes, CS131 Compilers]
tags: [X86lite, Calling Conventions, Stack Frame, Assembly]
media_subpath: /assets/img/posts/CS131 Compilers
math: true
---

# Lectures 04–05 — X86lite and Calling Conventions

## 1. Lecture 4: why X86lite

X86 is a large, backward-compatible instruction-set family. Full X86 contains many register widths, floating-point instructions, variable-length encodings, and historical special cases. **X86lite（精简 X86 子集）** keeps the essential ideas while restricting the architecture to:

- signed 64-bit integers;
- sixteen general-purpose 64-bit registers;
- roughly twenty instructions;
- three condition flags;
- a large linear memory;
- a conventional downward-growing stack.

The simplification makes compiler correctness and code generation inspectable. Lecture 4 uses X86lite as the target architecture for understanding instruction semantics, memory, and function calls.

## 2. Machine state

![X86lite machine state](03_Lectures_04-05_X86lite_Calling_Conventions/x86_machine_state.png)

The X86lite machine state consists of:

- **Register file（寄存器组）**: sixteen 64-bit registers.
- **Instruction pointer（指令指针）** `%rip`.
- **Condition flags（条件标志）**: `OF`, `SF`, and `ZF`.
- **Memory（内存）**: code, data, heap, and stack regions.

The general-purpose registers are:

| Register | Conventional role |
|---|---|
| `%rax` | Accumulator and common return-value register |
| `%rbx` | General-purpose, callee-saved register |
| `%rcx` | Counter; fourth integer argument |
| `%rdx` | Data/I/O; third integer argument |
| `%rsi` | Pointer/source; second integer argument |
| `%rdi` | Pointer/destination; first integer argument |
| `%rbp` | Base pointer for the current stack frame |
| `%rsp` | Stack pointer |
| `%r8`–`%r15` | Additional general-purpose registers |

`%rip` normally advances automatically. Jumps, calls, and returns change it indirectly. X86lite treats instructions as regular memory contents and fetches the instruction addressed by `%rip`.

## 3. Assembly operands and syntax

The course uses AT&T syntax:

```asm
movq SRC, DEST
```

The source appears first and the destination second. This order is easy to reverse accidentally.

An **operand（操作数）** is an instruction input or output. X86lite uses:

- **Immediate（立即数）**: a literal such as `$4`.
- **Label（标签）**: a symbolic code or data address.
- **Register（寄存器）**: the value stored in a register.
- **Indirect memory operand（间接内存操作数）**: an address derived from base, displacement, and, in full X86, index-scale terms.

AT&T notation uses:

- `$` for immediates;
- `%` for registers;
- a `q` suffix for 64-bit quadword operations.

Examples:

```asm
movq $4, %rax
movq %rbx, %rax
addq %rbx, %rax
```

The third instruction computes:

```text
%rax ← %rax + %rbx
```

Memory addressing follows:

$$
\operatorname{addr}(ind)
=
\text{Base} + \text{Index}\times\text{Scale} + \text{Displacement}.
$$

Examples:

| Operand | Address/value interpretation |
|---|---|
| `-4(%rsp)` | Address `rsp - 4` |
| `(%rax)` | Memory at address `rax` |
| `8(%rax)` | Memory at address `rax + 8` |
| `(%rax,%rcx,4)` | Full-X86 address `rax + 4*rcx`; not needed by X86lite code generation |

`leaq Ind, DEST` computes the address itself:

```text
DEST ← addr(Ind)
```

It does not load the memory contents.

## 4. Instruction families

### Arithmetic

| Instruction | Effect |
|---|---|
| `negq DEST` | Two's-complement negation |
| `addq SRC, DEST` | `DEST ← DEST + SRC` |
| `subq SRC, DEST` | `DEST ← DEST - SRC` |
| `imulq SRC, Reg` | `Reg ← Reg * SRC`, using a register destination |

### Logic and shifts

| Instruction | Effect |
|---|---|
| `notq DEST` | Bitwise NOT |
| `andq SRC, DEST` | Bitwise AND |
| `orq SRC, DEST` | Bitwise OR |
| `xorq SRC, DEST` | Bitwise XOR |
| `sarq Amt, DEST` | Arithmetic right shift |
| `shlq Amt, DEST` | Left shift |
| `shrq Amt, DEST` | Logical right shift |

### Control flow

| Instruction | Effect |
|---|---|
| `jmp SRC` | Set `%rip` to `SRC` |
| `jCC SRC` | Jump when condition code `CC` holds |
| `cmpq SRC1, SRC2` | Compute `SRC2 - SRC1` to set flags, without overwriting an operand |
| `setbCC DEST` | Set the destination's low byte to 1 or 0 according to `CC` |
| `callq SRC` | Push the return address and jump |
| `retq` | Pop a return address into `%rip` |

## 5. Condition flags and condition codes

Arithmetic instructions set condition flags as a side effect.

- `OF`: signed overflow occurred.
- `SF`: the result's sign bit is set.
- `ZF`: the result is zero.

Condition codes interpret combinations of these flags:

| Code | Condition |
|---|---|
| `eq` | `ZF` |
| `ne` | `not ZF` |
| `lt` | `SF != OF` |
| `le` | `SF != OF or ZF` |
| `gt` | `SF = OF and not ZF` |
| `ge` | `SF = OF` |

The AT&T `cmpq SRC1, SRC2` operation is semantically related to `SRC2 - SRC1`, as stated on `lec04.pdf` p. 20. The wording on p. 18 describes “compute `SRC1 - SRC2`,” which is inconsistent with the later slide and operand order. The operand-order-consistent statement is used below; this discrepancy is tracked in the generation report.

Example:

```asm
cmpq %rcx, %rax
je equal_label
```

The comparison computes `rax - rcx`. If the result is zero, `ZF` is set and `je` branches.

## 6. Memory and the stack

![X86lite memory and stack](03_Lectures_04-05_X86lite_Calling_Conventions/x86_memory_stack.png)

`lec04.pdf` p. 17 presents X86lite memory as $2^{64}$ bytes and describes legal addresses as 64-bit quadword-aligned pointers. The official X86lite specification instead describes byte-addressable memory with unaligned accesses allowed. The lecture's alignment model is used for the course presentation; the specification difference is supplementary and recorded as a source discrepancy.

By convention, the stack occupies high-address memory and grows toward lower addresses. `%rsp` points to the current top.

```text
pushq SRC:
  %rsp ← %rsp - 8
  Mem[%rsp] ← SRC

popq DEST:
  DEST ← Mem[%rsp]
  %rsp ← %rsp + 8
```

`pushq` both changes the pointer and stores a quadword. `popq` both loads and increments the pointer.

The C-style memory regions are:

- text/code and constant data;
- heap-allocated objects;
- stack frames containing locals, saved state, and return addresses.

## 7. The X86 assembly AST in OCaml

`lec04/code/x86.ml` represents assembly as data before printing it.

Important types include:

```ocaml
type reg =
  | Rip
  | Rax | Rbx | Rcx | Rdx | Rsi | Rdi | Rbp | Rsp
  | R08 | R09 | R10 | R11 | R12 | R13 | R14 | R15

type operand =
  | Imm of imm
  | Reg of reg
  | Ind1 of imm
  | Ind2 of reg
  | Ind3 of (imm * reg)

type ins = opcode * operand list
type prog = elem list
```

`string_of_operand : operand -> string` lowers operands to AT&T text. `string_of_ins : ins -> string` chooses the correct printing form for ordinary, jump, and byte-register operands. `string_of_prog : prog -> string` concatenates labeled code/data elements.

This module is an assembly representation and pretty-printer; it is not the X86lite interpreter used for execution.

### Example: `p2`

```ocaml
gtext "program"
  [ Xorq, [~%Rax; ~%Rax]
  ; Movq, [Ind3 (Lbl "baz", Rip); ~%Rax]
  ; Retq, []
  ]
```

`p2` loads the quadword stored at label `baz` using `%rip`-relative addressing. `p1` uses the non-relative `Ind1 (Lbl "baz")`; its source comment notes that this form can fail under position-independent executables.

`lec04/code/main.ml` prints `X86.string_of_prog X86.p1`. `lec04/program.s` is the resulting assembly text. `lec04/runtime.c` supplies a C `main` that calls the assembly symbol `program`.

## 8. Worked factorial loop

`p3 (n : int) : prog` emits a loop that computes $n!$:

```text
program:
  rax ← 1
  rdi ← n

loop:
  compare rdi with 0
  if equal, jump to exit
  rax ← rax * rdi
  rdi ← rdi - 1
  jump to loop

exit:
  return rax
```

For `n = 3`:

| Reaching loop | `%rdi` | `%rax` |
|---|---:|---:|
| Initial | 3 | 1 |
| After iteration 1 | 2 | 3 |
| After iteration 2 | 1 | 6 |
| After iteration 3 | 0 | 6 |
| `cmpq $0, %rdi` sets `ZF` | 0 | 6 |

The `caller` may not even provide arguments to `program`; here `n` is an OCaml meta-level parameter used to construct a specialized assembly program.

## 9. Calling conventions

A **Calling Convention（函数调用约定）** specifies:

- where arguments are placed;
- where return values appear;
- which registers a callee may freely overwrite;
- which registers a callee must preserve;
- who removes stack-allocated arguments.

The caller is the function making a call. The callee is the function being called.

Registers are classified as:

- **caller-saved（调用者保存）**: the callee may overwrite them, so the caller must preserve any live values;
- **callee-saved（被调用者保存）**: the callee must restore their incoming values before returning.

The x86-64 System V convention used in this course places:

| Argument | Location |
|---|---|
| 1 | `%rdi` |
| 2 | `%rsi` |
| 3 | `%rdx` |
| 4 | `%rcx` |
| 5 | `%r8` |
| 6 | `%r9` |
| 7+ | On the stack, pushed right-to-left by the caller |
| Return value | `%rax` |

After the callee's prologue:

```text
argument 7  →  16(%rbp)
argument 8  →  24(%rbp)
argument n  →  (((n - 7) + 2) * 8)(%rbp), for n > 6
```

## 10. Function call sequence

### Caller

1. Evaluate arguments.
2. Put arguments 1–6 in the specified registers.
3. Push arguments 7+ in right-to-left order.
4. Execute `callq`.
5. After return, read the result from `%rax` and clean up caller-owned stack space.

`callq` performs:

```text
push return_address
%rip ← callee_address
```

### Callee prologue

![Callee stack frame after prologue](03_Lectures_04-05_X86lite_Calling_Conventions/callee_stack_frame.png)

The example prologue is:

```asm
pushq %rbp
movq %rsp, %rbp
subq $128, %rsp
```

It:

1. stores the caller's old `%rbp`;
2. makes `%rbp` point to the new frame base;
3. allocates scratch space for locals and temporaries.

The callee must preserve `%rbp`, `%rbx`, and `%r12`–`%r15`. If it uses those registers, it saves them and restores them before return.

### Callee epilogue

```asm
movq ANS, %rax
addq $128, %rsp
popq %rbp
retq
```

This:

1. places any result in `%rax`;
2. deallocates scratch space;
3. restores the caller's `%rbp`;
4. pops the return address into `%rip`.

## 11. Eight-argument example

`lec04/callingconventions.c` defines `sum6` with eight parameters and calls

```c
sum6(0, 1, 2, 3, 4, 5, 6, 7)
```

At entry:

| Parameter | Location | Value |
|---|---|---:|
| 1 | `%rdi` | 0 |
| 2 | `%rsi` | 1 |
| 3 | `%rdx` | 2 |
| 4 | `%rcx` | 3 |
| 5 | `%r8` | 4 |
| 6 | `%r9` | 5 |
| 7 | caller stack / `16(%rbp)` after prologue | 6 |
| 8 | caller stack / `24(%rbp)` after prologue | 7 |

The returned sum is `28`.

## 12. System V and cdecl

The 64-bit System V ABI used by Linux, macOS, BSD, and Solaris follows the register/stack split above. The lecture also contrasts older 32-bit `cdecl`, which passes all arguments on the stack right-to-left and returns in `%eax`.

Do not mix rules from 32-bit and 64-bit conventions in one trace.

## 13. Overflow example

`lec04/code/int64_overflow.ml` is not part of the active Dune executable and is not named directly in the slides. Its relationship to this lecture is therefore **tentative**.

The implementation computes an operation with OCaml's wrapping `Int64` operation and compares it with an arbitrary-precision `Big_int` result:

```ocaml
type t = { value : int64; overflow : bool }

let add =
  with_overflow2 add_big_int Int64.add
```

If the wrapped and exact results differ, `overflow = true`. This is a useful supplementary model of fixed-width arithmetic when tracing flag behavior.

## 14. Easily confused concepts

| Concept A | Concept B |
|---|---|
| `%rsp` | `%rbp`: current stack top versus stable current-frame base |
| `movq SRC, DEST` | Intel `mov DEST, SRC`: opposite operand order |
| `movq` | `leaq`: load memory value versus compute/load an address |
| Caller-saved | Callee-saved: responsibility for preservation differs |
| `callq` | `retq`: push/jump versus pop/jump |
| Registers 1–6 | Arguments 7+: register arguments versus stack arguments |
| Red-zone scratch space | General heap allocation: lecture scratch space is not `malloc` |
| 32-bit cdecl | 64-bit System V: different placement rules |

## 15. Typical mistakes and edge cases

- Forgetting that AT&T source and destination are reversed.
- Treating a memory operand as its address when an instruction expects a value.
- Assuming `leaq` dereferences memory.
- Forgetting that `pushq` decrements `%rsp` before storing.
- Restoring `%rsp` without first placing the return value in `%rax`.
- Popping `%rbp` before deallocating frame-local scratch space.
- Counting stack arguments from offset `0(%rbp)` instead of accounting for old `%rbp` and the return address.
- Calling a callee-saved register “safe to overwrite”; it can be overwritten only if saved and restored.
- Mixing the slide's memory model with the official simulator specification without labeling the difference.

## 16. Independent-revision checklist

You should be able to:

- **Recall**: register roles, operand syntax, condition flags, and calling-convention locations.
- **Explain**: stack growth, `pushq`/`popq`, `callq`/`retq`, and caller versus callee responsibilities.
- **Trace**: register and stack changes through a function call and prologue/epilogue.
- **Compute**: condition codes after a comparison.
- **Read**: an OCaml X86lite assembly AST and its emitted AT&T syntax.
- **Debug**: stack imbalance, reversed operands, wrong saved state, and incorrect stack-argument offsets.

## 17. Lecture 5 bridge

`lec05.pdf` p. 3 previews:

- direct translation to x86-64 assembly;
- stack-based temporaries;
- a stack-based IR;
- static analysis and translation invariants;
- intermediate representations.

The detailed implementation belongs to Lecture 6 and Note 4, *Direct X86 Generation and Intermediate Representations*. Lecture 5 pp. 5–25 repeat the calling-convention sequence from Lecture 4 and are not independently re-explained here.

## 18. Sources

- Course material:
  - `lec04.pdf`, pp. 4–45.
  - `lec05.pdf`, p. 3.
- Local source code:
  - `lec04/code/x86.ml`: `reg`, `operand`, `opcode`, `ins`, `prog`, `string_of_operand`, `string_of_ins`, `string_of_prog`, `p1`, `p2`, `p3`, `p4`.
  - `lec04/code/main.ml`.
  - `lec04/program.s`.
  - `lec04/runtime.c`.
  - `lec04/callingconventions.c`.
  - `lec04/code/int64_overflow.ml` and `.mli` as tentative supplementary code.
- Figures:
  - `lec04.pdf` p. 8 → `x86_machine_state.png`.
  - `lec04.pdf` p. 17 → `x86_memory_stack.png`.
  - `lec04.pdf` p. 35 → `callee_stack_frame.png`.
- Official specification:
  - https://www.seas.upenn.edu/~cis5521/25sp/hw2/doc/x86lite.html

The condition-order discrepancy and slide/specification memory-address difference are explicitly identified rather than hidden.
