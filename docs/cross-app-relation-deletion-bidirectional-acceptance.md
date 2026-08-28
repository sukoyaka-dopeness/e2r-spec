# Cross-App Relation Deletion Bidirectional Acceptance

**Checkpoint:** `XAPP-REL-DELETE3-BIDIRECTIONAL-ACCEPTANCE`
**Date:** 2026-08-28
**Status:** **FORMAL BIDIRECTIONAL ACCEPTANCE: FAIL**

## Scope

This checkpoint exercised bidirectional Dataset transfer and explicit Relation
and Entity deletion between NarrativeLine and LiaisonScape. It covered self
Relations, parallel Relations, hidden/Event-related Relations, duplicate
endpoint names, Relation identity hints, cancel safety, extension preservation,
and final Entity deletion in both directions.

This was an acceptance-only checkpoint. No runtime source, test, fixture, or
configuration file was changed in either application. The disposable fixture
and CDP runner were removed after the run. Capability closure and targeted
Handoff discovery were not performed.

## Runtime under acceptance

| Application | Repository revision | URL |
| --- | --- | --- |
| NarrativeLine | `3b2078f docs: require incremental application modularization` | `http://127.0.0.1:5178/e2r-narrative-line/` |
| LiaisonScape | `34d8164 fix: refine Entity deletion resolution presentation` | `http://127.0.0.1:5179/e2r-liaison-scape/` |

Both runtime worktrees were clean before and after acceptance. No runtime
commit was created.

## Browser and evidence boundary

- Browser: Microsoft Edge `151.0.4129.107`.
- Two separate dedicated temporary Edge profiles were used, one per app.
- Initial CDP acceptance state reported `connected: true`,
  `visualManualAllowed: true`, and native dialog state `closed`.
- The CDP helper was used for target selection, DOM inspection, focus checks,
  native-dialog recovery, file transfer, and export capture. CDP state is not
  treated as visual/manual evidence.
- Screenshots were visually inspected for the blocked LiaisonScape and
  NarrativeLine surfaces. They show the rendered title, explanatory copy,
  blocker cards, safe focus, and available actions.
- The known test-environment WebSocket port warning was emitted by both test
  suites but did not cause a test failure.

## Fixture inventory

The disposable fixture contained 9 Entities, 1 Event, and 13 initial
Relations. It also contained the extension sentinel
`xapp-acceptance-sentinel.id = sentinel-0052`, which had to survive Relation
deletion.

| Object | ID | Endpoint or role |
| --- | --- | --- |
| Entity | `entity-same-a` | `Twin Endpoint` |
| Entity | `entity-same-b` | `Twin Endpoint` |
| Entity | `entity-normal` | `Normal Anchor` |
| Entity | `entity-self` | `Self Target` |
| Entity | `entity-parallel` | `Parallel Target` |
| Entity | `entity-event` | `Event Target` |
| Entity | `entity-nl-final` | `NL Final Target` |
| Entity | `entity-ls-final` | `LS Final Target` |
| Entity | `entity-unrelated` | `Unrelated Entity` |
| Event | `event-hidden` | `Hidden Event` |
| Relation | `relation-normal` | `entity-normal → entity-same-a` |
| Relation | `relation-self` | `entity-self → entity-self` |
| Relation | `relation-parallel-1` | `entity-parallel → entity-same-b` |
| Relation | `relation-parallel-2` | `entity-parallel → entity-same-b` |
| Relation | `relation-event` | `event-hidden → entity-event` |
| Relation | `relation-nav-normal` | `event-hidden → entity-normal` |
| Relation | `relation-nav-self` | `event-hidden → entity-self` |
| Relation | `relation-nav-parallel` | `event-hidden → entity-parallel` |
| Relation | `relation-nav-nl-final` | `event-hidden → entity-nl-final` |
| Relation | `relation-nav-ls-final` | `event-hidden → entity-ls-final` |
| Relation | `relation-unrelated` | `entity-unrelated → entity-same-a` |
| Relation | `relation-nl-final` | `entity-nl-final → entity-unrelated` |
| Relation | `relation-ls-final` | `entity-ls-final → entity-unrelated` |

The initial LiaisonScape export preserved all 9 Entities, the Event, all 13
Relations, and the sentinel.

## Transfer checkpoints

- **T0 LS:** initial LiaisonScape export preserved the complete fixture.
- **T1 LS:** `relation-parallel-1` was deleted; `relation-parallel-2`, the
  self Relation, normal Relation, hidden Relation, and unrelated objects
  remained.
- **T2 NL:** NarrativeLine deleted `relation-event` while preserving its
  `entity-event`, sibling Relations, and unrelated objects. LiaisonScape
  received the delta without resurrecting the deleted Relation.
