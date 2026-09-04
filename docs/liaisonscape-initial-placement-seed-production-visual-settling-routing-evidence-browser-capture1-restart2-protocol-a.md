# LiaisonScape Browser Capture1 Restart2 Protocol A

- Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1-RESTART2-PROTOCOL-A`
- Date: 2026-09-04 (JST)
- Result: **CASE 2 / DECISION B — `RESTART2-IDENTITY-BINDING-BLOCKED`**
- Binding classification: **`IDENTITY-BINDING-B`**

## Why this stopped

The preceding entry-seam correction passed the single permitted
`apollo-11/en` validation, but it changed the bytes of
`experimental/product-evaluation-seam/browser-capture1/main.tsx` after
Restart1 Protocol A. The exact current e2r-spec HEAD was
`ff15a1bb003bd14f0da52f8ed2b04f40318edeef` and its worktree was clean.

The correction result documentation was introduced by
`f59fd2290022b3d27a1005ec25916b76b4a82df1` (`docs: record LiaisonScape
Restart1 B1 entry-seam correction`); `d27bb8c6f443ce915be6599c5a5a53f11f7423ee`
recorded the final documentation identity, and
`ff15a1bb003bd14f0da52f8ed2b04f40318edeef` aligned that record.

The old Restart1 authority remains
`C:\Users\extra\E2R\e2r-liaison-scape-visual-evidence-browser-capture-restart1`
at `6b3e9f16424de283248298cb03e0f42c8a9eb9e7`. The correction authority is
`C:\Users\extra\E2R\e2r-liaison-scape-browser-capture-b1-entry-seam-correction1`
at `4e7489c14618d9732c1e66aa7ef4852e2b03ea2b`.

## Identity-schema inspection

The accepted Restart1 `PR3-RUN-IDENTITY-v1` input was inspected in
`artifacts/browser-capture-restart1-2026-09-04/identity-input.json` and the
Protocol A generator in
`experimental/product-evaluation-seam/browser-capture1/browser-capture.mjs`.
The identity input has `productAuthority`, `harnessAuthority`, materializer,
fixture, machine, runtime transform, settling, routing, labels, viewport,
browser, execution-plan, V2, and B1 fields. Its Protocol A `sourceIdentities`
list binds Product files and the retained Harness-side smoke entry/wrapper,
but it does not bind the corrected
`experimental/product-evaluation-seam/browser-capture1/main.tsx`, the B1
executor, or the correction clone commit.

The exact legitimate identity field for the corrected implementation is:
**NONE**. `harnessAuthority: 9bd3f3b819bf07ccdfa0339be9a953d045c4e4fc` alone is
not sufficient provenance for bytes changed in the correction clone. No new
identity field or schema was invented here. Therefore the result is
**`IDENTITY-BINDING-B — EXISTING SCHEMA CANNOT BIND CORRECTED IMPLEMENTATION`**.

The corrected source identities were nevertheless resolved for the blocked
decision:

- `main.tsx` Git blob: `b671e09d2729fc8ac1002ed2bc0740f1107baefd`
- `main.tsx` raw SHA-256: `116B684D3D87C3FBA58C5EBEA64182650324125BCB0F2BD3DD30A50024AB9F49`
- `entry.test.ts` Git blob: `eb9f86b2e4d6c8df7f48854184966768e28a928b`
- `entry.test.ts` raw SHA-256: `C3F3EFCF9D1ED3CBB8289D028132CDD250BA090D6B5F1FA2856B86D01E748B61`

Because the accepted schema cannot bind those corrected implementation bytes,
no Restart2 semantic ID was minted. The old original failed ID
`pr3r1-95ff619e25deb4c5edc281041bf6c4d32324e6765c4f5999a98ff68a343d8762`
and the Restart1 ID
`pr3r1-6560dd8187ddaa1ff002034ab99ffe91a3336b430f449cc1f1c7da85e26659d9`
remain distinct historical IDs and were not reused.

## Preserved authorities and state

The correction validation authority was Edge Stable
`C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe`, version
`152.0.4191.62`, with no observed authority drift. Runtime readiness remains
the prior `BROWSER-RUNTIME-READY` authority: e2r-spec result commit
`235ef6193f07741874185bb843164860752015b8b`, diagnostic final HEAD
`8f8c3871496a392324f03b970a55b07f22d42a4b`, Edge normal-sandbox 6/6 PASS,
GPU fatal `0`, cache-lock `0`, and quiescence `6/6`. The correction validation
also passed one item with first CDP `447 ms` and no runtime/GPU failure.

The host snapshot remains Windows 11 Home 25H2 build `26200.9168`, KB5120998
not installed, Intel UHD Graphics, driver `32.0.101.7088`. Machine Protocol is
`06f66142812be03a8a3a138e2b774cbc9926b91f`; Machine Evidence B is
`b0bd0f1a9f70915c639cbee61cf5f8370c78766f`; machine run ID is
`machine-execution1-2026-09-03`; artifact index SHA-256 is
`03D11E6A1EBCBBE548BA2722F48FDE971499E9806DD50C746B80C147FD0462AD`; run
manifest SHA-256 is
`45F5186426D57688203315EDFB3AA6D97CA597C4C8F7F95844EE1AEF6415C75C`.
Machine was not rerun.

Product authority is `563d5bc3ce8d3a915c75dd13b33188ae6f7fccaf`; its committed
`src/auto-layout.ts` raw SHA-256 is
`63547927D0B5DE990D596EEAF5925A7877F2677165A3DF676DA9123FC3030212`.
Harness authority is `9bd3f3b819bf07ccdfa0339be9a953d045c4e4fc`. Materializer
authority is `fd563340625fd3d88dc25baedc93c4f8fe69e5e7`; transform fingerprint
is `102F16DCEF44096686B67B34BDF385A5E71DDDC085183F0B9BA65F9785C34786`.
Fixture manifest SHA-256 is
`B867E9FF7B84107E8B4DDCCC02458B7B9AA535AB6FACE4AD10A2942CC8C8D8F5`.

The candidate registry remains exactly five: `TA0/REP-0`,
`TA2-DEG-W1-OP-v1`, `TA2-MOTIF-W1-OP-v1`, `TA3-FWD-W1-OP-v1`, and
`TA3-REV-W1-OP-v1`. The V2 eligible set remains count `80`, SHA-256
`E891C747394C492AE1D56AA1518F2E596E96756985BCBFBDFC93323070CC162C`; the
fresh B1 parent set remains count `16`, SHA-256
`B02C9075A2758CF953F3D6BF50CC852E8394C0357A127F3B559708899D216335`.
Viewport remains `1280 x 900`, DSF `1`, zoom `100%`, viewBox
`0 0 800 500`. The corrected input contract is
`new URL("/capture-input.json", location.origin)`, JSON `200`, with no HTML
fallback. The ready predicate and timeout remain unchanged:
`globalThis.__E2R_BROWSER_READY__ === true`, initial attempt `1`, maximum
retries `2`, maximum attempts `3`.

## Final report

1. Case: `CASE 2`
2. Decision: `RESTART2-IDENTITY-BINDING-BLOCKED`
3. Exact e2r-spec starting HEAD: `ff15a1bb003bd14f0da52f8ed2b04f40318edeef`
4. e2r-spec reported-head reconciliation: current HEAD is `ff15a1...`; f59fd22 added the correction result, d27bb8c and ff15a1b are follow-ups
5. Correction result docs authority: `f59fd2290022b3d27a1005ec25916b76b4a82df1`
6. Blocked Restart1 authority: `6b3e9f16424de283248298cb03e0f42c8a9eb9e7`
7. Restart1 semantic ID: `pr3r1-6560dd8187ddaa1ff002034ab99ffe91a3336b430f449cc1f1c7da85e26659d9`
8. Correction clone path: `C:\Users\extra\E2R\e2r-liaison-scape-browser-capture-b1-entry-seam-correction1`
9. Correction authority: `4e7489c14618d9732c1e66aa7ef4852e2b03ea2b`
10. Corrected `main.tsx` Git blob: `b671e09d2729fc8ac1002ed2bc0740f1107baefd`
11. Corrected `main.tsx` raw SHA-256: `116B684D3D87C3FBA58C5EBEA64182650324125BCB0F2BD3DD30A50024AB9F49`
12. Identity schema inspected: `YES`
13. Exact binding field: `NONE`
14. Identity binding: `IDENTITY-BINDING-B`
15. Restart2 clone path: **NOT CREATED**
16. Restart2 clone base: **NONE — binding gate stopped first**
17. Fresh artifact root: **NONE — Protocol A not minted**
18. Windows build: Windows 11 Home 25H2 `26200.9168`
19. KB5120998 installed: `NO`
20. GPU driver: Intel UHD Graphics `32.0.101.7088`
21. Edge path: `C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe`
22. Edge version: `152.0.4191.62`
23. Browser authority drift: `NO`
24. Readiness authority: `BROWSER-RUNTIME-READY`, `8f8c3871496a392324f03b970a55b07f22d42a4b`
25. Correction validation bound: `YES` (reference only; not an identity substitute)
26. Product authority: `563d5bc3ce8d3a915c75dd13b33188ae6f7fccaf`
27. Product auto-layout raw SHA: `63547927D0B5DE990D596EEAF5925A7877F2677165A3DF676DA9123FC3030212`
28. Harness authority: `9bd3f3b819bf07ccdfa0339be9a953d045c4e4fc`
29. Corrected Browser Capture implementation authority: `4e7489c14618d9732c1e66aa7ef4852e2b03ea2b` (not representable in accepted identity input)
30. Machine Protocol: `06f66142812be03a8a3a138e2b774cbc9926b91f`
31. Machine Evidence B: `b0bd0f1a9f70915c639cbee61cf5f8370c78766f`
32. Machine run ID: `machine-execution1-2026-09-03`
33. Machine artifact index SHA: `03D11E6A1EBCBBE548BA2722F48FDE971499E9806DD50C746B80C147FD0462AD`
34. Machine run manifest SHA: `45F5186426D57688203315EDFB3AA6D97CA597C4C8F7F95844EE1AEF6415C75C`
35. Machine rerun: `NO`
36. Materializer authority: `fd563340625fd3d88dc25baedc93c4f8fe69e5e7`
37. Transform fingerprint: `102F16DCEF44096686B67B34BDF385A5E71DDDC085183F0B9BA65F9785C34786`
38. Fixture manifest SHA: `B867E9FF7B84107E8B4DDCCC02458B7B9AA535AB6FACE4AD10A2942CC8C8D8F5`
39. Candidate count: `5`
40. Candidate IDs: five IDs listed above
41. V2 count: `80`
42. V2 SHA: `E891C747394C492AE1D56AA1518F2E596E96756985BCBFBDFC93323070CC162C`
43. B1 count: `16`
44. B1 SHA: `B02C9075A2758CF953F3D6BF50CC852E8394C0357A127F3B559708899D216335`
45. Restart2 initial B1 executed: `0`
46. Restart2 initial B1 pending: `16`
47. Viewport: `1280 x 900`
48. DSF: `1`
49. Zoom: `100%`
50. SVG viewBox: `0 0 800 500`
51. Corrected input URL contract: `new URL("/capture-input.json", location.origin)`
52. Ready predicate changed: `NO`
53. Normal-sandbox confirmed: `YES`
54. `--disable-extensions` present: `YES`
55. `--disable-gpu-sandbox` used: `NO`
56. Retry policy: initial `1`, max retries `2`, max attempts `3`
57. B1-first gate: `YES`
58. Planned V3 count: `80`
59. New phase-local run ID: **NONE — Protocol A blocked**
60. New semantic ID: **NONE — not minted**
61. Original failed semantic ID: `pr3r1-95ff619e25deb4c5edc281041bf6c4d32324e6765c4f5999a98ff68a343d8762`
62. Restart1 semantic ID: `pr3r1-6560dd8187ddaa1ff002034ab99ffe91a3336b430f449cc1f1c7da85e26659d9`
63. All semantic IDs distinct: `YES` (no new ID minted)
64. Difference reason: corrected implementation bytes changed after Protocol A, but accepted identity input has no binding field
65. Canonical identity: `NOT RUN — binding gate blocked`
66. Old Restart1 resumed: `NO`
67. Old execution artifacts reused: `NO`
68. B1 executed: `0`
69. V3 executed: `0`
70. Screenshots: `0`
71. Browser Evidence B: `NONE`
72. Human Review: `NO`
73. Review1 eligible: `NO`
74. E-VISUAL: `NO`
75. Ranking: `NO`
76. Selection: `NO`
77. Product integration: `NO`
78. PR-3: `NO`
79. Restart2 eligible for B1 execution: `NO`
80. Exact next prerequisite: bounded Browser Capture implementation authority / PR3 run-identity design correction checkpoint
81. Next checkpoint: `NOT STARTED`
82. Restart2 Protocol A artifact path: **NONE**
83. Focused tests: correction validation authority previously passed `5/5` static tests and one-item browser validation; no new protocol tests run
84. Syntax checks: correction scripts passed `node --check`
85. Restart2 commit: **NONE — no fake prepared Protocol A**
86. Restart2 final worktree: **NOT CREATED**
87. Result document: this document
88. Roadmap: changed additively
89. Knowledge Candidate: candidate only / no new entry
90. `ai-knowledge`: unchanged
91. e2r-spec validation: `PASS` (after this document update)
92. Diff-check: `PASS`
93. e2r-spec commit: recorded after this document is committed
94. e2r-spec worktree: clean after final commit
95. Live Product unchanged: `YES`
96. Protected samples preserved: `YES`
97. Machine clone unchanged: `YES`
98. Original Harness unchanged: `YES`
99. Retained materializer unchanged: `YES` (pre-existing `?? experimental/` preserved)
100. Baseline2 unchanged: `YES`
101. Windows Update changed: `NO`
102. GPU driver changed: `NO`
103. Graphics settings changed: `NO`
104. Push/tag/release/deploy/publication: `NONE`
