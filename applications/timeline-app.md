# Timeline Application

This document describes ideas for a timeline application built on the E2R Core Specification.

This document is informational and is not part of the E2R Core Specification.

## Purpose

The Timeline Application is an Event-centered editor built on the E2R Core Specification.

It provides chronological visualization through the History Extension while allowing users to navigate related Entities.

Relation editing is intentionally outside the scope of this application.

The application is intended to support both historical and fictional datasets.

## Application Structure

Timeline

↓

Event Detail

↓

Entity Detail

### Time Resolution

Possible resolutions include:

- Year
- Month
- Day

Applications may support additional resolutions through Extensions.

### Event Display

Possible information displayed for each event includes:

- Name
- Description
- Date or time
- Related entities
- Related events
- Selected Event highlighting
- Events without dates appear after dated Events
- Smartphone layout displays date and Event name on separate lines

Applications are free to determine how events are presented.

### Entity Navigation

Related Events are displayed in chronological order.

Entities without related Events are valid.

Users may:

- View all events involving an entity
- Jump from an event to related entities
- View an entity's lifespan

## Relation Management

The Timeline Application does not provide direct Relation editing.

Relations are automatically created and removed as required by Event and Entity editing.

Existing Relations must be preserved during import and export.

Rich Relation editing is expected to be provided by dedicated graph-oriented applications.

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

## MVP Scope

The first MVP focuses on creating and editing Events while gradually building an E2R Dataset.

The initial implementation intentionally minimizes complexity and postpones advanced features until dedicated applications become available.

Included functionality:

- Timeline View
- Event editing
- Entity editing
- JSON import/export
- History Extension support
- Entity autocomplete
- Event creation
- Event editing
- Event deletion
- Entity creation
- Entity editing
- Entity deletion
- History Extension editing
- Entity autocomplete
- Entity Detail
- Relation auto-management
- Empty Dataset template

Excluded from the first MVP:

- Rich Relation editing
- Graph visualization
- Semantic analysis
- Embedding
- Feature Space editing
- Advanced search
- Multi-user collaboration
- Relation editing
- Search
- Filtering
- Drag-and-drop
- Timeline folding
- Multiple calendars
- Approximate time
- Relative time

## Editing Workflow

NarrativeLine adopts an Event-first editing workflow.
NarrativeLine is designed around Events rather than Entities.

Users primarily create and edit Events rather than Entities.
Users naturally think in terms of "something happened" rather than "an object exists". Therefore, creating and editing Events is the primary workflow of the application.

Typical workflow:

1. Create a new Event.
2. Enter the Event name.
3. Optionally enter date and time information through the History Extension.
4. Add related Entities.

When entering a related Entity:

- Existing Entities should be suggested using autocomplete.
- Selecting a suggestion links the existing Entity.
- If no matching Entity exists, a new Entity is automatically created.

This allows datasets to grow naturally without requiring users to manage Entity lists beforehand.

## Entity View

The Entity view complements the Event editor.
The Entity view is primarily intended for browsing and refining existing data rather than creating it.

Each Entity page may display:

- Description
- Related Events
- Installed Extension data
- Related Events
(chronological order)

Each Entity displays:

- Description
- Related Events
- Related Entities (when supported)
- Extensions provided by installed modules

Creating a new Event from an Entity automatically associates that Entity with the new Event.

## Relation Editing

The Timeline application is not intended to be the primary Relation editor.
Timeline editing focuses on Events and Entities.

The first MVP only requires enough Relation functionality to support navigation between related objects.

Rich Relation editing, semantic labels, visualization, and graph operations are expected to be provided by dedicated graph-oriented applications.
Rich Relation editing, visualization, and semantic information are expected to be provided by dedicated graph-oriented applications.

Relations are intentionally minimized in the Timeline application and may be edited in a simplified form.

## Entity Resolution

The Timeline MVP performs simple Entity Resolution while entering related Entities.

The initial implementation only requires:

- Exact string matching
- Autocomplete suggestions

More advanced matching methods, including aliases, embeddings, and AI-assisted suggestions, are intentionally deferred to future versions.

## User Interface Philosophy

The Timeline Application edits only the data it understands.

Unknown Extensions must be preserved.

The editing workflow is independent of the visualization, allowing future Views to share the same editing model.

NarrativeLine is an Event editor presented through a timeline.

The timeline itself is only one possible View of the dataset.

The editing model should remain independent from the visualization so that future versions may provide additional Views, including:

- Timeline
- Calendar
- List
- Gantt
- Sequence

while sharing the same editing workflow and underlying E2R Dataset.

## Future Features

Possible future improvements include:

- Horizontal timeline
- Zoomable timeline
- Drag-and-drop reordering
- Search
- Filtering
- Timeline grouping
- Foldable timeline groups
- Multiple calendar support
- Relative time visualization
- Approximate time support
- ### Filtering
- Time range
- Entity
- Event type
- Relation type
- Extension-defined fields
- ### Time Resolution
- Era
- Hour
- Minute
- Second

## Timeline View (MVP)

The Timeline reserves space for a future search bar.

Search functionality is intentionally excluded from the MVP.

Selected Events should be visually highlighted.

The Timeline App presents Events in chronological order.

The MVP uses a simple vertical layout.

Events are grouped by identical dates.

Example:

1945-08-15
  Event A
  Event B

1945-08-16
  Event C

Each row represents a single Event.

Selecting an Event opens its detail view.

Related Entities are displayed as links.

Selecting a Related Entity opens the corresponding Entity detail view.

## Editing Principles

The Timeline App is a timeline editor rather than a generic JSON editor.

The application edits only the data it understands.

Unknown Extensions must be preserved during loading and saving.

Applications should avoid modifying unrelated portions of the dataset whenever possible.

## Dataset Creation

Applications should provide an Empty Dataset template.

A newly created dataset initially contains no Events, Entities, or Relations.

Creating a new dataset asks the user for a Dataset Title.

The title is stored in metadata.title.

The title is also used as the default filename when saving.

Export and backup operations may append timestamps to generated filenames.

## Save Behavior

Opening a dataset must not modify it.

Ordering keys should only be regenerated when necessary.

Applications should preserve existing ordering keys whenever possible.

Saved JSON should use two-space indentation.

## Deletion

Deleting an Event removes Relations connected to that Event.

Deleting an Entity removes Relations connected to that Entity.

Before deletion, the application should display the number of affected Relations.

Unused Entities are not automatically removed.

## Design Goal

The Timeline Application serves as a reference implementation of the History Extension.

It intentionally focuses on Event editing while preserving the integrity of the underlying E2R Dataset.

Advanced Entity management and Relation editing are expected to be provided by dedicated applications.
