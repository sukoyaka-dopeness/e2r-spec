# LiaisonScape Explicit Auto Layout Operation Boundary 1

Date: 2026-09-17  
Contract: `E2R-LIAISONSCAPE-EXPLICIT-AUTO-LAYOUT-OPERATION-BOUNDARY1`  
Classification: **B. OPERATION BOUNDARY ESTABLISHED / PIN INTEGRATION GAP REMAINS**

## Decision

The current source now contains a production-shaped, App-independent Explicit
Auto Layout operation boundary. It captures an immutable serializable snapshot,
uses the existing shared Frontier candidate generator, evaluates each candidate
through the current Product presentation pipeline using the captured Product
state, validates the complete finite result, and returns an isolated Preview
proposal DTO. A transport-neutral adapter provides start, completion, failure,
Cancel, stale invalidation, and disposal behavior without adopting positions or
writing a Dataset.

The boundary is not yet a general Explicit Auto Layout production integration.
Pin input is first-class in the snapshot, but production Pin extraction and
fixed-anchor Frontier generation do not exist in current source. Any operation
with active Pins therefore fails closed with `PINS_UNSUPPORTED`; it is not
silently treated as an unpinned run.

No App wiring, Initial Automatic Display change, solver retuning, Product
authority move, Dataset mutation, persistence change, or UI change was made.

## Source boundary

The new `src/explicit-auto-layout-operation.ts` boundary is:

```text
plain Dataset/graph and working-state snapshot
  -> immutable Explicit Auto Layout snapshot
  -> shared generateFrontierCandidateSet
  -> bounded candidate positions
  -> current Product-owned deriveBoundedAutomaticPresentation
       (manual route/label/Self-loop and previous presentation inputs included)
  -> current Product quality metrics and deterministic ranking
  -> complete/finite structural validation
  -> explicit structurally-valid Preview policy seam
  -> isolated Preview proposal
```

The Frontier side owns only candidate Node geometry. Routing, Relation-label,
Node-label, Self-loop, presentation evaluation, viewport, persistence, and
manual authority remain outside the structural generator.

The snapshot includes operation and Dataset identity, graph topology, current
working positions, coordinate ownership and dirty baseline, active Pin anchors,
locale/configuration/budget, and the plain-data Product presentation inputs:
manual route/label/Self-loop state, previous automatic routes and placements,
feedback inputs, and relevant presentation options.

## Lifecycle and output contract

`ExplicitAutoLayoutOperationAdapter` is transport-neutral. Its injected
executor may later be backed by a Worker or another async transport, while the
same snapshot and result contract remains usable for deterministic in-process
replay. The adapter never changes working positions and never persists a
Dataset.

Cancellation resolves without publishing a result. Replaced or invalidated
operations resolve as stale, and late executor completion is ignored. Executor
failure is distinct from cancellation and stale outcomes.

The Preview DTO contains operation/snapshot identity, selected candidate
fingerprint and family, complete positions, candidate provenance, Product
metrics/signature, structural validation, warnings, and the current explicit
policy seam:

```text
structurally valid -> Preview admissible
strict Product eligibility -> evidence/warning, not an implicit failure
```

This preserves the prior two-tier/catastrophic-policy decision. It does not
invent an automated catastrophic classifier or change the strict
`isAutomaticLayoutPresentationEligible` predicate.

## Pin boundary

The operation snapshot accepts `{ x, y, source: "saved" | "staged" }` anchors
by Entity ID. Exact Pin preservation is included in structural validation.
However, current `generateFrontierCandidateSet` has no fixed-anchor input and
current App source has no production Pin reader/writer. Running the unpinned
generator and restoring Pins afterward would not be source-faithful, so active
Pin operations fail closed until a separate bounded pinned-generator and
Dataset/working-state integration checkpoint establishes that authority.

## Parity and provenance

The operation reuses the current source generator and current Product
presentation functions rather than copying the historical Worker proof's
empty presentation state. The focused test verifies serializable immutable
snapshots, propagation of manual Product state, complete finite Preview output,
Pin fail-closed behavior, adapter Cancel/stale protection, and invalid-input
rejection. The module exposes `explicitAutoLayoutProvenance`, linking the
snapshot identity and input fingerprint to the selected candidate fingerprint
and family.

This checkpoint does not claim parity with the reviewed Frontier-12 artifact
for Pin-aware Explicit Auto Layout, and it does not claim App integration.
The existing Initial Automatic Display adapter and lifecycle remain isolated.

## Reusable next boundary

The next safe implementation checkpoint may connect a real Explicit operation
to application lifecycle only after the Pin/non-Pin mode is explicitly chosen
and the Preview Accept/Reject policy is retained. It must preserve the
following separation:

```text
Explicit Cancel/Reject/failure/stale -> pre-operation working display
Explicit Accept -> session/working-coordinate adoption only
Save Coordinates -> Dataset persistence boundary
Initial Automatic Display -> separate fallback/render-only lifecycle
```

Worker/cooperative/Cancel architecture selection, production UI wiring, and
quality retuning remain outside this checkpoint.

## Validation

```text
node --experimental-strip-types --test tests/explicit-auto-layout-operation.test.ts  # 5/5 PASS
npm run lint                                                                  # PASS
git diff --check                                                              # PASS
```

No full application test campaign was run for this bounded source addition.
