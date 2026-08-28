# Cross-App Capability Handoff Current Dataset Transfer Design

**Checkpoint:** `XAPP-CAPABILITY-HANDOFF4-CURRENT-DATASET-TRANSFER-DESIGN`

**Date:** 2026-08-28

**Status:** **DESIGN ACCEPTED / FIRST CURRENT-DATASET TRANSFER BOUNDARY DEFINED / IMPLEMENTATION NOT AUTHORIZED**

This document defines the first bounded answer to the current Dataset transfer
problem identified by the accepted [Target Contract](cross-app-capability-handoff-target-contract.md)
and [URL/Transport Contract](cross-app-capability-handoff-url-transport-contract.md).
It does not authorize runtime changes, a new server, a new E2R schema, or a
new transport parameter.

## Scope

The problem is how a source application can give a recipient the Dataset state
the user intends when the source application's current Dataset is newer than
the original `datasetUrl`, or when the Dataset has no public URL at all.

This checkpoint decides:

- which Dataset states may use the existing targeted URL Handoff;
- how a committed current Dataset may be transferred without silent upload;
- how pending application work is treated;
- what a transferred snapshot contains;
- how export serialization and unknown Extensions are preserved;
- what happens when transfer or recipient acquisition fails; and
- the boundary between current-session transfer and public anonymous sharing.

It does not define UI copy, a file-picker design, a cross-tab protocol, a
provider, a hosted upload service, live synchronization, or implementation
file structure.

## Existing accepted contracts

The following decisions remain authoritative:

- the E2R Core remains unchanged and Dataset content remains self-contained;
- Dataset Replacement Safety uses `datasetModified || pendingUserWork`;
- Handoff is intent and never direct mutation authorization;
- Dataset Handoff v0 uses a retrievable absolute HTTPS `datasetUrl`;
- targeted URL Handoff uses the accepted flat fragment contract;
- `datasetUrl` is an acquisition locator, not Dataset identity or revision;
- canonical Object ID and primary capability remain separate from Dataset
  transfer mechanism;
- `relation.delete` still requires recipient-side safe presentation,
  inspection, and explicit user action;
- the first capability direction remains first-party and static, without a
  network registry or automatic redirect; and
- Cross-App Relation deletion remains **CLOSED** as a capability decision.

This design also applies the accepted workspace modularization decision at the
responsibility level: later implementation should keep snapshot preparation,
Handoff intent, and recipient Dataset opening as separable responsibilities and
extract incrementally only where a boundary reduces change coupling. It does
not prescribe a file layout or a component count.

## Problem statement

Consider this sequence:

1. The user opens Dataset A from `https://example.com/a.e2r.json`.
2. The source application accepts A as its current Dataset.
3. The user edits and saves changes, producing current state A2.
4. The original `datasetUrl` still identifies the public A1 representation.
5. The user asks to open a Relation in another E2R application.

Sending the original URL can make the recipient open A1 while the source user
believes that A2 was transferred. The same mismatch exists when the Dataset was
opened from a local file and has no public URL. A canonical target ID does not
solve this: the target may be absent or its Relations may differ in the state
the recipient actually receives.

The design must therefore separate:

```text
Handoff intent:
    recipient + target Object + required capability

Dataset transfer:
    the exact Dataset representation the recipient will open
```

## Dataset state categories

| State | Meaning | Transfer treatment |
| --- | --- | --- |
| Clean retrievable Dataset | Current accepted Dataset equals the application's accepted baseline and a known retrievable URL is available | Existing targeted URL Handoff may be used, subject to the URL contract and its known mutable-URL limitation. |
| Modified committed Dataset | Current Dataset contains committed changes not represented by the original URL | Do not send the original URL as current state. Use explicit Export/Open file transfer. |
| Pending application work | Meaningful draft, local editor input, unsaved coordinate or route work, or another application state not committed into the Dataset | Do not transfer it. Resolve or explicitly discard it before current-state Handoff. |
| Modified and pending | Both committed Dataset changes and pending application work exist | Block current-state Handoff until both boundaries are explicitly resolved. |
| Local/no-source Dataset | Accepted Dataset has no public or recipient-retrievable URL | Use explicit Export/Open file transfer; no URL Handoff is invented. |
| Transient presentation state | Selection, focus, viewport, open dialog, route, label, or browser history | Never part of the Dataset snapshot or target transfer. |
| Recoverable session state | Application recovery data such as local storage state | Not a transfer representation and does not bypass replacement safety. |

