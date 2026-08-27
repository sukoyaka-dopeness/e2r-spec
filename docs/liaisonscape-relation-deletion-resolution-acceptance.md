# LiaisonScape Relation Deletion Resolution Real Edge Acceptance

## Status

**FORMAL REAL EDGE ACCEPTANCE: PASS**

Implementation checkpoint: `LS-CROSS-APP-RELATION-DELETION3-FOCUS-FIX`
Acceptance checkpoint: `LS-CROSS-APP-RELATION-DELETION2-REAL-EDGE-ACCEPTANCE` rerun
Date: 2026-08-28

The bounded focus fix was verified in a fresh dedicated Microsoft Edge
session. Resolution keyboard focus remained inside the active dialog, and
Relation and Entity confirmation Cancel restored safe targets. No Relation
deletion semantics, Dataset semantics, CSS, or NarrativeLine files were
changed.

## Scope

This record covers LiaisonScape's Entity deletion blocker-resolution workflow
in a real Edge browser, including normal, self, parallel, hidden/non-normal,
dirty Relation Detail, locale, and narrow-viewport cases. It does not accept
bidirectional Cross-App interoperability or close the overall capability.

## Runtime under acceptance

- Repository: `e2r-liaison-scape`
- HEAD: `0a3c446 fix: contain deletion resolution focus`
- URL: `http://127.0.0.1:5177/e2r-liaison-scape/`
- Target title: `LiaisonScape — relationship explorer`
- Only the scoped focus-fix changes were present before the runtime commit;
  the runtime worktree was clean after commit `0a3c446`.

## Browser environment

- Microsoft Edge `151.0.4129.107`
- Dedicated temporary Edge profile with loopback CDP
- Formal acceptance rerun used CDP port `9227`; the profile path and target identity
  are intentionally omitted because they are machine-specific.
- The dev server used port `5177` for the fresh rerun.

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
| B — resolution Cancel | PASS | Entity Detail returned; Entity and all 8 Relations remained; no destructive mutation occurred. |
| C — blocker Relation inspect | PASS | Existing Relation Detail opened with `aria-labelledby=relation-detail-title` and the exact Relation ID; closing it returned to the resolution context. |
| D — Relation deletion Cancel | PASS | Relation and Entity remained, the resolution context returned, and focus was restored to the corresponding Relation inspection control rather than `BODY`. |
| E — one Relation delete | PASS | Confirmation was required; one exact blocker was removed; sibling and unrelated Relations remained; the live blocker list was refreshed. |
| F — self Relation | PASS | Both Beacon self Relation IDs were distinct and inspectable; the Entity remained after Relation deletion. |
| G — parallel Relations | PASS | `clara-thomas-supervises` and `clara-thomas-mentors` appeared as distinct blocker cards and remained distinguishable by identity. |
| H — hidden/non-normal or Event Relation | PASS | Hidden explanation was rendered and `lead-clara` / `work-clara` appeared in the blocker list despite not being normal graph-visible Relations. |
| I — final blocker removal | PASS | After the last blocker deletion, the Entity remained, zero blockers were reported, and explicit `Delete Entity` appeared without dangerous-action autofocus. |
| J — final Entity deletion Cancel | PASS | Confirmation Cancel preserved the Entity and zero-blocker resolution state, and focus was restored to the safe `Keep Entity` control. |
| K — final explicit Entity delete | PASS | The Entity was deleted only after explicit confirmation; the app remained usable and unrelated Dataset objects remained. |
| L — dirty Relation Detail | PASS | Existing dirty-dismissal confirmation appeared; Cancel returned to the dirty detail, and Discard returned to the resolution context without changing the draft through the acceptance path. |
| M — focus / keyboard | PASS | Initial focus was safely on `Keep Entity`; forward Tab wrapped within the Resolution dialog, and reverse Shift+Tab also wrapped within it. The outside Dataset `Edit` control was not reached. |
| N — EN / JA locale | PASS | Resolution heading, blocker explanation, hidden/non-normal explanation, Relation identity, actions, and confirmation copy appeared in both Japanese and English. |
| O — narrow viewport | PASS | At a 390×844 emulated viewport, dialog right edge was 359 CSS px, card right edge was 327 CSS px, and document `scrollWidth` was 375 CSS px; no horizontal overflow was observed. |

## Native dialog state

Initial formal state: `closed`.
Final formal state: `closed`.
No unresolved native dialog incident remained. The initial and final helper
acceptance states were both `closed`.

## Automated gate

The runtime baseline was green before browser acceptance:

- `npm test`: **215 passed, 0 failed**
- `npm run lint`: **passed**
- `npm run build`: **passed**
- `git diff --check`: **passed**
- CDP helper tests: **4 passed, 0 failed**

## Manual acceptance result

**PASS.** Matrix D, J, and M now satisfy the required focus restoration and
dialog-contained keyboard traversal contract in fresh Edge.

## Known boundaries

- The implementation fix is bounded to Resolution focus containment and
  workflow-safe focus requests; it does not change deletion semantics.
- The prior failure record is superseded by this rerun result while remaining
  available in Git history.
- This record does not claim bidirectional NarrativeLine ↔ LiaisonScape
  acceptance, final interoperability, or overall Cross-App capability closure.

## Deferred work

Bidirectional NarrativeLine ↔ LiaisonScape acceptance, final interoperability
edge cases, and overall Cross-App capability closure remain deferred.

## Conclusion

The deletion-resolution workflow and its focus contract are **FORMALLY
ACCEPTED** for the bounded LiaisonScape scope. The next step is bidirectional
Cross-App acceptance; this record does not close the overall capability.
