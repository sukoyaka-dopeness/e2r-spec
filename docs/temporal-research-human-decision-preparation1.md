# E2R Temporal Research Human Decision Preparation 1

Date: 2026-09-23
Status: **DECISION PREPARATION / NON-NORMATIVE — NO DECISIONS ADOPTED**

## Purpose and current state

This document organizes the unresolved Human decision points from two completed
exploratory Research checkpoints:

- [Relative Time minimum temporal-precedence Research 1](../research/exploratory/e2r-relative-time-minimum-temporal-precedence-research1.md),
  commit `a88dd2c5f7d3f93b42e7e89c3cbf0fc8cb2fc784`;
- [History 2 deferred-shapes authoring-scope Research 1](../research/exploratory/e2r-history2-deferred-shapes-authoring-scope-research1.md),
  commit `855a6090313aed7d77f14f0917be0e6eb0bdf4e4`.

Both results are **EXPLORATORY / NON-NORMATIVE**. Their checkpoint completion
does not adopt either candidate, authorize implementation, or change the
existing accepted boundary. In particular:

- the Relative Time minimum-precedence candidate is not adopted;
- H2-POSITION-CIRCA remains **ACCEPTED / CLOSED** within its existing scope;
- `bounded-point`, `temporal-extent`, and multiple assertions remain deferred;
- no cross-comparison, inference, or write-back between Relative Time and
  History 2 is adopted; and
- Causal order and Temporal Perspectives remain separate workstreams.

The two Research documents include statements such as “the other Research is
not started” or that project-state synchronization has not occurred. Those
sentences describe the state when each result was prepared. Later committed
roadmap and Session 0094 synchronization records both Research results as
complete for exploratory review. This chronological distinction does not
upgrade either result's authority.

The older 2026-09-02 Causal and Temporal Perspectives exploratory records also
contain their own then-current handoff descriptions. They are not refreshed or
re-adjudicated here; later roadmap/Session state and the two 2026-09-23
Research results take precedence for the checkpoint status described below.

This is a decision aid, not a recommended choice or a priority schedule. Each
option is presented without ranking; “defer / retain the current boundary” is
included wherever it remains viable.

## Current authority and responsibility boundaries

| Area | Current evidence | What it does not decide |
| --- | --- | --- |
| Core Relation | Directed endpoints establish structure; Core does not assign temporal or causal meaning. Self-relations and cycles are structurally allowed. | Temporal-precedence laws, causal meaning, or app display. |
| Stable History 1 | Per-object Civil Time and a limited `temporalOrder` meaning where recorded time cannot distinguish objects. | General pairwise precedence, a Timeline rank, or Relative Time semantics. |
| Relative Time 0.1 draft | Candidate Relation-carried assertions; source is the selected reference and target is described relative to it. `before`, `after`, and `same-instant` are draft vocabulary. | Human adoption of laws, complete solver/conflict policy, or persisted derived History. |
| History 2.0 draft | Per-object assertions; multiple claims may disagree and have no preferred winner. | Stable support for every H2 shape or application authoring readiness. |
| Registered History profile | `history@2.0.0` remains Candidate; the separate `position-circa` profile is Stable for one `position` assertion with optional position-level `circa`. | Adoption of deferred H2 shapes or reopening H2-POSITION-CIRCA. |
| Validator / applications | Evidence of a bounded currently implemented diagnostic/editor/read-only subset. | Normative authority by virtue of implementation or tests. |

## Decision dependency overview

The relationships below are semantic prerequisites, not an ordering or
priority recommendation.

```text
Normative Relative Time precedence (if pursued)
  ├─ define what an assertion is about and source/target anchoring
  ├─ decide strict-order and same-instant relationship
  ├─ decide conflict/self-loop/cycle interpretation
  └─ only then bound derivation and any read-only projection
       └─ History comparison is needed only if a chosen use case compares them

History 2 deferred authoring (if pursued)
  ├─ choose whether any authoring scope is wanted; otherwise defer
  ├─ decide shape-specific user meaning and validation
  ├─ establish faithful display and Timeline behavior, if projected
  └─ for multiple assertions: identity/provenance/no-winner and safe partial edits
       └─ Relative Time comparison is needed only if explicitly included
```

Relative Time semantics and History 2 authoring can be decided independently
up to the point a Human-selected use case explicitly compares or combines
their evidence. Neither Research requires the other workstream to be adopted.

## Decision set A — Relative Time

### RT-1. Normative scope and assertion anchor

