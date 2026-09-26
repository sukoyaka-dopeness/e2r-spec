# LiaisonScape Initial Automatic Display Integer Canonicalization 1

Date: 2026-09-17  
Contract: `E2R-LIAISONSCAPE-INITIAL-AUTOMATIC-DISPLAY-INTEGER-CANONICALIZATION1`  
Classification: **A. INITIAL AUTOMATIC DISPLAY INTEGER CANONICALIZATION ESTABLISHED / HUMAN CHECK READY**

## Boundary established

`solveAutoLayout` remains the internal pure calculation and may return
fractional values. `settleInitialPlacement` is the Initial Automatic Display
boundary: it performs the accepted three settling iterations and then applies
`canonicalizeAutomaticPositions`, rounding only the derived automatic Node
positions to integer `x`/`y` values.

The normal coordinate-less flow is therefore:

```text
coordinate-less Dataset
-> deriveActualProductInitialLayout
-> settleInitialPlacement
-> integer immediate fallback
-> fit and Product presentation from the integer geometry
-> Frontier async result
-> existing round-once final selection and Product re-evaluation
-> integer render-only adoption
```

The Frontier async path already canonicalized its selected positions before
the final Product presentation evaluation. This checkpoint did not change
that source or Frontier behavior.

## Authority preservation

- Fully stored Coordinates remain authoritative, including fractional values.
- Mixed Coordinate completion preserves existing stored fractional values and
  remains Product-owned.
- Manual Node drag positions continue to retain fractional precision and are
  still the user-owned Save Coordinates input when adopted.
- Manual Node-label offsets, Relation-label anchors, manual routes/curvature,
  Self-loop manual state, Dataset contents, persistence, and dirty-state were
  not changed.
- Explicit Auto Layout Pin behavior was not changed: manual/current Pin anchors
  retain exact fractional precision.

Rounding is not applied to stored or manual authority, and no Dataset write is
performed by Initial Automatic Display.

## Verification

Focused executable evidence: **72/72 PASS** in the primary targeted campaign,
with a final provider-boundary rerun of **30/30 PASS** after the last source
adjustment. It covers internal float versus display integer separation,
coordinate-less initial display, stored and mixed fractional preservation,
Frontier selected integer output, replacement safety, Pin/Save lifecycle, and
Product presentation/worker boundaries.

- `npm run lint`: PASS.
- `npm run build`: PASS.
- `e2r-spec npm run validate`: PASS.
- `git diff --check`: PASS in both repositories.
- Full `npm test`: rerun after the source change; it again emitted the known
  Vite middleware HMR WebSocket `Port 24678 is already in use` message and
  remained open without a completion summary. It is not recorded as Full
  PASS; this remains a separate test-infrastructure follow-up.

## Remaining follow-up

Initial Automatic Display integerization is established in the tested source
boundary. A browser confirmation may inspect a fresh coordinate-less graph,
then a manual fractional drag, and a stored fractional Dataset, but no solver
quality review is reopened by this checkpoint. Pinned global recovery,
presentation-aware local relaxation, and dense presentation quality remain
separate Explicit Auto Layout follow-ups.
