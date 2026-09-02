# LiaisonScape Initial-placement Seed Production-candidate Compatibility Validation1

## Checkpoint

- Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-CANDIDATE-COMPATIBILITY-VALIDATION1`
- Date: 2026-09-03 JST
- Status: Complete; frozen PCOMP contract validated for bounded nonvisual evaluation
- Preceding authority: `1e1fb98 docs: design LiaisonScape candidate compatibility`
- Production source authority: `fd563340625fd3d88dc25baedc93c4f8fe69e5e7`

## Mandatory boundary

```text
PRODUCTION COMPATIBILITY VALIDATION ONLY
FROZEN PCOMP DESIGN UNDER VALIDATION
MAT-C3 REMAINS INPUT EVIDENCE
PR-2 NOT ESTABLISHED BY ASSUMPTION
NO PRODUCTION IMPLEMENTATION
NO PRODUCTION REPLACEMENT
NO PRODUCTION CANDIDATE SELECTED
NO LIVE APP IMPORT
NO STRATEGY REGISTRY
NO PRODUCT ADAPTER IMPLEMENTATION
NO PERSISTENCE IMPLEMENTATION
NO MIGRATION IMPLEMENTATION
NO FALLBACK IMPLEMENTATION
NO VISUAL ACCEPTANCE
NO SETTLING ACCEPTANCE
NO ROUTING/LABEL ACCEPTANCE
NO STRUCTURAL OBJECTIVE RERUN
NO CLAIM THAT INITIAL PLACEMENT IS SOLVED
```

This result validates compatibility evidence for the frozen PCOMP design. It
does not claim that the future adapter exists, that candidate evaluation is
reachable from the live Product, or that any candidate is a Product default.
It does not equate the current baseline with TA0 or FP1, and it does not turn
baseline continuation into silent candidate fallback.

## Why

Compatibility Design1 froze a conservative common contract after Audit1 found
common undefined Product responsibilities. This checkpoint checks that
contract against:

- the accepted Production source semantics and tests;
- the retained materializer source and its isolated tests/harness;
- fresh MAT-C3 canonical, failure, determinism, and provenance artifacts; and
- the frozen Production Readiness evidence boundary.

The question is whether the contract is coherent and supported as a bounded
nonvisual evaluation seam. It is not whether a candidate is visually good,
selected, integrated, or ready to replace current Initial Placement.

## Authorities and repository/runtime state

The canonical specification repository is
`C:\Users\extra\E2R\e2r-spec`. Before this checkpoint's documentation change,
its HEAD was `1e1fb98` and its only pre-existing dirty path was the protected
`sessions/E2R-Session-0052.md`.

Production LiaisonScape is
`C:\Users\extra\E2R\e2r-liaison-scape` at exactly
`fd563340625fd3d88dc25baedc93c4f8fe69e5e7`. Its only dirty paths remain:

```text
public/lighthouse-restoration-demo.en.e2r.json
public/lighthouse-restoration-demo.ja.e2r.json
```

The disposable clone is
`C:\Users\extra\E2R\e2r-liaison-scape-production-candidate-materialization-implementation1`,
detached at the same source authority. It retains the pre-existing untracked
`experimental/production-candidate-materialization/` surface and has no clone
commit. Harness execution regenerated only transient artifacts in that
untracked surface.

Runtime identity for both application and clone gates:

```text
Node v24.18.0
npm 11.16.0
```

The required AGENTS files, the `ai-knowledge` index and accepted modularization
decision, the readiness authorities, and the prior materialization and
compatibility results were read. The specification remains authoritative;
workspace knowledge was used only within its stated scope.

## Design1 administrative-note verification

The committed Design1 file at `1e1fb98` ends after its exact next prerequisite
and does not contain visibly separate sections for:

- Knowledge Candidate assessment;
- final repository state; or
- explicit `push/tag/release/deploy/publication NONE`.

This is a documentation-completeness note only. It creates no authority
ambiguity and does not invalidate the PCOMP semantic contract. Validation1
does not amend or rewrite Design1. This result supplies the missing
administrative record.

## Source identity and drift

Production HEAD matches the expected authority exactly. A path-scoped diff
against `fd563340625fd3d88dc25baedc93c4f8fe69e5e7` showed no drift in
`src/`, `tests/`, `package.json`, or `package-lock.json`. The two dirty public
sample files are protected and excluded from source authority.

The nine frozen Implementation1 source hashes all match the MAT-C3 authority:

| File | SHA-256 |
| --- | --- |
| `core/rational.mjs` | `948EDDE70FE80633E39D02E51BD5CA21333825F6E32DD4FB88777736A05A85ED` |
| `core/graph.mjs` | `899472982A7EE2DBBF32F5F1640202DC20BFF7E8BD4424048997137B2076B15E` |
| `core/fp1.mjs` | `3B1B7567D5A56BDE6DF66B2771E0C5AE1F7190483DA2E6BB6DCECBB587BBFBF6` |
| `core/canonical.mjs` | `553DE8A41AE94E6D9258D783FDB6117C25C10B1DE97E342D57D6D5A75C5629F0` |
| `core/gates.mjs` | `069DA87471E092E76629B3C213AAA3832AA7E146F96187CFD44913396E99398C` |
| `core/materializer.mjs` | `850E9F9D8F6624DD9BF4B3ABC6DC6DC143037F8BDA0AE357F3C8924E502E8CF4` |
| `fixtures/authoritative.mjs` | `A72475F2450D93EFEAAB4CC8655FA72440B6472917615953AD4824E955D62BD5` |
| `tests/materialization.test.mjs` | `6A2AB8E448B665067FB2E07F6F21DD1F92945B3442EC9421A921DC1950375BE2` |
| `harness/run-validation.mjs` | `D06A2DB57C74D852DD962CB541FB94D178985517A5EA1DF861BAF54DB272C454` |

Result: no source-authority drift.

## Candidate inventory

Exactly these five authorized research identities were validated:

```text
TA0/REP-0
TA2-DEG-W1-OP-v1
TA2-MOTIF-W1-OP-v1
TA3-FWD-W1-OP-v1
TA3-REV-W1-OP-v1
```

FP1-NGP remains a family generator/dependency only. TA1-W1-OP-v1 remains a
fixture-witness-only identity. K3 remains control-only. `REFERENCE-BASELINE`
and unknown identities are not candidates. No ranking was performed, and
equal literal coordinates did not collapse semantic identities.

## Validation vocabulary

The following statuses are used once throughout this result and are not a
numeric score:

| Status | Meaning |
| --- | --- |
| `VALIDATED` | Current accepted source and tests directly support the depended-on boundary without a bounded-materializer qualification. |
| `VALIDATED-BOUNDED` | The boundary is compatible and evidenced only within the explicitly isolated, finite, or future-implementation-absent contract. |
| `SOURCE-SUPPORTED` | Current source establishes the depended-on behavior, while the complete future candidate operation is intentionally absent. |
| `EVIDENCE-GAP` | A required evidence item is not established by the inspected source, tests, or artifacts. |
| `DESIGN-CONFLICT` | The frozen contract contradicts an accepted Product semantic, ownership rule, or safety boundary. |
| `NOT-APPLICABLE` | The responsibility is outside the candidate or validation boundary being assessed. |

## Validation model

Each PCOMP result distinguishes five questions:

- **Design consistency:** whether the frozen contract contradicts accepted
  Product semantics.
- **Source support:** whether current source establishes the depended-on
  Product behavior.
- **Test support:** whether accepted tests exercise that behavior.
- **Materializer support:** whether retained MAT-C3 behavior satisfies the
  candidate-side assumption.
- **Evidence completeness:** whether provenance, failure, and determinism
  evidence is attributable enough for this bounded claim.

Implementation absence is classified as expected when Design1 explicitly
requires a future boundary. It is not converted into a design conflict.

## PCOMP-TRANSFORM-v1

**Result: `VALIDATED-BOUNDED` — compatible design boundary; implementation
absent by design.**

Evidence and reconciliation:

- `core/materializer.mjs` requires `runtimeTransform`, parses rational
  `originX`, `originY`, and positive `scale`, and performs the exact transform
  before one JavaScript `Number` conversion.
- There is no materializer default: missing, zero, negative, malformed, and
  nonfinite transforms are refused with attributable statuses.
- The materializer input contains no viewport pan/scale state. Current Product
  viewport state is presentation/application state and is not an accepted
  semantic input.
- Current Dataset and Coordinate payloads have no accepted transform owner.
  No schema or Extension field is required or introduced for this research
  configuration.
- Search of Production `src/`, `tests/`, and built `dist/` found no live
  adapter, `materializeCandidate`, `materializeFp1Family`, or PCOMP identity.
- MAT-C3 provenance records the transform as rational
  `runtimeTransform`, together with runtime, configuration, graph hash, and
  coordinate fingerprint.

The future owner remains the dedicated pure placement-space evaluation adapter
specified by Design1. The adapter does not currently exist and was not claimed
as runtime-validated. The ownership boundary can be stated without changing
Product semantics.

## PCOMP-OWNERSHIP-v1

**Result: `VALIDATED-BOUNDED`.**

Current source and tests support the required state distinctions:

- `src/dataset.ts` reads recognized finite Stored coordinates, with canonical
  LiaisonScape and supported legacy handling.
- `src/entity-placement.ts` preserves finite stored positions and places only
  unowned Entities. `tests/entity-placement.test.ts` covers deterministic
  ordering and partial Owned placement without moving existing positions.
- `src/App.tsx` keeps the zero-Stored branch distinct: `acceptDataset` reads
  Stored coordinates, builds the graph, calls `placeInitialEntities`, and
  calls `settleInitialPlacement` only when the recognized Stored count is
  zero. `tests/appUiIntegration.test.ts` covers automatic initial placement
  without changing explicit canvas placement.
- `EVAL-FULL-SEED` rejects `storedCoordinates` in the materializer. No partial
  candidate merge or incremental/new-Entity candidate materializer exists.
- `src/dataset-replacement-safety.ts` and its tests preserve pending user
  coordinate work; `preservePendingCoordinates` retains current positions
  while dirty.

The authoritative complete-Stored reconciliation is: Stored/Owned precedence
is `PASS`, while candidate evaluation over complete Stored input is
`NOT-DEFINED`/skipped. This does not revive the historical Audit1 matrix
wording error.

## PCOMP-ADOPTION-v1

**Result: `SOURCE-SUPPORTED`.**

Current source establishes the ordinary coordinate adoption boundary:

- `saveCoordinates` returns without work unless `coordinatesDirty` is true;
- `adoptedCoordinateEntityIdsRef` records explicit user-selected coordinate
  ownership;
- `buildPersistableCoordinatePositions` retains Stored coordinates and adds
  only explicitly adopted current positions; and
- `applyStoredCoordinates` performs the existing atomic coordinate write and
  the clean Dataset baseline is refreshed after a successful save.

The current application contains no candidate evaluation or automatic
candidate adoption. Therefore a candidate result remains Derived, ephemeral,
and nonpersistent until a future explicit user-owned adoption uses this
existing responsibility. This is source support for the boundary, not an
implemented candidate adoption transition or UI.

## PCOMP-PERSISTENCE-v1

**Result: `SOURCE-SUPPORTED`.**

The existing Coordinate Prototype/Draft payload is candidate-agnostic and can
persist ordinary finite Owned coordinates through the existing save path.
Current source has no `candidateId`, materializer identity, semantic contract,
transform, exact rational substrate, or MAT-C3 provenance field in Coordinate
semantics. Coordinate and Dataset tests cover ordinary round trips, atomic
refusals, unsupported versions, target conflicts, and preservation of unknown
data.

The evaluation artifact is therefore not the Dataset. Research provenance is
separate from Dataset semantics, and no schema or Extension field is required
for this bounded compatibility validation. No candidate identity is silently
persisted.

## PCOMP-MIGRATION-v1

**Result: `VALIDATED-BOUNDED`.**

The source/tests support the relied-on migration properties:

- `src/coordinate-migration.ts` performs validated, atomic Prototype-to-Draft
  migration; `tests/coordinate-migration.test.ts` covers readiness, refusal,
  and preservation behavior.
- `src/space-migration.ts` performs validated, atomic Linkscape-to-canonical
  LiaisonScape Space migration; `tests/space-migration.test.ts` covers target
  coexistence refusal and convergence of migration order.
- `src/App.tsx` uses `preservePendingCoordinates` after migration, so dirty
  user positions are not silently replaced.
- The retained materializer accepts normalized graph plus transform and emits
  Derived coordinates; it has no Dataset migration payload or migration hook.

The validated orchestration contract is:

```text
accepted Dataset load
  -> accepted Coordinate migration, if required
  -> accepted canonical LiaisonScape Space migration, if required
  -> re-read ownership/pending-work state
  -> candidate eligibility
  -> optional EVAL-FULL-SEED only in S0
