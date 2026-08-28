# Cross-App Relation Deletion Bidirectional Reacceptance

**Checkpoint:** `XAPP-REL-DELETE5-BIDIRECTIONAL-REACCEPTANCE`  
**Date:** 2026-08-28  
**Status:** **FORMALLY ACCEPTED / COMPLETE**

## Why re-acceptance was required

The previous `XAPP-REL-DELETE3-BIDIRECTIONAL-ACCEPTANCE` record remains a
historical FAIL record. It stopped at X11 because NarrativeLine retained
`entity-nl-final` after its two incident Relations had been explicitly
removed and final Entity deletion had been confirmed.

`XAPP-REL-DELETE4-NL-FINAL-ENTITY-DELETE-FIX` corrected that runtime issue at
NarrativeLine commit `7a695b3`. This checkpoint reran the complete X1-X14
matrix in both application directions against the fixed NarrativeLine and
unchanged LiaisonScape baselines. The earlier FAIL record was not rewritten.

## Runtime revisions and preflight

| Application | Revision | URL |
| --- | --- | --- |
| NarrativeLine | `7a695b3 fix: complete final Entity deletion` | `http://127.0.0.1:5180/e2r-narrative-line/` |
| LiaisonScape | `34d8164 fix: refine Entity deletion resolution presentation` | `http://127.0.0.1:5181/e2r-liaison-scape/` |

Both runtime worktrees were inspected before and after the run. No runtime,
CSS, i18n, test, fixture, Dataset, Core, Extension, or schema changes were
made during this acceptance checkpoint.

The e2r-spec preflight revision was `c9749db`. The only pre-existing dirty
workspace file was preserved unchanged:

`ai-knowledge/playbooks/e2r-edge-cdp-browser-diagnostic.md`

No LiaisonScape or ai-knowledge file was edited, staged, committed, restored,
reset, stashed, or cleaned.

## Automated baseline

- NarrativeLine `npm test`: **187 passed, 0 failed**.
- NarrativeLine `npm run lint`: **PASS**.
- NarrativeLine `npm run build`: **PASS**.
- NarrativeLine `git diff --check`: **PASS**.
- LiaisonScape `npm test`: **216 passed, 0 failed**.
- LiaisonScape `npm run lint`: **PASS**.
- LiaisonScape `npm run build`: **PASS**.
- LiaisonScape `git diff --check`: **PASS**.
- e2r-spec `npm run test:cdp`: **4 passed, 0 failed**.
- e2r-spec `npm run validate`: **PASS**.

The known Vite test-environment warning that port 24678 was already in use was
reported during both application suites, but every test process exited
successfully.

## Browser and evidence boundary

Acceptance used Microsoft Edge `151.0.4129.107` with dedicated loopback CDP
profiles and the existing `e2r-spec/tools/edge-cdp/` helper. Native dialog
state was recovered with `accept: false` before the scenarios and was
`closed` at each final checkpoint. No native browser dialog or CDP transport
failure occurred.

Rendered blocked-deletion surfaces were captured and visually inspected in
both apps. DOM labels, object identity, focus, transfer, and exported Dataset
assertions are programmatic evidence; the screenshots were used only for the
bounded visual observations described below. Machine-specific target IDs,
WebSocket URLs, and temporary profile paths are intentionally omitted.

## Fixture and canonical inventory

The disposable fixture contained 9 Entities, 1 Event, and 13 Relations. It
included duplicate endpoint names, a self Relation, two parallel Relations,
ordinary and Event-related Relations, final-delete targets for both apps, and
one unrelated Entity. The unknown-extension sentinel had to survive all
transfers and mutations:

`xapp-acceptance-sentinel.id = sentinel-0052`

The canonical final exports demonstrated the expected deltas:

- NarrativeLine final branch: `entity-nl-final`, `relation-nl-final`, and
  `relation-nav-nl-final` absent; unrelated objects and the sentinel present.
- LiaisonScape final branch: `entity-ls-final`, `relation-ls-final`, and
  `relation-nav-ls-final` absent; unrelated objects and the sentinel present.
- The parallel sibling `relation-parallel-2` remained after
  `relation-parallel-1` was deleted.
- The self Entity remained after its self Relation was deleted.

## Transfer and acceptance matrix

