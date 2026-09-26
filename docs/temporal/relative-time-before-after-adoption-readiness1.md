# Relative Time `before` / `after` Adoption Readiness 1

Date: 2026-09-23
Status: **HUMAN DECISION PREPARATION — NON-NORMATIVE / NO DECISIONS ADOPTED**

## Purpose and boundary

This bounded decision aid identifies the remaining Human semantic decision
explicitly left open by the committed [Relative Time bounded contract
proposal](./relative-time-bounded-contract-proposal1.md). It does not revise or
adopt that proposal and does not determine whether E2R should promote Relative
Time to Stable.

The proposal is limited to direct pairwise `before` / `after` assertions and
their endpoint orientation. The proposal and later project direction treat a
user-recorded Relation as Recorded evidence and keep History-derived
relationships separate. This document asks whether the direct Recorded claim
can be normatively recognized without requiring a particular History
assertion or start/end/extent grounding, while leaving any meaning beyond the
claim itself unspecified.

## Current authority and evidence

- The Human-selected Branch B authorizes preparation of proposed wording for
  direct pairwise `before` / `after`, not its adoption. See the [Decision
  Gate](./temporal-next-phase-human-decision-gate1.md).
- The proposal's endpoint orientation follows Relative Time Draft 0.1.0:
  `sourceId` is the selected reference/base Object; `targetId` is described
  relative to it; `before` makes the target earlier than the source, and
  `after` makes it later. Core Relation direction itself supplies no temporal
  meaning.
- The proposal lists temporal referent / scope and the treatment of endpoints
  with multiple History assertions as unresolved. It does not establish that
  an assertion must be grounded in a History assertion; the later Human-
  selected roadmap direction says History-derived relationships are a
  separate question and are not automatically Recorded Relations.
- Minimum Temporal-Precedence Research 1 and the broader Temporal Research
  Human Decision Preparation document distinguish recorded assertions from
  Derived evidence and list Event occurrence, Object temporal position, and a
  possible named perspective as different scope questions. They are
  exploratory decision evidence, not authority for selecting one.
- The current draft describes Relative Time as a relationship between Core
  Objects and History as temporal information about one Object. Its structural
  schema/Validator checks placement, declarations, and endpoint integrity;
  implementation evidence does not resolve the referent question or confer
  normative authority.
- The committed roadmap direction for a future `within` + `overlap` checkpoint
  is separate. It records a direction to consider these as distinct,
  explicitly user-recorded Relations rather than automatically classifying
  them from History, while distinguishing possible Derived relations. It does
  not adopt their semantics or expand this direct `before` / `after` proposal.

## The one remaining semantic decision

### RT-BR-1 — Is a bounded qualitative Recorded claim sufficient?

**Decision question.** Should a direct Recorded `before` / `after` assertion
be recognized as a qualitative temporal-precedence claim between the user-
selected Core Objects, without requiring additional grounding in a particular
History assertion or in a start/end/extent referent? Or is that bounded claim
insufficient for normative semantics until an explicit temporal-referent
model is defined?

**Already settled and not up for reconsideration here:** the `sourceId` /
`targetId` orientation and the direct target-relative meanings of `before` and
`after` stated above. The question is not whether the user must also supply
History data. It is whether the explicit Relation claim alone can be the
Recorded evidence, with no extra interpretation inferred beyond what it
asserts.

**Choices for Human consideration (not ranked):**

1. **Recognize the bounded qualitative claim.** Treat the user-authored
   Relation itself as the Recorded claim that one selected Core Object is
   temporally before/after the other. Do not require a particular History
   assertion or select one automatically when several exist. This does not
   infer start-to-start, end-to-start, duration, whole-extent, or boundary
   facts beyond the claim. If the user does not know or choose such a
   relationship, no Relation need be recorded. A normative text may need a
   short clarification that the claim carries no additional endpoint-level
   precision or History grounding.
2. **Defer until a referent model is defined.** Treat a qualitative claim
   between Core Objects as insufficiently specified for normative adoption
   unless a temporal referent model is first defined. The proposal remains
   non-normative / not adopted; this choice does not select which referent
   model to design.

**Limits under either choice.** Entity, Event, duration, temporal extent, and
boundary are not interchangeable. An Event occurrence need not be a single
point. This proposal does not infer a start, end, extent comparison,
duration, or boundary condition from `before` / `after`; it also does not
select or require a History assertion as the basis for a direct Recorded
claim. Any History-derived relationship remains a separate Derived/inference
question. Multiple History assertions are not automatically selected or
collapsed. The user is not required to record a Relation when the relationship
is unknown.

**Effect on the proposal.** Choice 1 could retain the direct pairwise scope
while making its non-inference boundary explicit; it does not decide any
start/end/extent semantics. Choice 2 leaves the proposal unchanged and
unadopted pending a separate referent-model decision. Neither choice changes
endpoint orientation or authorizes History comparison, Derived output,
schema/runtime changes, or implementation.

**Can it be deferred?** Yes. Choosing option 2 retains the present draft and
proposal status without changing data or implementation. Even choosing option
1 here would be a semantic direction only; normative wording and adoption
would still require a separate explicit Human review and approval.

## Matters deliberately not brought back as decisions

The following were explicitly outside the selected bounded proposal or are
separate future work. This checkpoint neither decides nor requires deciding
them to answer RT-BR-1:

- `same-instant` semantics;
- transitivity, solver/full closure, incomparability behavior, self-loop,
  cycle, contradiction, duplicate, or diagnostic/severity policy;
- History 1 `temporalOrder` or History 2 cross-comparison, deferred authoring
  shapes, and any automatic History derivation or write-back;
- `within`, `overlap`, same-temporal-extent, interval boundaries/contact, or
  Derived inference from History;
- Timeline projection or presentation placement, UI, or implementation.

Those limits do not assert that the questions have been settled elsewhere;
they preserve their separate unresolved/deferred status. `H2-POSITION-CIRCA`
remains **ACCEPTED / CLOSED** within its current scope, and broader History 2
authoring remains deferred.

## Adoption procedure is not a second semantic question

After RT-BR-1 is answered, Human must still explicitly review the resulting
normative text and choose to approve it, request revision, defer, or reject it.
That is the formal adoption disposition, not an additional semantic choice
invented by this document. Approval of wording alone would not authorize
implementation; any implementation scope would require separate Human
authorization.

## Disposition

This document prepares one semantic decision for Human review. It makes no
recommendation or selection, changes no existing proposal or authority, and
does not claim the proposal is ready or not ready by Codex judgment. No
normative adoption, Stable promotion, schema/Validator/runtime change, or
application implementation is authorized.
