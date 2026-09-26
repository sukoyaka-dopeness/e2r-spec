# Owner-First Residual Root Migration Wave 4 Preparation 1

- Date: 2026-09-26
- Basis: current E2R workspace tree and Git state at E2R-SPEC `aed6fe8fe399b4625f84d44a305e352e2d93eba5`
- Status: **PREPARATION COMPLETE; its approved 349-document manifest was executed by the [Wave 4 migration result](documentation-ia-owner-first-residual-wave4-path-migration1-result.md)**
- Scope: post-Wave-3 and post-Seed-133 residual `docs/` root classification, exact candidate manifests, and reference-repair readiness
- Related records: [Documentation Hub](../README.md), [Documentation Plan](documentation-plan.md), [Primary-Responsibility Residual Classification Audit 1](documentation-ia-primary-responsibility-residual-classification-audit1.md), [NarrativeLine Locale experiment migration result](documentation-ia-narrativeline-locale-experiment-path-migration1-result.md)

The source paths in this preparation's manifest are intentionally retained as
the audit-time inventory. For execution, reference repair, and validation
outcomes, see the linked migration result.

## Finding

The current `docs/` root has 505 Markdown files. The two approved NarrativeLine-only Locale experiment records were moved in the preceding bounded checkpoint; their result is linked above. This audit makes **no additional file move, rename, merge, deletion, or status change**.

The owner-first review yields a decision-ready, proposed Wave 4 manifest of **349 root documents** across four already-approved destinations:

| Packet | Destination | Exact documents | Primary responsibility |
|---|---|---:|---|
| W4A | `docs/liaisonscape/` | 324 | LiaisonScape product, placement, routing, presentation, and application-evaluation evidence |
| W4B | `docs/narrativeline/` | 23 | NarrativeLine implementation, acceptance, diagnostics, and release-surface records |
| W4C | `docs/validator/` | 1 | Validator-owned Presentation documentation-parity implementation result |
| W4D | `docs/cross-app/` | 1 | The E2R application-to-application Dataset Handoff v0 design contract |

These are separate authority lanes and exact path packets. A Human may approve them as one maintenance wave, but the destination folders remain physical navigation only. The mapping below is complete at this audit snapshot; at execution, re-scan current paths and references before moving anything.

## W4A — LiaisonScape application records → `docs/liaisonscape/` (324)

The 300 `liaisonscape-*.md` records below are classified by their recorded LiaisonScape behavior, implementation, Product evaluation, or application-specific release/evidence responsibility—not merely by filename. The 24 `automatic-layout-*.md` records below describe LiaisonScape application placement/presentation experiments and ownership checkpoints; they do not define Core, Coordinate, Layout, schema, or Extension semantics. The repository-wide persistence/authority decisions remain outside this packet.

Preserve every record's own status and scope. In particular, moving these files must not turn candidate research into adoption; bounded integration, Human acceptance, and release readiness remain distinct; unresolved browser/runtime or visual-quality questions remain unresolved; and application decisions do not become E2R-wide presentation contracts.

### W4A.1 — LiaisonScape-prefixed records (300)

