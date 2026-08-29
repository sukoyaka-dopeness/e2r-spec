# Initial Node Placement Design Audit

Date: 2026-08-29

Status: non-normative design / experiment-selection checkpoint

## WHY

LiaisonScape currently places a newly created Entity from the ordinary Add
Entity flow at the graph-space point corresponding to the visible viewport
center. That is deterministic and easy to explain, but it can overlap an
existing Entity. This checkpoint selects the smallest useful next experiment;
it does not accept a final placement algorithm and does not change runtime
behavior.

The accepted boundary remains: automatic Entity placement is Coordinate
responsibility with Derived persistence. It must not author Dataset-owned
Coordinate data or set `coordinatesDirty` by itself. An explicit canvas
placement or a meaningful direct Entity drag is user-owned pending Coordinate
work. Relation routing and label placement remain separate Layout concerns.

## Live implementation baseline

`src/App.tsx` owns application orchestration. The graph is rendered in a fixed
`800 x 500` SVG viewBox with `centeredViewportTransform(scale, pan, 800, 500)`.
`nodePosition` uses `positions[id]` when present and otherwise the node's
fallback position. The visible Entity body is a `64 x 64` rounded rectangle
centered on the node point.

The ordinary toolbar Add Entity path calls `openCreation("entity")` with no
placement. The canvas context-menu path computes a graph point from the
pointer, passes it through `openCreation`, and retains it in
`pendingEntityPlacement` while the creation dialog is open. Cancel clears the
temporary placement. Save first calls `createEntity`, which only appends a
minimal Core Entity and optional authored text; it does not know about
Coordinate, viewport, or placement. App then applies either the explicit
pending point or `graphPointFromViewportCenter({ width: 800, height: 500 },
scale, pan)`.

The current transform inversion is graph-space correct:

`x = 400 + (viewX - 400 - pan.x) / scale`

`y = 250 + (viewY - 250 - pan.y) / scale`

Thus viewport-center spawn is independent of CSS pixel dimensions, while
pointer placement also accounts for SVG letterboxing through
`svgPointFromPointer`.

## Current Coordinate / placement ownership boundary

`applyEntityCreationPlacement` always stores the live position in App state,
but sets `coordinatesDirty` only when `explicitPlacement !== null` (or when it
was already true). Node dragging sets `coordinatesDirty(true)` once movement
starts. `saveCoordinates` is the only current path that writes the live
positions into the Coordinate payload. Automatic placement alone is therefore
not a replacement-safety pending-work source.

`datasetModified` is calculated from the Dataset baseline. Dataset replacement
preserves current positions only when `coordinatesDirty` is true; otherwise it
reloads stored coordinates. This is compatible with treating generated
positions as Derived, but it means any future algorithm must not silently turn
its output into saved Coordinate data.

## Fallback and stored-position precedence

`buildEntityGraph` creates deterministic fallback positions from Dataset entity
array order: `150 + (index % 4) * 240`, `130 + floor(index / 4) * 180`.
`getStoredCoordinates` reads compatible Draft/Prototype data (with the
existing compatibility and fail-closed rules). On open/replacement, stored
coordinates are loaded into `positions`, `fitGraphView` fits stored positions
when present and fallback nodes otherwise, and `coordinatesDirty` is reset.
Stored compatible Coordinates must always win over generated placement. A new
Entity has no stored Coordinate at creation time, so its temporary generated
position is an App-level Derived value until a user explicitly adopts it.

## A/B/C comparison

| Candidate | Strengths | Risks / unresolved cost | Decision |
| --- | --- | --- | --- |
| A. Viewport center | Visible, deterministic, minimal, fully compatible with current flow and transform; constant-time | Known body overlap; repeated creation stacks at the same point; no spatial awareness | Keep as baseline, not final |
| B. Nearest free position around desired spawn | Directly addresses body overlap; can preserve all established positions; deterministic tie-breaking and bounded search are testable; works in graph space under scale/pan | Requires an explicit occupied-geometry contract, candidate radii/ordering, dense/large-graph fallback, and performance bound | Select as smallest next experiment |
| C. Limited/local adjustment | May reduce overlap in a dense local area | Existing runtime does not expose a reliable Entity Owned/Derived position registry; moving existing Derived nodes surprises users and can still affect more than the new Entity; ownership semantics would need a new decision | Defer; do not invent an ownership model here |

Candidate B should initially move only the new Entity. It must never move an
Owned or established position, and it should not reshuffle the graph. If no
candidate satisfies the bounded clearance rule, it should return a documented
deterministic fallback rather than attempt global layout.

## Collision boundary

The product problem is Entity-body overlap, so the smallest defensible first
experiment uses Entity body geometry plus a small configurable safety margin.
It must not include Relation paths or Relation labels, and it must not tune the
node-label algorithm. Labels can be recorded as an observation for a later
experiment because their dimensions vary with name and description and are
currently derived separately.

The exact margin, candidate spacing, search radius, candidate sequence, and
dense-graph fallback remain unresolved until the experiment. Entity body-only
versus body-plus-margin is therefore an experiment parameter, not a new Core,
Coordinate, or Layout rule.

## Edge-case analysis

- Empty Dataset and a clear center should produce the desired spawn without
  unnecessary movement.
- One Entity, center collision, several nearby Entities, dense graphs, and
  very large graphs must use the same deterministic candidate order and a
  bounded search/fallback.
- Zoom, zoom-out, and pan must not alter the graph-space result for identical
  graph state and desired visible spawn.
