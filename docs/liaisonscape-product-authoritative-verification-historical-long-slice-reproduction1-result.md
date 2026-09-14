# LiaisonScape Product-authoritative Verification Historical Long-slice Reproduction / Same-run Source-step Attribution 1

Date: 2026-09-14

## Question

The preceding attribution checkpoint established current short Route,
Relation-label, and Node-label work units but could not map the historical
`49.7ms`, `53.4ms`, and `83.9ms` scheduled slices because the old artifacts did
not record source-step identity. This checkpoint repeats the browser study
with the scheduler turn and source step recorded in the same run. The goal is
to distinguish an authoritative work-unit outlier, a phase-transition
outlier, diagnostic instrumentation, an event-loop gap, or a mixed/unknown
case.

This remains diagnostic research. It does not change `App.tsx`, Product
defaults, persistence, Dataset safety, manual placement, routing authority,
label semantics, Self-loop routing, Worker/provider selection, or Product
output.

## Measurement boundary

The existing source-faithful full-verification state machine was used with the
one-unit baseline scheduler policy. Every scheduler turn records its start,
end, elapsed time, source-step count, source-step identity, phase, kind,
authority, source-step sum, and residual scheduler gap. Source-step authority
is classified as Route, Relation-label, Node-label, or orchestration. The
same run also records diagnostics mode, semantic equivalence to the direct
reference, and normalized trace equivalence when diagnostics are enabled.

The bounded campaign used three page reload cycles, five existing browser
controls, and four attribution conditions per control: diagnostics-off first,
diagnostics-off repeat, diagnostics-on first, and diagnostics-on repeat. This
is 60 attribution runs. The first/repeat pair is a warm-up comparison, not a
portable cold-start guarantee. The existing four-policy scheduler study was
not expanded; this checkpoint only attributes the already established
one-unit baseline.

The fixed artifact is
[`browser-result-summary.json`](../../e2r-liaison-scape/experimental/verification-long-slice-reproduction1/browser-result-summary.json).

## Evidence

All 60 attribution runs completed with semantic equivalence. All 30
diagnostics-on runs also completed with normalized trace equivalence.

| measure | campaign maximum |
| --- | ---: |
| scheduler turn | `16.2ms` |
| source-step sum | `16.2ms` |
| scheduler gap | `0.1ms` |
| authoritative Route work unit | `5.1ms` |
| Relation-label source step | `1.8ms` |
| Node-label source step | `16.2ms` |
| orchestration source step | `7.1ms` |
| `>=16ms` turns | `1` |
| `>=50ms` turns | `0` |

The single `16.2ms` observation occurred on the dense control, diagnostics-on,
first run, at turn `149`. It was the
`initialize-first-node-label` phase transition. Its source-step elapsed time
was also `16.2ms` and its scheduler gap was `0ms`. Therefore this observation
is a phase-transition outlier (classification B), not an event-loop-gap
outlier. Diagnostics-on was part of the observation, but the evidence does
not isolate instrumentation as the sole cause: the same Node-label
initialization transition is already the dominant source step in diagnostics-
off dense runs.

The historical `49.7/53.4/83.9ms` slices were not reproduced in the bounded
campaign. They remain valid historical evidence, but their attribution stays
mixed/unknown (classification E) because the original artifacts lack the
same-run source-step, diagnostics, and gap fields. No current authoritative
work-unit outlier reached `16ms` or `50ms`, and the measured scheduler gap was
never a material share of the maximum turn.

## Control behavior

| control | role | max turn off/on | max work unit off/on | result |
| --- | --- | ---: | ---: | --- |
| canonical lighthouse | canonical | `4.2/4.1ms` | `2.5/2.5ms` | no outlier |
| dense k7-7 | dense topology | `13.1/16.2ms` | `3.2/5.1ms` | one phase-transition outlier |
| parallel pressure | shared endpoint / bundle | `4.7/4.6ms` | `4.4/4.6ms` | no outlier |
| long-label pressure | label-heavy | `3.2/3.2ms` | `1.2/1.7ms` | no outlier |
| self-loop pressure | Self-loop-heavy | `5.9/6.3ms` | `2.3/3.5ms` | no outlier |

The campaign supports bounded source-step attribution for current runs, not a
Product-wide runtime guarantee. The dense Node-label initialization path is
the remaining local budget concern, but it is an orchestration boundary and
not evidence for arbitrary micro-splitting of authoritative geometry work.

## Decisions

### Historical long-slice attribution

`49.7/53.4/83.9ms` was not reproduced within the bounded campaign. The result
is therefore not a retroactive explanation of the historical runs. The
current evidence is:

* no authoritative Route, Relation-label, or Node-label work-unit outlier at
  the preferred `16ms` threshold;
* one `16.2ms` Node-label initialization phase transition;
* no `>=50ms` turn;
* no material scheduler/event-loop gap;
* diagnostics-on increases observation cost in some cases, but does not by
  itself explain the historical slices.

### Micro-splitting and scheduler policy

No new scheduler policy search and no authority-preserving micro-split were
added. The current one-edge, one-routed-edge, and one-Node authority seams
remain the smallest evidence-backed units. Splitting the Node-label
initialization transition would be an unproven orchestration change, not a
demonstrated fix for a reproducible authoritative geometry bottleneck.

The Product-wide verification budget, preferred approximately `16ms` slice,
and hard `50ms` ceiling remain `NOT ESTABLISHED`.

### Responsibility and release status

* Route, Relation-label, and Node-label geometry remain Product-owned.
* Ordinary routing, Parallel / Incident allocation, endpoint-plan authority,
  final Relation-label placement, and Self-loop routing remain at their
  existing authorities.
* Fast deterministic Initial Placement plus explicit High-quality Auto Layout
  remains `PROVISIONALLY ADOPT` as an execution-architecture direction.
* Quality solver remains `HOLD / NOT ESTABLISHED`.
* Product integration/default remains `HOLD`.
* Production provider remains `NOT ESTABLISHED`.
* Adaptive Initial Placement Cascade remains `INACTIVE`.
* Human Review remains `NOT READY`.
* Initial Layout Release blocker remains `OPEN`.

No Actual Product visual smoke check was required. The browser campaign only
measured diagnostic full-verification execution and exposed no Product state,
rendering, or interaction change; diagnostic output is not treated as Product
visual acceptance.

## Validation

* `node tools/verification-long-slice-reproduction-audit.mjs` — PASS
* fixed Edge 152 campaign — 3 reload cycles, 5 controls, 60 attribution runs
* semantic equivalence — `60/60 PASS`
* diagnostics-on normalized trace equivalence — `30/30 PASS`
* full LiaisonScape test suite, lint, build, and E2R specification validation
  are run after this artifact and document update
* session log remains intentionally unchanged

## Disposition

`HISTORICAL LONG-SLICE NOT REPRODUCED / CURRENT SAME-RUN ATTRIBUTION
ESTABLISHED / ONE PHASE-TRANSITION OUTLIER OBSERVED / EVENT-LOOP GAP NOT
MATERIAL / MICRO-SPLIT NOT JUSTIFIED / PRODUCT-WIDE VERIFICATION BUDGET NOT
ESTABLISHED`.

This checkpoint does not advance Human Review and does not adopt a production
scheduler, Worker/provider, Product default, quality solver, or Adaptive
Initial Placement Cascade.
