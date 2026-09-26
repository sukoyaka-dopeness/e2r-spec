# LiaisonScape Ordinary-Route Node-Label-Crossing Priority Semantics Experiment

Date: 2026-08-31

Status: bounded application experiment; non-normative

## Exact result

`MIXED — PROVISIONAL LABEL CONFLICTS ARE ONLY PARTIALLY PREDICTIVE OF FINAL PRESENTATION SAFETY`

Root-cause classification: **CASE 3 — MIXED: SOME PROVISIONAL CONFLICTS
RESOLVE, OTHERS PERSIST OR MIGRATE**.

The provisional Node-label gate is neither a reliable final-failure proof nor
a dispensable false-positive filter. In the English Lighthouse label-blocked
candidate inventory, 21 provisional route/label intersections divide into 13
that persist for the same route/owner pair and eight that resolve after fresh
final Node-label placement. All 14 candidates also migrate at least one other
measured label-conflict identity. The three primary references disagree:

- beacon offset `120`: Maya's provisional conflict resolves, but a different
  H3 identity appears;
- Sofia/Archive offset `-120`: Archive resolves, Thomas persists, and a
  Node-label/Node identity migrates;
- Cross-linked `r008-a1-b1` offset `-132`: the provisional conflict resolves
  without another measured conflict.

A final-presentation oracle can reduce English H2 from seven to two without
increasing H1/H3/H4 or measured label-overlap counts, but it changes four Node
labels and migrates one H3 and one Node-label/Node identity. A one-step
feedback diagnostic also makes all three primary fixed candidates prefer a
different automatic route. These facts do not justify removing the
provisional gate or implementing final-label-aware Production routing.

The selected next bounded checkpoint is:

`E2R-LIAISONSCAPE-PROVISIONAL-LABEL-GATE-PREDICTIVENESS-SUBSET1`

It is selected only and is not started here.

## Preceding result and experiment boundary

The preceding [Ordinary-Route True-Crossing Objective Experiment](liaisonscape-ordinary-route-true-crossing-objective-experiment.md)
concluded:

`TRADE-OFF — CROSSING REDUCTION COMPETES WITH NODE / LABEL SAFETY`

Its X1 policy rejected beacon `120`, Sofia/Archive `-120`, and Cross-linked
`-132` only because each crossed more provisional Node-label rectangles than
the Production winner. The earlier fresh-presentation check counted H1/H3/H4
but did not directly count ordinary route/final Node-label rectangle
intersections. This checkpoint fills that metric gap. It does not choose an
exchange rate between crossings and labels.

No Production runtime, routing, label placement, candidate set, placement,
sample, schema, or drag-continuity behavior changed.

## Starting and protected state

LiaisonScape started on `main` at
`fd563340625fd3d88dc25baedc93c4f8fe69e5e7`, tracking `origin/main`, five
commits ahead and zero behind. Its only dirty paths were the existing
unaccepted EN/JA sample candidates:

- `public/lighthouse-restoration-demo.en.e2r.json`
- `public/lighthouse-restoration-demo.ja.e2r.json`

They were not edited, overwritten, discarded, restored, staged, committed, or
hand-tuned. `e2r-spec` started on `main` at
`526e9e764abbc2e639ab31db785235b27c871ca4`, 37 commits ahead and zero behind.
Protected dirty `sessions/E2R-Session-0052.md` and
`ai-knowledge/playbooks/e2r-edge-cdp-browser-diagnostic.md` remained outside
all edits and staging. `seededPositions` was not touched.

## Exact Production presentation pipeline

Live `App.tsx` and `viewport.ts` establish this order:

1. **Node positions:** stored sample coordinates are resolved in graph space.
2. **Provisional Node labels:** for each Node, `placeNodeLabel` evaluates the
   same locale-specific text footprint and 32 angular candidates, with other
   Nodes but no occupied labels, route paths, or previous placement. A manual
   Node-label offset would then remain authoritative.
