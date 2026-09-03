# LiaisonScape Initial Placement Seed: Machine Execution1 Browser Lineage Readiness Reconciliation1

Date: 2026-09-04

Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-MACHINE-EXECUTION1-BROWSER-LINEAGE-READINESS-RECONCILIATION1`

Status: complete; static provenance and design reconciliation only. No
browser, CDP, Vite, V3, screenshot, review, rerun, or implementation work was
performed.

## CASE / Decision

**CASE 3 / Decision C — RUN-IDENTITY / PHASE-BRIDGE DESIGN CORRECTION REQUIRED**

Machine Execution1 remains valid historical machine evidence. Its V0/V1/V2,
B0, and B1 machine-side computations are not invalidated. However, the
accepted contracts do not unambiguously define whether the exact browser path
and version must be supplied before Phase M or may be supplied between Phase M
and Phase B. They also do not define an accepted final-manifest bridge from
the phase-local Machine run ID to the browser-bound `PR3-RUN-IDENTITY-v1`
identity.

Therefore:

```text
MACHINE-EVIDENCE-RESULT = VALID HISTORICAL EVIDENCE
PR3-LINEAGE-ELIGIBILITY = BLOCKED PENDING DESIGN CORRECTION
MACHINE-BROWSER-BINDING-REQUIRED = AMBIGUOUS BEFORE PHASE M
MACHINE-TO-BROWSER-LINEAGE-BRIDGE = NOT ESTABLISHED
BROWSER CAPTURE = NOT STARTED
```

The smallest next prerequisite is a narrowly scoped
`RUN-IDENTITY / PHASE-BRIDGE DESIGN CORRECTION`. It must explicitly choose
the binding boundary, define the final manifest/reference fields, and state
how immutable Machine Evidence B is linked without rewriting it. This result
does not invent that bridge and does not start Browser Capture1.

## Why this result is bounded

Machine Evidence B is immutable at
`b0bd0f1a9f70915c639cbee61cf5f8370c78766f`. The static audit inspected the
accepted e2r-spec documents, the frozen Harness implementation contracts, the
Machine protocol and run plan, the Machine manifest/index/audit records, one
representative V2 record and linkage record, all 16 B1 machine-side records as
a set, and the browser-eligibility record.

No Machine artifact was regenerated, copied, renamed, edited, reidentified, or
recommitted. No browser executable was resolved or launched. No current
browser version was bound as future Browser authority.

## Authorities

| Authority | Identity |
| --- | --- |
| e2r-spec at start | `18b6ee9cf9f93b5b370199687237f7c652b9791a` |
| Run Configuration Design1 | `04a7a24997d1f008e9dbb57aec4e6552b0d719d6` |
| Harness Design1 result | `919c33a73e0a884903c56faec8553e0dc17b8eca` |
| Harness Implementation1 | `9bd3f3b819bf07ccdfa0339be9a953d045c4e4fc` |
| Design1 Correction1 | `349f42e11a7d88d51dbdfb1eb4323247bb3dfb44` |
| Run Configuration Adoption1 | `e8c2f30fc515e6502d4e45677d29d4c6cb63dfdc` |
| Machine Execution1 e2r-spec result | `18b6ee9cf9f93b5b370199687237f7c652b9791a` |
| Machine Protocol / Executable A | `06f66142812be03a8a3a138e2b774cbc9926b91f` |
| Machine Evidence B | `b0bd0f1a9f70915c639cbee61cf5f8370c78766f` |
| Product | `563d5bc3ce8d3a915c75dd13b33188ae6f7fccaf` |
| Retained materializer | `fd563340625fd3d88dc25baedc93c4f8fe69e5e7` |
| Baseline2 | `324193eda5924d2c5f5d0e0cad8a92b64d2ea6a8` |
| Fixture manifest | `B867E9FF7B84107E8B4DDCCC02458B7B9AA535AB6FACE4AD10A2942CC8C8D8F5` |

The Machine clone remains at
`b0bd0f1a9f70915c639cbee61cf5f8370c78766f` with a clean worktree. No Browser
execution clone was created.

## Seam A — Machine ID and browser identity

### Machine run ID semantics

`machine-execution1-2026-09-03` is classified **M-R1: phase-local evidence
workspace/run ID only**.

The generating surface is the Machine Protocol A field
`protocol.json:runId`; `run-machine.mjs` reads that value and uses it as the
artifact directory name and as the `runId` field in the generated manifests,
stage artifacts, linkage context, and browser-eligibility record. The value is
not computed from the canonical PR3 run-identity input and is not formatted as
`pr3r1-<sha256>`.

The `2026-09-03` suffix is a literal date in the preregistered protocol. It is
not a generated wall-clock input and does not participate as a date semantic in
the final PR3 identity. It does participate in the exact local artifact bytes
where `runId` is recorded, and therefore in those local artifact hashes. It is
not the PR3 semantic run hash.

The Machine manifest explicitly records `phase: MACHINE` and
`browserVersion: NOT-RUN`. The browser-eligibility artifact explicitly records
`browserExecution: NOT STARTED`. Neither record marks the local ID as a final
PR3 identity; the phase and browser fields provide the effective provisional
boundary.

### Accepted final PR3 identity

Design1 freezes `PR3-RUN-IDENTITY-v1` as SHA-256 over canonical UTF-8/LF JSON
with recursively sorted keys, formatted as `pr3r1-<lowercase-sha256>`. Volatile
fields such as `generatedAt`, PID, port, temporary path, and CDP target ID are
excluded.

The canonical input binds at least:

```text
productAuthority
harnessAuthority
materializerSnapshot
fixtureManifest
candidateRegistry
runtimeTransform
settling
routing
labels
viewport
browserAuthority = PR3-BROWSER-AUTHORITY-v1 + exact version/path
executionPlan = VSR-RUN-PLAN-v1 plus the phase decomposition
```

The exact browser executable path and exact version are therefore part of the
final semantic identity. Design1 specifically says to resolve and verify them
before a future capture, while its general C-class rule says no evidence may
start while a required C-class value is absent. The accepted documents do not
state whether the latter rule is scoped to the first Machine artifact or to
the first browser-bound PR3 lineage artifact. This is the unresolved contract
ambiguity; today's installed browser was not used to resolve it.

### C-class requirement audit

| Field | Class | Required before Phase M? | Required before Phase B? | Protocol A | Machine manifest / semantic artifacts | Status |
| --- | --- | --- | --- | --- | --- | --- |
| Runtime transform | C | YES | YES | present, `0/0/6144` | present and fingerprinted | PASS |
| Artifact root | C | YES | YES | implicit from `runId` | filesystem path and artifact paths present; no explicit root field | Machine-local only |
| Browser executable path | C/policy | AMBIGUOUS under accepted boundary | YES | absent | absent | Design correction required |
| Browser exact version | C | AMBIGUOUS under accepted boundary | YES | absent | `NOT-RUN` only | Design correction required |
| Browser product/family | A policy | NO for computation; boundary ambiguous | YES | absent as a run value | absent | Edge Stable policy only |
| Viewport | A/C | NO as a browser value | YES | absent from Machine protocol | V2 viewport present; DSF/zoom not recorded | Browser preflight required |
| DSF | A | NO as a browser value | YES | absent | absent | Browser preflight required |
| Zoom | A | NO as a browser value | YES | absent | absent | Browser preflight required |
| Locale | A | YES where matrix plans it | YES | `en`, `ja` order | present per fixture/stage artifact | PASS |
| Candidate registry | C | YES | YES | exact five IDs | present in manifest and stage artifacts | PASS |
| Fixture manifest | A | YES | YES | exact path/SHA | snapshotted and indexed | PASS |
| Product authority | A | YES | YES | present | present | PASS |
| Harness authority | A | YES | YES | present | present | PASS |
| Materializer authority | A/historical | YES | YES | present | present with source hashes | PASS |

The Machine run therefore has complete computational authorities and a
phase-local artifact identity, but not a browser-bound final PR3 identity.

## Seam B — B1 Phase B order

Design1's frozen sequence runs B0 and B1 diagnostics before candidate evidence,
and its phase gate requires every B0/B1 row to be terminal before any V3
capture. The accepted Design1 and Correction1 documents do not authorize the
handoff wording `candidate V3 first, then B1 browser-side diagnostics`.

The reconciled existing order is recorded as:

```text
PHASE-B-ORDER-v1
B1 browser-side diagnostics: 16 rows, candidate = NO-CANDIDATE
THEN
candidate V3 captures: 80 rows
```

The 16 B1 machine-side rows are already complete in Machine Evidence B and are
not rerun. The 16 browser-side rows remain pending. This ordering is a
reconciliation of the accepted Design1 phase gate, not a new ranking or
selection rule. The historical Machine Protocol stage order and artifacts are
not modified by this result.

Each inspected B1 machine-side record has `candidate: NO-CANDIDATE`, the
structural fixture and locale, `diagnosticPhase: V2`,
`machineSideStatus: COMPLETE`, and `browserSideStatus: PENDING`. B1 remains a
diagnostic track and must not acquire a candidate identity. The later browser
diagnostic record must retain the exact B1 machine record reference/hash,
fixture, locale, diagnostic phase, browser authority, viewport, and capture
artifact hashes. The accepted Harness implementation does not currently
define a separate B1 browser packet schema containing those cross-phase
parent fields; this is part of the Phase-bridge ambiguity.

## Seam C — checkpoint name

The first accepted occurrence of
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1`
is the Run Configuration Design1 decomposition, authority
`04a7a24997d1f008e9dbb57aec4e6552b0d719d6`. It is the canonical Phase B
checkpoint name.

