# Status

**FORMALLY ACCEPTED / CURRENT SOURCE REVISION**.

This record accepts the bounded NarrativeLine Event identity presentation at
local runtime HEAD `4f066d5`. The accepted surfaces are Timeline and Entity
Detail Related Events. The acceptance does not close the roadmap workstream;
`docs/roadmap.md` remains unchanged and remains the current planning
authority.

# Accepted runtime

The accepted runtime is the local NarrativeLine working tree at
`4f066d5 feat: disambiguate Event identity`, served by the local Vite
development server. No runtime, CSS, test, fixture, message, or package file
was changed during this acceptance checkpoint.

# Audit and design lineage

The implementation follows the Event identity audit at e2r-spec commit
`221a995` and the implementation design at e2r-spec commit `41f1021`.
The accepted rule is candidate-local **primary name + conditional existing
chronology + collision-extending short ID**. Full Event IDs remain canonical
operation identity. `temporalOrder`, precision labels, and Dataset-wide
uniqueness are excluded from presentation identity.

The current roadmap and history were reviewed before acceptance. No newer
decision or conflict was found that overturns this bounded implementation.
Relation blocker presentation remains **FORMALLY ACCEPTED / COMPLETE / CLOSED**;
Capability Handoff remains **CLOSED / ACCEPTED**.

# Scope

Accepted scope:

- Timeline Event cards;
- Entity Detail Related Events cards;
- candidate-local duplicate detection;
- existing recorded chronology as the first conditional discriminator;
- collision-safe short-ID fallback only when chronology remains insufficient;
- exact full Event ID preservation for selection and Edit actions; and
- EN/JA, long-name, and narrow-width presentation evidence.

Excluded scope remains unchanged: Event Detail identity redesign, new Event
pickers or search, Core/History/schema changes, `temporalOrder` semantics,
endpoint-separator correction, Relation blocker changes, Capability Handoff
changes, ai-knowledge changes, roadmap changes, push, and deployment.

# Automated baseline

Before browser acceptance, NarrativeLine passed `221/221` tests, lint, build,
and `git diff --check`. The post-browser test run again passed `221/221`
tests; the final lint, build, and diff-check also passed. The known repeated
non-failing test-harness warning that port `24678` was already in use did not
fail any test.

# Browser environment

Formal acceptance used a dedicated real Microsoft Edge instance:

- Edge `151.0.4129.107`;
- local Vite URL `http://127.0.0.1:4173/e2r-narrative-line/`;
- real Chromium page runtime inspected through local CDP;
- normal application controls used for Dataset loading, editing, locale
  switching, selection, navigation, and modal opening; and
- a CDP device-metrics override for the bounded 360px viewport check.

No public deployment was used. The browser-only Dataset edits were confined
to the disposable acceptance browser session and were not written to the
repository or to a fixture.

# Acceptance Dataset/session

The session loaded the existing Berlin Wall history sample through the normal
`Sample Dataset` UI flow. The session used 15 Events and 9 Entities. Event
names and descriptions were changed only in the disposable browser session
to create a controlled duplicate-name pair; no source fixture was edited.

# Candidate Events and Entity

- Event A: canonical ID `travel-announcement`; acceptance name
  `Acceptance Event` (later a long duplicate name); chronology
  `1989-11-09 18:53`; description marker A.
- Event B: canonical ID `ard-report`; acceptance name `Acceptance Event`
  (later the same long duplicate name); chronology `1989-11-09 20:00` for
  distinct-chronology checks and `1989-11-09 18:53` for same-chronology checks;
  description marker B.
- Event C: no third duplicate Event was used in the browser fixture.
- Entity X: canonical ID `gdr`, the existing East Germany/GDR Entity.

# Unique-name baseline

**PASS.** The normal sample Timeline baseline rendered the existing unique
Event names without identity hints or identity clutter. Existing date/time
presentation remained intact.

# Timeline duplicate-name / different-chronology acceptance

**PASS.** With A and B both named `Acceptance Event`, Timeline showed their
existing chronology as `1989-11-09 18:53` and `1989-11-09 20:00` (localized to
`18時53分` and `20時00分` in JA). No redundant
`.timeline-event-identity-hint` was rendered, and no duplicate date row was
introduced.

# Related Events candidate-local acceptance

**PASS.** In the C setup, only A was related to Entity X while same-name B
was outside the Related Events candidate set. A received no identity hint.
The outside B did not create Related Events clutter. In the D setup, both A
and B were related to Entity X and became peers for identity resolution.

# Related Events chronology acceptance

**PASS.** When both related Events had the same primary name but distinct
chronology, Related Events rendered the conditional chronology lines:
`1989-11-09 18:53` and `1989-11-09 20:00` in EN, with the corresponding
localized Japanese presentation. The full Event IDs and navigation behavior
remained unchanged.

# Same-chronology short-ID fallback

**PASS.** When A and B shared both name and chronology, Timeline and Related
Events rendered distinct short-ID hints `travel-a` and `ard-repo`. Chronology
was retained as the first secondary line in Related Events, followed by the
short ID. Unique names and distinct visible chronology did not receive short
IDs.

# Canonical Event navigation

**PASS.** Normal Timeline and Related Events selection, Edit activation, Back
navigation, and the A-to-Entity-X-to-B path remained correct. A and B opened
their own Event Detail records with their own descriptions and chronology.
The visible short IDs were never used as callbacks; automated T4/E5 coverage
also asserts the exact full canonical IDs.

