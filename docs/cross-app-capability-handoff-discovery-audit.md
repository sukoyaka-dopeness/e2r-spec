# Cross-App Capability Handoff Discovery Audit

**Checkpoint:** `XAPP-CAPABILITY-HANDOFF1-DISCOVERY-AUDIT`

**Date:** 2026-08-28

**Status:** **AUDIT COMPLETE / DESIGN DIRECTION RECORDED / IMPLEMENTATION NOT AUTHORIZED**

This is a discovery and design audit following the closure of the bounded
[Cross-App Relation deletion capability](cross-app-relation-deletion-capability-closure.md).
It records how a future capability-based Handoff could identify a suitable
recipient application. It does not implement Handoff routing, a manifest,
runtime discovery, or a new URL syntax.

## Scope

This audit decides and records:

- what a capability declaration must describe;
- where application capability information may come from;
- how a recipient application may be selected;
- behavior for offline, static, stale, and unknown-application conditions;
- the boundary between existing Dataset Handoff v0 and future Capability
  Handoff; and
- the meaning of `Dataset + target Object + required capability` as a future
  routing concept.

The audit does not implement or finalize the transport, schema, or runtime.

## Existing Handoff mechanisms

Source inspection, rather than old roadmap wording alone, is authoritative for
the current inventory.

### NarrativeLine

The accepted [NL-H1A startup acquisition](narrativeline-dataset-handoff-nl-h1a-startup-acquisition-acceptance.md)
and [NL-H1B fragment lifecycle](narrativeline-dataset-handoff-nl-h1b-fragment-lifecycle-acceptance.md)
records establish the current v0 behavior. The source implementation is in
[`DatasetHandoffService`](../../e2r-narrative-line/src/services/DatasetHandoffService.ts)
and [`DatasetHandoffFragmentService`](../../e2r-narrative-line/src/services/DatasetHandoffFragmentService.ts).

At the accepted NarrativeLine HEAD `7a695b3`, the application:

- parses one `datasetUrl` from the startup fragment;
- accepts only an absolute HTTPS URL without embedded credentials;
- fetches with `credentials: "omit"`;
- routes the response through the existing JSON, migration, validation, and
  Dataset replacement pipeline;
- handles invalid, duplicate, fetch, JSON, and validation failures explicitly;
- inspects the handoff once at startup and does not live-switch on
  `hashchange`; and
- removes only `datasetUrl` for accepted local, sample, or new replacement
  while preserving unrelated fragment parameters.

This is Dataset acquisition and replacement behavior. It does not declare
`inspect Relation`, `delete Relation`, or any other machine-readable
capability, and it does not carry a target Object.

The [NarrativeLine Dataset Handoff v0 formal completion](narrativeline-dataset-handoff-v0-formal-completion-acceptance.md)
is the accepted v0 completion record. It does not claim Capability Handoff or
Hub-wide recipient discovery.

### LiaisonScape

The accepted [LiaisonScape Dataset Handoff v0 implementation
result](dataset-handoff-v0-liaison-scape-implementation-result.md) and source
[`src/dataset-handoff.ts`](../../e2r-liaison-scape/src/dataset-handoff.ts)
establish the current behavior at HEAD `34d8164`.

LiaisonScape:

- parses one `datasetUrl` startup parameter;
- applies the same absolute-HTTPS and credential-bearing URL boundary;
- fetches with omitted credentials and reuses `App.open` plus normal Dataset
  validation;
- reports explicit acquisition, parse, and validation failures;
- preserves unknown fragment parameters and uses `replaceState` for accepted
  replacement cleanup; and
- does not implement target Object or required-capability discovery.

Its accepted application capability is observable in the Relation deletion
records: bounded Relation inspection/deletion and hidden or Event-related
Relation resolution are available. This evidence is application behavior, not
a published capability declaration.

### Hub

At Hub HEAD `9de6399`, [`src/App.tsx`](../../e2r-hub/src/App.tsx) contains the
source-level `buildDatasetHandoffUrl(applicationUrl, datasetUrl)` helper. The
Hub sample cards generate explicit links to NarrativeLine or LiaisonScape in
the form `applicationUrl#datasetUrl=<encoded dataset URL>`. The direct sample
Handoff link implementation was introduced at `16a4b07`.

