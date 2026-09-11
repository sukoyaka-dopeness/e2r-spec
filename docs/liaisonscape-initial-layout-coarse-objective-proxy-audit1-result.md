# LiaisonScape Initial-Layout Coarse Objective Proxy Audit 1

Date: 2026-09-11

Status: CORRECTED; READY FOR BOUNDED COMPARATIVE EVALUATION

## Audit finding

The first `relationLabelCorridorPressure` implementation was invalid as a
geometry proxy. It measured the distance from a Relation's own midpoint to its
own straight chord. That distance is always zero, so the value was effectively
text-width-derived and did not respond to candidate geometry.

The implementation was corrected. It now estimates pressure from the Relation
label midpoint toward foreign Node body/label occupancy and non-incident
foreign straight chords near the label corridor. It still deliberately does
not call actual routing or Relation-label placement.

## Node-label rectangle meaning

`nodeLabelOverlaps` is an estimated rectangular envelope signal. It measures
coarse initial-placement occupancy using bounded text-width/description-height
estimates. It does not measure glyph outlines, font shaping, CSS rendering,
connector visibility, or actual Node-label placement.

The signal remains separate from rendering and is weighted below hard Node-body
overlap and straight crossing. It must not be used as a formal label-quality
judgment or allowed to dominate candidate ranking without comparative evidence.

## Counterfactual evidence

The new test places a foreign Node far from, then inside, the midpoint corridor
of a long Relation. The clear geometry produces zero corridor pressure; the
occupied geometry produces positive pressure. The objective is therefore
geometry-sensitive for this representative case.

The implementation remains deterministic under entity/Relation input reorder,
does not invoke routing, and passes `345/345` LiaisonScape tests, lint, and
build.

## Readiness and limitations

```text
Relation-label corridor geometry sensitivity = PASS
Node-label rectangle proxy definition        = CLARIFIED
actual glyph / label-placement equivalence   = NOT CLAIMED
proxy weights and ranking validity            = UNRESOLVED
comparative evaluation readiness             = YES, bounded diagnostic only
Product integration/adoption                  = NOT AUTHORIZED
```

The next checkpoint may compare current, Post, and proxy-driven candidates on
representative EN/JA fixtures. It must report whether proxy ranking agrees
with Actual Product observation and must separately inspect cases where
rectangle estimates disagree with rendered labels. Node-owned glyph treatment,
connector layering, Titanic parallel routing, and Self-loop angle remain
separate presentation tracks.

Fresh10/Fresh11/Fresh12 evidence and the Fresh12 canonical Human Review result
are unchanged. No new governed Fresh lineage, push, tag, release, deploy, or
publication was performed.
