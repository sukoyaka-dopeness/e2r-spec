# LiaisonScape External-Seed Injection and Multi-Hop Counterfactual

## E2R-LIAISONSCAPE-EXTERNAL-SEED-INJECTION-AND-MULTI-HOP-COUNTERFACTUAL1

Date: 2026-08-30

### Exact result

`PARTIAL - MULTI-HOP SEED HELPS LIGHTHOUSE BUT REGRESSES CYCLIC / MULTI-HUB GRAPHS`

A temporary external-seed seam established a causal comparison using the live
LiaisonScape solver. The round-trip control was bit-identical. Pure BFS hop
rings improved Lighthouse spacing and label clearance but mixed branches,
nearly doubled settled area, and lengthened routes. A parent-sector candidate
removed all measured Lighthouse ordinary crossings and label intersections,
but single-root radial geometry remained unsafe for cycle, multi-hub, chain,
dense, and some disconnected controls. No production implementation is
justified by this checkpoint.

### Starting boundary

LiaisonScape started at `fd56334 feat: improve coordinate-less initial
placement`. Its only dirty paths were the pre-existing, uncommitted
three-iteration Lighthouse sample candidates:

- `public/lighthouse-restoration-demo.en.e2r.json`
- `public/lighthouse-restoration-demo.ja.e2r.json`

The experiment did not accept, commit, discard, overwrite, or hand-tune those
files. It read the English sample for topology and text, ignored its stored
coordinates when constructing candidates, and did not write either sample.

`e2r-spec` started at `3a8eb61 docs: evaluate multi-hop initial topology
seed`. The protected dirty session record was preserved and excluded from this
checkpoint.

### Exact live settler boundary

The fully Coordinate-less open path is:

```text
App.openDataset
  -> buildEntityGraph
  -> settleInitialPlacement
  -> solveAutoLayout(input, { iterations: 3 })
  -> fitGraphView
  -> setPositions
```

`solveAutoLayout` canonicalizes Entity IDs, builds undirected adjacency from
unique non-self endpoint pairs, finds connected components, ranks each
component by distinct-neighbor degree and lexical ID, creates a degree-ranked
ring seed, and then settles it. The three-iteration wrapper does not call a
separate seed API.

For every iteration, component Entity IDs are visited in lexical order. Each
Entity accumulates Node repulsion for distances below `96` and connected
attraction `(neighbor - point) * 0.018`; each axis is clamped to `[-18, 18]`.
The local point map is updated in place during that lexical pass, so later
Entities observe earlier updates from the same iteration. The input Dataset,
input records, and injected seed are not mutated. There is no random jitter.
Disconnected-component packing occurs after each component. View fitting is a
caller operation after the solver returns; it does not normalize solver
coordinates.

`App.tsx` still computes `seededPositions` with `placeInitialEntities`, but a
fully Coordinate-less Dataset selects `settleInitialPlacement` instead. That
cleanup candidate remains separate because it still serves stored/mixed
placement and was not part of this experiment.

### Temporary seam and round-trip control

Only two runtime paths were temporarily modified or created:

- `src/auto-layout.ts`: an optional, complete finite `initialPositions` map
  replaced internal seed construction while preserving all later solver code;
- `tests/.tmp-external-seed-counterfactual.test.ts`: seed construction,
  measurements, synthetic controls, timings, and a temporary visual render.

The normal production call did not provide the option, so its behavior stayed
unchanged during the experiment. Missing or non-finite experimental positions
failed closed. All temporary source, test, JSON, SVG, and PNG files were
removed afterward.

Control R0 captured the exact internal Lighthouse seed with `iterations: 0`,
ran the normal three-iteration path, then re-injected the captured seed and ran
the same three iterations through the temporary seam.

```text
EXTERNAL-SEED ROUND-TRIP EQUIVALENT: YES
exact coordinate equality: YES
maximum coordinate delta: 0
per-Entity coordinate delta: 0 for all 10 Entities
ordering and bounding box equality: YES
```

