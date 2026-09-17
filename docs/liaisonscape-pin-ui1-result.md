# LiaisonScape Pin UI 1

Date: 2026-09-17  
Contract: `E2R-LIAISONSCAPE-PIN-UI1`  
Classification: **B. PIN UI FUNCTIONAL / FIRST VISUAL CANDIDATE REJECTED**

## Decision

Pin/Unpin UI is now staged on the existing App working-state and atomic Save
Coordinates boundary. Entity Context Menu and Entity Detail expose the same
effective Pin state and call App-owned mutation seams. The UI does not write
Layout Extension or Coordinate JSON directly.

Human Check A subsequently rejected the first Canvas visual candidate. The
persistent glyph was not self-explanatory, the unpinned glyph was especially
ambiguous, and the shadow/no-shadow distinction was too weak while also making
some Nodes appear visually inconsistent. Functionality and authority were
accepted for continued review, but this first visual treatment was not.

The replacement visual treatment is recorded in
[Pin UI Human Check A Visual Iteration 1](liaisonscape-pin-ui-human-check-a-visual-iteration1-result.md).
Initial Automatic Display and Explicit Auto Layout behavior remain separate.

## Interaction boundary

For an Entity or its Node label, Context Menu shows exactly one state action:
`Pin` when unpinned and `Unpin` when pinned. Entity Detail shows a
dedicated Pin state section with the same state and action. Both use the
App-owned `stagePinForEntity` / `stageUnpinForEntity` seams, so Pin-only work
remains distinct from `coordinatesDirty` while still participating in Save,
replacement, and beforeunload safety.

No Pin All / Unpin All action was added. Existing Context Menu long-press,
Node drag, Node-label drag, selection, Relation creation, and destructive
action boundaries are unchanged. Manual movement of a Pinned Node remains
available.

## Node state presentation

The first candidate rendered a persistent Pin-family glyph and used shadow for
unpinned Nodes but not pinned Nodes. Human Check A rejected both choices. The
current visual iteration removes persistent Pin decoration from every Node and
uses the same ordinary Node shadow regardless of Pin state. Context Menu and
Detail remain the explicit state/action surfaces.

English and Japanese Pin state/action messages are present. The Detail action
is a normal Entity operation and is not placed in the destructive section.

## Persistence and review readiness

The existing atomic writer remains responsible for combining Coordinate and
Pin persistence. Save/reload, new-Pin anchor adoption, saved-Pin movement,
Unpin omission, and Pin-only pending work are covered by the preceding Pin
writer and App working-state evidence. No autosave or direct Dataset mutation
was introduced.

Human Check A should inspect at least:

* Context Menu and Detail state parity before and after staging Pin/Unpin.
* Absence of persistent Pin glyphs and visual parity of ordinary Node shadow.
* EN/JA copy, keyboard focus, narrow viewport behavior, and Save affordance.
* Pin-only replacement warning, Save/reload round trip, and manual movement of
  a Pinned Node.
* Absence of batch controls and absence of any Explicit Auto Layout Pin
  Preview/Accept/Reject coupling.

The batch-action question is intentionally recorded for Human Check A rather
than decided by this implementation checkpoint.

## Validation

```text
node --experimental-strip-types --test \
  tests/pin-app-working-state.test.ts \
  tests/pin-persistence.test.ts             # 9/9 PASS
npm test                                    # 615/615 PASS
npm run lint                                # PASS
npm run build                               # PASS
e2r-spec: npm run validate                  # PASS
git diff --check                            # PASS (LF/CRLF normalization warnings only)
```

The full suite retained the existing Vite/WebSocket port `24678`-in-use
diagnostic and completed without test failures.

No production default, solver, routing, label, Self-loop, Dataset, Coordinate,
persistence, dirty-state, or Explicit Auto Layout semantics were changed.
