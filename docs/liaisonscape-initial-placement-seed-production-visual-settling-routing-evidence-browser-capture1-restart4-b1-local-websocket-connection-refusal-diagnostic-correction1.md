# LiaisonScape Restart4 B1 local WebSocket refusal diagnostic/correction1

Checkpoint date: 2026-09-05. This is a non-evidence runtime-infrastructure
diagnostic. Restart4 remained immutable. No production semantic correction was
made because the connection refusal was mechanically shown to follow an Edge
process exit, including in a no-helper control.

1. CASE: `CASE 4`.
2. Decision: `B1-EDGE-PROCESS-LIFETIME-BLOCKED`.
3. Semantic impact: `NONE`.
4. E2R-SPEC starting HEAD: `d03ec924ef35824cf21d7d89d53a40870fc418d2`.
5. `942e024f02fd6df93a1b7c0fea70cbc5dc7491f2`: `docs: record incomplete Browser Capture Restart4 B1`; substantive accepted B1 result.
6. `d03ec924ef35824cf21d7d89d53a40870fc418d2`: `docs: finalize Restart4 B1 execution result reference`; accepted final-reference authority.
7. Actual prior documentation authority: the substantive result plus its non-amending final-reference correction, ending at `d03ec924...`.
8. Immutable Restart4 HEAD: `25e65b89f275eef9511c5e9792ea6e3bd927db29`.
9. Restart4 worktree: `CLEAN`.
10. Restart4 semantic ID: `pr3r1-ec74872605846cbb9bc1c1b6d8acf5bb083bc4c65c58b44dcb24836fcd1f6861`.
11. Restart4 B1 state: planned `16`, terminal `1`, success `0`, failure `1`, pending `15`.
12. Restart4 attempts/retries: `3` / `2`.
13. Restart4 post-B1 artifact-index SHA: `6FDC0590AB51C7AC47732EC920F5559110BF8FD7B4C11DC37F0071C0A7B135CC`.
14. Restart4 post-B1 run-manifest SHA: `AC30E524B3414F1CFD06D41401EFFF6223E1C55130E2A6622BFA11AC87294C08`.
15. Non-evidence diagnostic clone: `C:\Users\extra\E2R\e2r-liaison-scape-browser-capture-restart4-b1-websocket-refusal-diagnostic1`.
16. Diagnostic clone base: `ba3cb3dd50ab723a7b4a4a5c2b839bc2abef87d4` (`test: complete executable helper authority coverage`).
17. Semantic implementation authority: `ba3cb3dd50ab723a7b4a4a5c2b839bc2abef87d4`.
18. Semantic closure: manifest `21`, closure `21`, omitted `0`, unexpected `0`.
19. Helper C# identity: blob `7b9388d99ad9f84d761cd363ee4c0885ce553ff1`; raw SHA `8463CA40361743CC129952BF471DF8E290977D9B58DDBE36D5D1A52F0D017C5F`.
20. Helper EXE identity: blob `781440ea9d1d10fc3c6f059bdde8b9394fdbd233`; raw SHA `17F38BFC4DB37EC6A7D906D6A7E90EFD64864FEE336D2215F7BB1CEE20182E86`.
21. Executor identity: blob `02dac418d67b9d5f8da793b4dcc200c98fde5e9d`; raw SHA `CCA9FD5E150006C2541BD1EA3F6B52D9CA06B1BE03D0419A5573DF18634B2251`.
22. Build authority SHA: `DB0A717A579BC52BDF86DA7B0C25FF238893DA0410E11A3343D7F874B1FDBC37`.
23. Client authority v2 SHA: `4C87A2359BF5146E6781B97208A85B04B76A53966977BDEDFF9BAB01A84D8BF9`.
24. Edge authority: `C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe`, file/product version `152.0.4191.62`.
25. Edge authority drift: `NO`; each control also received `Edg/152.0.4191.62` from `/json/version` before helper connection.
26. Historical attempt 1: port `9668`; exact target path/WS URI `NOT-RECORDED`; the retained verbatim `System.AggregateException` / `WebSocketException` / `WebException` / `SocketException` envelope is preserved in `attempt1-reconstruction.json`.
27. Historical attempt 1 WS host/port: `127.0.0.1:9668` (the only retained URI component).
28. Historical attempt 1 classification: local `SocketException` connection refused through helper IPC `ERROR`.
29. Historical attempt 2: port `9774`; exact target path/WS URI `NOT-RECORDED`; its verbatim envelope is preserved in `attempt2-reconstruction.json`.
30. Historical attempt 2 WS host/port: `127.0.0.1:9774`.
31. Historical attempt 2 classification: the same local connection-refused exception hierarchy.
32. Historical attempt 3: port `9769`; exact target path/WS URI `NOT-RECORDED`; its verbatim envelope is preserved in `attempt3-reconstruction.json`.
33. Historical attempt 3 WS host/port: `127.0.0.1:9769`.
34. Historical attempt 3 classification: the same local connection-refused exception hierarchy.
35. Qualification WS URI provenance: exact expected page selected from `/json/list`, then its `webSocketDebuggerUrl` is sent to the direct EXE helper.
36. B1 WS URI provenance: the same exact-page selection and selected `webSocketDebuggerUrl` source.
37. Qualification/B1 URI difference: none in source; no URI rewrite/normalization exists in either path.
38. Qualification/B1 launch difference: frozen Edge flags and address are equal; port allocation (`createServer(0)` versus unreserved random `9300–9799`), profile naming, B1 stderr suppression, capture-input timing, and lifecycle telemetry differ.
39. Qualification/B1 helper-call difference: none material; both directly spawn the committed EXE with `shell: false` and send IPC-v1 `CONNECT` with the selected target URL.
40. HTTP discovery host: `127.0.0.1`.
41. WS target host: `127.0.0.1`.
42. Host normalization performed: `NO`.
43. Address-family result: `NOT-APPLICABLE`; the target host is an IPv4 literal, not a multi-address hostname.
44. B1 port-selection mechanism: `9300 + Math.floor(Math.random() * 500)`, without bind/reservation.
45. Listener-readiness mechanism: `/json/version`, then `/json/list` and exact target selection; production does not probe the listener immediately before helper CONNECT.
46. Target URI provenance: `PASS`; source passes the selected target URL without mutation through `DotnetBridge.connect`, IPC `CONNECT`, `LoopbackUri`, and `ClientWebSocket.ConnectAsync`.
47. Stale/wrong URI proven: `NO`.
48. Browser exit before helper connection completes: `YES`.
49. Control A executed: `YES`, fresh Edge and production-like `apollo-11/en` bootstrap, with no helper.
50. Control A initial TCP listener: `CONNECTED`.
51. Control A initial `/json/version`: reachable and Edge version matched.
52. Control A initial `/json/list`: reachable with one exact application page target.
53. Control A target health: listener and target became unavailable during the observation window; Edge exited with code `2147483651` without a helper.
54. Control B runs: `3` fresh runs.
55. Control B run 1 pre-connect TCP: `CONNECTED` on port `9738`.
56. Control B run 1 CONNECT result: helper `ERROR` after Edge exit `2147483651`; post-result TCP `ECONNREFUSED`.
57. Control B run 1 `Runtime.evaluate`: not sent; no `CONNECTED` envelope.
58. Control B run 2 pre-connect TCP: `CONNECTED` on port `9550`.
59. Control B run 2 CONNECT result: helper `ERROR` after Edge exit `2147483651`; post-result TCP `ECONNREFUSED`.
60. Control B run 2 `Runtime.evaluate`: not sent; no `CONNECTED` envelope.
61. Control B run 3 pre-connect TCP: `CONNECTED` on port `9455`.
62. Control B run 3 CONNECT result: helper `ERROR` after Edge exit `2147483651`; post-result TCP `ECONNREFUSED`.
63. Control B run 3 `Runtime.evaluate`: not sent; no `CONNECTED` envelope.
64. Conditional address-literal control: not executed; the IPv4 literal makes it inapplicable.
65. Conditional listener-lifetime control: executed through adjacent probes/HTTP/process observations; listener disappearance follows the Edge exits.
66. Control C executed: `NO`, because Control B did not pass; its precondition was not met.
67. Control C result: `NOT-EXECUTED`.
68. Reproduced refusal count: `3/3` Control B runs.
69. Successful direct-helper connection count: `0/3` Control B runs.
70. Determinism classification: reproduced Edge-process-lifetime block, not a helper-only or address-family divergence.
71. Exact root cause: Edge exits with code `2147483651` after discovery, exact target selection, and a successful immediate TCP probe but before helper CONNECT completes; its debugging listener then refuses the helper connection. Control A proves the exit is possible with no helper present.
72. Correction applied: `NO`.
73. Correction clone: `NONE`.
74. Correction commit: `NONE`.
75. Corrected semantic authority: not applicable; current authority remains unchanged.
76. C# changed: `NO`.
77. EXE rebuilt: `NO`.
78. EXE SHA unchanged: `YES`.
79. Build authority unchanged: `YES`.
80. Client authority old SHA: `4C87A2359BF5146E6781B97208A85B04B76A53966977BDEDFF9BAB01A84D8BF9`.
81. Client authority new SHA: not applicable; unchanged.
82. Run Identity v3 sufficient: `YES` for the unchanged authority; no new run is created here.
83. Phase Bridge v3 sufficient: `YES` for the unchanged authority; no new phase is created here.
84. Focused static tests: `102/102 PASS`.
85. Full `npm test`: `309/309 PASS`.
86. Lint: `PASS`.
87. Build: `PASS`.
88. `node --check`: `PASS` for production authority files and diagnostic scripts.
89. New dependency installed: `NO`; `npm ci --ignore-scripts` only reconstructed lockfile-pinned local dependencies in the fresh clone.
90. `package.json` changed: `NO`.
91. `package-lock.json` changed: `NO`.
92. Corrected qualification planned/executed/success/failure: not applicable; no correction was proven.
93. Corrected qualification `Runtime.evaluate`: not applicable.
94. Corrected qualification `Page.enable`: not applicable.
95. Corrected qualification ready marker: not applicable.
96. Corrected qualification screenshots: `0`.
97. New governed B1 attempts: `0`.
98. Restart4 modified: `NO`.
99. Restart4 resumed: `NO`.
100. Fresh restart eligible: `NO`; the Edge lifetime block must be separately diagnosed/resolved first.
101. Fresh restart created: `NO`.
102. V3 executed: `0`.
103. Screenshots: `0`.
104. Browser Evidence B: `NONE / INCOMPLETE`.
105. Human Review: `NOT STARTED`.
106. Review1 eligibility: `NO`.
107. E-VISUAL: `NOT PRODUCED`.
108. Ranking: `NOT STARTED`.
109. Selection: `NOT STARTED`.
110. PR-3: `NO`.
111. Historical Restart3 HEAD: `45a8a1c55a41f767b3f22ad963321dda6fd9a755`.
112. Restart3 modified: `NO`.
113. Product unchanged: `YES`; its two pre-existing lighthouse sample edits remain unowned and preserved.
114. Machine unchanged: `YES`.
115. Machine rerun: `NO`.
116. Fixture unchanged: `YES`.
117. Original Harness unchanged: `YES`.
118. Retained materializer unchanged: `YES`.
119. Baseline2 unchanged: `YES`.
120. Protected samples preserved: `YES`.
121. Diagnostic commit: `74140239207a935bb211ac839eafe242d745c1b0` (`diagnostics: isolate Restart4 B1 websocket connection refusal`).
122. Result document: this file.
123. Roadmap: updated additively.
124. Knowledge candidate: `CANDIDATE ONLY / NO NEW ENTRY`.
125. ai-knowledge unchanged: `YES`; its pre-existing dirty playbook is preserved.
126. E2R-SPEC validation: pending final documentation validation at this record point.
127. Diff check: pending final documentation check at this record point.
128. E2R-SPEC commit: pending final documentation commit at this record point.
129. Diagnostic clone final state: `CLEAN` after commit.
130. Correction clone final state: not applicable; no correction clone exists.
131. E2R-SPEC final worktree: pending final documentation commit at this record point.
132. Browser policy changed: `NO`.
133. PowerShell execution policy changed: `NO`.
134. Registry changed: `NO`.
135. Firewall/security settings changed: `NO`.
136. Windows Update changed: `NO`.
137. GPU driver changed: `NO`.
138. Graphics settings changed: `NO`.
139. `--disable-gpu-sandbox` used: `NO`.
140. Exact next prerequisite: a separately bounded Edge process-lifetime / host-runtime diagnostic that preserves the frozen launch contract and establishes the cause of exit code `2147483651` before any new Browser Capture lineage decision.
141. Next checkpoint: `NOT STARTED`.
142. Push/tag/release/deploy/publication: `NONE`.

The preserved diagnostic artifacts are in
`diagnostics/restart4-b1-local-websocket-connection-refusal-diagnostic-correction1/`
at commit `74140239207a935bb211ac839eafe242d745c1b0`. They retain the three
historical helper envelopes, the no-helper listener-lifetime control, the
three direct-helper controls, exact probe timing, and the authority checks.
