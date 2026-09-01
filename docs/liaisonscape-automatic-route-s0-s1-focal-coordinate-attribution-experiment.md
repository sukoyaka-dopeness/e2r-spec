# LiaisonScape S0/S1 Focal Coordinate Attribution Experiment

Date: 2026-09-01

Checkpoint: `E2R-LIAISONSCAPE-AUTOMATIC-ROUTE-S0-S1-FOCAL-COORDINATE-ATTRIBUTION-EXPERIMENT1`

Result: **CASE 7 / EXACT RESULT 7 / DECISION E**

**Within the bounded four-Node hybrid search, two small sufficient masks can
open some JA feedback corridor pairs, but restoring all four focal Nodes does
not reproduce full-S0 success. Full S0 opens 91 safe pairs while H1111 opens
0. The four focal-node neighborhood is therefore insufficient to explain the
full-S0 result.**

## Scope and safety boundary

This was an evidence-only coordinate attribution experiment in the detached
worktree
`C:/Users/extra/E2R/e2r-liaison-scape-s0-s1-coordinate-attribution`, using
LiaisonScape source `fd563340625fd3d88dc25baedc93c4f8fe69e5e7`.

The experiment kept all non-focal Nodes at S1 coordinates and evaluated the
16 masks formed by independently restoring these four focal Nodes to their
exact S0 coordinates:

`[Clara, Thomas, Archive, Lighthouse]`

It directly reused the current `buildEntityGraph`, `getStoredCoordinates`,
`settleInitialPlacement`, `placeNodeLabel`, `placeEdgeLabel`,
`routeGraphEdge`, and current collision/clearance helpers. The one feedback
replay used the existing preview semantics: R0 final Node-label rectangles
were supplied as the R1 routing input; no fixed-point or second feedback pass
was introduced.

No Production Initial Placement, routing, scoring, hard collision, halo,
label placement, feedback semantics, candidate set, parallel policy, sample,
preview, or persisted Coordinate data was changed.

The hybrid masks are diagnostic only. They are not claimed to be real user
placements, Production candidates, Initial Placement candidates, or
persistence candidates.

## Start state and provenance

- LiaisonScape HEAD: `fd563340625fd3d88dc25baedc93c4f8fe69e5e7`
- LiaisonScape dirty state: expected JA/EN Lighthouse samples only
- e2r-spec starting HEAD: `f436fb1`
- e2r-spec dirty state: protected `sessions/E2R-Session-0052.md` only
- routing-preview: existing dirty `src/App.tsx` and `src/viewport.ts`, read-only
- localhost: `http://127.0.0.1:5173/e2r-liaison-scape/`, HTTP 200

The clean HEAD samples supplied S0. Byte-for-byte copies of the main-worktree
dirty samples supplied S1. After removing object-level Coordinate payloads,
S0 and S1 were semantically equal for both locales. All four focal Nodes had
finite exact coordinates in both states. The current coordinate-less
`settleInitialPlacement` result S2 reproduced S1 for this sample.

## Coordinate provenance

The focal coordinate order and S0/S1 deltas were:

| Node | S0 `(x, y)` | S1 `(x, y)` | S0 - S1 delta |
|---|---|---|---|
| Clara | `(350, 180)` | `(178.843134, 165.891269)` | `(171.156866, 14.108731)` |
| Thomas | `(300, 480)` | `(56.743515, 56.541547)` | `(243.256485, 423.458453)` |
| Archive | `(150, 520)` | `(151.046921, -3.685626)` | `(-1.046921, 523.685626)` |
| Lighthouse | `(500, 320)` | `(313.826608, 162.613108)` | `(186.173392, 157.386892)` |

The S1/S2 Clara-Thomas chord is `163.908`; S0 is `304.138`. `1111` is not
full S0: it restores only these four focal Nodes while every other Node stays
at S1.

## Mask convention and controls

The bit order is `[C, T, A, L]`; `1` means exact S0 coordinate and `0` means
S1 coordinate. Thus `0000` is pure S1 and `1111` is the four-focal hybrid.

The pair oracle evaluated the existing 33 x 33 candidate cross-product. A
safe pair means opposite physical sides (`mentors < 0`, `supervises > 0`),
Node-safe, hard label-safe, and mutually occupied-path-safe. Soft halo is
reported separately and is not part of the corridor-open gate. Selected R1
routes were additionally checked against the mask's original R0 provisional
Node-label rectangles.

## JA 16-mask result

