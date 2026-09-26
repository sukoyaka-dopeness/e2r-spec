# LiaisonScape Automatic-Route Label-Halo Continuity Semantics Experiment

Date: 2026-09-01

Task: `E2R-LIAISONSCAPE-AUTOMATIC-ROUTE-LABEL-HALO-CONTINUITY-SEMANTICS-EXPERIMENT1`

Result: **PARTIAL — a hard-preserving halo side-selection diagnostic recovers
one low-curvature route, but the recovered route has materially smaller label
clearance and the result does not generalize to the main Clara/Thomas
frontier.**

## Scope and safety boundary

This was a read-only experiment in the detached worktree
`C:/Users/extra/E2R/e2r-liaison-scape-halo-continuity-semantics`, based on
LiaisonScape `fd563340625fd3d88dc25baedc93c4f8fe69e5e7`. The temporary
semantic selector and observer were removed before cleanup.

No production runtime, score, route policy, candidate set, label placement,
sample, parallel policy, self-loop policy, or interactive preview was changed.
The existing dirty Japanese Lighthouse sample was read-only input. The
three-label F6 boundary remains `BLOCKED`; this experiment did not add a
label-candidate API or a joint label solver.

Numeric tuning was explicitly out of scope. The existing hard value `100000`,
halo width `20`, and halo coefficient `20` were not changed in the diagnostic.

## Canonical replay and baseline gate

The temporary harness followed the App route pipeline: fixed/self routes first,
canonical ordinary Relation order, predecessor `occupiedPaths`, provisional
Node-label rectangles, and the live `routeGraphEdge` candidate generation.
The JA sample was the primary source because the preceding checkpoint used it
for the accepted near-center values.

| Relation | Expected | Replayed current | Gate |
|---|---:|---:|---|
| `clara-thomas-mentors` | -52 | -52 | PASS |
| `clara-thomas-supervises` | -76 | -76 | PASS |
| `sofia-archive` | -156 | -156 | PASS |
| `authority-lighthouse` | -24 | -24 | PASS |

The required facts also reproduced: mentors has near-center candidates at
`40` and `52`, and authority/lighthouse has straight candidate `0` with no
hard label intersection and `4027.6` halo pressure.

## Current semantic scale

The live current calculation is:

- distance `0`: hard rectangle intersection, contribution `100000`;
- `0 < distance < 20`: halo contribution `(20 - distance) ** 2 * 20`;
- distance `>= 20`: halo contribution `0`;
- all Node-label contributions are summed;
- score is
  `nodePressure * 100 + (occupiedPath ? 10000 : 0) + labelPressure + abs(offset) * 0.01`;
- replacement and same-side safe-candidate selection use strict `<`.

The current `existing-safe` predicate requires zero Node pressure, no occupied
overlap, and zero total label pressure. This experiment also reports a
separate `hard-safe` predicate: zero Node pressure, no occupied overlap, and no
hard rectangle intersection. A hard-safe candidate may still be halo-positive
and therefore not current-existing-safe.

For authority/lighthouse at the primary frontier:

| Candidate | Hard pressure | Halo pressure | Minimum label distance | Current score |
|---:|---:|---:|---:|---:|
| 0 | 0 | 4027.559 | 5.809 | 4027.559 |
| -12 | 0 | 1025.233 | 12.843 | 1025.353 |
| -24 | 0 | 0 | 20.087 | 0.240 |

The straight route is therefore a hard-safe but halo-positive candidate. The
current winner is the first nearby candidate with zero halo pressure on that
side. The halo value changes continuously within the halo interval, but the
zero/nonzero safety boundary and hard intersection onset produce selection
cliffs.

## Semantic modes

The modes were temporary selectors over the same live candidate set and the
same Node, occupied-path, hard-label, and geometry calculations.

- **A / current:** existing production semantics.
- **B / hard-only lower bound:** Node and occupied semantics unchanged; hard
  label pressure remains; halo is omitted from the numeric arbitration.
