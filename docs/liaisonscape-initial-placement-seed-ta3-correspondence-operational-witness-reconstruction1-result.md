# LiaisonScape Initial-placement Seed TA-3 Correspondence Operational Witness Reconstruction1 Result

- Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-TA3-CORRESPONDENCE-OPERATIONAL-WITNESS-RECONSTRUCTION1`
- Date: 2026-09-02
- Status: Complete — six NEW operational witnesses frozen; all TA3W-MAN-5; not Production
- Preceding Design1 commit: `344e778`
- Historical recovery boundary: `TA3-REC-1` at `b961e45`
- Result: `CASE 1 / EXACT RESULT 1+2+3+4+5+6+7+8+9+10+11+12+13+14+15 / DECISION A`

> **NEW OPERATIONAL WITNESSES**
>
> The six witnesses in this record are new operational witnesses. They are not
> a recovered historical TA3 manifest, the original TA3 forward/reverse
> mappings, or an Experiment1 replay.

## Exact result and decision

The frozen Design1 contracts were materialized exactly for Lighthouse, Ashen
Crown, and K3 in both Forward and Reverse variants. All six mappings are
injective, finite/distinct, input-order deterministic, semantically rename
transportable, K3-orbit safe, and pass the exact GEO-0/GEO-3 hard gate. No
mapping was repaired after the gate.

All six cells reach `TA3W-MAN-5`. Objective Experiment Design4 is eligible as
the next bounded responsibility, with the required deduplication and alias
boundary. This record does not choose Forward over Reverse, calculate an
objective, or authorize Production.

**Decision A:** all six TA3 witnesses are MAN-5; proceed to
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-STRUCTURAL-ASSIGNMENT-OBJECTIVE-EXPERIMENT-DESIGN4`.

The evidence-gated celebration is:

> Yahoo! — both new TA3 witness families are MAN-5 and objective-design-ready.

This is a readiness statement only. It is not a quality or visual conclusion.

## Preceding Design1 and historical boundary

Design1 froze the following NEW contracts without creating a fixture mapping:

- `TA3-RESP-NEW-v1` — exact `R(V)=(m(V),o(V),s(V))` responsibility vector;
- `TA3-SPACE-NEW-v1` — exact SPACE-S1 mirrored local chord span;
- `TA3-CORR-FWD-NEW-v1` — higher responsibility to larger spacing role;
- `TA3-CORR-REV-NEW-v1` — higher responsibility to smaller spacing role;
- `TA3-CORR-OP-v1` — repeated semantic-maxima extraction with lexical ID tie;
- future provenance `TA3-WIT-NEW-OPERATIONAL` and claim `CLAIM-P0`.

`TA3-REC-1` recovered only the historical labels `TA-3-forward` and
`TA-3-reverse` plus their high-level RC-H2 diagnostic intent. It did not
recover exact operational mappings or tie semantics. The mappings in this
record are therefore new materializations. Historical labels remain context
only; historical replay is **NO**.

## Source, fixture authorities, and protected state

The authoritative inputs were reconciled before derivation:

| Fixture | Authority | Exact path/definition | Raw SHA-256 / status |
| --- | --- | --- | --- |
| Lighthouse | `e2r-liaison-scape` commit `fd563340625fd3d88dc25baedc93c4f8fe69e5e7` | `public/lighthouse-restoration-demo.en.e2r.json` committed blob `b96092b0c2b88c6c1ea41c11c1b36dccca3e9726` | `C67107BCA0A007A399F164317DA2D330F7B15F5E2609A1B5B2FCDF9F44E6C386` |
| Ashen Crown | `e2r-spec` commit `0a8d543a8af4a5ee2ae9b8b69ced319f9b61fc2c` | `examples/ashen-crown.en.e2r.json` | `A34326545FAB32A7EBDB6C26E97056B747C50F294F6574FD21B123D341FE338E` |
| K3 | committed deterministic control | complete graph on `a,b,c`, one accepted motif `a|b|c`, one overlap cluster | definition authority; no file hash |

