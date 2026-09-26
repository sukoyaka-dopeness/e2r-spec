# LiaisonScape Initial-placement Seed-assignment Stability Audit

Date: 2026-09-01
Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-ASSIGNMENT-STABILITY-AUDIT1`

## Outcome

Result: **CASE 7 / EXACT RESULT 5 / DECISION D**.

> **PARTIAL - ASSIGNMENT STABILITY CAN BE DEFINED, BUT GEOMETRIC QUALITY
> STILL REQUIRES A SEPARATE MOTIF-AWARE SEED SEMANTIC**

The audit supports a source-independent structural partition for Nodes whose
topological roles are distinguishable. It also supports preserving
automorphic Nodes as an equivalence class rather than pretending that topology
alone gives them a unique total order. This removes the need to use semantic
Node roles for the distinction.

The audit does not support treating a topology-refined partition as a
complete seed-quality solution. The current lexical assignment changes
quality-relevant geometry under isomorphic ID renaming, and a remaining
quality-neutral ID tie-break is not established for the observed real samples.
Seed geometry quality therefore remains a separate, later motif-aware topic.

No Production seed algorithm, lexical ordering rule, slot count, radius,
phase, ring model, force, coefficient, threshold, score, settling rule,
Node position, route, label, preview, sample, or schema was changed.

## Start state and preservation

The audit used LiaisonScape source commit
`fd563340625fd3d88dc25baedc93c4f8fe69e5e7` and the preceding e2r-spec
origin audit as the baseline. The source-equivalent diagnostic was executed
in the bounded temporary worktree
`C:\Users\extra\E2R\e2r-liaison-scape-seed-assignment-stability-audit`.

The following existing changes were preserved and were not part of this
checkpoint:

- LiaisonScape sample files `public/lighthouse-restoration-demo.en.e2r.json`
  and `public/lighthouse-restoration-demo.ja.e2r.json`;
- `e2r-spec/sessions/E2R-Session-0052.md`;
- preview changes in `e2r-liaison-scape-routing-preview/src/App.tsx` and
  `src/viewport.ts`; and
- the protected dirty `ai-knowledge` browser-diagnostic playbook.

The running localhost server was not restarted.

## Scope and terminology

The current seed uses the simple undirected topology induced by distinct
Entity neighbors: Relation direction is ignored, parallel Relations collapse,
and self-relations are excluded. The diagnostic follows that same boundary.
It does not add Relation direction, multiplicity, labels, locale, or sample
meaning as a topology discriminator.

The following terms are kept separate:

- **Deterministic:** the same labeled input produces the same output.
- **Input-order stable:** reversing Entity and Relation arrays does not change
  the result.
- **ID-isomorphism stable:** a bijective ID rename preserves corresponding
  geometry or an explicitly permitted equivalent geometry.
- **Automorphism:** an isomorphism from a graph to itself.
- **Structural orbit:** the Nodes interchangeable under graph automorphisms.
- **Structurally distinguishable:** not in the same relevant automorphism
  orbit.

Exact absolute coordinate equality is not the only possible geometry
equivalence. A future contract may distinguish exact corresponding
coordinates, translation equivalence, rigid-transform equivalence,
reflection-inclusive equivalence, and automorphism-equivalent geometry. This
audit records those boundaries; it does not select a Production contract.

## Current source facts and reproduction

The current coordinate-less source behavior is:

1. deduplicate and lexically sort Entity IDs;
2. discover connected components from distinct undirected neighbors;
3. rank by descending distinct-neighbor degree, with lexical ID as the tie
   break;
4. place rank one at the component center and later ranks in fixed angular
   slots at radius `96 * 1.8 = 172.8`, using a second ring after eight slots;
5. apply the existing three bounded settling iterations; and
6. pack components.

The diagnostic reproduced the preceding origin observations:

- Lighthouse has one exact seed-degenerate triangle on
  `{clara, maya, thomas}`;
- the seed triangle has normalized minimum altitude `0.000000`;
- Ashen Crown has exact zero-gap seed fan-out at Darius and Elara;
- an isomorphic ID rename removes Lighthouse exact collinearity and Ashen's
  exact zero-gap records while changing Node-to-slot assignment; and
- reversing Entity and Relation arrays leaves the seed result unchanged.

Therefore the baseline remains deterministic and input-order stable, but not
ID-isomorphism stable. The observed effect is not an array-order effect.

## Structural signature diagnostic

The temporary observer used the following non-Production signatures:

- **SIG-0:** distinct-neighbor degree;
- **SIG-1:** degree plus the sorted multiset of neighbor degrees;
- **SIG-2:** iterative refinement using the multiset of neighboring
  signatures; and
- **SIG-4:** bounded exact automorphism/orbit enumeration for the small
  controls and current samples.

These signatures are diagnostic evidence, not a proposed replacement
algorithm. In particular, a refinement class is not automatically an
automorphism orbit. Exact orbit enumeration was used where feasible to avoid
overclaiming color-refinement results.

### Lighthouse

SIG-0 leaves these relevant degree groups:

- degree 3: Lighthouse and Maya;
- degree 2: Beacon, Elias, Sofia, and Thomas; and
- degree 1: Archive, Authority, and Daniel.

SIG-1 distinguishes every Lighthouse Entity. Examples include:

| Entity | SIG-1 |
|---|---|
| Clara | `5|1,2,2,3,3` |
| Lighthouse | `3|1,2,5` |
| Maya | `3|2,2,5` |
| Thomas | `2|3,5` |
| Beacon | `2|3,3` |
| Elias | `2|2,5` |
| Sofia | `2|1,2` |

The exact bounded automorphism count is `1`; all ten Nodes are singleton
orbits. Thus Maya and Thomas are structurally distinguishable in this actual
sample, despite their degree ties. This distinction says only that topology
can separate their assignment classes. It does not say that either Node is a
semantic movement target or deserves a particular visual role.

The current lexical seed places Lighthouse at `0` degrees, Maya at `45`
degrees, and Thomas at `225` degrees around Clara. The Maya/Thomas opposite
ray relationship creates the exact collinearity. Multiple deterministic
isomorphic renames change this outcome: in the reverse and cyclic probes the
exact motif disappears and the normalized altitude becomes approximately
`122.188052` in the diagnostic scale; other probes retain or alter the exact
case. This variation confirms that the spelling-selected assignment is
quality-relevant.

A topology-refined structural diagnostic can assign corresponding positions
consistently for this asymmetric real graph. It does not prove that the
current geometry is good, nor that a lexical tie-break is safe in all future
graphs.

### Ashen Crown

SIG-0 leaves degree-three and degree-two tie groups, among others. SIG-1
distinguishes all ten Nodes, including the Nodes participating in the exact
zero-gap fan-out:

| Entity | SIG-1 |
|---|---|
| Darius | `4|3,3,5,6` |
| Elara | `6|2,3,3,3,4,5` |
| Kael | `5|3,3,3,4,6` |
| Garrick | `3|3,5,6` |
| Nyra | `3|3,4,6` |
| Rowan | `3|3,4,5` |
| Selene | `3|2,2,6` |
| Vhalgrim | `2|3,6` |
| Mira | `3|2,3,5` |
| Ilyan | `2|3,3` |

The exact bounded automorphism count is `1`, again giving singleton orbits.
The zero-gap participants Darius and Elara are therefore not unresolved
automorphic peers in this sample. Structural partitioning can distinguish
them from their tied neighbors without using their names or semantic roles.

However, the current lexical rename ensemble still changes coordinates and
the motif/fan-out quality profile. The original seed has exact zero-gap
records at Darius and Elara; the reverse rename has no exact zero-gap record;
other deterministic permutations produce different zero-gap membership and
normalized motif profiles. This means that observing structural uniqueness in
the real sample is not enough to establish a quality-neutral representative
rule or a complete geometry policy.

Plain topology is therefore sufficient to describe the real sample's Node
classes, but only **PARTIAL** as an answer to the seed-quality problem.
Motif-aware information remains a candidate requirement for the next topic.

## Symmetric controls and the mathematical boundary

The synthetic controls establish the limit of a universal topology-only total
order:

| Control | Exact automorphism result | Topology-only individual order |
|---|---|---|
| C0 K3 | all three Nodes in one orbit; count `6` | not justified |
| C1 star | three leaves share one orbit; center singleton; count `6` | center yes, leaves no |
| C2 path | endpoints share one orbit and middle Nodes share one; count `2` | orbit order only |
| C3 asymmetric graph | seven singleton orbits; count `1` | supported by topology |
| C4 symmetric motifs | four outer Nodes share one orbit; center singleton; count `8` | center yes, outer individual order no |
| C5 ten-cycle ring | all ten Nodes share one orbit; count `20` | no individual order |
| C6 zero-motif path control | endpoint and middle orbits; count `2` | no motif assignment follows |

For C5, a ring-boundary probe shows that arbitrary ID assignment can change
which graph edges receive the longer or shorter radial-slot separations. The
sorted edge-length profile for the original and a reversal is the same because
reversal is a cycle symmetry, but swapping two labels produces a different
profile. Thus a residual ID choice cannot be called quality-neutral merely
because the Nodes have equal plain signatures.

The result is not that deterministic serialization is impossible. A
canonical-labeling tool may provide a repeatable graph representation. The
semantic boundary is that a canonical representative does not create a
source-grounded distinction between automorphic Nodes. For an automorphic
class, the stable semantic object is the class and its symmetry-compatible
position pattern, not a claim that one member deserves slot 1 and another
slot 2.

## Assignment semantics comparison

| Family | Deterministic | Rename-stable | Automorphism-compatible | Quality conclusion | Status |
|---|---|---|---|---|---|
| STAB-0 lexical total order | yes | no | no | ID can change exact degeneracy and zero gaps | reject as a semantic solution |
| STAB-1 topology-refined partition/order | where classes differ | class membership yes | only with class ties preserved | resolves real-sample distinctions, not full geometry quality | partial |
| STAB-2 canonical labeling | representation-dependent | useful as a tool | does not semantically distinguish automorphisms | not a semantic justification | retain as diagnostic option only |
| STAB-3 orbit/equivalence-class semantics | class-level yes | yes | yes | supports symmetry-compatible geometry | supported direction |
| STAB-4 ID as final tie-break | deterministic | only if quality-equivalent | conditional | not established for current controls or real quality profiles | not adopted |

The candidate principle “ID may be used only among remaining
quality-equivalent realizations” is sound as a boundary condition, but this
audit does not establish that the condition holds for the current slot/ring
model. In Lighthouse and Ashen, assignment changes have material geometry
effects. In C5, even equal-signature ring assignments can change the edge
length profile. No weighted quality score or best-permutation optimizer was
introduced to decide these cases.

## Stability classification and generality

The current implementation is:

- deterministic: **YES**;
- input-order stable: **YES**;
- ID-isomorphism stable: **NO**;
- topology-grounded at its degree grouping: **PARTIAL**;
- automorphism-compatible: **NO** as an individual total-order claim; and
- quality-stable under rename: **NO**.

The diagnostic structural partition reaches ISO-2 (rename-stable structural
class membership) for the tested real samples. It does not establish ISO-3
quality-profile stability, ISO-4 rigid-transform equivalence for a future
assignment, or ISO-5 automorphism-equivariant geometry for a Production
implementation.

The reusable conclusion is generic but bounded: topology can refine actual
sample ties, while true symmetric classes require orbit-aware semantics. This
is not a universal graph-layout claim and does not justify a new ranking,
radius, phase, or slot rule.

## Decision

The selected classification is **CASE 7 / EXACT RESULT 5 / DECISION D**:

- real samples are structurally distinguishable under the tested higher-order
  diagnostic;
- generic symmetric controls prevent a universal unique topology-only Node
  order;
- orbit/equivalence-class semantics are required at that boundary;
- current ID assignment is not quality-neutral; and
- assignment stability can be specified separately from seed geometry quality.

The exact next checkpoint is:

`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-MOTIF-AWARE-SEED-GEOMETRY-SEMANTICS-AUDIT1`

Its purpose is to determine which source-independent geometric properties the
seed should preserve after the assignment boundary is made explicit. It is
selected only; no implementation is started by this record.

## Knowledge candidate

Knowledge Candidate: **YES - HYPOTHESIS STRENGTHENED / REFINED**.

The evidence strengthens two reusable hypotheses: determinism is weaker than
ID-isomorphism stability, and arbitrary identity tie-breaks are safe only
when all remaining realizations are quality-equivalent. No `ai-knowledge`
entry was created or changed because this checkpoint records a bounded source
audit and does not yet establish a universal layout rule.

## Implementation boundary

The following remain unchanged: Production Initial Placement, lexical
ordering, settling, routing, feedback, labels, samples, preview, and future
capability records. No force, attraction, repulsion, threshold, weighted
score, canonical-labeling runtime, or permutation optimizer was introduced.

## Cleanup and validation

The temporary assignment harness, structural-signature observer,
automorphism/orbit probe, rename fixtures, synthetic C0-C6 controls, ring
probe, and generated diagnostic output were removed with the temporary
worktree. Existing dirty files in the main, preview, and knowledge
repositories were preserved.

Validation gates:

- LiaisonScape `npm.cmd test`: **280/280 passed**;
- LiaisonScape `npm.cmd run lint`: passed;
- LiaisonScape `npm.cmd run build`: passed;
- LiaisonScape `git diff --check`: passed;
- e2r-spec `npm.cmd run validate`: passed;
- e2r-spec working-tree and cached diff checks: passed; and
- `http://127.0.0.1:5173/e2r-liaison-scape/`: HTTP 200.

The e2r-spec checkpoint commit is:

```text
docs: audit LiaisonScape seed assignment stability
```

It remains unpushed.