**Question.** If Relative Time is to move beyond its current draft and
exploratory candidate, what does a pairwise assertion describe: an Event
occurrence, a Core Object's temporal position, or a future explicitly named
perspective? How should a Relation be interpreted when an object has multiple
History assertions?

**Current boundary.** The draft carries Relative Time on a Core Relation and
describes the target relative to the source. It does not settle every
application of an assertion across multiple History shapes. History remains
per-object; Relation-name inference is unsupported.

**Viable options.**

- Retain the draft's current source/target, target-relative interpretation
  while explicitly limiting supported comparisons to evidence the consumer
  can identify. This avoids inventing a perspective model but leaves
  multi-assertion grounding for a later decision.
- Define a narrower occurrence-specific scope, such as Event occurrence
  only. This improves precision but may exclude non-Event objects and needs
  clear endpoint applicability.
- Defer normative scope and preserve/read only. This leaves the draft
  candidate unchanged and requires no code changes.

**Consequences and unchanged boundary.** This decision can change the semantic
scope of the Relative Time extension and downstream Validator/application
support. Any option leaves Stable Core, History 1 `temporalOrder`, H2 profile,
and stored datasets unchanged unless separately authorized.

**Dependencies / timing.** Required before normative adoption or a solver that
claims general semantics. It need not block further descriptive Research,
including History authoring research that does not consume Relative Time.

### RT-2. Strict `before` / `after` laws and conflict handling

**Question.** Should `before` and `after` be inverse encodings of one strict
precedence relation? Which laws apply, and what is the treatment of
self-assertion, a reverse pair, or a longer cycle?

**Current boundary.** Current Validator diagnostics warn for selected reverse
pairs/cycles and return bounded Derived evidence; this is implementation
behavior, not the normative decision. Core still permits Relation cycles
structurally. The Research identifies a one-edge self-loop diagnostic gap.

**Viable options.**

- Adopt a strict partial-order contract with explicit irreflexivity and
  transitivity, while keeping cycles/reverse pairs semantically conflicting
  but structurally valid and preserving recorded assertions. This offers
  consistent graph meaning but makes conflict, diagnostics, and derivation
  rules normative.
- Adopt only narrower direct-assertion meaning and leave transitivity and
  cycle policy unspecified or diagnostic-only. This minimizes required
  inference but gives consumers less shared behavior.
- Defer the laws and treat current Validator output only as bounded tooling
  evidence. No runtime behavior or persisted data changes.

**Consequences and unchanged boundary.** Any adoption affects draft semantics,
diagnostics and potentially service-level operations. Structural Dataset
validity need not change unless separately chosen. No option authorizes
deleting, rewriting, or selecting a recorded Relation.

**Dependencies / timing.** Required before a normative graph solver or any
consumer promises consistent cycle/contradiction behavior. It can be deferred
if Relative Time remains preservation-only or descriptive.

### RT-3. `same-instant`

**Question.** Is `same-instant` an equivalence relation (including
symmetry/transitivity), only a direct recorded pair, or another limited
assertion? How does it interact with strict precedence and conflicting
History?

**Current boundary.** The draft distinguishes same instant from sharing a
calendar granule. The Research candidate treats it as non-strict, but leaves
equivalence and interactions unresolved.

**Viable options.**

- Defer semantic closure and preserve the assertion without same-instant
  inference. This is compatible with the current exploratory status.
- Adopt symmetric/transitive equivalence semantics. This enables equality
  classes but increases propagation and conflict handling requirements.
- Adopt only explicitly recorded pair semantics. This limits propagation but
  requires consumers not to assume transitivity.

**Consequences / dependencies.** This is independent of selecting an H2
authoring shape. It must be settled before normative same-instant inference,
History cross-comparison, or any display that treats unasserted pairs as equal.
It can be postponed while the feature remains unused/read-only.

### RT-4. Duplicate assertion identity and provenance

**Question.** If distinct Relations encode the same directed pair and payload,
are they independent recorded evidence, merely redundant, or eligible for a
diagnostic? Is provenance required before comparing or consolidating them?

**Current boundary.** Relations have their own identity; the draft says
independent assertions use independent Relations and MUST NOT be automatically
merged. Research does not select a redundancy policy.

**Viable options.** Preserve each Relation as independent evidence without a
duplicate warning; report a non-destructive redundancy diagnostic; or defer
duplicate recognition until provenance/identity requirements are specified.
Automatic merge/delete is not a current option without a separate Human
decision because it would change recorded identity/evidence.

**Dependencies / timing.** Not required for a minimal direct-precedence
contract if distinct Relations remain independent. Required before any
consolidation or provenance-sensitive deduplication behavior. It is separate
from History 2 assertion IDs unless a future combined model explicitly links
them.

