# LiaisonScape Explicit Auto Layout Completion Readiness / Current-State Gap Audit 1

Date: 2026-09-16

## Classification

**AUDIT COMPLETE / EXPLICIT AUTO LAYOUT IMPLEMENTATION READINESS BLOCKED BY
LIFECYCLE AND ADOPTION CONTRACT**

This audit did not change production behavior. Initial Automatic Display,
Frontier, Product presentation, Dataset Coordinates, persistence, and dirty
state remain unchanged.

## Current execution path

The current button path is:

```text
Workspace More
→ requestAutoLayout
→ dirty-coordinate confirmation when coordinatesDirty is true
→ applyAutoLayout
→ synchronous solveAutoLayout(..., default 12 iterations) on the main thread
→ merge result into working positions
→ mark all graph-visible Entity IDs adopted and set coordinatesDirty
→ downstream Product presentation recomputation
→ existing explicit Save Coordinates for persistence
```

Cancel currently means Cancel on the pre-start confirmation dialog. It leaves
the current positions unchanged. There is no mid-computation Cancel because
the current computation is synchronous and has no operation state.

The machine-readable source audit is at
`../e2r-liaison-scape/experimental/explicit-auto-layout-completion-readiness-current-state-gap-audit1/result.json`.

## Authority and persistence

`src/auto-layout.ts` owns deterministic structural Node placement. It builds
undirected distinct-neighbor adjacency, ranks a seed by degree, creates a
center/ring seed, and performs bounded Node repulsion plus neighbor attraction.
It ignores self-relations for placement attraction and collapses parallel
relations for adjacency.

Routing, Relation-label, Node-label, Self-loop presentation, and viewport
remain Product/Application authorities and are recomputed or rendered from the
resulting working positions. Auto Layout does not clear manual route, label, or
Self-loop state. All graph-visible Entity positions are registered as adopted
when the result changes.

The Dataset and stored Coordinates remain unchanged until the existing Save
Coordinates action. Before Save, the result is temporary working state and
`coordinatesDirty`/pending-work protection applies. After Save, the existing
Coordinate writer persists the adopted positions. A dirty-coordinate
confirmation protects existing unsaved working positions before replacement.

## Why the graph can look disordered

The primary source-backed cause is not a stale or partial result. The solver
does not evaluate edge crossings, occupied paths, Relation-label corridors,
Node-label envelopes, Self-loop pressure, or viewport quality while generating
the positions. The downstream Product presentation derives those structures
afterward, but the current explicit operation has no candidate portfolio or
Product-authoritative ranking loop. It can therefore produce deterministic
Node geometry whose final routes and labels are locally valid yet globally
crowded or crossing.

This is a structural-solver quality ceiling combined with a missing explicit
proposal/selection lifecycle. It is not evidence that routing, label, or
Self-loop authority should move into the solver, and it is not currently a
Dataset or persistence defect.

## Frontier/Worker reuse

The shared Frontier structural generator, pure Product evaluation/ranking
machinery, Worker transport, and complete-finite validation patterns are
reusable. The current Initial Automatic Display adapter is not directly
reusable: it is coordinate-less-specific, rejects stored/mixed Coordinates,
uses an empty manual/presentation snapshot, and defines Cancel/fallback as
preserving the initial `settleInitialPlacement` fallback.

Explicit Auto Layout instead needs to snapshot current session positions and
manual presentation inputs, preserve the pre-operation display on Cancel, and
decide how a candidate becomes working positions. It must use a separate
explicit-operation adapter over shared computation rather than wiring the
Initial Display adapter into the button.

## Unresolved product/authority decision

Current App behavior directly applies the synchronous result to working
positions. Existing explicit high-quality lifecycle research describes a
candidate-only preview followed by explicit accept/reject and bounded revert.
These are different adoption semantics. The current source establishes the
direct-apply contract, while the higher-quality operation contract is not yet
wired.

This audit therefore does not choose silently between:

1. preserving direct explicit Auto Layout adoption and adding bounded
   cancellation/rollback around it; or
2. introducing a render-only candidate preview with explicit accept/reject,
   then applying the existing working-coordinate/Save semantics on accept.

The next implementation checkpoint may safely define and test this lifecycle
boundary. Frontier/Worker integration and quality-solver adoption should wait
until that choice is explicit and the manual-authority snapshot contract is
fixed.

## Validation and next step

Focused current-source tests passed: **20/20** across `auto-layout.test.ts`,
`initial-layout-provider.test.ts`, and `initial-layout-adoption-readiness.test.ts`.
The accepted baseline already has LiaisonScape `588/588` tests, lint, and build
passing, plus E2R-SPEC validation; no source was changed in this audit, so the
full suite was not rerun.

The next safe checkpoint is a bounded Explicit Auto Layout lifecycle and
authority contract decision/implementation. It must preserve the accepted
Initial Automatic Display path and keep Frontier, routing, labels, Self-loop,
Dataset, Coordinate, persistence, and dirty-state authority in their current
boundaries.
