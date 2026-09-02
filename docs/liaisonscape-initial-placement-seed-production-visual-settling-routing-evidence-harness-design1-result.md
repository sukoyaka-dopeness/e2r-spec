# E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-HARNESS-DESIGN1

Date: 2026-09-03

Status: `DESIGN-BLOCKED`; the complete disposable harness contract is not
frozen. `CASE 2 / DECISION B` applies. PR-3 remains `NO`.

## 1. Mandatory boundary

```text
VISUAL EVIDENCE HARNESS DESIGN ONLY
CORPUS-COMPLETE IS INPUT AUTHORITY
VSR CONTRACTS ARE INPUT AUTHORITY
PR-3 REMAINS NO
NO HARNESS IMPLEMENTATION
NO CANDIDATE MATERIALIZATION EXECUTION
NO V0/V1/V2/V3 EVIDENCE EXECUTION
NO SCREENSHOT CAPTURE
NO BROWSER ACCEPTANCE
NO HUMAN VISUAL REVIEW
NO CANDIDATE COMPARISON
NO CANDIDATE RANKING
NO CANDIDATE SELECTION
NO PRODUCTION REPLACEMENT
NO PRODUCTION INTEGRATION
NO LIVE APP IMPORT OF RESEARCH MATERIALIZER
NO USER-VISIBLE SELECTOR
NO DEFAULT CANDIDATE
NO PERSISTED CANDIDATE PREFERENCE
NO SETTLING CHANGE
NO ROUTING CHANGE
NO LABEL CHANGE
NO VIEWPORT CHANGE
NO PERFORMANCE OPTIMIZATION
NO DATASET CHANGE
NO FIXTURE CHANGE
NO PR-3 CLAIM
NO CLAIM THAT INITIAL PLACEMENT IS SOLVED
```

No harness files, browser files, candidate artifacts, or screenshots were
created.

## 2. Acquisition1 next-pointer reconciliation

Commit `6bc61cfdb6587d1579399cc658e5d19c98b87334` was not amended or
rewritten. Its semantic Decision A remains unchanged: the common realistic
fixture corpus was acquired and frozen, PR-3 remains `NO`, and work may
proceed only to a separately authorized visual evidence harness design.

The later Acquisition1 pointer named
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-EXECUTION1`,
which skipped this design seam. The additive reconciliation is:

```text
ACQUISITION1 NEXT-POINTER RECONCILIATION
corrected exact next prerequisite:
E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-HARNESS-DESIGN1
previous EXECUTION1 identifier: DEFERRED / NOT YET ELIGIBLE
```

## 3. Authorities and protected state

The canonical authority is `C:\Users\extra\E2R\e2r-spec`. The accepted
Production source authority is
`fd563340625fd3d88dc25baedc93c4f8fe69e5e7`. The frozen fixture authority is
the role manifest
[`docs/evidence/visual-fixture-role-manifest-v1.json`](evidence/visual-fixture-role-manifest-v1.json),
with 8 structural fixture IDs, 16 EN/JA presentation entries, and manifest
SHA-256
`B867E9FF7B84107E8B4DDCCC02458B7B9AA535AB6FACE4AD10A2942CC8C8D8F5`.
Acquisition Commit A and Commit B remain immutable inputs:

```text
4d59010d8c13886c188d89a8b4c6c839e75f26e6
testdata: add LiaisonScape visual role fixtures

