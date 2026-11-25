---
title: Lectures 08–09 — LLVM IR Data Layout, Types, and GEP
date: 2026-11-15 23:53:45 +0800
categories: [Notes, CS131 Compilers]
tags: [LLVM IR, Data Layout, getelementptr, Arrays, Structures]
media_subpath: /assets/img/posts/CS131 Compilers
math: true
---

# Lectures 08–09 — LLVM IR Data Layout, Types, and GEP

## 1. Scope and connection to the IR sequence

[Note 5]({% post_url 2026-11-15-Compiler-L7-IR-CFG-LLVM %}) introduced SSA values, `alloca`, and the move from IR5 toward LLVM. These two lectures explain how structured source data becomes typed memory and how `getelementptr` calculates addresses without dereferencing them.

The central question is:

> How can source-language structure be represented by contiguous memory while preserving a type-directed, target-independent way to compute offsets?

The answer combines **data layout（数据布局）**, LLVM aggregate types, and **`getelementptr`（GEP，按类型计算地址）**.

## 2. Struct representation

A C **struct（结构体）** stores its fields contiguously in declaration order. A value is commonly represented by the address of its first word.

Example:

```c
struct Point { int x; int y; };
struct Rect  { struct Point ll, lr, ul, ur; };
```

`Point` contains two 32-bit fields. `Rect` contains four contiguous `Point` values.

![Struct layout and member offsets](06_Lectures_08-09_LLVM_Data_Types_GEP/struct_layout_offsets.png)

If `%rcx` holds the base address of a `Rect`, access to `square.ul.y` adds:

```text
offset(ul) = sizeof(Point) + sizeof(Point) = 8 + 8 = 16
offset(y)  = sizeof(int) = 4
total      = 20
```

The two preceding points are `ll` and `lr`, so `ul` begins after two `Point` objects. If each 32-bit `Point` occupies 8 bytes, its base is at byte offset 16. Adding the 4-byte offset of `y` produces the slide's `20(%rcx)`.

At the assembly level, the access corresponds to a load such as:

```text
Movq 20(%rcx), ans
```

depending on the machine word width used by the target representation.

## 3. Padding and alignment

**Alignment（对齐）** constrains addresses for a type. **Padding（填充）** is unused space inserted to satisfy alignment.

![Padding and alignment](06_Lectures_08-09_LLVM_Data_Types_GEP/padding_alignment.png)

Consider:

```c
struct Example {
  int x;
  char a;
  char b;
  int y;
};
```

If `x` occupies the first four-byte word, placing `y` immediately after the two bytes would leave it at an unaligned address. The compiler inserts padding so `y` begins on the appropriate boundary.

The field offset is not always the sum of earlier field sizes. It is the sum of earlier field sizes plus required padding plus any enclosing-object alignment.

## 4. Copying structured values

C's nominal **call-by-value（按值调用）** for structs behaves more accurately like **copy-in/copy-out（复制传入、复制传出）**:

- caller copies the argument's fields into callee storage;
- callee operates on its local copy;
- results larger than a register are copied back into caller-provided storage.

For large records, compilers often use `memcpy` or generated loops.

**Call-by-reference（按引用调用）** passes an address instead:

```c
void mkSquare(struct Point *ll, int len, struct Rect *res)
```

The caller passes one word per pointer rather than copying all fields.

### Escaping stack references

This C function returns a pointer to local stack storage:

```c
int *bad() {
  int x = 4521;
  return &x;
}
```

After `bad` returns, its frame is no longer valid. Data that must outlive the call requires heap allocation or another lifetime-managed storage strategy.

## 5. Arrays

For a one-dimensional array:

$$
\operatorname{address}(A[i])
=
\operatorname{base}(A) + i \cdot \operatorname{sizeof(element)}.
$$

Thus:

```text
buf[i] ≡ *(buf + i * element_size)
```

A statically sized local array needs enough stack space for all elements.

For `int M[4][3]` in C, layout is **row-major（行优先）**:

```text
M[0][0], M[0][1], M[0][2],
M[1][0], M[1][1], M[1][2], ...
```

Therefore:

$$
\operatorname{addr}(M[i][j])
=
\operatorname{base}(M)
+ (i \cdot \text{columns}+j)\cdot\operatorname{sizeof}(int).
$$

For `M[4][3]`, the linear index is $3i+j$. Fortran traditionally uses column-major order. Java and ML represent nested arrays through arrays of references, so their layout is not one contiguous multidimensional block by default.

## 6. Bounds checks and strings

Safe languages may insert **array-bounds checks（数组边界检查）**. One representation stores the length before the data:

```text
[size = 7][A[0]][A[1]] ... [A[6]]
```

For index `i` and base pointer `arr`, the generated check must establish:

