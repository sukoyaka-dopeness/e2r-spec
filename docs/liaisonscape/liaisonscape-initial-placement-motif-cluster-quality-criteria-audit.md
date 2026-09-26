# LiaisonScape Initial-placement Motif-cluster Quality Criteria Audit

Date: 2026-09-01
Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-MOTIF-CLUSTER-QUALITY-CRITERIA-AUDIT1`

## Outcome

Result: **CASE 6 / EXACT RESULT 2 / DECISION D**.

> **DIRECTION SUPPORTED - USE A TWO-LAYER MOTIF AND OVERLAP-CLUSTER
> BOTTLENECK PROFILE, WITHOUT A SINGLE SCORE OR NUMERIC THRESHOLD**

The audit supports the following quality representation for an unordered
motif cluster:

1. a per-motif geometry layer, which detects local shape and chord
   bottlenecks;
2. a shared-Node and cluster-context layer, which detects fan-out collapse and
   boundary pressure across overlapping motifs.

This is a diagnostic quality model, not a placement rule. It does not select
Nodes to move, prescribe a force, rank candidates, or establish a Production
threshold. Edge length remains contextual evidence rather than the primary
objective.

The next checkpoint is exactly:

`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-MOTIF-CLUSTER-QUALITY-CRITERIA-VALIDATION1`

It is selected only. No Node movement, placement candidate, routing change,
feedback change, or Production implementation was made by this audit.

## Start state and preservation

The audit used current source and sample data read-only in the temporary
diagnostic clone:

`C:\Users\extra\E2R\e2r-liaison-scape-motif-cluster-quality-criteria-audit`

The clone contained only the audit harness and captured output. It was removed
after the evidence was recorded.

- LiaisonScape reference HEAD: `fd563340625fd3d88dc25baedc93c4f8fe69e5e7`.
- LiaisonScape was on `main`, tracking `origin/main`, five commits ahead at
  audit start.
- Pre-existing dirty sample paths were
  `public/lighthouse-restoration-demo.en.e2r.json` and
  `public/lighthouse-restoration-demo.ja.e2r.json`; neither was edited,
  restored, normalized, staged, or committed.
- e2r-spec was on `main`; the only pre-existing dirty path was the protected
  `sessions/E2R-Session-0052.md`. It was not edited, staged, restored, reset,
  or committed.
- The protected
  `ai-knowledge/playbooks/e2r-edge-cdp-browser-diagnostic.md` was unchanged.
- The preview's pre-existing changes in `src/App.tsx` and `src/viewport.ts`
  were preserved.
- The running localhost was not restarted.
- No LiaisonScape commit, preview commit, push, tag, release, deploy, or
  publication was made.

## Scope and evidence boundary

The preceding scope audit defined an unordered motif as three distinct Entity
Nodes whose three unordered Node pairs each have at least one direct
Entity-to-Entity Relation. Self-Relations do not create motif membership.
Motifs sharing a Node form one connected overlap cluster.

This audit measures geometry attached to those existing motifs and clusters.
Names, natural-language meaning, locale, labels, routes, stored coordinates,
and sample identity are not quality selectors. Stored coordinates are used
only as comparison evidence for the already available clean samples. Relation
direction and multiplicity are retained as topology descriptors, not as a
weighted score.

The measures are:

| id | diagnostic measure | purpose | boundary |
|---|---|---|---|
| P1 | absolute cluster packing | records pair-distance and cluster-bbox compression | contextual; not an edge-length objective |
| P2 | per-motif shape | records triangle area, normalized minimum altitude, angle range, and side ratio | detects scale and shape collapse |
| P3 | shared-Node fan-out | records the smallest angular gap among a multi-motif Node's motif neighbors | applies only to overlapping clusters |
| P4 | Node-to-chord clearance proxy | records the perpendicular distance from each motif Node to its opposite straight chord | a geometric proxy, not an actual rendered-route clearance |
| P5 | cluster/boundary context | records relations from cluster Nodes to Nodes outside the cluster | context only; it does not expand the adjustment scope |

P1, P2, and P4 are the common per-motif inputs. P3 is the overlap-cluster
extension. P5 prevents a local reading from ignoring immediate graph context,
but does not decide whether the context is an obstacle. None of these measures
is converted into a scalar score or a universal pass/fail cutoff.

## Reproduction gate and inventory

The preceding inventory was reproduced: 19 unordered motifs and 57 ordered
roles across the available files. The full inventory was:

| logical sample | locale/files | Entity components | component Nodes | motifs | overlap clusters |
|---|---|---:|---|---:|---:|
| LiaisonScape Lighthouse public | JA/EN, 2 | 1 each | 10 | 1 | 1 |
| LiaisonScape coordinate prototype | N/A, 1 | 1 | 3 | 0 | 0 |
| LiaisonScape Linkscape relation | N/A, 1 | 1 | 5 | 1 | 1 |
| NarrativeLine Berlin Wall | JA/EN, 2 | 2 each | 8 + 1 | 0 | 0 |
| NarrativeLine event/entity manual | N/A, 1 | 2 | 1 + 1 | 0 | 0 |
| e2r-spec Apollo 11 | JA/EN, 2 | 1 each | 9 | 0 | 0 |
| e2r-spec Ashen Crown | JA/EN, 2 | 1 each | 10 | 7 | 1 |
| e2r-spec Lighthouse | JA/EN, 2 | 1 each | 10 | 1 | 1 |
| e2r-spec Titanic | JA/EN, 2 | 2 each | 12 + 1 | 0 | 0 |

Zero-motif components are valid no-op controls for this audit. No available
component contains more than one separate motif-overlap cluster, so cluster
independence is structurally defined but not empirically compared here.

The clean e2r-spec Lighthouse and Ashen JA/EN pairs have identical topology
and geometry within each locale pair. The dirty public Lighthouse files have
stored coordinates equal to their current automatic coordinates and are
neutral controls, not the favorable stored baseline.

## Lighthouse: isolated motif profile

The Lighthouse motif is `{Clara, Maya, Thomas}`. It is a one-motif cluster;
there is no shared-Node fan-out, so P3 is not applicable. Four Entity
Relations cross from the cluster to `Beacon`, `Daniel`, `Elias`, and
`Lighthouse`.

### P1 and P2

| state | sorted pair distances | area | minimum altitude | normalized minimum altitude | angle range | side max/min | cluster bbox |
|---|---|---:|---:|---:|---:|---:|---|
| stored | 170.000, 304.138, 323.110 | 25,500 | 157.841 | 0.489 | 31.264-80.538 deg | 1.901 | 170 x 300 |
| auto | 128.217, 163.908, 291.114 | 1,753.595 | 12.047 | 0.041 | 4.215-170.393 deg | 2.270 | 202.0 x 209.6 |

The motif has both scale and shape change: **S2**. The minimum altitude is
the strongest local bottleneck; the angle range shows near-collinearity in the
automatic geometry. The cluster bbox is mixed, so this is **C1 motif-local
compression**, not evidence that the whole ten-Node component should be
adjusted.

### P4 and P5

The three stored Node-to-opposite-chord distances are `157.841`, `167.687`,
and `300.000`. The automatic values are `12.047`, `128.217`, and `163.908`.
The minimum therefore moves from Thomas-to-Clara/Maya to Clara-to-Maya/Thomas
and exposes a severe local chord bottleneck.

Boundary relation distances change from a stored range of `155.242-259.615`
to an automatic range of `100.414-309.180`. The lower bound decreases while
the upper bound increases, so boundary context is mixed and does not explain
the motif collapse by itself.

## Ashen Crown: overlapping-cluster profile

Ashen has seven motifs in one nine-Node overlap cluster inside a ten-Node
Entity component. The cluster Nodes are
`{Darius, Elara, Garrick, Kael, Mira, Nyra, Rowan, Selene, Vhalgrim}`;
`Ilyan` is outside the cluster. Six Nodes belong to multiple motifs:

| Node | motif memberships | stored minimum neighbor gap | auto minimum neighbor gap |
|---|---:|---:|---:|
| Darius | 4 | 38.367 deg | 6.060 deg |
| Elara | 4 | 31.504 deg | 6.990 deg |
| Kael | 4 | 38.367 deg | 18.463 deg |
| Garrick | 2 | 38.367 deg | 34.198 deg |
| Nyra | 2 | 20.225 deg | 19.426 deg |
| Rowan | 2 | 20.225 deg | 18.559 deg |

The first three rows are clear P3 fan-out bottlenecks. They show why a
per-motif-only condition cannot represent the shared-Node state.

### Per-motif P2 profile

`M1` through `M7` are lexical inventory identifiers only; they do not express
semantic priority.

| motif | Nodes | stored area -> auto area | stored normalized altitude -> auto | stored ratio -> auto | classification |
|---|---|---:|---:|---:|---|
| M1 | Darius / Elara / Kael | 22,800 -> 4,258.044 | 0.487 -> 0.673 | 1.611 -> 1.309 | S2 scale and shape |
| M2 | Darius / Elara / Nyra | 22,800 -> 7,108.666 | 0.345 -> 0.218 | 1.796 -> 2.272 | S2 scale and shape |
| M3 | Darius / Kael / Rowan | 29,450 -> 10,722.781 | 0.613 -> 0.295 | 1.531 -> 3.136 | S2 scale and shape |
| M4 | Darius / Nyra / Rowan | 13,300 -> 13,776.802 | 0.184 -> 0.379 | 1.877 -> 2.491 | S3 mixed |
| M5 | Elara / Garrick / Kael | 22,800 -> 7,755.761 | 0.487 -> 0.451 | 1.611 -> 1.777 | S2 scale and shape |
| M6 | Elara / Selene / Vhalgrim | 24,000 -> 22,783.249 | 0.300 -> 0.440 | 1.780 -> 2.048 | S3 mixed |
| M7 | Garrick / Kael / Mira | 29,450 -> 9,379.895 | 0.613 -> 0.340 | 1.531 -> 2.247 | S2 scale and shape |

Five of seven motifs compress and two are mixed. The cluster therefore has
classification **C4 mixed**, with a dominant but non-universal compression
pattern. The cluster bbox changes from `620 x 590` to `457.394 x 304.833`;
the whole component has the same bbox in this sample because Ilyan remains
outside the extreme bounds. This does not establish a causal force or blame
the attraction coefficient.

### P4 chord bottlenecks

The ten smallest stored P4 values are `70.000`, `120.000`, `125.415`, four
values at `148.969`, and three values at `190.000`. The ten smallest automatic
values are `11.874` (twice), `12.698`, `27.217` (twice), `38.913`, `48.618`,
`55.639` (twice), and `59.660`.

P4 therefore drops across several overlapping motif chords, not at only one
isolated relation. This is **B4 cluster chord bottleneck** evidence. As in
Lighthouse, P4 is a straight-chord proxy and must not be described as a
rendered route-clearance measurement.

### P5 boundary context

The cluster has two boundary Relations to `Ilyan`: `selene-ilyan` and
`ilyan-mira`. Their stored distances are `190.000` and `380.000`; the
automatic distances are `90.146` and `292.442`. The minimum boundary distance
decreases, so boundary context contributes a local pressure signal. It is not
enough to conclude that Ilyan is an obstacle or that the whole component
should be included in a future adjustment.

## Quality classification

The available evidence supports the following descriptive bottleneck labels:

- **B1 motif shape bottleneck:** supported by the Lighthouse triangle and by
  five Ashen motifs with changed normalized shape.
- **B2 scale/packing compression:** supported by the decreased pair distances,
  motif areas, and Ashen cluster bbox; packing is only a partial hypothesis.
- **B3 shared-Node fan-out bottleneck:** supported at Darius, Elara, and Kael.
- **B4 Node-to-chord bottleneck:** supported by the P4 minima and their
  multi-motif distribution.
- **B5 boundary-context pressure:** supported as context by the decreased
  Ashen cluster-to-Ilyan minimum and the mixed Lighthouse boundary range.
- **B6 mixed cluster state:** supported because Ashen contains five compressed
  and two mixed motifs; no single monotonic direction is valid for every
  motif.

No dominance ordering among B1-B6 is claimed. In particular, “larger is
always better” would be wrong: a larger raw distance can coexist with a
degenerate shape, and a normalized shape descriptor is intentionally scale
invariant.

## Transformation and invariance check

The diagnostic geometry was transformed by scale `1.7`, rotation `37 deg`,
and translation. For both Lighthouse and Ashen:

- normalized minimum altitude, angle range, and side max/min ratio remained
  unchanged;
- raw side distances scaled by `1.7`;
- motif membership and overlap topology remained unchanged.

This supports separating P1's absolute packing context from P2's normalized
shape descriptors. A future quality implementation must not confuse a global
scale/translation change with a shape change. The check is an algebraic
invariance test only; it is not a placement experiment.

## Two-layer model and rejected alternatives

| model | result | reason |
|---|---|---|
| one scalar quality score | rejected | P2, P3, P4, and P5 expose different failure modes; no source-grounded weights exist |
| per-motif-only quality | insufficient | it cannot represent Darius/Elara/Kael shared-Node fan-out or cross-motif chord bottlenecks |
| whole-component quality | too broad | it pulls in graph context such as Ilyan without treating it as motif membership |
| two-layer profile | supported | it preserves isolated motifs, shared-Node state, and boundary context without a new priority rule |

The supported model is:

**Layer 1 - motif profile:** P2 shape and P4 chord bottlenecks, with P1 as
absolute packing context.

**Layer 2 - overlap-cluster profile:** P3 shared-Node fan-out, aggregation of
Layer 1 bottlenecks across the overlap cluster, and P5 boundary context.

The layers are descriptive inputs for the next validation checkpoint. They do
not define which Node moves, how far it moves, which route is regenerated, or
how a candidate is scored.

## Generality and knowledge candidate

The profile is **PARTIAL reusable hypothesis**. Motif membership, overlap
clusters, triangle geometry, fan-out angles, chord distances, and boundary
relations can be computed without LiaisonScape-specific labels or rendering
semantics. The available evidence is small, contains only one overlapping
cluster, and does not justify a universal graph-layout rule.

Knowledge Candidate: **YES - HYPOTHESIS ONLY**. No `ai-knowledge` file was
created or changed. Promotion requires independent confirmation or an explicit
project decision.

## Decision and next checkpoint

The result is **CASE 6 / EXACT RESULT 2 / DECISION D**:

- isolated Lighthouse geometry needs a per-motif quality description;
- Ashen requires the same motif layer plus shared-Node and cluster context;
- P1 packing is informative but is not the primary objective;
- P2 shape and P4 chord bottlenecks are the most direct local geometry signals;
- P3 is required for overlapping motifs;
- P5 is context and must not silently enlarge the adjustment scope;
- no single score, threshold, causal force, or candidate rule is supported.

The selected next bounded checkpoint is exactly:

`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-MOTIF-CLUSTER-QUALITY-CRITERIA-VALIDATION1`

That checkpoint should validate the two-layer descriptive profile against
additional samples or controlled states, including at least one no-motif
control and, if available, more than one disconnected motif cluster. It should
continue to keep labels, routes, locale, and rendered text outside the source
quality selector unless a separate downstream presentation audit explicitly
adds them.

## Cleanup and validation

- temporary motif-cluster harness and JSON/summary output: removed;
- temporary worktree: removed;
- LiaisonScape source, Production Initial Placement, routing, feedback,
  labels, samples, and `seededPositions`: unchanged;
- preview changes: preserved;
- protected session: preserved and unstaged;
- existing dirty sample paths: preserved.

Validation gates:

- LiaisonScape `npm.cmd test`: **280/280 passed**;
- LiaisonScape `npm.cmd run lint`: passed;
- LiaisonScape `npm.cmd run build`: passed;
- LiaisonScape `git diff --check`: passed;
- e2r-spec `npm.cmd run validate`: passed;
- e2r-spec diff checks: passed;
- localhost `http://127.0.0.1:5173/e2r-liaison-scape/`: HTTP 200.

The e2r-spec checkpoint commit is:

```text
docs: audit LiaisonScape motif cluster quality criteria
```

It remains unpushed.
