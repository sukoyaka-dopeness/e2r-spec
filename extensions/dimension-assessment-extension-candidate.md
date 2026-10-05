# Dimension Assessment Extension Candidate

Status: Human-adopted Candidate `0.1.0`; not a registered Stable Extension.

Display name: Dimension Assessment Extension

Candidate Extension identifier: `draft.github.sukoyaka-dopeness.dimension-assessment`

Candidate specification version: `0.1.0`

Human adopted this bounded portable contract on 2026-10-05, following
ParameterPlotter prototype evidence. Adoption establishes this Candidate
specification only; it does not register a Stable identifier, authorize an
application implementation, or establish runtime Validator support. The
accompanying JSON Schema checks payload shape; Dataset-reference and
cross-record semantics require semantic validation. The key words MUST,
MUST NOT, SHOULD, SHOULD NOT, and MAY state requirements of this Candidate
version only.

## Responsibility

The Dimension Assessment Extension records explicitly defined numeric
Dimensions and explicitly authored assessments of Entities against those
Dimensions. It provides Dataset-portable comparison data while keeping the
meaning of each Dimension defined by its author.

This Extension does not define arbitrary numeric Entity properties, a general
measurement or physical-quantity model, time, coordinates, price,
probability/confidence, ranking, chart geometry, normalized display values,
selection, or view state. A numeric value does not belong here solely because
it is numeric. An Assessment is not an Observation, measurement series,
evidence, or provenance record.

Normalization, Radar vertices, Quadrant positions, ranks, and other
application projections are Derived values or Application View State. They
MUST NOT be stored as Dimension Assessment data. Version `0.1.0` does not
define an assessor, timestamp, evidence or provenance, multiple observations,
or a measurement model.

## Identifier, version, and placement

The exact Candidate identifier is the Extension identity and payload key:

```text
dataset.extensions["draft.github.sukoyaka-dopeness.dimension-assessment"]
```

The Dataset-level payload MUST contain `specVersion: "0.1.0"`. This is the
exact Dimension Assessment specification version, not the Dataset Core
`version`, a Dataset revision, or a common Extension version field. A
processor MUST read `specVersion` before interpreting other payload members.
An unsupported exact version MUST NOT be interpreted using `0.1.0` rules; its
payload SHOULD be preserved whenever practical.

The Specification Extension is optional. If a supported Specification
Extension is present, its complete `uses` array MUST contain exactly one
declaration for this identifier, with `version` equal to `specVersion`. The
payload-owned version remains authoritative; a disagreement is a declaration
conflict. A writer MUST NOT create an incomplete Specification payload only
to declare this Candidate.

Example:

```json
{
  "extensions": {
    "draft.github.sukoyaka-dopeness.dimension-assessment": {
      "specVersion": "0.1.0",
      "dimensions": [],
      "assessments": []
    }
  }
}
```

The Extension is not Stable. Stable registration, runtime Validator support,
and implementation in any application require separate work and evidence.

## Dataset payload

The payload MUST contain:

| Field | Requirement | Meaning |
| --- | --- | --- |
| `specVersion` | REQUIRED | Exact Candidate version; `0.1.0` |
| `dimensions` | REQUIRED array | Dimension definitions; MAY be empty |
| `assessments` | REQUIRED array | Entity assessments; MAY be empty |

Array order has no semantic meaning. It MUST NOT establish identity, rank,
selection, default Dimension, chart axis, or display order. Empty arrays do not
mean a default Dimension or Assessment.

### Dimension definition

Each item in `dimensions` defines one Dimension:

| Field | Requirement | Meaning |
| --- | --- | --- |
| `id` | REQUIRED non-empty string | Stable identity within this Dataset's Dimension Assessment payload |
| `name` | REQUIRED string | Human-readable Dimension name; not identity |
| `min` | REQUIRED finite number | Inclusive lower hard bound |
| `max` | REQUIRED finite number | Inclusive upper hard bound |
| `integerOnly` | OPTIONAL boolean | If true, Assessment values MUST be integers; omitted and false both permit finite numbers |
| `unit` | OPTIONAL string | Free-text metadata only |
| `lowLabel` | OPTIONAL string | Human-readable label for the lower endpoint |
| `highLabel` | OPTIONAL string | Human-readable label for the upper endpoint |

Dimension IDs MUST be unique within `dimensions`. An ID is compared as an
exact string and remains stable when the Dimension's `name` changes. This
Candidate does not require a UUID, URI, prefix, global identifier syntax, or
particular ID generation algorithm. Dimension names MUST NOT resolve
references or establish identity.

