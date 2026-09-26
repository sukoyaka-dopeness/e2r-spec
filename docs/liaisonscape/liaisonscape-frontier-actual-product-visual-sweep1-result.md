# LiaisonScape Frontier Actual-Product Visual Sweep 1 — Public Samples and Research Stress Fixtures

Date: 2026-09-15
Scope: visual-only re-evaluation of the current-source Frontier candidate after
the `Structural-Seeded Capacity Refinement 1` checkpoint.
Classification: `READY FOR USER VISUAL COMPARISON / FORMAL HUMAN REVIEW NOT READY`.

## Objective and boundary

This checkpoint did not add a solver, refinement stage, scoring retune,
provider, Product default, or Adaptive Initial Placement Cascade. It asked
whether the current Frontier-only candidate is sufficiently inspectable on
public samples and whether the known dense/long-label limits remain visible
in the Actual Product.

Structural Placement supplied only derived Node positions. The Actual Product
continued to own ordinary routing, Parallel/Incident allocation, endpoint-plan
authority, final Relation-label placement, Node-label placement, Self-loop
routing, viewport/camera behavior, Dataset data, persistence, dirty-state,
Save Coordinates, and manual semantics. The visual seam supplied the complete
candidate through the disposable operation-local preview contract; it did not
adopt or persist Coordinates.

## Current-source materialization

