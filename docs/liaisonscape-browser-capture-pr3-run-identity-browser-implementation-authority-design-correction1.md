# LiaisonScape Browser Capture PR3 Run-Identity Browser Implementation Authority Design Correction1

- Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1-PR3-RUN-IDENTITY-BROWSER-IMPLEMENTATION-AUTHORITY-DESIGN-CORRECTION1`
- Date: `2026-09-04` (JST)
- Result: **CASE 1 / DECISION A - `PR3-RUN-IDENTITY-BROWSER-IMPLEMENTATION-AUTHORITY-DESIGNED`**
- Starting e2r-spec HEAD: `8b27b463d51cf58f69997ec479a1202533f986a2`
- Scope: design/specification only; no implementation or browser execution

## Decision summary

The accepted `PR3-RUN-IDENTITY-v1` does not bind the corrected Browser Capture
bytes. The prior `IDENTITY-BINDING-B` block was therefore valid. The prospective
correction is to add a dedicated `browserCaptureImplementationAuthority` field
to a new `PR3-RUN-IDENTITY-v2` input. The field uses an explicit, frozen
semantic-runtime source manifest (Strategy C) and is independent of Product,
Harness, Machine Evidence, and browser-executable authorities.

This checkpoint does not add the field to code, create Restart2, mint a
semantic ID, or execute B1/V3. Existing v1 identities and their meanings are
unchanged.

## Previous binding block and historical contracts

The preceding Restart2 Protocol A checkpoint is recorded in
`docs/liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-restart2-protocol-a.md`.
It established:

- correction authority: `4e7489c14618d9732c1e66aa7ef4852e2b03ea2b`;
- corrected `main.tsx` Git blob:
  `b671e09d2729fc8ac1002ed2bc0740f1107baefd`;
- corrected `main.tsx` raw SHA-256:
  `116B684D3D87C3FBA58C5EBEA64182650324125BCB0F2BD3DD30A50024AB9F49`;
- corrected `entry.test.ts` Git blob:
  `eb9f86b2e4d6c8df7f48854184966768e28a928b`;
- corrected `entry.test.ts` raw SHA-256:
  `C3F3EFCF9D1ED3CBB8289D028132CDD250BA090D6B5F1FA2856B86D01E748B61`;
- no legitimate v1 field binding the corrected Browser Capture implementation;
  and
- no Restart2 clone, Protocol A artifact, or new `pr3r1-*` identity.

The historical original failed identity
`pr3r1-95ff619e25deb4c5edc281041bf6c4d32324e6765c4f5999a98ff68a343d8762` and
Restart1 identity
`pr3r1-6560dd8187ddaa1ff002034ab99ffe91a3336b430f449cc1f1c7da85e26659d9`
remain immutable. The accepted contracts inspected for this correction were
`PR3-RUN-IDENTITY-v1`, `PR3-PHASE-BRIDGE-v1`, and
`VSR-ARTIFACT-CANONICAL-v1`.

## Browser Capture implementation surface inventory

The correction clone at
`C:\Users\extra\E2R\e2r-liaison-scape-browser-capture-b1-entry-seam-correction1`
was inspected at `4e7489c14618d9732c1e66aa7ef4852e2b03ea2b`.

### Evidence and execution roots

| Path | Classification | Reason |
| --- | --- | --- |
| `experimental/product-evaluation-seam/browser-capture1/main.tsx` | EVIDENCE-SEMANTIC; bootstrap | Loads `capture-input.json`, mounts the evaluation graph, and sets the readiness marker. |
| `experimental/product-evaluation-seam/browser-capture1/index.html` | EVIDENCE-SEMANTIC; EXECUTION-SEMANTIC | Defines the entry document and module URL navigated by the executor. |
| `experimental/product-evaluation-seam/browser-capture1/browser-capture.mjs` | EXECUTION-SEMANTIC; artifact-semantic | Starts Vite and Edge, selects the target, polls readiness, captures DOM/SVG/PNG, retries, and serializes artifacts. |
| `experimental/product-evaluation-seam/render-wrapper1/render-wrapper.tsx` | EVIDENCE-SEMANTIC | Defines the SVG, nodes, relations, labels, arrowheads, and fixed `0 0 800 500` viewBox. |
| `src/styles.css` | EVIDENCE-SEMANTIC | Is imported at runtime by the render wrapper and can change rendered pixels and presentation state. |
| `experimental/product-evaluation-seam/visual-evidence-harness1/src/packet.ts` | EVIDENCE-SEMANTIC; execution-input-semantic | Is dynamically imported by the executor for candidate V3 and converts frozen V2 data into the browser packet. |
| `experimental/product-evaluation-seam/visual-evidence-harness1/src/v2.ts` | EVIDENCE-SEMANTIC dependency | Supplies `nodePacketText` to `packet.ts`; its local runtime dependency closure is audited with the packet path. |

The packet path also reaches shared local modules including
`src/dataset.ts`, `src/relation-arrow-presentation.ts`,
`src/presentation-extension.ts`, `src/viewport.ts`, and
`src/graph-presentation.ts`. Their runtime bytes are covered either by the
explicit source manifest or by a separately bound Product/shared-source
authority reference; they may not be silently omitted. The future
implementation checkpoint must materialize the exact closure and reject an
authority manifest missing a local runtime import.

### Exclusions

- `experimental/product-evaluation-seam/browser-capture1/entry.test.ts`,
  `protocol-a.test.mjs`, and `b1-execution.test.mjs` are **TEST-ONLY**. They do
  not execute in Browser Evidence production and are not identity-bound by this
  authority.
- Type-only imports, including `types.ts` references and erased Product type
  imports, are not runtime source identities. If a future build changes one
  into a runtime import, the manifest generator must include it.
- `capture-input.json`, screenshots, run manifests, terminal records, and
  artifact indexes are generated execution inputs/outputs. They have their own
  artifact and stage-linkage provenance and are not implementation source
  authority.
- Documentation, formatting-only changes, temporary profiles, PIDs, ports,
  timestamps, and local checkout paths are non-semantic for this authority.

## Chosen authority design

### Authority contract

The new dedicated contract is:

```text
PR3-BROWSER-CAPTURE-IMPLEMENTATION-AUTHORITY-v1
```

The future semantic identity input field is:

```json
{
  "browserCaptureImplementationAuthority": {
    "contract": "PR3-BROWSER-CAPTURE-IMPLEMENTATION-AUTHORITY-v1",
    "repositoryAuthority": {
      "repositoryId": "e2r-liaison-scape-browser-capture",
      "commit": "<git-commit>"
    },
    "sourceIdentities": [
      {
        "path": "experimental/product-evaluation-seam/browser-capture1/main.tsx",
        "gitBlob": "<git-blob-id>",
        "rawSha256": "<sha256-over-exact-git-blob-bytes>"
      }
    ]
  }
}
```

The actual list is the frozen explicit semantic-runtime manifest, not only the
example row above. Each row has the normalized path, Git blob identity, and raw
SHA-256 needed to audit the evidence-producing surface. A future manifest may
include a stable role annotation for review, but role labels are informational
and do not replace the three identity values.

The authority is deliberately separate from `productAuthority`, which remains
the exact Product source authority; `harnessAuthority`, which remains the
evaluation-methodology and broader Harness authority;
`machineEvidenceReference`, which remains the immutable Machine phase
authority; and `browserAuthority`, which remains the exact Microsoft Edge
executable and version authority.

### Strategy choice

The selected transitive-dependency strategy is **Strategy C**: a dedicated
Browser Capture implementation manifest generated from a frozen list of
semantic runtime files and exact identities. The list is explicit, sorted, and
reviewable. The generator must resolve local runtime imports from the entry,
executor, render wrapper, and V3 packet path, then fail closed if the frozen
list and inspected closure disagree.

Strategy A, extending the existing `sourceIdentities`, is rejected because it
conflates Product, retained Harness, and Browser Capture ownership and leaves
the semantic boundary implicit. It also makes it easy to add a corrected file
to a broad list without making Browser implementation authority independently
auditable.

Strategy B, a directory tree identity, is rejected because a subtree contains
tests, docs, generated files, and other non-evidence material unless a second
exclusion contract is introduced. That obscures the exact evidence surface and
increases accidental-inclusion risk.

Binding only the correction commit is also rejected. A commit is a useful
snapshot authority but does not make the evidence-producing source surface
obvious, and a correction commit is not a stable semantic category for future
runs.

## Canonicalization and line-ending rule

The new field participates in the same canonical identity process as the other
`PR3-RUN-IDENTITY` inputs:

1. Paths are repository-relative POSIX paths using `/`, with no `.` or `..`,
   no absolute path, and Unicode NFC normalization.
2. `sourceIdentities` rows are sorted lexicographically by normalized path
   using the project canonical ordering. Duplicate paths are rejected.
3. `gitBlob` is the Git blob object identity for the exact committed file.
4. `rawSha256` is SHA-256 over the exact Git blob bytes, encoded as uppercase
   hexadecimal. Working-tree bytes are not hashed.
5. The identity object uses recursively sorted keys, canonical UTF-8 JSON, LF
   separators, and one final LF. The semantic run ID is SHA-256 of those bytes
   with its suffix rendered as lowercase hexadecimal.

Therefore checkout CRLF/LF conversion cannot alter source identity. A change
to any bound semantic Browser Capture source byte changes its Git blob and raw
hash, and consequently changes a future v2 semantic run ID.

## Versioning and phase bridge

The new semantic input requires `PR3-RUN-IDENTITY-v2`. `PR3-RUN-IDENTITY-v1`
is not edited in place. Historical v1 IDs continue to mean exactly what their
original canonical inputs meant.

The existing `PR3-PHASE-BRIDGE-v1` remains frozen for historical lineages. A
future Browser Protocol A using v2 requires the prospective additive bridge
`PR3-PHASE-BRIDGE-v2`. Its Browser-side binding contains both
`browserAuthority` and `browserCaptureImplementationAuthority`, while retaining
the unchanged Machine Evidence reference, phase-local run ID, V2 parent set, B1
pending set, and B1-before-V3 order. This is a versioned additive correction,
not a rewrite of v1 and not a reason to rerun Machine Evidence. The Machine
phase remains governed by `PHASE-M-BROWSER-INDEPENDENCE-v1`.

## Dependency and environment follow-up

The inspected v1 identity binds source authorities and the exact browser
authority, but does not bind a complete Node/Vite/React/package-lock runtime
resolution contract. Identical local source bytes could therefore be bundled
or executed differently after dependency or toolchain changes.

This is recorded as **FOLLOW-UP / NOT PART OF CURRENT CORRECTION**. It does not
block designing the immediate Browser Capture source authority, but it must be
resolved before claiming fully hermetic bundle reproducibility. The follow-up
must not be smuggled into Product authority or treated as a Machine Evidence
defect.

## Required invariants

- **I1:** Same identity inputs and same Browser Capture implementation bytes
  produce the same v2 run ID.
- **I2:** A semantic `main.tsx` byte change produces a different v2 run ID.
- **I3:** A semantic executor byte change produces a different v2 run ID.
- **I4:** A test-only file change alone leaves the v2 run ID unchanged.
- **I5:** Working-tree LF/CRLF differences do not change canonical source
  identity.
- **I6:** Historical v1 IDs remain untouched and are never recomputed.
- **I7:** An unchanged Machine Evidence reference requires no Machine rerun.
- **I8:** New Browser Evidence lineages cannot omit the Browser Capture
  implementation authority.

The future implementation checkpoint must add deterministic tests for these
invariants, including a changed `browser-capture1/main.tsx`, a changed
executor, a changed `entry.test.ts`, and a CRLF checkout representation.

## Current state and non-execution record

- Corrected `main.tsx` would be identity-bound in a future v2 line: **YES**.
- `entry.test.ts` alone would alter the future v2 identity: **NO**.
- Restart1 semantic ID reusable for corrected evidence: **NO**.
- Restart2 Protocol A currently blocked pending implementation: **YES**.
- Restart2 clone: **NOT CREATED**; new Restart2 semantic ID: **NOT MINTED**.
- B1 executed: **0**; fresh B1 planned set remains **16**.
- V3 executed: **0**; planned eligible set remains **80**.
- Browser Evidence B: **NONE**; Review1: **NO / NOT ELIGIBLE**.
- E-VISUAL: **NO**; PR-3: **NO**.
- Machine Evidence rerun required: **NO**; Machine Evidence remains valid.
- Product authority and Harness authority: unchanged and separate.
- Browser authority, Windows Update, GPU driver, and graphics settings:
  unchanged.
- No Browser Capture implementation, Product, Harness, Machine, or
  `ai-knowledge` file was changed by this design checkpoint.

The next prerequisite is a bounded implementation checkpoint to add
`browserCaptureImplementationAuthority` to the prospective Restart2 Protocol A
generator and tests. That implementation checkpoint is **NOT STARTED**.

## Knowledge Candidate

**CANDIDATE ONLY / NO NEW `ai-knowledge` ENTRY.** A potentially reusable rule
is that evidence-producing implementation bytes belong in the semantic run
identity, and that a broad Harness commit cannot substitute for a separate
Browser-phase authority when Browser code changes outside that authority.

## Final report

1. CASE: `CASE 1`.
2. Decision: `PR3-RUN-IDENTITY-BROWSER-IMPLEMENTATION-AUTHORITY-DESIGNED`.
3. Exact e2r-spec starting HEAD: `8b27b463d51cf58f69997ec479a1202533f986a2`.
4. Previous Restart2 binding-block authority: `4e7489c14618d9732c1e66aa7ef4852e2b03ea2b`.
5. Historical run-identity contract/version: `PR3-RUN-IDENTITY-v1`.
6. Phase-bridge authority: `86aa84ccb8b118e51a2206bff69c0177399b3d03` (`PR3-PHASE-BRIDGE-v1`, frozen).
7. Browser Capture source files inspected: Browser Capture roots, render wrapper, styles, V3 packet generator, V2 packet helper, and shared local runtime closure.
8. Semantic runtime files: the three Browser Capture roots, render wrapper, styles, V3 packet generator, and its audited local runtime closure.
9. Execution-semantic files: `browser-capture1/browser-capture.mjs` and entry navigation HTML; packet generation is execution-input-semantic for V3.
10. Test-only files: `entry.test.ts`, `protocol-a.test.mjs`, `b1-execution.test.mjs`, and other tests not executed by evidence production.
11. Non-semantic files: docs, formatting-only support, generated inputs/outputs, temporary profiles, PIDs, ports, and timestamps.
12. Transitive dependency strategy: `STRATEGY-C`, explicit frozen semantic-runtime manifest.
13. Chosen design option: `OPTION-B`, dedicated `browserCaptureImplementationAuthority` field.
14. Rejected option A reason: existing `sourceIdentities` mixes authorities and leaves Browser implementation ownership implicit.
15. Rejected option B reason if applicable: `N/A` (Option B selected).
16. Rejected option C reason: a tree/commit-only boundary includes or obscures non-semantic files and does not provide an auditable source surface.
17. New Browser Capture authority contract: `PR3-BROWSER-CAPTURE-IMPLEMENTATION-AUTHORITY-v1`.
18. New run-identity contract/version: `PR3-RUN-IDENTITY-v2`.
19. New phase-bridge version/correction required: `YES`, prospective `PR3-PHASE-BRIDGE-v2`.
20. Exact new semantic field name/shape: `browserCaptureImplementationAuthority = { contract, repositoryAuthority: { repositoryId, commit }, sourceIdentities: [{ path, gitBlob, rawSha256 }] }`.
21. Repository authority included: `YES`.
22. Explicit source identities included: `YES`.
23. Source path ordering rule: normalized repository-relative POSIX/NFC paths, lexicographic order, no duplicates.
24. Git blob included: `YES`.
25. Raw Git blob SHA-256 included: `YES`.
26. Checkout line endings excluded: `YES`.
27. `main.tsx` identity-bound: `YES`.
28. Browser executor identity-bound: `YES`.
29. Entry HTML identity-bound: `YES`.
30. Imported runtime helpers rule: include the audited local runtime dependency closure; fail closed on omitted local runtime imports; retain separate Product/Harness authority references for shared ownership.
31. `entry.test.ts` identity-bound: `NO`.
32. Generated `capture-input.json` identity-bound as implementation: `NO`.
33. Screenshots identity-bound as implementation: `NO`.
34. Package-lock question: not bound by current v1; `FOLLOW-UP / NOT PART OF CURRENT CORRECTION`.
35. Node/Vite/runtime question: not fully bound by current v1; `FOLLOW-UP / NOT PART OF CURRENT CORRECTION`.
36. Historical v1 IDs remain unchanged: `YES`.
37. Prospective-only rule: `YES`.
38. Machine Evidence rerun required: `NO`.
39. Machine Evidence remains valid: `YES`.
40. Product authority unchanged: `YES`.
41. Harness authority remains separate: `YES`.
42. Changed `main.tsx` guarantees future semantic ID change: `YES`.
43. Test-only change alone guarantees ID unchanged: `YES`.
44. Canonicalization contract: recursively sorted-key UTF-8/LF JSON; NFC POSIX paths sorted lexicographically; exact Git blob identity plus raw Git blob SHA-256; lowercase SHA-256 run-ID suffix.
45. Invariant test list: I1 same inputs; I2 `main.tsx` change; I3 executor change; I4 test-only change; I5 LF/CRLF stability; I6 historical v1 immutability; I7 no Machine rerun; I8 authority mandatory.
46. Restart1 reusable: `NO`.
47. Restart2 currently blocked: `YES`, until the authority field is implemented and bound.
48. Restart2 semantic ID minted: `NO`.
49. B1 executed count: `0`.
50. V3 executed count: `0`.
51. Browser Evidence B: `NONE`.
52. Review1 eligible: `NO / NOT ELIGIBLE`.
53. E-VISUAL: `NO`.
54. PR-3: `NO`.
55. Exact next prerequisite: bounded implementation checkpoint adding the authority field to the Restart2 Protocol A generator/tests.
56. Next checkpoint: `NOT STARTED`.
57. Result document: `docs/liaisonscape-browser-capture-pr3-run-identity-browser-implementation-authority-design-correction1.md`.
58. Roadmap: changed additively.
59. Knowledge Candidate decision: `CANDIDATE ONLY`.
60. `ai-knowledge`: unchanged.
61. e2r-spec validation: pending final validation for this document update.
62. Diff-check: pending final diff check for this document update.
63. e2r-spec commit hash/subject: recorded in the final handoff after the one documentation commit.
64. e2r-spec worktree: expected clean after the one documentation commit.
65. Live Product unchanged: `YES`.
66. Protected samples preserved: `YES`.
67. Machine clone unchanged: `YES`.
68. Original Harness unchanged: `YES`.
69. Retained materializer unchanged: `YES`.
70. Baseline2 unchanged: `YES`.
71. Windows Update changed: `NO`.
72. GPU driver changed: `NO`.
73. Graphics settings changed: `NO`.
74. Push/tag/release/deploy/publication: `NONE`.