- `docs/liaisonscape-0.2.0-release-preparation-result.md` → `docs/liaisonscape/liaisonscape-0.2.0-release-preparation-result.md`
- `docs/liaisonscape-accepted-dirty-worktree-baseline-audit-canonical-commit1-result.md` → `docs/liaisonscape/liaisonscape-accepted-dirty-worktree-baseline-audit-canonical-commit1-result.md`
- `docs/liaisonscape-accepted-dirty-worktree-ownership-resolution-canonical-baseline-commit2-result.md` → `docs/liaisonscape/liaisonscape-accepted-dirty-worktree-ownership-resolution-canonical-baseline-commit2-result.md`
- `docs/liaisonscape-actual-product-surface-inspection-precedence-result.md` → `docs/liaisonscape/liaisonscape-actual-product-surface-inspection-precedence-result.md`
- `docs/liaisonscape-adaptive-initial-placement-cascade-and-endpoint-plan-safety-result.md` → `docs/liaisonscape/liaisonscape-adaptive-initial-placement-cascade-and-endpoint-plan-safety-result.md`
- `docs/liaisonscape-apollo-route-curvature-inspection-result.md` → `docs/liaisonscape/liaisonscape-apollo-route-curvature-inspection-result.md`
- `docs/liaisonscape-application-version-decision.md` → `docs/liaisonscape/liaisonscape-application-version-decision.md`
- `docs/liaisonscape-app-modularization-phase0-responsibility-map.md` → `docs/liaisonscape/liaisonscape-app-modularization-phase0-responsibility-map.md`
- `docs/liaisonscape-armstrong-eagle-final-safety-replay.md` → `docs/liaisonscape/liaisonscape-armstrong-eagle-final-safety-replay.md`
- `docs/liaisonscape-armstrong-eagle-pointer-up-session-correlation-diagnosis.md` → `docs/liaisonscape/liaisonscape-armstrong-eagle-pointer-up-session-correlation-diagnosis.md`
- `docs/liaisonscape-auto-layout-quality-freeze-and-worktree-baseline-audit1-result.md` → `docs/liaisonscape/liaisonscape-auto-layout-quality-freeze-and-worktree-baseline-audit1-result.md`
- `docs/liaisonscape-automatic-display-placement-final-bakeoff1-result.md` → `docs/liaisonscape/liaisonscape-automatic-display-placement-final-bakeoff1-result.md`
- `docs/liaisonscape-automatic-initial-entity-placement-result.md` → `docs/liaisonscape/liaisonscape-automatic-initial-entity-placement-result.md`
- `docs/liaisonscape-automatic-placement-serialization-impact-result.md` → `docs/liaisonscape/liaisonscape-automatic-placement-serialization-impact-result.md`
- `docs/liaisonscape-automatic-route-endpoint-label-corridor-relaxation-experiment.md` → `docs/liaisonscape/liaisonscape-automatic-route-endpoint-label-corridor-relaxation-experiment.md`
- `docs/liaisonscape-automatic-route-final-label-cascade-cause-isolation.md` → `docs/liaisonscape/liaisonscape-automatic-route-final-label-cascade-cause-isolation.md`
- `docs/liaisonscape-automatic-route-final-label-feedback-hard-corridor-relief-audit.md` → `docs/liaisonscape/liaisonscape-automatic-route-final-label-feedback-hard-corridor-relief-audit.md`
- `docs/liaisonscape-automatic-route-final-label-feedback-initial-placement-interaction-audit.md` → `docs/liaisonscape/liaisonscape-automatic-route-final-label-feedback-initial-placement-interaction-audit.md`
- `docs/liaisonscape-automatic-route-final-label-feedback-stability-experiment.md` → `docs/liaisonscape/liaisonscape-automatic-route-final-label-feedback-stability-experiment.md`
- `docs/liaisonscape-automatic-route-final-label-finite-revalidation-experiment.md` → `docs/liaisonscape/liaisonscape-automatic-route-final-label-finite-revalidation-experiment.md`
- `docs/liaisonscape-automatic-route-final-label-hard-boundary-semantics-experiment.md` → `docs/liaisonscape/liaisonscape-automatic-route-final-label-hard-boundary-semantics-experiment.md`
- `docs/liaisonscape-automatic-route-final-label-score-trace-reproduction.md` → `docs/liaisonscape/liaisonscape-automatic-route-final-label-score-trace-reproduction.md`
- `docs/liaisonscape-automatic-route-hard-label-corridor-boundary-audit.md` → `docs/liaisonscape/liaisonscape-automatic-route-hard-label-corridor-boundary-audit.md`
- `docs/liaisonscape-automatic-route-historical-replay-audit.md` → `docs/liaisonscape/liaisonscape-automatic-route-historical-replay-audit.md`
- `docs/liaisonscape-automatic-route-historical-safety-delta-isolation.md` → `docs/liaisonscape/liaisonscape-automatic-route-historical-safety-delta-isolation.md`
- `docs/liaisonscape-automatic-route-label-halo-continuity-semantics-experiment.md` → `docs/liaisonscape/liaisonscape-automatic-route-label-halo-continuity-semantics-experiment.md`
- `docs/liaisonscape-automatic-route-label-halo-minimum-clearance-boundary-audit.md` → `docs/liaisonscape/liaisonscape-automatic-route-label-halo-minimum-clearance-boundary-audit.md`
- `docs/liaisonscape-automatic-route-label-pressure-temporal-semantics-experiment.md` → `docs/liaisonscape/liaisonscape-automatic-route-label-pressure-temporal-semantics-experiment.md`
- `docs/liaisonscape-automatic-route-multi-label-corridor-isolation.md` → `docs/liaisonscape/liaisonscape-automatic-route-multi-label-corridor-isolation.md`
- `docs/liaisonscape-automatic-route-near-center-label-pressure-continuity-experiment.md` → `docs/liaisonscape/liaisonscape-automatic-route-near-center-label-pressure-continuity-experiment.md`
- `docs/liaisonscape-automatic-route-near-center-winner-discontinuity-experiment.md` → `docs/liaisonscape/liaisonscape-automatic-route-near-center-winner-discontinuity-experiment.md`
- `docs/liaisonscape-automatic-route-s0-s1-focal-coordinate-attribution-experiment.md` → `docs/liaisonscape/liaisonscape-automatic-route-s0-s1-focal-coordinate-attribution-experiment.md`
- `docs/liaisonscape-automatic-route-short-edge-normalized-curvature-audit.md` → `docs/liaisonscape/liaisonscape-automatic-route-short-edge-normalized-curvature-audit.md`
- `docs/liaisonscape-automatic-route-three-label-corridor-feasibility-audit.md` → `docs/liaisonscape/liaisonscape-automatic-route-three-label-corridor-feasibility-audit.md`
- `docs/liaisonscape-automatic-self-loop-node-avoidance-result.md` → `docs/liaisonscape/liaisonscape-automatic-self-loop-node-avoidance-result.md`
- `docs/liaisonscape-boundary-equivalence-class-product-completion1-result.md` → `docs/liaisonscape/liaisonscape-boundary-equivalence-class-product-completion1-result.md`
- `docs/liaisonscape-bounded-label-capacity-screen-ownership-refinement1-result.md` → `docs/liaisonscape/liaisonscape-bounded-label-capacity-screen-ownership-refinement1-result.md`
- `docs/liaisonscape-bounded-multi-stage-product-probe1-result.md` → `docs/liaisonscape/liaisonscape-bounded-multi-stage-product-probe1-result.md`
- `docs/liaisonscape-bounded-quality-solver-benchmark1-result.md` → `docs/liaisonscape/liaisonscape-bounded-quality-solver-benchmark1-result.md`
- `docs/liaisonscape-bounded-screening-finalist-recall1-result.md` → `docs/liaisonscape/liaisonscape-bounded-screening-finalist-recall1-result.md`
- `docs/liaisonscape-branch-preserving-seed-topology-guard-experiment.md` → `docs/liaisonscape/liaisonscape-branch-preserving-seed-topology-guard-experiment.md`
- `docs/liaisonscape-browser-capture-current-host-runtime-blocker-synchronization.md` → `docs/liaisonscape/liaisonscape-browser-capture-current-host-runtime-blocker-synchronization.md`
- `docs/liaisonscape-browser-capture-pr3-run-identity-browser-implementation-authority-design-correction1.md` → `docs/liaisonscape/liaisonscape-browser-capture-pr3-run-identity-browser-implementation-authority-design-correction1.md`
- `docs/liaisonscape-browser-capture-pr3-run-identity-browser-implementation-authority-implementation1.md` → `docs/liaisonscape/liaisonscape-browser-capture-pr3-run-identity-browser-implementation-authority-implementation1.md`
- `docs/liaisonscape-canonical-routing-priority-result.md` → `docs/liaisonscape/liaisonscape-canonical-routing-priority-result.md`
- `docs/liaisonscape-capability-handoff-public-recipient-deployment.md` → `docs/liaisonscape/liaisonscape-capability-handoff-public-recipient-deployment.md`
- `docs/liaisonscape-common-fixture-cross-lineage-comparison1-result.md` → `docs/liaisonscape/liaisonscape-common-fixture-cross-lineage-comparison1-result.md`
- `docs/liaisonscape-connection-handle-visibility-result.md` → `docs/liaisonscape/liaisonscape-connection-handle-visibility-result.md`
- `docs/liaisonscape-coordinate-less-placement-comparison-audit.md` → `docs/liaisonscape/liaisonscape-coordinate-less-placement-comparison-audit.md`
- `docs/liaisonscape-cross-family-product-authoritative-auto-layout-portfolio-selector1-result.md` → `docs/liaisonscape/liaisonscape-cross-family-product-authoritative-auto-layout-portfolio-selector1-result.md`
- `docs/liaisonscape-dataset-metadata-alignment-audit.md` → `docs/liaisonscape/liaisonscape-dataset-metadata-alignment-audit.md`
- `docs/liaisonscape-degree-centered-outward-placement-experiment.md` → `docs/liaisonscape/liaisonscape-degree-centered-outward-placement-experiment.md`
- `docs/liaisonscape-density-adaptive-node-separation-experiment1-result.md` → `docs/liaisonscape/liaisonscape-density-adaptive-node-separation-experiment1-result.md`
- `docs/liaisonscape-detail-deletion-modularization-readiness.md` → `docs/liaisonscape/liaisonscape-detail-deletion-modularization-readiness.md`
- `docs/liaisonscape-diagnostic-preview-fixture-integrity-parallel-one-sided-product-quality-audit1-result.md` → `docs/liaisonscape/liaisonscape-diagnostic-preview-fixture-integrity-parallel-one-sided-product-quality-audit1-result.md`
- `docs/liaisonscape-direct-unselected-relation-drag-result.md` → `docs/liaisonscape/liaisonscape-direct-unselected-relation-drag-result.md`
- `docs/liaisonscape-discrete-feasibility-first-placement1-result.md` → `docs/liaisonscape/liaisonscape-discrete-feasibility-first-placement1-result.md`
- `docs/liaisonscape-endpoint-plan-candidate-compression-capacity-safety-experiment-result.md` → `docs/liaisonscape/liaisonscape-endpoint-plan-candidate-compression-capacity-safety-experiment-result.md`
- `docs/liaisonscape-endpoint-plan-multi-bundle-incident-allocation-experiment-result.md` → `docs/liaisonscape/liaisonscape-endpoint-plan-multi-bundle-incident-allocation-experiment-result.md`
- `docs/liaisonscape-endpoint-sector-port-allocation-architecture-experiment2-result.md` → `docs/liaisonscape/liaisonscape-endpoint-sector-port-allocation-architecture-experiment2-result.md`
- `docs/liaisonscape-end-to-end-performance-baseline.md` → `docs/liaisonscape/liaisonscape-end-to-end-performance-baseline.md`
- `docs/liaisonscape-explicit-high-quality-auto-layout-browser-execution-budget-study1-result.md` → `docs/liaisonscape/liaisonscape-explicit-high-quality-auto-layout-browser-execution-budget-study1-result.md`
- `docs/liaisonscape-explicit-high-quality-auto-layout-operation-lifecycle1-result.md` → `docs/liaisonscape/liaisonscape-explicit-high-quality-auto-layout-operation-lifecycle1-result.md`
- `docs/liaisonscape-explicit-high-quality-auto-layout-operation-lifecycle-contract-closure1-result.md` → `docs/liaisonscape/liaisonscape-explicit-high-quality-auto-layout-operation-lifecycle-contract-closure1-result.md`
- `docs/liaisonscape-explicit-label-capacity-candidate-formulation-probe1-result.md` → `docs/liaisonscape/liaisonscape-explicit-label-capacity-candidate-formulation-probe1-result.md`
- `docs/liaisonscape-external-seed-injection-and-multi-hop-counterfactual.md` → `docs/liaisonscape/liaisonscape-external-seed-injection-and-multi-hop-counterfactual.md`
- `docs/liaisonscape-final-release-readiness-audit1-result.md` → `docs/liaisonscape/liaisonscape-final-release-readiness-audit1-result.md`
- `docs/liaisonscape-foreign-node-clearance-audit.md` → `docs/liaisonscape/liaisonscape-foreign-node-clearance-audit.md`
- `docs/liaisonscape-fresh12-accumulated-layout-routing-reassessment-result.md` → `docs/liaisonscape/liaisonscape-fresh12-accumulated-layout-routing-reassessment-result.md`
- `docs/liaisonscape-fresh12-candidate-generation-experiment1-result.md` → `docs/liaisonscape/liaisonscape-fresh12-candidate-generation-experiment1-result.md`
- `docs/liaisonscape-fresh12-initial-layout-quality-diagnostic.md` → `docs/liaisonscape/liaisonscape-fresh12-initial-layout-quality-diagnostic.md`
- `docs/liaisonscape-frontier-12-bounded-solver-extraction-standalone-characterization1-result.md` → `docs/liaisonscape/liaisonscape-frontier-12-bounded-solver-extraction-standalone-characterization1-result.md`
- `docs/liaisonscape-frontier-12-candidate-product-selection-authority-decision1-result.md` → `docs/liaisonscape/liaisonscape-frontier-12-candidate-product-selection-authority-decision1-result.md`
- `docs/liaisonscape-frontier-12-candidate-set-extraction-product-selector-parity-standalone-characterization1-result.md` → `docs/liaisonscape/liaisonscape-frontier-12-candidate-set-extraction-product-selector-parity-standalone-characterization1-result.md`
- `docs/liaisonscape-frontier-12-lineage-recovery-reproduction1-result.md` → `docs/liaisonscape/liaisonscape-frontier-12-lineage-recovery-reproduction1-result.md`
- `docs/liaisonscape-frontier-12-single-implementation-structural-refactor-candidate-boundary1-result.md` → `docs/liaisonscape/liaisonscape-frontier-12-single-implementation-structural-refactor-candidate-boundary1-result.md`
- `docs/liaisonscape-frontier-actual-product-visual-sweep1-result.md` → `docs/liaisonscape/liaisonscape-frontier-actual-product-visual-sweep1-result.md`
- `docs/liaisonscape-frontier-automatic-display-app-async-adapter-lifecycle-staging1-result.md` → `docs/liaisonscape/liaisonscape-frontier-automatic-display-app-async-adapter-lifecycle-staging1-result.md`
- `docs/liaisonscape-frontier-automatic-display-formal-visual-review1-result.md` → `docs/liaisonscape/liaisonscape-frontier-automatic-display-formal-visual-review1-result.md`
- `docs/liaisonscape-frontier-automatic-display-integration-candidate-staging1-result.md` → `docs/liaisonscape/liaisonscape-frontier-automatic-display-integration-candidate-staging1-result.md`
- `docs/liaisonscape-frontier-automatic-display-pending-cancel-production-ux-acceptance1-result.md` → `docs/liaisonscape/liaisonscape-frontier-automatic-display-pending-cancel-production-ux-acceptance1-result.md`
- `docs/liaisonscape-frontier-automatic-display-pending-ux-production-integration-lifecycle-acceptance1-result.md` → `docs/liaisonscape/liaisonscape-frontier-automatic-display-pending-ux-production-integration-lifecycle-acceptance1-result.md`
- `docs/liaisonscape-frontier-automatic-display-production-acceptance-closure1-result.md` → `docs/liaisonscape/liaisonscape-frontier-automatic-display-production-acceptance-closure1-result.md`
- `docs/liaisonscape-frontier-automatic-display-production-adoption-implementation1-result.md` → `docs/liaisonscape/liaisonscape-frontier-automatic-display-production-adoption-implementation1-result.md`
- `docs/liaisonscape-frontier-automatic-display-production-adoption-provenance-freeze-commit-boundary1-result.md` → `docs/liaisonscape/liaisonscape-frontier-automatic-display-production-adoption-provenance-freeze-commit-boundary1-result.md`
- `docs/liaisonscape-frontier-automatic-display-production-adoption-readiness1-result.md` → `docs/liaisonscape/liaisonscape-frontier-automatic-display-production-adoption-readiness1-result.md`
- `docs/liaisonscape-frontier-automatic-display-production-execution-transient-preview-architecture-audit1-result.md` → `docs/liaisonscape/liaisonscape-frontier-automatic-display-production-execution-transient-preview-architecture-audit1-result.md`
- `docs/liaisonscape-frontier-automatic-display-user-abort-cancellation-feasibility-audit1-result.md` → `docs/liaisonscape/liaisonscape-frontier-automatic-display-user-abort-cancellation-feasibility-audit1-result.md`
- `docs/liaisonscape-frontier-g3-post-current-source-comparison1-handoff.md` → `docs/liaisonscape/liaisonscape-frontier-g3-post-current-source-comparison1-handoff.md`
- `docs/liaisonscape-frontier-product-execution-architecture-lifecycle-decision1-result.md` → `docs/liaisonscape/liaisonscape-frontier-product-execution-architecture-lifecycle-decision1-result.md`
- `docs/liaisonscape-frontier-production-solver-extraction-readiness1-result.md` → `docs/liaisonscape/liaisonscape-frontier-production-solver-extraction-readiness1-result.md`
- `docs/liaisonscape-frontier-product-worker-execution-proof1-result.md` → `docs/liaisonscape/liaisonscape-frontier-product-worker-execution-proof1-result.md`
- `docs/liaisonscape-frontier-user-visual-comparison-handoff1.md` → `docs/liaisonscape/liaisonscape-frontier-user-visual-comparison-handoff1.md`
- `docs/liaisonscape-general-complex-dataset-practicality-gate1-result.md` → `docs/liaisonscape/liaisonscape-general-complex-dataset-practicality-gate1-result.md`
- `docs/liaisonscape-general-complex-dataset-practicality-gate2-hq-candidate-reconnection-result.md` → `docs/liaisonscape/liaisonscape-general-complex-dataset-practicality-gate2-hq-candidate-reconnection-result.md`
- `docs/liaisonscape-general-complex-dataset-practicality-gate3-bounded-hq-readability-execution-result.md` → `docs/liaisonscape/liaisonscape-general-complex-dataset-practicality-gate3-bounded-hq-readability-execution-result.md`
- `docs/liaisonscape-general-complex-dataset-practicality-reassessment1-result.md` → `docs/liaisonscape/liaisonscape-general-complex-dataset-practicality-reassessment1-result.md`
- `docs/liaisonscape-general-crossing-aware-placement1-result.md` → `docs/liaisonscape/liaisonscape-general-crossing-aware-placement1-result.md`
- `docs/liaisonscape-historical-best-candidate-recomparison1-result.md` → `docs/liaisonscape/liaisonscape-historical-best-candidate-recomparison1-result.md`
- `docs/liaisonscape-hq-metric-candidate-formulation-visual-failure-audit1-result.md` → `docs/liaisonscape/liaisonscape-hq-metric-candidate-formulation-visual-failure-audit1-result.md`
- `docs/liaisonscape-independent-risk-gate-probe-target-stability1-result.md` → `docs/liaisonscape/liaisonscape-independent-risk-gate-probe-target-stability1-result.md`
- `docs/liaisonscape-infinite-canvas-local-density-extent-growth-rebaseline1-result.md` → `docs/liaisonscape/liaisonscape-infinite-canvas-local-density-extent-growth-rebaseline1-result.md`
- `docs/liaisonscape-initial-automatic-display-integer-canonicalization1-result.md` → `docs/liaisonscape/liaisonscape-initial-automatic-display-integer-canonicalization1-result.md`
- `docs/liaisonscape-initial-automatic-display-integer-canonicalization-human-check1-result.md` → `docs/liaisonscape/liaisonscape-initial-automatic-display-integer-canonicalization-human-check1-result.md`
- `docs/liaisonscape-initial-automatic-display-integer-canonicalization-human-check-pass-closure1-result.md` → `docs/liaisonscape/liaisonscape-initial-automatic-display-integer-canonicalization-human-check-pass-closure1-result.md`
- `docs/liaisonscape-initial-geometry-node-label-diagnosis.md` → `docs/liaisonscape/liaisonscape-initial-geometry-node-label-diagnosis.md`
- `docs/liaisonscape-initial-layout-acceptance-fixture-access1-result.md` → `docs/liaisonscape/liaisonscape-initial-layout-acceptance-fixture-access1-result.md`
- `docs/liaisonscape-initial-layout-actual-product-human-acceptance1-result.md` → `docs/liaisonscape/liaisonscape-initial-layout-actual-product-human-acceptance1-result.md`
- `docs/liaisonscape-initial-layout-actual-product-opt-in-acceptance1-result.md` → `docs/liaisonscape/liaisonscape-initial-layout-actual-product-opt-in-acceptance1-result.md`
- `docs/liaisonscape-initial-layout-authoritative-presentation-cost-audit1-result.md` → `docs/liaisonscape/liaisonscape-initial-layout-authoritative-presentation-cost-audit1-result.md`
- `docs/liaisonscape-initial-layout-bounded-coarse-provider1-result.md` → `docs/liaisonscape/liaisonscape-initial-layout-bounded-coarse-provider1-result.md`
- `docs/liaisonscape-initial-layout-bounded-provider-contract-audit1-result.md` → `docs/liaisonscape/liaisonscape-initial-layout-bounded-provider-contract-audit1-result.md`
- `docs/liaisonscape-initial-layout-candidate-actual-product-acceptance1-result.md` → `docs/liaisonscape/liaisonscape-initial-layout-candidate-actual-product-acceptance1-result.md`
- `docs/liaisonscape-initial-layout-candidate-cross-fixture-acceptance2-result.md` → `docs/liaisonscape/liaisonscape-initial-layout-candidate-cross-fixture-acceptance2-result.md`
- `docs/liaisonscape-initial-layout-candidate-equivalence-budget1-result.md` → `docs/liaisonscape/liaisonscape-initial-layout-candidate-equivalence-budget1-result.md`
- `docs/liaisonscape-initial-layout-candidate-provenance-audit.md` → `docs/liaisonscape/liaisonscape-initial-layout-candidate-provenance-audit.md`
- `docs/liaisonscape-initial-layout-coarse-objective-actual-product-comparison2-result.md` → `docs/liaisonscape/liaisonscape-initial-layout-coarse-objective-actual-product-comparison2-result.md`
- `docs/liaisonscape-initial-layout-coarse-objective-comparative-evaluation1-result.md` → `docs/liaisonscape/liaisonscape-initial-layout-coarse-objective-comparative-evaluation1-result.md`
- `docs/liaisonscape-initial-layout-coarse-objective-design1-result.md` → `docs/liaisonscape/liaisonscape-initial-layout-coarse-objective-design1-result.md`
- `docs/liaisonscape-initial-layout-coarse-objective-proxy-audit1-result.md` → `docs/liaisonscape/liaisonscape-initial-layout-coarse-objective-proxy-audit1-result.md`
- `docs/liaisonscape-initial-layout-coarse-objective-self-loop-boundary-audit1-result.md` → `docs/liaisonscape/liaisonscape-initial-layout-coarse-objective-self-loop-boundary-audit1-result.md`
- `docs/liaisonscape-initial-layout-execution-architecture-decision1-result.md` → `docs/liaisonscape/liaisonscape-initial-layout-execution-architecture-decision1-result.md`
- `docs/liaisonscape-initial-layout-final-coordinate-canonicalization1-result.md` → `docs/liaisonscape/liaisonscape-initial-layout-final-coordinate-canonicalization1-result.md`
- `docs/liaisonscape-initial-layout-final-coordinate-canonicalization2-result.md` → `docs/liaisonscape/liaisonscape-initial-layout-final-coordinate-canonicalization2-result.md`
- `docs/liaisonscape-initial-layout-final-coordinate-human-acceptance1-result.md` → `docs/liaisonscape/liaisonscape-initial-layout-final-coordinate-human-acceptance1-result.md`
- `docs/liaisonscape-initial-layout-frontier-adaptive-dense-cost-reduction2-result.md` → `docs/liaisonscape/liaisonscape-initial-layout-frontier-adaptive-dense-cost-reduction2-result.md`
- `docs/liaisonscape-initial-layout-global-placement3-frontier12-dense-topology-retune1-result.md` → `docs/liaisonscape/liaisonscape-initial-layout-global-placement3-frontier12-dense-topology-retune1-result.md`
- `docs/liaisonscape-initial-layout-global-placement3-frontier12-human-review-handoff.md` → `docs/liaisonscape/liaisonscape-initial-layout-global-placement3-frontier12-human-review-handoff.md`
- `docs/liaisonscape-initial-layout-global-placement3-frontier12-human-review-result.md` → `docs/liaisonscape/liaisonscape-initial-layout-global-placement3-frontier12-human-review-result.md`
- `docs/liaisonscape-initial-layout-global-placement3-frontier12-human-review-user-evidence-result.md` → `docs/liaisonscape/liaisonscape-initial-layout-global-placement3-frontier12-human-review-user-evidence-result.md`
- `docs/liaisonscape-initial-layout-global-placement3-human-review-handoff.md` → `docs/liaisonscape/liaisonscape-initial-layout-global-placement3-human-review-handoff.md`
- `docs/liaisonscape-initial-layout-global-placement3-human-review-result.md` → `docs/liaisonscape/liaisonscape-initial-layout-global-placement3-human-review-result.md`
- `docs/liaisonscape-initial-layout-global-placement3-product-default-adoption-decision1-result.md` → `docs/liaisonscape/liaisonscape-initial-layout-global-placement3-product-default-adoption-decision1-result.md`
- `docs/liaisonscape-initial-layout-global-placement3-product-integration1-result.md` → `docs/liaisonscape/liaisonscape-initial-layout-global-placement3-product-integration1-result.md`
- `docs/liaisonscape-initial-layout-global-placement3-production-execution1-result.md` → `docs/liaisonscape/liaisonscape-initial-layout-global-placement3-production-execution1-result.md`
- `docs/liaisonscape-initial-layout-global-placement3-production-native-frontier-reduction1-result.md` → `docs/liaisonscape/liaisonscape-initial-layout-global-placement3-production-native-frontier-reduction1-result.md`
- `docs/liaisonscape-initial-layout-global-placement3-production-simplification-ablation1-result.md` → `docs/liaisonscape/liaisonscape-initial-layout-global-placement3-production-simplification-ablation1-result.md`
- `docs/liaisonscape-initial-layout-global-placement3-result.md` → `docs/liaisonscape/liaisonscape-initial-layout-global-placement3-result.md`
- `docs/liaisonscape-initial-layout-global-placement3-user-human-acceptance-result.md` → `docs/liaisonscape/liaisonscape-initial-layout-global-placement3-user-human-acceptance-result.md`
- `docs/liaisonscape-initial-layout-global-spacing-zoomed-out-placement1-result.md` → `docs/liaisonscape/liaisonscape-initial-layout-global-spacing-zoomed-out-placement1-result.md`
- `docs/liaisonscape-initial-layout-global-spacing-zoomed-out-placement2-result.md` → `docs/liaisonscape/liaisonscape-initial-layout-global-spacing-zoomed-out-placement2-result.md`
- `docs/liaisonscape-initial-layout-obstacle-sensitive-crossing-decomposition-audit1-result.md` → `docs/liaisonscape/liaisonscape-initial-layout-obstacle-sensitive-crossing-decomposition-audit1-result.md`
- `docs/liaisonscape-initial-layout-post-accelerated-visual-acceptance1-result.md` → `docs/liaisonscape/liaisonscape-initial-layout-post-accelerated-visual-acceptance1-result.md`
- `docs/liaisonscape-initial-layout-post-authoritative-evaluation-cost1-result.md` → `docs/liaisonscape/liaisonscape-initial-layout-post-authoritative-evaluation-cost1-result.md`
- `docs/liaisonscape-initial-layout-post-authoritative-evaluation-cost2-result.md` → `docs/liaisonscape/liaisonscape-initial-layout-post-authoritative-evaluation-cost2-result.md`
- `docs/liaisonscape-initial-layout-post-authoritative-evaluation-cost3-result.md` → `docs/liaisonscape/liaisonscape-initial-layout-post-authoritative-evaluation-cost3-result.md`
- `docs/liaisonscape-initial-layout-post-candidate-prioritization1-result.md` → `docs/liaisonscape/liaisonscape-initial-layout-post-candidate-prioritization1-result.md`
- `docs/liaisonscape-initial-layout-post-coarse-gap-attribution1-result.md` → `docs/liaisonscape/liaisonscape-initial-layout-post-coarse-gap-attribution1-result.md`
- `docs/liaisonscape-initial-layout-post-coarse-gap-attribution2-result.md` → `docs/liaisonscape/liaisonscape-initial-layout-post-coarse-gap-attribution2-result.md`
- `docs/liaisonscape-initial-layout-post-ecr3-release-runtime-feasibility1-result.md` → `docs/liaisonscape/liaisonscape-initial-layout-post-ecr3-release-runtime-feasibility1-result.md`
- `docs/liaisonscape-initial-layout-post-evaluation-count-reduction1-result.md` → `docs/liaisonscape/liaisonscape-initial-layout-post-evaluation-count-reduction1-result.md`
- `docs/liaisonscape-initial-layout-post-evaluation-count-reduction2-result.md` → `docs/liaisonscape/liaisonscape-initial-layout-post-evaluation-count-reduction2-result.md`
- `docs/liaisonscape-initial-layout-post-evaluation-count-reduction3-actual-product-human-acceptance1-result.md` → `docs/liaisonscape/liaisonscape-initial-layout-post-evaluation-count-reduction3-actual-product-human-acceptance1-result.md`
- `docs/liaisonscape-initial-layout-post-evaluation-count-reduction3-result.md` → `docs/liaisonscape/liaisonscape-initial-layout-post-evaluation-count-reduction3-result.md`
- `docs/liaisonscape-initial-layout-post-locality-presentation-approximation1-result.md` → `docs/liaisonscape/liaisonscape-initial-layout-post-locality-presentation-approximation1-result.md`
- `docs/liaisonscape-initial-layout-post-objective-runtime-feasibility1-result.md` → `docs/liaisonscape/liaisonscape-initial-layout-post-objective-runtime-feasibility1-result.md`
- `docs/liaisonscape-initial-layout-post-omit-fine-visual-acceptance1-result.md` → `docs/liaisonscape/liaisonscape-initial-layout-post-omit-fine-visual-acceptance1-result.md`
- `docs/liaisonscape-initial-layout-post-performance-acceleration1-result.md` → `docs/liaisonscape/liaisonscape-initial-layout-post-performance-acceleration1-result.md`
- `docs/liaisonscape-initial-layout-post-stage2-architecture-redesign1-result.md` → `docs/liaisonscape/liaisonscape-initial-layout-post-stage2-architecture-redesign1-result.md`
- `docs/liaisonscape-initial-layout-post-stage2-architecture-redesign2-result.md` → `docs/liaisonscape/liaisonscape-initial-layout-post-stage2-architecture-redesign2-result.md`
- `docs/liaisonscape-initial-layout-post-stage2-authoritative-evaluation-reduction2-result.md` → `docs/liaisonscape/liaisonscape-initial-layout-post-stage2-authoritative-evaluation-reduction2-result.md`
- `docs/liaisonscape-initial-layout-post-stage2-authoritative-evaluation-reduction3-result.md` → `docs/liaisonscape/liaisonscape-initial-layout-post-stage2-authoritative-evaluation-reduction3-result.md`
- `docs/liaisonscape-initial-layout-post-stage2-authoritative-evaluation-reduction4-result.md` → `docs/liaisonscape/liaisonscape-initial-layout-post-stage2-authoritative-evaluation-reduction4-result.md`
- `docs/liaisonscape-initial-layout-post-stage2-volume-reduction1-result.md` → `docs/liaisonscape/liaisonscape-initial-layout-post-stage2-volume-reduction1-result.md`
- `docs/liaisonscape-initial-layout-presentation-attribution-titanic1-result.md` → `docs/liaisonscape/liaisonscape-initial-layout-presentation-attribution-titanic1-result.md`
- `docs/liaisonscape-initial-layout-product-adoption-decision1-result.md` → `docs/liaisonscape/liaisonscape-initial-layout-product-adoption-decision1-result.md`
- `docs/liaisonscape-initial-layout-product-adoption-design1.md` → `docs/liaisonscape/liaisonscape-initial-layout-product-adoption-design1.md`
- `docs/liaisonscape-initial-layout-product-adoption-readiness1-result.md` → `docs/liaisonscape/liaisonscape-initial-layout-product-adoption-readiness1-result.md`
- `docs/liaisonscape-initial-layout-product-default-visual-quality1-result.md` → `docs/liaisonscape/liaisonscape-initial-layout-product-default-visual-quality1-result.md`
- `docs/liaisonscape-initial-layout-production-native-structural-formulation1-result.md` → `docs/liaisonscape/liaisonscape-initial-layout-production-native-structural-formulation1-result.md`
- `docs/liaisonscape-initial-layout-release-bar-hub-publication-reprioritization1-result.md` → `docs/liaisonscape/liaisonscape-initial-layout-release-bar-hub-publication-reprioritization1-result.md`
- `docs/liaisonscape-initial-layout-runtime-provider-prototype1-result.md` → `docs/liaisonscape/liaisonscape-initial-layout-runtime-provider-prototype1-result.md`
- `docs/liaisonscape-initial-layout-same-payload-reopen1-result.md` → `docs/liaisonscape/liaisonscape-initial-layout-same-payload-reopen1-result.md`
- `docs/liaisonscape-initial-node-placement-bounded-settling-implementation.md` → `docs/liaisonscape/liaisonscape-initial-node-placement-bounded-settling-implementation.md`
- `docs/liaisonscape-initial-node-placement-congestion-settling-depth-experiment.md` → `docs/liaisonscape/liaisonscape-initial-node-placement-congestion-settling-depth-experiment.md`
- `docs/liaisonscape-initial-node-placement-gridness-counterfactual.md` → `docs/liaisonscape/liaisonscape-initial-node-placement-gridness-counterfactual.md`
- `docs/liaisonscape-initial-node-placement-non-grid-experiment.md` → `docs/liaisonscape/liaisonscape-initial-node-placement-non-grid-experiment.md`
- `docs/liaisonscape-initial-node-placement-objective-audit.md` → `docs/liaisonscape/liaisonscape-initial-node-placement-objective-audit.md`
- `docs/liaisonscape-initial-node-placement-presentation-pressure-objective-decomposition.md` → `docs/liaisonscape/liaisonscape-initial-node-placement-presentation-pressure-objective-decomposition.md`
- `docs/liaisonscape-initial-placement-chatroom-handoff.md` → `docs/liaisonscape/liaisonscape-initial-placement-chatroom-handoff.md`
- `docs/liaisonscape-initial-placement-edge-corridor-proxy-experiment.md` → `docs/liaisonscape/liaisonscape-initial-placement-edge-corridor-proxy-experiment.md`
- `docs/liaisonscape-initial-placement-global-topology-attribution-audit.md` → `docs/liaisonscape/liaisonscape-initial-placement-global-topology-attribution-audit.md`
- `docs/liaisonscape-initial-placement-label-pressure-proxy-experiment.md` → `docs/liaisonscape/liaisonscape-initial-placement-label-pressure-proxy-experiment.md`
- `docs/liaisonscape-initial-placement-local-neighborhood-displacement-boundary-audit.md` → `docs/liaisonscape/liaisonscape-initial-placement-local-neighborhood-displacement-boundary-audit.md`
- `docs/liaisonscape-initial-placement-local-neighborhood-quality-criteria-validation.md` → `docs/liaisonscape/liaisonscape-initial-placement-local-neighborhood-quality-criteria-validation.md`
- `docs/liaisonscape-initial-placement-local-neighborhood-spacing-experiment.md` → `docs/liaisonscape/liaisonscape-initial-placement-local-neighborhood-spacing-experiment.md`
- `docs/liaisonscape-initial-placement-motif-aware-seed-geometry-semantics-audit.md` → `docs/liaisonscape/liaisonscape-initial-placement-motif-aware-seed-geometry-semantics-audit.md`
- `docs/liaisonscape-initial-placement-motif-cluster-bottleneck-origin-audit.md` → `docs/liaisonscape/liaisonscape-initial-placement-motif-cluster-bottleneck-origin-audit.md`
- `docs/liaisonscape-initial-placement-motif-cluster-quality-criteria-audit.md` → `docs/liaisonscape/liaisonscape-initial-placement-motif-cluster-quality-criteria-audit.md`
- `docs/liaisonscape-initial-placement-motif-cluster-quality-criteria-validation.md` → `docs/liaisonscape/liaisonscape-initial-placement-motif-cluster-quality-criteria-validation.md`
- `docs/liaisonscape-initial-placement-motif-cluster-regularization-activation-audit.md` → `docs/liaisonscape/liaisonscape-initial-placement-motif-cluster-regularization-activation-audit.md`
- `docs/liaisonscape-initial-placement-motif-cluster-regularization-semantics-audit.md` → `docs/liaisonscape/liaisonscape-initial-placement-motif-cluster-regularization-semantics-audit.md`
- `docs/liaisonscape-initial-placement-multi-hop-topology-seed-experiment.md` → `docs/liaisonscape/liaisonscape-initial-placement-multi-hop-topology-seed-experiment.md`
- `docs/liaisonscape-initial-placement-node-repulsion-sensitivity-experiment.md` → `docs/liaisonscape/liaisonscape-initial-placement-node-repulsion-sensitivity-experiment.md`
- `docs/liaisonscape-initial-placement-nonfocal-node-geometry-criteria-audit.md` → `docs/liaisonscape/liaisonscape-initial-placement-nonfocal-node-geometry-criteria-audit.md`
- `docs/liaisonscape-initial-placement-shared-neighbor-adjustment-scope-audit.md` → `docs/liaisonscape/liaisonscape-initial-placement-shared-neighbor-adjustment-scope-audit.md`
- `docs/liaisonscape-initial-placement-shared-neighbor-role-symmetry-audit.md` → `docs/liaisonscape/liaisonscape-initial-placement-shared-neighbor-role-symmetry-audit.md`
- `docs/liaisonscape-initial-placement-shared-neighbor-target-selection-audit.md` → `docs/liaisonscape/liaisonscape-initial-placement-shared-neighbor-target-selection-audit.md`
- `docs/liaisonscape-initial-placement-source-reconciliation-and-target-edge-length-experiment.md` → `docs/liaisonscape/liaisonscape-initial-placement-source-reconciliation-and-target-edge-length-experiment.md`
- `docs/liaisonscape-joint-constrained-crossing-aware-placement2-result.md` → `docs/liaisonscape/liaisonscape-joint-constrained-crossing-aware-placement2-result.md`
- `docs/liaisonscape-license-remediation-result.md` → `docs/liaisonscape/liaisonscape-license-remediation-result.md`
- `docs/liaisonscape-lighthouse-local-curvature-blocker-inventory.md` → `docs/liaisonscape/liaisonscape-lighthouse-local-curvature-blocker-inventory.md`
- `docs/liaisonscape-local-expansion-routing-signal-decomposition.md` → `docs/liaisonscape/liaisonscape-local-expansion-routing-signal-decomposition.md`
- `docs/liaisonscape-narrow-decomposition-capacity-contract1-result.md` → `docs/liaisonscape/liaisonscape-narrow-decomposition-capacity-contract1-result.md`
- `docs/liaisonscape-node-label-geometry-connector-audit1-result.md` → `docs/liaisonscape/liaisonscape-node-label-geometry-connector-audit1-result.md`
- `docs/liaisonscape-node-label-ink-geometry-collision-audit.md` → `docs/liaisonscape/liaisonscape-node-label-ink-geometry-collision-audit.md`
- `docs/liaisonscape-node-label-route-avoidance-result.md` → `docs/liaisonscape/liaisonscape-node-label-route-avoidance-result.md`
- `docs/liaisonscape-node-label-route-clearance-result.md` → `docs/liaisonscape/liaisonscape-node-label-route-clearance-result.md`
- `docs/liaisonscape-occupied-geometry-feasibility-first-extent-growth1-result.md` → `docs/liaisonscape/liaisonscape-occupied-geometry-feasibility-first-extent-growth1-result.md`
- `docs/liaisonscape-occupied-path-clearance-audit-result.md` → `docs/liaisonscape/liaisonscape-occupied-path-clearance-audit-result.md`
- `docs/liaisonscape-operation-local-actual-product-hq-candidate-preview-visual-smoke1-result.md` → `docs/liaisonscape/liaisonscape-operation-local-actual-product-hq-candidate-preview-visual-smoke1-result.md`
- `docs/liaisonscape-ordinary-edge-crossing-audit.md` → `docs/liaisonscape/liaisonscape-ordinary-edge-crossing-audit.md`
- `docs/liaisonscape-ordinary-route-node-label-crossing-priority-semantics-experiment.md` → `docs/liaisonscape/liaisonscape-ordinary-route-node-label-crossing-priority-semantics-experiment.md`
- `docs/liaisonscape-ordinary-route-true-crossing-objective-experiment.md` → `docs/liaisonscape/liaisonscape-ordinary-route-true-crossing-objective-experiment.md`
- `docs/liaisonscape-parallel-edge-bundle-spacing-audit.md` → `docs/liaisonscape/liaisonscape-parallel-edge-bundle-spacing-audit.md`
- `docs/liaisonscape-parallel-edge-hard-side-switch-cascade-audit.md` → `docs/liaisonscape/liaisonscape-parallel-edge-hard-side-switch-cascade-audit.md`
- `docs/liaisonscape-parallel-edge-incident-bundle-human-review-handoff.md` → `docs/liaisonscape/liaisonscape-parallel-edge-incident-bundle-human-review-handoff.md`
- `docs/liaisonscape-parallel-edge-incident-bundle-presentation-retune1-result.md` → `docs/liaisonscape/liaisonscape-parallel-edge-incident-bundle-presentation-retune1-result.md`
- `docs/liaisonscape-parallel-edge-label-pressure-isolation-experiment.md` → `docs/liaisonscape/liaisonscape-parallel-edge-label-pressure-isolation-experiment.md`
- `docs/liaisonscape-parallel-incident-architecture-closure1-result.md` → `docs/liaisonscape/liaisonscape-parallel-incident-architecture-closure1-result.md`
- `docs/liaisonscape-parallel-incident-bundle-corridor-retune2-result.md` → `docs/liaisonscape/liaisonscape-parallel-incident-bundle-corridor-retune2-result.md`
- `docs/liaisonscape-parallel-incident-bundle-geometry-attribution1-result.md` → `docs/liaisonscape/liaisonscape-parallel-incident-bundle-geometry-attribution1-result.md`
- `docs/liaisonscape-parallel-incident-geometry-formulation-exploration1-result.md` → `docs/liaisonscape/liaisonscape-parallel-incident-geometry-formulation-exploration1-result.md`
- `docs/liaisonscape-parallel-obstacle-side-collapse-audit.md` → `docs/liaisonscape/liaisonscape-parallel-obstacle-side-collapse-audit.md`
- `docs/liaisonscape-parallel-obstacle-side-preservation-fix.md` → `docs/liaisonscape/liaisonscape-parallel-obstacle-side-preservation-fix.md`
- `docs/liaisonscape-parallel-physical-side-decomposition-audit.md` → `docs/liaisonscape/liaisonscape-parallel-physical-side-decomposition-audit.md`
- `docs/liaisonscape-parallel-relation-label-presentation-reevaluation1-result.md` → `docs/liaisonscape/liaisonscape-parallel-relation-label-presentation-reevaluation1-result.md`
- `docs/liaisonscape-parallel-synthetic-physical-side-counterfactual.md` → `docs/liaisonscape/liaisonscape-parallel-synthetic-physical-side-counterfactual.md`
- `docs/liaisonscape-pinned-cross-family-product-portfolio-experiment1-result.md` → `docs/liaisonscape/liaisonscape-pinned-cross-family-product-portfolio-experiment1-result.md`
- `docs/liaisonscape-pinned-frontier-feasibility1-result.md` → `docs/liaisonscape/liaisonscape-pinned-frontier-feasibility1-result.md`
- `docs/liaisonscape-pin-ui-human-check-a-popover-iteration2-result.md` → `docs/liaisonscape/liaisonscape-pin-ui-human-check-a-popover-iteration2-result.md`
- `docs/liaisonscape-pin-ui-human-check-a-visual-iteration1-result.md` → `docs/liaisonscape/liaisonscape-pin-ui-human-check-a-visual-iteration1-result.md`
- `docs/liaisonscape-pin-working-anchor-consistency1-result.md` → `docs/liaisonscape/liaisonscape-pin-working-anchor-consistency1-result.md`
- `docs/liaisonscape-pin-writer-atomic-save1-result.md` → `docs/liaisonscape/liaisonscape-pin-writer-atomic-save1-result.md`
- `docs/liaisonscape-popover-anchor-consistency-result.md` → `docs/liaisonscape/liaisonscape-popover-anchor-consistency-result.md`
- `docs/liaisonscape-pre-release-residual-reconciliation.md` → `docs/liaisonscape/liaisonscape-pre-release-residual-reconciliation.md`
- `docs/liaisonscape-presentation-architecture-boundary-diagnostic.md` → `docs/liaisonscape/liaisonscape-presentation-architecture-boundary-diagnostic.md`
- `docs/liaisonscape-presentation-aware-local-expansion-counterfactual.md` → `docs/liaisonscape/liaisonscape-presentation-aware-local-expansion-counterfactual.md`
- `docs/liaisonscape-presentation-relation-deletion-cleanup-result.md` → `docs/liaisonscape/liaisonscape-presentation-relation-deletion-cleanup-result.md`
- `docs/liaisonscape-presentation-relation-deletion-lifecycle-result.md` → `docs/liaisonscape/liaisonscape-presentation-relation-deletion-lifecycle-result.md`
- `docs/liaisonscape-presentation-relation-display-reconciliation-result.md` → `docs/liaisonscape/liaisonscape-presentation-relation-display-reconciliation-result.md`
- `docs/liaisonscape-product-authoritative-full-verification-resumable-orchestration1-result.md` → `docs/liaisonscape/liaisonscape-product-authoritative-full-verification-resumable-orchestration1-result.md`
- `docs/liaisonscape-product-authoritative-node-label-inner-loop-accumulator1-result.md` → `docs/liaisonscape/liaisonscape-product-authoritative-node-label-inner-loop-accumulator1-result.md`
- `docs/liaisonscape-product-authoritative-relation-label-inner-loop-accumulator1-result.md` → `docs/liaisonscape/liaisonscape-product-authoritative-relation-label-inner-loop-accumulator1-result.md`
- `docs/liaisonscape-product-authoritative-route-selection-inner-loop-accumulator1-result.md` → `docs/liaisonscape/liaisonscape-product-authoritative-route-selection-inner-loop-accumulator1-result.md`
- `docs/liaisonscape-product-authoritative-verification-historical-long-slice-reproduction1-result.md` → `docs/liaisonscape/liaisonscape-product-authoritative-verification-historical-long-slice-reproduction1-result.md`
- `docs/liaisonscape-product-authoritative-verification-interruptibility-design-study1-result.md` → `docs/liaisonscape/liaisonscape-product-authoritative-verification-interruptibility-design-study1-result.md`
- `docs/liaisonscape-product-authoritative-verification-long-unit-attribution-micro-splitting1-result.md` → `docs/liaisonscape/liaisonscape-product-authoritative-verification-long-unit-attribution-micro-splitting1-result.md`
- `docs/liaisonscape-product-authoritative-verification-scaling-envelope-main-thread-viability1-result.md` → `docs/liaisonscape/liaisonscape-product-authoritative-verification-scaling-envelope-main-thread-viability1-result.md`
- `docs/liaisonscape-production-shaped-quality-provider-execution-browser-cost-envelope1-result.md` → `docs/liaisonscape/liaisonscape-production-shaped-quality-provider-execution-browser-cost-envelope1-result.md`
- `docs/liaisonscape-product-node-label-hysteresis-recovery-attribution1-result.md` → `docs/liaisonscape/liaisonscape-product-node-label-hysteresis-recovery-attribution1-result.md`
- `docs/liaisonscape-product-node-label-recovery-dense-browser-feasibility1-result.md` → `docs/liaisonscape/liaisonscape-product-node-label-recovery-dense-browser-feasibility1-result.md`
- `docs/liaisonscape-product-node-label-recovery-integration1-result.md` → `docs/liaisonscape/liaisonscape-product-node-label-recovery-integration1-result.md`
- `docs/liaisonscape-product-node-label-recovery-lifecycle-source-parity1-result.md` → `docs/liaisonscape/liaisonscape-product-node-label-recovery-lifecycle-source-parity1-result.md`
- `docs/liaisonscape-product-node-label-recovery-reuse-fingerprint-attribution1-result.md` → `docs/liaisonscape/liaisonscape-product-node-label-recovery-reuse-fingerprint-attribution1-result.md`
- `docs/liaisonscape-product-node-label-relation-presentation-first-angular-escape1-result.md` → `docs/liaisonscape/liaisonscape-product-node-label-relation-presentation-first-angular-escape1-result.md`
- `docs/liaisonscape-product-owned-bundle-local-capacity-cross-bundle-feasibility1-result.md` → `docs/liaisonscape/liaisonscape-product-owned-bundle-local-capacity-cross-bundle-feasibility1-result.md`
- `docs/liaisonscape-product-owned-orientation-aware-label-capacity-stagger1-result.md` → `docs/liaisonscape/liaisonscape-product-owned-orientation-aware-label-capacity-stagger1-result.md`
- `docs/liaisonscape-product-owned-parallel-bundle-generalization1-result.md` → `docs/liaisonscape/liaisonscape-product-owned-parallel-bundle-generalization1-result.md`
- `docs/liaisonscape-product-presentation-local-spacing-parallel-label-self-loop-refinement1-result.md` → `docs/liaisonscape/liaisonscape-product-presentation-local-spacing-parallel-label-self-loop-refinement1-result.md`
- `docs/liaisonscape-product-relation-label-display-only-wrap1-result.md` → `docs/liaisonscape/liaisonscape-product-relation-label-display-only-wrap1-result.md`
- `docs/liaisonscape-product-relation-label-normal-offset-granularity1-result.md` → `docs/liaisonscape/liaisonscape-product-relation-label-normal-offset-granularity1-result.md`
- `docs/liaisonscape-product-verification-execution-architecture-decision1-result.md` → `docs/liaisonscape/liaisonscape-product-verification-execution-architecture-decision1-result.md`
- `docs/liaisonscape-product-wide-verification-budget-scheduler-policy-study1-result.md` → `docs/liaisonscape/liaisonscape-product-wide-verification-budget-scheduler-policy-study1-result.md`
- `docs/liaisonscape-relation-attachment-and-arrowhead-result.md` → `docs/liaisonscape/liaisonscape-relation-attachment-and-arrowhead-result.md`
- `docs/liaisonscape-relation-deletion-resolution-acceptance.md` → `docs/liaisonscape/liaisonscape-relation-deletion-resolution-acceptance.md`
- `docs/liaisonscape-relation-deletion-resolution-implementation.md` → `docs/liaisonscape/liaisonscape-relation-deletion-resolution-implementation.md`
- `docs/liaisonscape-relation-deletion-resolution-presentation-acceptance.md` → `docs/liaisonscape/liaisonscape-relation-deletion-resolution-presentation-acceptance.md`
- `docs/liaisonscape-relation-deletion-resolution-presentation-implementation.md` → `docs/liaisonscape/liaisonscape-relation-deletion-resolution-presentation-implementation.md`
- `docs/liaisonscape-relation-endpoint-identity-acceptance.md` → `docs/liaisonscape/liaisonscape-relation-endpoint-identity-acceptance.md`
- `docs/liaisonscape-relation-label-along-edge-recovery-audit.md` → `docs/liaisonscape/liaisonscape-relation-label-along-edge-recovery-audit.md`
- `docs/liaisonscape-relation-label-foreign-edge-ownership-audit.md` → `docs/liaisonscape/liaisonscape-relation-label-foreign-edge-ownership-audit.md`
- `docs/liaisonscape-relation-label-geometry-outlier-diagnostic.md` → `docs/liaisonscape/liaisonscape-relation-label-geometry-outlier-diagnostic.md`
- `docs/liaisonscape-relation-label-normal-distance-recovery-audit.md` → `docs/liaisonscape/liaisonscape-relation-label-normal-distance-recovery-audit.md`
- `docs/liaisonscape-relation-routing-presentation-quality-audit.md` → `docs/liaisonscape/liaisonscape-relation-routing-presentation-quality-audit.md`
- `docs/liaisonscape-representative-sample-release-quality-acceptance1-result.md` → `docs/liaisonscape/liaisonscape-representative-sample-release-quality-acceptance1-result.md`
- `docs/liaisonscape-representative-sample-release-quality-acceptance2-ashen-crown-result.md` → `docs/liaisonscape/liaisonscape-representative-sample-release-quality-acceptance2-ashen-crown-result.md`
- `docs/liaisonscape-residual-finalization-continuity-diagnosis.md` → `docs/liaisonscape/liaisonscape-residual-finalization-continuity-diagnosis.md`
- `docs/liaisonscape-responsibility-separated-initial-layout-rebaseline1-result.md` → `docs/liaisonscape/liaisonscape-responsibility-separated-initial-layout-rebaseline1-result.md`
- `docs/liaisonscape-reverse-endpoint-parallel-physical-side-fix.md` → `docs/liaisonscape/liaisonscape-reverse-endpoint-parallel-physical-side-fix.md`
- `docs/liaisonscape-routing-crossing-mixed-cause-prioritization.md` → `docs/liaisonscape/liaisonscape-routing-crossing-mixed-cause-prioritization.md`
- `docs/liaisonscape-routing-decomposition-self-loop-audit.md` → `docs/liaisonscape/liaisonscape-routing-decomposition-self-loop-audit.md`
- `docs/liaisonscape-routing-label-safety-geometry-dependency-audit.md` → `docs/liaisonscape/liaisonscape-routing-label-safety-geometry-dependency-audit.md`
- `docs/liaisonscape-self-loop-angle-ordinary-edge-interaction1-result.md` → `docs/liaisonscape/liaisonscape-self-loop-angle-ordinary-edge-interaction1-result.md`
- `docs/liaisonscape-self-loop-local-capacity-allocation1-result.md` → `docs/liaisonscape/liaisonscape-self-loop-local-capacity-allocation1-result.md`
- `docs/liaisonscape-self-loop-local-capacity-runtime-correction1-result.md` → `docs/liaisonscape/liaisonscape-self-loop-local-capacity-runtime-correction1-result.md`
- `docs/liaisonscape-self-loop-owner-local-recall-aware-pruning-dependency-fingerprint1-result.md` → `docs/liaisonscape/liaisonscape-self-loop-owner-local-recall-aware-pruning-dependency-fingerprint1-result.md`
- `docs/liaisonscape-self-loop-owner-local-recall-reuse1-result.md` → `docs/liaisonscape/liaisonscape-self-loop-owner-local-recall-reuse1-result.md`
- `docs/liaisonscape-self-loop-responsibility-closure1-result.md` → `docs/liaisonscape/liaisonscape-self-loop-responsibility-closure1-result.md`
- `docs/liaisonscape-self-loop-same-geometry-counterfactual.md` → `docs/liaisonscape/liaisonscape-self-loop-same-geometry-counterfactual.md`
- `docs/liaisonscape-shared-endpoint-fanout-audit.md` → `docs/liaisonscape/liaisonscape-shared-endpoint-fanout-audit.md`
- `docs/liaisonscape-structural-placement-angular-ordering-retune1-result.md` → `docs/liaisonscape/liaisonscape-structural-placement-angular-ordering-retune1-result.md`
- `docs/liaisonscape-structural-placement-angular-ordering-retune2-result.md` → `docs/liaisonscape/liaisonscape-structural-placement-angular-ordering-retune2-result.md`
- `docs/liaisonscape-structural-seeded-capacity-refinement1-result.md` → `docs/liaisonscape/liaisonscape-structural-seeded-capacity-refinement1-result.md`
- `docs/liaisonscape-target-edge-length-candidate-and-shared-solver-boundary-experiment.md` → `docs/liaisonscape/liaisonscape-target-edge-length-candidate-and-shared-solver-boundary-experiment.md`
- `docs/liaisonscape-topology-aware-free-form-crossing-minimizing-auto-layout-experiment1-result.md` → `docs/liaisonscape/liaisonscape-topology-aware-free-form-crossing-minimizing-auto-layout-experiment1-result.md`
- `docs/liaisonscape-viewport-toolbar-collapse-follow-up.md` → `docs/liaisonscape/liaisonscape-viewport-toolbar-collapse-follow-up.md`
- `docs/liaisonscape-viewport-toolbar-keyboard-focus-result.md` → `docs/liaisonscape/liaisonscape-viewport-toolbar-keyboard-focus-result.md`
- `docs/liaisonscape-worker-product-metric-parity-actual-product-visual-candidate-gate1-result.md` → `docs/liaisonscape/liaisonscape-worker-product-metric-parity-actual-product-visual-candidate-gate1-result.md`
- `docs/liaisonscape-worktree-baseline-commit-readiness1-result.md` → `docs/liaisonscape/liaisonscape-worktree-baseline-commit-readiness1-result.md`

