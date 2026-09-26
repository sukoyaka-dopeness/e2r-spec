# LiaisonScape Initial-placement Seed Production-candidate Compatibility Design1

## Checkpoint

- Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-CANDIDATE-COMPATIBILITY-DESIGN1`
- Date: 2026-09-03 JST
- Status: Complete; minimum common compatibility contract frozen for future evaluation only
- Preceding authority: `cd42fad docs: audit LiaisonScape candidate compatibility`
- Production source authority: `fd563340625fd3d88dc25baedc93c4f8fe69e5e7`

## Mandatory boundary

```text
PRODUCTION COMPATIBILITY CONTRACT DESIGN ONLY
MAT-C3 REMAINS INPUT EVIDENCE
COMPATIBILITY AUDIT1 CASE 2 / DECISION B IS INPUT
PR-2 NOT YET ESTABLISHED
NO PRODUCTION IMPLEMENTATION
NO PRODUCTION REPLACEMENT
NO PRODUCTION CANDIDATE SELECTED
NO LIVE APP IMPORT
NO STRATEGY REGISTRY IMPLEMENTATION
NO PERSISTENCE IMPLEMENTATION
NO MIGRATION IMPLEMENTATION
NO FALLBACK IMPLEMENTATION
NO VISUAL ACCEPTANCE
NO SETTLING ACCEPTANCE
NO ROUTING/LABEL ACCEPTANCE
NO STRUCTURAL OBJECTIVE RERUN
NO CLAIM THAT INITIAL PLACEMENT IS SOLVED
```

This document freezes a minimum Product compatibility contract. It does not
authorize implementation, an application import, a strategy registry, a
Dataset schema change, a candidate default, or a visual/runtime acceptance
claim. MAT-C3 is evidence about the disposable materializer surface only.

## Why this design can be frozen

Validation1 established bounded MAT-C3 evidence for five research-only
materialized identities. Compatibility Audit1 found no candidate-specific
semantic conflict; it found common undefined Product responsibilities for
transform ownership, Stored/Owned boundaries, adoption, migration, failure,
fallback, safety, and provenance.

Those responsibilities can be closed conservatively without inventing a
partial materializer or changing E2R meaning:

1. Candidate evaluation is an optional, startup-external path and is permitted
   only for a clean zero-Stored full-seed state.
2. Stored and Owned coordinates remain authoritative. Partial and complete
   Stored states are not candidate-evaluation inputs.
3. Candidate output is ephemeral Derived data. It becomes persistable only
   through an explicit user-owned adoption transition using the existing
   Coordinate save responsibility.
4. Accepted Dataset, Coordinate, and Space migration precedes evaluation;
   migration never treats Derived output as Dataset content.
5. Candidate failure is attributable and fail-closed for the candidate path;
   the accepted current Product path remains separate and is not silently
   replaced or repaired.
6. Provenance belongs to an evaluation artifact or log, not to the E2R
   Dataset or ordinary Coordinate Prototype/Draft payload.

This is CASE 1 / Decision A below. It freezes a compatibility boundary; it
does not establish PR-2 or authorize the next evidence stage.

## Authorities and facts carried forward

The canonical specification repository is
`C:\Users\extra\E2R\e2r-spec`. Production LiaisonScape is
`C:\Users\extra\E2R\e2r-liaison-scape` at
`fd563340625fd3d88dc25baedc93c4f8fe69e5e7`. The disposable materializer clone
is detached at the same commit and retains its pre-existing untracked
`experimental/production-candidate-materialization/` surface. No Production
source, package, or test implementation was changed by this checkpoint.

The Production worktree retains only these pre-existing dirty sample files,
which are protected and are not evidence authority for this design:

```text
public/lighthouse-restoration-demo.en.e2r.json
public/lighthouse-restoration-demo.ja.e2r.json
```

The protected `sessions/E2R-Session-0052.md` and the protected
`ai-knowledge/playbooks/e2r-edge-cdp-browser-diagnostic.md` were not edited,
staged, or restored. `ai-knowledge` was used read-only.

The accepted current startup boundary remains:

```text
acceptDataset
  -> getStoredCoordinates
  -> buildEntityGraph
  -> placeInitialEntities
  -> if Stored Coordinates count == 0:
       settleInitialPlacement
  -> fitGraphView / render
