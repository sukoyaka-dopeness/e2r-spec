# LiaisonScape Browser Capture1 CDP Launch/Readiness Diagnostic3

Date: 2026-09-04

Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1-CDP-LAUNCH-READINESS-DIAGNOSTIC3`

## Status and primary answers

**CASE 4 / DECISION D - GPU/Edge environment instability dominates; retain
the Browser Capture block.**

Q1: **Yes.** All six counted cycles reached the defined quiescence state:
the known diagnostic process exited, the unique port closed, the profile was
quiet across the 2-second interval, and targeted cleanup passed.

Q2: **Yes.** Every counted cycle used a new unique absolute profile path. No
profile path was reused, including after the invalidated first N1 helper run.

Q3: **Yes, Node still fails after proven quiescence.** N1/N2/N3 reached CDP
only at 5750/5801/5838 ms and then became GPU-fatal before the 3-second
stability window completed.

Q4: **Yes, PowerShell also fails after proven quiescence.** P1/P2/P3 reached
CDP at 5947/5926/6022 ms and then became GPU-fatal before stability.

Q5: **No.** Under the controlled matrix, launcher choice was not materially
predictive: both launchers produced the same result class in all three cycles.
The current classification is `SPAWN-C / CORRELATED ONLY`.

Q6: **Yes.** GPU process failures and `GPUPersistentCache` file-in-use
errors persisted in all six cycles despite unique profiles, no reuse, and
confirmed quiescence.

Q7: **No.** No tested configuration produced repeated stable CDP readiness
suitable to justify a Browser runner correction or a later Browser Capture
retry.

The first Diagnostic3 N1 attempt was invalidated as a diagnostic-helper
measurement error: it compared the pre-cleanup profile snapshot with the
post-cleanup deleted snapshot. That attempt is retained in
`diagnostics/cdp-readiness-diagnostic3/initial-attempt-audit.json` and is not
counted in the six-cycle matrix. The helper was corrected before N1 was rerun;
the rerun used a new profile path and the original port was not reused.

## Authorities and boundary

| Item | Authority |
| --- | --- |
| e2r-spec starting HEAD | `7c19496b41c3d384ff46bcf588aa62e45e493266` |
| Diagnostic2 authority | `7c19496b41c3d384ff46bcf588aa62e45e493266` |
| Diagnostic2 source commit | `3e1a9b1649cbf77af67e4a2703cd2d12200a070f` |
| Diagnostic3 clone | `C:/Users/extra/E2R/e2r-liaison-scape-browser-cdp-readiness-diagnostic3` |
| Failed Browser Capture authority | `4e297ea8d4a423788c6e571a228147f575d723ad` |
| Failed Protocol A | `a7a2aafad8fa25b66b183b8685827ae3fb938d4a` |
| Failed capture7 lineage | `C:/Users/extra/E2R/e2r-liaison-scape-visual-evidence-browser-capture7` at `06acff14d5e27e3c9a775057c608d203854cab20` |
| Product | `563d5bc3ce8d3a915c75dd13b33188ae6f7fccaf` |
| Original Harness | `9bd3f3b819bf07ccdfa0339be9a953d045c4e4fc` |
| Machine Evidence B | `b0bd0f1a9f70915c639cbee61cf5f8370c78766f` |

Diagnostic3 was non-evidence work only. It did not start Browser Capture1,
resume capture7, create B1/V3/Browser Evidence B, generate screenshots, run
Review1, modify Product, or modify the Harness or Machine Evidence.

## TEMP inventory and cleanup

The first Diagnostic3 preflight inventoried the known isolated roots before
launching a counted cycle:

| Root | Retained profiles before cleanup | Cleanup | Profiles after cleanup |
| --- | ---: | --- | ---: |
| `%TEMP%/e2r-cdp-readiness-diagnostic1` | 18 | 18 `CLEANUP-PASS` | 0 |
| `%TEMP%/e2r-cdp-readiness-diagnostic2` | 2 | 2 `CLEANUP-PASS` | 0 |

The path ledger is retained in
`diagnostics/cdp-readiness-diagnostic3/initial-attempt-audit.json`. No
`CLEANUP-EPERM` or `CLEANUP-SKIPPED-UNSAFE` result occurred. The second
preflight saw both historical roots empty, which is retained separately as
the rerun inventory. No normal Edge profile was inspected or deleted.

Diagnostic3 used six new profiles and six new ports. All six profiles cleaned
successfully and the final Diagnostic3 profile inventory was empty. Profile
path reuse count was `0`; port reuse count was `0`.

## Quiescence rule and lifecycle observability

For this diagnostic only, `CDP-DIAGNOSTIC-QUIESCENCE-v1` required:

1. the launcher-owned Edge PID to exit;
2. the unique diagnostic port to be closed;
3. the profile file count, byte total, and latest modification time to remain
   unchanged across a 2-second quiet interval;
4. no known diagnostic PID to remain according to the targeted PID check; and
5. targeted profile cleanup to pass, or the profile to be permanently
   abandoned.

The trustworthy lifecycle signals were the Node child exit event and PID,
PowerShell `Start-Process -PassThru` PID, targeted `tasklist` PID presence,
port bind/closed state, and profile snapshots. Full
`Get-CimInstance Win32_Process` process-tree command-line inspection remained
unavailable without elevation. No broad Edge termination was used.

All counted cycles passed quiescence. The matrix did not stop early. There
were zero attributable orphan diagnostic processes by the targeted PID/port
checks.

## Controlled matrix

The preregistered order was `N1 -> P1 -> N2 -> P2 -> N3 -> P3`, one cycle at a
time. Both arms used the same Edge executable/version, semantic argv, fresh
profile policy, unique port policy, Node `fetch` HTTP poller, 12-second
observation window, 3-second stability window, cleanup procedure, and
environment class.

The common argv was:

```text
--headless=new
--disable-gpu
--disable-extensions
--no-first-run
--no-default-browser-check
--user-data-dir=<unique absolute profile>
--remote-debugging-port=<unique port>
--remote-debugging-address=127.0.0.1
--force-device-scale-factor=1
--force-page-scale-factor=1
--window-size=1280,900
about:blank
```

The same Node HTTP poller requested
`http://127.0.0.1:<port>/json/version` every approximately 100 ms, with a
500 ms request timeout. A cycle was stable only if the endpoint remained
usable throughout the complete 3-second stability window without fatal exit.

