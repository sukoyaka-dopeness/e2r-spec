# E2R Session 0094 - Cross-App UI Follow-ups, Guide Coverage, and Header Diagnosis

Date: 2026-09-23
Repositories: `e2r-spec`, `e2r-narrative-line`, and `e2r-liaison-scape`

## Session identity

Objective: Consolidate the small cross-application UI and documentation tasks
raised during the session, record their evidence and completion boundaries,
and diagnose the NarrativeLine narrow Header wrapping observed on the current
Public site.

Status: `GUIDE COVERAGE UPDATED / BOUNDED UI ACCEPTANCE CLOSED / RELATIVE TIME AND HISTORY 2 RESEARCH RESULTS PREPARED / TEMPORAL HUMAN DECISION PREPARATION COMPLETE / NO DECISIONS ADOPTED`

The Status above records the session's original capture and is retained as a
historical snapshot. Subsequent Relative Time decisions and current handoff
state are recorded in the dated checkpoint syncs below.

The bounded UI checkpoints recorded below are closed where their linked
acceptance results say so. The original device-specific Header observation,
physical-device coverage, and exact Public artifact revision remain
unverified; these limitations do not leave the bounded local acceptance open.
The Relative Time minimum temporal-precedence Research result has since been
prepared and committed for Human review; it remains exploratory and
non-normative. The History 2 deferred-shapes authoring-scope Research result
has also been completed and committed for Human review; it is exploratory and
non-normative and does not adopt a deferred shape or implementation scope.
The cross-workstream Temporal Research Human Decision Preparation is also
committed. It organizes options and dependencies for Human review; no
substantive option, priority, sequence, or implementation scope has been
selected.

## Work completed and accepted

### LiaisonScape UI and Handoff

- The local narrow browser matrix for Entity Detail and Relation Detail was
  accepted with no overflow defect: at 390px portrait both dialogs measured
  `x=8, width=374, right=382`; at 844x390 landscape both remained within the
  viewport and longer content used internal scrolling. Physical-device
  safe-area and OS-keyboard behavior was not tested.
- The zero-Node Add Relation entry defect was bounded to the app entry point.
  The guard is implemented for `graph.nodes.length === 0`; Node 1 self-Relation
  and multi-Node flows remain supported. The implementation report recorded
  focused tests, lint, and build as passing. Later full-suite evidence in this
  session reported 640/640 passing; the earlier zero-Node checkpoint itself
  had also recorded a Vite/jsdom lifecycle hang before its final summary.
- Selected Relation status was aligned with the existing three-field display
  (`Relation name`, `Source`, `Target`), with localized labels, unnamed
  fallbacks, and collision-safe endpoint identifiers. The obsolete curve-drag
  helper message was removed; editing, curve adjustment, and the technical
  full Relation ID were preserved. Human browser review accepted the displayed
  fields and narrow wrapping.
- The selected graph Entity status belongs to LiaisonScape, not NarrativeLine:
  the earlier handoff and Session wording used the wrong repository name.
  LiaisonScape's existing display prefers a non-empty Entity Name and falls
  back to its ID. EN/JA desktop checks passed, and direct 390px acceptance is
  **ACCEPTED / CLOSED** in [the narrow acceptance result](../docs/narrativeline/narrativeline-entity-selection-status-narrow-acceptance1-result.md).
  NarrativeLine's Event-to-Entity Detail navigation is a separate flow; no
  application source change was needed for this acceptance.
- Handoff was accepted for the existing Entity Detail deletion-blocker route
  to LiaisonScape Relation Detail. Hub was confirmed to use an application and
  sample link registry, not a machine-readable capability registry. These
  accepted boundaries were not reopened.

### LiaisonScape User Guide coverage

The EN/JA User Guides were reconciled with current accepted behavior. The
reported omissions included:

- Pin / Unpin entry points and the Pin constraint during Explicit Auto Layout;
- the working-state and `Save node coordinates` persistence boundary;
- Explicit Auto Layout Preview, adoption, rejection, and save steps; and
- the disabled Add Relation condition when there are no Entities.

The User Guides and E2R-SPEC roadmap were updated. Validation reported
required-copy and EN/JA parity checks plus `git diff --check` passing. No
runtime or tests were changed for this documentation checkpoint.

### NarrativeLine UI

