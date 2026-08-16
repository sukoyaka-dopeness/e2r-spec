# Name Expression P1 — Ownership Boundary Audit

Date: 2026-08-14

Status: Research checkpoint; non-normative

## Purpose

Begin the next Names workstream without reopening deferred Grouping
representation selection. Define what a P1 Name expression owns, references,
and explicitly does not own.

## P1 expression owns

- stable expression identity;
- the expression text/value;
- expression identity continuity and the substantive-replacement boundary;
- language and script metadata when supplied as expression metadata.

## P1 expression references

- the owning Entity/Object binding;
- separately owned naming-kind semantics, when defined; and
- other references only where a future responsibility explicitly defines them.

P1 expressions may be referenced by historical applicability assertions,
Claims, Evidence, or other separately owned responsibilities. Those assertions
target the expression; they are not P1-owned lifecycle data.

Context/community ownership remains unresolved. External identity mapping and
reference direction remain unresolved and must not be inferred from P1 identity.

## P1 expression does not own

- Core `name` compatibility/fallback semantics;
- identity equivalence based on equal Core `name` text;
- naming-kind vocabulary or dictionary meaning;
- generic temporal applicability;
- Grouping representation or Group identity;
- preferred display or search ranking;
- automatic replacement, redirect, merge, split, or cascade behavior; and
- Claim, Evidence, Assessment, or Provenance payload semantics.

## Next bounded review

Review the P1 expression boundary against Core `name`, Names lifecycle, and one
concrete Names consumer. Do not define a final Names payload or Extension ID.
