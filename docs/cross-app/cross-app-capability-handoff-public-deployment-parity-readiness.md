# Status

**XAPP-CAPABILITY-HANDOFF10-PUBLIC-DEPLOYMENT-PARITY-READINESS1: DIAGNOSIS
COMPLETE / PUSH-DEPLOY NOT PERFORMED**

Current-source acceptance is complete, but public deployment parity remains:

**PUBLIC DEPLOYMENT PARITY NOT YET ACCEPTED**

The exact runtime commits are known, the GitHub Pages mechanisms and public
URLs are known, and no runtime fix is required by this checkpoint. The
required runtime commits have not been pushed to their remote `main` branches.

# Scope

This checkpoint is a read-only readiness and diagnosis audit for the bounded
NarrativeLine-to-LiaisonScape Capability Handoff. It covers repository
revision state, deployment workflow and configuration, public static assets,
the previously observed public recipient behavior, mixed-version safety, and
the acceptance plan for a later authorized publication.

This checkpoint does not push, deploy, modify runtime source, modify CSS or
parsers, mutate a public Dataset, or change the E2R Core, Extensions, schema,
or application ownership boundaries. The pre-existing dirty
`ai-knowledge/playbooks/e2r-edge-cdp-browser-diagnostic.md` file was preserved
unchanged.

# Current-source acceptance

The current-source result is the accepted Handoff9 result recorded in
[Cross-App Capability Handoff NL-LS Real Edge Acceptance](cross-app-capability-handoff-nl-ls-real-edge-acceptance.md).

Fresh gates in this checkpoint remained green:

| Repository | Tests | Lint | Build / validation |
| --- | ---: | --- | --- |
| NarrativeLine | 194 passed | passed | passed |
| LiaisonScape | 225 passed | passed | passed |
| e2r-spec | — | diff check passed | `npm run validate` passed |

The accepted local Edge evidence includes ordinary Dataset Handoff v0,
targeted `relation.inspect`, exact canonical Relation IDs, hidden/Event-
related, self, parallel, and same-name Relations, modified/local/pending
Dataset safety, locale coexistence, delete-intent safety, and Back/Forward
behavior. No destructive operation is part of this acceptance.

# Public evidence boundary

Read-only HTTP checks reached all three known project Pages URLs with status
200. The public NL and LS pages returned static HTML and asset references, but
the deployed asset contents do not expose the current targeted Handoff
implementation described below.

The prior real-Edge public observation established public LiaisonScape
navigation and Dataset acquisition, but did not establish targeted Relation
Detail landing. A fresh public Edge probe in the preceding acceptance attempt
encountered a CDP navigation timeout before a reliable state could be
captured. These results are deployment evidence, not a reason to change the
current runtime source.

# Runtime revisions

| Repository | Local revision | Role | Local state |
| --- | --- | --- | --- |
| NarrativeLine | `158adec` | authorized sender | `main`, clean |
| LiaisonScape | `95a8c56` | inspect and delete-intent recipient | `main`, clean |
| e2r-spec | `fb05042` | current-source acceptance record | `main`, clean before this record |
| e2r-hub | `9de6399` | unrelated deployment baseline | `main`, clean |

The NL and LS runtime revisions are the exact revisions accepted by Handoff9.
The Hub revision is recorded only to bound the repository audit; Hub targeted
Handoff is not in this checkpoint.

# Remote revisions

Read-only `git ls-remote origin refs/heads/main` checks were performed without
fetching, merging, or changing any branch:

| Repository | Local `HEAD` | Remote `main` | Local ahead | Classification |
| --- | --- | --- | ---: | --- |
| NarrativeLine | `158adec` | `ef0026b` | 15 | required sender commit is local only |
| LiaisonScape | `95a8c56` | `2284d9b` | 7 | required recipient commit is local only |
| e2r-spec | `fb05042` | `8c7371c` | 37 | this record is local only |
| e2r-hub | `9de6399` | `adfd8af` | 11 | outside this checkpoint |

The remote values above were returned by the remote server during this audit;
they are not inferred solely from local tracking refs. Neither required
runtime commit is present on its remote `main`. No push was performed.

# Deployment mechanisms

NarrativeLine, LiaisonScape, and Hub each use a repository-local
`.github/workflows/deploy-pages.yml` workflow for GitHub Pages.

For NarrativeLine and LiaisonScape, the relevant mechanism is:

- trigger: push to `main`, or manual `workflow_dispatch`;
- source: the repository's checked-out `main` commit;
- checks: `npm ci`, tests, lint, and `npm run build`;
- artifact: the application `dist/` directory;
- host: GitHub Pages through `configure-pages`, `upload-pages-artifact`, and
  `deploy-pages`;
- concurrency: the Pages deployment group cancels an earlier in-progress run.

