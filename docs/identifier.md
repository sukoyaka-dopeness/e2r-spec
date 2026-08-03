# Identifier Recommendations

This document provides non-normative recommendations for identifiers used in E2R datasets.

The Core Specification intentionally places very few requirements on identifiers.
Applications are free to choose identifier formats that best suit their requirements.

---

# Core Requirement

The Core Specification only requires that:

- `id` MUST be a string.
- Identifiers SHOULD be unique within a dataset.

The Core Specification does not prescribe any particular identifier format.

---

# Opaque Identifiers

Applications should treat identifiers as opaque values.

Applications SHOULD NOT encode semantics into identifiers.

For example, applications should avoid identifiers such as:

```
event-2025-001
character-main
chapter-3-scene-4
```

Changing application structure should not require changing identifiers.

---

# Human-readable Labels

Applications should distinguish identifiers from human-readable labels.

Recommended examples include:

- `name`
- `title`
- aliases provided by Extensions

Users should interact with human-readable labels rather than identifiers whenever practical.

---

# Recommended Identifier Formats

The following formats are recommended because they are widely supported and stable.

## UUID Version 7

UUID v7 is recommended for most applications.

Advantages include:

- standardized format
- globally unique
- time-ordered
- efficient indexing
- broad library support

## ULID

ULID is also a suitable choice.

Advantages include:

- lexicographically sortable
- compact textual representation
- human-friendly

Applications may choose either UUID v7 or ULID depending on implementation requirements.

---

# Other Formats

The specification does not prohibit other identifier formats.

Examples include:

- UUID v4
- NanoID
- KSUID
- Snowflake IDs
- application-specific identifiers

Applications remain responsible for avoiding identifier collisions.

---

# Dataset Identity

Dataset identity is independent from object identifiers.

Applications are encouraged to assign a persistent `metadata.datasetId` to datasets.

This identifier should remain stable across edits to the same logical dataset.

Creating a copy or a fork of a dataset is application-defined and may result in a different dataset identifier.

---

# Identifier Lifetime

Identifiers should remain stable for the lifetime of an object.

Applications should avoid generating new identifiers simply because an object is renamed or edited.

Replacing an identifier effectively creates a different object.

---

# Interoperability

Applications should preserve identifiers whenever possible during:

- import
- export
- merge
- synchronization
- conversion

Stable identifiers improve interoperability between applications built on the E2R Specification.

---

# Philosophy

Identifiers exist to establish stable structural references.

They are intended for machines rather than users.

Applications should present human-readable information through appropriate labels while preserving stable identifiers internally.
