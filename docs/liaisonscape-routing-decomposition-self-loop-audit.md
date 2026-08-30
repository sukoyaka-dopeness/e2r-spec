# LiaisonScape Routing Decomposition / Self-Loop Audit

- Date: 2026-08-30
- Checkpoint: `E2R-LIAISONSCAPE-ROUTING-DECOMPOSITION-SELF-LOOP-AUDIT1`
- Scope: diagnostic comparison only

## Result

`SELF-LOOP ROUTING FIX NOT YET JUSTIFIED - INSUFFICIENT CAUSAL EVIDENCE`

The Lighthouse sample has two self-Relations on `beacon`:
`beacon-self-monitor` (`self-monitors`) and `beacon-self-calibrate`
(`self-calibrates`). The current source routes self-loop/fixed geometry before
ordinary automatic edges, adds accepted paths to `occupiedPaths`, and then
routes ordinary edges. This creates a plausible order asymmetry, but source
inspection alone does not prove it causes the reported visual issue.

## Decomposition findings

- Self-loop geometry uses orientation, parallel index, radius, node obstacles,
  and candidate search; automatic loops use the preferred orientation unless
  obstacle scoring selects another candidate.
- Ordinary routes use endpoint positions, parallel slots, node/label obstacles,
  occupied paths, visible offset solving, and manual overrides.
- Self-loop and ordinary route ownership are distinct. Manual loop overrides
  remain user-owned and must not be reinterpreted as automatic defects.
- Parallel curve side is a visual slot decision separate from semantic direction.
- Relation labels are derived after routes and may recover along or normal to
  the route; label detachment cannot alone prove a routing-order defect.

## Counterfactual and coverage

Compare current production order with ordinary routes provisionally occupying
paths before self-loop selection, and optionally a provisional geometry pass
before final ordinary routing. Measure self-loop/ordinary intersections,
foreign-node clearance, detour, label viability, loop separation, and ordering
stability on the same stored coordinates.

Focused tests cover angular spreading, multiple loop radii, obstacle response,
parallel/self behavior, manual overrides, and determinism. They do not cover
the exact Lighthouse-scale case where a free self-loop orientation avoids an
ordinary edge while current order does not.

Do not change routing order or self-loop implementation from this audit alone.
If a repeatable avoidable collision is shown, prioritize self-loop
ordinary-path awareness; otherwise classify the issue as another routing,
label, manual Presentation, or acceptable geometry concern.

No runtime, test, sample, schema, Coordinate, Presentation payload, Core,
Extension, Validator, or release operation was changed. NarrativeLine
Display-Order remains not started.
