# NarrativeLine 0.2.0 Publication Verification Result

**Status: PUBLIC RELEASED / EXACT PAGES DEPLOYMENT VERIFIED**

NarrativeLine public `main` is `7245d8f8506c86c8af55fcf50de96da8bf82a307`.
GitHub Pages workflow run
[36728316616](https://github.com/sukoyaka-dopeness/e2r-narrative-line/actions/runs/36728316616)
completed successfully for that exact SHA. The existing
[release-preparation record](../../../e2r-narrative-line/docs/release-preparation-0.2.0-result.md)
and [final transaction packet](narrativeline-0.2.0-final-release-transaction-preparation.md)
retain their dated preparation and accepted-candidate evidence; this result
records the later public state.

## Cedar Observatory live source and Timeline checks

The NarrativeLine `main` revision contains the application-owned Cedar
Observatory EN/JA JSON pair. Each file was opened through the public
NarrativeLine application using its existing `#datasetUrl=` handoff fragment:

- [Cedar Observatory EN Timeline](https://sukoyaka-dopeness.github.io/e2r-narrative-line/#locale=en&datasetUrl=https%3A%2F%2Fraw.githubusercontent.com%2Fsukoyaka-dopeness%2Fe2r-narrative-line%2Fmain%2Fsrc%2Fsample%2Fcedar-observatory-showcase.en.e2r.json)
  loaded `Cedar Observatory: An Open Night` and displayed 12 Events.
- [Cedar Observatory JA Timeline](https://sukoyaka-dopeness.github.io/e2r-narrative-line/#locale=ja&datasetUrl=https%3A%2F%2Fraw.githubusercontent.com%2Fsukoyaka-dopeness%2Fe2r-narrative-line%2Fmain%2Fsrc%2Fsample%2Fcedar-observatory-showcase.ja.e2r.json)
  loaded `シダー天文台の公開観望会` and displayed 12 Events.

Both direct handoffs reached the Timeline without a visible acquisition or
validation failure. The Japanese path presented its saved-language choice and
continued successfully in Japanese. The corresponding direct Cedar EN/JA
handoffs into LiaisonScape and Validator `0.7.0` consumer result are recorded
in the [LiaisonScape publication closure](../liaisonscape/liaisonscape-0.2.0-publication-closure-result.md).

This records the observed deployed revision and UI behavior; it does not claim
coverage of other browser families, devices, or unobserved runtime conditions.
No application runtime, Dataset, or schema was changed by this verification.
