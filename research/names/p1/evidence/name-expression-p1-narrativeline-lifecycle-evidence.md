# P1 Name Expression — NarrativeLine Lifecycle Evidence

Date: 2026-08-14

Status: Accepted research-only application-boundary evidence; non-normative

## Demonstrated boundary

Through NarrativeLine's production `importDatasetJson()` boundary, a
research-only lifecycle adapter observes already pre-classified operations:

- non-substantive continuity retains recognized P1-like identity `N1`;
- substantive replacement uses explicitly supplied identity `N2`;
- the adapter does not infer, generate, or allocate `N2`;
- an imported opaque old reference remains exactly `N1` and is not retargeted;
- a same-value, same-language/script unrelated expression is not used to infer
  a replacement; and
- an unrecognized expression-array member is preserved and is not processed as
  a P1-like expression merely because its `id` matches `N1`.

After replacement, the recognized P1-like target `N1` is absent while the
opaque member carrying the same textual `id` may remain. The old reference
still contains `N1`, and the supplied replacement is `N2`; the test does not
assign identity semantics to the opaque member or define duplicate-ID
semantics.

Unrelated opaque data remains unchanged.

## Evidence boundary

This demonstrates only pre-classified P1 identity continuity, supplied
replacement observation, and old-reference non-retargeting through a bounded
NarrativeLine research adapter. It does not demonstrate a general lifecycle
model, classification algorithm, production lifecycle service, Names writer,
retirement, deletion, restoration, redirect, merge, split, cascade, migration,
final Target Reference model, final Payload, or Extension ID.

Grouping behavior is not tested or selected. Grouping representation remains
`defer selection`; P2/P3 remain closed. This experiment produces no comparative
evidence satisfying the Grouping Selection Reopen Criteria.

Test:

- `../../e2r-narrative-line/tests/p1LifecycleIntegration.test.js`
