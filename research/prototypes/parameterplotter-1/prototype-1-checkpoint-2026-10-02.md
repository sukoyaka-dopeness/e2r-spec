# ParameterPlotter Prototype 1 checkpoint

Date: 2026-10-02
Status: **PROTOTYPE 1 HUMAN-ACCEPTED / PRODUCT RESPONSIBILITY DECISION RESOLVED IN FOLLOW-UP**
Scope: application-local interaction evidence only

## Checkpoint outcome

Prototype 1 has reached its bounded interaction checkpoint. Human acceptance
supports moving from additional UI refinement to a Human decision about the
candidate product responsibility. It does not formally adopt a product, data
contract, production implementation, or repository.

The [Prototype README](README.md) records the implementation progression. The
preceding [Session 0099](../../../sessions/E2R-Session-0099.md) remains a
historical handoff; this checkpoint supersedes its “Human evaluation
continues” status for the Prototype 1 interaction scope only.

## Accepted Prototype evidence

- **Shared comparison workspace:** Profile, Radar, Quadrant, and Matrix use
  the same Entity identity, temporary Dimension pool, temporary values, and
  missing-value state. Each view keeps its own view-specific selection where
  needed. This is evidence that the four projections can operate over the
  same Prototype observations, not a decision that they form one product.
- **Data boundary:** imported E2R Dataset content remains read-only. Temporary
  Entities, Dimensions, and values are application-local tab-session data.
  The Prototype does not write back to or export a Dataset.
- **Temporary Entity editing:** Name and optional Description can be edited
  while retaining the same temporary Entity identity and its Dimension
  values. Dataset Entities remain read-only.
- **Value behavior:** the Prototype's numeric range remains `-1..+1`.
  `null`/unassessed and explicit `0` remain distinct; no assessment is
  inferred from imported Entity data. The two-decimal Matrix display does not
  replace the stored temporary value.
- **Lifecycle and accessibility:** Entity and Dimension Drawers contain
  keyboard focus, restore focus to the opener, and lock background scrolling
  while open. Dataset replacement warns before clearing temporary work; a
  cancelled replacement retains the current session.
- **Radar:** the selected Dimension list has a visible top boundary. Accepted
  pointer/keyboard vertex interaction, selection feedback, list reordering,
  and reduced-motion behavior remain application-local. The 10-spoke cap is
  a provisional Prototype display limit, not portable semantics.
- **Quadrant:** accepted point drag, return-to-waiting, label placement, and
  selection behavior remain bounded presentation and session interactions.
  Dense or unusually long labels can still require further evaluation.
- **Matrix:** the selector, drag grip, and header identity remain separate.
  Column drag uses a vertical insertion indicator at the chosen boundary;
  pointer-side insertion and the post-removal splice index agree for leading,
  middle, and trailing positions. Escape cancellation and Alt+Left/Right
  keyboard reorder are retained. Human confirmed that the trailing indicator
  no longer causes an unnecessary horizontal scrollbar. Normal Matrix
  horizontal scrolling remains available when the content requires it.
- **Other bounded interaction evidence:** focus restoration, long/duplicate
  identity assistance, Dataset replacement safety, responsive behavior, and
  reduced-motion treatment are recorded in the Prototype README and accepted
  within this Prototype scope.

## Limits and decisions intentionally deferred

The Prototype is not a full Dataset validator and does not establish a
portable Dimension/value model, repeated-observation model, or long-term
persistence. Its current `-1..+1` scale and explicit center value are
Prototype behavior only. Radar's 10-spoke display cap is provisional.

No decision is made here about:

- Product responsibility or whether Profile, Radar, Quadrant, and Matrix
  belong to one product;
- Dimension-specific MIN/MAX or other arbitrary numeric ranges;
- unit, precision, directionality, the meaning of higher values, or the
  meaning of zero;
- normalization or scale comparability;
- missing, unknown, inapplicable, and unassessed value semantics;
- assessor, time, provenance, or multiple observations;
- portable Dimension identity, vocabulary, or a Recorded-versus-Derived
  contract;
- Dataset write-back/export, Extension, schema, or Validator changes;
- a canonical application repository, production architecture/framework,
  product name, release name/version/date, or Radar's permanent 8-versus-10
  spoke policy.

## Next Human decision

The strongest current **candidate for Human review**, not an adopted Product
responsibility, is:

> A workspace for comparing selected E2R Entities using explicitly defined
> Dimensions and inspecting the same observations through multiple
> projections.

Human should decide whether the four Prototype views together satisfy one
coherent responsibility, whether the candidate task and selected Entity
population are appropriate, and whether evidence supports any further product
or production-design work. A “yes” would still not select portable semantics,
Dataset mutation, architecture, repository ownership, or product naming.

If Human selects further semantic research, candidate questions include
Dimension-specific MIN/MAX; arbitrary ranges; unit; precision; directionality;
zero meaning; missing, unknown, inapplicable, and unassessed states;
normalization; assessor/time/provenance; multiple observations; portable
Dimension identity/vocabulary; and the distinction between Recorded values
and Derived presentation values. These remain research questions and are not
implemented or adopted by this checkpoint.

## Human decision resolution — 2026-10-02

The Product responsibility decision pending at this Prototype 1 checkpoint
was subsequently resolved: Human approved one workspace for comparing
selected E2R Entities across explicitly defined Dimensions and inspecting
the same application-local temporary Entity–Dimension values through
Profile, Radar, Quadrant, and Matrix. This records product-task evidence; it
does not make the values portable or establish an Observation model.

The next bounded Dimension/value Research checkpoint is
[here](../../exploratory/parameterplotter-dimension-value-semantics-research-checkpoint-2026-10-02.md).
It prepares an application-local Prototype 2 experiment, not a runtime
implementation. The Prototype 1 pending-decision text above is retained as
the accurate status of that earlier checkpoint.

## Repository and verification boundary

This is a documentation checkpoint. It changes no Prototype runtime, Dataset,
Core, Extension, schema, Validator, canonical application repository, or
public artifact. Detailed current planning remains in the
[Roadmap](../../../docs/roadmap.md#current-status-index-2026-10-02). This
checkpoint supplies its evidence pointer.
