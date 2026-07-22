# Design Rationale

This document records the reasoning behind the architectural decisions of the E2R Core specification.

It complements `philosophy.md` by explaining *why* the Core is designed the way it is.

---

# Minimal Core

The Core is intentionally kept as small as possible.

Every feature added to the Core increases long-term maintenance costs, implementation complexity, and compatibility requirements.

A feature should become part of the Core only when interoperability cannot reasonably be achieved through an Extension.

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

These fields are useful in many applications, but they are not required to exchange the semantic structure represented by E2R.

Keeping Metadata as an Extension allows different ecosystems to adopt different metadata models without fragmenting the Core.

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

Some information applies to an entire Dataset rather than individual Entities, Events, or Relations.

Examples include:

- calendar definitions
- unit systems
- localization
- metadata

For this reason, Dataset-level Extensions are supported.

This avoids overloading Entity or Event definitions with information that belongs to the Dataset itself.

---

# Human-readable Design

E2R is intended to be human-readable as well as machine-readable.

Design choices therefore favor:

- explicit structure
- predictable naming
- stable semantics
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
- Calendar Extension
- Dataset Link Extension

These are not part of the Core unless future interoperability requirements demonstrate that they must be standardized.
