# Roadmap Hybrid Reconstruction - G2-B3 A-style Preparation 1

Date: 2026-09-25
Status: NON-NORMATIVE PREPARATION / G2-B3 ONLY / NO ROADMAP OR HISTORY BODY CHANGE

## Purpose and current authority

This preparation examines the Roadmap heading
`LiaisonScape Boundary Equivalence-Class Product Completion / Cost Envelope 1
(2026-09-14)` for a later, standalone A-style Hybrid reconstruction pilot.
The current Roadmap, the dedicated result, the existing Layout and Auto Layout
History unit, and the separate G2-B4 result were checked as distinct
responsibilities.

The dedicated authority is
`docs/liaisonscape/liaisonscape-boundary-equivalence-class-product-completion1-result.md`.
The current Roadmap heading remains the planning authority for the live
qualification boundary. The broad History unit is the eligible destination for
dated detail if the later pilot is approved.

## Evidence reconciliation

The dedicated result supports a bounded completion architecture in its tested
set: full boundary completion reached `34/34` exact-best with zero meaningful
misses and fail-closed behavior. This does not establish a general quality
closure. The same result explicitly records:

- full completion is quality-closed only within the tested envelope;
- capped completion remains `NOT CLOSED`;
- the boundary-equivalence trigger is only `DIAGNOSTICALLY SUPPORTED`;
- risk-gate readiness remains `OPEN` and probe-target readiness remains `NOT
  ESTABLISHED`; and
- cheap-only selector, quality solver, Product integration/default, and
  production provider remain unestablished.

The separate G2-B4 authority confirms that fail-closed behavior does not close
the live target/risk qualification: generation-order perturbation returns
meaningful misses, the replacement target rule remains incomplete, and
independent controls do not establish generalized risk-gate closure. B3 must
therefore remain linked to B4 rather than presenting tested-set completion as
selector readiness.

## Claim-level manifest

| Claim | Latest authority | Current Roadmap consequence | Eligible detail for later pointer | Proposed disposition |
| --- | --- | --- | --- | --- |
| Full boundary completion | Boundary Completion result | Quality closure is bounded to the tested set only | Exact candidate counts, full/capped policy tables, measured cost and regret | **A - compress with tested-set qualifier** |
| Capped completion | Boundary Completion result | `NOT CLOSED`; no capped policy is adopted | `+2/+4/+6` matrices, cost envelope, miss tables, order comparisons | **A - retain as live negative boundary** |
| Boundary trigger | Boundary Completion result | Diagnostic support only; not a production selector | Class-definition rules, membership exclusions, trigger mechanics | **A - pointer compression candidate** |
| Failure behavior | Boundary Completion result plus G2-B4 result | Fail-closed evidence is bounded diagnostic safety, not acceptance | Failure-injection outputs and per-policy counts | **A - pointer compression candidate** |
| Risk/target qualification | G2-B4 result | `OPEN` / `NOT ESTABLISHED`; separate live responsibility | Perturbation and independent-control matrices | **HOLD in B3 pilot scope** |
| Product/production adoption | Standing Roadmap and dedicated result boundaries | No Product adoption, production selector, solver, provider, or default/integration | Dated status repetition only | **HOLD / do not reclassify** |

## Recommended next implementation pilot

Proceed only as **G2-B3 alone**, using A-style compression with the existing
heading and generated anchor unchanged. The future edit should:

1. retain the tested-set-only quality qualification;
2. retain `capped completion NOT CLOSED`;
3. retain diagnostic-only trigger semantics and the separate B4 risk/target
   qualification pointer;
4. retain the negative boundaries for cheap-only selection, quality solver,
   Product integration/default, provider, Product adoption, and release/Human
   Review status; and
5. delegate class definitions, cost/order matrices, failure-injection detail,
   candidate counts, and dated progression to the dedicated result and the
   existing broad History unit.

No B disposition is proposed. This is not a canonical synthesis because the
tested-set and live-qualification boundaries must remain adjacent to the
heading. It is also not a History migration: the heading and current
qualification remain in Roadmap.

## Anchor and scope checks

The B3 heading and generated anchor are retained as a compatibility-sensitive
planning entry. The intended future edit is body-only. B1, B2, and B4 headings
remain separate. No new History unit, taxonomy, or responsibility model is
needed for this preparation.

G2-C and G2-D are out of scope. Core/Extension/schema/runtime semantics,
maturity, acceptance, provider status, Product integration, and release status
are unchanged. Sibling repositories and `work/` are not modified.

## Human decision gate

The next decision is limited to whether to authorize the exact standalone
G2-B3 A-style body compression described above. A later implementation must
recheck current authority and inbound references before staging. If the
tested-set qualifier cannot remain adjacent to the compressed consequence, or
if B4 status must be changed to make the edit coherent, stop and return to
Human review.