The cross-app Header shell-action hover/focus audit found the LiaisonScape
workspace Home link lacked hover feedback despite its button-like border;
focus-visible was already clear in both apps. A one-rule LiaisonScape CSS
correction now matches the existing locale/button hover colors. EN/JA, wide,
and 390px browser checks and the 641-test suite, lint, and build passed. See
the [audit result](../docs/cross-app/cross-app-shell-action-hover-focus-parity-audit1-result.md).

The later `E2R-NARRATIVELINE-VITE-24678-WARNING-DIAGNOSTIC1` checkpoint
reproduced the middleware test-server `24678` warning 89 times during a natural
259/259 test pass, confirmed transient Node test-worker listener ownership and
no post-exit listener/process, and closed it as an accepted non-blocking
test-tooling warning. See the [diagnostic result](../docs/narrativeline/narrativeline-vite-24678-warning-diagnostic1-result.md).
The bounded follow-up identified the exact Vite 8.1.5 trigger as parallel
middleware-mode test servers racing for the default WS port 24678; `hmr:false`
does not disable that WS listener. The 8-server reproduction yielded 7 benign
`EADDRINUSE` warnings and clean shutdown. No NarrativeLine test change was
needed. See the [trigger audit](../docs/narrativeline/narrativeline-vite-24678-warning-trigger-audit1-result.md).
The subsequent NarrativeLine-local cleanup set `server.ws:false` in all 18
SSR-only middleware test server setups. Full validation passed 259/259 with
zero 24678 warnings/listener samples and no post-run listener or worker.
Details: [test WS cleanup result](../docs/narrativeline/narrativeline-vite-test-ws-cleanup1-result.md).

- The Entity Create Name and Description fields were aligned with the existing
  full-width Entity Detail controls. EN/JA, desktop/narrow, keyboard, and
  workflow checks were reported as passing; 259/259 tests, lint, build, and
  `git diff --check` passed. Human review accepted the result.
- The no-date Event notice was traced in the current source/roadmap to the
  Candidate, unknown, unsupported, or mixed History capability paths; absent
  History on a new Event remains editable. The public artifact's exact revision
  could not be identified, so an observed public notice still requires its
  payload/state and served revision to be captured before changing this
  boundary.

## Current Public Header wrapping investigation

The user confirmed that the attached wrapping screenshot came from the current
Public NarrativeLine site. Public JavaScript and CSS assets were fetched
read-only after the sandbox blocked the initial network request and an
escalation was approved.

Evidence:

- The Public JavaScript Header contains the direct children in the expected
  order: brand anchor, optional navigation button, and language button.
- The Public CSS uses a two-column base grid and enables three columns only
  through `.app-header:has(> .app-brand + button + button)`.
- The screenshot's full-width second-row language button matches the two-column
  fallback when that selector does not apply. This is not explained by the
  English label's text width. Unsupported `:has()` in the target browser is a
  plausible cause, but the target browser engine and initial computed styles
  could not be captured, so that device-level cause is not proven.
- The Public bundle exposed no commit SHA or deployment metadata. Its exact
  source revision remains unverifiable.

A local Header-only robustness correction was made: `AppFrame` now adds an
explicit modifier class when `headerNavigationAction` exists, and CSS applies
the three-column grid through that class rather than relying on `:has()`.
This protects the layout when the DOM condition selector is unavailable. The
live Public site was not changed.

At the time of Session 0094, no narrow cold-load DOM/computed-style capture or
target-device reproduction was possible, and tests had not been run. The
follow-up acceptance on 2026-09-23 supersedes that pending status for local and
browser-observable scope: local/Public 390px flows, EN/JA, SPA navigation,
reload, focus-visible, and overflow were checked; tests, lint, and build passed.
The Public artifact still uses the old `:has()` CSS and exposes no source SHA,
so its deployed source cannot be tied to the local modifier correction, and the
reported physical-device condition remains unverified. See [narrow Header
acceptance result](../docs/narrativeline/narrativeline-narrow-header-robustness-acceptance1-result.md).

## Roadmap and Research disposition

The E2R-SPEC roadmap was updated during the session to consolidate the small
open observations without duplicating existing records. Current follow-ups
include:

- NarrativeLine narrow Header robustness: local/browser acceptance closed;
  exact Public source revision and target-device reproduction remain
  unverified. See the acceptance result linked above.