The protected dirty Lighthouse EN/JA samples were not read as authority, edited,
staged, or normalized. TA0, TA1/W1, TA2-degree, TA2-motif, historical TA3,
Experiment1 residuals, Experiment2/3 clones, routing preview, and
`ai-knowledge` were preserved. The protected Session file was not staged.

## Witness identifiers and provenance

The identifiers were frozen before mapping:

| Variant | Witness ID | Contract | Provenance | Claim | Historical replay | Canonical / quality-neutral / policy representative |
| --- | --- | --- | --- | --- | --- | --- |
| Forward | `TA3-FWD-W1-OP-v1` | `TA3-CORR-FWD-NEW-v1` | `TA3-WIT-NEW-OPERATIONAL` | `CLAIM-P0` | No | No / No / No |
| Reverse | `TA3-REV-W1-OP-v1` | `TA3-CORR-REV-NEW-v1` | `TA3-WIT-NEW-OPERATIONAL` | `CLAIM-P0` | No | No / No / No |

No W2 witness was created.

## Responsibility derivation

For each authoritative fixture, the Entity-to-Entity topology was derived from
unique undirected pairs. Self-relations, duplicate pairs, and non-Entity
endpoints do not add topology edges. Accepted unordered triangles were
enumerated from that topology; motifs sharing Nodes were joined into derived
overlap clusters.

The direct responsibility derivation was:

```text
R(V) = (m(V), o(V), s(V))
```

where `m` is accepted motif membership, `o` is derived overlap-cluster
membership, and `s` is the number of distinct other Nodes sharing an accepted
motif with `V`. The corrected Ashen second component is therefore `1` for the
nine cluster Nodes and `0` for Ilyan. Superseded erroneous forms `(4,4,*)`
and `(2,2,*)` did not reappear.

### Derived motif and cluster inventory

| Fixture | Accepted motifs | Derived overlap cluster |
| --- | --- | --- |
| Lighthouse | `clara|maya|thomas` | `{clara,maya,thomas}` |
| Ashen Crown | `elara|garrick|kael`; `elara|selene|vhalgrim`; `darius|elara|nyra`; `darius|elara|kael`; `garrick|kael|mira`; `darius|nyra|rowan`; `darius|kael|rowan` | `{darius,elara,garrick,kael,mira,nyra,rowan,selene,vhalgrim}` |
| K3 | `a|b|c` | `{a,b,c}` |

### Corrected vectors

| Fixture | Node | `m(V)` | `o(V)` | `s(V)` | `R(V)` |
| --- | --- | ---: | ---: | ---: | --- |
| Lighthouse | clara | 1 | 1 | 2 | `(1,1,2)` |
| Lighthouse | maya | 1 | 1 | 2 | `(1,1,2)` |
| Lighthouse | thomas | 1 | 1 | 2 | `(1,1,2)` |
| Lighthouse | archive | 0 | 0 | 0 | `(0,0,0)` |
| Lighthouse | authority | 0 | 0 | 0 | `(0,0,0)` |
| Lighthouse | beacon | 0 | 0 | 0 | `(0,0,0)` |
| Lighthouse | daniel | 0 | 0 | 0 | `(0,0,0)` |
| Lighthouse | elias | 0 | 0 | 0 | `(0,0,0)` |
| Lighthouse | lighthouse | 0 | 0 | 0 | `(0,0,0)` |
| Lighthouse | sofia | 0 | 0 | 0 | `(0,0,0)` |
| Ashen Crown | elara | 4 | 1 | 6 | `(4,1,6)` |
| Ashen Crown | kael | 4 | 1 | 5 | `(4,1,5)` |
| Ashen Crown | darius | 4 | 1 | 4 | `(4,1,4)` |
| Ashen Crown | garrick | 2 | 1 | 3 | `(2,1,3)` |
| Ashen Crown | nyra | 2 | 1 | 3 | `(2,1,3)` |
| Ashen Crown | rowan | 2 | 1 | 3 | `(2,1,3)` |
| Ashen Crown | mira | 1 | 1 | 2 | `(1,1,2)` |
| Ashen Crown | selene | 1 | 1 | 2 | `(1,1,2)` |
| Ashen Crown | vhalgrim | 1 | 1 | 2 | `(1,1,2)` |
| Ashen Crown | ilyan | 0 | 0 | 0 | `(0,0,0)` |
| K3 | a | 1 | 1 | 2 | `(1,1,2)` |
| K3 | b | 1 | 1 | 2 | `(1,1,2)` |
| K3 | c | 1 | 1 | 2 | `(1,1,2)` |

