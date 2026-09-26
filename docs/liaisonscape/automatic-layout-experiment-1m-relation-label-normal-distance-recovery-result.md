# Automatic Layout Experiment 1M — Relation-Label Normal-Distance Recovery

Date: 2026-08-18

## Purpose

Experiment 1M evaluated whether Relation labels that move away from an edge to
avoid a collision can safely recover toward the edge after the obstacle is
removed. The experiment was limited to normal-distance recovery. Midpoint and
along-edge recovery were not implemented.

Automatic geometry remains Derived application state. No Dataset, Coordinate,
Layout, persistence, or E2R Core behavior was changed.

## Implementation boundary

The existing candidate scoring selects the stable candidate first. Recovery
then considers only candidates in that same `sampleIndex` bucket and prefers a
smaller absolute `normalOffset` when all recovery blockers are clear:

- label overlap;
- Node overlap; and
- edge overlap.

Candidate positions, normal offsets, scoring weights, routing, and Experiment
1L drag-follow behavior were otherwise preserved.

## Manual evidence

The diagnostic confirmed a pure normal-distance recovery case:

```text
before:    sampleIndex=20 normalOffset=0
collision: sampleIndex=20 normalOffset=-24
after:     sampleIndex=20 normalOffset=0
```

This directly separates normal escape and recovery from along-edge movement in
that case. A blocked edge-near candidate remained blocked rather than forcing
the label into a hard collision.

## Bounded side-switch observation

During a bounded manual case on a horizontal edge, a collision geometry was
moved from one normal side toward the other. The label was observed to switch
repeatedly between positions above and below the edge.

This is recorded as:

```text
D — Oscillation:
OBSERVED IN A BOUNDED SIDE-SWITCH CASE
```

The diagnostic values were not captured during that moment. Therefore the
cause is not assigned. It may involve Experiment 1M recovery or competition
between the existing `-normalOffset` and `+normalOffset` candidates. The
observation is not conflated with the separate along-edge / midpoint problem.

The independent findings are:

1. normal-distance recovery improved in Experiment 1M;
2. normal-side switching / oscillation remains an unresolved bounded issue;
3. along-edge displacement and failure to return toward the midpoint remain a
   separate future research target.

## Result

```text
BOUNDED IMPROVEMENT / DIRECTION SUPPORTED
```

Pure normal escape and recovery were directly observed, and blocked recovery
safety was preserved. The bounded side-switch observation prevents the stronger
`CLEAR IMPROVEMENT` conclusion. No oscillation correction was attempted in
this experiment.

## Next bounded research target

Relation-label along-edge / midpoint recovery: isolate a case where the label
is edge-near, `normalOffset` is zero or near zero, `sampleIndex` is displaced
from midpoint `20`, and the obstacle disappears without the label returning to
the midpoint. Do not implement that behavior as part of Experiment 1M.
