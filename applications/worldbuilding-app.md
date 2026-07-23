# Worldbuilding Application

This document describes ideas for a worldbuilding application built on the E2R Core Specification.

This document is informational and is not part of the E2R Core Specification.

## Purpose

The Worldbuilding Application assists creators in organizing fictional worlds using structured E2R datasets.

The application allows locations, people, organizations, objects, cultures, technologies, and historical events to be connected as a single evolving world.

## Core Concepts

Any identifiable concept within a fictional world may be represented as an Entity.

Changes occurring within the world are represented as Events.

Relationships between objects are represented as Relations.

## World Components

Possible Entities include:

- Characters
- Countries
- Cities
- Organizations
- Species
- Religions
- Languages
- Technologies
- Artifacts
- Vehicles
- Buildings
- Planets
- Stars

Applications may support additional concepts through Extensions.

## History

Applications may organize the complete history of a fictional world.

Examples include:

- Founding of nations
- Wars
- Discoveries
- Political changes
- Scientific breakthroughs
- Cultural developments

Timeline visualization is application-specific.

## Relationship Network

Applications may visualize relationships including:

- Political alliances
- Family relationships
- Trade
- Ownership
- Membership
- Conflicts
- Diplomacy

Applications may define additional relationship types through Extensions.

## Consistency Analysis

Applications may assist creators by detecting possible inconsistencies.

Examples include:

- Impossible timelines
- Missing historical events
- Contradictory relationships
- Isolated world elements
- Incomplete organizations

## Incremental Development

Worlds may be constructed gradually.

Applications may support:

- Independent datasets
- Partial exports
- Dataset merging
- Collaborative worldbuilding
- Expansion over time

Merge behavior is application-specific.

## LLM-assisted Workflow

Applications may generate prompts containing selected portions of a world for manual use with external Large Language Models.

Possible assistance includes:

- Character generation
- Organization generation
- City generation
- Historical event generation
- Culture generation
- Timeline expansion
- Consistency review

Returned JSON may be validated before merging.

## Typical Use Cases

Examples include:

- Novels
- Tabletop RPGs
- Video games
- Films
- Animation
- Interactive fiction
- Alternate history
- Science fiction
- Fantasy

## Relationship to the Core

The Worldbuilding Application operates entirely on standard E2R Entities, Events, and Relations.

Storytelling methods, visualization, editing workflows, and creative assistance are application-level features and are not defined by the E2R Core Specification.
