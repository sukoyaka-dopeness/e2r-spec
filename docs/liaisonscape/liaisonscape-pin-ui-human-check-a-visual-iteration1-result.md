# LiaisonScape Pin UI Human Check A Visual Iteration 1

Date: 2026-09-17  
Contract: `E2R-LIAISONSCAPE-PIN-UI-HUMAN-CHECK-A-VISUAL-ITERATION1`  
Classification: **A. PIN VISUAL ITERATION STAGED / READY TO RESUME HUMAN CHECK A**

## Decision

The first Pin visual candidate was not accepted in Human Check A. Persistent
Pin-family glyphs were ambiguous, especially on unpinned Nodes, and removing
shadow only from pinned Nodes created a weak state distinction while making the
Graph look visually inconsistent.

The bounded replacement removes all persistent Pin decoration from the Canvas.
Pinned and unpinned Nodes now use the same ordinary Node presentation and the
same shadow. Pin state and its single available action remain explicit in
Entity Context Menu and Entity Detail.

This is a staged visual iteration, not a Human Check A PASS. Human review must
resume against the updated Product surface.

## User-facing contract

Context Menu and Entity Detail consume the same effective `WorkingPinState`:

```text
State:   Pinned / Unpinned
         ピン留め済み / ピン留めなし

Action:  Pin / Unpin
         ピン留め / ピン留めを解除
```

Entity Detail keeps Pin as LiaisonScape layout intent rather than an Entity
field. Pin/Unpin stages immediately in the existing working state and remains
separate from Entity name/description Save semantics. Read-only operation
Preview continues to disable the Detail Pin action.

## Canvas presentation

The Node SVG no longer contains a Pin indicator, Pin-specific class, badge,
dot, outline, fill, corner marker, or Pin-state data attribute. The normal Node
body shadow is applied uniformly to every Node. Therefore Canvas decoration no
longer attempts to distinguish pinned from unpinned state.

No hover or selection Pin popover was added in this first visual iteration.
Human Check A subsequently requested a pinned-only reuse of the ownership
popover pattern; that candidate is recorded in
[Pin UI Human Check A Popover Iteration 2](liaisonscape-pin-ui-human-check-a-popover-iteration2-result.md).
Existing Node drag, selection, Relation creation, Node-label interaction, and
the 500 ms / 8 px long-press Context Menu contract remain unchanged.

## Preserved semantic and persistence boundaries

`manual move != Pin` remains explicit. A pinned Node can still be moved
manually; Pin is a constraint/user intent for the future Explicit Auto Layout
operation, not placement provenance. Pin-only pending work, replacement and
beforeunload safety, atomic Save Coordinates plus Pin persistence, Pin-created
Coordinate adoption/discard, and saved-Pin movement behavior are unchanged.

The current synchronous `solveAutoLayout` action is intentionally unchanged
and still does not honor Pin. Wiring the accepted Pin-aware Explicit operation
Preview/Accept/Reject lifecycle remains a later checkpoint after Human Check A.
Initial Automatic Display is unchanged.

Pin All / Unpin All and hover/selection Pin popovers remain unimplemented. The
earlier visual motivation for batch actions should be reassessed during resumed
Human Check A; no batch policy is inferred here.

## Evidence

Focused evidence verifies that Context Menu and Entity Detail retain working-
state parity, accepted EN/JA vocabulary is present, persistent Node decoration
is absent, all Nodes share the same shadow rule, read-only Preview blocks the
Detail mutation, and existing Context Menu / drag / selection / Relation UI
regressions remain green.

```text
node --experimental-strip-types --test \
  tests/pin-app-working-state.test.ts \
  tests/pin-persistence.test.ts \
  tests/direct-graph-authoring.test.ts \
  tests/appUiIntegration.test.ts            # 59/59 PASS
npm run lint                                # PASS
npm test                                    # 615/615 PASS
npm run build                               # PASS
e2r-spec: npm run validate                  # PASS
git diff --check                            # PASS (LF/CRLF normalization warnings only)
```

The full suite retained the existing Vite/WebSocket port `24678`-in-use
diagnostic and completed without test failures.
