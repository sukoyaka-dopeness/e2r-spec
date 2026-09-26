# Pre-release Roadmap Chronology Migration 1 — Result

Date: 2026-09-24

Status: **BOUNDED HISTORY MIGRATION COMPLETE / NON-NORMATIVE**

## Authority and scope

This result completes the separate pre-release / release-preparation History
candidate identified by [Residual Roadmap Responsibility Audit 1](roadmap-residual-responsibility-audit1.md).
The source was `docs/roadmap.md` at commit
`9cd1c3eebdfc7133458fd8d64a56fe6aa207b228`. The five complete dated H3 blocks
were transferred in original source order to the existing broad
[Release and Cross-App chronology](../roadmap-history/release-and-cross-app-chronology.md#pre-release-and-liaison-scape-020-release-preparation-chronology):

1. `PRE-RELEASE-VALIDATOR-AND-SEQUENCING-ROADMAP-SYNC1` (2026-08-29)
2. `E2R-LIAISONSCAPE-0.2.0-RELEASE-PREPARATION1` (2026-08-30)
3. `E2R-PRE-RELEASE-ROADMAP-PLACEMENT-ORDER-LICENSE-RECORD1` (2026-08-30)
4. `E2R-LIAISONSCAPE-INITIAL-NODE-PLACEMENT-OBJECTIVE-AUDIT1` (2026-08-30)
5. `E2R-LIAISONSCAPE-LICENSE-REMEDIATION1` (2026-08-30)

The transferred wording, dates, status language, ordering, and source
provenance remain historical evidence. Four relative Markdown destinations
inside the moved blocks were adjusted with `../` so they continue to resolve
from `docs/roadmap-history/`; their visible link text and destinations are
unchanged. No new history taxonomy or micro-file was introduced.

## Current planning retained

The roadmap continues to state that the Initial Public Release is formally
closed and links its current closure authority. The Objective Audit's
enduring placement consequence remains a concise pointer in the current
Initial Layout planning context: both Lighthouse samples already had stored
coordinates, so those samples did not exercise the missing-coordinate path.
The dedicated [Objective Audit](../liaisonscape/liaisonscape-initial-node-placement-objective-audit.md)
remains evidence for causal separation, not a current release gate or
implementation authorization. The later current execution order and all
accepted, qualified, open, and deferred boundaries were otherwise left
unchanged.

The Roadmap current-status index now records both the Initial Placement
pointer-compression tranche and this pre-release chronology migration as
complete. The Residual Audit itself remains an immutable historical audit
snapshot; its other candidates still require separate evidence-checked
manifests.

## Reference and preservation checks

- The moved source contained five H3 blocks and the new History section
  preserves all five heading identities. No inbound fragment link to those
  former Roadmap headings was found in tracked E2R-SPEC Markdown or in the
  read-only sibling-repository / `ai-knowledge` reference scan.
- All moved local Markdown links resolve from their new History location after
  the four relative-path repairs. The Roadmap and History README link to the
  new section; the Roadmap path remains stable and remains the sole current-
  planning authority.
- The History README now points readers to the added chronology within the
  existing broad release/cross-app unit. It does not create another planning
  authority.
- No application, specification, schema, Validator, sample, test, sibling
  repository, or `ai-knowledge` content was changed.

## Structural verification

Immediately before migration, `docs/roadmap.md` contained 9,965 physical lines
and 494 ATX headings. After migration it contains 9,843 physical lines and 489
ATX headings. The reduction is a consequence of relocating historical
evidence, not a target. Current planning text was not moved with the historical
blocks.

Validation: `git diff --check` passed; all four moved local Markdown links and
the Roadmap / History README links resolve; no inbound references to the moved
heading fragments were found in the checked E2R workspace; `npm run validate`
passed.
