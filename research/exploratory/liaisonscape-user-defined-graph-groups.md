# LiaisonScape User-defined Graph Groups

Date: 2026-09-01

Status: Research seed / exploratory future capability

## Purpose

This note records a future LiaisonScape capability goal: allow a user to
declare a meaningful group of several graph objects and use that group as a
visible presentation and layout unit.

The goal is intentionally non-normative. It is not an accepted E2R Dataset
semantic, an implementation plan, a release blocker, or a proposal to change
the Core, an Extension, a schema, or current application runtime behavior.

## User goal

A user should eventually be able to select several Nodes and declare a
meaningful user-defined group. LiaisonScape could then provide:

- visible containment or grouping in the graph;
- group-aware positioning and local layout;
- understandable treatment of internal and boundary Relations; and
- a workflow that makes membership, visibility, and any later adoption
  explicit.

The phrase "meaningful group" describes user intent. It does not imply that
Node names, labels, topology, or a layout engine may silently create a
semantic Group.

## Critical separation: explicit Group versus derived cluster

The current motif research uses a different concept:

| concept | source | purpose | user/Dataset meaning |
|---|---|---|---|
| user-defined Group | explicit user action or a future explicit Dataset representation | visible semantic grouping and group-aware presentation | potentially meaningful, but ownership is open |
| derived motif-overlap cluster | computed from unordered motifs sharing Entity Nodes | local geometry and shared-state analysis | not a semantic Group |

The derived cluster is a layout/research scope. It exists because shared Nodes
can couple local geometry. It must not be serialized or shown as a user Group
merely because the layout engine found it. Conversely, a future explicit Group
must not be reduced to a motif cluster: it may contain objects with no triangle
motif, may cross topology-derived clusters, and may express a meaning that is
not present in Core graph structure.

The two concepts may be considered together by a future layout engine, but they
must retain separate identities and responsibility boundaries.

## Open ownership and representation questions

The following questions remain open and require evidence before any schema or
runtime decision:

- Is a Group Core data, an Extension, a Perspective, Presentation data, or
  application-owned workspace state?
- Can a Group contain Entities only, or also Events and other supported
  objects?
- Is multiple membership allowed? The design space must not accidentally
  preclude one object belonging to several user-defined Groups.
- Are hierarchy and nesting required?
- Can a Group have Relations to another Group, or only to its member objects?
- How are collapse and expand represented, if at all?
- What are persistence, serialization, import, export, and unknown-field
  preservation rules?
- What happens when a member is deleted, replaced, or moved between
  Datasets?
- How are group bounds and internal layout generated or authored?
- How are external and boundary Relations routed when a Group is collapsed?
- How can another E2R application preserve or ignore the Group safely?

No answer is selected by this note. In particular, a visible container in the
current LiaisonScape UI would not by itself establish interoperable Dataset
semantics.

## Multiple membership requirement

Multiple membership is retained as a future design requirement, not accepted
semantics. Any first representation or experiment should avoid data structures
that make one-to-one ownership unavoidable. This does not decide whether
membership is ordered, hierarchical, weighted, or persisted.

## Relationship to current layout research

The current research sequence has established a topology-based motif-overlap
cluster as a candidate local scope. The latest quality-criteria audit recorded
a two-layer descriptive profile: per-motif shape/chord evidence plus
shared-Node and cluster context. That derived cluster research provides a
possible foundation for future Group-internal and Group-boundary layout
research because both involve shared local geometry and boundary adjacency.

It does not prove any of the following:

- that a derived cluster is a user Group;
- that every user Group should be a triangle or motif;
- that Group layout can use the current motif descriptors unchanged;
- that a Group should be generated automatically from topology; or
- that a universal graph-layout solution exists.

The relationship is therefore a **hypothesis only**. Future work should first
collect examples of user intent and presentation benefit, then compare them
with derived topology structures without conflating the two.

## Evidence and next research questions

Useful bounded evidence would include:

1. user-created groups whose members do and do not form motifs;
2. one object belonging to multiple groups;
3. a group containing both Entity and Event objects, if that is desired;
4. groups crossing derived motif-cluster boundaries;
5. collapsed and expanded presentations with boundary Relations; and
6. round trips through a second E2R application that does not understand the
   proposed Group representation.

Each experiment should identify whether it is testing user intent,
presentation, layout, persistence, or interoperability. It should not infer a
Core change from a UI convenience.

## Current decision boundary

This record makes no implementation authorization. It does not change the
current selected research checkpoint, which remains:

`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-MOTIF-CLUSTER-QUALITY-CRITERIA-VALIDATION1`

The present record is future capability planning and may proceed alongside the
active bounded geometry research without reordering that sequence.

No runtime, schema, sample, Core, Extension, Coordinate, Layout persistence,
Presentation persistence, test, preview, or `ai-knowledge` change is part of
this record.
