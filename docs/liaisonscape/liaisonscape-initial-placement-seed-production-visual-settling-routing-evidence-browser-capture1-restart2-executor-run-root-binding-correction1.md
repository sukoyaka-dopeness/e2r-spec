# Browser Capture1 Restart2 executor run-root binding correction1

Date: 2026-09-04 (JST)

## Result

This bounded correction records **CASE 1 / DECISION A — `EXECUTOR-RUN-ROOT-BINDING-CORRECTED`**. The historical Restart2 clone was not modified. A fresh correction clone was created from the implementation-authority base commit and corrected so that the Browser Capture executor resolves its run identity and artifact root only from an explicit accepted Protocol A locator.

The correction is limited to executor binding. It does not execute B1, V3, Browser Capture, screenshots, Browser Evidence B, Restart3, or semantic-ID minting.

## Required report fields

1. Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1-RESTART2-EXECUTOR-RUN-ROOT-BINDING-CORRECTION1`.
2. Date/time basis: 2026-09-04 JST.
3. Result: PASS.
4. Classification: `CASE 1 / DECISION A`.
5. Correction clone: `C:\Users\extra\E2R\e2r-liaison-scape-browser-capture-run-binding-correction1`.
6. Correction base commit: `b9b6530ecc937dc2d7dcb9b661445f6c301444a5`.
7. Semantic correction commit: `5e1581b2fb59f6f241e715604fdd4f2e082f2d1b` (`fix: bind Browser Capture executor to protocol run root`).
8. Diagnostic-record commit: `8167168cbcdda0245d382bdae5dcf122562dea36` (`docs: record run-root binding correction diagnostics`).
9. Correction clone final worktree: clean.
10. Historical Restart2 clone: `C:\Users\extra\E2R\e2r-liaison-scape-visual-evidence-browser-capture-restart2`.
11. Historical Restart2 authority: `4f683c3acf7d8a607249a040c460a6ae39baf5ef`.
12. Historical Restart2 modification: NO; worktree remained clean.
13. Implementation-authority clone modification: NO; HEAD remained `b9b6530ecc937dc2d7dcb9b661445f6c301444a5` and clean.
14. Corrected production file: `experimental/product-evaluation-seam/browser-capture1/browser-capture.mjs`.
15. Test file: `experimental/product-evaluation-seam/browser-capture1/run-binding-correction.test.mjs`.
16. Binding contract: `PR3-BROWSER-CAPTURE-RUN-BINDING-v1`.
17. Binding input: explicit `--protocol-a <path>`.
18. Binding source of truth: accepted Protocol A canonical metadata.
19. Resolved `phaseRunId`: `protocol-a.json.phaseRunId`.
20. Resolved `artifactRoot`: the directory containing the selected `protocol-a.json`.
21. Resolved `finalPr3RunId`: `protocol-a.json.finalPr3RunId`, checked against the identity-input hash.
22. Protocol locator: returned in the binding object as canonical `protocolPath`.
23. Protocol A-only root: accepted.
24. Wrong lineage root: rejected.
25. Semantic ID mismatch: rejected.
26. Existing B1 output: rejected before launch.
27. Existing V3 output: rejected before launch.
28. Existing screenshot output: rejected before launch.
29. Existing execution summary/audit output: rejected before launch.
30. Missing Protocol A locator: rejected closed.
31. Missing Protocol A companion metadata: rejected closed.
32. Manifest Protocol A reference: checked against the selected root.
33. Manifest identity reference: checked against the selected root.
34. Manifest phase identity: checked against Protocol A.
35. Manifest semantic identity: checked against Protocol A.
36. Production restart phase-ID hardcodes: 0.
37. Production restart artifact-root hardcodes: 0.
38. Production behavioral Restart1/Restart2/Restart3 labels: 0.
39. Test-only historical fixture references: retained only in tests.
40. B1 execution: NOT RUN.
41. B1 planned count: unchanged at 16.
42. B1 executed count: 0.
43. B1 success count: 0.
44. B1 failure count: 0.
45. B1 pending count: 16 in the historical blocked record; no new B1 record created.
46. V3 execution: NOT RUN.
47. V3 planned count: unchanged at 80.
48. V3 executed count: 0.
49. Browser execution: NOT RUN.
50. Browser process launches during correction: 0.
51. Vite launches during dry-run: 0.
52. CDP attempts during correction: 0.
53. Screenshots created: 0.
54. Browser Evidence B: NONE.
55. New semantic ID minted: NO.
56. Historical Restart2 semantic ID used: read-only fixture validation only.
57. Dry-run result: `RUN-BINDING-VALID`.
58. Dry-run resolved phase ID: `browser-capture-restart2-2026-09-04`.
59. Dry-run resolved semantic ID: `pr3r1-4ba49e9f8d9ad79112b4a3cfaff95aa01648eeba1eb8e181ed0e2c725510206a`.
60. Focused test command: `node --test experimental/product-evaluation-seam/browser-capture1/run-binding-correction.test.mjs`.
61. Focused tests: 16/16 PASS.
62. Required T1–T15: all PASS.
63. Executor/helper/test syntax checks: PASS.
64. Full npm test: 309/309 PASS.
65. Lint: PASS.
66. Build: PASS.
67. Dependency action: exact-lockfile `npm ci --ignore-scripts`.
68. `package.json` changed: NO.
69. `package-lock.json` changed: NO.
70. Known test warning: WebSocket port 24678 already in use; test command still exited 0.
71. Runtime closure expected: 19.
72. Runtime closure actual: 19.
73. Runtime closure omitted: 0.
74. Runtime closure unexpected: 0.
75. Authority contract: `PR3-BROWSER-CAPTURE-IMPLEMENTATION-AUTHORITY-v1`.
76. Authority repository ID: `e2r-liaison-scape-browser-capture`.
77. Authority semantic commit: `5e1581b2fb59f6f241e715604fdd4f2e082f2d1b`.
78. Authority manifest count: 19.
79. `main.tsx` identity: unchanged.
80. `main.tsx` Git blob: `b671e09d2729fc8ac1002ed2bc0740f1107baefd`.
81. `main.tsx` raw SHA-256: `116B684D3D87C3FBA58C5EBEA64182650324125BCB0F2BD3DD30A50024AB9F49`.
82. Corrected executor Git blob: `9ebd60847bfe29f2cc5c8d00cb3795a24a3b7474`.
83. Corrected executor raw SHA-256: `E79DEE398C12A6B3391930BBC4918B93C89D23FD83B54C2A7A61B829A62C0EFD`.
84. Executor semantic classification: `SEMANTIC-IMPACT-B`.
85. Artifact directory: `diagnostics/restart2-executor-run-root-binding-correction1/` in the correction clone.
86. Correction artifact index count: 6; index self-hash excluded.
87. B1 item JSON in correction diagnostics: 0.
88. V3 item JSON in correction diagnostics: 0.
89. Screenshot files in correction diagnostics: 0.
90. Product state: not modified; pre-existing user-owned dirty sample files preserved.
91. Machine/Harness/fixture/host/GPU/Windows Update/`ai-knowledge`: not modified.
92. Exact next prerequisite: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1-RESTART3-PROTOCOL-A`, NOT STARTED.

## Evidence locations

The correction clone contains the implementation, focused tests, and the six-file diagnostic record under:

`C:\Users\extra\E2R\e2r-liaison-scape-browser-capture-run-binding-correction1\diagnostics\restart2-executor-run-root-binding-correction1\`

The record includes `binding-contract.json`, `static-trace.json`, `focused-test-results.json`, `dry-run-validation.json`, `authority-self-check.json`, `audit-results.json`, and `artifact-index.json`. No push, tag, release, deploy, or publication occurred.
