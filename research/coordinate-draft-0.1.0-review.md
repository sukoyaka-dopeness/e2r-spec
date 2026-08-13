# Coordinate Draft 0.1.0 Review

Date: 2026-08-13

Status: Read-only Validator, Linkscape preservation, and Linkscape migration
readiness-profile evidence passed; Draft writing and migration execution remain
pending; non-normative review record

## Scope

This review checks these artifacts as one exact candidate definition:

- `extensions/coordinate-extension-draft.md`;
- `schemas/extensions/coordinate-draft.schema.json`;
- `examples/coordinate-draft/`;
- `examples/invalid/extensions/coordinate-draft/`;
- `examples/coordinate/migration-refusal/`; and
- `scripts/validate-coordinate-draft-schema.mjs`.

The review compares them with the accepted compatibility, external-reference,
version-bootstrap, Space-evolution, and maturity decisions. It does not register
a Stable identifier, change the frozen prototype, or authorize automatic
application migration.

## Result

Draft `0.1.0` is internally consistent and now has passing draft-aware,
read-only Validator implementation evidence.

The review does not approve Stable registration. It also does not yet prove:

- application migration behavior;
- cross-application draft round trips;
- write-profile implementation;
- external-definition resolution; or
- preservation through an application that does not understand the draft.

Those remain subsequent executable evidence gates.

The Validator evidence confirms that the distinct Prototype and Draft
identities are recognized independently, all 5 valid and 18 invalid Draft
fixtures receive the expected validity result and Draft-specific diagnostic
coverage, unsupported exact versions are not interpreted using `0.1.0` rules,
and opaque Component IDs produce escaped JSON Pointer paths. The Validator
does not migrate, repair, normalize, resolve external definitions, or
authorize writes.

Linkscape preservation evidence confirms that exact Draft `0.1.0` fixtures and
an opaque later-version payload survive open, Core Detail editing,
serialization, and Export without normalization. Linkscape refuses to create
or update the separate Prototype identity when the Draft identifier occurs on
the Dataset or any Core Object. It does not yet use Draft Coordinates for graph
positions, write Draft payloads, or migrate Prototype data.

Linkscape now also has a non-mutating migration-readiness assessment and an
explicitly narrow capability profile. It accepts only the exact
`linkscape-graph` kind, `x`/`y` Components, unit, and directions that Linkscape
implements. It rejects unknown Prototype fields, existing Draft occurrences,
external references, bounds, periods, other Spaces, unsupported Components,
and incomplete or conflicting simple Specification declarations. The
cross-application demo is deliberately refused as one atomic migration because
Linkscape does not implement its additional `harbor-site-plan` Space.

## Traceability matrix

| Responsibility | Normative result | Executable evidence | Review |
| --- | --- | --- | --- |
| Extension identity | Draft and prototype use distinct exact payload keys | Prototype and draft fixtures coexist only in a migration-refusal case | Pass |
| Bootstrap | Dataset `specVersion` is authoritative; object versions and prototype `formatVersion` are prohibited | Missing, substituted, duplicate-placement, and matching cases | Pass |
| Specification interaction | Supported `uses` declaration must occur exactly once and agree | Matching, missing, duplicate, and conflicting declarations | Pass |
| Space ID | Non-whitespace, Dataset-local, exact, case-sensitive, no required UUID/URI syntax | Whitespace rejection and valid `/`/`~` opaque IDs | Pass |
| Component identity | Exact Space-local keys; member order is irrelevant | Key resolution and unresolved-key rejection | Pass |
| Numeric constraints | Partial finite values; bounds and period constraints | Inverted bounds, out-of-range values, and partial values | Pass |
| External reference | Local definition remains operational; explicit unique axis binding; context-only data is read-only | Bound CRS84 fixture, context-only migration output, missing-reference and duplicate-binding rejection | Pass |
| Placement | Dataset definitions plus Entity/Event values; no Relation payload | Dataset-payload-missing and Relation-scope fixtures | Pass |
| Reference integrity | Unique Spaces and per-object Coordinates; every Space and Component resolves | Duplicate and unresolved fixtures | Pass |
| Space evolution | Display and valid-bound edits may retain ID; semantic changes require create-and-migrate | Normative operation rules; snapshot schema intentionally does not infer edit history | Pass for design; application evidence pending |
| Migration | Explicit, complete, atomic, no alias synchronization | Exact known-field output plus unknown-source and existing-target refusal fixtures | Pass for contract; application evidence pending |
| Unknown data | Ignored and preserved inside one supported exact version | Schema permits unknown draft fields | Pass for draft reads; cross-application evidence pending |

## Findings resolved during review

### R1. Context-only external references could appear writable

Earlier wording required verification of an external binding only when one was
"required" without defining that condition narrowly enough.

