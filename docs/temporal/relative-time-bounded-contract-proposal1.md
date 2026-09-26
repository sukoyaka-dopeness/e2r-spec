# Relative Time Bounded Contract Proposal 1

Date: 2026-09-23
Status: **PROPOSAL FOR HUMAN REVIEW — NON-NORMATIVE / NOT ADOPTED**

## Purpose and authorization boundary

This document prepares proposed wording for the Human-selected Branch B in
[Temporal Next-Phase Human Decision Gate 1](./temporal-next-phase-human-decision-gate1.md),
as bounded by the Human-selected [RT-BR-1 semantic direction](./relative-time-before-after-semantic-direction-decision1.md).
Its scope is limited to the direct pairwise meaning and endpoint orientation
of user-recorded Relative Time `before` and `after` assertions.

This is a proposal, not an adopted specification. It does not amend the
Relative Time Draft, Stable Core, Stable History, schema, Validator, runtime,
or application behavior. It does not authorize implementation.

## Evidence and authority

- [Core](../../spec/core.md) defines `sourceId` and `targetId` as Relation
  endpoints. Relation direction is structural; Core assigns it no semantic
  meaning. Core permits self-relations and Relation cycles.
- [History Extension 1.0.0](../../extensions/history-extension.md) records
  temporal information about one Core Object. Its `temporalOrder` is limited
  relative ordering for otherwise indistinguishable recorded temporal values;
  it is not a general pairwise Relation or arbitrary presentation rank.
- [Relative Time Extension Draft 0.1.0](../../extensions/relative-time-extension-draft.md)
  is a non-Stable draft candidate. It defines `sourceId` as the selected
  reference/base Object and `targetId` as the Object described relative to
  that source. The `before` / `after` payload meaning describes the target
  relative to the source. One Core Relation carries one assertion.
- [Minimum Temporal-Precedence Research 1](../../research/exploratory/e2r-relative-time-minimum-temporal-precedence-research1.md)
  and [Temporal Research Human Decision Preparation](./temporal-research-human-decision-preparation1.md)
  record the orientation evidence and distinguish direct assertion meaning
  from unresolved scope, inference, conflict, and History questions.
- [The Human-selected Branch B record](./temporal-next-phase-human-decision-gate1.md)
  authorizes proposed wording for direct pairwise `before` / `after` only.
  Proposal preparation is not normative adoption.
- The committed [RT-BR-1 semantic direction](./relative-time-before-after-semantic-direction-decision1.md)
  selects a bounded qualitative Recorded claim between the selected Core
  Objects. It does not require a particular History assertion or authorize
  inference of a more precise temporal referent.
- Current [Relative Time structural validation](../../scripts/validate-relative-time-draft-schema.mjs)
  and the sibling `e2r-validator` diagnostics/tests are implementation
  evidence only. They map `before` and `after` using the draft orientation;
  they do not establish normative authority.

RT-BR-1 Choice 1 is a Human-selected semantic direction for this wording
proposal, not a normative adoption disposition. The direction does not expand
the proposal to interval relations or implementation.

## Proposed normative wording for Human review

> In a Relative Time `relative-position` assertion whose `relation` is
> `before` or `after`, `sourceId` identifies the reference Object and
> `targetId` identifies the Object described relative to that reference, as
> defined by this Extension. The value `before` asserts that the target is
> temporally earlier than the source. The value `after` asserts that the
> target is temporally later than the source. The Relation's structural
> `sourceId`-to-`targetId` direction does not by itself express either temporal
> direction; consumers MUST interpret these values according to this
> Extension's endpoint orientation, not infer temporal meaning from Core
> Relation direction, Relation name, or presentation order. A Recorded
> assertion is the user's qualitative temporal-precedence claim between the
> selected Core Objects; it does not require grounding in a particular History
> assertion. The existence or number of History assertions does not select,
> reconcile, or replace that Recorded claim. History values MUST NOT by
> themselves create or overwrite a Recorded `before` / `after` Relation.
> Relationships computed from History, if any, are Derived evidence and are
> outside this direct Recorded-assertion contract. The assertion does not by
> itself specify or imply a start-to-start or end-to-start comparison, an
> Object's start or end, duration, whole temporal extent, boundary or boundary
> contact, or precision beyond the qualitative claim. A user is not required
> to record a Relation when the relationship is unknown.

### Reading of the proposed wording

- For `sourceId = B`, `targetId = A`, `relation = "before"`, the direct
  recorded claim is **A is earlier than B**.
- For `sourceId = A`, `targetId = B`, `relation = "after"`, the direct
  recorded claim is **B is later than A** (the same pairwise orientation as
  the first example).
- The words `earlier` and `later` express only the user's direct qualitative
  temporal-precedence claim between the selected Objects. They do not encode
  elapsed duration, a calendar date, a causal relationship, or a display
  position, nor do they identify a start, end, or whole extent as the
  comparison referent.
- A Relation carrying the assertion is recorded evidence, not a Derived
  assertion. History does not automatically create or overwrite it. This
  wording does not permit changing, merging, deleting, or choosing a winner
  among user-authored Relations.

## Deliberate limits and unresolved questions

This proposal intentionally does not determine:

- any more precise temporal referent than the qualitative claim between the
  selected Core Objects. It neither identifies an Event's start/end/extent as
  the referent nor requires or chooses among History assertions. Under the
  Human-selected RT-BR-1 direction, this lack of additional grounding is not a
  blocker to recognizing the bounded Recorded claim proposed above.
- `same-instant` is outside this proposal and receives no definition here.
- **Order laws and conflict handling:** transitivity, irreflexivity,
  self-reference, reverse-pair contradiction, cycles, diagnostic severity,
  structural validity consequences, and operation refusal remain undecided.
  No solver or closure behavior is specified.
- **Incomparable pairs and Derived evidence:** this proposal neither requires
  a total order nor defines a general Derived-inference contract, result
  format, or inference depth.
- **Duplicates and identity:** separate Relations remain separate recorded
  assertions under the existing draft boundary; this proposal adds no
  duplicate detection, consolidation, or winner-selection policy.
- **History comparison or mutation:** there is no comparison with History 1
  dates or `temporalOrder`, History 2 assertions, or any other History shape;
  no History-derived Relation is created as a Recorded assertion, and no
  History date/order or persisted Timeline placement is generated or written
  back. A separate Derived/inference contract is outside this proposal.
- **Presentation and implementation:** no UI, Timeline projection, or
  application behavior is specified or authorized.

The proposed direct wording can be reviewed independently of these excluded
questions. Human may approve, revise, defer, or reject the wording without
thereby authorizing implementation. Approval of this proposal remains a
separate Human disposition; the RT-BR-1 direction alone does not adopt it.

## Existing boundaries preserved

- Relative Time remains a draft candidate; this proposal is non-normative.
- Stable Core and Stable History are unchanged. H2-POSITION-CIRCA remains
  **ACCEPTED / CLOSED** within its existing scope; `bounded-point`,
  `temporal-extent`, and multiple assertions remain deferred and unadopted.
- Causal order and Temporal Perspectives remain separate workstreams.
- No implementation, schema change, Validator change, or application change
  is authorized.

## Validation and disposition

This document remains a Human-review proposal: its proposed wording is
non-normative and not adopted. It reflects the Human-selected RT-BR-1
direction, but does not itself make a normative adoption or Stable promotion.
No wording was added to a canonical specification, and no code, schema,
Validator, test, roadmap, or Session 0094 change was made. No implementation
is authorized.
