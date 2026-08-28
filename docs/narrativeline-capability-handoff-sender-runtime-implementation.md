# Status

**XAPP-CAPABILITY-HANDOFF8B-NL-SENDER-IMPLEMENTATION1: IMPLEMENTED /
AUTOMATED GREEN / BOUNDED CROSS-APP SMOKE PARTIAL**

The authorized NarrativeLine sender slice is implemented. The sender builds a
targeted `relation.inspect` Handoff URL for the existing Entity deletion-
resolution Relation row and exposes it through native same-tab anchor
navigation. The full NarrativeLine automated gate is green.

The bounded Edge smoke confirmed the sender surface, exact transport fields,
and navigation to the public LiaisonScape origin, where the same Dataset was
acquired. The current public deployment did not expose the Relation Detail
after the targeted fragment was loaded, so exact public recipient Detail
landing is not claimed by this checkpoint. LiaisonScape source-level and
automated recipient compatibility remain covered by its accepted Handoff6
implementation record.

# Historical blocked attempt

The earlier
[NarrativeLine Capability Handoff Sender Implementation](narrativeline-capability-handoff-sender-implementation.md)
record remains unchanged as historical Handoff8 evidence:

`XAPP-CAPABILITY-HANDOFF8-NL-SENDER1` stopped at the pre-implementation gate
because authorization and navigation semantics were not yet settled. Handoff8A
resolved both blockers and authorized this bounded runtime checkpoint.

# Authorization

The governing authorization is
[Cross-App Capability Handoff Sender Navigation Authorization](cross-app-capability-handoff-sender-navigation-authorization.md),
with readiness details in
[Cross-App Capability Handoff Implementation Readiness](cross-app-capability-handoff-implementation-readiness.md).

The accepted decisions used here are:

- first sender surface: the existing Entity deletion-resolution Relation row;
- recipient: LiaisonScape;
- primary capability: `relation.inspect`;
- navigation: same-tab by default through a native `<a href>`;
- Ctrl/Cmd+Click, middle-click, and context-menu behavior remain native browser
  behavior;
- recipient URL comes from reviewed, environment-aware sender configuration;
- clean Dataset, no pending work, and a known retrievable absolute HTTPS source
  URL are required;
- modified, local, source-less, invalid-source, or pending state must not
  produce a navigation-capable targeted Handoff link.

# Scope

This checkpoint implements one sender use case and one capability. It does not
implement a generic capability registry, generalized discovery, a LiaisonScape
runtime change, Hub routing, modified-Dataset automatic transfer, or a schema
change.

# Sender surface

The existing Relation row in `src/screens/EntityDetailScreen.tsx` retains its
local Remove connection action. When the current Dataset is eligible, a
separate `Open in LiaisonScape` anchor is rendered beside it. The Handoff link
is not a destructive action and does not replace or reorder the local deletion
workflow.

The anchor is omitted when the eligibility result is not available. No stale
`href`, `href="#"`, or inert navigation link is rendered for an ineligible
Dataset.

# Primary capability

The sender emits exactly the authorized primary capability:

`requiredCapability=relation.inspect`

It does not emit a second delete action. Receipt is intended to acquire the
Dataset, resolve the exact Relation, and open the existing Relation Detail
surface without deletion confirmation or Dataset mutation.

# Architecture

The implementation follows the accepted responsibility boundary:

- `src/services/CapabilityHandoffSenderService.ts` owns pure recipient URL
  resolution, eligibility classification, and targeted URL construction.
- `src/services/DatasetHandoffService.ts` exposes the existing source-URL
  validation rule for reuse; its parser behavior is unchanged.
- `src/App.tsx` owns application state and composes the service with the
  existing Dataset, pending-work, export, locale, and Relation presentation
  state.
- `src/screens/EntityDetailScreen.tsx` owns the authorized presentation
  surface and renders the native anchor.
- `src/i18n/messages.ts` owns the English and Japanese user-facing label.
- `src/index.css` contains only the bounded anchor presentation styling needed
  to keep the new link usable beside the existing action.

No URL serialization, capability contract, or eligibility rule was embedded in
the JSX click path.

# Native anchor navigation

The sender uses a real `<a href="...">` with no `target="_blank"`,
`window.open`, synthetic click, forced focus, automatic redirect, or startup
navigation. Normal activation therefore follows same-tab browser behavior,
while modifier and context-menu behavior remains user-controlled by the
browser.

# URL builder

`buildRelationHandoffUrl` produces a fresh flat URL fragment using
`URLSearchParams`. It validates the recipient base URL, requires a non-empty
canonical target ID, requires `relation.inspect`, and requires
`targetContractVersion=1`. The generated fields are:

- `datasetUrl`;
- `targetObjectId`;
- `targetObjectType=Relation`;
- `requiredCapability=relation.inspect`;
- `targetContractVersion=1`; and
- the effective locale.

Existing recipient query parameters are preserved and an old fragment is
replaced. Values are encoded once by the URL API; they are not manually
percent-encoded or concatenated in JSX.

# Recipient config

