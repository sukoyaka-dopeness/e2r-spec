# Roadmap Slimming Audit 1

Date: 2026-09-24

Status: **READ-ONLY AUDIT / NON-NORMATIVE — NO SLIMMING MIGRATION AUTHORIZED**

## Authority and scope

This audit inspects `docs/roadmap.md` as it exists after commit
`a0d5524fab7363c03364118cfa6e8665c8bf8844` (`docs: migrate bounded roadmap
chronology`). It applies the Human-selected Roadmap-first structure direction
and the bounded chronology migration result. `docs/roadmap.md` remains the
single current-planning authority; `docs/roadmap-history/legacy-chronology.md`
is the bounded preservation unit for the earlier workspace-migration block,
not a general append-only archive. Dedicated decision, result, acceptance,
audit, and research documents retain their own authority/evidence.

This record is an audit and candidate manifest only. It does not authorize
moving, deleting, shortening, summarizing, renaming, or rewriting roadmap
content; creating a history unit; or changing anchors or links. A later
Human-reviewed migration manifest must identify complete source headings,
destination, provenance, current/superseding evidence, and reference updates.
The wider `docs/` taxonomy remains deferred.

## Inspection baseline

At the audited baseline (`a0d5524`), `docs/roadmap.md` contains **12,262 lines
and 571 ATX headings** (1 H1, 28 H2, 522 H3, 20 H4), and there are **655
Markdown files directly under `docs/`**. The six-line current-state pointer
added by this audit makes the working roadmap 12,268 lines; heading counts
are unchanged, and the new audit record makes the root Markdown count 656.
The file is not simply an archive: it combines a
short current status/navigation surface, active and deferred planning, durable
policy, completed checkpoint summaries, and a very large dated implementation
and experiment ledger. In particular, the H2 sections `Roadmap
reconstruction checkpoint — current canonical summary` and `Current Initial
Layout / Parallel Presentation Coordination (2026-09-13)` are mixed regions,
not safe whole-section extraction units.

The current status index at `## Current status index — 2026-09-22` and the
later `2026-09-23 session status inventory` are the strongest current-state
navigation surfaces. The index already carries compact statuses and links;
the audit does not recommend duplicating its detail. The current explicit
Human Check B disposition is qualified closure, not an unqualified release
claim: retain the qualification and genuinely open follow-ups. A local
LiaisonScape working tree was dirty during read-only cross-repository status
inspection; no files there were read as changed authority or modified. This
audit therefore treats committed/dedicated E2R records and the roadmap's
Human-reviewed status as evidence, not that sibling's uncommitted state.

## Classification key and manifest reading rule

- **KEEP** — current planning, durable operating authority, active/deferred
  work, pending Human decisions, or concise context needed to interpret them.
- **COMPRESS** — retain current significance in the roadmap as a short
  statement and link; detailed evidence already has, or should continue to
  have, a dedicated authority document.
- **MOVE TO HISTORY** — a demonstrably superseded/completed roadmap snapshot
  whose provenance should be retained outside current planning. The evidence
  source itself is not thereby moved or deleted.
- **HOLD / HUMAN CLASSIFICATION** — a mixed or ambiguous parent/subsection
  where a safe boundary cannot be selected from this audit alone.

The table classifies every H2 section by heading identity. For a mixed H2,
the named H3 ranges below give candidate child-level classifications; all
unlisted content in that H2 remains **HOLD**, not implicitly historical.
Classification is a review recommendation, not migration authorization.
Line numbers are inspection aids only; heading text and parent path identify
the material.

At the H3 work-item level, the audit's rough scale is **KEEP about 80–110**,
**COMPRESS about 250–320**, **MOVE TO HISTORY about 55–85**, and **HOLD about
40–100** headings. These ranges are not independently additive or a final
machine-generated count: mixed-region children are conservatively held unless
their named group is called out, and later evidence/link review may change a
child's class. The 20 H4 headings follow their parent H3 classification unless
explicitly identified as an exception. The 28 H2 headings are the complete
parent manifest below, not additional work-item counts.

## Whole-roadmap H2 manifest

