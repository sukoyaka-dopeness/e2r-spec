# E2R Extension Index

## Registered Stable Extensions

The normative Stable Extension registry is maintained in
[`../spec/extension-naming.md`](../spec/extension-naming.md).

The currently registered Stable Extensions are:

- [Metadata Extension](metadata-extension.md) (`metadata`, version `1.0.0`)
- [History Extension](history-extension.md) (`history`, version `1.0.0`)

The existence of an Extension document does not by itself make an Extension
Stable.

## Candidate and Under-Review Extensions

The following Extensions have design documents or proposals but are not
registered as Stable:

- [Coordinate Extension Draft](coordinate-extension-draft.md)
  (`draft.github.sukoyaka-dopeness.coordinate`, draft `0.1.0`)
- [Lineage Extension Draft](lineage-extension-draft.md)
  (`draft.github.sukoyaka-dopeness.lineage`, draft `0.1.0`)
- [Coordinate Extension Prototype](coordinate-extension.md)
  (`experimental.github.sukoyaka-dopeness.coordinate`, frozen prototype
  `0.1.0`; retained as the migration source and interoperability baseline)
- [Layout Extension](layout-extension.md)
- [Dictionary Extension](dictionary-extension.md)
- [Specification Extension](specification-extension.md)
  (`draft.github.sukoyaka-dopeness.specification`, draft `0.1.0`)

## Future Candidate Extensions

- Genealogy Extension
- Geography Extension
- Organization Extension
- Psychology Extension
- Magic System Extension
- Citation / Source responsibility (Gate 3 research baseline; final Extension
  partition and identifier deferred)
- Evidence responsibility (OSINT candidate; distinct from weak Citation)
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

### Source/Citation checkpoint

Gate 3 established a non-normative responsibility baseline for the ordinary
operation "record this source for this Event": an identified Source plus a
weak Citation association to the identified target. The association does not
imply Evidence, Claim, Assessment, Provenance, truth, or confidence.

This checkpoint does not register a Citation or Source Extension, choose an
identifier, define a payload, or decide whether Source and Citation belong to
one Extension or separate Extensions. The candidate index therefore records
the responsibility boundary without treating a final Extension as available.

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
