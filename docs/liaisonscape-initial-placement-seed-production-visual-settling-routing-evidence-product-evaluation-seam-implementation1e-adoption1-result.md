# LiaisonScape Product Evaluation Seam Implementation1E Adoption1 Result

Date: 2026-09-03 (Asia/Tokyo)

Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-IMPLEMENTATION1E-ADOPTION1`

Status: `ADOPTED`

## Outcome

This checkpoint is `CASE 1 / Decision A`:

> AUTOMATIC NODE/RELATION LABEL DERIVATION SEAM ADOPTED; DYNAMIC LABEL FOLLOW SEMANTICS PRESERVED; ROUTING AND DEFAULT PRODUCT BEHAVIOR REMAIN EXACT; NEW PRODUCT/EVALUATION/PRESENTATION-SEAM AUTHORITY FROZEN; PROCEED ONLY TO A SEPARATELY AUTHORIZED IMPLEMENTATION1F CHECKPOINT.

Implementation1E was adopted into live Production. The work was limited to
the validated automatic label derivation seam. No label algorithm, routing,
viewport, Dataset, persistence, interaction, render, CSS, browser, or baseline
change was made.

The correct pre-adoption Product/evaluation/presentation authority was
`e2ede7f27fca86af1b2bb28f5a954d9bfba8cbfc`, subject
`refactor: extract automatic routing derivation`. The Implementation1E
candidate was `dd8ea0c917eae78399411b10ad3beeec705f706d`, with that exact
pre-adoption commit as its parent.

## Documentation typo reconciliation

The committed Implementation1E result contained the truncated live-authority
hash `e2ede7f27fca86af1b2bb28f5a954d9bfba8`. This result records the additive
correction: the correct pre-1E live authority is
`e2ede7f27fca86af1b2bb28f5a954d9bfba8cbfc`. The historical 1E result and its
documentation commit `ccb1753caf40bda5729554eb24194cb1c39c8184` were not
amended or rewritten. This is documentation-only and does not alter candidate
provenance.

## Boundary and transfer

The mandatory boundary was `IMPLEMENTATION1E LABEL-SEAM ADOPTION ONLY`.
Transfer policy `L-A` was used. The exact adopted inventory was:

- `src/graph-presentation.ts`
- `src/App.tsx`
- `tests/graph-presentation.test.ts`

The candidate commit inspection showed exactly those three changed paths,
with parent `e2ede7f27fca86af1b2bb28f5a954d9bfba8cbfc`. No `viewport.ts`,
`auto-layout.ts`, `dataset.ts`, style, package, `characterization2`, or
candidate experimental path was transferred. The transfer was an inspectable
exact-path copy of the three validated candidate files; no cherry-pick,
formatting cleanup, normalization, or manual cleanup was used.

Candidate/live SHA-256 equality was exact:

| Path | Candidate SHA-256 | Live SHA-256 | Match |
| --- | --- | --- | --- |
| `src/graph-presentation.ts` | `D91F9752C67B17A45B644354BD593BD8CBE0549AE6E03ECEA0799E3E9DA00853` | `D91F9752C67B17A45B644354BD593BD8CBE0549AE6E03ECEA0799E3E9DA00853` | YES |
| `src/App.tsx` | `2CC510D604DDB6352EE0847C8DAB62818502821A5BD1C6F4CE7192FE576B813F` | `2CC510D604DDB6352EE0847C8DAB62818502821A5BD1C6F4CE7192FE576B813F` | YES |
| `tests/graph-presentation.test.ts` | `B579E115AE8399D8CD041B4D47887C98C9BF521611904535F5CB79160E5A9905` | `B579E115AE8399D8CD041B4D47887C98C9BF521611904535F5CB79160E5A9905` | YES |

## Protected live state

Before transfer, live HEAD was exactly `e2ede7f27fca86af1b2bb28f5a954d9bfba8cbfc`.
The three adoption targets were clean. The only pre-existing dirty files were
the protected samples:

- `public/lighthouse-restoration-demo.en.e2r.json`:
  `19B6362468CF51E32FA9DEA016BC4211D8055C299E28D0CC402BC63B5A5B31D1`;
- `public/lighthouse-restoration-demo.ja.e2r.json`:
  `C4604679A8D730705E33E51F06BAED46E37BD571C30595145D1938CD3E9B4EFA`.

The same exact hashes were present after validation and commit. The protected
files were never staged, restored, checked out, normalized, replaced, or used
as authority.

## Adopted label contracts

`graph-presentation.ts` now owns the pure Product functions
`deriveAutomaticNodeLabels(...)` and `deriveAutomaticRelationLabels(...)`.
Both receive plain snapshot inputs and return `Map<string, LabelRect>`.

The Node-label contract receives graph Nodes, current positions, routed edges,
Relation-label rectangles, previous Node-label placements, plain manual Node
offsets, and the actively dragged Node ID. It preserves graph Node processing
order, route-path obstacle inputs, Relation-label Map insertion order,
occupied-label append order, previous-placement behavior, active-drag omission,
manual-offset application order, rectangle dimensions/directions, and output
insertion order.

The Relation-label contract receives routed edges, current Node points,
previous Relation-label placements, plain manual Relation-label anchors, and
the dragged Node ID. It preserves routed-edge order, exact `placeEdgeLabel`
inputs, earlier occupied Relation-label accumulation, Node obstacle order,
other-edge path context, previous-placement behavior, active-drag omission,
manual-anchor reconstruction order, rectangle dimensions/directions, and output
insertion order. No sorting or canonicalization was introduced.

`placeNodeLabel(...)` and `placeEdgeLabel(...)` remain single-owned in
`src/viewport.ts`. The viewport source is unchanged against the pre-adoption
authority, including candidate ordering, scoring, sizing, direction
enumeration, connector geometry, collision constants, recovery, and margins.
`routeGraphEdge(...)`, `compareRouteGeometry(...)`, and
`deriveAutomaticRoutes(...)` are unchanged in semantics; routing remains exact.

## Ownership and dependency direction

App remains the owner of `manualNodeLabelOffsets`, manual Relation-label
anchors, label drag state, drag lifecycle, reset semantics, selection, React
state/refs, Dataset state, persistence, coordinate/manual-placement save
semantics, and SVG render/events. The Product seam receives plain snapshot
copies only. It does not persist, reset, mutate, own refs or React state, infer
manual ownership, convert manual placement to Stored data, or decide whether a
manual placement is discarded. Manual Node and Relation inputs remained
unmutated.

The dependency direction is:

```text
App -> graph-presentation automatic label derivation -> viewport pure presentation primitives
```

`graph-presentation.ts` has no React, DatasetService, persistence/localStorage,
drag refs/state containers, explicit-seed adapter, materializer, candidate,
manifest, or PR-3 harness dependency. Candidate awareness is `NO`; no stale
internal cache exists.

The App dependency lists remain exactly:

- Relation labels: `[graph.nodes, positions, routedEdges, manualLabelRevision]`;
- Node labels: `[edgeLabelPlacements, graph.nodes, positions, routedEdges, manualLabelRevision]`.

The App diff against the pre-adoption authority contains only import changes
and automatic Relation-label/Node-label orchestration call-site extraction.
Unrelated hunks: `0`. Node drag, Relation drag, label drag, manual placement,
reset, persistence, Dataset, selection, SVG, routing, and render behavior were
not changed.

## Dynamic and regression evidence

Live-source machine proofs passed:

| Proof | Result |
| --- | --- |
| Node position P1 -> P2 changes Node-label geometry | PASS |
| manual Node offset relationship preserved; input unchanged | PASS |
| Relation route R1 -> R2 changes Relation-label geometry | PASS |
| curve offset changes route and Relation-label geometry | PASS |
| self-loop override changes route and Relation-label geometry | PASS |
| manual Relation anchor input unchanged | PASS |
| graph/routes/geometry snapshots not mutated | PASS |

The focused presentation suite passed `22/22`; its existing routing seam tests
passed separately as `10/10`. The 12 label-seam tests cover deterministic
Node/Relation labels, movement, route-follow, curve/self-loop follow, occupied
ordering, Node-vs-Relation obstacles, manual input-only semantics,
non-mutation, and output order. Existing manual label drag, anchor/fraction/
normal, visual reconciliation, reset-to-auto, and direct interaction
regressions passed within the full Product suite.

## Exact evidence and Product validation

The immutable baseline2 characterization directory was copied only temporarily
for evidence execution and removed before the final live status. Baseline2
itself remained unchanged at `324193eda5924d2c5f5d0e0cad8a92b64d2ea6a8`.

| Check | Result |
| --- | --- |
| baseline characterization | 4/4 PASS |
| fresh-process auto-layout replay | 38/38; SHA exact |
| pure routing | 9/9 exact |
| App routing | 16/16 exact |
| pure labels | 8/8 exact |
| App labels | 16/16 exact |
| Relation reversal, solve | 16/16 |
| Relation reversal, settle | 16/16 |
| Node reversal, solve | 16/16 |
| Node reversal, settle | 16/16 |
| no mutation | PASS |

The unchanged auto-layout v2 SHA is
`F18C4C98607B9412BD6C035803002BE1DFEE1F2AF721942C8D8FF69A5496795B`.
No rounding, tolerance, regenerated expected output, baseline-v2 change, or
baseline-v3 was used.

Live Product validation passed:

- `npm.cmd test`: `309/309 PASS`;
- `npm.cmd run lint`: PASS;
- `npm.cmd run build`: PASS, Vite transformed 62 modules;
- `git diff --check`: PASS.

The non-fatal existing WebSocket port `24678` warnings did not affect results.

## Adoption commit and authority

Before commit, exact-path staging contained only:

```text
M src/App.tsx
M src/graph-presentation.ts
M tests/graph-presentation.test.ts
```

The protected EN/JA samples were not staged. The staged diff check passed and
the full staged diff contained only the validated candidate content.

Adoption commit:

- Hash: `c7e7745ad883f8434f56dd62e5b933aafabf548d`;
- Subject: `refactor: extract automatic label derivation`;
- Parent: `e2ede7f27fca86af1b2bb28f5a954d9bfba8cbfc`;
- Scope: exact three-file Implementation1E label seam adoption;
- Status: local and unpushed.

`c7e7745ad883f8434f56dd62e5b933aafabf548d` is now the current accepted
Product/evaluation/presentation-seam source authority. The default behavioral
baseline remains `characterization-v2-post-order-resolution`.

The authority chain remains distinct:

```text
fd563340...  historical pre-order-correction authority
0937d776...  post-order-correction pre-settling-refactor authority
3b5fb4d...   post-settling-refactor pre-explicit-seed authority
681ef0a...   explicit-seed / pre-routing-extraction authority
e2ede7f...   routing-seam / pre-label-extraction authority
c7e7745...   current Product/evaluation/presentation-seam authority
dd8ea0c...   Implementation1E validation provenance
63753950...  Implementation1D validation provenance
bb4f603...   Implementation1C validation provenance
324193e...   baseline2 behavioral evidence authority
```

## Deferred work and status

Implementation1F is technically eligible (`YES`) because routing derivation,
automatic Node-label derivation, and automatic Relation-label derivation are
Product-owned pure seams while manual interaction remains App-owned. It is
nevertheless `NOT STARTED` and was not authorized here. Its next prerequisite
is exactly:

`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-IMPLEMENTATION1F`

Implementation1F remains limited approximately to the separately authorized
P-A render wrapper/CSS/markup equivalence proof. No render component, browser
harness, screenshot, CSS change, real-browser review, candidate execution,
materializer execution, V0/V1/V2/V3, candidate selection, or Product candidate
integration was started. “Browser feels good” is not claimed. PR-3 remains
`NO`. Sample integer-coordinate follow-up remains unchanged.

No new Knowledge Candidate was created; this is repository-scoped checkpoint
evidence under the accepted responsibility-based incremental extraction
decision.

## Repository state and publication boundary

- live Product: `c7e7745...`, only the two protected EN/JA sample files dirty;
- 1E candidate: clean at `dd8ea0c...`, preserved as validation provenance;
- 1D: clean at `63753950...`;
- 1C: clean at `bb4f603...`;
- 1B: clean at `a5bc4b5...`;
- baseline2: clean at `324193e...`;
- W-C: clean/detached at `d7271f5...`;
- retained materializer: detached at `fd563340...`, existing `experimental/` preserved;
- `ai-knowledge`: pre-existing dirty browser diagnostic playbook preserved;
- `sessions/E2R-Session-0052.md`: unchanged.

No push, tag, release, deploy, or publication occurred.
