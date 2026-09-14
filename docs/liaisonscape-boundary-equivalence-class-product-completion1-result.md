# LiaisonScape Boundary Equivalence-Class Product Completion / Cost Envelope 1

Date: 2026-09-14

## Scope

This checkpoint follows `Independent Risk-Gate / Probe-Target Stability
Validation 1`, which classified the previous one-probe target rule as
`C. ORDER DEPENDENCY CONFIRMED / TARGET RULE NOT ESTABLISHED`.

The question here is not another target heuristic. It is whether the ambiguity
can be represented as a deterministic cheap-equivalence class crossing the
K=4 boundary and handed back to the existing Product authority as a complete
class, with a bounded and measurable evaluation cost.

The study retains existing candidate generation and the current
Product-authoritative presentation. It does not add a solver family, Product
provider, Product integration, or Product default, and it does not move
ordinary routing, Parallel / Incident allocation, endpoint-plan,
Relation-label, Node-label, Self-loop, viewport, or final Product selection
authority into Structural Placement.

## Boundary equivalence-class definition

For each operation, candidates are first ranked by the existing cheap
lexicographic K=4 formulation. A boundary class is then defined as a group
with the same six-decimal-quantized cheap feature vector:

```text
crossings | separationDeficit | labelSpanDeficit |
coarseCorridorPressure | angularPressure | extentDiagonal | edgeSpread
```

A group is a boundary class only when all of the following hold:

1. class size is at least K (`4`);
2. at least one class member is inside the normal K=4 finalists; and
3. at least one class member is outside the normal K=4 finalists.

Class membership uses cheap features only. Product score, Product crossings,
label-route hits, Product-best identity, fixture identity, candidate index, and
Product fingerprints are not used to form or trigger a class.

The full completion policy evaluates every outside member of every boundary
class with the current Product-authoritative presentation. It deliberately has
no density gate. The capped policies evaluate the first `+2`, `+4`, or `+6`
outside members in a deterministic canonical geometry order: quantized Node
position signature, then family and fingerprint. This order is independent of
candidate-generation index and Product metrics.

## Compared policies

| policy | description |
|---|---|
| cheap K=4 | existing cheap-only baseline |
| previous density + one index | prior diagnostic multi-stage policy |
| full boundary | complete every outside member of every boundary class |
| capped boundary +2/+4/+6 | stable geometry-ordered bounded class completion |

The campaign covers 34 operations: the previous 26 operations plus eight
independent controls across `independent-k6-7`, `independent-k7-6`,
`independent-k8-7`, and `independent-k5-8-minus-one`.

## Quality and cost evidence

The full candidate oracle contained 420 Product candidate evaluations across
the 34 operations. The aggregate results were:

| policy | exact-best | top-3-any | meaningful misses | Product evaluations | extra evaluations | max extra | avoided |
|---|---:|---:|---:|---:|---:|---:|---:|
| cheap K=4 | 30/34 | 32/34 | 4 | 136 | 0 | 0 | 284 |
| previous density + one index | 32/34 | 32/34 | 2 | 140 | 4 | 1 | 280 |
| full boundary | 34/34 | 34/34 | 0 | 182 | 46 | 8 | 238 |
| capped boundary +2 | 30/34 | 33/34 | 4 | 148 | 12 | 2 | 272 |
| capped boundary +4 | 32/34 | 34/34 | 2 | 160 | 24 | 4 | 260 |
| capped boundary +6 | 33/34 | 34/34 | 1 | 172 | 36 | 6 | 248 |

Full boundary completion retained `100%` baseline-improvement retention, zero
mean and maximum regret, and a `56.7%` reduction from the full oracle
evaluation count. Its median extra evaluation count was `0`, p95 and maximum
were `8`. Six of 34 operations crossed a boundary class; the measured
selected Product presentation sum was approximately `33,982ms`, with a
worst-operation sum of approximately `3,709ms`. The completion portion was
approximately `11,006ms` in total and `2,540ms` at its worst operation. These
are measured Product-authority presentation timings, not a browser main-thread
SLA or candidate-generation timing.

