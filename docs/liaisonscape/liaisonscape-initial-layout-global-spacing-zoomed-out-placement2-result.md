# LiaisonScape Initial-Layout Global Spacing / Zoomed-Out Placement 2

Date: 2026-09-12

Status: HYPOTHESIS MEASUREMENT CORRECTED; UNIFORM EXPANSION PIVOT; RELEASE BLOCKER REMAINS

## Audit question

Global Spacing 1 asked whether spreading Node centers reduces the relative
screen-space crowding of Nodes, labels, and routes after the Product viewport
fit. The first diagnostic did not measure that question completely. Its
`labelNear20` and label-corridor values were graph-space distances, while
`fitScale` was reported separately. A second issue was also found: the
presentation-repair eligibility predicate omitted `crossings`, although the
post-relaxation predicate included it. That could make the two Stage-2 paths
select candidates under different hard-feasibility rules.

This checkpoint keeps the prior Global Spacing 1 record intact and audits the
seam with both issues corrected.

## Product semantic audit

The Actual Product opens the graph, derives initial positions, calls
`fitGraphView(points, 800, 500)`, and renders the graph inside one SVG group
with `centeredViewportTransform(scale, pan, 800, 500)`. Node bodies, Node-label
rectangles/text, routed Edges, Relation-label rectangles/text, and connectors
are descendants of that transformed group. The existing viewport fit therefore
scales their graph-space geometry together. CSS font sizes in that SVG group
scale with the group as well.

The corrected diagnostic adds an opt-in, measurement-only `screenSpace` block:

```text
screen value = graph value * the same fitScale used by Product
screen labelNear20 = route-to-Node-label distance < 20 screen pixels
```

It does not change score, candidate admission, routing, label placement, or
selection authority. The repair eligibility check now requires zero crossings
as well as the pre-existing overlap and label conditions, matching post
relaxation. This is a diagnostic correction, not a Product behavior change.

## Corrected matched comparison

All six canonical coordinate-less examples were run with the retained ECR3
settings (`finalist-limit=2`, `omit-fine`, exact geometry reuse, and
`adaptive-cheap-ranking`). The Global arm used the same pipeline after a
centered isotropic 1.25x transform. Counts below are fresh corrected runs;
small wall-time differences are host-sensitive.

| Cell | ECR3 full / Stage 2 / repair / relax | Global 1.25x full / Stage 2 / repair / relax | E2E ms ECR3 to global | Digest ECR3 to global | Global hard defects |
| --- | ---: | ---: | ---: | --- | --- |
| Lighthouse EN | 198 / 154 / 44 / 110 | 184 / 140 / 44 / 96 | 3,606 to 3,153 | `dd80b934` to `8959ec8d` | none |
| Lighthouse JA | 196 / 152 / 44 / 108 | 157 / 113 / 44 / 69 | 3,704 to 2,673 | `b66c8fe8` to `99074608` | none |
| Titanic EN | 190 / 146 / 44 / 102 | 175 / 131 / 44 / 87 | 3,343 to 2,797 | `766ce8b5` to `9d46100b` | none |
| Titanic JA | 190 / 146 / 44 / 102 | 186 / 142 / 44 / 98 | 3,018 to 2,914 | `933102bd` to `cdf67f59` | none |
| Apollo EN | 163 / 103 / 60 / 43 | 171 / 111 / 60 / 51 | 1,886 to 1,908 | `e499f446` to `de5502ec` | none |
| Apollo JA | 180 / 120 / 60 / 60 | 181 / 121 / 60 / 61 | 2,043 to 2,027 | `a905475a` to `d532b95c` | none |

The corrected uniform arm changed the selected presentation digest in all six
cells. It reduced relaxation volume in four cells, increased it in Apollo EN
and Apollo JA, and left the fixed repair cost unchanged. Thus the volume
change is not a stable Stage-2 lever. The corrected crossing predicate removed
the previously reported Lighthouse EN crossing from this run, but it did not
restore output identity or establish visual quality retention.

