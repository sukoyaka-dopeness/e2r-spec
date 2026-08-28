# Status

**AUDIT COMPLETE / DESIGN EVIDENCE ONLY / IMPLEMENTATION NOT AUTHORIZED**

This audit examines the current NarrativeLine Event identity surfaces at local
runtime `4591f3a`. It does not change NarrativeLine runtime, tests, CSS,
messages, History behavior, sorting, the E2R schema, or the roadmap.

The audit baseline was NarrativeLine `4591f3a` with 197/197 tests passing.
The Relation blocker Presentation remains **FORMALLY ACCEPTED / COMPLETE /
CLOSED**, and Capability Handoff remains **CLOSED / ACCEPTED**.

# Why this audit exists

Event `name` is a short optional human-readable label, not a Dataset-wide
uniqueness guarantee. Two Events can therefore have the same name while
representing different occurrences. The ambiguity can arise from different
dates, different clock values, different recorded precision, equal chronology
with distinct `temporalOrder`, absent chronology, or blank names.

The current roadmap candidate direction is:

1. Event name;
2. visible date/time where useful;
3. meaningful History precision where relevant;
4. History `temporalOrder` only if its responsibility is suitable for the
   surface; and
5. a short Object ID only when human-readable information still cannot
   distinguish the candidates.

This audit tests that direction against actual NarrativeLine source and the
current E2R Core and History authorities. It does not authorize its
implementation.

# Specification boundaries

The E2R Core defines Event as something that happens and defines `name` as an
optional short human-readable label. Core `id` is a non-empty identifier unique
within the Dataset across Entity, Event, and Relation objects; it need not be
globally unique. The Core intentionally does not define user-interface layout,
navigation, or identity-hint presentation.

The History Extension owns interoperable temporal representation. Its `time`
object stores Civil Time with explicit granularity. Missing fields are unknown
and must not be filled in. `timeZone` and `offset` provide additional temporal
context but do not increase Civil Time granularity.

Applications own editing, presentation, and user experience. The application
recommendations support showing only recorded precision, placing dated Events
before undated Events, and hiding raw `temporalOrder` values from ordinary
users. These are application-facing recommendations, not a new Core identity
rule.

The current stable History field is `temporalOrder`. Earlier draft `order` is a
compatibility/migration concern, not an additional current identity field.
No Event identity decision in this audit changes History semantics or promotes
application research into the schema.

# Current Event identity surfaces

The source inventory covered `src/`, `tests/`, Event, History, selection,
navigation, relation/reference, picker, detail, modal, and display-order
terms. The actual surfaces are:

| Surface | Source | User task | Current visible identity | Canonical operation identity |
|---|---|---|---|---|
| Timeline Event list | `src/screens/TimelineScreen.tsx` | Choose which Event to open or edit | Name/fallback with adjacent recorded date and sometimes time | Exact `event.id` passed to `onSelectEvent` / `onEditEvent` |
| Event Detail | `src/screens/EventDetailScreen.tsx` | Inspect or edit the already selected Event | Header name/fallback; editable History fields are visible | `selectedEvent` and exact `event.id` |
| Entity Detail related Events | `src/screens/EntityDetailScreen.tsx` | Choose which related Event to edit | Name/fallback; selected card may show first description line | Exact `event.id` passed to `onSelectEvent` |
| Add Related Entity flow | `src/screens/EntityPickerScreen.tsx` | Choose an Entity for the current Event | Event identity is not repeated; current Event is held by internal `eventId` | Exact `eventId` plus selected Entity ID |
| Event delete/association dialogs | `EventDetailScreen.tsx`, `ModalDialog.tsx` | Confirm an operation on the current Event or association | Generic dialog copy; current Event context remains in the detail surface | Exact `event.id` in the callback |

No dedicated Event Picker component, Event search/reference picker, Event
selection dropdown, or additional Event card/list was found. `EntityPickerScreen`
is an Entity picker, not an Event picker. `App.tsx` provides navigation and
selection state but does not add a human-readable Event identity layer.

# Current chronology presentation

`src/services/HistoryService.ts` is the current chronology boundary.

- `getEventHistoryDate` reads `event.extensions.history.time.year/month/day`.
- `getEventHistoryTime` reads the same time object through `second`.
- `formatEventHistoryDate` emits the recorded numeric form `YYYY`,
  `YYYY-MM`, or `YYYY-MM-DD`; it returns no value when a valid year is absent.