Hub therefore currently provides:

- human-facing application launch links;
- sample Dataset source links;
- explicit sample opening links for NarrativeLine and LiaisonScape; and
- static-host-compatible URL construction.

Hub does not currently provide a machine-readable capability table, target
Object selection, required-capability matching, runtime negotiation, a server
registry, or automatic recipient redirect. An explicit user click is required.
The source behavior is recorded here even where older roadmap entries describe
Hub direct Handoff as a future formal acceptance item.

## Dataset Handoff v0 boundary

The [Dataset Handoff v0 design](dataset-handoff-v0-design.md) defines the
minimal existing transport:

```text
Dataset URL -> application startup handoff -> one Dataset open
```

Its fixed application fragment is:

```text
#datasetUrl=<percent-encoded absolute HTTPS URL>
```

`datasetUrl` is an acquisition location. It is not Dataset identity, a
revision, provenance, current in-memory editing state, or a target Object.
Unknown fragment parameters are tolerated, but v0 does not assign them
Capability Handoff semantics.

Future Capability Handoff is a separate concept:

```text
Dataset + target Object + required capability
    -> suitable recipient application
```

This is a routing identity and capability request, not a decision to append
arbitrary parameters to the v0 URL. The exact URL or transport contract is a
separate design checkpoint.

## Capability Handoff problem

The problem is not that an application owns an Object. A Relation remains a
Dataset Object, and application capability remains distinct from ownership.
The problem is that a current application may be unable to present or perform
the operation needed for a specific Object.

Representative cases are:

- the current application cannot sufficiently present a Relation for a user to
  identify it;
- the current application can inspect but cannot delete the Relation;
- the current application supports a Core Object generally but not the
  requested feature-specific operation;
- a future application supports a richer operation than the current one; or
- a user wants to continue the same Object in another suitable application.

The bounded Cross-App Relation deletion capability does not currently require
Capability Handoff because both accepted applications can resolve the tested
Relation cases. Capability Handoff remains a general future routing problem,
not a hidden prerequisite for the completed deletion closure.

## Capability granularity

Capability names should describe an actionable responsibility rather than a
product name, screen name, or ownership claim.

The audit uses the following levels as design vocabulary only:

| Level | Meaning | Audit disposition |
| --- | --- | --- |
| A | Coarse application surface, such as `timeline` or `graph` | Useful for human description, insufficient for routing an operation. |
| B | Object presentation, such as `present Entity`, `present Event`, or `present Relation` | Necessary context, insufficient to guarantee an operation. |
| C | Operation capability, such as `inspect Relation`, `delete Relation`, or `edit Event history` | The primary matching level for a bounded Capability Handoff request. |
| D | Feature-specific capability, such as Coordinate or advanced chronology editing | Optional future detail; must not be invented from application names. |

For the motivating case, a request should distinguish at least:

```text
inspect Relation
delete Relation
```

`edit Relation` must not be inferred merely because an application can delete
a Relation. A capability table may advertise multiple operations separately.
One UI button is not automatically one interoperable capability; the meaning,
scope, and safety of the operation must be defined first.

Capability metadata should be evaluated for stability, discoverability,
version evolution, fragmentation risk, false-positive risk, user usefulness,
and implementation burden.

## Capability and application ownership

Capability does not imply ownership.

LiaisonScape may have a Relation inspection or deletion capability while the
Relation remains a shared Dataset Object. NarrativeLine may have Event editing
capability while Events remain Dataset Objects rather than NarrativeLine-owned
data. A future catalog or Handoff message must not use wording such as
“Relation owned by LiaisonScape” or “Event owned by NarrativeLine.”

The current accepted cross-app deletion contract is the source of truth for
Dataset semantics. Discovery metadata is only a statement about an
application's possible operation and must not redefine Core or Extension
meaning.

## Discovery-source options

### Option A: built-in static known-application catalog

Each participating application or a shared static build artifact carries a
small table for known first-party applications and their declared capabilities.
It works offline and does not require a server, registry, account, or network
request at the moment of routing.

