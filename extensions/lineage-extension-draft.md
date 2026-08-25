# Lineage Extension Draft

Status: **Draft / Experimental / non-Stable**

Draft Extension identifier: `draft.github.sukoyaka-dopeness.lineage`

Draft specification version: `0.1.0`

This document is an exploratory Draft Extension candidate. It is not
registered as Stable and is not yet required of applications. The current
e2r-validator recognizes Draft `0.1.0` for structural and local semantic
validation, but this does not promote the Extension or require application
semantic support. It remains subject to incompatible change during review.

The key words MUST, MUST NOT, REQUIRED, SHOULD, SHOULD NOT, and MAY describe
this Draft candidate only; they do not amend the E2R Core or create a Stable
Extension.

## Responsibility

Lineage records direct declared parent relationships for the current
independently identified Dataset. It answers which Dataset(s) the current
Dataset claims ancestry from and what kind of ancestry is claimed.

Lineage does not establish authenticity, compatibility, publication, approval,
translation fidelity, changes, supersession, merge behavior, evidence,
licensing compliance, or a retrieval location. Compatibility remains a
separate scoped-claim responsibility; Lineage may reference such claims in a
future design but does not own their semantics.

## Placement and exact draft identity

The Draft payload uses its exact Draft identifier as the payload key:

```text
extensions["draft.github.sukoyaka-dopeness.lineage"]
```

The current Dataset is the implicit subject. A Lineage-bearing Dataset MUST
also provide `extensions.metadata.datasetId` under Metadata Extension `1.0.0`.
Metadata supplies the Dataset identity; it does not own Lineage semantics.

The payload carries the exact governing Draft version in `specVersion`:

```json
{
  "extensions": {
    "metadata": {
      "datasetId": "child-dataset"
    },
    "draft.github.sukoyaka-dopeness.lineage": {
      "specVersion": "0.1.0",
      "parents": [
        {
          "kind": "fork",
          "target": { "datasetId": "parent-dataset" }
        }
      ]
    }
  }
}
```

`specVersion` is the Lineage specification version. It is not a Core version,
Dataset artifact version, parent version, or Metadata version. This replaces
the exploratory fixture-only `lineage.version` marker. A future
Specification Extension declaration may additionally describe the Draft, but
this Draft follows the current exact-version bootstrap convention and does
not invent a second declaration syntax.

## Data model

Conceptually, the payload is:

```text
LineagePayload
  specVersion: exact string "0.1.0"
  parents: non-empty array of LineageParent

LineageParent
  kind: one of derived, revision, fork, translation
  target: LineageTarget

LineageTarget
  datasetId: non-empty string using Metadata Dataset-ID semantics
```

The required properties are `specVersion` and `parents` on the Lineage
payload, `kind` and `target` on each parent, and `datasetId` on each target.
Unknown fields remain subject to the repository's normal Extension
preservation rules; this Draft does not close all future fields with
`additionalProperties: false`.

`parents` records direct parent claims, not a flattened ancestry list. A
consumer MAY traverse a chain, but this Draft does not require graph closure,
ancestor materialization, or automatic inference.

Parent order MUST NOT imply priority, chronology, authority, or merge
precedence. Multiple parents are allowed, including two `derived` parents;
this does not define a merge, contribution percentages, conflict resolution,
or merge policy.

An identical `(kind, target.datasetId)` pair MUST NOT occur more than once.
The same target MAY occur once under different kinds; that unusual combination
is not automatically contradictory in this Draft.

The child Dataset MUST NOT declare a parent whose `target.datasetId` equals
the child's Metadata `datasetId`. This is local semantic validation only; the
Draft does not require global cycle detection.

`parents` MUST contain at least one item. When no parent is declared, omit the
Lineage Extension; an empty array does not mean “known to have no parent.”

## Kind vocabulary

The closed `0.1.0` vocabulary is:

| Kind | Meaning | Does not imply |
| --- | --- | --- |
| `derived` | Current Dataset was created from or substantially based on the parent. | semantic equivalence, compatibility, replacement, or same language |
| `revision` | Current Dataset is a later revision in the same intended artifact lineage. | automatic supersession, backwards compatibility, or full preservation |
| `fork` | Current Dataset intentionally begins or continues a divergent lineage from the parent. | incompatibility, hostility, loss of parent legitimacy, or permanent authority |
| `translation` | Current Dataset is intended as a natural-language translation derivative of the parent. | fidelity, official approval, freshness, or exact structural equality |

