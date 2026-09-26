# LiaisonScape Product-authoritative Verification Scaling Envelope / Main-thread Viability 1

Date: 2026-09-14

## Question

The preceding verification checkpoints established exact resumable authority
seams, same-run source-step attribution, and a current dense phase-transition
outlier, but did not establish a Product-wide verification budget. This
checkpoint measures how the current source-faithful verification cost scales
across bounded workload families and whether the existing synchronous Product
authority remains viable on the browser main thread within a declared tested
envelope.

This is diagnostic research only. It does not change `App.tsx`, Product
defaults, Dataset or persistence semantics, manual placement, routing,
Parallel / Incident allocation, endpoint-plan authority, final Relation-label
placement, Self-loop routing, or provider selection.

## Measurement boundary

The current synchronous Product authority remains the reference path. The
existing one-unit and elapsed-eight cooperative policies are measured as
diagnostic wrappers; no new scheduler policy or internal micro-split is
introduced. Diagnostics-off is the primary production-like measurement.
Diagnostics-on is retained for representative trace/equivalence sampling.
No partial Product result is exposed during cancellation or budget handling.

The browser campaign used six workload families, each with bounded small,
medium, and large cases:

| family | pressure model |
| --- | --- |
| sparse | chain growth, `E=N-1` |
| dense | edge density and occupied-path prefix growth |
| parallel | same-endpoint bundle growth |
| label-heavy | long English/Japanese-shaped label growth and count |
| Self-loop | loop count and owner reuse |
| mixed | ordinary edges plus parallel groups, labels, and Self-loops |

This produced 18 cases. The declared largest case was 24 Nodes / 80
Relations, with a maximum parallel bundle of 12, 16 Self-loops, and a
representative label length of 360 characters. This is a tested envelope, not
an arbitrary-size guarantee. The first/repeat and browser timing values are
measurement observations, not portable performance promises.

The first autorun exposed an invalid Self-loop fixture construction in the
new harness: a generated parallel index was compared against the wrong edge
identity, causing the route geometry guard to reject `self-loop-small`. The
harness generator was corrected before the fixed artifact was produced; the
final 18-case run completed. This was a diagnostic fixture-construction
correction and did not change Product source or Self-loop authority.

The fixed Edge 152 artifact is
[`browser-result-summary.json`](../../../e2r-liaison-scape/experimental/verification-scaling-envelope1/browser-result-summary.json).
The reproducible page and harness are
[`index.html`](../../../e2r-liaison-scape/experimental/verification-scaling-envelope1/index.html)
and
[`browser-main.ts`](../../../e2r-liaison-scape/experimental/verification-scaling-envelope1/browser-main.ts).

## Evidence

All 18 cases preserved staged, scheduler-off, and scheduler-on semantic
equivalence. All 18 diagnostics-on samples preserved normalized scheduler
trace equivalence.

| measure | campaign maximum |
| --- | ---: |
| Nodes / Relations | `24 / 80` |
| diagnostics-off total authoritative compute | `503.8ms` |
| diagnostics-off turn / source-step | `21.3ms` |
| diagnostics-on turn / source-step | `21.1ms` |
| scheduler gap | `0.1ms` |
| authoritative work unit | `6.8ms` |
| cooperative one-unit wall time | `2916.8ms` |
| cooperative elapsed-eight wall time | `766.9ms` |
| cooperative one-unit max scheduler step | `26.9ms` |
| cooperative elapsed-eight max scheduler step | `27.1ms` |
| source steps at or above `50ms` | `0` |

The only observed source-step value above the preferred approximately `16ms`
reference was `dense-large` at `21.3ms`. It was the
`initialize-first-node-label` / `initialize-feedback-node-label` phase
transition. No authoritative Route, Relation-label, or Node-label work unit
reached `16ms`; the largest recurring totals were instead aggregate dense
Route (`140.2ms`) and Relation-label (`61.9ms`) work across many short units.
The largest scheduler gap was only `0.1ms`, so this campaign did not identify
an event-loop gap as the scaling cause.

