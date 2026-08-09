# E2R Session 0023 — Roadmap and Linkscape Handoff

Date: 2026-08-08

## Status

The following milestones are complete:

- NarrativeLine MVP and bilingual overview guides;
- Validator `0.1.3` publication through npm Trusted Publishing;
- post-release installation and CLI smoke test;
- Validator release documentation and CHANGELOG;
- historical future-work inventory and the current roadmap; and
- Linkscape MVP application design and acceptance criteria.

The Linkscape repository has now been created:

`https://github.com/sukoyaka-dopeness/e2r-linkscape`

The next implementation work should use:

- [`applications/relationship-graph-app.md`](../applications/relationship-graph-app.md)
- [`applications/linkscape-mvp-acceptance.md`](../applications/linkscape-mvp-acceptance.md)
- [`docs/roadmap.md`](../docs/roadmap.md)

## NarrativeLine review observations

These observations came from using the Japanese and English NarrativeLine
versions. They are not yet implementation decisions.

### Sample Dataset identity correction

The Japanese Oda Nobunaga sample and English Apollo 11 sample initially used
the same `extensions.metadata.datasetId` value. Since they are independent
Datasets, this was corrected in the NarrativeLine sample data by assigning the
Apollo 11 sample a distinct UUID. NarrativeLine tests, lint, and production
build passed after the correction. The change is application sample data only;
it does not change the E2R Core or Metadata Extension rules.

### Confirmed UI issue candidates

1. In the Japanese Event Detail, the heading currently says `名前`, while the
   default input text remains the English `New Title`. The Entity input uses a
   more localized pattern. Candidate wording:

   - Japanese heading: `できごと`
   - Japanese placeholder: `できごとを入力してください`
   - English heading and placeholder should follow the same pattern, such as
     `Event` and `Enter an event`.

   The exact wording should be reviewed against existing Entity labels before
   implementation.

2. On mobile, focusing an input can cause browser zoom. After navigation, the
   next screen or a transition from a modal may remain at the enlarged scale.
   This should be reproduced on the target mobile browser before choosing a
   fix. Check viewport configuration, input font size, modal transitions, and
   focus restoration. Do not assume every browser behaves identically.

3. The caption below `関連エンティティを追加` may overflow horizontally on
   mobile. The Japanese text should wrap, and the English equivalent should be
   checked for the same responsive behavior. This is a concrete responsive UI
   candidate.

4. Event and Entity cards and buttons may have excessive padding, border
   radius, and inter-card spacing. Possible alternatives include tighter
   spacing, square corners, or a borderless gray surface. Any visual change
   must be checked in both light and dark themes and at narrow widths.

### Future data-model and workflow requests

These are not short-term UI fixes and require separate design review:

- reordering Events that have no recorded date;
- recording ordinal or relative days such as “day 1” and “day 2” without
  pretending they are calendar dates;
- supporting Events with time information but no calendar date.

The current History Extension intentionally distinguishes recorded temporal
values from presentation order and does not infer missing dates. Possible
solutions may require a Relative Time, Narrative Order, or alternative
calendar/temporal Extension. Do not add an ad hoc field to Core or silently
reinterpret an incomplete History value.

## Next-room handoff

At the next session start:

1. Read this log and [`docs/roadmap.md`](../docs/roadmap.md).
2. Check `git status` in all four repositories, including `e2r-linkscape`.
3. Preserve the current uncommitted changes in `e2r-spec` and
   `e2r-validator`; do not reset, checkout, or delete them.
4. Begin Linkscape repository inspection and implement only the documented MVP
   acceptance criteria first.
5. Treat the NarrativeLine observations above as review candidates. Reproduce
   the mobile issues before changing UI behavior.
6. Keep date-less ordering, ordinal days, and time-only Events as research and
   Extension design questions until their semantics are defined.
7. Do not change package versions for documentation or design-only work.

## Documentation perspective for the next guide revision

The E2R bilingual beginner guide should not stop at terminology and schema
explanation. Each major concept should answer two practical questions:

1. What can a user or developer do with this?
2. How does the user use an E2R Dataset to achieve it?

Useful examples include:

- create a timeline by storing Events and optional History data;
- connect an Event to a person, place, organization, or object with a Relation;
- reuse one Dataset to produce a timeline, relationship graph, summary, PDF,
  or presentation;
- pass the JSON to an AI system as a structured intermediate representation;
- validate an AI-generated or imported Dataset before using it; and
- preserve information when moving a Dataset between applications.

The NarrativeLine User Guide should use the same benefit-oriented perspective.
For each workflow, explain why it is useful and what the resulting Dataset
can be reused for. Examples include:

- creating a Dataset instead of keeping a one-off note;
- adding Events and Entities so the same information can be viewed in a
  Timeline or later in Linkscape;
- using Relations to make connected people, places, and objects discoverable;
- adding a title so exports are easier to identify;
- importing and exporting JSON to move work between tools; and
- understanding Validator warnings so the user can preserve forward-compatible
  data without confusing warnings with invalid Core data.

These explanations should remain honest about scope: NarrativeLine is an
E2R application, not the whole E2R specification, and a Dataset does not
automatically create a PDF, graph, or AI result without an application or
workflow that performs that transformation.

## ChatGPT drafting handoff

ChatGPT can prepare drafts independently of implementation work. Good bounded
topics are:

1. A Japanese and English beginner-guide chapter titled “What can E2R do?”
   organized by user goal rather than by field definition.
2. A step-by-step Dataset walkthrough: empty Dataset → Events and Entities →
   Relations → History/Metadata Extensions → validation → reuse by another
   application or AI workflow.
3. A bilingual table mapping user goals to Dataset structures, such as
   timeline, relationship graph, export title, analysis, and PDF generation.
4. A NarrativeLine User Guide chapter explaining the practical benefit of each
   workflow and what can be done with the resulting Dataset.
5. Short AI workflow examples that distinguish structural validation by the
   Validator from factual or editorial review by a human.

Minimum files ChatGPT should read before drafting:

- `docs/e2r-overview-ja.md`
- `docs/e2r-overview-en.md`
- `spec/core.md`
- `spec/philosophy.md`
- `extensions/history-extension.md`
- `extensions/metadata-extension.md`
- `applications/relationship-graph-app.md`
- `applications/linkscape-mvp-acceptance.md`
- `docs/roadmap.md`

For NarrativeLine-specific drafts, also provide the user guide files from the
`e2r-narrative-line` repository and its current UI terminology source. ChatGPT
should not invent Core fields, Extension semantics, or UI behavior that is
not present in these sources.

## Current working-tree note

At handoff time, `e2r-narrative-line` is clean. The `e2r-spec` and
`e2r-validator` repositories contain the documentation and workflow changes
made during this session; they remain uncommitted unless explicitly requested.
