# LiaisonScape Initial-placement Seed Assignment Equivariance Follow-up

Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-ASSIGNMENT-EQUIVARIANCE-FOLLOWUP1`
Date: 2026-09-02

## Result

Result: **CASE 6 / EXACT RESULT 1+2+3+4+5+6+7 / DECISION A**.

The follow-up resolves the responsibility boundary for the current exact
hard-safety floor. The Lighthouse rename finding belongs to the A0 selector,
not to the underlying `HardValid` relation. Identifier spelling may affect
operational order, but it must not decide whether the GEO-0/GEO-3 floor is
satisfied. A mapping-sensitive family therefore needs a hard-safe assignment
if its available feasibility is to survive representation-only changes. An
assignment-insensitive family can remove that assignment burden at the
hard-safety level.

This does not establish a visual-quality invariant, a Production family, a
Production assignment algorithm, or a universal high-quality layout. The
selected next checkpoint is the practical candidate-family experiment design,
not an implementation:

`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRACTICAL-CANDIDATE-FAMILY-EXPERIMENT-DESIGN1`

## Preceding Seam 1 finding

The preceding [Seed Family / Assignment Experiment Seam 1 result](liaisonscape-initial-placement-seed-family-assignment-experiment-seam1-result.md)
reported `CASE 11 / EXACT RESULT 1+2+3+4 / DECISION E` at commit `318fcb8`:

- Lighthouse and Ashen Crown have F0 `F-SET=YES`, with original F0+A0
  hard-invalid and F0+A1 hard-valid;
- G7 and K6 remain F0 `FAMILY-INFEASIBLE` under A1;
- F1-ALG is hard-valid under A0 and A1; and
- the baseline-transparent disposable seam passed.

The N6 finding was that deterministic ID rename changed Lighthouse F0+A0
from `HARD-INVALID` to `HARD-VALID`. This follow-up asks whether the exact
hard-safety relation changed or only the current selector's chosen mapping.

## Start-state and scope

The supplied instruction's expected e2r-spec HEAD was older than the live
repository. The live authority was preserved: e2r-spec was at `d9be7d1`, the
Suite milestone was already recorded, and the current selected Initial
Placement checkpoint was this equivariance follow-up. The earlier Seam 1
checkpoint was already complete; it was not re-run broadly.

LiaisonScape remained at `fd563340625fd3d88dc25baedc93c4f8fe69e5e7` on `main`
tracking `origin/main`. Its pre-existing dirty Lighthouse samples were
preserved. The e2r-spec protected Session file was preserved and not staged.
The routing preview was not started or changed; the previous probe had found
no listener on port 5173. The `ai-knowledge` playbook dirty state was
preserved and no knowledge promotion was made.

No source, sample, UUID, candidate family, assignment algorithm, settling,
routing, label, UI, Handoff, Core, Extension, or Dataset change was authorized
or made.

## UUID realism and user-edit distinction

Normal E2R Object IDs are expected to be opaque, UUID-like stable handles. The
rename probe models representation-level changes that can arise through:

- independently authored isomorphic Datasets;
- import or conversion;
- merge or reconstruction workflows;
- external E2R producers;
- future AI-assisted extraction; and
- workspace-to-portable-Dataset export.

| Scenario | Expected ID behavior | Semantic implication |
|---|---|---|
| U0 reopening one Dataset | IDs remain stable | current deterministic output can remain stable |
| U1 manual ID edit | normally not an ordinary workflow | immediate UI urgency is low |
| U2 independently generated isomorphic IDs | IDs may differ | hard-safety classification must remain neutral |
| U3 import/conversion | IDs may be regenerated | lexical geometry roles must not change the hard floor |
| U4 merge/rebuilt workspace identity | IDs and input order may differ | cross-Dataset hard-safety capability must transport |

UUID immutability reduces immediate interactive severity, but it does not make
lexical UUID spelling a valid geometry semantic. The issue is primarily a
future interoperability/reproducibility defect rather than an emergency
current-user bug.

## Exact graph isomorphism

Let `G=(V,E)` and `G'=(V',E')` be the accepted Entity/Relation topology used
by Initial Placement, with an isomorphism `phi: V -> V'` that is bijective and
preserves the undirected adjacency relation and graph-derived accepted motifs.
The F0 candidate family is the same finite unlabeled local point family for a
component of the same size.

