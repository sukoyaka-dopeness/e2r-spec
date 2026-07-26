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
