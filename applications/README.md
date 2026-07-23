# E2R Applications

This directory contains ideas, concepts, and design notes for applications built on top of the E2R Core Specification.

These documents are **not part of the E2R Core Specification**.
They do not define interoperability requirements and are not normative.

Their purpose is to preserve application ideas developed during the design of E2R without affecting the stability of the Core.

## Categories

### Timeline & Sequence

Applications focused on chronological information.

- Timeline Editor
- Historical Timeline
- Project Timeline

### Graph & Relationship

Applications that visualize and edit relationships between objects.

- Relationship Graph
- Knowledge Graph
- Organization Chart
- Family Tree

### Investigation & Analysis

Applications for collecting, organizing, and analyzing information.

- Investigation Board
- OSINT Workspace
- Research Database
- Citation Graph

### Creative & Worldbuilding

Applications for authors, game designers, and worldbuilders.

- Worldbuilding Database
- Character Manager
- Story Timeline
- Lore Management

### Knowledge Management

Applications for structured information management.

- Personal Knowledge Base
- Wiki Editor
- Concept Graph
- Technical Documentation

### AI-assisted Applications

Applications that use Large Language Models (LLMs) to assist editing, analysis, and data creation.

See `llm-integration.md`.

## Design Principle

Applications are free to define their own user interface, workflows, editing features, storage methods, and supported Extensions.

## Composable Datasets

E2R datasets are designed to be independently created and later combined.

Different users, organizations, or applications may create separate datasets describing different parts of the same domain.

Applications may support combining these datasets into a larger graph or timeline while preserving their original information.

Possible examples include:

- Merging independent family trees into a larger genealogy
- Combining historical timelines from multiple researchers
- Integrating organization charts from different departments
- Building collaborative worldbuilding projects
- Connecting independent investigation datasets
- Expanding knowledge graphs over time

The E2R Core Specification does not define merge behavior or conflict resolution.

How datasets are merged, validated, or edited is the responsibility of Applications.



The only interoperability requirement is that Core-compatible datasets remain valid E2R datasets.
