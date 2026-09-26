# LiaisonScape Initial-placement Seed Family / Assignment Experiment Seam Design

Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-FAMILY-ASSIGNMENT-EXPERIMENT-SEAM-DESIGN1`
Date: 2026-09-02

## Result

Result: **CASE 11 / EXACT RESULT 1+2+3+4+5+6 / DECISION A**.

The seam design is ready. A disposable pre-settling seam can expose candidate
family and Node-to-candidate assignment as independent diagnostic variables
while leaving component discovery, settling, packing, routing, labels, and
Production source semantics unchanged. The preferred shape is a source-exact
temporary copy in a detached worktree driven by a headless script (SEAM-A /
RUN-A). It is not a Production refactor and is not implemented by this
checkpoint.

Primary evidence must be captured before settling. `F0+A0` is the required
baseline-transparent control. `F0+A1` tests whether existing F0 capacity is
lost only through assignment. `F1-ALG` remains a diagnostic family and is
useful as an assignment-insensitive control, but any downstream context
transform is experiment-only and cannot support a visual-quality claim.

## Preceding semantic boundary

The preceding design (`f7cf6ca`) established the semantic objects:

```text
HardValid(G, P) = all injective Node→candidate mappings satisfying GEO-0/GEO-3
F-SET(G, P) = YES iff HardValid(G, P) is non-empty
```

For a mapping-sensitive family, A1 must be sound and conditionally complete.
An empty `HardValid` set is `FAMILY-INFEASIBLE-FOR-HARD-FLOOR`, not assignment
failure. An unresolved bounded implementation is
`OPERATIONALLY-UNRESOLVED`, not `F-SET=NO`. A concrete representative is not
the complete source-grounded assignment semantic. No solver, score, threshold,
epsilon, visual objective, or Production family is selected here.

## Start-state reconciliation

Live LiaisonScape remains at `fd563340625fd3d88dc25baedc93c4f8fe69e5e7`,
branch `main`, tracking `origin/main`. Its pre-existing dirty state is the two
protected Lighthouse sample files. Live e2r-spec contains `f7cf6ca` and
`e4e1150`; its only pre-existing dirty file is the protected
`sessions/E2R-Session-0052.md`. The required reconciliation remains:

| Control | Prior exact result |
|---|---|
| Lighthouse | F0 `F-SET=YES`; A0-CURRENT hard-invalid |
| Ashen Crown | F0 `F-SET=YES`; A0-CURRENT hard-invalid |
| G7 | F0 `F-SET=NO` |
| K6 | F0 `F-SET=NO` |
| F1-ALG | `HardValid=Inject` for the current exact floor |

The current source has not materially drifted from the research baseline. The
separate `bottleneck-origin` filename requested by the checkpoint is not
present; the matching prior evidence is covered by the available motif-aware,
candidate-generation, and assignment records. This does not block the seam
design. The existing routing preview and `ai-knowledge` remain read-only and
are not used for this seam.

## Current live dataflow: S0–S7

The following is source-grounded in `e2r-liaison-scape/src/auto-layout.ts`.
Line references identify the current live source and are not a request to edit
it.

| Stage | Live source location | Input | Output | Mutation/coupling | Seam suitability |
|---|---|---|---|---|---|
| S0 component discovery | `solveAutoLayout`, lines 24–49 | `AutoLayoutInput.entities` and `.relations` | sorted IDs, undirected adjacency, deduplicated pairs, connected components | Local `Set`/`Map` only; input is not mutated. IDs control discovery/traversal. | Must stay fixed; upstream observation context only. |
| S1 structural rank/order | `solveAutoLayout`, line 54 | component and adjacency | `ranked` IDs: descending distinct-neighbor degree, lexical ID tie | Directly controls current geometry role assignment. | Must stay fixed for A0; may be recorded, not changed. |
| S2 candidate construction | lines 55–61 | component frame, clearance, rank index | center plus F0 center/ring points | Construction and assignment are fused in `ranked.forEach`. | Candidate-family boundary to expose in the copy. |
| S3 rank→position assignment | lines 57–61 | `ranked` and candidate index | `points[id]` mapping | `points[id]` is written while candidate points are made; this is the current implicit zip. | Primary assignment boundary. |
| S4 raw pre-settling seed | line 61, immediately before line 62 | assigned `points` | Node→point mapping before settling | Existing values are the key causal observation. | Required E-L0 snapshot point. |
| S5 settling | lines 62–73 | assigned points, component, adjacency, clearance, iterations | moved points | Fixed repulsion/attraction and bounded movement; downstream of assignment. | Must be copied source-exactly or reused unchanged. |
| S6 extent/packing | lines 74–76 | settled points and component frame | `maxX`, returned component translation state | `componentLeft` affects later component placement. | Must remain downstream and unchanged. |
| S7 returned positions | lines 75–78 and `settleInitialPlacement` lines 85–87 | component results | `Record<string, LayoutPoint>` | App opening calls `settleInitialPlacement` at `App.tsx:806–812`; explicit Auto Layout calls `solveAutoLayout` at `App.tsx:1473–1479`. | Optional E-L1 smoke only; not semantic authority. |

The important coupling is that S2 and S3 are not separate functions: the
current `ranked.forEach` both enumerates an F0 point and assigns it to an ID.
The future experiment must separate those responsibilities only in the
disposable copy. Refactoring the main source would contaminate this checkpoint.

## Preferred conceptual seam

The future disposable flow is:

```text
component context
    ↓
