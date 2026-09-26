# LiaisonScape Structural-Seeded Capacity Refinement 1

Date: 2026-09-15

Status: `B. FRONTIER-SEEDED HQ DIRECTION PROMISING / PRODUCT READABILITY OPEN`

## Decision

This checkpoint applies the existing Label-Capacity, Infinite-Canvas, and
Occupied-Geometry diagnostic transformations after an existing topology-aware
structural candidate. It does not introduce a solver family or a new global
objective.

Frontier is selected as the primary seed for this bounded investigation.
Post remains the quality reference/control. The common-fixture artifact shows
that Frontier retains canonical zero-crossing signals comparable to Post while
requiring materially fewer current-source Product evaluations: for example,
13 evaluations versus 468 on Lighthouse and 13 versus 437 on Apollo. This is
a research cost signal, not a production latency guarantee.

The refinement result is mixed:

- Lighthouse EN permits a bounded Frontier + Label-Capacity candidate that
  preserves component-local ordering, crossings, and Node-body overlap;
- Parallel/Self-loop control permits Frontier + Infinite-Canvas and the
  subsequent bounded Occupied-Geometry step without violating those same
  structural invariants;
- Apollo JA has no structurally preserving Frontier refinement candidate;
- Dense K7x7 rejects all tested capacity stages for both Frontier and the
  structural reference because the refinement changes structural quality
  signals before it produces an acceptable capacity result;
- the successful Lighthouse Label-Capacity refinement expands the extent to
  roughly `1016 x 811`, so Product overview readability and camera behavior
  remain open even when the structural invariants survive.

The formal outcome is `B`: Frontier-seeded HQ direction is promising as a
bounded research pipeline, but a general structural-seeded capacity pipeline
and Product-readable candidate have not been established.

Standing statuses remain unchanged: Gate 2 `OPEN`, quality solver
`HOLD / NOT ESTABLISHED`, production provider `NOT ESTABLISHED`, Product
integration/default `HOLD`, Human Review `NOT READY`, Adaptive Cascade
inactive, and Initial Layout Release blocker `OPEN`.

## Scope and authority

The diagnostic only consumes derived Node positions and runs existing
capacity-shaped transformations after a structural seed. It does not move
ordinary routing, Parallel / Incident allocation, endpoint-plan authority,
final Relation-label or Node-label placement, Self-loop routing,
viewport/camera, Dataset, stored/authored Coordinates, persistence,
dirty-state, Save Coordinates, or manual semantics into Structural
Placement.

The current Product `More -> Auto Layout` remains the old
`solveAutoLayout(input)` control with its source default of 12 iterations.
No Product provider, default, adoption, Adaptive Cascade, or Worker
integration was changed.

## Seed selection

The seed positions are taken from the previous common-fixture artifact. No
historical Human Review judgment is inherited.

| Role | Candidate | Evidence |
| --- | --- | --- |
| Primary seed | Frontier current-source reconstruction | Canonical Lighthouse/Apollo/Parallel rows retain zero crossings; bounded current-source evaluation count is usually 13 |
| Quality reference/control | Post current-source reconstruction | Strongest recorded canonical quality reference; materially more expensive current-source search |
| Dense structural control | `grid-structural` or Frontier dense arm | Stress control only; neither is treated as release quality |

The common fixture remains the exact Dataset topology, Entity/Relation IDs,
labels, and current Product evaluator from Common-Fixture Cross-Lineage
Comparison 1. The structural-seeded artifact is
`LIAISONSCAPE-STRUCTURAL-SEEDED-CAPACITY-REFINEMENT-1`.

## Structural preservation contract

The refinement is accepted as structurally preserving only when all of the
following hold relative to its seed:

1. component-local pair ordering does not change;
2. routed crossing count does not increase; and
3. Node-body overlap count does not increase.

Minimum separation, extent, label pressure, ownership, and camera fit remain
separate observations. A lower occupied-overlap count is not allowed to
compensate for a structural invariant failure.

This is a diagnostic rejection contract, not a new production objective or
selector score.

## Matrix results