- `formatEventHistoryTime` emits only recorded clock precision as `HH`,
  `HH:MM`, or `HH:MM:SS` when seconds are requested.
- The Timeline adds English `h/m/s` or Japanese locale-specific unit labels
  around the recorded clock fields. The date formatter itself is numeric and
  locale-neutral.
- `timeZone` and `offset` are not currently displayed by the Timeline or
  Event Detail identity presentation.

The Event Detail screen exposes year, month, day, and optional hour, minute,
and second fields. It does not expose a separate `Precision` label. The
omitted-field shape itself communicates the stored precision in the edit form.

The Timeline always shows the date column when a valid year exists and uses
`----/--/--` for an Event without a displayable date. Recorded clock values
are shown adjacent to the date when available; seconds are included when the
card is selected. Thus chronology is nearby on the Timeline, but the amount
of visible chronology changes with selection.

# Object ID boundary

Full `event.id` remains the canonical identity for selection, navigation,
editing, deletion, Relation endpoints, and serialization. It must never be
replaced by a display hint.

NarrativeLine has `src/services/IdentifierService.ts` for generating full
UUID-like Core Object IDs and checking Dataset-wide collisions. It has no
shared Event short-ID presentation helper. `RelationPresentationService.ts`
has a local eight-character collision-extending hint algorithm for Relation
cards, but that implementation is not evidence that Event surfaces should
reuse its geometry or policy.

The workspace `cross-app-object-id-hint-presentation` entry is a Hypothesis,
not an E2R-wide Decision. It records an eight-character candidate convention
from LiaisonScape, while explicitly requiring NarrativeLine evidence before
promotion. This audit therefore treats a short ID as a possible final fallback,
not as a universal length or UI requirement.

# Duplicate-name problem

The current Timeline and related-Event cards render the Event name or a
localized unnamed fallback without comparing names among the visible
candidates. Duplicate names are therefore not currently distinguished by an
identity hint.

On the Timeline, different adjacent dates or clock values may make duplicate
names practically distinguishable, but equal or hidden chronology remains
ambiguous. On Entity Detail, related Events currently show names only, so
duplicate related names remain ambiguous even when their History values differ.

An Event Detail view has already selected one exact Event through `event.id`;
its primary ambiguity question is editing that selected object, not choosing
among peers. It does not need a global ID display merely because duplicate
names exist elsewhere in the Dataset.

# Unique-name case

**Result: no additional identity hint is justified by name uniqueness alone.**

When the Event name is unique in the relevant visible/selectable candidate set,
the name should remain the primary identity. Existing adjacent chronology may
continue to be shown for the Timeline's temporal task, but a date or short ID
should not be appended solely to make a unique name technically stronger.
This avoids clutter and preserves the current human-readable presentation.

# Same-name / different-date case

**Result: the Timeline often has sufficient adjacent chronology; related-Event
cards do not.**

The Timeline date column distinguishes Events such as `Inspection` on
`1969-07-16` and `Inspection` on `1969-07-20` without changing the primary
name. A related-Event card in Entity Detail currently omits that date, so a
conditional date hint would be the smallest useful addition there when the
same-name candidates are both visible.

This is candidate-set and surface dependent. A date hint should not be
duplicated into a Timeline name when the same date is already clearly adjacent.

# Same-name / same-date case

**Result: clock chronology can help when recorded, but is not consistently
visible on every surface.**

The History service and Timeline sort compare hour, minute, and second after
the date fields. The Timeline shows hour/minute when recorded and reveals
seconds on selection. The related-Event cards show neither date nor time.

Two same-name Events on the same date with distinct recorded times can
therefore be ordered and may be distinguishable on the Timeline, but not in
the current related-Event list. A future resolver should use an existing
recorded time hint only where it is not already supplied by adjacent context.
If the visible chronology still collides, the resolver must continue to a
short ID fallback rather than pretending order alone is identity.

# Precision analysis

**Result: existing date formatting communicates recorded precision without a
raw precision label.**

The formatter preserves the field shape:

| Recorded fields | Current date form | Meaningful visible distinction |
|---|---|---|
| `year` | `1969` | Year precision |
| `year`, `month` | `1969-07` | Month precision |
| `year`, `month`, `day` | `1969-07-16` | Day precision |

