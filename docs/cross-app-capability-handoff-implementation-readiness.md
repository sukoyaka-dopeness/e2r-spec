# Cross-App Capability Handoff Implementation Readiness

**Checkpoint:** `XAPP-CAPABILITY-HANDOFF5-IMPLEMENTATION-READINESS`

**Date:** 2026-08-28

**Status:** **READINESS AUDIT COMPLETE / BOUNDED NARRATIVELINE SENDER IMPLEMENTATION AUTHORIZED / NO RUNTIME CHANGE IN THIS CHECKPOINT**

This document audits whether the accepted Cross-App Capability Handoff
contracts can be implemented safely in NarrativeLine and LiaisonScape. It
defines a bounded implementation scope and sequence; it does not change
runtime source, capability declarations, Hub links, the E2R Core, Extensions,
schemas, or Dataset semantics.

## Scope

The audit covers:

- runtime ownership of parsing, acquisition, target resolution, and navigation;
- sender and recipient responsibilities;
- static capability catalog ownership and deployment URLs;
- current Dataset and pending-work safety gates;
- module and orchestration boundaries;
- test layers and Real Edge acceptance; and
- staged rollout and atomicity.

The audit does not reopen the Discovery Audit, Target Contract, URL/Transport
Contract, Current Dataset Transfer Design, or the closed Cross-App Relation
deletion capability.

## Accepted prerequisite contracts

The following are fixed inputs:

- first-party known applications and a static capability direction;
- no network registry, third-party discovery, arbitrary recipient URL, or
  automatic recipient redirect;
- flat fragment transport compatible with Dataset Handoff v0;
- `datasetUrl`, canonical `targetObjectId`, optional `targetObjectType`,
  `requiredCapability`, and `targetContractVersion=1`;
- `relation.inspect` and `relation.delete`, with deletion requiring safe
  inspection/presentation and explicit user action;
- Handoff as intent rather than a command or mutation authorization;
- non-destructive handling of missing, stale, malformed, and unsupported input;
- clean retrievable Dataset URL Handoff;
- modified or local Dataset through explicit Export then recipient Open;
- pending work resolved or explicitly discarded before current-state Handoff;
- committed snapshot semantics with no draft, view state, or live sync; and
- unchanged locale, History, Core, Extension, schema, and Dataset boundaries.

Cross-App Relation deletion remains **CLOSED**. Existing endpoint-separator
and dialog-spacing findings remain deferred.

## Runtime inventory: NarrativeLine

The current NarrativeLine source at accepted runtime HEAD `7a695b3` has these
relevant owners:

| Responsibility | Current owner and evidence | Readiness interpretation |
| --- | --- | --- |
| Handoff URL parsing | `src/services/DatasetHandoffService.ts` | Parses only v0 `datasetUrl`; targeted parsing must be a separate bounded responsibility. |
| Startup acquisition | `App.tsx` startup effect plus `fetchDatasetHandoff` | Reuse the existing fetch and credential-omission boundary. |
| Dataset parse/validation/open | `DatasetService` and `App.handleOpenDataset` | Reuse the normal import, migration, validation, and replacement path. |
| Accepted Dataset state | `App.tsx` React Dataset state and candidate staging | Existing replacement-safety staging remains authoritative. |
| Fragment cleanup | `DatasetHandoffFragmentService.ts` | Preserves unknown parameters and locale; targeted cleanup must not rewrite v0 behavior. |
| Locale | `LocalePreferenceService` and fragment service | Keep locale parsing independent of target metadata. |
| History / Back / Forward | `NavigationService.ts` and App traversal guards | Do not add targeted intent flags to this navigation state. |
| Object selection/detail | Timeline, Event Detail, Entity Detail screens | There is no standalone Relation Detail screen. |
| Relation presentation | `RelationPresentationService` and Entity deletion blocker rows | Specific incident Relations can be recognized with canonical ID hints. |
| Relation deletion | Entity deletion resolution inline confirmation | Bounded relation removal exists, but it is not a general Relation landing surface. |
| Dirty state | `DatasetBaselineService`, `PendingWorkService`, App state | Sufficient inputs for a source availability gate. |
| Export | `DatasetService.exportDatasetJson` and download helper | Validated export path can be reused for explicit file fallback. |
| Open Dataset | App import/replacement pipeline | Existing loss-risk confirmation must remain in force. |
| Source URL tracking | No dedicated current source URL state | A bounded application-state value is required for the authorized sender to distinguish clean retrievable from local/no-source. |

