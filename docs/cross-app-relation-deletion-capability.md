# Cross-App Relation Deletion Capability

Status: **CROSS-APP DESIGN DIRECTION — ACCEPTED / IMPLEMENTATION NOT YET ALIGNED**

Date: 2026-08-27

This document records the cross-application design direction resulting from
`XAPP-REL-DELETE1-AUDIT1`, `NL-ENTITY-DELETE1-AUDIT1`, and the subsequent
capability review. It is a non-normative application design record. It does
not change E2R Core, Extensions, schemas, or current application behavior.

## Dataset Objects, provenance, and capability

A Relation is a Dataset Object. It is not owned by NarrativeLine,
LiaisonScape, or the application that originally created it. Future creation
provenance may describe where a Relation was created, but provenance does not
determine deletion authority.

Application capabilities are separate dimensions:

- present or inspect a Relation;
- edit a Relation;
- explicitly delete a Relation; and
- hand off a Dataset and target Object to an application with a needed
  capability.

An application that does not normally render or richly edit a Relation must
not treat that Relation as nonexistent. Cross-app consistency is semantic and
capability-based; identical controls and labels are not required.

## Accepted endpoint-deletion direction

An endpoint Object must not be deleted while incident Relation Objects remain.
Entity deletion therefore should not generally cascade-delete incident
Relations. The user should first explicitly resolve or delete those Relations,
after which the endpoint Object can be deleted. Each Relation Object counts
once; a self Relation counts once; parallel Relations remain distinct Objects.
This wording is based on incident Relations and endpoint Objects rather than a
permanent human-facing Source/Target presentation.

Relation Objects should be explicitly removable through an application that
can present them sufficiently for the user to recognize the intended Object.
Full rich editing is not required for bounded inspect/delete support.

If the current application cannot suitably present or resolve a blocking
Relation, it should offer a capability-based path to an application that can.
The future handoff target concept is a Dataset, target Object, and required
capability; URL syntax and capability discovery remain separate design work.

## User-facing explanation direction

The explanation should describe a Dataset connection that is not normally
shown in the current application, rather than implying that another
application owns it. Application-specific wording may be friendlier, for
example:

- NarrativeLine: the Entity has connections not normally shown on this
  Timeline;
- LiaisonScape: the Entity has Event-related connections not shown on this
  graph.

Exact EN/JA copy and final blocked-delete UI are future bounded UX work. A
future affected-Relation presentation should prefer Relation name, then
Source/Target names, and use an Object ID hint only when names are ambiguous.
Any shortened hint follows the existing validated direction: minimum eight
characters, extended when needed for uniqueness, while the canonical full ID
is unchanged.

## Current behavior versus target direction

LiaisonScape currently blocks Entity deletion for every incident Relation,
including valid Event-related Relations that are outside its graph-visible
scope. Its Entity Detail exposes related Relations sufficiently to support
resolution, although the Event-related path is less direct than the ordinary
graph path.

NarrativeLine currently removes every Relation whose source or target is the
deleted Entity. This preserves Dataset integrity and is symmetric for forward,
reverse, and self Relations, but can silently remove Entity-to-Entity
Relations outside its normal Event-centered surface. Its confirmation warns
generically that connected Relations are removed without making those hidden
Relations individually inspectable.

The target direction is convergence toward no endpoint deletion while
incident Relations remain, with explicit Relation resolution and a suitable
inspect/edit/delete or capability-based handoff path. Current NarrativeLine
cascade behavior is not yet aligned; LiaisonScape's blocking behavior is the
closer preservation baseline. No claim is made that either runtime already
implements the final cross-app contract.

## Superseded and separate work

The earlier `NL-ENTITY-DELETE1-AUDIT1` direction—count plus optional or
collapsible details while retaining automatic cascade—is held and superseded
as the preferred final direction. Its historical inspectability finding is
retained, but the primary design question is now whether endpoint deletion
should cascade incident Relation Objects at all.

Separate future bounded tasks include NarrativeLine endpoint-deletion
alignment, LiaisonScape hidden/out-of-scope Relation resolution UX if needed,
capability-based targeted handoff, and Relation provenance research. Final
blocked-delete dialogs, management panels, capability manifests, provenance
schema, directionality schema, CSS, and implementation are outside this
record.

The safety invariant is: no dangling Relation endpoints, no silent loss of
valid Relation Objects, explicit user intent for Relation deletion, preserved
Dataset round-tripping, and an application-neutral Core.
