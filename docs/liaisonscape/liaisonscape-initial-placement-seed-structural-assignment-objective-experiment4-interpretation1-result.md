# LiaisonScape Initial-placement Seed Structural-assignment Objective Experiment4 Interpretation1 Result

- Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-STRUCTURAL-ASSIGNMENT-OBJECTIVE-EXPERIMENT4-INTERPRETATION1`
- Date: 2026-09-02
- Status: Complete — current-scope interpretation and saturation audit
- Result: `CASE 1 / DECISION A`
- Evidence source: Rerun1 commit `e95fcde`; Rerun1 artifacts were read-only

## Mandatory interpretation banner

```text
INF-W0 / INF-W1 ONLY
INTERPRETATION OF EXISTING FIXTURE-LOCAL LITERAL-GEOMETRY EXACT-OBJECTIVE EVIDENCE
NO POLICY RANKING / NO CROSS-FIXTURE SCORE / NO WINNER
NO PRODUCTION SELECTION / NO VISUAL CONCLUSION
```

## Exact result and decision

The current provenance-safe TA0–TA3 structural-assignment objective branch is
**current-scope saturated**. Every current real-fixture geometry-class pair is
covered, every relation is exact and non-unknown, controls pass, and the
evidence ledger closes without alias inflation.

**Bingo!** The current TA0–TA3 fixture-local relation topology is complete.

**Yahoo!** The current structural-assignment objective branch is
interpretation-complete.

These statements mean research-scope closure only. They do not mean
Production-ready, visual-ready, Initial Placement solved, FP1 accepted, or a
universal policy winner.

**Decision A:** synthesize the research branch next:

`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-STRUCTURAL-ASSIGNMENT-RESEARCH-SYNTHESIS1`

This checkpoint was not auto-started.

## Rerun1 authority and failed-surface blackout

Rerun1 hashes were verified read-only:

| Artifact | SHA-256 |
| --- | --- |
| `runner.mjs` | `ACF71E96FD88EAFE9ADA992347F03236B789F70404151594F587E1CBBC7BF50C` |
| `raw-results.json` | `657CE4907222D932B5EE5CEA29830194893FD1C5533CBB05518F21713F8CCD07` |
| `results.json` | `573F743CB31584ACA6126481BB46AEE7A7594B05157DBE38B267585CC5F4F361` |

The failed Experiment4 surface remains non-evidence and its hashes remain:

| Artifact | SHA-256 |
| --- | --- |
| `runner.mjs` | `B2FF75B80244201F0BD9AFC5DA4C7443F854140B29C9FEB2B9C5E6F810656BAC` |
| `raw-results.json` | `C29191763BF14A90E92F0507C9C56806284A6DF54DC89D4A9C4C994FED89E94B` |
| `results.json` | `D603BA2EFD16ED1C2C85A1047AA3069A9604297D21532DE54BB9F284B6E127D6` |

No invalid objective value from that surface was used for interpretation.

## Evidence ledger

| Evidence category | Count | Interpretation role |
| --- | ---: | --- |
| Lighthouse unique substantive geometry-class pairs | 6 | all `C(4,2)` pairs measured |
| Ashen Crown unique substantive geometry-class pairs | 3 | all `C(3,2)` pairs measured |
| Experiment3 regression copies | 6 | exact-match controls; not independent replication |
| New Experiment4 substantive pairs | 3 | Lighthouse TA3-Forward only |
| K3 orbit control | 1 | symmetry/permutation integrity only |
| Identity-implied relations | 15 | not executed; not independent evidence |
| Cross-class aliases | 30 | derived from 10 unique executions; not independent evidence |

Each executed geometry cell has `evidenceMultiplicity=1`. Alias count never
increases evidence. Transitive closure is interpretation, not new measured
evidence.

## Relation terminology

Within the graph sections below, `>` is shorthand only for the exact
fixture-local PP-M3 relation `LEFT-DOMINATES-RIGHT` after class orientation is
fixed. It does not mean policy wins, policy quality, or universal preference.
`PP-INCOMPARABLE` is preserved as incomparability, not converted to a tie or a
scalar order.

## Lighthouse exact relation graph

The four classes are:

```text
G0 = TA0/REP-0, TA2-DEG-W1-OP-v1
G1 = TA1/W1
G2 = TA2-MOTIF-W1-OP-v1, TA3-REV-W1-OP-v1
G3 = TA3-FWD-W1-OP-v1
```

All six unordered class pairs were directly measured:

| Pair | Exact relation |
| --- | --- |
| G0 vs G1 | `LEFT-DOMINATES-RIGHT` (`G0 > G1`) |
| G0 vs G2 | `LEFT-DOMINATES-RIGHT` (`G0 > G2`) |
| G1 vs G2 | `RIGHT-DOMINATES-LEFT` (`G2 > G1`) |
| G0 vs G3 | `LEFT-DOMINATES-RIGHT` (`G0 > G3`) |
| G1 vs G3 | `LEFT-DOMINATES-RIGHT` (`G1 > G3`) |
| G2 vs G3 | `LEFT-DOMINATES-RIGHT` (`G2 > G3`) |

There are no `PP-UNKNOWN`, `INELIGIBLE`, `PP-INCOMPARABLE`, or
different-geometry `PP-PREF-EQUIVALENT` relations in Lighthouse.

## Lighthouse Hasse reduction and integrity

The direct graph contains six measured edges. Its transitive reduction is:

```text
G0 > G2 > G1 > G3
```

The measured edges `G0 > G1`, `G0 > G3`, and `G2 > G3` are transitively
implied by this chain but remain direct evidence records. The graph has no
cycle, is transitive on the observed relations, has unique PP-maximal class
`G0`, and has unique PP-minimal class `G3`.

These are fixture-local geometry-class properties. They do not authorize the
claims “TA0 is best” or “TA3 Forward is worst.”

## Ashen exact relation graph and incomparability

The three classes are:

```text
G0 = TA0/REP-0, TA2-DEG-W1-OP-v1
G1 = TA1/W1, TA3-FWD-W1-OP-v1
G2 = TA2-MOTIF-W1-OP-v1, TA3-REV-W1-OP-v1
```

All three class pairs were directly measured:

| Pair | Exact relation |
| --- | --- |
| G0 vs G1 | `LEFT-DOMINATES-RIGHT` (`G0 > G1`) |
| G0 vs G2 | `PP-INCOMPARABLE` |
| G1 vs G2 | `RIGHT-DOMINATES-LEFT` (`G2 > G1`) |

`G0` and `G2` are the two PP-maximal classes. `G1` is dominated by both.
There is no cycle, no UNKNOWN, no INELIGIBLE, and no missing class pair. The
graph is intentionally not reducible to a total order.

## K3 control interpretation

K3 has one semantic Node orbit. Its G0 mappings are
`TA0`, `TA1`, `TA2-degree`, `TA2-motif`, and `TA3-Reverse`; G1 is
`TA3-Forward`. The literal mappings differ, but the exact registered
objective returns `PP-PREF-EQUIVALENT`.

This establishes invariance under the tested one-orbit candidate permutation.
K3 is not substantive real-fixture quality evidence.

## TA3 Forward and Reverse interpretation

TA3 Forward adds literal geometry only as follows:

| Fixture | Literal contribution | Evidence role |
| --- | --- | --- |
| Lighthouse | one new G3 class | substantive new real-fixture evidence |
| Ashen Crown | no new class; aliases TA1/W1 | no duplicate execution |
| K3 | different literal G1 mapping | control-only addition |

On Lighthouse, the new G3 is directly dominated by G0, G1, and G2 under the
registered objective. The bounded statement is that the current evidence
contains no fixture-local case where new TA3-Forward geometry is preferred over
an existing geometry class. This does not prove Forward semantics inferior,
wrong, or universally undesirable.

TA3 Reverse is literally identical to TA2-motif on Lighthouse, Ashen Crown,
and K3. It contributes zero new literal geometry executions, while its
semantic contract, witness ID, and provenance remain distinct.

## Witness aliases and incremental coverage

The 15 identity-implied relations are all `PP-PREF-EQUIVALENT`,
`executed=false`, `identityImplied=true`, and `independentEvidence=false`.
The 30 cross-class aliases derive from the 10 unique geometry executions.
They preserve source cell, source geometry pair, orientation, provenance, and
evidence multiplicity. In particular, Ashen TA3 Forward is an alias of TA1/W1,
not a second observation.

## Current class-pair completeness

| Fixture | Classes | Possible class pairs | Exact relations | Completeness |
| --- | ---: | ---: | ---: | --- |
| Lighthouse | 4 | 6 | 6 | COMPLETE |
| Ashen Crown | 3 | 3 | 3 | COMPLETE |
| K3 | 2 | 1 control | 1 | COMPLETE for control |

The current admitted real-fixture class-pair space is therefore
`CURRENT-SCOPE PAIRWISE COMPLETE`. This is not universal research completion.

## Structural-assignment branch saturation audit

| Criterion | Answer | Basis |
| --- | --- | --- |
| S1. All admitted labels have exact manifests? | YES | six manifests per fixture pass |
| S2. All manifests satisfy hard safety? | YES | GEO-0/GEO-3 and injectivity pass |
| S3. Geometry aliases canonicalized? | YES | GEOM-FP-v1 keyed classes |
| S4. Every current real-fixture class pair registered? | YES | Lighthouse 6/6; Ashen 3/3 |
| S5. UNKNOWN or INELIGIBLE remains? | NO | none in current class relations |
| S6. K3 orbit control passes? | YES | exact PP-PREF-EQUIVALENT |
| S7. Historical TA2 exact mappings recoverable? | NO | recovery seam exhausted; current NEW witnesses are authoritative |
| S8. Historical TA3 exact mappings recoverable? | NO | recovery seam exhausted; exact operational history unavailable |
| S9. TA2 NEW semantics have operational witnesses? | YES | TA2 operational records |
| S10. TA3 NEW semantics have operational witnesses? | YES | TA3 Forward/Reverse records |
| S11. TA3 additions leave an unresolved current class pair? | NO | current class space complete |
| S12. Specific same-level experiment required before synthesis? | NO | no accepted unresolved falsifiable question identified |

S1–S11 close, and S12 does not identify a mandatory same-level experiment.
The branch is consequently **CURRENT-SCOPE SATURATED**.

## Objective measurement, FP1, visual, and Production boundaries

The objective measured only the registered exact normalized-altitude and
Ashen FAN-P1 records, composed by PP-M3. It did not measure visual quality,
edge crossings as a general presentation objective, routing naturalness,
settling behavior, label quality, or all Initial Placement conditions.

FP1 remains a literal geometry-assignment coordinate used by this research
branch. It is not selected or accepted as a Production criterion. No scalar
score, cross-fixture aggregation, universal ranking, or policy winner follows.

Production source, samples, UI, routing, settling, witnesses, Core,
Extensions, schema, and `ai-knowledge` were not changed. Visual quality is
not established.

## Research question lineage and Experiment5 audit

The accepted question was whether the current provenance-safe TA0–TA3 witness
family contained missing fixture-local structural-objective comparisons after
geometry-class deduplication. Rerun1 answers that question: Lighthouse and
Ashen current class spaces are complete, and K3 supplies its bounded orbit
control.

Experiment5 is **not justified** at this checkpoint. No precise unresolved
structural question, falsifiable contrast, or pre-synthesis dependency
remains. “More fixtures might be useful” is not a sufficient reason to create
or select Experiment5. Any future Experiment5 would require a new explicit
question and design checkpoint.

## Interpretation claim classes

| Class | Allowed content |
| --- | --- |
| I0 | exact hashes, manifests, classes, objective records, and PP-M3 relations |
| I1 | fixture-local graph consequences such as Lighthouse chain and Ashen incomparability |
| I2 | current-scope saturation and the decision to synthesize the research branch |

No I0–I2 claim is a universal policy ranking, visual conclusion, Production
selection, or proof that Initial Placement is solved.

## Central questions

| Q | Answer |
| --- | --- |
| Q1. Rerun1 authority intact? | YES; all three hashes match. |
| Q2. Failed Experiment4 non-evidence? | YES; hashes unchanged and not used. |
| Q3. Lighthouse current substantive relations? | 6 unique class-pair relations. |
| Q4. Ashen current substantive relations? | 3 unique class-pair relations. |
| Q5. Every real-fixture class pair covered? | YES. |
| Q6. Lighthouse graph? | G0>G1, G0>G2, G2>G1, G0>G3, G1>G3, G2>G3. |
| Q7. Lighthouse Hasse reduction? | G0 > G2 > G1 > G3. |
| Q8. Lighthouse cycle? | NO. |
| Q9. Lighthouse PP-maximal? | G0, fixture-local only. |
| Q10. Lighthouse PP-minimal? | G3, fixture-local only. |
| Q11. Policy winner authorized? | NO. |
| Q12. Ashen graph? | G0>G1, G2>G1, G0 and G2 incomparable. |
| Q13. Ashen incomparable pair? | G0 vs G2. |
| Q14. Ashen PP-maximal classes? | Two: G0 and G2. |
| Q15. Ashen total order? | NO. |
| Q16. K3 establishes? | Tested one-orbit objective invariance. |
| Q17. K3 quality evidence? | NO. |
| Q18. TA3 Forward on Lighthouse? | One new G3, dominated by G0, G1, G2. |
| Q19. TA3 Forward on Ashen? | No new geometry; TA1/W1 alias. |
| Q20. TA3 Forward on K3? | Different literal mapping; control-only. |
| Q21. TA3 Reverse contribution? | Zero new literal geometry; aliases TA2-motif. |
| Q22. Reverse identity semantic? | NO. |
| Q23. New Forward preferred anywhere? | NO in current evidence. |
| Q24. Forward semantics inferior? | NO such inference is allowed. |
| Q25. UNKNOWN relations? | None. |
| Q26. INELIGIBLE relations? | None. |
| Q27. Current class-pair gap? | None. |
| Q28. Manifest gap? | None. |
| Q29. Comparator integrity gap? | None. |
| Q30. Regression gap? | None; 6/6 exact-match. |
| Q31. Current-scope complete? | YES. |
| Q32. Universal research complete? | NO. |
| Q33. Strongest allowed interpretation? | Current TA0–TA3 structural-assignment objective branch is current-scope saturated and interpretation-complete. |
| Q34. What remains unmeasured? | Visual quality, routing, settling, labels, crossings generally, and universal fixture/policy behavior. |
| Q35. Visual quality established? | NO. |
| Q36. FP1 selected for Production? | NO. |
| Q37. Assignment policy selected? | NO. |
| Q38. Same-level Experiment5 specifically justified? | NO. |
| Q39. If YES, question? | Not applicable; no precise mandatory question remains. |
| Q40. If NO, what follows? | Research synthesis checkpoint. |
| Q41. Exact next checkpoint? | `...STRUCTURAL-ASSIGNMENT-RESEARCH-SYNTHESIS1`. |
| Q42. Auto-started? | NO. |

## Hypotheses and falsification

H1–H15 are supported within the stated boundary: the relation set is
internally coherent; Lighthouse forms a strict local chain; Ashen preserves
incomparability; current class coverage is complete; TA3 Forward adds
substantive geometry only on Lighthouse; TA3 Reverse adds none; semantic
distinctness survives aliases; K3 remains control-only; aliases do not inflate
evidence; no universal ranking or visual conclusion follows; the branch may be
current-scope saturated; Experiment5 needs a precise unanswered question; and
Production selection remains premature.

N1–N17 were not triggered. In particular, hashes match, failed artifacts did
not leak into interpretation, all relations reconcile with raw/results,
Lighthouse has no cycle, Ashen was not scalarized, no pair is missing or
unknown, aliases are not independent evidence, transitive closure is not new
evidence, K3 is not quality evidence, semantic identity was not inferred,
there is no winner or visual claim, Experiment5 was not selected generically,
and protected/source state was preserved.

## CASE and closure

`CASE 1` is selected: Rerun1 is coherent, Lighthouse and Ashen current
class-pair spaces are complete, Lighthouse forms a strict fixture-local chain,
Ashen retains two incomparable PP-maximal classes, K3 passes, and no specific
same-level Experiment5 question is required before synthesis.

`DECISION A` is selected. The research-synthesis checkpoint is the next
responsibility, but it is not auto-started.

Production changes: **NO**.
