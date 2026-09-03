# LiaisonScape Initial Placement / Seed Production / Visual Settling / Routing / Evidence / Browser Capture1 - Host Runtime VS Code Stable Present/Absent Confirmation1

Date: 2026-09-04 JST  
Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1-HOST-RUNTIME-VSCODE-STABLE-PRESENT-ABSENT-CONFIRMATION1`

## Result

**CASE 1 / DECISION A - `VSCODE-STABLE-PRESENT-A / PRESENCE NOT SUPPORTED AS CAUSE`.**

The matched Stable-present run passed the original Edge normal-sandbox path
for 3/3 cycles while VS Code Stable and VS Code Insiders remained present
before and after every cycle. The prior Stable-absent result also passed 3/3
under the same original Edge semantics. Stable process presence is therefore
not supported as the cause of the observed runtime failure. Stable installation
causality is not demonstrated because no uninstall was performed.

The bounded comparison is complete. A2 was not run, and no Browser Capture1,
Browser Evidence B, Review1, product, harness, machine, Windows Update, driver,
graphics-setting, registry, or policy change was made.

## Evidence record

1. **CASE:** CASE 1 - Stable-present and Stable-absent matched original Edge runs both pass.
2. **Decision:** DECISION A - VS Code Stable process presence is not supported as causal; proceed to the named readiness prerequisite.
3. **Starting qualification authority:** `aacf1dcceb000c94f30d0f0066ce02dd6c3c4749` (`diagnostic: exclude VS Code Stable from Edge runtime`).
4. **Graphics Diagnostic2 authority:** `716fd17f7ca1cd3d94398b2867a80689e907dd45`.
5. **Diagnostic clone path:** `C:\Users\extra\E2R\e2r-liaison-scape-host-runtime-vscode-stable-present-absent-confirmation1`.
6. **Diagnostic clone base:** exact prior qualification HEAD above.
7. **Windows:** Windows 11 Home, 25H2, build `26200.9168` (`26200`, UBR `9168`).
8. **KB5120998 installed:** NO; no update action.
9. **Edge:** `152.0.4191.62`.
10. **GPU:** Intel UHD Graphics; Intel Corporation driver `32.0.101.7088`, dated `2026/06/17`.
11. **VS Code Stable:** installed, version `1.136.0`, path `C:\Users\extra\AppData\Local\Programs\Microsoft VS Code\Code.exe`.
12. **VS Code Insiders/Codex host:** version `1.137.0-insider`, path `C:\Users\extra\AppData\Local\Programs\Microsoft VS Code Insiders\Code - Insiders.exe`.
13. **Stable process count at preflight:** 9.
14. **Insiders process count at preflight:** 11.
15. **Stable process counts before/after cycles:** `11/11`, `11/11`, `11/11`.
16. **Insiders process counts before/after cycles:** `14/14`, `14/14`, `14/14`.
17. **Stable-present precondition:** PASS before each cycle; no contamination stop.
18. **Insiders-present precondition:** PASS before and after each cycle.
19. **Stable-absent A1 reference:** reused without rerun from the prior qualification: 3/3 PASS, first CDP `289-308 ms`, GPU fatal 0, cache-lock 0, quiescence 3/3.
20. **Stable-present B cycles planned/completed:** 3 / 3.
21. **Stable-present B PASS count:** 3/3 `STABLE-CDP-PASS`.
22. **Stable-present B failure count:** 0.
23. **First-CDP times:** `309 ms`, `293 ms`, `293 ms` (range `293-309 ms`).
24. **GPU fatal count:** 0.
25. **Cache-lock count:** 0.
26. **Quiescence PASS count:** 3/3.
27. **Profile reuse count:** 0; each cycle used a fresh profile under `%TEMP%`.
28. **Port reuse count:** 0; ports `9971`, `9972`, `9973` were unique and closed after each cycle.
29. **Exact argv equality:** YES; the primary matrix used the retained Diagnostic2 original normal-sandbox argv and did not use `--disable-gpu-sandbox`.
30. **Sandbox-disabled control:** not rerun; the prior control remains retained evidence.
31. **Optional sandbox integrity cycle:** NOT EXECUTED in this checkpoint.
32. **Stable process materially causal:** NO, not supported by the matched present/absent result.
33. **Stable installation itself demonstrated causal:** NO; installation was not removed.
34. **Headless GPU-sandbox/runtime issue:** the prior Diagnostic2 failure remains historical evidence, while the present and absent confirmation runs show it is not continuously reproducible under these conditions.
35. **Product defect demonstrated:** NO.
36. **Harness defect demonstrated:** NO.
37. **Machine Evidence defect:** NO.
38. **Browser runner changed:** NO.
39. **Browser authority changed:** NO; Edge remains authoritative.
40. **Windows Update changed:** NO.
41. **GPU driver changed:** NO.
42. **Graphics settings changed:** NO.
43. **Registry or policy changed:** NO.
44. **Fresh Browser Capture1 eligible:** NO; the named readiness prerequisite must be completed first.
45. **Capture7 resumable:** NO.
46. **B1 evidence:** 0.
47. **V3 evidence:** 0.
48. **Browser Evidence B:** NONE.
49. **PNG PR-3 evidence:** 0.
50. **Human Review:** NO.
51. **Review1 eligible:** NO.
52. **E-VISUAL:** NO.
53. **Ranking:** NO.
54. **Selection:** NO.
55. **Product integration:** NO.
56. **PR-3:** NO.
57. **A2 absent-state rerun:** NO; B passed 3/3 as required.
58. **KB5120998:** deferred; it is not the next controlled variable for this result.
59. **Exact next prerequisite:** `HOST-RUNTIME-BROWSER-CAPTURE-READINESS-REQUALIFICATION1`.
60. **Next checkpoint:** NOT STARTED.
61. **Diagnostic artifact root:** `C:\Users\extra\E2R\e2r-liaison-scape-host-runtime-vscode-stable-present-absent-confirmation1\diagnostics\vscode-stable-present-absent-confirmation1`.
62. **Primary evidence files:** `preflight.json`, `a1-reference.json`, `matrix-plan.json`, `edge/cycle-*/cycle.json`, `comparison-summary.json`, `root-classification.json`, `audit-results.json`, and `vscode-process-inventory-post-matrix.json`.
63. **Diagnostic tests:** `confirmation.test.mjs` passed 3/3; syntax checks passed.
64. **Diagnostic clone commit:** recorded in the final handoff; no push.
65. **Diagnostic clone final state:** clean after the local commit; unrelated repositories preserved.
66. **Result document:** this document.
67. **Roadmap:** changed additively with this checkpoint only.
68. **Knowledge Candidate:** candidate only; no new `ai-knowledge` entry.
69. **ai-knowledge:** unchanged, including pre-existing dirty work.
70. **e2r-spec validation:** `npm.cmd run validate` PASS.
71. **Diff-check:** `git diff --check` PASS.
72. **e2r-spec commit:** recorded in the final handoff; no push.
73. **e2r-spec worktree:** clean after the local documentation commit.
74. **Live Product unchanged:** YES.
75. **Protected samples preserved:** YES.
76. **Machine clone unchanged:** YES.
77. **Original Harness unchanged:** YES.
78. **Retained materializer unchanged:** YES.
79. **Baseline2 unchanged:** YES.
80. **VS Code Stable uninstalled:** NO.
81. **VS Code Stable auto-closed by automation:** NO; it remained running.
82. **VS Code Insiders/Codex stopped:** NO.
83. **Browser Capture1 started:** NO.
84. **Review1 run:** NO.
85. **Windows Update / driver remediation:** NO.
86. **Installation-level VS Code causality:** not tested; process-presence causality is not supported.
87. **Push/tag/release/deploy/publication:** NONE.

## Interpretation

The decisive evidence is the matched pair: Stable absent (A1, reused) and
Stable present (B, freshly run), both using the same original Edge
normal-sandbox semantics and both achieving 3/3 stable results without GPU
fatal or cache-lock signatures. Stable and Insiders were independently
identified by executable path and remained present across the B matrix.

This excludes Stable process presence as the supported explanation for the
runtime symptom under the bounded conditions. It does not make a claim about
uninstalling Stable, because installation-level causality was intentionally not
tested. The next permitted action is the exact readiness requalification named
above; KB5120998 remains deferred.
