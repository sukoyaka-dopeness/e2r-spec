# LiaisonScape Automatic-Route Historical Safety-Delta Isolation

Date: 2026-08-31
Checkpoint: `E2R-LIAISONSCAPE-AUTOMATIC-ROUTE-HISTORICAL-SAFETY-DELTA-ISOLATION1`

## Result

`MIXED — PROVISIONAL-LABEL PRESSURE IS CAUSAL BUT NO GLOBAL RELAXATION IS SAFE`

This evidence-only experiment holds the current router fixed: its 33-member
candidate enumeration, Node and occupied-path pressure, offset cost, canonical
order, route sampling, and physical-side safeguards all remain current. A
temporary diagnostic argument selected only which existing label contribution
to include and was removed after measurement. No numeric tuning was performed.

The exact G3-to-G2 (`3df96e8 -> d0c885d`) delta is provisional Node-label
pressure: route/rectangle distance zero adds `100000`; otherwise, within 20
units, `(20 - distance)^2 * 20` is added. A strict lower score wins in
candidate order. Labels are fresh locale-sensitive `placeNodeLabel` rectangles.

| Mode | Hard | Halo |
| --- | --- | --- |
| A `CURRENT` | on | on |
| B `NO-LABEL-PRESSURE` | off | off |
| C `HARD-ONLY` | on | off |
| D `HALO-ONLY` | off | on |

## Beacon causal replay

The eleven-sample Clara-radial beacon trajectory moves by
`(-0.0215, 0.7778)` per sample. A reproduces the accepted current trajectory.

| Mode | offsets | flips / max jump | control / interior amp | straight |
| --- | --- | --- | --- | ---: |
| A | `-60` ×7, `156` ×4 | 1 at 7 / 216 | 277.914x / 166.859x | 0 |
| B | `-60` ×11 | 0 / 0 | 0.650x / 0.615x | 0 |
| C | `-60` ×7, `156` ×4 | 1 at 7 / 216 | 277.914x / 166.859x | 0 |
| D | `-60` ×7, `156` ×4 | 1 at 7 / 216 | 277.914x / 166.859x | 0 |

At sample 6, `-60` has hard `0` and `156` has `100000`; at sample 7 they
exchange. Both have halo `0`; their occupied-path contribution is `10000`
and offset contribution is `0.600` or `1.560`. Offset zero instead has Node
contribution 1,801,294.601 at sample 6 and 1,820,946.939 at sample 7. Therefore
hard pressure alone causes the flip; halo is neither sufficient nor required.

Daniel/Clara is stable at `-96` in A/C/D (`0.506x/0.506x`). B is stable at
`108` (`0.494x/0.496x`), so removing label pressure also changes unrelated
ordinary routes. In Japanese D Daniel flips at the final sample, `-96 -> 108`
(204 jump; `248.923x/150.738x`), demonstrating a new instability.

## Fresh presentation and safety

Fresh routes, Relation labels, and Node labels were recomputed once per mode;
final labels were not fed back into routing. H0--H4 are the established
application metrics and PNR/FNR are ordinary route intersections with fresh
provisional/final Node-label rectangles.

| Locale/mode | H0/H1/H2/H3/H4 | PNR/FNR | total | clearance | straight/curved |
| --- | --- | --- | ---: | ---: | --- |
| EN A | `0/0/7/4/0` | `0/2` | 1459.126 | 18.615 | 6/6 |
| EN B | `0/0/7/3/0` | `4/3` | 1420.579 | 27.149 | 6/6 |
| EN C | `0/0/7/3/0` | `0/0` | 1435.190 | 18.615 | 6/6 |
| EN D | `0/0/7/4/1` | `1/2` | 1473.721 | 23.492 | 6/6 |
| JA A | `0/0/4/3/0` | `1/1` | 1513.914 | 23.492 | 5/7 |
| JA B | `0/0/7/1/0` | `4/2` | 1420.579 | 27.149 | 6/6 |
| JA C | `0/0/7/2/1` | `1/2` | 1449.785 | 23.492 | 6/6 |
| JA D | `0/0/4/3/0` | `1/1` | 1513.914 | 23.492 | 5/7 |

The EN A harness reproduces the accepted route total, clearance, H2, H3, and
H4 baseline. Its sampled FNR inventory is two rather than the prior
presentation-pass count of three; this is retained as a measurement-boundary
difference, not normalized away. B changes five EN offsets, including
Daniel/Clara `-96 -> 108` and both Clara/Thomas slots. D creates H4
`clara-thomas-mentors|clara-lighthouse`. The label identities and final
presentation are therefore not preserved by a global relaxation.

All A/B/C/D modes preserve the non-label control fixtures: foreign-Node
clearance `60.880`, reverse-endpoint parallel sides opposite, obstacle-side
parallel sides opposite, and occupied-corridor separation 20. The controls
contain no label rectangles, as expected from a label-only diagnostic.

EN and JA agree on the temporal causal result: B is smooth, C and D retain the
hard-boundary flip. Locale changes static route and label identities, not the
cause. The accepted cross-linked (`0/0/1/0/0`, PNR/FNR `0/0`) and dense
ten-Node (`0/4/129/0/0`, PNR/FNR `12/6`) measurements remain contextual
controls from the preceding experiment; no new fixture content was introduced.

## Decision

Classification: **CASE 9 — target beacon improves but controls prevent a
global relaxation**; temporal class **T2 — temporally smoother / final label
safety regresses or migrates**.

- G3-like continuity on the current router: **YES**, only in B.
- Current non-label safety preserved: **YES**.
- Final label safety preserved: **NO / identity-migrating**.
- Hard label boundary primary cause: **YES**.
- Halo materially causal: **NO**.
- Next problem: **TEMPORAL SEMANTICS** constrained by label safety.
- Production implementation justified: **NO**.

Selected next checkpoint:
`E2R-LIAISONSCAPE-AUTOMATIC-ROUTE-LABEL-PRESSURE-TEMPORAL-SEMANTICS-EXPERIMENT1`.
It is selected only and is not started here. Hysteresis, route freeze, jump
suppression, drag-time bypass, and any priority policy remain out of scope.

## Closure

Production Runtime, routing, label placement, candidate set, samples, schema,
and `seededPositions` changed: **NO**. No LiaisonScape commit, push, tag,
release, deployment, or publication occurred. Temporary diagnostic source and
replay harness were removed before validation.

