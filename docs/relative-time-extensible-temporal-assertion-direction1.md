# Relative Time Extensible Temporal Assertion Direction 1

Date: 2026-09-24

Status: **HUMAN-SELECTED DESIGN DIRECTION / RESEARCH CHECKPOINT — NON-NORMATIVE; NO SCHEMA OR IMPLEMENTATION DECISIONS**

## Purpose and authority

This document records the Human-selected direction to consider Relative Time
as an extensible vocabulary of user-recorded temporal assertions, suitable for
portable use across applications rather than designed only around one
application's presentation needs. It is a bounded design/research checkpoint,
not a normative Extension specification or implementation plan. It does not
adopt schema shapes, Feature names, version numbers, derivation rules,
diagnostic severity, UI behavior, or solver behavior.

The direction is informed by the current [Relative Time Draft 0.1.0](../extensions/relative-time-extension-draft.md),
the [Relative Time minimum temporal-precedence Research 1](../research/exploratory/e2r-relative-time-minimum-temporal-precedence-research1.md),
the [History 2.x / Relative Time Cross-Audit 1](../research/history-vnext/decisions/history-2x-relative-time-cross-audit1.md),
the [Human-selected `before` / `after` semantic direction](relative-time-before-after-semantic-direction-decision1.md),
the [bounded `before` / `after` wording proposal](relative-time-bounded-contract-proposal1.md),
and the [roadmap's future interval-semantics direction](roadmap.md#human-selected-future-interval-semantics-and-timeline-direction-2026-09-23).
These sources have different authority levels; this record does not promote a
draft or exploratory candidate to normative or Stable authority.

## Human-selected responsibility and assertion model

- Core Relation endpoints remain structural. Core `sourceId` → `targetId`
  direction has no temporal meaning by itself. Relative Time, as an
  Extension, may assign domain-specific temporal semantics to its vocabulary.
- Preserve the current authoring/reference orientation: `sourceId` is the
  reference/base Object; `targetId` is described relative to it; a vocabulary
  value states the target's temporal relation to the source.
- One Relation carries one Recorded temporal assertion. A reverse semantic
  may have an inverse vocabulary value, but the inverse does not require an
  automatically stored mirror Relation.
- The vocabulary is not an exclusive classifier that forces every Object
  pair into exactly one relation. A user may record multiple independent
  temporal facts about the same pair as separate Relations; examples include
  `before` together with `overlap`, or `before` together with `touching`.
  This direction does not define contradiction detection, precedence between
  assertions, or automatic consolidation.
- Relations are recorded when the user knows the relationship; unknown
  relationships need not be recorded.

This model aligns with the current draft's one-assertion-per-Relation and
no-automatic-merge boundary, and with the Cross-Audit's separate Recorded and
Derived evidence. It does not settle all identity, provenance, or conflict
policies.

## Human-selected semantic families and vocabulary direction

The following are directions for an extensible vocabulary, not adopted
portable semantics. “Human-selected direction” means the vocabulary concept
or relationship is selected for future design; detailed applicability,
boundary rules, serialization, validation, and interoperability contracts
remain to be designed and reviewed.

| Semantic family | Human-selected direction | Status and limits |
| --- | --- | --- |
| Qualitative precedence | `before` ↔ `after` | Existing Human-selected bounded direction: a user-recorded qualitative temporal-precedence claim between Core Objects. It does not mean Allen interval `end(A) < start(B)` and does not imply start/end, duration, whole-extent, boundary, or additional precision. Its current wording proposal remains non-normative and not adopted. |
| Interval topology | `within` ↔ `contains` | `within` means target temporally included within source; `contains` is its inverse (target temporally includes source). Exact equality is excluded from these meanings and is distinct from `same-temporal-extent`. Point-like Event within period Event is in scope as a selected use direction, not yet a complete boundary/applicability rule. |
| Interval topology | `overlap` | Direction is partial overlap, distinct from containment and exact same extent. It is selected as symmetric. The precise meaning of partial overlap and its supported shapes remain to be specified. |
| Interval topology | `touching` | Working vocabulary direction: temporal extents have boundary contact but non-overlapping interiors. It is selected as symmetric for E2R consideration, rather than adopting Allen's directional `meets` / `met-by` pair. Boundary occurrence, open/closed endpoints, point-at-boundary cases, and applicable shapes remain unresolved. |
| Interval topology | `same-temporal-extent` | A user may explicitly assert that two temporal extents are exactly coextensive; selected as symmetric and distinct from point-like `same-instant`. It is not inferred from matching coarse History values. Detailed equality and applicability rules remain unadopted. |
| Point coincidence | Existing draft `same-instant` | Keep conceptually separate from equality of period extents. Its symmetry, transitivity, interaction with precedence, and normative status remain unresolved. |
| Quantitative relative assertions | Existing `calendar-granule-relation` and `elapsed-offset` candidates | Retain for consideration as distinct information families, not synonyms for qualitative precedence. For example, “90 minutes after” and “one Calendar month after” describe different kinds of relation and may coexist with a qualitative assertion. Existing Calendar and elapsed-offset constraints are not revised here. |

The selected inverse/symmetry direction is:

- `before` ↔ `after`;
- `within` ↔ `contains`;
- `overlap`, `touching`, and `same-temporal-extent` are symmetric.

These semantic relationships do not require reverse/mirror Relation storage.
They do not define normalization, deduplication, or a preferred assertion.

## Recorded evidence, History, and Derived responsibility

- A user may record a known Relative Time relation even when no explicit
  History assertion exists for either Object. The Relative Time Relation
  itself is the Recorded assertion.
- History values do not automatically create, overwrite, or refine Recorded
  Relative Time Relations. Coarse precision does not establish a finer
  relation: matching years do not prove `same-temporal-extent`, and apparent
  adjacency of coarse values does not prove `touching`.
- A relation or absolute placement computed from History and/or Recorded
  Relations is a separate Derived/inference responsibility. Recorded and
  Derived evidence must remain distinguishable; Derived results are not
  automatically written back as Recorded Relations or History values.
- A future solver or propagation capability may be researched for deriving
  positions/bounds from an absolute anchor and supported relative constraints.
  This is a future possibility only. No solver contract, inference rule,
  provenance format, or write-back behavior is selected here.

This boundary is consistent with the Human-selected `before` / `after`
direction and the roadmap's interval direction. The latter separately records
that History-derived relationships are not the same as user-recorded
Relations; this document does not define their computation.

## Point-like and period Events

`within` / `contains` are not selected as period-to-period-only concepts. A
user may explicitly record a point-like Event within a period Event (or the
inverse `contains` assertion with the corresponding endpoint orientation).
This direction does not decide whether interval endpoints are open or closed,
how uncertainty or a point on a boundary is classified, or which History 2
shape is authoring-ready.

A period Event does not automatically produce separate start/end Core Events,
and such Events are not required. If a start or end has independent
historical/narrative meaning and a user wants a more granular assertion, a
future application UI may optionally suggest recording it as a separate
Event. This remains an auxiliary UX direction; no UI specification or
implementation is authorized.

## Extensibility and future precise scheduling

The future design may keep qualitative precedence, interval topology,
quantitative relative assertions, and any later precise boundary/scheduling
constraints as distinct semantic families within an extensible Relative Time
Extension. This is a direction for portability to Gantt charts and other
present or future applications, not a guarantee that every current consumer
supports every family.

Possible future concepts include finish-before-start, boundary-relative
offsets, lag/minimum gap, or shared start/end boundaries. None is selected or
defined here. In particular, the existing coarse qualitative `before` must
not later be reinterpreted as a precise `end(A) < start(B)` scheduling rule
without a separately reviewed semantic extension. Calendar-relative offsets
must remain distinct from elapsed durations.

## Allen interval algebra as a reference

Allen interval algebra may be used as a reference checklist when assessing
coverage, inverse relationships, and symmetry. E2R does not thereby adopt all
13 Allen relations, claim Allen compatibility, or require the same
directionality or granularity. E2R may omit, combine, or define vocabulary
differently for its own responsibilities; any material difference should be
made explicit in a future normative text. The selected symmetric `touching`
direction, for example, is not the directional Allen `meets` / `met-by` pair.

## Relationship to current draft and prior checkpoints

The current Relative Time Draft 0.1.0 is a non-Stable candidate with four
payload families: `relative-position` (`before`, `after`, `same-instant`),
`containment` (`within`), `calendar-granule-relation`, and `elapsed-offset`.
Its endpoint orientation, separate History responsibility, one assertion per
Relation, and no automatic merge are reusable starting points. The new
direction does not edit or version-bump that draft.

Candidate revision may eventually be needed to represent `contains`,
`overlap`, `touching`, and `same-temporal-extent`; record symmetry/inverse
meaning where needed; clarify the qualitative `before` meaning against
interval/scheduling interpretations; and describe point/extent applicability
and compatibility. Whether these require new payload variants, Features,
versioning, or another representation is not decided here. The current schema,
Validator, tests, and applications remain unchanged and do not establish
normative authority.

The existing `before` / `after` Human-selected decision
(`371cffb0a6e6d9c2d2c1d8d125597911d580b20c`) remains valid; it is not
withdrawn. Its non-normative bounded wording proposal
(`9b3eadb479f35f5920128de941332b4be8fef835`) remains evidence for that family,
but the Human selected broader vocabulary research/design before any
standalone normative adoption disposition. The roadmap's earlier plan to
consider `within` + `overlap` in a separate checkpoint is now subject to this
broader Human-selected direction; it is not itself a normative rule or
implementation authorization.

## Explicitly not decided or authorized

This checkpoint does not:

- normatively adopt any Relative Time semantics, promote an Extension to
  Stable, or select Extension/Feature names, payload shapes, or version
  numbers;
- decide `same-instant` symmetry, transitivity, or other laws;
- settle transitivity or the Cross-Audit's differing strict `before`
  transitivity status; the Draft/Cross-Audit describe candidate derivation
  rules, while this direction does not extend the `before` decision to those
  rules;
- define cycle, self-loop, contradiction, duplicate, diagnostic, conflict, or
  winner-selection policy;
- compare Relative Time with History values or authorize Derived inference,
  solver/closure, persistence, or write-back;
- define exact interval endpoint/boundary, uncertainty, duration, or
  same-temporal-extent computation rules;
- define Gantt/Timeline projection, UI, or application behavior; or
- start Causal order, Temporal Perspectives, or History 2 deferred-shapes
  work.

The Human-selected vocabulary direction is sufficiently recorded here without
resolving those later details. Any future proposal or implementation requires
its own scoped review and authorization.

## Disposition

This is a Human-selected design/research direction record. The selected
vocabulary direction is not a normative contract. No canonical specification,
draft, schema, Validator, test, roadmap, Session, application, or sample was
changed as part of this decision document; no implementation is authorized.