## Candidate transfer methods

| Candidate | Evaluation | First direction |
| --- | --- | --- |
| Existing public HTTPS URL | Simple and compatible with v0, but cannot prove current in-memory content or prevent later URL mutation | Selected for clean retrievable state only |
| Explicit Export plus manual Open | Transfers a user-selected committed snapshot, supports large Datasets and static applications, and requires no backend | Selected for current/local state |
| Blob or Object URL | Lifetime, origin, tab, reload, revocation, and recipient deployment boundaries are not a general cross-origin contract | Rejected for first direction |
| Web Storage or IndexedDB bridge | Storage is origin- and browser-context-dependent; no general cross-origin recipient contract exists | Rejected for first direction |
| Inline JSON or encoded URL payload | URL length, privacy, history, truncation, performance, and malformed-payload risks grow with Dataset size | Rejected for first direction |
| Temporary transfer token | Requires content custody, endpoint, lifetime, origin trust, privacy, expiry, and backend operations | Deferred; no token field is defined |
| Clipboard or browser-mediated transfer | May support explicit movement but does not provide a stable target/capability protocol or cross-browser contract | Deferred |
| Anonymous public upload/share | Changes a current-session action into publication and introduces abuse, privacy, cost, and retention obligations | Separate research topic |

The evaluation does not claim that a browser feature is unavailable. It records
that these candidates are not accepted as a general E2R-wide current Dataset
transport without a separate cross-browser and privacy design.

## Static-hosting and backend boundary

The selected current-state direction works with static web applications:

```text
source current Dataset
    -> explicit validated Export
    -> user receives a local Dataset file
    -> user explicitly opens that file in recipient
    -> recipient validates and displays the transferred snapshot
```

It does not require a backend, account, centralized storage, server-side
session, or provider-specific token. It also does not assume that static
hosting makes private data safe to publish. A future hosted transfer is a new
privacy and operational architecture decision.

## Public sharing is separate

The following are distinct use cases:

1. current-session transfer from one application to another on the user's
   device;
2. a persistent shareable URL; and
3. anonymous public Dataset sharing.

The selected file transfer addresses only the first. It must not silently
upload a local or private Dataset merely because the user requests another
first-party application. The existing anonymous Dataset sharing research
remains provider-neutral and deferred; this checkpoint does not promote it to
an application architecture or public publication feature.

## Dataset identity and revision

No Core revision field, Dataset schema change, or new identity Extension is
introduced. `datasetId`, when present, identifies the authored Dataset at the
application's existing semantic level; it is not a revision hash and cannot by
itself prove that A1 and A2 are different or equal.

The first direction uses the following practical identity boundary:

- a local file transfer identifies the user-selected exported artifact and the
  Dataset content the recipient successfully accepts from that artifact;
- a public URL transfer identifies the content obtained by the recipient at
  acquisition time, subject to the existing mutable-URL limitation; and
- neither direction claims that a URL or `datasetId` alone proves byte equality,
  revision equality, authorship, or provenance.

No serialized-byte fingerprint or canonicalized-Dataset fingerprint is
adopted. A fingerprint would need a stable serialization, comparison policy,
privacy review, and explicit lifecycle semantics. It must not become a
replacement for Dataset identity, Object ID, or provenance merely to make this
checkpoint appear stronger.

## First current-state direction

The accepted first boundary is a two-lane policy:

```text
Clean + retrievable URL
    -> existing targeted URL Handoff

Modified committed or local/no-source
    -> explicit Export
    -> explicit recipient Open
    -> target re-selection in the recipient
```

This deliberately accepts a two-step or multi-step experience for current or
local state. One-click targeted Handoff is reserved for the clean retrievable
URL lane. Convenience must not silently publish or silently substitute an
older Dataset.

## Modified and pending-work matrix

| Case | Targeted Handoff | Required user action | Dataset sent | Warning/confirmation boundary |
| --- | --- | --- | --- | --- |
| `datasetModified=false`, `pendingUserWork=false`, known retrievable URL | Allowed through existing URL contract | Explicit Handoff action; recipient still resolves target | Dataset obtained from the URL, not a claimed immutable revision | Existing URL and target failure behavior applies |
| `datasetModified=true`, `pendingUserWork=false` | Original-URL targeted Handoff is not allowed as current-state transfer | Explicit Export, then explicit Open in recipient | Committed current snapshot from the export artifact | Existing replacement-safety principles apply; export failure cancels transfer |
| `datasetModified=false`, `pendingUserWork=true` | Blocked until pending work is resolved | Commit pending work into the Dataset, or explicitly discard it | No draft state is sent; after resolution use the applicable clean/modified lane | No silent discard and no claim that the visible draft was transferred |
| `datasetModified=true`, `pendingUserWork=true` | Blocked | Resolve pending work, then explicitly Export the committed current snapshot, or explicitly discard as allowed by existing safety policy | Only the explicitly exported committed snapshot | No `Export and Continue` shortcut may imply that pending work was transferred |

