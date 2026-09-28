# NarrativeLine Perspective 0.1.0 Timeline Ordering — Formal Human Acceptance Packet

Date prepared: 2026-09-28

Status: **FORMAL HUMAN ACCEPTANCE ACCEPTED / CLOSED — 2026-09-28**

Authority: [Perspective 0.1.0 Candidate](../../extensions/perspective-extension-candidate.md).
Current planning authority: [E2R Roadmap](../roadmap.md).

This packet records Human observations, the bounded NarrativeLine UI
refinement, and final Human Acceptance. It does not change accepted Extension
semantics or the Perspective Candidate. Any new design fork returns to the
Human before implementation.

## Result classification for this packet

The repository evidence uses `PASS`, `BLOCKED`, and `NOT EXECUTED` in bounded
acceptance records. The accepted [Early Visual Smoke Check](../../../ai-knowledge/decisions/early-visual-smoke-check-before-expensive-evidence.md)
uses `SMOKE-PASS`, `DEFECT-SEEN`, and `INDETERMINATE` only for a non-authoritative
early smoke; it explicitly does not produce formal acceptance. The Edge CDP
[diagnostic playbook](../../../ai-knowledge/playbooks/e2r-edge-cdp-browser-diagnostic.md)
separates browser availability, transport, protocol, helper, and browser action
failures. No existing E2R-wide formal taxonomy for the four results below was
found. These labels are local to this packet and do not create an E2R-wide
process rule.

| Result | Use when | Acceptance effect |
| --- | --- | --- |
| `PASS` | The scenario ran on a qualified runtime and its stated expectation was met. | Count as evidence for this scenario only. |
| `PRODUCT FAIL` | The scenario ran on a qualified runtime and current Product behavior missed its stated expectation. | Record the observed behavior and evidence; stop acceptance and return the bounded Product issue. |
| `ENVIRONMENT FAIL` | The scenario ran, but a wrong/stale runtime, incorrect build, or other environment mismatch makes the observation unusable as Product evidence. | Do not count it as Product pass or Product failure. Stop the remaining matrix and requalify in a new run. |
| `BLOCKED / NOT EXECUTED` | The required operation did not run, for example because the browser bridge, file chooser, permission, startup, or viewport control was unavailable. | It is neither pass nor fail. Stop if the unavailable capability is required by later scenarios. |

Do not infer a Product failure from a failure to reach the acceptance action.
Do not turn an environment failure into a Product pass after a restart; retain
the original run as environment evidence and record the new run separately.
For a subjective design fork with no accepted expectation, record
`BLOCKED / NOT EXECUTED — HUMAN DECISION REQUIRED` for that item instead of
forcing `PASS` or `PRODUCT FAIL`.

## Classification of the Lantern Market investigation

| Case | Evidence | Classification |
| --- | --- | --- |
| A — Initial file chooser denial | The browser-control bridge could not set a local file (`Not allowed`). The Dataset never reached NarrativeLine's import handler in that attempt. After the Human opened Edge and the correct Edge tab was connected, the same file-input path worked. | `BLOCKED / NOT EXECUTED` for the initial attempt; **not** a Product failure. |
| B — Warning on the old `5173` process | EN and JA imports actually ran on the long-running process and each displayed warning `specification_version_unsupported` at `/extensions/draft.github.sukoyaka-dopeness.specification/uses/1/version`, severity `warning`. The current Validator returned no diagnostics, a fresh Vite process returned no warnings, and restarting `5173` cleared the warning for both files without source changes. | `ENVIRONMENT FAIL`; the executed result is not evidence of a current Product defect. The old run remains recorded in the [diagnostic result](../../../e2r-narrative-line/docs/relative-time-0.2.0-import-diagnostic-and-sample-readiness-result.md). |
| Current restarted runtime import smoke | The current-checkout `5173` server opened EN and JA with no import information or errors; standalone Validator checks were also clean. | `PASS` for this import/preflight scenario only. It is not Formal Human Acceptance of ordering presentation. |
| C — Human-observed UI issues | On the reviewed NarrativeLine implementation, Human observed H1 control/status density, H3 same-name Relative Time identity ambiguity, and H4 Japanese feedback/visual-weight issues. Those surfaces were refined as recorded below. | **ISSUES OBSERVED AND REFINED**; post-refinement Human checks remain pending. This does not classify unrelated, unrun cases as Product failures. |

