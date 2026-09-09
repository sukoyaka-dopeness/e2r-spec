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

## Targeted geometry candidate

A deterministic targeted search was run from `local-search-v1`, changing only
the positions of Armstrong, NASA, and Eagle. The current routing, Relation
label placement, Node-label placement, feedback pass, and Apollo topology were
held fixed. The search included regression pressure for the previously
user-confirmed Relation-label corridors.

The resulting diagnostic candidate is named `local-search-v1-plus` in the
inspection surface. Its comparison with `local-search-v1` is:

| Candidate | entity-1 competing-route distance | entity-1 owning-route distance | Representative crowded routes | Route median | Route max | Crossings | Extent |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| local-search-v1 | 0.0 | 3.7 | 5 | 177.9 | 319.9 | 3 | 423 × 677 |
| local-search-v1-plus | 22.3 | 6.6 | 3 | 163.8 | 363.3 | 3 | 440 × 677 |

The targeted candidate improves the residual `Neil Armstrong -> NASA`
corridor separation and lowers the number of crowded representative routes
without increasing sampled crossings. It also lowers route median, but its
maximum route is longer and its horizontal extent is wider. This is a
promising diagnostic candidate, not a Product decision. Actual Product visual
inspection remains authoritative for deciding whether the longer route is
acceptable and whether the previously good labels remain natural.

## Track separation for the next comparison

The current work is split into two independent tracks:

1. **Initial presentation / geometry**: crossings, corridor density,
   Node-owned label accommodation, Relation-label accommodation, route burden,
   and extent.
2. **Interactive routing / drag lifecycle**: obstacle entry during drag,
   active route curvature, and pointer-up side changes.

The second track remains open. A genuine final label-safety reroute in an
Armstrong -> Eagle trace is evidence that the final safety rule can act; it is
not evidence that every pointer-up side flip is resolved. Geometry changes must
not be used to close that interactive-routing question.

## Low-cost geometry controls

Two small, interpretable controls were generated from the promising local
candidate family. The Product routing, label placement, drag implementation,
and Apollo relation topology were held fixed; only the in-memory diagnostic
coordinates differ.

| Candidate | Crossings | Label-route hits | Route median | Route max | Extent | Interpretation |
| --- | ---: | ---: | ---: | ---: | --- | --- |
| local-search-v1-plus | 3 | 0 | 163.8 | 363.3 | 440 x 677 | promising, user inspection pending |
| crossing-aware-v1 | 1 | 2 | 116.1 | 305.4 | 391 x 545 | mixed/negative control |
| label-accommodation-v1 | 3 | 1 | 177.9 | 464.4 | 423 x 677 | mixed control |

The crossing-aware control demonstrates why crossing count cannot be the sole
objective: it reduces sampled crossings and route burden while introducing
route/label hits and weakening the representative Relation-label affiliation
around the Armstrong corridor. The label-accommodation-aware control improves
the residual `entity-1` competing-route separation and reduces crowded
representative routes, but its maximum route grows substantially and one
label-route hit remains. Neither control is adoption-ready from metrics alone.

These results support a small geometry-plus-accommodation comparison, followed
by actual Product inspection of the few candidates. They do not justify a
large parameter sweep or a routing implementation change. A candidate that
looks better numerically still requires an Early Visual Smoke Check.

## Presentation-aware bounded relaxation

The next diagnostic experiment started from `local-search-v1-plus` and used
the current Product presentation pipeline as the evaluator. It changed one
Node at a time in canonical graph order, tried eight compass directions at
steps 24, 12, and 6, and made two deterministic sweeps. A candidate was
rejected before presentation derivation when any pair violated the existing
`INITIAL_ENTITY_CLEARANCE` rule of 76 graph units in both axes. This is the
same hard feasibility rule used by initial Entity placement; it was not
changed or promoted into a new Product rule.

The evaluator included Node-label derivation, Relation-label placement,
routing, bounded feedback, crossings, label-route hits, label proximity,
label overlap, route length, and extent. The experiment performed 433
presentation evaluations, accepted 29 improving moves, and observed no
infeasible accepted candidate. The resulting diagnostic candidate is named
`presentation-aware-relaxation-v1` on the actual-App inspection surface.

