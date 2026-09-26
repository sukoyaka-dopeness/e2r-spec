# LiaisonScape Initial-Layout Post Performance Attribution / Acceleration 1

Date: 2026-09-11

Status: ACCELERATION PROBE PROMISING; RELEASE CANDIDATE NOT ESTABLISHED

## Scope and boundary

This checkpoint profiles the existing diagnostic
`post-structural-relaxation-v1` evaluator and tests its existing finalist-limit
configuration as the smallest bounded acceleration probe. It does not connect
Post to the Product default path, change the coarse provider, move routing or
Relation-label authority into Initial Layout, or change Dataset/persistence
semantics.

The measurements use `tools/generic-crossing-search.mjs` with the same
presentation evaluator and search contract. `E2R_PRESENTATION_FINALIST_LIMIT=8`
is the existing baseline and `=2` is the probe. The probe is diagnostic only;
it is not a Product provider or an equivalence claim.

## Measured cost attribution

Representative baseline runs show that full presentation evaluation dominates
wall time. The structural/grid stage evaluated 19,216 cheap candidates in each
run, but the expensive stage was the repeated Product presentation evaluation
of the finalist and relaxation candidates.

| Fixture / locale | Nodes / visible edges | Wall time | Presentation time | Presentation calls / full evaluations | Stage 1 full / Stage 2 full |
| --- | ---: | ---: | ---: | ---: | ---: |
| Apollo EN | 9 / 11 | 7,169 ms | 6,954 ms | 469 / 453 | 60 / 393 |
| Apollo JA | 9 / 11 | 6,884 ms | 6,649 ms | 453 / 436 | 60 / 376 |
| Lighthouse EN | 10 / 14 | 11,161 ms | 11,025 ms | 483 / 467 | 44 / 423 |
| Lighthouse JA | 10 / 14 | 10,429 ms | 10,294 ms | 439 full* | —* |
| Titanic EN | 13 / 12 | 13,599 ms | 13,485 ms | 514 / 494 | 44 / 450 |
| Titanic JA | 13 / 12 | 12,742 ms | 12,618 ms | 558 / 543 | 44 / 499 |

`*` The compact retained Lighthouse JA profile recorded 439 full evaluations;
the stage split was not retained in that log. Small variation between runs is
expected because the diagnostic search performs substantial candidate work.

Presentation evaluation accounts for approximately 97–99% of elapsed time in
these runs. Exact-position memoization had only 15–20 cache hits per run while
hundreds of candidate states were evaluated, so cache reuse alone is not a
credible first acceleration.

The observed scaling is not determined by node count alone. Apollo's 9-node
cases complete in roughly 6.9–7.2 seconds, while the 10-node Lighthouse and
13-node Titanic cases take roughly 10.4–13.6 seconds. Relation count, label
geometry, route feedback, accepted relaxation moves, and locale-dependent text
all affect the cost of each presentation evaluation.

## Tested reduction hypotheses

### Existing cheap screen

Enabling `E2R_RELAXATION_CHEAP_SCREEN=on` on Titanic EN considered 268
relaxation candidates and rejected zero. It therefore produced no meaningful
reduction on this representative input. The current lower bound is not yet a
useful pruning authority.

### Incremental presentation replay

The dependency-trace audit on Titanic EN compared the existing incremental
replay with a full recomputation for 268 relaxation candidates. Only 71 were
exact; 197 differed, with the first mismatch attributed to route geometry.
The replay-only work was approximately 5.93 seconds versus 6.45 seconds for
the audited full work, before accounting for audit overhead. This is neither
an exactness-preserving nor a sufficiently demonstrated end-to-end release
optimization. It remains research material, not an adopted cache/reuse path.

### Finalist-limit probe

Reducing the existing presentation finalist limit from 8 to 2 removes many
expensive stage-2 evaluations while retaining the same downstream evaluator.

