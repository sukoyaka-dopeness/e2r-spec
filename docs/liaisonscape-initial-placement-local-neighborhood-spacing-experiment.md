# LiaisonScape Initial-placement Local-neighborhood Spacing Experiment

Date: 2026-09-01
Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-LOCAL-NEIGHBORHOOD-SPACING-EXPERIMENT1`

## Outcome

Result: **CASE 6 / EXACT RESULT 6 / DECISION D**.

> **NOT SUPPORTED — THE CANDIDATE CREATES MATERIAL SAFETY OR LOCALITY
> REGRESSIONS**

The validated criterion is still useful as an observation: a shared neighbor
can be too close to the geometric line of a related endpoint pair. However,
the tested displacement semantics are not safe as an Initial Placement
adjustment. The candidate changed the intended local geometry, but the
current R0 replay introduced new hard route/Node-label conflicts in Lighthouse
and replaced, rather than removed, hard conflicts in Ashen Crown. It is not
ready for the interactive preview and was not adopted by Production.

The exact next checkpoint is:
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-LOCAL-NEIGHBORHOOD-DISPLACEMENT-BOUNDARY-AUDIT1`.

## Start state and preservation

- LiaisonScape main HEAD: `fd563340625fd3d88dc25baedc93c4f8fe69e5e7`.
- LiaisonScape main status at start and end: only
  `public/lighthouse-restoration-demo.en.e2r.json` and
  `public/lighthouse-restoration-demo.ja.e2r.json` were dirty.
- e2r-spec starting HEAD: `b8c8a045d0bb1ab245e1d6472ee825e35b23e2be`.
- Existing routing preview HEAD: `fd563340625fd3d88dc25baedc93c4f8fe69e5e7`.
- Existing routing preview modified paths were preserved.
- Existing localhost `http://127.0.0.1:5173/e2r-liaison-scape/` was not
  restarted or modified; it remained HTTP 200.
- Candidate directory:
  `C:\Users\extra\E2R\e2r-liaison-scape-local-neighborhood-spacing-experiment`.
  It was a detached clone at the LiaisonScape reference HEAD and was used only
  for this experiment.
- The two dirty Lighthouse samples were copied into the candidate under
  `public/dirty-lighthouse-restoration-demo.{ja,en}.e2r.json`; the originals
  were not edited, restored, staged, or committed.
- `sessions/E2R-Session-0052.md` and the protected edge/CDP diagnostic
  playbook were not edited or staged.

## Source audit

The coordinate-less entry in `src/App.tsx` calls `settleInitialPlacement` only
when `getStoredCoordinates` returns no usable stored positions. The helper
delegates to `solveAutoLayout` with the existing
`INITIAL_PLACEMENT_SETTLING_ITERATIONS` value of `3`. The audited solver:

- sorts Entity IDs lexically and builds undirected distinct-neighbor
  adjacency;
- ignores self-relations and non-Entity endpoints for adjacency;
- ranks component seeds by distinct-neighbor degree;
- seeds a ring from the existing `DEFAULT_CLEARANCE` value of `96`;
- uses the existing repulsion scale `0.25`, attraction scale `0.018`, and
  per-axis movement clamp `[-18, 18]` during settling; and
- packs disconnected components with the existing component gap.

No `seededPositions` path was changed. Stored Coordinate semantics remained in
`App.tsx` and `dataset.ts` and were not changed.

## Candidate design and source diff

Only `src/auto-layout.ts` was modified in the candidate. A private helper
`applySharedNeighborFanOut` runs after the existing settling loop for each
connected component.

For deterministically sorted IDs, it enumerates each distinct direct Entity
pair `U,V` and each `W` that is directly adjacent to both. Self-relations do
not create adjacency, relation multiplicity is collapsed by the existing
adjacency set, and no parallel/sample/locale branch exists. Among eligible
triplets in one component it selects the smallest current perpendicular
distance from `W` to the infinite `U,V` line, with a lexical triplet tie-break.
If that distance is below the existing `clearance`, it moves only `W` along
the current-side normal. The displacement is the existing clearance gap scaled
by the existing `0.25` settling repulsion scale, then bounded by the existing
per-axis `[-18,18]` movement clamp.

This is one topology-only candidate adjustment. It adds no global iteration,
global force change, target edge length, route input, label input, locale
input, or feedback input. New arbitrary numeric constants: **0**.

Candidate source diff recorded before cleanup:

```text
src/auto-layout.ts
+ applySharedNeighborFanOut(component, points, adjacency, clearance)
+ deterministic shared-neighbor triplet enumeration
+ minimum line-distance selection per component
+ existing clearance / 0.25 displacement scale / [-18,18] clamp reuse
```

## Sample inventory and no-op boundary

The available inventory remained the preceding bounded set: Lighthouse
JA/EN (including the dirty controls), Ashen Crown JA/EN, Apollo 11 JA/EN,
Titanic JA/EN, Berlin Wall JA/EN, the manual Event/Entity check, the
coordinate prototype, and the Linkscape relation sample.

The candidate changed the following coordinate-less auto states:

| sample | changed Nodes | maximum displacement |
|---|---|---:|
| Lighthouse JA/EN and dirty controls | `clara` | 20.99 |
| Ashen Crown JA/EN | `elara` | 10.09 |
| Linkscape relation sample | `entity-cafe` | 0.51 |

The coordinate prototype, Apollo 11, Titanic, Berlin Wall, and the manual
Event/Entity graph had no eligible shared-neighbor candidate and were exact
no-ops against the current solver. In particular, no-shared-neighbor samples
did not move unexpectedly. The stored-coordinate gate was unchanged: samples
with stored coordinates still use their stored placement in the application;
the candidate only affects the coordinate-less branch.

