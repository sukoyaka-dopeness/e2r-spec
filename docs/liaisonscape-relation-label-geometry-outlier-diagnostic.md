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

## Factor-isolated comparison from the best-so-far baseline

The subsequent comparison kept `local-search-v1-plus` as the common starting
geometry and isolated three pressures rather than combining them in one score:

- **Label-length-aware refinement** increased the preference for a usable span
  around Relation labels.
- **Horizontal-canvas refinement** added a weak prior toward a less vertical
  graph shape, using the 800 x 500 inspection viewport as context.
- **Bounded crossing refinement** reused the existing crossing-aware control as
  a crossing-focused comparison, while retaining the existing label and route
  checks.

The first two new candidates used one deterministic sweep, eight directions,
steps 18/9/6, and a maximum 96-unit displacement per Node. Node overlap was
still rejected at the existing 76-unit boundary. The Product presentation
pipeline remained the evaluator.

| Candidate | Aspect ratio | Fit scale | Route median | Route max | Crossings | Label-route hits | Extent | Interpretation |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | --- | --- |
| Targeted local corridor refinement | 0.650 | 0.416 | 163.8 | 363.3 | 3 | 0 | 440 x 677 | user-inspected best so far |
| Presentation-aware bounded relaxation | 0.523 | 0.433 | 123.3 | 382.5 | 2 | 0 | 338 x 647 | user-rejected for topology locality |
| Topology-aware bounded relaxation | 0.665 | 0.477 | 127.4 | 292.8 | 3 | 0 | 386 x 581 | user-rejected for label accommodation |
| Label-length-aware refinement | 0.651 | 0.337 | 329.6 | 452.3 | 3 | 0 | 554 x 851 | label metric improves, geometry worsens |
| Horizontal-canvas refinement | 0.970 | 0.473 | 140.1 | 394.8 | 3 | 0 | 569 x 587 | aspect improves, width and separation cost |
| Bounded crossing refinement | 0.718 | 0.506 | 116.1 | 305.4 | 1 | 2 | 391 x 545 | crossing-only mixed control |

The label-length-aware result lowers its diagnostic label-support shortfall,
but it does so by moving Nodes into a much larger 554 x 851 footprint and by
increasing route median to 329.6. This rejects a label-length-only objective as
the next Product direction. The horizontal candidate makes the geometry less
vertical and raises the fit scale, but its width grows to 569, minimum Node
separation falls to 129.6, and route max increases to 394.8. Aspect alone is
therefore also insufficient.

The bounded crossing control reduces the sampled count to one, yet has two
label-route hits and was previously judged visually worse by the user. This is
a direct reminder that raw sampled crossing count is not equivalent to actual
visual crossing quality.

The comparison supports a bounded joint direction: keep the locality and
label-affiliation qualities of `local-search-v1-plus`, add only a modest
label-support prior, and use aspect and crossing as weak diagnostics rather
than dominant objectives. This is a research direction, not a Product
adoption decision. A further combined candidate should be created only after
the current factor candidates have been inspected and its score is justified.

## Balanced Edge-length refinement

The user inspection of `horizontal-canvas-v1` found a useful distinction:
horizontal canvas utilization improved, but some horizontal Edges became too
short to give their Relation labels a comfortable corridor. The earlier
label-length-only control was not a safe remedy because it produced unnatural
curves and extra crossing exposure. This supports a narrower experiment rather
than a global Edge-length target.

The new diagnostic `balanced-edge-length-v1` keeps the current Product
routing, label placement, and drag behavior unchanged. It starts from the same
`local-search-v1-plus` coordinates and uses the existing one-sweep, eight-
direction, 18/9/6-step search with a 96-unit per-Node displacement bound.
`INITIAL_ENTITY_CLEARANCE = 76` remains a hard reject.

For diagnosis, a Relation's raw route length is kept separate from its usable
label span. Usable span is the route's horizontal endpoint projection scaled
by route straightness, and it is evaluated only for shallow-angle routes
(horizontal projection ratio >= 0.55). The soft lower bound is label width +
48 units; steep routes are not pulled sideways merely to satisfy a horizontal
label heuristic. A weak baseline-relative upper band limits unnecessary
expansion. These are experiment parameters, not Product thresholds.

| Candidate | Usable-span penalty | Extent | Aspect | Fit scale | Route median/max | Crossings | Minimum Node separation |
| --- | ---: | --- | ---: | ---: | ---: | ---: | ---: |
| Targeted local corridor refinement | 3043 | 440 x 677 | 0.650 | 0.416 | 163.8 / 363.3 | 3 | 176.7 |
| Horizontal-canvas refinement | 4624 | 569 x 587 | 0.970 | 0.473 | 140.1 / 394.8 | 3 | 129.6 |
| Balanced Edge-length refinement | 15 | 524 x 578 | 0.907 | 0.480 | 192.4 / 410.9 | 3 | 142.9 |

The balanced candidate reduces the shallow-angle usable-span shortfall from
3043 to 15 while retaining a more horizontal shape than the best-so-far
baseline. It does not reduce the sampled crossing count, and its route maximum
and median are higher than the horizontal-only control. Therefore it is a
promising candidate for actual Product inspection, not a selection or adoption
decision. The result also shows that “shorter Edge = better” is not a safe
general objective: the route-median improvement of the horizontal-only control
coexists with worse label-support pressure.

The shallow-angle cutoff and label-width-plus-margin lower bound remain
unresolved heuristics. They need actual Product inspection and, if useful,
confirmation on another representative fixture before becoming reusable
policy. Crossing quality also remains independent: the same raw count can have
different visual significance depending on crossing location, angle, corridor
congestion, and Relation-label proximity.

## Safe vertical compaction and secondary crossing pass

User inspection of `balanced-edge-length-v1` found that label accommodation
was substantially better, but the graph still retained unnecessary vertical
space. The next bounded experiment therefore fixed every Node's x coordinate
and searched only y movements from the balanced candidate. Each Node was
limited to 72 units of cumulative vertical displacement, and the existing
`INITIAL_ENTITY_CLEARANCE = 76` Node-overlap hard reject remained active.
The objective retained the shallow-angle usable-span guard and a relative
1-hop locality penalty against the balanced starting geometry.

The compaction pass produced `safe-vertical-compaction-v1`:

| Candidate | Extent | Aspect | Fit scale | Route median/max | Usable-span penalty | Crossings | Minimum Node separation |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Balanced Edge-length refinement | 524 x 578 | 0.907 | 0.480 | 192.4 / 410.9 | 15.1 | 3 | 142.9 |
| Safe vertical compaction | 524 x 541 | 0.970 | 0.510 | 189.6 / 404.0 | 6.3 | 3 | 125.0 |

This identifies removable vertical space in this Apollo 11 candidate without
changing route/label implementation, introducing Node overlap, or losing
shallow-angle label-support coverage in the diagnostic metric. The reduced
minimum separation is still above the hard boundary, but it is a visual risk
that requires Product inspection rather than automatic approval.

A second bounded pass then searched small x/y moves (maximum 48 units from the
compacted positions) with hard label-route and label-overlap rejection and a
soft usable-span guard. It was intended as a secondary crossing refinement,
not as a primary raw-crossing minimizer. In this fixture it produced
`crossing-after-compaction-v1`, with extent 516 x 529, aspect 0.976, fit scale
0.520, route median/max 180.9 / 393.8, usable-span penalty 6.4, minimum Node
separation 107.9, and **3 crossings**, unchanged from the compacted candidate.
Thus the pass did not achieve raw crossing reduction; it only found a smaller
geometry under the current constraints. The visual significance of its
crossings remains unresolved until actual Product inspection.

The current direction is consequently: inspect the two new candidates, treat
balanced Edge length as the label-support baseline, and do not promote the
compaction or crossing pass to Product behavior. A crossing score must remain
secondary to hard feasibility, topology locality, and label accommodation;
crossing location, angle, shared corridor, and proximity to Relation labels
must be judged on the actual Product surface.

## Global horizontal recomposition

The preceding user inspection found that the local and compaction refinements
improved corridor safety but did not materially change the graph's overall
shape. The next bounded experiment therefore tested a global recomposition,
without changing routing, Relation-label placement, Node-owned labels, final
feedback, or drag behavior.

