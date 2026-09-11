# LiaisonScape Initial-Layout Accelerated Post Visual Acceptance 1

Date: 2026-09-11

Status: ACCEPTABLE FOR FURTHER RESEARCH; RELEASE CANDIDATE NOT ESTABLISHED

## Comparison boundary

This checkpoint compares three coordinate arms through the same Actual Product
renderer:

1. `current` Product placement from the coordinate-less canonical Dataset.
2. Full `post-structural-relaxation-v1` diagnostic materialization.
3. `post-structural-relaxation-finalist-limit-2-v1`, generated from the same
   Post search with `E2R_PRESENTATION_FINALIST_LIMIT=2`.

The comparison used the canonical Lighthouse and Titanic Dataset payloads in
EN and JA. The existing `geometry-inspection1` seam clones the Dataset in
memory, replaces only coordinate values, and then renders it through the
ordinary `App` graph, routing, Relation-label, viewport, selection, and
interaction stages. No Dataset is saved and no Product authority is replaced.

The seam initially referenced an obsolete fixture server on port 4180. That
was corrected to use the existing dev-only canonical acceptance-fixture
endpoint on the active Product dev server. This was fixture plumbing only; it
does not copy or alter canonical fixture content.

## Human visual observations

### Lighthouse EN

| Arm | Observation |
| --- | --- |
| current | Usable but visibly compact: the central relation cluster creates closer Edge/label interactions and less even spacing. Fit was approximately 79% in the observed cell. |
| full Post | More even spatial distribution and clearer long relation corridors. Labels remained readable. Fit was approximately 66%. |
| accelerated limit=2 | Broad, stable arrangement with readable Node and Relation labels. It was slightly more stretched than full Post and fit was approximately 61%, but no new crossing, unreadable label, or isolated-node failure was observed. |

The machine selected score was about 5.3% worse than the limit-8 run. Human
inspection did not identify a corresponding accelerated-only visual failure;
the visible difference was the extra spread/lower fit. This is a counter-signal
and remains a reason for additional review, not evidence of equivalence.

### Lighthouse JA

| Arm | Observation |
| --- | --- |
| current | Japanese labels were readable, but the denser central arrangement made several route/label relationships harder to scan. |
| full Post | More separated graph structure with readable Japanese labels and the same downstream self-loop presentation. |
| accelerated limit=2 | Natural, readable Japanese layout with no candidate-only overlap, clipping, or crossing observed. Its spatial direction was close to full Post, with a small fit variation. |

The accelerated arm retained the human-observable direction over current. The
machine score was unchanged from the limit-8 run, but the judgment remains
human rather than metric-only.

### Titanic EN

| Arm | Observation |
| --- | --- |
| current | Strong central hub crowding: many Edges and Relation labels converge around RMS Titanic, reducing scanability and spacing. |
| full Post | Wider, more legible radial organization with better separation of the surrounding entities. Existing long-label/edge presentation behavior remains downstream. |
| accelerated limit=2 | Visually matched the full Post materialization in this cell: the same wide organization, readable labels, and no additional crowding or clipping was observed. |

The accelerated candidate clearly retained the Post direction over current. The
known Titanic presentation behavior is not treated as an Initial Layout
failure.

### Titanic JA

| Arm | Observation |
| --- | --- |
| current | Japanese labels remained readable, but the central hub was more compact and several relations were harder to follow. |
| full Post | More distributed arrangement and improved scanability around the central Titanic node. |
| accelerated limit=2 | Distributed, stable arrangement with readable Japanese labels and no accelerated-only visual defect observed. It retained the Post direction, although its exact spatial arrangement was not identical to full Post. |

## Presentation responsibility and interaction

Routing, Relation-label placement, self-loop geometry, connector behavior, and
text rendering were observed through the common Product pipeline. Self-loop
presentation on Lighthouse and the known edge/label behavior on Titanic were
shared downstream behavior or existing presentation-track behavior; they were
not attributed to the accelerated Initial Layout arm.

No accelerated-only crossing, Node-label clipping, Relation-label illegibility,
excessive spread that made the graph unusable, or viewport failure was observed
in the four reviewed cells. The existing seam keeps Save Coordinates disabled
for the in-memory diagnostic clone, confirming that the comparison does not
create persistence work. Selection and normal canvas presentation use the same
App surface; prior Product interaction evidence remains applicable to the
unchanged renderer, but this checkpoint does not claim a new exhaustive drag
acceptance for every cell.

Locale differences changed text geometry and fit, as expected. They did not
produce a new accelerated-only failure. The exact relation-label and route
quality contribution remains downstream and does not become Initial Layout
authority merely because it is used by the Post evaluator.

## Machine evidence relationship

The previously measured limit-8 to limit-2 runtime reduction remains the
acceleration evidence:

| Fixture / locale | Limit 8 wall time | Limit 2 wall time | Limit 2 full presentation evaluations | Machine result |
| --- | ---: | ---: | ---: | --- |
| Apollo EN | ~8.8 s | ~6.2 s | 310 vs 453 | Selected score unchanged |
| Apollo JA | ~8.5 s | ~5.9 s | 294 vs 436 | Selected score unchanged |
| Lighthouse EN | ~13.8 s | ~8.4 s | 290 vs 467 | Score worsened ~5.3% |
| Lighthouse JA | ~10.4 s | ~7.0 s | 296 vs 439 | Selected score unchanged |
| Titanic EN | ~13.6 s | ~9.7 s | 353 vs 494 | Selected reported metrics unchanged |

The visual review shows that the Lighthouse EN score change is not a clear
human-observed regression in this sample, but it is also not visually
irrelevant: the accelerated graph is somewhat more spread and fits at a lower
scale. Therefore machine and human evidence agree on a trade-off, not on
formal equivalence.

## Decision

```text
accelerated Post visual quality       = ACCEPTABLE FOR RESEARCH / NOT RELEASE-READY
full Post visual direction retained   = YES FOR REVIEWED CELLS; EXACT FIDELITY UNPROVEN
limit=2 research direction            = CONTINUE ACCELERATION WITH HUMAN GATE
accelerated-only visual regression    = NOT OBSERVED
Initial Layout Release blocker        = STILL BLOCKED
Product default adoption              = HOLD
Product default behavior              = UNCHANGED
```

The result supports continuing staged/finalist pruning research. It does not
justify connecting limit=2 to Product default, treating it as Post-equivalent,
or declaring the current 6–10 second runtime acceptable for release. The next
bounded hypothesis should preserve the limit-2 admission shape while reducing
the Lighthouse EN fit/score trade-off, for example by adding a cheap
presentation-independent finalist safety guard or retaining a small adaptive
finalist set only when the cheap stage detects dispersion risk. Any such
change requires a new machine profile and the same current/full/accelerated
human comparison.

The earlier proposed public-sample feasibility target of roughly 2 seconds
remains a planning target rather than a pass criterion. Limit=2 is still far
above it, so runtime remains a Release blocker even though visual acceptance
for further research is positive.

## Preserved boundaries

- Product default and normal initial placement are unchanged.
- Full Post and limit=2 remain diagnostic materializations only.
- Coarse remains parked and is not restored as the quality authority.
- Stored/mixed/coordinate-less authority, Derived ownership, dirty-state, Save
  Coordinates, same-payload reopen, and fallback semantics are unchanged.
- Routing, Relation-label, Self-loop, connector, and CSS/glyph authority remain
  downstream Product responsibilities.
- Canonical fixtures, historical Fresh evidence, Fresh12 canonical Human
  Review, and governed lineage are unchanged.
- No known presentation defect was fixed, and no push, tag, release, deploy,
  or publication was performed.

