# Cross-App Capability Handoff URL/Transport Contract

**Checkpoint:** `XAPP-CAPABILITY-HANDOFF3-URL-TRANSPORT-CONTRACT-DESIGN`

**Date:** 2026-08-28

**Status:** **DESIGN ACCEPTED / TRANSPORT CONTRACT DEFINED / IMPLEMENTATION NOT AUTHORIZED**

This document defines the first URL transport for the accepted
[Cross-App Capability Handoff Target Contract](cross-app-capability-handoff-target-contract.md).
It is a design contract only. It does not change NarrativeLine, LiaisonScape,
Hub, the capability table, Dataset Handoff v0, or any Core, Extension, Dataset,
schema, or Validator document.

## Scope and accepted prerequisites

This contract transports the following semantic input:

- a retrievable Dataset context;
- the canonical full target Object ID;
- one primary required capability;
- an optional target Object type consistency hint; and
- no required source or recipient identity metadata.

The following earlier decisions remain in force:

- first-party known applications use a static capability table;
- there is no network registry, third-party discovery, or automatic redirect;
- recipient identity is a discovery/routing result, not target semantics;
- the accepted capabilities are `relation.inspect` and `relation.delete`;
- `relation.delete` requires safe presentation/inspection and explicit user
  action, and is never an automatic mutation;
- Handoff is intent, not a command or authorization to mutate;
- missing, stale, malformed, and unsupported input fails non-destructively;
- locale is orthogonal to target identity and capability; and
- Cross-App Relation deletion remains **CLOSED** as a capability decision.

## Existing Dataset Handoff v0 baseline

The existing bounded transport is a URL fragment with this shape:

```text
https://recipient.example/#datasetUrl=<percent-encoded-absolute-HTTPS-URL>
```

The current applications consume `datasetUrl` during startup. They fetch the
absolute HTTPS URL without credentials, validate the resulting Dataset through
their existing acquisition path, and do not treat a URL as Dataset identity.
The current v0 boundary also rejects empty or duplicate `datasetUrl` values,
malformed URL values, non-HTTPS schemes, and embedded credentials.

Unknown fragment parameters are retained by current URL cleanup. Locale is
already carried in the same fragment and remains independently controlled by
the Cross-App Locale contract. A successful Handoff retains its `datasetUrl`;
an accepted local/sample/new Dataset replacement removes only the relevant
Handoff state with `replaceState`, without a cleanup-only history entry.
Failures retain enough URL state for reporting or retry.

The transport defined below extends this existing carrier. It does not replace
or reinterpret ordinary v0 Handoff.

## Carrier decision

The first transport is the **URL fragment**. Query parameters, pathname
segments, opaque payloads, inline Dataset content, and a separate network
transport are not selected for this direction.

The fragment is selected because it is already the v0 carrier, works with
static hosting, is not sent in the HTTP request for the application document,
coexists with locale, is inspectable during acceptance, and avoids exposing
target intent to the Dataset server through the request URL. Fragment contents
remain visible in the address bar, browser history, copied links, and other
browser-visible contexts; this is not a private transport.

## URL structure

The accepted first syntax is a query-string-like set of flat, case-sensitive
parameters after `#`:

```text
<recipient-application-URL>#datasetUrl=<encoded-HTTPS-URL>&targetObjectId=<encoded-canonical-ID>&targetObjectType=<type>&requiredCapability=<capability>&targetContractVersion=1
```

Parameter order is not semantically significant. Values use ordinary URL
percent encoding. A producer must encode `+`, `&`, `=`, `%`, spaces, and other
reserved characters as required by URL parameter encoding; a consumer decodes
each value exactly once. Nested JSON, base64 payloads, double encoding, and a
namespaced payload are not part of this first contract.

The recipient application URL is selected by the first-party discovery/static
table. It is not placed in the target payload as `recipient`, and target
parameters must not be used to construct an arbitrary destination URL.