Risks are duplicated maintenance, stale entries, and limited third-party
extensibility. These are acceptable for a first bounded first-party direction
if the recipient verifies support at launch.

### Option B: Hub-owned static capability catalog

Hub publishes a static catalog alongside its human-facing application and
sample directory. This gives the ecosystem one publication surface but raises
catalog ownership, deployment synchronization, and availability questions.

It can be considered later as a publication mechanism. It must not become a
required network authority for opening or validating ordinary Datasets.

### Option C: application self-declared manifest

Each application publishes a machine-readable manifest. This is extensible and
could support versioned capabilities, but it first requires an accepted
manifest schema, trust model, version policy, and stale-metadata behavior.

It is not ready for implementation under this audit.

### Option D: distributed registry or network discovery

A registry could discover third-party applications dynamically, but it adds
network dependency, trust, privacy, availability, security, and stale-data
burdens. It conflicts with the requirement that normal Dataset use and
validation remain usable offline.

It is rejected as a first bounded direction.

### Option E: hybrid discovery

A hybrid could combine bundled first-party entries with optional external
discovery. It may be useful after the static contract, trust boundary, and
versioning model are proven, but it is premature now.

## Hub role

Hub is currently a lightweight ecosystem entry point and static distribution
surface. Its existing source is well suited to human-facing application links,
sample Dataset links, and future publication of reviewed capability metadata.

Hub should not become a mandatory central server merely because it publishes a
catalog. Applications must remain able to open, validate, and work with a
self-contained Dataset when Hub or a network is unavailable. Hub must not
silently modify or persist a Dataset, infer unsupported capabilities, or
redirect a user without explicit intent.

For the first direction, Hub is an optional publication and explanation
surface. The runtime discovery contract should not depend on fetching Hub at
startup. A later design may decide whether a static catalog is duplicated,
bundled, or published by Hub.

## Network independence

The Core's self-contained Dataset boundary and the v0 Handoff design both
support offline or static-hosted operation. Capability discovery must not make
any of these impossible:

- opening a local or already acquired Dataset;
- validating the Dataset;
- using the current application;
- exporting the Dataset; or
- using an explicit Dataset Handoff v0 link.

Network discovery may be an optional enhancement in a later design. Failure to
reach a catalog must degrade to “no discovered recipient,” not to Dataset
failure, silent data loss, or an automatic redirect.

## Recipient selection

The first direction should match candidates against the required operation,
not against a product label. Candidate selection should consider:

- exact required capability;
- optional Object presentation support;
- known application version or capability version when such a concept is
  later accepted;
- static-host and offline availability; and
- whether the candidate URL is trusted and usable.

If exactly one known recipient matches, the application may present an
explicit “Open in …” action. If multiple candidates match, user choice is the
safe first direction. A deterministic default or remembered preference remains
an open UX decision and must not cause silent navigation.

No matching application must not be treated as an Object deletion failure. The
current application should remain usable and explain the unavailable
capability. It may offer an explicit export/open fallback through Dataset
Handoff v0 where the user can choose a recipient manually.

## No matching application

The no-match contract should be non-destructive:

1. keep the current Dataset and current application state safe;
2. explain that no known application currently advertises the requested
   capability;
3. offer an explicit fallback such as export or ordinary Dataset Handoff;
4. preserve the target Object identity for a later retry when practical; and
5. do not redirect to an unrelated application or silently discard pending
   work.

Exact copy, dialog shape, and fallback URL syntax remain future UX/design work.

## Dataset-state boundary

Capability routing has two distinct identities:

```text
Handoff identity/routing:
    recipient + target Object + required capability

Current Dataset transfer:
    the actual Dataset content the recipient will open
```

The public source Dataset at `datasetUrl` may differ from a current edited
Dataset. A future Capability Handoff must not imply that a URL alone carries
unexported edits. The recipient must either receive an explicitly exported or
otherwise explicitly transferred Dataset, or open the declared public source
Dataset with that fact clear to the user.

## Pending-work boundary

Capability Handoff must distinguish:

- persisted Dataset content;
- modified but not exported Dataset content;
- pending application drafts or other meaningful user work; and
- transient selection, modal, viewport, and view state.

