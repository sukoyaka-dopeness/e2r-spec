# E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-IMPLEMENTATION1F-ADOPTION1-RETRY1

Date: 2026-09-03
Status: `ADOPTED`
Case: `CASE 1`
Decision: `Decision A`

## Outcome

Implementation1F Adoption1-Retry1 succeeded after the CSS provenance
reconciliation. The exact two-file F-RETRY-A transfer was completed and
committed in Live. The new Live repository/evaluation-seam authority is
`bce55702cf79ce0047627125fe759893ffd6fc15`
(`test: adopt evaluation render wrapper`), parent
`c7e7745ad883f8434f56dd62e5b933aafabf548d`.

The repository HEAD advanced only for isolated evaluation infrastructure.
Normal Product runtime source remains byte-identical to
`c7e7745ad883f8434f56dd62e5b933aafabf548d`. No App, Product presentation,
CSS, Dataset, routing, label, viewport, or interaction behavior changed.

## Authorities and transfer

The pre-adoption Live HEAD was exactly `c7e7745ad883f8434f56dd62e5b933aafabf548d`.
The protected dirty samples were unchanged:

- EN: `19B6362468CF51E32FA9DEA016BC4211D8055C299E28D0CC402BC63B5A5B31D1`;
- JA: `C4604679A8D730705E33E51F06BAED46E37BD571C30595145D1938CD3E9B4EFA`.

The blocked-Adoption1 untracked wrapper provenance was verified:
`render-wrapper.tsx BF77F554FF5DB711E2BAF6A8C9DE72C1395D1F21F434A2B5995B10E44BC728E1`
and `render-wrapper.test.ts A2B6727E88BC920496D0FF9F9292535E9F11E7749E2BEAC3C0544DA3FC092B83`.

Original 1F validation provenance is
`60373836bc1ccea56151593afc22a9b8f324d0a3`, parent c7e7745, with exactly
the two wrapper files. CSS reconciliation provenance is
`0af4437c469bdee2f5636a87e6b5489a1f53c60b`, parent 60373836, changing only
the wrapper test. The final transfer policy was `F-RETRY-A`: the existing
Live `render-wrapper.tsx` was proven equal to reconciliation HEAD and left
byte-untouched; only the old untracked test was replaced from reconciliation
HEAD.

Final Live Git blobs are:

- wrapper implementation: `723b8cefb09386ad8c7f6a72ed54f002708692a0`;
- wrapper test: `c2b6ce2dbad13000105b09ab49a76505fa624d6f`.

The final Live raw SHA-256 values are:

- `render-wrapper.tsx`: `BF77F554FF5DB711E2BAF6A8C9DE72C1395D1F21F434A2B5995B10E44BC728E1`;
- `render-wrapper.test.ts`: `63FE8A3D178629D5C49C33B173ED40FA2EFC7736A0A75265B1C43BF3460E75F7`.

Both final Git blobs equal the reconciliation HEAD versions. The two paths are
now tracked and clean; protected samples remain the only Live dirty files.

## CSS provenance and render contracts

`PRODUCT-CSS-PROVENANCE-v1` is confirmed. Product CSS authority is
`src/styles.css`, with committed blob
`ae41e48b34d72067d92517a5d42a57a4cc1d409f`. Live CSS remains LF-materialized;
its raw SHA is diagnostic
`9955A690FDC38064309F1391BA62FA5D5F044B677ED44799555FAB583F6490BF`, which
also equals the canonical digest after CRLF/lone-CR to LF normalization.
CSS policy C-A remains direct import of `../../../src/styles.css`. Product CSS
was not modified, normalized, copied, or given a second authority.

F-R11 and F-R13 pass in the actual Live LF checkout. The corrected wrapper suite
passes 13/13. F-R13 proves LF/CRLF canonical equivalence and rejects a
non-EOL content mutation. `APP-RENDER-EQUIVALENCE-v1` passes with M-A:
Node, Relation, Node-label, Relation-label, connector, ordering, classes,
viewBox, transform, defs/marker, neutral visibility, and interaction omission
all pass. `VSR-RENDER-PROJECTION-v1` remains unchanged. The wrapper derives
geometry: NO; it owns App/manual state: NO.

Preliminary runtime isolation passes: normal `main.tsx`, `App.tsx`, and
normal Product source do not import or reach `render-wrapper1`. This is not
the final Implementation1G closure.

## Product validation and non-drift

Focused graph-presentation tests pass 22/22. Pure routing is 9/9 exact; App
routing 16/16; pure labels 8/8; App labels 16/16; auto-layout 38/38 exact.
The unchanged v2 SHA is
`F18C4C98607B9412BD6C035803002BE1DFEE1F2AF721942C8D8FF69A5496795B`.
Relation and Node reversal solve/settle remain 16/16 each; fresh-process and
no-mutation remain PASS. Baseline2 characterization passes 4/4 and replay
produces 38 cases with the same SHA.

Product tests pass 309/309; lint, build, and diff-check pass. Product source
hashes remain unchanged:

- `src/App.tsx`: `F66250C0AA1C3457A560556AC8D6FB9D3081FBEFC80B43B8192F0A25BBBE9688`;
- `src/graph-presentation.ts`: `5C146F76E50C69A0FCDD8F613AD6A89638F81D9F7317D94A84B05A698EECB455`;
- `src/viewport.ts`: `53168CEFA585AFD6C850BD859943AF66E035765AAA552E079B73005177E93D3F`;
- `src/auto-layout.ts`: `257B483A9703A15620FF64D97C485D5FE4EF586489BB9EEB6018E4167733E385`;
- `src/main.tsx`: `D9F21D1B6A6ED7B7633A3D5EF59CBDC19BBC499DFBA5C1A2CFAF24B68D2E7061`;
- `src/styles.css`: committed blob unchanged;
- `index.html`: `E4717DE7AFEB5B1E96E90BAE834C800433A1C07DC392A0AB5208ECB11FE25605`.

No browser, CDP, screenshot, pixel comparison, human visual acceptance,
E-VISUAL, candidate execution, materializer import/execution, TA0/TA2/TA3/FP1,
or V0/V1/V2/V3 work occurred. Baseline-v2 is unchanged, baseline-v3 was not
created, and PR-3 remains NO.

## Authority chain and next boundary

The new accepted Product/evaluation/presentation-seam repository authority is
`bce55702cf79ce0047627125fe759893ffd6fc15`. The normal Product runtime
source remains byte-identical to c7e7745. The original 1F and reconciliation
commits remain provenance ancestors, not Live runtime authorities. Candidate
selected: NO; Product candidate integration: NO.

Implementation1G is technically eligible: YES, but remains NOT STARTED.
The exact next prerequisite is
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-IMPLEMENTATION1G`,
NOT STARTED. This checkpoint does not start it.

The Session-0052 file and pre-existing ai-knowledge browser-diagnostic change
were preserved. No Knowledge Candidate entry was added. Baseline2, 1E, 1D,
1C, 1B, W-C, and materializer remain unchanged. Push, tag, release, deploy,
and publication: NONE.
