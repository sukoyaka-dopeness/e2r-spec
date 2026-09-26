# LiaisonScape Initial-placement Seed TA-1 Operational Witness Reconstruction1 Result

## Checkpoint

`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-TA1-OPERATIONAL-WITNESS-RECONSTRUCTION1`

Date: 2026-09-02

Status: Complete with one fixture-provenance blocker

Result: `CASE 7 / EXACT RESULT 1+2+4+5+6+7+8+9+10+11+13 / DECISION G`

Decision G selects the smallest remaining issue-specific checkpoint:

`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-LIGHTHOUSE-FIXTURE-PROVENANCE-RECONCILIATION1`

No second witness, production change, objective experiment, or Objective
Experiment Design2 was created here.

## Exact result

The TA-1/W1 operational rule was fixed before the final reconstruction pass.
Ashen Crown and K3 reached complete `W1-MAN-5` manifests. Lighthouse has a
complete current-blob mapping and exact hard-gate evidence, but its current
committed blob hash does not reconcile with the hash recorded by the preceding
research documents. Lighthouse is therefore held at `W1-MAN-4` and is not
declared ready for Objective Design2.

W1 remains `WIT-NEW-OPERATIONAL`, fixture-local, deterministic,
objective-independent, non-canonical, non-historical, and `CLAIM-P0` only.
TA-1 remains `WIT-CLASS-ONLY / MAN-2` at policy level. TA-2 and TA-3 remain
`WIT-EXCLUDED / MISSING-SEMANTICS`.

## Start state and authority

| Item | Reconciled state |
|---|---|
| e2r-spec HEAD | `0a8d543a8af4a5ee2ae9b8b69ced319f9b61fc2c` |
| e2r-spec branch/upstream | `main` / `origin/main` |
| e2r-spec initial dirty state | protected `sessions/E2R-Session-0052.md` only |
| preceding Witness Design1 | `0a8d543` present |
| LiaisonScape HEAD | `fd563340625fd3d88dc25baedc93c4f8fe69e5e7` |
| LiaisonScape branch/upstream | `main` / `origin/main` |
| Initial Placement source drift | NO; accepted baseline reconciles |
| LiaisonScape protected state | dirty EN/JA Lighthouse samples preserved and not read as authority |
| routing preview | preserved and not used |
| residual disposable shells | preserved and not used as authority |
| ai-knowledge | preserved and not modified |

The accepted LiaisonScape source was used only for baseline reconciliation.
No current Production behavior was used to fill TA-1 semantics.

## Objective blackout

The mapping was generated from the predeclared rule and topology/fixture data
only. No alternate mapping was generated or compared for selection.

| Item | Calculated/inspected |
|---|---|
| normalized altitude | NO |
| FAN-P1 | NO |
| structural profile | NO |
| routing | NO |
| labels | NO |
| visual state | NO |
| witness variants compared | NO |
| objective-informed selection | NO |

The exact hard gate below is an admissibility check, not a preference result.

## W1 provenance and rule

| Field | Frozen value |
|---|---|
| Witness ID | `TA-1/W1` |
| Rule version | `TA1-W1-OP-v1` |
| Provenance | `WIT-NEW-OPERATIONAL` |
| Claim scope | `CLAIM-P0` |
| TA-1 policy state | `WIT-CLASS-ONLY` |
| Rule meaning | new fixture-local operational freezer only |
| Historical claim | NO |
| Strong neutrality claim | NO |
| Quality claim | NO |
| Canonical-policy claim | NO |
| Rename-stable literal mapping claim | NO |

The predeclared W1 procedure is:

1. derive the accepted topology signature for every Node;
2. compare its fields in the exact order below, ascending;
3. use the exact Entity ID lexical rule only inside equal signatures;
4. construct the FP1 candidate sequence in ascending index order; and
5. direct-zip the ordered Nodes to `P0 ... P(N-1)`.

This is an operational reproducibility convention. It is not a historical
TA-1 class order, structural priority, quality order, or Production policy.

### Exact signature contract