3. **Routing:** fixed, self-loop, and overlapping-endpoint routes are processed
   first; automatic ordinary Relations follow canonical source/target/id
   order. The provisional rectangles, foreign Nodes, and previously occupied
   paths enter automatic candidate scoring. The current Lighthouse has no
   manual route override.
4. **Relation labels:** each label is placed in graph edge order using all
   final route samples, Nodes, prior Relation-label rectangles, and normally a
   previous placement. The experiment performs a fresh pass with previous
   placement undefined.
5. **Final Node labels:** each Node label is recomputed using all final route
   samples, all Relation labels plus prior Node labels, other Nodes, and
   normally previous-placement hysteresis. The experiment again uses a fresh
   pass with previous placement undefined.

Final Node labels consume final route geometry: **YES**. Final Node-label
results feed back into the same routing pass: **NO**. The structural boundary
is therefore:

```text
provisional Node labels
    -> automatic routes
    -> Relation labels
    -> final Node labels
    -/-> automatic routes
```

The provisional rectangle is demonstrably a temporary route obstacle and an
approximate collision reservation. It is not an exact final-geometry promise
and is not a hysteresis seed in the fresh path. Design intent beyond those
code-observable responsibilities is **UNSPECIFIED**.

Locale affects rectangle width and wrapping through text footprint only. Text
content was not interpreted as semantic importance.

## Diagnostic definitions

Production H0-H4 remain unchanged. Temporary metrics are:

- **PNR — Provisional Node-label / ordinary Route:** an ordinary sampled
  polyline segment intersects the actual provisional axis-aligned rectangle;
- **FNR — Final Node-label / ordinary Route:** the same test against the fresh
  final rectangle.

Each identity records the Relation, label owner, and whether the owner is the
source, target, or a foreign Node. Interior intersections, tangential boundary
contacts, and halo-only proximity are distinguished. All primary objects are
hard interior intersections; none is tangential or halo-only.

Additional temporary final-presentation inventories count rendered rounded
Node-body/Node-label intersections, Node-label/Node-label rectangle overlap,
and Node-label/Relation-label rectangle overlap. They are diagnostics, not new
Production quality contracts.

## English Production baseline

The fresh baseline is deterministic and reproduces the accepted values:

- H0/H1/H2/H3/H4: `0/0/7/4/0`;
- PNR: `0`;
- FNR: `3`;
- ordinary route total: `1459.126`;
- foreign-Node clearance: `18.615`;
- straight/curved ordinary routes: `6/6`.

The exact seven H2 identities remain:

1. `beacon-lighthouse-installed-in | clara-maya`
2. `beacon-lighthouse-installed-in | daniel-clara`
3. `beacon-lighthouse-installed-in | thomas-maya-friends`
4. `clara-thomas-mentors | sofia-archive`
5. `clara-thomas-supervises | sofia-archive`
6. `elias-clara | thomas-maya-friends`
7. `sofia-archive | thomas-maya-friends`

Although Production-selected routes intersect no provisional rectangle, the
final pass contains three hard FNR identities:

| Relation | final Node-label owner | role |
|---|---|---|
| `beacon-lighthouse-installed-in` | `clara` | foreign |
| `clara-lighthouse` | `clara` | source |
| `daniel-clara` | `clara` | target |

Thus PNR `0` does not imply final route/Node-label safety. The baseline also
has two Node-label/Node identities (`clara | lighthouse` and
`lighthouse | daniel`), no Node-label/Node-label overlap, and one
Node-label/Relation-label identity (`beacon | beacon-self-monitor`).

## Primary stage traces

Direction index follows the live 32-direction sequence beginning at positive
Y and rotating by 11.25 degrees. Rectangle notation is
`center x/y; width x height; index (direction vector)`.

### Beacon/lighthouse offset 120

The one provisional owner is `maya`, label `Maya Reed`, locale EN.

- provisional: `366.491/266.170; 135.5 x 48; 24 (1,0)`;
- route intersection: segment 20 at `299.856/287.503`, hard interior;
- final: `332.900/340.329; 135.5 x 48; 28 (0.707107,0.707107)`;
- center displacement: `81.412`;
- owner distance: `107.750 -> 104.877`;
- direction changed: **YES**;
- same FNR remains: **NO**.

