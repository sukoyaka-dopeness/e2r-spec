# E2R-LIAISONSCAPE-EXPLICIT-AUTO-LAYOUT-PREVIEW-PIN-CONTRACT1

Date: 2026-09-17

## Classification

**C. BLOCKED BY PERSISTENCE / AUTHORITY CONTRACT**

The Preview/Accept/Reject lifecycle can be specified as a separate Explicit
Auto Layout operation, but production implementation is not ready. Pin
ownership can be bounded to a LiaisonScape-owned Layout/Presentation Extension
direction, yet the exact persistence payload, saved-coordinate anchor rule,
orphan-Pin behavior, and atomic Save Coordinates transaction are not current
contracts. Independently, the current Frontier generator has no hard-constraint
input, so a bounded pinned-Frontier feasibility checkpoint is required before
it can be used for this operation.

No LiaisonScape runtime, Dataset schema, public UI, Coordinate writer,
Frontier solver, or Product presentation behavior changed in this checkpoint.

## Source baseline

The source audit used LiaisonScape revision
`3c383c67c8e3c599be9de7f99d6785261e147479` plus its preserved working-tree
state, and the accepted E2R-SPEC records through revision
`391da6d9d9184823570366962f9e417a04898b36`. Existing dirty material was not
modified.

Relevant source-of-truth records are:

- [Explicit Auto Layout current-state gap audit](liaisonscape-explicit-auto-layout-completion-readiness-current-state-gap-audit1-result.md)
- [Explicit high-quality Auto Layout lifecycle](../liaisonscape-explicit-high-quality-auto-layout-operation-lifecycle1-result.md)
- [Explicit lifecycle contract closure](../liaisonscape-explicit-high-quality-auto-layout-operation-lifecycle-contract-closure1-result.md)
- [Explicit Auto Layout semantic decision](liaisonscape-explicit-auto-layout-semantic-decision.md)
- [Layout persistence responsibility decision](../layout-persistence-responsibility-decision.md)
- [Coordinate Extension draft](../../extensions/coordinate-extension-draft.md)

## Current Explicit Auto Layout path

The current application path is:

```text
More → requestAutoLayout
→ dirty-coordinate confirmation when needed
→ synchronous solveAutoLayout on the main thread
→ direct merge into working positions
→ mark graph-visible Entity IDs adopted
→ coordinatesDirty = true
→ Product presentation recomputes
→ Save Coordinates writes the adopted Coordinate result
```

`App.tsx` owns the confirmation, operation invocation, working-position
adoption, dirty state, and adopted-Entity bookkeeping. `src/auto-layout.ts`
owns a deterministic Node-only structural solver. There is no current Pin map,
running Explicit Auto Layout operation, candidate-only preview, mid-operation
Cancel, stale-result guard, or bounded candidate revert in the production App.

This is separate from the accepted Initial Automatic Display contract. The
Initial Display adapter preserves a usable `settleInitialPlacement` fallback
and adopts a current complete Worker result render-only. Those semantics must
not be copied into Explicit Auto Layout.

## Proposed operation contract

The following is the implementation contract to carry into a later bounded
implementation checkpoint:

```text
current working display
→ snapshot
→ async Explicit Auto Layout calculation
→ isolated candidate and Product preview
→ Accept / Reject
```

### Snapshot boundary

The operation snapshot must include, at minimum:

- Dataset identity and revision, graph-visible topology, and operation/generation
  identity;
- current working Node positions, stored-coordinate fingerprint,
  adopted-coordinate state, and `coordinatesDirty`;
- the current Pin state and the coordinate-space identity used by its anchors;
- manual ordinary Relation route/curvature, manual Relation-label, manual
  Node-label, and manual Self-loop inputs;
- locale, algorithm/configuration version, and explicit execution budget;
- the Product presentation inputs needed to evaluate the candidate.

The snapshot is immutable for the calculation. Routes, labels, Self-loop
geometry, and viewport fit derived from candidate positions are preview data;
they are not adopted independently and do not transfer Product authority to
the structural solver.

