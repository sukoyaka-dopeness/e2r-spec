# LiaisonScape Initial Placement Seed: Visual Evidence Run Configuration Design1

Date: 2026-09-03

Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-RUN-CONFIGURATION-DESIGN1`

Status: complete as a design checkpoint; no evidence run started.

## CASE / Decision

**CASE 2 / Decision B — RUNTIME TRANSFORM NEEDS BOUNDED COMPATIBILITY EVIDENCE**

The run-configuration and execution-sequence contract is frozen except for the
numeric Production runtime transform. The old monolithic execution pointer is
not reactivated. The exact next checkpoint is:

`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-RUN-CONFIGURATION-EVIDENCE1`

That next checkpoint is not started by this work. It may collect only
candidate-neutral compatibility evidence sufficient to adopt one global
transform. It may not execute the candidate matrix, rank candidates, perform
visual review, or claim PR-3 evidence.

## Why this result is bounded

The preceding Harness Implementation1 checkpoint produced a validated,
disposable harness candidate and froze the V0/V1/V2/V3 plan, but correctly
left `PR3-RUNTIME-TRANSFORM = UNFROZEN`. The implementation-validation values
`originX=100/1`, `originY=200/1`, and `scale=10/1` were test configuration only.

The materializer contract deliberately requires its caller to provide a
positive uniform affine transform and deliberately does not define a
LiaisonScape pixel origin or scale. Current Product source defines logical
layout and viewport behavior, but it does not define an inverse mapping from
the normalized materializer domain into that logical layout domain. Treating
the current solver constants or the implementation-test values as that mapping
would invent a Production policy. This is why the transform remains open and
why the next checkpoint is an evidence prerequisite rather than V0 execution.

No Harness source, Product source, materializer source, fixture, candidate,
browser, screenshot, baseline, or application state was changed or executed.

## Authorities and protected state

| Authority | Frozen identity / state |
| --- | --- |
| Canonical specification | `C:\Users\extra\E2R\e2r-spec` |
| Live Product | `C:\Users\extra\E2R\e2r-liaison-scape` at `563d5bc3ce8d3a915c75dd13b33188ae6f7fccaf` |
| Harness candidate | `C:\Users\extra\E2R\e2r-liaison-scape-visual-evidence-harness-implementation1` at `9bd3f3b819bf07ccdfa0339be9a953d045c4e4fc` |
| Harness implementation parent | `36650462f7f2def95478098a01cb345b9c89cfa1` |
| Harness base Product parent | `563d5bc3ce8d3a915c75dd13b33188ae6f7fccaf` |
| Retained historical materializer | `C:\Users\extra\E2R\e2r-liaison-scape-production-candidate-materialization-implementation1`, historical authority `fd563340625fd3d88dc25baedc93c4f8fe69e5e7` |
| Baseline2 | `324193eda5924d2c5f5d0e0cad8a92b64d2ea6a8` |
| Fixture role manifest | `docs/evidence/visual-fixture-role-manifest-v1.json`, SHA-256 `B867E9FF7B84107E8B4DDCCC02458B7B9AA535AB6FACE4AD10A2942CC8C8D8F5` |

The future evidence authority binds directly to Harness commit
`9bd3f3b819bf07ccdfa0339be9a953d045c4e4fc`. No Harness source change is
required by this design. The candidate remains disposable and is not adopted
to Live.

## Pre-run value inventory

The following classification is the required preflight inventory. “Frozen”
means the contract or authority is already fixed. “Derived” means it is
calculated from a frozen authority rather than chosen by an operator.
“Supplied” means a run must provide and record it before its first evidence
artifact. “Volatile” is diagnostic metadata and must not enter semantic
fingerprints.

| Value | Classification | Current result / preflight rule |
| --- | --- | --- |
| Product source commit | A — frozen | `563d5bc3...` |
| Harness source identity | A — frozen | `9bd3f3b...`; future evidence binds to this exact candidate |
| Materializer source identity | A — historical/frozen | Harness snapshot plus exact retained provenance at `fd563340...`; source drift must fail preflight |
| Candidate registry | C — supplied/frozen before run | Use `VSR-CANDIDATE-REGISTRY-v1` and record its exact snapshot/hash; no unlisted identity or fallback |
| Fixture manifest | A — frozen | `visual-fixture-role-manifest-v1.json` and recorded SHA above |
| Fixture raw hashes | B — derived | Recompute from the frozen manifest authority and compare before execution |
| Projection hashes | B — derived | Derive from exact fixture, candidate, and projection canonicalization; record in V0 linkage |
| Runtime affine transform | C — open | `PR3-RUNTIME-TRANSFORM-v1` is not frozen; the next checkpoint must adopt one or remain blocked |
| Settling iteration count | A — frozen | Current accepted initial-placement settling is exactly `3` iterations |
| Routing configuration | C — supplied/frozen | Empty manual-route state; current Product automatic routing seam and canonical Relation ordering |
| Label configuration | C — supplied/frozen | Empty manual-label state; current Product automatic node/relation label seams |
| Fit / viewport configuration | A/C — contract plus supplied capture values | `PR3-CAPTURE-VIEWPORT-v1`, including the values in the viewport section below |
| Browser product/family | A — policy frozen | Microsoft Edge Stable is the canonical PR-3 family/product |
| Browser executable path policy | A — policy frozen | Resolve only the explicit allowlisted Edge Stable path; record the resolved absolute path |
| Browser version binding | C — supplied per run | Record exact executable/runtime version before capture; drift creates a new lineage |
| Viewport | A — frozen | 1280 × 900 CSS pixels |
| DSF | A — frozen | Exactly 1; another value is not an automatic alternative |
| Zoom | A — frozen | 100% |
| Locale | A — frozen | Fixture-designated EN and JA locale pair; both are mandatory where the matrix plans them |
| Semantic run ID | B/C — derived after supplied values | SHA-256 of canonical run configuration; no wall-clock input |
| Artifact output root | C — supplied/derived | `artifacts/<run-id>/`, resolved inside the run workspace before execution |
| Stage execution order | A — frozen | Fixed bounded-batch order below |
| Retry semantics | A — frozen | `PR3-RETRY-v1` below |
| Failure continuation | A — frozen | Continue independent cells, retain explicit terminal rows for skipped downstream stages |
| Browser restart semantics | A — frozen | Fresh browser per V3 cell, with bounded retry attempts |
| Screenshot encoding | A — frozen contract | PNG capture with exact dimensions and recorded byte hash; no lossy or silent conversion |
| Artifact canonicalization | A — frozen | `VSR-ARTIFACT-CANONICAL-v1`: UTF-8, LF, final newline for canonical text; volatile fields excluded from semantic indexing |
| Review packet identity | B/C — derived from run and packet inputs | Stable packet-local identity derived from semantic run ID and packet scope |
| Anonymization mapping | A — policy frozen, B — mapping derived | Fixed anonymized A–E order; mapping stored separately from the reviewer-facing packet |
| GeneratedAt, PID, port, temp path, CDP target ID | D — volatile | Diagnostic only; excluded from semantic run and stage hashes |

No evidence may start while a C-class value is absent, contradictory, or
different from the run manifest. A D-class value may vary on retry only when
the retry contract permits it.

## Materializer affine semantics

The exact materializer snapshot computes normalized Derived coordinates and
then applies the caller-supplied transform:

```text
x_runtime = originX + scale * x_exact
y_runtime = originY + scale * y_exact
scale > 0
```

`originX`, `originY`, and `scale` are exact rationals with positive
denominators. Exact rational arithmetic is performed before the single
JavaScript `Number` conversion. Invalid or missing transforms are rejected;
there is no implicit identity, viewport fit, per-fixture tuning, or per-
candidate tuning. Distinct-coordinate collapse and non-finite runtime values
are failures.

The audited materializer snapshot is the Harness Implementation1 copy of
`experimental/production-candidate-materialization/core/materializer.mjs`,
SHA-256 `850E9F9D8F6624DD9BF4B3ABC6DC6DC143037F8BDA0AE357F3C8924E502E8CF4`.
Its generic family domain is the bounded `1 <= N <= 65` contract. That domain
does not, by itself, establish a LiaisonScape pixel scale, origin, viewport
margin, or Product coordinate convention.

## Product coordinate and viewport semantics audit

The current Product authority was audited without changing it. The relevant
source hashes are:

| File | SHA-256 |
| --- | --- |
| `src/auto-layout.ts` | `2F53394607E169D377723215A92171F5B4A82212D8F6352A7C96EFA73FC9C6D8` |
| `src/viewport.ts` | `53168CEFA585AFD6C850BD859943AF66E035765AAA552E079B73005177E93D3F` |
| `src/graph-presentation.ts` | `D91F9752C67B17A45B644354BD593BD8CBE0549AE6E03ECEA0799E3E9DA00853` |

The Product startup solver has implementation-defined logical layout
semantics, including component placement around `componentLeft + 160` and
`y=160`, the current clearance/component-gap defaults, ring spacing, and an
initial settling call of exactly three iterations. These values are solver
parameters, not a normalized-domain origin/scale rule. They describe how the
Product places or settles a supplied graph; they do not specify which affine
mapping a materializer must use to supply that graph.

The Product viewport layer centers and fits logical points into a requested
width and height. Its `fitGraphView` bounds and scale clamp are downstream
viewport behavior. The current App open path obtains stored coordinates,
settles only when stored coordinates are absent, and then fits the graph view.
This establishes neither a candidate-neutral inverse mapping nor permission
to replace the current viewport contract with a materializer transform.

Routing and labels remain downstream Product seams. The run configuration
therefore records the current automatic routing, automatic relation-label,
automatic node-label, line-style, arrow-display, arrowhead, fit, and centered
viewport calls with manual routes, manual labels, selection, drag, persistence,
and rescue state empty/absent. This is a test input configuration, not a
Product behavior change.

## Existing transform authority audit and option evaluation

The audit found no accepted Production numeric transform other than the
generic positive-rational transform contract. The values `100/1`, `200/1`, and
`10/1` occur in implementation-validation fixtures/provenance only. No
accepted document authorizes them for PR-3 evidence.

| Option | Evaluation | Result |
| --- | --- | --- |
| T-A — existing Product-semantic transform | Product startup constants describe solver placement, clearance, gaps, and settling, not an affine conversion from normalized materializer coordinates. | Rejected: no source-supported transform follows |
| T-B — domain-mapping transform | The materializer leaves origin/scale open, and the current logical viewBox/fit behavior does not uniquely define fixed margins or an inverse mapping. | Rejected: choosing margins or scale would invent policy |
| T-C — identity-class transform | Identity has no accepted Product semantic meaning for the normalized V0 domain; raw normalized values cannot be treated as Product coordinates by convenience. | Rejected |
| T-D — transform must be evidence-validated first | A bounded, candidate-neutral compatibility evidence checkpoint can test admissibility and freeze one global transform without observing candidate quality. | **Selected** |
| T-E — another source-supported rule | No additional accepted numeric rule was found in the specification, Product, Harness, materializer, or retained provenance. | Not available |

### Selected transform policy

`PR3-RUNTIME-TRANSFORM-v1 = UNFROZEN`.

No numeric `originX`, `originY`, or `scale` is frozen by this checkpoint. The
implementation-test transform remains explicitly non-authoritative:

```text
originX = 100/1
originY = 200/1
scale   = 10/1
```

The next `...RUN-CONFIGURATION-EVIDENCE1` checkpoint must use a predeclared,
candidate-neutral probe contract. It may test exact rational transforms against
fixed canonical points and current Product downstream compatibility, including
finite/distinct output, deterministic replay, three-iteration consumption,
no-mutation behavior, and declared viewport reachability. It must define its
admissibility rule before collecting results, compare no candidate outputs, use
no human preference, and produce no PR-3 evidence. If it cannot establish one
global transform under that rule, it must remain blocked and must not start V0.

Once adopted, the transform is candidate-neutral, fixture-neutral,
locale-neutral, deterministic, predeclared, and immutable for every run
lineage that includes it. A transform change requires a new run identity and
cannot be mixed with earlier artifacts.

## Browser authority and capture contract

`PR3-BROWSER-AUTHORITY-v1` is frozen as a policy. Microsoft Edge Stable is the
canonical browser product/family for the main evidence run. A read-only
installation audit found:

- `C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe`, product
  version `152.0.4191.53`;
- `C:\Program Files\Google\Chrome\Application\chrome.exe`, product version
  `151.0.7922.175`;
- the 32-bit Chrome path was absent.

The observed versions are discovery metadata, not a PR-3 run binding. Before a
future capture, resolve the canonical Edge executable from the explicit
allowlist, verify its absolute path and product version, and record the exact
browser version in the run manifest and capture artifacts. The accepted Edge
CDP playbook supplies the later loopback-only, dedicated-profile, version and
target diagnostic procedure. This checkpoint did not launch Edge or Chrome,
open a CDP port, or create a browser artifact.

There is no automatic Edge-to-Chrome fallback. If the canonical Edge
executable or its declared version is unavailable, capture is `RUN-BLOCKED`.
Chrome may be used only in a separately labelled diagnostic run and can never
be substituted into the main PR-3 lineage. A browser update, OS/browser
identity change, or mismatch between the declared executable version and the
runtime-reported version invalidates the current PR-3 lineage as a whole; it
requires a new semantic run identity. Existing machine artifacts remain
historical artifacts and are not silently mixed into the new lineage.

## Viewport contract

`PR3-CAPTURE-VIEWPORT-v1` is frozen as:

```text
CSS width:       1280
CSS height:       900
device scale:    1 (mandatory)
browser zoom:    100%
SVG viewBox:     0 0 800 500
```

DSF 1 is mandatory, not an “actual environment” default. A capture at another
DSF is invalid for this lineage. The logical SVG viewBox is not a substitute
for the materializer transform and must not be used to infer one.

## Run identity and source freeze

`PR3-RUN-IDENTITY-v1` is frozen as a contract, but no actual PR-3 run ID is
minted while the transform is unfrozen. The semantic run ID is the SHA-256 of
canonical UTF-8/LF JSON with sorted keys, formatted as `pr3r1-<lowercase
sha256>`. `generatedAt` and all volatile diagnostics are excluded.

The canonical identity input binds at least:

```text
productAuthority       = 563d5bc3ce8d3a915c75dd13b33188ae6f7fccaf
harnessAuthority       = 9bd3f3b819bf07ccdfa0339be9a953d045c4e4fc
materializerSnapshot   = exact Harness snapshot plus retained provenance
fixtureManifest        = visual-fixture-role-manifest-v1 + SHA-256
candidateRegistry      = VSR-CANDIDATE-REGISTRY-v1 + exact snapshot hash
runtimeTransform       = adopted PR3-RUNTIME-TRANSFORM-v1
settling               = initial-placement 3 iterations
routing                = current automatic seam, manual state empty
labels                 = current automatic seams, manual state empty
viewport               = PR3-CAPTURE-VIEWPORT-v1
browserAuthority       = PR3-BROWSER-AUTHORITY-v1 + exact version/path
executionPlan          = VSR-RUN-PLAN-v1 plus this decomposition
```

`PR3-SOURCE-FREEZE-v1` is also frozen as a contract. Before the first
artifact, preflight must verify the exact Product commit, Harness commit,
materializer snapshot and provenance, fixture manifest and raw hashes,
candidate registry, and complete run configuration. Any change stops the
current lineage. No evidence from different authorities, transforms,
browsers, viewport contracts, or configurations may be combined.

## Execution sequence and bounded batches

The selected strategy is **E-C — bounded batches**. It preserves cell-level
stage linkage while allowing deterministic machine failures to be recorded
before browser work. The order is fixed and is not an operator-selected
survivor list:

1. Run global preflight and write the run manifest. No stage starts if an
   immutable authority, transform, or environment contract fails.
2. Run B0 over all 8 structural diagnostics, with `candidate=NO`.
3. Run B1 over all 32 V2/V3 presentation diagnostics, with `candidate=NO`.
   B0/B1 are full frozen-corpus diagnostics and do not depend on candidate
   success.
4. In fixture-manifest order, process one bounded structural-fixture batch at
   a time. Within each batch, process the complete candidate registry in its
   frozen order. For every candidate/fixture cell, run V0, then V1, then both
   locale V2 records in the manifest locale order. A failed upstream stage
   creates explicit downstream terminal rows and does not invoke that stage.
5. Complete Phase M for every planned candidate V0/V1/V2 row and every B0/B1
   row before any V3 browser capture begins.
6. In the same frozen candidate/fixture/locale order, run each planned V3
   capture as its own browser session. A V3 cell is eligible only when its V2
   row is machine-valid; an ineligible row is still written as an explicit
   terminal missing/skip status.
7. After all V3 rows are terminal, generate reviewer-facing packets in the
   fixed packet order and conduct the separately authorized review checkpoint.
8. Run PR-3 assessment only against complete, frozen, linked evidence. This
   design creates no score, average, majority, ranking, winner, or selection
   operation.

This is E-C rather than a stage-major run because the fixed structural-fixture
batches contain linked V0/V1/V2 cells, while the machine/browser phase gate
prevents screenshots from being used to hide or filter machine failures.

## Phase boundaries and downstream statuses

The future decomposition is:

- **Phase M — machine evidence:** V0, V1, V2, artifact validation, exact
  linkage, settling/routing/label hard evidence, and B0/B1 diagnostics.
- **Phase B — browser capture:** V3 only, using the canonical browser and
  capture viewport.
- **Phase R — human review:** anonymized reviewer packets and criterion-local
  review statuses.
- **Phase P — PR-3 assessment:** a later assessment of complete frozen
  evidence; it does not generate or repair evidence.

If a V0, V1, or V2 stage fails, all planned dependent rows remain in the
matrix with `EVIDENCE-MISSING` and an explicit upstream attribution. A failure
attributable to the fixture authority is `FIXTURE-AUTHORITY-FAILURE`; a
Product downstream failure is `PRODUCT-DOWNSTREAM-FAILURE`; a harness failure
is `HARNESS-FAILURE`; a browser failure is `BROWSER-CAPTURE-FAILURE`.
Deterministic candidate-stage failures retain candidate-local attribution.
No failed cell is removed, relabelled as a survivor, or excluded from
completeness accounting.

## Retry and browser-session policy

`PR3-RETRY-v1` is frozen. Deterministic stage failures are terminal and are not
automatically retried. Harness/process and browser transport failures may be
retried with identical semantic inputs, at most two retries after the initial
attempt (three attempts total). Fixture-authority and Product downstream
failures are terminal unless the authority itself is corrected in a new run
lineage.

A retry may change only PID, loopback debugging port, temporary path, target
ID, and other explicitly volatile metadata. It may not change candidate,
fixture, locale, transform, Product/Harness/materializer authority, viewport,
DSF, zoom, routing, settling, labels, browser family, or browser version. A
semantic change requires a new run ID. Exhausted capture attempts receive a
terminal `BROWSER-CAPTURE-FAILURE` row and any dependent review row receives
`EVIDENCE-MISSING`.

Browser policy is **B-S1 — fresh browser per V3 cell**. Each session uses the
isolated evaluation entry, a dedicated temporary profile, no persisted Product
state, no localStorage dependency, a deterministic page load/reset, and an
explicit recovery path that starts a fresh process for a retry. No existing
user browser session is reused.

## Artifact root, immutability, and resume

The artifact root is:

```text
artifacts/<run-id>/
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

