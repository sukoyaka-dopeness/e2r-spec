PRODUCT / EVALUATION SEAM DESIGN ONLY

NO PRODUCT REFACTOR IMPLEMENTATION
NO HARNESS IMPLEMENTATION
NO CANDIDATE MATERIALIZATION
NO V0/V1/V2/V3 EXECUTION
NO SCREENSHOT / BROWSER REVIEW
NO CANDIDATE COMPARISON / RANKING / SELECTION
NO PRODUCT REPLACEMENT / INTEGRATION
NO LIVE IMPORT OF RESEARCH MATERIALIZER
NO ALGORITHM / CONSTANT / VIEWPORT / DATASET / FIXTURE CHANGES
NO USER-VISIBLE FEATURE
NO CANDIDATE REGISTRY / PREFERENCES
NO PR3 CLAIM

# LiaisonScape Product Evaluation Seam Design1

## Checkpoint result

- Checkpoint: E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-DESIGN1
- Date: 2026-09-03
- Input: Harness Design1 919c33a73e0a884903c56faec8553e0dc17b8eca, CASE 2 / DECISION B, DESIGN-BLOCKED, S-H3
- Accepted Production source authority: fd563340625fd3d88dc25baedc93c4f8fe69e5e7
- Result: CASE 1 / DECISION A
- Product modularization: PARTIAL
- PR-2: COMPLETE-BOUNDED for 1 <= N <= 65
- PR-3: NO

The smallest behavior-preserving Product boundary for reliable future PR-3
evidence is partial modularization. A Product-owned explicit-seed settling
kernel is required. A Product-owned pure automatic presentation composition
for route and label derivation is also required. No new Product render
component is required by this design; render extraction is deferred under P-A.

The design is complete at the seam level only. The exact next prerequisite is:

E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-IMPLEMENTATION1A

Status: NOT STARTED.

## Authority and freeze

Authority order is live LiaisonScape source and tests, accepted e2r-spec
documents, the immutable role manifest, the retained disposable clone only
for its evaluation-owned surface, and scoped workspace guidance. The
application modularization decision is accepted workspace guidance: extract
one responsibility at a time, preserve behavior, and do not prescribe a
fixed layout or perform a wholesale rewrite.

Accepted inputs are Production-readiness Design1, visual/settling/routing
evidence Design1, fixture-role Acquisition1, Harness Design1, and
docs/evidence/visual-fixture-role-manifest-v1.json. The manifest raw SHA-256
is B867E9FF7B84107E8B4DDCCC02458B7B9AA535AB6FACE4AD10A2942CC8C8D8F5.
The corpus is CORPUS-COMPLETE: 8 structural fixtures and 16 EN/JA variants.

The governing freeze principle is:

REUSE PRODUCT SEMANTICS; DO NOT COPY PRODUCT SEMANTICS INTO THE HARNESS.

Dependency direction:

Product App -> reusable Product-owned seam/module <- evaluation harness

Prohibited directions are Product App -> research materializer and evaluation
harness -> copied Product algorithm. Product modules must not know candidates,
TA identifiers, manifests, screenshots, evidence stages, or PR-3.

## Current source audit

### Settling

src/auto-layout.ts currently exports solveAutoLayout(input, options),
settleInitialPlacement(input), and INITIAL_PLACEMENT_SETTLING_ITERATIONS = 3.
The solver is pure and deterministic. It sorts unique IDs, normalizes
undirected relation pairs, ignores self and invalid endpoints, builds sorted
BFS components, degree-ranks component seeds with lexical ties, creates ring
positions, performs bounded relaxation, and packs components.

Current defaults are clearance 96, componentGap 144, and iterations 12.
Coordinate-less startup uses the same solver with exactly three iterations.
The public solver creates initial positions internally and accepts no explicit
V0. This is S-H3: the harness cannot exercise candidate V0 through Product
settling without copying semantics or leaking evaluation options.

### Routing and labels

src/viewport.ts contains pure routeGraphEdge, placeEdgeLabel, and
placeNodeLabel geometry. App.tsx currently owns routedEdges orchestration:
provisional labels, fixed-versus-automatic partition, source/target/Relation
priority, canonical physical-side sign, obstacles, occupied paths, overlap
slots, parallel diagnostics, self-loop inputs, and manual route inputs.

App then derives Relation-label and Node-label placements using occupied labels
and paths, prior placement refs, drag state, manual anchors, and manual Node
offsets. These are presentation responsibilities, not Core or Dataset
semantics, but their orchestration is currently embedded in App.

### Rendering

App.tsx owns the SVG with viewBox 0 0 800 500, centered transform, Product
class names, paths, arrowhead definitions, labels, and interaction handlers.
main.tsx mounts StrictMode and App and imports styles.css. No stable isolated
Graph render component currently exists.

