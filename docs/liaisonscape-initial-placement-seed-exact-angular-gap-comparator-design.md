# LiaisonScape Initial-placement Seed Exact Angular-gap Comparator Design

## Checkpoint

`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-EXACT-ANGULAR-GAP-COMPARATOR-DESIGN1`

**Date:** 2026-09-02
**Status:** Complete, design-only
**Result:** `CASE 1 / EXACT RESULT 1+2+3+4+5+6+7+8+9+10 / DECISION A`

## Exact result and decision

1. **EXACTNESS EVIDENCE** - Ray cyclic order can be defined without `atan2`
   using an exact half-plane and orientation predicate.
2. **EXACTNESS EVIDENCE** - Directed angular gaps can be classified exactly as
   `<pi`, `pi`, or `>pi` using cross/dot signs.
3. **EXACTNESS EVIDENCE** - Same-class gap magnitudes can be compared through
   exact normalized-dot relations without square roots.
4. **EXACTNESS EVIDENCE** - Dot sign and angle class preserve the information
   that would otherwise be lost by squaring.
5. **EXACTNESS EVIDENCE** - The complementary-angle cosine ambiguity is
   resolved by directed-angle classification.
6. **REPRESENTATION EVIDENCE** - The exact FP1 rational geometry supplies the
   required exact predicates after positive denominator clearing.
7. **REPRESENTATION EVIDENCE** - Unsupported geometry representations return
   `UNKNOWN` rather than an epsilon ranking.
8. **BOUNDARY PRESERVED** - The comparator depends on resulting geometry, not
   FP1 index, candidate order, labels, routing, or visual state.
9. **BOUNDARY PRESERVED** - No `atan2` ordering, epsilon, minimum angle, or
   angular quality score was introduced.
10. **DESIGN READY** - The exact comparator contract is sufficient to register
    FAN-P1 for the next bounded exact-rational FP1 structural-objective
    experiment.

**Decision A:** the exact angular comparator is ready for bounded research;
register FAN-P1 for that research seam and design the bounded structural-
objective experiment next.

Selected next checkpoint:

`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-STRUCTURAL-ASSIGNMENT-OBJECTIVE-EXPERIMENT-DESIGN1`

This is not a Production registration. No comparator implementation,
placement experiment, candidate-family change, or runtime behavior change was
made.

## Preceding Fan-out Design1

