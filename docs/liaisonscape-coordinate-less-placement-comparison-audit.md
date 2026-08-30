# LiaisonScape Coordinate-less Placement Comparison Audit

- Date: 2026-08-30
- Checkpoint: `E2R-LIAISONSCAPE-COORDINATELESS-PLACEMENT-COMPARISON-AUDIT1`
- Scope: diagnostic comparison only

## Result

`ACCEPTED - CURRENT STORED SAMPLE COORDINATES REMAIN PREFERRED`

For the current Lighthouse Restoration sample, stored coordinates remain the
preferable release/sample presentation basis. The coordinate-less derived path
is deterministic and preserves the Dataset boundary, but it is not a
sample-quality replacement for the curated stored geometry. This result does
not authorize changing the placement algorithm or refreshing tracked samples.

## Comparison

Dataset open follows `getStoredCoordinates` -> `buildEntityGraph` ->
`placeInitialEntities(..., storedPositions)` -> `fitGraphView`. Stored positions
are copied first; only missing Entities are derived. Explicit Auto Layout is a
separate user workflow calling `solveAutoLayout`. `placeInitialEntity` is used
for new-Entity interaction and is not either graph-wide path.

`placeInitialEntities` uses relation adjacency only to average already-positioned
neighbors. Missing nodes are processed in lexical ID order; it does not compute
degree, components, or a graph-wide central seed. `solveAutoLayout` computes
distinct-neighbor adjacency and components, ranks by degree with ID tie-break,
seeds the highest-degree node, then relaxes and packs components.

Both EN and JA Lighthouse samples have the same 10-Entity / 28-Relation
topology and stored geometry. The degree table counts incident Relations and
distinct neighbors.

| Entity | Incident | Neighbors | Stored | Derived | Auto |
|---|---:|---:|---|---|---|
| lighthouse | 3 | 3 | (500,320) | (630,206) | (285.1,163.3) |
| clara | 6 | 5 | (350,180) | (870,130) | (195.5,163.2) |
| elias | 2 | 2 | (150,180) | (794,206) | (59.4,239.0) |
| maya | 3 | 3 | (470,480) | (750,130) | (233.8,235.1) |
| thomas | 3 | 2 | (300,480) | (754,54) | (101.0,102.2) |
| sofia | 2 | 2 | (150,340) | (472,244) | (23.8,151.1) |
| daniel | 1 | 1 | (600,250) | (946,206) | (443.6,161.4) |
| beacon | 6 | 3 | (620,520) | (630,130) | (189.4,303.0) |
| archive | 1 | 1 | (150,520) | (150,130) | (132.4,16.2) |
| authority | 1 | 1 | (650,380) | (390,130) | (286.3,62.5) |

The highest incident count is tied by `clara` and `beacon`; highest distinct
neighbor count is `clara`. Neither stored nor derived placement deliberately
centers it. Auto Layout seeds by degree, but its final position is not
necessarily the visual center.

| Layout | x range | y range | body overlap |
|---|---:|---:|---:|
| Stored | 150..650 | 180..520 | 0 |
| Derived | 150..946 | 54..244 | 0 |
| Auto Layout | 23.8..443.6 | 16.2..303.0 | 0 |

The body-overlap result does not establish label conflict, crossing,
congestion, edge-length, or viewport equivalence. Routing and label placement
remain possible confounders for the original visual observation.

## Recommendation and boundary

The current sample never exercises coordinate-less placement during open, so
the comparison does not prove a coordinate-less runtime failure. It does show
that derived placement is not an acceptable automatic refresh basis for this
curated sample, while Auto Layout is not an interchangeable open-time policy.
Retain stored coordinates; if the visual concern remains release-relevant,
choose bounded manual sample-coordinate curation or a separate
routing/presentation audit.

No tracked sample, runtime source, test, schema, Coordinate payload, Core,
Extension, Validator, or release operation was changed. NarrativeLine
Display-Order remains not started.
