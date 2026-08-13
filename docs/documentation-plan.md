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
