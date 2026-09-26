# Application / Workstream Foldering Wave 2 Preparation 1

- Date: 2026-09-26
- Status: PREPARATION COMPLETE — NO PATH MIGRATION AUTHORIZED
- Scope: Re-audit of remaining `docs/` root application/workstream records for a
  possible second narrow-hybrid foldering wave.
- Authority: Accepted documentation IA decisions and the current
  `docs/documentation-plan.md`; this preparation is advisory and authorizes no
  moves.
- Related records: [Documentation Hub](README.md), [Documentation Plan](documentation-plan.md),
  [Wave 1 landing-zone preparation](documentation-ia-application-workstream-landing-zone-migration-preparation1.md),
  [Cross-App Handoff contract migration result](documentation-ia-cross-app-current-dataset-handoff-path-migration1-result.md).

## Decision-ready summary

The strongest next bounded path migration is a **13-document Capability / Dataset
Handoff evidence packet**, split by ownership into three approved destinations:

1. five shared Cross-App design/readiness/acceptance records to
   `docs/cross-app/`;
2. five NarrativeLine sender and Dataset Handoff records to
   `docs/narrativeline/`; and
3. three LiaisonScape receiver and Dataset Handoff records to
   `docs/liaisonscape/`.

These are distinct authority lanes, but their existing cross-links form one
coherent Handoff evidence graph. A single **Handoff Wave 2** can move the three
exact manifests together and repair their links as one bounded operation, while
preserving every document and status separately. The path change would not
reconcile their different states or authorize runtime work.

A separate **five-document Validator 0.4.0 package / consumer lifecycle** is a
credible next candidate for `docs/validator/`, but it has a separate release
history, different references, and public-publication evidence. Prefer a
separate migration checkpoint rather than combining it with the Handoff wave.
Combining both would be mechanically possible only after fresh path and link
validation, but offers no shared migration benefit.

No new Hub-owned cohort is supported by this audit: the remaining Hub-named
precomputation hypothesis is exploratory Research, not Hub application
documentation. It remains where it is. No files were moved or renamed, and no
Roadmap planning, status, or authority was changed.

## Basis and reference-risk method

The current e2r-spec HEAD at audit time was `7da036c6890484f6ba920f4986fc4de0afe0b646`.
The worktree had one pre-existing untracked `work/` directory; it was not read,
modified, or staged. The approved landing-zone policy and existing first-wave
migration results were checked before selecting candidates.

The inventory used current root document contents, status/scope declarations,
existing authority links, and exact-filename searches across e2r-spec Markdown
and the canonical NarrativeLine, LiaisonScape, and Validator workspaces. The
sibling searches were read-only. No candidate document basename was found in
the scanned sibling-repository Markdown/source/configuration files. This is a
workspace scan result, not a claim that external links or consumers do not
exist. The current NarrativeLine and LiaisonScape worktrees are dirty; they
must remain untouched, and any newly discovered direct sibling reference at
execution time is a stop-and-repair boundary rather than permission to edit
those repositories.

The e2r-spec scan found a dense, reciprocal reference network among the Handoff
records and links from Roadmap History, application-owned result/acceptance
records, the Hub Public Entry IA, the Dataset Handoff design, and session
records. This makes exact-manifest link repair important, but also makes the
13-document Handoff packet more coherent as one path-migration wave than as
several isolated moves. Exact inbound references must be rescanned immediately
before any actual migration; the locations below are a preparation baseline,
not a permanent reference inventory.

## Candidate Wave 2A — Capability / Dataset Handoff evidence packet

### Shared Cross-App authority and evidence — 5 documents

Destination: `docs/cross-app/`.

| Source path | Proposed destination | Responsibility / status to preserve |
| --- | --- | --- |
| `docs/cross-app-capability-handoff-discovery-audit.md` | `docs/cross-app/cross-app-capability-handoff-discovery-audit.md` | Audit complete; design direction recorded; implementation not authorized. |
| `docs/cross-app-capability-handoff-implementation-readiness.md` | `docs/cross-app/cross-app-capability-handoff-implementation-readiness.md` | Readiness audit complete; its recorded bounded NarrativeLine sender authorization is not general runtime authorization. |
| `docs/cross-app-capability-handoff-nl-ls-real-edge-acceptance.md` | `docs/cross-app/cross-app-capability-handoff-nl-ls-real-edge-acceptance.md` | Current-source real-edge acceptance is formally accepted; public deployment parity remains not yet accepted in this record. |
| `docs/cross-app-capability-handoff-public-deployment-parity-readiness.md` | `docs/cross-app/cross-app-capability-handoff-public-deployment-parity-readiness.md` | Diagnosis complete; push/deploy not performed by that checkpoint; public parity remains not yet accepted there. |
| `docs/cross-app-capability-handoff-public-nl-ls-acceptance.md` | `docs/cross-app/cross-app-capability-handoff-public-nl-ls-acceptance.md` | Public NarrativeLine sender and public NL-to-LS E2E acceptance as recorded by that document. |