| Roadmap heading identity | Audit classification | Basis / candidate treatment |
| --- | --- | --- |
| `# E2R Medium- and Long-term Roadmap` | KEEP | Current planning document identity. |
| `## Purpose` | KEEP | Durable purpose; the completed workspace-placement child is a candidate to COMPRESS against the chronology migration result. |
| `## Operating principles` | KEEP | Current authority, maintenance, and planning rules. |
| `## Current status index — 2026-09-22` | KEEP / mixed | Keep status rows, current risks, pending decisions, and maintenance rules. Compress the detailed `Post-release LiaisonScape / NarrativeLine observation audit` under its dedicated audit/result links; preserve current findings and pending Human decisions. Keep `Historical workspace clone and evidence hygiene baseline` as a short pointer to `roadmap-history/legacy-chronology.md`. |
| `## Current baseline` | HOLD / mixed | Keep stable specification foundation and current policy. COMPRESS closed implementation evidence with dedicated results. Audit the dated roadmap/status synchronization and old agenda snapshots individually; do not move the parent wholesale. |
| `## Completed design milestone 1: Specification Extension redesign` | COMPRESS | Closed milestone; preserve concise outcome and link to authoritative design/completion evidence. |
| `## Completed implementation milestone 2: Validator interoperability model` | COMPRESS | Closed milestone; keep any still-current baseline implication and link to the dedicated Validator evidence. |
| `## Application evidence track` | HOLD / mixed | COMPRESS completed coordinate/draft/validator milestones; KEEP the still-relevant layout-persistence design and genuinely open cross-application work. Confirm each status against its result document before migration. |
| `## Initial Public Release critical path` | MOVE TO HISTORY / COMPRESS | Its old ordered release path is superseded by the dedicated Initial Public Release closure/reconciliation records. Keep only current post-release obligations in the status index. |
| `## Research / post-release growth` | HOLD / mixed | KEEP current research priorities, selected directions, active/deferred work. COMPRESS repeated decision/evidence detail to dedicated Relative Time, History, and application research documents. The Relative Time → IA sequence is completed through atomic adoption/state sync; retain its current next-workstream status, not its old pending snapshots. |
| `## Research priority` | KEEP | Current prioritization and cross-cutting research context. |
| `## Application maintenance` | KEEP | Ongoing maintenance planning; verify individual status during any later migration. |
| `## E2R ecosystem hub / portal track` | HOLD / mixed | Keep current/open hub work and dependencies; compress completed milestones against dedicated acceptance records. |
| `## Canonical sample follow-up` | KEEP | Current sample follow-up planning; retain any open dependency. |
| `## Sample and external vocabulary follow-up` | KEEP | Current follow-up direction, subject to status verification in migration. |
| `## Application UX maintenance follow-up` | HOLD / mixed | Keep open concepts and pending decisions. Compress accepted/closed deletion, hidden-event awareness, and UX checkpoints to dedicated evidence. |
| `## Proposed E2R-wide milestones` | KEEP | Explicitly exploratory future planning; keep its non-active status clear. |
| `## Evidence gates for candidate Extensions` | KEEP | Current gate/authority guidance. |
| `## Explicitly deferred` | KEEP | Deferred is not historical; preserve still-valid deferrals. |
| `## Current public-release execution priority (2026-08-22)` | MOVE TO HISTORY | Dated priority snapshot is superseded by the later release closure and current post-release index. Preserve as historical evidence if moved. |
| `## Cross-App Shell follow-up record (2026-08-23)` | COMPRESS / MOVE TO HISTORY | Completed dated sequence with dedicated cross-app evidence; retain current outcomes/remaining work as short links, not the obsolete sequence. |
| `## LiaisonScape residual UX / quality follow-up (2026-08-23)` | HOLD / mixed | COMPRESS accepted/closed UX results; KEEP minimum-width/observation boundaries and unresolved manual-review items until individually reconciled. |
| `## Active follow-up ledger — 2026-08-25` | HOLD / mixed | Keep active decisions and deferred tasks; compress accepted LS-M2A, fixed metadata alignment, and superseded execution order to current summary/evidence links. |
| `## Immediate sequence` | MOVE TO HISTORY | Old ordered snapshot; later current indexes and workstream status supersede it. |
| `## Cross-App Locale consumer readiness checkpoint (2026-08-23)` | COMPRESS / MOVE TO HISTORY | Dated readiness progression is superseded by later execution/closure evidence; retain only any currently open dependency. |
| `## Deferred Cross-App safety and test-infrastructure follow-ups (2026-08-24)` | KEEP | Explicit deferred work remains planning, not history. |
| `## Cross-App Locale execution update (2026-08-24)` | COMPRESS / MOVE TO HISTORY | Detailed dated execution and accepted results have dedicated evidence; preserve outstanding follow-up only if still open in current status. |
| `## Roadmap reconstruction checkpoint — current canonical summary` | HOLD / mixed | Retain the actual current summary and current/open dependencies. Child candidates are separately classified below; never extract this H2 as one block. |
| `## Current Initial Layout / Parallel Presentation Coordination (2026-09-13)` | HOLD / mixed | Keep current directions, Human Check B qualified status, pending decisions, and active quality/diagnostic follow-ups. Compress completed experiments and accepted implementation trail only after linking exact result authority. Never move the H2 as a block. |

