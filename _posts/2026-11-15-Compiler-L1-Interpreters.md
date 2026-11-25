---
title: Lecture 01 — Compilers, Interpreters, and OCaml
date: 2026-11-15 23:43:25 +0800
categories: [Notes, CS131 Compilers]
tags: [Compiler Pipeline, Interpreter, OCaml, AST]
media_subpath: /assets/img/posts/CS131 Compilers
math: true
---

# Lecture 01 — Compilers, Interpreters, and OCaml

## 1. What a compiler does

A **compiler（编译器）** is a program that translates source code written in one language into a target program written in another language. The target is usually lower-level machine code, assembly, bytecode, or another source language.

The source language is designed for human expression. Its syntax can be redundant and abstract, and it may leave machine-level decisions unspecified. The target language is designed around an execution model and may expose registers, memory, calling conventions, and explicit control flow.

Compilation still has to preserve meaning. If $P$ is a source program and $C(P)$ is its compiled target program, correctness means that source and target semantics agree:

$$
\llbracket P \rrbracket_{\text{source}}
=
\llbracket C(P) \rrbracket_{\text{target}}.
$$

This is the central invariant behind every stage in the course. Translation is not textual rewriting alone; it is manipulation of program representations whose meaning must remain stable.

## 2. The compiler pipeline

A practical compiler translates through several representations rather than jumping directly from source text to machine instructions.

![Simplified compiler structure](01_Lecture_01_Interpreters/compiler_pipeline.png)

The pipeline in `lec01.pdf` p. 20 separates the compiler into:

- **Front end（前端）**: lexical analysis, parsing, and construction of an Abstract Syntax Tree（抽象语法树，AST）. It is primarily source-language dependent.
- **Middle end（中端）**: translation to an Intermediate Representation（中间表示，IR） and machine-independent analysis or optimization.
- **Back end（后端）**: target-specific code generation, instruction selection, and later assembly production.

The central term **Intermediate Representation（中间表示，IR）** denotes a program representation designed for analysis, transformation, or code generation. A useful IR hides irrelevant target details while preserving enough structure to optimize the program.

As compilation proceeds, representations become:

- less source-language specific;
- more target-machine specific;
- more explicit about evaluation order, control flow, and storage.

Lecture 1's simplified pipeline is expanded later into a more detailed set of stages:

```text
character stream
  → lexical analysis
  → token stream
  → parsing
  → abstract syntax
  → semantic analysis
  → intermediate code
  → optimization and target-specific preparation
  → assembly
```

The details of **Lexical Analysis（词法分析）** and **Parsing（语法分析）** appear in Lectures 10–13. IR design begins in Lecture 6 and becomes central in Lectures 6–9.

## 3. Compilation is not only `source → machine code`

The compiler is one part of a larger toolchain.

![Compile, assemble, link, and execute](01_Lecture_01_Interpreters/compile_assemble_link.png)

The stages are:

1. Translate source code such as `foo.c` into assembly `foo.s`.
2. Assemble `foo.s` into relocatable object code `foo.o`.
3. Link object code with library code.
4. Load the resulting executable image into memory.

This distinction matters when interpreting compiler output. A compiler may produce assembly, bytecode, another source language, or an internal representation that is later consumed by other tools.

The local handout contains three factorial programs in C:

- `lec01/factorial.c`: iterative factorial using a loop.
- `lec01/factorial-rec.c`: recursive factorial.
- `lec01/factorial64.c`: iterative factorial using `long long int`.

`lec01/Makefile` demonstrates a toolchain path that emits LLVM IR and assembly at several optimization levels. The exact compiler flags are platform-specific and are not the conceptual focus.

### A useful comparison

| Form | Main strength | Main cost |
|---|---|---|
| C source | Readable, abstract, expressive | Does not directly describe machine state |
| Assembly | Explicit instructions, registers, and control flow | Difficult to write and port |
| IR | Machine-independent analysis and transformation | Requires correct lowering and later code generation |
| Machine code | Directly executable | Poor human readability and target-specific |

## 4. Object language and metalanguage

An **object language（对象语言）** is the language being represented or manipulated. A **metalanguage（元语言）** is the language used to implement that representation or manipulation.

In this part of the course:

- SIMPLE is the object language.
- OCaml is the metalanguage for its interpreter and translator.

The same distinction appears in compiler construction more generally: a compiler such as Clang manipulates C/C++ while being implemented in C++. A metacircular interpreter is an interpreter for a language written in that same language.

The distinction prevents a common confusion: when writing an interpreter, a `let` or function definition in the OCaml source may implement behavior of the object language, but it is not itself an object-language command.

## 5. Concrete syntax and abstract syntax

**Concrete syntax（具体语法）** describes the exact textual form accepted from a programmer. It includes keywords, punctuation, whitespace rules, and grammar productions.

**Abstract syntax（抽象语法）** retains the structure needed to understand the program and discards irrelevant surface details.

For example, the following three inputs:

```text
a + b
(a + ((b)))
((a) + (b))
```

can all represent the same abstract operation: add `a` and `b`.

An **Abstract Syntax Tree（抽象语法树，AST）** is a tree-shaped program representation. Internal nodes represent operations or language constructs; children represent operands or subprograms.

