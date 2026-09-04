# LiaisonScape Browser Capture1 Restart3 Shared CDP WebSocket Independent Client Diagnostic1

- Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1-RESTART3-SHARED-CDP-WEBSOCKET-INDEPENDENT-CLIENT-DIAGNOSTIC1`
- Date: `2026-09-05` JST
- Scope: bounded independent-client transport diagnostic only
- Production Browser Capture implementation: unchanged

## Outcome

This checkpoint records **CASE 6 / DECISION F - `NODE-WEBSOCKET-CLIENT-SEAM-CONFIRMED`**.
The exact 89-byte `Runtime.evaluate` command failed through the existing Node
global WebSocket controls, while an independent Windows `.NET`
`System.Net.WebSockets.ClientWebSocket` completed both Edge direct-target
evaluation and Edge browser-endpoint `Target.getTargets` →
`Target.attachToTarget` → session-scoped `Runtime.evaluate` with result `2`.
Chrome's independent direct control reached the target WebSocket but the
target emitted `Inspector.targetCrashed`; Chrome's browser endpoint was
host/GPU-blocked before `/json/version` became reachable. Those Chrome
results are recorded separately and are not used as a Node transport pass.

No production correction, dependency addition, B1/V3 execution, screenshot,
Browser Evidence B packet, or new semantic ID occurred.

## Required final report

1. **CASE:** CASE 6.
2. **Decision:** DECISION F - `NODE-WEBSOCKET-CLIENT-SEAM-CONFIRMED`.
3. **semantic impact NONE confirmed YES/NO:** YES; production semantic impact is NONE.
4. **exact e2r-spec starting HEAD:** `e5e98f97486f4d1db8f7cd67e8f6f1b97d06fc34`.
5. **previous e2r-spec result commit full hash:** `e5e98f97486f4d1db8f7cd67e8f6f1b97d06fc34`.
6. **diagnostic commit 72a4a60 full hash/subject/role:** `72a4a60085cd0457bde53d76ece72e7185b6c804`, `docs: record Browser Capture CDP transport qualification`; original bounded transport qualification record.
7. **diagnostic commit 03b5f91 full hash/subject/role:** `03b5f91ee4c23bd32fc9174799b709efce795ec2`, `docs: correct Browser Capture transport launch accounting`; additive correction to diagnostic accounting, not semantic source.
8. **historical Restart3 clone/HEAD:** `C:\Users\extra\E2R\e2r-liaison-scape-visual-evidence-browser-capture-restart3` / `45a8a1c55a41f767b3f22ad963321dda6fd9a755`.
9. **historical semantic ID:** `pr3r1-e8af40d999fb33bf7efb46b135121eca81f1e33deb17e96c14670265d2929461`.
10. **historical B1 state:** planned 16; executed 1; success 0; failure 1; pending 15; V3 0; Browser Evidence B `NONE / INCOMPLETE`.
11. **diagnostic clone path/base:** `C:\Users\extra\E2R\e2r-liaison-scape-browser-cdp-independent-client-diagnostic1`, detached at semantic authority `f2d25e98d75aa208e176105a5b33acc2d6742aa5`.
12. **semantic implementation authority commit:** `f2d25e98d75aa208e176105a5b33acc2d6742aa5`.
13. **semantic manifest count:** 19.
14. **closure count:** 19.
15. **omitted imports:** 0.
16. **unexpected imports:** 0.
17. **executor blob/raw SHA:** blob `0a6570f63ca71cc15114a1bacd73eea7504a26aa`; raw SHA-256 `7AD447E620C6160CB5DD008E6F481DB005F418CFB7D9E702A66A57802AD8798C`.
18. **executor unchanged YES/NO:** YES.
19. **Node version:** `v24.18.0`.
20. **npm version:** `11.16.0`.
21. **Undici version:** `7.28.0`.
22. **Node WebSocket implementation:** production global `WebSocket` backed by the Node/Undici path.
23. **PowerShell version:** `5.1.26100.9168`.
24. **PSEdition:** `Desktop`.
25. **CLR/.NET version where available:** CLR `4.0.30319.42000`; .NET Framework `4.8.9337.0`.
26. **ClientWebSocket runtime type:** `System.Net.WebSockets.ClientWebSocket` from `System, Version=4.0.0.0`.
27. **exact outbound command:** `{"id":1,"method":"Runtime.evaluate","params":{"expression":"1 + 1","returnByValue":true}}`.
28. **outbound byte count:** 89 UTF-8 bytes.
29. **outbound SHA-256:** `1A269321C9DEAA6B8B3D4396016F8E20CC67238DD95AA6614598625CBED8FB54`.
30. **Edge path/version:** `C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe`, `Edg/152.0.4191.62`.
31. **Edge direct .NET websocket connect PASS/FAIL:** PASS.
32. **Edge direct .NET send PASS/FAIL:** PASS.
33. **Edge direct response received YES/NO:** YES.
34. **Edge direct response ID:** 1.
35. **Edge direct Runtime.evaluate result:** number `2`, description `2`.
36. **Edge direct close status/code:** no peer close status observed; client normal teardown completed.
37. **Edge direct exception:** none.
38. **Edge browser-endpoint .NET connect PASS/FAIL:** PASS.
39. **Edge Target.getTargets result:** response ID 1, 7 targets returned.
40. **exact target found YES/NO:** YES; exactly one `page` target matched the fixture URL.
41. **Edge Target.attachToTarget result:** response ID 2; session ID returned.
42. **sessionId obtained YES/NO:** YES; volatile session ID recorded in `edge-browser-dotnet.json`.
43. **session-scoped Runtime.evaluate result:** response ID 3; number `2`, description `2`.
44. **Chrome path/version:** `C:\Program Files\Google\Chrome\Application\chrome.exe`, `Chrome/152.0.7977.75`.
45. **Chrome direct .NET result:** WebSocket connect/send/receive PASS, but first inbound text was `Inspector.targetCrashed`; no response ID or value `2`.
46. **Chrome direct close status/code:** no peer close status observed; browser process exited; post-close `/json/version` was unreachable.
47. **Chrome browser-endpoint control executed YES/NO:** YES.
48. **Chrome browser-endpoint result if executed:** DevTools listening was emitted, then Chrome failed its GPU startup path and `/json/version` polling timed out; no independent browser-endpoint WebSocket sequence was executed.
49. **Node-vs-.NET matrix:** Node direct Edge FAIL/1006; Node direct Chrome FAIL/1006; Node Edge browser endpoint `Target.getTargets` PASS then attach FAIL/1006; .NET Edge direct PASS; .NET Edge browser endpoint/session PASS; .NET Chrome direct TARGET-CRASHED; .NET Chrome browser endpoint HOST-GPU-BLOCKED.
50. **Node-client compatibility confirmed YES/NO:** YES, as a client-seam diagnosis; Node transport is incompatible with this CDP path under the bounded controls.
51. **relevant Edge HKLM policy values:** none found.
52. **relevant Edge HKCU policy values:** none found.
53. **relevant Chrome HKLM policy values:** none found.
54. **relevant Chrome HKCU policy values:** none found.
55. **RemoteDebuggingAllowed Edge state:** ABSENT.
56. **RemoteDebuggingAllowed Chrome state:** ABSENT.
57. **DeveloperToolsAvailability Edge state:** ABSENT.
58. **DeveloperToolsAvailability Chrome state:** ABSENT.
59. **managed Edge state:** UNKNOWN; no bounded machine-readable management-state query was established.
60. **managed Chrome state:** UNKNOWN; no bounded machine-readable management-state query was established.
61. **Edge target count/types:** 7; `page`, `service_worker`, `background_page`.
62. **Chrome target count/types:** direct run 4; `page`, `background_page`, `browser_ui`; browser endpoint discovery did not complete.
63. **identical extension IDs across browsers if any:** no cross-browser identity claim; extension inventory differs and extensions were disabled by the frozen launch flag.
64. **browser remains alive after Node 1006 YES/NO:** YES in the prior Node transport qualification's controlled teardown observation; the 1006 applied to the WebSocket.
65. **browser remains alive after .NET result YES/NO:** Edge direct YES and Edge browser endpoint YES; Chrome direct NO after target/GPU failure.
66. **`/json/version` reachable after close YES/NO:** Edge direct/browser endpoint YES; Chrome direct NO; Chrome browser endpoint not reached.
67. **browser stderr relevant lines count/summary:** Edge runs 2 lines each, only DevTools announcement; Chrome direct/browser runs 17 lines each, including repeated GPU process exits, one GPU unusable fatal, and three persistent-cache access-denied lines per run.
68. **debugging address:** `127.0.0.1`.
69. **loopback-only confirmed YES/NO:** YES for the diagnostic launches.
70. **pipe feasibility:** `PIPE-CONTROL-NOT-FEASIBLE-IN-CURRENT-CHECKPOINT`.
71. **pipe control executed YES/NO:** NO.
72. **pipe command/result if executed:** not applicable; no `pipe-control.json` created.
73. **exact transport classification:** `NODE-WEBSOCKET-CLIENT-SEAM-CONFIRMED` / CASE 6 / Decision F.
74. **production correction applied YES/NO:** NO.
75. **semantic source changed YES/NO:** NO.
76. **focused test counts/results:** retained Browser Capture correction/authority suite 58/58; prior framing suite 12/12; combined focused qualification 70/70.
77. **PowerShell syntax validation:** PASS; parser error count 0.
78. **node --check:** PASS for diagnostic `http-fixture.mjs`.
79. **npm test:** PASS, 309/309.
80. **npm lint:** PASS.
81. **npm build:** PASS.
82. **dependency install occurred YES/NO:** YES; exact-lockfile `npm ci --ignore-scripts` because clone had no `node_modules`.
83. **new dependencies installed YES/NO:** NO; install restored the existing lockfile dependency set only.
84. **package.json changed YES/NO:** NO.
85. **package-lock changed YES/NO:** NO.
86. **Edge launch count:** 2 `.NET` diagnostic launches.
87. **Chrome launch count:** 2 `.NET` diagnostic launches.
88. **Firefox launch count:** 0.
89. **Vite launch count:** 0.
90. **.NET WebSocket session count:** 3 completed client sessions: Edge direct, Edge browser endpoint, Chrome direct; Chrome browser endpoint failed before the client session.
91. **Node control session count:** 5 prior sessions: four direct Edge/Chrome frame controls plus one Edge browser-endpoint control.
92. **GPU fatal count:** 2 current Chrome launch fatals, one in each Chrome run.
93. **cache-lock count:** 6 current Chrome persistent-cache access-denied lines, three in each Chrome run.
94. **teardown PASS count:** 3/4 `.NET` runs; Chrome browser endpoint was host/GPU-blocked during discovery.
95. **quiescence PASS count:** 4/4 `.NET` runs.
96. **screenshots:** 0.
97. **real B1 evidence executed:** NO.
98. **historical Restart3 modified YES/NO:** NO; historical clone remains immutable.
99. **Restart3 resumable YES/NO:** NO; no new B1 resume or production capture was authorized.
100. **old semantic ID reusable YES/NO:** NO; it remains historical and is not reused.
101. **fresh semantic ID minted YES/NO:** NO.
102. **Restart4 created YES/NO:** NO.
103. **V3 executed count:** 0.
104. **Browser Evidence B:** `NONE / INCOMPLETE`.
105. **Human Review:** not started.
106. **Review1 eligible YES/NO:** NO.
107. **E-VISUAL:** not reached.
108. **ranking:** not reached.
109. **selection:** not reached.
110. **Product integration:** unchanged; no integration performed.
111. **PR-3:** NO.
112. **Firefox classification:** not applicable; Firefox was not launched.
113. **exact next prerequisite:** bounded Browser Capture WebSocket client authority/replacement design correction, followed by a fresh authorized qualification; do not modify the production transport in this checkpoint.
114. **next checkpoint NOT STARTED:** YES.
115. **diagnostic root:** `diagnostics/restart3-shared-cdp-websocket-independent-client-diagnostic1/`.
116. **diagnostic clone commit hash/subject:** final `b50aa4f` (`diagnostics: record Chrome runtime health`), following `c0d34e8` (`diagnostics: compare independent CDP WebSocket client`).
117. **diagnostic clone final state:** clean, detached, final HEAD `b50aa4f`; unpushed.
118. **result document:** this document.
119. **roadmap changed/unchanged:** changed additively with this checkpoint record.
120. **Knowledge Candidate:** no candidate proposed; the result is local diagnostic evidence only.
121. **ai-knowledge changed/unchanged:** unchanged.
122. **package/toolchain provenance follow-up OPEN:** YES; the environment/toolchain and Chrome host/GPU behavior remain follow-up evidence, not a production correction.
123. **e2r-spec validation:** PASS, `npm.cmd run validate`.
124. **diff-check:** PASS, `git diff --check`.
125. **e2r-spec commit hash/subject:** `e53f0f7c829175b203c71b5d936923cc2a07550a`, `docs: record independent CDP WebSocket diagnostic`.
126. **e2r-spec worktree:** clean after the final documentation commit; unpushed.
127. **Live Product unchanged YES/NO:** YES.
128. **protected samples preserved YES/NO:** YES.
129. **Machine clone unchanged YES/NO:** YES.
130. **Original Harness unchanged YES/NO:** YES.
131. **retained materializer unchanged YES/NO:** YES.
132. **Baseline2 unchanged YES/NO:** YES.
133. **browser policy changed NO:** NO; inventory was read-only.
134. **registry changed NO:** NO.
135. **firewall/security settings changed NO:** NO.
136. **Windows Update changed NO:** NO.
137. **GPU driver changed NO:** NO.
138. **graphics settings changed NO:** NO.
139. **`--disable-gpu-sandbox` used NO:** NO.
140. **push/tag/release/deploy/publication NONE:** NONE.

## Diagnostic artifacts and boundary

The independent-client artifacts are committed in the diagnostic clone listed
above. The primary evidence is `edge-direct-dotnet.json`,
`edge-browser-dotnet.json`, `chrome-direct-dotnet.json`, and
`chrome-browser-dotnet.json`; the comparison, policy, health, audit, and pipe
disposition are indexed in `artifact-index.json`.

The Chrome GPU result is recorded because it is an observed host/runtime
condition under the frozen diagnostic flags. No registry, firewall, browser
installation, GPU driver, graphics setting, or production launch policy was
changed. No pipe mechanism was invented, and no production transport file was
modified.

The exact next prerequisite is a separate, explicitly bounded Browser Capture
client-authority/design-correction checkpoint. This checkpoint stops here.
