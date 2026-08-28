# Cross-App Capability Handoff Target Contract

**Checkpoint:** `XAPP-CAPABILITY-HANDOFF2-TARGET-CONTRACT-DESIGN`

**Date:** 2026-08-28

**Status:** **DESIGN ACCEPTED / TRANSPORT CONTRACT DEFINED IN FOLLOW-UP / IMPLEMENTATION NOT AUTHORIZED**

This document defines the transport-independent semantic contract for a future
capability-based Cross-App Handoff. It follows the [discovery audit](cross-app-capability-handoff-discovery-audit.md)
and adopts its first-party static capability direction. Its accepted URL
transport is defined in the [URL/Transport Contract](cross-app-capability-handoff-url-transport-contract.md);
this document remains the authority for transport-independent meaning and does
not define runtime behavior.

## Scope

The contract answers what a source application means when it asks a recipient
application to open a specific Dataset Object with a specific capability. It
defines the minimum semantic fields, identity rules, failure behavior, safety
boundaries, and scenario expectations.

It does not reopen the [completed Cross-App Relation deletion capability](cross-app-relation-deletion-capability-closure.md),
and it does not authorize implementation in NarrativeLine, LiaisonScape, Hub,
or another application.

## Relationship to the Discovery Audit

The discovery audit selected a reviewed static table of first-party known
applications as the first bounded discovery direction. This contract defines
what that table may match; it does not define where the table is serialized or
how it is delivered.

The discovery result and the Target Contract remain separate:

```text
discovery:      which known applications may support a capability
target contract: which Dataset/Object/capability intent must be handed off
transport:      how that intent and Dataset reach the recipient
```

The current status is therefore design-accepted, but not implementation-ready.

## Existing Dataset Handoff boundary

The [Dataset Handoff v0 design](dataset-handoff-v0-design.md) remains the
source of truth for the current minimal acquisition convention:

```text
#datasetUrl=<percent-encoded absolute HTTPS URL>
```

That value identifies where a recipient should obtain a Dataset. It is not
Dataset identity, current in-memory content, a revision, provenance, a target
Object, or a capability request.

The accepted implementations are recorded for [NarrativeLine](narrativeline-dataset-handoff-v0-formal-completion-acceptance.md)
and [LiaisonScape](dataset-handoff-v0-liaison-scape-implementation-result.md).
Hub's current sample links remain ordinary explicit Dataset Handoff links; the
source implementation is documented in the [discovery audit](cross-app-capability-handoff-discovery-audit.md).

Future Capability Handoff must not silently redefine `datasetUrl` by adding
target or capability meaning to existing v0 parsers.

## Target Contract model

The abstract semantic model is:

```text
CapabilityHandoffTarget
  = transferable Dataset context
  + canonical target Object identity
  + primary required capability
  + optional contract metadata
```

The request means:

> Open the intended Dataset context at the intended Object and expose a
> surface that supports the requested capability, subject to recipient-side
> validation and explicit user interaction.

It does not mean:

- execute a command immediately;
- delete an Object during routing;
- transfer ownership of an Object;
- transfer a pending application draft implicitly; or
- guarantee that discovery metadata is still true at runtime.

## Minimum abstract contract

The minimum semantic fields are:

```text
datasetContext
targetObjectId
requiredCapability
```

`datasetContext` must identify or contain the Dataset representation the user
intends the recipient to open. It must not be treated as one undifferentiated
URL value: an acquisition locator, Dataset identity, and actual transferable
content have different meanings.

The following are optional semantic or diagnostic fields, not required for the
minimum tuple:

```text
targetObjectType
sourceApplicationId
targetContractVersion
```

No field in this abstract model is a Core Dataset field or an Extension field.

## Dataset semantics

The contract distinguishes four possible meanings that must not be conflated:

| Concept | Meaning | Contract treatment |
| --- | --- | --- |
| Dataset acquisition locator | A URL or other place from which a Dataset may be fetched | Transport-dependent; v0 `datasetUrl` is this. |
| Dataset identity | The identity of the Dataset content or authored document | Separate from a locator; may be absent or Extension-defined. |
| Transferable Dataset content | The actual Dataset the recipient will open | Required before a target can be resolved safely. |
| Current application state | Unsaved edits, drafts, selection, dialogs, and viewport state | Not implied by a locator; protected by replacement safety. |

