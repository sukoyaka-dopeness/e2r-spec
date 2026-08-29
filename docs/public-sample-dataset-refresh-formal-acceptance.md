# Public Sample Dataset Refresh Formal Acceptance

- Date: 2026-08-30
- Status: `ACCEPTED — PUBLIC SAMPLE DATASET REFRESH`
- Acceptance scope: local committed public-sample release candidate, canonical
  sample semantics, mirror parity, Validator compatibility, consumer
  preservation, and the previously blocked local browser acceptance.
- This acceptance does **not** mean that the current public GitHub/deployed
  applications contain the candidate commits.

## Previous Formal Acceptance attempt

The previous Formal Acceptance attempt stopped after discovering the
`LIAISONSCAPE VALIDATOR DEPENDENCY INTEGRATION DEFECT`. The Lighthouse sample
itself was structurally valid; the stop was caused by the installed old
consumer Validator reporting `unknown_extension` and
`specification_unavailable`.

## Previous blocker

The exact previous blocker was the LiaisonScape consumer dependency remaining
on the old Validator range. It was not a malformed sample, missing Relation,
or canonical/mirror structural failure.

## Blocker closure

The blocker is **CLOSED**. LiaisonScape and NarrativeLine now resolve the
published npm registry package `@sukoyaka-dopeness/e2r-validator@0.4.0`.
LiaisonScape's fresh local browser load no longer showed
`unknown_extension`, `specification_unavailable`, or
`extension_version_unspecified`.

## Public GitHub baseline

Read-only public inspection found Validator main and tag `v0.4.0` published,
while public LiaisonScape still declares Validator `^0.2.0` and its public
Lighthouse test/sample remains the older 26-Relation baseline. Public
NarrativeLine still declares `^0.3.0`. Public e2r-spec and Hub references also
remain at their published state. This is expected public/local divergence:
local committed candidate state is authoritative for this acceptance.

## Public/local candidate divergence

The candidate commits in e2r-spec, LiaisonScape, and NarrativeLine remain
unpushed. Hub continues to reference the existing public LiaisonScape raw/blob
URLs, so those URLs can still serve the older public Lighthouse sample. This
does not invalidate local candidate Formal Acceptance and is recorded as
`PUBLIC URL CONTENT UPDATE PENDING PUSH/DEPLOY`.

## Sample inventory terminology

The counts below use separate authorities and are not combined into one
ambiguous “Public Samples” number.

### Project public sample catalog inventory

The S3/provenance catalog contains **10 Dataset files**, five EN/JA pairs:

- Berlin Wall EN/JA
- Apollo 11 EN/JA
- Lighthouse EN/JA
- Ashen Crown EN/JA
- Titanic EN/JA

This is the project redistribution/catalog inventory.

### Canonical public sample inventory

The current e2r-spec canonical owner contains **8 canonical public-sample
variants**: Apollo 11 EN/JA, Ashen Crown EN/JA, Titanic EN/JA, and Lighthouse
EN/JA. Berlin Wall remains NarrativeLine-owned and is not duplicated into this
canonical e2r-spec count.

### Validation inventory

The accepted current public-sample validation procedure validates those same
**8 canonical variants** with the local/published-compatible Validator. Each
returned valid with zero errors and zero warnings. Validator's separate
`test/spec-fixtures.test.js` reads the broader specification fixture roots;
that fixture count is not substituted for the 8-variant public-sample count.

### Compatibility mirror inventory

LiaisonScape contains **2 committed compatibility mirror files**, the Lighthouse
EN and JA pair. They are mirrors, not two additional public-sample variants.
Canonical plus mirror file counts would be 10 Lighthouse-related files only
if explicitly counting physical copies; this document does not call that
combined physical count a sample count.

### S3 provenance / redistribution inventory

S3 formalization records all **10 Dataset files** as
`REDIST-A — READY UNDER CURRENT PROJECT AUTHORITY`. This is a provenance and
redistribution classification, not the canonical-owner or validation count.
There is no inventory authority conflict.

## Canonical ownership

e2r-spec is the canonical Lighthouse owner. LiaisonScape `public/` is the
committed compatibility/deployment mirror. Hub uses existing external raw/blob
references and has no duplicated Lighthouse Dataset JSON.

## Lighthouse canonical/mirror parity

`npm run validate:public-sample-mirrors` passed. EN and JA canonical files are
byte-identical to their LiaisonScape mirrors, and EN/JA structural parity
passed.

- EN SHA-256:
  `c67107bca0a007a399f164317da2d330f7b15f5e2609a1b5b2fcdf9f44e6c386`
- JA SHA-256:
  `7de771caf8c75f5868034c5e4790bc473f7d0ef21d40f7178307bf39b0173aca`

## Lighthouse structural acceptance

Both canonical EN/JA Datasets contain:

- 10 Entities
- 11 Events
- 28 Relations
- 14 visible Entity-to-Entity Relations

The accepted Coordinates, Dataset IDs, metadata, Specification declaration,
and Entity/Event/Relation topology are preserved.

## Lighthouse semantic acceptance

- `thomas-maya-friends`: Thomas → Maya, EN `friends with`, JA `友人`; no
  reciprocal Core Relation.
- `beacon-lighthouse-installed-in`: Beacon → Lighthouse, EN `is installed in`,
  JA `設置されている`; no Presentation record.
- `sofia-elias`: Sofia → Elias, EN `interviews`, JA `聞き取りをする`.
- spouse Relation absent; `SPOUSE-NO — PRESERVED`.

## Lighthouse Presentation acceptance

The final explicit Presentation semantics are:

- `clara-lighthouse`: `arrowDisplay: "reverse"`
- `clara-maya`: `arrowDisplay: "bidirectional"`
- `sofia-elias`: `lineStyle: "dashed"`
- `thomas-maya-friends`: `arrowDisplay: "undirected"`,
  `lineStyle: "dotted"`
- supervision: implicit normal/solid

## Validator 0.4.0 validation

Published Validator 0.4.0 accepted canonical Lighthouse EN and JA with
`valid=true`, zero errors, and zero warnings. No unknown Extension,
specification-unavailable, unspecified-version, malformed Presentation, or
orphan Presentation diagnostic occurred. `npm run validate` passed.

## Public sample validation result

The exact validation inventory was the 8 canonical variants listed above:
Apollo 11 EN/JA, Ashen Crown EN/JA, Titanic EN/JA, and Lighthouse EN/JA.
Result: 8/8 valid, 0 errors, 0 warnings. This does not mix compatibility
mirrors into the count.

## Automated gates

- e2r-spec validate: PASS
- e2r-spec mirror validation: PASS
- LiaisonScape: 274 tests, lint, build: PASS
- NarrativeLine: 222 tests, lint, build: PASS
- Validator: 106 tests plus 3 fixture tests, lint: PASS
- Hub: 1 test, lint, build: PASS

## LiaisonScape real-browser JA evidence

Using a fresh local LiaisonScape server with the updated consumer dependency,
the JA Lighthouse candidate loaded normally with 10 Entities and 14 visible
Entity Relations. The screen was not blank and no crash occurred.

## LiaisonScape real-browser EN parity evidence

The EN candidate has the same structural and Presentation contract; automated
EN/JA parity and the canonical/mirror checks passed. No locale-specific
structural divergence was found.

## Warning-removal evidence

Before consumer integration, the local browser displayed
`unknown_extension` and `specification_unavailable`. After the published 0.4.0
dependency was installed and a fresh local server was loaded, both were absent;
`extension_version_unspecified` and Presentation warnings/errors were also
absent.

## Dashed/dotted visual evidence

The JA browser graph visibly retained the dotted Thomas/Maya friendship and
the dashed Sofia/Elias interview at the representative working zoom. The
published consumer integration browser evidence confirmed the computed dashed
stroke and distinguishability from the dotted stroke.

## Arrow-display evidence

Clara/Maya remained bidirectional and Clara/Lighthouse remained reverse in the
JA candidate. No default normal arrow was materialized.

## Node-label legibility evidence

The Old Harbor Lighthouse label remained readable. No new node-label crossing,
blank graph, off-canvas, or NaN regression was observed. Existing node-label
route avoidance remained unchanged.

## NarrativeLine compatibility evidence

NarrativeLine loaded its current sample successfully with Validator 0.4.0,
without the old Validator warnings or a blank/crash. Its 222-test, lint, and
build gates passed. Its existing preservation/round-trip boundary retained
Presentation and unknown-extension behavior; graph Presentation rendering is
not required for NarrativeLine acceptance.

## Cross-app serialization evidence

Existing LiaisonScape and NarrativeLine load/save or round-trip tests passed.
No Relation, Presentation, Coordinate, Specification, or unknown Extension
loss was observed. No manual exported JSON edit was used.

## Dataset safety regression boundary

Existing tests passed for Dataset replacement safety, datasetModified state,
pending user work, beforeunload, handoff preservation, direct graph authoring,
and Presentation preservation. No Dataset safety source was changed.

## Licensing/provenance acceptance

Lighthouse remains `REDIST-A — READY UNDER CURRENT PROJECT AUTHORITY` as a
project-created fictional demo. The semantic and Presentation changes add no
external copyrighted text, third-party sample content, or unsupported
biography. S3 provenance formalization remains valid.

## Hub/reference boundary

Hub contains no Lighthouse Dataset JSON copy and no new runtime dependency on
local files. Its current raw/blob URL strategy remains unchanged. Public URL
content update is pending future push/deploy.

## R1 status

Lighthouse dashed showcase user-intent R1: **CLOSED**. Validator residual R1:
closed. Remaining release residual R1 count: **0**.

## R2 Auto Layout boundary

Explicit Auto Layout / Re-layout remains R2 and **NOT STARTED**. Clara-central
placement, topology scoring, graph-wide movement, routing changes, and label
placement changes were not part of this acceptance.

## Formal Acceptance decision

Decision: **ACCEPT-A**.

`FORMALLY ACCEPTED — PUBLIC SAMPLE REFRESH`

The local committed release candidate is formally accepted. This does not mean
that the candidate is currently publicly deployed.

## Public deployment boundary

- Candidate Formal Acceptance: **COMPLETE**
- Public GitHub propagation: **NOT COMPLETE**
- Public deployment acceptance: **NOT PERFORMED**

## Remaining release work

- Public candidate commits remain unpushed in the relevant repositories.
- Explicit Auto Layout / Re-layout R2 is not started.
- Final Cross-App / Release Audit is not started.
- Push/deployment readiness is not accepted.
- Public deployment acceptance is not performed.

## Exclusions

No source, sample JSON, package, lockfile, schema, roadmap, Coordinate,
Presentation, Hub, or ai-knowledge file was modified by this acceptance
checkpoint. Historical result/decision documents were not rewritten.

## Modified files

Only this e2r-spec result document was created.

## Commit

Local commit: `2df55b5 docs: formally accept public sample refresh`.

## Push/deploy status

No push or deploy was performed. No e2r-spec, LiaisonScape, NarrativeLine, or
Hub public propagation was authorized. The protected dirty file
`C:/Users/extra/E2R/ai-knowledge/playbooks/e2r-edge-cdp-browser-diagnostic.md`
was preserved.
