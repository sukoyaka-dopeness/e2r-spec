# Entity Selection Status Narrow Acceptance 1

Date: 2026-09-23
Task: `E2R-NARRATIVELINE-ENTITY-SELECTION-STATUS-NARROW-ACCEPTANCE1`
Status: **ACCEPTED / CLOSED**

## Repository ownership correction

The handoff named NarrativeLine, but the current source and tests show that
the selected graph Entity status belongs to LiaisonScape. NarrativeLine has no
graph-selection status surface; its current Entity navigation opens Entity
Detail from an Event. The roadmap and Session 0094 used the wrong repository
name for this status item. The 390px status acceptance was therefore performed
against the current LiaisonScape implementation, without changing its source.

## 390px browser evidence

Used the local LiaisonScape app at a 390x844 browser viewport with the
Lighthouse sample. The browser's document layout width was 390 CSS pixels.

| Boundary | Result |
| --- | --- |
| Long Entity Name | **PASS.** Created and selected `Very long selected Entity label for narrow screen acceptance`. The localized status wrapped to two lines in a 343px box at x=16, right=359. `overflow-wrap: anywhere` was active; document client and scroll widths both measured 390px. No clipping or layout break was visible. |
| Empty Name fallback | **PASS.** The existing EN/JA integration test selects an Entity with no Name and expects its ID in the status. Current graph projection trims a non-empty Name and otherwise uses the Entity ID. |
| Same Names | **PASS.** Created two Entities named `Duplicate Status Probe` with distinct IDs and selected each in turn. Each produced the expected same-name status; each distinct graph node remained independently selectable. No disambiguation policy was introduced. |
| Selection clearing | **PASS.** Tapping empty graph canvas removed the selected Entity status and selection action from the accessible tree. |
| Dataset replacement | **PASS by source path.** The Dataset-open acceptance path installs the new Dataset and explicitly clears `selectedId` and `selectedRelationId`; no stale selected Entity status can remain. |
| Locale change | **PASS.** Switched EN→JA→EN at 390px while selected. The status prefix changed with the locale; the stored Entity Name stayed unchanged. |
| Entity Detail navigation | **PASS for the recorded related flow.** NarrativeLine's 390px Event Detail→Entity Detail navigation was exercised; document width was 390/390 and the screen remained within the viewport. This is a separate NarrativeLine flow from LiaisonScape graph selection. |
| Horizontal overflow | **PASS.** At 390px, status boxes stayed within x=16..359 and document scroll width equaled the viewport for the default and long-name checks. |

The pre-existing Lighthouse sample contains no empty-name Entity or duplicate
names, so those two states were exercised separately: the blank-name fallback
is covered by the current EN/JA LiaisonScape integration test, and duplicate
names were created temporarily in the local browser session. The temporary
Entities were not exported or persisted.

## Validation

- `npm.cmd run test` in `e2r-liaison-scape`: **641 passed, 0 failed**.
- `git diff --check` in `e2r-liaison-scape`: **passed**; Git reported only
  existing LF→CRLF working-copy warnings.
- Manual real-browser checks at 390x844: long Name, two same-name Entities,
  locale switching, canvas selection clearing, status bounds, and document
  overflow.
- Current source inspection: empty-name fallback and Dataset replacement
  selection clearing.

No application source or test files were changed for this acceptance. Existing
dirty and untracked work in the application repositories was preserved. The
roadmap status is **ACCEPTED / CLOSED**. No commit, push, or deployment was
performed.
