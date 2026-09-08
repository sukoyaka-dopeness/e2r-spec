# LiaisonScape Fresh12 Candidate-generation Experiment 1 Result

Checkpoint: `E2R-LIAISONSCAPE-FRESH12-CANDIDATE-GENERATION-EXPERIMENT1`

Date: 2026-09-08

Status: bounded, non-authoritative experiment; candidate is not selected for
Production or governed evidence

## Experiment

The first changed variable was **seed geometry source**.

The Fresh12 FP1-NGP family (`x=i/8`, `y=(i/8)^2`, runtime scale 6144) was
replaced only for this temporary comparison by the current Product's
deterministic `settleInitialPlacement` result. The Apollo 11 English fixture,
V2 Product graph construction, routing, label derivation, viewport fitting,
and browser rendering representation were held fixed.

This variable was selected first because the prior diagnostic proved that the
Fresh12 V2 path consumes materializer coordinates directly. It also avoids the
misleading scale-only change: a global seed scale does not change the
normalized family shape or topology-induced crossings when the fit is not
clamped.

The experimental output was written only under:

`C:/Users/extra/AppData/Local/Temp/e2r-pr3-fresh12-candidate-experiment-20260908`

It was not written into Fresh12 or any governed artifact root.

## Metrics

The same diagnostic metric definitions from the Fresh12 layout-quality record
were used. Route lengths are sampled-polyline lengths. A crossing pair is a
sampled segment intersection between non-adjacent routes, excluding shared
endpoints. This is comparative evidence, not a formal acceptance gate.

| Metric | Fresh12 baseline | Product-seed experiment | Result |
|---|---:|---:|---|
| Node extent | `6036.0 x 6036.0` | `288.7 x 325.2` | clear improvement |
| Route-length median | `2830.5` | `86.2` | clear improvement |
| Route-length maximum | `7862.6` | `235.8` | clear improvement |
| Sampled crossing pairs | `9` | `6` | improved, not eliminated |
| Fit scale | `0.1000` | `0.7914` | clear improvement |
| Unclamped height fit | `0.0505` | `0.7914` | no clamp interaction |

The candidate therefore improves all selected metrics without trading a worse
crossing count for compactness. It does not establish that the current
Product solver is the final candidate generator or that these results
generalize to all fixtures.

## Early Visual Smoke Check

Two temporary browser-rendered PNGs were inspected: the Fresh12-derived
baseline and the experimental candidate. The candidate shows:

- a compact, bounded node arrangement rather than a long diagonal strip;
- readable node and relation labels at the initial fitted view;
- substantially shorter visible edges;
- immediate graph recognizability and useful viewport utilization.

Residual defects remain:

- several edge crossings remain visible;
- some relation labels and edge corridors are locally crowded;
- the layout is compact but not yet a visually clean final presentation.

The smoke check is diagnostic only. It is not a Human Review, ranking, or
selection result.

## Diagnosis update

### PROVEN BY THIS EXPERIMENT

- Holding the V2 Product presentation pipeline fixed while changing only the
  seed coordinate source materially improves macro extent, edge lengths, fit,
  and the sampled crossing count for Apollo 11.
- The Fresh12 gross visual failure is not intrinsic to Apollo 11 content or to
  the V2 browser renderer alone.

### STRONGLY SUPPORTED

- A bounded Product-shaped initial seed is a viable improvement direction for
  this fixture.
- The main Fresh12 failure is upstream of routing and viewport framing;
  routing and fitting expose and amplify it but do not create the 6000-unit
  node extent.
- Crossing reduction still needs a separate route objective or better
  topology-aware placement. Compactness alone is insufficient for visual
  acceptance.

### UNRESOLVED

- Whether Product `settleInitialPlacement` should be used by the evaluation
  candidate authority, or whether a separate bounded topology-aware family is
  preferable.
- Whether the remaining six crossings are best addressed by seed assignment,
  global route arbitration, or both.
- Whether relation/label extents must become part of a future viewport-fit
  experiment.
- Whether this result generalizes beyond Apollo 11 and the English locale.

## Changes and authority boundary

No Product source, materializer source, transform authority, Fresh12 artifact,
or canonical Human Review result was changed. The experimental coordinates,
V2 output, HTML, and PNGs are temporary derived outputs only.

This result is not a formal candidate ranking or selection. It is classified
as:

`promising candidate found; ready for next bounded experiment`

It is **not** ready for a new governed Fresh lineage because residual visual
crowding/crossings remain and the candidate authority has not been redesigned
or re-authorized.

## Validation

- Browser helper `npm.cmd test`: `309/309` passed.
- Browser helper `npm.cmd run lint`: passed.
- Browser helper `npm.cmd run build`: passed.
- Temporary candidate V2 generation: passed.
- Temporary browser PNG generation: passed for baseline and candidate.
- Fresh12 historical evidence: read only and unchanged.
- Canonical Fresh12 Human Review result: read only and unchanged.
- No new governed Fresh lineage: **NOT STARTED**.
- Push, tag, release, deploy, and publication: **NOT PERFORMED**.

The next bounded experiment should isolate the remaining crossing/crowding
question, preferably by comparing a small number of topology-aware assignment
or route-objective variants while preserving this compact seed as the control.
