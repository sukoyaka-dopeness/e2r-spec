# Automatic Layout Experiment 1G - Cardinal Preference Result

Date: 2026-08-18

Status: Non-normative experiment evidence

## Result

```text
BOUNDED IMPROVEMENT / DIRECTION SUPPORTED
```

Experiment 1G tested whether a soft preference for vertical and horizontal
Node-label placement could strengthen the perceived ownership relationship
without losing the collision-escape benefit of higher angular freedom.

## Scope tested

The 32-direction Angular Freedom behavior from Experiment 1C was retained.
All 32 directions remained legal. For each candidate, the temporary scoring
addition was:

```ts
const modulo = index % 8;
const cardinalDistanceSteps = Math.min(modulo, 8 - modulo);
const cardinalPreferencePenalty = cardinalDistanceSteps * 0.5;
```

The existing base preference became:

```ts
index * 0.01 + cardinalPreferencePenalty
```

Thus cardinal candidates receive no additional penalty, while candidates up
to 45 degrees away receive at most `2.0`. No distance, collision, routing,
spacing, persistence, Coordinate, or fit behavior changed.

## Findings

The difference was noticeable but not dramatic. In relatively sparse geometry,
labels more often used vertical or horizontal placements, appeared more
orderly, and gave a somewhat clearer ownership impression when local space
permitted it.

Dense geometry could still select intermediate or diagonal candidates when
necessary. This preserves the useful Experiment 1C escape behavior.

The evidence supports a soft cardinal-axis preference as a direction for
improving perceived Node-label ownership. The exact `0.5` weight is not final;
cardinal-only placement is not accepted; 32 directions is not accepted as a
final constant; and Node-label proximity and graph density remain separate
unresolved quality axes.

## Future observations

Fast Node dragging produced a separate drag-follow responsiveness concern:
the automatic label may appear to trail the moving Node, consistent with
previous-placement stability referring to an absolute prior label position.
This remains distinct from stability, angular freedom, proximity, collision
avoidance, and recovery. It is the subject of Experiment 1H.

Very long single-line descriptions also create a wide label footprint and may
increase horizontal or diagonal placement pressure. Bounded multi-line
description wrapping is a future candidate only; typography, truncation, label
width, and label height were not changed in this experiment.
