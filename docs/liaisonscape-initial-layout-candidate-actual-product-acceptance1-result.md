# LiaisonScape Initial-Layout Candidate Actual Product Acceptance 1

Date: 2026-09-11

Status: DIAGNOSTIC USER ACCEPTANCE EVIDENCE RECORDED; Product adoption remains
HOLD

## Purpose and boundary

This record captures the user's Actual Product observation of the current
baseline, `generic-crossing-search-v1`, and
`post-structural-relaxation-v1` on the Lighthouse Restoration public sample.
It extends the provenance audit without selecting or adopting an initial-layout
algorithm.

No historical governed Fresh evidence, canonical Human Review result, public
Dataset, Product source, or stored coordinate data was changed. No new governed
Fresh lineage was started.

## User observation

The user compared the three Lighthouse Actual Product states and judged
`post-structural-relaxation-v1` the best of the compared candidates.

The user specifically reported that the following were good in the post
candidate:

- overall graph structure;
- Node placement and Node-label presentation;
- Relation and Relation-label presentation; and
- overall placement balance and readability.

This is direct diagnostic user evidence from the Actual Product renderer. It is
not formal PR-3 acceptance, a cross-locale acceptance, a ranking authority, or
a Product adoption decision.

## Candidate boundary

The comparison was interpreted as:

| Arm | Meaning | Result |
| --- | --- | --- |
| Current | coordinate-less public sample using current automatic initial placement | comparison control |
| Generic | `generic-crossing-search-v1`, the Stage 1 structural predecessor | readable and coherent, but not preferred by the user |
| Post | `post-structural-relaxation-v1`, bounded Stage 2 relaxation from the generic state | preferred by the user; candidate remains HOLD |

The provenance and implementation chain are recorded in [the candidate
provenance audit](C:/Users/extra/E2R/e2r-spec/docs/liaisonscape-initial-layout-candidate-provenance-audit.md).
The comparison surface uses the real `src/App.tsx`; candidate coordinates are
temporary values in an in-memory diagnostic clone and are not saved.

## Residual observations and attribution

The user observed that Self-loop angles still show a tendency to favor upward
and lower-right directions. This remains an open routing/presentation follow-up.
It is not counted as evidence that the initial-layout candidate is defective,
and this checkpoint does not change Self-loop routing.

The previously observed one-sided bending tendency of parallel Edges was not
prominent in this Actual Product observation. That absence is recorded only as
an observation; it is not attributed to `post-structural-relaxation-v1` without
a controlled routing comparison.

Accordingly, the residual findings are separated as follows:

- initial-layout candidate: positive Lighthouse user observation;
- Self-loop angle preference: OPEN, separate routing/presentation track;
- parallel Edge side balance: not reproduced prominently in this observation,
  causal attribution UNRESOLVED;
- cross-locale and broader human acceptance: incomplete.

## Acceptance status

The candidate is now sufficiently identified and user-observed for the next
bounded acceptance discussion. The decision remains:

```text
post-structural-relaxation-v1 = HOLD
Product adoption             = NOT PERFORMED
formal PR-3 acceptance       = NOT PERFORMED
```

Remaining checks before a separate explicit adoption decision are:

1. complete the agreed Actual Product comparison coverage for the representative
   coordinate-less samples, including any required Apollo comparison;
2. establish whether EN/JA visual behavior is acceptably consistent;
3. define the adoption authority and the transition from diagnostic derived
   geometry to intentionally adopted Product behavior; and
4. keep Self-loop routing and parallel-Edge presentation follow-ups separate
   from the initial-layout decision.

The current evidence supports continuing with bounded comparison and user
review. It does not support silently replacing the Product automatic placement
algorithm.

## State preservation

- Fresh10/Fresh11/Fresh12 historical evidence: unchanged.
- Fresh12 canonical Human Review result: unchanged.
- Public sample meaning and coordinate-less contract: unchanged by this record.
- New governed Fresh lineage: NOT STARTED.
- Product adoption: NOT PERFORMED.
- Push, tag, release, deploy, and publication: NOT PERFORMED.
- Existing unrelated dirty work: preserved.
