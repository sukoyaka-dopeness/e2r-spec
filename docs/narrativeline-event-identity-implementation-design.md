# Status

**DESIGN COMPLETE / IMPLEMENTATION READINESS ONLY / IMPLEMENTATION NOT
AUTHORIZED**

This document turns the NL-EVENT-ID1 audit into a bounded implementation
contract for exactly two current NarrativeLine surfaces:

- the Timeline Event list; and
- the Entity Detail Related Events list.

It does not change NarrativeLine runtime, CSS, tests, package files, fixtures,
History semantics, sorting, navigation, Dataset behavior, or the roadmap.

The design is based on NarrativeLine `4591f3a`, e2r-spec audit commit
`221a995`, and the current E2R Core and History authorities. Relation blocker
Presentation remains **FORMALLY ACCEPTED / COMPLETE / CLOSED**. Capability
Handoff remains **CLOSED / ACCEPTED**.

# Audit input

The input audit is
[`NarrativeLine Event Human-readable Identity Audit`](narrativeline-event-human-readable-identity-audit.md).
Its primary classification was **NAME + CONDITIONAL CHRONOLOGY + FINAL
SHORT-ID FALLBACK**.

The audit established that Event names are optional human-readable labels and
are not guaranteed to be unique. It also established that ambiguity belongs to
the visible/selectable candidate set for the current surface, not automatically
to every Event in the Dataset.

The current application baseline is 197/197 tests passing, with lint and build
passing. No browser acceptance is required for this design checkpoint.

# Target surfaces

Only these live surfaces are in scope:

1. `src/screens/TimelineScreen.tsx`, which renders the full current Event list
   and lets the user select or explicitly edit an Event.
2. `src/screens/EntityDetailScreen.tsx`, which renders the Events related to
   the selected Entity and lets the user select one before opening Event
   Detail.

The design deliberately does not broaden into other Event surfaces. Future
Event pickers, search/reference pickers, Event Detail identity, dialogs, and
other application views may reuse the conceptual hierarchy later, but are not
implementation targets for the next checkpoint.

# Current source responsibilities

`TimelineScreen.tsx` owns Timeline presentation and calls
`compareEventsByHistoryDate` to sort a derived copy of `dataset.events`. It
renders `event.name ?? copy.unnamedEvent`, the existing formatted date, and an
available clock value. Selection and explicit Edit callbacks receive the exact
`event.id`.

`EntityDetailScreen.tsx` constructs `relatedEventIds` from Relations incident
to the selected Entity, filters `dataset.events` to that set, and renders
`event.name ?? copy.unnamedEvent`. A selected card may show the first
description line and an Edit Event control. Selection and navigation also use
the exact `event.id`.

`src/services/HistoryService.ts` owns the reusable date and time extraction and
formatting helpers. `formatEventHistoryDate` preserves recorded date
precision, and `formatEventHistoryTime` preserves recorded clock precision.
`compareEventsByHistoryDate` owns sorting and must remain outside identity
resolution.

`src/services/IdentifierService.ts` generates full Core Object IDs. It does not
provide a short display-hint helper. `RelationPresentationService.ts` contains
a Relation-specific eight-character, collision-extending hint algorithm; its
card geometry and service boundary must not be reused automatically for Event
identity.

# Candidate-set definition

The resolver receives the candidate collection supplied by the caller. It
does not discover or expand that collection.

For Timeline, the candidate collection is exactly the Events that the current
Timeline renders: all `dataset.events`, copied and sorted for display by the
existing `compareEventsByHistoryDate` call. There is currently no Timeline
filter or hidden Event subset. Sorting changes display order only; it does not
change the candidate membership or canonical IDs.

For Entity Detail Related Events, the candidate collection is exactly the
`relatedEvents` array constructed from Relations incident to the selected
Entity. An Event with the same name elsewhere in the Dataset but outside this
group must not cause a hint for the related group.

The resolver must compare only the supplied candidates. It must not perform a
Dataset-wide lookup, read React state, sort the candidates, or infer candidates
from Relation or navigation state.

