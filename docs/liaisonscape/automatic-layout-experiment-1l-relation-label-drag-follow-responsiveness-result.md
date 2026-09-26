# Automatic Layout Experiment 1L - Relation-Label Drag-Follow Responsiveness

Date: 2026-08-18

Status: Non-normative experiment evidence

## Result

```text
CLEAR IMPROVEMENT / DIRECTION SUPPORTED
```

Relation labels showed visible trailing when an endpoint Node was dragged
quickly. Analogous to Node-label Experiment 1H, the temporary implementation
bypassed previous-placement hysteresis only for Relations incident to the
actively dragged Node. Unrelated Relations retained their hysteresis.

Horizontal, vertical, and diagonal fast drags substantially reduced or
removed trailing. Slow dragging did not expose notable new candidate
thrashing. Source and target endpoint dragging behaved symmetrically. A
self-loop naturally satisfied the same endpoint condition; self-loop routing
was not changed.

Pointerup behavior was generally acceptable. Some labels still occasionally
remained farther from their edge than desirable afterward. This remaining
issue is treated as recovery behavior, not as a failure of the drag-follow
experiment.

The evidence supports that Relation-label previous-placement hysteresis
materially contributed to active endpoint-drag lag, and that static stability
and active drag responsiveness benefit from different hysteresis treatment.
It does not establish that Relation-label placement or self-loop routing is
finished, that hysteresis should always be disabled, or that recovery is
solved.

## Independent recovery axes

The remaining recovery work must keep these axes separate:

- normal-distance recovery: return toward the Relation edge while preserving
  the along-edge position;
- along-edge / midpoint recovery: return toward the appropriate position on
  the Relation path.

Experiment 1L implemented neither recovery axis.
