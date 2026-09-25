# LiaisonScape Explicit Auto Layout Preview / Adoption Contract Reconciliation 1

Date: 2026-09-17  
Contract: `E2R-LIAISONSCAPE-EXPLICIT-AUTO-LAYOUT-PREVIEW-ADOPTION-CONTRACT-RECONCILIATION1`  
Classification: **B. CONTRACT MOSTLY CLOSED / ONE EXPLICIT PRODUCT DECISION REQUIRED**

## Reconciliation decision

The existing contracts can be carried into an Explicit Auto Layout
implementation design, with one unresolved Product decision: how a structurally
valid candidate whose Product metrics contain authority-preserving or inherited
residuals is admitted to Preview and subsequently offered for Accept.

The lifecycle contract is closed as a solver-independent state machine. Pin
persistence and anchor ownership are closed at the draft-contract level. The
strict Product eligibility predicate remains valid for strict presentation
eligibility, but current source does not establish it as the complete Preview
or release gate. The prior Preview/Pin result's persistence blocker is
superseded by the later Pin persistence authority result; its historical result
is retained rather than rewritten.

## Canonical authority and lifecycle

The reconciled boundary is:

```text
Explicit Auto Layout → derived Node candidate geometry
Product → automatic routing/curvature, Relation-label, Node-label,
          Self-loop, presentation evaluation and quality metrics
User → manual route/curvature, manual Relation-label, Node-label,
       and Self-loop authority
Pin → exact Node hard constraint
Application lifecycle → operation identity, snapshot, Preview, Accept,
                        Reject, Cancel, stale handling and persistence boundary
```

The accepted operation lifecycle is:

```text
immutable operation snapshot
→ calculation / cancellation
→ stale-result validation
→ isolated candidate Preview
→ session-only Accept or explicit Reject
→ bounded coordinate revert
→ Save Coordinates as the persistence boundary
```

Calculation, Preview, Reject, and Cancel do not mutate Dataset data or publish
partial geometry. Accept adopts a complete Node map into working/session state,
marks the applicable IDs adopted, and sets the existing dirty state without
persisting the Dataset. Reject, Cancel, stale, failed, and invalid results
preserve the pre-operation display. A bounded revert restores the prior Node
coordinate/ownership state but does not undo later presentation edits.

The operation snapshot must include Dataset/graph identity, session positions,
stored/adopted coordinate state, `coordinatesDirty`, Pin state and anchor
space, manual presentation inputs, locale, algorithm/configuration identity,
budget, and Product presentation inputs. Viewport and read-only selection do
not change the coordinate validity identity.

## Structural validity

The following are hard invariants for a candidate to enter the operation result
boundary:

- operation, generation, Dataset/graph, and snapshot identity match;
- calculation was not cancelled or invalidated and the result is current;
- the Node map is complete for the current Entity set;
- every coordinate is finite;
- every active Pin is preserved exactly and only unpinned Nodes move;
- no partial candidate, partial Pin map, or partial Product presentation is
  published; and
- manual Product authorities remain inputs/ownership outside the structural
  solver.

These conditions are distinct from visual quality. The current pinned
feasibility evidence confirms complete finite output and exact anchors for its
diagnostic candidates; it does not establish production quality.

## Preview admissibility and the unresolved decision

The current predicate in
`src/automatic-layout-selection.ts` is:

```text
crossings === 0
&& overlapPairs === 0
&& labelRouteHits === 0
&& labelOverlap === 0
&& labelNear20 === 0
```

It is used in research/selection proposal paths. `App.tsx` currently executes
`solveAutoLayout` directly and does not use this predicate as its Explicit Auto
Layout completion or adoption gate.

The eligibility diagnostic evaluated the same candidate under non-empty,
no-manual-field, empty, and pre-operation views. Across 30 comparisons, all
primary candidates were false. The failures included routed crossings (19),
label-route hits (20), label nearness (30), Node-body overlap (5), and label
overlap (5). The evidence also identified inherited pre-operation and previous
presentation residuals, and one manual-field-dependent boolean change. Thus a
false value cannot be interpreted uniformly as a new solver defect.

The current evidence does not choose between these Product policies:

1. **Strict preview block:** use the five-condition predicate as a hard Preview
   gate. This is mechanically clear, but the current representative evidence
   would expose no Preview candidate.
2. **Structural Preview with advisory quality:** admit structurally valid,
   current candidates to Preview, show metric residuals, and keep the strict
   predicate as a quality signal. This maximizes user inspection but requires an
   explicit Accept policy for severe residuals.
3. **Two-tier gate:** keep structural validity hard, define a separately
   reviewed catastrophic-quality block, and treat inherited/manual/soft
   presentation residuals as Preview warnings. The catastrophic set and Accept
   rule require Product/Human decision; they cannot be inferred from the
   current boolean alone.

This is the remaining `USER DECISION REQUIRED` boundary. Relative improvement
against the pre-operation presentation may inform the decision but cannot
silently waive a genuinely catastrophic defect. Manual presentation state must
remain in the primary evaluation; counterfactual removal is diagnostic only.

## Accept, Reject, Cancel, and persistence

Accept is session-coordinate adoption, not Dataset persistence. It preserves
manual routing, labels, and Self-loop authority and creates the bounded revert
record. Reject and running Cancel preserve the pre-operation working display.
Accept then Save uses the existing explicit Save Coordinates transaction. Pin
and compatible Coordinate adoption must remain one atomic save transition;
Preview must never write the Dataset or Pin Extension.

The Pin contract remains:

- active Pin is a LiaisonScape-owned Layout Extension record referring to one
  compatible finite Coordinate anchor and stores no second x/y;
- saved and staged anchor sources remain distinguishable;
- manual move is not Pin and a pinned Node's current working move becomes the
  operation anchor under the accepted draft contract; and
- malformed, orphaned, unsupported, or incompatible Pins fail closed and are
  preserved/diagnosed according to the draft rules.

## Readiness and remaining boundary

The next implementation checkpoint may safely design a pure Explicit Auto
Layout operation adapter and Product snapshot path, but should stop before
shipping Preview/Accept policy until the Product decision above is recorded.
The current App's synchronous direct replacement is not the reconciled target;
it is existing behavior and remains unchanged in this checkpoint.

Reusable pieces are the existing lifecycle state machine, shared Frontier and
other candidate generators, exact-pin diagnostic boundary, Product evaluation,
Worker transport patterns, and Save Coordinates boundary. They must be
composed without moving routing, labels, Self-loop, persistence, or manual
authority into a solver.

No new solver family, threshold, production provider, UI, Dataset behavior,
Initial Automatic Display behavior, or Human Review status was changed.

## Provenance and validation

Primary evidence:

- `liaisonscape-explicit-high-quality-auto-layout-operation-lifecycle-contract-closure1-result.md`;
- `docs/liaisonscape/liaisonscape-pin-persistence-authority-contract2-result.md`;
- `liaisonscape-pinned-frontier-feasibility1-result.md`;
- `liaisonscape-pinned-cross-family-product-portfolio-experiment1-result.md`;
- `liaisonscape-explicit-auto-layout-product-eligibility-semantics1-result.md`;
- `experimental/quality-operation-lifecycle/contract.mjs` and its 18/18 focused
  lifecycle evidence; and
- `experimental/explicit-auto-layout-product-eligibility-semantics1/result-summary.json`.

No runtime or production source was changed. This documentation checkpoint
requires no full application test campaign. The existing spec validator and
diff checks remain the applicable gates.
