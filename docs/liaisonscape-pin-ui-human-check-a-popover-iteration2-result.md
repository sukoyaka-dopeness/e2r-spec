# LiaisonScape Pin UI Human Check A Popover Iteration 2

Date: 2026-09-17  
Contract: `E2R-LIAISONSCAPE-PIN-UI-HUMAN-CHECK-A-POPOVER-ITERATION2`  
Classification: **PASS / HUMAN CHECK A CLOSED**

## Decision

The accepted Canvas direction remains unchanged: there is no persistent Pin
glyph or Pin-specific badge, dot, fill, outline, shadow, or click target, and
all Nodes share the ordinary Node shadow. The existing Entity ownership
popover now adds a state-only line for pinned Nodes:

```text
English:  Pinned
Japanese: ピン留め済み
```

Unpinned Nodes retain the ordinary Entity popover without Pin state text.
Human Check A accepted this direction, together with the existing localized
Context Menu and Entity Detail state/action vocabulary.

## Presentation and interaction boundary

The implementation extends `composeHoverLines` with an Entity-only optional
state input. App supplies that input only when the effective
`WorkingPinState` contains the hovered Entity. The state line uses the existing
`placement-hover-popover__ownership` class, giving it the same font size and
weight as current ownership state lines without reusing their automatic/user
placement vocabulary.

No new interactive target or popover lifecycle was introduced. Existing hover,
pointer dismissal, drag start, touch pointer, selection, long-press Context
Menu, Node-label, and Relation creation paths remain authoritative. Context
Menu continues to suppress the popover while open.

## Existing Pin and application boundaries

Context Menu and Entity Detail still consume the same effective working state
and retain the accepted `Pin` / `Unpin`, `Pinned` / `Unpinned`, and Japanese
vocabulary. Pin staging, pending-work safety, atomic Save, manual movement of a
pinned Node, and Pin-created Coordinate rules are unchanged.

`manual move != Pin` remains true. Explicit Auto Layout lifecycle integration
is a separate checkpoint. Initial Automatic Display is unchanged. Pin All /
Unpin All remains unimplemented.

## Evidence

Focused Product DOM evidence covers EN/JA pinned state text, absence of Pin
state text for an unpinned Node including a touch pointer path, reuse of the
ownership typography class, and existing popover dismissal on Node drag.
Source and interaction tests retain Context Menu, long-press, Node drag,
selection, Relation creation, working-state, and persistence coverage.

```text
node --experimental-strip-types --test \
  tests/appUiIntegration.test.ts \
  tests/graph.test.ts \
  tests/pin-app-working-state.test.ts \
  tests/pin-persistence.test.ts \
  tests/direct-graph-authoring.test.ts       # 167/167 PASS
npm test                                    # 618/618 PASS
npm run lint                                # PASS
npm run build                               # PASS
e2r-spec: npm run validate                  # PASS
git diff --check                            # PASS (LF/CRLF normalization warnings only)
```

The full suite retained the existing Vite/WebSocket port `24678`-in-use
diagnostic and completed without test failures.
