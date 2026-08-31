# LiaisonScape Routing-Crossing Mixed-Cause Prioritization

Date: 2026-08-31

Status: bounded application experiment and prioritization; non-normative

## Exact result

`DIRECTION SUPPORTED — CURRENT ROUTE CANDIDATE SPACE ALREADY CONTAINS SAFER CROSSING-REDUCING ROUTES`

The current candidate space can safely remove five of the seven English
Lighthouse true ordinary-Relation crossings by replacing one Relation at a
time. `beacon-lighthouse-installed-in` at offset `120` removes two crossings;
`sofia-archive` at offset `-120` removes three. Both results survive a fresh
Production-pipeline reroute and label pass with no H1, H3, H4, or crossing-
identity regression. The current router does not select either candidate
because it does not score true transverse crossings and assigns the candidates
large soft foreign-Node and provisional-label pressure.

This is priority class **P1 — ROUTER OBJECTIVE FIRST**. It establishes candidate
existence, not a Production selection algorithm. No crossing weight, global
optimizer, candidate addition, routing change, Node movement, or placement
change is authorized. The selected next bounded checkpoint is:

`E2R-LIAISONSCAPE-ORDINARY-ROUTE-TRUE-CROSSING-OBJECTIVE-EXPERIMENT1`

That checkpoint is selected only and is not started here.

## Preceding result and experiment boundary

The preceding [Local-Expansion Routing-Signal Decomposition](liaisonscape-local-expansion-routing-signal-decomposition.md)
concluded:

`MIXED — ENDPOINT GEOMETRY AND ROUTE ARBITRATION BOTH CAUSE LIGHTHOUSE CROSSINGS`

It found safe bounded endpoint signals for two crossings, but no such signal
for the other five. Route-order reversal, pair swaps, and occupied-path removal
preserved all seven identities. The user-observed dynamic failure mode was that
an automatic curved route rotates or is reselected as a Node moves, sweeping
its interior across other Relations even while it avoids Nodes or labels.

This checkpoint asked only whether safer geometry already exists in the live
router's candidate set and whether automatic curvature materially affects a
bounded motion trajectory. The temporary harness reconstructed the current
`App.tsx` presentation order and used live helpers. It did not add a candidate,
change a score, tune coordinates, perform a multi-route search, or modify
Production exports.

## Starting state and protected state

LiaisonScape started on `main` at
`fd563340625fd3d88dc25baedc93c4f8fe69e5e7`, five commits ahead of
`origin/main`. Its only pre-existing dirty paths were the unaccepted sample
candidates:

- `public/lighthouse-restoration-demo.en.e2r.json`
- `public/lighthouse-restoration-demo.ja.e2r.json`

They were not accepted, edited, overwritten, restored, discarded, staged, or
committed. `e2r-spec` started on `main` at
`f66eece4c327e0146e11eafe1f96adca3b603bc2`, 35 commits ahead of
`origin/main`. The protected dirty `sessions/E2R-Session-0052.md` and
`ai-knowledge/playbooks/e2r-edge-cdp-browser-diagnostic.md` remained outside
all edits and staging. `seededPositions` was not touched.

## Live router candidate and score model

For an ordinary non-parallel Relation the live router enumerates offset `0`,
then preferred/opposite offsets at 12-unit increments through `±192`: 33
candidates total. For a parallel Relation the signed physical-side slot is
`40 + 24 * (rank - 1)`, followed by 16 preferred/opposite 12-unit increments,
again 33 candidates. Each line or quadratic path has 41 samples. Enumeration
order is base first, then preferred and opposite at each increasing magnitude.

Each candidate was captured temporarily with its offset identity, SVG `path`,
41 samples, sampled length, straight/curved shape, foreign-Node pressure,
long occupied-path result, provisional-label pressure, Production score, and
winner flag. The score is:

```text
foreign-Node squared pressure * 100
+ sustained occupied-path proximity ? 10000 : 0
+ provisional Node-label pressure
+ abs(offset) * 0.01
```

Foreign-Node pressure uses a 60-unit influence radius. Occupied proximity means
inner samples stay within 8 units for at least 24 path units; it is not a true-
crossing test. Label intersection contributes `100000`, with a 20-unit halo.
Strict `<` comparison leaves the first equal-score candidate selected.
Parallel Relations additionally prefer an existing fully safe candidate on
their canonical physical side. A manual offset bypasses automatic arbitration.

