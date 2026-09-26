# LiaisonScape Initial-placement Seed TA-3 Correspondence Manifest Recovery1 Result

## Checkpoint

`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-TA3-CORRESPONDENCE-MANIFEST-RECOVERY1`

- Date: 2026-09-02
- Status: Complete — historical recovery exhausted at the diagnostic boundary
- Result: `CASE 4 / EXACT RESULT 1+2+8+10+11+12 / DECISION D`
- Recovery state: `TA3-REC-1` — intent-only diagnostic recovery
- Selected next checkpoint:
  `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-TA3-CORRESPONDENCE-SEMANTICS-DESIGN1`

> **Mandatory boundary:** this record recovers historical evidence only. It
> does not define new TA3 semantics, run an objective, or select a policy.

## Exact result

The exact historical labels `TA-3-forward` and `TA-3-reverse` first appear in
the committed topology-aware assignment Design1. The associated `RC-H2`
wording establishes a high-level diagnostic: compare a correspondence that
assigns higher motif/overlap responsibility toward a larger exact local-
spacing direction with a reverse correspondence toward a smaller direction.

That evidence does not recover an exact operational algorithm. The historical
record does not provide a complete responsibility order, candidate-role order,
tie rule, fallback rule, or per-fixture Node-to-FP1 manifest. The Experiment1
result preserves summary profile outcomes and states that both variants were
hard-valid, but its disposable runner and machine output were removed and no
exact manifest is reachable.

Therefore the safe conclusion is:

- TA3 forward/reverse survive as a diagnostic correspondence concept;
- they do not survive as a provenance-safe historical policy contract;
- no exact historical literal manifest is recovered for Lighthouse, Ashen
  Crown, or K3; and
- the next TA3 semantics must be explicitly **NEW**, not historical replay.

Decision D is selected: **only the diagnostic RC-H2 / forward-reverse concept
survives; the historical operational manifest is not recoverable.** The next
checkpoint is a new semantics design, not an objective execution.

Bingo! The historical search is exhausted at the exact design boundary; no
missing operational rule was invented.

## Preceding Experiment3 boundary

The preceding Experiment3 was committed as `e797a7c` and completed its seven
cells with `CASE 1 / DECISION A`. Its results are completely blacked out from
this recovery. In particular, its Lighthouse, Ashen Crown, and K3 relations
were not used to infer TA3 labels, role order, candidate order, fixture scope,
or correspondence. No Experiment3 runner or result was rerun.

## Source, baseline, and protected state

| Item | Reconciled state |
|---|---|
| e2r-spec HEAD | `e797a7c190f3de711d2140e39f62e3c2af132887` |
| e2r-spec branch/upstream | `main` / `origin/main`; local branch ahead, no push |
| e2r-spec initial dirty state | protected `sessions/E2R-Session-0052.md` only |
| LiaisonScape HEAD | `fd563340625fd3d88dc25baedc93c4f8fe69e5e7` |
| LiaisonScape branch/upstream | `main` / `origin/main` |
| Initial Placement source drift | NO; `src/auto-layout.ts` unchanged from baseline |
| LiaisonScape dirty state | protected EN/JA Lighthouse samples only |
| Experiment1 residual | preserved, detached at `fd56334`, no TA3 artifact found |
| Experiment2 clone | preserved and not read as authority for TA3 |
| Experiment3 clone | preserved; runner/results not modified or rerun |
| routing preview/residual shells | preserved and not modified |
| ai-knowledge | preserved; no file changed |

Protected samples and the protected Session were neither edited, staged,
restored, normalized, nor used as fixture authority.

## Historical search method

Read-only Git archaeology covered all reachable refs with:

- `git log --all` and commit chronology;
- `git log --all -S` for `TA3`, `TA-3`, `forward`, `reverse`,
  `correspondence`, and `RC-H2`;
- `git log --all -G` for TA3 and forward/reverse/correspondence patterns;
- `git show`, `git diff`, `git ls-tree`, and `git grep` on each relevant
  design/result commit;
- path/history inspection for deleted or renamed TA3, runner, JSON, mapping,
  and correspondence artifacts.

The search covered branches and tags. Only the current `main` history and its
remote-tracking `origin/main` were present; no alternate branch or tag carried
an additional TA3 artifact.

## Reachable commit archaeology

