# LiaisonScape Product-authoritative Full Verification Resumable Orchestration / Budget Closure 1

Date: 2026-09-14

Status: **FULL VERIFICATION RESUMABLE SEAM ESTABLISHED / EXACT EQUIVALENCE ESTABLISHED / PREFERRED SLICE NOT UNIFORM / PRODUCT-WIDE BUDGET NOT ESTABLISHED / NOT READY FOR HUMAN REVIEW**

## Decision

The existing Product-authoritative Route Selection, Relation-label, and
Node-label accumulators can be composed into one resumable orchestration while
preserving the current `deriveBoundedAutomaticPresentation()` dependency order
and exact result/trace semantics. This establishes the execution seam, not a
quality solver, Product provider, Worker decision, or Product adoption.

The browser evidence does not close a Product-wide budget. The preferred
approximately `16ms` slice is not uniform. The diagnostic approximately `50ms`
ceiling is also not established product-wide: earlier real-browser runs
observed scheduled slices of `53.4ms` and `83.9ms`, and the latest dense
cooperative completion reached a `49.7ms` scheduler step with about `5.60s`
elapsed wall time and `3.23s` scheduler overhead.

The disposition is therefore:

```text
FULL VERIFICATION RESUMABLE SEAM ESTABLISHED
EXACT END-TO-END EQUIVALENCE ESTABLISHED
CANCELLATION / BUDGET FAIL-CLOSED ESTABLISHED
PREFERRED 16MS SLICE NOT UNIFORM
PRODUCT-WIDE VERIFICATION BUDGET NOT ESTABLISHED
ORCHESTRATION BUDGET BLOCKER REMAINS OPEN
```

The standing architecture and safety flags remain unchanged:

- Fast deterministic Initial Placement + explicit High-quality Auto Layout:
  `PROVISIONALLY ADOPT` as an execution-architecture direction;
- quality solver: `HOLD / NOT ESTABLISHED`;
- Product integration/default: `HOLD`;
- production provider: `NOT ESTABLISHED`;
- Adaptive Initial Placement Cascade: `INACTIVE`;
- Initial Layout Release blocker: `OPEN`;
- Human Review: `NOT READY`.

## Source-first orchestration

The source review confirmed this dependency order in the current synchronous
authority:

```text
label-free route
  -> first route
  -> yielding-route derivation
  -> first Relation-label
  -> first Node-label
  -> feedback decision
  -> optional feedback route
  -> yielding-route derivation
  -> feedback Relation-label
  -> feedback Node-label
  -> finalize
```

The state machine in `src/graph-presentation.ts` composes the existing
Product-owned route, Relation-label, and Node-label accumulators. It retains an
immutable input snapshot, current phase, nested accumulators, completed pass
snapshots, yielding routes, feedback decision, profiler counters, and a result
that remains `null` until finalization. `deriveBoundedAutomaticPresentation()`
remains the synchronous reference authority; it was not replaced by a new
provider.

The natural resumable units are:

| authority | one scheduler work unit |
| --- | --- |
| Route Selection | one canonical ordered edge |
| Relation-label | one ordered routed edge |
| Node-label | one input-order Node |

Phase transitions are explicit. In particular, yielding-route derivation is an
orchestration transition between the completed route pass and Node-label
initialization; it is not silently treated as a free inner-loop unit. Feedback
decision is also a measured semantic boundary. This makes any transition that
contains remaining whole-pass work visible in the budget evidence.

## Exact-equivalence evidence

The diagnostic prototype compares the completed state-machine result with the
current synchronous result for the same immutable Product input. It compares
route geometry and authority metadata, Relation-label and Node-label maps,
feedback state, route/label diagnostics, dependency fingerprints, and pass
snapshots. Timing-only dependency `buildMs` is normalized because it is not
semantic; serialized dependency content, digest, and length remain exact.

Focused tests pass for completed feedback and no-feedback paths, cancellation
at scheduler boundaries, direct state cancellation, budget exhaustion, and
authority/provider separation. The latest Edge run also matched semantic and
diagnostic traces exactly for all five controls:

| control | work units | scheduler steps | max work unit | max scheduled slice | direct verification |
| --- | ---: | ---: | ---: | ---: | ---: |
| canonical lighthouse | 90 | 98 | 28.0ms | 28.0ms | 486.9ms |
| dense `k7-7` | 273 | 281 | 34.0ms | 40.7ms | 2496.9ms |
| parallel pressure | 96 | 104 | 15.3ms | 15.3ms | 412.2ms |
| long-label pressure | 70 | 78 | 5.2ms | 5.2ms | 121.9ms |
| self-loop pressure | 115 | 123 | 11.0ms | 11.0ms | 288.4ms |

All five completed with `semanticEquivalent: true`, `traceEquivalent: true`,
and `partialResultExposed: false`.

## Browser budget evidence

