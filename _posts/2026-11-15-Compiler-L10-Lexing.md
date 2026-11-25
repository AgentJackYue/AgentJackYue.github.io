---
title: Lecture 10 — Lexing, Regular Languages, and Automata
date: 2026-11-15 23:54:33 +0800
categories: [Notes, CS131 Compilers]
tags: [Lexing, Regular Expressions, DFA, NFA, ocamllex]
media_subpath: /assets/img/posts/CS131 Compilers
math: true
---

# Lecture 10 — Lexing, Regular Languages, and Automata

## 1. Role of lexical analysis

**Lexical Analysis（词法分析 / lexing）** converts a character stream into a stream of tokens. It is the first compiler phase that changes the representation of the source program.

Example:

```text
if (b == 0) { a = 1; }
```

becomes conceptually:

```text
IF LPAREN Ident("b") EQEQ Int(0) RPAREN
LBRACE Ident("a") EQ Int(1) SEMI RBRACE
```

A **token（记号 / token）** is an indivisible lexical unit. Its token type is distinct from the source characters that formed it.

Why it matters:

- Parsing should operate on language-level units rather than raw characters.
- Keywords, identifiers, numbers, operators, strings, and comments require different recognition rules.
- Whitespace and source positions must be handled consistently.
- Lexer errors should identify the offending character and location.

The next lecture assumes this token abstraction and explains **Parsing（语法分析）**.

## 2. Token categories

Typical token classes include:

- identifiers;
- keywords;
- integer and floating-point literals;
- punctuation and operators;
- string literals;
- comment delimiters or ignored comment contents.

Whitespace usually separates tokens and is discarded, but not every language treats whitespace uniformly. In Python and Haskell, whitespace may affect interpretation.

The lexer must also distinguish keywords from identifiers. `if` and `ifx` share a prefix, so a keyword rule cannot simply accept every word beginning with `i` and `f`.

## 3. Hand-written lexing

`lec10/code/handlex0.ml` tokenizes:

```ocaml
type token =
  | Int of int64
  | Ident of string
  | LPAREN
  | RPAREN
  | STAR
```

The main function is:

```ocaml
val lex : in_channel -> token list
```

Its scanner has a recursive dispatch function:

1. Skip one whitespace character.
2. Emit a one-character token for parentheses or `*`.
3. For a letter, collect letters, digits, and `_` into an identifier.
4. For a digit, collect decimal digits into an `int64`.
5. Raise `Lex_error c` for an unrecognized character.
6. Reverse the accumulated list before returning it.

### Why hand-written scanning is difficult

`lec10/code/handlex.ml` adds:

- the keyword `if`;
- `(*` as `LPARENSTAR`;
- `*)` as `STARRPAREN`.

The scanner now needs lookahead:

```text
'(' followed by '*' → comment opener
'(' followed by another character → LPAREN
'*' followed by ')' → comment closer
'*' followed by another character → STAR
```

The helper functions `lex_lparen_or_comment` and `lex_star_or_comment` implement that local lookahead.

### Verified implementation issue

Both hand-written lexers accumulate tokens in a mutable list and reverse it when input ends:

```ocaml
let exit () = List.rev !acc
try next (input_char input) with End_of_file -> exit ()
```

When the final token is an identifier or integer, its scanning loop reads one character beyond the token to determine the boundary. If that read reaches end-of-file, `End_of_file` jumps to `exit` before the pending token is emitted. The examples therefore omit a final identifier/integer token when the file has no trailing delimiter. This is an implementation edge case, not a failure of the lexical model.

## 4. Regular expressions

**Regular Expressions（正则表达式，regexes）** precisely describe sets of strings.

Core forms:

| Form | Meaning |
|---|---|
| `ε` | Empty string |
| `'a'` | The single character `a` |
| `R1 | R2` | Either `R1` or `R2` |
| `R1 R2` | Concatenation |
| `R*` | Zero or more repetitions of `R` |

Useful extensions:

- `R+ = R R*`
- `R? = (ε | R)`
- `['a'-'z']` denotes a character range
- `[^'0'-'9']` denotes a character outside the range
- `R as x` names the matched substring

Examples:

```text
keyword "if"      → "if"
digit             → ['0'-'9']
integer literal   → '-'? ['0'-'9']+
identifier        →
   (lower | upper) (digit | '_' | lower | upper)*
```

