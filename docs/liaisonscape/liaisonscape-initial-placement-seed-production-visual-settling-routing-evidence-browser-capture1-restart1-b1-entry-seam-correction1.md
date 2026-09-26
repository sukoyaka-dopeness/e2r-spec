# LiaisonScape Browser Capture1 Restart1 B1 Entry-Seam Correction1

- Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1-RESTART1-B1-ENTRY-SEAM-CORRECTION1`
- Date: 2026-09-04 (JST)
- Result: **CASE 1 / DECISION A — `B1-ENTRY-SEAM-CORRECTED`**
- Semantic result: **`SEMANTIC-IMPACT-B`**

## Scope and correction

The preceding Diagnostic1 result identified `ENTRY-B / URL-ROUTE-MISMATCH`
with subordinate `PAGE-BOOTSTRAP-FAILURE`. The e2r-spec starting HEAD was
`97e8877de835ecc00b221cb9d49d01eba54a7015`. The blocked Restart1 authority
remained
`C:\Users\extra\E2R\e2r-liaison-scape-visual-evidence-browser-capture-restart1`
at `6b3e9f16424de283248298cb03e0f42c8a9eb9e7`. Diagnostic1 authority was
`a9fa2d7890a1a9db65178b38e5434fa8c1de5477`.

The correction was performed in the fresh clone
`C:\Users\extra\E2R\e2r-liaison-scape-browser-capture-b1-entry-seam-correction1`,
based exactly on `6b3e9f16424de283248298cb03e0f42c8a9eb9e7`. Only the isolated
entry's input URL resolution and its focused assertion were changed:

- `experimental/product-evaluation-seam/browser-capture1/main.tsx`
- `experimental/product-evaluation-seam/browser-capture1/entry.test.ts`
- `diagnostics/b1-entry-seam-correction1/` diagnostic scripts and artifacts

The entry now constructs `new URL("/capture-input.json", location.origin)` and
preserves the existing cache-bust query. It does not accept HTML as input,
change the ready predicate, change the timeout, add a fallback route, or add
Apollo/locale-specific behavior. Product source semantics and the fixture
corpus were not changed.

## Correction contract and validation

For the single permitted item `apollo-11 / en`, the old request was
`/e2r-liaison-scape/capture-input.json?cacheBust=...`, which returned the Vite
HTML fallback (`200 text/html`). The corrected request was:

```text
http://127.0.0.1:4173/capture-input.json?cacheBust=%3Fcell%3Dapollo_11__en%26attempt%3D1
```

The server command remained the accepted direct Vite command:

```text
node node_modules/vite/bin/vite.js experimental/product-evaluation-seam/browser-capture1 --host 127.0.0.1 --port 4173
```

The server cwd was the correction clone root. The static server probe passed:
the B1 target returned `200 text/html`, the corrected input returned
`200 application/json`, JSON parsing passed, and the response SHA-256 matched
the expected input SHA-256:

```text
C70820FC981EBB3E78B7473102016546B685AFE64963DE50F45AFA7D218AD4A0
```

The parsed fixture ID was `apollo-11`, the parsed locale was `en`, and the
served bytes were unchanged from the expected input bytes.

The browser validation ran **YES**, exactly one attempt, with fresh Edge
process/profile and the existing normal-sandbox contract. Edge was
`C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe`,
`Edg/152.0.4191.62`; authority drift was **NO**. `--disable-gpu-sandbox` was
not used. First CDP was `447 ms` in this validation.

The exact B1 target navigated successfully. The document reached
`readyState: complete`; `#evaluation-root` mounted; the expected SVG mounted
with viewBox `0 0 800 500`; and
`globalThis.__E2R_BROWSER_READY__ === true` became true on poll 2. The existing
readiness predicate and timeout were unchanged. There were zero console errors,
zero Runtime exceptions, zero `Network.loadingFailed` events, zero GPU-fatal
signals, and zero cache-lock signals. Teardown/quiescence passed. Diagnostic
screenshots: `0`; screenshot evidence class: `NONE`.

## Semantic impact and boundary

The implementation bytes of `browser-capture1/main.tsx` changed after Protocol
A. Therefore the conservative classification is **`SEMANTIC-IMPACT-B — RUN-IDENTITY /
PROTOCOL AUTHORITY CHANGES REQUIRED`**. The old `pr3r1-6560dd8187ddaa1ff002034ab99ffe91a3336b430f449cc1f1c7da85e26659d9`
semantic ID is **not reusable** for corrected future evidence. The old Restart1
lineage remains a valid historical blocked lineage, but is **not resumable for
corrected evidence**. Its historical failed B1 record is preserved.

The entry seam was corrected: **YES**. Readiness predicate changed: **NO**.
Timeout changed: **NO**. Product source semantics changed: **NO**. Fixture
corpus changed: **NO**. Browser authority changed: **NO**. Windows Update,
GPU driver, and graphics settings changed: **NO** / **NO** / **NO**.

The exact next prerequisite is a fresh corrected Browser Capture Protocol A /
Restart2 checkpoint:

`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1-RESTART2-PROTOCOL-A`

It is **NOT STARTED**. This checkpoint does not resume the old B1 gate.

## Downstream state

