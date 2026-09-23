# Relative Time Atomic Semantics Adoption Readiness 1

Date: 2026-09-24

Status: **READINESS AUDIT / HUMAN DISPOSITION PREPARATION — NON-NORMATIVE; NO ADOPTION**

## Purpose and authority

This bounded audit reviews whether the atomic Recorded assertion wording in
[Atomic Recorded Assertion Semantics Proposal 1](relative-time-atomic-recorded-assertion-semantics-proposal1.md)
is ready for a Human normative-adoption disposition, against the Human-selected
scope and decisions recorded in:

- [Atomic Recorded Assertion Contract Scope Decision 1](relative-time-atomic-recorded-assertion-contract-scope-decision1.md);
- [Atomic Wording Decisions 1](relative-time-atomic-wording-decisions1.md); and
- [Extensible Temporal Assertion Direction 1](relative-time-extensible-temporal-assertion-direction1.md).

The reviewed proposal and decisions are in commit
`8233268d4ac24ecccb141fc2dc4d9da97fef27c8` (`docs: propose atomic Relative
Time semantics`). This audit is preparation only. It does not adopt or amend
the proposal, change the Relative Time Draft/schema, or authorize
implementation.

Authority is distinguished as follows: Stable Core/History define their
existing authority; the Relative Time Draft is a non-Stable candidate;
Human-selected records settle only their expressly selected directions;
Research/Cross-Audit and implementation/tests are evidence, not normative
authority; and the current atomic wording remains a proposal until Human
disposition.

## Readiness summary

**Finding:** No additional semantic choice was identified as a prerequisite
to a Human disposition on the proposal *as an atomic Recorded-claim contract*.
The eight claims have a bounded user-authored meaning consistent with current
Human-selected directions. Their intentionally excluded edge conditions,
machine evaluation, consistency, Derived rules, and representation do not
alone make an atomic assertion meaningless or unreviewable.

This is not a recommendation to adopt. It means the Human can choose to adopt
or request wording changes without first deciding the deferred topics below.
If adopted at this semantic layer, the wording would not by itself make every
value representable in the current Draft 0.1.0 payload/schema. Representation
and integration into a normative Extension remain separate work; the current
schema continues to govern only its existing candidate shape and is not
silently expanded by an adoption disposition here.

## Cross-cutting contract audit

| Topic | Status in current evidence | Readiness assessment |
| --- | --- | --- |
| Relation direction | **Human-selected:** Core endpoints are structural only; Relative Time uses source as reference/base and target as described Object. | Proposal states and applies the orientation consistently. No blocker identified. |
| Assertion unit | **Human-selected:** one Relation is one Recorded assertion; independent claims may coexist as separate Relations. No mirror storage, automatic merge, exclusive classification, or winner is required. | Proposal preserves semantic inverse/symmetry separately from storage. No blocker identified. |
| History boundary | **Human-selected:** an explicit assertion may be recorded without History; History does not create, overwrite, or refine Recorded Relative Time. | Proposal does not require grounding or automatic History-derived recording. No blocker identified. |
| Recorded / Derived | **Human-selected separation; Derived detail deferred.** | Proposal defines only the direct Recorded claim and does not authorize write-back. Transitivity and other Derived laws are not adoption prerequisites for the atomic claim. |
| Quantitative families | **Human-selected responsibility boundary:** calendar-granule and elapsed-offset are distinct from qualitative/topological claims. | Proposal preserves that separation and makes no conversion or entailment rule. No blocker identified. |

These boundaries are supported by the [Core specification](../spec/core.md),
[Stable History Extension](../extensions/history-extension.md), the
[Human-selected extensible-vocabulary direction](relative-time-extensible-temporal-assertion-direction1.md),
and the [scope decision](relative-time-atomic-recorded-assertion-contract-scope-decision1.md).

## Per-vocabulary atomic readiness

“Direction selected” below is not “normatively adopted.” Each row reviews the
claim stated by the proposal and separates deferred evaluation rules from the
atomic meaning.

