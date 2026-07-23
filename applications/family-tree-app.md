# Family Tree Application

This document describes ideas for a family tree application built on the E2R Core Specification.

This document is informational and is not part of the E2R Core Specification.

## Purpose

The Family Tree Application visualizes family relationships using E2R datasets.

The application focuses on genealogy while remaining compatible with the general-purpose E2R Core Specification.

## Core Concepts

People are represented as Entities.

Family relationships are represented using Relations.

Birth, death, marriage, adoption, and similar occurrences are represented as Events.

## Basic Relationships

Typical relationships include:

- Parent
- Child
- Sibling
- Spouse
- Adoptive parent
- Adoptive child

Applications may support additional relationship types through Extensions.

## Derived Relationships

Applications may infer relationships that are not explicitly stored.

Examples include:

- Grandparent
- Grandchild
- Uncle
- Aunt
- Nephew
- Niece
- Cousin
- Ancestor
- Descendant

The Core Specification does not require these relationships to be stored explicitly.

Applications are free to calculate them from existing Relations.

## Timeline Integration

Applications may combine genealogy with chronological information.

Examples include:

- Birth timeline
- Marriage timeline
- Death timeline
- Family history

## Navigation

Users may:

- Navigate to parents
- Navigate to children
- Navigate to siblings
- Navigate to ancestors
- Navigate to descendants

Applications may support configurable traversal depth.

## Visualization

Possible visualizations include:

- Traditional family tree
- Descendant tree
- Ancestor tree
- Fan chart
- Relationship graph

Visualization methods are application-specific.

## Large Families

Applications may support:

- Branch collapsing
- Lazy loading
- Search-first navigation
- Automatic layout

## Extensions

Applications may support Extensions for:

- Historical records
- DNA information
- Family names
- Noble titles
- Household registration
- Fictional genealogy

The Core Specification does not define these concepts.

## Relationship to the Core

The Family Tree Application interprets general E2R Entities, Events, and Relations as genealogical information.

Genealogical rules are defined by the application and its Extensions, not by the E2R Core Specification.
