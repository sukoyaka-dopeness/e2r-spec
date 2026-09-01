# LiaisonScape Initial-placement Non-focal Node Geometry Criteria Audit

Date: 2026-09-01
Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-NONFOCAL-NODE-GEOMETRY-CRITERIA-AUDIT1`

## Outcome

The primary result is **CASE 11 / EXACT RESULT 5 / DECISION B**:

> **MIXED — MAYA'S COORDINATE CHANGE COMBINES DIRECT CORRIDOR CLEARANCE WITH LABEL/ROUTE PROPAGATION**

The one dominant measurable component selected for the next step is shared-
endpoint neighbor spacing: the arrangement of the non-focal Node Maya, which
is directly related to both parallel endpoints Clara and Thomas, and its
nearby Beacon neighborhood. This is a source-independent geometry criterion
candidate, not a coordinate prescription or a numeric threshold.

Direct Maya-label clearance is a material signal, but it is not sufficient as a
complete explanation: at the last closed coarse point the inspected Maya-label
candidates were already clear while the selected pair remained closed. The
same Maya movement also changes final Node labels and ordinary routes. The
held-label controls confirm that these propagated effects materially change
the result, but do not establish an exclusive direct-versus-indirect cause.

The secondary locale result is **L3**: the same Node-coordinate path opens JA
at its upper end but remains closed in EN. Therefore the criterion must be
validated against label text and other local neighborhoods before any
Production placement change.

## Scope and safety

This was a diagnostic geometry-criteria audit only. It reused the existing
LiaisonScape graph, label, route, feedback, and collision helpers in a detached
worktree. It did not change Production Initial Placement, `settleInitialPlacement`,
repulsion, attraction, settling iterations, target Edge length, seeded
positions, routing scores, label pressure, hard/halo collision semantics,
candidate sets, label placement, feedback semantics, parallel slots,
occupied-path semantics, self-loops, connectors, samples, persisted
coordinates, preview code, or release files.

The hybrid states below are diagnostic states only. They must not be treated
as user layouts or Production candidates.

## Start state and preservation gate

- LiaisonScape reference HEAD: `fd563340625fd3d88dc25baedc93c4f8fe69e5e7`.
- e2r-spec starting HEAD: `788bc1695c82246064ae82c4b952304ddf368df1`.
- Diagnostic worktree: `C:\Users\extra\E2R\e2r-liaison-scape-maya-geometry-criteria-audit`.
- Expected dirty LiaisonScape sample files were preserved and were not staged:
  `public/lighthouse-restoration-demo.en.e2r.json` and
  `public/lighthouse-restoration-demo.ja.e2r.json`.
- Protected `sessions/E2R-Session-0052.md` was not edited or staged.
- The existing dirty paths in `e2r-liaison-scape-routing-preview` were
  preserved.

The clean JA sample and the read-only copy of the dirty JA sample remained
semantically equivalent after excluding coordinate-extension payloads. The
same read-only handling was used for EN. No source sample was normalized or
rewritten.

## Baseline gate

The four focal Nodes Clara, Thomas, Archive, and Lighthouse were held at S0;
all six non-focal Nodes were held at S1 for the H1111 baseline. Maya-only
means that only Maya was changed to its exact S0 coordinate.

| JA state | R1 safe/full-current pair | selected R1 bundle | H2 | PNR/FNR | straight/curved | route length | foreign clearance |
|---|---:|---:|---:|---:|---:|---:|---:|
| H1111 | 0/0 | `-52/-76` | 4 | 3/1 | 5/7 | 2171.482946 | 28.094869 |
| Maya-only | 63/42 | `+40/-100` | 6 | 1/0 | 6/6 | 2572.823717 | 28.094869 |
| Full S0 | 91/91 | `+40/-40` | 0 | 0/0 | 9/3 | 1871.188923 | 55.286159 |

EN Maya-only remained closed: safe pair `0`, selected bundle `-64/-88`.
Thus Maya-only is not a locale-independent solution and does not reproduce
the full-S0 presentation boundary.

## Maya source and graph role

The live Dataset confirmed the following diagnostic identity and adjacency:

- Maya S0: `(470, 480)`.
- Maya S1: `(258.741072, 266.170103)`.
- S0 minus S1: `(+211.258928, +213.829897)`, magnitude `300.588689`.
- Direct Relations include Clara → Maya (`clara-maya`) and Thomas → Maya
  (`thomas-maya-friends`).
- Maya is also adjacent to Beacon through `maya-beacon`.

Distances from Maya to the relevant Nodes changed as follows:

| state | Clara | Thomas | Beacon | Archive | Lighthouse |
|---|---:|---:|---:|---:|---:|
| S1 | 125.513 | 217.774 | 100.414 | 276.142 | 247.191 |
| S0 | 323.110 | 170.000 | 335.547 | 322.490 | 162.788 |

The three measured angles also move substantially: Clara–Maya–Thomas
`122.436° → 68.199°`, Clara–Maya–Beacon `169.680° → 39.897°`, and
Thomas–Maya–Beacon `67.884° → 28.301°`.

## Nine-point S1-to-S0 sweep

The diagnostic path was `P(t) = S1 + t * (S0 - S1)`. It is not a Production
motion path. Every evaluated point had finite coordinates and no invalid body
overlap was observed; no V1/V2 state was used as evidence for a placement rule.

The table reports R0 and R1 selected bundles, R1 safe-pair counts, and the
R0-to-R1 quality indicators. `F` is minimum foreign-Node clearance.

| t | Maya `(x,y)` | Maya–Clara / Thomas / Beacon | R0 bundle | R1 bundle | R1 safe/full | H2 | PNR/FNR | straight/curved | length | F |
|---:|---|---|---|---|---:|---:|---:|---:|---:|---:|
| 0 | (258.741, 266.170) | 125.513 / 217.774 / 100.414 | -52/-76 | -52/-76 | 0/0 | 4 | 3/1 | 5/7 | 2171.483 | 28.095 |
| .125 | (285.148, 292.899) | 130.199 / 187.690 / 114.080 | -88/-112 | -52/-76 | 0/0 | 4 | 4/1 | 4/8 | 2187.303 | 28.095 |
| .25 | (311.556, 319.628) | 144.823 / 160.788 / 137.000 | 148/148 | 136/160 | 0/0 | 6 | 3/0 | 6/6 | 2274.298 | 24.507 |
| .375 | (337.963, 346.356) | 166.791 / 138.931 / 165.370 | 148/148 | 76/124 | 0/0 | 6 | 2/0 | 5/7 | 2254.798 | 28.095 |
| .5 | (364.371, 373.085) | 193.619 / 124.797 / 196.847 | 148/148 | 40/64 | 0/0 | 6 | 3/2 | 6/6 | 2252.767 | 28.095 |
| .625 | (390.778, 399.814) | 223.564 / 121.122 / 230.161 | 148/148 | 40/64 | 0/0 | 6 | 3/0 | 7/5 | 2290.066 | 28.095 |
| .75 | (417.185, 426.543) | 255.533 / 128.803 / 264.619 | 148/148 | -52/-40 | 0/0 | 6 | 4/0 | 5/7 | 2369.968 | 28.095 |
| .875 | (443.593, 453.271) | 288.854 / 146.059 / 299.826 | 148/148 | 40/-112 | 49/35 | 6 | 1/0 | 6/6 | 2483.962 | 28.095 |
| 1 | (470.000, 480.000) | 323.110 / 170.000 / 335.547 | 148/148 | 40/-100 | 63/42 | 6 | 1/0 | 6/6 | 2572.824 | 28.095 |

At the coarse sampling resolution the last closed point was `.75` and the
first open point `.875`. Midpoint refinement showed why this must not be
converted into a binary threshold:

| refined t | R1 safe pair | selected bundle |
|---:|---:|---|
| .8125 | 0 | `-52/-40` |
| .84375 | 28 | `+40/-40` |
| .828125 | 0 | `-52/-148` |
| .8359375 | 14 | `+40/-40` |

The safe-pair result is sensitive to discrete winner and route occupancy
changes inside the coarse bracket. The observed interval is evidence for a
transition region only; it is not a proposed Production cutoff.

## Component probes

The axis probes separate the displacement components without changing any
Production rule. PX is `(S0.x, S1.y)`, PY is `(S1.x, S0.y)`, P50X is the
halfway X position with S1 Y, and P50Y is S1 X with halfway Y.

| probe | R1 bundle | safe/full | H2 | PNR/FNR | straight/curved | route length | foreign clearance |
|---|---|---:|---:|---:|---:|---:|---:|
| PX | `+40/-52` | 63/63 | 12 | 1/0 | 4/8 | 2624.659 | 19.449 |
| PY | `-52/-76` | 0/0 | 4 | 3/0 | 6/6 | 2329.559 | 28.095 |
| P50X | `+76/+124` | 0/0 | 6 | 3/4 | 5/7 | 2274.489 | 27.697 |
| P50Y | `-52/-76` | 0/0 | 4 | 3/0 | 6/6 | 2160.061 | 28.095 |

PX is a useful causal probe for horizontal component involvement, but it is
not a usable axis rule: its presentation quality is worse than Full S0 (H2
12, 4/8 straight/curved, and lower foreign clearance). The result supports
the broader shared-endpoint-neighborhood criterion rather than “move Maya on
X”.

## Direct Maya-label corridor evidence

At `t=0`, the inspected `mentors` and `supervises` candidates were hard-
blocked by Maya's own provisional label. At the last closed point `t=.75`,
the inspected Maya-label candidates were already clear of both hard and halo
collision. At the first open point `.875` and at S0, the same candidates were
also clear. The distances for the selected-direction probes were:

| point | mentors +40 / +52 / -52 | supervises -40 / +52 |
|---|---|---|
| t=.75 | 66.766 / 69.029 / 47.542 | 50.343 / 69.029 |
| t=.875 | 101.234 / 103.343 / 83.644 | 86.078 / 103.343 |
| t=1 | 137.340 / 139.349 / 120.593 | 122.914 / 139.349 |

Because `.75` is still closed despite these clear direct candidates, direct
Maya-label clearance is a contributing condition, not the complete opening
criterion. At the first open selected R1 candidates, no hard or halo owner
remained. At the preceding boundary, alternate candidate frontiers could
still expose Beacon as a halo owner. This is consistent with local-neighbor
and propagated-route interaction.

## Label and route propagation

Relative to the H1111 R1 result at `t=0`, the first open point `.875` changed
the final positions of the Node labels for `lighthouse`, `maya`, and `beacon`.
It changed nine ordinary routes:

`clara-thomas-supervises`, `clara-thomas-mentors`, `clara-maya`,
`elias-clara`, `maya-beacon`, `beacon-self-monitor`,
`beacon-self-calibrate`, `thomas-maya-friends`, and
`beacon-lighthouse-installed-in`.

The exact direct Maya routes are therefore not the only affected routes. The
diagnostic classification is:

- direct shared-endpoint geometry: **material**;
- indirect Node-label replacement: **material**;
- route-predecessor / occupied-path propagation: **material**;
- a single exclusive mechanism: **not established**.

## Held-label controls

At the first open position `.875`, two bounded controls were run using
existing rectangles only; no new label solver was introduced.

| control | safe/full | selected bundle | H2 | PNR/FNR | straight/curved | route length |
|---|---:|---|---:|---:|---:|---:|
| Non-Maya labels held at H1111 final; Maya normal | 42/42 | `+40/-40` | 6 | 0/0 | 7/5 | 2455.352153 |
| Maya label held at H1111 final; other labels normal | 35/20 | `+40/-112` | 6 | 0/0 | 4/8 | 2601.076009 |

Both controls remain open, but they produce materially different corridor and
presentation results. This supports a mixed mechanism and prevents the audit
from claiming that direct Maya-label clearance or non-Maya propagation alone
is the exclusive cause.

## Geometry criteria candidates

| candidate | finding |
|---|---|
| G1 direct Maya-label clearance | Supported as a contributing condition, not sufficient by itself. |
| G2 Maya–Clara spacing | Material descriptor; not isolated from the shared neighborhood. |
| G3 Maya–Thomas spacing | Material descriptor; not isolated from the shared neighborhood. |
| G4 Maya–Beacon / local-neighbor spacing | Supported as part of the local neighborhood signal. |
| G5 local angular / fan-out geometry | Supported as a secondary descriptor; the measured angles change strongly. |
| G6 indirect Node-label replacement cascade | Supported by changed final labels and held-label controls. |
| G7 route-predecessor / occupied-path cascade | Supported by nine ordinary route changes. |
| G8 multi-condition / non-monotonic behavior | Supported by the refined open/closed alternation. |
| G9 locale-specific text geometry | Supported by the JA/EN same-path difference. |
| G10 unresolved | Not the primary classification; the dominant local object is identifiable, though its exact production criterion is not. |

The source-independent wording retained for the next checkpoint is:

> a directly connected shared-neighbor arrangement that leaves more usable
> routing and label corridor around the parallel endpoints and their local
> fan-out.

This deliberately avoids a required Maya coordinate, a fixed distance, an
axis preference, or a numeric acceptance threshold.

## EN same-path replay

The identical nine-point Node-coordinate path was replayed with the EN sample.
Every sampled point remained at safe pair `0`; PX also opened to `63`, while
PY remained at `0`. The main path was therefore closed at `.875` and `1` in
EN even though JA opened at those points.

| t | R1 bundle | safe/full | straight/curved | route length |
|---:|---|---:|---:|---:|
| 0 | `-196/-172` | 0/0 | 5/7 | 2308.311 |
| .125 | `-52/-76` | 0/0 | 5/7 | 2245.929 |
| .25 | `+136/+160` | 0/0 | 6/6 | 2274.298 |
| .375 | `+148/+148` | 0/0 | 5/7 | 2421.260 |
| .5 | `+40/+64` | 0/0 | 6/6 | 2239.596 |
| .625 | `+40/+64` | 0/0 | 7/5 | 2290.066 |
| .75 | `-52/-40` | 0/0 | 5/7 | 2373.822 |
| .875 | `-64/-160` | 0/0 | 5/7 | 2588.567 |
| 1 | `-64/-88` | 0/0 | 5/7 | 2669.088 |

This is **L3: JA opens, EN remains closed along the entire S1-to-S0 path**.
The result is evidence that text and label geometry participate in the
criterion. No extrapolation past S0 was made.

## Initial-placement source observation

The current source still derives coordinate-less opening from the deterministic
`solveAutoLayout` mechanics through `settleInitialPlacement`. The observed
mechanics rank by graph degree, seed components on rings, apply bounded
same-component clearance pushes, and apply neighbor attraction for three
initial settling iterations. The source does not use label rectangles, route
occupancy, or the measured presentation criteria as inputs. This observation
does not justify changing that algorithm in this checkpoint.

## Decision

| question | result |
|---|---|
| Is a bounded local geometry change sufficient to open JA? | Yes, Maya-only opens R1 from `0` to `63`. |
| Is the direct Maya label the sole explanation? | No; it is clear at `.75` while the pair remains closed. |
| Are shared-endpoint/local-neighbor descriptors material? | Yes; this is the one dominant measurable component selected for follow-up. |
| Are label and route propagation material? | Yes; three final Node labels and nine ordinary routes change by the first open point. |
| Is the transition a stable numeric threshold? | No; midpoint refinement shows discrete non-monotonic behavior. |
| Does the criterion reproduce Full-S0 quality? | No; Maya-only remains `+40/-100`, H2 `6`, and safe/full `63/42`. |
| Does the criterion transfer unchanged to EN? | No; same path is L3, with EN closed on the main sweep. |
| Production Initial Placement change justified? | No. |
| Feedback adoption or semantic change justified? | No. |
| Numeric target distance justified? | No. |
| Exact next checkpoint | `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-LOCAL-NEIGHBORHOOD-QUALITY-CRITERIA-VALIDATION1` |

The next checkpoint is selected only. It should test the abstract local-
neighborhood criterion against other Lighthouse neighborhoods, available
sample graphs, and both locales without changing Production placement.

## Cleanup and validation

The temporary interpolation harness, probe generator, feedback harness,
held-label controls, pair oracle, copied samples, generated JSON/CSV/output,
and temporary worktree were removed after the diagnostic run. Main-repository
dirty samples, preview dirty paths, the protected session, and protected
knowledge playbook were preserved.

Validation and commit details are recorded after cleanup:

- LiaisonScape `npm.cmd test`, lint, build, and `git diff --check`: PASS.
- e2r-spec `npm.cmd run validate`, `git diff --check`, and cached diff check:
  PASS.
- `http://127.0.0.1:5173/e2r-liaison-scape/`: HTTP 200.
- Only this report and `docs/roadmap.md` were staged for the spec checkpoint.
- No push, tag, release, deployment, or publication occurred.
