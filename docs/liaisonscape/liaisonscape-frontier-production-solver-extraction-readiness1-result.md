# LiaisonScape Frontier Production Solver Extraction Readiness / Contract 1

Date: 2026-09-16

## Final classification

`BLOCKED: FRONTIER LINEAGE NOT REPRODUCIBLE FROM CURRENT SOURCE`

Frontier-12 remains an accepted automatic-display candidate, but the current
repositories do not expose one production-extractable implementation that can
recreate the reviewed artifact from a normalized Dataset input. The current
evidence identifies lineage and artifacts, not a complete current-source
solver pipeline. Extraction must therefore stop before refactor or runtime
architecture selection.

## Evidence and separation

The research artifacts and Vite acceptance seam identify `frontier-12` and
materialized candidate families. `src/App.tsx` only fetches the resulting
precomputed positions in the DEV acceptance path. `src/actual-product-initial-layout.ts`
does not select Frontier and keeps normal coordinate-less opening on
`settleInitialPlacement`; stored and mixed Coordinates retain their existing
authority.

`src/initial-layout-provider.ts` is a separate bounded prototype. It contains
label-envelope/coarse-objective proxy logic and a current Product fallback, and
its own comment explicitly says it is not wired into App and does not claim to
be the diagnostic Post materializer. It cannot be treated as the Frontier-12
solver without changing the evidence.

The following Frontier stages are consequently not source-backed as one
reproducible production pipeline: topology/geometry preprocessing, candidate
generation, Frontier selection/scoring, refinement, exact tie-breaking, and
final artifact materialization. Product routing, Relation-label, Node-label,
Self-loop, viewport fit, and research comparison/evaluation remain separate
authorities or diagnostics and must not be folded into a pure placement solver.

## Contract that can be specified now

The eventual extraction boundary should be:

`normalized serializable Dataset-derived placement input -> deterministic Frontier-12 computation -> complete derived Node positions`

The input must be plain records containing stable Node IDs and the minimum
relation topology required by the actual Frontier implementation. Labels,
locale, measured text geometry, viewport, stored Coordinates, and manual state
must not be assumed as inputs until source evidence proves they affect the
Frontier result. Self-loop and Parallel Relations must be explicitly covered or
explicitly excluded by the recovered implementation. Output must contain every
input Node exactly once with finite x/y coordinates plus a structured failure
reason; no partial output is authoritative.

Determinism must cover stable ordering, Map/Set traversal, floating-point
operation order, random/time/environment/DOM dependence, locale and viewport
dependence, previous-operation state, and mutable globals. Structured-clone
friendly plain data is the desired boundary, but this audit does not claim the
current Frontier implementation already satisfies it.

## Product and transient-state boundary

Frontier may own only initial derived Node geometry. It must not own routing,
Parallel routing, Relation-label or Node-label placement, Self-loop
presentation, viewport fit, selection, graph interaction, manual placement,
stored Coordinates, Save Coordinates, persistence, or dirty-state.

Any future intermediate snapshot would be operation-local transient preview,
never Dataset state or Save Coordinates input. Completion could publish only a
complete final derived placement; failure, Cancel, replacement, unmount, or a
stale operation must discard it. These are contract requirements, not current
implemented behavior.

## Current architecture decision

Do not extract, refactor, add a Worker, add cooperative scheduling, add Cancel
UI, or design snapshot transport in this checkpoint. First recover or recreate
the Frontier-12 algorithm as current-source code with a parity gate against the
reviewed artifact: exact Node ID set, coordinate tolerance, deterministic
fingerprint, artifact hash or normalized result signature, and fixture binding.

Only after that gate can main-thread bounded execution versus cooperative
execution versus Worker isolation be evaluated. The previous cancellation
audit remains valid: current acceptance has no browser-side long-running
Frontier computation or interruptible boundary.

Human Review remains `QUALIFIED`, with accepted ordinary crossing residual and
existing dense/runtime boundaries. Production default remains unchanged.

## Validation

This checkpoint changes documentation and a diagnostic decision artifact only;
production source, provider selection, and Frontier behavior are unchanged.
