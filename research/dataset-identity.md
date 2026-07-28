# Dataset Identity

## Purpose

E2R Core defines identifiers that are unique within a single Dataset.

Future applications, however, may load multiple Datasets simultaneously.

This document explores how Dataset identity may be represented while keeping the Core specification minimal.

---

# Local Identity

Core Object identifiers are intentionally local.

For example,

```
Event
id = "event-001"
```

is only required to be unique within the Dataset that contains it.

The Core does not require globally unique identifiers.

---

# Why Dataset Identity Matters

Applications may eventually support operations such as:

- Loading multiple Datasets
- Comparing Datasets
- Merging Datasets
- Creating Dataset references
- Tracking Dataset lineage
- Forking Datasets

Without Dataset identity, object identifiers may collide.

Example:

Dataset A

```
Event
id = "event-001"
```

Dataset B

```
Event
id = "event-001"
```

Both identifiers are valid locally, but become ambiguous after merging.

---

# Dataset Identifier

A Dataset may own a globally unique identifier.

Example

```
metadata

datasetId
550e8400-e29b-41d4-a716-446655440000
```

Unlike the Dataset title, the Dataset identifier is intended to remain stable.

```
title
History of Europe

↓

European History
```

The title may change.

The datasetId should not.

---

# Global Identity

Applications may construct a globally unique identifier by combining:

- datasetId
- local object id

Example

```
datasetId

550e8400-e29b...

Event

id = event-001

↓

Global Identity

550e8400-e29b.../event-001
```

This global identifier belongs to the application layer rather than the E2R Core specification.

---

# Merge Strategy

When multiple Datasets are merged,

Applications should:

- preserve original object ids
- preserve original datasetIds
- avoid identifier collisions
- avoid rewriting local identifiers whenever possible

This allows merged Datasets to retain compatibility with their original sources.

---

# NarrativeLine MVP

NarrativeLine MVP edits a single Dataset.

Multiple Dataset support is intentionally outside the MVP scope.

However, the architecture should avoid assumptions that permanently limit the application to a single Dataset.

Examples include:

- generating a datasetId when creating a Dataset
- isolating Dataset management within DatasetService
- avoiding global assumptions about object identifiers

These decisions allow future versions to support loading and merging multiple Datasets without requiring major architectural changes.

---

# Future Directions

Possible future capabilities include:

- Dataset Browser
- Dataset references
- Cross-dataset links
- Dataset lineage
- Fork and merge workflows
- Distributed historical archives

These capabilities are expected to be implemented by applications rather than the E2R Core specification.
