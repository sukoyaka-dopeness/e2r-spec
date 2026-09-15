# LiaisonScape Representative Sample Release-Quality Acceptance 2 - Ashen Crown Acquisition Evidence

Date: 2026-09-15

## Classification

`B. GATE 1 ACCEPTED WITH BOUNDED NON-BLOCKING SAMPLE FOLLOW-UPS`

The missing Ashen Crown acquisition evidence is now closed for the
representative canonical sample scope. Gate 1 is accepted in a bounded sense,
with the previously observed Titanic/Apollo route and Relation-label crowding
retained as non-blocking sample follow-ups. This does not close the Initial
Layout Release blocker, adopt a provider, or establish visual Human Review.

## Scope and authority

This is a continuation of Representative Sample Release-Quality Acceptance 1,
not a new Initial Layout or presentation solver checkpoint. The acceptance-only
development seam was extended to expose the existing canonical Ashen Crown
files. The normal Product sample loader, public sample inventory, Hub sample
UI, Dataset semantics, persistence, coordinate ownership, routing,
Parallel/Incident allocation, endpoint-plan, Relation-label, Node-label, and
Self-loop authorities were not changed.

The following remain unchanged:

- quality solver: `HOLD / NOT ESTABLISHED`;
- production provider: `NOT ESTABLISHED`;
- Product integration/default: `HOLD`;
- Human Review: `NOT READY`;
- Initial Layout Release blocker: `OPEN`;
- Adaptive Initial Placement Cascade: inactive.

No prior Human Review evidence was inherited by this Ashen Crown check.

## Canonical source and placement boundary

The canonical sources are:

- `examples/ashen-crown.en.e2r.json`;
- `examples/ashen-crown.ja.e2r.json`.

Both files passed the existing e2r-spec validation. Each contains 10 Entities,
12 Events, and 57 Relations, and neither contains stored Coordinate data. The
Product therefore used the existing coordinate-less Derived/Fast placement
path. No explicit High-quality Auto Layout operation was invoked.

The development-only LiaisonScape endpoint maps the stable acceptance name
`ashen-crown` to those canonical files for `en` and `ja`. The endpoint remains
development-only; it does not duplicate payload content, change the normal
loader, or publish Ashen Crown as a Product sample.

## Actual Product evidence

The exact Product surface was inspected in a fresh local browser using:

- `?acceptance-fixture=ashen-crown&acceptance-locale=en`;
- `?acceptance-fixture=ashen-crown&acceptance-locale=ja`.

Both locales opened to a stable graph and survived reload. The Product graph
reported 10 Entities and 17 visible Entity-to-Entity Relations; 40
Event-involving Relations remained hidden according to the existing Product
projection. English displayed `The Ashen Crown`; Japanese displayed the
canonical Japanese title and Japanese Entity/Relation text. No mojibake, blank state,
crash, navigation failure, or obvious Node-body overlap was observed.

The initial overview was readable enough to identify the topology. Native
Product zoom from approximately 84% to 92% improved local inspection in both
locales. The central graph remains dense: several ordinary routes and
Relation-labels approach one another, so not every label is simultaneously
comfortable at overview scale. This is recorded as a bounded presentation
observation, not a catastrophic release failure. Browser pan automation was
not reliable enough to claim formal pan evidence.

| Sample | Locale | Acquisition | Result | Evidence |
| --- | --- | --- | --- | --- |
| Ashen Crown | EN | development-only canonical acceptance seam | `PASS WITH BOUNDED NON-BLOCKING FOLLOW-UP` | stable 10/17 Product graph; no body overlap, blank/crash state, or mojibake; central route/label density remains inspectable |
| Ashen Crown | JA | development-only canonical acceptance seam | `PASS WITH BOUNDED NON-BLOCKING FOLLOW-UP` | stable Japanese Product graph and title; reload continuity confirmed; no body overlap, blank/crash state, or mojibake; central route/label density remains inspectable |

The small Actual Product smoke check was completed before this gate decision.
It is evidence for this checkpoint only and is not formal visual acceptance.

## Same-payload Save/reopen disposition

Same-payload Save/reopen was not repeated in this checkpoint. It is not a
required condition for closing this representative acquisition/rendering gate:
the gate asks whether canonical representative samples can be acquired and
inspected on the current Product surface, while Dataset persistence and
Coordinate Save authority are separate workflows already covered by source
tests and prior evidence. The browser evidence therefore makes no claim that
an in-memory saved Ashen Crown payload was reopened. A future persistence
acceptance may still require that explicit workflow if its scope demands it.

## Gate decision and next position

Gate 1 is accepted with bounded follow-ups. The complete canonical sample set
now has acquisition evidence for Lighthouse, Titanic, Apollo 11, and Ashen
Crown in EN/JA, using the normal Product path where available and the
development-only seam where required. The bounded follow-ups are:

- central route/Relation-label crowding in Titanic, Apollo 11, and Ashen Crown;
- formal pan evidence was not established by this browser run;
- same-payload Save/reopen remains a separate, unclaimed persistence check.

These follow-ups do not justify a new placement solver, a production provider,
or a change to Product authority. Gate 2, `General / Complex Dataset
Practicality Gate`, remains not started and may be considered next, but was not
started here. Deep occupied geometry, Relation-label solver refinement, HQ
metric refinement, solver portfolio work, Worker research, Adaptive Cascade,
and Self-loop-specific research remain deferred.

No knowledge candidate is added: this checkpoint records release-specific
sample evidence and an acquisition seam, not a reusable cross-repository
principle.