| Position | Field | Exact definition | Type | W1 encoding/order |
|---:|---|---|---|---|
| 1 | `distinctNeighborDegree` | count of unique non-self Entity neighbors in the accepted undirected topology | integer | ascending numeric |
| 2 | `neighborDegreeMultiset` | degree of each distinct neighbor | integer sequence | numeric sort, then lexicographic ascending; shorter prefix first |
| 3 | `motifMembershipCount` | count of accepted unordered motifs containing the Node | integer | ascending numeric |
| 4 | `overlapClusterMembershipCount` | count of derived motif-overlap clusters containing the Node | integer | ascending numeric |
| 5 | `sharedMotifNeighborCount` | count of distinct other Nodes sharing an accepted motif with the Node | integer | ascending numeric |
| 6 | `motifNeighborDegreeMultiset` | degree of each distinct shared motif neighbor | integer sequence | numeric sort, then lexicographic ascending; shorter prefix first |
| 7 | `boundaryContextIncidentCount` | unique Entity neighbors reached by an accepted adjacency not belonging to an accepted motif edge | integer | ascending numeric |
| 8 | `componentMembership` | connected-component membership under the accepted topology | fixture-local equality token | one shared token for each connected fixture; no invented ordinal |

The exact W1 tuple is therefore:

```text
(distinctNeighborDegree,
 neighborDegreeMultiset,
 motifMembershipCount,
 overlapClusterMembershipCount,
 sharedMotifNeighborCount,
 motifNeighborDegreeMultiset,
 boundaryContextIncidentCount,
 componentMembership)
```

All three fixtures are connected. The component value shown in the tables is
the non-ordinal representation token `SINGLE_CONNECTED_COMPONENT`; it has no
ordering effect within any of these fixtures.

Entity and Relation array order, object insertion order, Map iteration order,
filesystem order, labels, locale, descriptions, stored coordinates, and
routes are not W1 inputs. Equal tuples use Unicode/code-point lexical Entity
ID comparison, ascending, with the shorter string first when one is a prefix.
The IDs in the supported fixtures are ASCII, so this is also the observed
repository/runtime ordering for this record and does not use locale collation.

### Candidate family and direct zip

For `N` Nodes, `m=N-1` and:

```text
P_i = (i/m, (i/m)^2), i = 0 ... m
```

Coordinates are retained as exact rationals. Candidate order is `P0, P1,
... Pm`; candidate index is an operational handle only. No swap, reverse,
optimization, or second candidate direction was used.

## Fixture provenance

| Fixture | Authority repo | Commit/blob or definition | Exact path/definition | SHA-256 | Connected? | Nodes | Entity-Entity topology | Status |
|---|---|---|---|---|---|---:|---:|---|
| Lighthouse | `e2r-liaison-scape` | `fd563340625fd3d88dc25baedc93c4f8fe69e5e7` | `public/lighthouse-restoration-demo.en.e2r.json` | current blob `C67107BCA0A007A399F164317DA2D330F7B15F5E2609A1B5B2FCDF9F44E6C386`; preceding record `303823E07613D338E57E62C3F60EBEADC2BB853815D16007A9F4573242F6325C` | YES | 10 | 11 unique undirected adjacencies / 28 total Relations | HASH-BLOCKER |
| Ashen Crown | `e2r-spec` | `0a8d543a8af4a5ee2ae9b8b69ced319f9b61fc2c` | `examples/ashen-crown.en.e2r.json` | `A34326545FAB32A7EBDB6C26E97056B747C50F294F6574FD21B123D341FE338E` | YES | 10 | 17 unique undirected adjacencies / 57 total Relations | RECONCILED |
| K3 | committed preceding experiment/design evidence | `71d818e` result and `525a926` design evidence | deterministic complete-graph-three control: Nodes `a`, `b`, `c`; adjacencies `{a,b}`, `{a,c}`, `{b,c}`; motif `{a,b,c}` | no file hash | YES | 3 | 3 unique undirected adjacencies | RECONCILED-AS-DEFINITION |

The current Lighthouse hash was computed from the exact committed Git blob,
not either dirty working-copy sample. The preceding record does not specify a
different canonicalization for its `3038...` value, and no committed blob at
the accepted path/revision produced that value. The mismatch is recorded, not
repaired by reading or changing the protected sample.

The K3 control has one true Node orbit. Relation direction and multiplicity do
not enter its accepted undirected topology signature; the frozen definition
contains exactly the three unique adjacencies above and one accepted motif.

### Accepted motif inventory

| Fixture | Motif inventory | Cluster inventory |
|---|---|---|
| Lighthouse | `clara|maya|thomas` | one cluster: `clara, maya, thomas` |
| Ashen Crown | `elara|garrick|kael`; `elara|selene|vhalgrim`; `darius|elara|nyra`; `darius|elara|kael`; `garrick|kael|mira`; `darius|nyra|rowan`; `darius|kael|rowan` | one cluster: `darius, elara, garrick, kael, mira, nyra, rowan, selene, vhalgrim` |
| K3 | `a|b|c` | one cluster: `a, b, c` |

Duplicate undirected pairs and self-relations are excluded from the topology
degree and motif-edge inventory, as established by the preceding accepted
topology evidence. Event endpoints are not Entity-to-Entity adjacency.

