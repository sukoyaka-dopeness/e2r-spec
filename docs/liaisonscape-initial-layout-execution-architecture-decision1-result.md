# LiaisonScape Initial Layout Execution Architecture Decision 1

Date: 2026-09-14

Status: **EXECUTION SPLIT PROVISIONALLY ADOPTED / QUALITY SOLVER HOLD / PRODUCT INTEGRATION HOLD / NOT READY FOR HUMAN REVIEW**

## Decision

LiaisonScape should proceed with the following execution architecture as the
preferred and provisionally adopted direction:

**Fast deterministic Initial Placement at startup + explicit High-quality Auto
Layout operation.**

This decision adopts the execution split, not a particular high-quality solver
and not new Product behavior. The current Product provider/default remains
unchanged. Production-quality Auto Layout remains `NOT ESTABLISHED`, Product
adoption remains `HOLD`, and the Initial Layout Release blocker remains
`OPEN`.

The current single startup path remains the authoritative fast baseline. It is
not accepted as a quality-complete architecture. Adaptive Initial Placement
Cascade remains inactive because no new evidence supports variable hidden
startup escalation.

## Evidence used

The decision uses current source and reproducible repository evidence:

- current placement and Product presentation boundaries in `auto-layout.ts`,
  `actual-product-initial-layout.ts`, `graph-presentation.ts`, and
  `viewport.ts`;
- the existing explicit Auto Layout operation, coordinate dirty-state, and
  explicit Save Coordinates flow in `App.tsx`;
- the Responsibility-separated Initial Layout Re-baseline over 21 cases;
- historical continuous, constrained, discrete, and narrow-decomposition
  Structural Placement results;
- Parallel/Relation-label re-evaluation;
- Self-loop angle/radius, runtime, recall/reuse, and full-domain pruning
  results;
- existing coordinate safety, manual authority, presentation, and endpoint
  allocation tests.

The central measured facts are:

- current Initial Placement was deterministic in `21/21` re-baseline cases;
- placement medians were approximately `0.02–0.18ms` in the final diagnostic
  run;
- Product presentation medians were approximately `20.7–37.5ms` for canonical
  cases and `144.8–241.1ms` for dense cases;
- five re-baseline cases retained placement overlap;
- 16 cases retained actual routed crossings;
- dense cases retained 162–301 routed crossings and 9–35 route/label hits;
- Self-loop top-K/pruning did not provide a globally recall-safe compression;
- Parallel/label spacing-only retuning did not close the lane, label,
  outer-route, obstacle, and endpoint-capacity tradeoff.

These timings are in-process Node diagnostics, not browser acceptance data.
They establish relative cost separation and bounded source behavior, not a
main-thread service-level guarantee.

## Current source execution boundaries

The current coordinate-less startup path selects `settleInitialPlacement`,
which is a fixed three-iteration deterministic placement. Stored coordinates
remain authoritative; partially stored coordinates retain mixed-completion
semantics. Opt-in prototype providers are not the App default.

Product presentation is then derived by the existing bounded automatic
presentation pipeline. It owns ordinary route arbitration, final
Relation-label placement, final Node-label placement, one optional feedback
pass, and the inputs used by viewport fit.

The Product already exposes an explicit `Auto Layout` operation. It currently
runs the same basic `solveAutoLayout` mechanism with its default 12 iterations,
synchronously replaces session positions, marks all affected Entity
coordinates as adopted and dirty, and leaves persistence to the separate
`Save Coordinates` action. If unsaved coordinates exist, it asks before
replacement. This is an important source fact: the operation boundary and
explicit-save semantics already exist, but the current operation is not a
high-quality solver and is not cancelable after execution starts.

## Architecture comparison

| option | startup | quality ceiling | authority/coordinate fit | principal risk | disposition |
| --- | --- | --- | --- | --- | --- |
| A. Single Initial Placement | current placement is extremely fast and deterministic | low under a strict startup budget; tested compression loses dense/presentation quality | simplest current flow | expensive coupled Product checks delay first interaction or must be under-sampled | retain as fast baseline; `HOLD` as quality-complete architecture |
| B. Fast Initial + explicit High-quality Auto Layout | preserves current bounded startup | potentially higher because explicit operation can use a larger, cancelable Product-authoritative budget | aligns with existing Auto Layout and explicit Save Coordinates boundaries | operation lifecycle and solver are not production-ready | **execution split `PROVISIONALLY ADOPT` / solver `HOLD`** |
| C. Adaptive Initial Placement Cascade | variable by graph and hidden policy | not shown to exceed B | complicates startup expectation and authority timing | variable latency, memory, and state-space growth | `INACTIVE / INSUFFICIENT EVIDENCE` |