- LiaisonScape Entity Name selection status: accepted/closed after direct
  390px browser verification. See
  [the narrow acceptance result](../docs/narrativeline/narrativeline-entity-selection-status-narrow-acceptance1-result.md).
- LiaisonScape Detail dialogs: local matrix accepted; physical safe-area and
  OS-keyboard evidence remains environment-specific.
- LiaisonScape phone-landscape graph-canvas expansion: exploratory; Human scope
  decision pending.
- Pin / Unpin User Guide coverage: implemented and synchronized in EN/JA.

The zero-Node Add Relation correction, Relation status presentation, Entity
Create width correction, Handoff acceptance, Hub link-registry confirmation,
and History 2 `position + circa` boundaries were recorded as complete and were
not reopened.

The Research inventory identified two bounded next research candidates:
minimum Relative Time temporal-precedence contract research and a separate
History 2 deferred-shapes authoring-scope comparison. Temporal Perspectives
remains a later stage; no schema, Validator, solver, authoring, or Stable
promotion was started in this session.

### Prioritized next-work Research handoff — original session-start snapshot

The user supplied a more detailed priority order for the next research phase.
At the time this handoff was recorded, it had **not** yet been executed,
adopted as specification, or implemented. The original plan and sequence are
retained as a historical snapshot; the current checkpoint status is recorded
below.

Reconciliation status at handoff capture: **NOT STARTED**. At that point, the
evidence inventory, Relative Time contract comparison, and History 2 deferred-
shapes authoring-scope comparison remained future Research tasks; no
conclusions or design decisions were implied by the completed UI/roadmap
checkpoints recorded elsewhere in this session.

1. **Lightweight evidence preparation:** assemble a Relative Time authority
   matrix; a `before` / `after` / `same-instant` source-target direction table;
   a comparison with H1 `temporalOrder`; a History-shape × Relative-Time
   compatibility inventory; candidate fixtures for contradiction, cycles, and
   incomparability; an inventory of schema/test/UI support for bounded-point,
   temporal-extent, and multiple assertions; and a classification of older
   Research documents against current authority.
2. **Highest-priority research:** define and compare candidate semantics for a
   minimum Relative Time temporal-precedence contract. Scope includes direct
   assertions versus derived evidence, partial order and incomparability,
   contradiction/cycle/duplicate boundaries, distinction from H1
   `temporalOrder`, compatibility with H2 `position` and deferred History
   shapes, and whether Undated Events could be shown read-only from such
   evidence. Do not fabricate dates or write derived placement back to the
   Dataset. This is Research only: no schema, Validator, UI, solver, or Timeline
   adoption.
3. **Parallel bounded Research:** compare the History 2 authoring scope for
   one bounded-point, one temporal-extent, and multiple assertions, keeping the
   candidates distinct. Compare UI controls, draft state, validation,
   preservation/atomicity, Timeline projection, Entity/Event/Relation
   applicability, cancel/unsafe-refusal behavior, and interaction with
   Relative Time. Bounded-point is only a candidate, not a decision. Start with
   the ordinary model; move to a heavier model if the work reaches semantic
   alternatives, migration, or multiple-assertion identity/provenance.
4. **Later/deferred:** treat Undated Event placement only as a read-only
   concept example subordinate to Relative Time Research; no inferred-date
   persistence, History writeback, or treating derived placement as Recorded
   fact. Keep Causal order separate and deferred until Relative Time results
   exist. Multidimensional History / Temporal Perspectives is a later phase;
   initially research only perspective identity, scope (object-local,
   Dataset-wide, analysis-local), and separation of normative semantics from
   view projection.

Recommended sequence: evidence inventories → Relative Time minimum-contract
Research → History 2 deferred-shapes authoring-scope comparison → queue and
process any Human decisions in priority order → only then consider selecting
one bounded implementation scope → Temporal Perspectives → Causal order later.
The heavier-model switch is intended **after** the lightweight authority,
truth-table, and compatibility evidence is assembled, just before substantive
semantic alternatives and cycle/contradiction/incomparability boundaries are
compared. Work completed before that point should remain descriptive Research,
not an implicit design decision.

Explicitly not being reopened by this plan: `position + circa`, H1→H2
migration, NarrativeLine Entity Create width, Handoff acceptance, Hub registry
confirmation, History 2 Candidate recognition, H2→H1 downgrade, PWA/offline,
Lineage, or new semantics in Public Samples/User Guides.

