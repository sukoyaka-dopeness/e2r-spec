# Documentation IA / Roadmap Chronology Migration 1 — Result

Date: 2026-09-24

Status: **BOUNDED MIGRATION COMPLETE — ROADMAP REMAINS SOLE CURRENT-PLANNING AUTHORITY; `docs/`-WIDE REORGANIZATION DEFERRED**

## Authority and scope

This result records the actual bounded migration under the Human-selected
[Roadmap Chronology Structure Decision 1](documentation-ia-roadmap-chronology-structure-decision1.md)
and [Roadmap-first direction](documentation-ia-roadmap-physical-modularization-direction-decision1.md),
using the conservative extraction gate in the [implementation-preparation
record](documentation-ia-roadmap-physical-modularization-implementation-preparation1.md).
The preparation and decision-preparation records remain historical evidence;
they are not rewritten. The migration did not reorganize the wider `docs/`
tree or alter specification, semantic, application, or runtime authority.

## Extracted historical block

From `docs/roadmap.md` at source commit
`444c3163ba6a7784f1639c182243644640e47511`, the complete contiguous block
from `### Historical workspace clone and evidence hygiene baseline —
2026-09-19` through the last Visual capture1–6 approved-deletion result was
transferred to [`roadmap-history/legacy-chronology.md`](roadmap-history/legacy-chronology.md).
The source block occupied lines 247–1475 at the pre-migration inspection:
1229 lines and 38 Markdown headings. The original sequence, wording, dated
status, and provenance were retained verbatim. A SHA-256 comparison of the
source block and the destination transcription passed:

`2a85fe0fbdf4b2db77f366deccbdd17fe43001dd7ef6474b6565259f7318f42b`

The destination adds clearly separate provenance/authority framing before
and after the transcription. The legacy unit is a one-time preservation unit,
not an unlimited append target. Its historical `current`, `next`, and `open`
language describes the original snapshot only.

## Retained in the current roadmap

The purpose and operating principles, current-status index, completed root
placement summary, current baseline, release/application evidence, active or
deferred work, current Relative Time state, Documentation IA direction, and
later mixed planning/history sections remain in `docs/roadmap.md`. In
particular, no later mixed region was moved based solely on age, a completed
label, or a closed status. Retention means only that the conservative gate did
not establish a safe complete historical block for this migration; it does
not assert that every retained paragraph is permanently current.

The roadmap now contains a concise pointer at the preserved original section
location and a current status entry. The status index and maintenance policy
identify the history index while keeping `docs/roadmap.md` as the sole current
planning authority.

## Authority and future chronology boundary

[`roadmap-history/README.md`](roadmap-history/README.md) is the navigation and
authority-boundary surface. It links the legacy chronology and back to the
current roadmap/result. Future chronology, when needed, is limited to a few
broad, long-lived workstream units, with one primary location per
cross-workstream item and references instead of duplicate copies. No
issue/checkpoint/milestone micro-files or empty future workstream files are
created. Future filenames and partition details remain unselected. The
`docs/`-wide taxonomy and other-document relocation remain deferred.

## Reference review

The `docs/roadmap.md` path remains unchanged, so path-only references did not
need mechanical rewriting. The known inbound Markdown fragment links target
current headings retained in the roadmap. The two intra-roadmap fragment
links also continue to target retained workspace-placement and GitHub
Sponsors headings. The original extracted section heading remains in place as
a navigation stub. No verified link to a heading inside the extracted block
required repair. The extracted block itself contained no Markdown links or
direct `roadmap.md` path references requiring relocation-specific edits;
historically accurate path mentions elsewhere were left unchanged. Scanned
sibling-repository references were read-only; no sibling repository was
modified.

## Verification

- The transferred text matched at the decoded UTF-8 text level by SHA-256
  before and after writing.
- The history index links to the legacy unit and current roadmap; the legacy
  unit links back to the current roadmap and current migration status.
- The source section heading remains in the roadmap as a pointer, preserving
  its heading anchor while the complete original block is in the legacy unit.
- Repository validation and final staged whitespace/reference checks are run
  for this bounded checkpoint; their outcomes accompany the commit review.
