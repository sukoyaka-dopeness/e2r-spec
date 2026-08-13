# Specification Extension

Status: Draft candidate

Draft Extension identifier: `draft.github.sukoyaka-dopeness.specification`

Draft specification version: `0.1.0`

This document defines a candidate Extension for declaring the exact Extension
specifications used by an E2R Dataset and for carrying machine-readable
descriptions of Extension specifications.

The draft is not a registered Stable Extension. Its identifier follows the
draft naming rules in
[`spec/extension-naming.md`](../spec/extension-naming.md). Promotion to a
Stable identifier requires a separate compatibility and migration decision.

The key words MUST, MUST NOT, REQUIRED, SHOULD, SHOULD NOT, and MAY in this
document are to be interpreted as normative requirements of this draft only.

---

## Responsibility

The Specification Extension has one responsibility: describe which Extension
specifications a Dataset uses and describe relationships among those
specifications.

It may carry:

- exact used Extension specification versions;
- optional Feature identifiers actually used by the Dataset;
- immutable descriptions of published Extension specification versions;
- required dependencies, optional uses, and compatibility statements; and
- mutable lifecycle and evolution metadata kept separate from immutable
  definitions.

It does not:

- change the E2R Core;
- replace the Dataset's top-level Core `version`;
- create a common wrapper for other Extension payloads;
- assign a second canonical identifier to an Extension;
- describe application capabilities;
- define a registry, network discovery, or automatic download protocol;
- authenticate a publisher or an embedded definition; or
- define migration algorithms.

The Dictionary Extension describes the meaning of application data. The
Specification Extension describes Extension specifications and their
interoperability requirements. These are separate responsibilities.

---

## Placement and bootstrap

The payload is stored at the Dataset level under its exact Extension
identifier:

```text
extensions["draft.github.sukoyaka-dopeness.specification"]
```

The payload directly contains Specification Extension fields. The Core does
not add a common `data` or Extension `version` wrapper.

`specVersion` is REQUIRED and gives the exact version of this Specification
Extension draft:

```json
{
  "extensions": {
    "draft.github.sukoyaka-dopeness.specification": {
      "specVersion": "0.1.0",
      "uses": []
    }
  }
}
```

This is the draft's finite, one-level bootstrap. The Specification Extension
MUST NOT declare itself again in `uses`. A processor reads the known payload
key, reads `specVersion`, and then interprets the remainder according to that
exact locally available version.

If `specVersion` is missing or malformed, the draft payload is structurally
invalid. If its exact value is not supported locally, the processor MUST
preserve the payload when practical but MUST NOT assume that fields from
version `0.1.0` have the same meaning. In either case, declarations in the
uninterpreted payload do not establish exact versions for other Extensions.

`specVersion` is owned by this Extension. It does not establish a common
version field for any other Extension.

---

## Version syntax

This draft uses release versions in the SemVer core form:

```text
MAJOR.MINOR.PATCH
```

Each component is a non-negative decimal integer without leading zeroes,
except the value zero itself. Examples include `0.1.0`, `1.0.0`, and `2.14.3`.
Pre-release identifiers and build metadata are not supported by this draft.

This syntax applies to Extension specification versions in this document. It
does not change the syntax or meaning of the Dataset's top-level Core
`version`.

An exact version identifies one immutable published specification definition.
A publisher MUST NOT replace the meaning of an already published exact
version. Older published versions SHOULD remain identifiable and available to
offline tooling when long-term interoperability requires them.

---

## Top-level structure

The draft payload has the following fields:

| Field | Requirement | Meaning |
| --- | --- | --- |
| `specVersion` | REQUIRED | Exact bootstrap version of this draft |
| `uses` | OPTIONAL | Extension specifications actually used by this Dataset |
| `definitions` | OPTIONAL | Machine-readable descriptions of specification versions |
| `lifecycle` | OPTIONAL | Mutable lifecycle information |
| `evolution` | OPTIONAL | Mutable relationships among specification versions |

At least one of `uses`, `definitions`, `lifecycle`, or `evolution` SHOULD
contain information. A bootstrap-only payload is valid but carries no useful
information beyond identifying its own draft version.

Unknown fields MUST be ignored when reading and SHOULD be preserved whenever
practical.

---

## Used specification declarations

`uses` is an array of declarations. Each declaration has:

| Field | Requirement | Meaning |
| --- | --- | --- |
| `extension` | REQUIRED | Exact Extension identifier and payload key |
| `version` | REQUIRED | Exact specification version used |
| `features` | OPTIONAL | Feature identifiers actually used |

