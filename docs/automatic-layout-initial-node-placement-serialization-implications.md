# Automatic Layout Initial Node Placement Serialization Implications

Date: 2026-08-29

Status: CLOSED – RUNTIME PERSISTENCE SEMANTIC GAP

## Scope

This bounded checkpoint audits the serialization and persistence implications
of the already accepted Initial Node Placement EXP1. It changes no runtime,
schema, Validator, ownership UI, or roadmap behavior.

## Why this checkpoint exists

EXP1 correctly treats fresh automatic placement as Derived while no user
Coordinate action has occurred. The audit must determine whether that boundary
continues to hold when `Save Coordinates` is later invoked for another user
action, and whether the existing Coordinate contract is sufficient.

## Authority documents and commits

- `docs/automatic-layout-initial-node-placement-design.md`
- `docs/automatic-layout-initial-node-placement-experiment-1-result.md`
- `docs/automatic-layout-initial-node-placement-experiment-1-acceptance.md`
- `extensions/coordinate-extension-draft.md`
- `docs/layout-persistence-responsibility-decision.md`
- `docs/automatic-layout-placement-ownership-checkpoint.md`
- `docs/dataset-replacement-safety-design.md`
- `docs/dataset-replacement-safety-liaison-scape-implementation-result.md`
- `docs/roadmap.md`

Accepted EXP1 is recorded by e2r-spec commit `304263a`. The implementation
commits are LiaisonScape `866b298` and `320dfc2`.

## Live runtime baseline

LiaisonScape passed 266 tests, lint, and build before this document was
created. The test runner emitted the existing WebSocket port-in-use diagnostic
(`24678`) during some UI tests, but exited successfully with all 266 tests
passing. e2r-spec validation and the document diff check also pass for this
checkpoint.

The live repositories were inspected read-only. LiaisonScape was clean at
`320dfc2`; e2r-spec contained only this new document; the pre-existing dirty
`ai-knowledge/playbooks/e2r-edge-cdp-browser-diagnostic.md` was preserved.

## Current Coordinate responsibility

The existing Coordinate draft stores Entity or Event positions in a defined
Coordinate Space. It does not store an automatic generation algorithm,
provenance, Relation routes, labels, styling, zoom, pan, selection, grouping,
or ordering. Opening or displaying a Dataset must not generate Owned
Coordinates. Automatic Entity placement is therefore Coordinate
responsibility with Derived persistence; meaningful direct Entity movement is
the accepted candidate for user-owned Coordinate adoption.

## Current positions / `coordinatesDirty` data flow

`App.tsx` keeps rendered positions in the `positions` state map. Rendering uses
`positions[id]` first and `buildEntityGraph()` fallback coordinates otherwise.
Opening or replacing a Dataset loads only compatible stored Coordinates into
`positions`, resets `coordinatesDirty`, and reconstructs the remaining nodes
from deterministic fallback positions.

Ordinary automatic creation appends the Core Entity, computes a nearest-free
graph-space position, and adds that position to `positions`. It does not set
`coordinatesDirty`. Explicit canvas creation also adds a position, but sets
`coordinatesDirty`; a meaningful Entity drag sets it as well.

## Automatic placement persistence flow

The automatic flow is:

```text
createEntity -> update Dataset Core -> positions[automatic Entity] -> Derived display
```

No Coordinate payload is written at creation time, and `datasetModified` is
not caused by the solver alone. This satisfies S1 and the accepted EXP1
invariant while the user performs no later Coordinate action.

However, the automatic position remains in the live `positions` map. If a
later action makes `coordinatesDirty` true, the current writer receives that
map and can serialize every valid Entity position present in it.

## Explicit placement persistence flow

An explicit canvas point is retained through creation and stored in
`positions`. It sets `coordinatesDirty`, remains pending until `Save
Coordinates`, and is then passed to `applyStoredCoordinates`. This is
consistent with explicit user intent and the current Coordinate contract.

## Direct drag persistence flow

Node drag updates only the dragged Entity's entry in `positions` and sets
`coordinatesDirty` once movement is meaningful. It does not separately mark
the dragged Entity in the Dataset. `Save Coordinates` is the writer boundary.

## Save Coordinates semantics

`saveCoordinates()` calls `applyStoredCoordinates(dataset, positions)` and,
on success, replaces the Dataset with the result and clears
`coordinatesDirty`. `applyStoredCoordinates()` iterates the current Entity
positions supplied by the caller and writes every valid supplied position into
the existing compatible Coordinate payload, preserving unrelated fields under
its fail-closed rules.

This is a whole-current-positions writer, not a writer restricted to the
Entity whose direct manipulation caused the dirty state.

## Scenario audit

| Scenario | Source / existing-test result | Classification |
| --- | --- | --- |
| S1 Automatic creation only | `saveCreation()` adds the generated point only to `positions`; existing replacement-safety test confirms `coordinatesDirty: false` | Derived, not serialized yet |
| S2 Automatic creation then Save without dirty Coordinates | Save control is disabled and `saveCoordinates()` returns when `coordinatesDirty` is false | No-op; no write path |
| S3 Automatic A + unrelated drag B + Save | A and B are both in `positions`; the writer receives the whole map and writes valid supplied positions | A can become serialized as a side effect |
| S4 Automatic A + drag A + Save | A is in `positions`, drag makes the state dirty, and the writer saves A | Consistent with direct-manipulation adoption |
| S5 Explicit canvas + Save | Explicit point is in `positions`, dirty is true, and the writer saves it | Consistent with explicit ownership |
| S6 Stored + automatic + unrelated drag + Save | Stored and newly generated entries in `positions` are written; fallback-only nodes absent from the map are not written | Mixed authority; generated entries can leak into save |
| S7 Reopen | `getStoredCoordinates()` has precedence; generated positions absent from serialized data regenerate as fallback | Stored wins; generated data is otherwise not restored |
| S8 Dataset replacement | Replacement staging uses `datasetModified || pendingUserWork`; automatic creation alone does not create pending Coordinate work, while drag/explicit placement does | Safety boundary holds before Save; later whole-map Save remains the gap |

