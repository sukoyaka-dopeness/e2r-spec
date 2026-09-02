CHARACTERIZATION-FIRST IMPLEMENTATION ONLY

NO PRODUCT ALGORITHM REFACTOR
NO SETTLING EXTRACTION
NO EXPLICIT-SEED PRODUCT API
NO GRAPH-PRESENTATION MODULE
NO ROUTING EXTRACTION
NO LABEL EXTRACTION
NO APP ORCHESTRATION CHANGE
NO SVG/RENDER REFACTOR
NO HARNESS IMPLEMENTATION
NO CANDIDATE MATERIALIZATION
NO CANDIDATE REGISTRY
NO V0/V1/V2/V3 EXECUTION
NO SCREENSHOT
NO REAL-BROWSER REVIEW
NO CANDIDATE COMPARISON
NO CANDIDATE RANKING
NO CANDIDATE SELECTION
NO PRODUCT CANDIDATE INTEGRATION
NO DATASET CHANGE
NO FIXTURE CHANGE
NO ALGORITHM CONSTANT CHANGE
NO TOLERANCE INVENTION
NO PR-3 CLAIM

# LiaisonScape Product Evaluation Seam Implementation1A

## Checkpoint result

- Checkpoint: E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-IMPLEMENTATION1A
- Date: 2026-09-03
- CASE: 3 - CURRENT PRODUCT BEHAVIOR CONFLICTS WITH A FROZEN ORDER INVARIANT
- Decision: C - STOP; DO NOT REFACTOR; RECORD THE EXACT CONFLICT
- Design authority: e2r-spec 76747fe278f643627214802529711e021b113965
- Accepted Production source: fd563340625fd3d88dc25baedc93c4f8fe69e5e7

Characterization artifacts were generated and replayed, but the checkpoint
cannot authorize IMPLEMENTATION1B. The accepted solver is repeatable for the
same ordered input, yet Relation-array reordering changes floating-point
accumulation order and therefore changes exact settled coordinates in 14 of
16 frozen fixture variants. The discrepancy is small but real. It is recorded
as Product behavior; it is not rounded, tolerated, normalized, or fixed here.

The exact next prerequisite is:

E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-CHARACTERIZATION-ORDER-CONFLICT-RESOLUTION1

Status: NOT STARTED.

## W-C clone

Created new W-C clone:

C:\Users\extra\E2R\e2r-liaison-scape-product-evaluation-seam-implementation1

It was created from committed Git history, not from the live dirty working
tree, and detached exactly at fd563340625fd3d88dc25baedc93c4f8fe69e5e7.
The tracked Product worktree was clean before and after characterization.
Committed Lighthouse bytes in the clone matched the fd563340 commit blobs:

- EN blob: b96092b0c2b88c6c1ea41c11c1b36dccca3e9726
- JA blob: eed7a093170d675039bb7dc9a6e4c3cfe7148e12

The retained materializer clone was not modified.

## Existing coverage and new surface

Existing coverage was inventoried before adding the new surface. The existing
auto-layout tests cover deterministic behavior, relation-order handling on
small inputs, degree-ranked seeds, and component packing. Existing graph and
appUiIntegration tests cover Entity graph construction, self and parallel
Relations, SVG graph output, routing and label behavior, and App DOM checks.
Existing route and label tests cover ordinary, obstacle, parallel, overlap,
self-loop, manual-route, label-avoidance, recovery, and node-label behavior.
The existing tests did not provide frozen canonical artifacts for the accepted
pre-refactor outputs or complete corpus replay.

New files are all inside:

experimental/product-evaluation-seam/characterization1/

- characterization-lib.ts: immutable Git fixture loading, canonicalization,
  pure Product calls, and baseline construction;
- app-orchestration-characterization.ts: existing Product App DOM observation;
- generate-characterization.ts and replay-auto-layout.ts: explicit generation
  and fresh-process replay;
- characterization.test.ts: checked-in artifact replay, no-mutation, and
  immutable fixture checks; and
- artifacts/auto-layout-baseline.json, routing-baseline.json,
  label-baseline.json, artifact-index.json, and
  characterization-manifest.json.

No existing Product source file, normal Product test file, package file,
Dataset, fixture, or public file was changed.

## Corpus and canonicalization

The loader verified the role manifest from its immutable authority commit
6bc61cfdb6587d1579399cc658e5d19c98b87334 and verified raw fixture bytes from
the manifest entries. The fixture authority acquisition commit is
4d59010d8c13886c188d89a8b4c6c839e75f26e6. The corpus is 16 EN/JA variants
covering 8 structural fixtures: Lighthouse, Apollo 11, Ashen Crown, Titanic,
Berlin Wall, Regional Care Coordination, District Solar Cooperatives, and
Regional Emergency Response. The synthetic set adds singleton, isolated,
multi-component, normalization/tie, symmetry-control, and 24-node larger-size
cases. K3 remains control-only and was not treated as realistic evidence.

Role manifest SHA-256:

B867E9FF7B84107E8B4DDCCC02458B7B9AA535AB6FACE4AD10A2942CC8C8D8F5

Canonical bytes are UTF-8 with LF, deterministic object-key ordering, Product
array ordering preserved, normal JavaScript Number serialization, no rounding
or precision truncation, and SHA-256 over exact bytes. Volatile generatedAt
is excluded from semantic artifact identity. No machine-specific absolute path
is included in semantic identity.

## Baseline results

Auto-layout baseline:

- 38 cases: 16 solveAutoLayout fixture cases, 16 settleInitialPlacement
  fixture cases, and 6 synthetic solveAutoLayout cases;
- exact canonical artifact SHA-256:
  B1DE52138AD878DB1A34FFA7823EC0415AF8CB32178D0DB318AF02F4EF9B5E48;
- zero-Stored settling is represented by the current
  settleInitialPlacement path and zero-Stored synthetic controls; and
- same-input in-process and fresh-process exact replay: PASS.

Routing baseline:

- 9 PURE-ROUTE-PRIMITIVE cases;
- ordinary, obstacle, forward/reverse parallel, overlapping endpoints,
  self-loop, manual ordinary, and manual self-loop inputs are included;
- artifact SHA-256:
  9084B156A2D016DD782A0F389A21F7D68B2EBC26ABF0A863EDD780063A796130; and
- current App automatic routing was separately captured through the existing
  Product DOM path in 16 fixture records; no pure result was mislabeled as
  App orchestration.

Label baseline:

- 8 PURE cases: 4 Relation-label and 4 Node-label;
- EN, JA, long text, occupied labels, path avoidance, prior-placement input,
  and Node avoidance are represented;
- artifact SHA-256:
  A90CC0F2ADC205A8D5BFDB376174E1183AC19A02F6EDD03B4016A6EA24661D73; and
- current App automatic Relation and Node labels were separately captured
  through the existing Product DOM path in 16 fixture records.

App orchestration observation used the existing shared jsdom Product test
environment and Vite SSR module path. It opened each accepted fixture through
the same App handoff path, extracted relation order/path d values and automatic
Relation/Node label DOM geometry, and made no source instrumentation. This is
machine characterization only, not browser or visual acceptance.

Artifact index SHA-256:

7EE63AE8B8566A6E2B10ED69A1DAC45FD8D8BDF4701CB10EA22E63BCB04A96EA

Characterization manifest SHA-256:

A66596EA42FB92EBA84EEBB91DBDB68B122700E03AB7D0B5CFB20E9740838B11

## Repeatability, order, and mutation

Same ordered input is deterministic: PASS. Fresh-process auto-layout replay is
PASS. Node-array reversal is exact for all 16 fixture variants (16/16 PASS).
Relation-array reversal is exact for only 2/16 variants; 14/16 differ.

The exact observed conflict includes Lighthouse EN archive:

- ordered input: x 132.37067333205417, y 16.21487566771983;
- reversed Relation array: x 132.3706733320542, y 16.214875667719824.

The same paired EN/JA behavior occurs for Apollo, Ashen Crown, Titanic,
Regional Care Coordination, District Solar Cooperatives, and Regional
Emergency Response. The cause is the current relaxation loop's adjacency Set
iteration order and IEEE-754 accumulation order. This is a diagnostic fact,
not a license to change the solver.

Pure input no-mutation characterization is PASS for all 16 fixture layout
inputs and for the route and label primitive cases. Exact numeric equality is
confirmed as the policy. Tolerance introduced: NO. Tolerance invention is
prohibited.

## Candidate-blind and isolation checks

The characterization surface imports Product geometry and the shared DOM test
environment only. It does not import a candidate materializer, candidate
registry, TA machinery, FP1 machinery, or PR-3 review machinery. Candidate
materialization executed: NO. V0/V1/V2/V3 execution: NONE. Screenshots and
real-browser review: NONE. Candidate comparison, ranking, selection, and
Product candidate integration: NO.

Product source-diff proof against fd563340 is clean for src, public, package,
lockfile, and normal tests. The clone commit contains only the experimental
characterization surface. Research materializer reachability was not added.

## Validation

- focused characterization tests: 3/3 PASS;
- full Product tests: 280/280 PASS;
- Product lint: PASS;
- Product build: PASS;
- clone git diff --check: PASS;
- role manifest and all 16 immutable raw fixture hashes: PASS;
- e2r-spec npm.cmd run validate: PASS before the checkpoint documentation;
- e2r-spec diff checks: PASS.

The focused test is intentionally not included in the normal npm test glob;
it was run directly with node --experimental-strip-types. The normal Product
gate remains the unchanged 280-test suite.

## Commits and repository state

W-C characterization commits:

- df0fa53 - test: characterize LiaisonScape product evaluation seams;
- 8b366a0 - test: bind characterization provenance.

The second commit only binds checkpoint and Node-version provenance into the
already-created artifacts. Both commits are local and unpushed.

e2r-spec result document and roadmap entry are to be committed after this
record is written. The current result path is:

docs/liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-product-evaluation-seam-implementation1a-result.md

Knowledge Candidate assessment: no ai-knowledge entry is created. The
Relation-order floating-point finding is currently repository-specific
characterization evidence, not a workspace-wide decision; it must be resolved
or explicitly adopted by a later bounded authority.

Live Production modified by this checkpoint: NO. Its pre-existing dirty
protected Lighthouse EN/JA sample files remain untouched. The retained
materializer clone remains detached at fd563340625fd3 with ?? experimental/
and has no changes from this checkpoint. ai-knowledge retains its pre-existing
dirty playbooks/e2r-edge-cdp-browser-diagnostic.md change untouched.

PR-3: NO. Candidate selected: NO. Publication, push, tag, release, deploy:
NONE.

## Final decision

CASE 3 / DECISION C

STOP; DO NOT START IMPLEMENTATION1B.

Exact smallest next prerequisite:

E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-CHARACTERIZATION-ORDER-CONFLICT-RESOLUTION1

NOT STARTED.
