# LiaisonScape 0.2.0 Publication Closure Result

**Status: CLOSED**

This result closes the live consumer and deployment checks left open after the
bounded LiaisonScape `0.2.0` public publication.

## Public revision and deployment

- LiaisonScape public `main`: `75400c65b64938aee5c74efa8bd772bb6f1851ea`.
- Pages workflow run [36738217857](https://github.com/sukoyaka-dopeness/e2r-liaison-scape/actions/runs/36738217857) completed successfully for that exact SHA.
- Credits show LiaisonScape `0.2.0`, First release `2026-08-16`, and Updated `2026-10-01`.
- The public consumer is pinned to E2R Validator `0.7.0` in the published repository revision.

## Direct Cedar Handoff checks

Each locale was opened directly on the public LiaisonScape site using its
existing `#datasetUrl=` fragment contract and the corresponding public
NarrativeLine `main` JSON. NarrativeLine `main` was
`7245d8f8506c86c8af55fcf50de96da8bf82a307` at verification time.

- [Cedar Observatory EN direct Handoff](https://sukoyaka-dopeness.github.io/e2r-liaison-scape/#locale=en&datasetUrl=https%3A%2F%2Fraw.githubusercontent.com%2Fsukoyaka-dopeness%2Fe2r-narrative-line%2Fmain%2Fsrc%2Fsample%2Fcedar-observatory-showcase.en.e2r.json) loaded `Cedar Observatory: An Open Night` with 6 Entities and 6 Relations. The graph rendered normally.
- [Cedar Observatory JA direct Handoff](https://sukoyaka-dopeness.github.io/e2r-liaison-scape/#locale=ja&datasetUrl=https%3A%2F%2Fraw.githubusercontent.com%2Fsukoyaka-dopeness%2Fe2r-narrative-line%2Fmain%2Fsrc%2Fsample%2Fcedar-observatory-showcase.ja.e2r.json) loaded `シダー天文台の公開観望会` with 6 Entities and 6 Relations. The graph rendered normally.

Both pages showed the expected count of 22 Event-involving Relations omitted
from the Entity graph. Neither showed a handoff or validation failure, an
unsupported Relative Time `0.2.0` warning, or another user-visible diagnostic.
No runtime error was visible during the browser checks. This records the
observed live UI boundary; it does not claim coverage of other browsers,
devices, or unseen runtime conditions.

No application runtime, Dataset, schema, or public state was changed for this
closure. The transaction is closed at the exact public SHA and deployment
above.
