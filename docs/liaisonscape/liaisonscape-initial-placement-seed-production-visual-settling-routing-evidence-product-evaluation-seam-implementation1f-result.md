# E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-IMPLEMENTATION1F

Date: 2026-09-03
Status: `IMPLEMENTATION1F CANDIDATE`
Case: `CASE 1`
Decision: `Decision A`

## Scope and boundary

This bounded checkpoint implements the accepted Design1 `P-A` strategy: an evaluation-only render wrapper and a structural markup/CSS equivalence proof. The normal LiaisonScape Product render architecture remains unchanged. This checkpoint does not perform candidate execution, materialization, browser or CDP execution, screenshot capture, E-VISUAL review, or PR-3 evaluation.

The preceding checkpoint was `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-IMPLEMENTATION1E-ADOPTION1`, recorded by e2r-spec commit `01e002b7b0d5560db8159d8fa2eeb2d395e636c7`.

The current accepted Product/evaluation/presentation-seam authority is `c7e7745ad883f8434f56dd62e5b933aafabf548d` (`refactor: extract automatic label derivation`), parent `e2ede7f27fca86af1b2bb28f5a954d9bfba8cbfc`. Product source changed: `NONE`; `App.tsx` modified: `NO`; Product CSS modified: `NO`.

Baseline authority is `characterization-v2-post-order-resolution` at `324193eda5924d2c5f5d0e0cad8a92b64d2ea6a8`. Exact auto-layout v2 SHA is `F18C4C98607B9412BD6C035803002BE1DFEE1F2AF721942C8D8FF69A5496795B`. Baseline-v2 was not changed and baseline-v3 was not created.

## Clean clone and pre-edit gate

A new disposable clone was created at `C:\Users\extra\E2R\e2r-liaison-scape-product-evaluation-seam-implementation1f` from committed Git history, without copying live working-tree bytes. Its initial HEAD was exactly `c7e7745ad883f8434f56dd62e5b933aafabf548d`; the tracked worktree was clean, no characterization-v2 artifact was copied into the clone, and no unrelated experimental work was added.

Before editing, the accepted authority replay passed exactly:

- focused `graph-presentation`: 22/22 PASS;
- pure routing: 9/9 exact;
- App routing: 16/16 exact;
- pure labels: 8/8 exact;
- App labels: 16/16 exact;
- auto-layout: 38/38 exact, with the SHA above;
- fresh-process replay: PASS;
- relation reversal solve/settle: 16/16 each;
- node reversal solve/settle: 16/16 each;
- no-mutation proof: PASS.

The exact fresh replay result was `caseCount=38` with SHA `F18C4C98607B9412BD6C035803002BE1DFEE1F2AF721942C8D8FF69A5496795B`.

## Current App graph render-tree audit

The audit was performed against the current `src/App.tsx` in the accepted authority before wrapper implementation.

