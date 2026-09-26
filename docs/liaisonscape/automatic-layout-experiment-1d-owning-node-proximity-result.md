# Automatic Layout Experiment 1D - Owning-Node Proximity Result

Date: 2026-08-18

Status: Non-normative experiment evidence

## Result

```text
MIXED / BOUNDED IMPROVEMENT
```

Experiment 1D tested whether the Node-label distance calculation was causing
automatic labels to appear unnecessarily far from their owning Node.

## Scope tested

The existing 32-direction Angular Freedom behavior was retained. Only the
owning-Node distance calculation in `placeNodeLabel()` was changed during the
temporary comparison.

Baseline formula:

```ts
const distance =
  40
  + Math.abs(directionX) * width / 2
  + Math.abs(directionY) * height / 2;
```

Temporary axis-separated rectangle-clearance formula:

```ts
const clearanceFromNodeCenter = 40;
const horizontalDistance = Math.abs(directionX) > 1e-12
  ? (clearanceFromNodeCenter + width / 2) / Math.abs(directionX)
  : Number.POSITIVE_INFINITY;
const verticalDistance = Math.abs(directionY) > 1e-12
  ? (clearanceFromNodeCenter + height / 2) / Math.abs(directionY)
  : Number.POSITIVE_INFINITY;
const distance = Math.min(horizontalDistance, verticalDistance);
```

No angular resolution, spacing, fit behavior, collision scoring or geometry,
Relation behavior, persistence, or Dataset behavior was changed.

## Findings

Manual evaluation produced mixed evidence:

- near-vertical placements appeared somewhat improved;
- horizontal placements were approximately unchanged, with at most modest
  improvement;
- diagonal and shallow-angle placements did not show the expected clear
  improvement;
- long-description labels did not show a clear diagonal-distance improvement;
- label-to-label collision behavior did not materially worsen;
- movement-time jump or escape behavior did not worsen;
- the Experiment 1C 32-direction improvement remained clearly stronger than
  the original 16-direction baseline.

The evidence supports an independent owning-Node proximity tuning opportunity,
but does not support adopting this exact formula. The temporary formula was
rolled back, and the baseline formula remains active.

The exact formula, `40`, the implied clearance interpretation, and any
axis-aligned geometry are not accepted as final. Owning-Node proximity remains
unresolved. Angular Freedom remains the stronger successful intervention.

The next bounded experiment is Experiment 1E - Node-Label Recovery.
