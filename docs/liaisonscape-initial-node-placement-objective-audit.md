# LiaisonScape Initial Node Placement Objective Audit

- Date: 2026-08-30
- Checkpoint: `E2R-LIAISONSCAPE-INITIAL-NODE-PLACEMENT-OBJECTIVE-AUDIT1`
- Scope: audit and diagnosis only

## Result

`SAMPLE REFRESH REQUIRED - INITIAL PLACEMENT ALGORITHM ACCEPTABLE`

The Lighthouse Restoration observation is not sufficient to classify the
initial placement algorithm as the primary cause. Both current English and
Japanese samples contain valid stored coordinates for all 10 Entities. Dataset
open therefore preserves those positions; it does not exercise the missing-
coordinate placement path for this representative sample. The next bounded
step is a sample-coordinate refresh or diagnostic comparison, not an
unapproved runtime change.

## Current open pipeline

The live LiaisonScape source confirms:

1. `acceptDataset` reads `getStoredCoordinates(nextDataset)`.
2. It builds the Entity graph with `buildEntityGraph(nextDataset)`.
3. It calls `placeInitialEntities(openedGraph.nodes, openedGraph.edges,
   storedPositions)`.
4. It calls `fitGraphView(...)` for the viewport transform.
5. It stores the resulting positions in in-memory React state.

Stored coordinates are copied into the result first. Missing Entities receive
deterministic topology-seeded or fallback positions; partial stored coordinates
therefore produce a mixed stored/derived result. The placement functions do
not mutate the input Dataset. Explicit user Auto Layout is a separate
`solveAutoLayout(...)` workflow and is not invoked by Dataset open.

## Sample evidence

| Sample | Entities | Relations | Stored coordinates | Coordinate parity |
|---|---:|---:|---:|---|
| Lighthouse Restoration EN | 10 | 28 | 10/10 | same geometry |
| Lighthouse Restoration JA | 10 | 28 | 10/10 | same geometry |

The stored positions span approximately x `150..650` and y `180..520`.
The current body-clearance diagnostic reports no body overlaps for either
sample. This does not prove label quality, edge crossing quality, congestion,
or viewport composition; those remain visual and graph-wide audit axes.

## Objective and responsibility findings

- Node body overlap: covered by deterministic placement tests for derived and
  partial placement; no overlap in the current stored sample.
- Label overlap: local label-envelope avoidance exists for newly derived
  positions, but sample-scale and all-label graph quality are not fully tested.
- Edge crossing/congestion/length: routing and label presentation can affect
  the observation; current evidence does not isolate these from stored node
  coordinates.
- Bounds and component separation: placement accepts optional bounds and
  tests cover bounded fallback and disconnected components; Dataset-open does
  not pass explicit bounds to `placeInitialEntities`.
- Stability: ID ordering and topology seeding are deterministic. Reopening the
  same unchanged Dataset is stable; incremental stability after adding an
  Entity is not established as a graph-wide objective.
- Stored-coordinate preservation: covered, including partial coordinates and
  Coordinate Draft preservation; derived positions are excluded from
  Coordinate save input unless explicitly adopted by the user.
- Derived placement persistence: current tests and source boundaries show that
  initial derived positions remain in-memory and are not silently written to
  the Dataset.

## Coverage gap and decision boundary

Existing tests cover deterministic placement, partial stored positions,
non-overlap for representative nodes, bounds, disconnected components,
explicit Auto Layout, Dataset-open wiring, and coordinate preservation. They
do not establish a sample-scale objective score for crossings, congestion,
edge length, label conflicts, viewport utilization, or incremental stability.

No current evidence authorizes changing Coordinate, Coordinate Draft, Layout,
Presentation, Core, or Dataset semantics. Routing, self-loop, parallel
Relation, manual route, and stored Presentation behavior remain separate
responsibilities.

## Next bounded scope

Prepare a diagnostic comparison using the existing samples and a temporary
coordinate-free copy: compare stored versus derived positions and classify the
observation as stored-coordinate, placement, mixed fallback, fit/viewport, or
routing/label presentation. Any runtime implementation proposal requires a
separate decision after that evidence. Initial placement implementation is
not started by this checkpoint.

No runtime, test, sample, schema, or public-release operation was changed.
