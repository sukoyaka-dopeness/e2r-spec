# E2R Specification Guidance

## Reusable knowledge

The central workspace knowledge base is `C:\Users\extra\E2R\ai-knowledge`.
Search its `INDEX.md` before specification work involving Dataset safety,
Handoff, History, application boundaries, or cross-repository decisions, and
read only the matching scoped entries.
Treat the specification as authoritative; knowledge entries provide scoped
evidence and reusable process guidance only.

## Repository Purpose

This repository defines the E2R specification.

E2R is a general-purpose data specification centered on four Core concepts:

* Dataset
* Entity
* Event
* Relation

This repository is the source of truth for the E2R data model and its Extensions.

## Specification References

Before changing the Core or an Extension, read the relevant source-of-truth
documents as applicable:

* `spec/core.md`
* `spec/philosophy.md`
* `spec/rationale.md`
* `extensions/history-extension.md`
* `extensions/specification-extension.md`
* `docs/application-design-principles.md`
* `docs/application-recommendations.md`

Inspect related examples and research documents when the task concerns them;
documentation-only or repository-local research updates do not require all
Core references.

## Core Principles

* Keep the Core minimal.
* Entity represents an existence.
* Event represents an occurrence.
* Relation represents a directed connection.
* A Relation may connect an Entity or Event to another Entity or Event.
* Relations must not target other Relations.
* Self-relations are permitted.
* Cycles are not prohibited by the Core.
* A Dataset must remain self-contained at the Core level.
* Meaning that is not required for interoperability should be delegated to Extensions.
* Presentation and application behavior must not be embedded unnecessarily in the Core.
* Unknown Extensions should be safely ignorable.
* Maintain a single source of truth.

## Specification Changes

Before editing:

1. Identify whether the change belongs to the Core, an Extension, an application document, or research.
2. Check for conflicts with existing specification documents.
3. Explain which files need to change.
4. Avoid changing multiple unrelated concepts at once.

When editing:

* Preserve terminology consistently across documents.
* Update examples when a normative data structure changes.
* Clearly distinguish normative requirements from informational guidance.
* Do not introduce application-specific behavior into the Core without explicit instruction.

## Application modularization policy

When specification work records application architecture or cross-repository
development guidance, apply the accepted workspace Decision in
`ai-knowledge/decisions/application-modularization-and-incremental-extraction.md`.
Keep the guidance responsibility-based and incremental; do not prescribe a
fixed file layout or introduce Core, Extension, schema, or application-
ownership semantics merely to support modularization.

## Working Method

* Make one logical change at a time.
* Keep every intermediate state internally consistent.
* Do not modify files that are unrelated to the requested task.
* A verified local commit is allowed for one bounded logical checkpoint of
  explicitly requested work. Do not push, publish, or rewrite history without
  explicit authorization.
* Review the final diff for contradictions and terminology drift.

Choose investigation order, instrumentation, implementation method, and
focused validation from the task and diff scope. Retain authority order,
data-safety boundaries, and explicit stop points for destructive or externally
visible actions and important design forks.

## Documentation and Roadmap Policy

* Keep `docs/roadmap.md` as the sole current-planning authority and entry
  point. It should concisely cover current status, priorities, dependencies,
  active work, relevant explicit deferrals, and pending Human decisions.
* Keep detailed result, acceptance, audit, reconciliation, and research
  evidence in their dedicated authority/evidence documents. The roadmap should
  link to them and carry only the summary needed for current planning; do not
  duplicate their detailed contents.
* Move completed, superseded, and historical roadmap chronology to
  `docs/roadmap-history/`. Maintain it in a few broad, long-lived workstream
  units, not issue-, checkpoint-, or short-lived-milestone files. Treat
  `legacy-chronology.md` as a bounded pre-migration preservation unit, not the
  default append target. Give cross-workstream chronology one primary location
  and link to it elsewhere rather than duplicating it.
* Treat words such as `current`, `next`, and `open` in dated historical text as
  descriptions of that original snapshot, not as current planning authority.
  Preserve transferred historical blocks' wording, date/status language,
  source order, and provenance; do not rewrite history to match current
  understanding. Do not classify material as historical merely because it is
  old or appears complete: check its authority and evidence against current,
  open, deferred, qualified, and pending-decision state. Retain or mark mixed
  or ambiguous material for review rather than guessing; return material
  design branches to the Human.
* Keep exploratory hypotheses, design space, possible capabilities, and
  non-active research detail primarily in Research. Keep explicit deferrals,
  evidence gates, dependencies, and pending Human decisions in the roadmap
  when they constrain current planning. Decide the boundary by whether
  information constrains current planning or is exploratory knowledge, not
  solely by when work may happen. When moving detail to Research, retain the
  roadmap pointer and any current dependency or decision boundary.
* When moving or compressing documentation, check headings, anchors, local and
  external references, and navigation back to the current authority. Prefer
  current repository, filesystem, Git, tests, and documentation evidence over
  older summaries or assumptions.

## Git Checkpoint Policy

Codex may create local commits when a bounded logical unit is complete and
verified. Before committing, inspect `git status --short`, identify exact owned
files or hunks, stage only those paths or hunks, inspect
`git diff --cached --name-status`, run `git diff --cached --check`, and run the
relevant specification/schema/example validation. The normal E2R-SPEC gate is
`npm run validate`; narrower validation scripts may be used when appropriate.

After committing, report the hash, subject, scope, verification results,
worktree status, and whether the commit remains unpushed. Preserve unrelated
dirty work.

Do not use the following unless the user explicitly authorizes that exact
operation:

- `git add .`
- `git add -A`
- `git commit -a`
- `git reset --hard`
- `git clean`
- broad `git restore`
- broad or automatic `git stash`
- rebase
- squash
- amend of an existing checkpoint
- history rewriting
- force push

Prefer exact-path staging such as:

`git add -- path/to/file1 path/to/file2`

or precise hunk staging when required. Push, release, tag, and package
publication always require explicit authorization.

## Completion Criteria

A specification task is complete when:

* Relevant documents agree with each other.
* Examples remain compatible with the specification.
* Core and Extension responsibilities remain clearly separated.
* No unrelated files have been changed.
