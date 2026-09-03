# LiaisonScape Initial Placement Seed: Machine Execution1 Result

Date: 2026-09-03

Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-MACHINE-EXECUTION1`

Status: complete; the frozen machine matrix and machine diagnostics completed
successfully. Browser Execution1 remains not started.

## CASE / Decision

**CASE 1 / Decision A — MACHINE EXECUTION1 COMPLETE**

The final preregistered Protocol / Executable Commit A is
`06f66142812be03a8a3a138e2b774cbc9926b91f`. It preceded all dynamic
candidate and diagnostic execution. The generated evidence is frozen by
Evidence Commit B `b0bd0f1a9f70915c639cbee61cf5f8370c78766f`.

All 160 planned machine candidate records are present and successful: V0=40,
V1=40, and V2=80. B0 has 8 successful machine diagnostics. B1 has 16
successful V2 machine-side diagnostics; its 16 V3 browser-side obligations
remain pending and are not falsely marked complete. All 80 V2 cells are
machine-valid and eligible for later Browser Execution1.

No V3, browser, screenshot, human review, ranking, candidate selection,
Product integration, or PR-3 assessment occurred.

## Authorities and source freeze

Run Configuration Adoption1 authority is e2r-spec commit
`e8c2f30fc515e6502d4e45677d29d4c6cb63dfdc`, adopting
`PR3-RUNTIME-TRANSFORM-v1` as `originX=0/1`, `originY=0/1`, `scale=6144/1`.

| Authority | Commit |
| --- | --- |
| Product | `563d5bc3ce8d3a915c75dd13b33188ae6f7fccaf` |
| Harness | `9bd3f3b819bf07ccdfa0339be9a953d045c4e4fc` |
| Evidence2 | `ecad472c48b12e4fccb0d71f2edd44ec2e13f55c` |
| Retained materializer | `fd563340625fd3d88dc25baedc93c4f8fe69e5e7` |
| Baseline2 | `324193eda5924d2c5f5d0e0cad8a92b64d2ea6a8` |

The execution clone was created at
`C:\Users\extra\E2R\e2r-liaison-scape-visual-evidence-machine-execution1`
from Harness authority and initially started at
`9bd3f3b819bf07ccdfa0339be9a953d045c4e4fc`. Three pre-dynamic preflight
corrections were made in the disposable clone for Windows path, Git safety,
and environment probing. The final Protocol A supersedes those preflight
attempts; no candidate or diagnostic execution preceded the final A.

The prospective `PRODUCT-SOURCE-RAW-BLOB-SHA256-v1` convention was used for
the source freeze. It binds commit, path, Git blob ID, and SHA-256 over exact
raw Git blob bytes. The Product rows verified before dynamic execution were:

| Commit | Path | Git blob ID | Raw blob SHA-256 |
| --- | --- | --- | --- |
| `563d5bc3ce8d3a915c75dd13b33188ae6f7fccaf` | `src/auto-layout.ts` | `a7bb99d6628fe127eef7defe9ffdd957591de150` | `63547927D0B5DE990D596EEAF5925A7877F2677165A3DF676DA9123FC3030212` |
| `563d5bc3ce8d3a915c75dd13b33188ae6f7fccaf` | `src/viewport.ts` | `86f6baa3e21b67e28d4f12c4cb0714c611000791` | `5572E4A0AA270AB07C16F44FE6B2E580695C83347821FDC041C1AB8F30833114` |
| `563d5bc3ce8d3a915c75dd13b33188ae6f7fccaf` | `src/graph-presentation.ts` | `6ee2ef099e994aa1feb34c9dada6359e30bcb769` | `FE4B0EC9770897F25A29835ABDA35C3C74E1BE97F60348CEF99555072790C19C` |

The accepted materializer snapshot identities were also verified in the
Evidence2 snapshot at commit `ecad472c48b12e4fccb0d71f2edd44ec2e13f55c`,
under retained authority `fd563340625fd3d88dc25baedc93c4f8fe69e5e7`:

| Path | Git blob ID | Raw blob SHA-256 |
| --- | --- | --- |
| `experimental/production-candidate-materialization/core/fp1.mjs` | `02392f7265193098115fe10f303815b373de876d` | `3B1B7567D5A56BDE6DF66B2771E0C5AE1F7190483DA2E6BB6DCECBB587BBFBF6` |
| `experimental/production-candidate-materialization/core/materializer.mjs` | `c4537a79e9306211872c2c82e0afe0d58cfbfd8d` | `850E9F9D8F6624DD9BF4B3ABC6DC6DC143037F8BDA0AE357F3C8924E502E8CF4` |

The source freeze passed. Product source drift, Harness drift, and fixture
authority drift were all `NO`. Exact Git-blob fixture snapshots were used for
the protected Lighthouse samples; dirty Live sample bytes were not read as
authority.

## Run identity and frozen matrix

Run ID: `machine-execution1-2026-09-03`.

Run-plan hash: `AC9866D16D0112C7EA97A53E923D95C87FB00DFB84CAC7E69A9411D18F73F639`.

Execution order was the frozen candidate order
TA0/REP-0, TA2-DEG-W1-OP-v1, TA2-MOTIF-W1-OP-v1, TA3-FWD-W1-OP-v1,
TA3-REV-W1-OP-v1; the accepted eight structural fixtures in manifest order;
EN then JA for V2; and V0, V1, V2, B0, B1 machine-side. No intermediate
result reordered the plan.

The transform was identical in every candidate record:

```text
PR3-RUNTIME-TRANSFORM-v1
originX = 0/1
originY = 0/1
scale   = 6144/1
fingerprint = 102F16DCEF44096686B67B34BDF385A5E71DDDC085183F0B9BA65F9785C34786
unique transform fingerprints = 1
alternate transform executions = 0
```

The fixture authority was `VSR-FIXTURE-v1`, manifest
`docs/evidence/visual-fixture-role-manifest-v1.json`, SHA-256
`B867E9FF7B84107E8B4DDCCC02458B7B9AA535AB6FACE4AD10A2942CC8C8D8F5`, with
8 structural fixtures and EN/JA variants.

Environment recorded by the run: Windows `win32`, `x64`, Node `v24.18.0`,
npm `11.16.0`, Git `2.53.0.windows.1`, timezone `Etc/GMT-9`.

## Stage results

| Stage | Planned | Actual | Success | Failure |
| --- | ---: | ---: | ---: | ---: |
| V0 raw candidate seed | 40 | 40 | 40 | 0 |
| V1 Product settling | 40 | 40 | 40 | 0 |
| V2 routing and labels | 80 | 80 | 80 | 0 |
| Machine candidate total | 160 | 160 | 160 | 0 |
| V3 | 0 | 0 | 0 | 0 |
| B0 structural diagnostics | 8 | 8 | 8 | 0 |
| B1 total | 32 | 16 machine-side | 16 | 0 |

B1 machine-side records are `SUCCESS` with `machineSideStatus=COMPLETE` and
`browserSideStatus=PENDING`. The unexecuted 16 V3-side diagnostic obligations
remain pending under the accepted paired diagnostic plan.

Per-candidate machine summary, without ranking or preference:

| Candidate | V0 | V1 | V2 | Browser-eligible V2 cells |
| --- | ---: | ---: | ---: | ---: |
| `TA0/REP-0` | 8/8 | 8/8 | 16/16 | 16 |
| `TA2-DEG-W1-OP-v1` | 8/8 | 8/8 | 16/16 | 16 |
| `TA2-MOTIF-W1-OP-v1` | 8/8 | 8/8 | 16/16 | 16 |
| `TA3-FWD-W1-OP-v1` | 8/8 | 8/8 | 16/16 | 16 |
| `TA3-REV-W1-OP-v1` | 8/8 | 8/8 | 16/16 | 16 |

Per-structural-fixture machine summary, without ranking:

| Structural fixture | V0 | V1 | V2 across EN/JA |
| --- | ---: | ---: | ---: |
| Lighthouse Restoration | 5/5 | 5/5 | 10/10 |
| Apollo 11 | 5/5 | 5/5 | 10/10 |
| Ashen Crown | 5/5 | 5/5 | 10/10 |
| Titanic | 5/5 | 5/5 | 10/10 |
| Berlin Wall | 5/5 | 5/5 | 10/10 |
| Regional Care Coordination | 5/5 | 5/5 | 10/10 |
| District Solar Cooperatives | 5/5 | 5/5 | 10/10 |
| Regional Emergency Response | 5/5 | 5/5 | 10/10 |

Candidate failure inventory: count `0`; none.
Product downstream failure inventory: count `0`; none.
Common Harness failure inventory: count `0`; none.
Fixture-authority failure inventory: count `0`; none.
Machine-blocking cells: `0`.
Browser-eligible V2 cells: `80`.
Browser-blocked V2 cells: `0`.
All candidates machine-blocked: `NO`.

Deterministic replay passed for V0, V1, and V2 with no first failure. Input
mutation checks passed for fixture/materialization input, V0→V1, and V1→V2.
Stage linkage passed with orphan V1 `0`, orphan V2 `0`, cross-candidate links
`0`, cross-fixture links `0`, and improper locale reuse `0`.

## Artifact and regression results

Artifact root:
`C:\Users\extra\E2R\e2r-liaison-scape-visual-evidence-machine-execution1\artifacts\machine-execution1-2026-09-03`.

The root contains 326 generated files, including 325 entries in
`artifact-index.json`; the index excludes itself exactly as recorded by the
artifact contract. Every non-index file is indexed with exact byte count and
SHA-256. Stale/unindexed evidence count is `0`. Canonical artifact hashes
passed. The A→B audit found generated artifacts only; no runner, protocol,
candidate, fixture, transform, Product, or test source changed after A.

Focused Product seam coverage passed as part of the full Product test suite:
explicit-seed/settling, routing, labels, render-related pure seams, and the
existing isolated browser-entry tests were included in the accepted suite.
Full Product result: `309/309 PASS`. `npm.cmd run lint` PASS.
`npm.cmd run build` PASS. Baseline-v2 SHA remains
`F18C4C98607B9412BD6C035803002BE1DFEE1F2AF721942C8D8FF69A5496795B`, and
Baseline2 remains unchanged.

## Boundary and next step

Browser launch: `NO`. V3 generated: `NO`. Screenshot: `NO`. Human review:
`NO`. `E-VISUAL = NO`. Ranking: `NO`. Candidate selected: `NO`. Product
integration: `NO`. PR-3: `NO`.

The exact next prerequisite is
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-EXECUTION1`.
Browser Execution1 is **NOT STARTED** and must not be started automatically.

