# E2R Cross-App Visual Hierarchy / Form Geometry Audit 1

Date: 2026-09-19

## Result

This checkpoint consolidates the currently recorded NarrativeLine / LiaisonScape
visual and CSS observations into one bounded audit. It is a documentation and
roadmap synchronization only. It does not change application runtime, CSS,
tests, locale messages, sample Datasets, User Guides, or persisted semantics.

Classification: **BOUNDED AUDIT CONSOLIDATED / NO IMPLEMENTATION AUTHORIZED**.

The purpose is role-equivalent comparison, not pixel identity. The current
source differences below are not, by themselves, visual defects. A future
implementation checkpoint may be created only after actual browser geometry and
human acceptance confirm a concrete user-facing problem.

## Authority and worktree state

The audit used current source/CSS first, then accepted browser and visual
records, then the current E2R-SPEC roadmap. Historical observations were kept
as provenance and were not treated as current defects when later source or
accepted records superseded them.

| Repository | Branch / HEAD | Current state |
| --- | --- | --- |
| e2r-spec | `main` / `4fda7f8a7b0d2105d3d8b74cff75ddb0852aecd2` | Existing dirty exploratory research and untracked `work/`; preserved |
| e2r-narrative-line | `main` / `ddabeb2cf89c4cbf3351da124eb11b2482ece12a` | Existing dirty `AGENTS.md`; preserved and not staged |
| e2r-liaison-scape | `main` / `e6a66dfecc3187e2be895c960eb3ff7804f1bb69` | Existing untracked research/temporary artifacts; preserved |
| e2r-hub | `main` / `9de639990396c95e48d6cad37f027c21c4de1962` | Clean; not changed |

Relevant Knowledge entries were reviewed:

* `ai-knowledge/hypotheses/reference-first-ui-consistency-audit.md` — source
  inspection does not replace browser geometry and human acceptance; do not
  infer a universal CSS rule from a local difference.
* `ai-knowledge/hypotheses/cross-app-action-hierarchy-and-destructive-controls.md`
  — compare action roles and safety semantics, not identical DOM or button
  placement.
* `ai-knowledge/playbooks/e2r-user-guide-writing.md` — user-facing labels and
  guides follow current application behavior; equivalent tasks do not require
  identical wording.

No new Knowledge entry is justified. This checkpoint applies existing
reference-first guidance to a roadmap consolidation rather than producing a
new reusable rule.

## Consolidated audit surface

### A. Screen-title and identity hierarchy

Current NarrativeLine source has a visible `Timeline` `h1` in
`src/screens/TimelineScreen.tsx`. Its shared `h1` rule is larger at wide
viewports and reduces at the responsive boundary. Event Detail and Entity
Detail use visible `h1` elements inside `.detail-header`; their desktop and
narrow sizes are locally specified in `src/index.css`.

Current LiaisonScape source has a different shell: the `page-header` containing
`Entity graph` is not visible under the current CSS, while the visible workspace
identity is carried by the application brand, Dataset metadata, toolbar, and
Graph surface. Entity Detail and Relation Detail are dialogs with local `h3`
detail headings. Creation dialogs use the same local dialog heading treatment.

This is an implementation difference between a timeline screen, a graph
workspace, and object-detail dialogs. It is not evidence that all headings
should have the same font size or HTML level. The unified audit should verify:

* page/workspace identity versus object-detail identity;
* Dataset identity versus screen title;
* heading-to-content association;
* EN/JA label length and wrapping;
* narrow and intermediate viewport hierarchy.

No Timeline heading CSS change is authorized by this record.

### B. Dataset title editing and action affinity

NarrativeLine `src/screens/TimelineScreen.tsx` renders the Dataset title input
and `Apply title` action in one `.dataset-title-editor` flex group. The input
has an explicit full-width/flexible rule and the action remains a separate
intrinsic-width control. English and Japanese copy are intentionally localized
(`Apply title` / `タイトルを適用`).

LiaisonScape `src/App.tsx` renders the Dataset title as a metadata `dt`/`dd`
pair. The value and `Edit` action are grouped in the value `dd`; edit mode
provides `Save` and `Cancel` with localized equivalents. Its CSS keeps the
value flexible, the action intrinsic-width, and the local gaps explicit.

The two implementations expose the same responsibility through different
workspace surfaces. The audit must compare whether the field/value and its
action are understandable as one task, including edit/save/cancel states,
keyboard focus-visible behavior, long EN/JA labels, wide/narrow wrapping, and
action copy self-descriptiveness. It must not force identical copy, DOM, or
button adjacency.

The accepted LiaisonScape Dataset metadata divider spacing and label/value
alignment records remain closed. Current source and roadmap already record the
accepted local baseline; those items are not reopened by this audit.

### C. Name input and form geometry

NarrativeLine Event Detail and Entity Detail currently render Name and
Description controls directly within the detail screen. The date controls have
their own explicit width behavior, while the Name controls do not share the
LiaisonScape `.detail-fields` selector.

