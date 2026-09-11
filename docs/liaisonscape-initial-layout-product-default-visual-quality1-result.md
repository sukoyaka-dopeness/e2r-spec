# LiaisonScape Initial-Layout Product-Default Visual Quality 1

Date: 2026-09-11

Status: VISUAL BENEFIT MIXED / INSUFFICIENT; PRODUCT ADOPTION HOLD

## Scope and method

This checkpoint compares the existing Product placement with the opt-in
`coarse-objective-prototype-v1` on the Actual Product renderer. The same
canonical fixture access path, Dataset parse/accept path, routing/label pass,
viewport fit, and graph-stable surface were used. No default behavior or
fixture content was changed.

The comparison is human visual evidence. Timing diagnostics and provider
metadata were used to identify the arm and confirm the path, not as a
substitute for visual judgment.

## Observed comparison cells

| Fixture / locale | Current Product | Coarse opt-in | Human result |
| --- | --- | --- | --- |
| Titanic EN | graph stable, fitted, readable labels; dense central relation area | graph stable, fitted, readable labels; similar dense central relation area | mixed; no clear consistent coarse advantage or regression |
| Titanic JA | graph stable, fitted, readable Japanese labels | graph stable, fitted, readable Japanese labels | mixed; locale-specific geometry remained usable, no coarse-only defect |
| Lighthouse EN | graph stable, fitted, readable labels; some crowded relation corridors | graph stable, fitted, readable labels; similar presentation trade-offs | mixed; no clear consistent coarse advantage or regression |
| Lighthouse JA | prior Actual Product acceptance confirmed usable open/fit/interaction | prior Actual Product acceptance confirmed usable open/fit/interaction | no new coarse-only defect observed |
| Apollo EN/JA | current placement semantics | unsafe coarse candidate -> exact current Product whole-result fallback | no coarse visual benefit is claimed; non-regression only |

The Titanic EN/JA and Lighthouse EN comparisons directly observed the graph
surface after loading and fit. Titanic JA and the previous Lighthouse JA
acceptance evidence confirmed the same interaction surface and locale behavior.
Apollo's current whole-result fallback is intentionally not counted as coarse
visual improvement.

## Visual findings

- No new defect was found that could be attributed specifically to coarse
  initial placement.
- Coarse did not demonstrate a consistent, human-observable improvement over
  the current Product placement across the directly compared cells.
- Node body spacing, Node-label readability, Relation readability, viewport
  usability, and disconnected visibility remained acceptable in the observed
  cells.
- Crowded parallel relations, long Relation-label presentation, Self-loop
  angle tendency, and connector/label rendering remain downstream presentation
  tracks. They are not counted as coarse failure or coarse benefit without a
  controlled routing comparison.
- Machine objective scores do not override this mixed human result.

## Decision impact

```text
coarse visual superiority = INSUFFICIENT FOR ADOPTION
coarse visual benefit     = MIXED / INSUFFICIENT
coarse visual regression  = NOT OBSERVED
Product default adoption  = HOLD
Product default behavior  = UNCHANGED
Post equivalence          = NOT CLAIMED
```

The explicit adoption decision remains HOLD. The bounded provider stays
available as an opt-in research/evaluation seam. A future adoption proposal
would need a stronger, reproducible human-quality basis against the current
Product placement, with presentation attribution kept separate.

Historical Fresh evidence, Fresh12 canonical Human Review, public Dataset
meaning, and governed lineage are unchanged. No push, release, deploy, or
publication was performed.
