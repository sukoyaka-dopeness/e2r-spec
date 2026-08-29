# Automatic Layout Initial Node Placement Persistence Fix Result

Date: 2026-08-29

Status: IMPLEMENTED – AUTOMATED GATE PASS

## Scope

This checkpoint fixes the OUTCOME B runtime persistence semantic gap found in
the Initial Node Placement EXP1 serialization audit. It changes only
LiaisonScape application-local transient tracking and the Coordinate writer
input. It does not change the Coordinate schema, placement algorithm,
Dataset Replacement Safety D1-D7 semantics, Validator, roadmap, or ownership
UI.

## Serialization audit authority and OUTCOME B summary

The authority is
`docs/automatic-layout-initial-node-placement-serialization-implications.md`
at e2r-spec commit `b6eae41`. The prior finding was that automatic Derived
positions entered the render `positions` map, and an unrelated Entity drag
could cause the whole map to be passed to `Save Coordinates`.

The fix separates runtime display positions from the app-local set of Entity
positions adopted for Coordinate persistence. Existing stored Coordinates form
the persistence baseline. Only explicit placement or meaningful Entity drag
overlays the current position for saving.

## Runtime cause and implemented persistence contract

`positions` remains the render/runtime position container. It is not itself a
persistable Coordinate set. App now tracks `adoptedCoordinateEntityIds` as
transient state. The pure helper
`buildPersistableCoordinatePositions()` constructs writer input by:

1. copying compatible stored positions for current Dataset Entity IDs;
2. overlaying current positions only for adopted Entity IDs; and
3. excluding automatic-only and untouched fallback-only positions.

The helper is responsibility-bound in `dataset-replacement-safety.ts`; it does
not move into `EntityService` or the initial placement module.

## Stored Coordinate baseline behavior

On Dataset acquisition, open, replacement, or acceptance, stored compatible
Coordinates are loaded into `positions`, `coordinatesDirty` is reset, and the
transient adoption set is cleared. Existing stored values are retained as the
baseline for a later save. If the stored Entity is meaningfully dragged, its
current position overlays that baseline and is saved.

## Automatic Derived behavior

Ordinary automatic Entity creation still computes the existing deterministic
nearest-free position and displays it through `positions`. It does not add the
Entity to the adoption set and does not set `coordinatesDirty`. An unrelated
Entity drag therefore cannot cause the automatic-only position to enter the
Coordinate writer input.

## Explicit placement behavior

Explicit canvas Entity creation keeps its exact user-selected position and
existing pending semantics. Its Entity ID is added to the adoption set and
`coordinatesDirty` remains true until Coordinate save. The existing explicit
placement geometry and bypass of the automatic solver are unchanged.

## Direct drag behavior

A meaningful Entity drag sets `coordinatesDirty` and adds only the dragged
Entity ID to the adoption set. This applies equally to a fallback-only Entity,
an automatic Derived Entity, and an Entity that already had a stored
Coordinate. A click or sub-threshold movement does not author a Coordinate.

## Save Coordinates behavior

`saveCoordinates()` now obtains stored Coordinates from the current Dataset,
builds the filtered persistable input, and passes that input to the existing
fail-closed `applyStoredCoordinates()` writer. The writer's schema and safety
rules are unchanged.

## Successful-save lifecycle

After a successful write, the saved Dataset becomes the clean baseline,
`datasetModified` and `coordinatesDirty` become false, and the adoption set is
cleared. Automatic-only Derived positions remain non-persisted. The successful
Dataset still contains the Core changes that were already part of the current
Dataset, but only adopted Coordinate positions are written.

## Failed-save lifecycle

If the existing Coordinate writer refuses, the Dataset, `coordinatesDirty`, and
the adoption set remain unchanged. No partial Dataset or partial tracking
state is accepted. Existing migration/readiness refusal messages remain in
force.

## Dataset replacement lifecycle

