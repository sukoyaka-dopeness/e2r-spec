# LiaisonScape Initial Automatic Display Integer Canonicalization Human Check 1

Date: 2026-09-17  
Contract: `E2R-LIAISONSCAPE-INITIAL-AUTOMATIC-DISPLAY-INTEGER-CANONICALIZATION-HUMAN-CHECK1`  
Classification: **A. HUMAN CHECK READY / NO INTEGERIZATION REGRESSION OBSERVED**

## Review surface

Current-source Actual Product smoke used:

```text
URL: http://127.0.0.1:5176/e2r-liaison-scape/?acceptance-fixture=lighthouse&acceptance-locale=en
worktree: C:\Users\extra\E2R\e2r-liaison-scape
server: Vite on 127.0.0.1:5176
```

Fresh coordinate-less Lighthouse EN opened with the normal automatic-display
path. The Graph became immediately usable, then settled through the existing
async Frontier path. The final visible Graph contained 10 entities and 14
visible relations, including ordinary routes, labels, and a Self-loop. No
integerization-attributable jump, jitter, presentation break, or visible hard
failure diagnostic was observed in this smoke review.

This is visual evidence only; it does not assign a final Human Check
`PASS`/`QUALIFIED`/`FAIL` disposition.

## Three-case Human Check procedure

1. Open the literal Lighthouse EN URL above and confirm that the immediate
   Graph is usable and remains visually coherent after Frontier completion.
2. Use the existing stored-fractional executable fixture/evidence to confirm
   that stored fractional Coordinates do not snap during Dataset open.
3. Use the existing manual-drag / Save Coordinates evidence to confirm that a
   manually placed fractional Node position remains fractional and user-owned.

The first case is the Actual Product visual check. The second and third cases
use executable authority evidence because the current UI does not expose raw
coordinate precision as a review surface.

## Evidence and boundaries

- Coordinate-less immediate fallback positions are integer-canonicalized at
  `settleInitialPlacement`.
- Frontier final selected positions are integer-canonicalized before Product
  presentation re-evaluation and render-only adoption.
- Stored and mixed fractional Coordinates remain authoritative.
- Manual Node positions and current/manual Pin anchors retain fractional
  precision.
- No routing, label, Self-loop, spacing, solver, provider, Dataset,
  persistence, dirty-state, or Explicit Auto Layout lifecycle behavior was
  changed by this acceptance-only checkpoint.
- The known full `npm test` Vite/HMR WebSocket/open-handle gate remains
  separate and was not used as a Human Review result.

## Validation

- Final focused provider/lifecycle rerun: `30/30 PASS`.
- Primary focused campaign: `72/72 PASS`.
- `npm run lint`: PASS.
- `npm run build`: PASS.
- `e2r-spec npm run validate`: PASS.
- `git diff --check`: PASS in both repositories.
- Full `npm test`: remains incomplete because of the known Vite/HMR lifecycle
  conflict/hang; it is not recorded as PASS.
