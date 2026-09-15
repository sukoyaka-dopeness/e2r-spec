# E2R Session 0074

Objective: Common-Fixture Cross-Lineage Comparison 1 - Historical Structural
Candidates vs Current Capacity Candidates.

Checkpoint: materialize structural and capacity candidate families on the
same Dataset topology and current Product authority, then determine whether a
fair winner or only a responsibility-separated trade-off is supported.

Started: 2026-09-15.
Status: `D. COMMON-FIXTURE COMPARISON MATERIALIZED / HISTORICAL REPLAY STILL INCOMPLETE`.
This is a new objective, so it has a new Session file. Continuation of this
same comparison belongs in this file; a materially new release gate gets a
new Session file.

## Work performed

- Audited the prior comparison gap and the current synthetic capacity
  materializers.
- Added a read-only common-fixture adapter that keeps Entity/Relation IDs,
  labels, topology, and the current Product presentation evaluator common to
  all candidate rows.
- Compared current-source reconstructions of Post, Frontier-12, and
  joint-constrained structural arms with Label-Capacity, Infinite-Canvas, and
  Occupied-Geometry arms on Lighthouse EN, Apollo JA, dense K7x7, and a
  Parallel/Self-loop control.
- Added a small Actual Product smoke seam and inspected Lighthouse structural
  and Label-Capacity candidates on the real App surface.

## Findings

Structural current-source arms retain the strongest canonical crossing and
ordering signal. Capacity arms provide extent/demand transformations, but do
not establish a general spacing, occupied-geometry, or long-label win on the
same fixtures. Dense remains globally coupled: the capacity arms retain high
crossing, label-near, and foreign-route pressure even when a bounded feedback
variant reduces one occupied-overlap count.

The common fixture is now materialized for current-source reconstruction, but
the old historical artifact itself is not replayed on the new exact topology.
The result therefore cannot claim that a historical artifact wins. This is a
bounded D result, not a selector, portfolio, provider, default, or Human
Review decision.

The Actual Product smoke showed the structural Post reconstruction inside the
viewport without an obvious defect. The same Lighthouse fixture with the
Label-Capacity candidate clipped right and lower Nodes. The smoke is only a
stop check and not formal acceptance.

## Authority and standing statuses

Structural Placement owns only candidate Node geometry. Product ordinary
routing, Parallel / Incident allocation, endpoint-plan, final Relation-label
placement, Node-label placement, and Self-loop routing remain authoritative.
Dataset, stored/authored Coordinates, persistence, dirty-state, Save
Coordinates, manual placement/curvature/label semantics remain unchanged.

Gate 2 remains `OPEN`, quality solver remains `HOLD / NOT ESTABLISHED`,
production provider remains `NOT ESTABLISHED`, Product integration/default
remains `HOLD`, Human Review remains `NOT READY`, Adaptive Cascade remains
inactive, and the Initial Layout Release blocker remains `OPEN`.

## Validation and worktree safety

- Common-fixture adapter generation completed for all four fixture rows.
- `npm test`: 530 passed, 0 failed.
- `npm run lint`: passed.
- Actual Product smoke completed for Lighthouse structural and capacity arms;
  visual promotion stopped on capacity clipping.
- Historical result documents were not modified.
- No push, tag, release, deploy, publish, reset, stash, clean, rebase,
  squash, or amend was performed.

Unrelated dirty work was preserved:

- LiaisonScape: pre-existing modified `tests/graph-presentation.test.ts` and
  untracked `experimental/product-evaluation-seam/spacing-inspection2/`.
- e2r-spec: pre-existing modified `sessions/E2R-Session-0052.md` and
  untracked `work/`.

## Next position

Do not create a Human Review candidate from this checkpoint. The next
decision is whether to invest in faithful historical artifact replay on the
common fixture; otherwise the evidence is sufficient to keep structural and
capacity responsibilities separate and evaluate any Fast/HQ architecture
change explicitly in a later checkpoint.