| Fixture / locale | Baseline limit 8: wall / full / presentation | Probe limit 2: wall / full / presentation | Selected result observation |
| --- | ---: | ---: | --- |
| Apollo EN | 8,789 / 453 / 8,496 ms | 6,163 / 310 / 5,884 ms | Selected Post family and score unchanged |
| Apollo JA | 8,541 / 436 / 8,239 ms | 5,931 / 294 / 5,635 ms | Selected Post family and score unchanged |
| Lighthouse EN | 13,817 / 467 / 13,647 ms | 8,366 / 290 / 8,193 ms | Selected Post family; score worsened about 5.3% |
| Lighthouse JA | 10,429 / 439 / 10,294 ms | 6,988 / 296 / 6,858 ms | Selected score unchanged |
| Titanic EN | 13,599 / 494 / 13,485 ms | 9,749 / 353 / 9,628 ms | Selected Post family and reported metrics unchanged |

Across these probes, wall time fell approximately 28–39% and full
presentation evaluations fell approximately 29–38%. Crossing and label-hit
counts remained zero in the reported selected results, but those machine
metrics do not establish visual equivalence. Lighthouse EN is a concrete
counter-signal: the reduced finalist set changed the selected score in the
wrong direction even though the selected family remained Post.

## Quality attribution and unresolved human review

The quality-critical signal is not just Node spacing. The full Post objective
uses the downstream presentation pipeline, including routed Edge geometry,
Relation-label corridors and recovery, and related pressure/feedback metrics.
The earlier controlled comparison established that Post's human preference is
presentation-coupled and that coarse geometry alone is mixed/insufficient.

The finalist-limit probe preserves that evaluator but changes which candidates
reach it. Consequently, unchanged aggregate crossing/label metrics cannot
prove that the probe preserves the human-observed Post benefit. A human must
still compare at least current, full Post, and finalist-limit-2 Post in the
same Actual Product presentation surface, with Lighthouse EN/JA as the first
review set and Titanic/Apollo as follow-up coverage. Relation-label, Self-loop,
and connector observations must remain attributed to downstream presentation;
they are not Initial Layout authority.

That Actual Product visual comparison was not performed in this checkpoint.
The existing human evidence supports full Post's preference over current, but
does not support a PASS for the accelerated candidate. Therefore no visual
quality claim, Post equivalence claim, or Release approval is made here.

## Acceleration direction

```text
dominant cost                         = repeated full presentation evaluation
exact-position cache alone            = insufficient evidence
current cheap lower bound              = ineffective on representative input
incremental replay                     = unsafe / not exact enough
finalist-limit-2 probe                 = most promising first bounded direction
accelerated Post visual quality        = UNCONFIRMED
research direction                     = HYBRID / STAGED PRESENTATION SEARCH
```

The next implementation hypothesis is to keep a cheap structural/occupancy
stage, admit only a small bounded finalist set, and run the existing
presentation-aware evaluator only on those finalists. The limit must remain an
explicit diagnostic or opt-in research parameter until human review confirms
that the selected candidates preserve the Post visual direction. The parked
coarse objective must not be restored as the final quality authority.

For release planning, the current 6–14 second startup range is not acceptable
for ordinary Product opening. A reasonable first feasibility target is a
graph-stable result below roughly 2 seconds for the 9–13-node public-sample
scale, with an explicit bounded fallback before that budget is exceeded. This
is a proposed target, not a pass criterion; larger/dense Dataset scaling and
human visual acceptance remain unresolved.

## Decision and preserved boundaries

```text
measured Post cost attribution       = ESTABLISHED
quality-critical downstream signal   = ROUTING / LABEL / PRESENTATION COUPLED
removable/reusable cost              = STAGE-2 CANDIDATE VOLUME, conditionally
best first acceleration hypothesis   = BOUNDED FINALIST PRUNING / HYBRID SEARCH
prototype status                     = DIAGNOSTIC LIMIT-2 PROBE ONLY
accelerated visual acceptance        = UNCONFIRMED
Initial Layout Release blocker      = STILL BLOCKED
Product default adoption             = HOLD
Product default behavior             = UNCHANGED
```

No Product default, stored/mixed/coordinate-less authority, Derived ownership,
dirty-state, Save Coordinates, same-payload reopen, fallback contract, or
presentation authority was changed. No canonical fixture, historical Fresh
evidence, Fresh12 canonical Human Review, or governed lineage was changed. No
known routing/label/Self-loop/connector defect was fixed. No push, tag,
release, deploy, or publication was performed.
