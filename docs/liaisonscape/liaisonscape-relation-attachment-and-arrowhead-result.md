# LiaisonScape Relation Attachment and Arrowhead Result

Status: accepted application result
Application checkpoint: `e2r-liaison-scape` commit `fd220b8`
Recorded: 2026-08-20

This document records LiaisonScape application behavior. It does not add
presentation behavior to the E2R Core specification.

## Accepted attachment model

LiaisonScape uses the shape-agnostic interface:

```text
getEntityAttachment({ center, direction, shape })
```

The current implementation supports a rounded-rectangle shape. Its boundary
intersection returns an attachment point, an outward normal, and a distance.
Relation routing consumes this abstraction rather than duplicating rounded-
rectangle intersection logic. Future shapes such as circles, ellipses,
polygons, or custom icons can be added below the abstraction boundary.

Ordinary and self Relations use shape-aware boundary attachment. Automatic
route selection, manual curvature ownership, self-loop orientation and radius,
and parallel distribution remain separate responsibilities.

## Accepted arrowhead model

The Relation path endpoint remains the canonical Entity boundary attachment.
The marker `refX` change from 7 to 8 aligned the arrow tip with that endpoint.

The initial SVG `orient="auto"` behavior was mathematically correct: it follows
the infinitesimal endpoint tangent. Investigation showed that high-curvature
paths and small self-loops can still look misaligned because a viewer sees a
finite arrowhead footprint rather than an infinitesimal tangent.

LiaisonScape therefore renders the arrowhead presentation explicitly. Its
orientation is derived from a finite visible-approach direction read from the
route samples. The presentation reads route samples but never feeds values
back into routing, collision scoring, or label placement.

The effective marker proportions remain equivalent to the prior
stroke-dependent marker:

- normal Relation: length 16, half base width 6;
- selected Relation: length 22, half base width 8.25.

The explicit arrowhead is noninteractive. The existing Relation hit area
remains the interaction target.

## Rejected experiment

`markerUnits="userSpaceOnUse"` was tested to remove selection-dependent marker
scaling. It was rejected because fixed-size behavior worsened the overall
visual result and did not resolve the perceived penetration/readability issue.
The current implementation retains stroke-dependent sizing.

## Manual evidence

Manual acceptance reported the following as passing:

- ordinary horizontal, vertical, and diagonal Relations;
- weak and strong curved Relations;
- manual curvature with ownership and drag responsiveness preserved;
- automatic, larger/parallel, and manual self-loops;
- selected/unselected transitions with acceptable orientation change;
- hover stability;
- Relation selection and Context Menu;
- curvature drag, Relation-label drag, and Node-label drag;
- no arrowhead interaction dead zone;
- no route movement or Node attachment regression;
- placement remains stable after Node movement and hard reload.

## Explicitly deferred

- automatic self-loop Node avoidance;
- connection-handle visibility UX;
- connection-handle exclusion;
- direct unselected Relation drag;
- Entity shapes beyond the current rounded rectangle.

## Separation of responsibilities

```text
Entity shape attachment
    -> canonical Relation route endpoint

route samples
    -> arrowhead visible-approach direction

arrowhead presentation
    -> no routing, collision, or label-placement input
```

The application result does not change Dataset persistence or the E2R Core
data model.
