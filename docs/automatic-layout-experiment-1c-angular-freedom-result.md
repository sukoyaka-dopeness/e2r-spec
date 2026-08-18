# Automatic Layout Experiment 1C - Angular Freedom Result

Date: 2026-08-18

Status: Non-normative experiment evidence

## Result

```text
CLEAR IMPROVEMENT / DIRECTION SUPPORTED
```

Experiment 1C found that higher Node-label angular resolution can materially
improve placement by exposing useful intermediate directions that the coarse
candidate set could not use.

## Scope tested

- baseline: 16 directions at 22.5-degree increments;
- temporary comparison: 32 directions at 11.25-degree increments;
- previous-placement stability and all other automatic-layout behavior held
  at the existing baseline.

The comparison did not change spacing, viewport fitting, label distance,
collision weights or geometry, routing, Relation-label placement, persistence,
or Dataset behavior.

## Findings

Manual evaluation showed a clear improvement in cases where useful space was
between the former 16 angular candidates. Intermediate and shallow directions
could be selected instead of escaping to a more distant discrete direction.
This reduced some collision-triggered label escapes, including in dense graphs
and with long descriptions.

The evidence supports the direction that angular discreteness contributes to
some Node-label placement problems. It does not establish that 32 directions
is the final correct value.

Owning-Node proximity remains a separate quality axis. Recovery after a label
has escaped remains a separate problem, and graph density and collision
geometry remain unresolved.

## Non-conclusions

The following remain unselected:

- 32 as a product or specification constant;
- higher fixed resolution, coarse-to-fine search, local angular refinement, or
  near-continuous angular search;
- any change to Node-label distance, collision scoring, fit behavior, or
  persistence.

The next bounded experiment is Experiment 1D - Owning-Node Proximity.
