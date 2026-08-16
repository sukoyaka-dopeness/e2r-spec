# Names Workstream Closure / Handoff Log

Date: 2026-08-14

Status: workstream handoff; P1 and Validator release complete

## Closure statement

The bounded Names P1 workstream is closed. The Validator implementation was
released successfully as `@sukoyaka-dopeness/e2r-validator@0.3.0` from
annotated tag `v0.3.0` at commit
`9190ce688e52483540158722b572b48a596e27a7`. The tag-triggered release
workflow, validation gates, package inspection, and npm Trusted Publishing all
succeeded. No GitHub Release was created.

This closure covers the accepted Draft representation, local conformance,
Dataset-wide recognized-ID uniqueness, declaration-gated public diagnostics,
and Validator packaging. It does not close Names as a whole or authorize any
application writer, migration, repair, or Stable Names design.

## Fixed specification state

- Draft identifier: `draft.github.sukoyaka-dopeness.names`
- Draft version: `0.1.0`
- Payload placement: Core Object-local
- Applicable objects: Entity, Event, Relation
- `expressions`: required array
- Conforming `id` and `value`: required non-empty strings
- `language` and `script`: optional non-null strings
- Unknown payload/record properties: permitted
- Opaque unknown `null`: permitted
- Array order: non-semantic
- Core `name`: outside Names conformance
- Lifecycle and in-payload version/features: outside this Draft

## Fixed P1 semantics

Recognition and conformance remain separate:

- recognized candidate: non-array object with string `id` and string `value`;
- local conformance additionally requires non-empty `id` and `value` and valid
  optional metadata types;
- recognized but locally invalid candidates still participate in Dataset-wide
  uniqueness;
- opaque members without string `value` are excluded from P1 uniqueness;
- equal values with distinct IDs are not equivalent;
- Core IDs, other Extension IDs, and Dataset-level Names payloads are outside
  Names-owned uniqueness;
- duplicate diagnostics preserve global Entity → Event → Relation and array
  scan order;
- validation is read-only; merge, rewrite, allocation, deletion, retargeting,
  and repair are forbidden.

## Validator state

- Local JSON Schema: accepted.
- Dataset-wide recognized-ID detector: implemented and accepted.
- Public `validateDataset()` integration: implemented and accepted.
- Exact declaration-gated activation for Draft `0.1.0`: implemented.
- Local structural diagnostics and duplicate diagnostics: implemented.
- Diagnostic ordering: support/version → local → duplicate.
- CLI and library semantics: consistent.
- Published package: `0.3.0`; npm `latest` is `0.3.0`.
- Detector internals were not promoted to a Stable package API.
- Automatic repair is not implemented and remains forbidden.

## Evidence and verification

- Names focused detector, integration, and Specification tests: 57/57 passed.
- Final Validator validation: 94/94 passed.
- Release workflow: successful, including Trusted Publishing.
- Portable fixture discovery: explicit roots, deterministic, fail-closed.
- No research fixture is treated as a public release-valid specification
  example.
- NarrativeLine and Linkscape observations remain evidence only, not product
  conformance or preservation guarantees.

## Explicitly deferred or unresolved

- Stable `names`: deferred.
- Production Names writer: unauthorized.
- Migration: deferred.
- Automatic repair: forbidden.
- Final Target Reference model: unresolved, non-blocking.
- Grouping: `defer selection`.
- P2/P3: closed.
- Grouping Selection Reopen Criteria evidence: `no`.
- Language/script registry validation, naming-kind semantics, and temporal
  applicability: deferred.
- Core `name` synchronization or projection: not required and not implemented.

## Reopening rules

Do not reopen P1 implementation merely to add Stable Names behavior, writer
behavior, migration, repair, Grouping, or Target Reference semantics. Any such
work requires its own bounded decision and explicit scope. P1 may be reopened
only if new evidence contradicts the accepted representation, recognition /
conformance boundary, Dataset-wide uniqueness, or published diagnostic
contract.

## Next-work options

No implementation is required by this handoff. A future session may either:

1. begin a bounded decision for one explicitly selected deferred responsibility;
   or
2. leave Names closed and move to an unrelated workstream.

The next session must treat this document and the accepted research Decisions
as the current handoff record. No release action, writer, migration, repair,
Stable Names registration, or Grouping selection is implied.

## Safety record

The Validator release workstream is complete. No further tag movement,
publication, or registry mutation is authorized by this handoff.

