# ParameterPlotter Home Peer-Work Safety Evidence Checkpoint and Limited Acceptance Closure

Date: 2026-10-14

Status: **M1-C21 HUMAN BROWSER ACCEPTED / PASS / CLOSED (BOUNDED).** Human
approved the bounded acceptance below on 2026-10-14. M1-C6 remains
**HUMAN BROWSER ACCEPTED / PASS / CLOSED (BOUNDED)**. The separate Tab C
Continue Editing anomaly remains **UNRESOLVED**. Diagnostics D2 remains OPEN;
PUBLIC RELEASE remains NO-GO.

## Scope and authority

This checkpoint covers ParameterPlotter's Home peer-work action availability
implemented under M1-C21 and the follow-up repairs in M1-C22 through M1-C24.
It records the Human Browser observations supplied for this checkpoint,
current source and automated-test evidence, and the limits of each evidence
class. It is not a Cross-Context Workspace Safety closure.

The adopted cross-context contract is the
[E2R-SPEC Cross-Context Workspace Safety design](../cross-app/cross-context-workspace-safety-design-2026-10-10.md).
Reusable review guidance is recorded in the `ai-knowledge` repository's
[`cross-context-workspace-safety` decision](../../../ai-knowledge/decisions/cross-context-workspace-safety.md)
and [`workspace safety review playbook`](../../../ai-knowledge/playbooks/workspace-safety-review-and-acceptance.md).
The separate bounded copy/locale closure is
[ParameterPlotter Cross-Tab Warning UX Human Acceptance Closure](parameterplotter-cross-tab-warning-ux-human-acceptance-closure-2026-10-12.md).
The earlier M1-C6 recovery evidence and its already accepted boundary remain in
the ParameterPlotter
[stale-writer / Export / Reload verification record](../../../e2r-parameter-plotter/docs/stale-writer-export-reload-recovery-verification-2026-10-11.md).

## Adopted M1-C20 design boundary

Human-approved Proposal C governs Home acquisition actions:

- `clear`: New Dataset, Open E2R Dataset, and Sample Dataset are available.
- `work`, `checking`, or `unknown`: those acquisition/replacement actions
  remain visible but unavailable, with an explanation and a recovery path.
- Continue Editing remains a local return to an available saved Workspace;
  it does not acquire or replace a Dataset and must remain available during
  peer work when that Workspace can be resumed.
- Return to Workspace remains the M1-C6 recovery path when an available
  in-memory Workspace is degraded.
- Locale changes and other non-replacement actions remain available.

These Home affordances are an early UX guard. The write gate, Workspace lock,
replacement confirmation, refusal latch, and unload protection remain the
final safety controls. A stale Home status must not authorize a destructive
write.

## Evidence by milestone

Evidence classes below are kept separate. Human Browser results are
Human-reported observations from the named same-origin InPrivate session and
screenshots; they are not Codex browser reproductions. Automated tests and
source inspection support implementation behavior but do not expand Human
acceptance.

### M1-C21 — initial implementation and Human review

**Human Browser PASS, reported:** in a clear state, New / Open / Sample were
available and the built-in Ashen Crown sample could be acquired. Tab B detected
Tab A's unapplied title draft, disabled those three acquisition actions, and
showed a warning and recovery guidance.

**Human Browser FAIL, reported:** after Tab A reverted the title draft to its
saved value, Tab B remained restricted until Tab A reloaded. This failure is
retained as history; the subsequent repair and retest are recorded below.

The initial review establishes the tested Home state and the observed stale
peer restriction only. It does not establish all editing paths or all
coordination states.

### M1-C22 — recalculate protection after draft resolution

The implementation was changed so loss-sensitive workspace work is
re-evaluated as draft input changes, rather than leaving the coordinator
active after a draft has been reverted. This addressed the reported need to
reload before the peer restriction cleared.

### M1-C23 — aggregate independent protected drafts

The implementation now evaluates the combined loss-sensitive state across
current drafts (including title, Entity, Dimension, and Assessment editing)
alongside Dataset-modified and degraded Workspace state. Reverting or
cancelling one draft must not clear peer protection while another protected
draft or loss-sensitive condition remains.

Automated tests cover the aggregation and independent draft interference.
The present Human Browser evidence below specifically retested the title path;
it is not a browser test of every editor or every input method.

### M1-C22/C23 — post-fix Human Browser retest