Candidate A, `global-horizontal-topology-v1`, applies a centroid-preserving
principal-axis rotation to `crossing-after-compaction-v1`. This is a genuine
global transform rather than an x-axis stretch: every Node is transformed in
one operation, pairwise distances and 1-hop distances are preserved, and the
existing `INITIAL_ENTITY_CLEARANCE = 76` feasibility boundary remains active.
Candidate B, `topology-aware-horizontal-recomposition-v1`, starts from A and
allows one bounded 12/6-unit, eight-direction pass with a 48-unit per-Node
limit. Its objective adds label-support and relative-adjacency penalties while
rejecting Node overlap, label-route hits, and label overlap. Both candidates
are diagnostic materializations only.

The machine comparison is:

| Candidate | Extent | Aspect | Fit scale | Route median/max | Usable-span penalty | Crossings | Minimum Node separation |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Targeted local corridor refinement | 440 x 677 | 0.650 | 0.416 | 163.8 / 363.3 | 3043 | 3 | 176.7 |
| Crossing refinement after compaction | 516 x 529 | 0.976 | 0.520 | 180.9 / 393.8 | 6 | 3 | 107.9 |
| Global horizontal recomposition A | 585 x 496 | 1.180 | 0.550 | 171.5 / 381.6 | 10322 | 3 | 107.9 |
| Topology-aware horizontal recomposition B | 507 x 441 | 1.151 | 0.610 | 141.5 / 327.4 | 5502 | 3 | 134.0 |

A demonstrates the intended global shape change and preserves 1-hop geometry,
but its horizontal orientation creates too many shallow-angle label-support
shortfalls in the current metric. B recovers some fit scale, route length, and
minimum separation while retaining a clearly horizontal aspect, but its
usable-span penalty remains materially above the balanced/compacted controls.
Neither candidate reduced the raw crossing count. The result is therefore
strong evidence that global reorientation can change canvas utilization without
changing topology, but not evidence that principal-axis rotation alone is a
usable Product layout. Whether B is visually preferable, whether the remaining
shortfalls are concentrated in the named Apollo corridors, and whether a
topology-first horizontal band assignment can improve them remain unresolved
until actual Product inspection.

This experiment also keeps the two concerns separate: the interactive
pointer-up obstacle-side flip remains `OPEN / INDEPENDENT`, and these static
coordinate candidates do not claim to diagnose or fix it.

## Structural reassignment screen and vertical-space rebalance

The subsequent actual Product inspection established two strong baselines:
`local-search-v1-plus` remains the best overall for local corridors and label
affiliation, while `safe-vertical-compaction-v1` is a promising second option
whose labels and Edge lengths remain acceptable. Its remaining issues are
crossing quality and a graph that is still more vertical than the desktop
canvas. Conversely, the earlier principal-axis horizontal candidates achieved
a wide shape by creating short horizontal Edges that did not accommodate their
Relation labels. This distinguishes horizontalization from horizontal
compression.

Two bounded structural checks followed. First, a fixed-scaffold assignment
screen tried every pairwise Node-to-position swap in two deterministic sweeps
(72 evaluated swaps) from `safe-vertical-compaction-v1`. It rejected any
candidate with a Node-label or Relation-label collision/proximity, a usable
span penalty above `2x + 64` of the starting candidate, or a 1-hop distance
outside the broad 0.70--1.35 reference ratio. All 68 feasible-evaluation
failures were rejected by those presentation/topology constraints, and no swap
was accepted. This is useful negative evidence: in this fixture, a local
assignment swap alone does not remove a crossing while retaining the current
good label, clearance, and locality qualities.

Second, `vertical-space-rebalance-v1` keeps every x coordinate fixed and
rebalances y coordinates around the graph centroid. The strongest eligible
screened factor is 0.75. It is not a generic scaling rule or Product behavior;
it is a small structural diagnostic that tests whether desktop canvas use can
improve without shortening horizontal label corridors.

| Candidate | Extent | Aspect | Fit scale | Route median/max | Usable-span penalty | Crossings | Minimum Node separation |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Targeted local corridor refinement | 440 x 677 | 0.650 | 0.416 | 163.8 / 363.3 | 3043 | 3 | 176.7 |
| Balanced Edge length with safe vertical compaction | 524 x 541 | 0.970 | 0.510 | 189.6 / 404.0 | 6.3 | 3 | 125.0 |
| Horizontal topology rebalance (vertical-space only) | 524 x 405 | 1.293 | 0.656 | 187.2 / 397.6 | 19.5 | 3 | 94.0 |

The new candidate has no Node overlap, no label-route hit, no Node-label
overlap, and no label-proximity hit under the existing diagnostic checks. Its
connected-pair distance ratios against the safe-compaction reference range
from 0.752 to 0.997, which remains within the intentionally broad structural
screen. Its slightly higher usable-span penalty is concentrated in the
Armstrong/NASA and Collins/NASA Relation corridors, so their actual label
affiliation must be checked rather than inferred from the aggregate.

Raw crossing count remains three. The crossing diagnostic identifies the same
three Relation pairs, but not the same visual quality: Collins/NASA with
Armstrong/Eagle moves from a 55.2-degree label-near crossing to a 50.9-degree
non-label-near crossing; Armstrong/Eagle with NASA/Saturn V becomes
label-near at 69.8 degrees; Collins/Columbia with NASA/Saturn V remains
label-near and becomes shallower (80.0 to 68.6 degrees). Consequently this is
a canvas-utilization comparison candidate, not a crossing-reduction success.
Actual Product inspection must decide whether the new horizontal shape is
worth the reduced separation and changed crossing presentation.

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
- `global-horizontal-topology-v1` and
  `topology-aware-horizontal-recomposition-v1` are diagnostic candidates
  awaiting actual Product inspection; neither is Product behavior or an
  adoption decision.
- `vertical-space-rebalance-v1` is a diagnostic candidate awaiting actual
  Product inspection. It does not claim a crossing reduction or Product
  adoption.
- No push, tag, release, deploy, or publication was performed.

## Generic crossing-first structural search

### Scope and question

The user demonstrated an Apollo 11 arrangement in the actual Product with no
visible Edge crossings. That observation does not make zero crossings a
universal Product requirement, but it disproves the narrower claim that the
three crossings in the current diagnostic candidates are topologically
unavoidable for this Dataset.

This checkpoint therefore tested a generic, diagnostic-only feasibility
search. It does not use Apollo names, hand-arranged coordinates, a special
ordering, or a Product code path. The current routing, Node-label placement,
Relation-label placement, drag behavior, and stored Dataset coordinates remain
unchanged.

### Search design

The diagnostic tool in the LiaisonScape repository uses two structural stages:

1. For graphs of at most nine Nodes, it exhaustively screens circular orders
   as an outer-face hint. For larger graphs it uses a deterministic, seeded
   circular-order heuristic. This stage is intentionally only a screen: a
   graph can have a planar embedding with interior Nodes while having no
   zero-crossing circular embedding.
2. A generic grid assignment search permits interior Nodes, using Node swaps
   and moves into unused grid slots. It first minimizes straight-line
   non-incident crossings, short connected pairs, and unnecessary long pairs.
   Only zero-crossing structural finalists enter the bounded, expensive repair
   that evaluates the actual Product presentation pipeline.

The repair evaluates routing, Node labels, Relation labels, label collisions,
label proximity, route lengths, usable label support, fit, and crossings. It
does not accept a candidate with a Node-overlap pair under the existing
`INITIAL_ENTITY_CLEARANCE = 76` rule, a label-route hit, a label overlap, or a
label-near-20 route. This is a diagnostic feasibility boundary, not a new
Product layout contract.

### Apollo 11 result

The exact circular screen evaluated 40,320 raw permutations (20,160
reflection-distinct orders) and its best chord model still had two crossings.
This is useful negative evidence: outer-face ordering alone is insufficient;
it does not show that the graph is nonplanar.

The generic grid-plus-presentation search then found an eligible candidate:

