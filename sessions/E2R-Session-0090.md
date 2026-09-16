# E2R Session 0090 — Product Node-label Recovery Lifecycle Source-Parity Experiment 1

Date: 2026-09-16

## Objective

Continue the LiaisonScape bounded research with a source-parity experiment for
Product Node-label recovery. Verify where the previous automatic Node-label
snapshot is created, read, updated, and reset, and test recovery through the
normal Product presentation and drag/feedback lifecycle without moving routing,
Relation-label, endpoint-plan, Self-loop, Dataset, or manual-placement
authority.

## Work performed

The current Product source was instrumented with a development-only recovery
mode and lifecycle trace. The mode runs through the normal
`deriveBoundedAutomaticPresentation` and Node-label placement path. The first
pass is continuity-only; recovery is eligible only in the settled feedback
pass. Active dragged Nodes suppress recovery, manual Node-label offsets remain
authoritative, and displayed output becomes the next previous snapshot at the
existing presentation-effect boundary.

A reproducible lifecycle tool and test were added. The tool runs clean,
identical, repeated stable, active drag, move, finalization, Relation change,
three settled repeats, manual offset, and reset across horizontal primary,
high-degree, Parallel/Self-loop, Lighthouse EN, and Lighthouse JA fixtures.
The artifact retains 32 candidates per Node.

## Evidence

All lifecycle controls passed: clean/identical stability, active-drag
suppression, Relation-change coverage, settled recovery stability, no
oscillation, manual authority, and reset clearing previous input. The
Product-derived stale seed on the primary fixture triggered 3 recoveries with
32 candidates, and the recovered displayed output became the next previous
snapshot.

The source-parity output intentionally does not match the prior diagnostic
bounded-recovery output byte-for-byte. The prior arm recovered with feedback
disabled; this experiment preserves first-pass continuity and recovers in the
normal feedback/final lifecycle. This is a lifecycle distinction, not a
movement-coefficient retune.

Responsibilities remain separated: Node-label recovery is a presentation
lifecycle concern; ordinary routing, Relation-label final placement,
endpoint-plan authority, and Self-loop routing remain Product-owned in their
existing locations. Dataset, authored coordinates, persistence, dirty-state,
Save Coordinates, manual Node placement, manual curvature, and manual
Relation-label semantics were not changed.

## Actual Product smoke

The real Product `App` surface was inspected through the development-only
preview seam for the primary, high-degree, Parallel/Self-loop, Lighthouse EN,
and Lighthouse JA fixtures. All rendered without an obvious candidate-specific
visual break, and console checks reported no warnings/errors. This was a small
smoke check only, not formal visual acceptance or Human Review.

## Classification

Outcome: `A QUALIFIED / SOURCE-PARITY ESTABLISHED IN TESTED ENVELOPE`.

This supports a next bounded Product integration/feasibility checkpoint. It
does not establish a production provider, Product default/adoption, or a Human
Review candidate. Adaptive Initial Placement Cascade is not entered. The
Initial Layout Release blocker remains open.

## Validation

- lifecycle source-parity artifact regenerated;
- focused source-parity and prior hysteresis tests: `2/2` passed;
- LiaisonScape lint: passed;
- Actual Product smoke completed; no console warnings/errors on inspected pages;
- full test/build/spec validation run after documentation updates.

## Worktree and session policy

This is a new objective, so it uses a new session file rather than appending
to Session-0089. Existing unrelated dirty files were preserved. No historical
result document was rewritten, and no push, tag, release, deploy, publish,
reset, stash, delete, rebase, squash, or amend was performed.
