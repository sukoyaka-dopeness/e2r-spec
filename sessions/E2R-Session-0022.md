# E2R Session 0022 — Linkscape and Future Architecture Notes

Date: 2026-08-08

This document records discussion points and future research topics. It does not change the normative E2R Core or Extension specifications.

## Terminology

In E2R specification documents, use `Dataset`, `Event`, `Entity`, `Relation`, and `Extension` as the primary terms. In Japanese NarrativeLine UI, localized labels may be used:

- Event: できごと
- Entity: エンティティ（人、組織、場所、物、文書、ソフトウェアなど）
- Relation: 関連付け
- Extension: 拡張

`Entity` must not be explained as only a person. In the Core, it represents something that exists.

## Validator

Validator is maintained in its own repository as the reference implementation, not as the specification itself.

The long-term architecture is:

1. Core Validator, always available.
2. Official Extension Validators such as History, Coordinate, and Metadata.
3. Third-party Extension Validators.

Unknown Extensions must not invalidate a Dataset. A missing optional validator should be reported as skipped or informational rather than as an error. Output should distinguish `ERROR`, `WARNING`, and `INFO`.

Applications such as NarrativeLine and Linkscape should eventually call the reusable validation library directly, with the CLI remaining a thin wrapper.

## Linkscape direction

Linkscape should be Entity-first and should not duplicate NarrativeLine's Event-editing role. Event visualization is outside the initial MVP.

The initial MVP should remain small:

- Import a Dataset.
- Display Entity nodes and Relations.
- Zoom and pan.
- Select an Entity and open Entity Detail.
- Drag nodes.
- Save coordinates.

The MVP should not require Dictionary or semantic Relation labels.

Linkscape should treat Entity/Event as nodes and Relation as edges. Relations themselves should not become graph nodes. Core Relation direction (`sourceId` to `targetId`) should remain visible, but Relation meaning and labels belong to later Extensions or application presentation.

## Coordinate and Layout

Coordinate data represents explicit user intent. Layout data represents a layout algorithm or policy, not necessarily absolute positions.

Import behavior:

- If a stored coordinate exists, use it and preserve it.
- If a coordinate is missing, generate an automatic position.
- Automatic layout must not modify the Dataset until the user intentionally saves or edits coordinates.

The preferred initial layout is deterministic rather than random:

`datasetId (UUID v7) -> seed -> deterministic pseudo-random layout`

The graph structure may be incorporated into the seed later if needed. This allows the same Dataset to receive the same initial layout without requiring a Coordinate Extension.

Layout should become reusable infrastructure:

`Dataset -> Layout Engine -> Coordinates -> Renderer`

Possible engines include force-directed, timeline, circular, tree, and hierarchical layouts. Do not implement force-directed layout from scratch; begin with an existing library such as `d3-force`, then add label avoidance, icon-size awareness, fixed user nodes, and improved edge routing as requirements emerge.

NarrativeLine may eventually use a Timeline Layout Engine that converts History ordering into display positions without changing the recorded temporal data.

## Future Extensions and research

### Media Extension

A future Media Extension may define references to images, SVG, PDF, audio, and video. Media should preferably reference `datasetId` and `objectId` rather than embed a complete Dataset. This could support bidirectional discoverability while preserving the Dataset as the single source of truth.

### AI workflows

E2R can serve as an AI-friendly intermediate representation:

`NarrativeLine -> E2R Dataset -> LLM -> PDF / presentation / website / booklet / timeline / relationship graph`

Validator can be used in a generation-and-repair loop:

`LLM -> generate Dataset -> Validator -> repair -> Validator -> completed Dataset`

This is a future workflow, not a requirement for the Core.

## Documentation strategy

E2R-SPEC documentation targets developers, Extension authors, and implementers. NarrativeLine documentation targets end users.

The NarrativeLine User Guide should cover creating a Dataset, editing Events and Entities, Relations, saving, exporting, and opening the result in Linkscape. Documentation should evolve together with UI changes.

The E2R bilingual introductory guide should explain Dataset, Event, Entity, Relation, Core, Extension, a minimal JSON example, and the relationship between E2R and applications. It should use the specification terms consistently while adding beginner-friendly Japanese explanations.

## Linkscape visual assets

The correct application name is **Linkscape**, not Inkscape. Proposed future diagrams include:

```text
assets/
  diagrams/
    core-model.svg
    core-and-extensions.svg
    application-interoperability.svg
```

For now, one SVG should remain the source of truth when it can be displayed directly by browsers and GitHub. Do not create parallel `source/` and `dist/` copies unless a concrete export requirement appears. Use `viewBox`, avoid unnecessary fixed dimensions, preserve text where practical, and avoid filename variants such as `-v2-final`.

Core semantic colors must not be confused with E2R meaning. If Linkscape uses Entity/Event/Relation colors, they are application presentation. Light and dark themes should preserve semantic identity while adjusting contrast, preferably with CSS custom properties or `currentColor`.

## Decisions to revisit later

- Whether Linkscape stores user coordinates in Coordinate Extension or only as application layout state.
- Whether a Layout Extension should be standardized after real Linkscape requirements appear.
- How to distinguish automatic, user-fixed, and manually moved nodes.
- Whether multiple Relations with the same endpoints are allowed in the UI and how they are selected.
- How self-relations and Relation deletion should be presented.
- Whether Relation direction is always shown or can be a view option.
- How Entity and Event are distinguished visually without implying Core semantics beyond their definitions.
- How Core-valid but application-invalid Datasets are displayed and preserved.
- When Dictionary or Semantic Extensions should provide Relation meaning labels.

These questions should remain application or research decisions until interoperable requirements are demonstrated.
