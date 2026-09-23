# Relative Time Atomic Recorded Assertion Semantics Proposal 1

Date: 2026-09-24

Status: **PROPOSAL FOR HUMAN REVIEW — NON-NORMATIVE / NOT ADOPTED**

## Purpose and authority boundary

This document proposes bounded wording for the atomic meaning of one
explicitly user-recorded Relative Time assertion. It follows the
Human-selected scope in [Relative Time Atomic Recorded Assertion Contract
Scope Decision 1](relative-time-atomic-recorded-assertion-contract-scope-decision1.md)
and the previously selected [extensible vocabulary direction](relative-time-extensible-temporal-assertion-direction1.md).

The proposed statements are candidate normative wording for Human review;
they are not adopted requirements. This document neither changes the
non-Stable [Relative Time Draft 0.1.0](../extensions/relative-time-extension-draft.md)
nor selects schema shapes, Features, versions, validation behavior, or
implementation. A Human disposition of this proposal is a separate step.

The proposal defines only what an individual Recorded assertion claims. It
does not define when a consumer can verify that claim from History, another
assertion, or a temporal model. It does not authorize Derived inference or
write-back.

## Existing Human-selected basis

The candidate wording below preserves these already selected directions; it
does not decide them anew:

- Core Relation endpoint direction is structural and has no temporal meaning
  by itself. In Relative Time, `sourceId` is the reference/base Object and
  `targetId` is the Object described relative to it. Each value below states
  the target's relation to the source.
- One Relation carries one Recorded temporal assertion. Multiple independent
  assertions may coexist as separate Relations for the same Object pair.
  No mirror Relation, automatic merge, exclusive classification, or winner
  selection is required.
- A user may record a known relation without a corresponding History
  assertion. History does not automatically create, overwrite, or refine a
  Recorded Relative Time Relation. Unknown relations need not be recorded.
- Recorded assertions and Derived conclusions are distinct. Derived results
  are not automatically written back as Recorded Relations or History data.
- `before` / `after` is a bounded qualitative precedence direction. It is
  not `end(A) < start(B)` and does not imply a start, end, duration, whole
  extent, boundary/contact, or additional precision.
- `before` / `after` are inverse directions; `within` / `contains` are
  inverse directions; `overlap`, `touching`, and `same-temporal-extent` have
  selected symmetric directions. These relationships do not require mirror
  Relation storage.
- `within` excludes exact equality; `same-temporal-extent` is distinct from
  point-like `same-instant`. Point-like Event within period Event is an
  intended direction. Coarse History values do not establish
  `same-temporal-extent` or `touching`.
- `calendar-granule-relation` and `elapsed-offset` remain distinct
  quantitative assertion families, not synonyms for the qualitative or
  interval-topology vocabulary below.

The basis is recorded in [the Human-selected semantic direction](relative-time-before-after-semantic-direction-decision1.md),
[the extensible-vocabulary direction](relative-time-extensible-temporal-assertion-direction1.md),
the [atomic-contract scope decision](relative-time-atomic-recorded-assertion-contract-scope-decision1.md),
and the new [Human-selected atomic wording decisions](relative-time-atomic-wording-decisions1.md).
The [semantic-contract Research 1](relative-time-extensible-semantic-contract-research1.md)
and [History 2 / Relative Time Cross-Audit](../research/history-vnext/decisions/history-2x-relative-time-cross-audit1.md)
are research/candidate evidence, not normative authority.

## Proposed atomic wording

The following sentences describe a Recorded assertion's claim only. “Target”
and “source” refer to the Relative Time endpoint orientation above. They do
not define machine evaluation, temporal shape requirements, or representation.

