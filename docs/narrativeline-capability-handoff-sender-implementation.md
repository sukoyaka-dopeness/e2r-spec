# Status

**XAPP-CAPABILITY-HANDOFF8-NL-SENDER1: BLOCKED / NO RUNTIME CHANGE**

This record stops the proposed NarrativeLine sender implementation at the
pre-implementation gate. No NarrativeLine, LiaisonScape, Hub, schema, Core,
Extension, Validator, or ai-knowledge runtime change is authorized by this
checkpoint.

# Scope

The requested bounded slice was a NarrativeLine sender action from the
existing Entity deletion-resolution Relation row to LiaisonScape, carrying an
exact Relation target for `relation.inspect`. The requested slice was not
implemented because the current readiness authority does not authorize sender
runtime work and does not settle the navigation behavior required by the
sender action.

# Readiness authority

The current
[Cross-App Capability Handoff Implementation Readiness](cross-app-capability-handoff-implementation-readiness.md)
resolves the bounded design decisions and lists NarrativeLine after the
recipient in its recommended sequence, but its current status and conclusion
both say **IMPLEMENTATION NOT AUTHORIZED**. The Handoff8 request therefore
cannot be used to infer authorization that the readiness document explicitly
withholds.

The Handoff8 gate also requires an authority for whether the recipient opens
in the same tab or a new tab/window. The readiness document does not record
that decision, and the live NarrativeLine source has no existing Cross-App
Handoff convention that resolves it. This remains an implementation blocker;
`window.open` or same-tab navigation must not be introduced first and
specified later.

# Sender use case

The proposed first use case remains the existing Entity deletion-resolution
Relation row, limited to inspection. No additional Timeline, More-menu,
Relation-manager, or new Relation Detail surface is authorized by this
record.

# Sender UI surface

The proposed surface remains the existing Relation blocker row. No sender
button, disabled state, fallback copy, or navigation handler was added.

# Capability

The proposed first capability remains `relation.inspect`. Receipt must remain
non-destructive and must not open Delete Confirmation or mutate a Dataset.

# Recipient resolution/config

The accepted direction remains a reviewed first-party, sender-local
LiaisonScape configuration with environment-aware URL resolution. No generic
capability registry, arbitrary recipient URL, Hub route, or dynamic discovery
was added.

# URL builder

No targeted URL builder was added. The accepted flat Handoff3 fields remain
the contract to use after authorization: `datasetUrl`, exact
`targetObjectId`, optional `targetObjectType`, `requiredCapability`, and
`targetContractVersion=1`, with locale only where the existing producer
contract applies.

# Canonical target identity

The eventual sender must use the full canonical Relation ID. Display names,
short labels, list indexes, and DOM-derived identity remain prohibited.

# Clean Dataset eligibility

The accepted gate remains: clean Dataset, no pending user work, and a known
retrievable absolute HTTPS source Dataset URL.

# Modified Dataset boundary

Modified Dataset state must not generate a targeted URL from a stale source
URL. The existing explicit Export then recipient Open boundary remains the
required fallback.

# Local Dataset boundary

Local, sample, new, or otherwise source-less Dataset state must not generate a
targeted URL. The existing explicit Export then recipient Open boundary
remains the required fallback.

# Pending-work boundary

Pending user work must block targeted Handoff. No automatic save, discard,
draft transfer, or dialog was added.

# Explicit Export/Open fallback

No automatic file transfer, upload, clipboard transfer, backend transfer, or
recipient redirect was added. Modified/local handling remains an explicit
Export followed by an explicit recipient Open.

# Locale

No locale behavior was changed. Any future targeted sender must preserve the
accepted separation between target identity and locale preference.

# Action hierarchy

No action hierarchy or dialog spacing was changed. The existing destructive
Entity deletion-resolution flow remains untouched.

# Dataset mutation safety

No Dataset, draft, baseline, source URL, deletion state, or browser navigation
state was changed by this blocked checkpoint.

# Tests

NarrativeLine preflight completed before the stop:

- `npm test`: 187 passed, 0 failed
- `npm run lint`: passed
- `npm run build`: passed
- `git diff --check`: passed

These are baseline checks only; no sender implementation tests or browser
acceptance were run because no sender runtime exists in this checkpoint.

# Edge smoke

No Edge smoke was run. The required same-tab/new-tab decision and sender
runtime are not available, so no cross-app sender claim is made.

# Capability-table status

The accepted ownership direction remains recipient self-declaration plus a
bounded sender-local reviewed catalog. No generic capability table was
implemented or published.

# Explicit exclusions

This blocked record does not authorize:

- any NarrativeLine runtime change;
- a same-tab or new-tab navigation choice;
- a generic capability table or registry;
- arbitrary recipient URLs or Hub changes;
- current Dataset upload or draft transfer;
- automatic confirmation, autofocus, or deletion;
- Core, Extension, schema, Validator, or Dataset semantic changes;
- endpoint-separator or dialog-spacing correction; or
- deployment, release, push, or publication.

# Next bounded step

Update the readiness authority to explicitly authorize the sender checkpoint
and record the sender's same-tab/new-tab behavior, recipient URL source, and
failure handling. Only after that update may Handoff8 be retried as a bounded
NarrativeLine runtime implementation.
