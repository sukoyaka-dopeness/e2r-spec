# LiaisonScape Presentation Relation Delete Lifecycle Result

Date: 2026-08-29

Status: IMPLEMENTED – AUTOMATED GATE PASS

## Scope and authorities

This bounded checkpoint implements known-deleted Relation cleanup for the
LiaisonScape Presentation Extension:

`draft.github.sukoyaka-dopeness.liaisonscape-presentation`, version `0.1.0`.

The release-sequencing authority is the current `docs/roadmap.md` entry for
Presentation lifecycle cleanup. The Presentation Draft authority is
`extensions/presentation-extension-draft.md` and
`schemas/extensions/presentation-draft.schema.json`. The accepted node
placement baseline remains LiaisonScape `24494f4` + `8a5d2a6` and e2r-spec
`6abf2cb`.

## Runtime baseline and previous boundary

Before this checkpoint, Relation deletion removed only the Core Relation.
Presentation data is Relation-ID scoped under `relations`, with `arrowDisplay`
and `lineStyle`, absent/default omission, unknown-field preservation, and
forward-compatible unknown tokens. Global orphan cleanup and orphan Validator
severity remain explicitly undecided.

## Root lifecycle issue

Deleting a known Relation could leave its Presentation record in the Dataset.
This produced stale Presentation data addressed to a Relation that no longer
existed. The fix targets only the Relation ID being deleted; it is not a global
orphan garbage collector.

## Implemented responsibility and transaction

`src/presentation-extension.ts` now provides the pure
`removeRelationPresentationRecord(dataset, relationId)` helper. It validates
the existing supported Presentation payload, removes only the requested record,
preserves all other payload data, and returns the original Dataset for a
missing target record.

`useDetailDeletionWorkflow.ts` composes the transaction:

```text
delete Core Relation
-> remove that Relation's Presentation record
-> one onDatasetUpdate(final Dataset)
```

If Presentation validation refuses, the Core deletion is not committed. No
arbitrary Extension traversal was added to RelationService. No global orphan
sweep is performed.

## Cleanup and preservation semantics

- A target record containing `arrowDisplay`, `lineStyle`, or unknown fields is
  removed as a whole because its Relation owner was deleted.
- Sibling Relation records remain unchanged.
- Unknown fields and unknown future tokens in sibling records remain preserved.
- Unknown sibling Extension payloads remain preserved.
- A missing target record is a no-op for Presentation data.
- When the last Presentation record is removed, the existing canonical empty
  container behavior omits `relations` and then the empty Presentation
  Extension, while preserving unrelated Dataset Extensions.
- Existing orphan Relation-ID records that were not the known deleted target
  remain untouched.
- The Core Relation deletion itself remains RelationService responsibility.

## Dataset modified and replacement safety

Relation deletion plus Presentation cleanup is one Dataset mutation and uses
the existing `datasetModified` behavior. `pendingUserWork`, recoverability,
replacement staging, and D1-D7 semantics are unchanged. No new dirty category,
orphan repair workflow, or automatic repair on open/import/save was added.

## T1–T14 evidence

| Scenario | Result | Evidence |
| --- | --- | --- |
| T1 arrowDisplay record | PASS | Existing Presentation writer tests plus cleanup helper |
| T2 lineStyle record | PASS | Existing line-style tests plus cleanup helper |
| T3 arrowDisplay + lineStyle | PASS | New whole-record cleanup test |
| T4 unknown fields/tokens | PASS | New cleanup test preserves sibling unknown data and tokens |
| T5 sibling preservation | PASS | New cleanup test |
| T6 target absent | PASS | New no-op cleanup test |
| T7 pre-existing orphan | PASS | Cleanup addresses only requested ID; test fixture retains orphan |
| T8 last record / empty container | PASS | New canonical empty-envelope test |
| T9 other Extensions | PASS | New cleanup test preserves unknown sibling Extension |
| T10 no Presentation Extension | PASS | No-op helper path and existing writer tests |
| T11 self-Relation | PASS | Core Relation deletion already supports self-Relations; cleanup is ID-scoped |
| T12 parallel Relations | PASS | Relation-ID keyed cleanup preserves independent siblings |
| T13 UI integration | PASS | Existing deletion workflow tests plus one final Dataset update path |
| T14 replacement safety | PASS | Existing Dataset Replacement Safety tests; no safety contract change |

The focused Presentation suite passed 18 tests. The full LiaisonScape suite
passed 269 tests.

## Browser smoke

No browser smoke was performed in this implementation checkpoint. The supplied
checkpoint explicitly permits `Browser smoke: NOT PERFORMED` when physical
tooling is unavailable and does not require manual PASS to claim automated
implementation completion. Formal browser acceptance remains separate.

## Schema and Validator boundary

Presentation `specVersion` remains `0.1.0`; no new property, token, schema
version, app version, or orphan diagnostic field was added. Production
Validator integration was not implemented. Whether pre-existing orphan
Presentation records are warnings, errors, or ignored remains OPEN for a
future semantic Validator decision. This checkpoint does not perform global
orphan repair.

Coordinate, Layout, node placement, Entity ownership UI, C local adjustment,
Dataset Replacement Safety redesign, samples, roadmap, and versioning are
unchanged.

## Known limitations and exclusions

This result covers the known-deleted Relation lifecycle only. It does not
clean unrelated pre-existing orphan records and does not decide their
diagnostic severity or repair policy. Entity deletion policy is unchanged;
there is no new cascade policy in this checkpoint.

No public sample refresh, production Validator integration, Presentation
schema change, browser acceptance, release, push, or deployment was started.

## Exact LiaisonScape commit

`d74b176 fix: clean presentation on relation delete`

Changed paths:

- `src/presentation-extension.ts`
- `src/hooks/useDetailDeletionWorkflow.ts`
- `tests/presentation-extension.test.ts`

## Next checkpoint

The next checkpoint is not started. Global orphan validation policy and
production Validator integration remain OPEN and separate.

STOP.
