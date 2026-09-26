# Documentation IA / Roadmap Physical Modularization Implementation Preparation 1

Date: 2026-09-24

Status: **IMPLEMENTATION PREPARATION / MIGRATION GATE — NON-NORMATIVE; PHYSICAL MIGRATION NOT AUTHORIZED**

## Authority and purpose

This record prepares a bounded migration decision under the Human-selected
[Roadmap-first structure direction](documentation-ia-roadmap-physical-modularization-direction-decision1.md),
commit `a1cd3fa6bad6efb8d3d18d362a6cb6b5133b5e64`. Its alternatives and
repository evidence build on the [decision-preparation record](documentation-ia-roadmap-physical-modularization-decision-preparation1.md).
The earlier preparation remains comparison evidence; this document does not
replace either it or the selected-direction decision.

The selected direction makes `docs/roadmap.md` the one current-planning
entry point and calls for physical separation of completed/superseded/
historical chronology while retaining its evidentiary value. It does not
select a chronology filename, destination, unit count, or extraction manifest.
This record proposes bounded layout alternatives and a migration gate. It is
not authority to split the roadmap, move or rewrite links, create directories,
or reorganize `docs/`.

## Current roadmap responsibility and observed structure

The inspected `docs/roadmap.md` has 13,444 lines and 606 headings. The
repository has 652 Markdown files directly under `docs/`, in addition to two
JSON evidence files in nested evidence locations. The roadmap is therefore a
large mixed planning-and-record surface, while the path itself remains the
canonical current-planning entry point.

| Current region (line numbers at this inspection) | Observed responsibility | Migration preparation classification |
| --- | --- | --- |
| Lines 1–56: purpose and operating principles | Durable roadmap purpose and maintenance rules | Retain in the current roadmap. |
| Lines 57–246: Current status index, observation audit, maintenance policy | Current status/navigation mixed with dated evidence and rules for historical entries | Retain the status/navigation and maintenance rules; classify any detailed dated audit material by subsection, not by the whole parent range. |
| Lines 247–1475: dated workspace clone, relocation, extraction, acceptance, and cleanup checkpoints | A largely contiguous sequence of completed or superseded migration history | Strongest candidate for verbatim extraction as one historical block, subject to per-entry link/evidence checks. Keep a concise current pointer if needed. |
| Lines 1476–2028: current baseline, completed milestones, application evidence, release critical path | Mix of durable current baseline, completed design/implementation evidence, and future release planning | Do not move as a range. Retain current baseline/critical-path content; assess only discrete closed chronology entries and their current evidence links. |
| Lines 2029–2558: post-release research, selected directions, priorities, maintenance, candidate milestones | Current, deferred, and future planning, including current Relative Time direction | Retain as current planning/research direction. Do not classify as historical merely because an entry has a date or is a decision record. |
| Lines 2559–2964: research priority, application maintenance, future portfolio/gates | Active priorities, maintenance, candidate milestones, and explicit deferrals | Retain as current planning. |
| Lines 2965–3626: deferred items and dated release/application follow-ups | Open, deferred, completed, and superseded records intermixed | Classify at entry/subentry granularity; retain unresolved work and current sequencing. |
| Lines 3627–9676: reconstruction/current-canonical summary and extensive follow-up ledger | A section titled as current summary followed by a large accumulation of dated implementation/checkpoint entries; statuses are mixed | Do not move the titled section wholesale. Retain the actual current summary and open/current work; extract only discrete historical blocks with a verified superseding/current authority. |
| Lines 9677–13,444: current Initial Layout / Parallel Presentation coordination and later dated entries | Current coordination and detailed completed/accepted/active evidence coexist | Classify individual entries. Current coordination, active tasks, and the current status index stay in `roadmap.md`. |

Line numbers are inspection aids, not stable identifiers. The defensible
extraction boundary is by complete original entry/subentry, not by these
absolute ranges. The first range above is a candidate contiguous tranche; it
is not approved for extraction. In the later mixed regions, status labels
alone are insufficient: a closed entry may still be authoritative evidence,
and an old-looking `NEXT` or `OPEN` statement may be a preserved historical
snapshot rather than current work.

