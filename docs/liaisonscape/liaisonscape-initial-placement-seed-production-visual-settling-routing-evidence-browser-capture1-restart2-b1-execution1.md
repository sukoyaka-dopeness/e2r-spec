# LiaisonScape Browser Capture1 Restart2 B1 Execution1

- Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1-RESTART2-B1-EXECUTION1`
- Date: `2026-09-04` (JST)
- Result: **CASE 5 / DECISION E - `B1-HARNESS-PROTOCOL-BLOCKED`**
- Starting e2r-spec HEAD: `9f3a10c0c5aa1800eddb59198af64154e34ec235`

## Outcome

The exact frozen 16-item B1 set was not started. The Restart2 authority,
browser authority, host snapshot, B1 set, and V2 parent set all passed their
preflight checks. The B1 executor then stopped before the first item because
the committed executor still hard-codes the historical Restart1 run identity
and run root:

- executor literal phase-local ID: `browser-capture-restart1-2026-09-04`;
- executor literal root: `artifacts/browser-capture-restart1-2026-09-04`;
- required Restart2 phase-local ID: `browser-capture-restart2-2026-09-04`;
- required Restart2 root: `artifacts/browser-capture-restart2-2026-09-04`;
- observed pre-item guard: `BC1-HARD-GATE: B1 output already exists`.

This is a harness/protocol binding failure, not an implementation-authority
hash drift. No semantic source was changed to work around it. No B1 item,
Edge process, CDP attempt, screenshot, V3 call, or Browser Evidence B packet
was created. The exact decision is **`B1-HARNESS-PROTOCOL-BLOCKED`**.

## Authority and preflight

Restart2 is:

`C:\Users\extra\E2R\e2r-liaison-scape-visual-evidence-browser-capture-restart2`

It started at `0254dfccd6aea3e4fd8dfa96d1f7009ddf5657cb` and the blocked
execution record was committed at
`4f683c3acf7d8a607249a040c460a6ae39baf5ef`
(`evidence: record Browser Capture Restart2 B1 block`). The final worktree is
clean. The semantic run ID is
`pr3r1-4ba49e9f8d9ad79112b4a3cfaff95aa01648eeba1eb8e181ed0e2c725510206a`;
the phase-local run ID is `browser-capture-restart2-2026-09-04`.

The bound contracts are `PR3-RUN-IDENTITY-v2`, `PR3-PHASE-BRIDGE-v2`, and
`PR3-BROWSER-CAPTURE-IMPLEMENTATION-AUTHORITY-v1`. The implementation
authority repository commit remains
`b9b6530ecc937dc2d7dcb9b661445f6c301444a5`. Its semantic manifest count is
19 and the recheck returned closure 19, omitted 0, unexpected 0.

The exact corrected source identities remain:

- `main.tsx`: Git blob `b671e09d2729fc8ac1002ed2bc0740f1107baefd`, raw
  SHA-256 `116B684D3D87C3FBA58C5EBEA64182650324125BCB0F2BD3DD30A50024AB9F49`;
- `browser-capture.mjs`: Git blob `9bd30e1f5a6a7136a3fa78fd002369c7a089fec9`,
  raw SHA-256
  `302FF3D53F6C9D2110F4A9C4254185FF0FDD4B9376D7B212EE3BD5B8F7E5737A`.

Implementation authority drift is **NO**. Browser authority is Edge Stable at
`C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe`, version
`152.0.4191.62`; browser authority drift is **NO**.

The host snapshot is Windows 11 Home 25H2 build `26200.9168`, KB5120998 not
installed, Intel UHD Graphics, driver `32.0.101.7088`. No Windows Update,
GPU driver, or graphics setting changed.

## Frozen inputs and execution contract

The B1 pending set was loaded without regeneration: count **16**, SHA-256
`B02C9075A2758CF953F3D6BF50CC852E8394C0357A127F3B559708899D216335`. Its
exact order was preserved and its 16 IDs were unique with no duplicate,
missing, or extra IDs. The V2 parent set remained count **80**, SHA-256
`E891C747394C492AE1D56AA1518F2E596E96756985BCBFBDFC93323070CC162C`.
The five candidates remain `TA0/REP-0`, `TA2-DEG-W1-OP-v1`,
`TA2-MOTIF-W1-OP-v1`, `TA3-FWD-W1-OP-v1`, and `TA3-REV-W1-OP-v1`.

The corrected input contract is
`new URL("/capture-input.json", location.origin)`. The readiness predicate is
`globalThis.__E2R_BROWSER_READY__ === true`. The viewport contract is
`1280 x 900`, DSF `1`, zoom `100%`, SVG viewBox `0 0 800 500`.

The required launch contract was preserved: `--headless=new`,
`--disable-gpu`, `--disable-extensions`, `--no-first-run`,
`--no-default-browser-check`, fresh profile, fresh remote-debugging port,
`--remote-debugging-address=127.0.0.1`,
`--force-device-scale-factor=1`, `--force-page-scale-factor=1`, and
`--window-size=1280,900`. `--disable-gpu-sandbox` was not used and Chrome
fallback was not used. The frozen retry policy is initial attempt `1`, max
retries `2`, max attempts `3`; it was not entered because no B1 item started.

## Execution state

The artifact root is:

`C:\Users\extra\E2R\e2r-liaison-scape-visual-evidence-browser-capture-restart2\artifacts\browser-capture-restart2-2026-09-04`

It contains the eight Protocol A files, `b1-execution-summary.json`, and
`artifact-index.json`. The old copied Restart1 artifact root was removed from
the Restart2 clone so no old execution state remains there; it remains
recoverable from the implementation-authority clone.

The canonical B1 summary is
`artifacts/browser-capture-restart2-2026-09-04/b1-execution-summary.json`,
SHA-256 `C397FFA794262208F44F26E9CBB838E981BE6F1F513D8596107DCE5D28A77C2F`.
The artifact index is
`artifacts/browser-capture-restart2-2026-09-04/artifact-index.json`,
SHA-256 `0E3298511D8291E016533A78403C72A533586B00C9B9640C95F58AB30841C953`.
It indexes 9 non-self files; every indexed file exists and its exact hash
matches. Canonicalization validation passed.

B1 planned/executed/success/failure/pending is **16 / 0 / 0 / 0 / 16**.
There is no terminal failure item because the gate stopped before item
execution. Per-item attempt counts are empty, total attempts are `0`, total
retries are `0`, and maximum attempts observed is `0`. Fresh browser process,
profile, and port counts are all `0`; profile reuse and port reuse are `0`.
First-CDP timing is unavailable and is recorded as an empty observation. No
B1 capture-input HTTP request was made, so JSON HTTP 200, JSON content type,
HTML fallback, evaluation root, SVG, viewBox, ready marker, Runtime exception,
network failure, GPU fatal, cache-lock, teardown, and quiescence counts are
all `0` or not applicable. No timing was inferred.

The run manifest records `B1-HARNESS-PROTOCOL-BLOCKED`, B1 `BLOCKED / PROTOCOL`,
V3 `NOT STARTED` with executed `0`, Browser Evidence B `NONE / INCOMPLETE`,
Review1 `NOT ELIGIBLE`, and PR-3 `NO`. V3 is prohibited by this result.
Screenshots are `0`, screenshot evidence class is `NONE`, and B1 item
artifact count is `0`. Human Review, E-VISUAL, ranking, selection, and
Product integration are all `NO`.

## Verification and boundaries

Focused Restart2 Protocol A/B1 tests passed **8/8**. Syntax checks passed for
the executor, authority helper, and both focused test files. The authority
self-check passed against implementation commit `b9b6530…`.

The required dependency workflow was used exactly once:
`npm ci --ignore-scripts` with the existing lockfile. Dependency installation
was **YES**; package.json and package-lock.json were unchanged. After install,
clone-wide gates passed: `npm.cmd test` **309/309**, `npm.cmd run lint` PASS,
and `npm.cmd run build` PASS. The test run emitted an existing WebSocket port
`24678 is already in use` warning, but exited successfully. Package/toolchain
provenance remains a follow-up; no dependency upgrade occurred.

No Product, fixture corpus, Machine Evidence, Browser Capture semantic source,
browser authority, Windows Update, GPU driver, graphics setting, or
`ai-knowledge` state changed. No V3, candidate screenshot, Browser Evidence B,
Review1, ranking, selection, or PR-3 action occurred. No push, tag, release,
deploy, or publication occurred.

The exact next prerequisite is a bounded Browser Capture Restart2
executor/run-root binding correction checkpoint. It is **NOT STARTED**.
Restart2 B1 is not eligible for resumption until that correction is made and
bound by a new implementation authority/Protocol A lineage.

## Final report

1. CASE: `CASE 5`.
2. Decision: `B1-HARNESS-PROTOCOL-BLOCKED`.
3. Starting e2r-spec HEAD: `9f3a10c0c5aa1800eddb59198af64154e34ec235`.
4. Restart2 clone path: `C:\Users\extra\E2R\e2r-liaison-scape-visual-evidence-browser-capture-restart2`.
5. Restart2 starting HEAD: `0254dfccd6aea3e4fd8dfa96d1f7009ddf5657cb`.
6. Restart2 final HEAD: `4f683c3acf7d8a607249a040c460a6ae39baf5ef`.
7. Semantic run ID: `pr3r1-4ba49e9f8d9ad79112b4a3cfaff95aa01648eeba1eb8e181ed0e2c725510206a`.
8. Phase-local run ID: `browser-capture-restart2-2026-09-04`.
9. Run identity contract: `PR3-RUN-IDENTITY-v2`.
10. Phase bridge contract: `PR3-PHASE-BRIDGE-v2`.
11. Implementation authority contract: `PR3-BROWSER-CAPTURE-IMPLEMENTATION-AUTHORITY-v1`.
12. Implementation authority repository commit: `b9b6530ecc937dc2d7dcb9b661445f6c301444a5`.
13. Manifest count: `19`.
14. Closure count: `19`.
15. Omitted runtime imports: `0`.
16. Unexpected runtime imports: `0`.
17. Corrected main.tsx blob/hash: `b671e09d2729fc8ac1002ed2bc0740f1107baefd` / `116B684D3D87C3FBA58C5EBEA64182650324125BCB0F2BD3DD30A50024AB9F49`.
18. Executor blob/hash: `9bd30e1f5a6a7136a3fa78fd002369c7a089fec9` / `302FF3D53F6C9D2110F4A9C4254185FF0FDD4B9376D7B212EE3BD5B8F7E5737A`.
19. Implementation authority drift: `NO`.
20. Edge path/version: `C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe` / `152.0.4191.62`.
21. Browser authority drift: `NO`.
22. Windows build: `Windows 11 Home 25H2 / 26200.9168`.
23. KB5120998 installed: `NO`.
24. GPU driver: `Intel UHD Graphics / 32.0.101.7088`.
25. B1 set count: `16`.
26. B1 set SHA: `B02C9075A2758CF953F3D6BF50CC852E8394C0357A127F3B559708899D216335`.
27. V2 count: `80`.
28. V2 SHA: `E891C747394C492AE1D56AA1518F2E596E96756985BCBFBDFC93323070CC162C`.
29. B1 exact order preserved: `YES`.
30. Planned B1: `16`.
31. Executed B1: `0`.
32. Success B1: `0`.
33. Failure B1: `0`.
34. Pending B1: `16`.
35. Terminal failure item: `NONE; pre-item stop`.
36. Terminal failure classification: `B1-HARNESS-PROTOCOL-BLOCKED`.
37. Per-item attempt counts: `{}`.
38. Total attempts: `0`.
39. Total retries: `0`.
40. Max attempts observed: `0`.
41. Fresh browser process count: `0`.
42. Profile reuse count: `0`.
43. Port reuse count: `0`.
44. First-CDP min/max/summary: `NONE / unavailable`.
45. JSON HTTP 200 count: `0`.
46. JSON content-type PASS count: `0`.
47. HTML fallback count: `0`.
48. Evaluation-root PASS count: `0`.
49. SVG PASS count: `0`.
50. Exact viewBox PASS count: `0`.
51. Ready-marker PASS count: `0`.
52. Runtime exception count: `0`.
53. Blocking network failure count: `0`.
54. GPU fatal count: `0`.
55. Cache-lock count: `0`.
56. Teardown PASS count: `0; no browser attempt`.
57. Quiescence PASS count: `0; no browser attempt`.
58. Screenshots count: `0`.
59. Screenshot evidence class: `NONE`.
60. B1 canonical artifact count: `0`.
61. Artifact-index validation: `PASS`, index SHA `0E3298511D8291E016533A78403C72A533586B00C9B9640C95F58AB30841C953`.
62. Canonicalization validation: `PASS`.
63. Duplicate B1 IDs: `NO`.
64. Missing B1 IDs: `0`.
65. Semantic inputs changed: `NO`.
66. `--disable-gpu-sandbox` used: `NO`.
67. Dependency installation occurred: `YES`, exact-lockfile `npm ci --ignore-scripts`.
68. package.json changed: `NO`.
69. package-lock changed: `NO`.
70. B1 gate status: `B1-HARNESS-PROTOCOL-BLOCKED`.
71. V3 eligibility: `NO`.
72. V3 executed count: `0`.
73. Browser Evidence B: `NONE / INCOMPLETE`.
74. Human Review: `NO`.
75. Review1 eligible: `NO`.
76. E-VISUAL: `NO`.
77. Ranking: `NO`.
78. Selection: `NO`.
79. Product integration: `NO`.
80. PR-3: `NO`.
81. Exact next prerequisite: bounded Restart2 executor/run-root binding correction checkpoint.
82. Next checkpoint: `NOT STARTED`.
83. Artifact root: `artifacts/browser-capture-restart2-2026-09-04`.
84. B1 execution summary path/hash: `artifacts/browser-capture-restart2-2026-09-04/b1-execution-summary.json` / `C397FFA794262208F44F26E9CBB838E981BE6F1F513D8596107DCE5D28A77C2F`.
85. Focused test count/result: `8/8 PASS`.
86. Syntax-check result: `PASS`.
87. Restart2 commit hash/subject: `4f683c3acf7d8a607249a040c460a6ae39baf5ef` / `evidence: record Browser Capture Restart2 B1 block`.
88. Restart2 worktree: clean.
89. Result document: this document.
90. Roadmap: changed additively.
91. Knowledge Candidate decision: `CANDIDATE ONLY / NO NEW ENTRY`.
92. ai-knowledge changed: `NO`.
93. e2r-spec validation: recorded after documentation commit.
94. Diff-check: recorded after documentation staging.
95. e2r-spec commit hash/subject: recorded after documentation commit.
96. e2r-spec worktree: expected clean after documentation commit.
97. Live Product unchanged: `YES`.
98. Protected samples preserved: `YES`.
99. Machine clone unchanged: `YES`.
100. Original Harness unchanged: `YES`.
101. Retained materializer unchanged: `YES`.
102. Baseline2 unchanged: `YES`.
103. Windows Update changed: `NO`.
104. GPU driver changed: `NO`.
105. Graphics settings changed: `NO`.
106. Package/toolchain provenance follow-up: `OPEN`.
107. Push/tag/release/deploy/publication: `NONE`.
