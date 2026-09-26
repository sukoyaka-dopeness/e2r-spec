# LiaisonScape Initial Layout Global Placement 3 Production Simplification / Quality-Contributor Ablation 1

Date: 2026-09-13

## Decision

```text
quality contributor finding              = structural candidate search plus authoritative selection
transform-only simplification            = NOT QUALITY-SAFE
bounded one/two-arm simplification       = NO SIX-CELL QUALITY RETENTION
production-native candidate              = NOT ESTABLISHED
checkpoint disposition                    = PIVOT
Product default / adoption               = HOLD; UNCHANGED
Initial Layout Release blocker           = OPEN
new candidate human review               = NOT READY; machine hard defects remain
```

Global Placement 3 quality is not explained by the structural-centroid
viewport-anisotropic transform alone. The transform changes fit, separation,
and route proportions, but the matched measurements show that the structural
candidate search and the full Product presentation evaluation/selection are
the parts that remove crossings and label conflicts. A small deterministic
provider can be much faster, but no tested small arm retained that quality
across the canonical set and the dense case.

## Ablation arms

The diagnostic-only seam added a `E2R_GLOBAL_PLACEMENT_ABLATION` mode to the
existing generic search tool. It does not change App startup, Product default
authority, Dataset persistence, or the acceptance endpoint. Every candidate
that is selected by an ablation arm still receives the existing full Product
presentation evaluation, including routing, Relation-label, Node-label,
feedback, and viewport metrics. The bounded arms bypass Stage 1 and Stage 2
only for this measurement.

The tested arms were:

| Arm | Candidate formulation | Full presentation calls | Purpose |
| --- | --- | ---: | --- |
| Direct current | Existing Product `settleInitialPlacement` seed | 1 | Transform/search ablation baseline |
| Direct anisotropic | Current seed plus `x=.88`, `y=1.12` centroid transform | 1 | Isolate the accepted G3 transform |
| Direct uniform | Current seed plus uniform `1.12` transform | 1 | Compare transform shape without anisotropy |
| Direct two-arm | Current and current-anisotropic | 2 | Small authoritative choice set |
| Bounded grid one/two | Existing cheap structural grid, anisotropic transform, one or two finalists | 1 / 2 | Test whether a small structural screen is sufficient |

The `round-once` audit, when enabled, adds the expected final canonicalization
evaluation. No candidate output was treated as equivalent to G3 merely because
it used the same transform.

## Matched canonical evidence

The following fresh runs used the six canonical example payloads, Stage 2
bypassed for the ablation arms, and no final canonicalization for the compact
count comparison. `cross` is routed Edge crossing count, `hits` is
Relation-label route hits, `near` is the graph-space hard label-near count,
and `overlap` is the hard overlap count. Lower is better; G3 had zero for all
of these hard fields in the retained diagnostic evidence.

| Cell | G3 full / elapsed | Direct anis full / elapsed | Direct anis hard metrics | Grid-one full / elapsed | Grid-two full / elapsed |
| --- | ---: | ---: | --- | ---: | ---: |
| Lighthouse EN | 46 / 1.37 s | 1 / 0.13 s | cross 7, hits 2, near 4, overlap 1 | 1 / 0.09 s; cross 4, hits 0, near 0 | 2 / 0.13 s; cross 2, hits 2, near 6 |
| Lighthouse JA | 46 / 1.30 s | 1 / 0.15 s | cross 7, hits 1, near 4, overlap 1 | 1 / 0.09 s; cross 4, hits 3, near 5 | 2 / 0.11 s; cross 0, hits 3, near 5 |
| Titanic EN | 46 / 1.31 s | 1 / 0.13 s | cross 4, hits 1, near 4, overlap 0 | 1 / 0.09 s; cross 1, hits 0, near 2 | 2 / 0.11 s; cross 1, hits 0, near 2 |
| Titanic JA | 46 / 1.34 s | 1 / 0.13 s | cross 4, hits 1, near 2, overlap 0 | 1 / 0.09 s; cross 1, hits 2, near 3 | 2 / 0.11 s; cross 1, hits 0, near 1 |
| Apollo EN | 62 / 1.25 s | 1 / 0.12 s | cross 6, hits 2, near 3, overlap 1 | 1 / 0.07 s; cross 7, hits 2, near 2 | 2 / 0.09 s; cross 0, hits 0, near 0 |
| Apollo JA | 62 / 1.01 s | 1 / 0.12 s | cross 6, hits 0, near 0, overlap 1 | 1 / 0.07 s; cross 4, hits 1, near 3 | 2 / 0.10 s; cross 0, hits 0, near 2 |

