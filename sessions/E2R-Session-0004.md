# E2R Session 0004

Date: 2026-07-24

## Overview

This session focused on defining the minimum temporal model required for the Timeline MVP and further refining the philosophy of the E2R Core.

The largest architectural change of this session was the realization that Core Relations do not need semantic types. Instead, the Core only represents connections, while semantic meaning belongs to Extensions.

This decision completes the separation of responsibilities across Entity, Event, and Relation.

---

# Decisions

## 1. Timeline MVP first

The immediate objective is to complete the minimum specification required to implement the Timeline MVP.

Future temporal features should not increase the complexity of the MVP.

---

## 2. History Extension adopts a Time Object

Temporal information SHALL be represented by a Time Object.

Example:

```json
{
  "time": {
    "value": "2027-07-24",
    "precision": "day"
  }
}
```

This replaces a simple date field and provides a stable foundation for future temporal extensions.

---

## 3. `time` is the standard field name

The field name SHALL be:

```text
time
```

rather than `date`.

Reason:

The object represents years, dates, timestamps, and time ranges, not merely calendar dates.

---

## 4. Minimum Time Object

The Timeline MVP adopts the following minimum structure.

Single time:

```json
{
  "time": {
    "value": "2027-07",
    "precision": "month"
  }
}
```

Range:

```json
{
  "time": {
    "start": {
      "value": "2027",
      "precision": "year"
    },
    "end": {
      "value": "2027-06",
      "precision": "month"
    }
  }
}
```

---

## 5. Time values

`value` SHALL be an ISO 8601 compatible string.

Examples:

```text
2027
2027-07
2027-07-24
2027-07-24T15:30:00Z
```

Year-only and year-month values are valid.

---

## 6. Explicit precision

Precision SHALL NOT be inferred from the string representation.

Instead, every Time Object explicitly specifies:

- year
- month
- day
- hour
- minute
- second

---

## 7. Time ranges

Time ranges use `start` and `end`.

Each endpoint is itself a Time Object.

This allows different precision at each endpoint.

---

## 8. Single time and range are mutually exclusive

A Time Object SHALL contain either:

- `value`

or

- `start` and `end`

Applications SHOULD treat these representations as mutually exclusive.

---

## 9. Time Object responsibility

The Time Object is responsible only for representing temporal values.

It is intentionally independent from temporal semantics.

Examples intentionally excluded:

- Approximate dates
- Relative time
- Seasons
- Named historical periods
- Parallel timelines
- Time loops
- Narrative order
- Probability
- Confidence

These concepts belong to separate Extensions.

---

## 10. Human interpretation belongs elsewhere

The History Extension represents "when".

It does not define how humans interpret that time.

Examples outside its scope include:

- Spring
- Rainy season
- Renaissance
- Postwar period

These represent semantic interpretation rather than temporal representation.

---

## 11. Timeline MVP displays Events only

The Timeline MVP displays Events.

Entities are used for search, filtering, grouping, and navigation, but are not timeline entries themselves.

---

## 12. Event names

The Timeline MVP displays `Event.name`.

No additional title field is required.

As a recommendation, Event names should be understandable without surrounding context.

Preferred examples:

- Tokugawa Ieyasu was born
- Apple Inc. founded
- Battle of Sekigahara

Avoid names such as:

- Birth
- Death
- Joined

which require additional context.

---

## 13. Timeline sorting

Applications SHOULD sort Events using the following precedence.

1. Temporal value
2. Temporal precision
3. Core `order`
4. Implementation-defined tie breaker

Core `order` is therefore a tie breaker rather than a replacement for chronological order.

---

## 14. Relation philosophy reconsidered

A major architectural discussion focused on the purpose of Relation.

Initially, Relations were assumed to contain a semantic type.

Example:

```json
{
  "type": "related_to"
}
```

During discussion, it became clear that this semantic information is not required by the Core.

---

## 15. Core Relation no longer requires `type`

Current direction:

```json
{
  "id": "rel001",
  "source": "ev001",
  "target": "en001"
}
```

The Core guarantees only that two Core Objects are connected.

The meaning of that connection belongs to Extensions.

---

## 16. Relation semantics belong to Semantic Extensions

Examples such as:

- parent
- child
- participant
- member
- birthplace
- location
- cause
- reference

should not be standardized by the Core.

Instead they are expected to be defined by Semantic Extensions.

---

## 17. Symmetry of the Core

This discussion revealed a stronger architectural symmetry.

Entity

Represents existence.

Event

Represents occurrence.

Relation

Represents connection.

None of these Core Objects are responsible for domain semantics.

Semantic interpretation is delegated to Extensions.

This is considered one of the most important architectural outcomes of this session.

---

# Future Work

Topics identified for future sessions include:

- Semantic Extension vocabulary
- Calendar Extension
- Approximate Time Extension
- Relative Time Extension
- Presentation rules for semantic relations
- Timeline application implementation

---

# Summary

This session significantly simplified the Core while strengthening its architectural consistency.

The Timeline MVP now has a stable temporal foundation based on the Time Object.

More importantly, the Core has moved toward a fully structural model:

- Entity represents existence.
- Event represents occurrence.
- Relation represents connection.

Domain semantics, temporal interpretation, and presentation are consistently delegated to Extensions, reinforcing the central philosophy of E2R.