| Evidence | Commit / time | Finding |
|---|---|---|
| First exact TA3 labels, first forward, first reverse, first correspondence | `31ecec2946f5c4bbcb1dd8ca7b7eee6a4a67d1ed`, 2026-09-02 05:10:18 JST | Design1 adds `TA-3-forward`, `TA-3-reverse`, and RC-H2; no earlier reachable occurrence found |
| First TA3 result occurrence | `3c3d1cf06aa1a64742a7265a7001603ac190ba67`, 2026-09-02 05:28:24 JST | Experiment1 reports the two variants and summary outcomes |
| Historical assignment objective context | `3e98d6c`, then `38c448b` | correspondence remains an unresolved objective/design boundary |
| Manifest-reconstruction finding | `19bef00` | no complete TA-3 forward/reverse manifest or committed artifact found |
| Later TA2/TA3 boundary records | `042d7dd` through `76d2a5a` | TA3 is not backfilled from TA2; TA3 remains semantically incomplete |
| Experiment3 design/result | `b2a7b39`, `e797a7c` | TA3 explicitly excluded; not used in this recovery |

The Design1 commit predates the Experiment1 result. No historical runner,
`results.json`, exact mapping table, or policy manifest is present in any
reachable tree. The Experiment1 result itself says that its disposable runner
and machine output were removed.

## Residual, reflog, and unreachable boundary

The residual topology-aware Experiment1 shell was inspected read-only. It is
detached at `fd563340625fd3d88dc25baedc93c4f8fe69e5e7`, has no tracked source
drift, and contains no TA3 runner, mapping manifest, or result JSON. Its
committed application tree is supporting context only.

The local reflog was searched. A read-only unreachable-object scan found
near-duplicate or derived documentation blobs, including copies of the
manifest-reconstruction and topology-aware result records, but no independent
TA3 operational artifact. These objects are forensic evidence only and were
not restored, branched, tagged, or treated as canonical authority. No useful
P3 evidence was found.

## First exact TA3 occurrence and label history

The first exact committed policy table is in `31ecec2`:

| Label | Surviving historical wording | Status |
|---|---|---|
| TA-3-forward | RC-H2 forward: higher motif/overlap responsibility receives the larger local-spacing direction | high-level diagnostic wording |
| TA-3-reverse | RC-H2 reverse: the same responsibility ordering receives the smaller local-spacing direction | high-level counter-diagnostic wording |

The wording is not a complete materializer contract. It does not identify a
unique responsibility tuple, its full ordering, candidate index order,
endpoint/interior treatment, tie behavior, fallback, or a literal zip rule.
Names alone cannot establish whether forward/reverse are two policies or two
materializers of one policy.

## RC-H2 audit

`RC-H2` first appears in `31ecec2` as a smallest testable hypothesis. It
describes a diagnostic comparison involving motif-neighbor responsibility and
exact local spacing/fan-out opportunity, with a reverse correspondence as the
counter-hypothesis. The later result `3c3d1cf` confirms that the two
predeclared directions produced different real-graph profile classes and that
both were hard-valid.

RC-H2 does not specify the missing exact responsibility order or candidate
materializer. It is therefore evidence for diagnostic intent, not evidence of
a historical algorithm or quality rule. No objective inversion, permutation
search, visual matching, or later-policy backfill was used.

## Forward and reverse meaning

| Question | Recovered status |
|---|---|
| Is “forward” a diagnostic correspondence direction? | YES, high-level intent |
| Is “forward” proven to mean ascending FP1 index? | NO |
| Is “reverse” proven to mean descending FP1 index? | NO |
| Is reverse proven to reverse topology-role order instead? | NO |
| Do both variants share one exact semantic policy? | UNKNOWN |
| Are they two exact semantic policies? | UNKNOWN |
| Is an observed literal reversal reported? | YES, on K3 the result reports a literal candidate-index reversal at orbit level |
| Does that observation prove a semantic reversal rule? | NO |

The result supports only the distinction between an observed literal
reversal and a recovered semantic correspondence rule.

## Family identity

The safe family classification is **C: one diagnostic family without a fully
defined policy identity**. The evidence does not justify A (one semantic
policy with two exact materializers) or B (two separate exact policies).
Forward/reverse names and a counterfactual result are insufficient to resolve
that identity.

## Topology-role source and tie semantics

The historical Design1/result names a graph-derived topology signature composed
of degree, neighbor-degree multiset, motif membership, overlap-cluster
membership, shared motif-neighbor count, motif-neighbor degree multiset,
boundary/context incident count, and component membership. This recovers the
allowed *kind* of source, not a complete TA3 role order.

