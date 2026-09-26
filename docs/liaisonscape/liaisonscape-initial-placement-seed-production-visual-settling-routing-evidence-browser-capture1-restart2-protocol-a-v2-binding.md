# LiaisonScape Browser Capture1 Restart2 Protocol A v2 Binding

- Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1-RESTART2-PROTOCOL-A`
- Date: `2026-09-04` (JST)
- Result: **CASE 1 / DECISION A - `RESTART2-PROTOCOL-A-READY`**
- Binding classification: **`IDENTITY-BINDING-A`**
- Starting e2r-spec HEAD: `04e3c7a36467cf6e9b586362a6e89d24d80aaa4b`

## Outcome

Restart2 Protocol A is prepared and ready for the next bounded B1 execution
checkpoint. A fresh clone was created from the implemented Browser Capture
authority commit, rather than from the historical Restart1 lineage:

`C:\Users\extra\E2R\e2r-liaison-scape-visual-evidence-browser-capture-restart2`

The clone was based exactly on
`b9b6530ecc937dc2d7dcb9b661445f6c301444a5` and the Protocol A artifacts and
focused test were committed as
`0254dfccd6aea3e4fd8dfa96d1f7009ddf5657cb` (`evidence: bind Browser Capture
Restart2 Protocol A v2 authority`). The final Restart2 worktree is clean.

The previous blocked result remains historical and was not overwritten:
[Restart2 Protocol A blocked result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-restart2-protocol-a.md).
Its correction authority was
`4e7489c14618d9732c1e66aa7ef4852e2b03ea2b`. The implementation design
authority was `b07062e8e487b47c2669891510088da37fa41c1`, and the implemented
authority is `b9b6530ecc937dc2d7dcb9b661445f6c301444a5`.

## Protocol A artifact binding

The fresh artifact root is:

`C:\Users\extra\E2R\e2r-liaison-scape-visual-evidence-browser-capture-restart2\artifacts\browser-capture-restart2-2026-09-04`

It contains exactly these eight files and no B1/V3 output:

- `b1-pending-set.json`
- `eligible-v2-set.json`
- `browser-capture-implementation-authority.json`
- `identity-input.json`
- `phase-plan.json`
- `phase-bridge.json`
- `protocol-a.json`
- `run-manifest.json`

The implementation authority contract is
`PR3-BROWSER-CAPTURE-IMPLEMENTATION-AUTHORITY-v1`; its repository authority
is `e2r-liaison-scape-browser-capture` at commit
`b9b6530ecc937dc2d7dcb9b661445f6c301444a5`. The frozen semantic manifest has
19 paths. The post-commit self-check returned closure **19**, omitted **0**,
and unexpected **0**.

The corrected entry identity is:

- `experimental/product-evaluation-seam/browser-capture1/main.tsx`
  - Git blob: `b671e09d2729fc8ac1002ed2bc0740f1107baefd`
  - raw SHA-256: `116B684D3D87C3FBA58C5EBEA64182650324125BCB0F2BD3DD30A50024AB9F49`
- `experimental/product-evaluation-seam/browser-capture1/browser-capture.mjs`
  - Git blob: `9bd30e1f5a6a7136a3fa78fd002369c7a089fec9`
  - raw SHA-256: `302FF3D53F6C9D2110F4A9C4254185FF0FDD4B9376D7B212EE3BD5B8F7E5737A`

The identity input uses `PR3-RUN-IDENTITY-v2`; the phase bridge uses
`PR3-PHASE-BRIDGE-v2`. The canonical identity input SHA-256 is
`4BA49E9F8D9AD79112B4A3CFAFF95AA01648EEBA1EB8E181ED0E2C725510206A`.
The first legitimate Restart2 production semantic ID is:

`pr3r1-4ba49e9f8d9ad79112b4a3cfaff95aa01648eeba1eb8e181ed0e2c725510206a`

It is distinct from the old failed ID
`pr3r1-95ff619e25deb4c5edc281041bf6c4d32324e6765c4f5999a98ff68a343d8762`
and the Restart1 ID
`pr3r1-6560dd8187ddaa1ff002034ab99ffe91a3336b430f449cc1f1c7da85e26659d9`.
The semantic difference is the v2 contract plus the corrected Browser Capture
implementation authority bytes; it is not a run label, timestamp, or
phase-local ID change.

The artifact records bind the existing parent evidence without rerunning it:

- Product authority: `563d5bc3ce8d3a915c75dd13b33188ae6f7fccaf`
- Product `src/auto-layout.ts` Git blob: `a7bb99d6628fe127eef7defe9ffdd957591de150`
- Product `src/auto-layout.ts` raw SHA-256: `63547927D0B5DE990D596EEAF5925A7877F2677165A3DF676DA9123FC3030212`
- Harness authority: `9bd3f3b819bf07ccdfa0339be9a953d045c4e4fc`
- Materializer authority: `fd563340625fd3d88dc25baedc93c4f8fe69e5e7`
- Fixture manifest SHA-256: `B867E9FF7B84107E8B4DDCCC02458B7B9AA535AB6FACE4AD10A2942CC8C8D8F5`
- Transform fingerprint: `102F16DCEF44096686B67B34BDF385A5E71DDDC085183F0B9BA65F9785C34786`
- Machine Protocol A: `06f66142812be03a8a3a138e2b774cbc9926b91f`
- Machine Evidence B: `b0bd0f1a9f70915c639cbee61cf5f8370c78766f`
- Machine run ID: `machine-execution1-2026-09-03`
- Machine artifact-index SHA-256: `03D11E6A1EBCBBE548BA2722F48FDE971499E9806DD50C746B80C147FD0462AD`
- Machine run-manifest SHA-256: `45F5186426D57688203315EDFB3AA6D97CA597C4C8F7F95844EE1AEF6415C75C`
- V2 eligible set: **80**, SHA-256 `E891C747394C492AE1D56AA1518F2E596E96756985BCBFBDFC93323070CC162C`
- B1 pending set: **16**, SHA-256 `B02C9075A2758CF953F3D6BF50CC852E8394C0357A127F3B559708899D216335`
- Candidates: `TA0/REP-0`, `TA2-DEG-W1-OP-v1`, `TA2-MOTIF-W1-OP-v1`, `TA3-FWD-W1-OP-v1`, `TA3-REV-W1-OP-v1`

## Browser and host qualification

The bound browser is Edge Stable at
`C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe`, version
`152.0.4191.62`; browser authority drift was **NO**. The accepted readiness
authority remains e2r-spec result commit
`235ef6193f07741874185bb843164860752015b8b`, with diagnostic final commit
`8f8c3871496a392324f03b970a55b07f22d42a4b`. The earlier one-item corrected
entry validation was accepted as reference and was not rerun here.

The host snapshot is Windows 11 Home 25H2 build `26200.9168`, KB5120998 not
installed, Intel UHD Graphics, driver `32.0.101.7088`. No Windows Update,
GPU driver, or graphics setting was changed.

The viewport is `1280 x 900`, DSF `1`, zoom `100%`, SVG viewBox
`0 0 800 500`. The corrected input contract is
`new URL("/capture-input.json", location.origin)` and the readiness predicate
is `globalThis.__E2R_BROWSER_READY__ === true`.

The launch contract contains `--headless=new`, `--disable-gpu`,
`--disable-extensions`, `--no-first-run`, `--no-default-browser-check`, a
fresh user-data directory, a unique remote-debugging port,
`--remote-debugging-address=127.0.0.1`,
`--force-device-scale-factor=1`, `--force-page-scale-factor=1`, and
`--window-size=1280,900`. `--disable-gpu-sandbox` was not used. Initial
attempt is `1`, maximum retries after initial is `2`, and maximum attempts is
`3`. B1-first is true and Chrome fallback is disabled.

## Bounded state and next gate

Protocol A is `PREPARED` and `READY`. B1 is **NOT STARTED** with
`0 success / 0 failure / 0 terminal / 16 pending`. V3 is planned `80` and
executed `0`. Screenshots are `0`; Browser Evidence B is `NONE`; Human Review
is `NO`; Review1 is `NOT ELIGIBLE`; E-VISUAL, ranking, selection, Product
integration, and PR-3 are all `NO`. No B1/V3 records or screenshot directory
was created.

The exact next prerequisite is:

`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1-RESTART2-B1-EXECUTION1`

That next checkpoint is **NOT STARTED**. Restart2 is eligible for B1:
**YES**. Restart1 was not resumed and old execution artifacts were not
reused.

## Verification and boundaries

The focused Protocol A suite passed **5/5 tests**. The authority self-check
passed with the exact 19-path closure. Clone-wide gates were attempted without
installing dependencies:

- `npm.cmd test`: **FAIL**, 99 passed and 12 failed because `react` and
  `@sukoyaka-dopeness/e2r-validator` are unavailable in the fresh clone;
- `npm.cmd run lint`: **FAIL**, `tsc` is unavailable;
- `npm.cmd run build`: **FAIL**, `tsc` is unavailable.

Package/toolchain provenance remains a follow-up. No package.json,
package-lock, or dependency was changed. The result is not reported as a
clone-wide build/test pass.

The Product dirty samples were preserved. Machine, Original Harness,
correction, materializer, and Baseline2 clones were not changed. `ai-knowledge`
was not changed; the reusable finding remains a knowledge candidate only. No
push, tag, release, deploy, publication, OS change, GPU change, or graphics
setting change occurred.

## Final report fields

1. Case: `CASE 1`.
2. Decision: `RESTART2-PROTOCOL-A-READY`.
3. Binding: `IDENTITY-BINDING-A`.
4. Starting e2r-spec HEAD: `04e3c7a36467cf6e9b586362a6e89d24d80aaa4b`.
5. Previous blocked authority: `4e7489c14618d9732c1e66aa7ef4852e2b03ea2b`.
6. Design authority: `b07062e8e487b47c2669891510088da37fa41c1`.
7. Implementation authority: `b9b6530ecc937dc2d7dcb9b661445f6c301444a5`.
8. Restart2 clone path: `C:\Users\extra\E2R\e2r-liaison-scape-visual-evidence-browser-capture-restart2`.
9. Restart2 base: `b9b6530ecc937dc2d7dcb9b661445f6c301444a5`.
10. Restart2 final HEAD: `0254dfccd6aea3e4fd8dfa96d1f7009ddf5657cb`.
11. Restart2 worktree: clean.
12. Restart2 commit subject: `evidence: bind Browser Capture Restart2 Protocol A v2 authority`.
13. Authority contract: `PR3-BROWSER-CAPTURE-IMPLEMENTATION-AUTHORITY-v1`.
14. Authority repository ID: `e2r-liaison-scape-browser-capture`.
15. Authority repository commit: `b9b6530ecc937dc2d7dcb9b661445f6c301444a5`.
16. Semantic manifest count: `19`.
17. Closure count: `19`.
18. Omitted closure paths: `0`.
19. Unexpected closure paths: `0`.
20. Main Git blob: `b671e09d2729fc8ac1002ed2bc0740f1107baefd`.
21. Main raw SHA-256: `116B684D3D87C3FBA58C5EBEA64182650324125BCB0F2BD3DD30A50024AB9F49`.
22. Executor Git blob: `9bd30e1f5a6a7136a3fa78fd002369c7a089fec9`.
23. Executor raw SHA-256: `302FF3D53F6C9D2110F4A9C4254185FF0FDD4B9376D7B212EE3BD5B8F7E5737A`.
24. Authority self-check: `PASS`.
25. Artifact root: `artifacts/browser-capture-restart2-2026-09-04`.
26. Artifact file count: `8`.
27. Artifact set: exact Protocol A eight-file set.
28. Browser authority: Edge Stable.
29. Edge path: `C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe`.
30. Edge version: `152.0.4191.62`.
31. Edge authority drift: `NO`.
32. Readiness result authority: `235ef6193f07741874185bb843164860752015b8b`.
33. Readiness diagnostic final: `8f8c3871496a392324f03b970a55b07f22d42a4b`.
34. Windows: `Windows 11 Home 25H2`.
35. Windows build: `26200.9168`.
36. KB5120998 installed: `NO`.
37. GPU: `Intel UHD Graphics`.
38. GPU driver: `32.0.101.7088`.
39. Product authority: `563d5bc3ce8d3a915c75dd13b33188ae6f7fccaf`.
40. Product auto-layout blob: `a7bb99d6628fe127eef7defe9ffdd957591de150`.
41. Product auto-layout raw SHA-256: `63547927D0B5DE990D596EEAF5925A7877F2677165A3DF676DA9123FC3030212`.
42. Harness authority: `9bd3f3b819bf07ccdfa0339be9a953d045c4e4fc`.
43. Materializer authority: `fd563340625fd3d88dc25baedc93c4f8fe69e5e7`.
44. Transform fingerprint: `102F16DCEF44096686B67B34BDF385A5E71DDDC085183F0B9BA65F9785C34786`.
45. Fixture SHA-256: `B867E9FF7B84107E8B4DDCCC02458B7B9AA535AB6FACE4AD10A2942CC8C8D8F5`.
46. Machine Protocol: `06f66142812be03a8a3a138e2b774cbc9926b91f`.
47. Machine Evidence B: `b0bd0f1a9f70915c639cbee61cf5f8370c78766f`.
48. Machine run ID: `machine-execution1-2026-09-03`.
49. Machine artifact index SHA-256: `03D11E6A1EBCBBE548BA2722F48FDE971499E9806DD50C746B80C147FD0462AD`.
50. Machine run manifest SHA-256: `45F5186426D57688203315EDFB3AA6D97CA597C4C8F7F95844EE1AEF6415C75C`.
51. Machine rerun: `NO`.
52. Candidate count: `5`.
53. Candidate registry: exact five authorized IDs.
54. V2 count: `80`.
55. V2 SHA-256: `E891C747394C492AE1D56AA1518F2E596E96756985BCBFBDFC93323070CC162C`.
56. B1 count: `16`.
57. B1 SHA-256: `B02C9075A2758CF953F3D6BF50CC852E8394C0357A127F3B559708899D216335`.
58. Viewport: `1280 x 900`.
59. DSF: `1`.
60. Zoom: `100%`.
61. SVG viewBox: `0 0 800 500`.
62. Corrected input URL: `new URL("/capture-input.json", location.origin)`.
63. Ready predicate: `globalThis.__E2R_BROWSER_READY__ === true`.
64. Launch contract: required normal-sandbox arguments present.
65. `--disable-gpu-sandbox`: `NO`.
66. Retry: initial `1`, max retries `2`, max attempts `3`.
67. B1-first: `YES`.
68. Chrome fallback: `NO`.
69. Phase-local ID: `browser-capture-restart2-2026-09-04`.
70. Run identity contract: `PR3-RUN-IDENTITY-v2`.
71. Phase bridge contract: `PR3-PHASE-BRIDGE-v2`.
72. Identity input SHA-256: `4BA49E9F8D9AD79112B4A3CFAFF95AA01648EEBA1EB8E181ED0E2C725510206A`.
73. New semantic ID: `pr3r1-4ba49e9f8d9ad79112b4a3cfaff95aa01648eeba1eb8e181ed0e2c725510206a`.
74. Old semantic IDs reused: `NO`.
75. Identity difference: corrected implementation authority bytes bound by v2.
76. Protocol A status: `PREPARED / READY`.
77. B1 status: `NOT STARTED`.
78. B1 success/failure/terminal/pending: `0 / 0 / 0 / 16`.
79. V3 planned/executed: `80 / 0`.
80. Screenshots: `0`.
81. Browser Evidence B: `NONE`.
82. Human Review: `NO`.
83. Review1: `NOT ELIGIBLE`.
84. E-VISUAL: `NO`.
85. Ranking: `NO`.
86. Selection: `NO`.
87. Product integration: `NO`.
88. PR-3: `NO`.
89. Restart1 resumed: `NO`.
90. Old execution artifacts reused: `NO`.
91. Restart2 eligible for B1: `YES`.
92. Next prerequisite: exact Restart2 B1 Execution1 checkpoint.
93. Next checkpoint status: `NOT STARTED`.
94. Focused Protocol A tests: `5/5 PASS`.
95. Authority closure test: `PASS`.
96. Clone-wide npm test: `FAIL`, `99 pass / 12 fail`, missing `react` and validator.
97. Clone-wide lint: `FAIL`, `tsc` unavailable.
98. Clone-wide build: `FAIL`, `tsc` unavailable.
99. Package/toolchain follow-up: `OPEN`.
100. Dependency installation: `NO`.
101. Product dirty samples: preserved.
102. Machine clone: unchanged.
103. Original Harness clone: unchanged.
104. Correction clone: unchanged.
105. Materializer clone: unchanged.
106. Baseline2 clone: unchanged.
107. `ai-knowledge`: unchanged.
108. Knowledge Candidate: candidate only.
109. Windows Update changed: `NO`.
110. GPU driver changed: `NO`.
111. Graphics settings changed: `NO`.
112. Push/tag/release/deploy/publication: `NONE`.
113. e2r-spec documentation: this successor result plus additive roadmap entry.
114. e2r-spec final commit/worktree: recorded in final handoff; worktree expected clean after documentation commit.
