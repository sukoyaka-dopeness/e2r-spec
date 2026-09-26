# LiaisonScape Initial-Layout Post Evaluation-Count Reduction 3

Date: 2026-09-12

Status: ADAPTIVE RETENTION PROMISING FOR HUMAN REVIEW; QUALITY-PRESERVING PASS NOT ESTABLISHED; RELEASE BLOCKER REMAINS

## Scope and hypothesis

This checkpoint follows Evaluation-Count Reduction 2. The retained CR2 arm is
the authoritative reference:

```text
E2R_PRESENTATION_FINALIST_LIMIT=2
E2R_RELAXATION_STEP_MODE=omit-fine
E2R_PRESENTATION_GEOMETRY_CACHE=1
E2R_PRESENTATION_EXACT_CANDIDATE_REUSE=1
original sequential candidate order
full presentation evaluation for every hard-feasible candidate
```

The bounded hypothesis is that fixed top-2 retention can be made less
fixture-sensitive while preserving the original sequential candidate order.
The prototype retains top-2 candidates plus the existing dependency-risk
guard. It widens to top-4 when either the rank-2/rank-3 cheap-score boundary
has relative margin at most `0.10`, or an accepted move has changed the
current state and the remaining group is reranked. The mode is diagnostic-only:

```text
E2R_RELAXATION_PRIORITIZATION=adaptive-cheap-ranking
E2R_RELAXATION_ADAPTIVE_MARGIN=0.10
```

The cheap signal is a retention aid, never the quality authority. Full
presentation remains authoritative. No Product provider, default behavior,
stored/mixed/coordinate-less authority, persistence behavior, or downstream
presentation ownership changed.

## Matched audit boundary

Four arms were compared on canonical Lighthouse EN/JA, Titanic EN/JA, and
Apollo EN/JA payloads:

| Arm | Order | Retention | Role |
| --- | --- | --- | --- |
| CR2 | original sequential | full | authoritative reference |
| fixed top-2 | original sequential | fixed top-2 + risk guard | ECR2 comparison |
| adaptive audit | original sequential | adaptive policy labelled, full evaluated | matched recall audit |
| adaptive prototype | original sequential | adaptive policy, skipped candidates | count-reduction probe |

The adaptive audit full-validates every state-feasible candidate while keeping
the adaptive retain set as a label. It reproduced CR2's selected family,
selected score, accepted trajectory, selected presentation digest, and full
evaluation count in all six cells. This confirms that the state-local audit
does not alter the original-order full-evaluation path. Prototype skips are
not treated as known non-improvements.

## Count and runtime result

These are sequential diagnostic samples under the retained CR2 settings.
`full` is the total full presentation-evaluation count; `post` is the
relaxation-local count. Runtime values are milliseconds.

| Fixture / locale | CR2 full / post | Fixed top-2 full / post | Adaptive full / post | E2E CR2 -> adaptive | Stage 2 CR2 -> adaptive |
| --- | ---: | ---: | ---: | ---: | ---: |
| Lighthouse EN | 226 / 144 | 173 / 84 | 198 / 111 | 4,470 -> 4,121 | 3,232 -> 2,857 |
| Lighthouse JA | 232 / 147 | 172 / 81 | 196 / 107 | 4,385 -> 3,886 | 3,166 -> 2,643 |
| Titanic EN | 272 / 187 | 153 / 62 | 192 / 105 | 5,170 -> 3,637 | 4,016 -> 2,525 |
| Titanic JA | 279 / 194 | 178 / 87 | 190 / 104 | 4,606 -> 3,294 | 3,380 -> 2,158 |
| Apollo EN | 245 / 141 | 143 / 36 | 172 / 69 | 2,977 -> 2,228 | 1,849 -> 1,155 |
| Apollo JA | 237 / 132 | 154 / 47 | 182 / 78 | 2,791 -> 2,368 | 1,767 -> 1,297 |

Adaptive full-evaluation reduction was 12.4%, 15.5%, 29.4%, 31.9%, 29.8%,
and 23.2% respectively. It reduces less than fixed top-2, but retains more
candidate work where the policy detects state uncertainty. End-to-end runtime
improved in this sample, but remains above the roughly-two-second feasibility
target for most cells. The target remains a planning target, not a pass
criterion.

Adaptive widening occurred 32, 32, 29, 14, 17, and 23 times. Accepted-state
reranks occurred 25, 25, 23, 11, 13, and 15 times. This confirms that the
prototype is state-local rather than a renamed one-shot ranking.

## Retention recall

Recall below comes only from the matched adaptive audit. It is the fraction of
full-improving candidates retained by the adaptive policy. Accepted-move
retention recall is equal here because each full improvement is accepted in
the audit. Unknown prototype skips are excluded from the denominator.