## Exact Node signatures

Signature notation is `(d; neighborDegrees; motifCount; overlapCount;
sharedMotifNeighbors; motifNeighborDegrees; boundaryContext; component)`.

### Lighthouse

| Node ID | d | neighbor degrees | motif count | overlap count | shared motif neighbors | motif-neighbor degrees | boundary/context | component | W1 signature |
|---|---:|---|---:|---:|---:|---|---:|---|---|
| `lighthouse` | 3 | `[1,2,5]` | 0 | 0 | 0 | `[]` | 3 | `SINGLE_CONNECTED_COMPONENT` | `(3;[1,2,5];0;0;0;[];3;SINGLE_CONNECTED_COMPONENT)` |
| `clara` | 5 | `[1,2,2,3,3]` | 1 | 1 | 2 | `[2,3]` | 3 | `SINGLE_CONNECTED_COMPONENT` | `(5;[1,2,2,3,3];1;1;2;[2,3];3;SINGLE_CONNECTED_COMPONENT)` |
| `elias` | 2 | `[2,5]` | 0 | 0 | 0 | `[]` | 2 | `SINGLE_CONNECTED_COMPONENT` | `(2;[2,5];0;0;0;[];2;SINGLE_CONNECTED_COMPONENT)` |
| `maya` | 3 | `[2,2,5]` | 1 | 1 | 2 | `[2,5]` | 1 | `SINGLE_CONNECTED_COMPONENT` | `(3;[2,2,5];1;1;2;[2,5];1;SINGLE_CONNECTED_COMPONENT)` |
| `thomas` | 2 | `[3,5]` | 1 | 1 | 2 | `[3,5]` | 0 | `SINGLE_CONNECTED_COMPONENT` | `(2;[3,5];1;1;2;[3,5];0;SINGLE_CONNECTED_COMPONENT)` |
| `sofia` | 2 | `[1,2]` | 0 | 0 | 0 | `[]` | 2 | `SINGLE_CONNECTED_COMPONENT` | `(2;[1,2];0;0;0;[];2;SINGLE_CONNECTED_COMPONENT)` |
| `daniel` | 1 | `[5]` | 0 | 0 | 0 | `[]` | 1 | `SINGLE_CONNECTED_COMPONENT` | `(1;[5];0;0;0;[];1;SINGLE_CONNECTED_COMPONENT)` |
| `beacon` | 2 | `[3,3]` | 0 | 0 | 0 | `[]` | 2 | `SINGLE_CONNECTED_COMPONENT` | `(2;[3,3];0;0;0;[];2;SINGLE_CONNECTED_COMPONENT)` |
| `archive` | 1 | `[2]` | 0 | 0 | 0 | `[]` | 1 | `SINGLE_CONNECTED_COMPONENT` | `(1;[2];0;0;0;[];1;SINGLE_CONNECTED_COMPONENT)` |
| `authority` | 1 | `[3]` | 0 | 0 | 0 | `[]` | 1 | `SINGLE_CONNECTED_COMPONENT` | `(1;[3];0;0;0;[];1;SINGLE_CONNECTED_COMPONENT)` |

### Ashen Crown

