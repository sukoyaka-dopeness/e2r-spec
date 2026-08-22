# Cross-App Locale Recipient-Preference

## NarrativeLine Experiment 2B — Effective Locale and In-Session Dataset Replacement Safety

Date: 2026-08-23
Status: **ACCEPTED within NarrativeLine in-session replacement-composition scope**

## Scope

This checkpoint accepts the composition of the resolved effective application locale with NarrativeLine's in-session Dataset Replacement Safety flow.

The accepted behavior is:

> Dataset Replacement Safety presentation follows the resolved effective application locale, while replacement decisions remain independent from persisted locale preference.

The scope covers an already running NarrativeLine session after effective locale resolution, including Dataset Replacement Dialog presentation and the modified-only, pending-only, and modified-plus-pending action paths. Locale choice does not rewrite the persisted `narrativeline.language` value.

This is not acceptance of startup-only Dataset Handoff in the presence of pre-existing dirty state, and it is not acceptance of the complete Cross-App locale recipient-preference workstream.

## Checkpoints and blocking failures

The underlying locale startup resolution was delivered in NarrativeLine commit `bfe88f6` (`feat: add recipient locale startup resolution`).

Two bounded blockers were found and resolved before this acceptance:

- `f4ce697` (`fix: localize Dataset replacement dialog`) changed Dataset Replacement Dialog copy selection to use the current effective locale through `useLanguage().language`. The copy helper and its tests cover the English and Japanese action matrix without reading persisted, requested, or URL locale state directly.
- `6b18bf1` (`fix: stabilize Event detail draft synchronization`) removed the Event Detail render loop. The cause was a newly allocated `storedHistoryTime` object in an effect dependency path, which repeatedly triggered draft propagation and parent rerendering.

The render-loop fix is included as prerequisite evidence for the pending-work scenarios; no runtime change is made by this specification checkpoint.

## Manual acceptance evidence

### Scenario A — modified-only, effective Japanese

With persisted locale `en`, requested locale `ja`, requested locale selected, and effective locale `ja`:

- Editing the active Dataset produced `datasetModified=true` and `pendingUserWork=false`.
- Opening a sample Dataset displayed the Japanese modified-only Replacement Dialog, including its title, body, and actions.
- Cancel preserved the modified Dataset and prevented replacement.
- Effective locale remained Japanese and persisted `narrativeline.language` remained `en`.

### Scenario B — pending-only, effective Japanese

With a clean Dataset and an Event Detail draft:

- The draft set `pendingUserWork=true`.
- Header Home navigation preserved the draft and pending state.
- Opening a sample Dataset displayed the Japanese pending-only Replacement Dialog.
- Cancel preserved the draft, pending state, active Dataset, effective Japanese locale, and persisted `en` preference.
- Returning to Event Detail confirmed that the draft remained available.
- No `Maximum update depth exceeded` warning occurred after the render-loop fix.

### Scenario C — modified plus pending, effective Japanese

With both Dataset modification and pending Event Detail work present:

- Opening a sample Dataset displayed the Japanese modified-plus-pending Replacement Dialog.
- The available actions were Cancel, Discard work and Continue, and Export Dataset.
- Cancel preserved both the Dataset modification and the pending draft, with effective Japanese locale and persisted `en` preference unchanged.

### Modified-plus-pending Export transition

- Export Dataset completed without accepting the replacement candidate.
- The Dataset modification flag cleared while pending work remained present.
- The Dialog transitioned to the Japanese pending-only state.
- Pending-only Cancel preserved the pending draft and current Dataset.
- Discard pending work and Continue then discarded the draft and accepted the candidate, leaving pending work cleared and the effective Japanese locale active while persisted `en` remained unchanged.

### Reverse-direction smoke

With persisted locale `ja` and requested locale `en`:

- The conflict Dialog body was Japanese, with the saved-language action in Japanese and the requested-language action shown in English.
- Selecting the requested language produced effective English while persisted `ja` remained unchanged.
- Modified-only replacement displayed the existing English Dialog copy.
- Cancel preserved the modified Dataset, effective English locale, and persisted `ja` preference.

## State and persistence boundaries

This acceptance preserves the following boundaries:

- Effective locale is the source for in-session Replacement Dialog localization.
- Persisted locale preference is not changed by saved-language or requested-language selection.
- Replacement decisions are governed by Dataset modification and pending-work state, not by locale preference.
- The Dataset Replacement Safety action matrix is unchanged:
  - clean: no Dialog;
  - modified-only: Cancel, Discard and Continue, Export and Continue;
  - pending-only: Cancel, Discard and Continue;
  - modified-plus-pending: Cancel, Discard work and Continue, Export Dataset.
- Candidate acceptance, discard behavior, pending-work preservation, and Dataset Replacement Safety semantics are unchanged.

## Automated verification evidence

The NarrativeLine runtime checkpoints were verified before this documentation-only acceptance:

- After the localization fix: 82 tests passed, lint passed, build passed, and `git diff --check` passed.
- After the Event Detail synchronization fix: 84 tests passed, lint passed, build passed, and `git diff --check` passed.

This e2r-spec acceptance document is additionally verified with the repository validation command and `git diff --check`.

## Explicit exclusions

The following remain outside this acceptance:

- Experiment 2C: startup-only Dataset Handoff combined with pre-existing modified, pending, or modified-plus-pending work.
- Timeline or Home locale controls.
- Footer changes.
- Home-to-Hub navigation and Cross-App shell completion.
- Workspace Dataset menu and Export menu integration or alignment.
- LiaisonScape recipient-locale runtime and Hub locale-producer work.
- Narrow-screen or touch-specific acceptance.
- Parallel-fetch behavior.
- Arbitrary BCP 47 locale support, Locale Packs, automatic translation, and Dataset content-language automation.
- Event Detail Back wording or UX follow-up.

No Dataset, Core, Extension, Handoff schema, or locale-resolution semantics are changed by this checkpoint.

## Cross-App shell follow-up

The following remain record-only follow-up work and are not reclassified by this document:

- NarrativeLine and LiaisonScape Home-to-Hub integration.
- A visible primary acquisition path from Home.
- Workspace and Timeline Open/Import Dataset menu placement.
- Export menu integration.
- Home/editor locale-control alignment.
- Footer alignment.

## Knowledge Candidate Check

No new ai-Knowledge entry is warranted for this acceptance. The evidence is a bounded NarrativeLine implementation checkpoint, and the local fixes do not yet establish a workspace-wide reusable practice or cross-application decision. The workspace Learning Capture Routine remains applicable to future durable, reusable lessons.

## Repository boundary

This document records acceptance only for NarrativeLine's in-session replacement-composition scope. It does not promote the result to whole Cross-App completion, does not accept Experiment 2C, and does not alter the existing untracked exploratory Dataset-sharing document.
