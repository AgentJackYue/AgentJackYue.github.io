---
title: Lecture 11 — Context-Free Grammars, LL(1), and LR Parsing
date: 2026-11-15 23:55:54 +0800
categories: [Notes, CS131 Compilers]
tags: [Parsing, Context-Free Grammar, LL1, Recursive Descent, LR]
media_subpath: /assets/img/posts/CS131 Compilers
math: true
---

# Lecture 11 — Context-Free Grammars, LL(1), and LR Parsing

## 1. Parsing and the limits of lexical structure

**Parsing（语法分析）** consumes a token stream and produces an Abstract Syntax Tree（抽象语法树，AST）.

The lexer decides how characters form tokens. The parser decides how tokens form nested language constructs:

```text
source characters
  → tokens
  → syntactic structure
  → AST
```

Parsing does not by itself establish variable scope, type correctness, or initialization. Those are later semantic checks.

Regular expressions and finite automata cannot recognize balanced recursive structure. A DFA has finitely many states and cannot maintain an unbounded nesting count. Therefore programming-language nesting requires a more expressive formalism.

## 2. Context-Free Grammars

A **Context-Free Grammar（上下文无关文法，CFG）** consists of:

- a finite set of **terminals（终结符）**, usually tokens;
- a finite set of **nonterminals（非终结符）**, representing syntactic categories;
- one designated start nonterminal;
- productions of the form
  $$
  A \to \alpha,
  $$
  where $A$ is a nonterminal and $\alpha$ is a string of terminals and nonterminals.

Example: balanced parentheses:

```text
S → (S)S
S → ε
```

`S` denotes a balanced sequence. The recursion permits arbitrary nesting.

Example: parenthesized sums:

```text
S → E + S | E
E → number | ( S )
```

This grammar has:

- nonterminals `S`, `E`;
- terminals `+`, `number`, `(`, `)` and ε where applicable;
- start symbol `S`;
- four productions after expanding `|`.

## 3. Derivations

A **derivation（推导）** begins with the start symbol and repeatedly replaces a nonterminal by one of its production right-hand sides.

For grammar:

```text
S → E + S | E
E → number | ( S )
```

a leftmost derivation of `(1 + 2 + (3 + 4)) + 5` starts:

```text
S
⇒ E + S
⇒ (S) + S
⇒ (E + S) + S
⇒ (1 + S) + S
⇒ (1 + E + S) + S
⇒ (1 + 2 + S) + S
...
```

The derivation continues until only terminal tokens remain.

A **leftmost derivation（最左推导）** always expands the leftmost nonterminal. A **rightmost derivation（最右推导）** expands the rightmost nonterminal.

The order of expansion does not change the final parse tree.

## 4. Parse trees and ASTs

A **parse tree（语法树 / 具体语法树）** records the complete grammatical derivation:

- each internal node is a nonterminal;
- each child corresponds to a symbol in a production;
- leaves contain terminals;
- reading the terminal leaves in order reconstructs the input.

An AST removes grammar-only nodes and punctuation, retaining semantic operations and values.

![Parse tree and abstract syntax tree](08_Lecture_11_Parsing_CFG_LL1/parse_tree_vs_ast.png)

For:

```text
(1 + 2 + (3 + 4)) + 5
```

the parse tree contains intermediate `S` and `E` nodes. The AST contains only addition nodes and numeric leaves.

## 5. Nonproductive grammars

A grammar can be syntactically well formed but recognize no finite strings.

```text
S → E
E → S
```

There is no terminal base case, so no finite derivation can terminate.

```text
S → (S)
```

also lacks a nonrecursive base case. It can only rewrite forever.

Every productive nonterminal should eventually have a finite derivation containing only terminals.

## 6. Associativity and ambiguity

For grammar:

```text
S → E + S | E
E → number | ( S )
```

the recursive `S` occurs on the right of `+`, so `1 + 2 + 3` parses as:

```text
1 + (2 + 3)
```

This is **right associativity（右结合性）**.

To make `+` left-associative, put recursion on the left:

```text
S → S + E | E
```

An **ambiguous grammar（二义文法）** gives one input more than one parse tree.

```text
S → S + S | ( S ) | number
```

can derive `1 + 2 + 3` as either:

```text
(1 + 2) + 3
1 + (2 + 3)
```

Multiple derivation orders alone do not imply ambiguity. Ambiguity means multiple distinct parse trees.

### Precedence ambiguity

For:

```text
S → S + S | S * S | ( S ) | number
```

the input:

```text
1 + 2 * 3
```

