# LiaisonScape Explicit Auto Layout Experiment 1A Result

Date: 2026-08-30

Status: `ACCEPTED — EXPLICIT AUTO LAYOUT EXPERIMENT 1A`

Decision: `EXPERIMENT PASSED — EXPLICIT AUTO LAYOUT PURE SOLVER ACCEPTED FOR INTEGRATION`

R2: `SOLVER EXPERIMENT ACCEPTED — PRODUCTION INTEGRATION NOT STARTED`

## Scope

EXP-1A implemented a pure deterministic topology-seed plus bounded-relaxation
solver and focused tests only. It does not modify App/UI behavior, working
Coordinate ownership, dirty confirmation, Save Coordinates, Dataset data,
schema, samples, or any other repository.

The solver uses graph-visible Entity-to-Entity Relations, undirected-derived
distinct-neighbor adjacency, stable Entity-ID ordering, self-Relation
exclusion, and deterministic disconnected-component packing. It returns a new
ID-to-position result and does not mutate its input.

## Full-test diagnostic

The initial `npm.cmd test` invocation appeared to stop after startup. The
Codex command wait ended before the Node process had completed; it did not
provide evidence of a Node exit code, assertion failure, or leaked handle.
The first classification was therefore provisional rather than a product
failure.

Isolation evidence:

- Auto Layout focused test: 3 passed in about 95 ms.
- Existing per-file suite: every file completed; `appUiIntegration.test.ts`
  was the slowest at about 4.8 s and passed 29 tests.
- Full suite with `--test-concurrency=1`: 277 passed, 0 failed, exit 0, about
  8.6 s.
- Normal `npm.cmd test`: 277 passed, 0 failed, exit 0, about 5.2 s wall time
  (Node reported about 4.8 s). A pre-existing WebSocket port-in-use warning
  appeared, but did not affect the result.
- No force-exit was required.

The evidence establishes `CLASS-A — EXECUTOR TIMEOUT`, not a test or solver
hang. The initial symptom was caused by the command wait boundary. The
per-file and sequential runs also establish that the new test and solver do
not cause a stall. No bounded fix was required for the diagnostic symptom.

## Solver evidence

The focused tests verify reorder-invariant deterministic output, duplicate
Relation collapse, self and non-Entity edge exclusion, degree-based central
seed selection, and disconnected component separation. The implementation's
relaxation loop has a fixed default of 12 iterations and no recursion,
timers, promises, workers, processes, network access, or file handles.

Representative focused runtime was under 10 ms for the topology fixtures.
The solver therefore cannot explain the initial full-suite wait. No normative
performance threshold is introduced.

## Codex assessment

- Agree: the pure helper boundary, stable-ID determinism, and no-serialization
  experiment scope match the semantic decision.
- Concern: numeric relaxation weights, label/crossing scoring, node dimensions,
  and visual Lighthouse legibility remain untested and must be addressed by a
  later visual/integration checkpoint.
- Alternative considered: a topology-only radial placement would be simpler,
  but would not exercise the selected ALG-C bounded-relaxation candidate.
- Recommendation: proceed to a separately authorized production integration
  design/review only; keep dirty-state confirmation and Coordinate adoption
  outside this experiment.
- Diagnostic confidence: HIGH.

## Gates

- LiaisonScape focused tests: PASS (3/3).
- LiaisonScape full tests: PASS (277/277).
- LiaisonScape lint: PASS.
- LiaisonScape build: PASS.
- e2r-spec validation: pending this documentation commit.
- Validator/NarrativeLine cross-repository gates: not required for this pure
  solver-only checkpoint; no shared artifacts changed.

## Commit and boundaries

LiaisonScape commit: `e1836f3 feat: prototype explicit Auto Layout solver`.
It remains local and unpushed. This result document is the only e2r-spec
change in this checkpoint and will be committed separately after validation.

Production Auto Layout UI integration, More-menu changes, dirty confirmation,
Save Coordinates integration, browser acceptance, push, deployment, and the
next checkpoint remain unstarted.
