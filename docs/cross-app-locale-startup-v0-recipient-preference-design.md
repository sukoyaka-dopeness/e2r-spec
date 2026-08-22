# E2R Cross-App Locale Startup v0 — Recipient Preference Design

Status: Design refinement / current decision record; experiments required before implementation

This document refines the accepted design checkpoint in
`docs/cross-app-locale-startup-v0-design.md` (commit `f681327`). The original
checkpoint remains historical and accepted. This document does not rewrite it,
and it does not implement runtime behavior.

The refinement addresses one unresolved question: how a shared link can express
the sender's presentation-language intent without silently overriding an
explicit language preference already chosen by the recipient.

This document is the current authority for recipient-preference conflict
resolution. The original startup design remains the accepted URL-contract
checkpoint. Where it describes unconditional URL precedence, this refinement
supersedes that behavior for the valid-request versus valid-persisted-
preference conflict only; it does not rewrite the original document's
historical record.

## Audit basis

The audit covered the current source, tests, Handoff services, navigation, and
public deployment references for Hub, NarrativeLine, and LiaisonScape.

The currently referenced GitHub Pages origins are:

* Hub: `https://sukoyaka-dopeness.github.io/e2r-hub/`
* NarrativeLine: `https://sukoyaka-dopeness.github.io/e2r-narrative-line/`
* LiaisonScape: `https://sukoyaka-dopeness.github.io/e2r-liaison-scape/`

These URLs use the same Web origin, `https://sukoyaka-dopeness.github.io`;
the repository names are different paths, not different origins. Therefore
their browser `localStorage` areas are technically shared for these current
GitHub Pages deployments. The current application-specific keys remain
separate by name:

* NarrativeLine: `narrativeline.language` and `narrativeline.lastDataset`;
* LiaisonScape: `liaisonscape.locale`; and
* Hub: no current locale persistence key.

This technical access does not change the ownership boundary. Hub must not read
or infer a recipient application's saved locale, and NarrativeLine and
LiaisonScape must not use one another's keys as preference sources. Producers
must be able to construct correct links without recipient storage access, and
recipients must resolve from their own requested locale, own persisted
preference, browser fallback, and default. Same-origin access is an incidental
property of the current deployment topology, not a cross-app locale contract;
custom domains, subdomains, hosts, local ports, or third-party deployments may
use different origins.

The current local-development setup may likewise place multiple applications
under paths on one `scheme`/`host`/`port` and expose the same storage area, but
another dev-server topology may not. These URLs and storage observations are
deployment evidence, not a live deployment acceptance of this design.

## Current preference audit

### NarrativeLine

NarrativeLine stores the locale under the origin-scoped key
`narrativeline.language` using `window.localStorage` in
`src/i18n/LanguageContext.tsx`.

The current behavior is:

* `ja` is restored only when the stored value is exactly `ja`;
* every other value, missing value, storage removal, or storage failure path
  resolves to `en` in the current implementation;
* an explicit footer language toggle writes the selected value;
* `navigator.language` is not consulted;
* URL `locale` is not consulted;
* the saved value survives a normal reload while origin storage remains;
* browser data removal removes the value under standard Web Storage behavior;
* private browsing behavior is browser-dependent and must be treated as
  non-persistent, not as a separate E2R preference source.

The selector is rendered by `AppFrame` only when `showFooter` is true. The Home
screen enables the footer; Timeline and detail/editor screens do not. The
shared `LanguageContext` means that a selector placed in an editor surface can
change presentation immediately without replacing the Dataset, but that
surface control does not exist today.

### LiaisonScape

LiaisonScape stores the locale under `liaisonscape.locale` using
`window.localStorage` in `src/i18n.ts`.

The current behavior is:

* a valid stored `en` or `ja` value wins;
* without a valid stored value, `navigator.language` beginning with `ja` gives
  `ja`;
* all other browser-language values fall back to `en`;
* the locale effect writes the current value to localStorage and applies
  `document.documentElement.lang`;
* URL `locale` is not consulted;
* the key is application-owned even when the current same-origin deployment
  makes the underlying storage area technically accessible to other apps;
* browser data removal and private browsing follow standard Web Storage
  behavior and do not create a durable application preference.

The language button is rendered in the Home footer. The Workspace header has a
Home action but no language selector. Because locale is top-level React state,
a future Workspace selector can change the UI without replacing the Dataset,
graph coordinates, or drafts if it calls the same state transition. That
preservation still needs focused acceptance tests.

