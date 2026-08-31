# LiaisonScape Local-Expansion Routing-Signal Decomposition

Date: 2026-08-30

Status: bounded application diagnosis; non-normative

## Exact result

`MIXED — ENDPOINT GEOMETRY AND ROUTE ARBITRATION BOTH CAUSE LIGHTHOUSE CROSSINGS`

The preceding checkpoint's Exact Result was `PARTIAL — LOCAL EXPANSION
REDUCES LABEL CONFLICTS BUT NOT ROUTING CONGESTION`. It retained all seven H2
identities while reducing H3 from four to two. That made H2 causality, rather
than another displacement implementation, the primary question here.

The exact seven English Lighthouse ordinary Relation crossings were reproduced
deterministically. Two crossings have a bounded single-endpoint geometry
signal. Five did not resolve in the tested one-endpoint directions through a
normalized `0.10` displacement. Removing occupied-path input, swapping each
crossing pair's route priority, and reversing all ordinary route priority
preserved all seven crossing identities.

The strongest routing signal is not route-order dominance. The current router
does not score a proper transverse crossing. It scores foreign-Node pressure,
provisional Node-label pressure, and a long near-overlap with an earlier path.
The selected candidates for all eight Relations participating in H2 reported
no occupied-path near-overlap, even though their final routes form seven true
crossings. Several curves therefore avoid Nodes or labels successfully and
then cross other Relations without a crossing penalty.

The next bounded checkpoint is:

`E2R-LIAISONSCAPE-ROUTING-CROSSING-MIXED-CAUSE-PRIORITIZATION1`

This selects **PATH C — MIXED**. It must first separate the two safe local
geometry cases from the five coupled routing cases. It does not authorize a
Production route penalty, route-order change, Node movement, or optimizer.

## Starting state and safety boundary

LiaisonScape started on `main` at
`fd563340625fd3d88dc25baedc93c4f8fe69e5e7`, five commits ahead of
`origin/main`. Its only pre-existing dirty paths were:

- `public/lighthouse-restoration-demo.en.e2r.json`
- `public/lighthouse-restoration-demo.ja.e2r.json`

Their ten Entity Coordinates were the same EN/JA unaccepted three-iteration
candidate: `lighthouse 313.827/162.613`, `clara 178.843/165.891`, `elias
42.440/269.626`, `maya 258.741/266.170`, `thomas 56.744/56.542`, `sofia
-1.325/157.240`, `daniel 487.971/160.218`, `beacon 174.562/320.915`, `archive
151.047/-3.686`, and `authority 284.513/44.340`, rounded here to three
decimals. The experiment independently reproduced A with
`settleInitialPlacement`; it did not use those files as target geometry and did
not accept, edit, overwrite, restore, discard, tune, stage, or commit them.

`e2r-spec` started on `main` at
`05f3c8f1c6249a373c376829d420ac1a6bfa6af8`, 34 commits ahead of
`origin/main`. The protected dirty `sessions/E2R-Session-0052.md` and the
protected workspace playbook
`ai-knowledge/playbooks/e2r-edge-cdp-browser-diagnostic.md` remained outside
all edits and staging.

The accepted bounded-geometry playbook was applied: current source and actual
route samples were authoritative, canonical and presentation geometry stayed
separate, counterfactuals changed one signal family at a time, and controls
were measured. No Production runtime, routing, placement, label, Dataset,
sample, schema, Core, Extension, release, or publication change was made.
`seededPositions` was not touched.

## Live presentation and route decision boundary

The harness reconstructed the current `App.tsx` pipeline with exported
Production helpers:

1. derive the three-iteration positions;
2. place provisional Node labels without route paths;
3. route fixed/self-loop Relations first, then ordinary Relations by canonical
   `sourceId`, `targetId`, Relation ID;
4. provide each route with all unrelated Nodes, prior route samples, provisional
   Node labels, parallel index/count, and canonical physical-side sign;
5. return routes to Dataset order, then place Relation labels and Node labels;
6. detect H1–H4 from actual samples and rectangles.

The exact execution order, zero-based, was:

```text
0 beacon-self-calibrate       fixed self-loop
1 beacon-self-monitor         fixed self-loop
2 authority-lighthouse       ordinary
3 beacon-lighthouse-installed-in ordinary
4 clara-lighthouse           ordinary
5 clara-maya                 ordinary
6 clara-thomas-mentors       ordinary
7 clara-thomas-supervises    ordinary
8 daniel-clara               ordinary
9 elias-clara                ordinary
10 maya-beacon               ordinary
11 sofia-archive             ordinary
12 sofia-elias               ordinary
13 thomas-maya-friends       ordinary
```

For an ordinary automatic Relation, `routeGraphEdge` constructs 33 offsets.
The first is `0` for a non-parallel Relation, or the physical-side parallel
base `±(40 + 24 * rank)`. Sixteen steps then add candidates at 12-unit
increments on the preferred and opposite sides. Every quadratic candidate is
sampled at 41 points. A zero offset is straight. Short routes whose rounded-
rectangle attachments invert use a 30%-of-endpoint-distance fallback inset.

The candidate score is exactly the sum of:

- foreign-Node sampled penetration inside radius 60, squared, then multiplied
  by 100;
- 10,000 if inner samples remain within 8 units of an occupied path for at
  least 24 route units;
- 100,000 for each provisional Node label touched, or a quadratic 20-unit
  label halo penalty;
- `abs(offset) * 0.01`.

For nonzero parallel bases, a same-side candidate with zero Node, occupied-
path, and label pressure is preferred over the global minimum. Otherwise the
global minimum wins. Strict `<` comparison makes candidate enumeration order
the deterministic tie-break. A manual offset bypasses automatic candidate
selection. Self-loops use their separate automatic/manual loop path before the
ordinary phase. A proper transverse route crossing is not a score term; the
occupied-path term detects sustained near-overlap, not crossing.

The dominant Production cost remains candidate sampling against Nodes,
provisional labels, and already occupied route samples. This checkpoint did
not optimize it.

## R0 — exact baseline and reproducibility

English A reproduced `[H1,H2,H3,H4] = [0,7,4,0]`, ordinary route length
`1459.126`, and six straight/six curved ordinary routes. Two independent runs
had identical order, SVG paths, sampled routes, crossing identities, and
crossing coordinates: **deterministic YES**.

| H2 pair | Crossing point |
|---|---:|
| `beacon-lighthouse-installed-in \| clara-maya` | `217.448 / 214.343` |
| `beacon-lighthouse-installed-in \| daniel-clara` | `235.271 / 198.055` |
| `beacon-lighthouse-installed-in \| thomas-maya-friends` | `189.909 / 259.178` |
| `clara-thomas-mentors \| sofia-archive` | `69.728 / 113.658` |
| `clara-thomas-supervises \| sofia-archive` | `61.521 / 120.070` |
| `elias-clara \| thomas-maya-friends` | `107.857 / 219.876` |
| `sofia-archive \| thomas-maya-friends` | `60.452 / 120.873` |

The four H3 identities also exactly reproduced:
`beacon-lighthouse-installed-in > maya`, `clara-lighthouse > clara`,
`clara-lighthouse > lighthouse`, and `thomas-maya-friends > sofia`.

## Route construction facts

Every listed obstacle set is exactly all ten Nodes except the Relation's own
endpoints. Every occupied-path set is the exact prefix of the execution order
before that Relation; this includes both self-loops. All ten provisional Node
label rectangles were supplied. `Occ` below is the number of occupied paths.
All selected candidates reported occupied-path pressure `false`.

| Relation | Endpoints | Parallel | Ordinary priority / execution | Shape | Offset | Length | Node / label score | Occ |
|---|---|---:|---:|---|---:|---:|---:|---:|
| `beacon-lighthouse-installed-in` | beacon → lighthouse | 0/1 | 2 / 3 | quadratic | -60 | 160.921 | 0 / 0 | 3 |
| `clara-maya` | clara → maya | 0/1 | 4 / 5 | straight | 0 | 48.864 | 0 / 0 | 5 |
| `clara-thomas-mentors` | clara → thomas | 0/2 | 5 / 6 | quadratic | -64 | 123.615 | 0 / 0 | 6 |
| `clara-thomas-supervises` | clara → thomas | 1/2 | 6 / 7 | quadratic | -88 | 140.369 | 0 / 0 | 7 |
| `daniel-clara` | daniel → clara | 0/1 | 7 / 8 | quadratic | -96 | 260.125 | 93.984 / 4645.305 | 8 |
| `elias-clara` | elias → clara | 0/1 | 8 / 9 | straight | 0 | 92.559 | 0 / 0 | 9 |
| `sofia-archive` | sofia → archive | 0/1 | 10 / 11 | quadratic | 36 | 155.917 | 870.190 / 4640.400 | 11 |
| `thomas-maya-friends` | thomas → maya | 0/1 | 12 / 13 | quadratic | 132 | 273.777 | 0 / 0 | 13 |

The exact paths were:

```text
beacon-lighthouse-installed-in
M 181.18511801087692 288.91484144128066 Q 199.14582006359336 202.132908831414 281.82660808145147 173.640531257987

