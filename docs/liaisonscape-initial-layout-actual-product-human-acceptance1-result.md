# LiaisonScape Initial Layout Actual Product Human Acceptance

Date: 2026-09-11

Follow-up attempt: 2026-09-11

## Result

The human acceptance is **PARTIAL / NOT CLOSED**. Lighthouse was observed in
the real Product open path with the explicit
`initial-layout=coarse-objective-prototype-v1` opt-in. Titanic EN/JA and
Apollo EN/JA were not directly observable in this run and are not marked
PASS.

## Observed Lighthouse result

- coordinate-less Dataset opened through the normal Product path.
- timing diagnostic reported
  `bounded-provider/coarse-objective-prototype-v1/prototype/completed`.
- graph reached the stable state after presentation derivation and viewport
  fit.
- EN/JA locale switching remained available and the graph remained rendered.
- Entity selection opened the existing selection/detail surface.
- Entity drag remained functional; the existing temporary-coordinate status
  appeared and Save Coordinates became enabled.
- Save Coordinates returned the surface to a clean state and disabled the save
  action again.
- No new coarse-only visual defect was conclusively identified in the
  Lighthouse observation. Crowding and self-loop/label presentation remain
  presentation observations, not attribution to Initial Layout.

## Not confirmed

- Titanic EN/JA visual acceptance, including the known parallel Edge and long
  Relation-label presentation case.
- Apollo EN/JA whole-result fallback in the Actual Product surface.
- Direct human confirmation of all self-loop, connector, and long-label cases
  across the requested fixtures.
- Reopen after Save Coordinates using the same persisted Dataset payload.

## Follow-up acquisition result

The canonical Titanic and Apollo JSON fixtures are present in
`e2r-spec/examples/`, while the current LiaisonScape `public/` runtime exposes
only the Lighthouse sample. The normal Product file picker opened, but the
connected browser automation did not expose a file-chooser handle for safely
injecting those local files. No fixture was copied into Product assets and no
fixture-loading behavior was added solely to manufacture acceptance evidence.
Consequently, the Titanic/Apollo items remain UNCONFIRMED rather than being
inferred from diagnostic-only seams or machine tests.

The Lighthouse follow-up re-observed the saved-state message and disabled Save
Coordinates control. A same-payload reopen was not completed, because the
sample reopen would fetch the original coordinate-less Lighthouse asset rather
than the in-memory saved payload.

The existing automated fallback and persistence tests remain evidence for
safety semantics, but do not replace these human visual checks.

## Attribution boundary

Known routing, Relation-label, self-loop, and connector presentation issues
remain separate tracks. They are not acceptance failures by themselves. A
coarse-specific failure would require a defect observed only after the opt-in
initial placement and distinguishable from those existing tracks; none was
confirmed in the Lighthouse observation.

## App.tsx responsibility observation

No refactor was made. The current `acceptDataset` orchestration remains a
bounded extraction candidate for a separate checkpoint, but changing it during
human acceptance would obscure the gate result.

## Classification

- Actual Product opt-in integration: PASS from the preceding machine gate.
- Lighthouse EN/JA human acceptance: observed / provisionally acceptable.
- Titanic EN/JA human acceptance: UNCONFIRMED.
- Apollo EN/JA fallback human acceptance: UNCONFIRMED.
- Actual Product opt-in acceptance: NOT CLOSED.
- Product default adoption: HOLD.
