# LiaisonScape Initial-placement Seed Structural-assignment Objective Experiment Design3

## Checkpoint

`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-STRUCTURAL-ASSIGNMENT-OBJECTIVE-EXPERIMENT-DESIGN3`

- Date: 2026-09-02
- Status: Complete — design frozen; execution not started
- Result: `CASE 1 / EXACT RESULT 1+2+3+4+5+6+7+8+9+10+11+12+13 / DECISION A`
- Selected next checkpoint:
  `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-STRUCTURAL-ASSIGNMENT-OBJECTIVE-EXPERIMENT3`
- `EXEC-YES` is selected for that exact next checkpoint only.
- The Experiment3 disposable surface was not created.

## Exact result and decision

The four provenance-safe witness labels are retained. Exact Node-to-FP1
identity yields three geometry classes on Lighthouse, three on Ashen Crown,
and one on K3. The resulting Design3 matrix is:

- 6 substantive real-fixture geometry-class comparisons;
- 2 of those as Experiment2 regression recomputations;
- 4 genuinely new TA2-motif comparisons; and
- 1 K3 identity-control execution.

The selected total is therefore **7 executed cells**. Equal geometry is not
executed as duplicate substantive evidence. All policy and witness labels are
preserved as aliases of their exact geometry class.

Decision A is selected: the deduplicated expanded objective matrix is ready;
run Experiment3 next. This design does not calculate any new altitude,
FAN-P1, or PP-M3 value and does not select a policy, a geometry winner, or a
Production assignment.

Yahoo! — the Objective Experiment3 matrix is frozen and execution-ready.

## Preceding TA2 witness closure

The preceding TA2 motif checkpoint froze `TA2-MOTIF-W1-OP-v1` for Lighthouse,
Ashen Crown, and K3 at `TA2W-MAN-5`, with
`TA2-WIT-NEW-OPERATIONAL` and `CLAIM-P0`. `TA2-DEG-W1-OP-v1` is also frozen
and MAN-5 for all three fixtures. TA0/REP-0 and TA1/W1 remain the previously
accepted literal witnesses.

This checkpoint consumes those manifests. It does not reopen or alter witness
semantics, linearization, candidate direction, mapping, or provenance. No new
witness, W2, alternate zip, representative search, or semantic refinement was
created.

## Source and protected-state reconciliation

The start state was e2r-spec commit `76d2a5a` with only the protected
`sessions/E2R-Session-0052.md` dirty. LiaisonScape was at the accepted
`fd563340625fd3d88dc25baedc93c4f8fe69e5e7` baseline with only the protected
EN/JA Lighthouse samples dirty. `src/auto-layout.ts` has no drift from that
baseline.

The accepted authorities remain:

| Fixture | Authority |
|---|---|
| Lighthouse | LiaisonScape commit `fd563340625fd3d88dc25baedc93c4f8fe69e5e7`, `public/lighthouse-restoration-demo.en.e2r.json`, blob `b96092b0c2b88c6c1ea41c11c1b36dccca3e9726`, raw SHA-256 `C67107BCA0A007A399F164317DA2D330F7B15F5E2609A1B5B2FCDF9F44E6C386` |
| Ashen Crown | e2r-spec commit `0a8d543a8af4a5ee2ae9b8b69ced319f9b61fc2c`, `examples/ashen-crown.en.e2r.json`, raw SHA-256 `A34326545FAB32A7EBDB6C26E97056B747C50F294F6574FD21B123D341FE338E` |
| K3 | committed deterministic definition: complete graph on `a`, `b`, `c`; motif `a|b|c`; one overlap cluster; one true Node orbit |

Dirty samples were not used as authority. The protected Session-0052 file,
Experiment2 clone, routing preview, older residual shells, and the dirty
`ai-knowledge` diagnostic playbook were preserved. No unrelated roadmap
priority was reordered.

## Safe witness set and claim boundary

| Label | Witness ID / rule | Provenance | Claim | Readiness |
|---|---|---|---|---|
| TA0/REP-0 | TA-0 / `TA0-REP0-*` | `WIT-DERIVED` | fixture-local research handle | accepted |
| TA1/W1 | `TA1-W1-OP-v1` | `WIT-NEW-OPERATIONAL` | `CLAIM-P0` | MAN-5 x3 |
| TA2-degree | `TA2-DEG-W1-OP-v1` | `TA2-WIT-NEW-OPERATIONAL` | `CLAIM-P0` | MAN-5 x3 |
| TA2-motif | `TA2-MOTIF-W1-OP-v1` | `TA2-WIT-NEW-OPERATIONAL` | `CLAIM-P0` | MAN-5 x3 |

