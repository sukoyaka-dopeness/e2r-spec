# LiaisonScape Frontier / Product Worker Execution Proof 1

Date: 2026-09-16

## Final classification

`WORKER EXECUTION / PARITY / NON-BLOCKING / CANCELLATION PROOF ESTABLISHED`

This is a diagnostic execution proof only. Frontier is not wired into the
normal App path, and the production default remains `settleInitialPlacement`.

## Source boundary

The browser harness runs the current shared
`src/frontier-candidate-generator.ts::generateFrontierCandidateSet`, then
applies the existing Frontier-12 viewport-anisotropic transform
(`0.88 / 1.12`). Product presentation is computed by the current pure
`src/graph-presentation.ts::deriveBoundedAutomaticPresentation` and
`src/automatic-layout-quality.ts::deriveAutomaticLayoutQualityMetrics`.
The Product hard-feasibility gate and deterministic score/family ordering are
shared in `src/automatic-layout-selection.ts`. No routing, label, Self-loop,
Dataset, persistence, or App authority is moved into the Worker.

The Worker receives a serializable operation envelope containing operation ID,
generation, snapshot identity, graph data, and explicit Frontier configuration.
Only a complete finite result is posted as a completed result. The main thread
validates identity and output before any future adoption; this proof does not
perform adoption or rendering.

## Browser evidence

The reproducible harness is:

`experimental/frontier-product-worker-execution-proof1/`

Run it at:

`/e2r-liaison-scape/experimental/frontier-product-worker-execution-proof1/`

The captured result is in
`../e2r-liaison-scape/experimental/frontier-product-worker-execution-proof1/browser-result.json`.

| Fixture | Graph | Worker compute | Candidate generation | Product presentation | Worker wall / transport | Selected family | Final fingerprint |
| --- | ---: | ---: | ---: | ---: | ---: | --- | --- |
| Lighthouse EN | 10 / 14 | 477.8 ms | 103.3 ms | 350.4 ms | 501.1 / 23.3 ms | structural-frontier-9-circular-order | 4cc6d8ae2c92 |
| Apollo EN | 9 / 11 | 365.3 ms | 118.7 ms | 230.4 ms | 385.9 / 20.6 ms | structural-frontier-4-grid-structural | 9e821a079aee |
| dense K7-7 | 14 / 49 | 3025.7 ms | 1211.9 ms | 1695.5 ms | 3050.4 / 24.7 ms | structural-frontier-1-grid-structural | bdd252c1b045 |

All three rows had exact candidate-set, Product proposal, selected-position,
and persisted reviewed family/fingerprint parity. The focused core test also
repeated the computation and verified structured-clone serializability.

## Responsiveness and lifecycle evidence

On a real dense K7-7 Worker run, the main-thread maximum interval gap was
14.1 ms and maximum RAF gap was 16.9 ms; no Worker-run long task was observed.
This establishes non-blocking behavior for this measured envelope, not a
general browser SLA.

Cancellation was exercised after the Worker sent its started signal while the
dense computation was in progress: termination completed in 0 ms, no result
was received, and no partial result was published. A structured invalid-config
failure was observed, and a result with a mismatched generation/snapshot was
rejected as stale. Incomplete/non-finite output has a fail-closed validation
gate; no such output was emitted in this run.

## Boundary and remaining work

The execution proof supports the previously selected architecture:

`Worker: Frontier candidate generation -> pure Product proposal evaluation/selection`

`Main thread: operation/snapshot validation -> render/session adoption authority`

The proof does not authorize normal App wiring, production default adoption,
Cancel UI, transient preview, timeout policy, or fallback implementation.
The next required checkpoint is the bounded App async adapter/lifecycle
contract, including coordinate-authority gating, replacement/remount
invalidation, failure fallback, and validated derived-position adoption.