6bc61cfdb6587d1579399cc658e5d19c98b87334
docs: acquire LiaisonScape visual fixture roles
```

The protected Session file was not edited, staged, or restored. Production's
two dirty Lighthouse sample files were not used as authority and were not
changed. The ai-knowledge playbook was not changed. The disposable clone
remains detached at the accepted Production commit with its untracked
`experimental/` preserved. No push was performed.

## 4. Frozen contracts carried forward

The following contracts are carried forward exactly, without redesign:

```text
VSR-FIXTURE-v1
VSR-PIPELINE-v1
VSR-ABLATION-v1
VSR-VISUAL-v1
VSR-SETTLING-v1
VSR-ROUTING-v1
VSR-LABEL-v1
VSR-VIEWPORT-v1
VSR-PERFORMANCE-v1
VSR-REVIEW-v1
VSR-PROVENANCE-v1
VSR-PR3-v1
```

Their boundaries remain: V0 is raw candidate seed, V1 is the same seed after
Product settling, V2 is routing plus labels, and V3 is the fitted browser
render. `E-VISUAL`, `E-SETTLING`, and `E-ROUTING/LABEL` are required for PR-3;
`E-VIEWPORT`, `E-PERFORMANCE`, Production integration, and candidate selection
remain separate later classes.

## 5. Candidate inventory

The future harness inventory is exactly:

```text
TA0/REP-0
TA2-DEG-W1-OP-v1
TA2-MOTIF-W1-OP-v1
TA3-FWD-W1-OP-v1
TA3-REV-W1-OP-v1
```

`FP1-NGP` is dependency/family-only, `TA1-W1` is not a generic candidate, and
`K3` is control-only. Current Product baseline B0/B1 is diagnostic and is not a
research candidate. No candidate is selected.

## 6. Planned execution matrix

The frozen manifest contains 8 structural fixtures: Lighthouse, Apollo 11,
Ashen Crown, Titanic, Berlin Wall, Regional Care Coordination, District Solar
Cooperatives, and Regional Emergency Response. Each has EN and JA, giving 16
presentation variants. Every selected structural authority is mandatory;
ordinary and motif-rich entries are not reduced to one role representative.

The exact planned candidate/presentation matrix is:

```text
5 candidates × 8 structural fixtures × 2 presentation variants = 80 cells
```

Multi-role assignment is a reference relationship, not an execution
multiplier. A fixture satisfying two roles executes once for a given
candidate/locale/stage; both role records reference the same execution cell.

V0 and V1 may be deduplicated by `structuralFixtureId` because the paired
manifest entries have identical graph projection hashes and V0/V1 are
topology/coordinate evidence. Both locale authorities must remain referenced
in the shared record. V2 and V3 must not be deduplicated across locale because
label text, wrapping, route-label clearance, CSS, and SVG text metrics can
differ. The planned stage-record cardinality is therefore:

```text
V0: 5 × 8 = 40 structural cells
V1: 5 × 8 = 40 structural cells
V2: 5 × 8 × 2 = 80 presentation cells
V3: 5 × 8 × 2 = 80 presentation cells
TOTAL V0–V3 records = 240
```

No such records were executed here.

The minimum diagnostic baseline is also de-duplicated from candidate results:

```text
B0: 8 structural, locale-neutral initial-placement diagnostics
B1: 16 presentation variants × V2/V3 = 32 visual comparator records
TOTAL B0/B1 diagnostic records = 40
```

B0/B1 must be rendered for the full frozen corpus, not only after a candidate
failure. They are separately labeled diagnostic references and must never enter
candidate pass counts, fixture-win counts, scores, ranks, or selection.

## 7. Current Production pipeline audit

The accepted executable path is:

```text
DatasetService.loadDataset
  -> App.open / requestDatasetReplacement / acceptDataset
  -> dataset.buildEntityGraph
  -> entity-placement.placeInitialEntities
  -> auto-layout.settleInitialPlacement when Stored coordinates are absent
  -> App routedEdges orchestration
  -> viewport.routeGraphEdge
  -> viewport.placeEdgeLabel
  -> viewport.placeNodeLabel
  -> viewport.fitGraphView
  -> viewport.centeredViewportTransform
  -> App SVG plus styles.css render
