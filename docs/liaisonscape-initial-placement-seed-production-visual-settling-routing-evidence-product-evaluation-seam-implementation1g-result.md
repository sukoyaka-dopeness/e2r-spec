# E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-IMPLEMENTATION1G

Date: 2026-09-03

Status: `IMPLEMENTATION1G CANDIDATE`

Case: `CASE 1`

Decision: `Decision A`

## Outcome

Implementation1G adds and validates a disposable H-B evaluation browser entry
under `experimental/product-evaluation-seam/browser1/`. The entry renders a
small already-derived neutral presentation through the adopted
`render-wrapper1` and is independently buildable with the existing Vite and
React installation.

The candidate commit is `ff7c399c006ae841aa7ee811e46313f2ebb0dfe4`,
`test: add isolated LiaisonScape evaluation browser entry`, with parent
`bce55702cf79ce0047627125fe759893ffd6fc15`. It is local and unpushed. Live
was not adopted or modified.

This checkpoint proves reachability, runtime isolation, and buildability only.
No browser was launched, no dev server was started for review, and no visual
or pixel evidence was produced.

## Authority and reconciliation

The accepted Live Product/evaluation/presentation-seam repository authority
was `bce55702cf79ce0047627125fe759893ffd6fc15` (`test: adopt evaluation render
wrapper`), parent `c7e7745ad883f8434f56dd62e5b933aafabf548d`. The normal Product
runtime remains byte-identical to the earlier Product authority; the advanced
HEAD contains only adopted evaluation infrastructure.

Design1 and Harness Design1 reconcile with this checkpoint: Implementation1G
is the final H-B isolated evaluation/browser entry, reachability proof,
isolation proof, and build proof. It is not browser execution, candidate
execution, materialization, screenshot capture, or E-VISUAL evidence.

The clean clone was created at:

`C:\Users\extra\E2R\e2r-liaison-scape-product-evaluation-seam-implementation1g`

It started at exactly `bce55702cf79ce0047627125fe759893ffd6fc15`, without Live
working-tree bytes. Its initial tracked worktree was clean, the adopted
`render-wrapper1` was already tracked, and no `characterization2` directory
was copied into it.

The protected Live state remained HEAD `bce55702cf79ce0047627125fe759893ffd6fc15`
with only the EN and JA sample files dirty. Their protected SHA-256 values
remain EN `19B6362468CF51E32FA9DEA016BC4211D8055C299E28D0CC402BC63B5A5B31D1`
and JA `C4604679A8D730705E33E51F06BAED46E37BD571C30595145D1938CD3E9B4EFA`.

## Pre-edit gate

The clean authority clone reproduced the accepted pre-edit state. The wrapper
suite passed 13/13, including `APP-RENDER-EQUIVALENCE-v1` and
`PRODUCT-CSS-PROVENANCE-v1`. Focused graph-presentation tests passed 22/22.
The accepted characterization-v2 replay passed 4/4 and its 38-case exact
replay remained unchanged at:

`F18C4C98607B9412BD6C035803002BE1DFEE1F2AF721942C8D8FF69A5496795B`

The pre-edit behavioral evidence remained pure routing 9/9 exact, App routing
16/16 exact, pure labels 8/8 exact, App labels 16/16 exact, and auto-layout
38/38 exact. Relation reversal solve/settle and Node reversal solve/settle
remained 16/16 each; fresh-process replay and no-mutation checks passed.
The focused auto-layout test file passed 10/10, the explicit-seed adapter
test passed 10/10, and the full Product suite passed 309/309 before editing.

## Entry architecture audit

| Concern | Finding |
| --- | --- |
| normal HTML entry | `index.html` -> `/src/main.tsx` |
| normal runtime entry | `src/main.tsx` -> `src/App.tsx` and `src/styles.css` |
| Vite config | `vite.config.ts`, unchanged; normal base `/e2r-liaison-scape/` |
| scripts | `dev`, `build`, `test`, `lint`, and `preview` audited |
| dependencies | existing React 19, ReactDOM 19, Vite 8.2.1, TypeScript 6.0.2, and React Vite plugin available |
| wrapper dependencies | accepted wrapper, React element types, Product presentation/viewport types, and direct Product CSS import |
| normal experimental reachability | none, established by the AST runtime graph walk |
| experimental convention | existing seam directories contain explicit-seed and render-wrapper infrastructure; `browser1` is additive and evaluation-only |
| ignored output | `node_modules/` and `dist/` are ignored by `.gitignore` |
| separate root | existing Vite CLI built `browser1` without a package, dependency, or normal-config change |

