# E2R Session 0019

## Date

2026-08-07

## Summary

This session completed a documentation and specification-organization pass
after the NarrativeLine MVP and GitHub Pages release.

The E2R Extension naming rules were separated from the Specification Extension
and established as the single source of truth in `spec/extension-naming.md`.
The Specification Extension now references those rules rather than owning a
second naming system.

The registered Stable Extension set currently contains only:

- `metadata`
- `history`

Coordinate, Layout, Dictionary, and Specification remain candidates under
review.

## Specification and Documentation Work Completed

The following changes were committed and pushed to `e2r-spec/main`:

- Extension naming rules, namespaces, registration, migration, and versioning
- Extension index and Stable/Candidate classification
- Coordinate/Layout responsibility boundary
- Coordinate reference Spaces as a minimal Coordinate Extension concept
- Dictionary Extension placement and identity scope
- Relationship Graph clarification for Relation-to-Relation research wording
- Core Object and Dataset-level Extension terminology normalization
- History Extension specification and rationale
- History examples and invalid fixtures
- History JSON Schema and validation tooling
- Dataset identifier and `referenceCode` documentation
- Session logs 0014 through 0018
- Metadata Extension v1 documentation

Important commits include:

```text
aaece31 Define Extension naming rules
7c36653 Align Extension index with registry
dc19fee Clarify Coordinate and Layout boundaries
b383566 Define Coordinate reference spaces
d68d335 Align Dictionary examples with Extension placement
aebf7e0 Clarify Dictionary identity scope
e38ef4d Clarify Relation endpoint scope
4fd2323 Standardize Dataset-level Extension heading
b229508 Complete History Extension specification
d650bb9 Document History design rationale and recommendations
c8d0bee Add History examples and fixtures
2711f79 Add History schema validation tooling
f889ada Clarify Dataset identifiers and reference codes
444adc2 Record recent E2R work sessions
71f56bd Add Metadata Extension specification
```

The `e2r-spec` working tree was clean at the end of this session.

## Remaining Specification Issues

- Coordinate, Layout, Dictionary, and Specification are not yet mature enough
  for Stable registration.
- Coordinate and Layout examples still use payload shorthand in places; the
  documents explain the complete `extensions.*` placement, but a future pass
  may convert every example to full Dataset/Object form.
- Coordinate Spaces still require decisions about Space ID lifecycle,
  deletion, rename, and transformations between Spaces.
- Layout View/Presentation boundaries remain deferred.
- Dictionary multiple-dictionary and external-dictionary references remain
  unspecified.
- Dictionary versioning and inheritance remain future work.
- `draft` versus `experimental` semantics are documented as meanings but their
  lifecycle order remains intentionally non-normative.
- Authority syntax and registry automation remain open design questions.
- Linkscape documentation may still contain historical Relation-to-Relation
  wording; the current Core prohibition remains authoritative.

## Recommended Next Milestone

The next application milestone should be a small E2R Validator rather than
Linkscape or immediate broad NarrativeLine expansion.

Recommended order:

1. Build a lightweight Validator using the Core rules, History schema, Metadata
   rules, and unknown-extension preservation expectations.
2. Use it to validate the committed examples and invalid fixtures.
3. Improve NarrativeLine presentation and begin Japanese localization as a
   separate application-polish milestone.
4. Start Linkscape only after the Validator clarifies the boundaries needed by
   graph-oriented applications.

This order keeps the next application small, exercises the specification
directly, and postpones the larger Linkscape design until the Core/Extension
boundaries have more executable evidence.

## Handoff to the Next Codex Session

Workspaces:

- E2R specification: `C:\Users\extra\E2R\e2r-spec`
- NarrativeLine: `C:\Users\extra\E2R\e2r-narrative-line`

At session start:

1. Read both repositories' `AGENTS.md`.
2. Check `git status` in both repositories.
3. Read this session log and `sessions/E2R-Session-0018.md`.
4. Preserve all existing user changes; do not reset, checkout, or delete them.
5. Do not commit or push without explicit instruction.

Suggested first task:

Design a minimal Validator application or CLI. Begin with a read-only design
review and file inventory. Do not modify Core or Extension specifications until
the Validator's validation scope is documented.

Minimum Validator scope to consider:

- Core Dataset required fields and array types
- Core Object ID uniqueness and Relation endpoint resolution
- prohibition on Relation-to-Relation endpoints
- Metadata Extension v1 shape
- History Extension schema validation
- unknown field/Extension preservation expectations
- stable error codes, paths, and related IDs

Keep Validator design separate from NarrativeLine UI behavior and from the
future Linkscape graph application.