**Human Browser PASS, reported:** an unapplied title change in Tab A enabled
peer protection in Tab B; restoring the title cleared the restriction without
reloading; entering a title change again re-enabled protection. This retains
the initial M1-C21 failure as history while documenting the bounded post-fix
recovery.

### M1-C24 — keep Continue Editing stable during peer refresh

The source-level diagnosis found that peer-status refresh could replace the
whole Home markup while an interaction was in progress. Such replacement could
detach the Continue Editing button before its click completed. The same refresh
path could focus New Dataset, consistent with the reported focus movement.
This was a plausible cause supported by code structure and the Human
observation; no runtime event trace established the precise click-loss timing.

The implementation now updates the peer-status region and acquisition action
availability in place. It retains the Continue Editing DOM node during these
refreshes and does not force focus to New Dataset. Continue Editing's action
remains a local switch to the existing Workspace view; it does not call the
Dataset receiving/replacement path or start persistence. The final write gate
and acquisition guard remain in place.

**Human Browser PASS, reported after M1-C24:**

- Tab B showed the peer warning and kept New / Open / Sample unavailable.
- Continue Editing returned to the Workspace while peer work remained.
- The saved Dataset title remained `灰冠の王国`; Tab A's unapplied
  `灰冠の王国 TEST A` input remained present.
- Returning Home retained peer protection.
- Reverting Tab A's title cleared Tab B's warning and restrictions without a
  reload.
- Re-entering a title change restored the restriction.
- The unexpected focus outline was not observed again.

These are Human-reported browser observations from the stated two-tab
InPrivate sequence. They provide direct interaction evidence for that sequence,
not a general proof of focus behavior for every browser, input mode, or timing.

## Current automated and source evidence

On 2026-10-14, the current ParameterPlotter worktree ran
`npm.cmd run check` successfully: syntax checks passed for 38 application
modules and all **210/210 tests passed**. Relevant automated coverage includes:

- Home acquisition is blocked for `work`, `checking`, and `unknown`, and
  enabled for `clear`.
- Continue Editing and Return to Workspace are not blocked by the acquisition
  guard.
- Peer refresh updates the status region and acquisition availability while
  retaining the same Continue button node.
- Current draft aggregation and independent draft revert/cancel behavior.
- Coordinator reporting, peer-status changes, fail-closed checking,
  replacement protection, saved-revision protection, and sticky write refusal.

Current source inspection confirms that Continue Editing only changes the
local surface to Workspace and renders that surface. It does not call
`receiveDataset`, `activateIncoming`, `scheduleWorkspaceSave`, or the write
gate. New / Open / Sample remain guarded at the Home click handler, while the
replacement and persistence gates still protect their underlying operations.

Automated tests establish modeled and wired behavior. The focused
Continue-button identity test exercises in-place peer updates with a test DOM;
it is not a real-browser timing or accessibility test. No browser was operated
by Codex for this checkpoint.

## Scope assessment

| Requirement | Evidence class | Bounded result |
| --- | --- | --- |
| Clear permits New / Open / Sample | Human Browser + Automated | PASS in the reviewed flow and modeled state. |
| Peer work disables acquisition actions and gives guidance | Human Browser + Automated | PASS for the reviewed title-draft case; checking/unknown are automated/source coverage, not Human Browser acceptance. |
| Reverting a title draft clears peer restriction without reload; re-entry restores it | Human Browser + Automated | PASS in the reported two-tab sequence. |
| Continue Editing returns to the existing Workspace during peer work | Human Browser + Automated + Source | PASS in the reported sequence; source confirms local surface transition. |
| Continue does not replace Dataset or initiate a save | Source + Automated | No such call in the Continue branch; no browser instrumentation was performed. |
| Other independently protected drafts keep peer protection active | Automated + Source | Covered by aggregate draft tests, but not separately exercised in this Human Browser sequence. |
| `checking` / `unknown` fail closed | Automated + Source | Acquisition remains unavailable unless status is `clear`; no Human Browser test claimed. |
| Unusual focus movement after refresh | Human Browser + Source | Not observed again after C24 in the reported sequence; exact prior event timing remains unproven. |
| Every editor, browser, and timing interleaving | Not verified | Outside this limited proposal. |

The observed C24 issue has a consistent source-level explanation and the
Human-reported post-fix sequence passes. The exact low-level event timing was
not captured, so this record does not claim instrumented proof of the original
click-loss mechanism.

## Limited Acceptance Proposal — submitted before Human decision

The proposal recommended accepting the bounded M1-C21 Home peer-work behavior.
Human subsequently approved that recommendation on 2026-10-14; the formal
closure and exact accepted boundary are recorded below.

