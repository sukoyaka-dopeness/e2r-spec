# LiaisonScape Initial Placement / Seed Production / Visual Settling / Routing / Evidence / Browser Capture1 — Host/GPU Runtime Diagnostic1

Date: 2026-09-04 JST
Diagnostic timestamp: 2026-09-03T19:42:11Z–2026-09-03T19:49:18Z
Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1-HOST-GPU-RUNTIME-DIAGNOSTIC1`

## Result

**CASE 2 / DECISION B — `HOST-GPU-B / FIREFOX ALSO FAILS`; host/GPU graphics
runtime failure remains unresolved.**

The post-reboot Chromium baseline was reused without rerunning Edge or Chrome.
Firefox 154.0.1 was run as a non-Chromium control for three sequential cycles,
each with a fresh isolated profile and the same neutral local control page.
All three Firefox processes exited with code 0 but emitted
`[GFX1-]: RenderCompositorSWGL failed mapping default framebuffer, no dt` and
produced no screenshot. This is a cross-engine host/GPU graphics/compositor
failure signal, not a Product, Harness, or Browser Authority result.

No Windows Update, driver, graphics setting, registry, policy, browser
authority, Product, Harness, Machine Evidence, review, or publication action
was taken.

## Evidence and requested 94-item record

1. **CASE:** CASE 2 — Firefox also fails; host/GPU graphics failure is not isolated to Chromium.
2. **Decision:** DECISION B — next bounded GPU driver/Windows graphics diagnostic.
3. **e2r-spec starting HEAD:** `2145b4b89a168e932429827ec9b624073ee17ef3`.
4. **Post-Reboot authority:** `e8990298a35d32b2a86d9199710535403f0d4e64`, post-reboot qualification clone.
5. **Failed Browser authority:** `4e297ea8d4a423788c6e571a228147f575d723ad`.
6. **Protocol A:** `a7a2aafad8fa25b66b183b8685827ae3fb938d4a`.
7. **Diagnostic clone path:** `C:\Users\extra\E2R\e2r-liaison-scape-host-gpu-runtime-diagnostic1`.
8. **Clone base:** Post-Reboot Qualification1 commit `e8990298a35d32b2a86d9199710535403f0d4e64`.
9. **Current timestamp:** `2026-09-04T04:51:44.8779841+09:00` (`2026-09-03T19:51:44.8814001Z`).
10. **Windows edition:** Windows 11 Home 64-bit per dxdiag; registry/ComputerInfo retain the `Windows 10 Home` product-name label.
11. **Windows version/build:** 25H2, build `26200.9168` (`CurrentBuild=26200`, `UBR=9168`); environment version `10.0.26200.0`.
12. **KB5120998 available:** UNKNOWN by passive local inspection; the user supplied that Windows Update offers it. No Windows Update search or install was initiated.
13. **KB5120998 installed:** NO (`Get-HotFix -Id KB5120998` returned no installed hotfix).
14. **Pending target build:** `26200.9278` as the requested qualification target; current build remains `26200.9168`.
15. **GPU adapter count:** 1 display adapter in the connected PnP inventory.
16. **GPU names:** Intel(R) UHD Graphics.
17. **GPU vendors:** Intel Corporation.
18. **GPU device IDs:** `PCI\VEN_8086&DEV_A7A8&SUBSYS_13FA1462&REV_04\3&11583659&1&10`.
19. **Driver providers:** Intel Corporation.
20. **Driver versions:** `32.0.101.7088` (dxdiag); PnP driver package `oem447.inf` with extension `oem302.inf`.
21. **Driver dates:** `2026/06/17` (dxdiag Driver Date/Size).
22. **WDDM:** WDDM `3.2`.
23. **DirectX:** DirectX `12`; feature levels `12_1, 12_0, 11_1, 11_0, 10_1, 10_0, 9_3, 9_2, 9_1, 1_0_CORE`.
24. **HAGS:** UNKNOWN; the read-only `HwSchMode` value was not exposed in this restricted session.
25. **Remote Desktop:** NO inbound-RDP evidence; `fDenyTSConnections=1`.
26. **VM/virtual GPU:** NO evidence; system manufacturer is Micro-Star International Co., Ltd., and the adapter is physical Intel UHD Graphics.
27. **Edge version:** `152.0.4191.62`.
28. **Chrome version:** `152.0.7977.75`.
29. **Firefox executable:** `C:\Program Files\WindowsApps\Mozilla.Firefox_154.0.1.0_x64__n80bbvh6b1yt2\VFS\ProgramFiles\Firefox Package Root\firefox.exe`.
30. **Firefox version:** `154.0.1` executable; Microsoft Store package `154.0.1.0`.
31. **Firefox stable validated:** NO; all three control cycles hit the graphics/compositor failure signal.
32. **Firefox cycles planned:** 3.
33. **Firefox cycles completed:** 3.
34. **Stable-render-pass count:** 0.
35. **Render-failure count:** 0 as a separate class; graphics-fatal takes precedence for all three cycles.
36. **Graphics-fatal count:** 3.
37. **Process-fatal count:** 0 for the valid evidence cycles; all exited code 0.
38. **Screenshot-artifact count:** 0.
39. **Screenshot-validation PASS count:** 0; no PNG was emitted.
40. **PNG dimensions:** NONE.
41. **PNG SHA-256 values:** NONE.
42. **Profile-reuse count:** 0; each cycle used a unique profile.
43. **Cleanup/quiescence PASS count:** 3/3; all guarded profiles were removed and no Firefox process or direct-cycle profile remained.
44. **Chromium baseline reused:** YES; retained Post-Reboot Qualification1 Edge/Chrome evidence was reused.
45. **Additional Chromium sanity cycle:** NO.
46. **Relevant event-log entries:** 14 narrow System/Application entries in the captured one-hour window.
47. **Display-driver reset:** NONE found in the retained narrow event evidence.
48. **LiveKernelEvent:** NONE found.
49. **Application/browser crash entries:** NONE found; informational StoreAgent WER entries, Firefox-package DCOM warnings, Edge extension GC, and Intel graphics service start were not browser crash evidence.
50. **Chromium-specific path failure:** YES; retained Edge and Chrome baselines are both 0/3 stable with GPU-fatal/cache-lock failures.
51. **Cross-engine host/GPU failure:** YES; Firefox independently failed its compositor framebuffer mapping on 3/3 cycles.
52. **Total host graphics failure:** YES; HOST-GPU-B is strongly supported.
53. **Product defect:** NO.
54. **Harness defect:** NO.
55. **Machine Evidence defect:** NO.
56. **Runner defect:** NO causal runner defect demonstrated; Node/alias launch probes were excluded from the cycle counts, while the successful direct Firefox cycles produced the Firefox-native graphics signal.
57. **Browser Authority defect/correction:** NO; Edge remains the accepted PR-3 authority and was not changed.
58. **Windows Update changed:** NO.
59. **GPU driver changed:** NO.
60. **Graphics settings changed:** NO.
61. **Stable replacement PR-3 browser:** NO.
62. **Fresh Browser Capture1 eligible:** NO; no stable browser runtime is qualified.
63. **Capture7 resumable:** NO.
64. **B1 count:** 0.
65. **V3 count:** 0.
66. **Browser Evidence B:** NONE.
67. **PNG PR-3 evidence:** 0.
68. **Human Review:** NO.
69. **Review1:** NO / NOT ELIGIBLE.
70. **E-VISUAL:** NO.
71. **Ranking:** NO.
72. **Selection:** NO.
73. **Product integration:** NO.
74. **PR-3:** NO.
75. **Exact next prerequisite:** bounded GPU driver/Windows graphics diagnostic, beginning with read-only pre-change GPU/runtime evidence and an explicit decision about any later user-authorized Windows Update or driver qualification.
76. **Next checkpoint:** `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1-HOST-GPU-RUNTIME-GRAPHICS-DIAGNOSTIC2` — NOT STARTED.
77. **Artifact root:** `C:\Users\extra\E2R\e2r-liaison-scape-host-gpu-runtime-diagnostic1\diagnostics\host-gpu-runtime-diagnostic1`.
78. **Diagnostic clone commit:** to be recorded after exact-path staging and validation; subject `diagnostic: isolate host GPU runtime from Chromium`.
79. **Diagnostic clone final state:** to be recorded after commit; unrelated repositories are untouched.
80. **Result document:** this document.
81. **Roadmap:** changed additively with this checkpoint result.
82. **Knowledge Candidate:** NO new reusable knowledge candidate; existing `ai-knowledge` playbook unchanged.
83. **ai-knowledge:** unchanged; pre-existing dirty `playbooks/e2r-edge-cdp-browser-diagnostic.md` preserved.
84. **e2r-spec validation:** `npm.cmd run validate` — PASS.
85. **Diff-check:** `git diff --check` — PASS.
86. **e2r-spec commit:** to be recorded after exact-path staging and validation; subject `docs: diagnose LiaisonScape host GPU runtime`.
87. **e2r-spec worktree:** to be recorded after commit; unrelated changes preserved.
88. **Live Product:** unchanged; the two pre-existing dirty sample files were preserved.
89. **Protected samples:** preserved.
90. **Machine clone:** unchanged.
91. **Original Harness:** unchanged.
92. **Materializer:** unchanged, including pre-existing `experimental/`.
93. **Baseline2:** unchanged.
94. **Push/tag/release/deploy/publication:** NONE.

## Artifacts

The diagnostic clone retains the update-free host snapshot, narrow event
evidence, dxdiag inventory, deterministic neutral control page, direct Firefox
cycle stdout/stderr, and the canonical Firefox result manifest. The three
screenshots are intentionally absent because Firefox failed before producing a
PNG; this checkpoint therefore creates no Browser Evidence B or PR-3 evidence.

The Chromium 3+3 matrices were not rerun. The Firefox control page contains
only local text, CSS, SVG, gradients, and shapes; it uses no network, WebGL, or
LiaisonScape/Product content.
