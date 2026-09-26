# E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-IMPLEMENTATION1G-ADOPTION1

Date: 2026-09-03

Status: `ADOPTED`

Case: `CASE 1`

Decision: `Decision A`

## Outcome

The validated Implementation1G evaluation-browser infrastructure was adopted
into Live using transfer policy G-A. Exactly the four files from candidate
`ff7c399c006ae841aa7ee811e46313f2ebb0dfe4` were transferred and committed in
Live as `563d5bc3ce8d3a915c75dd13b33188ae6f7fccaf`,
`test: adopt isolated evaluation browser entry`. Its parent is the exact
pre-adoption authority `bce55702cf79ce0047627125fe759893ffd6fc15`.

The new current accepted Product/evaluation/presentation-seam repository
authority is `563d5bc3ce8d3a915c75dd13b33188ae6f7fccaf`. The HEAD advanced only
because isolated evaluation/browser infrastructure was committed. Normal
Product runtime source remains unchanged and isolated.

This checkpoint does not execute candidates or materializer code and does not
provide browser visual evidence.

## Authorities and protected state

Before adoption, Live was exactly at
`bce55702cf79ce0047627125fe759893ffd6fc15`, with only the two protected sample
files dirty. Their post-adoption hashes remain:

- EN: `19B6362468CF51E32FA9DEA016BC4211D8055C299E28D0CC402BC63B5A5B31D1`;
- JA: `C4604679A8D730705E33E51F06BAED46E37BD571C30595145D1938CD3E9B4EFA`.

The verified 1G candidate was
`C:\Users\extra\E2R\e2r-liaison-scape-product-evaluation-seam-implementation1g`
at `ff7c399c006ae841aa7ee811e46313f2ebb0dfe4`, with parent
`bce55702cf79ce0047627125fe759893ffd6fc15`.

Its exact inventory was:

- `experimental/product-evaluation-seam/browser1/index.html`;
- `experimental/product-evaluation-seam/browser1/main.tsx`;
- `experimental/product-evaluation-seam/browser1/smoke-fixture.ts`;
- `experimental/product-evaluation-seam/browser1/browser-entry.test.ts`.

No other Product, source, config, package, wrapper, materializer, candidate,
or characterization path was transferred. The four candidate/live raw
SHA-256 values and Git blobs were equal:

| Path | Raw SHA-256 | Git blob |
| --- | --- | --- |
| `browser1/index.html` | `AD892D00B2051BCB21AA90BC1AD477CE5366B9EEE6E47C46372310FBDC5B29A2` | `7aa10fda9e006b4472d8c1688d92e16dd8061600` |
| `browser1/main.tsx` | `5E6B1BEC4CDBA1F26B6BF2250061EF448DA98803A39FECBDFEA6A96DC96B9095` | `51315e1e2bbf6cdeaa096f9b5fa4511c1879f732` |
| `browser1/smoke-fixture.ts` | `5F70122C9FE5AF852DE7764C6F26A5BF8D552403C6216386EBB56AC71C2D96D0` | `5a7c1b60438a06d66ba68a35bc17839277c0ffbf` |
| `browser1/browser-entry.test.ts` | `3317546CC7ED6EAAA4AA7698DBF9F0886F29D4603577B4489BDF1B45C2BD5395` | `6fa83e190073f53cda82a418730aaf5d773eaf3e` |

The staged blobs were independently checked against the candidate commit
before adoption. Protected samples were never staged.

## Adopted contracts

`VSR-BROWSER-ENTRY-v1` remains evaluation-only, under `experimental/`,
non-interactive, non-candidate-aware, and non-materializer-aware. The exact
host selector is `#evaluation-root`; the document is a minimal one-root host
with no workspace shell, toolbar, Dataset controls, locale controls, drag UI,
context menu, or normal Product App.

`browser1/main.tsx` imports the accepted
`experimental/product-evaluation-seam/render-wrapper1/render-wrapper.tsx` and
does not copy its markup. The entry consumes the synthetic
`VSR-BROWSER-SMOKE-FIXTURE-v1`, which remains deterministic, already-derived,
neutral, and outside Dataset, candidate, V0/V1/V2/V3, TA0/TA2/TA3, and FP1
evidence. It derives no geometry and has no materializer or candidate path.

`PRODUCT-CSS-PROVENANCE-v1` remains PASS. The sole CSS authority is
`src/styles.css`, with committed Git blob
`ae41e48b34d72067d92517a5d42a57a4cc1d409f` and canonical normalized digest
`9955A690FDC38064309F1391BA62FA5D5F044B677ED44799555FAB583F6490BF` under
policy C-A. Product CSS was not modified, copied, or given a second authority.

## Isolation and build gates

