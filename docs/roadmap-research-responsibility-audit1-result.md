# Roadmap → Research Responsibility Audit 1

Date: 2026-09-24

Status: **READ-ONLY RESPONSIBILITY AUDIT — NON-NORMATIVE; NO MIGRATION AUTHORIZED**

## Authority and scope

This audit applies the durable Documentation and Roadmap Policy in the
repository-root `AGENTS.md` and the Human-selected Roadmap-first direction in
[`Documentation IA / Roadmap Physical Modularization Direction Decision 1`](documentation-ia-roadmap-physical-modularization-direction-decision1.md).
`docs/roadmap.md` remains the sole current-planning authority. This record is
an audit and candidate manifest, not authority to move, delete, rewrite,
compress, or reclassify any roadmap or Research content. Any actual migration
requires a separate Human-reviewed manifest and checkpoint.

The audit focuses on the roadmap's research/post-release area, explicit future
application and ecosystem concepts, and later research/hypothesis entries whose
detail may be confused with current planning or completed chronology. It does
not re-audit every dated implementation/result entry in the 10,000-line
roadmap. Completed or superseded execution evidence belongs to the separate
Roadmap History responsibility when eligible; it is not Research merely
because an entry discusses an experiment.

## Current evidence snapshot

At inspection, `HEAD` was `e6cfe5ee11ca046f6f112fb29e8908f9183eeef4`
(`docs: record roadmap maintenance policy`). Read-only inventory found:

- 664 files below `docs/`, of which 662 are Markdown;
- 658 files directly in the `docs/` root; and
- 10,449 physical lines and 494 ATX headings in `docs/roadmap.md`.

These are inspection measurements, not targets. The prior
[Roadmap Slimming Migration 2 result](roadmap-slimming-migration2-result.md)
records 10,450 lines at its own post-migration measurement. The current count
is one line lower; the difference does not affect this responsibility audit.
The earlier [Documentation Information Architecture / Roadmap Modularization
Audit 1](documentation-information-architecture-roadmap-modularization-audit1-result.md)
recorded a 2026-09-19 inventory of 613 files below `docs/` and recommended
navigation-first maintenance, stable paths, and one roadmap at that time.
Since then, the Human selected Roadmap-first physical separation of current
planning from chronology, and two bounded chronology/slimming tranches have
been completed. The earlier audit remains evidence of its earlier assessment;
the later Human decision governs the current structure direction. The wider
`docs/` taxonomy remains deferred.

## Classification key

- **KEEP IN ROADMAP** — retain the minimum status, priority, dependency,
  explicit deferral, evidence gate, or pending Human decision that constrains
  current planning.
- **COMPRESS TO POINTER** — keep a short current-status statement and link;
  detailed authority/evidence already exists elsewhere.
- **MOVE DETAIL TO RESEARCH** — a future migration candidate for exploratory
  knowledge that belongs with a suitable existing Research responsibility. It
  is not a move authorization; destination sufficiency must be checked before
  extraction.
- **HOLD / HUMAN** — authority, current-planning relevance, destination, or
  safe extraction boundary is not established by this audit.

Some candidates are mixed and receive more than one classification by
subsection. Line ranges below identify the inspected snapshot only; heading
paths and subject matter, not line numbers, identify candidate material.

## Candidate manifest

