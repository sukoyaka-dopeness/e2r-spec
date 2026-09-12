# LiaisonScape Initial Layout Global Placement 3 Product Default Adoption Decision

Date: 2026-09-12

## Decision

```text
Product default adoption                     = HOLD / MORE EVIDENCE REQUIRED
Global Placement 3 visual acceptance         = ACCEPT (bounded human gate)
Bounded Product integration                  = PASS (development-only opt-in)
Product default behavior                     = UNCHANGED
Initial Layout Release blocker               = OPEN
```

Global Placement 3 has sufficient evidence to continue to a formal adoption
decision, but not sufficient evidence to change the default in the current
repository state. This is an adoption hold, not a rejection of the visual
candidate.

## Basis for the decision

The following evidence is complete and supports the candidate's Product
semantics:

- The user-authoritative six-cell human visual gate is ACCEPT.
- The bounded normal-App integration is PASS for Lighthouse, Titanic, and
  Apollo in EN and JA.
- Coordinate-less, fully stored, mixed, and fallback authority are
  non-regression PASS.
- Derived placement does not save coordinates or create dirty/pending work.
- Save Coordinates and same-payload reopen semantics remain PASS.
- Round-once finalization was matched across the six cells without family
  drift.
- No candidate-only Initial Layout blocker was observed.

The remaining gap is implementation and measurement, not the already accepted
visual observation. In the actual repository, Global Placement 3 positions are
currently produced by the development-only Vite
`/__acceptance-layouts` endpoint, which launches the diagnostic search process.
The App's direct query is also gated by `import.meta.env.DEV`. There is no
production-capable runtime provider or production service contract that can
perform this computation for an ordinary Dataset open. Turning the query seam
into a default would therefore either leave production without the candidate
or require an unvalidated new runtime architecture.

The observed approximately 1.96-3.65 second Product-path timing is useful
integration evidence, but it is a development-server observation and not a
Release benchmark. It cannot establish acceptable default latency, timeout,
failure, or scaling behavior for arbitrary coordinate-less Datasets.

## Runtime classification and next direction

Runtime is classified as:

- a continuing Initial Layout Release blocker; and
- an adoption-readiness evidence gap because default behavior would expose
  the unbenchmarked production path to ordinary users.

This is not a visual-quality or coordinate-authority failure. Before adoption,
the project needs a production-capable execution boundary and representative
runtime evidence, including bounded failure/fallback behavior and larger
Dataset scaling. Stage 1 full-presentation reduction remains an appropriate
follow-up research direction for reducing the release blocker, but it is not
implemented or claimed as completed by this checkpoint.

The next bounded checkpoint should establish the production runtime boundary
and benchmark it, then revisit adoption. It must preserve the existing
stored/mixed/coordinate-less authority and downstream presentation ownership.

## Preserved boundaries

- No Product default or adoption change was made.
- Canonical samples and accepted coordinate canonicalization were not changed.
- Routing, Relation-label, Node-label, Self-loop, connector, glyph, and CSS
  authority remain downstream Product responsibilities.
- The known parallel-edge/long-label and Self-loop crossing issues remain on
  their separate presentation/routing tracks.
- Historical Fresh evidence, Fresh12 canonical Human Review, and governed
  lineage were not changed.
- No push, tag, release, deploy, or publication was performed.

## Validation

E2R-SPEC `npm run validate` passed. The change is documentation-only; no
LiaisonScape source or test file was changed in this checkpoint.