The matrix is a design policy, not UI copy. In every case, Cancel preserves
the source Dataset and pending work. A failed or canceled transfer does not
send the original URL as a stale fallback and does not perform target action.

## Clean public Dataset

When both dirty signals are false and a known retrievable URL exists, the
existing targeted URL contract remains the first lane. This means that the
current accepted Dataset equals its application baseline at the time of the
request, not that the remote URL is an immutable snapshot.

The recipient may obtain different content if the remote URL changes after
the source opened it. The target is always resolved against the Dataset the
recipient actually accepts. If the Object or capability context is missing,
stale, or unsupported, the request fails non-destructively.

`datasetModified=false` must not be presented as a cryptographic equality
guarantee between current memory and a remote URL. The source implementation
must use a source URL only when that URL is the intended retrievable Dataset
context under the existing application policy.

## Modified committed Dataset

When committed current Dataset content differs from the original source URL,
the original URL must not be sent as though it represented current state. The
selected direction is:

1. keep the current source Dataset active;
2. explicitly export the committed current Dataset using the existing app
   export/serialization authority;
3. report export failure without changing source state;
4. let the user explicitly choose the resulting file in the recipient; and
5. require the recipient to resolve the target in the accepted snapshot.

The file is a transfer artifact, not a new public URL and not a hidden upload.
The original URL may be shown as historical context, but it must not be used as
a silent fallback for the requested current-state transfer.

## Pending-only Dataset

Pending application work is not part of the committed Dataset snapshot. This
includes unfinished Entity/Event/Relation or title drafts, unsaved graph
coordinates or route/label adjustments, and other meaningful application work
recognized by the existing pending-work model.

The pending-only case is therefore blocked until the user explicitly commits
or discards that work. If the work is committed, the resulting Dataset may be
transferred according to the clean or modified lane. If it is discarded, the
resulting Dataset may be transferred only after the normal state and safety
checks. A targeted link alone never commits or discards a draft.

## Modified plus pending Dataset

This is the highest-risk case. The source must not export or transfer an
ambiguous state while pending work remains unresolved. Exporting the committed
Dataset may be useful as a separate explicit export action, but it does not
continue current-state Handoff while pending work remains.

The source preserves both the current Dataset and pending work until the user
resolves them. Once pending work is resolved, the committed Dataset state is
re-evaluated; if it differs from the public URL, explicit Export/Open is still
required.

## Local or no-source Dataset

An accepted local Dataset without a recipient-retrievable URL uses explicit
Export/Open. The source does not invent a public URL, upload to a third party,
or create a transfer token. The recipient opens the user-selected file through
its ordinary Dataset acquisition and validation path.

Target metadata is not embedded into Core Dataset content, an Extension, or a
hidden file wrapper. The first fallback does not maintain a cross-tab intent
channel. The user re-selects the target Object and the recipient exposes the
requested capability only after its ordinary validation.

## Snapshot semantics

For the selected file lane, Handoff transfers:

- the committed Dataset Objects accepted by the source at export time;
- accepted Dataset Extensions and application-supported export metadata; and
- unknown valid fields and Extensions preserved by the existing export path.

It does not transfer:

- pending drafts or unsaved application work;
- selection, focus, viewport, route, label, or open-dialog state;
- browser history or recipient navigation state;
- source application ownership or provenance claims; or
- a live synchronization relationship.

The recipient receives a snapshot. After export, the source may continue to
edit its Dataset; those later edits are not reflected in the already exported
file. If an older exported file is intentionally opened later, it represents
that earlier snapshot and must not be described as the source's current state.

## Export serialization authority

The transfer must reuse each application's existing validated Dataset export or
serialization path. A Capability-Handoff-specific serializer must not create a
second representation of the same Dataset.

The export path must preserve unknown fields and unknown Extensions according
to the existing Dataset round-trip boundary. Any normal export-time metadata
preparation or accepted Specification Extension declaration remains owned by
that existing export path; this design does not add new Dataset fields.

