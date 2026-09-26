# LiaisonScape Initial-placement Seed-assignment Semantics Design

Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-ASSIGNMENT-SEMANTICS-DESIGN1`
Date: 2026-09-02

## Result

Result: **CASE 11 / EXACT RESULT 1+2+3+4+5+6+7+8 / DECISION A**.

The exact assignment semantic is the hard-valid mapping relation, not a
topology-derived unique named total order. `ASSIGN-SAFE` is supported as a
sound and conditionally complete requirement for mapping-sensitive candidate
families. A family with no hard-valid mapping has a family-capacity result,
not an assignment failure. A concrete mapping may later be materialized as a
representative, but that representative is not source-grounded geometry
meaning merely because it is deterministic.

This design is precise enough to design the next disposable family/assignment
experiment seam. It is not a Production assignment algorithm, solver, runtime
seam, candidate-family change, or visual-quality objective.

## Preceding evidence and scope

The preceding assignment-responsibility audit (`e4e1150`) established that
candidate-family capacity, structural description, hard-valid assignment, and
representation-only tie handling are separate responsibilities. The live
LiaisonScape source is still `fd563340625fd3d88dc25baedc93c4f8fe69e5e7` and
the current pipeline remains:

`component discovery → degree rank + lexical tie-break → fixed center/ring
candidate positions → rank-to-position zip → bounded settling → packing`.

The pre-settling mapping is the diagnostic `A0-CURRENT`; it is not adopted as
semantic policy. The exact hard floor remains:

- **GEO-0:** an accepted topology-derived motif must not be exactly degenerate
  when a valid realization exists.
- **GEO-3:** distinct motif-neighbor identities around a shared Node must not
  occupy the same directed ray when a valid realization exists.

These are exact predicates. No epsilon, distance threshold, angle threshold,
score, or visual objective is introduced here.

## Formal objects

For a connected coordinate-less component, let `G` be the accepted simple
topology and `V(G)` its Node set. Let `P` be a finite candidate family with
`|P| >= |V(G)|`. Define:

```text
Inject(G, P) = { f | f : V(G) → P is injective }
HardValid(G, P) = { f ∈ Inject(G, P) | f satisfies every GEO-0/GEO-3 predicate }
F-SET(G, P) = YES iff HardValid(G, P) is non-empty
```

`HardValid` is a property of the complete assignment, not of a local degree,
maximum-`R(S)`, or other descriptor. A local rule may guide a future search,
but topology-derived search order does not become output semantics.

If `HardValid(G, P)` is empty, the semantic result is
`FAMILY-INFEASIBLE-FOR-HARD-FLOOR`. It must not silently relax the predicates,
apply epsilon, run settling and call the result valid, use randomness, or
blame structural ordering. A future implementation that fails to find a
member while the set is non-empty is `OPERATIONALLY-UNRESOLVED`, not
`F-SET=NO`; semantic existence and solver completeness remain distinct.

## Minimum assignment contract

The surviving contract is:

> For coordinate-less Initial Placement, Node-to-candidate assignment is a
> constrained materialization responsibility separate from candidate-family
> construction. For a mapping-sensitive family with at least one
> GEO-0/GEO-3-valid injective mapping, the accepted assignment semantic
> contains only hard-valid mappings and must not allow ID spelling or input
> order to turn available hard feasibility into a hard-invalid result. If no
> hard-valid mapping exists, the limitation belongs to candidate-family
> capacity. Topology-derived structure may define constraints or guide search,
> but does not create a unique named ordering inside true automorphism orbits.
> Where multiple hard-valid non-equivalent mappings remain, visual-quality
> selection is a later responsibility rather than part of the exact safety-floor
> semantic.

For a mapping-sensitive family, this requires both:

| Property | Meaning at the exact floor |
|---|---|
| Soundness | Any accepted/materialized assignment is in `HardValid(G,P)`. |
| Conditional completeness | If `HardValid(G,P)` is non-empty, the automatic semantic must admit some member; an implementation timeout may remain operationally unresolved. |
| Uniqueness | Not required. Several hard-valid assignments may remain. |
| Determinism | The semantic classification/result relation must be repeatable; one literal representative is not required where symmetry leaves it underdetermined. |
| ID-isomorphism covariance | Renaming transports the admissible relation under the graph isomorphism; literal IDs need not be preserved. |
| Automorphism compatibility | True orbit members must not receive invented named privilege. |
| Visual optimality | Not required and explicitly deferred. |

For a universally safe family such as F1-ALG, `HardValid(G,P) = Inject(G,P)`
under the current floor. Assignment then has no additional topology obligation
for exact safety. This is a diagnostic simplification, not Production adoption.

## Semantic result shapes

| Shape | Assessment |
|---|---|
| SEM-A: one exact mapping | Reject as the complete source-grounded semantic; it over-constrains symmetric and multi-witness cases. |
| SEM-B: one hard-valid mapping with unspecified selector | Partial; safe only if the selector is separately lawful and every result is hard-valid. |
| SEM-C: all hard-valid mappings | Retain as the exact admissibility relation. It is source-independent and preserves future choice. |
| SEM-D: hard-valid mappings modulo accepted equivalence | Retain as a useful quotient/view, but only after the equivalence relation is proven; hard-validity alone is insufficient. |
| SEM-E: constraints plus separate materializer | Retain as the operational decomposition of SEM-C/SEM-D. |
| SEM-F: under-specified result | Reject; the hard-safe boundary is now expressible. |

The selected minimum semantic object is therefore **the set-valued hard-valid
mapping relation, optionally represented by proven equivalence classes, with a
separate materializer**. No one mapping is part of the semantic merely because
the runtime eventually needs concrete coordinates.

## Identity, covariance, and symmetry

For an isomorphism `φ : G → G'`, the assignment relation should commute with
`φ`: a renamed input transports the same structural admissibility and does not
change which structural possibilities are available. This is ISO-1 at the
assignment-relation level. ISO-0 (the same literal named mapping) is neither
required nor generally meaningful. ISO-2 is supported when assignments are
compared modulo the corresponding graph automorphism and compatible candidate
transform. ISO-3 and ISO-4 are weaker diagnostic projections only.