The fixed evidence is in
`e2r-liaison-scape/experimental/full-verification1/browser-result-summary.json`.
Three runs are retained because one browser timing sample is not a stable
benchmark. The first run observed maximum scheduled slices of `20.8ms`,
`53.4ms`, `37.8ms`, `83.9ms`, and `24.8ms` for canonical, dense, parallel,
long-label, and self-loop controls respectively. A second run moved those
values to `19.0ms`, `32.8ms`, `48.1ms`, `21.6ms`, and `18.4ms`.

The latest run added cooperative completion and scheduler accounting:

| control | cooperative completion wall | scheduler work | scheduler overhead | max scheduler step |
| --- | ---: | ---: | ---: | ---: |
| canonical lighthouse | 1482.3ms | 441.3ms | 1041.0ms | 28.4ms |
| dense `k7-7` | 5602.9ms | 2373.3ms | 3229.6ms | 49.7ms |
| parallel pressure | 1918.8ms | 636.6ms | 1282.2ms | 37.2ms |
| long-label pressure | 1221.0ms | 233.1ms | 987.9ms | 12.2ms |
| self-loop pressure | 1970.6ms | 473.4ms | 1497.2ms | 23.3ms |

The large gap between scheduler work and elapsed wall time is browser harness
and scheduling overhead evidence, not a claim that the algorithm is idle in a
production scheduler. It does show that scheduler cost, timer/message delay,
and the current one-step-per-turn policy need an explicit budget model before
any Product-wide guarantee.

Cancellation was requested after a short delay for every latest control. Each
probe cancelled after one completed work unit, delivered within the recorded
browser delay, and exposed no partial Product result. The accumulator keeps
completed intermediate state privately, but `result` remains unavailable until
`finalize`. Budget exhaustion is likewise fail-closed and does not mutate the
current Product presentation, Dataset, coordinates, dirty state, or
persistence.

This is boundary cancellation evidence, not proof of preemption in the middle
of a JavaScript operation. The worst-case cancellation explanation remains:

```text
current work unit + scheduler/message delay
```

## Stale and lifecycle boundaries

The already-closed lifecycle contract remains the authority for immutable
snapshot identity, generation tokens, cancellation, stale-result rejection,
preview isolation, accept-only session transaction, and explicit persistence.
The new verification state does not duplicate or replace lifecycle ownership.
It is a pure diagnostic computation over its input snapshot. A newer
generation or invalidated Product-dependent operation must reject the old
result at the existing lifecycle boundary; cancellation races do not authorize
an intermediate presentation commit.

React/App state, DOM measurement, preview display, accept/reject, viewport fit,
and persistence remain main-thread Product boundaries. The pure data portions
of the accumulators are Worker-compatible in principle, but the current state
graph includes Maps, callbacks/diagnostic sinks, profiler hooks, lifecycle
identity, and preview/adoption boundaries. This checkpoint therefore makes no
Worker/provider decision.

## Product and visual scope

No quality solver, new placement candidate, routing retune, label retune,
Worker, or Product UI integration was built. No visible Product candidate was
introduced, so an Actual Product visual smoke check and formal Human Review
were not applicable to this execution-only checkpoint. `App.tsx` and Product
defaults remain unchanged.

## Remaining blocker and next position

The resumable composition is now a credible source-faithful seam. The next
bounded question is budget closure, not a new solver: whether inner-loop
micro-splitting, scheduler policy, and lifecycle transport can reduce worst
work/slice/overhead under a declared Product budget without changing exact
authority semantics. The dense transition and cooperative wall-time samples
show that this is still an open engineering checkpoint. Do not infer a
quality-solver benchmark, Product adoption, or Adaptive Cascade from this
result.

No cross-repository reusable knowledge candidate was added: this result is
specific to LiaisonScape's current Product-authoritative presentation graph.
The session log was intentionally not updated.

## Artifacts and validation

Changed or added LiaisonScape artifacts:

- `src/graph-presentation.ts` — source-faithful full verification accumulator
  and orchestration state machine;
- `experimental/full-verification1/prototype.mjs` — diagnostic composition and
  exact comparison wrapper;
- `experimental/full-verification1/browser-result-summary.json` — fixed Edge
  evidence;
- `experimental/verification-interruptibility1/browser-main.ts` — browser
  harness measurement extension;
- `tests/full-verification-resumable.test.ts` — focused equivalence, failure,
  and artifact tests;
- `tools/full-verification-resumable-audit.mjs` — reproducibility audit.

Validation completed for this checkpoint: the focused suite passed `7/7`, the
full LiaisonScape suite passed `463/463`, the full-verification audit passed,
TypeScript lint passed, the production build passed, and `e2r-spec`'s
`npm run validate` passed. Existing unrelated dirty research files were
preserved. No historical result document was rewritten, no session log was
updated, and no commit, push, tag, release, deploy, or provider adoption was
performed.
