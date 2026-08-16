# Coordinate Version Bootstrap and Space Evolution Decision

Date: 2026-08-13

Status: Accepted non-normative design record; incorporated into Coordinate
draft `0.1.0`

## Purpose

This memo resolves two connected design tasks for the future
`draft.github.sukoyaka-dopeness.coordinate` candidate:

1. how a processor discovers the exact Coordinate specification version when
   the Specification Extension is absent, present, unsupported, or
   conflicting; and
2. which changes may retain a Dataset-local Space ID without reinterpreting
   existing Coordinates.

It does not change the frozen experimental prototype, define the normative
draft schema, migrate a Dataset, or register a Stable Extension.

## Decision summary

The Coordinate draft will own a required Dataset-level `specVersion` bootstrap
field. That field is the authoritative version selector for every Coordinate
payload occurrence in the Dataset. A supported Specification Extension may
repeat the exact version in `uses`, but that declaration is a consistency
assertion rather than an alternative selector and must agree.

A Space ID identifies one continuing Space definition within one Dataset. The
same ID may survive display-name edits and bounded constraint edits that leave
every recorded value valid. Changes to Component identity or semantics,
`kind`, cyclic behavior, or external bindings create a new Space identity and
therefore require a new Space ID plus explicit Coordinate migration.

The draft will not add per-Space versions, aliases, or automatic synchronized
copies.

## Part I: exact-version bootstrap

### V1. The draft owns `specVersion`

The future Dataset-level payload will begin with an exact specification
version:

```json
{
  "extensions": {
    "draft.github.sukoyaka-dopeness.coordinate": {
      "specVersion": "0.1.0",
      "spaces": []
    }
  }
}
```

`specVersion` is REQUIRED and uses the same `MAJOR.MINOR.PATCH` release-version
syntax selected by Specification draft `0.1.0`. It identifies the immutable
Coordinate specification definition governing the payload. It is not the Core
version, a Dataset revision, a Space revision, or an application version.
Using the same field name as the Specification draft does not create a common
Core wrapper; each Extension owns and defines its own bootstrap field.

An application recognizes the exact Coordinate payload key, reads only the
bootstrap field, and then chooses the locally available rules for that exact
version. The Dataset-level bootstrap governs Dataset, Entity, and Event
Coordinate payload occurrences. Object-level payloads do not repeat it.

### V2. Coordinate remains independently interpretable

Coordinate requires its own bootstrap because Specification is optional and
may itself be unknown or unsupported. A conforming Coordinate Dataset does not
need a Specification payload merely to establish its Coordinate version.

If Coordinate `specVersion` is:

- missing or malformed, the Coordinate draft payload is structurally invalid
  and its remaining fields must not be interpreted as a supported version;
- exact and locally supported, the processor may validate and interpret it
  using that version; or
- syntactically valid but unsupported, the processor preserves all Coordinate
  occurrences when practical and must not apply another version's rules.

Unsupported Coordinate data does not invalidate unrelated Core data.

### V3. A Specification declaration is corroboration

When a supported Specification Extension payload is present, its `uses` array
must contain the Coordinate declaration required by Specification's existing
completeness rule. The declared `version` must exactly equal Coordinate's
Dataset-level `specVersion`.

The Coordinate-owned field remains the version selector for Coordinate. The
central declaration records the same fact for cross-Extension inspection,
dependency processing, and complete Dataset declarations. It does not
override the Coordinate payload.

If the two exact values disagree:

- the Dataset has a Specification Extension declaration conflict;
- a reader may still validate Coordinate against its supported internal
  `specVersion`, while reporting the conflict separately;
- neither value is silently rewritten; and
- a writer must not modify Coordinate or its declaration until an explicit
  operation chooses and produces one consistent result.

This creates one governing Coordinate bootstrap and one checked assertion,
not two values from which a processor guesses.

### V4. Unsupported Specification data cannot govern Coordinate

If the Specification payload is missing, malformed, or at an unsupported
`specVersion`, its `uses` declarations do not establish Coordinate's version.
Coordinate processing continues from Coordinate's own bootstrap.

Conversely, a supported Specification declaration cannot make a malformed or
missing Coordinate bootstrap valid. A central declaration does not substitute
for a required Extension-owned field.

