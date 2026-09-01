# LiaisonScape Initial-placement Seed Candidate-generation Input Boundary Audit

Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-CANDIDATE-GENERATION-INPUT-BOUNDARY-AUDIT1`  
Date: 2026-09-02

## Scope and result

This is a responsibility-boundary audit. It does not select or implement a
Production candidate generator, coordinate formula, slot count, radius, phase,
assignment rule, settling rule, routing rule, or presentation rule.

Result: **CASE 2 / EXACT RESULT 1+2+3 / DECISION B+C**.

**Direction supported:** Node count is the minimum required graph-derived input
for a finite, ID-neutral candidate family; topology may be used optionally for
adaptation, while topology-derived motif and shared-ray constraints remain the
validation target. Generator input and validation input can be separated without
losing the exact safety floor.

The result is bounded by the existing evidence. It does not claim that an
N-only family is visually adequate, that topology-aware generation is useless,
or that the current Production source already has this separation.

## Responsibility split

The exact safety floor remains:

- **GEO-0:** a topology-derived motif is not exactly degenerate when a valid
  realization exists.
- **GEO-3:** distinct motif-neighbor identities around a shared Node do not
  occupy the same directed ray when a valid realization exists.

The validator may read graph topology, derive motifs and `R(S)`, and test global
simultaneous feasibility. A candidate generator may instead construct an
unlabeled finite position family with sufficient representational freedom. This
keeps candidate generation, Node-to-position assignment, settling, and
routing/label presentation separate.

## Current source inventory

`e2r-liaison-scape/src/auto-layout.ts` currently does the following in
`solveAutoLayout`:

| Stage | Current inputs and behavior | Boundary finding |
|---|---|---|
| Component discovery | Entity IDs, undirected adjacency derived from valid non-self Relations, lexical ID order | Graph discovery is coupled to later stages; component partition is upstream context, not proof that IDs belong in geometry semantics |
| Rank assignment | Component adjacency degree, then lexical ID tie-break | Structural degree and ID spelling influence current assignment |
| Candidate position generation | `nodeClearance`, component center/left packing, rank index, fixed repeated 8-direction ring, component order | Current implementation is not an ID-neutral candidate-family contract |
| Settling | Current points, undirected adjacency, clearance, fixed iteration count and bounded per-step movement | Settling is downstream and must not be conflated with candidate generation |

The source also canonicalizes duplicate Entity IDs, collapses parallel pairs,
ignores self-relations for adjacency, and uses deterministic lexical ordering.
This is a description of current coupling, not an authorization to refactor it.

## Input classification

`REQ` means required generator input; `OPT` means permitted optional adaptation;
`VAL` means validation-only; `FORBID` means it must not affect the candidate
family semantics; `OPEN` means evidence is insufficient. Production adoption is
`NO` for every row in this checkpoint.

| Input | Class | Current source uses? | Boundary decision |
|---|---|---:|---|
| I0 component Node count `N` | REQ | Indirectly | Minimum graph-derived capacity parameter |
| I1 exact component membership | OPT | YES | Discovery may provide it; IDs are not required by unlabeled generation |
| I2 simple undirected topology | OPT | YES | Allowed for adaptation; not proven required for generation |
| I3 motif inventory | VAL | NO | Derive in validator for GEO-0/GEO-3 |
| I4 shared-motif demand `R(S)` | VAL | NO | Validation descriptor; not ordinary degree |
| I5 motif-overlap clusters | OPT/VAL | NO | Optional adaptation or validation organization; not required |
| I6 structural/orbit classes | OPT/OPEN | NO | May support symmetry-compatible adaptation; necessity is open |
| I7 Relation direction | FORBID | NO | Current safety floor uses simple undirected adjacency |
| I8 parallel multiplicity | FORBID | NO | Current motif graph collapses parallel pairs |
| I9 self-relations | FORBID | NO | Self-loop presentation is downstream |
| I10 Entity ID spelling | FORBID | YES | Lexical tie-break is current coupling, not semantic input |
| I11 Entity array order | FORBID | NO | Must not alter family semantics |
| I12 Relation array order | FORBID | NO | Must not alter family semantics |
| I13 Dataset ID | FORBID | NO | Must not seed placement |
| I14 title/metadata | FORBID | NO | No sample meaning in geometry |
| I15 label text | FORBID | NO | Label pressure is downstream |
| I16 locale | FORBID | NO | EN/JA must not alter candidate-family semantics |
| I17 rendered text dimensions | FORBID for this scope | NO | Future presentation quality may consume them separately |
| I18 route geometry | FORBID | NO | Routing is downstream |
| I19 stored coordinates | FORBID | NO | Coordinate-less generation is separate from stored-coordinate paths |
| I20 previous generated coordinates | FORBID | NO | Incremental stability is a separate concern |
| I21 randomness/random seed | FORBID | NO | Deterministic semantics retained |
| I22 component discovery order | FORBID | YES | Packing order is current coupling; family semantics must be component-local |
| I23 component size only | REQ at family level | YES | Enough to parameterize a generic family, not enough to validate a graph |

Absolute translation origin and uniform scale are **CTX**, not graph-semantic
inputs: they may frame or transform output without changing exact capacity.
Their Production responsibility remains open and separate.

## Evidence and controls

The preceding candidate-space and candidate-generation validation records report:

- the current fixed-direction family repeats eight center rays and fails the G7
  `R(s)=16` control;
- Lighthouse and Ashen have hard-invalid current assignments while the same
  point family has hard-feasible witnesses;
- an N-only general-position diagnostic family has hard-feasible witnesses for
  the tested real and synthetic controls;
- same-`N` controls with different topology demand and ID-renamed/reordered
  fixtures preserve the topology-level requirement profile;
- motif-dense and high-`R` controls show that topology-derived validation demand
  is not explained by Node count alone;
- zero-triangle dense controls keep motif demand distinct from edge density.

These results support topology as a validator input and permit, but do not
mandate, topology-aware adaptation. They do not establish visual quality,
symmetry preference, crossing minimization, label clearance, or routing quality.

## Contract comparison

| Contract | Safety-floor evidence | Generator / validator separation | Decision |
|---|---|---|---|
| A: N-only | Supported by diagnostic witnesses, subject to sufficient family freedom | Yes | Retain as permitted minimum family |
| B: N + optional topology | Supported and permits adaptation | Yes | Retain |
| C: N + required topology | Not necessary on current evidence | No longer minimum | Reject as mandatory contract |
| D: N + motif/`R` required | Not supported as required | Over-constrains generator | Reject as mandatory |
| E: identity-bearing full graph | Current source uses parts of it, but unnecessary for unlabeled family | No | Reject as semantic minimum |
| F: underdetermined | Frame/scale and symmetry remain bounded open concerns | Partial | Retain only for those separate concerns |

Minimal surviving wording:

> For coordinate-less Initial Placement, a seed candidate generator requires
> enough component-level information to construct a finite, ID-neutral position
> family with injective position capacity. Node count is the minimum required
> graph-derived capacity parameter. Graph topology may optionally adapt that
> family, while topology-derived motif and shared-ray constraints remain the
> validation target rather than mandatory generator inputs.

## Decision and next checkpoint

Primary decision: **B + C**. The input boundary is supported, and both a
topology-agnostic and a topology-aware generator can fit the same hard-
feasibility contract. Structural symmetry, frame/scale context, and visual
quality remain separate boundaries.

No Production generator, candidate set, assignment, settling, routing,
feedback, sample, preview, schema, Core, Extension, Handoff, Storage Research,
or `ai-knowledge` change was made. The selected next bounded checkpoint is
exactly:

`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-CANDIDATE-GENERATION-DESIGN-BOUNDARY-AUDIT1`

It is selected only and is not started by this record.