# Primary Event identity

The primary identity is the current displayed Event name expression:

```text
event.name ?? localizedUnnamedEventFallback
```

This preserves the actual target-surface convention. Duplicate comparison uses
exact equality of that displayed primary string.

No trimming, case folding, Unicode normalization, locale-aware comparison, or
other normalization is introduced. The target surfaces currently do not trim
Event names. A whitespace name therefore remains a whitespace primary value,
and an empty string remains distinct from the nullish unnamed fallback in the
existing `??` expressions. Any future normalization decision is separate from
this resolver contract.

The resolver must not choose the locale or create fallback copy. Each surface
supplies the already localized primary-name function or equivalent dependency.
The same Dataset Event may therefore have locale-specific visible copy while
the ambiguity rule remains semantically identical.

Resolver contract, expressed conceptually rather than as a prescribed public
type:

- input: one Event, the caller-defined candidate Event collection, and
  presentation dependencies for the primary name and chronology;
- output: the primary display string, an optional chronology discriminator,
  and an optional final short-ID discriminator; and
- behavior: pure, deterministic, JSX-free, mutation-free, navigation-free,
  and independent of React state.

# Chronology discriminator

Chronology is the first discriminator after a duplicate primary name. The
future implementation must reuse the current History presentation boundary:

- `formatEventHistoryDate(event)` for `YYYY`, `YYYY-MM`, or `YYYY-MM-DD`;
- `formatEventHistoryTime(event, true)` when recorded clock information is
  needed to distinguish otherwise equal dates; and
- the existing Timeline locale presentation dependency where a surface must
  preserve its established localized clock units.

The resolver should receive a chronology formatter/dependency rather than own
locale selection or invent a second date formatter. A chronology value is
display-ready text or absent; raw History fields and raw precision enums do
not become identity output.

The conceptual progression for a duplicate-name group is:

1. Use the existing recorded date form when it distinguishes the candidates.
2. If date values remain equal, use the existing recorded time form when it
   distinguishes them.
3. If chronology is absent or remains equal, continue to the short-ID rule.

An unavailable chronology is not replaced with a fabricated date, midnight,
zero-valued field, Time Zone, UTC value, or placeholder identity label. A
candidate with no usable chronology receives the next discriminator when its
primary name remains ambiguous. A dated candidate and an undated candidate
may therefore receive different hint levels: the dated candidate can use its
visible date, while the undated candidate needs the final short-ID fallback if
the group still requires explicit distinction.

Unique primary names receive no chronology hint from the resolver. A duplicate
primary name with distinct chronology receives chronology output, subject to
surface rendering context. A duplicate primary name with equal chronology
does not treat chronology as sufficient and proceeds to short ID.

# Precision boundary

Precision is encoded by the existing formatted chronology, not returned as a
separate visible field. `1969`, `1969-07`, and `1969-07-16` remain distinct
recorded forms because omitted finer History fields remain omitted.

The resolver must not return or render values such as:

```text
precision: "day"
Precision: day
```

The implementation must not add a new precision vocabulary, infer finer
precision, or treat a date-only Event as midnight. If existing formatted
chronology does not distinguish two candidates, the resolver proceeds to the
short-ID fallback.

# temporalOrder exclusion

`temporalOrder` is explicitly outside the identity output.

The existing `compareEventsByHistoryDate` implementation may continue to use
it for Timeline ordering after recorded date/time values compare equal. That
sorting responsibility is separate from identity resolution.

The resolver must not:

- return `temporalOrder` as metadata;
- display it as an occurrence number or ambiguity hint;
- compare it as a human-readable discriminator; or
- expose it merely because two names and chronology values are equal.

If two Events remain visually identical after available chronology, short ID is
the next discriminator. No authorial or narrative order is inferred from
`temporalOrder`.

# Blank-name fallback

The resolver preserves the existing localized unnamed Event fallback supplied
by the surface. It does not introduce new `Unnamed Event` copy or turn the
fallback into a canonical ID.