An AST does not need tokens for every parenthesis. Parentheses affect how the AST is built; once the tree records grouping explicitly, separate `Parens` nodes are usually unnecessary.

## 6. OCaml algebraic datatypes and pattern matching

An **algebraic data type（代数数据类型）** is a type built from named alternatives, each of which may carry data. This is a direct fit for program syntax: an expression can be a constant, variable, addition, multiplication, or comparison.

The local file `simple.ml` defines:

```ocaml
type exp =
  | Add of exp * exp
  | Mult of exp * exp
  | Lt of exp * exp
  | Cst of int
  | Var of var
```

The type is recursive: `Add`, `Mult`, and `Lt` contain smaller `exp` values. A tree is therefore represented directly in the type system.

An example AST from `simple.ml` is:

```ocaml
let example_exp_1 : exp =
  Mult (Add (Cst 5, Cst 8), Var "x")
```

It represents:

```text
      *
     / \
    +   x
   / \
  5   8
```

**Pattern matching（模式匹配）** examines which constructor formed a value and binds its components:

```text
Add (left, right) → inspect or recursively process left and right
Cst n             → use the integer constant n
Var name          → use the variable name
```

Recursive tree processing follows the recursive type definition: process an `Add` node by recursively processing its left and right children, then combine their results according to addition. Note 2 develops the complete SIMPLE evaluator with state and command semantics.

### Why OCaml suits this task

OCaml provides:

- static typing that exposes incompatible tree cases early;
- concise recursive datatype definitions;
- exhaustive-style pattern matching;
- functions as ordinary values;
- modules for organizing larger compiler components.

The definition `simple.ml` also prevents illegal assignment shapes by storing commands as `Assn of var * exp` rather than allowing an arbitrary expression on the left. This is a general representation-design principle: make invalid states difficult or impossible to construct.

## 7. Interpreters

An **interpreter（解释器）** evaluates a represented program instead of translating it into a separate target-language program. In Lecture 1, the important idea is representational:

1. Parse or construct a program as an AST.
2. Traverse the AST.
3. Perform the operation represented at each node using metalanguage facilities.

An interpreter and a compiler can begin with the same AST. They diverge afterward:

- the interpreter evaluates the tree directly;
- the compiler translates the tree into another representation and eventually executable code.

The full SIMPLE implementation—state, expression evaluation, command execution, assignments, conditionals, sequencing, and loops—is the primary topic of Note 2, *Lectures 02–03: SIMPLE Interpreters and Translation*. This note stops at the representation and traversal idea.

## 8. Easily confused concepts

| Concept A | Concept B | Key distinction |
|---|---|---|
| Source code | Token stream | Source code is characters; tokens are classified lexical units. |
| Concrete syntax | Abstract syntax | Concrete syntax describes accepted text; abstract syntax records meaning-bearing structure. |
| Parser | Interpreter | A parser constructs an AST; an interpreter evaluates a represented program. |
| AST | IR | An AST mirrors source-language structure; an IR is designed for later analysis, optimization, or code generation. |
| Compilation | Assembly/linking | Compilation is one pipeline stage; assembly and linking are separate toolchain stages. |
| Object language | Metalanguage | One language is being implemented; the other implements it. |

## 9. Typical reasoning errors

- Treating an IR as merely a different pretty-printed AST. An IR is selected for specific downstream transformations and usually removes or restructures source syntax.
- Assuming every compiler produces machine code directly. Bytecode compilers, source-to-source translators, and JIT pipelines are still compilers.
- Assuming that parentheses must remain as AST nodes. Their effect is encoded in tree structure.
- Confusing syntax with semantics. A grammar can accept a program whose behavior later fails type checking or produces an error.
- Confusing “the compiler emitted assembly” with “the program is runnable.” Linking and loading are additional steps.

## 10. Independent-revision checklist

You should be able to:

- **Define**: compiler, interpreter, IR, concrete syntax, abstract syntax, AST, object language, metalanguage.
- **Explain**: why compilation uses staged representations and where front end, middle end, and back end fit.
- **Trace**: source code through compilation, assembly, linking, and loading.
- **Interpret**: a small OCaml AST constructor expression and draw the corresponding tree.
- **Reason**: why recursive datatypes and pattern matching are suitable for processing programs.
- **Distinguish**: direct interpretation from translation into another representation.

You do not need to reproduce the full SIMPLE interpreter from this note; that belongs to Note 2.

## 11. Sources

- Course material: `lec01.pdf`, pp. 12–24 and 25–35.
- Local code:
  - `simple.ml`: `type exp` and `example_exp_1`; introductory AST example only.
  - `lec01/simple/bin/simple.ml`: exercise skeleton.
  - `lec01/simple/bin/simple-soln.ml`: reference implementation; used only for AST/constructor context.
  - `lec01/factorial.c`, `lec01/factorial-rec.c`, `lec01/factorial64.c`.
  - `lec01/Makefile`.
- Figures:
  - `lec01.pdf` p. 20 → `compiler_pipeline.png`.
  - `lec01.pdf` p. 22 → `compile_assemble_link.png`.

Supplementary explanation is limited to the concise correctness equation and the comparison table. All pipeline stages, terminology, AST examples, and OCaml claims are represented in the lecture pages and local source.