The Event Detail form similarly leaves finer fields empty rather than inventing
values. A separate `Precision: year/month/day` label would duplicate the
existing representation and is not warranted by current evidence.

The current formatter uses a numeric ISO-like form rather than the roadmap's
illustrative localized prose such as `July 1969`. This audit does not redesign
date formatting or invent new EN/JA copy. If a date hint is later adopted, it
should reuse the accepted existing representation or be introduced as a
separately reviewed formatter decision.

# History order analysis

The current stable field is `extensions.history.time.temporalOrder`, not the
legacy draft `order` field. The History Extension defines `temporalOrder` as
relative temporal order when recorded temporal value and granularity cannot
otherwise distinguish Core Objects. Its integer has no meaning beyond
relative comparison, need not be sequential, and must not reverse known
chronology.

`compareEventsByHistoryDate` uses `temporalOrder` only after valid date/time
fields compare equal, and only when both values are integers and differ. It
then falls back to the exact Core Object IDs. This makes `temporalOrder`
useful for deterministic Timeline ordering, not a self-explanatory label for
users. The Timeline has no visible order number or explanation of its value,
and the Event Detail form does not edit or display it.

**Finding:** raw `temporalOrder` should remain hidden from ordinary Event
identity presentation. It is temporal ordering metadata, not authorial order,
narrative order, or a human-facing occurrence number. Display-order logic must
remain separate from identity resolution and rendering.

# Blank-name fallback

The existing fallback is localized `(Unnamed Event)` through
`getPresentationMessages`. Timeline rendering uses `event.name ?? fallback`;
Event Detail's header uses `event.name || fallback`; the related-Event list
uses `event.name ?? fallback`.

This means a missing name receives the intended fallback, while empty-string
and whitespace-only values are not normalized consistently across surfaces:
an empty string can render blank in the nullish-coalescing paths, and
whitespace is truthy. That is an existing presentation behavior, not a reason
to invent a new fallback in this audit.

For one blank-name Event, the localized fallback is sufficient and no ID is
needed. For multiple blank-name candidates in the same visible/selectable set,
the fallback text collides; a short ID is then the smallest remaining
human-facing discriminator after no useful chronology is available.

# Long-name considerations

Timeline names use a flex content region with `min-width: 0`, overflow hidden,
ellipsis, and no wrapping at ordinary widths. Related-card names use similar
normal-width truncation and switch to wrapping with `overflow-wrap: anywhere`
at narrow widths. Event Detail headers allow names to wrap, while the editable
name field remains an input.

An appended chronology or ID hint can therefore be clipped in the Timeline,
compete with the selected-card Edit control, or increase related-card height
on narrow screens. The audit does not select inline, second-line, metadata-row,
or surface-specific geometry. Any future implementation must preserve the
primary-name hierarchy and test long names separately from the identity
resolution decision.

# Candidate-set ambiguity scope

**Finding: ambiguity should be resolved against the candidates visible or
selectable for the current surface, not blindly against every Event in the
Dataset.**

- Timeline candidates are currently all Dataset Events after Timeline sorting.
- Entity Detail candidates are only the Events related to the selected Entity.
- Event Detail has one already selected Event and does not present a peer
  choice set.
- The Add Related Entity flow selects Entities, so its Event context is a
  single internal `eventId`, not an Event candidate set.

Dataset-wide comparison would add hints to a Timeline Event because of an
unrelated same-name Event that the user cannot see or select in the current
task. Candidate-local comparison avoids that clutter, while still requiring
stable exact IDs internally. The relevant candidate set must be defined by the
surface's actual visibility and selection behavior, not by a global name index
alone.

# EN / JA boundary

Identity semantics can remain locale-independent: Event name, recorded
chronology, and exact full Object ID retain the same meaning in EN and JA.
Visible fallback copy is localized. The current date formatter is numeric and
therefore does not change its field/precision semantics by locale; Timeline
clock unit labels branch by locale.

The audit found no basis for locale-specific ambiguity rules or new localized
identity copy. A future implementation must verify that EN and JA preserve the
same conditional-hint decisions while allowing existing date/time presentation
to remain localized where it already is. It must not encode translated names,
IDs, or precision vocabulary into the Dataset.

