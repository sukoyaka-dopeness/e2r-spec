# Dataset Identity

This document explores the concept of dataset identity within the E2R ecosystem.

Unlike the Core Specification, this document is exploratory and non-normative.

Nothing in this document is required by E2R.

---

# Motivation

As E2R datasets become increasingly interconnected, a dataset may no longer be treated as a simple JSON file.

Instead, a dataset may be regarded as an independent object with its own identity, history, and lifecycle.

A stable identifier enables applications to recognize a dataset across storage systems, devices, and networks.

---

# Identity

A dataset identity uniquely distinguishes one dataset from another.

The identity is independent of:

- filename
- storage location
- transport protocol
- serialization format

Changing any of these does not necessarily create a new dataset.

---

# Dataset Identifier

Applications may assign a persistent identifier to newly created datasets.

One possible implementation is a UUID.

Other globally unique identifier schemes may also be appropriate.

The Core Specification intentionally does not require any particular identifier format.

An implementation may choose to generate an identifier automatically when a new dataset is created.

This allows every dataset to possess a stable identity from the beginning of its lifecycle.

---

# Stability

A dataset identifier should remain stable throughout the lifetime of the dataset.

Ordinary editing does not normally change its identity.

For example:

- adding Events
- modifying Entities
- editing Relations
- changing Extensions

These operations produce a new version of the same dataset rather than a different dataset.

---

# Version

Identity and version are independent concepts.

A dataset may evolve through many versions while retaining the same identity.

Applications may therefore distinguish between:

- dataset identity
- dataset version

---

# Branching

Independent evolution introduces new questions.

When a dataset is branched, several strategies are possible.

Examples include:

- preserving the original identity
- assigning a new identity
- recording lineage between parent and child datasets

Different applications may adopt different policies.

The Core does not define branching behavior.

---

# Federation

Dataset identity becomes increasingly valuable in federated environments.

Independent repositories may exchange datasets without relying on filenames or storage paths.

Identity therefore provides a stable reference across organizational boundaries.

---

# Peer-to-Peer Systems

In decentralized systems, there may be no central authority responsible for dataset management.

A persistent identity enables peers to:

- recognize datasets
- detect duplicates
- exchange updates
- maintain lineage

Identity therefore becomes an important foundation for distributed knowledge systems.

---

# Deterministic Applications

Applications may optionally reuse a dataset identifier as a deterministic seed.

Possible examples include:

- graph layout
- visualization
- procedural generation
- benchmark generation

Using the identifier in this way does not change its primary role as an identity.

---

# Human-Friendly Names

Identity is not intended for human communication.

Applications should continue to provide human-readable metadata such as titles and descriptions.

Users interact primarily with names.

Applications interact primarily with identifiers.

---

# Future Possibilities

Future E2R ecosystems may build additional functionality upon stable dataset identities.

Possible examples include:

- distributed synchronization
- branch management
- provenance tracking
- citation networks
- dataset federation
- procedural generation
- deterministic visualization

These possibilities remain outside the current Core Specification.

---

# Research Questions

- What defines the identity of a dataset?
- Should branching preserve or replace identity?
- How should lineage be represented?
- Which identifier schemes are most appropriate?
- How can identity support decentralized knowledge ecosystems?

These questions remain open for future research.
