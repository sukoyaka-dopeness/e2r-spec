# LiaisonScape Explicit High-quality Auto Layout Browser Execution Budget Study 1

Date: 2026-09-14

Status: **BROWSER BUDGET EVIDENCE ESTABLISHED / WORKER-PROPOSAL PATH SUPPORTED / MAIN-THREAD QUALITY VERIFICATION NOT BOUNDED / QUALITY SOLVER HOLD / PRODUCT INTEGRATION HOLD / NOT READY FOR HUMAN REVIEW**

## Decision

This checkpoint measured the future Explicit High-quality Auto Layout execution
boundary in a real Edge browser without changing Product behavior. The result
supports a future hybrid execution shape only as an execution hypothesis:

```text
worker or other background proposal transport
  -> bounded Product-authoritative verification on the main thread
  -> isolated preview
  -> explicit lifecycle accept/reject
```

The proposal transport is feasible, but the current Product-authoritative
verification and preview work are far beyond a browser-safe single-slice
budget on dense, parallel, label-heavy, and self-loop-heavy inputs. Therefore
the quality solver remains `HOLD / NOT ESTABLISHED`; no solver, Worker
provider, Product default, or candidate was adopted.

The execution split remains:

- Fast deterministic Initial Placement + explicit High-quality Auto Layout:
  `PROVISIONALLY ADOPT` as an architecture direction;
- Product integration/default: `HOLD`;
- production provider: `NOT ESTABLISHED`;
- Adaptive Initial Placement Cascade: `INACTIVE`;
- Initial Layout Release blocker: `OPEN`;
- Human Review: `NOT READY`.

## Source-first boundary

The current Product source still performs `solveAutoLayout` synchronously in
`App.tsx`. The Product rendering path calls
`deriveBoundedAutomaticPresentation`, which owns the current ordinary route,
Parallel/Incident, endpoint-plan, Self-loop, and final label presentation
evaluation. The browser harness invoked that current function directly for
verification and one additional preview pass, while using deterministic fake
candidate generation only to isolate execution cost. It did not import or
modify `App.tsx`, change the Product UI, or move any authority into Structural
Placement.

The Worker probe measured proposal transport and pure-work simulation only.
It did not claim that current Product presentation authority is Worker-safe.
The current Product verification remains a main-thread boundary in this
checkpoint.

## Browser method

The reproducible harness is
`e2r-liaison-scape/experimental/execution-budget-browser1/`. Start the
LiaisonScape Vite server and open the entry with `?autorun=1` in a real browser.
The harness records synchronous, cooperative-main-thread, and
hybrid-worker-proposal/main-thread-verification mechanisms. It records total
wall time, the largest uninterrupted slice, interval and animation-frame
gaps, cancellation delivery, candidate completion, Worker message latency,
payload bytes, and one Product preview pass.

Cases were:

- canonical lighthouse EN: 10 nodes / 14 edges;
- dense `k7-7`: 14 nodes / 49 edges;
- parallel pressure: 8 nodes / 16 edges;
- long English-label pressure: 10 nodes / 10 edges;
- self-loop-heavy Japanese pressure: 10 nodes / 19 edges.

The browser was Edge 152 on Windows with `hardwareConcurrency = 16` and
`crossOriginIsolated = false`. The memory API was not assumed. The run also
confirmed the lifecycle seam: cancellation completed as `cancelled`, an old
generation delivered `stale`, and a newer operation remained active. A direct
Worker cancellation probe received no result after termination, with a
`0.2ms` terminate-call latency. This is a transport probe, not a production
Worker contract.

The fixed summary is recorded in
`e2r-liaison-scape/experimental/execution-budget-browser1/browser-result-summary.json`.
The audit is `tools/initial-layout-browser-execution-budget-audit.mjs` and the
focused source test is `tests/execution-budget-browser.test.ts`.

## Evidence

The final real-browser run was materially slower than the earlier exploratory
run, which is itself useful evidence against assuming a stable optimistic
budget. Representative results were:

| Case | synchronous total | cooperative cancellation | hybrid main-thread slice | Worker message / payload |
| --- | ---: | ---: | ---: | ---: |
| canonical, 3 candidates | 3131ms | 1/3 completed; 1042ms delivery; 1017ms slice | 568ms | 26–45ms / 3962–3969B |
| dense, 2 candidates | 11420ms | cancellation not delivered; 4799ms slice | 2151ms | 90–184ms / 9324–9345B |
| parallel pressure, 3 candidates | 6470ms | 1/3 completed; 2226ms delivery; 2219ms slice | 969ms | 26–50ms / 3899–3901B |
| long-label pressure, 3 candidates | 1309ms | 1/3 completed; 494ms delivery; 489ms slice | 264ms | 19–92ms / 4196–4200B |
| self-loop pressure, 3 candidates | 3347ms | 2/3 completed; 2172ms delivery; 1110ms slice | 495ms | 15–49ms / 5268–5269B |