### W4A.2 — Application-level Automatic Layout records (24)

- `docs/automatic-layout-experiment-1b-density-framing-result.md` → `docs/liaisonscape/automatic-layout-experiment-1b-density-framing-result.md`
- `docs/automatic-layout-experiment-1c-angular-freedom-result.md` → `docs/liaisonscape/automatic-layout-experiment-1c-angular-freedom-result.md`
- `docs/automatic-layout-experiment-1d-owning-node-proximity-result.md` → `docs/liaisonscape/automatic-layout-experiment-1d-owning-node-proximity-result.md`
- `docs/automatic-layout-experiment-1e-node-label-recovery-result.md` → `docs/liaisonscape/automatic-layout-experiment-1e-node-label-recovery-result.md`
- `docs/automatic-layout-experiment-1f-anisotropic-spacing-result.md` → `docs/liaisonscape/automatic-layout-experiment-1f-anisotropic-spacing-result.md`
- `docs/automatic-layout-experiment-1g-cardinal-preference-result.md` → `docs/liaisonscape/automatic-layout-experiment-1g-cardinal-preference-result.md`
- `docs/automatic-layout-experiment-1h-drag-follow-responsiveness-result.md` → `docs/liaisonscape/automatic-layout-experiment-1h-drag-follow-responsiveness-result.md`
- `docs/automatic-layout-experiment-1i-bounded-description-wrapping-result.md` → `docs/liaisonscape/automatic-layout-experiment-1i-bounded-description-wrapping-result.md`
- `docs/automatic-layout-experiment-1j-node-facing-optical-inset-result.md` → `docs/liaisonscape/automatic-layout-experiment-1j-node-facing-optical-inset-result.md`
- `docs/automatic-layout-experiment-1k-directional-optical-geometry-audit.md` → `docs/liaisonscape/automatic-layout-experiment-1k-directional-optical-geometry-audit.md`
- `docs/automatic-layout-experiment-1-label-stability-result.md` → `docs/liaisonscape/automatic-layout-experiment-1-label-stability-result.md`
- `docs/automatic-layout-experiment-1l-relation-label-drag-follow-responsiveness-result.md` → `docs/liaisonscape/automatic-layout-experiment-1l-relation-label-drag-follow-responsiveness-result.md`
- `docs/automatic-layout-experiment-1m-relation-label-normal-distance-recovery-result.md` → `docs/liaisonscape/automatic-layout-experiment-1m-relation-label-normal-distance-recovery-result.md`
- `docs/automatic-layout-experiment-1u-uniform-route-granularity-result.md` → `docs/liaisonscape/automatic-layout-experiment-1u-uniform-route-granularity-result.md`
- `docs/automatic-layout-experiment-plan.md` → `docs/liaisonscape/automatic-layout-experiment-plan.md`
- `docs/automatic-layout-experiments-1m-1q-static-geometry-checkpoint.md` → `docs/liaisonscape/automatic-layout-experiments-1m-1q-static-geometry-checkpoint.md`
- `docs/automatic-layout-initial-node-placement-design.md` → `docs/liaisonscape/automatic-layout-initial-node-placement-design.md`
- `docs/automatic-layout-initial-node-placement-experiment-1-acceptance.md` → `docs/liaisonscape/automatic-layout-initial-node-placement-experiment-1-acceptance.md`
- `docs/automatic-layout-initial-node-placement-experiment-1-result.md` → `docs/liaisonscape/automatic-layout-initial-node-placement-experiment-1-result.md`
- `docs/automatic-layout-initial-node-placement-persistence-fix-acceptance.md` → `docs/liaisonscape/automatic-layout-initial-node-placement-persistence-fix-acceptance.md`
- `docs/automatic-layout-initial-node-placement-persistence-fix-result.md` → `docs/liaisonscape/automatic-layout-initial-node-placement-persistence-fix-result.md`
- `docs/automatic-layout-initial-node-placement-serialization-implications.md` → `docs/liaisonscape/automatic-layout-initial-node-placement-serialization-implications.md`
- `docs/automatic-layout-placement-ownership-checkpoint.md` → `docs/liaisonscape/automatic-layout-placement-ownership-checkpoint.md`
- `docs/automatic-layout-placement-ownership-indicator-result.md` → `docs/liaisonscape/automatic-layout-placement-ownership-indicator-result.md`

