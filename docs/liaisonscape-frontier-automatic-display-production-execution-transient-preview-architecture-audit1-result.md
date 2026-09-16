# LiaisonScape Frontier Automatic Display Production Execution / Transient Preview Architecture Audit 1

Date: 2026-09-16

## Final classification

`NOT READY FOR EXECUTION-ARCHITECTURE IMPLEMENTATION; SOLVER EXTRACTION IS THE PREREQUISITE`

Frontier-12 is ready as a reviewed automatic-display candidate, but the
repository does not yet contain a production Frontier solver boundary. The
current acceptance seam fetches a precomputed artifact and applies it during a
synchronous Dataset open. It cannot serve as evidence for browser-side
iteration, cancellation, intermediate snapshots, or transient preview.

## Source-backed execution map

`src/initial-layout-provider.ts` contains the only current runtime-provider
prototype. It accepts serializable entity/relation records and returns derived
positions plus status, reason, iteration, and elapsed-time metadata. Its
strategies are explicitly prototype/fallback paths and the module states that
it is not wired into `App`.

`src/actual-product-initial-layout.ts` preserves stored and mixed Coordinate
authority and otherwise calls synchronous `settleInitialPlacement`. It does not
select Frontier. The DEV `frontier-12` path in `src/App.tsx` fetches a named
precomputed layout artifact, stores it in an operation-local override, and then
opens the Dataset synchronously. This is a review seam, not a production
Frontier execution path.

The current code has no Frontier-specific Worker, AbortSignal, worker protocol,
solver-phase yield, operation generation token, or snapshot transport. Existing
`requestAnimationFrame` uses are UI scheduling helpers, not solver
interruptibility boundaries.

## Architecture comparison

| Option | Current evidence | Assessment |
|---|---|---|
| Main-thread synchronous | Current open/placement model | Suitable only for already-bounded cheap work; cannot provide responsive Cancel during a long solver. |
| Main-thread cooperative | No Frontier phase/yield boundary exists | Requires extracting explicit iteration/phase boundaries and preserving deterministic behavior; smallest viable browser-side change if measured work stays bounded. |
| Web Worker isolation | No Frontier worker protocol exists, but positions and input records are structured-clone friendly | Strongest boundary for dense/main-thread protection and `terminate()` cancellation; requires solver extraction and lifecycle protocol. A worker pool is not justified. |
| Precomputed artifact | Current acceptance seam | Valid for review evidence, not a general production provider for arbitrary coordinate-less Datasets. |

No architecture is selected for implementation in this checkpoint. If
production Frontier must execute for arbitrary Datasets and dense cases remain
multi-second, Worker isolation is the safer candidate. If a later measurement
proves a strict small bounded budget, cooperative main-thread execution may be
the smaller option. This is an evidence-dependent design fork, not a reason to
add a generic job framework now.

## Transient preview contract

If a future execution path exposes intermediate positions, they must be
operation-local derived preview state:

* never Dataset Coordinates, dirty state, or persistence;
* never a Save Coordinates target before complete success;
* never an authority override for manual, stored, mixed, routing, labels, or
  Self-loop presentation;
* completion may commit only the final derived placement to the normal
  presentation pipeline;
* Cancel, technical failure, stale operation, or replacement discards the
  transient preview and uses the bounded fallback for coordinate-less initial
  display.

Graph-only provisional styling may be considered later, but exact opacity,
copy, accessibility, and focus behavior are not decided here. The current
application has no transient Frontier snapshot state, so no claim is made that
this preview contract is already implemented.

## Required lifecycle protocol before implementation

A production execution checkpoint must define operation identity and reject
stale results for Dataset replacement, repeated open, unmount/remount,
development lifecycle re-entry, locale change, completion-versus-Cancel races,
Cancel-versus-worker completion, and fallback followed by an old Frontier
result. Technical failure, user Cancel, and future budget/timeout exhaustion
must remain distinct outcomes. Fixed timeout is not introduced here.

Initial Automatic Display and Explicit Auto Layout may share low-level
execution mechanics in the future, but their Cancel semantics remain separate:
Automatic Display falls back to `settleInitialPlacement`; Explicit Auto Layout
has its own pre-layout rollback meaning and is not changed by this audit.

## Decision and boundaries

Do not implement Workerization, cooperative scheduler, Cancel UI, transient
styling, fallback wiring, or Frontier retuning in this checkpoint. First extract
or otherwise specify a pure, deterministic Frontier solver boundary with a
serializable input/output contract and bounded lifecycle messages. Until then,
the accepted production state remains the existing Product path and the
Frontier artifact remains DEV/review-only.

Human Review remains `QUALIFIED`; crossing residual, dense congestion, and
large-dense latency remain separate quality/operational follow-ups.

## Validation

This checkpoint changed documentation and a diagnostic decision artifact only;
production source and solver behavior were not changed.
