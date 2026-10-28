# NarrativeLine N4: Candidate warning ownership correction

Date: 2026-10-26 JST

Status: **LOCAL RUNTIME CANDIDATE / AUTOMATED TESTS PASS / HUMAN BROWSER ACCEPTANCE PENDING / NO COMMIT OR PUBLICATION**. The Human authorized this bounded Runtime correction after the [isolated reproduction](../cross-app/cross-app-diagnostics-warning-ux-human-decision-and-investigation-2026-10-26.md). The [Roadmap](../roadmap.md) remains the current planning authority.

## Correction

`e2r-narrative-line/src/App.tsx` now stores import warnings with the staged `DatasetCandidate`. The existing `importWarnings` state belongs only to the accepted/current Dataset. Staging leaves the current warnings alone; Cancel discards the candidate and its warnings; a successful guarded `replace` promotes the accepted candidate's warnings with its Dataset. If replacement is refused, the current Dataset and warnings stay intact, and candidate warnings remain identified in the replacement retry context. The guarded Discard, Export-and-Continue, and retry paths no longer pass an implicit empty warning list. The replacement dialog and retry context show candidate warnings under an explicit EN/JA candidate label. No Dataset, Validator, Handoff, or cross-tab contract was changed.

| Transition | Current Dataset warnings | Candidate warnings |
| --- | --- | --- |
| Stage | Unchanged | Stored with Candidate; shown in its decision context. |
| Cancel | Unchanged | Discarded with Candidate. |
| Successful Accept | Replaced with accepted Candidate warnings, including empty list. | Promoted only after successful protected write. |
| Refused/failed protected write | Unchanged | Retained only in Candidate/retry context. |
| Invalid acquisition | Unchanged | No valid Candidate is staged. Acquisition error stays in its operation context. |

## Verification and limits

The new isolated production-App integration test uses a disposable jsdom origin and in-memory Datasets. It covers an existing warning-bearing Current Dataset, a warning-bearing Candidate, Cancel, repeated Timeline import, guarded Discard accept, warning-free Candidate, Home import, Handoff accept, Export-and-Continue, peer-blocked Handoff refusal/Cancel, and JA candidate wording. It checks persisted Dataset identity as well as warning placement. The focused test passed **6/6**. The full NarrativeLine suite passed **381/381**; lint and production build passed. Existing Dataset Replacement and cross-tab tests are included in that suite. No user Workspace, personal browser profile, live Handoff endpoint, or public site was used. This is automated DOM evidence, not Human Browser Acceptance or publication evidence.

The chosen patch does not address NarrativeLine N5 failed-Export issue lifetime or general warning revision history. Browser review remains necessary for EN/JA presentation, keyboard/focus behavior, Candidate warning readability, Cancel, Accept, and cross-tab refusal in the actual application. A real browser or Human has not accepted this candidate. No serious new data-loss issue was observed in these tests; this does not establish broad Cross-Context Workspace Safety closure.
