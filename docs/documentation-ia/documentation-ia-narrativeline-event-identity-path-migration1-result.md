# NarrativeLine Event Identity Path Migration 1 — Result

- Date: 2026-09-25
- Status: Completed bounded path migration
- Scope: Move only the Event Identity implementation design and its separate
  formal acceptance into `docs/narrativeline/`.
- Authority: Human-approved cohort and destination; physical placement does
  not change either document's authority or status.
- Related records: [Application/workstream migration preparation](documentation-ia-application-workstream-landing-zone-migration-preparation1.md),
  [Documentation Plan](documentation-plan.md), [Documentation Hub](../README.md)

## Migration manifest

| Previous path | Current path |
| --- | --- |
| `docs/narrativeline-event-identity-implementation-design.md` | `docs/narrativeline/narrativeline-event-identity-implementation-design.md` |
| `docs/narrativeline-event-identity-formal-acceptance.md` | `docs/narrativeline/narrativeline-event-identity-formal-acceptance.md` |

The design remains `DESIGN COMPLETE / IMPLEMENTATION READINESS ONLY /
IMPLEMENTATION NOT AUTHORIZED`. The separate acceptance remains `FORMALLY
ACCEPTED / CURRENT SOURCE REVISION` for its bounded Timeline and Entity Detail
Related Events scope. Neither document was merged or substantively rewritten.
Their explicit Relation blocker presentation, Capability Handoff, and other
excluded-scope boundaries remain unchanged.

## Reference and navigation repair

- Updated the current [Roadmap](../roadmap.md) link to the acceptance's new path.
- Updated the moved design's relative link to the root-level
  [NarrativeLine Event Human-readable Identity Audit](../narrativeline/narrativeline-event-human-readable-identity-audit.md).
- Added this result to the Documentation Hub and linked the outcome from the
  earlier preparation record. That preparation remains a snapshot of the
  pre-migration candidate analysis.
- A canonical-workspace scan found no direct Markdown inbound link from a
  sibling repository to either source document. No sibling repository was
  modified; external deep-link absence is not claimed.

## Authority and scope

`docs/narrativeline/` is a physical landing zone only. `docs/roadmap.md`
remains the sole current-planning authority; the NarrativeLine repository
remains authoritative for runtime behavior, and the E2R specification remains
authoritative for normative requirements. No other NarrativeLine document or
landing zone was moved. No redirect, duplicate compatibility file, or new
taxonomy was introduced.

## Validation

The two moved documents' Markdown links and the repaired Roadmap link were
checked against current paths. The E2R-SPEC `npm run validate` gate and staged
`git diff --cached --check` passed. `work/` and sibling repositories were not
staged or changed.
