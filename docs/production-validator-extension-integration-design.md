# Production Validator Extension Integration Design

Date: 2026-08-29  
Status: **BLOCKED — SPEC DECISION REQUIRED**  
Scope: read-only design checkpoint; no Validator, application, schema, or
roadmap implementation is included.

## Decision summary

The production Validator can be extended without changing Core semantics or
the diagnostic transport contract. The appropriate boundary is an
Extension-specific validator selected by the central Extension dispatcher.
Core must continue to validate only Core rules; unknown Extensions remain
forward-compatible and opaque. Presentation must therefore be added as a
separate validator module in a later implementation checkpoint.

This checkpoint is blocked because the Presentation Extension specification
still leaves the severity and repair policy for a record whose Relation ID is
not present in Core unresolved. The Validator is read-only and must not invent
an orphan policy. No implementation may begin until that policy is decided.

## Audited baselines and current capability

The audited repositories are:

| Repository | Baseline | Gate |
|---|---|---|
| e2r-validator | `49b2751`, version `0.3.0` | `npm.cmd run validate`: 102 tests and 3 fixture tests passed |
| e2r-liaison-scape | `d74b176` | 269 tests, lint, and build passed |
| e2r-spec | `20e78d3` | `npm.cmd run validate` passed |

The Validator exposes `validateDataset`, a JSON diagnostic result, and CLI
exit codes. A result is valid when it contains no `error`; the only current
severities are `error` and `warning`. Diagnostics contain stable `code`, JSON
Pointer `path`, and optional `relatedIds`. Validation never returns or writes
a repaired Dataset.

Current recognized validation includes Core, Metadata, History,
Specification, Coordinate Prototype, Coordinate Draft, Names Draft, and
Lineage Draft. Unknown Core fields and unknown Extension names produce
warnings but do not invalidate or mutate input. Recognized Extension unknown
fields are likewise non-fatal. Coordinate malformed values are errors;
unsupported versions are warnings and are not interpreted with an older
version's rules. Prototype and Draft Coordinate identities are independent.

Presentation is not currently recognized by the production Validator. Its
current behavior is therefore `unknown_extension` warning plus preservation,
not Presentation-specific structural or Relation-reference validation.

## Responsibility and integration decisions

Application-owned Extension semantics belong in an Extension-specific module
registered with the central dispatcher. This keeps the Core validator
application-neutral and follows the accepted incremental modularization
decision. LiaisonScape remains responsible for its runtime presentation and
its bounded cleanup when a known Relation is deleted; the production
Validator remains a diagnostic consumer and never performs that cleanup.

No new severity is required. Known malformed Presentation payloads should be
`error`; unsupported declared Presentation versions should be a support-state
`warning`; unknown future tokens and fields should remain accepted and
preservable. The implementation must use stable Presentation-specific codes,
JSON Pointer paths, and `relatedIds` where a Core Relation is relevant.

Coordinate validation remains data-contract validation, not authorization of
LiaisonScape capability. Canonical/legacy Space compatibility and migration
remain application-boundary decisions. A future integration must explicitly
diagnose conflicting representations if the specification makes that
condition normative; it must not silently normalize or repair them.

Automatic repair policy: **never auto-repair in Validator**. In particular,
orphan Presentation records must not be deleted, retargeted, or normalized by
validation. The unresolved orphan policy is recorded as `ORPHAN-E` below.

## Presentation capability matrix

| Area | Current Validator | Intended production integration |
|---|---|---|
| Valid payload | opaque warning | pass with no diagnostic |
| Malformed envelope/record | opaque warning | error |
| Known `arrowDisplay` values | not interpreted | validate `normal`, `reverse`, `undirected`, `bidirectional` |
| Unknown `arrowDisplay` token | preserved as unknown Extension | accept/preserve; no error solely for novelty |
| Known `lineStyle` values | not interpreted | validate `solid`, `dashed`, `dotted` |
| Unknown `lineStyle` token | preserved as unknown Extension | accept/preserve; no error solely for novelty |
| Unknown sibling fields | opaque | warning at most, preserve input |
| Missing Core Relation | not checked | **ORPHAN-E unresolved**; no implementation yet |
| Empty/default canonical state | not checked | validate only once omission/default rules are normative |

The e2r-spec Presentation schema already covers structural cases and
explicitly leaves Relation-ID resolution and orphan diagnostics outside JSON
Schema. This design does not change that schema.

## Coordinate matrix

| Case | Decision |
|---|---|
| Valid Prototype/Draft payload | validate using its exact identity/version |
| Malformed payload, value, bounds, or reference | `error` |
| Unsupported exact version | support-state `warning`; do not apply old rules |
| Unknown fields | preserve; never reject solely for being unknown |
| Prototype/Draft coexistence | keep identities separate; no implicit migration |
| Canonical/legacy application Space conflict | application-boundary concern; no Validator repair |
| Non-finite or unresolved values | `error` under the applicable Coordinate contract |

## V1–V25 acceptance matrix

| ID | Scenario | Result/design status |
|---|---|---|
| V1 | valid Core Dataset | PASS |
| V2 | invalid Core structure/reference | error |
| V3 | unknown Extension | warning, valid, preserved |
| V4 | valid canonical Coordinate | PASS under exact supported contract |
| V5 | valid legacy/Prototype Coordinate | PASS under exact Prototype contract |
| V6 | malformed Coordinate | error |
| V7 | unsupported Coordinate version | warning, uninterpreted |
| V8 | invalid/non-finite Coordinate value | error |
| V9 | unresolved Coordinate Space/Component | error |
| V10 | conflicting canonical/legacy application spaces | unresolved application boundary; no repair |
| V11 | unknown Coordinate fields | accepted and preserved |
| V12 | known Presentation arrow | future module PASS |
| V13 | known Presentation line style | future module PASS |
| V14 | both known Presentation properties | future module PASS |
| V15 | unknown arrow token | accepted and preserved |
| V16 | unknown line-style token | accepted and preserved |
| V17 | unknown Presentation field | accepted/preserved, optional warning |
| V18 | malformed Presentation payload | future module error |
| V19 | unsupported Presentation version | future module warning |
| V20 | orphan Presentation Relation ID | ORPHAN-E unresolved |
| V21 | live and orphan records together | ORPHAN-E unresolved; no global sweep |
| V22 | unrelated unknown Extension beside Presentation | warning, valid, preserved |
| V23 | Dataset after LiaisonScape Relation deletion | Core-valid; Presentation orphan result still unresolved |
| V24 | orphan severity/repair choice | blocked pending specification decision |
| V25 | empty/default Presentation omission | pending normative omission/default decision |

## Implementation size and affected surfaces

Classification: **MEDIUM**, after the orphan decision is made. Expected
implementation surfaces are a new Presentation validator module, central
Extension registration, focused unit/fixture tests, and diagnostic-contract
documentation. No Core validator rewrite, schema change, LiaisonScape runtime
change, Hub/NarrativeLine change, or new diagnostic severity is expected.

The next implementation checkpoint must first resolve ORPHAN-E and confirm
whether V10 and V25 are normative Validator requirements or remain
application/schema boundaries. Until then, the correct outcome is
`BLOCKED — SPEC DECISION REQUIRED`; this document does not authorize that
implementation.

## Explicit exclusions

This checkpoint does not modify e2r-validator, LiaisonScape, schemas,
roadmap, sample data, version numbers, Handoff, or central knowledge. It does
not push, publish, deploy, or start the next checkpoint.
