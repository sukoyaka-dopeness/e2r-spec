# LiaisonScape Initial-placement Seed Production-readiness Evidence Audit1 Result

## Checkpoint

- Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-READINESS-EVIDENCE-AUDIT1`
- Date: 2026-09-02
- Status: Complete; candidate inventory and nonvisual audit reconciled

## Mandatory banner

```text
PRODUCTION-READINESS NONVISUAL EVIDENCE AUDIT ONLY

NO PRODUCTION CANDIDATE SELECTED
NO VISUAL ACCEPTANCE
NO RUNTIME IMPLEMENTATION
NO NEW ASSIGNMENT POLICY
NO STRUCTURAL-OBJECTIVE WINNER
NO CROSS-FIXTURE SCORE
NO CLAIM THAT INITIAL PLACEMENT IS SOLVED
```

## Result

The exact candidate universe is smaller than the set of research witness
labels. The only live Production implementation is the current baseline in
`src/entity-placement.ts`, `src/auto-layout.ts`, and its `App.tsx`
orchestration. TA0/REP-0, TA1-W1-OP-v1, TA2-DEG-W1-OP-v1,
TA2-MOTIF-W1-OP-v1, TA3-FWD-W1-OP-v1, and TA3-REV-W1-OP-v1 are research
witness identities. `FP1-NGP` is a research candidate family with a
research-only materializer. K3 is a control surface, not a quality candidate.

The research witnesses have exact hard evidence only within their documented
fixture/domain boundaries. They do not have Production-compatible materializer
paths, complete runtime integration evidence, or Production provenance. No
research candidate reaches `PR-2 NONVISUAL-EVIDENCE-COMPLETE`; the current
Production baseline is retained separately and is not retroactively invalidated
by research-only hard gates.

## Exact result and decision

**CASE 2** is selected:

> Research candidates are semantically and operationally defined, but lack a
> Production-compatible materialization surface required for further
> readiness evidence.

**DECISION B** is selected:

```text
PRODUCTION-COMPATIBLE CANDIDATE MATERIALIZATION SURFACE REQUIRED NEXT
```

The exact next checkpoint is:

`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-CANDIDATE-MATERIALIZATION-DESIGN1`

That checkpoint must design a bounded evaluation materializer and its
provenance boundary. It must not implement a Production replacement or select
a candidate automatically.

## Hacker-movie celebration boundary

```text
Bingo! The Production-readiness candidate and nonvisual evidence inventory is exact.
Yahoo! The nonvisual eligibility audit is complete and the next readiness gate is explicit.
```

Both statements are evidence-gated and concern inventory completeness and
sequencing only. They do not express quality, superiority, or a Production
winner, and they did not influence the reasoning.

## Source and protected-state reconciliation

### e2r-spec

- Start HEAD: `6a470ea0f2a2f288ada45f3943369bf5ef4b59c4`
- branch: `main`
- upstream: `origin/main`
- initial status: protected `sessions/E2R-Session-0052.md` only
- `6a470ea` Production Readiness Design1 present: YES
- `670713c` Research Synthesis1 present: YES

### LiaisonScape

- HEAD: `fd563340625fd3d88dc25baedc93c4f8fe69e5e7`
- branch: `main`
- upstream: `origin/main`
- Initial Placement source drift from the accepted baseline: none
- protected samples: `public/lighthouse-restoration-demo.en.e2r.json` and
  `public/lighthouse-restoration-demo.ja.e2r.json`, preserved and unstaged

Research surfaces, routing preview, residual shells, failed Experiment4, and
the protected `ai-knowledge` browser diagnostic playbook were preserved. No
new clone was created. The dirty LiaisonScape sample bytes were not used as
authority.

## Design1 authority

[Production Readiness Design1](liaisonscape-initial-placement-seed-production-readiness-design1.md)
freezes the evidence classes and the following non-ranking state model:

```text
PR-0 UNASSESSED
PR-1 HARD-ELIGIBLE
PR-2 NONVISUAL-EVIDENCE-COMPLETE
PR-3 VISUAL-EVIDENCE-COMPLETE
PR-4 INTEGRATION-EVIDENCE-COMPLETE
PR-5 PRODUCTION-SELECTION-ELIGIBLE
```

This audit may issue bounded `PR-C1` facts and `PR-C2` only when a complete
nonvisual evidence class exists. It must not issue `PR-C4` or `PR-C5`.

## Candidate inventory method

The inventory distinguishes four independent things:

1. semantic policy or candidate-family meaning;
2. operational witness identity;
3. callable materializer and its scope; and
4. live Production runtime implementation.

A research witness table is not a Production materializer. A literal geometry
alias is not a semantic identity alias. A bounded hard-valid result is not a
Production eligibility result.

## Candidate registry

| Candidate ID | Category | Semantic contract | Witness/materializer | Production runtime implementation | FP1 dependency | Current role |
| --- | --- | --- | --- | --- | --- | --- |
| `CURRENT-PRODUCTION-BASELINE` | current Production baseline | live `placeInitialEntities` plus conditional `settleInitialPlacement`; no TA-family identity assigned | `src/entity-placement.ts` and `src/auto-layout.ts` through `src/App.tsx` | YES | NO | `PRODUCTION-BASELINE` |
| `TA0/REP-0` | TA0 / REP-0 | `WIT-DERIVED`, degree-descending then lexical direct zip | research witness in structural-assignment surfaces | NO; research-only | YES in bounded structural fixtures | `RESEARCH-WITNESS-ONLY` |
| `TA1-W1-OP-v1` | TA1 operational witness | NEW TA1 semantics, `CLAIM-P0` | `TA1-W1-OP-v1`, research-only operational witness | NO | YES in bounded structural fixtures | `RESEARCH-WITNESS-ONLY` |
| `TA2-DEG-W1-OP-v1` | TA2 degree witness | `TA2-DEG-NEW-v1` | research-only operational witness | NO | YES in bounded structural fixtures | `RESEARCH-WITNESS-ONLY` |
| `TA2-MOTIF-W1-OP-v1` | TA2 motif witness | `TA2-MOTIF-NEW-v1` with `R(V)=(m(V),o(V),s(V))` | research-only operational witness | NO | YES in bounded structural fixtures | `RESEARCH-WITNESS-ONLY` |
| `TA3-FWD-W1-OP-v1` | TA3 Forward witness | `TA3-RESP-NEW-v1`, `TA3-SPACE-NEW-v1`, `TA3-CORR-FWD-NEW-v1` | research-only operational witness | NO | YES in bounded structural fixtures | `RESEARCH-WITNESS-ONLY` |
| `TA3-REV-W1-OP-v1` | TA3 Reverse witness | `TA3-CORR-REV-NEW-v1`, `TA3-CORR-OP-v1` | research-only operational witness | NO | YES in bounded structural fixtures | `RESEARCH-WITNESS-ONLY` |
| `FP1-NGP` | candidate family | `P_i=(i/m,(i/m)^2)` with exact `Q_i=(m*i,i^2)` substrate | research-only family generator/materializer | NO | it is the family | `RESEARCH-CANDIDATE` |
| `K3 orbit control` | synthetic control | one semantic Node orbit for control purposes | research-only control materialization | NO; control-only | bounded control surface | `CONTROL-ONLY` |

No additional candidate identity is inferred from a geometry alias. There is
no `AMBIGUOUS` candidate after distinguishing baseline, witness, family, and
control roles.

## Current Production baseline

The current Production initial-open path is:

```text
App.acceptDataset
  -> getStoredCoordinates
  -> buildEntityGraph
  -> placeInitialEntities
  -> if no Stored Coordinates: settleInitialPlacement
  -> fitGraphView / render