## Settling seam: S-C

Select S-C: extract a Product-owned lower-level settling kernel while keeping
solveAutoLayout as the same Product composition.

Conceptual responsibilities in src/auto-layout.ts are:

1. createAutoLayoutInitialPositions(input, options): the current graph
   normalization, component ordering, seed geometry, and packing preparation;
2. settleLayoutPositions(input, options): the current relaxation loop from an
   explicit initial-position map; and
3. solveAutoLayout(input, options): the unchanged default composition.

Names and export visibility are provisional. The frozen general contract is:

settleLayoutPositions({ nodes, relations, initialPositions },
  { nodeClearance, componentGap, iterations }) -> settled positions

The explicit input contains graph identity and a complete explicit Node-position
map. The output is settled positions. Product performs no Dataset loading,
persistence, candidate validation, registry lookup, fallback seed generation,
or evidence recording. The evaluation adapter validates V0 and calls the same
kernel with the exact PR-3 configuration, including iterations 3.

Default Product invariants are exact output values, key coverage, graph
normalization, tie-breaking, component order, packing, constants, clamp
behavior, iteration count, arithmetic order, no input mutation, and existing
settleInitialPlacement and solveAutoLayout behavior.

Rejected options: S-A copied harness settling (semantic drift), S-B
candidate-shaped public solver options (evaluation leakage), and S-D leaving
the explicit-seed blocker unresolved.

## Routing and label seam: R-C

Select R-C: layered pure Product-owned derivation. The smallest proposed
future module is src/graph-presentation.ts; no file is created here.

Conceptual candidate-agnostic responsibilities are:

- deriveAutomaticRoutes(graph, positions, resolvedRoutingInputs);
- deriveAutomaticRelationLabels(graph, routes, positions, resolvedLabelInputs);
- deriveAutomaticNodeLabels(graph, positions, routes, relationLabels,
  resolvedLabelInputs).

The route layer owns deterministic ordering, fixed and automatic partition,
obstacles, occupied paths, overlap indexing, parallel eligibility diagnostics,
physical-side sign, and route output. Label layers own current candidate
enumeration, scoring, recovery, and placement order. Existing pure geometry
primitives may remain in viewport.ts; moving them is not required.

React state, refs, and user intent remain App-owned: manual curve and
self-loop overrides, Relation-label anchors, Node-label offsets, prior
placements, drag state, selection, pointer/context-menu lifecycle, dirty
state, persistence, and manual-over-automatic reconciliation.

App may translate manual state into generic resolved geometry inputs or apply
manual reconciliation after Product calculation. Product modules must not read
React refs, mutate manual maps, or define dirty/persistence semantics. The
resolved input is necessary because current manual Node-label positions act as
provisional route obstacles.

R-A copying the App loop into the harness is rejected. R-B one large function
covering graph construction, routing, labels, interaction, and rendering is
rejected as too broad. R-C is the smallest responsibility boundary.

## Render seam: P-A

Select P-A: no Product render-component extraction now. A future disposable
wrapper may import Product geometry, construct a non-interactive view model,
render the accepted SVG structure and class names, and import exact Production
styles.css. Wrapper-shell CSS may be separate.

The wrapper may not reimplement placement, settling, route selection, label
scoring, manual state, Dataset persistence, or candidate semantics. If P-A
cannot prove the evidence SVG/CSS is the same Product presentation, work must
stop for a separate render-seam design. P-B, extracting a large Graph
component now, is not authorized.

## Ownership map

| Responsibility | Product owner | Consumer | Boundary |
| --- | --- | --- | --- |
| Initial seed and normalization | auto-layout.ts | App composition | no candidate policy |
| Explicit-seed settling | auto-layout.ts kernel | App and adapter | no persistence |
| Route primitives | viewport.ts | App and presentation module | no React state |
| Automatic routes and labels | graph-presentation.ts | App and wrapper | no manual store |
| Manual reconciliation and SVG events | App.tsx | Production | not Product seam here |
| Candidate-to-geometry mapping | disposable adapter | harness only | not Product source |
| Evidence and screenshots | disposable harness | evaluation | not Production Dataset |

App remains responsible for Dataset loading/replacement, handoff/history,
selection, detail/deletion workflows, React state, pointer interaction,
manual geometry, dirty state, coordinate save, persistence, viewport controls,
and SVG event wiring. Product owns reusable deterministic geometry only.

## Characterization and equivalence

Characterization must precede refactoring. Future artifacts, not created here,
are auto-layout-baseline.json, routing-baseline.json, and label-baseline.json.
Each record binds accepted source commit, exact fixture or synthetic input and
raw/projection hash, graph/config, canonical output, key order where relevant,
and a SHA-256 record hash.

