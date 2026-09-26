# LiaisonScape Initial-Layout Coarse Objective Self-loop Boundary Audit 1

Date: 2026-09-11

Status: CORRECTED; READY FOR BOUNDED COMPARATIVE EVALUATION

## Finding

The coarse objective had no explicit Self-loop boundary. Because a Self-loop
has identical endpoints, including it in ordinary straight-chord proxies would
create a zero-length chord and could create artificial long-label corridor or
parallel-bundle pressure.

The proxy now excludes `sourceId === targetId` Relations from:

- straight-edge crossing;
- long-edge count;
- Relation-label corridor pressure; and
- parallel-bundle pressure.

Node body and estimated Node-label envelope metrics still include the Node that
owns a Self-loop. This is intentional: those are Node geometry occupancy
signals, not loop-routing signals.

## Responsibility boundary

```text
coarse initial-layout proxy:
  Node body / estimated Node-label occupancy

routing / presentation authority:
  Self-loop angle, radius, attachment, route, and loop-label placement
```

The Self-loop's existence may still matter to a future explicit local-pressure
proxy, but no such signal is invented here. The current objective therefore
does not let Self-loop count or zero-length geometry distort candidate ranking.

## Evidence

A regression counterfactual adds a Self-loop to an otherwise identical ordinary
graph. The complete coarse metric object remains unchanged. The test suite now
passes `346/346`, with lint and build also passing.

## Readiness

```text
zero-length chord contamination = removed
Self-loop ordinary proxy scope  = explicit
Node occupancy scope            = retained
loop angle/radius attribution    = separate / unresolved
comparative evaluation readiness = YES, bounded diagnostic only
Product integration/adoption     = NOT AUTHORIZED
```

The next comparative evaluation can proceed using the corrected objective.
Self-loop routing fixes, label treatment, connectors, Titanic parallel routing,
and Product adoption remain separate checkpoints.

Fresh10/Fresh11/Fresh12 evidence and the Fresh12 canonical Human Review result
are unchanged. No new governed Fresh lineage, push, tag, release, deploy, or
publication was performed.
