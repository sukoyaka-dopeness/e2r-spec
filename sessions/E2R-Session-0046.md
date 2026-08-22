# E2R Session 0046 - Cross-App Locale and Multilingual Dataset Research Handoff

Date: 2026-08-22

## Scope

This session records the transition from Hub-centered work to the next
public-release workstream: Cross-App Locale Recipient-Preference experiments,
followed by NarrativeLine consumer implementation, LiaisonScape consumer
implementation, and Hub producer completion.

No runtime implementation was performed in this session. No Core or Extension
schema was changed. Dataset files, Validator, User Guides, and application
runtime repositories remain unchanged.

## Accepted locale design checkpoints

The initial Cross-App Locale Startup v0 design remains the accepted baseline:

`docs/cross-app-locale-startup-v0-design.md`

- commit `f681327`;
- exact URL values `en` and `ja`;
- `locale` is an application startup presentation concern, not Dataset
  Handoff semantics;
- locale-only, Dataset-only, and combined fragments remain valid;
- invalid locale input is non-fatal;
- Dataset language and UI locale remain independent; and
- URL locale does not automatically overwrite persisted preference.

The recipient-preference refinement is recorded separately in:

`docs/cross-app-locale-startup-v0-recipient-preference-design.md`

- commit `d7b583a`;
- status: `Design refinement / experiment plan`;
- primary candidate: conflict Dialog only when a valid URL request differs
  from a valid explicit recipient preference;
- browser language alone does not create a conflict;
- temporary conflict choice does not persistently rewrite the saved preference;
- explicit Home/Timeline/Workspace locale controls update the persisted
  preference and synchronize the URL with `history.replaceState`.

The final refinement verdict remains:

`CROSS-APP LOCALE RECIPIENT-PREFERENCE DESIGN: EXPERIMENTS REQUIRED BEFORE IMPLEMENTATION`

The remaining experiments concern Dialog-before-fetch ordering, repeated
conflict behavior after reload, and selector placement/preservation on
NarrativeLine Timeline and LiaisonScape Workspace.

## Current application audit boundary

NarrativeLine currently stores `narrativeline.language` in origin-scoped
`localStorage`, defaults to `en`, and does not consult browser or URL locale.
Its selector is available through the Home footer but not the Timeline footer
path. Handoff startup is guarded against duplicate StrictMode acquisition,
uses the existing `datasetUrl` parser, and enters the existing staged Dataset
Replacement Safety pipeline.

LiaisonScape currently stores `liaisonscape.locale` in origin-scoped
`localStorage`, then falls back to `navigator.language` (`ja*` to `ja`, other
values to `en`). Its Home footer has a locale control; Workspace does not yet
have one. Handoff acquisition, history, replacement safety, and beforeunload
boundaries already exist and must be reused.

Hub currently owns only its own React locale state and cannot inspect recipient
application storage. Its Direct Handoff producer and localized sample variant
selection remain separate from recipient locale resolution.

The referenced public Pages origins are distinct:

- `https://sukoyaka-dopeness.github.io/e2r-hub/`;
- `https://sukoyaka-dopeness.github.io/e2r-narrative-line/`; and
- `https://sukoyaka-dopeness.github.io/e2r-liaison-scape/`.

Cross-origin localStorage sharing is neither available nor intended.

## Public-release priority synchronization

The current priority was synchronized in `docs/roadmap.md` by:

- commit `a28add5`;
- subject `docs: update public-release workstream priority`.

The current order is:

1. Cross-App Locale Recipient-Preference experiments;
2. NarrativeLine locale consumer implementation;
3. LiaisonScape locale consumer implementation;
4. Hub startup locale producer completion;
5. Hub Direct Handoff and localized Sample Gallery local acceptance;
6. Hub residual quality audit and Formal Completion;
7. common favicon for Hub, NarrativeLine, and LiaisonScape;
8. LiaisonScape selectable SVG icons;
9. NarrativeLine display-order reordering;
10. push/deployment readiness;
11. Public Handoff/interoperability evidence; and
12. final pre-public-release audit.

Public Interoperability Evidence / Sample Workflow was not removed. It was
intentionally deferred until the public-facing product state is closer to
final. Dataset language metadata, localized-counterpart architecture,
Dictionary, and Semantic research are not Initial Public Release blockers.

