# LiaisonScape Automatic-Route Final-Label Feedback Hard-Corridor Relief Audit

Date: 2026-09-01

Task: `E2R-LIAISONSCAPE-AUTOMATIC-ROUTE-FINAL-LABEL-FEEDBACK-HARD-CORRIDOR-RELIEF-AUDIT1`

Result: **CASE10 / MIXED — final-label feedback relieves part of the
corridor, but the effect is locale-dependent and can introduce route and
presentation regressions.**

## Scope and safety boundary

This was a read-only audit in the detached worktree
`C:/Users/extra/E2R/e2r-liaison-scape-final-label-feedback-corridor-audit`,
based on LiaisonScape `fd563340625fd3d88dc25baedc93c4f8fe69e5e7`. The existing
interactive preview worktree
`C:/Users/extra/E2R/e2r-liaison-scape-routing-preview` was read-only. Its
`Experimental — Selected-edge label relaxation` mode was out of scope.

No Production runtime, routing, score, candidate set, label placement, sample,
preview, persisted coordinate, parallel-edge, self-loop, or initial-placement
change was made. The dirty JA and EN Lighthouse samples were read-only inputs.
The supplied clean-layout image remains manual presentation context only; it
is not treated as Production acceptance or causal proof.

## Existing feedback semantics audited

The preview's `Experimental — Final-label feedback` path is a finite
Current-to-feedback replay, not a fixed-point solver:

1. The Current pass places automatic provisional Node labels.
2. It routes fixed/self Relations first and ordinary Relations in canonical
   order, accumulating `occupiedPaths` after each route.
3. It places Relation labels and then final Node labels.
4. The feedback pass uses those final Node-label rectangles as its routing
   input once, then recomputes Relation and Node labels.

The UI text `Feedback: fixed at pass 2` is static mode status. The audited
source does not iterate until geometry is unchanged. The route helper receives
label rectangles without intrinsic owner metadata; owner names below are
diagnostic associations in `graph.nodes` order, not a new runtime contract.

The replay used the existing `buildEntityGraph`, `placeNodeLabel`,
`placeEdgeLabel`, `routeGraphEdge`, and sampled label-distance helper from the
preview source. It did not reimplement route geometry or add a second solver.

## Baseline gate and label movement

The Current JA replay reproduced the required baseline winners:

| Relation | Current offset |
|---|---:|
| `clara-thomas-mentors` | -52 |
| `clara-thomas-supervises` | -76 |
| `sofia-archive` | -156 |
| `authority-lighthouse` | -24 |

Baseline gate: **PASS**.

Current-to-feedback final Node-label movement was highly concentrated:

| Locale | Changed Node labels | Movement |
|---|---|---:|
| JA | `clara` | 100.313 px (`dx=64.006`, `dy=77.239`) |
| JA | `archive`, `lighthouse`, `thomas`, and six others | 0 px |
| EN | none | 0 px |

Thus the feedback pass is not a broad relaxation of Node-label geometry. In
this dataset it is primarily a JA Clara-label feedback event.

The requested owner-rectangle trace for the four focal labels was:

| Locale / owner | Current x,y | Feedback x,y | dx,dy | displacement | width × height |
|---|---|---|---|---:|---|
| JA `clara` | 210.837, 88.652 | 274.843, 165.891 | +64.006, +77.239 | 100.313 | 112 × 48 |
| JA `archive` | 151.047, -67.686 | 151.047, -67.686 | 0, 0 | 0 | 115 × 48 |
| JA `lighthouse` | 409.840, 122.843 | 409.840, 122.843 | 0, 0 | 0 | 118.5 × 48 |
| JA `thomas` | -35.002, 94.544 | -35.002, 94.544 | 0, 0 | 0 | 108.5 × 48 |
| EN `clara` | 286.593, 165.891 | 286.593, 165.891 | 0, 0 | 0 | 135.5 × 48 |
| EN `archive` | 33.547, -3.686 | 33.547, -3.686 | 0, 0 | 0 | 155 × 48 |
| EN `lighthouse` | 429.074, 139.689 | 429.074, 139.689 | 0, 0 | 0 | 148.5 × 48 |
| EN `thomas` | -54.256, 56.542 | -54.256, 56.542 | 0, 0 | 0 | 142 × 48 |