| Value | Proposed atomic claim (target relative to source) | Existing selected basis and deliberate limit |
| --- | --- | --- |
| `before` | The target is temporally earlier than the source. | Qualitative precedence only. No History grounding is required; no start-to-start, end-to-start, start, end, duration, whole extent, boundary, or added precision is asserted. |
| `after` | The target is temporally later than the source. | The inverse direction of `before`, stated independently using target relative to source. It carries the same limits as `before`; it is not a scheduling or elapsed-offset assertion. |
| `within` | The target's temporal occurrence or extent is within the source's temporal occurrence or extent, and the assertion is not a claim that the two are exactly coextensive. | In this proposal's current atomic contract, applicable to period-within-period and point-within-period. Point-within-point and period-within-point are not applicable in this contract. This does not set endpoint inclusion, boundary occurrence, History mapping, or machine evaluation. |
| `contains` | The target's temporal occurrence or extent contains the source's temporal occurrence or extent, and the assertion is not a claim that the two are exactly coextensive. | Converse of `within` under the same endpoint convention; applicable here to period-contains-period and period-contains-point. Point-contains-point and point-contains-period are not applicable in this contract. No mirror Relation is required. |
| `overlap` | The target's and source's temporal extents partially overlap. | Symmetric direction, distinct from containment, exact coextension, and boundary-only `touching`. No endpoint test, duration threshold, uncertainty rule, or History-based classification is specified. |
| `touching` | The target's and source's temporal extents have boundary contact without overlapping interiors. | Symmetric direction selected for E2R consideration, not Allen's directional `meets` / `met-by` pair. No open/closed endpoint, boundary-occurrence, or point-on-boundary rule is specified. |
| `same-temporal-extent` | The target and source have exactly the same temporal extent. | Explicit symmetric coextension claim, distinct from `same-instant`. Matching/coarse History values or identical boundary descriptions do not automatically create this assertion; no equality evaluation procedure is specified. |
| `same-instant` | The target's and source's point-like temporal occurrences are at the same instant. | The atomic claim is semantically symmetric: exchanging target and source preserves its meaning. It is point coincidence, not equality of period extents. This does not require mirror storage or decide reverse Derived assertions, transitivity, equivalence closure, interaction with `before` / `after`, or normative status beyond this proposal. |

The inverse and symmetric relationships describe the meanings of values, not
Relation endpoint reversal or storage instructions. For example, `after` is
not obtained by automatically writing a second Relation for an existing
`before` assertion.

The `within` / `contains` shape applicability above is scoped to this current
atomic contract only. It is not a permanent prohibition on other shape
combinations under a future contract or temporal-shape model. The selected
combinations do not establish open/closed boundary behavior, the treatment of
a point exactly on a period boundary, History shape mapping, or whether any
assertion can be machine-verified from History.

## What these statements do not claim

The proposed atomic wording does not:

- infer temporal values from Core Relation direction, Relation name, display
  order, or application presentation;
- require an explicit History assertion, choose among multiple History
  assertions, or derive a Recorded Relation from History;
- imply a precise temporal referent or boundary beyond the selected claim;
- establish whether a claim is true from a History shape, or define endpoint
  inclusion, open/closed boundaries, uncertainty, or a shape applicability
  matrix;
- define compatibility, contradiction, duplicate identity, diagnostics,
  severity, or winner selection among multiple Recorded assertions;
- adopt transitivity or other Derived/order laws, cross-family entailment,
  solver/closure/propagation, Derived provenance, or write-back;
- derive a reverse `same-instant` Relation or Derived assertion from semantic
  symmetry, or adopt transitivity/equivalence closure for `same-instant`;
- equate qualitative precedence with `calendar-granule-relation`,
  `elapsed-offset`, or precise scheduling constraints; or
- define schema, Feature names, versioning, Validator, UI, Timeline/Gantt, or
  application behavior.

In particular, this proposal does not use the Cross-Audit's exploratory
extent example `end(A) before start(B)` as a definition of `before`. The
later Human-selected direction expressly excludes that reinterpretation.
Any precise finish/start scheduling relation would require a separately
reviewed semantic family and scope.

## Scope and disposition

`calendar-granule-relation` and `elapsed-offset` remain separate quantitative
families. Their atomic meanings are not specified here. This proposal also
does not reopen the accepted/closed `H2-POSITION-CIRCA` boundary or adopt
History 2 `bounded-point`, `temporal-extent`, or multiple-assertion authoring.
Causal order and Temporal Perspectives remain separate workstreams.

No new semantic blocker was found that prevents presenting the selected
atomic-meaning directions as wording candidates. The intentionally deferred
boundary, evaluation, consistency, Derived, and representation questions
remain open in their separate scopes; this proposal does not answer them by
implication. Human review may request wording changes or choose not to adopt
some or all of these candidates. No candidate is adopted by this document.

## Validation and disposition

This is a Human-review wording proposal only. The Relative Time Draft, schema,
Validator, tests, roadmap, Session 0094, and applications are unchanged. No
normative adoption, Stable promotion, implementation authorization, staging,
commit, push, or deploy is made by this checkpoint.