## Parameter contract

| Parameter | Requirement | Meaning |
| --- | --- | --- |
| `datasetUrl` | required for targeted and ordinary v0 Handoff | Retrievable absolute HTTPS Dataset acquisition locator. It is not Dataset identity or proof of current in-memory state. |
| `targetObjectId` | required for targeted Handoff | Canonical full Object ID. It is never replaced by a display name or short ID. |
| `targetObjectType` | optional | Exact case-sensitive token `Entity`, `Event`, or `Relation`; a consistency hint only. |
| `requiredCapability` | required for targeted Handoff | Exact stable token `relation.inspect` or `relation.delete`. |
| `targetContractVersion` | required for targeted Handoff | Exact decimal token `1`; it versions this Target Contract transport, not E2R Core, Dataset, or an application. |
| `locale` | optional and orthogonal | Existing locale startup preference. Its accepted values and failure behavior remain owned by the Cross-App Locale contract. |

The first transport carries one primary capability. It does not carry a
`requiredCapabilities` list. The capability catalog/recipient contract
defines that `relation.delete` has safe inspection/presentation as a
prerequisite. This avoids adding general capability negotiation to the URL.

Source application metadata, recipient identity, ownership claims, provenance,
authorization, and localized labels are not transport parameters in version 1.

## Dataset context mapping

The semantic `datasetContext` maps, in this first transport only, to one
retrievable absolute HTTPS `datasetUrl`. It supports a public or otherwise
recipient-retrievable Dataset URL whose normal v0 acquisition and validation
path succeeds.

This version does not support:

- inline Dataset JSON or other large Dataset content in the URL;
- Blob, local-object, session-only, or in-memory Dataset transfer;
- multiple Dataset transport modes in one Handoff;
- credentials, private account/session transfer, or authentication material; or
- a URL that merely names a Dataset without making the intended content
  retrievable and verifiable by the recipient.

The URL remains an acquisition locator. A successful fetch does not by itself
prove that the URL represents the source application's current Dataset state.

## Current-edited Dataset and pending work boundary

If a source has public Dataset A v1 but its current in-memory Dataset is edited
to A v2, sending the v1 URL as though it represented A v2 is forbidden. The
source must not silently fall back to the stale public URL, and the recipient
must not be told that current edits were transferred when they were not.

The first URL transport therefore does not transfer modified current state or
pending drafts. The separate [Current Dataset Transfer Design](cross-app-capability-handoff-current-dataset-transfer-design.md)
defines explicit Export/Open as a bounded out-of-band direction; it does not
add a URL parameter or alter this URL contract.

The existing Dataset Replacement Safety guard remains authoritative:
`datasetModified || pendingUserWork` requires preservation or explicit user
handling before replacing the source Dataset. This transport design does not
authorize bypassing that guard and does not serialize recoverable draft state.

## Target Object ID

`targetObjectId` is the canonical full Object ID from the semantic Target
Contract. It is percent-encoded as a URL parameter and decoded exactly once.
Unicode IDs are allowed if they are valid canonical IDs in the accepted
Dataset; display names, localized names, array positions, short IDs, CSS
selectors, and inferred labels are not substitutes.

The transport parser must reject an empty ID, malformed percent encoding,
duplicate ID parameters, and a value exceeding the implementation's bounded
URL/value size policy. No ID value is interpreted as HTML, a selector, code, or
a deletion command.

## Target Object type

When present, `targetObjectType` must be exactly one of `Entity`, `Event`, or
`Relation`. The tokens are case-sensitive and are not localized. An absent
type does not weaken canonical-ID resolution. A supplied type that does not
match the resolved Object is a target failure with no mutation.

Unknown type tokens are rejected as unsupported target metadata. They must not
be guessed, localized, or silently ignored.

## Required capability

`requiredCapability` is an exact, locale-independent, application-neutral
machine-readable token. Version 1 accepts only:

