# ParameterPlotter Single Active Editor

Date: 2026-10-14

Status: **PRODUCT CONTRACT HUMAN APPROVED / IMPLEMENTED LOCALLY / HUMAN BROWSER ACCEPTANCE PENDING**.

## Scope and authority

Human selected Single Active Editor for ParameterPlotter's initial public
version. The scope is a shared origin and browser storage/profile partition,
not accounts, different browsers, profiles or devices. This is an application
policy, not an E2R Core/Extension rule. Hub, NarrativeLine and LiaisonScape are
unchanged. The [Cross-Context Workspace Safety contract](../cross-app/cross-context-workspace-safety-design-2026-10-10.md)
and Dataset replacement safety continue to apply.

## Approved product contract

- Acquire exclusive editing ownership at startup, before loading the saved
  Workspace into an editable session or starting Dataset acquisition. Hold it
  throughout the document session, including Home and focus/background changes.
- A non-owner shows a dedicated EN/JA notice that another tab is using
  ParameterPlotter, which may be on Home. Direct the user back to that tab and
  to close the duplicate. No Continue, Return, acquisition or editing UI is offered.
- A blocked document does not queue for ownership or automatically take over.
  After the original ends, explicit reload/reopening attempts new ownership
  and loads the latest successfully saved Workspace.
- A blocked Hub Handoff performs no Dataset fetch/apply and retains `datasetUrl`
  intent. The Hub link can be opened again after the original tab ends. Locale
  preference resolution remains independent.
- Unsafe/unavailable ownership coordination fails closed. No storage lease,
  force-takeover or insecure fallback is provided.
- Recovery promises the last successfully saved Workspace; arbitrary unapplied
  form input is not guaranteed after a process crash.

## Implemented lifecycle and persistence boundary

The implementation requests one app-specific exclusive Web Lock with
`ifAvailable`, once. Failed requests do not wait in a queue. Browser termination
of locks follows the [Web Locks standard](https://www.w3.org/TR/web-locks/#termination-of-locks);
the standard is not evidence of a new browser/process-crash test.

`pagehide` ends the document session, invalidates its generation and releases
ownership. A BFCache-restored document stays on the session-ended notice and
requires explicit reload; it never reuses a stale ownership or revision snapshot.
Dataset/draft objects and detached live form controls remain in memory after
ending the session. The inactive document does not expose those controls for
editing; beforeunload still detects their unapplied input. Normal departure
retains beforeunload protection for pending input and degraded persistence,
and now also guards a save still in progress. Export unsaved work before ending
the session. A fresh load reads the saved baseline only after ownership and the
existing write lock are held.

Queued writes recheck ownership/registration after the asynchronous write-lock
and query wait, immediately before the synchronous persistence callback.
Page departure aborts queued write requests and resolves cancellation of a held
write-lock query, so a frozen old document cannot indefinitely block the next
owner behind its unfinished query.
File, sample and Handoff completions also check their captured generation.
The prior write gate, refusal latch, revision comparison, replacement confirmation,
validation, Export baseline, specification declaration and filename remain.

A live older runtime's presence lock also stops new startup, even if its dirty
marker is false. This protects open development sessions. Older code cannot
retroactively honor the new owner lock; mixed runtimes are not a supported
single-editor configuration. No migration, storage reset or browser action is added.

The owner's lock stays authoritative on focus, so owner-mode coordination
omits the old focus-driven peer query. Storage notifications and final peer
checks remain. Normal focus restoration therefore does not insert checking,
replace Continue's DOM, toggle acquisition opacity or move focus. Home safety
notices precede their actions, without a permanent empty warning area.

## Acceptance boundary

[M1-C21](parameterplotter-home-peer-work-safety-evidence-checkpoint-2026-10-14.md)
remains **HUMAN BROWSER ACCEPTED / PASS / CLOSED (BOUNDED)** as historical
two-editable-tab evidence. This new policy supersedes that normal runtime
contract, including non-owner Continue availability; it does not rewrite the
historical closure or establish new acceptance.

[M1-C6 recovery](../../../e2r-parameter-plotter/docs/stale-writer-export-reload-recovery-verification-2026-10-11.md)
keeps its **HUMAN BROWSER ACCEPTED / PASS / CLOSED (BOUNDED)** scope. An owning
tab with degraded memory retains Home Return and existing Workspace Export;
Export cannot clear the save-refusal latch. New ownership/lifecycle behavior
requires its own Human Browser Review.

See the [implementation and verification record](../../../e2r-parameter-plotter/docs/single-active-editor-implementation-2026-10-14.md)
for executable evidence and review cases. Automated/DOM evidence is not real
browser lifecycle, visual, download-completion or assistive-technology acceptance.
Tab C root cause remains **UNRESOLVED**, Diagnostics D2 **OPEN**, PUBLIC RELEASE **NO-GO**.
