# NarrativeLine Final Entity Deletion Cross-App Fix

## Checkpoint

`XAPP-REL-DELETE4-NL-FINAL-ENTITY-DELETE-FIX` was implemented on 2026-08-28.
The result is **IMPLEMENTED / AUTOMATED GREEN / EXPLORATORY REAL EDGE PASS**.
Formal bidirectional Cross-App acceptance remains pending.

This checkpoint addresses X11 from the preceding
[XAPP-REL-DELETE3 bidirectional acceptance](cross-app-relation-deletion-bidirectional-acceptance.md).
That historical record remains unchanged and remains a FAIL record: after two
incident Relations were explicitly resolved, NarrativeLine's final explicit
Entity deletion left `entity-nl-final` in the Dataset.

## Preflight and scope

The NarrativeLine preflight head was `3b2078f` and the e2r-spec preflight head
was `10f2fb9`. LiaisonScape was inspected read-only at `34d8164`; no
LiaisonScape runtime change is part of this checkpoint. The NarrativeLine
implementation is now recorded at `7a695b3` (`fix: complete final Entity
deletion`).

The pre-existing dirty file
`ai-knowledge/playbooks/e2r-edge-cdp-browser-diagnostic.md` was preserved and
was not edited, staged, or committed.

## Deferred presentation findings

The following findings were recorded for later bounded presentation work and
were intentionally not fixed here:

1. NarrativeLine's `src/services/RelationPresentationService.ts` contains the
   literal endpoint separator `竊・` at source line 33 where `→` is intended.
   The endpoint Object names are not being re-encoded by the presentation
   service; the separator itself is a source-level mojibake defect that can
   make the displayed endpoint string look corrupted.
2. NarrativeLine's `.modal-actions` has an explicit 8px gap, while
   LiaisonScape's generic `.detail-actions` used by the existing confirmation
   dialog has no explicit gap. The LiaisonScape Entity-deletion-resolution
   actions do have bounded gaps (12px desktop and 8px narrow). The generic
   dialog should receive a separate visual spacing review; no button-spacing
   change was made here.

These are presentation follow-ups, not evidence that the deletion state
transition or Dataset mutation is incorrect.

## X11 diagnosis

The workflow was inspected from the hidden Event through the related Entity
detail screen, the Entity-deletion resolution dialog, explicit deletion of
both incident Relations, cancellation of the first final Entity confirmation,
and confirmation of the reopened final Entity deletion.

The application-level `handleDeleteEntity` used a render-captured `dataset`
value:

```ts
setDataset(deleteEntity(dataset, entityId));
```

The adjacent Relation deletion handler already used a functional updater. The
Entity service itself is pure and correctly removes only the requested Entity;
it intentionally does not auto-cascade Relations. The defect was therefore
classified as an application orchestration stale-state overwrite risk: a
final Entity update could be derived from an older Dataset snapshot after the
preceding Relation updates.

## Minimal fix and preserved semantics

NarrativeLine now derives the Entity deletion from the latest Dataset state:

```ts
setDataset((currentDataset) => deleteEntity(currentDataset, entityId));
```

No Core, Extension, schema, Relation model, or LiaisonScape change was needed.
The accepted workflow semantics remain:

- incident Relations are resolved explicitly before final Entity deletion;
- no implicit Relation cascade is added to `EntityService.deleteEntity`;
- self, parallel, hidden, and non-normal Relations remain distinct and
  addressable;
- cancelling either confirmation preserves the Entity;
- the confirmed deletion removes the target Entity and leaves unrelated
  Entities and Events intact; and
- unknown Dataset and Extension content remains outside this mutation.

## Regression evidence

Added [the focused final-Entity integration test](../../e2r-narrative-line/tests/entityDeletionFinalIntegration.test.js)
which renders the real NarrativeLine App and verifies the complete sequence.
It asserts that the target Entity and both incident Relations are absent from
the persisted Dataset after confirmation, while the unrelated Entity and
hidden Event remain.

The existing jsdom baseline did not reproduce the original browser-only stale
state symptom before this fix. The new test locks the expected end-to-end
state transition; the source comparison with the already-functional Relation
handler identified the minimal unsafe update.

Verification:

- focused test: `node --test tests/entityDeletionFinalIntegration.test.js` —
  1 passed, 0 failed;
- full suite: `npm test` — 187 passed, 0 failed;
- lint: `npm run lint` — passed;
- build: `npm run build` — passed; and
- `git diff --check` — passed.

The full test run emitted the known WebSocket warning that port 24678 was
already in use; it did not cause a test failure.

## Exploratory Microsoft Edge smoke

Using the local NarrativeLine dev server at
`http://127.0.0.1:5178/e2r-narrative-line/` and a fresh dedicated Edge
profile, the same workflow passed in English. The exported Dataset confirmed:

```json
{
  "nativeDialog": "closed",
  "entityRemoved": true,
  "relationRemoved": true,
  "unrelatedEntityPreserved": true,
  "eventPreserved": true
}
```

This is exploratory Real Edge evidence for the NL-side fix. It is not a
replacement for the formal X1-X14 bidirectional acceptance matrix or locale
parity acceptance.

## Remaining work

The formal bidirectional acceptance must be rerun in both directions, with the
full relation/deletion matrix and locale parity. Capability closure remains
deferred until that evidence is complete. The endpoint-separator mojibake and
the LiaisonScape generic-dialog button-spacing finding also remain deferred to
separate presentation checkpoints.

No push or publication was performed.
