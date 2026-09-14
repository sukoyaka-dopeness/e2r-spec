# LiaisonScape Self-loop-local Capacity Allocation 1 — Runtime Evidence Correction 1

Date: 2026-09-14
Status: `RUNTIME EVIDENCE CORRECTED / QUALITY CONCLUSION UNCHANGED / NOT READY FOR HUMAN REVIEW`
Checkpoint: `E2R-LIAISONSCAPE-SELF-LOOP-LOCAL-CAPACITY-RUNTIME-CORRECTION1`

## Purpose

This correction revalidates the runtime evidence from
`Self-loop-local Angle / Radius Capacity Allocation 1` without changing its
fixtures, provisional feasibility gates, candidate domain, or quality result.
The previous `runCase()` timer started each arm before the later arms ran and
read the elapsed value only after all arms had completed. Consequently,
angle-only time included angle-plus-radius and owner-group work, and
angle-plus-radius time included owner-group work. The baseline timer was not
affected by that specific error.

The historical quality result remains unchanged and is not rewritten. This
document records the corrected measurement and its architectural implication.

## Measurement correction

The audit source now measures each baseline and arm independently with one
warm-up run followed by three measured runs. It reports median and p95 for
each operation and records phase timing for:

- baseline Product render/evaluation;
- candidate generation;
- cheap screening;
- owner-local Cartesian combination enumeration;
- Product-authoritative finalist evaluation;
- routing and occupied-path arbitration;
- final Relation-label recomputation;
- final Node-label recomputation; and
- viewport / fit evaluation.

The timing is inside one already-loaded Node process. Node process startup and
module loading are excluded. Warm-up is reported separately from steady-state
measurements. Nested phase totals are intentionally inclusive and must not be
summed as if they were disjoint costs.

The cheap screen still uses the diagnostic baseline-label geometry and is not
Product-authoritative. Every retained finalist still goes through the current
Product route, final Relation-label, final Node-label, viewport, and ordinary
route-churn evaluation.

## Corrected runtime table

Values are measured-run median milliseconds across EN/JA within each case
family; the corresponding p95 range is shown in parentheses.

| Case family | Angle-only independent | Angle + small radius | Owner-local group |
| --- | ---: | ---: | ---: |
| Lighthouse | `649-677` (`649-698`) | `993-1009` (`1009-1037`) | `4008-4033` (`4012-4116`) |
| Titanic | `221-231` (`225-231`) | `293-296` (`293-296`) | `458-460` (`462-488`) |
| Isolated | `10.3-10.5` (`10.4-10.6`) | `16.7-16.9` (`16.9-18.6`) | `21.3-22.6` (`22.8-22.9`) |
| Symmetric | `55.8-56.0` (`56.2-56.4`) | `81.9-82.4` (`82.7-83.6`) | `115-124` (`117-130`) |
| Perturbed | `44.2-46.7` (`44.5-47.4`) | `65.3-66.9` (`65.6-67.7`) | `92.5-97.1` (`94.9-97.2`) |
| Four-loop fan-out | `229-247` (`229-252`) | `367-372` (`375-378`) | `1662-1680` (`1682-1716`) |

The corrected maximum measured median is Lighthouse owner-group at about
`4.03s`; the corrected maximum p95 is about `4.12s`. The corrected minimum
is the isolated angle-only control at about `10ms`. The all-arm measured
median sum is about `18.9s`, with a mean of about `525ms` per arm; this sum is
descriptive only and is not a single browser interaction budget.

## Phase-cost evidence

Representative Lighthouse EN medians show the source of the correction:

| Arm | Cheap screening / group screening | Authoritative finalists | Routing | Relation labels | Node labels |
| --- | ---: | ---: | ---: | ---: | ---: |
| Angle-only | `350ms` | `311ms` | `195ms` | `30ms` | `26ms` |
| Angle + radius | `687ms` | `305ms` | `189ms` | `30ms` | `26ms` |
| Owner-group | `3031ms` owner-group screen | `267ms` | `157ms` | `28ms` | `26ms` |

For the owner-group arm, the dominant cost is evaluating the retained
Cartesian product through the diagnostic screen (`1,296` combinations in the
largest observed group). The final Product-authoritative limit of `24` is
bounded and materially smaller, but it is not the dominant Lighthouse cost in
this measurement. For Titanic, the owner-local screen is smaller and the
bounded authoritative finalist evaluations account for a larger share of the
approximately `0.46s` arm cost. For four-loop fan-out, owner-group screening
again dominates at approximately `1.3s` of an approximately `1.66s` arm.

Candidate generation itself was negligible in these runs (about `0.01-0.06ms`
per arm-level phase). The expensive work is repeated geometry/metric screening
and, depending on the case, authoritative route and label recomputation.

## Quality and feasibility revalidation

The corrected audit produced the same result matrix:

| Arm | Accepted allocations |
| --- | ---: |
| angle-only independent | `0/12` |
| angle + small-radius independent | `1/12` |
| owner-local group allocation | `2/12` |

All 12 baseline evaluations remained deterministic. The accepted cases were
the same isolated controls only. Lighthouse, Titanic, symmetric, perturbed,
and four-loop fan-out cases remained infeasible under the unchanged diagnostic
contract. Peer-loop, ordinary-corridor, label-envelope, viewport, and limited
ordinary-route-churn failures therefore remain quality evidence, not timing
artifacts.

## Architectural implication

The previous quality disposition is unchanged:

- the bounded angle/radius domain contains useful alternatives;
- independent selection is insufficient for shared local capacity;
- owner-local allocation helps sparse isolated controls but does not close
  canonical or dense cases; and
- no production selector, radius policy, diagnostic fallback, or Product
  provider is justified.

The runtime interpretation is corrected rather than reversed. Candidate count
is bounded, but owner-group browser-native suitability is not established for
canonical Lighthouse because the local Cartesian screen itself is about four
seconds. The bottleneck is now attributed more precisely to owner-local
screening and, in smaller groups, to repeated authoritative route/label
evaluation. This supports a future diagnostic study of finalist recall and
dependency reuse, but does not authorize implementing that formulation now.

Therefore the previous checkpoint disposition is:

`previous quality conclusion unchanged; runtime statement corrected only`.

The next research hypothesis may proceed only as a separately bounded
`owner-local finalist recall + dependency reuse` measurement study. It must
prove recall against the current Product-authoritative boundary before any
runtime claim is made. No Adaptive Cascade, Fast Initial + High-quality Auto
Layout adoption, global solver, or responsibility transfer is implied.

Actual Product inspection was not repeated for this measurement-only
correction. No new candidate was integrated, and runtime correction alone is
not a Human Review trigger. Human Review remains `NOT READY`.

Product default/adoption remains `HOLD`, the production provider remains `NOT
ESTABLISHED`, the Initial Layout Release blocker remains `OPEN`, Parallel /
Relation-label follow-up remains `OPEN`, and the Self-loop responsibility
boundary remains confirmed but quality-open.

## Reproducibility and change boundary

The corrected artifact is
`e2r-liaison-scape/experimental/self-loop-local-capacity-allocation/audit.json`
and the instrumented source is
`e2r-liaison-scape/tools/self-loop-local-capacity-allocation-audit.mjs`.

The historical `Self-loop-local Angle / Radius Capacity Allocation 1` result
was preserved. No production runtime source, Dataset, coordinate ownership,
persistence, dirty-state, Save Coordinates, manual placement, manual
curvature, manual Relation-label semantics, endpoint-plan authority, Parallel
architecture, or session log was changed.
