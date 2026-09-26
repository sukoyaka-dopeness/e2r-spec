# Documentation IA / Roadmap Chronology Structure Decision 1

Date: 2026-09-24

Status: **HUMAN-SELECTED PHYSICAL STRUCTURE DIRECTION — BOUNDED MIGRATION EXECUTED UNDER SEPARATE RESULT; `docs/`-WIDE REORGANIZATION DEFERRED**

## Authority and context

This record documents the Human's additional physical-structure selections
after the [Roadmap Physical Modularization implementation-preparation
record](documentation-ia-roadmap-physical-modularization-implementation-preparation1.md).
That preparation and the earlier [Roadmap-first direction decision](documentation-ia-roadmap-physical-modularization-direction-decision1.md)
remain historical evidence and are not rewritten as if they had selected
these physical details. This record selects the bounded roadmap-history
layout; it does not authorize a general reorganization of `docs/`.

## Human-selected physical structure

- Keep `docs/roadmap.md` as the sole current-planning authority and entry
  point.
- Use `docs/roadmap-history/` for retained historical roadmap material.
- Use `docs/roadmap-history/README.md` as the navigation and authority-boundary
  surface.
- Use `docs/roadmap-history/legacy-chronology.md` for the pre-migration
  chronology transferred in the first bounded migration. This is a
  preservation unit for that legacy material, not an unlimited append target.
- Keep future chronology in a few broad, long-lived workstream units when
  needed. Assign each cross-workstream chronology item one primary workstream
  location and refer to it rather than storing duplicate copies.
- Do not create issue-, checkpoint-, or short-lived-milestone-specific history
  files. Do not pre-create empty future workstream files.
- Leave the `docs/`-wide directory taxonomy and relocation of its existing
  documents to a later, independent Documentation IA checkpoint.

## Scope and authority boundary

The selected physical responsibility split is limited to current roadmap
planning versus retained chronology, together with the navigation and
reference integrity required for that split. The roadmap remains the only
current source for status, priority, dependencies, active work, and pending
Human decisions. The history area preserves earlier evidence; its dated
`current`, `next`, or `open` wording is historical context, not current
planning authority.

This record does not select a general `docs/` taxonomy, migrate other
documents, or change specification authority. Concrete extraction remains
subject to the conservative manifest rule in the migration gate: move only
complete blocks demonstrably historical; retain ambiguous blocks in the
roadmap without implying that they are permanently current.
