# LiaisonScape Initial Placement — Chat-room Handoff

Date: 2026-09-14

This is a local handoff document for the next ChatGPT room. It is not a
session log, a new research checkpoint, or a Product adoption decision.

## Current research state

The active track is **Structural Placement / Angular Ordering / Initial Node
Placement**. Parallel / Incident Architecture is closed at the architecture
boundary, with Product quality follow-up still separate. The latest completed
placement checkpoints are:

1. Parallel / Incident Architecture Closure 1 — `ARCHITECTURE CLOSED / PRODUCT
   QUALITY FOLLOW-UP REMAINS`;
2. General Crossing-Aware Placement 1 — `RETUNE / NOT READY FOR HUMAN REVIEW`;
3. Joint-Constrained Crossing-Aware Placement 2 — `PIVOT / NOT READY FOR HUMAN
   REVIEW`;
4. Discrete Feasibility-First Structural Placement 1 — `PIVOT / NOT READY FOR
   HUMAN REVIEW`.

The most recent evidence is that continuous topology projection and the first
discrete cell/sector assignment cannot jointly provide dense crossing quality,
screen-space capacity, endpoint feasibility, and a small browser-native state
space. The current next hypothesis is therefore **narrow graph decomposition +
explicit capacity contract**, with a guarded fallback decision toward **Fast
Initial Placement + explicit High-quality Auto Layout** if the state space does
not remain small. `Organic Relationship-Shaped Placement` is recorded as a
future structural hypothesis: grid/ring/cell structures may be search scaffolds,
but must not dictate final geometry.

Current product/release state:

- Product default/adoption: `HOLD`;
- production provider: `NOT ESTABLISHED`;
- Initial Layout Release blocker: `OPEN`;
- Human Review for the current discrete candidate: `NOT READY`.

G3 and Frontier-12 Human evidence remains scoped to those historical arms and
must not be inherited by new candidates.

## Closed responsibility boundaries

- Initial Placement owns only derived Node geometry and bounded placement
  candidates.
- Product routing, ordinary Relation routing, Parallel / Incident endpoint
  planning, Relation-label placement, Self-loop routing, glyph/CSS rendering,
  and final presentation remain their existing authorities.
- Capacity negotiation is a structured request/response boundary. A placement
  correction may respond only to a real request at the existing safe lifecycle
  boundary; it is not a fixed angular-relief rule.
- Stored/authored Coordinates, mixed-coordinate completion, Dataset
  persistence, dirty-state, Save Coordinates, round-once canonicalization,
  manual curvature, and manual labels remain unchanged.

## Local-only source manifest for the next room

All paths below are relative to `C:\Users\extra\E2R\e2r-liaison-scape` unless
otherwise stated. They are retained research sources, not Product providers:

### Current discrete feasibility checkpoint

- `tools/discrete-placement-feasibility.mjs` — bounded cell assignment,
  sector/corridor propagation, state cap, and solution audit contract;
- `tools/discrete-placement-feasibility-audit.mjs` — canonical and dense
  state-space audit;
- `tools/discrete-placement-product-audit.mjs` — canonical-only handoff through
  the unchanged Product evaluator;
- `experimental/discrete-placement-feasibility/audit.json` — reproducible state
  counts, pruning, and feasible-plan results;
- `experimental/discrete-placement-feasibility/product-audit.json` — canonical
  Product-authoritative metrics;
- `tests/structural-formulation.test.ts` — bounded/deterministic/input-safety
  tests, including the discrete state-space control;
- `tools/generic-crossing-search.mjs` — existing diagnostic evaluator with the
  opt-in research mode; no default behavior changed.

### Prior placement evidence retained for context

- `tools/structural-formulation.mjs` and `tools/structural-formulation-audit.mjs`;
- `tools/structural-formulation2.mjs` and
  `tools/structural-formulation2-audit.mjs`;
- `experimental/structural-formulation1/`;
- `experimental/structural-formulation2/audit.json`;
- `tools/structural-formulation3.mjs` and
  `tools/structural-formulation3-audit.mjs`;
- `experimental/structural-formulation3/audit.json`;
- `src/auto-layout.ts` and existing presentation/routing modules, only as
  Product authority to inspect—not as permission to move authority.

### Specification evidence

Relative to `C:\Users\extra\E2R\e2r-spec`:

- `docs/liaisonscape-general-crossing-aware-placement1-result.md`;
- `docs/liaisonscape-joint-constrained-crossing-aware-placement2-result.md`;
- `docs/liaisonscape-discrete-feasibility-first-placement1-result.md`;
- `docs/liaisonscape-structural-placement-angular-ordering-retune1-result.md`;
- `docs/liaisonscape-structural-placement-angular-ordering-retune2-result.md`;
- `docs/liaisonscape-parallel-incident-architecture-closure1-result.md`;
- `docs/roadmap.md`.

The full preceding chain is discoverable with:

```powershell
rg --files docs | rg 'liaisonscape-(parallel|structural|general|joint|discrete)|roadmap'
```

Do not rewrite historical result documents to simplify this handoff.

## Evidence chain and interpretation

General Crossing-Aware Placement showed the core trade-off:

- topology-aware continuous embedding reduced dense crossings but produced
  Node/label clearance and fit risks;
- compact guarded grids restored fit and separation but lost dense crossing
  quality;
- post-generation compression or grid snapping did not make both properties
  coexist.

Joint-Constrained Placement added hard graph-space separation and coarse
endpoint/corridor signals, but dense quality remained topology-dependent and
the cheap signals had authoritative false-safe cases. The discrete checkpoint
then measured 12 scaffold/cell families: canonical sparse cases stayed below
175 states per family, Titanic reached the 25,000-state cap for three families,
and all dense controls reached the cap with no feasible plan. This is a
bounded-solver feasibility result, not proof that every discrete formulation is
impossible.

The next room should begin by testing whether a *narrow decomposition* can keep
state space small while preserving topology ordering and explicit capacity
contracts. It should not simply raise the state cap, lower the sector guard, or
reuse the rejected continuous projection. If not, record the evidence for the
Fast Initial Placement / explicit High-quality Auto Layout responsibility split.

## Reproduction and validation baseline

From LiaisonScape:

```powershell
npm.cmd test
npm.cmd run lint
npm.cmd run build
git diff --check
```

From E2R-SPEC:

```powershell
npm.cmd run validate
git diff --check
```

The latest baseline before this documentation-only handoff is LiaisonScape
`414/414 PASS`, lint PASS, production build PASS, and E2R-SPEC validate PASS.
The current handoff changes no LiaisonScape source or tests.

## Git and worktree inventory

### LiaisonScape

- branch: `main`;
- HEAD: `b3b9af8 research: audit discrete placement feasibility`;
- upstream: `origin/main`;
- ahead/behind: `161 / 0`;
- research commits remain local and unpushed, including `b2c3a48`, `e554710`,
  `c5b7d1d`, and the earlier endpoint/parallel research chain;
- staged changes: none at handoff preparation;
- unrelated dirty state preserved: `tests/graph-presentation.test.ts` has a
  worktree modification marker with no content diff, and
  `experimental/product-evaluation-seam/spacing-inspection2/` is untracked;
- no cleanup, reset, stash, push, tag, release, deploy, or publication was
  performed.

### E2R-SPEC

- branch: `main`;
- HEAD: `f76aa5b docs: add organic placement research direction` before this
  handoff commit;
- upstream: `origin/main`;
- ahead/behind: `165 / 0` before this handoff commit;
- relevant local commits include `10e17ec`, `3b6bf35`, `4a6300f`, `0737c0a`,
  and the earlier evidence chain;
- unrelated dirty state preserved: `sessions/E2R-Session-0052.md` has a
  worktree modification marker and `work/` is untracked;
- this handoff document is the only intended documentation addition;
- no session log was edited by this checkpoint.

### e2r-ai-knowledge

- branch: `main`;
- HEAD: `a2c198d knowledge: record actual Product inspection hypothesis`;
- upstream: `origin/main`;
- ahead/behind: `2 / 0`;
- unrelated dirty state preserved: `playbooks/e2r-edge-cdp-browser-diagnostic.md`;
- no new knowledge entry is warranted: this is repository-local checkpoint
  state, not independently reusable cross-repository knowledge.

## Handoff boundary

The next room may continue from `narrow graph decomposition + explicit capacity
contract` or formally evaluate the responsibility split. It must preserve the
existing research history, current local commits, unpushed state, and unrelated
dirty files. Product default/adoption, production provider, canonical Dataset,
presentation authority, persistence semantics, and Human Review status remain
unchanged.
