# E2R Schemas

This directory contains machine-readable schemas for the E2R Core and official Extensions as they become available.

## Current Status

No normative schema is published in this directory yet.

The following draft schema is currently available:

- `extensions/history.schema.json` validates the value of an `extensions.history` property using JSON Schema Draft 2020-12.

The History schema is a structural validation aid. A Core Dataset schema and composed schemas for complete Datasets are not yet available.

The Markdown specifications in `spec/` and `extensions/` remain the source of truth. Files in `examples/` demonstrate intended structures but do not define validity by themselves.

Until a schema is explicitly designated as normative, a conflict between a schema and the corresponding specification document must be resolved in favor of the specification document.

## Why This Directory Exists

Machine-readable schemas can provide early and consistent feedback for common structural errors, including:

- missing required properties
- incorrect JSON value types
- invalid numeric ranges
- invalid string forms
- incompatible field combinations
- invalid structures in supported Extensions

Schemas complement the written specification. They do not replace its definitions, rationale, or interoperability rules.

## Current Organization and Planned Growth

Schemas are organized separately for the Core and each official Extension:

```text
schemas/
  README.md
  extensions/
    history.schema.json
```

The History schema path, JSON Schema dialect, and schema identifier are defined in the current draft file.

A future Core schema is expected at `schemas/core.schema.json`. It should reflect
the Core Dataset structure defined in `spec/core.md`, including:

- the required top-level Core `version`
- the required `entities`, `events`, and `relations` arrays, including when empty
- the optional Dataset-level `extensions` object
- non-empty Core Object identifiers
- required Relation `sourceId` and `targetId` fields
- allowance for unknown Core fields

The Dataset's top-level `version` identifies the Core version. It does not
identify the version of an Extension. The composition strategy for applying
supported Extension schemas to complete Datasets remains to be designed before
composed schemas are published.

Official E2R schemas belong in this repository. Third-party and experimental Extensions may publish schemas in their own repositories unless they are adopted as official E2R Extensions.

## Validation Layers

E2R validation has several distinct layers.

### JSON Syntax

A JSON parser can determine whether a document is syntactically valid JSON.

### Structural Validation

A schema can validate much of the declared structure, such as property types, required fields, numeric ranges, string patterns, and some field dependencies.

A Core schema must not reject a Dataset solely because it contains an unknown
Core field or unknown Extension. A separate validator may report unknown Core
fields as warnings while preserving them. An unknown field does not satisfy a
missing required field.

### Dataset-level Semantic Validation

Some Core rules require inspecting the Dataset as a whole. Examples include identifier uniqueness, reference resolution, and ensuring that Relations do not target other Relations.

These checks may require a validator in addition to JSON Schema.

### Extension and Application Validation

Official Extensions may define further interoperable constraints. Applications may also enforce their own policies, but application-specific validation must remain distinguishable from E2R specification validation.

When an application supports an Extension, it may validate the fields defined
by that Extension. Unknown fields within the Extension remain allowed for
forward compatibility, while invalid values in recognized fields may be
reported as errors.

## History Extension Validation

The draft History Extension schema validates structural rules including:

- integer calendar and clock fields
- field ranges
- contiguous precision dependencies
- the requirement that `timeZone` and `offset` occur together
- the numeric `offset` form
- the minimum temporal precision required by Time Zone information

Some History rules require information or reasoning beyond a static schema:

- whether a `timeZone` is present in a particular IANA Time Zone Database version
- whether an offset is valid for a Time Zone at the recorded Civil Time
- whether a local time is ambiguous or nonexistent during a daylight-saving transition
- whether a Gregorian day is valid for its particular month and year
- whether `temporalOrder` contradicts chronology established by other Events

Implementations should not treat schema success as proof that all History semantics are valid.

## Schema Development Rules

When schemas are added or updated:

- define the supported specification version and JSON Schema dialect explicitly
- allow unknown Core fields and unknown Extension names
- keep Core and Extension responsibilities separate
- derive constraints from the written specification rather than inventing new requirements
- add valid and invalid fixtures for each important constraint
- test existing reference examples against the applicable schemas
- update schemas when normative data structures change
- document constraints that cannot be expressed reliably in the selected schema dialect

Schema development should proceed one specification layer at a time. The existing History schema validates only the History Extension value. Composition with complete E2R Datasets should be introduced after the Core schema is available.