`min` and `max` MUST be finite JSON numbers and `min` MUST be less than `max`.
The interval is inclusive. If `integerOnly` is true, at least one integer
MUST lie in the inclusive interval; equivalently, there must be an integer
`n` for which `min <= n <= max`. A Dimension with no such integer is invalid.

When `unit` is present it is opaque free text. This Candidate defines no unit
parser, conversion, SI normalization, or dimensional analysis. When endpoint
labels are used, both `lowLabel` and `highLabel` MUST be present together;
either both are absent or both are present. Labels do not alter range meaning.
This version defines no trimming or normalization rule for Dimension names,
units, or endpoint labels.

### Assessment record

Each item in `assessments` has exactly these required members:

| Field | Requirement | Meaning |
| --- | --- | --- |
| `entityId` | REQUIRED string | ID of an existing Core Entity in the same Dataset |
| `dimensionId` | REQUIRED string | ID of an existing Dimension in this payload |
| `value` | REQUIRED finite number | Explicitly authored Assessment within that Dimension's range |

An Assessment has no independent ID. The exact pair `(entityId, dimensionId)`
is its identity. A Dataset MUST contain at most one Assessment for each pair.
Each referenced Entity and Dimension MUST exist. Dangling Assessments are
invalid. Assessment order has no meaning.

`value` MUST be finite and satisfy `min <= value <= max` for its Dimension.
When that Dimension has `integerOnly: true`, `value` MUST be an integer. Range
bounds are hard bounds; an out-of-range Assessment is not a valid portable
state and MUST NOT be retained as a conforming Assessment.

The absence of an Assessment record for an Entity-by-Dimension pair means
unassessed. Numeric zero is an ordinary value wherever it is within range.
This version defines no `null` Assessment value and no separate unknown,
inapplicable, or other missing-value taxonomy.

## Reference lifecycle

A writer that deletes a Dimension MUST remove all Assessments referring to
that Dimension in the same successful Dataset mutation, or refuse the
deletion. It MUST NOT leave dangling Assessments. If an Entity deletion is
permitted by the other applicable E2R rules and Product policy, the writer
MUST remove that Entity's Assessments in the same successful mutation. This
Extension does not authorize deletion of any Core object and does not define
Core Entity deletion policy.

A consumer that does not support this exact Candidate MUST treat the payload
as unsupported, MUST NOT reinterpret it as another model, and SHOULD preserve
it whenever practical. A writer that cannot preserve an unsupported payload
MUST refuse an unrelated write that would drop or rewrite it. Structural
schema validity does not establish Dataset-reference validity or safe
mutation behavior.

## Application operation boundary: range changes

The Extension defines the resulting valid portable state, not an application
mutation algorithm. A consumer changing a Dimension range MUST NOT silently
clamp or delete an existing Assessment to make the result conform. It MAY
refuse a range change that would make an existing Assessment invalid.

ParameterPlotter has a separate Human-decided authoring operation: it may
offer an explicit Rescale choice, linearly mapping the old range-relative
position into the new range; for an integer-only Dimension it selects the
nearest valid integer, breaking equal-distance ties away from zero. The user
must review and approve the result before it is written. This is
ParameterPlotter behavior, not a normative Dimension Assessment mutation
algorithm. Another consumer may refuse the range change instead. Confirmation
dialogs, view updates, and other interaction details are application UX, not
portable payload semantics.

## Schema and validation boundary

A complete [Dataset example](../examples/dimension-assessment-candidate/basic.json)
shows two Dimensions and sparse Entity Assessments. The [Candidate schema](../schemas/extensions/dimension-assessment-candidate.schema.json)
checks the payload's JSON shape and field types. The repository's focused
[Candidate validation script](../scripts/validate-dimension-assessment-candidate.mjs)
also checks the Candidate semantics that require relationships across fields
or the containing Dataset: finite and ordered bounds, integer candidate
availability, endpoint-label pairing, unique Dimension IDs, unique
Entity-by-Dimension pairs, in-range/integer values, and Entity/Dimension
references.

Neither check implements the production E2R Validator, validates unrelated
Core or Extension rules, verifies a Specification Extension declaration in
every possible Dataset, or proves an application's preservation behavior.
Production Validator integration, application authoring, interoperability
testing across independent consumers, migration, and Stable promotion remain
separate work.
