ORDER-CONFLICT AUTHORITY RESOLUTION ONLY

NO PRODUCT SOURCE FIX
NO SETTLING REFACTOR
NO IMPLEMENTATION1B
NO CANONICALIZATION IMPLEMENTATION
NO ROUNDING
NO EPSILON/TOLERANCE
NO FLOAT NORMALIZATION
NO BASELINE REWRITE
NO BASELINE DELETION
NO SNAPSHOT UPDATE
NO EXPLICIT-SEED API
NO ROUTING/LABEL REFACTOR
NO HARNESS IMPLEMENTATION
NO CANDIDATE MATERIALIZATION
NO V0/V1/V2/V3
NO SCREENSHOT
NO BROWSER REVIEW
NO CANDIDATE COMPARISON
NO CANDIDATE SELECTION
NO PRODUCT CANDIDATE INTEGRATION
NO PR-3 CLAIM

# LiaisonScape Product Evaluation Seam Characterization Order Conflict Resolution1

## Checkpoint

- Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-CHARACTERIZATION-ORDER-CONFLICT-RESOLUTION1`
- Date: 2026-09-03
- Status: COMPLETE — AUTHORITY RESOLVED; PRODUCT CORRECTION NOT STARTED
- Input: Implementation1A result `deca20164aba1f00717f3ef9f8eaf29da6186848`
- Accepted historical Product source: `fd563340625fd3d88dc25baedc93c4f8fe69e5e7`
- CASE: 2
- Decision: B

This checkpoint resolves the meaning of Relation-array order. It does not
change the Product solver or its characterization artifacts.

## Authorities and protected state

The authority set is:

- canonical E2R specification: this repository;
- live Production: `C:/Users/extra/E2R/e2r-liaison-scape`;
- W-C characterization clone:
  `C:/Users/extra/E2R/e2r-liaison-scape-product-evaluation-seam-implementation1`;
- retained materializer clone:
  `C:/Users/extra/E2R/e2r-liaison-scape-production-candidate-materialization-implementation1`;
- historical Product source authority: `fd563340625fd3d88dc25baedc93c4f8fe69e5e7`;
- seam Design1: `76747fe278f643627214802529711e021b113965`;
- Implementation1A result: `deca20164aba1f00717f3ef9f8eaf29da6186848`;
- immutable visual role manifest: `docs/evidence/visual-fixture-role-manifest-v1.json`,
  raw SHA-256 `B867E9FF7B84107E8B4DDCCC02458B7B9AA535AB6FACE4AD10A2942CC8C8D8F5`.

`sessions/E2R-Session-0052.md` is closed and was not modified. The live
Production EN/JA Lighthouse sample changes were preserved and were not used as
authority. The retained materializer, fixture authorities, role manifest, and
the pre-existing dirty `ai-knowledge/playbooks/e2r-edge-cdp-browser-diagnostic.md`
were not modified.

## Implementation1A evidence carried forward

The characterization artifacts remain historical evidence of the Product
source at `fd563340...`:

| Artifact | SHA-256 |
| --- | --- |
| `auto-layout-baseline.json` | `B1DE52138AD878DB1A34FFA7823EC0415AF8CB32178D0DB318AF02F4EF9B5E48` |
| `routing-baseline.json` | `9084B156A2D016DD782A0F389A21F7D68B2EBC26ABF0A863EDD780063A796130` |
| `label-baseline.json` | `A90CC0F2ADC205A8D5BFDB376174E1183AC19A02F6EDD03B4016A6EA24661D73` |
| artifact index | `7EE63AE8B8566A6E2B10ED69A1DAC45FD8D8BDF4701CB10EA22E63BCB04A96EA` |
| characterization manifest | `A66596EA42FB92EBA84EEBB91DBDB68B122700E03AB7D0B5CFB20E9740838B11` |

The frozen corpus contains 16 EN/JA fixture variants. Same ordered input and
fresh-process replay pass. Node-array reversal is exact for 16/16 variants.
Relation-array reversal is exact for only 2/16; 14/16 differ at IEEE-754
least-significant values. No tolerance, rounding, normalization, or Product
source change was introduced.

## E2R Relation-order semantics

`RELATION-ORDER-SEMANTICS: NON-SEMANTIC`.

The Core authority is explicit: `spec/core.md:60-63` defines `entities`,
`events`, and `relations` as required arrays but says that the Core does not
require any particular ordering of those collections. `spec/core.md:134-144`
defines Core Object identity through its `id`, and `spec/core.md:185-206`
defines Relation endpoints and keeps Relation direction structural; neither
section gives array position meaning.
The Core therefore does not authorize Dataset Relation-array position as an
interoperable semantic input.

The History Extension reinforces the boundary rather than changing it:
`extensions/history-extension.md:16` excludes timeline layout and custom
presentation order, `:302-304` excludes layout order from `temporalOrder`, and
`:518-529` keeps application-specific display order, layout, and temporary
sorting outside the Dataset. The presentation draft addresses Relation
records by exact Relation ID and explicitly excludes array index and endpoint
order as an addressing basis (`extensions/presentation-extension-draft.md:97-103`).

The Layout Extension can describe visualization rules such as grouping,
layering, and routing preferences (`extensions/layout-extension.md:1-16,
37-55`), but it does not make the Core `relations` array order meaningful and
does not define a Relation-array ordering field. No Relation-specific `order`
field or persisted graph-neighbor sequence was found in the authoritative
specification material.

When E2R intends order to be interoperable, the existing mechanism is an
explicit responsibility-specific field: History uses `temporalOrder` for
relative temporal chronology, while the prospective non-temporal authorial
ordering responsibility is explicitly left to a future Extension. Array
position alone is not that mechanism.

## Product intended semantics

The Product intent is also non-semantic Relation order for automatic layout:

- `tests/auto-layout.test.ts:6-13` names the behavior “ignores relation order”
  and asserts exact equality for a reversed Relation array;
- `src/auto-layout.ts:19-20` describes the solver as pure and deterministic;
- `src/auto-layout.ts:24-35` sorts Entity IDs and canonicalizes unique
  undirected endpoint pairs, ignoring self and invalid endpoints;
- `src/auto-layout.ts:44` sorts neighbors during component discovery; and
- `src/App.tsx:1473-1479` treats the automatic layout result as derived graph
  geometry, not as Relation semantics.

There is no contrary Product comment or test establishing Relation-array order
as an intentional layout input. The implementation's remaining sensitivity is
therefore inconsistent with both the Core ordering rule and the Product test
intent.

## Three authority layers

| Layer | Relation order meaningful? | Evidence | Authority strength |
| --- | --- | --- | --- |
| E2R Core / Dataset semantics | No | `spec/core.md:60-63`; Relation identity is by `id`, not array index | Normative Core |
| LiaisonScape Product intended layout semantics | No | `tests/auto-layout.test.ts:6-13`; normalization and deterministic solver intent in `src/auto-layout.ts:19-35` | Accepted Product intent, narrow test scope |
| Current `fd563340` implementation behavior | Incidentally affects numeric output | `src/auto-layout.ts:26-35,62-72`; adjacency `Set` insertion order reaches force accumulation | Accepted historical implementation fact |

The third layer is an observed implementation behavior, not a semantic
authority that overrides the first two layers.

## Source-level causal trace

The accepted Product path is:

1. `Dataset.relations` is traversed by `buildEntityGraph` in
   `src/dataset.ts:455-468`. Unsupported and Event-connected Relations are
   filtered; supported Entity-to-Entity edges remain in their Dataset-array
   order. `src/App.tsx:805-811` maps those edges into the layout input.
2. `solveAutoLayout` creates sorted unique Entity IDs
   (`src/auto-layout.ts:24-26`) and a `Set` for each adjacency list.
3. Each accepted Relation is visited in input order. Its endpoint pair is
   canonicalized by `key` (`:16-17`), and `pairs` removes duplicate undirected
   pairs (`:27-35`). Self Relations and invalid endpoints are ignored.
4. The first-seen unique pair adds each endpoint to the other endpoint's
   adjacency `Set`. Thus the original Relation-array order survives as the
   insertion order of each affected adjacency Set.
5. Component discovery does not retain that order for its own traversal:
   neighbors are copied and sorted at `:42-48`; components are sorted by ID,
   and component iteration starts from sorted IDs. Degree ranking and lexical
   tie-breaking at `:53-60` use Set sizes and IDs, not insertion order.
6. Initial ring positions are therefore the same for a fixed graph and any
   Relation permutation. Seed generation, component membership, duplicate
   handling, and component order do not explain the mismatch.
7. During each relaxation pass, the repulsion loop at `:63-69` runs over the
   sorted component, but the attraction loop at `:70` runs directly over the
   adjacency `Set`. The successive `dx`/`dy` additions consequently occur in
   Relation-dependent neighbor order. IEEE-754 addition is not associative,
   so the clamped update at `:71` can differ by one or more least-significant
   bits. The difference can feed later passes and component packing at `:74-76`.

`buildEntityGraph` also preserves Relation order in the graph edge list for
rendering, but App's ordinary route work sorts routing priority by source ID,
target ID, and Relation ID (`src/App.tsx:321-336`). Route and label geometry
still receives the settled `positions` (`:338-421` and `:423-429`), so a
coordinate difference may be inherited downstream even though no independent
Relation-order semantic effect in routing or labels was established here.
The routing and label characterization authorities therefore remain closed.

No evidence shows Relation order changing topology, component membership,
unique-pair inclusion, seed assignment, or a non-numeric semantic stage.

## Minimal Product solver witness

Minimal witness produced: YES, as an ephemeral diagnostic command; no file was
added to the W-C clone. A search over simple graphs found no 2- to 4-Node
witness for the three-pass initial-settling comparison. The smallest useful
witness found for the accepted three-pass path has five Nodes, including one
singleton component, and three Relations:

```text
Nodes: a, b, c, d, e
Edges: bc = b-c, bd = b-d, be = b-e
Order A: [bc, bd, be]
Order B: [bc, be, bd]
Iterations: 3
```

Exact outputs:

```text
Order A:
a { x: 160, y: 160 }
b { x: 478.82471232582543, y: 174.82471232582543 }
c { x: 628.1758101371853, y: 160.54005630678537 }
d { x: 580.2480074848337, y: 276.2480074848338 }
e { x: 464.5400563067854, y: 324.1758101371854 }