Example:

```json
{
  "extension": "draft.org.example.presentation",
  "version": "0.3.0",
  "features": ["media-icon"]
}
```

The `extension` value is the identifier defined by
[`spec/extension-naming.md`](../spec/extension-naming.md). It is not a display
name, URL, resolution location, or alias.

### Completeness

When this draft payload is present, `uses` MUST contain exactly one declaration
for every other Extension identifier whose payload occurs anywhere in the
Dataset, including payloads on the Dataset, Entity, Event, and Relation
objects.

The Specification Extension itself is excluded because `specVersion` is its
declaration. A declaration MUST NOT name an Extension that has no payload in
the Dataset.

These completeness requirements apply only to conformance with this draft.
They do not make an otherwise valid Core Dataset invalid. A legacy Dataset may
omit the Specification Extension entirely; in that case, each present
Extension's specification version is unspecified.

### Exact versions

`version` MUST be an exact version. Version ranges are not permitted in
`uses`, because this record states what the Dataset actually uses rather than
what an implementation might accept.

An Extension-owned version field inside another payload, if one exists, MUST
agree with the central declaration. A disagreement is a Specification
Extension conformance error. The central declaration does not authorize a
processor to rewrite either value silently.

### Features

A Feature is an optional, independently supportable unit defined by one exact
Extension specification version. Feature identifiers are local to their
Extension and have no independent version.

A Feature identifier MUST begin with a lowercase ASCII letter and contain only
lowercase ASCII letters, digits, and hyphens.

`features`, when present, MUST contain each Feature whose data is actually used
by the Dataset and MUST NOT contain unused Features. Duplicate identifiers are
not permitted. If the exact Extension specification defines no Features, the
field MUST be omitted.

Specifications SHOULD define a Feature only when partial support has practical
interoperability value. Ordinary fields MUST NOT automatically be fragmented
into Features.

---

## Specification definitions

`definitions` is an array of immutable descriptions of published Extension
specification versions. A definition can describe an Extension used by the
same Dataset or act as a catalog entry for a specification not otherwise used
by that Dataset.

Each definition has:

| Field | Requirement | Meaning |
| --- | --- | --- |
| `extension` | REQUIRED | Exact Extension identifier |
| `version` | REQUIRED | Exact immutable specification version |
| `displayName` | OPTIONAL | Human-readable name; never identity |
| `purpose` | OPTIONAL | Human-readable responsibility summary |
| `features` | OPTIONAL | Feature definitions for this version |
| `requires` | OPTIONAL | Required dependencies |
| `optionallyUses` | OPTIONAL | Optional dependencies |
| `compatibleWith` | OPTIONAL | Explicit compatibility statements |
| `documentation` | OPTIONAL | Informational document references |

The pair of `extension` and `version` MUST be unique within `definitions`.
`displayName`, `purpose`, and `documentation` are informational and MUST NOT be
used as identity or as a network resolution mechanism.

`features`, `requires`, `optionallyUses`, `compatibleWith`, and
`documentation` are arrays. `documentation` entries are non-empty strings;
this draft does not assign them a resolution or media-type convention. Empty
optional arrays SHOULD be omitted.

This first draft does not define a universal field-schema language. Payload
validation remains the responsibility of the exact Extension specification
and a locally available implementation or schema. A later revision may add a
schema reference or structured field descriptions after trust, portability,
and validation requirements are demonstrated.

### Feature definitions

A Feature definition has a required `feature` identifier and MAY have
`displayName` and `description` strings.

```json
{
  "feature": "media-icon",
  "displayName": "Media icon",
  "description": "Allows a node appearance to reference a Media resource."
}
```

Feature identifiers MUST be unique within one specification definition.

---

## Dependencies and compatibility

Dependency and compatibility entries share this structure:

| Field | Requirement | Meaning |
| --- | --- | --- |
| `sourceFeature` | OPTIONAL | Local Feature to which the statement applies |
| `target` | REQUIRED | Target Extension, optionally including a Feature |
| `version` or `range` | REQUIRED | Exact target version or accepted version range |

`target` contains an `extension` identifier and MAY contain a target-local
`feature` identifier.

Exactly one of `version` and `range` MUST be present. `version` is exact.
`range` uses the restricted grammar below:

```text
Range      = Comparator *(SP Comparator)
Comparator = (">=" / "<=" / "=" / ">" / "<") Version
```

All comparators are combined with logical AND. OR, caret, tilde, wildcard, and
implicit-major syntax are not supported. For example:

```text
>=1.0.0 <2.0.0
```