`R0/R1` winners are offsets for `mentors/supervises`. `safe` is the R1 safe
pair count; every R0 condition was zero. `orig` lists foreign Node-label
owners hit by the selected R1 routes when checked against the original R0
provisional labels. `move` is focal R0-final to R1-final movement; `-` means
no focal movement.

| Mask | Restored focal Nodes | V | Chord | R0 winners | R1 winners | safe | H2 R0 to R1 | PNR/FNR R0 to R1 | orig mentors/supervises | move |
|---|---|---|---:|---:|---:|---:|---:|---|---|---|
| `0000` | none | V0 | 163.908 | `-52/-76` | `-52/-76` | `0` | `4 to 7` | `1/1 to 0/1` | `-/ -` | Clara 100.313 |
| `0001` | Lighthouse | V0 | 163.908 | `-52/-76` | `-52/-76` | `0` | `2 to 2` | `1/1 to 2/0` | `-/ -` | `-` |
| `0010` | Archive | V0 | 163.908 | `-52/-76` | `-52/-76` | `0` | `4 to 4` | `0/0 to 0/0` | `-/ -` | `-` |
| `0011` | Archive, Lighthouse | V0 | 163.908 | `-52/-76` | `-52/-76` | **12** | `2 to 2` | `0/1 to 1/0` | `-/ -` | `-` |
| `0100` | Thomas | V0 | 336.665 | `-196/220` | `-196/232` | `0` | `3 to 3` | `2/2 to 2/2` | `Maya/Beacon` | `-` |
| `0101` | Thomas, Lighthouse | V0 | 336.665 | `-208/-232` | `-208/-232` | `0` | `4 to 4` | `2/4 to 4/2` | `Maya/Maya` | `-` |
| `0110` | Thomas, Archive | V0 | 336.665 | `-196/220` | `-196/220` | `0` | `3 to 3` | `2/2 to 2/2` | `Maya/Beacon` | `-` |
| `0111` | Thomas, Archive, Lighthouse | V0 | 336.665 | `-208/-232` | `-208/-232` | `0` | `4 to 4` | `2/4 to 4/2` | `Maya/Maya` | `-` |
| `1000` | Clara | V1 | 318.184 | `-172/-172` | `-172/-172` | `0` | `8 to 8` | `0/0 to 1/0` | `-/ -` | `-` |
| `1001` | Clara, Lighthouse | V0 | 318.184 | `-136/-112` | `40/-40` | **16** | `5 to 5` | `1/1 to 4/0` | `Archive+Authority/-` | Clara 193.140 |
| `1010` | Clara, Archive | V1 | 318.184 | `-172/-172` | `-172/-172` | `0` | `5 to 5` | `0/1 to 1/1` | `-/ -` | `-` |
| `1011` | Clara, Archive, Lighthouse | V0 | 318.184 | `-52/-76` | `-148/-124` | `0` | `2 to 2` | `1/0 to 2/3` | `-/ -` | Clara 38.922 |
| `1100` | Clara, Thomas | V1 | 304.138 | `-220/-220` | `-208/-40` | `0` | `1 to 1` | `0/0 to 2/1` | `Maya/Maya` | `-` |
| `1101` | Clara, Thomas, Lighthouse | V0 | 304.138 | `-52/-76` | `-52/-76` | `0` | `4 to 4` | `3/1 to 3/1` | `Maya/Maya` | `-` |
| `1110` | Clara, Thomas, Archive | V1 | 304.138 | `-220/-220` | `-208/-40` | `0` | `1 to 1` | `0/0 to 2/1` | `Maya/Maya` | `-` |
| `1111` | Clara, Thomas, Archive, Lighthouse | V0 | 304.138 | `-52/-76` | `-52/-76` | **0** | `4 to 4` | `3/1 to 3/1` | `Maya/Maya` | `-` |

V1 means the hybrid introduced a new Node-body overlap relative to S1. V1
rows are retained for completeness but are not eligible minimal sufficient
sets. H2 and route presentation metrics are evidence, not a weighted success
score.

## JA presentation metrics

The format is `straight/curved/ordinary route length/foreign body clearance`.
Ordinary route length excludes self-loops. These values are reported
separately from corridor feasibility.

