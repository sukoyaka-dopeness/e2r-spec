# Post-release Cross-App Observation History Migration 1

Status: **COMPLETED — DATED AUDIT EVIDENCE PRESERVED; CURRENT STATUS UNCHANGED**

This bounded migration transfers the 2026-09-23 Post-release LiaisonScape /
NarrativeLine observation audit and the separate selected-Relation identity
display policy audit from `docs/roadmap.md` into the existing broad
[`Release and Cross-App chronology`](roadmap-history/release-and-cross-app-chronology.md#post-release-liaisonscape-narrativeline-observation-audit-2026-09-23).
The Roadmap source snapshot was commit `9f6c4372fb08771a7c861257ab828aa578bcbc51`.

## Preserved chronology

The complete observation audit block, including its detailed boundary, narrow
UI follow-up, Add Relation zero-node follow-up, public-web evidence boundary,
and audit-time validation / retained-work snapshot, was transferred with its
dated wording and source order intact. The separate selected Relation identity
display policy audit was also transferred: its former comparison and proposed
Human choices are historical evidence, superseded for current status by the
later accepted implementation reflected in the Roadmap inventory. Local
Markdown links were adjusted only for their new location. Dedicated acceptance,
parity, and closure evidence remains unchanged.

## Current planning retained

The Roadmap status index and 2026-09-23 session status inventory remain the
current entry points. They continue to distinguish completed zero-Node Add
Relation and selected-Relation corrections from the remaining phone-landscape
Human scope decision and the environment-specific physical-device safe-area /
OS-keyboard coverage boundary. NarrativeLine's no-History observation retains
its existing condition to identify payload/state or served revision before any
reconsideration; accepted H1-to-H2 boundaries are not reopened. The dated
public Pages revision uncertainty and audit-time measurements remain in the
historical record, not as claims about present application state.

No current status, priority, accepted/closed disposition, implementation, or
application behavior was changed. The 2026-09-23 session status inventory and
the durable current/historical-entry maintenance guidance were left in place.

## References and checks

Inbound references to the two moved Roadmap headings were checked in
E2R-SPEC and relevant sibling E2R repositories / `ai-knowledge`; none were
found, so no anchor repair was needed. The Roadmap now links to the History
section and this result; the History section links back to the current status
index. All migrated Markdown links resolve from the History file.

This is a documentation-only chronology transfer. It does not rewrite the
dedicated evidence, infer current source or deployment state from the audit
snapshot, or authorize changes to application behavior.

The transferred manifest contains two H3 blocks and five nested H4 blocks.
Using the same count method before and after (newline-delimited lines excluding
the final terminator; all Markdown headings counted), the Roadmap changed from
6,147 lines / 387 headings to 5,976 lines / 380 headings. The existing History
file changed from 882 lines / 36 headings to 1,070 lines / 44 headings. The
moved text comparison passed with only relative-link path adjustments; the
current/historical maintenance policy and current session inventory were
unchanged. `git diff --check`, local target checks for the migrated links, and
`npm run validate` passed.