The proposed scope is limited to the reviewed local two-tab ParameterPlotter
flow: clear-state acquisition; a title draft disabling New / Open / Sample in
the other tab; explanation and recovery guidance; title-draft revert clearing
the restriction without reload; re-entry restoring it; and Continue Editing
returning to the existing saved Workspace during peer work while the observed
Dataset and unapplied title draft remain intact. The proposal includes the
automated checks and current source behavior described above as supporting
evidence, not as Human Browser acceptance.

The proposal did **not** request acceptance of every editor or input method in a browser,
all timing interleavings, all browsers or assistive technologies, or
production-hosted same-origin behavior. It does not extend M1-C6, change the
separate Cross-Tab Warning UX closure, close Cross-Context Workspace Safety,
or establish release readiness.

## Formal Limited Acceptance Closure — Human-approved

On 2026-10-14, Human approved **M1-C21: HUMAN BROWSER ACCEPTED / PASS / CLOSED
(BOUNDED)** for the following same-origin, two-tab Edge InPrivate operations
reported in the M1-C25 evidence checkpoint:

1. With peer status clear, New / Open / Sample were available and the Ashen
   Crown sample `灰冠の王国` was acquired.
2. Tab B detected Tab A's unapplied title change and made New / Open / Sample
   unavailable while displaying the restriction reason and recovery guidance.
3. Reverting Tab A's title cleared Tab B's restriction without reloading;
   entering a title change again re-enabled peer protection.
4. Continue Editing returned Tab B to its existing Workspace during peer work.
   The saved Dataset remained `灰冠の王国`, and Tab A's unapplied
   `灰冠の王国 TEST A` input remained present.
5. Returning from Workspace to Home retained peer protection. Reverting the
   title again cleared the warning and restrictions without a reload.

This acceptance is based on the Human Browser observations above, supplemented
by the automated and source evidence separately identified in this record. The
automated checks do not add browser-accepted cases. The initial M1-C21
restriction that persisted until Tab A reloaded remains recorded as the
historical failure; M1-C22/C23 repairs and the post-fix Human retest supersede
it only for the retested title-draft transitions. The M1-C24 Continue Editing
failure and focus observation likewise remain in the history; the reported
post-fix sequence passed, while the precise pre-fix click-loss timing was not
instrumented.

The closure excludes all editors and input methods not listed above, all
timing interleavings, keyboard-only and assistive-technology acceptance,
cross-browser compatibility, production-hosted behavior, overall
Cross-Context Workspace Safety completion, and Public Release Readiness. It
does not change M1-C6's existing bounded recovery acceptance or resolve the
separate Tab C anomaly. That anomaly remains **Root Cause UNRESOLVED**.

## Independent follow-ups and exclusions

- The visual consistency follow-up is implemented in the ParameterPlotter
  worktree: unavailable Home acquisition actions now use the disabled
  Workspace Apply button's neutral surface, border, text, and opacity as their
  visual reference. The controls remain focusable `aria-disabled` buttons and
  retain the peer-work status explanation and guarded activation behavior.
  Human visual review is pending; this does not alter M1-C21's bounded
  acceptance status or scope.
- The Dataset title confirmation now uses `Apply title` / 「タイトルを適用」,
  matching NarrativeLine and LiaisonScape terminology. Automated checks cover
  the label and unchanged submit/mutation path; visual layout review remains
  pending, especially at narrow widths.
- Continue Editing's exact pre-fix click-loss timing was not captured with a
  browser event trace. The observed symptom passed the Human post-fix retest;
  further instrumentation is not required for this bounded proposal unless
  the Human considers that causal detail necessary.
- Cross-tab status paths for other editors, keyboard-only operation,
  assistive-technology output, additional browsers, and production hosting
  remain outside the evidence collected here.
- The separate Tab C Continue Editing anomaly is still **UNRESOLVED**. There is
  no evidence that it shares the C24 click-loss cause, and it is not closed by
  this proposal.
- M1-C6 remains **HUMAN BROWSER ACCEPTED / PASS / CLOSED (BOUNDED)** with its
  existing recovery-only scope unchanged.

## Repository and status boundary

This record formalizes only the Human-approved bounded M1-C21 acceptance. No
runtime, test, CSS, Dataset, schema, or Roadmap completion status beyond this
acceptance item is changed. Diagnostics D2 remains OPEN and PUBLIC RELEASE
remains NO-GO.
