# Names Extension

Status: Draft candidate

Draft Extension identifier: `draft.github.sukoyaka-dopeness.names`

Draft specification version: `0.1.0`

This document defines an authority-qualified Draft Extension. It is not a
registered Stable Extension. Promotion of the semantic responsibility name
`names` to a Stable identifier requires a separate review and decision.

The Draft identifier is the exact Extension identifier and payload key under
the E2R Extension naming rules. No second canonical identifier or automatic
alias is defined.

## Responsibility

Draft 0.1.0 represents independently addressable name expressions associated
with individual E2R Core Objects. This is a P1-only responsibility.

Draft 0.1.0 does not define Grouping, alias or equivalence sets, preferred
names, display ranking, transliteration equivalence, naming-kind vocabulary,
temporal applicability, lifecycle status vocabulary, redirect, merge, split,
cascade, migration, epistemic claims or evidence, or a general Target
Reference encoding.

## Placement

The Names payload is object-local. It occurs on an individual Entity, Event, or
Relation under:

```text
extensions["draft.github.sukoyaka-dopeness.names"]
```

The owning Core Object is determined by structural containment. Draft 0.1.0
does not add an `objectId`, owner reference, object-type discriminator,
Dataset-level registry, mirrored index, or canonical/derived duplicate
storage.

The same placement model applies uniformly to Entity, Event, and Relation. A
Relation instance may have a Names payload; naming a Relation instance is
distinct from defining the semantic meaning of a Relation predicate or type.
Relation predicate/type vocabulary is outside this Extension.

Draft 0.1.0 does not define a Dataset-level Names payload. If the Draft
identifier occurs at Dataset level, an application MUST NOT invent semantics
for that occurrence.

## Payload shape

When the Draft Names payload is present on a Core Object, it MUST be an object
with a required `expressions` property whose value is an array. The array MAY
contain zero, one, or many members.

The minimum shape is:

```json
{
  "extensions": {
    "draft.github.sukoyaka-dopeness.names": {
      "expressions": []
    }
  }
}
```

Draft 0.1.0 does not add a common `data` wrapper or an in-payload version or
`specVersion` field. The exact Draft version MAY be declared through the
Specification Extension when that Extension is used, according to its own
rules.

## Recognized P1 expression record

A recognized P1 expression member MUST be an object with:

- `id`: REQUIRED non-empty string;
- `value`: REQUIRED non-empty string;
- `language`: OPTIONAL string; and
- `script`: OPTIONAL string.

Draft 0.1.0 defines no additional normative expression fields. In particular,
it does not define `kind`, `preferred`, `rank`, `groupId`, `transliterationOf`,
lifecycle status, replacement pointers, timestamps, provenance, or Target
Reference fields.

`value` represents the expression text itself. It MUST be a non-empty string.
Draft 0.1.0 does not impose trimming, case folding, Unicode normalization,
whitespace normalization, or canonicalization. The treatment of whitespace-only
values is not further defined by this Draft. Equal values with different
recognized IDs MUST NOT be treated as identity equivalence.

`language` and `script` are optional Names metadata. When present, each MUST
be a string. Draft 0.1.0 does not impose BCP 47 or ISO 15924 registry
validation, automatic normalization, or identity/equivalence inference.

## P1 identity and ID scope

A recognized P1 expression has an independently addressable stable identity.
Recognized P1 expression IDs are local to one Dataset and MUST be unique across
all recognized P1 expressions owned by this Names responsibility in that
Dataset, including expressions attached to Entity, Event, and Relation
objects. They do not need to be globally unique outside the Dataset and are
not required to be unique against Core Object IDs or identifiers owned by
other Extensions.

A processor MUST NOT silently merge or rewrite conflicting recognized IDs. A
Dataset containing duplicate recognized P1 IDs is structurally non-conforming
to this Draft. Repair policy is deferred, and Draft 0.1.0 does not define
automatic ID allocation.

An unrecognized member containing a textual field such as `"id": "N1"` does
not become P1 identity evidence and does not define duplicate-P1 semantics.

## Unknown fields and members

Unknown fields on the Names payload MUST be ignored when read. Processors
SHOULD preserve them whenever practical.

For a recognized P1 record, unknown fields MUST NOT change the meaning of
`id`, `value`, `language`, or `script`. A processor that does not understand an
unknown field MUST ignore it when interpreting recognized fields and SHOULD
preserve it whenever practical.

An `expressions` member that does not have the recognized P1 shape is not a
conforming recognized P1 expression under Draft 0.1.0. An `expressions` array
containing an unrecognized member is not structurally conforming to Draft
0.1.0. A processor SHOULD nevertheless preserve that member whenever
practical. Diagnostic severity is not defined by this Draft. Processors MUST NOT
assign it P1 identity semantics or merge it with a recognized expression merely
because a textual field matches. Processors SHOULD preserve such a member
whenever practical rather than filtering it out. Preservation does not make
the member semantically conforming.

Draft 0.1.0 does not introduce a discriminator or variant system to legitimize
arbitrary unknown members.

## Explicit null

