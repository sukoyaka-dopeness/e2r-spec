# Automatic Layout Experiment 1K - Directional Optical Geometry Audit

Date: 2026-08-18

Status: Non-normative experiment evidence

## Result

```text
AUDIT COMPLETE / GEOMETRY CLARIFIED
```

The audit found that the current perceived Node-label distance cannot be
attributed to an opaque label background or an incorrect basic LabelRect
clearance.

## Findings

Node names use 12px, weight 650; descriptions use 10px, weight 500. Both use
center anchoring, SVG default baseline semantics, and no explicit
`dominant-baseline`. Two-line labels use name baselines -15 and description
baselines 0 and 15, with a 15-unit line pitch.

The two-line LabelRect is 48 units high. The Node rect is 64 x 64, giving an
effective half-size of 32. Under the current distance formula, pure vertical
and pure horizontal placements have an 8-unit gap from the Node boundary to
the Node-facing LabelRect edge. This clearance does not vary with description
line count.

The label interaction rectangle is transparent, has no stroke, and does not
visually mask the connector. The connector starts approximately at the Node
boundary (radius 33) and ends at the Node-facing LabelRect edge. This is
classified as **TRUE GEOMETRIC TERMINATION**. Text stroke can locally obscure
a connector where it crosses visible glyphs, but that is distinct from its
geometric endpoint. Exact glyph `getBBox` measurements were not obtained;
exact font bounds must not be inferred.

## Future observation

Manual evidence suggests that a connector may be less useful when a close
Node-owned label is already obviously attached, while a displaced label may
benefit from the ownership cue. This records a future adaptive connector
visibility research axis only. No threshold, hiding rule, or universal
connector policy is defined here, and nothing is implemented.

Node-label optical micro-tuning is deferred. Experiment 1K introduced no
production geometry change and no diagnostic code.