### Hub

Hub currently initializes locale as React state with `en`, has an explicit
landing-page toggle, and has no locale localStorage, URL parsing, or browser
language initialization. Its current Direct Handoff producer adds only
`datasetUrl`. Commit `0d19221` remains untouched by this audit.

## Revised state model

The following values must remain separate:

| State | Meaning | Authority |
| --- | --- | --- |
| `requestedLocale` | Valid exact `en`/`ja` requested by the current URL | Link producer intent |
| `persistedUserLocale` | Valid locale previously selected in this recipient app | Explicit recipient choice |
| `browserLocale` | Browser/OS language evidence, such as `navigator.language` | Fallback evidence only |
| `effectiveLocale` | Locale currently used by the UI | Runtime result |
| `datasetUrl` | Independent Dataset acquisition instruction | Handoff producer/recipient pipeline |
| Dataset language | Language of Dataset contents or localized variant | Dataset producer/content |

No value may be inferred from another. In particular, Dataset language must not
choose UI language, and UI locale must not select or translate a Dataset.

## Terminology and URL meaning

Keep the compact parameter name `locale`. Its meaning is refined from an
unconditional startup instruction to a **startup locale request**:

```text
#locale=ja
#datasetUrl=<encoded-HTTPS-URL>&locale=ja
```

Conceptually, `locale=ja` means:

> This link requests Japanese application presentation.

It does not mean force Japanese, permanently change the recipient preference,
or request a Japanese Dataset. `requestedLocale` is the internal state name;
it is not a second URL parameter.

Exact v0 values remain `en` and `ja`. Empty, unsupported, duplicate, or
malformed locale input remains non-fatal and must not alter valid Dataset
acquisition.

## Conflict-resolution models

| Model | Rule | Assessment |
| --- | --- | --- |
| 1. URL always wins | A valid request immediately becomes effective | Strong link reproducibility, but silently overrides an explicit recipient choice |
| 2. Saved preference always wins | A saved locale suppresses any differing request | Strong recipient autonomy, but silently discards sender intent |
| 3. Conflict Dialog | A Dialog appears only when valid request and valid saved locale differ | Best balance; adds an interaction that needs orchestration and UX validation |
| 4. Non-modal notice | Show the conflict as a banner with a switch action | Less interruption, but weaker discoverability and harder first-paint semantics |
| 5. No URL locale | Only application controls determine locale | Simple, but fails the SNS/blog/static-link use case |

Always showing a Dialog for every Dataset Handoff is rejected: it interrupts
normal Handoff even when there is no conflict. A locale-only link and a
Dataset-plus-locale link must use the same conflict rule. A browser-language
mismatch alone is not a conflict because browser language is not an explicit
application choice.

## Provisional primary model

Use Model 3 as the design target, subject to the experiments below:

* valid URL request + no saved explicit locale: honor the request directly;
* valid URL request + matching saved locale: use it directly, no Dialog;
* valid URL request + differing saved explicit locale: show one locale conflict
  Dialog;
* no URL request + saved locale: use the saved locale directly;
* no URL request + no saved locale: use browser fallback, then `en`;
* invalid URL locale: ignore it and use the normal saved/browser/default path;
* browser-only mismatch: never show a conflict Dialog.

The Dialog is about application presentation only. It must not imply Dataset
translation, Dataset replacement, or permanent preference mutation.

## First-run behavior

| Case | Inputs | Result | Dialog |
| --- | --- | --- | --- |
| 1 | no saved, browser en, URL ja | effective `ja` | No |
| 2 | no saved, browser ja, URL en | effective `en` | No |
| 3 | no saved, browser ja, no URL | effective `ja` | No |
| 4 | no saved, browser non-ja, no URL | effective `en` | No |

The URL request is stronger than browser fallback evidence, so cases 1 and 2
do not need an interruption.

## Returning-user behavior

| Case | Inputs | Result | Dialog |
| --- | --- | --- | --- |
| 5 | saved `en`, URL ja | choice required | Yes |
| 6 | saved `ja`, URL en | choice required | Yes |
| 7 | saved `en`, URL en | effective `en` | No |
| 8 | saved `ja`, URL ja | effective `ja` | No |
| 9 | saved `en`, no URL | effective `en` | No |
| 10 | saved `ja`, no URL | effective `ja` | No |

## Dialog semantics

The conceptual choices are:

* **Continue in the saved application language**: use the persisted locale for
  this startup and leave it unchanged.
