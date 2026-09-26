# Primary-Responsibility Residual Documentation Classification Audit 1

- Date: 2026-09-26
- Status: CLASSIFICATION COMPLETE — PREPARATION ONLY; NO PATH MIGRATION AUTHORIZED
- Scope: Residual `docs/` root records after Wave 1 and Waves 2A/2B; primary-responsibility classification, exact bounded migration manifests where presently supportable, and repository-root retention rationale.
- Authority: Human classification principle in the current request; accepted landing zones and path policy in [Documentation Plan](documentation-plan.md). `docs/roadmap.md` remains the sole current-planning authority.
- Follow-on execution: [Wave 3A bounded app-owned evidence migration](documentation-ia-wave3a-app-owned-evidence-path-migration1-result.md) completed manifests A, B, and D only; the other candidate manifests remain unchanged.
- Follow-on execution: [Wave 3B bounded shared Cross-App migration](documentation-ia-wave3b-cross-app-evidence-path-migration1-result.md) completed manifests E, F, and G only; all other candidate manifests remain unchanged.
- Related records: [Documentation Hub](README.md), [post-Wave-2 audit](documentation-ia-post-wave2-residual-responsibility-audit1.md), [Wave 2 preparation](documentation-ia-application-workstream-foldering-wave2-preparation1.md).

## Executive finding

The root is not an appropriate default for application-owned evidence. The current tree supports several exact, responsibility-based migration packets across NarrativeLine, LiaisonScape, Validator, and Cross-App. The strongest large application-owned packets are the 21-document Explicit Auto Layout lifecycle and the three separate LiaisonScape Initial Placement Seed groups. The latter are decomposed below into candidate/assignment research, PR-2 candidate/readiness evidence, and PR-3 visual-settling/browser evidence; they are not one undifferentiated “LiaisonScape” cohort.

This audit does **not** move anything. Some exact packets have inbound references into `ai-knowledge` or highly connected Roadmap/History/application evidence. A future move must repair every in-scope known reference and must not write to a sibling repository unless that later checkpoint explicitly authorizes the exact repair. Dirty sibling worktrees remain untouched.

Recommended next decision: choose a Wave 3 package from the exact manifests in §3. A modest first group is the seven NarrativeLine modernization acceptances plus its two app-owned Entity-deletion records and the one Validator presentation-support result (10 files, three destinations, separate authority lanes). A larger alternative can add the 21 Explicit Auto Layout records, but its Knowledge reference and live sibling worktree make it a higher-coordination choice. Cross-App closure/parity is a separate packet and should not be blended into an app-owned wave merely for convenience.

## Classification rule and inventory

Classification asks what each record decides, contracts, implements, accepts, or operates. A reference to Core, an Extension, schema, or another application does not change its owner. Conversely, an application name in a title does not make a shared contract application-owned. When two responsibilities are separable, this audit assigns them to separate landing zones rather than using “mixed” as a root-placement rationale.

At the pre-audit snapshot, `docs/` contained 678 Markdown files at root (including the post-Wave-2 audit artifact); the current five approved responsibility folders contained 6 LiaisonScape, 7 NarrativeLine, 2 Hub, 8 Validator, and 9 Cross-App Markdown records. `guides/`, `roadmap-history/`, and `evidence/` retain their existing roles. Counts are placement inventory, not ownership evidence.

## Exact migration manifests

For every source listed below, the proposed destination is the same basename under the stated approved folder. These are path-only candidates: they do not authorize movement, combine authorities, or alter any recorded status. A fresh path/reference scan is required before an actual migration.

### A. NarrativeLine modernization acceptance sequence → `docs/narrativeline/` (7)

These are the bounded NL-0 through NL-D5B application acceptance/audit records. Their explicit exclusions remain separate; grouping does not imply Dataset Handoff, replacement safety, or all-purpose navigation protection is accepted.

- `docs/narrativeline-modernization-nl-0-acceptance.md`
- `docs/narrativeline-modernization-nl-d1-acceptance.md`
- `docs/narrativeline-modernization-nl-d2-acceptance.md`
- `docs/narrativeline-modernization-nl-d3-acceptance.md`
- `docs/narrativeline-modernization-nl-d4-acceptance.md`
- `docs/narrativeline-modernization-nl-d5a-beforeunload-acceptance.md`
- `docs/narrativeline-modernization-nl-d5b-internal-navigation-loss-audit-acceptance.md`

