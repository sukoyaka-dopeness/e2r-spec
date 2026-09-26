# Relative Time `before` / `after` Semantic Direction Decision 1

Date: 2026-09-23

Status: **HUMAN-SELECTED SEMANTIC DIRECTION — NON-NORMATIVE / NOT ADOPTED**

## Purpose and authority boundary

This document records the Human's answer to RT-BR-1 in the [Relative Time
`before` / `after` Adoption Readiness 1](./relative-time-before-after-adoption-readiness1.md):
**Choice 1 — Recognize the bounded qualitative claim**. It records a semantic
direction for preparing a subsequent normative wording review. It does not
revise or adopt the separate [bounded contract proposal](./relative-time-bounded-contract-proposal1.md),
promote Relative Time to Stable, or authorize implementation.

The endpoint orientation already described by the proposal remains unchanged:
`sourceId` identifies the reference Object, `targetId` the Object described
relative to it; `before` asserts that the target is earlier than the source,
and `after` that it is later. This decision does not reopen that orientation.

## Human-selected RT-BR-1 direction

A user-authored direct Relative Time `before` / `after` Relation may be treated
as Recorded evidence of a bounded qualitative temporal-precedence claim
between the selected Core Objects. The claim does not require grounding in a
particular History assertion. If an Object has multiple History assertions,
this direction does not require or authorize automatic selection or
consolidation of one of them. History values do not automatically create or
overwrite a Recorded `before` / `after` Relation. Any relation derived from
History remains a separate Derived / inference question.

The Relation asserts only the qualitative precedence expressed by its
`before` / `after` value. It does not, by itself, assert or imply:

- start-to-start or end-to-start comparison;
- an Event's start, end, duration, or whole temporal extent;
- interval-boundary or boundary-contact facts; or
- additional temporal precision beyond the recorded claim.

Entity, Event, duration, temporal extent, and boundary are not treated as
interchangeable. An Event may have duration; that does not invalidate a
direct qualitative Relation or silently determine which of its temporal
features is compared. When the user does not know or choose a temporal
relationship, no Relation is required.

This is a selected semantic direction, not adopted normative wording. The
wording of the existing proposal still requires separate Human review and an
explicit adoption disposition before it can become normative. No schema,
validation, or implementation change is authorized here.

## Separate future interval-semantics direction

The Human-selected roadmap direction remains to consider `within` and
`overlap` together in a separate future interval-semantics checkpoint, rather
than advance `within` alone. Containment (`within`) and partial overlap
(`overlap`) are intended to be distinct meanings. The future checkpoint may
consider users explicitly selecting and recording known relationships as
Recorded Relations; it does not derive those Recorded Relations
automatically from History.

This document does not define or adopt the normative semantics of `within` or
`overlap`, schema or validation rules, same-temporal-extent, interval
boundaries/contact, or Derived inference. That future checkpoint is separate
and need not be completed before the bounded qualitative `before` / `after`
direction can proceed to its own wording review.

## Period Events and optional presentation suggestion

A period-bearing Event does not automatically create separate start and end
Events, and creating such Events is not required for a direct `before` /
`after` Relation to be valid under the selected direction. If a start or end
has independent historical or narrative meaning and a user wants to record a
more granular Relation, a future UI may optionally suggest recording that
start or end as a separate Event. This is an auxiliary UX direction only; it
does not define the temporal semantics, require the suggestion, or authorize
UI design or implementation.

## Preserved unresolved matters

This decision does not determine `same-instant`, transitivity or other order
laws, solver / closure behavior, contradiction policy, History
cross-comparison, detailed Derived inference, Timeline projection, or UI
implementation. Same-temporal-extent and boundary-contact semantics remain
unresolved. The strict `before` transitivity status difference in the
Cross-Audit remains a separate issue and is not resolved here.

The existing `H2-POSITION-CIRCA` accepted / closed boundary is unchanged;
History 2 deferred authoring shapes remain unadopted. Causal order and
Temporal Perspectives remain separate workstreams.

## Disposition

RT-BR-1 Choice 1 is recorded as the Human-selected semantic direction. No
normative adoption, Stable promotion, schema / Validator / runtime change,
application implementation, or UI authorization is made by this checkpoint.
