# LiaisonScape Initial Layout Global Placement 3 Production-native Structural Diversity / Frontier Reduction 1

Date: 2026-09-13

## Decision

```text
useful structural signals                = crossings, cheap geometry, separation, edge-length, extent/aspect
frontier portfolio                       = machine-promising at K=12 on canonical cells
G3 candidate retention                   = 5/6 canonical cells at K=12; 0/1 dense cell
selected-output equivalence              = 5/6 canonical cells; Titanic JA drifts
production-native provider               = NOT ESTABLISHED
checkpoint disposition                    = RETUNE frontier-12 for density; no Product integration
new candidate human review               = READY FOR ACTUAL PRODUCT HUMAN REVIEW (canonical scope only)
Product default / adoption               = HOLD; UNCHANGED
Initial Layout Release blocker           = OPEN
```

The small direct and one/two-arm providers were not quality-safe because they
discarded too much structural diversity. This checkpoint retained a larger,
cheaply selected portfolio before authoritative presentation. The result is a
meaningful reduction on the canonical set, but dense scaling remains unsafe;
there is not yet a production-native provider suitable for integration.

## Formulation

The diagnostic-only `E2R_GLOBAL_PLACEMENT_ABLATION` seam now supports
`frontier-4`, `frontier-8`, and `frontier-12`. It builds the existing circular
and cheap-grid structural candidate pool without calling the full Product
presentation evaluator. Each candidate is described by structural crossing
count, cheap geometry score, minimum and mean Node separation, median and
maximum Edge length, extent width/height, and aspect. A conservative Pareto
frontier removes candidates dominated on crossings, cheap score, separation,
and maximum Edge length. A normalized farthest-point pass then selects a
bounded representative portfolio, preserving structural diversity rather
than taking cheap-score top-K.

The selected representatives are transformed with the existing
structural-centroid viewport-anisotropic transform and only then receive the
existing full Product presentation evaluation. Routing, Relation-label,
Node-label, feedback, viewport, and hard metrics remain authoritative in that
evaluation. Stage 1 and Stage 2 are bypassed only inside this measurement
arm; Product startup and default behavior are untouched.

## Matched canonical results

The matched reference used Global Placement 3 with `x=.88`, `y=1.12`, Stage 2
bypassed, `round-once` finalization, and the same candidate source. Fresh
reference runs took 46 full evaluations for Lighthouse/Titanic and 62 for
Apollo. The frontier candidate took 5, 9, or 13 calls for K=4, 8, or 12
respectively, including its round-once evaluation.

| Portfolio | Full calls | Canonical G3-source retention | Canonical selected-output match | Canonical runtime |
| --- | ---: | ---: | ---: | ---: |
| Frontier-4 | 5 | 0/6 | 0/6 | 0.25--0.35 s |
| Frontier-8 | 9 | 0/6 | 0/6 | 0.37--0.42 s |
| Frontier-12 | 13 | 5/6 | 5/6 | 0.49--0.54 s |
| G3 reference | 46 / 62 | reference | reference | 1.26--1.37 s |

Retention is based on the G3 pre-transform structural candidate fingerprint;
selected-output match is based on the final position fingerprint. Frontier-4
and Frontier-8 were too small for this representative-selection policy. At
K=12, Lighthouse EN/JA, Titanic EN, and Apollo EN/JA retained the G3 selected
output. Titanic JA selected a different candidate, so the existing G3 human
ACCEPT is not inherited.

With K=12 and `round-once`, all six cells had zero routed crossings, zero
Relation-label route hits, and zero overlap pairs. Titanic JA improved its
graph-space `labelNear20` count from 2 to 0; Apollo JA retained the reference
count of 2. The Titanic JA output change remains a new-candidate difference,
not an equivalence claim.

## Dense scaling result

The 14-Node / 49-Relation `synthetic:k7-7` case exposes the remaining limit:

| Arm | Full calls | Elapsed | G3-source retention | Routed crossings | Label hits | Label near | Overlap |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| G3 reference | 44 | 8.46 s | reference | 129 | 8 | 20 | 0 |
| Frontier-4 | 5 | 2.12 s | 0/1 | 148 | 10 | 20 | 0 |
| Frontier-8 | 9 | 2.79 s | 0/1 | 148 | 10 | 20 | 0 |
| Frontier-12 | 13 | 3.62 s | 0/1 | 143 | 6 | 18 | 0 |

Frontier-12 reduces dense runtime by roughly 57% and improves label-hit and
label-near counts, but it does not retain the G3 structural candidate and has
more routed crossings. The frontier count was 22 in this case, so the
portfolio limit itself is visibly binding. This is not evidence for arbitrary
Dataset safety or a release runtime contract.

## Interpretation

The effective signal is not a single cheap score. Structural crossing count
and cheap geometry identify feasible regions, while separation, Edge-length,
extent, and aspect preserve distinct shapes within those regions. The
farthest-point portfolio restores enough diversity at K=12 for five canonical
cells, unlike the direct and K=4/K=8 arms. However, the locale-independent
structural features cannot distinguish the Titanic EN/JA presentation
preference, and the dense frontier expands beyond the tested bounded limit.

The result is therefore `RETUNE`, not `CONTINUE` to Product integration:
retain Frontier-12 as a research candidate and investigate a density-aware
portfolio bound or a more faithful structural topology signature. Do not
simply reduce K again. The canonical K=12 arm is machine-promising and may
proceed to a new Actual Product human review; that review must include the
changed Titanic JA output and does not close adoption or release.

No change was made to Product default/adoption, canonical samples, stored or
mixed coordinate authority, round-once semantics, persistence, dirty-state,
Save Coordinates, routing, Relation-label, Node-label, Self-loop, connector,
glyph, or CSS authority. No production Worker architecture was added. No
push, tag, release, deploy, or publication was performed.

## Validation

- Targeted locality/presentation test file: 16/16 PASS.
- LiaisonScape full test: 383/383 PASS; lint, production build, and
  `git diff --check`: PASS.
- E2R-SPEC `npm run validate` and `git diff --check`: PASS.
