# Cross-App Locale Recipient-Preference
## NarrativeLine Experiment 1 / 1B / 1B-a Acceptance

Status: **ACCEPTED within NarrativeLine experimental scope**

This result records the bounded NarrativeLine acceptance of the recipient-
preference startup experiments. It does not finalize Cross-App runtime parity
for Hub or LiaisonScape, and it does not replace the design document's open
follow-ups.

## Scope

The accepted implementation supports the exact locale values `en` and `ja`.
It covers:

* URL fragment locale requests, including locale-only and Dataset Handoff links;
* the `narrativeline.language` persisted recipient preference;
* conflict resolution before Dataset fetch;
* session-scoped temporary effective-locale resolution under
  `narrativeline.localeTemporaryResolution`;
* same-tab reload continuity when the requested locale is unchanged; and
* Conflict Dialog language-choice labels shown in each target language, with
  matching button `lang` attributes.

The URL `locale` value remains an application UI presentation request. It does
not select Dataset content, a localized Dataset variant, or Dataset language.

## Accepted behavior and evidence

### Initial serial baseline

With a valid locale conflict, the background UI and Conflict Dialog remain in
the persisted locale while the choice is pending. Dataset Handoff fetch is
delayed until resolution. After resolution, the existing startup Handoff
pipeline begins and the StrictMode exactly-once guard remains active.

### Conflict resolution

For persisted `en` and requested `ja`, choosing the requested language makes
the effective locale `ja` while leaving `narrativeline.language` as `en`.
Choosing the saved language makes the effective locale `en` and leaves the
persisted value unchanged. The reverse persisted `ja` / requested `en` case
has the corresponding behavior.

Escape and backdrop dismissal use the saved-language resolution. Both choices
continue a valid Dataset Handoff and fetch exactly once.

### Invalid and locale-only requests

Unsupported, regional, empty, duplicate, and malformed locale instructions
are ignored as locale requests. They do not create a Conflict Dialog, block a
valid Dataset Handoff, or change the persisted preference. A locale-only link
uses the same conflict behavior and performs no Dataset fetch when the Dialog
is awaiting a choice.

### Handoff error localization

After requested-language resolution, UI and Handoff failure text use the
requested locale. After saved-language resolution, they use the saved locale.
Dataset credentials policy, validation, staging, and replacement safety are
unchanged.

### Same-tab reload continuity

The temporary resolution is session-scoped and keyed to the requested locale.
It is reused only when the current valid request matches. A requested-language
choice stores `{ "requestedLocale": "ja", "effectiveLocale": "ja" }` in the
session-scoped record; a saved-language choice stores the requested locale with
the saved effective locale. The persisted preference is not written by either
Conflict Dialog choice. A changed, absent, invalid, or duplicate request does
not reuse the old temporary resolution. A fresh tab has independent session
state.

### Autonym labels

The Dialog title, body, and explanatory text use the persisted locale. The
choice labels use the language selected by each action:

| Action | Label | `lang` |
| --- | --- | --- |
| saved `en` | `Continue in English` | `en` |
| requested `ja` | `日本語で表示` | `ja` |
| saved `ja` | `日本語で続ける` | `ja` |
| requested `en` | `Show in English` | `en` |

The Dialog's effective locale is not changed merely to render a button label.
This is a UI-choice presentation rule, not Dataset translation, Dictionary
language, Orthography, semantic meaning, automatic translation, or Locale Pack
support.

## Automated verification

NarrativeLine checkpoint commit:

* `bfe88f6 feat: add recipient locale startup resolution`
* five experiment-owned files committed;
* `npm.cmd test`: 80 passed, 0 failed;
* `npm.cmd run lint`: passed;
* `npm.cmd run build`: passed; and
* `git diff --check`: passed.

The pure locale service tests cover the conflict matrix, saved/requested
effective locales, handoff permission, temporary-resolution reuse and
invalidations, storage failure behavior, and autonym labels with their
language attributes.

## Remaining open items

This acceptance does not accept or implement:

* modified or pending user work combined with locale conflict;
* Timeline or Home locale-control placement;
* footer alignment;
* LiaisonScape recipient-preference runtime;
* Hub locale producer runtime;
* narrow/touch visual acceptance;
* parallel-fetch comparison;
* arbitrary BCP 47 locales;
* third-party Locale Packs;
* automatic translation or Dataset content-language automation; or
* translation provenance implementation.

The existing terminology follow-up for “Handoff link” wording remains
separate and is not changed by this checkpoint.

## Boundary and repository status

No Dataset, Core, Extension, Validator, Handoff, Replacement Safety, Hub, or
LiaisonScape semantics are changed by this result. The existing untracked
`research/exploratory/anonymous-dataset-sharing.md` file is preserved and is
not part of this checkpoint.

This is a local documentation checkpoint only. It must remain unpushed.
