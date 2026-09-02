# LiaisonScape Initial-placement Seed TA-2 Operational Witness Reconstruction1 Result

- Checkpoint: E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-TA2-OPERATIONAL-WITNESS-RECONSTRUCTION1
- Date: 2026-09-02
- Status: Complete — partial, motif encoding blocked
- Result: CASE 2 / EXACT RESULT 1+2+4+6+7+9+11+12+14 / DECISION B

## Exact result and decision

The new TA-2-degree contract was materially reconstructed for Lighthouse,
Ashen Crown, and K3. Its three fixture-local literal witnesses are
deterministic, hard-valid, and provenance-complete at CLAIM-P0.

The TA-2-motif reconstruction stopped at the mandatory semantic encoding
gate. Design1 defines overlapClusterMembershipCount(V) as the number of
derived motif-overlap clusters containing V, while its Ashen topology audit
records one overlap cluster and vectors whose second component is 4 for some
Nodes. The committed record does not provide an alternative exact definition
that reconciles those facts. No motif literal witness was created.

Selected decision: B — TA-2-degree ready; TA-2-motif encoding contract
requires reconciliation.

Selected next checkpoint:

E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-TA2-MOTIF-RESPONSIBILITY-ENCODING-RECONCILIATION1

The next checkpoint is selected but was not started automatically.

## Preceding design and new-design provenance

The preceding TA-2 Policy Semantics Design1 is commit effd131. It froze the
new research semantic IDs TA2-DEG-NEW-v1 and TA2-MOTIF-NEW-v1 and the shared
operational materializer TA2-OP-LIN-v1. This checkpoint applies those
contracts without changing them.

The witnesses in this record are new fixture-local operational
materializations. They are not historical TA-2 witnesses, recovered
Experiment1 witnesses, canonical TA-2 witnesses, quality-neutral witnesses,
or policy-representative witnesses.

The degree witness ID is TA2-DEG-W1-OP-v1. Its provenance is
TA2-WIT-NEW-OPERATIONAL and its claim scope is CLAIM-P0. The suggested motif
ID TA2-MOTIF-W1-OP-v1 remains reserved and was not materialized because the
encoding gate failed.

Every degree witness has this documentation-only provenance:

| Field | Value |
|---|---|
| semanticPolicy | TA2-DEG-NEW-v1 |
| semanticProvenance | TA2-SEM-NEW |
| operationalMaterializer | TA2-OP-LIN-v1 |
| operationalProvenance | TA2-OP-NEW |
| literalWitness | TA2-DEG-W1-OP-v1 |
| literalProvenance | TA2-WIT-NEW-OPERATIONAL |
| claimScope | CLAIM-P0 |
| historicalReplay | NO |
| canonicalWitness | NO |
| qualityNeutralWitness | NO |
| policyRepresentative | NO |

Experiment2 results were not used to choose semantic classes, vectors, ties,
linearization, candidate direction, mappings, or gate handling.

## Source, baseline, and protected-state boundary

The accepted Lighthouse authority is the committed blob at LiaisonScape
commit fd563340625fd3d88dc25baedc93c4f8fe69e5e7,
public/lighthouse-restoration-demo.en.e2r.json. Its Git blob is
b96092b0c2b88c6c1ea41c11c1b36dccca3e9726 and its raw UTF-8 SHA-256 is
C67107BCA0A007A399F164317DA2D330F7B15F5E2609A1B5B2FCDF9F44E6C386.

The accepted Ashen Crown authority is the committed e2r-spec fixture at
commit 0a8d543a8af4a5ee2ae9b8b69ced319f9b61fc2c,
examples/ashen-crown.en.e2r.json. Its Git blob is
8081e071551e2ead29acd0ab42b30e3f5696374f and its raw UTF-8 SHA-256 is
A34326545FAB32A7EBDB6C26E97056B747C50F294F6574FD21B123D341FE338E.

K3 uses the accepted committed preceding definition: three Nodes with exact
IDs a, b, and c, complete undirected Entity topology, three unique
adjacencies, and one accepted motif a|b|c. It has no file hash.

