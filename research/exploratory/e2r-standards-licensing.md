# S1 — E2R Standards Licensing Research

Status: exploratory research; no license is selected by this document.

Date: 2026-08-25

## Question and boundary

This study asks which standards/document licensing model best supports long-
term E2R adoption, permissionless implementation, commercial and closed-source
use, translation, redistribution, fork survival, and interoperable canonical
identity. It is a research recommendation for a later S2 policy decision, not
legal advice and not a license grant.

It does not change the current software repositories, `LICENSE` files, Core,
Validator, applications, Hub, or Lineage Draft status. The current software
direction remains the existing permissive direction (including MIT where
already recorded); the standards/document question is intentionally separate.

## Five layers that must remain separate

| Layer | Question | Candidate control |
| --- | --- | --- |
| Implementation permission | May someone implement E2R, including commercially and in closed source? | Software license and any separate patent policy |
| Normative specification text | May the Markdown specification be copied, quoted, translated, modified, and mirrored? | Content/document license |
| Schemas and machine-readable artifacts | May schemas, examples, fixtures, and dogfood JSON be embedded, transformed, or redistributed? | Role-specific data/code license |
| Name, logo, and conformance | May a fork call itself E2R, use marks, or claim conformance/endorsement? | Trademark and branding policy, separate from copyright |
| Governance and canonical publication | Which version and source are authoritative after mirrors, forks, or stewardship changes? | Versioned release record, canonical URL, provenance, and succession policy |

One license must not accidentally grant trademark rights, patent rights beyond
its terms, endorsement, canonical authority, or permission to remove required
attribution/change notices.

## Primary-source findings