| Candidate | Crossings | Label-route hits | Label-near-20 routes | Node-label overlap | Node overlap pairs | Minimum separation | Extent | Fit scale | Route median/max | Usable-span penalty |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | --- | ---: | --- | ---: |
| Safe vertical compaction | 3 | 0 | 0 | 0 | 0 | 125.0 | 524 x 541 | 0.510 | 189.6 / 404.0 | 6.3 |
| Generic crossing-first structural search | **0** | 0 | 0 | 0 | 0 | 164.0 | 670 x 499 | 0.548 | 194.0 / 356.9 | 149.4 |

The candidate has no sampled crossing details, no hard label collision, and no
label-proximity failure. Its single remaining shallow Relation-label support
shortfall is represented by the nonzero soft usable-span penalty; it was not
silently treated as a pass. The candidate is intentionally wider than the
compaction baseline, but has a comparable fitted scale, a slightly higher
route median, and a lower route maximum.

This establishes **feasibility**, not selection. The candidate is available as
`generic-crossing-search-v1` on the actual-App geometry inspection surface for
an Early Visual Smoke Check. It must be judged for topology locality, natural
cluster grouping, label affiliation, canvas use, and whether its zero
crossings are visibly worth its wider footprint.

### Crossing model

The raw count is used only as a structural feasibility signal. For each
non-incident route intersection the diagnostic records the route pair,
intersection point, acute crossing angle, and whether it is near a Relation
label. Short-edge crossings and shared corridors are separately reflected in
the route-length, usable-span, and local visual inspection checks. A candidate
is not declared visually superior merely because its count is lower.

### Scale observations

The bounded implementation was measured on representative local inputs:

| Input | Nodes / entity-to-entity Edges | Order stage | Cheap grid evaluations | Product-presentation evaluations | Wall time |
| --- | ---: | --- | ---: | ---: | ---: |
| Apollo low-density fixture | 3 / 1 | exact circular | 19,216 | 50 | 0.09 s |
| Apollo 11 fixture | 9 / 11 | exact circular | 19,216 | 300 | 30.85 s |
| Lighthouse fixture | 10 / 14 | heuristic circular | 19,216 | 300 | 50.37 s |

The exact circular screen grows factorially and is deliberately capped at nine
Nodes. The generic grid stage has a fixed diagnostic budget of 16 starts by
1,200 cheap swap/move evaluations; each evaluation grows with the number of
non-incident Edge pairs. The Product-aware repair is capped at 12
zero-crossing structural finalists, one start, and 24 local moves (at most 300
full presentation evaluations). The 10-node input also found an eligible
zero-crossing candidate, but its usable-span penalty was high; that confirms
the method is an inexpensive feasibility direction, not a generally ready
layout solver.

For materially larger graphs, the current fixed budget must be profiled and
possibly reduced or staged before it can become an ordinary interactive or
initial-layout path. No claim is made for 100-node performance.

### Classification and next decision

**PROVEN**

- Apollo 11's current three crossings are not topologically unavoidable.
- A generic interior-capable structural search can find an Apollo candidate
  with zero sampled crossings while maintaining the stated hard diagnostic
  label and clearance checks.
- Circular ordering alone bottoms out at two chord crossings for Apollo 11.

**STRONGLY SUPPORTED**

- A two-stage structural search is a more promising zero-crossing direction
  than tuning the existing local routing score or performing only local
  assignment swaps.
- The Product-presentation repair is needed after cheap geometric feasibility:
  the initial zero-crossing grid states still had label-near or usable-span
  problems.

**UNRESOLVED**

- Whether the generic candidate is visually more natural than the current
  local-corridor / safe-compaction alternatives.
- The right balance among crossing preference, locality, label support, and
  canvas footprint across a broader fixture set.
- Whether this diagnostic should evolve into a bounded Product initial-layout
  option, and at what graph-size budget.

The interactive pointer-up routing track remains `OPEN / INDEPENDENT`.
No Product behavior has been adopted; no new governed Fresh lineage was
started; Fresh10, Fresh11, Fresh12, and the canonical Fresh12 Human Review
result remain unchanged.

## Post-structural constrained relaxation

### Snapshot

At the start of this checkpoint, the generic crossing-first candidate had
already passed actual Product inspection by the user: zero crossings, label
safety, natural Relation-label fit, and very good overall readability. The
user also observed that a small manual Node movement could make a Relation
label in a parallel corridor appear more naturally separated. That observation
is recorded as user inspection evidence; it is not a Product coordinate or a
new acceptance rule.

The snapshot to preserve is therefore:

| Candidate | Crossings | Label-route hits | Label-near-20 routes | Usable-span penalty | Extent | Fit scale | Route median/max |
| --- | ---: | ---: | ---: | ---: | --- | ---: | --- |
| Generic crossing-first structural search | 0 | 0 | 0 | 149.4 | 670 x 499 | 0.548 | 194.0 / 356.9 |

No historical evidence, canonical review result, or stored Product Dataset
was changed to create this snapshot.

### Experiment

The generic candidate was used as the starting geometry. A deterministic local
pass changed one Node at a time by 18, 9, or 6 units in eight compass
directions, with a maximum displacement of 48 units per Node from the
snapshot. The existing Product presentation pipeline remained the evaluator.
Candidates were rejected if they reintroduced a crossing, Node overlap,
label-route hit, label overlap, or label-near-20 route. A soft 0.80--1.20
relative band around each starting 1-hop distance protected topology locality;
this band is an experiment constraint, not a Product policy.

The pass evaluated 208 positions and accepted 16 improving moves. Four Nodes
moved in the resulting state: `moon`, `saturn-v`, `columbia`, and `aldrin`,
with a smaller `nasa` y adjustment; no Node exceeded the 48-unit bound. The
other Nodes remained at their snapshot positions.

| Candidate | Crossings | Label-route hits | Label-near-20 routes | Node overlap pairs | Minimum separation | Usable-span penalty | Extent | Fit scale | Route median/max |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | --- | ---: | --- |
| Generic snapshot | 0 | 0 | 0 | 0 | 164.0 | 149.4 | 670 x 499 | 0.548 | 194.0 / 356.9 |
| Post-structural constrained relaxation | **0** | 0 | 0 | 0 | 164.0 | **0** | 622 x 419 | 0.637 | 195.7 / 352.9 |

The relaxation reduced the measured usable-span shortfall to zero, reduced the
visual extent, increased fitted scale, and slightly reduced the maximum route.
Route median increased by about 1.6 units. Crucially, zero crossings and all
hard label/clearance checks remained intact. This is a promising bounded
diagnostic result, not proof that the local score is generally optimal.

### Why the small movement helps

The evidence supports a local pressure explanation: the generic structural
solution already separates the crossing topology, but a few Nodes still place
parallel or shallow corridors close to the Relation-label support boundary.
Small displacement can release that pressure without changing the structural
assignment or requiring a Relation-label algorithm change. The current run
does not isolate whether the improvement came primarily from parallel-edge
separation, candidate competition, Node-label occupancy, or their interaction.

**PROVEN**

- The bounded relaxation found a changed candidate with zero crossings and no
  measured label-safety or Node-overlap violation.
- Its measured usable-span penalty improved from 149.4 to 0 and its extent
  improved from 670 x 499 to 622 x 419.
- The changes were small local movements around an already good structural
  solution, not a second large recomposition.

**STRONGLY SUPPORTED**

- Structural search followed by a small presentation-aware relaxation is a
  useful two-stage diagnostic strategy for this fixture.
- The observed manual-drag improvement is consistent with local corridor
  pressure being released by small geometry changes.

**UNRESOLVED**

- Whether the relaxed candidate is visually preferable to the user-inspected
  generic snapshot.
- Whether the same relaxation remains useful across other Datasets, Node
  counts, or relation topologies.
- A general automatic acceptance rule for relaxation, including the correct
  locality band and cost budget.
- Node-to-Node label connector presentation and the independent interactive
  pointer-up obstacle-side flip.

### Actual Product inspection boundary

The candidate is available as
`post-structural-relaxation-v1` on the diagnostic geometry inspection surface.
It changes only an in-memory diagnostic clone; Product initial placement and
stored Dataset coordinates are unchanged. The user should compare it directly
with `generic-crossing-search-v1`, checking that zero crossings remain
visually true, Relation labels remain natural in parallel corridors, Edge
lengths do not become awkward, Node groups remain coherent, and the improved
fit is not achieved by harmful crowding.

