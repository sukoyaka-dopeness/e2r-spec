# Cross-App Locale Recipient-Preference Implementation and Acceptance Preparation

Date: 2026-10-01

Status: Local implementation and automated evidence complete; Human Browser
Acceptance in progress; LiaisonScape action-copy retest pending; Cross-App
Locale remains OPEN.

## Scope and decision

The Human decision adopted NarrativeLine's implemented recipient behavior as
the shared contract. A single exact `#locale=en|ja` is a startup request for
the recipient UI and is independent from Dataset language and `datasetUrl`.
When a valid request differs from a valid saved explicit preference, the
recipient asks before starting Dataset Handoff. Either choice is temporary for
that request and is retained in the current tab's session storage so a reload
does not repeat the same conflict. It does not rewrite the durable preference.
Only an explicit locale selector changes the durable app preference and the
owned `locale` fragment. Browser fallback is not persisted. A valid legacy
`liaisonscape.locale` value is an existing explicit preference.

Back / Forward does not reinterpret a historical fragment locale as a live
request. It does not update effective locale or preference, rewrite the URL,
reopen Conflict, or restart Handoff. Reload is a new startup. The decision
preserves the boundary between UI locale and Dataset content/variant.

## Repository implementation status

| Repository | Baseline | Current implementation |
| --- | --- | --- |
| NarrativeLine | `eb583720df89797a1acf682b5cea747bc25e0cc6` | Accepted reference consumer, including browser fallback, temporary same-session conflict resolution, explicit selector persistence/fragment synchronization, Back / Forward boundary, and Handoff-before-fetch ordering. No runtime changes in this checkpoint. |
| LiaisonScape | `75400c65b64938aee5c74efa8bd772bb6f1851ea` | Consumer added in the local working tree. It parses strict single `locale=en|ja`, honors valid legacy `liaisonscape.locale`, uses browser fallback without persistence, prompts only for request-vs-saved conflicts, retains temporary resolution in `sessionStorage`, gates startup Handoff until resolution, and updates preference plus only the owned locale fragment from the explicit Header selector. Existing Dataset Handoff parser, Replacement Safety, and one-shot startup guard remain in use. |
| E2R Hub | `abebfd20e3ae754f6faa019976a035ec5ab6ddec` | Local producer change adds the current Hub locale to both application-entry links and all Dataset Handoff links. Dataset variant selection is unchanged and independent. Hub does not read recipient storage. |

No Dataset, Core, Extension, schema, Validator, or NarrativeLine runtime
content was changed. LiaisonScape's accepted application architecture remains
in place: startup Conflict gates the existing acquisition path, while manual
locale changes affect only locale state, app preference, and fragment.

## Automated evidence

NarrativeLine's existing accepted implementation and tests were inspected as
the contract reference; that repository was not changed.

LiaisonScape automated coverage includes strict locale parsing (valid,
unsupported, duplicate, empty, malformed), explicit legacy preference,
browser fallback, conflict precedence, same-session reload resolution,
temporary-vs-durable storage, fragment preservation, Conflict-before-Handoff,
exactly-once Handoff after choice, and browser fallback/explicit-selector
integration. Existing targeted Relation Handoff coverage now expects the
requested Japanese UI for `#locale=ja`; the Dataset target remains unchanged.

Hub production UI integration verifies `locale=en` on EN application and
Dataset links, `locale=ja` after choosing Japanese, both recipient application
links, and independence of the selected EN/JA Dataset URLs.

Validation results:

- LiaisonScape: `npm test`, `npm run lint`, and `npm run build` — PASS.
- Hub: `npm test` (2/2), `npm run lint`, and `npm run build` — PASS.
- E2R-SPEC: `npm run validate` — PASS.

The jsdom integration environment emits existing React `attachEvent` /
`detachEvent` compatibility traces during focus/input events; these do not
cause test failures. This checkpoint does not treat those harness traces as
browser evidence.

## Human Browser evidence observed before copy correction — 2026-10-01

The Human reported the following real-browser results for the local candidates
used in this acceptance cycle: Hub `59015a29a4cd208d91d8a2d72b997b3fd6391811`,
NarrativeLine `eb583720df89797a1acf682b5cea747bc25e0cc6`, and LiaisonScape
`0d60340c2faf954742920404c7647c8ce72dab7b`. These results describe behavior
before the bounded LiaisonScape copy correction below; they do not certify the
corrected copy.

- Normal EN/JA startup passed.
- NarrativeLine saved-EN / requested-JA conflict passed: the background and
  dialog remained EN; the saved choice acquired the Dataset in EN and kept
  durable preference `en`; the requested choice acquired it in JA while
  retaining durable `en`; same-tab reload retained the temporary JA choice
  without reopening Conflict; a new independent session reopened Conflict.
