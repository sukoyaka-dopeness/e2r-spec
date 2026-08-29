# Automatic Layout Initial Node Placement Persistence Fix Acceptance

Date: 2026-08-29

Status: ACCEPTED / COMPLETE

## Scope and authorities

This is the bounded browser acceptance of persistence fix `24494f4 fix: keep
automatic placement derived`, with follow-up synchronization fix
`8a5d2a6 fix: synchronize placement adoption tracking`. The audit authority
is `docs/automatic-layout-initial-node-placement-serialization-implications.md`
(`b6eae41`); the implementation result is
`docs/automatic-layout-initial-node-placement-persistence-fix-result.md`
(`ff3fac2`).

The accepted contract uses stored Coordinates as baseline and saves only
explicitly placed or meaningfully dragged Entity positions. Automatic-only
positions remain Derived and are excluded from the writer input.

## Automated baseline

LiaisonScape: 267 tests passed, lint passed, build passed, and `git diff
--check` passed. e2r-spec validation passed. The existing WebSocket port 24678
diagnostic may appear during UI tests, but the test command exits successfully.

## Browser environment and evidence

Acceptance used a real Chrome window at
`http://127.0.0.1:5180/e2r-liaison-scape/`. Mouse, drag, menu, keyboard, and
navigation actions were performed by the human operator. No input injection
was used. Exported JSON was inspected read-only with Node JSON parsing.
Native dialogs were handled normally and no stuck dialog or navigation lock
remained.

Evidence labels: `HUMAN-PHYSICAL`, `READ-ONLY-INSPECTION`, `AUTOMATED`, and
`NOT TESTED`.

## Acceptance matrix

| Item | Result | Evidence |
| --- | --- | --- |
| A1 automatic creation does not immediately serialize | PASS | HUMAN-PHYSICAL creation; exported JSON had 11 Entities and only the original 10 Coordinate records |
| A2 normal selection/Detail does not adopt | PASS | HUMAN-PHYSICAL selection and Detail open/close without movement or save |
| B1 automatic A + unrelated B drag + Save | PASS | HUMAN-PHYSICAL drag/save; exported JSON retained B and excluded automatic A |
| C1 automatic A + drag A + Save | PASS | HUMAN-PHYSICAL after fix; exported JSON contained new Entity `f101f654-0b5d-46cd-af43-301613165f65` with Coordinate |
| C2 sub-threshold interaction | NOT TESTED | Existing drag-threshold tests PASS; separate physical run omitted |
| D1 explicit canvas Entity + Save | PASS | HUMAN-PHYSICAL context-menu creation/save; exported JSON contained explicit Entity `80123c7b-0871-41a5-b2ab-9ecf4d5ea7d7` with Coordinate |
| D2 automatic plus explicit Save | PASS | C1/D1 payload evidence and adoption helper test |
| E1 stored Coordinate plus unrelated drag | PASS | HUMAN-PHYSICAL B1; stored sample Coordinates preserved |
| E2 stored Entity drag | PASS | Existing drag/write tests plus physical stored Entity drag |
| F1 untouched fallback exclusion | PASS | AUTOMATED filtering/source evidence |
| F2 fallback drag adoption | PASS | AUTOMATED adoption helper/source evidence |
| G1 successful-save lifecycle | PASS | HUMAN-PHYSICAL save; later navigation had no confirmation and state was clean |
| H1 failed-save lifecycle | NOT TESTED | No safe browser failure fixture; automated fail-closed tests PASS |
| I1 replacement reset | PASS | HUMAN-PHYSICAL Home/sample replacement; no prior transient state leaked |
| J1 deletion before save | NOT TESTED | Bounded UI/data-policy limitation; cleanup/filter source evidence |
| K1/K2 reopen authority | PASS | HUMAN-PHYSICAL reopening exported `e2r-dataset (3).json`; saved C1/D1 positions restored |
| L Dataset Replacement Safety smoke | PASS | HUMAN-PHYSICAL replacement/navigation; automated D1-D7 tests PASS |
| M general regression smoke | PASS | Prior HUMAN-PHYSICAL acceptance: selection, drag, Relation, Details, creation, save, locale, navigation |

The three NOT TESTED items are C2, H1, and J1. They are not treated as
physical PASS; their bounded automated/source evidence remains recorded.

## Payload evidence

The first A1 export contained 11 Entities and Coordinate records for the
original 10 only. After B1, the unrelated dragged Entity was persisted while
the automatic Entity remained absent. After corrected C1, the new Entity
`f101f654-0b5d-46cd-af43-301613165f65` appeared in the Coordinate records.
After D1, the explicit Entity
`80123c7b-0871-41a5-b2ab-9ecf4d5ea7d7` also appeared. Existing stored values
remained present. Reopening `e2r-dataset (3).json` restored the saved C1/D1
positions.

The prior C1 export that omitted the new Entity was the failure leading to
`8a5d2a6`; it is not used as acceptance evidence for the corrected code.

## Final persistence contract

- Stored compatible Coordinates remain the baseline.
- Automatic-only nearest-free positions are excluded from Coordinate Save.
- Meaningful drag adopts only the dragged Entity, including an automatic or
  fallback origin.
- Explicit canvas placement is user-authored pending work and is savable.
- Successful Save clears dirty/adoption state and establishes the saved
  Dataset baseline.
- Failed Save preserves Dataset, dirty state, and adoption state.
- Dataset replacement clears transient adoption state; deleted IDs are
  filtered from writer input.

Coordinate schema impact: none. Provenance impact: none. Validator impact:
none. Dataset Replacement Safety D1-D7, automatic placement algorithm,
ownership UI, and C local adjustment remain unchanged/unresolved as before.

## Exclusions and conclusion

No further runtime/test/schema/Validator/roadmap change was made by this
acceptance document. Presentation lifecycle cleanup, C, next checkpoint,
versioning, release, push, and deployment are not started.

LiaisonScape is clean and unpushed at `8a5d2a6`. e2r-spec was clean before
this document. The protected dirty
`ai-knowledge/playbooks/e2r-edge-cdp-browser-diagnostic.md` was preserved.

The persistence fix is formally ACCEPTED / COMPLETE within this bounded
scope. STOP.
