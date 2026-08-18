# Automatic Layout Experiment 1I - Bounded Description Wrapping Result

Date: 2026-08-18

Status: Non-normative experiment evidence

## Result

```text
CLEAR IMPROVEMENT / DIRECTION SUPPORTED
```

Long single-line descriptions created excessively wide Node-label footprints,
reducing nearby placement options and making dense graphs harder to read.
Experiment 1I preserved the existing visible-content limit and applied:

```text
truncateNodeText(description, 28)
-> wrapNodeLabel(displayedDescription, 20)
```

The temporary wrap width is not a product constant. Descriptions render on at
most two lines. LabelRect heights are `20`, `34`, and `48` for zero, one, and
two description lines. Width is based on the actual rendered name and
description lines. The amount of displayed information was not expanded.

## Findings

Manual evaluation found that two-line wrapping materially reduced wide
description footprints, improved dense-graph readability, and improved
automatic placement. English and Japanese descriptions both benefited. The
32-direction Angular Freedom and soft cardinal preference remained compatible
with the wrapping improvement, as did Experiment 1H active-drag behavior.

The result does not establish `20`, `28`, two lines, Japanese line breaking, or
any optical Node-label proximity policy as final. Optical proximity remains a
separate issue.

## Experiment 1I-B geometry audit

The Node is `64 x 64`, with an effective half-size of `32`. Under the existing
distance formula, a pure vertical two-line candidate has LabelRect center
distance `64` and height `48`; its Node-facing LabelRect edge is therefore
`40` units from the Node center, leaving an `8`-unit gap after the Node
boundary. A pure horizontal candidate similarly leaves an `8`-unit gap:

```text
Node boundary -> LabelRect edge = 8
```

This clearance is independent of line count under the current formula. The
observed visual gap is therefore not primarily explained by LabelRect
clearance. Rendered glyph-block optical inset remains a separate workstream.

A temporary global `+3` vertical shift of the two-line text block was rejected:
it slightly reduced the above/below asymmetry by making the previously good
lower placement appear farther away, without materially improving proximity.
The original baselines (`-15`, `0`, `15`) remain.

## Future candidates

Application-local manual wrapping should remain distinct from authored
Dataset newlines and any future interoperable Presentation/Layout intent.
Japanese wrapping quality may later need orphan avoidance, kinsoku-aware or
word/phrase-aware breaks; morphological analysis is not yet required.

Relation-label active-drag responsiveness, edge midpoint recovery, and edge
normal-distance recovery remain future experiments. No diagnostic UI or
wrapping persistence model was introduced by this checkpoint.
