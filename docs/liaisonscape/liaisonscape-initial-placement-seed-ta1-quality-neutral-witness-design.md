# LiaisonScape Initial-placement Seed TA-1 Quality-neutral Witness Design

## Checkpoint

E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-TA1-QUALITY-NEUTRAL-WITNESS-DESIGN1

Date: 2026-09-02
Status: Complete, design-only
Result: CASE 2 / EXACT RESULT 1+2+4+5+6+7+8+9+10 / DECISION B

## Exact result and decision

1. SEMANTIC EVIDENCE - Objective-independent selection, quality neutrality,
   semantic equivalence, and rename/orbit transport are distinct properties.
2. TA-1 EVIDENCE - The committed topology-signature fields and class-level
   transport are sufficient to define a fixture-local operational freezer, but
   complete historical class-order and candidate-correspondence semantics are
   not committed.
3. CANDIDATE EVIDENCE - FP1 candidate roles are geometrically non-equivalent,
   so literal correspondence can change the structural profile.
4. WITNESS EVIDENCE - A single new deterministic literal witness can be
   selected without inspecting altitude, FAN-P1, profile, visual, routing, or
   label output, but it is not semantically neutral.
5. PROVENANCE EVIDENCE - The selected witness is NEW, operational, and
   fixture-local. It does not reconstruct the historical Experiment1 witness.
6. CLAIM EVIDENCE - The witness supports at most CLAIM-P0. It cannot support a
   policy-level TA-1 quality claim without stronger transport and class
   invariance evidence.
7. EQUIVARIANCE EVIDENCE - K3 orbit semantics remain distinct from literal
   representative selection.
8. BOUNDARY PRESERVED - No objective, altitude, FAN-P1, profile, visual,
   routing, or label output selects the witness.
9. BOUNDARY PRESERVED - Candidate index is an operational handle, not a
   quality rank.
10. DESIGN READY - A new operational TA-1 witness can be frozen next with
    explicit provenance, but the existing six-policy matrix must not silently
    treat it as semantically neutral TA-1.

Decision B: one new operational TA-1 witness is valid for CLAIM-P0 only. It
must use a distinct provenance class, WIT-NEW-OPERATIONAL, rather than
WIT-NEW-NEUTRAL.

Selected next checkpoint:

E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-TA1-OPERATIONAL-WITNESS-RECONSTRUCTION1

The witness is designed but not created or executed by this checkpoint. No
objective result is produced and no Production behavior is changed.

## Preceding Manifest Reconstruction Design1

The preceding checkpoint was
E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-TOPOLOGY-AWARE-ASSIGNMENT-MANIFEST-RECONSTRUCTION-DESIGN1,
recorded by commit 19bef00. It classified TA-1 as WIT-CLASS-ONLY / MAN-2
because the prior literal mapping and complete candidate correspondence were
not committed.

That finding remains true. This checkpoint does not upgrade the old witness,
recover deleted results.json, or claim that the previous Experiment1 literal
mapping has been found. It defines a separate provenance-safe path for one
new operational witness.

## Source and baseline reconciliation

The accepted LiaisonScape Initial Placement source baseline remains
fd563340625fd3d88dc25baedc93c4f8fe69e5e7. The current
src/auto-layout.ts has no material drift relative to that accepted baseline.
No source behavior is used to fill missing TA-1 research semantics.

The previous topology-aware result established that TA-1 class transport was
stable in its bounded rename/input-order controls, while its exact literal
mapping was not committed. It also established that FP1 candidate positions
are non-equivalent on the real controls. This makes a new literal witness
usable as a bounded operational observation, but not neutral in the stronger
semantic sense.

Protected state remains outside this design:

- sessions/E2R-Session-0052.md remains untouched and unstaged;
- dirty LiaisonScape Lighthouse samples remain untouched;
- routing preview remains preserved;
- residual disposable shells remain preserved and unused; and
- the dirty ai-knowledge diagnostic playbook remains unchanged.

## TA-1 committed semantic core

The committed TA-1 description is:

~~~text
topology-signature class ordering
deterministic and quality-neutral
no semantic candidate correspondence claim
~~~

The accepted topology-derived fields are:

