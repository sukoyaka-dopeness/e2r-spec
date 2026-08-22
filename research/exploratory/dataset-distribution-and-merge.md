# Dataset Distribution and Merge — Exploratory Vision

Status: exploratory, non-normative.

This document records a future direction for E2R applications. It does not
change the E2R Core, define a normative merge algorithm, or require current
applications to implement these features.

## Overview

`datasetUrl` can become the first foundation for a broader Dataset workflow:

```text
Dataset A ─┐
           ├─ import / combine ─> new Dataset C
Dataset B ─┘
```

The result is not a concatenation of JSON objects. It is a newly exported,
self-contained E2R Dataset whose internal Relations target objects in the new
Dataset, while the origins of imported material remain traceable.

Potential applications include:

- combining several family or historical datasets into a larger relational map;
- bringing together datasets created by different people or projects;
- composing band, member, side-project, and festival datasets;
- combining multiple views of the same subject while preserving disagreement.

## `datasetUrl` as a handoff location

In this vision, `datasetUrl` is not Dataset identity. It is information about
where an application can obtain a Dataset. Dataset identity, source location,
and the content fetched at a particular time should remain conceptually
separate:

```text
datasetId   = identity assigned to the source Dataset
sourceUrl   = location from which it was obtained
contentHash = content actually imported at that time
```

This makes a simple handoff possible today while leaving room for future
multi-Dataset import workflows:

```text
Dataset URL A ─┐
Dataset URL B ─┼─> E2R Dataset Combiner
Dataset URL C ─┘
```

## Candidate merge workflow

A future Combiner could proceed roughly as follows:

1. Fetch Datasets from one or more `datasetUrl` values.
2. Validate each imported Dataset independently.
3. Assign collision-safe internal identifiers during import.
4. Present possible Entity/Event equivalences for review.
5. Let the user choose `merge`, `keep separate`, or another explicit outcome.
6. Retarget Relations to the selected identifiers in the new Dataset.
7. Preserve source and decision information as provenance where needed.
8. Export a new self-contained E2R Dataset.

The application must not merge objects merely because their names match. For
example, three imported objects named “Paul McCartney” should initially remain
distinct. An application may propose an equivalence, but the resulting
identity relationship should be an explicit assertion or user decision.

## Equivalence without destructive identity collapse

An exploratory representation could preserve imported objects and add an
explicit equivalence or identity-grouping layer:

```text
Entity A: "Paul McCartney"
Entity B: "Paul McCartney"
Entity C: "Paul McCartney"

Equivalence Group X
  - Entity A
  - Entity B
  - Entity C
```

This is preferable to automatically replacing several source objects with one
canonical object. The application can distinguish confirmed equivalence,
possible match, and unresolved conflict. The exact representation belongs to
future application or Extension design, not to this exploratory note as a
Core requirement.

## Provenance and Dataset lineage

After a merge, provenance becomes essential. A minimal Dataset-level record
might look conceptually like:

```json
{
  "imports": [
    {
      "datasetId": "dataset-a",
      "sourceUrl": "...",
      "contentHash": "..."
    },
    {
      "datasetId": "dataset-b",
      "sourceUrl": "...",
      "contentHash": "..."
    }
  ]
}
```

Object-level origin can be retained as well:

```text
Current Entity X
  ├─ Dataset A / Entity a17
  └─ Dataset B / Entity person-42
```

`datasetId`, `sourceUrl`, and `contentHash` have different roles and should
not be collapsed into one field. In particular, the content hash records what
was actually imported, rather than only where it was found.

Merge-of-merge workflows make lineage a graph problem. For example:

```text
A + B -> C
C + D -> E
```

The final Dataset should be able to explain that `E` derives from `C` and `D`,
and that `C` derives from `A` and `B`. A small Dataset-lineage DAG is one
possible direction. Whether lineage is flattened into `E`, represented as
recursive imports, or both remains an open design question.

## Product direction

The first practical step can remain deliberately small:

```text
#datasetUrl=<one Dataset URL>
        ↓
application handoff
```

Later, a dedicated Combine application or mode could accept several URLs and
make merge decisions visible to the user. The important boundary is that
“viewing several Datasets” and “saving a new Dataset composed from them” are
different operations.

The resulting user-facing direction could support:

- viewing Dataset A and B side by side;
- selecting candidate equivalences;
- choosing merge or keep-separate decisions explicitly;
- exporting a new Dataset with preserved lineage;
- inspecting where an Entity, Event, or Relation originated.

This would extend E2R from Dataset handoff toward Dataset composition while
keeping the current Core model self-contained and application-independent.

## Open research questions

- What should be the stable identity model for imported objects?
- How should Entity and Event equivalence be represented without forcing a
  canonical collapse?
- Which provenance fields belong in an Extension, and which are application
  metadata?
- How should Relation retargeting be reviewed when equivalence is uncertain?
- Should lineage be flattened, recursive, or represented as a separate DAG?
- How should conflicting descriptions, dates, and assertions be shown?
- How should repeated merges avoid provenance duplication?
- What validation guarantees are required for a newly exported Dataset?

## Relationship to current E2R work

This vision builds on the existing idea of passing a Dataset to an application
by URL. It does not authorize implementation of multi-Dataset import, merge,
provenance, or direct handoff behavior in the current Hub, NarrativeLine, or
LiaisonScape. Those should be treated as separate future workstreams after
their boundaries and representation have been researched.
