# LiaisonScape Initial-Layout Post Authoritative Evaluation Cost Reduction 2

Date: 2026-09-11

Status: EXACT CANDIDATE-COST REDUCTION ESTABLISHED; RELEASE BLOCKER REMAINS

## Scope and baseline

This checkpoint continues from the retained diagnostic configuration and turns
the previous exact geometry cache on:

```text
E2R_PRESENTATION_FINALIST_LIMIT=2
E2R_RELAXATION_STEP_MODE=omit-fine
E2R_RELAXATION_FINAL_CANONICALIZATION=off
E2R_PRESENTATION_GEOMETRY_CACHE=1
```

The baseline for this checkpoint is geometry-cache enabled with the new exact
candidate reuse disabled. The probe is enabled only with
`E2R_PRESENTATION_EXACT_CANDIDATE_REUSE=1`. It does not reduce candidate
volume, alter candidate order, move presentation authority into Initial
Layout, or connect Post to the Product default path.

## Route candidate cost attribution

The added profiler separates route candidate generation into key construction,
geometry lookup/construction, geometry metadata, obstacle/path/label checks,
score assembly, and arbitration. The following cache-enabled profiles use the
same six canonical fixture/locale payloads.

| Fixture / locale | Candidate generation before | Candidate generation after | Label pressure before | Label pressure after | Full evaluations |
| --- | ---: | ---: | ---: | ---: | ---: |
| Lighthouse EN | 2,915 ms | 1,604 ms | 1,177 ms | 182 ms | 226 |
| Lighthouse JA | 3,004 ms | 1,655 ms | 1,207 ms | 190 ms | 232 |
| Titanic EN | 4,080 ms | 2,131 ms | 1,848 ms | 284 ms | 272 |
| Titanic JA | 3,868 ms | 1,984 ms | 1,833 ms | 280 ms | 279 |
| Apollo EN | 2,204 ms | 1,106 ms | 1,043 ms | 181 ms | 245 |
| Apollo JA | 2,203 ms | 1,096 ms | 1,015 ms | 174 ms | 237 |

The profiled candidate-generation sum decreased from 18,273 ms to 9,577 ms.
Profiler overhead and machine load affect these absolute values, so the
non-profiled paired measurements below are the primary net-runtime evidence.

The remaining cost after the probe is distributed differently. Label pressure
is no longer the largest named sub-cost. Representative post-probe ranges
across the six cells are:

```text
geometry-cache key construction       = approximately 8–15 ms
geometry-cache lookup bookkeeping     = approximately 238–373 ms
geometry construction on cache misses = approximately 86–114 ms
sample-bounds metadata                 = approximately 167–280 ms
Node obstacle checks                   = approximately 163–381 ms
occupied-path checks                  = approximately 232–685 ms
label pressure                        = approximately 174–284 ms
candidate score assembly              = approximately 13–22 ms
arbitration                           = approximately 10–14 ms
```

The existing `RouteCandidateCache` key serialization was also measured. Its
candidate-key time was below approximately 1 ms per cell in these profiles;
it is not the dominant hotspot. Geometry-cache key construction is larger but
still small relative to route checks and presentation stages.

## Exact reuse boundary

Three bounded exact reductions were enabled together:

1. Geometry-cache entries now carry `sampleBounds` and `innerSamples` metadata
   for the already-cached route geometry. These values depend only on the
   route geometry and are reused across presentation evaluations.
2. Label-pressure evaluation first applies an expanded sample-bounds check
   with the existing 20-unit halo. `minimumPathToLabelRectDistance` is skipped
   only when the route bounds cannot reach the rectangle's halo; otherwise the
   original distance calculation runs unchanged. This is an exact broad-phase
   rejection, not an approximation or candidate-pruning authority.
3. Occupied-path inner samples are sliced once per `routeGraphEdge` call and
   reused for that call's candidate loop. The occupied path list remains
   sequential and is not reused across a different dependency tuple.

The geometry key contains source/target coordinates, parallel index/count,
self-relation identity, overlap index, canonical physical side, and candidate
offset. This covers every input used by `geometryForOffset`. Node obstacles,
occupied paths, label rectangles, preferred side, safety predicates, scoring,
candidate ordering, and arbitration remain separate dynamic inputs and are not
incorrectly folded into the geometry key.

The cache is process-local and bounded by the unique route geometries observed
in one diagnostic run. The six runs retained approximately 21,417–29,469
geometry entries and the same number of metadata entries. No persistent or
Product-facing cache was introduced.

## Net runtime and Stage 2 evidence

Two non-profiled repetitions were run for each arm. The table reports the
per-cell median; the baseline is geometry cache only and the probe is geometry
cache plus exact candidate reuse.

