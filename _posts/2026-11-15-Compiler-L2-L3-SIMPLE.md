---
title: Lectures 02–03 — SIMPLE Interpreters and Translation
date: 2026-11-15 23:49:13 +0800
categories: [Notes, CS131 Compilers]
tags: [SIMPLE Language, Interpreter, Translation, OCaml]
media_subpath: /assets/img/posts/CS131 Compilers
math: true
---

# Lectures 02–03 — SIMPLE Interpreters and Translation

## 1. Scope and purpose

These two lectures make the interpreter idea concrete. Lecture 2 defines the SIMPLE language, represents it as OCaml data, and evaluates it. Lecture 3 changes the output of the same structural traversal from a computed result into generated OCaml source text.

The central contrast is:

- **Interpretation（解释执行）**: evaluate the AST directly.
- **Translation / compilation（翻译/编译）**: emit another program that, when executed, has the same behavior.

The shared foundation is the AST representation introduced in [Note 1]({% post_url 2026-11-15-Compiler-L1-Interpreters %}). This note takes over as the primary explanation of SIMPLE semantics and source-to-source translation.

## 2. Syntax and semantics

**Syntax（语法）** determines which character sequences or token sequences form legal programs. **Semantics（语义）** determines what a legal program does.

The running example is factorial in SIMPLE:

```text
X = 6;
ANS = 1;
whileNZ (X) {
  ANS = ANS * X;
  X = X + -1;
}
```

The **operational semantics（操作语义）** describe execution as state transitions. A command starts in one program state and produces a new state.

![SIMPLE grammar](02_Lectures_02-03_SIMPLE/simple_grammar.png)

The concrete grammar has two major nonterminals:

- `<exp>`: expressions that produce integer values.
- `<cmd>`: commands that modify state.

The surface syntax contains parentheses and keywords, but the AST records only meaning-bearing structure.

## 3. Syntax representation

The local `simple.ml` defines the expression AST as:

```ocaml
type exp =
  | Add of exp * exp
  | Mult of exp * exp
  | Lt of exp * exp
  | Cst of int
  | Var of var
```

and commands as:

```ocaml
type cmd =
  | Skip
  | Assn of var * exp
  | IfNZ of exp * cmd * cmd
  | WhileNZ of exp * cmd
  | Seq of cmd * cmd
```

This representation distinguishes:

| Construct | Meaning |
|---|---|
| `Skip` | Do nothing |
| `Assn (x, e)` | Evaluate `e`, then store its value in variable `x` |
| `IfNZ (e, c1, c2)` | Execute `c1` if `e` is nonzero; otherwise execute `c2` |
| `WhileNZ (e, c)` | Repeatedly execute `c` while `e` is nonzero |
| `Seq (c1, c2)` | Execute `c1`, then execute `c2` |

The assignment constructor accepts only a variable on the left. A phrase such as `1 + 1 = 2` is therefore not representable, rather than being represented and rejected later.

## 4. Program state

**State（程序状态）** records the current value of every SIMPLE variable. The local implementation uses a function:

```ocaml
type state = var -> int

let empty_state : state = fun x -> 0

let lookup_state (s : state) (x : var) : int = s x

let update_state (s : state) (y : var) (v : int) : state =
  fun x -> if x = y then v else lookup_state s x
```

Type signatures:

- `empty_state : state`
- `lookup_state : state -> var -> int`
- `update_state : state -> var -> int -> state`

`update_state` does not mutate an OCaml map object. It returns a new function that behaves like `s` except at variable `y`. This functional representation still models mutable source-language state because every command receives the old state and returns the next state.

Important semantic convention: `empty_state` maps every variable to `0`. Reading an unassigned variable therefore produces `0`.

### Worked state example

Starting from `empty_state`, execute:

```text
X = 4;
Y = X + 2;
X = Y * X;
```

| Step | Resulting observations |
|---|---|
| Initial | `X = 0`, `Y = 0` |
| After `X = 4` | `X = 4`, `Y = 0` |
| After `Y = X + 2` | `X = 4`, `Y = 6` |
| After `X = Y * X` | `X = 24`, `Y = 6` |

The right-hand side of an assignment is evaluated in the current state before the update is applied.

## 5. Expression evaluation

The local `simple.ml` implements:

```ocaml
let rec interpret_exp (s : state) (e : exp) : int =
  match e with
  | Add (l, r) -> interpret_exp s l + interpret_exp s r
  | Mult (l, r) -> interpret_exp s l * interpret_exp s r
  | Lt (l, r) -> if interpret_exp s l < interpret_exp s r then 1 else 0
  | Cst n -> n
  | Var x -> lookup_state s x
```

This is a recursive tree traversal:

1. A constant evaluates to its stored integer.
2. A variable evaluates by looking up its current value in state.
3. A binary operation evaluates both children under the same state, then combines the results.
4. Comparison returns `1` for true and `0` for false.

The `Lt` case exists because the language's value domain is only `int`. There is no separate `bool` result type in this interpreter.

### Worked expression

For `example_exp_1 = Mult (Add (Cst 5, Cst 8), Var "x")` and state `{x = 2}`:

```text
Add(Cst 5, Cst 8) → 13
Mult(Add(...), Var "x") → 13 * 2 = 26
```

## 6. Command execution

The main command function is:

```ocaml
val interpret_cmd : state -> cmd -> state
```

Its cases have these meanings:

### `Skip`

```ocaml
| Skip -> s
```

No state change.

### Assignment

```ocaml
| Assn (x, e) ->
    update_state s x (interpret_exp s e)
```

Evaluate the expression in the current state, then return a state whose binding for `x` is replaced.

### Conditional

```ocaml
| IfNZ (cond, thenn, elze) ->
    if interpret_exp s cond <> 0
    then interpret_cmd s thenn
    else interpret_cmd s elze
```

Only one branch runs, and either branch receives the same initial state `s`.

### Sequencing

For `Seq (l, r)`, the implementation computes:

```text
s'  = interpret_cmd s l
s'' = interpret_cmd s' r
```

The second command sees every update made by the first. This state threading is the operational meaning of `;`.

### Loop

`WhileNZ (cond, body)` is defined by unfolding it into a conditional:

```ocaml
interpret_cmd s
  (IfNZ (cond, Seq (body, WhileNZ (cond, body)), Skip))
```

One loop iteration therefore has the semantics:

1. Evaluate `cond` in the current state.
2. If it is zero, return the current state.
3. Otherwise execute `body`.
4. Re-run the same loop with the updated state.

### Factorial trace

For factorial of `3`, with the initial state mapping every variable to `0`:

| Stage | `X` | `ANS` |
|---|---:|---:|
| Execute `X = 3` | 3 | 0 |
| Execute `ANS = 1` | 3 | 1 |
| Iteration 1 | 2 | 3 |
| Iteration 2 | 1 | 6 |
| Iteration 3 | 0 | 6 |
| Loop condition becomes zero | 0 | 6 |

After the loop, `ANS = 6`.

## 7. From interpretation to translation

Both functions below traverse the same SIMPLE AST, but their outputs differ:

```ocaml
val translate_exp : exp -> string
val translate_cmd : cmd -> string
```

The strings returned by `translate_exp` are intended to contain an OCaml expression of type `int`. The strings returned by `translate_cmd` are intended to contain an OCaml command of type `unit`.

This type contract is a translation invariant. A malformed translation can generate syntactically valid-looking text that is ill-typed, such as replacing the conditional encoding of `<` with a Boolean-valued expression where an `int` is required.

### Expression translation

`translate_exp` follows the AST recursively:

| SIMPLE AST | Emitted OCaml shape |
|---|---|
| `Add (l, r)` | `(<l>) + (<r>)` |
| `Mult (l, r)` | `(<l>) * (<r>)` |
| `Lt (l, r)` | `if (<l>) < (<r>) then 1 else 0` |
| `Cst n` | `(<n>)` |
| `Var x` | The translated variable access |

Parentheses are emitted around subexpressions so that OCaml evaluation preserves the tree structure.

### Command translation

`translate_cmd` maps:

| SIMPLE command | Intended emitted OCaml |
|---|---|
| `Skip` | `()` |
| `Assn (x, e)` | `x := (<e>)` |
| `IfNZ (e, c1, c2)` | `if (<e>) <> 0 then (<c1>) else (<c2>)` |
| `WhileNZ (e, c)` | `while (<e>) <> 0 do <c> done` |
| `Seq (c1, c2)` | `(<c1>); (<c2>)` |

The conditional translation preserves SIMPLE's integer-truth convention by comparing with zero. Sequencing preserves state order by placing the translated commands in OCaml sequence.

## 8. The local `translate.ml` is incomplete

