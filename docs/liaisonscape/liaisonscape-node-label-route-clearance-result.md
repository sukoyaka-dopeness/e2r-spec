# LiaisonScape Node-Label Route-Clearance Result

Status: accepted application result
Application checkpoint: `e2r-liaison-scape` commit `52d7c2e`
Recorded: 2026-08-20

This document records LiaisonScape application behavior. It does not add
automatic layout, routing, or label-placement behavior to the E2R Core or to
an E2R Extension.

## Hypothesis

Automatic Node-owned labels previously received route pressure only when a
final Relation route sample reached the small hard-clearance region around a
candidate label rectangle. A small, bounded soft halo outside that region
could make the automatic placement react before a route visibly crowds text,
without moving ordinary labels unnecessarily far away.

## Accepted implementation boundary

The change is limited to automatic Node-label scoring in LiaisonScape.

- Existing hard route clearance remains 4 graph units.
- The existing hard penalty remains 80 for each route sample within that
  clearance region.
- A soft halo extends 16 graph units beyond the hard region.
- The soft halo weight is 8 with squared falloff.
- Distance is the shortest Euclidean distance from a final Relation route
  sample to the candidate `LabelRect`; it is zero inside the rectangle.
- Samples outside the halo receive no soft route penalty.

The soft contribution for a sample at distance `d`, where `4 < d < 20`, is:

```text
normalized = (20 - d) / 16
softPressure = 8 * normalized^2
```

There is no self-loop-specific logic and no distinction between incident and
non-incident Relations. Final route samples affect automatic Node-label
placement through the same mechanism for every Relation.

## Responsibility boundary

```text
final Relation routes
    -> Relation-label placement
    -> automatic Node-label placement

labels
    -/-> route generation
```

`routeGraphEdge()`, automatic self-loop candidate scoring and its accepted
10-degree granularity, Relation-label placement, connector behavior, and
`App.tsx` are unchanged. Manual Node-label offsets remain authoritative and
are not automatically displaced.

## Automated validation

At the recorded application checkpoint:

- tests: 154 passed;
- lint: passed;
- build: passed;
- `git diff --check`: passed.

Focused tests confirm that a route outside the halo leaves the preferred
no-route placement unchanged, and that a route just outside the prior hard
region can influence selection deterministically.

## Manual evidence

Manual acceptance confirmed:

- sparse layouts remain broadly similar, with no clear readability regression;
- a nearby ordinary Relation causes anticipatory, but not excessively early or
  distant, automatic Node-label avoidance;
- a single automatic self-loop does not make labels unnaturally distant;
- multiple self-loops retain the existing preference for clearer directions
  within the normal candidate ring;
- when a nearby Node changes automatic self-loop orientation, the automatic
  Node label follows the resulting final route geometry without problematic
  fine oscillation or sudden jumping;
- manually positioned Node labels remain stationary under unrelated automatic
  route changes;
- Entity and Relation drag, selection, hover, label drag, and hard reload
  showed no regression.

## Result

Experiment 2C-1 is accepted. The soft halo closes the gap in which an
automatic Node-owned label could receive no route pressure until a route
entered the hard-clearance region, while preserving the existing bounded
placement model and manual ownership.

## Observations and deferred follow-up

The halo can make the pre-existing cardinal-direction preference more visible
because diagonal candidates may acquire small soft route penalties. This is
an observation only; cardinal preference was not changed.

Dense self-loop enclosure remains intentionally unresolved. This experiment
does not require moving a Node-owned label outside an enclosing cluster. A
separate possible Experiment 2C-2 could evaluate the normal candidate ring
first and only then search a bounded farther ring when every normal candidate
has excessive route pressure; the existing connector behavior could represent
the increased distance.

The observed strength of automatic self-loop recovery toward its preferred
orientation, particularly for the first loop's upward direction, is a separate
2B follow-up and was not changed.

Ordinary Relation avoidance of self-loops may be order-dependent because
routes are generated sequentially and each completed route is appended to
`occupiedPaths`. Earlier Relations cannot react to routes generated later,
while later Relations can react to prior routes. This is a separate routing
follow-up requiring a read-only audit before any change.
