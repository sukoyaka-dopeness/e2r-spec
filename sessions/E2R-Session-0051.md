# E2R Session 0051 - Cross-App Relation Deletion Capability and NarrativeLine Resolution Design

Date: 2026-08-27

## Scope

This session records the recent LiaisonScape dialog-draft closure and the
cross-application Relation deletion audits and design decisions. The work was
kept separate from application implementation. No NarrativeLine,
LiaisonScape, CSS, test, schema, Core, Extension, Handoff, or Dataset deletion
runtime behavior was changed in this session.

## Completed checkpoints

### LS-DIALOG-DRAFT1

`LS-DIALOG-DRAFT1` was formally recorded as **ACCEPTED / CLOSED**. The accepted
scope includes:

- dirty Entity/Relation Detail dismissal protection;
- guarded Creation Escape dismissal;
- safe Delete Confirmation initial focus;
- Create Entity Name autofocus;
- no global Create Relation autofocus because entry paths differ;
- graph-direct Relation browser evidence;
- Credits focus behavior; and
- Creation outside-dialog click no-dismissal with draft retention.

The Creation outside-click contract was verified through Edge CDP for clean and
dirty Entity Creation, dirty Description, generic Relation Creation, JA/EN,
and a representative 320px viewport. Visible Cancel remains explicit discard;
Escape remains a separate clean-close or dirty-confirmation path. Screen-reader
and universal touch testing remain manual boundaries, not known blockers.

The closure was synchronized in the canonical acceptance record and roadmap
by commit `d4e8875` (`docs: close LiaisonScape dialog draft safety`).

### Cross-App Relation deletion audit

`XAPP-REL-DELETE1-AUDIT1` found a safety asymmetry:

- LiaisonScape blocks Entity deletion when any incident Relation remains and
  exposes related Relations for resolution.
- NarrativeLine currently cascades every Relation whose `sourceId` or
  `targetId` is the deleted Entity, including Entity-to-Entity Relations that
  are outside its normal Event-centered presentation.

The NarrativeLine confirmation generically discloses connected Relation
deletion but does not individually expose hidden Entity-to-Entity dependencies.
This was classified as an inspectability/safety follow-up, not a Dataset
integrity failure.

`NL-ENTITY-DELETE1-AUDIT1` initially selected count plus optional/collapsible
details while retaining cascade. That direction was later held and superseded
as the preferred final model because it did not first resolve whether endpoint
deletion should cascade Relation Objects at all.

### Cross-App capability design

`XAPP-REL-DELETE2-DESIGN1` established the following accepted, non-normative
application design direction:

- Relation is a Dataset Object, not an application-owned Object.
- Creation provenance is distinct from deletion authority.
- Present, inspect, edit, explicit delete, and handoff are separate
  capabilities.
- An endpoint Object should not be deleted while incident Relations remain.
- Relation deletion should be explicit and sufficiently recognizable.
- Unsupported blocking Relations should be explainable as Dataset connections
  not normally shown by the current application.
- Capability-based handoff is a future option, not a current hard-coded rule.

The design record is [Cross-App Relation Deletion Capability](../docs/cross-app-relation-deletion-capability.md).
The roadmap was synchronized by commit `7978240`
(`docs: define cross-app Relation deletion capability`).

### NarrativeLine implementation readiness and UX contract

`NL-ENTITY-DELETE2-READINESS1` confirmed that stopping cascade alone would
create a resolution dead end: NarrativeLine has no user-facing individual
Relation delete surface and its current Handoff is Dataset-level only.

`NL-ENTITY-DELETE2-DESIGN2` defined the future atomic implementation contract:

- keep Delete enabled and open a blocked-resolution dialog;
- list all incident Relations in that dialog;
- use human-readable Relation and endpoint presentation;
- add Object ID hints only for ambiguity, following the existing 8+ character
  direction;
- resolve one Relation at a time with inline confirmation;
- count self Relations once and keep parallel Relations distinct;
- keep the dialog open after the last Relation is removed;
- require an explicit subsequent Entity deletion action; and
- do not depend on targeted Handoff for the first implementation.

The cascade stop and resolution surface must land atomically. The design was
marked **READY FOR ATOMIC IMPLEMENTATION**, while implementation itself was
not started.

## Verification

Current application baselines passed without source changes:

- LiaisonScape: 208 tests, lint, and build passed;
- NarrativeLine: 182 tests, lint, and build passed;
- e2r-spec validation passed; and
- diff checks passed.

Known test-run messages about WebSocket port `24678` being in use did not
produce test failures; all reported tests passed.

## Repository state

- e2r-spec is clean and ahead of `origin/main` by two documentation commits;
- NarrativeLine is clean and unchanged, ahead of `origin/main` by two commits;
- LiaisonScape is clean and unchanged, ahead of `origin/main` by two commits;
- ai-knowledge is unchanged.

No push was performed because remote freshness could not be established or
because the checkpoint instructions required preserving existing ahead state.
No runtime implementation checkpoint was created.

## Boundaries and next work

The next implementation task, when separately authorized, is the atomic
NarrativeLine blocked-connection resolution change. It must include the
blocking behavior, local Relation recognition/deletion, accessibility and
responsive contracts, updated EN/JA copy, and replacement tests in one safe
checkpoint. LiaisonScape parity, targeted capability handoff, provenance, and
visual styling remain separate workstreams.

This session does not start any of those implementation tasks.