The following seams remain unknown:

- exact responsibility tuple and primary/secondary field order;
- sort direction and role order among equal or comparable responsibilities;
- treatment of semantic-equivalent roles and topology orbits;
- lexical tie, array-order tie, or stable-sort behavior;
- class-internal fallback and its provenance; and
- input-order and rename materialization rules beyond the reported controls.

Experiment1 reports that TA3 transported across the strong rename and Entity/
Relation input reorder controls, while TA0 remained lexical-sensitive. This is
accepted as a historical result statement, not as a substitute for the
missing operational rules.

## Candidate family, order, and correspondence

The historical Experiment1 explicitly used the FP1-NGP family:

```text
P_i = (i/(N-1), (i/(N-1))^2)
```

Thus the family identity is chronology-safe as an Experiment1 diagnostic
context. However, the complete candidate-role order and direction are not
recovered. “Larger local spacing” and “smaller local spacing” are descriptors
whose exact candidate selection, endpoint treatment, and tie behavior are not
specified. Current FP1 semantics, TA1, TA2, or Experiment3 cannot fill that
gap retroactively.

| Field | Status |
|---|---|
| Historical candidate family | KNOWN: FP1-NGP in the committed Experiment1 record |
| Candidate order | UNKNOWN / incomplete |
| Candidate direction | UNKNOWN as an exact index rule; high-level larger/smaller-spacing contrast only |
| Exact forward transformation | NOT RECOVERED |
| Exact reverse transformation | NOT RECOVERED |
| Later FP1 backfill | NO |

The exact correspondence transformation is therefore not recoverable without
inventing at least one semantic, ordering, tie, or materializer choice.

## Fixture domain and literal manifest recovery

Experiment1's committed result covers Lighthouse, Ashen Crown, and K3. This
does not make exact manifests recoverable for those fixtures.

| Fixture | Historical TA3 scope | Manifest state | Safe conclusion |
|---|---|---|---|
| Lighthouse | included in Experiment1 | `MANIFEST-NOT-RECOVERABLE` | no exact Node→FP1 table survives |
| Ashen Crown | included in Experiment1 | `MANIFEST-NOT-RECOVERABLE` | no exact Node→FP1 table survives |
| K3 | included as a three-node orbit control | `MANIFEST-NOT-RECOVERABLE` | orbit behavior survives; no named mapping privilege or exact variant table |

No manifest is `MANIFEST-COMMITTED`, `MANIFEST-DERIVABLE`, or
`MANIFEST-PARTIAL` in the provenance-safe sense required for objective use.
The summary profile and hard-valid statements cannot be inverted into a
mapping.

## K3 boundary

K3 is historically in scope as a complete three-node graph and one true Node
orbit. Experiment1 reports that every policy remained orbit-equivalent and
that no unique named role was introduced. It also reports an orbit-level
literal candidate-index reversal between TA3 variants.

The safe K3 claim is therefore: one semantic orbit and a diagnostic
forward/reverse materialization contrast were reported. No `a`, `b`, or `c`
receives a semantic privilege, and no exact historical TA3 mapping can be
replayed.

## Hard-gate status

Experiment1 reports all 18 primary policy cells as `HARD-VALID`, including
TA3-forward and TA3-reverse for the three fixtures. Because the exact TA3
literal manifests and runner are absent, this is a historical result claim,
not an independently re-evaluable recovered-manifest gate.

| Gate question | Status |
|---|---|
| Historical hard-valid statement exists | YES, reported by `3c3d1cf` |
| Exact recovered TA3 manifest is injective/finite/distinct | NOT APPLICABLE |
| GEO-0/GEO-3 independently revalidated for recovered TA3 | NO |
| Remapping permitted to repair the gap | NO |

## Recovery-layer ledger

| Layer | Finding | Level |
|---|---|---|
| TA3-R0 label | exact forward/reverse labels and first occurrence recovered | RECOVERED |
| TA3-R1 intent | correspondence diagnostic and reverse counter-hypothesis recovered | RECOVERED-HIGH-LEVEL |
| TA3-R2 semantic input | topology signature family named, exact role order missing | PARTIAL |
| TA3-R3 correspondence | larger/smaller spacing contrast named, exact transform missing | PARTIAL / NOT OPERATIONAL |
| TA3-R4 candidate contract | FP1-NGP named; exact order/direction/ties/fallback missing | PARTIAL |
| TA3-R5 literal manifest | no exact fixture-local Node→candidate mapping | NOT RECOVERABLE |
| TA3-R6 operational properties | rename/reorder result statements survive; implementation rules absent | PARTIAL |
| TA3-R7 admissibility | historical hard-valid summary only; no recovered manifest to recheck | NOT REVALIDATED |

