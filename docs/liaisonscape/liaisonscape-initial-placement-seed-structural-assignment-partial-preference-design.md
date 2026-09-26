# LiaisonScape Initial-placement Seed Structural-assignment Partial-preference Design

**Checkpoint:** `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-STRUCTURAL-ASSIGNMENT-PARTIAL-PREFERENCE-DESIGN1`
**Date:** 2026-09-02
**Status:** **COMPLETE / DESIGN ONLY / NOT PRODUCTION**
**Result:** `CASE 2 / EXACT RESULT 1+2+3+4+5+6+7+8+9+10+11 / DECISION B`

## 1. Exact result and decision

This design defines the smallest defensible scalar-free partial-preference
contract found in the current evidence. Hard admissibility is evaluated before
preference. Normalized motif altitude can be a conditional same-motif local
axis. Fan-out distribution is not yet registered because a full circular gap
vector has a fixed sum and the remaining candidate comparators either hide a
priority or import an unsupported uniformity preference.

The supported exact clauses are:

1. **SEMANTIC EVIDENCE** - Hard admissibility is a prerequisite to, not a
   numeric part of, structural preference.
2. **SEMANTIC EVIDENCE** - Normalized altitude has a defined same-motif local
   preference direction, subject to the contract below.
3. **SEMANTIC EVIDENCE** - Local fan-out does not yet have a non-arbitrary
   registered preference comparator; a narrower design is required.
4. **SEMANTIC EVIDENCE** - Preference-equivalent, profile-equivalent,
   incomparable, unknown, and not-applicable are distinct states.
5. **SEMANTIC EVIDENCE** - Ashen trade-offs can be represented without weights
   or a priority order.
6. **SEMANTIC EVIDENCE** - The preference contract need not total-order all
   hard-valid assignments.
7. **EQUIVARIANCE EVIDENCE** - Topology/orbit-equivalent mappings do not receive
   a named semantic preference.
8. **BOUNDARY PRESERVED** - Descriptive profile fields are not silently
   promoted to objective axes.
9. **BOUNDARY PRESERVED** - Preference, materialization, solver, settling,
   routing, labels, and visual quality remain separate responsibilities.
10. **DESIGN READY** - The contract can be tested against a frozen bounded
    assignment set without search or scalar optimization, after the fan-out
    boundary is resolved.
11. **PARTIAL** - One narrower fan-out semantic remains before objective
    experiment design.

**Decision B:** fan-out preference comparator needs a narrower semantics design.

Selected next checkpoint:

`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-FANOUT-PARTIAL-PREFERENCE-DESIGN1`

This checkpoint is selected only and is not auto-started.

## 2. Preceding Objective Research1

The preceding [structural-assignment objective research](liaisonscape-initial-placement-seed-structural-assignment-objective-research1.md)
was `CASE 2 / DECISION B`, commit `3e98d6c`, and remained unpushed. It found
that the accepted two-layer motif/overlap profile contains possible local
preference directions but does not justify a total score. It also established
that routing, labels, visual judgment, total edge length, and candidate-family
geometry must not silently define the seed assignment objective.

The immediately preceding [topology-aware assignment result](liaisonscape-initial-placement-seed-topology-aware-assignment-experiment1-result.md)
showed all 18 primary FP1 cells hard-valid, TA-0 lexical sensitivity, TA-1 to
TA-3 rename/input-order stability, K3 orbit preservation, and real-graph
profile differences under field order and RC-H2 direction. Thus this design
compares stable hard-valid mappings conceptually; it does not reopen stability
or run another assignment experiment.

## 3. Source and baseline reconciliation

At start, e2r-spec was at `3e98d6c06aa1a64742a7265a7001603ac190ba67` on `main`
tracking `origin/main`, ahead by 112 commits. The preceding Research1 commit
was present. The protected dirty `sessions/E2R-Session-0052.md` was preserved
unstaged.

LiaisonScape was at `fd563340625fd3d88dc25baedc93c4f8fe69e5e7` on `main`
tracking `origin/main`, ahead by five commits. `src/auto-layout.ts` matched the
historical accepted Initial Placement source baseline; material source drift:
**NO**. The pre-existing dirty sample files were preserved:

- `public/lighthouse-restoration-demo.en.e2r.json`
- `public/lighthouse-restoration-demo.ja.e2r.json`

