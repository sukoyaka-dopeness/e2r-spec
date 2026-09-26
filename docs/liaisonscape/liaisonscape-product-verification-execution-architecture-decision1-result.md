# LiaisonScape Product Verification Execution Architecture Decision 1

Date: 2026-09-14

## Scope

This checkpoint investigates the dense browser blocker found by Production-
shaped Quality Provider Execution / Browser Cost Envelope 1. It compares the
current synchronous candidate verifier, existing Product-authoritative
accumulators on the main thread, and Worker-isolated Product verification.

No routing, Parallel / Incident, endpoint-plan, Relation-label, Node-label,
Self-loop, feedback, viewport, or final Product metric authority was replaced.
No approximate evaluator, simplified router, App.tsx integration, Product
default change, Dataset mutation, persistence change, or manual-authority
change was introduced.

## Source cause

The prior provider yielded between candidates, but each `verifyCandidate`
called `deriveBoundedAutomaticPresentation()` synchronously. A finalist was
therefore one main-thread work unit. This directly explains the prior dense
251.6 ms slice.

Current source already exposes a complete Product-authoritative accumulator:
route selection advances one canonical ordered Relation at a time, followed by
one Relation-label, one Node-label, phase transitions, feedback, and finalization.
The previous scaling envelope measured these units on different bounded graph
families and observed no 50 ms source step. The provider-shaped candidate
geometry is more variable: repeated dense runs in this checkpoint produced
long and load-sensitive route/Node-label initialization units, including a
final fixed-run maximum of 47.9 ms and larger outliers in an earlier run. Thus,
candidate-level yielding was too coarse, while source-unit yielding materially
helped but did not provide a robust dense interaction boundary.

## Compared architectures

1. synchronous Product verification per finalist;
2. main-thread resumable verification using the current accumulator without
   changing its authority or order; and
3. Product verification in a Worker, with cheap screening and final Product
   selection retained in the provider/main-thread orchestration.

The Worker receives a structured-clone-safe immutable graph/candidate payload.
Responses must match operation ID, generation, snapshot identity, and candidate
fingerprint. A mismatch, Worker error, timeout, or budget exhaustion fails
closed. Cancellation terminates the Worker and publishes no partial result.
There is no fallback to a long synchronous Product evaluation.

## Browser evidence

The fixed Edge campaign used the same canonical, dense, and label-heavy
provider fixtures and finalist counts as the prior checkpoint.

| case | architecture | elapsed | max main-thread slice | interval gap | rAF gap |
|---|---|---:|---:|---:|---:|
| canonical | synchronous | 1,312.8 ms | 208.8 ms | 348.1 ms | 200.0 ms |
| canonical | resumable | 1,519.5 ms | 15.8 ms | 26.7 ms | 16.9 ms |
| canonical | Worker | 2,753.8 ms | 2.3 ms | 26.2 ms | 17.2 ms |
| dense | synchronous | 20,019.9 ms | 1,893.4 ms | 3,567.5 ms | 1,883.3 ms |
| dense | resumable | 21,949.6 ms | 47.9 ms | 59.0 ms | 33.6 ms |
| dense | Worker | 27,145.1 ms | 14.6 ms | 65.5 ms | 49.9 ms |
| label-heavy | synchronous | 4,799.1 ms | 948.7 ms | 1,719.3 ms | 933.1 ms |
| label-heavy | resumable | 4,137.5 ms | 20.6 ms | 34.3 ms | 17.0 ms |
| label-heavy | Worker | 7,366.9 ms | 4.1 ms | 24.6 ms | 17.0 ms |

The dense Worker result was load-sensitive. A separate run completed in
4,358.1 ms with a 1.6 ms main-thread slice and 21.4/17.0 ms interval/rAF gaps.
The fixed run completed in 27,145.1 ms. Exactness and UI-thread isolation were
stable; total wall time was not. This checkpoint therefore does not establish
a latency SLA or claim that Worker execution is always faster.

Per-candidate Worker payloads remained at or below 10,950 bytes. Mean measured
round-trip-minus-Worker-compute overhead was 45.512 ms canonical, 59.025 ms
dense, and 64.9 ms label-heavy; maxima were 58.2, 82.8, and 88.5 ms. This
prototype starts a Worker per candidate. A persistent operation-scoped Worker
is a later production optimization question, not needed to decide the
responsibility boundary.

## Semantic and failure evidence

For every verified candidate in all three cases, Worker presentation signatures
matched synchronous current Product output. Final Product metrics and selected
fingerprints also matched. Repeated canonical Worker runs selected the same
fingerprint and Product metric.

Worker cancellation returned `cancelled`, received no result, exposed no
candidate, and measured 0.8 ms timer delay plus 8.2 ms termination-call
latency in the fixed run. Main-thread resumable cancellation also exposed no
result. Focused tests establish source-step and wall budgets, verification
failure, stale input, generation mismatch, snapshot mismatch, and candidate
fingerprint mismatch as fail-closed conditions.

## Decision

Classification:

`B. WORKER PRODUCT VERIFICATION ARCHITECTURE ESTABLISHED IN TESTED ENVELOPE`

The selected responsibility boundary is:

```text
main thread/provider:
  immutable operation snapshot
  candidate generation and cheap screen
  finalist/boundary set
  operation lifecycle and stale-result rejection
  final Product metric selection and result publication

Worker:
  unchanged Product-authoritative presentation computation
  for one verified candidate at a time
```

Worker adoption here means architecture evidence only. The production provider
remains `NOT ESTABLISHED`, because App integration, operation-scoped Worker
lifecycle, deployment compatibility, and production error telemetry are not
implemented. Browser responsiveness is materially improved; total wall cost
remains load-sensitive and is not closed as a Product SLA.

Standing status:

- execution architecture: `ESTABLISHED IN TESTED ENVELOPE`;
- quality solver: `HOLD / NOT ESTABLISHED`;
- production provider: `NOT ESTABLISHED`;
- Product integration/default: `HOLD`;
- Actual Product visual evaluation: `READY FOR NEXT CHECKPOINT`;
- Human Review: `NOT READY`;
- Adaptive Cascade: `INACTIVE`; and
- Initial Layout Release blocker: `OPEN`.

No Actual Product visual evaluation or Human Review was performed in this
execution checkpoint. The next bounded checkpoint may inspect the candidate on
the Actual Product surface; that does not imply formal Human Review or provider
adoption.

## Reproduction

The browser harness and fixed artifact are under
`experimental/product-verification-execution-architecture1/`. The focused
test covers resumable execution, cancellation, budgets, failure/stale handling,
and Worker message identity. The audit requires exact Product signatures and
selection, responsiveness improvement, cancellation without a result, and all
standing adoption holds.

No knowledge candidate is promoted. The evidence is currently specific to one
repository and one bounded Product execution architecture.

`CHECKPOINT COMPLETE - WORKER PRODUCT VERIFICATION ARCHITECTURE ESTABLISHED
IN TESTED ENVELOPE; PRODUCTION PROVIDER AND PRODUCT INTEGRATION REMAIN OPEN`
