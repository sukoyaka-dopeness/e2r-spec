# Final Root Classification, Documentation IA Placement, and Root-Ingress Gate Audit 1

- Date: 2026-09-26
- Status: **AUDIT COMPLETE / MIGRATION AND VALIDATION-GATE IMPLEMENTATION NOT AUTHORIZED BY THIS RECORD**
- Scope: Post-Wave-4 `docs/` root classification, exact candidate manifests, `docs/documentation-ia/` placement assessment, and future root-placement validation design.
- Authority: Preparation only. `docs/roadmap.md` remains the sole current-planning authority; this record grants no path, taxonomy, status, or implementation authority.
- Related records: [Documentation Hub](../README.md), [Documentation Plan](documentation-plan.md), [Wave 4 preparation](documentation-ia-owner-first-residual-wave4-preparation1.md), [Wave 4 result](documentation-ia-owner-first-residual-wave4-path-migration1-result.md), and [Primary-Responsibility Residual Classification Audit 1](documentation-ia-primary-responsibility-residual-classification-audit1.md).

## Finding

At Wave 4 HEAD `b754ec76b6254eac0360bc35dfcee7f266809706`, the current
`docs/` root contains **158 Markdown files**. The inventory was re-read from
the filesystem; the prior 349-file Wave 4 manifest is complete and is not
repeated as a migration candidate. The current tree supports four bounded
placement cohorts totaling 88 existing root files, plus this audit record as
the 89th proposed move. If Human approves all four cohorts, the expected root
retention set is 70 files, including `README.md` and `roadmap.md`.

This is not an instruction to minimize the root at any cost. The retained set
has affirmative E2R-wide / repository-wide responsibility. Application-owned
evidence, Cross-App-owned contracts, and exploratory Research have separate
existing destinations and should not remain at root merely because they cite
Core, Extensions, multiple applications, or shared evidence.

## Proposed next migration manifests

All entries below preserve their basename. No moves are performed by this
audit. Cohorts have different validation and reference-repair profiles; they
may be approved as one administrative wave only if each lane and its external
write boundary is separately authorized.

### W5A — Documentation IA / Roadmap governance (77) → `docs/documentation-ia/`

The primary responsibility is this specification repository's documentation
placement policy, navigation, physical structure, and Roadmap/history
maintenance. This is a responsibility landing zone, not a document-type or
authority hierarchy. `docs/README.md` and `docs/roadmap.md` remain root entry
points. The 76 existing files are:

**Existing `documentation-ia-*` records (28):**

- `documentation-ia-application-workstream-foldering-wave2-preparation1.md`
- `documentation-ia-application-workstream-landing-zone-migration-preparation1.md`
- `documentation-ia-cross-app-current-dataset-handoff-path-migration1-result.md`
- `documentation-ia-docs-wide-organization-audit1.md`
- `documentation-ia-e2r-wide-milestone-authority-decision1.md`
- `documentation-ia-guides-path-migration1-result.md`
- `documentation-ia-handoff-evidence-wave2-path-migration1-result.md`
- `documentation-ia-hub-public-entry-path-migration1-result.md`
- `documentation-ia-hub-vs-e2r-wide-milestone-authority-decision-preparation1.md`
- `documentation-ia-liaisonscape-pin-path-migration1-result.md`
- `documentation-ia-narrativeline-event-identity-path-migration1-result.md`
- `documentation-ia-narrativeline-locale-experiment-path-migration1-result.md`
- `documentation-ia-owner-first-residual-wave4-path-migration1-result.md`
- `documentation-ia-owner-first-residual-wave4-preparation1.md`
- `documentation-ia-post-wave2-residual-responsibility-audit1.md`
- `documentation-ia-primary-responsibility-residual-classification-audit1.md`
- `documentation-ia-roadmap-chronology-migration1-result.md`
- `documentation-ia-roadmap-chronology-structure-decision1.md`
- `documentation-ia-roadmap-physical-modularization-decision-preparation1.md`
- `documentation-ia-roadmap-physical-modularization-direction-decision1.md`
- `documentation-ia-roadmap-physical-modularization-implementation-preparation1.md`
- `documentation-ia-seed-133-path-migration-readiness-audit1.md`
- `documentation-ia-seed-133-path-migration1-result.md`
- `documentation-ia-validator-0.4.0-lifecycle-wave2b-path-migration1-result.md`
- `documentation-ia-validator-integration-path-migration1-result.md`
- `documentation-ia-wave3a-app-owned-evidence-path-migration1-result.md`
- `documentation-ia-wave3b-cross-app-evidence-path-migration1-result.md`
- `documentation-ia-wave3c-liaisonscape-evidence-path-migration1-result.md`

