# History Extension

## Purpose

The History Extension provides standardized temporal information for E2R datasets.

Its purpose is to represent when Events occur and how they are ordered in time, while remaining independent from any particular application domain.

The History Extension extends the Core without changing the meaning of Core objects.

---

## Design Principles

The History Extension follows the same philosophy as the E2R Core.

- Build upon the Core rather than replace it.
- Standardize only concepts that are broadly applicable.
- Keep semantic assumptions to a minimum.
- Allow unknown fields and future extensions.
- Remain independent from presentation.

---

## Scope

The History Extension standardizes common temporal concepts, including:

- Absolute date and time
- Time ranges
- Approximate or uncertain dates
- Relative temporal relationships
- Calendar systems
- Temporal precision (granularity)

These concepts are expected to be useful across many application domains, including:

- Historical datasets
- Timeline applications
- Worldbuilding
- Knowledge bases
- Investigation systems
- OSINT
- Citation graphs

---

## Temporal Concepts

The extension may define representations for:

### Absolute Time

Specific dates or timestamps.

Examples:

- 2025
- 2025-07
- 2025-07-24
- 2025-07-24T14:35:00Z

---

### Time Range

Events or entity existence spanning a period.

Examples:

- 1914–1918
- January–March 2025

---

### Approximate Time

Dates that are known only approximately.

Examples:

- Around 500 BCE
- Early 18th century
- Late summer

---

### Relative Time

Time expressed relative to another event.

Examples:

- Three days later
- Before Event A
- After Entity B was created

---

### Calendar Systems

Support for multiple calendar systems.

Examples include:

- Gregorian
- Julian
- Japanese era
- Lunar calendars
- Fictional calendars

The History Extension does not define individual calendar systems.
It provides a mechanism for identifying them.

---

### Temporal Granularity

Different datasets may represent time with different precision.

Examples include:

- Year
- Month
- Day
- Hour
- Minute
- Second

Applications should not assume identical precision across all temporal values.

---

## Out of Scope

The following concepts are intentionally outside the scope of the History Extension.

These concepts are domain-specific and should be defined by separate Extensions when needed.

### Loop Time

Repeated timelines.

Examples:

- Time loops
- Loop counters
- Iteration numbers

---

### Worldline Management

Multiple concurrent or branching timelines.

Examples:

- Alternate histories
- Parallel universes
- Branch identifiers

---

### Subjective or Experienced Time

Temporal order as experienced by an observer.

Examples:

- Character memory order
- Narrative order
- Player progression

---

### Probability and Confidence

Uncertainty regarding whether a temporal assertion is correct.

Examples:

- Confidence score
- Probability distribution
- Competing hypotheses

Temporal uncertainty about *when* something occurred belongs in the History Extension.

Uncertainty about *whether the statement itself is true* belongs in another Extension.

---

### Dataset Version History

The evolution of the dataset itself.

Examples:

- Revision history
- Import timestamps
- Synchronization metadata

These describe the dataset rather than the represented world.

---

## Relationship to the Core

The Core defines Events, Entities, and Relations.

The History Extension provides temporal information for those objects.

Applications that do not understand the History Extension should still be able to process the Core safely.

---

## Relationship to Other Extensions

The History Extension is designed to coexist with future Extensions.

Examples include:

- Loop Extension
- Worldline Extension
- Probability Extension
- Calendar Extension
- Narrative Extension

Applications may combine these Extensions as needed.

---

## Non-goals

The History Extension does not attempt to model every possible concept of time.

Its goal is to standardize the temporal concepts that are broadly useful across many domains while leaving specialized semantics to independent Extensions.

This separation keeps the E2R ecosystem modular, extensible, and interoperable.
