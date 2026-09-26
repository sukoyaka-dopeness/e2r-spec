# LiaisonScape Initial Placement Edge-Corridor Proxy Experiment

## E2R-LIAISONSCAPE-INITIAL-PLACEMENT-EDGE-CORRIDOR-PROXY-EXPERIMENT1

Date: 2026-08-30

### Exact result

`PARTIAL - EDGE-CORRIDOR PROXY WORKS ON SYNTHETICS BUT DOES NOT EXPLAIN LIGHTHOUSE`

Straight topological chords are a cheap, deterministic geometry diagnostic,
but their ranking does not explain the Lighthouse manual congestion concern or
production route quality well enough to justify solver integration.

### Proxy definition and evidence

P1 counts intersections of ordinary, non-self, non-shared-endpoint straight
chords. P2 is the minimum separation among unrelated straight chords. P3 was
not promoted; no arbitrary density radius or threshold was introduced.
Parallel, shared-endpoint, and self-loop cases remain separate responsibilities.

| geometry | P1 chord crossings | P2 minimum separation | closest pair |
|---|---:|---:|---|
| G0 | 6 | 0.00 | `clara-maya / beacon-lighthouse-installed-in` |
| G3 / GSTORED | 7 | 5.00 | `clara-thomas-supervises / sofia-archive` |
| G6 | 7 | 7.51 | `sofia-archive / thomas-maya-friends` |
| G12 / FULL | 2 | 3.71 | `daniel-clara / authority-lighthouse` |

The result is non-monotonic. G12 reduces P1, but P2 remains small, and G3 is
not a clear proxy improvement. Production routing can avoid a chord crossing
or introduce a detour independently through Node attachments, curves,
obstacles, occupied paths, parallel handling, and self-loop handling.

Controlled synthetic cases retain the expected boundary: P1 detects an
obvious unrelated crossing; P2 distinguishes close parallel corridors when P1
is zero; clearly separated corridors rank better; hub, shared-endpoint,
parallel, and self-loop cases are not misclassified as unrelated conflicts.

### Decision and boundary

The proxy is inexpensive, deterministic, and O(E²), but does not establish
Lighthouse or production ranking validity. `routeGraphEdge` and
`placeEdgeLabel` remain read-only ground truth; labels were not folded into
this Edge proxy experiment. No solver force, weight, accept/reject rule,
iteration count, routing code, or sample Coordinate was changed. The existing
uncommitted three-iteration Lighthouse candidate remains untouched.

The next checkpoint is `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-LABEL-PRESSURE-PROXY-EXPERIMENT1`.

Verification: runtime baseline 280/280 tests, lint, and build passed;
`e2r-spec` validation and `git diff --check` passed.
