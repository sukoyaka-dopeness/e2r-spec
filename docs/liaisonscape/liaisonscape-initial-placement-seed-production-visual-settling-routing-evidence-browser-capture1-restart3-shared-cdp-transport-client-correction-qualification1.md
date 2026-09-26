# E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1-RESTART3-SHARED-CDP-TRANSPORT-CLIENT-CORRECTION-QUALIFICATION1

Date: 2026-09-04 (Asia/Tokyo)

Bounded non-evidence qualification. Historical Restart3 is not resumed; B1,
V3, screenshots, Browser Evidence B, Restart4, and fresh semantic IDs are not
created.

## Result

CASE 5 / DECISION E — `SHARED-CDP-WEBSOCKET-TRANSPORT-BLOCKED`.

Production `Cdp.call` already supplies a primitive JavaScript string containing
the exact one-command JSON. Explicit text and binary controls both fail at the
direct target WebSocket in Edge and Chrome. Edge `/json/version` and browser
WebSocket OPEN plus `Target.getTargets` work, but `Target.attachToTarget`
closes before returning a `sessionId`. No serialization correction or broad
client rewrite is justified. The next prerequisite is a bounded shared CDP
WebSocket/client transport diagnostic or design correction.

## Authority and preservation

- e2r-spec starting HEAD: `43b66eb9065964a477f55ed4d90ee572a3ef4213`
- Historical Restart3 clone: `C:\Users\extra\E2R\e2r-liaison-scape-visual-evidence-browser-capture-restart3`
- Historical Restart3 HEAD: `45a8a1c55a41f767b3f22ad963321dda6fd9a755`
- Historical semantic ID: `pr3r1-e8af40d999fb33bf7efb46b135121eca81f1e33deb17e96c14670265d2929461`
- Historical B1: planned 16 / executed 1 / success 0 / failure 1 / pending 15.
- Historical V3: 0; Browser Evidence B: `NONE / INCOMPLETE`.
- Fresh correction clone: `C:\Users\extra\E2R\e2r-liaison-scape-browser-cdp-transport-client-correction1`
- Fresh clone base: semantic commit `f2d25e98d75aa208e176105a5b33acc2d6742aa5`.
- Diagnostic `c83bd5dc6915fdca594c6cc33bc876f8d59e7bf6` was not used as the semantic base.
- Starting semantic authority: `PR3-BROWSER-CAPTURE-IMPLEMENTATION-AUTHORITY-v1` at `f2d25e98d75aa208e176105a5b33acc2d6742aa5`.

## Wire qualification

Node `v24.18.0`; npm `11.16.0`; `process.versions.undici` `7.28.0`.
Production uses Node global `WebSocket`, source `new WebSocket(url)`, with no
local WebSocket/CDP dependency. No independent client was already resolvable:
`INDEPENDENT-WS-CONTROL-NOT-AVAILABLE`.

Exact production trace:

```text
command = {"id":1,"method":"Runtime.evaluate","params":{"expression":"1 + 1","returnByValue":true}}
serialized = {"id":1,"method":"Runtime.evaluate","params":{"expression":"1 + 1","returnByValue":true}}
length = 89; UTF-8 bytes = 89
typeof payload = string; constructor = String
Buffer.isBuffer = false; ArrayBuffer = false; ArrayBufferView = false
BOM = NO; NUL = NO; trailing newline = NO; concatenated messages = NO
send = this.ws.send(JSON.stringify({ id, method, params }))
```

The focused test observes the real production send argument: framing checks
pass `12/12`, including exact JSON round-trip, request ID, text/binary
distinction, no BOM/NUL/newline, and no concatenation. H1 is verified; H2/H3
are not present; H4 remains the interpretation.

## Real browser controls

Frozen launch contract was retained: `--headless=new`, `--disable-gpu`,
`--disable-extensions`, `--no-first-run`, `--no-default-browser-check`, fresh
profile, unique remote-debugging port/address, scale factor 1, and
`--window-size=1280,900`. `--disable-gpu-sandbox` was not used.

