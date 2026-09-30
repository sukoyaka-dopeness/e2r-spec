# Cross-App Locale Recipient-Preference Implementation and Acceptance Preparation

Date: 2026-10-01

Status: Implementation, automated evidence, and Human Browser Acceptance complete; Cross-App Locale CLOSED 2026-10-01.

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
| LiaisonScape | `b93e9762ca2baa7e29d0dac4b99bb27970f4b618` | Current local candidate. It parses strict single `locale=en|ja`, honors valid legacy `liaisonscape.locale`, uses browser fallback without persistence, prompts only for request-vs-saved conflicts, retains temporary resolution in `sessionStorage`, gates startup Handoff until resolution, and updates preference plus only the owned locale fragment from the explicit Header selector. Existing Dataset Handoff parser, Replacement Safety, and one-shot startup guard remain in use. |
| E2R Hub | `d355732957f6f0b9bbfe0d33e5f67ebc5fe8d4ee` | Current local candidate. It adds the current Hub locale to both application-entry links and all Dataset Handoff links, and synchronizes `document.documentElement.lang` with the same React locale state. Dataset variant selection is independent. Hub does not read recipient storage. |

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
  labels exactly. That copy-only correction is recorded below. The retest status at the time
  of this original report is superseded by the Human-reported PASS recorded
  in the current acceptance section.

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

## Cross-App Locale Human Browser Acceptance and closure - 2026-10-01

The Human-reported and Codex-controlled evidence below completes the current
recipient-preference contract. Human and controlled-browser observations are
identified separately. No new locale precedence, persistence, URL, Dataset, or
interaction rule was selected in this closure.

### Human Browser evidence

- The Human reports the LiaisonScape root-language check PASS on candidate
  `b93e9762ca2baa7e29d0dac4b99bb27970f4b618`: Japanese UI produced
  `document.documentElement.lang === "ja"`, and English UI produced
  `document.documentElement.lang === "en"`.
- The Human reports the post-copy-fix LiaisonScape Conflict action-copy retest
  PASS in both saved-EN/requested-JA and saved-JA/requested-EN directions.
- The Human-reported startup, request-vs-saved choice, temporary resolution,
  reload/new-session, LiaisonScape selection/unsaved-position preservation,
  Back/Forward/reload, and Escape/backdrop observations remain recorded in the
  dated evidence section above. NarrativeLine's accepted Back/Forward browser
  evidence remains in its dedicated Locale Consumer Acceptance record.

### Hub correction

Hub candidate `d355732957f6f0b9bbfe0d33e5f67ebc5fe8d4ee` adds an effect that
sets the root document `lang` from the existing effective React `locale`
state. It adds no persistence, browser fallback, recipient-storage reads, or
producer URL changes. Hub locale selection, translated content, recipient-link
locale, and independent Dataset-variant selection remain unchanged. The
regression test checks root `lang` at initial EN render and after selecting
JA.

### Codex-controlled real-browser evidence

An isolated Edge profile connected over loopback CDP was used against current
local candidates: Hub `d355732957f6f0b9bbfe0d33e5f67ebc5fe8d4ee`, NarrativeLine
`eb583720df89797a1acf682b5cea747bc25e0cc6`, and LiaisonScape
`b93e9762ca2baa7e29d0dac4b99bb27970f4b618`. For local recipient tests,
only the recipient origin was replaced; Hub-generated fragment data was
retained except for the locale parameter in the invalid-locale test cases.

- Hub was switched EN -> JA -> EN. At each state, root `lang` matched the
  displayed locale. Cedar recipient links contained the matching `locale`
  request and matching EN/JA Dataset variant.
- Five invalid locale inputs (unsupported `fr`, empty, unsupported `ja-JP`,
  duplicate, malformed percent encoding) were combined with a valid Hub-
  generated EN Cedar `datasetUrl` for each recipient, with durable preference
  EN. All ten recipient/input cases ignored only the locale instruction,
  displayed EN without Conflict or alert, retained preference EN and the exact
  Dataset URL fragment, and fetched the expected EN Dataset exactly once.
  Console/page errors were absent.
- On an already loaded EN Cedar Dataset, the explicit selector changed each
  recipient to JA. NarrativeLine's serialized
  `narrativeline.lastDataset` was byte-for-byte unchanged. LiaisonScape's
  Dataset title and full set of visible SVG text labels were unchanged. In
  both apps the owned fragment became `locale=ja` while preserving
  `datasetUrl`; the single expected Cedar Dataset request remained the only
  request after switching. No console/page error was observed.
- Hub's EN/JA root-language regression check passed in the production App
  integration test and in the controlled browser. No runtime alert, console
  error, or page error was observed in the controlled flows.

### Validation and status

- Hub: `npm.cmd test` (2/2 PASS), `npm.cmd run lint` (PASS), and
  `npm.cmd run build` (PASS).
- E2R-SPEC: `npm run validate` and the final documentation diff checks PASS.
- The current Cross-App Locale contract and the recorded Human Browser
  evidence cover requested locale, saved recipient preference, conflict and
  temporary choice, explicit selector persistence, fragment ownership,
  Back/Forward and reload, Dataset-language independence, Hub production,
  locale accessibility state, and the remaining invalid-locale/Handoff and
  no-refetch checks. No further Human judgment or product decision is pending.

**Cross-App Locale is CLOSED as of 2026-10-01 for the current local candidates.**
This closure does not publish or deploy them. Cross-App live interoperability
and each application `0.2.0` publication closure remain separate and closed.

## Working-state and publication boundary

The pre-existing E2R-SPEC ParameterPlotter Roadmap hunk, ParameterPlotter
Research changes, Session 0094 restoration, untracked `work/`, and stash are
outside this checkpoint and must remain untouched. LiaisonScape's pre-existing
untracked `.tmp-*` files and `experimental/product-evaluation-seam/spacing-inspection2/`
remain outside the checkpoint. No public write, deployment, tag, or release
is authorized or performed here.
