# LiaisonScape Initial-Layout Global Spacing / Zoomed-Out Placement 1

Date: 2026-09-12

Status: UNIFORM GLOBAL EXPANSION HAS NO STABLE QUALITY/RUNTIME LEVERAGE; PIVOT; RELEASE BLOCKER REMAINS

## Scope and formulation

This checkpoint tests a different principle from the retired Stage-2 local
reduction work: expand structural Node-center coordinates globally, then let
the existing Product viewport fit and presentation evaluator determine whether
the visible footprint becomes less crowded.

The first formulation was a centered isotropic transform:

```text
p' = centroid(positions) + scale * (p - centroid(positions))
```

The diagnostic seam supports `E2R_GLOBAL_SPACING_SCALE` and an explicit
`E2R_GLOBAL_SPACING_STAGE2=off` arm. It is not connected to Product startup or
default authority. The ECR3 reference remained:

```text
E2R_PRESENTATION_FINALIST_LIMIT=2
E2R_RELAXATION_STEP_MODE=omit-fine
E2R_PRESENTATION_GEOMETRY_CACHE=1
E2R_PRESENTATION_EXACT_CANDIDATE_REUSE=1
E2R_RELAXATION_PRIORITIZATION=adaptive-cheap-ranking
E2R_RELAXATION_ADAPTIVE_MARGIN=0.10
```

Global spacing was applied to the structural finalists before the existing
presentation repair and relaxation. The `only` arm used the scaled structural
state without either Stage-2 repair or relaxation. This preserves the actual
routing, label, viewport, and hard-feasibility authorities; it does not treat
coordinate extent as a substitute for Product presentation.

## Matched ECR3 comparison

The baseline and the 1.25x global-spacing arm were run sequentially under the
same host conditions. Wall time is host-load sensitive, so counts and output
identity are stronger evidence than small elapsed-time differences.

| Cell | ECR3 full / Stage 2 / relax | Global 1.25x + Stage 2 full / Stage 2 / relax | E2E ms ECR3 → global | Selected digest ECR3 → global | Hard defects global |
| --- | ---: | ---: | ---: | --- | --- |
| Lighthouse EN | 198 / 154 / 111 | 196 / 152 / 103 | 3,610 → 3,521 | `dd80b934` → `daf6282b` | crossing 1 |
| Lighthouse JA | 196 / 152 / 107 | 157 / 113 / 66 | 3,542 → 2,928 | `b66c8fe8` → `99074608` | none |
| Titanic EN | 190 / 146 / 103 | 175 / 131 / 83 | 3,399 → 3,196 | `766ce8b5` → `9d46100b` | none |
| Titanic JA | 190 / 146 / 104 | 186 / 142 / 94 | 3,067 → 3,130 | `933102bd` → `cdf67f59` | none |
| Apollo EN | 163 / 103 / 58 | 171 / 111 / 66 | 1,968 → 1,930 | `e499f446` → `de5502ec` | none |
| Apollo JA | 180 / 120 / 76 | 181 / 121 / 76 | 2,601 → 2,160 | `a905475a` → `d532b95c` | none |

The global arm changed the selected digest in all six cells. It reduced
relaxation volume in Lighthouse JA, Titanic EN, and Titanic JA, but increased
it in Apollo EN and did not provide a stable reduction across locales. Repair
remained 50 evaluations in every Stage-2 arm, so global expansion does not
remove the fixed repair cost.

The 1.5x probe was not a rescue: Lighthouse EN and JA selected a crossing
defect, while the remaining cells still changed digest and showed no uniform
evaluation reduction. At 2x the same instability remained. No scale produced
ECR3-equivalent selected output.

## Viewport-fit and visual footprint evidence

Viewport fitting partially offsets the coordinate expansion. The following is
the screen-space minimum Node separation approximation (`minimumSeparation ×
fitScale`) for ECR3 versus the 1.25x full arm:

| Cell | ECR3 | Global 1.25x + Stage 2 | Observation |
| --- | ---: | ---: | --- |
| Lighthouse EN | 79.1 | 101.3 | larger footprint, but crossing defect |
| Lighthouse JA | 86.7 | 97.9 | larger, selected presentation changed |
| Titanic EN | 61.6 | 82.5 | larger, route max 686.0 → 477.1 |
| Titanic JA | 56.8 | 56.8 | fit largely cancels expansion |
| Apollo EN | 100.8 | 101.2 | effectively unchanged |
| Apollo JA | 99.9 | 106.4 | modest increase, selected presentation changed |

This is not a consistent zoomed-out visual benefit. For example, the 1.25x
full arm changed route median/max and extent by cell, and Lighthouse EN
introduced a candidate-only crossing. Machine hard metrics do not establish
label readability or human preference; no Actual Product human visual review
was started because the candidate already failed the bounded machine gate in
one representative cell and changed output in all six.

The Stage-2-off arm demonstrates the runtime ceiling of removing the expensive
work rather than optimizing it:

```text
full evaluations       = 45–61, versus ECR3 163–198
Stage-2 full calls     = 1, versus ECR3 103–154
sequential E2E sample  = about 0.93–1.15 seconds
```

That arm is not quality-safe. At 1.25x it produced `labelNear20` in
Lighthouse EN, crossing + route-label-hit + `labelNear20` in Apollo EN, and
changed presentation digest in every cell. At 1.5x it produced a
`labelNear20` in Titanic JA and crossings in both Apollo cells. The apparent
runtime gain is therefore the cost of omitting the presentation authority, not
a Release-quality acceleration.

## Decision

```text
spacing formulation              = centered isotropic uniform expansion
fit-after-expansion effect       = partial and locale/fixture dependent
Stage-2 volume leverage          = inconsistent; repair cost unchanged
quality retention                = not established; all selected digests changed
candidate-only regression        = observed (Lighthouse EN 1.25x; more at 1.5x)
human review                      = not required; machine gate not promising
disposition                      = PIVOT
```

Uniform global expansion should not be continued as a Release candidate by
factor tuning alone. A future study may consider a genuinely different
global-spacing or zoomed-out placement formulation that accounts for viewport
fit, label footprint, and route corridors jointly, but that is not proposed or
implemented in this checkpoint. Product default adoption remains out of scope.

## Boundaries and validation

- Product default/adoption, canonical samples, accepted final-coordinate
  canonicalization, persistence, and stored/mixed/coordinate-less authority
  were not changed.
- Routing, Relation-label, Node-label, Self-loop, connector, glyph, and CSS
  authority remain downstream presentation responsibilities.
- ECR3 human ACCEPT was not inherited by the global-spacing arms.
- Historical Fresh evidence, Fresh12 canonical Human Review, and governed
  lineage were not changed.
- No push, tag, release, deploy, or publication was performed.

Validation:

- global-spacing diagnostic seam test: PASS;
- LiaisonScape suite: 369/369 PASS;
- lint: PASS;
- production build: PASS;
- E2R-SPEC `npm run validate`: PASS;
- diff check: PASS.

Decision: `PIVOT`. The Initial Layout Release blocker remains active and
Product default behavior remains unchanged.