No fourth architecture family is more strongly supported. An asynchronous or
worker-backed proposal job is an execution refinement of B, not a separate
layout authority or an Adaptive Cascade.

## Startup contract

The provisionally adopted startup contract is:

1. Stored/authored Coordinates remain authoritative.
2. Coordinate-less graphs receive the current or equivalently bounded,
   deterministic derived placement.
3. Startup performs one internally consistent Product routing/label/viewport
   derivation. It does not start an iterative high-quality search.
4. The graph becomes interaction-ready only after one coherent baseline
   presentation snapshot is committed. Partially derived route/label state is
   not exposed as final state.
5. Dense inputs may degrade in visual quality, but must retain finite complete
   positions, deterministic behavior, a fixed computation bound, and a clear
   fallback. Startup must not silently widen candidate count or runtime.
6. Initial viewport fit is part of baseline readiness, but is not proof of
   sufficient screen-space label or endpoint capacity.

The present source satisfies the deterministic fixed-placement portion. It
does not yet establish a browser main-thread budget for the complete dense
presentation path. A future Product gate must measure first-interaction and
graph-stable latency in a real browser.

## Explicit quality-operation contract

The explicit High-quality Auto Layout operation should be a proposal and
verification workflow, not a second owner of routing or labels.

### Input and ownership

At start, the operation captures an immutable snapshot containing:

- Dataset identity/version and graph projection;
- current session Node positions and stored-coordinate state;
- manual ordinary-route curvature;
- manual Self-loop geometry;
- manual Relation-label and Node-label placement inputs;
- viewport and relevant Product presentation inputs;
- algorithm version and explicit budget policy.

The quality solver may propose Node geometry and coarse spatial/angular
capacity only. Existing authorities remain responsible for actual routes,
Parallel/Incident allocation, Self-loop geometry, final labels, endpoint-plan
capacity, and viewport fit. The quality operation may repeatedly invoke these
authorities and consume their failure/capacity feedback.

### Execution and cancellation

The operation must be budgeted and interruptible. Browser-native means more
than JavaScript execution:

- bounded elapsed time, candidate/state count, and memory;
- no unbounded full-domain search on dense or multi-loop input;
- cooperative cancellation or worker termination;
- a generation token so stale results cannot commit;
- progress/status reporting that does not imply acceptance;
- deterministic degradation when the budget expires;
- no long unyielding main-thread search.

A Web Worker is a plausible implementation option because the placement and
presentation services are largely pure. It is not adopted by this decision.
If Product-authoritative evaluation cannot be moved safely, cooperative
main-thread chunks with the same cancellation/staleness rules are required.

### Preview, accept, revert

The search result remains separate from current session positions until the
user accepts it. Acceptance replaces session positions, marks the affected
Entity coordinates as adopted and `coordinatesDirty`, and triggers the normal
Product presentation derivation. It does not mutate or save the Dataset.

Reject restores the unchanged pre-operation state. A bounded one-step revert
to the pre-operation session snapshot should remain available until a
conflicting manual geometry edit or another accepted layout replaces that
snapshot. Integration with a broader undo/history system remains future work.

### Manual edits and concurrent interaction

Read-only inspection may continue if implementation can maintain a coherent
snapshot. Any Node move, manual route/Self-loop edit, manual label edit,
Dataset replacement, or graph mutation invalidates or cancels the running job.
Stale output must be discarded.

Manual route, label, and Self-loop authority must be preserved during
verification. Current research mainly evaluated automatic presentation, so
mixed manual-authority quality search remains a required readiness gate.

Repeated execution must produce the same proposal for the same input snapshot,
algorithm version, and budget policy. Changing the budget or algorithm version
is an explicit change of input, not nondeterminism.

## Coordinate ownership

The architecture retains current coordinate semantics:

- stored/authored Coordinates are read as authority and never overwritten by
  merely starting a quality operation;
- current session positions are the preview/accept target;
- accepted quality output becomes unsaved adopted Entity positions;
- `coordinatesDirty` records the pending coordinate change;
- `Save Coordinates` remains the sole explicit persistence operation;
- cancel/reject never changes Dataset data or the dirty baseline;
- replacing already-unsaved positions requires explicit confirmation;
- no automatic save occurs after search or acceptance.