Product adoption remains undecided. No governed Fresh lineage was started and
the interactive pointer-up routing track remains `OPEN / INDEPENDENT`.

## Two-stage layout generalization snapshot

### Snapshot of the Apollo milestone

The current milestone is now recorded as the two-stage diagnostic pattern:

```text
generic crossing-first structural search
    -> graph-level structural arrangement
post-structural constrained relaxation
    -> small presentation-preserving geometry adjustment
```

For Apollo 11, the generic search found a structural zero-crossing candidate,
and the bounded relaxation kept zero crossings while removing the measured
usable-span pressure. The user inspected the relaxed candidate in the actual
Product and reported readable Node-owned and Relation labels, improved
parallel-corridor affiliation, and very good overall readability. A small
manual Node movement producing a similar local presentation improvement is
supporting user evidence for local corridor pressure, not a stored coordinate
or an Apollo-specific rule.

The snapshot remains diagnostic-only. It is a research milestone and not a
Product adoption decision.

### Generalization probe

The same implementation was run against existing fixtures without Apollo
names or Apollo-specific ordering. The inspection surface can now display the
generic and post-relaxation materializations for the Linkscape sample and the
Lighthouse sample as diagnostic in-memory clones of the actual `App` surface.
The stored fixtures and Product initial-placement source remain unchanged.

| Fixture class | Nodes / entity Edges | Structural result | Post-relaxation | Result summary |
| --- | ---: | --- | --- | --- |
| sparse Apollo control | 3 / 1 | zero finalist found | 0 crossings, label-safe | bounded run completed in 0.09 s |
| sparse/medium Linkscape sample | 5 / 6 | zero finalist found | 9 accepted moves; 0 crossings and label-safe | extent 375 x 164 -> 356 x 146; route max 172.0 -> 139.7 |
| Apollo 11 benchmark | 9 / 11 | zero finalist found | 16 accepted moves; 0 crossings and label-safe | extent 670 x 499 -> 622 x 419; usable penalty 149.4 -> 0 |
| Lighthouse sample | 10 / 14 | zero finalist found | 14 accepted moves; 0 crossings and label-safe | extent 636 x 440 -> 633 x 401; fit 0.611 -> 0.662 |

These machine results support repeating the two-stage strategy beyond Apollo,
but they do not establish visual quality for the other fixtures. The actual
Product surface is the authority for that observation, and the generalization
surface is waiting for user inspection.

### Zero-crossing fallback

Zero crossings are a preference when feasible, not a universal rule. A
synthetic K3,3 graph was used as a non-planar stress case for the structural
screen. Its exact circular stage had a best chord count of 3; the bounded grid
screen found no structural zero-crossing finalist and its best structural
fallback had one straight-line crossing. The post-structural relaxation was
not attempted because there was no zero-crossing structural start.

The same run completed in 1.70 s with 19,216 cheap grid evaluations. The
selected fallback retained label and Node-clearance safety in the measured
presentation, but had two routed crossings. This is the intended fail-closed
bounded behavior: return the best structural result found under the budget,
report that zero structural feasibility was not found, and do not wait
indefinitely or claim planarity. The finite result is evidence about this
screen and budget, not a mathematical proof that every possible embedding is
impossible.

The diagnostic now keeps these quantities separate:

- structural straight-line crossing count;
- routed Product presentation crossing count;
- label-route hits, label proximity, and label overlap;
- Node clearance and 1-hop locality.

This distinction prevents a curved router result from being mistaken for a
planar structural embedding.

### Scaling and first bottleneck

The latest bounded runs measured the following:

| Fixture | Nodes / Edges | Order evaluations | Cheap grid evaluations | Product evaluations | Runtime |
| --- | ---: | ---: | ---: | ---: | ---: |
| Apollo low-density | 3 / 1 | 2 | 19,216 | 50 | 0.09 s |
| Linkscape | 5 / 6 | 24 | 19,216 | 300 | 9.09 s |
| Apollo 11 | 9 / 11 | 40,320 raw permutations | 19,216 | 300 + 208 relaxation | 46.83 s |
| Lighthouse | 10 / 14 | 580 heuristic attempts | 19,216 | 300 + 208 relaxation | 83.59 s |
| synthetic K3,3 | 6 / 9 | 120 | 19,216 | no post-relaxation | 1.70 s |

For at most nine Nodes, the exact circular screen grows factorially and is
therefore capped. Larger graphs use a deterministic seeded heuristic for that
screen. The grid stage has a fixed 16-start by 1,200-move budget, with each
cheap evaluation growing with non-incident Edge-pair count. Full Product
presentation and local relaxation are the first practical bottlenecks for
these fixtures; the Lighthouse run is slower despite only one additional Node
because its relation topology causes more presentation work. No 100-Node
performance claim is made.

### Contribution of the two stages

The structural stage contributes the main crossing-topology improvement. In
Apollo it moves from the prior three-crossing family to a zero-crossing
structural candidate; the circular-only screen could not do this. The second
stage contributes presentation polish: on Apollo it reduces usable-span
penalty, extent, and route maximum without reintroducing crossings. On the
5-node sample it also reduces route burden; on Lighthouse it improves extent
and fit but leaves a high usable-span penalty. Thus the stages have distinct
responsibilities and should not be collapsed into one opaque local score.

### Classification

**PROVEN**

- The Apollo two-stage milestone is preserved as a research snapshot.
- The same generic implementation completed on sparse, medium, and 10-node
  existing fixtures.
- Apollo, Linkscape, and Lighthouse each produced a bounded structural
  zero-crossing finalist under the current budget.
- The K3,3 stress case produced no structural zero finalist, and the search
  returned a bounded fallback without post-relaxation.
- Structural and routed crossing counts are now reported separately.

**STRONGLY SUPPORTED**

- Structural search followed by small constrained relaxation is more
  promising than solving crossing, labels, aspect, and route length as one
  local objective.
- The current routing and label implementations benefit substantially from
  improved geometry in more than one fixture class.
- The first scalability concern is full Product presentation evaluation,
  after the exact circular search has been disabled for larger graphs.

**UNRESOLVED**

- Visual quality of the non-Apollo candidates until actual Product inspection.
- General behavior for denser, hub-heavy, parallel, self-loop, narrow-viewport,
  and larger graphs.
- The right budget and fallback weighting when zero structural crossings are
  not found.
- Whether any of this diagnostic family should become Product initial layout.
- Node-label connector presentation and interactive pointer-up obstacle-side
  flip remain separate open tracks.

### Product-readiness boundary

Before Product adoption can be evaluated seriously, the current work still
needs cross-fixture actual Product inspection, deterministic/reproducible
budget review, narrow-viewport inspection, regression coverage for preserved
routing/label/drag semantics, and an explicit initial-placement integration
decision. Research success does not imply Product adoption.

No Fresh10, Fresh11, or Fresh12 artifact or canonical Human Review result was
changed. No governed Fresh lineage, push, tag, release, deploy, or publication
was performed.

## Two-stage layout performance checkpoint

### Performance diagnosis

Instrumentation around the current diagnostic runner shows that full Product
presentation evaluation is the first practical bottleneck. On the Lighthouse
fixture, the previous 12-finalist run took 82.93 seconds; 82.80 seconds was
inside 583 calls to the Product presentation evaluator. The cheap structural
grid screen remained bounded at 19,216 evaluations. This makes repeated full
routing and label derivation, rather than the crossing arithmetic itself, the
dominant cost at this scale.

The evaluator intentionally remains the current Product presentation pipeline.
No routing, Relation-label, Node-label, or drag semantics were changed to
obtain the timing result.

An additional V8 CPU profile of the Lighthouse 8-finalist run decomposed the
presentation cost further. Approximately 48% of sampled CPU time was spent in
the repeated occupied-path sample-proximity test inside route candidate
scoring, and approximately 20% was in `routeGraphEdge` as a whole. The next
largest individual costs were label/path distance and route geometry work;
there was no evidence that crossing counting or candidate allocation was the
primary bottleneck. These percentages are profiler samples, not a frozen
performance budget.

### Bounded optimization