**Roadmap governance / reconstruction records (46):**

- `roadmap-application-ux-shell-acceptance-history-migration1-result.md`
- `roadmap-baseline-milestone-outline-consolidation1-result.md`
- `roadmap-early-automatic-layout-experiment1-history-migration1-result.md`
- `roadmap-exploratory-suite-heading-consolidation1-result.md`
- `roadmap-hybrid-reconstruction-candidates2-3-claim-reconciliation-preparation1.md`
- `roadmap-hybrid-reconstruction-explicit-auto-layout-pin-claim-reconciliation-preparation1.md`
- `roadmap-hybrid-reconstruction-explicit-auto-layout-pin-group-pilot-result1.md`
- `roadmap-hybrid-reconstruction-explicit-auto-layout-pin-group-pilot-result2.md`
- `roadmap-hybrid-reconstruction-g2-b1-pilot-result1.md`
- `roadmap-hybrid-reconstruction-g2-b2-pilot-result1.md`
- `roadmap-hybrid-reconstruction-g2-b3-pilot-result1.md`
- `roadmap-hybrid-reconstruction-g2-b3-preparation1.md`
- `roadmap-hybrid-reconstruction-g2-b4-pilot-result1.md`
- `roadmap-hybrid-reconstruction-g2-b4-preparation1.md`
- `roadmap-hybrid-reconstruction-history2-candidate3-migration-result1.md`
- `roadmap-hybrid-reconstruction-product-node-label-group-reconstruction-result1.md`
- `roadmap-hybrid-reconstruction-product-parallel-relation-label-group-reconstruction-result1.md`
- `roadmap-hybrid-reconstruction-product-verification-pilot-preparation1.md`
- `roadmap-hybrid-reconstruction-product-verification-pilot-result1.md`
- `roadmap-hybrid-reconstruction-second-pilot-preparation1.md`
- `roadmap-hybrid-reconstruction-second-pilot-preparation2.md`
- `roadmap-hybrid-reconstruction-second-pilot-result1.md`
- `roadmap-initial-layout-product-frontier-history-migration1-result.md`
- `roadmap-initial-placement-routing-history-migration1-result.md`
- `roadmap-initial-placement-routing-pointer-compression1-result.md`
- `roadmap-mixed-seed-readiness-browser-responsibility-audit1.md`
- `roadmap-post-release-cross-app-observation-history-migration1-result.md`
- `roadmap-pre-release-chronology-migration1-result.md`
- `roadmap-relative-time-and-documentation-ia-snapshot-compression1-result.md`
- `roadmap-research-responsibility-audit1-result.md`
- `roadmap-research-responsibility-migration1-result.md`
- `roadmap-residual-responsibility-audit1.md`
- `roadmap-residual-responsibility-audit2.md`
- `roadmap-residual-responsibility-audit3.md`
- `roadmap-residual-semantic-reconstruction-reaudit1.md`
- `roadmap-seed-pr2-history-migration1-result.md`
- `roadmap-seed-pr3-browser-history-migration1-result.md`
- `roadmap-seed-pr3-browser-runtime-diagnostic-pointer-compression1-result.md`
- `roadmap-seed-pr3-pre-browser-preparation-pointer-compression1-result.md`
- `roadmap-seed-pr3-prebrowser-history-migration1-result.md`
- `roadmap-seed-production-pr2-lineage-pointer-compression1-result.md`
- `roadmap-seed-research-pointer-compression1-result.md`
- `roadmap-semantic-decomposition-canonical-planning-synthesis-audit1.md`
- `roadmap-slimming-audit1.md`
- `roadmap-slimming-migration1-result.md`
- `roadmap-slimming-migration2-result.md`

**Additional governance records (2):**