The first `...BROWSER-EXECUTION1` pointer occurs in the Machine Execution1
result and its additive roadmap entry, authority `18b6ee9...`. No accepted
document or commit explicitly adopts it as a formal rename or supersession.

```text
canonical active pointer:
E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1

BROWSER-EXECUTION1:
POINTER-NAME-DRIFT only; corrected additively here and in roadmap
```

The historical Machine result is not amended, and no second Phase B checkpoint
is created.

## Browser packet and parentage audit

`VSR-BROWSER-PACKET-v1` is an accepted Harness type derived from a successful
V2 record. It requires V2 viewport, routes, relation labels, node labels, and
the V2 coordinate fingerprint. `VSR-CAPTURE-DRIVER-v1` requires explicit
runner injection and the fixed 1280×900, DSF 1, zoom 100%, SVG viewBox
`0 0 800 500` contract. `VSR-STAGE-LINKAGE-v1` links exact input/output
references and hashes and forbids silent recomputation.

All 80 V2 candidate artifacts were statically inspected through the indexed
matrix and representative records. They are successful and browser-ready as
V2 packet inputs: each has positions, routes, relation labels, node labels,
viewport, a V1 parent reference/hash, and a V2 linkage artifact. The
browser-eligibility record reports 80 eligible and 0 blocked cells. No V2 byte
may be changed.

