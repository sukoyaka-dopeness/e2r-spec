# E2R Session 0075

Objective: Structural-Seeded Capacity Refinement 1 - Strong Structural
Geometry plus Capacity / Occupied Feedback.

Checkpoint: apply existing Label-Capacity, Infinite-Canvas, and
Occupied-Geometry transformations after a structural seed on the exact common
fixtures, while preserving structural ordering and crossing quality.

Started: 2026-09-15.
Status: `B. FRONTIER-SEEDED HQ DIRECTION PROMISING / PRODUCT READABILITY OPEN`.
This is a new objective, so it has a new Session file. Continuation of this
same refinement belongs in this file; a materially new release gate gets a
new Session file.

## Work performed

- Selected Frontier as the primary seed from current common-fixture evidence;
  retained Post as the quality reference/control.
- Added a bounded structural-seeded refinement diagnostic using existing
  capacity transformations only.
- Required component-local pair ordering preservation, no crossing increase,
  and no Node-body overlap increase before accepting a refinement stage.
- Evaluated Lighthouse EN, Apollo JA, Dense K7x7, and Parallel/Self-loop
  controls with structural seed, Label-Capacity, Infinite-Canvas, and
  Infinite-Canvas plus Occupied-Geometry stages.
- Recorded stage elapsed times and performed Actual Product smoke checks for
  Lighthouse Frontier seed and Frontier + Label-Capacity.

## Findings

Frontier is a reasonable primary research seed: it preserves canonical
structural quality signals with far fewer current-source Product evaluations
than Post. Lighthouse permits a Frontier + Label-Capacity candidate without
crossing, Node-body, or local-order regression. The Parallel/Self-loop control
also permits the later Infinite-Canvas and Occupied-Geometry stages.

The result is not general. Apollo has no preserving Frontier refinement, and
Dense rejects every tested capacity stage. The successful Lighthouse
Label-Capacity candidate expands the graph to about `1016 x 811`, requiring
Reset view to recover the overview at approximately 35%. Product readability
therefore remains open even when structural invariants survive.

The checkpoint is classified B: Frontier-seeded HQ direction is promising,
but no general single pipeline or Product-ready candidate is established.

## Authority and standing statuses

Structural Placement owns derived Node geometry only. Product ordinary
routing, Parallel/Incident allocation, endpoint-plan, final Relation-label
placement, Node-label placement, Self-loop routing, viewport/camera, Dataset,
persistence, dirty-state, Save Coordinates, and manual semantics remain
unchanged.

Gate 2 remains `OPEN`, quality solver remains `HOLD / NOT ESTABLISHED`,
production provider remains `NOT ESTABLISHED`, Product integration/default
remains `HOLD`, Human Review remains `NOT READY`, Adaptive Cascade remains
inactive, and the Initial Layout Release blocker remains `OPEN`.

## Validation and worktree safety

- Structural-seeded artifact generation completed for all four fixtures and
  both Frontier/Post seed roles.
- Actual Product smoke completed; no formal Human Review candidate created.
- Historical result documents were not modified.
- No push, tag, release, deploy, publish, reset, stash, clean, rebase,
  squash, or amend was performed.

Unrelated dirty work was preserved:

- LiaisonScape: modified `tests/graph-presentation.test.ts` and untracked
  `experimental/product-evaluation-seam/spacing-inspection2/`.
- e2r-spec: modified `sessions/E2R-Session-0052.md` and untracked `work/`.

## Next position

Do not start a broad solver search or Human Review campaign. The next bounded
choice is whether to refine the acceptance contract for selective capacity
stages or record the Frontier-seeded pipeline as a portfolio seam while
keeping Product adoption and provider selection on hold.