| Node ID | d | neighbor degrees | motif count | overlap count | shared motif neighbors | motif-neighbor degrees | boundary/context | component | W1 signature |
|---|---:|---|---:|---:|---:|---|---:|---|---|
| `elara` | 6 | `[2,3,3,3,4,5]` | 4 | 1 | 6 | `[2,3,3,3,4,5]` | 0 | `SINGLE_CONNECTED_COMPONENT` | `(6;[2,3,3,3,4,5];4;1;6;[2,3,3,3,4,5];0;SINGLE_CONNECTED_COMPONENT)` |
| `garrick` | 3 | `[3,5,6]` | 2 | 1 | 3 | `[3,5,6]` | 0 | `SINGLE_CONNECTED_COMPONENT` | `(3;[3,5,6];2;1;3;[3,5,6];0;SINGLE_CONNECTED_COMPONENT)` |
| `selene` | 3 | `[2,2,6]` | 1 | 1 | 2 | `[2,6]` | 1 | `SINGLE_CONNECTED_COMPONENT` | `(3;[2,2,6];1;1;2;[2,6];1;SINGLE_CONNECTED_COMPONENT)` |
| `rowan` | 3 | `[3,4,5]` | 2 | 1 | 3 | `[3,4,5]` | 0 | `SINGLE_CONNECTED_COMPONENT` | `(3;[3,4,5];2;1;3;[3,4,5];0;SINGLE_CONNECTED_COMPONENT)` |
| `mira` | 3 | `[2,3,5]` | 1 | 1 | 2 | `[3,5]` | 1 | `SINGLE_CONNECTED_COMPONENT` | `(3;[2,3,5];1;1;2;[3,5];1;SINGLE_CONNECTED_COMPONENT)` |
| `darius` | 4 | `[3,3,5,6]` | 4 | 1 | 4 | `[3,3,5,6]` | 0 | `SINGLE_CONNECTED_COMPONENT` | `(4;[3,3,5,6];4;1;4;[3,3,5,6];0;SINGLE_CONNECTED_COMPONENT)` |
| `ilyan` | 2 | `[3,3]` | 0 | 0 | 0 | `[]` | 2 | `SINGLE_CONNECTED_COMPONENT` | `(2;[3,3];0;0;0;[];2;SINGLE_CONNECTED_COMPONENT)` |
| `nyra` | 3 | `[3,4,6]` | 2 | 1 | 3 | `[3,4,6]` | 0 | `SINGLE_CONNECTED_COMPONENT` | `(3;[3,4,6];2;1;3;[3,4,6];0;SINGLE_CONNECTED_COMPONENT)` |
| `kael` | 5 | `[3,3,3,4,6]` | 4 | 1 | 5 | `[3,3,3,4,6]` | 0 | `SINGLE_CONNECTED_COMPONENT` | `(5;[3,3,3,4,6];4;1;5;[3,3,3,4,6];0;SINGLE_CONNECTED_COMPONENT)` |
| `vhalgrim` | 2 | `[3,6]` | 1 | 1 | 2 | `[3,6]` | 0 | `SINGLE_CONNECTED_COMPONENT` | `(2;[3,6];1;1;2;[3,6];0;SINGLE_CONNECTED_COMPONENT)` |

### K3

| Node ID | d | neighbor degrees | motif count | overlap count | shared motif neighbors | motif-neighbor degrees | boundary/context | component | W1 signature |
|---|---:|---|---:|---:|---:|---|---:|---|---|
| `a` | 2 | `[2,2]` | 1 | 1 | 2 | `[2,2]` | 0 | `SINGLE_CONNECTED_COMPONENT` | `(2;[2,2];1;1;2;[2,2];0;SINGLE_CONNECTED_COMPONENT)` |
| `b` | 2 | `[2,2]` | 1 | 1 | 2 | `[2,2]` | 0 | `SINGLE_CONNECTED_COMPONENT` | `(2;[2,2];1;1;2;[2,2];0;SINGLE_CONNECTED_COMPONENT)` |
| `c` | 2 | `[2,2]` | 1 | 1 | 2 | `[2,2]` | 0 | `SINGLE_CONNECTED_COMPONENT` | `(2;[2,2];1;1;2;[2,2];0;SINGLE_CONNECTED_COMPONENT)` |

## Exact W1 ordered-node tables

The rank is operational only.

### Lighthouse

| Rank | Node ID | Exact signature | Tie? | Tie-break evidence |
|---:|---|---|---|---|
| 0 | `archive` | `(1;[2];0;0;0;[];1;SINGLE_CONNECTED_COMPONENT)` | NO | signature differs from next rank |
| 1 | `authority` | `(1;[3];0;0;0;[];1;SINGLE_CONNECTED_COMPONENT)` | NO | signature differs |
| 2 | `daniel` | `(1;[5];0;0;0;[];1;SINGLE_CONNECTED_COMPONENT)` | NO | signature differs |
| 3 | `sofia` | `(2;[1,2];0;0;0;[];2;SINGLE_CONNECTED_COMPONENT)` | NO | signature differs |
| 4 | `elias` | `(2;[2,5];0;0;0;[];2;SINGLE_CONNECTED_COMPONENT)` | NO | signature differs |
| 5 | `beacon` | `(2;[3,3];0;0;0;[];2;SINGLE_CONNECTED_COMPONENT)` | NO | signature differs |
| 6 | `thomas` | `(2;[3,5];1;1;2;[3,5];0;SINGLE_CONNECTED_COMPONENT)` | NO | signature differs |
| 7 | `lighthouse` | `(3;[1,2,5];0;0;0;[];3;SINGLE_CONNECTED_COMPONENT)` | NO | signature differs |
| 8 | `maya` | `(3;[2,2,5];1;1;2;[2,5];1;SINGLE_CONNECTED_COMPONENT)` | NO | signature differs |
| 9 | `clara` | `(5;[1,2,2,3,3];1;1;2;[2,3];3;SINGLE_CONNECTED_COMPONENT)` | NO | final signature |