| Fixture / seed | Label-Capacity | Infinite-Canvas | Occupied-Geometry | Interpretation |
| --- | --- | --- | --- | --- |
| Lighthouse / Frontier | `3/3` candidates preserve; selected intensity `0.8`, `0` crossings, `0` Node overlap, `0` ordering changes | `0/1` preserve | `0/3` preserve | capacity can extend the strong structural seed, but extent grows to about `1016 x 811` |
| Lighthouse / Post | `2/3` preserve; selected intensity `0.8` | `0/1` preserve | `0/3` preserve | Post also tolerates a label-capacity stage, but does not justify its higher search cost here |
| Apollo JA / Frontier | `0/3` preserve | `0/1` preserve | `0/3` preserve | no Frontier-seeded refinement candidate survives the contract |
| Apollo JA / Post | `3/3` preserve; selected intensity `0.55` | `0/1` preserve | `0/3` preserve | capacity tolerance is seed-dependent; this does not make Post the primary seed |
| Dense K7x7 / Frontier | `0/3` preserve | `0/1` preserve | `0/3` preserve | global topology coupling remains; refinement is rejected |
| Dense K7x7 / structural control | `0/3` preserve | `0/1` preserve | `0/3` preserve | no capacity stage may trade structural degradation for local occupancy in this checkpoint |
| Parallel/Self-loop / Frontier | `0/3` preserve | `1/1` preserve | `3/3` preserve | bounded control supports the staged architecture; existing routing authorities remain unchanged |

Stage timings are measured in the diagnostic process and include the current
Product presentation evaluation used by each candidate batch. Representative
values were:

- Frontier Lighthouse: seed `477.7ms`, Label-Capacity batch `207.8ms`,
  Infinite-Canvas `54.0ms`, Occupied-Geometry `159.4ms`;
- Post Lighthouse: seed `8515.4ms`, Label-Capacity batch `145.6ms`,
  Infinite-Canvas `55.8ms`, Occupied-Geometry `181.7ms`;
- Frontier Dense: seed `3466.3ms`, Label-Capacity batch `836.1ms`,
  Infinite-Canvas `332.9ms`, Occupied-Geometry `3149.1ms`.

These are bounded diagnostic measurements, not a browser-independent SLA.

## Actual Product smoke

The real LiaisonScape App surface was inspected for Lighthouse EN:

- Frontier seed initially appeared at a clipped 79% framing. Product Reset
  view recovered the full graph at approximately 51%; no obvious structural
  or routing defect remained in the overview.
- Frontier + Label-Capacity initially appeared clipped at the same framing.
  Reset view recovered the full graph at approximately 35%, but the overview
  became too small for reliable Relation-label reading.

This distinguishes two effects. The initial clipping is not by itself proof
of a layout defect because Product Reset view recovers the graph. The much
larger refined extent does, however, create a real camera/readability
coupling: the candidate needs a substantially smaller overview scale for the
same Product surface. This smoke is not formal acceptance and no Human Review
campaign was started.

## Responsibility attribution

| Observation | Attribution |
| --- | --- |
| Frontier/Post ordering and crossing signal | Structural Placement seed |
| Candidate acceptance/rejection against structural invariants | Diagnostic comparison contract; not a production selector |
| Extent expansion and coarse spacing demand | Capacity feedback applied to derived Node geometry |
| Route crossing, Relation-label ownership, and final label placement | Existing Product routing/presentation authority |
| Parallel lanes, reverse direction, shared endpoint capacity | Existing Parallel/Incident and endpoint-plan authority |
| Self-loop angle/radius | Independent Self-loop routing/capacity track |
| Initial framing versus Reset-fit framing | Product viewport/camera behavior |
| Readability at 35% overview | Product presentation/camera coupling; not solved by Structural Placement alone |

## Gate and readiness

```text
primary seed                         = Frontier
quality reference                    = Post
structural-seeded stage boundary     = DIAGNOSTICALLY VALID
general capacity refinement          = NOT ESTABLISHED
dense structural preservation        = FAILED / REJECTED
Actual Product smoke                 = COMPLETED; overview readability open
Human Review                         = NOT READY
production provider                  = NOT ESTABLISHED
Product integration/default          = HOLD
Adaptive Initial Placement Cascade   = INACTIVE
Initial Layout Release blocker       = OPEN
```

The next research decision is whether to improve the bounded refinement
contract or to treat the Frontier seed plus selective capacity refinement as
a research portfolio seam. It is not a reason to add a larger solver,
relax the structural invariants, or adopt a Product provider.
