# E2R Session 0040 - Placement Ownership Indicator Checkpoint

Date: 2026-08-19

## Scope

This session closed the LiaisonScape automatic-layout placement-ownership
workstream covering Relation-label presentation state, manual Relation-label
ownership, manual Node-label ownership, and the text-only placement ownership
hover indicator.

The work remained application-level and non-normative. No E2R Core, Dataset,
Coordinate, Layout, or export semantics were changed.

## Experiment 1V - Presentation-state architecture

Relation-label logical placement was separated from visual presentation state.
No animation was introduced. Visual position immediately followed the current
logical target. Transition-path safety helpers were added for future research,
but they did not alter placement selection or persistence.

## Experiment 1W - Manual Relation-label ownership

Automatic Relation labels continued to use the existing `placeEdgeLabel()`
behavior, including 1M normal-distance recovery and 1N Revision 2
midpoint/local-pressure recovery.

After a meaningful Relation-label drag, the label became application-local
manual placement represented by:

```text
normalized cumulative route fraction
+ tangent displacement
+ normal displacement
```

Manual Relation labels were not relocated by unrelated obstacle movement.
Owning Relation endpoint, route, curvature, self-loop, and parallel-route
changes reconstructed the label from its Relation-relative anchor. Manual
labels remained occupied geometry for automatic labels and later Node-label
placement.

Manual evaluation was positive. Automatic Relation labels retained normal
behavior, manual labels no longer moved unnaturally because of unrelated
obstacles, and no 1W regression was observed after Experiment 1Y.

## Experiment 1Y - Manual Node-label ownership

Automatic Node labels continued to use `placeNodeLabel()`.

After a meaningful Node-label drag, the label became application-local manual
placement represented by a Node-relative graph-space `{x, y}` offset. The
owning Node carried the manual label, while unrelated obstacle movement did
not relocate it. Manual Node-label rectangles remained occupied geometry for
later Node-label placement.

The existing single-pass collision order remained unchanged:

```text
Relation labels -> Node labels
```

Manual Node labels were therefore not fed backward into Relation-label
placement. No second-pass feedback loop was introduced.

Manual evaluation passed for automatic labels, manual labels, obstacle
movement, owning-Node movement, and the Relation-label regression check.

## Experiment 1Z - Placement ownership indicator

The indicator covered three independent responsibilities:

- Relation route;
- Relation-label placement;
- Node-label placement.

Entity position ownership remained excluded because fallback positions,
temporary Entity movement, restored Coordinate data, and adopted Coordinate
data do not share the same live automatic-placement semantics.

The final accepted presentation was an application-owned hover popover:

- immediate display near the pointer;
- `pointer-events: none`;
- dismissal on hover leave;
- no problematic flicker;
- no interference with drag, selection, long-press, touch, pinch/zoom, or
  Relation creation;
- correct behavior after hard reload.

Persistent selection ownership display was explored but was not required for
the accepted checkpoint. Hover is sufficient for 1Z.

### Accepted popover content

| Hover target | Content |
|---|---|
| Entity body | Entity name only |
| Node label | Description, then ownership |
| Relation label | Relation name, then ownership |
| Relation path | Source name, target name, then ownership |

Entity position ownership is never shown.

The ownership line is separate status metadata and uses the shared style:

```css
font-size: 0.75rem;
font-weight: 600;
line-height: 1.2;
margin-top: 4px;
```

Popover body values are:

```css
font-size: 0.875rem;
line-height: 1.35;
padding: 6px 8px;
max-width: 240px;
border-radius: 6px;
```

Long names and descriptions are bounded. Empty descriptions and Relation
names do not receive a fallback name; ownership remains visible.

### Ownership derivation

The displayed state is derived from actual application state:

- no manual route override -> `自動配置` / `Automatic placement`;
- manual curvature or self-loop override -> `ユーザー配置` / `User placement`;
- automatic `placeEdgeLabel()` target -> automatic;
- manual Relation-relative anchor -> user placement;
- automatic `placeNodeLabel()` target -> automatic;
- manual Node-relative offset -> user placement.

Relation route, Relation-label, and Node-label ownership remain independent.
Changing one does not implicitly change another.

## Checkpoint commits

LiaisonScape:

```text
9856e69 feat: add placement ownership hover indicators
```

e2r-spec:

```text
9e816d1 docs: record placement ownership indicator result
```

The consolidated result document is:

```text
docs/automatic-layout-placement-ownership-indicator-result.md
```

Both commits are local and unpushed.

## Validation

At the final 1Z checkpoint:

- LiaisonScape tests: 137 passed;
- LiaisonScape lint: PASS;
- LiaisonScape build: PASS;
- LiaisonScape `git diff --check`: PASS;
- e2r-spec `npm run validate`: PASS.

## Diff boundary audit

The checkpoint did not change:

- 1W/1Y placement ownership semantics;
- 1M/1N automatic Relation-label placement;
- 1L Relation drag responsiveness;
- 1U route granularity and routing behavior;
- route influence radius or route scoring;
- Dataset serialization;
- Coordinate persistence;
- Dataset format or export behavior.

## Deferred work

- future `自動配置に戻す` access from context menus;
- reconsideration of current right-click-to-Detail behavior;
- future context menu prioritizing Detail and exposing applicable reset actions;
- Entity placement ownership;
- Relation-label animation;
- manual-label versus Node layering and visibility;
- Relation direct-drag symmetry;
- mobile editing improvements.

## Return boundary

Future work involving persisted authored layout must continue to distinguish
application-local Derived state from explicitly adopted Coordinate or Layout
data. Placement ownership indicators must not be treated as Dataset
semantics or persistence authorization.