```

| Stage / owner | Inputs and outputs | Importability and dependencies |
| --- | --- | --- |
| Dataset acceptance: `src/services/DatasetService.ts:loadDataset`; `src/App.tsx:open`, `acceptDataset` | Raw JSON to validator diagnostics and accepted Dataset; acceptance also changes App state | Validator and service are directly importable; `open`/`acceptDataset` are embedded in browser/App state, history, replacement safety, refs, and DOM lifecycle |
| Graph projection: `src/dataset.ts:buildEntityGraph` | Dataset to Entity Nodes and visible Entity-Entity Graph Edges; Event/unsupported edges are diagnosed and hidden | Directly importable pure function; generates fallback graph positions and parallel indices |
| Stored placement: `src/dataset.ts:getStoredCoordinates`; `src/entity-placement.ts:placeInitialEntities` | Dataset coordinates and graph nodes to a new position map | Directly importable pure functions; coordinate extension semantics are separate from visual evidence |
| Initial settling: `src/auto-layout.ts:settleInitialPlacement` and `solveAutoLayout` | Entity IDs and relation endpoints to a new position map | Directly importable pure functions, but neither accepts explicit V0 coordinates; current startup wrapper creates its own degree-ranked ring/component seeds |
| Route geometry: `src/viewport.ts:routeGraphEdge` | Two positions, parallel/self/overlap data, obstacles, occupied paths, manual route values, provisional labels to path/samples/label point/control point | Directly importable pure function |
| Route orchestration: `src/App.tsx:routedEdges` `useMemo` | Graph, positions, relation names, manual state to ordered routes and diagnostics | Embedded in App; depends on `nodeMap`, relation order, occupied path mutation, manual refs, and React memo lifecycle; not a stable standalone seam |
| Self-loop and parallel route | `routeGraphEdge` handles self-loop geometry and parallel offsets; App prioritizes fixed/self/overlap edges and computes parallel eligibility | Geometry is directly importable; priority, obstacle, occupied-path, and manual-state orchestration is embedded in App |
| Relation labels: `src/viewport.ts:placeEdgeLabel`; `src/relation-label-presentation.ts` | Route samples, text, nodes, other paths, occupied labels, previous placement, manual anchor to label rectangle | Pure placement and anchor helpers are directly importable; App owns iteration, refs, reconciliation, and rendering |
| Node labels: `src/viewport.ts:placeNodeLabel`, `wrapNodeLabel`, `truncateNodeText` | Node position, name, description, occupied labels, nodes, paths, prior placement to label rectangle | Pure helpers are directly importable; App owns node iteration, manual offsets, descriptions, and SVG text |
| Manual state | `edgeCurveOffsets`, `selfLoopOverrides`, `manualRelationLabelAnchors`, `manualNodeLabelOffsets` in `App.tsx` | React state/refs and pointer/context-menu workflow; not available as a stable isolated seam |
| Fit: `src/viewport.ts:fitGraphView` | Node positions and fixed logical `800×500` plus padding `96` to scale/pan | Directly importable pure function; node bounds only, excluding route/label extents |
| View transform: `src/viewport.ts:centeredViewportTransform`; `App.tsx` SVG | Scale/pan to SVG group transform; SVG has `viewBox="0 0 800 500"` | Transform helper is direct; SVG element, pointer handlers, DOM geometry, and CSS are browser-dependent |
| SVG/CSS render: `src/App.tsx`, `src/main.tsx`, `src/styles.css`, `index.html` | Derived geometry to React SVG paths, polygons, groups, text, and responsive layout | Browser/DOM/CSS/React dependent; no isolated render entry exists |

Dataset acceptance is authoritative for validity, but candidate evidence must
not call the shipped `App.open` with a research materializer. Dataset mutation,
history, localStorage, beforeunload, ResizeObserver, and pointer interaction
are outside the pure evidence seam.

## 8. Seeded-settling seam

The source audit establishes:

```text
S-H3
current Product settling semantics cannot be exercised with supplied V0 seed
without a small evaluation adapter
```

`settleInitialPlacement` accepts only `{ entities, relations }` and calls
`solveAutoLayout` with `iterations: 3`. `solveAutoLayout` deterministically
constructs its own component center/ring positions, then performs bounded
updates. It has no initial-position parameter. Therefore invoking it after a
candidate seed would silently discard the seed, while opening the normal App
would report Product's own baseline placement rather than candidate-settled
output.

`S-H1` is false: no existing Product function accepts the candidate seed.
`S-H2` is false: the lower-level solver also has no seed input.
`S-H4` is not selected: the solver is small and pure enough for a narrowly
bounded evaluation seam, but its seed semantics still require an explicit
design decision before implementation.

## 9. VSR-SEED-ADAPTER-v1

The required adapter contract is frozen as a prerequisite specification, but
not implemented. It must be a pure Node-side disposable evaluation adapter
with these requirements:

- accept a frozen candidate V0 coordinate map and preserve every Node ID;
- accept only zero-Stored / `EVAL-FULL-SEED` visual-evaluation state;
- reject partial or complete Stored candidate merges and pending user-owned
  coordinate work;
- invoke the exact accepted three-iteration Product settling semantics after
  applying the explicit seed, without copying a divergent algorithm;
- emit V1 coordinates, S1–S7 diagnostics, source authority, and settling
  configuration;
- mutate no Dataset, Product state, persistence, or live App state;
- have no live App reachability, fallback candidate, or silent baseline
  replacement; and
- fail closed when the exact seed-injection seam is unavailable.

The unresolved seam is the smallest blocker: decide and verify a
behavior-preserving, evaluation-only seed injection boundary for the existing
solver. No settling iteration count or algorithm is changed by this result.

## 10. V0 contract

Future V0 records must contain candidate identity, semantic contract,
materializer identity/version, fixture authority, graph projection hash,
runtime transform, exact Node-to-coordinate mapping, seed fingerprint, hard
gate result, status, and failure. V0 is pure Node materializer output only; it
does not settle, route, label, or render. Repeated frozen inputs must reproduce
the same fingerprint. A fixture authority mismatch stops the cell before
materialization.

## 11. V1 contract

Future V1 must consume the exact V0 coordinate fingerprint and record V0 input,
Production source authority, iteration count `3`, all relevant settling
constants/configuration, V1 coordinates and fingerprint, movement/distortion
diagnostics, deterministic replay, finite/distinct state, and S1–S7. The V1
contract cannot be executable-authoritative until `VSR-SEED-ADAPTER-v1` is
implemented and verified at the unresolved S-H3 seam.

## 12. Routing and label importability

| Responsibility | Current owner | Classification | Design consequence |
| --- | --- | --- | --- |
| ordinary route geometry | `viewport.ts:routeGraphEdge` | `DIRECTLY-IMPORTABLE` | Use exact function and inputs |
| self-loop route geometry | `viewport.ts:routeGraphEdge` and automatic self-loop helpers | `DIRECTLY-IMPORTABLE` | Preserve automatic orientation/obstacle search |
| parallel route geometry | `viewport.ts:routeGraphEdge` | `DIRECTLY-IMPORTABLE` | Preserve index/count and canonical physical side |
| route obstacles and occupied paths | `App.tsx:routedEdges` plus `routeGraphEdge` | geometry direct; orchestration `EMBEDDED-IN-APP` | Future seam must preserve ordering, obstacles, and occupied-path diagnostics |
| relation label placement | `viewport.ts:placeEdgeLabel` | `DIRECTLY-IMPORTABLE` | App iteration and manual-state boundary still required |
| node label placement | `viewport.ts:placeNodeLabel` | `DIRECTLY-IMPORTABLE` | App iteration and CSS/SVG text remain downstream |
| manual relation route | App React state and `routeGraphEdge` parameters | `IMPORTABLE-WITH-DISPOSABLE-WRAPPER` | Automatic and manual evidence must remain separate |
| manual relation label anchor | `relation-label-presentation.ts` plus App ref | helper direct; state `EMBEDDED-IN-APP` | Do not simulate manual rescue in candidate acceptance |
| manual node label offset | helper plus App ref | `IMPORTABLE-WITH-DISPOSABLE-WRAPPER` | Separate regression evidence only |
| route samples/path geometry | `routeGraphEdge` return value | `DIRECTLY-IMPORTABLE` | Fingerprint exact samples and path |
| SVG rendering and CSS | `App.tsx`, `main.tsx`, `styles.css` | `BROWSER-ONLY` | Requires disposable browser entry using actual Product behavior |

Essential routing geometry is available, but the exact orchestration/render
seam is not currently an isolated import. No Product extraction or refactor is
performed here. This is part of the same Product/evaluation seam prerequisite
as S-H3.

## 13. V2 and manual override contract

Future V2 must consume exact V1 coordinates and record Entity positions,
Relation IDs/endpoints, route kind, path/samples, route fingerprint,
self/parallel identity, occupied-path diagnostics, relation-label and
node-label rectangles, automatic/manual mode, V2 fingerprint, and Product
source authority. Browser evidence is still required for text readability;
machine geometry alone is insufficient.

`AUTO-INITIAL-STATE` is required candidate PR-3 evidence. `MANUAL-OVERRIDE` is
separate downstream Product-regression or later integration evidence, not a
candidate acceptance path. A manual route or label must never be applied to
rescue an automatic candidate failure.

## 14. Browser harness architecture

| Architecture | Decision | Reason |
| --- | --- | --- |
| H-A: hidden/dev selector in live App | Reject | Adds shipped reachability, selector state, and Product behavior risk |
| H-B: separate disposable Vite/browser entry importing Product utilities | Target architecture, pending seam | Smallest boundary that can stay outside normal App and use actual geometry/render dependencies |
| H-C: external HTML/SVG reimplementation | Reject | Duplicates Product render behavior and cannot establish Product visual authority |
| H-D: test-only wrapper around actual Production components/modules | Required wrapper style within H-B, pending seam | Suitable for isolated evaluation, but current App graph orchestration is not exposed as a stable component |
| H-E: existing repository-supported visual mechanism | None found | Existing tests use Vite plus the DOM test environment, not a candidate visual harness |

The provisional target is `H-B` with an `H-D`-style disposable wrapper around
actual frozen modules. It is not approved for implementation yet: the wrapper
must first resolve explicit seeded settling and the embedded App routing/render
orchestration without reimplementing or changing Product semantics.

Dependency direction is frozen as `VSR-HARNESS-ISOLATION-v1`:

```text
disposable evidence harness
  -> frozen candidate materializer
  -> explicit runtime-coordinate adapter
  -> stable/current Production geometry/render utilities