Export preparation must be non-mutating with respect to the active Dataset
until the existing export operation succeeds. A serialization or download
failure leaves the current Dataset, dirty signals, pending work, and target
intent unchanged.

## Target metadata continuity

The clean URL lane preserves `targetObjectId`, `targetObjectType`,
`requiredCapability`, and `targetContractVersion` through the accepted URL
transport.

The explicit file lane does not carry those values in the Dataset file. The
first direction intentionally accepts this continuity break:

```text
explicit Dataset Export
    -> explicit recipient Open
    -> user re-selects the target Object
    -> recipient checks the requested capability through its normal surface
```

This avoids putting application-routing metadata into the Core Dataset or
inventing a sidecar/cross-tab protocol. A later sidecar or browser-mediated
intent mechanism would require its own transport, privacy, and failure design.

## Target staleness after export

If the source exports A2, edits again to A3, and the user later opens the A2
file, the recipient receives A2. This is valid snapshot behavior if the user
explicitly selected that file, but the application must not claim that A3 was
transferred. The target is resolved against A2 and may be missing or changed
there.

There is no live synchronization, automatic re-export, automatic replacement
of an already selected file, or merge behavior in this direction.

## Transfer failure semantics

If export, serialization, download, file selection, or any preparation step
fails:

- the source current Dataset remains unchanged;
- `datasetModified` and `pendingUserWork` remain unchanged;
- pending work is not discarded or auto-saved;
- no stale source URL is sent as a fallback;
- no target action or destructive mutation occurs; and
- the user may retry or choose another explicit path.

If the recipient cannot acquire, parse, or validate the selected snapshot, the
recipient reports failure through its ordinary Dataset path. The source state
is unaffected, targeted intent is not fulfilled, and no deletion occurs.

## Security hard gates

Any future implementation of this boundary must satisfy all of these gates:

- no silent upload or public publication;
- no automatic transfer of a private/local Dataset to a third-party server;
- no stale public-URL fallback for a current-state request;
- no arbitrary recipient URL from Dataset content or target metadata;
- no pending-draft serialization merely to make Handoff convenient;
- no Dataset mutation during transfer preparation;
- no automatic target resolution interpreted as destructive authorization; and
- normal recipient validation, capability checks, confirmation, and safety
  boundaries remain in force.

## Privacy boundary

An exported current Dataset may contain more sensitive content than a public
source URL. The selected file lane keeps that transfer local and explicit. The
user's choice to open a file in a first-party recipient must not be silently
converted into an upload to hosting infrastructure.

The file may still be copied, shared, backed up, logged, or opened by an
untrusted application. This design makes no confidentiality guarantee. A
future public or hosted transfer must separately define recipient trust,
retention, expiration, deletion, abuse controls, size limits, provider logs,
and privacy disclosures.

## Scenario validation

| Scenario | Transferable? | Mechanism | State received | Intent/action | Privacy and failure result |
| --- | --- | --- | --- | --- | --- |
| S1 clean public Dataset, NL to LS inspect | Yes | Existing targeted HTTPS URL | Recipient-acquired public Dataset | URL target metadata retained; inspect only | Existing v0 and target failures; no mutation |
| S2 clean public Dataset, LS to future NL capability | Conditional | Existing URL lane if recipient advertises capability | Recipient-acquired public Dataset | Recipient-side capability check | Unsupported capability fails safely |
| S3 modified Dataset, no pending work | Yes, after explicit Export/Open | Existing validated file export and recipient Open | Committed snapshot at export time | Target re-selection required | No public upload; export/acquisition failure preserves source |
| S4 pending-only | Not until resolved | None while pending work remains | No draft transfer | Commit or explicitly discard first | No silent discard; source remains active |
| S5 modified plus pending | Not until both resolved | Export/Open only after resolution | Explicit committed snapshot | No shortcut through replacement UX | Highest-risk case remains non-destructive |
| S6 local Dataset with no source URL | Yes, after explicit Export/Open | File lane | User-selected local snapshot | Target re-selection required | No invented URL or upload |
| S7 large Dataset | Yes if export/file/browser limits permit | File lane | Exported file | No inline URL | URL length is avoided; size failure is explicit |
| S8 unknown Extensions | Yes if existing export path preserves them | Existing export path | Unknown data preserved as allowed by round-trip contract | No routing meaning inferred | Unknown Extensions are not interpreted as permissions |
| S9 source tab closes after export | Yes for the already created file | File lane | Exported snapshot remains user-selected artifact | No live source dependency | Later changes are not transferred |
| S10 recipient load failure | No fulfillment | Recipient normal Open path | None accepted | No target action | Source state remains unchanged; retry/manual fallback available |
| S11 export snapshot then source edits further | Yes for the selected snapshot | File lane | Earlier exported snapshot | Target resolves against that snapshot | Must not claim later source state |
| S12 offline use | Yes for local file transfer if both apps/files are available | File lane | Local exported snapshot | Target re-selection required | No backend or public hosting dependency |

