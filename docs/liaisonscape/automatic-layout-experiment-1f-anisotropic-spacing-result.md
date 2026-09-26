# Automatic Layout Experiment 1F - Anisotropic Derived Spacing Result

Date: 2026-08-18

Status: Non-normative experiment evidence

## Result

```text
INCONCLUSIVE / LIMITED APPLICABILITY
```

Experiment 1F tested whether increasing only horizontal fallback Derived
spacing could use viewport slack more effectively than the uniform spacing
expansion tested in Experiment 1B.

## Scope and applicability

The comparison was limited to the fallback placement in `buildEntityGraph()`:

```text
baseline:   240 x 180
temporary:  360 x 180
```

Only horizontal spacing changed. Stored Coordinate data takes precedence over
fallback placement and was not modified.

The Lighthouse Restoration EN/JA samples contain stored Coordinate data, so
their visible Entity positions do not exercise this fallback grid. Titanic and
the requested corner/edge sample were not present in this repository and could
not be classified from local sources. Blank-created Entities also do not use
the fallback grid: direct creation gives them temporary viewport-centered
positions, and subsequent user movement is held in temporary application
state.

Consequently, the principal manual comparison targets did not provide adequate
observable coverage for the anisotropic fallback-spacing hypothesis. No clear
visual improvement was established.

The temporary `360 x 180` spacing was not adopted. The fallback baseline was
restored, and no Coordinate or canonical sample was changed. The anisotropic
and viewport-aware layout hypotheses remain open for a future experiment with
an intentional Coordinate-free automatic-layout demonstration Dataset.

## Future observations

A useful future sample would explicitly contain no stored graph Coordinate
positions, making automatic Derived placement intentional and repeatable while
leaving canonical interoperability samples unchanged.

Separately, manual observation suggests Relation labels may also need an
independent recovery experiment. A Relation label can begin near its preferred
edge midpoint, move along the edge or away along the edge normal under
collision, and remain displaced after the collision disappears. Along-edge
midpoint recovery and normal-distance-to-edge recovery should remain separate
questions. Relation-label recovery was not implemented or tested here.
