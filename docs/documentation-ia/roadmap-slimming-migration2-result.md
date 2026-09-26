# Roadmap Slimming Migration 2 Result

Date: 2026-09-24

Status: **BOUNDED SECOND TRANCHE COMPLETE — CURRENT-PLANNING AUTHORITY RETAINED**

## Authority and scope

This result records the second evidence-led migration tranche under
[Roadmap Slimming Audit 1](roadmap-slimming-audit1.md), starting from
`e17e778` (`docs: slim roadmap release and cross-app tranche`). The two mixed
parent H2 regions remain in `docs/roadmap.md`; neither parent was extracted.
The roadmap remains the sole current-planning authority. The history index and
chronology units preserve dated evidence only.

## Migration made

Sixty-nine complete original H3 entries (1,407 source lines) were removed from
the current roadmap and preserved in source order:

- Twenty-two completed Cross-App Relation Deletion and capability-Handoff
  entries were appended to
  [`roadmap-history/release-and-cross-app-chronology.md`](../roadmap-history/release-and-cross-app-chronology.md).
  These cover the dated deletion presentation/acceptance progression,
  XAPP-REL-DELETE3–6, and capability Handoff
  checkpoints 1–12. The current accepted capability status remains summarized
  in the roadmap and linked to its [closure authority](../cross-app/cross-app-relation-deletion-capability-closure.md).
- Forty-seven completed/superseded LiaisonScape layout and Auto Layout entries
  were placed in the new broad
  [`roadmap-history/liaisonscape-layout-and-auto-layout-chronology.md`](../roadmap-history/liaisonscape-layout-and-auto-layout-chronology.md).
  These cover selected Automatic Display production/acceptance progression,
  Explicit Auto Layout and Pin/Preview implementation/acceptance progression,
  the superseded pre-closure Human Check B gate/retest sequence, automatic
  coordinate integerization acceptance, and the reference-placement fixture
  review later superseded by the user-reviewed quality freeze.

The moved blocks retain their original heading text, dates, status wording,
sequence, and evidence prose. Relative Markdown hrefs were adjusted only as
needed for their new location: 19 href occurrences in the existing Cross-App
unit and 48 in the new LiaisonScape unit. One pre-existing relative link to the
LiaisonScape Frontier-12 JSON evidence was corrected to the sibling-repository
target while relocating it. No sibling file was changed.

The current Cross-App summary was compressed to the accepted capability result
and a history link. Current Automatic Display / Explicit Auto Layout status now
links to the history unit; the current qualified disposition, safe-preview and
DEV diagnostic findings, quality follow-ups, and policy/status boundaries
remain in the roadmap. A current-state clarification distinguishes the dated
diagnostic `HOLD` snapshots from the later `QUALIFIED` Human disposition while
keeping the separate earlier-failure cause-attribution question unresolved.
The still-open current Cross-App follow-up sequence,
including the `NL-ENTITY-DELETE4` card-presentation step, also remains in the
roadmap. The prior implementation-preparation wording remains verbatim under
an explicit historical-snapshot heading; the current migration status
supersedes it.

## Retained current, open, or qualified material

The following were not moved or reclassified: the mixed H2 parents; the first
four current responsibility/status boundaries for placement and routing;
ongoing retune/re-baseline work; the current Explicit Auto Layout safe-preview
failure and DEV diagnostic entries; the separate quality follow-ups; Human
Check B's **QUALIFIED** disposition; current Automatic Display practicality
status; unresolved visual/quality observations; open/deferred decisions and
dependencies; and the current worktree/ownership evidence. Entries without a
clear later disposition or stable dedicated evidence target remain in place.

## Reference and provenance checks

Before migration, the selected H3 anchors were searched across e2r-spec, four
sibling E2R application/service repositories, and the shared DOM test
environment repository; no inbound Markdown fragment reference to a selected
heading was found. `docs/roadmap.md` keeps its path, so path-only
mentions were not mechanically rewritten. Outbound local links were resolved
from each new chronology location; the moved entries' link labels and targets
were preserved, with only relative href changes described above.

The moved entries were compared against the source blocks at `e17e778` after
reversing those mechanical href adjustments. Original wording and relative
source order match. Historical status language is explicitly non-authoritative
for current planning, and the history README points readers back to the
roadmap.

## Size and validation

At `e17e778`, `docs/roadmap.md` contained 11,887 lines and 562 ATX headings.
After this tranche and its current-status synchronization it contains 10,450
lines and 494 ATX headings. The migration reduced the roadmap by 1,437 lines;
the 1,407 extracted source lines account for most of that reduction, with the
remainder from bounded current-summary/status synchronization.

Repository validation, relocated-link and heading checks, extracted-block
comparison, and whitespace/diff checks are recorded with the commit results.
No specification, schema, Validator, test, sample, application, or sibling
repository content was changed. The wider `docs/` taxonomy remains deferred.