This establishes **V2 packet readiness**, not final PR3 lineage readiness.
The accepted Harness packet/V3 types carry V2 fingerprint linkage, but do not
carry a final browser-bound run ID or an accepted cross-run phase authority.
`PR3-RESUME-v1` only reloads a run manifest, verifies its existing immutable
authorities and hashes, and continues missing permitted stages; a browser,
configuration, or hash mismatch refuses resume and requires a new lineage. No
accepted text or implementation extends it from this Machine-local ID to a
new browser-bound semantic ID.

Accordingly:

```text
V2 candidate parent inputs complete: YES (80/80)
V2 browser packet can be derived without modifying V2: YES
accepted Machine-to-Browser final-identity bridge: NO / not established
PR3-RESUME-v1 Machine -> Browser bridge: AMBIGUOUS / not specified
```

Copying Machine artifacts into a new run, renaming `runId`, or changing
embedded identity/path fields would violate immutability and is forbidden.
The only permissible future use is an explicitly accepted reference/linkage
from the new Browser phase to the immutable Machine Evidence B artifacts.

## Machine result preservation and source freeze

The Machine result remains:

```text
V0 = 40/40 successful
V1 = 40/40 successful
V2 = 80/80 successful
Machine candidate total = 160
B0 = 8 COMPLETE
B1 machine-side = 16 COMPLETE
B1 browser-side = 16 PENDING
V3 = 0
Browser-eligible V2 cells = 80
```

The Machine artifact audit remains indexed and hash-consistent. The adopted
transform remains `originX=0/1`, `originY=0/1`, `scale=6144/1`, fingerprint
`102F16DCEF44096686B67B34BDF385A5E71DDDC085183F0B9BA65F9785C34786`.

