# LiaisonScape Frontier Automatic Display Pending + Cancel Production UX Acceptance 1

Date: 2026-09-16

## Final classification

PENDING + CANCEL UX ACCEPTED FOR PRODUCTION POLICY / DEFAULT SWITCH DEFERRED

The Actual Product staging surface supports a natural pending experience:
the existing Product layout appears first, the active operation is explained,
the graph alone is treated as provisional, and the user can cancel while the
fallback remains usable. This accepts the UX policy for a future production
integration checkpoint. It does not change the current production provider or
default.

## Product policy decision

- Show pending status while a current Frontier operation is active.
- Show Cancel only while pending. Its meaning is to keep the already usable
  current Product layout.
- Do not add a debounce or fixed display delay. The status is lifecycle-driven;
  it is present only during an active operation.
- Use graph-only provisional opacity/saturation treatment. Do not dim or
  disable application chrome, and do not expose partial geometry.
- Keep a cancelled or bounded-fallback explanation until the next operation or
  Dataset acceptance. Invalidation/replacement clears stale terminal state.
- Do not show a success banner. On success, remove the status and provisional
  treatment and return to the ordinary graph presentation after render-only
  position adoption.

## Actual Product evidence

The reproducible artifact is
`../e2r-liaison-scape/experimental/frontier-automatic-display-pending-cancel-production-ux-acceptance1/result.json`.

The campaign used Lighthouse EN, Apollo EN, Titanic EN, and Ashen Crown JA.
All four staging runs reached completion without console errors. Browser
observations included:

- Lighthouse exposed pending at initial, 120ms, and 620ms observations before
  reaching `completed`; the terminal success state removed the status and
  restored graph opacity to 1.
- Apollo showed understandable EN pending copy and Cancel with graph-only
  provisional treatment.
- Titanic provided the slower/label-heavy visual control. Its fallback graph,
  graph labels, viewport controls, and application chrome remained usable.
  The first screenshot exposed a real UI defect: the absolute viewport toolbar
  overlapped the pending status row. The bounded fix moved status outside the
  graph section flow; subsequent DOM geometry and screenshot evidence showed
  the status and toolbar separated.
- Ashen Crown JA completed with the Japanese pending/cancel strings available
  and no console errors.

Navigation-to-completion observations were approximately 969–1239ms, but
include fixture fetch/open overhead and are not solver runtime. They provided
no evidence that a debounce was necessary. The browser Worker is fast enough
that a direct Cancel click can race completion; the existing deterministic
adapter test remains the authority for cancellation and late-result safety.

## Accessibility, viewport, and lifecycle boundary

Pending feedback uses `role=status` and `aria-live=polite`. Cancel remains a
native enabled button and is keyboard reachable under the existing global
`:focus-visible` rule. Application chrome is not globally disabled. The
pending status is outside the graph section so it cannot be covered by the
default viewport toolbar; below 720px it wraps rather than forcing a single
line. A connected-browser viewport override was unavailable, so the narrow
layout claim is source-backed responsive evidence, not a narrow screenshot.

Invalidation/replacement now clears stale terminal display state before a new
Dataset lifecycle. Focused tests continue to prove cancel, failure, stale,
complete-finite-result, and coordinate-authority behavior. Dataset,
stored/mixed Coordinates, persistence, dirty-state, solver, routing, labels,
Self-loop, and manual placement semantics were unchanged.

## Adoption boundary

The pending + Cancel UX policy is accepted for eventual production use. A
separate checkpoint must still wire the already-proven Frontier Worker path
into the normal coordinate-less automatic-display provider and decide the
production rollout/default policy. This checkpoint does not reopen provider
selection or Human Review, and does not implement that default switch.
