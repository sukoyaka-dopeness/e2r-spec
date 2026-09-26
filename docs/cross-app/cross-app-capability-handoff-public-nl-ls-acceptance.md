# Status

**XAPP-CAPABILITY-HANDOFF12-NL-SENDER-PUBLIC-DEPLOYMENT1: PUBLIC
NARRATIVELINE SENDER AND PUBLIC NL-to-LS E2E ACCEPTED**

NarrativeLine `158adec` was pushed to `main`, deployed through the existing
GitHub Pages workflow, and verified in a fresh dedicated Edge session. The
public sender generated the accepted Capability Handoff contract and a normal
same-tab click landed on the exact public LiaisonScape Relation Detail.
LiaisonScape was not changed or redeployed; its public recipient parity remains
accepted at `95a8c56` by Handoff11.

# Authorization

Only the NarrativeLine `158adec` push, deployment, public verification, public
NL-to-public-LS verification, this local e2r-spec record, and Roadmap sync were
authorized. Hub, LiaisonScape runtime, ai-knowledge, force push, history
rewriting, and unrelated runtime fixes were outside scope.

# Scope

This covers public NL startup, ordinary Dataset Handoff v0, the Entity delete
blocker sender surface, `relation.inspect` URL generation, exact recipient
resolution, hidden/Event-related sender coverage, modified/pending safety,
locale transport, reload, Back/Forward, native-dialog, and destructive-action
safety. No Dataset was saved, uploaded, exported, removed, or deleted.

# Runtime revisions

| Repository | Revision | Result |
| --- | --- | --- |
| NarrativeLine | `158adec8c3e774b2edfff7595340427679b95c58` | pushed and deployed |
| LiaisonScape | `95a8c56b9fead2d6f1164bd6a93dd66aaa7daa32` | unchanged; prior public acceptance |
| e2r-spec | `c471750ce5e5c5d629e3acd68b8215d13ff98163` before this record | local documentation only |
| e2r-hub | `9de639990396c95e48d6cad37f027c21c4de1962` | unchanged |

# Push range

Before the authorized push, NarrativeLine `origin/main..HEAD` contained these
fifteen accepted-lineage commits, oldest first:

```text
85e2fbf feat: protect NarrativeLine browser navigation
61d2231 fix: polish NarrativeLine discard dialog actions
ddb0ff7 feat: keep NarrativeLine timeline actions accessible
1541474 feat: add NarrativeLine workspace dataset menu
6b8481c feat: add Timeline back-to-top action
68796be test: apply UI lifecycle helper prototype
8b0dd76 test: preserve Lineage Draft through NarrativeLine
57b5803 fix: resolve Entity deletion blockers explicitly
4175b42 fix: complete Entity deletion resolution safety
6b9e714 fix: finish Entity deletion acceptance blockers
f01bb88 fix: refine Entity deletion dialog presentation
766968d fix: refine Relation blocker layout
3b2078f docs: require incremental application modularization
7a695b3 fix: complete final Entity deletion
158adec feat: send targeted Relation Handoff
```

The normal push completed with remote acknowledgement:
`ef0026b..158adec main -> main`.

# Deployment mechanism

`.github/workflows/deploy-pages.yml` is the authoritative GitHub Pages
mechanism. It runs on `main` push or `workflow_dispatch`, executes `npm ci`,
tests, lint, and build, then deploys the `e2r-narrative-line/dist` artifact.
No manual or invented deployment command was used.

# NarrativeLine deployment result

