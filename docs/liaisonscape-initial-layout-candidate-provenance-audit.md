# LiaisonScape Initial-Layout Candidate Provenance Audit

Date: 2026-09-11

Status: PROVENANCE AUDIT COMPLETE; no Product adoption decision

## Purpose and boundary

This record identifies the research candidate with the strongest provenance for
the current Actual Product comparison checkpoint. It reconciles the E2R-SPEC
research record, LiaisonScape Git history, the diagnostic materializer, the
Actual Product inspection seam, and the recorded user observation.

This is a provenance and reproducibility record. It does not select or adopt a
Product initial-placement algorithm, change a Dataset, alter governed Fresh
evidence, or create a new governed Fresh lineage.

## Conclusion

The candidate to prioritize for the current comparison is
`post-structural-relaxation-v1`.

It is not an independent replacement for the Product algorithm. It is a
diagnostic, two-stage candidate whose Stage 1 starting point is
`generic-crossing-search-v1`, followed by a bounded Product-aware local
relaxation. The generic candidate remains the necessary predecessor and should
be retained as the structural comparison arm. The current Product baseline
remains the control.

The later `product-seed-clearance-120` experiment is a useful Apollo-only
contender, but it does not supersede the post-structural candidate for this
provenance audit: it has no equivalent cross-fixture Actual Product inspection
history or stable candidate authority, and its evidence combines Product seed
clearance with a local route experiment.

## Candidate identity and authority chain

| Candidate | Role | Implementation authority | Materialization path | Evidence status |
| --- | --- | --- | --- | --- |
| `generic-crossing-search-v1` | Stage 1 structural predecessor | `tools/generic-crossing-search.mjs`, introduced by `0f73b6fbcabdd684ec7851e216287e118eaa6506` (`chore: add generic crossing search diagnostic`) | `genericCrossingSearchPositions` in `experimental/product-evaluation-seam/geometry-inspection1/main.tsx`; coordinates are injected into an in-memory diagnostic Dataset clone | Apollo Actual Product inspection recorded as readable and spatially coherent; not Product adoption |
| `post-structural-relaxation-v1` | Stage 2 candidate and current provenance winner | `constrainedPostStructuralRelaxation` in `tools/generic-crossing-search.mjs`, introduced by `31336a06a9dc1d9fd121dd7fa2cb3bf149a00a02` (`chore: add post-structural relaxation diagnostic`) | Starts from the selected generic state, applies deterministic bounded local moves, and is exposed as `postStructuralRelaxationPositions` by the same Actual Product inspection seam | Apollo Actual Product user inspection recorded readable, spatially coherent, and more horizontally balanced; Linkscape/Lighthouse machine generalization recorded; no formal acceptance |
| `product-seed-clearance-120` | Later diagnostic contender | Current Product `solveAutoLayout` with `nodeClearance: 120`, exposed by `031456ff6f7d6c04eb292d36a648c2ccabd37071` (`chore: expose coordinate-less layout acceptance surface`) | Recomputed in the in-memory diagnostic clone from a coordinate-less public sample | Apollo-only research evidence; not a replacement identity and not selected |

The two-stage diagnostic was generalized by
`45c7e7b1d7de1f7377cdd494c7831b125dd5f339` (`chore: generalize two-stage
layout diagnostic`). The current coordinate-less public-sample comparison
surface was added by `031456ff6f7d6c04eb292d36a648c2ccabd37071`.

The earlier TA0/TA1/TA2/TA3/FP1 materialization work is a separate research
candidate family. Its isolated materializers and validation establish
materialization evidence, not Actual Product visual acceptance, ranking, or
selection. The FP1-NGP Fresh12 materializer is specifically the source of the
later extreme `~6000 x 6000` baseline and is not the provenance winner.

## Evidence chain

### Stage 1: generic structural search

The generic search used bounded circular and grid-style structural search with
the Apollo relation topology. The eligible generic candidate was recorded with:

- crossings: `0`
- label-route hits / near routes: `0 / 0`
- Node-label overlap / Node overlap: `0 / 0`
- minimum Node separation: `164`
- extent: `670 x 499`
- fit: `0.548`
- route median / maximum: `194.0 / 356.9`

The generic result is a feasible structural candidate, not a Product decision.

### Stage 2: post-structural relaxation

The post pass uses the generic state as its starting point and evaluates
deterministic one-Node moves in eight compass directions with step sizes
`18`, `9`, and `6`, bounded by maximum displacement `48`. It accepts only
changes that preserve the existing Product presentation evaluator's safety
conditions, including crossings, overlap, label-route hits, label overlap, and
near-distance constraints.

For Apollo, the recorded comparison was:

| Metric | Generic | Post-structural |
| --- | ---: | ---: |
| crossings | 0 | 0 |
| label-route hits / near routes | 0 / 0 | 0 / 0 |
| minimum Node separation | 164 | 164 |
| usable-span penalty | 149.4 | 0 |
| extent | 670 x 499 | 622 x 419 |
| fit | 0.548 | 0.637 |
| route median / maximum | 194.0 / 356.9 | 195.7 / 352.9 |

The recorded research conclusion is that the bounded relaxation produced a
changed candidate without safety or overlap regressions and materially reduced
the usable-span penalty. It remains a diagnostic candidate.

### Generalization and Actual Product observation

The same two-stage materialization was recorded for additional fixtures:

- Linkscape: `9` accepted moves; `0` crossings and label-safe; extent
  `375 x 164` to `356 x 146`; route maximum `172` to `139.7`.
- Apollo: `16` accepted moves; `0` crossings and label-safe; extent
  `670 x 499` to `622 x 419`.
- Lighthouse: `14` accepted moves; `0` crossings and label-safe; extent
  `636 x 440` to `633 x 401`; fit `0.611` to `0.662`.

The research record also records an Apollo Actual Product inspection of the
generic and post candidates. Generic was judged readable and spatially
coherent. Post remained readable and used a more horizontal, balanced
footprint. No gross clipping, Node-body overlap, or unreadable-label failure
was observed. This was diagnostic user inspection, not formal Human Review or
acceptance.

## Current comparison surface

The current surface is an Actual Product `src/App.tsx` surface, not a
simplified renderer:

`C:\Users\extra\E2R\e2r-liaison-scape\experimental\product-evaluation-seam\geometry-inspection1\main.tsx`

It intercepts the diagnostic Dataset URL, loads the coordinate-less public
sample, materializes the selected candidate only in an in-memory clone, and
renders the real Product App, CSS, routing, labels, and interaction behavior.
Candidate coordinates are not written to the source Dataset; the Save control
is disabled for this diagnostic surface.

Local comparison server currently used:

`http://127.0.0.1:4178/e2r-liaison-scape/experimental/product-evaluation-seam/geometry-inspection1/?fixture=apollo-public&candidate=current`

`http://127.0.0.1:4178/e2r-liaison-scape/experimental/product-evaluation-seam/geometry-inspection1/?fixture=apollo-public&candidate=generic-crossing-search-v1`

`http://127.0.0.1:4178/e2r-liaison-scape/experimental/product-evaluation-seam/geometry-inspection1/?fixture=apollo-public&candidate=post-structural-relaxation-v1`

`http://127.0.0.1:4178/e2r-liaison-scape/experimental/product-evaluation-seam/geometry-inspection1/?fixture=lighthouse&candidate=current`

`http://127.0.0.1:4178/e2r-liaison-scape/experimental/product-evaluation-seam/geometry-inspection1/?fixture=lighthouse&candidate=generic-crossing-search-v1`

`http://127.0.0.1:4178/e2r-liaison-scape/experimental/product-evaluation-seam/geometry-inspection1/?fixture=lighthouse&candidate=post-structural-relaxation-v1`

The Apollo public sample is served locally from the coordinate-less
E2R-SPEC example through a read-only diagnostic CORS server. Lighthouse is the
coordinate-less public sample in the Hub/Product path. `candidate=current`
therefore exercises current automatic initial placement, while the two
research candidates use only temporary in-memory coordinates.

## Provenance decision

For the next user comparison, use this three-arm order:

1. current Product baseline;
2. `generic-crossing-search-v1` as the structural predecessor;
3. `post-structural-relaxation-v1` as the strongest research candidate.

Current status is `HOLD`, not `ADOPT` and not `REJECT`: the provenance is
sufficient for comparison, but current user acceptance across the coordinate-
less public samples has not yet been completed. The comparison must not be
represented as formal PR-3 acceptance.

## Unresolved

- No Product-level adoption or canonical initial-layout selection rule exists.
- Cross-locale Actual Product visual acceptance, including JA, is not established.
- Cross-fixture human visual acceptance is incomplete even though the
  materializer generalization is recorded.
- Full interaction concerns such as connector presentation and pointer-up
  route-side behavior remain separate tracks.
- Candidate authority, persistence, and a future ADOPT/HOLD/REJECT workflow
  still need an explicit acceptance checkpoint.

## State and preservation

- Fresh10/Fresh11/Fresh12 historical evidence: unchanged.
- Fresh12 canonical Human Review result: unchanged.
- New governed Fresh lineage: NOT STARTED.
- Product adoption: NOT PERFORMED.
- Push, tag, release, deploy, and publication: NOT PERFORMED.
- Existing unrelated dirty work in both repositories: preserved.

This document records application research and provenance. It does not change
the E2R Core or Extension schemas. Consistent with the E2R application
guidance, generated graph geometry remains derived until an explicit future
adoption operation represents it as appropriate owned data.