**Boundary:** These are shared discovery, sequencing, and cross-application
acceptance/public-parity records. Their different checkpoint results must not
be collapsed into one status. Public deployment evidence does not authorize a
new push, deployment, publication, or rollout. Keep application implementation
records in their owning zones.

**Known reference surface:** Existing files under `docs/cross-app/` link to the
discovery and readiness audits and to the NL/LS records. NL/LS implementation
records and `docs/roadmap-history/release-and-cross-app-chronology.md` link to
shared audits and acceptance evidence. A session record points to the public
acceptance. The old relative links among this packet and to the application
lanes need a coordinated rewrite. Check Roadmap links and plain path mentions
again at execution time.

### NarrativeLine-owned lifecycle and sender evidence — 5 documents

Destination: `docs/narrativeline/`.

| Source path | Proposed destination | Responsibility / status to preserve |
| --- | --- | --- |
| `docs/narrativeline-dataset-handoff-nl-h1a-startup-acquisition-acceptance.md` | `docs/narrativeline/narrativeline-dataset-handoff-nl-h1a-startup-acquisition-acceptance.md` | NL-H1A startup acquisition acceptance; `ACCEPTED`. |
| `docs/narrativeline-dataset-handoff-nl-h1b-fragment-lifecycle-acceptance.md` | `docs/narrativeline/narrativeline-dataset-handoff-nl-h1b-fragment-lifecycle-acceptance.md` | NL-H1B fragment lifecycle acceptance; `ACCEPTED`. |
| `docs/narrativeline-dataset-handoff-v0-formal-completion-acceptance.md` | `docs/narrativeline/narrativeline-dataset-handoff-v0-formal-completion-acceptance.md` | Dataset Handoff v0 formal completion; `COMPLETE`, bounded to its recorded scope. |
| `docs/narrativeline-capability-handoff-sender-implementation.md` | `docs/narrativeline/narrativeline-capability-handoff-sender-implementation.md` | Earlier sender attempt: `BLOCKED / NO RUNTIME CHANGE`; retain as that checkpoint's evidence. |
| `docs/narrativeline-capability-handoff-sender-runtime-implementation.md` | `docs/narrativeline/narrativeline-capability-handoff-sender-runtime-implementation.md` | Later implementation: automated green, bounded cross-app smoke partial; do not generalize to full public acceptance. |

**Boundary:** The first three records document NarrativeLine's bounded
Dataset Handoff v0 lifecycle; the latter two document the separate Capability
Handoff sender attempt and later implementation. Keep all five distinct.
Moving the earlier blocked attempt beside the later implementation must not
rewrite or erase that progression.

**Known reference surface:** Cross-App discovery/target records, sender
authorization, real-edge acceptance, and public acceptance refer to one or
more of these records. The NL formal completion record links H1A/H1B and the
LiaisonScape v0 result. The Handoff design, Hub IA, sessions, and other local
result records include path mentions. Update only references made stale by
the approved manifest.

### LiaisonScape-owned receiver evidence — 3 documents

Destination: `docs/liaisonscape/`.

| Source path | Proposed destination | Responsibility / status to preserve |
| --- | --- | --- |
| `docs/dataset-handoff-v0-liaison-scape-implementation-result.md` | `docs/liaisonscape/dataset-handoff-v0-liaison-scape-implementation-result.md` | Dataset Handoff v0 implementation result; `COMPLETE / MANUALLY ACCEPTED`. |
| `docs/liaisonscape-capability-handoff-relation-inspect-implementation.md` | `docs/liaisonscape/liaisonscape-capability-handoff-relation-inspect-implementation.md` | Bounded Relation-inspect recipient implementation; automated green and bounded browser smoke pass. |
| `docs/liaisonscape-capability-handoff-relation-delete-intent-implementation.md` | `docs/liaisonscape/liaisonscape-capability-handoff-relation-delete-intent-implementation.md` | Bounded delete-intent recipient implementation; automated green and bounded browser smoke pass, not broad deletion acceptance. |

**Boundary:** Preserve ordinary Dataset Handoff v0, Relation inspect, and
Relation delete intent as distinct recipient capabilities and evidence. Do
not imply that delete intent is deletion execution or that these records
establish broader Cross-App acceptance.

**Known reference surface:** Cross-App discovery/target/readiness records,
NL formal completion, the Dataset Handoff design, Dataset Replacement Safety,
Hub IA, LiaisonScape relation-delete/inspect records, and Roadmap History link
to these paths. Some references are plain `docs/...` paths rather than
Markdown links. Rescan and repair both forms.

### Handoff packet exclusions

Do not include the following in Wave 2A without a separate Human decision:

- `docs/dataset-handoff-v0-design.md` — shared design/contract entry that
  remains a useful root-level cross-cutting authority and links to both app
  lanes.
- `docs/liaisonscape-capability-handoff-public-recipient-deployment.md` —
  LiaisonScape public-recipient deployment evidence that is adjacent to, but
  not identical with, the shared public NL-to-LS acceptance/parity records.
  Keep it at root pending a separately scoped application-vs-cross-app
  placement decision.
- `docs/narrativeline-relation-blocker-card-presentation-follow-up.md` —
  separate presentation follow-up; do not absorb it into Handoff acceptance.