## Child-level candidates in mixed regions

### `## Current status index — 2026-09-22`

- **KEEP:** status rows, current release/maintenance posture, explicit open
  decisions, `How to maintain current and historical entries`.
- **COMPRESS:** detailed post-release observation measurements and accepted
  audit findings, retaining the conclusion, current limits, and links to the
  LiaisonScape/NarrativeLine audit and result evidence.
- **KEEP as pointer:** the historical workspace/evidence-hygiene entry, linked
  to `roadmap-history/README.md` and `roadmap-history/legacy-chronology.md`.
- **HOLD:** any observation that is not clearly accepted, still open, or
  tied to the current release status. A dated observation is not enough to
  classify it.

### `## Current baseline`, completed milestones, and `## Application evidence track`

- **KEEP:** `Stable specification foundation`; current licensing/standards
  decisions in short form with links; any still-operative baseline.
- **COMPRESS:** `Architecture work completed`, dated Agenda 1–9 progress,
  application/tooling snapshots, Dataset Replacement Safety implementation,
  NarrativeLine Focus Phase 2 closure, completed Specification Extension and
  Validator milestones, Coordinate prototype/draft/Validator milestones.
  Representative dedicated authorities include
  `dataset-replacement-safety-liaison-scape-implementation-result.md`,
  `e2r-narrativeline-documentation-closure-reconciliation1-result.md`, and
  the relevant coordinate draft/Validator acceptance evidence.
- **HOLD:** `Layout persistence experiment` and `Cross-application checkpoint`
  until open/deferred details and their current owner/dependency are reconciled.

### `## Research / post-release growth`

- **KEEP:** `Multidimensional History / Temporal Perspectives`; current causal
  and Relative Time research direction; the adopted extensible-vocabulary
  direction and current atomic adoption status; current Documentation IA
  direction, chronology migration status, and this audit's existence as a
  pointer; live name/group/layout research and explicit deferrals.
- **COMPRESS:** repeated proposal, decision, status, and evidence detail where
  dedicated records exist (for example the Relative Time adoption record and
  semantic-contract Research). Keep the link and current status, not a second
  copy of the decision.
- **MOVE TO HISTORY:** the completed Relative Time → IA sequencing snapshot
  and its superseded “migration preparation” state only as dated chronology;
  preserve the current state in the current Roadmap-first entries. Do not
  rewrite those snapshots in place.
- **HOLD:** any research item whose “future”, “candidate”, or “deferred” status
  has no later authority proving completion or supersession.

### `## Application UX maintenance follow-up`, residual UX, and active ledger

- **KEEP:** future application surface concepts, unresolved UX/accessibility
  questions, valid minimum-width/observation limits, deferred cross-app
  identity work, and pending Human decisions.
- **COMPRESS:** accepted Cross-App Relation Deletion ownership/visibility,
  LS-M2D Hidden Event-related Relation awareness, NarrativeLine Workspace More
  and Timeline Back-to-Top acceptance, LS-M2A acceptance, and accepted
  metadata alignment. Link to the corresponding acceptance/result evidence;
  do not repeat checklists or test logs.
- **MOVE TO HISTORY:** old `Current execution order`, `Planned visual
  follow-ups before public release`, and `Immediate sequence` only where a
  later accepted/current status proves the snapshot is superseded. Keep
  unresolved items as current planning.
- **HOLD:** object identity direction and modernization ledger until each
  entry's implementation/defer status is verified against its own authority.

### `## Roadmap reconstruction checkpoint — current canonical summary`

- **KEEP:** `Completed / synchronized` only as a brief orientation if it
  remains useful; `Current cross-app deletion status` as a concise status with
  the capability-closure link; `Open / deferred`; current execution order and
  current application capability/ownership policies that remain operative.