The residual shells were present and not reused, mutated, deleted, cleaned, or
staged:

- `C:\Users\extra\E2R\e2r-liaison-scape-structural-quality-experiment`
- `C:\Users\extra\E2R\e2r-liaison-scape-assignment-sensitivity-followup1`
- `C:\Users\extra\E2R\e2r-liaison-scape-topology-aware-assignment-experiment1`

The routing preview and protected dirty `ai-knowledge` playbook were preserved.
No new disposable clone or runner was required for this design-only checkpoint.

## 4. Design domain

The relation compares two complete pre-settling assignments `X` and `Y` only
when all of the following match or have an explicit transport:

| Domain condition | Required meaning |
|---|---|
| Graph | Same accepted topology, or graph-isomorphic topology with an explicit Node/motif/orbit transport |
| Candidate family | Same family definition and candidate-role construction |
| Stage | Both are PRE-settling seed assignments |
| Motif inventory | Same relevant motif set, transported by identity/orbit |
| Cluster inventory | Same shared-Node and overlap-cluster scope, transported by identity/orbit |
| Coverage | Same declared eligible axes and applicability rules |
| Representation | Both comparable under the same exact/numeric representation contract |

Assignments from different graph semantics, families, settling states, routed
versus unrouted states, or label/locale states are outside one comparison
relation. A common-subset diagnostic may be reported, but it is not a complete
dominance result unless the coverage contract explicitly says that subset is
the complete applicable domain.

## 5. Hard-admissibility prerequisite

Before preference comparison, both assignments must be injective,
finite/distinct, and satisfy exact GEO-0 and GEO-3. A hard-invalid assignment
is **ineligible**, not merely lower quality.

| X | Y | Result |
|---|---|---|
| valid | valid | Continue to preference comparison |
| valid | invalid | `HARD-INVALID` for Y; no X-dominates-Y preference result |
| invalid | valid | `HARD-INVALID` for X; no Y-dominates-X preference result |
| invalid | invalid | `HARD-INVALID`; preference is not evaluated |

The family-capacity result remains separate: an empty hard-valid assignment set
means family infeasibility at the exact floor. No epsilon, settling repair,
near-degeneracy threshold, or minimum-angle threshold is permitted to enter
this contract.

## 6. Result-state vocabulary

| State | Exact meaning |
|---|---|
| `HARD-INVALID` | At least one assignment is outside the hard-admissible domain because injectivity, finite/distinct materialization, GEO-0, or GEO-3 fails. |
| `PP-PREF-EQUIVALENT` | X and Y have equal values on every applicable registered preference axis after permitted graph/orbit transport. Literal IDs or candidate indices may differ. |
| `PP-PROFILE-EQUIVALENT` | X and Y have the same complete accepted structural profile after permitted transport. This is stronger than preference equivalence. |
| `PP-X-DOMINATES-Y` | X is no worse on every applicable registered preference record and strictly better on at least one, with no unresolved required comparison. |
| `PP-Y-DOMINATES-X` | Symmetric case. |
| `PP-INCOMPARABLE` | At least one registered comparable record favors X and at least one favors Y. The evidence is sufficient to know that neither dominates. |
| `PP-UNKNOWN` | A required comparison cannot be completed because coverage, transport, applicability, comparator, numeric exactness, or required input is unresolved. |
| `PP-NOT-APPLICABLE` | Both assignments are hard-valid but the declared preference contract has no applicable preference records, such as a zero-motif graph. |

`PP-PREF-EQUIVALENT` and `PP-PROFILE-EQUIVALENT` are intentionally distinct:
preference fields may agree while descriptive shape, bbox, or bottleneck
identity differs. Conversely, a complete profile match implies preference
equivalence only when the same coverage applies.

`PP-INCOMPARABLE` means conflicting defined axes. `PP-UNKNOWN` means the
contract cannot legally compare the required evidence. A changed descriptive-
only field is not by itself `UNKNOWN`.

## 7. Comparison coverage and identity

Every comparison needs a coverage signature containing:

- graph topology and explicit isomorphism/orbit transport;
- motif identities or transported motif identities;
- shared Nodes and relevant fan-out neighbor sets;
- registered preference-axis identifiers and directions;
- applicability and missingness for every record;
- candidate-family and pre-settling stage identity; and
- exact/numeric comparison representation.

