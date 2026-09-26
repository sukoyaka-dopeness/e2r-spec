# LiaisonScape Initial-placement Shared-neighbor Role Symmetry Audit

Date: 2026-09-01
Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SHARED-NEIGHBOR-ROLE-SYMMETRY-AUDIT1`

## Outcome

Result: **CASE 10 / EXACT RESULT 5 / DECISION G**.

> **MIXED - LIGHTHOUSE HAS A SOURCE-GROUNDED ORDERED ROLE, WHILE ASHEN
> SUPPORTS ONLY A MOTIF-LEVEL CONDITION**

The audit answers the critical question as follows:

- A unique W role is supported for the observed Lighthouse motif by an exact
  structural invariant: the Clara-Thomas endpoint pair has ordinary Relation
  multiplicity two, while the other two pairs have multiplicity one.
- A unique semantic W is not established for the Ashen
  `Darius / Elara / Kael` motif. Its three Nodes are structurally
  distinguishable, but the source does not state that one of those structural
  roles is the placement target W.
- The prior ordered-role model therefore creates a false choice for motifs
  whose geometric deficiency is motif-wide. The unordered motif is the safer
  representation boundary; it does not itself authorize a movement rule.
- Overlapping motifs make connected-component scope too coarse in Ashen.

The exact next checkpoint is:

`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SHARED-NEIGHBOR-ADJUSTMENT-SCOPE-AUDIT1`

It is selected only. No placement candidate, Node movement, route change,
label change, feedback change, or Production adoption was made here.

## Start state and preservation

The audit used the current application source and sample files as read-only
evidence. It created the detached diagnostic clone
`C:\Users\extra\E2R\e2r-liaison-scape-shared-neighbor-role-symmetry-audit`
for the temporary harness and removed it after capture.

- LiaisonScape main reference: `fd563340625fd3d88dc25baedc93c4f8fe69e5e7`.
- LiaisonScape main branch: `main`, tracking `origin/main`, five commits
  ahead at start.
- Existing dirty LiaisonScape paths were only
  `public/lighthouse-restoration-demo.en.e2r.json` and
  `public/lighthouse-restoration-demo.ja.e2r.json`; they were not edited,
  restored, normalized, staged, or committed.
- e2r-spec starting HEAD: `3932658`; its only pre-existing dirty path was the
  protected `sessions/E2R-Session-0052.md`.
- The protected session was not edited, staged, restored, reset, or committed.
- The protected `ai-knowledge/playbooks/e2r-edge-cdp-browser-diagnostic.md`
  was not changed.
- The read-only preview had pre-existing modifications in `src/App.tsx` and
  `src/viewport.ts`; they were preserved.
- The running localhost was not restarted and remained HTTP 200.
- No LiaisonScape commit or preview commit was created. No push, tag, release,
  deploy, or publication was performed.

## General-layout boundary

The audit treats the E2R Core as the source of structural facts: Entity
existence and directed Relation connections. The Core does not assign domain
meaning to Relation direction, and it does not define presentation or
placement behavior. Consequently, the audit can use exact Relation direction,
multiplicity, self-loop presence, and adjacency as observed structural
descriptors, but it cannot promote a Node name, label, locale, stored “good”
coordinate, or screenshot into a general W semantic.

The following were explicitly excluded:

- Maya, Kael, or any Entity-ID special case;
- lexical ID as semantics;
- sample or locale branches;
- label-, route-, feedback-, or presentation-aware target selection;
- a new numeric, weighted, learned, or fitted score;
- geometry threshold fitting;
- displacement, force, iteration, attraction, repulsion, or target-edge-length
  changes;
- `seededPositions` and Production source changes.

## Reproduction gate

The previous target-selection inventory was reproduced without moving Nodes:

| sample | eligible ordered roles | diagnostic/reference role | generic minimum-line W |
|---|---:|---|---|
| Lighthouse JA/EN | 3 | `(Clara, Thomas; Maya)` | Clara |
| Ashen Crown JA/EN | 21 | `(Darius, Elara; Kael)` | Elara |

The Lighthouse Clara-Thomas pair has multiplicity two. Ashen has one ordinary
Relation for every eligible endpoint pair, including the reference pair. The
minimum W-to-line selector therefore still disagrees with both diagnostic
references. The reproduction gate passes and the failure is a target-role
interpretation problem, not a failed inventory.

## Ordered and unordered models

The bounded ordered role is `(U,V;W)`:

- `U`, `V`, and `W` are distinct;
- U and V are directly Entity-adjacent;
- W is directly Entity-adjacent to both U and V;
- self-relations do not establish shared-neighbor membership;
- U/V display order is canonicalized for reporting only and has no semantic
  meaning.

The unordered motif collapses the three W hypotheses for the same three Nodes:

`M = {A, B, C}`

The motif retains its Node IDs, internal Relation inventory, directed
Relation inventory, ordinary multiplicity, self-loop inventory, external
direct neighbors, and ordered role hypotheses as diagnostic projections. This
collapse removes duplicate representation; it does not invent a placement
target.

## All-available motif inventory

The live inventory covered the same 15 `.e2r.json` files used by the preceding
audits. Entity relations include only Relations with two Entity endpoints.

| logical sample | files | Entity relations/file | unordered motifs/file | ordered roles/file | motif class |
|---|---:|---:|---:|---:|---|
| LiaisonScape Lighthouse public | 2 | 14 | 1 | 3 | P: 1 |
| LiaisonScape coordinate prototype | 1 | 2 | 0 | 0 | none |
| LiaisonScape Linkscape relation | 1 | 6 | 1 | 3 | O: 1 |
| NarrativeLine Berlin Wall | 2 | 7 | 0 | 0 | none |
| NarrativeLine event/entity manual | 1 | 0 | 0 | 0 | none |
| e2r-spec Apollo 11 | 2 | 11 | 0 | 0 | none |
| e2r-spec Ashen Crown | 2 | 17 | 7 | 21 | O: 7 |
| e2r-spec Lighthouse | 2 | 14 | 1 | 3 | P: 1 |
| e2r-spec Titanic | 2 | 12 | 0 | 0 | none |

The exhaustive live totals are **19 unordered motifs and 57 ordered roles**:

- 4 P motifs / 12 P ordered roles;
- 15 O motifs / 45 O ordered roles;
- 19 motifs with three ordered role hypotheses each;
- no two-role or one-role motif occurred in this inventory.

The preceding bounded Class P/Class O instance count of 4/50 is retained as a
separate historical bounded inventory. It counted selected eligible instances,
not the exhaustive three-per-motif role projection used here.

For the conservative source-grounded W viability gate used in this audit:

| viability | meaning in this audit | motif count |
|---|---|---:|
| W1 | an exact observed endpoint-pair multiplicity identifies the opposite Node as W | 4 |
| W2 | a structural role class narrows W but leaves multiple Nodes | 0 |
| W3 | no source-grounded W assignment; retain an unordered motif | 15 |
| W4 | not applicable because there is no ordered role | 0 |

W1 is a narrow diagnostic class, not a general E2R semantic rule. O motifs
are W3 even where their Nodes have different degrees or directed signatures:
being distinguishable is not the same as being designated W.

## Symmetry classes

Symmetry was evaluated categorically, not with a similarity score. For each
Node, the harness retained:

- internal outgoing/incoming counts to each other motif Node;
- internal pair multiplicities and self-loop count;
- distinct external neighbor count and external in/out counts;
- external neighbor degree multiset;
- external parallel participation and the number of motif Nodes sharing each
  external neighbor.

The local classes are:

- **SYM0:** all three Nodes structurally distinguishable;
- **SYM1:** one unique Node and two equivalent Nodes;
- **SYM2:** all three locally equivalent;
- **SYM3:** directed internal structure breaks an otherwise apparent symmetry;
- **SYM4:** external one-hop structure breaks internal symmetry;
- **SYM5:** mixed or partial evidence.

Across the 19 live motifs the distribution is:

| class | count |
|---|---:|
| SYM0 | 15 |
| SYM1 | 0 |
| SYM2 | 0 |
| SYM3 | 0 |
| SYM4 | 4 |
| SYM5 | 0 |

This means literal Node automorphism is absent in the observed motifs. The
important ambiguity is different: an asymmetric triangle still has three
possible ordered interpretations, and the source does not necessarily say
which vertex should be W.

## Lighthouse motif

The Lighthouse motif is `{Clara, Maya, Thomas}` and collapses three ordered
roles into one unordered motif. JA and EN are identical for every descriptor.

### Internal and external signatures

| Node | internal directed signature | external one-hop summary | structural status |
|---|---|---|---|
| Clara | outgoing to Maya: 1; outgoing to Thomas: 2; incoming: 0 | 3 external neighbors with degrees 1, 2, 3 | unique |
| Maya | incoming from Clara and Thomas: 1 each; outgoing: 0 | 1 external neighbor of degree 2 | unique |
| Thomas | incoming from Clara: 2; outgoing to Maya: 1 | no external neighbor | unique |

The Clara-Thomas pair has two ordinary Relations, directed Clara to Thomas;
the Clara-Maya and Thomas-Maya pairs have one each. This exact categorical
asymmetry identifies the endpoint pair and leaves Maya as the opposite role.
Within this observed motif, Lighthouse therefore has a topology-distinguishable
ordered role:

`(Clara, Thomas; Maya)`

The result is SYM0, not because the Nodes are interchangeable, but because all
three are structurally unique. The ordered W role is nevertheless supported by
the unique pair multiplicity. This is an application-level structural
invariant; it does not add Relation meaning to the E2R Core.

### Lighthouse geometry stability

The stored and current auto states of the e2r-spec Lighthouse support sample
were compared without using stored coordinates as selector input.

| state | sorted side lengths | area | minimum altitude | angle range | side max/min |
|---|---|---:|---:|---:|---:|
| stored | 170.000, 304.138, 323.110 | 25,512 approx. | 157.841 approx. | 31.264-80.538 deg | 1.901 |
| auto | 128.217, 163.908, 291.114 | 1,753 approx. | 12.047 | 4.215-170.393 deg | 2.270 |

The smallest-altitude vertex changes between stored and auto geometry. The
minimum-line selector chooses Clara in auto geometry, while the reference role
uses Maya. Geometry ranks vertices, but its rank is not a stable semantic W.

## Ashen support motif

The Ashen support motif is `{Darius, Elara, Kael}`. JA and EN have identical
topology and geometry. Its internal directed Relation inventory is:

- Darius to Elara: 1 (`r11`);
- Darius to Kael: 1 (`r10`);
- Kael to Elara: 1 (`r15`);
- reverse counts: 0 for each pair;
- self-loop count: 0 for each Node.

The internal direction distinguishes Darius as the source-side branch, Elara
as the sink, and Kael as the intermediate directed role. External one-hop
signatures also distinguish all three. The exact full local signatures are
therefore SYM0. That distinction still does not establish Kael as W: no source
field states that the intermediate role, the branch, or the sink is the
shared-neighbor placement target.

The four Ashen ordered roles sharing the reference topology signature are:

`Darius / Elara / Kael`, `Darius / Rowan / Kael`,
`Elara / Garrick / Kael`, and `Garrick / Mira / Kael`.

The reference role is therefore not unique under the bounded local signature
when the surrounding motif inventory is considered. Kael is structurally
distinguishable in the support triangle, but a canonical semantic W is **not
established**. Darius and Elara are likewise not established as W.

### Ashen geometry stability

| state | sorted side lengths | area | minimum altitude | angle range | side max/min |
|---|---|---:|---:|---:|---:|
| stored | 190.000, 240.000, 306.105 | 22,800 | 148.969 approx. | 38.367-90.000 deg | 1.611 |
| auto | 85.943, 104.350, 112.483 | 4,259 approx. | 75.710 | 46.514-71.731 deg | 1.309 |

The geometry-only minimum-altitude vertex changes from the stored support
triangle to the current auto triangle. The auto minimum-line selector chooses
Elara as W, not Kael. This is negative evidence for a stable geometry-selected
semantic W and positive evidence that the condition should first be described
at motif level.

## Maya and Kael boundaries

The historical Maya movement result is not a canonical-W proof. It shows that
moving the Maya coordinate changed a presentation outcome on one stored
Lighthouse path. It does not distinguish “Maya is W” from “the whole triangle
became more open” without a role-independent motif descriptor.

The Ashen `Darius / Elara; Kael` row is a diagnostic support reference only.
Kael was not moved in this audit, and the evidence does not justify a Kael
special case or a general source-semantic claim.

## Motif-level geometry

The stored-to-auto comparisons support recording triangle-level descriptors
without selecting W:

- sorted side lengths;
- triangle area;
- minimum altitude across the three vertices;
- minimum and maximum interior angle;
- side-length max/min ratio;
- minimum external Node-body clearance.

These are diagnostic descriptors only. They do not define a numeric threshold,
quality score, or displacement. The current evidence supports a motif-level
description **partially**: Lighthouse has an ordered structural invariant,
while Ashen demonstrates that the useful geometry can be discussed without
calling Kael canonical.

## Overlap and adjustment scope

Lighthouse has one unordered motif, one overlap cluster, three Nodes, and no
overlap with another motif in its component.

Ashen has seven unordered motifs per locale, all connected through one overlap
cluster. The largest cluster contains all seven motifs and nine Nodes. Six
Nodes belong to multiple motifs. It contains 21 ordered roles, nine distinct
W IDs, and 15 distinct endpoint pairs.

Consequently, “one ordered triplet per connected component” is not a safe
semantic scope for Ashen. “One unordered motif” removes permutation
duplication, but overlapping motifs still require a separate scope decision.
The connected component is too broad, while an arbitrary lexical motif is too
narrow and order-dependent. The appropriate scope remains unresolved and is
the subject of the next checkpoint.

## Directed evidence and source semantics

Directed evidence breaks the apparent symmetry of the Lighthouse motif and
also distinguishes the Ashen Nodes. It does not by itself assign a semantic W
in Ashen. Relation direction is structural in E2R Core and its domain meaning
is delegated to Extensions or Applications; the audit does not infer a
placement role from relation names or natural-language labels.

No weighted direction pattern, composite score, graph-automorphism solver, or
learned semantic inference was introduced.

## Generality within the available evidence

Within the available 15-file inventory, role-symmetric in the semantic-W sense
is common: all 15 O motifs lack an explicit source-grounded W assignment,
although their Nodes are often structurally distinguishable. Literal local
automorphism was not common: SYM0 accounts for 15 of 19 motifs and SYM4 for
the remaining four.

This is evidence about the available E2R sample inventory only. It is not a
claim about the general graph population. The reusable hypothesis worth
retaining is narrowly stated:

> Shared-neighbor geometry may need an unordered motif representation before
> an application chooses an adjustment scope or a target vertex.

This remains repository-scoped research, not an ai-knowledge Decision or a
general graph-layout rule.

## Decision and next checkpoint

The dominant result is **CASE 10 / EXACT RESULT 5 / DECISION G**:

- Lighthouse supports an ordered role through exact endpoint-pair
  multiplicity;
- Ashen supports a motif-level condition but not a source-grounded unique W;
- Node structural distinguishability does not imply semantic W identity;
- role symmetry in the semantic sense and overlapping adjustment scope are
  both material;
- geometry ranks vertices but does not provide a stable semantic W;
- no numeric threshold or displacement is justified.

The next checkpoint is exactly:

`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SHARED-NEIGHBOR-ADJUSTMENT-SCOPE-AUDIT1`

It should compare unordered-motif scope with overlapping-motif-cluster scope
without moving Nodes or implementing a candidate. It must not return to
best-W selection until scope is defined. If scope cannot be grounded, the
one-W initial-placement model should be recorded as unsupported for the
available evidence.

## Cleanup and validation

- ordered-role, unordered-motif, symmetry, geometry, and overlap harnesses:
  removed;
- generated JSON/CSV/output and copied samples: removed;
- temporary worktree: removed;
- LiaisonScape Production source, routing, feedback, labels, samples, and
  `seededPositions`: unchanged;
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
docs: audit LiaisonScape shared-neighbor role symmetry
```

It remains unpushed.
