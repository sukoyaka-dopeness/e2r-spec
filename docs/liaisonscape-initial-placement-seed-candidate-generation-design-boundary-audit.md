# LiaisonScape Initial-placement Seed Candidate-generation Design Boundary Audit

Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-CANDIDATE-GENERATION-DESIGN-BOUNDARY-AUDIT1`
Date: 2026-09-02

## Result

Result: **CASE 11 / EXACT RESULT 1+2+3+4+5 / DECISION E**.

The first candidate-generation experiment can be bounded by a finite,
deterministic, ID-neutral capacity contract without selecting exact coordinates.
A generic N-scaled base family and an optional topology-adapted family may both
be compared under the same hard-feasibility oracle. General-position-like
families are a permitted diagnostic class, not a Production design.

The design boundary is clear enough for an **offline family experiment design**,
but not for a clean runtime family-only experiment: the current implementation
combines discovery, lexical ranking, candidate creation, assignment, settling,
and component packing. No Production source or test was changed.

## Contract layers

| Layer | Boundary |
|---|---|
| D1 input | `N` is the minimum graph-derived capacity parameter; topology may optionally adapt generation |
| D2 output | finite local candidate family with injective capacity and no fixed directional saturation |
| D3 assignment | separate Node-to-position responsibility; no named-ID privilege |
| D4 settling | separate derived movement/stability behavior |
| D5 presentation | routing, labels, crossings, and visual quality are downstream |
| D6 quality | near-collapse, compactness, symmetry preference, and aesthetics remain later objectives |

## Output contract audit

| Output property | Classification | Boundary |
|---|---|---|
| O0 finite | REQUIRED | finite input produces finite candidate family |
| O1 injective capacity | REQUIRED | at least `N` distinct usable positions; exact count is not required |
| O2 unlabeled/ID-neutral | REQUIRED | spelling and array order do not define geometry |
| O3 deterministic equivalence | REQUIRED | same inputs preserve the same family semantics; absolute coordinates need not match |
| O4 no fixed directional saturation | REQUIRED | capacity must not be capped by one repeated finite direction vocabulary |
| O5 hard feasibility | VALIDATION | global topology-derived assignment oracle, not an internal generator score |
| O6 non-collinear capacity | REQUIRED at demand level | enough capacity for GEO-0; no global no-three-collinear rule required |
| O7 shared-ray capacity | REQUIRED at demand level | enough capacity for GEO-3; validator establishes feasibility |
| O8 component locality | REQUIRED | unrelated components and discovery order cannot alter local family semantics |
| O9 translation frame | PERMITTED CONTEXT | normalized local family may be translated during packing |
| O10 positive scale | PERMITTED CONTEXT | exact predicates are scale-invariant; zero scale is invalid |
| O11 bounded extent | REQUIRED practical property | finite family must have finite extent; no numeric canvas bound selected |
| O12 duplicate points | FORBID | exact duplicate positions defeat injective capacity |
| O13 general position | PERMITTED/DIAGNOSTIC | useful N-only witness class, stronger than the exact motif requirement |
| O14 symmetry compatibility | REQUIRED boundary | no named orbit member receives semantic privilege; Euclidean symmetry is not required |
| O15 unused freedom | PERMITTED | offered capacity need not be consumed by every graph |
| O16 randomness | FORBID | no timestamp, random seed, Dataset ID, or crypto randomness |
| O17 N→N+1 continuity | FUTURE | not required by the exact safety floor |
| O18 capacity monotonicity | REQUIRED semantic direction | growth must not reintroduce artificial directional saturation; nested coordinates are not required |
| O19 topology optionality | REQUIRED openness | N-only and N+optional-topology modes share one oracle |
| O20 oracle separation | REQUIRED | generator need not solve the assignment internally |

## Count and equivalence boundaries

The minimum semantic is **at least N**, not exactly N. A larger candidate pool
is permitted if assignment remains separate; no evidence requires a particular
pool size or search strategy. Exact absolute x/y equality is not required.
Translation, rigid rotation, reflection, and positive uniform scale can be
treated as context equivalences when capacity and hard-feasibility semantics
are preserved. A canonical orientation is not required by GEO-0/GEO-3.

## Current source seams and confounding

`src/auto-layout.ts` derives undirected adjacency, discovers components, ranks
by degree with lexical-ID tie-breaks, creates a center plus repeated eight-ray
rings, performs bounded settling, and packs components by `componentLeft`.
There is no independent Production seam at which a candidate family can be
swapped while holding assignment and settling constant. This is a causal
confound, not evidence against the design contract.

| Question | Current assessment |
|---|---|
| Candidate family independently swappable in runtime? | PARTIAL/NO |
| Lighthouse interaction isolated? | NO in current runtime; offline witness is available |
| Ashen interaction isolated? | NO in current runtime; offline witness is available |
| Lexical ownership relevant? | YES to current assignment, FORBID to family semantics |
| Offline witness needed? | YES |

## Family classes and experiment options

| Class | Assessment | First-experiment suitability |
|---|---|---|
| F0 current fixed-phase family | RETAIN as negative baseline | comparison control only |
| F1 N-only general-position-like | RETAIN | strong offline safety-floor diagnostic |
| F2 N-only structured direction-diverse | RETAIN | permitted comparison; exact structure open |
| F3 topology-aware | RETAIN | optional comparison, not mandatory |
| F4 hybrid | OPEN | later, after causal variables are fixed |
| F5 witness-only | RETAIN | validator/control evidence, not generator design |

EXP-A (current vs diagnostic family), EXP-B (N-only vs optional topology),
EXP-C (family with assignment held fixed), and EXP-D (context transform
equivalence) are all suitable only as bounded offline comparisons. No parabola,
spiral, circle, golden-angle, force layout, jitter, slot formula, radius, or
phase is selected.

## MUST / MAY / MUST-NOT

**MUST:** finite output; at least N distinct usable positions; deterministic
ID-neutral semantics; no fixed directional saturation; component locality;
positive nonzero scale when scaled; validation by a topology-derived global
GEO-0/GEO-3 oracle; separate assignment, settling, and packing.

**MAY:** use topology descriptors for adaptation; expose more than N points;
use normalized local coordinates; use general-position-like or structured
direction-diverse diagnostic families; choose a context transform later.

**MUST-NOT:** use Entity ID spelling, array order, Dataset identity, metadata,
labels, locale, rendered dimensions, route geometry, stored sample coordinates,
previous generated state, component discovery order, or randomness as hidden
family semantics; adopt a coordinate formula or Production generator here.

## Contract comparison

| Contract | Assessment |
|---|---|
| D-A minimum generic family | RETAIN; exact semantic floor |
| D-B N-only base + optional topology | RETAIN; supported design boundary |
| D-C topology-aware required | REJECT; not evidenced as necessary |
| D-D generator + assignment co-design | REJECT for this checkpoint; confounded and premature |
| D-E existence-only | PARTIAL; useful validator boundary, insufficient practical design alone |
| D-F frame/scale unresolved | PARTIAL; context must remain explicit, but does not block offline design |

Minimal design contract:

> For coordinate-less Initial Placement, candidate generation should produce a
> finite, deterministic, ID-neutral local position family with at least
> injective position capacity and without a fixed directional-capacity
> saturation that can force avoidable GEO-0/GEO-3 failures. The family may be
> topology-agnostic or topology-aware. Node assignment, settling, component
> packing, and downstream routing/presentation remain separate. Hard
> admissibility is established by a topology-derived global feasibility check,
> not by a candidate-family quality score.

## Evidence boundary and next checkpoint

The preceding records provide the fixed eight-direction saturation result,
Lighthouse/Ashen current-invalid versus feasible-witness contrast, G7
`R(s)=16` failure, N-only general-position witnesses, ID/order invariance, and
zero-motif/symmetry controls. These support the contract but do not prove visual
quality or Production readiness.

First experiment readiness: **PARTIAL**. An offline family comparison is ready
to design, with family class as the variable and the feasibility oracle,
assignment interpretation, and context treatment fixed. A runtime family-only
experiment is not causally clean until assignment responsibility is separated.

No Production generator, candidate vocabulary, formula, assignment, settling,
packing, routing, feedback, label, sample, preview, schema, Core, Extension,
Handoff, Storage Research, or `ai-knowledge` change was made. The selected next
bounded checkpoint is exactly:

`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-CANDIDATE-FAMILY-OFFLINE-EXPERIMENT1-DESIGN1`

It is selected only and is not started by this record.
