# Dataset License Metadata Design

Date: 2026-08-25

Status: **Accepted design direction; ready for Metadata 1.1.0 Draft**

## Decision summary

Metadata should own one small Dataset-level declaration for the reuse license
asserted to apply to the Dataset artifact as a whole:

```json
{
  "extensions": {
    "metadata": {
      "datasetId": "example",
      "title": "Example Dataset",
      "license": "CC0-1.0"
    }
  }
}
```

The proposed field is `metadata.license`, a string containing an SPDX License
Expression. The field is optional. This is a **Metadata 1.1.0 candidate**, not
an update to the registered Stable Metadata Extension 1.0.0 and not an
implementation authorization.

The design intentionally describes a declaration. It does not prove that the
declarant owns every relevant right, that the license grant is legally valid,
that all obligations have been satisfied, that third-party content may be
relicensed, or that the Dataset is authentic, compliant, endorsed, or
trademark-cleared.

## Responsibility boundary

**METADATA OWNS SIMPLE DATASET LICENSE DECLARATION.** Metadata already owns
Dataset-level identity and descriptive information, and a single artifact-wide
license declaration is the smallest coherent addition. Source/Citation owns
the identity and terms of cited source artifacts. Lineage owns Dataset ancestry.
A future Rights/License Extension remains appropriate for per-object rights,
multiple licensors, jurisdictional restrictions, rights-holder assertions,
attribution bundles, or other complex rights statements.

## What the declaration covers

`metadata.license` declares the reuse terms asserted for the Dataset JSON or
Dataset artifact as an authored compilation/work. It does not change the legal
status of:

- underlying facts represented by Entities, Events, or Relations;
- third-party expressive text, images, names, quotations, or other material
  embedded in the Dataset; or
- source artifacts referenced by a Source/Citation mechanism.

A maintainer should omit `metadata.license` when a truthful Dataset-wide
declaration cannot be made. A Dataset with one third-party quotation under
separate terms cannot safely claim an unrestricted Dataset-wide license merely
because the surrounding compilation was authored under that license. Per-object
rights are out of scope for Metadata 1.1.0.

## SPDX expression choice

**SPDX EXPRESSION RECOMMENDED.** A single string is preferred over a custom
object or an array:

- `"CC0-1.0"` represents a simple declaration;
- `"CC-BY-4.0"`, `"MIT"`, and `"Apache-2.0"` represent other simple cases;
- `"MIT OR Apache-2.0"` remains available for a dual-license declaration.

The field should use the SPDX License Expression grammar and identifiers rather
than inventing E2R license IDs. Option B (`{ "id": ... }`) adds no information;
Option C (`licenses: []`) creates unclear array semantics; Option E creates an
unnecessary E2R vocabulary. A future richer rights model may add separate
fields or an Extension, but it must not silently reinterpret this string.

Custom licenses use **H1**: Metadata 1.1.0 accepts standard SPDX expressions;
an unknown/custom license should omit `metadata.license` and use future richer
rights metadata or an explicitly defined future mechanism. SPDX `LicenseRef-*`
is not adopted for this first interoperable field because a local reference
without an accompanying license definition is not independently meaningful to
another Dataset consumer. Arbitrary strings are not allowed.

Absence means only: **no Dataset-level interoperable license declaration is
supplied**. It does not mean public domain, CC0, all rights reserved,
proprietary, or permission denied.

## URLs, holders, and attribution

No `licenseUrl` is added. A standard SPDX identifier/expression already points
to an established vocabulary, while URL availability and retrieval are not
Dataset identity. No `rightsHolder`, `licensor`, or `copyrightHolder` field is
added; those assertions require different provenance and rights evidence. No
generic `attribution` field is added in this phase. License declaration,
attribution instructions, and rights-holder claims are separate design
questions.

## Source/Citation and Lineage boundaries

If Dataset A declares `CC0-1.0` and cites Source X under CC BY 4.0,
`metadata.license` describes Dataset A, not Source X. Source/Citation does not
inherit Dataset A's declaration, and Dataset A's declaration does not relicense
Source X.