Knowledge Candidate decision: `NO NEW ENTRY`. The machine-vs-browser
separation, A→B preregistration discipline, stage-linkage discipline, and
commit/path/blob/raw-hash practice remain repository-local evidence for this
lineage. `ai-knowledge` was unchanged.

Live Product remains at `563d5bc3ce8d3a915c75dd13b33188ae6f7fccaf` with only
the protected EN/JA sample dirt. Original Harness remains unchanged at
`9bd3f3b819bf07ccdfa0339be9a953d045c4e4fc`. Evidence1 clone, Evidence2 clone,
retained materializer, and Baseline2 remain unchanged; the materializer's
pre-existing untracked `experimental/` content was preserved.

## Final report

1. CASE: CASE 1.
2. Decision: Decision A — MACHINE EXECUTION1 COMPLETE.
3. e2r-spec starting HEAD: `e8c2f30fc515e6502d4e45677d29d4c6cb63dfdc`.
4. Adoption1 authority: `e8c2f30fc515e6502d4e45677d29d4c6cb63dfdc`.
5. Product authority: `563d5bc3ce8d3a915c75dd13b33188ae6f7fccaf`.
6. Harness authority: `9bd3f3b819bf07ccdfa0339be9a953d045c4e4fc`.
7. Materializer authority: `fd563340625fd3d88dc25baedc93c4f8fe69e5e7`.
8. Baseline2 authority: `324193eda5924d2c5f5d0e0cad8a92b64d2ea6a8`.
9. Execution clone created: YES.
10. Execution clone path: `C:\Users\extra\E2R\e2r-liaison-scape-visual-evidence-machine-execution1`.
11. Initial clone HEAD: `9bd3f3b819bf07ccdfa0339be9a953d045c4e4fc`.
12. Source freeze: PASS.
13. Auto-layout blob: `a7bb99d6628fe127eef7defe9ffdd957591de150`.
14. Auto-layout raw SHA: `63547927D0B5DE990D596EEAF5925A7877F2677165A3DF676DA9123FC3030212`.
15. Viewport blob: `86f6baa3e21b67e28d4f12c4cb0714c611000791`.
16. Viewport raw SHA: `5572E4A0AA270AB07C16F44FE6B2E580695C83347821FDC041C1AB8F30833114`.
17. Graph-presentation blob: `6ee2ef099e994aa1feb34c9dada6359e30bcb769`.
18. Graph-presentation raw SHA: `FE4B0EC9770897F25A29835ABDA35C3C74E1BE97F60348CEF99555072790C19C`.
19. FP1/materializer source identities: FP1 blob `02392f7265193098115fe10f303815b373de876d`, raw `3B1B7567D5A56BDE6DF66B2771E0C5AE1F7190483DA2E6BB6DCECBB587BBFBF6`; materializer blob `c4537a79e9306211872c2c82e0afe0d58cfbfd8d`, raw `850E9F9D8F6624DD9BF4B3ABC6DC6DC143037F8BDA0AE357F3C8924E502E8CF4`.
20. `PRODUCT-SOURCE-RAW-BLOB-SHA256-v1` used: YES.
21. Product source drift: NO.
22. Harness drift: NO.
23. Fixture authority drift: NO.
24. Protocol A full hash: `06f66142812be03a8a3a138e2b774cbc9926b91f`.
25. Protocol A subject: `fix: record Windows machine environment`.
26. Protocol A preceded all dynamic execution: YES.
27. Protocol changed after execution began: NO.
28. Run ID: `machine-execution1-2026-09-03`.
29. Run-plan hash: `AC9866D16D0112C7EA97A53E923D95C87FB00DFB84CAC7E69A9411D18F73F639`.
30. Transform originX: `0/1`.
31. Transform originY: `0/1`.
32. Transform scale: `6144/1`.
33. Transform fingerprint: `102F16DCEF44096686B67B34BDF385A5E71DDDC085183F0B9BA65F9785C34786`.
34. Unique transform fingerprint count: 1.
35. Alternate transform execution count: 0.
36. Candidate count: 5.
37. Candidate identities: TA0/REP-0; TA2-DEG-W1-OP-v1; TA2-MOTIF-W1-OP-v1; TA3-FWD-W1-OP-v1; TA3-REV-W1-OP-v1.
38. Structural fixture count: 8.
39. Fixture manifest SHA: `B867E9FF7B84107E8B4DDCCC02458B7B9AA535AB6FACE4AD10A2942CC8C8D8F5`.
40. Locale variants: EN and JA; V2 uses both.
41. V0 planned: 40.
42. V0 actual: 40.
43. V0 success/failure counts: 40/0.
44. V1 planned: 40.
45. V1 actual: 40.
46. V1 success/failure counts: 40/0.
47. V2 planned: 80.
48. V2 actual: 80.
49. V2 success/failure counts: 80/0.
50. Machine candidate planned total: 160.
51. Machine candidate actual total: 160.
52. V3 actual: 0.
53. B0 planned: 8.
54. B0 actual/status: 8 / COMPLETE.
55. B1 planned total: 32.
56. B1 machine-side actual/status: 16 / COMPLETE; browser-side 16 / PENDING.
57. Stage linkage: PASS.
58. Orphan V1 count: 0.
59. Orphan V2 count: 0.
60. Cross-candidate linkage count: 0.
61. Cross-fixture linkage count: 0.
62. Improper locale reuse count: 0.
63. Deterministic replay: PASS.
64. First deterministic failure: NONE.
65. Input mutation: PASS.
66. First mutation: NONE.
67. Candidate failures count: 0.
68. Candidate failure inventory: NONE.
69. Product downstream failures count: 0.
70. Product downstream failure inventory: NONE.
71. Common Harness failures count: 0.
72. Fixture-authority failures count: 0.
73. Machine-blocking cells count: 0.
74. Browser-eligible V2 cells count: 80.
75. Browser-blocked V2 cells count: 0.
76. Candidates with at least one browser-eligible cell: all five.
77. All candidates machine-blocked: NO.
78. Ranking performed: NO.
79. Score aggregation performed: NO.
80. Candidate selected: NO.
81. Browser launched: NO.
82. V3 generated: NO.
83. Screenshot: NO.
84. Human review: NO.
85. E-VISUAL: NO.
86. Artifact root: `C:\Users\extra\E2R\e2r-liaison-scape-visual-evidence-machine-execution1\artifacts\machine-execution1-2026-09-03`.
87. Generated evidence artifact count: 326 files.
88. Artifact index complete: YES.
89. Stale/unindexed evidence count: 0.
90. Canonical artifact hashes: PASS.
91. Protocol A→Evidence B implementation unchanged: YES.
92. Evidence Commit B full hash: `b0bd0f1a9f70915c639cbee61cf5f8370c78766f`.
93. Evidence Commit B subject: `evidence: record LiaisonScape machine execution`.
94. Evidence clone final state: clean at Evidence Commit B.
95. Focused Product seam tests: PASS as covered by full suite.
96. Full Product tests: PASS.
97. Full Product test count: 309/309.
98. Lint: PASS.
99. Build: PASS.
100. Baseline-v2 SHA: `F18C4C98607B9412BD6C035803002BE1DFEE1F2AF721942C8D8FF69A5496795B`.
101. Baseline2 unchanged: YES.
102. Live Product changed: NO.
103. Protected samples preserved: YES.
104. Original Harness changed: NO.
105. Evidence1 clone changed: NO.
106. Evidence2 clone changed: NO.
107. Retained materializer changed: NO.
108. e2r-spec result document: `docs/liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-machine-execution1-result.md`.
109. Roadmap: CHANGED additively.
110. Knowledge Candidate decision: NO NEW ENTRY.
111. ai-knowledge: UNCHANGED.
112. e2r-spec validation: PASS.
113. diff-check: PASS.
114. e2r-spec commit hash/subject: recorded after documentation commit.
115. e2r-spec worktree: expected clean after documentation commit.
116. Machine Execution1 status: COMPLETE.
117. Browser Execution1 eligible: YES.
118. Exact next prerequisite: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-EXECUTION1`.
119. Next checkpoint: NOT STARTED.
120. Product integration: NO.
121. PR-3: NO.
122. Push/tag/release/deploy/publication: NONE.
