# LiaisonScape Connection Handle Visibility Result

## Status

Accepted application result, recorded on 2026-08-20.

LiaisonScape checkpoint: `c6bea6a feat: refine connection handle visibility and interaction`.

This result changes LiaisonScape presentation and interaction behavior only. It
does not change E2R Core or an E2R Extension.

## Accepted visibility behavior

Connection handles are hidden by default and become visible while an Entity is
hovered, selected, or the source of an active Relation-creation gesture.
Desktop uses hover for discovery. Touch-oriented use does not depend on hover;
Entity selection can expose the handle. Handle visibility is Application View
State and is not persisted to the Dataset.

## Accepted interaction geometry

- Visible handle radius: `8.5`
- Connection hit target radius: `12`

The hit target uses the existing Relation-creation path and owns connection
pointerdown. It does not allow Entity drag to steal the gesture.

## Interaction-region responsibility

Entity body owns Entity selection and Entity drag.

The hover bridge provides hover continuity only. It uses a neutral cursor and
does not initiate Entity drag or Relation creation.

The connection hit target owns the existing Relation-creation behavior. Manual
acceptance confirmed that the region showing the connection cursor starts
Relation creation rather than doing nothing or starting Entity drag.

## Entity body popover

The Entity body hover popover uses a stable Entity-bound nearby anchor at the
left-bottom side rather than pointer-relative placement. This keeps the
popover near its Entity, makes its position independent of pointer entry
direction, and avoids normal visual competition with the connection handle.

Active connection creation may suppress the Entity body popover. This rule
applies only to the Entity body popover; other LiaisonScape popovers retain
their own behavior.

## Relation creation boundary

Existing ordinary Relation creation and Self-Relation creation remain
unchanged, including source/target semantics, Relation IDs, and completion and
cancellation behavior. Experiment 2F does not add Context Menu Relation
creation.

## Regression evidence

Manual acceptance passed for:

- Entity drag;
- 2E direct unselected Relation drag;
- Relation-label drag;
- Context Menu;
- ordinary Relation creation;
- Self-Relation creation.

Automated validation passed: 158 tests, lint, build, and `git diff --check`.

A stale hover popover observed during earlier experimentation was not
reproduced during later revisions. No speculative state-management fix was
added, and the historical observation is not claimed to be fixed.

## Explicit non-changes

2F does not change Dataset format, routing algorithms, Node avoidance,
occupied-path behavior, automatic self-loop routing, manual placement
ownership, layout persistence, attachment geometry, arrowheads, or Context
Menu Relation creation.

## Next: Experiment 2G — Popover Anchor Consistency

The next bounded LiaisonScape UX task is to give Node-label, Relation-label,
and Relation-path popovers stable nearby anchors with minimal viewport-edge
clamping. This is separate from 2F and is not implemented by this result.

## Deferred and closed work

Deferred:

- Context Menu Relation creation;
- Entity shape expansion;
- automatic Relation/self-loop radius adaptation.

Occupied-path clearance improvement remains closed until concrete new evidence.

The existing Node-label, Relation-label, and Relation-path viewport-edge
containment issue remains an open pre-public-release bug separate from 2F.
