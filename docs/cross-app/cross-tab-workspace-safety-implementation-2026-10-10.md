# Cross-Tab / Cross-App Workspace Safety Checkpoint — 2026-10-10

## Human-selected safety contract

This work implements the adopted safety direction: a replacement must stop if another tab has unapplied work; an older tab must not overwrite a newer workspace; separate E2R applications must not mutate one another's saved state except through the intended Dataset handoff; uncertain safety checks fail closed; and tab closure or abnormal termination must not leave a permanent lock. This is an implementation checkpoint, not a release authorization.

## Repository findings

| Application | Shared storage and prior risk | Disposition |
| --- | --- | --- |
| ParameterPlotter | `e2r-parameter-plotter-local-workspace-v2` is shared by same-origin tabs. A pending Dimension form draft lived only in one tab's memory, while a second tab could accept a Startup Handoff and overwrite the shared Workspace. Older tabs also had an autosave path without revision ownership. | Added app-specific live-tab work status, Web Lock serialization, guarded writes against the exact Workspace revision, and a fail-closed replacement gate. The original reproduction is addressed in implementation and automated tests. |
| NarrativeLine | `narrativeline.lastDataset` is automatically written by each tab. Pending forms and the modified Dataset are held in tab-local React state; a clean second tab could accept a candidate, after which an older tab could write its earlier Dataset. | Added app-specific live-tab status, guarded replacement and autosave, and exact-revision conflict refusal. Candidate remains staged if peer work blocks acceptance. |
| LiaisonScape | Dataset authoring state is tab-local React state; saved Dataset export is an explicit file download. `localStorage` contains the app-specific locale preference, while temporary locale and acceptance payload use `sessionStorage`. Existing replacement checks and `beforeunload` protect the active tab. | No cross-tab Dataset write path or app-to-app storage collision was found. No blocking or persistence mechanism was added. |
| Hub | Handoff links open the recipient application; Hub has no Dataset workspace persistence in localStorage/sessionStorage. | No cross-app storage mutation path was found. Existing handoff remains the intentional transfer path. |

All Dataset persistence keys inspected are app-specific. Locale preferences are also app-scoped. On a shared GitHub Pages origin, origin sharing makes each application's own localStorage key common to its tabs, but these inspected keys do not collide across applications. This finding does not establish safety for future storage keys.

## Implementation details

ParameterPlotter and NarrativeLine use app-specific Web Locks to serialize writes and replacements. A tab's lock is ephemeral and released on `pagehide`, including BFCache suspension; a persisted page reacquires a fresh lock on `pageshow`. A localStorage status record is considered live only while its matching lock is held. Stale status is cleaned during a coordinated transaction. A write also compares the saved raw Dataset/Workspace revision against the exact version last observed by the tab. A conflict keeps the current tab's in-memory content and refuses the write. Browsers without usable Web Locks, or cases where storage state cannot be checked, fail closed for shared persistence and replacement.

The applications retain their distinct save models. ParameterPlotter keeps its Workspace/recovery contract. NarrativeLine retains its existing last-Dataset recovery key and explicit export contract. LiaisonScape remains in-memory plus explicit file export. No E2R Core, Extension, Candidate, schema, Validator, or Dataset content changed.

## Verification and evidence limits

- ParameterPlotter automated regression tests cover active/stale tab records, stale revision refusal, and no-Web-Locks fail-closed behavior; `npm.cmd run check` passed (36 modules, 148 tests) and `npm.cmd run build` passed.
- NarrativeLine automated service tests cover live/stale registration, replacement refusal during peer work, retry when peer work clears, and stale revision refusal; the production build and full suite passed (353/353 tests).
- LiaisonScape and Hub received read-only source audits; no runtime changes were made there.
- In an isolated Edge profile, Codex served ParameterPlotter, NarrativeLine, and LiaisonScape on distinct paths of the same temporary `127.0.0.1:4185` origin. ParameterPlotter's pending Dimension draft blocked a competing Lighthouse Handoff without changing the saved Workspace; after cancelling, a fresh Handoff tab accepted the 10-Entity Dataset, and a stale tab did not overwrite it. On NarrativeLine, an open Event draft blocked another tab's Ashen Crown Handoff and left the saved Dataset unchanged; after cancelling, the status cleared. NarrativeLine's clean retry and stale-tab write were not confirmed in this browser run. Loading NarrativeLine did not mutate ParameterPlotter's app-specific Workspace key. These are Codex browser checks, not Human Browser Acceptance or GitHub Pages verification.
- Human Browser Acceptance remains pending. Public hosted behavior, every retrieval/validation failure path, cancel/retry in both apps, and stale-tab writes in NarrativeLine still need bounded review before any release reassessment.

The per-application implementation notes are `e2r-parameter-plotter/docs/cross-tab-workspace-safety-2026-10-10.md` and `e2r-narrative-line/docs/cross-tab-workspace-safety-2026-10-10.md` in their respective repositories.

This checkpoint does not change the existing Public Release NO-GO. Human Browser Acceptance, the final safety audit, and any separate release authorization remain required. No push, tag, deployment, publication, or Pages configuration change was performed.