### Relative Time Research checkpoint sync — 2026-09-23

The Relative Time minimum temporal-precedence Research is recorded in the
[standalone exploratory result](../research/exploratory/e2r-relative-time-minimum-temporal-precedence-research1.md),
committed as `a88dd2c5f7d3f93b42e7e89c3cbf0fc8cb2fc784`. Its status is
**EXPLORATORY / RESEARCH RESULT — NON-NORMATIVE**, prepared for Human review.
The candidate is not adopted; its Human decision points remain unresolved.
No schema, Validator, runtime, or application implementation was changed.
This synchronization records research progress only and does not change the
existing Human decision queue or priority order.

### History 2 deferred-shapes Research checkpoint sync — 2026-09-23

The [standalone exploratory result](../research/exploratory/e2r-history2-deferred-shapes-authoring-scope-research1.md)
is committed as `855a6090313aed7d77f14f0917be0e6eb0bdf4e4`
(`docs: research History 2 deferred authoring shapes`). Its status is
**EXPLORATORY / RESEARCH RESULT — NON-NORMATIVE**, prepared for Human review.
It distinguishes candidate structure, implementation evidence, and unresolved
authoring requirements; it does not adopt a deferred shape, choose an
implementation scope or sequence, or alter the accepted H2-POSITION-CIRCA
boundary. `bounded-point`, `temporal-extent`, and multiple assertions remain
deferred. No normative specification, schema, Validator, or application
implementation was changed.

The original prioritized handoff above remains a historical snapshot and
records **NOT STARTED** as of its capture. The recommended ordering and Human
decision queue are unchanged: review the Relative Time and History 2 Research
results and process Human decisions before considering any bounded
implementation scope. Temporal Perspectives and Causal order remain
later/separate workstreams.

### Temporal Research Human Decision Preparation sync — 2026-09-23

The [decision-preparation document](../docs/temporal/temporal-research-human-decision-preparation1.md)
is committed as `f1f7a21d6cf4da3b66df966dd38254d5ef4bcb44`
(`docs: prepare temporal research human decisions`). Its status is
**DECISION PREPARATION / NON-NORMATIVE — NO DECISIONS ADOPTED**. It consolidates
the open Relative Time and History 2 decision points and their conditional
dependencies so Human can address only the decisions relevant to a future
bounded proposal. It does not adopt normative semantics, a deferred authoring
shape, or any priority, sequence, or implementation scope. The accepted
H2-POSITION-CIRCA boundary remains unchanged; the Relative Time candidate and
the three broader History 2 shapes remain unadopted/deferred. The Human
decision queue, original handoff ordering, and separate Causal order / Temporal
Perspectives workstreams are unchanged.

### Relative Time Branch B and interval-semantics direction sync — 2026-09-23

The Human-selected Branch B was recorded in the committed [Temporal Next-Phase
Decision Gate](../docs/temporal/temporal-next-phase-human-decision-gate1.md)
(`b25b246`, `docs: record Human-selected temporal next phase`). The bounded
direct pairwise `before` / `after` proposal was then committed separately as
[`docs/relative-time-bounded-contract-proposal1.md`](../docs/temporal/relative-time-bounded-contract-proposal1.md)
(`e7c9bc21deca695ade11ebdb19ab5c3245cfee4d`,
`docs: propose bounded Relative Time contract`). It remains a standalone
**non-normative / not adopted** proposal; its creation does not authorize
normative adoption, schema/runtime changes, or implementation.

The subsequent roadmap checkpoint records the Human-selected future
interval-semantics direction (`b27dd42186cc017ff68277e13ec1ad03b25c44e8`,
`docs: record Relative Time interval semantics direction`): consider `within`
and `overlap` together, distinguish containment from partial overlap, do not
infer or create Recorded Relative Time assertions from coarse History values,
keep Recorded assertions distinct from possible Derived/inference behavior,
and treat explicit Timeline presentation placement as separate from Relative
Time semantics. This is a future design/research direction, not normative
adoption or implementation authorization. The meaning of `overlap`,
same-temporal-extent, boundary contact, and Derived inference remains
unresolved.

