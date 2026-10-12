# LiaisonScape Diagnostics D1 Human Acceptance Closure

Date: 2026-10-12

## Formal acceptance status

**HUMAN BROWSER ACCEPTED / PASS / CLOSED (BOUNDED).** On 2026-10-12, Human formally accepted LiaisonScape Diagnostics D1: Acquisition Candidate Diagnostics remain separate from Current Dataset Diagnostics, with the reviewed Dataset Replacement Safety and focus behavior. The [E2R-SPEC Roadmap](../roadmap.md#current-status-index-2026-09-28) remains the current planning authority.

This closure supersedes the earlier **HUMAN BROWSER REVIEW PASS (BOUNDED) / FORMAL ACCEPTANCE PENDING** disposition in the [evidence and proposal checkpoint](liaisonscape-diagnostics-d1-human-browser-evidence-and-bounded-acceptance-proposal-2026-10-12.md). That checkpoint remains historical evidence of the state before the additional focus review and formal approval.

## Human Browser Review evidence

Human reported PASS for D1-01 through D1-09 during the 2026-10-12 local LiaisonScape browser review:

| Case | Reviewed behavior | Result |
| --- | --- | --- |
| D1-01 | The current Dataset showed `unknown_extension` at `/extensions/vendor.example`. | PASS |
| D1-02 | Invalid candidate `relations_missing` at `/relations` appeared in the Import failure notice, did not enter Current Dataset Diagnostics, and left the current Dataset and Graph intact. | PASS |
| D1-03 | Home showed a red Import failure notice with code and path; returning to Workspace retained the current Dataset and Diagnostics. | PASS |
| D1-04 | With an unsaved Pin, a valid warning-bearing candidate opened replacement confirmation; candidate warnings were distinct from current Diagnostics, and the current Graph and Diagnostics remained. | PASS |
| D1-05 | Warning details opened and closed with Enter and Space. | PASS |
| D1-06 | Tab and Shift+Tab cycled through warning details and replacement actions as expected. | PASS |
| D1-07 | Escape and Cancel cancelled replacement and retained the Dataset, Diagnostics, and unsaved Pin. The immediate Escape focus destination was not checked in that review. | PASS within the original review boundary; later covered by FOCUS-01–06. |
| D1-08 | A warning-free candidate showed no warning disclosure; Tab/Shift+Tab and Escape cancellation worked. The initial focus after mouse opening was not directly checked in that review. | PASS within the original review boundary; later covered by FOCUS-01–06. |
| D1-09 | Accepting the warning-bearing candidate switched Graph/title to Warning Candidate/Candidate Warning and Current Dataset Diagnostics to `extension_version_unspecified` at `/extensions/metadata`; the former `unknown_extension` disappeared. | PASS |

Human subsequently completed six focused real-browser checks (FOCUS-01–06), all PASS. Together these confirmed the accepted focus behavior: from Workspace More, closing replacement by Escape or Cancel leaves More closed and returns focus to its visible summary for warning and warning-free candidates; from Home, focus returns to the Import opener; the dialog retains its accepted initial focus and keyboard operation. The review also confirmed Current Dataset, Diagnostics, and unsaved Pin protection during cancellation.

FOCUS-02 and FOCUS-06 included a transient observation: immediately after mouse Cancel, a visible focus indicator was not apparent. In FOCUS-02, Enter reopened More. In FOCUS-06, Shift+Tab moved to the button preceding Import, and when the browser window regained focus, the Import button's focus indicator was visible. Human judged this non-blocking. The direct cause of the transient visual difference is unknown and is not asserted here.

The browser evidence is Human's report of Microsoft Edge operation on Windows against the local Vite development server. The earlier D1-01–D1-09 screenshots were presented in conversation and were not independently verified from repository artifacts. No Codex-operated real-browser test was completed for the focus fix: Computer Use initialization failed with `helper_unknown_error`. This does not replace or diminish the Human Browser evidence.

## Automated and implementation evidence, recorded separately

The previous Codex report after the bounded focus fix recorded **673 tests PASS**, **lint PASS**, **production build PASS**, and **`git diff --check` PASS**. These are automated checks, not Human Browser results.

The fix records the visible Workspace More summary as the focus restoration target before closing that menu to open the local file picker. This avoids attempting to focus the now-hidden Import menu item. Home continues to use its visible Import button as the return target. The regression test exercises Workspace with warning-bearing and warning-free candidates, Escape and Cancel, and Home with both exit actions; it asserts the appropriate focus target and preserves the current Dataset and unsaved Pin. Automated evidence does not claim every browser, operating system, native file-picker implementation, or assistive-technology combination.

## Accepted bounded scope

Human acceptance covers only the reviewed D1 behavior:

- Current Dataset Diagnostics remain associated with the current Dataset; rejected acquisition-candidate Diagnostics are shown in the candidate Import-failure context and do not contaminate the current list.
- Warning-only valid candidates remain eligible and their warnings are identified as candidate Diagnostics during replacement confirmation.
- Cancel and rejected Import preserve the current Dataset, Graph, Diagnostics, and reviewed unsaved Pin; accepting a candidate updates Current Dataset Diagnostics to the accepted Dataset.
- The reviewed replacement dialog's warning disclosure, initial focus, Tab/Shift+Tab, Enter/Space, Escape, Cancel, and focus return to the approved visible acquisition control.
- The focused Home and Workspace local-file acquisition paths and browser conditions described above.

This is not Acceptance of all acquisition routes, operation-specific Diagnostics, all browser/OS combinations, asynchronous races, all save/recovery conditions, LiaisonScape Product as a whole, Cross-App interoperability as a whole, or Public Release Readiness.

## Independent follow-ups and preserved decisions

D2, Current Dataset Diagnostics re-evaluation after Dataset changes, remains **OPEN**. In particular, the previously observed Metadata warning after title removal is not resolved by D1 and is not included in this Acceptance. No common D1/D2 cause is asserted.

The LiaisonScape Home Import Failure Feedback, Cross-App Export Specification Declaration Alignment, ParameterPlotter Cross-Tab Warning UX, Cross-App Dataset JSON Export Filename, and Test 35-B-V acceptances remain separate and unchanged. Dataset Replacement Safety and Validator error/warning semantics remain in force. PUBLIC RELEASE remains **NO-GO**.

No runtime, UI, test implementation, Core, Extension, schema, Validator, or other application was changed for this documentation closure. No commit, push, release, deployment, or publication was performed.