means any supported release version greater than or equal to `1.0.0` and less
than `2.0.0`.

`sourceFeature`, when present, MUST name a Feature in the enclosing
definition. A target Feature MUST be defined by every target version selected
by the exact version or range.

### Evaluation

A definition's dependency statements constrain a Dataset only when that
definition's exact `extension` and `version` occur in `uses`. An entry with no
`sourceFeature` then applies to the whole Extension. An entry with a
`sourceFeature` applies only when the matching `uses.features` array names that
Feature.

A required dependency is satisfied when:

- `uses` contains the target Extension at a version satisfying the entry;
- the target Extension payload is present; and
- when `target.feature` is present, the target `uses.features` array names that
  Feature.

Definitions carried only as catalog entries do not make their dependencies
requirements of the containing Dataset.

### Required dependencies

An entry in `requires` states that the source Extension, or its
`sourceFeature`, cannot be fully interpreted without the target Extension or
target Feature at a satisfying version.

Missing required dependency data affects the dependent Extension or Feature.
It MUST NOT invalidate unrelated Core data or unrelated Extensions.

### Optional uses

An entry in `optionallyUses` states that the source can use the target when it
is present, but the target's absence does not make the source invalid or
unsupported.

### Compatibility

An entry in `compatibleWith` records an explicit coexistence or interpretation
claim. It does not create a dependency, imply that either Extension is present,
or mean that one Extension can substitute for the other.

## Definition example

This example describes a hypothetical draft Presentation Extension. It does
not register that Extension.

```json
{
  "extension": "draft.org.example.presentation",
  "version": "0.3.0",
  "displayName": "Presentation Extension",
  "purpose": "Carries reusable visual presentation intent.",
  "features": [
    {
      "feature": "media-icon",
      "displayName": "Media icon"
    }
  ],
  "requires": [
    {
      "sourceFeature": "media-icon",
      "target": {
        "extension": "draft.org.example.media",
        "feature": "resource"
      },
      "range": ">=0.2.0 <1.0.0"
    }
  ],
  "optionallyUses": [
    {
      "target": {
        "extension": "draft.org.example.semantic"
      },
      "version": "0.1.0"
    }
  ]
}
```

---

## Lifecycle metadata

Published specification definitions are immutable. Operational information
about their maturity or deprecation may change and is therefore stored
separately in `lifecycle`.

A lifecycle entry has:

| Field | Requirement | Meaning |
| --- | --- | --- |
| `specification` | REQUIRED | Exact Extension and version reference |
| `status` | REQUIRED | `draft`, `experimental`, `stable`, `deprecated`, or `archived` |
| `deprecatedBy` | OPTIONAL | Exact replacement specification references |
| `note` | OPTIONAL | Human-readable lifecycle note |

`specification` contains exactly one `extension` and exact `version`.
`deprecatedBy`, when present, is a non-empty array of the same reference
shape.

Changing a lifecycle status does not mutate the identified specification
definition, register an Extension name, or change an identifier. Lifecycle
records are advisory unless another governance document gives them authority.

---

## Evolution metadata

`evolution` records relationships among exact specification versions. Each
entry has a `type`, one exact `source`, and one or more exact `targets`.

`source` contains one `extension` and exact `version`. `targets` is a non-empty
array of the same reference shape. Duplicate targets are not permitted.

The supported relationship types and directions are:

| Type | Direction |
| --- | --- |
| `supersedes` | New `source` supersedes older `targets` |
| `splitInto` | Older `source` is split into newer `targets` |
| `mergedFrom` | New `source` is merged from older `targets` |

`deprecatedBy` is kept in lifecycle metadata because it is a mutable
replacement recommendation. Tools SHOULD NOT store a redundant inverse
evolution relationship when one canonical relationship already expresses the
same fact.

Evolution metadata describes lineage. It does not define a payload migration
algorithm and MUST NOT be treated as proof that automatic migration is safe.
Ordinary version progression under one unchanged Extension identifier does not
need a redundant `supersedes` entry.

Example:

```json
{
  "lifecycle": [
    {
      "specification": {
        "extension": "draft.org.example.appearance",
        "version": "0.4.0"
      },
      "status": "deprecated",
      "deprecatedBy": [
        {
          "extension": "draft.org.example.presentation",
          "version": "1.0.0"
        }
      ]
    }
  ],
  "evolution": [
    {
      "type": "supersedes",
      "source": {
        "extension": "draft.org.example.presentation",
        "version": "1.0.0"
      },
      "targets": [
        {
          "extension": "draft.org.example.appearance",
          "version": "0.4.0"
        }
      ]
    }
  ]
}
```