## Browser acceptance preflight and qualification

Formal review begins only after the target runtime and required browser actions
are usable as evidence. This is a small acceptance preflight, not a new browser
automation system or an E2R-wide normative standard.

### Prepared qualification evidence — 2026-09-28

| Boundary | Evidence already checked |
| --- | --- |
| Intended application and checkout | Edge opened `http://127.0.0.1:5173/e2r-narrative-line/`. The Vite process was restarted from `C:\Users\extra\E2R\e2r-narrative-line`; the current NarrativeLine branch was `main` at `cabf419`. The NarrativeLine worktree was clean. The browser page is a local Vite source runtime, not a deployed build. |
| Dependency/runtime parity | NarrativeLine pins and installs `@sukoyaka-dopeness/e2r-validator` `0.7.0`. Direct validation and fresh/restarted browser imports of the Lantern Market EN/JA files returned no warnings. The old-server warning and the limits of its internal cache attribution are in the [diagnostic result](../../../e2r-narrative-line/docs/relative-time-0.2.0-import-diagnostic-and-sample-readiness-result.md). |
| Browser operation capability | Edge was connected to the intended tab and the normal app import control opened the file chooser. The bridge then loaded the exact EN and JA files. This confirms browser file-input operation, not a Human-operated native OS picker. |
| Prerequisite fixture | Lantern Market EN and JA each opened on the restarted `5173` server with four Events and no import information or errors. The files remain tracked sample drafts and were not edited. |
| Existing machine gates | The prior NarrativeLine source checkpoint records 306/306 tests, lint, and build passing. Focused test evidence is described below. The jsdom/File-like input path does not qualify an old persistent browser page or native chooser/download behavior. |

### Human evidence and bounded refinement — 2026-09-28

The Human confirms that the normal Dataset-open path opened the OS native file
picker and selected a Dataset. The prior native-picker preflight is therefore
**PASS** for that Human-operated open. This does not cover native export or
re-open.

The Human's observations were:

- H1: the always-visible ↑/↓ controls dominate the Timeline at 15 Events, and
  per-Event placed/unplaced labels add density;
- H3: same-name Events were not identifiable in Event Detail Relative Time
  references;
- H4: keyboard operation was possible, while Japanese move wording and
  feedback visual weight needed correction; and
- H5: the Human prefers retaining the current export-with-warning behavior
  without an additional pre-export confirmation.

NarrativeLine implemented a bounded refinement (see the linked
[implementation result](../../../e2r-narrative-line/docs/perspective-0.1.0-timeline-ordering-implementation-result.md)):
compact 32px native controls, status text only on the selected Event with the
placed/derived state retained in each accessible control label, localized
low-prominence feedback, and focus restoration to the moved Event after
reordering. At an ordering boundary, focus goes to that Event's opposite
control. The existing candidate-local identity resolver now supplies
chronology/short-ID disambiguation in Event Detail Relative Time choices and
recorded references. The supplementary projection already had duplicate-name
short-ID hints and was not changed. Canonical IDs, Perspective/Relative Time/
History semantics, mismatch warnings, and the existing export operation remain
unchanged.

Focused automated tests, full tests (`309/309`), lint, and build passed. A
separate Edge tab on an isolated local origin loaded the 15-Event sample; EN/JA
move messages, a keyboard move, visible focus after reordering and at the first
item boundary, and a same-name Relative Time choice/recorded reference were
checked. This was a Codex-operated browser check, not post-refinement Human
acceptance. It did not check a 360 CSS px viewport, native picker/export, or
re-open. The user's existing Edge tab and Dataset were left untouched.

This evidence qualifies the local runtime for the packet as prepared. Recheck
the target if its server is stopped, its source/dependency revision changes,
or its URL/build identity changes before Human review. At the start of that
review, record the actual URL, local checkout/revision (or build identity),
runtime launch context, Dataset file, locale, and viewport. The browser page
must be attributable to the intended checkout/build; an address bar alone is
not revision evidence.

