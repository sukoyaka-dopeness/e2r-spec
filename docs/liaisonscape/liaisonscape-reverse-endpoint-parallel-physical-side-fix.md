# LiaisonScape Reverse-Endpoint Parallel Physical-Side Fix

- Date: 2026-08-30
- Checkpoint: `E2R-LIAISONSCAPE-REVERSE-ENDPOINT-PARALLEL-PHYSICAL-SIDE-FIX1`

## Result

`IMPLEMENTED - REVERSE-ENDPOINT PARALLEL PHYSICAL SIDES NORMALIZED`

Automatic non-self parallel routing now evaluates its base signed offset in a
canonical unordered endpoint frame. Reversing A->B to B->A preserves semantic
source/target direction while preventing collapse onto one physical side.

The canonical sign is supplied by `App.tsx` from deterministic endpoint-ID
ordering and applies only when `parallelCount > 1`. Single Relations retain
their existing behavior. Manual `edgeCurveOffsets` remain local user intent;
self-loops, arrows, stored Presentation, persistence, and obstacle policy are
unchanged.

## Verification

A focused regression covers A->B plus B->A and asserts opposite physical
sides. Existing same-direction, endpoint-order, obstacle, occupied-path,
manual-curve, self-loop, and Lighthouse tests remain green.

- LiaisonScape: `96da8dd fix: normalize reverse parallel edge sides`
- Tests: PASS, 278/278
- Lint: PASS
- Build: PASS
- `git diff --check`: PASS
- e2r-spec `npm.cmd run validate`: PASS

The known obstacle-induced side collapse remains separate. No sample,
Coordinate/Presentation payload, schema, Core, Extension, or NarrativeLine
Display-Order change was made. No push, tag, release, deploy, or publication
was performed.
