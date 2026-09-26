# LiaisonScape Automatic-Route Near-Center Label-Pressure Continuity Experiment

Date: 2026-09-01

Task: `E2R-LIAISONSCAPE-AUTOMATIC-ROUTE-NEAR-CENTER-LABEL-PRESSURE-CONTINUITY-EXPERIMENT1`

Result: **MIXED — label pressure is causal, but its boundary is relation-specific**.
Hard-preserving halo removal recovers a low-curvature route for the
`authority-lighthouse` control, but not for `clara-thomas-mentors`. The latter
has hard rectangle intersections from multiple owners in its near-center
candidates. `supervises` and `sofia-archive` remain valid negative controls for
occupied-path and Node safety respectively.

## Scope and safety boundary

This was a read-only source experiment in the detached worktree
`C:/Users/extra/E2R/e2r-liaison-scape-label-pressure-continuity`, based on
LiaisonScape `fd563340625fd3d88dc25baedc93c4f8fe69e5e7`. The temporary observer
was removed before cleanup. No production runtime, route score, candidate set,
label placement, samples, parallel policy, self-loop policy, saved sample, or
interactive preview was changed.

The JA Lighthouse sample was read from the existing dirty main-repository file
`public/lighthouse-restoration-demo.ja.e2r.json`; it was not edited, staged, or
committed. The three-label F6 boundary remains closed: this experiment used
the current provisional Node-label rectangles and did not add a label-candidate
API or a multi-label solver.

## Canonical replay and baseline gate

The replay followed the App pipeline: fixed/self routes first, canonical
ordinary Relation order, predecessor `occupiedPaths`, provisional Node-label
geometry from `placeNodeLabel`, and the live `routeGraphEdge` candidate loop.
The observer reported each candidate's offset, per-owner distance, hard and
halo contributions, aggregate label pressure, total score, and safety inputs.
No score was reconstructed outside the live function.

| Relation | Expected offset | Replayed offset | Gate |
|---|---:|---:|---|
| `clara-thomas-mentors` | -52 | -52 | PASS |
| `clara-thomas-supervises` | -76 | -76 | PASS |
| `sofia-archive` | -156 | -156 | PASS |
| `authority-lighthouse` | -24 | -24 | PASS |

The required near-center facts were also reproduced: mentors has candidates
at `40` and `52`, and authority/lighthouse has a straight candidate at `0`.

## Live label-pressure semantics

For each candidate and each supplied Node-label rectangle, the live function
computes `minimumPathToLabelRectDistance(samples, rect)`.

- Distance `0` is an actual sampled-path/rectangle intersection. It adds a
  hard contribution of `100000`.
- A positive distance below the `20`-unit halo adds
  `(20 - distance) ** 2 * 20`. This is a continuous quadratic value inside a
  thresholded interval, with a discrete transition at the hard boundary and
  at the halo threshold.
- Distances at or above `20` add no halo pressure.
- Contributions from all label rectangles are summed before the score is
  computed.
- The total score is
  `nodePressure * 100 + (occupiedPath ? 10000 : 0) + labelPressure + abs(offset) * 0.01`,
  and candidate replacement uses strict `<` comparisons. The existing-safe predicate additionally
  requires zero Node pressure, no occupied overlap, and zero label pressure.

Thus hard pressure is both a large numeric score term and part of the
existing-safe gate; it is not only a boolean gate. Halo pressure is numeric
and also prevents a candidate from being an existing-safe candidate while it
is positive.

## Current candidate profiles

The following is the live current-mode trace. `hard owners` and `halo owners`
are the actual Node-label IDs reported by the observer. A halo value in
parentheses is that owner's contribution. `NL-safe` means Node-safe and not
occupied; `safe` means the full existing-safe predicate.

### `clara-thomas-mentors`

| Offset | Hard owners | Halo owners | Label pressure | NL-safe | Score | Safe / winner |
|---:|---|---|---:|---|---:|---|
| 40 | `clara`, `archive` | `lighthouse` (4600.5) | 204600.5 | yes | 204600.86 | no |
| 52 | `clara`, `archive` | `lighthouse` (7002.3) | 207002.3 | yes | 207002.80 | no |
| 64 | `lighthouse`, `clara`, `archive` | — | 300000 | yes | 300000.64 | no |
| -52 | — | — | 0 | yes | 0.52 | yes / **winner** |
| -64 | — | — | 0 | yes | 0.64 | yes |
| -100 | — | — | 0 | yes | 1.00 | yes |
| -112 | — | — | 0 | yes | 1.12 | yes |
| -124 | — | — | 0 | no | 6550.95 | no |

The `40` to `52` halo contribution changes continuously, but both candidates
are already beyond a hard intersection boundary. At `64`, three owners have
hard intersections. Consequently the current winner is not caused by the
absence of a near-center candidate. The near-center candidates are
non-label-safe because of a multi-owner hard-plus-halo combination.

### `authority-lighthouse`

| Offset | Hard owners | Halo owners | Label pressure | NL-safe | Score | Safe / winner |
|---:|---|---|---:|---|---:|---|
| 0 | — | `lighthouse` (4027.6) | 4027.6 | yes | 4027.56 | no |
| -12 | — | `lighthouse` (1025.2) | 1025.2 | yes | 1025.35 | no |
| -24 | — | — | 0 | yes | 0.24 | yes / **winner** |
| -36 | — | — | 0 | yes | 0.36 | yes |
| -60 | — | — | 0 | yes | 0.60 | yes |
| 12 | `lighthouse` | — | 100000 | yes | 100000.12 | no |
| 24 | `lighthouse` | — | 100000 | yes | 100000.24 | no |
| 72 | `lighthouse` | `clara` (611.0) | 100611.0 | yes | 100611.87 | no |

