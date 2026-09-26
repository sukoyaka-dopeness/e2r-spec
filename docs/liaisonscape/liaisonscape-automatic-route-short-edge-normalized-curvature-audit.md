# LiaisonScape Automatic-Route Short-Edge / Normalized-Curvature Audit

Date: 2026-08-31

## Scope

Read-only audit of ordinary non-parallel, non-self automatic routes. Production
routing, scores, candidates, labels, samples, and the interactive preview were
unchanged.

## Live router facts

`routeGraphEdge` places its quadratic control point at the chord midpoint plus
the normal times an absolute world-unit offset. It tries `0`, then 32 signed
12-unit offsets through absolute 192. The score combines Node pressure,
occupied-path pressure, Node-label pressure, and `abs(offset) * .01`; a clear
base-side candidate is retained as safe fallback. `C_norm = abs(offset) /
chordLength` is diagnostic only, not a production score.

## Controlled live sweep

A temporary observer in the actual candidate loop recorded candidates without
mutating selection. Two Nodes, one ordinary Relation, and existing
`placeNodeLabel` endpoint labels gave this result in the locale-independent
fixture:

| chord | selected offset | shape | C_norm | straight safe | straight loss |
|---:|---:|---|---:|---|---|
| 80 | 0 | straight | 0 | yes | selected |
| 120 | 0 | straight | 0 | yes | selected |
| 160 | 0 | straight | 0 | yes | selected |
| 240 | 0 | straight | 0 | yes | selected |
| 320 | 0 | straight | 0 | yes | selected |

For diagnostic comparison only, endpoint-owned rectangles were placed on the
corridor. Straight then had two observed 100000 hard label contributions; no
Node or occupied-path pressure was present.

| chord | selected offset | C_norm | straight score | winner score |
|---:|---:|---:|---:|---:|
| 80 | 48 | 0.600 | 200000 | 0.48 |
| 120 | 72 | 0.600 | 200000 | 0.72 |
| 160 | 96 | 0.600 | 200000 | 0.96 |
| 240 | 72 | 0.300 | 200000 | 0.72 |
| 320 | 72 | 0.225 | 200000 | 0.72 |

## Result

GEOMETRIC AMPLIFICATION is **YES**: a fixed nonzero absolute offset necessarily
has greater normalized curvature on a shorter chord. SHORT-EDGE NONZERO
SELECTION BIAS is **PARTIAL**: ordinary automatic endpoint labels alone did not
curve the minimal fixture, but endpoint labels occupying the corridor changed
live selection to nonzero offsets. This is **CASE 3 / MIXED**. It does not
identify a Lighthouse Relation or authorize normalization.

The selected next checkpoint is
`E2R-LIAISONSCAPE-AUTOMATIC-ROUTE-ENDPOINT-LABEL-CORRIDOR-RELAXATION-EXPERIMENT1`.
Parallel, self-loop, drag, and Lighthouse scene sweeps remain excluded.

Temporary observer/fixture edits were removed. LiaisonScape tests (280), lint,
build, diff-check, and specification validation passed. No LiaisonScape commit
was made.
