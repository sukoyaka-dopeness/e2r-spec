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