Overall: **TA3-REC-1 / intent-only diagnostic recovery**.

## Artifact and provenance ledger

| Tier | Evidence | Use in this result |
|---|---|---|
| P0 | reachable Git commits `31ecec2` and `3c3d1cf` | direct historical label, intent, scope, and reported-result facts |
| P1 | committed Design1/Experiment1 prose and later reconstruction records | interpretive boundary and explicit missing-seam statements |
| P2 | current LiaisonScape baseline `fd56334` | source/protected-state reconciliation only |
| P3 | residual shell, reflog, unreachable near-duplicate docs | forensic search only; no independent artifact found |
| P4 | recovery classification and next-step inference | recorded reasoning; never treated as authority |

P4 was not used to invent a mapping. No P3 object was promoted to canonical
authority.

## Missing-information ledger

Historical recovery is exhausted. The exact missing seams are:

1. the semantic identity of the TA3 family beyond diagnostic intent;
2. exact forward/reverse topology-role sequence and responsibility ordering;
3. candidate-role order and exact larger/smaller-spacing interpretation;
4. endpoint/interior and predecessor/successor treatment;
5. tie, fallback, lexical, and input-order materialization semantics;
6. complete fixture-local Node→FP1 mappings and their provenance; and
7. an independently re-runnable artifact for hard-gate revalidation.

Fuzzy resemblance, screenshots, rounded outcomes, current source, TA1/TA2
semantics, or Experiment2/3 values cannot close these seams.

## Objective blackout and current-policy boundary

The following were all **NO**:

- TA3 normalized altitude;
- TA3 FAN-P1;
- TA3 PP-M3;
- routing, labels, visual comparison, or screenshot inversion;
- brute-force permutation or swap search;
- fitting a mapping to an objective result;
- use of Experiment2 or Experiment3 quality output; and
- backfilling from TA1, TA2-degree, or TA2-motif.

Current policies remain unchanged: TA0/REP-0, TA1/W1, TA2-degree, and
TA2-motif were not changed. No new TA3 semantics or witness was created.

## Central questions Q1–Q32

| Q | Answer |
|---|---|
| Q1. Exact TA3 labels? | Yes: TA-3-forward and TA-3-reverse. |
| Q2. First label occurrence? | `31ecec2`, 05:10:18 JST. |
| Q3. First result occurrence? | `3c3d1cf`, 05:28:24 JST. |
| Q4. Did design precede result? | Yes. |
| Q5. Was forward/reverse diagnostic? | Yes, at high-level RC-H2 intent. |
| Q6. Exact forward semantics? | No. |
| Q7. Exact reverse semantics? | No. |
| Q8. One policy or two? | Not resolved; diagnostic-family classification is safest. |
| Q9. Exact topology-role input? | Signature family is named; exact TA3 ordering is missing. |
| Q10. Exact candidate family? | FP1-NGP is named in Experiment1. |
| Q11. Exact candidate order? | No. |
| Q12. Exact candidate direction? | No; only larger/smaller spacing contrast survives. |
| Q13. Exact forward/reverse transformation? | No. |
| Q14. Exact forward mapping? | No. |
| Q15. Exact reverse mapping? | No. |
| Q16. Fixtures? | Lighthouse, Ashen Crown, and K3 are in the historical result scope. |
| Q17. Committed or derived manifests? | None recoverable in the required sense. |
| Q18. Are derivation steps complete? | No. |
| Q19. Later TA1/TA2 semantics used? | No. |
| Q20. Experiment2/3 quality used? | No. |
| Q21. Does RC-H2 specify an exact mapping? | No; it specifies a diagnostic hypothesis. |
| Q22. Was TA3 a quality rule? | No evidence establishes that; quality selection is prohibited. |
| Q23. Is K3 historically in scope? | Yes, as one orbit control. |
| Q24. Does K3 retain one orbit? | Yes. |
| Q25. Can a recovered hard gate be evaluated? | No; no exact manifest was recovered. |
| Q26. Did a recovered manifest fail? | Not applicable. |
| Q27. TA3-REC state? | TA3-REC-1. |
| Q28. Is provenance-safe objective design possible next? | No, not from historical recovery alone. |
| Q29. What is missing? | Meaning, ordering, ties, materializer, and literal manifests. |
| Q30. Is historical recovery exhausted? | Yes. |
| Q31. Must new semantics be labeled NEW? | Yes. |
| Q32. Smallest next checkpoint? | TA3 correspondence semantics design1. |

