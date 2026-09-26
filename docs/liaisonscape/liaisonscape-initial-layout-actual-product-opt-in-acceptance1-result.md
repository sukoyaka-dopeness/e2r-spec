# LiaisonScape Initial Layout Actual Product Opt-in Integration Checkpoint

Date: 2026-09-11

## Scope

This checkpoint connects `coarse-objective-prototype-v1` to the normal
LiaisonScape Dataset-open path only when the explicit URL query parameter
`initial-layout=coarse-objective-prototype-v1` is present. Product default
initial placement is unchanged when the parameter is absent.

The integration seam selects initial Node positions only. Routing,
Relation-label placement, self-loop handling, connector rendering, viewport
fitting, interaction, and persistence remain owned by the existing Product
pipeline.

## Authority result

- Coordinate-less Dataset: bounded coarse provider is eligible under opt-in.
- Fully stored Coordinates: stored positions remain authoritative.
- Mixed Coordinates: existing Product completion behavior remains authoritative;
  coarse is not invoked.
- Derived positions: remain in-memory display state and do not modify the
  Dataset or its clean baseline.
- Initial derived placement does not set coordinate dirty-state or pending
  user work. Save Coordinates remains disabled until a user-owned coordinate
  change occurs.
- Unsafe or budget-exceeded coarse results retain the provider's whole-result
  fallback to the current Product placement.

## Instrumentation and evidence

The existing Dataset-open timing diagnostic now records the selected initial
layout authority/provider/status/reason. The Actual Product dev surface showed
the normal open sequence through `graph-prepared`, `presentation-derived`, and
`graph-stable` for the opt-in coordinate-less Lighthouse sample.

Automated coverage verifies coordinate-less opt-in, stored-coordinate
authority, mixed-coordinate completion, and default behavior. Existing
presentation and interaction tests remain green.

Human visual acceptance is not marked PASS here. Lighthouse/Titanic EN/JA,
Apollo EN/JA fallback, and direct checks of visual defects, loading, fit,
locale, selection, drag, and Save Coordinates still require explicit human
review in the Actual Product surface.

## Classification

- Actual Product opt-in integration: implemented and machine-verified.
- Integration safety semantics: machine-verified for the covered authority
  cases.
- Actual Product visual acceptance: pending human review.
- Post equivalence: not claimed.
- Product default adoption: HOLD.
- Fresh10/Fresh11/Fresh12 evidence and Fresh12 canonical Human Review: not
  modified.
