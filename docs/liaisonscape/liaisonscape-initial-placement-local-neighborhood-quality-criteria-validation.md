# LiaisonScape Initial-placement Local-neighborhood Quality Criteria Validation

Date: 2026-09-01
Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-LOCAL-NEIGHBORHOOD-QUALITY-CRITERIA-VALIDATION1`

## Outcome

The validation result is **CASE 2 / EXACT RESULT 2 / DECISION A**:

> **DIRECTION SUPPORTED — THE CRITERION GENERALIZES TO OTHER SAMPLE GRAPHS WITHOUT REQUIRING LABEL/ROUTE INPUT**

The validated source-independent candidate is:

> **A shared neighbor of a related endpoint pair should not be packed so
> tightly into the endpoint neighborhood that ordinary routing and label
> corridors lose low-conflict local alternatives.**

One non-Lighthouse supporting natural instance was found in Ashen Crown, in
both its JA and EN topology copies. Its stored geometry has a substantially
more open shared-neighbor arrangement than the current coordinate-less auto
state, while the measured auto state introduces four route/node-influence
signals and lower foreign clearance without introducing a hard local label
conflict. The stored state has a longer total route length, which is not used
as the primary criterion because route length has lower priority than readable
and non-overlapping presentation.

This opens the next bounded implementation gate:
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-LOCAL-NEIGHBORHOOD-SPACING-EXPERIMENT1`.
That experiment may test one topology-and-Node-geometry placement adjustment
diagnostically. It must not yet be accepted as Production behavior.

## Scope and input/output boundary

The placement candidate was evaluated as an input-side property of graph
topology, current/derived Node positions, and local neighbor relationships.
Node-label rectangles, rendered text width, locale, route occupancy, H2, and
Final-label feedback were used only as output-side evaluation signals. No
label, route, or locale value was fed into the placement criterion.

No arbitrary coordinates, screenshot reconstruction, random perturbation,
optimization, fitted threshold, copied label solver, or copied route scorer
was introduced. `S-STORED` means an existing complete stored coordinate set;
`S-AUTO` means the current coordinate-less `settleInitialPlacement` result.

## Start state and preservation

- LiaisonScape reference HEAD: `fd563340625fd3d88dc25baedc93c4f8fe69e5e7`.
- e2r-spec starting HEAD: `b09380d docs: audit LiaisonScape local placement geometry`.
- Diagnostic worktree: `C:\Users\extra\E2R\e2r-liaison-scape-local-neighborhood-validation`.
- Existing dirty Lighthouse JA/EN samples were copied read-only into the
  diagnostic worktree; the original files were not edited, restored,
  normalized, staged, or committed.
- Protected `sessions/E2R-Session-0052.md` and the protected knowledge
  playbook were not edited or staged.
- Existing dirty paths in `e2r-liaison-scape-routing-preview` were preserved.

## Sample inventory

The inventory covered every available `.e2r.json` sample outside generated
directories. Entity relations count only relations whose two endpoints are
Entities; Event-only relations remain in the total Relation count but cannot
form a graph neighborhood.

| logical sample / paths | locale(s) | Entities | Relations | Entity relations | stored coordinates | Class P / Class O |
|---|---|---:|---:|---:|---|---:|
| LiaisonScape Lighthouse `public/dirty-lighthouse-restoration-demo.{ja,en}.e2r.json` | JA/EN | 10 | 28 | 14 | yes | 1 / 2 each |
| LiaisonScape `examples/coordinate-prototype-migration-ready.e2r.json` | N/A | 3 | 2 | 2 | yes | 0 / 0 |
| LiaisonScape `examples/linkscape-relation-sample.e2r.json` | N/A | 5 | 6 | 6 | no | 0 / 3 |
| NarrativeLine `src/sample/berlin-wall-history.{ja,en}.e2r.json` | JA/EN | 9 | 23 | 7 | no | 0 / 0 each |
| NarrativeLine `public/manual-checks/event-entity-multiple-relations.e2r.json` | N/A | 2 | 4 | 0 | no | 0 / 0 |
| e2r-spec `examples/apollo-11-mission.{ja,en}.e2r.json` | JA/EN | 9 | 66 | 11 | yes | 0 / 0 each |
| e2r-spec `examples/ashen-crown.{ja,en}.e2r.json` | JA/EN | 10 | 57 | 17 | yes | 0 / 21 each |
| e2r-spec `examples/lighthouse-restoration-demo.{ja,en}.e2r.json` | JA/EN | 10 | 28 | 14 | yes | 1 / 2 each |
| e2r-spec `examples/titanic-final-voyage.{ja,en}.e2r.json` | JA/EN | 13 | 40 | 12 | yes | 0 / 0 each |

