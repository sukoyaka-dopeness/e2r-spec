# ParameterPlotter product-milestone decision preparation

Date: 2026-10-04
Status: **Decision preparation only; no next Product milestone selected**

## Current evidence and readiness

The bounded application-local Prototype 2 is HUMAN-ACCEPTED / CLOSED. Its
canonical browser evaluation remains 19 Human PASS / 0 PENDING / B3 NOT RUN;
Human accepted the missing genuine Prototype 1 legacy-session fixture as an
evidence limitation. This packet does not reopen that closure.

Human approved one Product responsibility: a workspace for comparing selected
E2R Entities on explicitly defined Dimensions and inspecting the same
application-local temporary Entity–Dimension values through Profile, Radar,
Quadrant, and Matrix. Prototype 1 and 2 provide accepted evidence that this
comparison workspace and its shared local values/interactions work as a
bounded application experiment. They do not establish audience, usage
frequency, data-retention expectations, collaboration needs, production
readiness, or a portable data model.

**Readiness:** the responsibility is clear enough to frame a first-slice
Product decision, but the evidence does not yet select a production milestone.
The smallest unresolved question is the expected lifetime and sharing scope of
work in the first product slice. That choice determines whether production
planning can remain app-local and session-scoped or must address durable
storage, recovery, identity, or collaboration. It does not by itself select a
repository or technical architecture.

## Human decision: first-slice workspace lifetime

| Candidate | What Human would authorize | Evidence, benefits, trade-offs, and dependencies |
|---|---|---|
| **A. Hold production; gather product-use evidence** | Keep P2 closed and do not start a production slice yet. | Preserves all current non-decisions while gathering evidence about audience and recurring tasks. No repository, framework, or persistence decision is needed. Delays learning from a production-shaped application. |
| **B. Bounded app-local first slice** | Authorize a single-user comparison workspace whose temporary values remain application-local and whose Dataset stays read-only; explicitly accept the first slice's stated session/loss/recovery limits. | Closest to accepted P1/P2 boundaries and does not require a portable Observation model or Dataset write-back. Before implementation, Human must confirm the exact lifetime/recovery expectation; P2's tab-session storage is evidence, not an approved production retention promise. Sharing and durable recovery remain out of scope unless separately selected. |
| **C. Durable app-owned workspace first slice** | Require temporary work to survive beyond the current browser session, while leaving Dataset write-back undecided. | May better support recurring work, but requires a product-level retention, recovery, and ownership promise before technical choices. App-owned persistence can remain distinct from portable E2R semantics. Whether this is local or hosted, and whether users share work, are subsequent decisions rather than assumptions in this option. |

Current evidence supports B as the smallest-scope continuation of the accepted
prototype boundary, but it does not prove that its session/loss limits are
acceptable as a product. A is also consistent with the evidence. C is viable
only if Human considers durability part of the first product outcome; no
current evidence selects it.

## What need not be decided with this gate

- **Product name:** ParameterPlotter remains a working name. An internal
  decision packet and first-slice investigation can use it without selecting
  a formal name or release identity.
- **Repository and framework:** neither is needed to choose the workspace
  lifetime. Decide ownership and technical structure only after Human
  authorizes a concrete first slice and its data-lifecycle needs. Apply the
  existing responsibility-based, incremental modularization guidance; it does
  not prescribe a framework or repository layout.
- **Portable Dimension/value or Observation contract:** not a prerequisite
  for an app-local, read-only-Dataset slice. Revisit before values need to be
  exchanged across applications or represented as portable Dataset content.
- **Dataset write-back/export, Extension, schema, Validator:** not implied by
  the approved workspace responsibility. They become gates only if a selected
  Product outcome requires portable persistence or interoperability.
- **Precision, normalization, provenance, and multiple observations:** remain
  separate semantic research decisions. Prototype-local behavior is not a
  portable contract.
- **Authentication, membership, and collaboration:** decide only if Human
  selects shared work. A durable single-user workspace alone does not imply
  accounts or multi-user permissions.

## Conditional implementation gates

Before any production implementation, Human must authorize the first-slice
outcome and its workspace lifetime/recovery boundary. If durable or shared work
is selected, first clarify who owns it, how it is recovered, and whether it is
single-user or shared; then prepare a separate bounded architecture/repository
decision. If cross-application exchange or Dataset persistence is required,
portable value/Observation and write-back responsibilities need their own
Human decisions before implementing those capabilities. These conditional
gates do not require deciding every deferred item up front.

## Separate follow-ups

The Quadrant resize-then-scroll connector defect and waiting-Entity
plot-click discoverability remain separate Prototype follow-ups. P2 closure
records them as non-blockers. This packet does not fix them or promote them to
Product blockers. If a selected first slice depends on either interaction,
Human may scope a focused follow-up before that slice; otherwise they remain
separate.

## Suggested next Human decision

Choose **A, B, or C** above, or defer the choice. If choosing B, state the
acceptable session lifetime and recovery/loss boundary. This is the only
Product-level decision this packet recommends making next; it selects no
product name, repository, framework, portable contract, or implementation.

## Evidence pointers

- [Current Roadmap](../../docs/roadmap.md)
- [ParameterPlotter Research overview](multi-visualization-application-pre-implementation-research.md)
- [Dimension/value semantics Research checkpoint](parameterplotter-dimension-value-semantics-research-checkpoint-2026-10-02.md)
- [Prototype 2 implementation and closure result](../prototypes/parameterplotter-1/prototype-2-bounded-implementation-result-2026-10-02.md)
- [Prototype 2 Human Browser Evaluation](../prototypes/parameterplotter-1/prototype-2-human-browser-evaluation-2026-10-02.md)
- [Prototype README and current runtime boundary](../prototypes/parameterplotter-1/README.md)
