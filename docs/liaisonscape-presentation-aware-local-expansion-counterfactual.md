# LiaisonScape Presentation-Aware Local Expansion Counterfactual

Date: 2026-08-30

Status: bounded application experiment; non-normative

## Exact result

`PARTIAL — LOCAL EXPANSION REDUCES LABEL CONFLICTS BUT NOT ROUTING CONGESTION`

Root-cause classification: **CASE 2 — HARD PRESENTATION CONFLICTS ARE LOCALLY
CONCENTRATED, BUT LOCAL EXPANSION HELPS LABEL PRESSURE MORE THAN EDGE
CROSSINGS**.

A single conflict-driven `clara` fan-out reduced the English Lighthouse raw
hard-conflict vector from `[0, 0, 7, 4, 0]` to `[0, 0, 7, 2, 0]` at the first
stable diagnostic basin. It did not reduce any ordinary crossing, and one
Relation-label/Node conflict migrated to a new owner. Larger expansions
increased ordinary crossings to eight and eventually more than doubled route
length. The Japanese sample had a different initial conflict set, but selected
the same center and movement geometry and changed `[0, 0, 4, 1, 0]` to
`[0, 0, 4, 0, 0]`.

This is evidence for a bounded label-pressure response, not for a Production
local-expansion implementation. No Production displacement, applicability
guard, or multi-region behavior was established.

## Starting and ownership boundary

LiaisonScape started on `main` at `fd56334 feat: improve coordinate-less
initial placement`, five commits ahead of `origin/main`. Its only dirty paths
were the existing unaccepted three-iteration Coordinate candidates:

- `public/lighthouse-restoration-demo.en.e2r.json`
- `public/lighthouse-restoration-demo.ja.e2r.json`

They were read for Dataset text and topology but were not accepted, committed,
discarded, overwritten, or used as target coordinates. The A geometry was
freshly reproduced by `settleInitialPlacement`; it was bit-identical to the
candidate values. The experiment did not write any local-expansion coordinate
to either sample.

`e2r-spec` started at `6dabd30 docs: evaluate branch preserving seed topology
guard`, 33 commits ahead of `origin/main`. The protected dirty
`sessions/E2R-Session-0052.md` and the protected workspace browser-diagnostic
playbook remained outside all edits and staging.

Automatic positions, routes, and labels remained Derived application data.
No Dataset, schema, Extension, Core, solver, route, label, iteration, or
ownership semantics changed. The redundant `seededPositions` cleanup also
remained separate.

## Why the single-root guard line is paused

The preceding topology-guard experiment showed that true branching plus a
unique maximum root protects cycle, chain, dense, and equal-two-hub controls,
but still accepts unsafe unequal-two-hub and cross-linked cases. Distinguishing
those cases from legitimate nested branching appeared to require an
unjustified ratio, balance threshold, presentation geometry, or semantics.

This checkpoint therefore tested a different causal boundary: observe actual
post-route/post-label conflicts and make one bounded local correction without
selecting a global semantic-looking root. The deferred
`UNEQUAL-MULTI-HUB-REJECTION-IDENTIFIABILITY` research was not erased or
continued.

The user's manual spacing observation was used only as a qualitative
comparator: useful space near congestion may improve readability without
forcing the whole graph into a hierarchy. Manual coordinates were not read as
algorithm input, target geometry, or an optimization objective.

## Exact Production presentation pipeline

The temporary pure harness called the current exported Production helpers and
reconstructed the no-manual Lighthouse path from `App.tsx`:

1. Obtain current Node positions from the accepted three-iteration settling
   helper.
2. Compute provisional Node labels with `placeNodeLabel`, no occupied labels or
   paths, and all other Nodes as obstacles.
3. Sort fixed routes first and automatic ordinary routes second. Within each
   class use canonical `sourceId`, `targetId`, then Relation ID order.
4. For every route call `routeGraphEdge` with unrelated Node obstacles, already
   occupied route samples, parallel index/count, self-loop status, overlap
   index, provisional Node-label rectangles, and canonical physical-side sign.
   No manual curve or self-loop override was supplied.
5. Return routes to Dataset Relation order. Place non-empty Relation labels in
   that order with `placeEdgeLabel`, already occupied Relation-label
   rectangles, all Nodes, every foreign route, and the previous baseline label
   placement during the corrective pass.
