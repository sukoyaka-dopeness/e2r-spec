# E2R Session 0053 - LiaisonScape Bounded Coarse Provider Prototype

Date: 2026-09-11

## Scope

This session starts after the handoff from Session 0052. It records the
bounded runtime-provider checkpoint for the diagnostic
`coarse-objective-prototype-v1`. The normal LiaisonScape Product path,
historical Browser evidence, and Product adoption authority remain unchanged.

## Completed checkpoint

The LiaisonScape bounded provider now exposes an explicit coarse strategy
behind `deriveBoundedInitialLayout()`. The strategy keeps coarse candidate
generation diagnostic-only, marks its output as Derived, enforces finite /
complete / body-safe output, and falls back to the current placement as a
whole result on unsafe or budget-exceeded candidates.

Representative measurements under a 100 ms budget:

- Lighthouse EN/JA: completed in 17.067/5.036 ms;
- Titanic EN/JA: completed in 16.048/8.378 ms; and
- Apollo 11 EN/JA: whole-result fallback on unsafe seed in 0.603/0.283 ms.

Validation: LiaisonScape `349/349` tests, lint, and build passed. Product
normal integration and adoption were not started. Fresh10/Fresh11/Fresh12
historical evidence and the Fresh12 canonical Human Review result remain
unchanged. No new governed Fresh lineage, push, release, deploy, or
publication was performed.

The authoritative result is recorded in
`docs/liaisonscape/liaisonscape-initial-layout-bounded-coarse-provider1-result.md`.

`SESSION-0053 CHECKPOINT - BOUNDED COARSE PROVIDER CANDIDATE PASS; PRODUCT ADOPTION HOLD`

## Contract audit correction

The provider audit found that the candidate path projected Relations to the
Product-visible Entity graph while fallback passed the raw Relation array to
auto-layout. The fallback now receives the same projected Relation set. The
former `post-structural-relaxation-v1-prototype` result identity was also
renamed to `label-envelope-v1-prototype`; coarse remains a separate
presentation-informed geometric proxy and is not the Post materializer.

Validation after correction: LiaisonScape `350/350` tests, lint, build, and
diff check passed. Normal Product integration, adoption, and governed Fresh
execution remain not started.

`SESSION-0053 CONTRACT AUDIT - GRAPH INPUT ALIGNED; POST MISNOMER REMOVED`

## Chat-room handoff summary

The bounded coarse provider work in this room is complete at the contract-audit
boundary.

### Authoritative implementation state

- `deriveBoundedInitialLayout()` has an explicit
  `coarse-objective-prototype-v1` strategy.
- The coarse strategy is diagnostic-only, deterministic, budgeted, finite,
  complete, body-safe, and Derived-owned.
- Candidate and fallback use the same Product-visible Entity/Relation
  projection.
- Unsafe or budget-exceeded candidates are discarded as whole results and the
  current Product placement is retained.
- The simplified default envelope provider is identified as
  `label-envelope-v1-prototype`; it is not the Post materializer.
- The coarse objective is presentation-informed geometric proxy logic, not
  presentation-independent logic and not routing/label authority.
- `App.tsx` normal initial-placement behavior is not wired to either provider.

### Evidence and decisions

- Lighthouse and Titanic completed within the diagnostic budget in EN/JA.
- Apollo 11 EN/JA safely fell back after unsafe-seed rejection.
- Post equivalence remains unproven.
- Coarse-specific visual-defect absence remains unresolved.
- Opt-in Actual Product evaluation is the next valid gate.
- Product default integration/adoption remains `HOLD`.

### Commits

- LiaisonScape `d211c2f`: expose coarse provider strategy;
- E2R-SPEC `9069f57`: record bounded coarse provider checkpoint;
- LiaisonScape `f4b5a99`: align bounded provider graph input;
- E2R-SPEC `b54a2a2`: record provider contract audit.

### Preserved boundaries

Fresh10/Fresh11/Fresh12 historical evidence, the Fresh12 canonical Human
Review result, Stored Coordinates, mixed-coordinate semantics, dirty-state,
Save Coordinates, routing, labels, connectors, Self-loops, and parallel-Edge
behavior were not changed. No new governed Fresh lineage, push, tag, release,
deploy, or publication was performed.

### Worktree state at handoff

- LiaisonScape: pre-existing untracked
  `experimental/product-evaluation-seam/spacing-inspection2/` remains;
- E2R-SPEC: pre-existing modified `sessions/E2R-Session-0052.md` and
  untracked `work/` remain;
- no new uncommitted files from this checkpoint remain.

`SESSION-0053 CHAT-ROOM HANDOFF - BOUNDED PROVIDER AUDIT COMPLETE; OPT-IN EVALUATION NEXT`

---

### Transferred source: E2R-Session-0052 — Initial Placement Research Handoff

Transferred in full from `sessions/E2R-Session-0052-Initial-Placement-Handoff.md`.

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

- `docs/liaisonscape/liaisonscape-initial-placement-chatroom-handoff.md`;
- `docs/liaisonscape/liaisonscape-general-crossing-aware-placement1-result.md`;
- `docs/liaisonscape/liaisonscape-joint-constrained-crossing-aware-placement2-result.md`;
- `docs/liaisonscape/liaisonscape-discrete-feasibility-first-placement1-result.md`;
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

- LiaisonScape `b3b9af8`: expose coarse provider strategy;
- E2R-SPEC `f5d4de9`: record bounded coarse provider checkpoint;
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
