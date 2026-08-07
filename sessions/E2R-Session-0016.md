# E2R Session 0016

## Date

2026-08-05

## Summary

This session migrated NarrativeLine's date-only Event editing from the
temporary application-level `date` field to the E2R History Extension.

NarrativeLine now reads, validates, writes, displays, and orders date-only
History values through `extensions.history.time`. The onboarding sample was
migrated to the same representation, and the relevant NarrativeLine documents
were synchronized with the implementation.

No normative E2R Core or History Extension requirements were changed in this
session.

---

# Date-only History Model

NarrativeLine added application types for the History Extension and allows an
Event to hold:

```text
extensions.history.time.year
extensions.history.time.month
extensions.history.time.day
```

The initial application scope supports date-only values with contiguous
precision:

- year may appear by itself
- month requires year
- day requires month and year
- unknown finer fields are omitted

A partial date is not converted to a complete date. NarrativeLine does not
invent a month, day, midnight, Time Zone, offset, or UTC value.

Year values use the History Extension's astronomical year numbering, including
year zero and negative years. Date validity follows the proleptic Gregorian
calendar.

Clock fields, Time Zone editing, offsets, and Instant-based operations remain
deferred.

---

# History Service

NarrativeLine added a HistoryService as the application boundary for date-only
History behavior.

Its current responsibilities include:

- reading an Event's History date
- validating contiguous date precision
- validating integer year, month, and day values
- validating Gregorian month and day ranges
- handling leap years in the proleptic Gregorian calendar
- formatting partial dates without inventing omitted fields
- comparing Events by their stored History dates

The former top-level Event `date` field is no longer read as a fallback. This
prevents an application-only representation from silently competing with the
History Extension as a second source of truth.

---

# Event Editing and Writing

New Events no longer receive a temporary empty `date` string.

Event Detail now edits year, month, and day separately. The controls enforce
the precision dependency in the editing flow: clearing year also clears month
and day, and clearing month also clears day.

Name, description, and History date remain in local Event Detail state until
the user applies the changes. Before applying, the History date is validated.
An invalid value is not written to the Dataset.

`EventService.updateEvent()` writes valid date-only values to
`extensions.history.time`. It preserves unknown Extension data and removes
known finer date fields when the user intentionally reduces precision.

When no History time fields remain, the writer avoids producing an empty
`time`, `history`, or `extensions` object solely for the cleared date. The
writer also removes a runtime legacy top-level `date` property when updating an
Event.

Existing `temporalOrder` data is preserved. Editing a Civil date does not
regenerate or reinterpret it as presentation order.

---

# Timeline Display and Ordering

Timeline View now displays dates derived from `extensions.history.time`.

It orders a derived copy of the Event collection rather than rewriting the
Dataset's stored Event array. The current comparison order is:

1. Events with a History date before Events without one
2. year, month, and day in Civil date order
3. coarser precision before finer precision when known fields are otherwise
   equal
4. `temporalOrder` when both Events provide distinct integer values and their
   recorded temporal fields do not otherwise distinguish them
5. Core Event ID as a deterministic final tie-breaker

This is a NarrativeLine application behavior. It does not add presentation
order to the E2R Core or redefine `temporalOrder` as arbitrary Timeline order.

---

# Sample Dataset Migration

All 12 Events in the NarrativeLine onboarding sample were migrated from
top-level date strings to numeric year, month, and day fields under:

```text
extensions.history.time
```

The migrated sample contains no legacy Event `date` fields.

---

# Documentation Synchronization

The following NarrativeLine documents were updated to describe the implemented
date-only History behavior:

- `docs/MVP.md`
- `docs/editing-model.md`
- `docs/services.md`
- `docs/ui-spec.md`
- `docs/state-machine.md`

The documents now agree that Event Detail keeps edits locally until apply,
HistoryService owns date-only reading, validation, formatting, and comparison,
EventService owns writing, and returning without applying discards the local
edits.

---

# Future Derived Weekday Display

A future NarrativeLine feature may display the weekday derived from a complete
Gregorian year-month-day value.

The current direction is:

- derive the weekday only when year, month, and day are all present and valid
- use the proleptic Gregorian calendar and astronomical year numbering
- support year zero and negative years consistently
- avoid JavaScript `Date` behavior that can reinterpret years or introduce a
  local Time Zone
- localize the displayed weekday label in the UI
- do not store the derived weekday in the Dataset

Weekday is redundant with a complete Gregorian date and therefore should not
become a second source of truth in the History Extension.

When historical source material uses another calendar, the UI should not imply
that the derived Gregorian weekday is a transcription of the source's original
calendar context. Future provenance or alternative-calendar work may need to
make that distinction explicit.

This feature was recorded for later implementation and was not added in this
session.

---

# Files Added or Updated

NarrativeLine implementation work affected:

- `src/App.tsx`
- `src/models/Event.ts`
- `src/models/HistoryExtension.ts`
- `src/sample/sampleDataset.ts`
- `src/screens/EventDetailScreen.tsx`
- `src/screens/TimelineScreen.tsx`
- `src/services/EventService.ts`
- `src/services/HistoryService.ts`

NarrativeLine documentation work affected:

- `docs/MVP.md`
- `docs/editing-model.md`
- `docs/services.md`
- `docs/ui-spec.md`
- `docs/state-machine.md`

This E2R-SPEC session record was added as:

- `sessions/E2R-Session-0016.md`

---

# Validation

NarrativeLine production builds and lint checks completed successfully during
the migration:

```text
npm.cmd run build
npm.cmd run lint
```

Direct behavior checks also confirmed:

- a valid Gregorian leap day is accepted
- an invalid non-leap-year February 29 is rejected
- year zero follows proleptic Gregorian leap-year rules
- Timeline date comparison produces the intended ordering
- the legacy top-level Event `date` field is ignored by History reading
- all 12 sample Events use History Extension dates
- no legacy Event `date` field remains in the application source

---

# Outcome

NarrativeLine's date-only History Extension migration is complete for the
current MVP scope.

The application now has one interoperable source of truth for Event dates and
is ready for the next high-priority work toward Core Dataset validation and
JSON import and export.
