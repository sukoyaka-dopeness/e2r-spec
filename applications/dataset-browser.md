# Dataset Browser

This document describes a reference application for browsing and inspecting E2R datasets.

Unlike an editor, the Dataset Browser is primarily a read-only application.

Its purpose is to help users understand the structure of a dataset and verify compatibility with the E2R specification.

---

# Goals

The Dataset Browser should present an E2R dataset in a human-friendly form.

Rather than displaying raw JSON, it should organize information according to the Core data model.

The browser should also make Extensions visible without requiring knowledge of their internal structure.

---

# Typical Use Cases

- Inspecting datasets
- Learning the E2R Core model
- Debugging datasets
- Verifying imported datasets
- Exploring benchmark datasets
- Inspecting generated datasets

---

# Dataset Overview

The browser should display basic dataset information.

Examples include:

- title
- specification version
- dataset version
- object counts

For example:

- Entities
- Events
- Relations
- Extensions

---

# Core Objects

The browser should present Core Objects separately.

## Entities

Display:

- id
- name
- description
- related Events
- related Relations
- Extensions

---

## Events

Display:

- id
- name
- description
- related Entities
- related Relations
- Extensions

---

## Relations

Display:

- id
- source
- target
- description
- Extensions

---

# Navigation

Objects should be interconnected.

Selecting a related Entity, Event, or Relation should navigate directly to that object.

This allows users to explore the dataset without reading raw JSON.

---

# Extension Inspection

The browser should display all Extensions attached to Core Objects.

Known Extensions may receive specialized views.

Unknown Extensions should still be displayed.

The browser should never discard or modify unknown Extension data.

---

# Unknown Extensions

Unknown Extensions should be displayed as generic structured data.

For example:

- extension name
- raw object structure

This helps developers verify compatibility with future Extensions.

---

# Raw JSON

The browser may optionally include a raw JSON viewer.

This view complements the structured browser and assists debugging.

The structured view should remain the primary interface.

---

# Read-Only

The Dataset Browser is intentionally read-only.

Editing is the responsibility of dedicated editor applications such as NarrativeLine.

---

# Future Possibilities

Future versions may support:

- search
- filtering
- graph navigation
- timeline navigation
- Extension-specific viewers
- schema inspection
- validation results
- cross-dataset references

These features are outside the scope of an initial implementation.