| Fixture | Authority repo | Commit or definition | Path or definition | Raw fingerprint | Status |
|---|---|---|---|---|---|
| Lighthouse | e2r-liaison-scape | fd563340625fd3d88dc25baedc93c4f8fe69e5e7 | public/lighthouse-restoration-demo.en.e2r.json | C67107BCA0A007A399F164317DA2D330F7B15F5E2609A1B5B2FCDF9F44E6C386 | reconciled AUTH-LH0 |
| Ashen Crown | e2r-spec | 0a8d543a8af4a5ee2ae9b8b69ced319f9b61fc2c | examples/ashen-crown.en.e2r.json | A34326545FAB32A7EBDB6C26E97056B747C50F294F6574FD21B123D341FE338E | reconciled |
| K3 | e2r-spec preceding research | committed definition | complete graph on a, b, c | no file hash | reconciled definition |

The dirty Lighthouse samples were not used as authority. The protected
session, LiaisonScape sample files, Experiment2 disposable clone, routing
preview, residual shells, and ai-knowledge were preserved.

## Semantic encoding reconciliation gate

The authoritative Design1 wording is in
docs/liaisonscape-initial-placement-seed-ta2-policy-semantics-design.md,
section 6: o(V) is the count of derived motif-overlap clusters containing V.

The accepted topology definition is in
docs/liaisonscape-initial-placement-motif-cluster-quality-criteria-audit.md:
an unordered motif is a triangle of three distinct Entity Nodes with all
three unordered Entity pairs present, and motifs sharing a Node form one
connected overlap cluster. The accepted TA-1 witness record repeats the
authority in its motif inventory: Ashen has seven motifs in one cluster
containing Darius, Elara, Garrick, Kael, Mira, Nyra, Rowan, Selene, and
Vhalgrim.

Therefore Ashen's phrase one overlap cluster means one derived cluster
object, not four cluster objects. Under the committed Design1 definition,
each Node in that cluster has o(V)=1 and the outside Node has o(V)=0.
It cannot produce the recorded second components 4, 4, 4, 2, 1, or 0 as
cluster-count values. The result is:

| Question | Result | Authority |
|---|---|---|
| Exact definition of o(V) | Number of derived motif-overlap clusters containing V | Design1 section 6 |
| Exact meaning of Ashen one overlap cluster | One connected derived cluster object containing nine motif Nodes | accepted motif-cluster audit and TA-1 inventory |
| Can the second component exceed 1 under that definition here? | NO | one cluster object |
| Design1 prose and Ashen vector audit consistent? | NO | direct committed-text comparison |
| Documentation-only clarification sufficient now? | NO — no authoritative correction is established | Design1 is frozen |
| Semantic change required? | NO — prohibited in this checkpoint | checkpoint boundary |
| Motif witness reconstruction authorized? | NO | mandatory semantic gate |

This is classified as SEM-GATE-CONFLICT. A documentation error in the audit
may be the eventual diagnosis, but it is not silently corrected here. The
motif witness is therefore not assigned TA2W-MAN-2 or later.

## Contract integrity

| Policy | Contract ID | Field definitions reconciled? | Relation semantics reconciled? | Operational rule reconciled? | Ready to materialize? |
|---|---|---|---|---|---|
| TA-2-degree | TA2-DEG-NEW-v1 | YES | YES | YES | YES |
| TA-2-motif | TA2-MOTIF-NEW-v1 | NO — encoding seam | YES in isolation | YES in isolation | NO |

No field set, comparison direction, partial-order rule, lexical convention,
candidate direction, or direct-zip rule was changed.

## Exact TA2-OP-LIN-v1 algorithm

For TA-2-degree, sort descending distinctNeighborDegree. Within an equal
semantic degree class only, use ascending Unicode/code-point Entity ID order.
The lexical step is operational and does not create semantic priority.

For TA-2-motif, the frozen rule would repeatedly compute the semantic maxima
of the remaining Nodes, select the code-point lexical minimum among
simultaneous maxima, append it, and remove it. This algorithm was
self-checked on synthetic vectors but was not applied to fixture mappings
because the motif encoding gate failed. Lexical selection does not turn
semantic incomparability or equivalence into semantic priority.

## Exact FP1 representation and direct zip

For N Nodes, m=N-1 and the research-only candidate family is:

P_i = (i/m, i^2/m^2), for i=0 ... N-1.

Exact hard-gate arithmetic used the uniformly scaled integer coordinates:

Q_i = (m*i, i^2).

