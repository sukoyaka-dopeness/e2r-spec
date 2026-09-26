# LiaisonScape Initial-placement Seed Candidate-generation Semantics Audit

Date: 2026-09-01
Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-CANDIDATE-GENERATION-SEMANTICS-AUDIT1`

## Outcome

Result: **CASE 7 / EXACT RESULT 3 / DECISION A**.

> **DIRECTION SUPPORTED - SOURCE-INDEPENDENT CANDIDATE GENERATION CAN BE
> SPECIFIED AS AN ID-NEUTRAL CAPACITY SEMANTIC WITHOUT SELECTING EXACT
> COORDINATES.**

The smallest supported semantic is:

> For a finite component, candidate generation should expose geometric freedom
> that grows with topology-derived hard-constraint demand, rather than only
> with Node count, so that a fixed finite directional vocabulary does not
> impose avoidable exact motif or shared-ray degeneracies.

This is a semantic boundary, not a coordinate recipe. It does not select a
direction count, ring formula, radius, phase, random seed, assignment
algorithm, solver, or Production implementation. A stronger statement that
the generated family must always admit one simultaneous assignment is retained
as a validation contract, not adopted as a constructive algorithm requirement.

## Scope and preservation

The source authority was LiaisonScape commit
`fd563340625fd3d88dc25baedc93c4f8fe69e5e7`. The diagnostic used only the
Entity graph: self-relations were excluded, parallel Entity pairs were
collapsed, and triangle motifs were derived from simple undirected topology.
The preceding exact hard predicates were retained:

- topology-derived motifs must not be exactly degenerate when a valid
  realization exists; and
- distinct motif-neighbor identities around a shared Node must not use the
  same directed ray when a valid realization exists.

Near-collapse, labels, routes, settling, crossings, stored coordinates,
Dataset identity, storage identity, locale, and UI are outside this audit.
No LiaisonScape source, test, sample, preview, `ai-knowledge` entry, E2R Core,
or Extension was changed. The protected
`e2r-spec/sessions/E2R-Session-0052.md` and all unrelated dirty files were
preserved.

## Reproduction of the preceding boundary

The current source places rank one at the component center, then uses eight
positions per ring. The directions `0, 45, ..., 315` degrees and the radius
`172.8 * ring` repeat by ring. Consequently, position count and usable
directional capacity diverge:

| total positions | center directions | same-ray groups | maximum multiplicity |
|---:|---:|---:|---:|
| 9 | 8 | 0 | 1 |
| 10 | 8 | 1 | 2 |
| 17 | 8 | 8 | 2 |
| 25 | 8 | 8 | 3 |

The real-sample boundary remains:

| graph | F-CURRENT | F-ROLE | F-SET |
|---|---:|---:|---:|
| Lighthouse | NO | YES | YES |
| Ashen Crown | NO | YES | YES |
| G7: 17 Nodes, `R(s)=16` | NO | NO | NO |

G7 has sixteen motif-neighbor identities but only eight current center rays.
This is a finite candidate-family failure despite continuous 2D feasibility.
It is not a proof that every Node or every graph is limited to eight
directions.

## Generator input boundary

The evidence supports the following conceptual inputs:

| input | status | boundary |
|---|---|---|
| component Node count `N` | required | provides finite output and injective position capacity only |
| simple undirected topology | required | supplies structural demand without relation direction noise |
| motif inventory | required or derivable | identifies exact non-collinearity constraints |
| topology-derived `R(S)` | required for directional scaling | describes shared-motif ray demand, not ordinary degree |
| motif-overlap clusters | useful, not yet required globally | describes coupled local constraints |
| structural/orbit classes | PARTIAL | useful for symmetry-compatible classes if needed; no named Node privilege |
| Entity IDs, Entity order, Relation order | forbidden | must not determine family capacity |
| labels, locale, rendered dimensions, routes | forbidden | downstream presentation inputs |
| stored-good coordinates, Dataset ID, provider/storage identity | forbidden | no source-independent placement meaning established |

Same-`N` controls demonstrate why component size alone is insufficient. At
`N=17`, a star and a path have no motif demand, a low-motif graph has one
motif, a moderate-overlap graph has `max R=4`, and G7 has `R(s)=16`. The
current fixed-phase family is adequate for the first three bounded shapes but
not for G7. Node count therefore does not explain the required geometric
freedom.

## High-`R` series

The bounded fan-out family used `R=4, 8, 9, 16, 24, 32`, with one shared Node
and paired leaf edges forming the motifs. The center-direction and direct hard
assignment results were:

| `R` | `N` | CG-0 current directions | CG-1 phase-diverse directions | CG-2 graph-relative directions | CG-3 general-position directions |
|---:|---:|---:|---:|---:|---:|
| 4 | 5 | 4 / YES | 4 / YES | 4 / YES | 4 / YES |
| 8 | 9 | 8 / YES | 8 / YES | 8 / YES | 8 / YES |
| 9 | 10 | 8 / NO | 9 / YES | 9 / YES | 9 / YES |
| 16 | 17 | 8 / NO | 16 / YES | 16 / YES | 16 / YES |
| 24 | 25 | 8 / NO | 16 / NO | 24 / YES | 24 / YES |
| 32 | 33 | 8 / NO | 16 / NO | 32 / YES | 32 / YES |

The phase-diverse family removes the observed G7 failure but a finite phase
cycle saturates again. This shows that “stagger once” is an algorithmic probe,
not the surviving semantic. The graph-relative and general-position probes
show the required scaling direction, but neither is a Production recipe.

## Multi-source and motif controls

A two-shared-Node control with `R(s1)=R(s2)=6` had fourteen candidate points.
The current family exposed fourteen points with capacity at least six, and
the bounded rank assignment was hard-admissible. This does not prove that
maximum capacity alone is sufficient; it shows that capability distribution
and joint feasibility must remain observable rather than being collapsed into
`max R` or a scalar score.

The motif-dense and symmetry controls retained separate boundaries:

- non-collinear motif triples remain an independent availability condition;
- K3, paths, cycles, and stars do not justify named-Node privileges;
- disconnected motif clusters remain independent up to later packing; and
- zero-motif graphs must not acquire a motif-driven angular obligation.

## Candidate-family comparison

The following families are diagnostic classifications only.

| family | finding | status |
|---|---|---|
| CG-0 current fixed-phase rings | finite and deterministic, but directionally saturates at the center | reject as a general contract; retain as baseline |
| CG-1 phase-diverse rings | grows direction capacity initially, but a finite repeating phase can saturate | partial diagnostic |
| CG-2 graph-relative directional diversity | avoids the fixed-direction boundary in the tested series | retain as semantic direction; exact construction open |
| CG-3 size-scaling general position | supplies finite hard witnesses and growing directional diversity | partial; useful oracle family, potentially too strong for Production |
| CG-4 capability-distributed family | multiple capable positions are useful for multi-high-`R` assignment | retain as an open design property, not proven independently required |
| CG-5 structural/orbit-aware family | can expose unlabeled equivalence classes without naming orbit members | retain as symmetry boundary, not a total assignment rule |
| CG-6 cluster-aware family | may help allocate freedom around overlap clusters | underdetermined; no need beyond a component-wide semantic was proved |

## Generator semantic results GEN-0 to GEN-17

| property | result | interpretation |
|---|---|---|
| GEN-0 finite output for finite graph | necessary / retain | finite input should yield a finite candidate family |
| GEN-1 injective position capacity | necessary, not sufficient | at least `N` distinct points does not provide distinct rays or motif compatibility |
| GEN-2 graph-relative directional scaling | necessary, not sufficient | usable direction capacity must respond to `R(S)` |
| GEN-2A one capable point | necessary, not sufficient | one high-capacity point cannot resolve multiple position and motif interactions |
| GEN-2B capacity multiset | useful, not sufficient | multiple high-capacity positions matter, but rays and triples still interact |
| GEN-2C global hard feasibility | sufficient as validation oracle | it is the true existence check, not by itself a constructive generator rule |
| GEN-3 directional diversity growth | supported / retain | avoid permanent fixed-constant saturation when demand can grow |
| GEN-4 no pure radial duplication | supported after generalization | the semantic is directional saturation, not rings specifically |
| GEN-5 unlabeled candidate geometry | supported / retain | generate a position pattern before Node assignment |
| GEN-6 ID-isomorphism stability | supported at capacity level | renamed isomorphic graphs must retain the same unlabeled capacity and feasibility profile |
| GEN-7 input-order stability | supported / retain | Entity/Relation array order is not a generation input |
| GEN-8 automorphism compatibility | partial | orbit-neutral generation is supported; all graph automorphisms need not be planar isometries |
| GEN-9 continuous witness | supported as existence reference | finite unconstrained graphs have generic 2D witnesses under the exact predicates |
| GEN-10 determinism | supported as equivalence-class semantics | exact rigid orientation is not required if capacity/equivalence is unchanged |
| GEN-11 Node-count scaling | insufficient alone | same `N` has materially different hard demand |
| GEN-12 constraint-demand scaling | supported / retain | geometric freedom should scale with topology-derived demand |
| GEN-13 multi-source capacity | partial | capability distribution remains relevant; bounded controls did not prove a separate universal rule |
| GEN-14 motif triple availability | necessary / retain | direction richness does not erase non-collinearity constraints |
| GEN-15 cluster-local versus component-global | partial / open | constraints are cluster-local while allocation may be component-wide |
| GEN-16 disconnected independence | supported / retain | components can be generated independently before packing |
| GEN-17 zero-motif boundary | supported / retain | no motif demand must be invented for stars or trees |

## Automorphism and source independence

The candidate families were evaluated as unlabeled point patterns. Their
capacity profiles depend on `N` and the diagnostic topology descriptors, not on
ID spelling. Entity and Relation reversal do not change the normalized graph
requirements. Translation, rotation, and reflection preserve the relevant
unlabeled capacity semantics.

This does not require every graph automorphism to be realized as a Euclidean
rotation or reflection. The minimum supported symmetry boundary is:

1. generation does not use Node names;
2. orbit-equivalent Nodes are not given semantic privilege by generation; and
3. symmetric controls may receive symmetry-compatible point patterns.

The current lexical Node-to-position assignment remains a separate concern.

## Constructive properties versus validation oracle

| item | classification |
|---|---|
| at least `N` distinct positions | constructive necessary property |
| growing usable directional capacity | constructive semantic direction |
| multiple capable positions | constructive design descriptor, not yet universal requirement |
| compatible non-collinear triples | constructive necessary property |
| one simultaneous injective hard-admissible assignment | post-generation validation oracle |

The global feasibility condition is not dismissed. It is the strongest
sufficiency test for a generated candidate set, but turning it into a
Production solver or optimizer would cross the responsibility boundary of
this audit.

## Completeness boundary

The evidence supports:

- **COMP-0:** current real samples: YES in existential point-set terms;
- **COMP-1:** bounded synthetic controls: YES for the tested diagnostic
  families;
- **COMP-2:** beyond the fixed-direction G7 boundary: YES for diagnostic
  phase-diverse, graph-relative, and general-position families;
- **COMP-3:** tested finite control graphs: PARTIAL; no exhaustive arbitrary
  graph generator claim;
- **COMP-4:** all finite graphs under the hard semantic: NOT established for a
  practical discrete generator; and
- **COMP-5:** universal graph-layout completeness: NOT claimed.

For a finite unconstrained graph, exact forbidden collinearities and
same-ray coincidences form a finite set of geometric exclusions, so a generic
continuous 2D witness exists under the current hard predicates. That fact
does not establish a useful bounded, symmetry-compatible, readable, or
routing-friendly Production generator.

## Exact result and decision

The primary classification is **CASE 7**. The following directions are
supported:

1. candidate generation must scale geometric freedom with topology-derived
   constraint demand, not Node count alone;
2. both position capacity and usable directional capacity must grow without
   fixed-direction saturation when the demand grows; and
3. this can be stated at an ID-neutral unlabeled capacity level without
   selecting exact coordinates.

The stronger claims remain open or partial: capability distribution across
multiple high-`R` positions, practical symmetry-compatible construction, and
global simultaneous feasibility.

The selected next checkpoint is exactly:

`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-CANDIDATE-GENERATION-SEMANTICS-VALIDATION1`

It should validate the supported semantic against expanded real samples,
same-`N`/different-topology controls, a larger high-`R` series, multi-high-`R`
controls, symmetric controls, and ID renames. It must not implement a
Production generator.

## Knowledge candidate

Knowledge Candidate: **YES - HYPOTHESIS STRENGTHENED / REFINED**.

The evidence supports a reusable distinction between Node-count scaling and
topology-demand scaling, and between constructive candidate properties and a
post-generation global feasibility oracle. No `ai-knowledge` entry was
created or changed.

## Implementation boundary

Production Initial Placement, candidate generation, assignment, lexical
ordering, slot/ring geometry, settling, routing, feedback, labels, samples,
preview, Core, Extensions, Handoff, Dataset identity, and Personal Storage
research remain unchanged. No exact coordinate formula, slot count, radius,
phase, random seed, force, threshold, score, or optimization objective was
adopted.

## Validation and cleanup

The diagnostic ran in the temporary worktree
`C:\Users\extra\E2R\e2r-liaison-scape-seed-candidate-generation-semantics-audit`
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
docs: audit LiaisonScape seed candidate generation semantics
```

It remains local and unpushed.
