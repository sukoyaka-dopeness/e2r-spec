# LiaisonScape Automatic Initial Entity Placement Result

- Date: 2026-08-30
- Status: `ACCEPTED — AUTOMATIC INITIAL ENTITY PLACEMENT`
- Trigger: accepted I2/N1 placement policy from `fef2cef`.

## Authority and previous behavior

The accepted decision selected `I2 — TOPOLOGY-SEEDED NEARBY-FREE INCREMENTAL`,
`N1 — VIEWPORT-CENTER NEARBY-FREE`, and `SHARED-CORE`. Public GitHub baseline
was index-order four-column fallback on Dataset open and exact viewport-center
spawn for an automatic new Entity. Local LiaisonScape `d0c885d` was the source
authority; the runtime routing change remains separate.

Before this implementation, `buildEntityGraph` supplied fixed fallback points
based on raw Entity array index. Stored Coordinates were overlaid at render
time. New automatic Entities used the viewport-center graph point and the
existing bounded `placeInitialEntity` helper; explicit canvas placement used
the requested graph point.

## Implemented shared core

New `src/entity-placement.ts` owns a pure, deterministic, finite candidate
generator and scorer. It uses 64×64 body geometry, a 76-unit body clearance,
expected label envelopes, eight directions, and eight rings. Body overlap is
penalized first, then label-envelope overlap, minimum clearance, anchor
distance, and stable candidate order. Invalid geometry fails safely and no
randomness or DOM measurement is used.

## I2 implementation

Dataset acquisition now computes final Derived initial positions in the
application orchestration before fit-view calculation. Stored/Owned
Coordinates are copied first and never overridden. Remaining Entities are
processed by stable Entity ID order. Positioned neighbors seed a centroid
anchor; disconnected Entities use deterministic component/grid anchors. Each
Entity searches finite nearby candidates and already-positioned Entities are
never moved. Existing Derived positions therefore do not reflow on ordinary
addition or unrelated UI changes.

## N1 implementation

Automatic creation retains the viewport-center graph-space anchor and uses the
existing nearby-free search. The center is used when free; occupied centers
use the deterministic eight-direction/eight-ring search. Existing Entities are
not moved. Explicit canvas placement bypasses automatic correction completely.

## Ownership, dirty, and serialization safety

Automatic INITIAL-OPEN: **Derived Coordinate**.

Automatic NEW-SPAWN: **Derived Coordinate**.

Existing Entity automatic movement: **NONE**.

Owned Coordinate override: **NONE**.

Automatic placement does not write Dataset Coordinates, create Layout or
Presentation state, set `coordinatesDirty`, or create pending Coordinate work.
Core Entity creation retains its existing Dataset-modified semantics. Explicit
canvas placement retains its existing user-intent and dirty behavior.
Automatic positions are not serialized or adopted merely by being displayed.
Replacement Safety remains unchanged.

## Stability and behavior evidence

Focused placement tests cover: free and occupied anchors, multiple blockers,
label envelopes, finite fallback, repeated determinism, input immutability,
partial Owned Coordinates, disconnected Entities, and long labels. The
Entity-order test confirms the selected result is independent of raw source
array order. G→G+1 checks preserve all existing Owned and Derived positions
(zero displacement); only the new Entity receives a position.

The Lighthouse-sized regression smoke preserved its stored Entity geometry and
the accepted node-label route-avoidance behavior. Fit/reset/reload and normal
zoom/pan do not invoke a whole-graph re-layout. Relation routes, Relation
labels, self Relations, and the existing manual placement boundaries remain
usable.

## Real Browser evidence

Using the current local LiaisonScape source in Microsoft Edge:

- no-Coordinate / Derived placement behavior was checked with the temporary
  fixture path: graph remained readable, non-stacked, deterministic, and fit
  the viewport; Entity ID ordering rather than source-array order determined
  the Derived result;
- partial-Owned behavior kept the supplied Owned points exact and placed the
  remaining Entities around them without dirty/pending Coordinate state;
- NEW-SPAWN on the Lighthouse workspace changed 10 Entities to 11 after an
  automatic creation, with the new Entity visible near the viewport center and
  no existing graph jump; repeated creation uses different nearby candidates;
- explicit canvas placement remained exact and did not pass through automatic
  correction;
- reload and Display Reset remained stable, with no blank/crash state;
- Lighthouse still displayed 10 Entities and 14 visible Relations, and the
  previously accepted node-label route avoidance remained intact.

## Automated gates

LiaisonScape passed 271 tests (including the new placement tests), lint, and
build. Cross-repository gates passed: e2r-spec `validate` and
`validate:public-sample-mirrors`; Validator `validate`; NarrativeLine 222
tests/lint/build; and Hub test/lint/build.

## Contract impact and modified files

Serialized contract change: **NONE**.

Schema/Validator impact: **NO**. Validator 0.4.0 RC is unchanged.

Only these LiaisonScape files changed:

- `src/entity-placement.ts`
- `src/App.tsx`
- `tests/entity-placement.test.ts`

No Lighthouse JSON, mirror, Coordinate, Presentation, Layout schema,
NarrativeLine, Hub, roadmap, or ai-knowledge file changed.

## Lighthouse and remaining exclusions

The canonical Lighthouse Stored Coordinates were not rewritten. The separate
Lighthouse Presentation semantic revision (`友人`, dotted friendship,
bidirectional collaboration, implicit-solid supervision) remains
NOT IMPLEMENTED. Validator publication, consumer dependency update, Public
Sample Formal Acceptance, Research Audit, Cross-App release audit, app-version
decision, push, tag, and deploy remain NOT STARTED.
