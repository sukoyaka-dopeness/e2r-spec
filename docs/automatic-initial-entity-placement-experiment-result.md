# Automatic Initial Entity Placement Experiment Result

- Date: 2026-08-30
- Status: `READY — AUTOMATIC INITIAL ENTITY PLACEMENT POLICY DEFINED`
- Trigger: current initial-open fallback is index-order grid placement, while
  new automatic Entities use viewport-center placement with a bounded free-space
  search.
- Scope: experiment and decision only. Production implementation is NOT
  STARTED.

## Public GitHub baseline and local authority

Public LiaisonScape was inspected read-only for `App.tsx`, `dataset.ts`,
`direct-graph-authoring.ts`, `viewport.ts`, replacement safety, placement
ownership, and tests. Public behavior matches the documented baseline:
`buildEntityGraph` uses approximately `150 + (index % 4) * 240` and
`130 + floor(index / 4) * 180`; new Entity creation maps the viewport center to
graph space. Local accepted source is authoritative: LiaisonScape `d0c885d`,
e2r-spec `afa10f9`, and the prior placement acceptance evidence.

## Accepted invariants

Automatic Entity placement is Coordinate responsibility and Derived. Opening a
Dataset does not author Coordinates, set `coordinatesDirty`, or set Dataset
modified. Owned Coordinates are never overridden. Explicit canvas placement
remains user intent. Automatic geometry is not persisted merely because it was
generated, and a small Dataset change must not reshuffle unrelated Entities.

## Current dataflow

### INITIAL-OPEN

`acceptDataset` obtains Stored Coordinates, builds the graph, fits the view
using stored positions or graph fallback points, and initializes `positions`
with Stored Coordinates only. Rendering then merges `positions` over the
fallback node points. Entities without stored Coordinates therefore use the
fixed four-column, Entity-array-index grid. Partial Coordinate data preserves
stored Entities and gives fallback points to the rest. Entity order changes
fallback positions; Relations, labels, and viewport dimensions do not influence
the fallback grid.

### NEW-SPAWN

Creation adds the Entity to the Dataset, maps the current viewport center to a
graph point, and, when no explicit canvas point exists, calls
`placeInitialEntity`. The current helper uses a 64-unit body clearance plus a
12-unit safety margin, tests the anchor first, then searches eight directions
over eight finite rings. It returns the anchor as a deterministic fallback if
the bounded search is exhausted. Explicit canvas placement bypasses this
search and uses the exact requested point.

## Current weaknesses

INITIAL-OPEN is stable for unchanged array order but visually sensitive to
Entity reorder, ignores topology and approximate label space, and can place
connected Entities farther apart than necessary. NEW-SPAWN can still be
suboptimal around long labels and graph edges because its current score is
body-overlap based, but it is immediately visible and does not move existing
Entities.

## Experiment fixtures and candidate comparison

Four bounded fixtures were compared: sparse four-Entity, dense hub,
Lighthouse-like ten-Entity mixed graph with parallel/self Relations and long
labels, and disconnected components with partial Stored Coordinates. P0 is the
current baseline; P1 is deterministic nearby-free placement; P2 is topology
seed plus nearby-free placement; P3 adds limited local Derived adjustment.

| Candidate | Main result | Decision evidence |
|---|---|---|
| P0 / I0 / N0 | deterministic grid or exact center; reorder-sensitive or overlap-prone | control only |
| P1 / I1 / N1 | removes direct body stacking with bounded displacement; topology remains ignored | useful shared primitive |
| P2 / I2 / N2 | keeps connected Entities near positioned neighbors and respects Owned geometry | strongest initial-open behavior |
| P3 / I3 | can reduce local collisions, but moves existing Derived Entities and makes small changes surprising | reject for now |

The quantitative comparison recorded the following bounded outcomes. Across
the four fixtures, P0 produced direct body overlaps in the dense and mixed
cases and moved every affected fallback point when Entity order was reversed.
P1 removed anchor/body overlap in all free-space cases and moved zero existing
Entities for G→G+1. P2 also moved zero existing Entities, preserved every
Owned point exactly, reduced connected-component edge-length proxy relative to
P0 in the hub and mixed fixtures, and remained deterministic under repeated
runs. P3 reduced some local overlap but moved between two and four existing
Derived Entities in the dense/mixed G→G+1 cases; it is rejected. No candidate
was allowed to write Dataset Coordinates.

### Required measurement summary

| Measure | P0/I0/N0 | P1/I1/N1 | P2/I2/N2 | P3/I3 |
|---|---:|---:|---:|---:|
| Owned-position violations | 0 | 0 | 0 | 0 |
| Existing Owned moved after G→G+1 | 0 | 0 | 0 | 0 |
| Existing Derived moved after ordinary addition | 0 | 0 | 0 | 2–4 in local-adjustment cases |
| Direct node-body overlap at requested spawn | possible | avoided when candidate exists | avoided when candidate exists | avoided, with movement cost |
| Label-envelope awareness | none | lightweight estimate | lightweight estimate plus topology context | same estimate |
| Deterministic repeat | yes | yes | yes | yes, but visually surprising |
| Entity-order sensitivity | high | bounded by processing order | selected order is stable by Entity ID | stable but local movement-sensitive |

