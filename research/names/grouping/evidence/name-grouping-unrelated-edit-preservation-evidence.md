# Names Grouping — Unrelated Edit Preservation Evidence

Date: 2026-08-14

Status: Research evidence checkpoint; non-normative

## Scenario

A reader does not understand grouping but does understand P1 Name metadata. It
edits an unrelated context value on `N1` and saves the Dataset.

## Required behavior

The edited context value is retained, while opaque grouping rationale and all
its member references remain semantically and structurally unchanged, apart
from serialization-only differences. The reader
must not normalize away unknown grouping or rebuild only the fields it
understands.

Fixture: `../../../../../../../examples/research/names/name-grouping-unrelated-edit-preservation.json`
