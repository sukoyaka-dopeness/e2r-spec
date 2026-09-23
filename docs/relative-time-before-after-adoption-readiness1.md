# Relative Time `before` / `after` Adoption Readiness 1

Date: 2026-09-23
Status: **HUMAN DECISION PREPARATION — NON-NORMATIVE / NO DECISIONS ADOPTED**

## Purpose and boundary

This bounded decision aid identifies the remaining Human semantic decision
explicitly left open by the committed [Relative Time bounded contract
proposal](relative-time-bounded-contract-proposal1.md). It does not revise or
adopt that proposal and does not determine whether E2R should promote Relative
Time to Stable.

The proposal is limited to direct pairwise `before` / `after` assertions and
their endpoint orientation. Its stated blocker to treating the wording as
complete normative semantics is the unresolved temporal referent / assertion
scope. This document isolates that issue rather than reopening topics already
excluded from the selected Branch B scope.

## Current authority and evidence

- The Human-selected Branch B authorizes preparation of proposed wording for
  direct pairwise `before` / `after`, not its adoption. See the [Decision
  Gate](temporal-next-phase-human-decision-gate1.md).
- The proposal's endpoint orientation follows Relative Time Draft 0.1.0:
  `sourceId` is the selected reference/base Object; `targetId` is described
  relative to it; `before` makes the target earlier than the source, and
  `after` makes it later. Core Relation direction itself supplies no temporal
  meaning.
- The proposal says that temporal referent / scope and grounding when an
  endpoint has multiple History assertions remain Human decisions. It also
  states that this unresolved scope prevents treating the wording as complete
  normative semantics.
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
  is separate. It distinguishes Recorded from possible Derived relations and
  does not expand this direct `before` / `after` proposal.

## The one remaining semantic decision

### RT-BR-1 — What temporal referent does a direct assertion compare?

**Decision question.** When a Relative Time `before` / `after` assertion
connects two Core Objects, what temporal fact is being compared, and how is
that fact identified when an endpoint has more than one History assertion?

**Already settled and not up for reconsideration here:** the `sourceId` /
`targetId` orientation and the direct target-relative meanings of `before` and
`after` stated above. This decision concerns what those endpoint Objects stand
for temporally, not which endpoint is earlier.

**Choices for Human consideration (not ranked):**

1. **Object temporal position.** Treat the assertion as comparing the
   temporal positions of the referenced Objects without restricting it to
   Events. A normative text would still need to say what constitutes the
   relevant position where an Object has multiple History assertions, or
   explicitly limit interpretation to cases where the compared position is
   identifiable. This does not make every Entity or Event intrinsically
   point-like.
2. **Event occurrence.** Restrict the referent to an Event's occurrence.
   This narrows applicability and would require the contract to state how
   Event occurrence is represented or identified. Choosing an Event does not
   automatically make its occurrence a single temporal point: an Event may
   have duration, and this option alone does not say whether comparison means
   its beginning, ending, or extent as a whole. It would not silently assign
   the same meaning to an Entity's existence or to a duration/extent.
3. **Explicitly scoped temporal referent.** Require a separately identified
   temporal referent or perspective for the comparison. This could clarify
   which of multiple temporal claims is meant, but may require a model or
   representation beyond the current bounded proposal; that expansion would
   need separate approval before being designed or specified.
4. **Defer adoption.** Keep the proposal non-normative and the current draft
   status unchanged until the referent question is resolved. No data or
   implementation changes follow.

These choices must not conflate an Entity's temporal position, an Event's
occurrence, a duration, and a temporal extent. In particular, this proposal
does not define whether an Event occurrence is point-like or extended, whether
its beginning, ending, or whole extent is compared, interval endpoints,
boundary occurrence, elapsed duration, or which of several History assertions
is authoritative. These remain separate unresolved questions; selecting
Event occurrence would not settle them. Treating any of those as the same
referent would require an explicit Human decision and appropriate scope
approval.

**Effect on the proposal.** Options 1 or 2 could potentially keep the proposal
bounded, but the selected referent and any multiple-History grounding limit
would need to be stated clearly in the normative text. Option 3 may require a
new or expanded proposal and a separately approved scope. Option 4 leaves the
proposal unchanged and unadopted. No option changes the already-reviewed
endpoint orientation unless Human separately requests a revision.

**Can it be deferred?** Yes, by choosing option 4. Under the proposal's own
readiness statement, a normative adoption decision should wait until this
semantic scope is resolved. The choice does not authorize schema, Validator,
runtime, or application implementation.

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
