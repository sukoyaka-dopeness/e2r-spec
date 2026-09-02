# E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-DESIGN1

Date: 2026-09-03

## 1. Status and mandatory boundary

`CASE 1 / DECISION A`: the visual, settling, routing, label, viewport, review,
and provenance design contracts are frozen for future evidence only. The
contracts do not constitute visual evidence.

```text
VISUAL / SETTLING / ROUTING EVIDENCE CONTRACT DESIGN ONLY
PR-2 COMPLETE-BOUNDED IS INPUT EVIDENCE
PR-3 NOT YET ESTABLISHED
NO VISUAL ACCEPTANCE EXECUTION
NO MANUAL VISUAL ACCEPTANCE
NO SCREENSHOT ACCEPTANCE
NO CANDIDATE RANKING
NO CANDIDATE SELECTION
NO PRODUCTION REPLACEMENT
NO PRODUCTION INTEGRATION
NO LIVE APP IMPORT OF RESEARCH MATERIALIZER
NO USER-VISIBLE STRATEGY SELECTOR
NO DEFAULT CANDIDATE
NO SETTLING IMPLEMENTATION CHANGE
NO ROUTING IMPLEMENTATION CHANGE
NO LABEL IMPLEMENTATION CHANGE
NO VIEWPORT IMPLEMENTATION CHANGE
NO PERFORMANCE OPTIMIZATION
NO STRUCTURAL OBJECTIVE RERUN
NO CROSS-FIXTURE SCALAR SCORE
NO CLAIM THAT INITIAL PLACEMENT IS SOLVED
```

PR-2 does not imply visual quality, PR-3, or a candidate choice. HARD-1..7 do
not imply visual acceptance. PP-M3 remains fixture-local preference evidence.
The current Production baseline is not TA0 or FP1. Candidate seed geometry
does not determine the final rendered graph by itself: settling, routing,
labels, viewport fitting, CSS, and browser rendering remain downstream
responsibilities. Synthetic controls do not satisfy realistic roles, K3 is not
realistic quality evidence, the ROLE GAP remains open, and N>65 support is not
claimed.

## 2. WHY

The preceding checkpoint,
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-PR2-NONVISUAL-EVIDENCE-COMPLETION1`,
completed bounded PR-2 nonvisual evidence for the five authorized research
identities on `1 <= N <= 65`. The frozen Production Readiness Design1 then
places visual, settling, and routing/label evidence after nonvisual evidence,
with viewport, performance, and integration following that stage.

This design freezes how those layers will be observed and attributed. It does
not run visual tests, take screenshots, acquire fixtures, or connect the
research materializer to the live App.

## 3. Authorities and repository state

The canonical specification repository is
`C:\Users\extra\E2R\e2r-spec`. Production LiaisonScape is
`C:\Users\extra\E2R\e2r-liaison-scape`. The retained disposable evaluation
clone is
`C:\Users\extra\E2R\e2r-liaison-scape-production-candidate-materialization-implementation1`.

The accepted Production source authority is
`fd563340625fd3d88dc25baedc93c4f8fe69e5e7`. The e2r-spec PR-2 result is
`872b7e55a59ddc3ba8cca5f52bb1ee120c1833a0`. The five candidate identities
remain exactly:

```text
TA0/REP-0
TA2-DEG-W1-OP-v1
TA2-MOTIF-W1-OP-v1
TA3-FWD-W1-OP-v1
TA3-REV-W1-OP-v1
```

FP1-NGP remains a family generator/dependency only. TA1-W1-OP-v1 remains
fixture-witness-only. K3 and `REFERENCE-BASELINE` are not candidates.

The protected Session, the two dirty Production Lighthouse samples, and the
ai-knowledge browser diagnostic playbook remain untouched. The clone remains
detached with its existing untracked experimental surface and no clone
commit. No protected dirty bytes are visual evidence authority.

## 4. PR-2 input state

All five identities enter this design as
`PR-2 NONVISUAL-EVIDENCE-COMPLETE / COMPLETE-BOUNDED / 1 <= N <= 65`.
`PR-C2` is supported only for bounded nonvisual evidence. `PR-C3`, `PR-C4`,
and `PR-C5` remain `NO`. No candidate is selected, integrated, or visually
accepted.

## 5. Exact PR-3 reconciliation

The frozen readiness state machine is:

```text
PR-0 UNASSESSED
  -> PR-1 HARD-ELIGIBLE
  -> PR-2 NONVISUAL-EVIDENCE-COMPLETE
  -> PR-3 VISUAL-EVIDENCE-COMPLETE
  -> PR-4 INTEGRATION-EVIDENCE-COMPLETE
  -> PR-5 PRODUCTION-SELECTION-ELIGIBLE