---

## Complete Dataset example

This Dataset uses exact Metadata and History Extension version `1.0.0`. The
Feature list is omitted because those versions do not define independently
supportable Features.

```json
{
  "version": "1.0",
  "entities": [],
  "events": [
    {
      "id": "event-1",
      "name": "Example event",
      "extensions": {
        "history": {
          "time": {
            "year": 2026,
            "month": 8,
            "day": 13
          }
        }
      }
    }
  ],
  "relations": [],
  "extensions": {
    "metadata": {
      "datasetId": "example-specification-declaration",
      "title": "Specification declaration example"
    },
    "draft.github.sukoyaka-dopeness.specification": {
      "specVersion": "0.1.0",
      "uses": [
        {
          "extension": "metadata",
          "version": "1.0.0"
        },
        {
          "extension": "history",
          "version": "1.0.0"
        }
      ]
    }
  }
}
```

The Dataset's top-level `version` remains the Core version. It is deliberately
not changed to `1.0.0` by this Extension.

---

## Processing and diagnostics

Core validity and Specification Extension conformance are separate. A
processor SHOULD report the most specific applicable state:

| State | Meaning |
| --- | --- |
| Version unspecified | An Extension payload exists in a Dataset without this draft declaration mechanism |
| Supported | The exact declaration, payload, Features, and required dependencies are understood locally |
| Unsupported version | The identifier is known locally but the exact declared version is not supported |
| Specification unavailable | No local definition or implementation is available for the declared identifier and version |
| Missing dependency data | A required target payload or Feature is absent |
| Unsupported dependency implementation | Required data is present at a satisfying version but the processor cannot interpret it |
| Invalid declared payload | A locally available exact specification rejects its payload |
| Declaration conflict | Declarations are duplicate, incomplete, refer to absent payloads, or disagree with Extension-owned version data |

Preserving unknown data is not the same as supporting it. A processor MAY
round-trip an unsupported declaration and payload while clearly reporting that
it did not interpret them.

An unavailable or unsupported Extension MUST NOT invalidate unrelated Core
data merely because its declaration is present. Missing required dependencies
limit support for the dependent Extension or Feature, not for the entire
Dataset.

A processor MUST NOT validate a payload declared at one exact version against
a different version's rules and report that result as exact conformance. It
may preserve the payload and report the declared version as unsupported.

### Embedded definitions and trust

An embedded `definitions` record is a structured claim, not proof of publisher
authority. A processor MAY use it for offline documentation and dependency
analysis. It MUST NOT execute code or fetch remote resources merely because a
definition or documentation reference requests it.

Semantic payload validation requires a locally trusted implementation or
schema. If an embedded definition conflicts with a locally trusted definition
for the same identifier and exact version, the processor MUST report the
conflict and MUST NOT silently merge them. Trust and publisher authentication
are outside this draft.

---

## Representative edge cases

### Legacy payload without a declaration

```json
{
  "extensions": {
    "history": { "time": { "year": 2026 } }
  }
}
```

This remains permitted by the Core and History Extension. The History
specification version is unspecified.

### Unknown but preservable declaration

```json
{
  "extensions": {
    "vendor.example.unknown": { "value": 42 },
    "draft.github.sukoyaka-dopeness.specification": {
      "specVersion": "0.1.0",
      "uses": [
        {
          "extension": "vendor.example.unknown",
          "version": "3.2.1"
        }
      ]
    }
  }
}
```

A processor with no local implementation reports the specification as
unavailable or unsupported and preserves both records when practical. The
unknown Extension does not invalidate the Core Dataset.

### Conflicting declaration

The following situations violate this draft without automatically invalidating
the Core Dataset:

- two `uses` entries name `history`;
- a `uses` entry names `history` but no `history` payload occurs;
- a payload occurs under `metadata` but `uses` omits `metadata`;
- a declared exact version does not match an Extension-owned version field; or
- a required dependency version does not satisfy its definition's exact
  version or range.

Processors SHOULD preserve the original data and report the conflict rather
than guessing a correction.

---

## Future work

Before this candidate can become Stable, implementation evidence is still
needed for:

- an independent schema or second implementation comparison;
- offline retention and selection of older definitions;
- dependency and Feature behavior across more than one application;
- required-dependency cycle policy based on a concrete Extension pair;
- Feature-level lifecycle metadata, if independent deprecation is needed;
- definition provenance and publisher authentication;
- safe schema references, if introduced;
- migration records separate from evolution metadata; and
- the identifier and migration policy for Stable promotion.