1. The workspace shell is outside the projection: `.app-frame`, `.app-content`, the graph section, toolbar, viewport controls, popovers, and context menu are application/workspace markup.
2. The graph viewport is `section.graph-section` with sibling `.viewport-controls`; the render target is an SVG with `className="graph"`, `viewBox="0 0 800 500"`, `role="img"`, and the graph aria label.
3. The SVG contains `defs/marker#arrow`, then a viewport `<g>` whose transform is the Product `centeredViewportTransform(scale, pan, 800, 500)`. The wrapper receives the final transform string and does not rederive it.
4. Relation groups are emitted in displayed-edge order. Each group contains the visible halo path, visible relation path, arrowhead polygons from the already-derived geometries, and a transparent hit-area path. The wrapper retains the neutral visible paths and arrowheads and omits the invisible edge hit target.
5. Relation labels are emitted in a separate edge-label layer after relation groups. A labelled relation has `edge-label-group`, its final transform, a transparent `label-drag-hit` rectangle, and `edge-label` text. Empty labels render no relation-label group.
6. Node groups are emitted in displayed-node order with translated node positions. The visible body is `rect.entity-body` with `x=-32 y=-32 width=64 height=64 rx=12`. Node label groups contain the optional `line.node-label-connector`, transparent label drag rectangle, `text.node-label`, and any `text.node-description` elements.
7. Invisible connection corridor, connection hit target, and connection handle elements are interaction-only. Selected classes and selected body styling are not active in the neutral projection.
8. Relation-creation preview, hover placement popover, context menu, focus or drag state, pointer/context handlers, refs, and manual-state callbacks are interaction-only or workspace-only and are not in the neutral wrapper.
9. DOM/SVG order is: defs, transformed graph group, optional preview, relation groups, relation-label groups, and node groups. The wrapper preserves the neutral order of relations, labels, and nodes supplied in its input and does not sort or otherwise alter that order.
10. Keys in the audited App are `edge.id`, `label-${edge.id}`, `${edge.id}-arrowhead-${index}`, `node.id`, and `description-${index}`. The wrapper uses stable equivalent keys for its static projection.
11. App handlers are attached to the SVG, relation groups, node groups, and label groups. The wrapper intentionally has no handlers; this does not alter neutral visual output.

### Markup classification

Presentation-essential static markup is the SVG, `viewBox`, aria role/label, marker definition, viewport transform group, visible relation halo/path and arrowheads, relation-label groups/text/background hit rectangle, node groups and translated positions, entity body, node-label group/text, descriptions, and node-label connector where the final presentation includes one. Product classes, geometry attributes, text content, and layer order are preserved.

Interaction-only markup/props are relation hit-area paths, connection handle corridor/hit-target/handle elements, preview geometry, selected/hover/manual state, pointer/context callbacks, refs, drag state, context menu, and hover popover. The transparent `label-drag-hit` rectangle is retained because it is part of the existing static label structure; its event behavior is omitted. Workspace/shell markup and controls are not part of the graph projection.

## Viewport and CSS authority

The current Product value is exactly `viewBox="0 0 800 500"`, matching the Harness Design1 assumption. The later harness assumption remains approximately 1280 x 900 CSS pixels, device scale factor 1 unless recorded otherwise, and 100% zoom. No browser capture was implemented or run here.

The only stylesheet imported by the Product entry is `src/styles.css`, via `src/main.tsx` (`import "./styles.css"`). Relevant authority includes the global `:root` font, color, background, font-synthesis, and text-rendering; global box sizing and html/body/root sizing; `.app-frame`, `.app-content`, `.graph-section`; `.graph`; `.edge-halo`, `.edge-group`, `.edge`, line-style variants, `.edge-arrowhead`, `.edge-hit-area`; `.edge-label`, `.edge-label-group`, `.node-label-group`, `.label-drag-hit`; `.node`, `.entity-body`, selected node/body selectors, connection-handle selectors and their corridors/targets; relation preview; `.node-label`, `.node-description`, and `.node-label-connector`; plus the responsive graph minimum height.

The relevant stylesheet SHA-256 at the accepted authority is `AA28A84F31EDE2BAE6029180EED000072121BF4ED4EAB5462A5B92DD82C5E434`. The selected CSS policy is `C-A`: the evaluation wrapper directly imports the existing Product stylesheet with `import "../../../src/styles.css"`; no CSS rules were copied, rewritten, or tuned.

## Frozen projection and wrapper contract

`VSR-RENDER-PROJECTION-v1` is frozen. It renders already-derived Nodes, routed Relations, relation labels, node labels, node-label connectors, the final viewport transform, and the Product graph classes/attributes needed for the neutral graph appearance.

The neutral evaluation state is frozen as no selected Node/Relation, no hover, no context menu, no active drag, no temporary handle, no manual editing chrome, and no workspace shell/buttons. No additional visual state is silently omitted.

The wrapper files are:

- `experimental/product-evaluation-seam/render-wrapper1/render-wrapper.tsx`
- `experimental/product-evaluation-seam/render-wrapper1/render-wrapper.test.ts`