## Dataset language and localized variant research

Exploratory research was recorded in:

`research/exploratory/dataset-language-and-localized-variant-architecture.md`

- commit `36af0ff`;
- subject `research: record Dataset localization architecture questions`;
- status: `Exploratory research / non-normative`.

The research keeps these responsibilities separate:

- application UI locale;
- Dataset content language;
- localized Dataset counterpart relationship;
- Dataset-local Object identity;
- cross-variant alignment evidence;
- Dictionary vocabulary language;
- Semantic identity and meaning;
- presentation language;
- Hub locale; and
- shared-link requested locale.

The current recommendation is that simple Dataset content-language description
may be a Metadata Extension vNext candidate, while counterpart relationships,
translation provenance, field/object language mapping, and structural
alignment may require a separate future localization, lineage, provenance, or
external catalog responsibility. No field name or Extension schema was
adopted.

## Canonical EN/JA sample evidence

Read-only comparison of the current specification examples found:

| Pair | EN Dataset ID | JA Dataset ID | Entity/Event/Relation counts | Shared local Object IDs |
| --- | --- | --- | --- | ---: |
| Apollo 11 | `apollo-11-mission-en-v1` | `apollo-11-mission-ja-v1` | 9/12/66 on both sides | 87 |
| Ashen Crown | `ashen-crown-en-v1` | `ashen-crown-ja-v1` | 10/12/57 on both sides | 79 |
| Titanic | `titanic-final-voyage-en-v1` | `titanic-final-voyage-ja-v1` | 13/18/40 on both sides | 71 |

The evidence supports preserving the current curated-sample convention:
separate Dataset IDs, matching local Object IDs where structural identity is
curated, and preserved structural correspondence. This remains an
authoring/research convention only. Matching Object IDs across arbitrary
Datasets do not establish global identity without an explicit Dataset
relationship.

Names, Dictionary, and Semantic multilingual questions remain exploratory.
Translation does not automatically establish semantic equivalence; future
tooling will need language, provenance, mapping type, and possibly confidence
or status before asserting equivalence.

## Source-pack transition

Because the next room is consumer-oriented, a 25-file source pack was proposed
around:

- locale design checkpoints;
- Dataset Handoff and Replacement Safety;
- NarrativeLine startup/runtime files and tests;
- LiaisonScape startup/runtime files and tests; and
- a small Hub producer slice.

The recommended source pack deliberately excludes old Hub milestone detail,
full Dataset sample bodies, Dictionary/Semantic deep research, favicon work,
and LiaisonScape routing/layout experiments unless a later evidence question
requires them.

## Preserved work and repository state

Hub commit `0d19221` remains intact and was not rolled back. NarrativeLine and
LiaisonScape runtime repositories were not modified. Dataset files, Validator,
User Guides, locale design checkpoints, and the prior untracked research file
remain untouched.

The pre-existing untracked file remains preserved:

`research/exploratory/anonymous-dataset-sharing.md`

No new `ai-knowledge` entry was created. Reusable candidates remain:

1. shared-link requests must not silently overwrite explicit recipient
   application preferences;
2. matching Object IDs are not global identity without an explicit Dataset
   relationship; and
3. Dataset content language and application UI locale are independent.

## Verification and publication

The two design/research commits were independently exact-path staged and
validated:

- `git diff --cached --check`: PASS;
- `npm.cmd run validate`: PASS; and
- `git show --check --stat`: PASS.

Current e2r-spec commits are:

- `36af0ff` `research: record Dataset localization architecture questions`;
- `a28add5` `docs: update public-release workstream priority`;
- `d7b583a` `docs: refine cross-app locale startup preferences`; and
- `f681327` `docs: define cross-app locale startup semantics`.

No push was performed. The e2r-spec branch remains local and ahead of
`origin/main`; Hub `0d19221` also remains local and unpushed.

## Session conclusion

The next bounded workstream is Cross-App Locale Recipient-Preference
experimentation. Dataset multilingual/localized-variant architecture has been
recorded as exploratory research without redefining locale startup semantics,
Dataset Handoff, the Core, or Extension schemas.
