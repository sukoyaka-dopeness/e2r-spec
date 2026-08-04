# E2R Specification Guidance

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
* Do not commit or push changes unless explicitly instructed.
* Review the final diff for contradictions and terminology drift.

## Completion Criteria

A specification task is complete when:

* Relevant documents agree with each other.
* Examples remain compatible with the specification.
* Core and Extension responsibilities remain clearly separated.
* No unrelated files have been changed.
