# LiaisonScape Browser Capture1 Restart3 App-Readiness / CDP-Call Correction Qualification1

Date: 2026-09-04 (JST)

## Result

**CASE 4 / DECISION D - `CDP-CLIENT-PROTOCOL-BLOCKED`**.

The target-selection correction remains valid. The corrected production CDP
client now bounds and fails closed on WebSocket lifecycle errors, normalizes
message data, correlates response IDs, rejects CDP errors, and clears pending
state on timeout, late response, close, and error. The primary Edge
qualification selected the exact application target and reached WebSocket
OPEN, but the first `Runtime.evaluate` command produced a WebSocket error and
close code `1006`. The same low-level result occurred in the Chromium-family
control. No generic CDP response, Runtime evaluation, Page-domain response, or
application ready marker was obtained.

`Page.enable` is not removed: downstream production calls include
`Page.navigate` and `Page.captureScreenshot`, while the transport failure
prevented a mechanical necessity test. The exact next prerequisite is another
bounded qualification/correction of the shared low-level CDP transport/client
seam; only after that passes may a fresh Restart4 Protocol A be considered.

No Restart3 B1 was resumed. No B1 evidence, V3, screenshot, Browser Evidence B,
Review1, Product, fixture, Machine, Harness, host/GPU, Windows, or Edge
authority change occurred.

## Final report