The preceding checkpoint was
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-FANOUT-PARTIAL-PREFERENCE-DESIGN1`,
recorded by commit `9e56774`. It established FAN-P1 as a narrow local
candidate:

```text
g_min(A,V) = minimum positive circular gap around V
FanoutPref(X,Y,V) iff g_min(X,V) > g_min(Y,V)
```

The preceding result kept the full gap sequence, bottleneck identity, tie
multiplicity, and pair-specific gaps descriptive. It made `k=0/1` not
applicable, kept `k=2` as a separate unregistered class, and identified exact
angular representation as the only remaining blocker.

The present design closes that blocker for an explicitly bounded exact FP1
research domain. It does not reopen the settled boundaries:

- GEO-0 and GEO-3 remain exact hard constraints;
- no minimum-angle threshold, near-degeneracy threshold, epsilon, or tolerance
  is added;
- no scalar, weighted, equal-spacing, or total fan-out objective is added;
- multiple shared Nodes remain separate PP-M3 records;
- fan-out capacity remains distinct from fan-out distribution;
- altitude and fan-out conflict through `PP-INCOMPARABLE` once both are
  registered;
- unsupported exactness produces `PP-UNKNOWN`/`UNK-4`; and
- routing, labels, crossings, curvature, self-loops, settling, and visual
  acceptance remain downstream.

## Source and baseline reconciliation

The accepted LiaisonScape Initial Placement source remains
`fd563340625fd3d88dc25baedc93c4f8fe69e5e7`, with no material drift in
`src/auto-layout.ts`. The exact FP1 evidence is diagnostic evidence from the
prior practical-family and assignment-seam records, not a claim that the live
Production source already uses this comparator.

The prior exact evidence distinguishes:

| Evidence | Exactness relevance |
|---|---|
| `F1-ALG` | Integer diagnostic points `P_i=(i,i^2)` and exact GEO-0/GEO-3 predicates. |
| `FP1-NGP` | Rational normalized parabola `P_i=(i/m,(i/m)^2)` for `m=N-1`; bounded research family. |
| `F0-CURRENT` | Source-exact ring family with `Q(sqrt(2))`-style constants in the diagnostic oracle; not required for current FP1 registration. |
| Runtime/rendered coordinates | Approximate operational geometry; not used to close exact research registration. |

No new experiment or source mirror was created. No baseline contradiction was
found, so the checkpoint is not blocked.

## Comparator scope and exact geometry object

A ray from shared Node `V` to relevant neighbor `N` is represented by the
non-zero vector:

```text
r = (dx, dy)
dx = x_N - x_V
dy = y_N - y_V
```

The semantic comparator needs only the exact components of `r` and the
ability to perform exact sign, equality, addition/multiplication, and order
predicates. It does not need absolute coordinates after ray construction,
candidate index, Node label, UUID spelling, viewport coordinates, CSS pixels,
or rendered positions.

For the registered research domain, `dx` and `dy` are exact integers or exact
rationals. The vector `(0,0)` is invalid. Same-positive-ray pairs are rejected
by GEO-3 for distinct relevant neighbors; opposite rays remain valid.

## Representation capability levels

| Capability | Exact contract | FAN-P1 status |
|---|---|---|
| `ANG-REP-0` exact integer | Components are mathematical integers; arbitrary/checkable exact products and comparisons are available. | Supported. |
| `ANG-REP-1` exact rational | Components are exact `p/q` values with non-zero denominators; common positive denominator clearing is available. | Supported and sufficient for bounded FP1 research. |
| `ANG-REP-2` exact algebraic | Exact sign/equality/order and the required products are exposed, or equivalent certified predicates exist. | Semantically supported through a capability interface; no library or implementation selected. |
| `ANG-REP-3` finite IEEE binary float only | Stored bit patterns are dyadic rationals, but construction may have rounded away intended source geometry. | Separate future contract; not required for current bounded FP1 research and not Production-ready. |
| `ANG-REP-4` rendered/browser coordinates only | Pixel/layout output lacks the required source exactness authority. | Unsupported; `PP-UNKNOWN`/unregistered. |

`ANG-REP-3` requires an explicit distinction. Exact comparison of the stored
dyadic values is not the same as exact comparison of the intended geometry
before rounding. This design does not silently treat those as equivalent.

## Current FP1 exact representation

For `N >= 2`, the accepted normalized FP1 family is:

```text
m = N - 1
P_i = (i/m, (i/m)^2),  i = 0, ..., m
```

Each coordinate is rational. A common positive denominator gives an exact
integer representative:

```text
P_i = (i*m / m^2, i^2 / m^2)
integer representative: (i*m, i^2)
```

For two points, subtracting them preserves rationality. Clearing the positive
common denominator of the resulting ray produces an exact integer vector.
Therefore the current FP1 diagnostics provide the `ANG-REP-0/1` information
needed by the comparator. The `N=1` special case has one point and cannot
produce an applicable multi-ray fan-out record.

This proves research feasibility, not visual suitability or Production
readiness. The comparator is registered below only for an exact FP1 diagnostic
experiment with an explicit adapter.

## Positive denominator clearing

For a rational ray `r=(dx,dy)`, choose a positive common denominator `D` and
form:

```text
r' = D*r
D > 0
```

This preserves both direction and every angular relation because positive
scaling does not change a ray. It also preserves cross-product zero/sign and
dot-product zero/sign up to a positive factor. Negative scaling is forbidden:
it reverses the ray by `pi` and changes the directed-angle meaning.

The adapter must reduce or otherwise track exact rational values consistently,
but reduction is an arithmetic concern, not a semantic preference. A common
denominator may be selected per ray; both rays need not share one denominator
before exact dot/cross comparison.

## Exact cyclic ray order

Use a positive-x-axis cut and a counter-clockwise representative. Define:

```text
half(r) = 0 if dy > 0
          0 if dy = 0 and dx >= 0
          1 otherwise
