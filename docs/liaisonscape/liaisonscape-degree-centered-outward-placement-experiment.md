# LiaisonScape Degree-Centered Outward Placement Experiment

## E2R-LIAISONSCAPE-DEGREE-CENTERED-OUTWARD-PLACEMENT-EXPERIMENT1

Date: 2026-08-30

### Exact result

`PARTIAL - CENTRAL-HUB SEED HELPS, BUT LABEL-AWARE SECTORING DOES NOT`

The Lighthouse graph has a stable centrality candidate, so a constructive
central-hub seed is a plausible next experiment. However, label-aware outward
sectoring was not established without introducing a new seed/label geometry
implementation, and the current settling API cannot accept an external seed.
No production implementation is justified by this checkpoint.

### Centrality audit

Primary rule: maximum unique one-hop neighbors, then maximum ordinary incident
Relations, then lexical Entity ID. The live Lighthouse graph produces:

| Entity | Unique neighbors | Ordinary incident | In | Out | Parallel memberships | Self-loop |
|---|---:|---:|---:|---:|---:|---:|
| lighthouse | 3 | 3 | 3 | 0 | 0 | 0 |
| clara | 5 | 6 | 2 | 4 | 2 | 0 |
| elias | 2 | 2 | 1 | 1 | 0 | 0 |
| maya | 3 | 3 | 2 | 1 | 0 | 0 |
| thomas | 2 | 3 | 2 | 1 | 2 | 0 |
| sofia | 2 | 2 | 0 | 2 | 0 | 0 |
| daniel | 1 | 1 | 0 | 1 | 0 | 0 |
| beacon | 2 | 4 | 3 | 3 | 2 | 2 |
| archive | 1 | 1 | 1 | 0 | 0 | 0 |
| authority | 1 | 1 | 0 | 1 | 0 | 0 |

Selected center: `clara` / Clara Bennett. The selected center is a layout
heuristic, not a semantic importance declaration. Self-loops and parallel
counts do not independently make an Entity central.

### Counterfactual candidates

- A: current fallback seed followed by the existing three-iteration settling;
  this remains the production control and the materialized sample candidate.
- B: Clara-centered equal-angle one-hop construction, with remaining nodes
  retaining deterministic fallback behavior, followed by the same three
  iterations.
- C: B plus label-footprint-aware outward angular allocation. Not implemented:
  the current label footprint and preferred anchor are route/locale dependent.
- D: locale-neutral maximum-known footprint. Not available without inventing
  multilingual labels or a new locale policy.

The full multi-hop constructive algorithm was not used. This preserves the
experiment boundary and avoids a Lighthouse-specific layout hack. The current
`solveAutoLayout` implementation seeds internally and exposes no external seed
input, so a valid PRE/POST comparison for B/C requires a separate temporary
constructive solver or a carefully scoped seed-injection experiment.

### Evidence and limitations

The centrality agreement supports testing a hub-centered seed, but does not
prove improved routing, labels, compactness, or topology readability. A radial
one-hop construction may also create artificial starburst hierarchy, over-
spread, or multi-hub bias. The existing production routing and label helpers
were not modified or reinterpreted here. No new angle threshold, margin,
weight, radius, locale rule, or label measurement algorithm was introduced.

Chain, cycle, disconnected, two-hub, and dense-hub behavior remain required
negative/structural controls for a future implementation experiment. In
particular, a single-center heuristic must not be promoted based only on the
Lighthouse sample.

### Production and sample boundary

- Production Runtime changed: no
- Production iteration count changed: no
- Routing or label algorithms changed: no
- Lighthouse sample semantic content changed: no
- Existing uncommitted three-iteration sample candidate: preserved
- Hand tuning: no
- Runtime commit: none

The next bounded checkpoint is
`E2R-LIAISONSCAPE-DEGREE-CENTERED-INITIAL-SEED-IMPLEMENTATION-EXPERIMENT1`,
only if an external-seed comparison can be isolated without changing the
production path. Label-aware outward allocation remains a later separate
question.

Verification: runtime baseline remains 280/280 tests, lint, and build passed;
`e2r-spec` validation and `git diff --check` passed.
