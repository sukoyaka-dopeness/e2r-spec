# Optional Core text field blank semantics — Research seed

Status: **FUTURE E2R-WIDE NORMATIVE RESEARCH RESPONSIBILITY / NO RULE ADOPTED**

## Purpose

Prepare a future Core-level decision on the meaning and preservation of empty,
blank, whitespace-only, and omitted values in optional human-text fields.
Current application behavior is inconsistent, but this Research seed does not
change Core semantics or establish a shared application convention.

## Current evidence

- NarrativeLine's Entity `name` / `description` form submits the strings as
  entered. Empty strings and whitespace-only strings remain present in the
  Dataset and survive E2R JSON export and re-import.
- LiaisonScape treats blank and whitespace-only optional Entity text as field
  removal.
- ParameterPlotter has a Human-decided Product policy: its selected initial
  Dataset Entity edit allowlist is Candidate A (`name` / `description` only),
  and blank or whitespace-only input removes the optional field. This is not
  an E2R-wide rule.
- [E2R Core](../../spec/core.md) currently calls `name` and `description`
  optional human-readable fields without defining empty-string, whitespace,
  omission, or normalization equivalence.

The application-level direction in the [Roadmap](../../docs/roadmap.md#optional-entity-text-blank-behavior-across-applications)
prefers blank-to-absent behavior for consistency, but it is a preference for
application-level alignment, not an adopted Cross-App standard. A proposed
NarrativeLine change requires a bounded impact audit before implementation.

## Questions for future Human decision

Research should present evidence and alternatives for Human to decide:

1. Is `""` a valid present value for an optional Core human-text field?
2. Is whitespace-only text present, or equivalent to absence?
3. Are omitted and empty-string values semantically distinct?
4. Should Core prescribe trimming or other normalization of nonblank input, or
   leave it to each application?
5. Should a rule apply to `name` / `description` on Entity, Event, and Relation
   alike, or vary by Core Object / field responsibility?
6. If a normative rule is adopted, what changes are needed in Validator,
   schema or conformance guidance, existing Datasets, round-trip preservation,
   and backward compatibility?
7. Whether existing stored data is automatically repaired, normalized, or
   migrated is a separate Human decision; Research must not assume it.

## Boundaries

- Do not infer Core semantics from ParameterPlotter's application-level
  decision.
- Do not change the Core, schema, Validator, Extensions, or runtime as part of
  this seed.
- Do not standardize Cross-App behavior before Human adopts a decision.
- Do not use this future Research to reopen or change ParameterPlotter's
  selected Candidate A allowlist or its blank-removal policy. Any E2R-wide
  normative rule requires a separate Human decision and does not automatically
  change that application-level Product decision.
- Keep migration, repair, and normalization of existing data as separate
  Human decisions if a normative rule is later considered.
