# E2R Session 0048 - Cross-App Shell Alignment and NarrativeLine Locale Placement

Date: 2026-08-23

## Scope

This session records the bounded Cross-App Shell Alignment work completed for
Hub and NarrativeLine, the adopted locale-control placement design, related
Knowledge evidence, and the preparation boundary for LiaisonScape F2-LS1.

No E2R Core or Extension schema, Dataset semantics, Dataset language, or
Dataset Handoff semantics were changed.

## Hub Footer F1/F1b

Hub Footer cleanup and responsive geometry were completed and manually accepted
for representative wide and narrow English/Japanese surfaces.

Accepted behavior:

- Footer left side contains the descriptor only:
  `application ecosystem` / `アプリケーションエコシステム`.
- Footer right side contains Credits / クレジット.
- The Footer does not repeat `E2R Hub`.
- The narrow Footer preserves descriptor-left / Credits-right geometry.
- Header locale control, Credits Dialog, Hero copy, and other Hub behavior were
  preserved.

Runtime checkpoint:

`4483a42 fix: align Hub footer across responsive layouts`

Changed files:

- `e2r-hub/src/App.tsx`
- `e2r-hub/src/App.css`

Hub validation passed with lint, build, and `git diff --check`. No push,
deploy, or release was performed.

## e2r-spec locale placement decision

The accepted Cross-App Locale Control Placement was recorded in:

`docs/cross-app-locale-startup-v0-recipient-preference-design.md`

Design checkpoint:

`311c1c4 docs: align locale controls with application headers`

Adopted placement:

- locale control is an application-level presentation-state indicator and
  preference control;
- placement is the top-level Header / application shell;
- Hub keeps its current Header locale control;
- NarrativeLine uses the shared AppFrame Header across Home, Timeline, Event
  Detail, Entity Detail, Entity Picker, and Entity Create;
- LiaisonScape uses top-level Headers for Home and Workspace; and
- Footer contains descriptor/context and Credits only, with no locale control.

The startup locale contract, persistence, Conflict Dialog, fragment lifecycle,
`history.replaceState`, Dataset Handoff independence, and Dataset language
boundaries remain unchanged. Runtime implementation remains bounded work.

## NarrativeLine F2-NL1/NL1b/NL1c

NarrativeLine locale placement was implemented and manually accepted.

Accepted behavior:

- Locale control is available in the shared AppFrame Header on Home, Timeline,
  Event Detail, Entity Detail, Entity Picker, and Entity Create.
- Home Footer locale control was removed.
- Footer contains descriptor-left / Credits-right.
- Header contains brand-left / locale-control-right.
- Header and Footer use the two-column `minmax(0, 1fr) auto` geometry.
- Locale button uses `white-space: nowrap`.
- Existing locale semantics, persistence, URL behavior, Conflict Dialog,
  Dataset Handoff, navigation, and dialog focus behavior were preserved.

Manual acceptance passed for Desktop EN/JA, 601px/600px, representative
narrow, approximately 270px, and approximately 240px. It also passed keyboard
focus/order, Enter/Space switching, Dataset/selection/draft preservation,
Picker/Create state preservation, and Dataset Replacement Dialog focus behavior.

Approximately 240px is the accepted boundary for this checkpoint. Narrower
extreme viewports may visually occlude the brand; that is a bounded future
graceful-degradation question, not a universal minimum-width guarantee or a
public-release blocker.

Runtime checkpoint:

`caaa802 feat: move locale control to application header`

Changed files:

- `e2r-narrative-line/src/components/AppFrame.tsx`
- `e2r-narrative-line/src/index.css`

Verification passed:

- `npm test`: 88 passed;
- `npm run lint`: PASS;
- `npm run build`: PASS; and
- `git diff --check`: PASS.

Credits backdrop dismissal was not changed. Explicit Close, Escape, and
backdrop dismissal alignment remains a separate follow-up candidate.

## Knowledge synchronization

Existing Hypothesis entries were updated; no duplicate entry was created:

- `ai-knowledge/hypotheses/reference-first-ui-consistency-audit.md`
- `ai-knowledge/hypotheses/cross-app-action-hierarchy-and-destructive-controls.md`

Knowledge checkpoint:

`563cc23 docs: record NarrativeLine locale shell evidence`

The entries remain `Hypothesis`. The evidence records that application-level
locale controls can be separated from screen-specific action groups, that
state preservation can be maintained through existing application state, and
that semantic placement, responsive geometry, and human visual acceptance must
be evaluated separately. Commit hashes, test counts, and the 240px boundary
are not generalized as workspace-wide rules.

## LiaisonScape next work

The next bounded workstream is F2-LS1: Home / Workspace Header locale
placement.

Current source candidates identified for the next audit include:

- `e2r-liaison-scape/src/App.tsx`;
- `e2r-liaison-scape/src/styles.css`;
- `e2r-liaison-scape/src/i18n.ts`;
- `e2r-liaison-scape/src/dataset-handoff.ts`;
- locale, Dataset Handoff, Dataset Replacement Safety, graph, and related
  tests; and
