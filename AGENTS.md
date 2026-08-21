# E2R Specification Guidance

## Reusable knowledge

The central workspace knowledge base is `C:\Users\extra\E2R\ai-knowledge`.
Search its `INDEX.md` before specification work involving Dataset safety,
Handoff, History, application boundaries, or cross-repository decisions.
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

## Required Reading

Before making specification changes, read the relevant documents, especially:

* `spec/core.md`
* `spec/philosophy.md`
* `spec/rationale.md`
* `extensions/history-extension.md`
* `extensions/specification-extension.md`
* `docs/application-design-principles.md`
* `docs/application-recommendations.md`

Also inspect related examples and research documents when the task concerns them.

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

## Working Method

* Make one logical change at a time.
* Keep every intermediate state internally consistent.
* Do not modify files that are unrelated to the requested task.
* A verified local commit is allowed for one bounded logical checkpoint of
  explicitly requested work. Do not push, publish, or rewrite history without
  explicit authorization.
* Review the final diff for contradictions and terminology drift.

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