Before entering the manual matrix, confirm that the required browser is
available, the app loads, its normal Dataset-open control can select the
intended fixture through the Human-operated OS picker, and the prerequisite
file opens without an unexpected diagnostic. This first open is the capability
smoke for H6 and need not be repeated if the same file remains available for
the later export/re-open step. If the native picker is unavailable, mark the
preflight `BLOCKED / NOT EXECUTED` and stop before the visual matrix. Capture
enough evidence to distinguish the observed Product
behavior from the runtime: direct observation, URL/runtime identity, fixture
and locale, viewport, and a screenshot or concise note where appearance or
interaction is being judged. For any diagnostic, record its exact code, path,
severity, and rendered message (or record that the UI supplies no separate
message). If a required preflight item is unavailable or does not match, do
not begin the matrix.

### Preflight disposition

- Prepared automated local-runtime/import preflight: **PASS** for the
  restarted `5173` runtime and the Lantern Market EN/JA imports only.
- Human-operated OS-picker qualification: **PASS**, based on the Human's
  confirmation above. H6 native export/re-open remains untested.
- H1, H3, and H4 pre-refinement observations: **ISSUE OBSERVED / REFINED**;
  their post-refinement Human checks remain pending.
- H2 narrow layout and H6 native export/re-open: **NOT EXECUTED**.
- H5 no-extra-confirmation direction: **HUMAN PREFERENCE RECORDED / CURRENT
  OPERATION RETAINED**; this is not a change to portable semantics.
- Human-operated real download/re-open path: **NOT EXECUTED**.

The browser-driven `fileChooser.setFiles` operation is not a substitute for
the final Human native-picker smoke.

## Automated evidence already available — do not repeat manually

The following machine properties are covered by current tests and are not
repeated as Human cases. They do not establish visual quality or actual-browser
focus appearance.

| Machine evidence | Existing evidence |
| --- | --- |
| Sparse first move, exact Perspective declaration, Dataset dirty baseline, and export/re-import round-trip | [`PerspectiveOrderingService.test.js`](../../../e2r-narrative-line/tests/PerspectiveOrderingService.test.js): first-move test; [`perspectiveTimelineIntegration.test.js`](../../../e2r-narrative-line/tests/perspectiveTimelineIntegration.test.js): native-button move integration. |
| Relative Time Derived bands, within-band and cross-band moves, dated/undated interleave, History diagnostics, and temporal non-mutation | `PerspectiveOrderingService.test.js`: band composition and dated/undated tests. Event arrays, Relations, History temporal data, and Perspective order are asserted at the service boundary. |
| Relative Time Relation add/edit/delete, cycles remaining in Relative Time conflict ownership, and no Perspective write-back | `PerspectiveOrderingService.test.js`: Relation lifecycle and cycle tests. |
| Event add/rename/delete lifecycle, dangling-ID preservation, multiple/unsupported Perspective safety | `PerspectiveOrderingService.test.js`: sparse lifecycle, dangling references, final dated Event deletion, and multiple/unsupported Perspective tests. |
| Repeated adjacent moves, first/last disabled controls, focus remaining on a native button, move status copy, and App dirty state | `perspectiveTimelineIntegration.test.js`: native move-button integration. This is DOM-level focus evidence, not a rendered browser focus-ring check. |
| Dataset replacement cancel/accept and replacement-state isolation | `perspectiveTimelineIntegration.test.js`: production App replacement guard test. |
| Core-only and Lantern Market EN/JA import through the production App handler without warnings/errors | `perspectiveTimelineIntegration.test.js`: synthetic File-like input test. `RelativeTimeSampleDraft.test.js` covers sample validation, unchanged round-trip, band projection, the unordered pair, and Event Detail assertions. |
| Relative Time `0.2.0` support and unsupported-version handling | [`RelativeTime02Consumer.test.js`](../../../e2r-narrative-line/tests/RelativeTime02Consumer.test.js) and the current installed Validator. |

These tests use the current service/App paths and Vite's `ssrLoadModule`; the
production-App import test supplies a synthetic File-like object. They do not
exercise a real browser's rendered density, actual focus ring, Human
comprehension, native file picker, download UI, or a long-lived optimized
browser dependency across server restarts. The stale `5173` incident showed
that this runtime boundary matters; adding another jsdom test would not
reproduce it.

## Human-only acceptance checklist

Run the cases in order after the preflight. Use only the existing app UI. Any
temporary duplicate names or Perspective moves must remain in a disposable
browser session and must not edit repository fixtures or public samples.

