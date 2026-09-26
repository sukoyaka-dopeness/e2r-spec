# LiaisonScape Initial Layout Authoritative Presentation Cost Audit 1

Date: 2026-09-13

## Decision

```text
authoritative evaluation count              = unchanged
exact geometry/metadata reuse               = output-equivalent in 9 cells
new 2--3x per-evaluation opportunity        = NOT FOUND
remaining dominant cost                    = route candidate work and sequential occupied-path checks
checkpoint disposition                      = PIVOT
production-native provider                 = NOT ESTABLISHED
Product default / adoption                 = HOLD / UNCHANGED
Initial Layout Release blocker             = OPEN
```

This checkpoint audited the cost of one full Product presentation evaluation;
it did not change candidate selection, frontier retention, or Product
authority. The existing diagnostic geometry cache and exact candidate metadata
reuse were remeasured rather than reimplemented. Approximate presentation was
not used as an authority.

## Measurement boundary

Canonical cells used the fixed `frontier-12` arm. Dense cells used the retained
`frontier-adaptive-12` arm, which keeps the complete cheap frontier when its
size exceeds 12. Stage 2 was bypassed for this isolated per-evaluation audit,
so the comparison holds the candidate arm and authoritative evaluator inputs
constant while exposing the evaluator's internal cost. The cache arm enabled:

```text
E2R_PRESENTATION_COST_PROFILE=1
E2R_PRESENTATION_GEOMETRY_CACHE=1
E2R_PRESENTATION_EXACT_CANDIDATE_REUSE=1
```

The baseline had the profiler enabled with both cache flags disabled. Each
reported pair is a same-condition profiled run, so the absolute timings are
directional rather than a release benchmark. Exact output equality is the
important correctness result.

## Cost attribution

`authoritative` is the measured full evaluator time, and `candidate` is the
sum of route candidate-generation work in the profiler. `occupied` is the
sequential occupied-path check time. Relation/Node are the corresponding label
placement totals. All times are milliseconds.

| Cell | Full calls | Authoritative before / after | E2E before / after | Candidate before / after | Occupied before / after | Relation before / after | Node before / after |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Lighthouse EN | 12 | 407 / 340 | 558 / 494 | 258 / 176 | 63 / 73 | 29 / 37 | 41 / 45 |
| Lighthouse JA | 12 | 389 / 301 | 547 / 461 | 250 / 157 | 63 / 62 | 26 / 26 | 32 / 35 |
| Titanic EN | 12 | 400 / 301 | 519 / 418 | 287 / 182 | 73 / 71 | 29 / 31 | 43 / 43 |
| Titanic JA | 12 | 413 / 301 | 533 / 421 | 292 / 184 | 72 / 75 | 31 / 28 | 48 / 43 |
| Apollo EN | 12 | 269 / 200 | 513 / 439 | 179 / 107 | 26 / 27 | 20 / 21 | 34 / 34 |
| Apollo JA | 12 | 268 / 204 | 518 / 455 | 179 / 112 | 27 / 32 | 21 / 21 | 33 / 33 |
| `synthetic:k7-7` | 22 | 3,760 / 3,101 | 6,760 / 6,137 | 2,956 / 2,274 | 1,666 / 1,696 | 381 / 391 | 171 / 176 |
| `synthetic:k6-8` | 18 | 3,010 / 2,388 | 5,823 / 5,227 | 2,330 / 1,725 | 1,246 / 1,250 | 319 / 299 | 157 / 150 |
| `synthetic:k8-8` | 12 | 3,803 / 3,271 | 6,495 / 5,935 | 3,095 / 2,544 | 2,033 / 2,058 | 362 / 376 | 139 / 130 |

The cache reduced measured authoritative time by approximately 16--22% in
canonical cells and 14--18% in dense cells; E2E reduction was approximately
9--15% in these profiled runs. Full evaluation count remained unchanged. The
canonical values are roughly 16.6--34.4 ms per authoritative evaluation after
reuse; dense values are roughly 133--273 ms per evaluation after reuse. The
larger dense cost is driven by the number of route candidates and their
sequential occupied-path checks, not by cache lookup alone.

The dense profiler confirms the residual hotspot:

```text
k7-7: candidate 2.27 s, occupied 1.70 s, authoritative 3.10 s after reuse
k6-8: candidate 1.73 s, occupied 1.25 s, authoritative 2.39 s after reuse
k8-8: candidate 2.54 s, occupied 2.06 s, authoritative 3.27 s after reuse
```