NarrativeLine is therefore a suitable first **sender** for a targeted inspect
request from an existing Relation blocker row, but not the first targeted
recipient for a Relation ID alone. Its current indirect Relation presentation
does not provide a general safe Relation Detail landing surface.

## Runtime inventory: LiaisonScape

The current LiaisonScape source at accepted runtime HEAD `34d8164` has these
relevant owners:

| Responsibility | Current owner and evidence | Readiness interpretation |
| --- | --- | --- |
| Handoff URL parsing | `src/dataset-handoff.ts` | Parses only v0 `datasetUrl`; targeted parsing must remain separate from the v0 contract. |
| Startup acquisition | `App.tsx` startup effect and `fetch` | Reuse the existing omitted-credentials and `App.open` path. |
| Dataset parse/validation/open | `services/DatasetService.ts` and `App.open` | Existing validator and accepted Dataset path are reusable. |
| Accepted Dataset state | `App.tsx` Dataset state and replacement candidate flow | Keep Dataset replacement and target workflow separate. |
| Fragment cleanup | `updateDatasetHandoffFragment` | Preserves unrelated fragment fields; no targeted cleanup behavior exists yet. |
| Locale | `src/i18n.ts` and fragment-independent locale state | Keep target tokens locale-independent. |
| History / Back / Forward | `popstate` view ownership in `App.tsx` | Startup targeted intent must not be added as ordinary view history. |
| Object selection/detail | graph selection and `useDetailDeletionWorkflow` | Exact Relation selection and detail state already exist. |
| Relation presentation | `RelationDetailDialog.tsx` and relation selection | Provides a recognizable Relation surface. |
| Relation deletion | `RelationDetailDialog` plus existing deletion confirmation workflow | Meets the safe presentation and explicit confirmation boundary. |
| Dirty state | `dataset-replacement-safety.ts` and App state | Provides `datasetModified`, `pendingUserWork`, and replacement cases. |
| Export | `validateDatasetForExport`, `serializeDataset`, Blob download in App | Existing validated serialization path is the authority for file fallback. |
| Open Dataset | `loadDataset` and replacement candidate flow | Existing safety confirmation remains authoritative. |
| Source URL tracking | No dedicated current source URL state | A sender implementation would need the same bounded state; it is not needed for the first LS recipient slice. |

LiaisonScape is the first suitable targeted **recipient**. Its Relation Detail
surface can receive an exact Relation ID, show the Relation and endpoints, and
enter the existing explicit deletion flow without opening the confirmation
automatically.

## Runtime inventory: Hub

At Hub HEAD `9de6399`:

- `src/App.tsx` owns human-facing application/sample link configuration;
- `buildDatasetHandoffUrl(applicationUrl, datasetUrl)` creates ordinary v0
  `#datasetUrl=...` links;
- sample cards explicitly launch NarrativeLine or LiaisonScape;
- external links use an explicit user click; and
- no machine-readable capability metadata, target selection, negotiation, or
  capability-like URL field exists.

Hub remains a lightweight publication and explanation surface. It is not the
runtime capability authority, required startup service, or owner of current
Dataset state. Existing sample links must remain ordinary v0 links.

## Required runtime pieces and ownership

The implementation should keep these responsibilities distinct:

| Piece | Responsibility | First owner |
| --- | --- | --- |
| Capability catalog | Reviewed first-party recipient IDs, capability claims, and deployment references | Source-side application catalog, backed by recipient self-declaration; e2r-spec owns the contract, not runtime data |
| Target builder | Convert semantic target plus source gate into accepted flat fragment | NarrativeLine sender module in the first slice |
| Target parser | Parse targeted fragment and preserve ordinary v0 distinction | LiaisonScape recipient module in the first slice |
| Structural validation | Duplicates, encoding, required fields, version, URL policy | Pure recipient parser; no App mutation |
| Dataset acquisition | Fetch and validate Dataset | Existing NL/LS v0 acquisition/open path |
| Target resolution | Exact ID lookup and optional type check | Recipient Dataset service/pure resolver |
| Runtime capability check | Verify local safe capability and prerequisite | Recipient-owned catalog/declaration |
| Safe surface resolution | Open a recognizable Relation Detail surface | LiaisonScape existing detail workflow/orchestration |
| Failure presentation | Distinguish structural, acquisition, target, and capability failure | App workflow state plus localized leaf presentation |
| Source availability gate | Clean retrievable URL versus modified/local/pending | Sender application state plus pure gate |
| Current Dataset fallback | Explicit Export then recipient Open | Existing Export/Open workflows; no automatic file protocol |

