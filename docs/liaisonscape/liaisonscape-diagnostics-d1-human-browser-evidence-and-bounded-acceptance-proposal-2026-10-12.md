# LiaisonScape Diagnostics D1 Human Browser Evidence and Bounded Acceptance Proposal

Date: 2026-10-12

## Checkpoint disposition before formal approval

**HUMAN BROWSER REVIEW PASS (BOUNDED) / FORMAL ACCEPTANCE PENDING EXPLICIT HUMAN APPROVAL.** This document records Human-reported browser evidence for the Acquisition Candidate / Current Dataset Diagnostics separation work (D1), alongside prior Codex-reported automated evidence. It proposes a limited Acceptance boundary; it does not close D1. The [E2R-SPEC Roadmap](../roadmap.md#current-status-index-2026-09-28) remains the current planning authority.

## Human Browser Review evidence

On 2026-10-12, Human reported operating the local LiaisonScape in a real browser and confirming the following:

| Case | Human-reviewed behavior | Result and boundary |
| --- | --- | --- |
| D1-01 | Opening the current Dataset showed `unknown_extension` at `/extensions/vendor.example`. | PASS |
| D1-02 | An invalid Import candidate's `relations_missing` at `/relations` appeared in the Import failure notice, did not enter the current Dataset Diagnostics, and left the Graph and current Dataset intact. | PASS |
| D1-03 | Importing an invalid Dataset from Home showed a red failure notice with code and path. Returning to Workspace retained the current Dataset and its Diagnostics. | PASS |
| D1-04 | With an unsaved Pin present, importing a valid warning-bearing candidate opened the replacement confirmation. Candidate warnings were visibly distinguished; current Dataset Diagnostics and Graph remained. | PASS |
| D1-05 | Candidate warning details opened and closed with Enter and Space. | PASS |
| D1-06 | Tab and Shift+Tab moved through warning details, Cancel, and Discard and continued in the expected focus cycle. | PASS |
| D1-07 | Escape and the Cancel button cancelled replacement while preserving the current Dataset, Diagnostics, and unsaved Pin. The focus destination immediately after Escape was not checked. | PASS (bounded) |
| D1-08 | With a candidate without warnings, no warning disclosure appeared; Tab/Shift+Tab cycling and Escape cancellation worked. Initial focus after opening with a mouse was not directly checked. The first Tab moved to Discard, consistent with the implementation. | PASS (bounded) |
| D1-09 | Accepting a warning-bearing candidate changed the Graph to Warning Candidate and title to Candidate Warning. Workspace Diagnostics changed to `extension_version_unspecified` at `/extensions/metadata`; the former `unknown_extension` no longer appeared. | PASS |

The evidence above is Human's report of direct browser operations and screenshots presented in the conversation. No screenshot artifact was found or independently inspected in the repository for this checkpoint; this record does not claim independent screenshot verification.

## Automated and source evidence, recorded separately

The previous Codex implementation report recorded **672 tests PASS**, **lint PASS**, **production build PASS**, and **`git diff --check` PASS**. These are prior Codex-reported automated results, not Human Browser evidence, and were not rerun for this documentation checkpoint.

The current LiaisonScape worktree contains D1-related changes in `src/App.tsx`, `src/components/DatasetReplacementDialog.tsx`, `src/i18n.ts`, and `tests/appUiIntegration.test.ts`, alongside other pre-existing changes. Source inspection shows candidate diagnostics are staged separately in `pendingDatasetReplacementDiagnostics`, passed to the replacement dialog, and applied to the current diagnostics when a candidate is accepted. The integration test covers rejection without contaminating current diagnostics, preservation of the Graph and Pin across cancel, and Diagnostics switching after acceptance. The replacement dialog includes candidate warning details in its focusable sequence and has a focused interaction test for Tab/Shift+Tab, Enter/Space event handling, Escape cancellation, and EN/JA labels. These are source/test observations, not a fresh execution of the tests or a substitute for Human evidence.

## Proposed bounded Acceptance scope

Human may choose to accept the D1 behavior within the cases actually reviewed:

- The current Dataset's Diagnostics remain associated with the currently open Dataset.
- Invalid acquisition candidate Diagnostics are communicated in the Import failure context and do not replace current Dataset Diagnostics or work.
- Warning-only valid candidates remain eligible and show their warnings as candidate Diagnostics during replacement confirmation.
- Cancel preserves current Dataset state and Diagnostics; accepting a candidate changes the current Diagnostics to those of the accepted Dataset.
- The reviewed warning disclosure keyboard behavior, focus cycle, and Escape/Cancel behavior in D1-05 through D1-08, subject to the specific omissions below.

If approved, the status could be recorded as **HUMAN BROWSER ACCEPTED / PASS / CLOSED (BOUNDED)** for those reviewed cases only. This proposal is not that approval.

## Unverified scope and exclusions

The following were not confirmed and must not be inferred as PASS:

- The focus destination immediately after Escape (D1-07).
- Initial focus after opening a no-warning replacement dialog with a mouse (D1-08).
- Browser coverage for all Handoff, Sample, and other acquisition paths.
- Browser coverage for all operation-specific Diagnostics flows.
- Multiple browsers and operating systems, asynchronous races, and other unreviewed conditions.

Human should decide whether the observed D1 behavior is acceptable for bounded closure while these specific omissions remain excluded, or whether additional browser checks are required before closure. No additional design or implementation decision is otherwise proposed here.

D2, Current Dataset Diagnostics re-evaluation after Dataset changes, remains an independent open follow-up. In particular, a Metadata warning may remain after title removal; D1's PASS does not resolve that lifecycle question. No shared cause with D1 is asserted.

The existing LiaisonScape Home Import Failure Feedback **HUMAN BROWSER ACCEPTED / PASS / CLOSED (BOUNDED)** remains unchanged; its excluded rejected-candidate attribution issue is what D1 addresses. The Cross-App Export Specification Declaration Alignment, ParameterPlotter Cross-Tab Warning UX, Cross-App Dataset JSON Export Filename, and Test 35-B-V acceptances remain separate and unchanged. Dataset Replacement Safety and Validator error/warning semantics are not re-evaluated by this checkpoint. PUBLIC RELEASE remains **NO-GO**.

## Formal disposition at checkpoint time

D1's reviewed browser cases are recorded as **HUMAN BROWSER REVIEW PASS (BOUNDED)**. Formal Acceptance is **PENDING EXPLICIT HUMAN APPROVAL**. Until Human decides whether the bounded proposal is acceptable with the stated exclusions, D1 must not be marked CLOSED.

## Subsequent formal decision

The pending status above records the checkpoint as it stood before the additional focus review and Human's formal decision. On 2026-10-12, Human approved D1 as **HUMAN BROWSER ACCEPTED / PASS / CLOSED (BOUNDED)** after FOCUS-01–06 all passed. See the [formal Acceptance closure](liaisonscape-diagnostics-d1-human-acceptance-closure-2026-10-12.md). The checkpoint remains historical evidence; its original pending disposition is not the current D1 status.
