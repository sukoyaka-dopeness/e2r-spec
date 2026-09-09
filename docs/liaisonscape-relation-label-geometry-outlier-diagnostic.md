# LiaisonScape Relation-label / Geometry Outlier Diagnostic

Status: diagnostic result; no Product adoption decision

## Scope

This checkpoint follows the actual Product inspection of the diagnostic-only
`local-search-v1` Apollo 11 geometry candidate. The candidate is not stored in
Fresh12 and is not a new governed evidence lineage.

The user inspection found that the candidate materially improved both
Node-owned label readability and the affiliation of most Relation labels with
their owning Edges. One residual outlier remained:

```text
Neil Armstrong -> NASA
is a NASA astronaut
```

The purpose of this checkpoint was to distinguish a remaining geometry-local
pressure from a Relation-label placement limitation.

## Evidence update

The following classification is based on the actual Product inspection plus
the current Product implementation and deterministic diagnostic probes:

### PROVEN

- The positive `local-search-v1` observation is broader than a Node-label-only
  improvement. The user reported substantially better Relation-label
  affiliation for the representative Apollo corridors.
- The residual Relation is Dataset Relation `entity-1`, from `armstrong` to
  `nasa`, with label `is a NASA astronaut`.
- The current Product derives Relation labels from the current routed Edge
  geometry. `deriveAutomaticRelationLabels()` processes the routed Edges in
  order and delegates candidate selection to `placeEdgeLabel()`.
- `placeEdgeLabel()` searches a bounded set of along-route samples and normal
  offsets. It considers Node overlap, previously occupied Relation-label
  rectangles, other Edge-path sample occupancy, and previous placement.
- The current Product does not perform a global optimization of all Relation
  labels and all Edge corridors.

### STRONGLY SUPPORTED

- In `local-search-v1`, `entity-1` is placed around route fraction `0.10` with
  normal offset `-40`; its measured distance from its owning route is about
  `3.7` in the diagnostic coordinate space. It is therefore not detached from
  the owning route in the geometric sense.
- The same label is visually difficult because the owning route shares a
  crowded local corridor with `entity-4` (`armstrong -> eagle`). The nearest
  competing route reaches distance `0` under the sampled-path diagnostic.
- Central candidate positions for the local geometry are blocked by the
  `armstrong` Node's local occupancy. Alternative positions with more than
  approximately `20` units of competing-route separation have very low Node
  clearance, while positions with safe Node clearance remain on or very near a
  competing route.
- The residual outlier is therefore best classified as a geometry-local
  pressure interacting with a bounded local Relation-label placement policy,
  rather than as evidence that the Relation-label system is globally broken.
- The new user evidence strengthens the geometry-first conclusion: better
  geometry can materially improve Relation-label affiliation without changing
  the Relation-label algorithm. It does not prove that the current candidate
  is ready for Product adoption.

### UNRESOLVED

- Whether a small targeted geometry adjustment around Armstrong, NASA, Eagle,
  and the adjacent corridor can remove the outlier without regressing the
  other user-confirmed improvements.
- Whether a small expansion of the bounded Relation-label candidate set or a
  corridor-pressure term would improve `entity-1` without causing unwanted
  label movement elsewhere.
- Whether the visual separation observed by the user is primarily caused by
  the route's curvature, the label's early along-route position, the competing
  Edge, or their combined screen-space presentation.

## Representative measurements

The values below are diagnostic geometry-space measurements, not acceptance
criteria.

| Candidate | Relation | Label fraction | Normal offset | Owning-route distance | Nearest competing route | Competing route |
| --- | --- | ---: | ---: | ---: | ---: | --- |
| Stored Apollo 220 | Neil Armstrong -> NASA | 0.40 | -24 | 0.0 | 0.0 | entity-4 |
| local-search-v1 | Neil Armstrong -> NASA | 0.10 | -40 | 3.7 | 0.0 | entity-4 |

For the local candidate, bounded alternate probes showed the same tradeoff:
some positions gained more than 20 units of competing-route separation but had
Node clearance near 0–6 units; positions with approximately 37 units of Node
clearance remained on a competing route. This probe is explanatory only and
does not replace actual Product inspection.

## Decision for the next bounded checkpoint

Continue geometry-first, but treat the remaining Relation-label outlier as a
small joint refinement problem:

1. generate a targeted geometry candidate for the Armstrong/NASA/Eagle local
   corridor;
2. keep current routing and Relation-label implementation fixed;
3. compare the existing candidate and the targeted candidate in the actual
   Product surface;
4. retain the candidate only if Node-owned labels, Relation affiliation,
   crossings, route burden, extent, and drag behavior remain acceptable.

A Relation-label-only correction should remain a diagnostic comparison until
the same-geometry probe demonstrates a clear, bounded improvement. Do not
select a candidate from crossing count or owning-route distance alone.

## Boundaries and state

- Fresh10, Fresh11, Fresh12 artifacts and the canonical Fresh12 Human Review
  result are unchanged.
- No new governed Fresh lineage was started.
- No Product initial-placement adoption was made.
- Current routing, label-safety, active recovery, and drag behavior remain the
  regression baseline.
- No push, tag, release, deploy, or publication was performed.
