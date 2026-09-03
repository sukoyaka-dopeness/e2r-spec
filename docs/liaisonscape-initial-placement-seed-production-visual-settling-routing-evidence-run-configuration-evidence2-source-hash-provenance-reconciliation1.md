# LiaisonScape Evidence2 Source-Hash Provenance Reconciliation1

- Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-RUN-CONFIGURATION-EVIDENCE2-SOURCE-HASH-PROVENANCE-RECONCILIATION1`
- Date: 2026-09-03
- Status: COMPLETE — static provenance reconciliation only
- CASE / Decision: CASE 1 / Decision A — hash representation and metadata difference only
- Classification: `HASH-RECORD-DRIFT`; `PRODUCT-SOURCE-DRIFT = NO`

## Scope and result

The exact Product Git object is authoritative. No Evidence1 or Evidence2 run,
probe, browser, candidate, fixture, geometry, settling, routing, label, fit,
Adoption1, or PR-3 execution was performed in this checkpoint. Product,
Harness, Evidence1 history, Evidence2 history, and the retained materializer
were not modified.

The canonical raw-byte digest of
`563d5bc3ce8d3a915c75dd13b33188ae6f7fccaf:src/auto-layout.ts` is
`63547927D0B5DE990D596EEAF5925A7877F2677165A3DF676DA9123FC3030212`.
The Product commit resolves that path to Git blob
`a7bb99d6628fe127eef7defe9ffdd957591de150` in SHA-1 object format, with 7,971
raw bytes and LF line endings.

Evidence1 and Evidence2 both imported `src/auto-layout.ts` from their own
clean checkout source trees. Their commit trees resolve that path to the same
blob ID `a7bb99d6628fe127eef7defe9ffdd957591de150`. The raw bytes in those
checkouts were CRLF-materialized and hash to
`257B483A9703A15620FF64D97C485D5FE4EF586489BB9EEB6018E4167733E385`.
Evidence1 therefore recorded the raw bytes of its CRLF checkout. Evidence2's
recorded `2F533946...` value instead matches the Live Product working-tree
bytes, not the Evidence2 checkout bytes used by its imports. The Evidence2
runner never calculates Product source hashes; it copies the protocol's
literal expected values into `source-audit.json` and hashes canonical artifact
content and protocol bytes only.

This is hash-record drift, not Product source drift. Evidence1 remains
formally valid and retains its historical CASE 4 / Decision D substantive
translation-covariance result. Evidence2 remains valid; its CASE 1 / Decision
A, `0/0/6144` recommendation, and Adoption1 eligibility remain unchanged.

## Authorities and exact byte verification

| Item | Value |
| --- | --- |
| e2r-spec starting HEAD | `6450f23a7f5d5457ca9214c964b4ca43d769a238` |
| Product authority | `563d5bc3ce8d3a915c75dd13b33188ae6f7fccaf` |
| Product source path | `src/auto-layout.ts` |
| Git object format | `sha1` |
| Product Git blob ID | `a7bb99d6628fe127eef7defe9ffdd957591de150` |
| Product committed raw bytes | 7,971 |
| canonical raw-blob SHA-256 | `63547927D0B5DE990D596EEAF5925A7877F2677165A3DF676DA9123FC3030212` |

Method A used Node `execFileSync("git", ["cat-file", "blob", blobId],
{ encoding: null })` and `crypto.createHash("sha256").update(Buffer)`:
`63547927D0B5DE990D596EEAF5925A7877F2677165A3DF676DA9123FC3030212`,
7,971 bytes.

Method B independently used Node `execFileSync("git", ["show",
"563d5bc3...:src/auto-layout.ts"], { encoding: null })` and the same direct
Buffer digest operation: the same
`63547927D0B5DE990D596EEAF5925A7877F2677165A3DF676DA9123FC3030212`,
7,971 bytes. Independent hashes are identical: YES.

The Live Product working-tree raw SHA-256 is
`2F53394607E169D377723215A92171F5B4A82212D8F6352A7C96EFA73FC9C6D8` (8,109
bytes). Exact raw worktree equality with the committed blob is NO. Git reports
no `src/auto-layout.ts` status entry and no diff, so the tracked semantic
working-tree content is clean under the repository's line-ending handling.
The Live checkout's only pre-existing dirty paths are the two protected public
JSON files; they were preserved.

Evidence1's HEAD `9738ff477d3d216507d1fba562f45dd77aa72797` and Evidence2's
Protocol A / Evidence B source trees both resolve `src/auto-layout.ts` to the
same blob ID `a7bb99d6628fe127eef7defe9ffdd957591de150`. Their runner imports
resolve to the checkout-local `src/auto-layout.ts` through
`../../../../src/auto-layout.ts`; neither runner imports the Live Product path
at runtime.

## Evidence1 hash provenance

Evidence1 records
`257B483A9703A15620FF64D97C485D5FE4EF586489BB9EEB6018E4167733E385` in
`protocol.json` at
`sourceFiles.productAutoLayout.sha256`, with path `src/auto-layout.ts` and
Product authority `563d5bc3...`. The literal was introduced in Evidence1
semantic protocol commit `ff28b5a4afce56aa4f5ac57181a1f33ebd35d20f`.

`run-probes.mjs` has a `sha256(value)` helper, but its uses hash canonical
JSON artifact strings and the protocol bytes. It does not read or hash
Product source files. The source-audit artifact repeats the literal protocol
metadata and records the probe implementation hash; it does not independently
generate the Product source hash. The exact Evidence1 checkout file is the
CRLF form of the Product blob and hashes to `257B...`. Therefore the recorded
value is correct as a CRLF working-tree/check-out representation, but it is
not the SHA-256 of the exact committed Product blob.

Before this reconciliation, every e2r-spec occurrence of `257B...` was in the
following accepted historical records: the first was commit
`8a66703e5f7e6e22d36dfb5f08840f1a425cdfc2` (2026-09-03 16:10:56 +09:00),
followed by the CSS provenance/adoption records and the Evidence1 result.
The Evidence1 clone contains the protocol literal and its source-audit/result
records; no source-hash generator is present in that clone.

## Evidence2 hash provenance

Evidence2 records
`2F53394607E169D377723215A92171F5B4A82212D8F6352A7C96EFA73FC9C6D8` in
`protocol.protocol.json` at `productSourceHashes["src/auto-layout.ts"]` and
in the generated source-audit field
`expectedSourceHashes["src/auto-layout.ts"]`. The protocol literal was
introduced at Evidence2 first preregistration commit `1c6536c2d01e5acdb86262e97602e9bcb7db78e6`.

The Evidence2 runner's `sha256` helper hashes canonical JSON, transform
fingerprints, protocol bytes, and generated artifact bytes. It never reads
Product source files to produce `productSourceHashes`; `source-audit.json`
is constructed by copying `PROTOCOL.productSourceHashes`. The imported
Evidence2 checkout file is the same CRLF-materialized Product blob as
Evidence1 and hashes to `257B...`. The recorded `2F...` value is the raw hash
of the Live working-tree file (mixed CRLF/LF), not the imported Evidence2
checkout file and not the committed Git blob.

The first e2r-spec occurrence of `2F...` was commit
`8286da75789f95b4268001f70f66c1856389ef56` (2026-09-03 12:40:39 +09:00).
Later design, implementation, and Evidence2 result documents preserved it as
historical source metadata. No Evidence2 source-hash generation or independent
source-byte comparison exists in the runner.

## SOURCE-HASH-METHOD-RECONCILIATION-v1

| Evidence lineage | Recorded hash | Field name | Source authority claimed | Path | Actual byte source | Normalization / text decoding | Line-ending conversion possible | Hash implementation | Raw committed blob? | Meaning |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Evidence1 | `257B483A...` | `sourceFiles.productAutoLayout.sha256` | Product `563d5bc3...` | `src/auto-layout.ts` | Evidence1 checkout working-tree file; 8,157 bytes | No source-file canonicalization in runner; literal protocol metadata | Yes; exact all-LF-to-CRLF variant | No Product-source generator; runner hashes JSON/protocol bytes only | NO | CRLF checkout representation of the same Git blob |
| Evidence2 | `2F533946...` | `productSourceHashes["src/auto-layout.ts"]`; copied to `expectedSourceHashes[...]` | Product `563d5bc3...` | `src/auto-layout.ts` | Live Product working-tree file; 8,109 bytes; not the E2 imported checkout file | No source-file canonicalization in runner; literal protocol metadata | Yes; mixed CRLF/LF working-tree representation | No Product-source generator; runner copies protocol value | NO | Live working-tree metadata representation |
| Canonical Product | `63547927...` | reconciliation reference | Product `563d5bc3...` | `src/auto-layout.ts` | `git cat-file blob a7bb99...`; 7,971 bytes | None; raw bytes only | No conversion | Node Buffer + SHA-256, independently confirmed by `git show` Buffer | YES | Canonical committed blob identity |
| Live working tree | `2F533946...` | diagnostic only | Product checkout | `src/auto-layout.ts` | Live raw file; 8,109 bytes | None for raw diagnostic | Mixed CRLF/LF | Node `readFileSync` Buffer + SHA-256 | NO | Non-authoritative working-tree diagnostic |
| Evidence2 viewport | `53168CE...` | `productSourceHashes["src/viewport.ts"]` | Product `563d5bc3...` | `src/viewport.ts` | E2 checkout and Live working-tree raw bytes; 42,722 bytes | Literal protocol metadata | Full CRLF representation | No Product-source generator | NO | CRLF working-tree representation; coincidental agreement across checkouts |
| Evidence2 graph presentation | `D91F9752...` | `productSourceHashes["src/graph-presentation.ts"]` | Product `563d5bc3...` | `src/graph-presentation.ts` | Live working-tree raw bytes; E2 checkout is `5C146F...` | Literal protocol metadata | Mixed working-tree representations | No Product-source generator | NO | Live working-tree representation |
| Evidence2 materializer | `850E9F9D...` | `materializerSourceHash` | retained authority `fd563340...` | `experimental/production-candidate-materialization/core/materializer.mjs` | E2 committed Git blob is `850E...`; E2 checkout working tree is `5D92A0...` | Literal protocol metadata | CRLF checkout differs from the recorded LF blob | No Product-source generator | YES for the E2 Git blob; NO for the imported checkout bytes | Separate literal authority metadata; not a common method with Product rows |

The Product canonical blobs are also: `src/viewport.ts` blob
`86f6baa3e21b67e28d4f12c4cb0714c611000791`, raw SHA-256
`5572E4A0AA270AB07C16F44FE6B2E580695C83347821FDC041C1AB8F30833114`; and
`src/graph-presentation.ts` blob
`6ee2ef099e994aa1feb34c9dada6359e30bcb769`, raw SHA-256
`FE4B0EC9770897F25A29835ABDA35C3C74E1BE97F60348CEF99555072790C19C`.
Evidence2's source-hash fields were not produced by one consistently applied
known method: NO.

## Byte-variant findings

The canonical auto-layout blob has 186 LF endings, no BOM, and a final LF.
The exact all-CRLF transformation is 8,157 bytes and hashes to `257B...`;
this is exactly the Evidence1 and Evidence2 checkout file. The Live file has
138 CRLF endings and 48 bare LF endings, no BOM, and a final CRLF; its raw hash
is `2F...`. LF-normalizing that Live file produces the canonical 7,971-byte
content and hash. Full CRLF-normalizing the canonical content produces
`257B...`.

No BOM-added or BOM-removed variant matches either recorded hash. No
trailing-newline-added or trailing-newline-removed variant was involved: all
forms retain one final newline; only the final LF versus CRLF byte
representation differs. No text decoding/re-encoding, arbitrary
canonicalization, generated/extracted source, or alternate hash algorithm is
needed to explain the values. The source-hash metadata is nevertheless
incorrect under the claimed exact-committed-blob semantics because the values
were literal and not checked against the authority object.

## Evidence2 invalidated-attempt topology and artifact lineage

| Commit | Parent | Date | Subject | Provenance finding |
| --- | --- | --- | --- | --- |
| `9bd3f3b819bf07ccdfa0339be9a953d045c4e4fc` | `36650462f7f2def95478098a01cb345b9c89cfa1` | — | `test: tighten visual review packet contract` | Initial Harness authority |
| `1c6536c2d01e5acdb86262e97602e9bcb7db78e6` | `9bd3f3b819bf07ccdfa0339be9a953d045c4e4fc` | 2026-09-03 21:41:03 +09:00 | `test: preregister canonical origin Evidence2` | First preregistration; failed before dynamic probe execution due import-path defect |
| `26c94e61631fe9ac73efa87b680f6465d5422d62` | `1c6536c2d01e5acdb86262e97602e9bcb7db78e6` | 2026-09-03 21:41:47 +09:00 | `test: fix canonical origin Evidence2 preregistration` | Replacement; dynamic attempt began and failed before artifact writing because geometry used `width/height` instead of `halfWidth/halfHeight`; invalidated |
| `91d6cea340a717b11806b0563aeb43f861badf1c` | `26c94e61631fe9ac73efa87b680f6465d5422d62` | 2026-09-03 21:42:27 +09:00 | `test: correct canonical origin Evidence2 geometry probe` | Valid Protocol/Executable A; committed before valid dynamic execution |
| `ecad472c48b12e4fccb0d71f2edd44ec2e13f55c` | `91d6cea340a717b11806b0563aeb43f861badf1c` | 2026-09-03 21:43:40 +09:00 | `test: record canonical origin Evidence2` | Evidence Commit B; adds artifacts only |

The exact `91d6cea..` to `ecad472..` diff is additions of the 13 artifact
files only. The `1c6536c..` and `26c94e6..` trees contain no Evidence2
artifact directory. Evidence2 `audit-results.json` records
`protocolExecutableCommitA=91d6cea..` and `protocolPrecededDynamicExecution=true`;
`run-config.json` records `protocolCommitA=91d6cea..`. Therefore invalidated-run
artifact contamination is NO, not indeterminate. Every valid artifact is
bound to `91d6cea..` through the B parent, artifact index, run-config, and
audit-results provenance.

The exact valid artifact set is 13 files: `run-config.json`,
`source-audit.json`, `analytic-proof.json`, `branch-observability.json`,
`branch-risk-results.json`, `family-probes.json`, `settling-probes.json`,
`routing-probes.json`, `label-probes.json`, `fit-probes.json`,
`global-transform-audit.json`, `audit-results.json`, and `artifact-index.json`.
The filesystem set is exact, the index covers the 12 non-self entries, and the
index declares itself `EXCLUDED-FROM-SELF-INDEX`. Stale/unindexed artifact
count: 0. All indexed artifact hashes and byte lengths match the committed B
files. No alternate source-hash lineage is embedded in the artifact set.

## Gate impact and decision

| Gate | Original result | Reconciled result | Reason |
| --- | --- | --- | --- |
| E2-H1 authority/source identity | PASS | PASS | Product commit/path and identical Git blob identity remain satisfied; source-hash fields were metadata, not an executable byte-identity comparison |
| E2-H2 preregistration ordering/integrity | PASS | PASS | Protocol A `91d6cea..` preceded the valid run and B differs only by generated artifacts |
| E2 source-integrity subrecord | `sourceDrift: NONE` | PASS with additive hash-record correction | No Product source drift; the expected source hash fields were not independently generated or checked |

E2-H3 through E2-H22 remain historical Evidence2 results; this checkpoint
did not rerun them. Evidence1 formal validity retained: YES. Evidence1
substantive result retained: YES — its strict translation-covariance result
remains CASE 4 / Decision D. Evidence2 formal validity retained: YES.
Evidence2 CASE 1 / Decision A retained: YES.

The transform recommendation remains `originX=0/1`, `originY=0/1`,
`scale=6144/1`. Adoption1 eligibility remains `ELIGIBLE` for the separate
Adoption1 checkpoint. `PR3-RUNTIME-TRANSFORM-v1` remains `UNFROZEN`.

Prospectively freeze:

`PRODUCT-SOURCE-RAW-BLOB-SHA256-v1`

For every source identified as `<commit>:<path>`, resolve the exact Git blob,
retrieve its raw bytes without text decoding, line-ending normalization, BOM
changes, or trailing-newline changes, hash those bytes with SHA-256, and record
`productCommit`, `sourcePath`, `gitBlobId`, and `rawBlobSha256`. A
`workingTreeSha256` may be recorded only as a non-authoritative diagnostic.
Historical commits and existing Product format are not rewritten.

## Knowledge Candidate and boundary

The rule “source provenance should bind commit + path + Git blob ID + raw
blob SHA-256” is a plausible reusable Knowledge Candidate across E2R evidence
workflows. This single reconciliation is not enough to justify a new shared
`ai-knowledge` entry. Decision: NO NEW ENTRY. Pre-existing dirty
`ai-knowledge/playbooks/e2r-edge-cdp-browser-diagnostic.md` was unchanged.

Candidate execution added: 0. Real fixture execution added: 0. Browser: NO.
Screenshot: NO. Human review: NO. PR-3: NO. No push, tag, release, deploy, or
publication occurred.

Exact next prerequisite:
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-RUN-CONFIGURATION-ADOPTION1`.
Next checkpoint: NOT STARTED. Adoption1 was not started automatically.