With final-stage occupied labels and Nodes but route paths removed, Maya would
select index 25 at `367.736/287.851`. Final routes therefore cause the further
move to index 28. The owner distance does not grow materially; the large
center displacement is mainly angular.

Fresh final metrics are `0/0/5/4/0`, PNR `1`, FNR `2`, route total
`1497.983`, and clearance `11.795`. H2 resolves the Clara/Maya and Thomas/Maya
pairs with no new H2. H3 count stays four, but
`beacon-lighthouse-installed-in | maya` resolves while
`beacon-self-calibrate | elias` is created. There is no count increase in the
other measured label-overlap metrics. Classification: **P4 — resolves but
creates a different label presentation regression**.

### Sofia/Archive offset -120

Two provisional owners are traced.

| Owner / label | Provisional rect | Intersection | Final rect | displacement | direction change | FNR remains |
|---|---|---|---|---:|---|---|
| `archive` / Harbor Historical Archive | `33.547/-3.686; 155 x 48; 8 (-1,0)` | segment 22, `31.587/19.393` | `151.047/-67.686; 155 x 48; 16 (0,-1)` | `133.799` | yes | no |
| `thomas` / Thomas Hale | `-54.256/56.542; 142 x 48; 8 (-1,0)` | segment 7, `-1.587/79.349` | `-55.378/34.239; 142 x 48; 9 (-0.980785,-0.195090)` | `22.330` | yes | **yes** |

Archive owner distance becomes `117.500 -> 64.000`; its no-route final-stage
ablation also chooses index 16, so the escape is caused by final-stage label
ordering/obstacles rather than this route alone. Thomas owner distance becomes
`111.000 -> 114.318`; no-route ablation retains index 8, while route pressure
moves it only to index 9 and does not clear the rectangle.

Fresh final metrics are `0/0/4/4/0`, PNR `2`, FNR `1`, route total
`1511.713`, and clearance `12.634`. The three Sofia/Archive H2 identities
resolve with no new H2. All three baseline FNR identities disappear, but the
new/persisting `sofia-archive | thomas` FNR remains. Node-label/Node count
stays two while `clara | lighthouse` migrates to `clara | authority`.
Classification: **P1 — one provisional conflict persists into final
presentation**.

### Cross-linked r008-a1-b1 offset -132

The provisional owner is foreign Node `b`, label `b`.

- provisional: `153.871/371.249; 48 x 20; 0 (0,1)`;
- intersection: segment 19 at `168.817/361.355`, hard interior;
- final: `143.240/267.806; 48 x 20; 15 (-0.195090,-0.980785)`;
- displacement: `103.988`;
- owner distance: `50.000 -> 54.490`;
- direction changed: **YES**;
- same FNR remains: **NO**.

The no-route ablation retains the provisional rectangle, so final route
geometry causes the escape. Final metrics are `0/0/0/0/0`, PNR `1`, FNR `0`,
route total `1115.134`, and clearance `6.438`. The sole H2 resolves without
crossing or label migration. Classification: **P2 — resolved by final
Node-label replacement**.

No absolute distance or viewport threshold is inferred. All final rectangles
are finite; the largest displacement, Archive `133.799`, ends closer to its
owner rather than farther away. Browser viewport acceptance was not used to
turn that observation into a general safety contract.

## Label-blocked candidate inventory

All 33 current candidates were enumerated for each of the eight
H2-participating Relations. A candidate entered this inventory only when it
reduced that Relation's frozen-context H2 participation, did not increase
rendered foreign-Node penetration or occupied hard overlap, preserved the
parallel side, and had more PNR than the Production winner.

The complete qualifying set has 14 candidates and two Relations:

| Relation | offsets | candidates | PNR each | final result |
|---|---|---:|---:|---|
| beacon/lighthouse | `120,132,144,156,168,180,192` | 7 | 1 | `120` resolves Maya but has H3 migration; six larger offsets retain Maya FNR |
| Sofia/Archive | `-120,-132,-144,-156,-168,-180,-192` | 7 | 2 | Archive resolves and Thomas persists at every offset |

Across 21 provisional intersections, 13 persist and eight resolve. Candidate
classification is P1 `13`, P2 `0`, P3 `0`, P4 `1`, P5 `0`. Classification
uses the most direct provisional outcome; independently, all 14 candidates
also create a different measured label-conflict identity: every beacon member
creates the same new H3, while every Sofia member migrates the Clara
Node-label/Node identity. Four larger beacon offsets additionally create
`maya | beacon` Node-label/Node overlap.

Within this bounded sample, provisional hard intersection predicts final hard
failure with **PARTIAL** strength. The sample is only 14 candidates from two
Lighthouse Relations plus bounded controls; no statistical generalization is
made.

## X2 final-presentation oracle

Because PNR over-predicts some final failures, X2 was executed. For each
current candidate, X2 performs a fresh Relation-label and Node-label pass and
requires these counts to be non-worse than the current presentation:

- final H1;
- final FNR;
- final H3 and H4;
- Node-label/Node, Node-label/Node-label, and Node-label/Relation-label;
- occupied hard overlap;
- manual and parallel invariants.

Eligible candidates minimize true H2, then retain deterministic current
candidate order. No numeric crossing weight is used. Because safe
single-route improvements existed for two Relations, exactly one canonical
sweep was run; each accepted replacement was followed by fresh final labels.
No second sweep or global combination search was performed.

| Metric | Production | X2 one sweep |
|---|---:|---:|
| H0/H1/H2/H3/H4 | `0/0/7/4/0` | `0/0/2/4/0` |
| PNR / FNR | `0/3` | `3/1` |
| Node-label/Node | 2 | 2 |
| Node-label/Node-label | 0 | 0 |
| Node-label/Relation-label | 1 | 1 |
| route total | `1459.126` | `1550.569` |
| clearance | `18.615` | `11.795` |

X2 selects beacon `120` (`H2 7 -> 5`) and Sofia/Archive `-120`
(`H2 5 -> 2`). The retained H2 identities are
`beacon-lighthouse-installed-in | daniel-clara` and
`elias-clara | thomas-maya-friends`; no new H2 identity appears.

Four final Node labels change from Production: Clara `110.028` units
(`24 -> 18`), Maya `62.989` (`25 -> 28`), Thomas `22.330` (`8 -> 9`), and
Archive `133.799` (`8 -> 16`). FNR improves from three to the single
Sofia/Thomas identity, but label identities migrate:

- H3: `beacon-lighthouse-installed-in | maya` becomes
  `beacon-self-calibrate | elias`;
- Node-label/Node: `clara | lighthouse` becomes `clara | authority`.

Therefore X2 recovers material crossing benefit but does not prove final
presentation safety by identity. It is an oracle, not a Production selector.

The unoptimized run evaluates 396 route candidates and performs 396 fresh
presentation label passes, or 9,504 individual Relation/Node label placements
for this 14-Relation/10-Node fixture. Baseline presentation took `58.930 ms`;
X2 took `2858.899 ms`, `48.514x`. Timing is diagnostic only.

## One-step route/label feedback

A bounded feedback diagnostic fixed each primary candidate, computed final
Node labels, then supplied those final rectangles as route obstacles once.
It did not place labels again.

| Fixed candidate | one-step automatic winner | classification |
|---|---:|---|
| beacon `120` | `-60` | F2 |
| Sofia/Archive `-120` | `60` | F2 |
| Cross-linked `-132` | `-192` | F2 |

Final label movement causes every route to prefer a different candidate:
**F2 — FINAL LABEL MOVEMENT CAUSES ROUTE TO PREFER A DIFFERENT CANDIDATE**.
This proves one-step coupling, not an oscillation: no second label pass was
allowed, so F3 is not claimed. Feedback is material architecture evidence but
does not replace the mixed predictiveness result.

