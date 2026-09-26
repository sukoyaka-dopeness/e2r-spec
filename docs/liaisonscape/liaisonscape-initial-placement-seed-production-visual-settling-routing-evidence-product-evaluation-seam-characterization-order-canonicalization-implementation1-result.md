ORDER-CANONICALIZATION PRODUCT CORRECTION ONLY

NO SETTLING KERNEL EXTRACTION
NO IMPLEMENTATION1B
NO EXPLICIT-SEED API
NO VSR-SEED-ADAPTER
NO ROUTING REFACTOR
NO LABEL REFACTOR
NO APP REFACTOR
NO HARNESS IMPLEMENTATION
NO CANDIDATE MATERIALIZATION
NO V0/V1/V2/V3
NO SCREENSHOT
NO BROWSER REVIEW
NO CANDIDATE COMPARISON
NO CANDIDATE RANKING
NO CANDIDATE SELECTION
NO LIVE PRODUCTION MODIFICATION
NO NEW PRODUCT AUTHORITY DECLARATION
NO BASELINE-V1 REWRITE
NO BASELINE-V2 GENERATION
NO ROUNDING
NO TOLERANCE
NO PR-3 CLAIM

# LiaisonScape Product Evaluation Seam Characterization Order Canonicalization Implementation1

## Checkpoint

- Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-CHARACTERIZATION-ORDER-CANONICALIZATION-IMPLEMENTATION1`
- Date: 2026-09-03
- Status: COMPLETE — CORRECTION CANDIDATE VALIDATED; ADOPTION NOT STARTED
- Authority input: Order Conflict Resolution1 result, e2r-spec commit `47742144b868170dda98a7314df037784f61c1de`
- Historical Product authority: `fd563340625fd3d88dc25baedc93c4f8fe69e5e7`
- W-C starting point: `8b366a05cbf64ec9a1b39ef865cd7dbf09e721a2`
- CASE: 1
- Decision: A

The minimal C-C canonical-neighbor correction was implemented and validated in
the isolated W-C clone only. The correction is a candidate and is not the new
accepted Production authority.

## Pre-fix conflict reproduced

Pre-fix reproduction: YES. Before editing, the accepted W-C source reproduced
both the minimized witness and a realistic Lighthouse fixture witness. The
historical v1 artifact hashes were also verified unchanged before modification.

The minimized graph was:

```text
Nodes: a, b, c, d, e
Relations: bc = b-c, bd = b-d, be = b-e
Order A: [bc, bd, be]
Order B: [bc, be, bd]
```

With three settling iterations, pre-fix `b` was:

```text
Order A: { x: 478.82471232582543, y: 174.82471232582543 }
Order B: { x: 478.8247123258255,  y: 174.82471232582543 }
```

The first difference appeared after relaxation pass 2. For the realistic
`lighthouse-production-committed-en` fixture, pre-fix Relation reversal
produced 5 differing Nodes, including:

```text
archive ordered  { x: 132.37067333205417, y: 16.21487566771983 }
archive reversed { x: 132.3706733320542,  y: 16.214875667719824 }
```

## Correction implemented

Product correction implemented: YES. The exact W-C Product files changed are:

- `src/auto-layout.ts`
- `tests/auto-layout.test.ts`

The source change is limited to the auto-layout solver. It replaces the
locale-dependent `localeCompare` ID comparator with a local deterministic
Unicode code-point lexical comparator and creates `canonicalNeighbors` once,
after unique pair collection. Component discovery and every attraction pass
now iterate those sorted neighbor arrays. No rounding, tolerance, float
normalization, or unrelated cleanup was added.

## Comparator and endpoint canonicalization

Selected C-C confirmed: YES.

The comparator iterates JavaScript strings by Unicode code point, compares code
point values from left to right, and places a shorter prefix first. Well-formed
supplementary-plane characters are compared as one scalar code point. Lone
UTF-16 surrogate code units, if supplied by the current string-based ID
boundary, remain deterministic because iteration exposes their code-unit value.
The comparator is locale-independent: no `localeCompare`, `Intl.Collator`, OS
locale, or default Array.sort ordering is used for this contract.

Endpoint canonicalization changed: YES. The historical `key` helper used
`localeCompare`; it now shares the exact code-point comparator with Entity ID
sorting and neighbor ordering. This was required by the frozen authority
resolution so endpoint ordering, normalized pair keys, and neighbor ordering
have one contract. Relation IDs remain downstream identities and do not enter
the layout pair key.

## Adjacency representation and unchanged semantics

The source retains a temporary `Map<NodeId, Set<NodeId>>` for unique pair
collection and degree values, then derives a one-time
`Map<NodeId, NodeId[]>` whose every sequence is sorted by the shared comparator.
Relation-array insertion order is no longer observable by component traversal
or attraction accumulation.

The following semantics remain unchanged:

- Entity ID deduplication;
- invalid endpoint exclusion;
- self-Relation exclusion;
- parallel and duplicate undirected pair collapse;
- component membership and component discovery;
- degree values and degree ranking;
- deterministic lexical ties under the corrected comparator;
- initial ring seeds, centers, clearance, component gap, iteration counts,
  repulsion, attraction formula, clamp, and packing;
- return shape, failure behavior, and input non-mutation.

No `App.tsx`, routing, label, rendering, Dataset, fixture, or package behavior
was changed.

## Witness and corpus validation

Minimal witness post-fix: exact PASS. All four frozen permutations of the
minimized graph produced one exact coordinate result.

The in-memory characterization replay against immutable fixture bytes reported:

| Function | Same ordered input | Relation reversal | Node reversal | No mutation |
| --- | ---: | ---: | ---: | ---: |
| `solveAutoLayout` | 16/16 | 16/16 | 16/16 | 16/16 |
| `settleInitialPlacement` | 16/16 | 16/16 | 16/16 | 16/16 |

The focused normal Product test now covers the minimized witness, four
Relation permutations on a three-neighbor graph, Unicode IDs (`a`, `aa`, an
accented BMP character, a Japanese character, and a supplementary-plane
character), and duplicate/parallel/self/invalid endpoint semantics: 6/6 PASS.

## Pre-fix versus post-fix case delta

The historical v1 auto-layout artifact was read but not rewritten. An
in-memory post-fix diagnostic comparison covered all 38 v1 auto-layout cases:

- changed: 12;
- unchanged: 26;
- synthetic cases changed: 0;
- maximum absolute coordinate delta: `5.684341886080802e-14`;
- affected cases:
  `ashen-crown-en:solve`, `ashen-crown-ja:solve`, `titanic-en:solve`,
  `titanic-ja:solve`, `regional-care-coordination-en:solve`,
  `regional-care-coordination-ja:solve`,
  `district-solar-cooperatives-en:solve`,
  `district-solar-cooperatives-ja:solve`,
  `regional-emergency-response-en:solve`,
  `regional-emergency-response-en:settle`,
  `regional-emergency-response-ja:solve`,
  `regional-emergency-response-ja:settle`.

Affected fixture variants: Ashen Crown EN/JA, Titanic EN/JA, Regional Care
Coordination EN/JA, District Solar Cooperatives EN/JA, and Regional Emergency
Response EN/JA. Topology changed: NO. Component membership changed: NO.
Node coverage changed: NO. These are intentional numeric differences from
removing non-semantic Relation-array order from the accumulation path; the
post-fix output is not claimed equivalent to every v1 output.

The temporary in-memory post-fix characterization hash was
`558D234B5528590D746D790F0B745DB31426AB795F0AAAC4D9BFA08BE5D40310`.
It is diagnostic only and is not baseline-v2.

## Exact replay and v1 preservation

The existing `replay-auto-layout.ts` logic produced the same 38-case hash on
two fresh processes: `558D234B5528590D746D790F0B745DB31426AB795F0AAAC4D9BFA08BE5D40310`.
Same-input exact replay therefore passes after correction.

Historical v1 artifacts remain byte-identical:

| Artifact | SHA-256 |
| --- | --- |
| `auto-layout-baseline.json` | `B1DE52138AD878DB1A34FFA7823EC0415AF8CB32178D0DB318AF02F4EF9B5E48` |
| `routing-baseline.json` | `9084B156A2D016DD782A0F389A21F7D68B2EBC26ABF0A863EDD780063A796130` |
| `label-baseline.json` | `A90CC0F2ADC205A8D5BFDB376174E1183AC19A02F6EDD03B4016A6EA24661D73` |
| artifact index | `7EE63AE8B8566A6E2B10ED69A1DAC45FD8D8BDF4701CB10EA22E63BCB04A96EA` |
| characterization manifest | `A66596EA42FB92EBA84EEBB91DBDB68B122700E03AB7D0B5CFB20E9740838B11` |

Baseline-v1 artifacts modified: NO. Authoritative baseline-v2 generated: NO.

## Routing, labels, and Product gates

`src/viewport.ts`, `App.tsx`, and relation-label modules are unchanged. No
routing or label baseline was regenerated. Downstream geometry may receive the
small post-fix coordinate changes, but no routing/label semantic regression was
observed and no such algorithm was reopened.

Product validation:

- focused auto-layout tests: 6/6 PASS;
- full `npm.cmd test`: 283/283 PASS;
- `npm.cmd run lint`: PASS;
- `npm.cmd run build`: PASS;
- W-C `git diff --check`: PASS.

The full test run emitted non-fatal existing test-environment WebSocket
port-in-use warnings in several UI tests; all tests passed and the process
exited successfully.

## Correction candidate and authority sequence

W-C correction commit:

- Hash: `d7271f5bc2c56d6ae7d46992140dc9cc165ecfee`;
- Subject: `fix: canonicalize LiaisonScape layout neighbor order`;
- Parent: `8b366a05cbf64ec9a1b39ef865cd7dbf09e721a2`;
- Ancestry: includes `df0fa53f...`, `8b366a0...`, and historical
  `fd563340625fd3d88dc25baedc93c4f8fe69e5e7`;
- Status: `CORRECTION CANDIDATE`, local and unpushed.

Accepted Product authority remains `fd563340...`: YES. The correction commit
is not adopted here. The remaining sequence is explicit adoption, baseline-v2
generation, source-drift/equivalence reconciliation, and only then a separate
Implementation1B authorization. IMPLEMENTATION1B eligible: NO.

The exact smallest next prerequisite is:

`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-CHARACTERIZATION-ORDER-CANONICALIZATION-ADOPTION1`

Status: `NOT STARTED`.

## Sample-coordinate follow-up

Recorded separately in the existing Public Sample Dataset Refresh roadmap
item: when official samples eventually receive authored Stored Coordinates,
prefer integer values where sufficient. This is an authoring convention only;
it is not a Core rule and does not authorize runtime solver, persistence, or
fixture rounding.

## Final checkpoint state

- CASE 1 / Decision A: canonical order correction validated as a candidate.
- PR-3: NO.
- Candidate materialization: NO.
- V0/V1/V2/V3: NONE.
- Candidate selected: NO.
- Product candidate integration: NO.
- Live Production modified: NO.
- W-C Product correction implemented: YES; W-C is the only modified Product
  workspace.
- W-C diagnostic files added: NO.
- Knowledge Candidate: NO / checkpoint-local. This remains repository-scoped
  evidence; no `ai-knowledge` entry was created or promoted.
- Push/tag/release/deploy/publication: NONE.

## Repository states

- e2r-spec result document and roadmap are the only intended e2r-spec changes;
  they remain to be validated and committed after this record is written.
- Live Production remains at `fd563340...` with only the two pre-existing dirty
  Lighthouse sample files.
- W-C is detached at `d7271f5bc2c56d6ae7d46992140dc9cc165ecfee` with a clean
  tracked worktree; Product source diff from historical authority is exactly
  `src/auto-layout.ts` and `tests/auto-layout.test.ts`.
- Retained materializer remains detached at `fd563340...` with its existing
  untracked `experimental/` preserved and untouched.
- `ai-knowledge` retains its pre-existing dirty browser diagnostic playbook
  change untouched.

No Product authority adoption, baseline-v2 generation, settling extraction,
explicit-seed API, harness implementation, candidate execution, screenshot,
browser review, or PR-3 claim occurred.
