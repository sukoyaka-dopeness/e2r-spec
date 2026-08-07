# Application Recommendations

This document provides non-normative recommendations for applications built on top of the E2R Specification.

Unlike the Core Specification, the recommendations in this document are not requirements.
Applications are free to adopt different behaviors when appropriate.

---

# Purpose

The Core Specification defines interoperable data structures.

This document describes behaviors that are recommended because they improve usability, interoperability, or implementation consistency.

---

# Timeline Ordering

Applications should present Events in a stable and predictable order.

When multiple Events have the same temporal value, precision, and comparison basis, applications are encouraged to use the History Extension's `temporalOrder` field when it is present.

Applications may regenerate `temporalOrder` values provided the represented relative temporal order is preserved. They should not use `temporalOrder` to reverse chronological order that is already established by the recorded temporal fields.

Custom presentation order is view-specific information and should not be stored in `temporalOrder`.

---

# Unknown Dates

Applications should define a consistent policy for Events without known dates.

A recommended default is:

- Events with known dates appear first.
- Events with unknown dates appear afterwards.

Alternative behaviors are permitted if they remain predictable to users.

---

# Time Precision

Applications should respect the precision recorded by the History Extension.

When displaying Events with different precisions, a recommended ordering is:

- year
- month
- day
- hour
- minute
- second

Applications should avoid presenting higher-precision values that are not actually known.

An omitted field should remain omitted. In particular, an application should not treat a date-only value as midnight or add zero-valued clock fields merely to use a date-time library.

---

# History Editing Interface

Applications may use progressive disclosure to keep ordinary date entry simple while still supporting precise clock and Time Zone information.

A recommended Event editing layout is:

- keep year, month, and day fields readily visible
- place hour, minute, second, and Time Zone controls in an expandable section
- keep that section collapsed by default for new Events and date-only Events
- expand that section automatically when the Event already contains clock or Time Zone information
- preserve hidden values when the section is collapsed
- require an explicit action before clearing existing clock or Time Zone information

The expandable section is an interface convenience only. Whether it is open or closed is application state and should not be stored in the E2R Dataset.

Applications should use a searchable IANA Time Zone selector. Abbreviations such as `JST`, `EST`, and `CST` should not be offered as stored Time Zone values because they can be ambiguous.

The numeric `offset` should normally be derived from the selected IANA Time Zone and Civil Time. Applications may hide it during ordinary editing, but should make ambiguity or inconsistency visible when user action is required.

---

# Time Preview

Applications are encouraged to provide a read-only preview of an Event's recorded time in one or more useful representations:

- the stored Event-local Civil Time
- UTC
- the current user's Time Zone

A preview is derived information. Opening it, changing its display Time Zone, or switching between preview representations should not modify the stored Time Object.

Preview labels should identify the representation and Time Zone being shown. Applications should also make the recorded precision clear and should not display invented precision. A date-only value, for example, should not receive a UTC or user-zone clock preview by assuming midnight.

When the recorded information is insufficient to resolve an Instant, the application should explain that UTC and user-zone previews are unavailable rather than assigning a default Time Zone.

---

# Time Zone Editing and Conversion

Applications should distinguish two operations that can otherwise appear deceptively similar.

## Reinterpret Civil Time

This operation changes the Time Zone interpretation while keeping the stored calendar and clock fields unchanged.

For example, reinterpreting `09:00` from `Asia/Tokyo` to `Europe/London` keeps `09:00` visible but changes the represented Instant.

Applications should describe this operation in terms such as "Change Time Zone without changing local time" and preview its effect before applying it.

## Convert While Preserving the Instant

This operation changes the Time Zone and recalculates the calendar and clock fields so that the represented Instant remains unchanged.

For example, converting an Event from `Asia/Tokyo` to `Europe/London` may change both its clock fields and its calendar date.

Applications should describe this operation in terms such as "Convert to another Time Zone" or "Keep the same moment" and show the resulting Civil Time before applying it.