- `documentation-information-architecture-roadmap-modularization-audit1-result.md`
- `documentation-plan.md`

**This audit (1):**

- `documentation-ia-final-root-classification-and-ingress-gate-audit1.md`

For every listed source `docs/<name>`, the exact proposed destination is
`docs/documentation-ia/<name>`. `roadmap.md` itself does not move. Historical
Roadmap bodies are not rewritten; this is only physical placement of their
governance result records.

The canonical workspace scan found direct references to five IA records in
`sessions/E2R-Session-0094.md`; the Documentation Hub and Plan have navigation
references to the broader family. Those are repairable within E2R-SPEC. No
direct Knowledge or application-sibling path dependency was found in the
current text scan. The five session links and all Hub/Plan links must be
repaired in the execution checkpoint. Preserve original manifests inside
audit records as historical inventories where their source paths are evidence.

### W5B — LiaisonScape-owned application evidence (5) → `docs/liaisonscape/`

- `automatic-initial-entity-placement-experiment-result.md`
- `dataset-replacement-safety-liaison-scape-implementation-result.md`
- `e2r-dom-test-environment-liaison-scape-consumer-pilot-result.md`
- `e2r-dom-test-environment-liaison-scape-migration-result.md`
- `layout-persistence-responsibility-decision.md`

Exact mapping for each: `docs/<name>` → `docs/liaisonscape/<name>`. The first
record is bounded LiaisonScape placement evidence, not production adoption;
the last is a LiaisonScape Layout persistence design boundary, not a Core or
Stable Extension decision. The two DOM-environment records are LiaisonScape
consumer pilot/migration evidence; the shared package's distribution and
publication authorities remain root. The Dataset Replacement implementation
result remains an application implementation record and does not stand in for
NarrativeLine parity or Cross-App policy.

The workspace scan found two session files referring to the LiaisonScape
replacement result. Current inbound references from migrated LiaisonScape
docs also need path-only repair. Sibling application repositories had no
direct references in the read-only scan. Do not reconcile any recorded
acceptance or package status during a future move.

### W5C — Cross-App contract / interoperability / shared UX (4) → `docs/cross-app/`

- `dataset-acquisition-entry-point-alignment.md`
- `dataset-replacement-safety-design.md`
- `foreign-graph-coordinate-interop-experiment-result.md`
- `relation-endpoint-ui-directionality-follow-up.md`

Exact mapping for each: `docs/<name>` → `docs/cross-app/<name>`. These records
own a shared acquisition/replacement direction, a cross-consumer editing-safety
model, a bounded foreign-graph/E2R interoperability experiment, and shared
endpoint-facing UX direction respectively. The foreign-coordinate experiment
does not establish generic coordinate-unit compatibility; the endpoint record
does not change directed Core semantics or adopt UI vocabulary as schema.

The scan found inbound references from E2R-SPEC Research, sessions, and the
Hub IA. It also found two `ai-knowledge` documents referencing
`dataset-acquisition-entry-point-alignment.md`. The Knowledge repository is
read-only in this audit; a future execution needs explicit path-only write
authorization for exactly those references, plus a fresh dirty-worktree
conflict check. Do not fold or rewrite Knowledge decisions. Without that
approval, W5C is HOLD for execution; the other cohorts remain independent.

### W5D — Research placement (3) → `research/exploratory/`

- `ai-workflow-research.md`
- `e2r-gamebook-vscode-extension-research-note1.md`
- `e2r-hub-initial-layout-precomputation-latency-hiding-hypothesis1.md`

Exact mapping for each: `docs/<name>` → `research/exploratory/<name>`. Their
primary responsibility is explicitly exploratory Research/backlog, not Hub,
application implementation, or repository documentation policy. The existing
Research README already defines `exploratory/` for general exploration; no
`docs/research/` or new taxonomy is needed. The Research catalog and
Research/Documentation navigation must be reconciled as path metadata only.
Repair links from `applications/character-generator-app.md` and the cited
Research handoffs/audits. The Gamebook note is deferred; moving it does not
restart that idea or authorize a repository. The Hub latency hypothesis
remains deferred and does not replace the active Initial Layout runtime
priority or remove its blocker.