### RT-5. Derived inference envelope

**Question.** Is any transitive inference normative? If so, what derivation
depth/closure, premise support, scope, and provenance are required, and may a
consumer expose it without an explicit user request?

**Current boundary.** The draft contains candidate basic derivations; the
Validator implementation exposes bounded two-edge Derived evidence and does
not create Relations or persist results. Neither fixes a normative closure or
solver contract.

**Viable options.** Keep direct recorded assertions only; allow a bounded
read-only Derived view with explicit premises/provenance; or specify broader
transitive closure/solver behavior with its cost and consistency contract.
The latter options require additional semantic and operational decisions.

**Consequences / dependencies.** Depends on RT-1 and RT-2, and on RT-3 if
same-instant participates. A bounded view does not require write-back. This
decision is unnecessary for a preservation-only consumer and may be deferred
independently from History authoring.

### RT-6. History comparison and undated read-only placement

**Question.** Should any future consumer compare Relative Time assertions
against H1/H2 recorded temporal values, or show undated Events in a
read-only partial-order presentation? These are two separable decisions:
comparison is semantic; layout is a view projection.

**Current boundary.** There is no adopted History cross-comparison or
write-back. The Research only notes that incomparability can remain; it does
not authorize inference into History, `temporalOrder`, Dataset state, or
persisted Timeline placement. An undated-event layout has not been accepted.

**Viable options.**

- Keep History and Relative Time independent and omit semantic comparison.
- Add a read-only diagnostic comparison only for precisely defined compatible
  recorded values, preserving both sources and reporting conflicts without
  repair or selection.
- Separately consider an undated read-only view. It could display asserted
  precedence while leaving incomparable items unordered semantically; any
  stable visual tie-break must be identified as presentation only.
- Defer both use cases. This preserves the current product boundary.

**Consequences / dependencies.** History comparison depends on RT-1 through
RT-3 and on explicit comparability rules for each History shape; it need not
block a Relative Time contract that excludes cross-comparison. An undated
view depends on whichever direct/inferred graph behavior is adopted and a
separate projection/accessibility contract. Neither is required before
Temporal Perspectives or Causal order research unless those workstreams elect
to consume it.

## Decision set B — History 2 deferred authoring

### H2-1. Whether to retain preservation-only support or open a shape scope

**Question.** Is any deferred-shape authoring wanted now, or should the current
read/preserve/refuse boundary continue without an authoring slice?

**Current boundary.** H2-POSITION-CIRCA remains accepted/closed. The three
deferred shapes do not match its Stable profile and are not authoring-ready by
the Research evidence. Relative Time is a separate responsibility.

**Viable options.** Continue preservation/read-only behavior and defer further
authoring; authorize a separate design decision for one explicitly chosen
shape/use case; or consider a broader authoring model only after its
collection/identity contracts are specified. `bounded-point` being described
as relatively narrower is not a reason to select it.

**Consequences / unchanged boundary.** Deferring changes no data or UI.
Selecting a shape would require new Human approval and would not silently
expand H2-POSITION-CIRCA. History 2.0.0 remains Candidate unless a separate
profile-maturity decision changes that status.

**Dependencies / timing.** This is a gate only before a new H2 authoring
implementation. It need not be answered to continue independent Relative Time
Research or to defer all work.

### H2-2. Shape-specific meaning, display, validation, and projection

**Question.** If a shape is selected for further design, what does the user
record, how are uncertain/unknown bounds explained, and what may a Detail or
Timeline view display or sort?

**Options and trade-offs.**

- **Bounded point:** expose earliest/latest controls and describe a point-like
  occurrence constrained by bounds. A faithful view must not imply duration or
  fabricate a midpoint. Reversed or incomparable bounds need a non-destructive
  diagnostic/correction policy. No range precision beyond the candidate is
  assumed here.
- **Temporal extent:** design distinct start/end boundary and occurrence
  controls for `occurred`, `not-occurred`, and `unknown`; define how missing
  positions and scheduled/future/fictional boundaries are communicated.
  Inclusive/exclusive semantics are not in the current draft and are not
  selected here. It is not simply a generic date range.
- **Multiple assertions:** design a claims collection rather than a scalar
  editor. The user must be able to distinguish claims without treating array
  position as authority; a winner is not implied. This entails identity,
  provenance, disagreement, and unsupported-sibling decisions.
- **Defer authoring and preserve current fallback:** avoids choosing new
  semantics or projection behavior; current accepted profile remains intact.