No single handler should own all ten responsibilities.

## Modularization boundary

The accepted application modularization decision applies as follows:

- pure fragment parsing/building and availability classification should be
  independently testable responsibilities;
- capability declarations should not be embedded in a Relation dialog or in a
  root component branch;
- target resolution should be a pure Dataset lookup where possible;
- Handoff workflow state should remain separate from Dataset mutation state;
- safe landing should compose the existing detail/deletion workflow rather than
  duplicate it; and
- App may orchestrate lifecycle and navigation but should not become the home
  of parser, catalog, resolver, dirty-state, and dialog logic.

Candidate module names are responsibility guidance, not a required file
layout. A likely first slice is a small targeted-Handoff module beside each
application's existing v0 handoff service, a pure target-resolution function,
and focused tests. No one-function-per-file extraction and no wholesale App
rewrite is justified.

## Shared-code decision

The first implementation should not create a shared runtime package.

| Option | Result |
| --- | --- |
| Equivalent small app-local implementations | Acceptable for independent deployment, provided the same contract vectors are tested. |
| e2r-spec common machine-readable fixture package | Not needed at this checkpoint; the Handoff3 document vectors remain the authority. |
| New shared source/package | Deferred until two independently deployed recipients demonstrate meaningful reusable code and drift cost. |
| Hub-owned shared runtime config | Rejected as runtime authority; Hub remains optional publication/configuration. |

Application-local code avoids package coupling and version-skew deployment
risk. Contract drift is controlled by the e2r-spec document and identical
focused tests, not by premature runtime unification.

## Capability table ownership

Runtime capability information has two distinct owners:

1. Each recipient application owns the truth of what its current runtime can
   safely perform and which surface satisfies the capability.
2. A source application owns a small static routing catalog of reviewed
   first-party recipients and their known capability claims. It may use the
   claim to offer a choice, but the recipient must verify support again.

The e2r-spec repository owns the stable capability vocabulary and contract
semantics. It does not become a runtime dependency or deployment catalog.
Hub may publish or explain reviewed entries, but it is not required for startup
or runtime verification.

This prevents a sender from granting itself or a recipient a capability merely
by changing a URL. It also keeps application ownership separate from Dataset
Object ownership.

## Capability table minimum shape

The first runtime record is intentionally small:

```text
{
  applicationId: "liaison-scape",
  applicationName: "LiaisonScape",       // display metadata only
  capabilities: ["relation.inspect", "relation.delete"],
  requiresSafeInspectionFor: ["relation.delete"],
  launchUrl: deployment-resolved application base URL
}
```

The stable `applicationId`, capability tokens, and prerequisite relationship
are machine-readable. The display name is not routing identity. The launch URL
comes from deployment configuration, not from Dataset content or a fragment
value. No manifest, registry, capability version, third-party entry, or future
Entity/Event taxonomy is added by this checkpoint.

## Development and production URL handling

Local development and production use different application origins. The
catalog must not bake a localhost port into a public contract or use a public
production URL as an implicit test fixture.

The first implementation should use:

- explicit build/test environment configuration for the recipient base URL;
- an HTTPS production base URL for a production build;
- isolated test origins or injected fixtures for automated tests; and
- a missing/invalid URL result that disables the catalog entry rather than
  constructing an arbitrary destination.

The URL is application routing configuration. It is not persisted in the
Dataset, carried in `targetObjectId`, or trusted merely because a sender has a
capability token.

## First real sender use case

The first useful sender direction is:

```text
NarrativeLine Entity deletion-resolution Relation row
    -> LiaisonScape Relation Detail
    -> requiredCapability = relation.inspect
```

This uses an existing user context: NarrativeLine already presents a specific
incident Relation, including identity hints, while LiaisonScape provides a
direct Relation Detail surface with endpoint recognition. The action is
inspect-oriented and does not add a cross-app delete shortcut.

