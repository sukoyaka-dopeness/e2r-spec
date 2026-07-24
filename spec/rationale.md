# Design Rationale

This document explains the reasoning behind the architectural decisions of the E2R Core specification.

It complements `philosophy.md` by documenting why the Core is designed as it is and why certain capabilities are intentionally delegated to Extensions.

---

# Minimal Core

The Core is intentionally kept as small as possible.

Every feature added to the Core increases long-term maintenance costs, implementation complexity, and compatibility requirements.

A feature should become part of the Core only when interoperability cannot reasonably be achieved through an Extension.

Whenever a feature can be standardized independently, it should be defined as an Extension rather than expanding the Core.

---

# Structural Rather Than Semantic

The Core standardizes structure rather than domain meaning.

Its responsibility is limited to representing:

- existence
- occurrence
- connection

The Core intentionally avoids defining what those structures mean within a particular domain.

Domain semantics belong to Semantic Extensions.

This separation keeps the Core reusable across many different application domains.

---

# Self-contained Dataset

The Core assumes that a Dataset is self-contained.

A conforming Core implementation should be able to exchange, validate, and interpret a Dataset without requiring external Dataset dependencies.

Reasons:

- portability
- reproducibility
- offline usability
- predictable interoperability

Cross-Dataset references may be standardized by future Extensions, but they are intentionally excluded from the Core.

---

# Metadata outside the Core

Metadata is intentionally excluded from the Core.

Examples include:

- title
- description
- author
- license
- language
- dataset identifier
- generating application

These fields are useful in many applications, but they are not required to exchange the structural information represented by E2R.

Keeping Metadata as an Extension allows different ecosystems to adopt different metadata models without fragmenting the Core.

---

# Why Time Is an Extension

Time is important for many applications but unnecessary for others.

Some datasets describe logical structures, conceptual knowledge, taxonomies, or other information that has no temporal dimension.

Moving temporal representation into the History Extension allows the Core to remain independent of chronology while still providing a common temporal model for applications that require it.

---

# Why a Time Object

The History Extension uses a Time Object instead of a single date field.

This design supports:

- partial dates
- explicit precision
- time ranges
- future temporal extensions

without requiring incompatible changes to the overall data model.

---

# Why Precision Is Explicit

Temporal precision is represented explicitly rather than inferred from the string representation.

This avoids ambiguity and allows applications to distinguish between values such as:

- 2027
- 2027-05
- 2027-05-18

without relying on parsing heuristics.

---

# Why Time Has No Semantics

The History Extension represents temporal values rather than their interpretation.

Examples intentionally excluded include:

- seasons
- historical eras
- approximate dates
- relative time
- narrative order
- parallel timelines
- time loops

These concepts represent temporal semantics rather than temporal structure and may be standardized by separate Extensions.

---

# Why Relations Have No Type

Earlier drafts considered including a semantic `type` field in every Relation.

Examples included concepts such as:

- parent
- participant
- member
- located_at
- causes

Further discussion concluded that these values describe the meaning of a connection rather than the connection itself.

The Core therefore represents only that two Core Objects are connected.

The meaning of that connection belongs to Semantic Extensions.

This keeps Relation consistent with the responsibilities of Entity and Event.

---

# Reserved Properties

The Core reserves only the minimum set of top-level properties required for interoperability.

Current reserved properties are:

- version
- entities
- events
- relations

Additional reserved properties should only be introduced when they provide clear interoperability benefits.

---

# Forward Compatibility

Unknown fields MUST be ignored.

Applications should not reject a Dataset simply because it contains fields or Extensions they do not recognize.

This enables:

- forward compatibility
- independent Extension development
- gradual ecosystem evolution

---

# Dataset-level Extensions

Some information applies to an entire Dataset rather than individual Core Objects.

Examples include:

- calendar definitions
- unit systems
- localization
- metadata

For this reason, Dataset-level Extensions are supported.

This avoids overloading Entity, Event, or Relation definitions with information that belongs to the Dataset itself.

---

# Human-readable Design

E2R is intended to be human-readable as well as machine-readable.

Design choices therefore favor:

- explicit structure
- predictable naming
- stable architecture
- simple implementation

Readability is considered an important aspect of long-term maintainability.

---

# Extension-first Architecture

Whenever practical, new functionality should be introduced through Extensions rather than expanding the Core.

This allows:

- experimentation
- domain-specific models
- independent evolution
- backwards compatibility

The Core should remain stable while Extensions evolve around it.

---

# Future Evolution

The Core intentionally leaves room for future standard Extensions, including but not limited to:

- Metadata Extension
- History Extension enhancements
- Calendar Extension
- Semantic Extension vocabularies
- Dataset Link Extension

These are not part of the Core unless future interoperability requirements demonstrate that they should be standardized.
