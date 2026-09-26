# LiaisonScape Initial-placement Seed Practical Candidate-family Experiment Design

Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRACTICAL-CANDIDATE-FAMILY-EXPERIMENT-DESIGN1`

Status: **DESIGN ONLY / EXPERIMENT NOT RUN**

Date: 2026-09-02

## Result

Primary result: **CASE 1 - A BOUNDED EXACT GENERAL-POSITION FAMILY IS READY AS
THE PRIMARY PRACTICAL EXPERIMENT CANDIDATE**.

Exact result clauses:

1. **DESIGN READY** - A primary practical family can be tested while preserving
   the current exact hard-safety floor and without adopting F1-ALG as a layout.
2. **DESIGN READY** - The experiment can separate general-position hard safety
   from structured-family assignment burden.
3. **DESIGN READY** - Controlled normalization can be tested as an operational
   property separate from hard-safety authority.
4. **DESIGN READY** - The selected family set does not rely on fixed
   directional capacity, Object ID spelling, randomness, or visual scoring.
5. **DESIGN READY** - The experiment can use exact pre-settling hard evidence
   as primary authority and unchanged settling only as downstream smoke.

Decision: **A - PRACTICAL FAMILY EXPERIMENT DESIGN READY; RUN THE BOUNDED
EXPERIMENT NEXT**.

The exact selected next checkpoint is:

`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRACTICAL-CANDIDATE-FAMILY-EXPERIMENT1`

It is selected only and is not started by this record.

The selected primary practical candidate is `FP1-NGP`, an exact, bounded,
N-only, normalized general-position diagnostic family. `F0-CURRENT` and
`F1-ALG` remain controls. No secondary structured family is selected; the
previous F2 remains deferred because no exact structured comparator currently
adds necessary evidence beyond FP1-NGP without reopening its own semantics.

## Preceding result and reconciliation

The preceding [seed-assignment equivariance follow-up](liaisonscape-initial-placement-seed-assignment-equivariance-followup.md)
resolved that the Lighthouse rename effect belongs to the current A0 selector,
not to the representation-neutral `HardValid` relation. It also established:

- A0's degree-descending, lexical-ID-tie order is deterministic but not
  representation-equivariant at hard-safety classification level;
- a mapping-sensitive family needs a hard-safe assignment boundary when a
  valid mapping exists;
- an assignment-insensitive family can remove Node/order dependence from hard
  classification;
- true automorphism does not justify one universal source-grounded named
  total order; and
- the current exact floor supports finite-graph hard-safe totality only with a
  strict GEO-0/GEO-3 qualification.

The live source and research baseline are compatible with this design:

| Item | Reconciled state |
| --- | --- |
| F0 | Current center/ring family with eight repeated directions |
| F1-ALG | Exact diagnostic `P_i=(i,i^2)`, not a layout |
| Lighthouse / Ashen | F0 `F-SET=YES`, with current assignment loss observed |
| G7 / K6 | F0 candidate-family infeasible under the known capacity boundary |
| F1 hard floor | `HardValid=Inject` for the current exact GEO-0/GEO-3 floor |
| Current source | `fd563340625fd3d88dc25baedc93c4f8fe69e5e7`, no material drift |
| Current active checkpoint | Practical candidate-family experiment design, as selected by live roadmap |

The live LiaisonScape source was inspected read-only at `fd563340...`.
`src/auto-layout.ts` still constructs the current rank-to-point zip and three
settling iterations; no implementation boundary is changed here.

## Design scope and practical layers

The future experiment asks which properties a practical candidate family needs
beyond proving that hard-safe coordinates exist. It is not a search for a
final Production layout.

| Layer | Meaning | Design treatment |
| --- | --- | --- |
| Practical-P0 | Finite computable family | Primary evidence |
| Practical-P1 | Hard-safety representational sufficiency | Primary exact evidence |
| Practical-P2 | Controlled coordinate geometry for downstream processing | Primary diagnostic evidence |
| Practical-P3 | Runtime/materialization practicality | Bounded smoke evidence |
| Practical-P4 | Visual usefulness | Later, not an acceptance gate here |
| Practical-P5 | Production suitability | Explicitly out of scope |

P0-P3 are the design target. P4 remains `UNASSESSED`; P5 is not inferred from
any result in this record.

## Current exact hard floor

The experiment retains the exact, threshold-free predicates:

- **GEO-0:** an accepted topology-derived motif must not be exactly degenerate
  when a valid realization exists.
- **GEO-3:** distinct motif-neighbor identities around a shared Node must not
  occupy the same directed ray when a valid realization exists.

No epsilon, minimum-angle threshold, minimum-distance threshold, aesthetic
threshold, crossing count, label metric, or visual score is introduced. The
global exact oracle remains authoritative; directional-capacity descriptors are
not substitutes for it.

## Candidate-family contract levels

The later run must classify each family explicitly:

| Contract | Meaning |
| --- | --- |
| FAM-E0 | Mapping-sensitive family paired with hard-safe assignment |
| FAM-E1 | Every injective mapping is hard-safe under the current floor |
| FAM-E2 | At least one hard-valid mapping exists |
| FAM-E3 | Under-specified hard behavior; rejected |

The strong property retained for the experiment is:

```text
UNIVERSALLY-ASSIGNMENT-SAFE(G, P)
iff
HardValid(G, P) = Inject(G, P)
```

This is not the same as `F-SET(G,P)=YES`. The design records the applicable
proof level as `UA-G`, `UA-C`, `UA-N`, or `UA-FINITE`; no visual implication is
attached to any of them.

## Practical-family requirements audit

| Requirement | Classification | Design refinement |
| --- | --- | --- |
| PF-1 finite | ACCEPT | A finite component of size N emits exactly N candidates |
| PF-2 capacity | ACCEPT | Candidate count is at least N; FP1-NGP emits exactly N |
| PF-3 ID-neutral family semantics | ACCEPT WITH REFINEMENT | Family construction uses N only; materialization IDs are a separate variable |
| PF-4 deterministic | ACCEPT | Same permitted input produces the same exact family |
| PF-5 no fixed-direction saturation | ACCEPT FOR FP1; F0 CONTROL ONLY | FP1 has no finite ray vocabulary; growth is tested explicitly |
| PF-6 exact hard validation | ACCEPT | GEO-0/GEO-3 use exact arithmetic and the existing oracle |
| PF-7 controlled extent | ACCEPT WITH QUALIFICATION | FP1 uses a bounded affine normalization; context scale remains experimental |
| PF-8 injectivity | ACCEPT | Invertible normalization preserves distinct points |
| PF-9 downstream compatibility | ACCEPT AS EXPERIMENT HYPOTHESIS | Number materialization is checked only by E-P3 smoke |
| PF-10 no randomness | ACCEPT | No random or seeded-random generation |
| PF-11 no visual score requirement | ACCEPT | Generation and hard validation do not inspect routes or labels |
| PF-12 computational bound | ACCEPT WITH SEPARATION | Family generation is O(N); any A1 search cost is assignment cost, not family cost |

The requirements describe an experiment contract, not a Production acceptance
checklist. A candidate may be exact and operationally bounded while still
being visually unassessed.

## Candidate controls and archetypes

### F0-CURRENT

F0 reproduces the current source family: a rank-selected center followed by
center/ring positions using eight repeated angular directions and the existing
clearance-based radius rule. It is the negative/current baseline. Its known
fixed-direction saturation and mapping sensitivity are required controls, not
defects to repair in this design record.

### F1-ALG

F1-ALG is the raw exact diagnostic witness:

```text
Q_N = { (i, i^2) | i = 0, ..., N-1 }
```

It is finite for each N, injective, has no three collinear points, and has no
same-directed-ray pair under the accepted current predicates. Therefore it is
assignment-insensitive for the current exact floor, with `FAM-E1` and
`UA-FINITE` qualified to that floor. Its coordinate envelope grows as N grows,
so it is not adopted as a layout or Production family.

### FP1-NGP: selected primary practical family

For N >= 2, let `m = N - 1` and define:

```text
FP1_N = { (i/m, (i/m)^2) | i = 0, ..., m }
```

For N = 1, `FP1_1 = { (0,0) }`.

The authoritative exact representation for N >= 2 is a common-denominator
integer pair:

```text
D = m^2
P_i = ( i*m / D, i^2 / D )
```

where `i`, `m`, and `D` are exact integers (BigInt in a future harness). This
is the F1 parabola after a deterministic, N-dependent, invertible affine
normalization. It is deliberately not relabeled as a Production candidate.
Its information value is to isolate coordinate-envelope practicality while
preserving the exact current-floor property.

Properties of FP1-NGP:

- generator input is only finite component size N plus a neutral context
  transform;
- candidate count is exactly N;
- every candidate is distinct;
- all coordinates lie in the unit square;
- no three distinct candidates are collinear, by the same parabola argument;
- no two distinct vectors from a candidate to two other candidates are the
  same positive multiple, so GEO-3 remains satisfied;
- `FAM-E1` is claimed for the current floor, with `UA-N` and `UA-FINITE`
  qualified by the accepted exact predicates;
- generation is direct O(N) time and O(N) space before materialization; and
- the family uses no IDs, array order, labels, locale, Dataset ID, routing, or
  presentation metadata.

FP1-NGP is still diagnostic. Unit-square bounds do not prove readability,
crossing behavior, label safety, or a desirable component shape.

### Structured secondary candidate

No secondary practical archetype is selected. The prior structured F2 idea
remains deferred because a phase-diverse/radial family would need its own exact
hard-safety contract and a non-redundant evidence question. Naming continuity
alone is not evidence. No pseudo-random jitter, regular-polygon assumption,
or topology-specific arrangement is added.

## F2 relationship and special-case rejection

F2 remains deferred, not rejected as a research direction. FP1-NGP answers the
smallest next question: whether raw F1's unbounded coordinate envelope can be
controlled while preserving its exact current-floor hard safety. A structured
secondary would answer a different question only after it can state exact
feasibility, assignment responsibility, and non-saturation semantics.

Designs that branch on Lighthouse, K6, high-R, or another named fixture are
rejected. A future topology-aware family may adapt from a source-independent
general rule, but no fixture-specific exception is permitted.

## N-only versus topology-aware generation

`GEN-N` depends only on N and a neutral context transform. `GEN-T` may adapt to
graph topology. The accepted prior conclusion is retained: topology is a
validation target, not a mandatory generator input.

FP1-NGP is the primary `GEN-N` control. The later experiment may report whether
the required corpus exposes a unique need for `GEN-T`, but it must not require
topology adaptation without evidence. This keeps generator semantics separate
from motif-derived hard validation.

## Context and normalization model

The family semantic is the exact unit-frame point set. Context materialization
is separate and may use translation, rotation/reflection equivalence, or a
positive common scale for diagnostic comparison. Context transformation must
not inspect IDs or act as a hidden visual-quality selector.

The selected experimental normalization is the affine map:

```text
T_N(x,y) = ( x/(N-1), y/(N-1)^2 )  for N >= 2
```

It maps raw F1 to FP1-NGP and bounds both axes to [0,1]. The transform is
selected for common-frame diagnostics, not as Production component scale.
Future E-P3 smoke may apply one common positive scale sufficient for the
unchanged settling path, recording the scale as context metadata. Settling
output cannot prove hard safety.

### Invertible affine-transform audit

For an invertible affine transform `x' = A x + b`:

