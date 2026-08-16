# E2R Session 0008

## Date

2026-07-28

---

# Theme

Future Ecosystem Design

This session focused on long-term architectural considerations beyond the current Core specification and the NarrativeLine MVP.

The discussions intentionally explored future directions while avoiding unnecessary expansion of the Core.

---

# Historical Ecosystem

The concept of a historical ecosystem was introduced.

Rather than assuming a single authoritative historical dataset, E2R is expected to support an ecosystem in which multiple datasets coexist.

Examples include:

- Academic history
- National history
- Local history
- Religious traditions
- Historical fiction
- Alternate history
- Fantasy worlds
- AI-generated hypotheses

These datasets may describe the same people, places, and events while preserving different interpretations.

The session concluded that viewpoint diversity is a fundamental characteristic of the ecosystem rather than an exception.

---

# Viewpoint-dependent Confidence

The discussion concluded that confidence should not be considered an absolute property.

Instead, confidence belongs to the interpretation represented by a dataset.

Equivalent Nodes connected through aliasAs may therefore have different confidence values.

This enables multiple interpretations of the same historical event to coexist without forcing consensus.

---

# Dataset Identity

Future E2R applications are expected to load multiple datasets simultaneously.

This introduces the possibility of identifier collisions.

The session concluded that:

- Core object identifiers remain local to a Dataset.
- Global identifiers should not become part of the Core specification.
- Applications may construct global identifiers using datasetId and local object identifiers.

This preserves the simplicity of the Core while allowing future applications to support merging and comparison.

---

# datasetId

The role of metadata.datasetId was discussed.

The dataset title is intended for human-readable presentation and may change over time.

The datasetId is intended to remain stable throughout the lifetime of the dataset.

A UUID was identified as a suitable implementation strategy.

Whether datasetId should remain optional or become recommended remains an open question.

---

# NarrativeLine MVP

The NarrativeLine MVP remains intentionally limited to editing a single Dataset.

However, the application architecture should avoid assumptions that permanently restrict future multi-dataset support.

Examples include:

- DatasetService abstraction
- Stable dataset identifiers
- Separation between Dataset management and editing logic

These decisions are expected to reduce future migration costs.

---

# Research Documents

Two new research documents were added.

- research/exploratory/historical-ecosystem.md
- research/exploratory/dataset-identity.md

These documents record exploratory architectural ideas and are not part of the normative specification.

---

# Future Research

The following topics were identified for future investigation.

- Dataset Lineage
- Semantic Confidence
- Distributed Dataset Ecosystem
- Reference Architecture

---

# Next Session

The next session will shift from specification work to implementation design.

The focus will be the implementation architecture of NarrativeLine, including project structure, component organization, state management, and service implementation.
