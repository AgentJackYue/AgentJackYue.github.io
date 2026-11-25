---
title: Lectures 12–13 — LR(0), SLR(1), LR(1), and Menhir
date: 2026-11-15 23:56:40 +0800
categories: [Notes, CS131 Compilers]
tags: [Parsing, LR0, SLR1, LR1, LALR, Menhir]
media_subpath: /assets/img/posts/CS131 Compilers
math: true
---

# Lectures 12–13 — LR(0), SLR(1), LR(1), and Menhir

## 1. Why bottom-up parsing

[Note 8]({% post_url 2026-11-15-Compiler-L11-Parsing-CFG-LL1 %}) introduced shift/reduce parsing. These lectures construct the parser automaton and resolve conflicts.

An **LR(k)** parser:

- scans Left-to-right;
- constructs a rightmost derivation in reverse;
- uses `k` lookahead tokens.

LR parsing is bottom-up. It can handle left-recursive Context-Free Grammars without left factoring and is the technology behind many parser generators.

The parser has:

- a stack of grammar symbols and DFA states;
- remaining input tokens;
- an **action table（动作表）** for terminals;
- a **goto table（转移表）** for nonterminals.

## 2. Shift and reduce

**Shift（移进）** moves the next input token onto the stack.

**Reduce（归约）** replaces a right-hand side $\gamma$ on top of the stack with a nonterminal $X$, when a production $X \to \gamma$ applies.

For grammar:

```text
S → ( L ) | id
L → S | L , S
```

parsing `(x, (y, z), w)$` begins:

| Stack | Input | Action |
|---|---|---|
|  | `(x, (y, z), w)$` | shift `(` |
| `(` | `x, (y, z), w)$` | shift `x` |
| `(x` | `, (y, z), w)$` | reduce `S → id` |
| `(S` | `, (y, z), w)$` | reduce `L → S` |

At each point the parser needs enough information to choose shift versus reduce.

## 3. LR(0) items

An **LR(0) item（LR(0) 项目）** is a production with a dot marking current progress:

```text
S → . ( L )
S → ( . L )
S → ( L . )
S → ( L ) .
```

The dot separates:

- symbols already recognized and potentially on the stack;
- symbols that may be recognized next.

An **LR(0) state（LR(0) 状态）** is a set of items summarizing possible stack prefixes.

A state containing an item with the dot at the end is a potential **reduce state（归约状态）**.

## 4. Augmented grammar and closure

Add an augmented start production:

```text
S' → S $
```

The `$` marks end-of-input and lets acceptance be represented explicitly.

The initial item is:

```text
S' → . S $
```

The **closure（闭包）** operation adds productions for a nonterminal that appears immediately after a dot:

```text
CLOSURE({ S' → .S$ })
= {
    S' → .S$,
    S → .(L),
    S → .id
  }
```

When closure additions introduce another nonterminal after a dot, closure continues until a fixed point.

## 5. Goto transitions

For each grammar symbol `X` appearing after a dot:

1. Select items with `.X` in the current state.
2. Move the dot across `X`, producing `.` after `X`.
3. Take the closure of the resulting item set.
4. Add a DFA transition labeled `X`.

For example, state 1 on `(` reaches a state containing:

```text
S → (.L)
L → .S
L → .L,S
S → .(L)
S → .id
```

The repeated `S → .(L)` and `S → .id` result from closure. As a set, they occur only once.

## 6. Full LR(0) DFA

![Full LR(0) DFA](09_Lectures_12-13_LR_Parsing/lr0_dfa.png)

The nine states encode progress for the tuple grammar. Important reduce states include:

- state 2: `S → id .`
- state 6: `S → ( L ) .`
- state 7: `L → S .`
- state 9: `L → L , S .`

State 4 has:

```text
S' → S . $
```

On `$`, it reaches the accept state.

## 7. Action and goto tables

For state/terminal pairs, action entries are:

- `sn`: shift and enter state `n`;
- `X → γ`: reduce by that production;
- accept/done;
- error.

For state/nonterminal pairs, goto entries are:

- `gn`: after reducing to nonterminal `X`, enter state `n`.

Correct reduction procedure:

1. Pop the number of grammar symbols in the production RHS.
2. Pop the same number of stored DFA states.
3. Read the revealed state.
4. Follow the goto entry for the production's left-hand nonterminal.
5. Push the nonterminal and new state.

### Parse trace

For `(x, (y, z), w)$`, using state numbers from the slide:

| Stack with states | Input | Action |
|---|---|---|
| `1` | `(x, (y, z), w)$` | shift, state 3 |
| `1 ( 3` | `x, (y, z), w)$` | shift `id`, state 2 |
| `1 ( 3 x 2` | `, (y, z), w)$` | reduce `S → id` |
| `1 ( 3 S` | `, (y, z), w)$` | goto state 7 |
| `1 ( 3 S 7` | `, (y, z), w)$` | reduce `L → S` |
| `1 ( 3 L` | `, (y, z), w)$` | goto state 5 |
| `1 ( 3 L 5` | `, (y, z), w)$` | shift `,`, state 8 |

