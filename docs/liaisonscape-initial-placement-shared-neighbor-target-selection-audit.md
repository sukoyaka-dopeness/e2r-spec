# LiaisonScape Initial-placement Shared-neighbor Target Selection Audit

Date: 2026-09-01
Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SHARED-NEIGHBOR-TARGET-SELECTION-AUDIT1`

## Outcome

Result: **CASE 6 / EXACT RESULT 5 / DECISION G**.

> **MIXED - LIGHTHOUSE HAS A TOPOLOGY-DISTINGUISHABLE ROLE; ASHEN DOES NOT**

The rejected local-neighborhood candidate has a material target-selection
problem. Its generic minimum-distance rule selects `Clara` as W in Lighthouse
and `Elara` as W in Ashen, while the validated diagnostic reference roles use
`Maya` and `Kael`. The audit finds a useful topology-only discriminator for
Lighthouse: the Clara-Thomas endpoint pair has relation multiplicity two. The
same discriminator is absent in Ashen, where all eligible endpoint pairs have
one Relation and several role permutations share the same local topology
signature.

This is not evidence for hard-coding Maya or Kael, and it is not evidence for
choosing the smallest geometric distance. The source-grounded conclusion is
that target role and adjustment scope are not yet generally specified. The
next bounded checkpoint is exactly:

`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SHARED-NEIGHBOR-ROLE-SYMMETRY-AUDIT1`

It is selected only; no implementation is started by this record.

## Scope and preservation

The audit was diagnostic only. It enumerated current Entity topology and
current auto-placement geometry; it did not move Nodes, change the selector,
change routing or feedback, or create a placement candidate.

- LiaisonScape Production source, routing, feedback, labels, samples, and
  preview were unchanged.
- The detached diagnostic clone was
  `C:\Users\extra\E2R\e2r-liaison-scape-shared-neighbor-target-selection-audit`.
- The protected `sessions/E2R-Session-0052.md` was not edited, staged, or
  restored.
- The protected knowledge playbook was not edited.
- Existing dirty Lighthouse sample files and preview changes were preserved.
- No LiaisonScape commit, push, publication, or preview restart was made.

The role definition used throughout is `(U,V;W)`: U and V are directly
Entity-adjacent, W is directly adjacent to both U and V, and W differs from
both endpoints. Self-relations are excluded from adjacency. Directed Relation
evidence is retained in the inventory but is not weighted or converted into a
score.

## Reproduction boundary

The current helper enumerates distinct shared-neighbor triplets from the
undirected adjacency used by the existing auto-layout path. It selects the
smallest W-to-infinite-U/V-line distance per connected component and moves W
along the current-side normal when the distance is below the existing
clearance. The prior displacement audit is reproduced without changing that
helper:

| sample | current selected role | W | line distance | validated diagnostic reference |
|---|---|---|---:|---|
| Lighthouse JA/EN | `Maya / Thomas / Clara` | Clara | 12.047495 | `Clara / Thomas / Maya` |
| Ashen Crown JA/EN | `Darius / Nyra / Elara` | Elara | 55.638883 | `Darius / Elara / Kael` |

The selected W is a reference endpoint in both samples, but the selected role
is not the validated role. Therefore, “W is one of the three Nodes” is not a
sufficient target-selection contract. The current normal, displacement
coefficient, and per-axis clamp are downstream of this role choice and were
not retuned here.

## Available-sample inventory

This cheap inventory covers the same 15 available sample files used by the
preceding bounded audits. Entity relations count only Relations whose two
endpoints are Entities. Event-only Relations remain in the total Relation
count but cannot form an Entity neighborhood.

| logical sample / paths | locale(s) | Entities | Relations | Entity Relations | stored coordinates | Class P / Class O |
|---|---|---:|---:|---:|---|---:|
| LiaisonScape Lighthouse `public/dirty-lighthouse-restoration-demo.{ja,en}.e2r.json` | JA/EN | 10 | 28 | 14 | yes | 1 / 2 each |
| LiaisonScape `examples/coordinate-prototype-migration-ready.e2r.json` | N/A | 3 | 2 | 2 | yes | 0 / 0 |
| LiaisonScape `examples/linkscape-relation-sample.e2r.json` | N/A | 5 | 6 | 6 | no | 0 / 3 |
| NarrativeLine `src/sample/berlin-wall-history.{ja,en}.e2r.json` | JA/EN | 9 | 23 | 7 | no | 0 / 0 each |
| NarrativeLine `public/manual-checks/event-entity-multiple-relations.e2r.json` | N/A | 2 | 4 | 0 | no | 0 / 0 |
| e2r-spec `examples/apollo-11-mission.{ja,en}.e2r.json` | JA/EN | 9 | 66 | 11 | yes | 0 / 0 each |
| e2r-spec `examples/ashen-crown.{ja,en}.e2r.json` | JA/EN | 10 | 57 | 17 | yes | 0 / 21 each |
| e2r-spec `examples/lighthouse-restoration-demo.{ja,en}.e2r.json` | JA/EN | 10 | 28 | 14 | yes | 1 / 2 each |
| e2r-spec `examples/titanic-final-voyage.{ja,en}.e2r.json` | JA/EN | 13 | 40 | 12 | yes | 0 / 0 each |

The bounded instance inventory remains **4 Class P and 50 Class O**. The
current target-role diagnostic expands eligible permutations inside the two
stored/auto support samples to all three Lighthouse roles and all 21 Ashen
roles. The counts are not contradictory: the former is the prior bounded
instance inventory, while the latter is an exhaustive role-permutation view.

## Topology descriptors

For each role, the degree field is `degree(U)/degree(V)/degree(W)`, exclusive
is the count of neighbors exclusive to each Node, common is the count of
common neighbors for each role position, and pair is the directed count
summary for U-V. Parallel participation and the sorted one-hop neighbor-degree
multiset were also retained by the diagnostic inventory. They were used for
comparison, not as a post-hoc composite score.

### Lighthouse

JA and EN have identical Entity topology and identical current geometry.

| role | line rank | ref | degree | pair | exclusive | common | line | projection | W angle |
|---|---:|:---:|---|---|---|---|---:|---:|---:|
| `clara/maya/thomas` | 3 | no | 5/3/2 | 1 (1->0) | 3/1/0 | 1/1/1 | 27.354 | -1.260 | 4.2 |
| `clara/thomas/maya` | 2 | yes | 5/2/3 | 2 (2->0) | 3/0/1 | 1/1/1 | 21.397 | -0.771 | 5.4 |
| `maya/thomas/clara` | 1 | no | 3/2/5 | 1 (0->1) | 1/0/3 | 1/1/1 | 12.047 | 0.438 | 170.4 |

The reference role is topology-unique in this three-role inventory because
the Clara-Thomas pair has two directed ordinary Relations (`mentors` and
`supervises`), while the other endpoint pairs have one. The generic line
minimum ignores that distinction and chooses the role with Clara as W.

### Ashen Crown

JA and EN again have identical Entity topology and identical current geometry.
All 21 roles belong to one overlap cluster. The reference topology signature
matches four role permutations, so selecting Kael as W is not established by
topology alone.

| role | line rank | ref | degree | pair | exclusive | common | line | projection | W angle |
|---|---:|:---:|---|---|---|---|---:|---:|---:|
| `darius/elara/kael` | 2 | yes | 4/6/5 | 1 (1->0) | 2/4/3 | 2/2/2 | 75.710 | 0.362 | 71.7 |
| `darius/elara/nyra` | 14 | no | 4/6/3 | 1 (1->0) | 2/4/1 | 2/2/1 | 126.395 | 1.974 | 19.4 |
| `darius/kael/elara` | 9 | no | 4/5/6 | 1 (1->0) | 2/3/4 | 2/2/2 | 99.090 | 0.619 | 46.5 |
| `darius/kael/rowan` | 19 | no | 4/5/3 | 1 (1->0) | 2/3/1 | 2/2/1 | 249.532 | 1.184 | 18.6 |
| `darius/nyra/elara` | 1 | no | 4/3/6 | 1 (0->1) | 2/1/4 | 2/2/1 | 55.639 | 0.383 | 130.9 |
| `darius/nyra/rowan` | 13 | no | 4/3/3 | 1 (0->1) | 2/1/1 | 2/2/1 | 107.830 | 0.967 | 71.0 |
| `darius/rowan/kael` | 3 | no | 4/3/5 | 1 (1->0) | 2/1/3 | 2/2/1 | 79.580 | 0.120 | 93.6 |
| `darius/rowan/nyra` | 11 | no | 4/3/3 | 1 (1->0) | 2/1/1 | 2/2/1 | 102.246 | 0.869 | 85.5 |
| `elara/garrick/kael` | 12 | no | 6/3/5 | 1 (1->0) | 4/1/3 | 1/2/2 | 104.248 | -0.031 | 53.3 |
| `elara/kael/darius` | 5 | no | 6/5/4 | 1 (0->1) | 4/3/2 | 2/2/2 | 81.611 | 0.742 | 61.8 |
| `elara/kael/garrick` | 16 | no | 6/5/3 | 1 (0->1) | 4/3/1 | 2/1/2 | 148.650 | -0.063 | 34.2 |
| `elara/nyra/darius` | 7 | no | 6/3/4 | 1 (0->1) | 4/1/2 | 1/2/2 | 84.984 | -0.440 | 29.6 |
| `elara/selene/vhalgrim` | 21 | no | 6/3/2 | 1 (1->0) | 4/1/0 | 1/1/1 | 289.958 | 0.111 | 29.2 |
| `elara/vhalgrim/selene` | 17 | no | 6/2/3 | 1 (1->0) | 4/0/1 | 1/1/1 | 156.865 | 0.032 | 64.3 |
| `garrick/kael/elara` | 6 | no | 3/5/6 | 1 (1->0) | 1/3/4 | 2/1/2 | 83.631 | 0.664 | 92.5 |
| `garrick/kael/mira` | 10 | no | 3/5/3 | 1 (1->0) | 1/3/1 | 2/1/1 | 101.144 | -0.143 | 49.8 |
| `garrick/mira/kael` | 18 | no | 3/3/5 | 1 (1->0) | 1/1/3 | 1/2/1 | 179.385 | -0.451 | 25.5 |
| `kael/mira/garrick` | 4 | no | 5/3/3 | 1 (0->1) | 3/1/1 | 1/2/1 | 79.848 | 0.713 | 104.7 |
| `kael/rowan/darius` | 8 | no | 5/3/4 | 1 (0->1) | 3/1/2 | 1/2/2 | 85.771 | -0.022 | 67.8 |
| `nyra/rowan/darius` | 20 | no | 3/3/4 | 1 (0->1) | 1/1/2 | 1/2/2 | 254.728 | 0.187 | 23.6 |
| `selene/vhalgrim/elara` | 15 | no | 3/2/6 | 1 (0->1) | 1/0/4 | 1/1/1 | 141.572 | 0.212 | 86.6 |

The reference `darius/elara/kael` shares its degree, pair, exclusive, common,
parallel, and one-hop signature with three other Ashen roles when role
positions are compared as a local triangle descriptor. Thus degree or a
larger hand-built topology signature does not create a source-independent
canonical W here.

## Geometry and stored/auto comparison

Geometry was retained as separate descriptors: `dUV`, `dUW`, `dVW`, W-to-line
distance, W-to-segment distance, projection, fan-out minimum, and the angle at
W. The line-minimum rank is the current candidate's selector, not a semantic
label.

| sample | stored support role geometry `dUV / dUW / dVW; line; angle` | current auto support role geometry `dUV / dUW / dVW; line; angle` |
|---|---|---|
| Lighthouse JA/EN | `304.138 / 323.110 / 170.000; 167.687; 68.199 deg` | `163.908 / 128.217 / 291.114; 21.397; 5.392 deg` |
| Ashen Crown JA/EN | `240.000 / 306.105 / 190.000; 190.000; 51.633 deg` | `112.483 / 85.943 / 104.350; 75.710; 71.731 deg` |

In the current auto geometry, all three Lighthouse role permutations and all
three roles of the stored Ashen support triangle remain measurable; geometry
can rank them numerically but does not say which role is semantically
intended. In particular, the smallest line distance selects the wrong role in
both samples. The stored/auto comparison is useful evidence for presentation
quality, but stored support coordinates do not define a general placement
contract and must not be used as a hidden selector input.

JA and EN topology and geometry are identical in both target samples. No
locale or rendered label is needed to compute these descriptors. The later
presentation outcome may still differ by locale, but that does not resolve
the target role.

## Role overlap and adjustment scope

The Lighthouse component contains one physical triangle and three ordered
role hypotheses. A “one triplet per component” rule would therefore suppress
two hypotheses, but it has no semantic basis for choosing the survivor until
the topology discriminator is made explicit.

The Ashen component contains 21 eligible roles, nine distinct W IDs, and 15
distinct endpoint pairs. Every eligible role overlaps the same component;
the overlap graph is one cluster of 21 roles. Several roles share the same
local topology signature, and all candidate roles participate in the same
connected neighborhood. A single arbitrary triplet per component would hide
valid alternatives and make the adjustment scope depend on lexical ordering.

Parallel participation, triangle participation, self-loop counts, exclusive
neighbors, common neighbors, and one-hop neighbor-degree multisets were
inventoried. Self-loops did not create eligible shared-neighbor membership.
The role inventory does not support a single global “best W” score, and a
lexical ID is permitted only as a deterministic tie-break after a semantic
role has been established; it is not a semantic criterion.

## Selector comparison

| selector idea | Lighthouse | Ashen | audit conclusion |
|---|---|---|---|
| endpoint-pair Relation multiplicity | identifies Clara/Thomas and hence the reference role | all eligible pairs have multiplicity one | useful only as a sample/topology class, not universal |
| degree / indegree / outdegree | consistent with the Lighthouse pair distinction | reference role is tied with other permutations | insufficient as a general selector |
| exclusive/common-neighbor and one-hop signatures | separates the reference in the three-role view | reference signature matches four roles | insufficient for Ashen |
| minimum W-to-infinite-line distance | selects Clara as W, not Maya | selects Elara as W, not Kael | directly reproduces the known mismatch |
| geometry-only ranking | can order candidates numerically | can order candidates numerically | ordering is not semantic identity |
| one-triplet-per-component | collapses one physical triangle | collapses a 21-role overlap cluster | adjustment scope remains under-specified |

No post-hoc composite score was adopted. In particular, the table does not
justify adding weights for distance, degree, direction, parallel participation,
or labels. Such a score would conceal the unresolved role contract rather than
solve it.

## Identifiability classes

- **R1 - topology-unique:** Lighthouse reference role under the observed
  endpoint-pair multiplicity rule.
- **R2 - geometry-unique:** not established; geometry supplies an ordering,
  not a source-grounded semantic identity.
- **R3 - role-symmetric:** Ashen reference role is one of multiple equivalent
  local topology candidates.
- **R4 - scope-ambiguous:** Ashen's 21-role overlap cluster cannot be reduced
  to one adjustment target from component membership alone.
- **R5 - presentation-dependent:** not required for computing the target-role
  descriptors; presentation can affect later safety evaluation only.
- **R6 - mixed:** the available Lighthouse and Ashen evidence belongs to
  different identifiability classes, so no universal selector is supported.

The favorable Lighthouse role and the Ashen role `Darius / Elara / Kael`
remain validated diagnostic references, not canonical source semantics. Their
names must not be encoded as special cases.

## Decision and next checkpoint

The dominant split is **Lighthouse topology-unique / Ashen topology-ambiguous**.
The exact result is **mixed target role and adjustment scope under-specified**.
The primary decision is **G: sample-split/mixed**, with role ambiguity selected
as the next boundary because Ashen cannot identify W before scope can be safely
chosen.

The next checkpoint is:

`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SHARED-NEIGHBOR-ROLE-SYMMETRY-AUDIT1`

That audit should determine whether a source-grounded role invariant exists
for a shared-neighbor triangle, whether directed Relation evidence can be
retained without becoming a weighted score, and whether role symmetry can be
resolved without labels, stored coordinates, locale, or presentation state.
If it cannot, adjustment-scope auditing should follow as a separate bounded
checkpoint. No Node movement or new placement rule is justified before that
boundary is resolved.

## Validation and final state

- Diagnostic role inventory covered Lighthouse's 3 roles and Ashen's 21 roles
  in JA/EN; paired locale topology and geometry matched.
- Prior selected roles and the minimum-line-distance mismatch were reproduced.
- No production or preview source diff was introduced.
- LiaisonScape main validation: `npm.cmd test` **280/280 passed**,
  `npm.cmd run lint` passed, `npm.cmd run build` passed, and
  `git diff --check` passed.
- e2r-spec validation: `npm.cmd run validate` passed and the documentation
  diff check passed.
- Localhost `http://127.0.0.1:5173/e2r-liaison-scape/` remained HTTP 200.
- The diagnostic clone and temporary harness were removed after capture.

Only this report and the roadmap entry belong to this checkpoint. The
protected session remains dirty but unstaged; pre-existing dirty sample and
preview paths remain untouched.