```

If migration changes a dependency, ephemeral candidate output is discarded and
would be recomputed from the accepted post-migration input. The complete
sequence is not runtime-implemented because no live candidate hook exists.

## PCOMP-FAILURE-v1

**Result: `VALIDATED-BOUNDED`.**

The retained materializer provides attributable status and `failureReason`
handling, rejects invalid candidate output, and contains no baseline or
candidate-to-candidate fallback. Fresh tests/harness evidence directly
exercised `UNSUPPORTED-CANDIDATE`, `INVALID-INPUT`, `DOMAIN-MISMATCH`,
`NONFINITE-OUTPUT`, and `NONINJECTIVE-OUTPUT`. The source also explicitly
defines `MATERIALIZATION-UNDEFINED`, emits `HARD-GATE-FAIL` when hard gates do
not all pass, and catches unexpected exceptions as `RUNTIME-ERROR`.

The last three have an exact bounded evidence boundary: the current valid FP1
family does not produce an undefined responsibility maximum, the harness
tests hard gates directly through degenerate control geometry rather than a
full candidate result, and no fault injection is used to force an unexpected
runtime exception. This is recorded rather than invented as a literal
materializer case.

| Status | Attributable status | Candidate output accepted? | Stored/Owned changed? | Dataset mutation? | Another candidate or silent repair? |
| --- | --- | --- | --- | --- | --- |
| `UNSUPPORTED-CANDIDATE` | Yes; fresh test/harness | No | No | No | No |
| `INVALID-INPUT` | Yes; fresh test/harness | No | No | No | No |
| `DOMAIN-MISMATCH` | Yes; fresh test/harness | No | No | No | No |
| `MATERIALIZATION-UNDEFINED` | Source-defined defensive status; no literal fresh fixture | No | No | No | No |
| `NONFINITE-OUTPUT` | Yes; fresh test/harness | No | No | No | No |
| `NONINJECTIVE-OUTPUT` | Yes; fresh test/harness | No | No | No | No |
| `HARD-GATE-FAIL` | Source-defined result plus direct hard-gate control evidence | No | No | No | No |
| `RUNTIME-ERROR` | Source-defined catch boundary; no injected fresh fixture | No | No | No | No |

The current accepted Product startup can independently continue because P1 is
optional. That is not a candidate failure followed by silent baseline
substitution: the candidate path is outside startup and no evaluator fallback
was found.

## PCOMP-SAFETY-v1

**Result: `VALIDATED`.**

Pure evaluation is absent from the live Product and therefore cannot mutate
its safety state. Current replacement-safety source derives state from the
existing Dataset baseline and pending-work sources, including
`coordinatesDirty`, and `hasDocumentExitLossRisk` drives the existing
`beforeunload` boundary. Tests in `tests/dataset-replacement-safety.test.ts`
cover independent pending sources, replacement staging, cancel/discard/
Export transitions, and failed export preservation.

The validated expectation is unchanged values for pure candidate evaluation:

```text
datasetModified          unchanged
coordinatesDirty         unchanged
pendingUserWork          unchanged
recoverableSessionState  unchanged
beforeunload             unchanged
replacement confirmation unchanged
Export requirement       unchanged
```

If a future explicit adoption uses existing coordinate-work semantics, it may
enter the existing dirty/pending state. No candidate-specific flag system is
authorized or present.

## PCOMP-PROVENANCE-v1

**Result: `VALIDATED-BOUNDED`.**

Fresh `manifest.json`, `raw-materialization.json`, and `audit-results.json`
contain or derive the required fields:

| Required field | Actual evidence/mapping |
| --- | --- |
| `candidateId` | Per-result and per-provenance candidate identity |
| `semanticContract` | Per-result semantic contract; distinct from candidateId where defined |
| `materializerId/version` | Per-result materializer ID and materializerVersion |
| `candidateFamily` | `FP1-NGP` / `FP1-NGP-v1` |
| `graphProjectionHash` | `inputAuthority.graphProjectionSha256`, determinism metadata, and provenance |
| Production source authority | `productionSourceCommit` = `fd563340625fd3d88dc25baedc93c4f8fe69e5e7` |
| runtime/configuration | `runtime` = `v24.18.0`; configuration includes implementation-validation and fixture |
| transform | Provenance `runtimeTransform` with exact rational origin/scale |
| coordinate fingerprint | `coordinateFingerprint` and `outputFingerprint` |
| status/failure | result status, provenance status, and `failureReason` |

Research fixtures additionally record fixture authority, fixture hash, source
commit, evaluation source authority, and evaluation configuration. Success
artifacts are sufficient to replay and attribute the bounded evaluation.
Failure statuses are attributable within the source/harness boundary described
above. Candidate semantic identity and materializer identity remain distinct.
Nothing is added to ordinary Dataset Coordinate persistence.

The bounded evidence gap is that no live Product evaluation artifact/log or
Product retention policy exists, and three defensive failure paths lack
individual injected artifact cases. Those are gaps beyond this bounded
isolated evaluation claim, not contradictions in the frozen provenance
boundary.

## Five-candidate validation matrix

The same common result applies to every authorized identity. Statuses are not
counted and do not rank candidates.

| Candidate | PCOMP-TRANSFORM-v1 | PCOMP-OWNERSHIP-v1 | PCOMP-ADOPTION-v1 | PCOMP-PERSISTENCE-v1 | PCOMP-MIGRATION-v1 | PCOMP-FAILURE-v1 | PCOMP-SAFETY-v1 | PCOMP-PROVENANCE-v1 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `TA0/REP-0` | VALIDATED-BOUNDED | VALIDATED-BOUNDED | SOURCE-SUPPORTED | SOURCE-SUPPORTED | VALIDATED-BOUNDED | VALIDATED-BOUNDED | VALIDATED | VALIDATED-BOUNDED |
| `TA2-DEG-W1-OP-v1` | VALIDATED-BOUNDED | VALIDATED-BOUNDED | SOURCE-SUPPORTED | SOURCE-SUPPORTED | VALIDATED-BOUNDED | VALIDATED-BOUNDED | VALIDATED | VALIDATED-BOUNDED |
| `TA2-MOTIF-W1-OP-v1` | VALIDATED-BOUNDED | VALIDATED-BOUNDED | SOURCE-SUPPORTED | SOURCE-SUPPORTED | VALIDATED-BOUNDED | VALIDATED-BOUNDED | VALIDATED | VALIDATED-BOUNDED |
| `TA3-FWD-W1-OP-v1` | VALIDATED-BOUNDED | VALIDATED-BOUNDED | SOURCE-SUPPORTED | SOURCE-SUPPORTED | VALIDATED-BOUNDED | VALIDATED-BOUNDED | VALIDATED | VALIDATED-BOUNDED |
| `TA3-REV-W1-OP-v1` | VALIDATED-BOUNDED | VALIDATED-BOUNDED | SOURCE-SUPPORTED | SOURCE-SUPPORTED | VALIDATED-BOUNDED | VALIDATED-BOUNDED | VALIDATED | VALIDATED-BOUNDED |

All five have the same bounded compatibility disposition because the
validated boundaries depend on shared ownership, persistence, migration,
failure, safety, and provenance rules, while candidate-specific semantics
remain behind the isolated materializer registry. This common result is not
semantic equivalence, quality ranking, candidate selection, or Product
integration.

## Common versus candidate-specific findings

### Common validated boundaries

- Explicit transform ownership can be kept in a future pure adapter and out
  of viewport, Dataset, and materializer authority.
- Only clean S0 may use EVAL-FULL-SEED; partial and complete Stored states do
  not acquire an invented merge operation.
- Stored/Owned coordinates remain authoritative over Derived output.
- Derived output is ephemeral and adoption is explicit; ordinary save
  semantics remain the persistence boundary.
- Accepted Coordinate and canonical Space migration precede optional
  evaluation; Derived output is not migrated.
- Failure is attributable and fail-closed, with no silent repair, baseline
  fallback, or candidate retry.
- Pure evaluation does not change Dataset replacement or pending-work safety.
- Bounded provenance is outside Dataset Coordinate payloads and identifies
  candidate semantics separately from materializer implementation.

### Common evidence gaps

- The future Product adapter and live evaluation hook do not exist by design.
- No Product-side evaluation log retention or diagnostic UI is validated.
- Three defensive materializer status paths do not have individual injected
  fresh artifact cases, as detailed in the failure section.
- Broader PR-2 hard-evidence, runtime breadth, and Production provenance
  evidence remain incomplete beyond the bounded MAT-C3 surface.
- The frozen readiness authority still records the common fixture ROLE GAP and
  later structural/performance/visual boundaries separately.

### Candidate-specific evidence gaps

None were found in this compatibility validation. The TA2 motif `o(V)` concern
remains a separate semantic/research concern and was not converted into a
Production compatibility failure. No candidate-specific source or artifact
divergence appeared.

### Actual design conflicts

None. No PCOMP contract contradicts accepted Product ownership, Dataset,
Coordinate, migration, replacement-safety, or presentation boundaries.

## Materializer test and harness result

Fresh execution from the retained detached clone:

```text
node --test experimental/production-candidate-materialization/tests/materialization.test.mjs
13 tests, 13 passed, 0 failed

