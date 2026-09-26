# LiaisonScape Topology-Aware Free-Form Crossing-Minimizing Auto Layout Experiment 1

Date: 2026-09-15
Status: `DIAGNOSTIC RESULT / NOT READY FOR USER COMPARISON`

## Purpose

This bounded experiment tests whether an explicit Auto Layout candidate can
move beyond fixed grid/circle final geometry by using graph topology for a
continuous initial placement, bounded global crossing reduction, spacing
adjustment, and local relaxation before Product-authoritative evaluation.

It is not a Product adoption change and does not replace the current Product
provider. The candidate remains disposable derived Node geometry.

## Method

The diagnostic implementation in LiaisonScape:

- derives connected components and deterministic degree/hub roots;
- derives BFS layers and bridge signals;
- places nodes in a continuous, jittered topology seed rather than a grid or
  circle;
- applies bounded deterministic local continuous moves using straight-crossing,
  overlap, spacing, and edge-length pressure;
- evaluates six bounded candidates through the existing Product presentation
  authority;
- selects by Product crossings, overlap, label-route pressure, label-near
  pressure, label overlap, and score.

The exact artifact is maintained in the LiaisonScape repository:

[`result-summary.json`](https://github.com/sukoyaka-dopeness/e2r-liaison-scape/blob/main/experimental/topology-aware-free-form-crossing-experiment1/result-summary.json)

The Actual Product evidence index is:

[`visual-evidence-index.md`](https://github.com/sukoyaka-dopeness/e2r-liaison-scape/blob/main/experimental/topology-aware-free-form-crossing-experiment1/visual-evidence-index.md)

## Evidence

The candidate was deterministic on all seven rows and always evaluated six
bounded candidates. Dense `k7-7` improved the current Product evaluator's
routed crossing count from Frontier `143` and Post `129` to `100`. However,
the same selected candidate retained `5` label-route hits and `17` label-near
signals, with extent about `1293 x 539` and fitScale about `.448`.

The public rows did not generalize:

- Lighthouse: `3` crossings and `1/2` label-route/near signals;
- Apollo: `6` crossings and `2/4` label-route/near signals;
- Titanic: zero crossings but extent about `2828 x 348`, producing a very
  small Reset overview;
- Japanese long-label: extent about `1545 x 410`, with poor overview text
  association despite zero counted crossings.

Actual Product smoke confirmed the machine trade-off. Lighthouse and Apollo
remained inspectable but did not improve association readability. Titanic
became an extremely wide, tiny overview. The Japanese long-label control
remained too small and capacity-bound. Dense crossing reduction did not make
the repeated Relation-label surface release-readable.

## Responsibility interpretation

The experiment isolates a real Structural Placement signal: topology-aware
free-form movement can change crossing topology and reduce dense crossings.
It also shows that the remaining failure is not purely a fixed grid/circle
limitation. Node geometry, routing, Relation-label ownership/capacity, and
overview extent are coupled in the Product surface.

The result does not justify moving routing, final Relation-label placement,
endpoint-plan, Node-label placement, Self-loop routing, or viewport authority
into Structural Placement. Product authority remains unchanged.

## Outcome

The result is closest to:

`C. STRUCTURAL IMPROVEMENT BUT PRESENTATION TRADE-OFF`

and, for the current public Product surface, also supports:

`D. NO MEANINGFUL GENERAL IMPROVEMENT OVER FRONTIER / POST`.

No new candidate is ready for user visual comparison or Human Review. The
experiment does not open a follow-up free-form retune or a new solver family.
It also does not adopt Fast Initial Placement + High-quality Auto Layout,
Adaptive Initial Placement Cascade, a production provider, or a Product
default.

Standing statuses remain: Gate 2 `OPEN`, quality solver `HOLD / NOT
ESTABLISHED`, production provider `NOT ESTABLISHED`, Product
integration/default `HOLD`, Human Review `NOT READY`, Adaptive Cascade
inactive, and Initial Layout Release blocker `OPEN`.
