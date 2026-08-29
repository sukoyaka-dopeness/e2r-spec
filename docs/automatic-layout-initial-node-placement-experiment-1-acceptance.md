# Automatic Layout Initial Node Placement Experiment 1 Acceptance

Date: 2026-08-29

Status: ACCEPTED / COMPLETE for the bounded EXP1 scope

## Scope and authorities

EXP1 accepts only fresh automatic Entity placement using deterministic
nearest-free search. The authority documents are:

- `docs/automatic-layout-initial-node-placement-design.md` (Design1); and
- `docs/automatic-layout-initial-node-placement-experiment-1-result.md`
  (implementation result).

The implementation commits are LiaisonScape `866b298` (`feat: avoid initial
entity overlap`) and `320dfc2` (bounded whitespace cleanup). The result
document commit is e2r-spec `d3096fe`.

## Automated baseline

LiaisonScape passed `npm.cmd test` with 266 tests, `npm.cmd run lint`,
`npm.cmd run build`, and `git diff --check`. e2r-spec validation also passed.
The test runner emitted an existing WebSocket port-in-use diagnostic during
some UI tests, but all 266 tests passed and the command exited successfully.

## Human browser environment and evidence

Acceptance used a dedicated real Chrome window serving the local LiaisonScape
development application. The operator supplied the physical mouse, wheel, and
keyboard actions. CDP was used only for read-only observation and native-dialog
state inspection; prior programmatic smoke was not counted as physical
evidence. Native confirmation dialogs encountered during replacement/navigation
were handled by the operator and did not remain open. No browser screenshot was
retained as a repository artifact.

Evidence labels:

- `HUMAN-PHYSICAL`: operator mouse, wheel, keyboard, or menu action;
- `READ-ONLY-INSPECTION`: DOM/CDP or visible-state observation;
- `AUTOMATED`: tests, lint, build, or source evidence; and
- `PROGRAMMATIC-SMOKE`: earlier programmatic evidence, not used as a substitute
  for required physical interaction.

Datasets used were a new empty Dataset for A1 and the LiaisonScape sample
Dataset for blocker, viewport, stored Coordinate, replacement, reload, and
regression checks.

## Acceptance matrix

| Item | Result | Evidence and record |
| --- | --- | --- |
| A1 Empty graph | PASS | HUMAN-PHYSICAL; Entity appeared near center, with no blank/error |
| A2 Free desired spawn | PASS | HUMAN-PHYSICAL; center placement was retained and prior Entity stayed fixed |
| B1 Single blocker | PASS | HUMAN-PHYSICAL; new Entity used a nearby non-overlapping position |
| B2 Repeated creation | PASS | HUMAN-PHYSICAL; three sequential creations showed no overlap, reshuffle, or freeze |
| B3 Multiple blockers | PASS | HUMAN-PHYSICAL; bounded free placement completed and blockers stayed fixed |
| C1 Physical pan | PASS | HUMAN-PHYSICAL; spawn followed the current visible viewport |
| C2 Physical zoom in | PASS | HUMAN-PHYSICAL; placement remained visible and natural without scale error |
| C3 Physical zoom out | PASS | HUMAN-PHYSICAL; placement remained visible and natural without large jump |
| D1 Explicit free placement | PASS | HUMAN-PHYSICAL; context-menu point was retained and Coordinate save became pending |
| D2 Explicit overlapping placement | NOT TESTED | Safe occupied-point initiation through the real UI was not established; D1 passed |
| E1 Stored Coordinate stability | PASS | HUMAN-PHYSICAL + AUTOMATED/source evidence; stored sample Entity stayed fixed |
| E2 Dragged unsaved Entity | NOT TESTED | A dedicated post-drag creation check was not separately run; no failure inferred |
| F1 Automatic placement safety | PASS | HUMAN-PHYSICAL + AUTOMATED/source evidence; no Coordinate-only pending state was introduced |
| F2 Explicit placement safety | PASS | HUMAN-PHYSICAL + AUTOMATED; explicit placement remained save-pending |
| G1 Dataset replacement | PASS | HUMAN-PHYSICAL; confirmation, replacement, and normal recovery completed |
| G2 Reload/reopen | PASS | HUMAN-PHYSICAL; sample reopened, new automatic Entity was not restored as serialized data |
| H1 Entity selection | PASS | HUMAN-PHYSICAL; selection worked; scrollbar layout shift was noted, not Entity movement |
| H2 Entity drag | PASS | HUMAN-PHYSICAL; drag worked and Coordinate save became pending |
| H3 Relation rendering | PASS | HUMAN-PHYSICAL; Relation lines and boundary connections remained visible |
| H4 Relation selection | PASS | HUMAN-PHYSICAL; intended Relation selected |
| H5 Entity Detail | PASS | HUMAN-PHYSICAL; opened and closed without Dataset edit |
| H6 Relation Detail | PASS | HUMAN-PHYSICAL; opened and closed without Dataset edit |
| H7 Locale switch | PASS | HUMAN-PHYSICAL; language switched without graph regression |
| H8 Home → Workspace | PASS | HUMAN-PHYSICAL; sample reopened and confirmation dialog was handled normally |
| H9 Workspace → Home | PASS | HUMAN-PHYSICAL; navigation completed without blank/error |

The required threshold is satisfied. D2 and E2 are explicitly NOT TESTED for
bounded UI reasons permitted by the acceptance criteria; no major required flow
remains unverified.

## Accepted behavior and invariants

EXP1 accepts Entity-body collision avoidance with body `64 x 64`, safety margin
`12`, eight directions, and a maximum of eight rings. The desired spawn is the
current visible viewport center in graph coordinates. Existing positions are
never moved. The search is deterministic and bounded, and visible graph-space
bounds are respected.

Explicit canvas placement bypasses the automatic solver and preserves user
intent. Compatible stored Coordinates retain precedence. Automatic placement
does not set `coordinatesDirty`, create Coordinate-only pending work, mutate
the Dataset through the solver, or serialize an algorithm result. C, the local
adjustment of existing Derived Entities, remains unresolved and unimplemented.

No Coordinate schema, Layout schema, Entity ownership model, general automatic
layout semantics, Validator behavior, or roadmap rule is introduced by this
acceptance.

## Known limitations and exclusions

The bounded solver does not consider labels, Relation paths, or Relation labels.
When every bounded candidate is occupied, it deterministically falls back to the
desired point. D2 and E2 remain NOT TESTED for the reasons recorded above.

No runtime, test, schema, Validator, roadmap, sample, version, Presentation,
release, push, or deployment change was made by this acceptance checkpoint.

## Repository state and conclusion

LiaisonScape remained clean and unpushed at the implementation commits.
e2r-spec was clean before this document and contains only this acceptance
document for the current checkpoint. The existing
`ai-knowledge/playbooks/e2r-edge-cdp-browser-diagnostic.md` dirty change was
preserved and not edited, staged, committed, restored, reset, stashed, or
overwritten.

EXP1 is formally ACCEPTED / COMPLETE within the bounded scope above. The next
checkpoint was not started. STOP.