```

The Readiness Design1 prerequisite DAG places `visual + settling +
routing/label evidence` after nonvisual evidence and places `viewport +
performance + integration compatibility` after that group. This design
therefore defines PR-3 as completion of the visual/settling/routing-label
evidence surface, per candidate and across the required common realistic
role set, without requiring the later viewport, performance, or live
integration classes to issue PR-3. This is a reconciliation of the frozen
state machine and DAG, not a candidate result.

| Evidence class | Needed for PR-3? | Responsibility layer | Current status |
| --- | --- | --- | --- |
| `E-STRUCTURAL` | No, context only | research characterization | partial/research-only; never a substitute |
| `E-VISUAL` | Yes | browser-rendered visual acceptance | not executed |
| `E-SETTLING` | Yes | Product downstream settling | not executed |
| `E-ROUTING` | Yes, including labels | Product downstream route and label geometry | not executed |
| `E-VIEWPORT` | No; separate after PR-3 | viewport/evaluation boundary | unfrozen execution |
| `E-PERFORMANCE` | No; separate after PR-3 | Product/evaluation performance | unfrozen execution |
| `E-COMPAT` | PR-2 input; live integration is later | compatibility boundary | PR-2 complete-bounded; PR-4 live work absent |
| Production integration | No | PR-4 | not started |
| Candidate selection | No | PR-5 | not started |

The visual evidence class necessarily observes a fitted view, but observing
the current fit is not the same as completing the separate `E-VIEWPORT`
acceptance class.

## 6. Current Production visual pipeline

The following is reconstructed from the accepted source. The research
materializer is not in this pipeline.

```text
Dataset load/open
  -> getStoredCoordinates(Dataset)
  -> buildEntityGraph(Dataset)
  -> placeInitialEntities(nodes, edges, Stored)
  -> if Stored is empty:
       settleInitialPlacement({entities, relations})
     else:
       use seeded Stored/Owned positions
  -> positions state
  -> routeGraphEdge for each visible Entity Relation
       (fixed/manual/self/overlap priority, then ordinary priority)
  -> placeEdgeLabel for labeled Relations
       (automatic or manual anchor, with visual-state reconciliation)
  -> placeNodeLabel for each Entity
       (automatic or manual offset, using routes and occupied labels)
  -> centeredViewportTransform(scale, pan, 800, 500)
  -> SVG paths, polygons, node bodies, text, and connectors render