The generic runner now limits the expensive Product-aware repair to the first
eight zero-crossing structural finalists, selected after the cheap structural
screen. The limit is configurable through
`E2R_PRESENTATION_FINALIST_LIMIT` for diagnostic experiments and defaults to
eight. This is finalist pruning, not a semantic cache or a new Product
algorithm. It removes redundant full evaluations while preserving the same
deterministic search and the same post-structural relaxation logic.

The limit-four probe was rejected: it reduced Lighthouse runtime to 51.50
seconds but changed the selected candidate's route maximum from 370.0 to
551.3 and increased usable-span pressure. The limit-eight probe preserved the
selected quality metrics on Apollo 11 and Lighthouse, so it is the bounded
default for this diagnostic runner. This is evidence for a diagnostic budget,
not a universal acceptance threshold.

The follow-up optimization keeps the same full-fidelity Product presentation
for every requested candidate but avoids work that cannot affect the result.
The shared `routeGraphEdge` helper first checks candidate and occupied-route
sample bounding boxes expanded by the exact 8-unit proximity threshold; only
intersecting boxes enter the existing point-sample safety loop. Its node
influence precheck uses the same conservative bounding-box principle. The
existing `< 60` and `< 8` thresholds, consecutive-distance rule, candidate
ordering, route selection, and label checks are unchanged. The repeated
distance comparisons use squared distances, which is mathematically
equivalent for these non-negative thresholds. This is a computational change
shared by Product routing and the diagnostic runner, not a new routing policy.

The diagnostic runner also memoizes the pure `positions -> metrics` result by
the complete sorted node-coordinate key. This cache is intentionally local to
the diagnostic runner: it does not reuse interactive Product routing state,
previous routes, labels, or drag continuity. Lighthouse had 16 exact duplicate
requests out of 483 calls; this is a small secondary saving, not the main
optimization mechanism.

### Before / after measurements

| Fixture | Finalist limit | Presentation calls / full evaluations | Runtime | Crossings | Label safety | Extent | Fit | Route median/max |
| --- | ---: | ---: | ---: | ---: | --- | --- | ---: | --- |
| Apollo 11 | 12 | 508 observed in the prior run | 46.68 s | 0 | pass | 622 x 419 | 0.637 | 195.7 / 352.9 |
| Apollo 11 | **8, optimized** | 469 / 453 | **12.55 s** | 0 | pass | 622 x 419 | 0.637 | 195.7 / 352.9 |
| Linkscape | 12 | prior baseline | 9.09 s | 0 | pass | 356 x 146 | 1.000 | 100.6 / 139.7 |
| Linkscape | **8, optimized** | 336 / 318 | **2.86 s** | 0 | pass | 356 x 146 | 1.000 | 100.6 / 139.7 |
| Lighthouse | 12 | 583 | 82.93 s | 0 | pass | 633 x 401 | 0.662 | 193.4 / 370.0 |
| Lighthouse | **8, optimized** | 483 / 467 | **18.79 s** | 0 | pass | 633 x 401 | 0.662 | 193.4 / 370.0 |
| K3,3 fallback | **8, optimized** | 36 / 24 | **0.59 s** | 2 routed; 1 structural | pass | 392 x 164 | 1.000 | 132.0 / 343.9 |

The optimized Apollo, Linkscape, and Lighthouse selected coordinates and
reported quality metrics were identical to their pre-optimization 8-finalist
runs. K3,3 retained its bounded non-zero-crossing fallback. The optimized
runner still requested the same number of presentation evaluations; the
full-evaluation column excludes exact cache hits. The measured wall-time
improvement from the earlier 8-finalist baseline is approximately 67% for
Apollo, 59% for Linkscape, and 73% for Lighthouse in these representative
runs. Wall time is machine-dependent and is not a Product acceptance budget.

Stage-level Lighthouse measurements were 44 presentation calls / 2.17 s for
Stage 1 structural search and 439 calls / 16.62 s for Stage 2 presentation
repair plus constrained relaxation; Stage 2 contained 423 full evaluations and
16 cache hits. Apollo measured 60 / 2.13 s in Stage 1 and 409 / 10.43 s in
Stage 2. Linkscape measured 16 / 0.26 s and 320 / 2.60 s respectively. K3,3
measured 36 / 0.59 s in Stage 1 and did not enter Stage 2. The counts include
diagnostic runner work only; they are not browser capture or governed evidence
counts.

### Scaling interpretation

For small graphs, the fixed grid budget is unnecessary relative to the full
presentation cost: the 3-node control completed in 0.09 seconds. For the
5-node Linkscape fixture, the 8-finalist run completed in 6.87 seconds. For
Apollo 11 and the 10-node Lighthouse fixture, full presentation evaluation
remains the first bottleneck even after finalist pruning. The exact circular
screen is separately capped at nine Nodes because its factorial growth is
predictable; larger graphs use the seeded heuristic order screen.

The current broad scaling concern remains the Stage 2 full-fidelity evaluator:
even after this optimization, a 10-node graph takes tens of seconds on the
representative host. Exact duplicate caching is useful but small. The next
meaningful architecture candidates are incremental affected-route/label
recomputation, a stronger cheap lower-bound screen, or pressure-targeted
partial refinement. None is implemented here because each would need an
equivalence proof against the current Product presentation output; a cache
with interactive state or incomplete invalidation would be unsafe.

### Current generalization state

The two-stage strategy remains strongest on Apollo 11 and has machine support
on Linkscape and Lighthouse. Lighthouse actual Product inspection reported no
major visual breakage, with Edge-to-Relation-label and Node-to-Node-label
affiliation remaining close. Linkscape actual Product visual acceptance is
still pending and is not inferred from its metrics. The K3,3 stress case still
uses the bounded non-zero structural fallback and is unaffected by finalist
pruning because it has no structural zero-crossing start.

**PROVEN**

- Full Product presentation evaluation is the dominant measured cost for the
  10-node fixture, with Stage 2 responsible for 439 of 483 Lighthouse calls.
- A finalist limit of eight preserves the selected Apollo and Lighthouse
  quality metrics in repeated diagnostic runs while reducing runtime.
- A limit of four causes a measured route-quality regression and is rejected.
- Bounding and squared-distance optimizations reduce measured runtime without
  changing selected coordinates or reported quality metrics on the four
  representative cases.

**STRONGLY SUPPORTED**

- Cheap structural screening followed by a bounded number of full-fidelity
  Product-aware finalist evaluations is effective at this scale, but the
  remaining Stage 2 cost is still too high for Product adoption.
- Finalist pruning should remain a diagnostic budget until more fixture classes
  confirm that it does not discard a visually better candidate.
- Conservative spatial screening and pure diagnostic memoization are reusable
  optimization patterns when their invalidation and equivalence boundaries are
  explicit.

**UNRESOLVED**

- Whether incremental affected-route/label recomputation can reduce the cost
  without changing Product presentation semantics.
- Whether eight finalists remain sufficient for denser or hub-heavy graphs,
  narrow viewports, and graphs with parallel or self-loop Relations.
- Whether the optimized runner's tens-of-seconds 10-node trajectory is
  acceptable for any future Product performance evidence class; no budget is
  frozen here.
- Whether the performance benefit survives actual Product visual inspection
  for Linkscape and broader fixtures.
- Product adoption and initial-placement integration.

No Product behavior, stored fixture, historical evidence, or canonical Human
Review result was changed. No governed Fresh lineage, push, tag, release,
deploy, or publication was performed.

## Pressure-targeted Stage 2 relaxation checkpoint

The next bounded experiment tested whether Stage 2 relaxation can be limited
to nodes implicated by the current Product presentation, rather than moving
every node in the structural finalist. This is a diagnostic runner mode, not
a Product layout policy. The existing Stage 1 structural search, Stage 2
finalist limit, route scoring, label safety checks, deterministic ordering, and
pure coordinate-key cache were retained.

### Target derivation

Pressure is derived from the actual `deriveBoundedAutomaticPresentation`
result for the selected zero-crossing structural state. The current signals
are: positive Relation-label usable-span shortfall, long routed paths above
480 units, route crossings, route/node-label hits or near misses, Node-label
overlap, and unusually short endpoint hops. A signal initially marks Relation
endpoints; route/label proximity can also mark the nearby Node-label owner.
The marked set is expanded by a geometric radius of 190 units (2.5 times the
existing 76-unit initial entity clearance). The relaxation target is therefore
an explicit pressure set plus a bounded neighborhood, not an arbitrary count
of finalists.

