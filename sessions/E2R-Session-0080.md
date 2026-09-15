# E2R Session 0080

Objective: Cross-Family Product-Authoritative Auto Layout Portfolio Selector
Experiment 1.

Checkpoint: compare the existing Frontier, Post, and topology-aware
free-form candidate families on common fixtures using current Product
authority, and compare a full oracle with a bounded selector.

Started: 2026-09-16.
Status: `DIAGNOSTIC RESULT / SELECTOR INCOMPLETE / HUMAN REVIEW NOT READY`.

This is a new objective, so it has a new Session file. Session 0079 remains
the history of the preceding free-form experiment.

## Work performed

- Added a diagnostic-only cross-family portfolio selector tool.
- Reused completed family artifacts; did not add a solver or retune a family.
- Materialized Frontier, Post, and free-form on Lighthouse EN/JA, Apollo EN/JA,
  Titanic EN, Japanese long-label, and dense synthetic `k7-7`.
- Applied explicit hard gates, exact geometry fingerprints, a full
  Product-authoritative oracle, and a top-two cheap-screen selector.
- Added a read-only Actual Product preview seam and smoke-checked dense
  selected/oracle results and Japanese long-label selected result.

## Evidence summary

The oracle selected Frontier on Lighthouse EN/JA, Apollo EN, and Titanic;
Post on Apollo JA; and free-form on the Japanese long-label and dense rows.
The bounded selector matched 6/7 rows and missed the dense row: cheap
features ranked Post/Frontier ahead of free-form even though fresh Product
metrics ranked free-form first. Product evaluations were 16 for the oracle
and 14 for the selector; no duplicate geometry was reused.

The dense Actual Product smoke confirmed that the selected Post geometry is
compact but not release-readable. The oracle free-form geometry improves a
machine crossing signal but remains crowded and partially clipped at the
initial viewport. The long-label selector result reaches free-form but still
has broad geometry and difficult label association. These are diagnostic
observations, not Human Review evidence.

Prior persisted family metrics differed from fresh current-source Product
recomputation in 21 fields. The checkpoint records the mismatches and uses
fresh current-source evaluation for selection without rewriting historical
documents.

## Authority and standing statuses

Structural Placement owns only derived Node-geometry candidates. Ordinary
routing, Parallel/Incident allocation, endpoint-plan, final Relation-label
placement, Node-label placement, Self-loop routing, viewport/camera,
Dataset lifecycle, persistence, Save Coordinates, and manual placement remain
unchanged Product authorities.

Quality solver remains `HOLD / NOT ESTABLISHED`, production provider remains
`NOT ESTABLISHED`, Product integration/default remains `HOLD`, Human Review
remains `NOT READY`, Adaptive Cascade remains inactive, and the Initial Layout
Release blocker remains `OPEN`.

## Validation and safety

- Selector artifact regenerated successfully.
- Dedicated selector test passed.
- LiaisonScape lint and production build passed.
- Actual Product smoke used a disposable read-only preview only.
- No Dataset bytes, stored/authored Coordinates, persistence, or Product
  defaults were changed.
- No historical result document was overwritten.
- Existing unrelated dirty work was preserved.
- No push, deploy, release, publish, reset, stash, clean, rebase, squash, or
  amend was performed.

## Next position

Classify this checkpoint as `B. PORTFOLIO PROMISING / SELECTOR INCOMPLETE`
with a `C. QUALITY BENEFIT EXISTS BUT METRIC GAP REMAINS` qualification.
Keep the selector diagnostic and do not advance to Human Review or Product
adoption. A future checkpoint, if authorized, should address selector recall
and Product-metric/human-readability gaps as a bounded research question;
this session does not authorize retuning the family generators or adding an
Adaptive Cascade.
