# LiaisonScape Frontier Automatic Display Formal Visual Review 1

Status: `HUMAN_REVIEW_CLOSED_QUALIFIED` (user disposition recorded 2026-09-16)

## Scope and contract

This package prepares formal visual review of the DEV-only `frontier-12` automatic-display candidate. It does not change the production default, stored or mixed Coordinate authority, routing, Relation-label, Node-label, Self-loop, persistence, or dirty-state behavior.

The confirmed review surface is the existing Actual Product preview seam:

`http://127.0.0.1:5173/e2r-liaison-scape/experimental/product-evaluation-seam/frontier-actual-product-visual-sweep1/?fixture=<fixture>`

The preview loads the current Frontier artifact, validates the operation-local snapshot against the opened graph, and renders the normal Product graph presentation (routes, Relation labels, Node labels, Self-loops, viewport controls) in read-only mode. It is therefore a review surface for the final Product result, not a solver-only canvas.

Execution smoke evidence: the surface was opened successfully for `lighthouse-en` (10 entities / 14 relations), `label-heavy-ja-10` (10 entities / 20 relations), and `dense-k7-7` (14 entities / 49 relations). Each displayed `HQ candidate preview · operation 1 · read-only`, with viewport controls and disabled mutation controls. This confirms reproducibility of the review surface; it is not a visual acceptance judgment.

The later viewport-interaction fix preserves this review contract: canvas pan and the existing Ctrl+wheel/toolbar/Reset viewport paths remain available, while graph-object pointer starts, long-press/context-menu paths, relation creation, and object editing are rejected while the preview is active. Candidate positions, Dataset state, persistence, and dirty-state remain outside the viewport interaction path.

## Human Review closure

The user accepted Frontier-12 as sufficient for normal automatic display: it appears immediately and is adequate as an initial view. The overall Human Review disposition is `QUALIFIED`.

The qualification records a small number of avoidable-looking ordinary Edge crossings observed in Titanic / Ashen Crown and similar presentation. They are understandable from the topology and do not rise to a gross defect that prevents graph comprehension or blocks current automatic-display acceptance. No per-fixture PASS/QUALIFIED/FAIL values are inferred here; the user supplied an overall judgment, not a complete individual-unit record.

The crossing residual is deliberately not attributed to Frontier geometry, ordinary routing, or their coupling in this checkpoint. Provider selection is not reopened. It is separated as a presentation-quality follow-up, with the current authority boundary, runtime, and canonical readability preserved. Dense runtime/congestion and other previously documented residuals remain unchanged.

The separate DEV acceptance URL remains:

`http://127.0.0.1:5173/e2r-liaison-scape/?acceptance-fixture=<fixture>&acceptance-locale=<en|ja>&initial-layout=frontier-12&diagnostic=timing`

This URL requires the acceptance-fixture endpoint/middleware to be active. A plain Vite server does not provide that endpoint reliably; the preview seam above is the reproducible local review route and is the authoritative launch condition for this package.

## Fixture matrix

| Review unit | URL query | Role |
|---|---|---|
| Lighthouse EN | `lighthouse-en` | public control, English |
| Lighthouse JA | `lighthouse-ja` | public control, Japanese |
| Apollo EN | `apollo-en` | public/canonical topology, English |
| Apollo JA | `apollo-ja` | public/canonical topology, Japanese |
| Titanic EN | `titanic-en` | canonical longer narrative |
| Titanic JA | `titanic-ja` | canonical locale control |
| Ashen Crown EN/JA | `ashen-crown-en`, `ashen-crown-ja` | canonical topology/locale controls |
| Berlin Wall EN/JA | `berlin-wall-en`, `berlin-wall-ja` | application sample/locale controls |
| Label-heavy JA | `label-heavy-ja-10` | label congestion and Japanese text control |
| Dense K7/K6/K8 | `dense-k7-7`, `dense-k6-8`, `dense-k8-8` | density/runtime boundary |
| Parallel/self-loop | `parallel-self-loop-control` | routing and Self-loop presentation control |

The exact row names and Frontier positions are sourced from `e2r-liaison-scape/experimental/frontier-actual-product-visual-sweep1/result-summary.json`; do not substitute historical coordinates if that artifact changes.

## Human checklist

Record one of `PASS`, `QUALIFIED`, or `FAIL` per review unit, with reviewer/date and notes. The following are observations, not automated gates:

- Node geometry is not meaninglessly biased, collapsed, or pathologically elongated.
- Topology is readable at the initial fitted viewport.
- No obvious edge crossings or visually dominant route tangles.
- Ordinary routes are not needlessly long or serpentine; short hops are not unnaturally compressed.
- Relation labels do not collide with their edge, other labels, or nearby nodes.
- Node labels do not collide with edges, Relation labels, or other Node labels.
- EN/JA changes do not cause a gross quality break.
- Self-loops remain readable with the surrounding graph.
- Initial viewport fit is natural and does not hide or strand important structure.
- Dense and label-heavy degradation is either acceptable for normal open or an acceptance failure.
- No gross first-impression defect prevents a new user from understanding the graph.

## Issue attribution guide

Record the earliest visible failure and select one or more categories: `Frontier structural geometry`, `ordinary routing`, `Relation-label placement`, `Node-label placement`, `Self-loop presentation`, `viewport/fit`, `broader Product settling/lifecycle`, or `dense runtime`. The candidate supplies initial node geometry; downstream Product presentation remains authoritative for routes and labels. A visual defect must not be attributed to Frontier without checking that distinction.

Supplemental diagnostics include the Frontier artifact metrics, elapsed time, fit scale, crossing/overlap counts, and the operation-local snapshot identity. They do not replace human judgment. Dense rows are explicitly a runtime/quality boundary and are not silently generalized to ordinary public samples.

## Acceptance state and next decision

This checkpoint closes with the user's `QUALIFIED` disposition and documented boundary. A production-default proposal may proceed to a separate adoption checkpoint; production default and adoption remain unchanged here. No production source change was required.
