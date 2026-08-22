# E2R Application Dataset Handoff v0

Status: design / non-normative.

This document is the E2R specification repository's single source of truth
for the cross-application Dataset Handoff v0 design. It defines an
application handoff convention, not a new E2R Core or Dataset schema.

This document does not:

- change the E2R Core;
- change the Dataset schema;
- define an Extension;
- add a normative interoperability requirement;
- authorize implementation without the required safety work.

## Relationship to Dataset Distribution and Merge

`research/exploratory/dataset-distribution-and-merge.md` is a separate,
non-normative exploratory vision for future multi-Dataset composition, merge,
equivalence, provenance, and lineage.

Dataset Handoff v0 is intentionally smaller:

```text
Dataset URL -> application startup handoff -> one Dataset open
```

The exploratory vision remains the future direction beyond this minimal
handoff contract. It is not redefined or expanded by this document.

## Purpose

Dataset Handoff v0 allows one publicly reachable E2R Dataset to be handed to
an E2R application without requiring a Hub catalog, sample identifier,
account, login, or central Dataset storage service.

The handoff producer may be a Hub, an application, a GitHub Pages site, a
static host, or another third-party site. The receiving application needs only
the handoff URL and the ability to fetch the referenced public Dataset.

## Fixed transport syntax

The v0 transport is an application URL fragment containing one parameter:

```text
#datasetUrl=<percent-encoded absolute HTTPS URL>
```

Example:

```text
https://example-app.example/#datasetUrl=https%3A%2F%2Fdata.example%2Fhistory.e2r.json
```

This is an application startup convention. It is not Dataset-resource
fragment semantics and is not a field inside the Dataset JSON.

## Fragment parsing

The fragment payload is interpreted in a URL-parameter-like namespace.

| Input | v0 behavior |
| --- | --- |
| no `datasetUrl` | normal application startup |
| one non-empty `datasetUrl` | attempt handoff open |
| empty `datasetUrl` | invalid handoff |
| duplicate `datasetUrl` | invalid handoff |
| unknown parameters | ignore for forward compatibility |

Unknown parameters must not make an otherwise valid handoff fail.

The exact parser API and implementation language are intentionally left to
each application.

## `datasetUrl` semantics

`datasetUrl` is not `datasetId`.

It is not:

- Dataset identity;
- Dataset metadata;
- a Dataset Core field;
- a Dataset Extension payload;
- an immutable snapshot identity;
- a content revision identifier.

It is an acquisition location and an application/session-level handoff
instruction:

```text
datasetUrl = where the application should obtain a Dataset now
```

The same URL may serve different content later, and different URLs may serve
equivalent content. v0 does not define revision identity or content hashing.

## URL safety and fetch boundary

The public v0 design supports absolute HTTPS URLs. The following schemes are
rejected or unsupported:

```text
file:
data:
javascript:
other non-HTTPS schemes
```

URLs containing embedded username/password credentials must not be accepted.
An implementation may provide a development-only localhost allowance, but
that is not part of public v0 semantics.

The browser application fetches directly from the Dataset host. The Hub is not
a required proxy, and v0 does not require an E2R server or hosting service.

Public handoff therefore depends on the Dataset host allowing the browser
request, including the required CORS behavior. Private or authenticated
Datasets are outside v0.

Applications must not intentionally forward their own cookies, HTTP
authentication information, or application credentials to a third-party
Dataset host. Exact Fetch API options are implementation details, but
credential leakage is not an acceptable design outcome.

No special `Content-Type` requirement is imposed by v0. The receiving
application must obtain the response body, parse JSON, and validate the
resulting Dataset through its normal pipeline.

## Startup-only behavior

The handoff is inspected once during application startup:

```text
application startup
    -> inspect fragment
    -> datasetUrl present?
    -> fetch Dataset
    -> parse JSON
    -> existing E2R validation/open pipeline
```

Live Dataset switching in response to `hashchange` is outside v0.

`datasetUrl` is a startup handoff instruction, not a live Dataset switching
mechanism.

## Startup precedence

An explicit handoff takes precedence over normal application startup behavior.
For NarrativeLine, the intended precedence is:

```text
1. explicit datasetUrl handoff
2. localStorage resume
3. built-in sample
```

Precedence determines which Dataset is displayed. It does not authorize the
destruction of a previous recoverable session.

If a handoff URL is present but fetch, parse, or validation fails, the
application must not silently fall back to localStorage or a built-in sample.
The user must be shown that the explicit handoff failed. Exact error wording
is implementation-specific. The handoff fragment should remain inspectable so
the user can retry, correct the URL, or explicitly return Home.

## Existing validation and open pipeline

Handoff loading must reuse the application's normal Dataset import/open path.
It must not create a separate interpretation of E2R semantics.

The current known pipelines are:

NarrativeLine:

```text
HomeScreen
 -> App.handleImportDataset
 -> DatasetService.importDatasetJson
 -> JSON parse
 -> legacy migration
 -> E2R Validator
 -> Dataset open
```

LiaisonScape:

```text
App.open(raw)
 -> DatasetService.loadDataset
 -> JSON parse
 -> E2R Validator
 -> Dataset state
 -> graph / coordinate restoration
 -> workspace
```

The future handoff integration point should converge on these existing paths.

## Failure behavior

The following are explicit handoff failures:

- network failure;
- non-success HTTP response;
- CORS failure;
- JSON parse failure;
- E2R validation failure.

These failures must not silently select another Dataset. The application should
retain enough handoff context for retry or inspection and provide an explicit
way to leave the failed handoff state.