The straight candidate is not hard-intersecting. Its loss is halo-only and
foreign-label-owned (`lighthouse`), with a continuous decrease toward `-24`
and then zero. This is the hard-preserving case where omitting halo pressure
recovers straight routing.

## Qualitative ablations

The modes changed only the temporary observer's label-pressure calculation:

- A / `current`: hard and halo unchanged.
- B / `omit-halo`: hard unchanged; halo omitted.
- C / `omit-hard`: hard omitted; halo unchanged.
- D / `omit-all`: both omitted.

These are counterfactual diagnostics, not production recommendations.

| Relation | A current | B omit halo | C omit hard | D omit all |
|---|---:|---:|---:|---:|
| `clara-thomas-mentors` | -52 | -52 | 64 | 40 |
| `clara-thomas-supervises` | -76 | -76 | -52 | -40 |
| `sofia-archive` | -156 | 60 | 72 | 60 |
| `authority-lighthouse` | -24 | **0** | 12 | 0 |

### Interpretation of the primary cases

For mentors, Mode B leaves the hard intersections at `40`, `52`, and `64`,
so it does not recover a near-center winner. Mode C removes the discrete hard
penalty and selects `64`; Mode D selects `40`. These are not safe production
solutions: the label collision is deliberately omitted. The result supports
hard-label causality, but also shows that mentors cannot be explained by halo
continuity alone.

For authority/lighthouse, Mode B selects straight `0` with zero label
pressure. Therefore the hard boundary is preserved while removing only the
soft halo signal, and the lower-curvature route is recovered without a new
hard collision at the winner. This is direct evidence for a halo-dominated
selection boundary in this control.

## Negative controls

- `clara-thomas-supervises`: Mode B remains `-76`. The near-center `-40`
  remains occupied-path unsafe, and `-52` remains occupied-path unsafe. Mode C
  selects `-52` only because the temporary hard label contribution is removed;
  it does not remove the occupied-path rule. Mode D selects `-40` only after
  label pressure is also omitted, but the live occupied blocker is still
  observed in the candidate trace. There is no label-only safe recovery.
- `sofia-archive`: Node pressure remains unchanged. Candidates `0` through
  `48` remain Node-unsafe even when label pressure is omitted; the first
  Node-safe candidate is `60`. Mode C/D selecting `72`/`60` is not evidence
  that label relaxation fixes the Node-safety frontier.

## Continuity classification

The relation-level classifications are:

| Relation | Class | Evidence |
|---|---|---|
| mentors | **L4 mixed, with L3 multi-owner stacking** | hard `clara`/`archive` plus halo `lighthouse` at 40/52; three hard owners at 64 |
| authority/lighthouse | **L2 halo-dominated with a separate hard boundary** | halo-only pressure at 0 and -12; positive offsets encounter hard `lighthouse` intersections |
| supervises | **L4 mixed, occupied-dominated** | occupied path remains decisive at -40/-52; label ablation does not remove it |
| sofia/archive | **L4 mixed, Node-dominated** | Node pressure remains decisive through the near-center candidates |

Across the primary cases, label pressure creates discrete selection cliffs even
though some individual halo values vary continuously. The boundary is not one
global `L0` smooth function: hard onset, halo onset/exit, and multi-owner
stacking occur at different offsets for different Relations.

## Answers to the checkpoint questions

1. Mentors is hard-plus-halo with multiple owners; authority/lighthouse is
   halo-only at straight `0`, with hard intersections on the opposite side.
2. Pressure varies continuously inside the halo, but hard intersection and
   halo-threshold transitions create discrete cliffs.
3. Yes. The near-center candidates exist; label-pressure cliffs explain their
   rejection in the tested static replay.
4. Partially. Hard-preserving halo removal recovers authority/lighthouse `0`,
   but not mentors.
5. No general near-center recovery is established while hard contributions are
   retained; the primary mentors case remains blocked by hard intersections.
6. No final-presentation acceptance is implied by Modes C/D. Those modes omit
   collision pressure and do not prove Node-label, route-label, connector, or
   crossing safety.
7. Label-pressure continuity explains static selection boundaries, not the
   user's temporal drag sequence. Drag hysteresis, previous-route retention,
   and animation remain unproven.

## Decision and next checkpoint

Decision: **MIXED**. Label pressure is a causal factor, with a hard-plus-halo
multi-owner boundary for mentors and a halo-dominated boundary for
authority/lighthouse. A global label-pressure relaxation, production weight
tuning, candidate-set change, normalized-curvature score, or label movement is
not justified.

The selected next checkpoint is
`E2R-LIAISONSCAPE-AUTOMATIC-ROUTE-LABEL-HALO-CONTINUITY-SEMANTICS-EXPERIMENT1`.
It should preserve hard safety while examining bounded soft-clearance
semantics. A separate hard-label corridor audit remains appropriate if the next
evidence focuses on mentors. Multi-owner stacking is an alternative follow-up;
parallel edge direction and self-loop angle remain separate issues.

## Cleanup and verification

Temporary observer, ablation hook, harness, JSON output, and worktree were
removed. The LiaisonScape repository received no commit. The existing dirty
English/Japanese sample files, protected `E2R-Session-0052.md`, seeded
positions, existing preview worktree, and localhost server were preserved.