For a Node-to-candidate mapping `f: V -> P`, define:

```text
T_phi(f) = f . phi^-1
```

This is a bijection between injective mappings for `G` and `G'`. It changes
representation-level Node identity while preserving the accepted placement
inputs. Labels, locale, metadata, stored coordinates, presentation, and
application state are not part of this audit.

## Equivariance definitions

| Notion | Meaning | Required now? |
|---|---|---|
| EQV-REL | `f` is hard-valid iff `T_phi(f)` is hard-valid under the transported graph | YES |
| EQV-CLASS | hard-valid, hard-invalid, and family-infeasible classification is unchanged under representation-only rename | YES for accepted automatic hard-safety semantics |
| EQV-REP | one concrete materialized mapping transports literally | NO; useful only as an operational property |
| EQV-VIS | rendered visual output is identical/equivalent under rename | NO at this checkpoint; not established |

EQV-REL and EQV-CLASS are semantic hard-safety requirements. EQV-REP is not
required when several valid witnesses exist, particularly around automorphism
orbits. EQV-VIS is a separate future presentation question.

The minimum research contract is:

> For coordinate-less Initial Placement, identifier spelling may serve as an
> operational handle or representation/search order, but must not determine
> whether the accepted exact hard-safety floor can be satisfied. Under a graph
> isomorphism that changes only representation-level identity while preserving
> accepted placement inputs, the admissible hard-valid relation and
> family-feasibility classification must transport accordingly. A concrete
> hard-valid representative need not remain literally identical when multiple
> equivalent or non-ranked witnesses exist.

This is an audited design direction, not a new normative specification rule.

## HardValid transport result

The accepted GEO-0 and GEO-3 predicates use topology-derived motif roles and
exact point geometry. They do not inspect ID spelling. Under `phi`, each
triangle's exact area predicate and each shared-Node exact same-directed-ray
predicate have the same truth value after transport. Therefore:

```text
f in HardValid(G, P)
iff
T_phi(f) in HardValid(G', P)
```

The hard-valid relation is representation-neutral for this accepted floor.
Consequently `F-SET` and family-infeasible status also transport. The previous
Lighthouse rename result changed which A0 mapping was selected; it did not
change the underlying predicate or family.

This conclusion is an exact structural transport argument reconciled with the
prior exact Lighthouse/Ashen witness and transform evidence. No factorial
enumeration of every Lighthouse mapping was needed, and no visual metric or
approximation was introduced.

## Current A0 classification

| Question | Result |
|---|---|
| Deterministic? | YES |
| Stable against Entity/Relation array order? | YES, for the current sorted-ID source path |
| ID-isomorphism equivariant? | NO |
| Hard-classification invariant under rename? | NO; Lighthouse is the exact counterexample |
| Lexical ID a permitted operational tie/order? | YES, conditionally |
| Lexical ID an accepted geometry semantic? | NO |

The current distinction is:

```text
deterministic != representation-equivariant
```

The appropriate future status is **A0-P4 / mixed**: retain A0 as the current
baseline and a deterministic operational/search-order ingredient, but do not
treat it as an accepted hard-safety semantic. No immediate Production edit is
made by this research checkpoint.

## Severity

Severity: **SEV-E / mixed, primarily SEV-B**.

It is not a current emergency instability while IDs remain stable and
automatic placement remains Derived. It is nevertheless a semantic and
interoperability concern because equivalent representations can select
different geometry roles and different hard-safety outcomes. It is a future
Initial Placement design blocker for any claim that the current lexical zip
itself provides representation-neutral hard safety, but it is not a release
blocker for this checkpoint.

