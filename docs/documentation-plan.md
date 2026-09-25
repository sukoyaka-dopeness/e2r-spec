# E2R Documentation Plan

Status: Draft

This document records the documentation policy and near-term documentation
work. It is informative and does not change the E2R Core or any Extension.

## Purpose

E2R documentation should help a reader move from first contact with E2R to a
practical Dataset and a reusable workflow. It should explain both what the
data model represents and what applications can do with an E2R Dataset.

The Overview remains a concise introduction. Walkthroughs, application guides,
and AI workflow material have separate responsibilities.

## Documentation roles

The E2R Core and individual Extension specifications are normative. Guides,
examples, application documentation, and research documents are informative
and do not override them.

The Documentation Hub in `docs/README.md` organizes these materials by reader
intent.

## Placement and authority policy

Choose a document path from its responsibility, not from the checkpoint name
or the convenience of the author. Existing paths remain stable unless a
bounded path migration is explicitly approved; this policy guides new
documents and such approved focused maintenance.

| Responsibility | Default location | Meaning |
| --- | --- | --- |
| Core, Extension, schema, or canonical example requirement | `spec/`, `extensions/`, `schemas/`, or `examples/` | Normative specification or canonical machine-readable artifact |
| Reader-facing guides and bilingual walkthroughs | `docs/guides/`, linked from `docs/README.md` | Informative reader guidance; paired language versions remain discoverable together |
| Cross-cutting planning, policy, or bounded checkpoint result | `docs/` root, linked from `docs/README.md` | Stable entry document or current/evidence record; foldering does not change authority |
| Application- or workstream-scoped documentation in this repository | Approved landing zones `docs/liaisonscape/`, `docs/narrativeline/`, `docs/hub/`, `docs/validator/`, or `docs/cross-app/`, when a bounded migration is approved | Physical navigation only; does not supersede the owning application, specification, or evidence authority |
| Application design or application-owned acceptance | `applications/` in this repository or the owning application repository | Informative design or implementation evidence; source remains authoritative for behavior |
| Exploratory research, hypothesis, or design decision | Existing responsibility-matched directory under top-level `research/` | Non-normative research; do not duplicate it under `docs/research/` |
| Session chronology and handoff history | `sessions/` | Historical record; it does not define current status |
| Reusable process knowledge | Sibling `ai-knowledge` repository | Guidance and decisions; it does not override this specification |

Human has adopted a narrow, responsibility-first hybrid for `docs/`, with
these approved landing-zone names: `docs/guides/`, `docs/liaisonscape/`,
`docs/narrativeline/`, `docs/hub/`, `docs/validator/`, and
`docs/cross-app/`. The first bounded path migration moved only the six
bilingual reader guides into `docs/guides/`; a second bounded migration moved
only the separate NarrativeLine Event Identity design and formal-acceptance
documents into `docs/narrativeline/`. The other named zones do not authorize
prefix-based or bulk moves. Assess each later cohort by its actual
responsibility, references, and migration boundary. These directories are
physical navigation, not a new authority or status hierarchy. Cross-cutting
IA, planning, and authority documents may remain at the `docs/` root.

Keep the existing `docs/roadmap-history/` and `docs/evidence/` responsibilities
unchanged. Do not create `docs/research/`, `docs/results/`, `docs/decisions/`,
`docs/audits/`, `docs/acceptances/`, `docs/applications/`, or `docs/sessions/`
as document-type or parallel-authority taxonomies; Research and Sessions
retain their existing top-level homes.

For a new cross-cutting document kept in the `docs/` root, include a compact
header stating `Date`, `Status`, `Scope`, `Authority`, and `Related records`.
Use established suffixes such as `-result.md`, `-acceptance.md`,
`-audit1-result.md`, or `-reconciliation1-result.md`. The suffix is a
navigation aid, not proof that the document is normative.

Use these status distinctions consistently:

- **Current**: the active status supported by current source or accepted
  evidence.
- **Accepted / closed**: a completed bounded checkpoint whose evidence remains
  useful.
- **Designed**: a proposal or design result awaiting implementation or human
  scope approval.
- **Experimental / research**: exploratory work, not a released capability.
- **Historical / superseded**: retained chronology that was replaced by a
  later checkpoint.

Historical records should be annotated or linked to the later status when
their wording could otherwise be mistaken for current work. They should not
be rewritten wholesale merely to make old plans agree with the present. A
closed checkpoint is not automatically an archive candidate.

## Language policy

Important introductory and user-facing documentation is maintained in Japanese
and English, using equivalent structure and the same logical examples whenever
practical. This includes the Overview, "What Can E2R Do?", and the Dataset
Walkthrough.

Technical documentation and research records may use English as their
canonical language. Japanese explanatory material can be added when useful;
full duplication is not required by default.

## Terminology and status language

When explaining E2R data structures, use the Core terms `Dataset`, `Event`,
`Entity`, `Relation`, and `Extension`. A Japanese beginner document may
introduce a short explanation on first use, such as Event（できごと）.

When explaining an application operation, use the label currently displayed by
that application. Do not replace a UI label solely to match specification
terminology. In NarrativeLine, for example, a user-facing association can be
explained as creating the corresponding `Relation` in the Dataset when that
implementation behavior has been verified.

Documentation must distinguish these states:

- **Current**: implemented and verified behavior.
- **Designed**: documented design not yet verified as usable implementation.
- **Experimental**: a research or test workflow, not established capability.

E2R represents and exchanges data. Applications and workflows provide views,
editing behavior, AI use, and output formats. Documentation must not describe a
timeline, graph, PDF, or fact check as a capability performed by E2R itself.

## Example policy

`e2r-spec/examples/` is the source of truth for E2R-level reference examples.
Every example should have an explicit teaching or testing purpose. An
application onboarding sample is not automatically a canonical E2R example.

Where the same logical example appears in several places, its intended source
should be identified and copies should be kept aligned deliberately. Existing
example paths must remain stable unless a separate migration updates their
references and fixtures.

An E2R-valid historical example demonstrates data structure, not the factual
accuracy of its content. History Extension version `1.0.0` uses the proleptic Gregorian
calendar; examples must not add a duplicate application-defined calendar field.

## Near-term deliverables

1. Documentation Hub (`docs/README.md`) linked from the repository README.
2. Japanese and English "What Can E2R Do?" guides, including a goal-to-
   structure table.
3. Japanese and English Dataset Walkthroughs based on the existing reference
   examples and the Core/History/Metadata boundaries.
4. A NarrativeLine practical workflow in the NarrativeLine repository after
   UI labels and behavior have been checked there.
5. AI workflow research material and an experiment record template, kept
   separate from beginner Core documentation.

## Publication checks

Before publishing application-specific instructions, verify the relevant
implementation and tests. For NarrativeLine this includes UI labels, Event and
Entity editing, association creation and removal, import/export behavior,
validation timing, warnings, title behavior, and suggested export filenames.

Also verify that independently created new NarrativeLine Datasets receive
distinct `datasetId` values. Investigate the reported discrepancy between an
observed Japanese Event Detail placeholder of `New Title` and the current
source placeholder before documenting either as confirmed behavior.
