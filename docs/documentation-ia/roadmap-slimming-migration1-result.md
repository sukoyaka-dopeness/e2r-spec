# Roadmap Slimming Migration 1 Result

Date: 2026-09-24

Status: **BOUNDED FIRST TRANCHE COMPLETE — CURRENT-PLANNING AUTHORITY RETAINED**

## Authority and scope

This result records the first migration tranche under
[Roadmap Slimming Audit 1](roadmap-slimming-audit1.md), against the roadmap
baseline following commit `a0d5524fab7363c03364118cfa6e8665c8bf8844`.
`docs/roadmap.md` remains the sole current-planning authority. The history
index and chronology preserve prior status as historical evidence only.

Only high-confidence first-tranche material was changed. The mixed `Roadmap
reconstruction checkpoint — current canonical summary` and `Current Initial
Layout / Parallel Presentation Coordination (2026-09-13)` sections remain
outside this migration. Open/deferred work, pending Human decisions, current
dependencies, the qualified Human Check B boundary, and the wider `docs/`
taxonomy were not moved or reclassified.

## Migration made

The following complete original roadmap H2 blocks were moved verbatim and in
their original source order to
[`roadmap-history/release-and-cross-app-chronology.md`](../roadmap-history/release-and-cross-app-chronology.md):

- `Initial Public Release critical path`;
- `Current public-release execution priority (2026-08-22)`;
- `Cross-App Shell follow-up record (2026-08-23)`;
- `Immediate sequence`; and
- `Cross-App Locale consumer readiness checkpoint (2026-08-23)`.

This is one broad release / cross-application chronology unit, not
issue-per-file history. The original text, internal sequence, date/status
wording, and recorded source baseline are preserved. A historical authority
preface is outside and visually separate from the verbatim blocks.

Completed Specification Extension / Validator milestones and Coordinate
prototype, draft, cross-application, and read-only Validator recaps were
compressed in place to current status and dedicated authority links. In
`Current baseline`, completed architecture, agenda-reflection, tooling,
Dataset Replacement Safety, and NarrativeLine Focus Phase 2 recaps were also
shortened without changing their status or scope. The active Layout persistence
experiment and the Focus Phase 2 deferred boundary remain represented.
`Cross-App Locale execution update (2026-08-24)` remains in the roadmap
because it also contains non-blocking follow-ups whose current disposition
was not safe to infer in this tranche.

## Navigation and authority synchronization

`docs/roadmap-history/README.md` indexes the new chronology and explains that
its old `current` / `next` / `open` wording is snapshot language. The roadmap's
status index continues to state the current public-release closure and now
links to both preserved chronologies and this result. Its Roadmap-first status
entry links the Audit and this completed tranche; no second planning authority
was created.

Before editing, the migration re-scanned e2r-spec and the four sibling E2R
repositories read-only for Markdown links/path mentions targeting the affected
headings. No tracked Markdown link or fragment to the five removed H2 headings
was found. Path-only and historically accurate prose mentions were not
rewritten. The prior implementation-preparation scan remains the provenance
for broader path-mention counts; those counts were not represented as a new
census in this migration.

## Validation and remaining boundary

The five moved H2 blocks were compared byte-for-text (LF-normalized) against
the source at the migration baseline: all five match exactly, including
original order and wording. Dedicated targets were checked for existence;
the local Markdown link/anchor scan was repeated for the affected headings.
Repository validation and whitespace/diff checks were run before commit.

This result does not authorize the next tranche. The audit's other candidate
areas, particularly the mixed large checkpoint ledgers, require their own
complete-entry evidence review. No source/application code, schema, tests,
sample data, sibling repository, or unrelated documentation was changed.