## Semantic relation and maxima traces

Dominance is componentwise with at least one strict component. Equal vectors
are semantically equivalent; unequal non-dominating vectors are
`INCOMPARABLE`, not ties. The repeated maxima materializer selects lexical
Entity ID order only among simultaneous maxima.

| Fixture | Semantic classes in descending responsibility | Incomparability | Maxima selection trace |
| --- | --- | --- | --- |
| Lighthouse | `(1,1,2): clara,maya,thomas`; `(0,0,0): archive,authority,beacon,daniel,elias,lighthouse,sofia` | none | `{clara,maya,thomas}`→clara; `{maya,thomas}`→maya; `{thomas}`→thomas; then zero class archive→authority→beacon→daniel→elias→lighthouse→sofia |
| Ashen Crown | `(4,1,6): elara`; `(4,1,5): kael`; `(4,1,4): darius`; `(2,1,3): garrick,nyra,rowan`; `(1,1,2): mira,selene,vhalgrim`; `(0,0,0): ilyan` | none | elara; kael; darius; `{garrick,nyra,rowan}`→garrick→nyra→rowan; `{mira,selene,vhalgrim}`→mira→selene→vhalgrim; ilyan |
| K3 | `(1,1,2): a,b,c` | none | `{a,b,c}`→a; `{b,c}`→b; `{c}`→c |

The exact Node sequences are:

```text
Lighthouse: clara, maya, thomas, archive, authority, beacon, daniel, elias, lighthouse, sofia
Ashen:     elara, kael, darius, garrick, nyra, rowan, mira, selene, vhalgrim, ilyan
K3:        a, b, c
```

These sequences match the accepted TA2-motif sequence after direct derivation.
That literal sequence identity is an oracle comparison only and does not imply
semantic policy identity.

## SPACE-S1 candidate derivation

For `N>=2`, `m=N-1`, and exact FP1 representation:

```text
P_i = (i/m, (i/m)^2)
Q_i = (m*i, i^2)
```

The Design1 local span is `L_0=2D^+_0`,
`L_i=D^-_i+D^+_i` for interior candidates, and `L_m=2D^-_m`, where:

```text
D_i = ||Q_(i+1)-Q_i||^2 = m^2 + (2i+1)^2
```

The independent candidate-only derivation reproduced the Design1 values:

| N | Exact spacing roles, ascending | Candidate order, ascending / descending |
| --- | --- | --- |
| 10 | `P0=164, P1=172, P2=196, P3=236, P4=292, P5=364, P6=452, P7=556, P8=676, P9=740` | `P0..P9` / `P9..P0` |
| 3 | `P0=10, P1=18, P2=26` | `P0..P2` / `P2..P0` |
| 2 | `P0=4, P1=4` | one semantic class; ascending-index operational handle |

No floating-point value was authoritative.

## Forward and Reverse literal mappings

The mapping is a direct zip only after the Node and candidate sequences were
independently frozen. The table records exact normalized coordinates and exact
scaled integer coordinates. All rows carry the witness provenance and claim
from the witness registry above.

### Lighthouse (`N=10`, `m=9`)