Resolution: every Component in a Space carrying `externalReference` now needs
an explicit verified `externalComponent` for writing. A context-only reference
remains locally readable and preservable but read-only.

### R2. An unsupported Specification payload could appear compatible with a write

Earlier write conditions referred to structurally valid declarations but did
not explicitly require the writer to support the exact Specification version.

Resolution: when Specification occurs, the writer must support its exact
version and verify complete, consistent declarations. Absence remains valid;
unsupported presence does not silently govern Coordinate.

### R3. Unknown Prototype fields had no deterministic migration outcome

Copying an unknown field from the experimental identifier under the distinct
draft identifier could accidentally give it a new specification context.
Dropping it would violate preservation expectations.

Resolution: the first migration refuses atomically when any Prototype
Coordinate object contains an unknown field. The source remains unchanged and
preservable. A refusal fixture exercises this boundary.

### R4. Existing Draft data had no explicit migration collision rule

A Dataset containing both identities could invite merge, overwrite, or
synchronized-alias behavior.

Resolution: Prototype migration refuses if the Draft identifier already occurs
anywhere. A refusal fixture exercises this boundary.

### R5. Standalone declaration diagnostics did not cover duplicates

The Specification Extension already prohibits duplicate `uses` declarations,
but the Coordinate draft fixture validator checked only missing and conflicting
values.

Resolution: the draft fixture validator now reports a Coordinate-specific
duplicate declaration issue as well.

### R6. Diagnostic paths needed to respect opaque Component IDs

Because Component IDs may contain `/` and `~`, inserting them directly into a
JSON Pointer diagnostic path produces the wrong location.

Resolution: semantic diagnostic paths escape JSON Pointer segments. A valid
fixture confirms that these characters remain legal identity data rather than
being rejected or normalized.

## Schema boundary

The JSON Schema is specifically the schema for exact draft version `0.1.0`.
A processor must inspect the bootstrap before choosing it. A syntactically
valid later `specVersion` is unsupported by a `0.1.0` processor; it is not to be
validated against this schema and then described as malformed `0.1.0` data.

The schema covers placement and local field shapes. Semantic validation covers
uniqueness, cross-references, bound ordering, value ranges, external-binding
uniqueness, and Coordinate/Specification agreement. Core validation and full
Specification Extension validation remain separate layers.

Space evolution is an operation over an earlier and later Dataset, not a fact
recoverable from one snapshot. Therefore same-ID edit history and create-and-
migrate intent belong to writer behavior and transition tests rather than the
snapshot JSON Schema.

## Migration boundary

The successful migration fixture represents one exact source for which the
migrator has an explicit capability profile, including its prototype `kind`
and descriptors. The fixture script verifies the expected atomic projection;
it is not a generic application migration implementation.

Migration refusal preserves the original Prototype layer. It does not make a
structurally preservable Dataset invalid merely because automatic migration is
unavailable.

## Remaining review risks

The following risks remain after the read-only Validator gate:

1. Linkscape migration execution must use its reviewed narrow capability
   profile and validate the complete proposed target rather than copying the
   fixture helper as a generic migrator.
2. NarrativeLine must still prove preservation of supported and unsupported
   Draft payloads before becoming a Draft writer. Linkscape has passed this
   preservation gate but remains read-only for the Draft identity.
3. External-aware writing must remain disabled until exact reference and axis
   support is implemented; network access remains optional.
4. The new Validator support remains unreleased until the ordinary package
   release process is completed.

## Completed Validator gate

The read-only Validator implementation now:

- recognize the distinct Draft and Prototype identities independently;
- bootstrap on Coordinate `specVersion` before schema selection;
- report schema and semantic diagnostics with Coordinate-draft-specific codes;
- integrate supported Specification declaration agreement without duplicating
  unrelated Specification diagnostics;
- treat unsupported exact versions as preservable and not validate them as
  `0.1.0`; and
- pass all 5 valid and 18 invalid Draft fixtures while the repository-level
  migration projection and refusal checks remain green.

Both the Validator's complete verification suite and the specification's
schema/semantic fixture suite pass as of 2026-08-13.

## Next implementation gate

Before migration execution or UI is enabled, Linkscape must be able to run the
Draft-aware Validator implementation against the complete proposed target.
Validator `0.2.0` has been prepared and locally verified as the release
candidate containing that support, including package-content inspection and a
clean tarball-install smoke test. Publication, tag creation, and post-release
installation verification remain external release steps. Once the published
dependency is available, Linkscape may add a pure atomic target projection
that runs the readiness assessment, constructs the complete Draft target,
validates it, and returns either the whole target or the original Dataset with
a refusal. Opening, displaying, arranging, ordinary saving, and Export must
not trigger migration.
