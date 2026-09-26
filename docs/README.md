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
- The selected [Roadmap-first structure direction](documentation-ia/documentation-ia-roadmap-physical-modularization-direction-decision1.md) and [Roadmap chronology structure decision](documentation-ia/documentation-ia-roadmap-chronology-structure-decision1.md) govern that split.
- The accepted narrow-hybrid foldering policy and first six-guide path migration are recorded in the [Documentation Plan](documentation-ia/documentation-plan.md) and [guide migration result](documentation-ia/documentation-ia-guides-path-migration1-result.md). Other approved landing zones are not migrated by this checkpoint.
- The [application/workstream landing-zone migration preparation](documentation-ia/documentation-ia-application-workstream-landing-zone-migration-preparation1.md) records candidate cohorts and workspace reference risks; it authorizes no additional moves.
- The bounded [NarrativeLine Event Identity path migration](documentation-ia/documentation-ia-narrativeline-event-identity-path-migration1-result.md) moved only its separate design and formal acceptance records; no other NarrativeLine cohort was included.
- The bounded [Hub Public Entry path migration](documentation-ia/documentation-ia-hub-public-entry-path-migration1-result.md) moved only the Milestone 1 IA and Milestone 2 acceptance records; the E2R-wide milestone authority remains the Roadmap.
- The bounded [Validator integration path migration](documentation-ia/documentation-ia-validator-integration-path-migration1-result.md) moved only the three separate Production Validator Extension integration lifecycle records; their recorded checkpoint statuses and normative specification authorities are unchanged.
- The bounded [LiaisonScape Pin evidence path migration](documentation-ia/documentation-ia-liaisonscape-pin-path-migration1-result.md) moved only three distinct Pin persistence, Save integration, and UI result records; their dispositions and Extension maturity remain separate.
- The bounded [Cross-App Current Dataset Handoff contract path migration](documentation-ia/documentation-ia-cross-app-current-dataset-handoff-path-migration1-result.md) moved only the four design-contract and sender-navigation authorization records; runtime implementation and acceptance evidence remain in their existing locations.
- The bounded [Capability / Dataset Handoff evidence Wave 2A migration](documentation-ia/documentation-ia-handoff-evidence-wave2-path-migration1-result.md) moved 13 records across the Cross-App, NarrativeLine, and LiaisonScape zones without merging their status or authority. The same [Wave 2 preparation](documentation-ia/documentation-ia-application-workstream-foldering-wave2-preparation1.md) records the subsequent Validator 0.4.0 Wave 2B migration.
- The bounded [Validator 0.4.0 lifecycle Wave 2B migration](documentation-ia/documentation-ia-validator-0.4.0-lifecycle-wave2b-path-migration1-result.md) moved only its five package / consumer records; publication history and checkpoint authorization remain unchanged.
- The [docs-wide organization audit](documentation-ia/documentation-ia-docs-wide-organization-audit1.md) preserves the inventory and earlier options considered before the Human foldering decision.
- The [post-Wave-2 residual responsibility audit](documentation-ia/documentation-ia-post-wave2-residual-responsibility-audit1.md) assesses the remaining root cohorts; it is preparation only and authorizes no additional moves.
- The [primary-responsibility residual classification audit](documentation-ia/documentation-ia-primary-responsibility-residual-classification-audit1.md) reclassifies root records by their decision/evidence owner and supplies exact candidate manifests; it authorizes no path changes.
- The [Initial Placement Seed 133-document readiness audit](documentation-ia/documentation-ia-seed-133-path-migration-readiness-audit1.md) and [bounded migration result](documentation-ia/documentation-ia-seed-133-path-migration1-result.md) record the three separate LiaisonScape evidence lanes, path repairs, and the still-unresolved diagnostic artifacts.
- [Wave 3A — app-owned bounded evidence migration](documentation-ia/documentation-ia-wave3a-app-owned-evidence-path-migration1-result.md) moved seven separate NarrativeLine modernization acceptances, two NarrativeLine Entity-deletion records, and one Validator Presentation-support result to their approved responsibility folders. The three authority lanes and each record's status remain distinct.
- [Wave 3B — shared Cross-App contract/parity evidence migration](documentation-ia/documentation-ia-wave3b-cross-app-evidence-path-migration1-result.md) moved only the approved Relation Deletion, Locale design, and shell/parity records; their three responsibility groups and checkpoint statuses remain separate.
- [Wave 3C — LiaisonScape presentation / Explicit Auto Layout evidence migration](documentation-ia/documentation-ia-wave3c-liaisonscape-evidence-path-migration1-result.md) moved only the two LiaisonScape-local presentation audits and 21 Explicit Auto Layout / Pin records; their individual checkpoint statuses and boundaries remain distinct.
- The [NarrativeLine Locale experiment path migration](documentation-ia/documentation-ia-narrativeline-locale-experiment-path-migration1-result.md) moved only the two bounded NarrativeLine experiment acceptances; shared Cross-App Locale closure remains separate.
- The [owner-first residual root Wave 4 preparation](documentation-ia/documentation-ia-owner-first-residual-wave4-preparation1.md) preserves the audit-time 349-document manifest; the approved execution is recorded in the [Wave 4 path migration result](documentation-ia/documentation-ia-owner-first-residual-wave4-path-migration1-result.md).
- [Documentation IA](documentation-ia/README.md) now holds repository documentation-governance records; the [Wave 5 result](documentation-ia/documentation-ia-wave5-final-residual-placement-migration1-result.md) records the four approved path-migration cohorts and the actual 70-file root census. The [post-Wave-5 root classification audit](documentation-ia/documentation-ia-post-wave5-root-classification-audit1.md) proposes five positive root placements and exact responsibility-based destinations for the remainder; it performs no moves and implements no root-ingress gate. The gate remains deferred until Human approves a final placement baseline.

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

- [AI Workflow Research Backlog](../research/exploratory/ai-workflow-research.md)

## Documentation policy

- Use Core terminology when explaining Dataset structure.
- Use an application's current UI labels when explaining its operations.
- Treat implemented, designed, and experimental behavior as distinct states.
- Keep structural validation separate from factual review.
