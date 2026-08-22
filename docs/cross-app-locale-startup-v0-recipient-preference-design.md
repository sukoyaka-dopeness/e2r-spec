# E2R Cross-App Locale Startup v0 — Recipient Preference Design

Status: Design refinement / experiment plan

This document refines the accepted design checkpoint in
`docs/cross-app-locale-startup-v0-design.md` (commit `f681327`). The original
checkpoint remains historical and accepted. This document does not rewrite it,
and it does not implement runtime behavior.

The refinement addresses one unresolved question: how a shared link can express
the sender's presentation-language intent without silently overriding an
explicit language preference already chosen by the recipient.

## Audit basis

The audit covered the current source, tests, Handoff services, navigation, and
public deployment references for Hub, NarrativeLine, and LiaisonScape.

The currently referenced GitHub Pages origins are:

* Hub: `https://sukoyaka-dopeness.github.io/e2r-hub/`
* NarrativeLine: `https://sukoyaka-dopeness.github.io/e2r-narrative-line/`
* LiaisonScape: `https://sukoyaka-dopeness.github.io/e2r-liaison-scape/`

These are distinct origins. Their browser `localStorage` areas are therefore
not shared. Hub cannot inspect either recipient application's saved locale and
must not attempt to do so. The deployment URLs are source/documentation
evidence; this checkpoint does not perform a live deployment smoke test.

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
* storage is origin-scoped and is not shared with Hub or NarrativeLine;
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

The Dialog must use proper modal semantics: labelled title, initial focus,
keyboard navigation, predictable Escape behavior, focus restoration, and no
stacking with a Dataset Replacement Dialog. Button labels must describe UI
language, not implementation terms such as `locale` or `fragment`.

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

**CROSS-APP LOCALE RECIPIENT-PREFERENCE DESIGN: EXPERIMENTS REQUIRED BEFORE IMPLEMENTATION**
