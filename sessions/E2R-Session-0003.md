# E2R Session 0003

**Session Date:** 2026-07-23

**Status:** Frozen

This document records the decisions made during Session 0003.

---

# Theme

Core Object definition, Dataset structure, and Extension architecture.

---

# Frozen Decisions

## 1. Core Object Definitions

The three Core Object types are defined as follows.

### Entity

An Entity is an identifiable object.

### Event

An Event is an identifiable occurrence.

### Relation

A Relation is a directed connection between two Nodes (Entity or Event).

Relations are not Nodes.

Relations cannot connect to other Relations.

---

## 2. Core Object Fields

Core Objects no longer share identical fields.

Each object type contains only the fields required for its own responsibility.

### Entity

- id (required)
- name (optional)
- description (optional)
- aliases (optional)
- extensions (optional)

### Event

- id (required)
- name (optional)
- description (optional)
- aliases (optional)
- extensions (optional)

### Relation

- id (required)
- source (required)
- target (required)
- extensions (optional)

Relation does not contain:

- name
- description
- aliases

---

## 3. Node Definition

The term "Node" refers to either:

- Entity
- Event

Relations always connect two Nodes.

---

## 4. Core Object Rules

### id

- Required.
- String.
- Unique within a Dataset.

Global uniqueness is outside the scope of the Core Specification.

### name

Optional.

If omitted, the field is absent.

### description

Optional.

Multiple lines are permitted.

Markdown may be stored.

The Core Specification does not interpret Markdown.

### aliases

Optional.

If omitted, the field is absent.

Aliases are an array of strings.

Duplicate aliases are not permitted.

An empty aliases array should be omitted.

### null

Null values are not permitted.

Missing values are represented by omitting the field.

---

## 5. Dataset Structure

A Dataset always contains metadata.

The following metadata fields are frozen.

### Required

- specVersion

### Optional

- title
- datasetId
- datasetVersion

Definitions:

- specVersion identifies the E2R specification version.
- datasetVersion identifies revisions of the Dataset itself.

---

## 6. Dataset Validity

The following are valid Datasets:

- Empty Dataset
- Dataset containing only Entities
- Dataset containing only Events
- Dataset containing both

Relations are optional.

---

## 7. Relation Rules

Every Relation contains:

- source
- target

Both must reference existing Nodes.

Temporary references are handled by Applications rather than the Core Specification.

Core permits:

- self-relations
- cyclic relations

Applications and Extensions may impose additional restrictions.

---

## 8. Core Object Purity

Core Objects contain only Core-defined fields.

Arbitrary additional fields are not permitted.

All additional information must be stored inside Extensions.

---

## 9. Extension Architecture

Extensions extend Core without modifying it.

Core-valid Datasets remain valid even when Extensions are ignored.

The Core Specification does not classify Extensions into categories.

Extensions are independent of one another.

---

## 10. Extension Object

An Extension should be designed as a small self-contained object.

Recommended fields include:

- id
- version
- specification
- data

The exact contents of `data` are defined by each Extension.

Version format is not defined by the Core Specification.

Specification URLs are optional and intended for developers.

---

## 11. Extension Identification

Local object keys and Extension identifiers are separate concepts.

An Extension should have a globally distinguishable identifier.

The specific naming convention will be defined separately.

---

## 12. Merge Responsibility

Dataset merge behavior is not defined by the Core Specification.

Applications are responsible for:

- merging
- duplicate detection
- conflict resolution
- identifier renaming

The Core only guarantees interoperability.

---

## 13. Migration Responsibility

Migration between specification versions is outside the Core Specification.

Applications or migration tools may provide migration support.

---

## 14. Merge Considerations

The specification will include a non-normative section describing merge considerations.

Merge algorithms are intentionally left unspecified.

---

# Deferred Topics

The following topics were intentionally postponed.

- Validation Rules
- Extension identifier naming convention
- JSON Schema
- Invalid example collection
- Merge strategy examples

These topics will be discussed in Session 0004.

---

# Design Principle

The Core Specification should remain as small and stable as possible.

Whenever practical, complexity should be delegated to:

- Extensions
- Applications
- Migration tools
- Validation tools

This principle guides future evolution of the E2R ecosystem.
