# History 2 — User-Facing Authoring Scope / Public Experience Design

Date: 2026-09-19

Status: **DESIGN RESULT / HUMAN SCOPE DECISION REQUIRED**

This is a non-normative, pre-implementation design result. It does not promote
History `2.0.0` from candidate status, change the schema, authorize a writer,
or reopen the accepted `NL-H2-R1` recognition and preservation boundary.

> Historical design checkpoint: the pending-scope language in this document is
> retained as chronology and is superseded for current H2-POSITION-CIRCA status
> by the [bounded scope closure result](../history-2-dataset-wide-h1-to-h2-upgrade-scope-closure-result.md).

The follow-up [H2-POSITION-CIRCA human scope decision preparation](./history-2-position-circa-human-scope-decision-preparation-result.md)
narrows the remaining human decision to approximate Timeline presentation,
explicit upgrade/downgrade boundaries, and declaration cleanup. It remains
**RECOMMENDED FOR ACCEPTANCE / HUMAN APPROVAL REQUIRED** and does not authorize
runtime implementation.

## Executive conclusion

Current NarrativeLine has a safe boundary, not a public History 2 authoring
experience. Stable History `1.0.0` remains editable; exact History `2.0.0`
Candidate, unknown, unsupported, and mixed shapes are read-only and preserved
on safe unrelated workflows.

The smallest coherent candidate for a meaningful public History 2 experience
is:

> one History 2 `position` assertion, with optional position-level
> `approximation: "circa"`, edited through an explicit History 1 to History 2
> upgrade when approximation is selected.

This candidate is called **H2-POSITION-CIRCA** below. It is a proposal for
human decision, not an accepted implementation scope. It is intentionally
smaller than bounded-point, temporal-extent, and multiple-assertion authoring.

The proposal is coherent only if the later implementation also defines a
non-fabricating Timeline label/presentation for `circa`. If that presentation
and ordering boundary is not accepted, the correct outcome is to keep History
2 read-only rather than expose a writer that records a value the Timeline
cannot explain.

## Authority and current facts

The following are facts from the current repositories:

- `extensions/history-extension.md` defines stable History `1.0.0` as temporal
  information about one Core Object, using `extensions.history.time` and
  contiguous Civil Time granularity.
- `extensions/history-extension-2.0-draft.md` defines the candidate under the
  same `history` identifier and exact declaration version `2.0.0`.
- A candidate payload contains `assertions[]`; each assertion has a stable
  local `id` and a type. The candidate defines `position`, `bounded-point`, and
  `temporal-extent` variants.
- Candidate `approximation` is a Temporal Position capability with the value
  `circa`. It is not a fourth temporal shape and does not qualify an entire
  bounded-point or temporal-extent assertion.
- Multiple assertions may coexist and do not select a preferred or winning
  assertion.
- Opening or ordinary editing MUST NOT silently upgrade History `1.0.0` to
  `2.0.0`. The candidate specification describes explicit upgrade for
  History-2-only capabilities.
- History does not own Event-to-Event Relative Time, causality, presentation
  order, Timeline layout, or pixel positions.

Current NarrativeLine source has a narrower runtime contract:

- `HistoryCapabilityService` recognizes exact supported candidate declarations
  and known assertion shapes, but assigns candidate, unknown, unsupported, and
  mixed payloads `read-only` policy.
- `EventDetailScreen` exposes the existing contiguous Year/Month/Day editor
  and optional Hour/Minute/Second editor only for editable Stable History. It
  shows localized read-only guidance for the other shapes while leaving Name,
  Description, and other ordinary Event actions available.
- `EventService` writes only the Stable `history.time` form and refuses
  non-editable History capabilities.
- `SpecificationDeclarationService` can add only declarations for extensions
  it can state exactly. Candidate History is not currently a writer-owned
  exported extension, preventing false `history:1.0.0` or invented candidate
  declarations.
- Accepted `NL-H2-R1` evidence confirms preservation, edit refusal, EN/JA,
  keyboard/focus, narrow layout, and real-browser behavior. This checkpoint
  does not reopen that result.

## Design constraints

These constraints are already established and should govern a later scope
decision:

1. History records an Object's own temporal information. Relative Time remains
   a separate Relation-carried responsibility.
2. Presentation order is not temporal semantics. A Timeline must not create a
   date, midpoint, `temporalOrder`, or Derived Relation merely to draw an item.
3. Recorded assertions are not silently selected, deleted, corrected, or
   rewritten as a winner.
4. A consumer that cannot preserve untouched unknown data must refuse an edit
   rather than claim a lossless round trip.
5. Existing History 1 datasets remain usable. Opening a dataset is never an
   upgrade operation.
6. The first writer should mutate only a narrow, understood assertion and
   preserve unrelated Extension data atomically.
7. User-facing copy should describe temporal concepts, not expose raw schema
   terms unless technical detail is needed to prevent misunderstanding.

## Scope options

### Option A — Single exact `position`

Users could create and edit one exact History 2 position. Stable calendar and
clock fields would be reused, and the result would be a single `position`
assertion with an exact `2.0.0` declaration.

