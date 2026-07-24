# Evolution & Taxonomy App

## Overview

The Evolution & Taxonomy App visualizes how biological classifications evolve over time using the E2R data model.

Rather than treating taxonomy as a fixed hierarchy, the application represents classifications, revisions, discoveries, and scientific consensus as Events connected to organisms, taxa, publications, and researchers.

This approach preserves the historical evolution of scientific knowledge rather than only its latest state.

---

## Example Use Cases

- Browse historical changes in biological classification.
- Compare multiple competing taxonomic systems.
- Track when species were described, reclassified, or synonymized.
- Visualize the evolution of scientific consensus.
- Explore the history of phylogenetic hypotheses.
- Study the relationships between discoveries, publications, and taxonomic revisions.

---

## Example Data

Entities

- Species
- Genus
- Family
- Researcher
- Institution
- Publication
- Fossil specimen

Events

- Species described
- Taxonomic revision
- Species reclassified
- Synonym established
- Fossil discovered
- Phylogenetic study published

Relations

- classified_as
- reclassified_to
- described_by
- published_in
- based_on
- supports
- contradicts

---

## Potential Features

- Interactive taxonomy browser
- Evolutionary timeline
- Classification history explorer
- Comparison between alternative taxonomic systems
- Citation graph for taxonomic changes
- Lineage visualization
- Scientific consensus timeline

---

## Relationship to E2R

This application demonstrates one of the core design principles of E2R:

Knowledge changes over time.

Instead of storing taxonomy as immutable attributes, the application represents taxonomic decisions as Events.

A species is not permanently assigned to a classification; rather, scientists classify it at particular points in history, and those classifications may later change.

This event-oriented representation naturally preserves historical context while allowing multiple interpretations to coexist.

---

## Beyond Biology

Although inspired by biological taxonomy, the same approach can be applied to any evolving classification system.

Examples include:

- Geological classifications
- Archaeological cultures
- Linguistic family trees
- Chemical nomenclature
- Medical disease classifications
- Library classification systems
- Product categories

The application therefore serves as a general browser for evolving knowledge structures rather than being limited to biology.

---

## Status

Concept proposal.

The application highlights how E2R represents changing knowledge through Events instead of mutable attributes, making it suitable for domains where classifications evolve over time.
