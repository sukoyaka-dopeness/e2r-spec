# LiaisonScape Product Node-label Recovery Dense / Browser Main-thread Feasibility Experiment 1

Date: 2026-09-16
Status: bounded diagnostic checkpoint; Product adoption remains HOLD

## Scope

This checkpoint tested the production-shaped Node-label recovery integration from
the preceding Integration / Feasibility Experiment 1 against larger and denser
Product-shaped graphs. It did not redesign recovery, routing, Relation-label
placement, Self-loop handling, Structural Placement, or Auto Layout.

The tested boundary remained:

- first pass continuity-only;
- settled-pass hard-safe recovery or strict fresh non-movement gain;
- movement coefficient `distance * 4`;
- active drag recovery suppressed;
- ordinary routing, Parallel / Incident allocation, endpoint-plan authority,
  Relation-label authority, Self-loop authority, and Product defaults unchanged.

The source campaign used seven deterministic fixtures: Lighthouse-ish EN,
medium dense, large dense, high-degree-heavy, label-heavy EN, label-heavy JA,
and Parallel/Self-loop coexistence. The reproducible source artifact is in
`e2r-liaison-scape/experimental/product-node-label-recovery-dense-browser-feasibility1/source-result-summary.json`.

## Source evidence

Baseline recovery-disabled and `product-candidate` clean outputs were identical
for all seven fixtures. The candidate preserved the intended recovery output on
the shifted control and used 32 candidates per Node per placement pass. Candidate
row materialization therefore measured 640, 896, 1,024, 1,152, 1,408, or 1,792
rows for the tested graph sizes; this is a bounded, visible allocation counter,
not a heap profile.

The source profiler did not identify candidate comparison as the main cost:
recovery comparison was generally about 0.02–0.06 ms in the repeated settled
probes. The full derive, however, rose to about 0.27–0.33 seconds for medium
dense/high-degree, about 0.19–0.21 seconds for label-heavy and
Parallel/Self-loop controls, and about 1.9–2.0 seconds for the 28-node/200-edge
large-dense fixture. Node-label stage medians remained about 6–17 ms for the
non-large controls and about 64 ms for large dense. The dominant source cost is
therefore the full presentation pipeline, especially route and occupied-path
work, not the recovery comparison itself.

Recovery reuse was not uniformly lifecycle-stable in difficult controls. The
five-step shifted-position reuse sequence retained one fingerprint for
Lighthouse-ish, medium dense, large dense, and label-heavy JA, but produced
multiple fingerprints for high-degree-heavy, label-heavy EN, and
Parallel/Self-loop coexistence. This is a quality/lifecycle boundary requiring
its own checkpoint; it is not evidence to alter recovery semantics in this
experiment.

## Browser main-thread evidence

The actual Product surface was loaded in Edge using the diagnostic-only preview
page. The page passed the exact Product dataset and operation-local preview seam;
it did not pass diagnostic recovery props or replace Product authority. Timing
was collected from the actual App presentation timing sink, profiler, browser
`longtask` observer, rAF-gap observer, and a clearly labelled DOM-mutation proxy.
React commit time was not claimed because the current Product has no direct
commit instrumentation.

Representative repeated derive envelopes were:

| Fixture | Baseline derive | Candidate derive | Candidate Node-label stage | Longest observed browser task |
| --- | ---: | ---: | ---: | ---: |
| Lighthouse-ish | 45–78 ms | 44–137 ms | 3–15 ms | 292 / 352 ms |
| Medium dense, 16/64 | 422–490 ms | 418–476 ms | 11–20 ms | 1,949 / 1,894 ms |
| High-degree, 22/62 | 467–578 ms | 478–551 ms | 11–23 ms | 2,169 / 2,170 ms |
| Label-heavy EN, 18/54 | 271–305 ms | 277–319 ms | 13–22 ms | 1,285 / 1,328 ms |
| Label-heavy JA, 18/54 | 269–309 ms | 278–314 ms | 13–20 ms | 1,290 / 1,346 ms |
| Parallel/Self-loop, 14/38 | 306–377 ms | 311–350 ms | 6–11 ms | 1,437 / 1,429 ms |
| Large dense, 28/200 | 2,579–2,771 ms | 2,654–2,769 ms | 49–68 ms | 11,050 / 11,268 ms |

The large-dense page eventually reached `graph-stable` and produced no console
errors, but the main thread was visibly unavailable during the long derive
sequence. This is operational completion, not browser-native responsiveness.
Repeated same-operation and relation-change controls produced new Product timing
events, confirming that the integration seam can exercise stable and
recovery-triggering recomputation. No synchronous fallback, Worker, or
cooperative scheduler was introduced here.

## Actual Product smoke check

The small smoke campaign confirmed graph rendering, `graph-stable`, and zero
console errors for Lighthouse, medium dense, large dense, high-degree, both
label locales, and Parallel/Self-loop controls. The medium-dense screenshot
also showed clear Relation-label congestion and poor readability under the
deliberately difficult long-label load. It was recorded as a smoke observation,
not formal visual acceptance; no expensive visual evidence or Human Review was
started.

## Classification and next boundary

Overall classification is **F: browser feasibility not established** for this
recovery integration as a browser-main-thread path. The more specific
attribution is **E: full presentation pipeline primary bottleneck** for large
dense work. Classification D is not supported by these measurements: the
candidate-row counter is useful evidence of allocation pressure, but the
recovery comparison itself is sub-millisecond and far smaller than route and
full-derive cost.

The difficult-fixture fingerprint changes also keep the quality/lifecycle side
at **C: quality/lifecycle mostly sound, but not closed**. This checkpoint does
not authorize Product default adoption, a production provider, Workerization,
Adaptive Initial Placement Cascade, or Human Review. Product default remains
`HOLD`, production provider `NOT ESTABLISHED`, Human Review `NOT READY`, and the
Initial Layout Release blocker `OPEN`.

The next work should first isolate the difficult-fixture recovery lifecycle
instability and separately decide the execution boundary for the full Product
presentation pipeline. A candidate-row optimization may be reconsidered only
after a measurement demonstrates that its allocation is material; it should not
be used to claim browser feasibility for the large-dense full pipeline.

## Reproducibility

- Source campaign: `node --experimental-strip-types tools/product-node-label-recovery-dense-browser-feasibility1.ts`
- Source artifact: `experimental/product-node-label-recovery-dense-browser-feasibility1/source-result-summary.json`
- Browser artifact: `experimental/product-node-label-recovery-dense-browser-feasibility1/browser-result-summary.json`
- Actual Product preview: `experimental/product-evaluation-seam/product-node-label-recovery-dense-browser-feasibility1/`
- Focused test: `tests/product-node-label-recovery-dense-browser-feasibility1.test.ts`

This document is a new checkpoint record. Historical result documents were not
rewritten.