The current scan found inbound references in the application design doc and
four Research records. No direct application-sibling or Knowledge path
dependency was found.

## Classification of the 70-document root-retention set

The following are the exact positive root-retain files expected after W5A–W5D
if approved. The root is justified by primary E2R-wide or repository-wide
responsibility, not by inability to classify. Each file remains in its
existing status and authority lane.

### Repository entry, shared application guidance, and evidence policy (9)

- `README.md` — stable documentation entry point linked from the repository root.
- `roadmap.md` — sole current-planning authority and entry point.
- `application-design-principles.md` — E2R-spec-wide recommendations for all consumers, not one application's implementation contract.
- `application-recommendations.md` — shared non-normative consumer recommendations; Core/Extension specifications remain normative.
- `identifier.md` — repository-wide E2R identifier recommendations.
- `visual-evidence-early-smoke-check-policy.md` — workspace/repository-wide evidence process policy, not a product acceptance result.
- `presentation-orphan-relation-validation-policy-decision.md` — shared E2R Presentation validation responsibility; it does not become Validator-owned merely by discussing Validator behavior.
- `e2r-self-description.md` — repository-wide informative description of the E2R self-description dogfood Dataset/example.
- `e2r-pwa-and-offline-capability-roadmap1-result.md` — E2R suite-level direction that explicitly rejects a single merged PWA and a suite-wide offline promise; it is not a shared PWA contract or one-app implementation result.

### Core / Extension / dataset-wide semantic responsibility (20)

- `history-2-dataset-wide-h1-to-h2-upgrade-scope-closure-result.md`
- `history-2-option2-normative-design-decision-packet.md`
- `history-2-position-circa-human-scope-decision-preparation-result.md`
- `history-2-position-circa-stable-profile-implementation-result.md`
- `history-2-stable-profile-cross-repository-publication-readiness-audit.md`
- `history-2-stable-registration-option2-option3-decision-preparation-result.md`
- `history-2-user-facing-authoring-scope-result.md`
- `relative-time-atomic-recorded-assertion-contract-scope-decision1.md`
- `relative-time-atomic-recorded-assertion-semantics-adoption1.md`
- `relative-time-atomic-recorded-assertion-semantics-proposal1.md`
- `relative-time-atomic-semantics-adoption-readiness1.md`
- `relative-time-atomic-wording-ambiguities-decision-preparation1.md`
- `relative-time-atomic-wording-decisions1.md`
- `relative-time-before-after-adoption-readiness1.md`
- `relative-time-before-after-semantic-direction-decision1.md`
- `relative-time-bounded-contract-proposal1.md`
- `relative-time-extensible-semantic-contract-research1.md`
- `relative-time-extensible-temporal-assertion-direction1.md`
- `temporal-next-phase-human-decision-gate1.md`
- `temporal-research-human-decision-preparation1.md`

These are shared model/Extension/dataset-wide decisions or research. Normative
authority remains in the applicable `spec/`, `extensions/`, and schema files;
this root placement does not make every record normative or Stable.

### Canonical sample stewardship, provenance, and E2R-wide release governance (31)

- `apollo-11-canonical-sample.md`
- `e2r-initial-public-release-closure-audit-result.md`
- `e2r-initial-public-release-content-sample-provenance-refresh-audit1-result.md`
- `e2r-initial-public-release-cross-app-follow-ups-reconciliation1-result.md`
- `e2r-initial-public-release-h2-circa-and-provenance-ui-readiness-audit1-result.md`
- `e2r-initial-public-release-provenance-authority-cross-app-access-implementation1-result.md`
- `e2r-initial-public-release-provenance-authority-reconciliation1-result.md`
- `e2r-initial-public-release-remaining-gates-reconciliation1-result.md`
- `e2r-initial-public-release-transaction-readiness-decision1-result.md`
- `e2r-public-sample-rights-provenance-and-release-decision-reconciliation1-result.md`
- `e2r-public-sample-role-decision-preparation1-result.md`
- `e2r-spec-initial-public-release-set-audit1-result.md`
- `e2r-spec-public-release-set-canonical-continuity-reconciliation1-result.md`
- `lighthouse-dashed-showcase-implementation-result.md`
- `lighthouse-dashed-showcase-semantic-decision.md`
- `lighthouse-presentation-and-legibility-revision-decision.md`
- `lighthouse-presentation-semantic-revision-implementation-result.md`
- `lighthouse-semantic-enrichment-decision.md`
- `pre-public-release-feature-reconsideration.md`
- `pre-public-release-placement-order-license-sequencing.md`
- `pre-public-release-push-deployment-readiness-audit.md`
- `public-sample-canonical-ownership-decision.md`
- `public-sample-coordinate-less-display-result.md`
- `public-sample-dataset-refresh-audit.md`
- `public-sample-dataset-refresh-formal-acceptance.md`
- `public-sample-dataset-refresh-implementation-result.md`
- `public-sample-h1-to-h2-migration-inventory-transaction-preparation1-result.md`
- `public-sample-h2-migration-and-self-description-current-state-refresh-result.md`
- `public-sample-provenance-formalization-result.md`
- `public-sample-provenance.md`
- `public-sample-semantics-provenance-decision.md`

