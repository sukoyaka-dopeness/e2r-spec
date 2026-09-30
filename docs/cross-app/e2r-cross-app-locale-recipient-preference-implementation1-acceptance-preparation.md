# Cross-App Locale Recipient-Preference Implementation and Acceptance Preparation

Date: 2026-10-01

Status: Local implementation and automated evidence complete; Human Browser Acceptance pending; Cross-App Locale remains OPEN.

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

## Human Browser Acceptance still required

Use the local Hub, NarrativeLine, and LiaisonScape candidates to verify visual
interaction and true browser lifecycle behavior. Hub currently emits the
public recipient base URLs; for local end-to-end checking, copy the generated
fragment unchanged and open it at the corresponding local recipient origin.
Public-site verification requires a separately authorized publication. The
following items remain **NOT EXECUTED** and must not be reported as PASS:

1. Open locale-only Hub EN and JA application-entry links. Confirm each
   recipient opens the requested UI language, independently of browser and
   saved locale when there is no conflicting explicit preference.
2. With a saved EN preference, open a Hub JA handoff to each recipient. Confirm
   the Conflict Dialog appears before Dataset loading; choose saved and
   requested paths separately. Confirm the EN saved preference remains
   unchanged, the requested path displays JA, and both recipients acquire the
   same Dataset variant Hub selected.
3. Reload the same conflicted URL in the same tab after each temporary choice;
   confirm the same request does not ask again and durable preference remains
   unchanged. Open it in a new independent session and confirm normal startup
   conflict resolution occurs.
4. Exercise explicit locale selection on LiaisonScape Home and Workspace,
   including a loaded Dataset with a selection or draft. Confirm graph/layout,
   selection, Dataset, and in-progress work remain intact; the durable
   preference changes; `locale` is replaced without disturbing `datasetUrl`
   or unrelated fragment values.
5. Use browser Back / Forward across locale-bearing and locale-free entries.
   Confirm traversal leaves current UI and preference unchanged and does not
   re-fetch Handoff. Reload after traversal and confirm normal startup rules
   apply.
6. Check malformed, duplicate, empty, and unsupported locale values alongside
   a valid Dataset Handoff. Confirm the locale instruction is ignored while
   independent Dataset acquisition proceeds.
7. Check Conflict Dialog focus, Tab containment, Escape/backdrop resolution,
   responsive EN/JA presentation, and absence of unexpected diagnostics.

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
