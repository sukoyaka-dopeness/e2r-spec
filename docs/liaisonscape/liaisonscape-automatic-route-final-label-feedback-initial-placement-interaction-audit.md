# LiaisonScape Automatic-Route Final-Label Feedback / Initial-Placement Interaction Audit

Date: 2026-09-01

Checkpoint: `E2R-LIAISONSCAPE-AUTOMATIC-ROUTE-FINAL-LABEL-FEEDBACK-INITIAL-PLACEMENT-INTERACTION-AUDIT1`

Result: **CASE 5 / EXACT RESULT 5 / DECISION F**

**Final-label feedback can open the balanced parallel corridor, but its effect
changes with starting geometry and locale. The favorable HEAD geometry plus
one feedback replay gives a clean result in both locales; the current
coordinate-less/dirty geometry does not reproduce that result in JA, and the
EN feedback winner is hard-unsafe against the original provisional label.**

## Scope and safety boundary

This was a bounded interaction audit in the detached worktree
`C:/Users/extra/E2R/e2r-liaison-scape-feedback-placement-interaction-audit`,
using LiaisonScape source
`fd563340625fd3d88dc25baedc93c4f8fe69e5e7`.

The audit compared three available starting geometries:

- `S0`: clean HEAD stored coordinates;
- `S1`: the current main-worktree dirty stored coordinates; and
- `S2`: the current Production coordinate-less `settleInitialPlacement`
  result, with stored object coordinates removed from a temporary Dataset
  copy.

It compared two routing modes:

- `R0`: current provisional Node labels and current routing; and
- `R1`: the existing preview's one finite feedback replay, using the R0 final
  Node-label rectangles as the next routing input.

The harness directly reused the current `settleInitialPlacement`,
`placeNodeLabel`, `placeEdgeLabel`, `routeGraphEdge`, and sampled label-distance
helpers. It did not copy route scoring, candidate generation, placement, or
feedback logic into a second solver. Pair counts are diagnostic cross-products
of the existing candidate sets; they are not a new objective.

No Production Initial Placement, routing, score, label placement, collision
geometry, parallel policy, sample, preview, schema, release, or publication
change was made. The supplied screenshot was not used to infer coordinates.

## Start state and provenance

- LiaisonScape HEAD: `fd563340625fd3d88dc25baedc93c4f8fe69e5e7`
- LiaisonScape dirty state: the expected JA/EN Lighthouse samples only
- e2r-spec starting HEAD: `1f83b21eb43481283afdec63d3b66fff10005dd4`
- e2r-spec dirty state: protected `sessions/E2R-Session-0052.md` only
- routing-preview: existing dirty `src/App.tsx` and `src/viewport.ts`, read-only
- localhost: `http://127.0.0.1:5173/e2r-liaison-scape/`, HTTP 200

`S0` was read from the clean sample in the audit worktree. `S1` was copied
byte-for-byte from the main worktree's dirty sample. After removing object
Coordinate payloads, S0 and S1 were semantically equal in both locales; the
difference was coordinate-only. `S2` reproduced S1 exactly in the measured
coordinates, so current dirty and coordinate-less Production geometry are the
same state for this sample.

The favorable manual state in the supplied screenshot is `S3` only as an
observation. It is **not exactly recoverable** from the available artifacts,
and no screenshot-to-coordinate reconstruction was attempted.

## Initial Placement source audit

The Production entry point accepts stored coordinates through the existing
Dataset coordinate boundary. When no stored coordinates exist, App calls
`settleInitialPlacement` with Entity IDs and Entity-to-Entity Relations. The
current helper is deterministic and bounded: it uses deterministic component
seeds, degree-centered ordering, bounded repulsion/attraction updates, and
`INITIAL_PLACEMENT_SETTLING_ITERATIONS = 3`.

`seededPositions` was not changed or used as a substitute for the S2 replay.
Stored Coordinate data remains the explicit boundary: S0/S1 use stored
positions, while S2 uses only the current coordinate-less derived result.

## Starting geometry descriptors

| Locale / start | bounds W x H | minimum Node-center distance | body overlaps | Clara/Thomas chord |
|---|---:|---:|---:|---:|
| JA S0 HEAD | `500 x 340` | `122.066` | `0` | `304.138` |
| JA S1 dirty | `489.296 x 324.600` | `100.414` | `0` | `163.908` |
| JA S2 auto | `489.296 x 324.600` | `100.414` | `0` | `163.908` |
| EN S0 HEAD | `500 x 340` | `122.066` | `0` | `304.138` |
| EN S1 dirty | `489.296 x 324.600` | `100.414` | `0` | `163.908` |
| EN S2 auto | `489.296 x 324.600` | `100.414` | `0` | `163.908` |