| Candidate | Node overlap pairs | Minimum Node separation | Crossings | Label-route hits | Route median | Route max | Extent |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| local-search-v1-plus | 0 | 176.7 | 3 | 0 | 163.8 | 363.3 | 440 x 677 |
| presentation-aware-relaxation-v1 | 0 | 140.6 | 2 | 0 | 123.3 | 382.5 | 338 x 647 |

This result is encouraging but not a selection: the candidate reduces
crossing pressure, route median, and extent while increasing route maximum and
reducing the minimum Node separation. The hard feasibility boundary held, but
visual Node-label and Relation-label naturalness still require actual Product
inspection. The result supports presentation-aware relaxation as a useful
bounded experiment family; it does not establish that this score or sweep
schedule is a Product algorithm.

## Topology-aware bounded relaxation

The actual Product inspection of the presentation-only relaxation showed that
label placement was improved but direct neighbors could become visually too
far apart. The cause is visible in the objective: presentation pressure was
scored, while 1-hop Node distance was not. The greedy one-Node-at-a-time order
could therefore accept a move that improved a local label or route score while
stretching several incident Relations.

A second deterministic diagnostic run used the same starting geometry,
candidate directions, step sizes, sweeps, hard Node feasibility, and full
presentation evaluator. It added a bounded soft regularizer for every 1-hop
Relation. The preferred band was relative to the `local-search-v1-plus`
starting distance: 0.8x to 1.1x, with the existing 76-unit clearance as the
absolute lower floor. The band and penalty weight are experiment parameters,
not Product thresholds; the purpose is to test topology locality, not to
freeze the existing geometry.

Representative connected-pair distances changed as follows:

| Connected pair / Relation | Starting distance | Topology-aware distance | Preferred band |
| --- | ---: | ---: | --- |
| Neil Armstrong -> NASA (`is a NASA astronaut`) | 205.9 | 170.9 | 164.7–226.4 |
| Buzz Aldrin -> NASA | 187.8 | 155.6 | 150.3–206.6 |
| Michael Collins -> NASA | 258.8 | 207.9 | 207.0–284.7 |
| Michael Collins -> Command Module Columbia | 231.4 | 185.3 | 185.2–254.6 |
| Lunar Module Eagle -> Moon | 229.6 | 250.0 | 183.6–252.5 |
| Hornet -> Command Module Columbia | 242.1 | 205.6 | 193.6–266.3 |

All 11 connected pairs remained within the diagnostic preferred band. The
topology-aware candidate has zero Node-overlap pairs and a minimum Node
separation of 155.6. Its presentation comparison is:

| Candidate | Node overlap pairs | Crossings | Label-route hits | 1-hop outside band | 1-hop median | Route median | Route max | Extent |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Targeted local corridor refinement | 0 | 3 | 0 | not measured | 231.4 | 163.8 | 363.3 | 440 x 677 |
| Presentation-aware bounded relaxation | 0 | 2 | 0 | 5 | 189.3 | 123.3 | 382.5 | 338 x 647 |
| Topology-aware bounded relaxation | 0 | 3 | 0 | 0 | 189.3 | 127.4 | 292.8 | 386 x 581 |

The topology-aware candidate gives up the crossing reduction of the previous
relaxation, but it avoids the observed adjacency drift and also reduces route
maximum and extent relative to `local-search-v1-plus`. This is evidence that
the earlier candidate's unnatural topology was an objective omission, not
proof that the new band or weight is optimal. Actual Product inspection is
still required, especially for the Armstrong/NASA/Eagle and Collins/NASA
corridors.

## Boundaries and state

- Fresh10, Fresh11, Fresh12 artifacts and the canonical Fresh12 Human Review
  result are unchanged.
- No new governed Fresh lineage was started.
- No Product initial-placement adoption was made.
- Current routing, label-safety, active recovery, and drag behavior remain the
  regression baseline.
- Initial geometry / label accommodation is the active comparison track;
  interactive pointer-up routing remains independently unresolved.
- `presentation-aware-relaxation-v1` is diagnostic-only and awaits user visual
  inspection; Product adoption remains undecided.
- `topology-aware-relaxation-v1` is a separate diagnostic candidate and awaits
  actual Product inspection; it is not a Product algorithm or adoption.
- No push, tag, release, deploy, or publication was performed.
