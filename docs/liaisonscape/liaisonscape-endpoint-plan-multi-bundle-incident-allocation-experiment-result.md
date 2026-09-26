# LiaisonScape Endpoint Plan / Multi-Bundle Incident Allocation Experiment

Date: 2026-09-13

## Decision

**RETUNE / NOT READY FOR HUMAN REVIEW.** A bounded deterministic endpoint-plan
contract can arbitrate multiple parallel bundles before atomic commit, and the
shared-endpoint synthetic succeeded without ordinary-route churn. Canonical
single-bundle results preserve Experiment 2. Titanic EN remains a routing-side
capacity shortage until a request-driven placement counterfactual is applied;
that counterfactual is promising machine evidence but is a new placement
candidate without Human Review.

Product default/adoption remains `HOLD`, the production provider remains `NOT
ESTABLISHED`, and the Initial Layout Release blocker remains `OPEN`.

## Endpoint-plan architecture

The architecture has two browser-compatible pure decision layers above the
existing Product presentation authority:

1. **Per-group incident candidates** reserve endpoint half-sectors, bundle
   lanes, deterministic Relation-label envelopes, outer guards, obstacle
   guards, and any ordinary Relation route changes.
2. **Endpoint plan** selects one candidate for every bundle sharing an
   endpoint. It rejects overlapping sector reservations and two candidates
   claiming the same ordinary Relation. It then materializes the complete
   route set and runs the existing Product Relation-label/presentation
   derivation as an authoritative combined hard-validation point.

Only a plan that passes both reservation constraints and combined Product
presentation validation can be atomically committed. A capacity-shortage
decision and its structured requests are distinct from diagnostic fallback
candidate IDs; fallback geometry remains visualization-only.

Relation-label final placement remains Product-owned. Self-loop, manual
curvature, and manual Relation-label state are not inputs to or outputs from
the new allocator in this experiment.

## Bounded search

Groups and candidates use canonical IDs and deterministic cost ordering. A
depth-first branch-and-bound search rejects sector and ordinary-claim conflicts
before materialization, prunes branches that cannot beat the best plan, and
has a hard maximum of 512 explored states. Combined Product hard validation can
reject a leaf and force backtracking rather than accepting a locally feasible
combination.

Tests establish three distinctions that sequential commit cannot express:

- a locally cheapest bundle candidate may conflict with a later bundle, while
  bounded backtracking finds a compatible second candidate;
- two independently feasible candidates may have no compatible endpoint
  sectors and therefore return `capacity-shortage`;
- two bundles may not both claim authority to reroute the same ordinary
  Relation.

These are contract-level bounded synthetics. They do not claim Product visual
quality.

## Canonical evidence

Canonical fixtures contain at most one tested parallel bundle, so endpoint
planning intentionally preserves the Experiment 2 geometry and exposes no new
multi-bundle behavior.

| Cell | Endpoint plan | Candidates / states | Ordinary route changes | Key screen-space geometry | Diagnostic time |
| --- | --- | --- | ---: | --- | ---: |
| Lighthouse EN | feasible | 70 / 2 of 512 | 0 | lane 20.4, label 8.5, ownership 40.4, outer 7.7 | ~263 ms |
| Lighthouse JA | feasible | 56 / 2 | 0 | same geometry | ~218 ms |
| Titanic EN | capacity shortage | 70 / 0 | fallback-only 4 | fallback outer 1.3 | ~344 ms |
| Titanic JA | feasible | 70 / 2 | 1 | lane 23.7, label 36.9, ownership 29.5, outer 16.4 | ~302 ms |
| Apollo EN/JA | feasible empty plan | 0 / 1 | 0 | no parallel control; unchanged | ~15 ms |

All matched reruns were deterministic. Titanic EN preserves the Experiment 2
request: required half-sector about 26.4 degrees, available about 14.2 degrees,
shortage about 12.2 degrees, four conflicting ordinary Relations, and
outer/obstacle/port pressure. Endpoint-level orchestration does not create
capacity that is absent from a single bundle's local geometry.

## Multi-bundle and topology evidence

The shared-Node, two-parallel-bundle synthetic generated 126 per-group
candidates. The endpoint planner found a feasible joint plan in 6 explored
states, retained physical-side ordering, had no ordinary-route churn, and took
about 92 ms in the diagnostic process. The final combined Product presentation
was hard-validated before the plan was accepted.

The deliberately crowded 28-degree two-bundle synthetic did not reach plan
search because one group had no hard-feasible candidate after label, outer,
and obstacle validation. It returned `capacity-shortage` and rendered only a
diagnostic fallback. This distinguishes local capacity failure from a true
cross-bundle reservation conflict; the latter is covered separately by the
allocator contract tests.

The 2/3-plus parallel, mixed reverse, short/long combinations, multiple
ordinary Relations, nearby obstacle, asymmetric endpoint, mirror, and rotation
controls preserved the previous hard-feasible/shortage classifications.

## Capacity-negotiated placement counterfactual

The Titanic EN shortage request was used as the target angle for a generic
bounded counterfactual. Only ordinary neighbors inside the requested sector
were moved outward while preserving their radial distance; no fixed 32-degree
constant, fixture ID, person name, or authored coordinate was used.

The counterfactual made Titanic EN routing feasible in 2 endpoint-plan states:

- requested half-sector: about 26.4 degrees;
- minimum screen-space Node separation: 68.3 -> 64.4 px;
- combined crossings: 0;
- ordinary route changes: 4;
- diagnostic endpoint-plan time: about 347 ms.

This is evidence that the structured request is actionable and less destructive
than the rejected fixed 32-degree relief. It is not accepted placement: viewport
balance, other incident corridors, interaction continuity, and Actual Product
human readability remain unreviewed. Lighthouse received no correction because
its routing plan was already feasible; request absence is part of the generic
contract.

## Production-native feasibility and risks

The endpoint-plan and decision contracts contain no Node/server APIs and are
deterministic, so their orchestration boundary is browser-native. Production
readiness is not established because:

- 56-70 candidates per group and 126 in the bounded two-bundle case remain a
  diagnostic generation budget, despite only 2-6 explored plan states;
- multiple bundles can create a larger cross-product and need measured caps;
- combined Product validation may require several leaf materializations;
- drag continuity, cancellation, and coexistence with manual routes need
  explicit lifecycle contracts;
- request-driven placement needs bounded ownership and viewport safeguards.

## Next direction

Continue one bounded architecture step rather than Product integration. Retain
the endpoint plan and structured shortage boundary, reduce per-group candidate
generation to explicit port families, and measure multi-bundle portfolio growth
under several shared-endpoint topologies. In the adjacent Structural Placement
track, evaluate request-driven angular capacity with general Node/viewport
guards and Actual Product rendering. Do not revive fixed angular relief.

No new candidate is ready for Human Review: the canonical routing candidate is
still incomplete for Titanic EN, while the counterfactual that makes it
feasible changes placement and has only machine evidence.
