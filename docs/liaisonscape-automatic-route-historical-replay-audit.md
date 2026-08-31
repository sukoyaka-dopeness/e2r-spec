# LiaisonScape Automatic-Route Historical Replay Audit

Date: 2026-08-31
Checkpoint: `E2R-LIAISONSCAPE-AUTOMATIC-ROUTE-HISTORICAL-REPLAY-AUDIT1`
Result: `TRADE-OFF — EARLIER ROUTING IS TEMPORALLY SMOOTHER BUT REINTRODUCES ACCEPTED COLLISION REGRESSIONS`

## Scope and method

This is an evidence-only historical replay. It changes neither the current
router nor its inputs, candidate set, scoring, Node placement, labels, samples,
schema, release metadata, or publication state. The two existing dirty public
Lighthouse samples were treated as user-owned and were not read as a mutation
target.

Five detached temporary worktrees replayed the actual historical
`routeGraphEdge` source against the current Lighthouse topology and stored
coordinates. The current canonical routing order was used as a compatibility
wrapper: fixed relations first, then ordinary relations in canonical order.
Where a historical source did not accept provisional label rectangles, none
were supplied. Therefore source-level route choices are high-confidence;
end-to-end historical presentation metrics are medium-confidence compatibility
diagnostics, not a claim that old application pipelines were identical.

The static diagnostic fixture has a beacon Relation whose endpoint is moved
through eleven positions, a Daniel control sweep, a foreign-Node clearance
case, reverse-endpoint parallel relations, obstacle-side parallel relations,
and a small occupied-corridor control. Static H1--H4 below are compatibility
measurements: H1 foreign-Node intersections, H2 route intersections, H3
relation-label-to-Node intersections, and H4 relation-label overlaps. They
are not interchangeable with the accepted current Lighthouse presentation
contracts.

## Generations inspected

| Generation | Commit | Material router property | Beacon temporal result |
| --- | --- | --- | --- |
| G5 | `d101297` | 17 candidates, 24-unit steps, 42-unit Node radius, no labels | flip; 24-unit offset jump |
| G4 | `50e48cc` | 17 candidates, 24-unit steps, 60-unit Node radius, no labels | no offset flip; stable curve |
| G3 | `3df96e8` | 33 candidates, 12-unit steps, 60-unit Node radius, no labels | no offset flip; stable curve |
| G2 | `d0c885d` | provisional-label hard/halo pressure added | flip; 216-unit offset jump |
| G1 | `22f61a8` | reverse-endpoint and obstacle physical-side preservation | same beacon result as G2 |
| G0 | `fd56334` | current HEAD | same beacon result as G2 |

`d101297` is the earliest generation proven by this audit to have automatic
non-zero route curvature. It is not proof of the first historical introduction
of automatic curvature across all repository history.

## Beacon and control replay

The current beacon sequence is reproduced exactly at G2, G1, and G0:
offset `-60` for positions 0--6, then `156` for 7--10; one side flip; maximum
offset jump 216; maximum control displacement 277.913; maximum interior
displacement 166.859. The G0/G1/G2 route is never straight.

| Generation | Beacon offsets across positions 0--10 | Flips / max jump | Max control / interior displacement |
| --- | --- | --- | --- |
| G5 | `-24,-24,-24,-24,-48,-48,-48,-48,-48,-48,-48` | 1 / 24 | 30.532 / 19.402 |
| G4 | `168` at all positions | 0 / 0 | 0.342 / 0.856 |
| G3 | `-60` at all positions | 0 / 0 | 0.650 / 0.994 |
| G2/G1/G0 | `-60` ×7, `156` ×4 | 1 / 216 | 277.913 / 166.859 |

The Daniel control is not uniformly calmer historically. G5 changes from
`-72` to `72` (jump 144); G4 changes from `-96` to `96` (jump 192); G3 changes
from `108` to `96` (jump 12). G2/G1/G0 remain at `-96`, with control and
interior displacement 0.641 and 0.992 respectively. Thus G3 and G4 show a
smoother beacon trajectory, while G5 demonstrates that removing labels alone
does not guarantee temporal stability.

## Safety replay and accepted regressions

| Generation | Static H1/H2/H3/H4 | Minimum 60-unit clearance | Foreign-node control | Reverse / obstacle parallel physical sides |
| --- | --- | --- | --- | --- |
| G5 | 0 / 7 / 2 / 0 | -17.221 | 54.106 | preserved / collapsed |
| G4 | 0 / 5 / 2 / 2 | -4.340 | 68.100 | preserved / collapsed |
| G3 | 0 / 7 / 2 / 1 | -0.100 | 61.118 | preserved / collapsed |
| G2 | 0 / 7 / 3 / 0 | -9.385 | 60.880 | collapsed / collapsed |
| G1/G0 | 0 / 7 / 3 / 0 | -9.385 | 60.880 | preserved / preserved |

For the directed parallel pairs, matching directed signs mean opposite physical
sides; opposite directed signs mean the two routes collapse to the same
physical side. G2 therefore reproduces the accepted reverse-endpoint and
obstacle-side regressions repaired by G1. G3/G4 predate those repairs, and G5
also fails the 60-unit foreign-Node clearance control. The occupied-corridor
control measures distance 8 in every generation, so it provides no causal
differential here.

The static current wrapper yields `0/7/3/0`; the established current
Lighthouse presentation baseline is `H0/H1/H2/H3/H4 = 0/0/7/4/0`. The different
H3 quantity confirms that the wrapper is a routing compatibility diagnostic,
not a replacement for the accepted full application baseline.

## Boundary and interpretation

The exact beacon discontinuity boundary is G3 to G2, commit `d0c885d`.
The change adds provisional label rectangles: hard intersections incur a very
large cost and a 20-unit halo adds quadratic pressure. Candidate granularity
had already changed at G3 (33 candidates, 12-unit steps), but G3 does not flip
the beacon; it is relevant context, not the immediate causal boundary. Fresh
automatic selection has no persisted previous offset or control state in any
inspected generation.

This supports classification C4, provisional-label-pressure transition, with
continued Node pressure explaining why a straight route is not selected. It
does not justify a historical-router restoration: G3/G4 are temporally smoother
on the beacon but omit label safety and predate accepted physical-side fixes;
G5 additionally violates foreign-Node clearance. A direct revert or broad
replacement is ruled out.

## Decision

Production change: **NO**. Historical restoration: **PARTIAL**, only as a
future property-level safety-delta experiment that retains current provisional
labels, foreign-Node clearance, and physical-side protections. The selected
next checkpoint is
`E2R-LIAISONSCAPE-AUTOMATIC-ROUTE-HISTORICAL-SAFETY-DELTA-ISOLATION1`.
It is selected only and is not started by this audit.