## Impact on the URL/Transport Contract

The accepted URL syntax is unchanged. Version 1 remains limited to a
retrievable absolute HTTPS `datasetUrl` plus targeted fragment fields. No
`datasetTransfer`, `datasetTransferToken`, inline payload, fingerprint, or
file reference parameter is reserved by this checkpoint.

The file lane is an explicit out-of-band Dataset acquisition path, not a new
URL transport profile. The URL contract's statement that current-edited state
is outside its first direction remains correct; this document defines the
separate explicit Export/Open boundary.

## Impact on the Target Contract

The abstract `datasetContext` remains sufficient: it may refer to a
transferable Dataset representation. This checkpoint selects two bounded
representations without making the semantic contract URL-specific:

- a retrievable HTTPS acquisition context for clean URL Handoff; and
- an explicitly exported Dataset snapshot for manual file transfer.

The Target Contract does not gain a Core field, Extension field, application
ownership field, revision field, or pending-work field.

## Impact on the capability table

Dataset transfer ability and operation capability remain separate. A recipient
may advertise `relation.delete` while being unable to receive a current local
Dataset through the clean URL lane. Conversely, a recipient may open an
exported Dataset while not supporting the requested capability.

No new capability token is added. A future transfer-mechanism capability would
need evidence that it is independently useful and safe; this checkpoint does
not expand the static capability taxonomy.

## Implementation readiness

The first current-Dataset transfer boundary is accepted as design:

```text
DESIGN ACCEPTED /
FIRST CURRENT-DATASET TRANSFER BOUNDARY DEFINED /
IMPLEMENTATION NOT AUTHORIZED
```

This is not yet authority to add an Export-to-recipient workflow, a file
picker integration, target handoff state, or runtime capability routing. Before
implementation, a bounded readiness checkpoint must decide exact ownership of
the export preparation and recipient-open entry points, verify both apps'
round-trip behavior, define failure presentation, and apply the existing
replacement-safety gates.

## Explicit exclusions

This checkpoint does not authorize:

- automatic upload, silent public publishing, or hosted transfer;
- Blob/Object URL, Web Storage, IndexedDB, inline URL, or token transport;
- browser-specific or Chromium-only E2R-wide behavior;
- a sidecar, cross-tab, postMessage, clipboard, or native file-association
  protocol;
- target metadata embedded in Core Dataset or Extension data;
- Dataset revision fields, content fingerprints, provenance, or authorship;
- draft serialization, autosave, merge, collaboration, or live synchronization;
- automatic recipient redirect or target action;
- changes to the capability table, E2R Core, Extensions, schemas, or Validator;
- endpoint-separator correction or dialog-spacing correction; or
- runtime changes in NarrativeLine, LiaisonScape, Hub, or another application.

## Knowledge Candidate Check

No new `ai-knowledge` entry is created by this checkpoint. The design applies
existing Dataset Replacement Safety, Handoff, Dataset acquisition, browser
history, and application-boundary guidance. The existing anonymous Dataset
sharing research remains separate and unchanged. The pre-existing dirty
`ai-knowledge/playbooks/e2r-edge-cdp-browser-diagnostic.md` file remains
untouched.

## Verification boundary

This design is checked against the accepted Core and Extension boundaries,
Dataset Handoff v0, Dataset Replacement Safety, the Target Contract, the
URL/Transport Contract, current NL/LS export and acquisition paths, Hub's
public/sample model, and the anonymous-sharing research boundary. No runtime,
browser, provider, or application acceptance test is required for this
design-only checkpoint.

## Next bounded step

The next checkpoint is the [Capability Handoff Implementation Readiness]
(cross-app-capability-handoff-implementation-readiness.md) audit. It verifies
exact export/open entry points, round-trip preservation of unknown Extensions,
dirty/pending transitions, failure-state ownership, manual target
re-selection, and the absence of stale URL fallback. Runtime work remains
subject to explicit authorization from that checkpoint.