```text
relation.inspect
relation.delete
```

Localized labels, application-specific function names, arbitrary JavaScript,
and URL destinations are invalid capability values. An unknown capability is a
safe unsupported-capability result. It never causes a fallback to a different
capability.

`relation.delete` means "open the safe relation-deletion surface if the
recipient can support it." It does not mean "delete this Relation now." A
recipient that can inspect but cannot safely complete deletion must report the
request as unsupported; it must not silently downgrade it to inspect-only.

## Targeted-request detection and malformed fields

An ordinary v0 Handoff is a fragment containing `datasetUrl` without any of the
controlled targeted fields. A targeted request is entered when any of
`targetContractVersion`, `targetObjectId`, `targetObjectType`, or
`requiredCapability` is present.

A targeted request requires `datasetUrl`, `targetContractVersion=1`, a
non-empty `targetObjectId`, and an accepted `requiredCapability`. Missing or
malformed targeted fields produce a targeted-request failure. A valid Dataset
acquisition may remain available to the application, but the recipient must
not report the targeted capability as fulfilled and must not silently present
ordinary opening as equivalent success.

Unknown auxiliary fields remain forward-compatible according to the v0
unknown-parameter behavior. Unknown fields never grant a capability or
destructive permission. An unknown required capability is not an auxiliary
field and is always unsupported.

## Duplicate parameters

Ambiguous duplicate controlled parameters are rejected; first-value and
last-value wins are not permitted. This applies to `datasetUrl`,
`targetObjectId`, `targetObjectType`, `requiredCapability`,
`targetContractVersion`, and `locale` according to their respective contracts.
The rejection is non-destructive and must not be resolved by choosing one
value.

## Versioning

`targetContractVersion=1` is required whenever targeted fields are present.
Ordinary v0 Handoff without targeted fields does not require this parameter.

Missing, malformed, duplicated, or unsupported future target contract versions
are targeted-request failures. A recipient must not guess a future version,
interpret it as version 1, or perform a capability action under an unknown
version. The parameter is not an application version, Dataset version, or Core
version.

## Locale coexistence

`locale` may coexist with the targeted parameters in the same fragment. Locale
is parsed and applied according to the existing Cross-App Locale contract;
invalid locale remains a nonfatal locale result and does not become a target
failure. Target IDs and capability tokens remain unchanged by locale, and a
localized display label must never be fed back into transport parsing.

Manual locale changes preserve unrelated target and Dataset parameters. Target
processing does not change locale policy, and locale processing does not grant,
remove, or weaken a capability.

## Parse, acquire, resolve, and act order

The recipient's future implementation must keep these boundaries distinct:

1. Parse the fragment and identify ordinary versus targeted Handoff.
2. Validate encoding, duplicates, required fields, version, and URL policy.
3. Acquire the Dataset through the existing v0 HTTPS fetch path.
4. Parse and validate the Dataset through the normal acceptance path.
5. Resolve the exact canonical `targetObjectId`.
6. If supplied, compare `targetObjectType` with the resolved Object.
7. Check the static recipient capability and its safe prerequisites.
8. Navigate to the safe inspect or deletion-presentation surface.
9. Require the ordinary explicit user action for any mutation.

No step may interpret a URL as a direct delete command. Target metadata cannot
make an invalid Dataset valid, and successful Dataset acquisition cannot make a
missing or mismatched target valid.

## Startup, history, cleanup, and reload

The first implementation boundary is startup-only, matching Handoff v0. A
targeted request is processed once during document startup. No new live
`hashchange` router is introduced by this contract.

On successful targeted processing, the targeted parameters and `datasetUrl`
remain in the current URL, matching v0's inspectable Handoff state. On a
targeted failure they also remain so the failure can be understood or retried.
No cleanup-only history entry is created. If the user explicitly accepts a
local/sample/new Dataset replacement, the application removes the associated
Dataset and targeted Handoff fields together with the existing `replaceState`
policy while preserving unrelated fragment fields such as locale.

