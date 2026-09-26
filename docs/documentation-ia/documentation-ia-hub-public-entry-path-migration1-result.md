# Hub Public Entry Path Migration 1 — Result

- Date: 2026-09-25
- Status: Completed bounded path migration
- Scope: Move only the Hub Public Entry Milestone 1 information architecture
  and Milestone 2 acceptance into `docs/hub/`.
- Authority: Human-approved cohort and destination; path placement does not
  change document authority, status, or scope.
- Related records: [Application/workstream migration preparation](documentation-ia-application-workstream-landing-zone-migration-preparation1.md),
  [Documentation Plan](documentation-plan.md), [Documentation Hub](../README.md),
  [Roadmap](../roadmap.md)

## Migration manifest

| Previous path | Current path |
| --- | --- |
| `docs/e2r-hub-public-entry-point-information-architecture.md` | `docs/hub/e2r-hub-public-entry-point-information-architecture.md` |
| `docs/e2r-hub-public-entry-point-milestone-2-acceptance.md` | `docs/hub/e2r-hub-public-entry-point-milestone-2-acceptance.md` |

The accepted-design status of the Milestone 1 IA and the `ACCEPTED` status of
the bounded Milestone 2 implementation acceptance remain separate and
unchanged. No content was merged or substantively rewritten.

## Reference and navigation repair

- Repaired the four known Roadmap links to the new paths, including the
  component-evidence reference in the Cross-App Locale status row. That row
  continues to state that shared Cross-App Locale closure is not established.
- The canonical-workspace Markdown scan found no other direct inbound links
  to these two source paths; the earlier preparation's path manifest is kept as
  a preparation record and linked to this outcome. No sibling repository had
  a direct reference requiring repair. External deep-link absence is not
  claimed.
- Updated the Documentation Hub, Documentation Plan, and preparation record
  to point to the migration result and reflect this bounded cohort.

## Authority and status boundaries

The E2R-wide milestone map remains canonical in `docs/roadmap.md`; the Hub
milestones remain a Hub-specific supplement. The Milestone 2 acceptance is
bounded evidence for the Hub landing page and does not establish completion of
an E2R-wide milestone, public-release closure, sample workflow, Handoff,
Locale, or another cross-application responsibility.

`docs/hub/` is a physical landing zone, not a new authority or status
hierarchy. No other Hub document, Research document, or landing-zone cohort was
moved. No redirect, duplicate compatibility file, or new taxonomy was
introduced.

## Validation

The new Roadmap targets and migration-result/navigation links were checked
against current paths. E2R-SPEC `npm run validate` and staged
`git diff --cached --check` passed. `work/` and sibling repositories were not
staged or changed.
