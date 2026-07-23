# Dataset Browser Application

This document describes ideas for a dataset browser application built on the E2R Core Specification.

This document is informational and is not part of the E2R Core Specification.

## Purpose

The Dataset Browser Application allows users to explore E2R datasets without requiring editing capabilities.

The application is intended for browsing, searching, navigating, and understanding large datasets.

## Design Philosophy

Reading should be fast and intuitive.

Applications should present information from multiple viewpoints while preserving the underlying E2R dataset.

The browser should remain usable even for datasets containing millions of Core Objects.

## Navigation

Users may navigate by:

- Entity
- Event
- Relation
- Timeline
- Graph
- Search results
- References
- Collections

Applications may provide additional navigation methods.

## Search

Applications may support searching by:

- Identifier
- Name
- Alias
- Description
- Extension-defined fields

Search methods are application-specific.

## Views

Applications may provide multiple synchronized views.

Examples include:

- Entity view
- Event view
- Relation view
- Timeline
- Relationship graph
- Hierarchical view
- Map view
- Table view

The Core Specification does not define visualization methods.

## Dataset Exploration

Applications may provide tools for exploring dataset structure.

Examples include:

- Connected components
- Relation statistics
- Timeline summaries
- Entity summaries
- Extension summaries

## Dataset Integration

Applications may browse multiple datasets simultaneously.

Possible capabilities include:

- Opening multiple datasets
- Switching between datasets
- Viewing merged datasets
- Comparing datasets

Merge behavior is application-specific.

## Read-only Operation

Applications may operate entirely in read-only mode.

Editing capabilities are optional.

## LLM-assisted Workflow

Applications may generate prompts containing selected portions of a dataset for manual use with external Large Language Models.

Possible assistance includes:

- Dataset summaries
- Object explanations
- Relationship analysis
- Timeline explanations
- Navigation assistance

Returned JSON may optionally be imported into an editing application after validation.

The Dataset Browser itself is not required to support editing.

## Typical Use Cases

Examples include:

- Publishing historical archives
- Sharing worldbuilding projects
- Exploring knowledge graphs
- Reviewing investigation datasets
- Reading genealogy collections
- Browsing benchmark datasets

## Relationship to the Core

The Dataset Browser Application operates entirely on standard E2R Entities, Events, and Relations.

Navigation methods, visualization, indexing, caching, search algorithms, and user interface are application-specific.
