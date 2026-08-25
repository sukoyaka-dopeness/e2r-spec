# E2R Standards License Decision / Policy Record

Date: 2026-08-25

Status: **Accepted project policy decision; implementation deferred to S3**

## Decision

E2R adopts a mixed, role-based licensing and canonicality policy:

- normative and non-normative E2R specification/documentation prose: **CC BY
  4.0**;
- standalone JSON Schemas, validation schemas, code-like specification
  artifacts, and reusable reference utility code: **MIT**;
- project-created example Datasets, research JSON fixtures, and the
  machine-readable E2R Self-Description dogfood Dataset: **CC0 1.0**, subject
  to the third-party material rule below;
- E2R Hub, NarrativeLine, LiaisonScape, E2R Validator,
  `e2r-dom-test-environment`, and broad reusable software utilities: existing
  **MIT** direction is reaffirmed;
- names, logos, trademarks, official designation, canonical publication,
  conformance, and patents are governed separately from copyright licenses.

This decision converts S1's `RECOMMEND MIXED MODEL D` into an E2R project
policy. It does not create a `LICENSE` file, grant a public release, change
package metadata, or replace any repository's existing license. It is not legal
advice and requires the S3 formalization/provenance audit before public
formalization.

Dataset-level license declaration semantics are handled separately in the
Metadata vNext design record:
`research/metadata/decisions/dataset-license-metadata-design.md`.

## Strategic requirements preserved

Anyone may implement E2R without case-by-case permission. Commercial, paid,
proprietary, and open-source implementations are allowed, with no royalty
requirement imposed by this policy. Specification text may be mirrored,
taught, translated, modified, and commercially redistributed with attribution
and change marking. Derivative specifications and forks may survive an
inactive original project. Canonical E2R remains identifiable through
publication governance rather than a copyright monopoly over modified text.

## Exact artifact-license map

| Artifact category | Selected policy | Status and boundary |
| --- | --- | --- |
| Normative specification Markdown (`spec/`, `extensions/*.md`) | CC BY 4.0 | Selected; source/version attribution and modification marking required |
| Non-normative documentation (`docs/`, guides) | CC BY 4.0 | Selected; standalone reusable code/schema files remain under their own policy |
| Research Markdown and session logs | CC BY 4.0 | Selected for project-authored text; no separate privacy audit is implied |
| Standalone JSON Schemas and code-like specification artifacts (`schemas/`, `scripts/`, reusable source) | MIT | Selected; file role, not extension alone, controls classification |
| Project-created example Datasets (`examples/**/*.json`) | CC0 1.0 | Selected where the project can grant the rights; third-party material is excluded |
| Project-created research JSON fixtures (`research/**/fixtures/*.json`) | CC0 1.0 | Selected for low-friction testing; surrounding research Markdown remains CC BY 4.0 |
| `examples/e2r-self-description.json` | CC0 1.0 | Selected as informative, experimental, non-normative dogfood |
| Future normative machine-readable registries/vocabularies/schemas | MIT | Not example data; treated as specification machinery |
| Application/Validator/utility software | MIT | Existing direction reaffirmed; formalization is separate |
| Names, logos, marks, badges, official designation | Separate naming/trademark boundary | Not granted by CC BY, CC0, or MIT |
| Third-party/imported material | Original/source-specific terms | MUST NOT be relicensed automatically |

CC0 applies only to project-created content for which E2R has the necessary
rights. It is not a shortcut around third-party copyright, privacy, trademark,
or other rights.

## Copyright, governance, naming, and provenance are independent

Copyright licenses permit reuse of the covered work. Canonical publication
identifies the canonical `sukoyaka-dopeness` E2R releases. A lightweight
naming/trademark policy controls origin and endorsement claims. Machine-readable
Lineage records ancestry and provenance. None of these mechanisms substitutes
for another:

- CC BY does not grant patents, trademarks, official status, conformance, or
  technical compatibility.
- MIT does not establish canonical authority or grant use of E2R marks.
- CC0 does not make a Dataset normative or make third-party content safe to
  relicense.
- Lineage does not prove copyright permission, attribution compliance,
  authorship, ownership, official status, compatibility, translation fidelity,
  or trademark rights.

## Implementation and patent boundary

The selected MIT policy for schemas/code and the existing MIT software policy
allow copying, modification, commercial use, proprietary distribution, and
redistribution subject to the MIT notice and warranty terms. This policy does
not assert that E2R has no patent exposure. No concrete E2R standards-essential
patent issue is currently identified, so **NO SEPARATE PATENT POLICY IS
REQUIRED NOW**. Patent review may be reopened before a standards-body process,
broader external contribution, or commercial stewardship arrangement.

Apache-2.0 was not selected for schemas/code. Its explicit patent grant is
useful, but current E2R machine-readable artifacts have no identified patent
requirement that justifies adding a second software license and NOTICE burden;
consistency with the existing MIT implementation direction and low-friction
mixing are preferred. This is a bounded project policy, not a legal conclusion
that Apache patent terms are unnecessary in every future E2R component.

## Translation policy

Translations of E2R specification and documentation are permitted under CC BY
4.0 without advance permission. A translation should identify:

1. the source specification/document and exact version or commit;
2. the translation language and translator, where attribution applies; and
3. whether changes beyond translation were made.

Unless designated by the canonical steward, a translation is unofficial and is
not guaranteed to be current or semantically faithful. A translation does not
become canonical, official, endorsed, or a conformance certification merely by
being published.

## Fork and derivative-specification policy

Forks, modified specification text, profiles, and commercial derivative
specifications are permitted under the applicable CC BY 4.0 terms. They may
continue independently if the original project becomes inactive. They should
identify themselves as, for example, `Derived from E2R <version>` or `Fork of
E2R <version>`, preserve required attribution, and mark substantive changes.
No particular product name is required by this record.

A derivative may truthfully describe itself as based on, derived from, or
compatible with E2R when factually accurate. It must not imply that it is
official, endorsed, maintained by `sukoyaka-dopeness`, or the canonical E2R
release without authorization.

## Canonicality and official terminology

Canonical E2R means the specification identified by the canonical repository,
the canonical versioned release, and publication by the current canonical
steward. Canonicality is a provenance and governance property, not a
prohibition on forks or a monopoly over modified specification text.

The canonical repository may be mirrored. If the canonical repository or site
disappears, a mirror or fork may preserve and continue the specification under
the selected licenses; continued operation of a central resolver is not a
condition of the copyright grant. Machine Lineage may preserve declared
ancestry even when a URL is unavailable.

`Official E2R` refers to artifacts published or expressly designated by the
current canonical steward. This record adopts a **lightweight naming policy
before public release**, limited initially to that distinction and clear
derivative labeling. Logo artwork, trademarks, badges, certification marks,
and detailed enforcement terms remain deferred and are excluded from the
standards copyright decision.

## Conformance and certification

E2R currently requires **no certification program, official compatibility badge,
conformance logo, or membership program**. Validator results describe the
tested validation scope; they do not grant endorsement or certify an
implementation as official. A future conformance program would require a
separate decision.

## Self-description and machine-readable boundaries

`examples/e2r-self-description.json` remains informative, experimental,
machine-readable dogfood, and non-normative. CC0 makes it easy to download,
mirror, bundle, modify, translate labels, use as a fixture, fork into another
ecosystem description, and include in tutorials. Its accompanying Markdown is
documentation under CC BY 4.0; the file-level split is intentional and must be
documented by S3.

A machine-readable file is not automatically an example. A normative registry,
vocabulary export, or schema that carries specification machinery is MIT under
the schema/code category. Role and intended normative function decide the
policy; the `.json` extension alone does not.

The self-description Dataset does not become normative merely because it
describes E2R. Normative authority remains explicitly designated
specification documents and registered specification artifacts.

## Mixed-content rule

A Markdown file containing prose, JSON examples, and short code snippets is
CC BY 4.0 as a document as a whole. Standalone source files, schemas, or
example Dataset files retain their category license. Per-code-block license
annotations are not required unless third-party material or an unusual
embedded component makes the boundary unclear.

## Stewardship, contribution, and third-party material

Previously granted permissive rights remain valid if stewardship transfers to a
foundation, successor maintainer, standards organization, or acquirer. A
future steward may publish later canonical versions without revoking rights
already granted to mirrors, users, or forks.

No CLA or DCO is required for the current single/bounded contributor state.
This must be revisited before accepting broad external contributions; future
contributions should be accepted under terms compatible with this artifact map.

The project license map applies only to content for which E2R has the right to
grant the selected license. Third-party or imported content keeps its original
terms. Copied expressive source material, logos, names, and externally owned
Dataset content must not be relicensed merely because it is stored in an E2R
file.

## Operational formalization plan

S3 — E2R Standards License Formalization & Provenance Audit must, one bounded
step at a time:

1. audit file provenance and project ownership;
2. add the actual license texts/notices and root category map;
3. apply the category mapping to the repository and package metadata where
   authorized;
4. verify third-party notices and excluded material;
5. document CC0 dogfood/example redistribution and CC BY documentation reuse;
6. review contribution, patent, naming, and stewardship wording with
   professional legal counsel before major public formalization; and
7. reassess Hub publication eligibility and public URL readiness.

The proposed future architecture is a root `LICENSE.md` category map plus
`LICENSES/CC-BY-4.0.txt`, `LICENSES/MIT.txt`, and `LICENSES/CC0-1.0.txt`.
SPDX identifiers may be used in the map or per-file notices if S3 finds them
useful. REUSE tooling is not adopted by this decision.

## Deferred items

- actual `LICENSE` and `LICENSES/` creation;
- package metadata and software repository synchronization;
- full provenance audit and third-party inventory;
- formal trademark/logo policy and any certification program;
- separate patent/contributor policy if the project broadens its standards role;
- foundation or successor governance design; and
- Hub publication.

## Hub consequence and next phase

If S3 successfully formalizes the selected policy, **YES — license
formalization is the remaining licensing gate for E2R Self-Description Hub
publication**, subject also to public URL, redistribution, and ordinary Hub
readiness checks. S3 is the recommended next phase and is not started by this
record.