has two trees:

```text
(1 + 2) * 3 = 9
1 + (2 * 3) = 7
```

![Ambiguity changes precedence](08_Lecture_11_Parsing_CFG_LL1/precedence_ambiguity.png)

Grammar structure therefore determines meaning, not just accepted strings.

### Eliminating ambiguity

The slide grammar declares:

- `*` higher precedence than `+`;
- `+` left-associative;
- `*` right-associative.

One grammar with those choices is:

```text
S0 → S0 + S1 | S1
S1 → S2 * S1 | S2
S2 → number | ( S0 )
```

Higher-precedence operators occur farther from the start symbol.

## 7. LL(1) parsing

**LL(1)** means:

- **L**eft-to-right scanning;
- **L**eftmost derivation;
- one lookahead token.

An LL(1) parser is **top-down（自顶向下）**: it starts at the start symbol and predicts the production needed to match the next token.

The sum grammar from Section 3 is not naturally LL(1). With lookahead `(`, the parser cannot immediately decide between:

```text
S → E + S
S → E
```

because both choices begin with `E`, and `E` may itself begin with `(`.

### Left factoring

Factor the common `E` prefix:

```text
S  → E S'
S' → ε | + S
E  → number | ( S )
```

### Left-recursion elimination

A recursive-descent parser cannot directly parse:

```text
S → S + E | E
```

because expanding `S` immediately requires expanding `S` again, causing infinite recursion.

The left-factored grammar above is recursive on `S'`, which appears after the `+` token and therefore has consumed input before recursing.

## 8. FIRST and FOLLOW

For a production $A \to \alpha$:

- `FIRST(α)` contains terminals that can begin strings derived from α.
- If α can derive ε, table entries also depend on `FOLLOW(A)`.
- `FOLLOW(A)` contains terminals that can appear immediately after A in some sentential form.

For the LL(1) grammar:

```text
T  → S$
S  → E S'
S' → ε | + S
E  → number | ( S )
```

the slide gives:

```text
FIRST(T) = FIRST(S)
FIRST(S) = FIRST(E)
FIRST(S') = {+}
FIRST(E) = {number, (}

FOLLOW(S') = FOLLOW(S)
FOLLOW(S) = {$, )} ∪ FOLLOW(S')
```

These set equations are solved as a fixed point by repeatedly adding newly discovered terminals until no set grows.

### Predictive parse table

![LL(1) predictive parse table](08_Lecture_11_Parsing_CFG_LL1/ll1_table.png)

| Nonterminal | `number` | `+` | `(` | `)` | `$` |
|---|---|---|---|---|---|
| `T` | `T → S$` |  | `T → S$` |  |  |
| `S` | `S → E S'` |  | `S → E S'` |  |  |
| `S'` |  | `S' → +S` |  | `S' → ε` | `S' → ε` |
| `E` | `E → number` |  | `E → (S)` |  |  |

If one table cell contains two different productions, the grammar is not LL(1).

## 9. Recursive-descent implementation

`lec11/code/handwritten.ml` implements the LL(1) method directly.

The token stream abstraction is:

```ocaml
type 'a stream = {
  peek : unit -> 'a;
  read : unit -> 'a
}
```

`parse : token stream -> ast` has mutually recursive helper functions:

- `parse_T`: requires a complete expression followed by `EOF`;
- `parse_S`: parses an `E` prefix and passes it to `parse_S'`;
- `parse_S' prefix`: handles `+ S`, `)`, or `EOF`;
- `parse_E`: handles `number` or `( S )`.

The key continuation step is:

```ocaml
and parse_S' prefix =
  match s.peek () with
  | PLUS ->
      ignore (s.read ());
      let rest = parse_S () in
      Plus (prefix, rest)
  | RPAREN | EOF -> prefix
  | _ -> raise (ParseError "expected '+' or ')'")
```

The already-parsed prefix is passed forward until the parser knows whether another `+` follows. This is the code-level form of the factored `S'` nonterminal.

## 10. Menhir parser and AST

`lec11/code/ast.ml` defines:

```ocaml
type bexp =
  | Var of string
  | True
  | False
  | And of bexp * bexp
  | Or of bexp * bexp
  | Imp of bexp * bexp
  | Not of bexp
```

The active `parser.mly` encodes precedence through layered nonterminals:

- `b1`: implication, right-recursive;
- `b2`: OR, left-recursive;
- `b3`: AND, left-recursive;
- `b4`: negation;
- `b5`: atoms and parentheses.

This gives the intended precedence:

```text
~  >  &  >  |  >  ->
```

