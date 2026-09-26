# Edge Process Lifetime / Host Runtime Diagnostic1

Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1-EDGE-PROCESS-LIFETIME-HOST-RUNTIME-DIAGNOSTIC1`
Date: 2026-09-05
Result: **CASE 7 / `EDGE-PROCESS-LIFETIME-NONREPRODUCED`**
Semantic impact: **NONE**

## Authority

- E2R-SPEC start `3af5be4cbeb0cd2ea94a929713af3b5e8f8ba94d`; prior substantive `22cf2336b404b80215248054f722e1ee6c3efe2d` (`docs: record Restart4 B1 websocket refusal diagnostic`); final reference `3af5be4cbeb0cd2ea94a929713af3b5e8f8ba94d` (`docs: finalize Restart4 B1 refusal diagnostic reference`).
- Prior diagnostic `74140239207a935bb211ac839eafe242d745c1b0`; fresh clone `C:/Users/extra/E2R/e2r-liaison-scape-edge-process-lifetime-host-runtime-diagnostic1`, base `ba3cb3dd50ab723a7b4a4a5c2b839bc2abef87d4`, commit `a6c9bab7ada605001bd53f15baf8564195eb438d` (`diagnostics: isolate Edge process lifetime failure`).
- Semantic implementation is `ba3cb3dd50ab723a7b4a4a5c2b839bc2abef87d4`, with manifest/closure/omitted/unexpected `21/21/0/0`; helper C# `8463CA40361743CC129952BF471DF8E290977D9B58DDBE36D5D1A52F0D017C5F`, EXE `17F38BFC4DB37EC6A7D906D6A7E90EFD64864FEE336D2215F7BB1CEE20182E86`, build `DB0A717A579BC52BDF86DA7B0C25FF238893DA0410E11A3343D7F874B1FDBC37`, and client `4C87A2359BF5146E6781B97208A85B04B76A53966977BDEDFF9BAB01A84D8BF9` are exact.
- Restart4 is read-only and clean at `25e65b89f275eef9511c5e9792ea6e3bd927db29`, semantic ID `pr3r1-ec74872605846cbb9bc1c1b6d8acf5bb083bc4c65c58b44dcb24836fcd1f6861`; B1 is planned 16, executed/terminal 1, success 0, failure 1, pending 15, attempts 3, retries 2.

## Host and controls

- Edge authority: `C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe`, File/Product `152.0.4191.62`, SHA-256 `D26CC5367000F94F05664F33D7118B1BEDA5A4633CFF019D13CC113449B71B0C`, drift `NO`.
- Host: Windows 11 Home `10.0.26200` build `26200`, 64-bit Console; Node `v24.18.0`, npm `11.16.0`, X64; Intel UHD Graphics driver `32.0.101.7088`.
- Root ownership is the direct Node `child_process.spawn(..., { shell:false })` PID; each recorded tree contains only that PID and observable descendants, with root, crashpad, GPU, utility, renderer, and command-line-unavailable child roles distinguished.
- App/no-helper A1 PID `26336`, A2 `28884`, A3 `23380`: all 3/3 `ROOT-SURVIVED-BOUNDED-WINDOW`; no pre-teardown exit code/elapsed time exists; GPU and renderer children were alive while sampled; Vite remained available; listener was `CONNECTED` and `/json/version` plus `/json/list` remained reachable.
- Trivial-local-page/no-helper B1 PID `29304`, B2 `5148`, B3 `16056`: all 3/3 `ROOT-SURVIVED-BOUNDED-WINDOW`, with the same listener/discovery survival and no observed child failure. This proves neither the helper, application bootstrap, nor Vite is required for bounded root survival.
- Blank Control C: `NOT-EXECUTED / NOT-NECESSARY`; the trivial local page is the completed no-Vite/no-application baseline. No process in this checkpoint returned decimal `2147483651` or `0x80000003`, no exit-code mapping was obtained, and root/child ordering, listener-after-exit, `/json`-after-exit, and Node/Vite-at-root-exit are `N/A` rather than negative causal findings. Diagnostic teardown `SIGTERM` is excluded.

## Stderr, profile and launch audit

- Relevant stderr counts are App 6 and trivial 7; fatal/GPU-fatal/sandbox-error counts are 0. Renderer-related counts (App 3, trivial 4) are task-manager fallback warnings, not crash evidence.
- Each fresh completed profile has only Crashpad metadata/settings/throttle/metrics files, with path, size, mtime, and SHA-256 in `crash-artifact-index.json`; no minidump or crash report exists.
- Qualification/B1/control deltas are port allocation, timestamped versus port-derived profile, capture-input timing, and stderr handling. Diagnostic/qualification use `createServer(0)` then release and pipe stderr; B1 uses unreserved random `9300..9799` and ignores stderr. Controls used clone-root cwd, inherited unchanged environment, `detached:false`, and `windowsHide:true`.
- Production capture cleanup, phase Vite cleanup, discovery timers, and parent teardown are `PROVEN-NOT-ACTIVE`; no production cleanup or parent teardown is proven causal.

## Classification and preservation

CASE 7 is the narrow result: App and trivial controls did not reproduce the historical process-lifetime exit, so no new root cause is claimed. Semantic correction is `NONE`; production source, helper C#, helper EXE, implementation/client/build authority, Run Identity, Phase Bridge, and Edge flags are unchanged. Fresh restart eligibility is `NO`; the exact next prerequisite is a **bounded recurrence/readiness decision checkpoint**, which is `NOT STARTED`.

Restart4 was not modified or resumed; new governed B1 attempts 0, V3 0, screenshots 0, Browser Evidence B `NONE / INCOMPLETE`, Human Review `NOT STARTED`, Review1 `NOT ELIGIBLE`, PR-3 `NO`. Restart3 remains `45a8a1c55a41f767b3f22ad963321dda6fd9a755` and unchanged. Product remains `563d5bc3ce8d3a915c75dd13b33188ae6f7fccaf`, preserving its two pre-existing dirty samples. Machine, fixture, Original Harness, retained materializer, Baseline2, and protected samples are unchanged; Machine was not rerun. ai-knowledge is unchanged with its pre-existing dirty playbook preserved; the knowledge result is `CANDIDATE ONLY / NO NEW ENTRY`.

Focused tests `102/102`, `npm test` `309/309`, lint, build, and `node --check` passed. `package.json` and lockfile are unchanged; no dependency was added, the EXE was not rebuilt, and its SHA is unchanged. Browser flags and policy, `--disable-gpu-sandbox`, PowerShell policy, Registry, firewall/security, Windows Update, and GPU driver/settings are all unchanged/not used. The artifact root is `diagnostics/edge-process-lifetime-host-runtime-diagnostic1/`; it records three diagnostic-infrastructure incidents excluded from the completed matrix. No push, tag, release, deploy, or publication occurred. E2R-SPEC `npm.cmd run validate` and `git diff --check` passed; substantive documentation commit: `f3fd6f36f7903846d9cdf060c820e3d2b00f1f31` (`docs: record Edge process lifetime diagnostic`). The non-amending final-reference commit follows this record.
