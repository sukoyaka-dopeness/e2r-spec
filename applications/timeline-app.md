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