TA3 remains excluded because its semantics and operational witness are not
frozen. No Design3 result can exceed `INF-W0` pipeline/integrity validation
and `INF-W1` fixture-local literal-witness/literal-geometry relations. It
cannot support `INF-W2` policy-level quality, `INF-W3`, or `INF-W4` claims.

## Exact literal-geometry equivalence

For two witness labels `X` and `Y` in one frozen fixture:

```text
X ≡geom Y
iff, for every Entity Node V,
FP1Index_X(V) = FP1Index_Y(V) exactly.
```

Because the candidate family and coordinates are shared, exact index equality
is exact literal geometry equality. Objective values, approximate coordinates,
profiles, labels, routes, or visual output are not inputs to `≡geom`.

The relation is reflexive, symmetric, and transitive. It is a computational
redundancy relation only. It is not semantic policy equivalence, policy
quality equivalence, or a canonical-policy class.

## Geometry class audit

The class partitions were derived from the committed witness manifests and
verified by an exact identity-only helper. The helper calculated no objective
value.

### Lighthouse

| Class | Members | Computation representative |
|---|---|---|
| LH-G0 | TA0/REP-0, TA2-DEG-W1-OP-v1 | TA0/REP-0 |
| LH-G1 | TA1/W1 | TA1/W1 |
| LH-G2 | TA2-MOTIF-W1-OP-v1 | TA2-motif |

### Ashen Crown

| Class | Members | Computation representative |
|---|---|---|
| ASH-G0 | TA0/REP-0, TA2-DEG-W1-OP-v1 | TA0/REP-0 |
| ASH-G1 | TA1/W1 | TA1/W1 |
| ASH-G2 | TA2-MOTIF-W1-OP-v1 | TA2-motif |

### K3

| Class | Members | Computation representative |
|---|---|---|
| K3-G0 | TA0/REP-0, TA1/W1, TA2-DEG-W1-OP-v1, TA2-MOTIF-W1-OP-v1 | TA0/REP-0 |

For Lighthouse and Ashen, TA0 and TA2-degree are semantically distinct but
literally redundant on the current primary fixtures. TA2-motif supplies a
distinct literal geometry. K3 collapses all four labels into one exact class.

## Computation representative

The non-quality convention is the fixed precedence:

```text
TA0/REP-0 < TA1/W1 < TA2-degree < TA2-motif
```

The first member present in each class is the `computationRepresentative`.
This is an execution handle only. It does not make TA0 more canonical, more
correct, or better. The computed class relation belongs to the geometry class,
not solely to its representative label.

## Alias expansion and evidence multiplicity

After one class-pair computation, the result may be expanded to every
applicable witness-label pair across those two classes. Alias expansion must
retain all policy and provenance labels, while recording:

```text
evidenceMultiplicity = 1
```

An alias is not a second experiment, replication, win, or independent evidence
point. In particular, the TA0-vs-TA2-degree pair inside G0 is identity-implied
and is not a substantive cell.

## Conceptual label-pair matrix

Four labels create six conceptual unordered label pairs per fixture and 18
conceptual pairs across the three fixtures:

1. TA0/REP-0 vs TA1/W1
2. TA0/REP-0 vs TA2-degree
3. TA0/REP-0 vs TA2-motif
4. TA1/W1 vs TA2-degree
5. TA1/W1 vs TA2-motif
6. TA2-degree vs TA2-motif

For Lighthouse and Ashen, the six pairs map as follows:

| Label pair | Geometry pair | Treatment |
|---|---|---|
| TA0 vs TA1 | G0 vs G1 | one substantive regression computation |
| TA0 vs TA2-degree | G0 vs G0 | identity-implied `PP-PREF-EQUIVALENT`; no substantive execution |
| TA0 vs TA2-motif | G0 vs G2 | one substantive new computation |
| TA1 vs TA2-degree | G1 vs G0 | alias of the G0-vs-G1 regression computation |
| TA1 vs TA2-motif | G1 vs G2 | one substantive new computation |
| TA2-degree vs TA2-motif | G0 vs G2 | alias of the G0-vs-G2 new computation |