The first sender trigger should be a bounded contextual action associated with
that existing Relation row, subject to a later implementation checkpoint. It
must not be added merely because the transport was designed. If the trigger
cannot be placed without distorting the existing deletion-resolution hierarchy,
the implementation should defer it rather than invent a global Handoff button.

LiaisonScape-to-NarrativeLine targeted Handoff is not the first slice because
NarrativeLine has no general Relation Detail landing surface. A future
asymmetric Event or richer timeline capability may justify that direction.

## Sender responsibilities

For the first NL sender, the source workflow must:

1. obtain the exact Relation ID from the existing Relation row;
2. identify a reviewed recipient catalog entry and deployment URL;
3. classify Dataset source state before building a targeted URL;
4. allow targeted URL generation only when the Dataset is clean, a current
   retrievable HTTPS source URL is known, and no pending work exists;
5. preserve `targetObjectId` exactly and use the accepted capability token;
6. keep locale independent of the target values;
7. require explicit user activation of the contextual action; and
8. report an unavailable capability or fallback without changing the Dataset.

The sender must not infer a source URL from `datasetId`, current page URL,
sample label, or application name. It must not use the original URL when the
current Dataset is modified. It must not create a public upload or silently
discard drafts.

## Recipient responsibilities

The first LS recipient workflow must:

1. parse targeted metadata without changing ordinary v0 parsing semantics;
2. reject malformed, duplicate, missing, or unsupported targeted metadata;
3. acquire and validate the Dataset through the existing v0 path;
4. resolve the exact canonical Object ID in the accepted Dataset;
5. verify an optional exact `Relation` type hint;
6. verify the locally supported primary capability and deletion prerequisite;
7. land on the existing Relation Detail surface only after validation;
8. use non-destructive initial focus and never open deletion confirmation
   automatically; and
9. leave all mutation, cancellation, and confirmation to the existing explicit
   user workflow.

The recipient is the final capability authority. A catalog claim cannot force
it to perform an unsupported operation.

## Relation inspect landing surfaces

### NarrativeLine

NarrativeLine currently has no general Relation Detail surface. Its Entity
deletion-resolution modal shows incident Relations and provides explicit
individual removal. That is a valid source recognition context but is not
sufficient as the first recipient landing surface for a Relation ID alone.

NarrativeLine must not be placed in the first recipient catalog for
`relation.inspect` solely because it can display Relation blocker labels.

### LiaisonScape

LiaisonScape's existing selected-Relation state and `RelationDetailDialog` are
the first safe landing surface. The landing must make the exact Relation and
its endpoints recognizable, preserve the existing detail-dismissal behavior,
and focus a non-destructive control. It may expose the existing Edit/Delete
controls, but target receipt must not open the delete confirmation.

## Relation delete landing surfaces

`relation.delete` is included in the accepted capability vocabulary and the LS
recipient declaration may advertise it, but the first sender use case does not
generate a delete request.

For a later targeted delete request, LiaisonScape must land on the same
Relation Detail surface and require the existing explicit deletion action and
confirmation. It must not auto-open confirmation, autofocus the danger action,
or interpret URL receipt as deletion.

NarrativeLine's blocker-row removal confirmation is contextual to Entity
deletion resolution and is not a sufficient general recipient surface for a
canonical Relation target. NarrativeLine is excluded from the first targeted
delete recipient catalog.

## Dataset safety gate

The source-side gate is application state, not Dataset schema:

```text
targeted URL eligible
    iff datasetModified == false
    and pendingUserWork == false
    and sourceDatasetUrl is a known retrievable absolute HTTPS URL
```

`sourceDatasetUrl` is a bounded application value. It is set only when a
Dataset from a recognized remote Handoff is accepted, and is cleared when a
local, sample, new, or explicit file-open Dataset replaces it. It is not a
Core field, Extension field, Dataset identity, revision, or provenance claim.

The current NL and LS runtimes do not have this dedicated source URL state.
Adding it is required source-side readiness work, but it must be kept separate
from Dataset content and from browser navigation state.

The gate must also preserve the existing `datasetModified || pendingUserWork`
replacement guard. A target request never bypasses replacement confirmation,
draft dismissal, or application exit protection.

## Modified/local fallback

When the gate fails because the Dataset is modified or has no source URL, the
sender does not generate a targeted URL. The accepted fallback remains:

```text
explicit Export of committed Dataset
    -> explicit Open in recipient
    -> recipient validation
    -> user re-selects target
```

The first implementation should guide or report this boundary through existing
Export/Open surfaces. It must not add automatic file transfer, a sidecar, a
clipboard protocol, a temporary endpoint, or a new target metadata wrapper.

Export failure leaves source Dataset, dirty signals, pending work, and target
intent unchanged. The original stale URL is never sent as a fallback.

## Pending work

Pending application work blocks current-state targeted Handoff. The source
reuses existing Save, Cancel, draft-dismissal, and Dataset Replacement Safety
flows where they already resolve the relevant work. It must not create a
second generic destructive dialog solely for Capability Handoff.

For pending-only state, committing the work may produce a clean or modified
Dataset that is then re-evaluated. Explicitly discarding it must use the
existing safety boundary. For modified plus pending state, both must be
resolved; exporting the committed Dataset does not silently transfer the
pending work or continue targeted Handoff.

## Locale boundary

Locale remains an orthogonal fragment concern:

- `targetObjectId`, `targetObjectType`, and capability tokens are locale-free;
- only presentation and failure copy are localized;
- locale changes preserve target metadata and do not re-run the target intent;
- invalid locale follows the existing nonfatal locale contract; and
- the target parser must not use localized Object or capability labels.

## History and reload ownership

Existing startup and navigation owners remain in place:

- the existing Handoff startup path owns one startup acquisition;
- targeted intent is a parsed startup value, not an application view-history
  record;
- Back/Forward restores existing application navigation state and does not
  refetch or re-resolve a target;
- reload may process the current targeted URL again as a new startup;
- successful and failed URL state follows the accepted URL/Transport cleanup
  rules; and
- no ad hoc targeted flags are added to NarrativeLine browser traversal state
  or LiaisonScape view state.

Any new workflow state should have an explicit lifecycle and should not become
an additional browser history topology.

## Error ownership

| Error | Owner | Dataset/action result |
| --- | --- | --- |
| Unsupported or malformed `targetContractVersion` | Pure targeted parser | Target request not fulfilled; no mutation |
| Duplicate controlled parameter | Pure targeted parser | Ambiguous request; no mutation |
| Missing target ID or required capability | Pure targeted parser | Target request failure; no silent ordinary success |
| Malformed target ID encoding | Pure targeted parser | Target request failure; no mutation |
| Invalid/unsupported `datasetUrl` | Existing v0 parser/acquisition | Dataset acquisition failure; no target processing |
| Fetch/JSON/E2R validation failure | Existing Dataset acquisition/open path | Explicit acquisition failure; no fallback Dataset |
| Unknown capability | Recipient capability check | Safe unsupported-capability result |
| Missing target | Recipient target resolver | Dataset may remain; no guessed Object or mutation |
| Type mismatch | Recipient target resolver | Target failure; no mutation |
| Safe surface unavailable | Recipient workflow | Unsupported target surface; no delete |

The internal taxonomy should remain specific for state and tests while the
initial UI may present concise localized explanations. It must not collapse a
parse error, acquisition error, missing target, and unsupported capability into
one success-like `Handoff failed` path.

## Test architecture

The implementation should reuse existing app-local tests and the e2r-spec
document vectors. No shared runtime test package is required now.

### Layer 1: pure contract tests

Each implementation of the targeted transport should test:

- accepted builder output and parameter encoding;
- exact parse of all required fields;
- Unicode and reserved-character Object IDs;
- duplicate controlled fields;
- malformed percent encoding;
- missing and empty targeted fields;
- version `1`, missing version, malformed version, and future version;
- unknown capability and type token;
- locale and unknown fragment coexistence; and
- ordinary v0 URL behavior unchanged.

### Layer 2: recipient integration tests

LiaisonScape should test Dataset acquisition, exact Relation resolution, type
mismatch, missing target, unsupported capability, safe Relation Detail landing,
non-dangerous focus, and the absence of mutation or auto-confirmation.

### Layer 3: source integration tests

NarrativeLine should test source URL tracking and the availability gate for
clean URL, modified, local/no-source, pending-only, and modified-plus-pending
states. It should test that stale URL generation is refused and that explicit
Export/Open remains available without automatic transfer.

### Layer 4: cross-app contract vectors

The same accepted fragment vectors should be applied to NL and LS where each
application is in scope. An old recipient's safe ordinary v0 behavior should
also be covered; targeted intent must not be reported as fulfilled there.