- Cross-App Locale, Relation Deletion, public-release/provenance, and other
  mixed cross-cutting records — separate responsibilities, not a filename or
  adjacency extension of this cohort.
- All runtime/source/test files in sibling repositories.

## Candidate Wave 2B — Validator 0.4.0 package / consumer lifecycle

Destination: `docs/validator/`. This is a separate five-document cohort and
should be a separate actual migration checkpoint from Wave 2A.

| Source path | Proposed destination | Responsibility / status to preserve |
| --- | --- | --- |
| `docs/validator-package-consumer-integration-decision.md` | `docs/validator/validator-package-consumer-integration-decision.md` | `READY` decision record for 0.4.0 release / consumer-integration path. |
| `docs/validator-0.4.0-release-candidate-result.md` | `docs/validator/validator-0.4.0-release-candidate-result.md` | Release candidate ready; publication authorization was required at that checkpoint. |
| `docs/validator-0.4.0-publication-boundary-verification.md` | `docs/validator/validator-0.4.0-publication-boundary-verification.md` | Publication boundary verified before publication; retain its precise authorization scope. |
| `docs/validator-0.4.0-publication-result.md` | `docs/validator/validator-0.4.0-publication-result.md` | Accepted publication result for Validator 0.4.0; historical account of authorized public actions. |
| `docs/validator-0.4.0-consumer-integration-result.md` | `docs/validator/validator-0.4.0-consumer-integration-result.md` | Accepted bounded consumer dependency integration; does not authorize future consumer changes. |

**Boundary:** This is a package release and consumer-integration chronology,
not normative Extension/schema authority. Preserve the sequence of ready,
authorized publication, and accepted consumer integration exactly as each
record states it. A path move performs no release action and changes no
current package or consumer status.

**Reference/path risk:** The exact-basename Markdown scan found no inbound
links to these five files in the current e2r-spec Markdown corpus. This does
not prove absence of external links. A later move should add/update one
Documentation Hub pointer or equivalent navigation and perform a full
workspace scan for plain paths before staging. No candidate basename was found
in the scanned sibling repository documents/source/configuration. Validator's
current worktree was clean at audit time; NarrativeLine and LiaisonScape are
dirty and out of scope regardless.

### Validator exclusions / adjacent root responsibility

- `docs/production-validator-presentation-specification-support-fix-result.md`
  has a direct inbound reference from `docs/lighthouse-semantic-enrichment-decision.md`;
  that decision is cross-workstream. Do not move it in the five-file package
  cohort without separately scoping and repairing that reference.
- `docs/validator-presentation-documentation-parity-fix-result.md` is an
  adjacent Presentation documentation fix, not part of the 0.4.0 release
  sequence manifest above; retain it for a separate, exact reference audit.
- `docs/liaisonscape-validator-release-residual-audit.md` is cross-app
  release/residual triage and stays at root.
- Normative Extension, schema, Validator source, tests, package files, and
  release configuration do not move.

## Hub and remaining root documents

No additional Hub migration cohort is recommended. The remaining
`e2r-hub-initial-layout-precomputation-latency-hiding-hypothesis1.md` is
exploratory Research, not Hub-owned application evidence; do not move it into
`docs/hub/` based on its name. Leave its current path unchanged pending a
separate responsibility/placement review; do not create `docs/research/`.

Do not bulk-move the remaining LiaisonScape- or NarrativeLine-named root
documents. Their current/open/qualified layout, presentation, release, and
follow-up responsibilities are mixed; Wave 2A includes only the exact Handoff
manifest above. Root-level E2R-wide planning, IA, public release,
licensing/provenance, shared design, and mixed application/cross-app
authorities remain root unless a later evidence-backed bounded cohort is
approved.

## Wave packaging recommendation

**Recommended next actual migration:** approve or reject Wave 2A as one
Handoff path-migration wave comprising the exact 13 files above, partitioned
into five Cross-App, five NarrativeLine, and three LiaisonScape destinations.
The link graph is coupled, and moving the set together avoids intermediate
broken relative references. Keep the documents, authority lanes, and status
records separate. Re-run the exact source/destination and inbound-reference
manifest immediately before editing; if it differs materially, stop for
Human review.

**Next independent migration:** Wave 2B, the exact five-document Validator
0.4.0 lifecycle, in a separate checkpoint. The disconnected reference graph
and package-publication status make it safer to review and validate
independently. Human may choose to authorize both cohorts as two sequential
bounded migrations, but this preparation does not authorize either one.

## HOLD / no-move conditions

- Any newly discovered sibling-repository reference that would require
  editing a dirty sibling worktree; request a separately scoped repair rather
  than touching it.
- Any candidate whose current status, owner, or authority has changed since
  this audit or conflicts with its dedicated record.
- Any need to reconcile accepted/blocked/public-parity states, change the
  Roadmap, alter a document's status/meaning, create a redirect policy, or add
  another folder taxonomy.
- Any attempt to include the excluded root documents or runtime/source files
  merely to make a broader-looking cohort.

No path, content, authority, status, or Roadmap change is performed by this
preparation. The next actual migration requires Human selection of the exact
manifest.