- Stored Coordinates remain obstacles and are never overwritten. Fallback-only
  Derived positions may be considered occupied for the new-node experiment,
  but must not be relocated.
- Explicit canvas placement remains exact and pending until Coordinate save;
  automatic placement must not replace it.
- Self and parallel Relations do not change Entity-body occupancy. Hidden
  Event-related Relations remain Dataset data but are not node obstacles.
- Long names and descriptions, repeated Add Entity, reload/reopen, Dataset
  replacement, Coordinate save, and unrelated Entity drag must preserve the
  current ownership and safety boundaries. Label dimensions are observations,
  not B's collision input in this first experiment.
- Identical Dataset order, positions, viewport transform, and creation state
  must produce identical output. Entity IDs may be used only through an
  explicit stable tie-break rule; array order remains the current fallback
  ordering authority.

## Dataset safety and serialization impact

The experiment must preserve D1-D7 Dataset Replacement Safety. Generated
positions remain Derived live state: they do not set `coordinatesDirty`, do not
create `datasetModified` by themselves, and do not alter replacement prompts.
Explicit canvas placement and meaningful drag retain their current pending
semantics.

No serialized contract is justified by the current requirement. The placement
algorithm, margin, search order, and scoring are application experiment
parameters and must not be stored in Coordinate or a new Layout Extension. A
future decision is required if the experiment deliberately persists an owned
placement result or another interoperable intent.

## Architecture responsibility assessment

`EntityService.ts` should remain responsible for Core Entity construction only.
`direct-graph-authoring.ts` should continue to own pointer-to-graph inversion,
temporary explicit placement, and viewport-center conversion; it should not
become the placement solver merely because it contains transform helpers.
`dataset.ts` should retain graph construction, fallback positions, stored
Coordinate reading, and persistence. `dataset-replacement-safety.ts` should
retain the Derived-versus-explicit pending boundary.

The future solver has a distinct change reason and test surface, so a small
responsibility-based module is preferable if the experiment needs more than a
few local calculations. The accepted modularization decision does not require
a prescribed filename or layout, and this checkpoint creates no runtime
module. `App.tsx` may remain the composition/orchestration boundary for the
first experiment, provided the solver does not absorb Dataset mutation or
replacement safety.

## Recommended next experiment

Implement one bounded B experiment: deterministic nearest-free spawn for the
new Entity only, using graph-space Entity-body rectangles plus an explicitly
recorded safety-margin parameter. Preserve A as the no-candidate fallback.
Do not implement C, global force-directed layout, label/path collision solving,
serialization, ownership UI, or changes to Coordinate save semantics.

Acceptance criteria for that future experiment:

1. All established positions, especially stored/Owned Coordinates, are byte-
   and behavior-preserving.
2. New-node placement is visible, deterministic, bounded, and invariant to
   CSS pixel size, zoom, and pan when the graph-space desired point is the same.
3. Body overlap is reduced for clear, nearby, and dense cases, with a tested
   deterministic fallback when no candidate is available.
4. Repeated creation does not reshuffle existing nodes.
5. Explicit canvas placement remains exact and pending; automatic placement
   alone remains clean under replacement safety.
6. Reload/open and Dataset replacement retain current stored-coordinate
   precedence and pending-coordinate behavior.
7. Focused unit/integration tests cover the edge cases above, then the normal
   LiaisonScape test, lint, build, and relevant browser acceptance gates pass.

## Exclusions

This checkpoint does not change LiaisonScape runtime or tests, e2r-spec Core,
Extensions, schemas, Validator, roadmap, Coordinate schema, Layout schema,
Relation routing, Relation labels, node-label placement, ownership UI,
Dataset Replacement Safety, samples, application version, NarrativeLine, Hub,
or deployment state.

## Evidence / files inspected

Knowledge and decisions:

- `ai-knowledge/INDEX.md`
- `ai-knowledge/decisions/application-modularization-and-incremental-extraction.md`
- `docs/automatic-layout-experiment-plan.md`
- `docs/automatic-layout-placement-ownership-checkpoint.md`
- `docs/layout-persistence-responsibility-decision.md`
- `docs/roadmap.md`

Live LiaisonScape source:

- `src/App.tsx`
- `src/services/EntityService.ts`
- `src/direct-graph-authoring.ts`
- `src/dataset-replacement-safety.ts`
- `src/dataset.ts`
- `src/viewport.ts`
- `src/placement-ownership.ts`
- `src/models.ts`
- `src/styles.css`

Relevant live tests:

- `tests/appUiIntegration.test.ts`
- `tests/direct-graph-authoring.test.ts`
- `tests/dataset-replacement-safety.test.ts`
- `tests/dataset.test.ts`
- `tests/graph.test.ts`

## Unresolved questions

- Exact Entity-body safety margin and whether it should be fixed for the
  experiment or varied in a small parameter matrix.
- Candidate geometry, ordering, search radius, and deterministic tie-break.
- Whether fallback-only Derived positions should be hard obstacles or receive
  a different preference from stored/Owned positions.
- The bounded behavior for a fully occupied or very large graph.
- Whether node labels should be considered in a later, separate experiment.
- Whether a future meaningful drag should explicitly adopt an Entity
  Coordinate remains governed by the existing ownership decision and is not
  resolved by this checkpoint.
- Whether any future accepted algorithm creates a serialized interoperable
  contract; current evidence says no.

## Checkpoint result

This is a design and experiment-selection result only. Candidate B is selected
for a separately authorized implementation checkpoint; no runtime behavior,
schema, roadmap, or ownership semantics were accepted or changed here.
