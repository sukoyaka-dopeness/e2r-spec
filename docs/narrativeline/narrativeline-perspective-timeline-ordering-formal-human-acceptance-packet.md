# NarrativeLine Perspective 0.1.0 Timeline Ordering — Formal Human Acceptance Packet

Date prepared: 2026-09-28

Status: **READY FOR HUMAN / FORMAL ACCEPTANCE NOT EXECUTED**

Authority: [Perspective 0.1.0 Candidate](../../extensions/perspective-extension-candidate.md).
Current planning authority: [E2R Roadmap](../roadmap.md).

This packet prepares the remaining Human-only review of the current
Perspective Timeline Ordering implementation. It does not authorize UI
refinements, changes to accepted Extension semantics, or a change to the
Perspective Candidate. Any design fork discovered during review returns to the
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
| C — Product failure | No reproducible ordering defect has been observed on the qualified current runtime. The Human visual/interaction acceptance matrix has not run. | No Product failure established. Future `PRODUCT FAIL` requires a scenario run on a qualified runtime that misses its recorded expectation. |

## Browser acceptance preflight and qualification

Formal review begins only after the target runtime and required browser actions
are usable as evidence. This is a small acceptance preflight, not a new browser
automation system or an E2R-wide normative standard.

### Prepared qualification evidence — 2026-09-28

| Boundary | Evidence already checked |
| --- | --- |
| Intended application and checkout | Edge opened `http://127.0.0.1:5173/e2r-narrative-line/`. The Vite process was restarted from `C:\Users\extra\E2R\e2r-narrative-line`; the current NarrativeLine branch was `main` at `cabf419`. The NarrativeLine worktree was clean. The browser page is a local Vite source runtime, not a deployed build. |
| Dependency/runtime parity | NarrativeLine pins and installs `@sukoyaka-dopeness/e2r-validator` `0.7.0`. Direct validation and fresh/restarted browser imports of the Lantern Market EN/JA files returned no warnings. The old-server warning and the limits of its internal cache attribution are in the [diagnostic result](../../e2r-narrative-line/docs/relative-time-0.2.0-import-diagnostic-and-sample-readiness-result.md). |
| Browser operation capability | Edge was connected to the intended tab and the normal app import control opened the file chooser. The bridge then loaded the exact EN and JA files. This confirms browser file-input operation, not a Human-operated native OS picker. |
| Prerequisite fixture | Lantern Market EN and JA each opened on the restarted `5173` server with four Events and no import information or errors. The files remain tracked sample drafts and were not edited. |
| Existing machine gates | The prior NarrativeLine source checkpoint records 306/306 tests, lint, and build passing. Focused test evidence is described below. The jsdom/File-like input path does not qualify an old persistent browser page or native chooser/download behavior. |

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
- Human-operated OS-picker qualification: **NOT EXECUTED**; it is the first
  gate before entering the matrix and the first step of H6.
- Human visual and interaction matrix below: **NOT EXECUTED**.
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

| ID | Human check and expected evidence | Initial result |
| --- | --- | --- |
| H1 — Timeline density and control hierarchy | Open the built-in Berlin Wall sample (15 Events) at the ordinary browser width. Inspect how the always-visible ↑/↓ controls and placed/unplaced labels read across a full Timeline. Make one temporary move to see how the authored placement label changes. Record whether the controls remain discoverable without dominating the Timeline and whether the labels help or add noise. | `NOT EXECUTED` |
| H2 — Narrow presentation | In the same representative state, inspect the Timeline at approximately 360 CSS px. Check Event names, ordering controls, status labels, diagnostic text if present, clipping, overlap, and horizontal scrolling. Record the actual viewport and locale. | `NOT EXECUTED` |
| H3 — Same-name target identity | In a disposable browser Dataset, give two Events the same visible name. Using the current identity presentation, identify which card and move control belongs to each Event; move one and confirm the intended Event changes display position. Record what made the targets distinguishable or ambiguous. Do not export the disposable duplicate-name Dataset. | `NOT EXECUTED` |
| H4 — Keyboard, focus, feedback, repeated movement | Use Tab to reach an ↑/↓ control; use Enter or Space for a move; observe the actual browser focus ring and focus after the move. Repeat adjacent moves several times. In EN and JA, note whether the moved Event and direction are clear and whether feedback is understandable and natural. Decide whether the non-animated movement feels clear or creates a real need for animation. | `NOT EXECUTED` |
| H5 — Derived mismatch comprehension and export expectation | Open Lantern Market EN or JA. Move the reopening Event across a Relative Time Derived band to produce the existing mismatch diagnostic. Read the rendered diagnostic without consulting source. Record whether it explains the discrepancy clearly. The current app leaves export available; decide whether that warning is sufficient or whether you want a separate pre-export confirmation. | `NOT EXECUTED` |
| H6 — Native file open/export/re-open smoke | Continue from the Lantern Market file opened by the OS-picker preflight (or reopen it once if needed). Export once using the normal UI, then open the exported file again through the same picker. Confirm the Event order and Dataset remain readable and no unexpected import warning/error appears. Record locale, filename, and the observed open/export/re-open result; keep the download local and do not publish it. | `NOT EXECUTED` |

H1–H4 are Human judgments about presentation and interaction that DOM tests
cannot replace. H5 is a Human comprehension/design question; the Perspective
Candidate allows a consumer to require confirmation but keeps any such
confirmation outside the portable payload. The implementation currently does
not add an explicit export-confirmation transaction. H6 is limited to real
browser picker/download integration: machine round-trip and payload-preservation
coverage already exist.

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
decision, not an inferred Product defect. If the Human prefers compact or
contextual controls, a dedicated edit mode, different status-label density,
animation, or a pre-export confirmation, record that as an unselected design
fork and stop overall acceptance pending the appropriate follow-up. Do not
implement that choice in this checkpoint.

## Completion record

Formal Human Acceptance remains **NOT EXECUTED** until H1–H6 have actual Human
results and every required item is resolved. Machine PASS, the resolved
stale-server incident, and browser import smoke do not substitute for this
review. Record the Human's decisions and each scenario classification here or
in a linked dated result, then update only the Roadmap's current status. Keep
the historical blocked and stale-runtime records unchanged.

No Product source, tests, fixtures, Core/History/Relative Time/Perspective
semantics, schemas, Validator, Hub, public sample, or deployment were changed
to prepare this packet.
