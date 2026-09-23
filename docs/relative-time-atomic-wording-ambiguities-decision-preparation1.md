# Relative Time Atomic Wording Ambiguities Decision Preparation 1

Date: 2026-09-24

Status: **HUMAN DECISION PREPARATION — NON-NORMATIVE / NO DECISIONS ADOPTED**

## Purpose and scope

This document prepares Human decisions on only two wording questions in the
uncommitted [Atomic Recorded Assertion Semantics Proposal 1](relative-time-atomic-recorded-assertion-semantics-proposal1.md):

1. whether `same-instant`'s atomic point-coincidence meaning includes semantic
   symmetry; and
2. how the `within` / `contains` atomic wording avoids implying unselected
   shape combinations.

It does not revise that proposal or decide any other relation semantics. The
current repository evidence takes precedence over summaries in prior prompts.
The proposal remains a non-normative worktree document; this preparation does
not adopt its wording, authorize implementation, or change other files.

## Existing authority and shared boundaries

The committed [Human-selected extensible-vocabulary direction](relative-time-extensible-temporal-assertion-direction1.md)
and [atomic-contract scope decision](relative-time-atomic-recorded-assertion-contract-scope-decision1.md)
establish the following, without deciding the two questions below:

- Core Relation endpoint direction is structural only. Relative Time uses
  `sourceId` as reference/base and `targetId` as described Object; a value
  describes target relative to source.
- The first portable contract concerns atomic Recorded assertion meaning
  only. Machine evaluation, History-shape truth checks, cross-assertion
  consistency, Derived laws, schema/storage, and application behavior are
  separate scopes.
- One Relation carries one Recorded assertion; independent assertions may
  coexist as separate Relations. No automatic mirror Relation, merge,
  exclusive classification, or winner selection is required.
- History does not create, overwrite, or refine Recorded Relative Time;
  Recorded and Derived remain separate.

The [semantic-contract Research 1](relative-time-extensible-semantic-contract-research1.md)
and the current proposal are evidence/preparatory documents, not adopted
semantics. Neither question here authorizes changing the scope decision.

## Decision 1 — Is `same-instant` semantically symmetric?

### Existing evidence

- The Human-selected vocabulary direction, under **“Human-selected semantic
  families and vocabulary direction”**, keeps `same-instant` as point
  coincidence distinct from `same-temporal-extent`, but explicitly leaves its
  symmetry, transitivity, interaction with precedence, and normative status
  unresolved.
- The Relative Time Draft 0.1.0, under **“Relative position”**, lists
  `same-instant` and says it describes the target relative to the source; it
  does not specify a symmetry law there.
- The Cross-Audit, under **“Cross-audit / Recorded versus Derived”**, gives
  `same-instant` plus `before` as a possible Derived example only if explicit
  `same-instant` semantics are established. That is candidate inference
  evidence, not a Human-selected symmetry or transitivity decision.
- The current proposal's atomic sentence says the target's and source's
  point-like occurrences are at the same instant, while its limits leave
  symmetry and transitivity undecided.

### Already selected versus unresolved

Selected: the atomic concept is point-like temporal coincidence, distinct
from equal temporal extents. Not selected: whether that atomic concept is
formally designated symmetric for interoperable interpretation. Existing
direction explicitly leaves symmetry open, so the candidate phrase alone
must not be treated as a completed Human decision.

Three separate matters must remain distinct:

1. **Semantic symmetry:** whether swapping source and target expresses the
   same `same-instant` claim.
2. **Storage:** whether a reverse/mirror Relation is stored. Existing
   direction does not require automatic mirror storage, regardless of the
   symmetry choice.
3. **Derived rules:** whether symmetry may produce a reverse Derived result,
   and whether transitivity, equivalence closure, or other inference follows.
   These remain out of scope and undecided under either option below.

### Human choices

**Choice A — Select atomic semantic symmetry.** State that the point-like
coincidence claim is semantically symmetric: if target and source occurrences
are at the same instant, exchanging their roles preserves the claim. This
would settle only the atomic semantic relationship. It would not require a
second stored Relation and would not authorize reverse Derived assertion,
transitivity, equivalence classes, closure, or Validator behavior.

**Choice B — Leave symmetry unresolved.** Keep the point-coincidence atomic
wording but make no portable symmetry promise yet. A consumer could not rely
on endpoint reversal being semantically equivalent from this contract alone.
The proposal would need to label symmetry as deferred and would remain
incomplete on this point for Human review; storage, transitivity, and Derived
behavior would still remain separate.

The repository does not uniquely settle Choice A versus Choice B: intuitive
equality language suggests symmetry, but the explicit Human-selected record
reserved this law for later decision. No option is recommended here.