### Transaction and race rules

- Running calculation does not mutate Dataset data, canonical working
  positions, dirty state, or adopted-coordinate state.
- Accept is one atomic working-coordinate transaction. It adopts the complete
  candidate Node map, marks the applicable Entity IDs adopted, sets the
  existing dirty state, and preserves manual presentation ownership.
- Reject and running Cancel leave the pre-operation display and coordinate
  state unchanged.
- Dataset replacement, graph mutation, coordinate load/save/reset, manual
  presentation mutation, locale changes that affect Product evaluation,
  unmount, and a newer Auto Layout operation invalidate the old result.
- A result is publishable only when operation identity, generation, snapshot
  identity, cancellation state, and complete finite Node positions all match.
- No partial candidate, partial Pin map, or partial Product presentation may
  be published.
- Accept then Save uses the existing explicit persistence boundary. Cancelled,
  rejected, stale, failed, or invalid results do not create dirty work.

## Pin ownership and persistence boundary

### Responsibility

Pin should not be added to the E2R Core or silently embedded in the Coordinate
payload. The current Coordinate draft deliberately represents positions in a
Coordinate Space and excludes Relation routes, labels, styling, view state,
grouping, and generation algorithms. The existing Layout persistence decision
also treats Layout and Coordinate as separate responsibilities.

The recommended ownership is therefore:

```text
LiaisonScape-owned Layout/Presentation Extension
→ Entity Pin intent
Coordinate Extension
→ saved positional anchor in the compatible Coordinate Space
```

Pin is an intent that refers to the Entity's saved coordinate; it is not a
second coordinate value and does not fix Edge route, curvature, labels, or
Self-loop geometry. Unknown or newer extension data should follow the existing
unknown-Extension preservation boundary whenever practical.

### Save and open semantics requiring contract closure

The current source supports a working-state model: Pin/Unpin changes may set
pending user work, while an explicit Save transaction persists the result. It
does not yet implement Pin state or a Layout writer, so the following must be
closed before production implementation:

1. A durable Pin must have a compatible saved positional anchor. A working Pin
   may be staged together with the current working position, but Save must not
   persist a Pin without its anchor or persist only one half of the pair.
2. Save Coordinates should remain the explicit user transaction for the
   coordinate plus Pin change, unless a separately named Save Layout operation
   is deliberately chosen. That choice is not made by this audit.
3. A `pinned=true` record without a compatible position must fail closed for
   layout: it must not invent an origin or silently pin a guessed coordinate.
   Whether the writer rejects it, preserves it as inactive unknown data, or
   exposes a repair state is still an authority decision.
4. Unpin canonicalization (`false`, omission, or another representation) and
   exact Extension identifier/schema remain unresolved.
5. Pin changes must participate in replacement, beforeunload, and dirty-state
   protection as pending working layout state; they must not autosave.

These are not solved by the illustrative `{ x, y, pinned }` object used in
earlier discussion. That object is not a schema.

## Frontier / Worker reuse boundary

Reusable pieces are:

- the shared deterministic Frontier candidate-set generator;
- the Product presentation evaluation/ranking machinery, when it receives a
  complete Explicit Auto Layout presentation snapshot rather than empty state;
- Worker transport, complete-finite-result validation, and
  operation/generation/snapshot safety patterns.

The current implementation is not Pin-capable:

- `FrontierPlacementInput` contains only Nodes and Edges;
- `generateFrontierCandidateSet` generates positions from topology and config,
  not from current positions or pinned anchors;
- the candidate generator has no pinned-ID set, anchor map, or fixed-position
  constraint input;
- `computeFrontierProductProposals` applies a global spacing transform to every
  generated position and then evaluates Product presentation;
- the Worker proof's `emptyPresentationState()` supplies empty manual routes,
  labels, Self-loop overrides, and previous placement maps;
- the Initial Display snapshot contains graph/config identity but rejects
  stored/mixed Coordinates and is therefore not an Explicit Auto Layout
  snapshot.

