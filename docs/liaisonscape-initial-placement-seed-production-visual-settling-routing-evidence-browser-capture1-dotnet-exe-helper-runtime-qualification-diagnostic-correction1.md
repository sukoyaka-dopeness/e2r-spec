# E2R-SPEC / LiaisonScape - .NET EXE Helper Runtime Qualification Diagnostic/Correction1

Checkpoint date: 2026-09-05. This bounded diagnostic checkpoint separated the
previous Run1 target-crash observation, completed the required controls, and
completed the conditional canonical Edge qualification. No production semantic
correction was required.

1. CASE: `CASE 1`.
2. Decision: `DOTNET-EXE-HELPER-RUNTIME-QUALIFICATION-PASS`.
3. Semantic impact: `NONE` for this diagnostic checkpoint; the prior implementation remains the accepted semantic authority.
4. Exact e2r-spec starting HEAD: `1d0869e2cb975d3024e598687c0725b1c5a2327c`.
5. `f228ed0a9083e3eae280584f312bd0858ffa8656`: `docs: record Browser Capture .NET executable helper implementation`; substantive Implementation1 documentation commit.
6. `1d0869e2cb975d3024e598687c0725b1c5a2327c`: `docs: finalize Browser Capture .NET executable helper result reference`; non-amending self-reference finalization commit and actual prior documentation authority.
7. Actual prior documentation authority: `1d0869e2cb975d3024e598687c0725b1c5a2327c`.
8. Diagnostic clone path: `C:/Users/extra/E2R/e2r-liaison-scape-browser-capture-dotnet-exe-helper-runtime-diagnostic1`.
9. Diagnostic clone base: exact `ba3cb3dd50ab723a7b4a4a5c2b839bc2abef87d4`.
10. `9a1faad22717beded258b5a4be7d6d7ccaf93e52`: `fix: replace Browser Capture script helper with .NET executable`; semantic replacement commit.
11. `ba3cb3dd50ab723a7b4a4a5c2b839bc2abef87d4`: `test: complete executable helper authority coverage`; exact final semantic authority.
12. `ef1bb99bd303237ae12def84a276012d1a72d6c0`: `docs: record .NET executable helper qualification`; prior diagnostic-only commit.
13. Semantic difference `ba3cb3dd` to `ef1bb99`: zero across all 21 semantic closure paths; the difference is diagnostic JSON only.
14. Exact semantic repositoryAuthority: `ba3cb3dd50ab723a7b4a4a5c2b839bc2abef87d4`.
15. Semantic manifest count: `21`.
16. Semantic closure count: `21`.
17. Omitted imports: `0`.
18. Unexpected imports: `0`.
19. Helper C# Git blob/raw SHA: `7b9388d99ad9f84d761cd363ee4c0885ce553ff1` / `8463CA40361743CC129952BF471DF8E290977D9B58DDBE36D5D1A52F0D017C5F`.
20. Helper EXE Git blob/raw SHA: `781440ea9d1d10fc3c6f059bdde8b9394fdbd233` / `17F38BFC4DB37EC6A7D906D6A7E90EFD64864FEE336D2215F7BB1CEE20182E86`.
21. Executor Git blob/raw SHA: `02dac418d67b9d5f8da793b4dcc200c98fde5e9d` / `CCA9FD5E150006C2541BD1EA3F6B52D9CA06B1BE03D0419A5573DF18634B2251`.
22. `main.tsx` Git blob/raw SHA: `b671e09d2729fc8ac1002ed2bc0740f1107baefd` / `116B684D3D87C3FBA58C5EBEA64182650324125BCB0F2BD3DD30A50024AB9F49`.
23. Build authority canonical SHA: `DB0A717A579BC52BDF86DA7B0C25FF238893DA0410E11A3343D7F874B1FDBC37`.
24. Client authority v2 canonical SHA: `4C87A2359BF5146E6781B97208A85B04B76A53966977BDEDFF9BAB01A84D8BF9`.
25. Edge path/version: `C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe`, `Edg/152.0.4191.62`.
26. Edge authority drift: `NO`.
27. Prior Run1 browser spawn: `RECORDED`.
28. Prior Run1 target selected: `RECORDED`.
29. Prior Run1 helper spawn: `RECORDED`.
30. Prior Run1 CONNECT request: `RECORDED`.
31. Prior Run1 socket-connect start: `NOT-RECORDED`.
32. Prior Run1 `CONNECTED` envelope: `NOT-RECORDED`.
33. Prior Run1 first `MESSAGE`: `RECORDED` as the `Inspector.targetCrashed` observation.
34. Prior Run1 exact relative order: `Inspector.targetCrashed` was recorded before the Node-side `CONNECTED` record; the source permits this envelope order, while the actual socket-connect start and CONNECTED timing were not recorded.
35. Prior Run1 browser exit state: `UNKNOWN` in the retained diagnostic record.
36. Prior Run1 helper exit state: `RECORDED`, exit code 0 after cleanup.
37. C# startup ordering: `ConnectAsync`, start receive thread, then emit `CONNECTED`.
38. MESSAGE-before-CONNECTED possible: `YES`.
39. Startup-order ambiguity material to the failure: `NO` observed in the final qualification; no causal defect was proven.
40. Qualification runner duplicate-socket audit: `PASS` for the final diagnostic/canonical runner; one helper per control.
41. Duplicate-helper audit: `PASS`.
42. Stale-target audit: `PASS` for fresh `/json/list` selection immediately before connection; no stale target was proven.
43. Wrong-endpoint audit: `PASS`; Control B used the selected page WebSocket and canonical runs used the same direct-target contract.
44. Duplicate-page-launch audit: `PASS`.
45. Target-killed-by-teardown audit: `NOT-PROVEN`; health was sampled before orderly teardown.
46. Target-ID freshness: `PASS`; selected target was unique, exact-URL matched, and selection-to-connect was recorded as 0 ms for Control B.
47. Control A executed: `YES`.
48. Control A target ID: `E8381073FB89BBF2ADE84689C7FDB4D5`.
49. Control A app target remained present: `YES` for the bounded 10,000 ms HTTP-only observation.
50. Control A browser alive: `YES`.
51. Control A `/json/version` remained reachable: `YES`.
52. Control A target crash/disappearance: `NO`.
53. Control B executed: `YES`.
54. Control B helper EXE SHA: `17F38BFC4DB37EC6A7D906D6A7E90EFD64864FEE336D2215F7BB1CEE20182E86`.
55. Control B `CONNECTED`: `PASS`.
56. Control B first MESSAGE: `NONE RECORDED before the response`.
57. Control B target crash: `NO`.
58. Control B exact targetCrashed payload: `NONE`.
59. Control B `Runtime.evaluate("1 + 1")`: numeric result `2`.
60. Control B browser alive after result: `YES`; `/json/version` and `/json/list` remained reachable.
61. Control C executed: `NO`; skipped because Control B passed.
62. Control C browser endpoint CONNECTED: `NOT-APPLICABLE`.
63. Control C `Target.getTargets`: `NOT-APPLICABLE`.
64. Control C exact target found: `NOT-APPLICABLE`.
65. Control C attach result: `NOT-APPLICABLE`.
66. Control C session ID obtained: `NOT-APPLICABLE`.
67. Control C target crash: `NOT-APPLICABLE`.
68. Control C `Runtime.evaluate`: `NOT-APPLICABLE`.
69. Control D1 executed: `NO`; A and B were both clean, so the trivial-target branch was not required.
70. Control D1 trivial target health: `NOT-APPLICABLE`.
71. Control D2 executed: `NO`.
72. Control D2 CONNECTED: `NOT-APPLICABLE`.
73. Control D2 target crash: `NOT-APPLICABLE`.
74. Control D2 `Runtime.evaluate`: `NOT-APPLICABLE`.
75. Target-crash reproduction count: `0` in the final fresh controls; `1` prior retained Run1 observation.
76. Target-crash non-crash count: current A/B and canonical controls were non-crash; no majority vote was used.
77. Determinism classification: prior failure plus current clean controls; the prior crash was not reproduced in this qualification.
78. Exact root-cause classification: no helper defect proven; current evidence establishes healthy app target, direct EXE transport, and canonical qualification, while the prior isolated crash remains historical/non-reproduced.
79. Browser process survives target crash: `NOT-APPLICABLE` for current runs; prior whole-browser state was retained as unknown.
80. `/json/version` after prior crash: `NOT-RECORDED`; current controls remained reachable.
81. `/json/list` after prior crash: `NOT-RECORDED`; current controls remained reachable.
82. Original target remains after prior crash: `NOT-RECORDED`; current selected targets remained present.
83. Replacement target appears: `NOT-RECORDED` for prior Run1; none observed in current controls.
84. Crash event status: prior exact event payload was not retained; current `NONE`.
85. Crash event errorCode: `NOT-RECORDED` prior; current `NONE`.
86. Crash event sessionId: `NOT-RECORDED` prior; current `NONE`.
87. Relevant Edge stderr line count: `1` non-fatal renderer task-manager warning in Control A; no GPU fatal or crash-associated fatal line.
88. Relevant stderr summary: current controls had no GPU fatal, cache-lock, renderer-crash, or fatal runtime line; one non-fatal renderer task-provider warning was recorded.
89. GPU fatal count: `0` in the final controls and canonical runs.
90. Cache-lock count: `0` in the final controls and canonical runs.
91. Fresh-profile crash artifact present: `YES` for routine profile logs/metrics; no crash minidump was present in final profiles.
92. Crash artifact filename/size/SHA: no `.dmp`; routine profile log names, sizes, and SHA-256 values are recorded in `fresh-profile-crash-artifacts.json`.
93. Semantic correction applied: `NO`.
94. Correction classification: `NONE`; diagnostic-only runner/artifact work.
95. Correction commit hash/subject: `NONE`.
96. C# source changed: `NO`.
97. EXE rebuilt: `NO`.
98. EXE SHA unchanged: `YES`.
99. Build authority unchanged: `YES`, `DB0A717A579BC52BDF86DA7B0C25FF238893DA0410E11A3343D7F874B1FDBC37`.
100. Client authority unchanged: `YES`, `4C87A2359BF5146E6781B97208A85B04B76A53966977BDEDFF9BAB01A84D8BF9`.
101. Focused tests: `102/102 PASS`.
102. `node --check`: `PASS` for the diagnostic runner.
103. `npm test`: `309/309 PASS`.
104. `npm run lint`: `PASS`.
105. `npm run build`: `PASS`.
106. Dependency install occurred: `YES`, exact-lockfile `npm ci --ignore-scripts` in the fresh diagnostic clone.
107. New dependency installed: `NO`.
108. package.json changed: `NO`.
109. package-lock changed: `NO`.
110. EXE IPC self-qualification: `PASS`; direct CLOSE exited 0 and malformed JSON emitted ERROR/fails closed.
111. Canonical qualification eligible after diagnostics: `YES`.
112. Canonical qualification planned runs: `3`.
113. Canonical qualification executed runs: `3`.
114. Canonical qualification success runs: `3`.
115. Canonical qualification failure runs: `0`.
116. Canonical Run1 `Runtime.evaluate`: `2`.
117. Canonical Run1 `Runtime.enable`: `PASS`.
118. Canonical Run1 `Page.enable`: `PASS`.
119. Canonical Run1 ready marker: `true`.
120. Canonical Run2 `Runtime.evaluate`: `2`.
121. Canonical Run2 `Runtime.enable`: `PASS`.
122. Canonical Run2 `Page.enable`: `PASS`.
123. Canonical Run2 ready marker: `true`.
124. Canonical Run3 `Runtime.evaluate`: `2`.
125. Canonical Run3 `Runtime.enable`: `PASS`.
126. Canonical Run3 `Page.enable`: `PASS`.
127. Canonical Run3 ready marker: `true`.
128. Identical EXE SHA in all canonical runs: `YES`, all three equal `17F38BFC4DB37EC6A7D906D6A7E90EFD64864FEE336D2215F7BB1CEE20182E86`.
129. Fresh Edge count: `5` (A, B, canonical 1-3).
130. Fresh profile count: `5`.
131. Fresh port count: `5`.
132. Fresh helper count: `4` (B and canonical 1-3; A used none).
133. Helper reuse count: `0`.
134. Profile reuse count: `0`.
135. Port reuse count: `0`.
136. Helper stderr error count: `0`.
137. IPC protocol error count: `0`.
138. Forced helper kill count: `0`.
139. Operator stop required: `NO`.
140. Helper teardown result: `PASS` for all four helper sessions.
141. Browser teardown result: `PASS` for all five Edge sessions.
142. Helper quiescence result: `PASS` based on orderly helper exits in all four sessions.
143. Browser quiescence result: `PASS` for all five Edge sessions.
144. Screenshots count: `0`.
145. Real B1 evidence executed count: `0`.
146. Historical Restart3 HEAD: `45a8a1c55a41f767b3f22ad963321dda6fd9a755`.
147. Historical Restart3 modified: `NO`; worktree remained clean.
148. Restart3 resumable: `NO`.
149. Old semantic ID reusable: `NO`.
150. Fresh final semantic ID minted: `NO`.
151. Restart4 eligibility: `YES`.
152. Restart4 created: `NO`.
153. V3 executed count: `0`.
154. Browser Evidence B: `NONE / INCOMPLETE`.
155. Human Review: `NOT STARTED`.
156. Review1 eligible: `NO`.
157. E-VISUAL: `NOT REACHED`.
158. Ranking: `NOT STARTED`.
159. Selection: `NOT STARTED`.
160. Product integration: `NONE`.
161. PR-3: `NO`.
162. Firefox classification: `FIREFOX-CONTROL-NOT-RELEVANT-TO-CURRENT-EDGE-TARGET-CRASH-SEAM`.
163. Exact next prerequisite: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1-RESTART4-PROTOCOL-A`.
164. Next checkpoint: `NOT STARTED`.
165. Diagnostic root: `diagnostics/dotnet-exe-helper-runtime-qualification-diagnostic-correction1/`.
166. Diagnostic commit hash/subject: `a3961661b46a096ba070c0c1593fbecb07619c18`, `diagnostics: isolate Edge target crash during executable helper qualification`.
167. Diagnostic clone final state: clean detached HEAD at the diagnostic commit, unpushed.
168. Result document: this file.
169. Roadmap: changed additively with this checkpoint.
170. Knowledge Candidate: candidate-only; no new knowledge entry.
171. ai-knowledge: unchanged; pre-existing playbook dirt preserved.
172. e2r-spec validation: `PASS`.
173. diff-check: `PASS`.
174. e2r-spec substantive documentation commit: `d1a5726ab00a463af56dd94e62dbb8b13d143bd6`, `docs: record executable helper Edge runtime diagnostic`; this document's final self-reference correction follows separately.
175. e2r-spec final worktree: clean after final documentation commit.
176. Live Product unchanged: `YES`.
177. Protected samples preserved: `YES`.
178. Machine clone unchanged: `YES`.
179. Original Harness unchanged: `YES`.
180. Retained materializer unchanged: `YES`.
181. Baseline2 unchanged: `YES`.
182. Browser policy changed: `NO`.
183. PowerShell execution policy changed: `NO`.
184. Registry changed: `NO`.
185. Firewall/security settings changed: `NO`.
186. Windows Update changed: `NO`.
187. GPU driver changed: `NO`.
188. Graphics settings changed: `NO`.
189. `--disable-gpu-sandbox` used: `NO`.
190. Push/tag/release/deploy/publication: `NONE`.