## Frozen contracts

`VSR-BROWSER-ENTRY-v1` is frozen as an evaluation-only, non-interactive,
non-candidate-aware, non-materializer browser document under
`experimental/`. It is not a second Product App, Dataset editor, or normal
workspace shell.

The selected path is:

- `experimental/product-evaluation-seam/browser1/index.html`;
- `experimental/product-evaluation-seam/browser1/main.tsx`;
- `experimental/product-evaluation-seam/browser1/smoke-fixture.ts`;
- `experimental/product-evaluation-seam/browser1/browser-entry.test.ts`.

The exact host selector is `#evaluation-root`. The document has one body root,
no toolbar, picker, editor controls, locale controls, context menu, drag
handles, or workspace shell. The SVG remains owned by the accepted wrapper
with viewBox `0 0 800 500`. Later capture assumptions remain 1280x900 CSS px,
DSF 1, and zoom 100%; no browser was launched here and no browser size was
hard-coded into Product geometry.

`VSR-BROWSER-SMOKE-FIXTURE-v1` contains two Nodes, one ordinary Relation, a
Relation label, Node labels, one connector-visible Node label, one arrowhead,
and the final viewport transform. It is synthetic, deterministic,
already-derived presentation data. It is not Product Dataset evidence, a
candidate, V0/V1/V2/V3, or PR-3 evidence, and it uses none of TA0, TA2, TA3,
or FP1.

`main.tsx` imports and renders the adopted
`../render-wrapper1/render-wrapper.tsx`; it does not copy or fork wrapper JSX.
The browser entry does not call or duplicate any geometry, placement, routing,
label, settling, materializer, candidate, or automation algorithm.

## CSS and source non-drift

CSS policy C-A remains in force. The wrapper directly imports the sole Product
CSS authority `src/styles.css`; no browser CSS was added and the wrapper was
not modified. `PRODUCT-CSS-PROVENANCE-v1` passed using committed Git blob
`ae41e48b34d72067d92517a5d42a57a4cc1d409f` and canonical LF-normalized digest
`9955A690FDC38064309F1391BA62FA5D5F044B677ED44799555FAB583F6490BF`.
The clean clone's CRLF materialization is an EOL checkout property, not a CSS
content change.

The following Product files remained unchanged against the committed authority:
`src/App.tsx`, `src/main.tsx`, `src/graph-presentation.ts`, `src/viewport.ts`,
`src/auto-layout.ts`, `src/styles.css`, `index.html`, `vite.config.ts`,
`package.json`, and `package-lock.json`. No normal Product entry, App, route,
label, layout, viewport, CSS, package, or normal Vite config path changed.

## H-B build proof

The selected strategy is `H-BUILD-A`: direct use of the installed Vite CLI
with `browser1` as a separate root. The exact successful command was:

```text
node node_modules/vite/bin/vite.js build experimental/product-evaluation-seam/browser1 --outDir C:\Users\extra\AppData\Local\Temp\e2r-liaison-scape-1g-hbuild-20260903 --emptyOutDir
```

Vite 8.2.1 transformed 17 modules and produced `index.html`, one JS asset
(193.33 kB), and one CSS asset (17.34 kB). The output HTML referenced the
evaluation root and the generated CSS/JS, and the CSS asset came from the
accepted Product CSS import. A repeated build in the separately named
`...-hbuild-20260903-repeat` directory also succeeded and produced matching JS
bytes. The output audit found no `App.tsx`, normal `src/main.tsx`,
`DatasetService`, materializer, candidate, TA, FP1, or CDP references. Both
exact temporary output directories were removed after audit; no generated H-B
output is tracked or remains in the candidate clone.

The normal Product command `npm.cmd run build` also passed, transforming 62
modules. The normal build remained rooted in normal `index.html` and
`src/main.tsx`; this is source/build isolation evidence, not runtime pixel or
browser isolation evidence.

## Reachability and isolation proof

`browser-entry.test.ts` uses the repository-installed TypeScript compiler API
to parse each local source module. The bounded runtime graph walk covers
`ImportDeclaration`, non-type-only `export ... from`, literal dynamic
`import()`, and literal `require()`; it resolves local `.ts`, `.tsx`, `.js`,
`.jsx`, `.mjs`, and `index.*` forms. Type-only imports are excluded because
TypeScript/Vite erase them from the runtime graph. No parser dependency was
added.

The focused 1G test file has 7 test cases covering G1-G12:

| Tests | Result |
| --- | --- |
| G1/G2/G3 normal graph cannot reach experimental, wrapper, or browser1 | PASS |
| G4 evaluation entry reaches render-wrapper1 | PASS |
| G5/G6/G7 evaluation graph excludes App, materializer, and candidate code | PASS |
| G8 expected `#evaluation-root` host | PASS |
| G9/G10 neutral fixture and no geometry derivation | PASS |
| G11 CSS provenance | PASS |
| G12 deterministic source and repeated-build support | PASS |

The resulting contracts are frozen as:

- `PRODUCT-RUNTIME-ISOLATION-v1 = PASS`: normal Product entry/source graph
  does not reach `experimental/product-evaluation-seam/`, `render-wrapper1`,
  or `browser1` under the bounded supported import forms;
- `EVALUATION-ENTRY-ISOLATION-v1 = PASS`: evaluation `main.tsx` reaches the
  adopted wrapper and does not reach `App.tsx`, normal `main.tsx`,
  DatasetService, persistence lifecycle, materializer, candidate code,
  TA/FP1, or CDP automation;
- `H-B-BUILD-v1 = PASS`: the evaluation entry independently builds with
  existing dependencies and without the normal App entry.

## Product validation

After implementation, the focused browser-entry and wrapper suites passed
20/20 (G1-G12 represented by 7 cases plus F-R1-F-R13). Focused
graph-presentation, auto-layout, and explicit-seed tests passed 42/42. The
baseline2 characterization suite passed 4/4 again. The full Product suite
passed 309/309, `npm.cmd run lint` passed, `npm.cmd run build` passed, and
`git diff --check` passed. The accepted behavioral evidence remains:

- graph-presentation: 22/22;
- pure routing: 9/9 exact; App routing: 16/16 exact;
- pure labels: 8/8 exact; App labels: 16/16 exact;
- auto-layout: 38/38 exact with the unchanged v2 SHA above;
- Relation reversal solve/settle: 16/16 each;
- Node reversal solve/settle: 16/16 each;
- fresh-process replay: PASS;
- no mutation: PASS;
- wrapper: 13/13;
- `APP-RENDER-EQUIVALENCE-v1`: PASS;
- `VSR-RENDER-PROJECTION-v1`: unchanged;
- `PRODUCT-CSS-PROVENANCE-v1`: PASS.

## Boundary and provenance status

Browser execution: `NO`. Dev-server visual review: `NO`. Edge: `NO`. Chrome:
`NO`. CDP: `NO`. Screenshot/PNG/pixel comparison/human visual acceptance:
`NO`. E-VISUAL: `NO`. Materializer import: `NO`. Materializer execution:
`NO`. Candidate execution: `NO`. V0/V1/V2/V3: `NONE`. PR-3: `NO`. No
candidate was selected, no Product candidate integration occurred, and no
baseline-v2 or baseline-v3 bytes changed.

The candidate source diff is exactly the four files under
`experimental/product-evaluation-seam/browser1/` listed above. No package,
lockfile, normal config, normal entry, Product source, CSS, wrapper, or
materializer path is in the commit.

The original 1F commit remains `60373836bc1ccea56151593afc22a9b8f324d0a3`;
CSS reconciliation remains `0af4437c469bdee2f5636a87e6b5489a1f53c60b`;
baseline2 remains `324193eda5924d2c5f5d0e0cad8a92b64d2ea6a8`; 1E, 1D, 1C, 1B,
W-C, and the retained materializer provenance remain unchanged. The retained
materializer still has its pre-existing untracked `experimental/` state.
The pre-existing `ai-knowledge` browser-diagnostic modification was preserved.
`sessions/E2R-Session-0052.md` was not modified.

No Knowledge Candidate entry was created. This is an implementation candidate,
not an adopted Product capability.

## Decision and next prerequisite

CASE 1 / Decision A:

`IMPLEMENTATION1G REACHABILITY / ISOLATION / BUILD CANDIDATE VALIDATED;
H-B EVALUATION ENTRY IS INDEPENDENTLY BUILDABLE; NORMAL PRODUCT RUNTIME
CANNOT REACH THE EVALUATION SEAM; EVALUATION ENTRY REACHES THE ACCEPTED
WRAPPER WITHOUT REACHING APP/CANDIDATE/MATERIALIZER; NO BROWSER VISUAL CLAIM
MADE.`

The exact next prerequisite is
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-IMPLEMENTATION1G-ADOPTION1`,
`NOT STARTED`. This checkpoint stops here. It does not adopt 1G into Live and
does not start the next checkpoint.

Push, tag, release, deploy, and publication: `NONE`.
