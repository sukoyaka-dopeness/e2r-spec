# LiaisonScape Explicit Auto Layout Pin Runtime Integration 1

Date: 2026-09-17  
Contract: `E2R-LIAISONSCAPE-EXPLICIT-AUTO-LAYOUT-PIN-RUNTIME-INTEGRATION1`  
Classification: **B. FIXED-ANCHOR OPERATION ESTABLISHED / PIN WRITER GAP REMAINS**

## Decision

The Explicit Auto Layout operation boundary is now Pin-capable for runtime
resolution and fixed-anchor candidate generation. Dataset Pin intent is read
from the accepted draft Layout Extension, compatible saved Coordinate anchors
are resolved by exact Entity ID and Space identity, staged/current working
anchors are supported, and active Pins are passed to an anchor-aware candidate
generator from the beginning of candidate construction.

The Pin mutation writer and atomic Save Coordinates integration are not yet
implemented. This checkpoint therefore does not authorize App Pin/Unpin UI,
Explicit Auto Layout production wiring, or a claim that Pin persistence is
complete.

## Runtime Pin resolution

`src/explicit-auto-layout-pin.ts` provides a read-only resolver for:

```text
Dataset Layout Extension + supported Coordinate Space
  -> saved Entity Pin anchor

staged Pin + current working position
  -> staged operation-local anchor

saved Pin + explicitly identified manual working move
  -> staged operation-local anchor
```

The resolver requires the exact draft extension identifier and version,
Entity-ID keyed active records, an exact matching compatible Space, exactly one
compatible coordinate occurrence, and finite `x/y`. It does not guess a Space,
use `(0, 0)`, restore a missing coordinate, or copy coordinates into the Pin
Extension.

Orphan, malformed, unsupported, missing, partial, duplicate, and incompatible
active Pin anchors produce diagnostics and fail the operation snapshot capture.
Inactive `pinned: false` records are not treated as active Pins. The Dataset is
never mutated by resolution.

`captureExplicitAutoLayoutSnapshotFromDataset` resolves these inputs and then
uses the existing immutable Explicit operation snapshot boundary. Its
`activePins` map remains plain data:

```text
Entity ID -> { x, y, source: "saved" | "staged" }
```

## Fixed-anchor candidate generation

`src/pinned-frontier-candidate-generator.ts` is the single source
implementation for the bounded fixed-anchor construction previously present
inside `experimental/pinned-frontier-feasibility1/core.ts`.

- No active Pins delegates to `generateFrontierCandidateSet`, preserving the
  existing no-Pin candidate lineage.
- Partial Pins use bounded anchor-aware relaxation; pinned Nodes are fixed
  throughout candidate construction and unpinned Nodes are the only movable
  Nodes.
- All Pins return the unchanged finite anchor map without unnecessary solver
  iteration.
- Global spacing and final rounding do not move active Pins.
- Candidate output contains deterministic identity, structural metadata, and
  complete finite positions.

The diagnostic feasibility module now consumes this shared source generator
through a compatibility export. The algorithm was not retuned and no second
production/experimental implementation remains.

## Product and operation boundary

The operation module now selects Pin-aware candidates through the same captured
Product presentation snapshot as the no-Pin path. Manual routing/curvature,
Relation-label, Node-label, Self-loop, previous routes/placements, feedback,
and Product evaluation remain downstream authorities. A Node Pin constrains
Node geometry; it does not pin an Edge route or label.

Structural validation requires:

- complete Node map;
- finite coordinates;
- exact preservation of every active Pin; and
- completed Product evaluation.

Pin violation is a structural failure, not a Preview warning. Strict Product
eligibility remains evidence and is not changed into an operation failure.
The existing structurally-valid Preview policy and catastrophic-policy seam are
unchanged.

The transport-neutral adapter remains unchanged in responsibility: it can
carry the Pin-aware snapshot/result over in-process, cooperative, or Worker
transport, but it does not adopt positions or persist a Dataset.

## No-Pin and Pin evidence

The focused evidence covers:

- snapshot serializability and immutable input capture;
- Product presentation state propagation;
- no-Pin operation behavior;
- saved Pin resolution;
- staged Pin resolution;
- persisted Pin with an explicit current manual move;
- partial/few Pins;
- all-Pinned unchanged-map behavior;
- exact finite anchor preservation;
- orphan/invalid Pin fail-closed diagnostics;
- operation adapter Cancel/stale protection; and
- existing pinned Frontier feasibility and portfolio consumers using the shared
  generator.

This establishes fixed-anchor operation behavior, not general Explicit Auto
Layout quality. Dense congestion, crossing residuals, and Product quality
follow-ups remain as previously documented.

## Remaining boundary

The accepted Pin persistence contract still requires a future production writer
and atomic Save Coordinates integration. That boundary must preserve unknown
fields, canonical Unpin omission, orphan safety, and the rule that compatible
Coordinates and Pin state are persisted together. Until then, App Pin/Unpin UI,
Dataset mutation, and normal Explicit Auto Layout wiring remain separate
checkpoints.

Initial Automatic Display remains isolated and unchanged, including its
coordinate-less startup condition, fallback, pending/Cancel behavior, stored/
mixed bypass, and render-only adoption.

## Validation

```text
node --experimental-strip-types --test \
  tests/explicit-auto-layout-operation.test.ts \
  tests/pinned-frontier-feasibility.test.ts \
  tests/pinned-cross-family-product-portfolio-experiment1.test.ts  # 12/12 PASS
npm test                                                            # 606/606 PASS
npm run lint                                                         # PASS
npm run build                                                        # PASS
e2r-spec: npm run validate                                           # PASS
git diff --check                                                     # PASS
```

The full application suite completed with 606/606 passing tests. It emitted
the existing Vite/WebSocket diagnostic that port `24678` was already in use;
no test failed and the process exited successfully. The source change was
type/build-boundary-only after the focused behavior checks, and the build
completed successfully.