These records govern canonical shared sample content, rights/provenance,
distribution, and E2R-wide release gates. They are not Cross-App merely
because multiple consumers use the samples. The public-write, release, and
acceptance boundaries remain unchanged.

### Shared test and distribution infrastructure (8)

- `e2r-dom-test-environment-distribution-decision.md`
- `e2r-dom-test-environment-first-publication-preflight-result.md`
- `e2r-dom-test-environment-first-release-readiness-result.md`
- `e2r-dom-test-environment-npm-publication-auth-result.md`
- `e2r-test-utils-retirement-result.md`
- `e2r-test-utils-role-audit-result.md`
- `e2r-workspace-retired-test-utils-cleanup1-result.md`
- `e2r-workspace-shared-test-infrastructure-audit1-result.md`

These own shared test/distribution package lifecycle and workspace
infrastructure, not Validator runtime. The two LiaisonScape-specific consumer
records are separately proposed in W5B.

### HOLD pending a clearer primary owner / responsibility split (2)

- `liaisonscape-validator-release-residual-audit.md` — joint application/release residual triage; the current record does not establish whether its primary owner is repository-wide release governance or Cross-App. Do not assign it by filename or move it with either lane.
- `self-description-final-acceptance-and-hub-action-public-update-readiness-result.md` — combines E2R Self-Description acceptance boundaries with Hub action-copy/public-update readiness. Keep HOLD until a responsibility split or primary owner is Human-selected; do not infer either a new Hub acceptance or a Self-Description status change.

The two HOLD documents are counted in the 70-file root set provisionally, not
because `docs/` is a mixed-document holding pen, but because moving them now
would require a new ownership or document-splitting decision. A Human may
choose to leave them at root while resolving that decision separately.

## `docs/documentation-ia/` assessment

Adopt `docs/documentation-ia/` as one **repository documentation governance /
information-architecture responsibility landing zone** for the bounded W5A
cohort. The folder name describes what those records govern, not whether they
are decisions, results, audits, or accepted. It introduces no second planning
authority: `roadmap.md` stays root and sole current-planning authority;
historical Roadmap chronology stays in `roadmap-history/`; dedicated evidence
records remain under their owning application/Cross-App locations.

The `docs/README.md` stays as the directly discoverable root Hub and should
point to a future `docs/documentation-ia/README.md` entry page rather than
duplicate a 77-record ledger. The Documentation Plan moves with W5A and keeps
the placement rules; its path is navigation only. A short directory README
should index the policy, decisions, current audit/preparation, and grouped
migration results without restating their detailed contents. No folder is
created in this checkpoint.

The candidate scope is deliberately wider than the `documentation-ia-*`
filename family: Roadmap outline/history migrations and Hybrid reconstruction
results also govern this repository's planning-document structure and are
part of the same governance lineage. Conversely, `roadmap.md` and actual
Core/Extension/Research/sample authorities do not move merely because this
IA work references them.

## Future root-placement validation gate

### Recommended mechanism

Use an **exact, reviewed root-path allowlist** in a non-Markdown machine
manifest under the accepted IA responsibility folder, for example
`docs/documentation-ia/root-placement-allowlist.json`. Seed it with exactly
the 70 root-retain paths listed above after the approved migration is
complete. Each entry should include a short responsibility family and a
positive root-retention rationale. Do not use filename prefixes, globs, a
legacy wildcard, or an implicit “all existing files are grandfathered” rule.