For K3 all six label pairs map to G0 vs G0 and are identity-implied
`PP-PREF-EQUIVALENT`; none is substantive. One runtime identity oracle is
still retained for integrating the new TA2-motif witness.

## Deduplicated execution matrix

The exact seven executed cells are frozen as follows. Future relations remain
unknown until Experiment3 execution; no TA2-motif result is predicted here.

| Cell ID | Fixture | Left class | Right class | Representative pair | Cell type | Prior oracle? |
|---|---|---|---|---|---|---|
| D3-LH-G0-G1 | Lighthouse | LH-G0 | LH-G1 | TA0/REP-0-LH vs TA1-W1-LH | SUBSTANTIVE-REGRESSION | Experiment2: TA0-DOMINATES-W1 |
| D3-LH-G0-G2 | Lighthouse | LH-G0 | LH-G2 | TA0/REP-0-LH vs TA2-MOTIF-W1-OP-v1-LH | SUBSTANTIVE-NEW | none |
| D3-LH-G1-G2 | Lighthouse | LH-G1 | LH-G2 | TA1-W1-LH vs TA2-MOTIF-W1-OP-v1-LH | SUBSTANTIVE-NEW | none |
| D3-ASH-G0-G1 | Ashen Crown | ASH-G0 | ASH-G1 | TA0/REP-0-ASHEN vs TA1-W1-ASHEN | SUBSTANTIVE-REGRESSION | Experiment2: TA0-DOMINATES-W1 |
| D3-ASH-G0-G2 | Ashen Crown | ASH-G0 | ASH-G2 | TA0/REP-0-ASHEN vs TA2-MOTIF-W1-OP-v1-ASHEN | SUBSTANTIVE-NEW | none |
| D3-ASH-G1-G2 | Ashen Crown | ASH-G1 | ASH-G2 | TA1-W1-ASHEN vs TA2-MOTIF-W1-OP-v1-ASHEN | SUBSTANTIVE-NEW | none |
| D3-K3-ID-G0-MOTIF | K3 | K3-G0 | K3-G0 | TA0/REP-0-K3 vs TA2-MOTIF-W1-OP-v1-K3 | IDENTITY-CONTROL | expected `PP-PREF-EQUIVALENT` |

The two Experiment2 cells are deliberately recomputed by the common future
runner. Their previous direction is a regression oracle, not independent
replication. The four TA2-motif real-fixture cells are the genuinely new
substantive comparisons. K3 is an integration identity control, not quality
evidence.

## Experiment2 regression boundary

The future runner must recompute:

| Fixture | Class cell | Previous exact relation | Future role | Failure meaning |
|---|---|---|---|---|
| Lighthouse | LH-G0 vs LH-G1 | TA0-DOMINATES-W1 | comparator/runner regression oracle | integrity reconciliation required |
| Ashen Crown | ASH-G0 vs ASH-G1 | TA0-DOMINATES-W1 | comparator/runner regression oracle | integrity reconciliation required |
| K3 | K3-G0 vs K3-G0 motif control | PP-PREF-EQUIVALENT expected | TA2-motif identity integration oracle | manifest/identity reconciliation required |

Experiment2 output may be compared only after the Design3 matrix and runner
contracts are frozen. It cannot choose a representative, add a cell, remove a
cell, determine direction, or predict a TA2-motif result.

## Identity-implied relations

Within one exact geometry class, the registered objective inputs are identical
under the same frozen fixture coverage. The implied relation is
`PP-PREF-EQUIVALENT`, not a separately executed substantive cell.

| Fixture | Witness pair | Exact mapping identical? | Objective relation implied | Execution required? |
|---|---|---|---|---|
| Lighthouse | TA0 vs TA2-degree | YES | PP-PREF-EQUIVALENT | NO substantive execution |
| Ashen Crown | TA0 vs TA2-degree | YES | PP-PREF-EQUIVALENT | NO substantive execution |
| K3 | every six label pairs | YES | PP-PREF-EQUIVALENT | NO substantive execution |

This identity implication does not imply semantic policy equivalence. TA0 and
TA2-degree remain different research policies and provenance labels.

## Registered objective coverage