`VSR-ARTIFACT-CANONICAL-v1` and `VSR-STAGE-LINKAGE-v1` are carried forward.
Canonical text is UTF-8/LF with a final newline. Each stage records upstream
semantic fingerprints and source/fixture hashes. Run directories are
immutable once finalized. Attempts use explicit attempt metadata and are
never silently overwritten with different semantic bytes. A final index names
the accepted terminal artifact for each planned row and retains failed
attempts for audit.

`PR3-RESUME-v1` is frozen. Resume reloads the run manifest, verifies every
immutable authority and every existing artifact hash, and continues only
missing permitted stages. It never regenerates a finalized upstream artifact.
Any authority, transform, browser, viewport, configuration, or hash mismatch
refuses resume and requires a new lineage. Resume cannot turn a missing or
failed row into an omitted row.

## Review packet and human-review scope

Review packet identity is derived from the semantic run ID and packet scope.
Candidate presentation order is **fixed but anonymized**, not randomly
permuted. Within each packet, the five candidate slots are stable `A`, `B`,
`C`, `D`, and `E` in frozen registry order. The candidate-to-slot mapping is
stored in a separate restricted audit artifact and is absent from the
reviewer-facing packet. Candidate names, ranking fields, winner fields, and
selection fields are not exposed.

Review is local to criterion × fixture/role × locale × candidate slot. The
review surface is the valid V3 capture and its linked machine artifact; V2 is
machine evidence, not a substitute for browser visual evidence. B0/B1 may be
shown only as separately labelled diagnostic context and never as candidate
review evidence. Accepted criteria remain V-A through V-H. Review statuses are
`PASS`, `FAIL`, `INDETERMINATE`, `NOT-APPLICABLE`, and `EVIDENCE-MISSING`.
`severeFailure` is an explicit criterion-local finding, not a global score.
`optionalPreference` is optional and local; it cannot imply acceptance or
override a failure. Machine PASS does not imply visual PASS.