| Cycle | Launcher | Port | First CDP | Stability | GPU fatal | Cache lock | Cleanup/quiescence | Result |
| --- | --- | ---: | ---: | --- | --- | --- | --- | --- |
| N1 | Node `spawn` | 9811 | 5750 ms | FAIL | YES | YES | PASS | `GPU-FATAL-AFTER-CDP` |
| P1 | PowerShell `Start-Process` | 9812 | 5947 ms | FAIL | YES | YES | PASS | `GPU-FATAL-AFTER-CDP` |
| N2 | Node `spawn` | 9813 | 5801 ms | FAIL | YES | YES | PASS | `GPU-FATAL-AFTER-CDP` |
| P2 | PowerShell `Start-Process` | 9814 | 5926 ms | FAIL | YES | YES | PASS | `GPU-FATAL-AFTER-CDP` |
| N3 | Node `spawn` | 9815 | 5838 ms | FAIL | YES | YES | PASS | `GPU-FATAL-AFTER-CDP` |
| P3 | PowerShell `Start-Process` | 9816 | 6022 ms | FAIL | YES | YES | PASS | `GPU-FATAL-AFTER-CDP` |

Node first-CDP range was 5750-5838 ms; PowerShell was 5926-6022 ms. Node
stable-window PASS count was `0/3`; PowerShell stable-window PASS count was
`0/3`. GPU fatal count was `3/3` for each launcher. Cache-lock count was
`3/3` for each launcher. Cleanup/quiescence PASS count was `3/3` for each
launcher.

