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
| Session records | [Sessions](../sessions/) | Historical collaboration notes |
| Roadmap historical chronology | [Roadmap History](roadmap-history/README.md) | Preserved chronology; it does not define current status |

### Documentation IA decisions and audit

- Current planning remains in the [Roadmap](roadmap.md); preserved chronology is indexed by [Roadmap History](roadmap-history/README.md).
- The selected [Roadmap-first structure direction](documentation-ia-roadmap-physical-modularization-direction-decision1.md) and [Roadmap chronology structure decision](documentation-ia-roadmap-chronology-structure-decision1.md) govern that split.
- The accepted narrow-hybrid foldering policy and first six-guide path migration are recorded in the [Documentation Plan](documentation-plan.md) and [guide migration result](documentation-ia-guides-path-migration1-result.md). Other approved landing zones are not migrated by this checkpoint.
- The [docs-wide organization audit](documentation-ia-docs-wide-organization-audit1.md) preserves the inventory and earlier options considered before the Human foldering decision.

Follow links from the responsible planning or evidence authority for current
checkpoint details; this Hub is not an inventory of every audit and result.

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
| [Overview](guides/e2r-overview-en.md) | [入門](guides/e2r-overview-ja.md) |
| [What Can E2R Do?](guides/what-can-e2r-do-en.md) | [E2Rで何ができるか](guides/what-can-e2r-do-ja.md) |
| [Dataset Walkthrough](guides/dataset-walkthrough-en.md) | [Datasetを段階的に作る](guides/dataset-walkthrough-ja.md) |

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

## Documentation policy

- Use Core terminology when explaining Dataset structure.
- Use an application's current UI labels when explaining its operations.
- Treat implemented, designed, and experimental behavior as distinct states.
- Keep structural validation separate from factual review.
