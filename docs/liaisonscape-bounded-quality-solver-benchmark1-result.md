# LiaisonScape Bounded Quality-Solver Benchmark 1

Date: 2026-09-14

## Question

The verification execution path now has a tested bounded envelope, so this
checkpoint asks a narrower question: can bounded Structural Placement
candidate families produce materially better Node geometry than the current
Fast Initial Placement, while a cheap structural screen retains the
Product-authoritative best candidates within a small finalist budget?

This is a benchmark checkpoint, not production solver implementation. It
does not change `App.tsx`, Product defaults, Dataset or persistence semantics,
manual placement, ordinary routing, Parallel / Incident allocation,
endpoint-plan authority, final Relation-label placement, Self-loop routing,
or provider selection.

## Authority and measurement boundary

Candidate generation is diagnostic-only. Candidate finalist evaluation uses
the current `generic-crossing-search` Product presentation source, including
the existing Route, Relation-label, Node-label, feedback, and current
presentation metrics. Cheap proxies do not replace that authority.

The benchmark retained these metrics for every Product-evaluated candidate:

* crossings and crossing/Relation-label proximity;
* route/Node-label hits and near-label pressure;
* label overlap and coarse label-corridor deficit;
* Node overlap and minimum separation;
* route median and maximum, viewport fit scale, and extent.

The scalar `metrics.score` was used only to form a bounded Product-best
ordering. The artifact retains the metric vector and Product top-K rows so
crossing/separation, label, route-length, and viewport tradeoffs remain
inspectable. No scalar result is treated as visual acceptance.

## Bounded campaign

The campaign contained 12 fixtures and 39 operations:

| workload | coverage |
| --- | --- |
| canonical | Lighthouse, Apollo, Titanic; EN and JA |
| dense | `k7-7`, `k6-8`, `k8-8`, `k5-9`, `k7-7-minus-one` |
| Product dense control | Apollo spacing-control fixture |
| Parallel / Self-loop | canonical Lighthouse/Titanic topology |
| label-sensitive | Japanese canonical fixtures |
| mixed | canonical and Product controls |

The arms were:

* `direct-current`: current Fast Initial Placement baseline;
* `structural-native-v3`: existing joint-constrained structural candidate
  family;
* `frontier-adaptive-12`: existing bounded cheap structural frontier
  representative family;
* `structural-native-discrete`: existing discrete feasibility-first family,
  limited to Lighthouse EN, Apollo EN, and dense `k7-7`.

The cheap screen ranked generated candidates by structural crossing signal,
minimum separation, coarse corridor deficit, and the existing cheap score.
The finalist budget was top-4. The screen is explicitly marked post-hoc in
the artifact: the current run still measures Product presentation for every
generated candidate so recall can be computed without changing Product
authority. A future production-shaped benchmark would need an implementation
that screens before Product evaluation and then proves the same recall.

Each operation had a 20-second process cap. No operation reached that cap in
the final run. The discrete family produced zero candidates on dense `k7-7`,
which is retained as a feasibility failure rather than converted into a
fallback winner.

The fixed diagnostic artifact is
[`benchmark-result-summary.json`](../../e2r-liaison-scape/experimental/quality-solver-benchmark1/benchmark-result-summary.json).
The reproducer is
[`quality-solver-benchmark1.mjs`](../../e2r-liaison-scape/tools/quality-solver-benchmark1.mjs).

## Evidence

All nine representative repeat checks for the non-baseline arms reproduced
the same selected position fingerprint. Among the 26 candidate operations
that produced at least one candidate:

| measure | result |
| --- | ---: |
| candidate operations with Product improvement vs baseline | `24/26` |
| cheap top-4 recall of Product-best candidate | `20/26` (`76.9%`) |
| cheap-screen false negatives | `6` |
| maximum generated candidates in one operation | `22` |
| maximum measured Product presentation evaluations | `22` |
| maximum measured presentation time | `4291.16ms` |
| discrete dense `k7-7` candidate count | `0` |

Arm-level evidence:

| arm | operations | improved | top-4 recall | max candidates | max Product evaluations |
| --- | ---: | ---: | ---: | ---: | ---: |
| structural-native-v3 | 12 | `10/12` | `8/12` | 12 | 12 |
| frontier-adaptive-12 | 12 | `12/12` | `10/12` | 22 | 22 |
| structural-native-discrete | 2 successful + 1 no-candidate | `2/2` successful | `2/2` successful | 12 | 12 |

