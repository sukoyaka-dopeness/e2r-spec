# Cross-application canonical sample consumer evidence

Status: non-normative research/evidence memo

Date: 2026-08-17

This memo records evidence from opening the same Apollo 11 canonical Dataset
in NarrativeLine and LiaisonScape. It records consumer and future-work
evidence only. It does not authorize a Core change, a new Extension, a
writer, migration, repair behavior, or an application implementation.

## Current sample role

The English and Japanese Apollo 11 Datasets in
`examples/apollo-11-mission.en.e2r.json` and
`examples/apollo-11-mission.ja.e2r.json` are canonical cross-application
samples. They are complete valid Datasets that can be read as a chronology in
NarrativeLine, traversed through Entity Detail and Related Events, displayed
as an Entity graph in LiaisonScape, and checked with the Validator. Their
History and Coordinate data provide concrete interoperability evidence. The
language copies keep separate `datasetId` values while maintaining
corresponding IDs, topology, History, and Coordinates.

The sample is not a permanently optimal presentation. New applications,
Extensions, consumer workflows, or interoperability evidence may justify a
future revision. A sample revision must not automatically be treated as
evidence that Core or Extension semantics should change.

## Canonical source and explicit adoption

The observed workflow is:

```text
canonical JSON in e2r-spec
    -> import in LiaisonScape
    -> user adjusts layout
    -> application-side Dataset/export
    -> explicit review and adoption into the canonical source
```

The `.e2r.json` files remain the Single Source of Truth. Editing an imported
Dataset does not silently update the Git repository. An accepted edit must be
exported, reviewed, and deliberately adopted; canonical source, working copy,
and independent copy must remain distinguishable. Dataset identity, source
repository, and future branch/fork/lineage boundaries remain open workflow
questions. No Git write-back protocol or server synchronization is designed by
this memo.

## Coordinate and Layout boundary

The Apollo workflow successfully preserved Entity positions through
LiaisonScape movement, Coordinate export, canonical JSON adoption, English /
Japanese parity, and Validator validation. This is evidence for the current
Coordinate consumer workflow.

The workflow did not persist manually adjusted Relation curvature, Relation
label placement, or relative visual paint/layer choices into the current
canonical Dataset. These are not Coordinate values. This gives a concrete
consumer case for the existing Layout persistence experiment, including
ordinary and self-Relation routes, label placement, layer ordering, endpoint
changes, explicit adoption, return to automatic routing, partial support, and
preservation through a second consumer.

Automatic routes and labels may remain Derived. Only an explicitly adopted
override may become an Owned Layout candidate under a future responsible
model. Zoom, pan, selection, modal state, and other Application View State
remain outside Dataset content.

## LiaisonScape evidence and future work

The Apollo graph exposed an application-side arrowhead visibility issue: an
arrowhead can be covered by another Relation's visible stroke, making direction
difficult to read. Coordinate changes alone cannot guarantee a fix for this
general graph case. Future bounded LiaisonScape research may examine paint
order and layers for Relation strokes, arrowheads, labels, nodes, and
interaction surfaces. Regression evidence should include self and parallel
Relations, selected Relations, manual curvature, hit areas, connection ports,
touch/pen interaction, and node layering. This is not a routing or Coordinate
workaround and is not an implementation decision here.

Apollo also showed that excessive distance between a node icon and its name or
description weakens semantic association. Future application design should
keep icon, name, and description as one visual unit, preserve reasonable label
proximity, and avoid optimizing collision-free placement at the cost of
association. Curated sample authoring and application layout both contribute;
neither should solve every case alone.

Relation labels can become too distant from their edge when collision
avoidance handles Collins -> NASA, NASA -> Saturn V, and nearby astronaut
Relations. Future research may compare path-relative anchoring, small normal
offsets, bounded displacement, parallel/non-parallel handling, long labels,
and English/Japanese text lengths. Zero overlap is not the sole objective, and
Apollo-specific hard-coded label positions are not a general solution.

## Non-normative sample-authoring candidates

When both active and passive wording are factually acceptable, making the
acting subject the Relation source can improve direct graph reading:
`source -> relation -> target`. Apollo's change from
`Columbia -> Saturn V / is launched by` to
`Saturn V -> Columbia / launches` is evidence for this candidate, not a Core
rule. Domain-specific direction may still be appropriate.

Coordinate remains a finite-number value; integers are not required by the
specification. For curated samples, meaningless floating-point tails from
drag/transform operations may be rounded to human-readable values. Apollo's
nearest-integer cleanup is sample authoring guidance, not a normalization or
snapping rule.

When a demonstration graph is too dense, a curated sample may use available
canvas space to separate meaningful clusters and destinations. Fit-to-view
behavior must still be considered. Apollo's separation of Moon from the main
cluster is an example, not an automatic-layout requirement.

## Hub, portal, and browser continuity evidence

The sample makes the existing Hub roadmap concrete. A low-cost static Hub can
provide an explanation of E2R, an application directory with maturity/status,
a canonical sample gallery, JSON view/download, and links to NarrativeLine,
LiaisonScape, Validator, and documentation. The current concrete gallery item
is Apollo 11. Berlin Wall history and Lighthouse Restoration Project are
existing sibling-application sample candidates; Titanic final-hours and a
precision-time Apollo surface-activities sample remain planned/research
candidates and must not be described as implemented.

Future sample cards may offer Open in NarrativeLine, Open in LiaisonScape, and
View/Download JSON. URL handoff and a `?dataset=<url>` deep link are candidates;
large Dataset JSON should not be embedded directly in URLs. A workspace key is
another candidate.

Locale is a browser preference, not Dataset data. Under one origin, a shared
key such as `e2r.preference.locale` in `localStorage` could let one E2R
application start another in the user's selected language. This is not a
formal key decision or an architecture requirement: different ports and
subdomains are different origins. A future browser workspace may evaluate
IndexedDB for recent Datasets, working copies, project links, and handoff
records while keeping workspace state distinct from Dataset data and avoiding
silent Dataset persistence. An origin-separated deployment would require an
explicit Hub bridge, handoff protocol, or server-backed workspace. Real-time
BroadcastChannel synchronization is optional future work, not an MVP need.

## Temporal and epistemic research prompts

The sample planning reinforces future research into named non-IANA temporal
references such as RMS Titanic ship time, Mission Elapsed Time, Ground
Elapsed Time, spacecraft clocks, and observatory/source-specific clocks.
Current History `timeZone` must not be populated with a fake IANA value such
as `Titanic Ship Time`; a future model may need an unzoned local value plus
description and source context. This memo does not change History.

Related future research includes relative or non-absolute chronology (`Day 1`,
before/after/between, relative constraints, and multiple plausible
chronologies) and explicit approximation or bounded uncertainty. Approximate
times such as “around 23:30” must not be stored as exact minute values under
the current History model.

Historical sample sources and epistemic context remain a separate
Source/Citation workstream. This memo does not add citation payloads or imply
that sample prose alone is an interoperable source record.

## Explicit non-scope

This evidence does not implement arrowhead rendering, node or Relation label
placement, routing or curvature persistence, a Layout Extension, Hub,
browser workspace, locale sharing, deep links, multilingual Names writing,
Relative Time, custom temporal reference systems, Citation integration, or a
new Stable Extension.
