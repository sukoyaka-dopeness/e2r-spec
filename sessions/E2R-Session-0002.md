# E2R Session 0002
## Topic
Core JSON Design (Dataset)

**Status:** In Progress

---

# Scope

This session defines the top-level structure of an E2R Dataset.

It intentionally does **not** define Entity, Event, Relation, or Extension schemas in detail.
Those will be covered in later sessions.

---

# Confirmed Decisions

## 1. Dataset is the exchange unit

An E2R Dataset is the basic unit of exchange.

Applications may internally merge, split, or manage multiple Datasets, but the Core specification assumes that each Dataset is independently exchangeable.

---

## 2. Minimal Core

The Core should remain as small as possible.

Current direction:

- version
- entities
- events
- relations

Everything else should be implemented as Extensions unless interoperability requires otherwise.

---

## 3. Metadata

Metadata is **not** part of the Core.

Examples include:

- title
- description
- author
- license
- language
- dataset identifier
- application information

These belong to a Metadata Extension rather than the Core.

Reason:

The Core should define only the information necessary for interoperable data exchange.

---

## 4. Unknown fields

Unknown fields MUST be ignored.

Applications must not reject a Dataset solely because it contains unknown fields or unsupported Extensions.

This allows forward compatibility and independent Extension development.

---

## 5. Dataset Extensions

Extensions may exist at the Dataset level.

Dataset-level Extensions describe properties of the Dataset itself rather than individual Entities, Events, or Relations.

Examples:

- calendar definitions
- unit systems
- localization
- dataset metadata

---

## 6. Dataset external references

Current direction:

Core Datasets should be self-contained.

References to objects outside the current Dataset are not part of the Core.

Reason:

Self-contained Datasets maximize portability, reproducibility, and reliability across applications.

Future Extension(s) may define standardized mechanisms for Dataset linking.

---

## 7. Reserved Core properties

Current direction:

The Core reserves only the minimum required top-level properties.

Current candidates:

- version
- entities
- events
- relations

Additional reserved properties should only be introduced when interoperability clearly requires them.

---

# Open Questions

## Dataset structure

Candidate:

```json
{
  "version": "1.0",
  "entities": [],
  "events": [],
  "relations": []
}
```

Alternative structures are currently not preferred.

---

## Dataset identifier

Open question:

Should Dataset identity be provided by a Metadata Extension?

Or should the Core eventually define a Dataset identifier?

Current direction favors the Metadata Extension.

---

## Calendar design

A Dataset may need multiple calendars.

Examples:

- Gregorian
- Julian
- Japanese era
- Fictional calendars

Current direction:

Calendars should be defined at the Dataset level.

Each Date should specify which Calendar it uses.

Whether a single Date may represent multiple calendar expressions remains an open question.

---

## Dataset Link Extension

Future work may define an Extension for cross-Dataset references.

Such an Extension should standardize:

- dependency declaration
- reference resolution
- missing dependency behavior

This functionality is intentionally outside the Core.

---

## Extension taxonomy

Several categories of Extensions have been discussed.

Examples include:

- Data Extensions
- Behavior Extensions
- View Extensions

These are considered explanatory categories only.

The Core should not restrict Extensions to a fixed taxonomy.

---

# Possible Future Sessions

- Core JSON Design (Entity)
- Core JSON Design (Event)
- Core JSON Design (Relation)
- Core JSON Design (Date)
- Metadata Extension
- Calendar Extension
- Dataset Link Extension
- Core JSON Schema
```