No float-first candidate value, epsilon, normalized altitude, FAN-P1,
PP-M3, profile, routing, label, or visual measure was calculated. Candidate
index is an operational handle only. The final operational Node order is
directly zipped to P0, P1, and onward. No reverse zip, swap, optimization,
or alternate witness was tried.

## TA-2-degree semantic derivation

The exact degree classes derived from the frozen topology are:

### Lighthouse

| Degree | Semantic class |
|---:|---|
| 5 | clara |
| 3 | lighthouse, maya |
| 2 | beacon, elias, sofia, thomas |
| 1 | archive, authority, daniel |

Operational sequence:
clara, lighthouse, maya, beacon, elias, sofia, thomas, archive,
authority, daniel.

### Ashen Crown

| Degree | Semantic class |
|---:|---|
| 6 | elara |
| 5 | kael |
| 4 | darius |
| 3 | garrick, mira, nyra, rowan, selene |
| 2 | ilyan, vhalgrim |

Operational sequence:
elara, kael, darius, garrick, mira, nyra, rowan, selene, ilyan, vhalgrim.

### K3

| Degree | Semantic class |
|---:|---|
| 2 | a, b, c |

Operational sequence: a, b, c. All three Nodes remain one semantic orbit.

## TA-2-degree literal witness mappings

All rows use provenance TA2-WIT-NEW-OPERATIONAL and claim CLAIM-P0.

### Lighthouse — TA2-DEG-W1-OP-v1

| Node ID | Semantic role | Rank | FP1 index | Exact FP1 coordinate |
|---|---:|---:|---:|---|
| clara | degree 5 | 0 | 0 | (0/9, 0/81) |
| lighthouse | degree 3 | 1 | 1 | (1/9, 1/81) |
| maya | degree 3 | 2 | 2 | (2/9, 4/81) |
| beacon | degree 2 | 3 | 3 | (3/9, 9/81) |
| elias | degree 2 | 4 | 4 | (4/9, 16/81) |
| sofia | degree 2 | 5 | 5 | (5/9, 25/81) |
| thomas | degree 2 | 6 | 6 | (6/9, 36/81) |
| archive | degree 1 | 7 | 7 | (7/9, 49/81) |
| authority | degree 1 | 8 | 8 | (8/9, 64/81) |
| daniel | degree 1 | 9 | 9 | (9/9, 81/81) |

Lexical operational ties occur inside degree 3, degree 2, and degree 1.
They are not semantic lexical priorities.

### Ashen Crown — TA2-DEG-W1-OP-v1

| Node ID | Semantic role | Rank | FP1 index | Exact FP1 coordinate |
|---|---:|---:|---:|---|
| elara | degree 6 | 0 | 0 | (0/9, 0/81) |
| kael | degree 5 | 1 | 1 | (1/9, 1/81) |
| darius | degree 4 | 2 | 2 | (2/9, 4/81) |
| garrick | degree 3 | 3 | 3 | (3/9, 9/81) |
| mira | degree 3 | 4 | 4 | (4/9, 16/81) |
| nyra | degree 3 | 5 | 5 | (5/9, 25/81) |
| rowan | degree 3 | 6 | 6 | (6/9, 36/81) |
| selene | degree 3 | 7 | 7 | (7/9, 49/81) |
| ilyan | degree 2 | 8 | 8 | (8/9, 64/81) |
| vhalgrim | degree 2 | 9 | 9 | (9/9, 81/81) |

The degree 3 and degree 2 rows use lexical operational ties only.

### K3 — TA2-DEG-W1-OP-v1

| Node ID | Semantic role | Rank | FP1 index | Exact FP1 coordinate |
|---|---:|---:|---:|---|
| a | degree 2 | 0 | 0 | (0/2, 0/4) |
| b | degree 2 | 1 | 1 | (1/2, 1/4) |
| c | degree 2 | 2 | 2 | (2/2, 4/4) |

The a/b/c sequence is lexical materialization within one semantic class and
does not assign a named semantic privilege.

## Determinism and semantic rename transport

A temporary inline Node diagnostic (not retained as a repository file) read
the frozen authorities, reversed Entity and Relation input order, and
recomputed the degree derivation. It also ran synthetic partial-order
self-checks:

- (3,3,3) strictly dominates (2,2,2): PASS;
- (3,1,2) and (2,2,2) are incomparable: PASS;
- equal vectors are semantically equivalent: PASS;
- lexical selection among a three-way maxima changes only operational
  sequence: PASS.

