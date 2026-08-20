# LiaisonScape Direct Unselected Relation Drag Result

## Status

Accepted application result, recorded on 2026-08-20.

LiaisonScape checkpoint: `3a048d3 feat: allow direct dragging of unselected relations`.

This result changes LiaisonScape interaction behavior only. It does not change
E2R Core or an E2R Extension.

## Problem

Before Experiment 2E, Relation curvature manipulation required the Relation to
already be selected. Direct manipulation therefore required two gestures:

1. select the Relation;
2. drag it.

## Accepted behavior

A primary-pointer interaction on an unselected Relation path now:

1. selects the Relation immediately;
2. continues the same pointer gesture into the existing Relation drag behavior;
3. keeps the Relation selected after the gesture.

A click without meaningful drag remains selection-only and does not establish
manual route geometry.

## Ordinary Relations

Direct drag reuses the existing manual curvature behavior. No curvature formula
or automatic-routing algorithm changed. Automatic routing continues to respect
established manual route ownership.

## Self-Relations

Direct drag reuses the existing self-loop manual orientation/radius behavior.
No self-loop geometry formula or automatic self-loop avoidance behavior changed.

## Interaction boundaries

Accepted behavior includes:

- Relation-label dragging remains independent;
- secondary-button interaction does not start route drag;
- existing Context Menu behavior remains;
- Detail does not automatically open from primary Relation interaction;
- already-selected Relation drag behaves as before;
- the Relation remains selected after drag.

Manual acceptance found no visible selection-time jump, pointer-up double
processing, or interaction-state corruption.

## Test boundary

The repository has no mounted UI pointer-event test harness suitable for
exercising this gesture end-to-end. No artificial unrelated test was added for
2E. Existing automated regression coverage remained green: 158 tests passed,
lint passed, build passed, and `git diff --check` passed. Manual browser
acceptance is the primary evidence for this interaction change; this is not a
claim that the behavior was untested.

## Explicit non-changes

Experiment 2E does not change:

- Dataset Core or Dataset serialization;
- routing scoring, Node avoidance, or occupied-path behavior;
- automatic self-loop routing;
- Relation-label or Node-label placement;
- Entity attachment or arrowhead geometry;
- layout persistence semantics;
- connection-handle behavior;
- Context Menu Relation creation.

## Deferred LiaisonScape UX work

### Next / before public release: connection-handle visibility UX

On desktop, the handle should normally be hidden and visible on Entity hover or
while the Entity is selected. On touch, it should become visible after Entity
selection without depending on hover. Existing handle Relation creation should
initially remain unchanged. Handle visibility is application view state, is not
persisted, and is not a routing obstacle.

### Deferred

- Context Menu Relation creation, because an existing Relation-creation path is
  already available after Entity selection;
- Entity shape expansion;
- automatic Relation/self-loop radius adaptation.

### Closed for now

Occupied-path clearance improvement. The 2D-2 audit is complete and 2D-2A Rev1
was rejected. The current hard metric remains until concrete user-visible
evidence justifies reopening it.