The target set is computed once from the selected structural state for this
experiment. It is not dynamically recomputed after each accepted move. This
keeps the checkpoint deterministic and bounded, but leaves incremental
pressure invalidation as a separate open question. When no pressure signal is
found, the runner explicitly falls back to full-node relaxation so that a
missing diagnostic signal cannot silently discard an existing optimization
opportunity.

### Full-node versus pressure-targeted measurements

Representative runs used the same Apollo 11, Lighthouse, and Linkscape
fixtures and the same default eight presentation finalists. Presentation
calls include exact cache hits; the full-evaluation column excludes them.

| Fixture / mode | Stage 2 calls / full | Total calls / full | Runtime | Pressure / expanded / target nodes | Relaxation evaluated / accepted | Selected extent | Fit | Route median/max | Usable-span penalty |
| --- | ---: | ---: | ---: | --- | ---: | --- | ---: | --- | ---: |
| Apollo 11 / full | 409 / 393 | 469 / 453 | 12.10 s | — / — / 9 | 208 / 16 | 622.3 x 419.4 | 0.637 | 195.7 / 352.9 | 0 |
| Apollo 11 / pressure | 250 / 238 | 310 / 298 | 8.67 s | 2 / 2 / 2 | 49 / 6 | 670.0 x 465.5 | 0.582 | 193.2 / 356.9 | 0 |
| Lighthouse / full | 439 / 423 | 483 / 467 | 17.95 s | — / — / 10 | 238 / 14 | 633.0 x 401.0 | 0.662 | 193.4 / 370.0 | 9654.4 |
| Lighthouse / pressure | 388 / 374 | 432 / 418 | 17.18 s | 7 / 8 / 8 | 187 / 12 | 642.0 x 405.4 | 0.656 | 193.4 / 385.7 | 9526.7 |
| Linkscape / full | 320 / 304 | 336 / 318 | 2.92 s | 0 / 0 / 5 | 119 / 9 | 355.9 x 146.0 | 1.000 | 100.6 / 139.7 | 0.002 |
| Linkscape / pressure | 320 / 304 | 336 / 318 | 2.69 s | 0 / 0 / 5 (full fallback) | 119 / 9 | 355.9 x 146.0 | 1.000 | 100.6 / 139.7 | 0.002 |

All runs retained zero crossings and zero counted label hits/near misses or
overlaps in their selected candidate. However, pressure targeting did not
produce the same selected coordinates as full-node relaxation on Apollo 11 or
Lighthouse. Apollo traded a smaller route median for a larger footprint and
lower fit; Lighthouse slightly reduced the span penalty but increased extent,
reduced fit, and increased the maximum routed length. These are not visual
equivalence proofs. Linkscape's identity is explained by the explicit
no-pressure fallback, not by evidence that the pressure signals are complete.

### Interpretation

**PROVEN**

- The current presentation output can be converted into a deterministic,
  generic pressure-node set without using Apollo-specific names.
- Bounded neighborhood targeting reduced the Apollo 11 Stage 2 workload from
  409 to 250 calls and the Lighthouse workload from 439 to 388 calls in the
  representative runs.
- Targeted relaxation can change the selected geometry even when all selected
  candidates remain machine-feasible and crossing-free.
- An empty pressure set is observable and now has an explicit full-node
  fallback; Linkscape therefore preserves the full-node selected geometry.

**STRONGLY SUPPORTED**

- Presentation pressure is a useful prioritization signal for reducing
  relaxation work, especially when the pressure set is small relative to the
  graph.
- Pressure-only targeting is not yet a safe replacement for full-node
  relaxation because local moves can alter global extent, fit, or route
  maxima, and a one-time pressure snapshot may miss newly created opportunity
  after a move.
- Any future refinement should compare targeted and full results on geometry
  and actual Product visuals; machine feasibility alone is insufficient.

**UNRESOLVED**

- Whether pressure should be refreshed after each accepted move or after each
  bounded pass, and how to invalidate affected routes and labels safely.
- Whether graph-distance expansion, route-corridor expansion, or a stronger
  lower-bound signal can preserve full-node quality while retaining most of
  the measured reduction.
- Whether a targeted candidate is visually preferable on Apollo 11 or
  Lighthouse; an actual Product comparison surface is prepared for user
  inspection, but no adoption decision is made here.
- Node-label connector presentation remains OPEN/SEPARATE. Interactive
  pointer-up obstacle-side flipping remains OPEN/INDEPENDENT.

No Product source, stored fixture, Fresh10/Fresh11/Fresh12 evidence, or
canonical Human Review result was changed. No new governed Fresh lineage,
Product adoption, push, tag, release, deploy, or publication was performed.

## Stage 2 quantized-lattice performance checkpoint

### Chosen direction

The next performance probe tested quantized candidate coordinates in the
post-structural constrained relaxation. This direction was selected before
incremental route or label recomputation because it can preserve the existing
full Product presentation evaluator and all target nodes while testing a
specific source of repeated work. The expected benefit was state collapse and
additional exact cache hits, not faster integer arithmetic.

The mode is diagnostic-only and opt-in through
`E2R_RELAXATION_LATTICE_STEP`. The default remains zero and reproduces the
previous continuous-coordinate result exactly. A separate
`E2R_RELAXATION_LATTICE_PROBE=1` switch records candidate-state cardinality;
the default runner does not pay that measurement overhead. Lattice steps 1,
2, and 4 were tested. The whole Stage 2 relaxation start is rounded to the
configured lattice and every trial move is rounded before the unchanged
Product presentation evaluator scores it.

### Fractional-state diagnosis

Fractional coordinates are introduced by diagonal movement directions in both
the Product-aware repair and the constrained relaxation. The 45-degree moves
multiply integer step lengths by sine/cosine values. A selected structural
state can therefore enter constrained relaxation with fractional coordinates:
Apollo 11 had nine fractional coordinate components, Linkscape had four, and
Lighthouse had none in these runs. The constrained trial sequence then
generated fractional states even from Lighthouse's integer start.

The baseline constrained relaxation produced the following state counts. The
rounded columns are counterfactual unique keys for the same requested baseline
states; actual quantized runs can follow a different accepted-move trajectory.

| Fixture | Trial requests | Fractional requests | Unique raw states | Unique at step 1 | Unique at step 2 | Unique at step 4 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Apollo 11 | 216 | 216 | 212 | 208 | 208 | 195 |
| Lighthouse | 240 | 235 | 235 | 234 | 233 | 218 |
| Linkscape | 120 | 120 | 116 | 114 | 114 | 106 |

Thus even step 4 collapses only 17 baseline Apollo states, 17 Lighthouse
states, and 10 Linkscape states. Most expensive Product presentation requests
are geometrically distinct at this lattice scale.

### Before / after

These representative timings include the opt-in state-cardinality probe for
the lattice comparison and are not frozen performance budgets.

| Fixture / lattice | Calls / full evaluations | Cache hits | Runtime | Crossings | Label safety | Extent | Fit | Route median/max | Span penalty |
| --- | ---: | ---: | ---: | ---: | --- | --- | ---: | --- | ---: |
| Apollo / continuous | 469 / 453 | 16 | 9.96 s | 0 | pass | 622 x 419 | 0.637 | 195.7 / 352.9 | 0 |
| Apollo / step 1 | 474 / 457 | 17 | 10.22 s | 0 | pass | 644 x 420 | 0.636 | 191.6 / 358.5 | 0 |
| Apollo / step 2 | 469 / 451 | 18 | 10.14 s | 0 | pass | 624 x 424 | 0.631 | 191.6 / 358.9 | 0 |
| Apollo / step 4 | 475 / 443 | 32 | 10.00 s | 0 | pass | 664 x 428 | 0.626 | 198.4 / 352.4 | 0 |
| Lighthouse / continuous | 483 / 467 | 16 | 16.29 s | 0 | pass | 633 x 401 | 0.662 | 193.4 / 370.0 | 9654.4 |
| Lighthouse / step 1 | 482 / 465 | 17 | 16.54 s | 0 | pass | 629 x 401 | 0.662 | 193.4 / 375.6 | 9643.6 |
| Lighthouse / step 2 | 482 / 466 | 16 | 16.09 s | 0 | pass | 630 x 408 | 0.653 | 193.4 / 374.9 | 9656.1 |
| Lighthouse / step 4 | 486 / 451 | 35 | 15.99 s | 0 | pass | 624 x 396 | 0.670 | 192.0 / 361.0 | 9628.4 |
| Linkscape / continuous | 336 / 318 | 18 | 2.18 s | 0 | pass | 356 x 146 | 1.000 | 100.6 / 139.7 | 0.002 |
| Linkscape / step 1 | 336 / 317 | 19 | 2.18 s | 0 | pass | 356 x 146 | 1.000 | 100.5 / 139.9 | 0 |
| Linkscape / step 2 | 338 / 323 | 15 | 2.21 s | 0 | pass | 358 x 132 | 1.000 | 101.2 / 142.6 | 0 |
| Linkscape / step 4 | 335 / 310 | 25 | 2.15 s | 0 | pass | 375 x 164 | 1.000 | 115.1 / 172.0 | 0 |
| K3,3 / continuous or step 4 | 36 / 24 | 12 | 0.44-0.45 s | 2 routed; 1 structural | pass | 392 x 164 | 1.000 | 132.0 / 343.9 | 0 |

