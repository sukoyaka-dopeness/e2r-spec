# LiaisonScape Initial-placement Seed Candidate-family Offline Experiment 1 Design

Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-CANDIDATE-FAMILY-OFFLINE-EXPERIMENT1-DESIGN1`
Date: 2026-09-02

## Design result

Result: **DESIGN READY WITH DEFERRED SECOND FAMILY**.

Decision: **C — ALGEBRAIC F1 SELECTED; STRUCTURED F2 DEFERRED**.

Experiment 1 will compare the current fixed-direction family F0 with one exact
N-only algebraic general-position-like diagnostic family F1-ALG. The primary
question is whether candidate-family representational capacity removes the
current exact hard failures without topology-specific coordinates, IDs,
thresholds, randomness, assignment optimization, settling, or routing.

This is a design record only. The experiment has not been run. No temporary
harness, generated corpus, Production source, test, sample, assignment,
settling, packing, routing, or preview change was made.

## Causal boundary

The independent variable is exactly **candidate family**. Everything else is
fixed. The primary evaluation is **F-SET**: whether at least one injective
Node-to-position assignment satisfies all GEO-0 and GEO-3 constraints. The
current rank-to-point mapping, **F-MAP-CURRENT**, may be reported as secondary
observation only and cannot accept or reject a family.

Fixed responsibilities:

- graph topology and motif derivation are held fixed;
- hard predicates remain exact GEO-0/GEO-3;
- assignment is a diagnostic oracle responsibility, not a family property;
- settling, component packing, routes, labels, and visual metrics are absent;
- no scalar score, threshold, or optimization objective is used.

## Family set

### F0 — current fixed-phase baseline

F0 reproduces the source vocabulary: one rank-selected center, then positions
on rings using eight repeated angular directions, with the current clearance-
based radius rule and ring index. It is the negative/current baseline. Its
directional capacity saturating at eight is the expected G7 failure boundary.

### F1-ALG — exact N-only diagnostic family

For `i = 0 ... N-1`, define the raw canonical point:

`P_i = (i, i^2)`

Use exact integers (BigInt or an equivalent exact representation in the future
harness). The point index is serialization order only; it is not an Entity
identity or assignment privilege. Translation or positive uniform scaling for
inspection is a context transform and must not affect hard pass/fail.

F1-ALG is selected because it is finite, deterministic, N-only, ID-neutral, and
has no three distinct collinear points. A non-degenerate line intersects a
parabola in at most two points; equivalently, the orientation determinant for
three distinct indices is nonzero. Consequently, from any candidate point, no
two other candidate points can lie on the same directed ray: collinearity is
already excluded. This is an exact diagnostic proof, not a Production design
recommendation.

### F2 — structured comparator

Deferred. A regular polygon or phase-diverse ring is conceptually interesting,
but a floating trigonometric construction would make exact predicate authority
fragile, and no second exact/provable family has yet shown distinct evidentiary
value over F1-ALG. It must not be replaced by random jitter or an epsilon-based
fallback.

Topology-aware F3 is not included in Experiment 1. Its inclusion would add a
second causal axis before the minimum N-only boundary is tested.

## Corpus

The future offline run should include the real Lighthouse Restoration corpus
(EN/JA grouped by topology) and Ashen controls, plus the established synthetic
controls: zero-motif dense/bipartite graphs, K3, K6, G7 with `R(s)=16`, a
selected high-R series, a multi-high-R control, a symmetric control, and
same-N graphs with different motif demand. Locale duplicates are grouped; ID
renames and Entity/Relation array permutations are separate invariance fixtures.

The required reproduction expectations are F0 fixed eight-direction saturation,
Lighthouse and Ashen `F-CURRENT=NO / F-ROLE=YES / F-SET=YES`, G7 F0
hard-infeasible with a continuous witness feasible, and prior N-only
general-position hard-feasible witness evidence.

## Exact measurements

For each family and `N`, record only:

| ID | Measurement |
|---|---|
| M1 | candidate point count |
| M2 | distinct point count |
| M3 | per-point directional-capacity multiset |
| M4 | same-directed-ray group count |
| M5 | maximum same-ray multiplicity |
| M6 | exact candidate collinear-triple count |
| M7 | graph-specific F-SET hard feasibility |
| M8 | GEO-0 violation existence |
| M9 | GEO-3 violation existence |

Do not measure or rank by edge length, bbox, compactness, crossings, labels,
routes, symmetry aesthetics, average angles, or any minimum-distance/angle
threshold. Raw extent and an inspection-only normalization may be recorded as
descriptive data, never as an acceptance objective.

## Oracle design

The exact orientation determinant is the collinearity predicate. For vectors
`u = A - S` and `v = B - S`, the exact same-directed-ray predicate is:

`cross(u, v) = 0` and `dot(u, v) > 0`

for distinct nonzero vectors. Opposite rays (`dot < 0`) are not GEO-3
violations. No epsilon, rounded comparison, angle tolerance, or normalized
floating value is authoritative.

The future oracle may use a hybrid of: exact bounded backtracking/CSP
existence (Oracle A), family-level proof (Oracle B), and capacity impossibility
proof such as pigeonhole (Oracle C). F1-ALG can use the analytical proof for
its family-level geometry; F0/G7 can use the center-capacity impossibility
argument. Search is required only where neither proof applies. No CSP/SAT or
optimizer is mandated for Production.

## Invariance suite

The future run must verify unchanged family semantics under Entity ID rename,
Entity array reorder, Relation array reorder, component discovery reorder, and
locale pairing. Translation, rigid rotation, reflection, and positive
non-zero uniform scale are context equivalences when exact capacity and
feasibility are preserved. Zero scale is invalid because it collapses points.

## Hypotheses and falsification

| ID | Hypothesis |
|---|---|
| H1 | F0's repeated eight-direction family creates avoidable exact capacity failures as demand grows |
| H2 | F1-ALG is hard-feasible for the representative prior controls at F-SET level |
| H3 | F1-ALG's hard result is unchanged by ID and input-order transformations |
| H4 | F-SET can distinguish family capacity from current assignment mapping |
| H5 | exact family proof can replace exhaustive assignment search for F1-ALG |

| ID | Falsification |
|---|---|
| N1 | F1-ALG has an exact GEO-0/GEO-3 failure despite the stated proof |
| N2 | F1-ALG fails F-SET on a finite control with a valid realization |
| N3 | F0 does not reproduce the fixed-direction/G7 boundary |
| N4 | ID or array order changes F1-ALG capacity or feasibility |
| N5 | a context transform changes exact pass/fail |
| N6 | F-MAP-CURRENT is required to explain F-SET acceptance |
| N7 | a required result depends on epsilon, score, settling, or routing |

Success requires F0 and F1-ALG to be evaluated under the same exact oracle,
F1-ALG to retain its proved hard-safety property, the stated invariance suite
to pass, and at least one known F0 failure to be separated from F-SET capacity
by F1-ALG. Failure is any proof contradiction, order/identity dependence,
unexplained F-SET result, or need for a forbidden threshold or downstream
stage; it does not authorize Production changes.

## Quality boundary and readiness

Near-collapse, edge routing, label clearance, crossings, compactness, visual
acceptance, and release readiness are explicitly excluded. Experiment 1 may
show representational capacity only; it cannot show that F1-ALG looks good or
should be used in LiaisonScape.

Offline Experiment 1 design readiness: **YES**, with exactly F0 + F1-ALG and
F2 deferred. The allowed future variable is family class. The future run is
confined to a disposable detached worktree and must remove all harness,
fixtures, diagnostics, and generated output afterward. Runtime experiment and
Production adoption are not authorized.

The selected next checkpoint is exactly:

`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-CANDIDATE-FAMILY-OFFLINE-EXPERIMENT1`

It is selected only and is not started by this record.