- **C / magnitude-first:** eligible candidates must be Node-safe,
  occupied-safe, and hard-label-safe. Among them, smallest `abs(offset)` wins;
  only equal absolute magnitudes use lower halo, then deterministic enumeration
  order. If no eligible candidate exists, the current arbitration is retained
  as the diagnostic fallback.
- **D / halo-first:** eligible candidates have the same hard safety. Lower halo
  wins first, then smaller `abs(offset)`, then deterministic order. It also
  falls back to current arbitration when no hard-safe candidate exists.

Modes B–D are counterfactual diagnostics, not production contracts. In
particular, Mode C does not call a halo-positive winner current-safe.

## Primary results

### Authority/Lighthouse

| Mode | Winner | Hard-safe | Current-existing-safe | Minimum label distance | Halo at winner | Interpretation |
|---|---:|---|---|---:|---:|---|
| A current | -24 | yes | yes | 20.087 | 0 | current baseline |
| B hard-only | 0 | yes | yes under B, no under current | 5.809 | 4027.559 | halo ignored in score |
| C magnitude-first | **0** | yes | no | **5.809** | **4027.559** | low curvature recovered, clearance reduced |
| D halo-first | -24 | yes | yes | 20.087 | 0 | same as current |

Mode C is the requested hard-preserving counterfactual: no hard label
collision, Node pressure, or occupied overlap was introduced at the winner.
It nevertheless selects a route only about `5.81` units from the label
rectangle, compared with `20.09` for current. This is not an automatic
presentation-quality acceptance.

### Clara/Thomas hard control

The near-center mentors candidates `40` and `52` remain hard-unsafe due to
`clara` and `archive` label intersections; `lighthouse` contributes halo
pressure. All four modes retain mentors at `-52` in the full JA replay:

| Mode | Winner | Near-center hard collision remains excluded |
|---|---:|---|
| A current | -52 | yes |
| B hard-only | -52 | yes |
| C magnitude-first | -52 | yes |
| D halo-first | -52 | yes |

Removing or deprioritizing halo cannot recover the mentors near-center routes
while preserving hard-label safety. This is why the halo-only direction does
not explain the principal Clara/Thomas curvature frontier.

### Occupied and Node controls

| Relation | A | B | C | D | Control result |
|---|---:|---:|---:|---:|---|
| `clara-thomas-supervises` | -76 | -76 | -76 | -76 | occupied near-center blocker remains |
| `sofia-archive` | -156 | 60 | -156 | -156 | C/D have no hard-safe near-center candidate; Node safety remains |

Mode B's `sofia-archive` change is not a successful label-only recovery: it
is the consequence of removing halo from ordinary score arbitration while the
selected candidate still has hard label pressure. Mode C/D fall back to the
current route because the near-center Sofia candidates remain Node-unsafe or
otherwise lack a hard-safe candidate.

## Full JA ordinary-route scan

The scan covered all 12 non-self Entity-to-Entity graph routes in the JA
sample, including the two parallel Clara/Thomas Relations. It is a bounded
generality check, not a new global objective.

| Mode | Straight / curved | Ordinary route length | Changed Relations vs A | Halo-only opportunity Relations |
|---|---:|---:|---|---|
| A current | 5 / 7 | 1513.914 | — | `authority-lighthouse` |
| B hard-only | 6 / 6 | 1449.785 | `sofia-archive`, `authority-lighthouse` | — |
| C magnitude-first | 6 / 6 | 1512.800 | `authority-lighthouse` | — |
| D halo-first | 5 / 7 | 1513.914 | — | `authority-lighthouse` |

The current scan found two halo-positive hard-safe candidates closer to the
current winner's center, both on `authority-lighthouse`; no other Relation
provided a qualifying halo-only opportunity in this sample. Mode C recovered
one lower-magnitude route out of the 12 ordinary routes. Its route-length
decrease is incidental; route length was not its selector objective.

## Presentation-quality diagnostics

