# LiaisonScape Initial-Layout Post Authoritative Evaluation Cost Reduction 3

Date: 2026-09-11

Status: EXACT PER-EVALUATION REDUCTION NOT ESTABLISHED; PIVOT TO EVALUATION-COUNT RESEARCH; RELEASE BLOCKER REMAINS

## Scope and retained baseline

This checkpoint continues the retained Cost Reduction 2 diagnostic arm:

```text
E2R_PRESENTATION_FINALIST_LIMIT=2
E2R_RELAXATION_STEP_MODE=omit-fine
E2R_PRESENTATION_GEOMETRY_CACHE=1
E2R_PRESENTATION_EXACT_CANDIDATE_REUSE=1
```

The full presentation-evaluation count, candidate volume and order, true
final-selection boundary, round-once canonicalization boundary, arbitration,
and Product default remain unchanged. The work here is diagnostic only. No
approximate pruning, cheap ranking, incremental replay, or Product provider
change was introduced.

## Actual hotspot and dependency attribution

The Cost Reduction 2 profiler was extended with an exact occupied-path point
comparison counter. Across the six canonical cells, the remaining route
arbitration cost is concentrated in the repeated candidate work rather than in
the final arbitration itself. The retained profiles reported approximately:

| Cell | Candidate generation | Occupied-path checks | Node-obstacle checks | Full evaluations |
| --- | ---: | ---: | ---: | ---: |
| Lighthouse EN | 2,193 ms | 1,035 ms | 220 ms | 226 |
| Lighthouse JA | 2,247 ms | 1,074 ms | 214 ms | 232 |
| Titanic EN | 2,992 ms | 1,481 ms | 350 ms | 272 |
| Titanic JA | 2,584 ms | 1,073 ms | 395 ms | 279 |
| Apollo EN | 1,350 ms | 453 ms | 162 ms | 245 |
| Apollo JA | 1,362 ms | 464 ms | 180 ms | 237 |

These values are profiler measurements and are not used as release-time
predictions. They confirm that occupied-path checks are the largest named
route sub-cost on Titanic and Lighthouse, with Node-obstacle scoring a smaller
but material secondary cost. The existing exact metadata and label broad-phase
reuse remain retained from Cost Reduction 2.

### Occupied-path dependency

`occupiedPaths` is an ordered prefix of routes already accepted by the current
presentation pass. A candidate's hard conflict result therefore depends on the
complete preceding route prefix, including its route order and the exact
sample geometry. Reusing a result across a different prefix would change the
sequential routing authority. That reuse was not attempted.

The existing route-bounds broad phase is exact and already rejects occupied
paths whose expanded bounds cannot meet the candidate bounds. The remaining
predicate compares candidate inner samples with the occupied path's inner
samples and then applies the existing consecutive-near-distance rule. Its
short-circuit result is boolean for each candidate point; it does not require
the identity of the first matching occupied point.

### Node-obstacle dependency

Node-obstacle scoring depends on the candidate's complete route samples and
the current ordered obstacle positions. Node ID alone is not a valid cache key:
the same graph node can move, and endpoint obstacles are intentionally part of
the current routing input. A probe keyed by route geometry plus a serialized
obstacle list was exact, but it allocated approximately 86,000--116,000
entries per measured cell and paid key construction and Map lookup costs on
the hot path. It produced no net normal-runtime improvement and was not
retained.

## Exact optimization probes

Two isolated probes were evaluated without changing candidate count or
arbitration semantics.

1. Node-obstacle memoization reused the exact score for a complete geometry and
   obstacle-position tuple. It preserved selected output in the measured
   diagnostic runs, but normal wall time increased across all six cells. The
   additional key and Map work outweighed the later-stage hits. It is rejected.
2. Occupied-path spatial broad phase indexed occupied inner samples in an
   8-unit cell grid and queried the surrounding 3x3 cells before applying the
   unchanged squared-distance predicate. Because the predicate is strictly
   less than 8 units, every possible match is in the queried cells, including
   negative-coordinate cells. The occupied-path list order, prefix sequencing,
   bounds broad phase, consecutive-near-distance rule, and candidate order
   were otherwise unchanged. This was an exact experiment, not approximation.

The spatial probe reduced point-comparison work in profiled runs, but its
normal end-to-end result was effectively noise-level neutral and did not
provide a stable release-relevant gain. The two-run normal measurements were:

| Cell | CR2 retained baseline (ms) | Spatial probe (ms) | Full evaluations |
| --- | ---: | ---: | ---: |
| Lighthouse EN | 4,173 / 4,819 | 4,225 / 4,800 | 226 |
| Lighthouse JA | 4,284 / 4,905 | 4,251 / 4,928 | 232 |
| Titanic EN | 4,811 / 6,031 | 4,803 / 6,033 | 272 |
| Titanic JA | 4,460 / 5,026 | 4,422 / 5,014 | 279 |
| Apollo EN | 2,722 / 3,375 | 2,731 / 3,364 | 245 |
| Apollo JA | 2,794 / 3,066 | 2,823 / 3,028 | 237 |

Each pair is two repeated non-profiled runs on the same machine and is shown
as run 1 / run 2. The small mixed deltas do not establish a meaningful net
improvement. The spatial implementation was removed after the experiment;
only the low-overhead profiler counter remains.

## Exactness and output evidence

The rejected probes did not alter candidate volume, candidate order, safe
candidate checks, selected candidate family, selected positions, selected
score, route samples, Relation-label geometry, Node-label geometry,
`feedbackApplied`, extent, fit scale, crossings, label metrics, or full
evaluation count in the measured cells. The selected presentation digest
prefixes remained:

```text
Lighthouse EN f1d3f068    Lighthouse JA b6c366b4
Titanic EN    081535ed    Titanic JA    48f41fae
Apollo EN     09e41c28    Apollo JA      7454ef45
```

The same prefixes were observed for the retained arm and both rejected
diagnostic probes. This establishes output preservation for the probe runs;
it does not establish Post equivalence or Product release readiness.

The six retained full-evaluation counts remain:

```text
Lighthouse EN 226    Lighthouse JA 232
Titanic EN    272    Titanic JA    279
Apollo EN     245    Apollo JA     237
```

No human re-review is required for the rejected probes because they were not
retained as behavior and their measured output digests were unchanged. Any
future evaluation-count reduction that changes selected output must receive a
new Actual Product human visual review.

## Runtime position and research direction

Cost Reduction 2's retained non-profiled medians remain the relevant runtime
reference: approximately 2.5 seconds for Apollo, 3.8--3.9 seconds for
Lighthouse, and 4.0--4.3 seconds for Titanic. The two-second feasibility
target is still not met for Lighthouse or Titanic, and is only approached—not
reliably established—for Apollo.

The exact per-evaluation headroom is now LOW for the investigated occupied
path and Node-obstacle representations. The dependency analysis does not
support cross-prefix route reuse, and the exact obstacle memoization has too
much representation overhead. The decision is therefore:

```text
dominant residual                  = repeated authoritative presentation work,
                                     led by occupied-path checks
new exact reuse opportunity         = NOT FOUND (net release gain)
occupied-path semantics             = PRESERVED
Node-obstacle semantics             = PRESERVED
candidate volume                    = UNCHANGED
arbitration semantics               = UNCHANGED
presentation output                 = EXACT in measured probe cells
full evaluation count               = UNCHANGED
remaining exact headroom            = LOW for these per-evaluation forms
next runtime direction              = PIVOT TO EVALUATION-COUNT REDUCTION
human visual gate                   = REQUIRED for any output-changing arm
Initial Layout Release blocker      = STILL BLOCKED
Product default behavior            = UNCHANGED
Product default adoption            = HOLD
```

The next direction is a separate bounded research checkpoint for a
quality-preserving reduction in authoritative evaluation count. Existing
cheap-ranking, local-screen, incremental-replay, cheap-lower-bound, and
coarse-quality evidence must not be silently reactivated; any new hypothesis
must preserve the current full-evaluation arm as a reference and prove recall
before being treated as a candidate.

## Preserved boundaries

- No Product default or Product initial-placement authority changed.
- No new provider or cheap proxy was introduced.
- Stored, mixed, coordinate-less, Derived, dirty-state, Save Coordinates, and
  same-payload reopen semantics are unchanged.
- Routing, Relation-label, Node-label, Self-loop, connector, glyph, and CSS
  authority remains downstream.
- Canonical fixtures, historical Fresh evidence, Fresh12 canonical Human
  Review, and governed lineage were not changed.
- No App.tsx refactor, push, tag, release, deploy, or publication was done.