True transverse crossing is directly scored: **NO**. An earlier ordinary route
can see prior occupied paths, but cannot see future ordinary routes:
sequential future-route visibility is **NO**. The Lighthouse baseline has no
manual route override.

## Baseline reproduction gate

The English baseline reproduced identically on repeated runs:

- H1: `0`
- H2: `7`
- H3: `4`
- H4: `0`
- ordinary route length: `1459.126`
- straight/curved ordinary routes: `6/6`

The exact canonical H2 set was:

1. `beacon-lighthouse-installed-in | clara-maya`
2. `beacon-lighthouse-installed-in | daniel-clara`
3. `beacon-lighthouse-installed-in | thomas-maya-friends`
4. `clara-thomas-mentors | sofia-archive`
5. `clara-thomas-supervises | sofia-archive`
6. `elias-clara | thomas-maya-friends`
7. `sofia-archive | thomas-maya-friends`

Their crossing points were respectively `217.448/214.343`,
`235.271/198.055`, `189.909/259.178`, `69.728/113.658`,
`61.521/120.070`, `107.857/219.876`, and `60.452/120.873`.

## Frozen-context oracle

For each of the eight H2-involved Relations, the oracle held every other route
at its baseline samples, substituted each of the Relation's 33 current
candidates, and recomputed route labels, Node labels, H1, true H2 identities,
H3, H4, route length, and foreign-Node clearance. It used actual sampled
polylines, excluded endpoint touches and shared endpoints, and did not use a
weighted diagnostic objective.

A temporary `SAFE CROSSING IMPROVEMENT CANDIDATE` required total H2 to fall,
no new H1, no H3/H4 increase, no equal-count migration, and membership in the
current candidate set. Route length was secondary. This is a diagnostic
classification, not a Production contract.

| Relation | Current winner offset / own length | Current H2 participation | Straight in set / safe | Lower-curvature safe | Best safe replacement | H1/H2/H3/H4 after | Total-length delta |
|---|---:|---:|---|---|---|---|---:|
| `beacon-lighthouse-installed-in` | `-60 / 160.921` | 3 | yes / no | none | `120`; resolves H2 1 and 3 | `0/5/4/0` | `+38.857` (`+2.66%`) |
| `clara-maya` | `0 / 48.864` | 1 | yes / no | none | none | best raw H2 `6`, but H1 `1` | none safe |
| `clara-thomas-mentors` | `-64 / 123.615` | 1 | no / no | none | none | best raw H2 `6`, but H1 `1` | none safe |
| `clara-thomas-supervises` | `-88 / 140.369` | 1 | no / no | none | none | best raw H2 `6`, but H1 `1` | none safe |
| `daniel-clara` | `-96 / 260.125` | 1 | yes / no | none | none | straight `1/6/5/0` | none safe |
| `elias-clara` | `0 / 92.559` | 1 | yes / no | none | none | best raw H2 remains `7` | none safe |
| `sofia-archive` | `36 / 155.917` | 3 | yes / no | none | `-120`; resolves H2 4, 5, and 7 | `0/4/4/0` | `+52.587` (`+3.60%`) |
| `thomas-maya-friends` | `132 / 273.777` | 3 | yes / no | none | none | straight `1/6/2/1` | none safe |

The safe offset bands were `120..192` in 12-unit steps for the beacon route
and `-120..-192` for Sofia/Archive. The shortest and least-curved safe member
of each band was reported above. Neither band is lower-curvature than the
current winner. No Lighthouse candidate created a new H2 identity in the
best-raw comparison, but the six non-safe Relations either failed to reduce
H2 or introduced H1/H4 regression.

The selected beacon candidate's own length is `199.778`, `+38.857` and `1.241x`
its current route. Sofia/Archive becomes `208.504`, `+52.587` and `1.337x`.
These are material but not extreme detours; no Production ratio threshold is
inferred.

## Why current arbitration misses the safe candidates

The beacon winner has Production score `0.600`: Node pressure `0`, occupied
proximity false, label pressure `0`, and only offset cost. Its safe `120`
candidate has Node pressure `3574.244`, provisional-label pressure `100000`,
and score `457425.557`. Sofia/Archive's current `36` candidate scores
`91659.736`, while safe `-120` has Node pressure `3050.842`, provisional-label
pressure `200000`, and score `505085.433`.