- distinct-neighbor degree;
- sorted neighbor-degree multiset;
- motif-membership count;
- overlap-cluster membership count;
- shared-motif-neighbor count;
- motif-neighbor degree multiset;
- boundary/context incident count; and
- component membership.

These fields define graph-derived descriptors and class evidence. They do not,
by themselves, define a universal total order, candidate correspondence, or
quality preference.

The committed evidence supports:

- graph-derived class construction;
- class-level transport under the tested isomorphism;
- preservation of K3 orbit semantics; and
- separation of topology roles from candidate geometry.

It does not support:

- a complete historical class-order tuple;
- a class-internal historical fallback;
- a candidate-role correspondence;
- a prior literal Node-to-FP1 mapping; or
- a policy-level quality claim for any one literal member.

## Ambiguity audit

| Dimension | Current status |
|---|---|
| Signature field set | Committed at the bounded descriptor level. |
| Signature value definitions | Sufficient for the accepted fixture descriptors; exact operational serialization still must be frozen. |
| Class membership | Supported as topology-derived equivalence/class evidence. |
| Distinct-class order | Not historically committed as a complete semantic order. |
| Class-internal order | Not committed. |
| Class-to-candidate correspondence | Not committed. |
| Candidate geometric roles | Describable exactly for FP1, but non-equivalent. |
| Historical literal witness | Not found. |

The new freezer must therefore be an operational rule, not a reconstruction of
TA-1 semantics. It may use the accepted signature values to obtain a
reproducible order, but it must label that order as a witness-freezing
convention.

## Neutrality dimensions NEUT-R0..R5

| Dimension | Requirement | Selected operational freezer |
|---|---|---|
| NEUT-R0 objective independence | Do not inspect registered objective/profile output. | YES. |
| NEUT-R1 policy-class preservation | Do not change topology descriptors or class membership. | YES, as a class-preserving operational order. |
| NEUT-R2 no quality claim | Do not call the chosen role or candidate better/deserved. | YES. |
| NEUT-R3 representative equivalence | Alternatives must be semantically/profile equivalent. | NO; FP1 alternatives are non-equivalent. |
| NEUT-R4 rename/isomorphism equivariance | Literal correspondence transports under rename/isomorphism. | PARTIAL/NO for lexical fixture-local tie handling. |
| NEUT-R5 orbit safety | No true automorphic Node receives named semantic privilege. | YES at policy-claim level; literal K3 materialization remains P0-only. |

NEUT-R0, R1, R2, and R5 are necessary procedural and semantic boundaries.
They do not compensate for the failed NEUT-R3 test. Therefore the witness is
not quality-neutral in the strong sense.

## Definitions QN-A..QN-D

| Model | Definition | Assessment |
|---|---|---|
| QN-A procedural neutrality | Deterministic, predeclared, objective-independent, and free of quality vocabulary. | Necessary but insufficient. |
| QN-B semantic neutrality | Only semantically equivalent candidate assignments may be chosen. | Not satisfied for FP1. |
| QN-C claim-scoped operational neutrality | Permit an arbitrary objective-independent fixture witness, but claim only the literal witness result. | Selected, with a distinct provenance class. |
| QN-D set-valued only | Keep TA-1 as a class/set and do not collapse it to one literal member. | Retained as the policy-level semantic boundary. |

The selected terminology is WIT-NEW-OPERATIONAL. WIT-NEW-NEUTRAL is not
used, because the word neutral would conceal that another predeclared
correspondence can change the structural profile.

WIT-NEW-OPERATIONAL means:

- NEW, not historically recovered;
- deterministic for the declared fixture scope;
- objective-independent;
- not semantically canonical;
- not quality-preferred;
- not a universal TA-1 representative; and
- usable only with explicit literal CLAIM-P0 scope.

## Provenance terminology

| Provenance | Meaning | TA-1 status |
|---|---|---|
| WIT-HIST | Prior literal mapping proven by a committed artifact. | Not found. |
| WIT-DERIVED | Mapping uniquely forced by complete committed semantics. | Not applicable to TA-1. |
| WIT-NEW-NEUTRAL | New representative among proven equivalent alternatives. | Rejected for FP1 TA-1. |
| WIT-NEW-OPERATIONAL | New deterministic convention, objective-independent but potentially profile-changing. | Selected. |
| WIT-CLASS-ONLY | No literal collapse is authorized. | Retained for policy-level TA-1. |
| WIT-EXCLUDED | Policy semantics too incomplete for any legitimate witness. | Not selected for TA-1 because P0 operational evidence remains meaningful. |