Selecting a different Time Zone should not silently choose between reinterpretation and conversion. The application should request or clearly establish the user's intent, especially when existing values would change.

For a newly entered Civil Time that has no previous Time Zone, selecting a Time Zone establishes its interpretation; it is not a conversion from an existing Instant.

---

# Daylight-saving Transitions

When a local time occurs twice during a backward daylight-saving transition, applications should ask the user which occurrence is intended and derive the corresponding numeric offset.

When a local time does not exist during a forward transition, applications should explain the conflict and request a corrected value. They should not silently move the Event to a different time.

If the stored Time Zone and offset disagree with the rules currently available to the application, both values should be preserved until the user intentionally resolves the inconsistency.

---

# Automatic Core Object Creation

Applications MAY automatically create Core Objects.

Examples include:

- generating placeholder Entities
- importing external data
- AI-assisted dataset generation
- converting other formats into E2R

Automatically generated objects should be indistinguishable from manually created Core Objects.

---

# Automatic Relation Creation

Applications MAY automatically create Relations.

Examples include:

- connecting an Event to an Entity selected by the user
- generating structural links during import
- creating placeholder Relations while editing

Automatically generated Relations should represent structural connections only.

Applications should avoid introducing additional semantics unless explicitly requested.

---

# Identifier Generation

Applications are encouraged to generate stable identifiers.

Recommended formats include:

- UUID Version 7
- ULID

Applications should preserve existing identifiers whenever practical.

---

# Dataset Identity

Applications that create a new Dataset are encouraged to assign a persistent
`extensions.metadata.datasetId`.

This identifier should remain stable throughout normal editing.

Importing or opening a Dataset should not by itself add, replace, or regenerate
its `datasetId`. A Dataset without a `datasetId` remains valid. Applications may
use a separate, non-persistent internal key to distinguish open Datasets.

Ordinary export and save-as operations should preserve the existing
`datasetId`. An explicit operation that creates a deliberately independent copy
may assign a new value. Branch, fork, lineage, and provenance behavior should
be defined separately rather than inferred from file operations.

---

# Dataset Titles and Export Filenames

Applications may use `extensions.metadata.title` as the human-readable Dataset
title. An absent title should remain absent; a displayed placeholder such as
`Untitled` should not be stored unless the user explicitly chooses that value.

An application may derive a suggested export filename from the Dataset title.
The suggestion should remain application-independent: applications should not
automatically append their own name or a view-specific term such as `Timeline`,
`Graph`, or `Map`.

If the user-provided title already contains such a term, the application should
preserve it rather than silently rewriting the title's meaning.

When no title is available, applications should use a neutral fallback such as
`e2r-dataset.e2r.json` or a name derived from part of `datasetId`.

Filenames and filesystem paths are application state. They should not be stored
as Metadata Extension values, treated as Dataset identity, or used to replace
`datasetId`.

---

# Unknown Extensions

Applications should preserve unknown Extensions whenever practical.

Applications must ignore Extensions they do not understand when reading a
Dataset.

Unknown Extensions should not prevent a Dataset from being opened or edited.

---

# Extension Preservation

Applications should avoid modifying Extension data they do not own.

When rewriting datasets, applications should preserve unrecognized Extension data unchanged whenever possible.

---

# Derived Data

Applications may generate derived information that is not part of the dataset itself.

Examples include:

- search indexes
- graph layouts
- rendering caches
- embedding indexes
- timeline caches

Derived data should not be required to interpret an E2R dataset.

---

# Validation

Applications may implement stricter validation than the Core Specification.

However, application-specific validation should be clearly distinguished from Core validation.

A dataset may be valid according to the Core Specification while failing application-specific checks.

---

# User Experience

Applications are encouraged to optimize their own editing workflows.

Different applications may expose completely different user experiences while remaining interoperable through the same Core Specification.

Interoperability is more important than interface consistency.

---

# Philosophy

The E2R Specification standardizes datasets.

Applications standardize workflows.

Innovation in application design is encouraged as long as datasets remain interoperable.