NarrativeLine uploads `e2r-narrative-line/dist`; LiaisonScape uploads
`e2r-liaison-scape/dist`. A push to `main` therefore triggers a deployment
automatically; a manual workflow dispatch is also available. The workflows do
not set `VITE_LIAISONSCAPE_URL`. The sender has a reviewed production fallback
to `/e2r-liaison-scape/` on the shared GitHub Pages origin, while the local
Edge acceptance used an explicit loopback environment value.

The LiaisonScape workflow checks out a pinned e2r-spec fixture revision for
its build context. That fixture checkout does not publish the e2r-spec
documentation record and is not a blocker for the current recipient runtime
bundle.

# Public URLs

The canonical URLs are established by repository README/configuration and
match the Vite base paths:

| Application | Public URL | Vite base |
| --- | --- | --- |
| NarrativeLine | `https://sukoyaka-dopeness.github.io/e2r-narrative-line/` | `/e2r-narrative-line/` |
| LiaisonScape | `https://sukoyaka-dopeness.github.io/e2r-liaison-scape/` | `/e2r-liaison-scape/` |
| Hub | `https://sukoyaka-dopeness.github.io/e2r-hub/` | `/e2r-hub/` |

The cross-app targeted transport uses a fragment after the trailing-slash
path, for example `https://host/path/#datasetUrl=...`. The Dataset URL is
encoded as a URL parameter and is decoded exactly once by the current source.

# Deployed revision verification

The public HTML has no visible commit marker or generated revision metadata.
The public asset filenames also do not equal Git commit hashes. Current local
builds produced these asset names:

| Application | Current local JavaScript asset | Public JavaScript asset |
| --- | --- | --- |
| NarrativeLine | `index-CyJFhT4m.js` | `index-DBpLMRQU.js` |
| LiaisonScape | `index-DDt781tq.js` | `index-BjLMqkve.js` |

The public NL JavaScript asset does not contain the current targeted terms
`targetObjectId`, `relation.inspect`, or `targetContractVersion`. The public
LS asset contains ordinary/detail-related strings but does not contain the
current targeted `targetObjectId` or `targetContractVersion` transport terms.
This is strong evidence that the required current bundles are not deployed,
but it does not map a public asset uniquely to a Git commit.

Therefore the formal boundary is:

`PUBLIC DEPLOYMENT REVISION NOT DIRECTLY VERIFIABLE`

# Public recipient probe

The public LS recipient probe is not accepted. The valid targeted URL used the
public lighthouse Dataset, the existing Relation ID
`clara-thomas-supervises`, `targetObjectType=Relation`,
`requiredCapability=relation.inspect`, `targetContractVersion=1`, and
`locale=en`.

| Check | Result |
| --- | --- |
| public page and Dataset acquisition | observed previously; current HTTP page is 200 |
| targeted fragment transport | URL was formed and loaded in the prior probe |
| Relation Detail landing | not established |
| failure message / resulting fragment state | not sufficient for acceptance |
| Dataset mutation | none observed |
| Delete confirmation | none observed |
| native dialog | explicitly closed/verified in the prior helper probe |

The absence of current targeted terms in the public LS bundle and the missing
Detail landing are consistent with an older public recipient revision. The
fresh CDP timeout prevents a stronger claim about the live browser state.

# Public sender probe

The public NL sender surface is not accepted as current. The deployed NL
bundle lacks the current sender's targeted transport terms, so it cannot be
used as evidence for the Handoff9 sender implementation. No public Dataset or
Relation was mutated while making this determination.

The current-source sender probe remains accepted separately: it exposed the
authorized Entity deletion-resolution Relation row, emitted the exact
`relation.inspect` fields and canonical Relation ID, and navigated through a
native same-tab anchor. Public sender parity must be rechecked after the NL
Pages deployment.

# Sender/recipient contract comparison

The current local source agrees on the flat fragment contract:

`datasetUrl`, `targetObjectId`, `targetObjectType`, `requiredCapability`,
`targetContractVersion`, and `locale`.

The current local sender and recipient agree on parameter casing, URL encoding,
HTTPS Dataset-source eligibility, `targetContractVersion=1`, and exact full
Relation IDs. The public bundles do not provide enough current targeted
behavior to compare the deployed sender and recipient. Public parity is
therefore unproven rather than accepted.

# Mixed-version matrix

| Sender | Recipient | Expected boundary | Status |
| --- | --- | --- | --- |
| old NL | old LS | ordinary Dataset Handoff v0 remains available; no targeted sender | safe baseline |
| current NL | old LS | Dataset acquisition may work, but old recipient may ignore or fail to land on targeted Detail | not accepted |
| old NL | current LS | ordinary Dataset Handoff v0 remains available; no targeted sender is emitted | safe staged intermediate |
| current NL | current LS | targeted inspect should land on exact Relation Detail | accepted locally; public pending |