### Ashen Crown

| Rank | Node ID | Exact signature | Tie? | Tie-break evidence |
|---:|---|---|---|---|
| 0 | `ilyan` | `(2;[3,3];0;0;0;[];2;SINGLE_CONNECTED_COMPONENT)` | NO | signature differs |
| 1 | `vhalgrim` | `(2;[3,6];1;1;2;[3,6];0;SINGLE_CONNECTED_COMPONENT)` | NO | signature differs |
| 2 | `selene` | `(3;[2,2,6];1;1;2;[2,6];1;SINGLE_CONNECTED_COMPONENT)` | NO | signature differs |
| 3 | `mira` | `(3;[2,3,5];1;1;2;[3,5];1;SINGLE_CONNECTED_COMPONENT)` | NO | signature differs |
| 4 | `rowan` | `(3;[3,4,5];2;1;3;[3,4,5];0;SINGLE_CONNECTED_COMPONENT)` | NO | signature differs |
| 5 | `nyra` | `(3;[3,4,6];2;1;3;[3,4,6];0;SINGLE_CONNECTED_COMPONENT)` | NO | signature differs |
| 6 | `garrick` | `(3;[3,5,6];2;1;3;[3,5,6];0;SINGLE_CONNECTED_COMPONENT)` | NO | signature differs |
| 7 | `darius` | `(4;[3,3,5,6];4;1;4;[3,3,5,6];0;SINGLE_CONNECTED_COMPONENT)` | NO | signature differs |
| 8 | `kael` | `(5;[3,3,3,4,6];4;1;5;[3,3,3,4,6];0;SINGLE_CONNECTED_COMPONENT)` | NO | signature differs |
| 9 | `elara` | `(6;[2,3,3,3,4,5];4;1;6;[2,3,3,3,4,5];0;SINGLE_CONNECTED_COMPONENT)` | NO | final signature |

### K3

| Rank | Node ID | Exact signature | Tie? | Tie-break evidence |
|---:|---|---|---|---|
| 0 | `a` | `(2;[2,2];1;1;2;[2,2];0;SINGLE_CONNECTED_COMPONENT)` | YES | equal signature; lexical ID ascending |
| 1 | `b` | `(2;[2,2];1;1;2;[2,2];0;SINGLE_CONNECTED_COMPONENT)` | YES | equal signature; lexical ID ascending |
| 2 | `c` | `(2;[2,2];1;1;2;[2,2];0;SINGLE_CONNECTED_COMPONENT)` | YES | equal signature; lexical ID ascending |

## Exact W1 mapping tables

Every row is `WIT-NEW-OPERATIONAL`. The coordinates are exact FP1 rationals,
not decimal-first values.

### Lighthouse current committed-blob materialization

| Node ID | W1 rank | FP1 index | Exact FP1 coordinate | Witness provenance |
|---|---:|---:|---|---|
| `archive` | 0 | 0 | `(0/9, 0/81)` | `WIT-NEW-OPERATIONAL` |
| `authority` | 1 | 1 | `(1/9, 1/81)` | `WIT-NEW-OPERATIONAL` |
| `daniel` | 2 | 2 | `(2/9, 4/81)` | `WIT-NEW-OPERATIONAL` |
| `sofia` | 3 | 3 | `(3/9, 9/81)` | `WIT-NEW-OPERATIONAL` |
| `elias` | 4 | 4 | `(4/9, 16/81)` | `WIT-NEW-OPERATIONAL` |
| `beacon` | 5 | 5 | `(5/9, 25/81)` | `WIT-NEW-OPERATIONAL` |
| `thomas` | 6 | 6 | `(6/9, 36/81)` | `WIT-NEW-OPERATIONAL` |
| `lighthouse` | 7 | 7 | `(7/9, 49/81)` | `WIT-NEW-OPERATIONAL` |
| `maya` | 8 | 8 | `(8/9, 64/81)` | `WIT-NEW-OPERATIONAL` |
| `clara` | 9 | 9 | `(9/9, 81/81)` | `WIT-NEW-OPERATIONAL` |

### Ashen Crown

