# LiaisonScape Explicit High-quality Auto Layout Operation Lifecycle Contract Closure 1

Date: 2026-09-14

Status: **LIFECYCLE CONTRACT CLOSED WITH CORRECTIONS / QUALITY SOLVER HOLD / PRODUCT INTEGRATION HOLD / NOT READY FOR HUMAN REVIEW**

## Closure decision

The previous lifecycle contract had two real diagnostic defects and one
accounting drift:

1. it used the full active-operation semantic identity to validate an accepted
   Node-coordinate revert;
2. its revert record kept positions and `coordinatesDirty`, but not the
   pre-operation stored/adopted/derived ownership state;
3. the previous result document recorded `13/13` while the current focused
   source and final run contain `18/18` tests.

The defects are corrected in the diagnostic contract. The lifecycle can now be
formally closed as a solver-independent contract, with Product integration and
quality-solver readiness still held:

- Fast deterministic Initial Placement + explicit High-quality Auto Layout:
  `PROVISIONALLY ADOPT`;
- quality solver: `HOLD / NOT ESTABLISHED`;
- Product integration/default: `HOLD`;
- Adaptive Initial Placement Cascade: `INACTIVE`;
- Initial Layout Release blocker: `OPEN`;
- Human Review: `NOT READY`.

The historical lifecycle result was not rewritten. This document records the
correction/closure relationship and supersedes its lifecycle count only for the
current contract state.

## Source-first diagnosis

Current source confirms that the existing Product coordinate semantics are:

- `App.tsx` keeps current session positions separately from the Dataset;
- `adoptedCoordinateEntityIdsRef` identifies session positions that may be
  written by `Save Coordinates`;
- node drag and explicit Auto Layout set `coordinatesDirty` and add adopted
  Entity IDs;
- `Save Coordinates` is the explicit Dataset persistence boundary and clears
  the adopted set and dirty flag;
- Dataset replacement and coordinate migration use existing pending-work
  safety helpers;
- manual Relation route, Self-loop, Relation-label, and Node-label values are
  separate presentation inputs and are not coordinate ownership.

This source does not yet implement the quality operation lifecycle in
`App.tsx`, nor does it expose an explicit ownership map. The diagnostic
contract therefore makes the implicit Product state explicit as a seam:

```text
coordinateOwnership[EntityId] = stored | adopted | derived
```

At a future Product seam, `stored` is derived from Dataset Coordinates,
`adopted` from the existing adopted-ID set, and `derived` from temporary
coordinate-less placement. No Dataset or Product behavior was changed in this
closure checkpoint.

## Two identities, not one

### Active-operation semantic identity

`snapshotIdentity()` remains the identity used for a running job and for
candidate acceptance. It includes:

- Dataset and graph identity/revision;
- session positions;
- stored/adopted coordinate fingerprints and `coordinatesDirty`;
- explicit coordinate ownership state;
- manual ordinary route and Self-loop inputs;
- manual Relation-label and Node-label inputs;
- locale;
- algorithm version and budget policy.

Viewport and read-only selection are excluded. A viewport-only change clears a
derived preview but does not make the geometry candidate stale. Read-only
selection never invalidates the job.

This broad identity is correct for running work because Product-authoritative
verification depends on presentation inputs. A manual route, Self-loop, label,
or locale change can change the meaning of a candidate's verification result,
so the running job must become stale.

### Coordinate-revert validity identity

`revertValidityIdentity()` is intentionally narrower. It includes only:

- Dataset identity/revision and graph identity;
- current session positions;
- stored-coordinate fingerprint;
- adopted-coordinate fingerprint;
- `coordinatesDirty`;
- explicit `coordinateOwnership`.

It excludes manual route, Self-loop, Relation-label, Node-label, locale,
algorithm, budget, viewport, and selection inputs. The accepted-layout revert
restores Node-coordinate session state only. A later presentation edit does not
change that coordinate state, and the next Product presentation derivation will
consume the retained manual input.

This separation is safe because the revert transaction does not claim to
restore or undo presentation edits. It restores the pre-quality Node geometry
and ownership state, then leaves routing, Self-loop, and label authorities to
rederive from their current manual/automatic inputs. A Node move, Dataset
change, coordinate save/load/reset, or another coordinate operation changes the
narrow identity and expires the revert.

## Manual-authority matrix

| edit | running job | candidate/preview | accepted Node-coordinate revert |
| --- | --- | --- | --- |
| manual Node position | stale | stale | expires |
| manual ordinary Relation curvature | stale | stale | remains valid |
| manual Self-loop geometry | stale | stale | remains valid |
| manual Relation-label placement | stale | stale | remains valid |
| manual Node-label placement | stale | stale | remains valid |
| locale change | stale | stale | remains valid if coordinate state is unchanged |
| viewport-only change | remains; preview may be regenerated | preview cleared, candidate retained | remains valid |

The distinction is deliberate. Running/candidate quality work is
presentation-dependent; a bounded coordinate revert is not a general
presentation undo operation.

## Coordinate ownership restoration contract

### Accept transaction