The current App already implements most of the final acceptance semantics for
its simple Auto Layout action. It does not yet have a separate candidate
preview, running-operation cancellation, stale-result guard, or result revert.
Those are Product workflow requirements, not reasons to move coordinate
semantics into the solver.

## Responsibility boundary

The decision preserves the established boundary:

- **Structural Placement:** Node geometry and coarse spatial/angular capacity;
- **ordinary routing:** route geometry, occupied-path arbitration, and churn;
- **Parallel/Incident:** bundle, lane, and endpoint-side allocation;
- **Self-loop:** angle, radius, and fan-out;
- **Relation-label:** final Relation-label placement and ownership;
- **Node-label:** final Node-label placement;
- **endpoint-plan:** authoritative capacity evaluation;
- **viewport:** final screen fit.

The new architecture permits proposal/feedback/verification contracts between
these responsibilities. It does not migrate their authority. In particular,
a candidate geometry may be rejected by endpoint-plan or final label checks;
the placement solver does not reinterpret those checks as its own routing or
label rules.

## Quality ceiling and solver readiness

The execution split has a credible higher quality ceiling because an explicit
operation can spend more time on multiple geometry proposals and full Product
verification without delaying every Dataset open. Existing research indicates
that such a phase can improve:

- Node overlap and separation;
- some structural and actual crossing cases;
- endpoint angular space and coarse corridor capacity;
- component arrangement and viewport-aware geometry;
- the chance of finding a geometry that gives Parallel/Incident and labels
  more usable capacity.

However, the high-quality solver is **not production-ready**:

- no bounded solver has closed dense global coupling;
- no safe cheap proxy replaces endpoint-plan or final label verification;
- Parallel/label still needs a bounded group-level formulation;
- Self-loop owner-local top-K/pruning is not full-domain recall-safe;
- Product-authoritative repeated evaluation remains expensive;
- cancellation, memory bounds, progress, preview/revert, and mixed manual
  authority have not been proven in Product.

Therefore the two classifications are intentionally different:

- **execution architecture:** `PROVISIONALLY ADOPT B`;
- **quality solver readiness:** `HOLD / NOT ESTABLISHED`.

## Initial Layout Release blocker impact

This decision resolves one uncertainty: future quality work should not be
forced into startup merely to preserve a single execution path. It also
confirms the current startup placement as the baseline to retain while design
continues.

It does not close the release blocker. Remaining tracks are:

- placement overlap and baseline-quality thresholds;
- dense crossing and ordinary routing quality;
- Parallel/Incident and Relation-label quality;
- Self-loop quality and safe candidate recall;
- viewport/screen-space capacity;
- browser main-thread and quality-operation runtime budgets;
- cancellation, preview/accept/revert, and coordinate UX;
- production high-quality solver selection and verification.

Startup boundedness is supported by source and Node diagnostics, but real
browser first-interaction timing remains a focused validation requirement.

## Product and Human Review status

No Product behavior, provider, or default was integrated. The decision tool
and artifact are diagnostic only. Consequently no new Actual Product smoke
check or formal Human Review was appropriate. Prior Human Review evidence is
not inherited.

Human Review remains **NOT READY** because there is no new Product candidate or
production-quality solver to review.

## Next roadmap position

The next bounded checkpoint should define and test the explicit operation
lifecycle before introducing a large solver:

1. pure proposal-job state machine with snapshot, cancel, stale-result,
   preview, accept, and revert semantics;
2. focused coordinate/manual-authority compatibility tests;
3. browser main-thread and worker/cooperative execution budget comparison;
4. a separate bounded quality-solver benchmark using Product-authoritative
   verification and explicit failure classes.

The lifecycle and solver benchmark should remain separate logical units. A
working operation shell must not be called high-quality merely because it is
asynchronous, and a diagnostic solver must not bypass coordinate UX.

## Reproduction and changes

The decision digest is generated by:

- `e2r-liaison-scape/tools/initial-layout-execution-architecture-decision.mjs`;
- `e2r-liaison-scape/experimental/initial-layout-execution-architecture-decision/decision.json`.

This result document and the roadmap were synchronized. No production source,
session log, historical result, Product provider/default, Dataset semantics,
or manual authority was changed. The decision is repository-local; it does
not create a new cross-repository knowledge candidate.