- injectivity is preserved because A is invertible;
- collinearity and non-degenerate triangle area are preserved because the
  oriented area is multiplied by `det(A)`, which is nonzero;
- if two shared-Node vectors satisfy `v = c w` for `c > 0`, then `A v = c A w`,
  so same-directed-ray equality is preserved;
- reflection can reverse orientation, but the current GEO-0/GEO-3 predicates
  do not assign meaning to clockwise versus counterclockwise orientation; and
- runtime usefulness still needs a separate numeric and downstream smoke.

Thus invertible affine normalization enlarges the diagnostic normalization
space without changing the current exact hard predicates. This design selects
only the explicit FP1 map above; it does not adopt arbitrary non-uniform
Production scaling or a visual aspect-ratio policy.

## Exact arithmetic and runtime materialization

E-P1 exact authority uses integer pairs and the common denominator D shown
above. Equality, determinant, positive scalar relation, injectivity, GEO-0,
and GEO-3 checks must use exact arithmetic. Floating-point rounding must never
overwrite an E-P1 result.

E-P3 may convert the exact pairs to JavaScript `Number` values using a
deterministic division by D. The harness must record whether every converted
pair remains finite and distinct in the bounded domain. The design domain is
the selected controls and scaling series N = 3, 5, 9, 17, 33, 65; it is not a
claim for arbitrary N. No runtime numeric type is changed.

