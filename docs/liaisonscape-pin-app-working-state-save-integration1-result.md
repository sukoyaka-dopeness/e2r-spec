# LiaisonScape Pin App Working State / Save Integration 1

Date: 2026-09-17  
Contract: `E2R-LIAISONSCAPE-PIN-APP-WORKING-STATE-SAVE-INTEGRATION1`  
Classification: **E. APP WORKING-STATE / ATOMIC SAVE INTEGRATION ESTABLISHED / PIN UI REMAINS OPEN**

## Decision

LiaisonScape now connects the accepted pure Pin working-state and atomic
candidate boundary to the App lifecycle. App-owned Pin state is initialized
from each accepted Dataset, reconciled when an in-session Dataset mutation
removes an Entity, included separately from `coordinatesDirty`, and passed to
the existing Save Coordinates action through `buildAtomicPinSaveCandidate`.

Pin/Unpin UI is intentionally not implemented in this checkpoint. The App
mutation seam is present for the next Context Menu / Entity Detail checkpoint,
but no production control or visual Pin state was added.

## App working-state boundary

`App.tsx` owns a `WorkingPinState` independently of the Dataset:

```text
accepted Dataset
  -> createWorkingPinState(Dataset)
  -> App loaded Pin baseline + staged Pin / Unpin intent
  -> derive unsavedPins
```

Dataset replacement resets the Pin baseline from the accepted replacement.
Ordinary in-session Dataset updates retain valid operation-local Pin state and
reconcile IDs that no longer belong to the current Entity set. This prevents
stale working Pin intent from crossing a Dataset boundary.

`unsavedPins` is a distinct pending-work source. It is not folded into
`coordinatesDirty`, but it contributes to the existing `pendingUserWork`
calculation. Therefore Pin-only work participates in the existing Dataset
replacement confirmation and `beforeunload` loss-risk guard.

## Mutation and Coordinate ownership

The App contains internal `stagePinForEntity` and `stageUnpinForEntity` seams
for the future UI. They call the pure Pin state functions rather than writing
Extension JSON. A new Pin without a compatible saved anchor marks the current
working position as an adopted Coordinate candidate and sets
`coordinatesDirty`. Pin-created Coordinate work is removed from the adopted
set when the Pin is explicitly undone, unless the caller explicitly retains
that Coordinate as independent user work.

The existing Node move path remains independent: a manual move does not create
a Pin. A saved Pinned Node may be moved, and the current Coordinate is saved
with the existing Pin intent.

## Save Coordinates integration

The existing Save Coordinates action now runs when either coordinates or Pin
intent is dirty:

```text
current Dataset
  + persistable working Coordinates
  + App WorkingPinState
    -> buildAtomicPinSaveCandidate(...)
    -> Coordinate writer + canonical Layout Pin writer
    -> Dataset validation + exact Pin anchor resolution
    -> one Dataset adoption and one clean baseline
```

On success, the saved Dataset becomes the clean baseline, the Pin state is
reinitialized from that Dataset, and relevant coordinate/Pin pending state is
cleared. On failure, the current Dataset, working positions, Pin intent, and
pending state remain unchanged. Existing unrelated pending work is not marked
clean by this operation.

Export remains a persisted-Dataset operation and does not include staged Pin
intent. Initial Automatic Display remains render-only and isolated from this
Pin save path.

## Evidence and remaining boundary

Focused evidence covers App source wiring, Pin-only pending-work behavior, new
Pin coordinate adoption, saved-Pin manual move, canonical Unpin, Pin-then-
Unpin discard, unknown-field preservation, invalid/unsupported anchors,
failure atomicity, and reader round-trip. Existing Coordinate save and
replacement safety tests remain green.

The next bounded checkpoint is Pin UI and Human Check A. It must expose the
existing App mutation seams with explicit visual/keyboard ownership. Explicit
Auto Layout Preview/Accept/Reject App lifecycle remains separate. No Initial
Automatic Display, solver, routing, labels, Self-loop, Dataset schema, or
production rollout behavior changed.

## Validation

```text
node --experimental-strip-types --test \
  tests/pin-persistence.test.ts \
  tests/pin-app-working-state.test.ts \
  tests/dataset-replacement-safety.test.ts \
  tests/explicit-auto-layout-operation.test.ts  # 33/33 PASS
npm test                                        # 614/614 PASS
npm run lint                                    # PASS
npm run build                                   # PASS
e2r-spec: npm run validate                      # PASS
git diff --check                                # PASS
```

The full suite retained the existing Vite/WebSocket port `24678`-in-use
diagnostic; it completed without test failures.
