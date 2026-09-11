# LiaisonScape Initial-Layout Post Authoritative Evaluation Cost Reduction 1

Date: 2026-09-11

Status: EXACT COST REDUCTION PROMISING; RELEASE BLOCKER REMAINS

## Scope and baseline

This checkpoint profiles the remaining cost of the diagnostic
`post-structural-relaxation-v1` path after the retained bounded configuration:

```text
E2R_PRESENTATION_FINALIST_LIMIT=2
E2R_RELAXATION_STEP_MODE=omit-fine
E2R_RELAXATION_FINAL_CANONICALIZATION=off
```

The baseline is therefore finalist-limit 2 plus omit-fine, not the older
limit-8 or three-pass Post configuration. This checkpoint does not connect
Post to the Product default path, change the parked coarse provider, or change
stored/mixed/coordinate-less authority, Derived ownership, persistence,
dirty-state, Save Coordinates, fallback, or presentation authority.

## Actual cost attribution

The six canonical fixture/locale payloads were measured through
`tools/generic-crossing-search.mjs` with the existing downstream presentation
pipeline. Detailed profiling separates the Product presentation call from
metric aggregation that exists only to rank diagnostic candidates.

| Fixture / locale | Nodes / visible edges | Full evaluations | Presentation calls | Baseline presentation | Baseline authoritative presentation | Cache authoritative presentation |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Lighthouse EN | 10 / 14 | 226 | 239 | 5,646 ms | 5,333 ms | 4,987 ms |
| Lighthouse JA | 10 / 14 | 232 | 242 | 5,781 ms | 5,464 ms | 4,889 ms |
| Titanic EN | 13 / 12 | 272 | 282 | 7,000 ms | 6,715 ms | 5,900 ms |
| Titanic JA | 13 / 12 | 279 | 289 | 6,787 ms | 6,497 ms | 5,647 ms |
| Apollo EN | 9 / 11 | 245 | 252 | 3,849 ms | 3,629 ms | 3,226 ms |
| Apollo JA | 9 / 11 | 237 | 243 | 3,731 ms | 3,531 ms | 3,160 ms |

Across the profiled six-cell run, authoritative presentation time decreased
from 31,169 ms to 27,809 ms, approximately 10.8%. The number of full
evaluations and route candidate comparisons did not change. A separate
non-profiled spot run was noisier and showed only an approximately 3% aggregate
presentation-time reduction, so the profiled percentage is attribution
evidence, not a release-time guarantee.

The cost breakdown is consistent across fixture size and locale:

```text
authoritative Product presentation     = approximately 3.2–6.7 seconds/cell
metric aggregation for ranking         = approximately 0.17–0.28 seconds/cell
provisional Node-label preparation     = below approximately 0.07 seconds/cell
route candidate generation             = largest named sub-cost
Relation-label / Node-label placement  = material, but smaller than route generation
route arbitration                      = only a few milliseconds/pass
```

In the detailed profiler, route candidate generation across label-free, first,
and feedback passes totaled approximately 2.49–4.73 seconds per cell before
the cache. Candidate comparison counts and safe-candidate checks were
unchanged. The cache runs had approximately 92–93% endpoint/offset geometry
cache hit rates. This identifies repeated route geometry construction across
candidate evaluations and presentation passes as the first suitable exact
reuse target.

## Selected optimization and exactness

The implementation adds an opt-in `RouteGeometryCache`. It caches only the
geometry determined by source/target coordinates, parallel/self-loop identity,
overlap identity, canonical physical side, and candidate offset. Every
variable decision remains recomputed:

- obstacle and occupied-path checks;
- label and node influence checks;
- candidate scoring and arbitration;
- route-side continuity and previous-route behavior;
- Relation-label and Node-label placement;
- downstream presentation metric aggregation.

The cache is enabled only in the diagnostic generic search with
`E2R_PRESENTATION_GEOMETRY_CACHE=1`. Normal Product callers omit it. The
selected finalist, float positions, route samples, labels, score, extent,
fitScale, and reported pressure metrics were identical with and without the
cache for all six measured cells. A complete bounded-presentation unit test
also compares cached and uncached output, in addition to the lower-level route
cache test.

This is therefore an exact cost-reduction probe, not a search approximation.
It does not reduce candidate volume, change finalist admission, omit a
presentation pass, or alter the final-coordinate canonicalization boundary.
No new human visual gate is required for the cache itself because it does not
change the selected output or presentation geometry. Runtime acceptance of the
Post-quality path remains a separate human/UX and release decision.

## Product versus evaluator-only work

`authoritativePresentationMs` measures work performed by the same routing,
Relation-label, Node-label, and feedback pipeline used to render Product
presentation. `metricAggregationMs` additionally includes evaluator-only
collection of route lengths, corridor summaries, fit, and other ranking
metrics. The latter is not itself Product render authority, but it is not the
dominant cost. The optimization is placed below both concerns, in shared route
geometry generation, and leaves their authority and decision order intact.

## Decision and next direction

```text
dominant remaining cost                  = repeated route candidate geometry generation
one authoritative evaluation reduction  = ESTABLISHED, approximately 10.8% aggregate profiled
full evaluation count reduction         = NONE
selected-output exactness               = PASS for six measured cells and unit coverage
normal non-profiled net gain             = PROMISING BUT NOISY; not release-qualified
human visual re-review for this cache    = NOT REQUIRED FOR EXACT OUTPUT PRESERVATION
Post-quality acceleration direction     = CONTINUE EXACT REUSE, THEN REPROFILE
Initial Layout Release blocker          = STILL BLOCKED
Product default adoption                = HOLD
Product default behavior                = UNCHANGED
```

This probe is worth retaining because it attacks a measured hot path without
changing quality authority. It is not sufficient for the proposed public-sample
roughly-two-second feasibility target: representative end-to-end runs remain
approximately 3.6–6.8 seconds in the retained configuration, with the larger
Titanic cases above six seconds. The next runtime investigation should
reprofile the remaining route candidate construction and repeated label/path
checks after this cache, preserving candidate counts and arbitration semantics.
Cheap-ranking, incremental replay, adaptive fine-pass changes, and a new
approximation remain separate hypotheses and are not adopted by this
checkpoint.

No claim of Post equivalence, Product release readiness, or default adoption is
made. Existing human evidence for full Post and the accelerated Post remains
unchanged; no new Actual Product visual acceptance is claimed here.

## Preserved boundaries

- Product default initial placement and normal Dataset-open behavior are
  unchanged.
- Coarse remains parked and is not restored as the quality authority.
- Stored/mixed/coordinate-less authority, Derived ownership, dirty-state, Save
  Coordinates, same-payload reopen, and fallback semantics are unchanged.
- Routing, Relation-label, Self-loop, connector, glyph, and CSS authority stays
  downstream; no known presentation defect was fixed.
- Canonical fixtures, historical Fresh evidence, Fresh12 canonical Human
  Review, and governed lineage were not changed.
- No App.tsx refactor, push, tag, release, deploy, or publication was done.