Known exact-filename Markdown inbound references in the canonical workspace: NL-0 from `e2r-narrativeline-next-phase-and-source-handoff-planning1-result.md`; NL-D3 from `sessions/E2R-Session-0044.md`; NL-D5B from `narrativeline-phase24-navigation-safety-acceptance.md`. No exact mentions were found for the other four in the scanned Markdown. No relative Markdown links were found in these seven source files. Do not infer external-link absence.

### B. NarrativeLine-owned Entity deletion implementation/acceptance → `docs/narrativeline/` (2)

- `docs/narrativeline-entity-deletion-resolution-acceptance.md`
- `docs/narrativeline-final-entity-deletion-cross-app-fix.md`

Primary responsibility is respectively bounded NarrativeLine Entity-deletion acceptance and the NarrativeLine final-Entity deletion implementation correction. The latter’s “cross-app” label describes the wider capability context; its own checkpoint says implementation/automated evidence and retains formal Cross-App acceptance as pending. Keep these separate from the four shared Cross-App Relation-deletion authority records in manifest E. Known inbound references cross into the Cross-App deletion records and destructive-action audit; path repair must preserve those lanes.

### C. NarrativeLine-only Locale experiments → `docs/narrativeline/` (2)

- `docs/cross-app-locale-recipient-preference-experiment-1-acceptance.md`
- `docs/cross-app-locale-recipient-preference-experiment-2b-acceptance.md`

Despite the filename, each records acceptance only within a NarrativeLine experimental/in-session composition scope. They do **not** establish cross-app Locale closure. The shared startup contract and other-consumer parity remain distinct.

### D. Validator Presentation support implementation result → `docs/validator/` (1)

- `docs/production-validator-presentation-specification-support-fix-result.md`

Its primary responsibility is the production Validator’s exact locally supported Presentation Extension behavior, not a normative Extension/schema decision. Known filename references are in `lighthouse-semantic-enrichment-decision.md` and the two IA audit/preparation records. This is a one-document residual; bundle it with a later Validator-owned cohort if one exists, rather than creating a special folder or result taxonomy.

### E. Cross-App Relation Deletion capability and closure packet → `docs/cross-app/` (4)

- `docs/cross-app-relation-deletion-capability.md`
- `docs/cross-app-relation-deletion-bidirectional-acceptance.md`
- `docs/cross-app-relation-deletion-bidirectional-reacceptance.md`
- `docs/cross-app-relation-deletion-capability-closure.md`

These are shared capability, interoperability, bidirectional acceptance, and closure authorities. Preserve the original `FAIL`, later formal reacceptance, and bounded closure as separate records; do not move the Roadmap or treat History as current status. The closure has inbound references from Roadmap, Roadmap History, current Handoff design/audit, and LiaisonScape Handoff evidence; the packet also links to NarrativeLine application evidence and excluded adjacent records. This is a coherent but high-reference-repair packet.

### F. Cross-App Locale startup contract/design → `docs/cross-app/` (2)

- `docs/cross-app-locale-startup-v0-design.md`
- `docs/cross-app-locale-startup-v0-recipient-preference-design.md`

These documents own the shared startup-locale design and cross-consumer boundary, even though they record NarrativeLine implementation progress. Preserve their current language that shared cross-app closure is not established. The documents cross-link each other and the NarrativeLine Locale Consumer Acceptance. `ai-knowledge/hypotheses/cross-app-action-hierarchy-and-destructive-controls.md` references the recipient-preference design; any future move that changes that target requires an explicitly authorized Knowledge-repository path repair. The two NarrativeLine-only experimental acceptances are manifest C, not F.

### G. Cross-App shared shell / visual parity packet → `docs/cross-app/` (6)

- `docs/cross-app-editor-shell-geometry-v0-design.md`
- `docs/cross-app-shell-action-hover-focus-parity-audit1-result.md`
- `docs/cross-app-dataset-replacement-destructive-styling-parity-audit1-result.md`
- `docs/e2r-cross-app-visual-consistency-audit1-result.md`
- `docs/e2r-cross-app-visual-hierarchy-form-geometry-audit1-result.md`
- `docs/liaisonscape-cross-app-shell-alignment-f2-ls1-acceptance.md`

