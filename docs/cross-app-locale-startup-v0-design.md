# E2R Cross-App Locale Startup Instruction v0

## Current implementation status (2026-08-24)

The historical design and implementation sequence below remain preserved. The
current checkpoint is that NarrativeLine's locale consumer is **ACCEPTED / COMPLETE**
at runtime commit `ded44d6ca093431cc829d0aa47f6524ea789750a`. See the bounded
[NarrativeLine Locale Consumer Acceptance](narrativeline-locale-consumer-acceptance.md)
record. This does not complete Cross-App Locale: LiaisonScape recipient
consumer alignment and Hub startup locale producer work remain pending.

Status: accepted design checkpoint; non-normative application guidance

This document defines a shared startup-locale contract for E2R applications. It
does not modify the E2R Core, Dataset Handoff semantics, or application
runtime. Runtime implementation remains a separate bounded work item.

## Problem

E2R Hub, NarrativeLine, and LiaisonScape have independent locale handling.
NarrativeLine currently restores a persisted `en`/`ja` preference and defaults
to `en`. LiaisonScape restores a persisted preference, otherwise detects a
Japanese browser language and then falls back to `en`. Hub currently keeps its
locale in React state and does not provide URL or persistent startup locale
handling.

The applications therefore do not yet share a way for a static link to request
the recipient application's presentation language. A cross-application
contract is needed before runtime implementations are aligned.

## Motivation and use case

An SNS post, blog, documentation page, or another application may link to an
E2R application and should be able to request a predictable UI language. The
link may also contain a Dataset Handoff. These are independent concerns: a
recipient may want a Japanese UI with an English Dataset, or an English UI with
a Japanese Dataset.

The locale instruction is therefore a general application startup instruction,
not Dataset metadata and not a Dataset selection mechanism.

## Responsibility boundary

The responsibilities are split as follows:

* A producer, including Hub or a third party, constructs a link using this
  contract.
* The target application parses and applies the startup locale to its
  presentation layer.
* The target application independently parses, fetches, validates, and stages
  any `datasetUrl` Handoff according to Dataset Handoff v0.
* The target application owns its local preference and browser-language
  fallback. No application reads another application's storage.

`locale` is not Dataset identity, content, provenance, revision, or Handoff
payload. It must not change the Handoff fetch target, request credentials,
Dataset validation, or Dataset replacement semantics.

## URL contract

The v0 instruction is a fragment parameter named `locale`:

```text
#locale=ja
#datasetUrl=https%3A%2F%2Fexample.com%2Fdataset.json
#datasetUrl=https%3A%2F%2Fexample.com%2Fdataset.json&locale=ja
```

The fragment is used because the existing Handoff contract already uses the
fragment, static hosting does not need a server change, and the fragment is not
sent to the Dataset server. `?locale=ja`, `?lang=ja`, `#lang=ja`, and
application-specific `sample` or `dataset` parameters are not v0 aliases.

Parameter order is not semantically significant. Examples should use
`datasetUrl` followed by `locale` when both are present. Values must be URL
encoded using normal URL parameter encoding.

## Supported locale values and invalid behavior

The v0 supported values are the exact lower-case values:

* `en`
* `ja`

`ja-JP`, arbitrary language tags, empty values, unsupported values, and
duplicate `locale` parameters are invalid v0 locale instructions. An invalid
locale instruction is ignored as a presentation preference. The application
falls back to its normal preference/browser/default resolution and continues
independent Dataset Handoff processing.

Malformed percent-encoding or a value that cannot be decoded to one of the
exact supported values is also treated as an invalid locale instruction. It
must not cause a Dataset fetch or a fatal Handoff error.

This differs intentionally from the existing `datasetUrl` rules: duplicate,
empty, or otherwise invalid `datasetUrl` remains a fatal invalid Handoff result
under Dataset Handoff v0, while locale is an optional presentation instruction.

## Precedence

The recipient-preference refinement in
`docs/cross-app-locale-startup-v0-recipient-preference-design.md` is the
current authority for the narrower case where a valid URL request differs from
a valid persisted explicit recipient preference: that case requires a
temporary Conflict Dialog rather than silently applying URL precedence. This
original precedence remains the accepted checkpoint for cases without that
conflict.

On application startup, the effective locale is resolved in this order:

1. A valid explicit `locale` in the current URL fragment.
2. The application's valid persisted user preference.
3. The application's supported browser-language preference, when available.
4. The application default, `en`.

The explicit URL instruction is a startup/session override. It wins for that
load even when it differs from the saved preference.

## Persistence and manual choice

A URL locale must not overwrite the saved preference automatically. This keeps
an external SNS or documentation link from permanently changing a user's
choice.

An explicit manual locale toggle is a user preference action. It updates the
current UI and persists the selected exact v0 value. It also updates only the
`locale` parameter in the current fragment with `history.replaceState`, without
creating a new history entry. Existing `datasetUrl` and unknown parameters are
preserved. The resulting URL therefore represents the current explicitly
chosen locale while the persisted preference remains available on later loads.

## Startup and runtime lifecycle

The locale instruction is read once during startup. It is not a live remote
configuration channel and does not trigger a network request.

The following lifecycle is the shared target behavior:

* A hard reload with a valid `locale` uses that locale.
* A hard reload without `locale` uses persisted preference, browser preference,
  or `en` in the stated order.
