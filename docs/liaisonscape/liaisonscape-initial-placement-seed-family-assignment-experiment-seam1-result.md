# LiaisonScape Initial-placement Seed Family / Assignment Experiment Seam 1 Result

Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-FAMILY-ASSIGNMENT-EXPERIMENT-SEAM1`
Date: 2026-09-02

## Result

Result: **CASE 11 / EXACT RESULT 1+2+3+4 / DECISION E**.

The disposable seam validates a causal separation between candidate-family
capacity and current assignment loss at the pre-settling hard-safety stage.
For the original Lighthouse and Ashen Crown controls, F0 has available
hard-valid mappings while A0-CURRENT selects hard-invalid mappings; A1-
HARD-SAFE recovers a valid representative. The known F0-infeasible G7 and K6
controls remain `FAMILY-INFEASIBLE`, and F1-ALG is hard-valid under both
assignment policies.

The transform invariant is not fully supported: deterministic ID rename
changes the Lighthouse F0+A0 classification from `HARD-INVALID` to
`HARD-VALID`. This is an exact, non-visual finding. It means the current
lexical-ID assignment control is semantically sensitive to representation and
requires the selected equivariance follow-up before any assignment policy is
considered for Production.

No Production layout, candidate family, assignment policy, settling change,
routing change, label change, or UI behavior was selected or implemented.

## Start-state reconciliation

The reconciliation gate passed:

| Item | Observed |
|---|---|
| LiaisonScape source commit | `fd563340625fd3d88dc25baedc93c4f8fe69e5e7` |
| LiaisonScape branch/upstream | `main` / `origin/main` |
| LiaisonScape baseline drift | NO |
| e2r-spec HEAD | `8b6e742a0b558bcb083faff5368f09035a8dc1c3` |
| Required preceding design | `b46deb0` present |
| Protected e2r-spec file | `sessions/E2R-Session-0052.md` preserved dirty and unstaged |
| Protected LiaisonScape samples | `public/lighthouse-restoration-demo.en.e2r.json` and `.ja.e2r.json` preserved dirty and unstaged |
| Routing preview | Existing preview was read-only and not stopped or reused; final probe found no listener on port 5173 |
| Sponsors roadmap | Preserved |
| Personal Storage research | Preserved |
| VS Code OSINT research | Preserved |
| ai-knowledge | Not changed |

Prior accepted controls were reproduced: Lighthouse and Ashen Crown have
`F0 F-SET=YES` with A0 hard-invalid; G7 and K6 have `F0 F-SET=NO`; and
F1-ALG has `HardValid=Inject` under the current exact GEO-0/GEO-3 floor.

## Disposable worktree and implementation surface

The requested path was used:

`C:\Users\extra\E2R\e2r-liaison-scape-seed-family-assignment-seam`

The main repository's Git metadata denied registration of a formal linked
worktree. The safe fallback was a disposable local clone at the exact
requested path, checked out detached at the reconciled source commit. It was
clean before the temporary files were added, had no dependency changes, and
was removed after evidence capture. It was not a Production branch and no
experimental commit was created.

Temporary files were limited to:

- `experimental/seed-family-assignment/auto-layout-seam.ts`
- `experimental/seed-family-assignment/run-seam.ts`
- `experimental/seed-family-assignment/out/`

The copy preserved S0 component discovery, S1 degree/lexical ranking, F0
runtime construction, S4 pre-settling mapping, unchanged settling constants,
per-axis clamping, component extent/packing, and returned translation. Only
S2 candidate-family construction and S3 Node-to-candidate assignment were
separated conceptually in the disposable copy. `src/auto-layout.ts` was not
changed, including in the disposable copy.

## Baseline transparency gate

The mandatory F0+A0 Lighthouse comparison passed. Every required field was
`EXACT MATCH`:

| Field | Status |
|---|---|
| component membership | EXACT MATCH |
| adjacency | EXACT MATCH |
| degree | EXACT MATCH |
| lexical rank | EXACT MATCH |
| F0 candidate sequence | EXACT MATCH |
| Node-to-candidate zip | EXACT MATCH |
| S4 pre-settling positions | EXACT MATCH |
| settling inputs | EXACT MATCH |
| final returned positions, 3-iteration comparison | EXACT MATCH |
| final returned positions, default `solveAutoLayout` comparison | EXACT MATCH |

The comparison used the same JavaScript numeric path for the copied runtime
mechanics. No screenshot or visual judgment was used. N1 was not triggered;
the seam is valid.

## Exact arithmetic and hard oracle

The authoritative E-L0 oracle used exact symbolic arithmetic:

- F0 used rational coefficients over `Q(sqrt(2))` for the center, eight
  directions, ring progression, and partial final ring.
- F1-ALG used exact integers with `P_i=(i,i^2)`.
- GEO-0 counted exactly degenerate accepted motif triangles.
- GEO-3 counted exactly same-directed-ray pairs around a shared motif Node.
- No epsilon, distance threshold, angle threshold, visual score, randomness,
  or downstream settling result entered hard classification.

F0+A1 used complete exact backtracking for bounded feasible controls, with
only already-established GEO-0/GEO-3 violations used for pruning. G7 and K6
used the prior exact F0 capacity/F-SET infeasibility proof. F1 used the prior
exact `HardValid=Inject` proof as its diagnostic fast path.

## Families and assignment policies

F0 is the source-exact current fixed eight-direction/ring family. F1-ALG is
the diagnostic-only algebraic family `P_i=(i,i^2)`. F1 is not a visual layout,
scale recommendation, or Production candidate.

A0-CURRENT is:

1. descending distinct-neighbor degree;
2. lexical Entity-ID tie-break;
3. candidate enumeration index;
4. direct rank-to-candidate zip, with no repair.

A1-HARD-SAFE materializes one exact hard-valid mapping when one exists, reports
`FAMILY-INFEASIBLE` for a proof-resolved empty family, and otherwise would
report `OPERATIONALLY-UNRESOLVED`. No unresolved cell remained after the
proof-status correction and rerun.

## Corpus provenance and transformations

The required corpus was run:

| Control | Provenance/role |
|---|---|
| Lighthouse | current repository sample, topology only; stored coordinates, labels, locale, metadata, routing, and presentation excluded |
| Ashen Crown | accepted `e2r-spec/examples/ashen-crown.en.e2r.json` topology-only control |
| G7 | prior exact eight-paired shared-motif fixture |
| K6 | prior exact complete-graph-six fixture |
| K3 | complete-graph-three symmetry control |
| zero-motif | small path with no accepted motif demand |
| true-symmetry-star | prior equivalent-leaf star control, separate from K3 |

Lighthouse, Ashen Crown, and K3 also ran with deterministic ID rename,
Entity-array reverse, Relation-array reverse, and both reversals. The rename
was graph-isomorphic and deterministic; no random data was used.

## Matrix result

Notation: `HV/Y` means `HARD-VALID` / hard-valid YES; `HI/N` means
`HARD-INVALID` / hard-valid NO; `FI/N` means proof-resolved
`FAMILY-INFEASIBLE` / hard-valid NO. `BT` is complete exact backtracking;
`FP` is an exact family proof/fast path; `G0/G3` gives exact violation counts.

| Graph | Transform | F0+A0 | F0+A1 | F1-ALG+A0 | F1-ALG+A1 |
|---|---|---|---|---|---|
| Lighthouse | original | HI/N, G0=1/G3=2, BT | HV/Y, BT | HV/Y, FP | HV/Y, FP |
| Lighthouse | rename | HV/Y, BT | HV/Y, BT | HV/Y, FP | HV/Y, FP |
| Lighthouse | Entity reverse | HI/N, G0=1/G3=2, BT | HV/Y, BT | HV/Y, FP | HV/Y, FP |
| Lighthouse | Relation reverse | HI/N, G0=1/G3=2, BT | HV/Y, BT | HV/Y, FP | HV/Y, FP |
| Lighthouse | both | HV/Y, BT | HV/Y, BT | HV/Y, FP | HV/Y, FP |
| Ashen Crown | original | HI/N, G0=0/G3=3, BT | HV/Y, BT | HV/Y, FP | HV/Y, FP |
| Ashen Crown | rename | HI/N, G0=0/G3=3, BT | HV/Y, BT | HV/Y, FP | HV/Y, FP |
| Ashen Crown | Entity reverse | HI/N, G0=0/G3=3, BT | HV/Y, BT | HV/Y, FP | HV/Y, FP |
| Ashen Crown | Relation reverse | HI/N, G0=0/G3=3, BT | HV/Y, BT | HV/Y, FP | HV/Y, FP |
| Ashen Crown | both | HI/N, G0=0/G3=3, BT | HV/Y, BT | HV/Y, FP | HV/Y, FP |
| G7 | original | HI/N, FI proof | FI/N, FI proof | HV/Y, FP | HV/Y, FP |
| K6 | original | HI/N, FI proof | FI/N, FI proof | HV/Y, FP | HV/Y, FP |
| K3 | original | HV/Y, BT | HV/Y, BT | HV/Y, FP | HV/Y, FP |
| K3 | rename | HV/Y, BT | HV/Y, BT | HV/Y, FP | HV/Y, FP |
| K3 | Entity reverse | HV/Y, BT | HV/Y, BT | HV/Y, FP | HV/Y, FP |
| K3 | Relation reverse | HV/Y, BT | HV/Y, BT | HV/Y, FP | HV/Y, FP |
| K3 | both | HV/Y, BT | HV/Y, BT | HV/Y, FP | HV/Y, FP |
| zero-motif | original | HV/Y, BT | HV/Y, BT | HV/Y, FP | HV/Y, FP |
| true-symmetry-star | original | HV/Y, BT | HV/Y, BT | HV/Y, FP | HV/Y, FP |

F0 is known non-empty for Lighthouse/Ashen Crown. F0 is proof-resolved
infeasible for G7/K6; A1 does not manufacture a mapping. K3 and the two
controls are hard-valid in all four cells.

## Control-specific results

### Lighthouse

F0 `F-SET=YES`. Original A0 is hard-invalid with one GEO-0 and two GEO-3
violations. F0+A1 finds a hard-valid mapping by complete exact search.
Renaming IDs changes A0's selected mapping enough to make the F0+A0 cell
hard-valid, while A1 remains hard-valid. This is the direct N6 finding.

The original F0+A1 representative was `archive=6, authority=8, beacon=3,
clara=0, daniel=9, elias=4, lighthouse=1, maya=2, sofia=5, thomas=7`.
The renamed A1 representative also remained sound but used a different
literal ID-keyed witness, which is informational only.

### Ashen Crown

F0 `F-SET=YES`. Original and all required transforms keep A0 hard-invalid
with three GEO-3 violations. F0+A1 finds a hard-valid mapping under complete
exact search. F1-ALG is hard-valid under both A0 and A1.

### G7

F0 is `FAMILY-INFEASIBLE` by the prior exact capacity/F-SET proof. Both F0
assignment cells report `FAMILY-INFEASIBLE`; no mapping is fabricated. F1-ALG
is hard-valid under both assignment policies.

### K6

F0 is `FAMILY-INFEASIBLE` by the prior exact complete-graph capacity/F-SET
proof. Both F0 assignment cells report `FAMILY-INFEASIBLE`; no mapping is
fabricated. F1-ALG is hard-valid under both assignment policies.

### K3

K3 is a true-symmetry control. All transforms and all four cells are
hard-valid. A1's literal representative is unchanged in this small control;
semantic stability, rather than literal witness stability, is the required
criterion.

### Zero-motif control

The path control has no accepted GEO-0/GEO-3 motif demand. All four cells are
hard-valid, confirming that the oracle does not manufacture motif constraints.

### True-symmetry star

The equivalent-leaf star is hard-valid in all four cells. Its role is a
separate symmetry sanity check; it is not a visual baseline.

## Transform and search diagnostics

| Graph | Transform | Semantic classification invariant? | A1 soundness invariant? | Representative changed? |
|---|---|---:|---:|---:|
| Lighthouse | original | YES | YES | NO |
| Lighthouse | rename | NO | YES | YES |
| Lighthouse | Entity reverse | YES | YES | NO |
| Lighthouse | Relation reverse | YES | YES | NO |
| Lighthouse | both | NO | YES | YES |
| Ashen Crown | original | YES | YES | NO |
| Ashen Crown | rename | YES | YES | YES |
| Ashen Crown | Entity reverse | YES | YES | NO |
| Ashen Crown | Relation reverse | YES | YES | NO |
| Ashen Crown | both | YES | YES | YES |
| K3 | original | YES | YES | NO |
| K3 | rename | YES | YES | NO |
| K3 | Entity reverse | YES | YES | NO |
| K3 | Relation reverse | YES | YES | NO |
| K3 | both | YES | YES | NO |

A1 search uses structural degree rank for variable ordering and candidate index
for operational ordering. Lexical ID is not a hard predicate and has no
semantic authority in A1. F0 complete-search visit/prune counts for the
original Lighthouse and Ashen controls were 11/1 and 17/7 respectively;
renamed controls were 10/0 and 16/6. F1 used one exact proof-resolved fast
path visit for each cell. No visual score, threshold, randomness, or
settling-assisted validity was used, and no Production algorithm was selected.

## Contrast results

| Graph | C1 | C2 | C3 | C4 | Interpretation |
|---|---|---|---|---|---|
| Lighthouse | SUPPORTED | SUPPORTED | NOT APPLICABLE | SUPPORTED | Assignment loss and family effect are separable on the original control; rename exposes A0 representation sensitivity. |
| Ashen Crown | SUPPORTED | SUPPORTED | NOT APPLICABLE | SUPPORTED | Assignment loss is present under F0; F1 removes the hard-floor failure under fixed A0. |
| G7 | NOT APPLICABLE | SUPPORTED | SUPPORTED | SUPPORTED | F0 family infeasibility remains after assignment policy changes; F1 is feasible. |
| K6 | NOT APPLICABLE | SUPPORTED | SUPPORTED | SUPPORTED | F0 family infeasibility remains after assignment policy changes; F1 is feasible. |
| K3 | NOT APPLICABLE | NOT APPLICABLE | NOT APPLICABLE | SUPPORTED | Symmetry sanity control has no assignment-dependent hard failure. |
| zero-motif | NOT APPLICABLE | NOT APPLICABLE | NOT APPLICABLE | SUPPORTED | No motif demand is manufactured. |
| true-symmetry-star | NOT APPLICABLE | NOT APPLICABLE | NOT APPLICABLE | SUPPORTED | Symmetry control remains hard-valid. |

## Hypotheses and falsification

| Item | Status | Evidence |
|---|---|---|
| H1 | SUPPORTED | F0+A0 seam and downstream comparisons are exact matches. |
| H2 | SUPPORTED | Lighthouse/Ashen F0+A1 is hard-valid while original F0+A0 is hard-invalid. |
| H3 | SUPPORTED | G7/K6 F0+A1 reports proof-resolved FAMILY-INFEASIBLE. |
| H4 | SUPPORTED | F1+A0 and F1+A1 are hard-valid throughout the corpus. |
| H5 | NOT SUPPORTED | Lighthouse ID rename changes F0+A0 cell classification. |
| H6 | SUPPORTED | The main causal contrast is established at E-L0. |

| Falsification | Status |
|---|---|
| N1 | NOT TRIGGERED |
| N2 | NOT TRIGGERED |
| N3 | NOT TRIGGERED |
| N4 | NOT TRIGGERED |
| N5 | NOT TRIGGERED |
| N6 | TRIGGERED |
| N7 | NOT TRIGGERED |
| N8 | NOT TRIGGERED |
| N9 | NOT TRIGGERED |
| N10 | NOT TRIGGERED |

## Evidence boundaries

E-L0 completed and remains the primary authority. E-L1 was limited to a
headless unchanged-settling/packing smoke and baseline comparison. E-L2 was
not performed. There is no visual-quality conclusion, no routing conclusion,
and no label-quality conclusion.

The supported causal model is:

1. a candidate family can be hard-feasible while the current assignment loses
   that feasibility;
2. a family can be hard-infeasible and cannot be repaired by assignment;
3. a sufficiently rich diagnostic family can make hard validity assignment-
   insensitive;
4. current lexical-ID ordering is not yet representation-equivariant.

The result does not establish that F1-ALG is good, that Initial Placement is
solved, that settling is good, or that routing/labels/visual quality improved.

## Case, exact result, and decision

Primary case: **CASE 11 — MIXED**.

Validated clauses:

1. F0 family capacity and current A0 assignment are distinct failure
   responsibilities for the original real controls.
2. A1-HARD-SAFE recovers available F0 hard feasibility for Lighthouse/Ashen
   without repairing proof-infeasible G7/K6.
3. F1-ALG is hard-valid under both A0 and A1 as an assignment-insensitive
   diagnostic control.
4. The source-exact disposable seam is baseline-transparent and E-L0 is
   sufficient for the family/assignment causal contrast.

Clause 5, requiring transform-invariant semantic classification, is not
validated because Lighthouse ID rename changes the F0+A0 classification.

Decision: **E — identity/equivariance needs follow-up**.

Selected next checkpoint, not started automatically:

`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-ASSIGNMENT-EQUIVARIANCE-FOLLOWUP1`

The follow-up should isolate whether the current lexical rank is merely an
operational witness order or an observable semantic dependency, while keeping
the exact hard oracle and candidate-family/assignment boundary intact.

## Cleanup and validation boundary

Before cleanup, the result JSON, matrix, search counts, proof paths, baseline
comparisons, and transform findings were captured in this record. The
temporary files and disposable clone were then removed. The formal
`git worktree list` contained no entry for the experiment path; the existing
routing-preview worktree was not removed.

Production changes: **NO**.

The required post-cleanup validation completed for this bounded record:

- LiaisonScape `npm.cmd test`: expected baseline 280/280;
- LiaisonScape lint, build, and `git diff --check`;
- e2r-spec `npm.cmd run validate` and `git diff --check`;
- exact-path staged diff review for this result and the minimal roadmap entry;
- existing localhost HTTP 200 check was attempted; no listener was present on port 5173, so no server was started or repurposed.

## Production and repository state

No LiaisonScape commit, push, tag, release, deploy, or publication was made.
No source, candidate generator, candidate vocabulary, assignment, degree
ranking, lexical ordering, settling, packing, routing, labels,
`seededPositions`, samples, preview, feature flag, query switch, or UI was
changed. No dependency was added. The only intended e2r-spec changes are this
result record and its minimal roadmap status entry; the protected Session
file remains untouched.
