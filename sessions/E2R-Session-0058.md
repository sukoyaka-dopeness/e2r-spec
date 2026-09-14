# E2R Session 0058 - Boundary Equivalence-Class Product Completion / Cost Envelope 1

Date: 2026-09-14

## Scope

This session follows Session 0057's order-dependency result. It evaluates
whether cheap-equivalent candidates crossing the K=4 boundary can be completed
as a deterministic class through current Product authority, with a bounded
cost envelope. No new solver family or Product authority was introduced.

## Completed checkpoint

The boundary class uses a six-decimal quantized cheap feature vector covering
crossings, separation, label-span, coarse corridor, angular, extent, and
edge-spread signals. A class must have size at least four, contain a normal K=4
member, and contain an outside member. Product metrics are excluded from class
membership and triggering.

Across 34 operations, cheap K=4 reached `30/34` exact-best with four meaningful
misses. The previous density-gated one-index policy reached `32/34` but was
order-dependent. Full class completion reached `34/34` exact-best, `34/34`
top-3-any, zero meaningful misses, zero regret, and `100%` baseline retention.
It evaluated 182 of 420 oracle candidates, avoided 238 evaluations, and added
at most eight evaluations to an operation. Six operations crossed a boundary
class.

Stable geometry-ordered caps were order-invariant but remained incomplete:
`+2` left four misses, `+4` left two, and `+6` left one. Seven boundary classes
showed material Product variance, with crossing ranges up to 43.

Failure injection caused all 34 operations to fail closed and prevented any
unverified selected result. The fixed normal artifact records zero fail-closed
operations.

Classification:

`A. BOUNDARY CLASS COMPLETION ESTABLISHED WITH ACCEPTABLE COST`

## Standing status

- execution split: `PROVISIONALLY ADOPT`;
- cheap-only selector: `HOLD / NOT ESTABLISHED`;
- boundary-equivalence completion: `DIAGNOSTICALLY SUPPORTED`;
- full completion: `QUALITY CLOSED IN TESTED SET`;
- capped completion: `NOT CLOSED`;
- multi-stage selector: `DIAGNOSTICALLY PROMISING / PRODUCTION INTEGRATION NOT ESTABLISHED`;
- risk gate: `OPEN`;
- probe target: `NOT ESTABLISHED`;
- quality solver: `HOLD / NOT ESTABLISHED`;
- Product integration/default: `HOLD`;
- production provider: `NOT ESTABLISHED`;
- Adaptive Cascade: `INACTIVE`;
- Actual Product visual evaluation: `NOT READY`;
- Human Review: `NOT READY`; and
- Initial Layout Release blocker: `OPEN`.

No Actual Product visual smoke check or Human Review was performed because no
new Product visual candidate was created. No knowledge candidate was promoted.
No push, tag, release, deploy, or publication was performed.

The authoritative result is recorded in
`docs/liaisonscape-boundary-equivalence-class-product-completion1-result.md`.

`SESSION-0058 CHECKPOINT - FULL BOUNDARY COMPLETION CLOSED TESTED RECALL
WITHIN A BOUNDED DIAGNOSTIC COST ENVELOPE; CAPPED COMPLETION REMAINS OPEN`
