# LiaisonScape Initial Placement / Seed Production / Visual Settling / Routing / Evidence / Browser Capture1 - Host Runtime Browser Capture Readiness Requalification1

Date: 2026-09-04 JST
Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1-HOST-RUNTIME-BROWSER-CAPTURE-READINESS-REQUALIFICATION1`

## Result

**CASE 1 / DECISION A - `BROWSER-RUNTIME-READY`.**

The accepted Microsoft Edge Stable authority sustained the exact original
normal-sandbox contract for six sequential fresh-profile cycles. All six were
`READINESS-STABLE-PASS`; first CDP was `312, 284, 302, 300, 294, 267 ms`,
with no GPU-fatal or cache-lock signature and quiescence/cleanup PASS in every
cycle.

The one deterministic local evaluation-entry smoke also passed mechanically:
the page loaded, `#evaluation-root` and its SVG existed, the SVG viewBox was
`0 0 800 500`, CDP remained stable, no runtime exception or GPU fatal was
observed, and teardown/quiescence passed. This smoke is explicitly
`NON-EVIDENCE-READINESS-SMOKE`; it is not Browser Evidence B, B1, V3, or PR-3.

The current runtime is qualified to begin a fresh Browser Capture1 lineage at
the next checkpoint. Browser Capture1 itself was not started here. KB5120998
remains deferred.

## Evidence record