The major geometric difference is not a body overlap. It is the much shorter
Clara/Thomas chord and closer surrounding label corridor in S1/S2. This makes
the same offset values visually and collision-wise more consequential.

## Factorial result matrix

The `safe pair` column is the number of hard-safe, Node-safe, mutually
occupied-safe opposite-side swapped pairs (`mentors < 0`, `supervises > 0`)
in the existing 33 x 33 candidate space. It is evaluated against that pass's
label rectangles. `R1 vs R0 label` records whether the selected R1 route is
safe against the original R0 provisional rectangles, which is a separate
conservative safety check.

| Locale / start | R0 winners | R1 winners | safe pair R0 -> R1 | R0 metrics S/C/L/H2/PNR/FNR/clearance | R1 metrics S/C/L/H2/PNR/FNR/clearance |
|---|---|---|---:|---|---|
| JA S0 | `196 / 172` | `+40 / -40` | `0 -> 91` | `3/9/2260.661/2/0/0/30.347` | `9/3/1871.189/0/0/0/55.286` |
| JA S1 | `-52 / -76` | `-52 / -76` | `0 -> 0` | `5/7/1513.914/4/1/1/23.492` | `6/6/1449.785/7/0/1/23.492` |
| JA S2 | `-52 / -76` | `-52 / -76` | `0 -> 0` | `5/7/1513.914/4/1/1/23.492` | `6/6/1449.785/7/0/1/23.492` |
| EN S0 | `184 / 208` | `+40 / -40` | `0 -> 91` | `3/9/2311.319/2/0/0/24.416` | `9/3/1871.189/0/0/0/55.286` |
| EN S1 | `-64 / -88` | `+40 / -40` | `0 -> 24` | `6/6/1459.126/7/0/1/18.615` | `4/8/1465.185/7/1/1/23.492` |
| EN S2 | `-64 / -88` | `+40 / -40` | `0 -> 24` | `6/6/1459.126/7/0/1/18.615` | `4/8/1465.185/7/1/1/23.492` |

Metrics use `S/C/L` for straight routes, curved routes, and ordinary route
length. `H2` is the strict sampled ordinary-route crossing count. PNR/FNR are
route/provisional-Node-label and route/final-Node-label conflict counts;
minimum clearance is foreign Node-body clearance.

The current R1 selected bundle is not uniformly safe against R0 labels:

| Locale / start | R1 `mentors` against R0 labels | R1 `supervises` against R0 labels |
|---|---|---|
| JA S0 | hard-unsafe: Clara | hard-unsafe: Clara |
| JA S1/S2 | safe | safe |
| EN S0 | hard-unsafe: Clara | hard-unsafe: Clara |
| EN S1/S2 | hard-unsafe: Clara | safe |

The R1 pair counts therefore demonstrate what the existing feedback pass can
open using feedback rectangles; they do not establish a Production-safe
replacement for the original provisional-label contract.

## Pair corridor details

Every R0 condition has zero hard-safe opposite-side pairs. This includes the
favorable S0 geometry: Initial Placement alone does not open the corridor.

R1 changes the result by starting geometry and locale:

- JA S0: 91 safe swapped pairs; selected `+40/-40`.
- JA S1/S2: 0 safe swapped pairs; selected `-52/-76`.
- EN S0: 91 safe swapped pairs; selected `+40/-40`.
- EN S1/S2: 24 safe swapped pairs; selected `+40/-40`.

The S0 feedback corridor is therefore a strong interaction result, not a
feedback-independent result. The current S1/S2 JA geometry remains blocked
even after feedback. EN S1/S2 appears to open the feedback corridor, but only
24 pairs survive and the selected `mentors=+40` route intersects the original
Clara provisional label.

## Existing feedback semantics

The read-only preview source confirms this finite sequence:

1. Current provisional Node labels are placed.
2. Current routes are generated in the canonical App order.
3. Relation labels and final Node labels are placed.
4. The final Node-label rectangles are used once as feedback routing input.
5. Relation and Node labels are recomputed once.

The displayed `Feedback: fixed at pass 2` text does not indicate a fixed-point
or converged solver. No second feedback pass was run in this audit, and no
feedback pass count was changed.

## Label movement and route changes

The R1 label movement from the R0 final Node-label state was concentrated:

| Locale / start | changed focal Node labels | movement |
|---|---|---:|
| JA S0 | none | `0` |
| JA S1/S2 | Clara | `100.313 px` |
| EN S0 | Lighthouse | `22.946 px` |
| EN S1/S2 | none | `0` |