# Timeline findings

The Timeline answers: **Which Event should I open, and where does it sit in
the recorded chronology?** It is the strongest current Event identity surface
because it already places name, date, and available time in one card.

Name alone is sufficient for a unique candidate. The date column is useful
context and distinguishes different dates without name mutation. Same-date
different-time cases can be distinguished when the recorded time is rendered,
but selected-card seconds are more visible than unselected seconds. Equal
visible chronology remains ambiguous and should not be resolved by exposing
raw `temporalOrder`.

The Timeline's operation path is exact `event.id`; sorting does not alter the
selected identity. Long names may be ellipsized, and narrow-width behavior
must be considered before appending any hint. A future Timeline renderer may
avoid repeating a date already adjacent to the name while still consuming a
shared ambiguity result.

# Event Detail findings

Event Detail answers: **Which already selected Event am I inspecting or
editing?** The route/state already carries exact `selectedEvent`, and the
screen resolves it through `dataset.events.find(event.id === selectedEvent)`.

The header shows the Event name/fallback. The same screen exposes recorded
History fields for editing and uses the exact `event.id` for save, delete,
Relation changes, and navigation. The delete dialog's generic copy relies on
the surrounding selected detail context and does not need a global technical
ID display.

Additional conditional identity text is normally unnecessary in this single-
object context. If a future task places multiple Events into one Detail-level
control, that control would define its own candidate set and should use the
same hierarchy rather than forcing the detail header to show an ID.

# Event Picker findings

No Event Picker exists in the current NarrativeLine source inventory. The
existing `EntityPickerScreen` is reached from Event Detail to select an Entity
to associate with one current Event. Its `eventId` is an internal operation
anchor; the screen does not offer a list of Events and does not need Event
disambiguation.

The roadmap's Event Picker item is therefore a future surface hypothesis, not
current implementation evidence. A future Event Picker must be audited as a
new surface before any shared rendering rule is applied to it.

# Related/reference surface findings

The actual related-object Event surface is the Related Events list in
`EntityDetailScreen.tsx`. It answers: **Which Event related to this Entity
should I open or edit?** It renders only `event.name` or the unnamed fallback;
when selected, it may show the first description line and an Edit Event
control. It does not render date, time, precision, `temporalOrder`, or an ID.

This surface has a stronger conditional-hint need than Timeline because
chronology is not adjacent. Same-name related Events with different dates or
times remain ambiguous today. Candidate-local chronology hints are therefore
appropriate here, subject to the long-name and narrow-width constraints.

The Event Detail Related Entities list is the inverse relationship surface: it
does not present or choose Events and is outside Event identity resolution.
No search or generic reference picker was found.

# Identity resolution versus rendering responsibility

The evidence supports separating the question **which candidates are
ambiguous?** from **how should this surface render a resolved hint?**

A future application-local resolution step could conceptually determine:

- primary Event name or the existing localized fallback;
- whether the name is duplicated in the surface candidate set;
- an existing recorded date/time hint when it adds information;
- whether visible precision already distinguishes the candidates;
- whether a short ID is still required; and
- the ambiguity result for the exact full IDs.

The Timeline can omit a date hint already visible in its date column. The
related-Event list may need to render the same recorded chronology as a second
line or metadata value. Event Detail usually needs no extra hint. This is
surface rendering, not a reason to create one generalized UI component or to
make all Event surfaces visually identical.

No existing shared Event identity service is present, and this audit does not
create one. A future implementation should first confirm that a small pure
resolution boundary reduces duplication before introducing an abstraction.

# Candidate strategy comparison

| Strategy | Evidence-based result |
|---|---|
| Option A — name only | Appropriate for unique names and current Detail context; unsafe for duplicate related names and equal visible chronology. |
| Option B — conditional date/time hint | Useful for duplicate chronology across dates/times, especially related Events; insufficient when chronology is absent or equal and can duplicate Timeline context. |
| Option C — conditional structured human hints | Best conceptual progression: name, existing recorded chronology/precision, then final short ID. Must keep rendering surface-specific and must not expose raw `temporalOrder`. |
| Option D — short ID early | Technically simple but exposes technical detail before human-readable evidence is exhausted; not preferred. |
| Option E — surface-specific strategy | Required at the rendering level because Timeline, Related Events, and Event Detail answer different questions. It should share only the ambiguity decision, not force identical markup or geometry. |

