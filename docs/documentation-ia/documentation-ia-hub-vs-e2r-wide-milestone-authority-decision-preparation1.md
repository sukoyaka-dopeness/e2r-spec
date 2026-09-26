# Hub vs E2R-wide milestone authority — decision preparation 1

Date: 2026-09-24

Status: **NON-NORMATIVE DECISION PREPARATION / HUMAN AUTHORITY SELECTION
PENDING**

## Purpose and boundary

This record prepares the Human decision identified by [Residual Roadmap
Responsibility Audit 3](roadmap-residual-responsibility-audit3.md): choose
whether the Hub future-milestone map or the E2R-wide milestone map is the
single canonical planning authority for their overlapping future plans.
The Human has selected the direction that one map will be canonical and that
only anchors actually referenced from the current canonical E2R workspace
need compatibility treatment. This preparation does not choose which map is
canonical, merge or reorder milestones, remove headings, or migrate history.

`docs/roadmap.md` remains the sole current-planning entry point. This question
is about which of its two milestone maps owns the canonical sequence, not
whether planning authority moves out of the Roadmap. Dedicated decisions,
acceptance records, research, and implementation evidence remain their
respective evidence authorities.

## Evidence reviewed

- Baseline: E2R-SPEC HEAD `2fa2f9e` (`docs: audit residual roadmap
  responsibilities 3`).
- The Roadmap's [`E2R ecosystem hub / portal track`](../roadmap.md#e2r-ecosystem-hub-portal-track)
  contains a ten-item ordered Hub proposal, says Hub milestones 1 and 2 are
  complete, and says the next practical Hub work should be chosen from the
  remaining gap rather than inferred from old milestone order. It names
  candidates but selects none.
- The Roadmap's [`Proposed E2R-wide milestones`](../roadmap.md#proposed-e2r-wide-milestones)
  contains a separate ten-item ecosystem sequence and recommends an immediate
  sequence for items 1–4, with sample revision parallel. It makes external
  vocabulary retrieval dependent on recording the Dictionary/Semantic
  responsibility boundary.
- Hub Milestone 1's accepted IA authority and Milestone 2's manual acceptance
  record support those bounded Hub decisions; they do not establish the
  E2R-wide sequence as subordinate or vice versa.
- The Roadmap's Hub self-history and browser preference/workspace subsections
  express Hub-specific follow-ups and constraints. They are not represented
  as equivalent standalone items in the E2R-wide map.
- The E2R-wide list contains cross-repository interoperability, Validator
  compatibility, History/chronology, Dictionary/Semantic, external-vocabulary
  and evidence-gated release responsibilities not covered by the Hub map as
  such.
- The E2R-SPEC adoption of Relative Time atomic Recorded assertion semantics
  does not itself complete all History/Temporal responsibilities described
  by the E2R-wide milestone, nor does it select a product-integration order.

### Current Hub implementation evidence and its limit

The canonical `e2r-hub` repository was inspected read-only at HEAD
`71ae8ab` (`fix: align Hub Self-Description actions`). Its current source
constructs `#datasetUrl=` Handoff links for sample and Self-Description
actions. The inspected tests did not yield matching Handoff-specific cases.
This is evidence that those link-generation paths are implemented in that
repository; it is not evidence of Human acceptance, complete interoperability
verification, or closure of the broader Hub Milestone 6 responsibility. The
Hub M2 acceptance document's statement that direct Handoff remained future
work is an earlier checkpoint snapshot, not a reason to disregard newer
source evidence or to retroactively rewrite that record. A future status
reconciliation, if needed, must distinguish implementation from acceptance
and milestone closure.

## Responsibility and overlap comparison

| Topic | Hub map responsibility | E2R-wide map responsibility | Relationship |
| --- | --- | --- | --- |
| IA and first-use entry | Hub scope/IA; static landing; catalog/status cards; onboarding paths | E2R ecosystem IA; first-use Hub and application directory | Related, but Hub IA is narrower than ecosystem architecture. |
| Samples | Shared sample gallery and Hub presentation | Canonical cross-application sample fixtures and revision | Presentation vs cross-repository sample authority; not identical. |
| Interoperability / handoff | Demonstrate import, export, validation, preservation among named apps | Repeatable verification baseline and release gate across apps and Validator | Overlap; E2R-wide scope is broader. Current source has some Hub Handoff-link implementation, not proof of the full evidence gate. |
| Capability and packs | Hub-facing compatibility metadata and pack discovery/display | Validator compatibility matrix; app/pack manifest research | Related metadata, but consumer/display responsibilities differ from definitions and validation. |
| History / temporal | No equivalent milestone in the Hub ten-item sequence | History/chronology responsibilities before product integration | E2R-wide-only responsibility; Atomic Relative Time adoption is partial evidence, not total completion. |
| Dictionary / external vocabulary | Pack distribution context, but no matching Dictionary/Semantic foundation or lookup sequence | Vocabulary identity/semantic boundary and gated external lookup | E2R-wide-only responsibility and dependency. |
| Workspace / locale / self-description | Hub self-history access; browser-local preference and workspace direction, with origin boundary | No equivalent detailed Hub-local milestones | Hub-only responsibility; should remain as a scoped supplement even if the E2R-wide map is canonical. |
| Release | Portal release surface for apps, samples, metadata and packs | Evidence-gated ecosystem releases across apps, Validator, Extensions, samples and packs | Related but different operational scope. |