The dense case is the decisive control. Yielding between candidates did not
make a single Product verification interruptible: cancellation was not
observed before the two candidates completed, and the largest uninterrupted
slice was about `4.8s`. Moving only proposal generation to a Worker reduced
proposal transport to tens or low hundreds of milliseconds, but still left a
`2.15s` main-thread verification slice and a `2.77s` preview. The same pattern
appeared at smaller scale for parallel, label-heavy, and self-loop-heavy
cases.

The harness observed long tasks, with a maximum observed duration of about
`19.7s` across the complete diagnostic run. This is not a Product acceptance
measurement; it confirms that the diagnostic workload itself must not be
treated as a browser-safe operation merely because it is finite.

## Budget interpretation

The following is a future contract candidate, not a production commitment:

- keep startup Initial Placement deterministic and separate from quality search;
- snapshot all inputs and make algorithm version and budget explicit;
- cap candidates, Product evaluations, Worker messages, payload bytes, and
  total wall time;
- target scheduled main-thread slices at `<=16ms`, with a hard diagnostic
  failure threshold around `50ms` per scheduled unit;
- treat any current Product verification over that threshold as
  `budget-exceeded`, not as a successful quality result;
- keep preview on the Product authority side and do not commit a partial
  candidate when preview or verification exceeds budget;
- make cancellation generation-aware, discard stale results, and terminate
  background work where possible;
- return deterministic `budget-exhausted` / `cancelled` / `stale` outcomes
  without changing Dataset, persistence, dirty-state, or manual semantics.

The current source does not satisfy the slice target for dense or any of the
pressure controls. A future study therefore needs either interruptible,
bounded Product verification, a Worker-compatible pure verification seam that
retains Product authority, or a smaller explicit quality operation that does
not claim full presentation verification. Increasing a candidate cap or
loosening a geometry constraint is not an execution solution.

## Authority and lifecycle result

This study does not move responsibility:

- Structural Placement remains responsible for derived Node geometry and
  coarse spatial/angular proposal;
- Product ordinary routing, Parallel/Incident allocation, endpoint-plan,
  Self-loop routing, final Relation-label and Node-label placement, and
  viewport remain authoritative;
- the lifecycle contract remains snapshot/cancel/stale/preview/accept/reject
  based and solver-independent;
- Dataset, stored/authored Coordinates, persistence, dirty-state, Save
  Coordinates, manual Node placement, manual curvature, and manual label
  semantics remain unchanged.

No Actual Product visual smoke check was performed in this runtime checkpoint:
the result is an execution-budget study, not a visual-quality claim. No
diagnostic renderer or browser harness output is being promoted to Product
acceptance, and no Human Review candidate exists.

## Outcome and next position

The evidence is **not a new quality-solver approval**. It is a bounded
execution result that strengthens the architecture split while opening a
specific runtime blocker:

1. Worker/background proposal transport is credible for future investigation.
2. Cooperative main-thread scheduling alone is insufficient because the
   current Product verification call is not interruptible at the required
   granularity.
3. A hybrid path is not yet browser-safe for quality-complete verification;
   it must either gain a bounded verification seam or fail closed on over-
   budget cases.
4. Product integration, default/adoption, provider selection, and Human
   Review remain held.

The next roadmap position should be a narrowly scoped **Product-authoritative
verification budget / interruptibility design study**, not a quality solver
implementation, Adaptive Initial Placement Cascade, or visual acceptance
round. A formal Fast Initial Placement + High-quality Auto Layout product
adoption decision remains deferred.

## Validation and files

Changed or added for this checkpoint:

- `e2r-liaison-scape/experimental/execution-budget-browser1/index.html`
  (existing diagnostic entry);
- `e2r-liaison-scape/experimental/execution-budget-browser1/main.ts`
  (existing diagnostic harness, including Worker/lifecycle probes);
- `e2r-liaison-scape/experimental/execution-budget-browser1/browser-result-summary.json`;
- `e2r-liaison-scape/tools/initial-layout-browser-execution-budget-audit.mjs`;
- `e2r-liaison-scape/tests/execution-budget-browser.test.ts`;
- this result document;
- `docs/roadmap.md`.

The focused audit validates the five cases, current Product presentation
boundary, Worker cancellation probe, stale lifecycle evidence, and dense
over-budget conclusion. Repository validation is reported with the final
checkpoint handoff. The worktree may contain unrelated pre-existing research
changes; none were reset, stashed, deleted, or rewritten.

No session log was updated. No historical result document was rewritten. No
push, tag, release, deploy, publish, or Product provider adoption occurred.