6. Place Node labels in Entity order with the Relation labels already occupied,
   all other Nodes, all fresh route samples, and the previous baseline Node
   label during the corrective pass.
7. Treat the current target Relation-label rectangles as displayed geometry;
   the live visual-state reconciliation follows its target immediately.

The local movement occurred only after the first complete presentation. Every
candidate then reran steps 2–7 from the moved positions. No previous route,
label rectangle, or conflict location was reused as current geometry.

`STALE GEOMETRY AVOIDED: YES`.

## Hard-conflict geometry

Only actual Production route samples and actual Production label rectangles
were used. Straight chords, predicted labels, fuzzy pressure scores, and
weighted conflict sums were excluded.

- **H0 — Node body/Node body:** strict intersection of the rendered 64-by-64,
  12-radius rounded rectangles.
- **H1 — ordinary route/unrelated Node body:** intersection between the routed
  sample polyline and an unrelated rendered rounded rectangle.
- **H2 — true ordinary route crossing:** proper interior polyline-segment
  intersection between ordinary Relations without a shared endpoint.
- **H3 — Relation label/Node body:** strict intersection of the actual
  axis-aligned Relation-label rectangle and rendered Node body.
- **H4 — Relation label/Relation label:** strict rectangle intersection.
- **H5 — self-loop/unrelated ordinary route:** proper sample-polyline
  intersection; diagnostic only.
- **H6 — self-loop/label:** zero sampled path-to-label-rectangle distance for a
  Relation or Node label; diagnostic only.

H5 and H6 were used, but neither selected a center or entered the primary
`[H0,H1,H2,H3,H4]` vector.

## Lighthouse A conflict inventory

English A had H0 `0`, H1 `0`, H2 `7`, H3 `4`, H4 `0`, H5 `1`, and H6 `3`.
Coordinates below are graph-space intersection or label-center coordinates.

| Kind | Canonical identity | Location |
|---|---|---:|
| H2 | `beacon-lighthouse-installed-in \| clara-maya` | `(217.448, 214.343)` |
| H2 | `beacon-lighthouse-installed-in \| daniel-clara` | `(235.271, 198.055)` |
| H2 | `beacon-lighthouse-installed-in \| thomas-maya-friends` | `(189.909, 259.178)` |
| H2 | `clara-thomas-mentors \| sofia-archive` | `(69.728, 113.658)` |
| H2 | `clara-thomas-supervises \| sofia-archive` | `(61.521, 120.070)` |
| H2 | `elias-clara \| thomas-maya-friends` | `(107.857, 219.876)` |
| H2 | `sofia-archive \| thomas-maya-friends` | `(60.452, 120.873)` |
| H3 | `beacon-lighthouse-installed-in > maya` | `(245.458, 243.012)` |
| H3 | `clara-lighthouse > clara` | `(216.970, 124.954)` |
| H3 | `clara-lighthouse > lighthouse` | `(216.970, 124.954)` |
| H3 | `thomas-maya-friends > sofia` | `(27.499, 158.781)` |
| H5 | `beacon-self-calibrate \| thomas-maya-friends` | `(192.575, 259.695)` |
| H6 | `beacon-self-calibrate \| beacon-self-calibrate label` | `(142.604, 273.768)` |
| H6 | `beacon-self-monitor \| beacon-self-monitor label` | `(210.460, 392.788)` |
| H6 | `beacon-self-monitor \| maya-beacon label` | `(246.552, 321.812)` |

The seven H2 objects are multi-Relation conflicts. H3 objects whose Node is an
endpoint are endpoint-owned; `beacon-lighthouse-installed-in > maya` and
`thomas-maya-friends > sofia` are foreign-Node objects. All primary objects
formed one conflict-connected region. `clara` participated in seven distinct
objects, more than any other Node. Thus conflicts were presentation-locally
connected and `clara`-dominant, but not confined to geometry immediately
adjacent to `clara`.

## Local center, movement, and displacement

The primary center rule was exactly “Node involved in the largest number of
distinct hard-conflict objects,” with canonical ID tie-breaking. There was no
global topology root. For a selected center `h`, parallel Relations were
collapsed to one unique neighbor; `h` stayed fixed; and each unique 1-hop
neighbor moved along its current `h -> neighbor` unit vector. Label text and
locale never chose a direction.

