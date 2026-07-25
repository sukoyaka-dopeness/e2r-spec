# E2R Session 0005

Date: 2026-07-25

## Summary

This session focused on the design of the History Extension for the Timeline MVP.

The primary goal was to keep the History Extension minimal while preserving long-term extensibility.

---

# Decisions

## Time Object

History information should be stored inside a dedicated `time` object rather than as top-level fields.

This provides a stable location for future extensions while keeping the initial specification small.

Example:

```json
{
  "history": {
    "time": {
      "date": "1945-08-15",
      "order": "0010"
    }
  }
}
```

Only the minimum required fields should be defined in History Extension v1.0.

---

## Precision

A separate `precision` field is unnecessary.

ISO 8601 already expresses precision naturally.

Examples:

```
1945
1945-08
1945-08-15
1945-08-15T12:00:00Z
```

Applications can determine the precision directly from the date representation.

---

## Order

`order` is defined as a string.

The value itself has no semantic meaning.

Applications MUST preserve the relative ordering of events.

Applications MAY freely regenerate or renumber `order` values as long as the relative ordering is preserved.

History Extension defines ordering semantics, not ordering algorithms.

This allows different applications to use different internal ranking algorithms while remaining interoperable.

---

## Order Comparison

Applications compare `order` values lexicographically.

History Extension does not define how new `order` values are generated.

This allows implementations such as:

- Sequential numbering
- Sparse numbering
- LexoRank-like algorithms
- Future ranking algorithms

without requiring specification changes.

---

## Unknown Dates

Events without explicit dates are valid.

Applications may position such events using `order`.

Unknown time should not automatically force an event to the beginning or end of a timeline.

Applications should allow users to place unknown-date events anywhere in the ordering.

---

## Era

Periods such as:

- Childhood
- Sengoku Period
- Edo Period

are conceptually different from approximate dates.

Support for era-based time references will be added in a future revision of History Extension.

---

## Approximate Time

Approximate expressions such as:

- around 1945
- summer
- early 19th century

are not equivalent to eras.

They will be considered independently in a future revision.

---

## Calendar

Calendar support is intentionally excluded from the Timeline MVP.

Future support should include:

- Gregorian calendar
- Julian calendar
- Japanese era calendar
- Fictional calendars

Calendar functionality is expected to become an independent Extension referenced by History Extension.

---

## Relative Time

Relative temporal relationships are not properties of an Event.

Examples:

- before
- after
- +3 days
- during
- overlaps

These describe relationships between multiple Events.

Therefore they belong in a future temporal relation/constraint extension rather than History Extension.

---

## Multiple Time Hypotheses

Cases where multiple candidate dates exist for a single Event should not be represented as multiple Events.

Future versions may introduce a mechanism for multiple candidate times within a single Event.

This avoids violating the Single Source of Truth principle.

---

## Three-Layer Time Model

The idea of separating:

- Absolute Time
- Relative Time
- Time Scale

was discussed.

The concept has potential value but is intentionally postponed until after the Timeline MVP.

---

# Design Principles Reaffirmed

- Keep History Extension minimal.
- Prefer future extensibility over premature features.
- Separate responsibilities between Extensions.
- Preserve interoperability across applications.
- Applications are responsible for implementation details.
- Extensions define interoperable data semantics rather than implementation algorithms.

---

# Additional Decisions

## Timeline MVP Design

The Timeline Application is positioned as the reference implementation of the History Extension.

The application adopts an Event-first editing workflow.

Users primarily create and edit Events, while Entity management is performed as part of Event editing.

The Timeline Application is intentionally not a generic E2R editor.

Its purpose is to provide a simple and efficient workflow for constructing chronological datasets.

---

## Relation Editing

The Timeline MVP does not provide direct Relation editing.

Relations are managed internally as a consequence of Event and Entity editing.

Rich Relation editing, visualization, and semantic information are expected to be provided by dedicated graph-oriented applications.

This establishes a clear separation of responsibilities between the Timeline Application and future graph-based applications.

---

## Entity Workflow

When adding a related Entity to an Event:

- Existing Entities are suggested using autocomplete.
- Selecting an existing Entity associates it with the Event.
- If no matching Entity exists, a new Entity is created automatically.

Entity creation is therefore expected to occur primarily through Event editing.

A standalone Entity list is intentionally omitted from the MVP.

---

## Entity Detail

The Entity Detail view displays:

- Entity information
- Related Events in chronological order

This provides an entity-centric view without changing the Event-first editing model.

---

## Deletion Behavior

Deleting an Event removes Relations connected to that Event.

Deleting an Entity removes Relations connected to that Entity.

Entities are never removed automatically, even when they become isolated.

Before deletion, the application should display the number of affected Relations to reduce accidental data loss.

---

## History Extension v1.0

The Timeline MVP finalizes the initial History Extension time model.

The Time Object consists of:

- `value`
- `precision`
- `order`

The `order` field is an integer managed by applications.

Applications may regenerate ordering values while preserving relative ordering.

Future capabilities including Relative Time, Approximate Time, Calendar systems, and Time Intervals remain outside the scope of History Extension v1.0.