The accepted preservation of opaque `null` values does not assign P1 meaning to
`null`. Defined `id` and `value` fields MUST NOT be `null`. Optional defined
`language` and `script` fields SHOULD be omitted when absent. Draft 0.1.0
assigns no special Names meaning to explicit `null` in unknown fields;
processors SHOULD preserve unknown opaque `null` values whenever practical.

## Ordering

The `expressions` collection is an array, but Draft 0.1.0 assigns no semantic
meaning to its order. Order MUST NOT mean preference, ranking, identity,
Grouping, or a transliteration relationship. Processors SHOULD preserve array
order whenever practical to avoid unnecessary data churn. Applications MUST
NOT infer preferred display solely from array position.

## Identity continuity boundary

Draft 0.1.0 does not define a lifecycle subsystem. It records only the
accepted minimum identity boundary:

- a pre-classified edit that preserves the same intended expression MAY retain
  the same P1 ID;
- a substantively different replacement uses a different explicitly supplied
  P1 ID; and
- a processor MUST NOT automatically retarget existing references from an old
  P1 ID to a replacement P1 ID.

Equal or similar text, the same Core Object, language, script, transliteration,
or naming-kind does not determine whether an edit is substantive. Draft 0.1.0
does not define retirement, deletion, restoration, redirect, merge, split,
cascade, or migration.

## Core `name` separation

Core `name` remains the Core-defined optional short human-readable label. It is
not P1 identity. Equal Core `name` and P1 `value` do not establish identity
equivalence.

Draft 0.1.0 does not require every Core `name` to have a corresponding P1
expression, and does not require any P1 expression to be projected into Core
`name`.

Draft 0.1.0 defines no automatic synchronization between Core `name` and P1.
Names-aware tools MUST NOT silently create, replace, redirect, merge, or
retarget P1 identities solely because Core `name` changes. A mismatch with Core
`name` does not make the Core Dataset invalid. Fallback display and diagnostic
severity remain application or future Names-aware concerns.

## Structural conformance

The minimum Draft structural boundary is:

- the Names payload is an object;
- `expressions` is present and is an array;
- a recognized expression member is an object;
- recognized `id` is a non-empty string;
- recognized `value` is a non-empty string;
- present `language` is a string;
- present `script` is a string; and
- recognized P1 IDs satisfy the Names-owned Dataset-local uniqueness rule.

Same values across different recognized IDs are valid. Array order is not
semantic. Unknown fields and unrecognized members follow the preservation and
conformance distinction above.

Core validity and Draft Names conformance are separate. A validator MUST NOT
silently merge equal values, rewrite IDs, infer equivalence, retarget
references, synchronize Core `name`, or delete unknown fields merely to make a
payload cleaner. Diagnostic severity, repair behavior, Core-name mismatch
severity, migration diagnostics, and unsupported-Extension diagnostics are
not defined here.

## Examples

The following illustrates multiple independent expressions on one Entity. The
field spelling is the Draft 0.1.0 conceptual shape, not a promise of a future
Stable schema beyond this contract.

```json
{
  "version": "1.0",
  "entities": [
    {
      "id": "entity-1",
      "extensions": {
        "draft.github.sukoyaka-dopeness.names": {
          "expressions": [
            { "id": "name-ja", "value": "東京", "language": "ja", "script": "Jpan" },
            { "id": "name-en", "value": "Tokyo", "language": "en", "script": "Latn" },
            { "id": "name-alt", "value": "Tokyo", "language": "en", "script": "Latn" }
          ]
        }
      }
    }
  ],
  "events": [],
  "relations": []
}
```

The two `Tokyo` records have distinct recognized IDs and therefore do not
imply identity equivalence. The same payload shape is applicable to an Event
or Relation instance by placing it under that object's `extensions` object.

## Explicit non-goals and deferred semantics

Draft 0.1.0 does not define or select:

- Stable `names` registration;
- Grouping, Group identity, or cardinality;
- equivalence sets, alias sets, or transliteration sets;
- preferred display, ranking, or search indexing;
- naming-kind vocabulary;
- temporal applicability;
- a general lifecycle model or lifecycle status;
- retirement, deletion, restoration, redirect, merge, split, cascade, or
  migration;
- a production Names writer API;
- a final Target Reference representation; or
- P2/P3 behavior.

These responsibilities are not implicitly promised for this Extension. Future
responsibility changes may require a separate Extension identifier and an
explicit migration decision.

## Draft maturity and evolution

`draft.github.sukoyaka-dopeness.names` is authority-qualified and non-Stable.
`names` is the selected semantic responsibility name but is not a registered
Stable identifier. Stable promotion requires separate review. A future Stable
identifier is not automatically an alias of this Draft identifier, and
applications MUST NOT maintain synchronized aliases without explicit rules.

If future responsibility changes no longer preserve continuity, a different
Extension identifier and explicit migration path may be required.

Draft 0.1.0 introduces no Features and no Feature registry entries.

## Review boundary

This is a Draft candidate, not final P1 adoption. Stable registration,
production writer implementation, migration implementation, final Target
Reference design, Grouping selection, and P2/P3 reopening require separate
decisions.
