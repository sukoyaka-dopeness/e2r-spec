# LiaisonScape Production-shaped Quality Provider Execution / Browser Cost Envelope 1

Date: 2026-09-14

## Scope

This checkpoint follows Boundary Equivalence-Class Product Completion / Cost
Envelope 1. It tests whether the established diagnostic composition can be
represented as a production-shaped, deterministic, interruptible execution
seam:

```text
existing candidate generation
 -> cheap lexicographic K=4
 -> boundary-class completion
 -> current Product-authoritative verification
 -> final Product selection
```

No new solver family was introduced. The candidate composition used for the
Node campaign was `structural-native-v3 + frontier-adaptive-12`; this is a
diagnostic composition choice, not solver adoption. Current ordinary routing,
Parallel / Incident allocation, endpoint-plan, Relation-label, Node-label,
Self-loop, feedback, viewport, and final Product selection remain the
authorities. The seam does not touch `App.tsx`, Product defaults, Dataset,
persistence, dirty state, Save Coordinates, or manual ownership.

## Execution seam

`experimental/production-shaped-quality-provider1/contract.mjs` defines a
pure state machine with four phases:

1. candidate generation;
2. cheap screen and K=4 plus full boundary completion;
3. Product-authoritative finalist verification; and
4. final selection only after every selected finalist is verified.

The input snapshot is immutable and semantic changes make an operation stale.
Cancellation, budget exhaustion, stale envelopes, candidate-generation failure,
and Product-verification failure expose no result. The result is therefore not
a best-so-far or partially verified candidate. The state machine is transport-
neutral and can be scheduled synchronously, cooperatively, or through a
Worker-shaped message envelope; it does not itself select a transport.

## Node semantic campaign

The existing bounded screening candidate pool was reused across 34 operations:
the prior 26 operations plus four independent dense/perturbed fixture families
and their candidate arms. Product verification reused the current
`generic-crossing-search.mjs` source authority. The provider completed all 34
operations with zero fail-closed normal runs and `182` Product-authoritative
candidate evaluations. The fixed boundary artifact's selected fingerprints
matched the provider result on `34/34` operations.

The aggregate phase timings were:

| phase | measured Node campaign time |
|---|---:|
| candidate generation | 8.583 ms |
| cheap screen | 14.757 ms |
| Product verification | 58,430.156 ms |
| final selection | 1.704 ms |

The candidate harness remains internally coupled, so its process wall time is
not relabeled as pure candidate-generation latency. Product verification is
the dominant measured cost. Cancellation returned `cancelled` with no result;
zero-work budget exhaustion returned `budget-exhausted` with no result.

## Browser campaign

The browser harness at
`experimental/production-shaped-quality-provider1/` exercised the same phase
contract over canonical, dense, and label-heavy controls. Its candidate
generation is a deterministic current-source adapter used only to measure the
execution seam; it is not a new solver family or Product acceptance. Product
verification uses the current `deriveBoundedAutomaticPresentation` authority.

| case | graph | finalist count | wall time | max scheduler/source slice | Product verification |
|---|---:|---:|---:|---:|---:|
| canonical | 8 nodes / 10 Relations | 8 | 243 ms | 36.5 ms | 195.9 ms |
| dense | 14 nodes / 49 Relations | 12 | 2,317.7 ms | 251.6 ms | 2,239.4 ms |
| label-heavy | 10 nodes / 20 Relations | 8 | 475.4 ms | 54.9 ms | 415.9 ms |

The browser artifact records scheduler turns, interval/animation-frame gaps,
phase timings, and long-task observations. The dense case reached a 255.8 ms
interval gap and a 233.2 ms animation-frame gap. Repeated canonical runs
returned the same selected fingerprint. Cancellation and budget exhaustion
were both fail-closed with no exposed result.

This differs from the earlier bounded verification scaling envelope: that
envelope measured one source-faithful verification operation at a time and
remained main-thread viable within its tested bound. This provider campaign
executes multiple finalist Product verifications as one quality operation, and
the dense finalist set creates a main-thread responsiveness blocker. The
evidence supports a Worker or further execution-architecture study for dense
quality work; it does not prove that a Worker is required for all workloads.

## Classification

`D. WORKER OR EXECUTION ARCHITECTURE STUDY REQUIRED`

The provider execution semantics are diagnostically established and exact in
the tested set. Browser cost is measured but not ready for production-shaped
main-thread adoption: dense work exceeds the observed 50 ms responsiveness
boundary, and label-heavy work is also just above it. This is an execution
architecture blocker, not evidence against the boundary-completion quality
semantics.

Standing status remains:

- quality solver: `HOLD / NOT ESTABLISHED`;
- production provider: `NOT ESTABLISHED`;
- Product integration/default: `HOLD`;
- Actual Product visual evaluation: `NOT READY`;
- Human Review: `NOT READY`;
- Adaptive Initial Placement Cascade: `INACTIVE`; and
- Initial Layout Release blocker: `OPEN`.

No Actual Product visual smoke check or Human Review was performed. The
browser harness is diagnostic and source-faithful for presentation metrics,
not a visual acceptance surface. No new candidate reached the readiness gate
for Actual Product inspection.

## Forward consistency correction

The current boundary completion tool had a wording mismatch: the branch tested
`cappedClosed !== null` while reporting `not closed`. The current source now
uses the consistent diagnostic wording
`C. CAPPED COMPLETION ESTABLISHED / FULL COMPLETION OR GENERALIZATION OPEN`.
The historical result artifact and historical result document were not
rewritten.

## Reproduction and validation

Changed LiaisonScape files are:

- `experimental/production-shaped-quality-provider1/contract.mjs`;
- `experimental/production-shaped-quality-provider1/index.html`;
- `experimental/production-shaped-quality-provider1/browser-main.ts`;
- `experimental/production-shaped-quality-provider1/provider-result-summary.json`;
- `experimental/production-shaped-quality-provider1/browser-result-summary.json`;
- `tests/production-shaped-quality-provider1.test.ts`;
- `tools/production-shaped-quality-provider1.mjs`;
- `tools/production-shaped-quality-provider1-audit.mjs`; and
- the forward wording correction in `tools/boundary-equivalence-class-product-completion1.mjs`.

Validation completed: focused provider tests `5/5 PASS`, full LiaisonScape
suite after the assertion correction `506/506 PASS`, provider audit `PASS`,
Node syntax checks `PASS`, lint `PASS`, production build `PASS`, and the browser
campaign `PASS` for canonical, dense, and label-heavy completion plus
determinism/cancellation/budget probes. No knowledge candidate is promoted by
this one-repository result.

`CHECKPOINT COMPLETE - PROVIDER SEMANTICS ESTABLISHED; DENSE BROWSER COST
REQUIRES WORKER OR FURTHER EXECUTION ARCHITECTURE STUDY`
