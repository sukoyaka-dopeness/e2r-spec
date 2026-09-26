# Application / Workstream Landing-Zone Migration Preparation 1

- Date: 2026-09-25
- Status: Preparation only; no application/workstream paths changed
- Scope: Identify bounded candidate cohorts for the five Human-approved
  application/workstream landing zones in `docs/`.
- Authority: Human-approved narrow-hybrid foldering decision; `docs/roadmap.md`
  remains the sole current-planning authority.
- Related records: [Documentation Plan](documentation-plan.md),
  [Documentation Hub](README.md),
  [Guides path migration result](documentation-ia-guides-path-migration1-result.md)

Subsequent disposition: Human selected the two-file NarrativeLine Event
Identity cohort, which was moved without content or status changes. See the
[bounded migration result](documentation-ia-narrativeline-event-identity-path-migration1-result.md).

The Hub Public Entry IA and Milestone 2 acceptance cohort was later selected
and moved without content or status changes; see its
[bounded migration result](documentation-ia-hub-public-entry-path-migration1-result.md).

## Inventory and method

At this inspection, `docs/` contains 710 Markdown files: 700 directly in the
root, six under `guides/`, and four under `roadmap-history/`; `evidence/`
contains a JSON manifest and no Markdown files. The only established subfolders
remain `guides/`, `roadmap-history/`, and `evidence/`.

Candidate groups were selected by document scope, stated authority/status,
related records, and actual Markdown links—not by filename prefix alone. A
read-only scan of canonical workspace Markdown resolved direct links to the
candidate source paths below. Counts are link instances (not unique consumers);
paths listed are examples of inbound locations. This scan does not establish
that external deep links or other consumers do not exist.

The observed sibling worktrees were not modified. NarrativeLine and
LiaisonScape had unrelated dirty files; Hub and Validator were clean at
inspection. No dirty sibling evidence was treated as authority for document
status.

## Candidate cohorts

### `docs/liaisonscape/` — Pin persistence and application integration evidence

Proposed source → destination paths:

- `docs/liaisonscape-pin-persistence-authority-contract2-result.md` →
  `docs/liaisonscape/liaisonscape-pin-persistence-authority-contract2-result.md`
- `docs/liaisonscape-pin-app-working-state-save-integration1-result.md` →
  `docs/liaisonscape/liaisonscape-pin-app-working-state-save-integration1-result.md`
- `docs/liaisonscape-pin-ui1-result.md` →
  `docs/liaisonscape/liaisonscape-pin-ui1-result.md`

These records concern one LiaisonScape Pin responsibility, while preserving
distinct dispositions: persistence contract closed, working-state/atomic Save
integration established with Pin UI still open, and the first visual candidate
rejected. Moving them would not reconcile those states or change the Pin
contract's maturity. Direct-reference counts were 7, 3, and 1 respectively;
the inbound set includes `roadmap.md`, the existing broad Layout / Auto Layout
chronology, and Pin/reconstruction evidence. **Risk: medium-high** because
current Roadmap and historical/evidence links must all be repaired together.

Keep the application-wide [relationship graph design](../applications/relationship-graph-app.md)
and current Initial Layout coordination in their existing authorities; they
are not part of this Pin evidence cohort.

### `docs/narrativeline/` — Event identity design and accepted evidence

- `docs/narrativeline-event-identity-implementation-design.md` →
  `docs/narrativeline/narrativeline-event-identity-implementation-design.md`
- `docs/narrativeline-event-identity-formal-acceptance.md` →
  `docs/narrativeline/narrativeline-event-identity-formal-acceptance.md`

The pair has a clear NarrativeLine runtime responsibility. The formal
acceptance is `FORMALLY ACCEPTED / CURRENT SOURCE REVISION`; it retains
separate boundaries for Relation blocker presentation and Capability Handoff.
The design has no direct inbound Markdown link in the scanned workspace; the
acceptance has one, from `roadmap.md`. No direct inbound Markdown link from a
canonical sibling repository was found. **Risk: lowest among these candidates**
for workspace link repair, though unobserved external links remain possible.
This is the recommended first actual migration cohort: two files, one Roadmap
link repair, and no need to move the Roadmap or merge the design and acceptance.

Other NarrativeLine records concerning shared Handoff, Locale, cross-app
deletion, public release, or cross-application parity should not be swept into
this app-specific cohort merely because they mention NarrativeLine.

### `docs/hub/` — Public entry-point IA and bounded Milestone 2 acceptance

- `docs/e2r-hub-public-entry-point-information-architecture.md` →
  `docs/hub/e2r-hub-public-entry-point-information-architecture.md`
- `docs/e2r-hub-public-entry-point-milestone-2-acceptance.md` →
  `docs/hub/e2r-hub-public-entry-point-milestone-2-acceptance.md`

The first is an accepted, non-normative Hub IA checkpoint; the second records
bounded `ACCEPTED` implementation evidence. Direct inbound counts were 1 and
3, all from `roadmap.md`. **Risk: low-to-medium.** Repair those Roadmap links
if selected. Preserve the E2R-wide milestone map as canonical; these files
remain a Hub-specific supplement and must not imply E2R-wide milestone
completion. Do not include the Hub precomputation hypothesis: exploratory
research ownership needs separate review and must not be assigned from its
filename.