Across the 15 files there were **4 Class P** and **50 Class O** eligible
instances. Seven instances were selected for bounded detail: every Class P
instance, one lexical Class O instance in each non-Lighthouse sample that had
one, and the Lighthouse Maya reference. The selected detail set stayed below
the limit of 12. The remaining 46 eligible instances were inventory-only;
they were excluded by the deterministic bounded selection rule, not because
they were manually judged good or bad.

The JA/EN pairs for Berlin Wall, Apollo 11, Ashen Crown, both Lighthouse
copies, and Titanic have matching Entity and Entity-relation counts. The
LiaisonScape dirty Lighthouse pair also matches. The coordinate-prototype and
manual-check files have no locale pair.

## Natural-neighborhood definition

For endpoint pair `U,V` and shared neighbor `W`:

- `W` differs from `U` and `V`;
- `W` has at least one direct Entity adjacency to `U`;
- `W` has at least one direct Entity adjacency to `V`;
- self-relations are excluded from adjacency evidence;
- Class P has at least two ordinary Relations between `U,V`;
- Class O has one ordinary Relation between `U,V`.

Relation direction was retained in the exact Relation inventory but ignored
only for determining shared-neighbor membership.

## Detailed instance results

The descriptors are diagnostic observations, not thresholds. `min/max` is the
ratio of the smaller to larger W-to-endpoint distance. Fan-out is reported as
`degree / minimum angular separation` for `W`, `U`, and `V`.

| sample / locale | class and U/V/W | exact local Relations | state | dUV / dWU / dWV | angle; min/max | fan-out W / U / V | result |
|---|---|---|---|---|---|---|---|
| Lighthouse dirty / JA | P Clara/Thomas/Maya | `clara-thomas-mentors`, `clara-thomas-supervises`; W links `clara-maya`, `thomas-maya-friends` | stored = auto | 163.908 / 128.217 / 291.114 | 5.392°; .440 | 3/5.392° / 5/.340° / 2/4.215° | I4 neutral |
| Lighthouse dirty / EN | P Clara/Thomas/Maya | same directed topology | stored = auto | 163.908 / 128.217 / 291.114 | 5.392°; .440 | same | I4 neutral |
| Linkscape relation sample / N/A | O Alice/Bob/Cafe | `relation-alice-bob`; W links `relation-alice-cafe`, `relation-bob-cafe` | auto only | 146.883 / 101.150 / 144.205 | 71.095°; .701 | 3/25.798° / 2/68.250° / 3/40.655° | I5 uninformative |
| Ashen Crown / JA | O Darius/Elara/Kael | `r11`; W links `r10`, `r15` | stored | 240 / 306.105 / 190 | 51.633°; .621 | 5/38.367° / 4/38.367° / 6/31.504° | I1 support |
| Ashen Crown / JA | O Darius/Elara/Kael | same | auto | 112.483 / 85.943 / 104.350 | 71.731°; .824 | 5/18.463° / 4/6.060° / 6/6.990° | I1 comparison state |
| Ashen Crown / EN | O Darius/Elara/Kael | `r11`; W links `r10`, `r15` | stored and auto | same geometry as JA | same geometry as JA | same geometry as JA | I1 support |
| Lighthouse clean / JA | P Clara/Thomas/Maya | `clara-thomas-mentors`, `clara-thomas-supervises`; W links `clara-maya`, `thomas-maya-friends` | stored → auto | 304.138 / 323.110 / 170 → 163.908 / 128.217 / 291.114 | 68.199° → 5.392°; .526 → .440 | W 3/68.199° → 3/5.392° | I1 support |
| Lighthouse clean / EN | P Clara/Thomas/Maya | same directed topology | stored → auto | same geometry as JA | same geometry as JA | same geometry as JA | I2 partial |

The Lighthouse clean JA stored state is the earlier favorable S0 reference;
the auto state is the current derived geometry. The Lighthouse dirty files
already contain the current derived coordinate state, so their stored and auto
rows are intentionally neutral controls. Ashen Crown is the independent
non-Lighthouse support case.

## Routing and presentation evaluation

The detailed replay used the current helpers for R0 and one bounded R1-style
label/route re-evaluation. It did not iterate to a fixed point. Hard-label
owners, halo owners, local route offsets, node influence, and global guards
were observed as output, not placement inputs.

