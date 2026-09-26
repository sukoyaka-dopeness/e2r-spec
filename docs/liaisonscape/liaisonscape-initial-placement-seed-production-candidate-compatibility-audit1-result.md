# LiaisonScape Initial-placement Seed Production-candidate Compatibility Audit1

## Checkpoint

- Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-CANDIDATE-COMPATIBILITY-AUDIT1`
- Date: 2026-09-03 JST
- Status: Complete; candidate-specific Production compatibility remains incomplete
- Preceding authority: `452df7b docs: validate LiaisonScape candidate materialization`
- Production authority: `fd563340625fd3d88dc25baedc93c4f8fe69e5e7`

## Mandatory boundary

```text
PRODUCTION COMPATIBILITY AUDIT ONLY
MAT-C3 IS INPUT EVIDENCE
PR-2 NOT YET ESTABLISHED
NO PRODUCTION REPLACEMENT
NO PRODUCTION CANDIDATE SELECTED
NO PRODUCTION INTEGRATION
NO LIVE APP IMPORT OF RESEARCH MATERIALIZER
NO PERSISTENCE IMPLEMENTATION
NO MIGRATION IMPLEMENTATION
NO FALLBACK IMPLEMENTATION
NO VISUAL ACCEPTANCE
NO SETTLING ACCEPTANCE
NO ROUTING/LABEL ACCEPTANCE
NO STRUCTURAL OBJECTIVE RERUN
NO CLAIM THAT INITIAL PLACEMENT IS SOLVED
```

## Why

Validation1 established bounded MAT-C3 runtime/nonvisual materialization
evidence, while retaining `PR-2 = NO`. The smallest next responsibility was a
candidate-specific Production compatibility audit. This checkpoint compares
the five authorized materialized research identities with the accepted local
Production responsibilities for startup, coordinate ownership, persistence,
migration, failure, replacement safety, and provenance. It defines no new
runtime behavior and does not treat compatibility evidence as integration
acceptance.

## Authorities and current state

The canonical specification repository is
`C:\Users\extra\E2R\e2r-spec`. The local Production LiaisonScape repository is
`C:\Users\extra\E2R\e2r-liaison-scape`, currently at exactly
`fd563340625fd3d88dc25baedc93c4f8fe69e5e7`. The retained disposable
materializer clone is
`C:\Users\extra\E2R\e2r-liaison-scape-production-candidate-materialization-implementation1`,
detached at the same commit.

Production `src/`, the relevant tests, `package.json`, and
`package-lock.json` have no drift from the accepted Production baseline. The
Production worktree retains only the two pre-existing dirty Lighthouse sample
files:

```text
public/lighthouse-restoration-demo.en.e2r.json
public/lighthouse-restoration-demo.ja.e2r.json
```

Those working-tree bytes were not used as research authority. The disposable
clone retains its pre-existing untracked
`experimental/production-candidate-materialization/` surface and received no
change in this audit. The protected `sessions/E2R-Session-0052.md` and the
protected `ai-knowledge` browser-diagnostic playbook were not edited, staged,
or restored. `ai-knowledge` was read-only.

The accepted MAT-C3 result remains the input evidence boundary. Its
`EVAL-FULL-SEED` materializer accepts a normalized Entity graph and explicit
positive rational affine transform, rejects `storedCoordinates`, and emits
ephemeral Derived runtime coordinates. Partial Stored/Owned merge is not
defined by that contract.

## Candidate inventory

This audit covers exactly:

```text
TA0/REP-0
TA2-DEG-W1-OP-v1
TA2-MOTIF-W1-OP-v1
TA3-FWD-W1-OP-v1
TA3-REV-W1-OP-v1
```

FP1-NGP remains a family generator/dependency only. `TA1-W1-OP-v1` remains a
fixture-witness-only identity; K3 remains control-only; `REFERENCE-BASELINE`
remains a reference boundary; and unknown identities remain unsupported.

## Status vocabulary

The matrix uses these statuses once, without converting cells into a score:

| Status | Meaning |
| --- | --- |
| `PASS` | Current accepted semantics provide the required behavior without invention. |
| `BOUNDED-PASS` | Behavior is exact only within the isolated or explicitly bounded contract; it is not Production integration acceptance. |
| `NEEDS-DESIGN` | No conflict was found, but the candidate-specific Product behavior or owner is not defined. |
| `NOT-DEFINED` | The audited responsibility has no accepted operation or policy. |
| `BLOCKED` | A defined candidate behavior conflicts with an accepted Product safety or ownership contract. |
| `NOT-APPLICABLE` | The responsibility is not used by that candidate at the audited boundary. |

`NEEDS-DESIGN` and `NOT-DEFINED` are compatibility gaps, not candidate-quality
judgments. No matrix status is counted or ranked.

## Current Production startup contract

The current accepted opening path in `src/App.tsx` is:

```text
acceptDataset
  -> getStoredCoordinates
  -> buildEntityGraph
  -> placeInitialEntities
  -> if Stored Coordinates count == 0:
       settleInitialPlacement
  -> fitGraphView / render