1. CASE: `CASE 4`.
2. Decision: `CDP-CLIENT-PROTOCOL-BLOCKED`.
3. Semantic impact: `SEMANTIC-IMPACT-B`.
4. Exact e2r-spec starting HEAD: `481641f409d4576fc5053b15be9f623b8ca0dbf2`.
5. Historical Restart3 clone/HEAD: `C:\Users\extra\E2R\e2r-liaison-scape-visual-evidence-browser-capture-restart3` / `45a8a1c55a41f767b3f22ad963321dda6fd9a755`.
6. Historical Restart3 semantic ID: `pr3r1-e8af40d999fb33bf7efb46b135121eca81f1e33deb17e96c14670265d2929461`.
7. Historical B1 state: planned `16`, executed `1`, success `0`, failure `1`, pending `15`; blocker `apollo-11 / en`.
8. Correction clone path: `C:\Users\extra\E2R\e2r-liaison-scape-browser-capture-app-readiness-cdp-call-correction1`.
9. Correction clone base: `178f5bcf6713255d94da2bb67901905e3a418dd8`.
10. Pre-edit CDP static trace: `YES`.
11. WebSocket open: `PASS`; primary Edge selected-target session reached OPEN.
12. Exact WebSocket target URL: raw Edge probe `ws://127.0.0.1:9878/devtools/page/12AE0A6D843DA0BCD757952A4C6AE2A7`.
13. Generic CDP command: `Runtime.evaluate` with expression `1 + 1`.
14. Generic CDP result: `FAIL`; WebSocket error before a response.
15. Request-ID correlation: `PASS` in focused fake-socket tests; production runtime transport supplied no response.
16. Out-of-order handling: `PASS` in focused tests.
17. Unsolicited event handling: `PASS` in focused tests; events do not resolve commands.
18. CDP error handling: `PASS` in focused tests.
19. Late-response-after-timeout handling: `PASS` in focused tests; stale state is removed.
20. `Runtime.enable`: not reached in the primary sequence after the first transport failure; fake-socket success path `PASS`.
21. Runtime.evaluate `1 + 1`: `FAIL` in Edge and Chrome raw probes; no result.
22. `Page.enable`: `FAIL / NOT REACHED` in primary qualification; raw order variants also failed before a response.
23. Page.enable necessity: `UNRESOLVED`.
24. Downstream Page dependencies: `Page.enable`, `Page.navigate`, and `Page.captureScreenshot`; no Page lifecycle events are consumed.
25. `document.readyState`: unavailable; Runtime evaluation was blocked.
26. `location.href`: unavailable; Runtime evaluation was blocked.
27. Evaluation root: unavailable; known root is `#evaluation-root`.
28. SVG presence: unavailable; Runtime evaluation was blocked.
29. Ready marker: `NO / NOT REACHED`.
30. capture-input: HTTP `200`, `application/json`, HTML fallback `NO`.
31. HTML fallback count: `0`.
32. Authoritative CDP per-call timeout: `YES`; derived from retained readiness deadline.
33. Exact CDP call timeout: readiness window `10000 ms` (`100 * 100 ms`), no new timeout invented.
34. Operator stop required: `NO`.
35. Production correction: robust WebSocket open/error/close lifecycle, message-data normalization, response-ID correlation, CDP-error rejection, bounded pending timers, and late-response isolation; command order and `Page.enable` were retained.
36. Production files changed: `experimental/product-evaluation-seam/browser-capture1/browser-capture.mjs`; focused test `experimental/product-evaluation-seam/browser-capture1/cdp-call-correction.test.mjs`.
37. Target-selection regression: `PASS`, `20/20`.
38. Run-binding regression: `PASS`, `16/16`.
39. Retry regression: `PASS`; executor-owned 1 initial + 2 retries retained.
40. `main.tsx` blob/raw SHA-256: `b671e09d2729fc8ac1002ed2bc0740f1107baefd` / `116B684D3D87C3FBA58C5EBEA64182650324125BCB0F2BD3DD30A50024AB9F49`.
41. `main.tsx` unchanged: `YES`.
42. Old executor blob/raw SHA-256: `559214682ad8958be239c8a909e109376d9be631` / `CAED5FAB314AF155191285AD43EFDE6FF4D113DABE93853A17ABB475353623C4`.
43. Final executor blob/raw SHA-256: `0a6570f63ca71cc15114a1bacd73eea7504a26aa` / `7AD447E620C6160CB5DD008E6F481DB005F418CFB7D9E702A66A57802AD8798C`.
44. Executor changed: `YES`.
45. Implementation authority contract: `PR3-BROWSER-CAPTURE-IMPLEMENTATION-AUTHORITY-v1`.
46. Final semantic repositoryAuthority commit: `f2d25e98d75aa208e176105a5b33acc2d6742aa5`.
47. Semantic manifest count: `19`.
48. Closure count: `19`.
49. Omitted imports: `0`.
50. Unexpected imports: `0`.
51. Authority self-check: `PASS`.
52. Focused tests: `58/58 PASS` (`Cdp 15`, authority `7`, run-binding `16`, target-selection `20`).
53. `node --check`: `PASS` for executor, focused tests, raw probes, and Edge qualification script.
54. `npm test`: `309/309 PASS`; known WebSocket port `24678` warning only.
55. `npm lint`: `PASS`.
56. `npm build`: `PASS`.
57. Dependency installation: `YES`, exact-lockfile `npm ci --ignore-scripts`.
58. `package.json` changed: `NO`.
59. `package-lock.json` changed: `NO`.
60. Edge path/version: `C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe` / `Edg/152.0.4191.62`.
61. Edge target-selection: `PASS`.
62. Edge WebSocket: `PASS OPEN`, then close `1006` on command transport.
63. Edge generic CDP: `FAIL`; no response to `Runtime.evaluate`.
64. Edge Page.enable: `NOT REACHED` after the first transport failure.
65. Edge ready marker: `NO`.
66. Edge qualification terminal classification: `CDP-CLIENT-PROTOCOL-BLOCKED`.
67. Chromium control executable: `YES`.
68. Chromium product/path/version: Google Chrome / `C:\Program Files\Google\Chrome\Application\chrome.exe` / `Chrome/152.0.7977.75`.
69. Chromium target-selection: `PASS`.
70. Chromium WebSocket: `PASS OPEN`, then close `1006` on command transport.
71. Chromium generic CDP: `FAIL`; no response to `Runtime.evaluate`.
72. Chromium Page.enable: `NOT REACHED`.
73. Chromium ready marker: `NO`.
74. Chromium control classification: shared low-level CDP transport/client seam candidate.
75. Firefox control executable: `YES` via installed WindowsApps shim.
76. Firefox path/version: `C:\Users\extra\AppData\Local\Microsoft\WindowsApps\firefox.exe` / `Mozilla Firefox 154.0.1`.
77. Firefox control mechanism: no existing bounded DOM/readiness mechanism; no dependency or harness added.
78. Firefox result: `CONTROL-NOT-EXECUTABLE-IN-CURRENT-HARNESS`.
79. Firefox ready/root/SVG: unavailable; control not executed.
80. Firefox interpretation boundary recorded: `YES`; Firefox is not a Chromium `Page.enable` control.
81. Edge launches: `3` diagnostic launches, including `1` primary qualification.
82. Chromium launches: `1`.
83. Firefox launches: `0`.
84. Vite launches: `4` diagnostic runs.
85. CDP sessions: `10` diagnostic sessions; primary production `Cdp` session reached OPEN before failure.
86. GPU fatal count: `0`.
87. Cache-lock count: `0`.
88. Teardown PASS count: `4`.
89. Quiescence PASS count: `4`.
90. Screenshots: `0`.
91. Real B1 evidence executed: `0`.
92. Historical Restart3 modified: `NO`.
93. Historical Restart3 resumable: `NO`.
94. Historical Restart3 semantic ID reusable: `NO`.
95. Fresh semantic ID minted: `NO`.
96. Restart4 created: `NO`.
97. V3 executed: `0`.
98. Browser Evidence B: `NONE / INCOMPLETE`.
99. Human Review: `NO`.
100. Review1 eligible: `NO`.
101. E-VISUAL: `NO`.
102. Ranking: `NO`.
103. Selection: `NO`.
104. Product integration: `NO`.
105. PR-3: `NO`.
106. Exact next prerequisite: bounded shared low-level CDP transport/client correction qualification; after PASS, create a fresh Restart4 Protocol A.
107. Next checkpoint: `NOT STARTED`.
108. Diagnostic root: `C:\Users\extra\E2R\e2r-liaison-scape-browser-capture-app-readiness-cdp-call-correction1\diagnostics\restart3-app-readiness-cdp-call-correction-qualification1`.
109. Semantic correction commit: `f2d25e98d75aa208e176105a5b33acc2d6742aa5` / `fix: correct Browser Capture CDP readiness calls`.
110. Diagnostic commit: `c83bd5dc6915fdca594c6cc33bc876f8d59e7bf6` / `docs: record Browser Capture CDP readiness qualification`.
111. Correction clone final state: clean at `c83bd5dc6915fdca594c6cc33bc876f8d59e7bf6`.
112. Result document: this document.
113. Roadmap: changed additively only.
114. Knowledge Candidate: `CANDIDATE ONLY / NO NEW ENTRY`.
115. `ai-knowledge`: unchanged; pre-existing dirty playbook preserved.
116. Package/toolchain provenance follow-up: `OPEN`.
117. e2r-spec validation: `PASS` (`npm.cmd run validate`).
118. Diff-check: `PASS` (`git diff --check`).
119. e2r-spec commit: recorded after documentation commit; exact hash is in the final handoff.
120. e2r-spec worktree: expected clean after documentation commit.
121. Live Product unchanged: `YES`.
122. Protected samples preserved: `YES`; EN `19B6362468CF51E32FA9DEA016BC4211D8055C299E28D0CC402BC63B5A5B31D1`, JA `C4604679A8D730705E33E51F06BAED46E37BD571C30595145D1938CD3E9B4EFA`.
123. Machine clone unchanged: `YES`.
124. Original Harness unchanged: `YES`.
125. Retained materializer unchanged: `YES`.
126. Baseline2 unchanged: `YES`.
127. Windows Update changed: `NO`.
128. GPU driver changed: `NO`.
129. Graphics settings changed: `NO`.
130. `--disable-gpu-sandbox` used: `NO`.
131. Push/tag/release/deploy/publication: `NONE`.

## Interpretation

The raw micro-probe proves that the selected application page is reachable by
HTTP and that its target websocket reaches OPEN. The first command then causes
the Chromium-family browser connection to fail with close code `1006`; the
same result is present in Edge and Chrome, including the diagnostic origin
allow variant. This is not evidence of an application bootstrap failure and
does not establish a `Page.enable` ordering or necessity defect.

The production correction makes the client fail closed and cleans pending
state, which is mechanically covered by the focused tests, but it cannot turn
the shared transport failure into a CDP response. The historical Restart3
lineage remains immutable, B1/V3 remain outside this checkpoint, and no fresh
semantic ID or Restart4 was created.
