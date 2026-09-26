# Documentation IA / Roadmap Physical Modularization Direction Decision 1

Date: 2026-09-24

Status: **HUMAN-SELECTED STRUCTURE DIRECTION — IMPLEMENTATION NOT STARTED**

## Decision authority and context

This record documents the Human-selected Roadmap-first structure direction,
following the alternatives and evidence in the [Documentation IA / Roadmap
Physical Modularization Decision Preparation 1](documentation-ia-roadmap-physical-modularization-decision-preparation1.md).
The preparation record remains decision-preparation evidence and is not
rewritten as though it had selected an option. This record is the authority
for the selected direction; it is not an implementation plan or authorization
to move files.

## Human-selected direction — Roadmap first

- Keep `docs/roadmap.md` as the canonical entry point for current planning,
  and simplify it around current status, priorities, dependencies, active
  workstreams, and pending Human decisions.
- Keep detailed acceptance, audit, research, and decision evidence in their
  dedicated documents as the relevant authority/evidence. The roadmap should
  link to those records rather than duplicate their detailed contents.
- Separate completed, superseded, and historical chronology physically from
  the current-planning body while retaining that material as historical
  evidence. Do not rewrite its meaning or discard evidence as a goal of this
  separation.
- Limit this roadmap modularization direction to separating current-planning
  and historical-chronology responsibilities, plus the reference integrity
  required to do so.
- Do not make issue-per-file modularization the default.

## Explicitly deferred structure and migration decisions

This decision does not select:

- the chronology destination or filename;
- the final number of roadmap/chronology files or how chronology is divided;
- whether a directory is created;
- heading-anchor, local-link, or cross-repository reference migration details;
- a taxonomy for `docs/` as a whole or relocation of its 650-plus Markdown
  documents;
- moving, renaming, or archiving existing documentation;
- placing only future documents in subdirectories.

The flatness of `docs/` remains a known Documentation IA issue for a separate
checkpoint after roadmap modularization. Its need and structure are not
decided here. No general directory reorganization, broad archive migration,
or cross-repository migration is selected.

## Next checkpoint and implementation gate

The next step is a bounded implementation-preparation / migration-gate
checkpoint. It must inspect current repository references, anchors, ownership,
and provenance, then bring the concrete chronology unit, path choices, and
link-integrity plan back for Human review before any physical edits. This
direction alone does not authorize the roadmap split, chronology extraction,
directory creation, move/rename/delete, archive migration, or link rewriting.

The Documentation IA audit's earlier recommendation to retain existing paths
and one roadmap for the time being remains historical evidence of its earlier
assessment. This Human decision selects the roadmap/chronology responsibility
direction for subsequent preparation; it does not retroactively alter that
audit or its findings.
