# E2R Session 0091 — Product Node-label Recovery Integration / Feasibility Experiment 1

Date: 2026-09-16

## Objective

Move the bounded Node-label recovery behavior from the prior source-parity
checkpoint into the normal Product presentation path as a production-shaped,
development-only integration candidate. Verify lifecycle stability,
stale-snapshot recovery, manual and drag authority, recomputation cost, and
regression boundaries without changing Product defaults or unrelated authority.

## Work performed

The normal `App` caller now recognizes the explicit development URL switch
`?node-label-recovery=candidate`. No recovery prop, previous-label override,
or diagnostic feedback override is required. The switch passes an internal
`product-candidate` mode through the existing
`deriveBoundedAutomaticPresentation -> deriveAutomaticNodeLabels ->
stepAutomaticNodeLabelPlacement` path. The switch is OFF by default and is
guarded by `import.meta.env.DEV`.

The bounded recovery rule remains unchanged: first-pass continuity, settled
feedback recovery for hard-safe or strict fresh presentation gain, active-drag
suppression, manual Node-label authority, and the existing `distance * 4`
movement cost. Candidate-mode profiling records recovery comparison time and
candidate rows without duplicating the 32-candidate scoring pass.

A new integration tool, artifact, test, and Actual Product preview seam were
added. The five-fixture sequence covers horizontal, high-degree,
Parallel/Self-loop, Lighthouse EN, and Lighthouse JA controls.

## Evidence

All lifecycle controls passed. The primary Product-derived stale case produced
3 recoveries, retained 32 candidates per Node, and made the recovered output
the next previous snapshot. No oscillation was observed. Candidate evaluation
delta against baseline was zero for clean, settled, and stale cases across all
fixtures.

Measured source-process overhead was nonzero but small in this envelope:
recovery comparison median at most `0.0126 ms`, additional Node-label stage
median at most `0.7895 ms`, and largest full derive median approximately
`28.1 ms` on Lighthouse EN. These are not browser SLA measurements. Candidate
rows are still materialized per candidate-mode pass, and larger dense/browser
main-thread behavior is not established.

## Actual Product smoke

The Actual Product `App` surface was opened with the candidate URL switch and
without recovery diagnostic props for primary, high-degree, Parallel/Self-loop,
Lighthouse EN, and Lighthouse JA. All settled to the expected Product graph;
no obvious candidate-specific visual break or console warning/error appeared.
This was a small smoke check, not visual acceptance or Human Review.

## Classification

Outcome: `C. INTEGRATION ESTABLISHED / PERFORMANCE / RECOMPUTATION BOUNDARY REMAINS`.

The integration point is production-shaped and lifecycle-safe in the tested
envelope. A larger/dense performance checkpoint remains before any adoption
discussion. Product default/adoption remains `HOLD`, production provider is
`NOT ESTABLISHED`, Human Review is `NOT READY`, Adaptive Cascade is not
entered, and the Initial Layout Release blocker remains open.

## Validation

- integration artifact regenerated;
- focused integration and source-parity tests: `2/2` passed;
- Actual Product smoke completed for all five controls;
- browser console smoke: no warnings/errors;
- full test/build/spec validation to be run after documentation updates.

## Worktree and session policy

This is a new objective, so it uses Session-0091 rather than appending to
Session-0090. Existing unrelated dirty files were preserved. No historical
result document was rewritten, and no push, tag, release, deploy, publish,
reset, stash, delete, rebase, squash, or amend was performed.