## Locale result

Japanese baseline reproduces H0/H1/H2/H3/H4 `0/0/4/1/0`, PNR/FNR `1/1`,
route total `1513.914`, clearance `23.492`, and straight/curved `5/7`. Its one
baseline PNR and FNR identity is `sofia-archive | thomas`.

Beacon `120` intersects provisional Maya (`マヤ・リード`) at the same route
point. The locale footprint is narrower: provisional rectangle
`354.741/266.170; 112 x 48; index 24`; final rectangle
`327.025/334.454; 112 x 48; index 28`. Displacement is `73.695`, owner distance
`96.000 -> 96.569`, and FNR resolves. Classification is P2 with no other
measured identity migration.

The JA label-blocked inventory has seven beacon candidates, seven provisional
intersections, six persisted and one resolved. Sofia `-120` is not a material
JA H2 candidate and was not promoted into that inventory. JA X2 selects beacon
`120`, reducing H2 `4 -> 2` with H1/H3/H4 `0/1/0`, FNR unchanged at one, and
no crossing migration. EN and JA retain the same **PARTIAL** conclusion: YES.

## Parallel result

The Clara/Thomas parallel offsets remain `-64` and `-88`. Their two H2
identities with Sofia/Archive are present before X2 and absent after X2 solely
because Sofia/Archive changes to `-120`. Parallel slot identity and policy are
unchanged: **YES**.

## Dense deterministic subset

The complete ten-Node graph reproduces H0/H1/H2/H3/H4 `0/4/129/0/0`, PNR/FNR
`12/6`, route total `6052.582`, and clearance `-4.510`.

Sampling first restricts to the nine Relations changed by preceding X1, then
requires an H2-reducing candidate rejected only after additional provisional
label intersection, and takes each Relation's best net-H2 candidate in
canonical ID order, at most five. Three Relations qualify:

| Relation / candidate | PNR outcome | final outcome | H2 identity effect | label motion |
|---|---|---|---|---|
| `r038-n05-n09`, `84` | one | persists; FNR `+1` | resolves 5, creates 3; net `-2` | owner unchanged |
| `r040-n06-n08`, `0` | two | both resolve; FNR count unchanged | resolves 1, creates 0 | `n07 100.000`, `n08 128.866` |
| `r041-n06-n09`, `-48` | two | both resolve; FNR count unchanged | resolves 6, creates 1; net `-5` | `n07 100.000`, `n08 128.866` |

These are separate one-route counterfactuals, each with churn `1/45`; no Dense
sweep was run. Two of three migrate crossing identities, one preserves a real
final route/label failure, and the two resolving cases require large angular
label moves. The Lighthouse conclusion generalizes as **mixed**, not as a
safe global relaxation. Scalability and combined churn remain unproven.

## No-conflict controls

Cross-linked baseline is H0-H4 `0/0/1/0/0`, PNR/FNR `0/0`; its primary
counterfactual is the safe P2 case above. Chain and cycle each retain
H0-H4 `0/0/0/0/0` and PNR/FNR `0/0`. Their route totals remain `908.456` and
`928.853`. X2 was not applied to no-conflict graphs.

Repeated baseline and oracle runs select the same routes, labels, and conflict
identities. Timing alone varies.

## Conclusion and stop boundary

- provisional label hard gate is well-justified: **PARTIAL**;
- known crossing-reducing candidates are finally label-safe: **MIXED**;
- priority semantics between real final failures must be decided now: **NO**;
- bounded route/final-label coordination deserves the next experiment:
  **NO, not before the predictive safe/unsafe subset is isolated**;
- Production implementation is justified now: **NO**.

The next checkpoint must distinguish which provisional conflicts persist,
which resolve cleanly, and which trigger a different label migration. It must
not simply remove provisional label consideration, assign magic crossing and
label weights, or start a convergence loop. Drag continuity remains a
separate checkpoint.

The EN/JA sample candidates remain formally unchanged, unaccepted, and
uncommitted. `seededPositions` remains untouched.