| Current roadmap location | Classification | Minimum planning information to retain | Existing authority / destination evidence | Migration risks and disposition |
| --- | --- | --- | --- | --- |
| `## Research / post-release growth` (563–583) | **KEEP IN ROADMAP / COMPRESS TO POINTER** | Keep only broad, still-relevant workstream names and any explicit non-blocking/deferred status. | The following topic sections and linked Research documents contain the subject detail. | This introductory list is a planning index, not detailed research. Reconcile its broad topics with current priorities before shortening; do not turn it into a second research catalog. |
| `### Multidimensional History / Temporal Perspectives` (585–600) | **COMPRESS TO POINTER** | Preserve the exploratory/not-active status and any still-relevant History 2 deferral boundary. | [`e2r-multidimensional-history-temporal-perspectives.md`](../research/exploratory/e2r-multidimensional-history-temporal-perspectives.md) contains the research and addenda. | Research destination is sufficient for the design-space detail. Keep H2-POSITION-CIRCA and broader-shapes status in current planning where they remain constraints. |
| `### Causal order, Relative Time, and undated Event placement` and adjacent temporal entries (601–675), plus the dated interval/Relative Time direction entries (676–776) | **COMPRESS TO POINTER / HOLD / HUMAN; HISTORY, NOT RESEARCH, FOR SUPERSEDED SNAPSHOTS** | Current Relative Time adoption and what remains deferred are already stated later in the roadmap (917–935). Keep current causal/History dependencies only if still active. | Existing targets include [`e2r-causal-relative-order-and-undated-event-placement.md`](../research/exploratory/e2r-causal-relative-order-and-undated-event-placement.md), [`e2r-relative-time-minimum-temporal-precedence-research1.md`](../research/exploratory/e2r-relative-time-minimum-temporal-precedence-research1.md), History 2 deferred-shapes Research, and the Relative Time decision/adoption records. | This region contains dated status snapshots that say work was pending or not started although later entries record research, decisions, and adoption. Do not move it into Research as a current account or silently rewrite it. Reconcile the current pointer against later authority; any completed/superseded chronology extraction belongs to Roadmap History and requires a separate manifest. |
| Character-name and Character Generator research (968–1075) | **COMPRESS TO POINTER** | Retain that this is non-active future research; external fetching is not started, no source is selected, and the illustrative graph size is not a requirement. | [`applications/character-generator-app.md`](../applications/character-generator-app.md) contains the detailed research sections and status boundaries; [`name-impression-database-and-character-name-generation.md`](../research/exploratory/name-impression-database-and-character-name-generation.md) is the separate perception/name-impression seed. | Most detailed wording is already in its dedicated application/research authority. Preserve licensing, privacy, provenance, reproducibility, and no-implementation boundaries in a compact pointer. Do not duplicate the body in another Research file. |
| `### Grouping evidence and feedback direction` / `### User-defined graph Groups` (1077–1106) | **KEEP IN ROADMAP / COMPRESS TO POINTER** | Keep the dependency on cross-application evidence before a bounded experiment and that no Dataset semantic or implementation is accepted. | [`liaisonscape-user-defined-graph-groups.md`](../research/exploratory/liaisonscape-user-defined-graph-groups.md) covers the user-defined Group design space. | Keep the evidence gate and semantic-ownership uncertainty; compress the detailed candidate attributes and options to the Research pointer. Do not classify completed grouping-related evidence as future Research without checking its status. |
| `### One-button high-quality automatic coordinate generation` (1108–1128) | **KEEP IN ROADMAP / COMPRESS TO POINTER** | Retain its non-active status and that current Initial Placement priorities are unchanged. | [`liaisonscape-one-button-automatic-coordinate-generation.md`](../research/exploratory/liaisonscape-one-button-automatic-coordinate-generation.md) contains the future capability and quality boundaries. | The current execution priority is a planning constraint; algorithm/pipeline and quality detail can be represented by a pointer. Do not merge this goal with user-defined Groups or active placement experiments. |
| `## Research priority` and cross-cutting research topics (1130–1179) | **KEEP IN ROADMAP / MOVE DETAIL TO RESEARCH / HOLD / HUMAN** | Preserve any genuinely current research ordering, sequencing dependency, and evidence gate. | Existing broad destinations include `semantic-vocabulary-architecture.md`, `on-demand-external-data-and-name-generation.md`, `view-generation.md`, and `deterministic-generation.md`; topic-specific sources are not equally complete. | The heading asserts priority, while its detail mixes responsibility guidance and multiple topics. Before extraction, establish that the order is still current; move only exploratory explanation with an adequate destination. Do not change priority or create a micro-file as part of migration. |
| `### Shared browser preference and workspace direction` (1277–1301) | **KEEP IN ROADMAP / MOVE DETAIL TO RESEARCH / HOLD / HUMAN** | Keep the unresolved deployment-origin / cross-origin sharing dependency and the fact that no implementation is authorized. | [`e2r-managed-personal-storage.md`](../research/exploratory/e2r-managed-personal-storage.md) is a related broad Research destination for storage/workspace responsibility. | The Research covers related workspace/storage concerns but this audit did not establish that it fully owns shared preference and origin-bridge design. Keep the detailed APIs/mechanisms in place until destination fit is reviewed; do not move the planning dependency. |
| `## Sample and external vocabulary follow-up` (1318–1339) | **KEEP IN ROADMAP / COMPRESS TO POINTER** | Retain the sample follow-up, no-silent-adoption/network independence boundaries, and any current gate. | Character vocabulary detail is in `applications/character-generator-app.md`; external lookup research includes `on-demand-external-data-and-name-generation.md` and `semantic-vocabulary-architecture.md`. | Verify which item is still current before compression. Do not lose the independent sample task or its application dependency while compressing vocabulary detail. |
| `### Future application surface concepts` (1420–1433) | **MOVE DETAIL TO RESEARCH / HOLD / HUMAN** | Keep only a concise indication of non-active concepts if they still constrain a planned decision. | `e2r-suite-long-term-milestone.md` is a possible broad destination for illustrative future application surfaces, but the specific long-form Object `body`/Core-vs-Extension question has no clearly established matching Research authority in the inspected inventory. | The visualization/Notebook concepts may fit existing ecosystem research; long-form content is a distinct unresolved responsibility question. Do not bundle or relocate both without confirming a suitable authority. The long-form item is a Human destination/classification question. |
| `## Proposed E2R-wide milestones` (1456–1499) | **HOLD / HUMAN** | Preserve only milestones still acting as current dependencies or decisions, once verified. | This is a proposed cross-repository sequence, not a single Research result. | Its suggested “immediate sequence” may affect planning priority. Do not treat the whole list as exploratory prose and move it, nor keep it indefinitely as current without reconciling later project state. Human review is needed if migration changes sequence or authority. |
| `### E2R Suite - long-term milestone` (1501–1518) | **KEEP IN ROADMAP / COMPRESS TO POINTER** | Keep the long-term / not-active / unscheduled status and avoid implying a target date or implementation order. | [`e2r-suite-long-term-milestone.md`](../research/exploratory/e2r-suite-long-term-milestone.md) is the detailed exploratory authority. | Strong high-confidence compression candidate: preserve only status and link. This is not a new Suite decision. |
| `### Adaptive Initial Placement Cascade` (7787–7813) and `### Organic Relationship-Shaped Placement` (8236–8251) | **KEEP IN ROADMAP / HOLD / HUMAN; NOT AUTOMATIC RESEARCH OR HISTORY EXTRACTION** | Preserve current Product `HOLD`, non-active hypothesis status, current execution order, release blocker, and Human gates. | Linked checkpoint/result documents contain the detailed experiment evidence; the research tree has related but not obviously equivalent placement responsibilities. | These dated blocks combine hypothesis, current gates, and operational result chronology. No sufficiently exact Research destination was established. Reconcile status and destination first; separate any superseded execution chronology under a different Roadmap History audit. |