## Bounded physical layout alternatives

These are the two practical branches supported by the selected direction and
current path policy. Neither is selected here.

| Option | Physical form | Current roadmap retains | Separate unit contains | Main benefits and risks |
| --- | --- | --- | --- | --- |
| **A — One flat companion** | Keep `docs/roadmap.md`; add one companion Markdown file directly under `docs/` (for example, a name such as `roadmap-chronology.md` is illustrative only). No directory is created. | Purpose/principles, current status, priority/dependencies, active workstreams, pending Human decisions, current summaries and links. | All approved historical blocks, verbatim and in original source order, with only a short provenance/index preface. | Fewest units and simplest navigation/path surface; leaves `docs/` flat and creates one very large companion whose internal navigation may need an index. |
| **B — Small indexed chronology set** | Keep `docs/roadmap.md`; create one narrowly scoped chronology directory with an index and a small number of broad chronological or responsibility-based volumes. Directory and volume names/count are undecided. | Same canonical current-planning duties as A; links to the chronology index and relevant volumes. | The same verbatim historical blocks, divided into a few broad units, preserving order within and across the index. | Better navigation and limits per-file size; requires a new directory, a nontrivial partition rule, more paths/anchors, and risks crossing into the deferred `docs/` taxonomy decision. |

Issue-per-file is not proposed. The options do not authorize adding separate
workstream roadmaps or another current-planning authority.

## Extraction boundary and chronology/provenance rules

For either layout, the migration manifest should identify each complete
source heading/subheading and classify it before moving anything:

- **Keep in current roadmap:** purpose and operating principles; current
  status index; current priorities, dependencies, active or deferred work;
  current Human decisions and pending decisions; and concise links to
  dedicated authoritative evidence.
- **Eligible historical block:** a dated completed/superseded checkpoint or
  earlier-state snapshot whose status is demonstrably historical and whose
  current/superseding authority (if any) is identified. A result's being
  complete or old is not, by itself, a reason to move its dedicated source
  document or remove its current evidence link.
- **Hold for Human classification:** mixed sections, unlabelled status,
  unresolved/open content, apparent current authority, or any block whose
  extraction would obscure a still-current decision or dependency.

Move eligible roadmap text as complete blocks without paraphrasing,
reinterpreting, shortening, or deleting its evidence. Preserve original
headings, text, order, and dated status wording. Any archive introduction or
cross-reference is clearly outside the transcribed historical block and
labels it as retained chronology, not current planning authority. Maintain a
source-heading-to-destination-heading manifest for link repair and review.

`docs/roadmap.md` remains the sole authority for current planning. The
historical unit is evidence of earlier states, decisions, and checkpoints; it
cannot establish current status or supersede a newer roadmap entry. The
roadmap links to the historical index/sections; each historical unit links
back to the current roadmap and identifies the current-status authority.
Historical statements that once said `current`, `next`, or `open` remain
verbatim snapshots and must be labeled by their archival context, not silently
rewritten.

## Observed reference impact

The current read-only scans found:

- Five Markdown links outside `roadmap.md` target a specific roadmap heading:
  Session 0094's next-workstream sequence; the prior IA preparation's
  Relative Time state-sync heading; the Relative Time adoption-readiness
  document and semantic-contract research's current-vocabulary heading; and
  the extensible-vocabulary direction document's future interval-semantics
  heading. These targets are current direction/status material and should
  remain in the current roadmap under either option.
- Two intra-roadmap fragment links target headings: the workspace-placement
  summary near the top and the GitHub Sponsors follow-up later in the file.
  If either target heading is extracted, its source link must be updated or a
  Human-approved compatibility target retained.
- A literal `roadmap.md` path mention appears in 73 Markdown files across
  e2r-spec and the four scanned sibling repositories. This count includes
  prose and historical references, not only links. Two inspected LiaisonScape
  JSON evidence records also mention `docs/roadmap.md` as a historical path.