| Node | `R(V)` | Rank | Forward | Reverse | Exact `P_i` coordinate | Exact `Q_i` |
| --- | --- | ---: | ---: | ---: | --- | --- |
| clara | `(1,1,2)` | 0 | P9 | P0 | `(9/9,81/81)` / `(0/9,0/81)` | `(81,81)` / `(0,0)` |
| maya | `(1,1,2)` | 1 | P8 | P1 | `(8/9,64/81)` / `(1/9,1/81)` | `(72,64)` / `(9,1)` |
| thomas | `(1,1,2)` | 2 | P7 | P2 | `(7/9,49/81)` / `(2/9,4/81)` | `(63,49)` / `(18,4)` |
| archive | `(0,0,0)` | 3 | P6 | P3 | `(6/9,36/81)` / `(3/9,9/81)` | `(54,36)` / `(27,9)` |
| authority | `(0,0,0)` | 4 | P5 | P4 | `(5/9,25/81)` / `(4/9,16/81)` | `(45,25)` / `(36,16)` |
| beacon | `(0,0,0)` | 5 | P4 | P5 | `(4/9,16/81)` / `(5/9,25/81)` | `(36,16)` / `(45,25)` |
| daniel | `(0,0,0)` | 6 | P3 | P6 | `(3/9,9/81)` / `(6/9,36/81)` | `(27,9)` / `(54,36)` |
| elias | `(0,0,0)` | 7 | P2 | P7 | `(2/9,4/81)` / `(7/9,49/81)` | `(18,4)` / `(63,49)` |
| lighthouse | `(0,0,0)` | 8 | P1 | P8 | `(1/9,1/81)` / `(8/9,64/81)` | `(9,1)` / `(72,64)` |
| sofia | `(0,0,0)` | 9 | P0 | P9 | `(0/9,0/81)` / `(9/9,81/81)` | `(0,0)` / `(81,81)` |

### Ashen Crown (`N=10`, `m=9`)

| Node | `R(V)` | Rank | Forward | Reverse | Exact `P_i` coordinate | Exact `Q_i` |
| --- | --- | ---: | ---: | ---: | --- | --- |
| elara | `(4,1,6)` | 0 | P9 | P0 | `(9/9,81/81)` / `(0/9,0/81)` | `(81,81)` / `(0,0)` |
| kael | `(4,1,5)` | 1 | P8 | P1 | `(8/9,64/81)` / `(1/9,1/81)` | `(72,64)` / `(9,1)` |
| darius | `(4,1,4)` | 2 | P7 | P2 | `(7/9,49/81)` / `(2/9,4/81)` | `(63,49)` / `(18,4)` |
| garrick | `(2,1,3)` | 3 | P6 | P3 | `(6/9,36/81)` / `(3/9,9/81)` | `(54,36)` / `(27,9)` |
| nyra | `(2,1,3)` | 4 | P5 | P4 | `(5/9,25/81)` / `(4/9,16/81)` | `(45,25)` / `(36,16)` |
| rowan | `(2,1,3)` | 5 | P4 | P5 | `(4/9,16/81)` / `(5/9,25/81)` | `(36,16)` / `(45,25)` |
| mira | `(1,1,2)` | 6 | P3 | P6 | `(3/9,9/81)` / `(6/9,36/81)` | `(27,9)` / `(54,36)` |
| selene | `(1,1,2)` | 7 | P2 | P7 | `(2/9,4/81)` / `(7/9,49/81)` | `(18,4)` / `(63,49)` |
| vhalgrim | `(1,1,2)` | 8 | P1 | P8 | `(1/9,1/81)` / `(8/9,64/81)` | `(9,1)` / `(72,64)` |
| ilyan | `(0,0,0)` | 9 | P0 | P9 | `(0/9,0/81)` / `(9/9,81/81)` | `(0,0)` / `(81,81)` |

### K3 (`N=3`, `m=2`)