This is technically the smallest writer. It has low UI and acceptance cost and
could establish the assertion/declaration mutation path. However, it gives
users almost no temporal capability that Stable History does not already give
them. It is therefore a migration/editor foundation, not a convincing public
History 2 experience. It should not be advertised as meaningful History 2
support by itself.

### Option B — Single `position` plus position-level `circa`

Users could enter the existing exact Civil Time fields and optionally mark the
Temporal Position as approximate. Exact edits remain simple; selecting
approximation is the explicit H2-only operation.

This is the smallest option that exposes a clearly new History 2 concept while
retaining one assertion, one temporal shape, and the existing calendar/clock
editor conventions. It still requires a Timeline display rule for approximate
positions and explicit upgrade/declaration behavior. It does not support a
range, period, competing claims, or Relative Time.

### Option C — `position` plus `bounded-point`

Users could express that an occurrence happened between an earliest and latest
position. This is useful for uncertain historical dates, but it requires two
position editors, clear “point within bounds” wording, validation of bound
relationships as diagnostics, and a Timeline representation that does not
collapse the interval to a midpoint.

It is a coherent later slice, but a larger one. It must not be implemented as
one generic “date range” control if that wording suggests a duration.

### Option D — Add `temporal-extent`

Users could record a period with separate start/end Temporal Boundaries and
`occurred`, `not-occurred`, or `unknown` occurrence states. This is not merely
bounded-point with two dates: it represents persistence through an extent and
has different boundary semantics.

It needs a distinct interaction model, boundary-level occurrence controls,
unknown-position handling, extent presentation, and diagnostics. It is not a
minimum first authoring slice.

### Option E — Multiple assertions and broader History 2

Users could add and edit multiple independent assertions, possibly combining
positions, bounds, extents, and approximation. This would require explicit
assertion identity, add/remove/reorder behavior, no-winner presentation,
partial-edit refusal rules, and preservation of unsupported siblings.

It is the broadest and most expensive option. The UI must never select the
first array item as authoritative merely because it is easiest to display.

## Recommended minimum coherent slice

Subject to human approval, select **H2-POSITION-CIRCA**:

- one assertion only;
- assertion type `position` only;
- existing contiguous Civil Time fields reused for the position;
- optional position-level `approximation: "circa"`;
- no bounded-point, temporal-extent, multiple assertions, unknown members,
  unknown Features, or unsupported exact versions in the editable surface;
- unsupported or mixed payloads remain read-only in their entirety;
- exact H2 position payloads with known optional `temporalOrder` may be edited
  only if the writer preserves that field unchanged; the UI does not author a
  new `temporalOrder` value;
- an approximate position is displayed as approximate, without inventing a
  day, instant, midpoint, or finer precision;
- Relative Time is neither authored, solved, sorted, nor written back.

This is the minimum proposal, not a final product decision. It becomes a
release-worthy public capability only when its Timeline label and safe ordering
behavior are accepted together with the writer scope.

## User workflow proposal

### New Event

The existing new Event workflow may continue to create an exact Stable History
`1.0.0` value when the user enters only Stable-expressible date/time fields.
The user chooses an explicit approximate-date action, such as an
“Approximate date” control in the History area, to enter the H2 path. The
control must explain the user concept; it must not require the user to edit a
JSON declaration.

### Existing Stable History 1 Event

- Opening does not migrate.
- Exact Year/Month/Day/clock edits continue to save as History `1.0.0`.
- Selecting `circa` is the explicit H2-only request. The application must show
  the upgrade boundary and require an explicit confirmation before atomically
  creating the one `position` assertion, moving known Civil Time fields, adding
  the exact `2.0.0` declaration and `approximation` Feature, and removing
  `time`.
- If the source contains fields that cannot be preserved, the upgrade is
  refused with an understandable explanation.

### Existing supported History 2 Event

A single exact supported `position` assertion can be edited in its supported
fields. Toggling `circa` changes only that assertion's Temporal Position and
the exact declaration Features. The local assertion ID remains unchanged.
Saving is atomic: no partially updated assertion or declaration is exposed.

### Removing temporal information

“Remove date/time” must be an explicit action. For the one-assertion slice it
removes the History 2 assertion and the History declaration only when no other
extension use requires the declaration object. It must not leave an invalid
empty `assertions` array, invent a Stable `time`, or remove unrelated Extension
data. The exact declaration cleanup rule remains a human decision before
implementation.

### Unsupported or partially understood Events

The first writer should refuse the whole History edit when the payload has
multiple assertions, bounded-point, temporal-extent, unknown fields/features,
or an unsupported exact version. Ordinary Name/Description edits may continue
only through a preservation path already proven safe. This is less convenient
than independent assertion editing, but it avoids selecting or destroying
unsupported recorded meaning.

## History 1 compatibility and upgrade boundary

The current specification supports the following compatibility rule:

```text
Stable-expressible edit        -> remain History 1.0.0
History-2-only capability      -> explicit upgrade to History 2.0.0
open/read                      -> no migration
unsupported/unknown payload   -> refuse unsafe History edit
```

