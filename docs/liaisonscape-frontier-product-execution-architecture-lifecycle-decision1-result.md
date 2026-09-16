# LiaisonScape Frontier / Product Execution Architecture & Lifecycle Decision 1

Date: 2026-09-16

## Final classification

`ARCHITECTURE DECIDED / IMPLEMENTATION HOLD`

For the future Frontier-12 automatic-display proposal path, the recommended
architecture is:

`Worker: Frontier candidate generation -> pure Product proposal evaluation/selection`
`main thread: snapshot validation -> render/session adoption authority`

This is an execution decision, not a Worker implementation or production
default change. The current normal provider remains `settleInitialPlacement`.

## Source-backed placement decision

`src/frontier-candidate-generator.ts::generateFrontierCandidateSet` is a
synchronous, deterministic, serializable-data generator. Its current complete
invocation has no resumable yield or cancellation boundary. The replay artifact
measured approximately 86–218 ms on ordinary controls and 1.22–2.24 s on the
dense controls.

The current research Product path calls `deriveBoundedAutomaticPresentation`
and `deriveAutomaticLayoutQualityMetrics` through
`tools/generic-crossing-search.mjs`. The presentation derivation consumes
graph/position/manual-authority snapshots and returns data structures; its
source has no DOM, React, or `window` dependency. The harness's
`presentationMetrics` adds Product routing, Relation-label, Node-label,
Self-loop and metric evaluation, and reports approximately 163–428 ms on
ordinary controls and 1.95–3.17 s on dense controls. The current App wrapper
does contain React state/refs and callback diagnostics, so those are not Worker
inputs; a future adapter must build a serializable snapshot and keep render and
commit on the main thread.

A single synchronous main-thread Frontier path is therefore not acceptable for
the measured difficult/dense workload. Cooperative main-thread execution is
not selected as the primary path because the shared Frontier generator has no
natural resumable phase boundary. It would require a separate algorithm-neutral
resumable execution refactor. A Worker is selected for isolation and responsive
termination. Keeping both pure computation stages in one Worker avoids an
unnecessary candidate transport boundary, while authority remains split:
Frontier still only generates candidates and Product still evaluates and
selects them.

The existing browser execution-budget evidence supported the direction but did
not prove the real Frontier Worker path. The bounded proof in
`liaisonscape-frontier-product-worker-execution-proof1-result.md` now records
an actual Worker run of Frontier plus Product proposal evaluation, exact
parity, dense non-blocking evidence, and cancellation before result publish.

## Lifecycle contract

The future integration must use a monotonic `operationId`, a generation token,
and an immutable semantic snapshot identity. The snapshot includes Dataset and
graph identity/revision, session positions, stored/adopted coordinate
authority, dirty state, manual route/label/Self-loop fingerprints, locale,
algorithm version, and budget policy.

Dataset replacement, repeated open, coordinate load/reset/save, Dataset or
manual presentation mutation, another automatic operation, and unmount must
invalidate the active operation. A result is accepted only when its operation,
generation, and semantic snapshot still match the current state and its
candidate/presentation is complete and finite. Viewport-only changes do not
change Dataset semantics; they invalidate only an operation-local preview if a
future preview exists.

Cancellation wins when observed before delivery or commit. Worker termination
is best effort; token checks are still authoritative. Technical failure, user
cancel, budget exhaustion, incomplete/non-finite output, and stale completion
must not publish partial output. For coordinate-less initial display, failure
falls back to the existing bounded `settleInitialPlacement` path. Stored and
mixed Coordinates bypass Frontier and retain their current authority. No
automatic Coordinate persistence or dirty-state mutation is implied by this
execution decision.

## Transient preview boundary

The natural future preview snapshot is a complete candidate set followed by a
complete Product-selected presentation. Partial order/grid search state is not
a semantically complete candidate, and repeatedly running the expensive
Product presentation only to animate progress is not justified. Any preview
must remain operation-local and disposable until a separate acceptance design.

## App responsibility and remaining work

The minimum App-side orchestration is the coordinate-authority gate, immutable
snapshot creation, operation/token ownership, Worker transport, cancellation,
stale/failure handling, bounded fallback, and main-thread validation/render-only
derived-position adoption. It must not move routing, labels, Self-loop,
Dataset, persistence, or dirty-state authority into Frontier or the Worker.

The decision artifact is
`../e2r-liaison-scape/experimental/frontier-product-execution-architecture-lifecycle-decision1/decision.json`.
Before production integration, the remaining bounded checkpoint is the App
async adapter: coordinate-authority gating, replacement/remount/fallback
behavior, stale-result handling, and validated derived-position adoption.
Worker, Cancel UI, transient preview, production wiring, and the production
default remain unchanged.