Missing is not zero. Non-applicable is not worse. Different hidden coverage
cannot be cherry-picked into a dominance claim. If the difference cannot be
transported or declared as the complete contract, return `PP-UNKNOWN`.

The same-identity rule compares a motif to the transported same motif, and a
shared Node to the transported same Node or orbit counterpart. A changed
narrowest-gap identity does not automatically invalidate a local preference,
but that identity remains context and must be recorded.

## 8. Normalized-altitude axis

Normalized minimum altitude is registered as a **conditional local preference
axis**, not as a graph score.

For the same motif `m`, same topology/family/stage, and two hard-valid
assignments:

```text
AltitudePref(X, Y, m) iff normalizedAltitude(X, m) > normalizedAltitude(Y, m)
```

This direction has a local meaning: the vertex-to-opposite-chord bottleneck is
relieved for that same motif. The rule has these limits:

- compare the same motif or its explicitly transported counterpart;
- keep all seven Ashen motifs as seven records rather than summing or
  averaging them;
- normalized values remove common positive scale, but radically different
  family/context transformations still require the same family contract;
- equal values contribute neither direction;
- a missing or non-applicable motif does not become zero; and
- a larger altitude in one motif does not dominate a mapping that worsens
  another motif or an eligible fan-out record.

The following are prohibited: sum, mean, global minimum, weighted altitude,
percentile ranking, fixture threshold, or universal ideal triangle shape.

## 9. Fan-out candidate semantics

Fan-out is **PARTIAL / NOT YET REGISTERED**. The alternatives were assessed as
follows:

| Candidate | Assessment |
|---|---|
| FAN-P0: full gap vector componentwise | **Rejected.** Circular gaps sum to 360 degrees, so componentwise improvement is generally impossible except equality; choosing a subset would hide a priority. |
| FAN-P1: narrowest local gap relief | **Promising but not registered.** For the same shared Node, same relevant neighbor set, and same ray count, a larger smallest positive circular gap has a defensible local bottleneck meaning. Exact identity, ordering, and representation still need a dedicated design. |
| FAN-P2: sorted-gap lexicographic comparison | **Rejected.** It hides an arbitrary priority among the sorted gaps. |
| FAN-P3: majorization/dispersion | **Rejected for now.** It imports a uniform-distribution preference not established by E2R evidence. |
| FAN-P4: no fan-out preference yet | **Selected interim boundary.** Keep full gap sequence, narrowest gap, identities, and capacity descriptive until FAN-P1 exact semantics is designed. |

The likely next design may test a FAN-P1 relation with these preconditions:

```text
same transported shared Node
same transported relevant motif-neighbor set
same ray count and applicability
both hard-valid
```

The full circular gap sequence and narrowest-gap identity remain context. A
changed bottleneck identity may coexist with relief, but is never erased.
No minimum angle, epsilon, or tolerance is implied. If an exact comparator
cannot be specified with rational/orientation-safe evidence, fan-out remains
descriptive.

## 10. Descriptive-field handling

The selected policy is a refined **PP-D1**:

- descriptive-only changes do not automatically block dominance;
- shape ratios, general angle profile, bottleneck identity, bbox, and context
  remain records for explanation;
- they may block a result only when they cause a hard violation or make a
  required registered-axis comparison undefined; and
- no open-ended phrase such as “contradictory structural state” may create an
  ad hoc `UNKNOWN` outcome.

The closed `UNKNOWN` triggers are:

| Trigger | Meaning |
|---|---|
| `UNK-1` | Coverage differs and cannot be safely transported or declared complete. |
| `UNK-2` | A registered axis applies but has no comparator for this state. |
| `UNK-3` | Topology/orbit correspondence is ambiguous outside the accepted transport. |
| `UNK-4` | Numeric comparison requires a forbidden epsilon/tolerance or lacks a representation contract. |
| `UNK-5` | A required descriptor/input for a registered axis is missing or invalid. |

“A descriptive field changed” is not an `UNKNOWN` trigger.

## 11. Partial-preference candidate models