| Node ID | W1 rank | FP1 index | Exact FP1 coordinate | Witness provenance |
|---|---:|---:|---|---|
| `ilyan` | 0 | 0 | `(0/9, 0/81)` | `WIT-NEW-OPERATIONAL` |
| `vhalgrim` | 1 | 1 | `(1/9, 1/81)` | `WIT-NEW-OPERATIONAL` |
| `selene` | 2 | 2 | `(2/9, 4/81)` | `WIT-NEW-OPERATIONAL` |
| `mira` | 3 | 3 | `(3/9, 9/81)` | `WIT-NEW-OPERATIONAL` |
| `rowan` | 4 | 4 | `(4/9, 16/81)` | `WIT-NEW-OPERATIONAL` |
| `nyra` | 5 | 5 | `(5/9, 25/81)` | `WIT-NEW-OPERATIONAL` |
| `garrick` | 6 | 6 | `(6/9, 36/81)` | `WIT-NEW-OPERATIONAL` |
| `darius` | 7 | 7 | `(7/9, 49/81)` | `WIT-NEW-OPERATIONAL` |
| `kael` | 8 | 8 | `(8/9, 64/81)` | `WIT-NEW-OPERATIONAL` |
| `elara` | 9 | 9 | `(9/9, 81/81)` | `WIT-NEW-OPERATIONAL` |

### K3

| Node ID | W1 rank | FP1 index | Exact FP1 coordinate | Witness provenance |
|---|---:|---:|---|---|
| `a` | 0 | 0 | `(0/2, 0/4)` | `WIT-NEW-OPERATIONAL` |
| `b` | 1 | 1 | `(1/2, 1/4)` | `WIT-NEW-OPERATIONAL` |
| `c` | 2 | 2 | `(2/2, 4/4)` | `WIT-NEW-OPERATIONAL` |

## Hard gate

The gate was evaluated with exact integer/rational arithmetic and no epsilon:
injectivity, finite/distinct candidates, GEO-0, and GEO-3 only.

| Fixture | Injective | Finite/distinct | GEO-0 | GEO-3 | Eligible | Exactness |
|---|---|---|---:|---:|---|---|
| Lighthouse current committed blob | YES | YES | 0 violations | 0 violations | YES | exact rational |
| Ashen Crown | YES | YES | 0 violations | 0 violations | YES | exact rational |
| K3 | YES | YES | 0 violations | 0 violations | YES | exact rational |

Hard validity does not resolve the Lighthouse provenance hash mismatch. No W1
mapping was repaired after the gate.

## Input-order determinism

The bounded check reversed the in-memory Entity and Relation arrays and
recomputed the same predeclared rule. K3 was checked with its equivalent
fixture representation as well.

| Fixture | Original-order manifest | Reordered-input manifest | Same mapping? | Result |
|---|---|---|---|---|
| Lighthouse | exact W1 table above | reversed Entity/Relation input | YES | PASS |
| Ashen Crown | exact W1 table above | reversed Entity/Relation input | YES | PASS |
| K3 | exact W1 table above | equivalent input representation | YES | PASS |

No hidden array, object, Map, filesystem, locale, or UI order was used.

## K3 orbit boundary

All K3 Nodes remain one semantic orbit. `a -> P0`, `b -> P1`, and `c -> P2`
are literal operational materialization only. The lexical tie does not create
named semantic privilege, candidate quality, or an individual K3 role. The
K3 mapping is `CLAIM-P0` only.

## Historical Experiment1 boundary

| Witness | Literal mapping | Provenance |
|---|---|---|
| historical TA-1 Experiment1 | UNKNOWN / unrecovered | no committed literal manifest found |
| new TA-1/W1 | KNOWN for the current supported fixture manifests | `WIT-NEW-OPERATIONAL` |

The new mapping is not merged with, or claimed to reproduce, the historical
Experiment1 mapping.

## Manifest readiness

| Fixture | W1-MAN level | Provenance complete? | Mapping frozen? | Hard gate complete? | Ready for Objective Design2? |
|---|---|---|---|---|---|
| Lighthouse | `W1-MAN-4` | NO; prior hash unreconciled | YES for current blob, held from final manifest | YES | NO |
| Ashen Crown | `W1-MAN-5` | YES | YES | YES | YES |
| K3 | `W1-MAN-5` | YES as deterministic definition provenance | YES | YES | YES |

`TA-1 semantic policy MAN-2` and `TA-1/W1 operational witness W1-MAN-5`
describe different readiness layers. The semantic policy remains class-only.

## Claim boundary

| Claim | Allowed? | Reason |
|---|---|---|
| W1 is a historical TA-1 witness | NO | historical literal is unrecovered |
| W1 is quality-neutral | NO | FP1 roles are non-equivalent; procedural independence is not strong neutrality |
| W1 is a canonical TA-1 mapping | NO | it is a new operational convention |
| W1 is a fixture-local operational witness | YES, for supported frozen fixture data | exact rule and literal mapping are recorded |
| W1 supports `CLAIM-P0` | YES for completed fixture manifests | scope is one literal fixture/policy witness |
| W1 supports `CLAIM-P1` | NO | no rename/isomorphism transport claim is made |
| W1 supports `CLAIM-P2` | NO | no policy-level quality claim |
| candidate index is quality rank | NO | index is an operational handle only |
| K3 literal mapping creates semantic privilege | NO | the orbit remains one semantic class |
| future objective may evaluate W1 | YES for Ashen and K3; Lighthouse after provenance reconciliation | hard gate precedes future preference work |