**Dependencies / timing.** Shape-specific semantics and a minimally faithful
read/display contract precede implementation. The three choices are not
ranked here and need not be combined. Any cross-comparison with Relative Time
is a separate optional decision, not a prerequisite for shape-local authoring.

### H2-3. Multiple-assertion identity, provenance, and atomic editing

**Question.** If multiple assertions are ever authored, what constitutes a
claim, which identity is stable across edits/reordering/import-export, what
provenance can be recorded, and may one supported sibling be edited while
others are unsupported?

**Viable options.** Keep multiple assertions preservation-only; define a
stable local ID and provenance model plus add/edit/remove/reorder semantics
and atomic refusal rules; or limit any future writer to a single assertion and
refuse payloads with siblings. These alter collection authoring scope, not the
already accepted single-position behavior.

**Dependencies / timing.** Required only if multiple-assertion authoring is
chosen. It is not required for bounded-point or extent when each payload stays
at one assertion, and can be deferred if no multi-assertion writer is planned.
No winner-selection policy is proposed.

### H2-4. Object coverage and migration

**Question.** Would a future writer apply to Events only or also Entities and
Relations, and what explicit migration/declaration/atomicity behavior is
needed?

**Current boundary.** The accepted H2-POSITION-CIRCA work has its own bounded
Dataset-wide H1-to-H2 conversion and Entity/Event/Relation coverage. This does
not authorize reusing or widening that flow for deferred shapes.

**Viable options.** A future shape-specific writer could be Event-only with
explicit limits; could define an object-wide Dataset transformation after
separate safety analysis; or remain read-only with no migration. Broader
coverage increases preservation, declaration, rollback, and acceptance scope.

**Dependencies / timing.** Must be explicit before implementation of a chosen
shape. It is independent of Relative Time semantics unless a combined feature
is explicitly proposed. Any alteration to the accepted migration contract is
a separate Human decision and is outside the present choices.

## Independent, dependent, and deferrable decisions

| Decision area | Can be decided independently? | Required before | Can be deferred while… |
| --- | --- | --- | --- |
| RT-1 scope/anchor | Mostly; multi-History grounding can wait if excluded. | Normative Relative Time claims or a general solver. | Relative Time remains draft/preservation-only. |
| RT-2 strict laws/conflicts | Independent of H2 shape adoption. | Normative graph behavior, cycle handling, or solver. | No consumer promises inference/conflict action. |
| RT-3 same-instant | Independent of H2 authoring. | Normative same-instant behavior or any equality inference. | Feature remains unused/read-only or is preserved without evaluation. |
| RT-4 duplicates | Independent of H2 assertion identity. | Any duplicate warning tied to provenance, consolidation, or merge. | Distinct Relations are retained independently. |
| RT-5 inference | Depends on RT-1/RT-2 and RT-3 if equality participates. | Derived output beyond recording direct assertions. | Consumers use recorded assertions only. |
| RT-6 History comparison | Depends on RT semantics and selected History comparability cases. | Any cross-extension conflict judgment or inferred reconciliation. | The extensions remain independent. |
| RT-6 undated display | Depends on chosen precedence evidence and a separate projection contract. | Any UI that presents temporal graph structure. | No such view is being implemented. |
| H2-1 scope gate | Independent of RT adoption. | Any new deferred-shape authoring implementation. | Current preservation/read-only fallback is retained. |
| H2-2 shape contract | Depends on selecting a shape/use case, not on RT. | Shape-specific authoring or temporal projection. | No deferred shape is selected. |
| H2-3 identity/provenance | Only if multi-assertion authoring is selected. | Multi-assertion creation/edit/delete/reorder. | Multiple assertions remain preserved/read-only. |
| H2-4 coverage/migration | Only for a selected future writer. | Any implementation mutation or upgrade path. | No new writer is authorized. |

The following do **not** have to be coupled absent an explicit combined use
case: Relative Time strict-order law and H2 authoring scope; same-instant and
H2 assertion identity; duplicate Relation policy and assertion-ID policy;
undated read-only layout and persisted History authoring; or a shape-local H2
writer and Relative Time inference. History cross-comparison is the explicit
bridge decision, not a default dependency.

## What is required before bounded work—and what is not

“Required now” depends on what Human authorizes; there is no universal
implementation gate created by these Research documents.