`datasetId`, when present in an appropriate metadata Extension, does not by
itself identify a retrieval URL or prove that the current in-memory Dataset
matches a public source. A recipient must not open an older public Dataset and
present it as the source application's current edited Dataset.

## Dataset-state boundary

The contract must state whether the intended Dataset is:

1. the public or static source Dataset at an acquisition locator;
2. a freshly exported Dataset snapshot; or
3. another explicitly transferable Dataset representation.

The current source application must not claim that its unexported edits were
transferred when only a public `datasetUrl` was sent. If the user requests a
handoff of current edits, the application must first use an explicit export or
an explicitly designed transfer mechanism. That mechanism is not designed by
this checkpoint.

The target Object ID is meaningful only within the Dataset representation that
the recipient actually accepts. If the transferred content differs from the
source content, target resolution can fail and must not guess.

## Pending draft boundary

The following remain separate from transferable Dataset content:

- modified but not exported Dataset data;
- pending Entity, Event, Relation, or title drafts;
- candidate Dataset replacement state;
- selection and focus;
- open dialogs and their confirmation state;
- viewport, route, label, and scroll state; and
- browser navigation history.

The recipient must not receive pending drafts merely because a source URL or
target ID is present. Existing `datasetModified` and `pendingUserWork`
replacement-safety decisions remain authoritative. A future current-edit
transfer must define its own explicit acceptance and loss-risk boundary.

## Target Object identity

The canonical target identity is the full Core Object ID:

```text
targetObjectId = exact id in the accepted Dataset
```

The E2R Core requires IDs to be unique across Entity, Event, and Relation
objects within a Dataset. Therefore a name is not sufficient for routing, and
a shortened ID hint is not sufficient for routing.

The following are presentation aids only:

- Object name;
- endpoint names;
- Relation direction or description;
- shortened ID hints; and
- user-facing labels translated into another locale.

The current eight-character ID hint is an evidence-backed human-facing
presentation candidate, not a routing rule. Full IDs remain the canonical
values for operations, storage, serialization, and schema meaning.

## Object type decision

The semantic contract may carry an optional `targetObjectType` consistency
hint with values such as `Entity`, `Event`, or `Relation`.

The decision is:

- `targetObjectId` is required and canonical;
- `targetObjectType` is optional for the minimum contract;
- when supplied, the type must match the resolved Core Object; and
- a type mismatch is a target-resolution failure, not permission to search by
  name or select another Object.

The type hint is useful for malformed-request detection, diagnostics, and
early recipient validation. It does not replace the Core-wide unique ID and
does not require a Core or schema change.

## Required capability semantics

`requiredCapability` expresses the operation or supported surface the
recipient must expose for the target Object. It is intent, not an imperative
command.

For the first bounded capability set, the identifiers are:

```text
relation.inspect
relation.delete
```

These identifiers are application-neutral and locale-independent. They do not
encode `liaisonscape`, `narrativeline`, a button label, or ownership.

## Capability identifier

Capability identifiers must be:

- stable enough for matching;
- locale-independent;
- application-neutral;
- distinct from UI labels;
- distinct from dynamic function names;
- safe to display as unknown data; and
- versionable without changing the E2R Core.

`relation.delete` is preferable to `liaisonscape.deleteRelation` because the
former describes the requested Dataset-level operation while the latter
incorrectly couples capability meaning to a current application name.

Unknown or malformed identifiers must fail safely. They must not be executed,
converted into a URL, or silently mapped to a weaker operation.

## Single versus multiple capabilities

The first contract uses one **primary required capability** plus declared
prerequisites, rather than a general arbitrary capability-negotiation set.

For example:

```text
primary required capability: relation.delete
safety prerequisite:         relation.inspect
```

