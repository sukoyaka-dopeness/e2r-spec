# LiaisonScape Initial-placement Seed Practical Family Structural-quality Experiment Design

Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRACTICAL-FAMILY-STRUCTURAL-QUALITY-EXPERIMENT-DESIGN1`

Date: 2026-09-02

Status: **DESIGN READY / EXPLORATORY / NOT ACTIVE**

This record designs a bounded diagnostic experiment. It does not execute the
experiment, change LiaisonScape source, select a Production family, or define
a visual-quality objective.

## Result

Result: **CASE 9 / EXACT RESULT 1+2+3+4+5+6 / DECISION A**.

The accepted two-layer motif/overlap-cluster profile is sufficient to design a
small headless experiment for `FP1-NGP`. The design keeps exact hard safety
separate from structural descriptors, compares pre-settling and unchanged
post-settling stages, and includes a bounded representative-assignment probe.
`F1-ALG` is retained only as an affine-distortion diagnostic control.

The design is ready for the next bounded headless execution. It does not claim
that FP1 is visually useful, that settling is beneficial, or that any family is
ready for Production.

### Exact result clauses

1. **DESIGN READY** - The accepted motif/overlap-cluster profile can evaluate
   FP1 structural geometry without a scalar quality score.
2. **DESIGN READY** - Pre-settling family geometry and post-settling geometry
   can be compared as separate causal stages.
3. **DESIGN READY** - FP1 hard-safety invariance can remain separate from
   structural representative-assignment sensitivity.
4. **DESIGN READY** - Fan-out capacity and fan-out distribution are separate
   reported properties.
5. **DESIGN READY** - The experiment can test whether FP1's normalized
   parabolic geometry creates one-sided or near-degenerate structural
   bottlenecks without making them new hard failures.
6. **DESIGN READY** - Routing, labels, crossing optimization, and Production
   quality remain outside the structural experiment.

Decision: **A - STRUCTURAL-QUALITY EXPERIMENT DESIGN READY; RUN THE BOUNDED
HEADLESS EXPERIMENT NEXT**.

The selected next checkpoint is exactly:

`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRACTICAL-FAMILY-STRUCTURAL-QUALITY-EXPERIMENT1`

It is selected only. It is not auto-started by this design record.

## Preceding FP1 Experiment 1 result

The preceding [practical candidate-family experiment result](liaisonscape-initial-placement-seed-practical-candidate-family-experiment1-result.md)
reported `CASE 2 / EXACT RESULT 1+2+3+4+5+6 / DECISION A`.

That experiment established that:

- `FP1-NGP` preserves the current exact `GEO-0`/`GEO-3` hard-safety floor;
- FP1 is assignment-insensitive for that hard floor;
- FP1 bounds the normalized coordinate envelope;
- FP1 does not reproduce F0's fixed eight-ray saturation in the tested
  high-R controls;
- bounded JavaScript `Number` materialization remains finite and distinct
  through `N=65`; and
- unchanged-settling smoke is operationally compatible for Lighthouse, Ashen
  Crown, and K6.

It did **not** establish visual readability, motif readability, overlap-cluster
quality, fan-out usability, compactness, crossing quality, routing quality,
label quality, or Production suitability. `visualState` remains
**UNASSESSED**.

The current exact floor is still:

- **GEO-0:** an accepted topology-derived triangle motif is not exactly
  degenerate; and
- **GEO-3:** distinct motif neighbors around a shared Node do not occupy the
  same directed ray, using exact `cross(u,v)=0 && dot(u,v)>0` semantics.

Hard safety is necessary for this experiment but is not structural quality.

## Design scope

The experiment answers this bounded question:

> Does bounding F1 into the practical normalized family `FP1-NGP` improve
> operational coordinate handling while producing a structurally usable seed
> for the motif and overlap-cluster situations that exposed prior failures?

The experiment has four controlled variables and one fixed downstream path:

1. candidate family: F0, F1, or FP1;
2. representative assignment: a small fixed diagnostic set;
3. lifecycle stage: pre-settling or post-settling;
4. graph/control: the selected minimal corpus; and
5. unchanged existing settling for the post-settling stage.

The surface is disposable, offline, headless, and source-equivalent. It may
read the exact live `src/auto-layout.ts` source and current canonical samples,
but it must not modify or import a runtime switch into Production.

The experiment does not use labels, routes, locale text, feedback state, H2,
occupied paths, rendered screenshots, or user preference as structural inputs.

## Source and baseline reconciliation

The reconciliation gate for the design is:

| item | required/observed state |
|---|---|
| e2r-spec HEAD | `7a31305` present |
| e2r-spec branch/upstream | `main` / `origin/main` |
| LiaisonScape source HEAD | `fd563340625fd3d88dc25baedc93c4f8fe69e5e7` |
| LiaisonScape branch/upstream | `main` / `origin/main` |
| Initial Placement baseline drift | NO |
| current selected checkpoint | this Design1 record |
| FP1 prior result | present and reconciled |
| current hard floor | GEO-0 and GEO-3 |
| F0/F1/FP1 family boundary | present and reconciled |
| protected Session | preserve, do not edit or stage |
| protected Lighthouse samples | preserve, do not edit or stage |
| routing preview | preserve; do not start, stop, reuse, or modify |
| ai-knowledge | read-only; do not modify |

The LiaisonScape source baseline is accepted as current because the live
repository HEAD is the historical baseline used by the prior FP1 experiment.
If the execution source is not that baseline, the experiment must report
**CASE 10 / BLOCKED / BASELINE DRIFT** and stop before interpretation.

The source authority remains the existing coordinate-less pipeline:

1. input and component discovery;
2. degree-ranked seed construction;
3. candidate-to-Node materialization;
4. existing bounded settling;
5. component packing; and
6. final returned positions.

The design separates candidate-family and representative concerns in a
disposable diagnostic copy only. It does not add a persisted seed object,
production assignment policy, or schema field.

## Hard-safety boundary

Hard safety is evaluated first and independently of every continuous
descriptor. The future runner must report:

- exact `GEO-0` violation count;
- exact `GEO-3` violation count;
- `HARD-VALID` or `HARD-INVALID` when the family has a materialized mapping;
- `FAMILY-INFEASIBLE` when an already established family-capacity proof
  applies; and
- `OPERATIONALLY-UNRESOLVED` only when neither exact validation nor a known
  proof can classify the cell.

No epsilon, minimum angle, minimum distance, near-collapse cutoff, fitted
threshold, aesthetic threshold, or visual score is added. Exact degeneracy
remains a hard predicate. Near-degeneracy remains a continuous descriptive
observation.

The exact oracle is the same topology-derived oracle used by the preceding
FP1 experiment. It ignores Relation direction and multiplicity for this
geometry floor, collapses duplicate undirected adjacency, excludes
self-relations, and uses exact arithmetic where family proofs require it.

Hard-validity is not a quality rank. A hard-valid FP1 mapping can have a weak
structural profile, and a hard-invalid F0 baseline can still be measured as a
historical diagnostic profile with its invalid status clearly reported.

## Structural-quality definition

For this experiment, **structural quality** means a profile of seed geometry
properties that can affect graph comprehension before routing and labels,
without claiming full visual quality. It concerns:

- local motif shape and chord bottlenecks;
- the distribution of motif neighbors around shared Nodes;
- overlap-cluster multiplicity and local bottleneck concentration;
- whether distinct structural roles become geometrically indistinguishable;
- boundary/context relations around an overlap cluster; and
- whether a seed leaves usable geometric room for unchanged settling.

Structural quality is not defined as “natural”, “balanced”, “clean”, or
“good-looking”. Every reported descriptor has a structural interpretation and
an explicit boundary. The experiment reports profiles and causal contrasts,
not a winner selected by a single number.

## Visual-quality boundary

Visual quality is later evidence and includes matters outside this checkpoint:

- overall readability and perceptual balance;
- rendered edge crossings and overlap;
- route curvature and obstacle avoidance;
- label clearance, label ownership, and text collision;
- browser/rendering behavior; and
- user preference or manual “looks better” judgments.

The structural experiment must not use any of these to select FP1, repair a
profile, or define a threshold. `SQ-E5` is explicitly out of scope.

## Prior quality-profile reconciliation

The accepted profile has two layers.

### Layer 1: motif-local geometry

The minimal motif profile retains:

- one absolute side-scale context observation where absolute scale is useful;
- normalized motif shape as a family of related views;
- normalized altitude/chord bottleneck; and
- the identity of the bottleneck vertex and opposite Node pair.

P1 motif pair distances are not a second metric: they are the triangle side
lengths already represented by the motif profile. P4 is not a second numeric
axis: Node-to-opposite-chord distance is the same geometric altitude used by
the motif profile. P4 identity and cross-motif distribution remain useful
views.

### Layer 2: overlap-cluster geometry

The cluster profile retains:

- shared-Node fan-out;
- the distribution and identity of motif-local bottlenecks across the cluster;
- overlap multiplicity and multi-motif shared Nodes; and
- boundary/context relations to Nodes outside the derived cluster.

An overlap cluster is a derived evaluation scope formed by motif membership
and shared Nodes. It is not a user-defined Group and must not be treated as a
new E2R semantic object.

The accepted profile rejects:

- one scalar quality score;
- weighted sums such as `quality = w1*a + w2*b`;
- universal numeric pass/fail thresholds;
- an ideal equilateral or ideal triangle target;
- a global component score that pulls in every nearby Node;
- an always-on force or movement rule; and
- edge length as the primary quality objective.

## Motif-local profile

For each accepted unordered triangle motif `{X,U,V}`, the runner records the
following separate fields. The names are experiment fields, not Dataset or
application schema fields.

| field | purpose | interpretation boundary |
|---|---|---|
| `motifSideScale` | one absolute scale context, preferably the sorted side set or maximum side | contextual; not a length-minimization objective |
| `motifSideRatios` | normalized side relationships | shape view; no universal direction of improvement |
| `motifNormalizedAltitude` | normalized altitude to the opposite chord, especially the minimum | continuous bottleneck view; no new cutoff |
| `motifAngleRange` | angle-shape view corresponding to the normalized triangle shape | descriptive projection; no minimum-angle rule |
| `motifBottleneckVertex` | identity of the vertex attaining the minimum altitude view | identity only; does not authorize moving that Node |
| `motifBottleneckOppositePair` | identity of the opposite chord | identity only; not rendered-route clearance |
| `motifExactDegeneracy` | exact GEO-0 state | hard predicate, not a continuous quality score |

Raw area may be retained in the machine trace for parity with prior evidence,
but it is not an additional quality axis. Exact zero area belongs to GEO-0.
The normalized shape views are reported side-by-side rather than aggregated.

The experiment must not call a motif “better” solely because one raw side is
longer. A larger side can coexist with a degenerate shape. When a descriptor
has no universal monotonic direction, the report must show the profile and
the causal contrast without assigning a direction.

## Overlap-cluster profile

For each derived unordered motif-overlap cluster, the runner records:

- cluster identity and member motif identities;
- number of motifs and number of Nodes;
- shared-Node identities and motif membership counts;
- the sorted circular fan-out gap profile at each shared Node;
- the identity of each narrowest fan-out gap;
- fan-out capacity, meaning how many distinct directed rays are available in
  the tested family/control;
- fan-out distribution, meaning how those rays are actually distributed;
- the distribution of motif-local bottleneck identities across the cluster;
- overlap multiplicity and crowding by local sector, reported descriptively;
- boundary/context relations from cluster Nodes to outside Nodes; and
- cluster packing/bounding-box context, with its rotation caveat.

Fan-out capacity and fan-out distribution are deliberately distinct. A family
may supply many distinct rays while a particular assignment places several
motif neighbors in one narrow sector. Capacity therefore cannot be used as a
proxy for usable distribution.

The cluster profile must preserve each local record. It must not replace the
gap list, bottleneck identities, or context relation inventory with a weighted
cluster score.

## Bottleneck semantics

The following labels are permitted only as experiment descriptions:

| label | meaning | boundary |
|---|---|---|
| `SQ-SHAPE-COLLAPSE` | motif shape moves toward a near-collinear or otherwise compressed profile | not a hard invalid state unless exact GEO-0 occurs |
| `SQ-CHORD-BOTTLENECK` | a motif Node has a small normalized altitude to its opposite chord | chord proxy, not rendered-route clearance |
| `SQ-FANOUT-CONCENTRATED` | shared-Node direction gaps are concentrated in a local sector | descriptive; no angle threshold |
| `SQ-ASSIGNMENT-SENSITIVE` | hard-valid FP1 representatives have materially different profiles | material difference must be shown field-by-field, not scored |
| `SQ-SETTLING-REPAIRS` | unchanged settling changes a named bottleneck profile in a relieving direction | no claim that all profiles improve |
| `SQ-SETTLING-DEGRADES` | unchanged settling changes a named profile in a worsening direction | mixed results remain possible |
| `SQ-MIXED` | different motifs or cluster descriptors change in different directions | no forced monotonic interpretation |
| `SQ-UNASSESSED` | insufficient evidence for the descriptor or stage | not a failure state |

These labels are not product states, user-facing statuses, or future schema
tokens. `near-degenerate` must remain a relative observation because no
source-grounded near-degeneracy epsilon has been accepted.

## Exact versus continuous descriptors

Exact predicates and continuous descriptors must be printed in separate
sections of every future result.

Exact:

- GEO-0 exact degeneracy;
- GEO-3 exact same-directed-ray equality;
- injective candidate identity;
- exact collinearity and positive-ray equality; and
- family feasibility when an established proof applies.

Continuous/descriptive:

- normalized altitude and side-shape views;
- angle-range and side-ratio views;
- absolute scale and cluster packing context;
- fan-out gap distributions;
- bottleneck identity distribution; and
- boundary/context relation distances.

Continuous descriptors diagnose structural variation. They do not become new
hard constraints merely because one run has a small or large value.

## Scale and rigid-transform semantics

Shape descriptors should be scale-invariant whenever the question is shape.
Absolute scale is retained only as a separate context observation because
packing and settling operate in a coordinate frame.

The future runner must use one common context-scale rule for comparable
settling traces and must not tune it per fixture. The prior bounded smoke rule
is the default context rule:

`contextScale(N) = 96 * 1.8 * max(1, N - 1)`.

This rule is context metadata, not a quality target. The runner must report
both the normalized family frame and the context scale used for lifecycle
stages. It must not penalize FP1 merely because its unit-frame coordinates
differ from F0's source frame.

The structural meaning of a profile is invariant under:

- translation;
- rotation; and
- reflection,

unless an orientation-sensitive question is explicitly introduced later. No
screen-top, clockwise, or “north is better” assumption is allowed.

Axis-aligned bounding-box width and height remain packing context only because
they change under rotation. They must not be presented as intrinsic quality.

## Affine-invariance warning

Hard GEO-0 and GEO-3 predicates are preserved by the invertible affine
normalization used to construct FP1 for each fixed `N`. Structural descriptors
are not generally affine-invariant.

In particular, `F1-ALG` uses `P_i=(i,i^2)` while `FP1-NGP` uses
`P_i=(i/m,(i/m)^2)` with `m=N-1`. This is a non-uniform affine transform: the
horizontal and vertical scales differ. It can preserve exact hard predicates
while changing angles, aspect ratios, altitudes, and normalized shape views.

Therefore:

- F1 and FP1 are hard-equivalent controls, not presumed structural equals;
- direct F1/FP1 profile comparison is selected as a diagnostic contrast;
- F1 is not a visual or Production candidate; and
- a structural difference does not by itself prove FP1 is worse or better.

## FP1 structural question

The future run must answer these questions separately:

1. Is FP1 merely hard-safe, or does it provide usable motif-local profiles?
2. Which motifs or clusters remain bottlenecked?
3. Does the one-sided parabola create systematic one-sided concentration?
4. Does unchanged settling repair or worsen named seed-born bottlenecks?
5. Do representative assignments materially change structural profiles even
   though hard classification is invariant?
6. Does F1-to-FP1 normalization change shape descriptors as the affine warning
   predicts?
7. Is the evidence sufficient to continue to visual-quality research, or is a
   structured F2 design needed first?

The answer may be mixed by motif, cluster, family, or stage.

## F0 role

`F0-CURRENT` is the source-exact Production/source baseline and the known
failure control. It is used to reproduce:

- current degree-plus-lexical assignment behavior;
- Lighthouse exact motif collapse under the current representative;
- Ashen shared-Node and fixed-direction fan-out behavior; and
- the current high-R capacity boundary where relevant.

F0 is not a quality gold standard. It may be structurally better in one
descriptor and worse in another. The experiment measures it rather than
assuming it wins.

F0 source transparency is required for the real Lighthouse and Ashen cells.
If the copied F0 path does not exactly reproduce the source baseline, the
execution stops as baseline drift.

## F1 role

`F1-ALG`, `P_i=(i,i^2)`, remains a mathematical/general-position control. It
is included only where it helps separate raw algebraic geometry from FP1's
normalized geometry. It is not an implementation proposal, visual layout, or
Production family.

F1 cells are limited to motif-bearing controls and the high-R control needed
to expose the family-capacity contrast. They are not repeated for the
zero-motif control except for a hard no-op gate.

## FP1 role

`FP1-NGP`, `P_i=(i/m,(i/m)^2)` for `N>=2`, is the primary family under study.
Its construction, ordering, normalization, and exact hard semantics remain
unchanged. No jitter, phase adjustment, candidate reordering, degree change,
or new force is permitted in the future run.

FP1 is evaluated both before settling and after the unchanged existing
settling path. A good hard result is not promoted to Production by this
experiment.

## Assignment versus hard safety

The previous FP1 result established assignment-insensitive hard classification
under the current GEO-0/GEO-3 floor. It did not establish structural
assignment-insensitivity.

The experiment must report these as different questions:

| question | authority |
|---|---|
| Is the mapping injective? | exact hard/materialization check |
| Is the mapping hard-valid? | GEO-0/GEO-3 oracle |
| Does a family have enough capacity? | family proof or exact family result |
| Do two hard-valid representatives have different motif profiles? | structural field comparison |
| Is one representative visually preferred? | not this experiment |

An assignment-sensitive structural result is recorded, not repaired, in this
Design1 boundary.

## Representative-assignment sensitivity

The future matrix uses a deliberately small, deterministic representative set:

| representative | meaning |
|---|---|
| `REP-0` | the simple deterministic injective representative used by the prior FP1 diagnostic |
| `REP-PERM-1` | a fixed representation-neutral permutation of candidate indices |
| `REP-PERM-2` | a second fixed representation-neutral permutation, used only if distinct from the first |

The permutations operate on a stable diagnostic Node list and candidate-index
list defined in the experiment manifest. They do not inspect natural-language
names, locale, labels, or sample-specific preferred positions. They are not
random and are not a Production assignment algorithm.

`REP-PERM-1` and `REP-PERM-2` are enough to answer whether structural quality
is dominated by which Node receives which point. Full factorial enumeration,
random permutation, optimization, ranking, and visual selection are out of
scope.

If all representatives are hard-valid but their profile fields differ, report
`SQ-ASSIGNMENT-SENSITIVE`. If profiles are equal for a control, report only
that control-level observation; do not generalize it to all graphs.

Lexical ID order may be used to make `REP-0` reproducible. It must be reported
as operational order only and must not be interpreted as a semantic role or a
quality preference.

## Automorphism control

`K3` is retained as the true-symmetry motif control. Its three Nodes are
topologically equivalent under the complete triangle. The experiment must not
claim that one named Node has a uniquely correct geometric role where the
topology does not provide one.

The literal representative may change across equivalent assignments without
constituting a quality failure. The relevant observation is whether the
profile is equivalent at the level supported by the control and whether the
hard oracle remains sound.

## Structural-quality domains

The bounded corpus covers these domains:

| domain | purpose | selected control |
|---|---|---|
| `SQ-D1` single motif | isolated motif shape and chord profile | Lighthouse |
| `SQ-D2` overlapping motifs around a shared Node | fan-out and cluster bottlenecks | Ashen Crown |
| `SQ-D3` motif-dense graph | several local motifs in one cluster | Ashen Crown |
| `SQ-D4` high fan-out/high-R graph | capacity versus actual distribution | high-R-9 |
| `SQ-D5` symmetry control | avoid false unique-role interpretation | K3 |
| `SQ-D6` zero-motif/non-target control | ensure no profile is manufactured | zero-motif |

No corpus is claimed to represent every graph family. The domains are
diagnostic coverage, not a benchmark ranking.

## Selected corpus

The smallest primary corpus is:

| control | source/role | required profile |
|---|---|---|
| Lighthouse | current LiaisonScape canonical sample; real isolated motif | F0 transparency, F1/FP1 shape, assignment probe, settling |
| Ashen Crown | canonical e2r-spec sample; real overlapping motif cluster | F0 transparency, F1/FP1 cluster, assignment probe, settling |
| high-R-9 | prior synthetic high fan-out control | capacity/distribution contrast, F1/FP1 |
| K3 | complete-graph-three true-symmetry control | symmetry and assignment sanity |
| zero-motif | small path control | hard no-op and no profile |

Ashen supplies the motif-dense overlap domain and high-R-9 supplies the
high-fan-out domain. `G7`, `K6`, and `high-R-16` are omitted from the primary
structural matrix because their established F0 capacity boundaries are
redundant for this design; they may be used only as a preflight hard-safety
confirmation if the future runner needs to reproduce the existing proof
status. `true-symmetry-star` is omitted because K3 supplies a motif-bearing
symmetry control and zero-motif supplies the no-demand control.

Lighthouse and Ashen must be run in both available locale files only as a
topology/geometry parity check. Locale is not a structural input and the
result must not be duplicated as independent evidence.

## Pre-settling stage

`SQ-E2` is the primary new evidence stage. For each family and selected
representative:

1. generate the candidate family in the disposable runner;
2. materialize the Node mapping in the common context frame;
3. run exact hard validation before any settling;
4. derive motif and overlap-cluster membership from graph topology;
5. record the complete two-layer structural profile; and
6. freeze the output before downstream processing.

No settling output, route, label, or screenshot may enter this stage.

This stage isolates family geometry and representative mapping from the
existing settling behavior. A profile change here is not attributed to
settling.

## Post-settling stage

`SQ-E3` compares the same materialized seed against the output after the
existing settling path. The future run must:

- use the same settling implementation and three-iteration boundary already
  used by the accepted smoke evidence;
- use the same attraction, clearance, and bounded-coordinate mechanics;
- use the same context-scale rule;
- make no per-fixture tuning; and
- record the seed profile and each stage transition separately.

Post-settling evidence is causal comparison, not proof that settling is a
quality optimizer. Lighthouse may improve from exact collapse without becoming
structurally strong. Ashen may improve and worsen different local constraints
at the same transition.

## Unchanged-settling boundary

Settling is fixed for this experiment. The runner must not:

- change iteration count;
- change attraction, repulsion, or clearance coefficients;
- add a new force or regularizer;
- add jitter or randomization;
- add motif activation or bottleneck repair;
- change packing;
- reassign Nodes after settling; or
- use a structural descriptor to feed back into settling.

If the unchanged settling path cannot be reproduced, report the lifecycle
stage as unavailable rather than silently substituting a new solver.

## Context-scale decision

The experiment uses two explicit views:

1. normalized family-frame shape, for scale-independent motif and fan-out
   comparisons; and
2. a common context-scale lifecycle frame, for raw packing and settling
   context.

The context frame uses `96 * 1.8 * max(1, N-1)` unless the source-equivalent
runner demonstrates that an existing fixed source frame is required. Any such
choice is recorded once for the entire run. Per-fixture scale tuning is
forbidden.

Absolute scale is reported but not optimized. Edge length remains contextual
and has lower priority than structural separation and bottleneck visibility.

## One-sided/parabola geometry question

FP1's candidates lie on a one-sided normalized parabola. The future result must
specifically inspect whether this causes:

- a systematic one-sided distribution of motif neighbors;
- repeated narrow altitude/chord identities;
- concentration of shared-Node rays in one local sector;
- asymmetric profile behavior under reflection; or
- a difference between ray capacity and actual fan-out distribution.

This is a diagnostic question, not a reason to add a phase, mirror, jitter,
rotation, or structured F2 family in this experiment. A one-sided profile may
be a candidate-family limitation, an assignment effect, a topology interaction,
or a mixed result; the matrix must keep those causes separate.

## Fan-out capacity versus distribution

For each family/control the machine output must include:

- distinct directed-ray capacity available at each relevant shared Node;
- the actual sorted circular gap sequence after assignment;
- the identity of the narrowest gaps;
- motif membership multiplicity at the shared Node; and
- exact GEO-3 status.

`capacity` answers whether enough distinct directions exist in principle.
`distribution` answers how the selected representative uses them. A high
capacity with concentrated gaps is not a contradiction and must not be
collapsed into one measure.

## F2 boundary

The structured F2 candidate family remains deferred. This design does not
invent an F2 comparator, ideal target shape, force, phase policy, or learned
candidate generator.

F2 becomes relevant only if the headless FP1 profile shows a repeatable
structural limitation that cannot be interpreted as assignment, affine
normalization, or unchanged-settling behavior. That is a later design gate,
not an outcome assumed here.

## Minimal matrix

The matrix is intentionally not Cartesian.

| cell group | family/assignment | controls | stages | causal purpose |
|---|---|---|---|---|
| M0 | F0 + current representative | Lighthouse, Ashen Crown | pre, post source-equivalent smoke | reproduce baseline and known structural failures |
| M1 | F1 + REP-0 | Lighthouse, Ashen Crown, high-R-9, K3 | pre | raw algebraic geometry control |
| M2 | FP1 + REP-0 | Lighthouse, Ashen Crown, high-R-9, K3 | pre, post | primary family/stage profile |
| M3 | FP1 + REP-PERM-1 | Lighthouse, Ashen Crown, K3 | pre, post if cheap | assignment-sensitivity contrast |
| M4 | FP1 + REP-PERM-2 | Lighthouse, Ashen Crown only | pre | second bounded assignment contrast |
| M5 | F1 + FP1 matched control | Lighthouse, Ashen Crown, K3 | pre | non-uniform affine structural contrast |
| M6 | all applicable families | zero-motif | pre hard gate | confirm no motif/cluster profile is manufactured |
| M7 | F0 capacity gate only | high-R-9 | pre hard gate | record F0 capacity boundary without forcing a profile |

M0 is source transparency, not a quality baseline. M4 is omitted for high-R
and zero-motif controls to avoid factorial expansion. M5 reuses M1/M2 outputs
where possible and does not add another assignment policy.

The runner may add a required hard-safety confirmation for G7, K6, or
high-R-16 only if that confirmation is mechanically necessary. Such a cell
must be labeled a hard gate and must not expand the structural interpretation
without a separate reason.

## SQ-E0 through SQ-E5

| evidence | meaning | status in this design |
|---|---|---|
| `SQ-E0` | source/baseline transparency | mandatory preflight |
| `SQ-E1` | exact GEO-0/GEO-3 preservation | mandatory primary gate |
| `SQ-E2` | pre-settling structural-quality profile | primary new evidence |
| `SQ-E3` | post-settling profile with unchanged settling | selected causal comparison |
| `SQ-E4` | bounded manual visual observation, only if required | deferred secondary option |
| `SQ-E5` | routing/label/full-presentation quality | explicitly out of scope |

`SQ-E0` and `SQ-E1` must be complete before any structural conclusion. `SQ-E2`
is the primary authority for FP1 seed geometry. `SQ-E3` explains lifecycle
change but does not supersede the seed profile. `SQ-E4` cannot override a
reproducible headless result. `SQ-E5` belongs to later routing/label and visual
research.

## Visual evidence decision

The design selects **VIS-0**:

- no screenshot is required for the next structural run;
- manual visual judgment is not primary authority;
- browser/server/preview use is not required;
- `visualState` is reported as `UNASSESSED`; and
- a later VIS-1 or VIS-2 phase may be proposed only if headless evidence is
  complete and a specific ambiguity remains.

VIS-1 would mean a bounded screenshot observation after the headless result;
VIS-2 would mean a bounded comparative manual observation with an explicit
question. Neither is selected now. The next run must not turn “looks better”
into an unstructured gate.

## Machine-output fields

Every future result row must include at least:

- graph/control ID and provenance;
- component ID and Node count;
- family (`F0-CURRENT`, `F1-ALG`, or `FP1-NGP`);
- representative (`REP-0`, `REP-PERM-1`, or `REP-PERM-2`);
- stage (`PRE-SETTLING` or `POST-SETTLING`);
- context scale and normalized-frame declaration;
- hard status and exact GEO-0/GEO-3 counts;
- candidate count, finite/distinct status, and family feasibility status;
- motif IDs and unordered motif Node identities;
- motif side scale, normalized shape views, altitude/chord identity, and
  exact degeneracy state;
- overlap-cluster IDs and member motif IDs;
- shared Nodes, membership counts, fan-out capacity, and gap distributions;
- cluster bottleneck identities and boundary/context relation inventory;
- settling state and iteration boundary;
- source/transform manifest; and
- `visualState`.

The fields are diagnostic output only. They must not be serialized into an E2R
Dataset or added to the LiaisonScape application model by this checkpoint.

## Future result tables

The execution record should include these tables without reducing them to one
rank:

1. source/baseline parity table;
2. exact hard-safety matrix;
3. per-motif pre/post profile table;
4. overlap-cluster fan-out and bottleneck table;
5. representative-assignment contrast table;
6. F1/FP1 affine-contrast table;
7. settling transition table; and
8. corpus/domain coverage and omitted-control table.

Each table should retain the control and stage identity. “Improved” may be
used only when a named descriptor has a clear local interpretation; otherwise
the row must say mixed or descriptive change.

## Descriptor interpretation contract

For every selected descriptor, the execution record must state:

| question | required answer |
|---|---|
| what problem does it detect? | motif shape, chord, fan-out, packing, or boundary context |
| what can it not detect? | explicitly state missing routing/label/visual semantics |
| scale behavior | raw/context or normalized/shape |
| rigid-transform behavior | translation/rotation/reflection treatment |
| affine behavior | whether non-uniform affine change may alter it |
| local/global scope | motif, overlap cluster, or context |
| monotonic direction | only where source-grounded; otherwise none |
| zero-motif applicability | no profile where no accepted motif exists |

This contract prevents descriptor names from becoming hidden metric weights.

## Hypotheses H1-H7

| hypothesis | proposed test |
|---|---|
| H1 | FP1 hard safety does not imply uniform structural quality across motifs. |
| H2 | The accepted two-layer profile distinguishes F0 and FP1 without a scalar score. |
| H3 | FP1 structural quality may depend on representative assignment even when hard classification does not. |
| H4 | Unchanged settling can materially alter FP1 structural profiles without changing family hard semantics. |
| H5 | High distinct-ray capacity does not establish useful fan-out distribution. |
| H6 | F1-to-FP1 affine normalization can change structural descriptors while preserving GEO-0/GEO-3. |
| H7 | A bounded profile experiment can determine whether FP1 merits later visual-quality research before F2 or Production work. |

The hypotheses are tested as bounded profile contrasts. None is a Production
assumption.

## Falsification N1-N10

The design is falsified or stopped if:

| condition | meaning |
|---|---|
| N1 | accepted quality profile cannot be reconstructed from live research |
| N2 | descriptors collapse into an arbitrary scalar or threshold |
| N3 | FP1 hard status cannot be reproduced while measuring profile |
| N4 | family and settling effects cannot be isolated |
| N5 | representative assignment cannot be controlled without ID semantics |
| N6 | chosen profile produces meaningful values only for one named fixture |
| N7 | zero-motif or symmetry controls expose a false metric interpretation |
| N8 | the design requires routing or labels to answer the structural question |
| N9 | subjective visual judgment becomes primary authority |
| N10 | source/baseline drift invalidates the transparency gate |

N1, N3, N4, or N10 stop the run. N2, N5, N6, N7, N8, or N9 require the
result to be marked not ready or mixed rather than silently repaired during
execution.

## CASE and exact result

The selected primary case is **CASE 9 - MIXED**. The design combines the
smallest controls for family geometry, representative assignment, affine
normalization, and unchanged settling because no single one of those factors
is known to dominate the unresolved structural question.

The design does not select CASE 5: an F2 comparator is not needed before the
accepted two-layer profile has been applied to FP1. It does not select CASE 7:
manual visual evidence is not required to answer the headless structural
question. It does not select CASE 8: routing and labels remain outside the
abstraction by design. It does not select CASE 10 because the live baseline
currently reconciles.

The exact result is clauses **1+2+3+4+5+6 DESIGN READY** above. Structural
quality itself remains unvalidated until the next execution checkpoint.

## Decision and selected next checkpoint

Decision: **A - run the bounded headless structural-quality experiment next**.

Selected exactly:

`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRACTICAL-FAMILY-STRUCTURAL-QUALITY-EXPERIMENT1`

The next execution must remain disposable, offline, headless, and bounded. It
must not start automatically from this document.

## Production changes: NO

This Design1 record authorizes no implementation change:

- FP1 Production adoption: **NO**;
- F1 Production adoption: **NO**;
- F2 implementation: **NO**;
- candidate generator: **NO CHANGE**;
- assignment and lexical ordering: **NO CHANGE**;
- degree ranking: **NO CHANGE**;
- settling, packing, and seededPositions: **NO CHANGE**;
- routing, labels, crossings, and UI: **NO CHANGE**;
- samples and Dataset content: **NO CHANGE**;
- preview/server/browser: **NO CHANGE**;
- UUID/Object ID semantics: **NO CHANGE**; and
- schema/Core/Extension semantics: **NO CHANGE**.

## Knowledge candidate

Knowledge Candidate: **YES - HYPOTHESIS STRENGTHENED / REFINED**.

Potential reusable hypotheses are that hard-safe general position is distinct
from structurally useful geometry; hard assignment-insensitivity does not
imply structural assignment-insensitivity; affine transforms can preserve
exact hard predicates while changing shape; fan-out capacity differs from
fan-out distribution; structural quality should be profiled locally before
routing and labels; unchanged settling is a separate causal stage; and
near-degeneracy can remain diagnostic without becoming a hard threshold.

No `ai-knowledge` entry is created or promoted by this record.

## Validation boundary

Because this is a design-only checkpoint, no LiaisonScape experiment is run.
The selected future execution must run:

- LiaisonScape `npm.cmd test`;
- LiaisonScape `npm.cmd run lint`;
- LiaisonScape `npm.cmd run build`;
- LiaisonScape `git diff --check`;
- e2r-spec `npm.cmd run validate`; and
- e2r-spec `git diff --check`.

The future result must report the live LiaisonScape test count, not copy a
historical count without verification. Browser/server validation is not
required for this Design1 or its headless next checkpoint.

## Final boundary

This record changes only the e2r-spec research record and its minimal roadmap
cross-reference. It does not modify LiaisonScape source, candidate families,
assignment, settling, packing, routing, labels, samples, preview, or
`ai-knowledge`. It does not modify the protected Session file.
