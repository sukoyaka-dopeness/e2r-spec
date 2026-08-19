# Automatic Layout Placement Ownership Checkpoint

Date: 2026-08-19

This document records the application-level ownership checkpoint for
LiaisonScape automatic layout. It is non-normative evidence and does not add
Core, Coordinate, Layout, or Dataset semantics.

## Experiment 1V - Presentation-state architecture

Relation-label logical placement remains separate from visual presentation.
No animation is active. Visual state immediately follows the current target.
Transition-path safety helpers exist, but they do not alter placement
selection or persistence.

## Experiment 1W - Relation-label ownership

Automatic Relation labels remain controlled by the existing `placeEdgeLabel()`
algorithm, including normal-distance recovery and midpoint/local-pressure
behavior.

After a meaningful label drag, a Relation label becomes application-local
manual placement. Its target is represented by a normalized cumulative route
fraction plus tangent and normal displacement. Unrelated obstacle movement
does not relocate it. Changes to the owning Relation geometry carry the label
through the reconstructed route anchor.

Manual Relation labels remain occupied geometry for automatic labels and later
Node-label placement. They are not themselves displaced by automatic label
collision handling.

User evaluation was positive:

- manual Relation-label behavior felt substantially improved;
- automatic Relation labels retained normal behavior;
- unrelated obstacle motion no longer moved manual labels unnaturally;
- Relation-label behavior after Experiment 1Y showed no observed regression.

## Experiment 1Y - Node-label ownership

Automatic Node labels remain controlled by `placeNodeLabel()`.

After a meaningful Node-label drag, the label becomes application-local manual
placement represented by a Node-relative graph-space `{x, y}` offset. The
owning Node carries the label when it moves. Unrelated obstacle movement does
not relocate the manual label.

Manual Node-label rectangles remain occupied geometry for later Node-label
placement. The current single-pass order is intentionally unchanged:

```text
Relation labels -> Node labels
```

Consequently, manual Node labels are not fed backward into Relation-label
placement. Adding that feedback would require a second pass or iteration and
is deferred.

User evaluation was positive:

- automatic Node label plus obstacle movement: passed;
- manual Node label plus obstacle movement: passed;
- manual Node label plus owning Node movement: passed;
- user expectation matched the resulting behavior;
- Relation-label 1W regression check: passed.

## Independent ownership responsibilities

Relation route ownership, Relation-label placement ownership, and Node-label
placement ownership are independent. Explicit manipulation of one does not
automatically make another manual.

Valid combinations include:

- manual Relation route plus automatic Relation label;
- automatic Relation route plus manual Relation label;
- manual Relation route plus manual Relation label;
- manual Node position plus automatic Node label;
- manual Node position plus manual Node label.

Entity position is excluded from this unified ownership model. Fallback
positions, temporary Node movement, restored Coordinate data, and explicitly
saved Coordinate data do not share the same live automatic-placement
semantics. Entity placement requires a separate decision before being labeled
Automatic placement or User placement.

## Persistence boundary

All ownership and presentation state described here is application-local,
temporary state. It is not written to the Dataset, Coordinate data, Layout,
or export output.

Opening or replacing a Dataset clears manual Relation-label and Node-label
state. Relation deletion clears its manual label state. Entity deletion clears
its manual Node-label state. Deleted owners do not retain presentation state.

## Deferred work

The following remain outside this checkpoint:

- unified placement-state indicator;
- Japanese labels `自動配置` and `ユーザー配置`;
- English labels `Automatic placement` and `User placement`;
- hover and persistent selection display;
- Entity inclusion in the indicator;
- icons;
- future `自動配置に戻す` reset wording and context-menu redesign;
- Relation direct-drag symmetry;
- Relation-label animation;
- manual-label versus Node layering and visibility;
- second-pass feedback from manual Node labels to Relation labels.

The current right-click-to-Detail behavior remains unchanged.