## A1 semantic and materializer result

The prior exact Seam 1 run showed A1-HARD-SAFE sound across the required
Lighthouse, Ashen Crown, K3, array-order, and rename transformations. Its
literal witness may change under rename, but each materialized witness remains
inside the transported `HardValid` relation. This supports:

- A1 hard-classification equivariance: YES;
- A1 soundness under permitted transforms: YES;
- literal representative invariance: NOT REQUIRED;
- lexical search order: allowed only conditionally, because it may change the
  first witness but not admissibility, F-SET, hard-validity classification,
  soundness, or completeness semantics; and
- A1 as a Production algorithm: NO.

## Automorphism boundary

True automorphism orbits can contain structurally indistinguishable Nodes.
Topology alone cannot provide a source-grounded semantic distinction between
members of the same orbit. Canonical labeling or an invariant total order may
produce a repeatable representation, but cannot create meaning that the graph
does not contain.

Therefore a universal named topology-only total order is not a semantic
requirement, literal representative identity is not required, and a
materializer may choose one operational witness. Semantic equivalence must be
judged at EQV-REL/EQV-CLASS, not EQV-REP. K3 and the equivalent-leaf star are
symmetry controls, not evidence that one named Node has a unique role.

## Three responsibility strategies

| Property | S1 invariant total order | S2 hard-safe assignment | S3 assignment-insensitive family |
|---|---|---|---|
| GEO-0/GEO-3 safety | Not guaranteed by order alone | Enforced for a non-empty family | Supplied by every injective mapping |
| Lighthouse ID classification | Does not inherently resolve it | Resolves it | Removes assignment dependence |
| True automorphism compatibility | Cannot create named meaning | Classification compatible; witness may vary | Classification compatible; witness may vary |
| Unique named role required | Tempting but unsupported | No | No |
| F0 family infeasibility | Does not fix | Does not fix | Requires a sufficiently capable family |
| Global search | Not necessarily | Often required | Not required if property is proved |
| Candidate-family burden | Low | Existing family can remain | Higher |
| Assignment burden | Low but unsafe | High for mapping-sensitive families | Low at hard-safety level |
| Representative may vary | Possible | Yes | Yes |
| Visual quality solved | No | No | No |
| Exact evidence | Insufficient alone | Supported by prior A1 evidence | Supported diagnostically by F1-ALG |
| Production readiness | Not selected | Not selected | Not selected |

S1 is not enough. S2 and S3 are not mutually exclusive: a practical design
may prefer a stronger family and retain a hard-safe fallback or validation
boundary. This checkpoint identifies responsibilities, not architecture.

## Family contracts

| Family option | Hard-safety totality | Assignment burden | Equivariance burden | Automorphism boundary | Visual-quality freedom | Production relevance |
|---|---|---|---|---|---|---|
| FAM-E0: mapping-sensitive family plus hard-safe assignment | If F-SET is non-empty and assignment is complete | High | Assignment must preserve feasibility | Named representative still non-unique | Preserved | Candidate direction only |
| FAM-E1: every injective mapping hard-safe | If such a family exists | Low | Classification becomes order-neutral | Witness still non-unique | Preserved but unverified visually | Strong diagnostic property |
| FAM-E2: family contains one hard-valid mapping | Yes only with a sound materializer | Medium/high | Materializer must be equivariant at class level | Witness may vary | Preserved | Weaker fallback contract |
| FAM-E3: under-specified | Unknown | Unknown | Unknown | Unknown | Unknown | Reject |

The strong diagnostic property is:

```text
UNIVERSALLY-ASSIGNMENT-SAFE(G, P)
iff
HardValid(G, P) = Inject(G, P)
```

This is stronger than:

```text
F-SET(G, P)=YES
iff
HardValid(G, P) is non-empty
```

F0 Lighthouse has F-SET YES but is not universally-assignment-safe. F1-ALG
is universally-assignment-safe for the current exact floor under the accepted
finite parabola reasoning and tested controls.

## Universal domain and totality levels

The scope labels are kept separate:

| Level | Meaning | Current status |
|---|---|---|
| UA-G | property for one graph | SUPPORTED for tested controls under the current floor |
| UA-C | property for the tested corpus | SUPPORTED for the F1 diagnostic evidence |
| UA-N | property for every graph of size N | SUPPORTED for the current GEO-0/GEO-3 floor via the finite parabola witness, not future constraints |
| UA-FINITE | property for every finite valid graph | SUPPORTED WITH QUALIFICATION for the current exact floor only |

The qualification is essential: this is a finite hard-safety existence result
for GEO-0/GEO-3, not a theorem about visual usability, routing, labels,
compactness, or any future constraint.

The audited "any pattern" statement is therefore:

> **SUPPORTED WITH QUALIFICATION:** for every finite valid coordinate-less
> component, the current exact GEO-0/GEO-3 floor has a finite injective
> hard-safe seed construction in the mathematical diagnostic sense, while no
> universal visual-quality optimum is established.

## F1-ALG as an existence witness

F1-ALG uses exact `P_i=(i,i^2)`. Distinct parabola points are injective, no
three are collinear, and two distinct points viewed from a shared third point
cannot occupy the same directed ray without creating a forbidden collinearity.
Thus every injective finite mapping satisfies the current GEO-0/GEO-3 floor.

F1 demonstrates that UUID-dependent hard-safety failure is not intrinsically
unavoidable. It does not demonstrate good appearance, compactness, useful
scale, routing quality, label quality, or a Production candidate family.

## TOT levels

| Level | Meaning | Current status |
|---|---|---|
| TOT-0 | function returns some coordinates | SUPPORTED by current runtime |
| TOT-1 | coordinates are injective | SUPPORTED for the diagnostic finite family |
| TOT-2 | accepted GEO-0/GEO-3 hard-safe coordinates | SUPPORTED in the finite mathematical diagnostic sense |
| TOT-3 | usable/readable placement | OPEN |
| TOT-4 | high-quality placement | OPEN |

TOT-2 is the appropriate long-term minimum hard-safety baseline for the
current exact floor, subject to an explicit finite-graph/domain boundary.
TOT-3 and TOT-4 remain later presentation and visual-quality goals.

## Exact coordinate and cross-Dataset invariance

Isomorphic ID-renamed graphs need not produce literally identical coordinates
modulo Node renaming at the current stage. The least over-constraining current
boundary is:

| Invariant | Requirement |
|---|---|
| F-SET / family feasibility | YES |
| hard-safety capability | YES |
| EQV-REL / EQV-CLASS | YES |
| exact selected witness | NO |
| exact screen coordinates | NO at this checkpoint |
| exact visual appearance | NO at this checkpoint |

This corresponds to `COORD-2`: exact coordinate identity is not required for
the hard floor; relation/classification equivariance is required. A later
visual contract may impose symmetry-equivalence or stronger visual invariance,
but that is not established here.

For two independently authored isomorphic Datasets, the audit does not claim
that their semantic facts, labels, metadata, or user intent are identical. It
claims only that ID spelling alone must not create a distinction in the
accepted exact hard-safety responsibility when those other placement inputs
are intentionally excluded.

## Practical consequence matrix

| Scenario | ID may differ? | Current A0 hard result may differ? | User-visible urgency | Future semantic concern |
|---|---:|---:|---|---|
| reopening the same Dataset | NO in ordinary use | Usually NO | Low | Low |
| independently authored isomorphic Dataset | YES | YES | Low to medium | High |
| import/conversion | YES | YES | Medium | High |
| merge/rebuild | YES and order may differ | YES | Medium | High |
| manually edited ID | Possible but not expected | YES | Low immediate | High if accepted as semantic |
| future workspace export | YES | YES | Unknown | High |

