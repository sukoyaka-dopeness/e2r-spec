# E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1-DOTNET-WEBSOCKET-BRIDGE-HELPER-EXECUTION-POLICY-COMPATIBILITY-QUALIFICATION1

Date: 2026-09-05

1. CASE: CASE 2.
2. Decision: POWERSHELL-SCRIPT-HELPER-HOST-INCOMPATIBLE.
3. Semantic impact: NONE in this compatibility checkpoint; no production source changed.
4. Exact e2r-spec starting HEAD: 2310fcc7f61e82cb2054f9e608176fa83163a74c.
5. 2310fcc7f61e82cb2054f9e608176fa83163a74c: `docs: finalize bridge result commit reference`; current prior Implementation1 documentation authority.
6. 428548de04bc67314a5b03894edbb6e073f79f63: `docs: record Browser Capture ClientWebSocket bridge implementation`; substantive parent documentation commit.
7. Actual prior documentation authority: 2310fcc7f61e82cb2054f9e608176fa83163a74c, child of 428548de.
8. 9cf98d729824c330fa35b8f8b3ae656e96b78b45: `fix: bridge Browser Capture CDP through ClientWebSocket`; initial semantic implementation.
9. 4ff36a995b2cb16f9fae10c72271631d1e4739e3: `fix: allow authority audit of diagnostic worktrees`; exact final semantic authority.
10. e6230e8c2a27950f07cab2cb508b4ab5021f22b2: `docs: record ClientWebSocket bridge qualification`; diagnostics-only child; no semantic source difference.
11. Exact semantic implementation authority: 4ff36a995b2cb16f9fae10c72271631d1e4739e3.
12. Qualification clone: C:\Users\extra\E2R\e2r-liaison-scape-browser-capture-helper-execution-policy-qualification1; base 4ff36a.
13. Semantic manifest count: 20.
14. Runtime closure count: 20.
15. Omitted imports: 0.
16. Unexpected imports: 0.
17. Helper blob/raw SHA-256: 7dd0f039e7d8e94c48a71c165882fb2b0c9da3b6 / C081ED0A7DCBE07EC0931D54CDCCB41F6F84A1813B4BF259044089A772C430CE.
18. Executor blob/raw SHA-256: f8da40db3103fceee61c68ff1531d43bc33c3438 / 844F6A92D706CE7D9CADD1FBBD2D5A88DD906394224C40F03CC499966B1F2E15.
19. main.tsx blob/raw SHA-256: b671e09d2729fc8ac1002ed2bc0740f1107baefd / 116B684D3D87C3FBA58C5EBEA64182650324125BCB0F2BD3DD30A50024AB9F49.
20. Client authority SHA before qualification: B02FFECD8DC32E42C1B9CDAAD196E416690D2ECC924502E42593A0473E28CEF8.
21. PowerShell executable: C:\WINDOWS\System32\WindowsPowerShell\v1.0\powershell.exe.
22. PowerShell executable raw SHA-256: 7600FFE12DA441FE89D035B13801E8E91D064BC544A27B19A5CF49F6AB8B18F5.
23. PowerShell FileVersion/ProductVersion: 10.0.26100.8972 (WinBuild.160101.0800) / 10.0.26100.8972.
24. PSVersion: 5.1.26100.9168.
25. PSEdition: Desktop.
26. Get-ExecutionPolicy effective result: Restricted.
27. MachinePolicy: Undefined.
28. UserPolicy: Undefined.
29. Process: Undefined.
30. CurrentUser: Undefined.
31. LocalMachine: Undefined.
32. Winning policy scope: no listed scope is defined; effective default is Restricted.
33. Group Policy enforced: NO; MachinePolicy and UserPolicy are Undefined and policy registry keys are absent.
34. HKLM PowerShell policy state: HKLM:\SOFTWARE\Policies\Microsoft\Windows\PowerShell absent.
35. HKCU PowerShell policy state: HKCU:\SOFTWARE\Policies\Microsoft\Windows\PowerShell absent.
36. ShellIds execution-policy state: HKLM ShellIds Microsoft.PowerShell exists with only Path; HKCU ShellIds absent; no ExecutionPolicy value.
37. Helper filesystem/locality: local NTFS-style path, not UNC; .ps1, 6329 bytes in qualification clone.
38. Helper alternate data streams: `:$DATA` only.
39. Zone.Identifier present: NO.
40. ZoneId: null; not applicable.
41. Helper Authenticode status: NotSigned.
42. Helper signer present: NO; timestamper present: NO.
43. Code-signing certificate inventory executed: NO; effective Restricted makes signature inventory non-dispositive.
44. Usable code-signing cert present: NOT-APPLICABLE.
45. Exact helper -File probe exit code: 1.
46. Helper probe stdout: empty; stderr SHA-256 B7DF4F38B185F4A5A2C04FEF0E09099A5EE5418A9617898F53D601CA3AD49C8B; FullyQualifiedErrorId UnauthorizedAccess.
47. Helper probe stderr classification: execution-policy rejection before script body/IPC startup; PowerShell reports the unsigned script cannot run on this system.
48. Helper IPC started: NO.
49. Trivial .ps1 -File probe exit code: 1.
50. Trivial probe marker emitted: NO.
51. Trivial probe stderr classification: same Restricted/UnauthorizedAccess class; SHA-256 EF57731C074421D524C7CA01E67AB66ECD932FC3E6E3DF476480D2447110F719.
52. General .ps1 -File allowed: NO.
53. Helper-specific block: NO; trivial control fails identically before script execution.
54. Exact execution-policy classification: POWERSHELL-SCRIPT-HELPER-HOST-INCOMPATIBLE.
55. Static committed helper executable under current policy: NO.
56. Set-ExecutionPolicy used: NO.
57. ExecutionPolicy override used: NO.
58. Registry changed: NO.
59. Group Policy changed: NO.
60. Unblock-File used: NO.
61. Zone.Identifier removed: NO.
62. Helper signed during checkpoint: NO.
63. Certificate created/imported: NO.
64. Helper executed via -Command: NO.
65. Helper executed via -EncodedCommand: NO.
66. Helper source piped interactively: NO.
67. Host security settings changed: NO.
68. Production invocation defect confirmed: NO.
69. Production correction applied: NO.
70. Correction summary: none; exact governed argv is already the accepted -File form.
71. Semantic correction commit: none.
72. Client authority SHA after qualification: B02FFECD8DC32E42C1B9CDAAD196E416690D2ECC924502E42593A0473E28CEF8.
73. Client authority changed: NO.
74. PR3-RUN-IDENTITY-v3 preserved: YES.
75. PR3-PHASE-BRIDGE-v3 preserved: YES.
76. Historical v2 identities unchanged: YES.
77. Focused tests: 102/102 PASS.
78. PowerShell parser: committed helper 0 errors; trivial probe 0 errors; PASS.
79. node --check: PASS on changed/new production and diagnostic .mjs files.
80. npm test: 309/309 PASS.
81. npm lint: PASS.
82. npm build: PASS.
83. Dependency install occurred: YES, exact npm ci --ignore-scripts only.
84. New dependency installed: NO.
85. package.json changed: NO.
86. package-lock changed: NO.
87. Helper-execution compatibility gate: FAIL; Edge gate not entered.
88. Edge qualification planned runs: 3.
89. Edge qualification executed runs: 0; stopped before Edge per Section 22.
90. Edge qualification success runs: 0.
91. Edge qualification failure runs: 0; no Edge run was permitted after helper gate failure.
92. Run1 helper start: NO under governed invocation; helper process was rejected by policy.
93. Run1 Runtime.evaluate: NOT REACHED.
94. Run1 Runtime.enable: NOT REACHED.
95. Run1 Page.enable: NOT REACHED.
96. Run1 ready marker: NOT REACHED.
97. Run2 helper start: NOT RUN by stop rule.
98. Run2 Runtime.evaluate: NOT RUN.
99. Run2 Page.enable: NOT RUN.
100. Run2 ready marker: NOT RUN.
101. Run3 helper start: NOT RUN by stop rule.
102. Run3 Runtime.evaluate: NOT RUN.
103. Run3 Page.enable: NOT RUN.
104. Run3 ready marker: NOT RUN.
105. Fresh browser count: 0.
106. Fresh profile count: 0.
107. Fresh port count: 0.
108. Fresh helper count: 1 attempted policy-rejected process.
109. Helper reuse count: 0.
110. Profile reuse count: 0.
111. Port reuse count: 0.
112. Helper stderr error count: 1 policy diagnostic for helper; 1 for trivial control.
113. Helper protocol error count: 0; IPC never started.
114. Forced helper kill count: 0.
115. Operator stop required: NO; automatic compatibility gate stop applied.
116. GPU fatal count: 0; Edge not launched.
117. Cache-lock count: 0; Edge not launched.
118. Helper teardown: process exited 1 naturally.
119. Browser teardown: NOT APPLICABLE; Edge not launched.
120. Helper quiescence: PASS after natural exit.
121. Browser quiescence: NOT APPLICABLE.
122. Screenshots count: 0.
123. Real B1 evidence executed count: 0.
124. Historical Restart3 HEAD: 45a8a1c55a41f767b3f22ad963321dda6fd9a755.
125. Historical Restart3 modified: NO.
126. Restart3 resumable: NO.
127. Old semantic ID reusable: NO.
128. Fresh final semantic ID minted: NO.
129. Restart4 eligibility: NO.
130. Restart4 created: NO.
131. V3 executed count: 0.
132. Browser Evidence B: NONE / INCOMPLETE.
133. Human Review: NOT STARTED.
134. Review1 eligible: NO.
135. E-VISUAL: NOT REACHED.
136. Ranking: NOT REACHED.
137. Selection: NOT REACHED.
138. Product integration: NONE.
139. PR-3: NO.
140. Exact next prerequisite: bounded non-script .NET ClientWebSocket helper design correction.
141. Next checkpoint started: NO.
142. Diagnostic root: diagnostics/dotnet-bridge-helper-execution-policy-compatibility-qualification1/.
143. Diagnostic clone commit: f859a03728708017e1d8cf837e2f4a0585e73cc3 (`diagnostics: qualify ClientWebSocket helper execution policy`).
144. Diagnostic clone final state: detached HEAD at f859a037, clean and unpushed.
145. Result document: this file.
146. Roadmap changed: YES, additive policy compatibility entry.
147. Knowledge Candidate: candidate-only; no new entry.
148. ai-knowledge changed: NO; pre-existing dirty playbook preserved.
149. e2r-spec validation: PASS.
150. diff-check: PASS.
151. e2r-spec commit: 23a86eb (local, `docs: record ClientWebSocket helper execution-policy qualification`).
152. e2r-spec worktree: clean after the documentation commit; no unrelated changes.
153. Live Product unchanged: YES.
154. Protected samples preserved: YES.
155. Machine clone unchanged: YES.
156. Original Harness unchanged: YES.
157. Retained materializer unchanged: YES.
158. Baseline2 unchanged: YES.
159. Browser policy changed: NO.
160. Registry changed: NO.
161. Firewall/security settings changed: NO.
162. Windows Update changed: NO.
163. GPU driver changed: NO.
164. Graphics settings changed: NO.
165. --disable-gpu-sandbox used: NO.
166. Push/tag/release/deploy/publication: NONE.

The static helper and client authority remain valid, but the accepted script
form is incompatible with this host's effective Restricted execution policy.
The next prerequisite is a separate bounded non-script .NET ClientWebSocket
helper design correction. Restart4 is not eligible from this checkpoint.
