# Rejected Ideas

This document records design ideas that were considered during the development of the E2R Core Specification but were intentionally not adopted.

This document is informational and is not part of the E2R Core Specification.

Recording rejected ideas helps preserve design rationale and reduces repeated discussions in future revisions.

## Core Object Fields

### Common fields for all Core Objects

Not adopted.

Entity, Event, and Relation have different responsibilities and therefore do not necessarily share identical fields.

### Relation name

Not adopted.

Relations are connections between two Core Objects and do not require human-readable names in the Core Specification.

### Core type field

Not adopted.

The Core Specification intentionally does not distinguish concepts such as Person, Organization, Location, or Event Category.

These concepts belong in Extensions.

## Relation Design

### Undirected Relations

Not adopted.

All Core Relations are directed.

Applications may choose to display relations without arrows.

### Multi-object Relations

Not adopted.

Relations always connect exactly two Core Objects.

More complex structures should be represented using additional Entities and Relations.

### Relation-to-Relation connections

Not adopted.

Relations connect two Core Objects (Entity or Event).

Relations are not themselves Core Objects.

## Metadata

### Metadata optional

Not adopted.

Every Dataset contains metadata.

### Dataset identifier required

Not adopted.

Applications may manage datasets without globally unique identifiers.

### Single version field

Not adopted.

The Core Specification distinguishes between:

- Specification version
- Dataset version

## Extension System

### Extension categories defined by the Core

Not adopted.

The Core Specification does not classify Extensions.

### Extension dependency rules

Not adopted.

The Core Specification treats Extensions as independent.

### Extension identifier based on local key names

Not adopted.

Extension identifiers should remain globally distinguishable from local object keys.

## Validation

### Arbitrary fields in Core Objects

Not adopted.

Core Objects contain only Core-defined fields.

Additional information belongs inside Extensions.

### Null values

Not adopted.

Fields are omitted when no value exists.

## Merge

### Merge defined by the Core

Not adopted.

Dataset merging is the responsibility of Applications.

Conflict resolution strategies are intentionally left outside the Core Specification.

## Migration

### Automatic migration defined by the Core

Not adopted.

Migration between specification versions is application-specific.

## General Principle

Whenever possible, complexity should be moved from the Core Specification to:

- Extensions
- Applications
- Migration tools
- Validation tools

This keeps the Core Specification small, stable, and broadly reusable.
