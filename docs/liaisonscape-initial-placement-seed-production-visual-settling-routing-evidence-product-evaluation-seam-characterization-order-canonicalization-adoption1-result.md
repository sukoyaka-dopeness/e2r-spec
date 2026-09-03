ORDER-CANONICALIZATION PRODUCT CORRECTION ADOPTION ONLY

NO BASELINE-V2 GENERATION
NO IMPLEMENTATION1B
NO MATERIALIZER UPDATE
NO SAMPLE MODIFICATION
NO ROUNDING
NO TOLERANCE
NO PR-3 CLAIM
NO PUSH
NO TAG
NO RELEASE
NO DEPLOY
NO PUBLICATION

# LiaisonScape Product Evaluation Seam Characterization Order Canonicalization Adoption1

## Checkpoint

- Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-CHARACTERIZATION-ORDER-CANONICALIZATION-ADOPTION1`
- Date: 2026-09-03
- Status: COMPLETE - CORRECTION ADOPTED; NEW PRODUCT AUTHORITY FROZEN
- CASE: 1
- Decision: A
- WHY: the accepted authority resolution classified Relation collection order as non-semantic, while the accepted Product implementation exposed it through floating-point neighbor accumulation. The validated W-C correction removes that incidental order sensitivity at the Product seam.

The adoption outcome is:

`CANONICAL NEIGHBOR-ORDER CORRECTION ADOPTED; NEW PRODUCT SOURCE AUTHORITY FROZEN; HISTORICAL fd563340 AUTHORITY AND BASELINE-v1 PRESERVED; IMPLEMENTATION1B REMAINS BLOCKED; PROCEED ONLY TO POST-CORRECTION CHARACTERIZATION-v2.`

## Authority inputs and boundary

The authority input is the Order Conflict Resolution1 result, recorded by
e2r-spec commit `47742144b868170dda98a7314df037784f61c1de`. It selected CASE 2
/ Decision B, with `RELATION-ORDER-SEMANTICS = NON-SEMANTIC` and the C-C
canonical-neighbor correction as the next bounded action.

This checkpoint adopts only the already validated correction into live
Production. It does not generate baseline-v2, extract settling, change routing
or labels, modify the materializer, refresh samples, or authorize
Implementation1B.

## Source authorities and transfer

Historical accepted Product authority before adoption:

- Commit: `fd563340625fd3d88dc25baedc93c4f8fe69e5e7`
- Subject: `feat: improve coordinate-less initial placement`
- Role: HISTORICAL PRE-ORDER-CORRECTION PRODUCT AUTHORITY; baseline-v1 retained.

The W-C correction candidate was verified at:

- Commit: `d7271f5bc2c56d6ae7d46992140dc9cc165ecfee`
- Subject: `fix: canonicalize LiaisonScape layout neighbor order`
- Parent: `8b366a05cbf64ec9a1b39ef865cd7dbf09e721a2`
- Candidate paths: `src/auto-layout.ts`, `tests/auto-layout.test.ts`.

The live Production pre-adoption HEAD was exactly `fd563340625fd3d88dc25baedc93c4f8fe69e5e7`.
The candidate transfer reproduced the two W-C file contents in live
Production using the exact source/test patch, followed by byte-level equality
checks. No other Product source or test file changed.

| Path | W-C/live SHA-256 after transfer | Byte equality |
| --- | --- | --- |
| `src/auto-layout.ts` | `883C782AA23FADEFE8242C3BC4091FCF3E7C8882FF847A45063E59BB9F776AB8` | PASS |
| `tests/auto-layout.test.ts` | `3F92F3D323B669B1A059151B9B24558743064F4B5DC77EC0975367459B007BCC` | PASS |

Additional behavior changes: NO. The adopted source uses a shared
locale-independent Unicode code-point comparator and one-time sorted
canonical neighbor arrays for component traversal and attraction accumulation.
Duplicate/parallel undirected pairs, self-Relations, invalid endpoints,
component membership, degree values, seeds, iteration constants, force
formula, packing, return shape, and input non-mutation remain unchanged.

## Protected pre-state and post-state

Before adoption, the existing dirty sample files were captured as protected
state:

| Path | Pre-adoption SHA-256 |
| --- | --- |
| `public/lighthouse-restoration-demo.en.e2r.json` | `19B6362468CF51E32FA9DEA016BC4211D8055C299E28D0CC402BC63B5A5B31D1` |
| `public/lighthouse-restoration-demo.ja.e2r.json` | `C4604679A8D730705E33E51F06BAED46E37BD571C30595145D1938CD3E9B4EFA` |

After all Product tests, lint, build, diff checks, and commit, both hashes
remain exactly unchanged. The only remaining live Product dirty paths are
those same two protected sample files.

## Validation

Focused auto-layout tests: 6/6 PASS.

The immutable-manifest fixture replay reported:

| Function | Same ordered input | Relation reversal | Node reversal | No mutation |
| --- | ---: | ---: | ---: | ---: |
| `solveAutoLayout` | 16/16 | 16/16 | 16/16 | 16/16 |
| `settleInitialPlacement` | 16/16 | 16/16 | 16/16 | 16/16 |

The focused coverage includes non-ASCII IDs and deterministic Unicode
code-point order, plus self, parallel, duplicate, and invalid endpoint
semantics. Full Product `npm.cmd test`: 283/283 PASS, 0 failures. The run
emitted non-fatal existing WebSocket port-in-use warnings; the process exited
successfully. `npm.cmd run lint`: PASS. `npm.cmd run build`: PASS. Live
`git diff --check`: PASS. The staged Product diff check also passed.

## Adoption commit and retained history

The exact staged audit contained only:

- `src/auto-layout.ts`
- `tests/auto-layout.test.ts`

Product adoption commit:

- Hash: `0937d7768136ff63e74924480551d370b2935c2e`
- Subject: `fix: canonicalize layout neighbor order`
- Parent: `fd563340625fd3d88dc25baedc93c4f8fe69e5e7`
- Status: local and unpushed.

Correction adopted: YES. The new Product commit above is the CURRENT ACCEPTED
PRODUCT SOURCE AUTHORITY for the next post-correction characterization-v2
checkpoint. The historical `fd563340...` authority remains retained, and the
W-C candidate remains retained unchanged at `d7271f5...` after candidate
creation. The materializer remains unchanged at detached historical
`fd563340...`, with its pre-existing `experimental/` untracked directory.

Historical baseline-v1 remains byte-identical. Baseline-v1 was not modified,
and baseline-v2 was not generated. No candidate materialization was performed.

## Explicit exclusions and downstream state

- Implementation1B eligible: NO; it remains blocked until the separate v2 characterization prerequisite.
- PR-3: NO.
- Candidate materialization: NO.
- V0/V1/V2/V3: NONE.
- Candidate selected: NO.
- Product candidate integration: NO. This was correction adoption into live Product, not candidate-family selection or PR-3 integration.
- Sample-coordinate follow-up: unchanged. The existing roadmap note about preferring integer authored Stored Coordinates remains informational and does not authorize sample or runtime changes.
- Knowledge Candidate: `NO / checkpoint-local`; the pre-existing dirty `ai-knowledge/playbooks/e2r-edge-cdp-browser-diagnostic.md` was preserved and no knowledge entry was created or promoted.
- Push/tag/release/deploy/publication: NONE.

## Next prerequisite

The exact next prerequisite is:

`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-CHARACTERIZATION-ORDER-CANONICALIZATION-BASELINE2`

Status: `NOT STARTED`.

It is the only authorized next step: generate post-correction baseline-v2
from the newly frozen Product authority, with baseline-v1 preserved.

## Repository states at completion

- e2r-spec: documentation changes pending validation/commit in this checkpoint.
- Live Production: HEAD `0937d7768136ff63e74924480551d370b2935c2e`; only the two protected Lighthouse sample files remain dirty.
- W-C: detached at `d7271f5bc2c56d6ae7d46992140dc9cc165ecfee`, clean, unchanged after candidate creation.
- Materializer: detached at `fd563340625fd3d88dc25baedc93c4f8fe69e5e7`, unchanged, pre-existing `experimental/` remains untracked.
- ai-knowledge: pre-existing ` M playbooks/e2r-edge-cdp-browser-diagnostic.md` preserved.