* **Show this link in the requested language**: use the requested locale for
  this startup and leave the persisted locale unchanged.

Neither choice silently changes the saved preference. A later explicit use of
the application locale selector is a durable preference action.

An existing exact `en` or `ja` value under `liaisonscape.locale` is treated as
the persisted recipient preference, including during migration from the legacy
behavior that could store a browser-derived fallback. New consumer behavior
must not persist browser fallback values; only an explicit manual selector
action writes the preference.

Locale storage read or write failures are non-fatal. A read failure proceeds
through browser/default fallback; a write failure may leave the current UI
locale changed while the preference remains unsaved. Neither failure blocks
locale startup or Dataset Handoff.

The Dialog must use proper modal semantics: labelled title, initial focus,
keyboard navigation, predictable Escape behavior, focus restoration, and no
stacking with a Dataset Replacement Dialog. Button labels must describe UI
language, not implementation terms such as `locale` or `fragment`.

Escape and backdrop dismissal mean continuing in the saved application
language. They leave the persisted preference unchanged and do not cancel an
otherwise valid Dataset Handoff. Initial focus must be on the saved-language
action.

During a locale conflict, the application background and the Conflict Dialog
must remain in the persisted saved locale until the recipient explicitly
chooses the requested-language action. The requested locale must not be
applied speculatively to the background or other presentation while the choice
is pending. Choosing the requested-language action changes the current
`effectiveLocale` at that point; choosing the saved-language action, Escape, or
backdrop dismissal continues in the saved locale. This is an application
presentation choice only and does not select Dataset language or alter Dataset
acquisition.

Repeated reload behavior is intentionally unresolved until experiment results
are available. The smallest initial implementation candidate is to keep the
request in the URL and show the conflict again on a fresh reload. This is
deterministic and avoids session identifiers or a URL state machine. If that
repetition is unacceptable, a short-lived `sessionStorage` resolution can be
evaluated as a separate experiment; it must never become persisted preference.

## Timeline and Workspace controls

A persistent locale control is required on both editing surfaces for the
bounded design:

* NarrativeLine Home keeps its current footer control, and Timeline should gain
  a bounded control in its existing screen header/action area.
* LiaisonScape Home keeps its current footer control, and Workspace should gain
  a bounded control in its existing header/action area.

No global settings framework or navigation redesign is needed. The control
must work on narrow/touch layouts and must not be hover-only.

The preferred cross-screen alignment candidate is to make the language control
available in the same general location, interaction model, and information
hierarchy across Home and editing screens:

* NarrativeLine Home and Timeline;
* LiaisonScape Home and Workspace; and
* the corresponding Hub application surface where its producer control is
  later completed.

This is a preferred cross-screen alignment candidate, not an accepted
pixel-level placement decision. The existing Home footer controls remain in
place for now. Timeline and Workspace experiments must test desktop, narrow,
touch, and competition with existing actions before final placement or any
move/removal is accepted. Home must not be treated as a permanently special
locale-control surface merely because it currently owns the footer control.

An explicit selector action must:

* change `effectiveLocale` immediately without a page reload;
* preserve the selected Dataset, edits, drafts, graph/layout state, and current
  selection wherever the existing state architecture permits;
* update the origin-scoped persisted preference; and
* replace only the URL `locale` parameter with the selected value using
  `history.replaceState`.

Updating the URL to the selected value is preferred over removing it or leaving
an obsolete request in place. A copied address bar then does not request `ja`
while the visible application is in `en`. This replacement must not add a
Back/Forward entry.

## Cross-application footer direction

Footer alignment is a future independent application checkpoint. The preferred
cross-application direction is to use Hub's current left/right separation as a
basic structural model:

* left: a short descriptor explaining the application;
* right: Credits.

The shared form need not repeat the application name when that would be
redundant, such as `E2R Hub`. Descriptor concepts may describe Hub as an E2R
application ecosystem, NarrativeLine as an E2R timeline editor, and
LiaisonScape as an E2R relationship editor, but final copy is intentionally
undecided. Language selection should not remain a footer-only responsibility;
it is a normal application control available from Home and editing screens.
Consequently, the footer should trend toward the simpler descriptor-and-Credits
role. Existing Home language buttons must not be removed in this checkpoint.

## Startup orchestration and Dataset timing

The current consumers start Handoff processing in a mount effect. NarrativeLine
guards against duplicate startup processing under StrictMode and uses a staged
Dataset Replacement pipeline. LiaisonScape likewise guards startup processing
and has a Dataset Replacement Dialog for modified work.