## W4B — NarrativeLine records → `docs/narrativeline/` (23)

These records own NarrativeLine application implementation/acceptance, source diagnostics, or NarrativeLine-specific release-surface reconciliation. Their path move would not generalize app-specific acceptance to Cross-App parity or change deferred History/Extension maturity. The bounded recipient-preference experiments already moved in the prior checkpoint and are not repeated here.

- `docs/e2r-narrativeline-documentation-and-final-release-readiness-audit1-result.md` → `docs/narrativeline/e2r-narrativeline-documentation-and-final-release-readiness-audit1-result.md`
- `docs/e2r-narrativeline-documentation-closure-reconciliation1-result.md` → `docs/narrativeline/e2r-narrativeline-documentation-closure-reconciliation1-result.md`
- `docs/e2r-narrativeline-next-phase-and-source-handoff-planning1-result.md` → `docs/narrativeline/e2r-narrativeline-next-phase-and-source-handoff-planning1-result.md`
- `docs/e2r-narrativeline-pre-public-feature-candidate-audit1-result.md` → `docs/narrativeline/e2r-narrativeline-pre-public-feature-candidate-audit1-result.md`
- `docs/narrativeline-control-label-alignment-audit.md` → `docs/narrativeline/narrativeline-control-label-alignment-audit.md`
- `docs/narrativeline-display-order-reordering-audit.md` → `docs/narrativeline/narrativeline-display-order-reordering-audit.md`
- `docs/narrativeline-encoding-corruption-diagnosis.md` → `docs/narrativeline/narrativeline-encoding-corruption-diagnosis.md`
- `docs/narrativeline-entity-selection-status-narrow-acceptance1-result.md` → `docs/narrativeline/narrativeline-entity-selection-status-narrow-acceptance1-result.md`
- `docs/narrativeline-event-human-readable-identity-audit.md` → `docs/narrativeline/narrativeline-event-human-readable-identity-audit.md`
- `docs/narrativeline-locale-consumer-acceptance.md` → `docs/narrativeline/narrativeline-locale-consumer-acceptance.md`
- `docs/narrativeline-modal-dialog-mojibake-audit.md` → `docs/narrativeline/narrativeline-modal-dialog-mojibake-audit.md`
- `docs/narrativeline-narrow-header-robustness-acceptance1-result.md` → `docs/narrativeline/narrativeline-narrow-header-robustness-acceptance1-result.md`
- `docs/narrativeline-phase24-navigation-safety-acceptance.md` → `docs/narrativeline/narrativeline-phase24-navigation-safety-acceptance.md`
- `docs/narrativeline-post-1i-mojibake-audit.md` → `docs/narrativeline/narrativeline-post-1i-mojibake-audit.md`
- `docs/narrativeline-relation-blocker-card-action-geometry-comparison.md` → `docs/narrativeline/narrativeline-relation-blocker-card-action-geometry-comparison.md`
- `docs/narrativeline-relation-blocker-card-presentation-follow-up.md` → `docs/narrativeline/narrativeline-relation-blocker-card-presentation-follow-up.md`
- `docs/narrativeline-relation-blocker-identity-presentation-comparison.md` → `docs/narrativeline/narrativeline-relation-blocker-identity-presentation-comparison.md`
- `docs/narrativeline-relation-blocker-presentation-formal-acceptance.md` → `docs/narrativeline/narrativeline-relation-blocker-presentation-formal-acceptance.md`
- `docs/narrativeline-responsive-geometry-acceptance.md` → `docs/narrativeline/narrativeline-responsive-geometry-acceptance.md`
- `docs/narrativeline-timeline-shell-acceptance.md` → `docs/narrativeline/narrativeline-timeline-shell-acceptance.md`
- `docs/narrativeline-vite-24678-warning-diagnostic1-result.md` → `docs/narrativeline/narrativeline-vite-24678-warning-diagnostic1-result.md`
- `docs/narrativeline-vite-24678-warning-trigger-audit1-result.md` → `docs/narrativeline/narrativeline-vite-24678-warning-trigger-audit1-result.md`
- `docs/narrativeline-vite-test-ws-cleanup1-result.md` → `docs/narrativeline/narrativeline-vite-test-ws-cleanup1-result.md`