## JA mentors corridor

The live candidate frontier changed as follows:

| Candidate | Current hard owners | Feedback hard owners | Feedback halo owners |
|---:|---|---|---|
| `+40` | `clara + archive` | none | `clara` |
| `+52` | `clara + archive` | `clara` | none |
| `+64` | `lighthouse + clara + archive` | `clara` | none |
| `-52` | none | none | none |

The positive corridor narrowed from two or three hard owners to a Clara-only
hard/halo boundary, but `-52` remained the selected winner in both passes.
The nearest positive hard-safe diagnostic candidate after feedback was `+40`,
but it still had Clara halo pressure and a score of `7716.332`; the nearest
negative hard-safe candidate remained `-52` with score `0.52`. No positive
candidate became the Production winner.

The discrete frontier summary is:

| Locale/pass | First positive hard-safe | First negative hard-safe | First positive occupied-safe | First negative occupied-safe | Selected winner |
|---|---:|---:|---:|---:|---:|
| JA Current | none | `-52` | `+40` | `-52` | `-52` |
| JA Feedback | none | `-52` | `+40` | `-52` | `-52` |
| EN Current | none | `-52` | `+40` | `-52` | `-64` |
| EN Feedback | `+40` | `-52` | `+40` | `-52` | `+40` (fallback) |

For JA Current the hard-forbidden positive offsets were `+40,+52`, then
`+64,+76,+88,+100,+112,+124,+136,+148,+160,+172,+184,+196,+208,+220`
with all three owners, and `+232` with `lighthouse + clara`; the first
negative hard-safe candidate was `-52`. JA Feedback removed hard ownership at
`+40` but retained Clara hard ownership from `+52` through `+232`; `+40`
therefore remained halo-pressured rather than becoming the winner. EN Current
had Clara hard ownership across the positive near-center frontier; EN Feedback
removed that hard/halo ownership through `+136` (Archive halo begins at `+148`),
making `+40` the first positive hard-safe candidate. These are candidate-set
observations, not an authorization to alter the candidate set.

The selected JA `mentors` route was Node-safe and occupied-safe in both passes.
Its sampled distance to Clara, Archive, and Lighthouse was clear in both the
original and feedback label sets. This means JA does not show the stronger
case where the feedback winner is safe only because a formerly unsafe route
was accepted; rather, the winner stayed on the opposite side and the local
frontier relief was insufficient.

## EN mentors corridor and original-rectangle safety

EN has a different owner topology:

| Candidate | Current hard owners | Feedback hard/halo owners |
|---:|---|---|
| `+40`, `+52`, `+64` | `clara` hard | none |
| `-52` | none; Clara halo at `12.183` | none |

The selected winner changed from `-64` to `+40` (the feedback trace marked the
selection as fallback because the near-center candidates were tied at the
lowest score). The feedback winner was:

- Node-safe and occupied-safe;
- clear against feedback rectangles, including Clara at `53.618` sampled
  distance;
- **hard-unsafe against the original Current provisional Clara rectangle**
  (distance `0`), while Archive and Lighthouse were clear.

This is evidence that feedback geometry can open a corridor for the second
pass. It is not evidence that the same route is safe under the original
geometry, and it does not authorize a Production adoption boundary.

The traced controls remained selected as follows. Occupied safety was retained
for the listed selections; Node safety and label-owner details are shown where
they were material:

| Locale | Relation | Current | Feedback |
|---|---|---|---|
| JA | `supervises` | `-76`, no hard/halo owner | `-76`, no hard/halo owner |
| JA | `sofia-archive` | `-156`, Thomas hard in route context | `+60`, no focal hard owner |
| JA | `authority-lighthouse` | `-24`, Lighthouse clear at `20.087` | `0`, Lighthouse clear at `44.695` |
| EN | `supervises` | `-88`, no hard/halo owner | `-40`, no hard/halo owner |
| EN | `sofia-archive` | `+36`, Node-unsafe, Clara halo | `+60`, Node-safe, no focal hard/halo owner |
| EN | `authority-lighthouse` | `0`, fallback, no hard/halo owner | `0`, Clara halo |

