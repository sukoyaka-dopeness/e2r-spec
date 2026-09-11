# LiaisonScape Initial Layout Same-Payload Reopen Acceptance

Date: 2026-09-11

## Result

The saved-payload reopen requirement is **PASS** for the covered Lighthouse
Actual Product run. A coordinate-less Lighthouse Dataset was opened with the
coarse opt-in, one Entity was dragged, and Save Coordinates was invoked. The
browser was then reloaded with the opt-in and reopen seam; it opened the exact
serialized payload produced by Save Coordinates, not the canonical
coordinate-less fixture.

## Authority and safety evidence

- Before drag: diagnostic reported
  `bounded-provider/coarse-objective-prototype-v1/prototype/completed` and
  Save Coordinates was disabled.
- After drag: the existing temporary-coordinate message appeared and Save
  Coordinates became enabled.
- After Save Coordinates: the existing success message appeared, the save
  control became disabled, and the Dataset was clean.
- After reload: the same payload reopened through the normal Product
  parse/accept path. Diagnostic reported
  `mixed-completion/current-product`, not coarse provider. The dragged
  `lighthouse` Entity retained its saved coordinate; remaining coordinate-less
  Entities followed the existing mixed completion behavior.
- Reopen did not create dirty-state or pending user work. Viewport fit,
  routing, labels, and graph rendering remained available.

This is intentionally a mixed-coordinate authority result: current Product
Save Coordinates persists user-adopted positions, while it does not silently
persist every derived position. It therefore proves stored-coordinate
authority for the saved Entity without changing persistence semantics.

## Bounded seam

The dev-only `acceptance-reopen=saved` seam stores the exact serialized result
of the existing Coordinate writer in session storage and feeds that raw string
back into the existing `open` function after reload. It is not production
persistence, does not alter the canonical fixture, and does not bypass Dataset
validation or acceptance.

## Classification

- Same saved Dataset payload reopen: PASS for the covered Lighthouse run.
- Stored-coordinate authority over coarse opt-in: PASS for the saved Entity.
- Reopen Product interaction: observed as rendered and clean; no new coarse
  visual defect identified.
- Titanic/Apollo visual evidence remains governed by the preceding fixture
  access checkpoint.
- Known routing, Relation-label, self-loop, and connector issues remain
  separate presentation tracks.
- Actual Product opt-in human acceptance: CLOSED / PASS for the bounded scope.
- Product default adoption: HOLD.