The counterfactual therefore used the production force loop rather than a
look-alike solver.

### Previous result reconciliation

Reconciliation is `RECON R1: PREVIOUS MULTI-HOP NOT-SUPPORTED RESULT WAS NOT
CAUSALLY TESTED`.

The preceding multi-hop document correctly described the live source and
declined a production change, but it did not inject its proposed seed into the
settler. Its `NOT SUPPORTED` result did not close the causal multi-hop
hypothesis. This document preserves that historical record and adds the missing
experiment. The earlier production caution remains directionally valid, while
its claim about material Lighthouse benefit is superseded by this causal
result.

### Candidates

- **A, current:** current internal degree-ranked seed, then the production
  three-iteration settler.
- **B, BFS rings:** the same maximum-degree/lexical center, BFS graph-distance
  rings, and lexical same-hop order. Each hop uses equal full-circle angles.
  `radius(hop) = 172.8 * hop`, where `172.8 = 96 * 1.8` is the existing seed
  radius. No force, route, label, or locale input affects the seed.
- **C, parent sectors:** created only after B showed clear branch mixing. Hop 1
  remains B. At later hops, an Entity chooses a shortest-path previous-hop
  parent by previous-hop angular order and then lexical ID, inherits that
  parent's hop-1 sector, and is placed in stable parent-angle/lexical order
  inside the sector. Radius and settling remain identical to B.
- **D, prior HUB-EQUAL:** not reconstructed. The earlier document did not
  materialize an exact external seed, and A already supplies its evidenced
  central-hub property. Inventing missing D geometry would not be an exact
  reconstruction.

The live Lighthouse hop groups were:

| Hop | Entities |
|---:|---|
| 0 | `clara` |
| 1 | `daniel`, `elias`, `lighthouse`, `maya`, `thomas` |
| 2 | `authority`, `beacon`, `sofia` |
| 3 | `archive` |

C selected `lighthouse` as parent for `authority` and `beacon`, `elias` as
parent for `sofia`, and `sofia` as parent for `archive`. `beacon` has two
shortest-path parents; angular order selected `lighthouse` before `maya`.
These parent choices are temporary geometry, not Dataset semantics.

### PRE seed coordinates

All candidates use `clara` at `(160, 160)`. Values are rounded to three
decimals for this table; the experiment retained full JavaScript precision.
The current A rank/slot order is `clara`, `lighthouse`, `maya`, `beacon`,
`elias`, `sofia`, `thomas`, `archive`, `authority`, `daniel`. The first eight
non-center slots use ring 1 at 45-degree increments beginning at angle 0;
`daniel` uses ring 2, slot 0. Ring radius is `96 * 1.8 * ring`.

| Entity | Hop | A current x/y | B BFS x/y | C parent-sector x/y |
|---|---:|---:|---:|---:|
| archive | 3 | 160.000 / -12.800 | 678.400 / 160.000 | 320.194 / 653.028 |
| authority | 2 | 282.188 / 37.812 | 505.600 / 160.000 | -71.252 / 416.831 |
| beacon | 2 | 160.000 / 332.800 | -12.800 / 459.298 | -155.721 / 300.568 |
| clara | 0 | 160.000 / 160.000 | 160.000 / 160.000 | 160.000 / 160.000 |
| daniel | 1 | 505.600 / 160.000 | 332.800 / 160.000 | 332.800 / 160.000 |
| elias | 1 | 37.812 / 282.188 | 213.398 / 324.343 | 213.398 / 324.343 |
| lighthouse | 1 | 332.800 / 160.000 | 20.202 / 261.569 | 20.202 / 261.569 |
| maya | 1 | 282.188 / 282.188 | 20.202 / 58.431 | 20.202 / 58.431 |
| sofia | 2 | -12.800 / 160.000 | -12.800 / -139.298 | 266.796 / 488.685 |
| thomas | 1 | 37.812 / 37.812 | 213.398 / -4.343 | 213.398 / -4.343 |

