# LiaisonScape Initial-placement Seed Generation / Assignment Responsibility Audit

Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-GENERATION-ASSIGNMENT-RESPONSIBILITY-AUDIT1`
Date: 2026-09-02

## Result

Result: **CASE 11 / EXACT RESULT 1+2+3+4+5+6+7+8 / DECISION A**.

**Direction supported:** candidate-family capacity, structural role
description, hard-valid assignment, and representation-only tie handling are
separate responsibilities. When a mapping-sensitive family is F-SET feasible,
assignment must preserve available GEO-0/GEO-3 feasibility rather than allow
ID spelling or input order to select a hard-invalid non-equivalent role
allocation. A universally hard-safe family such as F1-ALG can remove that
assignment obligation for the exact floor. True automorphism orbits still
prevent a source-independent unique named assignment to non-equivalent roles.

This is a bounded responsibility audit. It does not choose an assignment
algorithm, ranking rule, solver, candidate family, coordinate, radius, phase,
settling rule, or visual-quality objective.

## Prior evidence and current source

The result reconciles the preceding records:

- Lighthouse and Ashen have F0 F-SET feasibility but known current-mapping
  failures;
- G7, K6, multi-high, and high-R controls have F0 family infeasibility, so no
  assignment can repair them; and
- F1-ALG is hard-safe under every injective assignment because its points have
  no three collinear and no same-directed-ray pair.

The live LiaisonScape source remains at `fd563340625fd3d88dc25baedc93c4f8fe69e5e7`
with no candidate-generation drift from the accepted baseline. Its current
pipeline is:

`Entity input → component discovery → degree rank + lexical tie-break → fixed
center/ring candidate positions → rank-to-position zip → bounded settling →
component packing`.

The diagnostic name for the pre-settling mapping is **A0-CURRENT**. It is not an
accepted semantic.

## Current responsibility reconstruction

| Stage | Current input | Topology? | ID spelling? | Chooses geometry role? | Responsibility assessment |
|---|---|---:|---:|---:|---|
| S0 component discovery | Entity IDs, valid Entity adjacency, non-self undirected pairs | YES | YES for deterministic traversal | Indirectly | discovery/context |
| S1 structural description | distinct-neighbor degree | YES | tie only | YES via rank | structural descriptor, not proven semantic priority |
| S2 candidate family | `N`, clearance, component frame, rank index, fixed ring slots | NO beyond prior stages | no direct | defines geometry roles | candidate construction |
| S3 assignment | rank order zipped to candidate index | indirectly | YES | YES | current assignment coupling |
| S4 settling | current points, adjacency, clearance, iterations | YES | inherited | changes positions | downstream derived movement |
| S5 packing | component extent and gap | NO local topology | inherited component order | translation only | downstream context |

A0-CURRENT therefore means: descending distinct-neighbor degree, lexical ID
tie-break, rank one at center, and later ranks assigned directly to source
candidate positions in slot order. Candidate point index is currently an
implicit mapping authority, not a semantic identity.

## Assignment-safe contract

**ASSIGN-SAFE is SUPPORTED conditionally:** for a mapping-sensitive family P,
if `F-SET(G,P)=YES`, automatic assignment must select or preserve a mapping in
the non-empty hard-valid assignment set instead of knowingly returning a
GEO-0/GEO-3-invalid mapping when a valid one exists. This guarantees exact
safety only; it does not optimize appearance.

For F1-ALG, ASSIGN-SAFE is vacuous at this floor: every injective mapping is
hard-valid. For F0, Lighthouse/Ashen show why it is needed. For G7/K6 and the
other family-infeasible controls, the valid assignment set is empty and the
responsibility belongs to candidate-family capacity, not assignment.

## Assignment input classification

| Input | Class | Current use | Hard-safety role | Future quality role |
|---|---|---:|---|---|
| A-I0 Node handles | REQ | YES | associate actual Nodes and positions | none by itself |
| A-I1 candidate family geometry | REQ | YES | available roles and exact predicates | possible later geometry criteria |
| A-I2 simple topology | CONSTRAINT/HEURISTIC | YES | derive hard constraints and structural descriptors | role guidance |
| A-I3 motif inventory | CONSTRAINT | NO in source | GEO-0/GEO-3 constraint source | no score |
| A-I4 `R(S)` | CONSTRAINT/HEURISTIC | NO | demand descriptor; not a center rule | search ordering only, if later justified |
| A-I5 degree | HEURISTIC/current | YES | not itself a hard guarantee | possible structural ordering |
| A-I6 motif participation | HEURISTIC | NO | not independently sufficient | diagnostic descriptor |
| A-I7 structural signature | HEURISTIC/OPEN | NO | may reduce ambiguity, not guarantee global validity | possible role guidance |
| A-I8 orbit class | CONSTRAINT | NO | protects automorphism boundary | symmetry-compatible choice |
| A-I9 Entity ID spelling | REPRESENTATION-ONLY/CONDITIONAL | YES | never non-equivalent geometry signal | tie only after equivalence proof |
| A-I10 Entity array order | FORBID | no semantic effect observed | must not change role choice | serialization only |
| A-I11 Relation array order | FORBID | no semantic effect observed | must not change constraints | serialization only |
| A-I12 Dataset ID | FORBID | NO | no placement seed | none |
| A-I13 labels/locale/metadata | FORBID | NO | not current safety inputs | presentation later |
| A-I14 stored coordinates | FORBID here | separate workflow | no favorable sample oracle | stored-coordinate behavior separate |
| A-I15 randomness | FORBID | NO | cannot break symmetry or IDs | none |
| A-I16 candidate geometry descriptors | CONSTRAINT/HEURISTIC | diagnostic only | exact role admissibility | later quality descriptors |

Node identity as an operational handle is required. Entity ID spelling as a
signal for choosing non-equivalent roles is forbidden. These are different
claims.

## Lighthouse and Ashen assignment loss

Source-exact A0-CURRENT reconstruction produced:

| Graph | F0 F-SET | A0-CURRENT | Failure | Valid witness |
|---|---|---|---|---|
| Lighthouse | YES | hard-invalid | `{clara,maya,thomas}` exactly collinear; Maya/Thomas also share opposite-ray relation at Clara | YES, established by preceding F0 oracle |
| Ashen Crown | YES | hard-invalid | exact same-directed-ray pairs in motif fan-out at Darius and Elara | YES, established by preceding F0 oracle |

Lighthouse A0 rank order is `clara, lighthouse, maya, beacon, elias, sofia,
thomas, archive, authority, daniel`; the relevant Maya/Thomas placement is
the `45°`/`225°` opposite-slot pair around Clara. Ashen's A0 starts with Elara,
then Kael, Darius, and the remaining degree groups. The audit does not select
a canonical “bad Node”; the failure is a mapping outcome.

The topology-only diagnostic signatures distinguish all Nodes in the tested
Lighthouse and Ashen samples, but that does not prove a unique visual-quality
mapping. Topology helps describe roles; it does not automatically choose a
geometry role or resolve every global constraint.

## F1, G7, and K6 controls

F1-ALG satisfies every injective mapping for Lighthouse, Ashen, and K3 by its
exact family proof. Structural ranking is therefore not needed for the exact
floor under that family; this has no Production implication.

For G7, K6, multi-high, and high-R-above-capacity controls, F0 F-SET is NO and
the admissible assignment set is empty. No lexical tie rule, structural order,
or search heuristic can repair those controls while F0 remains fixed. This is
the required family-infeasible boundary.

## ID and order behavior

The temporary source-equivalent probe classified the current behavior as:

| Probe | Topology | F0 family | A0 mapping | Hard result |
|---|---|---|---|---|
| Lighthouse reverse/cyclic rename | unchanged | unchanged | changed | mixed; cyclic rename removed the exact failure in the probe |
| Ashen reverse/cyclic rename | unchanged | unchanged | changed | hard-invalid pattern changed |
| Entity array reversal | unchanged | unchanged | unchanged | stable |
| Relation array reversal | unchanged | unchanged | unchanged | stable |
| symmetric controls | unchanged | unchanged | unchanged family | named total order not justified |

The ID categories are therefore: ID-0 for representation-only uses; ID-1 only
conditionally among proven equivalent roles; ID-2 when a rename changes a
non-equivalent role allocation while hard validity remains; ID-3 when a rename
changes hard-valid versus hard-invalid status; and ID-4 for mixed cases. The
real samples exhibit ID-2/ID-3 evidence. Array-order stability must not be
mistaken for ID-isomorphism stability.

## Structural ordering and symmetry

| Strategy | Assessment | Hard-feasibility guarantee |
|---|---|---|
| SO-0 degree only | heuristic/current precursor | none |
| SO-1 degree + lexical ID | current, not quality-neutral | none |
| SO-2 richer invariant topology signature | useful diagnostic/optional guide | not proven sufficient globally |
| SO-3 exact orbit/equivalence classes | supported boundary descriptor | class semantics, not total order |
| SO-4 no structural order + hard-valid constraint | semantically safe direction | requires a future assignment policy/oracle |
| SO-5 unresolved | retained for visual quality | none |

K3, equivalent-leaf star, cycle, and symmetric motif controls show that true
automorphism orbits can contain Nodes for which topology supplies no unique
named order. A source-independent assignment may preserve equivalent geometry
roles, return a set/equivalence class of assignments, or use an external/user
signal in another workflow. It may not use ID spelling to pretend that
non-equivalent roles are source-grounded.

| Symmetry-breaking option | Assessment |
|---|---|
| SB-A equivalent geometry roles for unresolved orbit members | supported direction |
| SB-B set-valued/equivalence-class assignment | supported direction |
| SB-C external deterministic tie after equivalence proof | conditional |
| SB-D lexical ID for non-equivalent role | reject |
| SB-E stored/user coordinate signal | separate workflow |

Canonical labeling may make a representation repeatable, but cannot create a
semantic distinction between true automorphs.

## Determinism, ties, and globality

Current assignment is deterministic and input-order stable, but not
ID-isomorphism stable. The minimum exact-safety requirement is AD-3: unchanged
hard-validity under permitted identity/order transformations. AD-0/AD-1/AD-2
and visual-quality-neutral ties remain future requirements.

Multiple hard-valid F0 mappings exist for Lighthouse and Ashen. Current
evidence gives no source-independent reason to select one as visually best.
“Hard-safety-neutral” is therefore possible, while “visual-quality-neutral” is
not proven. A global validity condition is relevant: local degree ranking alone
is not proven sufficient to preserve a globally valid mapping. No Production
CSP, SAT, permutation optimizer, or scalar score was selected.

The center is a geometry role of the current implementation only. No accepted
semantic meaning attaches to “center,” and “highest degree goes to center” is
not adopted as a rule.

## Future seam

The conceptual seam is supported as **SEAM-1**: a later disposable experiment
may expose `candidate family` and `assignment policy` as separate variables:

`component → candidate family → assignment policy → seed positions → existing settling`

This seam is not implemented and is not a Production refactor. The next design
must formalize hard-safe assignment, Node-handle versus ID semantics,
structural constraints, candidate-role equivalence, and symmetry ties before a
runtime experiment is attempted.

## Hypotheses and falsification

| Hypothesis | Status |
|---|---|
| H1 F0 Lighthouse/Ashen show assignment loss | SUPPORTED |
| H2 lexical tie-breaking is not quality-neutral | SUPPORTED |
| H3 structural descriptors may guide but do not guarantee global validity | SUPPORTED |
| H4 true orbits prevent unique topology-only named ordering | SUPPORTED |
| H5 F1-ALG removes hard assignment responsibility for the floor | SUPPORTED |
| H6 family infeasibility and assignment failure are separate | SUPPORTED |

FALS-1 through FALS-7 were not triggered: A0 was not hard-valid, Lighthouse/
Ashen F0 F-SET remained feasible, rename changed role/hard results, current
degree+lexical behavior was not isomorphism-stable, symmetric controls had no
unjustified unique named order, F1 validity was assignment-insensitive, and
G7/K6 could not be repaired by reassignment.

## Decision and state

The selected exact decision is **A: HARD-SAFE ASSIGNMENT RESPONSIBILITY
SUPPORTED; DESIGN THE ASSIGNMENT SEMANTIC NEXT**.

The selected next checkpoint is exactly:

`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-ASSIGNMENT-SEMANTICS-DESIGN1`

It is selected only and is not started by this record.

No Production Initial Placement, candidate generator, candidate vocabulary,
degree ranking, lexical ordering, assignment, settling, packing, routing,
feedback, labels, samples, `seededPositions`, preview, Core, Extension,
Storage Research, or `ai-knowledge` was changed. F1-ALG was not adopted for
Production. No visual-quality conclusion was made.

The temporary assignment diagnostic was removed after evidence capture. The
checkpoint remains unpushed.
