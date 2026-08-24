# NarrativeLine Phase 24 Navigation Safety Acceptance

Date: 2026-08-25
Status: ACCEPTED for the recorded application boundary
Implementation repository: `e2r-narrative-line`

## Scope and authority

This document records the accepted NarrativeLine Phase 24 browser-navigation
safety contract and its automated and Real Chrome acceptance evidence. It is
application documentation, not an E2R Core or Extension change. The current
NarrativeLine implementation and tests remain the implementation source of
truth; this document records the accepted behavior and its boundaries.

The accepted checkpoint includes:

- contextual Header Back for nested screens;
- unsaved and draft-work protection for Browser Back / Forward;
- draft-history sanitation;
- indexed and legacy History safety, including bounded safe rebase;
- same-screen restoration flag consumption; and
- the Real Chrome acceptance boundary for rapid mid-rollback / replay timing.

## Accepted navigation contract

Timeline exposes Home. Event Detail, Entity Detail, Entity Picker, and Entity
Create expose contextual Back. Lower editing action areas remain separate from
this Header navigation contract.

The current loss-risk kinds are:

- `event-changes`;
- `event-draft`;
- `entity-changes`; and
- `entity-create-draft`.

For a loss-risk Browser traversal, the browser destination remains authoritative
after confirmation. Before confirmation, the application rolls back to the
protected current entry and keeps the protected UI rendered. Cancel remains at
that protected entry. Confirm discards only the applicable pending or draft
work and replays the original Browser delta. Header navigation callbacks are
not used as substitutes for a Browser target.

Only one Browser confirmation transaction is active at a time. A later
traversal does not replace the first intent or create a second dialog.

Discarded provisional Event history is rewritten to a Timeline-equivalent
state. Discarded Entity Create history is rewritten to an EntityPicker-
equivalent state. The provisional Event is deleted, while unrelated Dataset
objects remain. Future Forward traversal must not revive either discarded
workflow.

Clean legacy History state remains readable without forced normalization. A
loss-risk traversal involving an unindexed current or target entry uses the
bounded safe-rebase topology: target index 0 and protected current index 1.
Cancel remains at protected index 1; Confirm traverses to target index 0.
Unknown old Forward history may be truncated by this rebase because its
topology cannot be reconstructed safely.

## Same-screen restoration regression

Phase 24C-M-D2 reproduced a production defect in which a sanitized Timeline
Forward restoration left an internal restoration flag set when the restored
screen had the same visible screen identity. The next genuine Timeline to
Event Detail transition consumed that stale flag instead of pushing a new
History entry. The React screen and Browser History topology then diverged,
which could cause a later Entity Detail Browser Back to reach Timeline rather
than the expected Event Detail.

The bounded D3A fix consumes the restoration transaction before the same-screen
early return and synchronizes the previous-screen reference inside the restore
branch. It does not change NavigationService index semantics, safe rebase, or
the popstate state machine.

The regression contract is:

> same-screen sanitized Timeline restoration does not suppress the next user
> navigation history entry

After sanitized Timeline restoration, normal Event Detail navigation must push
the next index and record `currentScreen: "eventDetail"` with the selected
stored Event.

## Evidence and boundaries

Final automated evidence:

- `npm test`: 169/169 PASS;
- Browser focused integration: 19/19 PASS;
- React `act(...)` warnings: 0;
- lint: PASS;
- build: PASS; and
- `git diff --check`: PASS.

Real Chrome Manual Acceptance was accepted for the recorded matrix, including
clean and dirty Event traversal, draft and Entity Create sanitation, Entity and
Coordinate pending work, Header confirmation authority, first-intent-wins,
beforeunload, locale coexistence, and duplicate-History checks.

Rapid mid-rollback / replay timing remains an accepted manual boundary: true
rapid timing is not fully reproducible in deterministic JSDOM, and Chrome may
disable Forward while a transaction has rolled back to the protected entry.
This boundary must not be converted into fabricated timing tests.

During Manual Acceptance, a sanitized Forward once displayed an existing Event
Detail (`Apollo 11 launch`). Discarded draft content did not reappear, and a
subsequent instrumented minimal reproduction passed 5/5. This remains
`OBSERVED ONCE / NOT REPRODUCIBLE / NON-BLOCKING`, not a confirmed defect.