```

There is never a reverse edge from the live Product entrypoint to the research
materializer, candidate registry, persistent preference, or shipped selector.

## 15. Location and toolchain

The future implementation location is frozen provisionally as:

```text
C:\Users\extra\E2R\e2r-liaison-scape-production-candidate-materialization-implementation1\experimental\production-candidate-materialization\visual-evidence-harness\
```

This keeps the work in the disposable detached clone, alongside the frozen
materializer, without changing Production tracked files. No files were created
there.

Audited toolchain:

```text
Node v24.18.0
npm 11.16.0
Vite 8.2.1 installed (package range ^8.1.1)
React 19.2.8 installed (package range ^19.2.7)
React DOM 19.2.8 installed
test runner: Node built-in test via --experimental-strip-types
DOM support: @sukoyaka-dopeness/e2r-dom-test-environment with jsdom dependency
Playwright: absent
Puppeteer: absent
```

The workspace has an accepted Edge CDP diagnostic playbook and the machine has
Chrome and Edge executables available. No browser was started and no CDP
session was opened here. No new dependency is required or installed by this
design; a future implementation may use the existing CDP workflow and Node
runtime, with any dependency addition requiring a separate explicit decision.

## 16. Real-browser authority and viewport

Real Chrome/Chromium or Edge is authoritative for text metrics, SVG paint, CSS,
responsive layout, and final visual acceptance. Every future record must bind
browser product/version, OS, locale, device scale factor, viewport, Product
source commit, harness source identity, fixture authority, candidate, and
stage.

The canonical normal-desktop capture contract is frozen as
`PR3-CAPTURE-VIEWPORT-v1`:

```text
width: 1280 CSS px
height: 900 CSS px
device scale factor: 1 unless the browser reports and records another fixed test value
browser zoom: 100%
logical SVG viewBox: 0 0 800 500
```

This is an interpretable V3 capture viewport, not completion of the later
`E-VIEWPORT` acceptance class. The existing `fitGraphView` node-only bounds and
responsive CSS still require later evidence for route/label extents and
responsive behavior.

## 17. V3 and screenshot contract

V3 must consume exact V2 geometry and current `fitGraphView`, centered transform,
SVG viewBox, CSS, and browser render behavior. It records V2 fingerprint, fit
source authority, scale, pan, node/route/label geometry, viewport, CSS/render
authority, screenshot hash, DOM/SVG artifact hash where practical, and final
manifest. V3 PASS is not `E-VIEWPORT COMPLETE`.

`VSR-SCREENSHOT-v1` retains the previously frozen filename:

```text
<checkpoint>__<fixture-id>__<role>__<candidate-id>__<stage>__<locale>__<viewport-role>.png
```

Every screenshot requires a companion machine record binding fixture commit,
raw/projection hashes, candidate, V0/V1/V2 fingerprints, Product source,
browser, viewport, locale, stage, and image SHA-256. Missing companion data is
`EVIDENCE-MISSING`, never candidate `FAIL`. No screenshot was generated.

## 18. Locale and multi-role rules

V0/V1 are structurally deduplicated as described in the matrix section, with
both EN/JA authorities referenced. V2/V3 run both EN and JA separately. A
multi-role fixture executes once per candidate/locale/stage; role-level results
reference that shared artifact and retain separate role rationale references.
No duplicate visual run is created for `regional-care-coordination` merely
because it covers high-fanout and larger-size.

## 19. Review, attribution, and failure semantics

Future anonymized review maps stable packet-local `reviewCandidateId` values
`A`–`E` to actual candidate IDs in a separate retained provenance mapping.
Diagnostic mode may reveal identity; acceptance mode should not. Acceptance and
preference remain separate, with no majority selector, rank, global score, or
best-candidate field.

Machine-readable review rows use:

```text
reviewPacketId
reviewCandidateId
fixtureId
role(s)
presentationVariant
stage
criterion (V-A through V-H)
status (PASS | FAIL | INDETERMINATE | NOT-APPLICABLE | EVIDENCE-MISSING)
severeFailure
evidenceNote
artifactRefs
optionalPreference
```

Attribution categories are `CANDIDATE-BLOCKING`,
`PRODUCT-DOWNSTREAM-BLOCKING`, `COMMON-EVIDENCE-BLOCKING`, and
`NONBLOCKING-DIAGNOSTIC`. V0 defects may be candidate-attributable; a common
V1/V2/V3 defect is downstream/common evidence until controlled evidence says
otherwise. Causal judgment is not automated solely from a heuristic.

Harness statuses distinguish `CANDIDATE-FAILURE`, `HARNESS-FAILURE`,
`FIXTURE-AUTHORITY-FAILURE`, `PRODUCT-DOWNSTREAM-FAILURE`,
`BROWSER-CAPTURE-FAILURE`, and `EVIDENCE-MISSING`. Harness crashes, browser
capture failures, and hash mismatches never become candidate FAIL. A fixture
hash mismatch stops the cell before materialization; retries may not change
evidence semantics.

## 20. Artifact and provenance design

The future artifact root is:

```text
visual-evidence-harness/
  src/
  tests/
  browser/
  artifacts/
    <run-id>/
      run-manifest.json
      fixture-manifest-snapshot.json
      v0/
      v1/
      v2/
      v3/
      screenshots/
      review/
      audit-results.json
      artifact-index.json