- No direct cross-repository Markdown URL to
  `e2r-spec/docs/roadmap.md` was found in the scanned sibling repositories.
  The observed external GitHub links into e2r-spec target other documents;
  they do not require changes if those targets remain in place.

The path `docs/roadmap.md` is retained, so path-only references continue to
resolve. They need edits only when their claim points to detail moved out of
the roadmap or describes a section as current when it is no longer there.
Before migration, repeat a complete repository and sibling-repository search
for Markdown links, heading fragments, plain path mentions, scripts, fixtures,
and structured text. Distinguish verified links requiring repair from
historical prose that should remain accurate. No repository-wide redirect or
heading-anchor compatibility contract currently exists.

The existing Documentation IA audit checked 746 local Markdown links across
920 Markdown files and reported three unresolved targets at that earlier
snapshot. Those findings are historical audit evidence, not a current clean
bill of health; the migration gate must establish a fresh baseline and avoid
guessing replacements for unresolved cross-repository targets.

## Migration validation and recovery boundary

Before any future physical edit, a separately Human-reviewed migration
checkpoint should provide:

1. the selected layout and exact paths/units;
2. a source-to-destination extraction manifest, including every retained
   current section and every deferred/ambiguous block;
3. a complete inbound-reference inventory and explicit disposition for each
   affected path/anchor, including external ownership;
4. a verbatim-content/provenance comparison for every transferred block;
5. a link and heading-anchor checker run against both the pre-migration
   baseline and proposed tree, with unresolved historical links reported
   separately from newly introduced breaks;
6. checks that `roadmap.md` alone states current status/priority and that
   chronology material is labeled historical and links back to the current
   authority;
7. repository validation and Human review of the final staged diff.

The roadmap, new history unit(s), and all approved link repairs should land
atomically in one bounded migration commit. If extraction or validation fails
before commit, stop without committing and preserve the baseline for review.
If a committed migration later proves faulty, recover with a reviewed forward
correction (or a Human-authorized revert); do not rewrite shared Git history.
This preparation does not execute that migration or prescribe an automatic
rollback of unrelated work.

## Deliberately retained for a later Documentation IA checkpoint

Do not reorganize the rest of `docs/`, move its existing 650-plus Markdown
records, create a general taxonomy, or choose a policy for placing all future
documents as part of roadmap modularization. After the roadmap responsibility
split is completed and reviewed, a separate Human checkpoint can reassess root
flatness using actual post-migration inventory and navigation evidence.

## Human decisions still required before migration authorization

1. Choose Option A (one flat companion) or Option B (a narrowly scoped
   directory with a small indexed set of broad units), or request another
   bounded option. This determines whether a directory is created and the
   physical unit count.
2. Approve the exact chronology partition and section-level extraction
   manifest after the candidate blocks have been reviewed. The contiguous
   workspace-migration sequence is the clearest initial candidate; mixed
   later sections require entry-level classification.
3. Decide how to handle any affected old heading anchors or external
   references if the final inventory discovers consumers beyond the current
   scan; known internal references can otherwise be updated to exact new
   targets in the same migration.

The following do not require a separate semantic choice: `docs/roadmap.md`
stays the current-planning entry point; current/open/pending planning remains
there; extracted text retains exact wording and source order; no dedicated
result document is moved merely because it is closed; and the general `docs/`
taxonomy remains deferred. These are consequences of the selected direction
and existing authority boundaries, not a selection of physical destination.

## Validation performed for this preparation

Read-only inspection covered the current roadmap headings and status layout,
the prior IA audit, Documentation Hub/Plan, five-reference Markdown anchor
search, sibling-repository Markdown paths, and two LiaisonScape JSON path
mentions. No roadmap split, file movement, link rewrite, directory creation,
or cross-repository write was performed. The checks here prepare a migration
gate; they do not constitute post-migration validation.
