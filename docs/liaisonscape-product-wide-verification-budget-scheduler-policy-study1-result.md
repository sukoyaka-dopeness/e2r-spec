# LiaisonScape Product-wide Verification Budget Closure / Scheduler Policy Study 1

Date: 2026-09-14

Status: **EXACT POLICY EQUIVALENCE ESTABLISHED / ELAPSED-QUOTA POLICY PROMISING / PRODUCT-WIDE BUDGET NOT ESTABLISHED / MAIN-THREAD PRODUCTION CANDIDATE NOT ESTABLISHED / NOT READY FOR HUMAN REVIEW**

## Decision

The established full-verification state machine can batch its existing ordered
work units without changing the current Product-authoritative result or
normalized diagnostic trace. A soft elapsed-time quota reduced scheduler turns,
cooperative wall time, and observed scheduler overhead in two repeated Edge
runs. It is not a hard slice contract: it can overshoot, cancellation may wait
for many small units in one batch, and earlier full-verification runs still
recorded `49.7ms`, `53.4ms`, and `83.9ms` slices.

The checkpoint therefore establishes the scheduler-policy seam, but does not
establish a Product-wide verification budget:

```text
policy composition: ESTABLISHED
exact semantic/trace preservation: ESTABLISHED ON FIVE CONTROLS
turn/wall/overhead reduction: OBSERVED
cancellation / budget fail-closed: ESTABLISHED
elapsed-eight-ms: PROMISING DIAGNOSTIC POLICY
preferred 16ms target: NOT PRODUCT-WIDE
hard 50ms ceiling: NOT ESTABLISHED PRODUCT-WIDE
Product-wide verification budget: NOT ESTABLISHED
```

Standing flags remain unchanged: quality solver `HOLD / NOT ESTABLISHED`,
Product integration/default `HOLD`, production provider `NOT ESTABLISHED`,
Adaptive Cascade `INACTIVE`, Initial Layout Release blocker `OPEN`, and Human
Review `NOT READY`. Fast deterministic Initial Placement plus explicit
High-quality Auto Layout remains `PROVISIONALLY ADOPT` as an execution
direction only.

## Scope and authority

The study adds an experimental scheduler wrapper around the existing full
verification accumulator. It does not change routing, occupied-path semantics,
Parallel/Incident or Self-loop authority, Relation-label or Node-label
placement, endpoint-plan authority, feedback semantics, Dataset, coordinates,
dirty-state, persistence, viewport authority, or `App.tsx`.

The synchronous `deriveBoundedAutomaticPresentation()` remains the semantic
reference. A scheduler turn only chooses how many already-ordered accumulator
steps execute before yielding. It does not reorder candidates, skip collision
checks, substitute a cheap proxy, or publish a partial presentation.

## Policies tested

| policy | rule | intended property |
| --- | --- | --- |
| `one-unit` | one source step per turn | existing baseline |
| `fixed-two` | at most two source steps per turn | deterministic batching and bounded cancellation work |
| `elapsed-eight-ms` | continue to a soft 8ms turn quota | lower timer/message overhead |
| `hybrid-eight-ms-two-units` | 8ms soft quota plus two-unit cap | conservative batching |

The elapsed quota is explicitly soft. A current work unit or phase transition
may exceed it. A work-count bound is deterministic, while a wall-time quota is
only a yield target unless the current operation is itself preemptible.

## Exact-equivalence evidence

All four policies completed all five controls in both Edge runs: canonical
Lighthouse, dense `k7-7`, parallel pressure, long-label pressure, and self-loop
pressure. Every policy reported exact semantic and normalized diagnostic-trace
equivalence. The focused Node suite also compares the batched policy with the
synchronous authority.

Short-timer cancellation stopped at a scheduler boundary for every
policy/control pair and exposed no partial Product result. Work-unit budget
exhaustion is fail-closed in the focused test and keeps the result private.

## Real-browser evidence

The fixed aggregate is
`e2r-liaison-scape/experimental/scheduler-policy1/browser-result-summary.json`.
The second Edge run gives these ranges across the five controls:

| policy | runtime turns | cooperative max step | cooperative max wall | cooperative max overhead | max cancellation work |
| --- | ---: | ---: | ---: | ---: | ---: |
| `one-unit` | 78--281 | 10.6ms | 1660.6ms | 1333.9ms | 1 |
| `fixed-two` | 39--141 | 6.3ms | 879.8ms | 670.8ms | 2 |
| `elapsed-eight-ms` | 2--18 | 9.0ms | 232.3ms | 86.5ms | 45 |
| `hybrid-eight-ms-two-units` | 39--141 | 6.0ms | 863.8ms | 663.7ms | 2 |

`elapsed-eight-ms` was the strongest observed wall/overhead reducer. Its dense
control completed in about `232.3ms` with `86.5ms` overhead, compared with
`1660.6ms` and `1333.9ms` for one-unit turns. It reduced dense turns from `281`
to `18` in that run. This is harness evidence, not a production SLA.

Its cancellation tradeoff is explicit: the second run completed up to `45`
small work units before observing timer cancellation, with maximum cancellation
elapsed time about `18.3ms`. Fixed-two and hybrid cap cancellation work at two
units but retain considerably more scheduler overhead.

The second-run elapsed policy also reached an `11.0ms` direct runtime turn
despite the 8ms target. This confirms soft-quota overshoot. The earlier
full-verification `49.7ms`, `53.4ms`, and `83.9ms` observations remain valid
and are preserved in the artifact; the new warm runs do not erase them.

## Compute, instrumentation, and phase transitions

Each policy was run with diagnostic sinks enabled for exactness and again with
sinks disabled for runtime-cost measurement. The paired instrumentation delta
varied from roughly `4.5ms` to `60.5ms` in the retained aggregates. This shows
that trace/dependency instrumentation is non-free, but the delta is not a
universal correction because browser/JIT variance and run order contribute.

Phase transitions remain measured rather than free: initialization,
yielding-route derivation, feedback preparation, snapshot/fingerprint work,
and finalize are part of the turn budget. The policy run was warm, but earlier
full-verification evidence recorded transition samples around `40.7ms`; no
phase-transition hard ceiling is claimed.

## Policy conclusion and remaining blocker

`elapsed-eight-ms` is the best next diagnostic policy because it reduced turns,
wall time, and overhead most strongly in both current runs while keeping
observed cooperative steps near 8--11ms. It is not a production contract: it
does not bound a long current work unit and weakens cancellation work bounds.

`fixed-two` and `hybrid-eight-ms-two-units` are conservative controls that halve
turn count and bound cancellation work, but their wall/overhead reduction is
smaller. `one-unit` remains the baseline.

No tested policy closes the Product-wide budget without a further
authority-preserving micro-splitting question for current work units or long
phase transitions. That micro-splitting was not implemented here. Do not build
a quality solver, expand candidate search, retune routing/labels, select a
Worker provider, change Product defaults, activate Adaptive Cascade, or advance
Human Review from this evidence.

The scheduler supports deterministic work-unit/turn limits and a maximum
wall-time fail-closed boundary. Cancellation and exhaustion keep intermediate
state private and do not mutate Product presentation, Dataset, geometry,
dirty-state, or persistence. The lifecycle contract remains responsible for
snapshot identity, generation/stale rejection, preview isolation,
accept/reject, revert, and persistence.

The pure accumulator data is Worker-compatible in principle, but this study
does not decide Worker architecture or provider adoption. If a stable
main-thread ceiling cannot be established after a bounded micro-splitting
study, a separate Worker architecture gate may be justified.

No visible Product behavior changed, so no Actual Product smoke check or Human
Review candidate was applicable. No cross-repository knowledge candidate was
added, and the session log was not updated.

## Artifacts and validation

Added or changed:

- `e2r-liaison-scape/experimental/scheduler-policy1/prototype.mjs`;
- `e2r-liaison-scape/experimental/scheduler-policy1/browser-result-summary.json`;
- `e2r-liaison-scape/experimental/verification-interruptibility1/browser-main.ts`;
- `e2r-liaison-scape/experimental/full-verification1/prototype.mjs`;
- `e2r-liaison-scape/tests/scheduler-policy.test.ts`;
- `e2r-liaison-scape/tools/scheduler-policy-audit.mjs`;
- this checkpoint document and the roadmap entry.

The session log and historical result documents were not changed. No commit,
push, tag, release, deploy, publish, or provider adoption was performed.
