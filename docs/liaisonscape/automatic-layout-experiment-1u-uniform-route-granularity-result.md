# Automatic Layout Experiment 1U — Uniform Route Granularity Result

Date: 2026-08-19

This document records the bounded application result for Experiment 1U. It
does not define an E2R semantic constant or claim that automatic layout is
complete.

## Motivation

The previous ordinary automatic Relation route used 24-unit offset steps with
8 additional steps. During obstacle movement, this could make route changes
feel coarse and could produce a large downstream Relation-label movement.

Experiment 1T demonstrated that 12-unit steps improved route motion during
active Node drag, but its drag-only candidate set caused the same coordinates
to produce different automatic geometry before and after pointerup. That
pointer-state-dependent behavior was rejected.

## Accepted 1U behavior

Ordinary automatic Relation route candidates now use one uniform candidate set
regardless of pointer state:

```text
step = 12
steps = 16
maximum additional range = 192
```

The route Node influence radius remains `60` graph units. Route scoring,
penetration, edge-overlap handling, curvature preference, first-zero-score
behavior, parallel base spacing, manual curvature, and self-loop geometry are
unchanged.

There is no active-drag-only route configuration and no pointer-state-specific
candidate selection. Consequently, unchanged coordinates receive the same
automatic route candidate set and route geometry before and after pointerup.

## Manual result

Bounded manual evidence reported:

- intermediate ±12 route states were observable;
- route motion felt less coarse;
- large pitter-patter was reduced;
- slow dragging exposed intermediate visual states and felt somewhat more
  animated;
- no practical inconvenience was observed;
- clicking an obstacle Node without changing its coordinates did not cause a
  Relation label jump.

The result is recorded as:

```text
12-unit granularity: CLEAR IMPROVEMENT / DIRECTION SUPPORTED
uniform application: SUPPORTED
pointer-state-specific automatic geometry: REJECTED
```

This does not claim that route animation has been implemented, that all
transition issues are solved, or that 12 units is universally optimal.

## Diagnostic and persistence boundary

The temporary `r:<offset>` route diagnostic was removed before this
checkpoint. Diagnostic-only route metadata and tests were also removed.
No route-granularity state is persisted, exported, or represented in the
Dataset. The 12-unit value is application-local automatic routing behavior,
not an E2R semantic value.

## Unchanged behavior

The checkpoint preserves:

- Experiment 1M same-sample Relation-label normal-distance recovery;
- Experiment 1N Revision 2 midpoint anchor, local Node pressure, and
  clearance-balanced fallback;
- Experiment 1Q Relation route Node influence radius of 60;
- Experiment 1L Relation-label drag-follow responsiveness;
- Node-label placement and Dataset, Coordinate, and Layout semantics.

Experiment 1S hysteresis and Experiment 1T drag-only branching are not part of
this result.

## Next bounded research target

The next target is **Relation-Label Placement Transition Animation**. Its
boundary is presentation between authoritative placement targets; the existing
1M/1N placement algorithms remain authoritative. A future study must address
whether an interpolated visual path can cross a Node, edge, or another label,
even when both endpoints are collision-free.

Shift-drag directional snapping remains a future idea only.