# EN / JA parity

**PASS.** EN and JA showed the same ambiguity decisions for unique,
distinct-chronology, and same-chronology cases. Existing locale-specific
date/time formatting changed as expected (`18h 53m` versus `18時53分`), while
the candidate grouping and short-ID fallback remained the same.

# Precision boundary

**PASS with automated/source boundary.** Existing sample date-only Events
continued to show their recorded year/month/day chronology, and the
acceptance pair showed recorded minute precision. Focused automated/source
coverage verifies preservation of existing formatted chronology, including
year/month/day boundaries, without adding a visible `precision` label or
inventing finer precision.

# temporalOrder exclusion

**PASS with automated/source boundary.** The browser showed no
`temporalOrder` identity text. Focused T6/R10 coverage confirms that differing
`temporalOrder` values do not resolve equal name and chronology identity; the
short-ID fallback remains required. Existing Timeline ordering responsibility
was not changed.

# Blank-name boundary

**PASS with automated/source boundary.** The normal acceptance fixture did
not require destructive or ambiguous blank-name editing. R8/R9 coverage
confirms that nullish fallback, empty/whitespace display behavior, exact
comparison, and no trimming/case folding remain as designed.

# Long-name acceptance

**PASS.** A and B were both changed through normal Event editing to
`Acceptance Event With a Realistically Long Duplicate Name for Browser Review 1989`.
At desktop and narrow width, the primary name remained readable and associated
with its chronology, short-ID hint, and Edit action. No clipping, card
confusion, or horizontal overflow was observed.

# Narrow-width acceptance

**PASS.** At a 360px device-metrics viewport, EN and JA Timeline and Related
Events were checked for both distinct and same chronology. The observed
viewport was `innerWidth=360`, `clientWidth=345`; in every checked state
`scrollWidth` and body scroll width were `345`. Long names wrapped within the
card, identity hints remained separate, and the selected-card Edit control did
not overlap the name.

# Multiple-duplicate boundary

**PASS with automated/source boundary.** A three-candidate duplicate group
was covered by focused resolver evidence with distinct chronology, while the
browser fixture used the bounded two-Event pair. The resolver remains
candidate-local and collision-safe; a three-way same-chronology visual fixture
was not required for this checkpoint.

# Relation blocker regression

**PASS.** The existing Entity deletion blocker was opened and closed without
deleting the Entity or any Relation. The blocker displayed its existing
connection count, Relation Name, Source, and Target identity rows, including
the two acceptance Events with their short-ID suffixes. At the 360px viewport
there was no horizontal overflow. Relation blocker geometry, endpoint
separator, labels, and action behavior were not changed or reopened.

# Keyboard / interaction

**PASS for the accepted interaction boundary.** Timeline and Related Events
cards were selected through normal browser interaction; native Edit, Back,
locale, save, and modal controls remained actionable. The identity hints are
secondary text, not separate action targets. Focusable controls remain native
buttons/inputs, and the focused automated suite covers exact selection/Edit
callbacks and guarded navigation behavior. No new custom keyboard contract was
introduced.

# Mojibake verification

**PASS.** EN and JA browser DOM/text checks found no replacement-character
glyph, new mojibake identity label, raw `temporalOrder`, raw `precision`, or
debug identity text. Existing Japanese sample content remained readable. The
endpoint-separator mojibake was explicitly outside this checkpoint and was
not modified.

# Automated/source-only evidence

The focused implementation evidence passed:

- T1/T2/T3/T4/T5/T6 Timeline behavior;
- E1 candidate-local Related Events, E2/E3 chronology and short IDs, E4
  outside-candidate exclusion, E5 canonical selection, E6 EN/JA parity, and
  E7 chronology formatting;
- R1–R11 resolver behavior, including null fallback, exact comparison,
  collision extension, `temporalOrder` exclusion, and full-ID preservation;
- existing History, navigation, locale, Dataset, and safety tests; and
- full NarrativeLine `221/221` test, lint, build, and diff-check gates.

The resolver remains pure, JSX-free, mutation-free, candidate-local, and
independent of navigation state. No browser-only observation is being used to
change the data model or operation identity.

# Non-blocking observations

No blocking or non-blocking presentation defect was found in the required
matrix. The disposable sample retained unrelated Japanese event names after
the locale switch because the Japanese sample was intentionally loaded; this
did not affect the acceptance pair, identity decisions, or readability.

# Final classification

**A — ACCEPTED.** The bounded Event identity presentation is formally accepted
for local NarrativeLine runtime `4f066d5`.

# Preserved boundaries

- NarrativeLine runtime, CSS, tests, fixtures, messages, and package files
  were not modified during this acceptance checkpoint.
- Event IDs, History semantics, precision, `temporalOrder`, Core, Extension,
  schema, Dataset behavior, and navigation contracts remain unchanged.
- Relation blocker presentation remains **FORMALLY ACCEPTED / COMPLETE /
  CLOSED**.
- Capability Handoff remains **CLOSED / ACCEPTED**.
- `docs/roadmap.md` was not modified and the NL-EVENT-ID1 roadmap workstream
  was not marked CLOSED.
- The protected dirty ai-knowledge playbook was not touched.
- No push or deployment was performed.