### Layer 5: Real Edge/browser acceptance

Browser tests should be added only after focused pure and integration tests
pass. The existing stabilized CDP helper is reused unchanged.

The Handoff3 design vectors remain document authority for this checkpoint; no
machine-readable fixture implementation is added now.

## Real Edge acceptance plan

| Case | Expected acceptance |
| --- | --- |
| A. ordinary v0 Handoff | Dataset opens exactly as before; no target is inferred. |
| B. valid `relation.inspect` | LS resolves the exact Relation and lands on Relation Detail. |
| C. valid `relation.delete` intent | LS lands on Relation Detail; delete confirmation remains closed. |
| D. delete intent alone | No Relation or Entity mutation occurs before explicit action. |
| E. canonical target | Full ID selects the intended Relation, not a display-name match. |
| F. duplicate names | Endpoint/ID hints preserve exact identity. |
| G. missing target | Non-destructive target error; no substitute Object. |
| H. type mismatch | Non-destructive target-type error. |
| I. unsupported capability | Safe unsupported result; no silent inspect downgrade. |
| J. invalid version | Targeted request rejected; no capability action. |
| K. locale coexistence | Localized copy changes without changing target identity or re-running intent. |
| L. Back/Forward | Existing view history works; target is not refetched on traversal. |
| M. reload | Startup processing may repeat once; no auto-delete or auto-confirm. |
| N. native dialog state | Native browser dialog is verified closed before visual/manual PASS. |
| O. modified Dataset | Stale source URL targeted generation is blocked. |
| P. pending work | Targeted Handoff is blocked until explicit resolution. |
| Q. local Dataset | Explicit Export/Open boundary applies; target is re-selected. |

Visual/manual evidence and CDP/programmatic evidence must be reported
separately. A background DOM result cannot turn an open native dialog or an
unclear browser state into a visual/manual PASS. The existing helper and dirty
CDP playbook are not changed.

## Rollout and atomicity

The safe rollout is **recipient first, then sender**, with one bounded vertical
slice:

1. Implement and test LiaisonScape targeted recipient parsing, exact Relation
   resolution, capability check, and safe Relation Detail landing.
2. Verify ordinary v0 regressions and unsupported targeted requests on the
   recipient.
3. Add NarrativeLine source URL tracking, source gate, and pure target builder.
4. Add the narrowly contextual NL Relation-row trigger only after the LS
   recipient is deployed or otherwise known to understand the target contract.
5. Run the focused cross-app and Real Edge matrix.

Multi-repository atomic commit is not required. The accepted mixed-version
contract makes an old recipient's treatment safe: it may open the Dataset but
cannot fulfill or execute target intent. Nevertheless, the sender must not
expose a user-facing targeted action before a reviewed recipient entry is
available, so rollout configuration prevents sender outrunning recipient.

## Implementation readiness hard gate

The audit resolves all hard-gate decisions for the bounded slice:

1. capability table ownership: recipient self-declaration plus sender-local
   reviewed catalog;
2. application IDs and URL source: stable IDs plus environment-resolved base
   URLs;
3. sender trigger: existing NL Entity deletion-resolution Relation row,
   inspect-only first;
4. recipient landing: existing LS Relation Detail surface;
5. parser owner: recipient-local pure targeted transport module;
6. target resolver: recipient-local pure canonical-ID resolver;
7. capability check owner: recipient runtime declaration/check;
8. Dataset safety: existing dirty/pending guard plus source URL state;
9. modified/local fallback: explicit Export then recipient Open;
10. pending handling: existing resolution flows, no draft transfer;
11. History/reload: existing startup and navigation owners;
12. error boundary: parser, acquisition, resolver, and capability layers;
13. tests: existing app-local layers plus contract vectors;
14. browser acceptance: the matrix above with native-dialog precondition; and
15. staged rollout: recipient first, sender second.

The gate was initially ready for a bounded implementation checkpoint but was
not authorized until the sender navigation policy was resolved. Handoff8A now
records that policy and authorizes the next bounded NarrativeLine sender
implementation only.

## Recommended implementation sequence

### I1: LiaisonScape recipient transport and inspect landing

**Repository:** `e2r-liaison-scape`

