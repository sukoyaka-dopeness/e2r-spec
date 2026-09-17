# LiaisonScape Pin Writer / Atomic Save 1

Date: 2026-09-17  
Contract: `E2R-LIAISONSCAPE-PIN-WRITER-ATOMIC-SAVE1`  
Classification: **B. PIN WRITER ESTABLISHED / ONE BOUNDED SAVE-INTEGRATION GAP REMAINS**

## Decision

The accepted Pin persistence contract now has a production-shaped, pure writer
boundary. It accepts the loaded Dataset, current working Coordinate values, and
operation-local working Pin state; it builds a cloned candidate, writes both
compatible Coordinate anchors and the LiaisonScape Layout Pin state, validates
the complete candidate, and returns it only after all checks succeed.

The App Pin/Unpin controls and connection of this boundary to the existing App
Save Coordinates action remain separate. This checkpoint therefore closes the
writer and atomic candidate construction, but does not claim Pin UI or full App
working-state integration.

## Working Pin state

`src/pin-persistence.ts` provides:

- `createWorkingPinState` for loading supported persisted intent without
  normalizing the Dataset;
- `stagePin` and `stageUnpin` for immutable working intent changes;
- `deriveWorkingPinState` for effective Pins, `unsavedPins`, and explicit
  Pin-created coordinates that must be discarded on Pin-then-Unpin; and
- `buildAtomicPinSaveCandidate` for the combined Dataset transition.

Pin state is separate from `coordinatesDirty`. A Pin action never autosaves.
Pinning without an existing compatible saved anchor can explicitly mark the
current working position as a Pin-created Coordinate candidate. Unpinning it
before Save reports that candidate for discard; a caller can explicitly retain
it when the user has independently adopted the coordinate. A manual move of a
saved Pin is saved as a new Coordinate while retaining the Pin intent.

## Atomic writer boundary

```text
loaded Dataset
  + working Coordinates
  + staged Pin / Unpin intent
    -> existing Coordinate writer on a clone
    -> canonical Layout Pin update on that clone
    -> complete Dataset validation
    -> exact Pin-anchor resolution
    -> one candidate Dataset result
```

The writer preserves unrelated Dataset fields, Extension fields, and unknown
fields in Pin records. Unpin removes `pinned` and `spaceId`, omits empty
recognized records, and never emits `pinned: false`. Active Pins without one
compatible finite Coordinate anchor, malformed existing Pin payloads,
unsupported Pin versions, invalid Coordinate input, Coordinate write refusal,
or Dataset validation failure return the original Dataset and structured
diagnostics. No Coordinate-only or Pin-only half is returned as a successful
candidate.

The existing Coordinate writer remains the authority for Coordinate Prototype
and Draft selection, Space definitions, migration refusal, and Coordinate
serialization. The Pin writer does not add `x/y` to the Layout Extension or
create a second Coordinate serialization implementation.

## Round-trip and safety evidence

Focused tests cover:

- new Pin with a current working anchor;
- saved Pin with a moved Coordinate;
- canonical Unpin omission and unknown-field preservation;
- Pin then Unpin before Save;
- invalid/missing active anchors and unsupported versions; and
- original-Dataset preservation on failure.

After a successful candidate, the existing Pin reader resolves the same exact
Entity/Space anchor from the saved Dataset. No Dataset is mutated during
working-state staging or failed candidate construction.

Initial Automatic Display, Frontier provider selection, Product routing,
Relation-label, Node-label, Self-loop, Dataset replacement, persistence
adoption, and dirty-state UI behavior were not changed. Dense graph-space
quality remains the existing Explicit Auto Layout follow-up.

## Remaining gap

The next bounded step is App integration: an App-owned working Pin state must
join `pendingUserWork`, replacement/beforeunload protection, and the existing
Save Coordinates action without changing Dataset or manual-coordinate
authority. Pin/Unpin UI is still not implemented. This checkpoint does not
introduce that UI or alter `App.tsx`.

## Validation

```text
node --experimental-strip-types --test \
  tests/pin-persistence.test.ts \
  tests/explicit-auto-layout-operation.test.ts  # 14/14 PASS
npm test                                        # 612/612 PASS
npm run lint                                    # PASS
npm run build                                   # PASS
e2r-spec: npm run validate                      # PASS
git diff --check                                # PASS
```

The full suite emitted the existing Vite/WebSocket warning that port `24678`
was already in use; it still completed with 612/612 passing tests.
