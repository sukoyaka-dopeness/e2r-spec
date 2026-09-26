# LiaisonScape Multi-Label Corridor Isolation

Date: 2026-09-01

## Method

The prior standalone harness was rejected because it omitted canonical occupied
paths. This replacement replay used the App ordering: fixed self routes first,
then ordinary Relations sorted by source, target, and ID; every live route was
added to occupied paths before the next call. It reproduced all four inventory
baselines exactly. A temporary `routeGraphEdge` hook omitted only specified
owner label-pressure contributions; candidate generation, score, Node and
occupied checks, fallback, and strict winner selection stayed live.

No label was moved and no joint placement search was performed.

## Canonical owner omissions

| Relation | omitted owners sufficient for lower curvature | minimal set |
|---|---|---|
| clara-thomas-mentors | lighthouse + clara + archive: -52 → 40 | all three (M3) |
| clara-thomas-supervises | lighthouse + clara + archive: -76 → -40 | all three (M3) |
| sofia-archive | clara: -156 → 60; archive: -156 → 48 | either one (M5) |
| authority-lighthouse | lighthouse: -24 → 0 | one foreign owner (M1) |

For each Clara/Thomas Relation, every one-owner omission and every pair
omission retained its current winner. `clara` is an endpoint label; `lighthouse`
and `archive` are foreign labels. Therefore the user-observed Clara/Thomas
curvature is an endpoint-and-foreign joint pattern, and all three observed
owners are material under this diagnostic omission.

## Result

This is **CASE 10**: multi-label pressure is causal, but minimal blocker sets
vary by Relation. The exact result is `DIRECTION SUPPORTED — CLARA / THOMAS
CURVATURE REQUIRES A JOINT MULTI-LABEL BLOCKER SET`.

Near-center frontier and temporal drag discontinuity were not formally
attributed in this checkpoint; no score or candidate-space change follows from
the observed discrete winner changes. The selected next checkpoint is
`E2R-LIAISONSCAPE-AUTOMATIC-ROUTE-THREE-LABEL-CORRIDOR-FEASIBILITY-AUDIT1`.

Production routing, scoring, labels, candidates, samples, and preview remain
unchanged. Temporary hooks and worktree were removed after verification.
