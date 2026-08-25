# Cross-Project E2R Lineage Applicability

Status: Exploratory / Research Seed

This document records a small, non-normative hypothesis about whether E2R can
describe lineage across independently designed projects. It does not change
the E2R Core, register an Extension, change an application contract, or decide
that any existing project should migrate to E2R.

## Research question

Can E2R represent several independently designed projects as different forms
of lineage without changing the E2R Core?

## Initial observation

The initial comparison uses four project lineages named for this research seed:

### Narrative lineage — Forklore Galaxy

The initial hypothesis is that story nodes, branching histories, alternative
canons, and bridges between narrative elements may be expressible as Events,
Entities, and Relations. History may be relevant where an in-world temporal
ordering is part of the project.

This suggests a possible distinction between a chronological Timeline view and
a branching or relationship-oriented view of the same Dataset. That is a
research hypothesis, not a prescribed application architecture.

### Creative lineage — ECHO / forque

The initial hypothesis is that creative influence, derivation, parallel work,
response, homage, contrast, sampling, forks, and collaboration may be
represented through project/work Entities, creation or release Events, and
Relations expressing the relevant connection.

External identifiers and Internet-scale relations may require separate Target
Reference research. This seed does not define such a representation.

### Epistemic lineage — Context Engine Lab

The initial hypothesis is that claims, evidence, disagreement, revision,
replication, and consensus change may use Entities, Events, and Relations as a
partial structural description.

More precise epistemic meaning may depend on Source/Citation, Target
Reference, History vNext, and future Epistemic research. No unadopted
Extension is treated as available or required here.

### Development / AI lineage — Project Relay Hub

The initial hypothesis is that projects, AI systems, artifacts, specifications,
sessions, handoffs, decisions, and checkpoints may form a development and AI
collaboration lineage using the Core concepts and directed Relations.

This may provide a future Timeline or graph view of development history and
provenance, but it does not define a Relay Hub data model or implementation.

## Cross-project hypothesis

Although these projects have different purposes, they may share a structural
pattern:

> something comes from something, relates to something, and changes through
> time

This is an applicability hypothesis only. It does not claim that E2R can
express every project detail, that every project should use E2R, or that
lineage must become the central meaning of E2R.

## Known boundaries

- Application behavior remains separate from Dataset semantics.
- Realtime networking, federation, AI execution, matching, and game mechanics
  are not responsibilities of the E2R Core.
- External identifier graphs may require Target Reference or another future
  research result.
- Domain-specific epistemic and creative semantics may require an Extension or
  application vocabulary.
- This seed does not define payloads, schemas, identifiers, migrations,
  adapters, or cross-repository links.
- The four project labels are research inputs, not independently verified
  project specifications. Source review is required before stronger claims.

## Possible future experiment

Take one small Dataset-shaped example from each lineage category and compare:

1. which information can be represented by Entity, Event, and Relation;
2. which information requires History or another existing responsibility;
3. which information is merely application presentation or workflow; and
4. where domain-specific Extension or Target Reference research is required.

The experiment should measure preservation of important structure and
interoperability, not force all four projects into one vocabulary or schema.

## Catalog boundary

This research seed is intentionally not added to
`research/research-catalog.json` in this checkpoint. Catalog synchronization is
reserved for the later R0.5 inventory/catalog workstream.