The validation script should:

1. enumerate regular `.md` files directly under `docs/` (case-insensitive
   extension check, exact repository path comparison);
2. reject every discovered path absent from the allowlist;
3. reject duplicate/malformed manifest paths and entries without a rationale;
4. reject allowlist entries whose root file no longer exists, forcing
   move/rename/removal transactions to update the manifest; and
5. report the unapproved and stale sets with actionable paths.

Wire it into `npm run validate` as a repository-documentation placement
check, with focused tests for allowed existing entries, a newly added root
Markdown file, a root rename/move, stale and duplicate manifest entries, and
content-only edits. The test should establish that files below approved
subfolders are outside this root-only gate.

### Scope and limits

The gate checks physical placement only. It cannot decide primary ownership,
normativity, status, acceptance, or whether a new exception is justified.
Adding a genuinely E2R-wide root document requires a reviewed allowlist entry
with a rationale; the gate does not bless that rationale. Existing root-file
content edits are not blocked because content governance is separate from
placement. A rename within root fails until both old and new paths are
reviewed in the manifest. A move into a subfolder fails on the stale old
entry until the manifest is updated. A file moved from a subfolder into root
fails as an unapproved path.

The allowlist is the exact exception mechanism, not a migration archive. Do
not retain old root names as permanent aliases. Do not include markdown
content hashes, status fields, authority claims, or inferred taxonomy in the
gate manifest. The validator must fail closed on unreadable or malformed
manifest data, but must not modify files.

### Placement baseline and legacy files

There is no blanket legacy exemption. After W5A–W5D execute, the allowlist
baseline is the 70-file set in this audit. Until those migrations and the
Human-selected HOLD dispositions are settled, implementing the gate would
either bless the present 158-file root or require a second baseline change;
therefore implement it in the same bounded checkpoint as the approved
placement wave, or immediately after that checkpoint using the final reviewed
root set. Root content edits remain allowed; path changes require manifest
maintenance.

## Reference and state observations

- Current root: 158 Markdown files; existing directories include the approved
  application/Cross-App zones, `guides/`, `roadmap-history/`, and `evidence/`.
- Existing `research/README.md` explicitly defines `research/exploratory/`;
  no new landing-zone taxonomy is needed for W5D.
- Workspace reference scan found: W5A five historical-session inbound
  references; W5B two session references plus in-folder links; W5C ten hits
  across E2R-SPEC Research/session/navigation and two Knowledge documents;
  W5D five referring E2R-SPEC files. Counts are scan observations, not a
  complete guarantee against unindexed external deep links.
- Application siblings and Knowledge were read-only. LiaisonScape and
  NarrativeLine worktrees are dirty; no write is part of this checkpoint.
  Knowledge currently has an unrelated dirty browser-diagnostic playbook;
  the W5C references require a fresh conflict check and explicit write
  approval at execution.
- Wave 4's 15 Seed-133 JSON diagnostic targets and the one absent visual
  evidence index remain unresolved. This audit did not generate, acquire,
  replace, repair, or reclassify them.
- `work/` was not inspected, read, or modified.

## Human decision-ready next checkpoint

Recommended sequence:

1. Approve W5A and W5B as an E2R-SPEC-only governance/application path wave.
2. Approve W5D as a separate Research-placement packet, including Research
   catalog path metadata and E2R-SPEC reference repair.
3. Approve W5C only with explicit path-only write authorization for the two
   exact Knowledge documents; otherwise HOLD W5C and proceed with the other
   cohorts.
4. Resolve the two HOLD documents independently; do not make their placement
   a prerequisite for unrelated approved cohorts.
5. Once the final root set is approved, implement the exact allowlist gate
   and tests in `npm run validate`. It should be a placement guard only.

These can be combined under one maintenance-wave label, but use separate
commits or clearly bounded commit units for the IA/app move, Research
catalog/reference move, Knowledge repairs, and gate implementation. No
actual move, new folder creation, gate code, status reconciliation, or
validation-package change was made here.