Step 4 generated more cache hits and reduced full evaluations by 10 on Apollo,
16 on Lighthouse, and 8 on Linkscape, but did not produce a meaningful runtime
reduction. It also changed every planar fixture's selected geometry. On
Linkscape it made the quantized post-relaxation candidate lose to the earlier
structural presentation-repair candidate, increasing route median/max from
100.6/139.7 to 115.1/172.0. Step 1 stayed closer to the continuous result but
saved at most two full evaluations and did not improve runtime. K3,3 never
entered Stage 2, so quantization correctly had no effect on its fallback.

With the probe disabled and lattice step zero, the final runner reproduced the
pre-probe selected positions and complete selected metric objects exactly on
Apollo 11, Linkscape, Lighthouse, and K3,3. Its call/full-evaluation counts also
remained 469/453, 336/318, 483/467, and 36/24 respectively.

### Interpretation

**PROVEN**

- Fractional Stage 2 states are common, but steps 1-4 collapse only a small
  fraction of the requested candidate states.
- Integer-lattice arithmetic is not the bottleneck; avoided full Product
  presentation evaluations are too few to create a material runtime gain.
- Quantization changes accepted-move trajectories and selected geometry even
  when crossing, label, and Node-clearance gates continue to pass.
- Step 4 causes a material Linkscape route-quality regression and is rejected.
- The opt-in probe and step-zero default preserve existing Product semantics
  and diagnostic output selection.

**STRONGLY SUPPORTED**

- Quantization alone is not a viable general Stage 2 optimization at the
  tested lattice sizes.
- Coarser lattices are unlikely to solve the dominant cost without increasing
  threshold-boundary and geometry divergence risk.
- The next promising performance family is dependency-aware incremental
  presentation evaluation or a stronger cheap lower-bound screen, because the
  remaining states are genuinely distinct rather than near-duplicate keys.

**UNRESOLVED**

- Whether a lattice used only as a cheap pre-screen, followed by continuous
  full evaluation of a small finalist set, can reduce work without changing
  the final geometry.
- A semantic dependency graph sufficient for incremental route, Relation-label,
  Node-label, occupied-path, and final-feedback recomputation.
- Product performance budgets and broader dense/hub-heavy scaling evidence.
- Node-label connector presentation remains OPEN/SEPARATE. Interactive
  pointer-up obstacle-side flipping remains OPEN/INDEPENDENT.

The step-1 geometry differs from the continuous baseline, so it is exposed only
as an actual Product diagnostic comparison candidate. It is not recommended
for adoption and no visual acceptance is inferred from the machine metrics.

No Product source, stored fixture, historical evidence, or canonical Human
Review result was changed. No governed Fresh lineage, Product adoption, push,
tag, release, deploy, or publication was performed.

## Stage 2 dependency and cheap-screen checkpoint

### Chosen path

After quantization was rejected, this checkpoint chose the conservative cheap
screen direction for a bounded feasibility test. The screen was allowed to
reject a candidate only when either the existing hard Node-body overlap rule
already rejected it, or a mathematically safe lower bound proved that the
candidate could not improve the current constrained-relaxation incumbent.
No heuristic ranking or Product quality threshold was substituted for the
full evaluator.

The lower bound uses the endpoint-center chord minus a conservative 96-unit
bound for the two Node-boundary attachment offsets. It then uses the monotone
lower bounds for route median, route maximum, extent, and long-route penalty;
the non-negative locality and usable-span terms are omitted. A probe mode
evaluates every candidate anyway and checks the lower bound against the full
score before the opt-in screen mode is allowed to skip it.

### Dependency diagnosis

The current Product presentation is not an incident-edge-only computation.
`deriveBoundedAutomaticPresentation` first derives routes without Node labels,
then derives routes with provisional labels, derives Relation labels, derives
Node-owned labels from those Relation labels and routes, and may run a bounded
feedback route pass when final Node-label geometry moves. Within each route
pass, `deriveAutomaticRoutes` processes fixed and ordinary Edges in canonical
order and appends each selected route to `occupiedPaths`.

For one moved Node, the dependency classes are therefore:

| Component | Definitely affected | Potentially affected | Safe to declare unaffected without a dependency proof |
| --- | --- | --- | --- |
| Incident route geometry | moved endpoint and its route candidates | — | non-incident routes only if no obstacle, label, or occupied-path dependency exists |
| Later route geometry | — | any route whose obstacle, label, or occupied-path candidate intersects the changed region; route-order successors can observe a changed occupied path | only after all preceding route dependencies are proven unchanged |
| Relation labels | incident route labels | every label whose route or occupied label neighborhood changes | labels with unchanged route and unchanged placement inputs |
| Node-owned labels | moved Node label | labels sharing Relation-label occupancy, route halos, or placement neighborhoods | labels with unchanged route-label inputs and collision neighborhood |
| Feedback pass | any changed final Node-label bound | every route in the feedback pass because the pass is a global ordered derivation | none from the current API alone |

This means “moved Node -> incident Edges only” is not a valid incremental
contract for the current implementation. A safe incremental evaluator would
need explicit invalidation for route order and occupied paths, route and label
collision neighborhoods, Node-label placement neighborhoods, and the final
feedback pass. It would also need to replay the same canonical order and prove
that every omitted component received identical inputs.

### Probe and preservation results

The cheap-screen probe used the continuous full-node relaxation trajectory and
recorded the accepted move trace. It found no lower-bound violations in any
fully evaluated candidate. The opt-in screen then rejected zero candidates on
all four regression fixtures:

| Fixture | Stage 2 candidates considered | Cheap rejects | Overlap rejects | Lower-bound rejects | Lower-bound violations | Accepted trace preserved | Selected positions/metrics preserved |
| --- | ---: | ---: | ---: | ---: | ---: | --- | --- |
| Apollo 11 | 207 | 0 | 0 | 0 | 0 | yes, 16 moves | yes |
| Lighthouse | 237 | 0 | 0 | 0 | 0 | yes, 14 moves | yes |
| Linkscape | 118 | 0 | 0 | 0 | 0 | yes, 9 moves | yes |
| K3,3 | no Stage 2 | 0 | 0 | 0 | 0 | not applicable | yes |

Consequently, the full and screen-on runs retained the same calls and full
evaluations: Apollo 469/453, Lighthouse 483/467, Linkscape 336/318, and K3,3
36/24. Lighthouse remained approximately a 16-17 second run with Stage 2 at
439 calls; there was no measured performance reduction. The screen is safe in
the tested cases but has no useful selectivity because the incumbent score is
already below the conservative bound only rarely, and every candidate that
could have been rejected remained potentially competitive under that bound.

An earlier uncorrected probe used Node-center chord lengths directly and could
produce a lower bound above the actual score because Product route length is
measured between Node-boundary attachments. That formulation was discarded;
the final 96-unit attachment correction produced zero lower-bound violations
in the probe. This correction is part of the diagnostic rationale, not a
change to Product route semantics.

### Interpretation

**PROVEN**