| Level | Meaning | Status |
|---|---|---|
| ISO-0 | Same literal named mapping | Not required; reject as universal floor. |
| ISO-1 | Renamed mapping transports exactly under `φ` | Required. |
| ISO-2 | Same assignment equivalence class under `φ` | Supported where the accepted transform is defined. |
| ISO-3 | Same hard-valid set structure/cardinality only | Insufficient by itself. |
| ISO-4 | Same hard-validity classification only | Minimum diagnostic projection, not the full semantic. |

Node handles are required to associate actual Nodes with candidates. Entity ID
spelling is not a geometry-role signal. Entity and Relation array order,
Dataset ID, labels, locale, metadata, stored coordinates, and randomness do
not provide coordinate-less source-grounded assignment semantics here. Manual
or stored coordinates may break symmetry in another workflow, but that is out
of scope.

For true automorphisms, K3, an equivalent-leaf star, a cycle, and a symmetric
motif all establish the same boundary: topology can distinguish the star
center from its leaves, but cannot name one leaf over another; it cannot name a
particular K3 or cycle Node for a non-equivalent candidate role. Canonical
labeling can repeat a representation, but cannot create semantic identity
inside an automorphism orbit. A universal deterministic, topology-only,
single-valued named assignment to non-equivalent roles is therefore
impossible in the symmetric case.

## Equivalence and role boundaries

| Layer | Meaning | Use |
|---|---|---|
| EQ-0 | Exact same named mapping | Representation comparison only. |
| EQ-1 | Candidate-family geometric symmetry or accepted context transform | May support a representation tie when proven. |
| EQ-2 | Graph-automorphism Node permutation plus compatible geometry transform | Accepted symmetry boundary. |
| EQ-3 | Both assignments merely satisfy GEO-0/GEO-3 | Hard safety only; not a quality tie. |
| EQ-4 | Future visual/presentation equivalence | Open, later responsibility. |

Two assignments can both be EQ-3 without being geometrically, visually,
routing-, crossing-, or label-equivalent. Consequently, a lexical tie is
quality-neutral only inside a proven accepted class, never merely because both
members are hard-valid.

Candidate-role equivalence has the following boundary:

| Basis | Result |
|---|---|
| ROLE-EQ-A: exact candidate-family automorphism | Sufficient when the transform preserves accepted predicates. |
| ROLE-EQ-B: accepted rigid/reflection/context transform | Sufficient when explicitly accepted. |
| ROLE-EQ-C: same hard-capacity descriptor | Insufficient; it does not prove geometry or quality equivalence. |
| ROLE-EQ-D: merely both admissible | Insufficient. |
| ROLE-EQ-E: future visual equivalence | Open and outside this floor. |

Likewise, exact structural automorphism orbit is a symmetry fact. Equal degree,
equal neighbor-degree multiset, or equal motif participation is only a
descriptor and must not be treated as an orbit or a total structural order.

## Assignment inputs and permissions