## Decision 2 — How narrowly should `within` / `contains` state shape scope?

### Existing evidence

- The Human-selected direction, under **“Human-selected semantic families
  and vocabulary direction”**, says `within` means target temporally included
  within source; `contains` is its inverse; exact equality is excluded; and
  point-like Event within period Event is in scope as a selected use
  direction. It says boundary/applicability is not complete.
- Under **“Point-like and period Events”**, it says `within` / `contains` are
  not selected as period-to-period-only concepts and repeats the point-like
  Event within period Event example. It leaves endpoint membership, boundary
  points, uncertainty, and History 2 authoring readiness unresolved.
- This establishes point-within-period as an intended use, but does not
  expressly list period-within-period as a selected combination. “Not
  period-to-period-only” does not, by itself, enumerate every supported
  shape pairing.
- The Relative Time Draft, under **“Containment”**, has one `within` value and
  states that exact applicability to point, bounded-point, and extent shapes
  remains a semantic-contract/diagnostic concern.
- The Cross-Audit, under **“Initial applicability scope”** and
  **“Compatibility matrix”**, treats point-to-extent `within` as an initial
  candidate and extent-to-extent as dependent on boundary semantics; the
  matrix calls extent-to-extent unresolved until boundaries are defined.
  This is candidate research, not a Human-selected rule.
- The current proposal's phrase “target's temporal occurrence or extent is
  within the source's temporal occurrence or extent” can be read broadly as
  permitting every occurrence/extent pairing, even though the selected
  direction does not enumerate all pairings.

### Already selected versus unresolved

Selected: target-in-source containment; inverse `contains`; exact equality is
not `within` / `contains`; point-like Event within period Event is an intended
use direction. Unresolved: whether period-within-period is itself an affirmed
atomic applicability direction, and how other pairings should be described.
Open/closed boundary, exact boundary-point inclusion, History-shape matrix,
and machine evaluation are explicitly outside this decision preparation.

Because endpoint orientation is already settled, `contains` means that the
target includes the source, while `within` means that the target is included
in the source. These are converse claims under the same endpoint convention;
describing one inclusion with the endpoints exchanged uses the corresponding
converse value. This semantic relationship does not require storing a mirror
Relation or deriving one.

### Human choices

**Choice A — Keep atomic wording shape-neutral and defer applicability.**
Describe `within` as target temporal scope included in source temporal scope,
and `contains` as its inverse, while explicitly saying the wording does not
assert that every point/period/bounded shape pairing is supported. Record
point-within-period as the selected example; leave period-period and all other
pairings for a later applicability checkpoint. This keeps atomic claim
meaning separate from which data shapes a consumer can evaluate.

**Choice B — Enumerate selected combinations now.** Amend the proposal to
state the exact shape combinations intended at the atomic-meaning layer. The
existing evidence supports naming point-within-period. To also list
period-within-period as selected would require Human confirmation because the
committed direction does not expressly select it and the Cross-Audit leaves
extent-to-extent contingent on boundary semantics. Other combinations would
remain unresolved unless separately selected. This choice would add an
explicit scope statement, not a boundary or machine-evaluation rule.

**Choice C — Limit explicit applicability wording to the documented
point-within-period direction.** State that direction expressly and leave
whether the generic atomic meaning covers other pairings unstated. This is
narrower in stated examples but should not be read as rejecting other
combinations.

No option decides open/closed boundaries, point exactly on a boundary,
uncertainty, History 2 authoring, or a machine-evaluation matrix. No option
changes `within` / `contains` inverse orientation or the exact-equality
distinction from `same-temporal-extent`.

## Minimal Human decision set

1. For `same-instant`, choose whether atomic semantic symmetry is selected now
   (Choice A) or remains explicitly unresolved (Choice B). Storage of mirror
   Relations and all Derived/equivalence laws remain separate either way.
2. For `within` / `contains`, choose shape-neutral atomic wording with
   applicability deferred (Choice A), enumerate selected shape combinations
   (Choice B, requiring explicit confirmation for period-period), or state
   only the already documented point-within-period example (Choice C).

These are the only decisions prepared here. If the Human wants an additional
shape, boundary, inference, or compatibility rule, it should be scoped as a
separate decision rather than inferred in this checkpoint.

## Disposition

This is a non-normative decision-preparation record. It makes no selection
among the choices, does not edit the atomic wording proposal, and does not
adopt any Relative Time semantics. Schema, version, machine evaluation,
Derived laws, conflict policy, Validator, UI, and application behavior remain
outside scope. No implementation, staging, commit, push, or deploy is
authorized.