| ID | Result | Evidence |
| --- | --- | --- |
| X1 | PASS | Fresh EN fixture opened in both apps; 9 Entities, 1 Event, 13 Relations, and the extension sentinel were preserved. |
| X2 | PASS | LiaisonScape deleted exactly `relation-parallel-1`; export/open into a fresh NarrativeLine session showed `relation-parallel-2` still present. |
| X3 | PASS | NarrativeLine recognized the Event-related/out-of-surface connection as an incident blocker; LiaisonScape recognized both normal and Event-related incident Relations. |
| X4 | PASS | NarrativeLine removed exactly hidden `relation-event`; `entity-event` remained, and the delta opened in LiaisonScape without resurrection. |
| X5 | PASS | LiaisonScape deleted exactly the self Relation while preserving `entity-self` and other Relations. |
| X6 | PASS | The two same-endpoint parallel Relations were distinct in NarrativeLine; deleting one left the sibling intact after transfer. |
| X7 | PASS | The Event-related Relation was present in the Dataset despite being absent from the graph surface, and its exact deletion remained absent after transfer. |
| X8 | PASS | NarrativeLine displayed two distinct `Parallel link` blocker cards for the duplicate-name endpoints. |
| X9 | PASS | NarrativeLine displayed `relation-parallel-1` and `relation-parallel-2` identity hints; LiaisonScape selection used exact canonical Relation IDs. |
| X10 | PASS | Both apps blocked endpoint deletion while incident Relations remained and required explicit final deletion after resolution. |
| X11 | PASS | NarrativeLine and LiaisonScape each resolved two incident Relations, canceled the first final confirmation where applicable, reopened the action, confirmed deletion, and removed only their target Entity. |
| X12 | PASS | Both final exported Datasets preserved unrelated Entities, the Event, unrelated Relations, and `sentinel-0052`. |
| X13 | PASS | NarrativeLine final Entity Cancel and LiaisonScape Relation Cancel preserved the pending objects; no partial or stale deletion remained. |
| X14 | PASS | EN and JA blocker states in both apps retained the same incident Relation identity/count and deletion semantics; wording remained app-specific without ownership claims. |

## X11 fix verification

### NarrativeLine

The fixed flow was executed from the hidden Event to `entity-nl-final`, then:

1. both incident Relations were removed explicitly;
2. the zero-blocker state was confirmed;
3. the first final Entity confirmation was canceled;
4. the delete action was reopened and confirmed; and
5. the exported Dataset was inspected.

The target Entity and both incident Relations were absent from the export.
The unrelated Entity, Event, and extension sentinel remained. This verifies
the functional Dataset updater introduced by `7a695b3` in the actual browser
workflow, not only in the focused automated test.

### LiaisonScape

The fixed-direction counterpart was executed from the transferred
NarrativeLine Dataset to `entity-ls-final`. Both incident Relations were
inspected and deleted through the Relation Detail confirmation, the zero-
blocker state was confirmed, and the existing final Entity confirmation was
accepted. The exported Dataset contained neither the target Entity nor its
two incident Relations and preserved the unrelated inventory.

## Transfer checkpoints

- **T0:** both apps opened the same canonical fixture without inventing or
  dropping Core Objects or the sentinel.
- **T1 LS -> NL:** LiaisonScape's parallel/self/final deletions opened in a
  fresh NarrativeLine session with exact deleted IDs absent and the parallel
  sibling present.
- **T2 NL -> LS:** NarrativeLine's hidden Relation and final Entity delta
  opened in LiaisonScape without Relation resurrection; the Event and
  extension sentinel remained.
- Dataset evidence was captured from the accepted export/open path rather than
  inferred only from visible graph or Timeline presentation.

## Visual and presentation observations

The blocked NarrativeLine dialog visually showed readable Object names and
distinct blocker cards, but its endpoint separator rendered as the known
source-level mojibake literal rather than the intended arrow. The names were
not independently re-encoded. This remains the deferred
`RelationPresentationService.ts` presentation finding.

The LiaisonScape blocked-resolution dialog visually separated its
`Inspect Relation` controls and safe footer action. The generic
LiaisonScape confirmation dialog's `.detail-actions` still has no explicit
gap, and the NarrativeLine/LiaisonScape button-spacing follow-up remains
unfixed. These findings do not alter the acceptance result and were not
implemented here.

## Hard gate and conclusion

All hard-gate items X1, X2/X4 in both directions, X3, X5, X6, X7, X8, X9,
X10, X11, X12, X13, and X14 passed. Native dialog state was `closed`, both
CDP sessions remained connected during evidence collection, and no unintended
navigation or stale dialog remained.

`XAPP-REL-DELETE5-BIDIRECTIONAL-REACCEPTANCE` is therefore **FORMALLY
ACCEPTED / COMPLETE**.

This closes bidirectional acceptance for the bounded Relation-deletion
workstream. It does not perform capability closure, targeted Handoff
discovery, or the deferred presentation fixes. Capability closure remains a
separate roadmap checkpoint.

No runtime commit, push, publication, or ai-knowledge entry was created by
this acceptance-only checkpoint.