`datasetModified`, `pendingUserWork`, `recoverableSessionState`, and the D1-D7
replacement guard remain unchanged. Automatic creation alone remains free of
pending Coordinate work. On accepted replacement, the adoption set is reset
with the prior Dataset's transient state; the new Dataset begins from its own
stored Coordinates and fallback reconstruction.

## Deletion and stale-ID behavior

Deleting an Entity removes its ID from the adoption set and its runtime
position entry. The writer also filters stored and adopted input to current
Dataset Entity IDs, so a stale deleted ID cannot be serialized. Relation
deletion behavior is unchanged.

## P1–P10 evidence

The following scenarios are covered by the source audit, the existing focused
tests, and the new pure write-input regression test:

| Scenario | Result | Evidence |
| --- | --- | --- |
| P1 Automatic only | PASS | Existing automatic placement/replacement tests plus App source audit |
| P2 Automatic A + unrelated B drag + Save | PASS | New filtered writer-input test plus App/source path |
| P3 Automatic A + drag A + Save | PASS | Adoption tracking and existing drag/save contracts |
| P4 Explicit Entity + Save | PASS | Existing explicit placement test and unchanged explicit path |
| P5 Stored S + automatic A + drag B + Save | PASS | Stored baseline plus filtered overlay semantics |
| P6 Fallback-only Entity | PASS | Entity-ID filtering and adopted-only overlay semantics |
| P7 Save failure | PASS | Existing fail-closed writer tests and unchanged refusal path |
| P8 Dataset replacement reset | PASS | Existing replacement tests plus acceptance reset path |
| P9 Deletion before save | PASS | Deletion cleanup and current-Entity-ID filtering |
| P10 Stored reopen | PASS | Existing stored-coordinate precedence and reopen path |

## Existing regression evidence

LiaisonScape completed:

- `npm.cmd test`: 267 passed, 0 failed;
- `npm.cmd run lint`: PASS;
- `npm.cmd run build`: PASS; and
- `git diff --check`: PASS.

The test runner may emit the existing WebSocket port-in-use diagnostic on
port 24678 during UI tests; the run still exits successfully. The added test
is `Coordinate save input excludes automatic-only positions and keeps adopted
positions` in `tests/dataset-replacement-safety.test.ts`.

No formal browser smoke was performed in this implementation checkpoint. The
prior human acceptance remains evidence for EXP1 placement behavior; this
checkpoint is limited to the runtime fix and automated evidence.

## Schema, provenance, and Validator impact

No Coordinate schema, Layout schema, provenance field, ownership UI, or new
serialized contract was added. The existing Coordinate writer remains the
serialization authority. Validator behavior and integration are unchanged.

## Dataset Replacement Safety impact

No D1-D7 semantic change was made. The fix supplies a more precise app-local
Coordinate writer input while preserving the existing dirty and pending
signals, replacement staging, discard, export, and recovery behavior.

## Known limitations and unresolved work

This fix selects the minimal runtime interpretation required by OUTCOME B:
stored baseline plus explicitly adopted current positions. It does not define
a general ownership model, persist provenance, or add a user-facing indicator.
The existing fail-closed Coordinate compatibility rules remain authoritative.
C, local adjustment of existing Derived Entities, remains unresolved.
Presentation lifecycle cleanup and any future ownership/schema decision remain
separate work.

## Exclusions and STOP boundary

No automatic placement algorithm, geometry, Relation routing, label placement,
Coordinate/Layout/Presentation schema, Validator, Dataset Replacement Safety
redesign, roadmap, version, sample, Hub, NarrativeLine, release, push, or
deployment change was made. Formal browser acceptance, C, ownership UI, and
the next checkpoint are not started.

## Exact LiaisonScape commit

`24494f4 fix: keep automatic placement derived`

Committed paths:

- `src/App.tsx`
- `src/dataset-replacement-safety.ts`
- `tests/dataset-replacement-safety.test.ts`

STOP.