The provisional orchestration is:

1. Parse `requestedLocale` and `datasetUrl` independently.
2. Resolve locale immediately when there is no explicit conflict.
3. If there is a locale conflict, resolve the locale Dialog before presenting
   Handoff loading or errors.
4. Start exactly one Dataset fetch after locale resolution.
5. Stage and validate the fetched Dataset through the existing Replacement
   Safety pipeline.
6. Show the replacement-safety Dialog only after locale resolution and only
   when current work requires it.

Waiting for the locale choice avoids two modal surfaces, ensures Handoff errors
are rendered in the chosen language, and is easier to reason about. It costs
some fetch latency. Parallel fetching is a possible optimization only after
testing proves that it does not race locale and replacement/error surfaces.

Locale choice must never bypass Dataset validation, staging, pending-work
protection, credentials policy, or the StrictMode single-fetch guard.

## URL, reload, and navigation lifecycle

The target lifecycle is:

* startup reads the URL request once;
* locale-only and Dataset-plus-locale links use identical conflict semantics;
* a manual selector changes only `locale` with `replaceState`;
* Dataset acceptance or local/sample/new replacement removes only
  `datasetUrl` and preserves `locale` and unknown parameters;
* locale changes do not create navigation entries;
* Back/Forward continues to represent application navigation, not every locale
  toggle;
* a hard reload re-evaluates the URL request against the persisted preference;
* repeated conflict Dialog behavior remains the experiment decision described
  above.

## Dataset-language independence

All four combinations remain valid:

* Japanese UI + Japanese Dataset;
* Japanese UI + English Dataset;
* English UI + Japanese Dataset;
* English UI + English Dataset.

Conflict resolution cannot swap `datasetUrl`, choose a localized Dataset,
translate Dataset contents, or alter Dataset identity/content. Hub may curate
matching variants for its sample experience only.

## Hub producer implications

After consumers implement the refined contract, Hub should eventually include
an explicit locale request in Direct Handoff links:

```text
English Hub: #datasetUrl=<EN>&locale=en
Japanese Hub: #datasetUrl=<JA>&locale=ja
```

This makes Hub's presentation intent explicit while leaving conflict handling
to the receiving application. Hub must not inspect or guess recipient storage.
Commit `0d19221` remains unchanged until a later runtime bounded work item.

## Third-party producer semantics

SNS, blogs, QR codes, documentation, Dataset catalogs, and static sites may use
the same compact URL. A producer should include `locale` only when it has a
deliberate presentation-language request. Omitting it delegates to the
recipient's saved preference, browser fallback, and default.

## Shared semantic test matrix

Both consumers should share tests for:

* all ten URL/saved/browser source combinations;
* empty, unsupported, duplicate, and malformed locale values;
* Dataset-only, locale-only, and combined fragments;
* all four independent UI/Dataset language combinations;
* Dialog only for differing valid explicit preferences;
* matching preference and browser-only mismatch without Dialog;
* temporary Dialog choice without persistence mutation;
* selector changes from Home and Timeline/Workspace;
* URL synchronization and no extra history entry;
* selected Dataset, drafts, edits, graph/layout, and detail state preservation;
* reload, Back, Forward, Home/editor transitions, and Dataset replacement;
* locale conflict with clean, modified, and pending-work states;
* fetch failure rendered in the resolved locale; and
* StrictMode causing no second Dataset fetch.

## Interim Experiment 1 manual evidence — acceptance in progress

The following browser observations are interim evidence for NarrativeLine's
serial `Conflict before Dataset fetch` baseline. They are not final Experiment
1 acceptance and do not establish a workspace-wide UI or React rule.

### Startup-only behavior

Changing the locale and Dataset Handoff fragment in an already-open document
did not display a Conflict Dialog. Opening the same URL in a new tab and doing
a hard reload both displayed the Dialog. This is consistent with the
startup-only lifecycle.

### Saved English, requested Japanese, valid Handoff

With `narrativeline.language = en`, `locale=ja`, and a valid Dataset Handoff:

* the background UI and Conflict Dialog were English;
* no Dataset request to `raw.githubusercontent.com` occurred while the Dialog
  was waiting; and
* both saved-language and requested-language actions were exercised.