`ambparser.mly` instead uses:

```text
bexp → bexp OP bexp
```

for every binary operator, producing a shorter but ambiguous teaching grammar. It is not part of the active Dune Menhir stanza.

### Source positions and AST printing

`lexer.mll` attaches a `Range.t` to every token and resets lexer positions at file start. `range.ml` stores `(file, start_position, end_position)`.

`string_of_bexp : bexp -> string` prints the AST and reintroduces parentheses only when an inner operator has lower precedence than its surrounding context. `full_parens` forces parentheses for inspection.

## 11. Introduction to LR parsing

**LR(k)** means:

- Left-to-right scanning;
- rightmost derivation constructed in reverse;
- `k` lookahead tokens.

LR parsers are **bottom-up（自底向上）** and use **shift-reduce parsing（移进-归约分析）**.

- Shift: move the next token from input to the parser stack.
- Reduce: replace a top-of-stack right-hand side with the nonterminal for a production.

![Top-down versus bottom-up parsing](08_Lecture_11_Parsing_CFG_LL1/topdown_bottomup.png)

For grammar:

```text
S → S + E | E
E → number | ( S )
```

the stack trace begins:

| Stack | Remaining input | Action |
|---|---|---|
|  | `(1 + 2 + (3 + 4)) + 5` | shift `(` |
| `(` | `1 + 2 + (3 + 4)) + 5` | shift `1` |
| `(1` | `+ 2 + (3 + 4)) + 5` | reduce `E → number` |
| `(E` | `+ 2 + (3 + 4)) + 5` | reduce `S → E` |
| `(S` | `+ 2 + (3 + 4)) + 5` | shift `+` |

The parser still needs a finite way to choose between competing shifts and reductions. Lectures 12–13 develop LR(0), SLR(1), and LR(1) automata and tables.

## 12. Easily confused concepts

| Concept A | Concept B |
|---|---|
| Concrete parse tree | Abstract syntax tree |
| Multiple derivations | Ambiguity |
| Associativity | Precedence |
| LL(1) top-down | LR bottom-up |
| FIRST | FOLLOW |
| Shift | Reduce |
| Left recursion | Left factoring |

## 13. Typical mistakes and edge cases

- Assuming any grammar for a language is suitable for a chosen parser.
- Treating different derivation orders as ambiguity.
- Encoding associativity opposite to the recursive side of a production.
- Giving `*` and `+` the same effective precedence.
- Trying recursive descent on a left-recursive grammar.
- Using FOLLOW for a nonnullable production where FIRST already decides.
- Forgetting EOF in the top-level parser.
- Constructing AST nodes before the operator and children are known.
- Assuming parsing checks scope or types.

## 14. Independent-revision checklist

You should be able to:

- **Define**: Context-Free Grammar, terminal, nonterminal, production, derivation, parse tree.
- **Derive**: the slide sum expression leftmost and rightmost.
- **Convert**: a parse tree to a semantic AST.
- **Recognize**: associativity, precedence ambiguity, and nonproductive recursion.
- **Transform**: left-factor and remove left recursion from a small grammar.
- **Compute**: FIRST/FOLLOW sets and a predictive table.
- **Trace**: `handwritten.ml` on `(1 + 2 + (3 + 4)) + 5`.
- **Explain**: why LR parsing is introduced when LL(1) is too restrictive.

## 15. Sources

- Course material: `lec11.pdf`, pp. 3–44.
- Local source:
  - `lec11/code/handwritten.ml`: `token`, `'a stream`, `mk_stream`, `parse`, `parse_T`, `parse_S`, `parse_S'`, `parse_E`.
  - `lec11/code/parser.mly`: `toplevel`, `bexp`, `b1`–`b5`.
  - `lec11/code/ambparser.mly`.
  - `lec11/code/ast.ml`: `bexp`, `prec_of_bexp`, `string_of_bexp`.
  - `lec11/code/lexer.mll`: `reset_lexbuf`, `lex_range`, `token`.
  - `lec11/code/range.ml` and `range.mli`.
  - `lec11/code/main.ml`.
  - `lec11/grammar.txt`.
- Figures:
  - `lec11.pdf` p. 14 → `parse_tree_vs_ast.png`.
  - `lec11.pdf` p. 22 → `precedence_ambiguity.png`.
  - `lec11.pdf` p. 33 → `ll1_table.png`.
  - `lec11.pdf` p. 41 → `topdown_bottomup.png`.

The explanations of `handwritten.ml` and the Menhir precedence layers are derived directly from the local source.