- the accepted locale placement design above.

F2-LS1 must preserve Home/Footer behavior until its bounded runtime decision,
keep locale semantics separate from Dataset Handoff and Dataset language, and
evaluate Workspace Header geometry and state preservation before broader locale
consumer work such as `#locale`, recipient preference, and fragment
preservation.

## Repository and publication status

The NarrativeLine and Knowledge worktrees were clean after their checkpoints.
The specification repository retains the pre-existing untracked file:

`research/exploratory/anonymous-dataset-sharing.md`

That file was not modified or staged. No repository was pushed. No deploy,
release, tag, or publication was performed.

## Subsequent research and navigation-safety work

The session continued with bounded exploratory research and NarrativeLine
browser-history safety work. These entries are retrospective evidence and do
not change the E2R Core or define a new Extension.

### Cross-diary acknowledgement and revision safety

The personal journal / multi-Dataset workspace research was extended to record
directional cross-Dataset Relations, viewer-derived inbound links,
target-owned acknowledgement, revision-pinned acceptance, changed-since-
acknowledgement presentation, reader-owned following, Event time versus
publication time, mutable-target and rewrite threats, provenance, spam, and
prior-art lessons from hyperlinks, Trackback, Pingback, Webmention, and
RSS/Atom without adopting those protocols.

Checkpoint:

`482c126 docs: explore journal acknowledgement and revision safety`

The checkpoint was pushed to `e2r-spec`. The known untracked files remained
untouched:

- `research/exploratory/anonymous-dataset-sharing.md`
- `sessions/E2R-Session-0048.md`

### Fediverse journal publication research

The same exploratory document was extended with a non-normative Fediverse
publication direction. Save remains distinct from explicit Publish / Share; a
Git-backed E2R journal remains canonical while social posts are announcements
or representations; Mastodon-compatible adapters must be researched per
provider; and ActivityPub C2S and S2S capabilities must not be conflated. A
future Journal ActivityPub Actor / Federation Bridge is possible, but GitHub
storage alone is not a complete federated Actor. Privacy, revision mapping,
partial failure, deletion, visibility, and OAuth credential boundaries remain
open research questions.

Checkpoint:

`4017d8b docs: explore Fediverse journal publication`

This checkpoint was also pushed to `e2r-spec`. No Core, Extension, runtime, or
normative application contract was changed.

### NarrativeLine Phase 24 navigation safety

NarrativeLine accumulated bounded browser-history safety work while retaining
the existing uncommitted Phase 24 paths. Implemented and tested behavior now
includes indexed clean Back / Forward restoration; loss-risk guards for Event
edits, draft Events, Entity edits, coordinate-only pending work, and Entity
Create drafts; Header confirmation authority during Browser traversal;
first-intent-wins behavior; abandoned draft Forward-entry sanitization; and a
warning-free async `act` / real JSDOM History harness using final semantic DOM
conditions and MutationObserver waiting.

The work also added a bounded `rebaseCurrentNavigationEntry` writer, clean
legacy restoration that remains unindexed and clears the current index
reference, safe rebase when current or target index is unreliable, and
in-place normalization of stale indexed restoration. Safe rebase creates a
coherent target index 0 / protected current index 1 segment without guessing
the original Browser direction.

Latest deterministic evidence recorded in the worktree includes:

- Browser traversal: 16/16 focused tests PASS;
- NavigationService: 15/15 focused tests PASS;
- full suite: 165/165 PASS;
- lint: PASS;
- build: PASS;
- `git diff --check`: PASS; and
- React `act(...)` warnings: 0.

The latest evidence directly covers indexed-to-legacy safe-rebase Cancel and
Confirm, post-rebase 0-to-1 traversal, stale-entry normalization,
legacy-current index clearing, and Header confirmation with an unindexed
Browser target. A legacy draft Event fixture remains unresolved: directly
replacing the currently rendered draft entry with an unindexed History payload
does not update the application's internal current-index ref, so the test
follows the ordinary indexed guard instead of safe rebase. This is classified
as a test-topology / fixture boundary and was not patched in production.

True rapid user traversal during the rollback/replay window was not fabricated
in JSDOM and remains a real-browser manual acceptance boundary.

NarrativeLine remains uncommitted and unpushed. No stage, commit, deploy,
release, or push was performed for the NarrativeLine Phase 24 work.

### Current boundary

The E2R exploratory research checkpoints are pushed and documented.
NarrativeLine automated browser safety is substantially evidenced for
deterministic JSDOM cases, while a production-realistic legacy draft Event
topology, full real Chrome manual acceptance, rapid rollback/replay gesture
behavior, and the final accumulated Phase 24 commit remain open.

## Post-Phase-24 Timeline and Workspace More follow-up

The subsequent bounded work completed and accepted the following NarrativeLine
follow-ups without changing the E2R Core, Extensions, Dataset schema, or
Dataset Replacement Safety semantics.

### Phase 24 navigation safety closure