## Hypotheses H1–H15

| H | Result |
|---|---|
| H1. Labels survive in committed evidence | SUPPORTED |
| H2. Forward/reverse intent is diagnostic | SUPPORTED at high level |
| H3. Exact topology-role sequence survives | NOT SUPPORTED |
| H4. Exact candidate correspondence survives | NOT SUPPORTED |
| H5. Shared exact topology source is recoverable | PARTIAL only |
| H6. One exact transformation explains both variants | NOT ESTABLISHED |
| H7. Transformation is recoverable without inversion | NOT SUPPORTED |
| H8. Tie semantics survive | NOT SUPPORTED |
| H9. Exact fixture manifests survive/derive | NOT SUPPORTED |
| H10. Later TA1/TA2 semantics are unnecessary | SUPPORTED; they were not used |
| H11. K3 is recoverable without named privilege | Orbit-level only; exact mapping no |
| H12. Hard validity is independent of quality | SUPPORTED as a principle; no manifest recheck |
| H13. Forensic evidence is noncanonical | SUPPORTED |
| H14. TA3 is provenance-safe for objective design | NOT SUPPORTED |
| H15. No Production change follows | SUPPORTED |

## Falsification N1–N15

| N | Assessment |
|---|---|
| N1. Only labels survive | TRIGGERED at the recovery boundary |
| N2. Forward/reverse have incompatible meanings | NOT TRIGGERED; no contradiction, only incompleteness |
| N3. Topology order is missing | TRIGGERED |
| N4. Tie behavior is missing | TRIGGERED |
| N5. Candidate family/order is incomplete | TRIGGERED for order/direction; family name survives |
| N6. Only objective inversion could reconstruct mapping | Refused; no inversion used |
| N7. Later TA1/TA2 needed | NOT TRIGGERED; not used |
| N8. Residual conflicts with committed history | NOT TRIGGERED |
| N9. Two authoritative manifests conflict | NOT TRIGGERED; none found |
| N10. K3 needs named privilege | NOT TRIGGERED |
| N11. Hard-gate failure requires remapping | Not applicable; remapping prohibited |
| N12. Complete manifest needs new semantics | TRIGGERED |
| N13. Experiment3 could influence recovery | Refused; blackout held |
| N14. Production source must change | NOT TRIGGERED |
| N15. Protected state cannot be preserved | NOT TRIGGERED |

## CASE and Decision

| Case | Assessment |
|---|---|
| CASE 1 | Not selected: exact semantics and manifests are absent. |
| CASE 2 | Not selected: algorithm is not exact. |
| CASE 3 | Not selected: role/tie/candidate seams prevent exact operational recovery. |
| CASE 4 | **Selected:** only diagnostic forward/reverse and RC-H2 intent survive. |
| CASE 5 | Not primary: no partial literal manifest is independently usable. |
| CASE 6 | Not selected: evidence is incomplete, not contradictory. |
| CASE 7 | Not selected: the issue is not a safely recoverable fixture subset. |
| CASE 8 | Historical recovery is exhausted, but CASE 4 more precisely describes the surviving diagnostic concept. |
| CASE 9 | Not selected: no single narrow provenance seam remains. |
| CASE 10 | Not selected: protected/source state reconciled successfully. |

**Decision D:** only the diagnostic RC-H2 / forward-reverse concept survives;
the historical operational manifest is not recoverable.

Selected next checkpoint:

`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-TA3-CORRESPONDENCE-SEMANTICS-DESIGN1`

That checkpoint must explicitly label any new contract as **NEW OPERATIONAL
SEMANTICS**, preserve this historical diagnostic as context, and must not call
the result historical replay. It must not auto-start an objective experiment.

## Production changes

NO. This checkpoint changed no application source, Initial Placement, candidate
family, FP1/F2, assignment, objective/comparator, materializer, solver,
settling, packing, routing, labels, UI, samples, browser state, Dataset/Core/
Extension/schema semantics, or `ai-knowledge`. No runner, branch, tag, release,
deployment, publication, or push was created.

Knowledge Candidate: **YES — hypothesis strengthened/refined**. No
`ai-knowledge` promotion or modification was made.