- **COMPRESS / MOVE TO HISTORY:** the completed XAPP-REL-DELETE3–6
  acceptance/closure progression and the completed Cross-App capability
  Handoff1–12 sequence. Preserve the closure result and link to
  `cross-app-relation-deletion-capability-closure.md` and the relevant
  capability handoff evidence. Do not remove still-open later capability
  work.
- **COMPRESS:** completed dated Relation-detail presentation decisions and
  implementation checkpoints when their dedicated decision/schema/result
  evidence is linked. Retain any active constraint or deferred item.
- **MOVE TO HISTORY candidate:** dated Initial Placement experiments and
  browser/runtime diagnostic progression whose disposition is demonstrably
  superseded by later adopted results. This includes only complete original
  entries with verified result links, not every experiment based on age.
- **HOLD:** `Open / deferred`, `REL-DIRECTIONALITY1 / PRE-RELEASE-FEATURE-RECONSIDERATION1`,
  `Current execution order`, and any capability handoff or experiment without
  a verified later disposition. The large section is not a single migration
  tranche.

### `## Current Initial Layout / Parallel Presentation Coordination (2026-09-13)`

- **KEEP:** the first four responsibility/status headings (parallel incident
  bundle, structural retune, self-loop/ordinary-edge interaction, and
  re-baseline boundary); the current status/priority boundary; current
  accepted Human Check B qualified closure; remaining quality/worker
  diagnostic follow-ups; the current 2026-09-23 status inventory and pending
  Human decisions. Preserve the explicit **QUALIFIED** limitation and do not
  infer a clean runtime state from sibling uncommitted work.
- **COMPRESS:** dated experiments with dedicated artifacts, including the
  Sep 13–16 routing/placement experiments, production candidate and visual
  acceptance series, self-loop closure studies, and completed product-worker
  parity/preview gates. Keep adopted conclusions and active consequences with
  links to exact result/acceptance documents.
- **MOVE TO HISTORY:** superseded execution orders, completed release
  readiness attempts whose later closure is linked, and the Sep 19
  Documentation IA recommendation only as historical provenance. Preserve
  the current Roadmap-first decision and later migration result separately.
- **COMPRESS / MOVE TO HISTORY:** completed Explicit Auto Layout implementation,
  Pin/preview acceptance, and Human Check B progression. Keep a short current
  qualified disposition and open follow-ups linked to
  `liaisonscape-explicit-auto-layout-human-check-b-qualified-closure1-result.md`
  and the safe-preview/diagnostic results. Do not convert sibling dirty-tree
  evidence into status.
- **HOLD:** any entry in `Remaining open follow-ups and decisions`, physical
  safe-area or phone-landscape scope, current visual hierarchy audit, and
  other unresolved Human choices until explicitly reconciled. Earlier History
  2 / H2-POSITION-CIRCA states may be historical only when the later closure
  and preserved scope boundaries are linked.

## Largest bounded slimming candidates

1. **High-confidence first tranche:** compress the old release-priority,
   immediate-sequence, dated cross-app readiness/execution, and completed
   milestone/checkpoint recaps to short current outcomes and existing
   authority links. Move only the clearly superseded dated priority/sequence
   snapshots to the existing roadmap-history area under a separately reviewed
   destination decision. This avoids touching the mixed large H2 sections.
2. **Evidence-led second tranche:** inside `Roadmap reconstruction checkpoint`
   and `Current Initial Layout / Parallel Presentation Coordination`, take
   only completed, superseded, fully linked entry groups (not whole parents).
   The largest compression opportunity is the dense Sep 2–5 initial-placement
   seed and browser-capture experiment ledger, followed by the Sep 13–16
   placement/routing/product-acceptance progression. Keep current decisions,
   accepted boundaries, dependencies, and open Human decisions in the roadmap.
3. **Separate current-index cleanup:** shorten detailed measurements in the
   post-release observation audit while retaining its decision-relevant
   conclusions and current safety/release limitations. Do not remove the
   audit's evidence source.

The obvious gain is not the completion of archival moves; it is removing
repeated execution detail from current planning while retaining evidence and
navigation. By rough section-size inspection, the first tranche could reduce
approximately **500–1,200 lines**; a carefully evidence-linked second tranche
could reduce a further **2,000–4,500 lines**. A resulting roadmap in the
approximate **6,500–9,500 line** range is plausible, but the range is not a
target and depends on how much open/reusable rationale must remain. These
figures are planning estimates, not audited extraction counts.