### Lighthouse PRE and POST geometry

`overlap` uses a 64-unit Node diameter. `clearance violation` uses the live
96-unit repulsion boundary. NN is nearest-neighbor distance. Connected values
use unique non-self endpoint pairs. Hop correlation is Pearson correlation
between finite graph-hop and Euclidean pair distances.

| Candidate/state | Width x height | Area | Overlap / clearance violation | Minimum Node | NN mean | Connected median / max | Same X / Y | Hop correlation |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| A PRE | 518.400 x 345.600 | 179,159 | 0 / 0 | 132.255 | 140.364 | 172.800 / 345.600 | 5 / 8 | 0.177 |
| A POST-3 | 489.296 x 324.600 | 158,826 | 0 / 0 | 100.414 | 120.299 | 163.908 / 309.180 | 0 / 0 | 0.237 |
| B PRE | 691.200 x 598.597 | 413,750 | 0 / 0 | 172.800 | 178.333 | 200.464 / 753.218 | 3 / 6 | 0.386 |
| B POST-3 | 651.127 x 529.765 | 344,945 | 0 / 0 | 138.095 | 156.721 | 177.928 / 657.205 | 0 / 0 | 0.416 |
| C PRE | 488.521 x 657.370 | 321,139 | 0 / 0 | 143.709 | 166.982 | 172.800 / 299.298 | 2 / 1 | 0.816 |
| C POST-3 | 460.981 x 636.305 | 293,324 | 0 / 0 | 141.431 | 157.407 | 164.470 / 270.627 | 0 / 0 | 0.835 |

B's PRE spacing benefit survived three iterations, but its area remained 117%
larger than A POST and its maximum connected distance remained 113% larger.
This was not solver erasure; it was a poor same-hop branch assignment. C
reduced B's POST maximum connected distance by 59%, eliminated the measured
crossings, and retained substantially better Node clearance, but it remained
85% larger in area and visually more hierarchical than A.

### POST coordinates and settling displacement

Each cell is `POST x / y (total displacement from PRE)`.

| Entity | A POST-3 | B POST-3 | C POST-3 |
|---|---:|---:|---:|
| archive | 151.047 / -3.686 (12.776) | 642.597 / 144.834 (38.883) | 317.361 / 644.308 (9.168) |
| authority | 284.513 / 44.340 (6.930) | 480.410 / 165.370 (25.756) | -66.512 / 408.675 (9.433) |
| beacon | 174.562 / 320.915 (18.797) | -8.531 / 428.510 (31.083) | -137.353 / 286.264 (23.281) |
| clara | 178.843 / 165.891 (19.743) | 160.177 / 160.019 (0.178) | 159.656 / 160.549 (0.648) |
| daniel | 487.971 / 160.218 (17.630) | 323.640 / 160.000 (9.160) | 323.627 / 160.013 (9.173) |
| elias | 42.440 / 269.626 (13.387) | 199.690 / 292.341 (34.814) | 213.389 / 324.352 (0.013) |
| lighthouse | 313.827 / 162.613 (19.152) | 49.744 / 260.395 (29.565) | 14.481 / 265.530 (6.958) |
| maya | 258.741 / 266.170 (28.396) | 35.462 / 80.052 (26.464) | 28.642 / 72.524 (16.427) |
| sofia | -1.325 / 157.240 (11.802) | 33.205 / -101.255 (59.697) | 266.696 / 488.377 (0.324) |
| thomas | 56.744 / 56.542 (26.631) | 201.107 / 8.263 (17.606) | 200.848 / 8.003 (17.604) |

The B outliers are branch evidence: `archive` was put east while its parent
`sofia` was northwest, producing the 753-unit PRE connected maximum. C kept
that chain in one sector and required less movement for `archive`, `sofia`,
and their upstream branch.

