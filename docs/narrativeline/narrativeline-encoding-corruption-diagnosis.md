# NarrativeLine Encoding Corruption Diagnosis

## Status

**DIAGNOSIS COMPLETE / CORRECTION MAP RECORDED / NO RUNTIME CHANGE**

## Why this diagnosis exists

The prior modal audit classified the problem as broader encoding corruption.
This diagnosis checks that conclusion against live bytes, Git blobs, source
history, and consumers before any correction is authorized.

## Inputs

The live authorities were NarrativeLine `616f34e`, e2r-spec `c112555`, the
prior comparison `577005d`, the modal audit, and the protected dirty
ai-knowledge playbook. Candidate B remains implemented and its formal visual
acceptance remains pending.

## Files inspected

NarrativeLine source inspected:

- `src/i18n/messages.ts`
- `src/services/RelationPresentationService.ts`
- `src/App.tsx`
- `src/components/ModalDialog.tsx`
- `src/components/AppFrame.tsx`
- `src/components/DatasetReplacementDialog.tsx`
- `src/components/LocaleConflictDialog.tsx`
- `src/components/DetailBackConfirmationDialog.tsx`
- `src/screens/EntityDetailScreen.tsx`
- `src/screens/EventDetailScreen.tsx`
- `src/screens/HomeScreen.tsx`
- `src/screens/TimelineScreen.tsx`
- relevant copy services and locale/presentation tests

The modal inventory is: Entity blocker and final Entity confirmation, Dataset
replacement, locale conflict, detail Back confirmation, Event deletion,
Event–Entity association removal, and Credits. All use the shared
`ModalDialog`; `currentDialog` has no additional current modal consumer.

## Encoding / byte-level findings

Both `src/i18n/messages.ts` and `src/services/RelationPresentationService.ts`
decode successfully as UTF-8. Neither has a UTF-8 BOM. The Git blobs also
contain valid UTF-8. Suspicious-looking Japanese characters in
`messages.ts` are the intended current Unicode literals, not mojibake bytes.
The English loading value is the valid Unicode ellipsis `…`, not `窶ｦ`.

The terminal/display rendering that produced mojibake in the prior audit is
therefore not evidence of source-file corruption. No file was rewritten or
re-saved during this diagnosis.

## Git history findings

`src/i18n/messages.ts` was introduced by `ded44d6 feat: complete NarrativeLine
locale consumer`. `git blame`, the current blob, and the `ded44d6` blob all
show coherent English and Japanese literals. Later commits changed selected
keys but did not introduce corrupted text.

`src/services/RelationPresentationService.ts` previously emitted only the
`primary` value. Commit `766968d fix: refine Relation blocker card layout`
added the separate `endpoints` field containing `竊・`. The immediately prior
blob has no `endpoints` field, so the first known occurrence is that commit.
The same commit also added the corresponding card presentation structure;
there is no evidence that it converted the file encoding.

The evidence supports one bounded source-literal introduction, not a
repository-wide encoding conversion event.

## Confirmed corruption inventory

| Source | Field / function | Current value | Status |
| --- | --- | --- | --- |
| `src/services/RelationPresentationService.ts:33` | `endpoints` | `` `${endpoint(sourceId)} 竊・${endpoint(targetId)}` `` | Confirmed mojibake |

No `messages.ts` entry is confirmed corrupted by the byte/source review. Its
Japanese table, English ellipsis, punctuation, and mixed Dataset terminology
are valid source text.

## Correction map

| Source path | Literal | Intended replacement | Evidence | First known commit | Consumers | Surface / locale | Semantic impact |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `src/services/RelationPresentationService.ts:33` | `竊・` between endpoints | `→` | Existing `primary` sibling in the immediately preceding/current source and accepted presentation follow-up | `766968d` | `EntityDetailScreen` blocker card | modal, EN/JA | none; derived display only |

There is no correction entry for `messages.ts`: the diagnosis found no
confirmed corrupted literal there. The prior audit’s shared-message findings
were a display-layer reading error and should not authorize i18n replacement.

## Intended-text evidence

The intended separator is confidently `→`: the same function’s `primary` field
already constructs `source → target`, and the prior presentation follow-up
records the same intended output. This is the strongest available local
duplicate evidence. No Japanese message replacement is proposed or guessed.

## Current consumer surfaces

The `endpoints` value is consumed by `EntityDetailScreen` as the primary
blocker identity display when present. It is visible for ordinary, self,
parallel, and hidden/Event-related Relations. It is not Dataset storage and is
not part of the Handoff payload.

The `messages.ts` values are consumed across Home, Timeline, Entity/Event
detail, Credits, Dataset replacement/error presentation, and Handoff status.
Source review found them coherent; they remain outside the correction map.

## Existing test coverage

Current tests exercise Relation primary/endpoint presentation, Relation ID
hints, duplicate endpoint hints, Entity blocker presentation, modal locale
surfaces, Credits, loading/error copy, and Handoff behavior. The current tests
do not consistently assert the exact `endpoints` separator. They do exercise
the surrounding cards and accepted behavior without changing Dataset
semantics.

## Required regression coverage

A future bounded separator correction should assert `source → target` for EN
and JA across ordinary, self, parallel, and hidden/Event-related Relations;
blocker cards with Relation ID hints; and cards where the Handoff anchor is
present. It should also retain the existing focus, confirmation, deletion, and
same-tab Handoff tests.

No broad i18n rewrite or message-table replacement is warranted by this
diagnosis. Existing locale tests should remain the regression baseline.

## Root-cause classification

**A. ISOLATED SOURCE-LITERAL CORRUPTION**

The files are valid UTF-8, no BOM or toolchain encoding failure was found, and
Git history identifies one added presentation literal containing the corrupted
separator. The broader issue classification from the prior audit is refuted
by the live byte and source review.

## Safe correction boundary

The smallest safe future correction is one separately reviewable change to the
`endpoints` separator in `RelationPresentationService.ts`, with the regression
coverage listed above. It must not modify `messages.ts`, Candidate B geometry,
Handoff behavior, deletion behavior, or Dataset data.

## Unresolved items

The exact external process that produced the `竊・` literal inside commit
`766968d` cannot be established from Git history alone. This is a historical
inference boundary, not evidence of an active toolchain problem. The prior
modal audit document contains an overbroad shared-message conclusion; it was
not rewritten in this checkpoint because only this diagnosis document is in
scope.

## Explicit exclusions

No NarrativeLine source, tests, CSS, package/build configuration, encoding
metadata, e2r-spec roadmap, ai-knowledge, LiaisonScape, Hub, Core, Extension,
or schema was modified. No literal was fixed, no file was re-encoded, and no
Candidate B visual acceptance was performed. Capability Handoff remains
CLOSED / ACCEPTED. Nothing was pushed or deployed.

## Decision

**A. ISOLATED SOURCE-LITERAL CORRUPTION**