For one missing-name Event, the existing fallback is sufficient and no hint is
needed. For multiple candidates whose displayed primary value is the same
fallback, the fallback is a duplicate primary identity. Chronology is used
when available; unresolved candidates then receive a short-ID hint.

Whitespace and empty-string handling remains the current exact-display rule.
The future implementation must not silently trim or normalize those values as
part of duplicate detection.

# Short-ID fallback

Short ID is a final presentation hint only. It is used when the displayed
primary name remains ambiguous and available human-readable chronology is
absent or equal. It is not added to unique names or to duplicate names that
are already distinguished by visible chronology in the relevant surface.

NarrativeLine has no generic Event short-ID helper. The existing Relation
presentation convention is the only inspected local convention: begin with an
eight-character ID prefix when the ID is long enough and extend the prefix
among colliding candidates until it is unique. Do not pad IDs shorter than
eight characters; use the full short ID in that case. This convention is
evidence for a bounded application hint, not an E2R-wide mandatory rule.

The next implementation may adopt that observable collision-extending
behavior in a small Event-specific helper or a narrowly shared utility only
if it preserves the existing Relation behavior without creating a generic
Object Identity framework. The design does not authorize either extraction.

# Short-ID collision considerations

Simple fixed truncation is unsafe because different Event IDs can share a
prefix. The required future behavior is collision-extending prefix selection
within the unresolved duplicate candidate group:

- start at eight characters when possible;
- extend only as far as needed to make the hints distinct within that group;
- never pad a short ID;
- never use the hint as an operation key; and
- retain the full exact ID for every callback, route, Relation, Dataset, and
  serialization operation.

If a future implementation cannot preserve collision-free hints under its
chosen rendering constraints, it must retain the full ID internally and stop
the visual acceptance rather than silently present colliding hints. The full
ID is not the default visible identity.

# Timeline presentation

The Timeline already answers both selection questions through a date column
and an optional adjacent clock value. It must not add a second chronology row
merely because the resolver found duplicate names.

The future Timeline consumer should therefore:

- keep the current Event name/fallback as the primary visible text;
- call the resolver with the Timeline's full rendered Event collection;
- suppress a chronology hint when the existing date/time column already makes
  that duplicate candidate distinguishable;
- preserve the existing date precision and clock presentation; and
- render a short-ID hint only when the existing Timeline context and available
  chronology still leave the candidates visually identical.

The resolver may return chronology for the consumer's decision, but it must
not force an inline suffix or a new row. The selected-card Edit control,
ellipsis behavior, and narrow layout remain unchanged until a later visual
implementation checkpoint. No Timeline sorting or filtering change is part of
this design.

# Entity Detail Related Events presentation

The Related Events list does not currently show date, time, precision, or ID.
It should use the same candidate-local resolver but retain surface-specific
rendering:

- keep the Event name/fallback as the primary value;
- show a conditional existing chronology value as secondary information when
  duplicate names need it and chronology distinguishes the candidates;
- show the collision-safe short-ID hint only for the remaining unresolved
  candidates; and
- leave unique names unchanged.

The design does not select whether the secondary value is an inline suffix or
a second metadata line. That geometry belongs to the bounded implementation
and visual acceptance. The consumer must preserve the existing selected-card
description preview and Edit Event action, and must use the full Event ID for
selection.

An unrelated same-name Event outside the selected Entity's Related Events
group must not cause a hint in this list.

# Shared resolution versus rendering

**Decision: share resolution, not rendered geometry.**

Option A—one small pure resolver with surface-specific rendering—is preferred.
It keeps duplicate detection, chronology progression, and short-ID fallback in
one responsibility while allowing each screen to account for its context.

Option B—two surface-local resolvers—would duplicate the normalization,
candidate-local grouping, chronology, and collision rules. It would make later
Event Picker reuse less reliable and could cause Timeline and Related Events to
disagree about whether the same candidate group is ambiguous.