## 5. Longest match and rule priority

Regular expressions do not by themselves define how to split a source stream.

For input:

```text
ifx = 0
```

two possible starts are:

```text
if   x   =   0
ifx      =   0
```

The second is chosen by the standard **longest-match rule（最长匹配）**: consume the longest prefix that matches any token pattern. Thus `ifx` becomes an identifier, even though the programmer may have intended `if` followed by `x`.

If two matches have equal length, rule priority breaks the tie. Keywords commonly have priority over identifiers, and rule order in the lexer-generator file often defines preference.

## 6. Lexer generators

A **lexer generator（词法分析器生成器）** consumes a list

```text
(regular expression R1, action A1)
...
(regular expression Rn, action An)
```

and generates scanning code.

Example from the slides:

```ocaml
rule token = parse
| '-'? digit+
    { Int (Int32.of_string (lexeme lexbuf)) }
| '+'
    { PLUS }
| "if"
    { IF }
| character (digit | character | '_')*
    { Ident (lexeme lexbuf) }
| whitespace+
    { token lexbuf }
```

`lexeme lexbuf` returns the exact source text matched by the current rule. The action converts that text into the appropriate token.

## 7. Deterministic finite automata

A **Deterministic Finite Automaton（确定性有限自动机，DFA）** has:

- finitely many states;
- one start state;
- zero or more accepting states;
- one determined transition for each state/input pair, or an error transition.

The DFA accepts if the entire input ends in an accepting state.

Example regex for a quoted string:

```text
" [^"]* "
```

![DFA for a quoted string](07_Lecture_10_Lexing/string_dfa.png)

The same automaton can be represented by a transition table or a graph:

| State | `"` | Non-`"` |
|---:|---|---|
| 0 | 1 | error |
| 1 | 2 | 1 |
| 2 | error | error |

State 2 is accepting. Extra input after the closing quote is not accepted by this isolated automaton.

## 8. Nondeterministic finite automata

A **Nondeterministic Finite Automaton（非确定性有限自动机，NFA）** may have:

- multiple transitions from one state on the same symbol;
- **epsilon transitions（ε 转移）** that consume no input;
- multiple accepting paths.

![NFA with epsilon transitions](07_Lecture_10_Lexing/nfa_example.png)

An NFA accepts if there exists at least one path that consumes the whole input and reaches an accepting state. It does not need every possible path to succeed.

### Regular expression to NFA

The inductive construction uses one start and one accept state per fragment:

- Character `a`: one edge labeled `a`.
- Epsilon: one edge labeled `ε`.
- Concatenation `R1R2`: add an ε edge from the accept of `R1` to the start of `R2`.
- Alternation `R1|R2`: branch from a new start through ε edges to both alternatives, then merge accept paths.
- Kleene star `R*`: allow zero repetitions with ε edges and repeat by returning from the accept of `R` to its start.

## 9. NFA to DFA: subset construction

The standard algorithm tracks the set of all NFA states currently reachable.

Define:

- `ε-closure(S)`: states reachable from set `S` using zero or more ε transitions;
- `move(S, a)`: NFA states reachable from `S` after reading symbol `a`.

Procedure:

1. The DFA start state is `ε-closure({NFA_start})`.
2. For a DFA state $S$ and input symbol $a$, compute `ε-closure(move(S,a))`.
3. If the resulting set is new, add it as a new DFA state.
4. Repeat until all reachable state sets have transitions.
5. Mark a DFA state accepting if any NFA state in the set is accepting.

### Worked subset construction

![NFA to DFA for the optional-sign integer regex](07_Lecture_10_Lexing/nfa_to_dfa_number.png)

For `-?[0-9]+`:

- NFA state `0` can take ε directly to `1`.
- `-` moves from `0` to `1`.
- A digit moves from `1` to `2`, and state `2` loops on digits.
- An ε edge moves from `2` to accepting state `3`.

DFA construction:

| DFA state | On `-` | On digit |
|---|---|---|
| `{0,1}` start | `{1}` | `{2,3}` |
| `{1}` | error | `{2,3}` |
| `{2,3}` accepting | error | `{2,3}` |

On the empty input, none of the reachable NFA states is the unique accept state, so the start DFA set is not accepting.

## 10. Complete lexer-generator algorithm

1. Combine token regexes:
   $$
   R=(R_1|R_2|\cdots|R_n).
   $$