## W4C — Validator record → `docs/validator/` (1)

This is Validator-owned documentation-parity evidence for existing Presentation support. It does not change normative Extension/schema authority or Validator runtime status.

- `docs/validator-presentation-documentation-parity-fix-result.md` → `docs/validator/validator-presentation-documentation-parity-fix-result.md`

## W4D — Cross-App design record → `docs/cross-app/` (1)

This document declares itself the E2R specification repository's single source of truth for the application Dataset Handoff v0 design. Its primary responsibility is the shared application handoff convention, not an application-specific runtime implementation. Moving it would be physical placement only and would not authorize implementation or expand the contract.

- `docs/dataset-handoff-v0-design.md` → `docs/cross-app/dataset-handoff-v0-design.md`

## Reference and path-risk inventory

A canonical-workspace scan matched the 349 candidate basenames in 97 source files, over 499 matching lines. After excluding candidate documents linking among themselves, **63 source files** contain inbound references: 58 in E2R-SPEC and 5 in `ai-knowledge`. No direct path reference was found in the LiaisonScape, NarrativeLine, Hub, or Validator sibling repositories in the current scan. No destination basename collision was found.

The counts are scan evidence, not an assertion that external deep links do not exist. The actual migration checkpoint must re-scan Markdown links, plain paths, navigation, and sibling repositories against the then-current tree. Update references path-only; do not rewrite historical wording, authority, status, or planning content. The 58 E2R-SPEC source files at this scan are:

- `e2r-spec\docs\cross-app\cross-app-capability-handoff-discovery-audit.md`
- `e2r-spec\docs\cross-app\cross-app-capability-handoff-target-contract.md`
- `e2r-spec\docs\cross-app\cross-app-locale-startup-v0-design.md`
- `e2r-spec\docs\cross-app\cross-app-locale-startup-v0-recipient-preference-design.md`
- `e2r-spec\docs\cross-app\cross-app-relation-deletion-capability-closure.md`
- `e2r-spec\docs\cross-app\e2r-cross-app-visual-consistency-audit1-result.md`
- `e2r-spec\docs\documentation-ia-application-workstream-foldering-wave2-preparation1.md`
- `e2r-spec\docs\documentation-ia-handoff-evidence-wave2-path-migration1-result.md`
- `e2r-spec\docs\documentation-ia-narrativeline-event-identity-path-migration1-result.md`
- `e2r-spec\docs\documentation-ia-post-wave2-residual-responsibility-audit1.md`
- `e2r-spec\docs\documentation-ia-primary-responsibility-residual-classification-audit1.md`
- `e2r-spec\docs\documentation-ia-seed-133-path-migration1-result.md`
- `e2r-spec\docs\documentation-ia-seed-133-path-migration-readiness-audit1.md`
- `e2r-spec\docs\hub\e2r-hub-public-entry-point-information-architecture.md`
- `e2r-spec\docs\liaisonscape\cross-app-destructive-action-hierarchy-audit.md`
- `e2r-spec\docs\liaisonscape\liaisonscape-explicit-auto-layout-preview-adoption-contract-reconciliation1-result.md`
- `e2r-spec\docs\liaisonscape\liaisonscape-explicit-auto-layout-preview-pin-contract1-result.md`
- `e2r-spec\docs\liaisonscape\liaisonscape-initial-placement-seed-ta2-operational-witness-reconstruction1-result.md`
- `e2r-spec\docs\liaisonscape\liaisonscape-pin-ui1-result.md`
- `e2r-spec\docs\narrativeline\narrativeline-event-identity-implementation-design.md`
- `e2r-spec\docs\roadmap.md`
- `e2r-spec\docs\roadmap-history\liaisonscape-layout-and-auto-layout-chronology.md`
- `e2r-spec\docs\roadmap-history\release-and-cross-app-chronology.md`
- `e2r-spec\docs\roadmap-hybrid-reconstruction-candidates2-3-claim-reconciliation-preparation1.md`
- `e2r-spec\docs\roadmap-hybrid-reconstruction-explicit-auto-layout-pin-claim-reconciliation-preparation1.md`
- `e2r-spec\docs\roadmap-hybrid-reconstruction-explicit-auto-layout-pin-group-pilot-result2.md`
- `e2r-spec\docs\roadmap-hybrid-reconstruction-g2-b3-preparation1.md`
- `e2r-spec\docs\roadmap-hybrid-reconstruction-g2-b4-preparation1.md`
- `e2r-spec\docs\roadmap-hybrid-reconstruction-product-verification-pilot-preparation1.md`
- `e2r-spec\docs\roadmap-hybrid-reconstruction-second-pilot-preparation1.md`
- `e2r-spec\docs\roadmap-hybrid-reconstruction-second-pilot-preparation2.md`
- `e2r-spec\docs\roadmap-hybrid-reconstruction-second-pilot-result1.md`
- `e2r-spec\docs\roadmap-mixed-seed-readiness-browser-responsibility-audit1.md`
- `e2r-spec\docs\roadmap-pre-release-chronology-migration1-result.md`
- `e2r-spec\docs\roadmap-residual-responsibility-audit2.md`
- `e2r-spec\docs\roadmap-residual-semantic-reconstruction-reaudit1.md`
- `e2r-spec\docs\roadmap-seed-pr3-browser-history-migration1-result.md`
- `e2r-spec\docs\roadmap-seed-pr3-browser-runtime-diagnostic-pointer-compression1-result.md`
- `e2r-spec\docs\roadmap-semantic-decomposition-canonical-planning-synthesis-audit1.md`
- `e2r-spec\docs\roadmap-slimming-audit1.md`
- `e2r-spec\research\exploratory\e2r-wiki-portable-hosted-dataset-application.md`
- `e2r-spec\research\exploratory\relation-direction-and-arrow-appearance.md`
- `e2r-spec\sessions\E2R-Session-0037.md`
- `e2r-spec\sessions\E2R-Session-0038.md`
- `e2r-spec\sessions\E2R-Session-0039.md`
- `e2r-spec\sessions\E2R-Session-0040.md`
- `e2r-spec\sessions\E2R-Session-0041.md`
- `e2r-spec\sessions\E2R-Session-0042.md`
- `e2r-spec\sessions\E2R-Session-0052.md`
- `e2r-spec\sessions\E2R-Session-0053.md`
- `e2r-spec\sessions\E2R-Session-0055.md`
- `e2r-spec\sessions\E2R-Session-0056.md`
- `e2r-spec\sessions\E2R-Session-0057.md`
- `e2r-spec\sessions\E2R-Session-0058.md`
- `e2r-spec\sessions\E2R-Session-0059.md`
- `e2r-spec\sessions\E2R-Session-0060.md`
- `e2r-spec\sessions\E2R-Session-0093.md`
- `e2r-spec\sessions\E2R-Session-0094.md`

