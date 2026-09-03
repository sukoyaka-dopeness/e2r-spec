POST-CORRECTION CHARACTERIZATION-v2 ONLY

NO PRODUCT SOURCE MODIFICATION
NO SETTLING KERNEL EXTRACTION
NO IMPLEMENTATION1B
NO MATERIALIZER UPDATE
NO CANDIDATE MATERIALIZATION
NO V0/V1/V2/V3
NO SCREENSHOT
NO REAL-BROWSER REVIEW
NO SAMPLE MODIFICATION
NO ROUNDING
NO TOLERANCE
NO PR-3 CLAIM
NO PUSH
NO TAG
NO RELEASE
NO DEPLOY
NO PUBLICATION

# LiaisonScape Product Evaluation Seam Characterization Order Canonicalization Baseline2

## Checkpoint and outcome

- Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-CHARACTERIZATION-ORDER-CANONICALIZATION-BASELINE2`
- Date: 2026-09-03
- Status: COMPLETE - POST-CORRECTION BASELINE-v2 FROZEN
- CASE: 1
- Decision: A

`POST-ORDER-CORRECTION CHARACTERIZATION-v2 FROZEN; HISTORICAL v1 PRESERVED;
NO UNEXPLAINED PRODUCT DRIFT; IMPLEMENTATION1B REMAINS BLOCKED; PROCEED ONLY
TO SOURCE/EQUIVALENCE RECONCILIATION.`

## WHY and mandatory boundary

Adoption1 established `0937d7768136ff63e74924480551d370b2935c2e` as the current
accepted Product source authority after the canonical-neighbor correction. This
checkpoint generates the separate post-correction characterization authority
needed before settling-kernel modularization can resume, while preserving the
historical pre-correction v1 artifacts byte-for-byte.

Allowed work was limited to an exact accepted-source clone, characterization
tooling, immutable fixture loading, machine Product characterization, v1/v2
comparison, baseline-v2 generation, replay, and evidence documentation.
There was no Product source change, settling extraction, routing/label refactor,
candidate work, screenshot, browser review, sample change, rounding, or
tolerance.

## Adoption1 final-state reconciliation

ADOPTION1 FINAL-STATE RECONCILIATION: YES.

The Adoption1 result contains a stale sentence saying that e2r-spec
documentation changes were pending validation/commit. That sentence was a
pre-finalization snapshot and does not alter Adoption1 CASE 1 / Decision A or
the accepted Product authority. The actual final state was e2r-spec validation
PASS, adoption commit `a5348e742b7f8939c13fa0d34eaf9c192178829e`
(`docs: adopt LiaisonScape order canonicalization`), clean worktree, and no
push. The Adoption1 historical document was not rewritten.

## Authorities and protected state

- Canonical e2r-spec: `C:/Users/extra/E2R/e2r-spec`.
- Live Production: `C:/Users/extra/E2R/e2r-liaison-scape`.
- Current accepted Product authority: `0937d7768136ff63e74924480551d370b2935c2e`.
- Historical pre-correction Product authority: `fd563340625fd3d88dc25baedc93c4f8fe69e5e7`.
- W-C correction provenance: `d7271f5bc2c56d6ae7d46992140dc9cc165ecfee`.
- Retained materializer: `C:/Users/extra/E2R/e2r-liaison-scape-production-candidate-materialization-implementation1`.
- Protected session: `sessions/E2R-Session-0052.md` was not modified.

The live dirty EN/JA Lighthouse sample files were not read as authority, edited,
staged, restored, normalized, or replaced. Their existing state was preserved.

## Baseline2 clone and tooling provenance

New disposable clone:

`C:/Users/extra/E2R/e2r-liaison-scape-product-evaluation-seam-baseline2`

The clone was created from committed Git history, not from the live working
tree. Initial HEAD was exactly
`0937d7768136ff63e74924480551d370b2935c2e`; tracked worktree was clean; and
committed Product source and sample blobs matched that authority. The clone's
Product source, normal tests, public files, package.json, and package-lock.json
remained unchanged.

Characterization tooling provenance is W-C commits `df0fa53` (characterization
tests) and `8b366a0` (provenance binding). Only characterization-owned tooling
was copied into the new
`experimental/product-evaluation-seam/characterization2/` evidence surface.
No W-C `src/` change, normal Product test, materializer, candidate registry,
PR-3 harness, screenshot, or browser code was transferred. v2 tooling binds
the accepted Product commit, v2 checkpoint/schema identifiers, and separate
characterization2 output paths.

## Fixture and corpus authority

The role manifest authority is
`docs/evidence/visual-fixture-role-manifest-v1.json` at manifest commit
`6bc61cfdb6587d1579399cc658e5d19c98b87334`, with SHA-256
`B867E9FF7B84107E8B4DDCCC02458B7B9AA535AB6FACE4AD10A2942CC8C8D8F5`.
All fixture raw hashes were verified through immutable repository/commit/path
loading. The fixture authority commit is
`4d59010d8c13886c188d89a8b4c6c839e75f26e6`; live dirty sample bytes were not
used.

The same semantic corpus was reproduced: 16 EN/JA realistic fixture variants,
8 structural fixtures, and 6 synthetic controls. It produced 38 auto-layout
cases (including solve and settle), 9 pure routing cases, 16 App automatic
routing records, 8 pure label cases, and 16 App automatic label records.

## Canonicalization and serialization

v2 is `characterization-v2-post-order-resolution`, bound to Product commit
`0937d7768136ff63e74924480551d370b2935c2e`. Relation-array order is
`NON-SEMANTIC`; canonical ordered neighbor arrays and the locale-independent
Unicode code-point lexical comparator are active. Product semantic array order
is preserved. Serialization is UTF-8 with LF, deterministic key ordering,
normal JavaScript Number serialization, exact SHA-256 over canonical bytes, no
rounding or precision truncation, and no volatile timestamp in semantic
fingerprints. The generated manifest timestamp is excluded by the replay test
from its stable semantic comparison.

## Auto-layout v2 and v1/v2 comparison

The v2 artifact contains 38 exact semantic cases. Its SHA-256 is
`F18C4C98607B9412BD6C035803002BE1DFEE1F2AF721942C8D8FF69A5496795B`.

Relation reversal is exact for solve 16/16 and settle 16/16. Node reversal is
exact for solve 16/16 and settle 16/16. No-mutation is PASS. The focused
permutation set (original, reversed, rotation, fixed shuffle) on the minimized
multi-neighbor witness is exact PASS. Non-ASCII comparator coverage is PASS
for ASCII, prefix, accented BMP, Japanese, and supplementary-plane IDs; no
`localeCompare` or `Intl.Collator` is used by the accepted Product comparator.

The v1/v2 comparison contains the same 38 case IDs:

- changed: 12;
- unchanged: 26;
- maximum absolute coordinate delta: `5.684341886080802e-14`;
- topology changed: NO;
- component membership changed: NO;
- unexplained auto-layout differences: 0.

All 12 changed cases are classified `EXPECTED-ORDER-CORRECTION`:

`ashen-crown-en:solve`, `ashen-crown-ja:solve`, `titanic-en:solve`,
`titanic-ja:solve`, `regional-care-coordination-en:solve`,
`regional-care-coordination-ja:solve`, `district-solar-cooperatives-en:solve`,
`district-solar-cooperatives-ja:solve`,
`regional-emergency-response-en:solve`,
`regional-emergency-response-en:settle`,
`regional-emergency-response-ja:solve`,
`regional-emergency-response-ja:settle`.

Same-process deterministic replay is PASS. Fresh-process auto-layout replay is
PASS with 38 cases and exact v2 auto-layout SHA-256.

## Routing and labels

The pure routing primitive contains 9 cases and is v1/v2 exact for identical
fixed geometry. Routing baseline-v2 SHA-256:
`EDA55E302F8F665122FC5A8F84BAD7306B7F81696EE9B35557C813808188B6FF`.

App automatic routing contains 16 records. Two records changed:
`regional-emergency-response-en` and `regional-emergency-response-ja`.
Both are classified `UPSTREAM-POSITION-PROPAGATION`, bound to changed v1/v2
settled-position fingerprints. Unexpected routing drift count: 0.

The pure label primitive contains 8 cases and is v1/v2 exact for identical
fixed geometry/text. Label baseline-v2 SHA-256:
`F633E15F83DF172F77FC68033576CE5F3A2A6EC498B63C4C614CF8E754B69B17`.

App automatic labels contain 16 records. Two records changed, the same
regional-emergency-response EN/JA records, and both are classified
`UPSTREAM-POSITION-PROPAGATION` through the changed positions and route
geometry. Unexpected label drift count: 0. Overall unexpected difference
count: 0.

## v2 artifact set

The characterization2 artifact set is:

| Artifact | SHA-256 |
| --- | --- |
| `auto-layout-baseline.json` | `F18C4C98607B9412BD6C035803002BE1DFEE1F2AF721942C8D8FF69A5496795B` |
| `routing-baseline.json` | `EDA55E302F8F665122FC5A8F84BAD7306B7F81696EE9B35557C813808188B6FF` |
| `label-baseline.json` | `F633E15F83DF172F77FC68033576CE5F3A2A6EC498B63C4C614CF8E754B69B17` |
| `artifact-index.json` | `A623B880063F56EE273DAB25D69592D8CB76C06D7CCC98556189D4AAC54AE1A9` |
| `characterization-manifest.json` | `C0BEB8750BBF2705146778C4BD476DF0CCB103B0BED5A9621FBA1E9AB0E1508A` |
| `v1-v2-comparison.json` | `7C0A3443AE4A80FE333214CDEE675365B3AF9F5C58429DC7C9A42ADD2D9986B1` |

The artifact index is schema v2 and records 38, 9, and 8 pure cases plus
in-process and fresh-process replay PASS. The manifest is schema v2 and binds
the accepted Product authority, fixture authority, role-manifest hash, and all
16 fixture IDs.

Historical v1 hashes were verified unchanged from immutable W-C commit history:

| Artifact | SHA-256 |
| --- | --- |
| `auto-layout-baseline.json` | `B1DE52138AD878DB1A34FFA7823EC0415AF8CB32178D0DB318AF02F4EF9B5E48` |
| `routing-baseline.json` | `9084B156A2D016DD782A0F389A21F7D68B2EBC26ABF0A863EDD780063A796130` |
| `label-baseline.json` | `A90CC0F2ADC205A8D5BFDB376174E1183AC19A02F6EDD03B4016A6EA24661D73` |
| `artifact-index.json` | `7EE63AE8B8566A6E2B10ED69A1DAC45FD8D8BDF4701CB10EA22E63BCB04A96EA` |
| `characterization-manifest.json` | `A66596EA42FB92EBA84EEBB91DBDB68B122700E03AB7D0B5CFB20E9740838B11` |

Baseline-v1 was not modified, and v2 was written only under characterization2.

## Validation and commits

Focused characterization tests: 4/4 PASS. Full Product tests:
`npm.cmd test` 283/283 PASS. `npm.cmd run lint`: PASS.
`npm.cmd run build`: PASS. `git diff --check`: PASS. The full Product run had
non-fatal existing WebSocket port-in-use warnings; all tests passed.

Baseline2 evidence commit:

- Hash: `324193eda5924d2c5f5d0e0cad8a92b64d2ea6a8`;
- Subject: `test: freeze LiaisonScape post-correction characterization`;
- Parent/base authority: `0937d7768136ff63e74924480551d370b2935c2e`;
- Scope: 12 characterization2 tooling/artifact paths only, local and unpushed.

Product source modification: NO. The baseline2 clone staged and committed no
Product source, normal test, public, or package path. The Product source blobs
remain those of the accepted authority.

## Deferred work and final exclusions

- Product-seam equivalence fully reconciled: NO; deferred to the next checkpoint.
- Historical v1 status: `PRE-ORDER-CORRECTION`.
- Current v2 status: `POST-ORDER-CORRECTION`.
- Baseline-v2 frozen: YES.
- Implementation1B eligible: NO.
- PR-3: NO.
- Candidate materialization: NO.
- V0/V1/V2/V3: NONE.
- Candidate selected: NO.
- Product candidate integration: NO.
- Sample integer-coordinate follow-up: unchanged; the existing roadmap policy remains informational and no sample bytes were changed.
- Knowledge Candidate: `NO / checkpoint-local`; no ai-knowledge entry was created or promoted.
- Push/tag/release/deploy/publication: NONE.

## Repository states

- baseline2 clone: clean at `324193eda5924d2c5f5d0e0cad8a92b64d2ea6a8`, evidence committed and unpushed.
- Live Production: unchanged at `0937d7768136ff63e74924480551d370b2935c2e`; only `public/lighthouse-restoration-demo.en.e2r.json` and `public/lighthouse-restoration-demo.ja.e2r.json` remain dirty.
- W-C: unchanged, clean, detached at `d7271f5bc2c56d6ae7d46992140dc9cc165ecfee`.
- Retained materializer: unchanged, detached at `fd563340625fd3d88dc25baedc93c4f8fe69e5e7`; pre-existing `experimental/` remains untracked.
- ai-knowledge: pre-existing dirty `playbooks/e2r-edge-cdp-browser-diagnostic.md` preserved.

## Next prerequisite

The exact smallest next prerequisite is:

`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-CHARACTERIZATION-ORDER-CANONICALIZATION-EQUIVALENCE-RECONCILIATION1`

Status: `NOT STARTED`.

This checkpoint stops here. It does not start source-drift reconciliation,
materializer update, settling-kernel extraction, Implementation1B, or any
candidate workflow.