clara-maya
M 203.56729838876532 196.92223776740354 L 234.01690687071033 235.13913417220158

clara-thomas-mentors
M 146.84313362742665 163.73237055262067 Q 75.09618763249867 158.89192100882983 62.48150575554003 88.54154693400477

clara-thomas-supervises
M 146.84313362742665 168.79818090622112 Q 59.08476144093555 176.77023836008317 57.36665956854294 88.54154693400477

daniel-clara
M 455.99036558359626 180.90020418566968 Q 335.1686882466006 259.0382946568943 210.84313362742665 184.95856004162184

elias-clara
M 73.8046856285444 245.77350690799477 L 147.47850493308476 189.7442180342229

sofia-archive
M 30.674717881340573 139.8175933026946 Q 101.00187382410488 101.52869191124742 135.82616437634618 28.314373509366906

thomas-maya-friends
M 57.71238834055332 88.54154693400477 Q 62.69016675864076 252.94781830984422 226.741071632049 264.0119229356614
```

The corresponding control points were `(199.146,202.133)`,
`(218.792,216.031)`, `(75.096,158.892)`, `(59.085,176.770)`,
`(335.169,259.038)`, `(110.642,217.759)`, `(101.002,101.529)`, and
`(62.690,252.948)` in the same order. Each selected candidate was score rank
one under the live comparison. This means no hidden lower-score crossing-free
candidate was rejected by a later tie-break; crossing-freedom was never part
of the comparison.

## R1–R4 decomposition

The primary targeted runs removed a signal only for one member of each H2 pair
while retaining the same preceding context where possible. R1 never resolved
a target crossing. It changed only the late `thomas-maya-friends` route and
the second Clara/Thomas parallel route in some runs, but the same target H2
remained. R2 resolved only these targeted cases:

- removing foreign Nodes from `beacon-lighthouse-installed-in` resolved its
  crossing with `clara-maya`, but created H1 against `maya`;
- removing foreign Nodes from `daniel-clara` resolved its crossing with
  `beacon-lighthouse-installed-in`, but created H1 against `lighthouse`.

Removing foreign Nodes from the counterpart route did not resolve either
pair. R3, removing both occupied paths and foreign Nodes from one target, added
no safe resolution beyond those same two. R4 resolved only
`beacon-lighthouse-installed-in | daniel-clara` when labels were removed from
`daniel-clara`; total H2 remained seven because
`authority-lighthouse | daniel-clara` was created. This is crossing migration,
not a net improvement.

The per-pair targeted trace is summarized below. `changed` always means the
target Relation's sampled path changed; it does not mean H2 improved.

| H2 pair | R1 target no occupied path | R2 target no foreign Nodes | R3 target neither | R4 target no provisional labels |
|---|---|---|---|---|
| beacon–lighthouse / clara–maya | both unchanged; persists | beacon changed; resolves; H1 +1; total length 1428.866 | same resolving beacon result | both unchanged; persists |
| beacon–lighthouse / daniel–clara | both unchanged; persists | Daniel changed; resolves; H1 +1; length 1445.150; changing beacon alone persists | Daniel changed; resolves; H1 +1; H3 5; length 1444.170 | Daniel changed; target resolves but new authority/Daniel H2; length 1463.337 |
| beacon–lighthouse / thomas–maya | Thomas changed; persists; H3/H4 3/1; length 1431.445 | beacon changed with H1 +1 but persists; Thomas unchanged | each one-target run persists; simultaneous whole-family R3 resolves | both unchanged; persists |
| mentors / sofia–archive | both unchanged; persists | Sofia changed with H1 +1; persists; length 1446.187 | same; persists | both changed; persists; mentor-target length 1418.465 |
| supervises / sofia–archive | supervises changed; persists; length 1435.158 | Sofia changed with H1 +1; persists | both target choices change but persist | both changed; persists; H3/H4 can migrate to 2/1 or 4/1 |
| elias–clara / thomas–maya | Thomas changed; persists; length 1431.445 | both unchanged; persists | Thomas changed; persists; H3/H4 3/1; length 1418.627 | both unchanged; persists |
| sofia–archive / thomas–maya | Thomas changed; persists | Sofia changed with H1 +1; persists | either target changes but persists | Sofia changed; persists and creates H4 1; Thomas unchanged |

Whole-family runs show the coupled consequence:

| Run | H1 | H2 | H3 | H4 | Ordinary length | H2 identity result |
|---|---:|---:|---:|---:|---:|---|
| A | 0 | 7 | 4 | 0 | 1459.126 | baseline |
| R1 no occupied paths | 0 | 7 | 3 | 0 | 1414.691 | all seven retained |
| R2 no foreign Nodes | 3 | 5 | 4 | 0 | 1401.951 | first two beacon pairs resolved |
| R3 no Nodes or occupied paths | 3 | 4 | 5 | 1 | 1343.717 | first three beacon pairs resolved |
| R4 no provisional labels | 0 | 7 | 3 | 0 | 1420.579 | one resolved, one new |
| all three signals absent, diagnostic only | 4 | 0 | 4 | 0 | 1285.774 | all H2 gone, clearance regressed |

The last row is not a quality candidate. It proves that the seven crossings
are not unavoidable endpoint-chord intersections, while its four H1 conflicts
prove why the current avoidance signals cannot simply be removed.

## Route order and occupied-path conclusion

For each H2 pair, exchanging only the two relative ordinary priorities kept
the target crossing. Every swap retained all seven H2 identities. The only
material differences were secondary labels in two swaps: one produced H3/H4
`2/1`, and another `3/0`; route length ranged from `1418.465` to baseline.

Reversing all ordinary priorities also retained the exact seven identities:
overlap seven, resolved zero, created zero. It changed H3/H4 from `4/0` to
`5/2` and route length to `1478.224`. Canonical order remains deterministic,
but **route-order-sensitive H2 count is zero** for Lighthouse.

There is no observed causal chain of “earlier route rejects the later
candidate, which then crosses a third route.” The occupied-path Boolean was
false for every selected H2-participating candidate. The paradox is instead:
Node/label avoidance chooses curves, and those curves may make transverse
crossings that the occupied-path near-overlap test does not recognize.

## Straight-path and curvature diagnosis

For every H2 pair, forcing both members to their boundary-attachment straight
paths removed that pair's crossing. It is still not a Production proposal:

- straight `beacon-lighthouse-installed-in` enters foreign Node `maya`;
- straight `daniel-clara` enters `lighthouse`;
- straight `thomas-maya-friends` enters Node and provisional label `clara`;
- straight `sofia-archive` enters `thomas`;
- straight Clara/Thomas paths touch provisional label `clara`, and their
  parallel family requires separation;
- only `clara-maya` and `elias-clara` are already straight and clear.

Thus curvature is required for Node avoidance on the beacon, Daniel, Sofia,
and Thomas routes, for label avoidance on Thomas and Clara/Thomas routes, and
for parallel separation on the two Clara/Thomas Relations. The crossing-free
straight counterfactual loses those protections.

## Endpoint micro-perturbation

For each H2 pair, each unique endpoint was moved alone. The deterministic
directions were own-axis perpendicular away from the crossing, crossing-to-
endpoint radial, away from the counterpart Relation normal, and Clara radial
when applicable. Magnitudes were `0.025`, `0.05`, `0.075`, and `0.10` times
that endpoint's current incident-distance median. Every movement reran routing
and labels. No hill climbing, random search, all-Node search, or tuning to H2
zero occurred.

| Pair | Attempts | Any resolution | Smallest tested safe result |
|---|---:|---:|---|
| beacon–lighthouse / clara–maya | 60 | 10 | move `beacon` Clara-radially, `0.05 = 7.781`; H2 target gone, new H2 0, H1 0, H3/H4 3/0, length 1569.357 |
| beacon–lighthouse / daniel–clara | 60 | 0 | none through 0.10 |
| beacon–lighthouse / thomas–maya | 64 | 9 | move `beacon` away from counterpart normal, `0.05 = 7.781`; H2 target gone, new H2 0, H1 0, H3/H4 3/0, length 1572.527 |
| mentors / sofia–archive | 60 | 0 | none through 0.10 |
| supervises / sofia–archive | 60 | 0 | none through 0.10 |
| elias–clara / thomas–maya | 60 | 0 | none through 0.10 |
| sofia–archive / thomas–maya | 64 | 0 | none through 0.10 |

The two diagnostic successes increase total route length by about 7.6% and
7.8%, respectively. They satisfy the requested local H2/H1/H3/H4 safety gate,
but do not establish a Production displacement rule. Five of seven pairs have
no one-endpoint signal in the bounded sweep. No two-endpoint test was run:
there was no clear pair-separation hypothesis after the single-endpoint and
signal-removal evidence, and a multi-endpoint search would cross the diagnosis-
only boundary.

## Crossing participation and per-pair classification

`beacon-lighthouse-installed-in`, `sofia-archive`, and
`thomas-maya-friends` each participate in three H2 objects. Every other
Relation participates once. The crossing-participation graph is one connected
eight-Relation cluster, not seven independent failures. Multi-edge coupling is
therefore **YES**.

| H2 pair | Primary cause | Secondary | Order sensitive | Geometry sensitive | Easy local resolution |
|---|---|---|---|---|---|
| beacon–lighthouse / clara–maya | C3 Node-obstacle avoidance induced | C1 endpoint geometry | no | yes | yes, diagnostic only |
| beacon–lighthouse / daniel–clara | C7 geometry/router both material | C4 provisional-label avoidance | no | no in sweep | no |
| beacon–lighthouse / thomas–maya | C7 geometry/router both material | C3 Node-obstacle avoidance | no | yes | yes, diagnostic only |
| mentors / sofia–archive | C5 parallel-route coupling | C3 Node-obstacle avoidance | no | no in sweep | no |
| supervises / sofia–archive | C5 parallel-route coupling | C3 Node-obstacle avoidance | no | no in sweep | no |
| elias–clara / thomas–maya | C7 geometry/router both material | C4 label/Node avoidance conjunction | no | no in sweep | no |
| sofia–archive / thomas–maya | C7 geometry/router both material | C3 Node-obstacle avoidance | no | no in sweep | no |

Strict aggregate signals are:

- endpoint-geometry sensitive: 2;
- route-order sensitive: 0;
- directly Node-obstacle induced under targeted R2: 2;
- directly provisional-label induced under targeted R4: 1, with migration;
- parallel-coupled: 2;
- primary mixed C7: 4;
- unresolved C8: 0;
- safe local-resolution signals: 2;
- observed crossing migrations: 1.

These categories overlap where shown; they are causal diagnostics, not a
partition of E2R data semantics.

## Why Clara L1 retained all seven

At L1, `daniel`, `elias`, `lighthouse`, `maya`, and `thomas` moved 8.195 units
outward from fixed `clara`; `beacon`, `sofia`, and `archive` did not move.
Every route whose endpoint moved changed numerically, but only
`beacon-lighthouse-installed-in` changed winning offset, from `-60` to `-48`.
Its three crossing points moved by `10.380`, `11.317`, and `7.721` units and
all three persisted. This is router compensation: the moved lighthouse altered
the winning curve, but the new curve retained the same crossing topology.

The Clara/Thomas parallel offsets stayed `-64/-88`; Sofia/Archive stayed `36`.
Those two crossings moved only `2.101` and `2.879` units. Elias/Clara stayed
straight and Thomas/Maya stayed at `132`; their crossing moved `0.414`.
Sofia/Archive versus Thomas/Maya retained `36/132` and moved `3.826`. These
four are wrong-topology/wrong-direction cases, not evidence that 8.195 was
merely too small. The bounded pair-specific sweep through 0.10 also failed to
resolve them.

## Historical C diagnostic

The historical parent-sector C POST-3 coordinates were available only rounded
to three decimals. With those values the current helper still reproduced H2
zero and route length `1715.597`, within rounding of the recorded `1715.599`.
Label results from rounded coordinates are not treated as exact historical
evidence.

C did not simply increase endpoint distance. Several involved endpoint
distances became shorter: beacon/lighthouse `210.841 → 153.243`,
Daniel/Clara `309.180 → 163.972`, Thomas/Maya `291.114 → 183.896`, and
Sofia/Archive `221.617 → 163.956`. Direction changed much more materially:
beacon/lighthouse `-48.661° → -7.776°`, Thomas/Maya `46.062° → 159.460°`,
Sofia/Archive `-46.564° → 72.000°`, and Clara/Thomas `-138.153° → -74.889°`.
Selected offsets also changed, including beacon/lighthouse `-60 → 0`,
Daniel/Clara `-96 → 0`, Thomas/Maya `132 → 24`, and Sofia/Archive
`36 → -144`.

Historical C therefore removed H2 through branch-direction and route-choice
changes, not uniform spacing. Its 84.7% area growth and hierarchy risk remain
why it is diagnostic evidence rather than an algorithm target.

## Locale and controls

Japanese A used identical Node geometry but had H2 four, H3 one, H4 zero, and
route length `1513.914`. Its H2 set was the first three beacon pairs plus
`elias-clara | thomas-maya-friends`. Five ordinary route shapes differed from
English because provisional label footprints enter routing:
Clara/Thomas supervise `-88 → -76`, mentor `-64 → -52`, Sofia/Archive
`36 → -156`, Authority/Lighthouse `0 → -24`, and Thomas/Maya `132 → 120`.
Locale changes which crossings manifest, but it does not overturn the mixed
cause classification: occupied-path/order remains weak, while Node/label
avoidance and endpoint geometry remain material.

The neutral-label cross-linked control exactly reproduced its accepted A
route length `1069.192` and one crossing,
`r001-r-b | r008-a1-b1`. R1, R2, R3, and full reverse all retained that
identity. R2/R3 additionally created three H1 conflicts. R4 retained it and
created two more H2 identities. This independently confirms that removing one
avoidance input need not remove the original crossing and can create new ones.

The ten-Node dense control reproduced H2 129 and route length `6052.582`.
Deterministically sampling the first five canonical H2 identities, and also
checking the full identity sets, gave:

- R1: H2 129, overlap 129, resolved 0, created 0;
- R2: H2 60, overlap 35, resolved 94, created 25, H1 `4 → 35`;
- R3: H2 55, overlap 40, resolved 89, created 15, H1 `4 → 31`;
- R4: H2 134, overlap 126, resolved 3, created 8;
- full reverse: H2 129, overlap 129, resolved 0, created 0.

This is the same obstacle-avoidance paradox at scale. Count reduction alone
hides extensive identity migration and Node-clearance loss. Route-order
reversal again did not alter H2 identities.

The ten-Node chain and cycle remained H2-free under baseline, R1, R4, and full
reverse. Removing Node obstacles in R2/R3 retained H2 zero but created one H1
in each control, so those removals are not harmless no-ops. Baseline route
lengths exactly reproduced `908.456` and `928.853`.

## Decision and stop boundary

PATH A alone is not justified: only two of seven pairs have a bounded safe
single-endpoint signal, both with route growth, and the Clara fan-out direction
does not generalize. PATH B alone is also not justified: order and occupied-
path removal retain all seven identities. The source boundary nevertheless
matters because proper crossings are absent from candidate arbitration and
avoidance curves create the failures.

PATH C is therefore the smallest honest next checkpoint. It should prioritize
one geometry-responsive beacon subset against one coupled router subset and
ask which objective can distinguish a true transverse crossing from sustained
overlap without sacrificing Node/label clearance. It must remain a
counterfactual. This result stops before implementing that experiment.

Production runtime changed: **NO**. Routing changed: **NO**. Node placement
changed: **NO**. Labels changed: **NO**. Sample formally changed: **NO**.
Runtime commit: **NONE**. Push, tag, release, deploy, and publication: **NONE**.