Coverage includes singleton, isolated and multi-component, ordinary,
motif-rich, high-fanout, sparse, dense, symmetry/control, self, parallel,
long-label, and larger-size graphs. For default Product calls, exact numeric
equality is required. Arithmetic order must be preserved. If exact equality is
impossible, stop for explicit authority; do not invent a tolerance.

PRODUCT-SEAM-EQUIVALENCE-v1 requires exact default solver and startup output,
route order and samples including self/parallel/overlap/obstacle/manual cases,
automatic label outputs, unchanged App behavior, test/lint/build, and no
research-materializer reachability. Browser resemblance is not equivalence.

## Contract identifiers

- PES-SETTLING-v1: explicit-seed settling; same default composition and no
  seed regeneration.
- PES-ROUTING-v1: automatic route derivation; same order, obstacles,
  physical side, parallel, self-loop, and samples.
- PES-LABEL-v1: automatic labels; same order, scoring, recovery, and output.
- PES-RENDER-v1: exact CSS/SVG evidence boundary or stop for render design.
- PES-ISOLATION-v1: no research reachability and no protected writes.
- PRODUCT-SEAM-EQUIVALENCE-v1: characterization and focused-test promotion.

Normal geometry failures remain Product errors. The evaluation adapter maps
candidate and evidence failures. Product source must contain no candidate,
PR-3, TA, manifest, or harness failure vocabulary.

## Future focused tests

S-T1 default baseline equality; S-T2 explicit V0 with zero, one, and three
iterations; S-T3 normalization/order/permutation; S-T4 no mutation and exact
failure behavior; R-T1 route priority and partition; R-T2 ordinary, parallel,
overlap, self-loop, obstacle, and side behavior; L-T1 Relation-label scoring;
L-T2 Node-label avoidance and stability; A-T1 App/manual equivalence;
A-T2 dirty/persistence/replacement regression; P-T1 SVG/CSS contract; and
I-T1 dependency reachability/write isolation.

These are planning identifiers only. Browser screenshots and V0-V3 execution
remain later work.

## Workspace and implementation split

Preferred workspace W-C is a new disposable clone at:

C:\Users\extra\E2R\e2r-liaison-scape-product-evaluation-seam-implementation1\

It will start exactly at fd563340625fd3d88dc25baedc93c4f8fe69e5e7 and remain
separate from the retained materializer clone. It is not created now. The
retained clone remains detached at that commit with ?? experimental/.

IMPLEMENTATION-SPLIT=YES:

1. IMPLEMENTATION1A: characterization baselines and focused tests only;
2. IMPLEMENTATION1B: settling extraction and Product composition switch;
3. IMPLEMENTATION1C: evaluation-only explicit-seed adapter and settling proof;
4. IMPLEMENTATION1D: automatic route derivation seam;
5. IMPLEMENTATION1E: automatic label derivation and App switch;
6. IMPLEMENTATION1F: P-A wrapper and CSS/markup proof; and
7. IMPLEMENTATION1G: reachability, isolation, and build proof.

Each step is one bounded commit or stops for a new split. No step adds a
candidate registry, preference, ranking, materialization, persistence, or
Production integration.

## Handoff and status

After seam adoption the handoff is accepted Product source -> isolated
characterization/refactor -> PRODUCT-SEAM-EQUIVALENCE-v1 -> explicit adoption
checkpoint -> source-drift revalidation -> VSR-SEED-ADAPTER-v1 -> V0/V1/V2/V3
evidence execution.

The harness owns candidate validation, V0 mapping, stage records, screenshots,
artifact hashes, and failure attribution. Product refactor completion is not
candidate integration, PR-3 completion, selection, or a solved Initial Placement.

Production source/tests/public/package files were not modified. No candidate
was executed or selected. No screenshot/browser review occurred. No fixture or
manifest bytes changed. No Core, Extension, schema, Dataset, Hub, or
NarrativeLine change occurred. Protected Production Lighthouse samples and
the pre-existing ai-knowledge browser diagnostic change remain untouched.

## Decision

CASE 1 / DECISION A

PRODUCT/EVALUATION SEAM DESIGN COMPLETE;
IMPLEMENT CHARACTERIZATION-FIRST SETTLING SEAM NEXT

The Harness Design1 blocker is resolved at design level: exact V0 can enter a
Product-owned settling kernel; routing and labels have a layered pure boundary;
manual state stays App-owned; and render extraction is deferred under P-A.
The implementation and all PR-3 evidence remain not started.

Exact next prerequisite:

E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-IMPLEMENTATION1A

NOT STARTED.
