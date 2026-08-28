# Cross-App Relation Deletion Capability

Status: **FORMALLY ACCEPTED / CROSS-APP IMPLEMENTATION ALIGNED / COMPLETE**

Date: 2026-08-28

This document records the cross-application design direction resulting from
`XAPP-REL-DELETE1-AUDIT1`, `NL-ENTITY-DELETE1-AUDIT1`, and the subsequent
capability review. It is a non-normative application design record. It does
not change E2R Core, Extensions, schemas, or current application behavior.

## Current completion status

The bounded Cross-App Relation deletion capability is **COMPLETE / CLOSED** as
of 2026-08-28. The original design direction and the pre-alignment runtime
description below are retained as historical context. Current implementation
alignment is established by the [NarrativeLine final Entity deletion
fix](narrativeline-final-entity-deletion-cross-app-fix.md), the [bidirectional
reacceptance](cross-app-relation-deletion-bidirectional-reacceptance.md), and
the [capability closure record](cross-app-relation-deletion-capability-closure.md).

This closure is bounded to explicit Cross-App Relation deletion semantics,
NarrativeLine and LiaisonScape alignment, and bidirectional Dataset
interoperability. It does not close targeted Handoff, capability discovery,
provenance, generalized Relation editing, or bulk Relation deletion.

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

## Historical behavior versus target direction

The following describes the pre-alignment state recorded during initial design
work. It is retained for historical context and is not the current status.

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

The target direction was convergence toward no endpoint deletion while
incident Relations remain, with explicit Relation resolution and a suitable
inspect/edit/delete or capability-based handoff path.

## Superseded and separate work

The earlier `NL-ENTITY-DELETE1-AUDIT1` direction—count plus optional or
collapsible details while retaining automatic cascade—is held and superseded
as the preferred final direction. Its historical inspectability finding is
retained, but the primary design question is now whether endpoint deletion
should cascade incident Relation Objects at all.

The previously separate NarrativeLine endpoint-deletion alignment and
LiaisonScape hidden/out-of-scope Relation resolution work are now closed by the
bounded runtime and acceptance records linked above. Separate future bounded
tasks remain capability-based targeted Handoff and Relation provenance
research. Final capability manifests, provenance schema, directionality
schema, generalized Relation management, CSS, and universal presentation
parity remain outside this record.

The safety invariant is: no dangling Relation endpoints, no silent loss of
valid Relation Objects, explicit user intent for Relation deletion, preserved
Dataset round-tripping, and an application-neutral Core.

## Current completion and boundary

The final bounded contract and evidence are recorded in
[Cross-App Relation Deletion Capability Closure](cross-app-relation-deletion-capability-closure.md).
NarrativeLine and LiaisonScape both preserve incident Relations until each is
explicitly deleted, retain the endpoint Entity until a separate explicit final
Entity action, and preserve unrelated Dataset content. The X1-X14 matrix
passed in both transfer directions, including self, parallel, hidden/Event,
ambiguous-identity, cancellation, Extension-preservation, and EN/JA cases.

Targeted capability-based Handoff and capability discovery remain separate
future work and are not prerequisites for closing the currently implemented
cross-app Relation deletion capability. If an application cannot resolve a
Relation in a future scenario, Handoff remains a possible separate capability;
this record does not define its discovery, manifest, target-app selection, or
URL syntax.