These later checkpoints update current status without rewriting the earlier
handoff and decision-preparation snapshots. The accepted/closed
H2-POSITION-CIRCA boundary remains unchanged; History 2 deferred authoring
shapes remain unadopted. Causal order and Temporal Perspectives remain separate
workstreams; no new sequencing or implementation scope is established here.

## Validation summary

Validation counts below are from the individual checkpoint reports unless
otherwise indicated:

- LiaisonScape selected Relation work: full suite `640/640`, lint, build, and
  `git diff --check` passed; the Human accepted the browser display.
- LiaisonScape Entity status: `641/641` tests and EN/JA desktop browser checks
  passed; direct 390px browser verification and no-overflow check passed. The
  task is closed in the roadmap; the focused acceptance result records the
  exercised viewport and current implementation boundaries.
- LiaisonScape User Guide: EN/JA required-copy checks and `git diff --check`
  passed.
- NarrativeLine Entity Create: `259/259` tests, lint, build, and
  `git diff --check` passed.
- At the Header correction checkpoint, lint, build, and `git diff --check`
  passed; tests and narrow browser acceptance had not yet run. The later
  [narrow Header acceptance result](../docs/narrativeline/narrativeline-narrow-header-robustness-acceptance1-result.md)
  supersedes that pending state for the bounded scope: local narrow EN/JA,
  navigation, focus-visible, overflow, tests, lint, and build passed. Exact
  physical-device reproduction and deployed Public source revision remain
  unverified.
- The latest browser-connector attempt for the Public narrow capture timed out
  twice. Direct read-only Public JS/CSS asset retrieval succeeded; no browser
  or app state was changed by that retrieval.

## Repository state and handoff

Observed repository baselines at log creation:

- E2R-SPEC: `main`, HEAD `8e1f3ee20feefa841a97cfe3e047a2ac5ba3f226`;
  dirty `docs/roadmap.md`, two exploratory History/causal research files, and
  untracked `work/` were preserved. This session added
  `sessions/E2R-Session-0094.md`.
- NarrativeLine: `main`, HEAD `0600465df14e561bcf176d23c5ba9c471bc45027`;
  dirty `AGENTS.md`, Entity Create source/test changes, and this session's
  `AppFrame.tsx` / `index.css` Header correction were preserved.
- LiaisonScape: `main`, HEAD `b5c0781d8467f015141e5564ec249b9785961f45`;
  dirty guide/source/test files and untracked temporary/experimental work were
  preserved.

At original Session log creation, no commit, push, deploy, release, or
publication had been performed. That sentence records the original snapshot,
not the later repository state. Subsequent e2r-spec documentation commits are
listed in the reconciliation section below. Existing dirty and untracked work
was not cleaned, reset, or overwritten. No new central Knowledge entry was
added.

Initial log status at creation (superseded for the bounded local/browser scope
by the acceptance result above): `SESSION LOGGED - CROSS-APP FOLLOW-UPS
RECORDED / PUBLIC HEADER VERIFICATION PENDING`.

## Cross-App Dataset Replacement destructive styling parity audit

Completed `E2R-CROSS-APP-DATASET-REPLACEMENT-DESTRUCTIVE-STYLING-PARITY-AUDIT1`.
Current app sources and state/action test matrices were compared. Browser review
confirmed the modified-only dialog and safe-side initial focus, including a
390px LiaisonScape view and keyboard focus-visible. NarrativeLine's neutral
red-outline Discard treatment and generic purple hover were materially weaker
than LiaisonScape's solid-red treatment, so a Dataset Replacement-scoped CSS
correction was made without changing behavior. NarrativeLine tests 259/259,
LiaisonScape tests 641/641, and both builds passed. Result:
`docs/cross-app/cross-app-dataset-replacement-destructive-styling-parity-audit1-result.md`.
Roadmap status: **ACCEPTED / CLOSED**. No Public change, commit, or deploy.

## Subsequent checkpoint and repository reconciliation

The following later e2r-spec commits are present in the canonical `main`
history and supersede intermediate “pending” statements above where stated.
These SHAs identify e2r-spec documentation/roadmap commits; this reconciliation
does not assert application-repository commit SHAs.

At the start of this reconciliation, canonical e2r-spec was `main` at
`dc21e08673d7c19a70622877b78eeb290a9e505d`.

