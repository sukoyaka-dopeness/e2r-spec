# Post-Wave-5 Root Classification and Placement Preparation 1

- Date: 2026-09-26
- Status: **AUDIT COMPLETE / PATH MIGRATION AND NEW-FOLDER ADOPTION NOT AUTHORIZED BY THIS RECORD**
- Scope: Fresh classification of every immediate-root Markdown file in `docs/` after Wave 5; proposed final root set, exact responsibility-based migration manifests, reference-risk summary, and root-ingress gate baseline.
- Authority: Preparation only. `docs/roadmap.md` remains the sole current-planning authority. No file is moved, renamed, split, deleted, or reclassified by this audit.
- Related records: [Documentation Hub](../README.md), [Documentation Plan](documentation-plan.md), [Wave 5 migration result](documentation-ia-wave5-final-residual-placement-migration1-result.md), and [prior root classification / gate audit](documentation-ia-final-root-classification-and-ingress-gate-audit1.md).

## Finding

At HEAD `a223868042ecf4a98ee16e7b3e8a513ebe373a85`, a fresh filesystem census
found **70 Markdown files directly under `docs/`**. The prior 70-file positive
root-retention set is not treated as a default. This audit recommends retaining
five high-discoverability, repository-level entry/guidance documents and
placing the other 65 files by primary responsibility in nine cohorts. Two
documents previously marked HOLD now have a recommended responsibility home;
that is a placement proposal, not a status reconciliation.

If Human approves all proposed destinations, the immediate `docs/` root would
contain these five files:

| Root file | Positive reason to remain directly discoverable |
|---|---|
| `README.md` | Stable Documentation Hub and reader entry point, linked from the repository README. |
| `roadmap.md` | Sole current-planning authority and entry point. |
| `application-design-principles.md` | High-level E2R-spec-wide principles for application consumers; not one application's design/evidence. |
| `application-recommendations.md` | Shared, non-normative recommendations for E2R consumers; normative requirements remain in specification authorities. |
| `identifier.md` | Repository-wide identifier recommendations used across the E2R model and consumers. |

These are the recommended root exceptions, not an implemented allowlist. A
root-placement gate must wait until Human approves the destinations and the
actual post-migration tree is verified.

## Proposed exact migration manifests

Every item below maps from `docs/<basename>` to the stated destination with
the basename unchanged. Manifests are claims about current primary
responsibility, not endorsements of any status or maturity language in the
documents. The proposed new directories are responsibility homes, not
document-type or status taxonomies. They do not become authorities over the
specification, Roadmap, or dedicated evidence.

### P1 — Canonical public-sample stewardship (20) → `docs/public-samples/` (new)

This family owns canonical sample content, sample-specific semantic decisions,
sample refresh/migration, and the central sample provenance record. Public
release authorization remains a separate responsibility in P2. The
Self-Description JSON remains informative dogfood; this placement does not
publish it or make it normative.

- `apollo-11-canonical-sample.md`
- `e2r-initial-public-release-content-sample-provenance-refresh-audit1-result.md`
- `e2r-initial-public-release-provenance-authority-reconciliation1-result.md`
- `e2r-public-sample-role-decision-preparation1-result.md`
- `lighthouse-dashed-showcase-implementation-result.md`
- `lighthouse-dashed-showcase-semantic-decision.md`
- `lighthouse-presentation-and-legibility-revision-decision.md`
- `lighthouse-presentation-semantic-revision-implementation-result.md`
- `lighthouse-semantic-enrichment-decision.md`
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
- `e2r-self-description.md`

### P2 — E2R release governance and cross-repository release sequencing (12) → `docs/release-governance/` (new)

These records own E2R-wide release-set, publication-readiness, gate-sequencing,
and release-residual triage. The folder would not authorize a future release,
publication, push, deployment, or sample change. `liaisonscape-validator-release-residual-audit.md`, previously HOLD, fits here because its primary output is a cross-repository release-residual triage and recommended sequence; its embedded LiaisonScape and Validator findings keep their original scope and dated status.

- `e2r-initial-public-release-closure-audit-result.md`
- `e2r-initial-public-release-cross-app-follow-ups-reconciliation1-result.md`
- `e2r-initial-public-release-h2-circa-and-provenance-ui-readiness-audit1-result.md`
- `e2r-initial-public-release-remaining-gates-reconciliation1-result.md`
- `e2r-initial-public-release-transaction-readiness-decision1-result.md`
- `e2r-public-sample-rights-provenance-and-release-decision-reconciliation1-result.md`
- `e2r-spec-initial-public-release-set-audit1-result.md`
- `e2r-spec-public-release-set-canonical-continuity-reconciliation1-result.md`
- `pre-public-release-feature-reconsideration.md`
- `pre-public-release-placement-order-license-sequencing.md`
- `pre-public-release-push-deployment-readiness-audit.md`
- `liaisonscape-validator-release-residual-audit.md`