The `relation.delete` recipient must be able to present the exact Relation
sufficiently for explicit user recognition before offering deletion. The
prerequisite is a safety condition of the recipient's advertised capability;
it is not an instruction to perform inspection automatically.

This keeps the first contract small while preserving the distinction between
inspection and deletion. A future contract may define multiple required
capabilities if evidence requires it. That is not a reason to add an
arbitrary capability set now.

## Contract versioning

Target Contract versioning is separate from:

- E2R Core version;
- Extension version;
- Dataset identity or revision; and
- application version.

The design decision is to reserve an optional `targetContractVersion` at the
semantic level for future serialized requests. It is not a Dataset field and
its concrete representation is not decided here.

An absent version may be interpreted only by an explicitly accepted transport
profile. Application version must not substitute for Target Contract version,
and a future transport must define how an unsupported contract version fails.

## Source application identity

`sourceApplicationId` is optional diagnostic context. It is not required to
resolve the target, determine ownership, or establish provenance.

The source application may be useful for:

- explaining where a request came from;
- compatibility diagnostics; or
- non-authoritative telemetry when the user permits it.

It must not be used as evidence that the source application owns the target
Object or that the source application is authoritative over the Dataset.

## Recipient application identity

The semantic Target Contract is recipient-neutral. Discovery resolves one or
more candidate recipients; the selected transport may then carry a recipient
application ID or URL as routing metadata.

The target meaning must not change when a different suitable recipient is
selected. Recipient identity is therefore not a required semantic field in the
minimum Target Contract. A resolved recipient must still verify its own
capabilities after launch.

## Locale boundary

Locale is orthogonal to target identity and capability identity.

- `targetObjectId` and capability identifiers are locale-independent;
- the recipient may use its existing locale preference mechanism;
- an optional requested locale may be carried by a future transport; and
- locale preference must not become a second target identity or capability.

The current `locale` and `datasetUrl` fragment ownership remains unchanged.
This checkpoint does not add a locale field to any application parser.

## Target resolution algorithm

After a future recipient receives a request, the semantic order should be:

1. obtain the intended Dataset representation;
2. parse and validate the Dataset through the recipient's normal pipeline;
3. look up the exact `targetObjectId` in the accepted Dataset;
4. if `targetObjectType` is present, verify it against the resolved Object;
5. verify the primary capability and its safety prerequisites;
6. navigate to a suitable recipient surface; and
7. require the user's explicit interaction for any edit or destructive action.

Target resolution must complete before a destructive operation is offered. A
successful Handoff means that the recipient opened a suitable target surface;
it does not mean that Relation deletion or another operation already occurred.

## Missing target

If the Dataset is valid but `targetObjectId` is absent:

- report that the requested target was not found;
- do not choose an Object by matching its name;
- do not choose an endpoint with a similar ID hint;
- do not mutate the Dataset;
- keep ordinary Dataset access available; and
- offer a non-destructive fallback or return path.

Target absence is distinct from Dataset acquisition, JSON parsing, and E2R
validation failure. The recipient may show the Dataset without target
navigation when that is safe, but must clearly state that the requested target
was not resolved.

## Object type mismatch

If `targetObjectId` resolves but the optional type hint disagrees:

- report a target type mismatch;
- do not reinterpret the ID as another Object type;
- do not fall back to name matching;
- do not expose a destructive operation for the request; and
- leave the accepted Dataset unchanged.

Because the Core ID is canonical and Dataset-wide unique, a mismatch most
likely indicates a stale or malformed request. It is not an invitation to
repair the request silently.

## Unsupported capability

If the recipient resolves the target but does not support the requested
capability, the recipient is the final runtime authority for that fact.

The recipient should:

- preserve the Dataset and target context;
- explain that the requested capability is unavailable;
- offer a supported non-destructive surface where useful; and
- offer an explicit fallback or return path.

It must not silently perform a weaker operation or claim successful Handoff for
an unsupported capability.

## Capability downgrade

For this contract:

```text
requested:  relation.delete
available:  relation.inspect only
```

