# Coordinate Extension

The Coordinate Extension defines logical coordinate systems for E2R objects.

Unlike screen layouts or rendering information, coordinates represent positions within an application's conceptual space.

Applications are free to interpret these coordinates in different ways.

Examples in this document may show the Coordinate Extension payload in
shorthand. In a complete E2R Dataset, the payload MUST be stored under
`extensions.coordinate`, either at Dataset level or under a Core Object's
`extensions` field as appropriate.

---

# Goals

The Coordinate Extension aims to:

- Represent logical positions independently of rendering.
- Support multiple coordinate systems.
- Allow multiple visualizations of the same dataset.
- Separate semantic information from presentation.
- Enable reusable spatial layouts across applications.

---

# Design Principles

Coordinate data should represent **meaningful positions**, not pixels.

For example:

- A timeline position
- A graph node position
- A family tree generation
- A geographic location
- A conceptual position
- A spiral position

Rendering decisions such as zoom level, window size, font size, or pixel coordinates belong to Presentation or Application layers.

---

# Coordinate Systems

A Coordinate Extension may define one or more coordinate systems.

Applications may ignore coordinate systems they do not support.

Examples include:

- Cartesian coordinates
- Polar coordinates
- Timeline coordinates
- Tree coordinates
- Geographic coordinates
- Spiral coordinates
- Custom application-defined coordinates

## Coordinate Reference Spaces

A Coordinate Extension MAY define named coordinate reference spaces. A space
identifies the context in which coordinate values are interpreted; it is not a
container to which an Entity or Event belongs.

Dataset-level example:

```json
{
  "extensions": {
    "coordinate": {
      "spaces": {
        "main": {
          "system": "cartesian"
        }
      }
    }
  }
}
```

An object position MAY refer to a space using `spaceId`:

```json
{
  "id": "entity-a",
  "extensions": {
    "coordinate": {
      "positions": [
        {
          "spaceId": "main",
          "x": 120,
          "y": 45
        }
      ]
    }
  }
}
```

The same object may have positions in more than one space. `spaceId` is kept
with a position rather than added to the Core Object, so a space does not become
a fourth Core concept and an object is not forced to belong to one space.

Space deletion, renaming, identifier formats, and transformations between
spaces remain future design topics.

---

# Cartesian Coordinates

Standard X/Y coordinates.

Example applications:

- Relationship graphs
- Network diagrams
- Knowledge maps

Example:

```json
{
  "coordinate": {
    "system": "cartesian",
    "x": 120,
    "y": -45
  }
}
```

---

# Polar Coordinates

Coordinates represented by angle and radius.

Example applications:

- Circular timelines
- Radial knowledge maps
- Influence visualization

Example:

```json
{
  "coordinate": {
    "system": "polar",
    "radius": 15,
    "angle": 120
  }
}
```

---

# Timeline Coordinates

Coordinates based on temporal ordering.

Applications may combine these with History Extension data.

Example:

```json
{
  "coordinate": {
    "system": "timeline",
    "lane": 2,
    "position": 135
  }
}
```

---

# Tree Coordinates

Coordinates optimized for hierarchical structures.

Example applications:

- Family trees
- Taxonomy browsers
- Organization charts

Example:

```json
{
  "coordinate": {
    "system": "tree",
    "depth": 4,
    "index": 7
  }
}
```

---

# Geographic Coordinates

Coordinates representing real-world locations.

Applications may use latitude and longitude or other geographic systems.

Example:

```json
{
  "coordinate": {
    "system": "geographic",
    "latitude": 35.6812,
    "longitude": 139.7671
  }
}
```

---

# Spiral Coordinates

Coordinates arranged along a spiral.

Unlike ordinary polar coordinates, increasing distance follows a continuous spiral path rather than independent concentric circles.

Possible applications include:

- Narrative structures
- Cyclic history
- Recurring events
- Multi-layer timelines
- Fictional worlds with repeating eras

A spiral layout may express both progression and repetition simultaneously.

This coordinate system is particularly suitable for representing worlds in which events revisit similar states while continuing to evolve.

Example:

```json
{
  "coordinate": {
    "system": "spiral",
    "turn": 5,
    "angle": 210,
    "radius": 84
  }
}
```

---

# Multiple Coordinate Systems

An object may contain multiple coordinate systems simultaneously.

For example, the same Entity may have:

- Geographic coordinates
- Graph coordinates
- Timeline coordinates
- Spiral coordinates

Different applications may choose whichever system they understand.

---

# Unknown Coordinate Systems

Applications MUST safely ignore unknown coordinate systems.

This allows future coordinate systems to be introduced without breaking compatibility.

---

# Relationship to Presentation

The Coordinate Extension defines logical positions only.

It does **not** specify:

- Pixel coordinates
- Window layout
- Zoom level
- Camera position
- Animation
- Rendering order

These belong to Presentation Extensions or application-specific implementations.

---

# Future Directions

Possible future coordinate systems include:

- Hexagonal grids
- Three-dimensional coordinates
- Hypergraph layouts
- Semantic embedding spaces
- Positions generated by layout algorithms
- Layered graph layouts
- Geographic projections
- User-defined coordinate systems

The Coordinate Extension intentionally remains open-ended so that new visualization methods can be introduced without modifying the Core specification.

Layout algorithms such as force-directed placement belong to the Layout
Extension. When an algorithm produces positions that are intentionally stored
in a Dataset, those resulting logical positions may be represented by the
Coordinate Extension.