The upgrade must be initiated by a visible user action and, because it changes
the extension representation and declaration, should have a clear confirmation
or equivalent explicit commit step. Saving an unchanged H1 Event must never
upgrade it merely because the new editor was opened.

## Assertion, declaration, and preservation responsibilities

The later implementation must separate responsibilities:

- a History capability/policy service determines whether the exact one-position
  slice is editable;
- a narrow History 2 mutation service changes only the selected assertion's
  understood position fields and approximation;
- a declaration service derives the exact used Feature set atomically from the
  resulting payload;
- the Dataset mutation path preserves unrelated Event, Dataset, Relation, and
  sibling Extension members;
- local assertion IDs are stable and are not regenerated from array position;
- unsupported siblings cause refusal, not automatic selection or rewriting;
- Timeline presentation consumes recorded temporal information but does not
  create temporal facts or Relative Time semantics.

This responsibility-based split is incremental. It does not justify a
wholesale `App.tsx` rewrite or a fixed repository-wide file layout.

## Bounded-point, temporal-extent, approximation, and occurrence

`bounded-point` should remain a later separate slice. Its earliest/latest
positions answer where a point-like occurrence could be, not how long it
lasted.

`temporal-extent` should remain later still. Start/end boundaries and
occurrence states (`occurred`, `not-occurred`, `unknown`) must not be collapsed
into a generic range or inferred from the current clock.

Approximation is the only candidate feature small enough to accompany the first
single-position slice, because it modifies a Temporal Position rather than
introducing a second temporal shape. It should be limited to position-level
`circa` in the first slice.

Occurrence editing is deferred with temporal-extent. There is no reason to
expose occurrence controls while the application cannot author or present an
extent coherently.

## Multiple assertions

Multiple assertions are part of the candidate data model but need not be part
of the first public writer. A Dataset containing multiple assertions remains
read-only for History editing. NarrativeLine must show a clear fallback state
and must not silently choose one assertion, flatten them into one date, or
delete the others on Save.

Later multiple-assertion authoring requires a separate decision about list
presentation, assertion identity, unsupported siblings, deletion, and whether
the user is recording competing claims or separate observations. No preferred
assertion concept is currently selected by the specification.

## Timeline presentation implications

The minimum H2-POSITION-CIRCA implementation must establish these rules before
runtime work:

- exact position: normal date placement using the recorded granularity;
- approximate position: visible approximation marker and no invented finer
  date or instant;
- incomplete position: preserve missing granularity rather than display a
  fabricated zero value;
- bounded-point/extent/multiple/unsupported: remain read-only and must not be
  placed through a fabricated midpoint or selected assertion;
- Relative Time: no Timeline order or placement effect.

Whether an approximate year is safe for Timeline ordering, or should be shown
without participating in normal exact ordering, is an explicit human decision
required before implementation. The candidate specification does not by itself
authorize a visual projection rule.

## Guidance copy state model

The current read-only guidance remains appropriate as a fallback for History
forms that the application cannot safely edit. Once H2-POSITION-CIRCA exists,
the UI needs two distinct states:

1. supported single-position H2 editing, describing approximate temporal
   information in user language; and
2. unsupported or partially understood History, explaining that the History
   data is preserved but not editable in this version.

The copy should not call every preserved Candidate payload “supported” merely
because it can be opened. Copy polishing is outside this checkpoint; only the
state distinction is selected for later implementation planning.

## Deferred scope

The following remain outside the recommended first slice:

- bounded-point authoring;
- temporal-extent and Temporal Boundary occurrence authoring;
- multiple-assertion editing or preferred-assertion selection;
- whole-assertion approximation;
- History 1 temporalOrder authoring or generalized partial ordering;
- Relative Time authoring, solving, ordering, diagnostics UI, or Derived
  writeback;
- Temporal Frames, alternative calendars, Time Zone/Instant redesign,
  scientific-scale coordinates, and advanced provenance;
- general Timeline redesign and Cross-App visual polish;
- sample Dataset, User Guide, deployment, and public release work.

## Later implementation checkpoint boundary

If the human scope decision accepts H2-POSITION-CIRCA, the next checkpoint
should be one bounded NarrativeLine implementation slice covering only:

1. the one-position capability policy and narrow mutation service;
2. explicit H1-to-H2 upgrade confirmation and atomic declaration update;
3. position-level `circa` persistence and safe removal;
4. non-fabricating Timeline display/order behavior selected by the human
   decision;
5. unknown/unsupported/multiple-shape refusal and unrelated-data preservation;
6. focused service, declaration, round-trip, H1 compatibility, EN/JA,
   keyboard/focus, narrow, Real Chrome, and human semantic/visual acceptance.

That checkpoint must not include bounded-point, temporal-extent, multiple
assertions, Relative Time, or a general Event Detail redesign.

## Validation and change boundary

This checkpoint is documentation-only. The current source, tests, runtime,
CSS, locale messages, schema, sample Datasets, Validator, LiaisonScape, and
NarrativeLine acceptance artifacts were not changed by this design result.
The existing dirty worktrees were preserved. No new `e2r-ai-knowledge` entry is
created: this is a repository-specific scope proposal, not yet a reusable
workspace decision.