```

The accepted materializer boundary remains an isolated EVAL-FULL-SEED
operation over a normalized Entity graph with an explicit positive rational
affine runtime transform. It rejects `storedCoordinates` and emits ephemeral
Derived runtime coordinates. This design does not alter that contract.

The five identities covered equally are:

```text
TA0/REP-0
TA2-DEG-W1-OP-v1
TA2-MOTIF-W1-OP-v1
TA3-FWD-W1-OP-v1
TA3-REV-W1-OP-v1
```

FP1-NGP remains a family dependency, not a candidate identity. TA1-W1 remains
fixture-witness-only, K3 remains control-only, and the reference baseline is a
reference boundary.

## Contract selection

### Transform ownership options

| Option | Assessment |
| --- | --- |
| T1 initial-placement orchestration owns the transform | Keeps policy near startup, but would couple a research evaluation choice to the accepted startup path. Not selected. |
| T2 dedicated pure placement-space adapter owns the transform | Separates explicit placement-space policy from viewport, Dataset, and materializer responsibilities while allowing deterministic attribution. Selected. |
| T3 Dataset/Coordinate Extension owns the transform | Would add research/application semantics to persisted Dataset data without an accepted interoperability need. Not selected. |
| T4 Viewport owns the transform | Forbidden: zoom/pan/render state cannot be semantic authority for candidate coordinates. Not selected. |
| T5 candidate/materializer chooses internally | Forbidden: it hides Product policy and breaks explicit attribution/replay. Not selected. |

`PCOMP-TRANSFORM-v1` therefore assigns ownership to a future Product-owned,
dedicated pure placement-space evaluation adapter. “Owner” here names a
responsibility boundary, not an implementation that exists today. The adapter
receives an explicit transform configuration and supplies it to the isolated
materializer. It MUST NOT obtain semantic authority from viewport state,
locale, labels, routes, browser state, fixture naming, or candidate-internal
defaults. The materializer MUST NOT choose or silently alter the transform.

The transform is deterministic, finite, explicitly recorded, and attributable
to the adapter configuration. The adapter MUST preserve the MAT-C3 exact
rational substrate and deterministic replay requirements. A future adapter
implementation remains a separately authorized task.

### Baseline relationship

The frozen relationship is `P1`: an optional evaluation path outside accepted
startup. The current Product baseline remains the current Product behavior.
This design does not authorize:

- `P0` replacement of the baseline algorithm;
- `P2` shadow evaluation coupled to startup output;
- `P3` a user-visible selectable Product strategy; or
- `P4` a future default.

Candidate evaluation MUST NOT be required to open an otherwise valid Dataset.
Any future implementation must make the evaluation boundary explicit and
must not call it as an invisible replacement of the current startup solver.

## Minimum common compatibility contracts

The following contracts are design identifiers for the future Product
boundary. They are not registered E2R Extensions and do not authorize schema
fields or code.

### `PCOMP-TRANSFORM-v1`

- Responsibility: supply the explicit candidate placement-space transform.
- Owner: Product-owned dedicated pure placement-space evaluation adapter.
- Inputs: accepted normalized Entity graph, selected research identity,
  explicit positive rational affine transform, and source/provenance context.
- Outputs: transform-bearing evaluation input and attributable transform
  record; the materializer returns Derived runtime coordinates separately.
- Allowed transitions: clean eligible evaluation input may enter the adapter;
  deterministic output may enter the ephemeral evaluation artifact.
- Forbidden transitions: viewport-to-semantic inference, fixture-specific
  hidden tuning, materializer-selected defaults, Dataset mutation, or
  automatic Owned adoption.
- Failure: reject with an attributable compatibility/materializer failure; do
  not substitute viewport values or silently repair the transform.
- Determinism: identical graph, identity, contract, and transform produce the
  same exact substrate and runtime result.
- Persistence: transform and provenance live in the evaluation artifact/log,
  not in Dataset coordinates.
- Baseline relation: P1 optional evaluation only.
- Deferred: the concrete adapter API, configuration UI, and runtime wiring.

### `PCOMP-OWNERSHIP-v1`

- Responsibility: define when candidate evaluation may observe coordinate
  ownership state.
- Owner: Product initial-placement evaluation boundary, subject to the
  existing Dataset/Coordinate ownership rules.
- Inputs: Stored/Owned coordinate count, pending user work, migration state,
  and candidate materializer mode.
- Outputs: eligibility decision and either an EVAL-FULL-SEED request or a
  skipped/deferred result.
- Allowed transitions: only zero Stored/Owned coordinates with no pending
  user-owned coordinate work may enter EVAL-FULL-SEED.
- Forbidden transitions: overwriting Stored/Owned coordinates, merging a
  partial or complete Stored state into EVAL-FULL-SEED, or treating Derived
  output as authoritative after its dependencies change.
- Failure: return ineligible/skip with an attributable reason; preserve the
  current Product state.
- Determinism: the same ownership and migration state gives the same
  eligibility result.
- Persistence: eligibility is evaluation state, never Dataset content.
- Baseline relation: the existing startup path remains authoritative for all
  states, including states that are ineligible for candidate evaluation.
- Deferred: a future partial/incremental materializer contract and any
  candidate operation for newly created Entities.

### `PCOMP-ADOPTION-v1`

- Responsibility: separate ephemeral candidate display from intentional user
  ownership.
- Owner: Product user-owned adoption workflow, using the existing Coordinate
  save responsibility.
- Inputs: ephemeral Derived candidate positions and an explicit user action.
- Outputs: either no adoption, or ordinary finite Owned coordinates selected by
  that action and eligible for the existing Save Coordinates operation.
- Allowed transitions: evaluation output starts Derived; an explicit user
  action may adopt selected positions; after saving they are ordinary
  Coordinate Prototype/Draft content and take precedence as Stored/Owned data.
- Forbidden transitions: automatic adoption on Dataset open, first render,
  first interaction, candidate completion, or silent replacement of existing
  Stored/Owned positions.
- Failure: refuse adoption and leave the current state intact; do not partially
  write Dataset coordinates.
- Determinism: adoption selection and saved finite coordinates are explicit
  and replayable under the existing save semantics.
- Persistence: only the ordinary coordinate representation is persisted;
  candidate identity and evaluation provenance are not added to it.
- Baseline relation: adoption is outside P1 evaluation and does not make the
  candidate the startup algorithm.
- Deferred: exact UI wording, selection granularity, and any new adoption
  command implementation.

### `PCOMP-PERSISTENCE-v1`

- Responsibility: keep research identity and transient output out of Dataset
  persistence.
- Owner: existing Dataset/Coordinate persistence boundary for adopted values;
  evaluation logging boundary for research metadata.
- Inputs: explicitly adopted finite coordinates, if any, and evaluation
  provenance.
- Outputs: ordinary existing Coordinate Prototype/Draft values plus a
  separate evaluation record.
- Allowed transitions: an explicit adoption may use the existing
  `saveCoordinates` semantics.
- Forbidden transitions: candidateId, semanticContract, materializer version,
  transform, exact rational substrate, or evaluation log fields in the E2R
  Dataset merely to support this research path.
- Failure: atomic refusal; preserve the Dataset and Owned coordinates.
- Determinism: persisted coordinates are independent of transient candidate
  metadata.
- Persistence: candidate-agnostic and compatible with the current coordinate
  schema; no new field is proposed.
- Baseline relation: current Dataset loading and saving remain unchanged.
- Deferred: retention, storage, and presentation of a separate evaluation log.

### `PCOMP-MIGRATION-v1`

- Responsibility: order accepted Dataset, Coordinate, and Space migrations
  relative to candidate evaluation.
- Owner: existing validated migration services for migration; the evaluation
  boundary for eligibility after migration.
- Inputs: Dataset migration state, canonical LiaisonScape Space readiness,
  coordinate ownership state, and candidate request.
- Outputs: either a migrated accepted Dataset ready for a fresh evaluation, or
  an ineligible/refused candidate evaluation.
- Allowed transitions: accepted Dataset/Coordinate migration and canonical
  LiaisonScape Space migration occur first; candidate EVAL-FULL-SEED occurs
  only after the target state is ready and still satisfies S0.
- Forbidden transitions: migrating ephemeral Derived coordinates, persisting
  candidate output as part of migration, or using candidate transform policy as
  a substitute for serialized Space migration.
- Failure: migration refusal remains an atomic migration failure; candidate
  evaluation is skipped and the existing Dataset/Owned state is preserved.
- Determinism: after a migration, candidate output is recomputed from the
  accepted post-migration input rather than carried across as authority.
- Persistence: only the existing migration output is persisted; Derived
  candidate output is not.
- Baseline relation: current migration and current startup behavior remain
  available independently.
- Deferred: concrete orchestration hooks and any migration-triggered UI.

The required order is therefore M1 plus M3: migrate the accepted Dataset,
Coordinate, and canonical Space first; then evaluate; invalidate and
recompute any ephemeral candidate result if an accepted migration occurs.
Candidate evaluation before migration is not a persisted or portable result.

For Space specifically, the target is the canonical LiaisonScape Space, or an
explicitly accepted equivalent target adapter with the same responsibility.
The serialized Space migration and the candidate's rational runtime transform
are separate operations and MUST NOT be conflated.

### `PCOMP-FAILURE-v1`

- Responsibility: classify candidate refusal/failure without altering the
  accepted Product path.
- Owner: future evaluation boundary and its diagnostic record.
- Inputs: candidate request, input validation, domain, transform, materializer
  result, and runtime exception boundary.
- Outputs: one status from the failure table below, diagnostic provenance, and
  no candidate adoption.
- Allowed transitions: candidate evaluation may fail closed; an optional
  evaluation caller may report the failure and continue the already accepted
  baseline path.
- Forbidden transitions: silent baseline fallback, silent geometry repair,
  candidate-to-candidate retry, or Dataset opening failure caused only by an
  optional candidate evaluation failure.
- Failure: preserve Stored/Owned coordinates and all safety flags; report the
  attributable status.
- Determinism: the same invalid input or runtime condition yields the same
  classification where the materializer contract permits it.
- Persistence: diagnostic record only; no failure status in Dataset content.
- Baseline relation: P1 remains optional; the current Product path is not
  inferred as a hidden fallback of the candidate evaluator.
- Deferred: diagnostic UI, telemetry, and any explicit future fallback policy.

### `PCOMP-SAFETY-v1`

- Responsibility: preserve Dataset replacement, pending-work, and
  beforeunload safety semantics.
- Owner: existing replacement-safety and coordinate ownership boundaries.
- Inputs: candidate evaluation result, explicit adoption action, Dataset
  mutation state, and current `coordinatesDirty`/`pendingUserWork` sources.
- Outputs: unchanged safety state for pure evaluation; existing dirty/pending
  transitions for explicit adoption and save.
- Allowed transitions: pure evaluation changes no safety flag. Explicit
  adoption of existing Dataset Entities may mark coordinate work pending using
  the existing semantics; Save Coordinates commits it through the existing
  path.
- Forbidden transitions: candidate evaluation alone setting
  `datasetModified`, `coordinatesDirty`, `pendingUserWork`, Export
  requirements, or a beforeunload warning; no parallel candidate-specific
  safety flags.
- Failure: leave all current Dataset and user-work state intact.
- Determinism: replacement decisions depend on the existing safety sources,
  not candidate identity.
- Persistence: only explicit saved Owned coordinates persist.
- Baseline relation: current replacement, cancel, discard, and Export behavior
  remains the safety authority.
- Deferred: exact future UI treatment of an optional evaluation diagnostic.

### `PCOMP-PROVENANCE-v1`

- Responsibility: make each candidate evaluation auditable without changing
  Dataset semantics.
- Owner: the evaluation artifact/log boundary.
- Inputs: candidateId, semanticContract, materializerId/version,
  candidateFamily, graphProjectionHash, Production source authority,
  research fixture/input authority where applicable, runtime/configuration,
  transform, coordinate fingerprint, and status/failure.
- Outputs: a per-evaluation record whose lifetime is tied to the evaluation
  or artifact, not to Dataset persistence.
- Allowed transitions: research fixture provenance may support research
  validation; a future Product evaluation may record Dataset/source authority
  separately.
- Forbidden transitions: treating fixture authority as live Product authority,
  collapsing distinct candidate identities because geometry is equal, or
  embedding the record in ordinary Dataset coordinates.
- Failure: incomplete provenance invalidates that evaluation record for
  compatibility evidence; it does not mutate the Dataset.
- Determinism: the record identifies every input needed for replay, including
  the graph projection and transform.
- Persistence: separate artifact/log only; no E2R schema amendment.
- Baseline relation: provenance records evaluation; it does not authorize
  startup replacement or candidate selection.
- Deferred: Product retention, access, and export policy for the record.

## Authoritative ownership state table

This table is the Design1 authority for the Audit1 matrix. “Candidate eval”
means a future Product compatibility evaluation, not the detached research
harness run. `EVAL-FULL-SEED` is permitted only in S0.

| State | Stored state | Candidate eval | EVAL-FULL-SEED | Derived output | Adoption | Current Product behavior |
| --- | --- | --- | --- | --- | --- | --- |
| S0 zero Stored | No recognized Stored/Owned coordinates; no pending user-owned coordinate work | Permitted in optional P1 path after accepted Dataset/Space readiness | Yes | Ephemeral full-seed candidate positions only | Explicit user action only; existing Save Coordinates semantics after adoption | Current `placeInitialEntities` plus accepted three-iteration settling remains the startup path |
| S1 partial Stored | Some Stored/Owned coordinates exist and remain authoritative | Skipped/deferred | No | No candidate merge output | No automatic completion or adoption | `placeInitialEntities` preserves stored positions and fills only its accepted current behavior |
| S2 complete Stored | All relevant positions are Stored/Owned and remain authoritative | Skipped/deferred | No; candidate operation is not defined for this state | No candidate output | No automatic replacement or adoption | Current Product keeps Stored/Owned coordinates; no candidate operation is inferred |
| S3 pending user-owned positions | Unsaved manual/adopted coordinate work is authoritative for the current session | Skipped while pending | No | No candidate output in the active Product state | Existing explicit save/discard/replacement workflow only | `preservePendingCoordinates`, replacement confirmation, Export, and beforeunload semantics remain active |
| S4 post-create new Entity | Existing Dataset/Entity state may have new or unplaced content | Skipped/deferred; no incremental candidate contract | No | No full-seed candidate output | Explicit ordinary placement/adoption only | Existing automatic temporary placement or explicit user placement remains in force |
| Migration pending/ineligible | Accepted migration has not completed, or target Space/input is refused | Skipped until eligible | No | Any prior Derived result is invalidated; none is authoritative | No adoption across the pending/refused boundary | Existing atomic migration refusal and pending-coordinate preservation remain authoritative |
| Candidate failure | Stored/Owned state is unchanged; candidate result is absent | Attempted evaluation ends with one failure status | No successful full-seed output | None | Refused; no partial adoption | The accepted current Product path may continue because P1 evaluation is optional; no silent candidate fallback is performed |

The S2 row resolves the Audit1 wording mismatch. Stored/Owned precedence for a
complete Stored Dataset is `PASS`; a candidate operation over complete Stored
input is `NOT-DEFINED` under EVAL-FULL-SEED. The earlier compatibility matrix
cell that displayed Complete Stored as `BOUNDED-PASS` was a historical matrix
wording error, not evidence of a complete-Stored materializer operation. No
historical Audit1 result is rewritten by this checkpoint.

Derived output is never a second authority. If its graph, Dataset, Space, or
transform dependency changes, it is discarded and, only if the resulting
state is again S0, recomputed from the accepted input.

## Failure and fallback policy

The following table is authoritative for every materializer status. “Baseline
startup may continue” means the already accepted Product startup is not blocked
because P1 evaluation is optional; it does not authorize an invisible fallback
inside a candidate run.

| Status | Candidate eval proceeds? | Baseline startup may continue? | Diagnostic required? | Silent fallback? | Stored/Owned change? | Dataset safety state change? | Try another candidate? |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `UNSUPPORTED-CANDIDATE` | No; reject before materialization | Yes | Yes when a candidate request is surfaced | No | No | No | No |
| `INVALID-INPUT` | No; reject input | Yes if Dataset loading itself accepted the Dataset and only the optional candidate input failed | Yes | No | No | No | No |
| `DOMAIN-MISMATCH` | No; outside the bounded domain | Yes | Yes | No | No | No | No |
| `MATERIALIZATION-UNDEFINED` | Attempt begins, but no output is accepted | Yes | Yes | No | No | No | No |
| `NONFINITE-OUTPUT` | Attempt begins, but invalid output is rejected | Yes | Yes | No | No | No | No |
| `NONINJECTIVE-OUTPUT` | Attempt begins, but invalid output is rejected | Yes | Yes | No | No | No | No |
| `HARD-GATE-FAIL` | Attempt begins, but candidate evidence fails | Yes | Yes | No | No | No | No |
| `RUNTIME-ERROR` | Attempt ends at the runtime boundary | Yes for optional P1 evaluation | Yes | No | No | No | No |

If a future Product flow makes candidate evaluation mandatory for a separate
acceptance operation, that operation fails with its diagnostic; it still MUST
NOT block opening a valid Dataset, alter Stored/Owned coordinates, or silently
select the current baseline or another research candidate. Any explicit
fallback policy would require a later compatibility decision.

## Coordinate and Space migration order

The common order is:

```text
accepted Dataset load
  -> accepted Coordinate migration, if required
  -> accepted canonical LiaisonScape Space migration, if required
  -> re-read ownership and pending-work state
  -> candidate eligibility check
  -> optional EVAL-FULL-SEED evaluation only in S0
