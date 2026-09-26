# LiaisonScape Relation-Label Normal-Distance Recovery Audit

- Date: 2026-08-30
- Checkpoint: `E2R-LIAISONSCAPE-RELATION-LABEL-NORMAL-DISTANCE-RECOVERY-FIX1`
- Scope: audit / diagnostic only

## Exact result

`NOT JUSTIFIED - CURRENT NORMAL-DISTANCE RECOVERY ALREADY MATCHES PLACEMENT INTENT`

The current production label helper already recovers an automatic Relation
label toward its owner Edge when normal-direction pressure disappears. It
keeps the selected along-edge sample fixed during that recovery, chooses the
nearest safe normal offset, and retains deterministic preference ordering.
No stale-normal-distance failure could be reproduced with the current helper
or Lighthouse stored geometry. No runtime fix was made.

## Lighthouse cases and ownership

The primary current stored sample labels include `clara-thomas-mentors`
(`mentors`), `clara-thomas-supervises` (`supervises`), `clara-maya` (`works
with`), `elias-clara` (`advises`), `sofia-elias` (`interviews`), and
`daniel-clara` (`coordinates with`). Their automatic placements are derived
from their own routed samples; no manual Relation-label anchor or manual
route is present in the sample for these labels. The two Clara/Thomas labels
remain distinct parallel Relations after the accepted routing fixes.

The current source does not expose a tracked label snapshot or a historical
pixel coordinate for the reported visual concern. Consequently, exact
before/after pixel distances and a nearest-foreign-edge claim would be
invented rather than measured. The helper-level owner/foreign distinction is
still clear: `placeEdgeLabel` receives the owning route as `samples` and
other routes separately for collision pressure.

## Live pipeline

`App.tsx` generates the route, then calls `placeEdgeLabel` with the owning
route, occupied labels, Nodes, and other edge paths. During an active Node
drag, previous placement hysteresis is bypassed for incident Relations so
labels follow responsively. Otherwise the previous placement is used only as
a stability cost. `placeEdgeLabel` evaluates along-edge samples
`[20,16,24,12,28,8,32,4,36]` and normal offsets `[0,-24,24,-40,40]`.

It first selects the existing lowest-score candidate. At the selected
along-edge sample, a collision-free candidate with the smallest absolute
normal offset is preferred. If that normal class remains pressured, the
existing clearance comparison chooses the safer candidate. This is an
existing lexicographic recovery path; no new threshold, score weight, or
sampling scheme was added by this audit.

## Synthetic reproduction and result

For a horizontal route sampled from `(0,100)` to `(400,100)`, an occupied
midpoint first moves the label to `(200,76)`. With the pressure removed and a
previous placement at `(200,160)`, the current helper returns the owner-edge
midpoint `(200,100)`; the anchor fraction stays at the midpoint and the
normal offset returns to zero. A Node-pressure case continues to select a
safe displaced candidate, demonstrating that necessary displacement is not
removed.

Existing tests cover midpoint recovery, greater Node clearance, anchor
stability, other-edge avoidance, manual label anchors, and Relation-label
visual state. The production helper therefore produced no failing
normal-distance regression test. The failure modes involving along-edge /
midpoint selection, foreign Edge proximity, and explicit manual placement
remain separate and were not changed.

## Boundaries and verification

No LiaisonScape runtime file, test, sample, CSS, Coordinate/Presentation
payload, schema, Core, Extension, Validator, or release metadata was changed.
Reverse-endpoint normalization, parallel obstacle side preservation, and
foreign-node clearance remain CLOSED / NOT REGRESSED. Self-loop, crossing,
label ownership beyond this normal-distance audit, and NarrativeLine
Display-Order remain separate.

- LiaisonScape baseline: 279/279 tests passed.
- Lint: PASS.
- Build: PASS.
- `git diff --check`: PASS.
- No runtime commit was created.
- Temporary diagnostics were command-line only and left no repository files.
- Protected dirty `sessions/E2R-Session-0052.md` was preserved.
- No push, tag, release, deploy, or publication was performed.