`translate.ml` explicitly says it is a work-in-progress file containing intentional bugs. Its structural translation is useful, but it is not a finished compiler for the current local `simple.ml`.

### Verified inconsistencies

1. `translate_var (x : var) : string = x` returns the variable name directly. If variables are represented as references, an expression needs dereferencing and assignment needs an assignable reference.
2. `vars_of_exp` pattern matches `Lit` and `Mul`, while the current root `simple.ml` constructors are `Cst` and `Mult`. The files are not internally synchronized.
3. The intended `translate_prog` wrapper begins after an opening comment delimiter that is never closed in the local file. As a result, the wrapper shown at the end of the file is inactive source text rather than active code.

The intended role of `vars_of_cmd` is still clear: collect every variable mentioned by assignments and expressions so generated OCaml can declare corresponding `int ref` values before running the translated command.

Do not silently “repair” this source in a revision exercise. The correct task is to identify the broken invariant and decide what valid generated OCaml would look like.

## 9. A semantic optimization example

`simple.ml` also contains:

```ocaml
val optimize : cmd -> cmd
```

The optimizer preserves final-state behavior while removing some unnecessary work. For example:

- `Assn (x, Var x)` becomes `Skip`, because assigning a variable to itself has no effect.
- An `IfNZ` with constant zero condition keeps only the else branch.
- A sequence with `Skip` removes that `Skip`.

Optimization is supplementary to the main interpreter mechanism, but it demonstrates the correctness criterion

$$
\operatorname{interpret}(s,c)
=
\operatorname{interpret}(s,\operatorname{optimize}(c))
$$

for every initial state $s$.

## 10. Easily confused concepts

| Concept A | Concept B |
|---|---|
| Expression evaluation | Command execution: expressions return `int`; commands return a new `state`. |
| Source syntax `;` | OCaml `;`: both execute in order, but each is evaluated within its own language. |
| Source assignment `=` | OCaml update `:=`: one updates SIMPLE state; the other mutates a reference. |
| Functional state map | Physical memory mutation: the SIMPLE model can be represented by a function, even though the source language is imperative. |
| Interpreter | Translator: the first evaluates the AST; the second produces source text for another execution. |
| `1`/`0` truth values | A separate Boolean type: SIMPLE's interpreter uses integers for both. |

## 11. Typical mistakes and edge cases

- Evaluating assignment's right-hand side after updating the target variable. The expression must use the old state.
- Running both branches of `IfNZ`. Exactly one branch executes.
- Passing the original state instead of the intermediate state through `Seq`.
- Treating `whileNZ` as a language primitive in the OCaml implementation. The local interpreter implements it by unfolding it into a conditional.
- Forgetting that all variables initially read as `0`.
- Translating a comparison directly into an OCaml `bool` expression when the expression contract requires an `int`.
- Mistaking generated OCaml strings for values. `translate_exp` returns code text; it does not evaluate that text.
- Assuming `translate.ml` compiles against the current `simple.ml`. Its stale constructor names make that assumption false.

## 12. Independent-revision checklist

You should be able to:

- **Recall**: the `exp` and `cmd` constructors and the type `state = var -> int`.
- **Explain**: why expressions return `int`, commands return `state`, and translation commands return `unit`.
- **Trace**: a SIMPLE expression or command sequence through a concrete state.
- **Derive**: a full factorial state trace.
- **Translate manually**: each AST constructor into its intended OCaml code shape.
- **Debug**: state-order, branch-selection, loop-termination, and type-invariant mistakes.
- **Distinguish**: interpreter behavior from code-generation behavior.

## 13. Sources

- Course material:
  - `lec02.pdf`, pp. 3–7.
  - `lec03.pdf`, p. 2.
- Local source code:
  - `simple.ml`: `type exp`, `type cmd`, `type state`, `empty_state`, `lookup_state`, `update_state`, `interpret_exp`, `interpret_cmd`, `interpret_and_inspect`, `optimize`.
  - `translate.ml`: `translate_var`, `translate_exp`, `translate_cmd`, `vars_of_exp`, `vars_of_cmd`, and the inactive intended `translate_prog`.
- Figure:
  - `lec02.pdf` p. 5 → `simple_grammar.png`.

The state-observation table, factorial trace, and comparison tables are supplementary worked explanations derived from the local implementation. The incomplete status and exact constructor mismatch in `translate.ml` are directly verified from the local source.