Consequently, generating all Nodes and overwriting the selected coordinates of
Pinned Nodes afterward is not accepted as hard-constraint support. It does not
let the movable Nodes optimize around fixed anchors and can change Product
crossing, route, label, and Self-loop quality. No such post-hoc implementation
was added.

The next feasibility checkpoint must use the shared implementation and a real
constraint boundary to test no Pin, one/few Pins, many Pins, and all Pins for:

- exact finite preservation of pinned coordinates;
- deterministic unpinned candidate generation;
- Product-authoritative presentation evaluation with non-empty manual state;
- quality and runtime tendency;
- all-pinned and zero-movable-node behavior.

The experiment must not be treated as a solver retune or as production Pin
support until the evidence establishes a source-level boundary.

## Product presentation authority

Automatic Edge route/curvature is re-derived and evaluated by Product from
candidate Node geometry. Manual Edge route/curvature, manual Relation-label,
manual Node-label, and manual Self-loop state remain user authority. Pinning a
Node does not pin any connected Edge or label geometry.

The current App has these inputs in application state and passes them to the
normal Product presentation derivation. The current Worker proof does not: it
constructs empty maps for those inputs. Therefore its parity and Worker
feasibility evidence cannot be promoted directly to the Explicit Auto Layout
production contract without a snapshot-aware Product input adapter.

## Edge-case contract

| Case | Required bounded behavior | Current status |
| --- | --- | --- |
| all Nodes pinned | preserve every anchor; either return a finite unchanged candidate or a structured no-movable-nodes outcome | not implemented |
| zero graph-visible Nodes | no operation/candidate; no dirty mutation | current UI disables Auto Layout; future adapter must retain this |
| one movable Node | preserve Pins and define deterministic placement or explicit no-improvement outcome | not established |
| stored Coordinates | allowed for Explicit operation only after snapshot; Pin anchor uses compatible stored coordinate | current worker adapter rejects stored coordinates |
| mixed stored/derived positions | snapshot and explicit ownership needed; no Initial Display adapter reuse | current worker adapter rejects mixed coordinates |
| unsaved manual Node moves | confirmation/snapshot must preserve or explicitly replace according to the operation contract | current synchronous confirmation only covers direct replacement |
| Pin changed but unsaved | pending work; no autosave; replacement/exit protection required | no Pin state exists |
| self/parallel/manual routed Relations | preserve inputs; Product re-evaluates automatic geometry around candidate | Worker proof uses empty manual state |
| manual labels | preserve inputs; Product re-evaluates candidate presentation | Worker proof uses empty manual state |
| replacement/mutation during calculation | stale/cancel with no partial adoption | lifecycle contract exists diagnostically, not in Explicit App |
| repeated, cancel-then-rerun, reject-then-rerun | old operation invalidated; new snapshot is authoritative | not wired to Explicit App |
| Accept then Save | one explicit transaction for adopted Coordinates and resolved Pin persistence | Pin writer unresolved |
| Save then reopen | restore Pin only with a compatible saved anchor | schema and reader unresolved |

## Decision and next step

The Preview transaction semantics are sufficiently bounded to carry into an
implementation design, but Pin persistence and hard-constraint Frontier
generation are not source-ready contracts. This checkpoint therefore closes
with **C**, not **A**:

- do not wire Frontier into Explicit Auto Layout yet;
- first close the Pin Extension/persistence/atomic-save authority decision;
- then run a bounded pinned-Frontier feasibility experiment using real anchors;
- only after both gates pass, design the Explicit Auto Layout operation adapter
  and Product snapshot path.

This result does not reopen or change Initial Automatic Display, its accepted
Frontier provider, its Worker lifecycle, or its Human Review disposition.

## Validation

This was a source/spec audit only. No runtime or executable feasibility code
was added, so no application test campaign was required. Existing accepted
evidence remains the authority: the current Explicit Auto Layout focused audit
was 20/20, and the accepted baseline records the full application gates.

The documentation validation for this checkpoint is `npm.cmd run validate`
plus `git diff --check`, to be run after the roadmap synchronization.