## Interoperability boundary

E2R interoperability does not require two isomorphic Datasets to be
semantically identical. Their names, descriptions, labels, metadata, locale,
provenance, and user intent can legitimately differ. This audit removes those
inputs intentionally and tests only whether representation-level identity
spelling changes hard-safety classification.

The result is narrow: stable opaque IDs are valid object handles, but their
lexical spelling is not an accepted geometry semantic. The Dataset Core
remains self-contained and unchanged; application behavior and presentation
remain application responsibilities.

## Family-level escape and mapping-sensitive contracts

The family-level escape contract is supported as a diagnostic direction:

> If a candidate family is assignment-insensitive for the accepted exact hard
> floor (`HardValid = Inject`), identifier-dependent materialization order
> cannot change hard-safety classification, although it may still change the
> concrete geometry and therefore cannot be presumed visual-quality-neutral.

The mapping-sensitive contract is also supported:

> If a candidate family is mapping-sensitive, hard-safety equivariance requires
> assignment to preserve available `HardValid` feasibility independently of
> representation-only ID spelling; a deterministic lexical zip is
> insufficient when it can select a hard-invalid mapping.

The two contracts form a layered design space, not a false dichotomy.

## Decision matrix

| Option | Resolves Lighthouse ID hard-class sensitivity | Handles automorphism | Handles G7/K6 family infeasibility | Preserves future visual freedom | Requires Production algorithm now | Source-independent | Exact evidence strength | Decision |
|---|---|---|---|---|---|---|---|---|
| R1 keep A0 lexical zip as semantic | NO | NO | NO | YES | NO | YES | Refuted by N6 | REJECT |
| R2 require invariant topology total order | Partial | NO for named orbit meaning | NO | YES | NO | YES | Not sufficient | REJECT as hard-safety requirement |
| R3 HardValid-preserving assignment | YES | YES at classification level | NO | YES | NO | YES | Strong prior exact evidence | RETAIN as mapping-sensitive contract |
| R4 assignment-insensitive candidate family | YES at classification level | YES at classification level | Only with sufficient family capacity | YES | NO | YES | Strong diagnostic F1 evidence | RETAIN as candidate-family direction |
| R5 R3 + R4 layered approach | YES | YES | Separate family capacity boundary | YES | NO | YES | Best combined evidence | PREFERRED RESEARCH DIRECTION |
| R6 defer until visual quality | NO | NO | NO | Unknown | NO | YES | Does not answer hard safety | REJECT |

R5 is a research direction, not a Production architecture decision. It keeps a
stronger candidate family responsible for ordinary hard-safe totality and a
hard-safe assignment/validation boundary available for mapping-sensitive or
exceptional cases.

## H1-H7 hypotheses

| Hypothesis | Status | Evidence |
|---|---|---|
| H1: Lighthouse rename changes A0 selection, not HardValid relation | SUPPORTED | Exact predicate transport plus prior F0/F1 transform evidence |
| H2: ID spelling is not required by GEO-0/GEO-3 | SUPPORTED | Predicates use topology and exact geometry only |
| H3: invariant topology total order is not universally available or sufficient | SUPPORTED | Automorphism boundary and F0 assignment counterexample |
| H4: hard-safe assignment can make mapping-sensitive classification equivariant | SUPPORTED | Prior complete exact A1 transform evidence |
| H5: assignment-insensitive family removes order-dependent hard classification | SUPPORTED | F1 exact `HardValid=Inject` evidence |
| H6: finite general-position evidence supports current-floor hard-safe totality | SUPPORTED WITH QUALIFICATION | Current GEO-0/GEO-3 only; not visual quality or future constraints |
| H7: UUID immutability lowers immediate severity but not semantic issue | SUPPORTED WITH QUALIFICATION | Stable reopen behavior differs from independent representation changes |