This checkpoint does not alter the previous WIT-CLASS-ONLY conclusion about the
semantic TA-1 class. It adds a separate operational witness path.

## Topology class order

A complete historical TA-1 class order is not committed. The new freezer may
serialize the accepted field tuple in the listed field order solely as an
operational convention:

~~~text
degree
neighborDegreeMultiset
motifMembershipCount
overlapClusterMembershipCount
sharedMotifNeighborCount
motifNeighborDegreeMultiset
boundaryContextIncidentCount
component
~~~

The direction and tuple encoding must be frozen by the next reconstruction
checkpoint before any result is inspected. The tuple is not promoted to a
semantic priority order. If an exact field value or encoding cannot be frozen,
the operational witness must not be created.

## Selected witness freezer

The selected candidate is WSEL-1, a transparent fixture-local freezer:

1. derive the accepted topology signature for every Node;
2. serialize the signature with a predeclared exact field order and value
   encoding;
3. order Nodes by that signature for operational reproducibility;
4. use lexical Entity ID only as an operational tie-break within equal
   signatures;
5. use the ordered FP1 candidate sequence P0 through P(N-1);
6. map the ordered Nodes directly to that candidate sequence; and
7. record the result as TA-1 witness W1, WIT-NEW-OPERATIONAL.

This is not the historical TA-1 class order and not a quality objective. It is a
new transparent freezer. If a future implementation chooses a different
non-quality operational tie, it is a different witness and must receive a
different witness ID.

The exact candidate sequence is:

~~~text
m = N - 1
P_i = (i/m, (i/m)^2), i = 0, ..., m
~~~

Candidate index is used only for reproducible operational ordering. It is not
interpreted as higher/lower quality or responsibility.

## WSEL-0..WSEL-5

| Candidate | Assessment |
|---|---|
| WSEL-0 no literal witness | Safest semantic option; retains WIT-CLASS-ONLY and cannot provide a literal P0 result. |
| WSEL-1 lexical fixture-local freezer | Selected as W1; deterministic and objective-independent, but structurally consequential and rename-sensitive. |
| WSEL-2 canonical graph-label freezer | Not selected; canonical labeling adds complexity and cannot create identity inside automorphism orbits. |
| WSEL-3 signature plus class-internal freezer | Not separately selected; it still needs an explicit candidate correspondence and collapses into WSEL-1 for this bounded P0 path. |
| WSEL-4 two predeclared witnesses | Not selected; two witnesses are not needed to establish the first operational boundary. |
| WSEL-5 set-valued TA-1 | Retained as the semantic alternative and policy-level interpretation boundary. |

WSEL-1 is viable only because its claim is narrow. It is not a
WIT-NEW-NEUTRAL witness.

## One versus two versus none

Selected: ONE new operational witness W1, after the next reconstruction
checkpoint freezes its exact manifest.

Reason:

- one predeclared witness is enough to demonstrate literal P0 evidence;
- objective values are not needed to select it;
- a second witness would be a separate sensitivity probe, not a neutral tie;
- two witnesses are not required to prove that W1 is operational-only; and
- no witness is allowed to stand for the entire TA-1 class.

If the next checkpoint finds that the exact freezer cannot be made
objective-independent, deterministic, and class-preserving, the fallback is
NONE and TA-1 remains set-valued. It must not select WSEL-4 by convenience.

## Objective-independence counterfactual

The following counterfactual is required before W1 is frozen:

| Counterfactual | Allowed? | Reason |
|---|---|---|
| Inspect normalized altitude before choosing the rule | NO | Makes the witness objective-informed. |
| Inspect FAN-P1 before choosing the rule | NO | Same. |
| Choose candidate direction because it improves a profile | NO | Converts correspondence into quality semantics. |
| Choose lexical/index rule before all objective output exists | YES | Establishes procedural independence only. |
| Report that another rule could change the profile | YES | Required honesty about non-neutrality. |
| Call W1 the historical Experiment1 witness | NO | No WIT-HIST evidence. |
| Call W1 a TA-1 quality winner | NO | P0-only scope. |

## Profile invariance distinction