```

`buildEntityGraph` creates Entity Nodes and Entity-to-Entity Relation edges;
Event-related and otherwise unsupported edges are hidden from the graph.
`placeInitialEntities` preserves finite stored positions and places only
unowned Entities. When the stored count is zero, `settleInitialPlacement`
invokes the accepted bounded Production solver for three iterations. Partial
Stored Coordinates therefore do not enter the zero-Stored settling branch.
The current Production solver is not TA0, FP1, or another research identity.

All five authorized candidates use only the normalized Entity graph, candidate
semantic contract, FP1 family, node count, and explicit transform within the
bounded materializer. They do not require labels, routes, viewport state,
locale, browser state, or presentation state. The graph topology is available
at startup without semantic invention when projected using the same Entity
and Entity-Relation boundary. The explicit rational transform is required by
every candidate, but current Production has no accepted source or owner for
that candidate transform; the viewport `scale`/`pan` state is not an accepted
substitute.

## A. Startup compatibility

| Candidate | Current bounded classification | Evidence and boundary |
| --- | --- | --- |
| `TA0/REP-0` | `COMPATIBLE-AS-BOUNDED-EVALUATION` | Degree order consumes normalized Entity topology; no presentation input. |
| `TA2-DEG-W1-OP-v1` | `COMPATIBLE-AS-BOUNDED-EVALUATION` | Degree responsibility and operational tie order consume the same topology. |
| `TA2-MOTIF-W1-OP-v1` | `COMPATIBLE-AS-BOUNDED-EVALUATION` | Motif responsibility is derived from the normalized graph; no extra startup state. |
| `TA3-FWD-W1-OP-v1` | `COMPATIBLE-AS-BOUNDED-EVALUATION` | NEW responsibility and forward SPACE-S1 role use graph and node count only. |
| `TA3-REV-W1-OP-v1` | `COMPATIBLE-AS-BOUNDED-EVALUATION` | NEW responsibility and reverse SPACE-S1 role use graph and node count only. |

For all five, current Production integration is `NEEDS-DESIGN` because the
transform owner and the orchestration boundary are not accepted. No candidate
requires data unavailable at startup beyond that unresolved configuration
ownership. No candidate receives a Product transform policy in this audit.

## B. Stored/Owned Coordinate precedence

The accepted ownership order remains:

```text
Stored/Owned Coordinates > evaluation Derived coordinates
```

`getStoredCoordinates` reads supported LiaisonScape or Linkscape Prototype and
Draft profiles, and legacy coordinates where the existing application permits
them. `placeInitialEntities` copies finite stored positions first and only
fills unowned positions. The materializer rejects `storedCoordinates` in
`EVAL-FULL-SEED`; it cannot be used to infer partial merge support.

| Case | Current finding |
| --- | --- |
| Zero Stored Coordinates | Bounded candidate evaluation is defined; current Product startup still uses the accepted `placeInitialEntities` plus three-iteration settling path. |
| Partial Stored Coordinates | Candidate merge operation is `NOT-DEFINED`; current Product preserves existing positions but no research candidate merge policy exists. |
| Complete Stored Coordinates | Stored authority is preserved, but candidate evaluation over that state is `NOT-DEFINED` because EVAL-FULL-SEED rejects Stored input. |
| Invalid/unsupported Stored payload | Current Product applies its existing read/refusal behavior and may proceed with no recognized stored positions; candidate-specific handling and diagnostics are `NEEDS-DESIGN`. |
| Pending unsaved Derived/manual coordinates | Existing user-owned positions are preserved by `preservePendingCoordinates`; candidate output has no accepted merge/adoption operation. |
| Newly created Entity | Existing Product uses automatic temporary placement or explicit user placement; the full-seed materializer has no incremental/new-Entity operation. |

No candidate may overwrite Stored/Owned coordinates to complete an assignment.
The partial-ownership gap is common to all five candidates.

## C. Persistence and Coordinate save

The research output remains Derived, ephemeral, and nonpersistent. In current
Production, `saveCoordinates` runs only when `coordinatesDirty` is true. It
calls `buildPersistableCoordinatePositions`, which retains stored positions
and adds only explicitly adopted Entity positions, then calls
`applyStoredCoordinates`. The latter writes the existing Coordinate Prototype
or Draft representation after its current safety and declaration checks.

Therefore:

- isolated materialization cannot accidentally invoke Save Coordinates or
  mutate a Dataset;
- current save behavior is sufficient for explicit user adoption of ordinary
  finite positions under existing Coordinate semantics;
- a future candidate integration that places all Derived output into the
  ordinary adopted-position path could persist it, so an explicit adoption
  boundary would be required rather than assumed;
- existing Coordinate persistence does not retain candidateId,
  semanticContract, materializer identity, exact rational substrate, or
  evaluation provenance; and
- persisting research identity in Coordinate data would introduce new
  Layout/Presentation/application semantics and is not authorized.

Candidate-specific persistence is consequently `NEEDS-DESIGN` for all five.
No persistence, schema, or Extension field was added.

## D. Coordinate migration

The current `coordinate-migration.ts` performs an atomic, validated migration
from the supported Coordinate Prototype layer to Coordinate Draft. It refuses
existing Draft occurrences, unsupported fields, unsupported spaces/components,
conflicting declarations, malformed payloads, and invalid target output.
`migrateCoordinatePrototypeToDraft` clones the Dataset and migrates object
payloads without mutating the input. `App.tsx` then uses
`preservePendingCoordinates`: dirty current positions remain, while clean
positions are replaced by coordinates read from the migrated Dataset.

The current `space-migration.ts` similarly clones and validates supported
Linkscape Space data, changes the Space identity and units to the canonical
LiaisonScape Space, and preserves the coordinate values. Existing tests cover
atomic refusal and convergence of migration order.

For all five candidates, ephemeral runtime coordinates are outside the
Dataset migration surface and therefore cannot be migrated or mistaken for
stored coordinates unless a future integration inserts them into Dataset or
owned-position state. Candidate provenance is not migrated. Re-materialization
after a migration would be required if candidate display were ever integrated.
No candidate-specific migration rule is required for the isolated evaluator;
Production use remains `NEEDS-DESIGN`.

## E. Space migration and transform ownership

The existing Product Space migration is not a candidate transform policy. It
changes the serialized Space identifier/unit contract from Linkscape to
LiaisonScape and does not provide the explicit rational affine transform
required by the materializer. The materializer's transform also must not be
derived implicitly from viewport state or per-fixture tuning.

The five candidates therefore share these findings:

- exact bounded evaluation can record a transform and a candidate output
  without using serialized Space state;
- Product interpretation of the runtime numbers requires an accepted owner
  for the target LiaisonScape coordinate space and transform;
- evaluation before versus after Space migration has no different pure graph
  assignment semantics, but mixing candidate coordinates with stored
  coordinates can be ambiguous without that ordering and mapping contract;
- an integrated candidate evaluation must be ordered with accepted Space
  migration or define an explicitly owned equivalent boundary; and
- this is a common `NEEDS-DESIGN` ordering/ownership requirement, not a
  redesign of Space semantics.

## F. Failure and fallback

The materializer's statuses remain evaluation results:

| Materializer result | Current Product-level interpretation |
| --- | --- |
| `UNSUPPORTED-CANDIDATE` | Evaluation refusal; no current Product candidate action or diagnostic surface is defined. |
| `INVALID-INPUT` | Evaluation input refusal; current Dataset loading separately rejects invalid Dataset input, but candidate input handling is not defined. |
| `DOMAIN-MISMATCH` | Bounded evaluator refusal outside `1..65`; no Product expansion or fallback is accepted. |
| `MATERIALIZATION-UNDEFINED` | Evaluation failure; no repair/remap/retry policy is accepted. |
| `NONFINITE-OUTPUT` | Evaluation failure; current Product must not receive invalid geometry, but candidate handling is not defined. |
| `NONINJECTIVE-OUTPUT` | Evaluation failure; no coordinate repair or substitute is accepted. |
| `HARD-GATE-FAIL` | Candidate evidence failure; no Product selector or automatic baseline fallback exists. |
| `RUNTIME-ERROR` | Evaluation/runtime failure; a fail-closed diagnostic boundary would require explicit Product design. |

The current Product startup path has its own Dataset validation and existing
placement behavior, but it does not define a candidate failure transition.
Returning to the current baseline could be a future explicit Product fallback
policy; it is not inferred here. Leaving Stored/Owned coordinates untouched,
refusing candidate evaluation, and presenting an attributable diagnostic are
safe required design questions, not implemented behavior. No candidate may
silently fall back to another research candidate or to the current baseline.

Failure and fallback are common `NEEDS-DESIGN` responsibilities for all five.

## G. Dataset Replacement Safety

Current replacement safety derives `datasetModified` from Dataset content,
derives `pendingUserWork` from independently owned sources including
`coordinatesDirty`, and uses both to determine replacement confirmation and
the `beforeunload` loss-risk handler. A dirty or pending current state stages a
replacement candidate; cancel, discard, and Export actions retain their
existing distinct semantics. `loadDataset` returns invalid input diagnostics
without generating a replacement Dataset.

Pure candidate evaluation changes none of these values and is not recoverable
session state. It does not create pending work, Dataset modification,
`coordinatesDirty`, Export requirements, or a beforeunload transition. Existing
Production code is therefore compatible with the isolated no-mutation
boundary.

If future candidate output is adopted into `positions`, the explicit adoption
must decide whether it is user-owned and therefore dirty; if it is persisted,
replacement and Export semantics apply. That transition is not defined by the
current candidate contract. All five candidates are `BOUNDED-PASS` in
isolation and `NEEDS-DESIGN` for Product adoption.

## H. Determinism and provenance handoff

MAT-C3 records candidateId, semantic contract, materializer identity/version,
candidate family, graph projection hash, fixture/input authority, Production
source authority, runtime/configuration, transform, coordinate fingerprint,
hard gates, and status/failure. This is sufficient for bounded evaluation
evidence and should remain in an evaluation artifact or audit log.

Current Dataset semantics do not require research provenance to be persisted.
The existing Coordinate Prototype/Draft payload would not preserve the full
evaluation record, and adding it would require a separate accepted
Layout/Presentation/application contract. For PR-2, complete auditable
evaluation provenance is required; Dataset persistence of that provenance is
not. For future Product integration, the owner and lifetime of a separate
runtime/evaluation record remain undefined.

All five candidates are `BOUNDED-PASS` for MAT-C3 provenance and
`NEEDS-DESIGN` for a Product provenance handoff. Their semantic identities
remain distinct even when literal geometry is equal.

## Compatibility matrix

The matrix is explicit per candidate. `BOUNDED-PASS` does not mean integrated,
selected, visually accepted, or PR-2-complete.

| Candidate | Startup graph | Transform owner | Zero Stored | Partial Stored | Complete Stored | Derived/Owned precedence | Save Coordinates | Coordinate migration | Space migration | Failure attribution | Product fallback | Replacement safety | Pending work | Deterministic replay | Provenance | Current Production integration |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `TA0/REP-0` | BOUNDED-PASS | NEEDS-DESIGN | BOUNDED-PASS | NOT-DEFINED | BOUNDED-PASS | PASS | NEEDS-DESIGN | NEEDS-DESIGN | NEEDS-DESIGN | BOUNDED-PASS | NOT-DEFINED | BOUNDED-PASS | BOUNDED-PASS | BOUNDED-PASS | BOUNDED-PASS | NEEDS-DESIGN |
| `TA2-DEG-W1-OP-v1` | BOUNDED-PASS | NEEDS-DESIGN | BOUNDED-PASS | NOT-DEFINED | BOUNDED-PASS | PASS | NEEDS-DESIGN | NEEDS-DESIGN | NEEDS-DESIGN | BOUNDED-PASS | NOT-DEFINED | BOUNDED-PASS | BOUNDED-PASS | BOUNDED-PASS | BOUNDED-PASS | NEEDS-DESIGN |
| `TA2-MOTIF-W1-OP-v1` | BOUNDED-PASS | NEEDS-DESIGN | BOUNDED-PASS | NOT-DEFINED | BOUNDED-PASS | PASS | NEEDS-DESIGN | NEEDS-DESIGN | NEEDS-DESIGN | BOUNDED-PASS | NOT-DEFINED | BOUNDED-PASS | BOUNDED-PASS | BOUNDED-PASS | BOUNDED-PASS | NEEDS-DESIGN |
| `TA3-FWD-W1-OP-v1` | BOUNDED-PASS | NEEDS-DESIGN | BOUNDED-PASS | NOT-DEFINED | BOUNDED-PASS | PASS | NEEDS-DESIGN | NEEDS-DESIGN | NEEDS-DESIGN | BOUNDED-PASS | NOT-DEFINED | BOUNDED-PASS | BOUNDED-PASS | BOUNDED-PASS | BOUNDED-PASS | NEEDS-DESIGN |
| `TA3-REV-W1-OP-v1` | BOUNDED-PASS | NEEDS-DESIGN | BOUNDED-PASS | NOT-DEFINED | BOUNDED-PASS | PASS | NEEDS-DESIGN | NEEDS-DESIGN | NEEDS-DESIGN | BOUNDED-PASS | NOT-DEFINED | BOUNDED-PASS | BOUNDED-PASS | BOUNDED-PASS | BOUNDED-PASS | NEEDS-DESIGN |

The `PASS` precedence cells mean only that the existing ownership rule must be
preserved and is not contradicted by any candidate. The `NOT-DEFINED` and
`NEEDS-DESIGN` cells identify missing Product operations, not failures of the
research materializers.

## Common blockers

These findings apply to every authorized candidate:

1. No accepted Production owner or source exists for the explicit rational
   runtime transform. Viewport state is not a substitute.
2. Partial Stored/Owned coordinate merge is not defined; the only materializer
   mode is `EVAL-FULL-SEED` and it rejects Stored input.
3. Complete Stored-coordinate evaluation, incremental/new-Entity evaluation,
   and the boundary between Derived display state and explicit Owned adoption
   are not defined.
4. Candidate failure/refusal diagnostics and Product fallback behavior are not
   defined. Silent repair, remap, retry, or baseline fallback is not allowed.
5. Candidate-specific interaction with Coordinate save, migration, Space
   migration ordering, and Product provenance handoff is not defined.
6. A future Product integration boundary must preserve Dataset replacement,
   pending-work, beforeunload, and Stored/Owned safety semantics.

These are compatibility blockers, not quality ranking criteria.

## Candidate-specific blockers

No additional candidate-specific compatibility blocker was found in this
read-only audit. The five candidates differ in semantic contract and
materializer identity, but they require the same normalized graph, explicit
transform, ownership boundary, and Product safety decisions. TA2 motif's
known `o(V)` concern remains a candidate-specific later semantic concern; it
was not reinterpreted as a compatibility failure here. TA3 Forward and
Reverse remain distinct semantic identities even where their current literal
geometry aliases.

## CASE and Decision

**CASE 2 — ONE OR MORE COMPATIBILITY CONTRACTS REMAIN UNDEFINED.** Current
accepted Product semantics preserve Stored/Owned authority and support a
bounded no-mutation evaluator, but they do not define transform ownership,
partial or complete Stored-coordinate candidate operation, persistence and
adoption, migration handoff, Product fallback, or integrated provenance.

**Decision B:**

```text
Production compatibility evidence is incomplete;
record the common compatibility blockers before PR-2 completion.
```

CASE 3 was not used: no defined candidate behavior was found to conflict with
an accepted Production safety, ownership, or migration contract. The result is
not a rejection of any research candidate.

## PR-2 status and next prerequisite

`PR-2` remains **NO**. MAT-C3 remains input evidence and is not equivalent to
PR-2. This audit does not establish PR-4 or PR-5, select a candidate, or begin
Production integration. Visual, settling, routing/label, viewport, and
performance evidence remain in their separate readiness layers.

The exact smallest next prerequisite is a **bounded common Production
compatibility contract design**, beginning with explicit ownership of the
runtime transform and the EVAL-FULL-SEED versus partial Stored/Owned boundary,
then specifying failure/refusal/fallback and Derived-versus-Owned adoption
semantics. This prerequisite is **NOT STARTED**. No implementation or later
readiness checkpoint was started.

## Knowledge Candidate assessment

Knowledge Candidate: **YES**, repository-scoped only. The audit confirms that
bounded research materialization can be compatible with the graph boundary
without being Production-integrated, while transform ownership, Stored/Owned
precedence, failure fallback, persistence, migration, and provenance must each
remain explicit responsibilities. No change was made to `ai-knowledge`.

## Final repository state

| Surface | State |
| --- | --- |
| e2r-spec | Existing protected `sessions/E2R-Session-0052.md` remains dirty; only this result document and the roadmap synchronization are owned by this checkpoint. |
| LiaisonScape Production | HEAD `fd563340...`; source/package/test paths unchanged; two protected Lighthouse samples remain pre-existing dirty. |
| Disposable materializer clone | No change during this audit; detached `fd563340...`, no clone commit, retained untracked `experimental/` surface. |
| ai-knowledge | Unchanged; protected browser diagnostic state preserved. |

No Production source, test, package, sample, Dataset, schema, Core,
Extension, NarrativeLine, Hub, Validator, or research implementation was
modified. No push, tag, release, deploy, or publication was made.
