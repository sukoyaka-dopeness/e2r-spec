# E2R Session 0094 - Cross-App UI Follow-ups, Guide Coverage, and Header Diagnosis

Date: 2026-09-23
Repositories: `e2r-spec`, `e2r-narrative-line`, and `e2r-liaison-scape`

## Session identity

Objective: Consolidate the small cross-application UI and documentation tasks
raised during the session, record their evidence and completion boundaries,
and diagnose the NarrativeLine narrow Header wrapping observed on the current
Public site.

Status: `GUIDE COVERAGE UPDATED / BOUNDED UI ACCEPTANCE CLOSED / RESEARCH HANDOFF NOT STARTED`

The bounded UI checkpoints recorded below are closed where their linked
acceptance results say so. The original device-specific Header observation,
physical-device coverage, and exact Public artifact revision remain
unverified; these limitations do not leave the bounded local acceptance open.
The Relative Time and History 2 Research handoff remains unstarted.

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
  **ACCEPTED / CLOSED** in [the narrow acceptance result](../docs/narrativeline-entity-selection-status-narrow-acceptance1-result.md).
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
the [audit result](../docs/cross-app-shell-action-hover-focus-parity-audit1-result.md).

The later `E2R-NARRATIVELINE-VITE-24678-WARNING-DIAGNOSTIC1` checkpoint
reproduced the middleware test-server `24678` warning 89 times during a natural
259/259 test pass, confirmed transient Node test-worker listener ownership and
no post-exit listener/process, and closed it as an accepted non-blocking
test-tooling warning. See the [diagnostic result](../docs/narrativeline-vite-24678-warning-diagnostic1-result.md).
The bounded follow-up identified the exact Vite 8.1.5 trigger as parallel
middleware-mode test servers racing for the default WS port 24678; `hmr:false`
does not disable that WS listener. The 8-server reproduction yielded 7 benign
`EADDRINUSE` warnings and clean shutdown. No NarrativeLine test change was
needed. See the [trigger audit](../docs/narrativeline-vite-24678-warning-trigger-audit1-result.md).
The subsequent NarrativeLine-local cleanup set `server.ws:false` in all 18
SSR-only middleware test server setups. Full validation passed 259/259 with
zero 24678 warnings/listener samples and no post-run listener or worker.
Details: [test WS cleanup result](../docs/narrativeline-vite-test-ws-cleanup1-result.md).

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
acceptance result](../docs/narrativeline-narrow-header-robustness-acceptance1-result.md).

## Roadmap and Research disposition

The E2R-SPEC roadmap was updated during the session to consolidate the small
open observations without duplicating existing records. Current follow-ups
include:

- NarrativeLine narrow Header robustness: local/browser acceptance closed;
  exact Public source revision and target-device reproduction remain
  unverified. See the acceptance result linked above.
- LiaisonScape Entity Name selection status: accepted/closed after direct
  390px browser verification. See
  [the narrow acceptance result](../docs/narrativeline-entity-selection-status-narrow-acceptance1-result.md).
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

### Prioritized next-work Research handoff — NOT STARTED

The user supplied a more detailed priority order for the next research phase.
This plan is recorded here for the next session; it has **not** yet been
executed, adopted as specification, or implemented.

Reconciliation status: **NOT STARTED**. The evidence inventory, Relative Time
contract comparison, and History 2 deferred-shapes authoring-scope comparison
remain future Research tasks; no conclusions or design decisions are implied
by the completed UI/roadmap checkpoints recorded elsewhere in this session.

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
  [narrow Header acceptance result](../docs/narrativeline-narrow-header-robustness-acceptance1-result.md)
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
`docs/cross-app-dataset-replacement-destructive-styling-parity-audit1-result.md`.
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

The standalone result documents and roadmap links for these checkpoints are
present in the current e2r-spec HEAD. This reconciliation adds no new
application acceptance, Research result, or specification decision. The
Relative Time minimum temporal-precedence contract Research and History 2
deferred-shapes authoring-scope Research remain **NOT STARTED**, as set out in
the prioritized handoff.