The trace continues by parsing the nested tuple and reducing it first.

## 8. LR(0) conflicts

An LR(0) state may not uniquely choose an action.

- **Shift/reduce conflict（移进/归约冲突）**: the state permits both shifting the current lookahead and reducing.
- **Reduce/reduce conflict（归约/归约冲突）**: the state permits two different reductions.

![LR conflicts](09_Lectures_12-13_LR_Parsing/lr_conflicts.png)

LR(0) ignores lookahead. If a completed item exists, it reduces even when the next token should instead justify a shift.

For the right-recursive sum grammar:

```text
S → E + S | E
E → number | ( S )
```

the state after `E` contains:

```text
S → E . + S
S → E .
```

This is a shift/reduce conflict. The left-recursive alternative avoids that particular LR(0) conflict.

## 9. SLR(1)

**SLR(1)** uses the LR(0) automaton but adds grammar-wide FOLLOW information.

For a reduce item $A \to \gamma.$, permit reduction only when:

$$
\text{lookahead} \in \operatorname{FOLLOW}(A).
$$

If a shift is possible on a different symbol, solve the conflict by lookahead.

SLR can distinguish two reductions when their FOLLOW sets are disjoint. It is the easiest LR variant to construct by hand.

## 10. Canonical LR(1)

An **LR(1) item（LR(1) 项目）** contains both progress and a set of valid lookaheads:

```text
A → α . β , L
```

`L` is the set of terminals that may follow this use of `A`.

### LR(1) closure

Suppose closure contains:

```text
A → α . C δ , L
```

Then add productions for `C`. For:

```text
C → .γ
```

the lookahead set is:

1. `FIRST(δ)`;
2. if `δ` is nullable, also `L`.

This narrower, item-specific lookahead avoids many conflicts of SLR.

### Worked LR(1) closure

Grammar:

```text
S' → S$
S  → E + S | E
E  → number | ( S )
```

Start:

```text
S' → .S$ , {}
```

Since `S` follows the dot and `$` follows `S`, add:

```text
S → .E + S , {$}
S → .E     , {$}
```

For `.E + S`:

```text
FIRST(+S) = {+}
```

so add:

```text
E → .number , {+}
E → .( S )  , {+}
```

For the second use `.E`, the suffix after `E` is ε and `$` is the enclosing lookahead:

```text
E → .number , {$}
E → .( S )  , {$}
```

After reading `E`, the state contains:

```text
S → E . + S , {$}
S → E .     , {$}
```

![LR(1) lookahead resolution](09_Lectures_12-13_LR_Parsing/lr1_lookahead.png)

- On `+`, shift.
- On `$`, reduce `S → E`.

The lookahead disambiguates the shift/reduce choice.

## 11. LALR(1) and GLR

Canonical LR(1) tables can be large. **LALR(1)** merges LR(1) states whose LR(0) items are identical, unioning their lookahead sets.

The merge reduces table size but can introduce new conflicts. In practice, LALR(1) works well and is standard in yacc-family tools.

**GLR** maintains multiple parser stacks and can recover all parses when a grammar remains nondeterministic. A later pass may choose among the parses.

![Grammar-family containment](09_Lectures_12-13_LR_Parsing/grammar_hierarchy.png)

Containment does not mean every grammar project should use the most powerful class. Tool support, conflict clarity, grammar maintainability, and error reporting matter.

## 12. Menhir workflow

The active Dune stanza in `lec13/code/dune` enables:

```text
(menhir
 (modules parser)
 (flags --dump)
 (explain true))
```

`--explain` reports conflicts in a `.conflicts` file. `--dump` describes the automaton and item sets.

### Parser-development sequence

| File | Role |
|---|---|
| `start-parser.mly` | Ambiguous starting grammar; expression precedence and dangling `else` remain |
| `hand-parser.mly` | Manual precedence layers `exp0`, `exp1`, `exp2`; dangling `else` remains |
| `prec-parser.mly` | Menhir `%left` declarations for arithmetic; dangling `else` remains |
| `else-resolved-parser.mly` | Matched/unmatched statement factoring in the style of C/Java |
| `good-parser.mly` | Requires braces around `if` branches, including an `else if` exception |
| `final-parser.mly` | Uses `%inline` and Menhir `list(...)` to simplify productions |
| `parser.mly` | Active executable parser; arithmetic precedence declarations plus recursive statement grammar |

### Manual precedence

`hand-parser.mly` uses:

```text
exp0: exp0 + exp1 | exp0 - exp1 | exp1
exp1: exp1 * exp2 | exp2
exp2: identifier | constant | ( exp )
```

The farther a level is from `exp0`, the tighter its precedence. Left recursion produces left associativity.

### Precedence declarations

The precedence-based parsers declare:

```text
%left PLUS DASH
%left STAR
```

Later declarations bind more tightly, so multiplication has higher precedence than addition/subtraction. `%left` makes repeated operators left-associative.