- The current route/label pipeline has global dependencies through canonical
  route ordering, occupied paths, label occupancy, and bounded feedback.
- A conservative attachment-corrected lower bound can be checked against the
  full score without false lower-bound violations in the four tested fixtures.
- The screen-on mode rejected no candidate and preserved every accepted move,
  selected position, and selected metric object.
- The safe screen therefore produces no current runtime reduction; the Stage 2
  full-evaluation bottleneck remains.

**STRONGLY SUPPORTED**

- A useful incremental evaluator cannot be justified by endpoint incidence
  alone; it needs an explicit dependency graph and canonical replay proof.
- A stronger cheap screen must exploit a tighter quality lower bound or a
  bounded structural certificate. The current conservative lower bound is too
  weak to reduce the evaluated search.
- The next meaningful prototype, if pursued, should be dependency tracing and
  equivalence auditing first, not partial recomputation in Product code.

**UNRESOLVED**

- Whether route-corridor and label-neighborhood lower bounds can become both
  tight and conservative enough to reject candidates.
- Whether a complete dependency trace can support incremental evaluation while
  preserving exact route, label, and feedback outputs.
- How these costs scale for dense, parallel, self-loop, or hub-heavy graphs.
- Node-label connector presentation remains OPEN/SEPARATE. Interactive
  pointer-up obstacle-side flipping remains OPEN/INDEPENDENT.

No Product source behavior, stored fixture, historical evidence, or canonical
Human Review result was changed. No governed Fresh lineage, Product adoption,
push, tag, release, deploy, or publication was performed.

## Dependency tracing and equivalence audit checkpoint

### Scope and method

This checkpoint measured the existing full `deriveBoundedAutomaticPresentation`
pipeline before attempting partial recomputation. The opt-in diagnostic mode is
enabled with `E2R_RELAXATION_DEPENDENCY_TRACE=1` in
`tools/generic-crossing-search.mjs`. It records, without changing route
selection, the exact route/label geometry signatures for each candidate and a
compact trace of the label-free, first, and feedback route passes. Each route
decision includes its canonical processing index, selected offset, continuity
flags, and the observed blocking Node, occupied-path, and Node-label identities.

For every one-Node candidate, the trace compares the current full presentation
with the candidate full presentation. It classifies changed routes into
incident and remote sets, compares Relation-label and Node-label geometries,
records feedback-state changes, and checks whether the canonical route order
changed. This is a dependency observation and equivalence-audit instrument; it
is not an incremental evaluator and it does not alter Product source behavior.

### Dependency model

The actual propagation chain is:

```text
moved Node
  -> incident endpoint geometry and all-node obstacle inputs
  -> canonical route pass / selected route / occupiedPaths sequence
  -> Relation-label placement and label occupancy
  -> Node-label placement and route/label collision neighborhoods
  -> bounded final feedback route pass when final Node-label bounds move
```

The following classifications are supported by the implementation and trace:

| Component | Definitely affected by a one-Node move | Conditionally affected | Unchanged only after proof |
| --- | --- | --- | --- |
| Incident routes | endpoint coordinates and candidate inputs | selected side/offset and continuity recovery | none for the moved endpoint |
| Later routes | none solely from incidence | obstacle, prior occupied path, label, or candidate-side changes | a later route after all earlier inputs and occupied paths are identical |
| Relation labels | labels of changed routes | labels whose route or occupied label neighborhood changes | unchanged route plus identical placement inputs |
| Node labels | moved Node's placement input | labels sharing route/relation occupancy or collision neighborhoods | identical route-label inputs and collision neighborhood |
| Feedback | only when final Node-label geometry moves | every feedback-pass route after that input changes | only when the feedback precondition is false or all inputs are proven identical |

The occupied-path dependency is ordered rather than merely geometric: each
selected route is appended to `occupiedPaths`, and later routes score against
that prefix. The trace's processing indices are therefore the relevant replay
boundary. A changed route decision or route geometry can invalidate a suffix
even when the moved Node is not an endpoint of those suffix Edges.

### Measured propagation

The continuous full-node relaxation trajectory was used for the comparison.
The table counts full candidate evaluations; `remote candidates` means at
least one changed route was not incident to the candidate's moved Node.

| Fixture | Candidates | Remote candidates | Max changed routes | Max remote routes | Max changed Relation labels | Max changed Node labels | Feedback changes | Route-order changes | Route-decision changes | Accepted moves with remote propagation |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Apollo 11 | 207 | 68 | 6 | 2 | 6 | 3 | 0 | 0 | 119 | 4 / 16 |
| Lighthouse | 237 | 139 | 9 | 3 | 12 | 5 | 0 | 0 | 171 | 8 / 14 |
| Linkscape | 118 | 0 | 3 | 0 | 0 | 1 | 0 | 0 | 81 | 0 / 9 |
| K3,3 | no Stage 2 | — | — | — | — | — | — | — | — | — |

K3,3 selected the existing grid fallback but did not enter the Stage 2
relaxation loop, so it supplies no Stage 2 candidate trace. Its existing
fallback result remains preserved; this is a scope limitation, not evidence
that a dense K3,3 dependency graph is local.

The route order remained canonical and unchanged in all evaluated candidates.
That does not make the computation local: route decisions changed frequently,
and remote route changes occurred whenever the changed obstacle/occupied-path
or label neighborhood reached a route in the canonical suffix. In Apollo and
Lighthouse, accepted improvements sometimes included remote route changes, so
the authority trajectory itself is not incident-only.

### Equivalence and performance conclusion

No partial-recomputation prototype was implemented. Consequently, there is no
incremental-vs-full output equivalence claim to make. The current trace compares
the full authority's before/after outputs exactly and shows why a speculative
incident-only replay would not be safe. An incremental prototype would need to
replay the same canonical route prefix, invalidate the affected occupied-path
suffix, re-evaluate relation and Node-label neighborhoods, and rerun feedback
whenever its precondition changes. It would then need exact signature equality
for routes, Relation labels, Node labels, feedback state, selected metrics, and
the accepted move sequence.

The practical architecture finding is mixed rather than universally global:
Linkscape's tested moves were route-local, while Apollo and Lighthouse showed
meaningful remote propagation. Therefore the current implementation may have
sparse dependency regions for some fixtures, but it has no explicit dependency
graph or proof boundary that can be used safely across fixtures. The next
useful performance work is a diagnostic invalidation/replay prototype with a
canonical-prefix proof, not Product adoption of a partial evaluator.

**PROVEN**

- The current pipeline propagates through canonical ordered routing,
  `occupiedPaths`, Relation-label placement, Node-label placement, and bounded
  feedback inputs.
- In the measured Apollo and Lighthouse trajectories, a one-Node candidate can
  change remote route geometry and remote Relation-label geometry.
- Canonical route order did not change in the measured candidates; the changed
  decisions occurred within that stable order.
- Linkscape demonstrated a genuinely local result for the tested trajectory,
  but not a cross-fixture safety guarantee.
- The diagnostic trace is opt-in and leaves Product routing, fixtures,
  historical evidence, and canonical Human Review results unchanged.

**STRONGLY SUPPORTED**

- Incident-edge-only incremental evaluation is unsafe as a general Product
  contract.
- A useful incremental boundary, if pursued, must be dependency-aware and
  preserve canonical prefix/suffix replay plus exact output equivalence.
- The cheap lower-bound screen remains safe but ineffective; dependency tracing
  is the more informative next performance direction.

**UNRESOLVED**

- Whether a complete invalidation graph can be made both conservative and
  materially faster on dense or hub-heavy fixtures.
- Whether feedback can be proven absent for a bounded class of candidates
  without evaluating the final Node-label placement.
- The Stage 2 dependency behavior of K3,3 under a dedicated bounded probe,
  since the current runner does not send its fallback through Stage 2.
- Node-label connector presentation remains OPEN/SEPARATE. Interactive
  pointer-up obstacle-side flipping remains OPEN/INDEPENDENT.

No Product source behavior, stored fixture, Fresh10/Fresh11/Fresh12 historical
evidence, or canonical Human Review result was changed. No new governed Fresh
lineage, Product adoption, push, tag, release, deploy, or publication was
performed. No final presentation candidate changed, so no actual-Product visual
inspection was required for this instrumentation-only checkpoint.
