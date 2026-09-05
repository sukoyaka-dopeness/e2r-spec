# E2R-SPEC / LiaisonScape - Browser Capture Restart4 B1 Execution1

Checkpoint date: 2026-09-05. This governed B1 execution used the accepted
Restart4 Protocol A once. The executor stopped after the first item reached
terminal failure after its bounded retries. V3 and all review stages were not
started.

1. CASE: `CASE 2`.
2. Decision: `RESTART4-B1-EXECUTION-INCOMPLETE`.
3. Semantic impact: `NONE`; no semantic source, helper, Product, or authority correction was made.
4. Exact e2r-spec starting HEAD: `1a5957608cee2daf43f741fdbc7d594819de1e09`.
5. Protocol A documentation final authority: `1a5957608cee2daf43f741fdbc7d594819de1e09`.
6. Restart4 Protocol A commit: `7fab50b33f514c6b27b838ec58ca6aa7f145ca9e`, `evidence: bind Browser Capture Restart4 Protocol A`.
7. Restart4 B1 evidence commit: `25e65b89f275eef9511c5e9792ea6e3bd927db29` (`evidence: record incomplete Browser Capture Restart4 B1`).
8. Restart4 semantic ID: `pr3r1-ec74872605846cbb9bc1c1b6d8acf5bb083bc4c65c58b44dcb24836fcd1f6861`.
9. Semantic implementation authority: `ba3cb3dd50ab723a7b4a4a5c2b839bc2abef87d4`; closure `21/21`, omitted `0`, unexpected `0`.
10. Helper EXE raw SHA: `17F38BFC4DB37EC6A7D906D6A7E90EFD64864FEE336D2215F7BB1CEE20182E86`.
11. Build authority SHA: `DB0A717A579BC52BDF86DA7B0C25FF238893DA0410E11A3343D7F874B1FDBC37`.
12. Client authority v2 SHA: `4C87A2359BF5146E6781B97208A85B04B76A53966977BDEDFF9BAB01A84D8BF9`.
13. Edge authority: `C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe`, version `152.0.4191.62`.
14. Preexecution dry-run: `RUN-BINDING-VALID`; Restart4 artifact root resolved exactly.
15. Exact real B1 command/interface: `node experimental/product-evaluation-seam/browser-capture1/browser-capture.mjs b1 --protocol-a C:/Users/extra/E2R/e2r-liaison-scape-visual-evidence-browser-capture-restart4/artifacts/browser-capture-restart4-2026-09-05/protocol-a.json`.
16. Ordered B1 items: `apollo-11/en`, `apollo-11/ja`, `ashen-crown/en`, `ashen-crown/ja`, `berlin-wall/en`, `berlin-wall/ja`, `district-solar-cooperatives/en`, `district-solar-cooperatives/ja`, `lighthouse-production-committed/en`, `lighthouse-production-committed/ja`, `regional-care-coordination/en`, `regional-care-coordination/ja`, `regional-emergency-response/en`, `regional-emergency-response/ja`, `titanic/en`, `titanic/ja`.
17. B1 planned: `16`.
18. B1 executed: `1` terminal item.
19. B1 success: `0`.
20. B1 failure: `1` terminal item.
21. B1 pending: `15`.
22. Total attempts: `3`.
23. Total retries: `2`.
24. Per-item status: `apollo-11/en` = `BROWSER-CAPTURE-FAILURE`; all other 15 items were not entered and remain pending.
25. Per-item attempts/retries: `apollo-11/en` = attempts `3`, retries `2`; all other items = attempts `0`, retries `0`.
26. Failing item ID: `apollo-11/en` (`b1/apollo_11__en.json`).
27. Pending item IDs: `apollo-11/ja`, `ashen-crown/en`, `ashen-crown/ja`, `berlin-wall/en`, `berlin-wall/ja`, `district-solar-cooperatives/en`, `district-solar-cooperatives/ja`, `lighthouse-production-committed/en`, `lighthouse-production-committed/ja`, `regional-care-coordination/en`, `regional-care-coordination/ja`, `regional-emergency-response/en`, `regional-emergency-response/ja`, `titanic/en`, `titanic/ja`.
28. Edge launches: `3` fresh governed attempts.
29. Vite runtime launches: `1` executor-owned runtime server.
30. Helper EXE launches: `3` governed attempts.
31. CDP sessions: `0` completed sessions; helper connection failed before a usable CDP session.
32. Fresh profiles: `3`.
33. Unique remote-debugging ports: `3` (`9668`, `9774`, `9769` recorded in failure messages).
34. Profile reuse count: `0`.
35. Port reuse count: `0`.
36. `Inspector.targetCrashed` count: `0`.
37. GPU fatal count: `0`.
38. Cache-lock count: `0`.
39. Helper stderr errors: `0` retained; the failure arrived as a helper IPC `ERROR` envelope.
40. IPC errors: `3` helper protocol connection failures, one per attempt.
41. Forced kills: `0` recorded as forced-kill events; executor issued bounded child cleanup for each attempt.
42. Teardown/quiescence: teardown cleanup was issued for all `3` attempts; quiescence passes `0` because no CDP capture completed.
43. Screenshot count: `0`.
44. Post-B1 artifact-index SHA: `6FDC0590AB51C7AC47732EC920F5559110BF8FD7B4C11DC37F0071C0A7B135CC`.
45. Post-B1 run-manifest SHA: `AC30E524B3414F1CFD06D41401EFFF6223E1C55130E2A6622BFA11AC87294C08`.
46. Artifact integrity: `PASS`; 11 indexed files, 0 duplicate paths, 0 missing files, all indexed hashes matched.
47. Semantic ID unchanged proof: `PASS`; final ID equals Protocol A ID exactly.
48. EXE/build/client authority unchanged proof: `PASS`; all three authority SHA values remain exact.
49. Focused pre/post tests: `102/102 PASS` before and after B1.
50. Full npm test pre/post: `309/309 PASS` before and after B1.
51. Lint/build pre/post: `PASS` before and after B1; `node --check` also `PASS`.
52. V3 executed: `0`; V3 remains `NOT STARTED`.
53. Browser Evidence B: `NONE / INCOMPLETE`; no final Browser Evidence B was materialized.
54. Human Review: `NOT STARTED`.
55. Review1 eligibility: `NO`.
56. PR-3: `NO`.
57. Historical Restart3: unchanged at HEAD `45a8a1c55a41f767b3f22ad963321dda6fd9a755`; not resumed.
58. Restart4 B1 complete: `NO`.
59. V3 eligibility: `NO` because B1 did not complete.
60. Exact next prerequisite: no V3 execution is authorized; a separately bounded B1 runtime-infrastructure diagnosis/correction is required before any retry.
61. Next checkpoint: `NOT STARTED`.
62. Restart4 artifact root: `artifacts/browser-capture-restart4-2026-09-05`.
63. Result document: `docs/liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-restart4-b1-execution1.md`.
64. Roadmap status: `CHANGED` additively with the incomplete B1 result.
65. E2R-SPEC validation: `PASS` (`npm.cmd run validate`).
66. E2R-SPEC commit: `942e024f02fd6df93a1b7c0fea70cbc5dc7491f2` (`docs: record incomplete Browser Capture Restart4 B1`), substantive documentation commit.
67. Restart4 final worktree: `CLEAN` after the B1 evidence commit.
68. E2R-SPEC final worktree: `CLEAN` after non-amending result-reference finalization.
69. Live Product/Machine/Harness/Baseline preservation: `YES`; no changes were made.
70. `--disable-gpu-sandbox` used: `NO`.
71. Push/tag/release/deploy/publication: `NONE`.

The checkpoint stops after the truthful incomplete B1 materialization. No B1
rerun, V3 execution, screenshot production, Browser Evidence B completion,
Human Review, Review1, ranking, selection, or PR-3 completion occurred.
