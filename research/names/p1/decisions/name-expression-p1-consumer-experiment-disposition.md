# P1 Name Expression Consumer Experiment — Disposition

Date: 2026-08-14

## Verdict

`accept`

The experiment is bounded and suitable for testing P1 expression usability.
The edit case uses a previously classified non-substantive edit that leaves the
intended expression unchanged. It does not classify context or define which
text changes are cosmetic.

Search remains limited to discovering an Entity through independent
expressions in the proposed consumer scenario, but discovery itself is not
tested by this harness. The opaque round-trip check is conceptual evidence,
not an implemented reader/serializer integration test. No ranking, preference,
or grouping semantics are inferred.
Entity discovery is tracked separately in
`name-expression-p1-entity-discovery-evidence.md`.
