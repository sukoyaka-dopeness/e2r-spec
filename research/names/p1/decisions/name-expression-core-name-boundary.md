# P1 Name Expression — Core `name` Boundary

Date: 2026-08-14

Status: Research checkpoint; non-normative

## Boundary

Core `name` remains the Core-defined optional short human-readable label. In
the Names architecture it may serve as a compatibility/fallback label, but
that role does not change its Core semantics. It is not a P1 Name expression
identity, and equal text does not establish identity equivalence.

When a Names-aware Dataset also carries P1 expressions, an application may
display Core `name` as fallback when no suitable P1 expression is available.
The fallback relationship must not silently create, replace, redirect, or
merge a P1 expression.

## Consistency questions

- Is Core `name` absent, equal, or different from available P1 text?
- Is the difference merely presentation, or does an application need a
  diagnostic signal?
- Which component owns any warning or validation severity?
- Can a Core-only reader preserve both values without inventing identity?

A Core `name` / P1 difference may be diagnosed by a Names-aware component, but
the difference is not by itself a Core validity error. Exact diagnostic
severity and validator ownership remain deferred.

## Required non-behavior

- no automatic synchronization;
- no automatic P1 creation from Core `name`;
- no automatic Core `name` rewrite from P1;
- no identity equivalence from equal text; and
- no inferred preferred Name semantics.

## Deferred

Exact consistency rules, validator severity, repair workflow, display choice,
and final Names/Core payload contracts remain deferred.