## Central questions Q1-Q33

| Q | Answer |
|---|---|
| Q1. What exact W1 rule version was frozen? | `TA1-W1-OP-v1`. |
| Q2. What exact topology-signature field order is used? | `distinctNeighborDegree`, `neighborDegreeMultiset`, `motifMembershipCount`, `overlapClusterMembershipCount`, `sharedMotifNeighborCount`, `motifNeighborDegreeMultiset`, `boundaryContextIncidentCount`, `componentMembership`. |
| Q3. What comparison direction is used? | Ascending lexicographic tuple comparison. |
| Q4. How are multiset values encoded/compared? | Exact integer elements, numerically sorted, lexicographic sequence comparison, shorter prefix first. |
| Q5. How is component membership handled? | Each primary fixture is connected, so one shared non-ordinal token is used; no component number is invented. |
| Q6. What lexical comparison rule is used? | Unicode/code-point lexical Entity ID order, ascending, prefix-shorter first, no locale collation. |
| Q7. Does input array order affect W1? | No; bounded reversed-array checks produced the same mapping. |
| Q8. What exact FP1 candidate order is used? | `P0` through `P(N-1)` in ascending index order. |
| Q9. Is candidate index only operational? | Yes. |
| Q10. What exact Lighthouse committed fixture is used? | EN blob at LiaisonScape commit `fd563340...`, path `public/lighthouse-restoration-demo.en.e2r.json`. |
| Q11. Does its SHA reconcile with prior provenance? | No. Current blob is `C671...`; preceding record is `3038...`, with no committed canonicalization rule reconciling them. |
| Q12. What exact Ashen fixture is used? | `e2r-spec/examples/ashen-crown.en.e2r.json` at committed `e2r-spec` authority. |
| Q13. Does its SHA reconcile? | Yes, `A343...`. |
| Q14. What exact K3 definition/IDs are used? | Complete graph on exact IDs `a`, `b`, `c`, with three unique adjacencies and motif `a|b|c`, recovered from committed preceding evidence. |
| Q15. Are all three fixtures connected? | Yes. |
| Q16. What exact W1 mapping results for Lighthouse? | `archive:P0`, `authority:P1`, `daniel:P2`, `sofia:P3`, `elias:P4`, `beacon:P5`, `thomas:P6`, `lighthouse:P7`, `maya:P8`, `clara:P9`; current blob provenance is held by the hash blocker. |
| Q17. For Ashen? | `ilyan:P0`, `vhalgrim:P1`, `selene:P2`, `mira:P3`, `rowan:P4`, `nyra:P5`, `garrick:P6`, `darius:P7`, `kael:P8`, `elara:P9`. |
| Q18. For K3? | `a:P0`, `b:P1`, `c:P2`, operationally only. |
| Q19. Are all mappings injective? | Yes. |
| Q20. Do they pass GEO-0? | Yes; zero violations in all three exact checks. |
| Q21. Do they pass GEO-3? | Yes; zero violations in all three exact checks. |
| Q22. Does any hard-gate failure occur? | No. The blocker is provenance reconciliation, not hard geometry. |
| Q23. Are mappings stable under input reorder? | Yes for all three. |
| Q24. Is W1 still WIT-NEW-OPERATIONAL, not neutral/historical? | Yes. |
| Q25. Is claim scope still P0 only? | Yes. |
| Q26. Does K3 remain one semantic orbit? | Yes. |
| Q27. Did any objective/profile value influence W1? | No. |
| Q28. What W1-MAN level is reached per fixture? | Lighthouse `MAN-4` held by provenance mismatch; Ashen `MAN-5`; K3 `MAN-5`. |
| Q29. Can W1 enter a future Objective Design2? | Ashen and K3 can; Lighthouse only after the selected provenance reconciliation checkpoint. |
| Q30. Does TA-1 semantic policy remain WIT-CLASS-ONLY / MAN-2? | Yes. |
| Q31. Are TA-2/TA-3 unchanged/excluded? | Yes; both remain excluded and missing semantics. |
| Q32. Is Objective Experiment1 runnable immediately? | No; the old six-policy matrix contract remains invalid and is not auto-run. |
| Q33. What is the exact smallest next checkpoint? | `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-LIGHTHOUSE-FIXTURE-PROVENANCE-RECONCILIATION1`. |

