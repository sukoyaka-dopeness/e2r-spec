# LiaisonScape Explicit Auto Layout Production Integration Result

Date: 2026-08-30

Status: `ACCEPTED — EXPLICIT AUTO LAYOUT PRODUCTION INTEGRATION`

Decision: `FORMALLY ACCEPTED — EXPLICIT AUTO LAYOUT PRODUCTION INTEGRATION`

R2: `R2 COMPLETE — EXPLICIT AUTO LAYOUT ACCEPTED`

## Authority and model

This checkpoint consumed semantic decision `156836b`, solver checkpoint
`e1836f3`, and experiment result `56595d6`. Model used: GPT-5.6 Sol Medium.
Model assessment: appropriate for the bounded state, safety, and browser
integration review; no stronger review was required because no accepted
semantic boundary changed.

Public GitHub repositories were inspected read-only as historical baselines.
Local Git/filesystem remained authoritative; public source lagged the accepted
local candidate.

## Implementation

LiaisonScape commit `1387b3f feat: integrate explicit Auto Layout` adds the
Workspace More command, a small `AutoLayoutConfirmation` surface, and EN/JA
copy. The adapter calls the accepted pure solver, updates working `positions`
only when the result differs, marks `coordinatesDirty`, and registers affected
Entities for the existing Coordinate save path.

Auto Layout is explicit only. It is not invoked by Dataset open, reload, Fit,
Reset, or passive placement. `SCOPE-B`, `PERSIST-B`, `DIRTY-B`, `OWN-B`,
accepted view behavior, and `SCHEMA-NO` are preserved.

## Acceptance methodology and fixture

The prior Lighthouse no-op was retained as a valid observation: its stored
geometry already matched the solver candidate, so no false pending work was
created. A temporary four-Entity star Dataset (`hub`, `a`, `b`, `c`) was used
for state-transition evidence. It was loaded through the browser file input,
not added to a repository, and removed after the run.

## Automated semantic evidence

LiaisonScape passed 277 tests, lint, build, and diff check. Existing automated
coverage verifies Dataset-before-Save invariants, Coordinate adoption,
pending-work safety, manual ownership state, deterministic solver behavior,
and EN/JA dialog/menu contracts.

## Real-browser evidence

Dedicated local Chrome was connected through the existing CDP helper. Native
dialog state was explicitly recovered to `closed`. Real pointer input used
CDP `Input.dispatchMouseEvent`.

- Clean flow: temporary Dataset loaded; Entity dragged and saved to create a
  divergent clean baseline; More → Auto Layout visibly changed positions and
  enabled Save.
- Save adoption: existing Save node coordinates returned the UI to clean
  state without errors.
- Dirty Cancel: a second real Entity drag opened exactly one confirmation;
  focus entered the Cancel button; Cancel preserved the dirty position and
  left Save available.
- Dirty Confirm: confirmation replacement was exercised, followed by Save;
  the UI returned to clean state with no error or stale dialog.
- Locale: EN/JA command and dialog surfaces were observed. Focus and state
  remained usable across the tested surfaces.
- View/navigation: no blank or crash state was observed. Auto Layout did not
  invoke Fit or Reset. Manual route/label state was not cleared by the
  integration adapter; exhaustive visual ownership combinations remain
  covered by automated responsibility tests.
- Lighthouse production visual check remains the representative visual
  sample; no obvious overlap, blank state, or responsiveness failure was
  observed. Its no-op Auto Layout result is recorded above.

## State and ownership impact

Before Save, Dataset Core data, Events, Relations, Presentation data, and
Coordinate serialization remain unchanged; only working positions and the
existing dirty/pending state change. Save uses the existing Coordinate writer,
then clears `coordinatesDirty` according to the established contract. Export
behavior and Dataset Replacement Safety remain unchanged. Manual Relation
routes, self-loop overrides, Relation labels, and Node labels are not globally
reset. Selection remains application state and is not forcibly cleared.

No schema, Validator behavior, Coordinate version, Presentation payload,
passive initial placement, or package dependency changed.

## Bounded fixes and concerns

No material design issue or bounded browser fix was required after the
integration implementation. The first-version concern is visual tuning:
numeric relaxation weights, label scoring, crossing quality, and dense-graph
legibility remain future algorithm work. They do not invalidate this bounded
integration acceptance.

## Final gates and repository state

- LiaisonScape: 277 tests passed; lint PASS; build PASS.
- e2r-spec: `npm.cmd run validate` PASS.
- Validator/NarrativeLine: unchanged; no cross-repository serialized
  contract required revalidation in this checkpoint.
- Modified production files: `src/App.tsx`, `src/i18n.ts`,
  `src/components/AutoLayoutConfirmation.tsx`.
- Temporary fixture and diagnostic script: removed; neither is tracked.
- LiaisonScape commit: `1387b3f`, local and unpushed.
- This result document is the only e2r-spec change for this checkpoint and
  is committed separately.
- No push, deploy, tag, publish, version bump, or roadmap synchronization.

Recommendation: retain the current integration and proceed only through a
separately bounded follow-up for broader visual/manual ownership acceptance or
future App modularization.