Existing coverage is frozen and no new axis is added:

| Fixture | Normalized altitude | FAN-P1 | Boundary |
|---|---:|---:|---|
| Lighthouse | 1 registered motif record | 0 | altitude only |
| Ashen Crown | 7 registered motif records | 6 records owned by darius, elara, garrick, kael, nyra, rowan | altitude plus six local fan-out records |
| K3 | 1 registered motif record | 0 | k=2 FAN-P1 remains unregistered |

### Normalized altitude contract

The existing exact normalized altitude comparator is retained. Conceptually,
for a registered motif it compares:

```text
2 * abs(cross(B-A, C-A)) / L_max^2
```

The future runner must use the accepted exact rational/integer representation,
cross multiplication, and no square root, epsilon, rounded float, scalar
aggregation, or cross-motif sum.

### FAN-P1 contract

For an applicable shared Node with the same transported neighbor set and ray
count, the future runner compares the exact minimum positive circular directed
gap `g_min`. A larger `g_min` means local narrowest-bottleneck relief only.
The accepted exact directed-gap comparator is used without `atan2`, square
root, degree/radian rounding, or epsilon. Unsupported exactness returns
`PP-UNKNOWN`. k=2 remains outside registered FAN-P1 coverage.

### PP-M3 contract

PP-M3 compares each registered record separately. A side dominates only when
all required comparable records are equal or favor that side and at least one
favors it. Conflicting records produce `PP-INCOMPARABLE`; missing required
coverage or exactness produces `PP-UNKNOWN`; shared non-applicability produces
`PP-NOT-APPLICABLE`. `PP-PREF-EQUIVALENT` and `PP-PROFILE-EQUIVALENT` remain
distinct. No winner, scalar score, weighted sum, or global rank is created.

## Future execution surface and runner boundary

If the next checkpoint is executed, it uses the new disposable surface:

`C:\Users\extra\E2R\e2r-liaison-scape-structural-assignment-objective-experiment3`

That surface is not created now and the Experiment2 clone is not reused.
Future execution should detach from the accepted Initial Placement baseline
unless a new explicit read-only authority reconciliation is required.

The future runner may load authorities and frozen manifests, assert identity
classes and hard gates, select the frozen computation representative, execute
the seven cells, compute exact registered axes, compose PP-M3, emit class and
alias results, and record evidence multiplicity. It may not change witness
semantics, optimize or remap witnesses, create W2, rank policies, aggregate
fixtures, or score geometry classes.

## Future result representation

The future `results.json` must distinguish at least:

```text
witnessLabels
geometryClasses
classMembership
computationRepresentatives
executedCells
regressionCells
newCells
identityImpliedRelations
aliasExpandedRelations
evidenceMultiplicity
fixtureRelations
inferenceBoundary
```

This is an Experiment3 research result representation, not a Production
schema. Each result must retain the fixture, class IDs, representative pair,
cell type, coverage, exactness, relation, inference state, and any failure
reason without converting aliases into independent evidence.

## Claim safety and informativeness

The following boundaries are frozen:

| Statement | Allowed now? |
|---|---|
| TA2-motif literal witness dominates TA1/W1 on Ashen | NO; only a future exact cell may say this |
| TA2-motif policy dominates TA1 policy | NO |
| TA2-degree and TA0 are semantically identical | NO |
| TA2-degree and TA0 have identical frozen literal geometry on current fixtures | YES |
| TA0 vs TA2-degree is independent replication | NO |
| A class computation may alias to multiple label relations | YES |
| Aliases count as multiple evidence points | NO |
| K3 all-policy identity is an integrity control | YES |
| TA2-motif is a Production candidate | NO |
| FP1 is sufficient | NO |
| FP1 failed | NO |

Design3 descriptive states are:

- `D3-INF0`: identity/regression only;
- `D3-INF1`: at least one new literal-geometry relation is obtained;
- `D3-INF2`: at least one new class pair is `PP-INCOMPARABLE`;
- `D3-INF3`: a new different-geometry pair is `PP-PREF-EQUIVALENT`;
- `D3-INF4`: exactness or integrity blocker, with no score.

These states are future result labels, not a prediction of the TA2-motif
outcome. The maximum inference remains INF-W0/INF-W1.

## No aggregation boundary