Order B:
a { x: 160, y: 160 }
b { x: 478.8247123258255, y: 174.82471232582543 }
c { x: 628.1758101371853, y: 160.54005630678537 }
d { x: 580.2480074848338, y: 276.2480074848338 }
e { x: 464.5400563067854, y: 324.1758101371854 }
```

The first divergence is Node `b.x` after the second relaxation pass (the
solver invoked with `iterations: 2` already differs; `iterations: 1` is
exact). The singleton is material to this minimal solver witness because the
component packing offset makes the otherwise equal-looking force sums expose
the IEEE-754 order difference. This is a solver witness only, not candidate
evidence.

## Existing test reconciliation

The existing test asserts exact equality for one small graph under a reversed
Relation array and also checks that removing a parallel Relation and a
self-Relation does not change the result. It does not assert topology only;
it asserts exact coordinate objects. The test passes because its particular
three-Node geometry and two-neighbor accumulation do not produce a distinct
IEEE-754 result under that permutation. It does not cover the realistic
multi-neighbor, offset geometry represented by the 16 fixture variants.

Classification: `TEST-COVERAGE-SUFFICIENT-BUT-SCOPE-NARROW`.

The frozen Design1 invariant was overbroad: YES. Its exact same-ordered-input
and arithmetic-order preservation requirements remain valid, but its
Relation-permutation invariance was not supported by the accepted source or
the narrow existing test. This is an authority correction, not a tolerance.

## Resolution options

### O-A — preserve order sensitivity

Rejected. Neither the Core nor Product intent authorizes Relation-array
position as a layout semantic. Keeping the behavior would make an accidental
Set insertion detail part of the Product contract and would contradict the
existing exact “ignores relation order” test intent.

### O-B — canonicalize non-semantic Relation order

Selected. The current behavior is an `INCIDENTAL-NUMERIC-ORDER-SENSITIVITY`.
It is a determinism/conformance defect at the permutation-invariance boundary,
but not evidence of a user-visible graph-topology bug. A later, separately
authorized Product correction must establish canonical neighbor accumulation
before settling extraction resumes.

### O-C — preserve current ordered output while making permutations invariant

Rejected as a general contract. The witness proves that two permutations of the
same graph currently have two exact outputs. A permutation-invariant correction
cannot preserve both old outputs. A canonical rule could preserve a particular
ordered case only when that case already uses the selected canonical order;
guaranteeing this for the frozen corpus would require fixture-specific ordering
or an equivalent source change, neither of which is authorized. The post-fix
output must therefore be treated as an intentional narrow Product behavior
change, not claimed behavior-preserving against every pre-fix permutation.

### O-D — specification ambiguity

Rejected. The Core explicitly says collection order is not required, and the
History/Presentation boundaries identify explicit mechanisms for order where
needed. The authority is sufficient for O-B.

## Required canonicalization design (not implemented)

The smallest general boundary is **C-C: replace adjacency `Set` iteration with
a canonical ordered neighbor array** after the existing unique undirected-pair
normalization and before settling. This changes only neighbor accumulation
order. It must not be a fixture-specific or candidate-specific rule.

The future Product correction contract is:

- use one locale-independent Unicode code-point lexical comparator, with the
  shorter prefix first; supplementary code points compare by scalar value and
  any permitted unpaired UTF-16 code unit has a deterministic code-unit
  fallback;
- use that comparator for canonical endpoint ordering and normalized pair keys,
  and for every Node's stored neighbor array;
- retain the current rules that Entity IDs are deduplicated, invalid or
  non-Entity endpoints are ignored by this solver, self Relations are ignored,
  and parallel undirected pairs collapse to one unique pair;
- retain sorted Entity-ID component discovery, degree ranking, lexical ties,
  ring seed geometry, relaxation count, clamp values, and component packing;
- iterate the canonical neighbor array for every attraction accumulation pass;
- do not use locale-sensitive sorting or Relation-array position as a tie-break;
- preserve Relation IDs for downstream graph/rendering identity, while they do
  not participate in the unique layout pair key.

This is a design contract only. It does not silently replace the current
`localeCompare` behavior in `fd563340`, and it does not authorize modifying
`src/`, normal Product tests, or package files in this checkpoint.

Expected effect: duplicate/self handling and graph topology remain unchanged;
component discovery, initial seeds, and component order remain unchanged;
neighbor accumulation becomes canonical; arithmetic order becomes repeatable
for a canonical graph input; and future settling extraction can consume the
same post-correction kernel. Construction costs remain linear for pair
collection plus `O(sum(degree(v) log degree(v)))` for one-time neighbor-list
ordering, with `O(|V|+|E|)` additional storage. No benchmark or millisecond
claim was made. Existing tests should remain passing; a later implementation
checkpoint must add exact permutation and non-ASCII-ID coverage before
promoting the post-correction authority.

## Floating-point policy

Rounding introduced: NO.

Tolerance introduced: NO.

Decimal truncation and float normalization are also prohibited. The correction
must make the iteration order authoritative; exact numeric replay remains
required for the canonical deterministic input.

## Product-seam equivalence and baseline versioning

`PRODUCT-SEAM-EQUIVALENCE-v1` is reconciled by splitting historical and future
authority:

- `characterization-v1-pre-order-resolution`: the unchanged artifacts from
  Product source `fd563340...`; they remain historical evidence and are not
  deleted or regenerated;
- `characterization-v2-post-order-resolution`: a future baseline generated
  only after the separately authorized canonical-order Product correction,
  exact validation, and explicit adoption of a new Product source authority.

Within v1, same exact ordered input remains a replay property. Its overbroad
Relation-permutation invariant is not a valid behavior-preservation claim. The
future v2 contract may require exact permutation invariance and must preserve
the post-correction baseline exactly. Canonicalization itself is an intentional
narrow Product behavior change and must not be described as preserving every
pre-correction output.

## Implementation sequence and authority policy

Implementation1B remains blocked: NO.

The required conceptual sequence is:

1. implement the narrow canonical neighbor-order correction in a separately
   authorized Product checkpoint;
2. validate exact determinism, permutation invariance, duplicate/self handling,
   non-ASCII IDs, and source isolation;
3. explicitly adopt the corrected Product source authority;
4. generate characterization baseline v2 without altering v1;
5. reconcile source drift and equivalence contracts; then
6. separately authorize and start Implementation1B settling extraction.

The exact smallest next prerequisite is:

`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-CHARACTERIZATION-ORDER-CANONICALIZATION-IMPLEMENTATION1`

Status: `NOT STARTED`.

`fd563340625fd3d88dc25baedc93c4f8fe69e5e7` remains the accepted historical
Product source authority during this checkpoint. No new authority is declared.

## PR-3 and evidence consequence

PR-3: `NO`.

Visual severity and evidence severity are separate. The observed coordinate
difference is at IEEE-754 least-significant values and is expected to be
visually negligible in these cases. Operationally it remains an evidence
reproducibility blocker because the frozen explicit-seed seam requires an
unambiguous exact Product contract. No route/label authority was reopened.

Performance consequence is design-only: canonical neighbor-list construction
adds one-time per-node sorting cost as specified above. No benchmark or budget
was run or claimed. E-PERFORMANCE remains later.

## Final state

- CASE: 2 — Relation order is non-semantic; current Product behavior has
  incidental order sensitivity.
- Decision: B — freeze canonical Relation/neighbor order as the required
  Product correction; do not start Implementation1B.
- Candidate materialization: NO.
- V0/V1/V2/V3: NONE.
- Candidate comparison, ranking, selection: NO.
- Product candidate integration: NO.
- Routing/label refactor: NO.
- W-C Product source modified: NO.
- W-C diagnostic files added: NO.
- Implementation1A baseline artifacts modified: NO.
- Knowledge Candidate: NO / checkpoint-local. The observation is strong within
  this repository but has not been independently confirmed across repositories
  or adopted as workspace-wide knowledge.
- Push/tag/release/deploy/publication: NONE.

## Repository states and validation

The result and roadmap are the only intended e2r-spec changes. The live
Production protected Lighthouse sample files remain dirty and untouched. The
W-C Product source diff against `fd563340...` remains NONE; its existing
experimental characterization surface is preserved without new files. The
retained materializer remains detached at the accepted historical source with
its pre-existing `experimental/` state. `ai-knowledge` retains its pre-existing
dirty playbook change untouched.

Validation performed for this checkpoint:

- ephemeral minimal-witness diagnostic against accepted Product source: PASS;
- no Product source or normal test modification: PASS;
- e2r-spec `npm.cmd run validate`: to be run before commit;
- e2r-spec `git diff --check`: to be run before commit;
- live Production `git status --short` and `git diff --check`: to be run before
  final report;
- retained materializer detached-state check: to be run before final report.

No push, tag, release, deploy, or publication was performed.