```

`fitGraphView` is called at Dataset acceptance and on explicit Reset View from
the current node positions. It receives a fixed logical size of `800 x 500`
and a default padding of `96`; it computes bounds from node centers plus
`32` units and does not include route or label extents. The returned scale and
pan are applied by the centered SVG transform. The SVG viewBox is `0 0 800
500`; CSS makes the SVG responsive and gives it a viewport-dependent minimum
height.

The candidate materializer currently ends outside this pipeline. In
particular, `acceptDataset` calls `settleInitialPlacement` with only graph
entities and relations when there are no Stored coordinates; it does not pass
candidate seed positions. Therefore a future V1 observation must use a
separately authorized disposable evaluation seam that explicitly supplies a
seed to a downstream settling observation. Running the current App alone
cannot be reported as “candidate seed after current settling.”

## 7. Pipeline responsibility decomposition

| Stage | Consumes seed positions? | Mutates positions? | Visual-only derivation? | Viewport-dependent? | Text/browser-dependent? |
| --- | --- | --- | --- | --- | --- |
| Candidate seed materialization | produces candidate seed | no Dataset mutation | no; coordinate output | no | no |
| `placeInitialEntities` | consumes Stored/Owned positions | returns a new placement map | no | optional bounds only | no |
| `settleInitialPlacement` | current source does not consume candidate seed | returns derived positions | no | no | no |
| Relation routing | consumes current positions | no Dataset mutation | yes, path/arrow geometry | no | label rectangles may influence route |
| Node-label placement | consumes positions and route paths | no Dataset mutation | yes | no | text heuristic plus eventual browser rendering |
| Relation-label placement | consumes route samples and text | no Dataset mutation | yes | no | text width and SVG rendering matter |
| `fitGraphView` | consumes node positions only | no Dataset mutation | yes, scale/pan | logical 800x500 input | no |
| SVG/CSS render | consumes all derived geometry | DOM/render state only | final presentation | yes | yes |

## 8. Candidate responsibility boundary

Candidate responsibility is limited to the semantic contract already frozen
by materialization:

- assign every graph Node exactly one finite seed coordinate;
- emit the candidate mapping and seed fingerprint;
- report candidate-local hard-gate, runtime, and deterministic failures; and
- preserve its identity and configuration in evidence provenance.

Candidate responsibility does not include settling, routing, labels, viewport
fit, CSS, browser measurement, or rendered appearance. A candidate may still
become candidate-blocking if the same seed-derived defect persists through a
controlled downstream ablation, but that attribution requires evidence.

## 9. Downstream Product responsibility boundary

Product downstream responsibility includes:

- accepting or rejecting the evaluation boundary without changing Dataset
  semantics;
- applying the explicitly supplied seed in a disposable evaluation path;
- settling behavior and iteration configuration;
- route construction, obstacles, occupied paths, self-loops, and parallels;
- automatic and manual node/relation label placement;
- graph bounds, fit, scale, pan, CSS, responsive behavior, and SVG rendering.

The current Product baseline remains independent. A routing or label defect
observed after a candidate seed is not candidate-attributable merely because
it appears in the final screenshot.

## 10. Required ablation stages (`VSR-ABLATION-v1`)

All four stages are required for a future candidate/fixture acceptance cell.

| Stage | Observation | Artifact | Screenshot | Environment | Purpose and limit |
| --- | --- | --- | --- | --- | --- |
| `V0` | raw candidate seed before settling | seed coordinates, graph/seed fingerprints, provenance | no; machine artifact is required | pure Node materializer | isolates candidate output; says nothing about final presentation |
| `V1` | same seed after current Product settling | post-settle coordinates, iteration/configuration, hard geometry diagnostics | no; screenshot optional diagnostic | disposable downstream harness, Node plus Product geometry | measures settling transformation; current App must not be misreported as consuming the seed |
| `V2` | routed and labeled geometry | route samples, path fingerprints, label rectangles, node-label placements, attribution data | required for visual acceptance | built app in a real browser | separates route/label effects from seed and settling; geometry alone cannot prove text rendering |
| `V3` | final fitted viewport render | final coordinate/path/label/viewport manifest and screenshot hash | required | real browser with captured viewport/CSS/SVG | evaluates the rendered initial view; cannot by itself attribute an upstream defect |

V0 and V1 are diagnostic and machine-authoritative for coordinates. V2 and
V3 require browser-rendered evidence for visual acceptance. A final screenshot
without V0/V1/V2 cannot establish attribution and is `EVIDENCE-MISSING` for
the PR-3 protocol.

## 11. Settling contract (`VSR-SETTLING-v1`)

The accepted source uses `INITIAL_PLACEMENT_SETTLING_ITERATIONS = 3` for the
zero-Stored startup branch. `solveAutoLayout` uses deterministic ID ordering,
undirected unique relation pairs, degree-ranked component seeds, fixed
clearance/gap constants, and bounded iteration updates. It ignores self and
duplicate pair multiplicity for this settling computation. The value three is
an accepted current behavior, not a claim of optimality.

Future settling evidence must answer S1-S7:

- S1: finite and distinct seed positions remain finite and visually
  non-collapsed after settling;
- S2: settling introduces no blocking collision or degeneracy;
- S3: candidate distinctions are recorded if settling erases or preserves
  them;
- S4: distortion is compared per cell and family without a scalar score;
- S5: the bounded accepted iteration configuration is deterministic;
- S6: repeated identical seeds produce identical settled coordinates; and
- S7: distances and extents are observed for visual usability.

Settling acceptance is a mixture: finite/exception-free and blocking
degeneracy conditions are hard evidence; distortion and distinction loss are
comparative evidence; iteration traces and unexplained movement are
diagnostic. No iteration count is changed, and no candidate is ranked by a
settling score.

## 12. Routing contract (`VSR-ROUTING-v1`)

Routing is downstream Product behavior. Future evidence must cover ordinary
straight/curved Relations, crossings, occupied paths, node clearance,
parallel Relations, self Relations, direction readability, label clearance,
stability after settling, and the existing manual route/label paths.

The current source routes fixed/manual/self/overlap cases before ordinary
automatic cases, uses canonical endpoint priority, considers unrelated nodes
as obstacles, preserves parallel physical side, and searches bounded curve
offsets. Self-loop orientation is selected around a preferred direction while
considering node pressure. These are source facts, not new acceptance
thresholds.

Future machine evidence records endpoint attachment, finite samples, route
identity, self/parallel identity, node-influence diagnostics, occupied-path
diagnostics, and label-clearance diagnostics. Browser evidence decides
whether a route is visibly followable. Zero crossings are not a universal
requirement; a severe route collapse or unreadable endpoint relationship is a
blocking visual failure.

Automatic routing and user-overridden routes are separate evidence rows.
Manual overrides must not be used to hide an automatic-routing defect.

## 13. Label contract (`VSR-LABEL-v1`)

Node labels and Relation labels are downstream visual geometry. Future evidence
must cover node/label, label/label, label/path, and label/node separation;
placement stability; long labels; multilingual label lengths; self-loop and
parallel labels; and automatic versus user-overridden placement.

The current source uses bounded text-width heuristics, wraps/truncates Node
text, places node labels around a 32-unit rounded-rectangle body, places edge
labels along sampled routes, and preserves manual anchors/offsets. CSS then
renders actual SVG text. Consequently actual text metrics, CSS, SVG paint, and
responsive dimensions require a real browser for acceptance. jsdom is useful
for orchestration and accessibility tests but is not authoritative for final
label geometry.

## 14. Visual acceptance criteria (`VSR-VISUAL-v1`)

Each criterion is evaluated per candidate, per fixture role, and per stage.
`PASS`, `FAIL`, and `INDETERMINATE` are recorded; preference is recorded in a
separate field. A single severe failure blocks that candidate cell when the
criterion is marked blocking. A comparison is not required to determine a
blocking failure, but is allowed for a separate preference observation.

| ID | Observable condition | Blocking rule |
| --- | --- | --- |
| V-A | Nodes remain individually visible and are not collapsed or visually indistinguishable. | Any severe collapse is blocking. |
| V-B | Major graph structure is readable without an obvious accidental node, edge, or label overlap. | A severe overlap that hides structure is blocking. |
| V-C | Relations can be followed from intended source to intended target, including direction where rendered. | Broken, ambiguous, or collapsed endpoint relation is blocking. |
| V-D | Labels remain readable enough to identify their owning graph elements. | Unreadable or piled-up required labels are blocking. |
| V-E | No candidate produces systematic clipping or an unusable graph extent in the observed view. | Off-screen or unusable initial view is blocking for the relevant viewport cell. |
| V-F | Important structures are not hidden behind unrelated nodes or labels. | Materially hidden structure is blocking. |
| V-G | The graph is recognizable in the initial fitted view. | A non-recognizable fitted view is blocking. |
| V-H | No candidate seed produces grossly pathological final geometry on an accepted fixture role. | A gross pathology is blocking; ordinary preference is not. |

“Looks better,” “cleaner,” and “best” are not criteria. Naturalness, balance,
crossing preference, whitespace, and other non-severe qualities are recorded
as observations or preferences only. `INDETERMINATE` is not a pass and blocks
PR-3 for the affected required cell until resolved or explicitly accepted by
a separately authorized authority.

## 15. No score and no ranking

The protocol forbids weighted visual scores, fixture-win sums, average ranks,
majority vote as a selector, cross-fixture scalar scores, and combinations of
PP-M3 with a visual score. Evidence is retained per fixture, candidate,
stage, and criterion. Permitted comparative outcomes are:

```text
PREF-A
PREF-B
PREF-EQUIVALENT
PREF-INCOMPARABLE
```

Preference never changes PASS/FAIL and never selects a Production candidate.

## 16. Fixture role definitions (`VSR-FIXTURE-v1`)

Role assignment is frozen before candidate comparison, is shared by all five
candidates, and is based on committed Dataset semantics rather than observed
candidate results. One committed fixture may cover multiple roles only when a
role manifest explicitly justifies each assignment.

| Role | Minimum characteristics and purpose | Real/synthetic policy |
| --- | --- | --- |
| realistic ordinary | committed Dataset with ordinary Entity relations, representative labels/descriptions, and at least one visible connected relationship; establishes the normal use surface | must be real committed Dataset |
| motif-rich | committed Dataset with meaningful repeated local relationship structure, including a declared motif or clustered neighborhood; exercises local clutter and relational readability | must be real committed Dataset |
| high-fanout | committed Dataset with a declared hub Entity and many distinct visible neighboring Entities, plus enough surrounding context to observe route/label pressure; exercises hub readability | must be real committed Dataset; degree alone without role declaration is insufficient |
| sparse | committed Dataset whose declared relation structure is intentionally low-connectivity and leaves meaningful open space; exercises component separation and whitespace | must be real committed Dataset; “fewest edges in the corpus” is insufficient |
| dense | committed Dataset with a declared high-connectivity subgraph that creates genuine route/label pressure; exercises crossings, parallel paths, and clutter | must be real committed Dataset; a small convenient graph is not enough |
| symmetry/control | a deterministic symmetry/integrity control plus, for visual PR-3, a realistic committed symmetric case when the role is used for quality acceptance | K3 may satisfy only the control half; synthetic controls cannot replace realistic quality evidence |
| larger-size | committed realistic Dataset materially larger than ordinary fixtures, with enough relations and labels to exercise bounded-size behavior, and `N <= 65` | must be real committed Dataset; isolated N=65 control is not sufficient |

Illegitimate relabeling includes choosing a role after seeing a candidate
result, using a synthetic topology as realistic, using K3 as quality evidence,
or selecting a named sample solely because it favors a candidate.

## 17. Current role coverage

The current committed corpus unambiguously provides `realistic ordinary` and
`motif-rich` under the existing PR-2 inventory labels. Event-projection and
coordinate-space fixtures are useful projection/context evidence but are not
members of the frozen realistic PR-3 role set by themselves.

Computed properties of existing samples are not silently promoted to role
authority. For example, a sample having a relatively high degree or low edge
density does not close high-fanout or sparse until its role assignment and
purpose are frozen in the shared fixture manifest.

## 18. Remaining ROLE GAP

The realistic roles still requiring acquisition or explicit validation are:

- high-fanout;
- sparse;
- dense;
- realistic symmetry case, in addition to the K3 control; and
- realistic larger-size.

The role gap is not closed by the six synthetic controls or by the existing
ordinary samples. This is a later PR-3 progression blocker, not a reason to
run candidate visual comparison with an unfair corpus.

## 19. Symmetry/control decision

`K3` is permitted only as the symmetry/integrity control half of
`VSR-FIXTURE-v1`. PR-3 visual quality evidence requires a realistic committed
symmetry case when the symmetry/control role is included in the required
common set. K3 cannot issue PR-3 by itself and cannot become a candidate.

## 20. Larger-size decision

The larger-size visual role remains inside `1 <= N <= 65` and requires a real
committed Dataset that is materially larger and semantically realistic. The
N=65 isolated synthetic control is a boundary/control case only. No support
above N=65 is designed or implied.

## 21. Synthetic-control role

The existing PR-2 controls—singleton N=1, path N=5, star N=7, disconnected
N=6, dense N=8, and isolated boundary N=65—remain deterministic diagnostic
controls. They may test invariance, degeneracy handling, disconnected
components, route pressure, and domain boundaries. They may not satisfy a
realistic fixture role or substitute for visual quality evidence.

## 22. Viewport classification (`VSR-VIEWPORT-v1`)

Viewport is **mixed**: V3 must capture the initial fitted view so visual
evidence is interpretable, but `E-VIEWPORT` acceptance is a separate
post-PR-3 prerequisite in the frozen DAG, alongside performance and before
full integration/selection readiness. It is not required to issue PR-3.

Future viewport evidence must record a normal desktop role, a narrow/small
workspace role, and any accepted responsive role. Each cell records actual
viewport dimensions, device scale factor where relevant, SVG viewBox, scale,
pan, node/route/label bounds, clipping, whitespace, minimum usable scale, and
stability after settling. The existing `fitGraphView` node-only bounds are a
known diagnostic limitation; route and label extents must be captured before
claiming viewport acceptance. No fit implementation is changed here.

## 23. Performance classification (`VSR-PERFORMANCE-v1`)

`E-PERFORMANCE` is not required for PR-3. It belongs after the visual/
settling/routing phase and before later Production-selection readiness,
coordinated with viewport and integration evidence. The authority requires
representative and worst-case complexity coverage, no pathological hang, and
bounded settling evidence, but does not freeze a numeric millisecond budget.

No benchmark, optimization, threshold invention, or performance comparison is
performed here.

## 24. Browser and rendering environment

| Evidence | Authoritative environment |
| --- | --- |
| seed and candidate hard gates | pure Node with the frozen materializer |
| coordinate settling diagnostics | disposable Node/Product geometry harness with explicit seed input |
| route and label machine diagnostics | Product geometry modules in a disposable built-app/evaluation harness |
| text metrics, SVG paint, CSS, responsive layout, viewport fit | real Chromium/Chrome |
| final visual acceptance | real browser plus machine-readable capture and bounded human review |
| jsdom | orchestration/accessibility support only; not final text/layout authority |

The future browser identity, version, locale, viewport, device scale factor,
and source commit are provenance fields. No browser automation or screenshot
capture is implemented in this checkpoint.

## 25. Screenshot evidence design

Screenshots are not produced now. In future, screenshots are required for V2
and V3 visual acceptance and optional for V0/V1 diagnostics. Every screenshot
must have a machine-readable companion record containing browser identity and
version, viewport dimensions, device scale factor, locale, Dataset authority
and raw hash, candidate identity, seed and settled fingerprints, routing/
label configuration, Product source commit, stage, timestamp policy, and
screenshot hash.

The proposed deterministic name is:

```text
<checkpoint>__<fixture-id>__<role>__<candidate-id>__<stage>__<locale>__<viewport-role>.png
```

Generated time is metadata, not semantic identity. A screenshot without a
matching manifest is `EVIDENCE-MISSING`, not a candidate failure.

## 26. Human reviewer contract (`VSR-REVIEW-v1`)

The reviewer receives a bounded form with one row per candidate/fixture/stage/
criterion and only the observable V-A..V-H prompts. The form records
`PASS`, `FAIL`, or `INDETERMINATE`, a short evidence note, severe-failure
flag, and optional separate preference outcome.

Acceptance review should use anonymized candidate IDs where practical. A
separate diagnostic view may reveal the true candidate identity and all
provenance for debugging. The current baseline may be shown as a separately
labeled reference, never as a hidden selector. Reviewers must not answer an
open-ended “which is prettier?” question. Disagreement remains recorded and
does not become a numeric score or majority-vote selection.

## 27. Current Production baseline role

The current Product initial placement is `B0` diagnostic reference and `B1`
visual baseline comparator. It is not `B3` and is not a research candidate.
It may establish whether a downstream harness changed accepted behavior and
may be shown as a separately labeled comparison. No rule requires every
candidate to beat the baseline on every cell, and “beats baseline” is not a
selection rule.

## 28. Candidate comparison model

Visual acceptance and visual preference are independent. A future cell may
record both candidates acceptable, one acceptable and one unacceptable,
`PREF-A`, `PREF-B`, `PREF-EQUIVALENT`, or `PREF-INCOMPARABLE`. An acceptable
candidate need not be preferred. Preference must remain per fixture and
criterion; no candidate becomes a winner from the evidence form.

## 29. Failure and indeterminate model

The exact future evidence statuses are:

```text
PASS
FAIL
INDETERMINATE
NOT-APPLICABLE
EVIDENCE-MISSING
```

Comparative preference fields are separate:

```text
PREF-A
PREF-B
PREF-EQUIVALENT
PREF-INCOMPARABLE
```

Off-screen graph, severe node overlap, unreadable label pileup, route collapse,
or unusable fitted view is `FAIL` when captured by the authoritative browser
evidence and blocks the affected required cell. Browser render failure,
authority mismatch, screenshot mismatch, or evidence-capture failure is
`EVIDENCE-MISSING` or `INDETERMINATE`, never a candidate failure. A missing
required realistic fixture role blocks common PR-3 completion.

## 30. Downstream failure attribution

Every V1-V3 cell carries one attribution category:

```text
CANDIDATE-BLOCKING
PRODUCT-DOWNSTREAM-BLOCKING
COMMON-EVIDENCE-BLOCKING
NONBLOCKING-DIAGNOSTIC
```

If all candidate seeds fail at the same downstream routing or label stage,
the result is `PRODUCT-DOWNSTREAM-BLOCKING` or `COMMON-EVIDENCE-BLOCKING`, not
five candidate failures. PR-3 cannot be judged until that common blocker is
repaired or the downstream stage is validated. If a defect is absent at V0,
appears consistently only after a common downstream pass, and is independent
of candidate identity, it is downstream-attributable. If a seed-specific
defect survives controlled downstream passes and distinguishes one candidate,
it may be `CANDIDATE-BLOCKING`. If the stages cannot separate causes, use
`INDETERMINATE`.

## 31. PR-3 completion rule (`VSR-PR3-v1`)

PR-3 is per candidate, but requires the same frozen common corpus for every
candidate. A candidate reaches `PR-3 VISUAL-EVIDENCE-COMPLETE` only when:

1. every required realistic role has an accepted committed Dataset authority;
2. V0, V1, V2, and V3 evidence exists for every required role/candidate cell;
3. all blocking VSR visual, settling, routing, and label criteria are `PASS`;
4. no required cell is `INDETERMINATE` or `EVIDENCE-MISSING`;
5. candidate-specific blockers are cleared or explicitly accepted by a future
   authority; and
6. any common downstream blocker is resolved before candidate attribution.

One failed blocking criterion in one required role makes that candidate
`PR-3 NO`; it may retain PR-2. A common downstream blocker leaves PR-3
unestablished for the affected common evidence rather than making every
candidate visually bad. PR-3 alone does not emit PR-C3; Production-evaluation
eligibility remains a separate later claim requiring the frozen integration
and provenance boundaries.

## 32. Structural PP-M3 relationship

PP-M3 is context, hypothesis, and a comparison aid. It may explain why a
fixture was included or why a visual observation was expected. It cannot
substitute for browser visual evidence, become a scalar score, override a
human visual result, or select a candidate. If visual evidence disagrees with
PP-M3, the disagreement is recorded without forcing consistency.

## 33. Provenance contract (`VSR-PROVENANCE-v1`)

Every future evidence record includes at least:

```text
candidateId
semanticContract
materializerIdentityAndVersion
productionSourceCommit
fixtureAuthority
fixtureRawSha256
graphProjectionHash
seedCoordinateFingerprint
runtimeTransform
settlingConfiguration
settledCoordinateFingerprint
routingConfigurationVersionAndSourceAuthority
labelGeometryConfigurationAndSourceAuthority
viewportDimensions
browserAndRuntimeIdentity
evidenceStage
criterionResults
screenshotOrArtifactHash
reviewerMode
status
failureOrIndeterminateReason
attributionCategory
```

The record is an evidence artifact/log only. It is not persisted in the E2R
Dataset, Coordinate Prototype, Coordinate Draft, or ordinary application
state. Candidate identity may be anonymized in the review view but must be
recoverable in the provenance record.

## 34. Required evidence matrix

`VSR-ABLATION-v1` and `VSR-PR3-v1` use a long-form matrix with no scalar score
column. Minimum axes are:

```text
candidateId
fixtureRole
fixtureAuthority
fixtureRawSha256
stage (V0/V1/V2/V3)
evidenceClass (VISUAL/SETTLING/ROUTING/LABEL)
criterion (V-A..V-H or S1..S7 or routing/label criterion)
status
attributionCategory
provenance/artifact references
```

All five candidate rows are present for every common fixture role. The matrix
must retain `NOT-APPLICABLE` only where the role/criterion authority says it
is inapplicable; it must not omit a difficult cell. No aggregate score,
fixture-win count, or rank column is allowed.

## 35. Production integration boundary

Future visual evaluation may use this disposable architecture:

```text
committed fixture authority
  -> frozen candidate materializer
  -> explicit runtime-coordinate adapter
  -> disposable seeded downstream geometry/render harness
  -> browser evidence capture and reviewer form