### Iteration trace

| Candidate / iteration | Area | Minimum Node | NN mean | Connected mean / max | Hop correlation |
|---|---:|---:|---:|---:|---:|
| A / 0 | 179,159 | 132.255 | 140.364 | 206.174 / 345.600 | 0.177 |
| A / 1 | 172,049 | 120.276 | 132.962 | 196.513 / 332.383 | 0.198 |
| A / 2 | 165,278 | 109.701 | 126.292 | 187.637 / 320.285 | 0.218 |
| A / 3 | 158,826 | 100.414 | 120.299 | 179.467 / 309.180 | 0.237 |
| B / 0 | 413,750 | 172.800 | 178.333 | 312.257 / 753.218 | 0.386 |
| B / 1 | 389,189 | 160.500 | 170.546 | 297.953 / 719.482 | 0.397 |
| B / 2 | 366,293 | 148.946 | 163.357 | 284.536 / 687.510 | 0.406 |
| B / 3 | 344,945 | 138.095 | 156.721 | 271.945 / 657.205 | 0.416 |
| C / 0 | 321,139 | 143.709 | 166.982 | 188.402 / 299.298 | 0.816 |
| C / 1 | 311,513 | 142.878 | 164.074 | 184.197 / 289.210 | 0.823 |
| C / 2 | 302,247 | 142.123 | 160.647 | 180.190 / 279.667 | 0.829 |
| C / 3 | 293,324 | 141.431 | 157.407 | 176.366 / 270.627 | 0.835 |

C-only diagnostics at 6 and 12 iterations retained zero ordinary crossings
and raised hop correlation to `0.850` and `0.871`. Area compressed to `268,450`
and `232,455`, while minimum Node distance fell to `131.588` and `100.147`.
Label intersections reappeared at both depths. The seed effect is not erased,
but more attraction is not a label-quality solution and production remains at
three iterations.

### Production routing ground truth

The temporary harness reproduced the live `App.tsx` route ordering and called
`routeGraphEdge` with production obstacles, occupied paths, provisional Node
labels, parallel indices, self-loop handling, and canonical physical side.
Clearances are geometric diagnostics over the returned production samples.

| Candidate/state | Ordinary crossings | Minimum unrelated route clearance | Aggregate / average route length | Non-straight ordinary | Minimum foreign-Node clearance | Minimum shared fan-out angle |
|---|---:|---:|---:|---:|---:|---:|
| A PRE | 8 | 0.009 | 1,787.403 / 148.950 | 9 | 24.883 | 2.415° |
| A POST-3 | 7 | 0.065 | 1,459.126 / 121.594 | 6 | 18.597 | 0.616° |
| B PRE | 6 | 0.611 | 3,284.117 / 273.676 | 11 | 20.272 | 5.188° |
| B POST-3 | 6 | 0.011 | 2,687.436 / 223.953 | 11 | 10.939 | 0.752° |
| C PRE | 0 | 90.732 | 1,974.176 / 164.515 | 11 | 29.477 | 5.188° |
| C POST-3 | 0 | 93.371 | 1,715.599 / 142.967 | 10 | 37.150 | 3.652° |

A POST crossing pairs were:

- `clara-thomas-supervises` <> `sofia-archive`
- `clara-thomas-mentors` <> `sofia-archive`
- `clara-maya` <> `beacon-lighthouse-installed-in`
- `elias-clara` <> `thomas-maya-friends`
- `daniel-clara` <> `beacon-lighthouse-installed-in`
- `sofia-archive` <> `thomas-maya-friends`
- `thomas-maya-friends` <> `beacon-lighthouse-installed-in`

B POST crossing pairs were:

- `clara-thomas-supervises` <> `sofia-elias`
- `clara-thomas-mentors` <> `sofia-elias`
- `elias-clara` <> `authority-lighthouse`
- `sofia-elias` <> `daniel-clara`
- `sofia-elias` <> `authority-lighthouse`
- `sofia-elias` <> `thomas-maya-friends`