## 13. Dangling `else`

Given:

```text
if (E1) if (E2) S1 else S2
```

the `else` may attach to either `if`. This is a real-language ambiguity, not merely an arithmetic-precedence problem.

### Matched/unmatched factorization

`else-resolved-parser.mly` uses:

- `M`: a matched statement, where every contained `if` that needs an `else` has one;
- `U`: an unmatched statement, with an `if` still awaiting an optional `else`.

The key productions prevent an unmatched `if` from becoming the then-branch of an outer matched statement:

```text
U → if (E) stmt
U → if (E) M else U
M → if (E) M else M
```

This encodes the usual nearest-`if` rule.

### Brace-based resolution

`good-parser.mly` instead requires bracketed blocks:

```text
if_stmt → IF ( exp ) block else_stmt
else_stmt → ε | ELSE block | ELSE if_stmt
```

This removes ambiguity at the cost of more braces. The `else if` form remains available for chained conditions.

## 14. AST and lexer integration

`lec13/code/ast.ml` wraps AST nodes with source ranges:

```ocaml
type 'a loc = {
  elt : 'a;
  loc : Range.t
}
```

It defines expressions, declarations, assignments, `if`, `while`, return, and block nodes.

`loc` in each `.mly` file:

```ocaml
val loc :
  Lexing.position -> Lexing.position -> 'a -> 'a loc
```

constructs a located node from the parser's start/end positions.

`lexer.mll` provides:

- `Lexer.token : Lexing.lexbuf -> Parser.token`;
- source-position tracking;
- keyword lookup through `symbol_table`;
- nested comments through `comments`;
- strings and escapes through `string` and `escaped`;
- decimal and hexadecimal integer recognition.

`driver.ml` reads an `.imp` file, resets the lexer position, calls `Parser.toplevel`, and prints the AST through `Astlib`.

## 15. Easily confused concepts

| Concept A | Concept B |
|---|---|
| LR(0) item | LR(1) item: progress versus progress plus lookahead |
| Parser state | Grammar symbol: state is a set of items |
| Shift | Reduce: consume input versus replace stack suffix |
| Action table | Goto table: terminals versus nonterminals |
| SLR FOLLOW | LR(1) item lookahead |
| LALR merge | Canonical LR(1) state |
| Matched statement | Unmatched statement |
| Menhir precedence declaration | Grammar restructuring |

## 16. Typical mistakes and edge cases

- Treating the dot as punctuation rather than a progress marker.
- Stopping closure before no new items are added.
- Forgetting closure after a goto transition.
- Reducing without first checking the lookahead in SLR/LR(1).
- Popping only grammar symbols while leaving associated DFA states on the stack.
- Using the old state instead of the state revealed after popping a reduction.
- Assuming LALR always preserves every conflict property of canonical LR(1).
- Expecting `%left` to resolve dangling `else`.
- Attaching `else` to the outer `if`.
- Treating brace-required parsing as the only possible disambiguation.
- Confusing an LR parsing DFA with a lexer DFA.

## 17. Independent-revision checklist

You should be able to:

- **Define**: LR item, closure, goto, action table, goto table, shift/reduce conflict.
- **Construct**: closure and the first LR(0) DFA states for the tuple grammar.
- **Trace**: shift/reduce operations with state annotations.
- **Explain**: why LR(0) conflicts arise.
- **Compare**: LR(0), SLR(1), canonical LR(1), and LALR(1).
- **Derive**: LR(1) closure lookaheads for the sum grammar.
- **Read Menhir conflicts**: identify the production, dot position, and competing lookaheads.
- **Disambiguate**: arithmetic precedence/associativity and dangling `else` through grammar design or declarations.

## 18. Sources

- Course material:
  - `lec12.pdf`, pp. 15–30.
  - `lec13.pdf`, pp. 4–31.
- Local source:
  - `lec13/code/parser.mly`.
  - `lec13/code/start-parser.mly`.
  - `lec13/code/hand-parser.mly`.
  - `lec13/code/prec-parser.mly`.
  - `lec13/code/else-resolved-parser.mly`.
  - `lec13/code/good-parser.mly`.
  - `lec13/code/final-parser.mly`.
  - `lec13/code/lexer.mll`: `reset_lexbuf`, `newline`, `create_token`, `token`, `comments`, `string`, `escaped`.
  - `lec13/code/ast.ml`: `'a loc`, `exp`, `stmt`, `block`, `prog`.
  - `lec13/code/driver.ml`: `parse_imp_file`, `print_imp`.
  - `lec13/code/dune`.
  - `lec13/files/*.imp`.
- Figures:
  - `lec12.pdf` p. 26 → `lr0_dfa.png`.
  - `lec13.pdf` p. 17 → `lr_conflicts.png`.
  - `lec13.pdf` p. 22 → `lr1_lookahead.png`.
  - `lec13.pdf` p. 24 → `grammar_hierarchy.png`.

The parser-variant comparison and lexer integration are based on the actual local files; only `parser.mly` is compiled by the active Dune executable.
