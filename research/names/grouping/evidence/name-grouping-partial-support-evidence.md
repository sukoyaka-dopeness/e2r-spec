# Names Grouping — Partial-Support Round-Trip Evidence

Date: 2026-08-14

Status: Research evidence checkpoint; non-normative

## Scenario

A reader understands P1 Name expressions, Entity bindings, and language/script
metadata, but does not understand the optional grouping profile. It reads and
writes a Dataset without interpreting the grouping facts.

## Required preservation

After a read/write round-trip, the following remain unchanged:

- independent expression identities and text;
- Entity binding references;
- language, script, naming-kind, and context metadata; and
- opaque grouping data, including distinct rationales.

The reader must not flatten groups, infer equivalence, choose a preferred Name,
or propagate historical applicability. Fixture:
`../../../../../../../examples/research/names/name-grouping-partial-roundtrip.json`.