The G3 elapsed values are recent diagnostic reference runs and are host
sensitive. The compact arms reduce full presentation calls by approximately
96.8--98.4% versus the 46/62-call G3 arm, but the direct arms introduce hard
crossing, label, or overlap defects in every cell. Grid-one improves the
Titanic crossing count but remains defective on all six cells. Grid-two is
machine-promising on Apollo and partially improves Titanic, yet still has
label or crossing defects on Lighthouse and Titanic and is not a six-cell
quality-safe candidate.

The selected positions and presentation digests of the compact arms are not
G3-equivalent. The two-arm authority can select either current or anisotropic
positions, but neither choice reproduces G3's presentation-clean output. The
grid arm's cheap structural screen also found four zero-straight-crossing
finalists on each canonical fixture, while the dense case found none; that is
not a reliable production quality gate.

## Dense scaling evidence

The existing G3 synthetic `k7-7` reference has 14 Nodes / 49 Relations, about
7.22 seconds elapsed, and 44 full presentation evaluations. Fresh compact
measurements were:

| Arm | Full calls | Elapsed | Routed crossings | Label hits | Label near | Overlap |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Direct anisotropic | 1 | 0.28 s | 183 | 14 | 23 | 4 |
| Grid one | 1 | 0.35 s | 148 | 10 | 20 | 0 |
| Grid two | 2 | 0.50 s | 148 | 10 | 20 | 0 |

The dense result demonstrates the trade-off directly: the compact arms are
fast, but their single/few-candidate output is far from presentation-safe at
this density. Grid-two spends an extra authoritative call without changing
the selected dense result. The reduction is therefore evaluation-volume
reduction purchased by quality drift, not a production-ready acceleration.

## Quality-contributor interpretation

1. The global transform is a real contributor to screen-space shape and fit;
   it is especially useful for the previously tight Titanic JA geometry. It
   does not, by itself, establish route or label readability.
2. A deterministic current seed, even after the transform, leaves multiple
   routed crossings and label conflicts. This rules out a transform-only
   production provider for the accepted G3 direction.
3. One or two authoritative calls are not enough to recover the structural
   diversity that G3's grid/order search supplies. A cheap structural screen
   is also insufficient: straight-crossing-free finalists can still produce
   routed crossings and Relation-label conflicts, and the dense case has no
   qualifying screen finalist.
4. The full presentation evaluator remains the quality authority. Using its
   metrics after selection does not make these arms quality-safe because the
   bounded arm has already discarded the candidates that G3 would compare.

The evidence does not justify a new Actual Product human review for these
ablation candidates: the hard machine defects are already present and the
candidate outputs differ from the accepted G3 output. A future candidate must
first remove those defects in matched machine evidence, then receive a new
Actual Product visual gate.

## Research direction and boundaries

The appropriate result is `PIVOT` from transform-only and one/two-arm
production simplification. Retain G3 as the diagnostic quality reference and
do not connect the ablation seam to Product startup. The next research step
must find a different production-native structural formulation or a bounded
provider architecture that preserves enough candidate diversity before
authoritative validation; simply reducing the finalist count further is not
supported by this evidence. Stage 1 reduction remains a separate release
blocker and was not claimed solved here.

No change was made to Product default/adoption, canonical samples, stored or
mixed coordinate authority, round-once semantics, persistence, dirty-state,
Save Coordinates, routing, Relation-label, Node-label, Self-loop, connector,
glyph, or CSS authority. No new human acceptance is implied, and no push,
tag, release, deploy, or publication was performed.

## Validation

- Targeted locality/presentation test file: 14/14 PASS.
- Existing LiaisonScape dirty work was preserved; no Product source was changed.
- LiaisonScape `npm test`: 381/381 PASS; lint, production build, and
  `git diff --check`: PASS.
- E2R-SPEC `npm run validate` and `git diff --check`: PASS.
