# LiaisonScape Relation Deletion Resolution Real Edge Acceptance

## Status

**FORMAL REAL EDGE ACCEPTANCE: FAIL**

Checkpoint: `LS-CROSS-APP-RELATION-DELETION2-REAL-EDGE-ACCEPTANCE`
Date: 2026-08-28

The acceptance run reached the implemented Relation-resolution workflow in a
dedicated Microsoft Edge session. The workflow and deletion safeguards were
observable, but the required modal keyboard focus behavior did not pass. No
runtime source, CSS, tests, Relation deletion semantics, or NarrativeLine
files were changed for this acceptance checkpoint.

## Scope

This record covers LiaisonScape's Entity deletion blocker-resolution workflow
in a real Edge browser, including normal, self, parallel, hidden/non-normal,
dirty Relation Detail, locale, and narrow-viewport cases. It does not accept
bidirectional Cross-App interoperability or close the overall capability.

## Runtime under acceptance

- Repository: `e2r-liaison-scape`
- HEAD: `33d0427 feat: add Entity deletion Relation resolution`
- URL: `http://127.0.0.1:5176/e2r-liaison-scape/`
- Target title: `LiaisonScape — relationship explorer`
- The runtime worktree remained clean throughout acceptance.

## Browser environment

- Microsoft Edge `151.0.4129.107`
- Dedicated temporary Edge profile with loopback CDP
- Formal acceptance used CDP port `9225`; the profile path and target identity
  are intentionally omitted because they are machine-specific.
- The dev server used port `5176` because the requested port was occupied.

## CDP helper

Acceptance used `e2r-spec/tools/edge-cdp/edge-cdp-helper.mjs` for target
discovery, strict page selection, Runtime evaluation, focus inspection, and
native-dialog state inspection/recovery. The helper test suite passed: **4
passed, 0 failed**.

Before visual/manual observations, the helper reported native dialog state
`closed` after an explicit no-dialog recovery probe. The formal session did not
have an open native browser dialog while evidence was collected.

## Dataset fixture

The public LiaisonScape lighthouse-restoration sample was used in a fresh
acceptance session. It provided:

- Entity `clara` with normal Entity-to-Entity, parallel, and hidden Event-related
  blockers, including `lead-clara` and `work-clara`.
- Entity `beacon` with self Relations `beacon-self-monitor` and
  `beacon-self-calibrate`.
- The fixture was mutated only inside the disposable browser session.

## Evidence rules

- Rendered Edge screenshots and visible browser interaction are visual/manual
  evidence.
- DOM structure, relation IDs, dialog labels, focus targets, and viewport
  geometry are programmatic/CDP evidence.
- Automated commands are recorded separately and are not substituted for
  visual/manual evidence.
- The rendered resolution surface showed Relation names, directed endpoints,
  hidden/non-normal explanation, and the safe `Keep Entity` action in both the
  normal and narrow views.

## Matrix A–O

| Matrix | Result | Evidence |
|---|---|---|
| A — normal Relation blocker | PASS | Entity remained; resolution opened with 8 blocker cards, names, endpoints, IDs, and safe initial focus on `Keep Entity`. |
| B — resolution Cancel | PASS | Entity Detail returned; Entity and all 8 Relations remained; no destructive mutation occurred. Focus was observed on `BODY` after the surface closed and is tracked by the focus failures below. |
| C — blocker Relation inspect | PASS | Existing Relation Detail opened with `aria-labelledby=relation-detail-title` and the exact Relation ID; closing it returned to the resolution context. |
| D — Relation deletion Cancel | FAIL | Relation and Entity remained and the resolution context returned, but focus was observed on `BODY` after Cancel rather than being restored within the active resolution surface. |
| E — one Relation delete | PASS | Confirmation was required; one exact blocker was removed; sibling and unrelated Relations remained; the live blocker list was refreshed. |
| F — self Relation | PASS | Both Beacon self Relation IDs were distinct and inspectable; the Entity remained after Relation deletion. |
| G — parallel Relations | PASS | `clara-thomas-supervises` and `clara-thomas-mentors` appeared as distinct blocker cards and remained distinguishable by identity. |
| H — hidden/non-normal or Event Relation | PASS | Hidden explanation was rendered and `lead-clara` / `work-clara` appeared in the blocker list despite not being normal graph-visible Relations. |
| I — final blocker removal | PASS | After the last blocker deletion, the Entity remained, zero blockers were reported, and explicit `Delete Entity` appeared without dangerous-action autofocus. |
| J — final Entity deletion Cancel | FAIL | Confirmation Cancel preserved the Entity and zero-blocker resolution state, but focus was observed on `BODY` instead of a restored safe dialog target. |
| K — final explicit Entity delete | PASS | The Entity was deleted only after explicit confirmation; the app remained usable and unrelated Dataset objects remained. |
| L — dirty Relation Detail | PASS | Existing dirty-dismissal confirmation appeared; Cancel returned to the dirty detail, and Discard returned to the resolution context without changing the draft through the acceptance path. |
| M — focus / keyboard | FAIL | Initial focus was safely on `Keep Entity`, but Tab moved to the outside Dataset `Edit` button instead of remaining within the resolution dialog. Shift+Tab returned to `Keep Entity`; the required dialog-contained keyboard traversal was not satisfied. |
| N — EN / JA locale | PASS | Resolution heading, blocker explanation, hidden/non-normal explanation, Relation identity, actions, and confirmation copy appeared in both Japanese and English. |
| O — narrow viewport | PASS | At a 390×844 emulated viewport, dialog right edge was 359 CSS px, card right edge was 327 CSS px, and document `scrollWidth` was 375 CSS px; no horizontal overflow was observed. |

## Native dialog state

Initial formal state: `closed`.
Final formal state: `closed`.
No unresolved native dialog incident remained. The acceptance was stopped for
the Matrix D/J/M focus findings, not for browser dialog instability.

## Automated gate

The runtime baseline was green before browser acceptance:

- `npm test`: **214 passed, 0 failed**
- `npm run lint`: **passed**
- `npm run build`: **passed**
- `git diff --check`: **passed**
- CDP helper tests: **4 passed, 0 failed**

## Manual acceptance result

**FAIL.** Matrix D, J, and M expose focus restoration/trapping gaps. Because
the required focus behavior is part of this checkpoint's acceptance contract,
Formal Manual Acceptance is not granted.

## Known boundaries

- This is an acceptance-only checkpoint; no implementation fix was applied.
- The runtime commit and behavior under test remain unchanged.
- This record does not claim bidirectional NarrativeLine ↔ LiaisonScape
  acceptance, final interoperability, or overall Cross-App capability closure.

## Deferred work

Create a separate bounded follow-up for the observed focus behavior: preserve
safe focus after Relation confirmation Cancel and final Entity confirmation
Cancel, and keep Tab / Shift+Tab traversal within the active resolution dialog.
Then rerun this acceptance matrix in a fresh dedicated Edge session.

## Conclusion

The deletion-resolution workflow is observable and the destructive paths remain
explicit, but this checkpoint is **not accepted** because the required modal
focus contract failed. The next step is a focused remediation and repeat of
the Real Edge acceptance before any Cross-App capability closure decision.