| Node | `R(V)` | Rank | Forward | Reverse | Exact `P_i` coordinate | Exact `Q_i` |
| --- | --- | ---: | ---: | ---: | --- | --- |
| a | `(1,1,2)` | 0 | P2 | P0 | `(2/2,4/4)` / `(0/2,0/4)` | `(4,4)` / `(0,0)` |
| b | `(1,1,2)` | 1 | P1 | P1 | `(1/2,1/4)` / `(1/2,1/4)` | `(2,1)` / `(2,1)` |
| c | `(1,1,2)` | 2 | P0 | P2 | `(0/2,0/4)` / `(2/2,4/4)` | `(0,0)` / `(4,4)` |

## Forward/Reverse relation and reversal audit

For every tested Node in every `N>=3` fixture:

```text
index_forward(V) = m - index_reverse(V)
```

The literal index reversal is therefore **YES** for Lighthouse and Ashen
Crown. It is also the expected orientation relation for K3 (`N=3`), where
`a:P2,b:P1,c:P0` versus `a:P0,b:P1,c:P2`. Reversal is a consequence of the
strict SPACE-S1 order, not the semantic definition of either variant.

Forward and Reverse remain semantically distinct because their only differing
contract dimension is larger-versus-smaller candidate-spacing orientation.

## Input-order determinism and semantic rename transport

Each fixture was derived in authority order, with Entity order reversed,
Relation order reversed, and both reversed. The resulting motifs, overlap
clusters, responsibility vectors, semantic relations, maxima traces, Node
sequence, spacing roles, and both mappings were unchanged.

| Fixture | Entity reorder | Relation reorder | Both reorder | Forward mapping | Reverse mapping | Result |
| --- | --- | --- | --- | --- | --- | --- |
| Lighthouse | PASS | PASS | PASS | unchanged | unchanged | PASS |
| Ashen Crown | PASS | PASS | PASS | unchanged | unchanged | PASS |
| K3 | PASS | PASS | PASS | unchanged | unchanged | PASS |

A topology-preserving rename control was also run for all three fixtures. Motif
count, overlap-cluster count, vector multiset, dominance/equivalence relation,
and semantic orbit transported correctly. Candidate spacing remained
Node-name independent.

| Fixture | Semantic rename transport | Literal rename stability | Result |
| --- | --- | --- | --- |
| Lighthouse | PASS | NOT CLAIMED | PASS |
| Ashen Crown | PASS | NOT CLAIMED | PASS |
| K3 | PASS | NOT CLAIMED | PASS |

Lexical identity never entered semantic responsibility. Literal rename
stability remains unclaimed because operational lexical selection can change.

## K3 orbit boundary

K3 retained `R(a)=R(b)=R(c)=(1,1,2)` and one semantic Node orbit. Forward and
Reverse have different literal candidate assignments, but neither grants
named semantic privilege. This is an operational orientation difference only.

## Exact hard gate

The mandatory order was respected:

```text
vectors freeze -> Node sequence freeze -> spacing freeze -> mapping freeze -> hard gate
```

The gate used exact integer/rational arithmetic and no epsilon. It checks:

- injective Node-to-candidate assignment;
- finite and distinct candidate points;
- GEO-0: every accepted motif triangle is non-degenerate;
- GEO-3: distinct motif-neighbor rays at a shared Node are not the same
  positive directed ray.

| Fixture | Variant | Mapping frozen first? | Injective | Finite/distinct | GEO-0 | GEO-3 | Eligible |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| Lighthouse | Forward | YES | YES | YES | 0 violations | 0 violations | YES |
| Lighthouse | Reverse | YES | YES | YES | 0 violations | 0 violations | YES |
| Ashen Crown | Forward | YES | YES | YES | 0 violations | 0 violations | YES |
| Ashen Crown | Reverse | YES | YES | YES | 0 violations | 0 violations | YES |
| K3 | Forward | YES | YES | YES | 0 violations | 0 violations | YES |
| K3 | Reverse | YES | YES | YES | 0 violations | 0 violations | YES |

