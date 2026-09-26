# Documentation IA / Roadmap Physical Modularization Decision Preparation 1

Date: 2026-09-24

Status: **HUMAN STRUCTURE DECISION PREPARATION — NON-NORMATIVE / NO STRUCTURE SELECTED**

## Purpose and authority boundary

This record prepares a Human decision about the physical organization of
`docs/` and the responsibility split within `docs/roadmap.md`. It compares
options using the current repository inventory, existing documentation
policy, prior audit evidence, and observed references. It selects no option,
path, directory taxonomy, archive destination, or migration.

Normative Core and Extension authority remains in `spec/` and `extensions/`;
schemas and canonical examples remain in their designated top-level
directories. `docs/roadmap.md` is planning authority, dedicated decision,
research, audit, and result documents are their checkpoint evidence, and
Session records preserve chronology. A document's completion or location does
not by itself make it disposable or normative.

The current planning boundary is recorded in the [Relative Time adoption
state sync](../roadmap.md#current-relative-time-atomic-semantics-status-after-human-adoption-2026-09-24)
and [Session 0094](../../sessions/E2R-Session-0094.md): the atomic semantic
disposition and minimum state synchronization are complete; Documentation IA /
Roadmap Physical Modularization is next. The roadmap records completed,
superseded, and historical chronology separation as the first structural
candidate to evaluate, not as a selected structure.

## Current inventory and observed pressure

Read-only inventory on 2026-09-24 found:

- `docs/` contains **652 files**: **650 Markdown files** and two JSON evidence
  files. All 650 Markdown files are directly in the root; the two nested files
  are under `evidence/` and `evidence/reviews/`.
- `docs/roadmap.md` is **13,423 lines** with **605 headings**.
- The 2026-09-19 audit measured 613 files (611 Markdown files at root and two
  nested JSON evidence files) and an 11,508-line, 541-heading roadmap. The
  inventory delta is +39 files / Markdown files, +1,915 roadmap lines, and
  +64 headings. These are two dated snapshots, not a causal attribution to
  particular work.

The flat root contains mixed responsibility types already identified by the
prior audit: navigation and planning, guides, application design, decisions
and proposals, research/audits/diagnostics, implementation results,
acceptance evidence, release records, and historical handoffs. Filename
patterns can help locate material but do not establish its status or
authority. A completed result may remain needed evidence; closed does not
mean archive or delete.

The roadmap combines current status/priority and active Human decisions with
checkpoint summaries and a long historical chronology. The current Human-
selected planning direction therefore evaluates the flat `docs/` root and
roadmap length together. It identifies separating completed, superseded, and
historical chronology from current roadmap planning as the first high-impact
candidate, while preserving detailed evidence at its responsible documents.

## Existing decisions and what changed

The [Documentation IA / Roadmap Modularization Audit 1](documentation-information-architecture-roadmap-modularization-audit1-result.md)
(commit `48331b0`, 2026-09-19) found a real IA problem and ended with
**HUMAN STRUCTURE DECISION REQUIRED**. Its recommendation was navigation-first:
retain existing paths and one roadmap for now, strengthen `docs/README.md`,
keep detailed evidence in dedicated documents, label historical snapshots,
and defer migration/splitting until separate Human approval. It also recorded
that no repository-wide directory contract, redirects, or path-alias contract
existed.

The subsequent [documentation hub hygiene commit](../README.md) is
`62ce6b1877e1577a6d413f526af35ad38a71f522`. It implemented a reader-oriented
Hub, a status vocabulary, and a placement/authority policy. The current
`docs/documentation-plan.md` still says existing paths are stable, that its
placement policy governs new documents and focused maintenance, and that new
directories are not required by the prior inventory. Those are real current
policy/evidence, not proof that the still-required physical structure
decision was made.

The current roadmap sequencing was committed in
`930dd950f54d074f5d7937bc9933e56a1aa2585f`; Relative Time adoption state was
synchronized in `ec6b03820071943c58682929e56e1780983c9a83`. They place this
Human structure-decision workstream next and add a current Human-selected
planning direction to assess chronology separation first. This updates what
the next decision should examine; it does not silently replace the prior
audit's recommendation with an adopted physical layout. The Hub/navigation
work was implemented; the physical structure remains unselected.

## Authority and responsibility overlap

| Information responsibility | Existing location / role | Current IA pressure |
| --- | --- | --- |
| Normative requirements | `spec/`, `extensions/`; machine artifacts in `schemas/` and `examples/` | Must remain distinguishable from informative records regardless of `docs/` layout. |
| Current planning, priorities, dependencies, active workstreams, next Human decision | `docs/roadmap.md` | Shares one long document with completed and historical chronology. |
| Checkpoint decision, audit, research, implementation, and acceptance evidence | Dedicated records, mostly at `docs/` root; exploratory work also in top-level `research/` | Many files share one directory despite different responsibility/status; evidence itself remains valuable. |
| Reader navigation and documentation policy | `docs/README.md`, `docs/documentation-plan.md` | A working Hub and policy exist, but they do not physically reduce root flatness or roadmap length. |
| Session continuity and handoff snapshots | Top-level `sessions/` | This responsibility already has a separate top-level home; it should not be duplicated into `docs/`. |

The prior audit recommends short roadmap summaries linking to evidence rather
than duplicating full result detail. That principle can be used with either a
single roadmap or a separated chronology. The physical destination and exact
scope of any extracted chronology are not selected here.

## Path-stability and provenance evidence

Physical movement has a material reference surface:

- A current Markdown search found the literal `docs/roadmap.md` in **62
  Markdown files** across the scanned E2R repositories and workspace
  knowledge. This count includes prose/path mentions and is not a count of
  validated hyperlinks.
- Four repository-local Markdown links point to specific `roadmap.md`
  headings. Moving historical sections can invalidate anchors even if the
  `roadmap.md` path remains stable.
- The prior audit's wider scan checked 746 local Markdown links across 920
  Markdown files and reported three unresolved targets at that time. This is
  dated audit evidence, not a fresh all-links validation for this checkpoint.
- A current search found four explicit cross-repository GitHub links from
  NarrativeLine documentation into e2r-spec `docs/`: the EN/JA overview and
  the History 2 upgrade scope-closure result (the latter is referenced from
  two implementation results). Other application documentation also uses
  repository-local `docs/...` paths whose ownership is the application repo;
  those are not e2r-spec links and must not be rewritten as such.
- The prior audit also identified exact paths in sessions, result documents,
  scripts/fixtures, and cross-repository handoffs as migration-sensitive.
  Git retains commit history, but a move/rename can still break path-based
  citations, raw links, heading anchors, tooling, and external handoffs; no
  redirect/path-alias contract currently makes such changes transparent.

These findings support a bounded reference inventory before any migration.
They do not establish that every path is externally consumed, nor do they
justify moving files. Preserving dedicated evidence records and improving
their navigation are separate questions from their physical placement.

## Human decision options

The following options are materially different structures assembled from two
separable choices: how to divide roadmap planning from chronology, and
whether/how to reorganize the `docs/` root. They are alternatives for Human
review, not a ranking.

| Option | What changes | What stays stable | Main benefit | Main risk / growth behavior |
| --- | --- | --- | --- | --- |
| **A — Navigation and editorial hygiene; retain one roadmap and flat root** | Improve Hub/current-status entry points; label superseded history; shorten duplicate detail into links. | All paths, one roadmap, flat root, and dedicated evidence documents. | Lowest path/history risk; directly applies the already implemented navigation policy. | Roadmap remains one long chronology/planning surface and root file count keeps growing. |
| **B — Separate current roadmap from chronology; keep the root flat** | Make `roadmap.md` a concise current planning entry point and place completed/superseded/historical chronology in one companion responsibility unit (exact path/name and extraction boundary deferred). | Existing decision/result/research paths and single current planning entry point; no broad directory migration. | Directly tests the current first structural candidate and addresses roadmap length without a taxonomy for every document. | Adds a document in the same flat root; moved headings/anchors and links need mapping; root flatness remains. |
| **C — Option B plus limited broad directories for future documents** | In a separate or coordinated policy step, route only future documents into a small number of Human-approved broad responsibility/domain units. | Existing files and their paths remain stable initially; no issue-per-file convention. | Can reduce future root growth while limiting migration surface. | Creates parallel root/subdirectory conventions and requires clear placement/ownership rules; benefit depends on sustained use. |
| **D — Broad migration of existing documentation and/or multiple workstream roadmaps** | Move existing records into a small domain/responsibility hierarchy and potentially split planning among workstream roadmaps. | Normative authority remains in its source-of-truth directories; evidence must still be retained and linked. | Strongest physical separation and potential local focus for large active streams. | Highest link, anchor, external-reference, provenance, and review cost; risks duplicated or conflicting planning authority; future growth depends on taxonomy discipline. |

Issue-by-issue documents are not assumed as a default. Under C or D, any
additional units would be few and broad; the categories, directory names, and
roadmap ownership boundaries remain undecided. A completed result is not an
archive candidate solely because it is old or closed.

## Are the two structure decisions coupled?

Roadmap modularization and `docs/` directory organization are related but not
technically inseparable:

- A single concise `roadmap.md` plus a chronology companion can remain in the
  flat root. This separates planning from history without deciding a general
  directory taxonomy.
- A limited directory policy for future records can be considered while
  retaining a single roadmap and its chronology.
- A broad existing-file migration can be deferred while the roadmap's
  responsibility boundary is decided, or vice versa.
- If chronology is moved into a subdirectory, that choice intersects with
  directory policy and must be reviewed together for the affected paths; it
  still does not require moving unrelated evidence documents.

Therefore the Human may decide the roadmap/chronology boundary first and
defer root taxonomy, or decide navigation-only maintenance and defer both
physical changes. Coordinated review may reduce duplicate link planning, but
the current evidence does not require one all-or-nothing structure decision.

## Minimal Human decision set

1. **Roadmap responsibility:** retain one file containing current planning
   and labeled chronology with hygiene (A), separate a concise current plan
   from one chronology companion (B/C), or authorize preparation of a broader
   workstream-roadmap option (D). No option is selected here.
2. **`docs/` root policy:** keep it flat and rely on the Hub; consider a small
   set of broad locations for new documents only; or later assess migration
   of existing files. This choice can be deferred independently unless the
   selected chronology destination makes it directly relevant.
3. **Migration gate, only if physical movement is chosen:** require a later
   exact-path/reference inventory, ownership review for cross-repository
   links, anchor/link repair plan, history/provenance treatment, validation,
   rollback approach, and Human review before any move/rename/archive action.
   This preparation record authorizes none of those actions.

The first high-impact candidate recorded by current Human planning is to
evaluate chronology separation. It is not a recommendation to adopt Option B
or a decision that root reorganization must accompany it.

## Sources and validation boundary

- [Prior Documentation IA audit result](documentation-information-architecture-roadmap-modularization-audit1-result.md)
- [Documentation Hub](../README.md)
- [Documentation Plan](documentation-plan.md)
- [Current roadmap sequence and Human-selected direction](../roadmap.md)
- [Session 0094 current handoff](../../sessions/E2R-Session-0094.md)
- Git history for audit (`48331b0`), Hub implementation
  (`62ce6b1877e1577a6d413f526af35ad38a71f522`), next-workstream sequence
  (`930dd950f54d074f5d7937bc9933e56a1aa2585f`), and Relative Time state sync
  (`ec6b03820071943c58682929e56e1780983c9a83`).

Validation is limited to this decision-preparation record and read-only
inventory/reference inspection. No structure is selected, no existing
evidence is designated for deletion, and no path or link is migrated.
