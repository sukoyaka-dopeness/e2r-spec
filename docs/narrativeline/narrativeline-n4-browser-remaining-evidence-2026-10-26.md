# NarrativeLine N4 remaining real-browser evidence

Date: 2026-10-26 JST

Status: **INCONCLUSIVE / ADDITIONAL EVIDENCE REQUIRED / HUMAN BROWSER ACCEPTANCE PENDING**. This is Codex-operated browser evidence and a bounded decision aid, not Human Browser Acceptance, Publication Closure, or Public Beta GO. The [N4 correction record](narrativeline-n4-warning-ownership-correction-2026-10-26.md) and [Roadmap](../roadmap.md) retain their distinct roles.

## Target and evidence classes

NarrativeLine local uncommitted candidate at Git HEAD `bb38fa904a38404845ec7afe097bf0dd2072e487`; Vite served `http://127.0.0.1:4188/e2r-narrative-line/` (HTTP 200). Formal Browser Use extension connection selected Microsoft Edge browser `3`, tab `901791127`, title `NarrativeLine`, URL `http://127.0.0.1:4188/e2r-narrative-line/#locale=en` at start. The main Edge process command line specified the isolated `C:\Users\extra\E2R\workspace\n4-browser-20261026-codex\edge-profile-n4-retry` profile. Human had separately checked its `edge://version` path. Only disposable A/B/C files in that workspace and this isolated browser profile were used. Browser DOM/visual observations, read-only filesystem inspection of the actual download, prior user-provided browser results, automated tests, and source constraints are identified separately below.

At entry, browser AX and screenshot showed Current Dataset B, title `N4 B narrow test`, and its `unknown_extension` import information. The Timeline's `data-dataset-modified` was `true`. The Git worktree's N4 Runtime and test files were unchanged in this verification turn. The preceding automated suite was 381/381 PASS with lint/build PASS; those are not counted as real-browser observations here.

## New browser observations

### N4-05 — Export and Continue

Browser Use file selection for warning-bearing A failed at `fileChooser.setFiles` with `No node found for given backend id`; the observed tab then showed Home. Continue Editing showed B and its `N4 B narrow test` title still present. After that resume, import information was absent; current source intentionally clears import information on Resume, so this observation is not evidence of a replaced or lost Dataset. No permission was changed and the failed selection was not treated as an Import result.

To isolate the **actual file acquisition** gap, the browser test used a warning-free *New Dataset* candidate through the same Export-and-Continue action. In the isolated browser, B's title was changed to unique `N4-export-probe-42b7`; `data-dataset-modified` became `true`. Before the action, `C:\Users\extra\Downloads\N4-export-probe-42b7.e2r.json` did not exist. The Japanese replacement dialog exposed `書き出して続行`. Browser Use's `download` event timed out after 6 seconds, but the action changed the Timeline to an empty new Dataset. A subsequent exact-path filesystem check found the 364-byte file at that download path, last written 2026-10-26 23:06:11 local time, SHA-256 `150f0d486748e34ca1d5cb1c68d2fb265de8aa8177962ac78e87391589906591`. Parsing it as E2R JSON found `version: "1.0"`, original B's `event-b`, its unknown Extension payload, and metadata title `N4-export-probe-42b7`. Entities, Events, and Relations matched disposable B's source structure. This establishes actual acquisition of the pre-replacement Dataset with the unsaved title. The previous browser session had separately observed warning-bearing Candidate acceptance and warning attribution after Export and Continue, as supplied in the Human handoff; the new actual-file probe used a warning-free candidate. The two observations are complementary, not a single combined run.

### N4-07 — Japanese narrow view and operation

The browser switched from EN to JA at the same local tab. The formal viewport capability set `360 x 780`, then was reset after the narrow-width inspection. A screenshot showed the Japanese Timeline at 360 px with title and actions within the viewport. With disposable B dirty, opening a warning-free New Dataset candidate showed the Japanese replacement dialog in the narrow viewport: title, unsaved-work explanation, `キャンセル`, `破棄して続行`, and `書き出して続行` were fully visible. Browser AX showed initial focus on Cancel; Tab moved to Discard and then Export; Escape closed the dialog and returned focus to `新しいDataset`. Enter reopened the dialog from that button; Enter on focused Cancel closed it and restored focus. Continue Editing afterwards displayed B and its modified title. This confirms a representative Japanese narrow layout and keyboard path **without candidate warnings**. The prior Human-provided browser evidence covered EN/JA warning copy, Code/Path, English 360 px, and representative keyboard/focus. Japanese 360 px with the long warning Code/Path remains unobserved because local file upload failed.

### N4-08 — Handoff

**NOT RUN for Handoff.** The current `DatasetHandoffService.ts` accepts only HTTPS Dataset URLs and omits credentials on fetch. The available disposable files and Vite endpoint are local HTTP. Using them as an Handoff source would be rejected before acquisition. No self-signed certificate warning was bypassed, no public Dataset was substituted, and no external upload was made. Prior Human-provided browser evidence for Home, Timeline, repeated Import, and Cancel/re-Import remains separate.

## Integrated N4 status

| Case | Status | Basis and limit |
| --- | --- | --- |
| N4-01 Cancel | **PASS (prior)** | User-provided prior formal Browser Use result; not rerun. |
| N4-02 Warning Ownership | **PASS (prior)** | User-provided prior formal Browser Use result; not rerun. |
| N4-03 Accept | **PASS (prior)** | User-provided prior formal Browser Use result; not rerun. |
| N4-04 Warning-free Candidate | **PASS (prior)** | User-provided prior formal Browser Use result; the new Export probe also ended in an empty new Dataset. |
| N4-05 Export and Continue | **PASS (bounded, composite evidence)** | Prior browser observation covered warning-bearing candidate replacement and warning transfer; new browser action plus inspected download file covered actual pre-replacement Export. The exact warning-bearing Export/download sequence was not repeated in one run. |
| N4-06 Cross-tab Replacement Refusal | **PASS (prior)** | User-provided prior formal Browser Use result; not rerun. |
| N4-07 EN/JA and operation | **INCONCLUSIVE** | JA 360 px buttons, keyboard, focus and unsaved-work dialog passed with a warning-free Candidate; long Code/Path in JA narrow warning dialog remains unobserved. |
| N4-08 acquisition paths | **INCONCLUSIVE** | Home/Timeline/repeat Import prior PASS; Handoff NOT RUN because a safe isolated HTTPS fixture was unavailable. |

The N4-07 gap is directly within the requested Candidate-warning presentation and should remain an acceptance evidence gate. N4-08 Handoff may be explicitly excluded from a narrower Human acceptance scope only by Human decision; Codex does not make that exclusion. A future Handoff run needs an approved isolated HTTPS fixture endpoint serving only disposable data, with browser trust and CORS established without bypassing safety interstitials. A future JA narrow warning run needs a working approved file-upload connection or another authorized local acquisition route. Browser Use's Edge upload troubleshooting directs the Human to enable **Allow access to file URLs** for the ChatGPT browser extension; this turn did not change that permission.

No Runtime defect, cross-tab protection failure, or data loss was established by the new observations. A newly downloaded disposable file remains in the user's Downloads; the isolated Edge profile, test fixtures, browser tab, server, and unrelated worktree state were not deleted or reset. No Runtime, Core, Validator, schema, Commit, Push, deployment, or publication operation occurred.
