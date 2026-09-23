# Relative Time Atomic Wording Decisions 1

Date: 2026-09-24

Status: **HUMAN-SELECTED ATOMIC SEMANTIC DIRECTIONS — NON-NORMATIVE / NOT ADOPTED**

## Purpose and authority boundary

This record captures two Human decisions that resolve wording questions
prepared in [Relative Time Atomic Wording Ambiguities Decision Preparation
1](relative-time-atomic-wording-ambiguities-decision-preparation1.md). It is
limited to atomic Recorded assertion meaning for `same-instant` and the
current contract's `within` / `contains` shape applicability.

These selections guide the wording proposal; they do not adopt normative
Relative Time semantics, promote the Extension to Stable, or authorize schema,
version, machine evaluation, Validator, Derived, runtime, or application
changes. They do not select open/closed boundaries or History-shape mappings.

## Decision 1 — `same-instant` semantic symmetry

The Human selects **semantic symmetry** for the atomic `same-instant` claim:
the claim that the target's and source's point-like temporal occurrences are
at the same instant remains true in meaning when source and target are
exchanged.

This is a semantic property of the atomic claim only. It does not require
storing a reverse/mirror Relation. It does not select reverse Derived
assertion generation, transitivity, equivalence closure, solver behavior,
Validator behavior, or any other inference law.

`same-instant` remains point coincidence and is distinct from
`same-temporal-extent` (coextension of temporal extents). Existing endpoint
orientation remains unchanged: `sourceId` is the reference/base Object and
`targetId` is the described Object.

## Decision 2 — `within` / `contains` applicability in the current atomic contract

The Human selects these shape combinations as semantically applicable in the
current portable atomic contract:

| Value | Applicable source/target shapes in this contract |
| --- | --- |
| `within` | period within period; point within period |
| `contains` | period contains period; period contains point |

For this table, the ordinary phrase “X within Y” means the target X is within
the source Y; “X contains Y” means the target X contains the source Y. The
`contains` combinations are the converse directions under the established
source/target orientation. `within` and `contains` remain inverse values;
exact temporal equality is not either value and remains distinct from
`same-temporal-extent`.

These combinations are **not** semantically applicable under this current
contract:

- point within point;
- period within point;
- point contains point; and
- point contains period.

“Not applicable” is scoped to the current portable atomic contract only. It
does not permanently prohibit these combinations under a future contract or a
future temporal-shape model. The selected applicability does not define
machine evaluation or decide whether a History record supplies a relevant
point or period.

## Boundaries retained

- Core Relation direction remains structural only. Relative Time retains
  `sourceId` as reference/base and `targetId` as described Object.
- One Relation carries one Recorded assertion. This record does not require
  mirror storage, automatic merge, exclusive classification, or winner
  selection.
- A user may record a known assertion without History evidence. History does
  not automatically create, overwrite, or refine Recorded Relative Time;
  Recorded and Derived remain distinct.
- This record does not decide open/closed endpoint membership, a point exactly
  on a period boundary, uncertainty, History shape mapping, or machine
  truth/evaluation.
- No other vocabulary meaning is changed. In particular, `before`, `after`,
  `overlap`, `touching`, and `same-temporal-extent` retain their prior
  selected directions and open details.

The ambiguity-preparation document remains historical decision-preparation
evidence; this record supersedes its pending status for the two questions
above without editing or rewriting it.

## Disposition

The two choices above are Human-selected semantic directions for updating the
atomic wording proposal. They are not normative adoption, Stable promotion,
or implementation authorization. Any normative disposition remains a
separate Human decision. No schema, version, Validator, Derived, UI, or
application behavior is authorized here.