| Input or descriptor | Semantic classification |
|---|---|
| Node handles | Required operational association. |
| Candidate geometry family | Required; defines available geometry roles and predicates. |
| Simple topology | Hard-constraint source and optional search guidance. |
| Motif inventory / `R(S)` | Constraint or diagnostic descriptor; not a center rule. |
| Degree | Current heuristic/descriptor; not a semantic priority. |
| Neighbor-degree, motif participation, richer invariant | Descriptors or optional search heuristics; no global guarantee. |
| Orbit class | Symmetry constraint/boundary descriptor. |
| ID spelling | Forbidden as a non-equivalent role signal; conditional only inside a proven equivalence tie. |
| Entity/Relation array order | Forbidden as semantic input; serialization only. |
| Dataset ID, labels, locale, metadata | Forbidden here. |
| Stored coordinates | Separate user-owned workflow, not this input. |
| Candidate point index | Enumeration/serialization or search order only; not implicit mapping authority. |

The four explicit ID permissions are:

| Permission | Result |
|---|---|
| ID-A: derive a role from spelling | FORBID |
| ID-B: choose a non-equivalent geometry role | FORBID |
| ID-C: choose alternatives proven equivalent | CONDITIONAL |
| ID-D: stable serialization/log/report order | ALLOW |

Point-index permissions follow the same rule: `P-I0` enumeration/serialization
is allowed; `P-I1` search order is conditional and non-semantic; `P-I2`
semantic geometry priority and `P-I3` direct implicit Node mapping authority
are forbidden as inherited meaning. A0-CURRENT's point-index zip is current
mechanics, not a contract.

Structural descriptors may guide a future search in any order, including
high-`R`, motif participation, or degree first. Search order is not final role
meaning and no Production heuristic is selected. The current center is a
candidate geometry role only; “most important,” “highest degree,” “motif
center,” and “semantic root” are not accepted meanings. “Highest degree →
center” is not adopted.

## Materialization boundary

The semantic/materialized separation is coherent and required:

```text
assignmentSemantic(G, P) → admissible hard-valid relation or family-infeasible
materializeAssignment(admissible relation, separate policy) → one mapping
```

This is a conceptual illustration, not a TypeScript API. A later diagnostic
materializer may choose a member only after semantic admissibility is
established. It may choose within a proven candidate or graph symmetry class;
it may use a lexical representative for stable reporting only when that choice
is explicitly not role meaning and every selected representative is hard-valid.
The evidence does not prove that a lexical representative is visual-quality
neutral. User/stored-coordinate signals belong to another workflow, and a
future visual-quality selector remains deferred.

| Materialization option | Exact-floor status |
|---|---|
| MAT-A: arbitrary enumeration member | Conditional diagnostic representative only; must already be hard-valid. |
| MAT-B: candidate-equivalent member | Allowed when equivalence is proven. |
| MAT-C: graph-automorphism-equivalent member | Allowed when compatible geometry transform is proven. |
| MAT-D: lexical representative | Allowed only as representation/report choice, never as geometry semantics; not proven quality-neutral. |
| MAT-E: user/stored-coordinate signal | Separate workflow. |
| MAT-F: visual-quality selector | Deferred. |

No unique quality winner is established for Lighthouse or Ashen. Hard-safe
representative selection is therefore separable from quality selection.

## Required controls and reconciliation

| Control | `HardValid` / A0 interpretation |
|---|---|
| Lighthouse | F0 `F-SET=YES`; A0-CURRENT is hard-invalid through the known collinear/shared-ray assignment. The semantic result is the non-empty hard-valid relation, not A0. |
| Ashen Crown | F0 `F-SET=YES`; A0-CURRENT is hard-invalid through the known same-directed-ray fan-out. The semantic result remains a non-empty relation with no canonical named witness selected. |
| G7 | F0 `F-SET=NO`; capacity is insufficient for its shared-node ray demand. Assignment cannot repair the family. |
| K6 | F0 `F-SET=NO`; the dense motif family is infeasible under F0. Assignment is not blamed. |
| F1-ALG | `HardValid=Inject` for the tested controls by its exact no-three-collinear/no-same-directed-ray property. No topology assignment obligation remains for this floor. |

The existence of multiple Lighthouse/Ashen witnesses establishes a further
boundary: hard-valid non-equivalent mappings are possible, but no
source-independent visual-quality winner is established. Edge length,
compactness, crossings, bends, label clearance, angular quality, near-collapse,
and aesthetic symmetry are explicitly outside this semantic and remain
`QUALITY-SELECTION-DEFERRED`.

## Symmetry compatibility