If Dataset B is derived from Dataset A, B does not automatically inherit A's
`metadata.license` through Lineage. A derived Dataset may declare its own
license if its author can truthfully do so. The same applies to `derived`,
`revision`, `fork`, and `translation`: **license inheritance through Lineage,
translation, or fork is NO as an E2R semantic rule**. Legal obligations may
still arise outside E2R.

Lineage records ancestry, not copyright permission, legal attribution,
ownership, official status, compatibility, translation fidelity, or trademark
rights.

## Validator and application responsibility

The future Validator responsibility is syntax and expression validity only:

| Input | Candidate result |
| --- | --- |
| field absent | valid; no declaration supplied |
| valid SPDX expression string | valid |
| non-string | Metadata license diagnostic |
| empty or whitespace-only string | Metadata license diagnostic |
| malformed SPDX expression | Metadata license diagnostic |

The Validator must not decide ownership, legal compatibility, relicensing
permission, attribution compliance, or whether a cited source permits use. Full
SPDX expression parsing is a later implementation concern; **external SPDX
parser/dependency: DEFER**. No dependency is added in this design phase. A
future implementation may use a vetted parser or a complete local grammar,
subject to the normal dependency review.

Current Validator 0.3.0 accepts an unknown `metadata.license` field because
Metadata 1.0.0 permits unknown fields; it does not validate the expression.
That is expected pre-implementation behavior, not support for Metadata 1.1.0.

Read-only compatibility evidence shows that current NarrativeLine and
LiaisonScape represent Metadata as extensible records and preserve unknown
Metadata fields through ordinary load/edit/serialize paths. This is the
unknown-field preservation gate for a future 1.1.0 candidate; neither
application is required to interpret or display the field in this phase.

## Version and maturity

Adding one optional descriptive field is a **backward-compatible addition: YES**
under the current Metadata architecture: existing 1.0.0 readers ignore it,
unknown fields are preservable, and absence remains valid. The exact version
decision is **METADATA 1.1.0 CANDIDATE**. The Stable registry and
`extensions/metadata-extension.md` remain at 1.0.0 until a separate draft,
consumer evidence, validator implementation, and Stable promotion decision.

Classification: **READY FOR METADATA 1.1.0 DRAFT**. It is not ready for a
Stable Metadata 1.1.0 update. A future draft must define the SPDX grammar
boundary, diagnostics, preservation expectations, and mixed-rights guidance
without turning Metadata into a rights-management framework.

## Concrete cases

| Dataset case | Declaration |
| --- | --- |
| Project-created public example | `CC0-1.0` |
| Specification/document Dataset | `CC-BY-4.0` |
| Software-derived machine-readable artifact | `MIT` |
| Dual-license Dataset | `MIT OR Apache-2.0` |
| Unknown or mixed-rights Dataset | omit `license` |

For the L7/L7.1 self-description, the future target is:

```json
"metadata": {
  "datasetId": "e2r-self-description-0.1.0",
  "title": "E2R Self-Description — Machine-Readable Dogfood",
  "description": "...",
  "license": "CC0-1.0"
}
```

This target is not applied in S2.1.

## S2 and repository-license interaction

S2 selects what E2R project artifacts should receive. `metadata.license`
describes what **this Dataset** declares for itself. Repository LICENSE files
and package metadata remain authoritative legal distribution material for
repositories and software; Metadata must not replace them. A future Hub may
display `License: CC0 1.0` generically after formalization, but Hub UI and
publication remain out of scope.

Copying or downloading a Dataset does not change its declared field. A location
or acquisition URL is not a license identity and must not be coupled to this
metadata.

## Follow-up boundaries

- S3 remains the next licensing phase: repository provenance audit, actual
  license files/notices, category mapping, third-party review, and Hub
  publication readiness.
- A later Metadata implementation phase is required to add and validate
  `metadata.license`.
- No Stable Metadata specification, Validator, application, Hub, Dataset
  example, or LICENSE file is changed by S2.1.
- No new Knowledge entry is added; the rules are recorded here for this
  bounded E2R design checkpoint.