Browser Back/Forward continues to be owned by the application's existing
history/navigation behavior. In-app navigation does not re-fetch or re-resolve
the target merely because a view changed. A hard reload is a new startup and
may process the URL again; it still never auto-confirms or auto-deletes. If the
target was deleted in an earlier explicit action, the next processing reports a
missing target.

## Failure and safety behavior

The following are non-destructive outcomes:

- invalid or unsupported `datasetUrl`: v0 acquisition failure; target
  processing does not begin;
- malformed encoding, duplicate controlled fields, missing targeted fields, or
  unsupported target version: targeted-request failure;
- missing or stale target ID: target-not-found/stale-target failure;
- supplied type mismatch: target-type mismatch failure; and
- unsupported capability, including unsupported `relation.delete`: safe
  unsupported-capability failure.

The application may retain a successfully acquired Dataset while reporting a
target-specific failure, but it must not claim that the requested capability
was fulfilled. No URL value bypasses presentation, inspection, confirmation,
replacement-safety, or authorization checks.

## URL size, security, and privacy

The transport carries identifiers and small stable tokens, not Dataset content.
Implementations must apply a reasonable bounded URL/value-size policy and must
decline to generate or accept a targeted URL that exceeds that boundary. The
exact browser/application limit is an implementation-readiness concern, not a
reason to embed a large Dataset or silently truncate a target ID.

The existing v0 security boundary remains in force: HTTPS Dataset URLs only,
no embedded credentials, no `file:`, `data:`, `javascript:`, or other
unsupported schemes, and no arbitrary recipient redirection. Percent-decoding
errors and duplicate values fail safely. Target IDs are treated as data, and
capability tokens are mapped through a static table rather than dynamic code
or function lookup.

Fragment use reduces server-request and Dataset-server leakage compared with a
query transport, but it is not confidential. Target IDs and capability intent
may appear in browser history, the address bar, copied/shared links, browser
diagnostics, and application logs. Version 1 is therefore limited to explicit
first-party, recipient-retrievable Handoff and does not claim private or
authenticated transport.

## Backward compatibility

| Sender | Recipient | Result |
| --- | --- | --- |
| old v0 | old v0 | Ordinary v0 Handoff continues to work. |
| old v0 | version-1-capable | Ordinary v0 Dataset opening; no target intent is inferred. |
| version-1 ordinary v0 | old v0 | Ordinary `datasetUrl` behavior continues; unrelated fields remain unknown to the old parser. |
| version-1 targeted | old v0 | The old parser may open the Dataset using `datasetUrl`, but target intent is not fulfilled and no destructive action occurs. |
| version-1 targeted | version-1-capable | Targeted processing is possible only after all validations and recipient capability checks pass. |

An old recipient receiving `relation.delete` metadata is not authorized to
delete anything. Its ordinary Dataset opening, if successful, is not reported
as fulfillment of the requested capability.

## Canonical examples

The following are normative URL shapes for this transport. The encoded values
are illustrative and must be produced using ordinary URL parameter encoding.

Ordinary v0 Handoff remains unchanged:

```text
https://narrative-line.example/#datasetUrl=https%3A%2F%2Fdata.example%2Fdataset.json
```

Targeted Relation inspection:

```text
https://narrative-line.example/#datasetUrl=https%3A%2F%2Fdata.example%2Fdataset.json&targetObjectId=relation-123&targetObjectType=Relation&requiredCapability=relation.inspect&targetContractVersion=1
```

Targeted Relation deletion presentation:

```text
https://liaison-scape.example/#datasetUrl=https%3A%2F%2Fdata.example%2Fdataset.json&targetObjectId=relation-123&targetObjectType=Relation&requiredCapability=relation.delete&targetContractVersion=1
```

Locale coexists without changing target meaning:

```text
https://narrative-line.example/#locale=ja&datasetUrl=https%3A%2F%2Fdata.example%2Fdataset.json&targetObjectId=relation-123&requiredCapability=relation.inspect&targetContractVersion=1
```

The following are invalid or non-fulfilling examples:

```text
#datasetUrl=https%3A%2F%2Fdata.example%2Fdataset.json&targetObjectId=%E0%A4%A&requiredCapability=relation.inspect&targetContractVersion=1
#datasetUrl=https%3A%2F%2Fdata.example%2Fdataset.json&targetObjectId=relation-123&requiredCapability=relation.delete
#datasetUrl=https%3A%2F%2Fdata.example%2Fdataset.json&targetObjectId=relation-123&requiredCapability=relation.archive&targetContractVersion=1
```

The first is malformed, the second is missing the required target contract
version, and the third requests an unsupported capability. None authorizes a
mutation.

## Design test vectors

| Input condition | Dataset acquisition | Target/capability result | Mutation |
| --- | --- | --- | --- |
| valid inspect request | succeeds | exact target and `relation.inspect` accepted | none during Handoff |
| valid delete request | succeeds | exact Relation and `relation.delete` surface accepted | none during Handoff; explicit user action still required |
| malformed target encoding | succeeds or is not reached | targeted-request failure | none |
| duplicate target ID or capability | succeeds or is not reached | ambiguous-request failure | none |
| unknown capability | succeeds | unsupported capability | none |
| missing target ID | succeeds | targeted-request failure; Dataset may remain visible | none |
| type mismatch | succeeds | target-type mismatch | none |
| invalid Dataset URL | fails under v0 | target processing not started | none |
| locale plus valid target | succeeds | locale and target independently accepted | none during Handoff |
| unknown auxiliary field | succeeds | ignored/preserved without granting meaning | none |
| modified current Dataset without explicit export | not eligible as current-state transfer | targeted Handoff must not claim current state | none |

These are design vectors for the next readiness checkpoint. They are not
runtime test evidence and do not authorize implementation.

## First implementation boundary and explicit exclusions

If a later checkpoint authorizes implementation, its first bounded scope is:

- first-party known recipients only;
- the existing HTTPS `datasetUrl` acquisition path;
- canonical Entity, Event, and Relation IDs;
- `relation.inspect` and `relation.delete` only;
- optional exact-case type hint;
- `targetContractVersion=1`;
- startup-only processing; and
- explicit safe presentation and user action.

It must not add third-party URLs, a network registry, a capability manifest,
general negotiation, automatic redirect, current-edit or draft transfer,
automatic destructive action, Core/Extension/Dataset routing metadata, endpoint
separator correction, or dialog-spacing correction. Those deferred presentation
findings remain unchanged.

## Implementation readiness and next bounded step

This checkpoint is complete at the design level:

```text
DESIGN ACCEPTED /
TRANSPORT CONTRACT DEFINED /
IMPLEMENTATION NOT AUTHORIZED
```

The next bounded checkpoint is the [Capability Handoff Implementation
Readiness](cross-app-capability-handoff-implementation-readiness.md) audit. It
audits the current NL/LS parsers, URL cleanup ownership, startup failure
states, static capability table placement, URL-size policy, and the design
vectors above, together with the Current Dataset Transfer Design. Runtime
changes require explicit authorization.

## Knowledge Candidate Check

No new `ai-knowledge` entry is created by this checkpoint. Existing Handoff v0,
Dataset acquisition, Dataset Replacement Safety, browser history, locale, and
Object ID guidance cover the reusable evidence. The pre-existing dirty
`ai-knowledge/playbooks/e2r-edge-cdp-browser-diagnostic.md` file remains
untouched.

## Verification boundary

The required verification is specification validation, internal-link checking,
exact diff review, and confirmation that runtime repositories, Core, Extension,
Dataset schema, and the dirty CDP playbook are unchanged. No runtime or browser
acceptance test is required for this design-only checkpoint.