Dense edge/path occupancy is the dominant aggregate scaling driver. Node-label
initialization is the largest single phase transition at the upper dense case,
but it is not evidence that the existing one-Node authority seam should be
micro-split. The tested elapsed-eight wrapper reduced wall time for the dense
case, but its maximum scheduler step still exceeded the soft eight-millisecond
quota because a current unit is not hard-preemptible.

## Interpretation

### Main-thread viability

Within the tested bounded envelope, current verification completed on the
browser main thread, remained semantically exact, delivered cancellation
without partial Product output, and did not produce a `50ms` source-step or
turn. Therefore main-thread execution remains viable as a bounded direction
for this envelope.

This does not establish a Product-wide budget. Dense growth already crosses
the preferred approximately `16ms` phase-transition reference and reaches
about three seconds in the one-unit cooperative wall measurement at the
declared upper case. A larger graph, a different browser, colder startup, or
other Product state could exceed the envelope.

### Micro-splitting and Worker study

No new authority-preserving micro-split is justified. The observed exception
is a phase transition, not a reproducible long Route, Relation-label, or
Node-label authority unit. Splitting it would be an unproven orchestration
change and would not address the dominant aggregate dense Route/
Relation-label work.

The measured envelope does not by itself justify a Worker architecture study.
A future Worker study may become appropriate if a declared Product workload
exceeds this envelope, if the dense phase transition becomes reproducibly
interactive-blocking, or if Product-wide workload telemetry establishes a
larger supported graph class. None of those conditions is established here.

### Quality solver and Product integration

This checkpoint supports readiness to benchmark a future quality solver only
as an execution-budget input; it does not establish solver quality,
presentation acceptance, or Product integration. The quality solver remains
`HOLD / NOT ESTABLISHED`, Product integration/default remains `HOLD`, and the
production provider remains `NOT ESTABLISHED`.

No Actual Product visual smoke check was required. The page is a diagnostic
execution harness, and no Product rendering or interaction behavior changed.
Its output is not visual acceptance and does not create Human Review evidence.

## Decisions and status

* `VERIFICATION SCALING ENVELOPE ESTABLISHED` — within the 18-case bounded
  campaign.
* `MAIN-THREAD VIABLE WITHIN TESTED ENVELOPE` — with dense-large Node-label
  phase-transition qualification.
* `PHASE-TRANSITION SCALING BLOCKER IDENTIFIED` — only against the preferred
  approximately `16ms` reference, not a `50ms` source-step blocker.
* `SOURCE-STEP SCALING BLOCKER IDENTIFIED` — **not** established at `50ms`.
* `NO NEW MICRO-SPLIT JUSTIFIED`.
* `WORKER ARCHITECTURE STUDY JUSTIFIED` — **not** by this envelope.
* `PRODUCT-WIDE UNBOUNDED BUDGET NOT ESTABLISHED`.
* Fast deterministic Initial Placement plus explicit High-quality Auto Layout
  remains `PROVISIONALLY ADOPT` as an execution-architecture direction.
* Adaptive Initial Placement Cascade remains `INACTIVE`.
* Human Review remains `NOT READY`.
* Initial Layout Release blocker remains `OPEN`.

The bounded result does not adopt a scheduler, Worker/provider, quality
solver, Product default, or Adaptive Initial Placement Cascade.

## Validation

* `node tools/verification-scaling-envelope-audit.mjs` — PASS
* fixed Edge 152 campaign — 6 families × 3 levels, 18 cases
* semantic equivalence — `18/18 PASS`
* diagnostics-on normalized trace equivalence — `18/18 PASS`
* LiaisonScape lint and build — PASS
* LiaisonScape test suite — `480/480 PASS`
* E2R specification validation — run after this document and roadmap update
* session log remains intentionally unchanged

## Disposition

`VERIFICATION SCALING ENVELOPE ESTABLISHED / MAIN-THREAD VIABLE WITHIN
TESTED ENVELOPE / DENSE-LARGE NODE-LABEL PHASE TRANSITION EXCEEDS PREFERRED
16MS / NO 50MS SOURCE-STEP BLOCKER / NO NEW MICRO-SPLIT JUSTIFIED / WORKER
ARCHITECTURE STUDY NOT JUSTIFIED BY THIS ENVELOPE / PRODUCT-WIDE UNBOUNDED
BUDGET NOT ESTABLISHED`.