### V5. Writer behavior preserves declaration completeness

A Coordinate-aware writer may create or edit a supported draft Coordinate
payload without creating the optional Specification Extension. It must always
write the Coordinate-owned `specVersion`.

If a supported Specification payload is already present, a writer may save
Coordinate only when it can preserve Specification's complete, exact `uses`
declarations and keep the Coordinate declaration equal to the internal
bootstrap. A Coordinate-only writer must not add an incomplete Specification
payload merely to declare Coordinate.

If the existing Specification payload is unsupported, malformed, incomplete,
or conflicting in a way the writer cannot safely repair through an explicit
user operation, the requested Coordinate edit remains unapplied.

### V6. `formatVersion` remains prototype-only

Frozen prototype `0.1.0` continues to use:

```text
experimental.github.sukoyaka-dopeness.coordinate + formatVersion
```

The draft uses:

```text
draft.github.sukoyaka-dopeness.coordinate + specVersion
```

`formatVersion` is not an alias for `specVersion`. Renaming the field or the
payload key is not migration. An explicit migration must validate the exact
prototype, create a separately identified draft payload, and update or create
a Specification declaration only when it can remain complete and consistent.

### V7. Content edits do not change `specVersion`

Creating, editing, or deleting a Space or Coordinate does not change the
Coordinate specification version. `specVersion` changes only when an explicit
operation migrates the payload to another published Coordinate specification
definition.

A later Coordinate specification version must retain its published meaning.
A processor must not edit a payload at an unsupported version merely because
its fields resemble a supported version.

## Part II: Space identity and evolution

### S1. Scope and continuity of a Space ID

A Space ID is exact, case-sensitive, and unique within one Dataset Coordinate
payload. It is not a cross-Dataset identity and has no network resolution
behavior.

Within one Dataset's editing lineage, the ID denotes one continuing Space
definition. Producers must not recycle an old ID for different Component
semantics merely because no current object refers to it.

Changing the ID creates a new identity. A spelling change is not a display-name
edit and is not an alias.

### S2. Changes that may retain the same Space ID

The same ID may be retained for these explicit edits:

1. adding, removing, or changing the Space's human-readable `name`;
2. adding, removing, or changing a Component's human-readable `name`; and
3. adding, removing, or changing `minimum` or `maximum` when the resulting
   bounds are structurally valid and every existing recorded value for that
   Component remains within them.

Names are display metadata and do not change compatibility. Bounds constrain
stored and future values but do not redefine Component identity, unit,
direction, or cyclic interpretation.

An application changing bounds must inspect every Entity and Event Coordinate
using that Space. If it cannot prove that all recorded values remain valid, it
must refuse the in-place change. For an externally referenced Space, the
writer's verified external profile must also accept the resulting bounds.
Missing partial values remain missing and are not filled to satisfy a bound.

Ordinary edits to an object's numeric Coordinate values also retain the Space
ID when the writer's exact capability profile authorizes the edit and the new
values satisfy the current definition.

### S3. Changes that require a new Space ID

The following changes are identity- or interpretation-affecting and must not
replace a Space definition in place:

- adding, removing, or renaming a Component ID;
- adding, removing, or changing `kind`;
- adding, removing, or changing a Component's `unit`;
- adding, removing, or changing `positiveDirection`;
- adding, removing, or changing `period`;
- adding, removing, or changing `externalReference`;
- adding, removing, or changing an `externalComponent` binding;
- changing the intended meaning of a Component while leaving its strings
  unchanged; or
- changing bounds in a way that makes any recorded value invalid.

Absence and presence remain distinct for semantic descriptors. For example,
adding `unit` to a previously unitless Component is not treated as a harmless
annotation.

Component addition requires a new Space even though Coordinates are partial.
Adding a dimension or quantity changes the Space definition; partial values
make migration safer but do not make the two Spaces identical.

### S4. Incompatible change is create-and-migrate

An explicit incompatible evolution follows this sequence:

1. create a complete new Space definition under a new, unique ID;
2. leave the old Space and its Coordinates unchanged;
3. create new object Coordinates through an explicit, supported Component
   mapping or transformation;
4. permit old and new Coordinates to coexist because their `spaceId` values
   differ;
