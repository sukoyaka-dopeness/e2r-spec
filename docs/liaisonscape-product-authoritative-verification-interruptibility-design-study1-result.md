# LiaisonScape Product-authoritative Verification Budget / Interruptibility Design Study 1

Date: 2026-09-14

Status: **PARTIAL INTERRUPTIBILITY ONLY / SEMANTIC STAGE SEAM SUPPORTED / INTRA-STAGE INTERRUPTIBILITY NOT ESTABLISHED / QUALITY SOLVER HOLD / PRODUCT INTEGRATION HOLD / NOT READY FOR HUMAN REVIEW**

## Decision

The current Product-authoritative presentation evaluation can be decomposed
into explicit, deterministic stage calls without changing its result. A
diagnostic state machine reproduced the current synchronous output exactly on a
parallel/self-loop control and preserves the existing authority boundary.

That is not yet a browser-safe resumable verification seam. Every current
stage call is still a whole pass. In the real-browser run, route stages and,
on dense input, label stages exceeded the proposed `50ms` diagnostic failure
threshold. The evidence therefore supports:

```text
semantic stage decomposition: ESTABLISHED
yield/cancel between stages: ESTABLISHED
yield/cancel inside current stages: NOT ESTABLISHED
quality-complete Product verification budget: NOT ESTABLISHED
```

Classification: `PARTIAL INTERRUPTIBILITY ONLY`.

The previous statuses remain unchanged:

- Fast deterministic Initial Placement + explicit High-quality Auto Layout:
  `PROVISIONALLY ADOPT` as an architecture direction;
- quality solver: `HOLD / NOT ESTABLISHED`;
- Product integration/default: `HOLD`;
- production provider: `NOT ESTABLISHED`;
- Adaptive Initial Placement Cascade: `INACTIVE`;
- Initial Layout Release blocker: `OPEN`;
- Human Review: `NOT READY`.

## Source-first dependency decomposition

The current `App.tsx` calls `deriveBoundedAutomaticPresentation` inside the
Product presentation memo. The source implementation in
`src/graph-presentation.ts` has this dependency order:

```text
label-free route selection
  -> first route selection using provisional Node labels
  -> ordered Relation-label placement
  -> ordered Node-label placement
  -> feedback decision based on final Node-label movement
  -> optional feedback route selection
  -> optional feedback Relation-label placement
  -> optional feedback Node-label placement
  -> final derived presentation
```

The label-free route is a counterfactual used to identify yielding routes. The
first and feedback route passes execute the ordered route authority, including
fixed-edge ordering, ordinary route candidate generation, obstacle influence,
occupied-path arbitration, parallel/self-loop behavior, continuity checks, and
occupied-path accumulation. The Relation-label pass then consumes the complete
route set and an ordered occupied-label prefix. The Node-label pass consumes
the complete route set, Relation-label occupancy, other Node positions, and
its own ordered occupied-label prefix.

The current source has no hidden Product mutation in these stage calls. Maps
and arrays are constructed as stage outputs; manual route, Self-loop, label,
and coordinate inputs are read-only authority. The current feedback condition
is explicit: it runs only when final Node-label geometry moved and feedback is
enabled. This made a diagnostic stage machine possible without duplicating the
route or label algorithms.

Viewport fit is separate Product state in `App.tsx` (`fitGraphView` is used at
dataset-open and explicit fit boundaries). It is not silently moved into this
verification state machine. DOM measurement, React state adoption, preview
display, accept/reject, and lifecycle generation checks remain main-thread
Product boundaries.

## Diagnostic prototype

`e2r-liaison-scape/experimental/verification-interruptibility1/prototype.mjs`
wraps the existing pure Product-owned functions:

- `deriveAutomaticRoutes`;
- `deriveAutomaticRelationLabels`;
- `deriveAutomaticNodeLabels`;
- `deriveBoundedAutomaticPresentation` as the synchronous reference.

Its state is `running`, `completed`, `cancelled`, or `budget-exhausted`. Each
step captures one current source whole-pass call and records elapsed time. A
cancel request between steps discards the state and exposes no partial Product
result. The prototype intentionally does not claim that a call is internally
interruptible; it records `interruptible: false` for every measured current
stage. It does not write Dataset, coordinates, dirty state, presentation
extensions, or Product UI state.