Choosing the requested language changed the UI to Japanese, opened the Dataset
with exactly one fetch, and left `narrativeline.language = en`. Choosing the
saved language after the initial observed failure and its fix kept the UI
English, opened the Dataset, and left the persisted value `en`. Escape and
backdrop dismissal followed the saved-language path.

The initial saved-language failure is retained as useful experiment evidence:
clearing the conflict marker allowed a later effect to reapply the requested
locale. The implementation now separates `unresolved`, `saved`, and
`requested` startup resolution states; the corrected saved-language retest
passed.

### Additional completed manual cases

* With saved `ja` and requested `en`, the reverse conflict path passed; choosing
  English changed only the effective UI locale and left `ja` persisted.
* With saved `ja` and requested `ja`, no Conflict Dialog appeared, the UI was
  Japanese, and the Dataset opened. The documented evidence uses the case where
  `narrativeline.language = ja` was explicitly confirmed after the storage-
  inspection procedure was corrected.
* With no persisted locale and requested `ja`, the UI opened in Japanese and
  `localStorage.getItem("narrativeline.language")` remained `null`.

### Manual cases not yet completed

The following remain unverified manual cases and must not be described as
passed: invalid locale variants, effective-locale Handoff failure messages,
locale-only links, repeated-reload UX, locale conflicts combined with
modified/pending work, Timeline locale controls, narrow/touch layouts, and
parallel-fetch comparison. Experiment 1 remains
`INTERIM / MANUAL ACCEPTANCE IN PROGRESS`.

## Experiments required before runtime implementation

The following questions are interaction-sensitive and should be prototyped in
the smallest possible bounded experiments:

| Experiment | Hypothesis | Observation criteria | Rollback boundary |
| --- | --- | --- | --- |
| Conflict before fetch | A short choice before acquisition is understandable and avoids modal races | completion rate, confusion, loading/error language | locale flow only |
| Parallel fetch | Fetch latency benefit is worth concurrent surface complexity | no double fetch, no stacked Dialogs, correct errors | orchestration only |
| Temporary override | Keeping saved preference unchanged is predictable | reload annoyance, shared-link clarity | preference/session handling only |
| NarrativeLine Timeline control | Existing Timeline header can host a selector without layout or draft loss | desktop/narrow/touch, selected state, drafts | Timeline control only |
| LiaisonScape Workspace control | Existing Workspace header can host a selector without graph disruption | desktop/narrow/touch, graph/layout/detail state | Workspace control only |
| Reload suppression | Repeated conflict Dialog is acceptable, or minimal session suppression is needed | repeated open/reload behavior | conflict-resolution state only |

No experiment in this checkpoint changes production runtime. The first runtime
implementation should not begin until the ordering, temporary-choice reload
behavior, and two editor control placements have bounded results.

The current implementation sequence is:

1. Cross-App Locale Recipient-Preference experiments;
2. NarrativeLine locale consumer and Timeline control experiment;
3. LiaisonScape locale consumer and Workspace control experiment;
4. Cross-App Footer / Locale Control Alignment as a separate bounded
   checkpoint; and
5. Hub startup locale producer completion.

This sequence does not change the current roadmap priority or authorize runtime
work in this documentation checkpoint.

## Non-goals and preservation rules

This refinement does not change Dataset Handoff semantics, Dataset files,
Validator, User Guides, roadmap, Hub runtime, NarrativeLine runtime, or
LiaisonScape runtime. It does not introduce a universal deep-link framework,
cross-origin storage, a `forceLocale` parameter, or arbitrary BCP 47 values.

Preserve the untracked file
`research/exploratory/anonymous-dataset-sharing.md` untouched and untracked.
Do not rollback or amend Hub commit `0d19221`.

## Decision

The recipient-preference model is bounded enough to document, but the fetch
ordering, repeated-conflict behavior, and editor-surface controls require
small empirical validation before runtime implementation. The primary design
model is Model 3 with temporary conflict choices and persistent changes only
through explicit application controls.

Therefore this checkpoint is intentionally not an implementation acceptance.

The following remain experiment questions rather than accepted decisions:

* exact Timeline and Workspace control placement;
* whether Home and editing screens use the same component;
* final icon, text, select, or button form;
* exact narrow/mobile layout;
* final footer descriptor copy and pixel-level footer sizing, spacing, borders,
  or height;
* repeated Conflict Dialog suppression; and
* parallel Dataset fetch.

**CROSS-APP LOCALE RECIPIENT-PREFERENCE DESIGN: EXPERIMENTS REQUIRED BEFORE IMPLEMENTATION**
