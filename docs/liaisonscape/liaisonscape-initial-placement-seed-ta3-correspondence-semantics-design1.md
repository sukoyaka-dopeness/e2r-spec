# LiaisonScape Initial-placement Seed TA-3 Correspondence Semantics Design1

- Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-TA3-CORRESPONDENCE-SEMANTICS-DESIGN1`
- Date: 2026-09-02
- Status: Complete — NEW semantic family frozen; witness-ready; not Production
- Preceding checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-TA3-CORRESPONDENCE-MANIFEST-RECOVERY1`
- Preceding recovery commit: `b961e45`
- Result: `CASE 1 / EXACT RESULT 1+2+3+4+5+6+7+8+9+10+11+12+13+14 / DECISION A`

> **NEW OPERATIONAL SEMANTICS**
>
> The TA3 contracts defined in this document are new operational semantics.
> They are not historical TA3 semantics, a recovered TA3 algorithm, an
> Experiment1 replay, or the original TA3 materializer.

## Result and decision

The new TA3 family is frozen as one exact Node responsibility contract, one
exact candidate-local spacing contract, and two correspondence variants that
share every semantic layer except candidate-spacing orientation. It is ready
for fixture-local operational witness reconstruction. This result does not
claim that either orientation is better, Production-ready, or historically
authentic.