- **T3 LS:** LiaisonScape deleted only `relation-self`; `entity-self`, its
  remaining navigation Relation, the parallel sibling, and other objects
  remained. NarrativeLine received the result.
- **Final LS branch:** LiaisonScape resolved both final Relations and removed
  `entity-ls-final` on explicit confirmation. The exported result preserved
  `entity-nl-final`, `event-hidden`, unrelated objects, and the sentinel.
- **Final NL branch:** NarrativeLine resolved both final Relations and showed
  the zero-blocker state, but after explicit Entity confirmation the export
  still contained `entity-nl-final`. Its `relation-nl-final` and
  `relation-nav-nl-final` were absent. The result therefore did not satisfy
  exact final Entity deletion.

## Acceptance matrix

| ID | Result | Evidence |
| --- | --- | --- |
| X1 | PASS | T0 LS export preserved the complete Core inventory and extension sentinel. |
| X2 | PASS | LS deleted exactly `relation-parallel-1`; the parallel sibling and all unrelated objects remained. |
| X3 | PASS | NL received an LS-authored normal Relation and displayed it as a blocker, including the hidden/non-surface explanation. |
| X4 | PASS | NL deleted exactly the hidden `relation-event` and kept `entity-event`. |
| X5 | PASS | LS deleted exactly the self Relation; the self Entity and remaining navigation Relation remained. |
| X6 | PASS | Same-endpoint parallel Relations were individually addressable in LS. |
| X7 | PASS | LS received the NL hidden-Relation deletion without resurrecting it. |
| X8 | PASS | NL displayed the two same-name parallel Relations as two distinct blocker cards. |
| X9 | PASS | NL supplied Relation identity hints (`relation-parallel-1` and `relation-parallel-2`) for the ambiguous presentation. |
| X10 | PASS | Both apps reached their accepted zero-blocker state while retaining the target Entity for an explicit final action. |
| X11 | **FAIL** | LS final Entity deletion passed. NL removed both resolved Relations but retained `entity-nl-final` after confirmation. |
| X12 | PASS | The NL failed final export still preserved the Event, unrelated Core objects, and sentinel; LS final export also preserved them. Exact deletion nevertheless remains failed under X11. |
| X13 | PASS | NL hidden-Relation cancel, LS normal-Relation cancel, and both final Entity cancels preserved data. |
| X14 | NOT RUN | The runner stopped on X11 before the final EN/JA locale-parity checks. Earlier EN/JA blocker evidence remained semantically consistent, but this matrix item is not accepted here. |

Because X11 failed, the overall bidirectional acceptance is FAIL. The
NarrativeLine result is a runtime acceptance failure, not a CDP/native-dialog
failure: failure-time inspection showed the browser back on Timeline with no
unresolved application modal, and the subsequent exported Dataset provided the
contrary evidence. The runner stopped at X11, so it did not emit its normal
final helper-state line; this is recorded as an incomplete final-state report,
not as a native-dialog failure.

## Automated gates

- NarrativeLine `npm.cmd test`: **186 passed, 0 failed**.
- NarrativeLine `npm.cmd run lint`: **PASS**.
- NarrativeLine `npm.cmd run build`: **PASS**.
- NarrativeLine `git diff --check`: **PASS**.
- LiaisonScape `npm.cmd test`: **216 passed, 0 failed**.
- LiaisonScape `npm.cmd run lint`: **PASS**.
- LiaisonScape `npm.cmd run build`: **PASS**.
- LiaisonScape `git diff --check`: **PASS**.
- e2r-spec `npm.cmd run test:cdp`: **4 passed, 0 failed**.

The green automated gates do not cover the failed NarrativeLine sequence of
deleting all incident Relations, canceling the first final Entity confirmation,
then confirming the Entity deletion.

## Failure record and boundary

Reproduction observed in three fresh dedicated Edge runs:

1. Import the complete fixture into NarrativeLine.
2. Open `entity-nl-final`.
3. Explicitly remove `relation-nl-final` and `relation-nav-nl-final`.
4. Confirm the zero-blocker state, cancel the Entity confirmation, reopen the
   Entity deletion action, and confirm it.
5. Export the Dataset.

Observed final export: `entity-nl-final` remained; both of its Relations were
   absent. No runtime fix was attempted because this checkpoint explicitly
   prohibits source changes. The issue must be resolved and re-accepted in a
   later implementation checkpoint.

## Conclusion

`XAPP-REL-DELETE3-BIDIRECTIONAL-ACCEPTANCE` is **FORMALLY NOT ACCEPTED / FAIL**.

`capability closure = DEFERRED`. The existing design acceptance remains
separate from implementation closure, and no targeted Handoff or capability
discovery is claimed by this record.