```

`placeInitialEntities` applies Stored/Owned coordinates first. Unowned Nodes
are ordered by stable Entity ID, use positioned-neighbor centroids where
available, otherwise use a deterministic grid anchor, and search eight
directions over eight rings using a bounded body/label-envelope score.
`settleInitialPlacement` calls `solveAutoLayout` with three iterations only
when the Dataset has no stored coordinates. Partial stored-coordinate opening
uses the seeded positions without this settling call.

The baseline is not labeled TA0, TA1, TA2, TA3, or FP1 because no accepted
source or semantic authority makes that identity claim. It has no research
candidate-selection semantics.

Automatic placement is Derived live state. It does not itself persist
Coordinates, set `coordinatesDirty`, or mark the Dataset modified. Explicit
placement and meaningful manual movement retain their existing user-owned
semantics. Stored compatible coordinates remain authoritative.

Current focused tests cover deterministic auto-layout, ID-ordered topology-
seeded placement, finite/distinct placement in bounded cases, bounded settling,
coordinate ownership, migration, replacement safety, and fallback behavior.
They do not establish universal hard eligibility, candidate-family equivalence,
visual acceptance, routing quality, settling quality, or a performance budget.

## Hard eligibility audit

The audit uses the Design1 gates:

```text
HARD-1 finite coordinates
HARD-2 distinct candidate points
HARD-3 injective Node assignment
HARD-4 GEO-0
HARD-5 GEO-3
HARD-6 complete/exact Node domain
HARD-7 no exception / invalid numeric state
```

`PASS-B` below means exact evidence passes within the named bounded fixture or
research domain. It does not mean `PASS - GENERAL CONTRACT`.

| Candidate | HARD-1 | HARD-2 | HARD-3 | HARD-4 | HARD-5 | HARD-6 | HARD-7 | Scope |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `CURRENT-PRODUCTION-BASELINE` | PASS-B | PARTIAL | PARTIAL | N/A to baseline semantics | N/A to baseline semantics | PASS-B | PASS-B | current source/tests only; not retroactive Production invalidation |
| `TA0/REP-0` | PASS-B | PASS-B | PASS-B | PASS-B | PASS-B | PASS-B | PASS-B | Lighthouse, Ashen, K3 research fixtures |
| `TA1-W1-OP-v1` | PASS-B | PASS-B | PASS-B | PASS-B | PASS-B | PASS-B | PASS-B | Lighthouse, Ashen, K3 research fixtures |
| `TA2-DEG-W1-OP-v1` | PASS-B | PASS-B | PASS-B | PASS-B | PASS-B | PASS-B | PASS-B | Lighthouse, Ashen, K3 research fixtures |
| `TA2-MOTIF-W1-OP-v1` | PASS-B | PASS-B | PASS-B | PASS-B | PASS-B | PASS-B | PASS-B | Lighthouse, Ashen, K3 research fixtures |
| `TA3-FWD-W1-OP-v1` | PASS-B | PASS-B | PASS-B | PASS-B | PASS-B | PASS-B | PASS-B | Lighthouse, Ashen, K3 research fixtures |
| `TA3-REV-W1-OP-v1` | PASS-B | PASS-B | PASS-B | PASS-B | PASS-B | PASS-B | PASS-B | Lighthouse, Ashen, K3 research fixtures |
| `FP1-NGP` | PASS-B | PASS-B | PASS-B | PASS-B | PASS-B | PASS-B | PASS-B | bounded practical-family corpus and `N<=65` scaling domain |
| `K3 orbit control` | PASS-B | PASS-B | PASS-B | PASS-B | PASS-B | PASS-B | PASS-B | control-only; not a quality candidate |

The TA0-TA3 bounded PASS-B records come from the exact research manifests and
Rerun1 hard gates. FP1 bounded PASS-B records come from its practical-family
experiment, including finite/distinct materialization and GEO-0/GEO-3 results.
None proves HARD-4 or HARD-5 generally for all future Datasets.

The current baseline's partial HARD-2/HARD-3 result is a limitation of the
future candidate contract audit, not a declaration that accepted current
Production behavior is invalid. Its bounded fallback can return a candidate
when no fully clear point is available, so universal injective/distinct
eligibility is not established.

## Runtime materialization audit

| Candidate group | Production-compatible callable materializer | Research-only helper | Result |
| --- | --- | --- | --- |
| Current baseline | YES: live App/source path | not applicable | Production runtime path |
| TA0/REP-0 | NO | YES | experiment/research-only |
| TA1-W1-OP-v1 | NO | YES | experiment/research-only |
| TA2 degree/motif | NO | YES | experiment/research-only |
| TA3 Forward/Reverse | NO | YES | experiment/research-only |
| FP1-NGP | NO | YES | research-family generator/materializer |
| K3 | NO | YES | control-only research materialization |

The missing Production-compatible materializer is B2. It is not a hard-
geometry failure. It blocks completion of the nonvisual evidence class for
research candidates and is the reason Decision B precedes visual design.

## Determinism audit

| Candidate/group | Exact repeat | Entity-array reorder | Relation-array reorder | Serialization preservation | Supported runtime | Semantic rename | Literal rename |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Current baseline | PASS-B | PARTIAL/PASS-B in focused placement tests | PASS-B for solver/canonical routing; initial-open integration partial | PASS-B for Derived non-persistence | PARTIAL: source/tests, no replacement audit | CANDIDATE-SPECIFIC declaration required | OUT-OF-SCOPE |
| TA0-TA3 witnesses | PASS-B research harness | MISSING as Production evidence | MISSING as Production evidence | OUT-OF-SCOPE in witness harness | MISSING | CANDIDATE-SPECIFIC | OUT-OF-SCOPE |
| FP1-NGP | PASS-B family generation | PASS-B for ID-neutral family generation; mapping remains candidate-specific | CANDIDATE-SPECIFIC | OUT-OF-SCOPE | MISSING | CANDIDATE-SPECIFIC | OUT-OF-SCOPE |
| K3 control | PASS-B | PASS-B only for orbit/control construction | PASS-B only for control construction | OUT-OF-SCOPE | MISSING | OUT-OF-SCOPE | OUT-OF-SCOPE |

Semantic rename behavior and literal rename stability remain different
properties. The current Product contract does not require literal rename
stability. Cross-browser numerical identity is not invented as a requirement.

## Structural evidence audit

Structural evidence remains PREFERENCE evidence under PP-M3. It is never a
MUST-PASS gate, selector, winner, or cross-fixture score.

| Candidate/group | Current evidence | Scope and reuse |
| --- | --- | --- |
| `TA0/REP-0` | exact Experiment2/3/4 relations through geometry classes | research-only, fixture-local |
| `TA1-W1-OP-v1` | exact Experiment2/3/4 relations through geometry classes | research-only, fixture-local |
| `TA2-DEG-W1-OP-v1` | exact class membership and Rerun1 relations | research-only, fixture-local |
| `TA2-MOTIF-W1-OP-v1` | exact class membership and Rerun1 relations | research-only, fixture-local |
| `TA3-FWD-W1-OP-v1` | new literal Lighthouse G3 class; Ashen geometry alias of TA1; K3 control | research-only, alias-aware |
| `TA3-REV-W1-OP-v1` | no new literal geometry; current-fixture alias of TA2 motif | research-only, semantic identity retained |
| `FP1-NGP` | practical-family hard/operational diagnostics | research-only; not a Production characterization |
| Current baseline | no registered TA0-TA3 PP-M3 characterization | missing for any future like-for-like candidate audit |
| K3 | `PP-PREF-EQUIVALENT` orbit control | control only, not quality evidence |

The exact bounded topology remains:

```text
Lighthouse: G0 > G2 > G1 > G3
Ashen:      G0 > G1, G2 > G1, G0 || G2
K3:         PP-PREF-EQUIVALENT, CONTROL ONLY
```

This topology is not converted into an eligibility ranking. Literal aliases
reuse nonvisual geometry evidence only where the shared surface is exact; they
do not merge semantic IDs.

## Compatibility audit

| Candidate/group | Stored/Owned Coordinates | Explicit save semantics | Derived persistence | Dirty/replacement safety | Schema/extension | Legacy/fallback | Integration result |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Current baseline | PASS-B | PASS-B | PASS-B | PASS-B | PASS-B | PASS-B | current behavior evidenced; candidate replacement audit not done |
| TA0-TA3 witnesses | NOT TESTABLE WITHOUT INTEGRATION | NOT TESTABLE WITHOUT INTEGRATION | NOT TESTABLE WITHOUT INTEGRATION | NOT TESTABLE WITHOUT INTEGRATION | no change evidenced, but no runtime path | NOT TESTABLE WITHOUT INTEGRATION | missing Production materializer |
| FP1-NGP | NOT TESTABLE WITHOUT INTEGRATION | NOT TESTABLE WITHOUT INTEGRATION | NOT TESTABLE WITHOUT INTEGRATION | NOT TESTABLE WITHOUT INTEGRATION | no change evidenced, but no runtime path | NOT TESTABLE WITHOUT INTEGRATION | missing Production materializer |
| K3 control | NOT APPLICABLE to Product runtime | NOT APPLICABLE | NOT APPLICABLE | NOT APPLICABLE | research-only | research-only | control-only |

No research candidate can receive compatibility PASS from a witness table.
The current baseline remains accepted and is not retroactively declared
invalid.

## Provenance audit

| Candidate/group | Research provenance | Production runtime provenance | E-PROVENANCE |
| --- | --- | --- | --- |
| Current baseline | source/test identity available | source commit available, candidate contract/configuration record absent | PARTIAL |
| TA0/REP-0 | witness ID, semantics, fixture and research artifacts available | no Production runtime/materializer configuration | PARTIAL |
| TA1-W1-OP-v1 | witness ID, `CLAIM-P0`, fixtures, hashes and method available | no Production runtime/materializer configuration | PARTIAL |
| TA2 degree/motif | NEW semantics, witness IDs, fixture records and methods available | no Production runtime/materializer configuration | PARTIAL |
| TA3 Forward/Reverse | NEW semantics, witness IDs, aliases, fixture records and methods available | no Production runtime/materializer configuration | PARTIAL |
| FP1-NGP | family formula, bounded corpus, method and artifacts available | no Production runtime/materializer configuration | PARTIAL |
| K3 control | control definition and artifact identity available | no Production runtime configuration | PARTIAL |

Research provenance is strong enough for bounded reuse, but Production
provenance requires the materializer, runtime configuration, and compatibility
surface that the next checkpoint must design.

## Candidate-specific semantic blockers

The TA2/TA3 responsibility tuple is:

```text
R(V)=(m(V),o(V),s(V))
```

Current TA2 v1 overlap semantics make `o(V)` redundant. This does not
invalidate prior research and does not globally block unrelated candidates.

| Candidate/group | Blocker | Stage | Effect |
| --- | --- | --- | --- |
| TA2 degree/motif | unresolved `o(V)` semantic design | `BLOCKS PR-3+` if semantics materially drive final candidate behavior | does not block current nonvisual audit |
| TA3 Forward/Reverse | inherited/materially related responsibility semantics where used | `BLOCKS PR-3+` if materially dependent | does not block current nonvisual audit |
| TA0/REP-0, TA1/W1 | not applicable | `NOT APPLICABLE` | unaffected |
| FP1-NGP | not part of the TA2/TA3 responsibility tuple by itself | `NOT APPLICABLE` | unaffected |
| Current baseline | not applicable to the research tuple | `NOT APPLICABLE` | unaffected |

Unrelated candidates remain unaffected: **YES**. No semantic redesign is made
in this checkpoint.

## FP1 dependency audit

`FP1-NGP` has:

- bounded hard evidence: YES;
- bounded structural/operational diagnostics: YES;
- Production runtime materializer: NO;
- visual evidence: NO;
- Production acceptance: NO.

TA0-TA3 objective witness geometry is keyed through the bounded FP1 geometry
surface in the structural-assignment research. That fact identifies the
geometry family used by the research; it does not create a Production runtime
candidate. The current Production baseline does not depend on FP1.

## Fixture-role inventory

The table uses committed e2r-spec examples and the research fixture records,
not the dirty LiaisonScape public sample bytes. A role is marked `YES` only
where the accepted authority explicitly supports it; `PARTIAL` means the
fixture is relevant but does not alone satisfy a frozen role contract;
`UNKNOWN` means a future audit must decide it.

| Fixture | Authority | Ordinary | Motif-rich | High-fanout | Sparse | Dense | Control | Larger-size |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Lighthouse Restoration | committed e2r-spec sample and research fixture | YES | YES | PARTIAL | UNKNOWN | PARTIAL | NO | NO |
| Ashen Crown | committed e2r-spec sample and research fixture | YES | YES | YES for registered FAN-P1 owners | NO | PARTIAL | NO | NO |
| Apollo 11 Mission | committed e2r-spec sample | YES | PARTIAL | PARTIAL | UNKNOWN | UNKNOWN | NO | PARTIAL |
| Titanic Final Voyage | committed e2r-spec sample | YES | PARTIAL | PARTIAL | UNKNOWN | PARTIAL | NO | YES |
| K3 synthetic control | committed research definition | NO | NO | NO | NO | NO | YES | NO |

The role inventory is not a visual evaluation. It identifies an authority/role
gap for a future fair common fixture set; it does not select fixtures by
convenience.

## Same-fixture-set readiness

Result: **ROLE GAP**.

The accepted corpus contains useful realistic, motif, fan-out, and size
examples, but no single frozen mapping currently proves every required role
for every candidate. K3 is a control only. The next materialization design can
preserve this role gap; a later fixture-coverage design or evidence audit must
freeze the common set before visual comparison. No cherry-picking is allowed.

## Performance readiness

Result: **MISSING**, but not a blocker for the selected materialization-design
checkpoint.

Existing source and research records show bounded algorithms or bounded
experiments in their own scopes, but there is no accepted Production
complexity/size/time budget, worst accepted sample, or bounded settling-cost
record for candidate evaluation. Numeric budgets remain unfrozen. A later
performance evidence responsibility is required before Production selection;
the absence of a number does not by itself force a performance-threshold
checkpoint now.

## Viewport readiness

Result: **ROLE-LEVEL READY** for future visual work, with no pixel threshold
frozen.

The Design1 roles are normal desktop, narrow/small workspace, and another
accepted responsive role when applicable. Exact dimensions, scale limits, and
compactness values are not frozen. This is not a browser evaluation and is not
a current blocker to materialization design.

## Evidence-class status matrix

`PARTIAL` means bounded or incomplete evidence exists; `RESEARCH-ONLY` means
the evidence cannot be used as Production acceptance without a runtime
surface; `MISSING` means no usable evidence class exists.

| Candidate | E-HARD | E-DETERMINISM | E-STRUCTURAL | E-COMPAT | E-PROVENANCE |
| --- | --- | --- | --- | --- | --- |
| Current baseline | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL |
| TA0/REP-0 | PARTIAL, bounded | RESEARCH-ONLY | RESEARCH-ONLY | MISSING | PARTIAL |
| TA1-W1-OP-v1 | PARTIAL, bounded | RESEARCH-ONLY | RESEARCH-ONLY | MISSING | PARTIAL |
| TA2-DEG-W1-OP-v1 | PARTIAL, bounded | RESEARCH-ONLY | RESEARCH-ONLY | MISSING | PARTIAL |
| TA2-MOTIF-W1-OP-v1 | PARTIAL, bounded | RESEARCH-ONLY | RESEARCH-ONLY | MISSING | PARTIAL |
| TA3-FWD-W1-OP-v1 | PARTIAL, bounded | RESEARCH-ONLY | RESEARCH-ONLY | MISSING | PARTIAL |
| TA3-REV-W1-OP-v1 | PARTIAL, bounded | RESEARCH-ONLY | RESEARCH-ONLY | MISSING | PARTIAL |
| FP1-NGP | PARTIAL, bounded | RESEARCH-ONLY | RESEARCH-ONLY | MISSING | PARTIAL |
| K3 orbit control | RESEARCH-ONLY | RESEARCH-ONLY | RESEARCH-ONLY | NOT APPLICABLE | PARTIAL |

No E-VISUAL, E-SETTLING, E-ROUTING, E-VIEWPORT, or E-PERFORMANCE class is
marked complete by this audit.

## PR state assignment

| Candidate/group | State | Full/bounded/not established | Exact basis |
| --- | --- | --- | --- |
| Current baseline | PR-0 | NOT ESTABLISHED as a new replacement candidate | accepted current runtime is inventoried separately; future hard-candidate contract not retroactive |
| TA0/REP-0 | PR-1 | BOUNDED | exact research hard gates pass on Lighthouse, Ashen, K3; no Production path |
| TA1-W1-OP-v1 | PR-1 | BOUNDED | exact research hard gates pass on Lighthouse, Ashen, K3; no Production path |
| TA2-DEG-W1-OP-v1 | PR-1 | BOUNDED | exact research hard gates pass on Lighthouse, Ashen, K3; no Production path |
| TA2-MOTIF-W1-OP-v1 | PR-1 | BOUNDED | exact research hard gates pass on Lighthouse, Ashen, K3; no Production path |
| TA3-FWD-W1-OP-v1 | PR-1 | BOUNDED | exact research hard gates pass on Lighthouse, Ashen, K3; no Production path |
| TA3-REV-W1-OP-v1 | PR-1 | BOUNDED | exact research hard gates pass on Lighthouse, Ashen, K3; no Production path |
| FP1-NGP | PR-1 | BOUNDED | practical-family hard evidence in bounded corpus; no Production path |
| K3 orbit control | PR-0 | CONTROL ONLY | control evidence cannot create candidate readiness |

No candidate reaches PR-2 because the Production-compatible materializer,
runtime compatibility, and complete Production provenance are absent for
research candidates. No candidate reaches PR-3, PR-4, or PR-5.

## PR-C1 / PR-C2 claim boundary

This audit emits bounded PR-C1 facts only:

- the research witness/family hard gates pass on their documented bounded
  fixtures/domains; and
- the current Production baseline source/tests provide bounded runtime facts
  without being a new replacement-candidate eligibility result.

No complete required nonvisual evidence class exists for a research candidate,
so PR-C2 is **not emitted**. PR-C3, PR-C4, and PR-C5 are **not emitted**.

## Blocker taxonomy and severity

| Blocker | Scope | Severity | Current effect |
| --- | --- | --- | --- |
| B0 NONE | none | none | not assigned |
| B1 MISSING AUTHORITY | no registry gap remains | none | not assigned |
| B2 MISSING RUNTIME MATERIALIZER | common to TA0-TA3 and FP1 research candidates | BLOCKS PR-2 and PR-3+ | selected next responsibility |
| B3 HARD-EVIDENCE GAP | generalization beyond bounded fixtures | BLOCKS PR-2 | bounded PR-1 remains valid |
| B4 DETERMINISM GAP | Production runtime/order evidence for research candidates | BLOCKS PR-2 | research repeat evidence remains research-only |
| B5 STRUCTURAL CHARACTERIZATION GAP | current baseline and future common candidate characterization | BLOCKS PR-2 where required | no ranking or selector created |
| B6 COMPATIBILITY GAP | research candidates without runtime integration | BLOCKS PR-2 and PR-3+ | cannot audit persistence/fallback safely |
| B7 PROVENANCE GAP | runtime/configuration provenance absent for research candidates | BLOCKS PR-2 | research provenance remains partial for Production |
| B8 CANDIDATE-SPECIFIC SEMANTIC GAP | TA2/TA3 responsibility-dependent candidates | BLOCKS PR-3+ only | does not block current nonvisual audit |
| B9 FIXTURE-ROLE GAP | common role mapping is not fully frozen | BLOCKS PR-3+ | later fixture design/evidence required |
| B10 PERFORMANCE-THRESHOLD GAP | numeric budget absent | BLOCKS later selection evidence, not current stage | no benchmark or threshold invented |
| B11 VIEWPORT-ROLE GAP | exact pixels not frozen | BLOCKS later visual execution if unresolved | role-level ready now |
| B12 VISUAL/SETTLING/ROUTING expected later | all candidates | BLOCKS PR-3+ | expected later; not an audit failure |

The shared smallest blocker is **B2**, not B8, B9, or B10. B2 prevents a
meaningful Production nonvisual audit for the research candidates, so visual
design is not the next checkpoint.

## Nonvisual eligibility matrix

| Candidate | Role | Runtime materializer | Hard evidence | Determinism | Structural | Compat | Provenance | Semantic blocker | Current PR state |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Current baseline | PRODUCTION-BASELINE | Production runtime | PARTIAL current-source | PARTIAL | PARTIAL | PARTIAL current behavior | PARTIAL | NOT APPLICABLE | PR-0 / baseline separate |
| TA0/REP-0 | RESEARCH-WITNESS-ONLY | research-only | bounded PASS-B | research-only | research-only | missing | partial Production | not applicable | PR-1 BOUNDED |
| TA1-W1-OP-v1 | RESEARCH-WITNESS-ONLY | research-only | bounded PASS-B | research-only | research-only | missing | partial Production | not applicable | PR-1 BOUNDED |
| TA2-DEG-W1-OP-v1 | RESEARCH-WITNESS-ONLY | research-only | bounded PASS-B | research-only | research-only | missing | partial Production | `o(V)` if materially used | PR-1 BOUNDED |
| TA2-MOTIF-W1-OP-v1 | RESEARCH-WITNESS-ONLY | research-only | bounded PASS-B | research-only | research-only | missing | partial Production | `o(V)` if materially used | PR-1 BOUNDED |
| TA3-FWD-W1-OP-v1 | RESEARCH-WITNESS-ONLY | research-only | bounded PASS-B | research-only | research-only | missing | partial Production | inherited if materially used | PR-1 BOUNDED |
| TA3-REV-W1-OP-v1 | RESEARCH-WITNESS-ONLY | research-only | bounded PASS-B | research-only | research-only | missing | partial Production | inherited if materially used | PR-1 BOUNDED |
| FP1-NGP | RESEARCH-CANDIDATE | research-only family materializer | bounded PASS-B | research-only | research-only | missing | partial Production | not applicable | PR-1 BOUNDED |
| K3 orbit control | CONTROL-ONLY | research-only | bounded control | research-only | control-only | N/A | partial | N/A | PR-0 CONTROL ONLY |

No row is `NONVISUAL READY FOR NEXT STAGE`. The research rows are `PARTIAL -
BOUNDED GAP`; the baseline is `PRODUCTION-BASELINE`; K3 is `CONTROL ONLY`.
There is no `AUTHORITY AMBIGUOUS` row.

## Next-responsibility analysis

Visual Acceptance Design1 is **not eligible now**. The Design1 rule requires
at least one legitimate candidate with sufficient nonvisual readiness and no
earlier common materialization, fixture, or runtime prerequisite. That
condition is not met: every research candidate lacks a Production-compatible
materializer and complete runtime compatibility/provenance.

Fixture-role coverage is a later shared gap, but it does not need to be solved
before designing the materializer seam. The TA2/TA3 `o(V)` issue is
candidate-specific and does not globally block the materialization design.
Performance and exact viewport thresholds are later evidence/design concerns,
not reasons to invent an extra checkpoint now.

The smallest next responsibility is therefore a bounded
Production-compatible candidate materialization design, with explicit
separation from the live Production path. It must define how a research
semantic/family candidate can be materialized for nonvisual audit, how source
and fixture provenance are recorded, how failures are reported, and how the
surface remains disposable until separately authorized.

## Central questions Q1-Q45

| ID | Answer |
| --- | --- |
| Q1 | The exact identities are the current baseline, TA0/REP-0, TA1-W1-OP-v1, TA2 degree/motif witnesses, TA3 Forward/Reverse witnesses, FP1-NGP, and K3 control. |
| Q2 | Only `CURRENT-PRODUCTION-BASELINE` has a Production runtime implementation. |
| Q3 | TA0-TA3 are research witness identities; FP1 is a research candidate family; K3 is control-only. |
| Q4 | `src/entity-placement.ts` plus conditional `src/auto-layout.ts` settling, orchestrated by `src/App.tsx`. |
| Q5 | No accepted authority equates the current baseline with TA0. |
| Q6 | No. A research witness is not automatically a Production candidate. |
| Q7 | TA0-TA3 structural witnesses use the bounded FP1 geometry surface; FP1 is itself the family; the current baseline does not depend on FP1. |
| Q8 | No. FP1 has no visual or Production acceptance. |
| Q9 | TA0-TA3 and FP1 have bounded HARD-1 evidence; baseline has bounded source/test evidence. |
| Q10 | TA0-TA3 and FP1 have bounded distinctness evidence; baseline is partial under exhaustion/fallback. |
| Q11 | TA0-TA3 and FP1 have bounded injective mapping evidence; baseline is partial as a future candidate contract. |
| Q12 | TA0-TA3 and FP1 pass GEO-0 on bounded research fixtures; no general Production proof. |
| Q13 | TA0-TA3 and FP1 pass GEO-3 on bounded research fixtures; no general Production proof. |
| Q14 | TA0-TA3 and FP1 have complete/exact Node-domain evidence within their bounded manifests; baseline has bounded graph-source evidence. |
| Q15 | Research materializers pass no-exception/finite-state checks in bounded harnesses; baseline passes focused source/tests. |
| Q16 | All research hard results are bounded-fixture/domain results; none is universal Production evidence. |
| Q17 | No GENERAL hard result is established for future Production candidates. |
| Q18 | The current baseline has a Production runtime path; research identities have research-only helpers; no research candidate has a Production-compatible materializer. |
| Q19 | TA0-TA3, FP1, and K3 materializers are experiment/research-only. |
| Q20 | Exact repeat exists for the baseline and research harnesses within bounded tests. |
| Q21 | Baseline has focused Entity/Relation ordering evidence; research candidates lack Production reorder evidence. |
| Q22 | No research candidate has supported-runtime evidence; baseline has source/test evidence only. |
| Q23 | Exact PP-M3 records and topology are reusable as fixture-local research evidence. |
| Q24 | No. Structural evidence does not select eligibility or Production. |
| Q25 | The baseline has current persistence/migration/replacement tests; research candidates are not testable without integration. |
| Q26 | Research provenance is detailed but Production provenance is partial for every research candidate; baseline provenance is partial as a candidate contract. |
| Q27 | TA2/TA3 candidates may have the `o(V)`-dependent blocker at PR-3+; unrelated candidates are unaffected. |
| Q28 | No. `o(V)` does not block all candidates. |
| Q29 | Current roles are partially covered by Lighthouse, Ashen, Apollo, Titanic, and K3. |
| Q30 | Common role mapping, sparse/dense qualification, and some size/role authority remain ambiguous or partial. |
| Q31 | No. The common fixture set currently has a ROLE GAP. |
| Q32 | No. K3 is control-only. |
| Q33 | Bounded algorithm/source observations exist, but no Production performance evidence class is complete. |
| Q34 | No. Numeric performance budgets are unfrozen. |
| Q35 | Role-level viewport classes are defined; exact pixels are not frozen. |
| Q36 | TA0-TA3 and FP1 reach PR-1 BOUNDED; current baseline is separately PR-0 as a replacement candidate. |
| Q37 | No candidate reaches PR-2. |
| Q38 | Research candidates remain PR-1 BOUNDED with B2/B3/B4/B6/B7 gaps; baseline remains the accepted Production baseline. |
| Q39 | No PR-3, PR-4, or PR-5 is assigned. |
| Q40 | No candidate is selected. |
| Q41 | B2, the missing Production-compatible materializer, is the smallest shared blocker. |
| Q42 | No. Visual design is not justified before materialization and nonvisual completion. |
| Q43 | A bounded Production-compatible candidate materialization design comes first. |
| Q44 | `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-CANDIDATE-MATERIALIZATION-DESIGN1`. |
| Q45 | No. The next checkpoint was recorded but not auto-started. |

## Hypotheses H1-H16

| ID | Assessment |
| --- | --- |
| H1 | Supported: the actual Production candidate universe is smaller than research witness labels. |
| H2 | Supported: research witness existence does not imply a Production runtime materializer. |
| H3 | Supported: hard evidence retains its bounded fixture/domain scope. |
| H4 | Supported: structural evidence remains preference characterization only. |
| H5 | Supported: the current Production baseline must be inventoried separately. |
| H6 | Supported: FP1 dependency is distinct from Production acceptance. |
| H7 | Supported: evidence completeness differences are not quality ranking. |
| H8 | Supported: TA2/TA3 `o(V)` is a candidate-specific blocker, not global. |
| H9 | Supported: compatibility is incomplete for research-only materializers. |
| H10 | Supported: research provenance can be complete in its scope while runtime Production provenance is missing. |
| H11 | Supported: common fixture-role coverage needs additional audit. |
| H12 | Supported: K3 remains control-only. |
| H13 | Supported: visual readiness cannot be inferred from nonvisual evidence. |
| H14 | Supported: materialization is a smaller prerequisite than visual design. |
| H15 | Supported: no candidate can reach PR-5 here. |
| H16 | Supported: nonvisual audit emits bounded PR-C1 facts without selection. |

## Falsification N1-N18

| ID | Result |
| --- | --- |
| N1 | Not triggered: witnesses were not silently treated as Production candidates. |
| N2 | Not triggered: baseline was not labeled TA0. |
| N3 | Not triggered: research tables were not called runtime implementations. |
| N4 | Not triggered: bounded hard evidence was not generalized. |
| N5 | Not triggered: PP-M3 remains preference evidence. |
| N6 | Not triggered: incomparability was not ranked. |
| N7 | Not triggered: geometry aliases did not collapse semantic identities. |
| N8 | Not triggered: the `o(V)` blocker remains candidate-specific. |
| N9 | Not triggered: current baseline was not retroactively invalidated. |
| N10 | Not triggered: missing visual evidence was not treated as a nonvisual failure. |
| N11 | Not triggered: missing numeric performance budget did not force an unsupported checkpoint. |
| N12 | Not triggered: K3 was not counted as quality evidence. |
| N13 | Not triggered: research provenance was not called complete Production provenance. |
| N14 | Not triggered: no candidate advanced to PR-3+. |
| N15 | Not triggered: no candidate was selected. |
| N16 | Not triggered: no runtime/materializer implementation was created. |
| N17 | Not triggered: no Production source change was required. |
| N18 | Not triggered: protected state was preserved. |

## Knowledge candidate

Knowledge Candidate: **YES - multiple reusable readiness-audit principles**.

This result records, without modifying `ai-knowledge`:

- a research witness is not automatically a Production candidate or runtime
  implementation;
- hard evidence must retain its proven domain;
- evidence completeness must not become a quality ranking;
- the current Production baseline must be audited separately; and
- visual evaluation should begin only after a legitimate candidate clears the
  required nonvisual prerequisites.

## Validation

The following were deliberately not run:

- browser or visual acceptance;
- runner or objective rerun;
- benchmark;
- new clone;
- Production implementation; and
- new materializer.

Read-only Original LiaisonScape gates:

- `npm.cmd test`: PASS, 280/280;
- `npm.cmd run lint`: PASS;
- `npm.cmd run build`: PASS;
- `git diff --check`: PASS.

e2r-spec gates:

- `npm.cmd run validate`: PASS;
- `git diff --check`: PASS.

## Final state

- Production candidate selected: **NO**
- Production source changed: **NO**
- samples changed: **NO**
- witnesses changed: **NO**
- TA semantics changed: **NO**
- new materializer: **NO**
- objective rerun: **NO**
- visual acceptance: **NO**
- benchmark: **NO**
- new clone: **NO**
- FP1/F2 changed: **NO**
- solver changed: **NO**
- settling/routing/labels/UI changed: **NO**
- Dataset/Core/Extension/schema changed: **NO**
- protected Session preserved: **YES**
- research surfaces preserved: **YES**
- routing preview preserved: **YES**
- `ai-knowledge` preserved: **YES**
- push/tag/release/deploy/publication: **NONE**
