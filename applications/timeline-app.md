# Timeline Application

This document describes ideas for a timeline application built on the E2R Core Specification.

This document is informational and is not part of the E2R Core Specification.

## Purpose

The Timeline Application visualizes Events in chronological order while allowing users to navigate related Entities and Relations.

The application is intended to support both historical and fictional datasets.

## Possible Features

### Timeline View

- Horizontal timeline
- Vertical timeline
- Zoomable timeline
- Infinite timeline
- Multiple timeline layouts

### Time Resolution

Possible resolutions include:

- Era
- Year
- Month
- Day
- Hour
- Minute
- Second

Applications may support additional resolutions through Extensions.

### Event Display

Possible information displayed for each event includes:

- Name
- Description
- Date or time
- Related entities
- Related events

Applications are free to determine how events are presented.

### Entity Navigation

Users may:

- View all events involving an entity
- Jump from an event to related entities
- View an entity's lifespan
- Filter events by entity

### Relationship Navigation

Users may:

- View relationships connected to an event
- Navigate between related entities
- Highlight connected objects

### Filtering

Possible filters include:

- Time range
- Entity
- Event type
- Relation type
- Extension-defined fields

### Multiple Calendars

Applications may support:

- Gregorian calendar
- Historical calendars
- Fictional calendars

Calendar systems should be defined by Extensions rather than the Core Specification.

### Large Datasets

Applications may support:

- Progressive loading
- Virtual scrolling
- Incremental rendering
- Search-first navigation

## Typical Use Cases

Examples include:

- World history
- Character chronology
- Biography
- Investigation timeline
- Project history
- Software development history
- Medical history
- Research history
- Fictional universes

## Relationship to the Core

The Timeline Application should derive its chronological presentation from E2R Events.

The Core Specification does not define how timelines are displayed.

Timeline layout, colors, grouping, filtering, and interaction are application-specific features.

## Editing Workflow

NarrativeLine is designed around Events rather than Entities.

Users naturally think in terms of "something happened" rather than "an object exists". Therefore, creating and editing Events is the primary workflow of the application.

### Event-first Editing

A typical editing flow is:

1. Create an Event.
2. Enter the Event name.
3. Optionally enter a date using the History Extension.
4. Add related Entities.

When a related Entity is entered, the application searches for an existing Entity.

- If an existing Entity is found, it is linked to the Event.
- If no matching Entity exists, a new Entity is created automatically.

This allows users to build a dataset naturally without managing Entity lists in advance.

### Entity Suggestions

When entering related Entities, the application should provide autocomplete suggestions from the current dataset.

For example:

- Create Event "Birth of Oda Nobunaga"
- Related Entity: "Oda Nobunaga"

Later:

- Create Event "Incident at Honnō-ji"
- Typing "Oda..." immediately suggests the existing Entity.

This minimizes duplicate Entities while keeping data entry fast.

### Entity View

The Entity view is primarily intended for browsing and refining existing data rather than creating it.

Each Entity displays:

- Description
- Related Events
- Related Entities (when supported)
- Extensions provided by installed modules

Creating a new Event from an Entity automatically associates that Entity with the new Event.

### Relation Editing

Timeline editing focuses on Events and Entities.

Relations are intentionally minimized in the Timeline application and may be edited in a simplified form.

Rich Relation editing, visualization, and semantic information are expected to be provided by dedicated graph-oriented applications.
