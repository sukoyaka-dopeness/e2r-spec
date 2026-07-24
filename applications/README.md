# Applications

This directory describes applications built on top of the E2R specification.

Rather than defining a single monolithic application, E2R is intended to support an ecosystem of independent applications that share a common E2R Dataset.

Each application focuses on a particular task such as editing, visualization, generation, or analysis while remaining compatible through the common E2R data model.

## Design Goals

Applications should:

- Share the same E2R Dataset.
- Preserve unknown Extensions.
- Ignore unsupported Extensions without failing.
- Exchange datasets through JSON.
- Remain independent from one another.

This allows users to build workflows by combining multiple specialized applications.

## Application Categories

Applications generally fall into several categories.

### Editors

Applications that create or modify E2R datasets.

Examples:

- Timeline editor
- Worldbuilding editor
- Character generator

### Viewers

Applications that visualize datasets without changing their structure.

Examples:

- Timeline
- Relationship diagram
- Feature space view

### Analyzers

Applications that derive new information from datasets.

Examples:

- Embedding generation
- Semantic analysis
- Knowledge graph analysis
- AI-assisted exploration

### Importers / Exporters

Applications that exchange information with external systems.

Examples:

- LLM integration
- Citation import
- Web archive import
- Knowledge base synchronization

## E2R Ecosystem

Applications are intended to work together rather than replace one another.

Example workflow:

Character Generator
→ Worldbuilding
→ Timeline
→ Relationship Diagram
→ Feature Space Editor

Applications may also exchange information with external AI systems, search engines, databases, or other software through the shared E2R Dataset.

The E2R Dataset therefore acts as a common Intermediate Representation (IR) connecting applications while allowing each application to evolve independently.

## Current Application Ideas

Current application proposals are documented in the files contained in this directory.

Each document describes one possible application built on top of E2R.

The list is intentionally open-ended, and additional applications may be added as the ecosystem grows.
