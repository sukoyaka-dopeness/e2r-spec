# LiaisonScape Initial-placement Seed Candidate-space Audit

Date: 2026-09-01
Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-CANDIDATE-SPACE-AUDIT1`

## Outcome

Result: **CASE 6 / EXACT RESULT 6 / DECISION E**.

> **PARTIAL - THE CURRENT FINITE DIRECTION VOCABULARY IS NOT GENERALLY
> COMPLETE; DIAGNOSTIC SCALABLE FAMILIES REMOVE THE OBSERVED FAILURE, BUT A
> SOURCE-INDEPENDENT CANDIDATE-GENERATION SEMANTIC IS NOT YET ESTABLISHED.**

The audit isolates a representational boundary in the current coordinate-less
seed. Adding positions in another concentric ring does not necessarily add
new directed rays from the center. The current source repeats the same eight
angular directions in later rings, so position capacity and directional
capacity diverge.

This is an existence audit only. It does not choose a slot count, radius,
phase, coordinate generator, assignment order, optimization objective, or
Production implementation.

## Scope and preservation

The source authority was LiaisonScape commit
`fd563340625fd3d88dc25baedc93c4f8fe69e5e7`.
The diagnostic used only the Entity graph: self-relations were excluded,
parallel Entity pairs were collapsed, and triangle motifs were derived from
the resulting undirected adjacency. The already-supported hard predicates
were used unchanged:

- every topology-derived triangle must have non-zero exact area when a valid
  realization exists; and
- distinct motif-neighbor identities around a shared Node must use distinct
  directed rays when a valid realization exists.

The following remain separate: near-collapse quality, labels, routes,
settling, crossings, storage identity, Dataset identity, and application UI.
No LiaisonScape source, test, sample, preview, `ai-knowledge` entry, E2R Core,
or Extension was changed. The protected
`e2r-spec/sessions/E2R-Session-0052.md` and all pre-existing dirty files were
preserved.

## Current candidate vocabulary

The source implementation uses rank one at the component center. Subsequent
ranks use eight positions per ring, with the angular sequence
`0, 45, ..., 315` degrees repeated for every ring, and radius
`172.8 * ring`. Candidate points are distinct for the measured component
sizes; the repeated angular phase is the relevant limitation.

For a candidate point `p`, the audit records:

- position capacity: the number of other candidate points;
- directional capacity: the number of distinct directed rays from `p` to
  those points;
- same-ray group count; and
- maximum same-ray multiplicity.

These are measurements of representational capacity, not quality scores.

| total positions | center positions | center directions | same-ray groups | max multiplicity |
|---:|---:|---:|---:|---:|
| 3 | 2 | 2 | 0 | 1 |
| 4 | 3 | 3 | 0 | 1 |
| 5 | 4 | 4 | 0 | 1 |
| 9 | 8 | 8 | 0 | 1 |
| 10 | 9 | 8 | 1 | 2 |
| 17 | 16 | 8 | 8 | 2 |
| 25 | 24 | 8 | 8 | 3 |

The ring boundary is therefore a directional-capacity boundary: from 9 to
10 positions, and again from 10 to 17, position count grows while the center
still sees only eight directions. Non-center points have a different capacity
map, so the center observation must not be generalized to every candidate
point.

## Feasibility definitions

`F-CURRENT` is the exact current degree/ID assignment. `F-ROLE` keeps the
current center and ring membership while varying assignment inside those
roles. `F-SET` permits any Node to occupy any point in the same candidate
position set. Each is an existence result, not an optimization result.

The bounded results were:

| graph | F-CURRENT | F-ROLE | F-SET | observation |
|---|---:|---:|---:|---|
| Lighthouse | NO | YES | YES | current assignment is degenerate; the point set can express a valid motif |
| Ashen Crown | NO | YES | YES | current assignment has shared-ray violations; the point set can express a valid assignment |
| G7: 17 Nodes, 16 incident motif neighbors | NO | NO | NO | center has 16 required identities but only 8 current directions |

The Lighthouse and Ashen results preserve the prior reproduction boundary:
the current assignment can fail even when the same finite point set has an
admissible assignment. `F-ROLE = NO` would have meant that the position set
was adequate but fixed structural roles were not; that is not the G7 result,
because the center's capacity is already below its required ray cardinality.

## G7 capacity derivation

G7 contains one shared Node `s`, sixteen motif-neighbor identities, and eight
motifs. Thus `R(s) = 16`. With the current 17-Node candidate set:

- available non-center positions: 16;
- distinct rays from center `s`: 8;
- same-ray groups: 8;
- maximum same-ray multiplicity: 2; and
- required distinct rays: 16.

The failure is a direct pigeonhole boundary. It is not caused by lack of
points, by an ordinary degree rule, or by a route/label objective. A
continuous generic 2D realization remains possible, so this separates
continuous feasibility from finite candidate-space feasibility.

## Capacity conditions

The audit treats the following as diagnostic semantic hypotheses:

| condition | result | reason |
|---|---|---|
| CAP-1: capacity at an assigned point is at least `R(S)` | necessary: YES; sufficient: NO | a shared Node cannot give `R(S)` identities distinct rays otherwise, but several Nodes and motifs still share one injective assignment |
| CAP-2: a compatible non-collinear motif triple exists | necessary: YES; sufficient: NO | one available triple does not guarantee simultaneous compatibility across overlapping motifs |
| CAP-3: one simultaneous assignment satisfies all hard constraints | required: PARTIAL / supported as the global existence criterion | local capacity and local triples are necessary observations; joint constraints determine actual candidate-space feasibility |

The controls support the boundary without overgeneralizing it:

| control | result | implication |
|---|---|---|
| C0 G7 reproduction | current and F-SET NO | eight repeated center directions cannot represent `R=16` |
| C1 below boundary, `R=8` | current and F-SET YES | the current boundary is observable below the repeated-direction limit |
| C2 above boundary, `R=9` | current and F-SET NO | adding one more required ray does not help when the candidate family still has eight center directions |
| C3 high-degree star without motifs | YES | ordinary degree does not create motif ray requirements |
| C4 high-`R` non-center | YES | non-center capacity is distinct from center capacity |
| C5 two high-`R` shared Nodes | F-SET YES | two local requirements can coexist in the tested finite set; global incompatibility is not claimed generally |
| C6 many motifs without fan-out | YES | motif non-collinearity remains distinct from shared-ray fan-out |
| C7 disconnected clusters | YES | disconnected clusters do not inherit one another's requirements |
| C8 automorphic K3 | YES | hard geometry does not justify named-Node identity inside an orbit |
| C9 ring-boundary role | NO | the same repeated-direction limit appears at the ring transition |

## Candidate families

The families below are diagnostic only.

### CS-0: current fixed-phase rings

CS-0 is finite, deterministic, injective for the tested sizes, and adequate
for the observed real samples in existential `F-SET` terms. It is not a
general hard-admissibility contract because its center directional capacity is
bounded by eight while ring position count can continue to grow.

### CS-1: ring-phase staggering probe

CS-1 kept the 17-point count and ring radii but rotated later rings by a
diagnostic fractional phase. It produced 16 distinct center directions,
zero same-ray groups, and an admissible direct G7 assignment.

This isolates repeated angular phase as one cause of the G7 failure. It does
not select a phase or recommend changing Production rings.

### CS-2: graph-relative directional-cardinality probe

CS-2 used a diagnostic family whose available direction cardinality was
derived from the G7 requirement rather than held at eight. It produced 16
distinct center directions and an admissible direct G7 assignment.

This supports the question “can directional diversity scale with topology
need?” It does not define coordinates, an angle interval, randomness, or a
runtime algorithm.

### CS-3 and CS-4

CS-3 continuous generic geometry remains a witness family, not a Production
generator. CS-4 orbit-compatible patterns remain necessary for symmetric
motifs; no named Node receives an identity merely because a permutation probe
found a witness.

## Exact result and decision

The primary classification is **CASE 6**: any fixed finite direction
vocabulary cannot generally represent the shared-ray safety floor under
unbounded shared-motif fan-out. Supporting findings are:

1. current ring growth adds positions without general graph-relative
   directional capacity;
2. a candidate space must scale usable distinct-ray capacity with topology-
   derived `R(S)` when that hard constraint is in scope;
3. local capacity explains G7, while full feasibility remains a simultaneous
   injective assignment problem;
4. current positions are existentially adequate for the observed Lighthouse
   and Ashen samples but not generically complete; and
5. diagnostic staggered/adaptive families remove the observed failure, but no
   source-independent candidate-generation semantic has been selected.

Accordingly the selected next checkpoint is exactly:

`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-CANDIDATE-GENERATION-SEMANTICS-AUDIT1`

Its purpose is to identify the source-independent properties a scalable
candidate family would need, without choosing Production coordinates or an
optimization algorithm.

## Knowledge candidate

Knowledge Candidate: **YES - HYPOTHESIS STRENGTHENED / REFINED**.

The evidence strengthens the reusable distinction between position capacity,
directional capacity, and global hard-constraint feasibility. It remains a
bounded placement hypothesis, not an accepted workspace rule. No
`ai-knowledge` entry was created or changed.

## Implementation boundary

Production Initial Placement, assignment semantics, lexical ordering,
slot/ring geometry, settling, routing, feedback, labels, samples, preview,
Core, Extensions, Handoff, Dataset identity, and Personal Storage research
remain unchanged. No slot count, radius, phase, force, threshold, scalar
score, optimization objective, or candidate-generation rule was adopted.

## Validation and cleanup

The diagnostic ran in the temporary worktree
`C:\Users\extra\E2R\e2r-liaison-scape-seed-candidate-space-audit` and was
removed after the evidence was captured. The localhost server was not
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
docs: audit LiaisonScape seed candidate space
```

It remains local and unpushed.
