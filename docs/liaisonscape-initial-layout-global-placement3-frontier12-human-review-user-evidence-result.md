# LiaisonScape Initial Layout Global Placement 3 Frontier-12 User Human Review Evidence

Date: 2026-09-13

Status: USER HUMAN REVIEW RECORDED; POSITIVE BUT FORMAL ACCEPTANCE NOT EXPLICITLY DECLARED

## Authority and scope

This record adds the user's direct visual observations to the earlier
Codex-browser-inspection result. The user's observation is the authoritative
human evidence for this checkpoint; the earlier browser inspection and
machine gate remain separately identified evidence.

The reviewed scope is the canonical Lighthouse, Titanic, and Apollo fixtures in
EN and JA, comparing `global-placement3` (G3 reference) with `frontier-12` on
the normal Actual Product surface. This evidence is limited to the canonical
six-cell review. It does not establish dense scaling, a production-native
provider, Product default/adoption, or Release readiness.

## User evidence

| Item | Direct user observation and interpretation |
| --- | --- |
| Runtime | Frontier-12 speed was satisfactory to the user. This is human UX evidence, not a production benchmark or release-time contract. |
| Canonical quality | The six-cell result was described as broadly good/practical overall. |
| Candidate-only regression | No Frontier-12-specific visual regression was observed. |
| Titanic EN/JA | Unnecessary Edge crossings remain, weakening the visual association between an Edge and its Relation-label. The user states this issue already existed in Global Placement 3 and is not Frontier-12-specific. |
| Apollo EN | A horizontal Edge can be too short, making its Relation-label appear detached from the Edge. The user states this issue already existed in Global Placement 3 and is not Frontier-12-specific. |

No stronger per-cell acceptance wording was supplied. In particular, this
record does not manufacture six `ACCEPT` judgments from “broadly good”, and it
does not promote the overall observation to the project's formal `ACCEPT`
status without an explicit acceptance statement.

## Responsibility separation

The Titanic and Apollo observations are recorded as the following separate
presentation follow-up items:

- Titanic EN/JA: unnecessary Edge crossing causing weaker
  Relation-label-to-Edge association/readability.
- Apollo EN: short horizontal Edge causing an apparently detached
  Relation-label.

These are pre-existing relative to Frontier-12 and are not candidate defects.
They remain downstream routing/Relation-label presentation concerns. No
routing, Relation-label, Node-label, Self-loop, connector, or rendering
authority is transferred to Initial Layout by this record.

## Disposition

```text
USER HUMAN REVIEW                         = RECORDED
human quality signal                      = POSITIVE / BROADLY GOOD
runtime user satisfaction                 = SATISFIED
Frontier-12 candidate-only regression     = NONE OBSERVED
formal USER HUMAN ACCEPTANCE              = NOT EXPLICITLY DECLARED
Frontier-12 canonical checkpoint          = EVIDENCE RECORDED; FORMAL ACCEPTANCE NOT CLOSED
next Initial Layout research              = MAY PROCEED TO BOUNDED DENSE/TOPOLOGY RETUNE
Product default / adoption                = HOLD
Initial Layout Release blocker            = OPEN
```

The bounded next research step may investigate density/topology-aware
Frontier-12 retention, using this positive canonical evidence as context. It
must not treat the canonical review as evidence that dense scaling or a
production provider is solved, and it must not change Product default or
presentation ownership.

G3's existing Human ACCEPT is unchanged. No Product behavior, Dataset,
round-once, stored/mixed authority, persistence, dirty-state, or Save
Coordinates semantics was changed.
