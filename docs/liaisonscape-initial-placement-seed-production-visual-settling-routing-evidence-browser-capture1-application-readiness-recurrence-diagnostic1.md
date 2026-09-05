# Application Readiness Recurrence Diagnostic1

Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1-APPLICATION-READINESS-RECURRENCE-DIAGNOSTIC1`

Date: 2026-09-05. Result: **CASE 11 / `APPLICATION-READINESS-DIAGNOSTIC-INFRA-BLOCKED`**. Semantic impact: **NONE**.

## Authority and boundary

E2R-SPEC started at `c51f3ae7bdc34d65050c42478cec712872d117db`, the final-reference child of substantive record `6cc53c343fcafb7017989fb405b1c2f1a1708cbf`. The prior recurrence diagnostic is `00106693de338c39ca2596df1ca47c30d85e6fb7`. The fresh clone was `C:/Users/extra/E2R/e2r-liaison-scape-application-readiness-recurrence-diagnostic1`, based exactly on `ba3cb3dd50ab723a7b4a4a5c2b839bc2abef87d4`, and committed as `166f01d7afc950e18042417739c79fcf0a3b33dc` (`diagnostics: isolate application readiness recurrence failure`).

Authorities were unchanged: semantic closure `21/21/0/0`; helper C# `8463CA40361743CC129952BF471DF8E290977D9B58DDBE36D5D1A52F0D017C5F`, EXE `17F38BFC4DB37EC6A7D906D6A7E90EFD64864FEE336D2215F7BB1CEE20182E86`, executor `CCA9FD5E150006C2541BD1EA3F6B52D9CA06B1BE03D0419A5573DF18634B2251`, build `DB0A717A579BC52BDF86DA7B0C25FF238893DA0410E11A3343D7F874B1FDBC37`, client `4C87A2359BF5146E6781B97208A85B04B76A53966977BDEDFF9BAB01A84D8BF9`. Edge remained `C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe`, version `152.0.4191.62`, SHA `D26CC5367000F94F05664F33D7118B1BEDA5A4633CFF019D13CC113449B71B0C`.

This was non-evidence only: no Restart4, governed B1, Restart Protocol A, V3, screenshot, Browser Evidence B, Human Review, or production correction.

## Prior Run 1 / Run 2 reconstruction

The retained prior Run 1 is recorded as PASS: port 9600, Edge PID 19068, helper PID 2516, target `B31C54711B76B330B369F3945BEECA12`, websocket `ws://127.0.0.1:9600/devtools/page/B31C54711B76B330B369F3945BEECA12`, CONNECTED, `Runtime.evaluate=2`, Runtime/Page enable PASS, ready state `complete`, exact href, root/SVG/viewBox/marker all true, 10-second survival with 36 samples, and clean quiescent teardown.

The retained prior Run 2 is recorded only as aggregate `APPLICATION-READINESS` failure: port 9376, Edge PID 27784, helper PID 21664, root exit/crash/GPU/helper/IPC errors absent, and clean teardown. Target ID, websocket URL, final DOM predicate values, timeout/poll series, exception events, navigation events, and grace-window state are **NOT-RECORDED** in that artifact; they are not inferred here.

| Readiness field | Prior Run 1 PASS | Prior Run 2 FAIL |
|---|---|---|
| document.readyState | `complete` | NOT-RECORDED |
| location.href | exact evaluation URL | NOT-RECORDED |
| evaluation-root | true | NOT-RECORDED |
| SVG / viewBox | true / `0 0 800 500` | NOT-RECORDED |
| ready marker | true | NOT-RECORDED |
| target ID / navigation | stable ID / NOT-RECORDED | NOT-RECORDED |
| Vite / runtime exception | alive / NOT-RECORDED | alive / NOT-RECORDED |
| readiness elapsed / poll count | NOT-RECORDED | NOT-RECORDED |

## New diagnostic observation

The production-like path used `apollo-11/en`, the unreserved selector `9300 + Math.floor(Math.random() * 500)`, frozen Edge flags, exact entry and capture-input semantics, direct helper EXE with IPC-v1, and exact target selection. Three runs were permitted; one was attempted and stopped at the first narrow infrastructure failure.

Run 1 used port `9421`, Edge PID `26828`, target ID `F1F69CDA32F58613EE6973DA32EBCE3D`, target URL `http://127.0.0.1:4173/e2r-liaison-scape/?cell=apollo-11__en`, and helper PID `30400`. The diagnostic first opened the target websocket with a Node probe, but the direct production helper then returned `System.Net.WebSockets.WebSocketException` / `SocketException`: connection refused at `127.0.0.1:9421`. Therefore CONNECTED, `Runtime.evaluate`, Runtime.enable, Page.enable, readiness samples, DOM values, exceptions, navigation, timeout result, and grace window are **NOT-OBSERVED** for this run. No application readiness pass/fail claim is made.

The narrow classification is **DIRECT-PRODUCTION-HELPER-CDP-TRANSPORT**, not an application predicate (A–M). Planned/executed/pass/fail: **3/1/0/1**. Late readiness 0 observed, marker-only failures 0, DOM inconsistencies 0, capture-input failures 0, runtime-exception failures 0, navigation races 0, polling-defect evidence 0. The exact next prerequisite is a bounded helper/CDP transport diagnostic before repeating application-readiness qualification.

The current production predicate remains unchanged: `globalThis.__E2R_BROWSER_READY__ === true`, polled every 100 ms for 100 attempts / 10,000 ms. The capture-input audit records `new URL("/capture-input.json", location.origin)`, `cache: "no-store"`, `response.ok`, JSON parse, render, then marker assignment. No production readiness logic was changed.

## Preservation and validation

Restart4 remains at `25e65b89f275eef9511c5e9792ea6e3bd927db29`, clean, B1 `16/1/0/1/15`, attempts 3, retries 2; semantic ID unchanged; governed B1 attempts added 0. Restart3 remains `45a8a1c55a41f767b3f22ad963321dda6fd9a755`. Fresh restart eligibility is **NO**. V3 0, screenshots 0, Browser Evidence B `NONE / INCOMPLETE`, Human Review `NOT STARTED`, Review1 `NOT ELIGIBLE`, PR-3 `NO`.

Product `563d5bc3ce8d3a915c75dd13b33188ae6f7fccaf`, Machine protocol/evidence, fixture, harness, materializer, Baseline2, and protected samples were unchanged. ai-knowledge remains unchanged with its pre-existing dirty playbook. Knowledge Candidate: `CANDIDATE ONLY / NO NEW ENTRY`. No package or lockfile change and no new dependency. `npm test` 309/309 PASS, lint PASS, build PASS, diagnostic `node --check` PASS; inherited focused tests 102/102 PASS. E2R-SPEC `npm.cmd run validate` and `git diff --check` PASS.

Roadmap was updated additively. The diagnostic clone final worktree and E2R-SPEC final worktree are clean. No push, tag, release, deploy, or publication occurred.
