# LiaisonScape Explicit Auto Layout Reference Placement Regression Fixture 1

Date: 2026-09-17  
Checkpoint: `E2R-LIAISONSCAPE-EXPLICIT-AUTO-LAYOUT-REFERENCE-PLACEMENT-REGRESSION-FIXTURE1`  
Classification: **B. REGRESSION REPRODUCED / RESPONSIBILITY STILL MIXED**

The LiaisonScape source baseline observed by the diagnostic was revision
`3c383c67c8e3c599be9de7f99d6785261e147479` plus the checkpoint working-tree
changes. No commit was created by this checkpoint.

## Finding

A controlled, reproducible reference comparison is now available. The fixture
pair contains the same neutral 12-Entity / 19-Relation graph:

- `reference-layout-regression.reference.{en,ja}.e2r.json` has 12 saved
  `liaisonscape-graph` coordinates;
- `reference-layout-regression.no-coordinates.{en,ja}.e2r.json` removes the
  per-Entity coordinates while preserving topology and labels.

The graph has two local clusters, two high-degree hubs, a bridge/observatory
corridor, cross-cluster Relations, and long EN/JA-shaped labels. It is a
moderate diagnostic control, not a K7,7 or public sample.

## Actual Product reproduction

The DEV-only acceptance URLs are recorded in the companion artifact:
`e2r-liaison-scape/experimental/explicit-auto-layout-reference-placement-regression-fixture1/actual-product-evidence.md`.
The reference EN URL was verified on the current Vite surface at
`http://127.0.0.1:5176/e2r-liaison-scape/?acceptance-fixture=reference-regression&acceptance-locale=en`.
It loaded 12 entities / 19 relations and read all 12 saved coordinates. The
existing `More -> Auto Layout` action reached `Running` and then `Review Auto
Layout` Preview.

The saved reference presented two vertically separated local clusters with a
right-side bridge/observatory corridor. The Preview visibly rearranged the same
graph into a compact circular/central arrangement and showed the existing
presentation-quality warning. This establishes a reproducible difference
between a readable saved/reference arrangement and the current Explicit Auto
Layout Preview. It does not by itself establish that the Preview is
unacceptable: a Human Review disposition remains `READY_TO_REVIEW_NOT_JUDGED`.

## Machine comparison

The current-source report is regenerated with:

```text
cd e2r-liaison-scape
node --experimental-strip-types tools/explicit-auto-layout-reference-placement-regression-fixture1.mjs
```

The report runs `settleInitialPlacement`,
`runExplicitAutoLayoutOperation`, and
`deriveBoundedAutomaticPresentation` directly. The Explicit Preview was
complete, finite, Product-evaluated, and deterministic:

| view | overlap pairs | crossings | label-route hits | extent | fit scale | score |
| --- | ---: | ---: | ---: | --- | ---: | ---: |
| saved reference | 0 | 3 | 2 | 840 × 700 | 0.4031 | 643483.9863 |
| coordinate-less initial | 0 | 22 | 8 | 460 × 452 | 0.5969 | 3332827.4745 |
| Explicit Preview | 0 | 3 | 0 | 665 × 651 | 0.4308 | 695279.0285 |

These metrics do not establish a solver-only numeric regression: the reference
and Preview have equal reported crossings, Preview has stronger separation and
label-route-hit signals, and the reference deliberately uses a wider cluster
span. The visible rearrangement is real, but responsibility remains mixed
among candidate geometry, Product presentation pressure, and the chosen
reference baseline. The existing strict Product eligibility warning is retained
as evidence, not converted into a new gate.

The deterministic replay identity is `4ca0ed628aa428e9`, with selected family
`structural-frontier-11-circular-order` and the candidate fingerprint recorded
in `result-summary.json`.

## Boundary and follow-up

No solver, scoring, routing, label, Self-loop, Pin, Preview/Save lifecycle,
Dataset, persistence, or quality heuristic was changed. The fixture is served
only through the DEV acceptance seam. The normal Product path and Human Check B
`QUALIFIED` status remain unchanged.

This fixture is ready for a later, explicitly human visual comparison. That
review must decide whether the reference-to-preview rearrangement is acceptable
for Explicit Auto Layout; it must not infer PASS/FAIL from this artifact. If a
defect is accepted as a quality follow-up, keep responsibility attribution
open until a focused comparison separates candidate-generation, Product
presentation, graph-space, and route/label pressure. Pinned global recovery,
Presentation-aware local relaxation, and dense Graph-space / Relation-label
congestion remain separate non-blocking quality tracks.
