# LiaisonScape Automatic-Route Label-Pressure Temporal Semantics Experiment

Date: 2026-08-31
Checkpoint: `E2R-LIAISONSCAPE-AUTOMATIC-ROUTE-LABEL-PRESSURE-TEMPORAL-SEMANTICS-EXPERIMENT1`

## Exact result

`TRADE-OFF — DRAG-TIME LABEL DEFER REMOVES THE MID-DRAG FLIP BUT MOVES THE SAME DISCONTINUITY TO RELEASE`

The previous checkpoint proved a direct hard-label pairwise inversion for
beacon candidates `-60` and `156`, while not proving that halo is globally
irrelevant. This checkpoint separates that direct cause from active-drag
semantics. Current automatic routing consumes no prior automatic offset;
positions and provisional labels are recomputed for every current render.
Final Node labels consume final route geometry but do not feed back into the
same routing pass. Manual offset bypasses automatic arbitration.

## Modes

A uses current fresh positions and fresh provisional labels. B uses the
sample-zero provisional-label rectangles only for drag-time scoring, while
safety presentation still uses fresh current labels. C removes both label
terms only during the diagnostic drag. D holds the sample-zero current beacon
offset `-60` only during drag; it is not treated as a saved manual route.
Every mode returns to A on release. No numeric tuning, hysteresis, candidate
change, Production UI, or drag behavior was implemented.

## Beacon active and release results

The eleven samples move beacon by `(-0.0215, 0.7778)` per step. The current
baseline A exactly reproduces `-60` for samples 0--6 and `156` for 7--10.

| Locale / mode | active offsets | flips / max jump | final active PNR | clearance | release offset jump | release control / interior |
| --- | --- | --- | ---: | ---: | ---: | --- |
| EN A | `-60` ×7, `156` ×4 | 1 / 216 | 1 | 18.615 | 0 | 0 / 0 |
| EN B | `-60` ×11 | 0 / 0 | 2 | 18.615 | 216 | 216.000 / 129.498 |
| EN C | `-60` ×11 | 0 / 0 | 6 | 24.217 | 216 | 216.000 / 129.498 |
| EN D | `-60` ×11 | 0 / 0 | 2 | 18.615 | 216 | 216.000 / 129.498 |
| JA A | `-60` ×7, `156` ×4 | 1 / 216 | 2 | 23.492 | 0 | 0 / 0 |
| JA B | `-60` ×11 | 0 / 0 | 3 | 23.492 | 216 | 216.000 / 129.498 |
| JA C | `-60` ×11 | 0 / 0 | 6 | 24.217 | 216 | 216.000 / 129.498 |
| JA D | `-60` ×11 | 0 / 0 | 3 | 23.492 | 216 | 216.000 / 129.498 |

Release has no endpoint motion, so an amplification ratio is intentionally not
reported. Absolute control displacement, interior displacement, and offset jump
are the applicable measures. The release values are comparable to the known
current mid-drag discontinuity and are materially deferred, not small.

At samples 6 and 7, fresh A reverses the `-60`/`156` hard contribution
between `0` and `100000`; both pairwise halo contributions are zero. B
retains the sample-zero rectangle input, C has no label input, and D holds the
winner, so all avoid the active flip. Their PNR counts use fresh current label
rectangles: snapshot/hold is not evidence that the visible drag-time geometry
is safe. C has the highest temporary conflict count in both locales.

## Safety and settled state

Foreign-Node clearance remains finite and no active mode changes Node pressure,
occupied-path handling, reverse parallel physical side, or obstacle-side
parallel physical side. No foreign Node penetration or physical-side regression
was observed in the beacon replay. Label safety is different: B and D add one
fresh provisional conflict at the final active sample in each locale, while C
adds five EN and four JA conflicts relative to A. These are temporary
drag-presentation diagnostics, not an accepted permission to weaken label
safety.

On release every B/C/D run re-enters CURRENT-FRESH and exactly restores the
A settled route choice. Therefore settled H0/H1/H2/H3/H4, PNR/FNR, route total,
straight/curved count, and physical-side controls are the current baseline;
the temporary modes do not change stored Dataset state.

The separate stable Daniel/Clara current control remains relevant: the prior
label-pressure isolation showed that global removal changes it to `108` and
that Japanese halo-only can introduce a 204-unit flip. This experiment does
not claim that snapshot/defer/hold is a safe general Daniel policy; it measures
only the bounded beacon drag/release semantics.

## Classification and decision

- A: TS5, no improvement.
- B: TS2, active continuity improves and discontinuity is deferred to release.
- C: TS3, continuity improves but temporary label safety regresses, then snaps.
- D: TS2, smooth hold but the same release snap.
- Optional E: not used; it would introduce a new previous-winner safety policy.

Root-cause/semantics classification: **CASE 3 — DRAG-TIME LABEL DEFER RECOVERS
CONTINUITY BUT DEFERS THE FULL JUMP TO RELEASE**.

Temporal separation improves active drag: **YES**. Current settled safety is
preserved: **YES**. The best observed modes **DEFER**, rather than solve, the
discontinuity. Temporary label-safety regression: **YES**. Locale-dependent
active control instability: **NO** for the beacon; the wider prior Daniel
warning remains unresolved. Production implementation is justified: **NO**.

The selected next checkpoint is
`E2R-LIAISONSCAPE-AUTOMATIC-ROUTE-RELEASE-TRANSITION-SEMANTICS-EXPERIMENT1`.
It is selected only and is not started here. Animation, morphing, hysteresis,
route freezing, or any UX acceptance rule remain out of scope.

## Closure

Production Runtime, routing, drag behavior, label placement, candidate set,
samples, schema, and `seededPositions` changed: **NO**. The temporary replay
harness was removed. No LiaisonScape commit, push, tag, release, deployment,
or publication occurred.
