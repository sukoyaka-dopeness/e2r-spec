# NarrativeLine Entity Deletion Resolution Acceptance

Status: **ACCEPTED / COMPLETE within the bounded NarrativeLine scope**

Date: 2026-08-27

## Checkpoint

`NL-ENTITY-DELETE2-ACCEPT1`

The bounded NarrativeLine implementation is formally accepted at:

`6b9e714 fix: finish Entity deletion acceptance blockers`

This acceptance covers the atomic Entity deletion resolution surface defined
by `NL-ENTITY-DELETE2-DESIGN2`. It does not claim that the cross-application
deletion contract is implemented by every E2R application.

## Design lineage

- [Cross-App Relation Deletion Capability](cross-app-relation-deletion-capability.md), which records the accepted cross-app design direction;
- `NL-ENTITY-DELETE2-READINESS1`, implementation boundary E: atomic multi-surface alignment required;
- `NL-ENTITY-DELETE2-DESIGN2`, marked **READY FOR ATOMIC IMPLEMENTATION**;
- the initial NarrativeLine implementation and its prior blocked acceptance attempt;
- `NL-ENTITY-DELETE2-FIX1`, including the first focus, copy, and identity-resolution corrections; and
- `NL-ENTITY-DELETE2-FIX2`, accepted by the implementation commit above.

The historical design and blocked-attempt records remain preserved. This
document records the acceptance result, not a replacement of those records.

## Accepted semantics

Within NarrativeLine:

- A Relation is a Dataset Object; creation provenance does not determine
  deletion authority.
- Entity deletion does not silently cascade-delete incident Relations.
- Entity deletion remains available as the entry action, but is blocked while
  incident Relations remain.
- Every incident Relation is listed and can be explicitly deleted one at a
  time through inline confirmation.
- A self Relation counts as one blocker. Parallel Relations remain distinct
  Relation Objects and distinct blockers.
- The blocked dialog remains open after the last Relation is removed. The
  Entity remains present and a separate, explicit Entity deletion action is
  required.
- Zero-blocker deletion uses a normal Entity-only confirmation in both English
  and Japanese; it does not describe Relation cascade deletion.
- Hidden or out-of-surface Relations are described as Dataset connections not
  normally shown on the current Timeline. No other application is presented as
  owning those Relations.
- The first implementation does not add a general Relation editor, bulk
  Delete all, targeted Handoff, provenance schema, directionality schema, or
  Core, Extension, or schema changes.

## Identity and focus behavior

Relation blocker presentation uses a usable Relation name and directed
endpoint names. Blank names and unresolved endpoints fall back safely. Unique
endpoint names do not receive unnecessary ID hints; duplicate endpoint names
receive a unique hint of at least eight characters, extended on prefix
collision. Duplicate Relation presentations receive a conditional Relation
ID hint, while unique Relations remain uncluttered. Repeated use of the same
endpoint within one Relation does not create a false duplicate-name hint.

The blocked dialog has safe initial focus. Inline confirmation initially
focuses Cancel; cancelling restores the originating Remove connection control.
After a Relation is removed, focus moves to the next surviving stable row or
control, then the previous row when necessary, and finally the safe resolved
state control. The removed Relation is not active, the last blocker does not
auto-delete the Entity, and Entity Delete is not auto-focused.

## Browser evidence

The completed FIX2 browser evidence is valid for the accepted implementation
because the source was unchanged after that evidence and the fresh automated
gates below passed. The recorded Edge CDP target was:

- target: `D70BB31425412E7D0712DB74195C2E3A`;
- URL: `http://127.0.0.1:5175/e2r-narrative-line/`.

The required real-browser scenarios all passed:

1. Japanese zero-blocker confirmation — PASS;
2. English zero-blocker confirmation — PASS;
3. duplicate endpoint identity presentation — PASS;
4. duplicate Relation presentation — PASS;
5. inline confirmation initial focus — PASS;
6. inline Cancel restoration — PASS;
7. surviving-row focus after Relation deletion — PASS;
8. last-blocker resolved state and safe focus — PASS; and
9. explicit final Entity deletion — PASS.

Hard gate: **5/5 PASS**.

## Verification

Fresh verification was run after commit `6b9e714`:

- `npm test`: 182 passed, 0 failed;
- `npm run lint`: PASS, 0 errors and 0 warnings;
- `npm run build`: PASS; and
- `git diff --check`: PASS.

The test run emitted known non-failing messages that WebSocket port `24678`
was already in use. They did not affect the result.

Source audit confirmed that `EntityService.deleteEntity` removes only the
Entity, `getIncidentRelations` calculates all incident Relations by exact
endpoint ID, and `deleteRelation` removes only the requested Relation ID.
The Entity Detail surface contains the accepted blocker, presentation,
confirmation, focus, resolved-state, and EN/JA behavior.

## Repository boundary

During FIX2 and this acceptance, no changes were made to LiaisonScape, Hub,
Validator, E2R Core, Extensions, schemas, or `ai-knowledge`. No Handoff,
bulk deletion, provenance ownership, or directionality semantics were added.

The cross-app design remains accepted while cross-app implementation remains
not yet aligned; this acceptance is limited to the bounded NarrativeLine
implementation.

## Accepted implementation — visual/presentation follow-up

The following are deferred visual/presentation follow-ups and are not
acceptance blockers:

1. Entity Delete button position differs between blocked, resolved, and
   zero-blocker presentation;
2. Relation blocker identity presentation would benefit from clearer Entity /
   Relation line separation; and
3. Japanese `つながりを削除` button wrapping is inconsistent across rows.

They are intentionally not implemented by `NL-ENTITY-DELETE2-ACCEPT1`.