An unknown `kind` is invalid for Lineage `0.1.0`. This is distinct from an
unknown top-level Extension: an unimplemented Extension remains preservable
under normal E2R forward-compatibility behavior, while a future Lineage-aware
Validator would report an invalid payload for a recognized Draft identifier.
No custom-kind namespace is defined in this Draft.

## Parent availability and identity limits

An unavailable or unresolved parent MUST NOT by itself invalidate the child
Dataset. Lineage records an identity assertion and does not require DNS,
HTTP, a registry, sibling files, or an external resolver.

Dataset-ID collision, identity fraud, duplicate publishers, authenticity, and
cryptographic integrity are outside this Draft. Lineage does not solve global
uniqueness and therefore adds no hash or URL field. A disappeared parent URL
or publication location does not erase a recorded parent identity.

Lineage also does not decide which branch is official, legitimate, maintained,
preferred, or entitled to a name or trademark. It records ancestry, not
canonical supremacy.

## Candidate validation boundary

| Layer | Candidate checks |
| --- | --- |
| Structural | Payload object; exact `specVersion`; non-empty `parents` array; parent object; known `kind`; target object; non-empty string `target.datasetId`. |
| Local semantic | Metadata `datasetId` dependency; child self-reference forbidden; duplicate identical `(kind, datasetId)` forbidden. |
| Non-local / not validated by this Draft | Parent existence; global cycles; authenticity; compatibility; translation fidelity; URL availability; source/evidence; merge semantics. |

Future diagnostic categories may distinguish missing Metadata dependency,
invalid target, unknown kind, self-reference, duplicate parent, and empty
parents. Diagnostic names are not frozen here, and no Validator diagnostics
are implemented by this Draft.

## Examples

### Ordinary derived Dataset with multiple parents

```json
{
  "extensions": {
    "metadata": { "datasetId": "recipe-collection-derived-v0" },
    "draft.github.sukoyaka-dopeness.lineage": {
      "specVersion": "0.1.0",
      "parents": [
        { "kind": "derived", "target": { "datasetId": "recipe-notes-a" } },
        { "kind": "derived", "target": { "datasetId": "recipe-notes-b" } }
      ]
    }
  }
}
```

### Ordinary revision

`field-guide-2026` declares only its direct parent `field-guide-2025`.
Transitive ancestry is not materialized by the child.

### Hypothetical E2R fork

`open-e2r-2` may declare a `fork` parent `e2r-core-2`. Both identifiers and
the OpenE2R name are hypothetical; this example does not imply an existing
OpenE2R project or official status.

### Ordinary translation

`lighthouse-restoration-ja` may declare a `translation` parent
`lighthouse-restoration-en`. The kind does not guarantee accuracy, approval,
freshness, or legal compliance.

## Invalid candidate examples

The following are invalid for this Draft: a child whose parent target equals
its own Metadata `datasetId`; empty `parents`; missing or empty parent
`datasetId`; an unknown `kind`; a repeated identical `(kind, datasetId)` pair;
and a Lineage payload without the required Metadata identity.

These are Draft invalid cases implemented by the current e2r-validator as
Lineage-specific error diagnostics. The Draft remains Experimental and this
implementation does not make it Stable.

## Application and promotion boundary

The current e2r-validator recognizes Draft `0.1.0` and validates its structural
and local semantic rules. Valid recognized Lineage no longer receives an
`unknown_extension` warning; invalid recognized payloads receive Lineage
errors. Unknown nested fields remain preserved and unresolved parents remain
valid. This implementation does not validate non-local semantics. Dedicated
opaque preservation and round-trip evidence is
now recorded for both NarrativeLine and LiaisonScape: the unsupported Draft
payload survived representative load/edit/export workflows, including an
unknown nested sentinel. Neither application interprets Lineage semantics.
See the L4 research evidence for exact test paths and commits. This evidence
does not make Lineage supported by either application or move the Draft beyond
Draft maturity.

Promotion gates are: reviewed semantics; confirmed Metadata dependency;
resolved Specification Extension declaration; structural schema/Validator
strategy; **dedicated NarrativeLine and LiaisonScape round-trip evidence
(satisfied by L4)**; invalid-case diagnostics; at least two ordinary Dataset cases; an E2R
self-dogfood case; unknown-field preservation; no Core conflict; and
understood S1 licensing implications. No promotion is made by this document.

## S1 relevance

A permissive standards-license model could allow forks and translations without
destroying machine-readable origin because Lineage preserves declared ancestry
independently of publication URL. Lineage itself does not satisfy legal
attribution, prevent misleading branding, grant trademark rights, or make a
derivative legally compliant. No license is selected here.