| Policy | Fixture | Original order | Reordered input | Same semantic roles? | Same literal mapping? |
|---|---|---|---|---|---|
| TA-2-degree | Lighthouse | PASS | PASS | YES | YES |
| TA-2-degree | Ashen Crown | PASS | PASS | YES | YES |
| TA-2-degree | K3 | PASS | PASS | YES | YES |
| TA-2-motif | Lighthouse | NOT RUN — gate blocked | NOT RUN | NOT AVAILABLE | NOT AVAILABLE |
| TA-2-motif | Ashen Crown | NOT RUN — gate blocked | NOT RUN | NOT AVAILABLE | NOT AVAILABLE |
| TA-2-motif | K3 | NOT RUN — gate blocked | NOT RUN | NOT AVAILABLE | NOT AVAILABLE |

The topology-only rename control transported degree role values for all three
fixtures. Identifier spelling is not a semantic degree input. Literal rename
stability is not claimed because lexical IDs may change the operational
sequence inside an equal class. The same semantic transport property is
reserved for motif reconciliation; it is not asserted for an unmaterialized
witness.

## K3 orbit control

| Property | TA-2-degree | TA-2-motif |
|---|---|---|
| Semantic role value | degree 2 for a, b, c | NOT AVAILABLE pending encoding reconciliation |
| One semantic class/orbit | YES | NOT MATERIALIZED |
| Lexical operational order | a, b, c | NOT MATERIALIZED |
| Literal mapping | a:P0, b:P1, c:P2 | NOT AVAILABLE |
| Named semantic privilege | NO | NO claim made |
| Hard gate | PASS | NOT AVAILABLE |

The degree policy preserves the K3 one-orbit boundary. The literal sequence
does not create a semantic named privilege.

## Exact hard gate

The gate was evaluated only after freezing each degree mapping, with exact
integer arithmetic and no epsilon:

1. injective mapping;
2. finite and distinct Q positions;
3. GEO-0, exact non-degenerate accepted motif triangles;
4. GEO-3, exact exclusion of same positive directed rays for distinct motif
   neighbors around a shared Node.

| Policy | Fixture | Injective | Finite/distinct | GEO-0 | GEO-3 | Eligible |
|---|---|---|---|---:|---:|---|
| TA-2-degree | Lighthouse | YES | YES | 0 violations | 0 violations | YES |
| TA-2-degree | Ashen Crown | YES | YES | 0 violations | 0 violations | YES |
| TA-2-degree | K3 | YES | YES | 0 violations | 0 violations | YES |
| TA-2-motif | Lighthouse | NOT AVAILABLE | NOT AVAILABLE | NOT RUN | NOT RUN | NOT AVAILABLE |
| TA-2-motif | Ashen Crown | NOT AVAILABLE | NOT AVAILABLE | NOT RUN | NOT RUN | NOT AVAILABLE |
| TA-2-motif | K3 | NOT AVAILABLE | NOT AVAILABLE | NOT RUN | NOT RUN | NOT AVAILABLE |

No hard failure occurred for the degree witnesses. No hard-invalid witness
was repaired, swapped, reversed, or replaced.

## Existing-witness literal identity audit

The identity audit compares only exact Node-to-FP1 mappings with the frozen
TA-0/REP-0 and TA-1/W1 records. It does not calculate quality consequences.

| Fixture | TA2-degree vs TA-0 | TA2-degree vs TA1/W1 | TA2-motif vs TA-0 | TA2-motif vs TA1/W1 |
|---|---|---|---|---|
| Lighthouse | IDENTICAL | DIFFERENT | NOT-AVAILABLE | NOT-AVAILABLE |
| Ashen Crown | IDENTICAL | DIFFERENT | NOT-AVAILABLE | NOT-AVAILABLE |
| K3 | IDENTICAL | IDENTICAL | NOT-AVAILABLE | NOT-AVAILABLE |

TA2-degree identity with TA-0 is not a failure and did not cause semantic
change. Literal identity does not erase semantic policy distinction. Literal
difference does not imply a quality difference.

## Witness readiness