### `docs/validator/` — Production Validator Extension integration lifecycle

- `docs/production-validator-extension-integration-design.md` →
  `docs/validator/production-validator-extension-integration-design.md`
- `docs/production-validator-extension-integration-acceptance.md` →
  `docs/validator/production-validator-extension-integration-acceptance.md`
- `docs/production-validator-extension-integration-result.md` →
  `docs/validator/production-validator-extension-integration-result.md`

This is a Validator-owned integration responsibility, not a new schema
authority. The design says `BLOCKED — SPEC DECISION REQUIRED`, while later
acceptance/result documents say `ACCEPTED / COMPLETE`; that progression must
remain visible and none of its status language may be rewritten as a side
effect of moving. Direct Markdown link counts were 0, 3, and 3; links come
from the Roadmap and LiaisonScape presentation reconciliation. Additional
plain-path references occur in the acceptance/result pair and
`public-sample-dataset-refresh-audit.md`. **Risk: medium.** Include all three
only as a path cohort, and repair both links and plain path citations; do not
decide whether the earlier design's blocked statement is superseded here.

Keep `schemas/`, normative Extension definitions, and the Validator
repository's own source of behavior in their existing locations.

### `docs/cross-app/` — Current Dataset Handoff design-contract packet

- `docs/cross-app-capability-handoff-current-dataset-transfer-design.md` →
  `docs/cross-app/cross-app-capability-handoff-current-dataset-transfer-design.md`
- `docs/cross-app-capability-handoff-url-transport-contract.md` →
  `docs/cross-app/cross-app-capability-handoff-url-transport-contract.md`
- `docs/cross-app-capability-handoff-target-contract.md` →
  `docs/cross-app/cross-app-capability-handoff-target-contract.md`
- `docs/cross-app-capability-handoff-sender-navigation-authorization.md` →
  `docs/cross-app/cross-app-capability-handoff-sender-navigation-authorization.md`

The first three are accepted design/transport contracts that explicitly say
implementation is not authorized; the sender navigation record is a separate
authorization boundary. This is a coherent cross-application design packet,
not an application-owned implementation group. Direct link counts were 7, 7,
5, and 2. Inbound links include `roadmap-history/release-and-cross-app-chronology.md`,
the Handoff contracts themselves, and LiaisonScape Handoff implementation
records. **Risk: high** because links among the four files and across the
cross-app/application boundary must be rewritten and verified as a set. Keep
runtime implementations and public acceptance records out unless a later
manifest shows they are needed for a different bounded cohort.

## Retain at `docs/` root or existing homes

- `roadmap.md`, E2R-wide milestones, documentation IA/policy decisions, and
  this preparation are cross-cutting authorities; the Roadmap is not moved.
- Public release, licensing/provenance, canonical sample, and mixed
  cross-application status documents remain at root unless a later cohort has
  a single, evidence-backed responsibility boundary. Do not force them into
  an application folder.
- `applications/relationship-graph-app.md` remains the existing application
  design authority; a LiaisonScape landing zone does not replace it.
- Normative Core/Extension/schema material remains in its existing locations.
- Exploratory Research and session records keep their existing top-level
  `research/` and `sessions/` homes. This preparation creates no
  `docs/research/`.
- Existing `guides/`, `roadmap-history/`, and `evidence/` responsibilities do
  not change. No document is historicalized, merged, deleted, or assigned a
  new status here.

## Human decision requested

For the first actual application/workstream path migration, approve or reject
the recommended two-file NarrativeLine Event Identity cohort. The other four
candidate manifests are preparation options, not implied authorization. Any
selected move should receive an exact pre-migration reference rescan and
path-specific validation. Workspace scan results do not make claims about the
absence of external deep links.

No application/workstream document was moved in this preparation.

### Subsequent bounded migration disposition — Validator integration

Human later selected only the Production Validator Extension integration
design, acceptance, and result records for `docs/validator/`. The three
documents were moved separately without reconciling or rewriting their
checkpoint statuses. See the [bounded migration result](documentation-ia-validator-integration-path-migration1-result.md).

### Subsequent bounded migration disposition — LiaisonScape Pin evidence

Human later selected only the Pin persistence authority contract result, Pin
working-state / Save integration result, and Pin UI 1 result for
`docs/liaisonscape/`. They remain separate records with their original
dispositions and were moved without status reconciliation. See the
[bounded migration result](documentation-ia-liaisonscape-pin-path-migration1-result.md).

### Subsequent bounded migration disposition — Cross-App Current Dataset Handoff

Human later selected the four Current Dataset Handoff design-contract and
sender-navigation authorization records for `docs/cross-app/`. The first
three contract records and the sender authorization remain separate in scope;
no runtime implementation or acceptance record moved. See the
[bounded migration result](documentation-ia-cross-app-current-dataset-handoff-path-migration1-result.md).
