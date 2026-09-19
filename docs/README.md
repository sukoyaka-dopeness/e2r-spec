# E2R Documentation

Guides, examples, application documentation, and research documents are
informative. The [Core](../spec/core.md) and individual Extension
specifications define normative requirements.

## How to use this documentation

This page is a navigation hub, not an index of every document in the
repository. Start with the responsibility that matches the question:

| Need | Start here | Authority or role |
| --- | --- | --- |
| Current priorities, status, or human decisions | [Roadmap](roadmap.md) | Current planning summary; later entries preserve chronology |
| E2R data-model requirements | [Core specification](../spec/core.md) and [Extension specifications](../extensions/README.md) | Normative specification |
| Schema and reference data | [Schemas](../schemas/) and [reference examples](../examples/) | Normative schema artifacts and canonical examples |
| User-facing concepts and workflows | The guides below | Informative, implementation-checked guidance |
| Application responsibilities and design | [Application documentation](../applications/README.md) | Informative application design authority |
| A completed checkpoint or accepted evidence | A linked `*-result.md` or `*-acceptance.md` document | Evidence for the named checkpoint; it does not override the specification |
| Open design questions and hypotheses | [Research](../research/) | Non-normative research |
| Historical chronology | [Sessions](../sessions/) | Historical record; it does not override current status |

### Current status at a glance

- [Documentation IA / roadmap modularization audit](documentation-information-architecture-roadmap-modularization-audit1-result.md): navigation-first policy accepted for implementation; existing paths remain stable.
- [NarrativeLine NL-H2-R1](roadmap.md): **ACCEPTED / MANUAL ACCEPTANCE COMPLETE**.
- [History 2 user-facing authoring scope](history-2-user-facing-authoring-scope-result.md): **DESIGN RESULT / HUMAN SCOPE DECISION REQUIRED**.

The roadmap is the short current-status index. The linked result or
acceptance document contains the detailed evidence. If a historical entry
uses words such as `NEXT`, `OPEN`, `BLOCKED`, or `UNSTARTED`, read it as a
record of that earlier checkpoint unless a later current-status entry says
otherwise.

### Responsibility and status vocabulary

- **Normative**: a Core, Extension, schema, or other specification artifact
  that defines requirements.
- **Current**: implemented or otherwise active status supported by current
  source or accepted evidence.
- **Accepted / closed**: a bounded checkpoint completed; its evidence remains
  useful even when the workstream is no longer active.
- **Designed**: a documented proposal that is not an implementation contract.
- **Experimental / research**: exploratory work that must not be presented as
  a released capability.
- **Historical / superseded**: retained chronology whose status was replaced
  by a later checkpoint.

Do not infer authority from a filename alone. Use the document's status,
scope, related checkpoint, and links to the responsible specification or
application repository.

## New to E2R? / E2Rを初めて使う方へ

| English | 日本語 |
| --- | --- |
| [Overview](e2r-overview-en.md) | [入門](e2r-overview-ja.md) |
| [What Can E2R Do?](what-can-e2r-do-en.md) | [E2Rで何ができるか](what-can-e2r-do-ja.md) |
| [Dataset Walkthrough](dataset-walkthrough-en.md) | [Datasetを段階的に作る](dataset-walkthrough-ja.md) |

## Building with E2R / E2Rを実装する方へ

- [Core specification](../spec/core.md)
- [Extension specifications](../extensions/README.md)
- [Reference examples](../examples/)
- [Application design documentation](../applications/README.md)
- [Validator repository](https://github.com/sukoyaka-dopeness/e2r-validator)

## Applications / アプリケーション

- [NarrativeLine](https://github.com/sukoyaka-dopeness/e2r-narrative-line)
  edits and presents Event-focused timelines.
- [LiaisonScape design](../applications/relationship-graph-app.md) describes an
  Entity-first relationship-graph reference application. Its implementation
  status is separate from this design document.

## AI and research / AIと研究

- [AI Workflow Research Backlog](ai-workflow-research.md)
- [Roadmap](roadmap.md)
- [Documentation Plan](documentation-plan.md)

## Documentation policy

- Use Core terminology when explaining Dataset structure.
- Use an application's current UI labels when explaining its operations.
- Treat implemented, designed, and experimental behavior as distinct states.
- Keep structural validation separate from factual review.
