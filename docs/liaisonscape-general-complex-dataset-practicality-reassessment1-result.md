# LiaisonScape General / Complex Dataset Practicality Reassessment 1

Date: 2026-09-17  
Contract: `E2R-LIAISONSCAPE-GENERAL-COMPLEX-DATASET-PRACTICALITY-REASSESSMENT1`

## Classification

**B. PRACTICALITY ACCEPTABLE WITH NON-BLOCKING QUALITY FOLLOW-UPS**

The current Product is practically usable for the evaluated coordinate-less
Dataset flow. Initial Automatic Display supplies an immediately usable Graph,
then runs the accepted Frontier operation asynchronously with visible Pending
and Cancel affordances. Explicit Auto Layout is an explicit Worker/Preview
operation with user-controlled Use/Return semantics and remains Human Check B
`QUALIFIED` rather than a claim of universal layout quality.

The remaining quality items are documented follow-ups, not a newly discovered
release blocker in this reassessment. This result does not authorize public
rollout or change the production default beyond the already accepted source
state.

## Evaluated Product flows

### Initial Automatic Display

For a coordinate-less Dataset the current source path is:

```text
Dataset open
-> settleInitialPlacement immediate fallback
-> Frontier-12 Worker operation
-> Pending + Cancel + Graph-only provisional treatment
-> current complete finite result render-only adoption
```

Current source keeps stored and mixed/partial Coordinates on their existing
authority path. The Frontier result does not write Dataset Coordinates,
persistence, or dirty state. Cancel, failure, stale delivery, replacement,
relevant mutation, and unmount preserve the fallback and do not expose partial
positions.

The live current-source browser surface at
`http://127.0.0.1:5176/e2r-liaison-scape/` confirmed:

- Lighthouse EN: 10 entities / 14 visible relations and the normal Graph
  surface with viewport controls;
- Lighthouse JA: the Japanese `自動配置を計算中…` status and
  `自動配置をキャンセル` were visible while the fallback Graph was usable,
  then the status cleared after completion; and
- Titanic EN: the slower control exposed the fallback Graph, application
  chrome, Pending state, and Cancel while running, then completed with the
  normal Graph surface.

These are practical browser observations, not a browser-independent timing
SLA. The earlier normal-path acceptance matrix also covered Apollo EN,
Titanic JA, and Ashen Crown JA with completion and terminal cleanup.

### Explicit Auto Layout

The current source captures an immutable operation snapshot containing current
working positions, stored/adopted ownership, manual presentation inputs, and
working Pins. It runs the existing Frontier/Product Worker boundary, validates
only a complete current result, and exposes a read-only Preview. Use adopts
positions as working render state and marks coordinates dirty; Return leaves the
pre-operation display unchanged. Save Coordinates remains the persistence
authority.

The accepted Human Check B disposition is `QUALIFIED`: the lifecycle, Pin
constraints, Preview, Save/reload behavior, and user control are accepted, while
Pinned global recovery, Presentation-aware local relaxation, dense Graph-space
separation, Relation-label congestion, and broader Node-label refinement remain
quality follow-ups.

## Practical runtime and responsiveness

The production acceptance artifact reports the normal path as a Worker-backed,
non-blocking operation with immediate fallback and explicit cancellation. The
current browser observations show seconds-order Frontier completion on the
Lighthouse and Titanic controls while the Graph remains usable; the observed
wall time is diagnostic evidence, not a hard SLA. The full current test suite
also completes naturally with `634/634 PASS`.

The relevant execution boundary is therefore practical in the tested envelope:
initial rendering is not held behind Frontier, the main UI remains available,
and cancellation/failure/staleness are fail-closed. Dense runtime and
presentation congestion remain bounded risks rather than proof that ordinary
Dataset opening is unusable.

## Fixture and evidence matrix

| Control | Current evidence | Practicality interpretation |
| --- | --- | --- |
| Lighthouse EN | live 5176 browser + normal-path acceptance artifact | ordinary coordinate-less open is usable |
| Lighthouse JA | live 5176 browser with localized pending/cancel + completion | locale does not block the flow |
| Apollo EN | normal-path production acceptance matrix | ordinary topology/label control completed |
| Titanic EN | live 5176 browser + acceptance matrix | slower/label-heavy case remains usable while pending |
| Titanic JA | normal-path production acceptance matrix | Japanese lifecycle completed |
| Ashen Crown JA | normal-path production acceptance matrix | topology/locale control completed |
| dense / stress controls | existing bounded diagnostic and quality evidence | useful boundary evidence; not a universal release criterion |

The dense controls retain route/label congestion and other quality residuals.
They are not relabeled as clean visual passes, and no new stress campaign was
started here.

## Release-blocker decision

Current evidence supports closing the practicality concern for the accepted
Automatic Display operation: coordinate-less users get an immediately usable
Graph, and the higher-quality operation is asynchronous, cancellable, and
preview/adoption controlled. The remaining layout-quality items should stay
explicitly classified as non-blocking follow-ups under the existing contracts.

This does not declare Explicit Auto Layout quality complete, remove its
`QUALIFIED` Human Review disposition, or close deployment/public rollout. No
new release-blocking defect was reproduced in this reassessment.

## Authority and safety boundary

No authority moved. Stored/authored Coordinates, manual Node placement, Pin
semantics, manual routes and labels, Self-loop presentation, Dataset
replacement, Save Coordinates, persistence, dirty state, Preview, Accept/Return,
and Initial Automatic Display lifecycle remain as previously accepted. No
solver, parameter, routing, label, viewport, or UI behavior was changed.

## Validation and records

- Current full `npm test`: `634/634 PASS`, complete summary, exit code 0,
  natural termination.
- Focused Initial Automatic Display / Explicit Auto Layout / Worker evidence:
  existing `30/30 PASS` final rerun and `72/72 PASS` primary campaign.
- `npm run lint`: PASS.
- `npm run build`: PASS.
- `e2r-spec npm run validate`: PASS.
- `git diff --check`: PASS in both repositories.

The previous Gate 1-3 documents remain historical evidence. This reassessment
records the current accepted state and does not rewrite those historical
classifications. Existing quality follow-ups remain unchanged.