| Policy | Fixture | Witness ID | Provenance | Claim | TA2W-MAN | Hard-valid |
|---|---|---|---|---|---|---|
| TA-2-degree | Lighthouse | TA2-DEG-W1-OP-v1 | TA2-WIT-NEW-OPERATIONAL | CLAIM-P0 | TA2W-MAN-5 | YES |
| TA-2-degree | Ashen Crown | TA2-DEG-W1-OP-v1 | TA2-WIT-NEW-OPERATIONAL | CLAIM-P0 | TA2W-MAN-5 | YES |
| TA-2-degree | K3 | TA2-DEG-W1-OP-v1 | TA2-WIT-NEW-OPERATIONAL | CLAIM-P0 | TA2W-MAN-5 | YES |
| TA-2-motif | Lighthouse | not materialized | none | none | TA2W-MAN-1 | NOT AVAILABLE |
| TA-2-motif | Ashen Crown | not materialized | none | none | TA2W-MAN-1 | NOT AVAILABLE |
| TA-2-motif | K3 | not materialized | none | none | TA2W-MAN-1 | NOT AVAILABLE |

TA2W-MAN-1 for motif records fixture authority reconciliation only. No motif
semantic role, literal mapping, or hard-gate result is frozen.

## Objective blackout and non-actions

The following were all NO:

- altitude calculated;
- FAN-P1 calculated;
- PP-M3 calculated;
- structural profile calculated;
- edge crossings, routing, labels, settling, or visual quality evaluated;
- mapping optimized;
- alternate witness compared;
- candidate family ranked;
- policy ranked;
- Production materializer or solver changed;
- TA-0, TA-1/W1, or TA-3 changed;
- FP1 adopted in Production;
- F2 created;
- browser/manual validation run.

The hard gate is admissibility evidence only. It is not a quality objective.

## Central questions

| Question | Answer |
|---|---|
| Q1. Are both policies exactly reconciled? | NO — degree YES; motif NO at encoding gate |
| Q2. Is TA2-OP-LIN-v1 unambiguous? | YES |
| Q3. Did the overlap-cluster seam reconcile? | NO |
| Q4. What witness IDs are frozen? | TA2-DEG-W1-OP-v1 only; motif ID reserved, not frozen |
| Q5. What authorities are used? | AUTH-LH0 Lighthouse, committed Ashen, committed K3 definition |
| Q6. Were role values derived without objective inputs? | YES for degree; motif not derived for materialization |
| Q7. Is candidate index operational only? | YES |
| Q8. Is direct zip operational only? | YES |
| Q9. Does input order affect degree witnesses? | NO |
| Q10. Does spelling affect degree semantic roles? | NO |
| Q11. May spelling affect literal degree materialization? | YES, within lexical operational classes |
| Q12. Is that compatible with CLAIM-P0? | YES |
| Q13. Do K3 degree roles remain equal? | YES |
| Q14. Does any degree hard gate fail? | NO |
| Q15. Did a hard failure modify a witness? | NO |
| Q16. Were objective values calculated? | NO |
| Q17. Are degree mappings identical to TA-0? | YES for all three fixtures |
| Q18. Are degree mappings identical to TA-1/W1? | K3 only |
| Q19. Does identity imply policy equivalence? | NO |
| Q20. Does difference imply quality difference? | NO |
| Q21. What readiness level is reached? | Degree MAN-5; motif MAN-1 |
| Q22. Can both families enter Design3? | NO |
| Q23. What blocker remains? | Frozen Design1 motif o(V) definition versus Ashen vector audit |
| Q24. Smallest next checkpoint? | TA2 motif responsibility encoding reconciliation |

## Degree and motif question answers

### Degree

D-Q1 through D-Q3: YES. Direct derivation reproduces all Design1 degree
classes, priority is strictly degree-descending, and equal-degree Nodes
remain semantically equal.

D-Q4: YES. Lexical ID is operational only within an equal degree class.

D-Q5 and D-Q6: the sequences and exact mappings are the three tables above.

D-Q7 through D-Q9: YES. Input reorder is invariant, K3 remains one class,
and all three witnesses pass the exact hard gate.

D-Q10: YES, all three are literally identical to TA-0/REP-0.
D-Q11: NO, degree semantics were not changed to avoid identity.
D-Q12: YES, degree witness reconstruction is complete.

### Motif

M-Q1: authoritative o(V) is the number of derived motif-overlap clusters
containing V.

M-Q2: NO. The Design1 field/audit seam is SEM-GATE-CONFLICT.