W1 is expected to be deterministic, but not profile-invariant across all
permitted representative choices. This distinction is the central result:

~~~text
objective-independent
does not imply
quality-neutral
does not imply
profile-invariant
does not imply
rename-equivariant
~~~

A changed profile under another predeclared operational freezer would not
invalidate W1's P0 observation. It would invalidate any attempt to generalize
W1 to TA-1 policy quality.

## Candidate-side equivalence

FP1 candidate roles are non-equivalent under exact geometry. In particular,
candidate index, endpoint/interior status, predecessor/successor spacing, and
local chord relations can differ. Hard-validity equality is not candidate
equivalence.

Therefore:

- W1 may use candidate index operationally;
- W1 may not claim candidate-index neutrality;
- W1 may not claim a local-spacing preference;
- W1 may not claim a profile tie with another witness; and
- candidate correspondence remains an explicit part of W1 provenance.

## Rename behavior

The semantic TA-1 class is transported under the accepted rename control.
W1's lexical tie handling is not guaranteed to transport as the same literal
Node-to-candidate mapping. A renamed fixture can produce a different W1
literal witness.

Allowed claim:

~~~text
The renamed fixture has its own W1 operational witness under the same
fixture-local freezer.
~~~

Forbidden claim:

~~~text
The same historical TA-1 literal mapping was recovered under rename.
~~~

A future rename test may establish transport of the freezer's procedure, but
that would be a separate bounded claim and would not upgrade W1 to P1 without
explicit proof.

## Input-order behavior

The freezer must not use Entity-array or Relation-array order as a semantic
input. The exact signature serialization and lexical operational tie are
computed independently of input-array order.

If implementation order affects a result, the witness fails its deterministic
manifest requirement and must not be entered into a future matrix. This is an
operational validity check, not a quality result.

## K3 and orbit behavior

K3 remains one true Node orbit. W1 may contain a literal fixture mapping only
as a reproducibility handle. It must record:

- orbit membership;
- no named semantic privilege;
- no candidate-quality claim;
- P0-only literal scope; and
- no universal TA-1 inference.

A graph-isomorphism or automorphism transform may produce a different literal
W1. That is acceptable for a P0 operational witness and does not prove
orbit-level policy asymmetry.

## Lighthouse reasoning

Lighthouse has one accepted motif and bounded topology distinctions. Its
topology can reduce Node-side ambiguity, but it does not make FP1 candidate
roles equivalent. A W1 altitude/profile result is therefore a result for one
named Lighthouse/TA-1/W1 witness only.

Lighthouse cannot be used to promote W1 into a universal TA-1 quality
representative or to infer the missing historical mapping.

## Ashen reasoning

Ashen has seven motif records and multiple shared Nodes. It exposes why the
candidate-side choice remains consequential: a different correspondence can
relieve one local record while worsening another. Ashen is therefore the
strongest reason to reject the WIT-NEW-NEUTRAL name.

No Ashen objective or profile value is inspected to choose W1. Ashen may later
show a W1 result, but that result remains P0 and witness-specific.

## Set-valued alternative

TA-1 remains set-valued at semantic level:

~~~text
TA-1 semantic class
  -> admissible/possible literal members
  -> W1 operational representative, if separately frozen
~~~

The existence of W1 does not remove the set-valued boundary. If a future
checkpoint determines that any literal collapse would materially distort the
intended question, it must select Decision D and retain TA-1 as class-only.

No enumeration, permutation search, or representative ranking is performed.

## Future matrix consequence

The existing six-policy objective matrix cannot silently include W1 under the
name TA-1. A future matrix must choose one of these explicit forms:

| Form | Meaning | Current status |
|---|---|---|
| TA1-MATRIX-ONE | One WIT-NEW-OPERATIONAL W1 cell, reported as TA-1/W1 and CLAIM-P0. | Conditionally possible after reconstruction. |
| TA1-MATRIX-TWO | Two predeclared operational witnesses for sensitivity. | Not selected. |
| TA1-MATRIX-SET | Set/class semantics without literal collapse. | Semantic fallback. |
| TA1-MATRIX-EXCLUDED | TA-1 omitted from literal matrix. | Not current primary path. |

If TA1-MATRIX-ONE is selected later, the matrix must state that its result
does not generalize to TA-1 as a policy and does not compare W1 as neutral
against other witnesses. The objective design may need a bounded amendment
before execution; no amendment or execution is done here.