## Hypotheses H1-H15

| Hypothesis | Result |
|---|---|
| H1. WSEL-1 can be frozen without objective inspection | SUPPORTED for the rule and supported fixture calculations. |
| H2. All accepted signature fields can be computed exactly | SUPPORTED for the three topology definitions used; Lighthouse provenance remains separate. |
| H3. Typed ordering is input-order deterministic | SUPPORTED. |
| H4. Lexical ID tie is sufficient as fixture-local fallback | SUPPORTED operationally, not semantically. |
| H5. Lexical fallback is rename-sensitive but P0-usable | SUPPORTED as a scope boundary; no rename claim made. |
| H6. Direct FP1 zip gives one deterministic literal mapping | SUPPORTED for each calculated fixture. |
| H7. Candidate index is operational, not quality semantics | SUPPORTED and retained explicitly. |
| H8. W1 can be hard-gated without preference axes | SUPPORTED. |
| H9. K3 can receive a literal P0 mapping without named privilege | SUPPORTED. |
| H10. Manifest completeness does not upgrade TA-1 semantics | SUPPORTED. |
| H11. Historical Experiment1 literal mapping remains unrecovered | SUPPORTED. |
| H12. W1 can be recorded without Production implementation | SUPPORTED for authorized result documentation. |
| H13. Objective Design2 is next after all required manifests are ready | PARTIALLY SUPPORTED; Lighthouse provenance must be resolved first. |
| H14. No second witness is required by this reconstruction | SUPPORTED; no W2 was created. |
| H15. TA-2/TA-3 remain irrelevant to this checkpoint | SUPPORTED; they were not touched. |

## Falsification N1-N15

| Boundary | Result |
|---|---|
| N1. A signature field lacks exact fixture definition | NOT TRIGGERED. |
| N2. Component membership requires hidden arbitrary order | NOT TRIGGERED; all fixtures are connected and use one shared token. |
| N3. Lexical comparison cannot be frozen | NOT TRIGGERED for the ASCII IDs in scope. |
| N4. Input reorder changes mapping | NOT TRIGGERED. |
| N5. K3 exact IDs cannot be recovered | NOT TRIGGERED; committed evidence gives `a`, `b`, `c`. |
| N6. Lighthouse committed hash does not reconcile | TRIGGERED; current `C671...` differs from preceding `3038...`. |
| N7. Ashen committed hash does not reconcile | NOT TRIGGERED. |
| N8. W1 fails GEO-0 | NOT TRIGGERED. |
| N9. W1 fails GEO-3 | NOT TRIGGERED. |
| N10. W1 requires objective/profile inspection | NOT TRIGGERED. |
| N11. A second witness is required to repair W1 | NOT TRIGGERED; no repair or W2 selected. |
| N12. W1 is described as historical or quality-neutral | NOT TRIGGERED. |
| N13. TA-1 semantic class is redefined by W1 | NOT TRIGGERED. |
| N14. Current source contradicts accepted baseline | NOT TRIGGERED; no Initial Placement drift found. |
| N15. Protected state cannot be preserved | NOT TRIGGERED. |

## Result case and decision

**CASE 7** is selected because the accepted current Lighthouse committed blob
does not reconcile with the preceding Lighthouse provenance hash. Ashen Crown
and K3 are complete, but the all-primary set is not complete.

**Decision G** is selected:

`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-LIGHTHOUSE-FIXTURE-PROVENANCE-RECONCILIATION1`

is the smallest follow-up. It must determine the missing hash
canonicalization/authority seam without reading the protected dirty sample as
a repair source. No Objective Design2 is auto-created until that seam is
closed or explicitly scoped out.

## Exact closure

- W1 rule frozen before the final mapping pass: YES.
- W1 fixture manifests created: PARTIAL — Ashen and K3 complete; Lighthouse held by provenance blocker.
- TA-1 semantic class changed: NO.
- TA-2/TA-3 changed: NO.
- Production source, candidate family, assignment, materializer, solver, settling, routing, label, UI, or sample changed: NO.
- Browser/manual visual validation: NOT RUN.
- `ai-knowledge`: NO CHANGE.
- Push, tag, release, deployment, publication: NOT DONE.

## Knowledge candidate

YES — the checkpoint strengthens the repository-scoped principles that a
research witness must freeze its rule before measurement, that operational
determinism is distinct from semantic neutrality, that exact fixture
provenance and claim scope belong in a literal manifest, and that hard
admissibility can be checked without preference evaluation. No knowledge entry
was created or modified.