Candidate generation remains the largest named aggregate. Occupied-path
checks remain the most resistant downstream cost because their result depends
on the ordered accepted route prefix. Reusing that result across a different
prefix would change the existing sequential presentation authority.

## Exact reuse boundary and memory trade-off

The existing cache reuses route geometry metadata only when the complete exact
geometry key matches, including endpoint coordinates, parallel/self-relation
identity, physical side, and candidate offset. Dynamic obstacles, occupied
paths, label rectangles, preference state, safety predicates, scoring, and
arbitration remain outside that key. This preserves the current authority.

Observed cache statistics were:

| Cells | Lookups | Hits | Hit rate | Entries / metadata entries |
| --- | ---: | ---: | ---: | ---: |
| Lighthouse EN | 19,008 | 14,487 | 76.2% | 4,521 / 4,521 |
| Lighthouse JA | 19,008 | 14,487 | 76.2% | 4,521 / 4,521 |
| Titanic EN/JA | 19,008 | 14,421 | 75.9% | 4,587 / 4,587 |
| Apollo EN/JA | 13,068 | 9,471 | 72.5% | 3,597 / 3,597 |
| `k7-7` | 106,722 | 92,499 | 86.7% | 14,223 / 14,223 |
| `k6-8` | 85,536 | 74,778 | 87.4% | 10,758 / 10,758 |
| `k8-8` | 76,032 | 55,638 | 73.2% | 20,394 / 20,394 |

The cache is process-local and bounded to the unique route geometries seen in
the run. The dense memory footprint reaches about 20,394 entries plus the
same number of metadata entries. This is a meaningful memory trade-off for a
single diagnostic run and is not a basis for a Product-global cache.

## Exact output evidence

Baseline and cache selected position fingerprints, presentation digests, and
hard metrics were identical in all nine matched cells:

| Cell | Selected position fingerprint | Presentation digest prefix | Hard metrics (crossings / label hits / labelNear20 / overlaps) |
| --- | --- | --- | --- |
| Lighthouse EN | `628c21314d32` | `7e629f2b` | 0 / 0 / 0 / 0 |
| Lighthouse JA | `628c21314d32` | `8e5be227` | 0 / 0 / 0 / 0 |
| Titanic EN | `8939be8ff52f` | `63a9376a` | 0 / 0 / 0 / 0 |
| Titanic JA | `8939be8ff52f` | `b8eed498` | 0 / 0 / 0 / 0 |
| Apollo EN | `6170d26242ca` | `26b5d40c` | 0 / 0 / 0 / 0 |
| Apollo JA | `6170d26242ca` | `9eda069d` | 0 / 0 / 2 / 0 |
| `synthetic:k7-7` | `ab9eadb27b53` | `6a2b8311` | 129 / 8 / 20 / 0 |
| `synthetic:k6-8` | `e57b55ea355d` | `27cb7c15` | 123 / 4 / 15 / 0 |
| `synthetic:k8-8` | `ad62aea419c0` | `f34ba991` | 229 / 16 / 32 / 0 |

The full digest covered routed geometry, Relation-label geometry, Node-label
geometry, and feedback state. This establishes exactness for the measured
cache key and evaluator runs; it does not establish Post equivalence or
production readiness.

## Decision and next direction

The exact cache is useful diagnostic infrastructure and may provide a modest
per-evaluation improvement, but the measured 9--15% E2E gain is far below the
2--3x improvement needed to close the dense runtime gap. Extending reuse across
ordered occupied-path prefixes, label rectangles, or feedback states would
require a new dependency contract and could change presentation results. It is
therefore not justified by this audit.

The appropriate disposition is `PIVOT`: stop accumulating micro-optimizations
inside the current evaluator and investigate a larger production-native
structural formulation or an explicit separation between Initial Placement and
high-quality presentation-aware Auto Layout. Any future candidate must retain
the full evaluator as quality authority and prove output equality or receive a
new human review when output changes.

No Product default/adoption, candidate policy, frontier retention, Dataset,
stored/mixed/coordinate-less authority, round-once finalization, persistence,
dirty-state, Save Coordinates semantics, or presentation authority was
changed. The vertical parallel-edge spacing issue remains a separate
presentation track. No production Worker/provider architecture, push, tag,
release, deploy, or publication was performed.

## Validation

- Existing LiaisonScape targeted/full tests remain PASS; this checkpoint added
  no application code or test changes.
- Existing LiaisonScape lint/build/diff-check gates remain PASS.
- E2R-SPEC `npm run validate`: PASS.
- E2R-SPEC `git diff --check`: PASS after this record is staged.
