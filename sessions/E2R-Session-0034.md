# E2R Session 0034 - Low-risk cross-repository milestones

Date: 2026-08-17

## Scope

This session identified ten implementation milestones that cross
E2R-SPEC, NarrativeLine, Validator, and LiaisonScape while keeping each step
small, testable, and reversible. The ordering favors existing capabilities,
fixtures, and application boundaries. These are planning items, not automatic
authorization to change Core semantics or register a Stable Extension.

The Apollo 11 canonical cross-application sample is now recorded as an
accepted layout checkpoint in `e2r-spec`:

- `8c0573e fix: finalize Apollo canonical graph layout`
- `cd032ae docs: record Apollo consumer evidence`

The Apollo evidence memo is
`research/exploratory/cross-application-canonical-sample-consumer-evidence.md`.
It records the current Coordinate adoption boundary, Layout persistence gap,
and Hub/browser/renderer research prompts.

## Ten low-hurdle milestones

### 1. One shared canonical-sample validation command

Add a small, documented verification entry point in E2R-SPEC that parses the
Apollo English/Japanese samples, runs the existing Apollo parity checks, and
reports the Validator result for both files. Keep the command read-only and
reuse existing validators and scripts. This creates a repeatable baseline for
all three consumers without changing Dataset semantics.

### 2. Cross-repository sample compatibility matrix

Record a compact matrix covering E2R-SPEC sample validity, Validator
diagnostics, NarrativeLine import/export preservation, and LiaisonScape
import/export preservation. Start with Apollo and the existing neutral fixture.
The first implementation can be a Markdown checklist or JSON fixture; it need
not be a new compatibility protocol.

### 3. Validator diagnostic contract fixtures

Promote the most important currently exercised cases into a small shared
fixture set: valid Core data, supported Coordinate Draft data, unknown
Extension preservation, unsupported known Extension warnings, and unresolved
Relation endpoints. Validator owns the diagnostic assertions; the applications
only consume them. This improves regression coverage without adding diagnostic
codes.

### 4. Application preservation smoke tests

Add one narrow test per application proving that an import followed by an
unrelated supported edit preserves unknown fields, unknown Extensions,
Relation topology, and untouched History or Coordinate values. Use existing
round-trip helpers and fixtures. Do not require either application to
understand every Extension.

### 5. Shared locale preference research spike

Implement no cross-origin service. Instead, document and optionally prototype
one opt-in same-origin preference read/write adapter for `locale`, with a
clear fallback to the application's current default. Test same-origin paths
and different localhost ports separately. Keep locale outside Dataset data
and avoid making shared storage an architecture requirement.

### 6. NarrativeLine browser and modal interaction polish

Complete the already identified low-risk UX items: browser-back behavior for
views, consistent Home links, smaller balanced controls, and safe modal focus
defaults. Confirm that destructive dialogs default to Cancel and that Enter
does not accidentally confirm deletion. Cover keyboard and mobile-sized
layouts with focused application tests; do not change Dataset behavior.

### 7. LiaisonScape graph readability regression harness

Add behavior-level tests around the existing graph renderer for initial fit and
Reset view: all node bounds remain visible with safety padding, self and
parallel Relations remain present, and the Apollo sample can be loaded in both
locales. Keep the tests geometric or semantic rather than pixel-perfect. Do
not introduce automatic layout or change Coordinate semantics.

### 8. Explicit sample import/export review flow

Add a small application-facing documentation and UI affordance that makes
export, review, and adoption explicit for canonical samples. The flow should
distinguish canonical JSON, an edited working copy, and an independent copy.
It must not silently write to a repository, server, or browser workspace.

### 9. Capability metadata draft for Hub display

Prepare a non-normative, application-owned capability description using
existing repository documentation or a prototype manifest. Include supported
Core objects, known Extension profiles, import/export behavior, and maturity
status for NarrativeLine, LiaisonScape, and Validator. Do not infer capability
from application names, and do not register a new Stable Extension.

### 10. Static Hub sample-gallery proof of concept

Build the smallest static Hub page or fixture that links to the Apollo
English/Japanese JSON, Validator documentation, NarrativeLine, and
LiaisonScape. Include Berlin Wall and Lighthouse only as sibling sample
candidates unless their canonical cross-application status is explicitly
verified. Begin with ordinary links and downloads; defer URL Dataset embedding,
IndexedDB workspace, and cross-origin handoff.

## Suggested sequencing

The safest first batch is milestones 1 through 4 because they improve evidence
without changing user-facing semantics. Milestones 5 through 7 can then be
implemented independently in the applications. Milestones 8 through 10 are
ecosystem-facing and should follow the preservation and capability evidence.

Each milestone should remain a bounded checkpoint with exact-path staging,
repository-specific gates, and no push unless separately authorized.

## Boundaries reaffirmed

This planning session does not authorize:

- Core or Stable Extension changes;
- Coordinate writer migration or automatic normalization;
- Layout, routing, label-placement, or arrowhead implementation;
- silent Dataset persistence or Git/server write-back;
- mandatory network access for validation or opening a Dataset;
- Names multilingual writer design;
- Relative Time or custom temporal-reference implementation; or
- Hub deployment, release, or publication.

## Status

No application or Validator implementation was changed by this session. The
new planning record is stored in this `sessions/` directory. The E2R-SPEC
working tree was clean after the preceding documentation checkpoint; status of
the sibling repositories requires their repository-specific execution context.