C had no ordinary crossing pair in PRE or POST. All candidates retained the
same two directed parallel Relations and two self-loops. C materially improved
foreign-Node clearance and shared-endpoint separation, but its route total was
18% above A POST because the graph was much taller.

### Production label ground truth

The English Lighthouse labels were evaluated after production routing with
`placeEdgeLabel` and `placeNodeLabel`, including occupied labels, Nodes, and
foreign Edge paths. The seed received no label feedback.

| Candidate/state | Label-label | Label-Node | Owner Edge mean | Nearest foreign Edge mean | Foreign Edge nearer | Median normal / along displacement | Central label centers |
|---|---:|---:|---:|---:|---:|---:|---:|
| A PRE | 2 | 2 | 2.108 | 17.722 | 2 | 16.174 / 17.739 | 7 |
| A POST-3 | 1 | 5 | 3.954 | 20.910 | 3 | 24.000 / 20.015 | 3 |
| B PRE | 1 | 0 | 3.270 | 26.459 | 2 | 19.372 / 17.705 | 2 |
| B POST-3 | 1 | 0 | 5.701 | 25.707 | 5 | 26.091 / 7.675 | 4 |
| C PRE | 0 | 0 | 5.831 | 31.966 | 3 | 19.846 / 18.609 | 2 |
| C POST-3 | 0 | 0 | 5.790 | 29.482 | 3 | 21.163 / 6.332 | 3 |

A POST's label-label pair was `beacon-self-monitor` <> Node label `beacon`.
Its five label-Node pairs were:

- `clara-lighthouse` <> Node `clara`
- `thomas-maya-friends` <> Node `sofia`
- `beacon-lighthouse-installed-in` <> Node `maya`
- Node label `lighthouse` <> Node `daniel`
- Node label `clara` <> Node `lighthouse`

B POST's only label-label pair was `clara-thomas-supervises` <> Node label
`clara`; it had no label-Node pair. C had neither class of intersection. B's
foreign-Edge-nearer count nevertheless rose to five, so its whitespace did not
preserve label ownership as reliably as its intersection count suggests.

### Temporary visual comparison

A temporary same-world-scale, same-viewport contact sheet rendered A, B, and C
POST-3 with production route samples. It was inspected and deleted.

- A was compact but the `clara`/`lighthouse`/`maya` center was visibly tangled.
- B separated Nodes but created long cross-branch traces. `archive` looked
  detached from the `elias`/`sofia` branch, and the graph acquired a strong
  false radial hierarchy.
- C made the `clara -> elias -> sofia -> archive` and
  `clara -> lighthouse -> authority/beacon` branches traceable and removed the
  central crossing cluster. It was vertically elongated and still advertised
  a single-root hierarchy more strongly than the Dataset warrants.

The render used Entity IDs for the compact comparison; the separate production
label metrics above are the label-quality authority.

### Synthetic controls

All controls used the same temporary seam and production three-iteration
settler. Routing used production `routeGraphEdge`. The table reports material
POST observations.

| Control | A current | B BFS rings | C parent sectors | Decision |
|---|---|---|---|---|
| Star | area 160,660; route 1,137; 0 crossings | area 102,299; route 921; 0 crossings | same as B | supported for a true star |
| Chain | area 162,619; route 908 | collinear; route 1,259 | collinear; route 961 | false hierarchy / degenerate height |
| Branching | area 376,203; 7 crossings; route 2,363 | area 1,785,308; 1 crossing; route 3,559 | area 695,387; 3 crossings; route 2,666 | C helps topology but remains over-spread |
| Cycle | area 162,109; route 929; foreign clearance 28.086 | collinear; route 2,270; clearance -2.541 | same regression as B | material cycle regression |
| Two-hub | area 163,878; 0 crossings; route 1,052 | area 428,427; 1 crossing; route 1,718 | area 171,918; 0 crossings; route 1,058, but minimum Node 85.155 | B materially regresses; C still violates 96 clearance |
| Dense mesh | 129 crossings; minimum Node 78.098 | 151 crossings; minimum Node 73.573 | same as B | material crossing and density regression |
| Disconnected | area 120,900; 1 crossing; route 800 | area 367,574; 0 crossings; route 1,246 | area 376,253; 0 crossings; route 948 | packing remains separated but over-spread |