- `5d07065` — `docs: record NarrativeLine Vite WS cleanup acceptance`;
  commits the warning diagnostic, trigger audit, and test-only WS cleanup
  result records. The cleanup result records 18 `ws: false` settings across
  17 test files and a 259/259 test pass with no recurring 24678 warning.
- `9aa5331` — `docs: record bounded UI acceptance closures`; commits the four
  bounded results for Dataset Replacement styling parity, shell action
  hover/focus parity, Entity selection narrow acceptance, and narrow Header
  robustness acceptance. Their recorded dispositions are accepted/closed for
  the tested scope. The Entity selection result corrects ownership to
  LiaisonScape; Header physical-device reproduction and exact Public source
  revision remain unverified.
- `7b2c967` — `docs: sync recent accepted UI closures`; synchronizes the
  Dataset Replacement, shell hover, and Vite WS cleanup closures in the
  roadmap.
- `ad250f6` — `docs: clarify roadmap open and completed inventory`; separates
  accepted/completed work from remaining follow-ups and preserves the Relation
  identity policy decision context.
- `dc21e08` — `docs: reconcile post-release observation audit`; labels the
  older observation and validation material as historical where later
  acceptance superseded it, without closing the phone-landscape Human scope
  decision or claiming physical-device verification.

At the time of this earlier reconciliation, the standalone result documents
and roadmap links for the UI checkpoints were present in HEAD and no new
Research result or specification decision had been recorded; both Relative
Time and History 2 Research were then **NOT STARTED**. The Relative Time status
is superseded only by the checkpoint sync above. No UI acceptance or Human
decision recorded in this historical reconciliation is reopened.

### Relative Time extensible-vocabulary direction sync — 2026-09-24

The Human-selected broader Relative Time design/research direction is recorded
in [Relative Time Extensible Temporal Assertion Direction 1](../docs/temporal/relative-time-extensible-temporal-assertion-direction1.md),
committed as `d0d6f54947b43fa4e4bad8e646bc01b6135f9a62` (`docs: record
extensible Relative Time direction`). Relative Time is to be organized as an
extensible temporal-assertion vocabulary for present and future applications,
not as an application-specific feature. This is a non-normative direction;
it does not adopt semantics, schema/version, Stable status, Validator/runtime
behavior, solver, or application implementation.

The earlier Human-selected `before` / `after` bounded qualitative direction
remains valid. Its proposal (`9b3eadb479f35f5920128de941332b4be8fef835`)
remains non-normative evidence and is not withdrawn, but a standalone adoption
disposition is not the current next checkpoint. The broader vocabulary's
semantic contract is to be organized through research/design before schema or
version work; this does not itself select further semantics or implementation
scope.

The selected direction organizes qualitative `before` / `after`, interval
topology (`within` / `contains`, `overlap`, `touching`, and
`same-temporal-extent`), existing `same-instant`, and the existing
calendar-granule / elapsed-offset candidates as distinct families. It records
one Relation per Recorded assertion, no required mirror Relation, possible
coexistence of independent Relations for the same Object pair, and no forced
exclusive classification. History does not automatically create, overwrite,
or refine Recorded Relations; History-derived results remain separate
Derived/inference responsibilities without automatic write-back.

Point-like Event `within` period Event is a selected direction; exact
boundary/applicability rules remain open. Period Events do not automatically
require or create start/end Events; an optional future UI suggestion for a
separately meaningful start/end Event remains unimplemented. Gantt and other
precise scheduling needs are future extension space, and coarse `before` /
`after` is not to be reinterpreted as a boundary scheduling rule. Allen
interval algebra is a reference, not a compatibility or adoption claim.

This newer current-state sync supersedes the earlier sequencing implication
that standalone `before` / `after` adoption or an interval-topology-only
checkpoint should proceed next. The earlier Branch B, interval-direction, and
pre-selection entries remain historical records. The separate Timeline
presentation direction remains separate. `H2-POSITION-CIRCA` stays
accepted/closed; History 2 deferred shapes, `same-instant` laws, detailed
interval boundaries, Derived rules, solver policy, and Causal order / Temporal
Perspectives remain unadopted or separate. No schema, version, Validator,
application, or UI work was started; push/deploy state is unchanged.

### Relative Time atomic semantics adoption and current handoff — 2026-09-24

