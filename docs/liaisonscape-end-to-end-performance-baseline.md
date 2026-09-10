# LiaisonScape End-to-End Dataset Open Baseline

## Scope

This record closes the current performance-investigation branch after one
end-to-end baseline on the actual LiaisonScape Product. The measured flow was
the user action `Open sample Dataset` through the first committed, stable Graph
display. The measurement was diagnostic-only and did not change routing,
label, feedback, Dataset, or evidence semantics.

The measurement surface was the production build served by Vite preview:

`http://127.0.0.1:4176/e2r-liaison-scape/?diagnostic=timing`

Microsoft Edge opened the current Lighthouse sample Dataset once. The result
contained 10 entities and 14 visible entity Relations. The diagnostic query
parameter exposed timing text only for this explicit measurement surface; the
normal Product URL has no timing panel.

## Baseline

All times are relative to the `open-start` event from one clean run:

| Event / interval | Relative time | Interval |
| --- | ---: | ---: |
| open-start | 0.0 ms | — |
| raw Dataset available | 29.2 ms | 29.2 ms |
| parse and validation complete | 51.8 ms | 22.6 ms |
| Dataset accepted | 55.6 ms | 3.8 ms |
| graph prepared | 83.1 ms | 27.5 ms |
| presentation derived | 547.7 ms | 464.6 ms |
| Graph stable after commit | 613.3 ms | 65.6 ms |

The graph-preparation event included the following sub-measurements:

- graph construction: 23.4 ms;
- initial placement: 0.8 ms;
- fit calculation: 0.4 ms;
- preparation total: 24.6 ms.

The presentation profiler reported 444.8 ms for the derivation itself:

- label-free pass: 90.0 ms;
- first pass: 270.5 ms;
- feedback pass: 83.8 ms;
- route candidate generation across passes: 264.6 ms;
- Relation-label placement: 36.8 ms;
- Node-label placement: 52.3 ms.

## Interpretation

The Dataset fetch/availability, parsing, graph construction, initial placement,
and fit stages were not large costs in this run. The dominant measured region
was actual Product presentation derivation, especially route candidate
generation and the first presentation pass. A further approximately 65.6 ms
elapsed between derivation completion and the post-commit stable Graph marker.
This marker is useful for user-visible timing, but this one run does not split
browser paint, React commit, and accessibility observation more finely.

The result is a baseline and a future investigation trigger, not an immediate
optimization mandate. Earlier exact primitive optimizations remain in place;
snapshot reuse and scoped-key reuse remain closed because their measured
selectivity and ROI were insufficient. The current stage contracts, profiler,
and diagnostic timing seam should be retained for a future measurement after
substantial Product or Dataset changes.

## Future remeasurement

Repeat the same flow after a feature or Dataset change, preferably on the same
browser/runtime class, and compare:

1. open-to-raw availability;
2. parse/validation;
3. graph preparation;
4. presentation derivation, split by label-free/first/feedback and route,
   Relation-label, and Node-label work;
5. post-derivation commit-to-stable display.

If the user-visible delay grows materially, first profile the actual Product
presentation region in the changed implementation. Do not reopen snapshot
reuse or add new governance/evidence execution merely because this baseline
exists.

## Roadmap disposition

This baseline closes the current performance branch. The nearer follow-up is a
separate Dataset loading indication so users can understand the wait before a
stable Graph appears. Display-time optimization is deferred until a feature or
Dataset size/shape change provides a reason to re-measure the actual Product.
At that point, the then-current bottleneck—not necessarily the current route
candidate-generation or first-pass hot spot—determines the next optimization
checkpoint.

## State

- Product-visible semantics: unchanged;
- Fresh10/Fresh11/Fresh12 historical evidence: unchanged;
- Fresh12 canonical Human Review result: unchanged;
- new governed Fresh lineage: NOT STARTED;
- Product adoption: NOT PERFORMED;
- push/tag/release/deploy/publication: NOT PERFORMED.

The timing instrumentation and this record are local and diagnostic-only.
