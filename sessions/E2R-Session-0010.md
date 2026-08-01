## Repository Naming

The Relationship Graph application repository will be named:

- e2r-linkscape

The application name is **Linkscape**.

This name was chosen to avoid confusion with the E2R Core concept `Relation`, while expressing a landscape of interconnected nodes. The lowercase spelling `Linkscape` was preferred over `LinkScape` for consistency with common naming conventions.

## E2R Studio

A new repository, **e2r-studio**, will serve as the entry point to the E2R ecosystem.

Its goals are:

- Introduce the E2R specification.
- Provide access to all E2R applications.
- Showcase sample datasets.
- Offer documentation and tutorials.
- Act as a playground for exploring E2R datasets.

The Studio is not an editor itself, but the central hub for the E2R ecosystem.

## NarrativeLine Implementation Progress

### Completed

- Created the initial project structure.
- Defined AppState.
- Created Dataset, Event, and Entity models.
- Created NavigationService.
- Created HomeScreen, TimelineScreen, and EventDetailScreen.
- Added sampleDataset.
- TimelineScreen displays sample events.
- App now begins passing sampleDataset to TimelineScreen.

### Next

- Update TimelineScreen to receive Dataset via props.
- Remove direct dependency on sampleDataset.
- Navigate from Timeline to Event Detail.
- Display selected Event information.

## Progress (2026-08-01)

### NarrativeLine MVP implementation

The Timeline MVP implementation progressed from architecture to an interactive prototype.

Implemented features:

* AppState-based screen navigation
* HomeScreen → TimelineScreen transition
* Dataset injection into TimelineScreen
* Event list rendering
* Event selection
* Event creation
* Event name and description editing
* Simple `date` field added for MVP
* Timeline list now displays `date + event name`
* Description is displayed only for the selected event
* Timeline layout improved with a fixed-width date column

Current Timeline example:

```text
1969-07-20  Moon Landing
            Apollo 11 landed on the Moon.

----/--/--  New Event
```

The current `date` property is intentionally a temporary MVP field.

Future versions should migrate to the History Extension:

```text
Event.date
        ↓
extensions.history.time.value
```

This minimizes implementation complexity while preserving compatibility with the E2R specification.

### UI direction

The previous Event Details section below the list proved less practical than expected.

The preferred direction is now:

* Timeline list as the primary interface
* Selected event expands within the list
* Editing performed through an Event Detail dialog or dedicated editor

This aligns better with the planned `DialogService` architecture.

### CSS cleanup

The project still contains portions of the default Vite CSS.

Future cleanup should:

* remove remaining template-specific styles
* keep global styles inside `index.css`
* move screen-specific styling closer to each screen when appropriate

### Next implementation targets

Priority for the next session:

1. Event Detail editor (dialog or dedicated screen)
2. Editable date field
3. Metadata title (`dataset.metadata.title`) displayed as the Timeline title
4. Replace temporary `date` with History Extension
5. Timeline sorting by date

The current implementation is now sufficiently complete to shift from application skeleton development toward refining the user experience.
