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

When multiple Events have identical timestamps, applications are encouraged to use additional ordering information such as the History Extension's `order` field.

Applications MAY regenerate ordering values provided the relative ordering is preserved.

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

Applications are encouraged to assign a persistent `metadata.datasetId` to datasets.

This identifier should remain stable throughout normal editing.

Forking, cloning, or importing datasets may result in a new dataset identifier according to application policy.

---

# Unknown Extensions

Applications should preserve unknown Extensions whenever practical.

Applications may ignore Extensions they do not understand.

Unknown Extensions should not prevent a dataset from being opened or edited.

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