The final-shape checks still report H1/H3/H4 unchanged for those alternatives.
The difference is not an arithmetic bug: the Production router deliberately
uses broad soft pressure and provisional labels, while the oracle's safety
gate uses final conflict identities. Because H2 is absent from the Production
score, the arbitration has no term that can trade those pressures against two
or three avoided transverse crossings. Sequential routing also prevents an
earlier route from evaluating crossings with future routes. Candidate
existence therefore does not prove deterministic Production selection.

## Straight candidates and curvature necessity

Force-straight results for non-parallel Relations were:

| Relation | H1/H2/H3/H4 | Total length | Foreign clearance | Crossing effect |
|---|---|---:|---:|---|
| `beacon-lighthouse-installed-in` | `1/6/4/0` | `1428.866` | `-4.936` | resolves beacon/Clara; penetrates a foreign Node |
| `clara-maya` | `0/7/4/0` | `1459.126` | `18.615` | already straight; no improvement |
| `daniel-clara` | `1/6/5/0` | `1444.170` | `-30.573` | resolves beacon/Daniel; H1 and H3 regress |
| `elias-clara` | `0/7/4/0` | `1459.126` | `18.615` | already straight; no improvement |
| `sofia-archive` | `1/7/4/0` | `1444.329` | `-4.901` | no H2 improvement and H1 regresses |
| `thomas-maya-friends` | `1/6/2/1` | `1395.926` | `-19.768` | resolves Elias/Thomas-Maya; H1 and H4 regress |

Thus the observed pattern “a curve avoids a Node/label while creating a
crossing absent from the straight chord” applies to
`beacon-lighthouse-installed-in | clara-maya`,
`beacon-lighthouse-installed-in | daniel-clara`, and
`elias-clara | thomas-maya-friends`. Straightening is not safe in any case.

| Relation | Current offset | Straight safe? | Curvature needed for Node? | Curvature needed for label/parallel identity? | Curvature reduces H2? | Classification |
|---|---:|---|---|---|---|---|
| `beacon-lighthouse-installed-in` | -60 | no | yes | no direct final-label need | opposite higher curvature does | TRADE-OFF |
| `clara-maya` | 0 | no improvement | no | no | no safe candidate does | UNCLEAR |
| `clara-thomas-mentors` | -64 | not in parallel set | yes in tested alternatives | yes, including parallel separation | no safe candidate does | NECESSARY |
| `clara-thomas-supervises` | -88 | not in parallel set | yes in tested alternatives | yes, including parallel separation | no safe candidate does | NECESSARY |
| `daniel-clara` | -96 | no | yes | yes | only with H1 regression | NECESSARY |
| `elias-clara` | 0 | no improvement | no | no | no | UNCLEAR |
| `sofia-archive` | 36 | no | yes | soft pressure remains material | opposite higher curvature does | TRADE-OFF |
| `thomas-maya-friends` | 132 | no | yes | yes | straight reduces one but regresses H1/H4 | TRADE-OFF |

There are zero straight or lower-curvature safe improvement candidates. This
rejects P2 as the static priority even though straight-following is useful as
a dynamic diagnostic.

## Fresh presentation validation

Only the two frozen-context successes were validated. Each candidate was
temporarily supplied through the fixed/manual route boundary, then every other
route and all labels were recomputed through the Production ordering.

| Temporary fixed route | Frozen result | Fresh result | Benefit survives | Migration / Node / label regression |
|---|---|---|---|---|
| beacon offset `120` | `0/5/4/0`, length `1497.983` | identical | yes | none / none / none |
| Sofia/Archive offset `-120` | `0/4/4/0`, length `1511.713` | identical | yes | none / none / none |

Later-route reaction did not erase either benefit. The fixed/manual use here
was temporary diagnostic injection and did not create saved curvature.

## Per-crossing router and geometry availability

| H2 | Safe current-space route? | Prior safe endpoint signal? | Classification |
|---|---|---|---|
| beacon/lighthouse — Clara/Maya | yes, beacon `120` | yes, beacon Clara-radial | overlap; router makes G unnecessary in this case |
| beacon/lighthouse — Daniel/Clara | no | no | neither proven |
| beacon/lighthouse — Thomas/Maya | yes, beacon `120` | yes, beacon away-normal | overlap; router makes G unnecessary in this case |
| mentor — Sofia/Archive | yes, Sofia/Archive `-120` | no | router-only |
| supervise — Sofia/Archive | yes, Sofia/Archive `-120` | no | router-only |
| Elias/Clara — Thomas/Maya | no | no | neither proven |
| Sofia/Archive — Thomas/Maya | yes, Sofia/Archive `-120` | no | router-only |

