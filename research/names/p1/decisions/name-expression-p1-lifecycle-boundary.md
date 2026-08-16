# P1 Name Expression — Lifecycle Boundary

Date: 2026-08-14

Status: Research checkpoint; non-normative

## Confirmed boundary

P1 expression identity continuity is preserved across non-substantive value
edits where the expression remains the same intended expression. A substantive
replacement creates a new P1 expression identity; old references remain
references to the old identity unless an owner-specific rule says otherwise.

## Not yet owned or decided

The P1 expression boundary does not yet define lifecycle status vocabulary,
retirement, deletion, restoration, redirect, merge, split, cascade, or
migration. These operations must not be inferred from a new expression identity
or from text similarity.

## Safety constraints

- historical or epistemic assertions may continue to target the old identity;
- replacement does not silently retarget grouping or applicability;
- missing old targets remain distinguishable from new expressions; and
- generic readers do not redirect, merge, split, or cascade references.

## Next review question

Is this identity-continuity boundary complete and consistent with the existing
Name lifecycle evidence, without accidentally selecting lifecycle metadata or
migration behavior?
