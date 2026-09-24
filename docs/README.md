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

- [Earlier Documentation IA / roadmap modularization audit](documentation-information-architecture-roadmap-modularization-audit1-result.md): its navigation-first and path-stability recommendation remains historical evidence. The later [Roadmap-first structure decision](documentation-ia-roadmap-physical-modularization-direction-decision1.md) governs current structure direction. [Roadmap → Research Responsibility Audit 1](roadmap-research-responsibility-audit1-result.md) and its [first bounded compression result](roadmap-research-responsibility-migration1-result.md) record the approved tranche; other candidates remain unmigrated.
- [Residual Roadmap Responsibility Audit 1](roadmap-residual-responsibility-audit1.md): current-roadmap classifications and a proposed next bounded tranche; no migration is authorized by the audit.
- [Roadmap Semantic Decomposition / Canonical Planning Synthesis Audit 1](roadmap-semantic-decomposition-canonical-planning-synthesis-audit1.md): current-planning and dated-evidence responsibilities after the chronology migrations;
  compares guarded synthesis paths without changing the Roadmap.
- [Residual Roadmap Semantic Reconstruction Re-Audit 1](roadmap-residual-semantic-reconstruction-reaudit1.md): post-G2-B whole-roadmap responsibility map and grouped next-candidate decision preparation; no reconstruction is authorized by the audit.
- [Explicit Auto Layout / Pin Claim Reconciliation Preparation 1](roadmap-hybrid-reconstruction-explicit-auto-layout-pin-claim-reconciliation-preparation1.md)
  and its [first group-level reconstruction
  result](roadmap-hybrid-reconstruction-explicit-auto-layout-pin-group-pilot-result1.md):
  the readiness / blocker / DEV diagnostic progression was reconciled while
  current Pin, ownership, and failure-attribution boundaries remain in the
  Roadmap.
- [Roadmap Hybrid Reconstruction — Product Verification Pilot Preparation 1](roadmap-hybrid-reconstruction-product-verification-pilot-preparation1.md): claim-level B/A/HOLD manifest for the first proposed pilot; no Roadmap or History edit is authorized by the preparation.
- [Roadmap Hybrid Reconstruction — Product Verification Pilot Result 1](roadmap-hybrid-reconstruction-product-verification-pilot-result1.md): PV-01–PV-10 current synthesis and History delegation; PV-11–PV-14 remain out of scope.
- [Roadmap Hybrid Reconstruction — Second Pilot Preparation 1](roadmap-hybrid-reconstruction-second-pilot-preparation1.md): splits the PV-11–PV-14 responsibility area into bounded verification, candidate/risk, provider/Worker, and visual-quality groups; recommends only the isolated verification-envelope group for the next pilot.
- [Roadmap Hybrid Reconstruction - Second Pilot Result 1](roadmap-hybrid-reconstruction-second-pilot-result1.md): applies the G2-A bounded verification-envelope B pilot; G2-B-G2-D remain unchanged.
- [Roadmap Hybrid Reconstruction - G2-B A-style Preparation 1](roadmap-hybrid-reconstruction-second-pilot-preparation2.md): separates screening, probing, boundary completion, and risk claims; recommends a G2-B1-only A pilot.
- [Roadmap Hybrid Reconstruction - G2-B1 Pilot Result 1](roadmap-hybrid-reconstruction-g2-b1-pilot-result1.md): preserves the G2-B1 heading and current screening boundary while delegating dated finalist-recall evidence to History.
- [Roadmap Hybrid Reconstruction - G2-B2 Pilot Result 1](roadmap-hybrid-reconstruction-g2-b2-pilot-result1.md): preserves the G2-B2 diagnostic boundary while keeping G2-B4 risk and target qualification separate.
- [Roadmap Hybrid Reconstruction - G2-B3 A-style Preparation 1](roadmap-hybrid-reconstruction-g2-b3-preparation1.md): prepares a standalone tested-set-qualified boundary-completion compression pilot without changing G2-B4.
- [Roadmap Hybrid Reconstruction - G2-B3 Pilot Result 1](roadmap-hybrid-reconstruction-g2-b3-pilot-result1.md): preserves tested-set quality closure and capped-completion boundaries while keeping G2-B4 live qualification separate.
- [Roadmap Hybrid Reconstruction - G2-B4 A-style Preparation 1](roadmap-hybrid-reconstruction-g2-b4-preparation1.md): separates fail-closed diagnostic safety from the still-open target/risk qualification.
- [Roadmap Hybrid Reconstruction - G2-B4 Pilot Result 1](roadmap-hybrid-reconstruction-g2-b4-pilot-result1.md): preserves fail-closed safety while keeping target stability and risk-gate qualification open.
- [NarrativeLine NL-H2-R1](roadmap.md): **ACCEPTED / MANUAL ACCEPTANCE COMPLETE**.
- [History 2 broader authoring scope](history-2-user-facing-authoring-scope-result.md): **DEFERRED / BOUNDED H2-POSITION-CIRCA CLOSED; FUTURE SCOPE DECISION ONLY IF REOPENED**.

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