Their primary responsibility is shared shell policy, cross-product comparison/parity, or bounded cross-app acceptance. Keep them distinct from local UI findings below and preserve each result’s own scope/status. This group is suitable for one path packet only after inbound-reference review; it does not create a common visual acceptance or general parity status.

### H. LiaisonScape-local presentation decisions surfaced by cross-app comparison → `docs/liaisonscape/` (2)

- `docs/cross-app-confirmation-dialog-spacing-audit.md`
- `docs/cross-app-destructive-action-hierarchy-audit.md`

Both documents explicitly end with a LiaisonScape-local direction/follow-up. Their comparison with NarrativeLine is evidence, not the primary owner. Keep the recorded non-authorization / implementation-not-started boundary. Do not put these in `cross-app/` based on prefix alone.

### I. LiaisonScape Explicit Auto Layout / Pin lifecycle evidence → `docs/liaisonscape/` (21)

- `docs/liaisonscape-explicit-auto-layout-app-lifecycle-integration1-result.md`
- `docs/liaisonscape-explicit-auto-layout-catastrophic-preview-boundary1-result.md`
- `docs/liaisonscape-explicit-auto-layout-completion-readiness-current-state-gap-audit1-result.md`
- `docs/liaisonscape-explicit-auto-layout-dev-failure-diagnostic1-result.md`
- `docs/liaisonscape-explicit-auto-layout-experiment-1a-result.md`
- `docs/liaisonscape-explicit-auto-layout-human-check-b-closure-gate1-result.md`
- `docs/liaisonscape-explicit-auto-layout-human-check-b-qualified-closure1-result.md`
- `docs/liaisonscape-explicit-auto-layout-human-check-b-resume1-result.md`
- `docs/liaisonscape-explicit-auto-layout-human-check-b-retest1-result.md`
- `docs/liaisonscape-explicit-auto-layout-operation-boundary1-result.md`
- `docs/liaisonscape-explicit-auto-layout-pin-runtime-integration1-result.md`
- `docs/liaisonscape-explicit-auto-layout-preview-admissibility-visual-gate1-result.md`
- `docs/liaisonscape-explicit-auto-layout-preview-adoption-contract-reconciliation1-result.md`
- `docs/liaisonscape-explicit-auto-layout-preview-pin-contract1-result.md`
- `docs/liaisonscape-explicit-auto-layout-preview-surface-refinement1-result.md`
- `docs/liaisonscape-explicit-auto-layout-product-eligibility-semantics1-result.md`
- `docs/liaisonscape-explicit-auto-layout-production-integration-result.md`
- `docs/liaisonscape-explicit-auto-layout-production-operation-staging1-result.md`
- `docs/liaisonscape-explicit-auto-layout-reference-placement-regression-fixture1-result.md`
- `docs/liaisonscape-explicit-auto-layout-safe-preview-failure-diagnosis1-result.md`
- `docs/liaisonscape-explicit-auto-layout-semantic-decision.md`

This is one LiaisonScape-owned lifecycle packet, not one status: accepted integration, Draft/non-Stable Pin authority, qualified Human Check B, unresolved failure attribution, and frozen/non-blocking quality follow-up remain distinct. A scan found links from Roadmap, broad Layout / Auto Layout History, worktree-baseline evidence, and other Explicit Auto Layout records. One acceptance is also referenced by `ai-knowledge/hypotheses/preview-before-adoption-for-quality-sensitive-operations.md`; moving this packet requires an explicitly authorized path repair there. The LiaisonScape sibling worktree is dirty and read-only. Do not infer acceptance or close any qualification from moving the records.

## Decomposed LiaisonScape Initial Placement responsibility groups

The root contains 133 records in the Initial Placement Seed workstream. Content/title and linked responsibilities separate them into three LiaisonScape-owned cohorts rather than one blanket “initial” move:

1. **Candidate generation, candidate-family/structural assignment, and topology witnesses — 47 records.** This is the exploratory/diagnostic seed-method lineage, separate from later production readiness. Its application-specific primary owner is LiaisonScape; it is not E2R-wide because it does not define a general E2R data-model or specification contract. If selected for path migration, preserve each experiment’s dated status and authority.
2. **Production candidate compatibility/materialization and PR-2 readiness — 11 records.** This is a bounded production-readiness evidence lane; preserve `COMPLETE-BOUNDED`, its limits, and separation from PR-3. It is not an implementation or release authorization.
3. **Production visual settling/routing evidence and PR-3 browser lineage — 75 records.** This is the browser-backed Product evaluation/settling evidence lane. Keep its current blocker, browser/runtime qualifications, run-identity/provenance, and evaluation-seam boundaries. The browser/helper/runtime diagnostics are supporting execution evidence, not a reason to mark the Product work closed.

