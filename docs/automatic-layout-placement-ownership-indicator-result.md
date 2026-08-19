# Automatic Layout Placement Ownership Indicator Result

Date: 2026-08-19

This document records the accepted LiaisonScape Experiment 1Z result. It is
application-level evidence and does not change the E2R Core, Dataset,
Coordinate, Layout, or export responsibilities.

## Scope

The indicator covers three independent placement responsibilities:

- Relation route;
- Relation-label placement;
- Node-label placement.

Entity position ownership is intentionally excluded. Generated fallback
positions, temporary Entity movement, restored Coordinates, and adopted
Coordinates do not share the same live automatic-placement semantics.

## Accepted hover behavior

The placement indicator is an application-owned popover that:

- appears immediately near the pointer;
- uses `pointer-events: none`;
- disappears when hover ends;
- does not interfere with dragging, selection, Relation curvature, long-press,
  touch, pinch/zoom, or Relation creation;
- showed no problematic flicker during manual evaluation;
- survives a hard reload correctly.

Persistent selection ownership display was explored but is not required for
this checkpoint. Hover is the accepted presentation for 1Z.

## Accepted content

| Hover target | Content |
|---|---|
| Entity body | Entity name only |
| Node label | Description, then ownership |
| Relation label | Relation name, then ownership |
| Relation path | Source name, target name, then ownership |

Entity position ownership is never displayed.

The ownership line is separate metadata rather than part of the preceding
prose or name.

## Accepted presentation values

Popover body:

```text
font-size: 0.875rem
line-height: 1.35
padding: 6px 8px
max-width: 240px
border-radius: 6px
```

Ownership line:

```text
font-size: 0.75rem
font-weight: 600
line-height: 1.2
margin-top: 4px
```

The popover is fixed UI chrome and does not scale with graph zoom. Long names
and descriptions are bounded. Empty Node descriptions and Relation names do
not receive a fallback name; ownership remains visible.

## Ownership semantics

The displayed state is derived from the actual application state:

- automatic Relation route: no manual curvature or self-loop override;
- user Relation route: manual curvature or self-loop override;
- automatic Relation label: `placeEdgeLabel()` controlled;
- user Relation label: manual Relation-relative anchor;
- automatic Node label: `placeNodeLabel()` controlled;
- user Node label: Node-relative manual placement.

These responsibilities remain independent. Manipulating a route does not make
its label manual, and manipulating a label does not make its route manual.

## Manual evidence

The final manual checkpoint reported:

- hover dismissal: PASS;
- manual routes and labels show `ユーザー配置`: PASS;
- automatic routes and labels show `自動配置`: PASS;
- pointer interaction unaffected: PASS;
- Relation drag unchanged: PASS;
- Node-label drag unchanged: PASS;
- Relation-label drag unchanged: PASS;
- hard reload behavior: PASS;
- no problematic hover flicker: PASS;
- semibold ownership improved recognizability;
- smaller ownership typography was accepted at `0.75rem`.

## Diff boundary audit

The checkpoint does not change:

- 1W/1Y placement ownership semantics;
- 1M/1N automatic Relation-label placement;
- 1L Relation drag responsiveness;
- 1U routing;
- route influence radius or route scoring;
- Dataset serialization or Coordinate persistence;
- export behavior.

## Deferred work

- future `自動配置に戻す` access from context menus;
- reconsideration of right-click opening Detail directly;
- future context menu prioritizing Detail and exposing applicable reset actions;
- Entity placement state;
- Relation-label animation;
- manual-label/Node layering and visibility;
- Relation direct-drag symmetry;
- mobile editing improvements.