Lighthouse, Ashen Crown, and K3 remain separate fixture scopes. The runner
must not report wins, losses, tournament results, majority, score, best policy,
best geometry, fixture votes, or cross-fixture totals such as “TA2-motif won
both” or “TA0 won 4/6”. Alias counts are not evidence counts, and class pairs
are not a policy tournament.

## TA2-degree and TA2-motif boundaries

TA2-degree remains in the research model despite literal redundancy:

```text
SEMANTICALLY DISTINCT
LITERALLY REDUNDANT ON CURRENT PRIMARY FIXTURES
COMPUTATIONALLY DEDUPLICATED IN DESIGN3
```

TA2-motif contributes a distinct literal geometry on Lighthouse and Ashen and
is identical to the other witnesses on K3. Distinct geometry is not evidence
of better quality before execution. TA3 remains excluded for missing
semantics, not because of a quality rejection.

## Central questions

| Question | Answer |
|---|---|
| Q1. What provenance-safe witness labels exist? | TA0/REP-0, TA1/W1, TA2-degree, and TA2-motif. |
| Q2. Are manifests MAN-5 where required? | Yes; TA1/W1, TA2-degree, and TA2-motif are MAN-5 on all three fixtures. |
| Q3. Does TA3 remain excluded? | Yes; semantics and witness are missing. |
| Q4. What Lighthouse classes exist? | LH-G0={TA0,TA2-degree}, LH-G1={TA1/W1}, LH-G2={TA2-motif}. |
| Q5. What Ashen classes exist? | ASH-G0={TA0,TA2-degree}, ASH-G1={TA1/W1}, ASH-G2={TA2-motif}. |
| Q6. What K3 class exists? | K3-G0 contains all four labels. |
| Q7. Is geometry identity exact Node-to-FP1 identity? | Yes. |
| Q8. Can dedup preserve policy identity? | Yes; labels and provenance remain explicit. |
| Q9. Should identical geometry be substantive recomputed? | No, except an explicit integrity control. |
| Q10. How are labels preserved? | Class membership and alias expansion retain every witness label. |
| Q11. How is a representative selected? | Fixed non-quality precedence TA0, TA1, TA2-degree, TA2-motif. |
| Q12. Does representative choice have quality semantics? | No. |
| Q13. Can aliases expand to all labels? | Yes. |
| Q14. Do aliases count as independent evidence? | No; evidenceMultiplicity remains 1. |
| Q15. How many conceptual label pairs exist? | Six per fixture; 18 total. |
| Q16. How many unique substantive geometry comparisons exist? | Six across Lighthouse and Ashen. |
| Q17. How many are genuinely new? | Four TA2-motif real-fixture comparisons. |
| Q18. How many are Experiment2 regressions? | Two. |
| Q19. What is K3's role? | One-geometry-class integrity and orbit control. |
| Q20. Should K3 have one runtime identity oracle? | Yes. |
| Q21. Which K3 pair? | TA0/REP-0-K3 vs TA2-MOTIF-W1-OP-v1-K3. |
| Q22. Should prior TA0-vs-TA1 cells be recomputed? | Yes, as regression checks. |
| Q23. Why? | One common runner and comparator regression; not independent replication. |
| Q24. Is Experiment2 result an integrity oracle only? | Yes. |
| Q25. What coverage applies? | Lighthouse 1/0, Ashen 7/6, K3 1/0; k=2 FAN excluded. |
| Q26. Are objective definitions unchanged? | Yes. |
| Q27. Maximum inference? | INF-W0/INF-W1. |
| Q28. Can Design3 support policy ranking? | No. |
| Q29. Can it support Production selection? | No. |
| Q30. Can cross-fixture aggregation occur? | No. |
| Q31. Can within-class identity imply PP-PREF-EQUIVALENT? | Yes, under identical registered inputs. |
| Q32. Does that imply semantic policy equivalence? | No. |
| Q33. Should TA2-degree remain visible? | Yes; it is semantically distinct despite current literal redundancy. |
| Q34. Does TA2-motif add distinct Lighthouse/Ashen geometry? | Yes. |
| Q35. What executed cell count is selected? | Seven: six substantive plus one K3 identity control. |
| Q36. What result structure is frozen? | Witness labels, classes, aliases, representatives, seven cells, coverage, relations, multiplicity, inference. |
| Q37. What integrity oracles are frozen? | Two Experiment2 TA0-vs-W1 directions and one K3 TA0-vs-TA2-motif identity expectation. |
| Q38. Is EXEC-YES selected? | Yes, for the next checkpoint only. |
| Q39. What checkpoint follows? | `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-STRUCTURAL-ASSIGNMENT-OBJECTIVE-EXPERIMENT3`. |
| Q40. What is the smallest next checkpoint? | The exact Experiment3 execution checkpoint above. |

