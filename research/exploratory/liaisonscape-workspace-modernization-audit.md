# LS-M1 — LiaisonScape Workspace Modernization Audit

Date: 2026-08-25

Status: **Audit complete; implementation deferred**

Scope: read-only audit of the current LiaisonScape Workspace. No LiaisonScape,
NarrativeLine, Validator, Hub, Core, Extension, Dataset, or LICENSE file was
changed.

## Evidence and constraints

The audit inspected the current LiaisonScape source, styles, tests, the
NarrativeLine workspace action evidence, the e2r-spec roadmap, and accepted
knowledge. Relevant constraints were:

- `ai-knowledge/decisions/dataset-acquisition-entry-point-alignment.md`
  establishes Home as the canonical primary acquisition/replacement surface
  and workspace access as secondary.
- `ai-knowledge/decisions/liaisonscape-automatic-self-loop-node-avoidance.md`
  keeps automatic layout application-specific and bounded.
- The cross-app action-hierarchy material remains a hypothesis/review prompt;
  it does not authorize identical DOM, CSS, or application behavior.
- The accepted P0 ledger records Object ID, title, More, notice, tooltip,
  safety, destructive styling, and Initial Node Placement follow-ups.

The current local application checkpoint was LiaisonScape `b0c2057`; the
read-only baseline passed 182 tests, TypeScript lint, and production build.
NarrativeLine was referenced at `8b0dd76` and was not changed.

## Current Workspace anatomy

| Area | Current implementation | Current behavior |
| --- | --- | --- |
| Header | `src/App.tsx` `.app-header` | LiaisonScape brand, Home link, locale switch |
| Workspace heading | `src/App.tsx` `.page-header` | `Entity graph` and explanatory subtitle |
| Dataset actions | `src/App.tsx` `.dataset-actions` | Workspace Open, Export, Add Entity, Add Relation, Save Coordinates, More |
| Open Dataset | `workspaceOpenFileInputRef` and `openWorkspaceDataset` | Visible desktop action; hidden file input; replacement safety is delegated to existing App flow |
| Export | `exportDataset` / `exportCurrentDataset` | Visible desktop action and duplicated inside mobile/maintenance More |
| Add Entity | `openCreation("entity")` | Visible editing action |
| Add Relation | `openCreation("relation")` | Visible editing action |
| More | native `details.maintenance-menu` | Existing native disclosure; contains Export, Save Coordinates, migrations, and mobile viewport controls |
| Viewport toolbar | `.viewport-controls` | Desktop draggable zoom toolbar; mobile controls appear inside More |
| Graph notice | `graph.unsupportedEdges > 0` | `p role="status"` directly under the Graph heading/toolbar |
| Dataset metadata | `.dataset-metadata` | Title and Dataset ID are shown below workspace controls; Dataset ID is CSS-hidden by current presentation rule |
| Detail panel | `EntityDetailDialog`, `RelationDetailDialog` | Modal detail surfaces with editable content and visible full Object ID |
| Ownership popover | `.placement-hover-popover` | Pointer hover status for Entity body, Node label, Relation path, Relation label |
| Footer | `.workspace-footer` | Credits action at the workspace footer |

The action row wraps at narrow widths. The desktop Open action is hidden on
mobile by `mobile-hide`; the native More disclosure remains available. The
current More has no dedicated application-level Escape/outside-click/focus
return contract beyond native `<details>` behavior, so those behaviors require
focused LS-M2 evidence if More becomes the primary workspace container.

## Action hierarchy decision

**Selected result: MOVE OPEN + EXPORT TO MORE.**

1. Open Dataset should move into More. Home remains the primary acquisition and
   replacement surface; workspace Open is a secondary convenience action.
2. Export E2R JSON should move into More. It is a secondary workspace command,
   not a graph-authoring action.
3. Add Entity and Add Relation remain visible primary graph-authoring actions.
   Save Coordinates remains visible only if its current pending-coordinate
   role continues to justify a visible action after the focused implementation
   audit; it should not be moved as an incidental part of this decision.
4. More remains the terminal secondary-action container. Exact labels and
   geometry remain LiaisonScape-local and must not be copied mechanically from
   NarrativeLine.
5. Narrow/mobile behavior does not reverse the hierarchy. The action row may
   wrap or use the existing mobile More surface, but Open and Export should not
   become competing primary actions.
6. The current desktop Open plus mobile More Export duplication is a concrete
   hierarchy inconsistency. The implementation must remove duplication without
   changing Dataset Replacement Safety.

### Minimum More contract for LS-M2A

Reuse the existing local native disclosure pattern rather than creating a
shared cross-app menu package. LS-M2A must verify:

- keyboard activation of the trigger with Enter and Space;
- visible and accessible menu semantics in EN/JA;
- deterministic item order: Open Dataset, Export E2R JSON, then any remaining
  secondary maintenance actions;