No hard-gate result caused remapping, swapping, another reversal, lexical
change, endpoint-rule change, or witness repair.

## Existing-witness identity audit

After mapping and hard-gate freeze, exact literal Node-to-FP1 identity was
compared with TA0/REP-0, TA1/W1, TA2-degree, and TA2-motif. Only `IDENTICAL`
and `DIFFERENT` are reported.

| Fixture | TA3 variant | vs TA0/REP-0 | vs TA1/W1 | vs TA2-degree | vs TA2-motif |
| --- | --- | --- | --- | --- | --- |
| Lighthouse | Forward | DIFFERENT | DIFFERENT | DIFFERENT | DIFFERENT |
| Lighthouse | Reverse | DIFFERENT | DIFFERENT | DIFFERENT | IDENTICAL |
| Ashen Crown | Forward | DIFFERENT | DIFFERENT | DIFFERENT | DIFFERENT |
| Ashen Crown | Reverse | DIFFERENT | DIFFERENT | DIFFERENT | IDENTICAL |
| K3 | Forward | DIFFERENT | DIFFERENT | DIFFERENT | DIFFERENT |
| K3 | Reverse | IDENTICAL | IDENTICAL | IDENTICAL | IDENTICAL |

Reverse is literally identical to TA2-motif on all current fixtures. The
correct boundary is:

```text
SEMANTICALLY DISTINCT
LITERALLY IDENTICAL
ON CURRENT FIXTURE
```

The Reverse identity does not imply TA3/TA2 semantic policy identity: the
family architecture, correspondence contract, witness IDs, and provenance
remain distinct. Forward adds a new literal mapping class on all three current
fixtures.

## TA3W-MAN readiness and Design4 eligibility

`TA3W-MAN-5` requires fixture authority, responsibility and spacing derivation,
frozen operational sequences, literal mapping and determinism, and the exact
hard gate with provenance, claim, and orbit boundary.

| Fixture | Variant | Witness ID | Provenance | Claim | TA3W-MAN | Eligible |
| --- | --- | --- | --- | --- | --- | --- |
| Lighthouse | Forward | `TA3-FWD-W1-OP-v1` | `TA3-WIT-NEW-OPERATIONAL` | `CLAIM-P0` | TA3W-MAN-5 | YES |
| Lighthouse | Reverse | `TA3-REV-W1-OP-v1` | `TA3-WIT-NEW-OPERATIONAL` | `CLAIM-P0` | TA3W-MAN-5 | YES |
| Ashen Crown | Forward | `TA3-FWD-W1-OP-v1` | `TA3-WIT-NEW-OPERATIONAL` | `CLAIM-P0` | TA3W-MAN-5 | YES |
| Ashen Crown | Reverse | `TA3-REV-W1-OP-v1` | `TA3-WIT-NEW-OPERATIONAL` | `CLAIM-P0` | TA3W-MAN-5 | YES |
| K3 | Forward | `TA3-FWD-W1-OP-v1` | `TA3-WIT-NEW-OPERATIONAL` | `CLAIM-P0` | TA3W-MAN-5 | YES |
| K3 | Reverse | `TA3-REV-W1-OP-v1` | `TA3-WIT-NEW-OPERATIONAL` | `CLAIM-P0` | TA3W-MAN-5 | YES |

Objective Experiment Design4 eligibility: **YES**. Design4 must recompute
literal geometry classes, deduplicate the Reverse/TA2-motif literal identity,
preserve semantic aliases, determine whether Forward adds new geometry, freeze
objective cells before execution, and retain the `INF-W0/INF-W1` ceiling. This
record does not design or execute Design4.

## Objective blackout and Production boundary

