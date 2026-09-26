# LiaisonScape Initial-placement Motif-cluster Bottleneck Origin Audit

Date: 2026-09-01

Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-MOTIF-CLUSTER-BOTTLENECK-ORIGIN-AUDIT1`

## Outcome

Result: **CASE 7 / EXACT RESULT 5 / DECISION F**.

> **DIRECTION SUPPORTED - CURRENT SEED QUALITY IS DETERMINISTIC BUT
> SENSITIVE TO TOPOLOGY-TIE / ID-ASSIGNMENT STRUCTURE**

The primary origin of the observed exact seed bottlenecks is the current
deterministic seed assignment: degree ranking is followed by lexical ID order,
and the resulting rank selects fixed angular slots. Renaming IDs while keeping
the graph isomorphic changes the seed assignment and removes Lighthouse's
exact triangle collinearity and Ashen's exact zero-gap fan-out. Reversing input
arrays does not change the result.

Settling is a distinct secondary origin. It partially recovers Lighthouse's
seed-born exact degeneracy and produces mixed motif/fan-out improvement and
deterioration in Ashen. It is not the primary source of Lighthouse's exact
collapse. Component packing does not materially create the bottlenecks in the
observed one-component traces.

No seed algorithm, slot rule, radius, phase, coefficient, force, threshold,
score, semantic W, or Production movement was introduced. The selected next
checkpoint is exactly:

`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-ASSIGNMENT-STABILITY-AUDIT1`

It is selected only.

## Start state and preservation

The audit used the current source at:

`fd563340625fd3d88dc25baedc93c4f8fe69e5e7`

The source-equivalent diagnostic clone exposed the current coordinate-less
pipeline as:

1. Dataset and Entity input;
2. component discovery;
3. degree-ranked seed construction;
4. settling for three iterations;
5. component packing; and
6. final Derived positions.

The local `seededPositions` variable in `App.tsx` belongs to the stored or
partially stored coordinate path. When no stored coordinates exist, the
coordinate-less path consumes `settleInitialPlacement` instead. No persisted
seed object or historical favorable coordinate is an activation input.

- LiaisonScape was on `main`, five commits ahead of `origin/main`.
- Existing dirty sample paths were preserved exactly:
  `public/lighthouse-restoration-demo.en.e2r.json` and
  `public/lighthouse-restoration-demo.ja.e2r.json`.
- e2r-spec started at `6e661f4`; protected
  `sessions/E2R-Session-0052.md` was not edited, staged, restored, reset, or
  committed.
- Preview changes in `src/App.tsx` and `src/viewport.ts` were preserved.
- The protected dirty `ai-knowledge` playbook was preserved and no knowledge
  entry was changed.
- The running localhost was not restarted.

## Source authority map

The relevant current rules in `src/auto-layout.ts` are:

- Entity IDs are deduplicated and sorted with `localeCompare`;
- self-relations are excluded from adjacency;
- parallel Relations collapse to one undirected adjacency pair;
- connected components are discovered from that adjacency;
- a component's rank is descending distinct-neighbor degree, then lexical ID;
- the rank-one Entity is placed at `(componentLeft + 160, 160)`;
- later ranks use angular slots `0, 45, 90, ...` degrees at radius
  `96 * 1.8 = 172.8`, with a second ring after eight slots; and
- settling applies the existing three bounded iterations with the current
  attraction and clearance mechanics.

These are source facts, not recommendations for a replacement algorithm.

## Reproduction gate

The current diagnostic reproduced the preceding evidence:

- Lighthouse: one triangle motif on `{clara, maya, thomas}`;
- Ashen Crown: seven triangle motifs, nine motif Nodes, one overlap cluster,
  and six shared Nodes;
- Lighthouse seed normalized minimum altitude: `0.000000`;
- Ashen seed: exact zero fan-out at Darius and Elara;
- Ashen settling: mixed local improvement and deterioration; and
- repeated evaluation and reversed input arrays: unchanged.

The available positive sample inventory contains 15 JSON files and 19
unordered motifs. At seed stage, 2 motifs are exactly degenerate (the JA/EN
Lighthouse pair), 17 are non-degenerate, and 4 locale-pair fan-out records
have an exact zero gap (the Ashen JA/EN pair). Zero-motif files produce no
origin profile.

Labels, routes, feedback, H2, locale text, and presentation are not inputs.

## Lighthouse exact seed origin

The source-ranked Lighthouse Entity roles are:

| Entity | distinct-neighbor degree | seed rank | slot | seed coordinate |
|---|---:|---:|---|---|
| Clara | 5 | 1 | center | `(160, 160)` |
| Lighthouse | 3 | 2 | `0` degrees | `(332.8, 160)` |
| Maya | 3 | 3 | `45` degrees | `(282.188052, 282.188052)` |
| Beacon | 2 | 4 | `90` degrees | `(160, 332.8)` |
| Elias | 2 | 5 | `135` degrees | `(37.811948, 282.188052)` |
| Sofia | 2 | 6 | `180` degrees | `(-12.8, 160)` |
| Thomas | 2 | 7 | `225` degrees | `(37.811948, 37.811948)` |

The motif `{Clara, Maya, Thomas}` has side lengths `172.8`, `172.8`, and
`345.6`, area `0`, and normalized minimum altitude `0`. Maya and Thomas occupy
the `45` and `225` degree slots, which are opposite rays from Clara. The
triangle is therefore exactly collinear before settling.

This is not caused by a global angular phase: phase probes at `0`, `22.5`, and
`45` degrees remain collinear because the two selected slots remain opposite.
It is caused by which tied/ranked Entities receive those slots.

## Lighthouse ID-rename and order results

An isomorphic rename maps the original IDs in reverse lexical order to
`n10 ... n01`, preserving topology, degree, and Relation structure. The
renamed Lighthouse motif is no longer degenerate and has normalized altitude
`0.500000`. Seed coordinates also change. Thus the exact collapse is not
isomorphism-stable.

Reversing Entity and Relation arrays preserves seed coordinates and the exact
degeneracy count. Array order is not the cause; lexical ID assignment is.

Lighthouse origin classes:

- **O2: seed tie-break / slot assignment artifact** — primary mechanism;
- **O5: seed-born and settling-partially-recovers** — lifecycle description;
- O7 component packing — not supported.

## Ashen seed origin

Ashen's degree-ranked seed begins with Elara at the center, followed by Kael,
Darius, and lexical ordering within the degree-three and degree-two tie groups.
All seven triangle motifs are non-degenerate at seed, but the shared-Node
fan-out inventory contains exact zero gaps at:

| shared Node | seed rays with a zero gap |
|---|---|
| Darius | `elara`, `kael`, `nyra`, `rowan` |
| Elara | `darius`, `garrick`, `kael`, `nyra`, `selene`, `vhalgrim` |

The other seed fan-out minima are `22.5` degrees at Kael, Nyra, and Rowan, and
`45` degrees at Garrick. The zero gaps are created by the discrete seed slots,
not by a route or label obstacle.

Settling removes the exact zero gaps, but it does not make the quality profile
monotonic. From seed to settling 1, 2, and 3, respectively, 3 of 7 motif
constraints worsen and 4 improve; fan-out constraints have 3 of 6 worsen and
3 improve at the first two transitions, then 4 worsen and 2 improve at the
third. For example, `{darius, elara, kael}` declines from normalized altitude
`0.707107` to `0.673078`, while `{garrick, kael, mira}` improves from
`0.400000` to `0.439856`.

An isomorphic ID rename removes Ashen's exact zero-gap records while changing
the seed coordinates. Input-array reversal does not. This makes lexical slot
assignment relevant to the seed-born exact fan-out, while overlap explains why
the effect appears as a cluster-level interaction.

Ashen origin classes:

- **O2: seed tie-break / slot assignment artifact** — exact zero-gap seed
  mechanism;
- **O6: mixed overlap interaction** — shared-Node coupling and settling
  tradeoffs;
- O3/O4 — settling creates or amplifies some non-exact local bottlenecks;
- O7 component packing — not supported.

## Seed mechanism factor matrix

| factor | used by current seed | exact collinearity / zero-gap capability | evidence | causal status |
|---|---|---|---|---|
| distinct-neighbor degree | yes | selects rank groups and center | Lighthouse/Ashen and controls | contributing structural factor |
| lexical ID tie-break | yes | changes tied Node-to-slot assignment | both real samples; rename removes exact cases | primary confirmed mechanism |
| fixed slot phase | yes | preserves opposite-slot relationship | Lighthouse phase probe | necessary geometry, not dominant selector |
| fixed ring radius | yes | preserves radial scale | source and controls | not shown to create exact cases alone |
| input array order | no material effect | no | reversed-order probes | rejected |
| self Relation | excluded | no | source rule | not a cause |
| Relation multiplicity/direction | not used by seed degree | no direct evidence | source rule | not a cause |
| component packing | translation after local geometry | no in one-component traces | packed/final equality | rejected |
| labels/routes/locale | not in seed input | no | source boundary | rejected |

The matrix attributes the source mechanism without attributing the result to
the current attraction coefficient, repulsion strength, or iteration count.

## Synthetic controls S0-S5

| control | seed observation | origin implication |
|---|---|---|
| S0 K3 | non-degenerate triangle; ranks `a,b,c` | K3 topology alone is insufficient |
| S1 K3 plus one pendant | center remains `a`; motif remains non-degenerate | one degree asymmetry need not collapse the motif |
| S2 K3 plus two pendants | center remains `a`; motif remains non-degenerate | pendant count alone is insufficient |
| S3 two triangles sharing `a` | non-degenerate motifs and `45` degree fan-out | overlap creates coupling without inevitable zero gap |
| S4 two triangles plus a bridge | two motifs remain separately identifiable | component connection does not prove shared-cluster origin |
| S5 path/tree | zero motifs and no activation profile | no false motif origin |

These controls reject a universal “all triangles collapse” claim. The real
failure requires a topology/tie pattern whose lexical assignment puts relevant
Nodes into opposite or coincident slots.

## Settling and packing boundary

Lighthouse's seed-to-final normalized altitude changes `0.000000 -> 0.041384`,
so settling moves away from exact degeneracy but leaves a severe near-collapse.
It does not justify the statement that settling caused the original exact
problem.

Ashen settling produces both worsening and improvement. That supports a later
settling-cause audit, but it does not overturn the earlier seed assignment
finding.

For the observed one-component traces, component packing leaves relative
motif geometry unchanged; `packed` and `final` profiles are equal. O7 is not
supported as an origin class here.

## Stability and generality

The seed is deterministic and input-order stable, but not ID-isomorphism
stable. The mechanism is not Lighthouse-only: it repeats in the Ashen exact
zero-gap fan-out family and disappears under an isomorphic ID rename. The
strongest generality classification is:

**D — generic only under certain topology/tie patterns**.

This is a current-seed construction consequence under particular rank and slot
relationships, not a universal graph-layout cause. It does not imply that
lexical ordering must immediately be removed; that is the subject of the next
stability audit.

## Causal boundary

Supported claims:

- the seed first creates Lighthouse exact collinearity;
- lexical tie assignment changes the exact seed result in both real families;
- settling recovers Lighthouse partially and produces mixed Ashen changes; and
- packing does not create the observed relative bottlenecks.

Not supported by this audit:

- “attraction `0.018` is the cause”;
- “repulsion is too weak”;
- “three iterations are wrong”;
- a preferred new radius, angle, phase, or seed algorithm; or
- a Production repair action.

Stored favorable coordinates remain comparison evidence only. They are not a
cause and are not a general activation reference.

## Decision and next checkpoint

The result is **CASE 7 / EXACT RESULT 5 / DECISION F**:

- the current seed is deterministic;
- ID renaming materially changes Node-to-slot assignment and exact bottleneck
  occurrence;
- input array order does not materially change the seed;
- Lighthouse exact collapse is seed-born and partially recovered by settling;
- Ashen combines seed assignment effects with overlap-coupled settling changes;
- component packing is not the origin in the observed traces; and
- seed assignment stability is the primary unresolved quality boundary.

The selected next checkpoint is exactly:

`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-ASSIGNMENT-STABILITY-AUDIT1`

Its purpose is to determine whether a source-independent, topology-grounded
and isomorphism-stable assignment semantics can be specified without semantic
Node roles, sample-specific ordering, or implementation. It must not change
the seed, remove lexical ordering, tune coefficients, or move Production Nodes.

Knowledge Candidate: **YES - HYPOTHESIS STRENGTHENED / REFINED**. No
`ai-knowledge` entry was created or changed; the evidence is a source audit and
controlled sample comparison, not an independent universal layout proof.

## Cleanup and validation

- temporary seed-tracing harness, stage observer, rename fixtures, synthetic
  controls, phase probes, generated output, and copied data: removed;
- temporary diagnostic clone: removed;
- Production seed, settling, routing, feedback, labels, and samples:
  unchanged;
- preview, protected Session, and dirty `ai-knowledge` state: preserved;
- no LiaisonScape commit, push, tag, release, deploy, or publication.

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
docs: audit LiaisonScape motif cluster bottleneck origin
```

It remains unpushed.