For N <= 65, the exact numerator and denominator sizes are small, and the
normalized coordinate range is [0,1]. A future run must still measure runtime
distinctness rather than infer it from bounded magnitude. If conversion loses
distinctness, the family is `PF-NUMERIC-UNSUITABLE` for that run even if its
exact E-P1 result is valid.

## Generation complexity and assignment responsibility

FP1-NGP generation is direct O(N) time and O(N) candidate storage. Exact
integer arithmetic has bounded per-candidate numerator growth for a given N.
F1-ALG has the same direct generation order but an unbounded raw coordinate
envelope; F0 has direct generation with fixed-direction capacity.

Candidate generation cost and assignment cost remain separate:

```text
candidate family -> assignment policy -> seed positions -> unchanged settling
```

For FAM-E1 FP1-NGP, a deterministic injective materialization is sufficient
for E-P1 hard-floor testing because assignment cannot change the proven hard
classification. This is not a Production assignment choice.

`A0-CURRENT` remains the control that exposes degree/lexical mapping
sensitivity. `A1-HARD-SAFE` remains an experiment-only exact materializer for
mapping-sensitive families and for F0 comparisons. A1 does not define a
Production solver, ranking rule, or fallback.

## Layered future experiment model

The future run should preserve the R5 responsibility boundary:

```text
E-P0 candidate generation properties
  -> E-P1 exact pre-settling hard-safety oracle
  -> E-P2 normalized geometry diagnostics
  -> E-P3 unchanged-settling compatibility smoke
  -> E-P4 visual/manual evidence (not required here)
```

E-P1 is primary. E-P2 describes operational geometry without a scalar winner.
E-P3 asks only whether unchanged settling can consume the materialized points
without an obvious numeric or pathological failure. E-P4 remains outside the
design acceptance gate and no screenshots are required.

## Corpus and scaling controls

The later run reuses the accepted bounded corpus:

1. Lighthouse;
2. Ashen Crown;
3. G7;
4. K6;
5. K3;
6. zero-motif control;
7. true-symmetry control; and
8. one high-R-above-current-capacity control.

The selected high-R subset should be the smallest one that contrasts F0's
fixed-direction saturation with FP1's growing directional capacity. Use the
existing R=9 boundary witness and R=16 high-demand control, subject to the
baseline fixtures being available. The bounded scaling series N = 3, 5, 9, 17,
33, 65 observes growth without becoming an industrial benchmark. The previous
multi-high control is omitted unless the future harness shows it adds evidence
beyond G7 and K6; the purpose is not to duplicate prior runs.

The global exact oracle remains mandatory for K6 and every other motif-dense
control. Local direction descriptors alone cannot classify a family.

## Practical geometry diagnostics

The future run should record only diagnostics tied to concrete questions:

| Diagnostic | Question answered |
| --- | --- |
| Candidate count | Does the family emit enough positions? |
| Normalized bounding extent | Does coordinate envelope remain controlled? |
| Bounding-box aspect ratio | Does normalization create an extreme frame that must be recorded? |
| Maximum absolute coordinate | Is numeric magnitude bounded? |
| Exact minimum pairwise separation | Do distinct points approach exact collapse as N grows? |
| Exact maximum pairwise separation | What is the family spread in the common frame? |
| Distinct-ray counts from selected references | Does usable directional freedom grow rather than saturate? |
| Runtime finite/distinctness state | Does Number materialization preserve point identity? |
| Generation time/space metadata | Is direct generation still bounded? |

No diagnostic is combined into `practicalityScore`. No arbitrary threshold or
weighted metric selects a winner. Hard constraints are reported first, followed
by a profile of trade-offs. `visual = UNASSESSED` is the default status.

Insertion stability is **DEFERRED**. Comparing the family for N and N+1 may be
useful later, but coordinate-less Initial Placement has no incremental-stable
coordinate contract yet. Geometric symmetry is **DESIRABLE DIAGNOSTIC ONLY**,
not required. A canonical orientation is permitted for comparison; no “top
Node” or center role is semantic. A family may contain a center point, but
assignment and visual meaning of that point are separate questions.

## Minimal future matrix

The future experiment should run these cells and omit the rest:

| Cell | Family | Assignment | Purpose |
| --- | --- | --- | --- |
| M1 | F0-CURRENT | A0-CURRENT | Reproduce current family and assignment baseline |
| M2 | F0-CURRENT | A1-HARD-SAFE | Isolate F0 assignment loss from F0 family infeasibility |
| M3 | F1-ALG | Representative injective mapping | Confirm raw universal-safe diagnostic control |
| M4 | FP1-NGP | Representative injective mapping | Primary normalized-family hard and operational comparison |
| M5 | FP1-NGP | A1-compatible injective mapping, if cheap | Confirm the expected assignment no-op without Cartesian expansion |

M5 is a confirmation cell, not a second assignment algorithm. No every-family
by-every-assignment matrix is required. The contrasts distinguish family
infeasibility, assignment loss, assignment-insensitive safety, and coordinate
envelope practicality.

## Future output fields and result tables

Every machine-readable result should include:

- control ID and N;
- family ID and contract level;
- assignment policy;
- candidate count and exact normalized representation;
- exact hard-validity classification and F-SET status;
- assignment-sensitive YES/NO;
- exact GEO-0 and GEO-3 violation counts;
- directional-capacity descriptor;
- normalized extent and selected geometry diagnostics;
- runtime float finite/distinctness state;
- generation complexity metadata;
- E-P3 smoke state; and
- `visualState: UNASSESSED`.

The run should produce these qualitative tables without a scalar ranking:

| Family | Generator inputs | Candidate count | FAM class | UA level | Exact proof/oracle | Mapping-sensitive? |
| --- | --- | ---: | --- | --- | --- | --- |
| F0-CURRENT | Current context and N | N or more | FAM-E0/E2 | None claimed | Exact oracle | Yes |
| F1-ALG | N | N | FAM-E1 | UA-FINITE qualified | Proof plus oracle | No at current floor |
| FP1-NGP | N | N | FAM-E1 | UA-FINITE qualified | Affine invariance plus oracle | No at current floor |

| N/control | Directional freedom | Hard classification | Coordinate extent | Runtime distinctness |
| --- | --- | --- | --- | --- |
| Scaling series | Descriptor, not score | Exact status | Common normalized frame | Measured state |

| Family | Controlled extent | Numeric practicality | Generation cost | Assignment burden | Visual status |
| --- | --- | --- | --- | --- | --- |
| F0/F1/FP1 | Diagnostic profile | E-P3 state | O(N) family generation | Separate A0/A1 boundary | UNASSESSED |

## Stop conditions

The future experiment must stop interpretation if:

- F0 baseline does not reproduce the current source-equivalent result;
- the FP1 formula is not reproduced exactly;
- normalization breaks a promised invariant;
- required fixture provenance is missing;
- family and assignment variables cannot be isolated;
- the exact oracle is unavailable;
- source drift materially changes the current pipeline;
- runtime materialization is confused with exact hard authority; or
- an operational diagnostic is turned into a subjective visual acceptance gate.

## Hypotheses and falsification

### Hypotheses

- **H1:** At least one practical candidate retains current GEO-0/GEO-3
  totality without raw F1 coordinate growth.
- **H2:** FP1-NGP remains assignment-insensitive for the current floor.
- **H3:** A structured mapping-sensitive family, if revisited later, can be
  evaluated with exact hard-safe assignment without hiding family infeasibility.
- **H4:** FP1-NGP does not recreate F0's fixed-direction high-R saturation.
- **H5:** Normalized Number materialization preserves injectivity in the bounded
  experiment domain.
- **H6:** Candidate generation remains deterministic, ID-neutral, and bounded
  without random jitter.
- **H7:** Operational geometry diagnostics distinguish raw F1 from FP1-NGP
  without claiming visual quality.

### Falsification conditions

- **N1:** No practical candidate retains the current-floor guarantee.
- **N2:** FP1-NGP recreates fixed directional saturation.
- **N3:** ID spelling is required for family construction.
- **N4:** Runtime normalization breaks injectivity or exact classification.
- **N5:** Generation requires a visual score or random search.
- **N6:** Factorial/global assignment search is required to construct the family.
- **N7:** An allegedly assignment-insensitive family has a hard-invalid
  injective mapping.
- **N8:** A mapping-sensitive candidate loses F-SET on a predicted-feasible
  required control.
- **N9:** Diagnostics cannot distinguish practical properties without becoming
  subjective visual acceptance.
- **N10:** Source or accepted-baseline drift invalidates the design assumptions.

## Scope boundaries

The later run is intended to be disposable, headless, and offline. A temporary
experiment path may be used later, but this Design1 checkpoint creates no
worktree, clone, seam, runtime flag, or source change.

Routing, labels, crossings, bends, label clearance, route occupancy, settling
tuning, and component packing are outside the primary experiment. Unchanged
settling may be used only as E-P3 smoke. No visual score, aesthetic threshold,
or downstream “winner” is defined.

## Production and repository changes

Production Initial Placement: **NO CHANGE**.

No candidate generator, candidate vocabulary, F0, F1, A0, A1, UUID/Object ID
semantics, degree ranking, lexical ordering, settling, packing, routing,
labels, `seededPositions`, samples, UI, or runtime numeric type is changed.

No LiaisonScape source, sample, preview, or `ai-knowledge` file is changed by
this design. No F1 adoption or Production assignment is authorized.

Knowledge Candidate: **YES - HYPOTHESIS STRENGTHENED / REFINED**. Candidate
principles are that hard-safe existence witnesses and practical family design
are different stages; assignment-insensitive safety can coexist with separate
normalization evaluation; exact hard safety, runtime viability, and visual
quality should be separate evidence layers; fixed directional capacity is a
representational boundary distinct from aesthetics; and downstream floating
behavior must not replace exact hard authority. No promotion is made.

## Final classification

| Item | Result |
| --- | --- |
| Design ready | YES |
| Primary practical candidate selected | YES, FP1-NGP |
| Secondary candidate selected | NO |
| F0 control retained | YES |
| F1 control retained | YES; diagnostic only |
| F2 reused now | NO; deferred |
| Current-floor hard safety preserved by design | YES, qualified to GEO-0/GEO-3 and exact affine invariance |
| Assignment-insensitive direction retained | YES |
| Mapping-sensitive fallback retained | YES, through A1 experiment boundary |
| Visual quality solved | NO |
| Initial Placement solved | NO |
| Production family selected | NO |
| Next checkpoint auto-started | NO |

The exact next checkpoint is
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRACTICAL-CANDIDATE-FAMILY-EXPERIMENT1`.
