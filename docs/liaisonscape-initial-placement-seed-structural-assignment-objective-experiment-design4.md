# LiaisonScape Initial-placement Seed Structural-assignment Objective Experiment Design4

- Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-STRUCTURAL-ASSIGNMENT-OBJECTIVE-EXPERIMENT-DESIGN4`
- Date: 2026-09-02
- Status: Reconciled — corrected Design4 frozen; design only; not executed
- Preceding TA3 witness result: `928c820`
- Preceding TA3 semantics Design1: `344e778`
- Result: `CASE 1 / DECISION A` after integrity reconciliation

> **DESIGN ONLY**
>
> Objective Experiment4 is not executed in this checkpoint. This document
> freezes the bounded Design4 matrix, geometry-class deduplication, alias and
> evidence semantics, and future results contract only.

## Exact result and decision

### Reconciliation1 correction (2026-09-02)

The preceding TA3 result contained a derived identity-audit error for Ashen
Crown Forward versus TA1/W1. The two tables use different row order, but
their keyed `Node -> FP1Index` maps are identical. Exact `GEOM-FP-v1`
comparison therefore yields 4 Lighthouse classes, 3 Ashen Crown classes,
and 2 K3 classes. The original 4/4/2, 14/31/13, and six-new-real-fixture
claims in this document are superseded by the corrected values below.

The correction changes no literal witness table, source, runner, objective,
or Production state. It removes the Ashen Forward duplicate execution and
retains its provenance as an alias of TA1/W1.

The six provenance-safe TA0/TA1/TA2/TA3 witness labels reconcile into exactly
four literal geometry classes on Lighthouse, three on Ashen Crown, and two on
K3. The 45 conceptual fixture-local label pairs reduce to 15
identity-implied relations plus 30 cross-class alias relations. The corrected
future matrix contains 10 geometry-class executions.

The corrected matrix contains six Experiment3 regression cells, three new
Lighthouse TA3-Forward cells, and one K3 orbit control. Ashen TA3-Forward is
covered by the existing TA1/W1 class cells. Objective coverage and comparator
semantics remain unchanged. The maximum inference remains `INF-W0/INF-W1`;
no ranking or winner is introduced.

**Decision A:** the corrected Design4 is complete; execute the corrected
10-cell objective matrix in the next separately authorized checkpoint:

`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-STRUCTURAL-ASSIGNMENT-OBJECTIVE-EXPERIMENT4-RERUN1`

Evidence-gated boundary:

> Yahoo! — Objective Experiment Design4 is frozen and execution-ready.

This does not mean that Experiment4 has run or that any witness is better.

## Inference boundary

Design4 remains `INF-W0 / INF-W1` only. A future Experiment4 may establish
fixture-local literal-witness, literal-geometry, and exact-objective
relations. It may not establish a policy ranking, winner, best assignment,
best geometry, cross-fixture score, Production choice, FP1 sufficiency, or
that Initial Placement is solved.

## Preceding TA3 witness result

The preceding reconstruction froze:

- `TA3-FWD-W1-OP-v1`;
- `TA3-REV-W1-OP-v1`;
- provenance `TA3-WIT-NEW-OPERATIONAL`;
- claim ceiling `CLAIM-P0`;
- all six TA3W-MAN-5 fixture/variant cells;
- six exact GEO-0/GEO-3 hard-gate passes.

The TA3 Reverse mapping is literally identical to TA2-motif on Lighthouse,
Ashen Crown, and K3. TA3 Forward is a different literal mapping from every
existing mapping on Lighthouse and K3. On Ashen Crown, TA3 Forward is
literally identical to TA1/W1 under keyed comparison. These are literal facts
only; semantic policy identity is not inferred.

The six labels are:

```text
TA0/REP-0
TA1/W1
TA2-DEG-W1-OP-v1
TA2-MOTIF-W1-OP-v1
TA3-FWD-W1-OP-v1
TA3-REV-W1-OP-v1
```

There is no TA4, W2, alternate materializer, or historical TA3 execution label
in the Design4 universe.

## Design3 and Experiment3 regression boundary

The six regression cells are recomputed by a future common runner to validate
runner, comparator, and coverage integrity. They are not independent
replication and do not add evidence merely because they are recomputed. A
future mismatch against an Experiment3 oracle blocks interpretation of new
TA3-Forward results until reconciliation; the runner must not be tuned to
reproduce an old result.

## Source and protected-state reconciliation

This is an e2r-spec documentation-only design checkpoint. The LiaisonScape
Production source baseline remains `fd563340625fd3d88dc25baedc93c4f8fe69e5e7`.
The protected EN/JA Lighthouse samples remain untouched. The protected Session,
TA3 documents, TA2 documents, Experiment3 runner/results, Experiment2/3
clones, residual shells, routing preview, and `ai-knowledge` remain unchanged.

No Experiment4 clone is created here. The future execution surface is a new
disposable clone detached at `fd563340625fd3d88dc25baedc93c4f8fe69e5e7`; the
Experiment2 and Experiment3 clones must not be reused.

## Provenance and identity contracts

The existing provenance is retained:

| Label | Provenance | Claim | Canonical winner? | Quality-neutral? | Production selection? |
| --- | --- | --- | --- | --- | --- |
| TA0/REP-0 | `WIT-DERIVED` | `CLAIM-P0` boundary of its existing record | No | No | No |
| TA1/W1 | `WIT-NEW-OPERATIONAL` | `CLAIM-P0` | No | No | No |
| TA2-DEG-W1-OP-v1 | `TA2-WIT-NEW-OPERATIONAL` | `CLAIM-P0` | No | No | No |
| TA2-MOTIF-W1-OP-v1 | `TA2-WIT-NEW-OPERATIONAL` | `CLAIM-P0` | No | No | No |
| TA3-FWD-W1-OP-v1 | `TA3-WIT-NEW-OPERATIONAL` | `CLAIM-P0` | No | No | No |
| TA3-REV-W1-OP-v1 | `TA3-WIT-NEW-OPERATIONAL` | `CLAIM-P0` | No | No | No |

Two witnesses are geometrically identical exactly when, for every Entity Node
`V` in one frozen fixture, their FP1 indices agree:

```text
X ≡geom Y iff FP1Index_X(V) = FP1Index_Y(V) for every V
```

This is literal mapping identity only. It is not semantic policy identity,
quality equivalence, historical identity, or canonical equivalence.

## Recomputed geometry classes

The classes below are the result of recomputing exact Node-to-FP1 fingerprints
from the frozen witness manifests. A fingerprint lists `Node:FP1Index` in
the authoritative Node-ID order for that fixture.

### Lighthouse

| D4 class | Members | Computation representative | Exact mapping fingerprint |
| --- | --- | --- | --- |
| `D4-LH-G0` | TA0/REP-0; TA2-DEG-W1-OP-v1 | TA0/REP-0 | `clara:0, lighthouse:1, maya:2, beacon:3, elias:4, sofia:5, thomas:6, archive:7, authority:8, daniel:9` |
| `D4-LH-G1` | TA1/W1 | TA1/W1 | `archive:0, authority:1, daniel:2, sofia:3, elias:4, beacon:5, thomas:6, lighthouse:7, maya:8, clara:9` |
| `D4-LH-G2` | TA2-MOTIF-W1-OP-v1; TA3-REV-W1-OP-v1 | TA2-MOTIF-W1-OP-v1 | `clara:0, maya:1, thomas:2, archive:3, authority:4, beacon:5, daniel:6, elias:7, lighthouse:8, sofia:9` |
| `D4-LH-G3` | TA3-FWD-W1-OP-v1 | TA3-FWD-W1-OP-v1 | `clara:9, maya:8, thomas:7, archive:6, authority:5, beacon:4, daniel:3, elias:2, lighthouse:1, sofia:0` |

### Ashen Crown

| D4 class | Members | Computation representative | Exact mapping fingerprint |
| --- | --- | --- | --- |
| `D4-ASH-G0` | TA0/REP-0; TA2-DEG-W1-OP-v1 | TA0/REP-0 | `elara:0, kael:1, darius:2, garrick:3, mira:4, nyra:5, rowan:6, selene:7, ilyan:8, vhalgrim:9` |
| `D4-ASH-G1` | TA1/W1; TA3-FWD-W1-OP-v1 | TA1/W1 | `darius:7, elara:9, garrick:6, ilyan:0, kael:8, mira:3, nyra:5, rowan:4, selene:2, vhalgrim:1` |
| `D4-ASH-G2` | TA2-MOTIF-W1-OP-v1; TA3-REV-W1-OP-v1 | TA2-MOTIF-W1-OP-v1 | `elara:0, kael:1, darius:2, garrick:3, nyra:4, rowan:5, mira:6, selene:7, vhalgrim:8, ilyan:9` |

### K3

| D4 class | Members | Computation representative | Exact mapping fingerprint |
| --- | --- | --- | --- |
| `D4-K3-G0` | TA0/REP-0; TA1/W1; TA2-DEG-W1-OP-v1; TA2-MOTIF-W1-OP-v1; TA3-REV-W1-OP-v1 | TA0/REP-0 | `a:0, b:1, c:2` |
| `D4-K3-G1` | TA3-FWD-W1-OP-v1 | TA3-FWD-W1-OP-v1 | `a:2, b:1, c:0` |

The geometry-class relation is recomputed as reflexive, symmetric, and
transitive. Every one of the six labels appears exactly once per fixture and
no label appears in two classes.

## Computation representatives

The non-quality computation precedence is frozen only to select one handle per
class:

```text
TA0/REP-0 < TA1/W1 < TA2-degree < TA2-motif < TA3-Forward < TA3-Reverse
```

The representatives are G0→TA0, G1→TA1, G2→TA2-motif, G3→TA3-Forward on
Lighthouse; Ashen uses G0→TA0, G1→TA1, and G2→TA2-motif; K3 uses G0→TA0
and G1→TA3-Forward. This ordering has no quality meaning.

## Conceptual pair space and deduplication

Six labels create `C(6,2)=15` unordered conceptual label pairs per fixture,
or 45 fixture-local pairs across three fixtures. Same-geometry pairs are
identity-implied under the same future objective coverage and are not
substantive executions.

| Fixture | Labels | Conceptual pairs | Identity-implied | Cross-class aliases | Executed class pairs |
| --- | ---: | ---: | ---: | ---: | ---: |
| Lighthouse | 6 | 15 | 2 | 13 | 6 |
| Ashen Crown | 6 | 15 | 3 | 12 | 3 |
| K3 | 6 | 15 | 10 | 5 | 1 |
| Total | 18 labels-in-fixture | 45 | 15 | 30 | 10 |

“18 labels-in-fixture” is not 18 globally distinct policies.

### Identity-implied relations

Every row below is `PP-PREF-EQUIVALENT`, with:

```text
executed: false
independentEvidence: false
identityImplied: true
```

| Fixture | Pair |
| --- | --- |
| Lighthouse | TA0/REP-0 vs TA2-DEG-W1-OP-v1 |
| Lighthouse | TA2-MOTIF-W1-OP-v1 vs TA3-REV-W1-OP-v1 |
| Ashen Crown | TA0/REP-0 vs TA2-DEG-W1-OP-v1 |
| Ashen Crown | TA2-MOTIF-W1-OP-v1 vs TA3-REV-W1-OP-v1 |
| K3 | every unordered pair within `{TA0/REP-0, TA1/W1, TA2-DEG-W1-OP-v1, TA2-MOTIF-W1-OP-v1, TA3-REV-W1-OP-v1}` (10 pairs) |

Thus `2+3+10=15`. No same-class identity pair is executed again unless a
concrete integrity reason cannot be covered by the exact pre-execution class
assertions.

### Cross-class alias expansion

Each of the 10 executed class-pair results expands deterministically to every
member-label pair across its two classes. Every expanded alias retains:

```text
sourceCellId
sourceGeometryPair
independentEvidence: false
sourceEvidenceMultiplicity: 1
```

The executed class cell owns `evidenceMultiplicity: 1`; alias count never
increases evidence. If an alias reverses the source class orientation,
`LEFT-DOMINATES-RIGHT` and `RIGHT-DOMINATES-LEFT` are exchanged. These remain
unchanged: `PP-PREF-EQUIVALENT`, `PP-INCOMPARABLE`, `PP-UNKNOWN`,
`PP-NOT-APPLICABLE`.

TA2-motif is the G2 representative. A class result computed once for G2 may
expand to the TA3-Reverse alias, but it must not be reported as two evidence
items. The correct statement is one geometry-class result supporting both
literal witness aliases with evidence multiplicity one. TA2-motif and
TA3-Reverse remain semantically distinct.

## Frozen Design4 execution matrix

All executed cells use one representative pair, one frozen objective contract,
and `evidenceMultiplicity: 1`. The six regression cells retain their
Experiment3 oracle and set `independentReplicationClaim=false`.

### Lighthouse cells

| Cell | Left class | Right class | Representative pair | Type | Prior oracle |
| --- | --- | --- | --- | --- | --- |
| `D4-LH-G0-G1` | G0 | G1 | TA0 vs TA1 | SUBSTANTIVE-REGRESSION | LEFT-DOMINATES-RIGHT |
| `D4-LH-G0-G2` | G0 | G2 | TA0 vs TA2-motif | SUBSTANTIVE-REGRESSION | LEFT-DOMINATES-RIGHT |
| `D4-LH-G1-G2` | G1 | G2 | TA1 vs TA2-motif | SUBSTANTIVE-REGRESSION | RIGHT-DOMINATES-LEFT |
| `D4-LH-G0-G3` | G0 | G3 | TA0 vs TA3-Forward | SUBSTANTIVE-NEW | NONE |
| `D4-LH-G1-G3` | G1 | G3 | TA1 vs TA3-Forward | SUBSTANTIVE-NEW | NONE |
| `D4-LH-G2-G3` | G2 | G3 | TA2-motif vs TA3-Forward | SUBSTANTIVE-NEW | NONE |

The `TA3-Reverse vs TA3-Forward` alias derives from the G2-G3 result and is
not a second execution.

### Ashen Crown cells

| Cell | Left class | Right class | Representative pair | Type | Prior oracle |
| --- | --- | --- | --- | --- | --- |
| `D4-ASH-G0-G1` | G0 | G1 | TA0 vs TA1 | SUBSTANTIVE-REGRESSION | LEFT-DOMINATES-RIGHT |
| `D4-ASH-G0-G2` | G0 | G2 | TA0 vs TA2-motif | SUBSTANTIVE-REGRESSION | PP-INCOMPARABLE |
| `D4-ASH-G1-G2` | G1 | G2 | TA1 vs TA2-motif | SUBSTANTIVE-REGRESSION | RIGHT-DOMINATES-LEFT |

TA3-Forward is a member of G1 and is covered by the G0-G1 and G1-G2
regression cells through alias expansion; it is not a new Ashen execution.

### K3 orbit control

| Cell | Left class | Right class | Representative pair | Type | Substantive quality evidence |
| --- | --- | --- | --- | --- | --- |
| `D4-K3-G0-G1` | G0 | G1 | TA0 vs TA3-Forward | ORBIT-CONTROL | false |

K3 G0/G1 are literally different (`a:0,b:1,c:2` versus `a:2,b:1,c:0`)
but remain one semantic Node orbit. The future result must derive from exact
objective invariance, not visual intuition, and must not be aggregated with
Lighthouse or Ashen as real-fixture quality evidence.

### Matrix summary

```text
10 executed geometry-class cells
= 6 SUBSTANTIVE-REGRESSION
+ 3 SUBSTANTIVE-NEW Lighthouse TA3-Forward cells
+ 1 ORBIT-CONTROL
```

There is no default extra identity-control cell.

## Frozen objective coverage and comparator boundary

Design4 retains the registered coverage unchanged:

| Fixture | Normalized-altitude records | FAN-P1 records | K3 FAN k=2 |
| --- | ---: | ---: | --- |
| Lighthouse | 1 | 0 | not applicable |
| Ashen Crown | 7 | 6 | not applicable |
| K3 | 1 | 0 | unregistered |

The normalized-altitude contract remains exact rational
`2*abs(cross(B-A,C-A))/Lmax²`, using cross multiplication, no square root,
epsilon, or float authority. FAN-P1 remains the exact full-circle directed
angular-gap comparator without `atan2`, square root, epsilon, or rounded-angle
authority. PP-M3 remains a separate relation contract with the legal outputs:

```text
LEFT-DOMINATES-RIGHT
RIGHT-DOMINATES-LEFT
PP-PREF-EQUIVALENT
PP-INCOMPARABLE
PP-UNKNOWN
PP-NOT-APPLICABLE
INELIGIBLE
```

No scalar score, win/loss vocabulary, point total, comparator redesign, or
coverage extension is introduced. Design4 itself calculates no objective.

## Future Experiment4 execution surface and results contract

The future runner must use a new disposable clone and one common runner. No
Experiment4 clone is created now, and no existing Experiment2/3 runner or
result is modified.

The future `results.json` is research-only, not a Production schema, and must
contain at least:

```text
metadata
runnerSha256
fixtureAuthorities
witnessLabels
witnessProvenance
witnessManifests
geometryClasses
classMembership
computationRepresentatives
conceptualPairCounts
identityImpliedRelations
crossClassAliasRelations
executedCells
regressionCells
newCells
orbitControls
coverage
altitudeRecords
fanoutRecords
classPairRelations
aliasExpandedRelations
evidenceMultiplicity
regressionOracleResults
orbitControlResult
informativeness
inferenceBoundary
prohibitedClaims
visualState
```

The six regression results must be compared against their Experiment3 oracles
after computation. A mismatch blocks interpretation of new TA3-Forward
results. Alias expansion must preserve `sourceCellId`, `sourceGeometryPair`,
`independentEvidence`, and `sourceEvidenceMultiplicity`.

## Design4 informativeness states

These are descriptive future states, not ranking states. Multiple states may
coexist and the maximum remains `INF-W1`:

| State | Meaning |
| --- | --- |
| `D4-INF0` | only regression/orbit-control integrity; no valid new TA3-Forward relation |
| `D4-INF1` | at least one valid new real-fixture TA3-Forward class relation |
| `D4-INF2` | at least one new real-fixture pair is `PP-INCOMPARABLE` |
| `D4-INF3` | at least one new different-geometry real-fixture pair is `PP-PREF-EQUIVALENT` |
| `D4-INF4` | exactness or integrity blocker |

## Allowed and prohibited claims

Allowed only after the future cells are executed and pass their gates:

- exact fixture-local PP-M3 relations between the specified geometry classes;
- regression agreement or mismatch against the six Experiment3 oracles;
- alias-expanded relations derived from one executed geometry-class result;
- the bounded descriptive D4-INF state.

Prohibited:

- “Forward won”, “Reverse won”, or any Forward/Reverse ranking;
- TA0/TA1/TA2/TA3 policy ranking or cross-fixture aggregation;
- “best geometry”, “best assignment”, majority, tournament, or win count;
- treating K3 orbit control as real-fixture quality evidence;
- multiplying evidence by alias count;
- treating literal identity as semantic identity;
- changing objective coverage or using Experiment3 to retroactively choose TA3;
- Production assignment, FP1 sufficiency, or Initial Placement solved.

## Central questions

| Question | Answer |
| --- | --- |
| Q1. Are all six labels provenance-safe? | Yes, with the provenance table above. |
| Q2. Are all TA3 cells MAN-5? | Yes, from the preceding witness reconstruction. |
| Q3. Is geometry identity recomputed? | Yes; exact fingerprints are classed before matrix freeze. |
| Q4. Lighthouse classes? | Four: G0 TA0/TA2-degree, G1 TA1, G2 TA2-motif/TA3-Reverse, G3 TA3-Forward. |
| Q5. Ashen classes? | Three: G0 TA0/TA2-degree, G1 TA1/TA3-Forward, G2 TA2-motif/TA3-Reverse. |
| Q6. K3 classes? | G0 five labels; G1 TA3-Forward. |
| Q7-Q8. Reverse identity? | Literally identical to TA2-motif on all three; semantic identity is not implied. |
| Q9. Forward new class? | Yes on Lighthouse and K3; no on Ashen Crown because it is keyed-identical to TA1/W1. |
| Q10-Q14. Counts? | 15 per fixture; 45 total; 15 identity-implied; 30 cross-class aliases; 10 executed class cells. |
| Q15. Why differ? | Same geometry implies equality without duplicate execution; cross-class pairs expand from one class-cell result. |
| Q16-Q18. Regression/new cells? | Six regression cells, with listed Experiment3 oracles; three new Lighthouse TA3-Forward cells; Ashen Forward is an alias. |
| Q19-Q20. K3? | Not substantive quality evidence; it is a one-orbit integration control. |
| Q21-Q22. Representatives? | Frozen non-quality precedence; representative choice has no quality meaning. |
| Q23-Q25. Aliases? | Preserve TA3-Reverse provenance; do not multiply evidence; invert only directional relations when orientation reverses. |
| Q26. Same-class pairs executed? | No, identity-implied relations are not substantive cells. |
| Q27-Q29. Objective coverage/calculation? | Coverage unchanged, comparator unchanged, no objective calculated now. |
| Q30. Experiment4 clone now? | No. |
| Q31-Q33. Ranking/aggregation? | No Forward/Reverse ranking, no TA0–TA3 ranking, no cross-fixture aggregation. |
| Q34. Maximum inference? | `INF-W1`. |
| Q35-Q36. Regression failure? | It blocks new-result interpretation until reconciliation; no immediate interpretation. |
| Q37. D4-INF states? | `D4-INF0` through `D4-INF4`, descriptive and non-ranking. |
| Q38. Production changed? | No. |
| Q39. Execution-ready? | Yes, for the bounded corrected 10-cell future rerun. |
| Q40. Next checkpoint? | `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-STRUCTURAL-ASSIGNMENT-OBJECTIVE-EXPERIMENT4-RERUN1`; not auto-started. |

## Hypotheses and falsification

H1–H15 are supported at design level: Reverse can be computationally
deduplicated without erasing provenance; Forward adds a literal class on
Lighthouse and K3 while aliasing TA1 on Ashen; the class counts are 4/3/2;
45 conceptual pairs are covered by 10 executions plus identity and alias expansion; evidence
multiplicity follows executions; Experiment3 regressions validate a common
runner without independent-replication claims; K3 is an orbit control; current
coverage remains sufficient; no scalar objective or policy ranking is needed;
orientation-safe aliases preserve direction; provenance survives
deduplication; the future ceiling remains INF-W0/INF-W1; and no Production
change follows.

N1–N15 were not triggered:

- N1–N3: the expected Reverse identity, keyed Ashen Forward identity, and
  class membership were recomputed and reconcile;
- N4–N6: `15+30=45`, alias expansion does not add evidence, and directional
  alias inversion is explicit;
- N7–N8: all six regression cells are representable and coverage is unchanged;
- N9–N11: K3 needs no named privilege, is not quality evidence, and Reverse
  provenance is retained;
- N12–N13: no scalar aggregation or retroactive Experiment3 selection is used;
- N14–N15: no Production source or protected-state change is required.

## CASE and closure

**CASE 1** is selected: the six-label witness set reconciles exactly into four
Lighthouse classes, three Ashen classes, and two K3 classes; the 45 conceptual
pairs reduce to 10 executed cells with 15 identity-implied and 30 cross-class
alias relations; six regressions, three new Lighthouse TA3-Forward cells, and
one K3 orbit control are frozen; the corrected rerun is execution-ready.

**Decision A** is selected: corrected Design4 complete; execute the frozen
10-cell objective matrix in the separately authorized rerun checkpoint.

Production changes: **NO**.