B1 full gate resumed: **NO**. Remaining B1 items executed: `0`. V3 executed:
`0`. Browser Evidence B: `NONE`. Human Review: `NO`. Review1 eligible: **NO**.
E-VISUAL: `NO`. Ranking: `NO`. Selection: `NO`. Product integration: `NO`.
PR-3: `NO`. No canonical screenshot or Browser Evidence B was created.

## Final report

1. Case: `CASE 1`
2. Decision: `B1-ENTRY-SEAM-CORRECTED / SEMANTIC-IMPACT-B`
3. e2r-spec starting HEAD: `97e8877de835ecc00b221cb9d49d01eba54a7015`
4. Blocked Restart1 authority: `6b3e9f16424de283248298cb03e0f42c8a9eb9e7`
5. Diagnostic1 authority: `a9fa2d7890a1a9db65178b38e5434fa8c1de5477`
6. Correction clone: `C:\Users\extra\E2R\e2r-liaison-scape-browser-capture-b1-entry-seam-correction1`
7. Correction clone base: `6b3e9f16424de283248298cb03e0f42c8a9eb9e7`
8. Exact files changed: `main.tsx`, `entry.test.ts`, and correction diagnostics only
9. Old input URL: `/e2r-liaison-scape/capture-input.json?cacheBust=...`
10. Old response: `200 text/html` (Vite HTML fallback)
11. Corrected input URL: `http://127.0.0.1:4173/capture-input.json?cacheBust=%3Fcell%3Dapollo_11__en%26attempt%3D1`
12. Corrected response: `200 application/json`
13. Input JSON parse: `PASS`
14. Input SHA-256: `C70820FC981EBB3E78B7473102016546B685AFE64963DE50F45AFA7D218AD4A0`
15. Fixture ID: `apollo-11`
16. Locale: `en`
17. Apollo-specific hardcode introduced: `NO`
18. Server command: direct Vite command above
19. Server cwd: correction clone root
20. Static server probe: `PASS`
21. Focused tests: `PASS` (`5/5`)
22. Browser validation executed: `YES`
23. Validation attempts: `1`
24. Edge: `152.0.4191.62` at the accepted executable path
25. Browser authority drift: `NO`
26. Normal-sandbox confirmed: `YES`
27. `--disable-gpu-sandbox` used: `NO`
28. Page navigation: `PASS`
29. Evaluation root: `YES`
30. SVG: `YES`
31. SVG viewBox: `0 0 800 500`
32. Ready marker true: `YES`
33. Console error count: `0`
34. Runtime exception count: `0`
35. Network failure count: `0`
36. GPU fatal count: `0`
37. Cache-lock count: `0`
38. Teardown/quiescence: `PASS`
39. Diagnostic screenshot count: `0`
40. Diagnostic screenshot evidence class: `NONE`
41. Entry seam corrected: `YES`
42. Readiness predicate changed: `NO`
43. Timeout changed: `NO`
44. Product source semantics changed: `NO`
45. Fixture corpus changed: `NO`
46. Semantic impact: `SEMANTIC-IMPACT-B`
47. Existing Restart1 semantic ID still reusable: `NO`
48. Old Restart1 corrected-evidence resumable: `NO`
49. Old B1 historical failure preserved: `YES`
50. B1 full gate resumed: `NO`
51. Remaining B1 executed: `0`
52. V3 executed: `0`
53. Browser Evidence B: `NONE`
54. Human Review: `NO`
55. Review1 eligible: `NO`
56. E-VISUAL: `NO`
57. Ranking: `NO`
58. Selection: `NO`
59. Product integration: `NO`
60. PR-3: `NO`
61. Windows Update changed: `NO`
62. GPU driver changed: `NO`
63. Graphics settings changed: `NO`
64. Exact next prerequisite: fresh corrected Browser Capture Protocol A / Restart2
65. Next checkpoint: `NOT STARTED`
66. Correction artifact root: `C:\Users\extra\E2R\e2r-liaison-scape-browser-capture-b1-entry-seam-correction1\diagnostics\b1-entry-seam-correction1\`
67. Correction clone commit: `4e7489c14618d9732c1e66aa7ef4852e2b03ea2b` — `fix: correct Browser Capture input asset resolution`
68. Correction clone final state: clean, unpushed
69. Result document: this document
70. Roadmap: changed additively
71. Knowledge Candidate: candidate only / no new entry
72. `ai-knowledge`: unchanged
73. e2r-spec validation: `PASS` (recorded before final docs commit)
74. Diff-check: `PASS`
75. e2r-spec commits: `f59fd2290022b3d27a1005ec25916b76b4a82df1` — `docs: record LiaisonScape Restart1 B1 entry-seam correction`; final documentation identity `d27bb8c6f443ce915be6599c5a5a53f11f7423ee` — `docs: record final e2r-spec correction checkpoint identity`
76. e2r-spec worktree: clean after final docs commit
77. Live Product unchanged: `YES`
78. Protected samples preserved: `YES`
79. Machine clone unchanged: `YES`
80. Original Harness unchanged: `YES`
81. Retained materializer unchanged: `YES` (pre-existing `?? experimental/` preserved)
82. Baseline2 unchanged: `YES`
83. Push/tag/release/deploy/publication: `NONE`