Edge length, node clearance, and label-envelope overlap were treated as
diagnostic measures rather than one universal score. P2 was better than P0 on
connected edge-length proxy and local clearance without whole-graph relaxation.

## Partial Owned Coordinates, order, and determinism

Owned-first placement preserved all supplied Coordinates exactly. Unowned
Entities were never placed directly on an Owned body in the bounded fixtures.
The selected future order is deterministic Entity ID order, with a stable
component tie-break, not raw source-array order. Reordering the Dataset array
therefore must not change selected unowned positions when the semantic graph
and Owned Coordinates are unchanged. G→G+1 adds only the new Derived point;
existing Owned and Derived points remain fixed.

## Real Browser comparison

Finalist comparison was performed in a temporary LiaisonScape copy using
Microsoft Edge. The current Lighthouse graph remained readable, fit view was
sensible, Stored Coordinates stayed fixed, and the updated route-avoidance
runtime showed no blank state or catastrophic graph movement. New Entities
created without a canvas context appeared near the viewport center, did not
stack directly on the existing center occupant, remained visible, and were
immediately draggable. Existing Entities did not jump. Explicit canvas-context
creation remained at the exact chosen graph point. The baseline/finalist
comparison supports N1; the current production behavior is not changed here.

## Selected INITIAL-OPEN policy

Select `I2 — TOPOLOGY-SEEDED NEARBY-FREE INCREMENTAL`.

Future exact contract:

1. Apply Stored/Owned Coordinates first.
2. Process unowned Entities by stable Entity ID order; use component ID and ID
   as deterministic tie-breaks.
3. If an Entity has positioned neighbors, use their centroid as the anchor.
4. Otherwise use a deterministic component/grid anchor derived from component
   order, not viewport center.
5. Search a finite concentric square/radial pattern around the anchor.
6. Reject candidates whose 64×64 body overlaps another body or whose small
   label envelope conflicts with an existing body/label envelope.
7. Score in this order: body overlap, label-envelope overlap, minimum body
   clearance, distance from anchor, stable direction/ring/Entity-ID tie-break.
8. Select the first fully clear lowest-score candidate. If none is fully clear,
   select the bounded candidate with least overlap, then least distance.
9. Never move already placed Entities, including already-derived Entities.

No full relation routing, force simulation, global relaxation, or DOM
measurement is included.

## Selected NEW-SPAWN policy

Select `N1 — VIEWPORT-CENTER NEARBY-FREE`.

The anchor is the current viewport center mapped into graph space. Test the
anchor, then a finite eight-direction, eight-ring search using the existing
64-unit body clearance and 12-unit safety margin. Add a lightweight expected
label envelope to the candidate score in a future implementation, without DOM
measurement. Use deterministic direction/ring order and return the anchor as
the bounded fallback. Never move existing Entities. N2 is not selected because
ordinary creation occurs before useful Relations exist. Explicit canvas
placement bypasses automatic search and remains exact.

## Shared core and future responsibility

Select `SHARED-CORE`: both policies should use one bounded pure nearby-free
candidate generator/scorer, with separate orchestration for initial-open
anchors/order and new-spawn viewport anchoring. A future implementation may
place this responsibility in a bounded `src/entity-placement.ts` module;
`App.tsx` should remain orchestration. This follows the accepted incremental
modularization decision and is not a file-splitting mandate.

## Derived/Owned and safety boundary

Both automatic INITIAL-OPEN and automatic NEW-SPAWN remain:
`Responsibility = Coordinate`, `Persistence = Derived`. Automatic placement is
not serialized automatically, does not set `coordinatesDirty`, does not mark
the Dataset modified, and does not affect Replacement Safety pending work.
Only explicit canvas placement and meaningful manual Entity movement retain
their existing user-intent semantics.

## Lighthouse, schema, and Validator boundary

This experiment does not re-layout the canonical Lighthouse Stored Coordinates.
The Lighthouse Presentation semantic revision remains separate. Automatic
placement is runtime Derived behavior, so there is `NO VALIDATOR / SCHEMA
IMPACT`; Validator 0.4.0 RC remains unaffected and publication is not started.

## Superseded observations, preserved decisions, and exclusions

This result supersedes only the earlier open-ended placement question and the
assumption that raw Entity array order is an acceptable future visual tie-break.
It preserves automatic placement as Derived, Owned Coordinate protection,
explicit canvas intent, incremental stability, and the current Lighthouse
stored geometry. No Coordinate, Layout schema, Presentation JSON, sample,
runtime, test, Validator, NarrativeLine, Hub, roadmap, or ai-knowledge file was
changed. Public Sample Formal Acceptance remains paused.

Production implementation: **NOT STARTED**. Lighthouse Presentation semantic
JSON revision, Validator publication, consumer dependency update, Research
Audit, Cross-App release audit, app-version decision, push, deploy, and next
checkpoint are all **NOT STARTED**.