Cycle is decisive: BFS distance from an arbitrary root turns a symmetric cycle
into a line, doubles route length, and lets a route enter a foreign Node's
radius. C cannot repair it because parent sectors still assume a root tree.
B also chooses one hub in the two-hub control, creating a crossing and 63%
more route length. C removes that crossing but introduces a sub-clearance Node
pair. Dense meshes erase the meaning of hop branches entirely.

Entity and Relation arrays were then reversed. B's seed and POST positions
were bit-identical for every Entity, confirming order invariance under the
canonical ordering rules.

### Performance

Median local timings over 100 deterministic runs were:

| Graph | Nodes / Relations | B seed | Three-iteration settle | Seed + settle |
|---|---:|---:|---:|---:|
| Lighthouse | 10 / 14 | 0.020 ms | 0.047 ms | 0.048 ms |
| Generated medium | 25 / 46 | 0.066 ms | 0.131 ms | 0.193 ms |
| Generated larger | 50 / 96 | 0.138 ms | 0.417 ms | 0.509 ms |

Absolute times are environment diagnostics, not product budgets. BFS seed
construction is `O(V + E)` plus canonical sorting. The unchanged settling
loop remains approximately `O(iterations * (V^2 + E))` because every component
Entity checks every other Entity for repulsion.

### Root cause and decision

Root-cause classification is **CASE 4: MULTI-HOP SEED IMPROVES LIGHTHOUSE BUT
REGRESSES CYCLE / MULTI-HUB TOPOLOGIES**.

Answers to the causal questions:

- Safe equivalent external-seed seam established: **yes**.
- Current internal seed round-trip equivalent: **yes, bit-identical**.
- Previous experiment injected the intended seed: **no**.
- B better than A PRE for spacing and label intersections: **yes**.
- B benefit survives three iterations: **yes**, but branch mixing also
  survives.
- C materially better than B for Lighthouse: **yes**.
- Current force erases the seed difference: **no**.
- Lighthouse presentation improves under C: **yes**, with an area/compactness
  tradeoff.
- Cycle regression: **yes, material**.
- Two-hub regression: **yes for B; C mitigates but does not clear the
  96-unit boundary**.
- General production multi-hop implementation justified: **no**.

Seed-level intervention remains promising only as a topology-conditioned,
branch-aware direction. The next bounded checkpoint should be
`E2R-LIAISONSCAPE-BRANCH-PRESERVING-SEED-TOPOLOGY-GUARD-EXPERIMENT1`: define a
non-semantic structural guard that can refuse single-root hop geometry for
cycles, multi-hub, dense, and degenerate-chain components, then retest C without
changing production. It must not introduce label-aware seed feedback, a new
target Edge length, or a Dataset semantic tree.

### End state and verification

- Production Runtime changed at end: no
- Production force constants changed: no
- Production iteration count changed: no
- Routing changed: no
- Label placement changed: no
- Runtime/test commit: none
- Lighthouse sample formally changed: no
- Existing manual sample candidate remains uncommitted: yes
- Temporary external-seed option remaining: none
- Temporary export, script, test, JSON, SVG, or PNG remaining: none
- `seededPositions` cleanup touched: no
- LiaisonScape tests: 280/280 passed
- LiaisonScape lint: passed
- LiaisonScape build: passed
- LiaisonScape `git diff --check`: passed
- Push, tag, release, deploy, and publication: none