For Lighthouse the center was `clara`; its unique neighbors were `daniel`,
`elias`, `lighthouse`, `maya`, and `thomas`. Five of ten Nodes moved, so the
moved fraction was `0.5`; every moved Node was exactly one graph hop from the
center. The median current 1-hop distance was `163.907531`.

No exact minimum displacement can jointly resolve route crossings and label
rectangles under rerouting. A live P2 geometric scale was available, so each
diagnostic displacement was:

```text
neighbor' = neighbor + unit(center -> neighbor)
            * median(current unique 1-hop distances) * diagnostic multiplier
```

The normalized diagnostic sweep was `0.025, 0.05, 0.075, 0.10, 0.125, 0.25,
0.50, 0.75, 1.00`. It corresponds to Lighthouse displacements from about
`4.098` through `163.908` units. This is an arbitrary diagnostic sweep around a
non-arbitrary local geometric unit, not a Production rule.

- Non-arbitrary geometric scale available: **yes, P2 local distance median**.
- Exact non-arbitrary resolving displacement available: **no**.
- Arbitrary diagnostic sweep used: **yes**.
- Production displacement selected: **no**.

L1 was the single `clara` region. L2 was not run because A had only one
conflict-connected region; there were no disjoint regions to process. This
checkpoint therefore does not establish multi-center scheduling, neighborhood
merge behavior, or independent two-hub correction.

## Lighthouse A/L1 measurements

The smallest representative point in the best observed EN raw-vector basin
was diagnostic multiplier `0.05`, an `8.195`-unit movement. The entire
`0.05–0.10` band retained `[0,0,7,2,0]`; `0.025` produced `[0,0,7,3,0]` and
`0.125` produced `[0,0,8,1,0]`. The representative was selected only to report
the basin boundary, not as a Production constant.

| Metric | A | L1 diagnostic 0.05 |
|---|---:|---:|
| Area | 158,825.782 | 161,485.557 |
| Aspect ratio width/height | 1.507 | 1.533 |
| Minimum Node distance | 100.414 | 101.529 |
| Connected distance min / median / mean / max | 100.414 / 163.908 / 179.467 / 309.180 | 101.529 / 172.103 / 185.705 / 317.375 |
| H1 route/Node | 0 | 0 |
| H2 true crossings | 7 | 7 |
| H3 Relation-label/Node | 4 | 2 |
| H4 Relation-label/Relation-label | 0 | 0 |
| Ordinary route total | 1,459.126 | 1,526.034 (`1.046x`) |
| Straight / curved ordinary routes | 6 / 6 | 6 / 6 |
| Foreign-Node clearance | 18.597 | 25.703 |
| Owner-edge min / median | 0 / 0 | 0 / 0 |
| Foreign-edge min / median | 0 / 5.045 | 0 / 8.954 |
| Foreign Edge nearer than owner | 3 | 2 |
| H5 / H6 diagnostics | 1 / 3 | 1 / 3 |

The area increase was `1.7%`; the ordinary route increase was `4.6%`. This is
far below historical C's global spread, but it purchased label relief only.
It did not make more ordinary routes straight and did not reduce crossing
congestion.

### Conflict trace

Resolved at representative L1:

- `H3:beacon-lighthouse-installed-in>maya`
- `H3:clara-lighthouse>lighthouse`
- `H3:thomas-maya-friends>sofia`

Persisted:

- all seven original H2 crossing identities;
- `H3:clara-lighthouse>clara`.

Newly created:

- `H3:beacon-lighthouse-installed-in>clara`.

Conflict migration was therefore observed: **yes**. Three H3 identities were
resolved, but one new H3 appeared elsewhere. At `0.125`, one old H2 and three
H3 objects resolved while two new H2 objects appeared; that is not a crossing
improvement.

## Historical C reference and manual observation

Historical branch-preserving C changed Lighthouse to area `293,324.321`,
minimum Node distance `141.431`, connected median/max `164.470 / 270.627`, H2
`0`, H3/H4 `0/0`, ordinary route total `1,715.599`, and foreign clearance
`37.150`.

L1 does not achieve comparable conflict benefit: it retains all seven H2
crossings. It does have lower false-hierarchy risk than C because it creates no
global root, moves only five one-hop Nodes, and changes area by 1.7% instead of
84.7%. The movement is qualitatively consistent with the manual observation
that useful local space can help, but it does not reproduce the manual
arrangement or solve its routing concern.

