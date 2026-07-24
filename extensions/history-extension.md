# History Extension

## Purpose

The History Extension provides standardized temporal information for E2R datasets.

Its purpose is to represent when Events occur and how they are ordered in time while remaining independent from any particular application domain.

The History Extension extends the Core without changing the meaning of Core objects.

---

## Design Principles

The History Extension follows the same philosophy as the E2R Core.

- Build upon the Core rather than replace it.
- Standardize only concepts that are broadly applicable.
- Keep semantic assumptions to a minimum.
- Separate temporal representation from temporal interpretation.
- Allow unknown fields and future extensions.
- Remain independent from presentation.

---

## Scope

The History Extension standardizes common temporal concepts, including:

- Absolute date and time
- Time ranges
- Temporal precision
- Chronological ordering
- Calendar identification

These concepts are expected to be useful across many application domains, including:

- Historical datasets
- Timeline applications
- Worldbuilding
- Knowledge bases
- Investigation systems
- OSINT
- Citation graphs

---

# Time Object

All temporal information is represented by a Time Object.

The Time Object is responsible only for representing temporal values.

It does not represent domain-specific semantics such as uncertainty, narrative order, parallel timelines, or time loops.

## Single Time

```json
{
  "time": {
    "value": "2027-07-24",
    "precision": "day"
  }
}
```

## Time Range

```json
{
  "time": {
    "start": {
      "value": "2025",
      "precision": "year"
    },
    "end": {
      "value": "2026-03",
      "precision": "month"
    }
  }
}
```

A Time Object SHALL contain either:

- `value`

or

- `start` and `end`

Applications SHOULD treat these representations as mutually exclusive.

---

## Value

`value` SHALL be an ISO 8601 compatible string.

Examples:

```text
2027
2027-07
2027-07-24
2027-07-24T15:30:00Z
```

---

## Precision

`precision` explicitly specifies the precision of the temporal value.

Allowed values are:

- year
- month
- day
- hour
- minute
- second

Applications MUST NOT infer precision solely from the string representation.

---

## Time Range

Time ranges are represented by `start` and `end`.

Each endpoint is itself a Time Object.

This allows different precision at each endpoint.

Example:

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

## Sorting

Applications SHOULD sort Events using the following precedence:

1. Temporal value
2. Temporal precision
3. Core `order`
4. Implementation-defined tie breaker

When temporal values are equal, lower precision SHOULD appear before higher precision.

Example:

```text
2027
2027-05
2027-05-18
```

---

## Calendar Systems

The History Extension allows temporal values to be associated with calendar systems.

The definition of calendar systems is outside the scope of this specification.

Calendar-specific semantics may be defined by separate Extensions.

---

## Relationship to the Core

The Core defines Events, Entities, and Relations.

The History Extension adds temporal representation without modifying the Core data model.

Applications that do not understand the History Extension should still be able to process Core objects safely.

---

## Relationship to Other Extensions

The History Extension is intended to coexist with independent Extensions.

Examples include:

- Calendar Extension
- Loop Extension
- Worldline Extension
- Probability Extension
- Narrative Extension

Each Extension is responsible for its own semantics.

---

## Out of Scope

The following concepts are intentionally excluded from the History Extension.

### Approximate Time

Examples:

- Around 500 BCE
- Approximately 1900
- Early 18th century

---

### Relative Time

Examples:

- Three days later
- Before Event A
- After Entity B was created

---

### Seasons and Named Periods

Examples:

- Spring
- Rainy season
- Renaissance
- Postwar period

These represent human interpretation of time rather than temporal values themselves.

---

### Narrative or Experienced Time

Examples:

- Character experience order
- Narrative sequence
- Flashbacks

---

### Parallel Timelines

Examples:

- Alternate histories
- Parallel universes
- Branch identifiers

---

### Time Loops

Examples:

- Loop counters
- Iteration numbers

---

### Probability and Confidence

Examples:

- Confidence score
- Probability distribution
- Competing hypotheses

Temporal uncertainty about whether a statement is true belongs to another Extension.

---

### Dataset History

Examples:

- Revision history
- Import timestamps
- Synchronization metadata

These describe the dataset rather than the represented world.

---

## Non-goals

The History Extension does not attempt to model every possible concept of time.

Its purpose is to standardize common temporal representation while allowing specialized temporal semantics to evolve independently through separate Extensions.

This separation keeps E2R modular, extensible, and interoperable.