M-Q3 through M-Q6: no fixture responsibility vectors, equivalence classes,
incomparability pairs, or maxima sets were accepted for literal materialization
after the gate failed. The synthetic partial-order checks passed independently.

M-Q7 and M-Q8: the frozen algorithm would use lexical selection only among
simultaneous maxima; this does not alter semantic relations. No fixture
materialization was performed.

M-Q9 through M-Q15: not available. No motif operational sequence, mapping,
hard gate, identity result, or complete motif witness was created.

## Hypotheses and falsification

| Hypothesis | Result |
|---|---|
| H1. New degree contract materializes without semantic change | SUPPORTED |
| H2. Degree classes linearize without semantic lexical priority | SUPPORTED |
| H3. Motif partial order can be linearized without semantic priority | SUPPORTED by synthetic self-check only; fixture application blocked |
| H4. TA2-OP-LIN-v1 is input-order independent | SUPPORTED for degree; not claimed for motif fixture witness |
| H5. Semantic role transport is rename-equivariant | SUPPORTED for degree; motif reserved |
| H6. K3 remains one orbit | SUPPORTED for degree; motif not materialized |
| H7. Ascending FP1 index is operational only | SUPPORTED |
| H8. Direct zip does not imply quality | SUPPORTED as boundary |
| H9. One witness per completed policy is sufficient for CLAIM-P0 | SUPPORTED for degree |
| H10. Hard gate requires no objective computation | SUPPORTED |
| H11. Hard failure must not trigger optimization | SUPPORTED; no failure repair |
| H12. Different policies may share literal mapping | NOT TESTED for motif |
| H13. Literal identity does not erase semantic distinction | SUPPORTED as provenance rule |
| H14. Both families can be frozen before Design3 | NOT SUPPORTED; motif seam remains |
| H15. No Production decision follows | SUPPORTED |

| Falsification | Result |
|---|---|
| N1. Design1 motif overlap encoding is internally inconsistent | TRIGGERED |
| N2. Motif vector cannot be reproduced from formal definitions | TRIGGERED for recorded Ashen audit |
| N3. Degree derivation disagrees with Design1 | NOT TRIGGERED |
| N4. Operational order depends on input order | NOT TRIGGERED for degree |
| N5. Incomparability becomes equality | NOT TRIGGERED in synthetic check |
| N6. Lexical ID enters degree semantics | NOT TRIGGERED |
| N7. Candidate index becomes quality rank | NOT TRIGGERED |
| N8. K3 differs by name | NOT TRIGGERED for degree |
| N9. Mapping requires objective inspection | NOT TRIGGERED |
| N10. Hard failure causes remapping | NOT TRIGGERED |
| N11. Degree rename transport fails | NOT TRIGGERED |
| N12. Fixture authority cannot reconcile | NOT TRIGGERED |
| N13. Degree witness is described as historical/canonical/quality-neutral | NOT TRIGGERED |
| N14. Production source must change | NOT TRIGGERED |
| N15. Protected state cannot be preserved | NOT TRIGGERED |

## Final closure

- TA2-DEG-NEW-v1 retained: YES.
- TA2-MOTIF-NEW-v1 retained: YES, design retained but not materialized.
- TA2-OP-LIN-v1 retained: YES.
- Historical replay claim: NO.
- Experiment1 rewrite: NO.
- Experiment2 influence: NO.
- Degree witnesses frozen: YES, all three.
- Motif witnesses frozen: NO.
- Exact degree mappings committed: YES.
- Input-order determinism: PASS for degree.
- Semantic rename transport: PASS for degree.
- Degree hard gates: PASS for all three.
- TA2-WIT-NEW-OPERATIONAL and CLAIM-P0 retained: YES for degree.
- Objective calculated: NO.
- Production assignment selected: NO.
- Initial Placement solved: NO.
- Objective Design3 reachable: NO; motif encoding reconciliation is required.
- Production source, samples, Core, Extension, schema, solver, settling,
  routing, labels, UI, and ai-knowledge changed: NO.

This record selects CASE 2 and Decision B. The next checkpoint is the single
smallest motif responsibility encoding reconciliation named above. It must
decide whether the Ashen vector audit is erroneous, whether an exact
documentation clarification is possible, or whether a revised new motif
contract is required. It must not infer the answer from objective values or
repair this witness retroactively.