- disabled/loading behavior while replacement or file work is pending;
- Escape close, outside-pointer close, and return focus to the trigger;
- safe behavior at desktop, narrow usable widths, and the existing responsive
  boundary; and
- preservation of the current replacement confirmation, pending-work, export,
  and beforeunload semantics.

This is a contract for implementation evidence, not an implementation in
LS-M1.

## Dataset title decision

Current LiaisonScape displays the title in `.dataset-metadata` but does not
provide editing. The title is absent from storage when `metadata.title` is
absent and the UI displays an `Untitled` fallback. Dataset ID is also presented
in the same metadata block but is currently hidden by presentation CSS.

**Preferred direction: D2 — title display with an explicit Edit action nearby.**

The edit action belongs in the top-level Workspace identity surface, not More.
It should use the existing Dataset-level metadata update path, preserve unknown
Metadata fields and Extensions, participate in `datasetModified` and Dataset
Replacement Safety, and provide explicit empty-title removal semantics:
empty or whitespace-only input removes `metadata.title`; it does not persist
`Untitled`.

Inline editing (D1) remains a possible implementation detail for the explicit
Edit action, but is not required by this audit. A Dataset Settings dialog (D3)
and More-menu title editing (D4) are deferred; D4 conflicts with title being
primary Dataset identity/presentation information.

Future Dataset details/settings may contain title, description, content
language, license, Core version, Extension information, and Dataset ID. LS-M1
does not design that surface and does not duplicate Dataset ID into Object
Detail.

## Object ID direction

Current Entity and Relation Detail dialogs show the full ID in an ordinary
`dl`, alongside primary content and editable fields. There is no copy action,
no disclosure, and no dedicated low-priority technical section. Long values
wrap through the shared detail styles, but the information hierarchy is not
yet aligned with P0.

**LS-M2C direction:** use an accessible disclosure, preferably native
`<details><summary>Technical details / 技術情報</summary>…</details>` if it
fits the current dialog architecture. Put the full Object ID and Copy action
inside it. Keep it read-only, collapsed by default, keyboard accessible,
localized, and safe for long IDs at narrow widths. Apply the same hierarchy to
Entity Detail and Relation Detail. NarrativeLine Event/Entity Detail should
later follow the same information hierarchy; it is outside LS-M1.

## Hidden Event-related Relations notice

The current logic uses the graph's `unsupportedEdges` count. It counts valid
Dataset Relations whose endpoints include an Event and therefore cannot be
represented in the Entity-only graph. The Dataset remains valid, the Relations
remain in the Dataset, and the count updates with the currently loaded graph.
The notice is rendered as a `role="status"` paragraph below the Graph heading
and viewport controls.

Classification: **DATASET CAPABILITY NOTICE**, with a persistent informational
role while the count is greater than zero. It is not an error, validation
failure, or destructive warning.

Preferred placement: **H3 — compact information row beneath Workspace
title/actions**, close enough to explain graph scope before the viewport.
Fallback: **H4 — collapsible graph information/details area**. H5 More is not
preferred because hiding a material limitation there could make users assume
the graph represents every Relation.

When count > 0, a compact count should remain always visible. The explanatory
sentence may be collapsible if the compact row remains clear and accessible.
The implementation must preserve the current Relations and must not relabel
the notice as an error without new evidence.

## Ownership tooltip/popover audit

All four contexts use the same `.placement-hover-popover` geometry:

- Entity body;
- Node label;
- Relation path;
- Relation label.

The current shared rule is `width: max-content`, `max-width: min(240px,
calc(100vw - 24px))`, `padding: 6px 8px`, `font-size: .875rem`,
`line-height: 1.35`, `overflow-wrap: anywhere`, fixed positioning, and
viewport-edge clamping. The ownership line uses smaller `.75rem` typography
with a 4px top margin. Content length, Japanese glyph width, and edge-clamped
intrinsic width can all contribute to the observed oversized appearance; a
max-width-only reduction would not identify the cause.

Current results by context:

| Context | Current result | LS-M1 decision |
| --- | --- | --- |
| Entity body | Shared popover explains Entity/name context; ownership line is omitted | Needs visual experiment, no geometry change |
| Node label | Includes bounded description and placement ownership | Needs visual experiment, distinguish label text from ownership |
| Relation path | Includes endpoints/self relation and ownership | Needs visual experiment, preserve route context |
| Relation label | Includes relation context and ownership | Needs visual experiment, preserve label context |

Selected direction: **NEEDS VISUAL EXPERIMENT**. Keep shared geometry initially;
measure short, medium, long, Japanese, English, viewport-edge, and narrow
cases, separating typography, padding, max width, intrinsic text width, and
edge shifting. The ownership popover remains interaction/ownership context;
it must not become Object Detail, a technical metadata viewer, a help system,
or an error notice. Object ID belongs in Technical details.