is not a successful `relation.delete` Handoff. The recipient may explicitly
offer inspection as a separate user choice, clearly labeled as a different
capability. It must not silently replace deletion with inspection, silently
delete without inspection, or report the requested operation as supported.

## Destructive-action safety

Capability Handoff must preserve the following invariants:

- Handoff is not immediate mutation;
- target resolution precedes an edit or destructive action;
- the user recognizes the exact target Object;
- `relation.delete` uses the recipient's accepted explicit deletion flow;
- no endpoint Entity is silently cascade-deleted;
- final Entity deletion remains a separate explicit action; and
- Cancel, Escape, replacement safety, and pending-work protection remain in
  force.

For the accepted Cross-App Relation deletion capability, the recipient should
open the Relation inspection/deletion surface. The user then performs the
existing explicit Relation deletion interaction. There is no “Handoff then
delete immediately” contract.

## Scenario validation

The following scenarios validate the abstract contract without choosing a
transport:

| Scenario | Expected result |
| --- | --- |
| A. NarrativeLine to a Relation inspection-capable recipient | Resolve the exact Dataset and Relation ID, then open the recipient's inspection surface. |
| B. NarrativeLine to a Relation deletion-capable recipient | Resolve the exact Relation, verify `relation.delete` plus inspection prerequisite, then require explicit deletion. |
| C. LiaisonScape to a future Event-focused capability | Preserve the Event ID and open only if the recipient advertises the requested capability; no ownership implication. |
| D. Target Object missing | Report missing target, preserve Dataset, and do not select by name. |
| E. Recipient capability stale or unsupported | Reject the requested capability at runtime and provide a safe fallback without mutation. |
| F. Duplicate Object names | Use the canonical ID; presentation hints may disambiguate but never route. |
| G. Public source URL with current unexported edits | Do not claim current edits were transferred; require explicit export/transfer for current-state Handoff. |
| H. Delete capability Handoff | Open deletion UI or an equivalent recognized surface; never perform immediate deletion. |

## Existing Dataset Handoff v0 compatibility

Compatibility is progressive, not a silent reinterpretation:

```text
v0:       Dataset acquisition location -> open Dataset
future:   explicit Dataset context + target Object + capability intent
```

An ordinary v0 link must continue to open the Dataset without requiring a
target or capability. A future targeted request may use a future transport
profile, but the target fields must not be injected into current NL/LS parsers
until a separate URL/transport checkpoint accepts that behavior.

If a target request contains only a v0 `datasetUrl`, the recipient may load the
Dataset but must not infer a target Object or capability from names, links, or
the source application.

## Hub sample Handoff boundary

Hub's current sample Handoff means:

```text
open this Dataset in this selected application
```

It does not mean:

```text
discover every suitable application for this target Object
```

Existing sample links should remain ordinary explicit Handoff links. This
contract does not convert every Hub sample link into targeted Capability
Handoff, nor does it make Hub a registry or a required routing server.

## Core / Extension boundary

The Target Contract is an application interoperability contract. It must not
add any of the following to the Core or Dataset schema:

- `preferredApp`;
- `ownerApp`;
- `handoffTarget`;
- a capability field on Entity, Event, or Relation;
- a routing URL inside a Core Object; or
- a capability version in the Dataset `version` field.

Handoff routing metadata must not become persistent Dataset content merely
because it is convenient for a transport. Any future persistent semantics
must receive a separate Extension design and ownership review.

## Security / privacy

All Target Contract values are untrusted input at the recipient boundary.

- Object IDs are data, not code or dynamic selectors.
- Capability identifiers are data, not function names.
- A capability must not generate an arbitrary URL or command.
- Unknown capability identifiers fail safely.
- Malformed target data must not trigger mutation.
- A discovered application URL is not trusted merely because it appears in a
  static table.
- Explicit user action is required before cross-origin navigation or any
  destructive operation.

Target Object IDs and capability intent can reveal Dataset context. A future
transport must decide whether these values are exposed in a URL, sent to an
origin, or kept in a local handoff envelope. Private/authenticated Handoff,
account identity, and an external registry remain outside this design.

## Minimal abstract contract