The first CDP response arrived after the original 5-second window in all six
counted cycles, so the timeout remains `TIMEOUT-B / CONTRIBUTING`. The longer
12-second observation did not produce stable CDP; GPU fatal followed the
short CDP interval. The cycle result class is therefore
`GPU-FATAL-AFTER-CDP`, not `LATE-STABLE-CDP-PASS`.

## CDP-ROOT-MODEL-v3

| Dimension | Classification | Finding |
| --- | --- | --- |
| Edge process start | `PASS` | Every cycle returned a diagnostic PID and produced Edge stderr. |
| R1 HTTP readiness | `LATE / INTERMITTENT / FAIL` | CDP appeared around 5.750-6.022 s, then failed during stability. |
| Observation window | `TIMEOUT-B / CONTRIBUTING` | The original 5 s window missed all counted first responses, but 12 s did not yield stability. |
| Launcher | `SPAWN-C / CORRELATED ONLY` | Node and PowerShell both failed 3/3 under controlled quiescence. |
| Process lifecycle | `LIFECYCLE-C / NOT SUPPORTED` | All profiles quiesced cleanly while both launchers remained unstable. |
| Profile/cache | `PROFILE-C / NOT SUPPORTED` | Cache-lock errors persisted in every unique fresh profile; reuse was zero and cleanup was 6/6. |
| GPU | `GPU-A / FATAL PREVENTS STABLE CDP` | GPU fatal followed a short reachable interval in all six cycles. |
| Vite | `NOT CAUSAL at R1` | No Vite/page phase was reached. |
| Port correctness | `PASS` | Six unique ports were free before launch and closed after shutdown. |
| HTTP poller correctness | `PASS` | One common Node HTTP poller was used for both launcher arms. |

This does not prove that every host-level GPU condition is identical, but it
does show that the current failure is not isolated to Node spawn semantics,
profile-path reuse, incomplete cleanup, or the 5-second timeout alone.

## Correction and eligibility

Stable causal correction identified: **NO**. No Browser runner correction was
implemented. The smallest justified next prerequisite is a bounded
browser/runtime environment stability qualification focused on Edge/GPU
resource state and external process ownership, using the established
quiescence rule and fresh profiles. Do not modify the runner merely to mask
the GPU fatal state.

Fresh Browser Capture1 retry eligibility remains **NO**. Review1 remains **NO**
because B1 authoritative browser evidence is `0`, V3 is `0`, and Browser
Evidence B is `NONE`.

B1 authoritative evidence: `0`; V3: `0`; Browser Evidence B: `NONE`; PNG
PR-3 evidence: `0`; Human Review: `NO`; E-VISUAL: `NO`; ranking: `NO`;
selection: `NO`; Product integration: `NO`; PR-3: `NO`.

The exact next checkpoint is **NOT STARTED**. Diagnostic3 does not authorize
Browser Capture1, capture7 resume, Review1, B1, V3, Browser Evidence B, or any
Product/Harness/Machine change.

Knowledge Candidate: **CANDIDATE ONLY / NO NEW ENTRY**. The scoped reusable
observation is that launcher crossover must be evaluated only after targeted
process quiescence and profile non-reuse are established; if both launchers
then fail with the same GPU/cache signature, the Browser runner is not the
primary demonstrated cause. `ai-knowledge` was not modified.

## Diagnostic3 artifacts and repository state

Diagnostic3 artifacts are under
`C:/Users/extra/E2R/e2r-liaison-scape-browser-cdp-readiness-diagnostic3/diagnostics/cdp-readiness-diagnostic3/`.
The artifact set includes `preflight.json`, TEMP inventories and cleanup
records, `initial-attempt-audit.json`, six per-cycle records, the quiescence
audit, launcher crossover summary, root model, and audit results.

The Diagnostic3 commit is created locally after verification with subject
`diagnostic: test Edge CDP process quiescence`. No push occurred.

No Product, Original Harness, Machine Evidence B, failed capture7 lineage,
materializer, Baseline2, or `ai-knowledge` file was changed by this
checkpoint. Existing Product sample modifications and the materializer's
pre-existing `experimental/` directory were preserved.

Push/tag/release/deploy/publication: **NONE**.