## Required next manifest artifact

The next reconstruction checkpoint must create a manifest containing:

- witness ID W1;
- provenance WIT-NEW-OPERATIONAL;
- exact fixture identity/hash;
- source and checkpoint references;
- exact signature field/value encoding;
- operational field order and direction;
- lexical tie semantics;
- candidate sequence and index direction;
- direct-zip semantics;
- K3/orbit treatment;
- rename and input-order claims;
- hard-gate inputs;
- objective-independence declaration;
- P0-only claim scope; and
- explicit statement that W1 is not historical or quality-neutral.

## Central questions Q1-Q30

| Q | Answer |
|---|---|
| Q1. What exact TA-1 semantic contract is committed? | Topology-derived signature/class evidence with deterministic class intent and no candidate correspondence claim. |
| Q2. Is TA-1 a partition, ordered class system, or complete policy? | At least a class/transport contract; not a completely committed literal policy. |
| Q3. Is complete class ordering committed? | No. |
| Q4. Is class-internal ordering committed? | No. |
| Q5. Is class-to-candidate correspondence committed? | No. |
| Q6. What is missing on the Node side? | Complete class order, class-internal fallback, and exact value/encoding seam. |
| Q7. What is missing on the candidate side? | Candidate correspondence and direction; FP1 roles are non-equivalent. |
| Q8. Are FP1 roles equivalent? | No. |
| Q9. What must quality-neutral mean here? | Strongly, representative equivalence; procedural independence alone is insufficient. |
| Q10. Is procedural independence sufficient? | No. |
| Q11. Must profile invariance be required? | Yes for WIT-NEW-NEUTRAL; no for WIT-NEW-OPERATIONAL P0, where non-invariance is disclosed. |
| Q12. Can a fixture-local arbitrary witness be valid P0? | Yes, if declared before results and provenance is explicit. |
| Q13. Which provenance term is safer? | WIT-NEW-OPERATIONAL. |
| Q14. Is lexical fallback acceptable? | Only as the selected new operational convention, never as semantic neutrality. |
| Q15. Is candidate-index ordering acceptable? | Only as an operational handle with P0 scope. |
| Q16. Does it create a hidden quality claim? | It would if called neutral; the design explicitly forbids that claim. |
| Q17. Does rename sensitivity invalidate P0? | No, but it limits transport claims. |
| Q18. Can P1 transport be supported? | Not currently; it needs a separate transport proof. |
| Q19. Can P2 policy preference be supported? | No. |
| Q20. Does Lighthouse remove Node ambiguity? | Partly; candidate ambiguity remains. |
| Q21. Does Ashen expose candidate ambiguity? | Yes, strongly. |
| Q22. Can K3 receive a literal witness? | Only P0 operationally, with no named privilege. |
| Q23. Is one witness enough? | Yes for the first operational boundary, conditionally. |
| Q24. Are two witnesses justified? | No, not by this design. |
| Q25. Must TA-1 remain set-valued? | Yes at semantic level. |
| Q26. Can TA-1 enter a future literal matrix? | Only as TA-1/W1 with WIT-NEW-OPERATIONAL and P0 scope. |
| Q27. What provenance and scope? | WIT-NEW-OPERATIONAL, CLAIM-P0, fixture-local. |
| Q28. Is Objective Experiment Design2 required? | Potentially, if the existing matrix cannot encode witness-specific claims. |
| Q29. What artifact is next? | The exact W1 operational-witness manifest/reconstruction result. |
| Q30. What is the smallest next checkpoint? | E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-TA1-OPERATIONAL-WITNESS-RECONSTRUCTION1. |

## Hypotheses H1-H15