```text
0 <= i < size
```

Only then may the load execute. The extra load, comparison, and branch cost can sometimes be optimized or hoisted from an inner loop.

C strings are null-terminated global data. The bytes for `"foo"` are:

```text
102 111 111 0
```

Strings are often placed in read-only data. Writing through a pointer to a string literal is undefined behavior; mutable string data must be allocated first.

## 7. Tagged datatypes and pattern matching

A **tagged datatype（带标签的数据类型）** stores a constructor tag together with optional payload.

![Tagged datatype representation](06_Lectures_08-09_LLVM_Data_Types_GEP/tagged_datatype.png)

For:

```ocaml
type foo = Bar of int | Baz of int * foo
```

one representation uses a pointer to `(tag, data)`:

```text
Bar 3   → [tag 0 | 3]
Baz(4,f)→ [tag 1 | 4 | f]
```

### Compiling `switch`

A C `switch` compares the evaluated tag with each case value. A simple lowering uses cascading comparisons and branches:

```text
compute tag
compare tag with case_1 → branch to case_1 or next test
case_1 body
fall through or jump to merge
...
merge
```

If a `break` is omitted, source-level fallthrough must be preserved. Dense tag ranges can instead use a branch/jump table; sparse large cases can use binary search or hashing.

### Compiling pattern matching

ML pattern matching extends switch behavior:

- patterns can bind variables;
- patterns can nest;
- matching may fail and require a default case.

The compilation strategy flattens nested patterns into successive constructor tests. Once a pattern matches, the generated branch copies the relevant payload fields into the variables bound by the pattern.

## 8. LLVM aggregate types

LLVM's type grammar includes:

```text
t ::=
  void
  i1 | i8 | i64
  [N x t]
  fty
  {t1, t2, ..., tn}
  t*
  %Tident

fty ::= t (t1, ..., tn)
```

Examples:

| Meaning | LLVM type |
|---|---|
| Array of 4521 integers | `[4521 x i64]` |
| Two-dimensional integer array | `[3 x [4 x i64]]` |
| Length plus payload | `{ i64, [0 x i64] }` |
| Recursive C-style node | `%Node = type { i64, %Node* }` |
| Rect and Point | `%Rect = { %Point, %Point, %Point, %Point }`, `%Point = { i64, i64 }` |

A named structure type may be recursive because accesses go through references rather than values of infinite size.

The type describes layout and legal operations; it does not automatically perform array-bounds checks. Type information is primarily used to calculate pointer offsets.

## 9. `getelementptr`

**`getelementptr`（按类型索引的地址计算）** computes a pointer path through aggregate storage.

Its purpose is similar to x86 `leaq`: it computes an address without reading memory. Unlike plain byte arithmetic, the amount added depends on the LLVM types in the path.

Simple rectangle example:

![Rectangle GEP example](06_Lectures_08-09_LLVM_Data_Types_GEP/gep_rectangle.png)

```llvm
%tmp1 = getelementptr %Rect* %square, i32 0, i32 1
%tmp2 = getelementptr %Point* %tmp1, i32 0, i32 1
```

The first instruction:

- starts from a pointer to `%Rect`;
- index `0` stays at the pointed-to rectangle object;
- index `1` selects field `lr`.

The second:

- starts from a pointer to the selected `%Point`;
- index `0` stays at that point;
- index `1` selects field `y`.

The same address can be produced in one path:

```llvm
%tmp2 = getelementptr %Rect* %square, i32 0, i32 1, i32 1
```

### Worked nested GEP

![Nested GEP path](06_Lectures_08-09_LLVM_Data_Types_GEP/gep_nested.png)

Given:

```llvm
%RT = type { i32, [10 x [20 x i32]], i32 }
%ST = type { %RT, i32, %RT }

%arrayidx =
  getelementptr %ST* %s, i32 1, i32 2, i32 1, i32 5, i32 13
```

Start with pointer value `ADDR`.

| Index | Path meaning | Added offset |
|---:|---|---|
| `1` | Select `s[1]` | `size_ty(%ST)` |
| `2` | Select field `Z` | `size_ty(%RT) + size_ty(i32)` to skip fields `X` and `Y` |
| `1` | Select field `B` inside `RT` | `size_ty(i32)` to skip field `A` |
| `5` | Select row 5 of `B` | `5 * 20 * size_ty(i32)` |
| `13` | Select column 13 | `13 * size_ty(i32)` |

The final address is:

$$
\begin{aligned}
ADDR
&+ \operatorname{size}(ST)\\
&+ \operatorname{size}(RT)+\operatorname{size}(i32)\\
&+ \operatorname{size}(i32)\\
&+ 5\cdot20\cdot\operatorname{size}(i32)\\
&+ 13\cdot\operatorname{size}(i32).
\end{aligned}
$$

