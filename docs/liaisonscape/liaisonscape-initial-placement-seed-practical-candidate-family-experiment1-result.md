# LiaisonScape Initial-placement Seed Practical Candidate-family Experiment 1 Result

Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRACTICAL-CANDIDATE-FAMILY-EXPERIMENT1`

Date: 2026-09-02

## Result

Result: **CASE 2 / EXACT RESULT 1+2+3+4+5+6 / DECISION A**.

`FP1-NGP` preserves the current exact GEO-0/GEO-3 hard-safety property of
`F1-ALG`, remains assignment-insensitive under that floor, bounds its
coordinate envelope, and does not reproduce `F0-CURRENT`'s fixed eight-ray
saturation in the bounded high-R controls. JavaScript `Number` materialization
was finite and distinct through `N=65`, and unchanged-settling compatibility
completed for the three selected smoke graphs.

This is a practical diagnostic result only. It does not establish visual
readability, crossing quality, label safety, route quality, or Production
suitability. `FP1-NGP` was not implemented or selected for Production.

Exact result clauses:

1. **VALIDATED** - `FP1-NGP` retains the current exact GEO-0/GEO-3 hard-safety
   property of `F1-ALG` while bounding its normalized coordinate envelope.
2. **VALIDATED** - `FP1-NGP` remains assignment-insensitive for the current
   floor, so Node/ID materialization order does not control hard classification.
3. **VALIDATED** - `FP1-NGP` does not recreate `F0-CURRENT`'s fixed eight-ray
   saturation over the bounded high-R controls.
4. **VALIDATED** - `FP1-NGP` materializes to finite, distinct JavaScript
   `Number` coordinates through the bounded `N<=65` experiment domain.
5. **VALIDATED** - The practical profile distinguishes raw `F1-ALG` from
   `FP1-NGP` using coordinate-envelope and numeric diagnostics without a
   visual score.
6. **VALIDATED WITH QUALIFICATION** - `FP1-NGP` is a better operational
   diagnostic family than raw `F1-ALG` for this experiment, but remains
   visually unassessed and is not a Production family.

Decision: **A - FP1-NGP practical diagnostic validated; design the next
visual/structural quality experiment.**

The selected next checkpoint is exactly:

`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRACTICAL-FAMILY-STRUCTURAL-QUALITY-EXPERIMENT-DESIGN1`

It is selected only and was not auto-started.

## Source and baseline reconciliation

The LiaisonScape main repository was at the required source baseline:

| Item | State |
|---|---|
| HEAD | `fd563340625fd3d88dc25baedc93c4f8fe69e5e7` |
| branch | `main` |
| upstream | `origin/main` |
| baseline drift | NO |
| initial dirty state | the two protected Lighthouse public sample files only |
| protected samples | preserved and unstaged |
| source changes | NONE |

The E2R specification repository was at `ebf8fba4f42fc26adc169a508e3ee0040588e866`
(`ebf8fba`, the preceding Design1 checkpoint). The protected
`sessions/E2R-Session-0052.md` modification was preserved and not staged.

The F0 transparency gate compared the source mirror against the live
`solveAutoLayout` path for Lighthouse. Every required field was an **EXACT
MATCH**:

- component membership;
- adjacency and degree map;
- lexical rank;
- F0 candidate sequence;
- Node-to-candidate mapping;
- pre-settling/S4 positions;
- unchanged-settling inputs; and
- final returned positions.

The gate result was **PASS**. No causal interpretation was made under a
baseline mismatch.

## Disposable experiment surface

The preferred worktree registration was blocked by repository metadata
permission. The permitted fallback was used:

`C:\Users\extra\E2R\e2r-liaison-scape-practical-candidate-family-experiment`

The fallback was a detached local clone at the exact source commit above. The
only executable surface was under
`experimental/practical-candidate-family/`; it used Node built-ins and the
live `src/auto-layout.ts` source. No dependency was installed. The temporary
clone, helper, output, and fixture files were removed after evidence capture.

No routing preview, browser, `ai-knowledge`, sample, package, Production test,
or application source was changed.

## Exact oracle and family definitions

The authoritative predicates remained threshold-free:

- **GEO-0:** an accepted topology-derived triangle motif is not exactly
  degenerate;
- **GEO-3:** distinct motif neighbors around a shared Node do not occupy the
  same directed ray, using `cross(u,v)=0 && dot(u,v)>0`.

Topology used Entity Nodes and valid Entity-to-Entity Relations, ignored
direction, collapsed duplicate pairs, and excluded self-relations. Labels,
locale, Events, stored coordinates, Presentation, routes, and visual output
were excluded.

`F0-CURRENT` is the source-exact center/ring family with eight repeated
directions per ring. Its directional vocabulary is eight, even though later
rings add more candidate positions.

`F1-ALG` is the exact diagnostic family

```text
Q_N = { (i, i^2) | i = 0, ..., N-1 }.
```

For distinct indices, its determinant is
`(j-i)(k-i)(k-j)`, so no three candidates are collinear and no two vectors
from one candidate share a positive ray. It is not a layout proposal.

For `N>=2`, `FP1-NGP` is

```text
m = N - 1
P_i = (i/m, (i/m)^2), i = 0, ..., m.
```

Its exact common-denominator representation is

```text
D = m^2
P_i = (i*m/D, i^2/D).
```

For `N=1`, the family is `{(0,0)}`. `D` is nonzero for every normalized case.
This is an invertible positive affine normalization of `F1-ALG` for each
fixed `N`; it preserves injectivity, collinearity, and the same-directed-ray
predicate exactly. Generation uses only `N`, is deterministic and ID-neutral,
uses no randomness, and is `O(N)` time / `O(N)` candidate storage.

## Corpus and matrix

The bounded corpus was:

| Control | N | Provenance / role |
|---|---:|---|
| Lighthouse | 10 | LiaisonScape public sample at the exact source commit |
| Ashen Crown | 10 | `e2r-spec/examples/ashen-crown.en.e2r.json` |
| G7 | 17 | prior exact one-shared-Node/eight-paired-motif fixture |
| K6 | 6 | prior exact complete-graph-six fixture |
| K3 | 3 | complete-graph-three symmetry control |
| zero-motif | 6 | small path control |
| true-symmetry-star | 6 | equivalent-leaf star control |
| high-R-9 | 10 | prior paired high-R series, `R=9` |
| high-R-16 | 17 | prior paired high-R series, `R=16` |

The required matrix ran with `39` cells: M1 `F0+A0`, M2 `F0+A1`, M3
`F1-ALG` representative, M4 `FP1-NGP` representative, and M5 reverse
representatives for Lighthouse, Ashen Crown, and K3 only because that probe
was cheap and mechanically useful.

`HV/Y` means hard-valid / hard-valid YES; `HI/N` means hard-invalid / NO; and
`FI/N` means proof-resolved family-infeasible / NO. `FP` is the exact
general-position proof; `BT` is complete exact backtracking; `CP` is the F0
capacity proof.

| Control | F0+A0 | F0+A1 | F1-ALG | FP1 representative | FP1 reverse M5 |
|---|---|---|---|---|---|
| Lighthouse | HI/N, G0=1/G3=2, BT | HV/Y, BT | HV/Y, FP | HV/Y, FP | HV/Y, FP |
| Ashen Crown | HI/N, G0=0/G3=3, BT | HV/Y, BT | HV/Y, FP | HV/Y, FP | HV/Y, FP |
| G7 | HI/N, family infeasible, CP | FI/N, CP | HV/Y, FP | HV/Y, FP | not run |
| K6 | HI/N, family infeasible, CP | FI/N, CP | HV/Y, FP | HV/Y, FP | not run |
| K3 | HV/Y, BT | HV/Y, BT | HV/Y, FP | HV/Y, FP | HV/Y, FP |
| zero-motif | HV/Y, BT | HV/Y, BT | HV/Y, FP | HV/Y, FP | not run |
| true-symmetry-star | HV/Y, BT | HV/Y, BT | HV/Y, FP | HV/Y, FP | not run |
| high-R-9 | HI/N, family infeasible, CP | FI/N, CP | HV/Y, FP | HV/Y, FP | not run |
| high-R-16 | HI/N, family infeasible, CP | FI/N, CP | HV/Y, FP | HV/Y, FP | not run |

The Ashen Crown `G3=3` value is carried forward from the preceding accepted
exact seam record as the canonical F0 diagnostic. The disposable practical
harness reproduced its hard-invalid/F-SET-NO classification but its compact
unique-neighbor-pair report counted two same-ray pairs. This is a diagnostic
count-granularity discrepancy, not a validity discrepancy: both reports have
the same nonzero GEO-3 result, and the practical decision does not depend on
the count. The FP1 cells independently produced exact GEO-0/GEO-3 counts of
zero.

The F0 classification is therefore unchanged: Lighthouse and Ashen are
F-SET-feasible but A0 loses the available mapping; G7, K6, and the high-R
controls cross the fixed-direction family boundary. F1 and FP1 are
assignment-insensitive under the current exact floor.

## Scaling and high-R results

The family-only scaling series used `N=3,5,9,17,33,65`. Every family emitted
exactly `N` candidates; all bounded materializations were finite and distinct.

| N | F0 rays / max magnitude | F1 max magnitude / max distance squared | FP1 rays / max magnitude |
|---:|---|---|---|
| 3 | 2 / `sqrt(2)` | 4 / 20 | 2 / 1 |
| 5 | 4 / `sqrt(2)` | 16 / 272 | 4 / 1 |
| 9 | 8 / `sqrt(2)` | 64 / 4160 | 8 / 1 |
| 17 | 8 / `2sqrt(2)` | 256 / 65792 | 16 / 1 |
| 33 | 8 / `4sqrt(2)` | 1024 / 1049600 | 32 / 1 |
| 65 | 8 / `8sqrt(2)` | 4096 / 16781312 | 64 / 1 |

F0's origin ray count is `min(N-1,8)`. F1's is `N-1`. FP1's is also
`N-1` in this exact directed-ray diagnostic, so FP1 does not recreate F0's
fixed-direction saturation. F0's minimum pairwise squared separation is
`4-2sqrt(2)` in the tested ring construction. F1's is `2`. FP1's exact
minimum is `(m^2+1)/m^4`, while its maximum pairwise squared separation is
`2`; the minimum decreases as the unit-square population grows, without
breaking exact injectivity.

The high-R result is explicit: `R=9` and `R=16` are family-infeasible for F0
because eight directed rays cannot serve the required shared-Node fanout.
FP1 remains hard-valid for both controls, with `9` and `16` distinct origin
rays respectively. This is a structural contrast, not a visual-quality
score.

## E-P0 through E-P3

E-P0 candidate generation, E-P1 exact pre-settling hard safety, and E-P2
normalized operational diagnostics completed. E-P1 remains the primary
authority; E-P2 did not introduce a score or threshold.

E-P3 unchanged-settling smoke used FP1 for Lighthouse, Ashen Crown, and K6.
The context scale was the single rule
`96 * 1.8 * max(1, N-1)`, giving `1555.2` for the two `N=10` graphs and
`864` for K6. Three settling iterations were copied from the existing seam;
there was no per-fixture tuning.

| Graph | completed | finite | distinct | output shape | exception |
|---|---|---|---|---|---|
| Lighthouse | YES | YES | YES | one output per Entity | none |
| Ashen Crown | YES | YES | YES | one output per Entity | none |
| K6 | YES | YES | YES | one output per Entity | none |

E-P4 visual/manual evidence was not performed. There were no screenshots,
visual winners, crossing measurements, label measurements, or scalar
practicality scores.

## Hypotheses and falsification

| Item | Result |
|---|---|
| H1 FP1 preserves the current-floor hard safety while bounding F1 | SUPPORTED |
| H2 FP1 remains assignment-insensitive | SUPPORTED |
| H3 structured F2 can be evaluated separately | NOT TESTED BY DESIGN |
| H4 FP1 avoids F0 high-R saturation | SUPPORTED |
| H5 bounded Number materialization preserves injectivity | SUPPORTED |
| H6 generation is deterministic, ID-neutral, O(N), and non-random | SUPPORTED |
| H7 diagnostics distinguish F1 from FP1 without visual judgment | SUPPORTED |

N1-N7 were **NOT TRIGGERED**. N8 is **NOT APPLICABLE** because F2 was
deferred. N9 and N10 were **NOT TRIGGERED**. No operationally unresolved
cell remained after the F0 capacity-proof boundary was applied.

## Decision boundary

The result supports a next design checkpoint for bounded structural-quality
evidence. It does not authorize a Production family, a new assignment
policy, a settling change, a route change, or a label change. F2 remains
deferred until it can add a distinct exact question.

The selected next checkpoint is:

`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRACTICAL-FAMILY-STRUCTURAL-QUALITY-EXPERIMENT-DESIGN1`

No follow-up was started automatically.

## Cleanup and final state

The result was captured before cleanup. The disposable clone and all temporary
scripts, outputs, and fixtures were removed; the experiment path no longer
exists. The routing preview was untouched. LiaisonScape main returned to its
pre-checkpoint state with only the two protected Lighthouse sample files
dirty. The E2R-spec protected Session file remained untouched.

Final implementation state:

- Production Initial Placement changed: **NO**;
- candidate generator/family/vocabulary changed: **NO**;
- `FP1-NGP`, F1, or A1 adopted: **NO**;
- settling, packing, routing, labels, UUIDs, and `seededPositions` changed:
  **NO**;
- samples, preview, Suite, OSINT, External Dataset trust, Personal Storage,
  Federation, Sponsors, and `ai-knowledge` changed: **NO**;
- push, tag, release, deploy, and publication: **NONE**.