Accept is the only lifecycle transition that creates a session-coordinate
transaction. It returns:

- candidate positions for the complete current Entity set;
- all candidate Entity IDs as adopted, matching the current explicit Auto
  Layout behavior;
- `coordinateOwnership` with those IDs set to `adopted`;
- `coordinatesDirty: true`;
- `persistDataset: false`;
- `preserveManualAuthorities: true`;
- an accepted coordinate identity for the bounded revert record.

The Dataset and clean Dataset baseline are unchanged. `Save Coordinates` remains
the sole explicit persistence boundary.

### Revert transaction

The revert record now retains:

- prior session positions;
- prior `coordinatesDirty`;
- prior `coordinateOwnership` map;
- derived prior adopted Entity IDs;
- the accepted coordinate validity identity.

The revert transaction returns the prior positions, prior dirty flag, and prior
ownership map/adopted IDs. It explicitly preserves manual presentation
authorities and has `persistDataset: false`. It does not rewrite stored Dataset
Coordinates because accept never changed them.

This is sufficient for clean, dirty, and mixed states:

| state | accept | accept → revert |
| --- | --- | --- |
| pre-operation clean | candidate IDs become adopted and dirty | prior stored/derived ownership and clean flag return |
| pre-operation `coordinatesDirty` | candidate IDs become adopted; prior dirty baseline is retained in revert | prior dirty flag and ownership return |
| mixed stored/adopted/derived | all accepted candidate IDs become adopted; Dataset remains untouched | exact prior ownership map and positions return |
| accept → manual presentation edit | presentation edit remains current | Node coordinates/ownership return; presentation edit is not undone |
| accept → Node move | current coordinate identity changes | revert expires |
| accept → Save Coordinates | stored fingerprint/revision and dirty/ownership state change | revert expires |
| Dataset replacement | Dataset/graph identity changes | revert expires |

Revert is a one-step bounded operation, not a general undo/history system.

## Snapshot immutability

The contract already cloned input snapshots, but top-level freeze alone was
insufficient to support the word “immutable.” The implementation now:

- `structuredClone`s the caller input, separating original caller state;
- recursively freezes snapshot objects and nested arrays/records;
- deep-freezes the cloned snapshot placed in a job envelope;
- never mutates the lifecycle's captured snapshot;
- keeps Worker/cooperative-async transport payloads isolated from the
  lifecycle-owned snapshot.

The focused test mutates nested budget and ownership records and verifies that
the lifecycle snapshot remains unchanged. Candidate data is separately cloned
on delivery and accept, so the candidate cannot alias the caller's object.

## Required lifecycle invariants

The closure tests keep these invariants fixed:

- start, candidate-ready, and preview do not change session positions or
  Dataset state;
- preview does not change Dataset dirty state or `coordinatesDirty`;
- accept alone produces a session-coordinate transaction;
- accept never persists the Dataset;
- reject/cancel/stale/failure never commit a candidate;
- old generation results cannot replace a newer operation;
- cancellation wins a completion race;
- incomplete/non-finite candidate geometry fails closed;
- manual authority is never transferred to the solver;
- Product routing, Parallel/Incident, Self-loop, final labels, endpoint-plan,
  and viewport authority remain external;
- Save Coordinates remains explicit persistence.

## Corrected evidence and accounting

The reproducible diagnostic files are:

- `e2r-liaison-scape/experimental/quality-operation-lifecycle/contract.mjs`;
- `e2r-liaison-scape/tests/quality-operation-lifecycle.test.ts`;
- `e2r-liaison-scape/tools/quality-operation-lifecycle-audit.mjs`;
- `e2r-liaison-scape/experimental/quality-operation-lifecycle/audit.json`.

The current source contains 18 focused `test(...)` declarations, and the
current run passes `18/18`. The audit derives and records the count from the
test source rather than duplicating a hand-maintained number. The earlier
`13/13` document count was stale after the previous final test additions; it is
preserved as historical evidence and corrected here.

The closure audit also records:

- 12 active-operation invalidation reasons;
- cancellation/completion race outcome `cancelled`;
- old-generation result outcome `stale` while the newer operation remains
  active;
- manual presentation edit after accept leaves coordinate revert `allowed`;
- mixed ownership revert returns the prior ownership map and adopted IDs;
- nested snapshot mutation is rejected by deep freeze.

## Product boundary and next gates

No `App.tsx` integration, UI change, Worker adoption, quality solver, provider,
or Product default change was made. The closure is strong enough to proceed to
the next diagnostic gates, but not to Product integration:

1. browser/main-thread execution budget study for the lifecycle seam;
2. bounded quality-solver benchmark using current Product-authoritative
   presentation and this accept/revert contract.

Those gates must preserve the same authority boundaries and must not turn the
operation into Adaptive Initial Placement Cascade. No Actual Product visual
smoke check or Human Review is warranted because no new Product visual
candidate or behavior was produced.

No cross-repository knowledge candidate is added. The evidence is currently a
LiaisonScape operation contract rather than a sufficiently general
cross-repository principle. No session log was updated.