The wrapper input is plain data: ordered Nodes with ids, final positions, label placement and text, optional descriptions and connector; ordered Relations with the already-derived route (`id`, `path`, `samples`, `label`), line style, arrowhead geometries, and final label placement/transform/hit rectangle; and the final viewport transform and optional aria label. Its output is a static React SVG projection with the frozen Product markup.

The wrapper derives geometry: `NO`. It does not call or copy settling, P3 packing, route derivation, routing comparators, occupied-path logic, label derivation, label placement, viewport fitting, or viewport transform math. It only maps supplied final geometry and text into SVG attributes. Product presentation seams remain authoritative. The wrapper owns no Dataset loading, persistence, candidate materialization, placement, settling, routing, label derivation, manual state, or interaction state.

Dependency direction is future evaluation data and Product presentation types and final data, then the evaluation wrapper, then React/SVG markup. There is no Product-source-to-experimental dependency.

## Equivalence proof

The selected method is `M-A`: a test-owned source/contract snapshot derived from the current App neutral render subtree, with an independently read `src/App.tsx` source reference. The test checks App-authority tags, classes, viewBox, transform and neutral-layer tokens independently of wrapper output, then checks the wrapper static SVG output. This is a structural/static proof, not a runtime browser DOM comparison and not E-VISUAL; it does not prove font metrics, browser CSS layout, anti-aliasing, pixels, or human visual acceptance.

`APP-RENDER-EQUIVALENCE-v1` is frozen and passes for the representative fixture. Results:

- Node markup equivalence: PASS;
- Relation markup equivalence: PASS;
- Node-label markup equivalence: PASS;
- Relation-label markup equivalence: PASS;
- node-label connector equivalence: PASS;
- DOM/SVG ordering equivalence: PASS;
- class-name equivalence: PASS;
- viewport-transform equivalence: PASS;
- defs/marker and geometry/text attribute checks: PASS;
- neutral conditional visibility and interaction-only omission checks: PASS.

The representative deterministic fixture exercises multiple Nodes, an ordinary Relation, a parallel Relation, Node labels, Relation labels, and a connector-visible Node-label case. Focused wrapper tests pass `12/12`: determinism, node geometry, relation paths, node label geometry, relation label geometry, connector, ordering, viewport transform, neutral omission, non-mutation, Product classes/CSS provenance, and the independent `APP-RENDER-EQUIVALENCE-v1` proof.

## Non-drift and full validation

The following Product source SHA-256 values were identical before and after the wrapper work:

| File | SHA-256 |
| --- | --- |
| `src/App.tsx` | `F66250C0AA1C3457A560556AC8D6FB9D3081FBEFC80B43B8192F0A25BBBE9688` |
| `src/graph-presentation.ts` | `5C146F76E50C69A0FCDD8F613AD6A89638F81D9F7317D94A84B05A698EECB455` |
| `src/viewport.ts` | `53168CEFA585AFD6C850BD859943AF66E035765AAA552E079B73005177E93D3F` |
| `src/auto-layout.ts` | `257B483A9703A15620FF64D97C485D5FE4EF586489BB9EEB6018E4167733E385` |
| `src/main.tsx` | `D9F21D1B6A6ED7B7633A3D5EF59CBDC19BBC499DFBA5C1A2CFAF24B68D2E7061` |
| `src/styles.css` | `AA28A84F31EDE2BAE6029180EED000072121BF4ED4EAB5462A5B92DD82C5E434` |
| `index.html` | `E4717DE7AFEB5B1E96E90BAE834C800433A1C07DC392A0AB5208ECB11FE25605` |

Product non-drift evidence remained exact: graph-presentation 22/22, routing 9/9 and 16/16, labels 8/8 and 16/16, auto-layout 38/38 with the v2 SHA, reversal solve/settle 16/16 for both Relation and Node, fresh replay PASS, and no mutation PASS. The full Product suite passed `309/309`; lint, build, and `git diff --check` passed. A standalone raw `tsc` invocation was inapplicable under the existing repository configuration because of existing missing Node/CSS/module declarations; the Vite SSR load used by the focused wrapper test compiled and executed the wrapper successfully, and normal lint and build passed.

