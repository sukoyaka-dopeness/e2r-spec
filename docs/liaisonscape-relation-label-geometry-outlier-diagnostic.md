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