Static authority checks found no drift:

- Product: `563d5bc3ce8d3a915c75dd13b33188ae6f7fccaf`.
- Harness: `9bd3f3b819bf07ccdfa0339be9a953d045c4e4fc`.
- Machine Evidence B: `b0bd0f1a9f70915c639cbee61cf5f8370c78766f`.
- Materializer: `fd563340625fd3d88dc25baedc93c4f8fe69e5e7`.
- Baseline2: `324193eda5924d2c5f5d0e0cad8a92b64d2ea6a8`.
- Fixture manifest SHA: `B867E9FF7B84107E8B4DDCCC02458B7B9AA535AB6FACE4AD10A2942CC8C8D8F5`.

## Phase B contract if later unblocked

The next authorized Browser Capture1 checkpoint must bind its own exact
Microsoft Edge Stable executable path and exact product version immediately
before capture. It must use no Chrome fallback, viewport 1280×900 CSS pixels,
DSF 1, zoom 100%, SVG viewBox `0 0 800 500`, a fresh browser per V3 cell, and
the accepted initial attempt plus at most two transport/browser retries under
identical semantic inputs. It must first complete the 16 B1 browser-side
diagnostics, then capture the 80 candidate V3 rows. Human review remains out
of scope for Phase B.

That procedure is recorded as an inherited prerequisite only. It was not
executed here, and today's browser installation/version is not bound.

## Explicit non-execution record

- Edge launch: **NO**.
- Chrome launch: **NO**.
- CDP: **NO**.
- Vite for browser evidence: **NO**.
- V3 generated: **0**.
- B1 browser-side capture: **0**.
- PNG/screenshot: **NO**.
- Human review: **NO**.
- `E-VISUAL`: **NO**.
- Ranking or score aggregation: **NO**.
- Candidate selection: **NO**.
- Product integration or source change: **NO**.
- Machine rerun: **NO**.
- Machine Evidence B modification: **NO**.
- Browser execution clone: **NOT CREATED**.
- PR-3: **NO**.

## Knowledge Candidate

**NO NEW ai-knowledge ENTRY.** The phase-local versus final semantic identity
distinction is a repository-specific unresolved contract seam, not yet a
workspace-wide reusable decision. The pre-existing dirty
`ai-knowledge/playbooks/e2r-edge-cdp-browser-diagnostic.md` was preserved and
unchanged.

## Exact next prerequisite

```text
RUN-IDENTITY / PHASE-BRIDGE DESIGN CORRECTION
```

It must resolve the Phase M browser-binding boundary, define the accepted
Machine Evidence B reference in the final browser manifest, define B1 browser
parentage, and state whether the final `pr3r1-<sha256>` identity is minted at
Phase M or Phase B. Until then:

```text
canonical Browser Capture1 checkpoint = NOT STARTED
Browser capture = NOT STARTED
```

No push, tag, release, deploy, or publication occurred.

## Final report