2. Remember which action belongs to each original accepting state.
3. Build an NFA for the combined expression.
4. Convert the NFA to a DFA using subset construction.
5. Minimize the DFA.
6. Emit a transition table or generated scanner code.
7. Implement longest match:
   - follow transitions;
   - remember the most recent accepting state;
   - stop when no transition exists;
   - run the highest-priority action for that accepting state;
   - report an error if no accepting state was reached.

Minimization matters because a combined lexer DFA can be large.

## 11. `ocamllex` examples

`lec10/code/lexlex.mll` repeats the hand-lexer example with generator rules:

```ocaml
let identifier =
  character (character | digit | underscore)*

rule lex = parse
| "if"       { emit IF; lex lexbuf }
| identifier { emit (Ident (lexeme lexbuf)); lex lexbuf }
| eof        { List.rev (!acc) }
```

The keyword rule appears before the identifier rule. Longest match still wins: `ifx` matches the longer identifier pattern. Priority matters only when the same longest lexeme matches multiple patterns.

`lec10/code/olex.mll` adds:

- `incr_linenum` for `\n`;
- a quoted-string rule;
- an indirect-x86-operand rule such as `-4(%rbp)`;
- line/column reporting for unexpected characters.

`lec10/code/piglatin.mll` is a compact non-compiler example showing named regexes, capturing subpatterns, and actions that transform text.

## 12. Error reporting and comments

Useful token metadata includes:

- source file;
- beginning and ending line/column;
- lexeme text.

Lexing errors should preserve enough position information to identify the bad input.

Nested comments require a depth counter. A lexical rule can recursively consume comment openers and closers without returning internal tokens. Lecture 13 provides the more complete nested-comment implementation.

## 13. Easily confused concepts

| Concept A | Concept B |
|---|---|
| Character stream | Token stream |
| Regex match | Token action: recognition versus emitted token |
| Longest match | Rule priority: length first, then tie-breaking |
| DFA | NFA: unique transition versus possible multiple paths |
| NFA acceptance | Every path succeeds |
| `ε` closure | Consuming a character |
| Lexer | Parser: token formation versus syntactic structure |

## 14. Typical mistakes and edge cases

- Accepting keyword prefixes instead of whole keyword lexemes.
- Omitting the trailing token at EOF in a hand-written scanner.
- Reading one character of lookahead and not reprocessing it correctly.
- Forgetting that keyword priority does not override a longer identifier match.
- Writing a whitespace action that does not consume input or reach `eof`.
- Treating an NFA as accepting only when all active paths accept.
- Failing to recompute ε closure after `move`.
- Marking a DFA state accepting without checking whether any NFA member accepts.
- Losing line/column information while recursively entering a string or comment.
- Confusing comment delimiters with comment skipping; `handlex.ml` recognizes delimiter tokens but does not discard comments.

## 15. Independent-revision checklist

You should be able to:

- **Define**: token, regex, DFA, NFA, epsilon transition, longest match.
- **Construct**: simple token regexes and their NFA fragments.
- **Run**: a DFA transition table on sample input.
- **Derive**: subset-construction states and accept states for a small NFA.
- **Trace**: the hand-written lexer’s control flow and token-list reversal.
- **Write**: a short ocamllex rule set with priority and recursive continuation.
- **Debug**: shared prefixes, EOF boundaries, whitespace loops, and position tracking.

## 16. Sources

- Course material: `lec10.pdf`, pp. 3–24.
- Local source code:
  - `lec10/code/handlex0.ml`: `token`, `lex`, `next`, `lex_ident`, `lex_int`.
  - `lec10/code/handlex.ml`: `keywords`, `ident_or_keyword`, `lex_lparen_or_comment`, `lex_star_or_comment`.
  - `lec10/code/lexlex.mll`: regex definitions, `rule lex`, actions, `eof`.
  - `lec10/code/olex.mll`: `incr_linenum`, `unexpected_char`, string and indirect-operand rules.
  - `lec10/code/piglatin.mll`: capturing regexes and transformation actions.
- Figures:
  - `lec10.pdf` p. 16 → `string_dfa.png`.
  - `lec10.pdf` p. 18 → `nfa_example.png`.
  - `lec10.pdf` p. 22 → `nfa_to_dfa_number.png`.

The subset-construction table and EOF bug analysis are supplementary explanations derived from the slides and actual local implementations.