These ownership classifications are affirmative: the work is LiaisonScape placement / Product-evaluation responsibility, not root-level merely because it cites specs or spans checkpoints. Exact source sets are inventoried below, but path-migration readiness is not yet established: before a move, inspect the per-file authority and complete link graph, determine whether helper/provenance records have a distinct repository-wide execution authority, and separate only on evidence. The sibling LiaisonScape worktree and the Knowledge worktree are dirty; no path repair there is authorized here. The 75-record PR-3 family must not be moved wholesale until that authority/reference check is complete.

The three source sets were enumerated for inventory. If Human later selects any set for migration, every listed `docs/<basename>` would map to `docs/liaisonscape/<basename>`; this inventory is not authorization and still requires a current reference scan. The cohorts remain separate because their planning/evidence roles and PR-2/PR-3 boundaries differ.

### Seed candidate-generation / assignment set (47)

```text
liaisonscape-initial-placement-seed-assignment-equivariance-followup.md
liaisonscape-initial-placement-seed-assignment-semantics-design.md
liaisonscape-initial-placement-seed-assignment-stability-audit.md
liaisonscape-initial-placement-seed-candidate-family-offline-experiment1-design.md
liaisonscape-initial-placement-seed-candidate-family-offline-experiment1-result.md
liaisonscape-initial-placement-seed-candidate-generation-design-boundary-audit.md
liaisonscape-initial-placement-seed-candidate-generation-input-boundary-audit.md
liaisonscape-initial-placement-seed-candidate-generation-semantics-audit.md
liaisonscape-initial-placement-seed-candidate-generation-semantics-validation.md
liaisonscape-initial-placement-seed-candidate-space-audit.md
liaisonscape-initial-placement-seed-exact-angular-gap-comparator-design.md
liaisonscape-initial-placement-seed-family-assignment-experiment-seam-design.md
liaisonscape-initial-placement-seed-family-assignment-experiment-seam1-result.md
liaisonscape-initial-placement-seed-fanout-partial-preference-design.md
liaisonscape-initial-placement-seed-generation-assignment-responsibility-audit.md
liaisonscape-initial-placement-seed-lighthouse-fixture-provenance-reconciliation1-result.md
liaisonscape-initial-placement-seed-practical-candidate-family-experiment-design.md
liaisonscape-initial-placement-seed-practical-candidate-family-experiment1-result.md
liaisonscape-initial-placement-seed-practical-family-structural-assignment-sensitivity-followup1.md
liaisonscape-initial-placement-seed-practical-family-structural-quality-experiment-design.md
liaisonscape-initial-placement-seed-practical-family-structural-quality-experiment1-result.md
liaisonscape-initial-placement-seed-structural-assignment-objective-experiment-design.md
liaisonscape-initial-placement-seed-structural-assignment-objective-experiment-design2.md
liaisonscape-initial-placement-seed-structural-assignment-objective-experiment-design3.md
liaisonscape-initial-placement-seed-structural-assignment-objective-experiment-design4.md
liaisonscape-initial-placement-seed-structural-assignment-objective-experiment2-result.md
liaisonscape-initial-placement-seed-structural-assignment-objective-experiment3-result.md
liaisonscape-initial-placement-seed-structural-assignment-objective-experiment4-integrity-reconciliation1-result.md
liaisonscape-initial-placement-seed-structural-assignment-objective-experiment4-interpretation1-result.md
liaisonscape-initial-placement-seed-structural-assignment-objective-experiment4-rerun1-result.md
liaisonscape-initial-placement-seed-structural-assignment-objective-experiment4-result.md
liaisonscape-initial-placement-seed-structural-assignment-objective-research1.md
liaisonscape-initial-placement-seed-structural-assignment-partial-preference-design.md
liaisonscape-initial-placement-seed-structural-assignment-research-synthesis1-result.md
liaisonscape-initial-placement-seed-ta1-operational-witness-reconstruction1-result.md
liaisonscape-initial-placement-seed-ta1-quality-neutral-witness-design.md
liaisonscape-initial-placement-seed-ta2-motif-operational-witness-reconstruction1-result.md
liaisonscape-initial-placement-seed-ta2-motif-responsibility-encoding-reconciliation1-result.md
liaisonscape-initial-placement-seed-ta2-operational-witness-reconstruction1-result.md
liaisonscape-initial-placement-seed-ta2-policy-manifest-recovery1-result.md
liaisonscape-initial-placement-seed-ta2-policy-semantics-design.md
liaisonscape-initial-placement-seed-ta3-correspondence-manifest-recovery1-result.md
liaisonscape-initial-placement-seed-ta3-correspondence-operational-witness-reconstruction1-result.md
liaisonscape-initial-placement-seed-ta3-correspondence-semantics-design1.md
liaisonscape-initial-placement-seed-topology-aware-assignment-experiment-design.md
liaisonscape-initial-placement-seed-topology-aware-assignment-experiment1-result.md
liaisonscape-initial-placement-seed-topology-aware-assignment-manifest-reconstruction-design.md
```

