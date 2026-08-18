# Automatic Layout Experiment Plan

Date: 2026-08-18

Status: Non-normative experiment-plan checkpoint; production implementation,
Layout schema, and Extension identifier not started

## Scope and purpose

This document records the current experiment plan for Automatic Layout and
Layout interoperability evidence. It does not select a final algorithm or
weights. It distinguishes accepted invariants, current usability evidence,
experiment-required behavior, experiment order, observations, and the path
toward interoperability evidence.

This plan does not change production code, create a Layout schema, select an
Extension identifier, change the Validator, change Dataset Replacement Safety,
or implement Dataset Handoff.

## Accepted invariants

1. Automatic Layout must not override Owned Coordinates.
2. Automatic Entity placement is Derived Coordinate.
3. Automatic Relation routing is Derived Layout.
4. Automatic label placement is Derived Layout.
5. Automatic geometry itself is not persisted into the Dataset.
6. Direct manipulation and automatic generation remain separate; completed
   direct manipulation may establish Owned intent.
7. Incremental stability is a first-class evaluation concern.
8. Small Dataset changes must not cause unnecessary whole-graph shuffling.
9. Current implementation parameters are not a general Layout schema.
10. The automatic algorithm remains changeable through experimentation.

These invariants preserve the separate responsibility and persistence axes
defined by `docs/layout-persistence-responsibility-decision.md`.

## Current usability evidence

The current implementation provides evidence requiring experiments, not fixed
product decisions:

- automatic label placement can jump after small geometry changes;
- label readability and placement continuity may be more important than small
  collision-score improvements;
- Entity-label connector layer ordering may need comparison;
- newly created Entities currently appear near the viewport center and may
  overlap existing Entities;
- spawn visibility, direct drag affordance, and incremental stability trade off
  against one another.

These observations are hypotheses and evaluation inputs. They do not establish
that current behavior is a bug or that a particular algorithm is accepted.

## Experiment order

### 1. Label stability

Compare placement hysteresis, previous-placement stability cost, acceptable
movement limits, collision behavior, and continuity after small Dataset
changes. Observe jump frequency, displacement magnitude, collision frequency,
readability, and placement continuity. Animation is an optional observation,
not the fundamental solution.

### 2. Entity-label connector

Compare current layer behavior with connector-behind-icon behavior, proximity
suppression, and geometry-overlap/contact suppression. Evaluate readability
and connector visibility without persisting connector results.

### 3. Automatic Relation routing

Evaluate node clearance, obstacle avoidance, edge crossing, edge length, and
excessive detours. Do not turn a larger curvature or clearance value into an
accepted constant without evidence.

### 4. Entity drag threshold and return-to-origin snap

Treat the current 4 CSS-pixel gesture recognition threshold as implementation
evidence, not a fixed design value. Separately experiment with meaningful
displacement threshold and return-to-origin snap radius. These are distinct:

```text
drag recognition threshold
meaningful displacement threshold
return-to-origin snap radius
```

At meaningful completion, Entity movement may be adopted and incident ordinary
Relation manual curvature may be removed so routing returns to automatic. A
snap to the original position should preserve the original position and
curvature. Escape and pointer cancellation restore both.

### 5. New Entity spawn

Compare viewport-center spawn, nearby-free-position spawn, and limited local
adjustment around new or nearby Derived Entities. Evaluate visibility,
immediate drag affordance, graph stability, overlap frustration, and unexpected
large movement.

### 6. Derived Entity avoidance

Compare no avoidance, local avoidance, and limited avoidance around Owned or
actively dragged Entities. This remains an experiment, not an accepted policy;
the user's expectation that Derived Entities do not continually move away must
be measured.

### 7. Broader automatic-layout scoring

Evaluate Owned-position preservation, incremental stability, node overlap,
label stability, label collision/space, edge crossing, edge length, and node
clearance. Preserve Owned positions and prioritize incremental stability before
selecting other weights. Scoring formulas and weights remain experiment
required.

## Manual movement interaction experiment

For an ordinary Relation with manual curvature, an Entity drag follows this
conceptual sequence:

```text
drag start
  -> snapshot manual curvature
  -> temporarily remove it from active routing
  -> display automatic routing during the drag
pointerup with meaningful movement
  -> accept Entity Coordinate movement
  -> remove old manual curvature
  -> return to automatic routing
pointerup with origin snap / no meaningful movement
  -> preserve manual curvature
Escape / pointercancel
  -> restore Entity position and manual curvature
```

Self-Relations remain distinct: object-relative orientation and radius are
candidate Owned intent and follow Entity movement rather than being erased by
it. Numeric thresholds remain unresolved.

## Layout representation experiment

After the UX experiments, representation evidence should focus on intent rather
than renderer-specific pixel geometry:

- ordinary Relation curvature intent;
- self-loop orientation and radius;
- Entity label anchor;
- Relation route-relative label anchor.

Compare object-relative representation, absolute-pixel representation, and
automatic-result-relative offset after geometry changes. No representation is
selected by this plan.

## Interoperability evidence ladder

The following is an experiment-planning ladder, not a normative maturity model:

1. LiaisonScape can persist and reopen the experimental Layout.
2. A specification-only virtual renderer can interpret Dataset plus Layout
   intent without LiaisonScape code or screenshots.
3. A minimal independent renderer can reproduce the same intent using its own
   geometry implementation.
4. NarrativeLine or another Layout-unaware application round-trips the payload
   without destroying it.
5. Validator behavior distinguishes supported, unsupported, malformed, and
   unknown states.
6. Partial support or a second real consumer provides additional evidence.
7. A representation review can assess whether a general Layout Draft is
   justified.

An LLM virtual renderer is evidence of interpretability, not final proof of a
general Layout formalization. A minimal independent renderer must not reuse
LiaisonScape's route or label implementation. Pixel-perfect reproduction is not
the criterion; preservation and interpretation of authorial intent are.

## Automatic Layout quality observations

Future observations should include node overlap, edge crossing, edge length,
label space and collision, incremental stability, label movement, and Owned
position preservation. The current evidence especially prioritizes incremental
stability and label stability. Algorithm weights remain open.

## Relationship to existing work

The Layout responsibility boundary remains in
`docs/layout-persistence-responsibility-decision.md`. Coordinate and Layout
remain separate. The Hub roadmap is not changed by this experiment plan; Hub
work may proceed independently.

## Explicitly unresolved

- drag threshold numeric value;
- meaningful displacement numeric value;
- return-to-origin snap radius;
- automatic-layout scoring weights;
- label-stability scoring formula;
- routing-clearance value;
- Derived Entity avoidance policy;
- New Entity final spawn policy;
- exact Layout identifier;
- exact Layout schema;
- exact label-anchor vocabulary;
- Stable Layout registration.

## Non-goals

No production code, LiaisonScape UI change, automatic-layout implementation,
routing or label tuning implementation, threshold or snap implementation,
Layout schema, Layout identifier, Validator change, NarrativeLine change,
Dataset Replacement Safety implementation, Dataset Handoff implementation, or
Hub implementation is included.
