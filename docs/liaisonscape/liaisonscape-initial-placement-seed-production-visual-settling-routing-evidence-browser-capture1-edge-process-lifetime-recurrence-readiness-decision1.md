# Edge Process Lifetime Recurrence / Readiness Decision1

Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1-EDGE-PROCESS-LIFETIME-RECURRENCE-READINESS-DECISION1`
Date: 2026-09-05
Result: **CASE 6 / `BROWSER-CAPTURE-APPLICATION-READINESS-RECURRENCE-BLOCKED`**
Semantic impact: **NONE**

## Authority and historical context

- E2R-SPEC start/actual prior authority: `2516d7ab4f12cd7cfd7ae60f981c3a0f33ab6f7f` (`docs: finalize Edge process lifetime diagnostic reference`); its parent substantive record is `f3fd6f36f7903846d9cdf060c820e3d2b00f1f31` (`docs: record Edge process lifetime diagnostic`).
- New diagnostic clone: `C:/Users/extra/E2R/e2r-liaison-scape-edge-process-lifetime-recurrence-readiness1`, base `ba3cb3dd50ab723a7b4a4a5c2b839bc2abef87d4`, commit `00106693de338c39ca2596df1ca47c30d85e6fb7` (`diagnostics: qualify Edge process lifetime recurrence`).
- Semantic closure is `21/21/0/0`. Helper EXE SHA is `17F38BFC4DB37EC6A7D906D6A7E90EFD64864FEE336D2215F7BB1CEE20182E86`; build/client SHA values are `DB0A717A579BC52BDF86DA7B0C25FF238893DA0410E11A3343D7F874B1FDBC37` / `4C87A2359BF5146E6781B97208A85B04B76A53966977BDEDFF9BAB01A84D8BF9`.
- Edge authority is `C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe`, `152.0.4191.62`, SHA `D26CC5367000F94F05664F33D7118B1BEDA5A4633CFF019D13CC113449B71B0C`; no drift.
- Historical matrix remains distinct: earlier qualification 3/3 PASS; Restart4 B1 first item 3/3 failed after Edge exit; refusal diagnostic no-helper A and helper B 3/3 exited/refused; lifetime Diagnostic1 App/no-helper 3/3 and trivial/no-helper 3/3 survived.

## Production-like recurrence gate

The gate required six fresh consecutive, non-evidence `apollo-11/en` runs using the unchanged B1-style path: frozen Edge flags, exact app/Vite entry, direct production EXE helper with IPC-v1, exact target selection, and the unreserved production selector `9300 + Math.floor(Math.random() * 500)`. Each successful run needed discovery, helper CONNECTED, `Runtime.evaluate = 2`, `Runtime.enable`, `Page.enable`, ready marker, evaluation root, SVG/viewBox `0 0 800 500`, then a non-mutating 10-second survival window.

| Run | Port | Edge PID | Helper PID | Outcome |
| --- | ---: | ---: | ---: | --- |
| 1 | 9600 | 19068 | 2516 | PASS: exact target, CONNECTED, CDP/page/readiness checks, 36 survival samples over 10 seconds, no root exit, target crash, GPU fatal, helper error, or IPC error; clean teardown/quiescence. |
| 2 | 9376 | 27784 | 21664 | FAIL: earliest seam `APPLICATION-READINESS`; listener, exact target, helper connection, CDP setup, root lifetime, target crash, GPU fatal, helper/IPC errors, and teardown did not establish an earlier failure. |
| 3–6 | — | — | — | NOT EXECUTED: mandatory stop-on-first-failure. |

Thus planned/executed/success/failure is **6/2/1/1**. Two fresh Edge, Vite, helper, profile, target, and production-style port instances were used; the helper EXE SHA was identical. No port collision, spontaneous root exit, `0x80000003`, target crash, GPU fatal, or IPC error was observed. The diagnostic artifact root also records three setup-only infrastructure incidents; none produced a retained completed gate run.

## Decision and preservation

The gate is blocked, not majority-voted. No semantic or production correction is applied. Fresh restart eligibility is **NO**, and no fresh Restart Protocol A was created. The exact next prerequisite is a **bounded application-readiness recurrence diagnostic based on Run 2**; it is not started.

Restart4 remains immutable at `25e65b89f275eef9511c5e9792ea6e3bd927db29`: planned 16, executed 1, success 0, failure 1, pending 15, attempts 3, retries 2. It was not modified or resumed; governed B1 attempts added 0. V3 0, screenshots 0, Browser Evidence B `NONE / INCOMPLETE`, Human Review `NOT STARTED`, Review1 `NOT ELIGIBLE`, and PR-3 `NO`. Restart3 remains `45a8a1c55a41f767b3f22ad963321dda6fd9a755` unchanged.

Pre- and post-qualification focused tests were 102/102 PASS; `npm test` was 309/309 PASS; lint, build, and both production/diagnostic `node --check` passed. E2R-SPEC `npm.cmd run validate` and `git diff --check` also passed. No production source, helper, EXE, authority, package file, Product, Machine, fixture, browser flag, policy, security, Registry, firewall, Windows Update, or GPU setting changed. Product authority remains `563d5bc3ce8d3a915c75dd13b33188ae6f7fccaf` with its existing dirty samples preserved; ai-knowledge remains unchanged with its existing dirty playbook preserved. Knowledge candidate: `CANDIDATE ONLY / NO NEW ENTRY`. This substantive E2R-SPEC record is `6cc53c343fcafb7017989fb405b1c2f1a1708cbf`. No push, tag, release, deploy, or publication occurred.