For each case, record one result from the four labels above plus a short direct
observation. `NOT EXECUTED` is the initial status. Do not mark unrun items as
PASS.

| ID | Human check and expected evidence | Current disposition |
| --- | --- | --- |
| H1 — Timeline density and control hierarchy | Inspect the ordinary Timeline and use selection, keyboard focus, and touch to reveal ordering controls; review the final local warning and on-demand help presentation. | **PASS / CLOSED — HUMAN-SELECTED DIRECTION AND FINAL BROWSER CHECK, 2026-09-28:** selected/focused controls remain contextual; warning and help disclosures start at the same content edge as Event title/description; both disclosure headings use the same bold hierarchy in Japanese and English. The existing warning text/triangle, help content, touch/keyboard direction, and information density remain accepted. No H1 choice remains open. |
| H2 — Narrow presentation | Inspect the representative Timeline at approximately 360 CSS px for names, controls, status, diagnostics, clipping, overlap, and horizontal scrolling. | **PASS — HUMAN REPORT, 2026-09-28:** post-refinement narrow view was inspected at about 360 CSS px; no new clipping, overlap, or horizontal-layout failure was reported. Exact measured width and locale were not retained in the handoff. |
| H3 — Same-name target identity | Identify duplicate-name Events in Event Detail Relative Time choices and a recorded reference using visible hints; confirm the intended target. | **PASS — HUMAN REPORT, 2026-09-28:** post-refinement UI made the same-name target identifiable. Canonical operation targeting and resolver behavior remain covered by machine tests; no rerun requested. |
| H4 — Keyboard, focus, feedback, repeated movement | Use keyboard moves, inspect focus and localized feedback, including a boundary; assess visual movement feedback. | **PASS / CLOSED — HUMAN CONFIRMED, 2026-09-28:** motion, focus, repeated movement, EN/JA feedback, and the visible feedback changing to the current locale after locale switch are accepted. Automated coverage agrees. No H4 rerun is required. |
| H5 — Derived mismatch comprehension and local discovery | Read the rendered mismatch diagnostic without source; inspect local indicators near affected Events. Keep export available without extra confirmation. | **PASS / CLOSED:** Human understands the mismatch, approved discovery beside affected Events, and retains export without extra confirmation. The latest label/icon simplification is a presentation check tracked under H1; it does not reopen H5 comprehension or its accepted local-discovery direction. |
| H6 — Native file open/export/re-open smoke | Use the native picker, export once, reopen that file, and confirm readable Dataset/order without unexpected diagnostics. | **PASS — HUMAN CONFIRMATION, 2026-09-28:** H6 reported OK. Earlier OS-picker preflight and machine round-trip evidence remain recorded separately. |

H1–H4 are Human judgments about presentation and interaction that automated
tests cannot replace. H5 is a Human comprehension check; it does not reopen
the recorded preference against an extra confirmation. The Perspective
Candidate allows a consumer to require confirmation but keeps any such
confirmation outside the portable payload. The implementation does not add an
explicit export-confirmation transaction. H6 is limited to real
browser picker/download integration: machine round-trip and payload-preservation
coverage already exist.

## Human-selected interaction and motion directions — 2026-09-28

The Human selected contextual disclosure that does not depend on pointer hover.
Current source inspection showed that row click already selects an Event, while
unselected rows were not keyboard-focusable. The bounded application model now
uses existing row selection and keyboard focus: focus an Event row to reveal
controls, select it with Enter or Space, and use its native move buttons; a
touch tap selects the row and reveals the same controls. Only authorable
Datasets make the rows keyboard stops for this ordering workflow. No separate
mode or More-menu action is added.

This direction preserves the ordinary Timeline as a read-oriented view:
ordering controls are hidden until a row is selected or focused. It keeps a
future direct-drag interaction possible without an edit mode.

The `WorkspaceMoreMenu` remains unchanged and continues to contain Open and
Export Dataset actions. Selected/focused-row disclosure keeps future direct
Drag & Drop available in ordinary Timeline without adding a mode. Per-Event
↑/↓ continues to mean Dataset-owned display-order movement; top/bottom arrows
continue to mean viewport navigation. Their labels and iconography are
unchanged.
The motion slice adds a short transform transition to reordered Timeline rows
and smooth top/bottom viewport navigation when reduced motion is not requested.
It skips row movement under `prefers-reduced-motion: reduce` and uses immediate
navigation under that preference. Motion completion is not a prerequisite for
focus, keyboard activation, Dataset mutation, save, or export.