## FALS-1 through FALS-8

| Falsification | Status |
|---|---|
| FALS-1: rename changes the transported HardValid relation | NOT TRIGGERED |
| FALS-2: GEO-0/GEO-3 depend on ID spelling | NOT TRIGGERED |
| FALS-3: a topology-only total order is proven universal and sufficient | NOT TRIGGERED |
| FALS-4: A1 classification changes under permitted rename | NOT TRIGGERED |
| FALS-5: F1 hard classification changes under injective choice | NOT TRIGGERED |
| FALS-6: prior general-position evidence does not support finite current-floor totality | NOT TRIGGERED |
| FALS-7: UUID identity is normative geometry semantics in E2R | NOT TRIGGERED |
| FALS-8: live source/baseline drift invalidates prior evidence | NOT TRIGGERED |

## Case, exact result, and decision

Primary case: **CASE 6 - a combination of family sufficiency and assignment
safety is the only currently supported direction**.

Validated result clauses:

1. The Lighthouse rename failure belongs to A0 materialization; the underlying
   `HardValid` relation is representation-neutral.
2. Identifier spelling may control operational order but must not control exact
   hard-safety classification.
3. A mapping-sensitive family requires hard-validity-preserving assignment.
4. An assignment-insensitive family can remove hard-safety dependence on Node
   order without making visual output order-independent.
5. True automorphism prevents a universal source-grounded named total order.
6. The current GEO-0/GEO-3 floor supports finite-graph hard-safe totality with
   a strict current-floor qualification.
7. UUID immutability reduces immediate severity but does not make lexical UUID
   a valid geometry semantic.

Decision A is selected: **equivariance responsibility is resolved at the
semantic hard-safety level; design the practical candidate-family experiment
next**.

| Decision | Status | Reason |
|---|---|---|
| A | SELECTED | Practical candidate-family experiment is the smallest next design step |
| B | NOT SELECTED | F2 is not required to resolve this boundary |
| C | RETAINED BOUNDARY, NOT NEXT | Hard-safe assignment remains a fallback contract |
| D | NOT SELECTED | Current finite-floor existence direction is sufficiently supported, with qualification |
| E | NOT SELECTED | Exact predicate transport is resolved at the accepted abstraction level |
| F | NOT SELECTED | Automorphism limits are already established as a semantic boundary |
| G | NOT SELECTED | No smaller missing-evidence check is needed for this responsibility decision |
| H | NOT SELECTED | No baseline drift or provenance failure occurred |

Selected next checkpoint, not started automatically:

`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRACTICAL-CANDIDATE-FAMILY-EXPERIMENT-DESIGN1`

Its purpose is to design a Production-relevant but still diagnostic family
experiment without adopting F1-ALG as a visual layout or changing Production.

## Production boundary

Production changes: **NO**.

The following remain unchanged:

- Production Initial Placement source and candidate generator;
- candidate vocabulary, F0, F1, and A0 implementation;
- UUID generation and Object ID semantics;
- lexical ordering, settling, packing, routing, and labels;
- `seededPositions`, samples, UI, Handoff, Core, Extensions, and Dataset
  semantics; and
- the current cross-repository release priority.

No A1 implementation, F1 adoption, canonical labeling, graph canonicalization,
WL refinement, UUID replacement, new candidate family, or visual inspection
was performed.

## Knowledge Candidate Check

Candidate: **YES - HYPOTHESIS STRENGTHENED / REFINED**.

Potential reusable principles are that opaque identifiers can be valid
operational handles without being geometry semantics; determinism is weaker
than representation equivariance; an assignment-insensitive family can remove
hard-safety dependence on representative order; universal hard safety differs
from universal visual quality; and an equivariant semantic relation can have
non-unique concrete representatives.

These principles remain unpromoted. `ai-knowledge` was not modified.
