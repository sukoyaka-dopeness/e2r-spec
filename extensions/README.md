# E2R Extension Index

## Standard Extensions

- Calendar Extension
- History Extension
- Semantic Extension
- Presentation Extension

## Candidate Extensions

- Genealogy Extension
- Geography Extension
- Organization Extension
- Psychology Extension
- Magic System Extension
- Citation Extension
- Evidence Extension (OSINT)
- Timeline Constraint Extension

## When to create a new Extension

An Extension should be created when a concept:

- introduces new semantics rather than extending an existing one,
- is useful independently,
- would otherwise increase the responsibility of another Extension.

For example:

- History Extension
- Loop Extension
- Worldline Extension
- Probability Extension
- Narrative Extension

## Planned Extensions

The following Extensions have been identified as future candidates but are intentionally excluded from the current specification.

### Calendar Extension

Defines calendar systems independently from temporal data.

Possible examples include:

- Gregorian calendar
- Julian calendar
- Japanese era calendar
- Fictional calendars

History Extension may reference Calendar Extension in future versions.

---

### Temporal Relation Extension

Defines relative temporal relationships between Events.

Examples include:

- before
- after
- during
- overlaps
- meets

These relationships describe constraints between multiple Events rather than properties of individual Events.

---

### Temporal Constraint Extension

Defines temporal constraints used for reasoning and validation.

Possible examples include:

- must occur before
- must occur after
- within N days
- simultaneous

This Extension is intended for scheduling, reasoning, simulation, and other advanced applications.