## Human options

### Option A — Hub milestones are canonical

Keep the Hub ten-item list as the one canonical ordered milestone map. Treat
the E2R-wide list as a concise scoped supplement/pointer, not a second
sequence. Its supplement would retain only E2R-wide responsibilities absent
from Hub planning: cross-repository verification and Validator compatibility,
History/Temporal, Dictionary/Semantic and its external-vocabulary dependency,
and ecosystem-wide release coordination. Hub-specific self-description,
locale, browser workspace and origin constraints remain in the Hub scope.

**Not lost:** the global-only responsibility areas and their evidence gates
remain explicit in the supplement; the Hub's own remaining-gap selection and
local follow-ups stay visible.

**Tradeoffs:** users read the Hub map as the main sequence even though several
global workstreams are not Hub-owned. The supplement must avoid becoming a
second ordered milestone list. Global interoperability and release constraints
may become less prominent unless their pointers are explicit.

### Option B — E2R-wide milestones are canonical

Keep the E2R-wide ten-item list as the one canonical sequence. Reduce the Hub
list to a scoped operational supplement pointing to corresponding global
items where applicable. The supplement would retain Hub-only work: catalog
and status-card behavior, Hub sample presentation, onboarding details,
Hub-specific Handoff surfaces, Self-Description access, browser-local
preferences/workspace and origin constraints, and portal release mechanics.

**Not lost:** Hub-specific responsibilities and their implementation
constraints remain explicit, while cross-repository order and dependencies
have a single owner.

**Tradeoffs:** the Hub list has scope-specific candidates for choosing its
next gap after accepted milestones 1–2; reducing it requires clearly separating
that local candidate selection from the global sequence. A crosswalk is needed
because similar labels do not denote identical scope. Global map items 1–4
must not silently be interpreted as declaring every corresponding Hub task
complete.

## Anchor evidence and compatibility boundary

A literal fragment-reference scan was run across readable files under the
canonical E2R workspace (`C:\Users\extra\E2R`), excluding `.git`,
`node_modules`, `work`, and `dist`. It searched for these exact fragments:

| Roadmap anchor | Matches in scanned workspace |
| --- | ---: |
| `#e2r-ecosystem-hub-portal-track` | 0 |
| `#hub-self-history-dataset-access-follow-up` | 0 |
| `#shared-browser-preference-and-workspace-direction` | 0 |
| `#proposed-e2r-wide-milestones` | 0 |
| `#e2r-suite-long-term-milestone-exploratory-distant-not-active` | 0 |

These results identify no in-workspace inbound fragment references in the
searched files; they do not establish that external deep links or unindexed
consumers do not exist. Under the Human-selected compatibility rule, anchors
with positive current-workspace evidence must be preserved. This scan found
none among the headings listed above. A future implementation pass should
repeat the scan immediately before any physical edit and preserve any newly
referenced anchor. This preparation does not recommend broad anchor
preservation as a substitute for that evidence-based check.

## Why evidence does not select the canonical map

Both lists are Roadmap planning proposals with different owners and scope.
The Hub acceptance authorities establish M1/M2 only. Current Hub source
establishes implementation of particular Handoff-link actions but not Human
acceptance or closure of the broader milestone. The E2R-wide list has unique
cross-repository responsibilities and dependencies, while the Hub list has
unique portal/workspace responsibilities. Neither existing authority declares
the other subordinate, and choosing either as canonical changes which
sequence is primary. Therefore repository evidence supports the two options'
boundaries, but cannot choose between them without the Human's authority
decision.

## Deferred until after the Human selection

- Exact pointer wording and the minimal scoped supplement.
- Any status reconciliation of Hub Handoff milestone language against current
  implementation and acceptance evidence.
- Whether and how the E2R-wide History/Temporal item should reflect later
  Relative Time adoption, without broadening its scope.
- Physical heading removal, anchor retention or deletion, and reference repair.
- Any milestone-order, priority, scope, or responsibility changes.

No roadmap heading, anchor, milestone order, or authority status was changed
in preparing this record. No milestone content was moved to History.
