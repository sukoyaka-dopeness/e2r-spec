# LiaisonScape General Crossing-Aware Placement 1

Date: 2026-09-14

## Decision

**RETUNE / NOT READY FOR HUMAN REVIEW.** A production-native deterministic
placement can preserve viewport fit and Node separation with twelve candidates,
but the tested compact formulations do not also preserve dense routed-crossing
and label quality. The inverse formulation preserves much of the strong dense
crossing signal but loses Node/label clearance. This is a measured three-way
constraint between topology embedding, screen-space packing, and Product
presentation capacity, not evidence that crossing-aware placement is exhausted.

Product default/adoption remains `HOLD`, production provider remains `NOT
ESTABLISHED`, and the Initial Layout Release blocker remains `OPEN`. No Human
Review handoff was prepared and no prior Human evidence applies to this arm.

## Formulations explored

The new pure JavaScript diagnostic generator is bounded to 64 Nodes, 256 input
Relations, 768 cheap objective calls per candidate, and six local-swap passes.
It ignores duplicate ordinary pairs and Self-loops for structural ordering while
the unchanged Product evaluator still receives every Relation.

Three families were measured:

1. **guarded crossing grid**: viewport-shaped 150-unit slots, deterministic
   degree/BFS/structural-twin starts, rectangular and staggered variants, and a
   lexicographic cheap objective over straight crossings, incident angular
   pressure, maximum edge length, and total edge length;
2. **continuous viewport packing**: the strongest earlier crossing-ring,
   ordered-stress, and twin-spokes embeddings normalized toward a 600 x 360
   viewport envelope with bounded repulsion; and
3. **structural grid projection**: the same topology embeddings mapped to
   distinct viewport-shaped slots and locally optimized without changing the
   original sequential Product presentation authority.

The retained diagnostic code is family 1 plus family 3 (twelve candidates,
twelve or thirteen authoritative evaluations including finalization). The
continuous family is retained as checkpoint evidence only: it exposed the
crossing/clearance trade-off and was not retained because it produced Node
overlap and Relation-label regressions.

## Canonical evidence

The retained structural-grid formulation had zero routed crossings and zero
Node overlaps in all six cells. It preserved zero label hits for Lighthouse JA
and Titanic EN/JA, but introduced one hit in Lighthouse EN and retained
Apollo-specific near-label pressure (Apollo JA `labelNear20=3`, versus 2 in
Frontier-12). FitScale was approximately .823--.846, materially higher than the
Frontier-12 references (.406--.715), and graph-space minimum separation was 150.

The same selected positions were passed to the existing endpoint-plan audit.
Lighthouse EN, Titanic EN/JA, and both no-parallel Apollo controls were feasible;
Lighthouse JA reported an explicit `capacity-shortage` rather than accepting a
fallback. Titanic EN required three ordinary route changes. Thus compactness
cannot be treated as endpoint-capacity safety, even when aggregate crossing and
Node-spacing metrics are clean.

## Dense and perturbation evidence

References are retained `frontier-adaptive-12`. Counts are routed crossings /
Relation-label hits / `labelNear20`.

| Case | Reference | Retained compact grid | Reference runtime | New runtime |
| --- | --- | --- | ---: | ---: |
| k7-7 | 129 / 8 / 20 | 164 / 9 / 22 | 5.57 s | 1.88 s |
| k6-8 | 123 / 4 / 15 | 144 / 10 / 26 | 4.82 s | 1.80 s |
| k8-8 | 229 / 16 / 32 | 290 / 16 / 35 | 5.36 s | 2.80 s |
| k5-9 | 104 / 7 / 20 | 131 / 7 / 15 | 4.46 s | 1.63 s |
| k7-7 minus one Relation | 137 / 9 / 21 | 145 / 14 / 22 | 3.06 s | 1.81 s |

The retained arm uses 12--13 full evaluations versus 12--22 in the references.
Its graph-space minimum separation is 150 and fitScale is .684--.846, so
screen-space Node separation is approximately 103--127 pixels. Runtime and fit
are strong, but dense crossing/hit quality is not.

The continuous topology packing gave the opposite result before rejection:
k7-7 and k6-8 reached 83 and 75 crossings, close to Structural Formulation 1's
strong 81/72 signal and below the references, at about 1.81--1.94 seconds.
However it produced 16/17 label hits, 1/7 Node overlaps, and graph-space minimum
separation of about 100/63. k8-8 similarly reached 150 crossings but had 20
label hits, 7 overlaps, and minimum separation 61. Uniform viewport packing
therefore does not safely convert the earlier topology signal into readable
screen geometry.

The one-Relation perturbation remained bounded and deterministic but changed
the selected fingerprint and did not eliminate the same trade-off. This is a
control against treating complete-bipartite symmetry as a general result.

## Attribution and next hypothesis

The evidence separates four contributors:

- topology-aware twin/ring ordering is the main ordinary-crossing signal;
- distinct viewport slots are the main fit and minimum-separation signal;
- route/label safety is not predicted by straight crossings or angular pressure
  alone and remains authoritative Product-presentation work; and
- endpoint angular capacity is an independent hard feasibility boundary, as
  shown by Lighthouse JA shortage under otherwise clean aggregate metrics.

The next bounded formulation should generate a sparse embedding under hard
Node-separation, endpoint-capacity, and coarse label-corridor guards rather than
compressing after topology generation or snapping afterward. It should retain
the topology family's ordering while allocating screen-space cells/ports as a
joint constrained construction. If that cannot keep the dense crossing signal
without a large candidate portfolio, the project should re-evaluate the split
between fast Initial Placement and explicit High-quality Auto Layout.

Request-driven capacity negotiation remains a separate response contract; it
is not a substitute for globally safe initial geometry. Routing, labels,
Self-loops, persistence, coordinate authority, round-once semantics, Product
default, and provider behavior were unchanged.

## Validation and evidence

The LiaisonScape artifact is
`experimental/structural-formulation2/audit.json`. Focused structural tests and
the full 412-test suite pass. The generator is deterministic across node/edge
enumeration and duplicate/Self-loop controls. LiaisonScape lint and production
build, both repository diff checks, and E2R-SPEC validation pass at checkpoint
closure.