LiaisonScape Entity Detail and Relation Detail use `.detail-fields` in
`src/components/EntityDetailDialog.tsx` and
`src/components/RelationDetailDialog.tsx`. `src/styles.css` explicitly applies
`box-sizing`, `width: 100%`, `max-width`, and `min-width` to input, textarea, and
select controls in that local surface.

This is a real source difference and remains a bounded audit candidate, not a
confirmed defect. The future comparison must measure actual rendered geometry
for Event/Entity/Relation detail and relevant Create surfaces, including:

* available parent width and grid/flex constraints;
* Name input usable width and Description textarea balance;
* short and long EN/JA values;
* wide, representative intermediate, and narrow widths;
* focus-visible state, clipping, wrapping, and horizontal overflow;
* pointer and keyboard interaction without weakening touch targets.

If a defect is confirmed, the smallest next implementation must be local to
the owning application/component. A universal `width: 100%` rule, shared
breakpoint, or cross-app stylesheet is not established.

### D. Control density, typography, and surface styling

The roadmap already contains a Cross-App control-density/typography follow-up
and a separate Cross-App Visual Style / Flatness Experiment. They are not new
wishlist items and are not silently converted into a broad CSS rewrite here.

The unified audit may record control density as an observation while checking
the hierarchy and form surfaces above. Radius, global button height/padding,
border contrast, hover/selected/focus/disabled/destructive states, elevation,
and generic surface styling remain a separate Flatness acceptance surface.
Semantic interaction behavior, dirty-state safety, navigation, and locale
semantics remain separate behavioral responsibilities.

## Difference classification

| Observation | Current source difference | Current classification |
| --- | --- | --- |
| Timeline vs Detail heading weight | NarrativeLine uses different local heading contexts and responsive sizes | Implementation difference; audit hierarchy, no defect confirmed |
| LiaisonScape workspace vs detail headings | Visible workspace identity and dialog `h3` have different roles; hidden `.page-header` is not a visible peer of NarrativeLine Timeline | Implementation difference; no forced parity |
| Dataset title field/action | NarrativeLine inline title editor versus LiaisonScape metadata/value/Edit surface | Equivalent responsibility with different presentation; audit action affinity, no defect confirmed |
| Name input width | NarrativeLine direct detail controls versus LiaisonScape local `.detail-fields` width rules | Bounded geometry candidate; no defect confirmed without browser measurement |
| Control density / Flatness | Existing roadmap experiment and local control vocabularies | Separate surface-style experiment; not merged into implementation |
| EN/JA action copy | Localized labels such as `Apply title`, `Edit`, `Save`, and Japanese equivalents | Intentional language difference; assess self-description and fit, not textual identity |

## Acceptance matrix for the unified audit

The later browser/manual audit should record equivalent states rather than
compare screenshots without state binding:

* NarrativeLine: Timeline, Event Detail, Entity Detail, Dataset title edit;
* LiaisonScape: Workspace Dataset title/edit surface, Entity Detail, Relation
  Detail, and relevant Creation surfaces;
* EN and JA;
* wide desktop, a representative intermediate width, and narrow width;
* pointer and keyboard operation, with focus-visible checks;
* normal, edit, disabled/read-only where applicable;
* short and long localized text;
* hierarchy, heading weight, input usable width, field/action association,
  wrapping, overflow, control density, and touch/focus accessibility.

The acceptance record must identify the exact browser geometry measured, the
human visual result, and the owning selector/component for any defect. Source
inspection alone is not a PASS. A candidate CSS change must be tested against
the same matrix before it is considered for a separate implementation
checkpoint.

## Disposition and dependency

The existing Cross-App visual-consistency result remains **A. CURRENT VISUAL
CONSISTENCY ACCEPTABLE / NO BOUNDED DEFECT** for the previously covered Detail,
dialog, metadata/ID, destructive-action, responsive, and shell surfaces. This
consolidation does not reopen those accepted closures.

The next bounded step is a browser/manual execution of this unified audit. It
is not a CSS implementation. If it confirms no defect, the result should close
the current visual follow-up cluster. If it confirms one defect, the next step
must be one smallest app-local implementation surface. If it confirms multiple
independent defects, human prioritization is required before implementation.

The existing User Guide / Public Sample refresh remains a separate pre-release
content/provenance checkpoint. The NL-H2-R1 fixture-loading blocker remains an
environmental manual-acceptance issue with no runtime fix indicated and is not
part of this visual audit.

## Safety and validation boundary

This checkpoint changes only E2R-SPEC documentation/roadmap records. It does
not modify NarrativeLine, LiaisonScape, Hub, Validator, sample Datasets, User
Guides, CSS, locale messages, tests, schema, or runtime behavior. Existing
dirty and untracked work is preserved.

Validation for the documentation change:

* `git diff --check`;
* `npm run validate` in `e2r-spec`.

No push, tag, deploy, release, or publication is performed.