The reproducible artifact is
[`experimental/frontier-actual-product-visual-sweep1/result-summary.json`](https://github.com/sukoyaka-dopeness/e2r-liaison-scape/blob/main/experimental/frontier-actual-product-visual-sweep1/result-summary.json)
in the LiaisonScape repository. It records every row's exact source, surface,
graph size, candidate count, selected Frontier family, Product presentation
evaluation count, diagnostic elapsed time, selected position fingerprint,
selected metrics, and the complete selected `positions` map. The companion
[`visual-evidence-index.md`](https://github.com/sukoyaka-dopeness/e2r-liaison-scape/blob/main/experimental/frontier-actual-product-visual-sweep1/visual-evidence-index.md)
records the Actual Product URLs and transient screenshot observations.

All 15 rows materialized under one environment:

`Frontier-12 + viewport-anisotropic + round-once`, with geometry cache and
exact candidate reuse enabled, spacing `.88 / 1.12`, and Stage 2 disabled.

| Group | Rows | Graph range | Candidate count | Product evaluations | Diagnostic elapsed |
| --- | ---: | --- | ---: | ---: | ---: |
| Public EN/JA samples | 10 | 9–13 nodes, 7–17 visible Entity edges | 12 each | 13 each | 515–861 ms |
| Dense controls | 3 | 14/48–49 or 16/64 | 12 each | 13 each | 4,046–6,468 ms |
| Japanese long-label control | 1 | 10/20 | 12 | 13 | 1,521 ms |
| Parallel/Self-loop control | 1 | 8/11 | 12 | 13 | 619 ms |

The public sources were repository-verified: Lighthouse, Apollo 11, Ashen
Crown, and Titanic came from `e2r-spec/examples`; Berlin Wall came from the
current `e2r-narrative-line/src/sample` files. Synthetic controls were
materialized by the sweep tool and removed after each diagnostic run. No
historical candidate artifact was replayed.

Representative selected families were current Frontier families such as
`structural-frontier-9-circular-order`,
`structural-frontier-4-grid-structural`,
`structural-frontier-12-grid-structural`, and
`structural-frontier-1-grid-structural`; exact per-row families and 12-digit
fingerprints are in the artifact rather than inferred from fixture names.

## Actual Product findings

### Public samples

The real `App` surface opened all ten public EN/JA rows through the
development-only non-adopting seam. Initial clipping was not treated as a
layout defect; `Reset view` / fit and, for Titanic and Lighthouse, local zoom
were used before judging readability.

Lighthouse and Berlin were generally clear at local inspection scale. Apollo
retained local incident Relation-label crowding around the NASA/astronaut
cluster. Ashen Crown retained central/right route and Relation-label
crowding in both languages. Titanic remained structurally coherent but its
fit overview became too small for reliable label reading, requiring local
zoom. These are useful Product residuals even though the Node geometry itself
is no longer a gross failure.

The Parallel/Self-loop control was a positive control: lane separation,
reverse-direction side distinction, ordinary routes, and the self-loop were
visible after Reset at a clear scale. This does not establish the general
Parallel architecture or Self-loop release quality.

### Stress controls

`k7-7`, `k6-8`, and `k8-8` remained visibly globally coupled. Their complete
surfaces were inspectable, but repeated ordinary labels, crossing density, and
route ownership made the overview non-release-readable. The Japanese
long-label control was worse: local zoom did not remove the Relation-label
corridor and ownership coupling. These controls confirm that Frontier alone
does not close presentation capacity.

This is a bounded stress result, not a rejection of the public-sample
candidate and not evidence that moving routing or final label placement into
Structural Placement is appropriate.

## Responsibility attribution

| Residual | Attribution from this sweep |
| --- | --- |
| Initial viewport clipping | Viewport/camera presentation; Reset/fit recovers the candidate frame, so not automatically Structural Placement failure. |
| Public moderate-graph readability | Frontier geometry is generally usable; no broad Structural Placement defect was observed. |
| Apollo/Ashen central label and route crowding | Product ordinary routing plus final Relation-label placement, with endpoint angular demand as a coupling signal. Frontier geometry influences the available space but does not own the final association. |
| Titanic overview scale | Viewport fit and Product presentation scale; local zoom is needed before judging labels. |
| Dense complete-graph clutter | Shared global topology plus ordinary routing/Relation-label capacity; not solved by Frontier geometry alone. |
| Long Japanese labels | Relation-label and Node-label presentation capacity, corridor/ownership coupling, and viewport scale. |
| Parallel lanes and reverse physical sides | Parallel/Incident allocation and ordinary route authority; the control behaved acceptably in this bounded case. |
| Self-loop visibility | Self-loop routing authority; the control was visible and remains a separate track. |

The sweep does not establish a new endpoint-plan or capacity contract. It also
does not change the prior separation that Structural Placement may provide
coarse capacity signals while Product retains routing and final label
authority.

## Outcome

The appropriate outcome is:

`FRONTIER PUBLIC-SAMPLE VISUAL COMPARISON READY / COMPLEX PRODUCT READABILITY OPEN`.

This is stronger than the prior `MATERIALIZED / VISUAL SWEEP PENDING` state for
the limited purpose of user visual comparison on public samples, but it is not
a release decision. Frontier does not become a Product provider, default, or
Human Review candidate. The evidence supports continuing the bounded
comparison of a current-source Frontier candidate against explicit controls,
while keeping the hard dense/long-label presentation residual on the Product
routing/label side. It does not justify another geometry-only retune or a
formal Human Review campaign.

Human Review: `NOT READY`.
Quality solver: `HOLD / NOT ESTABLISHED`.
Production provider: `NOT ESTABLISHED`.
Product integration/default: `HOLD`.
Initial Layout Release blocker: `OPEN`.
Adaptive Initial Placement Cascade: inactive.

## Validation and safety

- Frontier sweep materialization: all 15 rows `materialized`; 12 candidates
  and 13 Product presentation evaluations per row.
- LiaisonScape test suite: `534 passed, 0 failed`.
- LiaisonScape lint: passed.
- Actual Product smoke: all public and selected stress/control URLs entered a
  real workspace; Reset/fit and local inspection were performed as indexed.
- No formal acceptance or Human Review evidence was created.
- Historical result documents were not modified.
- No Dataset, stored/authored Coordinates, persistence, dirty-state, Save
  Coordinates, manual placement, routing authority, or label authority was
  changed.
- No push, tag, release, deploy, publish, reset, stash, clean, rebase,
  squash, or amend was performed.

## Next position

Keep the public Frontier candidate available for a bounded user visual
comparison, but do not treat that comparison as release acceptance. The next
research question should address the Product-side routing/Relation-label
capacity residual or an explicit bounded execution/release gate; it should not
start a new broad Structural Placement search, another geometry-only spacing
retune, Adaptive Cascade, or Self-loop expansion from this visual smoke alone.

Session 0076 records this new objective. No reusable cross-repository
knowledge candidate is promoted from this single-repository visual sweep.
