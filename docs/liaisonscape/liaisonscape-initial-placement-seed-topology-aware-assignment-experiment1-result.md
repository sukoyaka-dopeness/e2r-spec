# LiaisonScape Initial Placement Seed Topology-Aware Assignment Experiment 1

**Checkpoint:** `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-TOPOLOGY-AWARE-ASSIGNMENT-EXPERIMENT1`
**Date:** 2026-09-02
**Result:** `CASE 9 / MIXED / EXACT RESULT 1+2+3+4+5+6+7+8+9+10 / DECISION B`

## 1. Scope and boundary

This was a bounded, headless, pre-settling assignment experiment. It used the
FP1-NGP family only:

```text
P_i = (i/(N-1), (i/(N-1))^2)
```

The run compared topology-role ordering and two predeclared role-to-candidate
correspondence directions. It did not change or invoke Production assignment,
candidate generation, settling, routing, labels, samples, Dataset/Core/
Extension semantics, or application source. There was no browser, visual,
F0/F1/F2, optimization, randomization, permutation enumeration, or swap
neighborhood search.

The source-transparent baseline was LiaisonScape commit
`fd563340625fd3d88dc25baedc93c4f8fe69e5e7`. The disposable runner and its
machine output were removed after analysis; no runner or result JSON remains
in the repository.

## 2. Fixture and source baseline

| Fixture | Nodes | Topology source | Motifs | Overlap clusters | Source evidence |
|---|---:|---|---:|---:|---|
| Lighthouse | 10 | committed LiaisonScape canonical EN topology, labels/coordinates excluded | 1 | 1 | SHA-256 `303823E07613D338E57E62C3F60EBEADC2BB853815D16007A9F4573242F6325C` |
| Ashen Crown | 10 | canonical `e2r-spec` topology, labels/coordinates excluded | 7 | 1 | SHA-256 `A34326545FAB32A7EBDB6C26E97056B747C50F294F6574FD21B123D341FE338E` |
| K3 | 3 | deterministic complete-graph orbit control | 1 | 1 | generated control, no file hash |

The imported source probe was finite and produced the expected position count
for Lighthouse, Ashen Crown, and K3. The experiment therefore did not detect
source drift or a baseline reconstruction failure.

## 3. Topology roles and candidate roles

The accepted topology signature was limited to graph-derived fields:

```text
degree,
neighborDegreeMultiset,
motifMembershipCount,
overlapClusterMembershipCount,
sharedMotifNeighborCount,
motifNeighborDegreeMultiset,
boundaryContextIncidentCount,
component
```

The primary topology-role observations were:

| Fixture | Highest responsibility role(s) | Boundary/low-responsibility roles | Observation |
|---|---|---|---|
| Lighthouse | `clara` (degree 5, one motif/cluster membership) | `archive`, `authority`, `daniel` (degree 1) | all ten full signatures were distinct; responsibility and degree were not identical |
| Ashen Crown | `elara` (degree 6), `kael` (degree 5), `darius` (degree 4) | `ilyan` (degree 2, no motif), `vhalgrim` (degree 2, one motif) | one seven-motif overlap cluster made role order materially nontrivial |
| K3 | all three nodes | none | one true three-node orbit; no named role was used |

Candidate roles were treated as geometric facts only: FP1 index, normalized
position, local spacing direction, altitude contribution, side-ratio
contribution, and angle contribution. Candidate index was not treated as a
quality score. Literal index assignment was only the materialization of a
predeclared correspondence witness.

## 4. Policy manifest

| Policy | Operational rule | Intended diagnostic |
|---|---|---|
| TA-0 | current REP-0: degree descending, lexical ID tie-break, direct zip | baseline |
| TA-1 | topology-signature class ordering, deterministic and quality-neutral | class-constrained witness; no candidate quality correspondence |
| TA-2-degree | degree-first frozen topology-order hypothesis | expose degree-first field order |
| TA-2-motif | motif/overlap responsibility-first counter-hypothesis | expose field-order ambiguity |
| TA-3-forward | RC-H2 forward: higher motif/overlap responsibility receives the larger local-spacing direction | test one explicit correspondence direction |
| TA-3-reverse | RC-H2 reverse: the same responsibility ordering receives the smaller local-spacing direction | counterfactual direction; not a winner candidate |

All policies used accepted topology fields, exact FP1 candidate geometry, no
visual preference, no scalar quality objective, and no named privilege. K3
was evaluated as an orbit control.

## 5. Primary hard-safety and profile result

All 18 primary cells were `HARD-VALID`: injective, finite/distinct, with no
current-floor `GEO-0` or `GEO-3` violation.

| Fixture | TA-0 | TA-1 | TA-2-degree | TA-2-motif | TA-3-forward | TA-3-reverse |
|---|---|---|---|---|---|---|
| Lighthouse | valid | valid | valid | valid | valid | valid |
| Ashen Crown | valid | valid | valid | valid | valid | valid |
| K3 | valid | valid | valid | valid | valid | valid |

Hard validity does not imply structural quality. On Lighthouse, the normalized
motif bottleneck altitude was:

| TA-0 | TA-1 | TA-2-degree | TA-2-motif | TA-3-forward | TA-3-reverse |
|---:|---:|---:|---:|---:|---:|
| 0.102564 | 0.019608 | 0.066667 | 0.052941 | 0.013353 | 0.052941 |

On Ashen Crown, the seven normalized motif altitudes also changed between
policies. TA-2-degree and TA-2-motif happened to produce the same profile for
this fixture, while Lighthouse separated them. TA-3-forward and TA-3-reverse
also produced different profile classes on both real fixtures. These are
structural differences, not evidence that either direction is better.

## 6. Strong rename, input-order, and field-order controls

The strong rename reversed lexical spelling within each distinct-degree group,
preserved all references, and introduced no role names. Results were:

| Fixture | TA-0 | TA-1 | TA-2-degree | TA-2-motif | TA-3-forward | TA-3-reverse |
|---|---|---|---|---|---|---|
| Lighthouse | lexical-sensitive; assignment/profile changed | topology/assignment/profile transported | transported | transported | transported | transported |
| Ashen Crown | lexical-sensitive; assignment/profile changed | topology/assignment/profile transported | transported | transported | transported | transported |

For every policy on both real fixtures, topology class structure was preserved.
For TA-1 through TA-3, the assignment class, literal witness, and anonymous
profile class transported across the strong rename. TA-0 retained its lexical
tie behavior, as expected from REP-0.

Reordering Entity and Relation input arrays left topology classes, assignment
classes, literal witnesses, and profile classes stable for every policy on
Lighthouse and Ashen Crown. This rules out input order as the cause of the
observed policy differences in this bounded run.

## 7. K3 orbit control

K3 remained a single three-node orbit. Every policy produced the same anonymous
profile and remained hard-valid. TA-3-forward reverses literal candidate
indices relative to its reverse witness, but that difference is an orbit-level
materialization difference, not a named-node preference. No unique K3 role was
introduced.

## 8. Questions and hypotheses

| Question/hypothesis | Result |
|---|---|
| Q1: Can the prior topology roles be reconstructed? | Yes. |
| Q2: Can candidate roles be described without visual preference? | Yes, as geometric descriptors only. |
| Q3: Can the six bounded policies be materialized without optimization? | Yes. |
| Q4: Do all primary assignments satisfy current hard safety? | Yes, 18/18. |
| Q5: Does TA-0 retain lexical spelling sensitivity? | Yes, under the strong rename. |
| Q6: Do topology-aware policies transport across that rename? | Yes, TA-1 through TA-3. |
| Q7: Is input-array order consequential here? | No, not in the tested controls. |
| Q8: Does field order remain ambiguous? | Yes; Lighthouse separates degree-first and motif-first. |
| Q9: Does correspondence direction change structural output? | Yes; RC-H2 forward/reverse differ on both real fixtures. |
| Q10: Does the bounded run select a Production winner? | No. |

| Hypothesis | Outcome |
|---|---|
| H1: richer topology roles remove consequential lexical distinctions | Supported for TA-1 through TA-3. |
| H2: topology-aware semantics preserve K3 orbit equivalence | Supported. |
| H3: topology order alone may be insufficient because candidate index has no accepted quality meaning | Supported. |
| H4: class/orbit constraints transport better than a literal lexical total order | Supported in this run. |
| H5: multiple topology-aware witnesses retain different profile classes | Supported. |
| H6: structural assignment objective or candidate-family redesign remains next | Supported as a responsibility, not implemented. |
| H7: lexical stability and structural quality are separate | Supported. |
| H8: the bounded experiment can select responsibility without selecting Production behavior | Supported. |

No falsification boundary N1-N10 was hit. In particular, the source baseline,
topology reconstruction, candidate-role description, K3 orbit, bounded policy
materialization, and two-layer profile comparison all remained available.

## 9. Decision and next responsibility

This is a mixed result. Topology-aware assignment successfully removes the
tested lexical dependence and preserves isomorphism/orbit behavior, but the
real-graph profiles vary with topology field order and RC-H2 direction. Since
the experiment intentionally has no accepted quality objective, selecting one
policy would silently turn candidate geometry into an unsupported preference.

**Decision B:** do not adopt TA-1, TA-2, or TA-3 in Production. The next bounded
responsibility is to define or research a structural assignment objective and
candidate-family responsibility that can distinguish:

1. label/node/edge clearance and corridor capacity;
2. parallel-edge side separation and self-loop interference;
3. unnecessary curvature and obstacle influence;
4. preservation of local curve shape under node movement; and
5. only after those are stable, crossing minimization and total edge length.

The objective must remain separate from Core and Extension semantics, and it
must not be smuggled in as a topology order or candidate index convention.

## 10. Exact closure

- Production assignment: **NO**.
- Candidate generator or candidate family: **NO CHANGE**.
- Settling, seeded positions, routing, labels, crossings, edge length: **NO CHANGE**.
- LiaisonScape application source and samples: **NO CHANGE**.
- Dataset/Core/Extension/schema semantics: **NO CHANGE**.
- Browser/server/visual validation: **NOT RUN**.
- `ai-knowledge`: **NO CHANGE**.
- Push, tag, release, deployment, publication: **NOT DONE**.

The only intended repository changes from this checkpoint are this result
document and the matching roadmap status entry.