- The [MIT License](https://opensource.org/license/mit) is a short permissive
  software license with copy/modify/distribute/sell permissions and notice
  retention. It is a good implementation/code baseline, not a complete policy
  for normative prose, marks, or standards governance.
- [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0.html)
  separately states copyright and patent grants and includes notice and
  derivative-work conditions. Its patent treatment is useful evidence for
  software and schema components, but does not by itself solve canonical
  standards publication or trademarks.
- W3C separates its [Document License](https://www.w3.org/copyright/
  document-license-2023/) from software licensing and uses a separate
  [Patent Policy](https://www.w3.org/policies/patent-policy/). Its document
  model protects a recognizable specification source, but its restrictions on
  general document modifications are a possible barrier to unofficial forks
  and translations.
- OpenAPI provides a permissive standards-repository precedent: its
  [specification repository](https://github.com/OAI/OpenAPI-Specification)
  uses Apache-2.0, while its contribution guidance identifies versioned
  published files and a source-of-truth workflow. This combines broad reuse
  with explicit canonical release handling.
- [RFC 8259](https://www.rfc-editor.org/rfc/rfc8259.html) illustrates the
  separation between an RFC's text/legal provisions and extracted code
  components. JSON syntax is not itself a grant to copy the RFC text.
  [Ecma-404](https://ecma-international.org/publications-and-standards/standards/ecma-404/)
  similarly defines JSON syntax without defining application semantics.
- Creative Commons advises against using CC licenses for software and points
  toward software licenses; its [FAQ](https://creativecommons.org/faq/index.html)
  and [CC0 guidance](https://wiki.creativecommons.org/wiki/CC0_FAQ%23May_I_apply_CC0_to_computer_software.3F)
  support role-specific treatment for content/data rather than one universal
  license.
- The [official MIDI specifications index](https://midi.org/specs) is useful
  as a governance analogy: a long-lived interoperable format needs an
  identifiable specification family and revision process. It is not evidence
  that E2R should copy MIDI's legal terms.

These sources support a design distinction, not a conclusion that any external
organization's terms automatically apply to E2R.

## JSON, JSON.org, and E2R artifacts

JSON syntax is an underlying format, not an ownership or redistribution license
for an E2R Dataset. The license of a JSON file depends on its contents and
rights holder. A JSON.org software/code notice, an RFC copyright notice, or an
Ecma publication policy must not be inferred to cover every JSON document.
E2R's schemas, examples, research fixtures, and machine-readable dogfood must
therefore receive an explicit role classification before publication.

The L7 self-description artifact is machine-readable dogfood, not a normative
license decision. A future policy should allow download, mirroring, tutorial
embedding, transformation, and software bundling where the artifact's role
license permits them, while preserving provenance and clearly marking changes.

## Candidate models

| Dimension | A: CC BY text + permissive code/schema | B: W3C-like document + permissive software | C: Apache-like repository | D: mixed role-specific model |
| --- | --- | --- | --- | --- |
| Permissionless implementation / commercial / closed source | Good for code/schema; text terms separate | Good if software terms and patent policy are clear | Good | Good |
| Specification redistribution, mirrors, quotation | Good with attribution | Good with notices and policy limits | Good | Good |
| Translation, modified spec, unofficial fork survival | Strong, if changes and unofficial status are marked | Weaker; document restrictions need careful exceptions | Strong | Strong for text, with explicit labeling |
| Commercial redistribution of spec bundles | Good with attribution | Possible but policy-heavy | Good | Good, role by role |
| Attribution and change marking | Explicit CC BY conditions | Explicit notices and document rules | NOTICE/attribution conditions | Explicit per artifact |
| Patent treatment | Not supplied by CC BY alone | Separate RF patent policy | Apache patent grant for covered code | Separate policy plus Apache/MIT code terms |
| Schema/code/machine artifact fit | Good only when separately licensed | Good under software terms | Good | Strongest role fit |
| MIT compatibility | Usually practical for code, review needed for combinations | Requires document/software separation | Requires component review | Preserves existing software direction |
| Canonicality, marks, stewardship | Not solved by license | Stronger source-control model | Needs explicit policy | Provenance + version + trademark/governance policy |
| Complexity / ambiguity risk | Medium | High | Low-medium | Medium; requires a clear file map |

## What each model must not cover accidentally

Markdown normative prose should not silently inherit a software license.
Schemas and code should not be constrained by a prose-only license. Examples,
fixtures, and dogfood JSON may contain third-party or factual material and need
their own review. Validator/application code keeps its existing repository
terms. E2R names, logos, conformance badges, and claims of endorsement remain
outside copyright permissions. A canonical URL is a publication/governance
claim, not a license condition.

## Translation, fork, and canonicality policy concepts

Any eventual policy should require a translation or fork to identify the source
version, name the translator or modifier where attribution is required, mark
material changes, and avoid implying official approval. A canonical release
record should identify the authoritative version and preserve stable release
artifacts; mirrors may preserve the same identity without becoming the source
of truth.

Lineage can record ancestry, origin, revision, fork, or translation relations.
It does not itself satisfy attribution, license compliance, authorship, trademark
permission, endorsement, compatibility, or canonical legal authority. This is
consistent with the current Lineage Draft boundary.

## Recommendation for S2

**RECOMMEND MIXED MODEL D.**

The strongest current research fit is: a content license for normative prose
(CC BY 4.0 is the leading candidate to test), a permissive software license
for schemas and code (Apache-2.0 or the existing MIT direction), and an
explicit role decision for examples, fixtures, and dogfood artifacts (with CC0
or CC BY considered only where the content review supports it). Trademark,
patent, canonical publication, stewardship, and acquisition/succession rules
must be written separately.

This is not a final license selection. S2 must confirm rights ownership,
contributor provenance, patent exposure, third-party contents, compatibility,
translation wording, mark policy, and the exact file-to-license map before any
public release or `LICENSE` change.

## S2 questions

1. Who owns or can grant rights for every normative document, schema, example,
   fixture, and dogfood component?
2. Should normative prose use CC BY 4.0, and what attribution/change-marking
   form is required for mirrors and translations?
3. Should schemas and machine-readable artifacts use Apache-2.0, MIT, CC0, or
   a per-file matrix, and are any third-party elements excluded?
4. What patent and contribution policy is needed for a standards claim?
5. What names, logos, badges, compatibility claims, and canonical URLs need a
   separate trademark/governance policy?
6. What happens to canonical publication if the steward becomes inactive,
   transfers stewardship, or an independent fork becomes the maintained line?

## Disposition

S1 is complete as exploratory research. No `LICENSE` file, package metadata,
software repository, application, Hub surface, Core, or Extension status was
changed. S2 is the next phase; S1 does not start it automatically.