The structural families frequently reduced Product-authoritative crossing
and label-pressure metrics versus the baseline. This improvement is not
uniformly attributable to every fixture: dense cases expose large metric
tradeoffs, and the frontier arm can retain more candidates than the intended
small finalist budget. Candidate diversity was real—up to 22 unique position
fingerprints—but diversity alone is not a quality result.

The six false negatives show that the cheap structural screen cannot yet be
treated as a production finalist selector. The current evidence does not
establish that a top-4 structural screen reliably retains the
Product-authoritative best candidate across canonical, dense, label, Parallel,
Self-loop, and mixed pressure.

## Candidate generation and budget interpretation

The current source faithfully measured all candidate presentations in this
diagnostic run. Therefore the measured Product presentation count is an
upper-bound observation for a future pre-screen implementation, not a claim
that a production solver has already reduced its Product verification cost.

The arms have materially different costs:

| arm | average wall time | maximum wall time | interpretation |
| --- | ---: | ---: | --- |
| direct-current | `296.1ms` | `501.95ms` | baseline one-candidate Product check |
| structural-native-v3 | `1220.9ms` | `2840.51ms` | bounded 7–12-candidate portfolio |
| frontier-adaptive-12 | `2869.3ms` | `7293.11ms` | up to 22 candidates; too wide for current finalist intent |
| structural-native-discrete | `2229.4ms` | `5588.32ms` | limited representative probe; one dense no-candidate result |

These are Node source-study wall observations, not browser main-thread
acceptance. They show that candidate generation and Product evaluation must be
budgeted together. The previous verification envelope does not make a
multi-candidate quality operation automatically affordable.

## Interpretation by responsibility

* Structural Placement: candidate Node geometry, structural separation,
  crossing-related signals, and coarse capacity/corridor signals remain
  diagnostic inputs only.
* Ordinary Product routing: remains authoritative for all finalist metrics.
* Parallel / Incident allocation and endpoint-plan: remain authoritative; no
  structural proxy is accepted as capacity success.
* Relation-label and Node-label final placement: remain Product-authoritative;
  label metrics are measured after current presentation evaluation.
* Self-loop routing: remains Product-authoritative; Self-loop cases are used
  as pressure controls, not transferred to Structural Placement.
* Dataset, coordinates, persistence, dirty-state, Save Coordinates, and
  manual semantics: unchanged.

No Actual Product visual smoke check was performed. The benchmark produced
diagnostic source metrics and did not establish a candidate ready for visual
acceptance. No Product appearance or interaction conclusion is claimed, and
no previous Human Review evidence is transferred.

## Classification

`B. QUALITY SOLVER FAMILY PROMISING BUT SCREENING UNSOLVED`

Basis:

1. Candidate families produced meaningful Product-authoritative metric
   improvements over Fast Initial Placement in 24 of 26 successful candidate
   operations.
2. The bounded deterministic frontier family retained real geometric
   diversity and improved all 12 controls in this run.
3. Cheap top-4 recall was only 20/26, leaving six false negatives.
4. Frontier candidate count reached 22 and maximum Product evaluation time
   reached 4291.16ms, so the finalist and verification budget is not yet
   production-shaped.
5. Discrete feasibility-first produced no candidate on dense `k7-7` in its
   limited probe; this is not evidence for a general discrete solver.

Therefore the quality-solver family is worth a further bounded screening
study, but the current benchmark does not justify production solver
selection, Product integration, a provider, Adaptive Cascade, or Human
Review. The next useful question is a separately bounded screening formulation
that improves recall and caps Product-authoritative finalist evaluation; it is
not a return to unrestricted search or a new placement authority.

## Status

* Fast deterministic Initial Placement + explicit High-quality Auto Layout:
  `PROVISIONALLY ADOPT` as execution-architecture direction.
* Quality solver: `HOLD / NOT ESTABLISHED`; family is benchmark-promising but
  screening remains unresolved.
* Product integration/default: `HOLD`.
* Production provider: `NOT ESTABLISHED`.
* Adaptive Initial Placement Cascade: `INACTIVE`.
* Human Review: `NOT READY`.
* Initial Layout Release blocker: `OPEN`.

## Validation

* `node tools/quality-solver-benchmark1.mjs` — PASS; 39 bounded operations,
  no operation exceeded the 20-second cap
* `node tools/quality-solver-benchmark-audit.mjs` — PASS
* focused quality-solver benchmark tests — PASS
* existing placement/presentation/verification audits remain unchanged and
  were not replaced by this benchmark
* session log remains intentionally unchanged

No knowledge candidate is promoted. This is repository-local diagnostic
evidence; it does not yet satisfy the workspace promotion rule for a reusable
cross-repository decision.