The lightweight replay recomputed the available presentation inventories from
the fresh routes and labels. The dedicated Production H1/H3/H4 oracle is not
part of the LiaisonScape runtime source, so those identifiers are not
re-invented here. The preceding accepted JA baseline was H1/H2/H3/H4
`0/4/1/0`; this checkpoint reports the available exact H2 and temporary
presentation metrics below.

| Metric | A current | C magnitude-first | Observation |
|---|---:|---:|---|
| Provisional Node-label/route intersections (PNR) | 1 | 1 | unchanged |
| Final Node-label/route intersections (FNR) | 1 | 0 | lower in this fresh replay |
| True interior route crossings (H2 identities) | 4 | 4 | no crossing reduction |
| Node-body/Node-label conflicts | 0 | 0 | unchanged |
| Node-label/Node-label conflicts | 0 | 0 | unchanged |
| Node-label/Relation-label conflicts | 0 | 0 | unchanged |
| Minimum foreign-Node clearance | 23.492 | 23.492 | unchanged |

The H2 identities were unchanged between A and C. The C route is therefore a
useful semantic signal for the halo-only case, but not evidence that it solves
the observed crossing or parallel-edge presentation issues. The lower FNR
count is a fresh-label diagnostic and does not override the smaller
route-to-label clearance at the selected authority route.

## Pareto and clearance interpretation

At authority/lighthouse, current `-24` and near-center `0` form a genuine
clearance-versus-curvature trade-off in the diagnostic plane:

- `0`: smaller magnitude, halo `4027.559`, minimum label distance `5.809`;
- `-24`: larger magnitude, halo `0`, minimum label distance `20.087`.

Neither dominates the other across both absolute offset and halo pressure.
The current winner is not dominated by the near-center candidate; it pays
curvature to obtain clearance. A Pareto frontier is therefore diagnostic only,
not a replacement Production selector.

Mode D's equality with current in the JA scan shows that making halo the first
lexicographic signal does not recover a lower-curvature route when zero-halo
hard-safe candidates exist. Mode C is more permissive because it puts
magnitude first; its authority result demonstrates why a minimum-clearance
boundary would be needed before any such direction could be considered.

## Decision

The current soft halo behaves as a **mixed, often effective clearance gate**:
it is a numeric preference inside the 20-unit interval, but positive pressure
also removes a candidate from current-existing-safe selection. It is not
justified to call it merely gentle, and it is not a universal explanation for
all curved routes.

Decision: **C — a minimum-clearance boundary is necessary; a simple
magnitude-first or halo side-tiebreak is insufficient.** The evidence also
supports relation-specific treatment: authority/lighthouse has a halo-only
opportunity, whereas mentors is hard-plus-halo and supervises/sofia are
dominated by other safety signals.

The following are not justified by this experiment:

- changing halo or hard numeric weights;
- adopting Mode C or D as Production routing semantics;
- relaxing hard label safety;
- changing candidate count, range, or step;
- adding normalized-curvature, straight, or near-zero bonuses;
- changing Node placement, label placement, drag hysteresis, or route memory;
- changing parallel or self-loop policy.

Temporal drag behavior remains unproven. This static replay does not establish
that the user's large-curvature jump is caused by drag-time state, animation,
or previous-route retention.

## Selected next checkpoint

The next bounded checkpoint is:

`E2R-LIAISONSCAPE-AUTOMATIC-ROUTE-LABEL-HALO-MINIMUM-CLEARANCE-BOUNDARY-AUDIT1`

Its purpose is to determine whether a scene-derived minimum clearance can be
defined without arbitrary numeric tuning and without calling halo-positive
routes current-safe. If that boundary cannot be justified, the hard-label
corridor audit should take precedence for the mentors case. Parallel bundle
spacing and self-loop angle remain separate threads.

## Cleanup and verification boundary

The temporary observer, semantic selector, harness, JSON output, and worktree
were removed. The LiaisonScape repository received no commit. Existing dirty
English/Japanese Lighthouse samples, `E2R-Session-0052.md`, seeded positions,
the existing preview worktree, and localhost server were preserved.
