# LiaisonScape Common-Fixture Cross-Lineage Comparison 1

Date: 2026-09-15

Status: `D. COMMON-FIXTURE COMPARISON MATERIALIZED / HISTORICAL REPLAY STILL INCOMPLETE`

## Decision

This checkpoint closes the materialization gap identified by Historical Best
Candidate Re-comparison 1 for a bounded set of fixtures. A read-only adapter
now builds the exact same Dataset topology, Entity/Relation IDs, labels, and
Product graph projection before sending structural and capacity candidate
geometries through the current Product presentation and occupied-geometry
evaluators.

The result is not a single winner:

- current-source reconstruction of the structural lineages retains the
  clearest topology signal on Lighthouse, Apollo, and the Parallel/Self-loop
  control: zero or near-zero routed crossings and no Node-body overlap in the
  canonical cells;
- the current capacity reconstructions do not establish a universal spacing
  or long-label win on those same fixtures. On the dense common control they
  can reduce selected occupied-overlap counts relative to some capacity
  variants, but crossing, label-near, and foreign-route ownership pressure
  remains high;
- the exact common fixture is now real for current-source reconstruction, but
  a historical artifact replay of an old materialized geometry on that exact
  topology is not available. Therefore this checkpoint cannot claim that a
  historical artifact itself wins, nor can it justify a portfolio selector.

The formal result is `D`: the comparison is materially more informative and
reproducible, but historical replay equivalence and a Product-quality winner
remain incomplete.

Standing statuses remain unchanged: Gate 2 `OPEN`, quality solver
`HOLD / NOT ESTABLISHED`, production provider `NOT ESTABLISHED`, Product
integration/default `HOLD`, Human Review `NOT READY`, Adaptive Cascade
inactive, and Initial Layout Release blocker `OPEN`.

## Scope and authority

The implementation is a diagnostic comparison adapter and an Actual Product
smoke seam. It does not move ordinary routing, Parallel / Incident
allocation, endpoint-plan authority, final Relation-label or Node-label
placement, Self-loop routing, Dataset, stored/authored Coordinates,
persistence, dirty-state, Save Coordinates, or manual semantics into
Structural Placement. The current Product `More -> Auto Layout` remains the
old `solveAutoLayout(input)` control with its source default of 12 iterations.

No provider, Product default, Adaptive Cascade, global objective, or new
solver family was introduced. Historical result documents and historical
Human Review evidence were not changed or inherited.

## Common fixture contract

The adapter records a topology digest from Entity IDs/names/descriptions and
Relation IDs/endpoints/names. Every candidate row shares that digest before
Product evaluation; node/relation cardinality alone is not used as an
equivalence claim.

| Fixture | Exact graph shape | Topology digest | Candidate materialization |
| --- | --- | --- | --- |
| Lighthouse EN | 10 Entity nodes, 14 visible Relations, 1 component, 2 self-loops, 2 parallel groups | `c1ec6b619de2f467` | current-source structural reconstruction and current capacity reconstruction |
| Apollo JA | 9 Entity nodes, 11 visible Relations, 1 component, no self-loops or parallel groups | `0d84d38630524dea` | current-source structural reconstruction and current capacity reconstruction |
| Dense K7x7 | 14 Entity nodes, 49 Relations, 1 component | `de83e79a96915f7b` | bounded synthetic common fixture; current-source reconstruction |
| Parallel/Self-loop control | 8 nodes, 11 Relations, 3 components, 1 self-loop, 3 parallel groups | `8379f801f9635b67` | current-source reconstruction and capacity controls |

The historical arms are labeled `current-source-reconstruction` in the
artifact. The adapter does not relabel an old artifact replay as a current
candidate and does not transfer prior visual judgment.

## Machine evidence

The result artifact is
`LIAISONSCAPE-COMMON-FIXTURE-CROSS-LINEAGE-COMPARISON-1` and is written by
`tools/common-fixture-cross-lineage-comparison1.ts`. It compares Fast and old
Auto Layout controls, three structural arms (`post`, `frontier-12`, `joint`),
and bounded Label-Capacity, Infinite-Canvas, and Occupied-Geometry arms.

