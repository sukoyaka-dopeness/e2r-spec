# LiaisonScape Rename and Coordinate Space Migration Decision

Status: accepted for staged implementation

This decision separates the LiaisonScape product rename from Coordinate
Extension identity evolution. It does not change the frozen Coordinate
Prototype `0.1.0` evidence.

## Accepted names

- Product: `LiaisonScape` (formerly `Linkscape`)
- Repository: `e2r-liaison-scape` (formerly `e2r-linkscape`)
- Descriptor: `relationship explorer`
- New application-owned Space: `liaisonscape-graph`
- New x/y unit descriptor: `liaisonscape-user-unit`

Historical identifiers remain meaningful compatibility data:
`linkscape-graph`, `linkscape-user-unit`, and legacy `spaceId: "linkscape"`.
They are not aliases for the new identifiers.

## Compatibility and migration

An existing exact supported `linkscape-graph` profile remains readable and
may receive bounded normal coordinate write-back. Write-back requires unique
Space and Coordinate claims, exact supported kind, Component IDs, units and
directions, preservation of unknown fields, and maintainable Specification
consistency. Normal save never creates a new Space and never silently migrates
the old one. New intentional Coordinate adoption uses only the LiaisonScape
profile.

`Migrate Linkscape coordinates to LiaisonScape` is a separate explicit,
atomic operation. It creates and validates a complete `liaisonscape-graph`
profile, migrates supported Coordinates, updates supported references, and
retires the old Space only when reference safety is established. Unsupported
opaque Extension data is never searched heuristically; if safety cannot be
established, migration refuses and leaves the Dataset unchanged.

If old and new Spaces coexist, or a supported old Space and legacy
`spaceId: "linkscape"` both provide a candidate for the same object, automatic
migration refuses. Equal numeric values do not make distinct representations
equivalent.

Prototype-to-Draft migration and Space identity migration remain independent
operations. Either order may reach the same valid final state, but the two
operations are never silently chained.

## Historical boundary

Session logs, handoffs, closure records, frozen fixtures, and other historical
evidence retain the names that were true when they were written. Current
application documents and current status prose use LiaisonScape and may explain
that it was formerly Linkscape.

## Staged implementation plan

### Stage 2 — specification and application documentation

Update current E2R-SPEC application references, roadmap/status prose, and
current acceptance documentation. Leave historical sessions and frozen
Coordinate evidence unchanged. Run repository validation and link/reference
checks.

### Stage 3 — application branding and symbols

In the current application, update product-facing text, package metadata,
internal symbol stems, diagnostics, guides, and repository-facing metadata.
Do not alter persisted identifiers yet. Run the existing application tests and
build. Defer repository directory/remote rename until the final stage.

### Stage 4 — canonical Space support

Add `liaisonscape-graph` / `liaisonscape-user-unit` creation and exact-profile
write support while retaining old-profile read and bounded write-back. Add
tests proving that normal saves do not create or migrate a new Space.

### Stage 5 — explicit Space migration

Implement readiness, refusal, atomic migration, supported-reference updates,
old-Space retirement, coexistence refusal, legacy-source conflict refusal, and
unknown-data preservation. Add Prototype and Draft tests in both operation
orders.

### Stage 6 — NarrativeLine compatibility

Teach NarrativeLine to read and write the new canonical profile while retaining
required old-profile support. Preserve unknown fields and Extensions; add
cross-version round-trip tests.

### Stage 7 — interoperability evidence

Update executable cross-application fixtures to the new canonical profile and
retain explicit old-profile fixtures. Run Validator, NarrativeLine, and
LiaisonScape round-trip checks.

### Stage 8 — paths, links, and residual audit

Rename current filenames and repository-facing links where appropriate, then
perform a case-sensitive and case-insensitive residual audit. Do not rename
historical paths without preserving their historical references. Rename the
remote repository only after local tests and documentation checks pass.

## Explicit non-goals

This staged rename does not begin Entity or Relation creation, deletion,
Names work, Layout work, Core changes, Extension redesign, or unrelated
refactoring.

## Stage 1 result

`READY FOR STAGE 2`