```

Stable semantic fields exclude `generatedAt`; volatile timestamps are retained
as metadata only. Canonical artifacts use UTF-8, LF, deterministic key ordering,
and no trailing whitespace. SHA-256 is over exact canonical bytes. The
artifact index maps every artifact to run, stage, cell, and hash and records
replay identity. The fixture manifest is snapshotted and verified before each
run.

Every cell ultimately binds candidate ID, semantic contract, materializer
identity/version, fixture ID and structural ID, locale, role(s), fixture repo/
commit/path/raw/projection hashes, Product source, harness identity, transform,
V0/V1/V2/V3 fingerprints, settling/routing/label/fit configuration, browser,
viewport, artifact/screenshot hashes, status, failure, attribution, and review
references. No evidence is persisted into the Dataset, Coordinate Prototype,
Coordinate Draft, or normal Product state.

## 21. Source drift, implementation scope, and tests

The future run is frozen to Production commit
`fd563340625fd3d88dc25baedc93c4f8fe69e5e7`. If source changes before visual
execution, an explicit source-drift revalidation checkpoint is required;
evidence from different Production commits must never be mixed and the clone
must not be updated automatically.

After the seam blocker is resolved, implementation scope is limited to the
disposable surface: authority loader/verifier, V0 materializer adapter,
seed-to-settling adapter, V1 emitter, routing/label adapter, browser-only
render entry, V2/V3 capture, canonical artifacts, and focused tests. It does
not include live App candidate imports, normal Product routes, selectors,
persistent preferences, Dataset mutation, fallback candidates, or Product
algorithm changes.

Planned tests, not implemented here:

```text
T1 manifest hash enforcement; T2 exact candidate registry;
T3 V0 reproducibility; T4 V0->V1 identity linkage;
T5 settling deterministic replay; T6 V1->V2 linkage;
T7 routing/label deterministic artifact; T8 EN/JA linkage;
T9 multi-role deduplication; T10 no Product state mutation;
T11 no live App reachability; T12 failure attribution;
T13 browser artifact linkage; T14 screenshot hash linkage;
T15 source-drift refusal; T16 unknown-candidate refusal;
T17 fixture-hash-mismatch refusal.
```

Production reachability proof must search source and built output for imports or
references from `main.tsx`, App startup, user-visible routes, normal build
selectors/preferences to the harness, candidate registry, or materializer;
inspect the dependency graph; and prove the disposable entry is absent from
the shipped Product build. This proof is future implementation evidence only.

## 22. CASE and Decision

The complete harness contract is **not** frozen because the exact candidate
seed injection seam is absent and the App-owned routing/render orchestration
has no stable isolated entry. A future wrapper that silently discards V0 or
duplicates the Product solver would violate the frozen VSR boundary.

```text
CASE 2 — HARNESS DESIGN BLOCKED BY PRODUCT SEAM
DECISION B:
DO NOT IMPLEMENT OR EXECUTE VISUAL EVIDENCE;
RECORD THE SMALLEST REQUIRED PRODUCT/EVALUATION-SEAM DESIGN PREREQUISITE.
```

The exact smallest next prerequisite is the not-started checkpoint:

```text
E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-DESIGN1
```

It must decide and verify the behavior-preserving explicit-seed settling seam
and the isolated routing/render orchestration boundary. The later
`...HARNESS-IMPLEMENTATION1` remains deferred until that prerequisite passes.

PR-3 remains `NO`; candidate materialization, V0/V1/V2/V3 execution,
screenshots, browser review, candidate selection, and Production integration
are all `NO`.

Knowledge Candidate assessment: no new ai-knowledge entry was created or
promoted. The source seam observation is recorded here as checkpoint-local
evidence pending independent confirmation or an explicit workspace decision.

## 23. Final state

The result document is
[`docs/liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-harness-design1-result.md`](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-harness-design1-result.md).
The Roadmap is changed additively; previous entries are not rewritten. No
Production source, tests, public samples, fixture bytes, manifest, frozen
materializer, PR-2 implementation, NarrativeLine, Hub, Core, Extensions,
schemas, ai-knowledge, or protected Session was modified. The e2r-spec
validation and final Commit are recorded after this document is staged.

No push, tag, release, deploy, or publication was performed.