```

Coordinate Prototype-to-Draft and Linkscape-to-LiaisonScape Space migration
remain atomic, validated, and Dataset-owned operations. A candidate transform
does not define or replace either migration. If an accepted migration changes
the evaluation input, any prior Derived candidate output is invalidated and a
new evaluation must start from the post-migration input. Derived coordinates
are not migrated, and candidate provenance is not copied into the Dataset.

## Dataset replacement and user safety

Pure candidate evaluation is read-only with respect to Dataset and user work.
It does not set `datasetModified`, `coordinatesDirty`, `pendingUserWork`, an
Export requirement, or a `beforeunload` warning.

An explicit adoption of candidate positions is the only permitted transition
from Derived display output toward Owned coordinates. For an existing Dataset,
that transition uses the existing coordinate dirty/pending semantics and the
existing Save Coordinates operation. Saving writes ordinary finite coordinate
content, updates the clean Dataset baseline through the existing behavior, and
does not persist candidate identity. Candidate evaluation MUST NOT auto-adopt
on open, render, settling, first interaction, or Dataset replacement.

Replacement while explicit adopted positions are unsaved continues to use the
existing cancel, discard, and Export safety choices. A candidate failure or
migration refusal leaves those choices and their underlying state unchanged.

## Deferred areas

The following remain explicitly outside Design1:

- implementation of the placement-space adapter or any Product API;
- live App import, startup replacement, strategy registry, or candidate
  selection;
- partial Stored/Owned merge, complete-Stored candidate evaluation, and
  incremental/new-Entity materialization;
- visual, settling, routing, label, viewport, performance, or structural
  objective acceptance;
- candidate ranking, default selection, or PR-2 completion;
- persistence of research provenance in Dataset data;
- concrete diagnostic UI, telemetry, or explicit fallback behavior;
- exact adoption UI and any new Product command;
- migration implementation or a new schema/Extension; and
- claim that Initial Placement is solved.

## CASE and Decision

**CASE 1 — THE MINIMUM COMMON COMPATIBILITY CONTRACT CAN BE FROZEN.** The
transform owner, EVAL-FULL-SEED boundary, zero/partial/complete Stored
behavior, Derived-to-Owned adoption, migration order, failure/fallback
boundary, safety behavior, and provenance lifetime are all closed by the
conservative contract above. No semantic invention, schema change, candidate
selection, or implementation is required to state them.

**Decision A:** freeze the common `PCOMP-*-v1` design for future nonvisual
compatibility validation. This decision does not make any candidate
Production-compatible in the integrated sense and does not establish PR-2.

CASE 2 from Audit1 is therefore closed by design, not by implementation.
CASE 3 was not used: no defined candidate behavior conflicts with the accepted
Product ownership, migration, or replacement-safety contract.

## Candidate result

All five authorized candidate identities receive the same common Design1
disposition:

| Candidate | Common contract disposition | Candidate selected? | Production integration? |
| --- | --- | --- | --- |
| `TA0/REP-0` | Contract-covered for future clean S0 optional evaluation | No | No |
| `TA2-DEG-W1-OP-v1` | Contract-covered for future clean S0 optional evaluation | No | No |
| `TA2-MOTIF-W1-OP-v1` | Contract-covered for future clean S0 optional evaluation | No | No |
| `TA3-FWD-W1-OP-v1` | Contract-covered for future clean S0 optional evaluation | No | No |
| `TA3-REV-W1-OP-v1` | Contract-covered for future clean S0 optional evaluation | No | No |

“Contract-covered” means only that the common boundary is defined. It is not a
quality result, a runtime acceptance, a visual result, a ranking, or a PR-2
result. Literal equality of geometry would not merge the five semantic
identities.

## PR-2 status and next prerequisite

`PR-2` remains **NO**. MAT-C3 remains input evidence and is not equivalent to
Production compatibility, candidate selection, visual acceptance, or a solved
Initial Placement implementation. No Production code, clone code, schema,
registry, persistence, migration, or fallback implementation was started.

The exact smallest next prerequisite is:

```text
E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-CANDIDATE-COMPATIBILITY-VALIDATION1
```

That separately authorized, nonvisual checkpoint would validate the frozen
PCOMP contract against the five materialized candidates, the current
Production source/tests, and complete provenance/failure evidence. It is
**NOT STARTED**. It MUST NOT select a candidate or begin visual, settling,
routing/label, viewport, performance, structural-objective, or live-integration
work without a later explicit checkpoint.