This is distinct from P1: P1 documents the sample and its provenance; P2
documents which release gates and authorizations remain or were evaluated.
Historical `READY`, `PENDING`, or `NOT AUTHORIZED` language remains attached
to the original checkpoint and must not be interpreted as current authorization.

### P3 — Temporal and History/Relative-Time design evidence (20) → `docs/temporal/` (new)

This responsibility home groups non-normative decisions, proposals, readiness,
and research concerning temporal data capabilities. The History 2 and Relative
Time lanes remain distinct inside the folder. Moving them must not conflate
History 2.0.0 Candidate maturity with the adopted Stable `position-circa`
profile, promote broader authoring, or move normative authority out of
`extensions/`, schemas, or registered artifacts.

History 2 lane (7):

- `history-2-dataset-wide-h1-to-h2-upgrade-scope-closure-result.md`
- `history-2-option2-normative-design-decision-packet.md`
- `history-2-position-circa-human-scope-decision-preparation-result.md`
- `history-2-position-circa-stable-profile-implementation-result.md`
- `history-2-stable-profile-cross-repository-publication-readiness-audit.md`
- `history-2-stable-registration-option2-option3-decision-preparation-result.md`
- `history-2-user-facing-authoring-scope-result.md`

Relative Time lane (11):

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

Shared temporal planning/research (2):

- `temporal-next-phase-human-decision-gate1.md`
- `temporal-research-human-decision-preparation1.md`

### P4 — Shared test-environment and test-utility infrastructure (8) → `docs/test-infrastructure/` (new)

These documents concern the shared DOM test environment, test-utils role and
retirement, package publication, and workspace test infrastructure. This is
not Validator runtime documentation and does not change any package, test
implementation, or publication state.

- `e2r-dom-test-environment-distribution-decision.md`
- `e2r-dom-test-environment-first-publication-preflight-result.md`
- `e2r-dom-test-environment-first-release-readiness-result.md`
- `e2r-dom-test-environment-npm-publication-auth-result.md`
- `e2r-test-utils-retirement-result.md`
- `e2r-test-utils-role-audit-result.md`
- `e2r-workspace-retired-test-utils-cleanup1-result.md`
- `e2r-workspace-shared-test-infrastructure-audit1-result.md`

### P5 — Cross-application provenance access implementation (1) → `docs/cross-app/`

- `e2r-initial-public-release-provenance-authority-cross-app-access-implementation1-result.md`

Although this record is part of the public-sample provenance lineage, its
primary implementation responsibility is exposing the shared provenance
authority through Hub, NarrativeLine, and LiaisonScape entry points. Place it
with cross-application access evidence; keep the canonical provenance policy
in P1. This does not establish public release or new cross-app authorization.

### P6 — Early visual evidence process policy (1) → `docs/evidence/` (existing)

- `visual-evidence-early-smoke-check-policy.md`

The policy governs how visual evidence workflows inspect an early trustworthy
output before expensive capture/review. It is process guidance for the existing
evidence responsibility, not a product acceptance result and not a change to
the evidence artifacts' authority.

### P7 — Application-suite capability direction (1) → `docs/application-suite/` (new)

- `e2r-pwa-and-offline-capability-roadmap1-result.md`

This record owns the suite-level distinction between application-specific
PWA/offline capabilities and the absence of a suite-wide offline promise. It
does not define a shared runtime contract and is not a release blocker. A
dedicated responsibility folder is preferable to misplacing it in
`cross-app/`, `hub/`, or an individual application folder.

### P8 — Dataset semantic-validation policy (1) → `docs/dataset-validation/` (new)

- `presentation-orphan-relation-validation-policy-decision.md`

This decision owns the E2R Presentation orphan-relation validation boundary:
warning rather than Dataset invalidation, preserve-first behavior, and no
automatic repair. It is broader than Validator package integration but is not
a Core/Extension normative change or an inter-application contract. The
proposed folder names that responsibility; Validator implementation evidence
remains in `docs/validator/` and the specification remains normative.

### P9 — Hub Self-Description action-copy readiness (1) → `docs/hub/`

- `self-description-final-acceptance-and-hub-action-public-update-readiness-result.md`

This was previously HOLD because it contains two related status boundaries.
The current document separates them explicitly: Self-Description acceptance
is closed within its stated non-normative/Draft boundary, while the Hub
action-copy candidate is ready for a public update only after separate Human
public-write approval. Its primary operational consequence is Hub action-copy
readiness, so `docs/hub/` is the recommended physical home. Do not treat the
path as Hub acceptance of the Dataset, public deployment authorization, or
closure of Initial Public Release.