### What GEP does not do

GEP never dereferences the calculated address and never follows a pointer stored inside an aggregate. To access the pointee of a nested pointer, the program must use `load` and then apply another GEP.

## 10. `bitcast`

`bitcast` reinterprets a pointer as another pointer type:

```llvm
%rect3 = type { i64, i64, i64 }
%rect2 = type { i64, i64 }

%1 = alloca %rect3
%2 = bitcast %rect3* %1 to %rect2*
%3 = getelementptr %rect2* %2, i32 0, i32 1
```

This can be useful when source types are more expressive than LLVM's direct type system, such as subtyping or generic types. It is potentially unsafe: an incorrect interpretation can cause segmentation faults or silent memory corruption.

## 11. LLVMlite constraints

LLVMlite is a deliberately smaller target used by the course:

- `i1`, `i64`, and pointer types lower to eight-byte quadwords;
- raw `i8` values are not allowed; use `i8*`;
- arrays and structures are laid out sequentially;
- globals use `%rip`-relative addressing;
- calls follow the x64 ABI;
- `getelementptr` and `bitcast` are included;
- each `%uid` is initially mapped to a stack slot in the course backend.

Full LLVM supports more integer widths, vectors, packed structures, `select`, exception/switch control flow, opaque pointer syntax, and intrinsics.

Real LLVM requires GEP index constants to carry an `i32` annotation. LLVMlite preserves the annotation syntactically for Clang compatibility but treats the indices as `i64` values.

## 12. OCaml/LLVM structural analogy

The course's IR5 type declarations are not a complete LLVMlite implementation, but they show the structural direction:

```ocaml
type block = {
  insns : (uid * insn) list;
  terminator : terminator
}

type fdecl = { param : uid list; cfg : cfg }
```

These mirror LLVM's distinction between typed local values, function-local control flow, and named function declarations. The actual LLVMlite parser/interpreter/compiler lives in the homework codebase, not in `ir5.ml`.

## 13. Easily confused concepts

| Concept A | Concept B |
|---|---|
| Struct layout | Field access: layout assigns offsets; access uses an offset |
| Padding | Payload: padding contains no source field |
| Copy-in/copy-out | Call-by-reference: copy fields versus pass an address |
| Row-major | Column-major: linearization order differs |
| GEP | `load`: compute address versus read memory |
| GEP index `0` | “Do nothing” in every position: index `0` still has a type-directed meaning |
| `bitcast` | Safe conversion: bitcast may change the interpretation of memory |
| `alloca` pointer | Stored value: pointer/reference versus pointee contents |

## 14. Typical mistakes and edge cases

- Computing a struct offset without padding.
- Treating `M[i][j]` as `base + (i+j)`.
- Using a row length instead of the full row width in a flattened index.
- Assuming GEP follows a linked-list `next` pointer automatically.
- Reading the memory at a GEP result before executing a `load`.
- Forgetting that every GEP index after the pointer traversal still depends on the current aggregate type.
- Using `bitcast` as if it performed a checked type conversion.
- Returning a pointer to a dead stack frame.
- Treating LLVM aggregate type information as a runtime bounds check.

## 15. Independent-revision checklist

You should be able to:

- **Compute**: field offsets with alignment and padding.
- **Derive**: array and multidimensional-array addresses.
- **Explain**: copy-in/copy-out, call-by-reference, and escaping stack pointers.
- **Decode**: tagged values and switch/pattern lowering.
- **Parse and write**: basic LLVM aggregate types.
- **Trace**: multi-index GEP paths and sum each type-sized increment.
- **Distinguish**: GEP from `load`, and `bitcast` from checked conversion.
- **Compare**: LLVMlite restrictions with full LLVM.

## 16. Sources

- Course material:
  - `lec08.pdf`, pp. 17–50.
  - `lec09.pdf`, pp. 4–26.
- Local structural reference:
  - `Notes/Reference_Code/lec06/ir5.ml`: `block`, `cfg`, `gdecl`, `fdecl`, `program`.
- Official documentation:
  - https://www.seas.upenn.edu/~cis5521/25sp/hw3/doc/llvmlite.html
  - https://llvm.org/docs/LangRef.html#getelementptr-instruction
- Figures:
  - `lec08.pdf` p. 20 → `struct_layout_offsets.png`.
  - `lec08.pdf` p. 21 → `padding_alignment.png`.
  - `lec08.pdf` p. 33 → `tagged_datatype.png`.
  - `lec09.pdf` p. 15 → `gep_rectangle.png`.
  - `lec09.pdf` p. 16 → `gep_nested.png`.

No local LLVMlite implementation was available. Code-scale claims are limited to the provided IR structural reference and displayed LLVM snippets.