node experimental/production-candidate-materialization/harness/run-validation.mjs
SUCCESS; authorized fixture/candidate cells: 15/15
```

The 15 cells cover Lighthouse, Ashen Crown, and K3 control across all five
authorized identities. The materializer tests also cover exact rational
arithmetic, input permutation invariance, failure precedence, hard-gate
controls, fingerprints, and no input mutation.

## Artifact volatility and nonvolatile evidence

The fresh harness produced these current artifact-index hashes:

| Artifact | Fresh hash |
| --- | --- |
| `manifest.json` | `08A3A0A2EAD9A13624D4BC5C5A45BEEEA17EDFEDAD63E40D64C2AE22AAD47F37` |
| `raw-materialization.json` | `FE59F6BD45175A7BB6EAF230FC31D4C907D31D5C916EF73A677F3D3EE23ED917` |
| `audit-results.json` | `7F274189A7501E8F638B5E6C17364F91F2E8C3C4B2BC41D945BBC4EA18E20D02` |

The raw artifact hashes changed between historical and fresh runs because
`generatedAt` changes and the artifact index transitively hashes those files.
To test nonvolatile stability, two fresh harness runs were compared after
removing `generatedAt` and artifact-index hash fields and sorting JSON keys.
The resulting analysis digests were identical on both runs:

| Artifact | Stable analysis digest, both runs |
| --- | --- |
| `manifest.json` | `549AB6DAA569D54BC7F96AFE9F00740C7478C347C66F90534DDE6E833F959515` |
| `raw-materialization.json` | `B89662179899EB4760734847EC3C96A67954A9DF88CBF7B3B074771ED07B832A` |
| `audit-results.json` | `4BBB8177A8E532DA8C069A8843F031D794EEE35F506FABA3116A8BAE93D45CD3` |
| `artifact-index.json` | `B713F83A6E07F2181A56056CD84B97563C90FDC9C945CEE0781D6D7C37C48457` |

Canonical coordinate fingerprints, graph projection hashes, hard-gate results,
candidate mappings, and nonvolatile provenance remained stable. This is not
materializer nondeterminism.

## Production regression and source gates

Fresh gates from the retained clone/current accepted source environment:

- `npm.cmd test`: **PASS, 280/280**;
- `npm.cmd run lint`: **PASS**;
- `npm.cmd run build`: **PASS**;
- `git diff --check`: **PASS**.

The test run printed two nonfatal `WebSocket server error: Port 24678 is
already in use` warnings. The complete suite still passed, and no source or
package change was made.

## Production reachability and isolation audit

Search across Production `src/`, `tests/`, and built `dist/` found no:

```text
production-candidate-materialization
materializeCandidate
materializeFp1Family
PCOMP-
candidate compatibility adapter identity
strategy registry
candidate selector
candidate Dataset persistence
candidate migration hook
candidate fallback hook
```

There is no live App/main import, hidden persisted preference, automatic
candidate evaluation, or Product adapter. Production source is isolated from
the disposable research surface. The clone's source hashes and detached HEAD
remain unchanged; no clone source commit was made.

## CASE and Decision

**CASE 1 — FROZEN PCOMP CONTRACT VALIDATED FOR BOUNDED NONVISUAL EVALUATION.**

The frozen Design1 authority is coherent; current Product source and tests
support every depended-on existing semantic; the materializer source identity
is unchanged; pure-core and 15-cell evidence pass; all five mappings remain
valid; failure attribution is reproducible within its documented bounded
boundary; provenance is complete for the isolated success/evaluation record;
and no unexpected Production integration or design conflict exists.

**Decision A:**

```text
PCOMP COMMON COMPATIBILITY CONTRACT VALIDATED FOR THE BOUNDED NONVISUAL EVALUATION SURFACE;
CONTINUE PR-2 EVIDENCE COMPLETION ONLY THROUGH A SEPARATELY AUTHORIZED CHECKPOINT.
```

Yahoo! The bounded compatibility seam closes decisively. This is not a
candidate-quality, ranking, visual, or integration result.

## PR-2 decision boundary

`PR-2` remains **NO** and `PR-2 NONVISUAL-EVIDENCE-COMPLETE` is not emitted.
PCOMP Validation1 does not establish PR-2 automatically. MAT-C3 remains input
evidence, not PR-2 evidence by equivalence.

Remaining readiness gaps are broader than this contract validation:

- hard evidence beyond the bounded fixture/domain corpus;
- runtime/nonvisual evidence breadth beyond the isolated materializer;
- complete Production-side provenance beyond the bounded artifact;
- fixture ROLE GAP reconciliation where required by the readiness authority;
- later structural, visual, settling, routing/label, viewport, performance,
  selection, and live-integration boundaries.

The exact smallest next prerequisite is:

```text
E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-PR2-NONVISUAL-EVIDENCE-COMPLETION1
```

This separately authorized checkpoint would extend the nonvisual evidence
classes beyond MAT-C3 and the compatibility seam, beginning with broader
hard-gate/runtime breadth, Production provenance completeness, and readiness
ROLE GAP reconciliation. It is **NOT STARTED**. No later work was started
automatically.

## Knowledge Candidate assessment

Knowledge Candidate: **YES, repository-scoped only**. This validation confirms
reusable but LiaisonScape-scoped principles:

- a compatibility contract can be validated while its future adapter remains
  intentionally unimplemented;
- clean zero-Stored eligibility prevents EVAL-FULL-SEED from inventing partial
  Stored merge semantics;
- evaluation failure and optional baseline continuation must remain distinct;
- timestamp-bearing artifact hashes must be separated from nonvolatile
  canonical evidence; and
- research provenance can remain outside ordinary Dataset Coordinate
  persistence.

No `ai-knowledge` file was modified or promoted.

## Final repository state

The owned e2r-spec changes are limited to this result document and the minimal
roadmap entry. The protected Session remains dirty and unstaged. Production
source, tests, package files, and public samples were not modified. The
disposable clone remains detached, retains untracked `experimental/`, and has
no clone commit.

The final e2r-spec commit is recorded after validation with the subject
`docs: validate LiaisonScape candidate compatibility`. No remote operation was
performed.

## Push/tag/release/deploy/publication

```text
NONE
```