The transport-independent minimum can be represented informally as:

```text
CapabilityHandoffTarget {
  datasetContext: transferable Dataset representation or an explicitly
                  identified acquisition context,
  targetObjectId: canonical full Core Object ID,
  requiredCapability: locale-independent primary capability identifier,
  targetObjectType?: Entity | Event | Relation,
  sourceApplicationId?: diagnostic source identity,
  targetContractVersion?: separately versioned contract metadata
}
```

This is explanatory pseudo-structure only. It is not TypeScript, JSON Schema,
an Extension, or implementation authorization.

## Explicit exclusions

This semantic checkpoint did not decide or implement the following transport
or runtime details; the URL shape and transport rules are now defined by the
follow-up contract, while implementation remains separate:

- URL encoding or parser implementation;
- capability manifest schema or catalog serialization;
- runtime discovery or negotiation;
- automatic redirect;
- network registry or account/authentication flow;
- current-edit or pending-draft transport;
- provenance or application ownership;
- a generic plugin system;
- bulk Relation management;
- UI copy, modal, CSS, or locale implementation;
- Core, Extension, Dataset schema, or Validator changes; or
- runtime changes in NarrativeLine, LiaisonScape, Hub, or another application.

## Implementation readiness

The semantic design result is:

```text
DESIGN ACCEPTED /
TRANSPORT CONTRACT DEFINED IN FOLLOW-UP /
IMPLEMENTATION NOT AUTHORIZED
```

The target meaning, identity, capability semantics, failure behavior, and
safety boundaries are preserved by the follow-up
[URL/Transport Contract](cross-app-capability-handoff-url-transport-contract.md).
Neither document authorizes a runtime prototype.

## Next bounded step

The transport contract is now recorded in the
[URL/Transport Contract](cross-app-capability-handoff-url-transport-contract.md).
It preserves the current v0 Handoff contract, limits the first direction to a
flat fragment with retrievable HTTPS `datasetUrl` plus validated target fields,
and keeps current-edited Dataset transfer outside scope. Runtime capability
routing still requires its own explicit implementation authorization.

## Knowledge Candidate Check

No new `ai-knowledge` entry is warranted by this design checkpoint. Existing
Handoff v0, Dataset acquisition, Dataset Replacement Safety, Core boundaries,
and the Object ID hint hypothesis provide the reusable workspace guidance.
The abstract contract and scenario decisions are e2r-spec source-of-truth
design evidence. The pre-existing dirty
`ai-knowledge/playbooks/e2r-edge-cdp-browser-diagnostic.md` file remains
untouched.

## Verification

This design was checked against:

- [Cross-App Capability Handoff Discovery Audit](cross-app-capability-handoff-discovery-audit.md);
- [Cross-App Relation Deletion Capability Closure](cross-app-relation-deletion-capability-closure.md);
- [Dataset Handoff v0](dataset-handoff-v0-design.md);
- [NarrativeLine Dataset Handoff v0 Formal Completion](narrativeline-dataset-handoff-v0-formal-completion-acceptance.md);
- [LiaisonScape Dataset Handoff v0 implementation](dataset-handoff-v0-liaison-scape-implementation-result.md);
- [Dataset Acquisition Entry Point Alignment](dataset-acquisition-entry-point-alignment.md);
- current NarrativeLine source at `7a695b3`;
- current LiaisonScape source at `34d8164`; and
- current Hub source at `9de6399`.

No runtime, CSS, i18n, Dataset, Core, Extension, schema, or application source
was changed.

## Conclusion

The Target Contract is accepted as a transport-independent semantic design.
Its minimum meaning is a transferable Dataset context, a canonical full target
Object ID, and a primary required capability, with optional type and diagnostic
metadata. `relation.delete` requires safe inspection capability and explicit
user interaction; it never means immediate deletion. Missing targets,
mismatches, stale metadata, and unsupported capabilities fail non-destructively.
The URL/transport design is accepted in the follow-up contract. Runtime
implementation, current-edited Dataset transfer, and deferred presentation
fixes remain separate and unauthorized checkpoints.