| Control | Result |
|---|---|
| Edge direct target / text | target selection PASS; OPEN PASS; send returned; no response; error 1; close `1006` / empty reason |
| Edge direct target / binary Buffer | target selection PASS; OPEN PASS; send returned; no response; error 1; close `1006` / empty reason |
| Chrome direct target / text | target selection PASS; OPEN PASS; no successful response; error 1; close `1006` / empty reason |
| Chrome direct target / binary Buffer | target selection PASS; OPEN PASS; no response; error 1; close `1006` / empty reason |
| Edge browser endpoint | `/json/version` PASS; browser WebSocket OPEN PASS; text `Target.getTargets` response PASS |
| Edge attached session | `Target.attachToTarget` no response; no `sessionId`; error 1; close `1006` / empty reason |

The exact expected application page target was found. The first browser-endpoint
inbound message was the JSON response to `Target.getTargets`. The attach frame
used `Target.attachToTarget` with `{targetId: <selected-target-id>, flatten: true}`.
No session-scoped `Runtime.evaluate` was sent because no session ID was
returned. This is Decision E, not Decision D. The prior
`--remote-allow-origins=*` diagnostic also did not resolve the failure.

Firefox was not launched: `FIREFOX-CONTROL-NOT-RELEVANT-TO-CURRENT-CDP-TRANSPORT-SEAM`.

## Semantic scope and gates

No production correction was applied; valid text framing already existed.
The semantic authority remains `f2d25e98d75aa208e176105a5b33acc2d6742aa5`.
Target-selection, CDP safety, run-binding, retry, capture-input, viewport,
launch, and Page-domain contracts remain unchanged. Generic production
`Runtime.evaluate`, `Runtime.enable`, `Page.enable`, readyState, URL,
evaluation-root, SVG, and ready marker were not reached after a correction
because no correction was made. No B1 retry was entered.

Authority self-check: PASS; manifest 19; closure 19; omitted 0; unexpected 0.
`main.tsx` blob `b671e09d2729fc8ac1002ed2bc0740f1107baefd`, raw SHA-256
`116B684D3D87C3FBA58C5EBEA64182650324125BCB0F2BD3DD30A50024AB9F49`.
Executor blob `0a6570f63ca71cc15114a1bacd73eea7504a26aa`, raw SHA-256
`7AD447E620C6160CB5DD008E6F481DB005F418CFB7D9E702A66A57802AD8798C`; old
and final identities are equal.

Retained focused regressions pass `58/58`; framing checks pass `12/12`.
`node --check` passes for executor, framing test, probes, and summary helper.
Exact-lockfile `npm ci --ignore-scripts` was run; full `npm test` is `309/309
PASS`, lint PASS, build PASS. `package.json` and `package-lock.json` are
unchanged.

## Non-evidence and protected state

Real B1 evidence 0; Restart3 unchanged and not resumable; old semantic ID not
reusable; fresh semantic ID not minted; Restart4 not created; V3 0; screenshots
0; Browser Evidence B `NONE / INCOMPLETE`; Human Review/Review1 not eligible;
E-VISUAL, ranking, selection, and PR-3 not started.

Edge launches 5 (`C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe`,
`Edg/152.0.4191.62`); Chrome launches 4 (`C:\Program Files\Google\Chrome\Application\chrome.exe`,
`Chrome/152.0.7977.75`); Firefox 0; Vite 0; direct-target CDP sessions 8;
browser-endpoint sessions 1; GPU fatal 0; cache-lock 0; teardown/quiescence
PASS. Product, protected samples, Machine, Harness, materializer, Baseline2,
Windows Update, GPU driver, graphics settings, and `ai-knowledge` are
unchanged. Package/toolchain provenance is OPEN. Knowledge candidate only;
no new entry.

