# E2R-Session-0052 — Initial Placement Research Handoff

Date: 2026-09-14

This supplemental session record summarizes the completed LiaisonScape Initial
Placement research chain and the chat-room migration handoff. The original
session log remains unchanged by this record; unrelated worktree changes remain
untouched.

## Research state

Active track: **Structural Placement / Angular Ordering / Initial Node
Placement**. Parallel / Incident Architecture is closed at its architecture
boundary; Parallel presentation quality and Self-loop / Ordinary Edge
Interaction remain separate tracks.

Completed placement checkpoints:

- General Crossing-Aware Placement 1 — `RETUNE / NOT READY FOR HUMAN REVIEW`;
- Joint-Constrained Crossing-Aware Placement 2 — `PIVOT / NOT READY FOR HUMAN
  REVIEW`;
- Discrete Feasibility-First Structural Placement 1 — `PIVOT / NOT READY FOR
  HUMAN REVIEW`.

The evidence chain showed that topology-aware continuous placement can reduce
dense crossings but harms screen-space/label clearance, while guarded grids
restore separation and fit but lose dense crossing quality. Joint projection
did not make both properties coexist. The first discrete cell/sector/corridor
assignment remained small on sparse canonical cases (below 175 states per
family), but Titanic reached the 25,000-state cap for some families and every
dense control reached the cap with no feasible plan. Cheap angular/corridor
proxies also showed authoritative false-safe cases.

Current state:

- Product default/adoption: `HOLD`;
- production provider: `NOT ESTABLISHED`;
- Initial Layout Release blocker: `OPEN`;
- Human Review for the current discrete arm: `NOT READY`.

Next research hypothesis: `narrow graph decomposition + explicit capacity
contract`. If that cannot keep the state space small, evaluate the
responsibility split `Fast Initial Placement + explicit High-quality Auto
Layout`. `Organic Relationship-Shaped Placement` is recorded as a future
hypothesis; grid/ring/cell/sector structures may be internal scaffolds but must
not dictate final geometry.

## Responsibility and safety boundaries

Initial Placement owns only derived Node geometry and bounded placement
candidates. Product routing, ordinary and Parallel routing, endpoint planning,
Relation-label placement, Self-loop routing, glyph/CSS rendering, persistence,
coordinate authority, manual placement/curvature/labels, and final presentation
remain their existing authorities.

No Product default, provider, Dataset, coordinate authority, persistence,
dirty-state, Save Coordinates, routing, Relation-label, Parallel, Self-loop,
manual placement, or Human Review status was changed. Existing G3 and
Frontier-12 Human evidence remains scoped to those historical arms.

## Migration handoff

The detailed handoff and local-only source manifest are recorded in:

- `docs/liaisonscape-initial-placement-chatroom-handoff.md`;
- `docs/liaisonscape-general-crossing-aware-placement1-result.md`;
- `docs/liaisonscape-joint-constrained-crossing-aware-placement2-result.md`;
- `docs/liaisonscape-discrete-feasibility-first-placement1-result.md`;
- `docs/roadmap.md`.

Important LiaisonScape sources include:

- `tools/structural-formulation*.mjs` and their audit scripts;
- `tools/discrete-placement-feasibility*.mjs`;
- `experimental/structural-formulation1/`;
- `experimental/structural-formulation2/`;
- `experimental/structural-formulation3/`;
- `experimental/discrete-placement-feasibility/`;
- `tools/generic-crossing-search.mjs`;
- `tests/structural-formulation.test.ts`.

## Validation and Git state

Latest validation baseline:

- LiaisonScape: `414/414 PASS`;
- lint: `PASS`;
- production build: `PASS`;
- E2R-SPEC `npm run validate`: `PASS`;
- diff checks: `PASS`.

Relevant current commits:

- LiaisonScape `b3b9af8 research: audit discrete placement feasibility`;
- E2R-SPEC `f5d4de9 docs: prepare initial placement chat handoff`;
- preceding E2R-SPEC evidence commit `10e17ec`.

All commits remain local and unpushed. At handoff, LiaisonScape is on `main`,
161 commits ahead of `origin/main`; E2R-SPEC is on `main`, 166 commits ahead of
`origin/main`; e2r-ai-knowledge is unchanged for this task.

Unrelated dirty work was preserved:

- LiaisonScape: `tests/graph-presentation.test.ts` marker and untracked
  `experimental/product-evaluation-seam/spacing-inspection2/`;
- E2R-SPEC: existing `sessions/E2R-Session-0052.md` marker and untracked
  `work/`;
- e2r-ai-knowledge: existing playbook marker.

No cleanup, reset, stash, amend, rebase, push, tag, release, deploy, or
publication was performed.

`SESSION LOG UPDATED - INITIAL PLACEMENT RESEARCH CHAIN AND CHAT-ROOM HANDOFF RECORDED`