A shared resolver is justified because both surfaces answer a peer-selection
question and use the same Event data. Shared rendered markup is not justified:
Timeline chronology is already structural, while Related Events lacks that
context. Event Detail and future pickers are not included in this extraction.

This follows the application modularization policy: extract one responsibility
whose change reason is clear, without prescribing a file-count target or
creating an ecosystem-wide Object Identity abstraction.

# Locale boundary

The ambiguity decision is locale-independent. The resolver compares the
primary strings supplied by each surface and uses the same candidate-local
progression in EN and JA. The surface remains responsible for selecting the
localized unnamed fallback and established date/time presentation.

No new `messages.ts` vocabulary is required if the output consists only of the
existing Event name/fallback, existing formatted chronology, and a short ID
hint. Do not add labels such as `Date`, `ID`, or `Disambiguation` in this
checkpoint.

The future test matrix must confirm that switching locale does not change
which candidates are considered ambiguous, even though fallback copy and
visible date/time units may be localized.

# Canonical Event ID preservation

The resolver's short ID is never a replacement for the canonical Event ID.
The following continue to use the exact full `event.id`:

- Timeline selection;
- Timeline Edit activation;
- Related Events selection;
- navigation to Event Detail;
- Event save/delete and Relation operations;
- React list keys where already used;
- Dataset storage and serialization; and
- any future option value or callback.

The resolver must not mutate Events, attach hint fields to Dataset objects, or
persist derived presentation output.

# Test design

The next implementation should add unit coverage for the pure resolver and
focused integration coverage for the two consumers. The minimum matrix is:

| Case | Required result |
|---|---|
| T1 Timeline unique names | No extra identity hint; existing chronology remains unchanged. |
| T2 Timeline duplicate name, different chronology | Ambiguity is detected; chronology is available; existing full IDs are unchanged; duplicate date context is not redundantly rendered. |
| T3 Timeline duplicate name, same chronology | Short-ID fallback is available; `temporalOrder` is absent from identity output. |
| T4 Related Events unique name | No hint. |
| T5 Related Events duplicate name, different chronology | Existing chronology appears as the conditional secondary discriminator. |
| T6 Related Events duplicate name, same chronology | Collision-safe short-ID fallback appears. |
| T7 Same name outside Related Events candidate set | No Related Events hint caused by the unrelated Event. |
| T8 Blank/whitespace name | Existing fallback/display behavior is preserved; no new normalization is applied. |
| T9 Precision | `1969`, `1969-07`, and `1969-07-16` remain the existing formatted values; no raw precision label appears. |
| T10 `temporalOrder` | Existing Timeline ordering may use it; identity output never contains it. |
| T11 Canonical action identity | Selection/Edit callbacks receive the full exact Event ID. |
| T12 EN/JA | The ambiguity decisions match; existing localized presentation remains responsible for visible formatting. |
| T13 Short-ID collision | Common prefixes extend until distinct; short IDs are not padded; full IDs remain operation identity. |
| T14 Long/narrow values | The chosen consumer geometry does not clip or confuse the primary name, chronology, or final hint. |

The resolver tests must not require browser pixel assertions. Surface geometry
and visual wrapping belong to later implementation acceptance.

# Browser acceptance design

The next implementation checkpoint should define, but this design does not
execute, manual acceptance for:

- a Timeline fixture with duplicate names and different dates;
- a Timeline fixture with duplicate names and equal visible chronology;
- a Related Events fixture with duplicate names and different chronology;
- a Related Events fixture with duplicate names and equal chronology;
- an unrelated same-name Event outside the Related Events candidate set;
- EN and JA;
- ordinary and narrow widths;
- long Event names;
- chronology present and absent;
- collision-extending short-ID hints; and
- no redundant duplicate date display on Timeline.

The production sample Dataset must not be modified solely to create this
evidence. A dedicated fixture decision belongs to the implementation
checkpoint if existing data cannot cover the cases.

# Expected implementation files

No files are changed by this design. The smallest expected future file set is:

- `src/services/EventIdentityPresentationService.ts` (new, if a small pure
  service is confirmed as the clearest responsibility boundary);
