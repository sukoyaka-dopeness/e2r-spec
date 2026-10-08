# Dimension Assessment Extension Candidate 0.2.0

Status: Human-adopted Candidate `0.2.0`; not a registered Stable Extension.

Display name: Dimension Assessment Extension

Candidate Extension identifier: `draft.github.sukoyaka-dopeness.dimension-assessment`

Candidate specification version: `0.2.0`

This document defines the exact Candidate 0.2.0 contract. Candidate 0.1.0
remains independently defined by the [0.1.0 specification](dimension-assessment-extension-candidate.md)
and its [0.1.0 schema](../schemas/extensions/dimension-assessment-candidate.schema.json).
This additive Candidate version does not register or promote a Stable
Extension. The key words MUST, MUST NOT, SHOULD, SHOULD NOT, and MAY state
requirements of Candidate 0.2.0 only.

## Change from Candidate 0.1.0

Candidate 0.2.0 adds one optional `description` string to a Dimension
definition. All other Dimension and Assessment semantics remain those defined
in Candidate 0.1.0. A processor MUST select the exact rules and schema from
`specVersion`; it MUST NOT interpret a 0.2.0 payload as 0.1.0 or silently
downgrade it.

## Responsibility

The Dimension Assessment Extension records explicitly defined numeric
Dimensions and explicitly authored assessments of Entities against those
Dimensions. It provides Dataset-portable comparison data while keeping the
meaning of each Dimension defined by its author. A Dimension Description adds
human-readable context to that author-defined meaning; it is not a machine
executable scoring rule.

This Extension does not define arbitrary numeric Entity properties, a general
measurement or physical-quantity model, time, coordinates, price,
probability/confidence, ranking, chart geometry, normalized display values,
selection, or view state. A numeric value does not belong here solely because
it is numeric. An Assessment is not an Observation, measurement series,
evidence, or provenance record.

Normalization, Radar vertices, Quadrant positions, ranks, and other
application projections are Derived values or Application View State. They
MUST NOT be stored as Dimension Assessment data. Candidate 0.2.0 does not
define an assessor, timestamp, Assessment-specific rationale or evidence,
multiple observations, or a measurement model.

## Identifier, version, and placement

The exact Candidate identifier is unchanged:

```text
dataset.extensions["draft.github.sukoyaka-dopeness.dimension-assessment"]
```

The Dataset-level payload MUST contain `specVersion: "0.2.0"`. This exact
version is not the Dataset Core `version`, a Dataset revision, or a common
Extension version field. A processor MUST read `specVersion` before
interpreting other payload members. An unsupported exact version MUST NOT be
interpreted using another version's rules; its payload SHOULD be preserved
whenever practical.

If a supported Specification Extension is present, its complete `uses` array
MUST contain exactly one declaration for this identifier, with `version`
equal to `specVersion`. The payload-owned version remains authoritative; a
disagreement is a declaration conflict. A writer MUST NOT create an
incomplete Specification payload only to declare this Candidate.

Example:

```json
{
  "extensions": {
    "draft.github.sukoyaka-dopeness.dimension-assessment": {
      "specVersion": "0.2.0",
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
| `specVersion` | REQUIRED | Exact Candidate version; `0.2.0` |
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
| `description` | OPTIONAL non-blank string | Plain human-readable explanation of what the Dimension assesses, how its scale including MIN/MAX is understood, and any shared temporal premise |

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

#### Dimension Description

`description` is OPTIONAL. When present, it MUST be a JSON string containing
at least one non-whitespace character. An absent Description means no
human-readable explanation is supplied for that Dimension. An empty or
whitespace-only string is not a meaningful Description and is invalid; a
writer SHOULD omit the member when it has no meaningful text.

Description text is plain text. Markdown syntax, if present, has no defined
formatting semantics and MUST NOT be interpreted as Markdown by virtue of
this field. Line breaks are permitted. This Candidate defines no fixed
character limit. The non-blank constraint does not prescribe trimming,
whitespace normalization, line-ending conversion, or any other rewriting of
the stored string.

A Description is informational prose for human readers. It MAY explain the
assessed subject or capability, the interpretation of the Dimension's MIN,
MAX, and values, and a temporal premise shared by its Assessments. It MUST NOT
be treated as a machine-interpreted rubric or as a source for deriving or
changing Assessment values. Description does not add structured rubric,
temporal scope, rationale, evidence, or provenance fields.

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
unassessed. Numeric zero is an ordinary authored value wherever it is within
range. This version defines no `null` Assessment value and no separate
unknown, inapplicable, or other missing-value taxonomy.

## Reference lifecycle

A writer that deletes a Dimension MUST remove all Assessments referring to
that Dimension in the same successful Dataset mutation, or refuse the
deletion. It MUST NOT leave dangling Assessments. If an Entity deletion is
permitted by the other applicable E2R rules and Product policy, the writer
MUST remove that Entity's Assessments in the same successful mutation. This
Extension does not authorize deletion of any Core object and does not define
Core Entity deletion policy.

A consumer that does not support this exact Candidate MUST treat the payload
as unsupported, MUST NOT reinterpret it as another model or version, and
SHOULD preserve it whenever practical. A writer that cannot preserve an
unsupported payload MUST refuse an unrelated write that would drop or rewrite
it. Structural schema validity does not establish Dataset-reference validity
or safe mutation behavior.

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
algorithm. Another consumer may refuse the range change instead.

## Schema and validation boundary

The [Candidate 0.2.0 schema](../schemas/extensions/dimension-assessment-candidate-0.2.0.schema.json)
checks the payload's JSON shape and Description type/non-blank requirement.
The repository's focused [Candidate validation script](../scripts/validate-dimension-assessment-candidate.mjs)
checks the schema and retains the same cross-record checks for both exact
Candidate versions: finite and ordered bounds, integer candidate availability,
paired endpoint labels, unique Dimension IDs, unique Entity-by-Dimension
pairs, in-range/integer values, Entity/Dimension references, and Specification
Extension version agreement.

Neither check implements the production E2R Validator, validates unrelated
Core or Extension rules, nor proves an application's preservation behavior.
Production Validator integration, application authoring, interoperability
testing across independent consumers, migration, and Stable promotion remain
separate work.