No global “best candidate” review is designed or authorized here.

## B0/B1 timing and completeness

B0 (8 structural diagnostics) and B1 (32 presentation diagnostics) run after
preflight and before candidate batches, over the full frozen corpus. They use
`candidate=NO`, are labelled diagnostics, and never enter candidate counts,
pass criteria, rank, winner, preference, or selection calculations.

The future phase gates are:

- Machine phase complete only when all 240 planned candidate V0/V1/V2 rows
  (40 + 40 + 80) and all 40 B0/B1 rows have terminal status.
- Browser phase complete only when all 80 planned V3 rows have either a valid
  capture or an explicit terminal non-candidate-attributed failure/missing
  status.
- Review phase complete only when every required criterion-local review row
  has terminal status.
- PR-3 assessment is forbidden on silently incomplete evidence and must report
  the exact incomplete rows if a completeness gate fails.

No quality threshold, weighted score, average, majority, minimum win count, top
candidate, or other selection rule is invented by this design. Any later PR-3
combination rule must be carried forward from an accepted contract or be made
the subject of a separate design checkpoint.

## Checkpoint decomposition and historical pointer reconciliation

The selected bounded sequence is:

1. `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-RUN-CONFIGURATION-DESIGN1` — this checkpoint, complete.
2. `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-RUN-CONFIGURATION-EVIDENCE1` — exact next prerequisite; not started.
3. `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-RUN-CONFIGURATION-ADOPTION1` — future transform adoption, not started.
4. `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-MACHINE-EXECUTION1` — future Phase M, not started.
5. `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1` — future Phase B, not started.
6. `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-REVIEW1` — future Phase R, not started.
7. `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PR3-ASSESSMENT1` — future Phase P, not started.

