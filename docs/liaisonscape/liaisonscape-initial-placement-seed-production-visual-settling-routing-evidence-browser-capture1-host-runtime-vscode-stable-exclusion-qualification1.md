# LiaisonScape Initial Placement / Seed Production / Visual Settling / Routing / Evidence / Browser Capture1 - Host Runtime VS Code Stable Exclusion Qualification1

Date: 2026-09-04 JST
Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1-HOST-RUNTIME-VSCODE-STABLE-EXCLUSION-QUALIFICATION1`

## Result

**CASE 3 / DECISION C - `VSCODE-STABLE-C / MIXED / INCONCLUSIVE`.**

VS Code Stable was installed but was not running before the test. VS Code
Insiders, which hosts Codex, remained running. With Stable absent, Edge using
the original Diagnostic2 normal-sandbox semantics passed 3/3 with no GPU fatal
or cache-lock signature. This answers the primary operational question with
**YES**, but it does not prove Stable-process causality because a matched
Stable-running baseline was not captured in this checkpoint. Installation
causality is also not demonstrated because Stable was not uninstalled.

The one permitted integrity control, adding only `--disable-gpu-sandbox`, also
passed once. The retained Diagnostic2 baseline and sandbox contrast remain
relevant, but the immediate next step is a bounded Stable-present/Stable-absent
confirmation checkpoint, not Windows Update yet.

## Evidence record

1. **CASE:** CASE 3 - Stable absent and Edge passes 3/3; matched running-state comparison unavailable.
2. **Decision:** DECISION C - mixed/inconclusive; do not change Windows build yet.
3. **e2r-spec starting HEAD:** `3954f85a1878bf291f6f3987dec39688b73629fd`.
4. **Graphics Diagnostic2 authority:** `716fd17f7ca1cd3d94398b2867a80689e907dd45`.
5. **Diagnostic clone path:** `C:\Users\extra\E2R\e2r-liaison-scape-host-runtime-vscode-stable-exclusion-qualification1`.
6. **Diagnostic clone base:** exact Graphics Diagnostic2 HEAD above.
7. **Windows build:** Windows 11 Home, 25H2, build `26200.9168` (`26200`, UBR `9168`).
8. **KB5120998 installed:** NO; no update action.
9. **Edge version:** `152.0.4191.62`.
10. **GPU driver:** Intel Corporation `32.0.101.7088`, dated `2026/06/17`; Intel UHD Graphics, WDDM 3.2, DirectX 12.
11. **VS Code Stable installed:** YES.
12. **VS Code Stable version:** `1.136.0`.
13. **VS Code Stable executable path:** `C:\Users\extra\AppData\Local\Programs\Microsoft VS Code\Code.exe`.
14. **VS Code Insiders version:** `1.137.0-insider`.
15. **VS Code Insiders executable path:** `C:\Users\extra\AppData\Local\Programs\Microsoft VS Code Insiders\Code - Insiders.exe`.
16. **Stable process count at preflight:** 0.
17. **Stable process count before cycle 1:** 0.
18. **Stable process count after cycle 1:** 0.
19. **Stable process count before cycle 2:** 0.
20. **Stable process count after cycle 2:** 0.
21. **Stable process count before cycle 3:** 0.
22. **Stable process count after cycle 3:** 0.
23. **Insiders remained running throughout:** YES; preflight and every cycle had at least one, with 14 path-identified Insiders processes during the matrix.
24. **Stable exclusion precondition:** PASS (`VSCODE-STABLE-EXCLUDED = YES`; `VSCODE-INSIDERS-REMAINS = YES`).
25. **Edge normal-sandbox cycles planned/completed:** 3 / 3.
26. **Edge STABLE-CDP-PASS count:** 3.
27. **Edge failure count:** 0.
28. **Edge first-CDP min/max:** `289-308 ms`.
29. **Edge GPU fatal count:** 0.
30. **Edge cache-lock count:** 0.
31. **Edge quiescence PASS count:** 3/3.
32. **Profile reuse count:** 0.
33. **Port reuse count:** 0.
34. **Exact argv equal to retained Diagnostic2 baseline:** YES; no `--disable-gpu-sandbox` was used in the primary matrix.
35. **Diagnostic2 sandbox-disabled control reused:** YES; prior 3/3 result retained.
36. **Optional sandbox integrity cycle executed:** YES; one fresh Edge cycle, `SANDBOX-LATE-STABLE-PASS`, first CDP `306 ms`, GPU fatal/cache-lock 0, quiescence PASS.
37. **VS Code Stable running-process classification:** `VSCODE-STABLE-C / MIXED / INCONCLUSIVE` because Stable was absent before this test.
38. **Stable running process materially causal:** INCONCLUSIVE.
39. **Stable installation itself demonstrated causal:** NO.
40. **Headless Chromium GPU-sandbox/runtime failure still supported:** YES; retained Diagnostic2 normal-sandbox failure and sandbox contrast remain valid, while this exclusion run shows state variability.
41. **Product defect demonstrated:** NO.
42. **Harness defect demonstrated:** NO.
43. **Machine Evidence defect:** NO.
44. **Browser runner changed:** NO.
45. **Browser authority changed:** NO; Edge remains authoritative.
46. **Windows Update changed:** NO.
47. **GPU driver changed:** NO.
48. **Graphics settings changed:** NO.
49. **Fresh Browser Capture1 retry eligible:** NO.
50. **Capture7 resumable:** NO.
51. **B1 evidence:** 0.
52. **V3:** 0.
53. **Browser Evidence B:** NONE.
54. **PNG PR-3 evidence:** 0.
55. **Human Review:** NO.
56. **Review1 eligible:** NO.
57. **E-VISUAL:** NO.
58. **Ranking:** NO.
59. **Selection:** NO.
60. **Product integration:** NO.
61. **PR-3:** NO.
62. **KB5120998 next controlled variable:** NO for this result; defer until the smallest Stable-present/absent confirmation is completed.
63. **Exact next prerequisite:** bounded VS Code Stable-present/Stable-absent confirmation checkpoint.
64. **Next checkpoint:** NOT STARTED.
65. **Diagnostic artifact root:** `C:\Users\extra\E2R\e2r-liaison-scape-host-runtime-vscode-stable-exclusion-qualification1\diagnostics\vscode-stable-exclusion-qualification1`.
66. **Diagnostic clone commit hash/subject:** `aacf1dc` (`diagnostic: exclude VS Code Stable from Edge runtime`); no push.
67. **Diagnostic clone final state:** clean at `aacf1dc`; unrelated repositories preserved.
68. **Result document:** this document.
69. **Roadmap:** changed additively.
70. **Knowledge Candidate:** candidate only - no new `ai-knowledge` entry.
71. **ai-knowledge:** unchanged, including the pre-existing dirty playbook.
72. **e2r-spec validation:** `npm.cmd run validate` PASS.
73. **Diff-check:** `git diff --check` PASS.
74. **e2r-spec commit hash/subject:** recorded in the final handoff as the containing documentation commit; no push.
75. **e2r-spec worktree:** clean after the local documentation checkpoint.
76. **Live Product unchanged:** YES.
77. **Protected samples preserved:** YES.
78. **Machine clone unchanged:** YES.
79. **Original Harness unchanged:** YES.
80. **Retained materializer unchanged:** YES.
81. **Baseline2 unchanged:** YES.
82. **VS Code Stable uninstalled:** NO.
83. **VS Code Insiders/Codex stopped:** NO.
84. **Browser Capture1 started:** NO.
85. **Review1 run:** NO.
86. **Windows Update / driver remediation:** NO.
87. **Installation-level VS Code causality:** NOT TESTED.
88. **Stable auto-restart observed:** NO.
89. **Push/tag/release/deploy/publication:** NONE.

## Interpretation

The exact environmental exclusion demonstrated that, while VS Code Stable was
absent and VS Code Insiders remained active, the original Edge normal-sandbox
path was stable for three cycles. This is a meaningful exclusion result, but
the preflight also shows Stable was already absent, so the run is not a
controlled present-versus-absent comparison. The correct claim is therefore
that **VS Code Stable being actively running is not established as causal by
this run**, not that installing Stable had no effect.

No VS Code Insiders process was terminated. Stable installation, extensions,
settings, user data, Windows Update, GPU driver, graphics settings, registry,
and policy were unchanged. The optional sandbox-disabled control was local,
isolated, and diagnostic-only; it does not authorize production Browser
Capture or PR-3 use.