* Invalid locale input falls back without blocking valid Dataset Handoff.
* A manual toggle changes the UI and saved preference, then replaces only the
  locale fragment parameter.
* Accepting a Dataset Handoff retains `locale` and removes no unrelated
  fragment parameters.
* Loading a local Dataset, sample Dataset, or new Dataset removes only
  `datasetUrl`; `locale` remains in the fragment.
* A later external hash mutation is not a live locale-switching API. Runtime
  implementations need not add a `hashchange` locale listener.
* Existing application navigation and Back/Forward behavior remain application
  owned; replacing the locale parameter does not add navigation history.

## Independence from Dataset Handoff

All four combinations are valid:

| UI locale | Dataset locale | Result |
| --- | --- | --- |
| `ja` | Japanese | Japanese UI with Japanese Dataset |
| `ja` | English | Japanese UI with English Dataset |
| `en` | Japanese | English UI with Japanese Dataset |
| `en` | English | English UI with English Dataset |

Hub's curated sample links may select matching variants for usability, but that
is a producer choice rather than a semantic requirement. `locale` alone never
selects a Dataset, and `datasetUrl` never selects the application UI locale.

The existing Handoff fragment contract remains:

```text
#datasetUrl=<percent-encoded absolute HTTPS URL>
```

Existing security requirements remain unchanged: the Dataset URL is validated
as an absolute HTTPS URL, credentials are rejected, and Handoff requests use
the existing credential policy.

## Fragment preservation

Locale support must follow the existing narrow fragment lifecycle. Parsing may
read `locale` and `datasetUrl` independently, while unknown parameters are
preserved. Dataset acceptance removes only `datasetUrl`. Local/sample/new
replacement also removes only `datasetUrl`. Manual locale choice replaces only
`locale` and preserves `datasetUrl` and unknown parameters.

Successful Handoff acceptance does not remove `locale`. This allows a link to
remain understandable and makes the locale instruction independent of whether
the Dataset is accepted, retained, or later replaced.

## Cross-application parity

NarrativeLine and LiaisonScape must implement the same v0 parameter name,
exact values, precedence, invalid-input behavior, persistence rule, and
fragment-preservation behavior. Hub should use the same contract when it
constructs links, but Hub is not required to share application storage or
runtime locale state with either recipient.

The current differences in browser detection and Hub state are implementation
gaps to resolve during runtime work, not alternative public URL semantics.

## Hub and third-party producers

Hub may produce a locale-only link or combine locale with its existing Handoff
link. For example:

```text
https://narrativeline.example/#locale=ja
https://narrativeline.example/#datasetUrl=https%3A%2F%2Fexample.com%2Fdataset.json&locale=ja
```

Third-party producers may construct the same static links without access to
application storage. They must use exact v0 values and must not assume that a
Dataset's language determines the UI locale. A producer should omit `locale`
when it has no deliberate presentation-language choice, allowing the target
application's normal fallback to operate.

## Non-goals

This design does not define:

* Dataset language metadata or Dataset translation behavior;
* a universal deep-link or routing framework;
* arbitrary BCP 47 locale negotiation;
* server-side locale redirects or query-parameter handling;
* cross-origin preference synchronization;
* runtime implementation in Hub, NarrativeLine, or LiaisonScape;
* changes to Dataset Handoff security, fetch, validation, or acceptance rules.

## Implementation sequence

Runtime work should proceed as separate bounded checkpoints:

1. Add a small locale-fragment parser and narrow fragment updater to
   NarrativeLine, reusing its existing `URLSearchParams` and preservation
   rules.
2. Add the equivalent parser and updater to LiaisonScape, preserving its
   existing Handoff and history behavior.
3. Add Hub producer support for explicit locale links without changing its
   Dataset Handoff semantics.
4. Align each application's manual toggle and persistence behavior with this
   document.
5. Run each application's focused tests, lint/build gates, and manual shared-
   link acceptance before treating parity as complete.

No step in this design checkpoint changes application runtime.

## Test matrix

Each runtime implementation should cover at least:

| Area | Cases |
| --- | --- |
| URL parsing | locale-only, dataset-only, combined, parameter order, unknown parameters |
| Valid values | exact `en`, exact `ja` |
| Invalid values | empty, unsupported, `ja-JP`, duplicate, malformed encoding |
| Precedence | URL over persisted, persisted over browser, browser over default, default `en` |
| Persistence | URL does not overwrite automatically; manual choice persists |
| Manual toggle | UI changes, locale parameter only is replaced, no history entry is added |
| Handoff lifecycle | accepted Handoff retains locale; local/sample/new removes only datasetUrl |
| Independence | all four UI/Dataset locale combinations |
| Safety | locale never changes Dataset URL, request credentials, or validation result |
| Parity | same observable contract in NarrativeLine and LiaisonScape; Hub links use it |

## Acceptance criteria for runtime implementation

The contract is implementation-ready when:

* both recipient applications accept the same `locale` syntax and values;
* invalid locale input is non-fatal and does not alter Dataset Handoff behavior;
* URL, persistence, browser, and default precedence is covered by tests;
* manual toggles persist and preserve unrelated fragment parameters;
* Dataset acceptance/replacement preserves the locale instruction as specified;
* Hub-generated links and third-party examples use the same syntax; and
* focused application gates and manual shared-link checks pass.

This document is the source-of-truth application design checkpoint for those
future runtime changes. It does not claim that the runtime behavior is already
implemented or publicly deployed.
