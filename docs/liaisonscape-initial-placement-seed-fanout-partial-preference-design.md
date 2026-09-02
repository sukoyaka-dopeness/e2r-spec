# LiaisonScape Initial-placement Seed Fan-out Partial-preference Design

## Checkpoint

`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-FANOUT-PARTIAL-PREFERENCE-DESIGN1`

**Date:** 2026-09-02
**Status:** Complete, design-only
**Result:** `CASE 2 / EXACT RESULT 1+2+3+4+5+6+7+8+9+11 / DECISION B`

## Exact result and decision

1. **FAN-OUT SEMANTIC EVIDENCE** - The complete circular gap vector is not a
   componentwise preference axis because its sum is fixed at `2pi`.
2. **FAN-OUT SEMANTIC EVIDENCE** - The narrowest positive circular gap has a
   defensible local bottleneck-relief direction for a fixed transported
   shared Node and fixed relevant neighbor set.
3. **FAN-OUT SEMANTIC EVIDENCE** - The full gap sequence and bottleneck
   identity remain descriptive context rather than hidden score terms.
4. **FAN-OUT SEMANTIC EVIDENCE** - Bottleneck identity may move without
   invalidating the local-relief relation.
5. **FAN-OUT SEMANTIC EVIDENCE** - Multiple shared-Node records can remain
   separate in PP-M3; conflicts produce incomparability rather than an
   aggregate score.
6. **EXACTNESS EVIDENCE** - FAN-P1 can be specified without epsilon for an
   exact rational/integer geometry representation, but the representation and
   comparator contract is not yet registered for all supported candidate
   families and runtime geometry forms.
7. **EQUIVARIANCE EVIDENCE** - The fan-out relation is invariant under
   translation, uniform scale, rotation, reflection, and topology/orbit
   transport within its contract.
8. **BOUNDARY PRESERVED** - Fan-out capacity, fan-out preference, routing,
   labels, and visual quality remain separate responsibilities.
9. **BOUNDARY PRESERVED** - No equal-spacing ideal, minimum-angle threshold,
   weight, epsilon, or total fan-out score was introduced.
11. **PARTIAL** - A narrower exact angular representation/comparator design
    remains before registration.

**Decision B:** exact angular comparison and its representation contract need a
narrower design first.

Selected next checkpoint:

`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-EXACT-ANGULAR-GAP-COMPARATOR-DESIGN1`

FAN-P1 is therefore **semantically promising but not registered**. This result
does not authorize a placement experiment, objective implementation, or
Production assignment policy.

## Scope and preceding design

The preceding checkpoint was
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-STRUCTURAL-ASSIGNMENT-PARTIAL-PREFERENCE-DESIGN1`,
recorded by commit `38c448b`. It selected PP-M3 as a generic, scalar-free
partial-preference frame. Hard admissibility precedes preference; normalized
motif altitude is the only conditionally registered structural axis. Fan-out
was deliberately left descriptive because the earlier full-vector,
lexicographic, and dispersion proposals were not defensible.

This checkpoint narrows that open seam. It does not reopen the settled
boundaries:

- GEO-0 and GEO-3 remain exact hard constraints;
- no minimum-angle floor, near-degeneracy threshold, epsilon, or tolerance is
  added;
- no scalar quality score, weighted objective, or total ranking is introduced;
- fan-out capacity is not fan-out distribution preference;
- candidate family and assignment objective remain separate;
- routing, labels, crossings, curvature, self-loops, and visual acceptance
  remain downstream;
- total edge length remains secondary; and
- K3 must remain orbit-safe.

## Source and evidence reconciliation

The accepted LiaisonScape Initial Placement source remains
`fd563340625fd3d88dc25baedc93c4f8fe69e5e7` with no material source drift in
`src/auto-layout.ts`. The preceding topology-aware assignment, structural
quality, practical-family, role-symmetry, and assignment-equivariance records
remain the evidence base. No new runner or experiment was required.

The evidence has two useful controls:

| Evidence | Relevance to this design |
|---|---|
| Lighthouse | A small single-motif control where local records can be kept separate. |
| Ashen Crown | One overlap cluster with multiple shared Nodes and structural trade-offs; prevents hidden global aggregation. |
| K3 | A complete three-Node orbit control; prevents named-node or candidate-index privilege. |

The Ashen evidence shows that local descriptors can trade off. It does not
establish a global fan-out ideal. The high-R-9 control remains optional for a
future experiment and was not rerun here.

## Fan-out domain

A fan-out record is scoped to:

```text
(shared Node V,
 transported relevant motif-neighbor set N(V),
 pre-settling assignment A)