| Mask | R0 | R1 |
|---|---|---|
| `0000` | `5/7/1513.914/23.492` | `6/6/1449.785/23.492` |
| `0001` | `5/7/2043.482/31.590` | `5/7/2051.365/29.643` |
| `0010` | `5/7/1672.598/23.492` | `6/6/1671.484/23.492` |
| `0011` | `5/7/2202.166/33.128` | `5/7/2210.049/29.643` |
| `0100` | `6/6/1807.350/23.492` | `7/5/1792.548/23.492` |
| `0101` | `6/6/2353.021/30.068` | `6/6/2344.997/30.068` |
| `0110` | `6/6/2021.751/23.492` | `7/5/2020.636/23.492` |
| `0111` | `6/6/2567.422/30.068` | `5/7/2596.088/30.068` |
| `1000` | `5/7/1759.417/-2.334` | `6/6/1724.764/-2.334` |
| `1001` | `5/7/2112.248/23.033` | `4/8/2013.013/28.095` |
| `1010` | `5/7/1981.115/-2.334` | `6/6/1925.375/-2.334` |
| `1011` | `5/7/2260.237/23.033` | `4/8/2342.769/26.712` |
| `1100` | `6/6/1687.633/-2.334` | `6/6/1616.381/-2.334` |
| `1101` | `6/6/1947.496/23.033` | `5/7/1957.082/28.095` |
| `1110` | `6/6/1902.034/-2.334` | `6/6/1830.782/-2.334` |
| `1111` | `6/6/2161.897/23.033` | `5/7/2171.483/28.095` |

## Minimal sufficient and conservative-opening sets

The inclusion-minimal V0 masks with `R1 safe pair > 0` are:

- `0011` = Archive + Lighthouse;
- `1001` = Clara + Lighthouse.

The intersection of these opening masks is Lighthouse. The bounded wording is
only: **Lighthouse appears in every minimal sufficient set within this
four-Node search.** This does not establish that Lighthouse is globally
necessary.

The only conservative-opening mask in this bounded search is `0011`: it has
an open corridor and both selected R1 routes are hard-safe against its R0
provisional labels. `1001` is not conservative because its selected R1
`mentors=+40` route hits the original `Archive` and `Authority` label
rectangles. A conservative-opening mask is not Production acceptance.

## Boundary traces

The first-side-switch traces were recorded only for the S1 baseline, both
minimal sufficient masks, their immediate failing subsets, H1111, and full S0.

- `0000` R0: `+40` has Clara+Archive hard owners, `+52` has the same owners,
  and `+64` adds Lighthouse. No positive base-side hard-safe candidate exists;
  the first hard-safe candidate is `-52`, which is selected. R1 removes hard
  ownership at `+40` but leaves Clara halo pressure; `+52` and `+64` remain
  Clara-hard, so the selected winner remains `-52`.
- `0011` R0: positive `+40`, `+52`, and `+64` are Clara-hard. R1 makes those
  candidates hard-safe but Authority-halo-positive; the selected winner still
  remains `-52`. Its 12 open pairs are diagnostic, not a selected bundle
  change.
- `1001` R0: positive `+40`, `+52`, and `+64` are Archive+Authority-hard;
  `-52` is Clara-hard. R1 makes `+40` the selected `mentors` winner and
  `-40` the selected `supervises` winner, but the selected R1 result is not
  safe against the original R0 labels.
- `1111`: restoring all four focal Nodes still leaves no hard-safe opposite-side
  pair; the selected bundle remains `-52/-76`.
- Full S0: the separate all-Node S0 control opens 91 safe pairs and selects
  `+40/-40`. Its favorable result cannot be attributed to the four focal
  Nodes alone.

The immediate failing subsets are included in the JA table. Pairwise focal
distances for the boundary masks were:

| Mask | C-T | C-A | C-L | T-A | T-L | A-L |
|---|---:|---:|---:|---:|---:|---:|
| `0000` | 163.908 | 171.840 | 135.023 | 111.895 | 278.106 | 232.707 |
| `0001` | 318.184 | 270.782 | 40.135 | 111.895 | 278.106 | 232.707 |
| `0010` | 336.665 | 171.840 | 135.023 | 506.102 | 317.688 | 232.707 |
| `0011` | 304.138 | 270.782 | 40.135 | 506.102 | 317.688 | 232.707 |
| `1000` | 163.908 | 171.840 | 356.218 | 111.895 | 515.642 | 475.963 |
| `1001` | 318.184 | 270.782 | 205.183 | 111.895 | 515.642 | 475.963 |
| `1111` | 304.138 | 394.462 | 205.183 | 155.242 | 256.125 | 403.113 |

These distances are observations for attribution only. They are not
Production target distances or numeric Initial Placement requirements.

## H1111 versus full S0

| Control | Coordinates | JA R1 safe pair | R1 selected bundle |
|---|---|---:|---:|
| H1111 | four focal Nodes S0, all other Nodes S1 | `0` | `-52/-76` |
| Full S0 | every Node S0 | **`91`** | `+40/-40` |

