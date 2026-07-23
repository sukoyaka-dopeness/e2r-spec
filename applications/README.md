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

The only interoperability requirement is that Core-compatible datasets remain valid E2R datasets.