```

The adapter and harness must remain startup-external, dev/disposable, and
unreachable from normal live App behavior. They must not become a Product
feature, default strategy, persisted preference, selector, or fallback. The
current Product downstream utilities may be exercised only through an
explicitly attributable evaluation boundary. If exact App execution is
required for final visual truth, that execution must still be disposable and
must not import the research materializer into the shipped App.

## 36. Frozen VSR contracts

| Contract | Responsibility | Authority | Required evidence | Blocking/deferred boundary |
| --- | --- | --- | --- | --- |
| `VSR-FIXTURE-v1` | common role assignment and committed authority | Readiness Design1 plus role manifest | role, repo, commit, path, raw/projection hashes | missing realistic role blocks PR-3; acquisition deferred |
| `VSR-PIPELINE-v1` | stage order and current Product ownership | current Production source | stage/provenance trace | no live adapter implementation here |
| `VSR-ABLATION-v1` | V0-V3 observation separation | current source plus readiness evidence form | seed, settled, routed/labeled, fitted artifacts | missing stage blocks attribution; harness deferred |
| `VSR-VISUAL-v1` | observable V-A..V-H criteria | readiness visual form | browser evidence and review rows | severe failure blocks cell; no visual run here |
| `VSR-SETTLING-v1` | S1-S7 settling observations | `auto-layout.ts` and readiness contract | finite/deterministic coordinates and traces | no iteration change; quality comparison deferred |
| `VSR-ROUTING-v1` | route, self-loop, parallel, obstacle evidence | `viewport.ts`, App routing orchestration | machine route diagnostics plus browser view | downstream failures attributed; redesign deferred |
| `VSR-LABEL-v1` | node/relation label evidence | `viewport.ts`, App, CSS | browser text/layout evidence and label artifacts | jsdom not authoritative; implementation unchanged |
| `VSR-VIEWPORT-v1` | post-PR3 viewport acceptance | `fitGraphView`, SVG/CSS, readiness DAG | actual dimensions, bounds, scale/pan, clipping | separate later class; no fit change |
| `VSR-PERFORMANCE-v1` | post-PR3 responsiveness/safety evidence | readiness performance class | representative/worst samples, no-hang evidence | budget remains unfrozen; no benchmark here |
| `VSR-REVIEW-v1` | bounded human review and bias separation | readiness visual evidence form | criterion rows and reviewer mode | no open-ended preference or majority selector |
| `VSR-PROVENANCE-v1` | machine-readable attribution | readiness provenance contract | complete fields in section 33 | evidence log only; no Dataset persistence |
| `VSR-PR3-v1` | per-candidate completion decision | readiness state machine and this design | complete common matrix, no blocking gaps | PR-3 does not imply PR-C3 or selection |

## 37. Fixture acquisition decision

`CASE F2`: the existing committed corpus does not unambiguously cover every
realistic PR-3 role. The exact missing roles are high-fanout, sparse, dense,
realistic symmetry, and realistic larger-size. The smallest next prerequisite
is a fixture-role acquisition/validation design that freezes a shared
committed corpus and role manifest before any candidate visual comparison.

This checkpoint does not acquire or synthesize realistic fixtures.

## 38. CASE and Decision

`CASE 1`: the PR-3 evidence surface is unambiguously reconciled at the level
of the frozen state machine and prerequisite DAG; pipeline responsibility is
separated; V0-V3 ablation is frozen; criteria and statuses are observable;
settling/routing/label attribution is defined; viewport and performance are
classified; browser, screenshot, and reviewer protocols are defined; and the
ROLE GAP is explicitly preserved.

`DECISION A`:

```text
VISUAL / SETTLING / ROUTING EVIDENCE CONTRACT FROZEN;
PROCEED ONLY TO THE SMALLEST SEPARATELY AUTHORIZED FIXTURE-ROLE
ACQUISITION / VALIDATION PREREQUISITE.
```

No visual acceptance execution follows automatically.

## 39. Exact next prerequisite

The exact next prerequisite is
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-FIXTURE-ROLE-ACQUISITION-DESIGN1`.
It must define and validate the shared committed realistic fixtures for the
five missing roles, including repository, commit, path, raw SHA-256, graph
projection hash, role rationale, and no-candidate-favoring selection process.
It is selected only and **NOT STARTED** by this checkpoint.

## 40. Final boundary state

- Candidate selected: **NO**.
- PR-3: **NO**; only the evidence contract is frozen.
- Production integration: **NO**.
- Visual acceptance: **NO**.
- Screenshots: **NONE PRODUCED**.
- Candidate ranking/selection: **NO**.
- Production source modified: **NO**.
- Frozen materializer modified: **NO**.
- Clone source modified: **NO**; retained untracked experimental surface is
  preserved.
- Knowledge Candidate: no new `ai-knowledge` entry is promoted.
- Push/tag/release/deploy/publication: **NONE**.

## 41. Validation and repository state

This is a documentation/design checkpoint. The current Production source and
tests were inspected as factual authority; Production tests, lint, and build
were not rerun because no Production source drift or implementation change was
made. `git diff --check` was run for the Production worktree and the required
e2r-spec `npm.cmd run validate` and `git diff --check` gates pass after this
document and roadmap entry are staged.

The only e2r-spec dirty path outside this checkpoint is the protected
`sessions/E2R-Session-0052.md`; it remains untouched and unstaged. The only
Production dirty paths are the two protected Lighthouse sample files. The
ai-knowledge diagnostic playbook remains pre-existing dirty state and
untouched. The local checkpoint commit is unpushed.