This is the critical gate. **The four focal Nodes are not sufficient** within
this bounded attribution search. At least one non-focal coordinate difference,
or a broader global topology interaction, is required before a placement
parameter change can be justified.

## EN bounded replay and locale class

The EN expansion followed the attachment's gate rather than running a second
unbounded 16-mask search. It evaluated H0000, H1111, all JA minimal masks and
their immediate one-Node deletion subsets, and full S0.

| EN mask/control | V | R1 safe pair | R1 winners | selected R1 vs R0 labels | H2 R0 to R1 |
|---|---|---:|---|---|---:|
| `0000` | V0 | `24` | `+40/-40` | safe/safe | `7 to 7` |
| `0001` | V0 | `24` | `+40/-40` | safe/safe | `5 to 5` |
| `0010` | V0 | `0` | `-52/-76` | safe/safe | `4 to 4` |
| `0011` | V0 | `0` | `-52/-76` | safe/safe | `2 to 2` |
| `1000` | V1 | `0` | `-172/-172` | safe/safe | `8 to 8` |
| `1001` | V0 | `16` | `+40/-40` | Authority / safe | `5 to 8` |
| `1111` | V0 | `0` | `-52/-76` | Maya / Maya | `4 to 4` |
| Full S0 | control | **`91`** | `+40/-40` | not a focal hybrid | `0` |

The JA masks do not port as a single sufficient pattern: JA's `0011` opens
12 pairs but EN's `0011` opens none; JA's `1001` opens 16 and EN's `1001`
also opens 16, but EN retains an Authority original-label conflict. The
locale class is **L4 / JA-specific and partially portable** rather than a
locale-independent rule.

## Label movement and manual S3 boundary

For JA, the largest R0 provisional-to-final focal movement in the opening
masks is Clara `83.494` for `0011` and Clara `193.140` for `1001`. R0-final to
R1-final focal movement is zero for `0011` and Clara `193.140` for `1001`.
The S1 baseline has the previously observed Clara R1 movement of `100.313`.

The favorable user screenshot remains manual S3 context only. Its exact Node
coordinates are unavailable, so no screenshot-to-coordinate reconstruction
was attempted. Full S0 is a favorable available control, not proof of exact
S3 reproduction.

## Result and decision

- Result case: **CASE 7**, with CASE 5-style local sufficient masks and
  locale-dependent EN behavior as secondary observations.
- Exact result: **7 - PARTIAL: H1111 REMAINS CLOSED WHILE FULL-S0 OPENS, SO
  THE FOUR-NODE NEIGHBORHOOD IS INSUFFICIENT.**
- Decision A endpoint geometry: **not established as sufficient**.
- Decision B foreign-label geometry: **partial observation only**.
- Decision C focal neighborhood: **not sufficient**.
- Decision D multiple sufficient geometry paths: **observed within the hybrid
  search, but not the primary decision**.
- Decision E global/outside-focal topology: **selected**.
- Decision F locale-dependent attribution: **secondary observation**.
- Decision G mixed: **secondary classification**.
- Decision H unresolved: **no**; the bounded insufficiency boundary is clear.
- Production Initial Placement change justified: **NO**.
- Production feedback adoption justified: **NO**.
- Numeric placement threshold introduced: **NO**.
- Broader `LOCALE-START-REGRESSION-ISOLATION1`: **deferred for immediate
  execution**, not completed or deleted.

The selected next bounded checkpoint is exactly:

`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-GLOBAL-TOPOLOGY-ATTRIBUTION-AUDIT1`

Its purpose is to identify which non-focal S0/S1 coordinate differences are
required before touching Initial Placement parameters. It is selected only
and is not started by this record.

## Cleanup and validation boundary

The temporary coordinate-attribution harness, copied dirty samples, generated
JSON output, and temporary coordinate snapshots were removed from the
detached worktree. The temporary worktree was then removed. Main dirty
samples, the routing-preview worktree, localhost, the protected session, and
the protected knowledge playbook were preserved. `seededPositions` was not
changed.

Validation after cleanup:

- LiaisonScape `npm.cmd test`: PASS, 280/280
- LiaisonScape `npm.cmd run lint`: PASS
- LiaisonScape `npm.cmd run build`: PASS
- LiaisonScape `git diff --check`: PASS
- e2r-spec `npm.cmd run validate`: PASS
- e2r-spec staged diff check: PASS
- localhost route: HTTP 200

No LiaisonScape commit was created. The e2r-spec checkpoint is the exact-path
documentation commit for this report and the synchronized roadmap entry;
publication and push remain unauthorized and were not performed.