1. **CASE:** CASE 1 - Edge 6/6 PASS plus evaluation-entry smoke PASS.
2. **Decision:** DECISION A - `BROWSER-RUNTIME-READY`.
3. **Why:** qualify readiness only before a fresh Browser Capture1 lineage; do not run Browser Capture1 in this checkpoint.
4. **e2r-spec starting HEAD:** `7673ec073d0719c4daedd14d03dee2345d9449b9`.
5. **Reported-hash reconciliation:** the user-reported values were accurate; the actual documentation commit is `a2f960073d0719c4daedd14d03dee2345d9449b9`, and the formatting-fix commit is `7673ec073d0719c4daedd14d03dee2345d9449b9`. No history was rewritten.
6. **e2r-spec starting worktree:** clean.
7. **Prior confirmation documentation authority:** `a2f960073d0719c4daedd14d03dee2345d9449b9`.
8. **Prior confirmation formatting-fix authority:** `7673ec073d0719c4daedd14d03dee2345d9449b9`.
9. **Prior confirmation diagnostic authority:** `bcdf0835af5ad9310a64513ae4560367496673d2`.
10. **Earlier qualification authority:** `aacf1dcceb000c94f30d0f0066ce02dd6c3c4749`.
11. **Graphics Diagnostic2 authority:** `716fd17f7ca1cd3d94398b2867a80689e907dd45`.
12. **Failed Browser Capture authority:** `4e297ea8d4a423788c6e571a228147f575d723ad` (retained immutable).
13. **Failed Protocol A authority:** `a7a2aafad8fa25b66b183b8685827ae3fb938d4a` (retained immutable).
14. **Machine Evidence B authority:** `b0bd0f1a9f70915c639cbee61cf5f8370c78766f` (not rerun).
15. **Live Product authority:** `563d5bc3ce8d3a915c75dd13b33188ae6f7fccaf` (read-only reference; its existing dirty files were preserved).
16. **Readiness clone path:** `C:\Users\extra\E2R\e2r-liaison-scape-browser-capture-readiness-requalification1`.
17. **Readiness clone base:** exact prior confirmation HEAD `bcdf0835af5ad9310a64513ae4560367496673d2`.
18. **Windows snapshot:** Windows 11 Home, 25H2, build `26200.9168` (`26200`, UBR `9168`).
19. **Host snapshot timestamp:** `2026-09-03T21:28:45.053Z` UTC; boot UTC `2026-09-03T19:11:26.5032339Z`.
20. **KB5120998 installed:** NO.
21. **Edge authority:** Microsoft Edge Stable.
22. **Edge executable path:** `C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe`.
23. **Edge Product/File version:** `152.0.4191.62` / `152.0.4191.62`.
24. **Edge version changed since prior checkpoint:** NO.
25. **Edge architecture:** x64.
26. **Edge executable timestamp:** `2026-09-02T09:59:51.5062677Z`.
27. **Chrome informational version:** `152.0.7977.75`.
28. **Firefox informational version:** `154.0.1`.
29. **GPU adapter:** Intel UHD Graphics.
30. **GPU driver:** Intel Corporation `32.0.101.7088`, dated `2026/06/17`.
31. **WDDM:** 3.2, retained from the read-only Diagnostic2 host inventory.
32. **VS Code Stable process count:** 11 at the recorded host snapshot; informational only.
33. **VS Code Insiders process count:** 13 at the recorded host snapshot; informational only.
34. **Accepted normal-sandbox argv confirmed:** YES.
35. **`--disable-gpu-sandbox` used:** NO.
36. **Readiness contract:** `PR3-BROWSER-RUNTIME-READINESS-v1`.
37. **Readiness cycles planned/completed:** 6 / 6.
38. **`READINESS-STABLE-PASS` count:** 6.
39. **Failure count:** 0.
40. **First-CDP cycle 1:** 312 ms.
41. **First-CDP cycle 2:** 284 ms.
42. **First-CDP cycle 3:** 302 ms.
43. **First-CDP cycle 4:** 300 ms.
44. **First-CDP cycle 5:** 294 ms.
45. **First-CDP cycle 6:** 267 ms.
46. **First-CDP min/max:** `267-312 ms`.
47. **Latency class:** `FAST-STABLE` for all six cycles.
48. **GPU fatal count:** 0.
49. **Cache-lock count:** 0.
50. **Profile reuse count:** 0.
51. **Port reuse count:** 0.
52. **Quiescence PASS count:** 6/6.
53. **Current historical GPU-fatal signature reproduced:** NO.
54. **Evaluation-entry smoke executed:** YES; one neutral local state only.
55. **Evaluation-entry smoke result:** `EVALUATION-ENTRY-SMOKE-PASS`.
56. **Smoke evidence class:** `NON-EVIDENCE-READINESS-SMOKE`.
57. **Smoke page/root/SVG/viewBox:** PASS / PASS / PASS / `0 0 800 500`.
58. **Smoke CDP stable:** YES; no runtime exceptions.
59. **Smoke teardown/quiescence:** PASS; dedicated profiles cleaned.
60. **Isolated evaluation entry changed:** NO; existing entry was read-only referenced from the validated clone.
61. **Product source changed:** NO.
62. **Browser runtime readiness classification:** `BROWSER-RUNTIME-READY`.
63. **Current runtime stable:** YES.
64. **Historical failure continuously reproducible:** NO.
65. **VS Code Stable cause supported:** NO, per the preceding matched present/absent confirmation.
66. **Product defect demonstrated:** NO.
67. **Harness defect demonstrated:** NO.
68. **Machine Evidence defect:** NO.
69. **Browser runner changed:** NO.
70. **Browser authority changed:** NO.
71. **Windows Update changed:** NO.
72. **GPU driver changed:** NO.
73. **Graphics settings changed:** NO.
74. **Failed capture lineage resumed:** NO.
75. **Old `pr3r1-*` reused:** NO.
76. **Machine Evidence rerun:** NO.
77. **Fresh Browser Capture1 eligible:** YES, for the next fresh lineage only.
78. **Capture7 resumable:** NO.
79. **B1 authoritative evidence:** 0.
80. **V3 authoritative evidence:** 0.
81. **Browser Evidence B:** NONE.
82. **PNG PR-3 evidence:** 0.
83. **Human Review:** NO.
84. **Review1 eligible:** NO.
85. **E-VISUAL:** NO.
86. **Ranking:** NO.
87. **Selection:** NO.
88. **Product integration:** NO.
89. **PR-3:** NO.
90. **KB5120998 next controlled variable:** NO; defer because current readiness passed.
91. **Exact next prerequisite:** `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1-RESTART1-PROTOCOL-A`.
92. **Next checkpoint:** NOT STARTED.
93. **Diagnostic artifact root:** `C:\Users\extra\E2R\e2r-liaison-scape-browser-capture-readiness-requalification1\diagnostics\browser-capture-readiness-requalification1`.
94. **Diagnostic artifact scope:** preflight, browser authority, matrix plan, six cycle result/stdout/stderr records, evaluation smoke result/logs, comparison, classification, audit, and focused tests.
95. **Diagnostic clone commits:** `a0281bf` (`diagnostic: requalify Edge browser capture runtime`) and `8f8c387` (`diagnostic: preserve readiness host snapshot fallback`); final HEAD `8f8c387`; no push.
96. **Diagnostic clone final state:** clean after the follow-up snapshot commit; dependency `node_modules` is ignored and the dedicated temp profiles were cleaned.
97. **Result document:** this document.
98. **Roadmap changed:** additively only.
99. **Knowledge Candidate:** candidate only; no new entry.
100. **ai-knowledge changed:** NO, including the existing dirty playbook.
101. **e2r-spec validation:** `npm.cmd run validate` PASS.
102. **Diff-check:** PASS for the final documentation changes.
103. **e2r-spec commit:** recorded in the final handoff; no push.
104. **e2r-spec worktree:** clean after the local documentation commit.
105. **Live Product unchanged:** YES; pre-existing dirty files preserved.
106. **Protected samples preserved:** YES.
107. **Machine clone unchanged:** YES.
108. **Original Harness unchanged:** YES.
109. **Retained materializer unchanged:** YES.
110. **Baseline2 unchanged:** YES.
111. **Browser Capture1 started:** NO.
112. **Browser Protocol A started:** NO.
113. **Review1 run:** NO.
114. **Windows Update / driver remediation:** NO.
115. **Push/tag/release/deploy/publication:** NONE.

## Interpretation

The canonical Edge runtime is currently ready under the bounded contract. The
six fresh normal-sandbox cycles are materially stronger immediate evidence than
the preceding 3+3 Stable-present/absent comparison, and all six remain in the
fast healthy latency group rather than the historical approximately 5.6-second
failure group. The isolated evaluation entry also mounted successfully under
the same Edge authority.

The smoke is a readiness gate only and is explicitly excluded from Browser
Evidence B and PR-3. The earlier failed Browser Capture lineage remains
immutable. The exact next prerequisite is a fresh
`...-BROWSER-CAPTURE1-RESTART1-PROTOCOL-A` checkpoint, which may mint a new
semantic run identity there; this checkpoint does not mint one.
