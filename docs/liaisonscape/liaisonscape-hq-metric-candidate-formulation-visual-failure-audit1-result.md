# LiaisonScape HQ Metric / Candidate Formulation Visual Failure Audit 1

Date: 2026-09-15

## Result

Classification: `C. METRIC AND CANDIDATE FORMULATION BOTH INSUFFICIENT`.

The existing candidate pools contain options that improve newly measured visual
risk, so current HQ ranking is part of the failure. Those options still fail on
the Actual Product surface, so metric correction alone cannot close the gap.
The current candidate formulation does not create enough label-capacity and
cluster-separation diversity for dense or long-label cases.

## Metric audit

`src/automatic-layout-quality.ts` measures Product route crossings,
crossing/Relation-label proximity, route contact with Node labels, Node-label
pair overlap, usable Relation-label span, short hops, route length, and extent.
It records but does not score `fitScale`, corridor metrics, or minimum Node
separation. More importantly, its `labelOverlap` is only Node-label versus
Node-label. It did not measure:

- Relation-label versus Relation-label overlap;
- Node-label versus Relation-label overlap;
- foreign route versus Relation-label collision;
- whether a Relation label is as close to another route as its owning route;
- post-fit effective text scale; or
- fitted label occupancy.

This directly explains why the dense and Japanese failures could receive a
winning HQ score. The signals existed in Product presentation geometry, but
the complete visual occupancy and association state was absent from ranking.
Graph-space overlap categories were the strongest explanation; fit scale then
made already-crowded output small. Fit was an amplifier, not the sole cause.

A diagnostic-only visual-risk decomposition was added. It consumes current
Product presentation output and does not route or place labels. Candidate
comparison is lexicographic (all-label overlap, ownership ambiguity,
foreign-route hits, descending fit, existing HQ score), with no newly tuned
production scalar.

## Candidate-pool evidence

The exact deterministic browser frontier adapter used by the established
Worker/provider campaign was replayed: canonical 8 candidates, dense 12,
Japanese label-heavy 8, and a bounded Self-loop control with 8. Every candidate
was evaluated by current Product presentation, current HQ metric, and the new
diagnostic decomposition.

| Case | Current HQ selection | Visual-risk rank | Diagnostic best | Important delta | Actual Product result |
|---|---:|---:|---:|---|---|
| canonical 8/10 | 4 | 2 | 1 | no overlap/ownership delta; fit +0.007 | prior/current smoke stable; no material HQ gain |
| dense 14/49 | 11 | 6 | 1 | Relation/Relation overlap 13 -> 6; ambiguity stays 39; foreign hits 46 -> 51; fit 0.481 -> 0.470 | both FAIL |
| Japanese label-heavy 10/20 | 4 | 2 | 1 | Node/Relation overlap stays 4; ambiguity 15 -> 13; foreign hits 44 -> 29; fit unchanged at 0.537 | both FAIL |
| Self-loop control 8/11 | 4 | 1 | 4 | zero label overlaps, foreign hits, and ambiguity | PASS smoke only |

Candidate geometry had measurable diversity (7/8 canonical classes, 12/12
dense, 8/8 label-heavy, 8/8 Self-loop), but not useful capacity diversity.
Most candidates were small perturbations of the same three-cluster geometry.
Dense diagnostic-best traded fewer label overlaps for more foreign-route hits
and worse fit. Japanese diagnostic-best reduced route pressure but retained the
same long-label occupancy structure. Actual Product inspection confirmed that
neither became readable.

Therefore:

- a metric/ranking miss exists because better risk vectors were not selected;
- a candidate-formulation miss also exists because the best available vectors
  remain visually unacceptable; and
- current Product presentation interaction exposes the failures, but is not a
  separate hidden cause—the measured output itself contains them.

The missing generation capability is explicit label-capacity diversity:
topology-preserving cluster separation, long-label-aware extent/aspect
alternatives, and geometry that gives current Product Relation-label authority
distinct corridors and associations. A future small probe may add those signals
to candidate generation, but this checkpoint does not create a broad solver
campaign or change the production metric.

## Actual Product and authority

Five bounded previews were inspected with the real App renderer: dense current
and diagnostic-best, Japanese current and diagnostic-best, and Self-loop
current. The four difficult candidates failed; the Self-loop control showed one
clear loop without an obvious collision. That does not establish Self-loop
acceptance or replace the independent Self-loop track.

Product routing, Parallel/Incident allocation, endpoint-plan, Relation-label,
Node-label, Self-loop, viewport, and styling authorities were unchanged. The
operation-local preview remained read-only and non-adopting. Its synchronization
dependency was corrected forward to include operation ID, generation, snapshot
identity, and candidate fingerprint; a same-fingerprint lifecycle change can no
longer be missed.

## Readiness

- dense failure understanding: `ESTABLISHED FOR CURRENT POOL`;
- label-heavy failure understanding: `ESTABLISHED FOR CURRENT POOL`;
- Self-loop control coverage: `BOUNDED SMOKE ONLY`;
- HQ metric adequacy: `INSUFFICIENT`;
- candidate formulation adequacy: `INSUFFICIENT`;
- candidate-pool visual diversity: `MEASURABLE BUT NOT CAPACITY-SUFFICIENT`;
- metric/visual agreement: `IMPROVED DIAGNOSTIC EXPLANATION / NOT CLOSED`;
- operation-local preview: `ESTABLISHED IN DEVELOPMENT EVIDENCE PATH`;
- Worker execution: `ESTABLISHED IN TESTED ENVELOPE`;
- browser wall time: `NOT ESTABLISHED`;
- quality solver: `HOLD / NOT ESTABLISHED`;
- production provider: `NOT ESTABLISHED`;
- Product integration/default: `HOLD`;
- Human Review: `NOT READY`;
- Initial Layout Release blocker: `OPEN`.

The next bounded work should test one explicit label-capacity candidate
formulation against these fixed visual-risk vectors. It must retain canonical,
Parallel/Incident, and Self-loop controls and stop before Product adoption or
formal Human Review unless Actual Product smoke becomes viable.

No workspace knowledge candidate is promoted. The finding is currently tied to
one LiaisonScape candidate adapter, metric, and Product renderer.

`CHECKPOINT COMPLETE - CURRENT METRIC MISSES PRODUCT LABEL OCCUPANCY, WHILE
CURRENT CANDIDATE POOL CANNOT PRODUCE AN ACCEPTABLE DENSE OR LONG-LABEL OPTION`
