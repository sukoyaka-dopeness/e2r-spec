# LiaisonScape Frontier-12 Candidate / Product Selection Authority Decision 1

Date: 2026-09-16

## Final classification

`A SELECTED: CANDIDATE GENERATOR WITH PRODUCT-OWNED DOWNSTREAM SELECTION`

Frontier-12 should be defined as a candidate-set generator. Product-owned
downstream presentation evaluation and final candidate selection remain the
canonical authority. This preserves the reviewed lineage without moving
routing, labels, Self-loop behavior, viewport, or interaction responsibility
into Frontier.

## Decision comparison

### A — selected

Frontier owns deterministic generation of a bounded set of initial derived
Node-position candidates, including the structural frontier and its recorded
candidate metadata. Product owns presentation evaluation, feasibility gates,
candidate ranking/selection, final canonicalization policy, and the downstream
presentation pipeline.

This matches current source: `productionStructuralFrontier(12)` produces
representatives, then `productionSimplificationSearch` applies
`presentationMetrics`, eligibility/sorting, and final canonicalization. It
reproduces the Human Review path without duplicating or relocating Product
authority.

### B — rejected for now

Including Product presentation evaluation inside a Frontier execution boundary
would make the boundary depend on Product-owned routing and label behavior. It
would either duplicate those authorities in a solver or redefine Frontier as a
cross-layer orchestration service. It would also make standalone Frontier
runtime ambiguous by including presentation work, and would complicate future
Worker/Cancel/transient-preview transport.

B could be revisited only as an explicitly shared Product-evaluation contract;
it is not the current architecture.

## Canonical contracts

Frontier input is a normalized, serializable placement request containing the
minimum stable Node IDs and relation topology required by the recovered
structural generator, plus explicit parameters and deterministic ordering
conditions. It must not implicitly consume Dataset Coordinates, manual state,
DOM nodes, React state, viewport state, or mutable previous-operation state.

Frontier output is a complete bounded candidate set of finite derived Node
positions with stable candidate identity, structural metadata, and structured
failure information. A candidate is not final Product presentation and is not
Dataset state.

Product input is that candidate set plus the current Product presentation
context. Product remains responsible for routing, Relation-label and Node-label
placement, Self-loop presentation, viewport fit, feasibility/quality
evaluation, final selection/canonicalization, interaction, persistence, and
dirty-state semantics.

## Parity and runtime gates

Reviewed Frontier-12 parity is judged at the complete recovered lineage gate:
candidate generation output plus Product-authoritative selection and final
fingerprint. The existing artifact parity evidence remains valid: 10
file-backed and 3 dense synthetic rows matched selected family and position
fingerprint. A future extracted candidate-set test must additionally compare
stable candidate identities/metadata before the Product selection test.

Production execution timing must be split into:

1. Frontier candidate generation time;
2. Product presentation evaluation and final selection time; and
3. integration/render/viewport time.

Only (1) is Frontier runtime. This makes later main-thread/cooperative/Worker
decisions meaningful without importing comparison/reporting or React rendering
into the solver measurement.

## Next-step readiness and remaining blocker

Solver extraction may begin in a bounded next checkpoint using A: extract the
candidate-set generator and retain a separate Product-selection adapter for
parity. It must not claim to return reviewed final positions by itself.

Before choosing Worker/cooperative execution or adding Cancel/transient
preview, the remaining blocker is standalone characterization of the extracted
candidate generator and the Product-selection stage, including operation
identity, stale-result rejection, failure/partial-output handling, and parity
against the reviewed artifact. No execution architecture is selected here.

Executable provenance remains mandatory across both stages: normalized input,
source revision, parameters/determinism, generation method, candidate signature,
Product selection signature, and final fingerprint.

Production default remains `settleInitialPlacement`; Human Review remains
`QUALIFIED`.
