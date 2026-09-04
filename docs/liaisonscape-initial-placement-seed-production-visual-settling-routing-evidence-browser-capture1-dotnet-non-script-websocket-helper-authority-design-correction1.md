# E2R-SPEC / LiaisonScape — Non-Script WebSocket Helper Authority Design Correction1

Checkpoint date: 2026-09-05. This is a bounded design/toolchain qualification. No production helper replacement or Browser Capture qualification was performed.

1. CASE: `CASE 3`.
2. Decision: `DOTNET-PREBUILT-HELPER-BINARY-AUTHORITY-DESIGN-REQUIRED`.
3. Semantic impact: `NONE`.
4. Exact e2r-spec starting HEAD: `2310fcc7f61e82cb2054f9e608176fa83163a74c`.
5. `d88be3e182ba1efdb199c7211e35ae1c3a23229c` — `docs: finalize helper policy qualification reference`; final documentation-reference commit for the prior qualification.
6. `23a86eb6ba9ae427d5464e3487ef574799dd0b41` — `docs: record ClientWebSocket helper execution-policy qualification`; prior substantive result-document commit.
7. Actual prior documentation authority: `d88be3e182ba1efdb199c7211e35ae1c3a23229c`, with field-151 authority `23a86eb6ba9ae427d5464e3487ef574799dd0b41`.
8. Design clone: `C:\Users\extra\E2R\e2r-liaison-scape-browser-capture-dotnet-nonscript-helper-design1`, based exactly on semantic authority `4ff36a995b2cb16f9fae10c72271631d1e4739e3`.
9. Current semantic implementation authority: `4ff36a995b2cb16f9fae10c72271631d1e4739e3`.
10. Semantic manifest count: `20`.
11. Semantic closure count: `20`.
12. Omitted imports: `0`.
13. Unexpected imports: `0`.
14. Current script helper: blob `7dd0f039e7d8e94c48a71c165882fb2b0c9da3b6`; raw SHA-256 `C081ED0A7DCBE07EC0931D54CDCCB41F6F84A1813B4BF259044089A772C430CE`.
15. Current executor: blob `f8da40db3103fceee61c68ff1531d43bc33c3438`; raw SHA-256 `844F6A92D706CE7D9CADD1FBBD2D5A88DD906394224C40F03CC499966B1F2E15`.
16. `main.tsx`: blob `b671e09d2729fc8ac1002ed2bc0740f1107baefd`; raw SHA-256 `116B684D3D87C3FBA58C5EBEA64182650324125BCB0F2BD3DD30A50024AB9F49`.
17. Current client authority SHA-256: `B02FFECD8DC32E42C1B9CDAAD196E416690D2ECC924502E42593A0473E28CEF8`.
18. Effective PowerShell policy carried forward: `Restricted`; all scopes `Undefined`; Group Policy not applied.
19. `.ps1 -File` compatibility: `FAIL`; committed helper and trivial control fail `UnauthorizedAccess` before body execution.
20. Policy changed: `NO`.
21. Bypass used: `NO`.
22. Discovered `csc.exe` paths: PATH discovery found none; explicit existing candidates were `C:\Windows\Microsoft.NET\Framework\v4.0.30319\csc.exe` and `C:\Windows\Microsoft.NET\Framework64\v4.0.30319\csc.exe`.
23. Selected csc path: `C:\Windows\Microsoft.NET\Framework64\v4.0.30319\csc.exe`.
24. csc executable raw SHA-256: `46809206887326D2D24DB1EFF1F3064DE972C3451ABE766B49111450A5E08E00`.
25. csc FileVersion/ProductVersion: `4.8.9221.0 built by: NET481REL1LAST_25H2` / `4.8.9221.0`.
26. csc architecture: Framework64 path selected for x64 target; executable architecture was not independently queried.
27. csc deterministic option supported: `NO`.
28. Exact deterministic option result: `/deterministic` is absent from help and probe returns `CS2007 ... not a valid option: '/deterministic'`.
29. Selected target framework/runtime: .NET Framework `4.8`, CLR `4.0.30319.42000`.
30. Required framework references: `mscorlib.dll`, `System.dll`, `System.Net.dll`, and `System.Web.Extensions.dll`.
31. Reference assembly paths/hashes: `mscorlib.dll` `A8CAE3D326F7D973CA79CBA849939D4837AD18D507EF6D5F6EBAB802B7FB157A`; `System.dll` `2B3C17C6208A0B4B6BEB94E1A066F99BA06CDB2EA919479E99D47E8C6D96DC71`; `System.Net.dll` `833768CD5B4394AD4ABCE5796798DADCEED897C70FAD3BD24940D0AB2185B5E6`; `System.Web.Extensions.dll` `5E6378EDC06F5A61920AAADB2ABA839DD3CF302D6192E08AACD4454BA4CFF0B3`.
32. `dotnet.exe` available: `NO`.
33. dotnet path/SHA: not applicable; no executable found.
34. Installed SDK list: unavailable because dotnet is absent.
35. Installed runtime list: unavailable because dotnet is absent.
36. Option A disposition: `DISFAVORED`.
37. Option A rationale: Framework csc compiles and launches, but lacks deterministic mode and duplicate controlled builds differ in bytes; it is not an implicit exact-byte authority.
38. Option B disposition: `NOT-APPLICABLE`.
39. Option B rationale: no existing dotnet SDK/runtime was found and installation is out of scope.
40. Option C disposition: `PREBUILT-BINARY-AUTHORITY-ACCEPTABLE`; selected.
41. Option C rationale: an explicitly shipped EXE can be hash-bound with source, compiler/reference provenance, and a controlled reproduction or review procedure.
42. Option D disposition: `NOT-APPLICABLE`.
43. Option D rationale: no other suitable installed non-script .NET host was mechanically discovered.
44. Option E disposition: `REJECTED`.
45. Selected helper form: committed C# semantic source plus explicitly reviewed/prebuilt .NET Framework x64 EXE; no binary is added in this checkpoint.
46. Selected build mechanism: one-time controlled Framework csc materialization with recorded provenance, followed by explicit prebuilt-binary authority.
47. External package required: `NO`.
48. NuGet restore required: `NO`.
49. npm dependency required: `NO`.
50. IPC-v1 preservable: `YES`.
51. JSON implementation strategy: BCL `System.Web.Script.Serialization.JavaScriptSerializer` from `System.Web.Extensions.dll`, UTF-8 JSON Lines on stdin/stdout.
52. Node ownership preserved: `YES`.
53. Helper transport-only ownership preserved: `YES`.
54. Proposed executable invocation: `spawn(exactHelperExePath, [], { shell: false, stdio: ... })`.
55. Shell used: `NO`.
56. PowerShell intermediary required: `NO`.
57. CDP JSON present on command line: `NO`.
58. Semantic source model: Node Browser Capture executor/adapter, C# helper source, and authority materializer/contracts.
59. Generated runtime artifact model: helper EXE with exact output SHA-256 bound by authority.
60. Proposed build-authority contract: `PR3-BROWSER-CAPTURE-DOTNET-HELPER-BUILD-AUTHORITY-v1`.
61. Proposed build-authority fields: source path/blob/raw SHA; compiler path/SHA/FileVersion/ProductVersion; exact arguments; target/framework/platform; reference paths/hashes; output name/SHA; deterministic mode; byte reproducibility; working-directory semantics; material environment inputs.
62. Proposed client-authority contract: `PR3-BROWSER-CAPTURE-WEBSOCKET-CLIENT-AUTHORITY-v2`.
63. Proposed client-authority fields: transport kind; IPC contract; helper source authority; helper executable SHA; build-authority SHA; Node adapter/runtime authority; .NET runtime authority; timeout authority; failure contract.
64. Client authority v1 historical meaning preserved: `YES`.
65. `PR3-RUN-IDENTITY-v3` sufficient: `YES`.
66. Run identity v4 design required: `NO`.
67. `PR3-PHASE-BRIDGE-v3` sufficient: `YES`.
68. Phase bridge v4 design required: `NO`.
69. AppLocker/WDAC read-only classification: `NO-OBVIOUS-BLOCK`; AppLocker cmdlet unavailable, Device Guard query yielded no result, and direct diagnostic EXE launch passed.
70. Non-script EXE host feasibility: `PASS` for trivial direct launch; full helper was not tested.
71. Prototype executed: `YES`.
72. Prototype compiler: Framework64 csc at `C:\Windows\Microsoft.NET\Framework64\v4.0.30319\csc.exe`.
73. Prototype source SHA-256: `2AA751ED0658FBD0551652847663F5F6BAA08A6BF4BE8C3FFE7A835A4467E563`.
74. Prototype build1 EXE SHA-256: `086771108DC5EEE52714328397EAD7465A0631F56A8BAC7883CC87135CFC0A5E`.
75. Prototype build2 EXE SHA-256: `1F0D61E71A7B3664F437400FC9CF9554D95366CF267C0EB4F48CD956B73D6E01`.
76. Byte deterministic: `NO` (`NON-DETERMINISTIC`).
77. Prototype EXE launch result: `PASS`.
78. Prototype exit code: `0`.
79. Prototype marker result: `E2R-NONSCRIPT-EXE-PROBE-PASS`.
80. Optional Edge ClientWebSocket prototype executed: `NO`.
81. Optional Edge `Runtime.evaluate` result: not run; prior independent .NET ClientWebSocket Edge proof remains historical context only.
82. Prototype evidence class: `NON-EVIDENCE`.
83. Production source changed: `NO`.
84. Production helper replaced: `NO`.
85. Client authority changed: `NO`.
86. Current semantic authority unchanged: `YES` (`4ff36a995b2cb16f9fae10c72271631d1e4739e3`).
87. Focused tests: `102/102 PASS`.
88. `node --check`: `PASS` for diagnostic record generator before removal; prototype source compiled successfully.
89. PowerShell parser: `PASS` for the unchanged current helper.
90. `npm test`: `309/309 PASS`.
91. `npm run lint`: `PASS`.
92. `npm run build`: `PASS`.
93. Dependency install occurred: `YES`, `npm ci --ignore-scripts` only because node_modules was absent.
94. New dependency installed: `NO`.
95. package.json changed: `NO`.
96. package-lock changed: `NO`.
97. Browsers launched count: `0`.
98. Edge launch count: `0`.
99. Chrome launch count: `0`.
100. Firefox launch count: `0`.
101. GPU fatal count: `0`.
102. Cache-lock count: `0`.
103. Screenshots count: `0`.
104. Real B1 evidence executed count: `0`.
105. Historical Restart3 HEAD: `45a8a1c55a41f767b3f22ad963321dda6fd9a755`.
106. Historical Restart3 modified: `NO`.
107. Restart3 resumable: `NO`.
108. Old semantic ID reusable: `NO`.
109. Fresh final semantic ID minted: `NO`.
110. Restart4 eligibility: `NO`.
111. Restart4 created: `NO`.
112. V3 executed count: `0`.
113. Browser Evidence B: `NONE / INCOMPLETE`.
114. Human Review: `NOT STARTED`.
115. Review1 eligible: `NO`.
116. E-VISUAL: `NOT REACHED`.
117. Ranking: `NOT REACHED`.
118. Selection: `NOT REACHED`.
119. Product integration: none.
120. PR-3: `NO`.
121. Non-script-helper toolchain design status: `NON-SCRIPT-HELPER-TOOLCHAIN-DESIGN-CLOSED`.
122. Exact next prerequisite: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1-DOTNET-EXE-WEBSOCKET-HELPER-IMPLEMENTATION1`.
123. Next checkpoint: `NOT STARTED`.
124. Diagnostic root: `diagnostics/dotnet-nonscript-helper-authority-design-correction1/` in the design clone.
125. Design/diagnostic clone commit: `a3de4e08a1db84ea35e8ad555e317bdb69aed15b` — `docs: design non-script ClientWebSocket helper authority`.
126. Design clone final state: clean detached HEAD, unpushed.
127. Result document: this file.
128. Roadmap: changed additively with this checkpoint.
129. Knowledge Candidate: candidate-only; no new entry.
130. ai-knowledge: unchanged.
131. e2r-spec validation: `PASS` (`npm.cmd run validate`).
132. e2r-spec diff-check: `PASS` (`git diff --check`).
133. e2r-spec substantive documentation commit: `821ebcb215dfb6b8cc03d1f5be339004d660b10c` — `docs: record non-script helper authority design` (the final correction is a separate non-amending commit).
134. e2r-spec worktree: clean after the final documentation commit.
135. Live Product unchanged: `YES`.
136. Protected samples preserved: `YES`.
137. Machine clone unchanged: `YES`.
138. Original Harness unchanged: `YES`.
139. Retained materializer unchanged: `YES`.
140. Baseline2 unchanged: `YES`.
141. Browser policy changed: `NO`.
142. Registry changed: `NO`.
143. Firewall/security settings changed: `NO`.
144. Windows Update changed: `NO`.
145. GPU driver changed: `NO`.
146. Graphics settings changed: `NO`.
147. `--disable-gpu-sandbox` used: `NO`.
148. Push/tag/release/deploy/publication: `NONE`.