## Required final report

1. CASE: CASE 1 — HASH REPRESENTATION / METADATA DIFFERENCE ONLY.
2. Decision: Decision A — additive provenance correction; retain Evidence2 recommendation.
3. e2r-spec starting HEAD: `6450f23a7f5d5457ca9214c964b4ca43d769a238`.
4. Product authority: `563d5bc3ce8d3a915c75dd13b33188ae6f7fccaf`.
5. source path: `src/auto-layout.ts`.
6. Git blob ID: `a7bb99d6628fe127eef7defe9ffdd957591de150`.
7. canonical raw committed blob SHA-256: `63547927D0B5DE990D596EEAF5925A7877F2677165A3DF676DA9123FC3030212`.
8. verification method A result: Node `git cat-file blob` Buffer SHA-256 = canonical hash, 7,971 bytes.
9. verification method B result: Node `git show <commit>:<path>` Buffer SHA-256 = canonical hash, 7,971 bytes.
10. independent hashes identical: YES.
11. Live working-tree SHA-256: `2F53394607E169D377723215A92171F5B4A82212D8F6352A7C96EFA73FC9C6D8`.
12. worktree equals committed source: NO as exact raw bytes; Git semantic diff is clean.
13. auto-layout worktree modified: NO.
14. Evidence1 recorded hash: `257B483A9703A15620FF64D97C485D5FE4EF586489BB9EEB6018E4167733E385`.
15. Evidence1 hash semantics: CRLF checkout working-tree bytes, not exact committed blob bytes.
16. Evidence1 generating implementation/path: literal `sourceFiles.productAutoLayout.sha256` in `protocol/protocol.json`; runner source `experimental/product-evaluation-seam/run-configuration-evidence1/src/run-probes.mjs` does not hash Product source.
17. Evidence1 actual bytes source: Evidence1 checkout `src/auto-layout.ts`, CRLF materialization, 8,157 bytes.
18. Evidence1 raw committed blob hash claim correct: NO under exact raw-blob semantics; YES only as the checkout representation.
19. Evidence2 recorded hash: `2F53394607E169D377723215A92171F5B4A82212D8F6352A7C96EFA73FC9C6D8`.
20. Evidence2 hash semantics: literal Live working-tree metadata value; not the imported E2 checkout bytes and not the committed blob.
21. Evidence2 generating implementation/path: literal `productSourceHashes["src/auto-layout.ts"]` in `protocol/protocol.json`; runner source `experimental/product-evaluation-seam/run-configuration-canonical-origin-evidence2/src/run-probes.mjs` copies it into source-audit and does not hash Product source.
22. Evidence2 actual bytes source: Evidence2 checkout `src/auto-layout.ts`, CRLF materialization, 8,157 bytes, hash `257B...`.
23. Evidence2 raw committed blob hash claim correct: NO; its recorded metadata is not the exact committed blob SHA-256.
24. reason hashes differ: Evidence1 recorded E1 CRLF checkout bytes; Evidence2 recorded Live mixed-EOL bytes; both were literal unverified metadata.
25. LF/CRLF difference involved: YES.
26. BOM difference involved: NO.
27. trailing-newline difference involved: NO added/removed newline; final LF versus CRLF byte representation differs.
28. normalization involved: YES for line-ending representation; no source canonicalization/re-encoding generator was used.
29. transcription/metadata error involved: YES; the literal expected hashes were not bound to the exact Git blob convention.
30. actual Product source drift: NO.
31. `PRODUCT-SOURCE-RAW-BLOB-SHA256-v1` frozen: YES prospectively.
32. viewport hash method consistent: NO.
33. graph-presentation hash method consistent: NO.
34. materializer hash method consistent: NO.
35. Evidence2 topology confirmed: YES.
36. first preregistration hash/subject: `1c6536c2d01e5acdb86262e97602e9bcb7db78e6` — `test: preregister canonical origin Evidence2`.
37. first attempt dynamic execution occurred: NO.
38. replacement 26c94e6 full hash/subject: `26c94e61631fe9ac73efa87b680f6465d5422d62` — `test: fix canonical origin Evidence2 preregistration`.
39. 26c94e6 dynamic execution occurred: YES.
40. 26c94e6 artifact writing occurred: NO.
41. valid Protocol A full hash: `91d6cea340a717b11806b0563aeb43f861badf1c`.
42. valid Protocol A subject: `test: correct canonical origin Evidence2 geometry probe`.
43. valid execution began after Protocol A: YES.
44. Evidence B full hash: `ecad472c48b12e4fccb0d71f2edd44ec2e13f55c`.
45. Evidence B parent: `91d6cea340a717b11806b0563aeb43f861badf1c`.
46. Protocol A→Evidence B source unchanged: YES; diff adds artifacts only.
47. invalidated-run contamination: NO.
48. valid artifact count: 13.
49. stale/unindexed artifact count: 0.
50. artifact-index complete: YES; 12 payloads plus self-excluded index.
51. artifacts bound to `91d6cea`: YES.
52. E2-H1 original result: PASS.
53. E2-H1 reconciled result: PASS; hash metadata corrected additively.
54. E2-H2 original result: PASS.
55. E2-H2 reconciled result: PASS.
56. Evidence1 formal validity retained: YES.
57. Evidence1 substantive result retained: YES.
58. Evidence2 formal validity retained: YES.
59. Evidence2 CASE 1 / Decision A retained: YES.
60. transform recommendation retained: YES.
61. recommended originX: `0/1`.
62. recommended originY: `0/1`.
63. recommended scale: `6144/1`.
64. Adoption1 eligible: YES.
65. `PR3-RUNTIME-TRANSFORM-v1` remains UNFROZEN: YES.
66. candidate execution added: 0.
67. real fixture execution added: 0.
68. browser execution: NO.
69. screenshot: NO.
70. human review: NO.
71. PR-3: NO.
72. result document path: `docs/liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-run-configuration-evidence2-source-hash-provenance-reconciliation1.md`.
73. roadmap changed/unchanged: CHANGED additively; historical Evidence2 entry preserved.
74. Knowledge Candidate decision: plausible reusable candidate; NO NEW ENTRY.
75. ai-knowledge changed/unchanged: UNCHANGED.
76. validation: PASS (`npm.cmd run validate`).
77. diff-check: PASS (`git diff --check` and cached diff check).
78. e2r-spec commit hash/subject: supplied in the final handoff after the one local documentation commit.
79. e2r-spec worktree: two exact documentation paths staged for the one local commit; unrelated changes preserved.
80. Evidence1 clone changed: NO.
81. Evidence2 clone changed: NO.
82. Live changed: NO by this checkpoint; pre-existing protected JSON dirt preserved.
83. Harness changed: NO.
84. materializer changed: NO; pre-existing untracked materializer content preserved.
85. baseline2 changed: NO.
86. exact next prerequisite: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-RUN-CONFIGURATION-ADOPTION1`.
87. next checkpoint: NOT STARTED.
88. push/tag/release/deploy/publication: NONE.