```

For two non-zero rays `a` and `b`:

1. order by `half(a)` before `half(b)`;
2. when the half-plane classes match, `cross(a,b) > 0` means `a` precedes
   `b` in the counter-clockwise order;
3. `cross(a,b) = 0` is either the same positive ray or the opposite ray and
   must be resolved with `dot(a,b)` and the half-plane boundary.

Under the GEO-3 precondition, distinct relevant neighbors cannot produce the
same positive ray. Opposite rays have different half-plane classes, so the
positive-x cut orders them without ambiguity. The positive x-axis is in the
first class; the negative x-axis is in the second. Positive and negative
vertical rays fall in the expected upper/lower classes.

Thus the comparator is a strict total order over distinct directed rays after
same-positive-ray exclusion. It is deterministic but does not assign semantic
meaning to the resulting rank.

## Same-direction, opposite-direction, and zero-vector handling

| Predicate | Meaning | Status |
|---|---|---|
| `cross(a,b)=0` and `dot(a,b)>0` | Same positive ray | GEO-3 violation for distinct relevant neighbors; hard-invalid. |
| `cross(a,b)=0` and `dot(a,b)<0` | Opposite rays | Valid; directed gap may be exactly `pi`. |
| `a=(0,0)` or `b=(0,0)` | Zero vector | Invalid ray; no fan-out comparison. |
| `cross(a,b)=0` and `dot(a,b)=0` | Impossible for two non-zero Euclidean rays | Invalid representation/input. |

Same positive rays are not converted to a zero angular gap and then compared
as a preference value. The hard GEO-3 gate runs first.

## Directed-angle classification

For an ordered pair `(a,b)`, define the positive counter-clockwise directed
angle `theta(a,b)` in `(0,2pi)` after same-ray exclusion. Exact classification
is:

| Exact predicate | Class |
|---|---|
| `cross(a,b) > 0` | `ANG-C0`: `0 < theta < pi` |
| `cross(a,b) = 0` and `dot(a,b) < 0` | `ANG-C1`: `theta = pi` |
| `cross(a,b) < 0` | `ANG-C2`: `pi < theta < 2pi` |

The cross sign is sufficient for the two open classes because the pair is
already known to be non-zero and not the same positive ray. The dot sign
resolves the collinear case exactly.

## Exact directed-gap comparison

The semantic operation is:

```text
CompareDirectedGap(a,b,c,d) -> LESS | EQUAL | GREATER | UNKNOWN
```

It compares `theta(a,b)` with `theta(c,d)` without materializing either
angle. The procedure is:

1. reject zero vectors and same-positive-ray pairs;
2. classify both gaps as `ANG-C0`, `ANG-C1`, or `ANG-C2`;
3. if classes differ, use the exact class order `C0 < C1 < C2`;
4. if both are `C1`, return `EQUAL`;
5. if both are `C0` or both are `C2`, compare their exact cosines and apply
   the class-specific monotonic direction.

For the last step, let:

```text
d1 = dot(a,b)
q1 = (a dot a) * (b dot b)
d2 = dot(c,d)
q2 = (c dot c) * (d dot d)
cos(theta(a,b)) = d1 / sqrt(q1)
cos(theta(c,d)) = d2 / sqrt(q2)
```

All `q` values are positive. No square root needs to be evaluated. The exact
cosine comparison uses sign first and then the squared relation:

```text
L = d1^2 * q2
R = d2^2 * q1
```

The values `L` and `R` are compared with exact arithmetic only when the two
dot signs are the same and non-zero.

## Required normalized-cosine sign table

Let `C1` and `C2` denote the two normalized cosine values.

| Sign of `d1` | Sign of `d2` | Exact cosine relation |
|---|---|---|
| positive | positive | `L > R` iff `C1 > C2`; `L = R` iff equal; `L < R` iff `C1 < C2`. |
| negative | negative | `L > R` iff `C1 < C2`; `L = R` iff equal; `L < R` iff `C1 > C2`. |
| zero | zero | `C1 = C2 = 0`. |
| zero | positive | `C1 < C2`. |
| zero | negative | `C1 > C2`. |
| positive | negative | `C1 > C2`. |
| negative | positive | `C1 < C2`. |

For two `C0` gaps, cosine is strictly decreasing, so the gap comparison is
the reverse of the cosine comparison. For two `C2` gaps, cosine is strictly
increasing, so the gap comparison has the same direction as the cosine
comparison. A `C1` gap is exactly `pi` and is handled separately.

This table restores the sign information before any squaring. It proves that
the squared relation is not being used as an unsigned-angle comparator.

## Exact equality and the complementary-angle trap

Two directed gaps are exactly equal only when:

1. their directed angle classes are equal;
2. both are `C1`, or their normalized cosines are exactly equal under the sign
   table; and
3. both pairs are valid non-zero, non-same-positive-ray pairs.

The class condition is essential. A pair with angle `alpha` and a pair with
angle `2pi-alpha` can have the same cosine, but one lies in `C0` and the other
in `C2`. They are not equal directed gaps. The comparator therefore never
reduces every gap to `min(theta, 2pi-theta)` and never treats cosine alone as
the semantic value.

## Handling `pi` and wrap-around

An exact `pi` gap is `cross=0` and `dot<0`. It compares less than every `C2`
gap, greater than every `C0` gap, and equal only to another exact `pi` gap.
No approximate special case is used.

For a shared Node with cyclic rays `r_1,...,r_k`, order them by the exact
cyclic direction comparator and define `r_(k+1)=r_1`. Every consecutive pair
produces the positive directed gap from `r_i` to `r_(i+1)`, including the
wrap-around pair. The final gap may be greater than `pi`, so it is classified
as `C2` and compared by the `C2` rule. No half-plane-only or unsigned-line
angle shortcut is allowed.

## FAN-P1 registration seam

The exact comparator now supports the preceding FAN-P1 semantics for the
following bounded contract:

- same transported shared Node and `MotifFanoutNeighbors(V)`;
- same candidate family contract and pre-settling stage;
- same ray-count applicability class, with `k>=3` for ordinary fan-out;
- non-zero exact rays;
- GEO-3 hard validity;
- `ANG-REP-0` or `ANG-REP-1` input;
- exact cyclic order and exact directed-gap comparison; and
- no unsupported conversion to float-only or rendered coordinates.

Within that contract:

```text
FAN-P1(X,Y,V) iff g_min(X,V) > g_min(Y,V)
```

is ready for a bounded research registration. Equal values are preference-
equivalent on this axis. Moving bottleneck identity and changed tie
multiplicity remain descriptive. Multiple shared Nodes remain separate
records, and a conflict remains `PP-INCOMPARABLE` under PP-M3.

The registration is conditional on the exact FP1 adapter. It is not a claim
that the live browser path, JavaScript `Number` path, F0 ring family, or
Production runtime already satisfies the contract.

## Capability-interface alternatives

Three interface shapes are semantically viable:

| Interface | Assessment |
|---|---|
| `ANG-API-A`: expose exact integer/rational ray components | Preferred for the bounded FP1 experiment; simple and auditable. |
| `ANG-API-B`: expose certified predicates for half-plane, cross, dot, and normalized-cosine comparison | Valid for exact algebraic families; hides representation library choice while preserving exactness. |
| `ANG-API-C`: expose only a materialized angle/float | Not sufficient for semantic registration; must return `UNKNOWN` or remain descriptive. |

The semantic boundary does not select an implementation library or schema. It
requires either API-A data or API-B certified predicates. The future-family
adapter seam is therefore complete for exact integer/rational families but
conditional for exact algebraic and float-derived families.

## Overflow and arithmetic responsibility

Unchecked fixed-width overflow is incompatible with exact semantic comparison.
The squared comparison can grow as products of squared dot products and norm
products. A future exact adapter must use arbitrary-precision arithmetic,
symbolic arithmetic, or checked bounds that prove no overflow occurred.

If overflow safety cannot be established, the comparator returns `UNKNOWN`
(`UNK-4`) rather than using a wrapped value, a narrowed integer, a float
fallback, or an epsilon.

This is an implementation responsibility, not a reason to add a preference
threshold. The bounded exact FP1 research contract can use arbitrary/checkable
exact arithmetic conceptually; no implementation is selected by this design.

## Float-only and exact-algebraic boundaries

Finite IEEE values can be interpreted as exact dyadic rationals after their
bits are captured, but an upstream rounded computation may have changed the
intended geometry. Therefore:

- stored-dyadic comparison is a separate possible future contract;
- intended-source comparison is not inferred from stored floats;
- browser/rendered coordinates are not exact semantic authority; and
- the current bounded FP1 research does not wait for Production float support.

Exact algebraic coordinates are conceptually supported if the adapter supplies
the required exact predicates. No particular algebraic representation or
library is chosen. Exact-algebraic generality does not block current FP1
registration because FP1 is rational.

## Invariance

| Transformation | Status | Reason |
|---|---|---|
| Translation | Invariant | Ray differences are unchanged. |
| Positive uniform scale | Invariant | Each ray is positively rescaled; angles are unchanged. |
| Rotation | Invariant | All directions rotate together. |
| Reflection | Invariant for the fan-out multiset/minimum | Orientation reverses, but cyclic gaps are reversed/reindexed and `g_min` is unchanged. |
| Non-uniform affine transform | Not invariant | It changes angular geometry, although exact predicates can still compare the transformed result. |
| Topology isomorphism | Invariant under explicit identity transport | Shared Node and neighbor records transport together. |
| Automorphism/orbit | Invariant modulo orbit | No named-node privilege. |
| Positive denominator clearing | Invariant | Direction is preserved. |
| Candidate index/input order | No semantic effect | Order is derived from geometry; index is operational only. |

Geometric invariance and representation closure are separate. An exact
representation may compare a non-uniformly transformed geometry, but that does
not make the transformation a semantic equivalence.

## K3 and Ashen reasoning

### K3

K3 remains one complete three-Node orbit. Exact direction order and gap
comparison can be transported through the orbit, but a literal Node name or
candidate slot cannot win. Orbit-equivalent records are preference-equivalent
when their transported values match. The comparator therefore preserves K3
semantics.

### Ashen Crown

Ashen remains the overlap-cluster control. Its shared-Node fan-out records are
compared independently. Existing Ashen rounded/diagnostic profile values are
useful context, but they are not silently promoted to exact comparator proof.
A future exact FP1 reconstruction can use the contract here; if a record is
only available through rounded runtime coordinates, it is `UNKNOWN` rather
than an approximate FAN-P1 result.

## Required property table

| Property | Result | Conditions |
|---|---|---|
| Ray-order irreflexivity | Supported | Distinct directed rays under same-positive-ray exclusion. |
| Ray-order transitivity | Supported | Exact half-plane plus orientation order. |
| Ray-order totality/trichotomy | Supported | Non-zero rays; same positive ray reported as equality/invalid for GEO-3, opposite ray valid. |
| Directed-gap comparison irreflexivity for strict `<` | Supported | Valid gaps under fixed exact representation. |
| Directed-gap comparison transitivity | Supported | Exact class order plus monotone same-class cosine comparison. |
| Directed-gap trichotomy | Supported | Both gaps valid and exact; output is less/equal/greater. |
| Positive-scaling invariance | Supported | Scaling factors are positive. |
| Rigid semantic invariance | Supported | Translation, rotation, uniform scale; reflection at multiset level. |
| Reflection of oriented sequence | Reversed/reindexed | Minimum and multiset remain invariant; orientation labels must not be compared by rank. |
| Same-ray handling | Hard invalid | GEO-3 gate precedes preference. |
| Opposite-ray handling | Exact `pi` | Valid directed gap class `C1`. |

## Readiness result

**ANGULAR-COMPARATOR-READY** for the explicitly bounded `ANG-REP-0/1` exact
FP1 research domain.

The generic future-family seam is **PARTIAL**: exact algebraic families can
use a certified-predicate adapter, while float-derived and rendered geometry
need a separate authority contract. This does not block the selected bounded
experiment. FAN-P1 is:

- **registered for bounded exact-rational FP1 research:** YES;
- **registered for Production runtime:** NO;
- **implemented:** NO; and
- **approximate fallback allowed:** NO.

## Central questions

| Question | Answer |
|---|---|
| Q1. What exact numeric information must a ray expose? | Exact `dx,dy`, non-zero validity, and exact sign/equality/order arithmetic for cross, dot, and norm products. |
| Q2. Can FP1 rays be represented exactly? | Yes. FP1 coordinates and differences are rational. |
| Q3. Can rational denominators be cleared safely? | Yes, with positive scaling only. |
| Q4. How are rays cyclically ordered? | Positive-x cut, half-plane class, then exact cross-product orientation. |
| Q5. How are same and opposite rays distinguished? | `cross=0` with dot positive versus negative. |
| Q6. How is the angle class determined? | Cross positive is `<pi`, cross zero/dot negative is `pi`, cross negative is `>pi`. |
| Q7. How are two `<pi` gaps compared? | Compare exact cosines, then reverse the cosine order because cosine decreases. |
| Q8. How are two `>pi` gaps compared? | Compare exact cosines with the same direction because cosine increases. |
| Q9. How is equality established? | Same directed class and exact normalized-cosine equality, or both exact `pi`. |
| Q10. How is the complementary-angle trap avoided? | `C0` and `C2` remain distinct; cosine alone is never used. |
| Q11. How is wrap-around handled? | The last cyclic ray is paired with the first using the full directed `(0,2pi)` interval. |
| Q12. Can square roots be avoided? | Yes, by exact squared normalized-dot comparison with signs retained. |
| Q13. Can `atan2` be avoided? | Yes; no angle value is materialized. |
| Q14. Can epsilon be avoided? | Yes; exact equality and ordering are used. |
| Q15. What arithmetic guarantees are required? | Arbitrary-precision, symbolic, or checked exact arithmetic; unchecked overflow is invalid. |
| Q16. What happens for float-only geometry? | Stored-dyadic and intended-source semantics are separated; absent an authority contract, return `UNKNOWN`. |
| Q17. What happens for exact algebraic geometry? | It is conceptually supported through certified predicates; no implementation library is selected. |
| Q18. Is the semantic comparator family-independent? | Yes in form, conditionally on an exact capability adapter. |
| Q19. Is current rational FP1 sufficient for bounded registration? | Yes, with an exact FP1 adapter and research-only scope. |
| Q20. Is Production runtime support required first? | No; the next experiment is explicitly bounded exact-rational FP1 research. |
| Q21. What is the smallest next checkpoint? | `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-STRUCTURAL-ASSIGNMENT-OBJECTIVE-EXPERIMENT-DESIGN1`. |

## Hypotheses

| Hypothesis | Result |
|---|---|
| H1. Exact cyclic order needs no `atan2`. | **Supported.** |
| H2. Cross/dot signs classify the full directed angle. | **Supported.** |
| H3. Same-class magnitude comparison needs no square root. | **Supported.** |
| H4. Squaring is safe when dot signs are retained. | **Supported.** |
| H5. Angle class resolves complementary cosine ambiguity. | **Supported.** |
| H6. FP1 rational coordinates admit exact comparison. | **Supported.** |
| H7. Positive denominator clearing preserves direction. | **Supported.** |
| H8. Unchecked fixed-width overflow is incompatible with exactness. | **Supported.** |
| H9. Capability boundaries preserve family independence. | **Supported conditionally.** |
| H10. Unsupported representations can return `UNKNOWN`. | **Supported.** |
| H11. Production float support need not precede bounded rational research. | **Supported.** |
| H12. Closing this seam is sufficient to decide bounded FAN-P1 registration. | **Supported.** |

## Falsification conditions

| Condition | Current assessment |
|---|---|
| N1. Exact cyclic order cannot be total under GEO-3. | Not triggered. |
| N2. Cross/dot signs cannot classify the required classes. | Not triggered. |
| N3. Normalized-dot comparison requires irrational approximation. | Not triggered for exact rational rays. |
| N4. Squaring loses unrecoverable sign/order information. | Not triggered; sign table restores it. |
| N5. Complementary angles remain ambiguous. | Not triggered; class is retained. |
| N6. Rational FP1 lacks exact representation. | Not triggered. |
| N7. Exact comparison requires a family-specific quality convention. | Not triggered; only capability differs. |
| N8. Float support blocks rational research. | Not triggered; scope is explicitly rational FP1. |
| N9. Exact algebraic generality cannot be abstracted. | Not triggered; certified-predicate seam is sufficient conceptually. |
| N10. Reflection/orbit transport changes FAN-P1 ordering. | Not triggered; multiset/minimum is invariant. |
| N11. Epsilon/tolerance is required. | Not triggered. |
| N12. Baseline/prior evidence cannot be reconciled. | Not triggered. |

## CASE and decision assessment

| Case | Assessment |
|---|---|
| CASE 1 | **Selected:** full exact comparator contract is ready for exact-rational FP1 bounded research. |
| CASE 2 | Not selected: representation capability is bounded explicitly rather than left unresolved for the selected experiment. |
| CASE 3 | Not selected: family-conditional Production registration is outside the bounded scope, not a blocker. |
| CASE 4 | Not selected: cyclic order is closed under the stated preconditions. |
| CASE 5 | Not selected: directed-gap comparison and equality are closed. |
| CASE 6 | Not selected: runtime float authority is not required by the selected research scope. |
| CASE 7 | Not selected: no approximation or epsilon is needed. |
| CASE 8 | Not selected: coverage was closed by the preceding Fan-out Design1. |
| CASE 9 | Not selected: no smaller exactness question remains for bounded FP1. |
| CASE 10 | Not selected: source and prior evidence reconcile. |

The decisions are:

- **Decision A selected.** Register FAN-P1 for the next bounded exact-rational
  FP1 structural-objective experiment design.
- Decisions B-J are not selected.
- The selected next checkpoint is not auto-started.

## Knowledge candidate and Production boundary

Knowledge candidate: **YES - hypothesis strengthened/refined**. Reusable
principles include preserving directed-angle class, using exact predicates
instead of materialized angle values, retaining signs before squaring, and
returning `UNKNOWN` when representation authority or exactness is absent.

No `ai-knowledge` promotion or modification was made.

The following remain **NO**:

- Production comparator implementation;
- fan-out or structural objective implementation;
- candidate-family or assignment change;
- materializer, solver, settling, routing, labels, UI, or sample change;
- FP1 Production adoption or F2 creation; and
- Dataset/Core/Extension/schema change.

This is an unpushed documentation checkpoint. The next design checkpoint is
selected only.
