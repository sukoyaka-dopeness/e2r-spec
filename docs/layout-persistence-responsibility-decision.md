# Layout Persistence Responsibility Decision

Date: 2026-08-18

Status: Non-normative design checkpoint; Layout schema and implementation not
started

## Scope

This checkpoint records the agreed responsibility and persistence boundaries
for a future LiaisonScape-owned, authority-qualified experimental Layout
persistence experiment.

It does not create a Layout Extension schema, select a final experimental
identifier, change production code, change the automatic layout algorithm,
modify Coordinate writing, change the Validator, or implement Dataset
Replacement Safety.

## Two independent axes

Responsibility and persistence are separate axes:

```text
Responsibility: Coordinate / Layout / Presentation / Application View State
Persistence:    Derived / temporary adjustment / Owned / Application-only
```

They must not be collapsed. For example:

```text
automatic Relation route
Responsibility = Layout
Persistence = Derived
```

Layout does not inherently mean Owned, and Derived does not inherently mean
Application-only. Persistence depends on whether the user has intentionally
adopted an outcome.

## Accepted UX principle

```text
Observation must not author.
Direct manipulation should usually author when the gesture is meaningfully completed.
```

Observation, selection, focus, hover, zoom, pan, modal state, and temporary
focus presentation do not author Dataset content. Meaningfully completed
direct manipulation may establish authoring intent. Intentional adoption does
not necessarily require a separate Save Layout button; the interaction and
its completion semantics may establish adoption.

## Accepted classifications

### Selection and focus

Selection, focus, hover, temporary front presentation, and blank-canvas
deselection are Application View State. Selection-derived `bringToFront` does
not establish persistent layer-order authoring.

### Automatic Entity placement

Automatic Entity placement is:

```text
Responsibility = Coordinate
Persistence = Derived
```

Opening a Dataset does not by itself make automatically generated positions
Owned. Automatic placement remains subject to future algorithm and usability
experiments.

### Direct Entity movement

A meaningfully completed user drag of an Entity is an accepted direction for
adopting that Entity's Coordinate as Owned. Other automatically placed
Entities remain Derived. The existing Coordinate write safety and fail-closed
behavior remain in force.

Coordinate provenance such as auto-generated, manually dragged, or writer
identity is not added by this checkpoint.

### Relation routing and curvature

Automatic Relation routing is Layout/Derived and is not persisted by itself.

A meaningfully completed direct manipulation of ordinary Relation curvature is
an Owned Layout candidate. The persistence target is a source-to-target,
object-relative placement or curvature intent, not final renderer pixel
geometry. Exact field names and schema are deferred.

For ordinary Relations, moving an endpoint temporarily removes an existing
manual curvature override from active routing during the drag. At pointer-up,
if the Entity moved meaningfully, the endpoint movement is accepted and the
old manual curvature is removed so routing returns to automatic behavior. If
there is no meaningful displacement, or the gesture is canceled by Escape or
pointer cancellation, the previous override is retained or restored.

The meaningful-displacement threshold remains undecided.

Self-Relation layout is separate. Object-relative orientation and radius or
distance are Owned candidates. Moving the Entity alone does not erase a
self-loop manual override. Exact representation is deferred.

### Label placement

Automatic Entity and Relation label placement is Layout/Derived.

Meaningfully completed direct label movement is an Owned Layout candidate, but
the persisted value should express intent rather than raw absolute pixels:

- object-relative anchor;
- route-relative anchor;
- relative distance or offset;
- preferred placement intent.

Actual label position remains Derived from the intent and current geometry.
Collision avoidance may adjust the rendered position. Exact priority and
scoring are deferred.

Entity-label connectors are Derived rendering behavior, not an Owned Layout
payload by themselves.

### Layer ordering

Current selection and interaction `bringToFront` results remain Application
View State. Persistent authorial layer ordering is not yet selected and
requires a meaningful authoring interaction. No Front/Back UI or serialization
mechanism is introduced by this checkpoint.

### Return to Automatic

Return to Automatic means removing an Owned manual override through Dataset
authoring. It does not mean persisting the current automatic geometry. After
removal, actual geometry is generated again as Derived state.

## Preservation and interoperability boundary

If LiaisonScape later writes an experimental Layout payload, applications that
do not understand it must preserve it as unknown Extension data whenever
practical. This follows the existing E2R unknown-Extension preservation
boundary.

The future experiment should test preservation through NarrativeLine,
Validator handling of unknown or unsupported declarations, and a possible
second consumer. This checkpoint does not define the payload or declaration.

Description visibility is outside this Layout checkpoint. A user-wide display
preference is Application state; Dataset-specific author intent about whether a
description is shown is a possible Presentation persistence concern.

## Deferred and experiment-required questions

The following are intentionally unresolved:

- exact experimental Layout identifier;
- exact JSON schema and payload placement;
- ordinary Relation curvature fields;
- object-relative label-anchor vocabulary;
- meaningful-displacement threshold;
- Derived-Entity avoidance around Owned Entities;
- automatic-layout scoring, weighting, and algorithm;
- label collision priorities;
- persistent layer-order authoring mechanism;
- Coordinate provenance or origin tracking;
- automatic migration;
- Stable Layout registration;
- Presentation Extension identifier and schema.

Automatic layout quality should be evaluated independently, including node
overlap, edge crossing, edge length, label space/collision, incremental
stability, and preservation of Owned positions. No behavior is fixed here for
Derived-Entity avoidance or Owned-Entity overlap.

## Relationship to Dataset Replacement Safety

This checkpoint does not change Dataset Replacement Safety D1-D7. During a
future implementation, completed direct manipulation that has not yet been
safely committed may contribute to `pendingUserWork`. Once explicitly adopted
into the Dataset, the resulting Dataset change may contribute to
`datasetModified` according to the D1-D7 policy.

## Non-goals

This checkpoint does not include production code, LiaisonScape UI changes,
automatic layout implementation, routing or label tuning, Coordinate writer
changes, removal of Save Coordinates, Dataset Replacement Safety or Handoff
implementation, Layout or Presentation schema creation, Validator changes,
Extension registration, Stable identifier selection, autosave, recovery
redesign, or undo/redo.