| Fixture / locale | End-to-end before | End-to-end after | Presentation before | Presentation after | Average full evaluation before → after |
| --- | ---: | ---: | ---: | ---: | ---: |
| Lighthouse EN | 5,125 ms | 3,825 ms | 5,000 ms | 3,701 ms | 22.12 → 16.38 ms |
| Lighthouse JA | 5,201 ms | 3,897 ms | 5,073 ms | 3,770 ms | 21.86 → 16.25 ms |
| Titanic EN | 6,237 ms | 4,271 ms | 6,140 ms | 4,175 ms | 22.58 → 15.35 ms |
| Titanic JA | 5,923 ms | 4,012 ms | 5,823 ms | 3,914 ms | 20.88 → 14.03 ms |
| Apollo EN | 3,626 ms | 2,520 ms | 3,418 ms | 2,313 ms | 13.95 → 9.44 ms |
| Apollo JA | 3,559 ms | 2,499 ms | 3,336 ms | 2,273 ms | 14.08 → 9.59 ms |

Across these medians, end-to-end time decreased approximately 29.1% and
presentation time approximately 30.0%. An additional same-condition Stage 2
sample moved as follows:

| Fixture / locale | Stage 2 before | Stage 2 after |
| --- | ---: | ---: |
| Lighthouse EN | 3,948 ms | 2,837 ms |
| Lighthouse JA | 4,019 ms | 2,867 ms |
| Titanic EN | 5,063 ms | 3,409 ms |
| Titanic JA | 4,853 ms | 3,089 ms |
| Apollo EN | 2,525 ms | 1,691 ms |
| Apollo JA | 2,477 ms | 1,656 ms |

The measurements are useful for direction and attribution, not a fixed
release-time guarantee. Representative end-to-end runtime remains above the
roughly-two-second planning target for every public sample in these runs.
The detailed timing probes are activated only when the diagnostic profiler is
requested; normal Product callers do not pay these per-candidate timing calls.

## Exact-output evidence

All six cells retained the same selected family,
`post-structural-constrained-relaxation`, and the same full evaluation counts:

```text
Lighthouse EN 226    Lighthouse JA 232
Titanic EN    272    Titanic JA    279
Apollo EN     245    Apollo JA     237
```

Before/after selected position digests and complete presentation digests were
identical for every cell. The presentation digest covers routed route samples
and path geometry, Relation-label geometry, Node-label geometry, and
`feedbackApplied`. Selected scores and key metrics also remained identical:

```text
Lighthouse EN 49194.5437   Lighthouse JA 31488.9007
Titanic EN     1546.1128   Titanic JA     1079.7321
Apollo EN      1014.2519   Apollo JA       992.9188
```

Crossings, labelRouteHits, labelNear20, and labelOverlap remained zero in all
selected outputs. Extent, fitScale, route median/max, and Node overlap values
were unchanged. Candidate comparison and safe-candidate counts were unchanged.
The matching digests establish output equivalence for the measured cells; no
Post equivalence or Product release approval is inferred beyond that boundary.

The observed presentation digest prefixes were Lighthouse EN `f1d3f068`,
Lighthouse JA `b6c366b4`, Titanic EN `081535ed`, Titanic JA `48f41fae`, Apollo
EN `09e41c28`, and Apollo JA `7454ef45`; each prefix matched between the two
arms. These are diagnostic comparison digests, not persisted fixture material.

## Decision

```text
dominant pre-probe residual          = label pressure plus repeated candidate metadata/path work
new exact reuse opportunity           = ESTABLISHED
dependency correctness               = CONFIRMED for the implemented keys and local precomputations
candidate volume                     = UNCHANGED
candidate ordering                   = UNCHANGED
arbitration semantics                = UNCHANGED
presentation output                  = EXACT for six canonical cells
average full evaluation              = materially reduced; no evaluation-count reduction
non-profiled net gain                = approximately 29% end-to-end median
human visual re-review                = NOT REQUIRED for this exact output-preserving probe
roughly-two-second target             = NOT REACHED
next runtime direction                = reprofile remaining occupied-path and obstacle checks
Initial Layout Release blocker        = STILL BLOCKED
Product default behavior              = UNCHANGED
Product default adoption              = HOLD
```

The next runtime direction should focus on remaining occupied-path and Node
obstacle checks, with dependency tuples kept explicit. Reusing occupied-path
results across different sequential prefixes, or reusing label pressure across
different LabelRect inputs, requires additional invalidation evidence and is
not adopted here. Candidate pruning, cheap ranking, incremental replay, and
adaptive fine-pass changes remain separate tracks.

## Preserved boundaries

- No Product default, Product provider authority, or normal Dataset-open path
  was changed.
- Coarse remains parked and is not restored as final quality authority.
- Stored/mixed/coordinate-less authority, Derived ownership, dirty-state, Save
  Coordinates, same-payload reopen, and fallback semantics are unchanged.
- Routing, Relation-label, Self-loop, connector, glyph, and CSS authority stays
  downstream; no known presentation defect was fixed.
- Canonical fixtures, historical Fresh evidence, Fresh12 canonical Human
  Review, and governed lineage were not changed.
- No App.tsx refactor, push, tag, release, deploy, or publication was done.