Diagnostics root:
`C:\Users\extra\E2R\e2r-liaison-scape-browser-cdp-transport-client-correction1\diagnostics\restart3-shared-cdp-transport-client-correction-qualification1\`

## Required 133-field handoff

1. CASE: `CASE 5`.
2. Decision: `DECISION E`.
3. Semantic impact classification: none in this checkpoint; no production bytes changed.
4. Exact e2r-spec starting HEAD: `43b66eb9065964a477f55ed4d90ee572a3ef4213`.
5. Historical Restart3 clone/HEAD: `C:\Users\extra\E2R\e2r-liaison-scape-visual-evidence-browser-capture-restart3`, `45a8a1c55a41f767b3f22ad963321dda6fd9a755`.
6. Historical Restart3 semantic ID: `pr3r1-e8af40d999fb33bf7efb46b135121eca81f1e33deb17e96c14670265d2929461`.
7. Historical B1 state: planned 16 / executed 1 / success 0 / failure 1 / pending 15.
8. Correction clone path/base: `C:\Users\extra\E2R\e2r-liaison-scape-browser-cdp-transport-client-correction1` at `f2d25e98d75aa208e176105a5b33acc2d6742aa5`.
9. Node version: `v24.18.0`.
10. npm version: `11.16.0`.
11. Production WebSocket implementation: Node global `WebSocket`.
12. WebSocket implementation version/source: global `new WebSocket(url)`, runtime Undici `7.28.0`.
13. Pre-edit outbound payload typeof: `string`.
14. Outbound payload constructor: `String`.
15. `Buffer.isBuffer`: `false`.
16. ArrayBuffer/ArrayBufferView status: both `false`.
17. Exact outbound JSON command: `{"id":1,"method":"Runtime.evaluate","params":{"expression":"1 + 1","returnByValue":true}}`.
18. JSON string length: `89`.
19. UTF-8 byte length: `89`.
20. BOM present: `NO`.
21. NUL present: `NO`.
22. Trailing newline present: `NO`.
23. Concatenated messages: `NO`.
24. Inferred/verified production frame type: verified text payload.
25. Edge text-frame OPEN: `PASS`.
26. Edge text-frame command response: `NO`.
27. Edge text-frame result: no response; send returned; error 1.
28. Edge text-frame close code/reason: `1006` / empty.
29. Edge binary-frame test executed: `YES`.
30. Edge binary-frame result: no response; same failure.
31. Edge binary-frame close code/reason: `1006` / empty.
32. Chrome text-frame result: no successful response; error 1.
33. Chrome text-frame close code/reason: `1006` / empty.
34. Chrome binary-frame result: no response; same failure.
35. Root cause classification: `SHARED-CDP-WEBSOCKET-TRANSPORT-BLOCKED`.
36. Text-vs-binary root cause confirmed: `NO`.
37. Browser-level endpoint probe executed: `YES`.
38. Browser WebSocket OPEN result: `PASS`.
39. `Target.getTargets` result: `PASS`.
40. Exact expected target found: `YES`.
41. `Target.attachToTarget` result: no response before close.
42. sessionId obtained: `NO`.
43. Session-scoped `Runtime.evaluate` result: not reached.
44. Direct-target vs browser-session classification: both blocked; Decision E.
45. Independent WS control available: `NO`.
46. Independent WS client/version/result: not available; no dependency installed.
47. Firefox control classification: not relevant to current CDP transport seam.
48. Production correction summary: none; valid text was already present.
49. Files changed: diagnostics in fresh correction clone; e2r-spec result doc and roadmap.
50. `Runtime.evaluate 1+1` after correction: not reached; no correction.
51. `Runtime.enable` result: not reached.
52. `Page.enable` result: not reached.
53. `document.readyState`: not reached.
54. `location.href`: not reached.
55. Evaluation root: not reached.
56. SVG: not reached.
57. Ready marker: not reached.
58. Operator stop required: `NO`; bounded probes terminated automatically.
59. Target-selection regression: `PASS`.
60. Run-binding regression: `PASS`.
61. Retry regression: `PASS`.
62. `main.tsx` blob/raw SHA: `b671e09d2729fc8ac1002ed2bc0740f1107baefd` / `116B684D3D87C3FBA58C5EBEA64182650324125BCB0F2BD3DD30A50024AB9F49`.
63. `main.tsx` unchanged: `YES`.
64. Old executor blob/raw SHA: `0a6570f63ca71cc15114a1bacd73eea7504a26aa` / `7AD447E620C6160CB5DD008E6F481DB005F418CFB7D9E702A66A57802AD8798C`.
65. Final executor blob/raw SHA: same as old; exact values above.
66. Executor changed: `NO`.
67. Final semantic repositoryAuthority commit: `f2d25e98d75aa208e176105a5b33acc2d6742aa5`.
68. Semantic manifest count: `19`.
69. Closure count: `19`.
70. Omitted imports: `0`.
71. Unexpected imports: `0`.
72. Authority self-check: `PASS`.
73. Focused tests count/result: framing `12/12 PASS`; retained CDP/target/run/authority `58/58 PASS`.
74. `node --check`: `PASS`.
75. npm test: `309/309 PASS`.
76. npm lint: `PASS`.
77. npm build: `PASS`.
78. Dependency install occurred: `YES`, exact-lockfile `npm ci --ignore-scripts` only.
79. `package.json` changed: `NO`.
80. `package-lock` changed: `NO`.
81. Edge path/version: `C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe`, `Edg/152.0.4191.62`.
82. Chrome path/version: `C:\Program Files\Google\Chrome\Application\chrome.exe`, `Chrome/152.0.7977.75`.
83. Edge launch count: `5`.
84. Chrome launch count: `4`.
85. Firefox launch count: `0`.
86. Vite launch count: `0`.
87. CDP session count: direct target `8`, browser endpoint `1`.
88. GPU fatal count: `0`.
89. Cache-lock count: `0`.
90. Teardown PASS count: `5` final probe artifacts; all final probes PASS teardown.
91. Quiescence PASS count: `5` final probe artifacts; all final probes PASS quiescence.
92. Screenshots: `0`.
93. Real B1 evidence executed: `0`.
94. Historical Restart3 modified: `NO`.
95. Restart3 resumable: `NO`.
96. Old semantic ID reusable: `NO`.
97. Fresh semantic ID minted: `NO`.
98. Restart4 created: `NO`.
99. V3 executed count: `0`.
100. Browser Evidence B: `NONE / INCOMPLETE`.
101. Human Review: not started.
102. Review1 eligible: `NO`.
103. E-VISUAL: not produced.
104. Ranking: not started.
105. Selection: not started.
106. Product integration: unchanged; not re-qualified as evidence.
107. PR-3: `NO`.
108. Exact next prerequisite: bounded shared CDP WebSocket/client transport diagnostic or design correction.
109. Next checkpoint: NOT STARTED.
110. Diagnostic root: `diagnostics/restart3-shared-cdp-transport-client-correction-qualification1/`.
111. Semantic correction commit hash/subject: none; no production correction proven.
112. Diagnostic commit hash/subject: `72a4a60` — `docs: record Browser Capture CDP transport qualification`; no push.
113. Correction clone final state: diagnostic artifacts present, production source unchanged, clean after local diagnostic commit.
114. Result document: this file.
115. Roadmap changed/unchanged: changed additively.
116. Knowledge Candidate: candidate only / no new entry.
117. `ai-knowledge` changed/unchanged: unchanged; pre-existing dirty playbook preserved.
118. Package/toolchain provenance follow-up: `OPEN`.
119. e2r-spec validation: PASS (`npm.cmd run validate`).
120. Diff-check: PASS.
121. e2r-spec commit hash/subject: to be recorded after documentation commit; no push.
122. e2r-spec worktree: clean after documentation commit.
123. Live Product unchanged: `YES`.
124. Protected samples preserved: `YES`.
125. Machine clone unchanged: `YES`.
126. Original Harness unchanged: `YES`.
127. Retained materializer unchanged: `YES`.
128. Baseline2 unchanged: `YES`.
129. Windows Update changed: `NO`.
130. GPU driver changed: `NO`.
131. Graphics settings changed: `NO`.
132. `--disable-gpu-sandbox` used: `NO`.
133. Push/tag/release/deploy/publication: `NONE`.

## Stop boundary

Stop after Shared CDP Transport / Client Correction Qualification1. Do not
resume Restart3, execute B1/V3, mint a new semantic ID, or create Restart4
until the shared transport seam receives a separately authorized bounded
correction/design checkpoint.
