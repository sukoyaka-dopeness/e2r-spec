# Multi-visualization application — pre-implementation research

Date: 2026-09-30
Status: Research and Human design handoff; no application, Extension, or schema adopted

## Product responsibility before chart choice

A possible product task is to **compare a selected set of E2R objects against
explicit, named dimensions and inspect how the same observations appear in
different projections**. A quadrant view can compare two compatible
dimensions; a radar view can compare several. This is coherent as one product
only if the views share object identity, dimension definitions, values, missing
data policy, and provenance. A bundle of unrelated charts would not establish
that responsibility. NarrativeLine explains Event chronology; LiaisonScape
explains connections. Neither currently owns dimension-based assessment.

Start, if selected, with a read-only comparison prototype on explicitly
supplied data. Authoring portable scores first would prematurely fix who owns
the meaning, units, evidence, and revision policy. A read-only prototype may
use application-local, clearly labeled demo observations, but must not imply
that those observations came from the Dataset or write them back.

## Current evidence and ownership

| Source | Current responsibility | Consequence for this research |
| --- | --- | --- |
| [Core](../../spec/core.md) | Entity existence, Event occurrence, directed Relation, identity and optional human text | None defines a score, dimension, or population to compare. A Relation's direction does not supply a numeric value. |
| [Metadata 1.0.0](../../extensions/metadata-extension.md), [History](../../extensions/history-extension.md), [Relative Time](../../extensions/relative-time-0.2.0-draft.md) | Dataset description, temporal record, temporal relations | Dates, duration, and Candidate dates cannot silently become generic chart scores. |
| [Perspective 0.1.0](../../extensions/perspective-extension-candidate.md) | Human-authored sparse non-temporal **Event display order** | The ordinary word “perspective” does not make this Candidate an owner of analytical axes or values. Future expansion would be a separate semantic decision. |
| [Coordinate Draft](../../extensions/coordinate-extension-draft.md) | Numeric Entity/Event positions in Dataset-defined Spaces and Components | Its reusable values could possibly express a domain-specific measured space after a deliberate interpretation decision. Graph X/Y or quadrant pixels do not automatically become assessments; the current draft does not define scoring, normalization, evidence, or repeated observations. |
| [Layout concept](../../extensions/layout-extension.md), [Presentation Draft](../../extensions/presentation-extension-draft.md) | Visual arrangement concepts; LiaisonScape Relation styling | Neither owns the assessed semantic values. A quadrant layout example is a display sketch, not a numeric value contract. Radar polygon geometry is Derived. |
| [Semantic vocabulary research](semantic-vocabulary-architecture.md), [Suite research](e2r-suite-long-term-milestone.md) | Possible axis words and a multidimensional-analysis product direction | Starting hypotheses, not accepted identifiers, units, or data shape. |

The [Roadmap](../../docs/roadmap.md) calls for quadrant/radar exploration but
does not adopt their data model. Existing application-design principles keep
Core data, application views, and editing logic separate. A new interoperable
assessment model, if eventually justified, belongs in an explicitly reviewed
responsibility outside Core; it cannot be smuggled into Perspective,
Presentation, History, or Relative Time because a chart happens to need it.

## What is compared?

| Candidate | Natural use | Limitation / decision |
| --- | --- | --- |
| Entity | Compare durable things, people, resources, or organizations | Strong default for an initial comparison task, but not every Entity admits the same dimensions. |
| Event | Compare occurrences or plans | Plausible for event evaluation; must not turn dates or NarrativeLine display order into generic scores. |
| Relation | Compare connections/assertions | Could be useful for quality or strength of a relationship, but current Core Relations have no standard measure and may be independent assertions. |
| Dataset aggregate | Compare entire projects or networks | Requires explicit aggregation population and algorithm; one Dataset alone is insufficient. |
| User-selected mixed set | Flexible exploration | Entity/Event differences and missing values need a visible comparison contract; not a safe implicit default. |

An initial **Entity-only, user-selected set** is a bounded hypothesis, not an
adopted product decision. Object type and eligible population must be chosen
before UI or schema design. Keep canonical Core IDs as identity; visual labels
and order are presentation.

