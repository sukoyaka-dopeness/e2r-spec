# LiaisonScape Worker Product Metric Parity / Actual Product Visual Candidate Gate 1

Date: 2026-09-15

## Result

Classification: `D. WORKER PRODUCT PARITY ESTABLISHED / VISUAL EVALUATION INCONCLUSIVE`.

The prior concern was valid. The Worker called the current Product presentation
implementation, but replaced the HQ research metric with a sample-count scalar
and fixed `crossings: 0`. That value was diagnostic-only, despite the earlier
artifact's overly broad `productMetrics` label.

## Authority audit and forward correction

The Product presentation authority is `src/graph-presentation.ts`. The current
Product UI has no HQ-layout candidate metric or final candidate selector. The
quality authority used by the production-shaped research provider was the
metric in `tools/generic-crossing-search.mjs`; final comparison is owned by
`experimental/production-shaped-quality-provider1/contract.mjs` and orders by
score, crossings, family, then fingerprint.

The reusable pure metric aggregation was extracted forward to
`src/automatic-layout-quality.ts`. It consumes Product-owned presentation and
does not route or place labels. Synchronous and Worker paths import the same
function; no Worker-specific metric fork remains. Metric calculation stays in
the Worker so its crossing, label/corridor, fit, and extent work does not return
to the UI thread. Final comparison and publication remain on the main thread.

The execution contract now distinguishes the resumable executor under
comparison from the checkpoint-selected Worker architecture. Historical result
documents and artifacts were not rewritten.

## Exactness and responsiveness

The browser campaign covered 28 finalists: canonical 8, dense cheap-equivalent
12, and label-heavy 8. Synchronous and Worker presentation signatures had zero
mismatches. Full selected metric objects and selected fingerprints also had
zero mismatches. Repeated canonical Worker selection remained deterministic.

Dense synchronous verification measured a 5,076.6 ms maximum main-thread
slice. Worker verification measured 26.8 ms, a 57.375 ms mean transport
overhead, a 10,950-byte maximum payload, and 30,768.0 ms wall time. Therefore
responsiveness isolation remains supported, but completion latency is not.
Worker cancellation terminated in 6.7 ms, received no result, and exposed no
partial result. Identity and stale-result validation remain unchanged.

## Actual Product gate

The actual Japanese Lighthouse Product surface was opened and visually
inspected. It rendered successfully and the current Fast Initial layout showed
visible central route/label congestion. This is not evidence about the HQ
candidate: the production-shaped provider has no App integration or bounded
preview hook, so the parity-selected candidate could not be rendered on the
Actual Product surface without crossing this checkpoint's explicit integration
hold.

Accordingly, canonical, Parallel/Incident-sensitive, Self-loop-sensitive,
dense, and Japanese HQ candidates were not claimed as visually inspected.
There is no metric/visual disagreement finding because the same candidate was
not available on both sides. Formal Human Review must not start from this
evidence.

## Readiness

- presentation parity: `ESTABLISHED IN TESTED ENVELOPE`;
- HQ research metric parity: `ESTABLISHED IN TESTED ENVELOPE`;
- final-selection parity: `ESTABLISHED IN TESTED ENVELOPE`;
- Worker execution: `ESTABLISHED IN TESTED ENVELOPE`;
- browser responsiveness: `MATERIALLY IMPROVED`;
- browser wall time: `NOT ESTABLISHED`;
- Actual Product visual evaluation: `INCONCLUSIVE`;
- visual quality and Human Review: `NOT READY`;
- quality solver: `HOLD / NOT ESTABLISHED`;
- production provider: `NOT ESTABLISHED`;
- Product integration/default: `HOLD`; and
- Initial Layout Release blocker: `OPEN`.

The next bounded checkpoint should establish a non-adopting, operation-local
Actual Product preview seam for the exact verified candidate, then inspect a
small representative visual set. It must not change Dataset, persistence,
dirty-state, manual authorities, or the Product default.

No workspace knowledge candidate is promoted: the correction and evidence are
specific to this repository's still-experimental HQ provider.

`CHECKPOINT COMPLETE - WORKER HQ RESEARCH METRIC AND SELECTION PARITY
ESTABLISHED; ACTUAL PRODUCT CANDIDATE VISUAL EVIDENCE REMAINS INCONCLUSIVE`
