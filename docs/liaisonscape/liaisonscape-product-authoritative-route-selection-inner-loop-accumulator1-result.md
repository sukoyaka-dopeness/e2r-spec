# LiaisonScape Product-authoritative Route Selection Inner-loop Accumulator / Interruptibility 1

Date: 2026-09-14
Status: `ROUTE INNER-LOOP INTERRUPTIBILITY ESTABLISHED / PRODUCT VERIFICATION BUDGET STILL OPEN`

## Scope and constraints

This bounded checkpoint examined only the current Product-authoritative
ordinary route-selection inner loop. The purpose was to determine whether the
ordered route decisions can be represented as explicit, resumable, bounded
work units without moving route authority, changing route semantics, or
exposing a partial Product result.

The checkpoint did not implement a quality solver, change route heuristics,
retune Parallel or Self-loop behavior, optimize Relation-label placement, move
endpoint-plan authority, adopt a Worker/provider, or change Product defaults.
Dataset, persistence, dirty-state, manual placement, manual curvature, and
manual label semantics were not changed. Session log, Product adoption,
production-provider status, and Initial Layout Release blocker remain
unchanged.

## Source-first decomposition

The current route implementation was extracted into a behavior-preserving
accumulator in `e2r-liaison-scape/src/graph-presentation.ts`:

1. `initializeAutomaticRouteSelection` performs immutable precomputation:
   node lookup, parallel-bundle label-width signals, route-label snapshots,
   fixed/ordinary ordering, and the complete canonical ordered edge list.
2. `stepAutomaticRouteSelection` consumes exactly one ordered edge and runs
   the existing Product route decision, including obstacle input, occupied-path
   state, overlap counts, continuity/recovery state, diagnostics, and current
   Parallel eligibility signals.
3. `completeAutomaticRouteSelection` exposes routes only after all ordered
   edges have been accepted.

The existing `deriveAutomaticRoutes` remains the synchronous Product-facing
entry point. It now initializes the same state, drains the same one-edge
accumulator, and finalizes it. No caller or Product integration was changed.
This is an incremental, behavior-preserving responsibility extraction rather
than a new routing authority.

The explicit contract is:

- immutable: canonical ordered edge list, node map, parallel label widths,
  and route-label snapshot;
- mutable: current edge index, accepted route map, occupied path prefix,
  overlap counts, and diagnostic state;
- work unit: one canonical ordered edge route decision, including all current
  candidate arbitration for that edge;
- incomplete state: not completable and not exposable as a Product result;
- Dataset mutation, partial Product commit, and authority migration: false.

The complete ordered edge list is retained while the occupied prefix grows.
Therefore a step does not discard future-edge information. The precomputed
parallel-label signal and fixed ordering remain global inputs, while
occupied-path and overlap state remain the intentional prefix dependency.

## Equivalence evidence

Focused tests compare the accumulator with the current synchronous route
authority over route identity, source/target positions, path and samples,
label/control points, Parallel eligibility, and direct-recovery metadata. The
comparison passed for the focused graph containing ordinary, parallel, and
self-loop edges. The incomplete-state test also confirms that an intermediate
prefix cannot be finalized.

The browser harness compared the same accumulator against the synchronous
authority for five source-faithful controls:

| control | edges | equivalent | max one-edge step | init |
| --- | ---: | --- | ---: | ---: |
| canonical Lighthouse | 14 | yes | 3.1 ms | 0 ms |
| dense k7-7 | 49 | yes | 3.5 ms | 0 ms |
| parallel pressure | 16 | yes | 4.9 ms | 0.2 ms |
| long-label pressure | 10 | yes | 0.7 ms | 0 ms |
| self-loop pressure | 19 | yes | 1.1 ms | 0 ms |

These are observed Edge 152 measurements from the fixed diagnostic artifact
`experimental/route-selection-accumulator1/browser-result-summary.json`.
They are evidence for route-level work-unit boundedness, not a Product-wide
execution SLA. Candidate and obstacle counts remain secondary diagnostic
dimensions; the accepted deterministic quota unit for this checkpoint is the
ordered-edge decision, with a step budget applied to the whole decision.

## Cancellation, stale work, and fail-closed behavior

The browser cooperative probe yielded between route decisions and requested
cancellation after 8 ms. All five controls cancelled without exposing a
partial Product result. Observed cancellation delivery was 0--3 ms after a
step boundary. The prototype also returns `budget-exhausted` when a maximum
step count is reached, and finalization rejects incomplete state.

This establishes a safe route-level seam for a future operation lifecycle:
the caller can own generation checks, cancellation, stale-result rejection,
and commit gating while the accumulator owns only pure route computation.
It is compatible with a future pure-data Worker transport, but no Worker or
provider was adopted. The existing main-thread Product lifecycle remains the
authority for snapshot, preview, acceptance, commit, and viewport behavior.

## Browser boundedness interpretation

The observed initialization cost was 0--0.2 ms and every one-edge route work
unit was below the preferred 16 ms interactive slice and the diagnostic 50 ms
ceiling in the five selected controls. Dense whole-pass verification from the
previous checkpoint still reached hundreds of milliseconds because it includes
many route decisions and later label stages; the new result explains that the
route portion can be yielded at edge boundaries rather than treating the
whole pass as one interruptible unit.

This does not yet prove boundedness for arbitrarily large graphs. The next
measurement boundary should retain edge count, candidate/obstacle work, and
initialization cost as explicit diagnostics before any Product budget is
declared. A future caller must also fail closed on stale generation,
cancellation, budget exhaustion, and incomplete finalization.

## Responsibility attribution

This checkpoint changes the diagnosis of interruptibility, not visual quality
ownership:

- ordinary route semantics remain Product ordinary-routing authority;
- Parallel/Incident allocation remains its existing authority;
- endpoint-plan authority remains unchanged;
- final Relation-label placement and Self-loop routing remain outside this
  accumulator;
- route-level scheduling and resumability can now be owned by an orchestration
  layer around the existing route authority;
- no Node geometry or Structural Placement responsibility is introduced.

Relation-label and Node-label stages remain separate inner-loop work. Their
whole-pass costs were previously observed as material on dense controls and
are not solved by this route extraction.

## Disposition

The route-selection inner loop is now `ESTABLISHED` as an exact, one-edge,
resumable diagnostic seam under the observed browser controls. This supports
continued investigation of Product-authoritative verification execution
architecture.

The broader Product verification budget remains `NOT ESTABLISHED`; no quality
solver is adopted, Product integration/default remains `HOLD`, production
provider remains `NOT ESTABLISHED`, Adaptive Initial Placement Cascade remains
`INACTIVE`, the Initial Layout Release blocker remains `OPEN`, and Human Review
remains `NOT READY`. No Actual Product visual smoke check was required because
this checkpoint changed no visible Product behavior and produced no candidate
for visual acceptance.

The next bounded investigation, if authorized, is the corresponding
Relation-label/Node-label accumulator boundary and its exact-equivalence and
budget evidence. It must not be interpreted as permission to change routing,
label heuristics, Parallel behavior, Self-loop search, or Product adoption.

## Reproduction and validation

- diagnostic source: `experimental/route-selection-accumulator1/prototype.mjs`
- browser harness: `experimental/verification-interruptibility1/browser-main.ts`
- fixed browser evidence: `experimental/route-selection-accumulator1/browser-result-summary.json`
- audit: `tools/route-selection-accumulator-audit.mjs`
- focused test: `tests/route-selection-accumulator.test.ts`
- no knowledge-base candidate was promoted; this is repository-local checkpoint
  evidence.
