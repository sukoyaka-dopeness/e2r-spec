# Remote Dataset Save and Export — Exploratory Research

Status: **Exploratory / NO PROVIDER OR CONTRACT SELECTED**

## Problem framing

NarrativeLine and LiaisonScape currently provide `Export E2R JSON` as a local
file download. Local export lets the user retain a Dataset under their own
control; it does not save or publish that Dataset to a remote destination.

A separate, explicitly initiated operation might let a user save a Dataset
JSON document to a remote server they manage. Candidate destination categories
include a user-managed HTTPS Server, a GitHub repository, and other providers.
GitHub is one concrete example only. This record selects neither a preferred
provider nor a shared provider interface.

If an explicit remote publication produces a publicly retrievable HTTPS
Dataset URL, that URL could connect naturally to existing Dataset Handoff.
Saving to a private or authenticated location may have different acquisition
and sharing behavior; remote persistence alone does not imply a usable public
Handoff URL.

## Responsibility boundary

Keep the existing workflow intact:

```text
current Dataset -> Export E2R JSON -> user-selected local file
```

Any future remote save or publication would be an additional responsibility
with an explicit destination and explicit user action:

```text
current Dataset -> user chooses remote destination and visibility -> remote save
```

Remote save must not silently upload on local export, Dataset open, validation,
application startup, or Handoff. It is not a replacement for local export. The
saved representation, error behavior, and relation to the active in-memory
Dataset remain research questions.

This bounded question differs from:

- [E2R-managed Personal Storage](e2r-managed-personal-storage.md), which
  explores durable account-scoped storage and resource management;
- [Anonymous Dataset Sharing](anonymous-dataset-sharing.md), which explores
  accountless upload to a service that issues a share link; and
- existing Dataset Handoff, which acquires a retrievable Dataset URL and does
  not itself authorize writes to the source.

The existing [Dataset Replacement Safety design](../../docs/cross-app/dataset-replacement-safety-design.md)
and [current Dataset transfer design](../../docs/cross-app/cross-app-capability-handoff-current-dataset-transfer-design.md)
remain relevant evidence. Any later proposal must preserve unsaved Dataset
changes, pending user work, export failure handling, and explicit intent. This
research does not revise those accepted boundaries.

## Open research questions

### Destination and authorization

- How does a user identify and authorize a destination they control?
- What authorization scope is needed to write one selected Dataset, and can
  it be narrower than repository- or account-wide access?
- How should credentials or tokens be requested, transmitted, scoped,
  short-lived, revoked, and kept out of URLs, logs, browser persistence, and
  exported Dataset content?
- Can a static browser application perform the desired write safely, or is a
  provider-specific backend, server-side component, or helper tool required?

### Storage contract and consistency

- What does “save” mean for a new Dataset versus updating an existing remote
  object?
- How are overwrite intent, competing edits, and provider revisions surfaced?
- Which immutable revision, ETag, commit, or other remote version evidence is
  available, and how can it be compared without treating Dataset identity as
  a revision token?
- What should happen after partial success, timeout, retry, authentication
  expiry, CORS rejection, or an ambiguous provider response?
- How can a failure leave the active Dataset and any prior remote revision
  recoverable without claiming a save that did not complete?

### Visibility and Handoff

- How are private, unlisted, and public destinations distinguished and
  confirmed before a write?
- When does a provider return a stable, retrievable HTTPS Dataset URL suitable
  for the existing Handoff contract?
- What access restrictions, redirects, content types, CORS rules, or token
  requirements prevent a remote URL from being usable by a recipient?
- Does publication create a new immutable revision or update a mutable URL?
  What warning is needed when later recipients would acquire changed content?

### Application safety and portability

- How does remote write interact with `datasetModified`, `pendingUserWork`,
  recoverable session state, and Dataset Replacement Safety?
- Which committed snapshot is sent if the current view includes pending or
  derived state? What must be rejected or resolved first?
- What makes a provider-specific result portable if the user changes providers,
  revokes credentials, deletes an object, or loses server access?
- Should a remote save report distinguish successful transport, durable
  storage, retrievable public publication, and recipient acquisition?

## Explicitly unselected

This research does not choose a remote destination, GitHub workflow,
authentication method, API contract, provider abstraction, user interface,
synchronization model, backend architecture, revision scheme, or visibility
default. It does not authorize OAuth/PAT integration, credential storage,
GitHub API use, generic Server API work, or changes to NarrativeLine,
LiaisonScape, Hub, Core, Extensions, schemas, or Validator semantics.

The current local JSON export remains the available portability path while
this exploration is open.