## Knowledge Candidate Check

| Candidate | Classification | Existing/new | Target file | Rationale |
| --- | --- | --- | --- | --- |
| Nested contextual Header navigation | NarrativeLine-specific accepted contract | Existing documentation, now recorded here | This document; existing `docs/narrativeline-timeline-shell-acceptance.md` | The placement and semantics are application behavior, not a Core rule. |
| Loss-risk kinds and Browser traversal transaction | NarrativeLine-specific accepted contract/evidence | Existing Dataset-safety and navigation evidence; consolidated here | This document; `docs/narrativeline-modernization-nl-d5b-internal-navigation-loss-audit-acceptance.md` | The transaction preserves the existing Dataset/pending-work responsibility split. |
| First Browser intent wins | NarrativeLine-specific accepted contract/evidence | New consolidated record | This document | One implementation has direct evidence; cross-app promotion is premature. |
| Draft-history sanitation | Reusable knowledge candidate, not promoted | New candidate remains local | This document | In-place sanitation before future traversal is a useful review prompt, but evidence is currently one application. |
| Legacy / missing-index safe rebase | NarrativeLine-specific accepted contract/evidence | New consolidated record | This document | Safe rebase is a bounded application implementation tradeoff, not a shared History model. |
| Same-screen restoration flags are consumed despite unchanged visible screen identity | Reusable cross-app review candidate, not promoted | Existing `ai-knowledge/hypotheses/narrativeline-react-history-side-effects.md` is related but not duplicated or expanded | This document; existing hypothesis for adjacent React History side effects | The finding is strongly evidenced in NarrativeLine, but no independent repository evidence or explicit workspace adoption exists. |
| Browser target remains authoritative after unsaved-work confirmation | Reusable cross-app candidate, not promoted | New candidate remains local | This document | It is a useful review question for applications with guarded traversal, but currently has one implementation's evidence. |
| Rapid browser-history transactions require real-browser acceptance boundaries | Reusable process candidate, not promoted | New candidate remains local | This document | The boundary is supported by the current JSDOM/Chrome comparison but is not yet a workspace playbook. |
| Sanitized Forward one-off Event Detail | Transient/non-reproducible observation | No entry | None | It passed the later 5/5 instrumented reproduction and remains explicitly non-blocking. |
| Detail Back Confirmation Dialog visual hierarchy | Non-blocking NarrativeLine UI follow-up | Existing roadmap follow-up, extended | `docs/roadmap.md` | Behavior and accessibility are accepted; only visual polish is deferred. |
| Timeline Add Event reachability on long timelines | Non-blocking NarrativeLine UI follow-up | Existing roadmap follow-up, extended | `docs/roadmap.md` | Investigate sticky/floating alternatives later; do not prescribe a FAB or implement now. |
| Detail metadata / Object ID parity | Cross-app information-hierarchy follow-up | Existing LiaisonScape roadmap item, extended | `docs/roadmap.md` | Evaluate NarrativeLine parity with the existing LiaisonScape audit; do not change runtime now. |

No new `ai-knowledge` entry is promoted by this checkpoint. The current
evidence remains repository-scoped and the existing promotion rule requires
independent confirmation or explicit project adoption for a reusable Decision.

## Deferred follow-ups

The following are separate from Phase 24 navigation safety and are not
implemented by this checkpoint:

- polish the visual hierarchy, widths, and alignment of the Detail Back
  Confirmation Dialog;
- evaluate a sticky or persistent Add Event affordance for very long Timelines;
  and
- evaluate Detail metadata / Object ID presentation parity with LiaisonScape,
  including long-ID wrapping, verification, and information hierarchy.

These follow-ups must preserve the accepted navigation, Dataset, draft, focus,
and dialog semantics until their own bounded audits are complete.

## Repository boundary

Phase 24K did not modify NarrativeLine application or test files. The accepted
accumulated Phase 24 worktree remains local and uncommitted. No stage, commit,
push, deployment, release, Core schema change, Extension schema change,
Dataset contract change, or interoperability contract change is part of this
checkpoint.
