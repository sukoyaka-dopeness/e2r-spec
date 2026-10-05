# ParameterPlotter product-milestone decision preparation

Date: 2026-10-04
Status: **Candidate B first Product slice HUMAN-ACCEPTED / dedicated production source published / successor external-user capability and eventual deployment direction HUMAN-APPROVED / lifecycle and authoring policies HUMAN-DECIDED / bounded successor implementation IN PROGRESS LOCALLY (uncommitted, unpublished; no Human acceptance) / Dimension Assessment Extension Candidate 0.1.0 HUMAN-ADOPTED (not Stable)**

## Current evidence and readiness

Human has authorized the first bounded successor implementation. Current
source changes are local and uncommitted in the ParameterPlotter application
and production Validator repositories. The [implementation result](parameterplotter-successor-first-bounded-implementation-result-2026-10-05.md)
records the current scope and supporting checks. This is not successor Human
acceptance, Candidate Stable registration, release, or deployment.

The bounded application-local Prototype 2 is HUMAN-ACCEPTED / CLOSED. Its
canonical browser evaluation remains 19 Human PASS / 0 PENDING / B3 NOT RUN;
Human accepted the missing genuine Prototype 1 legacy-session fixture as an
evidence limitation. This packet does not reopen that closure.

Human approved one Product responsibility: a workspace for comparing selected
E2R Entities on explicitly defined Dimensions and inspecting the same
application-local temporary Entity–Dimension values through Profile, Radar,
Quadrant, and Matrix. Prototype 1 and 2 provide accepted evidence that this
comparison workspace and its shared local values/interactions work as a
bounded application experiment. They do not establish audience, usage
frequency, data-retention expectations, collaboration needs, production
readiness, or a portable data model.

**Readiness:** Human selected Candidate B and a dedicated application
repository. `sukoyaka-dopeness/e2r-parameter-plotter` is the canonical
application source boundary. The reviewed first slice has been pushed to its
Public `main`; remote `main` matches local HEAD
`e31c67af3f89a23f959d151091e8f144f413624d`, and GitHub Actions `Check` passed
for that revision. At the Candidate B/source-publication checkpoint, this did
not select a formal product name, release identity, deployment, or portable
data model. Human later approved eventual external deployment as part of the
successor capability direction below, but no target, deployment plan, or
deployment transaction has been selected or authorized.