| Graph orbit structure | Candidate-role structure | Result |
|---|---|---|
| All Nodes equivalent | All roles equivalent | Set/class semantic is sufficient; representative is pure representation. |
| One distinguished graph role + equivalent remainder | One distinguished role + equivalent remainder | A source-grounded distinguished assignment may exist; orbit members remain tied. |
| Equivalent graph orbit | One or more non-equivalent candidate roles | No topology-only named choice; retain a relation/class or require a separate external/quality signal. |
| Non-equivalent graph roles | Non-equivalent roles | Hard constraints may distinguish roles, but local descriptors do not automatically prove a unique global mapping. |
| Any graph | Multiple hard-valid non-equivalent assignments | Exact floor leaves them unranked. |

This is why SEM-C/SEM-D plus a separate materializer is preferable to a total
rank. The relation between structural Node roles and geometry roles is
constraint-based, not inherently a total ordering.

## Determinism and semantic candidates

| Determinism level | Assessment |
|---|---|
| DET-A: same exact concrete mapping | Not required universally. |
| DET-B: same admissible assignment set | Required semantic target. |
| DET-C: same equivalence-class set | Required where quotient semantics is used. |
| DET-D: same hard-valid/infeasible classification | Required minimum diagnostic projection. |
| DET-E: same representative modulo symmetry | Future materialization requirement, not yet a Production rule. |

The current exact-safety minimum is AD-3: permitted identity/order changes must
not change hard-validity. It does not require exact coordinates where symmetry
makes them underdetermined. Reload, persistence, stored automatic identity,
and Dataset serialization are out of scope.

The candidate semantic comparison is:

| Candidate | Assessment |
|---|---|
| AS-A: single deterministic topology-total-order mapping | Reject. |
| AS-B: single hard-valid mapping with unspecified selector | Partial operational view only. |
| AS-C: set of all hard-valid mappings | Retain. |
| AS-D: hard-valid mappings modulo graph/candidate equivalence | Retain as a proven quotient/view, not a substitute for defining equivalence. |
| AS-E: constraint relation plus separate materializer | Retain as the implementation boundary. |
| AS-F: universally-safe-family shortcut plus constrained mapping-sensitive assignment | Retain as a diagnostic distinction. |
| AS-G: under-specified | Reject. |

## Future 2×2 experiment readiness

The semantics permits a disposable diagnostic matrix without choosing a
Production algorithm:

| | A0-CURRENT | A1-HARD-SAFE diagnostic policy |
|---|---|---|
| F0 | May expose assignment loss despite non-empty `HardValid`. | Tests preservation of available hard feasibility. |
| F1-ALG | Hard-floor result is assignment-insensitive. | Same hard-floor result; no Production implication. |

Abstractly, A1 may materialize one member when `HardValid` is non-empty and
report family infeasible when it is empty. It does not specify how to search,
choose a representative, or optimize quality. The next checkpoint may design
this disposable seam while preserving existing settling, packing, routing, and
Production semantics.

## Decision

Primary case: **CASE 11 / MIXED**. Cases 1–8 are jointly supported: the
set-valued hard-valid relation is sufficient for the exact floor; a concrete
representative can be separated; automorphism prevents a universal unique
named mapping; `ASSIGN-SAFE` can be stated without a solver; equivalence-bound
ties are conditional; multi-witness quality selection is deferred; and the
experimental seam is designable.

Exact result:

1. The assignment semantic is the hard-valid mapping relation, not a unique
   topology-derived named total order.
2. `ASSIGN-SAFE` requires sound and conditionally complete hard-valid
   materialization for mapping-sensitive families; family infeasibility is a
   separate result.
3. True automorphism orbits require set/equivalence-class semantics or a
   separately declared representative; ID spelling cannot create role
   identity.
4. Structural descriptors may constrain or guide search without becoming a
   total role order.
5. Multiple hard-valid non-equivalent mappings remain unranked until a later
   quality semantic exists.
6. The family/assignment experimental seam can be designed without selecting
   a Production assignment algorithm.

Primary decision: **A — ASSIGNMENT SEMANTICS SUPPORTED; FAMILY/ASSIGNMENT
EXPERIMENT SEAM DESIGN NEXT**.

Selected next checkpoint, not started here:

`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-FAMILY-ASSIGNMENT-EXPERIMENT-SEAM-DESIGN1`

## State and non-changes

No Production source, candidate generator, candidate vocabulary, component
discovery, degree ranking, lexical ordering, Node assignment, runtime seam,
settling, packing, routing, label behavior, `seededPositions`, sample,
preview, Core, Extension, Personal Storage research, or `ai-knowledge` was
changed. F1-ALG was not adopted. No solver, score, threshold, force,
randomness, or visual-quality objective was introduced. The GitHub Sponsors
roadmap section was preserved.

No temporary worktree or harness was needed; the preceding bounded exact
evidence was sufficient for this design record. No cleanup beyond the normal
docs-only change is required.