1. CASE: `CASE 3`.
2. Decision: `DECISION C — RUN-IDENTITY / PHASE-BRIDGE DESIGN CORRECTION REQUIRED`.
3. e2r-spec starting HEAD: `18b6ee9cf9f93b5b370199687237f7c652b9791a`.
4. Design1 authority: `04a7a24997d1f008e9dbb57aec4e6552b0d719d6`.
5. Harness Design1 authority: `919c33a73e0a884903c56faec8553e0dc17b8eca`.
6. Harness Implementation1 authority: `9bd3f3b819bf07ccdfa0339be9a953d045c4e4fc`.
7. Adoption1 authority: `e8c2f30fc515e6502d4e45677d29d4c6cb63dfdc`.
8. Machine Execution1 e2r-spec authority: `18b6ee9cf9f93b5b370199687237f7c652b9791a`.
9. Machine Protocol A: `06f66142812be03a8a3a138e2b774cbc9926b91f`.
10. Machine Evidence B: `b0bd0f1a9f70915c639cbee61cf5f8370c78766f`.
11. Machine clone final state: clean at `b0bd0f1a9f70915c639cbee61cf5f8370c78766f`.
12. Machine run ID: `machine-execution1-2026-09-03`.
13. Machine run ID classification: `M-R1`.
14. Machine run ID includes wall-clock semantics: `NO`.
15. `PR3-RUN-IDENTITY-v1` located: `YES`.
16. Final semantic run ID format: `pr3r1-<lowercase-sha256>`.
17. Browser path part of final semantic identity: `YES`.
18. Browser exact version part of final semantic identity: `YES`.
19. Exact browser binding required before Phase M: `AMBIGUOUS`.
20. Exact browser binding required before Phase B: `YES`.
21. Machine Protocol contains browser path: `NO`.
22. Machine Protocol contains exact browser version: `NO`.
23. Machine run manifest contains browser path: `NO`.
24. Machine run manifest contains exact browser version: `NO` (`NOT-RUN` only).
25. Missing browser binding constitutes Machine formal defect: `NO` as a resolved conclusion; contract status is `AMBIGUOUS`.
26. Machine computational evidence remains valid: `YES`.
27. Machine formal evidence remains valid: `YES` as phase-local historical evidence.
28. Current PR-3 lineage eligibility: `NO`, blocked pending bridge correction.
29. `PR3-RESUME-v1` can bridge phases: `AMBIGUOUS` / not specified.
30. Accepted Machine-to-Browser bridge exists: `NO`.
31. Bridge mechanism: no accepted final-manifest cross-phase bridge; existing VSR stage linkage is only artifact/fingerprint linkage.
32. Machine artifacts require rewriting: `NO`; rewriting is forbidden.
33. Machine artifacts may be reused byte-for-byte: `YES`, only by accepted future reference/linkage.
34. V2 candidate records inspected count: `80`.
35. Browser-ready candidate V2 records: `80`.
36. Browser-blocked candidate V2 records: `0`.
37. B1 machine-side records: `16`.
38. B1 browser-side pending records: `16`.
39. B1 browser-side parentage complete: `NO`; accepted browser-side parent schema is not defined.
40. Frozen Phase B order: B1 browser-side `16` then candidate V3 `80`.
41. B1 browser-side before candidate V3: `YES`.
42. First `BROWSER-CAPTURE1` authority: Design1, e2r-spec `04a7a24997d1f008e9dbb57aec4e6552b0d719d6`.
43. First `BROWSER-EXECUTION1` authority: Machine result/roadmap, e2r-spec `18b6ee9cf9f93b5b370199687237f7c652b9791a`.
44. Explicit rename found: `NO`.
45. Canonical Browser checkpoint name: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1`.
46. Pointer-name drift: `YES`.
47. Product authority unchanged: `YES`.
48. Harness authority unchanged: `YES`.
49. Machine Evidence B unchanged: `YES`.
50. Adopted transform unchanged: `YES`.
51. Fixture manifest unchanged: `YES`.
52. Browser launched: `NO`.
53. CDP opened: `NO`.
54. V3 generated: `0`.
55. B1 browser capture executed: `0`.
56. PNG generated: `0`.
57. Human review: `NO`.
58. E-VISUAL: `NO`.
59. Ranking: `NO`.
60. Candidate selection: `NO`.
61. Product integration: `NO`.
62. PR-3: `NO`.
63. Result document path: `docs/liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-machine-execution1-browser-lineage-readiness-reconciliation1.md`.
64. Roadmap: changed additively.
65. Knowledge Candidate decision: `NO NEW ENTRY`.
66. ai-knowledge: unchanged; pre-existing dirt preserved.
67. Validation: `PASS` (`npm.cmd run validate`).
68. Diff-check: `PASS` (`git diff --check` and cached diff check).
69. e2r-spec commit hash/subject: recorded after the one documentation commit.
70. e2r-spec worktree: expected clean after the one documentation commit.
71. Live Product changed: `NO`.
72. Protected samples preserved: `YES`.
73. Original Harness changed: `NO`.
74. Machine clone changed: `NO`.
75. Evidence1/Evidence2 changed: `NO`.
76. Materializer changed: `NO`; pre-existing untracked state preserved.
77. Baseline2 changed: `NO`.
78. Exact next prerequisite: `RUN-IDENTITY / PHASE-BRIDGE DESIGN CORRECTION`.
79. Next checkpoint: `NOT STARTED`.
80. Push/tag/release/deploy/publication: `NONE`.