```

The relevant set is:

```text
MotifFanoutNeighbors(V)
```

meaning the distinct Nodes participating with `V` in the accepted,
topology-derived motif inventory for the compared overlap-cluster scope.
This is the smallest set supported by the existing profile evidence and GEO-3
ownership. It is not the set of every graph neighbor merely because an edge
exists.

Boundary or context neighbors outside the accepted motif inventory remain
context. They may be reported in a profile, but they do not silently enlarge
the preference coverage. Multiple Relations to the same neighboring Node do
not create multiple geometric rays; a ray is defined by a distinct relevant
neighbor Node.

## Ray identity and comparison preconditions

Each ray is identified by the transported identity of its relevant neighbor
Node, or by the corresponding topology orbit/class under an explicit graph
isomorphism. It is never identified by angle rank, candidate index, input-array
order, UUID spelling, label text, or a literal FP1 slot.

FAN-P1 is applicable to a comparison only when all of the following hold:

1. the graph topology is the same or has an explicit isomorphism transport;
2. the candidate-family contract is the same;
3. both assignments are at the same pre-settling stage;
4. the shared Node is the same or has a transported counterpart;
5. the relevant motif-neighbor set is the same after transport;
6. the ray count is the same applicable class;
7. every involved ray vector is non-zero;
8. both complete assignments are hard-valid; and
9. GEO-3 ensures that no two relevant neighbors occupy the same positive
   directed ray.

If transport, coverage, exactness, or a required descriptor is unresolved, the
comparison is `PP-UNKNOWN`, not an approximate preference. Hard-invalid
assignments are ineligible and are not dominated.

## Applicability by ray count

The ray-count classes are intentionally not collapsed:

| Ray count | Semantic status |
|---|---|
| `k = 0` | `PP-NOT-APPLICABLE`; there is no fan-out sector. |
| `k = 1` | `PP-NOT-APPLICABLE`; one ray has no inter-ray bottleneck. |
| `k = 2` | A distinct two-ray angular-separation control is conceptually possible, but it is not merged with ordinary multi-ray fan-out and is not currently registered. |
| `k >= 3` | Ordinary circular fan-out bottleneck domain; FAN-P1 is the candidate axis. |

For `k = 2`, the two positive gaps are complementary and the smaller one is
at most `pi`. This makes a minimum-gap record mathematically definable, but
the interpretation is a separation between two rays rather than a multi-ray
fan-out bottleneck. A later coverage/comparator contract must explicitly say
whether that control is registered alongside `k >= 3`; it must not be inferred
from the `k >= 3` rule.

## Circular ordering and gap definition

At `V`, each ray is the non-zero vector

```text
r_i = position(neighbor_i) - position(V)
```

The rays are ordered by their geometry-derived cyclic direction around `V`.
The order must not depend on candidate index, input order, labels, or UUID
spelling. Either global orientation may be used; reflection reverses the
cyclic order but preserves the multiset of gaps.

For the cyclic order `r_1, ..., r_k`, with `r_(k+1) = r_1`, define

```text
g_i = positive directed angular separation from r_i to r_(i+1)
```

under one consistent orientation. With GEO-3 and non-zero rays:

```text
0 < g_i < 2pi
sum(g_i) = 2pi
```

The wrap-around sector is a normal gap. A gap may be larger than `pi`; a
half-plane-only comparator is therefore insufficient.

## Fixed-sum boundary

The complete vector `(g_1, ..., g_k)` cannot be a componentwise improvement
axis: all components sum to `2pi`, so making every component strictly larger is
impossible. Sorted-gap lexicographic order would conceal an arbitrary priority
among sectors. Average, variance, entropy, standard deviation, majorization,
uniformity, and weighted dispersion would import an unsupported equal-spacing
objective.

The complete vector remains valuable diagnostic profile data. It is not itself
a registered preference axis.

## FAN-P1 minimum-gap semantics

The narrow candidate relation is:

```text
g_min(A, V) = min_i g_i