The five Knowledge files requiring path-only repair if their cited targets are moved are:

- `ai-knowledge\decisions\liaisonscape-automatic-self-loop-node-avoidance.md`
- `ai-knowledge\decisions\liaisonscape-visible-approach-arrowhead.md`
- `ai-knowledge\hypotheses\actual-product-surface-before-interaction-evidence.md`
- `ai-knowledge\hypotheses\liaisonscape-auto-layout-complexity-is-multidimensional.md`
- `ai-knowledge\hypotheses\preview-before-adoption-for-quality-sensitive-operations.md`

The target mapping observed in those files is exact: the self-loop decision and
visible-approach decision cite their corresponding LiaisonScape result; the
actual-product-surface hypothesis cites its inspection-precedence result; and
the Auto Layout complexity and preview/adoption hypotheses both cite
`liaisonscape-auto-layout-quality-freeze-and-worktree-baseline-audit1-result.md`.
Any later edit is limited to changing these source paths to the matching
`e2r-spec/docs/liaisonscape/<basename>` location.

At scan time, `ai-knowledge` had one unrelated dirty file, `playbooks/e2r-edge-cdp-browser-diagnostic.md`; none of the five listed repair targets was dirty. This audit did not write to Knowledge. Any later repair requires explicit Human write approval and a fresh conflict check. LiaisonScape and NarrativeLine sibling worktrees were dirty; they remain read-only. No sibling application write is anticipated by this scan.

