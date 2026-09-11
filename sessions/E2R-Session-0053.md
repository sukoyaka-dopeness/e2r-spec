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
`docs/liaisonscape-initial-layout-bounded-coarse-provider1-result.md`.

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