### Seed production candidate / PR-2 readiness set (11)

```text
liaisonscape-initial-placement-seed-production-candidate-compatibility-audit1-result.md
liaisonscape-initial-placement-seed-production-candidate-compatibility-design1-result.md
liaisonscape-initial-placement-seed-production-candidate-compatibility-validation1-result.md
liaisonscape-initial-placement-seed-production-candidate-materialization-design1.md
liaisonscape-initial-placement-seed-production-candidate-materialization-implementation1-result.md
liaisonscape-initial-placement-seed-production-candidate-materialization-validation1-result.md
liaisonscape-initial-placement-seed-production-pr2-nonvisual-evidence-completion1-result.md
liaisonscape-initial-placement-seed-production-readiness-design1.md
liaisonscape-initial-placement-seed-production-readiness-evidence-audit1-result.md
liaisonscape-initial-placement-seed-production-visual-fixture-role-acquisition-design1-result.md
liaisonscape-initial-placement-seed-production-visual-fixture-role-acquisition1-result.md
```

### Seed production visual-settling / PR-3 browser-evidence set (75)

```text
liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-application-readiness-recurrence-diagnostic1.md
liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-browser-runtime-stability-qualification1.md
liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-cdp-launch-readiness-diagnostic1.md
liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-cdp-launch-readiness-diagnostic2.md
liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-cdp-launch-readiness-diagnostic3.md
liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-dotnet-exe-helper-runtime-qualification-diagnostic-correction1.md
liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-dotnet-exe-websocket-helper-implementation1.md
liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-dotnet-non-script-websocket-helper-authority-design-correction1.md
liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-dotnet-websocket-bridge-helper-execution-policy-compatibility-qualification1.md
liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-dotnet-websocket-bridge-implementation1.md
liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-edge-process-lifetime-host-runtime-diagnostic1.md
liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-edge-process-lifetime-recurrence-readiness-decision1.md
liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-helper-receive-lifetime-correction-prebuilt-exe-materialization-qualification1.md
liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-host-gpu-runtime-diagnostic1.md
liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-host-gpu-runtime-graphics-diagnostic2.md
liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-host-runtime-browser-capture-readiness-requalification1.md
liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-host-runtime-post-reboot-qualification1.md
liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-host-runtime-vscode-stable-exclusion-qualification1.md
liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-host-runtime-vscode-stable-present-absent-confirmation1.md
liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-restart1-b1-entry-readiness-diagnostic1.md
liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-restart1-b1-entry-seam-correction1.md
liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-restart1-b1-execution1.md
liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-restart1-protocol-a.md
liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-restart2-b1-execution1.md
liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-restart2-executor-run-root-binding-correction1.md
liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-restart2-protocol-a-v2-binding.md
liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-restart2-protocol-a.md
liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-restart3-app-readiness-cdp-call-correction-qualification1.md
liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-restart3-b1-execution1.md
liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-restart3-protocol-a.md
liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-restart3-shared-cdp-transport-client-correction-qualification1.md
liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-restart3-shared-cdp-websocket-independent-client-diagnostic1.md
liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-restart3-target-selection-runtime-correction-qualification1.md
liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-restart4-b1-execution1.md
liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-restart4-b1-local-websocket-connection-refusal-diagnostic-correction1.md
liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-restart4-protocol-a.md
liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-result.md
liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-runtime-convergence-diagnostic-correction1.md
liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-websocket-client-authority-replacement-design-correction1.md
liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-design1-result.md
liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-harness-design1-result.md
liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-harness-implementation1-result.md
liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-machine-execution1-browser-lineage-readiness-reconciliation1.md
liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-machine-execution1-result.md
liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-product-evaluation-seam-characterization-order-canonicalization-adoption1-result.md
liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-product-evaluation-seam-characterization-order-canonicalization-baseline2-result.md
liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-product-evaluation-seam-characterization-order-canonicalization-equivalence-reconciliation1-result.md
liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-product-evaluation-seam-characterization-order-canonicalization-implementation1-result.md
liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-product-evaluation-seam-characterization-order-conflict-resolution1-result.md
liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-product-evaluation-seam-design1-result.md
liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-product-evaluation-seam-implementation1a-result.md
liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-product-evaluation-seam-implementation1b-adoption1-result.md
liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-product-evaluation-seam-implementation1b-result.md
liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-product-evaluation-seam-implementation1c-adoption1-result.md
liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-product-evaluation-seam-implementation1c-result.md
liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-product-evaluation-seam-implementation1d-adoption1-result.md
liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-product-evaluation-seam-implementation1d-result.md
liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-product-evaluation-seam-implementation1e-adoption1-result.md
liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-product-evaluation-seam-implementation1e-result.md
liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-product-evaluation-seam-implementation1f-adoption1-result.md
liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-product-evaluation-seam-implementation1f-adoption1-retry1-result.md
liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-product-evaluation-seam-implementation1f-css-provenance-reconciliation1-result.md
liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-product-evaluation-seam-implementation1f-result.md
liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-product-evaluation-seam-implementation1g-adoption1-result.md
liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-product-evaluation-seam-implementation1g-result.md
liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-review-execution-authority1.md
liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-run-configuration-adoption1.md
liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-run-configuration-canonical-origin-evidence2-result.md
liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-run-configuration-design1-correction1.md
liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-run-configuration-design1.md
liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-run-configuration-evidence1-protocol-provenance-reconciliation1.md
liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-run-configuration-evidence1-result.md
liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-run-configuration-evidence2-source-hash-provenance-reconciliation1.md
liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-run-configuration-translation-covariance-design-reconciliation1.md
liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-run-identity-phase-bridge-design-correction1.md
```

