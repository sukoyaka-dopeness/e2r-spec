# Relative Time Atomic Recorded Assertion Semantics Adoption 1

Date: 2026-09-24

Status: **NORMATIVE SEMANTIC ADOPTION RECORD — ATOMIC RECORDED ASSERTION CONTRACT ONLY**

## Adoption and authority

The Human adopts the atomic Recorded assertion semantics proposed in
[Relative Time Atomic Recorded Assertion Semantics Proposal 1](./relative-time-atomic-recorded-assertion-semantics-proposal1.md),
reviewed by [Relative Time Atomic Semantics Adoption Readiness 1](./relative-time-atomic-semantics-adoption-readiness1.md).
This record captures that disposition as normative semantic authority for
the bounded scope below. The proposal and readiness audit remain unchanged as
historical proposal and review records; neither is retroactively relabeled as
an adoption record.

The adopted decision follows the Human-selected
[atomic contract scope](./relative-time-atomic-recorded-assertion-contract-scope-decision1.md)
and [atomic wording decisions](./relative-time-atomic-wording-decisions1.md).
The proposal was recorded in commit
`8233268d4ac24ecccb141fc2dc4d9da97fef27c8` (`docs: propose atomic Relative
Time semantics`), and the readiness audit in commit
`53a7ae283003edac865161c4666c08f38023c361` (`docs: record Relative Time
atomic semantics readiness`).

This adoption is limited to what one explicit Recorded Relative Time
assertion claims and the cross-cutting boundaries stated here. It does not
adopt a payload representation or amend the Relative Time Draft. The current
Draft/schema remain governing only within their existing candidate scope;
this record does not make additional values serializable, schema-valid, or
implementable.

## Adopted cross-cutting semantics

- Core Relation endpoint direction is structural and carries no temporal
  meaning by itself. For Relative Time, `sourceId` is the reference/base
  Object and `targetId` is the Object described relative to the source.
- One Core Relation represents one Recorded temporal assertion. Independent
  assertions may coexist as separate Relations for the same Object pair.
  Mirror Relations, automatic merging, exclusive classification, and winner
  selection are not required.
- A user may record a known temporal relation without a corresponding
  History assertion. History does not automatically generate, overwrite, or
  refine a Recorded Relative Time assertion.
- Recorded assertions and Derived conclusions are distinct. Derived
  conclusions are not automatically written back as Recorded Relations or
  History data.
- `calendar-granule-relation` and `elapsed-offset` are separate quantitative
  assertion families, not synonyms for the qualitative or interval-topology
  vocabulary adopted here.

## Adopted atomic meanings

Each meaning below describes the target relative to the source.

| Value | Adopted atomic meaning | Adopted limit |
| --- | --- | --- |
| `before` | The target is qualitatively temporally earlier than the source. | It does not assert `end(A) < start(B)`, start-to-start or end-to-start order, a start, end, duration, whole-extent ordering, boundary/contact, precise scheduling, or additional precision. |
| `after` | The target is qualitatively temporally later than the source. | It is the inverse direction of `before`; it does not assert a scheduling or elapsed-offset rule or any of the additional temporal boundaries excluded for `before`. |
| `within` | The target's temporal occurrence or extent is within the source's temporal occurrence or extent and is not exactly coextensive with it. | In this current contract it applies to period-within-period and point-within-period. |
| `contains` | The target's temporal occurrence or extent contains the source's temporal occurrence or extent and is not exactly coextensive with it. | It is the inverse of `within`; in this current contract it applies to period-contains-period and period-contains-point. No mirror Relation is required. |
| `overlap` | The target's and source's temporal extents partially overlap. | It is distinct from containment, exact coextension, and boundary-only `touching`. |
| `touching` | The target's and source's temporal extents have boundary contact without overlapping interiors. | It is a symmetric claim, not the directional Allen `meets` / `met-by` pair. |
| `same-temporal-extent` | The target and source have exactly the same temporal extent. | It is an explicit coextension claim, distinct from `same-instant`. Coarse History equality or apparent adjacency does not automatically establish it or `touching`. |
| `same-instant` | The target's and source's point-like temporal occurrences are at the same instant. | Its atomic meaning is symmetric under exchanging source and target; it is point coincidence, not equality of period extents. |

The following `within` / `contains` combinations are not applicable in this
current portable atomic contract: point-within-point, period-within-point,
point-contains-point, and point-contains-period. This current-contract limit
does not permanently prohibit them under a future contract or temporal-shape
model.

## Explicitly outside this adoption

This record does not decide or authorize:

- schema or payload representation, Feature names, version selection, Draft
  integration, migration, or preservation implementation;
- machine evaluation or truth conditions, open/closed boundary rules,
  treatment of a point exactly on a period boundary, uncertainty, or History
  shape mapping;
- cross-assertion compatibility, contradiction, duplicate policy,
  diagnostics, or severity;
- Derived semantics, transitivity or other order laws, closure, solver,
  propagation, provenance, or cross-family entailment;
- Validator behavior, UI, Timeline, Gantt, or other application behavior;
- Stable promotion or a precise scheduling semantic family.

In particular, semantic symmetry of `same-instant` does not require reverse
Relation storage or adopt reverse Derived generation, transitivity,
equivalence closure, or solver behavior. The selected `within` / `contains`
applicability does not establish endpoint membership, History mapping, or
machine evaluation.

## Draft/schema relationship and follow-up authority

At adoption time, Relative Time Draft 0.1.0 and its schema encode `before`,
`after`, and `same-instant` in `relative-position`; `within` in `containment`;
and the separate `calendar-granule-relation` and `elapsed-offset` families.
They do not encode `contains`, `overlap`, `touching`, or
`same-temporal-extent`, nor do they validate the adopted current-contract
shape applicability. This semantic adoption does not silently extend that
Draft/schema support. A separate Human-authorized integration and versioning
checkpoint is required before those additional values can be represented
and validated as part of a normative Extension.

The proposal remains the wording and provenance record; this document records
the Human's normative semantic disposition at the atomic Recorded-assertion
layer. It does not declare the Relative Time Extension Stable or authorize
schema, Validator, runtime, or application implementation.
