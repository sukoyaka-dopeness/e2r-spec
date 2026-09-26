# LiaisonScape Initial-placement Seed Candidate-generation Semantics Validation

Date: 2026-09-01
Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-CANDIDATE-GENERATION-SEMANTICS-VALIDATION1`

## Outcome

Result: **CASE 2 / EXACT RESULT 2 / DECISION B**.

> **VALIDATED WITH REFINEMENT - REPRESENTATIONAL SUFFICIENCY FOR
> TOPOLOGY-DERIVED HARD CONSTRAINTS IS REQUIRED, BUT TOPOLOGY NEED NOT BE A
> DIRECT GENERATOR INPUT.**

The prior semantic survives falsification, but its input boundary is refined.
Topology-derived demand remains the validation target: a candidate family
must not impose a fixed-direction saturation that makes an avoidable exact
motif or shared-ray degeneracy unavoidable. However, an N-only general-
position family supplied a hard-feasible witness for every finite control and
real sample tested here. Therefore direct inspection of topology by a future
generator is not proven necessary for the exact safety floor.

The refined semantic is:

> For a finite component, candidate generation should produce an ID-neutral
> finite position family whose representational freedom is sufficient for the
> supported exact hard constraints and does not remain artificially bounded by
> a fixed directional vocabulary as component complexity grows.

This is not a visual-quality, routing, label, near-collapse, compactness, or
edge-length statement. No exact coordinates, slot count, radius, phase,
generator algorithm, assignment algorithm, solver, or Production change was
selected.

## Scope and preservation

The source authority was LiaisonScape commit
`fd563340625fd3d88dc25baedc93c4f8fe69e5e7`. The diagnostic used only the
simple undirected Entity graph: self-relations were excluded, parallel Entity
pairs were collapsed, and triangle motifs were derived from the graph. GEO-0
exact motif non-degeneracy and GEO-3 distinct directed rays for distinct
shared-motif neighbors were retained unchanged.

Near-collapse, labels, routes, settling, crossings, stored coordinates,
Dataset identity, storage identity, locale, and UI were excluded. No
LiaisonScape source, test, sample, preview, `ai-knowledge` entry, E2R Core,
or Extension was changed. The protected
`e2r-spec/sessions/E2R-Session-0052.md` and all unrelated dirty files were
preserved.

## Reproduction gate

The previous current-family boundary was reproduced:

| candidate points | center directions |
|---:|---:|
| 9 | 8 |
| 10 | 8 |
| 17 | 8 |
| 25 | 8 |

The current fixed-phase family repeats eight directions in later rings.
Prior feasibility results remain:

| graph | F-CURRENT | F-ROLE | F-SET |
|---|---:|---:|---:|
| Lighthouse | NO | YES | YES |
| Ashen Crown | NO | YES | YES |
| G7, `R(s)=16` | NO | NO | NO |

The earlier high-R series was also reproduced and expanded. CG-0 fails at
`R=9` and above; a phase-diverse diagnostic fails again at `R=24`; graph-
relative and general-position diagnostics remain hard-feasible through
`R=64` in the bounded witness probes.

## SEM-CG1 subclaims

| subclaim | result | evidence |
|---|---|---|
| S1 finite graph produces finite candidate family | VALIDATED | every bounded family emitted a finite set |
| S2 candidate positions are at least Node count | VALIDATED | all probes used one distinct point per Node |
| S3 Node count alone determines required freedom | COUNTEREXAMPLE | same-`N` controls have zero, moderate, and high motif demand |
| S4 topology demand affects required freedom | VALIDATED | G7 fails at `R=16` while same-`N` no-motif controls pass |
| S5 fixed finite directional capacity is generally complete | COUNTEREXAMPLE | CG-0 saturates at eight center directions; high-R failures continue through `R=64` |
| S6 semantic can be ID-neutral | VALIDATED | rename ensemble preserved descriptors, capacity profiles, and family feasibility |
| S7 semantic can be input-order neutral | VALIDATED | Entity/Relation reversal preserved descriptors and profiles |
| S8 generation need not assign named Nodes | VALIDATED | unlabeled family profiles and hard witnesses were sufficient |
| S9 zero-motif graphs need no motif-derived obligation | VALIDATED | paths, stars, and trees have `R=0` and no motif requirement |
| S10 local properties versus global feasibility | REFINED | local descriptors remain useful; simultaneous feasibility remains the sufficiency oracle |

## Same-Node-count / different-topology validation

For each `N`, the controls included a path, one motif, moderate overlap, and
high fan-out. The last column is the direct rank-assignment result in the
current fixed-phase family; the general-position column is the N-only witness
family.

| `N` | control | motifs | shared `R` values | CG-0 | N-only general position |
|---:|---|---:|---|---:|---:|
| 9 | path | 0 | — | YES | YES |
| 9 | one motif | 1 | — | YES | YES |
| 9 | moderate overlap | 3 | 4,4 | NO | YES |
| 9 | high fan-out | 4 | 8 | YES | YES |
| 17 | path | 0 | — | YES | YES |
| 17 | one motif | 1 | — | YES | YES |
| 17 | moderate overlap | 5 | 4,4,4,4 | YES | YES |
| 17 | G7 high fan-out | 8 | 16 | NO | YES |
| 25 | path | 0 | — | YES | YES |
| 25 | one motif | 1 | — | YES | YES |
| 25 | moderate overlap | 5 | 4,4,4,4 | YES | YES |
| 25 | high fan-out | 12 | 24 | NO | YES |

This validates that same Node count can carry materially different hard
constraint demand. It also refines the earlier wording: Node count alone is
insufficient for the current fixed-direction family, but Node count can
parameterize a sufficiently rich topology-agnostic family.

## Expanded high-R series

The high-R fixture uses one shared Node and paired leaf edges forming the
motifs. Results are `directional capacity / hard-feasible direct assignment`.

| `R` | `N` | CG-0 | CG-1 phase-diverse | CG-2 graph-relative | CG-3 N-only general position |
|---:|---:|---|---|---|---|
| 4 | 5 | 4 / YES | 4 / YES | 4 / YES | 4 / YES |
| 8 | 9 | 8 / YES | 8 / YES | 8 / YES | 8 / YES |
| 9 | 10 | 8 / NO | 9 / YES | 9 / YES | 9 / YES |
| 16 | 17 | 8 / NO | 16 / YES | 16 / YES | 16 / YES |
| 24 | 25 | 8 / NO | 16 / NO | 24 / YES | 24 / YES |
| 32 | 33 | 8 / NO | 16 / NO | 32 / YES | 32 / YES |
| 48 | 49 | 8 / NO | 16 / NO | 48 / YES | 48 / YES |
| 64 | 65 | 8 / NO | 16 / NO | 64 / YES | 64 / YES |

The CG-1 result is a deliberate falsification of “staggering once is
scalable”: its finite phase schedule saturates again. CG-2 and CG-3 are
diagnostic families only.

## Multi-high-R validation

Four bounded variants were considered conceptually: two equal demands, two
different demands, three shared Nodes, and coupled shared Nodes. The concrete
fixtures used equal `R={6,6}`, asymmetric `R={4,6}`, and three-node
`R={4,4,4}` variants. All four diagnostic families were hard-feasible in the
bounded direct probes.

The current 21-point candidate set exposed sufficient local capacity for all
of these moderate controls, and no local-pass/global-fail counterexample was
isolated. This means capability distribution is not independently falsified
or proven unnecessary. It remains a descriptor and a validation concern, not
an adopted semantic axis.

For the diagnostic distribution analogue:

`C(k) = number of candidate positions with directional capacity >= k`

and

`D(k) = number of shared Nodes with R(S) >= k`.

`C(k) >= D(k)` is a reasonable necessary-condition candidate for relevant
`k`, but it is not sufficient because injectivity, motif triples, and actual
ray geometry couple choices. It was not promoted to a Production rule.

## Motif-dense and zero-motif controls

A dense K6 control had 20 motifs, six shared Nodes, and `R=5` for every Node.
Its current six-point fixed-phase rank assignment failed, while the N-only
general-position witness passed. This confirms that directional capacity alone
does not erase independent motif non-collinearity constraints.

Paths, stars, and high-degree trees had zero motifs and zero applicable
`R(S)`. They remained hard-feasible without any motif-derived obligation.
Thus SEM-CG1 does not overconstrain ordinary degree or introduce motif
capacity merely because a graph has many edges.

## Symmetry and automorphism boundary

K3, an equivalent-leaf star, a cycle, and two symmetric motifs were included.
The family profiles are unlabeled and do not depend on Node names. Renaming
Lighthouse, Ashen, G7, the multi-high-R control, and K3 with reverse, cyclic,
and additional deterministic permutations preserved the topology descriptors,
`R(S)` multiset, candidate profile, and hard-feasibility result.

The minimum supported symmetry contract is:

1. generation does not use Node names;
2. orbit-equivalent Nodes are not given named semantic privilege; and
3. symmetric controls may be represented by symmetry-compatible unlabeled
   patterns.

It is not necessary to require every graph automorphism to be a Euclidean
   rotation or reflection of the generated points. That stronger AUTO-G4
   claim remains rejected as an unneeded and unproven requirement.

## Real sample validation

All 15 root example JSON files were inspected. Their graph-level signals were
consistent with the preceding audit: Lighthouse and Ashen retain their
current-assignment failures, while their finite current point sets remain
existentially adequate under `F-SET`. The N-only general-position diagnostic
was hard-feasible for all real samples with Nodes, including Lighthouse and
Ashen. Locale-paired files produced the same topology-level result.

The remaining current failures are therefore assignment/family interactions,
not evidence that topology must be a direct generator input. This does not
make the current assignment or current fixed-phase family suitable for
Production; it only identifies the semantic responsibility boundary.

## Constructive properties and oracle boundary

| item | classification |
|---|---|
| finite output for finite input | constructive necessary property |
| at least `N` distinct positions | constructive necessary property |
| no permanent fixed-direction saturation | validated semantic direction |
| sufficient usable directional freedom | validated semantic direction |
| compatible non-collinear triples | constructive necessary property |
| ID/input-order neutrality | validated semantic boundary |
| one simultaneous injective hard-feasible assignment | global validation oracle |

The N-only general-position family demonstrates that topology-aware adaptation
is not required for the exact safety-floor witness. A topology-aware family
may still be useful for efficiency or downstream presentation, but efficiency,
memory, compactness, routing quality, and readability are not semantic
requirements in this checkpoint.

## Semantic language audit

| phrase | disposition | reason |
|---|---|---|
| “finite component” | RETAIN | keeps the scope bounded and avoids a universal layout claim |
| “candidate generation should produce” | RETAIN | expresses a semantic requirement, not a mandated algorithm |
| “ID-neutral finite position family” | RETAIN | survives rename and orbit controls |
| “geometric freedom is sufficient” | RETAIN WITH ORACLE BOUNDARY | sufficiency is checked by global hard feasibility |
| “grows with topology-derived demand” | REFINE | demand is a validation target; direct topology input is optional |
| “rather than Node count alone” | REFINE | Node count alone fails for CG-0, but can parameterize a rich N-only family |
| “fixed directional vocabulary” | RETAIN WITH GENERALIZATION | the semantic concerns saturation, not rings specifically |
| “avoidable exact degeneracies” | RETAIN | preserves the established exact safety-floor boundary |

## Completeness and mathematical boundary

Supported levels:

- **COMP-0:** current real samples: YES in existential hard-feasibility terms;
- **COMP-1:** bounded synthetic controls: YES for the tested families;
- **COMP-2:** beyond fixed-direction G7: YES;
- **COMP-3:** expanded tested finite controls: YES for the N-only general-
  position witness family;
- **COMP-4:** under the exact hard predicates, an unconstrained continuous
  finite N-only general-position family has a mathematical witness: YES as an
  existence statement, not as a practical Production generator; and
- **COMP-5:** universal graph-layout completeness: NO.

For finite Nodes in unconstrained continuous 2D, exact collinearity and
same-ray constraints exclude finitely many geometric configurations. A generic
point set avoids those exclusions; the tested parabola family is one concrete
diagnostic witness because no three of its points are collinear. This supports
continuous and diagnostic family existence, not visual quality, bounded canvas
behavior, symmetry realization of every automorphism, or downstream routing.

## Exact result and decision

The primary classification is **CASE 2**: the semantic validates, but topology
need not be a direct generator input. The exact result is **EXACT RESULT 2**:

> **VALIDATED WITH REFINEMENT - REPRESENTATIONAL SUFFICIENCY FOR
> TOPOLOGY-DERIVED HARD CONSTRAINTS IS REQUIRED, BUT TOPOLOGY NEED NOT BE A
> DIRECT GENERATOR INPUT.**

The selected next checkpoint is exactly:

`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-CANDIDATE-GENERATION-INPUT-BOUNDARY-AUDIT1`

Its purpose is to determine the minimum permitted inputs for a future
candidate family, keeping topology-aware adaptation optional unless later
evidence proves it necessary. It must not implement a generator.

## Knowledge candidate

Knowledge Candidate: **YES - HYPOTHESIS STRENGTHENED / REFINED**.

The evidence supports separating topology-derived validation demand from
generator input, and separating constructive family properties from the global
hard-feasibility oracle. No `ai-knowledge` entry was created or changed.

## Implementation boundary

Production Initial Placement, candidate generation, assignment, lexical
ordering, slot/ring geometry, settling, routing, feedback, labels, samples,
preview, Core, Extensions, Handoff, Dataset identity, and Personal Storage
research remain unchanged. No exact coordinate formula, slot count, radius,
phase, random seed, force, threshold, score, optimization objective, or
Production generator was adopted.

## Validation and cleanup

The diagnostic ran in the temporary worktree
`C:\Users\extra\E2R\e2r-liaison-scape-seed-candidate-generation-semantics-validation`
and was removed after evidence capture. The localhost server was not
restarted.

Validation gates:

- LiaisonScape `npm.cmd test`: **280/280 passed**;
- LiaisonScape `npm.cmd run lint`: passed;
- LiaisonScape `npm.cmd run build`: passed;
- LiaisonScape `git diff --check`: passed;
- e2r-spec `npm.cmd run validate`: passed;
- e2r-spec `git diff --check`: passed; and
- `http://127.0.0.1:5173/e2r-liaison-scape/`: HTTP 200.

The e2r-spec checkpoint commit is:

```text
docs: validate LiaisonScape seed candidate generation semantics
```

It remains local and unpushed.