The options are compatible at different responsibility levels: Option C is the
useful resolution progression, while Option E describes how actual surfaces
should render it. The final classification below names the resulting identity
hierarchy rather than authorizing a component design.

# Short-ID fallback analysis

A short Object ID is justified only after the candidate-local name and
available recorded chronology still collide. This includes duplicate blank or
whitespace fallback names, same-name Events without useful date/time, and
same-name Events whose visible chronology remains equal.

NarrativeLine already uses exact IDs internally and has a local eight-character
collision-extending hint convention for Relation cards. It has no Event hint
helper. The workspace eight-character convention remains a Hypothesis from
LiaisonScape, so this audit does not mandate eight characters for future
Event UI. A future slice must inspect the chosen surface's collision behavior
and choose or reuse a bounded convention without padding, truncating into
collisions, or displaying the full UUID by default.

The hint must remain presentation-only. Option values, callbacks, navigation,
deletion, Relation endpoints, Dataset storage, and serialization must continue
to use the full exact `event.id`.

# Browser evidence

**NOT EXECUTED.** This checkpoint did not require full Formal Acceptance, and
no browser run was needed to answer the source/spec responsibility questions.
The conclusions are based on current source, existing integration coverage,
the current sample Event data, and the accepted Core/History authorities.

The existing automated baseline did exercise Timeline/Event Detail navigation,
related-object navigation, locale presentation, History validation, and Event
editing paths, but those tests are supporting source evidence rather than a
new visual acceptance matrix for duplicate-name identity.

# Decision

**NAME + CONDITIONAL CHRONOLOGY + FINAL SHORT-ID FALLBACK**

Event name or the existing localized fallback remains the primary human-facing
identity. When names collide within the current surface candidate set, use
existing human-readable recorded date/time information only when it adds
distinguishing value and is not already supplied by adjacent context. The
existing field shape communicates precision; a raw precision label is not
needed. Do not expose raw `temporalOrder` as an identity number. If the
human-readable information still collides or is absent, use a bounded short
Object ID hint as the final presentation fallback.

This decision describes a future design direction, not an accepted
implementation. It does not require one identical visible string across
Timeline, Related Events, Event Detail, or any future Event Picker.

# Smallest future implementation slice

The smallest safe future slice is an application-local, behavior-preserving
identity-resolution experiment limited to the two actual peer-selection
surfaces:

1. Define candidate-local ambiguity cases for the Timeline's visible Event
   set and the Entity Detail Related Events set.
2. Reuse the current History date/time formatting boundary rather than adding
   a second formatter.
3. Render conditional chronology only where adjacent context does not already
   provide it; reserve a collision-safe short ID for the final unresolved
   case.
4. Keep Event Detail's single-object context, the Entity picker flow, exact
   `event.id` operations, and all existing navigation/deletion behavior
   unchanged.
5. Add focused EN/JA, duplicate-name, missing-chronology, precision,
   blank-name, long-name, narrow-width, and full-ID regression evidence before
   considering visual acceptance.

This slice is not authorized by this audit. A future checkpoint must decide
the concrete hint convention and rendering geometry after implementation
evidence.

# Explicit exclusions

This audit does not:

- modify NarrativeLine runtime, CSS, tests, `messages.ts`, `App.tsx`, Event
  screens, or Event/History services;
- add Event IDs, date hints, precision labels, or `temporalOrder` text to the
  UI;
- create an Event identity or presentation service;
- change Event sorting, Timeline rendering, Picker behavior, or Dataset
  semantics;
- change History semantics, precision, `temporalOrder`, or schema;
- define a global UUID display rule or a mandatory short-ID length;
- reopen Relation blocker Presentation or Capability Handoff acceptance;
- start a LiaisonScape runtime audit or modify Hub, ai-knowledge, Core,
  Extension, or roadmap documents; or
- authorize push, deployment, or another follow-up workstream.

The Knowledge Candidate Check is **NO NEW KNOWLEDGE ENTRY REQUIRED**. This is
repository-local NarrativeLine evidence, and the existing workspace Object ID
hypothesis explicitly requires further independent application evidence before
promotion to a reusable E2R-wide rule.