The 21-file Explicit Auto Layout manifest above is a separately bounded app-owned group. Other LiaisonScape initial-placement, product verification/frontier, relation routing, parallel/self-loop, and presentation families are likewise LiaisonScape-owned where their primary evidence is Product behavior; shared parity/contract records are classified Cross-App instead. Their exact manifests should be prepared by responsibility, not inferred from every `liaisonscape-*` prefix.

## Root-level primary responsibility: retain at root

The following groups have positive E2R-wide or repository-wide responsibility, rather than being left at root because they are mixed or difficult to classify:

- **Current E2R-SPEC planning and documentation IA:** `roadmap.md`, `README.md`, `documentation-plan.md`, IA decisions/audits/preparations, and bounded migration results. They govern this repository’s planning, documentation navigation, or policy; they are not owned by one application. Roadmap remains sole current-planning authority.
- **E2R Core/Extension/History/Relative Time decisions and evidence:** root decision/proposal/adoption records concern the shared data model, Extension contract/maturity, or dataset-wide semantics. Normative authority remains in `spec/`, `extensions/`, and schema locations; references to those authorities do not make the records application-owned. No application landing zone is appropriate.
- **Canonical public samples and shared provenance/release:** `public-sample-*`, sample-specific semantic/rights/stewardship records, and Initial Public Release/provenance/release-readiness reconciliation have E2R-wide distribution and reuse responsibility across consumers. They are not “Cross-App” merely because multiple apps consume the sample, and no single application owns the release/provenance decision.
- **Shared test/distribution infrastructure:** `e2r-dom-test-environment-*`, test-utils retirement/distribution records, and E2R-wide package or publication decisions govern reusable infrastructure and its release/consumer lifecycle, not Validator runtime or one application. Consumer pilot evidence is app-specific and should be evaluated separately.
- **Top-level Research and Session authorities:** the Hub latency-hiding hypothesis is explicitly Research, not Hub implementation. Existing top-level `research/` and `sessions/` remain their homes; do not create `docs/research/` or use an app folder as a proxy.
- **Roadmap History:** chronology stays in existing broad `docs/roadmap-history/` units, never in application folders solely to mirror ownership.

