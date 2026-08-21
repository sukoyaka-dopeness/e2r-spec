# Foreign Graph JSON → E2R Core + Coordinate Conversion

Status: Bounded interoperability experiment; non-normative

Date: 2026-08-21

This document records an interoperability experiment using a practical JSON
export from a prior graph application. It is an observation record, not an
Importer implementation, specification change, or commitment to support a
generic foreign-graph format.

## Experiment question

Can a foreign graph of useful practical size be converted to E2R Core plus
Coordinate data and then used effectively in LiaisonScape, while intentionally
leaving presentation and grouping information unmapped?

## Source graph

The source graph contained:

- 39 nodes;
- 56 edges;
- 8 groups;
- 2 free-form writings;
- node x/y coordinates;
- node color, shape, label position, and subtitle; and
- edge color, one-way / two-way style, custom offset, and label.

The source data was practical user-created content. The source JSON,
converted Dataset, screenshots, and PDFs are intentionally not included in
this repository.

## Conversion used

The bounded conversion mapped:

- node → Entity;
- node name → `Entity.name`;
- node subtitle → `Entity.description`;
- node x/y → canonical `liaisonscape-graph` Coordinate;
- edge → Relation;
- edge label → `Relation.name`;
- each two-way edge → two opposite directed Relations; and
- 56 source edges → 71 E2R Relations.

The converted Dataset contained no Events.

The experiment intentionally did not convert:

- groups;
- node color;
- node shape;
- label position;
- edge color;
- custom offset; or
- free-form writings.

These omissions avoid guessing Core or Coordinate meaning for presentation,
grouping, and application-owned data. They make the conversion explicitly
lossy so that retained and discarded information can be observed separately.

## LiaisonScape result

The result was manually useful:

- the Dataset opened successfully;
- 39 Entities and 71 Relations formed a usable large graph;
- importing the foreign x/y values as `liaisonscape-graph` Coordinates retained
  much of the macro-level layout and spatial clustering;
- at approximately 27% overview, the overall graph structure was inspectable;
- at approximately 72%, Entity names, descriptions, and Relation labels were
  practically readable;
- dense regions contained many Relations, but LiaisonScape automatic routing
  made most of them traceable; and
- the graph remained useful without importing the foreign `customOffset` data.

The interpretation of the foreign coordinate values as
`liaisonscape-user-unit` is an experimental assumption for this Dataset only.
It does not establish generic coordinate-unit compatibility.

## Bidirectional Relation observation

Converting a source two-way edge into two directed Relations preserves its
directional meaning at the Core level. However, the same label may appear in
both directions and become presentation-redundant.

This is a future presentation and interoperability research candidate, not a
decision about Relation semantics or a reason to alter the Core.

## Group observation

The source contains 8 groups. No multiple group membership was observed in the
inspected data, and no nested groups were present. This does not establish
that the source application prohibits multiple membership or nesting.

The observation is insufficient to define Group Entity semantics, membership,
nested grouping, or a Core / Extension boundary. Grouping remains deferred and
must not be promoted from this single experiment.

## PDF side experiment

A separate experiment generated vector PDF output directly from the E2R
Dataset Coordinates. The full 39-Entity / 71-Relation graph could be emitted
as a large single page or tiled A4 pages.

The Dataset does not persist LiaisonScape's runtime-derived automatic Relation
routes or automatic label placement. The simple PDF renderer therefore lacked
the collision handling of LiaisonScape and produced Relation and label overlap
in dense areas.

This overlap is a limitation of the simple PDF renderer. It is not evidence of
a LiaisonScape routing failure, because the renderer did not use LiaisonScape's
routing engine.

## Findings

1. Core graph interoperability was high for this practical example.
2. Foreign x/y Coordinate adoption was useful in this example under an
   explicit experimental unit assumption.
3. Presentation, grouping, and manual-route information were clearly lossy.
4. Faithful layout or PDF reproduction requires more than Core plus
   Coordinate.
5. Foreign `customOffset` is useful material for future Layout interoperability
   research.
6. Foreign group data is useful evidence for future grouping research but does
   not establish Group Entity semantics.
7. The result does not justify implementing a generic importer.

## Relationship to current architecture and roadmap

The result supports the existing boundary in which Core and Coordinate can
carry interoperable existence, occurrence, relation, and bounded spatial
position data, while Layout, Presentation, grouping, and application view
state remain separate concerns.

It does not register a Layout or Presentation Extension, change Coordinate
compatibility rules, change Validator behavior, alter LiaisonScape routing, or
change the public-release roadmap. It is evidence for future bounded
interoperability and Layout experiments only.

## Knowledge Candidate Check

This is one foreign Dataset experiment. It has reuse potential, especially for
foreign-coordinate compatibility and the Core-versus-presentation boundary,
but it is not independently confirmed across multiple repositories or source
Datasets.

Result: no workspace `Decision` or new general rule is promoted. A future
repository-scoped or multi-repository `Hypothesis` may be appropriate if a
second independent foreign graph confirms the same boundary. No new
`ai-knowledge` entry is required for this result.

## Privacy and repository safety

The source and converted data contain user-created content. This repository
stores only structural statistics and technical observations. The original
JSON, converted Dataset, screenshots, and PDF outputs remain outside the
repository.