## Fragment lifecycle

When Dataset A is opened through a handoff URL, the URL remains a useful
handoff reference:

```text
#datasetUrl=A
```

This means “open Dataset A from this location”; it does not mean that the
current in-memory, unexported editing state is represented by the URL.

If the application explicitly replaces the current Dataset with a local file,
new Dataset, or built-in sample, it must not leave a stale `datasetUrl=A` that
misrepresents the displayed Dataset. The application should remove or update
the handoff parameter as part of that explicit replacement. The exact browser
history API is an implementation detail; avoiding unnecessary history entries
is preferred.

If a remote Dataset B is explicitly opened, the handoff reference may be
updated to:

```text
#datasetUrl=B
```

If handoff loading fails, the fragment must not be silently removed.

## Screen navigation versus Dataset replacement

These are different operations.

Screen navigation includes Home, Timeline, Event Detail, Entity Detail, and
Workspace transitions. It does not by itself replace or discard the active
Dataset.

Dataset replacement includes:

- Open Dataset;
- Open Sample;
- New Dataset;
- Dataset handoff open;
- future remote Dataset open.

The replacement safety policy applies to all of these operations, not only to
`datasetUrl`.

## Unsaved-work safety requirement

The following principles are required design boundaries for future
implementation:

> Handoff must not silently discard unrecoverable unsaved work.

> Handoff startup precedence determines which Dataset is displayed; it does
> not authorize destruction of a previous recoverable session.

Dataset replacement safety is an application editing-model concern shared by
handoff and existing Open/New/Sample operations. The current implementation
status is:

```text
NarrativeLine: DATASET REPLACEMENT SAFETY PARITY subsequently IMPLEMENTED
AND ACCEPTED within the bounded NarrativeLine scope; the design-time
deferral is historical
LiaisonScape: D1-D7 IMPLEMENTED AND ACCEPTED
```

Therefore, the implementation sequence is:

```text
Dataset Handoff v0 design
    -> Dataset Replacement Safety D1-D7 design checkpoint
    -> Dataset Replacement Safety implementation
    -> Dataset Handoff v0 implementation
    -> Hub direct sample handoff
```

The D1-D7 policy is documented separately in
`docs/dataset-replacement-safety-design.md`. This document does not implement
dirty tracking, confirmation dialogs, `beforeunload`, autosave, recovery
history, or persistence redesign.

## Current application evidence

Fragment compatibility audit:

```text
NarrativeLine: CLEAR
LiaisonScape: CLEAR
```

Neither application currently uses `location.hash`, `hashchange`, or a hash
router for runtime navigation. LiaisonScape does use `pushState`,
`replaceState`, and `popstate` for screen navigation, but that does not occupy
the fragment namespace.

Replacement safety audit:

```text
NarrativeLine: DATASET REPLACEMENT SAFETY PARITY subsequently IMPLEMENTED
AND ACCEPTED within the bounded NarrativeLine scope; the design-time
deferral is historical
LiaisonScape: D1-D7 IMPLEMENTED AND ACCEPTED
```

NarrativeLine has a single `narrativeline.lastDataset` localStorage slot,
which remains partial recoverable session state rather than a complete dirty
state. The subsequent bounded implementation added Dataset baseline tracking,
pending-user-work detection, candidate staging, replacement confirmation, and
conditional `beforeunload` protection. Its current acceptance is recorded in
`docs/narrativeline-dataset-handoff-v0-formal-completion-acceptance.md`.

LiaisonScape has completed and manually accepted D1-D7 implementation,
including Dataset baseline tracking, pending-user-work detection, D6
replacement confirmation, and conditional D7 `beforeunload` protection. The
implementation result and evidence are recorded in
`docs/dataset-replacement-safety-liaison-scape-implementation-result.md`.

The conclusion is:

```text
Transport compatibility: accepted
Implementation readiness: LiaisonScape implementation complete and manually
accepted; NarrativeLine bounded implementation complete and accepted; Hub
follow-up remains deferred
```

The accepted LiaisonScape implementation evidence is recorded in
`docs/dataset-handoff-v0-liaison-scape-implementation-result.md`.

## Mutable URL and future revision boundary

Because `datasetUrl` is a location, the content obtained from the same URL may
change. This is valid v0 behavior; `datasetUrl` is not immutable revision
identity.

Future content identity or revision work may introduce a content hash or
related provenance data. That work is outside v0. Raw-byte hashing and
canonicalized-Dataset hashing are distinct design choices and must not be
implicitly conflated.

## Explicit non-goals for v0

The following are outside Dataset Handoff v0:

- contentHash;
- Provenance;
- Dataset lineage;
- revision tracking;
- fork or derivation tracking;
- multiple `datasetUrl` values;
- multi-Dataset viewing;
- merge or combine;
- equivalence or same-subject grouping;
- update import;
- Entity/Event deep links;
- view-state handoff;
- `hashchange` live switching;
- private or authenticated Datasets;
- account or login requirements;
- Hub-specific sample IDs;
- an application-internal Hub sample registry.

These may be addressed by separate future design work, including the existing
Dataset Distribution and Merge exploratory vision.

## Implementation status

This is a design checkpoint only.

```text
Dataset Handoff v0 design: documented
Dataset Handoff v0 implementation: LiaisonScape complete and manually accepted
Dataset Replacement Safety D1-D7 design: documented
Dataset Replacement Safety implementation: LiaisonScape D1-D7 accepted;
NarrativeLine bounded implementation accepted; the earlier parity deferral is
historical; Hub follow-up remains deferred
```