Edge total length remains a useful secondary compactness/regression metric,
not the primary layout objective. Here its moderate increase accompanies real
label relief; at larger sweep values, however, route growth without crossing
relief becomes negative evidence.

## Controls

All controls used current three-iteration positions, the same complete
presentation pipeline, actual hard geometry, and the same diagnostic sweep.
Canonical synthetic IDs were neutral labels.

### Cycle

The ten-Node cycle reproduced the preceding A metrics: area `162,108.720`,
minimum Node distance `120.589`, route total `928.853`, foreign clearance
`28.086`, and zero H0–H6. It had no conflict region and moved no Node. The
single-root C route `2,270` and clearance `-2.541` regressions were avoided.
False hierarchy: no. Regression: **no**.

### Unequal two-hub

The unequal two-hub control had area `197,539.354`, minimum Node distance
`120.764`, route total `1,244.330`, foreign clearance `27.030`, and zero hard
conflicts. It selected no center and moved no Node, preserving the safe A
geometry and avoiding historical C's `120.812 -> 75.802` minimum-distance and
`1 -> 3` broader label-Node regressions. Regression: **no**.

Because neither hub had a hard trigger under the strict H0–H4 definitions,
this control does **not** answer whether two simultaneously pressured hubs can
be corrected as independent regions. That claim remains unestablished rather
than inferred from the safe no-op.

### Cross-linked branches

A reproduced area `102,743.790`, route total `1,069.192`, one H2 crossing, and
foreign clearance `28.177`. Center `a1` moved only `a` and `b1`. At `0.025`,
the crossing persisted, area became `103,457.215`, and route total `1,086.376`.
At the Lighthouse representative `0.05`, the crossing still persisted and a
new H3 appeared; area was `104,170.640` and route total `1,103.660`.

This avoids C's area `429,673` and roughly 30% route growth, and does not
tree-ify the whole graph, but the representative creates a presentation
regression without routing benefit. Regression at `0.05`: **yes, bounded H3**.

### Dense mesh

The ten-Node complete graph reproduced area `97,511.040`, H2 `129`, route total
`6,052.582`, minimum Node distance `78.098`, and foreign clearance `-4.537`.
Its stricter hard vector was `[0,4,129,32,19]`. At `0.05` the vector became
`[0,3,128,25,14]`, area `104,956.360`, route total `6,349.070`, and foreign
clearance `-1.286`. This was not an explosion and is materially better than
historical C's H2 `151` and broader label regressions.

However, every other Node is one hop from the selected `d6`; nine of ten Nodes
moved. Thus a topology-local rule degenerates into a global expansion on a
complete graph. Explosion: **no**. Genuine spatial locality: **no**.

### Chain and star

The ten-Node chain reproduced area `162,618.706`, route total `908.456`, and
zero hard conflicts. The seven-Node star reproduced area `91,421.235`, route
total `598.786`, and zero hard conflicts. Both selected no center and moved no
Node. They acquired no radial or single-root hierarchy beyond their existing
topology.

### Branching tree

The 13-Node branching control had one H3 conflict, area `280,106.513`, route
total `1,516.511`, and minimum Node distance `86.890`. Center `c` moved four of
13 Nodes. Multipliers `0.025` and `0.05` did not clear H3; `0.075` cleared it
with area `295,725.029`, route total `1,586.771`, and minimum Node distance
`102.556`. Larger values were non-monotonic and could create H0.

The direction can help a branching label conflict, but its first useful basin
does not match Lighthouse. This reinforces the missing displacement rule.

## Locale and order

Japanese A had H0 `0`, H1 `0`, H2 `4`, H3 `1`, H4 `0`, H5 `1`, H6 `3`.
Its H2 identities were:

- `beacon-lighthouse-installed-in | clara-maya`
- `beacon-lighthouse-installed-in | daniel-clara`
- `beacon-lighthouse-installed-in | thomas-maya-friends`
- `elias-clara | thomas-maya-friends`

Its only H3 was `clara-thomas-supervises > clara`. The region and center were
the same as English. At `0.05`, all four H2 objects persisted, H3 became zero,
and no new H0–H4 object appeared. Area and Node geometry were exactly the same
as EN; ordinary route total changed from `1,513.914` to `1,596.315` because
label footprints affect routing.