Preliminary reachability checks found no wrapper reference from normal `src/main.tsx`, no wrapper reference from `src/App.tsx`, and no Product source import of `experimental/`. This is not the final Implementation1G reachability proof.

Candidate awareness: `NO`. Materializer import: `NO`; materializer execution: `NO`. Candidate execution: `NO`. TA0/TA2/TA3/FP1: not executed. V0/V1/V2/V3: `NONE`. Browser execution: `NO`; screenshot: `NO`; E-VISUAL: `NO`; PR-3: `NO`.

## Candidate and protected repository state

Only these two evaluation/test files are in the 1F candidate diff:

- `experimental/product-evaluation-seam/render-wrapper1/render-wrapper.tsx`
- `experimental/product-evaluation-seam/render-wrapper1/render-wrapper.test.ts`

The bounded local candidate commit is `60373836bc1ccea56151593afc22a9b8f324d0a3`, subject `test: add LiaisonScape evaluation render wrapper`, parent `c7e7745ad883f8434f56dd62e5b933aafabf548d`. Candidate status is `IMPLEMENTATION1F CANDIDATE`, local and unpushed. Normal Product render component extracted: `NO`; Product candidate integration: `NO`; candidate selected: `NO`.

Live Production was not modified. Its accepted HEAD remains `c7e7745ad883f8434f56dd62e5b933aafabf548d`; only the protected dirty sample files remain dirty, with unchanged hashes:

- `public/lighthouse-restoration-demo.en.e2r.json`: `19B6362468CF51E32FA9DEA016BC4211D8055C299E28D0CC402BC63B5A5B31D1`;
- `public/lighthouse-restoration-demo.ja.e2r.json`: `C4604679A8D730705E33E51F06BAED46E37BD571C30595145D1938CD3E9B4EFA`.

The baseline2 clone remains clean at `324193eda5924d2c5f5d0e0cad8a92b64d2ea6a8`. The 1E clone remains clean at `dd8ea0c917eae78399411b10ad3beeec705f706d`; 1D remains clean at `63753950e4f1b004ba22d7bdc39e4732b218d53f`; 1C remains clean at `bb4f603c5e47a9bf890e834f7abd86acbbbb5cef`; 1B remains clean at `a5bc4b5f13731a6e29acab9cd941e014d7a603c0`; W-C remains detached/clean at `d7271f5bc2c56d6ae7d46992140dc9cc165ecfee`; and the retained materializer remains detached at `fd563340625fd3d88dc25baedc93c4f8fe69e5e7` with its pre-existing `experimental/` preserved. Temporary characterization2 files were removed from the 1F clone after testing.

The protected `sessions/E2R-Session-0052.md` was not modified. Its preserved SHA-256 is `A94331D5B9444035A84684A64E5E935D3D11777D6ACBC71A0743BD170D2DD162`. The pre-existing dirty browser-diagnostic playbook in `ai-knowledge` was preserved; no Knowledge Candidate entry was added. The sample integer-coordinate follow-up remains unchanged.

## Case and next prerequisite

This is `CASE 1 / Decision A`:

`P-A EVALUATION-ONLY RENDER WRAPPER CANDIDATE VALIDATED; NORMAL PRODUCT RENDER ARCHITECTURE UNCHANGED; NEUTRAL APP GRAPH MARKUP/CSS CONTRACT PRESERVED STRUCTURALLY; NO BROWSER VISUAL CLAIM MADE.`

Implementation1G is `NOT STARTED`. The exact smallest next prerequisite is `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-IMPLEMENTATION1F-ADOPTION1`, `NOT STARTED`. This checkpoint stops here and does not start that adoption checkpoint.

Push, tag, release, deploy, and publication: `NONE`.