## Critical S3 result

S3 is decisive. Automatic Entity A is placed in `positions` as Derived. An
unrelated Entity B drag sets `coordinatesDirty = true`. `Save Coordinates`
then passes the complete `positions` map to `applyStoredCoordinates`, so A's
current automatic position is eligible for serialization together with B's
user-moved position and any other valid position already in that map.

Therefore, the current runtime does not preserve the stronger interpretation
that only the directly adopted Entity is Owned. This is a persistence semantic
gap, not evidence that the Coordinate JSON shape needs a provenance field.

## Fallback-position implications

`buildEntityGraph()` fallback coordinates are deterministic and are used when
an Entity has no stored Coordinate and no live `positions` entry. They are not
automatically inserted into `positions` on Dataset open. Consequently,
fallback-only nodes are regenerated on reopen and are not written by a later
Save unless a live position for them has been established. Stored Coordinates
remain authoritative and are never replaced by fallback generation.

## Derived versus Owned implications

The accepted principle remains: observation must not author; meaningful direct
manipulation should usually author. The runtime satisfies this for the dirty
flag and replacement prompt, but its whole-map writer does not retain the
per-Entity distinction once any Coordinate save is authorized. The gap is
between runtime ownership intent and the writer's input boundary.

## Observation and direct-manipulation principle

Selection, pan, zoom, reload, and automatic generation do not establish user
authorship. Explicit placement and meaningful drag do. No ownership indicator
or provenance field is introduced here.

## Coordinate schema implications

OUTCOME B does not require a new serialized contract. The existing Coordinate
schema can represent Entity positions, and it intentionally does not represent
the automatic algorithm or provenance. The problem is deciding which live
positions the application is authorized to pass to the existing writer.

Automatic-placement provenance must not be inferred or added in this
checkpoint. A future fix may narrow the writer input or explicitly adopt a
different persistence policy, but that requires a separate bounded decision.

## Validator implications

Validator change is not required solely for EXP1 or this finding. The existing
Coordinate validation remains authoritative for the existing payload shape.
If a future decision introduces provenance, ownership, or another serialized
field, that future contract must receive its own schema and Validator
checkpoint. That work is not started here.

## Dataset Replacement Safety implications

Dataset Replacement Safety remains correct for the current dirty signals:
automatic creation alone does not create pending user work; explicit placement
and meaningful drag do. The replacement risk is that a later accepted Save
can persist more positions than the direct user action semantically adopted.
That is a future runtime persistence checkpoint, not a replacement-dialog fix
in this document.

## Result classification

**OUTCOME B — CLOSED / RUNTIME PERSISTENCE SEMANTIC GAP**

- Existing Coordinate serialization is structurally sufficient.
- Current runtime Save Coordinates can serialize automatic Derived positions
  when another Entity makes the whole `positions` map save-eligible.
- No provenance field or new schema is justified by this audit alone.
- The required fix, if adopted, belongs to a future runtime persistence
  decision and implementation checkpoint.
- Validator integration does not begin from this document.

## Exact evidence

- `src/App.tsx`: `positions`, `coordinatesDirty`, `saveCreation`,
  `saveCoordinates`, `acceptDataset`, `nodePosition`, and drag completion.
- `src/dataset.ts`: `getStoredCoordinates`, `buildEntityGraph`, and
  `applyStoredCoordinates`.
- `src/dataset-replacement-safety.ts`: `applyEntityCreationPlacement`,
  `preservePendingCoordinates`, and replacement-state functions.
- Existing tests: `tests/dataset-replacement-safety.test.ts`,
  `tests/dataset.test.ts`, `tests/graph.test.ts`,
  `tests/direct-graph-authoring.test.ts`, and
  `tests/appUiIntegration.test.ts`.
- Baseline commands: `npm.cmd test`, `npm.cmd run lint`, and
  `npm.cmd run build` in LiaisonScape; `npm.cmd run validate` in e2r-spec.

## Known limitations

This is a source and existing-test audit, not a new browser persistence
experiment. Existing tests prove the writer and dirty-state contracts but do
not assert the complete S3 dataset payload after an automatic-plus-unrelated-
drag sequence. That missing focused test is evidence for future work, not a
reason to alter runtime in this checkpoint.

The audit does not decide whether a future Save should persist all currently
displayed positions, only explicitly adopted positions, or another documented
set. It also does not resolve C, local adjustment of existing Derived Entities.

## Exclusions and STOP boundary

No LiaisonScape runtime or test change, Coordinate/Layout schema change,
provenance field, ownership UI, Validator integration, Dataset Replacement
Safety implementation change, sample refresh, version change, roadmap change,
release, push, or deployment was made. C local adjustment and Presentation
lifecycle cleanup remain unstarted. The next checkpoint is not started.

STOP.