The TypeScript compiler API runtime module-graph proof was rerun after
transfer. It covers ImportDeclaration, non-type-only `export ... from`,
literal dynamic `import()`, and literal `require()` where relevant, resolving
the bounded local source extensions and `index.*`. Type-only imports are
excluded as erased runtime edges.

`PRODUCT-RUNTIME-ISOLATION-v1 = PASS`: normal `src/main.tsx` reaches no
`experimental/product-evaluation-seam/`, `render-wrapper1`, `browser1`, or
browser-entry test path.

`EVALUATION-ENTRY-ISOLATION-v1 = PASS`: evaluation `main.tsx` reaches the
accepted wrapper and reaches neither `App.tsx`, normal `src/main.tsx`,
Dataset/persistence lifecycle, materializer, candidate implementation,
TA/FP1, nor CDP/browser automation.

The focused 1G suite passed 7/7, covering G1-G12. The wrapper suite passed
13/13, so the combined focused browser/wrapper result was 20/20. Focused
graph-presentation, auto-layout, and explicit-seed tests passed 42/42.

H-BUILD-A passed in Live with the existing CLI and no package or normal Vite
config change. The exact command used was:

```text
node node_modules/vite/bin/vite.js build experimental/product-evaluation-seam/browser1 --outDir C:\Users\extra\AppData\Local\Temp\e2r-liaison-scape-1g-adoption1-hbuild-20260903 --emptyOutDir
```

Vite 8.2.1 transformed 17 modules and produced HTML, JS, and CSS assets. The
audited asset SHA-256 values were HTML `B637F994453F64C12DBE7F56BB30063C4824F10A456437261F996244F79DAED9`,
CSS `92BC40EC215EB1DBEEC3BDA6945603B18639C8A8AA5D0BBFD3525716271D0AF1`,
and JS `DBFBE2F7FF5A26B8CAE905B36E73BCF2975E62D2E5EA7D6A9782D4B6790AE36E`.
The output contained the evaluation root and Product CSS, with no App,
normal-main, DatasetService, materializer, candidate, TA/FP1, or CDP
references. The exact temporary directory was removed after audit.

The normal Product build passed, transforming 62 modules and remaining rooted
in `index.html -> src/main.tsx`, not browser1.

## Product non-drift and validation

The following remained unchanged: `src/App.tsx`, `src/main.tsx`,
`src/graph-presentation.ts`, `src/viewport.ts`, `src/auto-layout.ts`,
`src/styles.css`, normal `index.html`, `vite.config.ts`, `package.json`,
`package-lock.json`, and the render-wrapper implementation.

Behavioral evidence remains exact: graph-presentation 22/22, pure routing
9/9, App routing 16/16, pure labels 8/8, App labels 16/16, auto-layout 38/38,
Relation reversal solve/settle 16/16 each, Node reversal solve/settle 16/16
each, fresh-process PASS, no-mutation PASS, and unchanged v2 SHA
`F18C4C98607B9412BD6C035803002BE1DFEE1F2AF721942C8D8FF69A5496795B`.

The baseline2 characterization/replay passed 4/4. The full Product suite
passed 309/309; lint, normal build, and `git diff --check` passed.

## Sequence status and boundary

The accepted Product Evaluation Seam Design1 sequence is now:

| Step | Status |
| --- | --- |
| 1B | ADOPTED |
| 1C | ADOPTED |
| 1D | ADOPTED |
| 1E | ADOPTED |
| 1F | ADOPTED |
| 1G | ADOPTED |

Therefore `PRODUCT EVALUATION SEAM IMPLEMENTATION SEQUENCE = COMPLETE`.
This does not mean PR-3, E-VISUAL, candidate evidence, or browser evidence is
complete. The Harness Design1 document's deferred next prerequisite is the
separately authorized full checkpoint:

`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-HARNESS-IMPLEMENTATION1`

It is `NOT STARTED`; this checkpoint does not begin it.

Browser launch, dev-server visual review, Edge, Chrome, CDP, screenshot, PNG,
pixel comparison, human visual review, and E-VISUAL are all `NO`. Candidate
execution, materializer import/execution, TA0/TA2/TA3/FP1, and V0/V1/V2/V3
are `NOT EXECUTED`/`NONE`. Candidate selected: `NO`. Product candidate
integration: `NO`. PR-3: `NO`.

No new Knowledge Candidate entry was created. The Session-0052 file and
pre-existing ai-knowledge browser-diagnostic modification were preserved.
Original 1F, CSS reconciliation, baseline2, 1E, 1D, 1C, 1B, W-C, and retained
materializer provenance were not modified; the materializer's pre-existing
untracked `experimental/` state remains preserved.

No push, tag, release, deploy, or publication occurred.
