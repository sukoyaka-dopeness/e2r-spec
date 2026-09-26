# Status

**XAPP-CAPABILITY-HANDOFF11-LS-RECIPIENT-PUBLIC-DEPLOYMENT1: PUBLIC
LIAISONSCAPE RECIPIENT PARITY ACCEPTED**

The accepted current-source recipient at LiaisonScape `95a8c56` was pushed to
`main`, deployed through the existing GitHub Pages workflow, and verified in a
fresh dedicated Edge profile. This is public recipient acceptance only; it is
not full public NarrativeLine-to-LiaisonScape E2E acceptance.

# Authorization

The checkpoint explicitly authorized LiaisonScape push, deployment, and
post-deployment public verification only. NarrativeLine, Hub, e2r-spec, and
ai-knowledge push/deploy were not authorized and were not performed.

# Scope

This checkpoint verifies the public LiaisonScape recipient path:

`targeted Handoff URL -> Dataset acquisition -> canonical Relation resolve ->
safe Relation Detail landing`

It also covers ordinary Dataset Handoff v0 regression, non-destructive
`relation.delete` intent receipt, bounded malformed/unsupported handling,
locale, reload, Back/Forward behavior, and browser-native dialog state.

No Dataset was uploaded, saved, deleted, or otherwise mutated by the public
tests. No runtime, parser, CSS, i18n, endpoint-separator, or presentation fix
was made.

# Local / remote revisions

| Repository | Local / pushed revision | Result |
| --- | --- | --- |
| LiaisonScape | `95a8c56` | pushed to remote `main` |
| NarrativeLine | `158adec` | unchanged and not pushed |
| e2r-spec | `4695413` before this record | local only and not pushed |
| e2r-hub | `9de6399` | unchanged and not pushed |

The required recipient lineage includes `0f7fe1c` (`relation.inspect`) and
`95a8c56` (`relation.delete` intent). LiaisonScape's worktree was clean before
and after the deployment.

# Push range

Before push, `origin/main..HEAD` contained exactly these seven commits:

```text
491d804 docs: require incremental application modularization
98f7751 refactor: extract detail deletion workflow state
33d0427 feat: add Entity deletion Relation resolution
0a3c446 fix: contain deletion resolution focus
34d8164 fix: refine Entity deletion resolution presentation
0f7fe1c feat: receive Relation inspect Handoff
95a8c56 feat: receive Relation delete Handoff intent
```

The range was reviewed as the accepted LiaisonScape lineage. It contained no
unrelated, accidental, experimental, or unreviewed commit. The normal command
`git push origin main` completed with remote acknowledgement:

`2284d9b..95a8c56 main -> main`

# Deployment mechanism

LiaisonScape uses `.github/workflows/deploy-pages.yml` as the authoritative
deployment mechanism:

- provider: GitHub Pages;
- branch: `main`;
- trigger: push to `main` or manual `workflow_dispatch`;
- checks: `npm ci`, `npm run test`, `npm run lint`, `npm run build`;
- artifact: `e2r-liaison-scape/dist`;
- deployment: `configure-pages`, `upload-pages-artifact`, and `deploy-pages`.

This is Case A: push to the configured branch automatically triggers
deployment. No manual or invented deployment command was used.

# Deployment result

The push-triggered workflow was:

[Deploy to GitHub Pages run 33144996627](https://github.com/sukoyaka-dopeness/e2r-liaison-scape/actions/runs/33144996627)

The run had:

- `head_sha`: `95a8c56b9fead2d6f1164bd6a93dd66aaa7daa32`;
- event: `push`;
- branch: `main`;
- status: `completed`;
- conclusion: `success`.

Post-deployment public HTML returned HTTP 200 and had
`Last-Modified: Fri, 28 Aug 2026 05:31:21 GMT`. It referenced the current
local-build asset `index-DDt781tq.js`, whose deployed content contains
`targetObjectId`, `requiredCapability`, `targetContractVersion`,
`relation.inspect`, and `detail-object-id`.

# Public URL

The verified canonical URL is:

`https://sukoyaka-dopeness.github.io/e2r-liaison-scape/`

The deployment host is GitHub Pages and the configured Vite base is
`/e2r-liaison-scape/`.

# Browser environment

Verification used Microsoft Edge `151.0.4129.107` in a fresh dedicated
temporary profile with the e2r-spec `tools/edge-cdp/edge-cdp-helper.mjs`.

The helper initially reported native dialog state `unknown`. An explicit
no-dialog recovery established `closed` before acceptance. The final helper
state was `closed`, with `visualManualAllowed: true`.

# Ordinary v0 regression

**PASS.** The URL contained only the valid public Dataset URL in the fragment.
The public LS acquired the Dataset and landed on the ordinary workspace with
10 Entities and 12 graph Relations. No targeted Relation Detail opened, no
confirmation appeared, and no native dialog remained open.

# relation.inspect public targeted test

**PASS.** The tested fragment used:

- Dataset URL:
  `https://raw.githubusercontent.com/sukoyaka-dopeness/e2r-liaison-scape/main/public/lighthouse-restoration-demo.en.e2r.json`;
- `targetObjectId=clara-thomas-supervises`;
- `targetObjectType=Relation`;
- `requiredCapability=relation.inspect`;
- `targetContractVersion=1`;
- `locale=en`.

The Dataset was acquired, the exact canonical Relation resolved, and the
Relation Detail opened without a wrong-target substitute or destructive action.
The displayed technical ID was exactly `clara-thomas-supervises`.

# Canonical identity

**PASS.** A self-Relation case targeted `beacon-self-monitor`. The displayed
Relation Detail technical ID was exactly `beacon-self-monitor`, demonstrating
canonical ID resolution rather than label-based substitution.

# relation.delete safety

**PASS.** A direct targeted URL with the same canonical ID and
`requiredCapability=relation.delete` landed on the exact Relation Detail.
The Relation survived, the Delete Confirmation did not open, the delete
control was not auto-confirmed, and no Dataset mutation occurred.

# Failure handling

**PASS.** The following bounded cases each returned the safe targeted-handoff
invalid message on the Home surface, with no Relation Detail, no wrong target,
no confirmation, and no Dataset mutation:

- missing `targetObjectId`;
- unknown `requiredCapability=relation.unknown`; and
- unsupported `targetContractVersion=2`.

The full error taxonomy was not re-accepted in this deployment checkpoint.

# Locale

**PASS.** The targeted exact Relation remained
`clara-thomas-supervises` in the Japanese UI. The Detail heading was
`つながりの詳細` and the document language was `ja`. Capability tokens and
target identity remained locale-independent.

# Reload / Back / Forward

**PASS.** After targeted landing, reload restored the same exact Relation
Detail without a blank state, navigation loop, confirmation, or auto-delete.
Back returned safely to the public Home state without destructive behavior;
Forward restored the targeted exact Relation Detail.

# Native dialog state

The initial state was `unknown` until the helper's explicit no-dialog probe.
The normalized pre-acceptance state and final state were both `closed`.
No JavaScript dialog was left open during any accepted scenario.

# Deployed revision evidence boundary

Git commit identity is not directly rendered by the public application, and
the asset filename is not itself a Git hash. The deployment evidence chain is
nevertheless continuous:

`push acknowledgement for 95a8c56 -> Actions head_sha 95a8c56 -> successful
Pages job -> current targeted terms in public asset -> P1-P8 public behavior`

The correct claim is that public behavior corresponds to the newly deployed
recipient capability. It is not a claim that the public asset filename alone
proves a Git commit.

# Public LiaisonScape recipient parity decision

**PUBLIC LIAISONSCAPE RECIPIENT PARITY ACCEPTED**

The required hard gates passed:

- deployment success;
- ordinary v0 regression;
- direct `relation.inspect` targeted landing;
- exact canonical target;
- self-Relation identity case;
- no Dataset mutation;
- no destructive automatic action;
- malformed/unsupported safe failure;
- locale;
- reload and Back/Forward; and
- final native dialog closed.

This acceptance is limited to public LiaisonScape recipient parity. It is not
full public NL-to-LS acceptance.

# NarrativeLine public status

NarrativeLine remains at local revision `158adec`. Its source, commit history,
push state, and deployment state were not changed. Public sender parity is
still **NOT YET ACCEPTED**.

# Explicit exclusions

Hub push/deploy, e2r-spec push, ai-knowledge edits or push, NarrativeLine
push/deploy, full public NL-to-LS E2E, modified-Dataset automatic transfer,
generic Capability discovery, runtime fixes, parser fixes, CSS fixes, i18n
fixes, endpoint-separator correction, `Remove connection` presentation work,
generic dialog-spacing work, Dataset deletion, and public storage mutation are
excluded. Cross-App Relation deletion remains **CLOSED**.

Handoff8 historical BLOCKED evidence remains retained. No force push, history
rewrite, reset, rebase, amend, squash, or revert was performed.

# Knowledge Candidate Check

No ai-knowledge entry was added. This checkpoint records deployment-specific
evidence already bounded by the accepted Handoff10 readiness decision; no new
general reusable knowledge was required.

# Next bounded step

Stop at public LiaisonScape recipient parity. A separate authorized checkpoint
may publish NarrativeLine `158adec`, then verify the public sender anchor and
full NL-to-public-LS E2E. Do not begin that sender deployment as part of this
record.