## Dimension and value contract to decide

Quadrant and Radar could project the same observations, but only after the
following meaning is settled independently of geometry:

- Stable dimension identity versus translated label and vocabulary source.
- A numeric value's author, measured/assessed subject, range, unit, precision,
  directionality (what “higher” means), and whether zero is meaningful.
- Scale comparability and normalization. Radar especially can mislead when
  dimensions have unlike ranges; normalization is a Derived transformation,
  not a silent mutation of Recorded values.
- Missing, unknown, inapplicable, and unassessed values; none should be
  fabricated as zero. Partial polygons and absent quadrant points need policy.
- Multiple observations across time, assessors, or evidence sources;
  selection/aggregation must be explicit rather than a hidden winner.
- The comparison set and which axes appear: temporary application selection
  first, with portable user-authored configuration only if interoperability
  justifies a later separate contract.

If two dimensions' values share this contract, a quadrant point is Derived
from their numeric pair. A Radar spoke is the same dimension value after an
explicit scale transformation. If the chart needs categorical quadrant labels
or an entirely different relationship metric, it is a separate feature and
may not share a single underlying observation model.

### Portable data versus view state

An interoperable Dataset would need explicitly authored observations and
dimension definitions only after a new responsibility/version decision.
Derived projections include normalized values, points, radar vertices,
quadrant labels, sorting, and warning badges. Hover, selected objects, zoom,
active chart, and temporary axis choice are application session/view state.
A saved dashboard or shared comparison configuration is a possible later
portable presentation responsibility, distinct from the observations it
references. No X/Y pixel, polygon vertex, rank, or temporary selection is
recorded merely because a user opens a chart.

## Cedar Observatory as a probe

The new [NarrativeLine showcase candidate](../../../e2r-narrative-line/docs/cedar-observatory-showcase-release-candidate.md)
has seven Events, six Entities, meaningful Entity-to-Entity and Event-to-Entity
connections, three Recorded History dates, qualitative Relative Time, and
direct Calendar/elapsed date Candidates. It can support a Timeline and an
Entity relationship graph from the same Dataset without added semantic fields.
It has **no** dimension definitions, scores, ranges, units, or observations.
The current LiaisonScape Entity graph consumes its six Entity nodes and six
Entity-to-Entity edges, but LiaisonScape's Validator 0.6.0 warns about the
Relative Time 0.2.0 declaration that NarrativeLine's Validator 0.7.0 supports.
This is a consumer-version boundary, not a chart value or a reason to invent
one. The graph also omits Event-related Relations by its existing projection.
For example, assigning “visitor impact” and “preparation effort” values to
the club or telescope would be new Human-authored assessments, not a derivation
from their names, graph degree, or dates. A quadrant or Radar chart of this
Dataset alone would therefore be visually possible only with fabricated or
application-local demonstration values, not a faithful E2R Dataset projection.
The sample stays a NarrativeLine story and is not distorted to solve that gap.

## Human design gate and smallest next experiment

Before implementation, Human should decide:

1. Is the product one **dimension-based comparison workspace** with quadrant
   and Radar as projections of shared observations, or are they separate
   products/features with different data responsibilities?
2. Which subject and user task comes first (Entity comparison is the bounded
   starting hypothesis), and who supplies/owns dimension definitions and
   values?
3. Is a read-only, application-local prototype acceptable to test meaning and
   comprehension before any portable authoring? What explicit example data
   may it use without claiming those values exist in Cedar Observatory?
4. If portability is later required, which observation identity, scale,
   missing/multiple-value, provenance, and configuration rules justify a new
   Extension or a deliberate Coordinate/Perspective revision? This cannot be
   selected from current authority alone.

A minimal research MVP would load an unchanged Dataset, select a small set of
Entities, attach **clearly separate temporary comparison observations** in
the prototype, and toggle two-axis and multi-axis projections with visible
missing-value and scale handling. It would be read-only, have no Dataset
write-back, no schema/Validator changes, and no new app repository until the
Human selects this product boundary. The next checkpoint is a design decision,
separate from NarrativeLine release approval.
