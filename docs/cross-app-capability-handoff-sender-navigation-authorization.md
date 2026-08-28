# Status

**XAPP-CAPABILITY-HANDOFF8A-SENDER-NAVIGATION-AUTHORIZATION: DESIGN
COMPLETE / BOUNDED NARRATIVELINE SENDER AUTHORIZED / NO RUNTIME CHANGE**

This checkpoint resolves the two blockers recorded by
`XAPP-CAPABILITY-HANDOFF8-NL-SENDER1`: sender implementation authorization and
the recipient browsing-context policy. It authorizes only the next bounded
NarrativeLine sender implementation. It does not implement runtime behavior.

# Scope

The authorized slice is NarrativeLine sending an exact Relation target from
the existing Entity deletion-resolution Relation row to LiaisonScape for
`relation.inspect`.

This checkpoint decides navigation, failure behavior, source-state
expectations, browser history, and implementation direction. It does not
redesign the sender surface, implement a capability table, transfer modified
Datasets, change Hub behavior, alter Relation deletion semantics, or fix
endpoint separators or dialog spacing.

# Blocking context

The first Handoff8 attempt was stopped and recorded in
[NarrativeLine Capability Handoff Sender Implementation](narrativeline-capability-handoff-sender-implementation.md).
At that time the readiness authority still said `IMPLEMENTATION NOT
AUTHORIZED`, and same-tab versus new-tab/window behavior was not recorded.
That historical record remains unchanged.

# Existing accepted contracts

The following remain authoritative:

- the first sender use case is the existing Relation blocker row;
- the first capability is `relation.inspect`;
- the recipient is LiaisonScape;
- the target is the full canonical Relation ID;
- targeted Handoff uses the accepted flat fragment and contract version `1`;
- only a clean Dataset with no pending work and a known retrievable absolute
  HTTPS source URL is eligible;
- modified, local, sample, new, and pending states do not use a targeted URL;
- modified/local state uses explicit Export followed by recipient Open;
- receiving a targeted request does not itself mutate the Dataset or open
  destructive confirmation; and
- no generic runtime registry or arbitrary recipient URL is allowed.

# Same-tab option

Same-tab navigation has the following bounded advantages:

- it is ordinary document navigation with no popup-blocker dependency;
- an explicit user activation is sufficient;
- there is no opener or reverse-tabnabbing surface; and
- a native anchor can preserve user modifier behavior such as Ctrl/Cmd+Click,
  middle-click, and context-menu opening in another browsing context.

Its costs are that the current NarrativeLine presentation state can be left,
including selection, scroll position, and transient dialogs. Those states are
not part of the Capability Handoff contract. The source Dataset safety gate
means the action is unavailable while unsaved or pending work could be lost.

# New-tab option

New-tab/window navigation would preserve the source page and make comparison
convenient, but it adds popup-blocker, focus, mobile browser, tab-discovery,
and opener-security concerns. It would also require an explicit new-context
announcement and handling of a blocked or null `window.open` result.

Existing Hub and documentation links use new tabs for ordinary external links,
but that is not sufficient evidence to make an application-to-application
Capability Handoff use a different policy. No existing NarrativeLine
Cross-App Handoff convention requires a new tab.

# Security

The recipient must come from a reviewed first-party sender configuration. The
sender must not accept a destination from the Dataset, target payload, user
input, or an arbitrary URL parameter.

The production reference is the known first-party LiaisonScape URL published
by the Hub. The sender implementation must obtain that value through an
environment/build configuration boundary, with local/test values injectable
without selecting the production URL. The recipient URL must be validated as
an HTTP(S) application URL without embedded credentials; production use is
HTTPS.

The Dataset source URL remains subject to the accepted HTTPS/no-credentials
validation. URL construction must use the accepted transport builder and must
not manually concatenate encoded fields or introduce a new syntax.

# Popup-blocker behavior

The selected same-tab policy has no `window.open` call and therefore no popup
blocker handling requirement. URL construction must be synchronous from the
already available eligibility and target state at activation. No fetch, save,
upload, or other asynchronous step may precede navigation.

# Focus

The sender must not force focus restoration or open a new window and call
`.focus()`. The recipient retains ownership of its existing safe Relation
Detail focus behavior. The sender action must not focus Delete or any other
destructive control.

# Source-state preservation

Capability Handoff is not live workspace transfer, session synchronization, or
source-state restoration. Same-tab navigation may discard transient
presentation state according to normal browser behavior. It must not discard
Dataset content because eligibility excludes modified and pending state.

NarrativeLine remains responsible for its normal beforeunload and browser
lifecycle behavior. The sender must not bypass the existing pending-work
protection or silently save, discard, upload, or transfer drafts.

# Browser History

