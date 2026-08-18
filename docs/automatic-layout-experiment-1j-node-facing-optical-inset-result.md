# Automatic Layout Experiment 1J - Node-Facing Optical Inset Result

Date: 2026-08-18

Status: Non-normative experiment evidence

## Result

```text
MIXED / DIRECTIONAL OPTICAL ASYMMETRY CONFIRMED
```

Experiment 1J tested whether the remaining visual Node-label distance problem
was an optical relationship between rendered glyphs and an otherwise adequate
LabelRect, rather than a placement-geometry problem. Experiment 1I-B had
established an 8-unit Node-boundary-to-LabelRect-edge gap for pure vertical and
horizontal placement.

The temporary change left LabelRect, label center, placement, collision
geometry, and scoring unchanged. It moved only the rendered automatic 2-line
text block 3px along the unit vector from label center toward the owning Node.
Labels with manual offsets were excluded.

## Findings

For labels above a Node, the 3px shift produced little perceived proximity
improvement. For labels below a Node, the shift made the label feel too close;
the original baseline was better. The result confirms directional asymmetry in
the visible optical relationship. The temporary uniform radial nudge was not
adopted and was rolled back.

The result does not establish 3px, another immediate magnitude, direction-
specific hard-coded values, incorrect LabelRect clearance, or a wrapping
regression. Future work should inspect actual visual geometry before tuning
another value.

## Cross-experiment observation

Qualitatively, the 32-direction candidate expansion combined with soft
cardinal preference appears to have substantially reduced how often the user
feels compelled to manually reposition Node labels. This is useful product
evidence, but it is not a measured metric. Manual intervention frequency may
become a future automatic-layout quality measure.