| Value | Selected basis / proposal claim | Deferred matter | Atomic readiness |
| --- | --- | --- | --- |
| `before` | **Human-selected:** target is qualitatively temporally earlier than source. Proposal expressly avoids `end(A) < start(B)`, start/end, duration, extent, boundary, added precision, and mandatory History grounding. | Strict order laws/transitivity status, cycles, conflict, and machine evaluation. | Bounded and consistent for a direct user-recorded claim. No new atomic blocker identified. |
| `after` | **Human-selected:** target is qualitatively temporally later than source; inverse direction of `before`, stated independently in target-relative-to-source orientation. | Same order/evaluation matters as `before`; no schedule/elapsed-offset interpretation. | Bounded and consistent. Both directions are expressly covered. No new blocker identified. |
| `within` | **Human-selected:** target temporally included within source; not exact equality. Decision 2 selects period-within-period and point-within-period for the current atomic contract. | Endpoint membership, a point exactly on a boundary, History shape mapping, and machine truth/evaluation. | Claim and selected applicability set are explicit. The proposal correctly limits current combinations; no additional decision is needed for disposition. |
| `contains` | **Human-selected:** converse of `within`, with target containing source. Current contract selects period-contains-period and period-contains-point. | Same boundary and machine-evaluation matters as `within`. | Orientation and selected converse combinations are stated. No new atomic blocker identified. |
| `overlap` | **Human-selected direction:** symmetric partial overlap, distinct from containment, exact coextension, and boundary-only `touching`. | Exact endpoint test, uncertainty and shape handling, and History-based classification. | The user-authored claim is bounded at the selected conceptual level. A computational predicate is deferred, not needed to understand the recorded assertion at this scope. |
| `touching` | **Human-selected direction:** symmetric boundary contact without overlapping interiors; not Allen's directional `meets` / `met-by` pair. | Open/closed boundaries, endpoint occurrence, point-at-boundary treatment, and shape applicability. | The selected distinction from interior overlap is stated. No machine boundary convention is adopted or required for this proposal-only claim. |
| `same-temporal-extent` | **Human-selected direction:** symmetric explicit claim of exact coextension, distinct from point coincidence. Coarse History matching does not establish it. | Exact equality/evaluation procedure and applicability to particular shapes. | Explicit coextension is understandable as a user-recorded claim; no automatic equality test is implied. No new blocker identified. |
| `same-instant` | **Human-selected:** point-like occurrence coincidence and, in Decision 1, semantic symmetry. | Mirror storage, reverse Derived assertion, transitivity/equivalence closure, interaction with precedence, and machine evaluation. | Symmetry is consistently separated from storage and inference. The atomic claim is bounded; deferred laws do not block its review. |

The `within` / `contains` non-applicable combinations are scoped to the
current contract only: point-within-point, period-within-point,
point-contains-point, and point-contains-period. They are not declared
permanently prohibited. This is an explicit Human decision, not an inference
from the Draft schema.

## Intentionally deferred versus genuine blockers

The following remain unresolved but are **not identified as blockers to
reviewing/adopting atomic Recorded meanings within the selected scope**:

- open/closed endpoint model, boundary occurrence, and point exactly on a
  period boundary;
- History 1/2 shape mapping and whether a consumer can establish an assertion
  from History;
- cross-assertion contradiction/consistency, duplicates, diagnostics, and
  severity;
- transitivity/order laws, solver/closure, Derived provenance, cross-family
  entailment, or write-back;
- schema/payload shape, Feature names, versioning, migration, preservation,
  Validator, UI, Timeline/Gantt, and application behavior.

This classification follows the committed Human scope decision, which
explicitly separates atomic meaning from machine evaluation, cross-assertion
consistency, Derived semantics, representation/storage, and application
behavior. It does not mean those topics can be ignored when their respective
contracts are designed.

No genuine remaining atomic semantic blocker was found in the inspected
proposal. In particular:

- `same-instant` symmetry is settled by the later Human decision; it does not
  imply storage symmetry or authorize any Derived closure.
- `within` / `contains` shape applicability is settled for the current
  contract by the later Human decision; boundary truth conditions remain
  deferred by design.
- `overlap`, `touching`, and `same-temporal-extent` state explicit recorded
  claims; their exact computational criteria are a separate evaluation
  question, not implicit in this proposal.
- qualitative `before` / `after` remains non-scheduling precedence and does
  not inherit the exploratory Cross-Audit's `end(A) before start(B)` example.

## Draft, schema, and prior research differences

The [Relative Time Draft 0.1.0](../extensions/relative-time-extension-draft.md)
and [draft schema](../schemas/extensions/relative-time-draft.schema.json)
currently encode only `before`, `after`, `same-instant`, `within`,
`calendar-granule-relation`, and `elapsed-offset`. The proposal additionally
states `contains`, `overlap`, `touching`, and `same-temporal-extent`, and
limits current `within` / `contains` applicability per the later Human
decision. The Draft also contains candidate strict-before and within
transitivity examples; their Derived status remains unresolved in later
Human-selected records.

These are material **representation/candidate-status differences**, but not
a blocker to a disposition expressly limited to atomic semantic wording:
the committed scope decision places schema/storage in a later checkpoint.
Adoption of this proposal must not be described as making absent Draft/schema
values valid or implementable. Before datasets can portably serialize or
validate all selected values, a separate Human-authorized Draft/schema
integration and versioning decision will be required.

The Cross-Audit's exploratory extent `before` example
`end(A) before start(B)` is superseded for the selected qualitative meaning by
the later Human-selected direction; it remains no authority to redefine
`before`. Its candidate derivation rules likewise do not override the
explicitly unresolved Derived/order-law boundary. No source conflict changes
the current atomic wording without a separate Human decision.

## Minimal next Human disposition

The remaining Human action at this checkpoint is one disposition on the
current proposal as a whole:

- **Adopt** the proposed atomic Recorded assertion wording as the first
  portable semantic contract, with the stated scope and exclusions; or
- **Request wording revision / defer / reject** with the specific text or
  scope concern.

No additional semantic choice is identified as prerequisite. If adopted, the
decision should explicitly be limited to atomic Recorded meanings and should
not imply Stable promotion, current Draft/schema support, machine evaluation,
Derived rules, or implementation authorization. Those require separate
Human-approved checkpoints.

## Sources inspected

- [Core](../spec/core.md)
- [Stable History Extension](../extensions/history-extension.md)
- [Relative Time Draft 0.1.0](../extensions/relative-time-extension-draft.md)
- [Relative Time Draft 0.1.0 schema](../schemas/extensions/relative-time-draft.schema.json)
- [Atomic wording proposal](relative-time-atomic-recorded-assertion-semantics-proposal1.md)
- [Human-selected atomic wording decisions](relative-time-atomic-wording-decisions1.md)
- [Atomic contract scope decision](relative-time-atomic-recorded-assertion-contract-scope-decision1.md)
- [Extensible-vocabulary direction](relative-time-extensible-temporal-assertion-direction1.md)
- [Semantic-contract Research 1](relative-time-extensible-semantic-contract-research1.md)
- [History 2 / Relative Time Cross-Audit](../research/history-vnext/decisions/history-2x-relative-time-cross-audit1.md)
- [Roadmap current Relative Time direction](roadmap.md#current-relative-time-extensible-vocabulary-direction-2026-09-24)
- [Session 0094 Relative Time synchronization](../sessions/E2R-Session-0094.md)

## Disposition

This document records an audit finding for Human review, not an adoption.
The proposal remains **NON-NORMATIVE / NOT ADOPTED** until the Human makes a
separate disposition. No existing proposal, decision, Draft, schema, roadmap,
Session, Validator, test, or application was changed for this audit. No
staging, commit, push, deploy, Stable promotion, or implementation is
authorized.
