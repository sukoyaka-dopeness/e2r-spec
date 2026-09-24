# Residual Roadmap Responsibility Audit 1

Date: 2026-09-24

Status: **READ-ONLY RESPONSIBILITY AUDIT / NON-NORMATIVE — NO ROADMAP MIGRATION AUTHORIZED**

## Authority and audit boundary

This audit starts from E2R-SPEC commit
[`8c4a877`](https://github.com/sukoyaka-dopeness/e2r-spec/commit/8c4a877fc3220d57973b8b0a52fcfae4df742617),
`docs: compress roadmap research tranche one`. It applies the durable
Documentation and Roadmap Policy in the repository-root `AGENTS.md` and
rechecks the current roadmap, its dedicated result/research authorities, the
existing Roadmap History units, and the earlier
[Roadmap Slimming Audit 1](roadmap-slimming-audit1.md) against the subsequent
bounded migrations.

`docs/roadmap.md` remains the sole current-planning authority and entry point.
This record classifies residual material and proposes a migration manifest;
it does not authorize shortening, moving, deleting, summarizing, renaming, or
rewriting any Roadmap content. The wider `docs/` taxonomy remains deferred.
The prior audit and migration results remain evidence of their own snapshots
and scopes, not blanket authority for the next tranche.

## Inspection baseline

At the audited commit, `rg -c '^' docs/roadmap.md` reports **10,334 physical
lines** and `rg -c '^#{1,6} ' docs/roadmap.md` reports **494 ATX headings**:
1 H1, 23 H2, 449 H3, and 21 H4. This is a structural baseline, not a reduction
target.

The Roadmap currently combines a compact status/planning surface, durable
planning constraints, current and deferred work, repeated decision/result
summaries, and a very large dated LiaisonScape experiment/evidence ledger. The
heading density is especially high in the later material: many H3s represent
one experiment or checkpoint each, often with a short status plus a dedicated
result link. The exact heading and line ranges below are inspection aids;
heading paths and complete-block boundaries must be used for any later
migration.

The first two Roadmap Slimming Migrations already moved 69 complete H3 entries
to the existing Release/Cross-App and LiaisonScape Layout/Auto Layout history
units and retained their provenance. Commit `8c4a877` then compressed the
approved Character Generator, Grouping, one-button coordinate-generation,
and E2R Suite detail to dedicated Research/Application pointers. Those
completed changes are not proposed again here.

## Classification key and approximate scale

- **KEEP AS CURRENT PLANNING** — current authority, status, priority,
  dependency, active/deferred work, evidence gate, or pending Human decision.
- **COMPRESS TO AUTHORITY POINTER** — a dedicated accepted result, decision,
  audit, or acceptance document is the evidence authority; keep the current
  significance, operative boundary, and link in the Roadmap.
- **MOVE TO ROADMAP HISTORY** — a completed/superseded planning or execution
  snapshot whose chronology should be preserved but no longer governs current
  planning.
- **COMPRESS TO RESEARCH POINTER** — exploratory detail belongs to an existing
  Research/Application authority; retain any current status, dependency, and
  non-authorization boundary in the Roadmap.
- **HOLD / HUMAN** — current authority, status, destination, extraction edge,
  or preservation of an open/qualified boundary is not yet sufficiently
  resolved.

The 449 H3s are not cleanly partitioned by heading alone: several H2s contain
current planning interleaved with completed evidence. A first-pass scale
estimate is roughly **75–120 H3-equivalent units to keep**, **200–280 to
compress to authority or research pointers**, **15–40 potential history
units**, and **50–100 to hold or reconcile**. These ranges overlap at mixed
parents and are not additive counts or a migration manifest. They indicate
that most remaining volume is checkpoint-level detail, while a material
minority still carries current or ambiguous planning constraints.

## Residual candidate manifest

| Roadmap location / coherent group | Classification | Minimum Roadmap responsibility | Existing destination / evidence | Main risk or gate |
| --- | --- | --- | --- | --- |
| `## Purpose`, `## Operating principles`, `## Current status index`, `## Current baseline` (lines 1–563) | **KEEP / mixed** | Keep the single-authority rule, current statuses, live release and application boundaries, stable baseline, and current navigation. Compress only closed implementation recaps with an exact dedicated authority. | Current Roadmap; named baseline/result documents already linked in place. | Do not update a dated index snapshot as though every row were freshly re-audited. `Layout persistence experiment` and `Cross-application checkpoint` remain mixed until their current owner/dependency is reconciled. |
| `## Research / post-release growth` (564–1026) | **KEEP / selective authority-pointer compression** | Keep current Human-selected directions, explicit deferrals, dependencies, and the current atomic Relative Time/adoption and Documentation IA states. Keep proposal/history snapshots distinguishable from current authority. | Existing Relative Time decision/adoption records, Research documents, and Roadmap-first direction/migration records. | A compact status must not erase distinctions among adopted semantics, Draft/schema support, deferred work, and historical planning snapshots. The four research groups from tranche one must not be reopened. |
| `## Research priority`, `## Application maintenance`, ecosystem, sample, UX, milestone, evidence-gate, and deferred sections (1027–1434) | **KEEP / mixed; selective COMPRESS TO RESEARCH POINTER** | Preserve current priority order, active maintenance, evidence gates, explicit deferrals, and non-active status where it affects planning. | Existing `research/`, `applications/`, decision and result documents linked by each item. | Several short H3s are already pointers; further outline consolidation could break anchors without meaningful content reduction. Keep explicit deferrals even when they concern future work. |
| Residual UX and active follow-up ledgers (1435–1956) | **HOLD / selective COMPRESS TO AUTHORITY POINTER** | Keep unresolved minimum-width/environment limits, pending UX decisions, active sequence, and operative safety boundaries. Replace only redundant accepted evidence detail with concise disposition plus authority link. | Examples: F2-LS1 acceptance at `liaisonscape-cross-app-shell-alignment-f2-ls1-acceptance.md`; shell hover parity at `cross-app-shell-action-hover-focus-parity-audit1-result.md`; LS-M2A research/acceptance authority. | The parent sections mix accepted results with live follow-ups. NarrativeLine More/Back-to-Top and other cross-repository evidence need exact destination and current-scope confirmation before compression. |
| `## Roadmap reconstruction checkpoint — current canonical summary` (1957–2241) | **HOLD / mixed; child-level compression candidates** | Keep current Cross-App status, live dependencies, application modularization policy, open/deferred items, and current execution order. Keep concise links to capability closure and current authorities. | `cross-app-relation-deletion-capability-closure.md`, capability handoff evidence, endpoint vocabulary Research, and other linked results. | This parent explicitly combines completed progression and live planning. Do not move it wholesale. The prior Slimming Audit 1 likewise marked it mixed; child candidates need current-status reconciliation. |
| Relation display / presentation checkpoint sequence (2242–2518) | **COMPRESS TO AUTHORITY POINTER / HOLD by item** | Preserve any still-operative presentation direction and open implementation boundary; summarize accepted decisions with links. | Existing presentation decision/schema/result records named in the individual entries. | Some entries are decisions or schema checkpoints, not disposable execution chronology. Verify each authority and whether a later decision supersedes it. |
| `PRE-RELEASE-VALIDATOR-AND-SEQUENCING-ROADMAP-SYNC1` through `E2R-LIAISONSCAPE-LICENSE-REMEDIATION1` (2519–2643; five H3s) | **MOVE TO ROADMAP HISTORY candidate; one placement-audit item may instead remain a pointer** | Current Roadmap keeps the formally closed Initial Public Release state and any still-operative Initial Layout priority only. | Existing `roadmap-history/release-and-cross-app-chronology.md`; dedicated release preparation, placement-order/license sequence, placement objective audit, and license remediation results. | The old release authorization/status language is superseded by the public-release closure, but the 2026-08-30 Initial Node Placement objective result may still explain later placement work. Confirm that its minimum current consequence remains discoverable before moving that H3. Preserve exact text/order/date/status if moved. |
| Initial Placement / routing experiment sequence, from `E2R-LIAISONSCAPE-COORDINATELESS-PLACEMENT-COMPARISON-AUDIT1` through `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-ASSIGNMENT-STABILITY-AUDIT1` (2653–3863; 75 H3s and two nested H4s) | **HIGH-CONFIDENCE COMPRESS TO AUTHORITY POINTER tranche candidate** | Per item, retain only the checkpoint disposition/current consequence and link to its dedicated result. Keep the later current execution order, accepted boundaries, and dependencies in the current coordination section; do not alter them. | 74 local Markdown links in the range resolve to existing repository files; the compound node-label follow-up has two child H4 evidence links. | This is inside a mixed H2 and must be extracted as the exact H3/H4 child range only. Preserve every heading initially to retain anchors. A link's existence alone does not prove it captures every operative constraint; check each retained one-line status against its target. |
| Seed, production-readiness, browser-capture, external-data, and related experiment ledger (3864–6948; 142 H3s) | **HOLD / selective COMPRESS TO AUTHORITY or RESEARCH POINTER** | Keep any still-current candidate status, execution authority, environment blocker, and active dependency; detailed experimental evidence should point to its exact artifact. | Numerous dedicated seed-design, experiment, witness-reconstruction, browser-capture, OSINT, and Research documents. | This apparent large block crosses seed semantics, personal storage, sponsors, OSINT, test harness, and browser/runtime evidence. Do not treat it as one migration unit; separate by responsibility and verified disposition. Three H3s had no direct outbound Markdown link in the audit scan. |
| 2026-09-07 through 2026-09-13 runtime, acceptance, and research synchronization entries (6949–7418; 29 H3s) | **HOLD / selective COMPRESS TO AUTHORITY POINTER** | Preserve current candidate/acceptance state, user-review status, and exact execution authority. | Dedicated browser-capture, Initial Layout runtime, provider, evaluation, and acceptance results linked per entry. | Several are close to the current 2026-09-13 coordination boundary. Later outcome does not automatically supersede evidence that remains a current dependency. Two H3s lacked direct outbound Markdown links. |
| `## Current Initial Layout / Parallel Presentation Coordination` and its current execution-order/status material (7419–8120) | **KEEP AS CURRENT PLANNING** | Keep ordered dependencies, parallel/structural/self-loop separation, re-baseline gate, current priority, Human Check B’s qualified closure, and current execution architecture boundaries. | Current linked structural retune, quality and execution-architecture authorities. | This is a mixed current-planning parent and was correctly excluded from whole-section extraction by the earlier audit. Do not let historical evidence imply a broader acceptance or unqualified quality closure. |
| Later product-authoritative verification, candidate, and presentation experiment series (8121–9544; 56 H3s) | **HOLD / selective COMPRESS TO AUTHORITY POINTER** | Keep the current final candidate/quality state, accepted boundaries, open verification questions, and dependencies. Point to detailed per-checkpoint evidence. | Dedicated result/acceptance documents; 52 of 56 H3s contain an outbound Markdown link in the local scan. | Current and completed entries are interleaved. Four H3s had no direct outbound link; do not infer disposition from their date or title. Do not alter the current qualified Auto Layout / presentation boundary. |
| Explicit Auto Layout / Pin / Preview and release-readiness entries (9545–9880) | **KEEP current blocker and qualification; COMPRESS detail selectively** | Keep the active release blocker, Pin/preview authority, failure/diagnostic distinctions, Human Check B’s qualified status, and remaining quality follow-ups. | Current completion-readiness, safe-preview diagnosis, DEV diagnostic, Human Check B closure, and release-readiness documents. | Dated `HOLD` observations are not automatically current; later qualified closure also does not erase separate unresolved failure attribution. Avoid converting sibling-repository dirty evidence into status. |
| NarrativeLine/public-release closure and later History 2 / cross-app statuses (9881–10334) | **KEEP / mixed; selective COMPRESS TO AUTHORITY POINTER or MOVE TO HISTORY** | Keep the current release-closed status, Human-selected H2 scope and accepted boundaries, current open follow-ups, and the 2026-09-23 physical-device/environment caveats. | Dedicated release closure, NarrativeLine closure, H2 scope/implementation, sample-rights, PWA, and narrow-acceptance records. | The 2026-09-23 session inventory includes both accepted detail and a pending phone-landscape Human decision. Compress only its accepted rows; keep the open decision and environment limits. Earlier readiness snapshots may move only where later authority clearly supersedes them. |

## High-confidence next migration tranche

The most coherent large, bounded next candidate is the **2653–3863 child range**
inside the mixed Roadmap reconstruction H2: 75 dated Initial Placement/routing
H3 checkpoint summaries plus two nested H4s, approximately 1,211 source lines.
The local scan found 74 Markdown links in the range, all resolving to existing
local files, and no inbound fragment reference to its 77 candidate headings
among 977 tracked E2R-SPEC Markdown files. This supports a pointer-compression
manifest, not automatic extraction: the existing H3/H4 anchors should initially
remain, and each one-line disposition must be checked against its dedicated
authority. No current execution-order or H2 parent text should be moved.

This tranche is a candidate only. A later migration checkpoint should enumerate
the exact complete child headings, confirm each evidence target captures the
claim being shortened, preserve any still-operative non-authorization or
dependency, and re-scan references in sibling E2R repositories before edits.
If those checks expose a mixed/current claim without a safe one-line summary,
retain it or split it out for Human review rather than forcing it into the
tranche.

The 2519–2643 old release-preparation sequence is a separate, smaller
Roadmap-History candidate. It should not be added to the high-confidence
compression tranche unless a later migration manifest explicitly establishes
that both belong to one logical cleanup and preserves the Initial Placement
objective audit’s current relevance.

## Current planning constraints to preserve

- The Roadmap is the sole current-planning authority; Research, result, audit,
  decision, and acceptance documents remain their own evidence/authority.
- The Initial Public Release is formally closed; this does not close deferred
  product-quality, visual, solver, History 2, or other explicitly separate
  follow-ups.
- H2-POSITION-CIRCA remains accepted/closed at its bounded scope; broader
  History 2 authoring remains deferred.
- Relative Time atomic Recorded assertion semantics are adopted, but current
  Draft/schema support, machine evaluation, Validator, Derived behavior, and
  application implementation were not thereby expanded.
- LiaisonScape Initial Layout and Explicit Auto Layout have distinct current
  responsibilities, dependencies, diagnostics, qualified acceptance limits,
  and release gates. Historical experiments cannot reorder or close these.
- Keep explicit evidence gates, pending Human decisions, and environment
  limitations (including physical safe-area/keyboard scope) until their own
  evidence closes them.

## Outline, status language, and reference observations

The 449 H3s create a pronounced checkpoint-by-checkpoint outline. A linked H3
may already be only a short pointer; another may carry unique current status or
constraints. Consolidating headings is a separate anchor-sensitive choice and
should not be bundled with body compression by default. No per-issue files or
new history taxonomy are proposed.

The roadmap and history README both explain that dated `current`, `next`,
`open`, `blocked`, or `hold` language can be a snapshot. In the current roadmap,
some such wording is correctly disambiguated by later current-state
clarifications; other mixed sections still need child-level reconciliation.
The pre-release sequence at 2519–2643 is demonstrably superseded by the current
release closure, while older placement and Auto Layout entries must be checked
against later accepted/qualified evidence rather than classified by date.

For the proposed pointer-compression tranche, the roadmap path stays stable,
all 77 H3/H4 headings are retained, and 74 local outbound Markdown targets
resolve. No inbound local Markdown fragment reference to those headings was
found in 977 tracked Markdown files. This audit did not scan sibling
repositories or claim that unknown external consumers have no anchors; that
read-only scan is a required next-migration gate. Path-only references remain
valid because `docs/roadmap.md` is not moving. The separate History candidate
would change heading location and therefore needs its own inbound-link and
destination-relative-link check.

## Audit disposition

This audit changes no current priority, execution order, semantic decision,
accepted/deferred boundary, or Roadmap content. It authorizes no extraction.
The 2653–3863 pointer-compression candidate may proceed only through a separate
Human-reviewed bounded migration manifest and validation gate. All other
mixed or unresolved material remains in the Roadmap pending a later evidence
review.