[Deploy to GitHub Pages run 33146076558](https://github.com/sukoyaka-dopeness/e2r-narrative-line/actions/runs/33146076558)
completed successfully for exact `head_sha`
`158adec8c3e774b2edfff7595340427679b95c58` on `main`.

Fresh local gates passed: 194 tests, lint, build, and `git diff --check`.
Public HTML returned HTTP 200 with `Last-Modified: Fri, 28 Aug 2026
05:53:02 GMT`. The deployed asset was
`/e2r-narrative-line/assets/index-CyJFhT4m.js`; it contained
`relation.inspect`, `targetObjectId`, `targetContractVersion`,
`e2r-liaison-scape`, and `Open in LiaisonScape`, and did not contain
`window.open`.

# Public URLs

- [Public NarrativeLine](https://sukoyaka-dopeness.github.io/e2r-narrative-line/)
- [Public LiaisonScape](https://sukoyaka-dopeness.github.io/e2r-liaison-scape/)
- [Fixture Dataset](https://raw.githubusercontent.com/sukoyaka-dopeness/e2r-liaison-scape/main/public/lighthouse-restoration-demo.en.e2r.json)

# Browser environment

Microsoft Edge `151.0.4129.107` ran in a dedicated temporary profile through
the e2r-spec Edge CDP helper. The target was explicitly selected and remained
connected. Initial native-dialog state was `unknown`; explicit no-dialog
recovery normalized it to `closed` before acceptance.

# Fixture

The fixture was `example-lighthouse-restoration-en-v2`, titled `Lighthouse
Restoration Project`, with 10 Entities, 11 Events, and 25 Dataset Relations.
The primary sender target was Entity-Entity Relation `clara-lighthouse`, named
`leads restoration of`; the hidden Event-Entity case was `lead-clara`.

# Ordinary Handoff v0

**PASS.** Public NL startup showed Home without blank/error state. A valid
public Dataset Handoff loaded the ordinary Timeline with 11 Events and no
targeted sender dialog or unintended LS navigation.

# Public sender action

**PASS.** The browser selected `Clara appointed restoration lead`, opened Event
Detail, selected Entity `clara`, opened Entity Detail, and clicked `Delete
Entity`. The blocker showed eight connections. Each exposed `Open in
LiaisonScape`; no remove or delete action was clicked.

# Generated URL contract

**PASS.** The actual public anchor for `clara-lighthouse` generated:

```text
https://sukoyaka-dopeness.github.io/e2r-liaison-scape/#datasetUrl=https%3A%2F%2Fraw.githubusercontent.com%2Fsukoyaka-dopeness%2Fe2r-liaison-scape%2Fmain%2Fpublic%2Flighthouse-restoration-demo.en.e2r.json&targetObjectId=clara-lighthouse&targetObjectType=Relation&requiredCapability=relation.inspect&targetContractVersion=1&locale=en
```

Decoded fields were exactly `datasetUrl` (the public fixture),
`targetObjectId=clara-lighthouse`, `targetObjectType=Relation`,
`requiredCapability=relation.inspect`, `targetContractVersion=1`, and
`locale=en`. The anchor was same-tab; the public asset contained no
`window.open`.

# Full NL→LS E2E

**PASS.** Clicking that actual public sender link opened public LS. The
recipient loaded the Dataset and displayed `.detail-object-id` exactly as
`clara-lighthouse`. No wrong-target fallback, blank state, delete confirmation,
or native dialog appeared.

# Canonical target identity

**PASS.** The full path resolved canonical `clara-lighthouse`, not its label.
The sender also exposed and successfully sent hidden Event-Entity Relation
`lead-clara`; public LS displayed exact ID `lead-clara`.

# Modified safety

**PASS.** With the public Entity name changed to an unsaved value, the blocker
remained in NL and exposed zero Capability Handoff anchors. No stale URL or LS
navigation occurred, and no Dataset was saved.

# Pending-work safety

**PASS.** With an unsaved public Entity draft pending, the blocker again exposed
zero anchors. The discard-draft state remained visible in NL; no automatic
discard, navigation, or Dataset mutation occurred.

# Local/no-source safety

**PASS-SUBSTITUTE.** A public HTTPS browser cannot inject a local file without
a user file-selection action. No fabricated local URL was used. Handoff9 and
Handoff10 source/production safety evidence remains authoritative for this
boundary.

# Locale

**PASS.** English NL generated `locale=en`. After switching NL to Japanese,
the blocker rendered `LiaisonScapeで開く` and generated `locale=ja` while
preserving the same Dataset, canonical target, type, capability, and contract
version. Recipient-side locale behavior remains covered by Handoff11.

# Reload / Back / Forward

**PASS.** Reload restored the exact public LS `clara-lighthouse` detail. Back
and Forward retained the accepted target detail without blank/error,
destructive, or confirmation state.

# Dataset mutation evidence

No save, export, connection removal, Entity deletion, or Relation deletion was
performed. Modified and pending cases changed only unsaved form state and were
checked for absent sender anchors.

# Destructive-action safety

NL `Delete Entity` opened only the blocker review modal. No `Remove connection`
or final deletion control was activated. LS showed Relation Detail only and no
delete confirmation. The accepted path was read-only.

# Native dialog state

After recovery, the normalized pre-acceptance and final native-dialog states
were both `closed`, with `visualManualAllowed: true`. No JavaScript dialog
remained open during accepted scenarios.

# Formal public decision

**PUBLIC NARRATIVELINE SENDER AND PUBLIC NL-to-LS E2E ACCEPTED.** Deployment,
ordinary v0, sender generation, exact contract, canonical and hidden targets,
modified/pending safety, locale transport, reload/Back/Forward, mutation,
destructive-action, and dialog-state gates all passed.

# Capability boundary

The accepted boundary is the concrete read-only `relation.inspect` Capability
Handoff between the two public applications. No generic Capability registry,
discovery table, authorization service, or Core/Extension semantic change was
introduced. Cross-App Relation deletion remains **CLOSED** as a user capability.

# Explicit exclusions

LiaisonScape runtime/redeployment, Hub targeted Handoff, NL `relation.delete`
emission, generic capability discovery, Dataset upload/storage, public
mutation, presentation follow-up, dialog-spacing, endpoint-separator, parser
or i18n fixes, Core/Extension/schema changes, and ai-knowledge changes are
excluded. No force push, reset, rebase, amend, squash, revert, or history
rewrite was performed.

# Knowledge Candidate Check

No new ai-knowledge entry was warranted. This is deployment-specific evidence
bounded by the accepted Handoff design and prior public recipient decision.

# Next bounded step

Stop at this public sender and full public NL-to-LS acceptance. Do not begin a
new runtime checkpoint from this record; future presentation or capability
expansion requires separate authorization.
