# Metadata Extension

This document defines Metadata Extension v1.

The Metadata Extension provides optional descriptive and identifying
information about an E2R Dataset without expanding the Core.

---

# Goals

The Metadata Extension aims to:

- provide a stable location for optional Dataset identity
- provide a human-readable Dataset title
- keep descriptive metadata separate from Core structure
- allow applications to preserve metadata they do not understand
- remain minimal and extensible

---

# Extension Placement

Metadata is stored in the Dataset-level `metadata` Extension.

```text
extensions.metadata
```

The Metadata Extension does not apply to individual Entity, Event, or Relation
objects.

The value at `extensions.metadata` directly contains the Metadata Extension
fields. The Core does not add a common `data` or Extension `version` wrapper.

---

# Structure

Both Metadata Extension fields are optional.

```json
{
  "version": "1.0",
  "entities": [],
  "events": [],
  "relations": [],
  "extensions": {
    "metadata": {
      "datasetId": "019c0000-0000-7000-8000-000000000000",
      "title": "Apollo 11"
    }
  }
}
```

A Dataset may omit the `metadata` Extension entirely. An empty `metadata`
object carries no information and SHOULD be omitted.

---

# datasetId

Optional.

`datasetId` is an opaque string that identifies a Dataset across ordinary
editing and exchange.

When present, it MUST contain at least one non-whitespace character.

The Metadata Extension does not require a particular identifier format and
does not require global uniqueness. An application may use UUIDs or another
identifier scheme when creating a Dataset.

Applications MUST compare `datasetId` values as exact, case-sensitive strings.
They MUST NOT case-fold, normalize, parse, or otherwise reinterpret an existing
value in order to determine identity.

An existing `datasetId` SHOULD remain stable during ordinary editing, import,
export, and save-as operations. Opening or importing a Dataset MUST NOT by
itself add, replace, or regenerate its `datasetId`.

A Dataset without a `datasetId` remains a valid E2R Dataset. An application may
offer an explicit operation to assign one.

Creating a deliberately independent copy of a Dataset may assign a new
`datasetId`. Branch, fork, lineage, and provenance semantics are outside
Metadata Extension v1.

Dataset identifiers and Core Object identifiers are separate namespaces. The
same string may be used as a Dataset `datasetId` and as a Core Object `id`
without creating a Core identifier collision.

---

# title

Optional.

`title` is a human-readable title for the Dataset.

When present, it MUST contain at least one non-whitespace character. A title is
not required to be unique and MUST NOT be used as Dataset identity.

Applications may display a local placeholder such as `Untitled` when `title`
is absent. A placeholder is presentation state and MUST NOT be written as a
stored title unless the user explicitly chooses that value.

Applications may derive a suggested export filename from `title`, but a
filename or filesystem path is not Metadata Extension data. Applications MUST
NOT treat a derived filename as Dataset identity.

---

# Unknown Fields

Applications MUST ignore unknown Metadata Extension fields when reading a
Dataset.

Applications SHOULD preserve unknown Metadata Extension fields whenever
practical and SHOULD modify only the fields they understand.

The presence of an unknown Metadata Extension field does not by itself make a
Dataset invalid. A validator may report such a field as a warning.

Future versions SHOULD extend the Metadata Extension additively whenever
practical.

---

# Application Guidance

Applications that create a new Dataset may assign a `datasetId`. NarrativeLine
uses UUID v7 for Datasets it creates, but UUID v7 is an application policy and
not a Metadata Extension requirement.

An application may use an internal, non-persistent key to distinguish open
Datasets. Such a key is application state and is not a substitute for, or an
implicit source of, `datasetId`.

Suggested export filenames should remain application-independent. An
application should not automatically append its own name or a view-specific
term such as `Timeline` to a filename derived from the Dataset title. A term
that is already part of the user-provided title may be preserved.

Filename sanitization, suffixes, collision handling, and save-dialog behavior
belong to Applications rather than this Extension.

---

# Scope

Metadata Extension v1 defines only:

- `datasetId`
- `title`

Descriptions, authors, licenses, languages, generating-application
information, timestamps, lineage, and provenance are outside the initial
scope. They may be standardized in future versions or separate Extensions when
interoperability requirements are clear.