The Human adopted the atomic Recorded assertion semantics and stated
cross-cutting boundaries in [Relative Time Atomic Recorded Assertion
Semantics Adoption 1](../docs/temporal/relative-time-atomic-recorded-assertion-semantics-adoption1.md),
commit `a5e26b0c5b3d04ea69bfd1f6b90476fede1bb17e` (`docs: adopt Relative Time
atomic semantics`). That record is the current normative authority for the
bounded atomic semantic layer. The earlier proposal and readiness audit remain
historical evidence of proposal and review; the original session Status and
pre-adoption checkpoint snapshots above are not current-state claims.

The adoption does not extend Relative Time Draft/schema support or authorize
Feature/version integration, machine evaluation, boundary or History-shape
rules, cross-assertion policy, Derived semantics, Validator, migration,
Stable promotion, UI, or application implementation. Those remain separate
checkpoints. The atomic semantic disposition is recorded; this entry is the
minimum project-state/handoff synchronization, not an implementation start.

Following the sequence in [the roadmap](../docs/roadmap.md#human-selected-next-workstream-sequence--relative-time-then-documentation-ia-2026-09-24),
the next planned workstream after this synchronization is the Documentation
Information Architecture / Roadmap Physical Modularization Human structure-
decision checkpoint. The initial structural candidate is separating completed,
superseded, and historical chronology from current roadmap planning. The
flat `docs/` root and roadmap length are assessed together; issue-per-file
proliferation is not the default. No split, directory layout, archive target,
move, rename, or migration has been selected or started.

### Documentation IA Roadmap-first structure direction — 2026-09-24

The Human selected the Roadmap-first direction in [Documentation IA / Roadmap
Physical Modularization Direction Decision 1](../docs/documentation-ia/documentation-ia-roadmap-physical-modularization-direction-decision1.md),
using the preceding [decision-preparation record](../docs/documentation-ia/documentation-ia-roadmap-physical-modularization-decision-preparation1.md)
as comparison evidence. Keep `docs/roadmap.md` as a concise current-planning
entry point; retain detailed checkpoint evidence in its dedicated records;
and separate completed/superseded/historical chronology from current planning
without deleting or reinterpreting that evidence. Issue-per-file growth is
not the default.

> This records the selected Roadmap-first direction and the next-step status
> at that checkpoint. The direction remains current; its then-unselected
> physical details and migration status are superseded by the later structure
> decision and current migration entry below.

The next checkpoint is bounded implementation-preparation / migration-gate
review. Chronology destination and partition, file/directory layout, anchor
and link migration, and any physical operation remain undecided and require
Human review. The `docs/` flat-root taxonomy remains a separate later
checkpoint. No roadmap split, move, rename, deletion, archive migration, or
link rewrite has been performed or authorized.

### Historical snapshot — Roadmap modularization implementation-preparation gate — 2026-09-24

The read-only migration preparation is recorded in [Documentation IA / Roadmap
Physical Modularization Implementation Preparation 1](../docs/documentation-ia/documentation-ia-roadmap-physical-modularization-implementation-preparation1.md).
It documents two bounded physical layout branches, identifies a contiguous
completed workspace-migration chronology block as the clearest initial
extraction candidate, maps mixed current/history regions, and records the
observed link/path impact. Layout, partition, exact extraction manifest, and
any exceptional anchor-compatibility handling remain subject to Human review.
No physical migration or link rewrite has been performed. The `docs/`-wide
taxonomy remains deferred.

### Documentation IA bounded roadmap chronology migration — current state (2026-09-24)

The Human-selected physical layout and conservative extraction gate are
recorded in [Roadmap Chronology Structure Decision 1](../docs/documentation-ia/documentation-ia-roadmap-chronology-structure-decision1.md)
and the [migration result](../docs/documentation-ia/documentation-ia-roadmap-chronology-migration1-result.md).
The first verified historical tranche—workspace placement, relocation,
extraction, acceptance, and cleanup chronology—is preserved in
[`docs/roadmap-history/legacy-chronology.md`](../docs/roadmap-history/legacy-chronology.md),
with navigation and authority boundaries in
[`docs/roadmap-history/README.md`](../docs/roadmap-history/README.md).
`docs/roadmap.md` remains the sole current-planning authority. Ambiguous mixed
regions remain in the roadmap without being declared permanently current.
The wider `docs/` taxonomy and other-document relocation remain deferred.
