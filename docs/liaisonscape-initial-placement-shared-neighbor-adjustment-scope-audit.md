# LiaisonScape Initial-placement Shared-neighbor Adjustment Scope Audit

Date: 2026-09-01
Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SHARED-NEIGHBOR-ADJUSTMENT-SCOPE-AUDIT1`

## Outcome

Result: **CASE 2 / EXACT RESULT 2 / DECISION A**.

> **DIRECTION SUPPORTED - AN OVERLAP-CLUSTER SCOPE PROVIDES ONE LOCAL MODEL
> FOR BOTH ISOLATED MOTIFS AND OVERLAPPING MOTIFS**

The natural source-side adjustment scope is the connected component of the
unordered motif-overlap graph:

- an isolated unordered motif is a cluster containing one motif;
- motifs sharing Entity Nodes belong to the same cluster;
- a component with no motif has no shared-neighbor adjustment scope;
- disconnected motif groups remain separate clusters.

This is a representation and scope result only. It does not define a quality
threshold or a movement rule. The stored-to-auto geometry shows why the scope
matters: the Lighthouse support motif is isolated, while five of Ashen's
seven overlapping motifs compress together. A one-motif-at-a-time adjustment
would not represent the shared Node state and could become order-dependent.

The next checkpoint is exactly:

`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-MOTIF-CLUSTER-QUALITY-CRITERIA-AUDIT1`

It is selected only. No Node movement, candidate displacement, force change,
or Production implementation was made by this audit.

## Start state and preservation

The audit used current source and sample data read-only and created the
temporary diagnostic clone:

`C:\Users\extra\E2R\e2r-liaison-scape-shared-neighbor-adjustment-scope-audit`

The clone contained only diagnostic harnesses and was removed after capture.

- LiaisonScape reference HEAD: `fd563340625fd3d88dc25baedc93c4f8fe69e5e7`.
- LiaisonScape was on `main`, tracking `origin/main`, five commits ahead.
- Pre-existing dirty sample paths were
  `public/lighthouse-restoration-demo.en.e2r.json` and
  `public/lighthouse-restoration-demo.ja.e2r.json`; neither was edited,
  restored, normalized, staged, or committed.
- e2r-spec started at `c05b396`.
- The only pre-existing e2r-spec dirty path was the protected
  `sessions/E2R-Session-0052.md`; it was not edited, staged, restored, reset,
  or committed.
- The protected `ai-knowledge/playbooks/e2r-edge-cdp-browser-diagnostic.md`
  was unchanged.
- The read-only preview had pre-existing changes in `src/App.tsx` and
  `src/viewport.ts`; they were preserved.
- The running localhost was not restarted and remained HTTP 200.
- No LiaisonScape commit, preview commit, push, tag, release, deploy, or
  publication was made.

## Scope boundary

The audit distinguishes three structural scopes:

- **SCOPE-M:** one unordered motif;
- **SCOPE-C:** one connected component of the motif-overlap graph;
- **SCOPE-G:** the whole Entity connected component.

An unordered motif is a set of three distinct Entity Nodes whose three
unordered Node pairs each have at least one direct Entity Relation. Self-
Relations do not create membership. Motif overlap exists when two motifs share
at least one Entity Node. The overlap graph has motifs as vertices and shared
Nodes as edges; its connected components are overlap clusters.

This scope is based only on Entity topology. Names, natural-language meaning,
locale, labels, routes, stored “good” coordinates, and sample identity are not
scope-selector inputs. Relation direction and multiplicity remain diagnostic
motif descriptors, not a weighted scope score.

## Reproduction gate

The preceding role-symmetry inventory was reproduced:

| sample | unordered motifs | ordered roles | overlap clusters | cluster Nodes | multi-motif Nodes |
|---|---:|---:|---:|---:|---:|
| Lighthouse JA/EN | 1 | 3 | 1 | 3 | 0 |
| Ashen Crown JA/EN | 7 | 21 | 1 | 9 | 6 |
| all available files | 19 | 57 | per-file inventory below | - | - |

The gate passes. The audit did not stop for an inventory mismatch.

## All-sample scope inventory

The inventory covers the same 15 files as the preceding checkpoints. Relation
counts in this table are Entity-to-Entity Relation counts for the connected
components; Event-only Relations remain in the Dataset total but are not part
of the Entity graph.

| logical sample | locale/files | Entity components | component Node counts | component Entity Relation counts | motifs | overlap clusters | cluster Node counts |
|---|---|---:|---|---|---:|---:|---|
| LiaisonScape Lighthouse public | JA/EN, 2 | 1 each | 10 | 14 | 1 | 1 | 3 |
| LiaisonScape coordinate prototype | N/A, 1 | 1 | 3 | 2 | 0 | 0 | - |
| LiaisonScape Linkscape relation | N/A, 1 | 1 | 5 | 6 | 1 | 1 | 3 |
| NarrativeLine Berlin Wall | JA/EN, 2 | 2 each | 8 + 1 | 7 + 0 | 0 | 0 | - |
| NarrativeLine event/entity manual | N/A, 1 | 2 | 1 + 1 | 0 + 0 | 0 | 0 | - |
| e2r-spec Apollo 11 | JA/EN, 2 | 1 each | 9 | 11 | 0 | 0 | - |
| e2r-spec Ashen Crown | JA/EN, 2 | 1 each | 10 | 17 | 7 | 1 | 9 |
| e2r-spec Lighthouse | JA/EN, 2 | 1 each | 10 | 14 | 1 | 1 | 3 |
| e2r-spec Titanic | JA/EN, 2 | 2 each | 12 + 1 | 12 + 0 | 0 | 0 | - |

The 19 motifs are therefore 4 Lighthouse P motifs, 14 Ashen O motifs, and
one Linkscape O motif. Components with zero motifs naturally produce no
shared-neighbor scope: the coordinate prototype, Berlin Wall, manual
event/entity sample, Apollo 11, and Titanic controls.

No sample contains more than one separate motif-overlap cluster inside a
single Entity connected component. That absence limits the available evidence
for comparing multiple cluster execution order, but it does not invalidate
the structural rule that disconnected overlap clusters would remain
separate.

## Lighthouse scope

The Lighthouse motif is:

`{Clara, Maya, Thomas}`

It has one unordered motif, one one-motif overlap cluster, three cluster Nodes,
and one Entity connected component containing ten Nodes. The motif has no
overlap degree and no shared Node with another motif. Its induced motif/cluster
subgraph has four Entity Relations, while four Relations cross from the motif
to `Beacon`, `Daniel`, `Elias`, and `Lighthouse`.

The scope classification is **M1: isolated motif**. Here SCOPE-M and SCOPE-C
are equivalent because a one-motif cluster is exactly one motif. SCOPE-C is
still strictly more local than SCOPE-G: it excludes seven component Nodes and
all unrelated component-only edges from the adjustment scope.

The stored-to-auto support geometry is recorded as motif evidence, not as a
selector:

| state | sorted side lengths | area | minimum altitude | angle range | side max/min | cluster bbox |
|---|---|---:|---:|---:|---:|---|
| stored | 170.000, 304.138, 323.110 | 25,500 | 157.841 | 31.264-80.538 deg | 170 x 300 |
| auto | 128.217, 163.908, 291.114 | 1,753.595 | 12.047 | 4.215-170.393 deg | 202.0 x 209.6 |

The triangle area and minimum altitude collapse, while the cluster bounding
box is mixed. This is a motif-level geometry observation and does not imply
that the entire ten-Node component should be adjusted.

## Ashen scope

The Ashen motifs are listed below. `M1` through `M7` are lexical inventory
identifiers only; they are not semantic priority values.

| motif | Nodes | overlap degree | shared Nodes with neighboring motifs | stored -> auto compression |
|---|---|---:|---|---|
| M1 | Darius / Elara / Kael | 6 | Darius, Elara, Kael | compressed |
| M2 | Darius / Elara / Nyra | 5 | Darius, Elara, Nyra | compressed |
| M3 | Darius / Kael / Rowan | 5 | Darius, Kael, Rowan | compressed |
| M4 | Darius / Nyra / Rowan | 3 | Darius, Nyra, Rowan | mixed |
| M5 | Elara / Garrick / Kael | 5 | Elara, Garrick, Kael | compressed |
| M6 | Elara / Selene / Vhalgrim | 3 | Elara, Selene | mixed |
| M7 | Garrick / Kael / Mira | 3 | Garrick, Kael, Mira | compressed |

The 15 overlap edges, with the shared Node in parentheses, are:

```text
M1-M2 (Darius, Elara)  M1-M3 (Darius, Kael)
M1-M4 (Darius)         M1-M5 (Elara, Kael)
M1-M6 (Elara)          M1-M7 (Kael)
M2-M3 (Darius)         M2-M4 (Darius, Nyra)
M2-M5 (Elara)          M2-M6 (Elara)
M3-M4 (Darius, Rowan)  M3-M5 (Kael)
M3-M7 (Kael)           M5-M6 (Elara)
M5-M7 (Garrick, Kael)
```

All seven motifs form one overlap cluster of nine Nodes:

`{Darius, Elara, Garrick, Kael, Mira, Nyra, Rowan, Selene, Vhalgrim}`

The full Ashen Entity component has ten Nodes. `Ilyan` is outside the cluster
but is connected to it by two boundary Relations (`Selene-Ilyan` and
`Ilyan-Mira`). The cluster induces 15 Entity Relations out of the component's
17 and leaves two boundary Relations. It is therefore materially more local
than the whole component, while retaining every motif and every shared Node
that participates in the observed overlap state.

The six Nodes belonging to multiple motifs are:

| Node | motif membership count |
|---|---:|
| Darius | 4 |
| Elara | 4 |
| Kael | 4 |
| Garrick | 2 |
| Nyra | 2 |
| Rowan | 2 |

Selene, Vhalgrim, and Mira belong to one motif each. The overlap shape is
classified **O4: densely overlapping** for this bounded inventory: one
cluster, seven motifs, 15 overlap edges, and overlap degrees
`6, 5, 5, 5, 3, 3, 3`. This is a categorical description, not a centrality
score.

The scope classification is **M2: overlapping cluster is local**. The
connected component is too broad because it includes Ilyan and two boundary
Relations not needed to enumerate the seven motifs. A single motif is too
narrow because five motifs show the same stored-to-auto compression pattern
and six Nodes are shared across motif boundaries.

## Motif and cluster independence

An isolated motif has no shared Node with another motif and can be represented
as a one-motif cluster. A shared Node is enough to reject the assumption that
two motif adjustments are independent; no arbitrary numeric threshold is
needed for this structural observation.

| scope situation | available evidence | independence result |
|---|---|---|
| Lighthouse | one isolated motif | SCOPE-M is independent of other motifs; cluster of one |
| Ashen | seven overlapping motifs; six Nodes in multiple motifs | one-motif independence not supported |
| zero-motif components | no eligible motifs | shared-neighbor scope is NONE |

If two Ashen motifs were processed sequentially and both affected a shared
Node, the second operation could see geometry changed by the first. This is a
structural order-dependence risk. No movement was executed, so the audit does
not claim an observed movement regression or prove a particular update order.

The boundary is graph-topological overlap, not screen-space collision. Motif
overlap means shared graph Nodes; it does not mean that rendered rectangles
intersect.

## Stored-to-auto compression by scope

The following comparison uses the stored and current auto coordinates of the
clean e2r-spec Lighthouse and Ashen samples. Public dirty Lighthouse controls
were retained as neutral controls and are not used as the favorable stored
state.

### Lighthouse

The single motif is compressed in triangle area, minimum altitude, and all
three sorted side lengths. Its cluster bounding box is mixed, so the result is
**C1 motif-local compression**, not whole-component compression.

### Ashen

The per-motif results are:

| motif | stored area -> auto area | stored min altitude -> auto | stored ratio -> auto ratio | classification |
|---|---:|---:|---:|---|
| M1 Darius/Elara/Kael | 22,800 -> 4,258.044 | 148.969 -> 75.710 | 1.611 -> 1.309 | compressed |
| M2 Darius/Elara/Nyra | 22,800 -> 7,108.666 | 125.415 -> 55.639 | 1.796 -> 2.272 | compressed |
| M3 Darius/Kael/Rowan | 29,450 -> 10,722.781 | 190.000 -> 79.580 | 1.531 -> 3.136 | compressed |
| M4 Darius/Nyra/Rowan | 13,300 -> 13,776.802 | 70.000 -> 102.246 | 1.877 -> 2.491 | mixed |
| M5 Elara/Garrick/Kael | 22,800 -> 7,755.761 | 148.969 -> 83.631 | 1.611 -> 1.777 | compressed |
| M6 Elara/Selene/Vhalgrim | 24,000 -> 22,783.249 | 120.000 -> 141.572 | 1.780 -> 2.048 | mixed |
| M7 Garrick/Kael/Mira | 29,450 -> 9,379.895 | 190.000 -> 79.848 | 1.531 -> 2.247 | compressed |

Five of seven overlapping motifs are compressed and two are mixed. This is
**C2 multiple-overlapping-motif compression with a mixed cluster result**;
the overall evidence is **C4 mixed** because not every motif changes in the
same direction. The Ashen cluster bounding box changes from `620 x 590` to
`457.394 x 304.833`, while the whole component has the same bounding boxes
because only Ilyan lies outside the cluster. This does not establish a causal
whole-component force or blame the attraction coefficient.

The bounded node-packing hypothesis is therefore **PARTIAL**: multiple local
triangles become more compact in auto placement, but the present audit cannot
separate seeding, attraction, repulsion, and settling effects. In particular,
“attraction 0.018 is the cause” is **not supported** here.

## Scope rule comparison

| criterion | RULE A: each motif | RULE B: overlap cluster | RULE C: whole component |
|---|---|---|---|
| source-grounded | yes, as motif membership | yes, as overlap connectivity | yes, but includes unrelated branches |
| deterministic | yes | yes; lexical order only execution tie-break | yes |
| duplicate-free | no without extra overlap handling | yes for one cluster state | yes, but loses motif boundary |
| preserves shared-Node relationships | partial; sequential risk | yes | yes, but over-expands scope |
| isolates unrelated graph regions | yes | yes; Ashen excludes Ilyan | no; Ashen includes Ilyan |
| isolated motif support | yes | yes, cluster of one | no, too broad |
| zero-motif no-op | yes | yes | would need an unnecessary component pass |
| available evidence | insufficient for Ashen | best supported | too coarse for Ashen |

RULE B is the only one that gives isolated and overlapping motifs one unified
structural representation without requiring a special case for Lighthouse or
Ashen. It is selected as the scope model, not as an implementation instruction
to move every Node in the cluster.

## Presentation-state boundary

Labels, routes, locale, and H2 are not scope selector inputs. Prior route and
label replays remain useful for explaining downstream safety, but they do not
decide whether two motifs share a source-side adjustment scope. The stored
coordinates are presentation comparison evidence, not hidden semantic input.

## Generality and knowledge candidate

Within the available inventory, overlap clustering is a reusable graph-
structural concept: it is defined by motif membership and shared Nodes and
does not depend on LiaisonScape labels or rendering. The generality result is
**PARTIAL**:

- the concept is plausibly reusable outside LiaisonScape;
- the available evidence is small and contains no multi-cluster component;
- no universal graph-layout solution is claimed;
- no claim is made that cluster-level geometry must use the same quality
  condition in every application.

Knowledge Candidate: **YES - HYPOTHESIS ONLY**. No `ai-knowledge` file was
created or changed. Promotion would require independent confirmation or an
explicit project decision.

## Decision and next checkpoint

The result is **CASE 2 / EXACT RESULT 2 / DECISION A**:

- overlap-cluster scope is supported by source-side topology;
- a one-motif cluster naturally represents an isolated motif;
- Ashen's seven overlapping motifs are more local than its ten-Node component;
- five overlapping motifs compress together, so one-motif repair is incomplete;
- scope is now selected, but geometric quality remains under-specified;
- no Node movement, numeric score, threshold, force tuning, or candidate was
  implemented.

The selected next checkpoint is exactly:

`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-MOTIF-CLUSTER-QUALITY-CRITERIA-AUDIT1`

That checkpoint should define a source-independent geometric quality
condition for an unordered motif cluster without moving Nodes or fitting a
numeric threshold. It should measure compression and usable local geometry,
retain shared-Node state, and continue to exclude labels and routes from the
scope/quality input boundary.

## Cleanup and validation

- motif inventory harness: removed;
- overlap graph harness: removed;
- cluster descriptor harness: removed;
- geometry comparison harness: removed;
- generated JSON/summary output and copied samples: removed;
- temporary worktree: removed;
- LiaisonScape Production Initial Placement, routing, feedback, labels,
  samples, and `seededPositions`: unchanged;
- preview: unchanged;
- protected session: preserved and unstaged;
- existing dirty sample paths: preserved.

Validation gates:

- LiaisonScape `npm.cmd test`: **280/280 passed**;
- LiaisonScape `npm.cmd run lint`: passed;
- LiaisonScape `npm.cmd run build`: passed;
- LiaisonScape `git diff --check`: passed;
- e2r-spec `npm.cmd run validate`: passed;
- e2r-spec working-tree and cached diff checks: passed;
- localhost `http://127.0.0.1:5173/e2r-liaison-scape/`: HTTP 200.

The e2r-spec checkpoint commit is:

```text
docs: audit LiaisonScape shared-neighbor adjustment scope
```

It remains unpushed.