| Possible next activity | Decisions it would need first | Decisions it would not automatically need |
| --- | --- | --- |
| Continue no-change / preservation-only posture | None beyond maintaining current boundaries. | All semantic adoption, authoring, inference, and UI choices. |
| Normative direct Relative Time contract without inference or History comparison | RT-1, RT-2 and an explicit decision to leave RT-3/4/5/6 out or unresolved within the bounded contract; exact scope must be stated. | H2-1 through H2-4, Causal order, Temporal Perspectives. |
| Relative Time Derived/solver behavior | RT-1, RT-2, RT-5; RT-3 if it participates; conflict/self-loop/cycle and bounded-vs-closure behavior. | H2 authoring, if History comparison is excluded. |
| History comparison or reconciliation | Relevant RT semantics plus an explicit compatibility/comparability contract for each included History shape. | Unrelated H2 UI/identity work if comparison stays read-only and shape scope is explicitly bounded. |
| Undated read-only precedence display | Chosen evidence semantics, treatment of contradiction/incomparability, and a view-only layout/accessibility contract with no write-back. | H2 authoring, persisted placement, Causal order, Temporal Perspectives. |
| One deferred H2 authoring slice | H2-1 selection; H2-2 for the selected shape; preservation, validation, display, object coverage and migration boundaries. | Relative Time, unless the chosen use case explicitly compares it. |
| Multiple-assertion authoring | H2-1, H2-2, H2-3 and H2-4 as applicable, including identity/provenance, no-winner presentation, sibling preservation, and atomic refusal. | Relative Time unless explicitly integrated. |

Before any implementation, Human approval is additionally needed for the
exact bounded scope, affected repositories/files, mutation and refusal
contract, tests/acceptance boundary, and whether any public-facing semantics
are changed. No option here grants that authorization.

## Existing accepted boundary and cross-workstream independence

No option in this preparation changes H2-POSITION-CIRCA: one `position`
assertion with optional position-level `circa`, its existing explicit
Dataset-wide migration and accepted application behavior. Reopening or
changing that boundary requires a separate Human decision.

The Relative Time Research does not require a decision about the three
deferred History 2 shapes. Conversely, selecting no Relative Time inference
does not prevent Human consideration of shape-local History authoring. A
History cross-comparison rule is needed only if a later selected use case
actually combines the two. No Causal order or Temporal Perspectives Research
was performed here. Neither is a prerequisite to maintaining the current
boundaries; moving into either is a separate scope/sequence decision.

### Causal order and Temporal Perspectives transition gates

The two completed Research results do not establish a prerequisite to begin
either later workstream. Human may defer their unresolved choices while
authorizing a separately bounded Research task. Before adopting a causal
semantic or deriving temporal edges from causal evidence, however, a later
decision would need to define the causal assertion's portable meaning and
scope, distinguish it from temporal precedence, and specify when (if ever) a
causal assertion entails temporal precedence. Relation names alone are not
semantic typing. These are future gates, not decisions made here.

Likewise, Relative Time and deferred History choices need not be settled before
Temporal Perspectives research begins unless that research explicitly consumes
them. Before adopting a perspective-aware semantic model, the open topics
identified by the existing exploratory Perspectives record include
perspective identity, scope (for example object-local, Dataset-wide, or
analysis-local), and separation of normative semantics from view projection.
Those topics remain unresolved; mentioning them here does not restart that
Research or select a representation. A view-only perspective would also need
its own projection boundary, while any persisted perspective semantics require
separate authority and compatibility decisions.

## Decision record for Human response

No choices are preselected. Human may answer only the decisions relevant to a
chosen bounded follow-up and defer the rest. For each chosen item, record the
option, scope limits, explicit exclusions, and whether it authorizes only
Research or also a later implementation proposal. Silence on an item leaves
the current boundary unchanged.

## Sources and validation

- The two committed exploratory Research results listed above.
- `extensions/relative-time-extension-draft.md` and
  `extensions/history-extension-2.0-draft.md`.
- `spec/core.md`, `extensions/history-extension.md`,
  `spec/extension-profile-maturity.md`, and the profile registry.
- `docs/roadmap.md` and `sessions/E2R-Session-0094.md`, including the committed
  Research checkpoint synchronization entries.
- Current Validator/application evidence as cited within each Research result;
  not treated as specification authority.

Validation: verified both commit objects and their Research document paths;
cross-checked current roadmap/Session status, draft responsibility boundaries,
the Stable `position-circa` profile, and each Research decision inventory.
No spec/schema/Validator/runtime/test execution or state change was performed
because this is decision preparation only. `work/` was not inspected beyond
the existing seven-item untracked inventory and was not modified.

## Disposition

Decision preparation complete. All substantive choices remain with the
Human. No normative adoption, shape selection, priority/sequence change,
implementation authorization, roadmap/Session update, staging, or commit is
made by this document.
