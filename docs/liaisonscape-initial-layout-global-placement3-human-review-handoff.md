# LiaisonScape Initial-Layout Global Placement 3 Human Review Handoff

Date: 2026-09-12

Status: USER HUMAN ACCEPTANCE RECORDED; SEE AUTHORITATIVE RESULT

## Purpose

The previous Global Placement 3 entry was audited and reclassified: its
observations came from Codex browser inspection, not from the user viewing the
comparison surface. The links below were then used as the user review
handoff. The user's observations are now recorded authoritatively in
`liaisonscape-initial-layout-global-placement3-user-human-acceptance-result.md`.

The retained reference is `adaptive-post` (ECR3). The candidate is
`global-placement3`, meaning viewport-anisotropic placement with
`x=0.88`, `y=1.12`, structural-centroid basis, and the diagnostic Stage-2
bypass. The top review controls show the active fixture, locale, and arm so
the two URLs in each row are unambiguous.

## Opening the review surface

These URLs are local and require the LiaisonScape development server. From
`C:\Users\extra\E2R\e2r-liaison-scape`, run:

```text
npm.cmd run dev -- --host 127.0.0.1
```

Open the reference and candidate URLs for the same row at the same browser
size. Wait for the graph and viewport fit to settle before comparing. The
surface reads the canonical fixture through the existing acceptance endpoint
and renders it through the normal Product `App` path; it is not the diagnostic
comparison renderer. The candidate coordinates are in-memory derived data,
so Save Coordinates remains disabled and no Dataset is changed.

## Six comparison cells

| Cell | ECR3 reference (`adaptive-post`) | Global Placement 3 candidate |
| --- | --- | --- |
| Lighthouse EN | [Open reference](http://127.0.0.1:5173/e2r-liaison-scape/experimental/product-evaluation-seam/ecr3-actual-product/?fixture=lighthouse&locale=en&arm=adaptive-post) | [Open candidate](http://127.0.0.1:5173/e2r-liaison-scape/experimental/product-evaluation-seam/ecr3-actual-product/?fixture=lighthouse&locale=en&arm=global-placement3) |
| Lighthouse JA | [Open reference](http://127.0.0.1:5173/e2r-liaison-scape/experimental/product-evaluation-seam/ecr3-actual-product/?fixture=lighthouse&locale=ja&arm=adaptive-post) | [Open candidate](http://127.0.0.1:5173/e2r-liaison-scape/experimental/product-evaluation-seam/ecr3-actual-product/?fixture=lighthouse&locale=ja&arm=global-placement3) |
| Titanic EN | [Open reference](http://127.0.0.1:5173/e2r-liaison-scape/experimental/product-evaluation-seam/ecr3-actual-product/?fixture=titanic&locale=en&arm=adaptive-post) | [Open candidate](http://127.0.0.1:5173/e2r-liaison-scape/experimental/product-evaluation-seam/ecr3-actual-product/?fixture=titanic&locale=en&arm=global-placement3) |
| Titanic JA | [Open reference](http://127.0.0.1:5173/e2r-liaison-scape/experimental/product-evaluation-seam/ecr3-actual-product/?fixture=titanic&locale=ja&arm=adaptive-post) | [Open candidate](http://127.0.0.1:5173/e2r-liaison-scape/experimental/product-evaluation-seam/ecr3-actual-product/?fixture=titanic&locale=ja&arm=global-placement3) |
| Apollo EN | [Open reference](http://127.0.0.1:5173/e2r-liaison-scape/experimental/product-evaluation-seam/ecr3-actual-product/?fixture=apollo-11&locale=en&arm=adaptive-post) | [Open candidate](http://127.0.0.1:5173/e2r-liaison-scape/experimental/product-evaluation-seam/ecr3-actual-product/?fixture=apollo-11&locale=en&arm=global-placement3) |
| Apollo JA | [Open reference](http://127.0.0.1:5173/e2r-liaison-scape/experimental/product-evaluation-seam/ecr3-actual-product/?fixture=apollo-11&locale=ja&arm=adaptive-post) | [Open candidate](http://127.0.0.1:5173/e2r-liaison-scape/experimental/product-evaluation-seam/ecr3-actual-product/?fixture=apollo-11&locale=ja&arm=global-placement3) |

## What to inspect

For each pair, compare the candidate against ECR3 for:

- Node cohesion and minimum visual separation;
- Node-label and Relation-label readability;
- route corridors, crossing/crowding, and long labels;
- viewport fit, overall aspect balance, and excessive vertical stretch;
- locale-specific text footprint; and
- any defect that appears only in `global-placement3`.

Titanic JA is the key hypothesis cell: machine evidence reported screen Node
separation changing from 56.8px to 123.2px. Confirm whether that is actually
easier to scan without making Relation-labels or routes worse. Known parallel
Edge/long-label, self-loop-angle, and connector presentation behavior should
be reported separately from a candidate-only Initial Layout defect.

## User response template

Please report one judgment and a short observation for each cell:

```text
Lighthouse EN: ACCEPTABLE / MIXED / REGRESSED — ...
Lighthouse JA: ACCEPTABLE / MIXED / REGRESSED — ...
Titanic EN: ACCEPTABLE / MIXED / REGRESSED — ...
Titanic JA: ACCEPTABLE / MIXED / REGRESSED — ...
Apollo EN: ACCEPTABLE / MIXED / REGRESSED — ...
Apollo JA: ACCEPTABLE / MIXED / REGRESSED — ...

Candidate-only defect: none / yes — ...
Overall candidate: ACCEPT / RETUNE / REJECT — ...
```

No Product default, adoption, persistence, canonical Dataset, or presentation
authority changes are part of this handoff.

The handoff is closed for this review cycle. It does not by itself change the
Product default, clear the Initial Layout Release blocker, or authorize
release/publication.
