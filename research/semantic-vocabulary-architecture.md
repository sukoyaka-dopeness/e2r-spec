# Semantic Vocabulary Architecture

## Overview

E2R Core intentionally does not define semantic meaning.
Semantic interpretation is provided by Extensions and by applications built on top of E2R.

This document proposes a common architecture for vocabulary management, semantic dictionaries, and external knowledge integration.
Its purpose is to allow multiple E2R applications to share semantic resources while remaining independent.

---

# Design Goals

The architecture should satisfy the following goals.

- Core remains application-independent.
- Vocabulary can evolve independently of datasets.
- Third-party vocabularies can be integrated.
- Different applications can reuse the same vocabulary sets.
- Users can extend vocabularies without modifying the original dictionaries.
- Unknown vocabulary information must always be preserved.

---

# Vocabulary Layers

Vocabulary exists in multiple layers.

```
Application Vocabulary
        ▲
User Vocabulary
        ▲
Dataset Vocabulary
```

Applications search these layers in the following order.

1. Dataset Vocabulary
2. User Vocabulary
3. Application Vocabulary

This allows datasets to override user preferences while still falling back to shared dictionaries.

---

# Vocabulary Set

A Vocabulary Set is a collection of semantic terms intended for a particular domain.

Examples include:

- Japanese History
- World History
- Fantasy
- Science
- Psychology
- Politics
- Biology
- Music
- TRPG

Applications may load multiple Vocabulary Sets simultaneously.

For example:

```
Fantasy
+
Japanese History
```

---

# Canonical Terms

Every concept should have exactly one canonical term.

The canonical term represents the semantic center of the concept.

Example:

```
canonical:
    influence
```

Canonical terms should preferably originate from a thesaurus rather than Wikidata.

The thesaurus defines natural language concepts more consistently than a knowledge graph.

---

# Aliases

Aliases represent alternative expressions of the same concept.

Examples:

```
canonical:
    influence

aliases:
    influenced by
    inspired by
    affected by
    shaped by
```

Aliases may originate from:

- Wikidata labels
- thesaurus synonyms
- user-defined synonyms
- application-specific terminology

---

# External Knowledge Sources

Vocabulary Sets may import information from multiple external sources.

Examples include:

- Wikidata
- Japanese WordNet
- Princeton WordNet
- ConceptNet

Each source contributes different kinds of information.

## Wikidata

Useful for:

- identifiers
- multilingual labels
- descriptions
- relations
- categories

## WordNet

Useful for:

- canonical terms
- synonym groups
- semantic hierarchy

---

# Vocabulary Import Workflow

Instead of importing every available term, vocabulary should be generated on demand.

Recommended workflow:

```
Application Theme
        │
        ▼
LLM proposes candidate vocabulary
        │
        ▼
Vocabulary Utility downloads
only required entries
        │
        ▼
Vocabulary Set is created
```

This avoids downloading millions of unnecessary terms.

---

# Vocabulary Utility

A dedicated utility should manage vocabulary creation.

Responsibilities include:

- importing Wikidata entries
- importing thesaurus entries
- creating Vocabulary Sets
- merging dictionaries
- updating dictionaries
- exporting dictionaries
- validating dictionaries

This utility is intended to become a shared component for all E2R applications.

---

# Relation Vocabulary

Relationship Graph requires semantic labels for relations.

Examples:

- parent
- child
- spouse
- friend
- rival
- mentor
- member
- influenced by

Most of these can be imported from Wikidata Properties.

---

# Quadrant Vocabulary

Quadrant applications require semantic axis labels.

Examples:

- good / evil
- order / chaos
- reason / emotion
- introversion / extroversion
- conservative / progressive

Most of these are expected to originate from thesaurus resources.

---

# Domain Vocabulary Sets

Vocabulary Sets should remain relatively small.

Instead of downloading all available vocabulary, applications should load only the required domains.

For example:

```
Japanese History
≈ a few hundred terms

Fantasy
≈ a few hundred terms

Psychology
≈ a few hundred terms
```

This keeps storage requirements manageable.

---

# User Vocabulary

Users should be able to extend vocabularies during normal application use.

Newly created vocabulary should normally be stored in User Vocabulary rather than inside datasets.

Advantages include:

- reusable across datasets
- avoids duplicated information
- personalized terminology
- easier maintenance

Automatic vocabulary learning may be introduced in the future.

---

# Dataset Vocabulary

Datasets may optionally contain their own vocabulary.

This layer is intended for:

- project-specific terminology
- fictional worlds
- historical naming conventions
- temporary semantic overrides

Dataset Vocabulary should remain relatively small.

---

# Semantic Extension

Vocabulary Sets are expected to become one of the primary responsibilities of the Semantic Extension.

Possible future capabilities include:

- canonical concepts
- aliases
- multilingual labels
- semantic categories
- relation labels
- quadrant axes
- ontology references
- external identifiers

---

# Long-term Vision

The long-term goal is a shared semantic ecosystem.

```
Vocabulary Utility
        │
        ├── Wikidata
        ├── WordNet
        ├── ConceptNet
        ▼
Vocabulary Sets
        ▼
Semantic Extension
        ▼
NarrativeLine
Relationship Graph
Quadrant
Random Dataset Generator
Future E2R Applications
```

This architecture allows every application in the E2R ecosystem to share a common semantic foundation while remaining modular, extensible, and independent.
