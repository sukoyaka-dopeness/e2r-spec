# E2R Session 0041 - Automatic Self-Loop Node Avoidance Checkpoint

Date: 2026-08-20

## Scope

This session completed the LiaisonScape automatic self-loop node-avoidance
workstream. The implementation remains application-level and non-normative.
No E2R Core, Dataset, Coordinate, Layout, export, or persistence semantics
were changed.

## Experiment 2B - Automatic self-loop node avoidance

Automatic self-Relations now evaluate a bounded set of full-circle orientation
candidates when nearby Nodes create pressure. The owner Entity is excluded
from the pressure calculation. The accepted granularity is:

- 10-degree angular steps;
- 36 candidates covering the full circle;
- Node pressure sampled at 41 points;
- normalized squared penetration as the pressure metric;
- preferred-orientation weight 0.05.

The self-loop radius is unchanged. Manual orientation and radius ownership,
parallel Relation distribution, endpoint attachment geometry, arrowhead
presentation, and ordinary Relation routing remain unchanged.

Candidate scoring intentionally excludes occupied-path pressure. Hysteresis,
pointer-state branches, and radius adaptation were not introduced. Similar
escape directions and some residual self-loop overlap remain acceptable within
this bounded workstream.

## Acceptance result

Manual acceptance confirmed:

- automatic self-loop Node avoidance;
- 10-degree angular granularity;
- no unstable orientation popping;
- return toward the preferred orientation after pressure is removed;
- acceptable performance;
- manual placement and automatic reset behavior;
- parallel self-loop behavior.

## Checkpoint commits

LiaisonScape commit: 483479e feat: add automatic self-loop node avoidance

e2r-spec commit: 0cebf99 docs: record automatic self-loop avoidance result

Both commits are local and unpushed.

The bounded result document is:

docs/liaisonscape-automatic-self-loop-node-avoidance-result.md

## Validation

- LiaisonScape tests: 152 passed;
- LiaisonScape lint: PASS;
- LiaisonScape build: PASS;
- LiaisonScape git diff --check: PASS;
- e2r-spec npm run validate: PASS;
- e2r-spec git diff --check: PASS.

## Knowledge handoff

The accepted application decision is indexed in the workspace-level
ai-knowledge directory:

decisions/liaisonscape-automatic-self-loop-node-avoidance.md

The entry points to the e2r-spec result document as its source of truth and
records the deferred work. The workspace root is not Git-managed, so this
knowledge entry was not committed.

## Deferred work and return boundary

The following remain outside this checkpoint:

- Node-owned label route-clearance refinement;
- radius adaptation;
- occupied-path pressure;
- orientation hysteresis;
- connection-handle work;
- direct unselected Relation drag;
- future Entity shapes.

Future work must continue to treat self-loop avoidance as LiaisonScape
application behavior, not as an E2R Core rule or persistence requirement.

## Next recommended bounded workstream

Proceed to a read-only Node-label route-clearance audit before changing label
placement. Keep self-loop orientation selection, attachment geometry, arrowhead
presentation, placement ownership, and reset behavior outside that audit unless
new evidence requires a separate bounded experiment.