The focused test compares a staged result with the current synchronous result
including route geometry, Relation-label geometry, Node-label geometry,
manual/authority flags, and feedback status. It passes exactly. This proves
stage composition equivalence for the tested control; it does not prove that a
future refactor that yields inside a loop will remain equivalent.

## Real-browser evidence

The browser harness is
`e2r-liaison-scape/experimental/verification-interruptibility1/`. It uses the
same five controls as the preceding execution-budget study: canonical
lighthouse, dense `k7-7`, parallel pressure, long-label pressure, and
self-loop-heavy Japanese pressure. It runs the current source functions in a
stage state machine, yields between stages, and requests cancellation after a
short timer.

The fixed result is
`e2r-liaison-scape/experimental/verification-interruptibility1/browser-result-summary.json`.
Representative maximum whole-pass stage times were:

| Case | maximum stage | dominant stages | stage-over-budget result |
| --- | ---: | --- | --- |
| canonical lighthouse | 86.8ms | first route 86.8ms; label-free route 79.5ms | route stages over 50ms |
| dense `k7-7` | 485.1ms | feedback route 485.1ms; first route 434ms; label-free route 337.5ms | all route and label stages over 50ms |
| parallel pressure | 144.2ms | feedback route 144.2ms; first route 119.1ms | route stages over 50ms |
| long-label pressure | 43.7ms | feedback route 43.7ms; first route 26.7ms | no stage over 50ms in this run |
| self-loop pressure | 123ms | first route 123ms; label-free route 84.7ms | route stages over 50ms |

The exact stage rows and cooperative summaries are in the JSON artifact. The
browser run completed all whole-pass staged jobs. The cooperative control was
cancelled between one or two stages for every case, exposed no partial result,
and recorded a delivery delay after a stage returned. This is useful lifecycle
evidence but is not proof of cancellation during a stage.

The current `<=16ms` target and approximately `50ms` diagnostic threshold are
therefore not met by the current stage calls. Dense is decisive: even after
stage decomposition, a single route or label stage can block the main thread
for hundreds of milliseconds.

## Where bounded work can and cannot be introduced

### Route selection

The route pass is sequentially coupled. `deriveAutomaticRoutes` maintains an
ordered `occupiedPaths` prefix and uses it in later candidate arbitration. It
also computes fixed-edge and ordinary-edge order, parallel bundle label-width
signals, overlap indexing, obstacle lists, continuity/recovery predicates,
and route diagnostics. A route edge cannot be evaluated independently of the
accepted prefix without changing the authority semantics.

The likely future seam is an explicit route accumulator containing the
canonical ordered edge list, accepted routes, occupied paths, overlap counts,
and the current index. One bounded unit could process one edge or a bounded
candidate batch, then yield with that accumulator. The current source does not
expose that accumulator; the diagnostic whole-pass wrapper cannot establish
its cost or equivalence. A replay-prefix optimization is not treated as a
resumable implementation because it recomputes work and can change global
bundle signals if the future edge set is hidden.

### Relation-label placement

Relation-label placement is ordered and consumes an occupied-label prefix. Each
item also scans other route paths and their broad-phase bounds. A future step
can carry the route-bound cache, edge index, occupied-label list, and output
map. The stage is data-pure and therefore technically Worker-compatible as a
data operation, but current source still exposes only a whole-pass function.
Dense evidence shows that even this stage is over budget (`103.1ms` in the
first pass and `72ms` in feedback), so a whole-stage yield is insufficient.

### Node-label placement

Node-label placement consumes Relation-label occupancy and an occupied Node-
label prefix, while checking Node positions, route paths, and yielding route
paths. It has the same ordered-accumulator shape as Relation-label placement.
The dense first Node-label stage reached `119.4ms`; it cannot be treated as a
single browser-safe unit.

### Feedback

Feedback is a real dependency boundary, not an optional duplicate for timing:
the final Node-label geometry determines whether a second route/label pass is
required. The prototype can yield before and after feedback, but it cannot
skip or partially expose feedback output while preserving current semantics.
Budget exhaustion before feedback must return a non-success outcome and keep
the accepted Product presentation unchanged.

## Semantic equivalence strategy

The required equivalence relation is exact output equivalence for the same
immutable input snapshot, not a geometric metric. The diagnostic test compares:

- route path, samples, label point, control point, source/target geometry, and
  route authority metadata;
- Relation-label and Node-label maps by ID;
- feedback-applied state;
- no Dataset or session mutation.

For a future inner-loop refactor, the same relation must be tested against the
current synchronous function for canonical, dense, parallel, self-loop,
long-label, reverse-direction, and perturbed cases. Any difference must be
classified by stage and prefix, not hidden by a visual similarity score.

## Worker compatibility and main-thread boundaries

The route, Relation-label, and Node-label stage functions currently operate on
plain graph/geometry data plus Maps and arrays. This supports a future pure
data Worker seam in principle. It does not authorize moving Product authority
or adopting a Worker provider. A Worker-compatible implementation would need
explicit serialization for Maps, immutable snapshot identity, algorithm and
budget versioning, cancellation termination, and stale-generation rejection.

The following remain main-thread Product boundaries:

- React/App state and operation lifecycle;
- preview presentation and DOM/browser measurement;
- accepted session-coordinate transaction and revert;
- explicit Save Coordinates persistence;
- final viewport fit/adoption and user interaction.

No route, label, endpoint-plan, or Self-loop responsibility was moved to
Structural Placement. Endpoint-plan and final presentation remain Product
authority even if their pure data computation is later transported.

## Failure taxonomy and budget contract

The prototype distinguishes:

- `completed` / semantic result available;
- `cancelled` / no partial Product result;
- `budget-exhausted` / deterministic fail-closed outcome;
- future `stale`, `verification-failed`, `invalid`, and
  `unsupported-stage` outcomes supplied by the existing lifecycle contract.

The diagnostic wrapper currently records over-budget stages and continues only
to compare the complete result. A production operation must instead stop or
reschedule at the declared boundary, preserve the current accepted
presentation, and never call an over-budget partial result successful. A
future inner-loop implementation should report both work-unit and wall-clock
budgets because wall time alone is not deterministic across browsers.

Cancellation latency is bounded only after an interruptible unit is defined:

```text
worst-case cancellation latency <= cost of one bounded unit
                         + scheduler/message delivery delay
```

The current whole-pass prototype does not satisfy the first term. Its
between-stage cancellation is safe, but intra-stage cancellation remains
`NOT ESTABLISHED`.

## Outcome

The study does not justify building the quality solver yet. It establishes a
useful intermediate boundary:

1. The current Product pipeline has an explicit semantic stage graph.
2. Stage-level composition can reproduce the current synchronous result.
3. Route and dense label stages are too large to serve as bounded browser
   units.
4. The next meaningful study is an authority-preserving inner-loop
   accumulator extraction for one stage at a time, beginning with route
   selection, with exact equivalence and fail-closed budget tests.
5. A Worker is a possible transport for pure data stages, not a decision made
   by this checkpoint.

This is **not** `BOUNDED VERIFICATION SEAM ESTABLISHED`. It is
`PARTIAL INTERRUPTIBILITY ONLY`. No quality solver benchmark, Product
integration, default adoption, Actual Product visual acceptance, or Human
Review candidate is authorized.

## Validation, files, and synchronization

Added or updated:

- `e2r-liaison-scape/experimental/verification-interruptibility1/prototype.mjs`;
- `e2r-liaison-scape/experimental/verification-interruptibility1/index.html`;
- `e2r-liaison-scape/experimental/verification-interruptibility1/browser-main.ts`;
- `e2r-liaison-scape/experimental/verification-interruptibility1/browser-result-summary.json`;
- `e2r-liaison-scape/tools/verification-interruptibility-audit.mjs`;
- `e2r-liaison-scape/tests/verification-interruptibility.test.ts`;
- this checkpoint document;
- `docs/roadmap.md`.

Focused prototype tests pass `4/4`; the prior full LiaisonScape run passed
`436/436`, and the focused rerun after the prototype correction passed `3/3`.
Lint and build pass. The browser harness completed all five controls. The
e2r-spec validation gate and diff checks remain required for final handoff.

No session log was updated. No historical result document was rewritten. No
Dataset semantics, persistence, dirty-state, manual semantics, Product
provider, or default behavior was changed. No push, tag, release, deploy, or
publish occurred. No cross-repository knowledge candidate was added because
this remains LiaisonScape-specific execution evidence rather than a general
workspace principle.