The historical
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-EXECUTION1`
pointer is **RENAMED / SPLIT**. It remains a historical, unexecuted
monolithic pointer. It is superseded as the active structure by the
run-configuration prerequisite followed by machine, browser, review, and
assessment checkpoints. Historical documents are not amended by this result.

## Explicit non-execution record

- Harness source change: **NO**.
- Live Product change: **NO**.
- Materializer source change: **NO**.
- Candidate matrix execution: **NO**; planned 240 candidate records remain
  unexecuted.
- B0/B1 execution: **NO**; planned 40 diagnostic records remain unexecuted.
- V0/V1/V2/V3 PR-3 evidence executed: **0**.
- Materializer PR-3 execution: **NO**.
- Browser launch or CDP session: **NO**.
- Screenshot or PNG capture: **NO**.
- Human visual review: **NO**.
- `E-VISUAL`: **NO**.
- Candidate comparison, ranking, selection, or winner: **NO**.
- Product integration or Product algorithm/settling/routing/label/viewport/
  baseline change: **NO**.
- `PR-3`: **NO**.

## Knowledge Candidate assessment

No new reusable workspace knowledge entry is needed. This checkpoint records a
repository-local run-configuration decision and the exact reason the generic
materializer transform cannot be promoted into a Product coordinate policy.
The existing Edge/CDP playbook was consulted as scoped operational guidance;
it was not changed.

## Result and next action

Result document: this file.

Roadmap: updated additively with this CASE 2 / Decision B result, transform
status, browser policy, bounded decomposition, historical pointer
reconciliation, and exact next prerequisite.

The exact next checkpoint is:

`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-RUN-CONFIGURATION-EVIDENCE1`

It is **NOT STARTED**. Stop after this checkpoint. No push, tag, release,
deploy, or publication occurred.
