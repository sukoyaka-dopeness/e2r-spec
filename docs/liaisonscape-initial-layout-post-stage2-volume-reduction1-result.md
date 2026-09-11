# LiaisonScape Initial-Layout Post Stage-2 Evaluation Volume Reduction 1

Date: 2026-09-11

Status: BOUNDED OMIT-FINE PROTOTYPE PROMISING; HUMAN QUALITY GATE OPEN

## Scope

This checkpoint investigates the remaining Stage-2 presentation-evaluation
volume after `E2R_PRESENTATION_FINALIST_LIMIT=2`. The existing cheap screen and
incremental replay were not restored: prior evidence showed no useful rejection
and insufficient exactness respectively.

The selected bounded prototype is an opt-in diagnostic mode,
`E2R_RELAXATION_STEP_MODE=omit-fine`. It keeps the existing 18-unit and
9-unit presentation-aware relaxation passes, but omits only the final 6-unit
pass. The default mode remains `full` and still evaluates all three passes.
No Product provider or default path consumes this mode.

## Stage-2 cost attribution

With finalist limit 2, the presentation-repair portion is bounded at 50
evaluations for these two-finalist cells. Most remaining Stage-2 work is the
single-node constrained relaxation:

| Fixture / locale | Limit-2 Stage-2 full evaluations | Repair evaluations | Relaxation evaluations |
| --- | ---: | ---: | ---: |
| Apollo EN | 250 | 50 | 208 |
| Apollo JA | 234 | 50 | 192 |
| Lighthouse EN | 246 | 50 | 212 |
| Lighthouse JA | 252 | 50 | 214 |
| Titanic EN | 309 | 50 | 269 |
| Titanic JA | 326 | 50 | 288 |

The counts do not add exactly because the presentation cache can satisfy some
requests, but they show that the relaxation pass, not finalist repair, is the
dominant residual Stage-2 volume. The default relaxation schedule creates 24
single-node move plans per target node: 8 directions at each of 18, 9, and 6
units.

## Omit-fine prototype measurements

The same six canonical fixture/locale payloads were run with finalist limit 2
and compared against the full three-pass limit-2 baseline. Each pair was run
under the same diagnostic process configuration; wall time is subject to
machine load, so evaluation counts are the more stable attribution signal.

| Fixture / locale | Wall time baseline → omit-fine | Full evaluations baseline → omit-fine | Stage-2 full baseline → omit-fine | Relaxation evaluations baseline → omit-fine | Selected score baseline → omit-fine |
| --- | ---: | ---: | ---: | ---: | ---: |
| Apollo EN | 8,687 → 6,598 ms | 310 → 245 | 250 → 185 | 208 → 141 | 1,004.641 → 1,014.252 |
| Apollo JA | 8,311 → 6,396 ms | 294 → 237 | 234 → 177 | 192 → 132 | 993.998 → 992.919 |
| Lighthouse EN | 12,355 → 8,944 ms | 290 → 226 | 246 → 182 | 212 → 144 | 52,244.336 → 49,194.544 |
| Lighthouse JA | 12,598 → 8,948 ms | 296 → 232 | 252 → 188 | 214 → 147 | 31,490.598 → 31,488.901 |
| Titanic EN | 15,347 → 9,536 ms | 353 → 272 | 309 → 228 | 269 → 187 | 1,549.718 → 1,546.113 |
| Titanic JA | 15,493 → 9,321 ms | 370 → 279 | 326 → 235 | 288 → 194 | 1,077.393 → 1,079.732 |

The reduction is 21–32% in Stage-2 full evaluations and 23–38% in these
paired wall-time observations. All six runs retained the
`post-structural-constrained-relaxation` selected family. Crossing count,
Relation-label hit count, and Node-label overlap count remained zero in both
arms.

The selected positions are not exact reuses of limit 2. The paired comparison
reported the following maximum and mean per-Entity displacement from the
limit-2 selected result:

| Fixture / locale | Maximum displacement | Mean displacement |
| --- | ---: | ---: |
| Apollo EN | 18.0 | 7.41 |
| Apollo JA | 6.0 | 2.67 |
| Lighthouse EN | 87.1 | 18.82 |
| Lighthouse JA | 11.1 | 5.59 |
| Titanic EN | 18.0 | 3.62 |
| Titanic JA | 6.0 | 1.44 |

Lighthouse EN is the strongest counter-signal: its score improved in this
probe, but one selected Entity moved substantially. A score improvement does
not prove that the human-observed Post quality direction was retained.

## Alternative hypotheses tested or rejected

- A pressure-target cap of four reduced volume further, but selected scores
  worsened by roughly 7–17% across representative cells. It is not a quality-
  preserving first prototype.
- Shortening presentation repair rounds reduces only the already-bounded
  repair portion and leaves the relaxation volume intact. It is a secondary
  tuning lever, not the main acceleration direction.
- The existing cheap lower bound rejected zero representative candidates.
- Incremental replay was not exact in prior audit evidence and remains unsafe
  to use as a release reuse authority.

The omitted 6-unit pass is therefore the smallest structural change that
removes a meaningful fraction of residual work while retaining the same
downstream presentation evaluator for every admitted candidate.

## Quality-preservation boundary

The machine result is encouraging but incomplete. Because selected positions
change, the previous Actual Product human acceptance of finalist limit 2 does
not automatically transfer to omit-fine. A new human comparison of current,
limit-2, and omit-fine is required, with Lighthouse EN first because of its
large position delta, followed by Lighthouse JA and Titanic EN/JA. Apollo
EN/JA remain useful follow-up coverage. No human visual PASS is claimed by
this checkpoint.

Routing, Relation-label placement, Self-loop, connector, and glyph/CSS output
remain downstream Product authorities. The prototype only changes which Node
positions are admitted by the diagnostic search; it does not absorb those
responsibilities. Any shared long-label, parallel-edge, Self-loop, or
connector behavior remains a presentation-track observation.

## Decision

```text
Stage-2 dominant residual cost       = single-node relaxation candidate volume
adopted reduction hypothesis         = omit final 6-unit refinement pass
machine volume reduction             = ESTABLISHED, approximately 21–32%
runtime reduction                    = OBSERVED, approximately 23–38% in paired runs
selected-family retention            = YES in all six measured cells
exact position reuse                 = NO
human quality retention              = UNCONFIRMED
prototype disposition                = RETAIN AS DIAGNOSTIC RESEARCH PROBE
next direction                       = ACTUAL PRODUCT HUMAN REVIEW, then adaptive fine-pass design
Initial Layout Release blocker       = STILL BLOCKED
Product default adoption             = HOLD
Product default behavior             = UNCHANGED
```

The public-sample planning target of roughly 2 seconds remains unmet: omit-fine
runs still occupy approximately 6–10 seconds in the representative paired
measurements. It is not a Release candidate until the visual gate is satisfied
and a further bounded reduction approaches the target without sacrificing the
Post direction.

## Preserved boundaries

- No Product default or normal Dataset-open authority was changed.
- Stored/mixed/coordinate-less authority, Derived ownership, dirty-state, Save
  Coordinates, same-payload reopen, and fallback semantics are unchanged.
- Coarse remains parked and is not restored as the quality authority.
- Canonical fixtures, historical Fresh evidence, Fresh12 canonical Human
  Review, and governed lineage are unchanged.
- No presentation defect was fixed, and no push, tag, release, deploy, or
  publication was performed.