The manifest is candidate-level, not a complete heading-by-heading migration
plan. In this sampled set, several high-confidence cases are primarily
**COMPRESS TO POINTER**, because the detailed Research authority already
exists. There are only a few plausible **MOVE DETAIL TO RESEARCH** cases, and
they are conditional on destination fit; no actual move is authorized here.
Across the 13 grouped manifest rows, **KEEP IN ROADMAP** appears in 8,
**COMPRESS TO POINTER** in 9, **MOVE DETAIL TO RESEARCH** in 3, and
**HOLD / HUMAN** in 6. These classifications overlap by design and are not
counts of headings or migration units.

## High-confidence first tranche candidate

If separately authorized, the clearest first tranche is to compress the
roadmap's three Character Generator research subsections (968–1075), user-
defined Groups (1077–1106), one-button coordinate-generation goal (1108–1128),
and E2R Suite long-term section (1501–1518) to concise status/dependency
statements and links to their existing dedicated authorities. Preserve at
least: non-active status; no source/fetch or implementation authorization;
the Group cross-application evidence gate and lack of accepted Dataset
semantics; the unchanged active placement priority; and Suite's unscheduled
status. These source ranges amount to roughly 180 roadmap lines, but line
reduction is not a goal and the final retained summary depends on current-state
reconciliation.

The temporal sections are not part of this first tranche because they contain
superseded status snapshots and cross-workstream dependencies that need
separate status reconciliation. The proposed milestone sequence, long-form
content responsibility, shared-origin workspace design, and placement
hypotheses also remain outside it.

