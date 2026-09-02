# E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-TA2-POLICY-SEMANTICS-DESIGN1

- Date: 2026-09-02
- Status: Complete — design-only checkpoint
- Scope: New TA-2 policy semantics for LiaisonScape initial-placement seed research
- Result: `CASE 1 / EXACT RESULT 1+2+3+4+5+6+7+8+9+10+11+12 / DECISION A`

## 1. Decision

This checkpoint freezes two new, research-only policy designs:

1. TA-2-degree: descending distinct-neighbor degree, with equal-degree
   semantic classes.
2. TA-2-motif: a three-component componentwise partial order over motif and
   overlap responsibility.

Both policies share the experiment-only operational boundary `TA2-OP-LIN-v1`.
The next checkpoint is
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-TA2-OPERATIONAL-WITNESS-RECONSTRUCTION1`.
It is selected but not started by this document.

## 2. Provenance and boundary

These are new designs. They are not recovered historical semantics, are not a
claim that an older implementation used them, and were not selected by
Experiment2 tuning. Historical recovery established only high-level labels;
it did not provide a complete, authoritative policy contract.

This checkpoint does not change Production source, TA0, TA1/W1, TA3, FP1
Production behavior, F2, materializer solver behavior, settling, routing,
labels, UI, samples, or browser state. It also does not create a fixture
literal mapping, an objective result, a hard gate, or a release claim.

Future witness provenance is reserved as follows:

- semantic research identifiers: `TA2-DEG-NEW-v1` and `TA2-MOTIF-NEW-v1`;
- operational witness source: `TA2-WIT-NEW-OPERATIONAL`;
- any future quality statement may claim at most `CLAIM-P0` until a later
  bounded checkpoint establishes stronger evidence.

## 3. Shared semantic domain

The policies operate before settling on graph-derived topology only. The
allowed semantic inputs are:

- Entity identity as an internal handle;
- unique non-self Entity adjacency in the accepted undirected Entity topology;
- distinct-neighbor degree;
- accepted unordered triangle motifs;
- motif-overlap cluster membership;
- distinct motif-neighbor sets.

The following are forbidden semantic inputs: identifier spelling, labels,
names, descriptions, locale, array or file order, insertion or iteration
order, filesystem order, randomness, stored or manual coordinates,
Presentation, routing or label positions, settling or browser state, and
objective values such as altitude, FAN, PP, or a profile score.

An Entity is a graph handle, not a semantic ordering key. Duplicate relation
multiplicity, self-relations, Event endpoints, and direction multiplicity do
not increase the distinct undirected Entity-topology counts below.

## 4. Candidate and operational layers

The candidate family remains the research-only FP1-NGP family. For `N` nodes,
`m = N - 1` and

`P_i = (i/m, (i/m)^2)` for `i = 0 ... N-1`.

`candidateOrder` is frozen as `P0, P1, ... P(N-1)`. Its index is operational
only and has no quality meaning. The common operational materializer is:

1. compute the policy's semantic priority relation;
2. choose a deterministic linear extension where needed;
3. assign the first semantic role to the first available ascending FP1 index;
4. continue by direct zip.

Thus “high priority gets P0” is not a semantic claim. The candidate family,
candidate order, direct zip, and any later placement quality must remain
separate layers.

## 5. TA-2-degree exact contract

For an Entity Node `V`, define `distinctNeighborDegree(V)` as the number of
distinct other Entity Nodes adjacent to `V` in the accepted undirected Entity
topology. Larger values have higher structural priority.

Equal degree means the nodes are in the same semantic role class. It does not
mean that a later operational ordering is semantically meaningful. No
secondary semantic key is part of this policy.

The resulting semantic preorder is:

- `V` outranks `W` when `degree(V) > degree(W)`;
- `V` and `W` are semantically equivalent when their degrees are equal;
- no other property breaks an equal-degree class.

The operational linear extension for `TA2-OP-LIN-v1` sorts descending degree,
then uses code-point lexical Entity identity only within an equal-degree class.
That lexical step is an implementation tie-break, not a graph meaning.

Boundary answers:

| Question | Answer |
| --- | --- |
| Semantic rename equivariance | Yes |
| Literal rename stability | Not claimed |
| Input-order independence | Yes |
| Secondary semantic key | None |
| K3 behavior | One equal-degree class; no named privilege |

## 6. TA-2-motif exact contract

The policy uses exactly this responsibility vector:

`R(V) = (m(V), o(V), s(V))`

where:

- `m(V)` is the count of accepted unordered triangle motifs containing `V`;
- `o(V)` is the count of derived motif-overlap clusters containing `V`;
- `s(V)` is the count of distinct other Entity Nodes sharing at least one
  accepted motif with `V`.

An overlap cluster is a derived evaluation scope from motif membership and
shared Nodes. It is not a user-defined Group and is not an E2R Core object.

The selected comparison is componentwise partial order:

- `V` strictly dominates `W` iff every component of `R(V)` is greater than or
  equal to the corresponding component of `R(W)`, and at least one is larger;
- exact vector equality is semantic equivalence;
- otherwise neither direction holds and the nodes are semantically
  incomparable, not tied.

No weights, scalarization, lexicographic priority, or hidden secondary field
is authorized. In particular, degree, neighbor-degree multisets,
motif-neighbor-degree multisets, and boundary-context incident counts are not
included merely to reduce incomparability.

The three considered variants were:

| Variant | Meaning | Decision |
| --- | --- | --- |
| MOT-S1 | scalar `m(V)` | Rejected: loses overlap responsibility |
| MOT-S2 | lexicographic `(m,o,s)` | Rejected: hides a priority weight |
| MOT-S3 | componentwise `(m,o,s)` | Selected |

## 7. Shared operational materializer

`TA2-OP-LIN-v1` is the only shared operational convention frozen here.

| Policy | Linear extension |
| --- | --- |
| TA-2-degree | descending degree; lexical identity only within equal class |
| TA-2-motif | repeatedly select semantic maxima; lexical identity only among simultaneous maxima |

The resulting order is directly zipped to ascending FP1 candidates. This is a
deterministic witness-construction rule, not a placement-quality objective.
For both policies, semantic rename equivariance and input-order independence
are intended; literal rename stability is not claimed.

## 8. Topology-only audit after freezing

This audit is diagnostic only. It derives the allowed topology fields and does
not assign candidates or calculate a hard gate.

### Lighthouse fixture

- 10 Entity Nodes, 1 accepted triangle motif, 1 overlap cluster.
- Degree classes: degree 5 = `clara`; degree 3 = `lighthouse`, `maya`;
  degree 2 = `beacon`, `elias`, `sofia`, `thomas`; degree 1 = `archive`,
  `authority`, `daniel`.
- Motif vectors: `(1,1,2)` = `clara`, `maya`, `thomas`; `(0,0,0)` = all
  remaining seven Nodes.
- The maximal motif vector is `(1,1,2)`.

### Ashen Crown fixture

- 10 Entity Nodes, 7 accepted triangle motifs, 1 overlap cluster.
- Degree classes: 6 = `elara`; 5 = `kael`; 4 = `darius`; 3 = `garrick`,
  `mira`, `nyra`, `rowan`, `selene`; 2 = `ilyan`, `vhalgrim`.
- Motif vectors: `(4,4,6)` = `elara`; `(4,4,5)` = `kael`; `(4,4,4)` =
  `darius`; `(2,2,3)` = `garrick`, `nyra`, `rowan`; `(1,1,2)` = `mira`,
  `selene`, `vhalgrim`; `(0,0,0)` = `ilyan`.
- The maximal motif vector is `(4,4,6)`.

### K3 boundary

All three Nodes have degree 2 and vector `(1,1,2)`. They form one semantic
class/orbit. No Node receives a named privilege from the policy or the
operational lexical tie-break.

These fixtures happen to produce nested vector classes. That does not remove
the partial-order contract: a future graph with conflicting components must
preserve semantic incomparability rather than silently invent a weight.

## 9. Witness reconstruction boundary

The next checkpoint may reconstruct literal operational witnesses for the two
new policies, using the provenance above. It must keep separate:

- semantic policy and role classes;
- operational linear extension and candidate assignment;
- literal fixture mapping;
- quality evaluation and any claim level.

It must not backfill a historical mapping, infer semantics from coordinate
quality, tune against Experiment2, or promote a witness to a hard gate. Any
future literal witness should be reported as `TA2-WIT-NEW-OPERATIONAL` with at
most `CLAIM-P0`.

## 10. Explicit closure

1. This document records new TA-2 designs, not historical recovery.
2. Experiment2 did not select either design.
3. TA-2-degree has the exact source-independent distinct-neighbor contract.
4. Equal degree is a semantic class, separate from operational ties.
5. TA-2-motif has the exact three-field responsibility contract.
6. Its comparison is componentwise and introduces no weights or hidden
   lexicographic quality.
7. The shared ascending-FP1 direct zip is a defensible operational boundary
   only.
8. Future witnesses use `TA2-WIT-NEW-OPERATIONAL` provenance.
9. Future witness claims are capped at `CLAIM-P0`.
10. K3 is one orbit with no named privilege.
11. Forbidden presentation, order, randomness, coordinate, settling, browser,
    and objective inputs are excluded.
12. Both designs are ready for separate literal-witness reconstruction.

Decision: `A — both TA-2 contracts are design-ready; proceed to the bounded
operational-witness reconstruction checkpoint.`

No Production implementation or runtime behavior is authorized by this
checkpoint.
