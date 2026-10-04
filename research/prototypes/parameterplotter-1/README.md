# ParameterPlotter local browser prototype (Prototype 2 experiment)

Local, exploratory browser prototype. From this directory run `node serve.mjs`, then open `http://localhost:4179`. No package install or build is required. Import an E2R Dataset JSON file; the file is read into memory and never modified or exported by this prototype.

## Current Prototype 2 behavior (updated 2026-10-04)

The current runtime is the bounded, application-local Prototype 2 experiment
implemented on 2026-10-02. The accepted Prototype 1 evidence and refinement
history remains below and in the [Prototype 1 checkpoint](prototype-1-checkpoint-2026-10-02.md).

Current status: **HUMAN-ACCEPTED / CLOSED — bounded application-local scope;
19 Human PASS / 0 PENDING / B3 NOT RUN**. Human accepted the missing legacy
session browser evidence as a limitation; B3 is not PASS and no artificial
fixture was created. See the
[final acceptance and closure record](prototype-2-bounded-implementation-result-2026-10-02.md).

The [Human Browser Evaluation guide](prototype-2-human-browser-evaluation-2026-10-02.md)
is the canonical case/result authority and preserves B3 as NOT RUN.

Following Human's 2026-10-03 surface decision, Matrix has direct numeric
editing and Clear, but no value sliders. Profile retains its unchanged
sliders for detailed adjustment of one Entity. Matrix prioritizes comparison
of many Entities/Dimensions; direct editing, value-state warnings, column
reorder and commit position preservation remain. I2 evaluates Matrix direct
input and independent policies; M1 is unchanged. D1–D5, I1–I6, M1, R1–R4,
U1 and B1–B2 are Human PASS. B3 is NOT RUN because Human reports no actual
legacy session fixture, not because compatibility passed. Legacy code/coverage
remains; see the guide and implementation result for the accepted closure and
B3 evidence limitation.

The subsequent Matrix row-order refinement makes Entity names identity text,
not generic selection buttons. Separate row grips support native drag with
horizontal boundary insertion and Alt+Up/Down. `matrixRows` stores only a
Matrix-local session presentation order; Dataset/Entity Pool and other views
retain their own existing Entity order/navigation. Older sessions without
this property use the existing order without migration; newly added Entities
append in Matrix and deleted IDs are ignored. Direct editing/Clear, value
states, slider removal, column grips and commit position preservation remain.
Current machine coverage is **24/24** focused tests. Earlier Human confirmation
of row native drag/drop and Alt+Up/Down was partial. The 2026-10-04 Human
review subsequently confirmed the full Matrix handle and Drawer criteria; B1
is now PASS. The canonical evaluation guide carries the current status and
retains the earlier evidence as history. D1-D5/I1/I2/M1 PASS and B3 NOT RUN
remain recorded.

Row and column grips now share a quiet appearance: transparent border and
background at rest, matched hover treatment, explicit keyboard focus outline,
and pressed/native-drag feedback. Both remain focusable buttons with a
30 × 32px minimum hit area; invisible borders reserve feedback geometry.
This visual refinement changes no reorder payload, insertion or value policy.
Human subsequently confirmed resting, hover, focus and drag feedback, insertion
results, cleanup and right-edge behavior as part of the B1 PASS.

