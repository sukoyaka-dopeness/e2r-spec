# E2R Session 0104 - Pre-release application follow-up inventory

Date: 2026-10-12

Repositories reviewed: `e2r-spec`, `e2r-hub`, `e2r-parameter-plotter`,
`e2r-narrative-line`, and `e2r-liaison-scape`

## Session identity

Objective: identify remaining pre-release work that is comparable in size to
the requested cross-application Dataset JSON export filename consistency
change, and record the distinction between that bounded implementation task
and nearby acceptance or broader audit work.

Status: **BOUNDED FOLLOW-UP IDENTIFIED / NO IMPLEMENTATION STARTED**

This session is a historical collaboration record. The Roadmap remains the
current planning authority.

## Inventory result

The clearest similarly sized implementation item is the existing Roadmap
entry [Cross-app Dataset JSON export filename
consistency](../../docs/roadmap.md#current-status-index-2026-09-28):
NarrativeLine currently derives a sanitized filename candidate from the
Dataset title, while ParameterPlotter and LiaisonScape use fixed filenames.
The planned alignment is to use the title as a candidate in all three apps
with a safe fallback, without changing Dataset content or schema. The Roadmap
classifies it as **HUMAN-REQUESTED / PLANNED; IMPLEMENTATION PENDING**.

Other nearby open items were found, but they are not equivalent in scope or
readiness:

- Hub three-app and sample Gallery review is implemented and Codex-verified;
  Human Browser review remains pending. This is primarily an acceptance task.
- Cross-app Credits visual parity remains a follow-up. The broader visual
  language work is a separate design question and is not a small mechanical
  consistency edit.
- The full per-dialog overlay/backdrop runtime audit remains explicitly
  deferred and is a broader verification task.

Accordingly, this inventory did not identify another clearly bounded,
same-scale cross-app implementation task in the Roadmap evidence reviewed.
This is a planning observation, not a claim that no other small defects or
tasks exist.

## Scope and verification boundary

This session records the Roadmap-based inventory and classification only. No
runtime, tests, application documentation, Roadmap, or other repository was
changed. No browser session, Workspace, server, or Dataset was used or
modified. No acceptance state or release decision changed.

The E2R-SPEC worktree already contained unrelated staged, modified, and
untracked work before this session. Those changes were preserved; this session
file is an additional untracked file and was not staged or committed.

Current planning and release decisions remain governed by the Roadmap and
their cited authorities. No push, tag, release, or deployment was performed.
