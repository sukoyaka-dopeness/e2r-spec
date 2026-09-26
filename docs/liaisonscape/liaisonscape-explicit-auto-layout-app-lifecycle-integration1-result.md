# LiaisonScape Explicit Auto Layout App Lifecycle Integration 1

Date: 2026-09-17  
Contract: `E2R-LIAISONSCAPE-EXPLICIT-AUTO-LAYOUT-APP-LIFECYCLE-INTEGRATION1`  
Classification: **B. LIFECYCLE INTEGRATED / READY FOR HUMAN CHECK B**

## Result

The normal Product `Auto Layout` command no longer synchronously applies the
legacy `solveAutoLayout` result. It captures an immutable operation snapshot,
executes the shared Frontier/Pin-aware/Product-selection pipeline in a
dedicated Worker, and exposes only a complete current finite result as a
read-only Product preview.

```text
Auto Layout → optional unsaved-position confirmation → Running/Cancel
→ Product preview → Apply layout / Keep current layout
```

Running, Cancel, failure, stale input, and Reject leave pre-operation working
positions and the Dataset unchanged. Preview is render-only and uses existing
Product routing, Relation-label, Node-label, Self-loop, viewport, and manual
presentation authority. Apply copies candidate Node positions into App working
state, marks Coordinates pending only when positions changed, and requires the
existing atomic Save Coordinates path for persistence.

## Pin and authority boundary

Saved and staged Pins are resolved at snapshot capture. A staged Unpin removes
the saved Pin from operation input; a staged Pin uses its current working
position; a manually moved pinned Entity uses its current working position.
Pinned positions are hard generator constraints and are validated before
Preview. Unpinned Entities alone may move. `manual move != Pin` remains true.

Manual Relation routes, Relation-label anchors, Node-label offsets, and
Self-loop overrides are captured for Product evaluation and are not changed by
Preview or Apply. Initial Automatic Display remains a separate lifecycle.

## Failure and quality policy

Incomplete, non-finite, or Pin-violating output fails closed. A structurally
valid proposal that misses strict Product eligibility is reviewable with a
visible quality warning. No score threshold, solver retuning, fixed timeout,
or dense optimization was added. Worker termination implements Cancel and
stale-result rejection without partial geometry publication.

## Actual Product smoke evidence

The normal acceptance Product surface was exercised with the Titanic fixture:

- Running stated that current layout was unchanged and offered Cancel.
- Completion displayed a read-only preview with Apply/Keep-current actions and
  the existing non-strict quality warning.
- Reject removed Preview, restored actions, and left Save Coordinates disabled.
- A second run followed by Apply removed Preview, enabled Save Coordinates,
  and stated that the result was temporary until saved.
- Viewport controls remained available during Preview.

This is integration smoke evidence, not Human Check B visual acceptance.

## Executable boundary

```text
App Dataset/positions/Pin/manual-presentation snapshot
→ explicit-auto-layout-worker.ts
→ runExplicitAutoLayoutOperation
→ shared Frontier or fixed-anchor candidate generation
→ Product-owned evaluation/ranking
→ structurally validated Preview
→ explicit App Apply only
```

Focused gates cover completion, Worker termination, Cancel/no-adoption, staged
Unpin, shared pipeline use, and removal of the old direct-apply path.

## Human Check B

Human Check B remains open. Review at minimum: unpinned, saved/staged Pin,
manually moved pinned anchor, all-pinned/no-op, warning Preview, Cancel, Reject,
Apply, EN/JA, and ordinary plus slower/dense controls. Confirm that Preview is
clearly temporary and pinned Nodes do not move.
