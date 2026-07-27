# Future Directions

This document records architectural ideas that emerged during the design and implementation of E2R applications.

The ideas described here are intentionally non-normative.
They are not part of the Core Specification and should not be interpreted as future commitments.

Some of them may eventually become Extensions, application guidelines, or remain implementation-specific.

---

# E2R as a Model of Change

Although E2R was originally designed for timelines and relationship graphs, its underlying model is more general.

An Entity represents something that exists.

An Event represents a change.

A Relation represents a connection.

This abstraction allows E2R to describe not only historical events, but also software development, workflows, UI interactions, datasets, and many other domains where change is important.

---

# Self-Descriptive Datasets

An E2R Dataset may itself become the subject of another E2R Dataset.

Possible examples include:

- dataset creation
- editing history
- merge history
- migration history
- review history
- publication history

These describe the lifecycle of the dataset itself rather than the domain represented by the dataset.

This concept is intentionally outside the current Core Specification.

A future Dataset Provenance Extension may define a standardized representation.

---

# Reference Applications

Reference applications play an important role in validating the specification.

Rather than serving only as examples, they function as practical experiments that reveal missing abstractions, unnecessary complexity, and opportunities for improvement.

For example:

- NarrativeLine validates timeline editing and History Extension.
- Relationship Graph validates Relation editing and graph visualization.

Application development provides continuous feedback to the specification.

---

# Applications Edit Only What They Understand

Applications should preserve unknown Extensions whenever possible.

More importantly, applications should edit only the information they understand.

An application is not expected to interpret or modify unknown Extension data.

This principle enables interoperability between specialized applications without requiring every application to understand every Extension.

---

# Separation Between Domain History and Dataset History

The history represented by a dataset and the history of the dataset itself are fundamentally different concepts.

For example:

- a historical event belongs to the represented world
- importing a CSV belongs to the dataset lifecycle

Future provenance-related Extensions should keep these concepts clearly separated.

---

# Self-Hosting Possibilities

Because E2R models change using Entity, Event, and Relation, it may eventually become possible to describe E2R applications, specifications, and even datasets using E2R itself.

Examples include:

- UI screen transitions
- software architecture
- development history
- specification evolution

Whether this becomes a recommended practice remains an open question.

# Future Directions

This document describes possible long-term directions for the E2R ecosystem.

Unlike the Core specification, these ideas are exploratory and do not define normative behavior.

Some of these concepts may eventually become Extensions, Applications, or Design Patterns.

---

# AI-assisted Design

E2R is intended to be both human-readable and AI-readable.

Future tools may assist in:

- Dataset validation
- Extension discovery
- Documentation generation
- Application generation
- Architecture analysis

Rather than replacing human designers, AI may serve as a collaborative assistant throughout the design process.

---

# Specification Evolution

As the E2R ecosystem grows, Extensions will inevitably evolve.

Future research may investigate:

- AI-assisted Extension design
- Automatic Extension decomposition
- Extension dependency analysis
- Backward-compatible evolution

The long-term goal is to improve interoperability while preserving stability.

---

# Architecture as Structured Data

Software architecture itself may be represented as E2R datasets.

Applications may describe:

- Views
- Services
- Models
- States
- Actions
- Dependencies
- State transitions

Representing architecture as structured data enables visualization, analysis, documentation, and AI-assisted implementation.

---

# Multi-view Editing

A single dataset may support multiple simultaneous editing environments.

Examples include:

- Timeline view
- Relationship graph
- Tree view
- Table view
- Architecture view
- Geographic view

Each view presents the same underlying data without changing the Core dataset.

---

# AI-native Data

Future applications may exchange information with AI systems more directly.

Possible research areas include:

- Context-aware serialization
- Partial dataset loading
- Semantic chunking
- AI-oriented indexing

These ideas aim to improve scalability without changing the Core data model.

---

# Knowledge Representation

Although E2R is intentionally minimal, future applications may build increasingly rich knowledge structures.

Examples include:

- Historical knowledge
- Scientific knowledge
- Software architecture
- Worldbuilding
- Investigation
- Academic citation networks

These domains share the common concept of entities, events, and relations while requiring different Extensions.

---

# Long-term Vision

The long-term vision of E2R is not to become a universal ontology.

Instead, E2R aims to provide a minimal, extensible foundation upon which many different representations of structured knowledge can coexist.

Applications, Extensions, and AI systems may evolve independently while remaining interoperable through the shared Core specification.
