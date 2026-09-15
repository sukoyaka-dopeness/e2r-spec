# E2R Session 0076

Objective: Frontier Actual-Product Visual Sweep 1 - Public Samples and
Research Stress Fixtures.

Checkpoint: inspect the current-source Frontier-only candidate on public EN/JA
samples and a bounded stress/control matrix through the real LiaisonScape
Product surface. This is a visual re-evaluation after Structural-Seeded
Capacity Refinement 1, not a new solver or refinement study.

Started: 2026-09-15.
Status: `FRONTIER PUBLIC-SAMPLE VISUAL COMPARISON READY / COMPLEX PRODUCT
READABILITY OPEN`.

This is a new objective, so it has a new Session file. Continuation of this
same visual comparison belongs in this file; a materially new release gate
gets a new Session file.

## Work performed

- Materialized current-source Frontier-12 candidates for Lighthouse, Apollo
  11, Berlin Wall, Ashen Crown, and Titanic in EN/JA.
- Materialized `synthetic:k7-7`, `synthetic:k6-8`, `synthetic:k8-8`, a
  Japanese long-label control, and a Parallel/Self-loop control.
- Recorded exact source, candidate family, candidate count, Product
  presentation evaluation count, diagnostic elapsed time, selected
  fingerprint, metrics, and complete selected positions in the LiaisonScape
  artifact.
- Connected only the disposable operation-local preview seam to the current
  Product `App`; stored/authored Coordinates and Dataset state were not
  changed.
- Inspected initial frame, Product Reset view / fit, and local zoom where
  overview scale was insufficient. Indexed the transient browser evidence in
  the LiaisonScape repository.

## Findings

All 15 rows materialized with 12 candidates and 13 Product presentation
evaluations. Public samples were generally usable for a bounded user visual
comparison. Berlin and Lighthouse were clear at local inspection scale;
Apollo and Ashen retained local Relation-label/route crowding; Titanic's fit
overview was too small for reliable label reading without local zoom.

The Parallel/Self-loop control was a positive bounded control: lanes separated,
reverse physical sides were distinguishable, and the self-loop remained
visible. Dense controls remained globally coupled and non-release-readable at
overview scale. The long Japanese control retained label corridor and
ownership coupling even with local inspection.

The visual residuals are therefore not a general Frontier Node-geometry
failure. They are primarily Product ordinary routing, final Relation-label /
Node-label presentation, endpoint angular demand, and viewport-scale
coupling, with Structural Placement influencing available space but not owning
those final decisions.

## Authority and standing statuses

Structural Placement owns derived Node geometry only. Product ordinary
routing, Parallel/Incident allocation, endpoint-plan, final Relation-label
placement, Node-label placement, Self-loop routing, viewport/camera, Dataset,
persistence, dirty-state, Save Coordinates, and manual semantics remain
unchanged.

The result is visual-comparison readiness only, not Product adoption or formal
Human Review readiness. Quality solver remains `HOLD / NOT ESTABLISHED`,
production provider remains `NOT ESTABLISHED`, Product integration/default
remains `HOLD`, Human Review remains `NOT READY`, Adaptive Cascade remains
inactive, and the Initial Layout Release blocker remains `OPEN`.

## Validation and worktree safety

- Frontier sweep materialization completed for all 15 rows.
- LiaisonScape: `534` tests passed, `0` failed; lint passed.
- Actual Product smoke reached the real App surface for all public rows and
  the selected stress/control rows; no formal acceptance was claimed.
- Historical result documents were not modified.
- No Dataset or stored/authored Coordinate, persistence, dirty-state, Save
  Coordinates, routing, label, or provider authority was changed.
- No push, tag, release, deploy, publish, reset, stash, clean, rebase,
  squash, or amend was performed.

Unrelated dirty work was preserved:

- LiaisonScape: modified `tests/graph-presentation.test.ts` and untracked
  `experimental/product-evaluation-seam/spacing-inspection2/`.
- e2r-spec: modified `sessions/E2R-Session-0052.md` and untracked `work/`.

## Next position

Keep the Frontier public-sample candidate available for bounded user visual
comparison, but do not create a Human Review candidate from this smoke. The
next question should address the Product-side routing/Relation-label capacity
residual or a bounded execution/release gate; do not start another broad
Structural Placement search, geometry-only retune, Adaptive Cascade, or
Self-loop expansion from this evidence alone.
