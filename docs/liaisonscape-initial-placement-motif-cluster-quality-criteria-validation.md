# LiaisonScape Initial-placement Motif-cluster Quality Criteria Validation

Date: 2026-09-01

Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-MOTIF-CLUSTER-QUALITY-CRITERIA-VALIDATION1`

## Outcome

Result: **CASE 2 / EXACT RESULT 2 / DECISION B**.

> **VALIDATED WITH REFINEMENT - COLLAPSE REDUNDANT MOTIF-DISTANCE AND
> ALTITUDE/CHORD DESCRIPTORS WHILE RETAINING THE TWO-LAYER PROFILE**

The validation supports a minimal conceptual profile:

### Layer 1: per-motif profile

- absolute side scale as motif context, represented once;
- normalized motif shape;
- altitude/chord bottleneck with the vertex and opposite-pair identity.

### Layer 2: overlap-cluster profile

- shared-Node fan-out;
- distribution and identity of Layer 1 bottlenecks across the cluster; and
- boundary context.

P4 is not retained as a separate numeric quality axis because its straight-
chord distance is the corresponding triangle altitude. P1 motif-adjacent
distances are not retained as a second numeric descriptor because they are the
P2 triangle side lengths. P1 cluster-wide packing context is retained because
it describes absolute cluster context rather than repeating one motif's side
lengths.

No scalar score, universal threshold, ranking contract, candidate movement,
force, routing input, label input, or Production acceptance rule was created.
Edge length remains contextual only.

The next checkpoint is exactly:

`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-MOTIF-CLUSTER-REGULARIZATION-SEMANTICS-AUDIT1`

It is selected only. No Node movement, force implementation, or current
placement change was made by this validation.

## Start state and preservation

The validation used current LiaisonScape source, current samples, e2r-spec
examples, and in-memory controlled geometries. The temporary diagnostic clone
was:

`C:\Users\extra\E2R\e2r-liaison-scape-motif-cluster-quality-validation`

- LiaisonScape start reference: `fd563340625fd3d88dc25baedc93c4f8fe69e5e7`;
  branch `main`, tracking `origin/main`, five commits ahead.
- Pre-existing dirty LiaisonScape paths were
  `public/lighthouse-restoration-demo.en.e2r.json` and
  `public/lighthouse-restoration-demo.ja.e2r.json`. They were not edited,
  restored, normalized, staged, or committed.
- e2r-spec start HEAD was `54fc637`; branch `main`, tracking `origin/main`,
  79 commits ahead. The recent docs-only future capability commits
  `8283919` and `54fc637` were present and were not rewritten.
- The protected `sessions/E2R-Session-0052.md` was not edited, staged,
  restored, reset, or committed.
- The protected `ai-knowledge/playbooks/e2r-edge-cdp-browser-diagnostic.md`
  was not edited. Its pre-existing dirty state was preserved.
- Preview changes in `src/App.tsx` and `src/viewport.ts` were preserved.
- The running localhost was not restarted.
- No LiaisonScape commit, preview commit, push, tag, release, deploy, or
  publication was made.

## Reproduction gate

The preceding real-data inventory was reproduced with 15 available JSON
files:

- 19 unordered motifs;
- 57 ordered role projections;
- Lighthouse: one isolated one-motif cluster;
- Ashen Crown: seven motifs, nine cluster Nodes, one overlap cluster, and
  six multi-motif Nodes.

The real sample profile was reproduced without using labels, routes, locale,
or Relation direction/multiplicity as geometry quality inputs. The
reproduction gate passes.

The LiaisonScape Linkscape relation sample also produced a valid one-motif
profile without a favorable stored-coordinate assumption. The zero-motif
samples produced no profile.

## Q0: P4 redundancy with P2 altitude

For each motif vertex X, P4 is the distance from X to the opposite straight
chord U-V. The same formula is the triangle altitude from X to side U-V.
The independent chord calculation and the P2 altitude calculation matched for
all Lighthouse and Ashen automatic motifs within `1e-6`; the maximum observed
difference after six-decimal diagnostic rounding was approximately
`4.8e-7`.

Answers:

| question | result | interpretation |
|---|---|---|
| Q0-A: P4 raw values equal P2 per-vertex altitudes | YES | exact geometric redundancy |
| Q0-B: P4 retains non-numeric information | YES | vertex identity, opposite-pair identity, and cross-motif aggregation identity remain useful |
| Q0-C: retain P4 as a separate geometric quality dimension | NO | collapse its numeric value into P2 altitude/chord identity |

P4 therefore becomes the **P2 altitude/chord identity view**. The
cross-motif distribution of those bottlenecks belongs to Layer 2, but it does
not create a new geometric number.

## Q1: P1 motif distances and P2 side lengths

For every motif, the motif-adjacent pair distances are exactly the three
triangle side lengths. Therefore:

- `P1-M` per-motif pair distances are redundant with `P2` sides;
- `P1-C` cluster-wide pair distances remain useful as absolute context;
- cluster bounding-box extent remains contextual, with the caveat that an
  axis-aligned bbox changes under rotation; and
- P2 normalized shape must remain separate from absolute scale.

The retained P1 role is therefore cluster-wide absolute packing/context, not a
second copy of motif side lengths.

## Descriptor minimality result

| descriptor | raw meaning | minimal treatment |
|---|---|---|
| P1 motif pair distance | distance for one motif edge pair | collapse into P2 side length |
| P1 cluster packing | all cluster pair context and cluster bbox | retain as absolute context |
| P2 sides | three raw motif side lengths | retain once as absolute motif scale |
| P2 altitude | distance to opposite side/chord | retain with vertex/opposite-pair identity |
| P2 normalized altitude, angles, side ratio | normalized shape projections | retain as one shape family; no scalar aggregation |
| P3 fan-out | angular gaps between distinct shared-Node rays | retain in Layer 2 |
| P4 chord clearance | same number as P2 altitude | collapse into P2 identity view |
| P5 boundary context | cluster-to-outside relation geometry | retain as context only |

The table describes minimal conceptual roles. It does not require every
projection to be stored, serialized, or scored. No descriptor is assigned a
universal weight.

## Controlled-state validation

All controlled states used generic Node IDs and in-memory coordinates. They did
not move Production Nodes or alter samples.

| control | expected separation | observed result |
|---|---|---|
| C0 rigid transform | translation/rotation preserve intrinsic shape | PASS; intrinsic values unchanged; axis-aligned bbox may change under rotation |
| C1 uniform scale | raw distances change; normalized shape stays same | PASS; raw sides scale by 1.7; normalized altitude and angles stay same |
| C2 isolated shape collapse | shape descriptors react without a threshold | PASS; normalized altitude `0.800 -> 0.020`, angles become near-collinear |
| C3 uniform compaction | absolute packing changes; shape stays same | PASS; raw sides halve while normalized altitude stays unchanged |
| C4 shared-Node fan-out collapse | P3 changes while topology and per-motif shape stay same | PASS; shared Node `a` min gap `60 -> 25` degrees; motif shape unchanged |
| C5 boundary context only | P5 changes while internal profile stays same | PASS; boundary distance `200 -> 20`; motif shape unchanged |
| C6 two disconnected motif clusters | separate profiles within one component | PASS; two clusters, cluster B unchanged when cluster A changes, forward/reverse order equivalent |
| C7 zero motif | no quality profile | PASS; zero motifs and zero clusters |

C4 is the key independence result. The two motifs retain their own shapes,
but rotating one motif around the shared Node changes the shared ray
separation. P3 therefore carries cluster information that no single motif
profile can recover.

C6 confirms that overlap-cluster scope is not the whole Entity component: two
motif clusters connected by a non-motif bridge are profiled separately, and a
change in one does not alter the other.

## Invariance and input-boundary result

The validation checked the following:

- Node order permutation: invariant;
- Entity array order: invariant;
- Relation array order: invariant;
- deterministic repeated evaluation: invariant;
- locale: Lighthouse JA/EN and Ashen JA/EN profiles match;
- translation and rotation: intrinsic shape invariant;
- uniform scale: raw and normalized signals remain distinct;
- motif and cluster topology: unchanged by geometric transforms; and
- Relation direction and multiplicity: not required for the geometric profile.

The final geometric profile is computable from graph adjacency, motif
membership, Node center coordinates, and cluster boundary adjacency. Labels,
routes, feedback state, H2, occupied paths, and locale text are absent from
the quality input boundary.

The axis-aligned bbox caveat is retained: its width and height are useful
packing context, but they are not rotation-invariant intrinsic quality values.
No rotation-normalized bbox metric was added in this checkpoint.

## Lighthouse validation

The clean e2r-spec Lighthouse JA/EN pair has one isolated motif
`{Clara, Maya, Thomas}`. The minimal profile describes the stored-to-auto
collapse:

| state | area | normalized minimum altitude | angle range | side ratio | cluster bbox |
|---|---:|---:|---:|---:|---|
| stored | 25,500 | 0.489 | 31.264-80.538 deg | 1.901 | 170 x 300 |
| auto | 1,753.595 | 0.041 | 4.215-170.393 deg | 2.270 | 201.998 x 209.629 |

The per-motif shape and altitude/chord identity expose the severe local
collapse without retaining P4 as an independent axis. P3 is not applicable
because this cluster has no shared Node across multiple motifs. Boundary
context is retained separately; its minimum relation distance changes from
`155.242` to `100.414` and does not replace the motif profile.

Lighthouse validation: **YES**.

## Ashen Crown validation

Ashen has seven motifs in one nine-Node overlap cluster. Five motifs are
compressed and two are mixed in the stored-to-auto comparison. The motif layer
therefore remains descriptive rather than monotonic.

The shared-Node layer adds independent information:

| shared Node | motif memberships | stored minimum fan-out gap | auto minimum fan-out gap |
|---|---:|---:|---:|
| Darius | 4 | 38.367 deg | 6.060 deg |
| Elara | 4 | 31.504 deg | 6.990 deg |
| Kael | 4 | 38.367 deg | 18.463 deg |

These values cannot be represented by selecting one motif or by retaining only
one motif's shape. The overlap layer is therefore independently useful:
**YES**.

The cluster bbox changes from `620 x 590` to `457.394 x 304.833`. P4's ten
smallest stored values begin at `70.000`, `120.000`, and `125.415`; automatic
values include `11.874`, `12.698`, and `27.217`. These are retained as P2
altitude/chord identity and cluster distribution, not as a separate P4 axis.

Boundary context remains separate: the minimum cluster-to-Ilyan distance
changes from `190.000` to `90.146`. It informs context but does not enlarge
the cluster scope or identify Ilyan as an obstacle.

Ashen validation: motif layer **YES**; overlap layer independent value
**YES**; boundary context **context only**.

## Packing hypothesis

Result: **PACK-V1 - supported as one independent context dimension**.

Absolute packing changes are repeatedly visible in raw distances and cluster
extent, but “Nodes too close” is only **PARTIAL** as a complete explanation.
Shape collapse, chord bottlenecks, and shared-Node fan-out can change
independently. The audit does not blame attraction, repulsion, seeding, or any
particular force.

## Generality and knowledge candidate

The minimal profile is computable from generic graph topology and Node geometry
without LiaisonScape-specific labels or E2R semantic meaning. Reuse is a
**YES - reusable hypothesis** within this bounded scope. A universal layout
claim is **NO**.

Knowledge Candidate: **YES - HYPOTHESIS STRENGTHENED**. Controlled synthetic
states provide independent geometric evidence, but they are not independent
application evidence. No `ai-knowledge` entry was created or changed.

## Decision and next checkpoint

The result is **CASE 2 / EXACT RESULT 2 / DECISION B**:

- the two-layer model remains supported;
- P4 numeric values collapse into P2 altitude/chord identity;
- P1 motif distances collapse into P2 side lengths;
- P1 cluster packing/context remains;
- P3 provides independent shared-Node cluster information;
- P5 remains context only;
- zero-motif graphs produce no profile;
- disconnected motif clusters remain separate within one component;
- no scalar score, numeric threshold, force, ranking, or candidate rule is
  supported.

The selected next checkpoint is exactly:

`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-MOTIF-CLUSTER-REGULARIZATION-SEMANTICS-AUDIT1`

That checkpoint should examine how this non-scalar descriptive profile could
map to source-independent bounded local adjustment semantics. It must continue
to avoid choosing a semantic W, fitting a threshold, introducing a weighted
objective, or implementing a force until those boundaries are separately
validated.

## Cleanup and validation

- temporary harness, synthetic fixtures, controlled states, transformation
  probe, redundancy observer, JSON output, and copied data: removed;
- temporary worktree: removed;
- LiaisonScape Production Initial Placement, routing, feedback, labels,
  samples, and `seededPositions`: unchanged;
- preview: unchanged and existing edits preserved;
- protected Session: preserved and unstaged;
- `ai-knowledge`: unchanged by this checkpoint and existing dirty state
  preserved.

Validation gates:

- LiaisonScape `npm.cmd test`: **280/280 passed**;
- LiaisonScape `npm.cmd run lint`: passed;
- LiaisonScape `npm.cmd run build`: passed;
- LiaisonScape `git diff --check`: passed;
- e2r-spec `npm.cmd run validate`: passed;
- e2r-spec working-tree and cached diff checks: passed;
- localhost `http://127.0.0.1:5173/e2r-liaison-scape/`: HTTP 200.

The e2r-spec checkpoint commit is:

```text
docs: validate LiaisonScape motif cluster quality criteria
```

It remains unpushed.
