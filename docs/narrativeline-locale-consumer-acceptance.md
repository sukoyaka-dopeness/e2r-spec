# NarrativeLine Locale Consumer Acceptance

## Status

**NarrativeLine Locale Consumer: ACCEPTED / COMPLETE**

Runtime checkpoint: `ded44d6ca093431cc829d0aa47f6524ea789750a` — `feat: complete NarrativeLine locale consumer`.

Checkpoint date: 2026-08-24. This records NarrativeLine locale-consumer
readiness, not complete Cross-App Locale, public-release readiness, version
`0.2.0`, or a Dataset/schema version change.

## Accepted startup contract

NarrativeLine implements the recipient-preference model in the
[startup design](cross-app-locale-startup-v0-design.md) and
[recipient-preference design](cross-app-locale-startup-v0-recipient-preference-design.md).
Startup resolves `requestedLocale`, `persistedUserLocale`, `browserLocale`,
and temporary conflict resolution into `effectiveLocale`.

Supported v0 values are exactly `en` and `ja`; invalid requests are non-fatal.
Dataset language/content remains independent. Browser fallback is not
auto-persisted, while explicit selector choice is persisted. The selector
updates only the owned `locale` fragment with `history.replaceState`,
preserving `datasetUrl` and unknown parameters. Runtime arbitrary hash
mutation is not a live locale API, reload starts a new startup resolution, and
Handoff processing remains startup-only.

## Conflict and presentation behavior

A valid requested locale plus a different valid persisted explicit preference
opens a temporary Locale Conflict Dialog. Browser mismatch alone does not.
The choice affects presentation only and is resolved before Handoff
loading/error presentation. Dataset validation and Replacement Safety remain
independent.

The Header/shell control uses target-language presentation: effective English
displays `日本語`, and effective Japanese displays `English`. Home, Timeline,
Event Detail, Entity Detail, Entity Picker, and Entity Create share the
application-level control. `document.documentElement.lang` tracks the
effective language; the Footer does not own locale selection.

Current-locale presentation includes Home and Credits chrome, Handoff and
local-file messages, Dataset title accessible labels, event count, export and
Replacement errors, unnamed Event/Entity fallbacks, CoordinatePanel Space and
feedback/status, and History/date validation. Dataset/user content remains
unchanged, including title values, names, descriptions, IDs, History values,
canonical model values such as `Graph Space`, creator identity, repository
names/URLs, product names, and release/version metadata.

## Credits contract

Credits is a normal application surface: title, labels, acknowledgement prose,
and dismissal presentation follow the UI locale. Creator identity,
product/repository names and URLs, version, and release-date metadata remain
unchanged. NarrativeLine supports Close, Escape, and backdrop dismissal.
LiaisonScape must align the same boundary during its locale-consumer work, and
Hub should be checked against it; neither is claimed aligned here.

## Manual Acceptance

Final EN/JA browser acceptance: **PASS**.

- Shell/locale lifecycle: PASS — `html[lang]`, target-language control,
  fragment synchronization/preservation, and EN → JA → EN browser round trip.
  The startup requested-locale ownership defect was fixed by applying startup
  resolution once; later explicit selection owns runtime presentation.
- Home/Credits/Handoff: PASS — EN/JA chrome, Close, Escape, backdrop,
  successful Handoff, fragment preservation, and representative Japanese error.
  Handoff loading copy was automated but not reliably visually observed because
  bootstrap timing obscured the transient state.
- Timeline/Detail: PASS — localized chrome/count and unnamed fallbacks.
  CoordinatePanel was accepted separately, not claimed as manually exercised
  in this scenario.
- Stale-language regressions: PASS — History validation and Coordinate
  feedback re-present in the current locale without repeating the operation.
- Dataset Replacement/English return: PASS — focus/dismissal and state
  preservation. Replacement export failure is covered by direct integration
  evidence, not a manually forced path.

The Credits backdrop defect was caused by the AppFrame caller omitting
`onBackdropDismiss`; callback wiring was added and passed automated and
real-browser recheck.

## Automated evidence

- Locale presentation integration: **15/15 PASS**
- Full NarrativeLine suite: **131/131 PASS**
- Lint: **PASS**
- Build: **PASS**
- `git diff --check`: **PASS**

Dedicated direct cases were not required for every static fallback surface.
Event Detail unnamed Event and Entity Detail related unnamed Events were
accepted through shared production `copy.unnamedEvent` integration, source
audit of exact `||` / `??` fallback semantics, and focused regression evidence.
This is a checkpoint-specific proportionality decision, not a universal rule.

## Remaining scope

Cross-App Locale remains **NOT COMPLETE**. Next target: LiaisonScape locale
consumer implementation/alignment, followed by Hub startup locale producer
completion. NarrativeLine 600/601px shell geometry, CoordinatePanel breakpoint
geometry, Timeline Home placement, Detail action layout, and the old
CoordinatePanel feedback comment remain non-blocking follow-ups. The `0.2.0`
milestone remains deferred until Cross-App Locale closes across all three
applications.