## All ordinary-route and presentation effects

Changed ordinary route offsets were:

| Locale | Relation changes |
|---|---|
| JA | `authority-lighthouse -24→0`; `sofia-archive -156→60` |
| EN | `clara-lighthouse 0→-96`; `clara-maya 0→12`; `mentors -64→40`; `supervises -88→-40`; `sofia-archive 36→60`; `thomas-maya-friends 132→120` |

Selected control behavior remained Node-safe and occupied-safe in the traced
passes. However, route and label presentation metrics were not uniformly
improved:

| Locale/pass | Straight / curved | Ordinary route length | H2 count | PNR / FNR |
|---|---:|---:|---:|---:|
| JA Current | 5 / 7 | 1513.914 | 4 | 1 / 1 |
| JA Feedback | 6 / 6 | 1449.785 | 7 | 0 / 2 |
| EN Current | 6 / 6 | 1459.126 | 7 | 0 / 2 |
| EN Feedback | 4 / 8 | 1465.185 | 7 | 1 / 1 |

`H2` is the strict sampled ordinary-route crossing count used by this audit.
`PNR` counts route/provisional-Node-label conflict pairs and `FNR` counts
route/final-Node-label conflict pairs. The feedback pass reduces JA route
length and provisional conflicts, but increases strict crossings and final
route/Node-label conflicts. EN reduces final conflicts and improves the
minimum foreign-Node clearance from `18.615` to `23.492`, but loses two
straight routes and slightly increases total route length.

The JA Current H2 identities were `beacon-lighthouse-installed-in | clara-maya`,
`beacon-lighthouse-installed-in | daniel-clara`,
`beacon-lighthouse-installed-in | thomas-maya-friends`, and
`elias-clara | thomas-maya-friends`. JA Feedback retained those four and added
`clara-thomas-mentors | sofia-archive`,
`clara-thomas-supervises | sofia-archive`, and
`sofia-archive | thomas-maya-friends`. EN retained the same seven H2
identities in both passes.

The JA `supervises` control stayed at `-76`; EN changed from `-88` to `-40`.
JA `authority-lighthouse` changed from `-24` to straight `0`, while EN stayed
straight at `0`. JA `sofia-archive` changed sides from `-156` to `60`; EN moved
from `36` to `60`. These controls show that feedback effects are not confined
to the `mentors` corridor.

## Decision

The evidence supports the following bounded conclusions:

- **Final-label feedback can relieve a local hard corridor:** YES, clearly in
  EN and partially in JA.
- **Feedback explains the clean manual image by itself:** NO. JA retains the
  `-52` opposite-side `mentors` winner, and the full image quality was not
  causally reproduced by this audit.
- **Feedback preserves the original safety boundary:** NO. The EN feedback
  winner is safe against feedback rectangles but hard-unsafe against the
  original provisional Clara rectangle.
- **Locale-independent Production selection semantic:** NO. JA and EN have
  different label movement, owner topology, winners, and route changes.
- **Fixed-point behavior:** NOT ESTABLISHED. The existing mode performs one
  feedback replay and has no convergence loop.

Primary decision: **D — feedback produces useful local relief, but route,
crossing, label-conflict, and locale regressions prevent adoption.** The
manual clean-layout observation should remain a separate acceptance question.

## Follow-up

Because the corridor remains only partially explained and the feedback path
can alter unrelated routes, this audit does not authorize final-label feedback
in Production. The next bounded checkpoint is
`E2R-LIAISONSCAPE-NODE-LABEL-INK-GEOMETRY-COLLISION-AUDIT1`, which should
compare the current full label background rectangle with tighter deterministic
text-bound alternatives. It must preserve the current safety contract and
remain separate from connector visibility, initial placement, parallel-edge,
self-loop, and feedback adoption decisions.

## Cleanup and verification boundary

The temporary replay harness and JSON output were removed with the detached
worktree after recording the results. The existing interactive preview,
localhost server, dirty samples, seeded positions, and protected
`E2R-Session-0052.md` were preserved. No LiaisonScape commit was created.
