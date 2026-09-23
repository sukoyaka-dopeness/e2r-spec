# Relative Time Bounded Contract Proposal 1

Date: 2026-09-23
Status: **PROPOSAL FOR HUMAN REVIEW — NON-NORMATIVE / NOT ADOPTED**

## Purpose and authorization boundary

This document prepares proposed wording for the Human-selected Branch B in
[Temporal Next-Phase Human Decision Gate 1](temporal-next-phase-human-decision-gate1.md).
Its scope is limited to the direct pairwise meaning and endpoint orientation
of Relative Time `before` and `after` assertions.

This is a proposal, not an adopted specification. It does not amend the
Relative Time Draft, Stable Core, Stable History, schema, Validator, runtime,
or application behavior. It does not authorize implementation.

## Evidence and authority

- [Core](../spec/core.md) defines `sourceId` and `targetId` as Relation
  endpoints. Relation direction is structural; Core assigns it no semantic
  meaning. Core permits self-relations and Relation cycles.
- [History Extension 1.0.0](../extensions/history-extension.md) records
  temporal information about one Core Object. Its `temporalOrder` is limited
  relative ordering for otherwise indistinguishable recorded temporal values;
  it is not a general pairwise Relation or arbitrary presentation rank.
- [Relative Time Extension Draft 0.1.0](../extensions/relative-time-extension-draft.md)
  is a non-Stable draft candidate. It defines `sourceId` as the selected
  reference/base Object and `targetId` as the Object described relative to
  that source. The `before` / `after` payload meaning describes the target
  relative to the source. One Core Relation carries one assertion.
- [Minimum Temporal-Precedence Research 1](../research/exploratory/e2r-relative-time-minimum-temporal-precedence-research1.md)
  and [Temporal Research Human Decision Preparation](temporal-research-human-decision-preparation1.md)
  record the orientation evidence and distinguish direct assertion meaning
  from unresolved scope, inference, conflict, and History questions.
- [The Human-selected Branch B record](temporal-next-phase-human-decision-gate1.md)
  authorizes proposed wording for direct pairwise `before` / `after` only.
  Proposal preparation is not normative adoption.
- Current [Relative Time structural validation](../scripts/validate-relative-time-draft-schema.mjs)
  and the sibling `e2r-validator` diagnostics/tests are implementation
  evidence only. They map `before` and `after` using the draft orientation;
  they do not establish normative authority.

The gate is newer than the pre-selection roadmap and Session 0094 snapshots:
Branch B is Human-selected as the next bounded activity, while roadmap/Session
synchronization remains a separate documentation task. This proposal does not
change either record.

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
> Relation direction, Relation name, or presentation order.

### Reading of the proposed wording

- For `sourceId = B`, `targetId = A`, `relation = "before"`, the direct
  recorded claim is **A is earlier than B**.
- For `sourceId = A`, `targetId = B`, `relation = "after"`, the direct
  recorded claim is **B is later than A** (the same pairwise orientation as
  the first example).
- The words `earlier` and `later` express only the direct temporal claim in
  the assertion. They do not encode elapsed duration, a calendar date, a
  causal relationship, or a display position.
- A Relation carrying the assertion is recorded evidence, not a Derived
  assertion. This wording does not permit changing, merging, deleting, or
  choosing a winner among user-authored Relations.

## Deliberate limits and unresolved questions

This proposal intentionally does not determine:

- **Temporal referent/scope:** whether the comparison concerns Event
  occurrence, another Object's temporal position, or a perspective, and how
  endpoints with multiple History assertions are grounded. The draft's
  reference/target orientation is clear, but this broader semantic scope
  remains a Human decision.
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
  no History date/order or persisted Timeline placement is generated or
  written back.
- **Presentation and implementation:** no UI, Timeline projection, or
  application behavior is specified or authorized.

The proposed direct wording can be reviewed independently of those decisions,
but it is not ready to be treated as complete normative semantics while the
temporal referent/scope question remains open. Human may approve, revise, defer,
or reject the wording without thereby authorizing implementation.

## Existing boundaries preserved

- Relative Time remains a draft candidate; this proposal is non-normative.
- Stable Core and Stable History are unchanged. H2-POSITION-CIRCA remains
  **ACCEPTED / CLOSED** within its existing scope; `bounded-point`,
  `temporal-extent`, and multiple assertions remain deferred and unadopted.
- Causal order and Temporal Perspectives remain separate workstreams.
- No implementation, schema change, Validator change, or application change
  is authorized.

## Validation and disposition

This document is a Human-review proposal only. No normative wording was added
to a canonical specification, no semantic decision was adopted, and no code,
schema, Validator, test, roadmap, or Session 0094 change was made.