JA S1/S2 therefore exhibit the large Clara label relocation described in the
preceding feedback audit, but that relocation does not open the pair corridor.
EN S1/S2 changes routing without a focal final-label movement because the
feedback input is already the prior final geometry in this bounded replay.

R1 changed 9 ordinary route identities from R0 on both S0 locales. It changed
2 identities on JA S1/S2 and 6 identities on EN S1/S2. These changes include
unrelated Relations, so feedback is not a local parallel-only adjustment.

On the S0 geometry, the primary bundle curvature fell from large offsets
`196/172` (JA) or `184/208` (EN) to `+40/-40`; the normalized primary offset
fell to approximately `0.132`. On S1/S2, the JA primary offsets remained
`-52/-76` (normalized `0.317/0.464`) and the EN R0 offsets were `-64/-88`
(normalized `0.390/0.537`). EN feedback returns the primary bundle to
`+40/-40`, but at the original-label safety cost described above.

The route-length reductions on S0 and JA S1/S2 are secondary observations.
S0 also removes the measured H2 crossings, while JA S1/S2 increases H2 from
4 to 7 and changes final presentation conflicts. Total route length is not
used as a substitute for hard safety, crossings, or label readability.

## Interaction classification

- Initial Placement alone opens a hard-safe corridor: **NO**. All R0 pair
  counts are zero.
- Feedback opens a corridor from every available start: **NO** under the
  feedback pass's own locale-sensitive results; JA S1/S2 remains zero.
- Feedback opens a corridor on S0: **YES**, in both locales.
- Current Production start plus feedback opens a corridor: **JA NO, EN YES
  diagnostically**, with EN failing the original provisional-label safety
  check for `mentors`.
- Favorable start plus feedback is uniquely presentation-positive: **PARTIAL**.
  S0 R1 is strong, but S3 cannot be exactly replayed and the selected R1 routes
  are unsafe against R0 labels.
- Initial Placement is the dominant factor: **PARTIAL**. It controls whether
  JA feedback can open the corridor, but feedback still materially changes EN
  S1/S2.
- Feedback alone is the dominant factor: **NO**. Its result depends on the
  starting geometry and locale.

The starting-geometry class is **G5 / G6 / G8 mixed**: feedback benefit
reverses with starting geometry in JA and is materially locale-dependent in
the cross-locale comparison. The primary result case is **CASE 5**, with the
CASE 8 locale-dependent manifestation.

## Manual evidence boundary

The user's clean `Experimental - Final-label feedback` image remains a strong
manual observation: favorable starting geometry can make the presentation feel
substantially cleaner. This audit does not disprove that observation. It
establishes only that:

- the exact favorable Node coordinates are unavailable;
- S0 is a favorable available proxy for the feedback interaction, not proof of
  the screenshot's exact state;
- feedback can improve S0 dramatically;
- feedback does not produce one locale-independent, original-label-safe
  contract across S0/S1/S2.

## Result and decision

- Result case: **CASE 5**, with CASE 8 locale dependence.
- Exact result: **5 - MIXED: FINAL-LABEL FEEDBACK CHANGES FROM BENEFICIAL TO
  REGRESSIVE DEPENDING ON STARTING GEOMETRY OR LOCALE.**
- Primary decision: **F - mixed interaction; do not adopt either factor as a
  universal Production solution.**
- Initial Placement change justified: **NO**.
- Final-label feedback adoption justified: **NO**.
- Hard safety relaxed: **NO**.
- New placement objective introduced: **NO**.
- Screenshot coordinates reconstructed: **NO**.
- Production routing changed: **NO**.

The selected next bounded checkpoint is:

`E2R-LIAISONSCAPE-AUTOMATIC-ROUTE-FINAL-LABEL-FEEDBACK-LOCALE-START-REGRESSION-ISOLATION1`

Its purpose is to isolate the locale/start-specific feedback regressions,
especially the S0 versus S1/S2 boundary and EN's original-provisional-label
hard collision, before any feedback adoption or Initial Placement objective
change is considered.

## Cleanup and verification boundary

The temporary placement/feedback/pair harness, copied samples, and generated
diagnostic output were removed from the detached worktree. Main dirty samples,
the routing-preview worktree, localhost, and protected
`E2R-Session-0052.md` were preserved.

The final application and specification validation gates were run after
cleanup:

- LiaisonScape: `npm.cmd test` - PASS, 280/280
- LiaisonScape: `npm.cmd run lint` - PASS
- LiaisonScape: `npm.cmd run build` - PASS
- LiaisonScape: `git diff --check` - PASS
- e2r-spec: `npm.cmd run validate` - PASS
- e2r-spec staged diff check - PASS
- localhost route - HTTP 200