| Fixture | Structural signal | Capacity signal | Interpretation |
| --- | --- | --- | --- |
| Lighthouse EN | Post reconstruction: `0` crossings, `0` label hits, `0` occupied overlaps, extent `633 x 401` | Label-Capacity: `7` crossings; Infinite-Canvas: `11` crossings / `2` occupied overlaps; selected Occupied-Geometry: `17` crossings / `1` occupied overlap / `4` foreign-route hits | structural ordering is stronger; capacity does not establish a common-fixture win |
| Apollo JA | Post reconstruction: `0` crossings, `0` label hits, `0` occupied overlaps, extent `601 x 400` | Label-Capacity: `6` crossings; Infinite-Canvas and selected Occupied-Geometry: `2` crossings and `3` label-near hits | capacity retains useful extent demand but not a topology/label-quality win |
| Dense K7x7 | Grid structural: `129` crossings, `8` label hits, `4` occupied overlaps | Selected Occupied-Geometry: `157` crossings, `15` label hits, `9` occupied overlaps, `94` foreign-route hits | both families are difficult; capacity feedback does not remove global coupling |
| Parallel/Self-loop control | Structural arms: `0` crossings and `0` occupied overlaps | Capacity controls: `1` crossing and no occupied overlap | existing Parallel/Self-loop authority remains the relevant owner; no candidate upgrade established |

These values are diagnostic signals, not a new Product metric or acceptance
score. In particular, the adapter does not claim that a lower occupied count
compensates for crossing, route ownership, or viewport readability loss.

## Actual Product smoke

A small Actual Product smoke was run for Lighthouse EN using the real App,
current renderer, current routing, and the common-fixture candidate positions.
The current-source Post structural reconstruction rendered inside the Product
surface with readable Node/Relation presentation and no obvious clipping in
the smoke frame. This is not formal acceptance.

The same fixture and IDs with the Label-Capacity candidate showed right-edge
and lower-edge Nodes clipped by the Product viewport in the smoke frame. This
is an explicit stop signal for visual promotion: the capacity candidate is not
Human Review-ready, and no expensive visual evidence campaign was started.

The smoke does not prove a structural candidate is release quality. It only
confirms that the common-fixture adapter reaches the Actual Product and
exposes an obvious capacity-candidate defect before formal review.

## Responsibility attribution

| Observation | Current attribution |
| --- | --- |
| Lower crossing and stronger local angular ordering in canonical rows | Structural Placement candidate geometry / topology arm |
| Extent growth and demand-derived spacing | Structural Placement feedback signal, not final routing or label authority |
| Parallel physical-side order, lane allocation, and reverse-direction behavior | Existing Parallel / Incident allocation and Product routing authority |
| Relation-label clearance, ownership, foreign-route hits, and long-label readability | Product ordinary routing plus final Relation-label presentation |
| Shared endpoint / multi-bundle capacity | Endpoint-plan and capacity authority; placement receives only a coarse signal |
| Self-loop angle/radius and interaction with ordinary edges | Independent Self-loop routing/capacity track |
| Viewport clipping observed in the capacity smoke | Candidate extent/camera interaction; not evidence to move camera or routing authority into placement |

The common fixture removes the old materialization confound, but it does not
collapse these responsibilities into one objective. Structural improvement
does not automatically repair label ownership, and occupied feedback does not
automatically preserve topology ordering.

## Gate and readiness

```text
common fixture materialization              = CLOSED for current-source diagnostic arms
historical artifact replay on same fixture  = NOT ESTABLISHED
structural topology advantage               = OBSERVED in canonical controls
capacity spacing/label advantage             = NOT ESTABLISHED as a general win
Actual Product smoke                         = COMPLETED; capacity arm stopped on clipping
Human Review                                 = NOT READY
production provider                         = NOT ESTABLISHED
Product integration/default                  = HOLD
Adaptive Initial Placement Cascade           = INACTIVE
Initial Layout Release blocker               = OPEN
```

The next step, if research continues, is not a larger solver search. The
remaining question is whether a faithful historical replay artifact can be
produced on a common fixture, or whether the evidence should formally move to
responsibility-separated Fast Initial Placement plus an explicit HQ operation.
That architectural alternative is not adopted by this checkpoint.