candidateFamilyPolicy(context) → unlabeled candidate family P
    ↓
assignmentPolicy(G, P) → status + diagnostic materialized mapping
    ↓
existing settling
    ↓
existing component packing
```

The family policy receives only experiment-relevant context: component size,
the same local frame/clearance needed to reproduce F0, and a family identity.
The assignment policy receives the accepted topology, Node handles, the
unlabeled family, and the exact hard-validity oracle. Neither conceptual policy
is a Production TypeScript type or API in this checkpoint.

The exact insertion boundary is between the current point construction/zip
block at `auto-layout.ts:55–61` and the settling loop at `:62`. In the
temporary copy, the F0 family is first enumerated in the same component frame,
then A0 or A1 maps Node handles to those points, and only the resulting mapping
enters the unchanged settling loop. `componentLeft`, component packing, and
all downstream options remain in the copied source-exact mechanics.

## Seam options

| Option | Baseline transparency | Family isolation | Assignment isolation | Duplication/drift | Browser/UI | Cleanup/leakage | Decision |
|---|---|---|---|---|---|---|---|
| SEAM-A temporary parameterized copy | Strong if copied source-exactly and gated by F0+A0 | Yes | Yes | Duplicates a bounded block; explicit equality gate controls drift | No | Fully disposable; low Production leakage | **RETAIN / preferred** |
| SEAM-B temporary internal policy in `src/auto-layout.ts` | Strong runtime fidelity | Yes | Yes | Smaller duplication but edits the source path and risks accidental coupling | No | Disposable worktree, medium leakage | PARTIAL; fallback only |
| SEAM-C wrapper around `solveAutoLayout` | Weak; inner family/assignment remain fused | No | No | Low duplication but cannot isolate variables | No | Clean but causally insufficient | REJECT |
| SEAM-D temporary app/runtime switch | Possible | Yes | Yes | Adds app coupling and switch behavior | Usually | Higher cleanup and UI/runtime leakage | REJECT |
| SEAM-E headless path reusing downstream mechanics | Strong for E-L1 if source-exact | Yes | Yes | May duplicate only the pipeline boundary | No | Fully disposable | RETAIN as execution shape with SEAM-A |
| SEAM-F Production refactor | Not appropriate for a diagnostic baseline | Eventually | Eventually | Changes live semantics | No | Not disposable | REJECT |

SEAM-A plus a headless RUN-A is the smallest trustworthy design. SEAM-E is
the downstream execution technique inside that disposable copy, not a
Production architecture decision.

## Baseline transparency contract

`F0+A0` must reproduce the current implementation before any other cell is
interpreted. “Looks the same” and screenshot comparison are not acceptance
criteria. The future harness must compare, at minimum:

1. component membership and component iteration context;
2. valid undirected adjacency and deduplicated relation pairs;
3. degree values and exact lexical rank order;
4. F0 candidate points in the same local/component frame;
5. the A0 Node→candidate index mapping;
6. pre-settling `Node→position` values;
7. settling inputs, including clearance and iteration count;
8. settled component positions;
9. extent calculation and packed result.

The comparison should be exact for the source-equivalent numeric path. If
floating serialization requires a representation normalization, that must be
justified as a comparison representation and cannot change the geometry
algorithm. If the CELL 00 result diverges before settling, the seam is invalid
and the future experiment must stop. A final `solveAutoLayout` comparison is
needed only if E-L1 downstream smoke is retained; it is not needed to establish
the primary E-L0 causal result. Visual comparison is not required.

## Conceptual family policy

```text
familyPolicy(componentContext) → { familyId, points, contextTransform? }
```

The output is an unlabeled finite family in the component frame. The minimum
fields are family identity, candidate points (or exact/symbolic representation
for the oracle), and any explicitly recorded experiment-only transform
metadata. No Node ID, Dataset ID, label, locale, route, stored coordinate, or
quality score may enter the family.

| Family | Definition in the future diagnostic |
|---|---|
| F0 | Current center plus eight-direction ring vocabulary, same clearance/ring/radius construction and partial-ring behavior, treated as unlabeled until A0/A1. |
| F1-ALG | Exact diagnostic points `P_i=(i,i²)`, canonical integer representation, no Production adoption. |

F0 is a negative/control family, not a recommended layout. F1-ALG is a
general-position-like capacity control, not a visual or scale claim. Translation
and positive uniform scale are context operations only.

## Conceptual assignment policy

```text
assignmentPolicy(G, P) → { status, mapping? }
```

Allowed diagnostic statuses are:

| Status | Meaning |
|---|---|
| `HARD-VALID` | A concrete returned mapping is a member of `HardValid(G,P)`. |
| `FAMILY-INFEASIBLE` | The exact prior oracle/proof establishes `HardValid(G,P)=∅`. |
| `OPERATIONALLY-UNRESOLVED` | The procedure did not resolve a non-empty-or-empty result within its operational boundary. |

**A0-CURRENT** is the current control: degree descending, lexical ID tie,
candidate-index zip, no hard-validity preservation guarantee. It must not be
improved during the experiment.

**A1-HARD-SAFE** is only an executable diagnostic policy: if a hard-valid
member exists, materialize one; if the family is proof-resolved infeasible,
return `FAMILY-INFEASIBLE`; if bounded execution cannot resolve it, return
`OPERATIONALLY-UNRESOLVED`. A1 does not choose a visual score, a random tie,
settling-assisted validity, epsilon, or a Production search algorithm.

## A1 materialization boundary

For the bounded selected corpus, a complete exact backtracking materializer is
feasible as a disposable diagnostic mechanism for F0-feasible controls. Prior
exact results may supply proof-resolved `FAMILY-INFEASIBLE` for G7/K6 and the
known high-`R` controls without factorial enumeration. F1-ALG may use its exact
family proof that every injective mapping is hard-valid.

Operational search order may use current structural rank and candidate index,
including lexical ID only as an explicit representation/search-order tie. Such
choices may change which concrete representative is returned. They must not
change `HARD-VALID` versus `FAMILY-INFEASIBLE`, soundness, conditional
completeness, or the hard-validity definition. ID rename may therefore change
an A1 representative, but a semantic cell-classification change is a failure.

| Materializer behavior | Disposable experiment | Semantic classification | Production |
|---|---|---|---|
| Complete exact search | Permitted for selected bounded corpus | Does not redefine it | Not selected |
| Prior proof-resolved infeasible result | Permitted for G7/K6/high-`R` controls | `FAMILY-INFEASIBLE` | Not selected |
| Structural/lexical search ordering | Permitted only for representative order | Must not affect status | Not selected |
| Visual optimization or scalar score | Rejected | Would contaminate semantic comparison | No |
| Random tie | Rejected | Would break deterministic evidence | No |
| Settling-assisted search | Rejected | Would move hard authority downstream | No |

## F1 context boundary

E-L0 uses F1's exact canonical representation and does not require a floating
runtime transform. If E-L1 downstream smoke is later included, F1 points need a
deterministic translation plus positive uniform scale into the copied pipeline's
coordinate context. The transform must be topology-, ID-, label-, and score-
independent, recorded as experiment-only context, and applied consistently to
F1+A0 and F1+A1. No Production scale is selected.

Because settling depends on actual distances, post-settling F0/F1 differences
cannot be interpreted as pure family-capacity evidence without controlled
context. Therefore E-L0 is primary, while E-L1 is smoke/baseline evidence only
and E-L2 visual/routing quality is out of scope.

## Evidence levels and stage boundaries

| Level | Capture/allowance | Authority |
|---|---|---|
| E-L0 pre-settling semantic evidence | family ID, assignment ID, component diagnostic ID, candidate/mapping, status, exact GEO-0/GEO-3 result, F-SET interpretation, F0+A0 baseline equivalence | **Primary** |
| E-L1 downstream smoke | pass all cells through unchanged settling and packing; record completion, no crash, no hidden fallback, and cell identity | Optional smoke only |
| E-L2 visual/routing quality | screenshots, crossings, labels, curves, route quality | **Out of scope** |

The seam must not change settling constants, iterations, per-family forces,
packing, route generation, label placement, `seededPositions`, or persisted
coordinates. If E-L1 is run, every cell receives the same downstream mechanics.
The post-settling observation point is after the settling loop at lines 62–73;
the post-packing point is after lines 74–78. Neither is GEO-0/GEO-3 authority.

## Future run modes

| Run mode | Real stages | Settling/packing | Pre-settling visibility | Browser/UI | Cleanup and causal quality | Decision |
|---|---|---|---|---|---|---|
| RUN-A headless diagnostic around copied stages | Source-exact S0–S7 copy as needed | Yes, unchanged for optional E-L1 | Direct | No | Small, clean, fully disposable | **RETAIN / recommended** |
| RUN-B temporary test/harness importing experimental solver | Real copied experiment path | Yes if invoked | Direct | No | Good, but test-runner coupling is unnecessary | RETAIN as fallback |
| RUN-C temporary browser runtime/config | App path with fixed cell | Possible | Indirect unless instrumented | Yes | Larger and less causal | REJECT for first seam |
| RUN-D temporary browser UI selector | Runtime plus UI control | Possible | Indirect | Yes | High cleanup and presentation confound | REJECT |
| RUN-E Production feature flag | Production path | Yes | Possible | No | Not disposable; unacceptable leakage | REJECT |

The selected future run is RUN-A. Browser is not required, no query parameter,
environment variable, UI switch, or new local server is needed. The existing
port-5173 preview remains untouched. If a later browser smoke becomes useful,
it must use the disposable worktree and a different port, never repurpose the
existing preview.

## 2×2 cell contract

| Cell | Family | Assignment | Causal purpose | Expected control class | Primary observation | Quality inference |
|---|---|---|---|---|---|---|
| F0+A0 | current fixed family | current degree/lexical zip | Source baseline and assignment-loss control | Lighthouse/Ashen may be hard-invalid; G7/K6 family-infeasible | E-L0 baseline equivalence and status | No |
| F0+A1 | current fixed family | diagnostic hard-safe materializer | Isolate assignment while F0 is fixed | Lighthouse/Ashen expected hard-valid; G7/K6 expected family-infeasible | E-L0 status/mapping | No |
| F1+A0 | F1-ALG | current mapping shape | Family control under A0 | Hard-valid for exact floor | E-L0 status | No |
| F1+A1 | F1-ALG | diagnostic hard-safe materializer | Confirm assignment adds no floor benefit to F1 | Hard-valid for exact floor | E-L0 status | No |

These are future hypotheses, not preaccepted experiment results. All cells must
use the same graph, hard predicates, topology derivation, and downstream
mechanics. F1 context scaling, if needed for E-L1, is not family acceptance
evidence.

## Causal contrasts

| Contrast | Fixed variable | Isolates | Validity |
|---|---|---|---|
| C1: F0+A0 vs F0+A1 | F0 | Assignment-policy effect and current assignment loss | Valid at E-L0 |
| C2: F0+A0 vs F1+A0 | A0 | Candidate-family effect under current mapping | Valid at E-L0 |
| C3: F0+A1 vs F1+A1 | A1 | Candidate-family effect under hard-safe assignment | Valid at E-L0 |
| C4: F1+A0 vs F1+A1 | F1 | Expected hard-floor no-op of assignment policy | Valid control contrast; expected no-op must be measured |

No contrast ranks compactness, edge length, crossing, route bends, label
clearance, or presentation quality.

## Required corpus and controls

The minimum bounded future corpus is:

- Lighthouse: real assignment-loss case;
- Ashen Crown: real overlap/fan-out assignment-loss case;
- G7: fixed-family directional-capacity infeasibility;
- K6: dense globally coupled motif infeasibility;
- K3: minimal motif and symmetry control;
- one zero-motif control: empty hard-demand sanity check;
- one true-symmetry control: representative boundary;
- optionally one high-`R`-above-capacity control.

For Lighthouse, Ashen, and K3, required transformations are original IDs,
deterministic ID rename, reversed Entity order, and reversed Relation order.
Semantic cell classification, hard-valid/family-infeasible status, and A1
soundness must remain unchanged. A concrete A1 representative need not remain
literal-identical under a permitted rename; such a difference is not a failure
unless classification changes. No full giant-corpus replay is required for the
first seam.

## Observability and temporary files

Experiment-only output may be emitted to console or temporary JSON. It must
not enter Dataset serialization, localStorage, user-visible metadata, or
Production telemetry. Each result must identify family `F0/F1`, assignment
`A0/A1`, diagnostic component, pre-settling mapping, status, exact hard result,
F-SET interpretation, baseline-equivalence result, and optional smoke status.

The proposed disposable worktree is:

`C:\Users\extra\E2R\e2r-liaison-scape-seed-family-assignment-seam`

The smallest proposed future implementation surface is:

- temporary source-exact seam copy under
  `experimental/seed-family-assignment/auto-layout-seam.ts`;
- temporary headless harness at
  `experimental/seed-family-assignment/run-seam.ts`;
- temporary corpus adapters/fixtures only if existing imports cannot be read
  directly;
- generated JSON/TSV under
  `experimental/seed-family-assignment/out/`.

All listed paths are disposable. No main-worktree LiaisonScape file, test,
sample, preview, or commit is authorized. The temporary worktree and all
generated outputs must be removed after evidence capture.

## Transparency requirements T1–T12

| Requirement | Design status |
|---|---|
| T1 preserve F0+A0 baseline | PASS BY DESIGN; mandatory equality gate |
| T2 preserve component discovery | PASS BY DESIGN; copy is source-exact |
| T3 preserve topology derivation | PASS BY DESIGN |
| T4 preserve settling | PASS BY DESIGN; optional E-L1 uses unchanged loop |
| T5 preserve packing | PASS BY DESIGN |
| T6 preserve routing/labels | PASS BY DESIGN; not invoked for E-L0 |
| T7 preserve persisted coordinates | PASS BY DESIGN; coordinate-less corpus only |
| T8 preserve samples | PASS BY DESIGN; read-only corpus |
| T9 independently select family and assignment | PASS BY DESIGN; two explicit cell variables |
| T10 expose pre-settling evidence | PASS BY DESIGN; required snapshot after A0/A1 |
| T11 separate family-infeasible/unresolved | PASS BY DESIGN; explicit statuses |
| T12 remain disposable | PASS BY DESIGN; detached worktree and cleanup gate |

## Future hypotheses and falsification

| Hypothesis | Future wording |
|---|---|
| H1 | The temporary seam reproduces F0+A0 current behavior exactly before settling. |
| H2 | For Lighthouse/Ashen, F0+A1 produces a pre-settling hard-valid mapping where F0+A0 is hard-invalid. |
| H3 | For G7/K6, F0+A1 reports `FAMILY-INFEASIBLE` rather than manufacturing a mapping. |
| H4 | F1+A0 and F1+A1 are both hard-valid under the current exact floor. |
| H5 | ID/order transforms preserve cell-level semantic classification even if A1 representatives differ. |
| H6 | The family-versus-assignment causal contrast needs no settling, routing, or visual metric. |

| Falsification | Failure condition |
|---|---|
| N1 | F0+A0 does not reproduce baseline. |
| N2 | F0+A1 returns hard-invalid while `HardValid` is non-empty. |
| N3 | F0+A1 reports family-infeasible for Lighthouse/Ashen. |
| N4 | F0+A1 fabricates a hard-valid result for G7/K6. |
| N5 | F1 hard-validity depends on A0 versus A1. |
| N6 | ID rename changes semantic cell classification. |
| N7 | The seam requires changing settling or packing. |
| N8 | Family and assignment cannot be selected independently. |
| N9 | A1 requires a visual score, threshold, or randomness. |
| N10 | Source duplication is too large to trust baseline equivalence. |

Any N1–N10 result stops or narrows the future experiment; it does not authorize
a Production workaround.

## Design decision

Primary case: **CASE 11 / MIXED**. Cases 1–6 are supported together:

1. a pre-settling policy seam can separate family and assignment while keeping
   downstream stages fixed;
2. a disposable worktree-only copy can preserve F0+A0 without a Production
   refactor;
3. the 2×2 matrix is causally defined at E-L0;
4. A1 can use a complete diagnostic materializer without making its
   representative assignment semantics;
5. F1 may require an experiment-only downstream context transform, but that
   does not block pre-settling evidence; and
6. headless execution is sufficient.

Exact result:

1. A disposable pre-settling seam can independently expose candidate family and
   assignment policy while keeping settling and packing unchanged.
2. F0+A0 baseline transparency is the required control; the matrix is not a
   visual-quality experiment.
3. A1 may materialize one complete-search hard-valid representative for
   diagnostics without making it source-grounded role meaning.
4. Primary evidence is before settling; downstream execution is smoke only.
5. Headless execution is sufficient; browser/UI is not required.
6. F1 context/scaling remains explicitly downstream and non-authoritative.

Primary decision: **A — SEAM DESIGN READY; EXECUTE DISPOSABLE
FAMILY/ASSIGNMENT SEAM EXPERIMENT NEXT**.

Selected next checkpoint, not started here:

`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-FAMILY-ASSIGNMENT-EXPERIMENT-SEAM1`

## Non-changes and cleanup boundary

This was design only. No temporary worktree, seam, harness, browser runtime,
query switch, feature flag, UI control, Production type, candidate generator,
candidate vocabulary, assignment algorithm, F1-ALG runtime path, settling,
packing, routing, labels, samples, `seededPositions`, or preview was changed.
No ai-knowledge promotion was made. The GitHub Sponsors roadmap and Personal
Storage research remain untouched. The selected next checkpoint is not started
automatically.