The accepted replacement-safety boundary remains application-level. A
Capability Handoff must not silently discard `datasetModified` or
`pendingUserWork`. It must not serialize transient view state into the Core
Dataset merely to make routing convenient. The current Dataset Replacement
Safety design and accepted application implementations remain authoritative for
the loss-risk decision.

## Target Object identity

The future target concept is:

```text
Dataset + canonical target Object ID + required capability
```

The canonical full Core Object ID is the routing identity. Because E2R Core IDs
are unique across Entity, Event, and Relation objects within a Dataset, a
separate display name is not sufficient. An optional Object kind may help
diagnostics or early validation, but it must not replace the canonical ID.

The following are presentation aids, not routing identity:

- Object name;
- endpoint names;
- shortened ID hints; and
- a Relation's human-facing direction or description.

Duplicate names must remain resolvable by canonical ID. Unknown or missing
targets must not cause a recipient to select a different Object by name.

## Stale target behavior

A target may be absent when the recipient opens the transferred Dataset because
the source changed, the user deleted it, or the routing reference is stale.
The recipient should:

- open or validate the Dataset itself when possible;
- report that the requested target Object was not found;
- avoid selecting a similarly named Object;
- retain ordinary Dataset access and a non-destructive fallback; and
- leave the Dataset unchanged unless the user explicitly edits it.

Target absence is distinct from invalid Dataset structure. The two diagnostics
must not be conflated.

## Stale capability metadata

A catalog match is discovery evidence, not a runtime guarantee. A recipient may
be an older version, partially deployed, unavailable at its URL, or unable to
support the advertised capability in the transferred Dataset context.

The future recipient must verify its own support after launch. If verification
fails, it should provide explicit no-match or unsupported-capability behavior,
not silently perform a weaker operation. A runtime negotiation protocol is not
defined by this audit.

## Capability versioning

Capability versioning remains an open design question. Possible future models
include an unversioned stable identifier, a capability identifier plus version,
or an application-version compatibility matrix.

The following versions must remain distinct:

- E2R Core version;
- Extension version;
- application version; and
- capability version.

This audit does not introduce a manifest schema or a version field into the
Dataset.

## Security

Future discovery and routing must account for:

- HTTPS and static-host boundaries;
- untrusted catalog entries;
- malicious or look-alike application URLs;
- query and fragment injection;
- automatic-navigation risk;
- explicit user confirmation; and
- origin trust.

Existing Dataset Handoff v0 URL validation and credential-omission rules remain
the baseline for public Dataset acquisition. A discovered recipient URL must
not be treated as trusted merely because it appears in a catalog. Silent
redirect is not an acceptable first behavior.

## Privacy

Target Object IDs and capability requests can disclose information about a
Dataset or the user's intended operation. A future design must distinguish:

- public Dataset source URLs;
- private or local Dataset content;
- target Object identity; and
- application or account identity.

Private or authenticated Handoff, account identity, and server-side registry
behavior are outside this audit. No target or capability information should
be sent to an external registry by default merely to open a local Dataset.

## History / URL ownership

Current applications already use URL fragments for `datasetUrl`, locale, and
other application-owned behavior. Existing Handoff v0 defines startup-only
`datasetUrl` semantics and existing applications preserve unknown parameters.

Future target and capability fields must not be added to the current parsers by
implication. The following questions belong to the next contract checkpoint:

- fragment versus query versus another transport;
- ownership of `datasetUrl`, locale, target Object, and capability fields;
- startup-only versus explicit live navigation;
- Browser Back/Forward behavior;
- history entry creation or replacement; and
- preservation of unknown fields.

The next design must avoid one monolithic startup parser that silently gives
application-specific meaning to unrelated fields.

## Option comparison

| Option | Offline/static use | Extensibility | Trust/network burden | First-direction result |
| --- | --- | --- | --- | --- |
| A. Built-in static known apps | Strong | Limited to reviewed entries | Low | **Recommended** |
| B. Hub-owned static catalog | Strong when bundled; weaker if fetched | Moderate | Medium publication/synchronization burden | Defer as a publication decision |
| C. Self-declared manifest | Possible | Strong | Requires schema, trust, and version design | Not implementation-ready |
| D. Network registry | Weak | Strong | High availability, privacy, and trust burden | Reject for first direction |
| E. Hybrid | Variable | Strong | High combined complexity | Defer |

