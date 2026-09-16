# LiaisonScape Frontier Automatic Display User-Abort / Cancellation Feasibility Audit 1

Date: 2026-09-16

## Classification

`D. USER-ABORT NOT JUSTIFIED FOR INITIAL ADOPTION`

This classification is specific to the current Frontier-12 adoption shape. The
existing acceptance seam fetches a precomputed coordinate artifact and then
opens the Dataset synchronously. Frontier is not currently wired as a
browser-side production solver, so there is no current long-running Frontier
operation for a user abort control to interrupt.

If a future adoption design runs Frontier in the browser and must remain
responsive during a long computation, the current synchronous execution model
is insufficient. That would be a separate architecture decision, most likely a
bounded cooperative execution design or worker isolation. This checkpoint does
not choose or implement either option.

## Source-backed execution model

`src/App.tsx` loads the named development fixture and, when requested, the
`frontier-12` layout artifact with `fetch`. The resulting positions are placed
in an operation-local override and passed to `open`. In `open`, graph building,
initial-position selection, and viewport fitting execute synchronously before
React state is updated. The normal production path calls
`deriveActualProductInitialLayout`, whose coordinate-less default remains
`settleInitialPlacement`; Frontier is not selected there.

The acceptance seam therefore has no `AbortSignal`, cancellable promise,
`requestAnimationFrame` yield, worker, or solver-phase progress boundary. A
button state change alone could not interrupt synchronous JavaScript once that
work had started. A fetch request could technically be abandoned before its
response arrives, but that would not cancel a browser-side Frontier computation
because none is performed by the current seam.

## Abort and fallback contract

For a future production candidate, user abort must be a distinct outcome from
technical failure and future budget/timeout exhaustion:

* success: publish the complete Frontier candidate;
* technical failure: discard incomplete/invalid output and use the explicitly
  bounded Product fallback;
* user abort: discard all partial Frontier output and use the same bounded
  fallback without Dataset, dirty-state, persistence, or manual-authority
  mutation;
* future budget/timeout exhaustion: remain a separately classified bounded
  outcome until an adoption checkpoint defines its policy.

For coordinate-less initial Automatic Display, the intended safe fallback is
the existing `settleInitialPlacement` Product path. Complete stored Coordinates
remain authoritative, and mixed/partial Coordinates retain their existing
mixed-completion authority. Frontier output remains derived and must not be
persisted implicitly.

The current source does not yet implement a production Frontier failure or
abort path, so this document records a prerequisite rather than claiming that
such behavior already exists.

## Lifecycle and race boundary

The current acceptance fetch is guarded only by the existing component and
Dataset-open lifecycle. A future asynchronous or worker-backed Frontier path
must additionally reject stale results after Dataset replacement, unmount or
remount, reload, locale change, repeated open, and development lifecycle
re-entry. Completion racing with abort must publish neither partial output nor
an older operation's result.

The loading surface may later expose progress and a give-up action, but exact
copy and visual design are intentionally not decided here. Explicit Auto Layout
has separate user-facing semantics and is out of scope.

## Operational decision

No production implementation, fixed timeout, Worker, cooperative scheduler,
solver change, fallback wiring, or UI change is justified by this audit.
The next adoption checkpoint may proceed only after choosing whether Frontier
will remain precomputed/off-thread or become a browser computation. If it
becomes browser computation, responsive abort is a required design input rather
than an incidental button feature.

Human Review remains `QUALIFIED`; crossing residual, dense congestion, and
large-dense latency remain their existing separate boundaries. They are not
reclassified as cancellation problems.

## Validation

No production source was changed. The result is diagnostic documentation only.
The normal E2R-SPEC validation and `git diff --check` are reported with the
checkpoint handoff.