Measured with only route selection changed, five H2 are safely resolvable.
Measured with only the prior bounded geometry perturbation, two are resolvable.
The overlap is two, the route-only unique subset is three, the geometry-only
unique subset is zero, and two have neither signal. This does not prove that
endpoint geometry can never help the remaining pair; it establishes that a
new placement rule is not the first justified intervention.

## A/G/R/G+R comparison

The prior two geometry successes were reproduced with a 7.781-unit beacon
movement (`0.05` of its non-self incident-distance median). R used the current-
space beacon candidate at offset `120`.

| Diagnostic | H1/H2/H3/H4 | Route length | Exact effect |
|---|---|---:|---|
| A | `0/7/4/0` | `1459.126` | baseline |
| G, Clara-radial | `0/5/3/0` | `1569.357` | removes both geometry-responsive beacon H2 |
| G, Thomas/Maya away-normal | `0/5/3/0` | `1572.527` | removes the same two H2 |
| R | `0/5/4/0` | `1497.983` | removes the same two H2 |
| G+R, Clara-radial | `0/5/3/0` | `1544.123` | no additional H2 benefit |
| G+R, away-normal | `0/5/3/0` | `1547.370` | no additional H2 benefit |

R alone is sufficient for this subset; G does not unlock a different safe R,
and G+R is not complementary. No hybrid algorithm is implied.

## Dynamic beacon trajectory

The beacon was interpolated from baseline to the prior safe Clara-radial point
at 0%, 10%, ..., 100%: 11 deterministic samples, 0.778 units per step. Every
sample recomputed the complete automatic presentation.

| Steps | Selected offset | H2 | H3/H4 | Ordinary route length | H2 identity change |
|---|---:|---:|---|---:|---|
| 0–3 | -60 | 7 | 4/0 | `1459.126 → 1461.249` | none |
| 4–6 | -60 | 7 | 3/0 | `1461.989 → 1463.514` | none |
| 7–10 | 156 | 5 | 3/0 | `1566.627 → 1569.357` | beacon/Clara and beacon/Thomas-Maya disappear |

H1 stayed zero. No crossing appeared or migrated; the two responsive crossings
persisted through 60% and disappeared at the 70% candidate flip. Curvature was
non-zero at every step. The offset sequence was `-60` seven times, then `156`
four times.

With offset unchanged, each 0.778-unit endpoint step moved the control point
about `0.503–0.506` units and the most-displaced interior sample about
`1.002x` the endpoint step. At 70%, offset side and magnitude were reselected:
the control point moved `216.244` units (`277.899x`) and the route interior
moved up to `166.850x` the endpoint step. The user-observed discontinuous sweep
is therefore reproduced, but it is dominated by candidate reselection rather
than smooth normal rotation while preserving `-60`.

The straight-following counterfactual had H2 `6` for steps 0–5 and `5` for
steps 6–10, so it reduced transient/persistent H2 earlier. It also had H1 `1`
at all 11 steps. Straight-following improves crossing count and continuity but
is not a safe replacement. This supports investigating continuity later, not
P2 before the static route-objective gap.

## Second dynamic control

The persistent C7 pair was beacon/lighthouse — Daniel/Clara. Excluding the
already tested beacon and applying canonical endpoint-ID tie-break selected
`clara`. Clara moved 8.195 units along the crossing-to-endpoint radial direction
in 11 samples while `daniel-clara` was tracked.

Its selected offset remained `-96`; H2 remained the exact baseline seven at
every step; H1/H4 remained zero; and H3 ranged from two to four. Maximum
control-point and route-interior amplification were `0.641x` and `0.992x`.
The straight-following route removed beacon/Daniel at every step but had H1
`1` throughout and began with H3 `5`. No crossing appeared, disappeared, or
migrated under automatic routing. The large sweep discontinuity is therefore
not universal to every curved moving-endpoint route.

Static final quality and dynamic drag-follow quality remain distinct. The
static result demonstrates missed safe candidates. The dynamic result
demonstrates a candidate-transition discontinuity, not a general rule that
all retained curvature amplifies movement.

## Parallel coupling

