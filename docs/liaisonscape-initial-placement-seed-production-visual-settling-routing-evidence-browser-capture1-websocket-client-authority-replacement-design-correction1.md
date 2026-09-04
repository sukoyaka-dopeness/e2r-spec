# LiaisonScape Browser Capture1 WebSocket Client Authority / Replacement Design Correction1

- Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1-WEBSOCKET-CLIENT-AUTHORITY-REPLACEMENT-DESIGN-CORRECTION1`
- Date: `2026-09-05` JST
- Scope: bounded transport design correction; no production implementation
- Result: **CASE 1 / DECISION A - `DOTNET-CLIENTWEBSOCKET-BRIDGE-DESIGNED`**

## Design conclusion

Option A, a Windows `.NET System.Net.WebSockets.ClientWebSocket` subprocess
bridge, is the selected future production design for the current PR3 evidence
boundary. It is selected because the independent client already proved both
Edge direct-target CDP evaluation and Edge browser-endpoint attach/session
evaluation, while the Node global WebSocket failed at the shared transport
seam. This is a design decision, not an implementation or runtime evidence
qualification.

The current PR3 boundary is explicitly Windows + Microsoft Edge Stable: the
accepted browser authority binds the Edge executable and version, and the
current host/Machine Evidence is Windows-qualified. Windows coupling is
therefore conditionally acceptable. It must not become implicit: PowerShell,
CLR/.NET, the helper source, the Node adapter, IPC contract/tests, OS assembly,
and timeout/error contract must become explicit authority before Restart4.

## Proposed bounded architecture

The Node executor remains the owner of browser launch, loopback HTTP discovery,
exact URL plus unique target selection, Protocol A/run binding, the existing
retry sequence of one initial attempt plus two retries, the evidence state
machine, and artifact writing. A single static helper process owns one CDP
WebSocket session for one capture attempt: connect, send text CDP JSON, receive
complete CDP messages, preserve request IDs, return response/event records, and
report close/error state. One helper per CDP call is rejected as inefficient
and semantically awkward.

The proposed IPC contract is `PR3-BROWSER-CAPTURE-WEBSOCKET-IPC-v1`. Node
writes structured request envelopes to helper stdin; helper writes one JSON
envelope per stdout line and sends diagnostics only to stderr. The CDP message
is carried as an escaped string field, so stdout has no ambiguous raw CDP or
log lines. The helper path is fixed and invoked with `-File`; CDP JSON is never
interpolated into a shell command. Node owns deterministic request IDs and
correlates responses. Unsolicited events are returned as event records and
cannot resolve a pending request. CDP errors, socket close/error, malformed
helper output, helper exit, and timeout all fail closed and clear pending
state. A late response is discarded by the Node adapter and cannot poison a
later request.

The proposed future identity contract is
`PR3-BROWSER-CAPTURE-WEBSOCKET-CLIENT-AUTHORITY-v1`. It is documentation-only
in this checkpoint and does not mutate `PR3-RUN-IDENTITY-v2` or
`PR3-PHASE-BRIDGE-v2`.

## Required final report

1. **CASE:** CASE 1.
2. **Decision:** DECISION A - `DOTNET-CLIENTWEBSOCKET-BRIDGE-DESIGNED`.
3. **semantic impact:** NONE.
4. **exact e2r-spec starting HEAD:** `58f256053220add23cd0eed82dae1e6ab7827903`.
5. **actual previous result authority full hash:** `58f256053220add23cd0eed82dae1e6ab7827903`.
6. **58f256... full hash/subject/role:** `58f256053220add23cd0eed82dae1e6ab7827903`, `docs: complete diagnostic commit reference`; child correction that completed the prior result document's self-reference.
7. **e53f0f7... full hash/subject/role:** `e53f0f7c829175b203c71b5d936923cc2a07550a`, `docs: record independent CDP WebSocket diagnostic`; parent documentation checkpoint containing the result and roadmap entry.
8. **discrepancy resolution:** `58f256...` is the child of `e53f0f7...`; both exist, and `58f256...` is the actual final documentation authority at checkpoint start. No history was rewritten.
9. **design clone path:** `C:\Users\extra\E2R\e2r-liaison-scape-browser-capture-websocket-client-design1`.
10. **design clone base:** exact detached semantic authority `f2d25e98d75aa208e176105a5b33acc2d6742aa5`.
11. **semantic implementation authority:** `f2d25e98d75aa208e176105a5b33acc2d6742aa5`.
12. **semantic manifest count:** 19.
13. **closure count:** 19.
14. **omitted imports:** 0.
15. **unexpected imports:** 0.
16. **executor blob/raw SHA:** blob `0a6570f63ca71cc15114a1bacd73eea7504a26aa`; raw SHA-256 `7AD447E620C6160CB5DD008E6F481DB005F418CFB7D9E702A66A57802AD8798C`.
17. **executor unchanged YES/NO:** YES.
18. **main.tsx blob/raw SHA:** blob `b671e09d2729fc8ac1002ed2bc0740f1107baefd`; raw SHA-256 `116B684D3D87C3FBA58C5EBEA64182650324125BCB0F2BD3DD30A50024AB9F49`.
19. **main.tsx unchanged YES/NO:** YES.
20. **Node version:** `v24.18.0`.
21. **npm version:** `11.16.0`.
22. **Undici version:** `7.28.0` for the Node runtime global; the lockfile's `undici 8.10.0` is only a transitive jsdom dependency.
23. **PowerShell version:** `5.1.26100.9168`, Windows PowerShell Desktop.
24. **CLR/.NET version:** CLR `4.0.30319.42000`; .NET Framework `4.8.9337.0`.
25. **Edge path/version:** `C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe`, Product/File version `152.0.4191.62`.
26. **current PR3 platform requirement:** explicitly Windows + Microsoft Edge Stable qualified.
27. **Windows-specific transport acceptable YES/NO/CONDITIONAL:** CONDITIONAL YES for this PR3 evidence boundary.
28. **current toolchain identity gap summary:** current authority binds semantic source, browser, run, phase, and Machine Evidence references, but not PowerShell/.NET runtime, helper/adapter/IPC source bytes, IPC version, timeout/error contract, or client authority identity.
29. **Option A disposition:** PREFERRED-DESIGN; implementation not yet authorized.
30. **Option A rationale:** independent Edge direct and browser-endpoint `.NET ClientWebSocket` controls succeeded without an npm dependency; risks are explicit Windows, runtime, IPC, lifecycle, and authority gaps.
31. **Option B disposition:** DEFERRED; `NEW-DEPENDENCY-REQUIRED`.
32. **Option B rationale:** no standalone `ws`/WebSocket package is in direct dependencies or lockfile; locked Undici is transitive jsdom and is not a stable direct production authority. Package selection, integrity, license, security, and reproducible-install review would be a separate qualification.
33. **Option C disposition:** REJECTED-FOR-CURRENT-DESIGN; `NO-INDEPENDENT-SUPPORTED-NODE-BUILTIN-CLIENT`.
34. **Option C rationale:** Node exposes only the global WebSocket on the failing Undici path; `node:net` and `node:tls` are lower-level primitives and would become custom RFC6455 work.
35. **Option D disposition:** DISFAVORED.
36. **Option D rationale:** a custom client adds handshake, masking, fragmentation, control-frame, close, partial-read, security, testing, and maintenance burden without being necessary after independent system-client proof.
37. **Option E disposition:** DEFERRED / NOT A CURRENT REPLACEMENT CANDIDATE.
38. **Option E rationale:** pipe framing, descriptor, compatibility, and lifecycle mechanics are not already authoritative; inventing them would exceed this checkpoint.
39. **selected replacement option:** Option A, Windows `.NET ClientWebSocket` subprocess bridge.
40. **selection rationale:** best current mechanical Edge proof and smallest dependency expansion, with toolchain authority expansion recorded as a mandatory gate.
41. **arithmetic ranking used NO:** NO; the matrix is qualitative only and has no summed score.
42. **proposed production transport architecture:** Node executor plus one static `.NET ClientWebSocket` helper process per capture attempt/session, connected through structured stdin/stdout IPC.
43. **Node ownership responsibilities:** browser launch, `/json` discovery, exact unique target selection, run binding, retry 1+2, CDP state machine, request-ID allocation, evidence semantics, artifact writing, helper lifecycle, and quiescence.
44. **replacement-client ownership responsibilities:** WebSocket connect/send/receive, complete-message reconstruction, text CDP transport, response/event record emission, close/error state, and bounded shutdown only.
45. **IPC required YES/NO:** YES.
46. **IPC transport/framing if applicable:** `PR3-BROWSER-CAPTURE-WEBSOCKET-IPC-v1`; one escaped JSON envelope per stdout line, stdout records only, stderr diagnostics only, CDP payload never shell-interpolated.
47. **helper lifecycle:** Node starts one helper for each capture attempt/session, validates startup, sends bounded requests, kills on timeout/failure, requests deterministic shutdown, and checks helper/browser quiescence.
48. **timeout ownership:** Node owns helper startup/shutdown and overall call deadlines; helper owns bounded WebSocket connect/send/receive operations; all deadlines fail closed.
49. **request-ID ownership:** Node allocates deterministic collision-free IDs; helper preserves IDs verbatim; response matching stays in Node.
50. **unsolicited event handling:** helper emits event envelopes separately; Node records/dispatches them without resolving pending commands.
51. **close/error handling:** helper returns close code/description and error records; Node rejects pending calls, clears state, classifies failure, and prevents late-response reuse.
52. **malformed output fail-closed behavior:** Node rejects malformed/non-envelope stdout, records helper-output failure, terminates the helper, and does not continue capture.
53. **shell interpolation avoided YES/NO:** YES.
54. **security review PASS/FAIL:** PASS WITH IMPLEMENTATION GATES; URL validation, structured JSON, fixed helper path, stdout/stderr separation, cleanup, minimal environment, and no arbitrary command execution are required controls.
55. **new production dependency required YES/NO:** NO for Option A.
56. **package.json change required in future YES/NO:** NO for Option A, unless a later decision changes to Option B.
57. **package-lock change required in future YES/NO:** NO for Option A, unless a later decision changes to Option B.
58. **PowerShell/.NET identity binding required YES/NO:** YES.
59. **proposed client authority contract name:** `PR3-BROWSER-CAPTURE-WEBSOCKET-CLIENT-AUTHORITY-v1`.
60. **proposed client authority fields:** `transportKind`; helper/Node adapter/IPC test source identities; runtime and OS identities; PowerShell/PSEdition; CLR/.NET Framework; ClientWebSocket assembly; helper executable path; browser path/version; IPC protocol version; timeout authority; canonical request/response contract; semantic source inclusion; failure classifications.
61. **PR3-RUN-IDENTITY-v2 changed NO:** NO.
62. **Phase Bridge changed NO:** NO.
63. **toolchain authority decision:** `TOOLCHAIN-AUTHORITY-EXPANSION-REQUIRED`.
64. **package/toolchain provenance follow-up status:** OPEN and must be closed by the implementation/authority qualification before Restart4; no package change is required for the selected Option A.
65. **prototype executed YES/NO:** NO; no prototype was needed for this design-only checkpoint.
66. **prototype client:** not applicable.
67. **prototype Edge Runtime.evaluate result:** not applicable; the prior independent-client diagnostic supplied feasibility evidence, not prototype evidence.
68. **prototype result classification:** NON-EVIDENCE / NOT EXECUTED.
69. **production correction applied NO:** NO.
70. **focused tests count/result:** current retained focused suite `58/58 PASS`; prior framing suite `12/12 PASS`; combined qualification `70/70 PASS`.
71. **prototype tests count/result if any:** 0; no prototype tests executed.
72. **node --check:** PASS for the inspected Browser Capture JavaScript source; no new helper JavaScript was added.
73. **PowerShell syntax validation if applicable:** NOT APPLICABLE; no PowerShell helper was implemented in this design checkpoint.
74. **npm test:** PASS, `309/309`.
75. **npm lint:** PASS.
76. **npm build:** PASS.
77. **dependency install occurred YES/NO:** YES; exact-lockfile `npm ci --ignore-scripts` in the fresh design clone.
78. **new dependency installed NO:** NO; only the existing lockfile dependency set was restored.
79. **package.json changed NO:** NO.
80. **package-lock changed NO:** NO.
81. **Edge launches in prototype:** 0.
82. **Chrome launches:** 0 in this design checkpoint.
83. **Firefox launches:** 0.
84. **GPU fatal count:** 0 in this design checkpoint; no browser was launched.
85. **cache-lock count:** 0 in this design checkpoint; no browser was launched.
86. **teardown:** NOT APPLICABLE; no prototype process.
87. **quiescence:** NOT APPLICABLE; no prototype process.
88. **screenshots:** 0.
89. **real B1 evidence executed:** NO.
90. **historical Restart3 modified YES/NO:** NO.
91. **Restart3 resumable YES/NO:** NO; no Restart3 resume was performed.
92. **old semantic ID reusable YES/NO:** NO.
93. **fresh semantic ID minted YES/NO:** NO.
94. **Restart4 created YES/NO:** NO.
95. **V3 executed:** 0.
96. **Browser Evidence B:** `NONE / INCOMPLETE`.
97. **Human Review:** not started.
98. **Review1 eligible:** NO.
99. **E-VISUAL:** not reached.
100. **ranking:** not reached; this is not a PR-3 candidate ranking.
101. **selection of PR3 candidate:** not reached.
102. **Product integration:** unchanged; no integration performed.
103. **PR-3:** NO.
104. **exact next prerequisite:** `E2R-LIAISONSCAPE-...-BROWSER-CAPTURE1-DOTNET-WEBSOCKET-BRIDGE-IMPLEMENTATION1`, including helper/adapter/IPC implementation, identity binding, focused IPC tests, and fresh qualification.
105. **next checkpoint NOT STARTED:** YES.
106. **diagnostic/design root:** `diagnostics/websocket-client-authority-replacement-design-correction1/`.
107. **design clone commit hash/subject:** `2f8d95f3a0bec7efdc2dcdae17a7523fee088b34`, `docs: design Browser Capture WebSocket client authority`.
108. **design clone final state:** clean, detached at the design commit, unpushed.
109. **result document:** this document.
110. **roadmap changed/unchanged:** changed additively with this checkpoint entry.
111. **Knowledge Candidate:** candidate-only observation; no new knowledge entry created.
112. **ai-knowledge changed/unchanged:** unchanged.
113. **e2r-spec validation:** PASS, `npm.cmd run validate`.
114. **diff-check:** PASS, `git diff --check`.
115. **e2r-spec commit hash/subject:** to be supplied by the final documentation commit; subject `docs: design Browser Capture WebSocket client replacement`.
116. **e2r-spec worktree:** clean after the final documentation commit; unpushed.
117. **Live Product unchanged YES/NO:** YES.
118. **protected samples preserved YES/NO:** YES.
119. **Machine clone unchanged YES/NO:** YES.
120. **Original Harness unchanged YES/NO:** YES.
121. **retained materializer unchanged YES/NO:** YES.
122. **Baseline2 unchanged YES/NO:** YES.
123. **browser policy changed NO:** NO.
124. **registry changed NO:** NO.
125. **firewall/security settings changed NO:** NO.
126. **Windows Update changed NO:** NO.
127. **GPU driver changed NO:** NO.
128. **graphics settings changed NO:** NO.
129. **`--disable-gpu-sandbox` used NO:** NO.
130. **push/tag/release/deploy/publication NONE:** NONE.

The design stops here. No production transport file, semantic manifest,
run identity, phase bridge, Product behavior, B1 evidence, V3 evidence,
screenshot, Restart4, or fresh semantic ID was changed or created.
