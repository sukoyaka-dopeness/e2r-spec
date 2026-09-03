# LiaisonScape Initial Placement Seed: Run Configuration Adoption1

Date: 2026-09-03

Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-RUN-CONFIGURATION-ADOPTION1`

Status: complete; static authority audit and run-configuration adoption only.
No evidence execution occurred.

## CASE / Decision

**CASE 1 / Decision A — RUN CONFIGURATION ADOPTED**

All accepted prerequisites remain intact. `PR3-RUNTIME-TRANSFORM-v1` is
formally adopted and frozen for the bounded LiaisonScape Initial Placement
Seed production-candidate PR-3 evaluation lineage:

```text
originX = 0/1
originY = 0/1
scale   = 6144/1
```

The resulting status tokens are:

```text
PR3-CANONICAL-RUNTIME-ORIGIN-v1 = FROZEN
RC-SPACING-v1 = RETAINED
SCALE-COMPATIBILITY-EVIDENCED = RETAINED
PR3-RUNTIME-TRANSFORM-v1 = ADOPTED / FROZEN
RUN-CONFIGURATION-ADOPTION1 = COMPLETE
RUN-CONFIGURATION = ADOPTED FOR PR-3 EXECUTION
Machine Execution1 = ELIGIBLE / NOT STARTED
PR-3 = NO
```

Adoption freezes a numeric evaluation configuration only. It is not a Product
coordinate policy, E2R Core coordinate policy, candidate semantic, visual
acceptance, candidate selection, Product integration, general automatic-layout
scale, arbitrary-origin equivalence claim, browser evidence, or PR-3 claim.

## Authority audit

The e2r-spec starting HEAD was `d85fec80044e61097d75ead11743033fa3d5064f`,
whose lineage contains the requested prior reconciliation commit
`f3c440f68f9366407896208a4790803864859c24`. The accepted checkpoint documents
remain present and internally consistent:

| Authority | Result preserved |
| --- | --- |
| Design1 | CASE 2 / Decision B, later resolved by accepted bounded evidence and reconciliation |
| Design1 Correction1 | CASE 1 / Decision A; corrected counts |
| Evidence1 | VALID; CASE 4 / Decision D; translation covariance fails |
| Evidence1 Protocol Provenance Reconciliation1 | VALID provenance correction; semantics unchanged |
| Translation Covariance Design Reconciliation1 | CASE 1 / Decision A; TC-B + TC-D; canonical origin frozen |
| Canonical-origin Evidence2 | CASE 1 / Decision A; transform adoption recommended; authority `ecad472c48b12e4fccb0d71f2edd44ec2e13f55c` |
| Evidence2 Protocol / executable | `91d6cea340a717b11806b0563aeb43f861badf1c` |
| Evidence2 Source-Hash Provenance Reconciliation1 | CASE 1 / Decision A; `HASH-RECORD-DRIFT`; Product source drift NO |
| Harness Design1 | accepted disposable harness contract boundary |
| Harness Implementation1 | CASE 1 / Decision A; authority `9bd3f3b819bf07ccdfa0339be9a953d045c4e4fc` |
| Baseline2 | authority `324193eda5924d2c5f5d0e0cad8a92b64d2ea6a8` |

Live Product HEAD remains `563d5bc3ce8d3a915c75dd13b33188ae6f7fccaf`.
The Harness, Evidence1 clone, Evidence2 clone, retained materializer authority,
and Baseline2 authority all remain at their accepted commits. Product has only
the two pre-existing protected dirty sample files; neither was modified,
staged, restored, or used as source authority.

## Canonical source provenance

Adoption1 applies the prospective convention
`PRODUCT-SOURCE-RAW-BLOB-SHA256-v1`: each Product source identity binds a
commit, path, Git blob ID, and SHA-256 over the exact raw Git blob bytes. No
working-tree, CRLF checkout, or mixed-EOL hash is authoritative.

| Commit | Path | Git blob ID | Raw blob SHA-256 |
| --- | --- | --- | --- |
| `563d5bc3ce8d3a915c75dd13b33188ae6f7fccaf` | `src/auto-layout.ts` | `a7bb99d6628fe127eef7defe9ffdd957591de150` | `63547927D0B5DE990D596EEAF5925A7877F2677165A3DF676DA9123FC3030212` |
| `563d5bc3ce8d3a915c75dd13b33188ae6f7fccaf` | `src/viewport.ts` | `86f6baa3e21b67e28d4f12c4cb0714c611000791` | `5572E4A0AA270AB07C16F44FE6B2E580695C83347821FDC041C1AB8F30833114` |
| `563d5bc3ce8d3a915c75dd13b33188ae6f7fccaf` | `src/graph-presentation.ts` | `6ee2ef099e994aa1feb34c9dada6359e30bcb769` | `FE4B0EC9770897F25A29835ABDA35C3C74E1BE97F60348CEF99555072790C19C` |

The retained materializer authority is
`fd563340625fd3d88dc25baedc93c4f8fe69e5e7`. The already accepted Evidence2
source snapshot safely binds the relevant paths; this is not a new materializer
audit:

| Snapshot commit | Path | Git blob ID | Raw blob SHA-256 |
| --- | --- | --- | --- |
| `ecad472c48b12e4fccb0d71f2edd44ec2e13f55c` | `experimental/production-candidate-materialization/core/fp1.mjs` | `02392f7265193098115fe10f303815b373de876d` | `3B1B7567D5A56BDE6DF66B2771E0C5AE1F7190483DA2E6BB6DCECBB587BBFBF6` |
| `ecad472c48b12e4fccb0d71f2edd44ec2e13f55c` | `experimental/production-candidate-materialization/core/materializer.mjs` | `c4537a79e9306211872c2c82e0afe0d58cfbfd8d` | `850E9F9D8F6624DD9BF4B3ABC6DC6DC143037F8BDA0AE357F3C8924E502E8CF4` |

These snapshot rows are subordinate to the retained materializer authority;
they do not promote the disposable materializer into Live Product ownership.
Future Machine Execution1 must compare this frozen source bundle before any
execution. A changed relevant Git blob is `SOURCE-DRIFT` and blocks execution.
Working-tree line-ending differences alone are not source drift when the Git
object identity is unchanged.

## Adopted transform contract

`PR3-CANONICAL-RUNTIME-ORIGIN-v1` supplies the canonical no-added-translation
origin `0/1, 0/1`. This does not prove arbitrary origins are raw-Number
equivalent; Evidence1's historical translation-covariance failure remains
unchanged.

`RC-SPACING-v1`, `SCALE-COMPATIBILITY-EVIDENCED`, and fresh canonical-origin
Evidence2 jointly supply the scale:

```text
FP1_MAX_N = 65
minimum normalized x gap = 1/64
Product clearance = 96
scale = 64 × 96 = 6144
```

The exact rational value `6144/1` is frozen without rounding. The FP1 contract
is unchanged: `N=1` gives `P0=(0,0)`; for `N>1`, `m=N-1`,
`x_i=i/m`, `y_i=i²/m²`, for `i=0..N-1`.

The adopted runtime mapping is:

```text
x_runtime = originX + scale * x_exact
y_runtime = originY + scale * y_exact
```

The exact substrate remains rational until the accepted JS Number conversion
boundary; scale is positive, one conversion occurs at the existing
materialization boundary, and there is no implicit fit or per-candidate,
per-fixture, or per-locale tuning.

Evidence2's transform fingerprint is safely reusable because its meaning is
unambiguous in the accepted runner: SHA-256 of
`JSON.stringify(canonical(TRANSFORM), null, 2)` plus one final LF, where object
keys are recursively sorted. The fingerprint is
`102F16DCEF44096686B67B34BDF385A5E71DDDC085183F0B9BA65F9785C34786`.

`PR3-RUNTIME-TRANSFORM-v1` is candidate-neutral, fixture-neutral,
locale-neutral, deterministic, one global predeclared transform, immutable
within this run lineage, and not visually tuned. Changing origin, scale, or
conversion semantics creates a new run-configuration lineage. Existing
evidence from separate lineages must not be mixed.

The historical Harness Implementation1 transform `originX=100/1`,
`originY=200/1`, `scale=10/1` remains implementation-test-only and is
explicitly excluded from Machine Execution1 PR-3 evidence.

## Future execution boundary

The adopted scope is only the LiaisonScape Initial Placement Seed
production-candidate PR-3 evaluation lineage, covering all five authorized
structural assignment candidates, PR-3 structural fixtures, applicable EN/JA
presentation variants, and all cells in the same lineage. There is no per-cell
override.

| Operational candidate | Materializer identity |
| --- | --- |
| `TA0/REP-0` | `TA0-REP0-MAT-v1` |
| `TA2-DEG-W1-OP-v1` | `TA2-DEG-MAT-v1` |
| `TA2-MOTIF-W1-OP-v1` | `TA2-MOTIF-MAT-v1` |
| `TA3-FWD-W1-OP-v1` | `TA3-FWD-MAT-v1` |
| `TA3-REV-W1-OP-v1` | `TA3-REV-MAT-v1` |

TA1 remains witness-only and K3 remains control-only. No ranking or selection
was performed.

The corrected phase plan is V0 `40`, V1 `40`, V2 `80`, Machine candidate total
`160`, V3 `80`, full candidate V0–V3 total `240`, B0 `8`, B1 `32`, and total
diagnostics `40`.

`VSR-FIXTURE-v1` and
`docs/evidence/visual-fixture-role-manifest-v1.json` remain authoritative.
The verified manifest raw SHA-256 is
`B867E9FF7B84107E8B4DDCCC02458B7B9AA535AB6FACE4AD10A2942CC8C8D8F5`.
Protected dirty Live sample bytes are not fixture authority.

Browser configuration remains the accepted boundary: Microsoft Edge Stable,
with the exact version bound at the actual future browser run; viewport
1280×900 CSS px, DSF 1, zoom 100%, SVG viewBox `0 0 800 500`. Adoption1 did
not launch a browser or freeze today's version.

The accepted Design1 and Harness documents do not define an Adoption1-specific
e2r-spec-owned machine-readable artifact path or schema. Therefore:

```text
MACHINE-READABLE-ADOPTION-ARTIFACT = NOT DEFINED
```

The normative Adoption1 result is this document. No Harness artifact contract
was invented or modified.

## What this checkpoint did not close

No Evidence1 or Evidence2 rerun, FP1 execution, settling, routing, labels, fit,
candidate materialization, candidate execution, real fixture execution, V0,
V1, V2, V3, B0, B1, browser, CDP, screenshot, human review, visual criterion,
ranking, winner, selection, Product integration, or PR-3 assessment occurred.

```text
candidate execution = 0
real fixture execution = 0
V0 PR-3 evidence = NONE
V1 PR-3 evidence = NONE
V2 PR-3 evidence = NONE
V3 PR-3 evidence = NONE
B0/B1 execution = 0
browser = NO
screenshot = NO
human review = NO
E-VISUAL = NO
candidate ranking = NO
candidate selected = NO
Product integration = NO
PR-3 = NO
```

The exact next prerequisite is
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-MACHINE-EXECUTION1`.
It is the first checkpoint permitted to execute the frozen machine matrix.
It is **NOT STARTED** here.