Candidate output was deterministic across three repeated Lighthouse and Ashen
runs. Reversing Relation input order produced the same result. Paired JA/EN
datasets with the same topology and coordinate-less input produced identical
Node coordinates. The pure solver accepts no starting-coordinate vector, so a
separate translation test was not applicable; no translation-dependent state
was introduced.

## Placement and local descriptors

The primary Lighthouse auto descriptor changed from the current collapsed
pair as follows (values are `dUV / dWU / dWV`, with the angle at the final
listed Node):

| state | Clara/Thomas/Maya | angle |
|---|---|---:|
| current | 163.91 / 128.22 / 291.11 | 5.39° |
| candidate | 166.77 / 131.85 / 291.11 | 14.51° |

The local angle opened directionally, but the minimum Node-center distance
remained 100.41 in this aggregate diagnostic because another pair governed
the minimum. The candidate therefore did not by itself establish a safe
presentation improvement.

For the Ashen Crown selected ordinary Class O `Darius/Elara/Kael`:

| state | dUV / dWU / dWV | angle |
|---|---|---:|
| current | 112.48 / 85.94 / 104.35 | 71.73° |
| candidate | 117.80 / 85.94 / 104.35 | 77.17° |

The selected local angle opened, and the candidate reduced the aggregate
route/node-influence count in the bounded replay, but it did not satisfy the
hard-label guard described below. This is why the geometric criterion remains
diagnostically plausible while this displacement model is rejected.

## R0 routing and presentation

R0 was primary. The replay used the current `routeGraphEdge`, node-label
placement, route-node influence, and route-to-label hard-conflict helpers.
These are evaluation outputs only; none was passed into the candidate placer.
The route-length column is secondary to safety and readable separation.

| sample | metric | current | candidate |
|---|---|---:|---:|
| Lighthouse JA | curved / node influence / hard conflicts | 9 / 1 / 0 | 9 / 1 / 3 |
| Lighthouse EN | curved / node influence / hard conflicts | 8 / 2 / 0 | 8 / 1 / 1 |
| Lighthouse JA | minimum foreign clearance | 55.49 | 54.47 |
| Lighthouse EN | minimum foreign clearance | 50.61 | 54.47 |
| Ashen JA | curved / node influence / hard conflicts | 9 / 5 / 1 | 8 / 3 / 2 |
| Ashen EN | curved / node influence / hard conflicts | 8 / 4 / 2 | 8 / 1 / 3 |

New Lighthouse JA hard-conflict identities were `elias-clara`,
`sofia-archive`, and `thomas-maya-friends`; EN added `sofia-archive`.
Ashen did not preserve the current hard-conflict set: JA changed from
`r14` to `r2,r12`, and EN changed from `r2,r12` to `r14,r5,r8`.

The candidate did not create a Node-body overlap in the bounded placement
guard; its Lighthouse and Ashen minimum center distances remained above the
existing body-overlap boundary. That does not offset the hard label conflict
regression. The candidate also changed route selection in ways that were not
consistently local to the intended pair.

Other-sample guards were stable for the no-op inventory. Linkscape's eligible
local topology moved `entity-cafe` by 0.51 without a hard conflict, while all
no-shared-neighbor controls were unchanged. No unrelated sample movement,
nondeterminism, or locale-dependent coordinate was found.

## Lighthouse parallel and R1 secondary boundary

The Lighthouse Clara/Thomas parallel bundle remained deterministic, but this
candidate did not provide a safe R0 improvement: the parallel route sides and
offset selection remained presentation-helper decisions, while the local
Node-label conflicts increased in the candidate replay. Therefore the
interactive-preview gate is closed.

Final-label feedback was intentionally secondary. Because the candidate had
already failed the primary R0 hard-safety guard in both target topologies, no
feedback result was used to rescue or adopt it. Existing R1 feedback semantics
were not changed, and no feedback-dependent Production conclusion was made.
The original-R0-label safety rule remains in force; a feedback-generated label
rectangle was not treated as proof that the candidate is safe for the initial
provisional state.

## Decision

| gate | result |
|---|---|
| criterion can be detected from topology and Node geometry only | YES |
| candidate executes only on eligible shared-neighbor topology | YES |
| deterministic and locale-independent coordinates | YES |
| no-shared-neighbor exact no-op | YES |
| new Node-body overlap | NO observed |
| new hard route/Node-label conflict | YES |
| Lighthouse R0 materially safe/better | NO |
| Ashen R0 materially safe/better | NO; hard-conflict set regressed |
| arbitrary numeric control added | NO |
| interactive preview gate | CLOSED |

The exact classification is **CASE 6**, and the exact result is **6**. The
primary decision is **D — candidate overcorrects**. The failure is attributable
to displacement semantics: the existing-clearance line-distance correction
opens one local angle while moving a Node into other presentation corridors.
The next checkpoint must audit the displacement boundary instead of tuning a
sample-specific coefficient here.

No candidate worktree is preserved. Its temporary harnesses, copied samples,
and generated output were removed after the final validation. No LiaisonScape
commit was created and no source was copied to main.

## Validation and Git checkpoint

Candidate worktree validation completed before cleanup:

- `npm.cmd test`: **280/280 passed**;
- `npm.cmd run lint`: passed;
- `npm.cmd run build`: passed;
- candidate `git diff --check`: passed.

The candidate source was never staged or committed. Main LiaisonScape remained
source-clean apart from the two pre-existing dirty Lighthouse samples. The
existing routing preview remained unchanged. No push, tag, release,
deployment, or publication occurred.

This report and `docs/roadmap.md` were the only e2r-spec paths staged. The
protected session remained unstaged and untouched. e2r-spec validation and the
cached diff check passed. The resulting local spec commit is:

```text
docs: evaluate LiaisonScape local neighborhood spacing
```

The commit remains unpushed.
