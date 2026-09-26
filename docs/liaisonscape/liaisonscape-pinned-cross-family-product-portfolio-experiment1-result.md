# LiaisonScape Pinned Cross-Family Product Portfolio Experiment 1

Date: 2026-09-17  
Contract: `E2R-LIAISONSCAPE-PINNED-CROSS-FAMILY-PRODUCT-PORTFOLIO-EXPERIMENT1`  
Classification: **C. PORTFOLIO HELPS SELECT CASES / GENERAL RELEASE-QUALITY BENEFIT NOT ESTABLISHED**

## Decision

This bounded diagnostic establishes that several Pin-aware candidate families
can be generated with exact anchors and evaluated through the same current
Product presentation selector. It does not establish a general release-quality
benefit, a production Explicit Auto Layout provider, or a reason to reopen the
Frontier provider decision.

The current best-single control is the Pin-aware Frontier family. The portfolio
selected a non-Frontier family in all 20 rows, but 5 of those selections reused
the same geometry as the Frontier control after deterministic tie ordering.
The remaining 15 selections had lower Product score than the control in this
bounded matrix; 11 also reduced the measured crossing count. One case increased
node-body overlap. No candidate passed the Product hard eligibility gate in
the non-empty operation snapshot because the existing label/presentation
criteria remained non-zero. These are diagnostic metrics, not a Human Review
or release decision.

The dense control remains a best-effort boundary: the `bipartite(7,7)` graph,
historically named `dense-k7-7`, retains substantial crossing pressure. The
portfolio reduces, but does not remove, that pressure. Label-heavy and
parallel/Self-loop controls show useful family selection in some cases, with
trade-offs under constrained anchors.

## Candidate and authority boundary

The included families are:

- `pinned-frontier`: `generatePinnedFrontierCandidateSet`, delegating to the
  shared Frontier generator for no pins and using the existing bounded
  anchor-aware diagnostic construction for pinned cases;
- `density-adaptive`: the current density-adaptive separation policy, with
  anchors locked before and during construction;
- `topology-aware-free-form`: `deriveTopologyAwareFreeFormCandidates` from
  current source. For pinned cases it uses a bounded anchor-aware adapter with
  anchors installed before relaxation. This is an experiment lineage, not a
  production pin-aware free-form contract.

The historical Post family is excluded. Current evidence contains persisted
Post positions and Product re-evaluation, but no current pin-aware generator
boundary. Applying pins afterward would violate the exact-constraint contract
and would not be a source-faithful replay.

Pins are exact fixed inputs. Only unpinned Nodes are transformed, and no
post-hoc coordinate overwrite is used. Manual move and Pin identity remain
separate. Product continues to own ordinary routing, Relation-label,
Node-label, Self-loop, previous-placement feedback, eligibility, and ranking.
Viewport fit is reported only as a diagnostic; Dataset, Coordinates,
persistence, dirty-state, and Save Coordinates are not touched.

## Fixture matrix and evidence

| Fixture | Locale / control | Pin cases | Result use |
| --- | --- | --- | --- |
| Lighthouse | EN / ordinary public | no pins, one saved, few mixed, all pinned | ordinary control |
| Apollo 11 | EN / ordinary public | same four cases | moderate control |
| label-heavy JA-10 | JA / long labels | same four cases | label pressure |
| dense-k7x7-bipartite | EN / `bipartite(7,7)`; historical `dense-k7-7` alias | same four cases | dense best-effort boundary |
| parallel-self-loop-control | EN / parallel Relations + Self-loop | same four cases | topology/presentation control |

Every row uses the same non-empty operation-local Product snapshot containing
previous Node/Relation label placements, previous automatic routes, manual
label state, ordinary route offset, and Self-loop override. The current Product
eligibility predicate and `compareAutomaticLayoutProposals` order the combined
candidate set. Empty-snapshot Frontier behavior remains a separate accepted
lineage control and is not silently replaced by this experiment.

The generated sets were complete and finite, and all candidates preserved
anchors exactly. One independent replay per fixture reproduced candidate
identity and position fingerprints. The artifact records candidate identities,
family lineage, structural metadata, Product metrics, selected fingerprints,
anchor sources, and per-stage timings.

## Runtime characterization

Candidate generation and Product evaluation are timed separately. Fixture load,
process startup, artifact I/O, report generation, React rendering, and viewport
fit are excluded. In this bounded run, generation was approximately
0.2--4.6 seconds per fixture/pin case and Product evaluation approximately
0.2--2.8 seconds, with dense cases dominating. These numbers are diagnostic
only; they do not choose main-thread, cooperative, or Worker architecture.

## Reproduction and provenance

Run from `e2r-liaison-scape`:

```text
node --experimental-strip-types tools/pinned-cross-family-product-portfolio-experiment1.mjs
node --experimental-strip-types --test tests/pinned-cross-family-product-portfolio-experiment1.test.ts
```

The executable artifact is:

- `experimental/pinned-cross-family-product-portfolio-experiment1/core.ts`
- `tools/pinned-cross-family-product-portfolio-experiment1.mjs`
- `tests/pinned-cross-family-product-portfolio-experiment1.test.ts`
- `experimental/pinned-cross-family-product-portfolio-experiment1/result-summary.json`

The recorded source revision is the current LiaisonScape `HEAD` plus the
diagnostic additions. The replay chain is:

```text
normalized fixture Dataset + exact Pin anchors
→ current-source candidate family generation
→ complete finite candidate set / anchor invariants
→ same Product presentation snapshot
→ Product eligibility and deterministic ranking
→ selected family / position fingerprint / metrics
```

No production source behavior, provider, UI, persistence, or Human Review was
changed or reopened.

## Follow-up

The result supports a later Explicit Auto Layout implementation checkpoint only
if it keeps this authority boundary and separately resolves adoption semantics,
manual/stored-coordinate policy, and quality gates. It does not authorize a
portfolio provider, crossing refinement, dense optimization, or a new visual
review campaign.

