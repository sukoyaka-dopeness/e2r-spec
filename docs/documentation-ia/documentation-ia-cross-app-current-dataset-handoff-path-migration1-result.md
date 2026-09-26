# Cross-App Current Dataset Handoff Path Migration 1 Result

Date: 2026-09-26
Status: **COMPLETE — BOUNDED PATH MIGRATION**

## Scope

Only the four Human-approved design-contract records moved into the existing
`docs/cross-app/` landing zone:

| Previous path | Current path |
| --- | --- |
| `docs/cross-app-capability-handoff-current-dataset-transfer-design.md` | `docs/cross-app/cross-app-capability-handoff-current-dataset-transfer-design.md` |
| `docs/cross-app-capability-handoff-url-transport-contract.md` | `docs/cross-app/cross-app-capability-handoff-url-transport-contract.md` |
| `docs/cross-app-capability-handoff-target-contract.md` | `docs/cross-app/cross-app-capability-handoff-target-contract.md` |
| `docs/cross-app-capability-handoff-sender-navigation-authorization.md` | `docs/cross-app/cross-app-capability-handoff-sender-navigation-authorization.md` |

The three Current Dataset / Target / URL-Transport contract records remain
design-only and retain their respective `IMPLEMENTATION NOT AUTHORIZED`
boundaries. The sender-navigation record remains
`DESIGN COMPLETE / BOUNDED NARRATIVELINE SENDER AUTHORIZED / NO RUNTIME
CHANGE`; that authorization is limited to its stated NarrativeLine sender
slice and is not authorization for the broader Handoff, receiver behavior,
other applications, or public rollout. No status or scope was reconciled by
this path migration.

## Reference repairs

- Preserved the four documents' mutual links within `docs/cross-app/`.
- Repaired their links to documents that remain at `docs/` root, including
  discovery/readiness records, Dataset Handoff v0 references, and the
  NarrativeLine sender implementation reference.
- Repaired inbound links from the existing Release / Cross-App chronology,
  LiaisonScape Relation-inspect and Relation-delete implementation evidence,
  and NarrativeLine sender runtime evidence.
- Updated Documentation Hub, Documentation Plan, and the application/workstream
  migration preparation's subsequent disposition.

A canonical E2R workspace scan found no direct references to repair in sibling
repository files. NarrativeLine and LiaisonScape repositories had unrelated
dirty work and were left read-only and unchanged.

## Authority and scope boundaries

`docs/cross-app/` is physical navigation only, not a new normative authority
or status hierarchy. Application-specific runtime implementation and
acceptance records remain in their existing locations. Roadmap History remains
historical chronology; no other Cross-App responsibility, runtime, acceptance,
release, or public interoperability record moved. No compatibility copies,
redirects, or additional taxonomy were introduced.

## Validation

- Confirmed the four destination paths exist and the four former paths no
  longer exist.
- Checked the changed relative Markdown links in the moved packet and the
  known History/application references.
- `npm.cmd run validate` passed.
- `git diff --check` passed.