## Workspace information hierarchy

1. Header: product identity, Home, locale — navigation/contextual.
2. Workspace identity: title and minimal Dataset identity — primary context;
   title Edit is a primary Dataset action, not a More command.
3. Workspace graph actions: Add Entity and Add Relation — primary editing.
4. More: Open Dataset, Export E2R JSON, and secondary maintenance actions —
   secondary workspace commands.
5. Dataset capability notice: compact persistent information — informational.
6. Viewport toolbar: zoom/pan controls — graph presentation/tooling.
7. Graph viewport: primary content — visualized Entity graph.
8. Selection/detail surface: current object editing and relations — contextual.
9. Technical details disclosure: IDs and future technical metadata — low
   priority/technical.
10. Ownership popover: placement/interaction explanation — transient/contextual.
11. Footer: Credits and repository context — peripheral navigation.

## Responsive and safety boundaries

The current 600/601px boundary uses desktop/mobile classes and a wrapping action
row. LS-M2 must verify More, title Edit, capability notice, and Technical
details at normal desktop, around 600/601px, and narrow usable widths. No
workspace-wide minimum width or toolbar redesign is selected by this audit.

Dataset Replacement Safety is preserved: Open relocation must continue through
the existing candidate staging and replacement confirmation path, including
modified, pending, export-and-continue, discard, cancel, and beforeunload
states. No action-placement change may bypass those semantics.

The LiaisonScape/NarrativeLine deletion asymmetry and destructive styling
parity remain **CROSS-APP DATA SAFETY FOLLOW-UP — OUT OF LS-M1 IMPLEMENTATION**.

Initial Node Placement remains a major follow-up comparable to NarrativeLine
display-order work. The next phase is `LS-LAYOUT-1 — Initial Node Placement
Objective Audit`, retaining the metrics edge crossings, node overlap, label
overlap, edge length, graph bounding area, connected-component separation,
layout stability, and incremental stability. Automatic placement remains
Derived presentation behavior and may not silently write Coordinate/Layout data.

## Public Sample Dataset Refresh

This follow-up was absent from the P0 ledger and is added as a minimal planning
entry, not as a sample or Hub change:

**Public Sample Dataset Refresh — before Hub publication modernization**

- inventory every public sample and preserve its intended role;
- update each to the accepted current representation where appropriate;
- validate with the production Validator;
- smoke/round-trip through NarrativeLine and LiaisonScape as appropriate;
- verify Hub Handoff and license/redistribution eligibility; and
- distinguish Stable-oriented and Experimental samples clearly.

No sample, Hub, license metadata, or Extension version is changed by LS-M1.

## Implementation decomposition

The accepted modernization is split into independently testable checkpoints:

1. **LS-M2A — More/action hierarchy:** move Open and Export into More,
   remove duplication, verify keyboard/focus/close behavior and replacement
   safety.
2. **LS-M2B — Dataset title editing:** add the explicit Workspace title Edit
   flow, empty-title removal, preservation, and dirty-state evidence.
3. **LS-M2C — Object ID Technical details:** add the disclosure and copy
   affordance to Entity and Relation Detail.
4. **LS-M2D — capability notice placement:** move the compact Event-Relation
   notice to the accepted information row and verify accessible persistence.
5. **LS-M2E — tooltip/popover visual experiment:** measure all four contexts and
   choose geometry only from bounded visual evidence.

Recommended first checkpoint: **LS-M2A**, because the current desktop
Open/Export duplication is concrete, the local More primitive already exists,
and the change has a clear focused acceptance boundary. LS-M2B follows because
title is primary Workspace identity; LS-M2C and LS-M2D are next; LS-M2E remains
visual-evidence dependent.

Priority ranking by user impact, risk, cross-app consistency, data safety,
implementation size, and visual dependency:

| Rank | Checkpoint | Reason |
| --- | --- | --- |
| 1 | LS-M2A More/action hierarchy | Concrete duplication; small bounded change; safety must be preserved |
| 2 | LS-M2B title editing | Primary identity gap; requires careful dirty-state handling |
| 3 | LS-M2C Technical details | Cross-app metadata hierarchy; low semantic risk |
| 4 | LS-M2D capability notice | Improves graph-scope comprehension; placement needs acceptance |
| 5 | LS-M2E popover experiment | Highest visual uncertainty; avoid speculative CSS change |

## Disposition

LS-M1 is complete as an audit/design checkpoint. The selected next phase is
LS-M2A. No application implementation, sample refresh, Metadata 1.1.0
implementation, S3, Hub publication, or Initial Node Placement work starts
automatically.