The subsequent decimal-random refinement retains authored MIN/MAX text and
uses the larger explicit fractional digit count, including trailing zeros,
as a local random/display hint. Integer-looking bounds give no hint. Hinted
random chooses all in-range decimal-grid candidates; no-hint random now uses
a 2-place (0.01) grid instead of the superseded 201-position picker. This
fallback is random-only, with no display padding or direct-entry constraint.
Unsafe grids are unavailable, never silently coarsened. Display pads authored-hint values but never truncates
meaningful extra digits. Direct input and existing records are not rounded,
repaired or constrained by the hint. Integer-only remains an independent
constraint and takes precedence for generation/display. See the
[refinement evidence](prototype-2-bounded-implementation-result-2026-10-02.md#decimal-random-refinement--2026-10-02)
and D1–D5 Human PASS evidence in the guide. Human has accepted and closed this
bounded scope at 19 Human PASS / 0 PENDING / B3 NOT RUN, with the missing B3
legacy-session browser evidence explicitly accepted as a limitation.

Profile and Matrix identity now both show Dataset / Temporary, matching Entity
Pool vocabulary without changing ownership or editability. Matrix keeps Name
on the primary line, short ID/badge in secondary metadata, and the quiet row
grip aligned to the first Name line (also for wrapped names). Hit area, focus,
row/column reorder, insertion indicators and session order remain unchanged.
See the [latest refinement evidence](prototype-2-bounded-implementation-result-2026-10-02.md#random-grid-and-entity-identity-refinement--2026-10-03)
and [short review supplement](prototype-2-human-browser-evaluation-2026-10-02.md#random-and-identity-review-supplement--2026-10-03).
Human subsequently reported **OK** for that supplement: full integer/hinted/
fallback random candidate rules, arbitrary direct-decimal independence,
unsafe-generation retention, Dataset/Temporary badges and row Name-line
alignment. This completes that bounded supplement only. Human results include
I2, M1, I3, I4, I5, R2, B1/B2, and now R4/U1 PASS. Current totals are 19
Human PASS / 0 PENDING / B3 NOT RUN. The bounded scope is Human-accepted and
closed; this does not convert B3 to PASS or compatibility automation to Human
evidence.

Quadrant selector details retain stacked Range / Unit / Values / Hint. Axis
names and Low/High endpoints now occupy external grid gutters: Y on the left
with High above / Low below; X below the plot with Low left / High right.
Both names use ordinary horizontal text and wrap without ellipsis.
Y gutter text is right-aligned toward the plot, including wrapped name lines;
the compact narrow Y is aligned to the gutter's plot-side edge.
Canvas contains only grid, points, Entity labels and interaction. Plot size may
shrink or grow with annotation layout; mapping still uses its actual bounds.
This visual refinement is part of the subsequently Human-accepted bounded
scope. Its dated review evidence remains in the
[evaluation guide](prototype-2-human-browser-evaluation-2026-10-02.md#external-axis-annotation-supplement--2026-10-03);
it is not a separate canonical evaluation case.

At widths up to 720px, the latest compact presentation shows only Y at the
left-edge center and X below the horizontal center. Full axis metadata stays
with the selectors; wide annotations are unchanged. The narrow footer places
Return selected to waiting and the plotted count on one row, followed by a
full-width explanatory paragraph. Its action/count now share .82rem text,
1.5 line-height and baseline alignment, preserving the button hit area and
12px separation from the explanation. See the
[compact review and supporting evidence](prototype-2-human-browser-evaluation-2026-10-02.md#compact-narrow-quadrant-review--2026-10-03), including an uncorrected
connector issue observed when scrolling immediately after viewport resize.

Matrix numeric commit preserves the edited row's location, internal vertical
scroll position, and page position. Add/Edit Dimension now provides an
Integer values only checkbox stored in session-local `integerOnly`. It governs
all new value commits for that Dimension, including random, sliders, Radar,
and Quadrant; unconstrained Dimensions continue to allow decimals. The former
Profile-global random checkbox is removed. Existing decimals are retained and
marked if the constraint is enabled later, and excluded from normal plot
positions until corrected or the constraint is removed. No automatic repair
or migration is performed. Generated integer candidates use a Prototype-local
safe-integer guard; no-candidate ranges leave records unchanged with a notice.

The runtime continues the Prototype 1 tab-local `sessionStorage` workspace.
Dimensions without explicit bounds use `-1..+1` only as a read-time legacy
compatibility path; loading does not add those bounds to stored records. New
Dimensions require finite decimal MIN and MAX values with MIN < MAX and have
no default. Unit is optional free text with a 240-character, Prototype-local
input limit. It is not parsed or converted.

Direct value entry accepts endpoints and values inside the Dimension range,
subject to the Dimension-local integer constraint when enabled.
Out-of-range edits are rejected and leave the recorded value unchanged. If a
later range edit puts an existing value outside its Dimension, the value is
retained and marked as outside range; Radar and Quadrant omit that value from
normal plotted positions and identify it in their local UI. Profile and Matrix
show the stored value and its range warning. Radar positions and Quadrant
coordinates derive from each Dimension's range and do not rewrite values.
Null/unassessed remains distinct from explicit zero.

Unconstrained Radar Arrow-key edit remains an absolute `0.05` increment from
Prototype 1; integer-only Dimensions use a local one-integer gesture. The
unconstrained gesture cannot move values in very narrow ranges; direct entry
and pointer drag remain available. Human review should determine whether a
later bounded refinement should adapt the local keyboard step.

Profile and Matrix are the direct value editors. All four views use the same
session-local values. Imported Dataset content remains read-only, and no
Dataset write-back, export, portable Observation model, Extension, schema,
Validator, production architecture, or product name is introduced. Scientific
notation input, nonlinear mappings, formulas, precision, directionality, and
portable zero/missing semantics remain unimplemented and undecided.

Run `node --test *.test.mjs` for the focused range-model and random-generator checks.

Dimensions, values, and application-only Entities are temporary application data in `sessionStorage`. They survive reloads in the same browser tab, but are discarded when its session ends. A different Dataset starts a fresh comparison workspace. Nothing is sent to a server. No assessment is inferred from imported Entities.

The dated interaction-pass entries below preserve Prototype 1 progression.
Prototype 1-only numeric display statements in that history are superseded
for the current runtime by the Prototype 2 behavior at the top of this file.

The four views share Entity identity, the dimension pool, and temporary values. View-specific dimension choices remain separate. This is an interaction probe, not a portable E2R contract or an adopted product name. It does not implement Dataset validation beyond the Core shape and Entity IDs, external vocabularies, multi-assessor observations, or long-term persistence.

## Second UI / interaction pass

Entity Pool and Dimension Pool open as right-side drawers. The Dimension list and search are the main management surface; Add/Edit opens an inline form inside that drawer. Profile and Radar use one Entity pager in the same header position. Quadrant uses that header position for its one-Entity waiting slot and plots separate points and labels. Matrix navigation moves through Dimension windows; it does not page Entities.

Quadrant label positions are a small deterministic display heuristic, including connectors for labels placed farther from points. Dense or unusually long labels may still overlap and are an intended subject for Human review. Entity-specific Profile/Radar content moves briefly on pager navigation; both drawers animate on open and close. Reduced-motion preference disables these animations. Matrix displays rounded values while retaining full stored temporary numbers.

## Third interaction pass

View order is Profile → Radar → Quadrant → Matrix. Radar Primary vertices and polygon follow pointer movement without easing; release commits the temporary value. Focused Radar vertices accept arrow keys in 0.05 steps. Quadrant points have a larger interaction target than their visual dot; labels select the same Entity without moving its value.

The Dimension form opens beside the Add workflow at the top of its drawer, while Search filters the list below. Entity Pool can create session-only Entities, visibly marked Temporary in the pool and Profile. The pager stays compact. Imported Dataset Objects remain unchanged.

## Current refinement

The Profile and Radar pager's Entity name opens Entity Pool. Quadrant has a waiting pager in the same header position; its arrows cycle only Entities that have no X/Y placement on the current axes. The center opens Entity Pool, where plotted Entities are unavailable as waiting candidates. Tapping an open plot position places the waiting Entity and assigns both values; returning it to waiting clears those two values.

Radar spokes now come directly from selected Dimensions. Add a Dimension to add a spoke, use the side list to reorder or remove one, and select at least three to display the chart. The normal Primary handles are restrained and remain responsive during drag. Profile's unassessed slider has a muted track and hidden thumb until interaction; explicit zero remains distinct from no value. Connector endpoints are measured against the rendered label's nearest edge center. The placement heuristic remains provisional for dense labels.

Pool Add actions and list Search fields have distinct positions. Entity Pool selection is click based; direct dragging from the drawer is not part of this pass. Quadrant's point and label select an Entity.

## Current interaction refinement

Radar Primary vertices remain visible as fine points and emphasize on hover, focus, and drag. Profile Dimension cards wrap long low/high labels and align value controls within each card row. Quadrant labels are placed using rendered bounds, treating other labels, point centers, and connector length as obstacles; connector lines begin at the visual point center and end at the nearest label edge. This is still a bounded prototype placement algorithm.

The Quadrant waiting pager shares arrow geometry with Profile/Radar and its central Entity can be dragged onto the plot on desktop. Tapping an open plot position remains available. Right-clicking a plotted point or label opens a menu with Open Profile and Return to waiting; returning replaces the one waiting slot and clears the active X/Y temporary values. Temporary Entity Profile shows a disabled Entity-only Add to Dataset preview. Dataset writing is not implemented.

Enter commits Profile/Matrix numeric edits. Native Enter submission is retained for the single-line Dimension and temporary Entity forms, subject to their required fields. Search inputs, selects, and multiline semantics are unchanged. This remains a ParameterPlotter experiment, not a Cross-App rule.

## Human observation refinement

Header actions now open the Entity and Dimension pools without repeating their counts; counts remain in the status line. Entity Pool shows description under the name when present, and a short ID when visible names may collide. Only session-only Entities offer Edit and Delete. Matrix uses Entity Pool selection to scroll to and briefly highlight the selected row.

Matrix explains the temporary −1 / 0 / +1 range, blank values, and two-decimal display. Numeric edits commit on Enter or valid blur; invalid input stays in the field with an inline error. An untouched rounded display never overwrites the full stored value. Browser-native alerts and confirmations are not part of normal Prototype interaction. Dimension and temporary Entity deletion use a focused application confirmation dialog, with Cancel leaving data unchanged.

Same-name Dimension creation prompts for an intentional continuation, with a stronger warning when name and both endpoint labels match. Identity remains a local ID, not the display name. Radar shows Dimension names around the chart and scales with the available width and viewport height. Quadrant label selection excludes candidates outside the plot inset, while points remain fixed. Add to Dataset is still an unavailable Entity-only preview; there is no Dataset write-back or export.

## Human observation refinement (2026-10-01)

- Header actions are `Entities` and `Dimensions`; counts remain in the status line. Entity Pool rows use a shared selection/action layout. The overflow action is reachable by pointer, touch, or keyboard. Temporary Entity deletion stays within session data; Dataset deletion and Add to Dataset are unavailable. The existing applications inspect connected Relations before deletion; LiaisonScape explicitly refuses Entity deletion while incident Relations remain. This prototype does not choose a Dataset reference deletion policy.
- Creation forms request `autocomplete="off"` on the form and individual fields, with purpose-specific field names. Browser implementations may still offer saved suggestions. No long-term Dimension history, bundled vocabulary, or external suggestion source is added.
- Radar controls keep the selected Dimension list as its own scrolling area. Spoke labels use stable outer-endpoint connectors, and duplicate names include a short local ID. Ten spokes is a provisional Prototype display cap informed by the observed loss of comparison readability at twelve; existing sessions with more spokes remain intact. It is not a semantic limit or portable rule.
- Quadrant label placement remembers each Entity's last valid offset and reuses it when it remains inside the plot and free of new collisions. Primary-button point drag can return a plotted Entity to the waiting area, clearing the current X/Y temporary values; the context menu remains available by right click on the point or label.
- Value editing, sessionStorage scope, Dataset read-only behavior, and null-versus-zero semantics remain unchanged. The working name does not select a canonical product name.


## Acceptance correction: Radar and Quadrant (2026-10-01)

Human manual acceptance superseded the previous browser PASS for Quadrant's right-edge label and plot-to-Waiting drag. The previous plot-label code animated every newly rendered label from its CSS default position, including selection-only renders. Fresh renders now place labels immediately; only relocation within an existing plot may animate. Candidate rectangles are measured against the plot safe inset, with label width constrained to that area. The previous point drag attached its completion handler to the point and required release inside the exact Waiting rectangle. The new point drag tracks its pointer at window capture level, marks the Waiting drop area during a drag, accepts a small drop tolerance, and uses the same session-only return action as the context menu. Human should retest their original mouse gesture; local automation cannot establish that all device/browser pointer paths match it.

Radar uses small text labels with minimal backing and connectors measured to the rendered label edge from the outer spoke endpoint. The side list has no ordinal numbers and keeps standard-sized names while only that list scrolls. Ten spokes remains a provisional display cap; older twelve-spoke sessions are retained and visibly dense, especially on a narrow viewport. No portable or semantic spoke limit was adopted.

## Bounded visual refinement (2026-10-02)

- Quadrant point drag now shows a small Entity preview once the pointer leaves the plot. The preview follows the pointer and changes its hint near the Waiting pager; the pager itself highlights as a drop target. The existing session-only Return to waiting action still clears the active X/Y values. Primary-button, click, and right-click intent boundaries remain unchanged.
- Radar axis labels are placed near their own spoke endpoints. Rendered label size drives a bounded radial/tangential collision search; connectors run from the outer endpoint to the nearest rendered label edge. The compact label style shares Quadrant's subtle text treatment. The selected-Dimension list and the provisional 10-spoke cap remain as before; an existing session above the cap is retained.
- Profile, Radar, and Quadrant pager centers use the same 42px height inside a 52px pager, with 36px arrows and zero name/counter gap. The central click and Quadrant waiting drag actions remain available.

## Bounded acceptance correction (2026-10-02)

- Assessed Primary Radar vertices are keyboard-focusable SVG sliders. Arrow keys edit in 0.05 steps; missing values still require assessment in Profile or Matrix, and Secondary remains comparison-only. Spoke reordering retains the list's scroll position.
- Radar guide strokes keep a stable screen width while its thin gray label connectors end at the closest point on the actual label edge. Labels use text halo rather than a card backing. The 10-spoke cap remains provisional and existing longer sessions are retained.
- Profile slider input updates its number and readout during movement. The value still saves in temporary session data; blank and explicit zero remain separate.
- Entity and Dimension drawers contain Tab and Shift+Tab, exclude the background from focus, and restore focus to their opener after close. The application confirmation dialog remains separate. Reduced motion suppresses drawer, pager, label relocation, and Matrix row motion; the Quadrant drag preview remains immediate and has no decorative transition.
- Pagers prioritize Entity name and position. A short ID appears when visible names may collide; ownership remains in Profile, Matrix, and the pool. Long pager names truncate with their full name in the title, preserving the counter and arrow controls. Profile and Matrix show IDs where names need help; Dimension selectors and Profile cards distinguish duplicate Dimension names.
- Matrix has a dedicated column grip separate from the selector. Drag it to reorder, or focus it and use Alt+Left/Right. Entity Pool uses the same small Temporary badge as Matrix, with a corresponding quiet Dataset badge.
- Importing a different valid Dataset asks before clearing temporary work. Cancel keeps the current session; clean workspaces replace directly. There is no export or Dataset write-back.
- At narrow widths, the Header groups the import action above Entities and Dimensions without page-level horizontal scroll.

## Interaction and identification refinement (2026-10-02)

Prototype 2 status-message alignment follow-up (2026-10-03): Matrix editors
align to cell tops; Profile cards share content-sized metadata rows with CSS
subgrid and top-align their value fields. Input controls retain their existing
size while warning/status text expands below. No fixed warning area is reserved
in normal editors, and warning copy/value policies are unchanged. See the
[visual review](prototype-2-human-browser-evaluation-2026-10-02.md#status-message-editor-alignment-review--2026-10-03).

Prototype 2 Radar drag correction (2026-10-03): drag now projects the SVG
pointer directly onto the displayed 0..1 radius. The obsolete signed-to-unit
conversion caused outward jumps and half-strength radial movement. Pointer
capture, 5px drag threshold, integer/decimal authoring and keyboard increments
remain unchanged. I3 is now Human PASS following the explicit keyboard/drag recheck;
[Radar recheck](prototype-2-human-browser-evaluation-2026-10-02.md#radar-i3-drag-defect-and-recheck--2026-10-03)
distinguishes the fix's supporting evidence from Human acceptance.

- The Primary Radar vertex itself is the pointer and keyboard entry. Clicking selects it without changing its value; movement beyond a small threshold starts immediate drag editing. The selected/focused vertex is visually marked. Reordering a scrolled Spoke list keeps the moved row fully visible. The 10-spoke cap remains provisional.
- At this refinement step, Matrix used a destination-column highlight during drag; the later bounded comparison refinement below replaced it with a column-boundary insertion indicator. The separate selector and drag grip remain, and Alt+Left/Right moves the focused grip. Duplicate Dimension headers show the short ID outside truncated selector text. Identical low/high labels are omitted from the compact header, while the full identity and endpoints remain available through the selector and tooltip.
- Entity pagers keep long names inside the shared arrow geometry and expose a needed short ID separately. Quadrant labels do the same for colliding Entity names; their measured placement remains presentation-only and stable on selection.
- Entity and Dimension drawers keep keyboard focus inside until closing, then restore it to the opener. Profile dice show a brief visual roll after generating values, suppressed under reduced motion. Random values and session-only data semantics are unchanged.

## Bounded comparison UI refinement (2026-10-02)

- Quadrant now weighs connector length and nearby points when choosing label positions, and connects to the nearest actual label edge. The selected X/Y Dimension names appear next to the plot; labels and connectors remain derived display state.
- Compact surfaces add short IDs when different names share the prefix likely to remain visible at that surface's width. Radar labels keep the ID separate from clamped long names. Matrix headers keep one name row and one consistent metadata row, prioritizing an ID over endpoint text when identity needs help. Full metadata remains in tooltips and selectors.
- Matrix Dimension dragging now shows a vertical insertion line at the selected column boundary. The pointer's half-column target maps to the same post-removal index used by the reorder splice; the column selector, grip, identity labels, and Alt+Arrow keyboard reorder remain in place. Profile `Fill blanks` keeps a single-line action at narrow widths. Entity Pool can rename session-only Temporary Entities while preserving their IDs and values; Dataset Entities remain read-only.

## Radar selection and focus refinement (2026-10-02)

- Clicking or focusing a Primary Radar vertex selects the visible point without changing its value. The transparent hit circle no longer draws a focus stroke; the visible vertex carries the selected/focused emphasis and a short Arrow-key guide appears. Movement must exceed the existing small drag threshold before values change; drag tracking remains immediate.
- Choosing an Entity from the pool while in Radar switches the Primary pager and chart together with the same brief Entity-content transition used by pager navigation. Keyboard focus uses a visible outer outline on ordinary controls, including filled drawer Add buttons. Reduced-motion settings suppress the existing Entity transition.

## Bounded UI refinement before Prototype 1 checkpoint (2026-10-02)

- The selected Radar Dimension list now has a visible top boundary that matches its per-row bottom separators. The Dimension Pool list has no added top border.
- Temporary Entity Add/Edit now includes an optional Description. It remains application-local session data, keeps the same Entity ID and values when edited, and is removed when saved blank. Dataset Entities remain read-only.
- Dataset and Temporary Entity overflow menus continue to share the same row, trigger, full-width menu placement, and keyboard entry. Their heights reflect their different available actions; unavailable actions remain disabled and no Dataset write action was added.
- While either modal Drawer is open or closing, document scrolling is locked and the Drawer keeps its own overflow scrolling. Closing the Drawer releases the lock without setting a new page scroll position.
- The numeric value range, null-versus-zero behavior, Dataset replacement warning, and sessionStorage boundary are unchanged.

## Prototype 1 checkpoint (2026-10-02)

Prototype 1's bounded interaction scope is Human-accepted. The
[checkpoint record](prototype-1-checkpoint-2026-10-02.md) collects accepted
evidence, known limits, and decisions deferred at that checkpoint. The
Product responsibility review was subsequently resolved as recorded below;
the checkpoint does not adopt a product name, portable contract, or
production implementation.

Human subsequently approved the Product responsibility on 2026-10-02. The
[decision resolution](prototype-1-checkpoint-2026-10-02.md#human-decision-resolution--2026-10-02)
and [Dimension/value research checkpoint](../../exploratory/parameterplotter-dimension-value-semantics-research-checkpoint-2026-10-02.md)
record that handoff and its later bounded implementation state. The current
implementation result is [Prototype 2 bounded implementation](prototype-2-bounded-implementation-result-2026-10-02.md).

Historical Human synchronization snapshot (2026-10-03): I3/I4/I5/R2 explicitly Human PASS;
status-message editor alignment supplement Human OK. Current totals: 12 Human
PASS / 7 PENDING / B3 NOT RUN. Remaining I6/R1/R3/R4/U1/B1/B2; independent
I6 tab 532323276 is prepared. See the evaluation guide latest-results section.
Waiting plot-click discoverability is a deferred follow-up candidate; no
implementation or overall acceptance/closure is authorized.

Historical I6 Human synchronization snapshot (2026-10-03): I6 explicitly Human PASS;
current totals 13 Human PASS / 6 PENDING / B3 NOT RUN. Remaining R1/R3/R4/U1/B1/B2.
Independent R1/R3 tab 532323280 is prepared; the evaluation guide current-results
section supersedes earlier preparation snapshots. No overall acceptance/closure.

Historical Human synchronization snapshot (2026-10-03): R1/R3 explicitly Human PASS; current
totals 15 Human PASS / 4 PENDING / B3 NOT RUN. Remaining R4/U1/B1/B2.
Independent range/unit review tab 532323284 is ready; see evaluation guide.
Overall evaluation remains pending.

Historical Human synchronization snapshot (2026-10-03): R1/R3 explicitly Human PASS; current
totals 15 Human PASS / 4 PENDING / B3 NOT RUN. Remaining R4/U1/B1/B2.
Independent ranges/units review tab 532323284 is ready; see evaluation guide.
Overall evaluation remains pending.


Pre-closure Human synchronization (2026-10-04): R4 and U1 were confirmed PASS. The subsequent final Human decision accepted and closed the bounded scope at 19 Human PASS / 0 PENDING / B3 NOT RUN, accepting the missing genuine legacy-session browser evidence as a limitation. B3 remains NOT RUN, not PASS. Earlier B1/B2 results and tooltip validation remain recorded. Known Quadrant connector and plot-click discoverability follow-ups remain separate and unchanged.
