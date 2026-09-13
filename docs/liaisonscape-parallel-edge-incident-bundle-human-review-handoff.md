# LiaisonScape Parallel Edge / Incident Bundle Presentation Human Review Handoff

Date: 2026-09-13

## Review status

`READY FOR USER HUMAN REVIEW`. This handoff compares the existing
`global-placement3` presentation baseline with the two opt-in presentation
variants:

- `global-placement3`: G3 coordinate baseline, no bundle spacing;
- `parallel-pair-16`: same G3 coordinates, uniform pair widening;
- `parallel-bundle-16`: same G3 coordinates, group-cardinality-aware bundle
  widening.

The two candidate arms do not introduce a new Initial Layout provider. They
reuse the G3 coordinates and pass through the ordinary Product Dataset open,
routing, Relation-label, Node-label, viewport-fit, and interaction path. The
banner's `Active arm` value identifies the loaded arm.

No USER HUMAN ACCEPTANCE is recorded by this handoff. Codex browser inspection
is supporting evidence only.

## Direct URLs

The following URLs were verified against the currently running local
development surface at `127.0.0.1:5174`. Open the three URLs for a cell and
compare them at the same browser viewport and zoom. The arm selector also
allows switching without manually rewriting the query.

### Lighthouse

```text
Lighthouse EN / baseline: http://127.0.0.1:5174/e2r-liaison-scape/experimental/product-evaluation-seam/ecr3-actual-product/?fixture=lighthouse&locale=en&arm=global-placement3
Lighthouse EN / pair-16: http://127.0.0.1:5174/e2r-liaison-scape/experimental/product-evaluation-seam/ecr3-actual-product/?fixture=lighthouse&locale=en&arm=parallel-pair-16
Lighthouse EN / bundle-16: http://127.0.0.1:5174/e2r-liaison-scape/experimental/product-evaluation-seam/ecr3-actual-product/?fixture=lighthouse&locale=en&arm=parallel-bundle-16
Lighthouse JA / baseline: http://127.0.0.1:5174/e2r-liaison-scape/experimental/product-evaluation-seam/ecr3-actual-product/?fixture=lighthouse&locale=ja&arm=global-placement3
Lighthouse JA / pair-16: http://127.0.0.1:5174/e2r-liaison-scape/experimental/product-evaluation-seam/ecr3-actual-product/?fixture=lighthouse&locale=ja&arm=parallel-pair-16
Lighthouse JA / bundle-16: http://127.0.0.1:5174/e2r-liaison-scape/experimental/product-evaluation-seam/ecr3-actual-product/?fixture=lighthouse&locale=ja&arm=parallel-bundle-16
```

### Titanic

```text
Titanic EN / baseline: http://127.0.0.1:5174/e2r-liaison-scape/experimental/product-evaluation-seam/ecr3-actual-product/?fixture=titanic&locale=en&arm=global-placement3
Titanic EN / pair-16: http://127.0.0.1:5174/e2r-liaison-scape/experimental/product-evaluation-seam/ecr3-actual-product/?fixture=titanic&locale=en&arm=parallel-pair-16
Titanic EN / bundle-16: http://127.0.0.1:5174/e2r-liaison-scape/experimental/product-evaluation-seam/ecr3-actual-product/?fixture=titanic&locale=en&arm=parallel-bundle-16
Titanic JA / baseline: http://127.0.0.1:5174/e2r-liaison-scape/experimental/product-evaluation-seam/ecr3-actual-product/?fixture=titanic&locale=ja&arm=global-placement3
Titanic JA / pair-16: http://127.0.0.1:5174/e2r-liaison-scape/experimental/product-evaluation-seam/ecr3-actual-product/?fixture=titanic&locale=ja&arm=parallel-pair-16
Titanic JA / bundle-16: http://127.0.0.1:5174/e2r-liaison-scape/experimental/product-evaluation-seam/ecr3-actual-product/?fixture=titanic&locale=ja&arm=parallel-bundle-16
```

### Apollo

```text
Apollo EN / baseline: http://127.0.0.1:5174/e2r-liaison-scape/experimental/product-evaluation-seam/ecr3-actual-product/?fixture=apollo-11&locale=en&arm=global-placement3
Apollo EN / pair-16: http://127.0.0.1:5174/e2r-liaison-scape/experimental/product-evaluation-seam/ecr3-actual-product/?fixture=apollo-11&locale=en&arm=parallel-pair-16
Apollo EN / bundle-16: http://127.0.0.1:5174/e2r-liaison-scape/experimental/product-evaluation-seam/ecr3-actual-product/?fixture=apollo-11&locale=en&arm=parallel-bundle-16
Apollo JA / baseline: http://127.0.0.1:5174/e2r-liaison-scape/experimental/product-evaluation-seam/ecr3-actual-product/?fixture=apollo-11&locale=ja&arm=global-placement3
Apollo JA / pair-16: http://127.0.0.1:5174/e2r-liaison-scape/experimental/product-evaluation-seam/ecr3-actual-product/?fixture=apollo-11&locale=ja&arm=parallel-pair-16
Apollo JA / bundle-16: http://127.0.0.1:5174/e2r-liaison-scape/experimental/product-evaluation-seam/ecr3-actual-product/?fixture=apollo-11&locale=ja&arm=parallel-bundle-16
```

## Observation sheet

Please report one judgment per cell and arm comparison, focusing first on
Titanic EN/JA:

- Can each parallel Relation be followed visually from its endpoint to its
  Relation-label?
- Does the outer ordinary incident Relation remain distinguishable from the
  bundle?
- Is the bundle spacing natural, or does it create excessive detour/spread?
- Does the 3+ bundle behavior remain visually coherent where available?
- Does reverse-direction ordering preserve physical-side expectations?
- Are the Titanic long-label/crossing issues improved, unchanged, or amplified?
- Is the Lighthouse JA route-length trade-off visible and acceptable?

Record candidate-only defects separately from the known downstream
parallel/long-label and Self-loop presentation issues. A candidate should not
be accepted solely because a machine count improved.

The 3+ / reverse / obstacle synthetic controls are covered by the automated
geometry regression test. They do not have a new production-facing fixture
surface in this checkpoint; adding such a surface would expand beyond the
canonical review handoff without current evidence that it is necessary.

## Machine context

Across the six canonical cells, all three arms use one authoritative Product
presentation evaluation and zero label-overlap pairs. Crossings were
unchanged. Titanic EN's route-hit count changed from 2 to 1; Titanic JA was
unchanged. Lighthouse JA's median/max route length changed from 131.9/266.6 to
143.2/273.8 graph units. These numbers are context for review, not a visual
acceptance substitute.

Current dispositions remain:

- USER HUMAN REVIEW: `PENDING`;
- Product default/adoption: `HOLD`;
- Initial Layout Release blocker: `OPEN`;
- Self-loop and other downstream presentation follow-ups: separate track.