Decision A is selected. The next checkpoint is
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-TA3-CORRESPONDENCE-OPERATIONAL-WITNESS-RECONSTRUCTION1`.

The informal boundary is:

> Yahoo! — new TA3 correspondence semantics are frozen and witness-ready.

That celebration is not evidence of visual quality and does not authorize a
fixture mapping, objective run, source change, or Production adoption.

## Historical recovery boundary

`TA3-REC-1` recovered only the historical labels `TA-3-forward` and
`TA-3-reverse`, their high-level RC-H2 diagnostic intent, and the historical
scope of Lighthouse, Ashen Crown, and K3. It did not recover an exact
responsibility order, candidate-role order, tie/fallback rule, or fixture-local
Node-to-FP1 manifest. Those gaps remain historical gaps.

The historical diagnostic context is retained as follows:

- historical forward: higher motif/overlap responsibility was described as
  receiving the larger local-spacing direction;
- historical reverse: the same responsibility ordering was described as
  receiving the smaller local-spacing direction;
- no historical literal mapping is inferred from those descriptions.

The contracts below are a new interpretation of that diagnostic contrast. A
historical alias is context only:

| Historical label | New contract | Historical replay claimed? |
| --- | --- | --- |
| `TA-3-forward` | `TA3-CORR-FWD-NEW-v1` | No |
| `TA-3-reverse` | `TA3-CORR-REV-NEW-v1` | No |

## Source, baseline, and protected state

The source baseline was reconciled against the existing LiaisonScape worktree:
the runtime source has no drift from its original HEAD, and the only existing
application changes are the protected EN/JA Lighthouse sample files. The
e2r-spec worktree already contains the preceding `b961e45` recovery commit.
The protected `sessions/E2R-Session-0052.md` change is not part of this
checkpoint.

The following boundaries remain protected and unchanged:

- TA0, TA1/W1, TA2-degree, TA2-motif, and the historical TA3 record;
- LiaisonScape runtime source and samples;
- the Experiment1 residual shell and Experiment2/Experiment3 clones;
- routing-preview and other residual experiment shells;
- `ai-knowledge`.

Experiment3 is explicitly blacked out as a contract-selection input. Its
result, and any visual, routing, altitude, or objective observation, did not
select this design.

## New TA3 family architecture

The family has separate responsibility, candidate, correspondence,
materialization, and literal-witness layers:

| Layer | Contract ID | Kind | Inputs | Quality meaning? |
| --- | --- | --- | --- | --- |
| Node responsibility | `TA3-RESP-NEW-v1` | semantic | accepted topology, motifs, overlap clusters | No |
| Candidate spacing | `TA3-SPACE-NEW-v1` | semantic | FP1 candidate family only | No |
| Forward correspondence | `TA3-CORR-FWD-NEW-v1` | semantic relation | responsibility and larger-spacing order | No |
| Reverse correspondence | `TA3-CORR-REV-NEW-v1` | semantic relation | responsibility and smaller-spacing order | No |
| Node linearization | `TA3-CORR-OP-v1` | operational | semantic maxima and Entity IDs | No |
| Candidate tie | `TA3-CORR-OP-v1` | operational | equal spacing roles and FP1 index | No |
| Future literal witness | `TA3-WIT-NEW-OPERATIONAL` | provenance class | a later reconstruction record | No |

There is exactly one shared responsibility contract and exactly one shared
candidate-spacing contract. Forward and reverse are two intentional
correspondence variants, not two competing responsibility policies.

## Node responsibility semantics

### Options evaluated

| Option | Exact fields | Relation | Scalar? | Rename-equivariant? | Decision |
| --- | --- | --- | --- | --- | --- |
| RESP-S1 | `R(V)=(m(V),o(V),s(V))` | componentwise partial order | No | Yes | Selected |
| RESP-S2 | full TA1 topology signature | requires a broader total-order seam | No, but order is arbitrary | Yes in fields | Rejected as too broad |
| RESP-S3 | `m(V)` only | one-field order | No | Yes | Rejected as too narrow |
| RESP-S4 | weighted/scalar combination | total scalar order | Yes | Not needed | Rejected; no weights/sums |

The selected contract is:

```text
R(V) = (m(V), o(V), s(V))
```

where:

- `m(V)` is accepted motif membership count;
- `o(V)` is the count of derived motif-overlap clusters containing `V`;
- `s(V)` is the count of distinct other Nodes sharing an accepted motif with
  `V`.

`TA3-RESP-NEW-v1` normatively reuses the exact responsibility semantics
already defined by `TA2-MOTIF-NEW-v1`. This is explicit **new normative reuse**,
not historical backfill and not a collapse of TA2 and TA3 into one policy.

### Partial order and equivalence

`V` dominates `W` exactly when every component is at least as large and at
least one component is strictly larger:

```text
m(V) >= m(W)
o(V) >= o(W)
s(V) >= s(W)
```

Exact vector equality is semantic equivalence. Any unequal vectors that do not
meet the dominance relation are semantically incomparable. There is no hidden
secondary field, degree fallback, lexicographic semantic order, scalar score,
weight, sum, coefficient, or optimization objective.

Higher responsibility means only higher structural motif/overlap
responsibility under this contract. It does not mean a more important Entity,
visual prominence, or better layout quality.

### Operational Node linearization

For remaining Nodes `S`, define:

```text
Max(S) = { v in S | no w in S semantically dominates v }
```

`TA3-CORR-OP-v1` repeats the following until `S` is empty:

1. compute `Max(S)`;
2. among simultaneous maxima only, choose the Unicode/code-point lexical
   Entity ID ascending;
3. append the selected Node;
4. remove it from `S`.

The resulting sequence begins with the highest semantic responsibility.
`responsibilityRank = 0` means the first operationalized semantic maximum.
Lexical selection is operational reproducibility only; it does not change the
partial order or create semantic priority among incomparable Nodes.

## Candidate family and spacing semantics

The research-only FP1 family is retained for `N >= 2`. Let `m=N-1` and use
the exact scaled representation:

```text
P_i = (i/m, (i/m)^2)
Q_i = (m*i, i^2)
```

The selected candidate-only contract is `TA3-SPACE-NEW-v1`, corresponding to
SPACE-S1 local chord span. For immediate-neighbor squared chord distances:

```text
D^-_i = ||Q_i - Q_(i-1)||^2
D^+_i = ||Q_(i+1) - Q_i||^2
```

define:

```text
L_0 = 2 * D^+_0
L_i = D^-_i + D^+_i       for 1 <= i <= m-1
L_m = 2 * D^-_m
```

The mirrored endpoint convention supplies the missing neighbor by reflection;
it does not introduce a zero or a nonlocal term. `L_i` means only a larger or
smaller candidate-local chord-span role. It is not placement quality, a
preferred layout, FAN-P1, routing quality, readability, or a global objective.

### Candidate-spacing options

| Option | Definition | Candidate-only? | Objective contamination? | Decision |
| --- | --- | --- | --- | --- |
| SPACE-S1 | mirrored local chord span `L_i` | Yes | No | Selected |
| SPACE-S2 | `min(j != i) ||Q_i-Q_j||^2` | Yes | No, but ties are less clear for this local role | Rejected |
| SPACE-S3 | candidate index `i` | Yes | No | Rejected; handle, not meaning |
| SPACE-S4 | FAN-P1/angular spacing | No; graph-local after assignment | Yes | Rejected |
| SPACE-S5 | distance sum to all candidates | Yes | Not registered, but too global | Rejected |

SPACE-S1 is local because it uses only the immediate predecessor and successor
of the candidate in FP1. It is graph-independent, exact, deterministic,
defined before Node assignment, and independent of objectives.

### Exact SPACE-S1 algebra

For `i=0..m-1`:

```text
D_i = ||Q_(i+1)-Q_i||^2 = m^2 + (2i+1)^2
```

Therefore, for `m >= 2`:

```text
L_0 = 2m^2 + 2
L_i = 2m^2 + 8i^2 + 2       for 1 <= i <= m-1
L_m = 10m^2 - 8m + 2
```

The exact differences are positive:

- `L_1-L_0 = 8`;
- `L_i-L_(i-1) = 8(2i-1) > 0` for `2 <= i <= m-1`;
- `L_m-L_(m-1) = 8(m-1) > 0`.

Thus `L_0 < L_1 < ... < L_m` for every `N >= 3`. The proof and all audit
values use integer algebra; floating-point sampling has no authority.

### Candidate-only audit values

| N | Exact `L_i` sequence | Candidate semantic classes |
| --- | --- | --- |
| 10 | `164, 172, 196, 236, 292, 364, 452, 556, 676, 740` | ten singleton classes, ascending `P0..P9` |
| 3 | `10, 18, 26` | three singleton classes, ascending `P0..P2` |
| 2 | `4, 4` | one equivalence class containing `P0,P1` |
| 1 | FP1 formula unsupported (`m=0`) | one explicit singleton if a caller permits `N=1`; forward = reverse |

For `N >= 3`, the strict algebraic consequence is that ascending spacing is
`P0..Pm` and descending spacing is `Pm..P0`. This is a consequence of
`L_i`, not the definition of the semantic metric. For `N=2`, no directional
candidate distinction is invented.

## Correspondence semantics

Let `V_0..V_(N-1)` be the Node sequence produced by the shared operational
linearization. Let candidate sequences be sorted by the semantic `L_i` value;
among equal values, ascending FP1 index is an operational-only handle.

### Forward

`TA3-CORR-FWD-NEW-v1` means:

```text
higher semantic responsibility -> larger candidate local-spacing role
```

It zips the Node sequence with descending `L_i` order. For `N >= 3`, this is
`P_m, P_(m-1), ..., P_0`.

### Reverse

`TA3-CORR-REV-NEW-v1` means:

```text
higher semantic responsibility -> smaller candidate local-spacing role
```

It zips the same Node sequence with ascending `L_i` order. For `N >= 3`, this
is `P_0, P_1, ..., P_m`.

### Shared and differing dimensions

| Property | Forward NEW | Reverse NEW |
| --- | --- | --- |
| Responsibility source | `TA3-RESP-NEW-v1` | `TA3-RESP-NEW-v1` |
| Node order | `TA3-CORR-OP-v1` maxima sequence | same |
| Spacing source | `TA3-SPACE-NEW-v1` | same |
| Candidate orientation | largest to smallest `L_i` | smallest to largest `L_i` |
| Materialization | direct zip | direct zip |
| Candidate ties | lower FP1 index first, operational only | same |
| Historical replay | No | No |
| Future witness | `TA3-FWD-W1-OP-v1` | `TA3-REV-W1-OP-v1` |

The correspondence relation is therefore a diagnostic contrast with one frozen
differing dimension: candidate-spacing orientation. It is not defined merely
as “reverse the FP1 index”; the semantic definition remains responsibility to
spacing-role correspondence. If strict ordering applies, the index identity
`index_reverse(V) = m - index_forward(V)` is a consequence, not the contract.

For `N=2`, both candidates are semantically equivalent in spacing and the same
operational tie rule is used. Forward and reverse therefore have no candidate-
side semantic distinction before tie handling. For `N=1`, `P0` is the single
class and forward equals reverse; the FP1 division formula must not be used.

## Boundary semantics

### Ties, incomparability, renaming, and input order

- Node incomparability remains `INCOMPARABLE`, not equality or a semantic tie;
  lexical ID is used only when both Nodes are in the current maximal set.
- Equal candidate `L_i` values are candidate-role equivalence; ascending FP1
  index is an explicit operational handle only.
- Entity names, identifier spelling, locale, labels, and coordinates do not
  enter `R(V)`.
- Entity array order, Relation array order, and iteration order are not
  semantic. Deterministic output derives from the contracts and the explicit
  lexical/index handles.
- Semantic rename equivariance is intended. Literal rename stability is not
  claimed because a lexical operational choice can change under renaming.

### K3 orbit

K3 has `R(a)=R(b)=R(c)=(1,1,2)`. It remains one semantic Node orbit with no
named privilege. A future forward/reverse materializer may produce different
literal assignments or select a different literal representative under an
operational handle, but that is not semantic preference. No K3 mapping is
created here.

### Historical versus new contract table

| Concept | Historical recovery | New Design1 contract | Replay claimed? |
| --- | --- | --- | --- |
| Labels | `TA-3-forward`, `TA-3-reverse` | `TA3-CORR-FWD/REV-NEW-v1` | No |
| Responsibility | high-level motif/overlap wording | exact `R=(m,o,s)` | No |
| Candidate family | RC-H2 direction only | research-only FP1 exact `Q_i` | No |
| Spacing metric | not recovered | exact SPACE-S1 `L_i` | No |
| Forward rule | not operationally recovered | high responsibility to larger `L_i` | No |
| Reverse rule | not operationally recovered | high responsibility to smaller `L_i` | No |
| Tie/fallback | absent | lexical Node / ascending-index candidate handles | No |
| Witness provenance | absent | `TA3-WIT-NEW-OPERATIONAL`, `CLAIM-P0` | No |

## Future witnesses and claim boundary

The following identifiers are reserved for the next checkpoint only:

- `TA3-FWD-W1-OP-v1`;
- `TA3-REV-W1-OP-v1`;
- provenance: `TA3-WIT-NEW-OPERATIONAL`;
- maximum claim: `CLAIM-P0`.

No W2 claim, canonical-witness claim, quality-neutral claim, Production claim,
fixture mapping, hard gate, or objective result is created here. The next
checkpoint may attach literal Lighthouse, Ashen Crown, and K3 mappings only if
it reports them as new operational witnesses under this provenance.

## Objective blackout and non-changes

This design did not inspect or use Experiment2/Experiment3 output, normalized
altitude, FAN-P1, PP-M3, routing, labels, browser output, visual evaluation,
or Production-quality inference. It did not calculate an objective and did not
change source, settling, routing, UI, samples, or any existing TA0/TA1/TA2
semantics.

## Central questions

| Question | Answer |
| --- | --- |
| Q1. Is this NEW semantics? | Yes. |
| Q2. Historical replay? | No. |
| Q3. Shared family architecture? | One responsibility contract, one candidate-spacing contract, two orientation variants, separate operational and witness layers. |
| Q4. One or two responsibility contracts? | One: `TA3-RESP-NEW-v1`. |
| Q5. One or two spacing contracts? | One: `TA3-SPACE-NEW-v1`. |
| Q6. Responsibility? | Exact `R(V)=(m,o,s)` with componentwise partial order. |
| Q7-Q8. TA2-MOTIF reuse and boundary? | Yes; explicitly NEW normative reuse, not backfill. |
| Q9. TA1 signature? | Rejected as unnecessarily broad for motif/overlap correspondence. |
| Q10. Scalar motif count? | Rejected because it discards overlap responsibility. |
| Q11-Q12. Partial order? | Preserved; incomparables are operationally linearized only. |
| Q13-Q17. Spacing/objective? | Exact candidate-only SPACE-S1; no FAN-P1 or objective output. |
| Q18. Total for N>=3? | Yes, by exact strict monotonicity of `L_i`. |
| Q19. N=2? | `L0=L1=4`; one candidate-role equivalence class. |
| Q20. N=1? | Explicit singleton boundary; no division by zero; forward = reverse. |
| Q21. Is index semantic? | No; it is only an operational tie handle or algebraic consequence. |
| Q22-Q23. Forward/reverse? | High responsibility zips to descending/ascending `L_i`, respectively. |
| Q24-Q26. Shared layers? | Same Node order, same responsibility and spacing semantics; only orientation differs; explicitly NEW. |
| Q27-Q28. Operational ties? | Lexical Entity ID for Node maxima; ascending FP1 index for equal candidate roles. |
| Q29-Q30. Lexical/index semantic? | No. |
| Q31-Q32. Rename? | Semantic equivariance intended; literal stability not claimed. |
| Q33-Q34. K3? | One orbit; later literal differences need no named privilege. |
| Q35-Q37. Future witnesses? | IDs reserved under `TA3-WIT-NEW-OPERATIONAL`, capped at `CLAIM-P0`. |
| Q38-Q40. Mapping, gate, objective now? | No, no, no. |
| Q41. Witness-ready? | Yes, for the next bounded reconstruction only. |
| Q42. Next checkpoint? | `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-TA3-CORRESPONDENCE-OPERATIONAL-WITNESS-RECONSTRUCTION1`. |

## Hypotheses and falsification

The design supports H1–H15: historical intent can be retained without replay;
one shared responsibility contract can serve two variants; TA2-MOTIF semantics
can be reused as a new layer; a componentwise relation is preferable to a
scalar score here; candidate-local spacing is graph-independent and exact;
SPACE-S1 is strictly ordered for `N>=3`; `N=2` legitimately collapses; the
forward/reverse orientation contrast is coherent; operational lexical choice
does not create semantic priority; K3 remains one orbit; future witnesses can
be predeclared; and no Production/objective decision follows.

The required falsification audit found no blocker:

- N1/N2: the explicit NEW banner and reconciled TA2-MOTIF definition prevent
  historical backfill and preserve exact fields;
- N3–N5: SPACE-S1 uses only FP1 candidate neighbors, no objective, and its
  integer monotonicity proof passes;
- N6–N8: mirrored endpoints are exact, and forward/reverse share responsibility
  semantics rather than requiring divergent Node policies;
- N9–N12: no scalarization, lexical semantic field, named K3 privilege, or
  input-order dependence is required;
- N13: Experiment3 was blacked out;
- N14/N15: no source or protected-state change was required.

## CASE and Decision

**CASE 1** is selected: a complete new TA3 correspondence semantic family is
frozen — one exact motif/overlap responsibility contract, one exact
candidate-local spacing contract, and exact forward/reverse correspondence
variants — and the family is ready for fixture-local operational witness
reconstruction.

**Decision A** is selected: `NEW TA3 CORRESPONDENCE SEMANTICS COMPLETE;
RECONSTRUCT FORWARD/REVERSE OPERATIONAL WITNESSES NEXT`.

Production changes: **NO**.