**Responsibility:** Parse the accepted targeted fragment, reuse v0 Dataset
acquisition, resolve an exact Relation ID, check `relation.inspect`, and land
on the existing Relation Detail surface without mutation.

**Expected modules:** a small targeted-Handoff parser/service beside the
existing `src/dataset-handoff.ts`, a pure target-resolution responsibility, and
focused tests. Exact file placement remains an application implementation
choice under the responsibility-based modularization policy.

**Tests:** pure transport cases, exact/missing/type-mismatch target cases,
ordinary v0 regressions, Relation Detail landing, focus, and no mutation.

**Exclusions:** sender changes, Hub changes, delete trigger, current Dataset
transfer, new shared package, capability registry, and presentation redesign.

### I2: LiaisonScape delete intent compatibility

Extend the same recipient boundary to accept `relation.delete` as an intent
that lands on Relation Detail. Reuse the existing deletion assessment and
confirmation. Add browser evidence that URL receipt does not open the
confirmation or mutate the Dataset.

### I3: NarrativeLine source gate and builder

**Repository:** `e2r-narrative-line`

Add bounded application-only source URL tracking, clean/modified/pending/local
availability classification, and a pure builder for the accepted flat
fragment. Reuse existing Export/Open fallback and existing replacement-safety
state. Do not add a trigger beyond the bounded surface authorized by
Handoff8A.

### I4: NarrativeLine contextual sender

Add the inspect-only action at the existing Relation blocker row only after I1
and I2 recipient behavior is accepted. Use only clean retrievable Dataset
state. Modified, local, and pending cases remain explicit safe fallback or
blocked outcomes.

### I5: Cross-app acceptance

Run the contract, integration, and Real Edge matrix in both locales where
applicable. Capture the Dataset and mutation evidence separately from visual
and native-dialog evidence.

## First implementation checkpoint

The exact next implementation checkpoint is:

```text
Repository: e2r-narrative-line
Scope: source URL gate + pure targeted builder + inspect-only Relation blocker
       row anchor using reviewed LiaisonScape configuration
Status: implementation authorized by Handoff8A only
```

That checkpoint must list exact owned files before editing, preserve unrelated
work, run NarrativeLine tests/lint/build, and stop before capability-table,
Hub, delete shortcut, current-Dataset transfer, or cross-app acceptance work.

## Explicit exclusions

This readiness checkpoint authorizes only the bounded NarrativeLine sender
slice described above. It does not authorize:

- runtime source changes in LiaisonScape, Hub, or any other repository;
- capability table implementation or publication;
- a new shared runtime package;
- automatic redirect or arbitrary recipient URL;
- current Dataset upload, token, Blob, Storage, inline, or sidecar transfer;
- pending draft transfer, live sync, revision, fingerprint, or provenance;
- automatic confirmation, dangerous autofocus, or destructive mutation;
- changes to ordinary v0 Handoff, locale, or browser history semantics;
- Core, Extension, Dataset schema, Validator, or application-ownership changes;
- endpoint-separator correction;
- dialog-spacing correction; or
- push, deployment, release, or other roadmap work.

## Conclusion

The accepted contracts are implementation-ready for one narrow vertical slice:
LiaisonScape as the targeted recipient, followed by NarrativeLine as the
clean-URL sender for Relation inspection from an existing Relation blocker
context. Handoff8A resolves the sender browsing-context policy as same-tab by
default with native anchor semantics and authorizes the bounded NarrativeLine
sender implementation. Existing Dataset safety and explicit user control
remain the hard boundaries. The sender must not expand into a generalized
Cross-App router.

```text
READINESS AUDIT COMPLETE /
READY FOR BOUNDED IMPLEMENTATION CHECKPOINT /
BOUNDED NARRATIVELINE SENDER IMPLEMENTATION AUTHORIZED
```

## Knowledge Candidate Check

No new `ai-knowledge` entry is created. The result restates the accepted
application modularization decision and existing Handoff, Dataset safety,
History, and application-boundary guidance. The reusable conclusion is already
covered by those accepted decisions. The existing dirty
`ai-knowledge/playbooks/e2r-edge-cdp-browser-diagnostic.md` file remains
untouched.

## Verification boundary

This is an architecture/readiness audit only. Verification covers source
inventory, accepted design consistency, test-layer planning, and exact
documentation diff. No runtime, browser, or CDP acceptance test is run by this
checkpoint.
