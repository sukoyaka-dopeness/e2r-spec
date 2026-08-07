# Human-readable Reference Code

This document explores a human-readable reference code for E2R Core Objects.

Unlike the Core Specification and official Extension specifications, this document is exploratory and non-normative.

Nothing in this document is required by E2R or by the NarrativeLine MVP.

---

# Status

Human-readable Reference Code is a research candidate for a future Extension.

It is not currently an official Extension, and its data structure is not stable.

The earlier working term `HumanID` is avoided because the proposed value would not establish object identity. The term `referenceCode` better describes a value intended for human recognition, search, and communication.

---

# Problem

Stable opaque identifiers such as UUID v7 are well suited to structural references, merging, synchronization, and distributed creation.

They are not convenient for people to read, remember, dictate, compare, or enter manually.

This becomes noticeable in use cases such as:

- inspecting a Node in a Dataset Browser
- discussing a Node with another person
- locating a Node during debugging
- comparing JSON and a structured detail view
- copying a short reference into notes or issue reports
- using an authoring utility to create Relations

The existing `name` field provides a human-readable label, but names may be absent, duplicated, localized, or changed. A short reference code could complement `name` without replacing the Core identifier.

---

# Separation of Roles

The following values have different responsibilities.

| Value | Responsibility | Example |
|-------|----------------|---------|
| Core `id` | Stable structural identity and references | UUID v7 |
| `name` | Primary human-readable label | `Apollo 11 Lunar Landing` |
| alias | Alternative natural-language label | `First Moon Landing` |
| `referenceCode` | Short human-oriented reference | `EV-001` |
| external identifier | Identity assigned by another system | Wikidata or DOI value |

A future Reference Code Extension should preserve these distinctions.

---

# Design Direction

A human-readable Reference Code should follow these principles:

- The Core `id` remains the Single Source of Truth for object identity.
- Relations continue to reference Core `id` values.
- A reference code is optional supplementary data.
- Changing a reference code does not create a different Core Object.
- A reference code must not be used as an implicit replacement for a missing Core `id`.
- Applications may display and search reference codes without understanding them as domain semantics.
- Applications that do not understand the Extension should preserve it whenever practical.

This separation allows applications to improve human usability without weakening structural interoperability.

---

# Illustrative Data Shape

The following structure is illustrative only and is not a stable specification:

```json
{
  "id": "019c2756-07f0-7000-8000-000000000001",
  "name": "Apollo 11 Lunar Landing",
  "extensions": {
    "referenceCode": {
      "code": "EV-001"
    }
  }
}
```

The Extension name, field names, constraints, and uniqueness rules remain open for future design.

---

# Manual Dataset Editing

A reference code improves recognition but does not by itself make raw JSON Relation editing independent of UUIDs.

For example, a conforming Relation would continue to store Core identifiers:

```json
{
  "id": "019c2756-07f0-7000-8000-000000000010",
  "source": "019c2756-07f0-7000-8000-000000000001",
  "target": "019c2756-07f0-7000-8000-000000000002"
}
```

An authoring or Dataset Viewer utility could allow a user to search or enter `EV-001`, resolve it to the Core `id`, and serialize the Core `id` in the Dataset.

This resolution is application behavior rather than a change to the Core Relation model.

---

# Application Presentation

A recommended future detail view could present:

1. `name` as the primary label.
2. `referenceCode` as a secondary human reference when present.
3. Core `id` in an advanced or technical section with a copy action.

Applications may show a shortened UUID as derived diagnostic text when no reference code exists. A shortened UUID should not be stored or treated as a unique identifier unless its collision behavior is explicitly defined.

---

# Scope

The initial motivation concerns Nodes, meaning Entities and Events.

Relations may also benefit from human-readable references during debugging or advanced editing. Whether a future Extension should apply to all Core Objects or only to Nodes remains unresolved.

Dataset-level reference codes are a separate question because Dataset identity and Core Object identity have different lifecycles.

---

# Uniqueness and Comparison

A useful reference code may need to be unique within a defined scope, but the scope has not been selected.

Possible scopes include:

- all Nodes in a Dataset
- each Core Object type within a Dataset
- all Core Objects in a Dataset
- a named application or organizational namespace

Case sensitivity, Unicode normalization, whitespace handling, and maximum length would also require explicit rules before standardization.

If applications compare codes without common normalization rules, values that appear identical to users may behave differently across implementations.

---

# Generation and Lifecycle

Applications could assign reference codes automatically or allow users to enter them.

Possible generated forms include:

- `EV-001`
- `ENT-042`
- short random codes
- user-selected slugs

Sequential codes are easy to read but may collide when Datasets are merged or edited independently. A collision must not alter or invalidate the Core identity of either object.

A future specification would need to determine whether reference codes are freely editable, stable recommendations, or immutable within a particular workflow.

---

# Merge Behavior

Reference-code collision is distinct from Core ID collision.

When two objects with different Core IDs share a reference code, an application might:

- report the conflict
- request a new code from the user
- generate a replacement code
- preserve both values temporarily during review

The shared code must not be treated as proof that the objects are identical.

Merge behavior remains an application or future Extension concern.

---

# Relationship to Aliases and External Identifiers

Aliases are alternative names or expressions for the same object. They are intended for display, search, and language variation.

External identifiers are assigned by another dataset, registry, publication system, or knowledge base.

A reference code is a short reference selected within an E2R workflow. It should not silently claim authority outside its declared scope.

Future work should avoid combining reference codes, aliases, and external identifiers into one field merely because all of them can contain strings.

---

# MVP Boundary

Human-readable Reference Code is not required for the NarrativeLine MVP.

The MVP can provide adequate ordinary usability by:

- displaying `name` as the primary label
- hiding raw Core IDs from ordinary editing screens
- exposing Core IDs in technical views when needed
- providing copy actions for Core IDs
- resolving Relations through application controls rather than manual UUID entry

A Dataset Browser or authoring utility is a suitable place to test whether persistent reference codes provide enough value to justify an official Extension.

---

# Criteria for an Official Extension

Promotion from research to an official Extension should require evidence that:

- multiple applications need to exchange the same reference codes
- `name` and derived short UUID displays are insufficient
- the uniqueness and comparison scope can be defined consistently
- merge and editing behavior are understood
- the boundary with aliases and external identifiers is stable
- at least one reference application has validated the workflow

Until these conditions are met, applications may experiment with temporary or vendor-specific Extension names.

---

# Open Questions

- Should the Extension apply to Nodes, Relations, or all Core Objects?
- Should codes be unique across a Dataset or only within an object type?
- Are codes case-sensitive?
- Which Unicode normalization rules are required?
- May a Core Object have more than one reference code?
- Are codes user-editable after creation?
- How should independently edited Datasets resolve collisions?
- Should a code record its namespace or issuing application?
- How should a Dataset Browser distinguish a reference code from an external identifier?
- When is the workflow mature enough to become an official E2R Extension?