- LiaisonScape saved-EN / requested-JA conflict behavior passed: the
  background/dialog were EN and initial focus was on the saved choice. Both
  choices acquired the Dataset in their selected UI language while durable
  preference stayed `en`; same-tab reload retained temporary JA without
  Conflict; a new independent session reopened Conflict. Escape and backdrop
  dismissal followed the saved-EN path, acquired the Dataset, and retained
  durable `en`.
- On a loaded LiaisonScape Dataset, changing an Entity selection and making an
  unsaved position change before explicitly selecting JA then EN retained the
  Dataset, graph position, selection, and pending state. The explicit choice
  set `liaisonscape.locale=en` and URL `locale=en` while retaining
  `datasetUrl`. Browser Back / Forward to historical `locale=ja` kept UI EN,
  raised no Conflict, retained the Dataset, and did not reinterpret the old
  fragment; reload after Back followed startup rules and showed Conflict.
- The Human observed that LiaisonScape's Conflict action labels differed from
  NarrativeLine. The Human decided to adopt NarrativeLine's current EN/JA
  labels exactly. That copy-only correction is recorded below; Human retest is
  still pending.

LiaisonScape local commit
`b93e9762ca2baa7e29d0dac4b99bb27970f4b618` changes only Conflict action copy
and its target-language `lang` attributes: saved action `Continue in English` /
`日本語で続ける`; requested action `Show in English` / `日本語で表示`. The
backdrop action's accessible name follows the saved action label. Its callback,
initial focus, Escape/backdrop resolution, locale resolution, persistence,
session handling, URL state, and Handoff ordering are unchanged. NarrativeLine,
Hub, and Dataset/specification content were not changed.

These observations do not establish unreported cases such as malformed locale
values with an active Handoff, all responsive sizes, or full Tab containment.
No such cases are inferred as passed.

Copy follow-up automated evidence on LiaisonScape
`b93e9762ca2baa7e29d0dac4b99bb27970f4b618`:

- `node --experimental-strip-types --test tests/locale-conflict-dialog.test.ts` — PASS.
- `npm test` — 656/656 PASS, including the new EN/JA copy test.
- `npm run lint` — PASS.
- `npm run build` — PASS.

The full test run emitted existing jsdom/React `attachEvent` / `detachEvent`
compatibility traces during integration tests; they did not fail tests. The
local LiaisonScape dev server remained listening on `127.0.0.1:5176` after
validation.

## Human Browser Acceptance: retest and remaining coverage

### Minimum retest after copy correction

Using the corrected LiaisonScape local candidate, reopen a saved-EN /
requested-JA Conflict and verify the action labels exactly match NarrativeLine:
`Continue in English` and `日本語で表示`. Verify the Japanese-background
counterpart uses `日本語で続ける` and `Show in English`. Confirm the labels do
not expose saved-preference or link-request mechanics. This retest is not yet
performed and must not be marked PASS until the Human reports it.

### Other acceptance coverage still outstanding

Use the local Hub, NarrativeLine, and LiaisonScape candidates to finish visual
interaction and true browser lifecycle checks. Hub currently emits the public
recipient base URLs; for local end-to-end checking, copy the generated
fragment unchanged and open it at the corresponding local recipient origin.
Public-site verification requires a separately authorized publication. The
following items remain **NOT EXECUTED or only partially covered** and must not
be reported as fully PASS:

1. Locale-only Hub EN/JA application-entry behavior without a conflicting
   saved preference was not reported and remains unverified.
2. Dataset-variant identity parity across both recipients was not reported;
   the reported acquisition results do not establish which EN/JA variant each
   received. Conflict-before-Handoff and both choices were observed, but the
   corrected LiaisonScape copy requires the minimum retest above.
3. LiaisonScape explicit locale selection and preservation of a loaded
   Dataset, graph position, selection, and pending state were observed. Home
   entry and other draft forms were not reported.
4. LiaisonScape Back / Forward and reload behavior were observed as detailed
   above. Equivalent NarrativeLine traversal coverage was not reported.
5. Malformed, duplicate, empty, and unsupported locale values alongside a
   valid Dataset Handoff remain unverified in a real browser.
6. Initial saved-choice focus and Escape/backdrop behavior were observed for
   LiaisonScape. Full Tab containment, responsive EN/JA presentation, and
   absence of unexpected diagnostics across the complete flow remain
   unverified.

No Cross-App Locale overall closure is claimed until this Human Browser
Acceptance is completed and recorded. Cross-App live interoperability and all
application `0.2.0` publication closures remain separate and closed.

## Working-state and publication boundary

The pre-existing E2R-SPEC ParameterPlotter Roadmap hunk, ParameterPlotter
Research changes, Session 0094 restoration, untracked `work/`, and stash are
outside this checkpoint and must remain untouched. LiaisonScape's pre-existing
untracked `.tmp-*` files and `experimental/product-evaluation-seam/spacing-inspection2/`
remain outside the checkpoint. No public write, deployment, tag, or release
is authorized or performed here.