## Hypotheses

| Hypothesis | Result |
|---|---|
| H1. Semantic policy and literal geometry identity are distinct | SUPPORTED |
| H2. Exact duplicate mappings must not create duplicate evidence | SUPPORTED |
| H3. TA0 and TA2-degree can be semantically distinct but one geometry class | SUPPORTED |
| H4. Alias expansion preserves labels without duplicating evidence | SUPPORTED |
| H5. A representative can be selected without quality semantics | SUPPORTED |
| H6. K3 can collapse four labels while retaining an integrity role | SUPPORTED |
| H7. Lighthouse and Ashen each have three geometry classes | SUPPORTED |
| H8. Three classes imply three distinct unordered comparisons per real fixture | SUPPORTED |
| H9. Two real-fixture comparisons can be regression recomputations | SUPPORTED |
| H10. Four real-fixture comparisons are genuinely new | SUPPORTED |
| H11. One K3 identity control integrates the new witness | SUPPORTED |
| H12. Recomputing prior cells is regression, not replication | SUPPORTED |
| H13. Expanded experiment remains INF-W0/INF-W1 | SUPPORTED |
| H14. TA2-degree redundancy does not justify dropping its semantics | SUPPORTED |
| H15. No Production or materializer decision follows | SUPPORTED |

## Falsification

| Falsification check | Result |
|---|---|
| N1. TA2-degree is not identical to TA0 on a primary fixture | NOT TRIGGERED |
| N2. TA2-motif is not distinct on Lighthouse/Ashen | NOT TRIGGERED |
| N3. K3 does not contain all four labels in one class | NOT TRIGGERED |
| N4. Geometry equivalence requires objective values | NOT TRIGGERED |
| N5. Deduplication erases provenance | NOT TRIGGERED |
| N6. Alias expansion creates independent evidence | NOT TRIGGERED |
| N7. Representative choice requires quality semantics | NOT TRIGGERED |
| N8. Experiment2 direction is needed to choose the matrix | NOT TRIGGERED |
| N9. TA2-motif objective values are needed during design | NOT TRIGGERED |
| N10. Identical exact geometry lacks identity-implied equivalence | NOT TRIGGERED |
| N11. K3 needs six executed identity pairs | NOT TRIGGERED |
| N12. Cross-fixture aggregation is required | NOT TRIGGERED |
| N13. TA3 semantics are needed before Design3 execution | NOT TRIGGERED |
| N14. Source/protected state cannot be preserved | NOT TRIGGERED |
| N15. Production change is required | NOT TRIGGERED |

## CASE, Decision, and closure boundary

Primary result: **CASE 1**.

Supported exact result clauses:

1. Four provenance-safe literal witness labels are available for Design3.
2. The labels collapse into exact fixture-local literal-geometry classes.
3. TA0 and TA2-degree remain semantically distinct but literally redundant on
   the current primary fixtures.
4. TA2-motif adds distinct literal geometry on Lighthouse and Ashen.
5. All four witnesses collapse to one K3 geometry class.
6. The conceptual matrix deduplicates to six substantive geometry cells.
7. One computation can expand to multiple aliases without multiplying evidence.
8. Experiment2 cells are recomputed as integrity oracles, not independent
   evidence.
9. K3 uses one new-witness identity control.
10. All new result claims remain INF-W0/INF-W1 and CLAIM-P0 where applicable.
11. No win count, global rank, policy ranking, FP1 conclusion, Production
    selection, or materializer decision is authorized.
12. No new TA2-motif altitude/FAN/PP value was inspected during design.
13. The exact-rational Experiment3 can execute next.

Selected Decision: **A — deduplicated expanded objective matrix ready; run
Experiment3 next**.

No objective value was calculated. No Production assignment was selected.
Initial Placement is not solved. Push, tag, release, deploy, and publication
were not performed. `ai-knowledge` was not modified.