## Screen-space result

The screen audit exposed why graph-space-only evidence was incomplete. For
ECR3 versus the corrected 1.25x full arm:

| Cell | Node minimum separation px | Label-near-20 route count | Label-corridor clearance px | Route max px |
| --- | ---: | ---: | ---: | ---: |
| Lighthouse EN | 79.1 to 87.0 | 6 to 7 | 13.9 to 7.5 | 335.0 to 204.3 |
| Lighthouse JA | 86.7 to 97.9 | 5 to 7 | 13.5 to 12.9 | 341.9 to 211.2 |
| Titanic EN | 61.6 to 82.5 | 5 to 3 | 12.5 to 14.9 | 317.9 to 282.5 |
| Titanic JA | 56.8 to 56.8 | 6 to 6 | 14.6 to 13.8 | 232.8 to 276.4 |
| Apollo EN | 100.8 to 101.2 | 2 to 3 | 21.1 to 16.8 | 214.2 to 274.1 |
| Apollo JA | 99.9 to 106.4 | 5 to 5 | 12.4 to 15.8 | 223.0 to 267.2 |

The result is mixed rather than a uniform zoom-out benefit. Titanic EN gains
Node separation and fewer screen-near routes, while Titanic JA is almost
entirely fit-cancelled. Lighthouse EN has a larger Node separation but more
screen-near routes and a smaller label-corridor clearance. Apollo changes are
small or adverse in route and corridor measures. In particular, the prior
graph-space `labelNear20=0` for ECR3 Lighthouse EN becomes six routes under the
equivalent 20-pixel screen-space measurement, demonstrating that the old
metric was not a faithful screen-space proxy.

The Stage-2-off 1.25x probe removed nearly all authoritative work: full
evaluations were 45 (Lighthouse/Titanic) or 61 (Apollo), Stage-2 had one
evaluation, and sequential E2E was 0.88-1.05 seconds. It also produced a
candidate-only crossing and route-label hit in Apollo EN, a graph-space
`labelNear20` defect in Lighthouse EN and Apollo EN, and changed every digest.
That apparent speed is the cost of omitting the presentation authority, not a
release-safe acceleration.

## Decision

```text
original hypothesis physically valid        = YES, but Global Spacing 1 measured it incompletely
screen-space audit correction               = VALIDATED against Product fit/render semantics
uniform 1.25x visual effect                 = MIXED and fixture/locale dependent
Stage-2 volume leverage                     = INCONSISTENT; repair cost unchanged
selected-output retention                   = NO; all six digests changed
candidate-only regression                   = no corrected hard crossing in the full arm, but screen and graph metrics remain mixed
human visual review                          = UNCONFIRMED; no new arm was accepted for Actual Product review
disposition                                  = PIVOT from centered uniform expansion
```

Uniform expansion should not be continued by scale tuning alone. A future
study could test a genuinely viewport-aware global formulation that models
label footprint and route corridors jointly, but that is not implemented or
accepted here. Any such candidate would require new Actual Product human
review; ECR3 human ACCEPT is not inherited.

## Boundaries and validation

- Product default/adoption, canonical samples, coordinate canonicalization,
  persistence, and stored/mixed/coordinate-less authority were unchanged.
- Routing, Relation-label, Node-label, Self-loop, connector, glyph, and CSS
  authority remain downstream Product responsibilities.
- The new screen-space values are observational only; the existing graph-space
  score and full presentation evaluator remain authoritative.
- Historical Global Spacing 1, Fresh evidence, Fresh12 canonical Human Review,
  and governed lineage were not rewritten.
- No push, tag, release, deploy, or publication was performed.

Validation:

- LiaisonScape suite: 370/370 PASS;
- lint: PASS;
- production build: PASS;
- E2R-SPEC `npm run validate`: PASS;
- diff check: PASS.

Decision: `PIVOT`. The Initial Layout Release blocker remains active and
Product default behavior remains unchanged.