Human has now accepted the bounded Candidate B first Product slice after real
Dataset browser review. Dataset read-only behavior, shared temporary values
across all four views, replacement warning and preservation via **Keep current
workspace**, session-loss disclosure, and ordinary/narrow presentation passed.
The detailed evidence is in the
[first-slice Human Acceptance record](https://github.com/sukoyaka-dopeness/e2r-parameter-plotter/blob/main/docs/first-slice-human-acceptance-2026-10-04.md).
This acceptance does not adopt release, deployment, formal product name, or
portable E2R semantics. Prototype 2 remains separately closed at 19 Human PASS
/ 0 PENDING / B3 NOT RUN.

## Human-approved successor capability direction — 2026-10-04

After the Candidate B acceptance, Human approved developing ParameterPlotter
toward a normally usable external-facing E2R application. The approved
capability direction includes production Validator integration, editing and
deleting Dataset Entities, promoting Temporary Entities into the Dataset,
Save/Export of Dataset changes, persistence and recovery/reuse of comparison
work beyond the browser session, visible handling of storage failures, a
public application shell, and eventual external deployment.

At the time this capability direction was approved, it did not itself approve
a portable Dimension/value/Observation model, persistence format, Entity
deletion/reference policy, Entity field allowlist, promotion identity
behavior, invalid/unsupported Dataset policy, exact shell, hosting provider,
public URL, formal product name, release identity, or deployment transaction.
Human subsequently decided the Dataset Entity deletion policy,
comparison-work persistence/recovery and workspace restore safety, Validator
open/authoring policy, and the Dataset Entity edit-field allowlist below.
Temporary Entity promotion identity/value continuity was decided below under
the then-current workflow premise; the later direct-creation decision
supersedes it as the normal new-Entity path. Candidate B remains the historically accepted first Product slice with
its original session-only boundary; this successor direction neither reopens
nor alters that acceptance. Prototype 2 remains closed at 19 Human PASS / 0
PENDING / B3 NOT RUN. The Validator open/authoring policy and Dataset Entity
edit-field allowlist are Human-decided. Direct Dataset Entity creation is
decided in the following Human decision section. The prior promotion decision
is historical; legacy Candidate B Temporary workspace handling is decided as
no migration or compatibility guarantee. See the
[readiness checkpoint](parameterplotter-public-product-readiness-checkpoint-2026-10-04.md).

Human separately decided the blank-value behavior for allowlisted optional
Entity text fields: blank or whitespace-only `name` / `description` input
removes that field; omission of an unchanged field preserves its prior value.
This does not choose whether `name` / `description` are the complete allowlist,
add Extension fields, or define normalization of nonblank input. See the
[readiness decision record](parameterplotter-public-product-readiness-checkpoint-2026-10-04.md#human-decision-blank-values-for-allowlisted-entity-text-fields).
Human subsequently selected Candidate A as the complete initial allowlist in
the following decision.

## Human decision: Dataset Entity edit-field allowlist — 2026-10-05

Human selected **Candidate A — Core labels only**. Ordinary Dataset Entity
editing may change `name` and `description`; `id` is immutable. Other known or
unknown Core fields, Extensions, and unrelated Dataset content must be
preserved without editing. Blank or whitespace-only input for an allowlisted
`name` / `description` removes that optional field. Omitting an unchanged
field from an update payload preserves its current value. Nonblank text trim
or normalization is not decided.

Extension-field authoring is outside the initial allowlist. Any future
addition requires a separate Human decision naming the Extension, version,
field, and need. Arbitrary Entity JSON editing is not adopted. When
implementation is authorized, each edit operation must demonstrate
preservation of allowlist-external unknown/opaque sibling data under the
Human-decided Validator policy. This implementation check does not block this
Product decision. Direct Dataset Entity creation is decided below; the earlier
promotion policy is historical under the current workflow decision.

## Historical Human decision: Temporary Entity promotion identity and value continuity — 2026-10-05

This decision was valid under the then-current premise that new comparison
Entities began as Temporary and were later promoted. Human subsequently
decided that ordinary new Entities are created directly in the Dataset and
that Temporary creation/promotion is outside the normal successor workflow.
The identity, field-copy, and all-or-nothing rules below remain historical
evidence; they are not a current requirement and do not settle legacy
Temporary workspace handling.

Human selected **Candidate C — conditional continuity with safe fallback**.
Promotion retains the Temporary Entity's existing ID when it is valid and
unique across every Core Object in the active Dataset. If it cannot safely be
reused, promotion assigns a new unique Dataset Entity ID. When the ID changes,
application-local comparison values and identity-based references continue
to follow the same logical subject. This does not define an E2R-wide ID format
or Temporary ID semantics.

Promotion creates a Dataset Entity from `name` and, when present,
`description` only. It omits the application-only Temporary marker and does
not move Dimensions, comparison values, selection, placement, view state, or
other ParameterPlotter data into the Dataset. Those remain application-local;
portable Dimension/value/Observation semantics, Extension fields, arbitrary
JSON authoring, and nonblank text normalization are not adopted by this
decision.

The user-visible transition is all-or-nothing across Dataset Entity addition,
ending Temporary status, comparison-value association, and required reference
updates. A failure before preparation/activation completes leaves Dataset,
Temporary Entity, values, and references as they were; no partial promotion
or duplicate subject is exposed. If the in-memory promotion succeeds but its
browser-local persistence write fails, the existing degraded/unsaved policy
applies. Dataset Export and workspace backup retain their distinct existing
responsibilities. Runtime implementation remains unauthorized.

## Human decision: direct Dataset Entity creation lifecycle — 2026-10-05

Human decided that ordinary new Entities are created directly as Dataset
Entities; the user does not first create a Temporary Entity. Temporary Entity
creation and promotion are not part of the normal successor Product workflow.
Dimensions, comparison values, selection, placement, view state, and other
ParameterPlotter workspace data are not copied into the Dataset by this
creation decision. The later Dimension Assessment Candidate separately
defines portable Dataset Dimensions and explicit Assessments; it does not
automatically convert existing workspace data. A future requirement for a Dataset-independent
comparison subject or “what-if” Entity needs a separate capability proposal
and Human decision; none is adopted now.

This decision does not specify a creation form, Dataset Entity ID generation
method/format, nonblank text normalization, or runtime implementation. It also
does not transfer the historical promotion field-copy rule to direct creation
as an additional creation allowlist.

The accepted Candidate B source at
`sukoyaka-dopeness/e2r-parameter-plotter` HEAD
`785e70177975d682ce0e97bb97636f978d6362f2` creates `temp:` IDs, stores
`tempEntities` in `sessionStorage`, and restores that state in `model.js`.
Existing session/workspace data can therefore contain Temporary Entities.
This is evidence about the historical Candidate B runtime, not a successor
compatibility requirement. Human later decided that the successor provides no
compatibility guarantee for Candidate B session-only workspaces and does not
migrate, auto-promote, convert, or restore legacy `tempEntities`. The successor
may start new workspace state. No migration UI, rescue guarantee, or particular
fresh-start implementation is selected. See the [legacy-workspace decision](parameterplotter-public-product-readiness-checkpoint-2026-10-04.md#human-decision-legacy-candidate-b-temporary-workspace-compatibility--2026-10-05).

## Human decision: Dataset Entity deletion policy — 2026-10-05

ParameterPlotter is an Entity-comparison application, not a Relation editor.
It must refuse to delete a Dataset Entity while any incident Relation remains,
must not cascade-delete Relations, and must not permit a dangling Relation.
When deletion is attempted, it must show the blocking Relations with enough
identity information to distinguish the targets. A targeted inspect handoff to
LiaisonScape may be offered only when it can reliably open the intended
Relation against the same current Dataset state. If source URL/current Dataset
alignment or target identity cannot be established, omit the handoff, explain
that the Relation must be resolved first, and keep deletion unavailable.
ParameterPlotter does not gain general Relation editing or deletion.

This is an application-level Product decision, not an E2R-wide normative rule.
The rationale is responsibility-specific: LiaisonScape is Relation-first and
resolves blockers in its Relation workflow; NarrativeLine supports individual
resolution from its Entity deletion surface because Relations are not its
primary editing surface; ParameterPlotter owns neither Relation lifecycle nor
Relation editing, so its responsibility ends at blocker visibility and safe
handoff. All three avoid deleting an Entity while leaving a dangling known
Relation and avoid silently deleting Relations as a side effect.

The accepted Cross-App Handoff boundary supplies the safety conditions, not a
new ParameterPlotter protocol: use an exact Relation identity and a retrievable
Dataset snapshot that matches the current source. Do not hand off modified or
pending local state as though the recipient would see it, infer a target from
display text, or trigger mutation/confirmation in the recipient. Exact URL
shape and implementation structure remain open engineering choices.

This decision resolves only the Entity deletion/reference policy. The Entity
field allowlist and direct Dataset Entity creation lifecycle are decided in
separate sections of this packet. The older promotion policy is historical
under the current direct-creation decision. Validator open/authoring policy is
decided in the linked readiness checkpoint, and comparison-work persistence is
decided separately below. No implementation is authorized by this update.

The current decision-preparation and cross-application audit is recorded in
the [external Product and deployment readiness checkpoint](parameterplotter-public-product-readiness-checkpoint-2026-10-04.md).
The previous A/B/C and Candidate B source-selection sections below are
historical records of decisions already completed.

## Human decision: comparison-work persistence and recovery — 2026-10-05

Human selected C: browser-local persistence plus user-managed
ParameterPlotter workspace backup/import. The workspace backup is
self-contained for comparison-work restoration and includes the E2R Dataset
snapshot needed as its dependency. That snapshot does not make application-
local comparison data portable E2R facts and does not replace the separate
`Export E2R JSON` Dataset operation.

If browser-local persistence fails, the user may continue editing in the
current session only in a clearly visible degraded/unsaved state. The UI must
distinguish retained work from memory-only work, disclose possible loss, and
offer the workspace-backup recovery route when it can be created. A failed
storage write must not appear successful, and failure alone must not disable
editing. At this persistence decision, portable Dimension/value/Observation
semantics had not been selected. Human later adopted the bounded Dimension
Assessment Extension Candidate 0.1.0, without changing the persistence promise.
The [readiness decision record](parameterplotter-public-product-readiness-checkpoint-2026-10-04.md#human-decision-persistence-and-recovery-promise--2026-10-05) carries the detailed guarantee and limits.

This decision leaves the exact storage technology, persistence cadence,
artifact format/versioning, included presentation state, backup-freshness
display, warning UI/retry timing, and Dataset Save/Export/exit contracts open.
Human has decided Workspace Import/Restore is whole-workspace replacement,
not merge, and that pre-activation read, parse, eligibility, or activation-
preparation failure retains both the active workspace and its prior
browser-local persisted copy without partial restore. If current work may be
lost, restore requires explicit loss confirmation with Cancel or explicit
Discard and Restore; a successful separate backup is optional, not a
prerequisite. If a valid restore is activation-ready but its browser-local
write fails, apply it in memory as degraded/unsaved, disclose possible loss on
reload/closure, and preserve the previous persisted copy until the restored
workspace is successfully written. Merge remains outside initial scope. See
the [restore-safety decision record](parameterplotter-public-product-readiness-checkpoint-2026-10-04.md#human-decision-workspace-import--restore-replacement-safety--2026-10-05).
Public shell, hosting, product name, release identity, deployment, and Hub
listing remain undecided. The Entity field allowlist, promotion policy, and
Validator open/authoring policy are Human-decided in this packet and the
readiness checkpoint. No ordering among the remaining gates is selected here.

## Human decision: Dimension Assessment Extension Candidate 0.1.0 - 2026-10-05

Human adopted a portable Candidate contract named **Dimension Assessment
Extension**, identifier
`draft.github.sukoyaka-dopeness.dimension-assessment`, version `0.1.0`.
Its Candidate authority is in
[extensions/dimension-assessment-extension-candidate.md](../../extensions/dimension-assessment-extension-candidate.md).
The Dataset-level payload contains stable Extension-local Dimension
identities and explicitly authored Entity Assessments, at most one per
Entity-by-Dimension pair. Bounds are finite, inclusive, and hard; an
integer-only Dimension requires a valid integer candidate in range. No
Assessment record means unassessed; zero is an ordinary value.

This decision selects no general Observation/measurement model, assessor,
time, provenance, multiple-observation behavior, arbitrary numeric Entity
properties, or display/normalization semantics. Unit remains free text. Radar,
Quadrant, and other derived presentation values are not portable Recorded
data. ParameterPlotter's explicit Rescale option is an application
operation, not an Extension mutation algorithm.

The Candidate is Human-adopted, not Stable. Repository-side schema and
semantic checks do not establish production Validator integration or runtime
support. Prototype 2 remains closed and Candidate B remains accepted under
its historical session-only boundary. Dataset authoring/export integration,
independent consumer interoperability evidence, and Stable promotion remain
separate work.

## First-slice workspace lifetime candidates prepared 2026-10-04

This table preserves the choices as presented before Human selection. The
resolution immediately below is the current Product authority.

| Candidate | What Human would authorize | Evidence, benefits, trade-offs, and dependencies |
|---|---|---|
| **A. Hold production; gather product-use evidence** | Keep P2 closed and do not start a production slice yet. | Preserves all current non-decisions while gathering evidence about audience and recurring tasks. No repository, framework, or persistence decision is needed. Delays learning from a production-shaped application. |
| **B. Bounded app-local first slice** | Authorize a single-user comparison workspace whose temporary values remain application-local and whose Dataset stays read-only; explicitly accept the first slice's stated session/loss/recovery limits. | Closest to accepted P1/P2 boundaries and does not require a portable Observation model or Dataset write-back. Before implementation, Human must confirm the exact lifetime/recovery expectation; P2's tab-session storage is evidence, not an approved production retention promise. Sharing and durable recovery remain out of scope unless separately selected. |
| **C. Durable app-owned workspace first slice** | Require temporary work to survive beyond the current browser session, while leaving Dataset write-back undecided. | May better support recurring work, but requires a product-level retention, recovery, and ownership promise before technical choices. App-owned persistence can remain distinct from portable E2R semantics. Whether this is local or hosted, and whether users share work, are subsequent decisions rather than assumptions in this option. |

The preceding trade-off text records the pre-decision state and is superseded
by the Human resolution below.

## Human decision: Candidate B — bounded app-local first slice — 2026-10-04

Human selected Candidate B with these first-slice boundaries:

- single-user comparison workspace;
- imported E2R Dataset is read-only;
- Dimensions, temporary Entities, and Entity–Dimension comparison values
  remain application-local;
- no guarantee of durability or recovery beyond the browser session;
- loss of temporary work when the session ends is accepted and must be made
  explicit to the user; and
- portable Observation or Dimension/value contract, Dataset write-back or
  export, shared workspace, account, authentication, and cloud persistence are
  not first-slice requirements.

ParameterPlotter remains a working name. This selection does not reopen the
Prototype 2 closure, which remains HUMAN-ACCEPTED / CLOSED at 19 Human PASS / 0
PENDING / B3 NOT RUN. The accepted B3 evidence limitation remains accepted.

## Production source boundary and implementation preparation

### Evidence and current responsibility boundaries

- `e2r-spec` owns the Core/Extension specification, canonical Roadmap, and
  Research evidence. The accepted Prototype source is under
  `research/prototypes/parameterplotter-1/`; that research location does not
  establish it as a production application source of truth.
- NarrativeLine, LiaisonScape, and Hub have separate application repositories.
  Existing E2R application practice therefore supports an application-owned
  runtime source with its own tests and release boundary. This is evidence,
  not an adopted repository choice for ParameterPlotter.
- Hub's current authority is the ecosystem entry, explanation, catalog, and
  publication surface. It is optional; current cross-app evidence says Hub is
  not a runtime authority or required startup service. Housing the comparison
  workspace in Hub would couple product runtime to a separate portal role and
  needs a specific rationale.
- The workspace-wide accepted modularization decision in the central
  `ai-knowledge/decisions/application-modularization-and-incremental-extraction.md`
  requires moderate, responsibility-based boundaries and incremental
  extraction. It selects no framework, layout, or file count.
- The current software licensing direction is MIT for E2R software
  repositories, with each repository receiving its own `LICENSE` and package
  metadata in a separate bounded step. `e2r-spec` has a distinct standards and
  documentation license policy.

### Source-boundary candidates

| Source option | Boundary | Main benefit | Main cost or risk |
|---|---|---|---|
| **1. Dedicated application repository** | A new application-owned repository is canonical for production runtime, tests, and release; `e2r-spec` remains specification/Roadmap/Research authority; Hub may later link or publish an entry. | Clear ownership and release boundary; matches existing separate application repositories; avoids putting production runtime under the specification repository. | Requires Human to authorize and name/own a repository, then apply repository-specific license, CI, and release conventions. |
| **2. Existing application repository** | Human names an existing repository and explicitly assigns it product ownership. | Avoids establishing another repository and may reuse its delivery infrastructure. | No existing repository is currently evidenced as the owner of this distinct comparison workspace; Hub is a portal, while NarrativeLine and LiaisonScape have separate product responsibilities. Adds coupling and ownership ambiguity unless justified. |
| **3. Defer production source creation** | Keep P2 as accepted evidence and retain the implementation at research-prototype status until a source owner/repository is selected. | Requires no new ownership or repository decision and keeps production claims out of scope. | Delays implementation of the selected first-slice Product direction. |

## Human decision: dedicated production source repository — 2026-10-04

Human selected a dedicated application repository and confirmed the canonical
repository identity `e2r-parameter-plotter`. The signed-in GitHub owner was
`sukoyaka-dopeness`; the existing E2R application repositories under that
owner were Public, so the repository was created as Public at
https://github.com/sukoyaka-dopeness/e2r-parameter-plotter. The specification
and research authority remains `e2r-spec`; the new repository owns the
application runtime and its application-level tests. Hub remains optional and
is not a runtime or source owner.

The new repository was cloned to `C:\Users\extra\E2R\e2r-parameter-plotter`.
Its bounded first-slice source is in commit `e77c610`
(`feat: add ParameterPlotter first app slice`). A documentation-only boundary
status sync is in `e31c67a` (`docs: sync first-slice commit status`), now the
published `main` HEAD. Remote `main` matches that revision. Automated checks,
a browser smoke with a genuine E2R sample, and the GitHub Actions `Check`
workflow passed. The approved ten ParameterPlotter repository topics are
visible on GitHub. The source is published; release and deployment remain
separate, unauthorized steps.

### Prototype 2 source disposition

The accepted Prototype 2 source remains the behavioral reference and evidence
baseline. Production source selectively carries forward runtime modules and
focused tests for the accepted four-view comparison behavior. It has its own
application storage key, visible session-loss notice, repository metadata,
local server entry, and verification commands. The application uses browser-
native ES modules without a third-party runtime dependency; this implementation
choice does not adopt a framework, portable contract, or durable storage. The
Prototype research path is not the production source of truth.

### Lifecycle contract already selected and implementation checks

The Product boundary rules out server persistence, accounts, cross-user sharing,
and a recovery promise. The local implementation makes the selected lifecycle
facts explicit and testable:

- the comparison work is temporary, single-user, and application-local;
- the user is told before relying on the work that ending the browser session
  may lose it and that cross-session recovery is not guaranteed;
- replacing the read-only imported Dataset warns that application-local work
  will be lost, and offers a safe way to cancel; and
- Dataset content is never written back or exported by this first slice.

The application shell now displays the session-lifetime limitation, and the
Dataset replacement warning explains that temporary work cannot be exported
or recovered after the browser session ends. An isolated local browser smoke
check confirmed that the same tab retained its temporary Entity, Dimension,
and value after reload, while a newly opened tab started with an empty
workspace. This is machine supporting evidence for current-session scope, not
Human acceptance or durable recovery. If a desired behavior needs
cross-session recovery, sync, accounts, or cloud storage, return to Human
because it exceeds Candidate B.

### Decisions deferred for the accepted Candidate B first slice

The deferrals below describe what Candidate B did not require. They do not
constrain the subsequently approved external-user capability direction above.

- **Framework and visualization library:** no current E2R-wide authority
  prescribes one. The accepted modularization policy leaves these to the
  implementation team after source ownership is set, provided the chosen
  tools support the bounded behavior and verification needs.
- **Formal product name and release identity:** ParameterPlotter remains a
  working name. Neither is needed for internal source ownership or a first
  implementation checkpoint.
- **Portable semantics and Dataset mutation:** no first-slice requirement
  calls for an Observation model, portable Dimension/value contract, Dataset
  write-back/export, Extension, schema, or Validator changes.
- **Accounts, authentication, shared workspace, hosted persistence, and
  multi-user conflict handling:** excluded by the selected single-user,
  non-durable boundary.
- **Release, deployment, and Hub directory entry:** remain separate gates.
  The first source push is complete. Release and deployment need their own
  readiness and authorization. Hub is not a prerequisite runtime dependency.
- **Known Prototype follow-ups:** the Quadrant resize-then-scroll connector
  defect and waiting-Entity plot-click discoverability remain separate,
  non-blocking follow-ups unless the production slice is shown to depend on
  them.

## Historical conditional implementation gates (pre-Candidate B and source selection)

Human later selected the first-slice outcome, its single-user,
application-local, non-durable boundary, and the dedicated source repository
recorded above. Durable or shared work, cross-application exchange, and
Dataset persistence would require new Human decisions and are not part of
Candidate B.

## Separate follow-ups

The Quadrant resize-then-scroll connector defect and waiting-Entity
plot-click discoverability remain separate Prototype follow-ups. P2 closure
records them as non-blockers. This packet does not fix them or promote them to
Product blockers. If a selected first slice depends on either interaction,
Human may scope a focused follow-up before that slice; otherwise they remain
separate.

## Historical suggested next Human decision (superseded)

The earlier recommendation was to choose A, B, or C and, for B, specify the
session/loss boundary. Human selected B and its boundary on 2026-10-04. The
dedicated source repository was selected and created on 2026-10-04. The next
external gate was Human review and approval before pushing the first-slice
source; it completed on 2026-10-04 when the approved HEAD was pushed and its
GitHub Actions check passed. The subsequent Human-approved capability direction
and its still-open Product decisions are recorded above and in the linked
readiness checkpoint.

## Evidence pointers

- [Current Roadmap](../../docs/roadmap.md)
- [ParameterPlotter Research overview](multi-visualization-application-pre-implementation-research.md)
- [Dimension/value semantics Research checkpoint](parameterplotter-dimension-value-semantics-research-checkpoint-2026-10-02.md)
- [Prototype 2 implementation and closure result](../prototypes/parameterplotter-1/prototype-2-bounded-implementation-result-2026-10-02.md)
- [Prototype 2 Human Browser Evaluation](../prototypes/parameterplotter-1/prototype-2-human-browser-evaluation-2026-10-02.md)
- [Prototype README and current runtime boundary](../prototypes/parameterplotter-1/README.md)
- [Application design principles](../../docs/application-design-principles.md)
- [Cross-App capability architecture and Hub boundary](../../docs/cross-app/cross-app-capability-handoff-implementation-readiness.md)
- [Cross-repository software licensing direction](../../docs/roadmap.md#cross-repository-software-licensing-direction)