## Root accounting

| Classification | Count |
|---|---:|
| Recommended root retention | 5 |
| Proposed responsibility-folder migrations (P1–P9) | 65 |
| Current immediate-root Markdown total | 70 |

There is no unresolved per-file ownership HOLD in this recommendation. The
new-folder names in P1–P4 and P7–P8 remain Human adoption decisions; no folder
is created here. Human may approve or reject a cohort independently without
changing any document's recorded status. If a proposed new responsibility
home is rejected, decide a positive alternative before a later move rather
than silently leaving the file at root by default.

## Reference graph and path-risk

A literal-basename scan was run over the current E2R workspace, including the
application siblings and `ai-knowledge` as read-only roots, while excluding
the current source file itself, generated dependencies, and `work/`. It found
no direct basename references to these 65 candidates in a sibling repository
or Knowledge. This is only a workspace scan observation; it does not establish
that external deep links or consumers do not exist.

Within E2R-SPEC, the candidates have dense links among themselves and inbound
references from `docs/roadmap.md`, `docs/README.md`, `docs/documentation-ia/`,
`docs/evidence/`, application-folder records, `research/`, `sessions/`,
`examples/README.md`, the repository `README.md` and `LICENSE.md`, and
`spec/extension-profile-maturity-registry.json`. Specific visible link groups
include:

- Sample and provenance records are linked from the Roadmap, repository and
  examples navigation, `LICENSE.md`, `research/research-catalog.json`, and
  other sample records. Preserve the canonical provenance destination and
  distinguish sample stewardship from release authorization.
- Temporal records are mutually linked and referenced from the Roadmap,
  Session 0094, `roadmap-history/release-and-cross-app-chronology.md`, and the
  History 2 registry. Repair actual path-bearing links/registry references in
  a future approved move; retain old source paths when they are historical
  manifest/provenance evidence rather than live pointers.
- Test-infrastructure records link to one another and are referenced by the
  Roadmap and prior audit. Keep shared package lifecycle evidence together;
  do not move application-specific consumer pilots with it.
- The orphan-policy decision is referenced by Validator integration records,
  Public Sample refresh, and Lighthouse records. The visual smoke policy is
  referenced by the Roadmap and LiaisonScape evidence. These need path-only
  repairs if their proposed destinations are approved.
- The PWA/offline direction is linked from the Roadmap. The Hub readiness
  result is linked from sample/provenance navigation. Preserve those
  references without changing current planning or public-write status.
- This and earlier IA audits contain source-path inventories as evidence.
  Do not rewrite those historical inventories as if they were live links.

Before any actual migration, repeat a case-insensitive Markdown and plain-path
scan against the then-current E2R workspace and all siblings. Sibling and
Knowledge repositories are dirty at this audit (including LiaisonScape,
NarrativeLine, and one Knowledge playbook); no sibling write is authorized.
If a newly discovered direct reference requires a sibling edit, return that
repair for explicit authorization. Preserve any externally consumed old paths
unless Human separately adopts a compatibility/redirect policy.

## Wave packaging recommendation

The nine P1–P9 cohorts can be approved as one administrative migration wave,
but should execute as separate responsibility packets so path repairs and
status boundaries are reviewable. P1/P2 are a natural paired sample/release
packet with explicit separation; P3 and P4 are dense, internally linked
families; P5/P6/P9 use already-existing destinations; and P7/P8 require
Human's explicit acceptance of new responsibility-folder names. A single
commit may still be appropriate if all paths and links are migrated atomically
and validation succeeds. Do not split, combine, or rewrite source documents
to make the foldering easier.

No migration is performed by this preparation. Do not create destination
directories until the exact cohort and any new folder names are approved.

## Root-ingress gate baseline for a later checkpoint

If Human approves this classification and a later checkpoint completes the
path moves, seed a machine-readable exact allowlist from the **actual** root
tree, expected here to be the five files listed above. Give every allowed path
a short positive root-placement rationale. The gate should reject new
unlisted immediate-root Markdown files and stale/duplicate/malformed allowlist
entries; it should not inspect content, status, authority, or files below
subfolders. Content edits to an allowed root file remain valid. A root rename
or move must update the allowlist in the same reviewed change. Test the exact
set comparison and failure cases, then wire the placement check into the
existing validation command only after the migration baseline is approved.

This audit does not implement that gate, seed the allowlist, create any new
folder, change `docs/roadmap.md`, or authorize path compatibility policy.
