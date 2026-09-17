# LiaisonScape Explicit Auto Layout Production Operation Staging 1

Date: 2026-09-17  
Contract: `E2R-LIAISONSCAPE-EXPLICIT-AUTO-LAYOUT-PRODUCTION-OPERATION-STAGING1`  
Classification: **D. STAGING EXPOSED ARCHITECTURE CONFLICT / PRODUCTION IMPLEMENTATION HOLD**

## Decision

Production operation staging is not safe to close from the current source.
The requested lifecycle is valid as a previously accepted diagnostic contract,
but the production-shaped source pieces do not yet share the required
Explicit Auto Layout semantics. Wiring them now would either reuse Initial
Automatic Display behavior incorrectly or silently discard Product/Pinned
authority.

No production source, UI, solver, Dataset, Coordinate, persistence, or
Initial Automatic Display behavior was changed.

## Current production execution path

The current `App.tsx` path is:

```text
requestAutoLayout
  -> confirmation when coordinates are dirty
  -> applyAutoLayout
  -> synchronous solveAutoLayout
  -> setPositions for the result
  -> coordinatesDirty = true
  -> all Nodes marked adopted for the existing Save Coordinates path
```

There is no production Explicit Auto Layout Preview, Accept, Reject, or
pre-operation revert state in `App.tsx`. The existing `AutoLayoutConfirmation`
only confirms replacement of positions; it is not the operation-local Preview
contract.

## Reuse audit and blockers

### Existing Worker adapter is Initial Automatic Display-specific

`src/frontier-automatic-display-adapter.ts` and its snapshot factory are
currently shaped for the coordinate-less Initial Automatic Display path. The
factory rejects stored and mixed Coordinates, while Explicit Auto Layout is a
user operation invoked against an existing working Dataset. Its Cancel
semantics must preserve the pre-operation display, not select the Initial
Display fallback.

The adapter can therefore provide transport and stale-result patterns, but it
cannot be reused as the Explicit operation contract without a separate
operation boundary.

### Worker Product evaluation is not snapshot-aware

`experimental/frontier-product-worker-execution-proof1/core.ts` evaluates
proposals through an empty presentation state: empty manual route/curvature,
Self-loop, Relation-label, Node-label, and previous automatic placement maps.
The current App owns these Product/user presentation states in refs and does
not serialize them into that Worker job.

The resulting positions could be rendered in the App, but selection would not
be faithful to the current Product presentation snapshot. This is a semantic
gap, not a quality-tuning opportunity. Product routing, Relation-label,
Node-label, and Self-loop authority must remain downstream and must be
evaluated against the operation snapshot before a candidate is offered for
Preview.

### Pin runtime is not available

The Pin persistence contract is closed at draft/spec level, but the current
App has no production Pin reader/writer or active-anchor extraction. The
existing pinned feasibility implementation is diagnostic and is not the
reviewed Frontier-12 lineage. A production Explicit operation cannot claim
Pin-preserving staging until the input boundary and persistence authority are
connected explicitly.

### Lifecycle implementation is diagnostic-only

`experimental/quality-operation-lifecycle/contract.mjs` and its tests prove
the desired state machine: immutable snapshot, calculation, Cancel/stale
handling, isolated Preview, Accept/Reject, bounded revert, and Save
Coordinates separation. It is not imported by `App.tsx`. Copying it into App
as an ad hoc second implementation would break the executable-provenance and
single-boundary requirements.

## Required next boundary

Before production operation staging can begin, a bounded source design must
establish:

1. a production Explicit operation snapshot containing the current working
   positions, coordinate ownership/Pin inputs, Dataset/graph identity, and
   Product presentation snapshot;
2. a transport-neutral operation adapter whose Cancel/stale/failure behavior
   is Explicit Auto Layout-specific;
3. a serializable Product evaluation input or equivalent source-faithful
   selection boundary that preserves downstream Product authority;
4. a hard structural validation gate, followed by the established explicit
   catastrophic-policy seam and read-only Preview;
5. Accept as session/working-coordinate adoption only, Reject/Cancel/failure/
   stale as pre-operation preservation, and Save Coordinates as the only
   persistence boundary;
6. an explicit Pin integration decision or a clearly bounded non-Pin staging
   mode that cannot be mistaken for general Explicit Auto Layout support.

The dense Product-faithful Preview remains a documented future quality
follow-up: it was reviewable but visibly congested, and greater Graph-space
separation may be desirable. That observation does not authorize spacing
retuning or block the architecture decision above.

## Initial Automatic Display protection

The accepted Initial Automatic Display contract remains unchanged:

```text
coordinate-less Dataset open
  -> settleInitialPlacement immediate fallback
  -> Frontier async Worker
  -> pending + Cancel
  -> current complete finite result only, render-only adoption
```

Its provider, fallback, pending/cancel behavior, stored/mixed Coordinate
bypass, and render-only Dataset/persistence semantics are not reused as the
Explicit Auto Layout lifecycle.

## Reproduction and evidence

Source evidence:

* `src/App.tsx`: `requestAutoLayout`, `applyAutoLayout`, direct position and
  dirty-state adoption;
* `src/frontier-automatic-display-adapter.ts`: Initial Automatic Display
  snapshot rejection and transport lifecycle;
* `experimental/frontier-product-worker-execution-proof1/core.ts`: empty
  Product presentation state in Worker evaluation;
* `experimental/quality-operation-lifecycle/contract.mjs`: accepted but
  diagnostic-only Explicit lifecycle;
* `docs/liaisonscape-explicit-auto-layout-preview-adoption-contract-reconciliation1-result.md`;
* `docs/liaisonscape-explicit-auto-layout-catastrophic-preview-boundary1-result.md`.

Focused verification commands:

```text
node --experimental-strip-types --test tests/frontier-automatic-display-adapter.test.ts tests/quality-operation-lifecycle.test.ts
npm run lint
npm run build
```

These confirm the existing Initial Automatic Display adapter and diagnostic
lifecycle contracts. No browser Preview campaign was started because the
target production Explicit Preview surface does not yet exist.

## Final boundary

The next safe checkpoint is a dedicated Explicit operation input/adapter
boundary design and implementation, not direct App wiring. It must preserve
the current authority split and produce executable provenance from the
operation snapshot through Product-faithful evaluation to Preview. Production
default, Initial Automatic Display, Human Review, provider selection, and
rollout remain unchanged.