| Fixture / locale | Full-improving retention recall | Accepted-move retention recall | Top-2 rank recall | Top-4 rank recall |
| --- | ---: | ---: | ---: | ---: |
| Lighthouse EN | 76.7% | 76.7% | 20.0% | 63.3% |
| Lighthouse JA | 85.2% | 85.2% | 29.6% | 66.7% |
| Titanic EN | 73.7% | 73.7% | 44.7% | 81.6% |
| Titanic JA | 52.9% | 52.9% | 23.5% | 52.9% |
| Apollo EN | 76.9% | 76.9% | 76.9% | 84.6% |
| Apollo JA | 82.4% | 82.4% | 64.7% | 82.4% |

Adaptive retention improves recall over the fixed top-2 audit in every cell
and materially improves Titanic JA, but that cell remains the weakest at
52.9%. This is evidence for continued bounded research, not a proof of safe
pruning.

## Selected result and quality evidence

Adaptive improved the fixed top-2 selected score in all six cells, but did not
match CR2 in every cell:

| Fixture / locale | CR2 score | Fixed top-2 score | Adaptive score | Adaptive vs CR2 / fixed |
| --- | ---: | ---: | ---: | ---: |
| Lighthouse EN | 49,194.54 | 51,208.75 | 50,185.66 | +2.0% / -2.0% |
| Lighthouse JA | 31,488.90 | 31,506.10 | 31,484.58 | -0.0% / -0.1% |
| Titanic EN | 1,546.11 | 1,734.18 | 1,697.23 | +9.8% / -2.1% |
| Titanic JA | 1,079.73 | 1,134.80 | 1,127.75 | +4.4% / -0.6% |
| Apollo EN | 1,014.25 | 1,025.98 | 1,013.96 | -0.0% / -1.2% |
| Apollo JA | 992.92 | 1,050.09 | 1,007.31 | +1.5% / -4.1% |

The adaptive prototype changed the selected presentation digest and accepted
trajectory in all six cells. The adaptive digest prefixes were
`dd80b934`, `b66c8fe8`, `766ce8b5`, `933102bd`, `f31a4ae0`, and `a905475a`.
Therefore this is a search-behavior change and cannot be called CR2-equivalent
from machine metrics alone.

All six adaptive outputs reported zero crossings, zero `labelRouteHits`, zero
`labelNear20`, zero `labelOverlap`, and zero Node-body overlap. Extent,
fitScale, route median, and route maximum still changed. Titanic EN, for
example, changed from CR2 extent `744.4 x 570.9`, fitScale `0.4851`, and route
median/max `297.3 / 622.6` to adaptive extent `816.7 x 600.6`, fitScale
`0.4635`, and route median/max `320.8 / 686.0`.

No Actual Product human visual acceptance was performed in this checkpoint.
Because the selected output changes, the candidate requires human review of
Node cohesion, spacing, spread, viewport fit, Node/Relation-label readability,
and candidate-only regressions before any use.

## Decision

```text
adaptive retention                 = CONTINUE
full evaluation reduction          = 12.4%--31.9%
matched retention recall           = 52.9%--85.2%
fixed top-2 comparison             = adaptive score improved in all six cells
CR2 quality comparison             = mixed; Titanic EN remains +9.8% score
selected result                    = CHANGED in all six adaptive prototype cells
machine quality                    = PROMISING RELATIVE TO FIXED TOP-2, NOT CR2-EQUIVALENT
human visual review                = REQUIRED; candidate is READY FOR ACTUAL PRODUCT HUMAN REVIEW
roughly-two-second target          = NOT ESTABLISHED
Initial Layout Release blocker     = STILL BLOCKED
Product default behavior           = UNCHANGED
Product default adoption           = HOLD
```

The next checkpoint may perform Actual Product human review of this
diagnostic candidate. It must not infer PASS from the matched audit, hard
metrics, or machine score. If the human review rejects the changed spread or
label readability, adaptive retention should be retuned or replaced rather
than widened indiscriminately.

## Preserved boundaries

- Original sequential candidate order is preserved by the adaptive prototype.
- Full presentation remains the quality authority.
- Product default initial placement and Product adoption are unchanged.
- `post-structural-relaxation-v1` remains diagnostic and is not connected to
  the normal Product open path.
- No Post equivalence, coarse equivalence, or Actual Product acceptance was
  claimed.
- Stored, mixed, coordinate-less, Derived, dirty-state, Save Coordinates,
  same-payload reopen, and fallback semantics are unchanged.
- Routing, Relation-label, Node-label, Self-loop, connector, glyph, and CSS
  authority remain downstream presentation responsibilities.
- No known presentation defect was fixed, and no App.tsx refactor was done.
- Canonical fixtures, historical Fresh evidence, Fresh12 canonical Human
  Review, and governed lineage were not changed.
- No push, tag, release, deploy, or publication was performed.
