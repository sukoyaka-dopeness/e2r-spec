# Initial Node Placement Experiment 1 Result

Date: 2026-08-29

Status: implemented bounded experiment; runtime acceptance by automated gates

## Design1 authority

This result implements only the B candidate selected by
`docs/automatic-layout-initial-node-placement-design.md`: deterministic
nearest-free placement around the desired spawn for a freshly created Entity.
The C candidate, local adjustment of existing Derived Entities, was not
implemented.

## Selected B behavior

The pure `placeInitialEntity` calculation receives the desired graph-space
point, the currently established Entity positions, and visible graph-space
bounds. It returns the desired point when it is free. When occupied, it checks
eight directions in a fixed clockwise order over eight bounded rings and
returns the first valid candidate. If no candidate is valid, it returns the
desired point as the deterministic fallback.

The experiment parameters are:

- Entity body half-size: `32` graph units (`64 x 64` body);
- safety margin: `12` graph units;
- clearance: `76` graph units;
- maximum search rings: `8`; and
- direction order: east, southeast, south, southwest, west, northwest, north,
  northeast.

These are application experiment parameters, not E2R Core, Coordinate, or
Layout schema.

## Implemented responsibility and files

The pure deterministic calculation is in
`e2r-liaison-scape/src/initial-entity-placement.ts`. It owns no React state,
Dataset mutation, pointer events, DOM measurement, or serialization.

`src/App.tsx` calls it only for ordinary automatic Entity creation. Existing
rendered positions are collected as obstacles. The desired point is still
derived by `graphPointFromViewportCenter`, and visible graph bounds are
calculated by inverse-transforming the fixed `800 x 500` viewBox using the
current `scale` and `pan`.

Explicit canvas placement remains exact: when `pendingEntityPlacement` exists,
the solver is bypassed and that point is applied unchanged. `EntityService.ts`,
`direct-graph-authoring.ts`, `dataset-replacement-safety.ts`, and `dataset.ts`
retain their prior responsibilities and semantics.

## Invariants and safety result

- Existing stored, fallback, Derived, or dragged positions are never changed.
- Repeated automatic creation does not reshuffle existing Entities.
- Stored Coordinate precedence on open/reload is unchanged.
- Explicit canvas placement remains user-owned pending Coordinate work.
- Automatic placement alone leaves `coordinatesDirty` unchanged.
- Automatic placement alone does not add `pendingUserWork`.
- No Dataset mutation is performed by the solver.
- The algorithm and its parameters are not serialized.
- No Coordinate or Layout schema, Validator, or Dataset Replacement Safety
  change was required.
- Relation routing, Relation labels, and node-label placement are not solver
  inputs.

## Automated evidence

The new pure placement tests cover empty/free desired points, occupied points,
multiple blockers, deterministic repetition, non-mutation, visible bounds,
bounded fallback, and invalid geometry. The App integration test verifies that
automatic creation uses the solver while explicit canvas placement retains the
direct point.

Final LiaisonScape gate:

- `npm.cmd test`: PASS, 266 tests;
- `npm.cmd run lint`: PASS;
- `npm.cmd run build`: PASS; and
- `git diff --check`: PASS.

The test runner emitted an existing `WebSocket server error: Port 24678 is
already in use` diagnostic during UI tests, but all 266 tests passed and the
command exited successfully.

Browser smoke was not performed in this checkpoint. Therefore no visual or
manual browser PASS is claimed.

## Known limitations and unresolved C ownership

This is a bounded collision experiment, not a final placement algorithm. The
solver uses fixed rectangular Entity-body clearance and does not consider
labels, Relation paths, or Relation labels. A fully occupied local search
returns the desired point, so overlap can remain in that bounded failure case.
The exact long-term margin, scoring, search range, and any treatment of label
geometry remain experiment questions.

C remains unresolved and deferred. Existing runtime state does not establish a
separate accepted Entity Owned/Derived registry that would authorize moving
existing Derived nodes. No existing Entity is adjusted by EXP1.

## Exclusions

No changes were made to EntityService semantics, Dataset Replacement Safety,
Coordinate writer/schema, Layout schema, Presentation, Relation routing or
labels, node-label algorithm, ownership UI, global layout, Validator,
NarrativeLine, Hub, samples, roadmap, version, release, deployment, or push.

## Exact commits and verification

LiaisonScape commits:

- `866b298 feat: avoid initial entity overlap` — implementation and tests;
- `320dfc2 chore: normalize placement module` — exact-path whitespace cleanup.

LiaisonScape is clean and both commits remain unpushed.

This result document is the only e2r-spec change for the result checkpoint.
After it is added, `npm.cmd run validate` and the document-specific
`git diff --check` are required before its separate documentation commit.

## Result

EXP1 B is implemented and passes the automated acceptance gate. It does not
accept C, a global layout algorithm, new serialization, or any subsequent
checkpoint. STOP.