These root classifications are about primary responsibility. They do not imply that every such record is normative or that every sample/release decision has the same authority.

## Cross-App / application distinctions worth preserving

- **Locale:** the two `cross-app-locale-startup-v0-*` design documents are Cross-App-owned shared contract/design (manifest F). The two recipient-preference experiment acceptance records are NarrativeLine-owned bounded experiments (manifest C). NarrativeLine’s Locale Consumer Acceptance already in `docs/narrativeline/` does not close Hub/LiaisonScape parity or the shared Locale workstream. The Knowledge reference makes this a cross-repository repair risk.
- **Relation deletion:** the four `cross-app-relation-deletion-*` documents are Cross-App capability/acceptance authorities (manifest E). `narrativeline-entity-deletion-resolution-acceptance.md` and `narrativeline-final-entity-deletion-cross-app-fix.md` are NarrativeLine implementation/acceptance evidence (manifest B). LiaisonScape relation-deletion presentation/acceptance records are LiaisonScape-owned. The packet boundary preserves the difference between shared capability closure and each application’s implementation/acceptance.
- **Shared shell/parity:** the six records in manifest G are Cross-App-owned; the two local dialog audits in H are LiaisonScape-owned. “Compares two apps” is not enough to make a local fix Cross-App-owned; the decision/responsibility recorded by the document controls.
- **Validator Presentation support:** the one support-fix result in D is Validator-owned implementation evidence despite its dependency on a Presentation Extension; it does not change normative schema authority.

## Wave packaging and Human decision

The manifests can be assembled into a larger Wave 3, but should remain separate path cohorts with separate validation/reference repair:

| Suggested package | Cohorts | Main path/reference risk |
| --- | --- | --- |
| **Wave 3A — app-owned bounded evidence** | A + B + D (10 docs; NarrativeLine 9 and Validator 1) | Low/medium; links from a few evidence records; re-scan siblings before any move. |
| **Wave 3B — shared Cross-App contract/parity** | E + F + G (12 docs) | Medium/high; dense Roadmap, History, Handoff, application, and AI-Knowledge links; F needs Knowledge path repair. Preserve non-closure of shared Locale. |
| **Wave 3C — LiaisonScape presentation / explicit operation** | H + I (23 docs) | High; Roadmap/History/worktree-baseline graph, one AI-Knowledge link, dirty LiaisonScape sibling. Preserve qualified/open/non-Stable boundaries. |
| **Later Initial Placement Seed waves** | Three separately decomposed groups above (47 / 11 / 75 records) | High; manifest and source/evidence graph not yet frozen; do not combine PR-2 and PR-3 status. |

Wave 3A is the lowest-risk first actual wave, though it spans two destinations and distinct authorities. Wave 3B and Wave 3C can be separately approved later; combining all waves is technically possible but offers no responsibility benefit and increases reference-repair risk. No move in this audit is authorized. A selection should explicitly approve each cohort and whether direct path repair in `ai-knowledge` is permitted; without that permission, cohorts with Knowledge inbound links remain HOLD for actual migration.

Wave 3C was subsequently approved and completed as a path-only migration; see the [Wave 3C result](documentation-ia-wave3c-liaisonscape-evidence-path-migration1-result.md). The manifest above remains the audit-time source inventory, not a current-path index.

## Worktree and validation record

- Current E2R-SPEC HEAD at audit: `8af69e1603dea894c574ff76aff1bdad95a66671`; pre-existing untracked `work/` was not opened, changed, staged, or included.
- Sibling repositories were read-only. NarrativeLine and LiaisonScape are dirty; Hub and Validator were clean at inspection. `ai-knowledge` is dirty in `playbooks/e2r-edge-cdp-browser-diagnostic.md`; that work was not changed. No dirty sibling evidence was promoted to status authority.
- No file moved, renamed, deleted, merged, or status-reconciled. No claim is made that external deep links do not exist.
- `npm run validate`, local Markdown link checks for this audit/navigation changes, and `git diff --check` are to be run before commit.
