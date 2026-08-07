# Layout Extension

The Layout Extension defines how E2R objects should be arranged for visualization.

Unlike the Coordinate Extension, which stores logical positions, the Layout Extension describes presentation rules that determine how those positions are displayed.

Applications may ignore layouts they do not support.

Examples in this document may show the Layout Extension payload in shorthand.
In a complete E2R Dataset, Layout data MUST be stored under
`extensions.layout` at the Dataset level or under a Core Object's `extensions`
field as appropriate.

---

# Goals

The Layout Extension aims to:

- Separate presentation from data.
- Allow multiple layouts for the same dataset.
- Share visualization rules between applications.
- Preserve layout information independently of rendering technology.

---

# Relationship to Coordinate Extension

Coordinate Extension answers:

> Where is this object?

Layout Extension answers:

> How should these objects be arranged and displayed?

For example, a dataset may contain Cartesian coordinates while different Layouts choose to display them using different visual styles.

---

# Scope

The Layout Extension may define:

- Layout type
- Orientation
- Layer ordering
- Grouping rules
- Spacing
- Routing preferences
- Alignment rules
- Display constraints

The Layout Extension does **not** define:

- Pixel positions
- Window size
- Camera position
- Zoom level
- Animation
- Rendering implementation

These remain application-specific.

---

# Timeline Layout

Objects are arranged according to temporal order.

Possible features:

- Horizontal timeline
- Vertical timeline
- Multiple lanes
- Event grouping
- Era grouping

Example:

```json
{
  "layout": {
    "type": "timeline",
    "orientation": "vertical",
    "lanes": 3
  }
}
```

---

# Graph Layout

Objects are displayed as nodes connected by relations.

Possible layouts include:

- Manual placement
- Force-directed
- Layered
- Circular

Example:

```json
{
  "layout": {
    "type": "graph",
    "algorithm": "force-directed"
  }
}
```

---

# Tree Layout

Objects are displayed hierarchically.

Possible applications:

- Family trees
- Taxonomy
- Organization charts

Example:

```json
{
  "layout": {
    "type": "tree",
    "orientation": "top-down"
  }
}
```

---

# Spiral Layout

Objects are arranged along a spiral.

Possible applications include:

- Cyclic narratives
- Repeating historical patterns
- Layered timelines
- Fictional cosmology

Unlike Timeline Layout, Spiral Layout expresses both progression and recurrence.

Applications may choose different spiral models, such as:

- Archimedean spiral
- Logarithmic spiral
- Application-defined spirals

The Layout Extension intentionally does not standardize the mathematical representation.

Example:

```json
{
  "layout": {
    "type": "spiral",
    "direction": "clockwise"
  }
}
```

---

# Quadrant Layout

Objects are positioned within multiple conceptual regions.

Possible applications:

- Decision analysis
- Risk assessment
- Character classification
- Knowledge organization

Example:

```json
{
  "layout": {
    "type": "quadrant",
    "labels": [
      "High",
      "Low",
      "Internal",
      "External"
    ]
  }
}
```

---

# Geographic Layout

Objects are displayed on maps.

Possible features:

- Political maps
- Terrain maps
- Fantasy worlds
- Planetary maps

The underlying coordinates are provided by the Coordinate Extension.

---

# Layered Layout

Objects are separated into visual layers.

Possible uses:

- Background information
- Annotation layers
- Multiple datasets
- Semantic layers

Example:

```json
{
  "layout": {
    "type": "layered",
    "layers": [
      "background",
      "events",
      "annotations"
    ]
  }
}
```

---

# Multiple Layouts

A dataset may define multiple layouts simultaneously.

For example:

- Timeline
- Graph
- Spiral
- Tree

Applications may allow users to switch freely between supported layouts while preserving the same underlying data.

---

# Unknown Layouts

Applications MUST safely ignore unknown layout types.

This allows new layouts to be introduced without affecting interoperability.

---

# Future Directions

Possible future layouts include:

- Hexagonal layout
- Radial layout
- Sankey layout
- Swimlane layout
- Mind map layout
- Calendar layout
- Galaxy layout
- User-defined layouts

The Layout Extension intentionally remains extensible so that new visualization techniques can be introduced without modifying the Core specification.