The sender will use normal document navigation. Browser Back may return to the
NarrativeLine document subject to ordinary browser lifecycle and bfcache
behavior; this is not a cross-origin state-restoration guarantee. The sender
must not add targeted intent flags to NarrativeLine's application History
state, and it must not refetch or re-run a target merely because a user
traverses browser history.

The LiaisonScape startup fragment remains recipient-owned. Its existing
startup handling and fragment cleanup continue to govern acquisition and safe
landing.

# Mobile / accessibility

The action must expose an accessible name that identifies LiaisonScape and the
inspection action. Because the default is same-tab, no new-browsing-context
announcement is required. Native anchor semantics give keyboard users and
users of browser commands normal navigation control. Mobile-specific tab
management is not added in this checkpoint.

# Capability-neutral navigation

The browsing-context policy is the same for `relation.inspect` and any future
non-destructive `relation.delete` intent. Capability meaning and destructive
action semantics must not select different tabs. This checkpoint authorizes
only `relation.inspect`; it does not authorize a sender-side delete request.

# Native anchor vs imperative navigation

The next sender implementation is authorized to use a native `<a href>` with
same-tab default behavior. It must render a valid href only when the sender
availability gate succeeds. Ineligible states must not retain a stale href,
use an invalid placeholder link, or silently invoke Export/Open.

Native anchor semantics are preferred here because they preserve explicit user
activation, keyboard behavior, modifier-key choice, accessibility, and
testability without `window.open` or an imperative redirect. The URL must be
constructed by a pure responsibility module; UI code must not concatenate
fragment fields.

# Selected navigation policy

**Same-tab by default.**

Activation is:

```text
explicit user activation
  -> valid targeted LiaisonScape href
  -> same-tab browser navigation
  -> recipient Dataset acquisition
  -> exact Relation resolution
  -> safe Relation Detail landing
```

Users may use normal browser modifier or context-menu behavior to choose a
different browsing context. The sender does not provide a preference toggle or
force a new window.

# Recipient URL authority

The reviewed first-party recipient is LiaisonScape. The current Hub application
link is the production reference for
`https://sukoyaka-dopeness.github.io/e2r-liaison-scape/`, and LiaisonScape's
deployment base is `/e2r-liaison-scape/`.

The sender implementation must keep the recipient URL in a bounded
sender-local config/build boundary, with an environment-aware override for
local development and tests. The UI must not hardcode a production URL or
accept an arbitrary destination. Hub runtime is unchanged.

# Capability-table prerequisite

The current accepted ownership is sufficient for this sender slice:
LiaisonScape self-declares its supported capability and NarrativeLine uses a
bounded reviewed first-party recipient entry. A generic capability table,
network registry, manifest fetch, or third-party discovery mechanism is not a
prerequisite and remains deferred.

# Implementation authorization gate

All fourteen Handoff8A gate items are resolved for the next bounded slice:

| Gate | Decision |
| --- | --- |
| First sender use case | Existing Entity deletion-resolution Relation row |
| First capability | `relation.inspect` |
| Sender surface | Existing Relation blocker row |
| Recipient | LiaisonScape |
| Recipient URL authority | Reviewed sender-local config; Hub production reference; environment-aware override |
| Browsing context | Same-tab by default; native modifiers remain available |
| Navigation direction | Native `<a href>` with pure URL builder |
| Clean Dataset eligibility | Clean, no pending work, valid HTTPS source URL |
| Modified/local fallback | Explicit Export then recipient Open |
| Pending handling | Block targeted action; no automatic save/discard/transfer |
| Target contract | Accepted Handoff3 flat fragment, version `1` |
| Mutation | No sender or receipt mutation; no automatic Delete confirmation |
| Recipient support | LS `relation.inspect` recipient implemented |
| Mixed-version safety | Old recipient may open Dataset but cannot fulfill targeted intent or mutate it |

The next bounded NarrativeLine sender implementation is therefore authorized.
This authorization does not authorize capability-table implementation, formal
cross-app acceptance, Hub targeted Handoff, or any unrelated roadmap item.

# Explicit exclusions

- NarrativeLine runtime changes in this checkpoint;
- LiaisonScape, Hub, Core, Extension, schema, or Validator changes;
- new-tab default, `window.open`, focus forcing, or popup work;
- modified-Dataset automatic transfer or draft transfer;
- automatic save, discard, redirect, confirmation, or deletion;
- generic capability registry or arbitrary recipient URLs;
- endpoint-separator correction;
- dialog-spacing correction; and
- deployment, release, publication, or push.

# Next bounded step

Implement the authorized NarrativeLine sender slice only: application-only
source URL state, clean/modified/pending/local availability gate, pure accepted
target URL builder, bounded LiaisonScape config, and the inspect-only Relation
blocker-row anchor. Verify sender-local tests and the existing NarrativeLine
test/lint/build gates before a separate cross-app Edge acceptance checkpoint.