| Model | Assessment |
|---|---|
| PP-M0: hard floor only | Required baseline and valid fallback, but expresses no structural preference. |
| PP-M1: altitude-only local dominance | Coherent minimal model; risks ignoring accepted shared-Node evidence. |
| PP-M2: altitude plus fan-out bottleneck dominance | Intended target, but not ready while fan-out comparator is unresolved. |
| PP-M3: generic eligible-axis dominance frame | **Selected semantic frame.** An axis enters only with explicit owner, scope, applicability, direction, exact comparator, invariance, and missingness contract. Current registered axis: conditional altitude; fan-out pending. |
| PP-M4: full-profile dominance | Rejected; it would order descriptors with no accepted direction. |

The design therefore selects PP-M3 with altitude registered conditionally and
fan-out held at a separate design boundary. It does not select PP-M2 for
execution yet.

## 12. Dominance and relation properties

For a fixed graph, family, stage, coverage, and registered-axis contract:

```text
X ≽struct Y
```

means X and Y are hard-valid, every applicable registered axis is no worse in
X, and at least one is strictly better in X. Conflicting registered axes give
`PP-INCOMPARABLE`; unresolved required axes give `PP-UNKNOWN`.

The narrow mathematical characterization is:

| Object | Reflexive | Transitive | Antisymmetric | Total |
|---|---|---|---|---|
| Literal mappings under fixed coverage | Yes for comparable hard-valid mappings | Yes, conditionally on fixed coverage/applicability and transitive axis comparators | No; distinct mappings can have equal preference values | No |
| `PP-PREF-EQUIVALENT` classes | Yes | Yes | Yes, for the quotient classes | No |
| Strict `X ≻struct Y` | Irreflexive | Yes under the same fixed contract | Not applicable | No |

Across changing coverage, missingness, or unresolved transport, transitivity
is not promised; the result is `PP-UNKNOWN`, not a falsely named partial order.
The correct general term is **conservative partial preference**. Under a fixed
contract and quotient by `PP-PREF-EQUIVALENT`, it can form a partial order, but
that quotient claim does not authorize a Production implementation.

## 13. Cross-motif and cross-layer handling

For Ashen, every applicable motif record and every future registered fan-out
record must be compared at its transported identity scope:

- X improves M1 and all other eligible records are equal: X may dominate Y;
- X improves M1 and worsens M2: `PP-INCOMPARABLE`;
- X improves altitude but fan-out is required and undefined: `PP-UNKNOWN`;
- X and Y differ only in descriptive fields: preference comparison continues;
- an eligible record is absent from one side: `PP-UNKNOWN`, unless the axis
  contract explicitly marks it non-applicable for both sides.

Altitude and fan-out have no hidden priority. If one improves altitude and the
other improves fan-out, the result is `PP-INCOMPARABLE` once both comparators
are registered. No weighted sum or “altitude first” lexicographic order is
allowed.

## 14. Existing control reasoning

### Lighthouse

Lighthouse is the clearer one-motif control. A changed hard-valid mapping can
be compared locally on normalized altitude without cross-motif aggregation.
This supports the conditional altitude axis. It still does not establish an
ideal triangle shape or decide between the observed altitude values; shape
ratios, angles, and bbox remain descriptive.

### Ashen Crown

Ashen is the decisive overlap control. The accepted Darius/Elara swap relieves
some normalized-altitude records (`0.055384615 -> 0.064102564` and
`0.046551724 -> 0.064102564`) while worsening others
(`0.066666667 -> 0.046391753` and `0.086419753 -> 0.063649222`). The correct
result is `PP-INCOMPARABLE`, not a weight-derived winner. TA-3 RC-H2 forward
and reverse are both hard-valid but have different profiles, so neither is
preferred by the current contract.

### K3

K3 is compared modulo its complete three-Node topology orbit. A literal
mapping can differ while remaining `PP-PREF-EQUIVALENT` or
`PP-PROFILE-EQUIVALENT` after orbit transport. No named K3 Node receives a
semantic candidate preference.

### Zero-motif

A zero-motif hard-valid graph has no applicable altitude or fan-out records.
Its preference result is `PP-NOT-APPLICABLE`, not a fabricated quality tie or
an invented objective. A later materializer may still produce a deterministic
hard-safe witness.

## 15. Set-valued preferred class and boundaries

Conceptually, a future bounded comparison may retain:

```text
NonDominated(G, P, coverage)
```

as the set of hard-valid mappings not dominated under the registered partial
preference. It may contain preference-equivalent mappings,
orbit-equivalent mappings, and mutually incomparable mappings. It need not
contain one mapping. This is not a persisted field, schema, API, or Production
contract.

The materializer remains separate: it chooses one literal representative only
after admissibility/preference semantics are known. Candidate index, lexical
ID, or canonical order may be an operational tie-break, never a quality
meaning. The solver/search procedure is also separate and is not designed
here. No permutation enumeration, optimizer, or fallback repair is selected.

## 16. Pipeline responsibility table

| Concern | Candidate family | Assignment | Settling | Routing | Labels | Visual acceptance |
|---|---|---|---|---|---|---|
| Motif nondegeneracy | Capacity | Hard admissibility | May change state later | No | No | No |
| Fan-out | Capacity/distribution roles | Future conditional axis | Downstream changes | No | No | No |
| Node spacing | Supplies candidate geometry | May compare local role only | Primary refinement | No | No | No |
| Edge clearance | Supplies seed opportunity only | Not current axis | May affect positions | **Primary** | Secondary | No |
| Corridor availability | Possible future proxy | Not current axis | May affect positions | **Primary outcome** | Secondary | No |
| Crossings | Family geometry context | Not current axis | Placement context | **Primary for routed crossing** | No | Secondary |
| Curvature | No | No | No | **Primary** | No | Secondary |
| Parallel edges | No | No | No | **Primary** | Secondary | Secondary |
| Self-loops | Candidate geometry may limit capacity | No current axis | No | **Primary** | Secondary | Secondary |
| Label clearance | No | No | No | Route dependency | **Primary** | Secondary |
| Compactness | Candidate extent | Context only | **Primary refinement** | Secondary | Secondary | Secondary |
| Total edge length | Candidate/context | Secondary only | Layout context | Routing context | No | Secondary |
| Incremental stability | Future family/role capacity | Future assignment concern | **Separate later concern** | Downstream | Downstream | Visual later |

## 17. Future objective experiment shape

After the dedicated fan-out design, a bounded objective experiment may use the
frozen TA-0 through TA-3 assignment set from the preceding result, with:

- Lighthouse, Ashen Crown, and K3;
- PRE-settling FP1 only;
- exact hard gate first;
- fixed comparison coverage signature;
- altitude axis and any newly registered fan-out axis only;
- profile-only records retained for explanation;
- `PP-EQUIVALENT`, `PP-DOMINATES`, `PP-INCOMPARABLE`, `PP-UNKNOWN`, and
  `PP-NOT-APPLICABLE` reported separately;
- no assignment search, N! enumeration, optimization, routing, labels,
  screenshots, browser judgment, or Production adoption; and
- optional high-R-9 only if the fan-out design needs an independent capacity /
  distribution control.

This design does not start that experiment. It defines the seam that makes a
later experiment falsifiable without converting candidate index into quality
semantics.

## 18. Central questions

| Question | Answer |
|---|---|
| Q1. Exact domain? | Same topology or transported isomorphism, same family, same PRE-settling stage, same motif/cluster inventory, and same coverage contract. |
| Q2. Hard admissibility relation? | It precedes preference; hard-invalid is ineligible, not dominated. |
| Q3. `PP-PREF-EQUIVALENT`? | Equal registered preference-axis values after transport; not necessarily equal literal mapping or full profile. |
| Q4. Incomparable versus unknown? | Incomparable has conflicting defined axes; unknown lacks legal coverage, comparator, transport, or exactness. |
| Q5. Altitude ready? | Yes, conditionally, as a same-motif normalized chord-relief axis; never as a global score. |
| Q6. Fan-out ready? | No; FAN-P1 is promising, but no comparator is registered until the next design. |
| Q7. Descriptive fields? | They remain outside dominance and do not automatically create unknown. |
| Q8. Orbit transport? | Compare transported topology/orbit classes; no named K3 privilege. |
| Q9. Relation type? | Conservative partial preference; partial order only on fixed-contract preference-equivalence classes. |
| Q10. Transitivity? | Conditional under fixed coverage and transitive axis comparators; not across unresolved coverage. |
| Q11. Missingness? | Missing is not zero; required missingness is `UNKNOWN`, shared non-applicability is `NOT-APPLICABLE`. |
| Q12. Ashen trade-offs? | Yes, as `INCOMPARABLE` without weights or hidden priority. |
| Q13. Zero motif? | `NOT-APPLICABLE` for structural preference; placement remains hard-safe/materializer responsibility. |
| Q14. Set-valued result? | Yes conceptually; non-dominated and incomparable members may remain. |
| Q15. FP1 generality? | The contract is family-independent in form, but FP1 asymmetry remains an open family limit. |
| Q16. Smallest next checkpoint? | `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-FANOUT-PARTIAL-PREFERENCE-DESIGN1`. |

