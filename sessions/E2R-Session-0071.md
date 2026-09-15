# E2R Session 0071

Objective: General / Complex Dataset Practicality Gate 2 - HQ Candidate
Reconnection.
Checkpoint: Distinguish Fast Initial Placement, the current Product More ->
Auto Layout control, the recent HQ research candidate, and a future
production provider.
Started: 2026-09-15.
Status: `NO CURRENT RECENT HQ CANDIDATE MEETS RELEASE PRACTICALITY`.
Continuation file: This file is for this Gate 2 reconnection objective. Create
a new Session file for a materially new objective or release gate.

## Source-first distinction

Gate 1's `solveAutoLayout(input, { iterations: 12 })` rows were the current
Product path, not the latest research candidate. Source inspection confirmed
that App's More -> Auto Layout calls `solveAutoLayout` without options and
`src/auto-layout.ts` resolves the default to 12 iterations. It remains a
control only.

The latest relevant HQ lineage is the bounded
Infinite-Canvas Local-Density / Extent-Growth -> Occupied-Geometry
Feasibility-First Extent Growth work. It observes current Product Node body,
Node-label, and Relation-label bounds, applies deterministic displacement for
at most 2/4/8 sweeps, and keeps Product routing, endpoint-plan, Parallel /
Incident, Relation-label, Node-label, Self-loop, and viewport authority in
place. It is a diagnostic Node-geometry candidate, not a provider.

## Evidence

The existing candidate artifact reports selected occupied-overlap reductions:

| Fixture | Selected arm | Occupied overlap | Visual label overlap | Foreign-route hits |
| --- | --- | ---: | ---: | ---: |
| canonical | 2 sweeps | 0 | 0 | 0 |
| dense | 4 sweeps | 2 | 2 | 31 |
| Japanese label-heavy | 2 sweeps | 0 | 0 | 16 |
| single-connected dense-label | 8 sweeps | 10 | 3 | 160 |
| Parallel / Incident | 2 sweeps | 0 | 0 | 0 |
| Self-loop | 2 sweeps | 0 | 0 | 0 |

The geometry direction is useful. It is not release-complete: the connected
case remains hard-infeasible and its route/label ownership residual remains.
The artifact does not provide per-case candidate-generation time. Previous
Worker timing was for a different 28-finalist campaign, so it was not
transferred to this candidate. Candidate generation, Product verification,
Worker, and total user-visible wall time for this candidate remain
`NOT ESTABLISHED`.

## Actual Product smoke

The A/B Ashen Crown Product evidence from Session 0070 remains the correct
control comparison. Fast coordinate-less startup was usable; the current More
-> Auto Layout action completed with temporary coordinates but visibly created
central Node-body overlap and degraded route/Relation-label readability. The
action is therefore not a release-quality HQ control, but that does not make
it evidence against the recent research candidate.

The recent candidate was reconnected through the existing read-only
operation-local Actual Product preview. Canonical was stable after Product
Reset view at 55% overview. Dense 14/49 was rendered by the real App surface;
at 47% overview, Relation-label clusters and route/label ownership remained
difficult to follow. This was the required small smoke stop. No long-label,
connected, Parallel, or Self-loop visual campaign was expanded afterward. No
formal visual acceptance or Human Review candidate was created.

Ashen Crown was not given a synthetic candidate that does not exist in the
recorded recent artifact. The result therefore makes no false three-way claim
for that fixture: Ashen Crown supplies the actual A/B control, while the
reconnected C evidence uses the recorded research fixtures and the existing
Product renderer seam.

## Decision

Classification is `D. NO CURRENT RECENT HQ CANDIDATE MEETS RELEASE
PRACTICALITY`. The recent candidate is promising for geometry but not for the
combined release bar of Product readability plus credible practical execution
time. The old Product button is a separate release concern and must not be
silently relabeled as the HQ research candidate.

Standing statuses remain quality solver `HOLD / NOT ESTABLISHED`, production
provider `NOT ESTABLISHED`, Product integration/default `HOLD`, Human Review
`NOT READY`, Adaptive Initial Placement Cascade inactive, and Initial Layout
Release blocker `OPEN`. Deep Initial Layout research remains outside the Hub
publication critical path. No knowledge candidate was added.

No Product source, Dataset semantics, persistence, coordinate authority,
manual semantics, or historical result document was changed. No push, tag,
release, deploy, publish, reset, stash, clean, rebase, squash, or amend was
performed.