## Roadmap constraints that must survive any later migration

- Keep the roadmap as the one current-planning authority; dedicated Research
  does not become a second priority/status source.
- Preserve the active-work sequence, relevant explicit deferrals, evidence
  gates, dependencies, release blockers, and pending Human decisions even when
  the underlying exploration is distant.
- Current Relative Time status is the later Human adoption entry at 917–935;
  older `pending`, `not started`, or `unadopted` temporal prose is not a current
  override. Retain the adoption record as normative authority and preserve the
  old wording only as dated historical evidence if later classified for
  Roadmap History.
- Keep History 2 `position + circa` accepted/closed and broader History 2
  authoring deferred. Do not use temporal Research compression to reopen that
  boundary.
- Keep external-vocabulary/source-fetch and Group semantics/implementation
  unapproved unless a later Human decision changes them.
- Research and application implementation records retain their own
  authority/evidence; the roadmap carries only the planning pointer needed to
  find them.

## Destination sufficiency and unresolved classifications

Existing Research is sufficient to receive pointer-only treatment for
multidimensional perspectives, causal/relative-order exploration, user-defined
Groups, one-button coordinate generation, suite exploration, semantic
vocabulary, deterministic generation, and much of Character Generator
research. The Character Generator's detailed policy is currently in its
application design document rather than under `research/`; this is an existing
dedicated authority, not a reason to create another file.

Additional Research organization or a Human choice is needed before moving:

- the long-form Object content / `body` responsibility question;
- shared browser preferences and cross-origin workspace bridge details beyond
  the existing personal-storage research;
- any proposed E2R-wide milestone sequence whose current planning authority is
  unclear; and
- Adaptive Cascade / Organic Placement design detail not covered by an
  equivalent existing Research authority.

Do not create issue-, checkpoint-, or short-lived-milestone Research files to
avoid these decisions. If no broad existing responsibility fits without
changing authority, retain the material or return the destination choice to the
Human.

## Reference, anchor, and provenance impact

At inspection, a repository-wide Markdown search found 9 links with a
`roadmap.md#...` fragment and 73 Markdown files containing the literal
`docs/roadmap.md` path (including this repository's policy and historical
evidence). The fragment links target current-status, sequence, reconstruction,
or Roadmap History navigation headings; none of the enumerated high-confidence
first-tranche headings had an inbound fragment link in the search. Path-only
references do not require change while `docs/roadmap.md` remains at its current
path. One shared `ai-knowledge` Markdown entry also names this repository path;
it was inspected read-only and was not changed. Read-only searches of the five
direct sibling E2R repositories found no matching `e2r-spec/docs/roadmap.md`
path or `roadmap.md#...` fragment in Markdown, JSON, TypeScript, or TSX files.
These checks do not establish whether unindexed external/public pages link to
the roadmap.

For any later extraction or compression:

1. Search repository-local and approved sibling Markdown/code references for
   each exact source heading, generated anchor, path, and terminology before
   editing.
2. Preserve or deliberately redirect inbound fragment links; validate both
   source-to-destination and history-to-current navigation.
3. Re-resolve moved relative links from their new path; do not rewrite
   historical wording except for the minimum mechanically required href
   adjustment, recorded as such.
4. Preserve original historical wording, date/status language, source order,
   and provenance. Add a current pointer rather than silently rewriting a
   dated `current`/`next`/`open` claim.
5. Check that no second current-planning authority is created and that dedicated
   Research does not acquire unselected normative or priority authority.

## Disposition and next gate

This audit establishes no migration tranche as approved. The first-tranche
candidate above is high-confidence for a later bounded manifest because its
details already have suitable destinations; it still needs a fresh status and
reference review at that time. Mixed temporal snapshots, priority order,
long-form content, shared workspace design, proposed milestones, and placement
hypotheses remain `HOLD / HUMAN` where noted.

The next Human decision is whether to authorize a bounded first migration
manifest and, if so, which of the high-confidence compress-to-pointer
candidates to include. A separate choice is needed before changing any
research priority, creating a broad Research responsibility, or reclassifying
ambiguous current/history content. Roadmap → Research migration, Roadmap History
migration, and wider `docs/` taxonomy are all outside this audit.
