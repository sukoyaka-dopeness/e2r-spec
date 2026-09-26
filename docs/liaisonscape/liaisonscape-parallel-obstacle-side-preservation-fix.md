# LiaisonScape Parallel Obstacle Side-Preservation Fix

- Date: 2026-08-30
- Checkpoint: `E2R-LIAISONSCAPE-PARALLEL-OBSTACLE-SIDE-PRESERVATION-FIX1`

## Result

`IMPLEMENTED - PARALLEL SIDES PRESERVED AROUND OBSTACLES WHEN SAFELY POSSIBLE`

`routeGraphEdge` now retains the existing best-candidate fallback, while
recording the best candidate that both preserves the base physical side and
passes the existing safety checks: zero node-influence pressure, no occupied
path overlap, and zero label pressure. A safe side-preserving candidate wins
lexicographically; candidates on the same side retain the existing score and
ordering. If none exists, the existing best candidate is selected, allowing
an obstacle-required side switch.

No new numeric weight, clearance threshold, group optimizer, or ID-specific
case was introduced. Obstacle clearance therefore remains higher priority
than side preservation. Manual offsets return before automatic candidate
selection and remain authoritative.

## Synthetic evidence

With A=`(0,0)`, B=`(400,0)`, and obstacle C=`(200,40)`, the clean S2 and
post-fix R2 base sides are `+40` and `-40`. After obstacle routing, both
Relations retain their respective physical sides and clear the existing
60-unit node-influence radius; the prior S2/R2 result selected `-52` for the
first route and collapsed both routes onto the negative side. The mirrored
obstacle produces the mirrored behavior.

This is a bounded individual-candidate preference, not a global parallel
group optimizer. Mixed groups and occupied-path ordering remain covered by
the existing behavior and require separate evidence before redesign.

## Regression and boundaries

Added a production-helper regression for same-obstacle A->B plus B->A,
asserting opposite final sides and obstacle clearance. Existing same-
direction, reverse-endpoint, ordinary-edge, occupied-path, manual-curve,
self-loop, and Lighthouse tests remain green.

Unchanged: semantic source/target direction, arrow behavior, Relation IDs,
parallel slot assignment, stored Presentation/Coordinate payloads, samples,
schemas, Core, Extensions, Validator, Initial Placement, Auto Layout,
foreign-node tuning, label recovery, crossing minimization, and NarrativeLine
Display-Order. Reverse-endpoint normalization is CLOSED / NOT REGRESSED.

## Verification

- LiaisonScape: 279/279 tests passed.
- Lint: PASS.
- Build: PASS.
- `git diff --check`: PASS.
- Runtime commit: `22f61a8 fix: preserve parallel sides around obstacles`.
- e2r-spec validation is recorded after this document and roadmap update.
- Temporary diagnostics were command-line only and removed.
- No push, tag, release, deploy, or publication was performed.