## Recommended first bounded direction

The first bounded direction is **Option A: a static catalog of reviewed,
first-party known applications**, with operation-level capabilities and no
network dependency. The initial conceptual entries should be limited to known
applications such as NarrativeLine and LiaisonScape and should not imply
third-party discovery.

The first direction should use:

- `inspect Relation` and `delete Relation` as separate capability names;
- a canonical full target Object ID;
- explicit user action to choose or launch a recipient;
- no automatic third-party discovery or silent redirect;
- a graceful no-recipient fallback; and
- recipient-side capability verification after launch.

Hub may later publish or explain the same reviewed table, but Hub is not a
required central server in this direction. A static table is a design
direction, not authorization to add runtime metadata or a manifest today.

## Explicit non-decisions

This audit does not decide or implement:

- final Handoff URL or fragment syntax;
- a capability manifest schema;
- runtime capability discovery or negotiation;
- automatic redirect;
- a server registry or network discovery;
- account, authentication, or private Dataset Handoff;
- Relation provenance;
- application ownership of Core Objects;
- a generic plugin system;
- bulk Relation management;
- Core, Extension, Dataset schema, or Validator changes; or
- UI copy, modal design, CSS, or presentation parity.

## Relation deletion closure boundary

The bounded Cross-App Relation deletion capability remains:

```text
FORMALLY ACCEPTED / CROSS-APP IMPLEMENTATION ALIGNED / COMPLETE
```

The [closure record](cross-app-relation-deletion-capability-closure.md) is not
reopened by this audit. Both accepted applications already support the tested
explicit inspect/delete path, so this audit does not add a Handoff dependency
to that capability. Capability Handoff is a separate future routing lane.

## Next design checkpoint

The next bounded checkpoint should design the target contract before any
runtime implementation. It should decide the representation of:

```text
Dataset source or explicitly transferred Dataset
canonical target Object ID
required capability
recipient candidate
```

It should also settle URL/history ownership, current-versus-public Dataset
state, pending-work protection, stale target handling, stale capability
metadata, trust, and user confirmation. It must remain a design checkpoint;
implementation should wait until those boundaries are accepted.

## Roadmap synchronization

The roadmap now records this audit as **AUDIT COMPLETE / DESIGN DIRECTION
RECORDED / IMPLEMENTATION NOT AUTHORIZED**. The next bounded work is target
contract design, not a runtime prototype. Existing public-release priorities,
Dataset Handoff v0, and the Cross-App Relation deletion closure are not
reopened or reordered by this audit.

## Knowledge Candidate Check

No new `ai-knowledge` entry is warranted. The accepted Dataset Handoff v0,
Dataset acquisition, application-boundary, and Core documents already provide
the reusable boundaries. This audit is repository-specific design evidence;
its option comparison, capability names, and checkpoint chronology remain in
e2r-spec. The pre-existing dirty
`ai-knowledge/playbooks/e2r-edge-cdp-browser-diagnostic.md` file was not
edited, staged, committed, restored, reset, stashed, or cleaned.

## Verification

The audit was based on:

- e2r-spec Handoff v0 and application-boundary documents;
- current source at NarrativeLine `7a695b3`, LiaisonScape `34d8164`, and Hub
  `9de6399`;
- accepted NarrativeLine H1A/H1B/Formal Completion records;
- accepted LiaisonScape Dataset Handoff v0 implementation evidence; and
- the existing Cross-App Relation deletion closure and Dataset acquisition
  decision.

No runtime test, CSS, i18n, Dataset, Core, Extension, schema, or application
source change was made for this audit.

## Conclusion

Capability-based Handoff is a useful future routing concept when the current
application cannot perform a required operation on a specific Dataset Object.
The first bounded direction is a reviewed static first-party capability table,
matched by operation and canonical Object ID, with explicit user choice,
recipient-side verification, no network requirement, and safe no-match
fallback. The target contract must be designed and accepted before any runtime
implementation begins.