The previous density + index policy remains order-dependent and closes only
`32/34` in this combined set. Stable caps are order-invariant, but `+2`, `+4`,
and `+6` retain 4, 2, and 1 meaningful misses respectively. A bounded cap
therefore improves cost control but does not establish recall closure.

## Product variance within cheap-equivalent classes

Seven boundary classes were observed: four across the previous dense witnesses
(two in `dense-k7-7`, one in `dense-k6-8`, and one in `dense-k5-9`) and three
in independent dense controls. Class sizes were `4`, `6`, or `12`;
outside-member counts were `3` or `8`.

The class summaries showed material Product variation despite identical tested
cheap vectors. Product crossing ranges reached `30` to `43`, label-route-hit
ranges reached `3` to `7`, and Product score ranges reached millions of score
units. The Product-best candidate was therefore not recoverable from the cheap
vector alone. Full class completion is a direct response to this observed
variance; it is not a post-hoc Product-best rescue.

The independent controls are important: full boundary completion reached
`26/26` on the previous operations and `8/8` on the independent controls. The
edge-perturbed independent case did not create a spurious completion class.

## Order invariance and failure semantics

Reversing candidate arrays and reassigning generation indices produced:

- previous density + one index: order-invariant on `30/34`, with four target
  differences;
- full boundary completion: invariant on `34/34` selected candidate sets;
- capped boundary `+2`, `+4`, and `+6`: invariant on `34/34` selected candidate
  sets.

The full and capped policies compare candidate fingerprint sets rather than
incidental class enumeration order. Their Product selection remains governed
by the existing Product comparator after the same candidate set is evaluated.

A controlled failure-injection run set
`E2R_BOUNDARY_INJECT_PRODUCT_FAILURE=1`. All policies fail-closed on all 34
operations, with no selected verified result and zero exact-best hits. The
normal fixed artifact records zero fail-closed operations and classification
requires that condition. Failure, timeout, or budget exhaustion cannot be
treated as successful class completion.

## Disposition

Classification:

`A. BOUNDARY CLASS COMPLETION ESTABLISHED WITH ACCEPTABLE COST`

This A is bounded diagnostic evidence for the completion architecture, not a
production selector or quality-solver adoption. The boundary-equivalence
trigger is `DIAGNOSTICALLY SUPPORTED`; full completion is `QUALITY CLOSED IN
TESTED SET` and within the tested cost envelope. Capped completion remains
`NOT CLOSED`.

Standing status remains:

- execution split: `PROVISIONALLY ADOPT`;
- cheap-only selector: `HOLD / NOT ESTABLISHED`;
- risk gate: `OPEN`;
- probe target: `NOT ESTABLISHED`;
- multi-stage selector: `DIAGNOSTICALLY PROMISING / PRODUCTION INTEGRATION NOT ESTABLISHED`;
- quality solver: `HOLD / NOT ESTABLISHED`;
- Product integration/default: `HOLD`;
- production provider: `NOT ESTABLISHED`;
- Adaptive Initial Placement Cascade: `INACTIVE`;
- Actual Product visual evaluation: `NOT READY`;
- Human Review: `NOT READY`; and
- Initial Layout Release blocker: `OPEN`.

No new geometry candidate or Product surface behavior was introduced, so no
Actual Product visual smoke check or Human Review was warranted. This result
does not authorize Product adoption, default changes, provider selection, or
Adaptive Cascade.

## Reproduction and files

The fixed artifact is
`experimental/boundary-equivalence-class-product-completion1/benchmark-result-summary.json`.
The reproduction tool is
`tools/boundary-equivalence-class-product-completion1.mjs`; its audit is
`tools/boundary-equivalence-class-product-completion-audit.mjs`. Focused tests
cover full completion, capped recall/cost tradeoff, order invariance, class
variance, and standing adoption holds.

No historical result document was rewritten. No knowledge candidate was
promoted: this remains repository-local evidence and the completion architecture
has not been integrated into Product execution.