## 19. Hypotheses and falsification

| Hypothesis | Result |
|---|---|
| H1: hard admissibility precedes preference | **SUPPORTED**. |
| H2: normalized altitude is a conditional local axis | **SUPPORTED**. |
| H3: fan-out needs a narrower bottleneck comparator | **SUPPORTED**; FAN-P0/P2/P3 are not accepted. |
| H4: scalar-free no-worse dominance is coherent | **SUPPORTED CONDITIONALLY** under fixed coverage. |
| H5: Ashen trade-offs become incomparable | **SUPPORTED**. |
| H6: unknown can be restricted to closed contract failures | **SUPPORTED**. |
| H7: preference equivalence differs from full profile equivalence | **SUPPORTED**. |
| H8: total ordering is unnecessary | **SUPPORTED**. |
| H9: K3 orbit mappings remain equivalent | **SUPPORTED** by preceding control. |
| H10: zero-motif can be not-applicable | **SUPPORTED**. |
| H11: preference and materialization remain separate | **SUPPORTED**. |
| H12: frozen bounded assignments can test the contract without search | **SUPPORTED AS DESIGN**; fan-out design precedes execution. |

| Falsification boundary | Result |
|---|---|
| N1: altitude has no stable same-motif meaning | **NOT TRIGGERED**. |
| N2: fan-out cannot be compared without arbitrary rules | **PARTIAL**; no registered comparator, dedicated design selected. |
| N3: descriptive handling is circular/arbitrary | **NOT TRIGGERED**; closed unknown triggers defined. |
| N4: unknown and incomparable cannot be separated | **NOT TRIGGERED**. |
| N5: transitivity fails under fixed semantics | **NOT TRIGGERED**; conditional transitivity stated. |
| N6: coverage causes hidden descriptor selection | **NOT TRIGGERED**; coverage signature required. |
| N7: orbit equivalence fails | **NOT TRIGGERED**. |
| N8: Ashen requires weights | **NOT TRIGGERED**; incomparable is sufficient. |
| N9: semantics is tied to FP1 index/order | **NOT TRIGGERED**; index is not semantic. |
| N10: profile cannot supply records | **NOT TRIGGERED**. |
| N11: materializer/solver must precede preference | **NOT TRIGGERED**; boundaries remain separate. |
| N12: baseline/prior evidence cannot be reconciled | **NOT TRIGGERED**. |

## 20. Final boundary

- Scalar-free partial preference: **YES, conditionally**.
- Normalized-altitude axis: **YES, conditional and same-motif only**.
- Fan-out axis: **PARTIAL / NOT REGISTERED**.
- Relation transitivity: **CONDITIONAL** under fixed contract.
- Total order required: **NO**.
- Ashen trade-offs representable without weights: **YES**.
- Orbit semantics preserved: **YES**.
- Existing profile sufficient: **PARTIAL**; sufficient for design, not all
  comparators.
- Objective experiment design ready: **NO, until fan-out design**.
- Materializer needed first: **NO**.
- Solver needed first: **NO**.
- Family redesign needed next: **NO immediate; FP1 remains open**.
- Production objective selected: **NO**.
- Production assignment selected: **NO**.
- Initial Placement solved: **NO**.
- Auto-started: **NO**.

Knowledge Candidate: **YES - HYPOTHESIS STRENGTHENED / REFINED**. No
`ai-knowledge` entry was created or modified.

No Production source, objective implementation, materializer, solver, FP1/F2,
settling, routing, labels, UI, samples, Dataset/Core/Extension/schema, or
visual evidence was changed or created by this design.
