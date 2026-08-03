# E2R Session 0013

## Date

2026-08-04

## Summary

This session focused on continuing the NarrativeLine MVP implementation while refining both the E2R data model and the application architecture.

Several architectural decisions were clarified before additional features were implemented.

---

## E2R Specification

### New documentation

The following documentation was discussed or created.

* docs/application-design-principles.md
* docs/application-recommendations.md
* docs/identifier.md

Topics included:

* Applications may generate Core Objects.
* Applications may generate derived Relations.
* Human-readable IDs and persistent IDs.
* Dataset identity.
* History Extension recommendations.
* Unknown Date display recommendations.
* Temporary extensions before standardization.

UUID v7 was also discussed as the preferred identifier format for applications while remaining outside the Core specification.

---

## NarrativeLine

### Current implementation

The application now supports:

* Home screen
* Timeline screen
* Event selection
* Event editing
* Entity Detail navigation
* Relation-based lookup from Event to Entity
* Event deletion
* Event creation

The first practical usage of the E2R Relation model has been implemented.

Instead of displaying every Entity, Event Detail now resolves related Entities through Relations.

Event
→ Relation
→ Entity

This represents the first implementation where NarrativeLine behaves as an actual E2R application rather than simply displaying parallel collections.

---

## Data Model

A new Relation model was introduced.

```text
Relation
    id
    sourceId
    targetId
```

Dataset was extended with:

```text
relations: Relation[]
```

The sample dataset now contains Relations linking Events and Entities.

---

## Navigation

A navigation principle became clear during implementation.

Timeline
→ Event Detail
→ Entity Detail

Entity Detail should return to the previously edited Event rather than directly returning to the Timeline.

This preserves editing context and provides a more natural workflow.

A future navigation stack may eventually replace the current single-screen navigation model, but this is outside the MVP.

---

## UI Philosophy

The following editing model was reaffirmed.

Selection and editing are separate operations.

Timeline selection highlights an Event.

Editing begins only after the user explicitly chooses Edit.

This interaction model should remain consistent throughout the application.

---

## Implementation Strategy

Development workflow was refined.

* Modify one file at a time.
* Keep the project compiling after every step.
* Verify behavior before moving to the next file.
* Prefer complete file updates over fragmented patches when a screen becomes moderately complex.

This approach significantly reduced debugging complexity during implementation.

---

## Future MVP Tasks

Current priorities are:

1. Complete Entity Detail editing.
2. Display related Events from Entity Detail.
3. Implement Relation creation.
4. Implement Entity creation.
5. Support JSON import/export.
6. Dataset validation.
7. Navigation refinement.
8. Local persistence.

---

## Long-term Direction

NarrativeLine is evolving into the reference implementation of the E2R ecosystem.

Future applications are expected to share the same E2R dataset while providing different editing experiences.

Examples include:

* NarrativeLine
* LinkScape
* Dataset Explorer
* Extension Editor
* LLM-assisted editing tools

Together these applications are expected to become the foundation of the future E2R Studio ecosystem.