Ordering safety guidance is short and shown beside disclosed controls. The
user guide explains the Placed / Unplaced · derived display labels and the
affected-Event warning details. The Timeline keeps a compact diagnostic count
with a collapsed full list; each affected Event also has a local, keyboard- and
touch-operable detail disclosure. This changes presentation only. Diagnostic
generation, wording meaning, severity, export availability, and persisted data
remain unchanged. Drag-and-drop, labels/icons, and a cross-application control
standard remain outside this checkpoint.

## Stop conditions and disposition

Stop the remaining manual matrix immediately if, after starting review:

- the app URL, checkout, source revision, dependency version, or build no
  longer matches the qualified target;
- a stale runtime or unexplained browser/runtime warning reappears;
- a required browser capability or viewport cannot be used;
- the prerequisite Dataset cannot be opened; or
- available evidence cannot identify which runtime or Dataset produced the
  observation.

Classify an executed but unusable scenario as `ENVIRONMENT FAIL`; classify an
operation that never ran as `BLOCKED / NOT EXECUTED`. Leave the remaining
manual cases `BLOCKED / NOT EXECUTED`, preserve observations from the failed
session, requalify, and begin any retry as a distinct run. Do not continue the
matrix hoping later results will qualify earlier ones.

Only a scenario executed on the qualified target can be `PRODUCT FAIL`. A
design preference without an already-set acceptance expectation is a Human
decision, not an inferred Product defect. Contextual controls are implemented
for selected or keyboard-focused Events, and the final H1 warning/help
alignment and heading hierarchy are browser-confirmed. H4 interaction and
feedback, H5 comprehension/local discovery/export preference, H2, H3, and H6
are closed. Do not add export confirmation, adopt Cross-App control standards,
introduce global identity architecture, or change Perspective/Relative Time
semantics.

## Completion record

Formal Human Acceptance is **ACCEPTED / CLOSED — 2026-09-28**. H1's final
warning/help alignment and shared bold hierarchy are verified in isolated
Edge at the current NarrativeLine checkout in both Japanese and English.
H2/H3/H4/H5/H6 and the previously accepted H1 interaction direction remain
closed; none were reopened or repeated. Keep historical blocked and stale-
runtime records unchanged.

The NarrativeLine UI refinement is recorded in the linked implementation
result. No Core/History/Relative Time/Perspective semantics, schemas, Validator,
Hub, public sample, or deployment were changed for it.

## Final presentation refinement evidence — 2026-09-28

The final local warning keeps its clear `Review display order` disclosure text
and native disclosure marker; its ambiguous circular ornament was removed.
Ordering controls now carry a collapsed `About display order` native disclosure
with the display-only safety explanation and the selected Event's Placed or
Unplaced description. The EN and JA User Guides explain the on-demand help.
The implementation result records the exact source, test, and Edge evidence.

Live Edge at port 5181 displayed an English move result, then changed that
visible transient result to Japanese when the locale changed, and a new
Japanese move also produced Japanese feedback. Regression tests verify EN → JA
→ EN while feedback remains visible. The pre-existing port 5173 tab and Dataset
were untouched. No physical touch device was used.

The final refinement additionally replaces user-facing EN/JA “Derived band”
diagnostic vocabulary with wording that compares saved display order to the
order indicated by recorded Relative Time relationships. Selected/focused
Event cards are more compact, the local diagnostic disclosure has visible
separation from the ordering-help disclosure, and the help summary shares the
move-control row where it fits. Move targets remain 32px minimum. Targeted
tests cover the EN/JA diagnostic wording and the CSS geometry constraints; an
isolated Edge view confirmed the Japanese selected-row density and disclosure
separation. That browser view used the built-in Berlin Wall sample and showed
its History mismatch, not a Relative Time mismatch; Relative Time EN/JA copy
was verified by integration tests. The existing 5173 tab and Dataset were
untouched.

The final selected presentation direction is implemented and browser-checked:
both disclosure summaries align with Event content and share the bold visual
weight in both locales. Formal Human Acceptance is **CLOSED** as recorded
above. This does not alter semantics, persisted model, schema, Validator,
public sample, or deployment.