## Knowledge Candidate assessment

The commit + path + Git blob ID + raw blob SHA-256 convention remains useful
and is now recorded prospectively for this repository's bounded evidence
lineage. It remains repository-local evidence and does not justify a new
`ai-knowledge` entry. Decision: **NO NEW ENTRY**. `ai-knowledge` was not
changed.

## Final report

1. CASE: CASE 1.
2. Decision: Decision A — RUN CONFIGURATION ADOPTED.
3. e2r-spec starting HEAD: `d85fec80044e61097d75ead11743033fa3d5064f`.
4. Product authority: `563d5bc3ce8d3a915c75dd13b33188ae6f7fccaf`.
5. Harness authority: `9bd3f3b819bf07ccdfa0339be9a953d045c4e4fc`.
6. Materializer authority: `fd563340625fd3d88dc25baedc93c4f8fe69e5e7`.
7. Baseline2 authority: `324193eda5924d2c5f5d0e0cad8a92b64d2ea6a8`.
8. Evidence1 formal validity preserved: YES.
9. Evidence1 CASE 4 / Decision D preserved: YES.
10. Design Reconciliation1 CASE preserved: YES, CASE 1 / Decision A.
11. Evidence2 formal validity preserved: YES.
12. Evidence2 CASE 1 / Decision A preserved: YES.
13. Source-hash reconciliation CASE 1 / Decision A preserved: YES.
14. `PRODUCT-SOURCE-RAW-BLOB-SHA256-v1` used: YES.
15. Auto-layout commit: `563d5bc3ce8d3a915c75dd13b33188ae6f7fccaf`.
16. Auto-layout path: `src/auto-layout.ts`.
17. Auto-layout Git blob: `a7bb99d6628fe127eef7defe9ffdd957591de150`.
18. Auto-layout raw SHA-256: `63547927D0B5DE990D596EEAF5925A7877F2677165A3DF676DA9123FC3030212`.
19. Viewport Git blob: `86f6baa3e21b67e28d4f12c4cb0714c611000791`.
20. Viewport raw SHA-256: `5572E4A0AA270AB07C16F44FE6B2E580695C83347821FDC041C1AB8F30833114`.
21. Graph-presentation Git blob: `6ee2ef099e994aa1feb34c9dada6359e30bcb769`.
22. Graph-presentation raw SHA-256: `FE4B0EC9770897F25A29835ABDA35C3C74E1BE97F60348CEF99555072790C19C`.
23. Product source drift: NO.
24. Harness drift: NO.
25. Materializer drift: NO.
26. `PR3-CANONICAL-RUNTIME-ORIGIN-v1` status: FROZEN.
27. originX: `0/1`.
28. originY: `0/1`.
29. `RC-SPACING-v1` status: RETAINED.
30. FP1_MAX_N: 65.
31. Minimum normalized x gap: `1/64`.
32. Product clearance: 96.
33. Scale derivation: `64 × 96 = 6144`.
34. Adopted scale: `6144/1`.
35. Evidence2 transform fingerprint retained: YES.
36. Transform fingerprint: `102F16DCEF44096686B67B34BDF385A5E71DDDC085183F0B9BA65F9785C34786`.
37. `PR3-RUNTIME-TRANSFORM-v1` status: ADOPTED / FROZEN.
38. Full adopted transform: `originX=0/1, originY=0/1, scale=6144/1`.
39. Candidate-neutral: YES.
40. Fixture-neutral: YES.
41. Locale-neutral: YES.
42. One global transform: YES.
43. No visual tuning: YES.
44. Implementation-test transform excluded: YES.
45. Implementation-test transform: `100/1, 200/1, 10/1`.
46. Fixture manifest SHA: `B867E9FF7B84107E8B4DDCCC02458B7B9AA535AB6FACE4AD10A2942CC8C8D8F5`.
47. Authorized candidate count: 5.
48. Authorized candidates: TA0/REP-0; TA2-DEG-W1-OP-v1; TA2-MOTIF-W1-OP-v1; TA3-FWD-W1-OP-v1; TA3-REV-W1-OP-v1.
49. V0 planned records: 40.
50. V1 planned records: 40.
51. V2 planned records: 80.
52. Machine candidate total: 160.
53. V3 planned records: 80.
54. Full candidate total: 240.
55. B0 planned diagnostics: 8.
56. B1 planned diagnostics: 32.
57. Total diagnostics: 40.
58. Browser authority preserved: YES.
59. Browser launched: NO.
60. Machine-readable adoption artifact status: NOT DEFINED.
61. `RUN-CONFIGURATION-ADOPTION1` status: COMPLETE.
62. Machine Execution1 eligible: YES.
63. Candidate executions added: 0.
64. Real fixture executions added: 0.
65. V0 PR-3 evidence: NONE.
66. V1 PR-3 evidence: NONE.
67. V2 PR-3 evidence: NONE.
68. V3 PR-3 evidence: NONE.
69. B0/B1 execution added: 0.
70. Screenshot: NO.
71. Human review: NO.
72. E-VISUAL: NO.
73. Candidate ranking: NO.
74. Candidate selected: NO.
75. Product integration: NO.
76. PR-3: NO.
77. Result document path: `docs/liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-run-configuration-adoption1.md`.
78. Roadmap: CHANGED additively.
79. Knowledge Candidate decision: NO NEW ENTRY.
80. ai-knowledge: UNCHANGED.
81. e2r-spec validation: PASS.
82. diff-check: PASS.
83. e2r-spec commit hash/subject: recorded after validation and commit.
84. e2r-spec worktree: expected clean after commit.
85. Live HEAD/state: Product remains at `563d5bc3ce8d3a915c75dd13b33188ae6f7fccaf`; two protected sample files remain dirty and untouched.
86. Protected samples preserved: YES.
87. Original Harness state: unchanged and clean at `9bd3f3b819bf07ccdfa0339be9a953d045c4e4fc`.
88. Evidence1 clone changed: NO.
89. Evidence2 clone changed: NO.
90. Retained materializer state: authority unchanged at `fd563340625fd3d88dc25baedc93c4f8fe69e5e7`; pre-existing untracked `experimental/` preserved.
91. Baseline2 state: unchanged and clean at `324193eda5924d2c5f5d0e0cad8a92b64d2ea6a8`.
92. Exact next prerequisite: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-MACHINE-EXECUTION1`.
93. Next checkpoint: NOT STARTED.
94. Push/tag/release/deploy/publication: NONE.
