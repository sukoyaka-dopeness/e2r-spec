# LiaisonScape Initial-placement Motif-aware Seed-geometry Semantics Audit

Date: 2026-09-01
Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-MOTIF-AWARE-SEED-GEOMETRY-SEMANTICS-AUDIT1`

## Outcome

Result: **CASE 5 / EXACT RESULT 5 / DECISION D**.

> **PARTIAL - THE GEOMETRIC SEMANTIC IS COHERENT, BUT THE CURRENT DISCRETE
> SLOT SPACE IS NOT GENERALLY SUFFICIENT**

The audit supports a source-independent, threshold-free seed admissibility
profile with two hard geometric boundaries:

1. a topology-derived motif must not be exactly degenerate when a
   non-degenerate realization exists; and
2. a shared Node in an overlap cluster must not give topologically distinct
   motif neighbors the same directed ray when a non-coincident realization
   exists.

These conditions describe a safety floor, not a complete high-quality layout
objective. They do not select an ideal triangle, maximize area, maximize
angular separation, minimize edge length, or choose a semantic movement
target. They are compatible with automorphic Nodes when stated as
symmetry-compatible geometry rather than as named-Node slot ownership.

The current center/ring/slot vocabulary can represent an admissible assignment
for the tested Lighthouse and Ashen instances and the small controls, but it
cannot represent the profile generally. A 17-Node control with 16 incident
motif neighbors has only eight distinct slot directions in the current
finite-ring vocabulary, so coincident rays are unavoidable even though a
continuous 2D realization exists.

Near-collapse remains outside the exact safety floor. A separate reference or
policy is required before values such as Lighthouse's small non-zero final
altitude can be classified without inventing a threshold or ideal shape.

No Production seed algorithm, slot/ring change, radius, phase, settling rule,
force, threshold, scalar score, weighted objective, Node movement, route,
label, preview, sample, or schema was changed.

## Responsibility split and preservation

The preceding assignment-stability checkpoint established the boundary between
structural assignment semantics and geometry semantics. This audit therefore
does not reopen canonical labeling, ID tie-breaking, or a universal topology-
only Node order.

The recent E2R Personal Storage research is a separate workstream. It does not
change Dataset ID, storage identity, login, provider, or Handoff semantics in
this placement audit.

The diagnostic was run in the bounded temporary worktree:

`C:\Users\extra\E2R\e2r-liaison-scape-motif-aware-seed-geometry-semantics-audit`

Existing unrelated changes were preserved:

- LiaisonScape sample files
  `public/lighthouse-restoration-demo.en.e2r.json` and
  `public/lighthouse-restoration-demo.ja.e2r.json`;
- `e2r-spec/sessions/E2R-Session-0052.md`;
- preview changes in `src/App.tsx` and `src/viewport.ts`; and
- the protected `ai-knowledge` browser-diagnostic playbook.

The running localhost server was not restarted.

## Source boundary and method

The audit used LiaisonScape source commit
`fd563340625fd3d88dc25baedc93c4f8fe69e5e7`. The diagnostic mirrored the
current seed only for observation:

- distinct Entity neighbors form a simple undirected graph;
- self-relations are excluded;
- parallel Relations collapse;
- descending degree selects rank order, with lexical ID as the current tie
  break;
- rank one is placed at the center;
- later ranks use eight angular directions per ring at radius `172.8`; and
- seed geometry was measured before settling.

The diagnostic enumerated undirected triangle motifs, measured exact area and
altitude/chord degeneracy, measured same-ray fan-out only for Nodes belonging
to multiple motifs, and used a bounded existence probe over the current slot
position set. The existence probe did not select a candidate, optimize a
permutation, or change Production assignment.

For continuous feasibility, a generic non-collinear coordinate construction
was used as a bounded witness. It demonstrates existence of a realization for
the finite control graphs; it does not prescribe a layout algorithm.

## Reproduction gate

The preceding findings were reproduced:

- Lighthouse has one motif `{clara, maya, thomas}` with seed area `0` and
  normalized minimum altitude `0`;
- Ashen Crown has seven non-degenerate seed motifs and two exact shared-Node
  zero-gap records at Darius and Elara;
- the previous ID-rename diagnostic changes current quality-relevant geometry,
  while Entity/Relation array reversal remains stable; and
- the current geometric predicates are unchanged by translation, rotation,
  reflection, and uniform scale of the measured coordinates.

Across the 15 root example JSON files, the exact seed violations were limited
to the Lighthouse JA/EN pair's one degenerate motif each and the Ashen JA/EN
pair's two exact shared-Node fan-out records each. Samples without motifs do
not acquire a motif profile.

## Quality profile boundary

The validated descriptive profile remains two-layered:

### Layer 1 — per motif

- motif-adjacent distances as absolute scale/context;
- normalized motif shape; and
- altitude/chord identity.

The chord distance and triangle altitude are the same geometric quantity. No
additional scalar dimension is introduced here.

### Layer 2 — motif-overlap cluster

- shared-Node fan-out;
- the distribution and identity of motif bottlenecks; and
- boundary context.

Absolute packing and boundary context are context, not automatic objectives.
“Larger is always better” and “more spread is always better” are not adopted.

## GEO-0 — exact motif and fan-out non-degeneracy

**Result: DIRECTION SUPPORTED as a safety floor.**

For a topology-derived triangle `{A, B, C}`, the seed should not create zero
area or exact collinearity when a non-degenerate realization exists. For an
overlap-cluster shared Node `S`, the seed should not give two distinct motif
neighbors the same directed ray when a non-coincident realization exists.

This is a feasibility/admissibility statement, not a maximization objective.
It is source-independent, scale-independent, and threshold-free at the exact
boundary. It does not require a semantic `W`, an ideal shape, or a named Node
role.

The limitation is important: exact non-degeneracy does not classify a very
small but non-zero altitude, and it does not guarantee good routes, labels,
crossing behavior, or settling behavior.

## GEO-1 — orbit-compatible non-degeneracy

**Result: SUPPORTED as a semantic form.**

For automorphic Nodes, the semantic object is the equivalence class and a
symmetry-compatible pattern of positions. It is not “Node A receives 0
degrees” or “Node B is the vertex to move.”

The K3 control has one orbit containing all three Nodes. A non-degenerate
three-position pattern is meaningful; assigning one named member a privileged
slot is not. Mirror and rotation probes preserve the predicate while changing
the coordinate representation. This is compatible with the assignment
stability result and does not create a universal individual total order.

## GEO-2 — motif shape non-collapse

**Result: PARTIAL.**

The phrase “do not collapse a motif toward a lower-dimensional configuration
when topology does not require it” is coherent at the exact boundary and
explains Lighthouse's seed failure. It is not yet a complete near-collapse
semantic. The final Lighthouse altitude is approximately `0.041384`, not
exactly zero, and no threshold-free rule has been established for deciding
when that is unacceptable.

The audit therefore does not fit a threshold, compare against stored-good
coordinates, define an ideal triangle, or introduce a scalar quality score.

## GEO-3 — shared-Node ray distinctness

**Result: DIRECTION SUPPORTED for overlap clusters.**

For a shared Node, topologically distinct motif neighbors should not occupy
the same directed ray when a non-coincident realization exists. No minimum
angle is prescribed.

The distinction is:

- **same ray:** same direction from the shared Node;
- **opposite ray:** 180 degrees apart; and
- **same infinite line:** either 0 or 180 degrees.

Lighthouse's isolated motif has no shared-Node overlap constraint, so its
opposite-ray collinearity is caught by GEO-0, not GEO-3. Ashen's Darius and
Elara violations are same-ray fan-out failures.

## GEO-4 — chord/vertex distinctness

**Result: REDUNDANT WITH GEO-0.**

The statement “no motif vertex lies exactly on the chord between the other
two” is the vertex/chord formulation of zero-area triangle degeneracy. It can
be useful for reporting which vertex and opposite pair form the bottleneck,
but its numeric content is not a separate quality axis.

## GEO-5 — simultaneous cluster constraints

**Result: PARTIAL SUPPORT.**

In an overlap cluster, motif non-degeneracy and shared-ray distinctness form a
set of simultaneous hard constraints. They should not be silently converted
to a weighted sum, a single score, or a sequential per-motif movement rule.

The Ashen instance has seven motifs and six shared Nodes. Its current seed
violates two fan-out constraints while all seven motif areas remain non-zero.
A bounded finite-slot existence probe found an admissible assignment for the
Ashen position set, so the observed failure is not proof of continuous
infeasibility. The larger G7 control shows that the same constraint family is
not representable by the current slot vocabulary in general.

## Lighthouse analysis

The violated seed condition is exact motif non-degeneracy. Clara is the
center, while Maya and Thomas occupy opposite seed rays, giving triangle area
zero and normalized altitude zero.

This collinearity is not topology-required. A continuous non-degenerate
realization exists, and the current finite position set contains at least one
non-degenerate assignment for the same motif and position vocabulary. No
semantic `W`, ID spelling, new radius, or new phase is required for the
admissibility statement itself. The current lexical assignment is simply an
inadmissible realization under GEO-0.

The hard floor does not solve the later near-collapse. Existing settling moves
the normalized altitude away from zero but leaves it small; classifying that
remaining quality requires a separate reference or policy.

## Ashen analysis

Ashen's seven seed motifs are all non-degenerate. The exact hard violations
are shared-ray fan-out at:

| shared Node | motif-neighbor set with an exact zero gap |
|---|---|
| Darius | Elara, Kael, Nyra, Rowan |
| Elara | Darius, Garrick, Kael, Nyra, Selene, Vhalgrim |

The continuous generic witness satisfies all motif and fan-out constraints.
The bounded current-slot existence probe also found an admissible assignment
for the ten-Node Ashen position set. This is an existence result only; no
permutation was selected and no Production candidate was adopted.

The overlap cluster does not demonstrate a logical contradiction in the
continuous constraints. It demonstrates coupled assignment difficulty and a
candidate-space boundary. Settling remains a separate concern: earlier
evidence showed mixed motif and fan-out improvement/deterioration, which this
audit does not reinterpret as a seed semantic.

## Current sample inventory

The 15 root example JSON files were inspected with the same graph and motif
boundary. The informative exact violations were:

| files | motifs | exact motif violations | exact shared-ray violations |
|---|---:|---:|---:|
| Lighthouse JA/EN | 1 each | 1 each | 0 |
| Ashen JA/EN | 7 each | 0 | 2 each |
| other 11 files | 0 or non-degenerate | 0 | 0 |

This repeats the safety-floor signal across two real topology families while
not claiming that every graph has the same failure.

## Controls G0-G7

| control | observed seed state | continuous feasibility | current-slot feasibility | implication |
|---|---|---|---|---|
| G0 K3 | no exact violation in the sample slot assignment | yes | yes | all Nodes remain orbit-equivalent; no named slot role |
| G1 two triangles share a Node | no exact violation | yes | yes | shared-ray constraints can coexist with two motifs |
| G2 dense overlap | one exact motif and one exact shared-ray violation | yes | yes | overlap couples constraints without proving contradiction |
| G3 high-degree star | no motifs; no motif profile | yes | yes | ordinary star spacing is not silently a motif rule |
| G4 triangle plus non-motif Nodes | motif-local profile only | yes | yes | scope need not expand to the whole component |
| G5 disconnected motif clusters | separate cluster profiles | yes | yes | constraints remain cluster-local |
| G6 assignment-sensitive degeneracy | current assignment is exactly degenerate; alternate position assignment exists | yes | yes | assignment can make geometry inadmissible without topology requiring it |
| G7 slot-capacity limit | one exact shared-ray violation | yes | no | 16 motif neighbors cannot occupy 16 distinct directions in 8-direction rings |

G0 also establishes the automorphism boundary: exact non-degeneracy can be
stated for the symmetric position pattern, but topology does not justify an
individual Node-to-slot identity. G5 shows that disconnected clusters should
not inherit one another's constraints. G7 separates continuous feasibility
from finite candidate-space feasibility.

## Continuous geometry versus finite slots

The controls separate two questions:

1. Does an admissible 2D realization exist?
2. Can the current finite center/ring/slot vocabulary express one?

For Lighthouse, Ashen, G0-G6, both answers are positive in the bounded
diagnostic. For G7, continuous feasibility is positive but current-slot
feasibility is negative by the eight-direction pigeonhole boundary. The
semantic profile therefore survives, while the current candidate space does
not satisfy it generally.

This does not authorize adding slots, rings, radius, or phase. It selects a
candidate-space audit as the next research step.

## Hard constraint versus quality objective

| statement | status |
|---|---|
| exact motif area must not be zero when an alternative exists | supported safety floor |
| shared motif-neighbor rays must not coincide when an alternative exists | supported overlap safety floor |
| maximize triangle area | not adopted |
| maximize angular separation | not adopted |
| use an ideal equilateral shape | not adopted |
| minimize total edge length | not adopted and lower priority here |
| fit a numeric threshold for near-collapse | unresolved and not introduced |
| select a best permutation | not introduced |
| move a semantic `W` | not introduced |

The user-visible quality direction is therefore: reject exact inadmissible
seed geometry where a valid realization exists, then research near-collapse
and candidate-space representation separately.

## Invariance and assignment boundary

The exact predicates and motif counts were unchanged under translation,
rotation, reflection, and uniform scale of the same coordinate configuration.
Entity and Relation order remains outside the geometry semantic and was not
used to distinguish Nodes.

The preceding assignment audit established that the current lexical seed is
not ID-isomorphism stable and can change exact degeneracy. This audit treats
that as an assignment input boundary, not as permission to replace the
assignment rule here. GEO-0 and GEO-3 judge the resulting geometry; they do
not prescribe how a future assignment obtains it.

Automorphic classes must receive a symmetry-compatible position pattern. A
canonical representation or deterministic serialization may be useful for
implementation, but it does not create semantic identity inside an orbit.

## Near-collapse and settling boundary

Exact-degeneracy avoidance is supported as a safety floor. Near-collapse is
not solved by that floor. Lighthouse demonstrates why: settling changes
normalized altitude from exact zero to a small positive value, but the audit
does not establish a source-independent threshold for rejecting it.

Ashen's mixed settling behavior remains separate. A later settling audit may
need transition history or another bounded reference, but this checkpoint does
not convert that history into a seed-quality rule.

## Routing and label boundary

Labels, rendered text, routes, occupied paths, H2 conflicts, locale, and
self-loop presentation are not inputs to this seed geometry semantic. They
remain downstream presentation constraints. A seed that satisfies GEO-0/GEO-3
is not thereby guaranteed to have minimum crossings, clear labels, or
non-overlapping routes.

## Generality

The evidence supports the following bounded classification:

- **GEN-1 only Lighthouse:** not supported; Ashen supplies a second real
  failure family.
- **GEN-2 repeats across real topology families:** supported.
- **GEN-3 synthetic motif controls:** supported for the hard predicates and
  symmetry boundary.
- **GEN-4 generic 2D seed admissibility semantic:** partial; the predicates
  are reusable, but finite candidate-space and near-collapse policies remain.
- **GEN-5 universal graph-layout requirement:** not supported.

The result is a reusable geometry hypothesis, not a universal layout theorem.

## Decision and next checkpoint

The selected result is **CASE 5 / EXACT RESULT 5 / DECISION D**:

- exact motif and shared-ray non-degeneracy provide a coherent, threshold-free
  safety floor;
- the constraints can be stated without semantic Node roles, scalar scores,
  or ideal shapes;
- orbit-compatible geometry is required for symmetric motifs;
- the current slot vocabulary works for the tested real instances and small
  controls; but
- the current finite slot space is not generally sufficient, as G7 shows;
- near-collapse remains a separate unresolved quality question.

The exact selected next checkpoint is:

`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-CANDIDATE-SPACE-AUDIT1`

Its purpose is to determine whether the current discrete center/ring/slot
candidate vocabulary is sufficient for the supported seed geometry semantics.
It must not implement a new slot, radius, phase, force, threshold, or
Production placement rule.

## Knowledge candidate

Knowledge Candidate: **YES - HYPOTHESIS STRENGTHENED / REFINED**.

The evidence supports a reusable distinction between an exact geometric
safety floor and a broader quality objective, and between continuous
feasibility and finite candidate-space feasibility. This remains a bounded
geometry hypothesis rather than an accepted workspace rule. No `ai-knowledge`
entry was created or changed.

## Implementation boundary

Production Initial Placement, assignment semantics, lexical ordering,
slot/ring geometry, settling, routing, feedback, labels, samples, preview,
Core, Extensions, Handoff, Dataset ID semantics, and Storage Research remain
unchanged. No force, threshold, scalar score, semantic `W`, permutation
optimizer, or candidate adoption was introduced.

## Cleanup and validation

The temporary seed harness, motif observer, fan-out observer, synthetic G0-G7
controls, finite feasibility probes, transformation probes, generated JSON and
text output, and copied sample data were removed with the temporary worktree.

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
docs: audit LiaisonScape motif-aware seed geometry semantics
```

It remains unpushed.