The asymmetry makes recipient-first publication safer. An old sender does not
emit the new targeted fields, while a new recipient preserves the ordinary v0
path. A new sender paired with an old recipient is not accepted for targeted
landing.

# Cache/service-worker findings

No service-worker, Workbox, PWA registration, or `navigator.serviceWorker`
usage was found in the NL, LS, or Hub source trees. No service-worker cache
was therefore identified.

The public HTML responses returned `Cache-Control: max-age=600` for NL, LS,
and Hub. Public NL and LS assets likewise returned `max-age=600` in the
read-only checks. This is a possible short-lived stale-asset contributor, but
cache staleness was not independently confirmed and must not be used to
replace the revision/publication diagnosis. Fresh-profile and hard-reload
behavior should be part of post-deployment acceptance.

# Base-path/environment findings

The configured Vite bases and public URLs agree for NL, LS, and Hub. The
accepted fragment form places the transport after the trailing slash and uses
the URL hash, so the GitHub Pages sub-path does not consume the targeted
parameters as a pathname.

NarrativeLine reads `VITE_LIAISONSCAPE_URL` when supplied. If it is absent,
the current source resolves the recipient to
`new URL("/e2r-liaison-scape/", window.location.origin)`, which yields the
canonical public LS URL on the shared GitHub Pages origin. No production base
path or environment mismatch was found in the repository configuration audit.

# Root-cause classification

The evidence supports these classifications:

- **A — REQUIRED RUNTIME COMMITS NOT PUSHED: confirmed.** NL `158adec` and
  LS `95a8c56` are absent from their remote `main` branches.
- **C — DEPLOYED REVISION UNKNOWN: confirmed.** The Pages HTML and assets have
  no direct commit marker, and the asset contents do not uniquely identify a
  Git revision.
- **D — DEPLOYMENT CONFIG MISMATCH: not found.** Workflow triggers, output
  directories, Vite bases, and canonical URLs agree.
- **E — PUBLIC RUNTIME DEFECT REPRODUCED: not classified.** The public failure
  is explained by the missing current bundle evidence; no new runtime defect
  was isolated.
- **F — CACHE / ASSET STALENESS CONFIRMED: not confirmed.** A ten-minute cache
  header exists, but stale publication is already established independently.
- **G — NO PUBLIC PARITY BLOCKER: false.** Public parity remains blocked.

# Push/deployment readiness

**READY TO AUTHORIZE PUSH/DEPLOY, but not executed in this checkpoint.**

The readiness decision is based on current-source acceptance, exact runtime
revisions, known `main` branches, known Pages workflows, known public URLs,
green local gates, no configuration blocker, and safe recipient-first
mixed-version behavior. The decision is not an authorization to perform the
publication now. Public parity remains unaccepted until the post-deployment
matrix passes.

# Recommended deployment order

1. With explicit publication authorization, push and deploy LiaisonScape
   `95a8c56` from `main`.
2. Verify the public LS targeted recipient probe and ordinary v0 path.
3. Push and deploy NarrativeLine `158adec` from `main`.
4. Verify the public NL sender and same-tab NL-to-public-LS targeted landing.
5. Re-run the full post-deployment acceptance matrix below.

The e2r-spec documentation commit is a separate documentation publication
concern; it is not required in the runtime Pages artifact path.

# Post-deployment acceptance plan

| ID | Acceptance |
| --- | --- |
| D1 | public LS direct targeted URL lands on the exact Relation Detail |
| D2 | public ordinary Dataset Handoff v0 reaches the workspace |
| D3 | public NL exposes the authorized sender anchor |
| D4 | public NL to public LS navigation remains same-tab and preserves the exact fields |
| D5 | canonical full Relation ID resolves, including relevant hidden/self/parallel cases |
| D6 | no automatic Entity/Relation deletion or confirmation occurs |
| D7 | locale transport and visible locale behavior remain correct |
| D8 | modified Dataset keeps the explicit safe boundary and emits no targeted transfer |
| D9 | native browser dialogs are closed and verified before acceptance is reported |

Public asset identity, fresh-profile/cache state, and the deployed workflow
revision should be recorded with the D1-D9 evidence. Asset filenames alone
must not be presented as Git commit proof.

# Explicit exclusions

This checkpoint intentionally excludes the previously deferred presentation
issues (Relation endpoint-separator mojibake, blocker-card layout, and generic
dialog action spacing), runtime parser or URL fixes, generic capability
discovery, Hub targeted Handoff, modified-Dataset automatic transfer,
third-party interoperability, Dataset deletion, public storage mutation, and
any change to the pre-existing ai-knowledge playbook.

# Next bounded step

After explicit push/deploy authorization, publish the recipient first, verify
D1-D2 and the deployed revision boundary, then publish the sender and verify
D3-D9. Until that happens, the accepted state is current-source acceptance
only; public deployment parity is not accepted.