- `src/screens/TimelineScreen.tsx` (consumer and suppression of chronology
  already present in the Timeline context);
- `src/screens/EntityDetailScreen.tsx` (consumer and Related Events secondary
  rendering);
- `tests/eventIdentityPresentationService.test.js` (new unit coverage, if the
  new service is created); and
- `tests/eventIdentityPresentationIntegration.test.js` (new focused consumer
  coverage, or an explicitly reviewed extension of existing integration
  coverage).

`src/services/HistoryService.ts` is not an expected change in the minimum
slice because its existing date/time formatters are already available. If
localized clock composition cannot be reused without moving the current
Timeline-local helper, that is a separate implementation decision and must
not broaden the slice into History redesign.

`src/App.tsx` is not required: both target screens already receive Dataset
data and retain canonical Event callback boundaries. No App modularization
refactor is justified by this feature.

# Architecture comparison

| Architecture | Assessment |
|---|---|
| Shared pure resolver + surface-specific rendering | **Preferred.** One candidate-local identity responsibility; Timeline suppresses duplicate context; Related Events supplies missing context. |
| Two surface-local resolvers | Not preferred. Duplicates rules and risks divergent normalization, chronology, and collision behavior. |
| Shared resolver + shared rendered presentation | Rejected. The two surfaces have materially different adjacent chronology and geometry. |
| Generic E2R-wide Object Identity framework | Rejected. This is a NarrativeLine application responsibility and the current evidence does not establish an E2R-wide rule. |

# Decision

**READY — SHARED RESOLVER + SURFACE-SPECIFIC RENDERING**

The two target surfaces can safely share a small pure, candidate-local Event
identity resolver. The resolver uses the exact displayed primary name,
existing formatted chronology, and a collision-safe short-ID fallback. It does
not sort, navigate, mutate, select locale, render JSX, expose raw precision or
`temporalOrder`, or calculate Dataset-wide uniqueness.

The Timeline and Related Events consumers must render the result differently
because the Timeline already displays chronology beside each Event while
Related Events does not. No shared rendered identity markup is accepted.

# Exact next implementation boundary

The next authorized checkpoint, if separately approved, is
**NL-EVENT-ID1-IMPL1 — bounded Event identity resolver and two-consumer
integration**:

- implement only the pure resolver contract recorded here;
- wire only `TimelineScreen.tsx` and `EntityDetailScreen.tsx`;
- preserve current Timeline sorting, Event filtering (none), navigation,
  selection, descriptions, and Dataset behavior;
- use candidate-local duplicate groups;
- reuse current History formatting and keep precision implicit;
- exclude raw `temporalOrder` from identity output;
- use collision-extending short IDs only as the final fallback;
- preserve full canonical Event IDs in all operations; and
- add the focused unit/integration tests and later EN/JA/narrow/long-name
  evidence listed above.

That checkpoint must not touch Event Detail, future Event Picker/search,
dialogs, `App.tsx`, package files, fixtures without a separate decision,
History semantics, schema, LiaisonScape, Hub, ai-knowledge, or roadmap. It
must not begin browser Formal Acceptance or any deployment work automatically.

# Explicit exclusions

This design checkpoint does not:

- modify NarrativeLine `src`, tests, CSS, package files, fixtures, or Dataset;
- implement or display Event hints;
- add date rows, precision labels, raw `temporalOrder`, or short IDs to the UI;
- change Timeline sorting, filtering, navigation, selection, or Event Detail;
- create a generic Object identity framework;
- change History implementation, semantics, precision, or schema;
- modify `messages.ts`, `App.tsx`, LiaisonScape, Hub, ai-knowledge, or roadmap;
- reopen Relation blocker Presentation or Capability Handoff acceptance; or
- authorize push, deployment, or another follow-up workstream.

The Knowledge Candidate Check remains **NO NEW KNOWLEDGE ENTRY REQUIRED**.
This design refines repository-local implementation responsibility from the
existing audit; it does not establish a new reusable cross-repository rule.
