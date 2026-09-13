# LiaisonScape Initial Layout Global Placement 3 Frontier-12 Human Review Handoff

Date: 2026-09-13

Status: READY FOR HUMAN REVIEW; USER ACCEPTANCE NOT RECORDED

## Scope

This handoff prepares a new Actual Product comparison between the accepted
Global Placement 3 arm (`global-placement3`) and the new diagnostic
Frontier-12 arm (`frontier-12`). The earlier Global Placement 3 human ACCEPT
is not inherited by Frontier-12. No Codex browser inspection or machine
metric is an external human acceptance.

Both arms use the same canonical Dataset, locale, normal App open path,
viewport fit, routing, Relation-label, Node-label, and interaction surface.
The candidate uses the existing development-only acceptance endpoint and the
bounded structural frontier portfolio with `x=.88`, `y=1.12`, Stage-2 bypass,
and round-once finalization. It is not a production provider.

## Opening the surface

From `C:\Users\extra\E2R\e2r-liaison-scape`, start the development server:

```text
npm.cmd run dev -- --host 127.0.0.1
```

Open the two URLs for the same cell at the same browser size. Wait for the
candidate to finish loading and confirm the banner shows the active arm. The
surface renders through the normal Product `App`; it is not the diagnostic
comparison renderer. Candidate coordinates are in-memory derived data, so
this handoff does not modify a Dataset or alter Save Coordinates semantics.

## Comparison URLs

```text
Lighthouse EN / G3 reference: http://127.0.0.1:5173/e2r-liaison-scape/experimental/product-evaluation-seam/ecr3-actual-product/?fixture=lighthouse&locale=en&arm=global-placement3
Lighthouse EN / Frontier-12: http://127.0.0.1:5173/e2r-liaison-scape/experimental/product-evaluation-seam/ecr3-actual-product/?fixture=lighthouse&locale=en&arm=frontier-12
Lighthouse JA / G3 reference: http://127.0.0.1:5173/e2r-liaison-scape/experimental/product-evaluation-seam/ecr3-actual-product/?fixture=lighthouse&locale=ja&arm=global-placement3
Lighthouse JA / Frontier-12: http://127.0.0.1:5173/e2r-liaison-scape/experimental/product-evaluation-seam/ecr3-actual-product/?fixture=lighthouse&locale=ja&arm=frontier-12
Titanic EN / G3 reference: http://127.0.0.1:5173/e2r-liaison-scape/experimental/product-evaluation-seam/ecr3-actual-product/?fixture=titanic&locale=en&arm=global-placement3
Titanic EN / Frontier-12: http://127.0.0.1:5173/e2r-liaison-scape/experimental/product-evaluation-seam/ecr3-actual-product/?fixture=titanic&locale=en&arm=frontier-12
Titanic JA / G3 reference: http://127.0.0.1:5173/e2r-liaison-scape/experimental/product-evaluation-seam/ecr3-actual-product/?fixture=titanic&locale=ja&arm=global-placement3
Titanic JA / Frontier-12: http://127.0.0.1:5173/e2r-liaison-scape/experimental/product-evaluation-seam/ecr3-actual-product/?fixture=titanic&locale=ja&arm=frontier-12
Apollo EN / G3 reference: http://127.0.0.1:5173/e2r-liaison-scape/experimental/product-evaluation-seam/ecr3-actual-product/?fixture=apollo-11&locale=en&arm=global-placement3
Apollo EN / Frontier-12: http://127.0.0.1:5173/e2r-liaison-scape/experimental/product-evaluation-seam/ecr3-actual-product/?fixture=apollo-11&locale=en&arm=frontier-12
Apollo JA / G3 reference: http://127.0.0.1:5173/e2r-liaison-scape/experimental/product-evaluation-seam/ecr3-actual-product/?fixture=apollo-11&locale=ja&arm=global-placement3
Apollo JA / Frontier-12: http://127.0.0.1:5173/e2r-liaison-scape/experimental/product-evaluation-seam/ecr3-actual-product/?fixture=apollo-11&locale=ja&arm=frontier-12
```

## Existing machine evidence

The matched Frontier-12 run used 13 full presentation evaluations, versus
46 for Lighthouse/Titanic and 62 for Apollo in G3. Its canonical runtime was
approximately 0.49--0.54 seconds. G3 selected-output fingerprints were
retained in Lighthouse EN/JA, Titanic EN, and Apollo EN/JA; Titanic JA chose a
different output.

| Cell | G3 vs Frontier-12 hard metrics (`cross / label hits / overlap`) | `labelNear20` G3 -> Frontier-12 | Output |
| --- | --- | ---: | --- |
| Lighthouse EN | 0/0/0 -> 0/0/0 | 0 -> 0 | same selected output |
| Lighthouse JA | 0/0/0 -> 0/0/0 | 0 -> 0 | same selected output |
| Titanic EN | 0/0/0 -> 0/0/0 | 0 -> 0 | same selected output |
| Titanic JA | 0/0/0 -> 0/0/0 | 2 -> 0 | different selected output |
| Apollo EN | 0/0/0 -> 0/0/0 | 0 -> 0 | same selected output |
| Apollo JA | 0/0/0 -> 0/0/0 | 2 -> 2 | same selected output |

These are machine diagnostics only. In particular, the Titanic JA metric
improvement does not establish that the changed geometry is easier to read.

## Human observation points

For each cell, compare Node cohesion and spacing, Relation-label and
Node-label readability, route corridors and crossings, overall viewport fit,
aspect balance, clipping or overlap, and any defect visible only in
Frontier-12. For Titanic JA, pay special attention to whether the changed
candidate remains as readable as G3 without introducing excessive spread or
new label/route tension.

Known parallel Edge/long Relation-label, Self-loop angle, and connector
presentation issues remain downstream presentation tracks. Record them
separately; do not attribute a defect to Frontier-12 unless it is candidate-
only or materially amplified by the candidate.

Please return one judgment and a short observation per cell:

```text
Lighthouse EN: ACCEPTABLE / MIXED / REGRESSED - ...
Lighthouse JA: ACCEPTABLE / MIXED / REGRESSED - ...
Titanic EN: ACCEPTABLE / MIXED / REGRESSED - ...
Titanic JA: ACCEPTABLE / MIXED / REGRESSED - ...
Apollo EN: ACCEPTABLE / MIXED / REGRESSED - ...
Apollo JA: ACCEPTABLE / MIXED / REGRESSED - ...

Frontier-12 candidate-only defect: none / yes - ...
Overall Frontier-12: ACCEPT / RETUNE / REJECT - ...
```

Do not treat this canonical review as evidence that dense scaling or a
production-native provider is solved. Product default/adoption, canonical
samples, round-once semantics, persistence, stored/mixed coordinate
authority, and presentation authority are outside this handoff.