The proposed repair scope also includes the 15 PR-3 JSON diagnostic references that remain unresolved in the checked workspace after the Seed-133 migration. They are outside these 349 documents and are not repaired, recovered, substituted, or reclassified here. Their unresolved state must remain explicit.

## Residual root: retain, separate, or HOLD

The remaining 156 root files are not automatically migration candidates. Positive root responsibilities identified in the existing classification audit remain appropriate: Roadmap and documentation IA; E2R Core/Extension/History/Relative Time and dataset-wide decisions; canonical public samples and provenance/release reconciliation; shared test/distribution infrastructure; and Roadmap History. These responsibilities are repository-wide or E2R-wide rather than one application's runtime/evidence responsibility.

The following nearby records are **not** silently assigned to W4:

- `docs/liaisonscape-validator-release-residual-audit.md`: joint LiaisonScape/Validator release-residual triage. It is not a shared runtime contract or parity acceptance; whether its primary owner is repository-wide release coordination or Cross-App needs a separate explicit classification.
- `docs/self-description-final-acceptance-and-hub-action-public-update-readiness-result.md`: combines E2R Self-Description acceptance boundaries with a Hub action-copy/public-update checkpoint. Do not classify as ordinary Hub-only acceptance without separating its authority.
- `docs/e2r-hub-initial-layout-precomputation-latency-hiding-hypothesis1.md`: explicitly exploratory Research, not Hub runtime authority. If relocated, the existing top-level `research/exploratory/` is the plausible home; do not create `docs/research/` or fold it into W4.
- E2R-wide Initial Public Release / provenance records mentioning multiple applications remain root because their primary responsibility is shared sample stewardship, release governance, or provenance—not merely because they mention several applications.

These three named items remain HOLD/root for this Wave 4 proposal. The Research hypothesis is a separate top-level Research placement question, not an approved docs-folder move.

## Wave packaging recommendation

**Recommended for Human decision:** approve W4A–W4D as one owner-first maintenance wave if the Human accepts the high-volume reference repair, with the four packets validated and staged by exact path sets. If desired, W4A may be one path batch while W4B–W4D are independent batches in the same checkpoint; their statuses and authority are never merged. The principal coordination gate is the five Knowledge path repairs, not application source changes.

A lower-risk alternative is to approve W4A separately from W4B–W4D. No responsibility or taxonomy decision is needed to make that split; it only reduces the size of the path/reference transaction. No path move is authorized by this preparation itself.

## Execution invariants for a future approval

- Reconfirm the exact source files, destination non-collisions, current workspace references, and sibling/Knowledge worktree state immediately before execution.
- Keep all 349 records separate; do not merge results or rewrite status language.
- Repair only stale paths caused by these exact moves, including approved Knowledge references, and preserve historical wording otherwise.
- Do not move the Roadmap, History files, public samples, normative specifications/schemas, the three HOLD items above, or any already-migrated Wave 1–3 / Seed-133 record.
- Do not create/repair/recover the unresolved 15 JSON artifacts; do not claim reference closure for them.
- Do not modify or stage `work/`; no push, release, tag, deployment, publication, or Banked Reset ticket.

## Validation

For a future approved move: run current repository validation (`npm.cmd run validate`), markdown/path-reference checks over the affected source files, `git diff --check`, exact staged path review, and post-move destination/source assertions. Any Knowledge repair must be separately staged/committed in that repository only after explicit authorization. No sibling application repository should be changed absent a newly discovered direct reference and explicit approval.

## Audit method and current state

This preparation rechecked current root files, the accepted primary-responsibility policy/audit, representative full-text scope/status statements for the non-prefix NarrativeLine, Validator, Hub, Handoff, and Layout candidates, exact destination collisions, and workspace path/name references. Sibling repositories were read-only.

- E2R-SPEC HEAD: `aed6fe8fe399b4625f84d44a305e352e2d93eba5`.
- E2R-SPEC pre-existing state: untracked `work/`, untouched and unstaged.
- Knowledge worktree: one unrelated dirty playbook; untouched.
- LiaisonScape and NarrativeLine worktrees: dirty; read-only.
- Hub and Validator worktrees: clean at audit.
- No residual path move was performed in this preparation.
- No claim is made that external deep links do not exist.
