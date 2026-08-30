# LiaisonScape Presentation Relation Deletion Cleanup Result

Date: 2026-08-30

Status: `CLOSED — RELATION DELETION PRESENTATION CLEANUP WAS ALREADY IMPLEMENTED`

## Model used and assessment

Model used: GPT-5 Codex session. The recommended Luna profile was not
available as a selectable runtime. The assessment uses the live local source
as implementation authority, accepted E2R-SPEC decisions, existing tests, and
a read-only public-source check. The public GitHub file fetch returned a cache
miss, so no public claim is used to override local evidence.

## Trigger and authority

The trigger was the remaining roadmap question whether explicit Relation
deletion safely removes only the corresponding Relation-ID keyed Presentation
record. Authority is the current LiaisonScape Presentation writer,
`useDetailDeletionWorkflow`, RelationService, preservation-first Extension
policy, and existing accepted Presentation tests.

## Public and local baseline

Local LiaisonScape was clean at HEAD `f95e74a fix: align viewport toolbar
keyboard semantics` before this audit. Public GitHub was checked read-only but
the requested source files could not be fetched by the available live web
reader. Local source therefore remains authoritative.

## Previous state and cleanup ownership

The lifecycle behavior was already implemented. `RelationService.deleteRelation`
removes the Core Relation and refuses nonexistent IDs without mutation.
`useDetailDeletionWorkflow.confirmDeletion` then calls
`removeRelationPresentationRecord` with the deleted ID and sends the resulting
Dataset through App's single `onDatasetUpdate` callback. App separately removes
runtime manual Relation-label state. This is a narrow Presentation-aware
orchestration boundary, not generic orphan garbage collection and not an
App-specific manual Dataset surgery.

## Accepted semantics

For a successful explicit Relation deletion:

- the selected Core Relation is removed;
- only the Presentation record keyed by that Relation ID is removed;
- sibling records, including already-orphaned records, remain unchanged;
- unrelated Extensions, Coordinate data, and Core Entity/Event data remain;
- unknown fields on retained records and payloads remain preserved.

If no target Presentation record exists, cleanup is a no-op and Relation
deletion still proceeds. If the last supported Presentation record is removed,
the empty `relations` container and otherwise empty supported Presentation
Extension are canonically removed. The existing writer performs this cleanup.

## Unsupported and malformed boundary

The cleanup writer validates the existing supported Presentation payload before
transformation. Unsupported versions and malformed payloads return the existing
fail-closed refusal rather than being reinterpreted or repaired. The deletion
workflow therefore does not silently discard unsupported or malformed
Presentation data. No new cross-Extension policy was introduced.

## No-global-orphan-GC boundary

The implementation deletes exactly `relations[deletedRelationId]`; it does not
scan or remove other orphan IDs. Existing tests explicitly retain an unrelated
orphan and retain sibling records exactly.

## Tests and UI workflow regression

Existing `presentation-extension.test.ts` covers target-only deletion, sibling
and unrelated orphan preservation, unknown sibling fields, unrelated Extension
preservation, Coordinate preservation, no-op absence, and last-record empty
container cleanup. Existing `detail-deletion-workflow.test.ts` covers Relation
confirmation, one Relation workflow update, selection/resolution flow, and
Entity blocker-resolution behavior. Existing application integration coverage
also exercises Relation detail deletion and Dataset update/baseline behavior.

No source or test changes were necessary. Confirmation semantics, selection,
Entity blocker resolution, `datasetModified`, and runtime manual label cleanup
remain unchanged.

## Browser and modularization assessment

Browser acceptance classification: `NOT REQUIRED — DATASET LIFECYCLE SEMANTICS
COVERED BY AUTOMATED TESTS`. No dialog, focus, rendering, or pointer behavior
changed, and no browser acceptance was performed.

This checkpoint does not justify another extraction. `useDetailDeletionWorkflow`
remains intact; App modularization, Dataset lifecycle extraction, Coordinate
extraction, and graph gesture extraction remain not started.

## Files and roadmap

No LiaisonScape source, tests, package dependencies, Validator, samples,
`e2r-test-utils`, or `ai-knowledge` files were changed. This result document
records closure. The roadmap's pre-release sequence was updated only to mark
the previously remaining Presentation lifecycle cleanup item as closed by this
existing implementation and this acceptance record; unrelated sequencing was
not rewritten.

## Codex assessment

### Agree

Yes. Successful explicit Relation deletion should clean its own supported
Relation-ID Presentation record while preserving all unrelated data. The live
implementation already follows that contract.

### Concern

The highest-risk edges are malformed or unsupported payloads and accidental
global orphan cleanup. The current validation/refusal and target-only delete
boundaries address both.

### Alternative

Moving cleanup into `RelationService.deleteRelation` could make the service
appear more atomic, but would couple Core deletion to a Presentation Extension
without evidence that the service owns Extension policy. The current narrow
orchestration is more consistent with the existing layers and requires no
refactor.

### Recommendation

Accept the existing implementation and tests. Do not rewrite the cleanup or
introduce global orphan repair. Keep future changes Relation-ID-scoped and
preservation-first.

## Push status and result

No push, deploy, publish, tag, release, or browser acceptance was performed.
The protected dirty `ai-knowledge` file remains untouched.

Result: **CLOSED — RELATION DELETION PRESENTATION CLEANUP WAS ALREADY IMPLEMENTED**