FanoutPref(X, Y, V) iff
    g_min(X, V) > g_min(Y, V)
```

This means only:

> X relieves the narrowest local angular bottleneck around the same shared
> Node and the same transported relevant motif-neighbor set.

It does not mean that X is more uniform, more balanced, more readable,
globally optimal, or visually better. A larger minimum may require one or
more non-minimum sectors to shrink. That fixed-sum consequence is accepted as
part of the narrow local claim rather than hidden as a trade-off over every
pair gap.

The direction is strict for the candidate axis: equal `g_min` contributes no
strict improvement; unequal values can produce a local dominance contribution.
No threshold is applied.

## Bottleneck identity, ties, and pair-specific changes

The profile should retain the identity of every pair realizing `g_min`,
including tied minima, and the multiplicity of the tie. Those fields explain
the result but do not create additional preference axes.

- If `g_min` increases while the bottleneck pair changes, FAN-P1 still reports
  local relief under the same coverage contract.
- A moving identity is not automatically `UNKNOWN` and does not invalidate
  transitivity, because the registered value is the minimum magnitude, not a
  named pair.
- Equal minima with changed multiplicity are preference-equivalent on FAN-P1;
  the multiplicity change remains descriptive.
- A non-minimum pair shrinking does not create a fan-out trade-off inside
  FAN-P1. Pair-specific gap values have not been granted preference semantics.

This is deliberately narrower than a full pairwise relation. If future
evidence grants pair-specific gap preference, that would be a separate axis
and conflicts could become `PP-INCOMPARABLE`; it must not be smuggled into
FAN-P1.

## Profile versus preference

| Fan-out profile information | FAN-P1 preference role |
|---|---|
| Complete cyclic gap sequence | Descriptive context only |
| Pair identities and wrap-around identity | Descriptive context only |
| `g_min` magnitude | Candidate local preference value |
| Narrowest-pair identity | Explanation/context; not a key |
| Minimum multiplicity | Explanation/context; not a key |
| Shared Node and cluster scope | Applicability/coverage identity |
| Fan-out capacity | Separate candidate-family capacity descriptor |

Keeping the profile preserves evidence for later audits without turning every
measured value into a hidden objective.

## Exact angular comparison and representation boundary

FAN-P1 has no semantic need for epsilon. A future implementation must be able
to decide exact ordering and equality of two positive directed gaps without
computing approximate `atan2` values and comparing them with a tolerance.

For rational or integer coordinate representations, the contract can preserve
the mathematical information needed by an exact predicate, including:

- the ray vector components;
- half-plane or quadrant classification;
- orientation/cross-product signs;
- dot-product signs where needed;
- exact rational cross multiplication; and
- an exact algebraic comparison of the normalized dot/cross information for
  angles in `(0, 2pi)`.

No one implementation technique is selected here. The essential requirement is
that normalization and wrap-around do not discard the sign and ordering
information needed to distinguish a large gap from its complementary small
gap. A float-only, rendered-browser, or otherwise approximate geometry path
without an exactness contract cannot register FAN-P1; it yields `PP-UNKNOWN`
(`UNK-4`) or leaves fan-out descriptive.

This is the bounded unresolved issue behind Decision B. The semantic direction
is coherent, but the accepted family and all future candidate representations
must expose a common exact comparison seam before the axis is registered.

## Invariance and family independence

| Transformation or condition | FAN-P1 status | Reason |
|---|---|---|
| Translation | Invariant | Ray vectors are unchanged. |
| Uniform positive scale | Invariant | Directions and angular gaps are unchanged. |
| Rotation | Invariant | All directions rotate together. |
| Reflection | Invariant at gap-multiset level | Cyclic orientation reverses, but the gap multiset and minimum are unchanged. |
| Non-uniform affine transform | Not invariant | It changes angular geometry and is not a rigid-motion equivalence. |
| Topology isomorphism transport | Invariant under explicit transport | Neighbor identities and shared-Node scope transport together. |
| Automorphism/orbit transport | Invariant modulo orbit | No named Node receives privilege. |
| Candidate-family change | Semantic contract is family-independent in form | Applicability and exact representation must still be declared by each family. |
| FP1 slot/index change | No semantic effect | Index is operational, never a fan-out identity. |

Thus the comparator can generalize beyond FP1 without making FP1 asymmetry
disappear. The existing FP1 candidate family remains an open geometry-
coverage limitation, not a reason to bind the semantics to candidate indices.

## GEO-3 relationship

GEO-3 is a prerequisite, not a fan-out preference. It supplies the exact
non-coincidence condition needed for positive circular gaps. FAN-P1 does not
raise GEO-3 into a minimum-angle objective and does not enlarge the hard
floor. A hard GEO-3 failure remains inadmissible regardless of `g_min`.

## Multiple shared Nodes and PP-M3 composition

For an assignment with multiple shared Nodes, retain separate records:

```text
(shared Node V, transported N(V), g_min(A,V))
```

Do not sum, average, minimize, maximize, or otherwise aggregate these records
into a graph-level fan-out score. Under PP-M3, each applicable registered
record is compared at its transported scope. If one assignment improves one
shared-Node record and worsens another, the result is
`PP-INCOMPARABLE`; it is not resolved by a hidden priority.

The same rule applies across axes. If normalized altitude improves while
FAN-P1 worsens, or vice versa, the result is `PP-INCOMPARABLE` once FAN-P1 is
registered. If a required fan-out comparator is unavailable, the result is
`PP-UNKNOWN`. If neither side has an applicable record, the result is
`PP-NOT-APPLICABLE`. No altitude-first lexicographic rule and no weighted sum
is allowed.

## Candidate models FAN-M0..FAN-M4

| Model | Assessment |
|---|---|
| FAN-M0: descriptive profile plus GEO-3 hard gate | Supported baseline and safe fallback. |
| FAN-M1: complete gap-vector componentwise preference | Rejected by the fixed-sum identity. |
| FAN-M2: minimum-gap local bottleneck relief | Semantically promising and narrow; this is the FAN-P1 candidate. |
| FAN-M3: FAN-P1 with exact angular representation | Design target; exact contract remains the next checkpoint. |
| FAN-M4: uniformity, sorted lexicographic, majorization, or weighted dispersion | Rejected or out of scope because no equal-spacing objective is accepted. |

The selected model is the FAN-M0 baseline plus a **partial, unregistered
FAN-M2/FAN-M3 seam**. Fan-out remains descriptive until the exact seam closes.

## Control reasoning

### K3

K3 is one complete three-Node topology orbit. Literal mappings may name
different Nodes, but transported orbit records remain preference-equivalent.
No named Node, array position, UUID spelling, or candidate index receives a
special fan-out role. Any future FAN-P1 comparison must be performed modulo
the K3 orbit.

### Ashen Crown

Ashen is the relevant overlap-cluster control. Its shared Nodes and local
fan-out records must remain separate. Existing Darius/Elara assignment
swaps already show structural trade-offs in the same cluster. The evidence
supports a local bottleneck descriptor but does not support a cluster-wide
fan-out winner. A future FAN-P1 result may therefore be incomparable across
shared-Node records without contradiction.

### High-R-9

High-R-9 is **OPTIONAL**, not required for the next exact comparator design.
It may be useful later as an independent capacity-versus-distribution control
if a bounded objective experiment needs more fan-out complexity. Ashen already
supplies the current overlap-cluster evidence, so no rerun was justified here.

### Synthetic controls

- **k = 2:** gaps are `g` and `2pi-g`; the smaller gap is a possible two-ray
  separation descriptor, but its applicability class is separate and remains
  unregistered.
- **k = 3:** three positive gaps sum to `2pi`; increasing the smallest gap can
  shrink another sector, yet still has the narrow local meaning of relieving
  the worst sector. It does not assert equal spacing.
- **Moving bottleneck:** `g_min` can increase while its realizing pair changes;
  the result remains local relief, with identity retained as context.
- **Multiple minima:** if two equal minima become one larger minimum, the
  registered direction is improved; the changed tie multiplicity is not a
  hidden secondary preference.

## Required global PP table

The following is the PP-M3 composition once FAN-P1 is registered under its
fixed coverage contract. `equal` means equal on the applicable axis; `N/A`
means shared non-applicability.

| Altitude relation | Fan-out relation | Global result |
|---|---|---|
| equal | equal | `PP-PREF-EQUIVALENT` for these axes |
| improves | equal | altitude-side dominance contribution |
| equal | improves | fan-out-side dominance contribution |
| improves | worsens | `PP-INCOMPARABLE` |
| worsens | improves | `PP-INCOMPARABLE` |
| unknown | improves | `PP-UNKNOWN` if altitude is required |
| N/A | improves | fan-out-side dominance contribution if coverage permits |
| N/A | N/A | `PP-NOT-APPLICABLE` |

This table is not a total ranking. An axis unavailable because exactness or
coverage is unresolved is `UNKNOWN`, not equal or zero.

## Formal properties

For one fixed graph, family, stage, transported coverage, applicable ray-count
class, and exact representation contract:

| Property | Supported? | Conditions |
|---|---|---|
| Reflexive non-strict relation | Yes | `g_min(X,V) >= g_min(X,V)` for the same eligible record. |
| Strict irreflexivity | Yes | `g_min(X,V) > g_min(X,V)` is false. |
| Transitivity | Yes, conditionally | Strict numeric `>` is transitive under fixed coverage and exact comparison. |
| Literal antisymmetry | No | Distinct mappings can have equal `g_min` and different profiles. |
| Antisymmetry of preference-equivalence classes | Yes | After quotienting by equal registered values and accepted transport. |
| Totality | No | Missing, incomparable axes, multiple records, and non-registered profiles remain. |
| Orbit invariance | Yes, conditionally | Explicit topology/isomorphism and automorphism transport must be valid. |

Across changing coverage, unresolved transport, or missing exactness, the
relation is not asserted; the outcome is `PP-UNKNOWN`.

## Central questions

| Question | Answer |
|---|---|
| Q1. What exact neighbor set defines fan-out? | Distinct Nodes in `MotifFanoutNeighbors(V)` from the accepted topology-derived motif inventory at the compared cluster scope. |
| Q2. What ray counts apply? | `k=0` and `k=1` are N/A; `k=2` is a separate conceptual control; `k>=3` is ordinary fan-out. Only the latter is the current target. |
| Q3. What is the preference value? | The smallest positive circular gap `g_min(A,V)`. |
| Q4. Why only local relief? | It names the currently narrowest sector and makes no claim about the remaining sectors. |
| Q5. Must bottleneck identity remain? | No. The same coverage is required, but the realizing pair may move. |
| Q6. Does multiplicity participate? | No. It remains descriptive context. |
| Q7. Does a non-minimum shrink create a trade-off? | Not within FAN-P1; pair-specific gaps are not registered axes. |
| Q8. Can comparison avoid epsilon? | Yes in principle for exact rational/integer geometry; not yet as a registered cross-family contract. |
| Q9. What representation is required? | Exact ray components and predicates preserving half-plane, orientation, dot/cross, wrap-around, and exact ordering information. |
| Q10. What invariances hold? | Translation, uniform scale, rotation, reflection at multiset level, and explicit topology/orbit transport. |
| Q11. Is it family-independent? | Yes in semantic form, conditionally on each family exposing the same applicability and exactness contract. |
| Q12. How does it relate to GEO-3? | GEO-3 is a hard prerequisite for positive gaps; it is not a minimum-angle preference. |
| Q13. How do multiple shared Nodes combine? | Separate records; no aggregation; conflict is `PP-INCOMPARABLE`. |
| Q14. How does it conflict with altitude? | Defined opposite directions are `PP-INCOMPARABLE`; unresolved fan-out is `PP-UNKNOWN`. |
| Q15. Does K3 preserve orbit semantics? | Yes, under transported orbit comparison; no named privilege. |
| Q16. Is high-R-9 required next? | No; optional future control only. |
| Q17. Is FAN-P1 ready to register? | No. It is `FANOUT-PARTIAL` pending exact representation/comparator design. |
| Q18. What is the smallest next checkpoint? | `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-EXACT-ANGULAR-GAP-COMPARATOR-DESIGN1`. |

## Hypotheses

| Hypothesis | Result |
|---|---|
| H1. The full gap vector cannot be componentwise improved. | **Supported** by the fixed sum. |
| H2. `g_min` can represent one local bottleneck. | **Supported conditionally** for fixed coverage. |
| H3. Larger `g_min` has a local monotonic direction. | **Supported conditionally**; no global claim follows. |
| H4. Full identities can remain descriptive. | **Supported**; only `g_min` is the candidate axis. |
| H5. Bottleneck identity may move. | **Supported**; identity is context, not the key. |
| H6. Multiple shared Nodes need no aggregation. | **Supported**; conflicts remain incomparable. |
| H7. FAN-P1 can compose with altitude without weights. | **Supported conditionally** within PP-M3. |
| H8. Exact comparison can avoid epsilon. | **Supported in principle** for exact representations. |
| H9. Missing exactness must be unknown, not approximate. | **Supported** by the PP-M3 missingness contract. |
| H10. Semantics need not reference FP1 order. | **Supported**. |
| H11. K3 orbit mappings remain equivalent. | **Supported** by the existing K3 control. |
| H12. Capacity and distribution remain separate. | **Supported**. |

## Falsification conditions

| Condition | Current assessment |
|---|---|
| N1. No stable motif-neighbor set exists. | Not triggered; prior inventory and cluster evidence provide a bounded set. |
| N2. `g_min` requires equal-spacing preference. | Not triggered; the claim is limited to worst-sector relief. |
| N3. Pair-specific changes must be preference records. | Not triggered by prior evidence; would require a separate axis if later supported. |
| N4. Identity movement breaks transitivity. | Not triggered; the value is magnitude-only under fixed coverage. |
| N5. `k=2` contradicts the semantics. | Unresolved only as applicability; kept separate rather than merged. |
| N6. Exact ordering requires epsilon. | Not triggered for rational/integer geometry; unresolved for runtime family contract. |
| N7. Representation binds semantics to FP1. | Not triggered; the semantic contract is family-independent in form. |
| N8. Orbit transport breaks comparison. | Not triggered by K3 evidence. |
| N9. Multiple Nodes require hidden aggregation. | Not triggered; separate records are sufficient. |
| N10. Altitude/fan-out conflicts cannot be represented. | Not triggered; PP-INCOMPARABLE is defined. |
| N11. Existing profiles lack identity/coverage. | Not triggered; the accepted inventory is sufficient for design. |
| N12. Baseline/evidence cannot be reconciled. | Not triggered; source and prior records reconcile. |

## Readiness and closure

**FANOUT-PARTIAL.** The narrowest-gap idea is a coherent local semantic seam,
but registration is not justified until the exact angular comparator and
representation boundary are specified for the supported geometry forms. Until
then fan-out remains descriptive in experiments and Production.

The knowledge candidate is **YES - hypothesis strengthened/refined**:

- fixed-sum circular distributions cannot be componentwise optimized;
- local bottleneck relief is distinct from global uniformity;
- a complete profile can remain descriptive while one bounded value is a
  candidate preference axis;
- exactness failure must produce `UNKNOWN`, not epsilon ranking; and
- multiple local records can remain separate and incomparable.

No `ai-knowledge` promotion or modification was made.

### CASE assessment

| Case | Assessment |
|---|---|
| CASE 1 | Not selected: exact registration seam is not closed. |
| CASE 2 | **Selected:** semantics coherent; exact representation/comparator design remains. |
| CASE 3 | Kept as a bounded sub-question for `k=2`/coverage, not the primary blocker. |
| CASE 4 | Not triggered: identity and pair-specific changes remain descriptive. |
| CASE 5 | Not triggered: no uniformity objective was introduced. |
| CASE 6 | Not triggered: profile and coverage are sufficient for this design. |
| CASE 7 | Not triggered: semantics does not depend on FP1 indices. |
| CASE 8 | Not selected: fan-out design must close before choosing the next objective axis. |
| CASE 9 | Not selected: the remaining issue is bounded and exactness-specific. |
| CASE 10 | Not selected: prior evidence and source reconcile. |

### Production boundary

The following were **not** changed or selected:

- Production Initial Placement, candidate generation, candidate family, or
  assignment;
- materializer, solver, settling, routing, labels, UI, or visual behavior;
- fan-out or structural objective implementation;
- FP1 or F2;
- samples, Core, Extension, schema, or Dataset semantics; and
- browser/server/manual visual validation.

This record is an unpushed documentation checkpoint. The next checkpoint is
selected but not auto-started.
