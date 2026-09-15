# E2R Session 0078

Objective: Frontier vs G3 vs Post Current-Source Actual Product Comparison 1.

Checkpoint: compare three current-source candidate materializations on the
same Dataset/topology/IDs/labels/locale through the same Actual Product
surface, then stop for user visual judgment.

Started: 2026-09-15.
Status: `READY FOR USER VISUAL COMPARISON / WAITING FOR USER JUDGMENT`.

This is a new objective, so it has a new Session file. Any continuation after
the user's comparison belongs in a new session if the objective changes.

## Work performed

- Added the bounded comparison tool, test, artifact, and development-only
  Actual Product seam in LiaisonScape.
- Materialized Frontier, G3, and Post from current source; no historical
  artifact replay, Fast baseline, solver retune, or Product authority change.
- Compared Lighthouse EN/JA, Apollo 11 EN/JA, Titanic EN, Japanese long-label,
  and dense synthetic `k7-7` rows.
- Reused the preceding Frontier Actual Product sweep for Frontier public-row
  observations and re-opened the necessary G3/Post rows in the same Product
  surface. Dense `k7-7` was inspected for all three candidates.
- Recorded exact selected family, fingerprint, geometry, elapsed time,
  candidate count, Product presentation evaluation count, and metrics in the
  LiaisonScape artifact.

## Evidence summary

G3 selected the same fingerprint as Frontier on Lighthouse, Apollo, and
Titanic; this is no visual geometry improvement. Post selected a more compact
geometry on public rows and was easier to inspect in Lighthouse/Apollo smoke
checks, but central route/Relation-label association residuals remain and
Titanic still requires local zoom. The Japanese long-label control remains
visibly capacity-bound under Post. Dense `k7-7` selected identical G3/Post
geometry and remains non-release-readable with high crossing/repeated-label
pressure.

Machine metrics are diagnostic only. Actual Product observations are not user
acceptance and no candidate winner has been declared.

## Authority and standing statuses

Product ordinary routing, Parallel/Incident allocation, endpoint-plan,
Relation-label placement, Node-label placement, Self-loop routing,
viewport/camera, styling/interaction, Dataset lifecycle, persistence, Save
Coordinates, and manual placement remain authoritative. Candidate previews are
read-only, disposable, and non-adopting.

Quality solver remains `HOLD / NOT ESTABLISHED`, production provider remains
`NOT ESTABLISHED`, Product integration/default remains `HOLD`, Human Review
remains `NOT READY`, Adaptive Cascade remains inactive, and the Initial Layout
Release blocker remains `OPEN`.

## Validation and safety

- Current-source comparison artifact and evidence index were generated.
- Actual Product smoke inspection was performed; no formal acceptance was
  inferred.
- No historical result document was overwritten.
- Existing unrelated dirty work was preserved.
- No Dataset, stored Coordinates, persistence, dirty-state, Save Coordinates,
  manual placement, routing authority, or Product provider was changed.
- No push, deploy, release, publish, reset, stash, clean, rebase, squash, or
  amend was performed.

## Next position

Wait for the user's visual judgment. Do not continue Frontier/G3/Post
refinement, scoring retune, routing/label change, viewport policy change,
Product adoption, Human Review, or Adaptive Cascade before that judgment is
recorded.