| instance | stored presentation guard → auto presentation guard | local hard/halo observation | local route observation |
|---|---|---|---|
| Lighthouse dirty JA | `8/6`, H2 `1`, foreign `62.554`, length `1828.110` → same | none → none | ordinary local offsets unchanged |
| Lighthouse dirty EN | `8/6`, H2 `2`, foreign `50.660`, length `1833.240` → same | none → none | ordinary local offsets unchanged |
| Linkscape O | auto `3/3`, H2 `0`, foreign `69.216`, length `461.634` | no stored comparison | one auto-only state |
| Ashen JA | `11/6`, H2 `0`, foreign `70.000`, length `3706.664` → `9/8`, H2 `4`, foreign `60.074`, length `2280.739` | none → none; no hard-safety regression | auto adds local high-offset route `r8=192`; stored has `r10=60`, while route length decreases |
| Ashen EN | `12/5`, H2 `0`, foreign `84.021`, length `3662.549` → `9/8`, H2 `4`, foreign `60.074`, length `2274.112` | none → none; no hard-safety regression | text changes ordinary offsets but not the geometry descriptors |
| Lighthouse clean JA | `7/7`, H2 `1`, foreign `67.647`, length `2407.327` → `8/6`, H2 `1`, foreign `62.554`, length `1828.110` | none → none | stored local parallel offsets `+52/+76`; auto `-52/-76` |
| Lighthouse clean EN | `7/7`, H2 `1`, foreign `67.647`, length `2508.208` → `8/6`, H2 `2`, foreign `50.660`, length `1833.240` | stored halo `clara-maya→lighthouse`; auto none | same geometry, different text-mediated outcome |

The Ashen result supports the criterion under the stated priority ordering:
the more open stored shared-neighbor arrangement has fewer Node-influenced
routes and better foreign clearance without a hard-safety regression, even
though its total route length is greater. It is not evidence that stored
coordinates should be copied into the placer.

## Counterevidence and classification

- **I1 SUPPORTS:** Ashen Crown JA and EN; Lighthouse clean JA. The geometry
  side is more open and no hard-safety regression was observed.
- **I2 PARTIAL:** Lighthouse clean EN. The same geometry signal is present,
  but localized label text leaves a halo observation and changes the guard
  magnitude.
- **I3 COUNTEREXAMPLE:** none in the selected detail set. No material hard
  safety regression was found for the more-open comparison states.
- **I4 NEUTRAL:** the dirty Lighthouse JA/EN controls, where stored and auto
  coordinates are already identical.
- **I5 UNINFORMATIVE:** Linkscape relation sample, because only an auto state
  exists; it cannot supply a stored/auto geometry comparison.

The remaining Ashen Class O instances, the remaining Lighthouse Class O
instances, and all non-eligible samples were retained in the inventory but not
promoted to detailed replay by the bounded selection rule. No fixture was
created solely to prove the criterion.

## Locale result

The criterion is computable without labels, routes, locale, or rendered text:
**YES** for each. Geometry descriptors for paired JA/EN datasets are
identical. Presentation is still locale-mediated: Ashen remains directionally
supportive in both locales, while clean Lighthouse JA is I1 and EN is I2 due
to a label-halo difference. The locale classification is **L1: same geometry
signal, different magnitude**. This does not justify a locale-specific
placer.

## Lighthouse Maya reference boundary

The prior Maya result is reproduced as context, not as a new validation
instance: JA Maya-only opened safe pairs `0 → 63`, while EN stayed at `0` on
the same S1-to-S0 path. The exact Maya S0 coordinate remains non-generalized,
and Maya-only remains below Full-S0 presentation quality (`63/42`, `+40/-100`,
H2 `6`). The present validation therefore supports an abstract neighborhood
criterion, not a Maya coordinate or a universal full-S0 result.

## Decision and implementation gate

| question | result |
|---|---|
| Criterion computable from topology and Node geometry only? | YES |
| Supported by another Lighthouse neighborhood? | No additional Lighthouse W was detailed; the clean Maya reference is reproduced as I1/I2 context. |
| Supported by a non-Lighthouse sample? | YES — Ashen Crown JA/EN Class O. |
| Parallel-only? | NO — the supporting Ashen instance is ordinary Class O. |
| Material hard-safety counterexample? | NO in the selected detail set. |
| Locale-independent presentation benefit? | PARTIAL; geometry is identical, label outcome differs in magnitude. |
| Numeric threshold justified? | NO |
| Production Initial Placement change justified? | NO |
| Implementation gate | OPEN for one bounded diagnostic experiment; CLOSED for Production acceptance. |
| Exact next checkpoint | `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-LOCAL-NEIGHBORHOOD-SPACING-EXPERIMENT1` |

The next experiment should use only graph topology and Node geometry as
placement inputs, compare current and candidate behavior across the available
sample set, retain hard safety as a guard, and report presentation metrics as
outcomes. It must not turn the observed descriptors into a numeric threshold
or add label/route state to Initial Placement.

## Cleanup and validation

The temporary sample-inventory harness, coordinate-less replay harness,
feedback/route observer, pair inventory, copied dirty samples, and generated
JSON/output will be removed from the diagnostic worktree. The main dirty
samples, preview changes, protected session, and protected knowledge playbook
will remain untouched.

Validation and checkpoint commit details will be reported after cleanup:

- LiaisonScape `npm.cmd test`, lint, build, and `git diff --check`.
- e2r-spec `npm.cmd run validate`, `git diff --check`, and cached diff check.
- localhost `http://127.0.0.1:5173/e2r-liaison-scape/`: HTTP 200.
- Only this report and `docs/roadmap.md` may be staged.
- No push, tag, release, deployment, or publication.