No normalized altitude, FAN-P1, PP-M3, structural profile, Experiment3
relation, crossing, routing, labels, settling, browser output, visual result,
or Production quality inference was calculated or used. The hard gate is a
semantic admissibility gate only. No source, sample, UI, TA0, TA1/W1,
TA2-degree, TA2-motif, historical TA3, or `ai-knowledge` change was made.

## Central questions

| Question | Answer |
| --- | --- |
| Q1. Design1 contracts unchanged? | Yes. |
| Q2. Historical replay? | No. |
| Q3. Witness IDs? | `TA3-FWD-W1-OP-v1` and `TA3-REV-W1-OP-v1`. |
| Q4-Q5. Provenance and claim? | `TA3-WIT-NEW-OPERATIONAL` / `CLAIM-P0`. |
| Q6. Fixture authorities exact? | Yes, with committed Lighthouse blob, accepted Ashen commit, and K3 definition. |
| Q7. Vectors match corrected oracle? | Yes, by direct derivation. |
| Q8. Old Ashen bug? | No; no `(4,4,*)` or `(2,2,*)` forms. |
| Q9. Node sequences? | Lighthouse, Ashen, and K3 sequences listed above. |
| Q10-Q11. TA2-motif match and identity? | Sequence matches; semantic identity is not inferred. |
| Q12-Q13. SPACE-S1 values? | Exact values match Design1 for N=10 and N=3. |
| Q14-Q15. Candidate orders? | Forward descending; Reverse ascending. |
| Q16-Q17. Literal mappings? | Exact tables above; direct zip only. |
| Q18-Q19. Reversal? | YES for every tested `N>=3` Node; consequence only, not definition. |
| Q20-Q22. Determinism and rename? | Input-order PASS; semantic rename PASS; literal rename stability not claimed. |
| Q23-Q25. K3? | One orbit; literals differ; no semantic privilege. |
| Q26-Q27. Gate and repair? | All six PASS; no remapping or repair. |
| Q28. Objective calculated? | No. |
| Q29-Q31. Reverse identity? | Reverse is literally identical to TA2-motif on Lighthouse, Ashen, and K3; semantic identity is not implied. |
| Q32-Q33. New geometry and other identities? | Forward adds a literal class on all three; identity table above is complete. |
| Q34-Q36. Readiness and Design4? | All six TA3W-MAN-5; Design4 eligible. |
| Q37-Q38. Winner or Production? | Neither Forward nor Reverse is selected as better; Production assignment is not selected. |
| Q39-Q40. Next and auto-start? | Design4 follows; it was not auto-started. |

## Hypotheses and falsification

H1–H15 are supported: the NEW contracts materialize without drift; corrected
vectors and strict SPACE-S1 roles reproduce; the shared maxima sequence matches
the post-derivation TA2-motif oracle; literal identity does not collapse
semantic identity; Forward and Reverse implement their exact orientations;
reversal follows algebraically; determinism and semantic rename transport hold;
K3 remains one orbit; all six witnesses pass the hard gate without repair; and
no objective or Production inference follows.

N1–N15 were not triggered:

- N1–N3: Design1 contracts reproduced and corrected vectors contain no old
  encoding values;
- N4–N5: input order did not change output and SPACE-S1 values matched exactly;
- N6–N8: mapping occurred after semantic freeze, Reverse is ascending, and
  literal reversal holds;
- N9–N11: lexical identity is operational only, rename transport passes, and
  K3 has no named privilege;
- N12–N13: the hard gate did not remap anything and no objective was used;
- N14–N15: no Production or protected-state change was necessary.

## CASE and closure

**CASE 1** is selected: all six NEW TA3 Forward/Reverse fixture witnesses are
exactly materialized, input-order deterministic, semantic-rename safe,
K3-orbit safe, hard-valid, provenance-complete, and TA3W-MAN-5. Design4 is
eligible.

**Decision A** is selected: all six TA3 witnesses are MAN-5; safe deduplicated
objective integration is next.

Production changes: **NO**.