Phase 24 Navigation Safety was completed through deterministic Browser
traversal tests and Real Chrome acceptance. The accepted implementation covers
clean Back/Forward restoration, dirty Event and Entity guards, draft Event and
Entity Create sanitation, coordinate-only pending work, Header confirmation
authority, first-intent-wins traversal, beforeunload protection, locale
coexistence, and restoration of the next genuine user navigation History push
after same-screen sanitized restoration.

The same-screen restoration flag leak was reproduced in D2 and fixed in D3A
by consuming the restoration transaction before the screen-equality early
return. The fix restored the missing Event Detail History entry and explained
the previously observed wrong Entity Detail Browser destination.

Accepted checkpoints:

- e2r-spec: `f9a7df5 docs: accept NarrativeLine Phase 24 navigation safety`;
- NarrativeLine: `85e2fbf feat: protect NarrativeLine browser navigation`;
- Dialog visual polish: `61d2231 fix: polish NarrativeLine discard dialog actions`;
  and
- Timeline shell: `ddb0ff7 feat: keep NarrativeLine timeline actions accessible`.

Manual boundaries retained in the acceptance record include rapid
mid-rollback/replay behavior that was not reproducible through Chrome UI and a
one-off sanitized Forward Event Detail observation that was not reproducible
under state capture. Neither was silently promoted to a defect.

### Timeline sticky toolbar

The Timeline toolbar was consolidated into normal flow with event count, Add
Event, and E2R JSON export. The old bottom sticky Add Event affordance was
removed, duplicate Add Event was eliminated, and the toolbar was made sticky
with an opaque background, border, and controlled stacking order.

Real Chrome diagnosis showed that root-level `overflow-x: hidden` declarations
were interfering with the sticky containing/scrolling mechanism. The bounded
fix changed the applicable root-level declarations to `overflow-x: clip`,
preserving horizontal clipping while restoring sticky behavior. Manual
acceptance passed at Timeline top, middle, and bottom, at wide, 601px, 600px,
and approximately 320px widths, with no horizontal overflow.

The accepted Timeline shell checkpoint is:

`ddb0ff7 feat: keep NarrativeLine timeline actions accessible`

### Workspace More menu and Dataset acquisition boundary

The initial one-item More menu was deliberately deferred. After Export was
accepted as a genuinely useful second workspace secondary action, the accepted
Timeline hierarchy became:

```text
Add Event                         visible primary action
More / その他
    Open E2R Dataset              secondary acquisition
    Export E2R JSON               secondary action
```

Home New / Open / Sample remains the canonical primary Dataset acquisition and
replacement path. Timeline workspace Open is secondary convenience access.
TimelineScreen owns only the surface-local file acquisition adapter: file
input, `file.text()`, same-file reset, and local loading/error presentation.
`App.handleImportDataset(source)` owns Dataset parsing, validation, candidate
staging, replacement decision, Dataset Replacement Safety, and final
acceptance.

The Workspace More implementation was accepted with keyboard navigation,
English/Japanese presentation, responsive layouts, Open/Export behavior,
replacement safety, backdrop dismissal, and opener focus restoration. The
automated NarrativeLine gate recorded 181/181 passing tests, zero React
`act(...)` warnings, passing lint and build, and passing `git diff --check`.
Native OS file selection, picker Cancel focus, real touch, and same-file manual
selection remain explicit acceptance boundaries. A Home replacement-Cancel
observation ending on `body` remains non-blocking and was not silently fixed.

NarrativeLine checkpoint:

`15414747689c55d3815ee4fa07c48760369fc207 feat: add NarrativeLine workspace dataset menu`

### Documentation checkpoint

The C4C8 documentation-only checkpoint recorded the evolution from the C2
one-item-menu deferral through the accepted two-item More menu and preserved
the historical C2 decision rather than amending it.

`ddb3463666be930b90778d5c86f3dc64e2afd356 docs: accept NarrativeLine workspace more menu`

Changed documents:

- `docs/dataset-acquisition-entry-point-alignment.md`;
- `docs/roadmap.md`; and
- this session log, which remains an intentionally untracked historical log.

`npm.cmd run validate` and `git diff --check` passed. The unrelated untracked
files `research/exploratory/anonymous-dataset-sharing.md` and
`sessions/E2R-Session-0048.md` were preserved and not staged by the C4C8
documentation commit. No push, amend, rebase, or unrelated cleanup was done.

### Knowledge Candidate Check

The C4C8 review did not modify `ai-knowledge`. The following candidates remain
scoped to existing records or application documentation rather than promoted
workspace-wide knowledge:

- Workspace secondary action hierarchy: no new entry; bounded application
  decision recorded in e2r-spec.
- Modal backdrop focus ordering: no new entry; existing hypothesis and
  application acceptance evidence are sufficient for the current scope.
- Surface-local file acquisition adapter: no new entry; this is an accepted
  application ownership boundary without independent cross-application
  confirmation.

At the end of this session, NarrativeLine is clean at
`15414747689c55d3815ee4fa07c48760369fc207`, e2r-spec contains the accepted
documentation checkpoint and this untracked session log, LiaisonScape remains
unchanged, and no repository has been pushed for the follow-up work.