- Same EN/JA conflict set: **no**.
- Same selected region/center: **yes**.
- Same final Node geometry at the representative diagnostic: **yes**.
- Presentation-aware local expansion locale-dependent: **yes at signal and
  route/label result level; no at selected Lighthouse movement geometry**.
- Semantic dependence: **no; only rendered footprints were consumed**.

Repeated identical runs produced the same conflict identities, centers,
movement, routes, and labels. Reversing Entity and Relation arrays retained
exact Node positions, all seven H2 identities, center `clara`, and the same
movement geometry, but changed the label hard vector from H3/H4 `4/0` to
`3/1`. Thus movement selection happened to remain invariant here, while the
full presentation conflict set is not order-invariant under the current
accepted Relation-label ordering. No Production order semantics were changed.

## Performance

Median local timings are milliseconds. Sparse 25/50 controls had 24/49
Relations; dense had 25 Nodes and 300 Relations.

| Graph | Settle | First presentation | Detection | Movement | Fresh presentation | Added post-pass | Total/current multiplier |
|---|---:|---:|---:|---:|---:|---:|---:|
| Lighthouse 10/14 | 0.116 | 41.028 | 1.734 | 0.027 | 41.873 | 43.634 | 2.061x |
| Sparse 25/24 | 0.299 | 130.973 | 9.087 | 0.024 | 134.690 | 143.802 | 2.095x |
| Sparse 50/49 | 0.435 | 566.974 | 46.058 | 0.037 | 557.758 | 603.852 | 2.064x |
| Dense 25/300 | 0.553 | 11,169.518 | 338.191 | 0.066 | 10,146.306 | 10,484.564 | 1.939x |

Movement itself is negligible; the required second Production presentation
dominates. One local post-pass roughly doubles the current initial
settle-plus-presentation cost. Dense timing had only two expensive rounds and
should be treated as order-of-magnitude evidence, not a stable benchmark.
Cost alone does not establish CASE 8, but a doubled pass is not justified for
the observed label-only benefit.

## Self-loop residual

Representative EN L1 retained H5 `1` and H6 `3`. The optional identities did
not improve at the useful label basin. Nevertheless the primary residual was
seven ordinary H2 crossings plus two H3 objects, so self-loop conflicts were
not the dominant remainder. Under the requested gate,
`SELF-LOOP ORIENTATION IS A SEPARATE LOCAL CLEANUP CANDIDATE` is **not promoted
by this checkpoint**. No self-loop orientation or radius changed.

## Decision and next boundary

- Local hard-conflict expansion materially helps Lighthouse: **yes for label
  pressure; no for routing congestion**.
- Cycle protected: **yes**.
- Unequal two-hub protected: **yes by no-op; independent dual-region handling
  remains untested**.
- Dense protected from explosion: **yes**, but 1-hop locality degenerates.
- Movement genuinely local: **yes for Lighthouse and cross-linked; no as a
  general dense-graph property**.
- Global hierarchy avoided: **yes for Lighthouse**.
- Edge total length should remain secondary: **yes**.
- One bounded post-pass is mechanically viable: **yes**.
- One bounded post-pass is Production-justified now: **no**.
- Non-arbitrary Production displacement rule exists: **no**.
- Next Production implementation experiment justified: **no**.

The exact next bounded checkpoint, if pursued, is
`E2R-LIAISONSCAPE-LOCAL-EXPANSION-ROUTING-SIGNAL-DECOMPOSITION1`. It should
separate why radial 1-hop movement reduces actual label pressure but leaves or
migrates route crossings, and must include a genuinely multi-region pressure
fixture. It must not select a displacement constant, add a recursive cleanup
loop, or implement Production local expansion.

Single-root guard research remains deferred, not deleted. Sample replacement,
self-loop orientation, `seededPositions` cleanup, and any Production
implementation remain separate checkpoints.

## End state

- Production Runtime changed: no
- Solver, routing, label, iteration, and schema changed: no
- Runtime commit: none
- Sample formally changed: no
- Existing sample candidate remains uncommitted: yes
- Temporary seam/helper/test/JSON/image remaining: none
- `seededPositions` touched: no
- Push, tag, release, deploy, npm publication: none