| H | Result |
|---|---|
| H1. Objective independence and semantic neutrality differ. | Supported. |
| H2. A deterministic rule can be quality-uninformed but consequential. | Supported by FP1 non-equivalence and prior profile sensitivity. |
| H3. TA-1 class semantics can survive without a canonical literal. | Supported. |
| H4. A fixture-local operational witness can be P0-only. | Supported conditionally on the next manifest gate. |
| H5. P0 must not become P2. | Supported. |
| H6. FP1 non-equivalence blocks automatic neutral claims. | Supported. |
| H7. Candidate index can be operational without being quality. | Supported with scope restrictions. |
| H8. Lighthouse Node distinction does not solve candidate correspondence. | Supported. |
| H9. K3 cannot gain named identity from canonicalization. | Supported. |
| H10. Two witnesses require a separate sensitivity rationale. | Supported. |
| H11. Profile values must not choose W1. | Supported boundary. |
| H12. WIT-NEW-OPERATIONAL is more accurate than WIT-NEW-NEUTRAL here. | Supported. |
| H13. Set-valued TA-1 remains legitimate. | Supported. |
| H14. TA-2/TA-3 recovery is unnecessary for this TA-1 design. | Supported. |
| H15. No Production materializer decision is required. | Supported. |

## Falsification N1-N14

| N | Current assessment |
|---|---|
| N1. TA-1 class semantics cannot be reconstructed. | Not triggered at class level. |
| N2. Missing class order blocks any operational witness. | Not triggered; a new operational order can be declared separately. |
| N3. Every correspondence introduces unsupported quality semantics. | Triggered for strong neutrality, not for P0 operational scope. |
| N4. Procedural neutrality is too weak for P0. | Not triggered; P0 remains meaningful with explicit caveat. |
| N5. Lexical freezer silently changes TA-1 semantics. | Avoided by distinct WIT-NEW-OPERATIONAL status. |
| N6. Index freezer silently becomes quality order. | Avoided by explicit operational-only rule. |
| N7. Rename sensitivity makes P0 uninterpretable. | Not triggered; it limits P1/P2 only. |
| N8. K3 requires named privilege. | Not triggered. |
| N9. One witness hides sensitivity that must be exposed. | Deferred; two-witness design remains optional. |
| N10. Two witnesses require objective-informed selection. | Not triggered because two are not selected. |
| N11. Set-valued semantics cannot support future research. | Not triggered. |
| N12. TA-1 cannot contribute meaningfully to the objective question. | Not triggered, but contribution is W1-specific only. |
| N13. Prior evidence contradicts MAN-2 / WIT-CLASS-ONLY. | Not triggered. |
| N14. Baseline/provenance cannot reconcile. | Not triggered. |

## CASE assessment

| Case | Assessment |
|---|---|
| CASE 1 | Not selected: W1 is not semantically quality-neutral. |
| CASE 2 | Selected: one objective-independent operational witness is valid P0-only with distinct provenance. |
| CASE 3 | Not selected: two witnesses are not required now. |
| CASE 4 | Not selected as primary: the semantic class remains set-valued, but a bounded P0 witness is still useful. |
| CASE 5 | Not selected: missing historical class order does not prevent a separately labelled operational freezer. |
| CASE 6 | Not selected: P0 operational correspondence is possible without policy-level endorsement. |
| CASE 7 | Not selected: no missed historical artifact was found. |
| CASE 8 | Not selected: TA-1 remains useful as class plus W1, not class-only control only. |
| CASE 9 | Not selected: no smaller unresolved seam is required after this design. |
| CASE 10 | Not selected: evidence is incomplete but not contradictory. |

## Decision

Decision B is selected. The next checkpoint may freeze W1 as a distinct
WIT-NEW-OPERATIONAL witness, provided it records the exact operational rule
before any objective result is observed.

The next checkpoint must not call W1 WIT-NEW-NEUTRAL, historical, canonical,
quality-preferred, or representative of all TA-1 assignments. If the exact
operational rule cannot be frozen without borrowing missing semantic choices,
the next result must revert to Decision D and retain TA-1 as set-valued.

## Production changes

NO. This design changes no application source, Initial Placement, candidate
family, FP1/F2, assignment implementation, objective/comparator, materializer,
solver, settling, packing, routing, labels, UI, samples, Dataset/Core/
Extension/schema semantics, or ai-knowledge. No runner, browser validation,
permutation search, objective experiment, branch, tag, release, deployment,
publication, or push was created.

Knowledge Candidate: YES - hypothesis strengthened/refined. No ai-knowledge
promotion or modification was made.

Validation required:

- LiaisonScape: npm.cmd test, npm.cmd run lint, npm.cmd run build;
- e2r-spec: npm.cmd run validate;
- git diff --check in both repositories; and
- no browser/server or experiment execution.