## Evidence overlap and migration boundary

Representative duplication candidates include:

- public-release readiness/closure sequences versus
  `e2r-initial-public-release-remaining-gates-reconciliation1-result.md`,
  `e2r-initial-public-release-transaction-readiness-decision1-result.md`,
  and `e2r-initial-public-release-closure-audit-result.md`;
- XAPP deletion progression versus
  `cross-app-relation-deletion-capability-closure.md`;
- NarrativeLine documentation closure versus
  `e2r-narrativeline-documentation-closure-reconciliation1-result.md`;
- Explicit Auto Layout / Human Check B progression versus its qualified
  closure, preview failure, and diagnostic evidence documents;
- detailed experiment measurements versus the corresponding named
  `docs/liaisonscape-*-result.md` or research artifact.

These are link-target candidates, not proof that every roadmap paragraph is
duplicated. A later migration must verify target content and current
authority for each complete entry. Never replace an audit result, decision,
or provenance statement with a summary that loses its scope, limitations, or
status.

## Authority, anchors, links, and validation gate

There is no identified need to create another current-planning authority.
Keep `docs/roadmap.md` as the sole current entry point. A history unit may
preserve former plan text and its original ordering, but must be explicitly
historical and link back to the current roadmap; the roadmap must link to the
history index and the relevant dedicated evidence.

The committed [Roadmap Physical Modularization implementation-preparation
record](documentation-ia-roadmap-physical-modularization-implementation-preparation1.md)
provides a concrete pre-migration reference baseline: five Markdown links
outside the roadmap targeted specific roadmap headings; two intra-roadmap
fragment links targeted headings; literal `roadmap.md` path mentions occurred
in 73 Markdown files across e2r-spec and four sibling repositories; and two
LiaisonScape JSON evidence records mentioned the path. That scan found no
direct cross-repository Markdown URL to the roadmap. These are the earlier
gate's observed counts, not a fresh post-migration census; the audit makes no
claim that all 73 mentions need editing. The five external heading links
were identified as current direction/status references and should remain in
the current roadmap: `sessions/E2R-Session-0094.md`,
`docs/documentation-ia-roadmap-physical-modularization-implementation-preparation1.md`,
`docs/relative-time-atomic-semantics-adoption-readiness1.md`,
`docs/relative-time-extensible-semantic-contract-research1.md`, and
`docs/relative-time-extensible-temporal-assertion-direction1.md`. The two
intra-roadmap targets were the workspace placement summary and GitHub Sponsors
follow-up; a future extraction of either requires preserving or repairing its
fragment link.

Current headings also have Markdown anchors consumed by links. Keeping the
roadmap path does not protect anchors for headings removed from it. Before
any approved migration:

1. Search all tracked repository files for exact heading text, explicit
   `docs/roadmap.md` paths, generated heading anchors, and links to the
   affected sections.
2. Search the other E2R repositories read-only for the same path, heading,
   and anchor references; record the inspected commit/status boundary.
3. Classify references as links that must be rewritten, stable path mentions
   that need explanatory context, and references that should remain because
   the original roadmap path remains current.
4. Preserve source order, exact historical wording, date/status labels, and
   source commit/provenance in the destination. Do not silently re-date,
   normalize, summarize, or “correct” historical claims.
5. Validate local relative links and anchors after staging, then rerun the
   reference search. Review cross-repository references separately; this
   repository cannot validate them by itself.
6. Require a focused Human-reviewed diff and a recoverable migration
   checkpoint before moving the next tranche. If source/destination authority
   becomes ambiguous, stop that tranche and return it as HOLD.

The `docs/` root's flatness and the existence of 655 root Markdown files are
recorded as a separate IA concern. This audit does not propose moving other
documents, creating a taxonomy, or placing only future documents in
subdirectories.

## Current-state boundary

This audit is recorded in the current roadmap only as a short pointer. It
does not change the current status index, adopt a slimming manifest, choose a
history destination or unit count, or authorize any actual migration. The
next required Human checkpoint is approval/revision of a bounded extraction
manifest, including any HOLD items and reference impact. Until then, all
current roadmap text stays in place.