NarrativeLine resolves a sender-local `VITE_LIAISONSCAPE_URL` override when it
is present and valid. Otherwise it uses the current application origin with
the local `/e2r-liaison-scape/` path for same-origin development composition.
The configured value must be HTTP(S) and must not contain credentials. The
production value is supplied by deployment configuration rather than being
hard-coded into the sender implementation.

# Canonical target identity

The sender passes `relation.id` directly as `targetObjectId`. It does not use a
relation name, endpoint label, short hint, array index, display position, or
presentation string. Duplicate, self, parallel, and hidden Relation cases
therefore retain their object identity at the transport boundary.

# Clean Dataset eligibility

Targeted links are available only when the Dataset is clean, no pending user
work exists, the source URL is present, and the source URL passes the existing
absolute HTTPS Handoff validation rule. The source URL is the acquisition
locator retained for the current Dataset, not the browser URL, Dataset ID, or
title.

# Modified Dataset boundary

When `datasetModified` is true, the sender does not retain or emit a targeted
link based on a stale source URL. The current Dataset remains in NarrativeLine
and the existing explicit Export/Open workflow remains the safe fallback.

# Local Dataset boundary

Local-file, newly created, source-less, blob, data, temporary, invalid, and
otherwise non-retrievable Dataset state does not produce a targeted link. No
fake, temporary, or silently uploaded `datasetUrl` is created.

# Pending-work boundary

Pending user work blocks targeted Handoff even if a source URL exists. The
sender does not auto-save, auto-discard, mutate a draft, or open a replacement
confirmation workflow. Pending state remains owned by the existing
NarrativeLine workflow.

# Export/Open fallback

For modified or local state, the existing explicit Export action remains the
user-controlled route to produce a transferable Dataset. Successful export
clears the sender's application-only source tracking so an old source URL
cannot become eligible later. No automatic file transfer, upload, clipboard
transfer, backend transfer, or recipient redirect was added.

# Dataset mutation safety

Rendering, eligibility classification, URL construction, and anchor
activation do not mutate the Dataset, Entity, Event, Relation, unknown
Extensions, draft, baseline, or `datasetModified` state. The sender does not
invoke the Relation deletion service and does not open a delete confirmation.

# Tests

Focused tests cover the pure builder, flat-fragment encoding, recipient query
and hash handling, configuration validation, clean/modified/local/pending
eligibility, invalid source handling, capability rejection, and empty-target
rejection.

The sender integration test drives the authorized Entity deletion-resolution
surface through the real application composition and asserts the native anchor
and every targeted transport field, including the canonical Relation ID and
locale. Existing Entity deletion integration coverage remains green.

NarrativeLine verification completed:

- focused sender, sender-integration, and deletion tests: 11 passed;
- full `npm.cmd test`: 194 passed, 0 failed;
- `npm.cmd run lint`: passed;
- `npm.cmd run build`: passed;
- `git diff --check`: passed.

The test run retained the repository's pre-existing Vite WebSocket port-use
warnings; they did not cause failures.

# Edge cross-app smoke

A dedicated Edge session and the existing stabilized CDP helper were used for
a bounded smoke, not Formal Cross-App Capability Handoff acceptance.

Programmatic sender evidence confirmed four eligible Relation anchors in the
authorized surface. Each anchor had a valid native `href`, no target override,
the public LiaisonScape recipient path, the public lighthouse Dataset URL,
`targetObjectType=Relation`, `requiredCapability=relation.inspect`,
`targetContractVersion=1`, and `locale=en`. The first anchor's normal click
navigated the same browser tab to the public LiaisonScape URL. Native-dialog
probing found no browser dialog and no delete confirmation.

The public recipient acquired the same lighthouse Dataset and exposed the
canonical Relation IDs in its graph, including the sender's target. However,
the current public deployment did not open Relation Detail from the targeted
fragment during the bounded observation window. Therefore this checkpoint
records recipient URL reachability and Dataset acquisition, but leaves exact
public Relation Detail landing as a follow-up compatibility/deployment check.

# Generic capability-table status

No generic capability table, registry, manifest publication, or generalized
multi-recipient discovery was implemented. The sender uses only the reviewed
first-party LiaisonScape configuration and the one authorized capability.

# Explicit exclusions

This checkpoint does not include:

- LiaisonScape or Hub source changes;
- generic capability discovery or a capability registry;
- modified Dataset automatic transfer;
- file upload, live sync, or third-party discovery;
- Core, Extension, schema, Validator, or Dataset semantic changes;
- endpoint-separator mojibake correction;
- dialog-spacing correction;
- Formal Cross-App Capability Handoff acceptance; or
- deployment, release, push, or publication.

# Next bounded step

Keep the sender implementation and its safety gates as the bounded Handoff8B
result. The next separate checkpoint should reconcile the public LiaisonScape
deployment with the already accepted recipient targeted-landing behavior and,
if required, perform a fresh real-edge acceptance. It must not broaden this
checkpoint into generic discovery, Hub routing, automatic current-Dataset
transfer, endpoint-separator work, or dialog-spacing work.