`clara-thomas-mentors | sofia-archive` and
`clara-thomas-supervises | sofia-archive` are both removed by changing only
Sofia/Archive to `-120`. Neither Clara/Thomas Relation has a safe candidate in
its own 33-member physical-side set. Offset zero is intentionally absent from
those parallel sets; forcing straight would erase the parallel slot identity.
The current parallel candidate spaces alone are therefore insufficient when
each parallel Relation is varied separately, while the coupled crossings are
resolvable through their non-parallel counterpart. No parallel policy change
is justified.

## Locale comparison

Japanese used the same Nodes but reproduced `H1/H2/H3/H4 = 0/4/1/0`, route
length `1513.914`, and H2 1, 2, 3, and 6 from the English list. Its involved
selected offsets were beacon `-60`, Clara/Maya `0`, Daniel/Clara `-96`,
Elias/Clara `0`, and Thomas/Maya `120`. No straight candidate was safe.

The beacon `120` candidate safely reduced Japanese H2 from four to two with
H1/H3/H4 `0/1/0` and no migration. No other involved Relation had a safe
candidate. The 11-step beacon trajectory matched the English transition:
offset `-60 → 156` at 70%, H2 `4 → 2`, and the same `277.899x` control-point
and `166.850x` interior discontinuity. Locale changes the manifested cluster,
but not the P1 prioritization conclusion.

## Controls

The cross-linked control reproduced H1/H2/H3/H4 `0/1/0/0` and route length
`1069.192`. Its sole crossing,
`r001-r-b | r008-a1-b1`, has a current-space safe alternative:
`r008-a1-b1` offset `-132` gives `0/0/0/0` with no migration. Candidate-space
viability is therefore not unique to Lighthouse.

The dense ten-Node control reproduced H1/H2/H3/H4 `4/129/0/0`. The first five
canonical H2 identities were sampled. Three of five had count-reducing
current-space alternatives without increasing the already non-zero H1, but
all three created one to three different H2 identities while producing net H2
counts `128`, `126`, and `121`. Two of five had no safe alternative. This is
evidence for both frequent candidate availability and global coupling; a
crossing-aware local selector cannot be inferred from count alone.

The ten-Node chain and cycle remained H2-free with respective baseline route
lengths `908.456` and `928.853`. The diagnostic correctly treated their empty
H2 sets as no work and did not apply a route replacement.

## Prioritization answers and architecture implication

- Q1: five of seven Lighthouse H2 have a safe alternative in the current
  candidate space.
- Q2: none of those alternatives is straight or lower-curvature.
- Q3: broad Node/provisional-label pressure dominates their Production score;
  true crossing is absent, and earlier routes cannot see future routes.
- Q4: no. Geometry change is not needed for the five proven route-resolvable
  H2; no bounded geometry signal was found for the two unresolved H2.
- Q5: the prior geometry movement changes selected offset discontinuously and
  can change available outcomes, but does not add a complementary safe subset.
- Q6: non-zero candidate reselection materially causes a sweep discontinuity
  and allows two crossings to persist longer than straight-following; smooth
  retained curvature alone did not amplify the tested endpoint motion.

The safe route-only count is five; safe geometry-only count is two; overlap is
two; route-only unique count is three; geometry-only unique count is zero;
neither count is two; straight/lower-curvature safe count is zero. The current
candidate space is sufficient for material improvement, and current
arbitration misses it. Endpoint geometry remains a research variable, but its
necessity is not established for the next intervention. Router objective
should be investigated before inventing a new placement algorithm.

Any next experiment must address sequential visibility explicitly. A frozen
oracle may compare a route with all final routes, while the current Production
router cannot. Adding an arbitrary local `crossing * weight` term would not
solve future-route visibility, global coupling, label trade-offs, or dense-
graph migration. The next checkpoint may investigate the smallest ordinary-
route true-crossing objective boundary; it must not assume that existence
already supplies a deterministic selector.

## Stop boundary

Production runtime changed: **NO**. Routing, Node placement, labels, candidate
set, score, and schema changed: **NO**. Runtime commit: **NONE**. The existing
EN/JA Lighthouse sample candidates remain unaccepted and uncommitted.
`seededPositions` remains separate and untouched. All temporary enumerators,
tests, traces, and outputs are removed at checkpoint closure. Push, tag,
release, deployment, npm publication, and other publication are **NONE**.