5. update other supported references explicitly; and
6. remove the old Coordinates and then the old Space only after the applicable
   references have been handled.

If unchanged Components can be copied exactly, the migration may do so, but it
must still be an intentional operation. Changed units, direction, period, or
external semantics require a defined transformation rather than lexical
renaming.

The draft does not prescribe a Space ID suffix such as `-v2`. The producer
chooses a new Dataset-local ID and must not treat it as an automatically
synchronized alias.

### S5. Reference integrity controls deletion

Every Entity or Event `spaceId` must resolve to exactly one Dataset-level
Space. Therefore:

- a referenced Space must not be deleted;
- deleting a Space and its Coordinates must be one intentional operation with
  no unresolved intermediate result in the saved Dataset;
- a Component definition must not disappear while recorded values still use
  its key; and
- duplicate old and new definitions under one ID are invalid rather than a
  merge mechanism.

An unreferenced Space may be deleted explicitly. Coordinate conformance checks
Coordinate's own Entity and Event references. If another supported Extension
references Space IDs, that Extension must define its reference lifecycle and
the application must satisfy it as well. Unknown Extension data is preserved;
Coordinate does not guess whether an unknown field is a Space reference.

### S6. No per-Space version or alias table in the first draft

The first Coordinate draft will not add:

- `spaceVersion`;
- a Space revision counter;
- `previousSpaceId` or `replacesSpaceId`;
- an alias map;
- an automatic transform registry; or
- last-writer ownership metadata.

The existing exact Space ID, immutable specification version, explicit
create-and-migrate operation, and structural reference checks are sufficient
for the demonstrated workflows. Additional lineage or concurrency metadata
requires separate evidence and responsibility analysis.

Specification Extension `evolution` records lineage among Extension
specification versions. It is not a registry for individual Dataset-local
Spaces and does not define their migration.

### S7. Unknown fields and unsupported versions

At a supported exact Coordinate version, unknown fields must be preserved when
practical and cannot redefine known fields. A writer may make one of the
permitted in-place edits while preserving those unknown fields unchanged.

At an unsupported Coordinate version, the processor cannot classify Space
changes using this memo's rules. It must preserve the payload and refuse Space
or Coordinate writes rather than applying `0.1.0` evolution rules by shape.

### S8. Concurrent or stale definitions do not merge implicitly

Coordinate does not define concurrent editing or last-writer priority. Before
changing a Space, a writer should verify that the current definition still
matches the definition on which its operation was based.

If a merge produces two definitions for the same Space ID, or a stale writer
would overwrite a semantic change, the processor must not choose one by array
order or application identity. It preserves the conflicting input when
possible, reports the conflict, and requires an explicit resolution.

## Illustrative evolution examples

These examples are design illustrations, not draft fixtures.

### Same ID

Changing `name`, adding a Component display name, or narrowing `x.maximum`
from `1000` to `900` may keep `linkscape-graph` only when every stored `x`
value is at most `900`.

### New ID

Changing `y.positiveDirection` from `display-down` to `display-up` requires a
new Space. Existing `y` values cannot be reinterpreted in place; an explicit
operation creates values in the new Space according to a known transformation.

Adding a `z` Component also creates a new Space because it changes the defined
set of quantities, even though existing object Coordinates may omit `z`.

## Consequences for the first draft

The future Coordinate draft schema, text, fixtures, and migration must:

- require Dataset-level `specVersion` and omit it from object-level payloads;
- make a supported Specification declaration agree with that bootstrap;
- distinguish malformed, unsupported, and declaration-conflict states;
- retain `formatVersion` only in the frozen prototype contract;
- define same-ID display and bound edits narrowly;
- require new IDs for Component or semantic-definition changes;
- enforce reference integrity during deletion and migration; and
- avoid per-Space versions, aliases, or automatic transforms.

## Subsequent implementation status

The normative draft contract, machine-readable schema, valid and invalid
fixtures, and explicit prototype-to-draft migration are now assembled in
`../extensions/coordinate-extension-draft.md` and its linked resources.
`coordinate-draft-0.1.0-review.md` records the passed repository review.
Applications and the published Validator remain unchanged while read-only
Validator implementation evidence is the next gate.
