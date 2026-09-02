# LiaisonScape Initial-placement Seed Production-readiness Design1

## Checkpoint

- Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-READINESS-DESIGN1`
- Date: 2026-09-02
- Status: Complete; criteria contract frozen; candidate evaluation not started

## Mandatory banner

```text
PRODUCTION-READINESS CRITERIA DESIGN ONLY

NO PRODUCTION CANDIDATE SELECTED
NO VISUAL ACCEPTANCE PERFORMED
NO STRUCTURAL-OBJECTIVE RANKING
NO CROSS-FIXTURE SCORE
NO RUNTIME IMPLEMENTATION
NO CLAIM THAT INITIAL PLACEMENT IS SOLVED
```

## Result

The accepted documents and current LiaisonScape source did not contain one
complete Production-readiness contract for Initial Placement. Existing
material separates several useful invariants and experiments, but it does not
yet freeze the evidence classes, visual acceptance surface, settling and
routing interaction, performance evidence, or the authority boundary for
candidate selection.

This checkpoint freezes that contract at the level supported by current
authority. It freezes hard eligibility, deterministic/runtime evidence,
structural preference evidence, visual/manual evidence, settling evidence,
routing/label evidence, viewport roles, performance evidence, compatibility,
provenance, fixture roles, and non-ranking failure semantics. It deliberately
leaves numeric thresholds and candidate-specific results unassessed.

## Exact result and decision

**CASE 1** is selected:

> Production-readiness criteria were not previously complete. Design1
> successfully freezes hard, nonvisual, visual, settling, routing, viewport,
> performance, compatibility, provenance, and fixture-evidence requirements
> without selecting a candidate. The next smallest responsibility is a
> nonvisual Production-readiness evidence / eligibility audit.

**DECISION A** is selected:

```text
PRODUCTION-READINESS DESIGN COMPLETE;
AUDIT CURRENT NONVISUAL EVIDENCE / ELIGIBILITY NEXT
```

The exact next checkpoint is:

`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-READINESS-EVIDENCE-AUDIT1`

It must inventory candidate families, audit frozen nonvisual criteria,
classify evidence completeness, and identify candidate-specific blockers. It
must not select a winner or perform visual acceptance.

## Hacker-movie celebration boundary

```text
Bingo! The Production-readiness evidence layers are separated cleanly.
Yahoo! Production-readiness Design1 is frozen and candidate evaluation can
proceed in bounded stages.
```

These statements celebrate contract integrity and sequencing only. They do
not celebrate a candidate, a visual result, or a solved Initial Placement.
The celebration is evidence-gated and did not influence the reasoning.

## Source and protected-state reconciliation

The e2r-spec start state was:

- HEAD `670713c09b21919e852e90be26fb70cb36a6a6dc`
  (`docs: synthesize LiaisonScape structural assignment research`)
- branch `main`, upstream `origin/main`
- initial dirty state: protected `sessions/E2R-Session-0052.md` only
- Research Synthesis1 `670713c` present: YES
- preceding Interpretation1 `c054dd6`, Rerun1 `e95fcde`, Integrity
  Reconciliation1 `ff5bbc4`, failed Experiment4 `bffd72d`, TA3 witness
  `928c820`, Experiment3 `e797a7c`, and Experiment2 `ae502e9` present

The LiaisonScape start state was:

- HEAD `fd563340625fd3d88dc25baedc93c4f8fe69e5e7`
- branch `main`, upstream `origin/main`
- protected dirty samples only:
  `public/lighthouse-restoration-demo.en.e2r.json` and
  `public/lighthouse-restoration-demo.ja.e2r.json`
- `src/auto-layout.ts` drift from the accepted baseline: none

The following remain preserved and outside this checkpoint:

- Rerun1 research surface and its exact hashes;
- failed Experiment4 research surface as read-only NON-EVIDENCE;
- Experiment2 and Experiment3 surfaces;
- routing preview and residual research shells;
- `ai-knowledge`, including the protected browser diagnostic playbook; and
- all protected Session and Lighthouse sample bytes.

No candidate, witness, TA semantic, source, sample, runtime, UI, routing,
settling, solver, schema, Core, Extension, or `ai-knowledge` change was made.

## Research Synthesis1 authority

[Research Synthesis1](liaisonscape-initial-placement-seed-structural-assignment-research-synthesis1-result.md)
is the immediate authority. It closes the current TA0-TA3 structural-
assignment research scope at `INF-W1` and records:

```text
Lighthouse: G0 > G2 > G1 > G3
Ashen:      G0 > G1, G2 > G1, G0 || G2
K3:         PP-PREF-EQUIVALENT, control only
```

That authority does not select a Production candidate, establish visual
acceptance, establish FP1 superiority, or claim that Initial Placement is
solved. Hard validity, structural preference, visual quality, and runtime
compatibility remain separate layers.

## Existing-criteria inventory

Status below describes the accepted state before this Design1 contract. The
Design1 disposition records how the criterion is treated from this point
forward.

| Criterion area | Existing status | Authority | Design1 disposition |
| --- | --- | --- | --- |
| Hard geometric validity | PARTIAL | TA manifests, GEO-0/GEO-3 research | MUST-PASS hard contract; candidate audit required |
| Candidate distinctness | PARTIAL | placement source/tests and witness checks | MUST-PASS |
| Determinism | PARTIAL | `auto-layout.ts`, placement tests, routing decision | MUST-PASS evidence class |
| Entity-array reorder behavior | PARTIAL | placement tests and placement research | MUST-PASS where semantics require stability |
| Relation-array reorder behavior | PARTIAL | canonical routing decision and tests | MUST-PASS for routing priority behavior |
| Serialization order | PARTIAL | Dataset and routing semantics | preserve public/Dataset order; candidate evidence required |
| Semantic rename behavior | RESEARCH-ONLY | TA correspondence and assignment research | not a universal gate; declare candidate semantics |
| Literal rename stability | ABSENT | no accepted Product requirement | OUT-OF-SCOPE unless separately authorized |
| Runtime fallback | PARTIAL | `initial-entity-placement.ts`, placement research | MUST-PASS runtime safety and documented fallback |
| Settling | RESEARCH-ONLY | bounded settling source/tests | required evidence class; no implementation change |
| Node collision | PARTIAL | placement research/source/tests | MUST-PASS hard geometry where applicable |
| Node-label collision | RESEARCH-ONLY | label placement and routing research | visual evidence required; no threshold frozen |
| Relation-label collision | RESEARCH-ONLY | relation-label/routing research | visual evidence required; no threshold frozen |
| Edge crossing | RESEARCH-ONLY | routing experiments | visual evidence/diagnostic; zero-crossing not required by this design |
| Routing naturalness | RESEARCH-ONLY | routing and visual experiments | visual preference evidence |
| Parallel relation separation | PARTIAL | canonical routing decision | runtime invariant plus visual evidence |
| Self-loop behavior | FROZEN application invariant | accepted self-loop decision/result | preserve behavior; visual evidence still required |
| Viewport fit | PARTIAL | viewport source/tests and placement research | viewport evidence class; exact sizes unfrozen |
| Performance | ABSENT | no accepted budget | evidence required; numeric budget UNFROZEN |
| Persistence / coordinate-save semantics | FROZEN application invariant | coordinate and replacement-safety source/tests | MUST-PASS compatibility |
| Backward compatibility | PARTIAL | migration and Dataset tests | MUST-PASS compatibility evidence |
| Visual acceptance | ABSENT | no frozen Production visual contract | freeze evidence form, not a result |
| Fixture coverage | RESEARCH-ONLY | bounded research fixtures | freeze role coverage; named set remains to be audited |
| Production candidate selection procedure | ABSENT | no accepted selection authority | separate future checkpoint |

Existing research notes are not silently promoted to Production PASS. In
particular, the automatic initial-placement experiment selected a future
research direction but recorded Production implementation as not started.

## Readiness layer model

```text
L0  HARD SAFETY / VALIDITY
L1  DETERMINISTIC / RUNTIME CORRECTNESS
L2  STRUCTURAL PREFERENCE EVIDENCE
L3  VISUAL / HUMAN ACCEPTANCE
L4  PRODUCTION INTEGRATION / COMPATIBILITY
L5  CANDIDATE SELECTION
```

The separation contract is PASS:

- L0 failure blocks eligibility.
- L1 is required evidence, not a structural score.
- L2 is preference and characterization, not a selector.
- L3 is independent human/browser evidence.
- L4 verifies compatibility and runtime integration.
- L5 is reserved for a separately authorized checkpoint.

Passing a lower layer does not imply passing a higher layer. Design1 defines
L0-L4 criteria and reserves L5; it performs no L5 assessment.

## Hard eligibility

Every candidate entering a future audit must satisfy all of these MUST-PASS
gates:

| Gate | Requirement | Authority/status |
| --- | --- | --- |
| HARD-1 | All candidate coordinates are finite numeric values. | source behavior plus geometry evidence; frozen gate |
| HARD-2 | Candidate points are distinct where distinct Nodes are required. | placement/witness semantics; frozen gate |
| HARD-3 | Node-to-candidate assignment is injective. | TA/FP1 witness semantics; frozen gate |
| HARD-4 | Accepted motifs satisfy GEO-0 nondegeneracy. | accepted structural semantics; frozen gate |
| HARD-5 | Accepted motifs satisfy GEO-3 distinct positive neighbor rays when a noncoincident realization exists. | accepted structural semantics; frozen gate |
| HARD-6 | No Node is missing, duplicated, extra, or incompletely assigned. | witness and source integrity; frozen gate |
| HARD-7 | Materialization produces no runtime exception and no invalid numeric state. | runtime/source contract; frozen gate |

These are eligibility gates, not quality scores. No new numeric spacing,
crossing, angle, or performance threshold is invented here. A future audit
must report exact failures rather than converting a soft preference into a
hard gate.

## Determinism and reproducibility

Required future evidence uses the same Dataset bytes, application/source
commit, candidate semantics, algorithm/configuration, and runtime configuration.
The following distinctions are frozen:

| Property | Design1 status |
| --- | --- |
| Exact repeat for frozen input/configuration | MUST-PASS |
| Entity-array reorder behavior | MUST-PASS where semantic graph and Owned Coordinates are unchanged |
| Relation-array reorder behavior | MUST-PASS for canonical routing priority and parallel slot assignment |
| Public serialization/order preservation | MUST-PASS; derived geometry must not reorder Dataset objects |
| Browser/runtime reproducibility | Required evidence on the supported runtime; cross-browser numerical identity is not frozen |
| Semantic rename equivariance | Not a universal requirement; candidate must declare whether its semantics depend on semantic identity |
| Literal rename stability | Not required by current accepted Product semantics; OUT-OF-SCOPE unless separately authorized |

Semantic rename transport and literal rename stability are not interchangeable.
Any candidate that claims either property must provide a precise semantic
contract and evidence for it.

## Structural preference role

The registered normalized motif altitude and `FAN-P1` angular bottleneck remain
**PREFERENCE evidence** under PP-M3. They may be used for candidate
characterization, regression protection, and context in a later evaluation.
They are not MUST-PASS gates and do not select Production.

PP-M3 remains a partial preference relation. No scalar score, weight, average
rank, win count, or cross-fixture aggregate is authorized.

## Visual and human acceptance

Future visual evidence must inspect the fully rendered graph. The qualitative
classification is:

| Visual property | Classification |
| --- | --- |
| Node-node overlap or occlusion | HARD VISUAL FAIL when Nodes cannot be separately read or interacted with |
| Node-label readability | HARD VISUAL FAIL when materially occluded/unreadable; otherwise VISUAL PREFERENCE |
| Relation-label readability | HARD VISUAL FAIL when materially occluded/unreadable; otherwise VISUAL PREFERENCE |
| Accepted motif readability | HARD VISUAL FAIL when the intended motif cannot be followed; otherwise VISUAL PREFERENCE |
| High-fanout readability | VISUAL PREFERENCE |
| Parallel-relation legibility | HARD VISUAL FAIL when relations cannot be distinguished; otherwise VISUAL PREFERENCE |
| Self-loop legibility | HARD VISUAL FAIL when hidden or indistinguishable; otherwise VISUAL PREFERENCE |
| Crossing burden | VISUAL PREFERENCE and diagnostic; zero crossings are not frozen |
| Edge/path naturalness | VISUAL PREFERENCE |
| Local clutter | VISUAL PREFERENCE |
| Global balance | VISUAL PREFERENCE |
| Viewport fit / initial framing | HARD VISUAL FAIL when required content is off-screen/unusable; scale compactness is a preference |

These are qualitative boundaries only. Visual numeric thresholds are not
frozen. The visual evidence form must include the browser, fixture, source
commit, viewport role, screenshots, manual PASS/FAIL notes, and observations.
Cherry-picked favorable views are not valid evidence.

## Settling interaction

Future candidate evidence must capture **both**:

1. the initial seed before bounded settling; and
2. the final state after the accepted settling configuration.

The seed must pass all hard geometry and runtime gates before settling. A
candidate cannot receive credit merely because settling repairs a pathological
seed. Conversely, a transient seed observation must not reject a candidate if
the accepted Product contract explicitly judges only a final settled state;
this Design1 requires both views so that distinction is visible.

Evidence must state whether settling repairs or destroys relevant structure,
whether it is deterministic, and the exact configuration used. No settling
implementation is changed here.

## Routing and label interaction

Placement-only inspection is insufficient for Production readiness. Required
acceptance surfaces are:

- placement-only seed state as a diagnostic;
- fully routed graph including ordinary Relations, parallel Relations, and
  self-loops; and
- fully labeled graph including Node labels and Relation labels.

Both routed and fully labeled views are required for final visual evidence.
The structural seed objective must not act as a proxy for route naturalness,
label readability, edge crossing, self-loop behavior, or local clutter.

The accepted routing boundaries remain in force: canonical Relation identity
ordering, manual route authority, automatic self-loop orientation behavior,
and the distinction between self-loop and ordinary routing. Design1 does not
alter those behaviors.

## Viewport and scale

Future evidence must cover these role-level viewport classes:

- normal desktop workspace;
- narrow desktop or small workspace; and
- another accepted responsive workspace class when the application contract
  requires it.

Exact pixel dimensions, scale limits, and compactness thresholds are
**UNFROZEN**. The contract requires reporting the viewport role and observing
extreme spread, near-collapse, usable zoom, off-screen content, and responsive
fit without inventing breakpoint values.

## Performance

Before Production selection, evidence must record:

- runtime complexity category of candidate generation and settling;
- representative Dataset size and worst accepted sample size;
- absence of pathological hang or unbounded work; and
- bounded settling cost under the accepted configuration.

No benchmark is performed in Design1. No numeric time, memory, Dataset-size,
or iteration budget is currently authoritative; those thresholds are
**UNFROZEN** and may require a later bounded threshold-design responsibility.

## Compatibility and migration

The following are MUST-PASS integration requirements:

- existing Stored/Owned Coordinates remain authoritative and are not silently
  overwritten;
- explicit coordinate save and manual movement retain their existing user-
  intent semantics;
- automatic Derived geometry is not persisted merely because it was generated;
- `coordinatesDirty`, Dataset modified state, and replacement safety preserve
  current semantics;
- Dataset schema and extension boundaries do not change implicitly;
- legacy Dataset and coordinate migration behavior remains compatible;
- malformed or unsupported placement input fails through a documented bounded
  fallback or refusal, without invalid geometry; and
- existing Production initial-placement behavior is not silently replaced by
  a research candidate before a separate implementation checkpoint.

A candidate with saved-coordinate incompatibility cannot proceed to Production
evaluation eligibility until the incompatibility is resolved or explicitly
accepted by a separate authority.

## Hard-gate and preference taxonomy

Each criterion receives exactly one class:

| Class | Meaning |
| --- | --- |
| MUST-PASS | Failure makes the candidate `NOT PRODUCTION-ELIGIBLE`. |
| PREFERENCE | Characterizes quality; worse evidence does not automatically disqualify. |
| DIAGNOSTIC | Recorded for explanation or regression context, not eligibility. |
| OUT-OF-SCOPE | Not required by current accepted Product semantics. |
| UNFROZEN | The need is recognized, but its exact threshold or surface needs a bounded follow-up. |

No criterion may be both MUST-PASS and PREFERENCE. PP-M3 is PREFERENCE, never
MUST-PASS and never a selector.

## Failure semantics

- Any failed MUST-PASS gate produces `NOT PRODUCTION-ELIGIBLE`.
- A worse PREFERENCE does not automatically disqualify a candidate.
- `PP-INCOMPARABLE` is preserved and passed to independent visual, runtime,
  compatibility, and provenance evidence.
- `PP-PREF-EQUIVALENT` does not create a winner.
- No lexical tie-break, fixture-win count, average rank, or weighted aggregate
  may resolve an evidence incomparability unless a future specification
  explicitly authorizes it.

## Candidate readiness states

The following non-ranking state machine is frozen:

```text
PR-0  UNASSESSED
  -> PR-1  HARD-ELIGIBLE
  -> PR-2  NONVISUAL-EVIDENCE-COMPLETE
  -> PR-3  VISUAL-EVIDENCE-COMPLETE
  -> PR-4  INTEGRATION-EVIDENCE-COMPLETE
  -> PR-5  PRODUCTION-SELECTION-ELIGIBLE
```

Transitions require complete evidence for the preceding state, not a policy
rank. A failed MUST-PASS gate returns the candidate to an ineligible state
until corrected and re-audited. `PR-5` means selection may be considered; it
does not mean `SELECTED`.

## Fixture and evidence coverage

Future candidate evidence must use the same frozen fixture set for all
candidate comparisons. The required fixture roles are:

- realistic ordinary fixture;
- motif-rich fixture;
- high-fanout fixture;
- sparse fixture;
- dense fixture;
- symmetry/control fixture; and
- larger-size fixture.

A fixture may satisfy multiple roles. The named samples Lighthouse
Restoration, Ashen Crown, Berlin Wall, Apollo 11, Titanic, and K3 are not all
declared mandatory by this Design1; the next evidence audit must map live
accepted fixtures to the roles. K3 is a symmetry/integrity control and is not
substantive visual-quality evidence.

## Visual acceptance evidence form

When visual evidence is eventually collected, each record must include:

- real browser/runtime identity;
- fixed fixture and exact Dataset bytes/hash;
- application/source commit;
- candidate/witness and semantic contract;
- viewport role and actual viewport dimensions;
- seed and post-settle captures;
- routed and fully labeled views;
- before/after screenshots where comparison is intended;
- manual PASS/FAIL decisions for hard visual failures;
- preference and observation notes kept separate; and
- artifact hashes and no cherry-picking declaration.

Design1 performs no visual acceptance.

## PP-INCOMPARABLE and PP-PREF-EQUIVALENT

For `PP-INCOMPARABLE`:

1. preserve the relation;
2. continue to independent visual, runtime, compatibility, and provenance
   criteria;
3. do not scalarize;
4. do not break the tie lexically; and
5. do not count fixture wins.

For `PP-PREF-EQUIVALENT`, do not invent a winner. Geometry aliases may reuse
evidence only when the accepted downstream rendered, settled, routed, and
labeled state is provably identical under the relevant acceptance surface.

## Alias evidence reuse

Literal geometry aliases may share evidence provenance for the exact shared
surface, but semantic identity and provenance remain distinct. If downstream
settling, routing, labels, viewport, runtime, or compatibility diverge, the
alias must be evaluated separately. An identity or orbit control is not
independent quality evidence merely because it has a different mapping.

## Provenance contract

Every future readiness record must identify:

- candidate or witness ID;
- semantic contract and version;
- operational materializer/version;
- source/application commit;
- fixture authority and content hash;
- runtime/application configuration;
- browser/runtime where relevant;
- viewport and settling configuration;
- routing and label configuration;
- evidence type and automated/manual method;
- status: PASS, FAIL, INCOMPARABLE, or EQUIVALENT; and
- artifact hashes where applicable.

## Required evidence class table

| Evidence class | Required before selection? | Automated/manual | Existing evidence reusable? | Missing work |
| --- | --- | --- | --- | --- |
| E-HARD | YES | Automated | PARTIAL: GEO-0/GEO-3 and manifests | audit every candidate against HARD-1 to HARD-7 |
| E-DETERMINISM | YES | Automated plus runtime evidence | PARTIAL | complete exact-repeat, ordering, and supported-runtime audit |
| E-STRUCTURAL | YES as preference context | Automated | RESEARCH-ONLY / PARTIAL | candidate-level PP-M3 characterization; no selector |
| E-VISUAL | YES where Production acceptance requires it | Manual browser evidence | NO | design and execute visual acceptance later |
| E-SETTLING | YES | Automated capture plus manual observation | NO / RESEARCH-ONLY | capture seed/post-settle interaction |
| E-ROUTING | YES | Automated geometry diagnostics plus manual browser evidence | RESEARCH-ONLY | inspect full routed/labeled graph |
| E-VIEWPORT | YES | Manual browser evidence | PARTIAL | cover frozen viewport roles; thresholds remain unfrozen |
| E-PERFORMANCE | YES | Automated | NO | measure representative/worst samples after budget design |
| E-COMPAT | YES | Automated tests plus focused integration evidence | PARTIAL | audit candidate-specific persistence/migration/fallback |
| E-PROVENANCE | YES | Automated record | PARTIAL: Rerun1 hashes reusable | record complete candidate/runtime/configuration provenance |

## Current evidence reuse audit

| Existing evidence | Classification | Boundary |
| --- | --- | --- |
| GEO-0/GEO-3 and TA0-TA3 manifests | PARTIALLY REUSABLE | hard-floor and provenance inputs; not candidate Production PASS |
| Experiment2/3/4 PP-M3 results | RESEARCH-ONLY / PARTIALLY REUSABLE | structural characterization only; no ranking or selection |
| K3 orbit control | REUSABLE CONTROL | integrity/orbit invariance only; not visual quality |
| Rerun1 fixture and artifact hashes | REUSABLE PROVENANCE | exact research provenance; does not prove downstream readiness |
| Current LiaisonScape tests | PARTIALLY REUSABLE | runtime regression evidence; not a complete candidate contract |
| Routing and visual previews | RESEARCH-ONLY | observations and hypotheses; no frozen visual PASS |
| Automatic initial-placement experiment | RESEARCH-ONLY / PARTIAL | preserves Derived/Owned invariants and candidate history; Production implementation not started |

No research-only evidence is converted automatically into Production PASS.

## Production-readiness gap table

| Evidence class | Current status | Smallest prerequisite |
| --- | --- | --- |
| E-HARD | PARTIAL | candidate inventory and HARD-1 to HARD-7 audit |
| E-DETERMINISM | PARTIAL | candidate-specific repeat/order/runtime evidence |
| E-STRUCTURAL | PARTIAL | reuse PP-M3 as preference characterization only |
| E-VISUAL | MISSING | later visual acceptance execution after nonvisual prerequisites |
| E-SETTLING | MISSING | seed/post-settle evidence protocol execution |
| E-ROUTING | MISSING | full routed/labeled acceptance evidence |
| E-VIEWPORT | UNFROZEN | map accepted viewport roles and later execute them |
| E-PERFORMANCE | UNFROZEN | define budget or bounded qualitative threshold before measurement |
| E-COMPAT | PARTIAL | candidate-specific migration/persistence/fallback audit |
| E-PROVENANCE | PARTIAL | complete candidate evidence records |

Criteria are now frozen as a contract, but candidate eligibility is unknown.
This is why visual acceptance is not selected as the immediate next step.

## Prerequisite DAG

```text
criteria freeze
    |
    v
hard eligibility + provenance eligibility
    |
    v
nonvisual evidence completeness
    |
    v
visual + settling + routing/label evidence
    |
    v
viewport + performance + integration compatibility
    |
    v
Production-selection eligibility
    |
    v
separate Production candidate selection
```

The graph is acyclic. Candidate selection is not a transition from a better
score; it is a separately authorized decision after evidence completeness.

## Candidate-selection boundary

Reserve, but do not start automatically:

`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-CANDIDATE-SELECTION1`

A candidate may not be selected before all MUST-PASS criteria pass, required
evidence classes are complete, provenance is exact, runtime/integration
compatibility is established, required visual evidence is complete, and
candidate-specific semantic blockers are cleared. No candidate is at PR-C1 or
higher in this Design1.

## Claim levels

| Level | Meaning | Supported here |
| --- | --- | --- |
| PR-C0 | Criterion/source fact and frozen contract | YES |
| PR-C1 | Candidate satisfies one frozen criterion | NO |
| PR-C2 | Candidate evidence class is complete | NO |
| PR-C3 | Candidate is Production-evaluation eligible | NO |
| PR-C4 | Candidate is Production-selection eligible | NO |
| PR-C5 | Candidate is selected | NO |

## Candidate-specific semantic blockers

TA2/TA3 responsibility uses `R(V)=(m(V),o(V),s(V))`, and current TA2 v1
overlap semantics make `o(V)` redundant. Research Synthesis1 records this as
a semantic-design follow-up that does not invalidate existing research
evidence.

It is **not a global Design1 blocker**. If a future TA2/TA3-derived candidate
depends materially on that responsibility semantics, the issue becomes a
candidate-specific Production blocker and must be closed or explicitly
accepted before that candidate can reach PR-3 or later. Design1 does not
redesign `o(V)`.

## Known boundaries preserved

```text
Initial Placement not solved
FP1 visual state unassessed
TA0 not universal winner
TA3 Forward not universally inferior
TA3 Reverse semantic identity distinct from TA2 motif
PP-INCOMPARABLE is real
K3 is control-only
hard-valid != visually good
structural objective != Production selector
```

## Central questions Q1-Q43

| ID | Answer |
| --- | --- |
| Q1 | No. Sufficient Production Initial Placement criteria were not previously frozen as one contract. |
| Q2 | Hard geometry, Derived/Owned persistence boundaries, parts of determinism, migration, routing order, and self-loop behavior exist in accepted source/results. |
| Q3 | TA0-TA3 structural evidence, visual/routing observations, and bounded placement policies are partial or research-only. |
| Q4 | Complete visual, settling, performance, provenance, fixture-role, and candidate-selection criteria were absent or incomplete. |
| Q5 | HARD-1 through HARD-7 are the mandatory hard gates. |
| Q6 | Normalized altitude, FAN-P1, and PP-M3 are structural PREFERENCE evidence, not hard gates. |
| Q7 | No. PP-M3 does not select Production. |
| Q8 | Preserve `PP-INCOMPARABLE`; continue independent evidence and never scalarize or count wins. |
| Q9 | Preserve `PP-PREF-EQUIVALENT`; do not invent a winner. |
| Q10 | Require exact repeat, specified ordering behavior, stable public order, bounded fallback, and supported-runtime reproducibility. |
| Q11 | Not as a universal gate; require a declaration only when candidate semantics depend on semantic identity. |
| Q12 | No current Product requirement; literal rename stability is out of scope unless separately authorized. |
| Q13 | Exception, invalid numeric state, malformed/incomplete assignment, or failed hard gate disqualifies the candidate from eligibility. |
| Q14 | Nodes, Node labels, Relation labels, motifs, fan-out, parallel relations, self-loops, crossings, paths, clutter, balance, and viewport fit. |
| Q15 | Direct unreadable/occluded content and unusable viewport are hard visual failures; naturalness, clutter, balance, crossings, and most legibility qualities are preferences. |
| Q16 | No. Visual numeric thresholds are unfrozen. |
| Q17 | Both seed and post-settle states must be captured. |
| Q18 | Yes. Placement-only is diagnostic; routed and fully labeled views are required. |
| Q19 | Normal desktop, narrow/small workspace, and other accepted responsive roles as applicable; exact dimensions are unfrozen. |
| Q20 | Complexity category, representative/worst sample, no pathological hang, and bounded settling evidence; numeric budget is unfrozen. |
| Q21 | Stored/Owned Coordinates, explicit save semantics, Derived non-persistence, dirty/replacement safety, schema, legacy behavior, and bounded fallback. |
| Q22 | No, not until resolved or separately accepted. |
| Q23 | Realistic ordinary, motif-rich, high-fanout, sparse, dense, symmetry/control, and larger-size roles. |
| Q24 | No. Lighthouse, Ashen, and K3 are not alone sufficient without role mapping and broader evidence audit. |
| Q25 | No. K3 is control-only, not visual-quality evidence. |
| Q26 | Yes, only for a provably identical downstream acceptance surface. |
| Q27 | When semantics, settling, routing, labels, viewport, runtime, or compatibility can diverge. |
| Q28 | Candidate/witness, semantics, materializer, source, fixture/hash, runtime, browser, viewport, settling, routing/labels, evidence type/status, and artifact hashes. |
| Q29 | Hard-floor inputs, provenance hashes, current tests, K3 control, and selected structural records are partially reusable within their boundaries. |
| Q30 | Experiment2/3/4 PP-M3 outcomes, visual/routing previews, and placement experiments remain research-level. |
| Q31 | No. TA2 `o(V)` redundancy does not block all candidates. |
| Q32 | Yes. It may block a materially dependent TA2/TA3-derived candidate specifically. |
| Q33 | PR-0 through PR-5 as evidence-completeness states are frozen. |
| Q34 | Criteria -> hard/provenance -> nonvisual -> visual/settling/routing -> viewport/performance/integration -> eligibility -> selection. |
| Q35 | All hard gates pass and required hard/provenance/nonvisual evidence is complete. |
| Q36 | All required evidence classes, compatibility, visual requirements, and candidate-specific blockers are complete after PR-3/PR-4. |
| Q37 | No. Candidate selection is not performed now. |
| Q38 | No weighted or aggregate win rule is authorized. |
| Q39 | Candidate hard/determinism/structural/compatibility/provenance audits, visual, settling, routing, viewport, and performance evidence remain incomplete or unfrozen. |
| Q40 | Nonvisual Production-readiness evidence and eligibility audit. |
| Q41 | It establishes which candidates can enter later visual/integration evaluation without prematurely spending effort on ineligible candidates. |
| Q42 | `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-READINESS-EVIDENCE-AUDIT1`. |
| Q43 | No. The next checkpoint is recorded but not auto-started. |

## Hypotheses H1-H16

| ID | Assessment |
| --- | --- |
| H1 | Supported: accepted Production-readiness criteria were not sufficiently frozen. |
| H2 | Supported: hard safety and structural preference are separate layers. |
| H3 | Supported: PP-M3 is useful structural evidence but insufficient for selection. |
| H4 | Supported: visual quality is an independent mandatory evidence class where acceptance requires it. |
| H5 | Supported: settling interaction must be represented explicitly. |
| H6 | Supported: routing and labels can change perceived quality after seed placement. |
| H7 | Supported: readiness states must track evidence completeness, not rank. |
| H8 | Supported: PP-INCOMPARABLE must survive without scalarization. |
| H9 | Supported: aliases can reuse evidence only while downstream acceptance state is identical. |
| H10 | Supported: provenance must include source, fixture, runtime, and configuration. |
| H11 | Supported: K3 protects integrity/orbit reasoning but is not visual-quality evidence. |
| H12 | Supported: candidate-specific semantic follow-ups need not block the global readiness design. |
| H13 | Supported: performance evidence is required even though its numeric budget is unfrozen. |
| H14 | Supported: current structural research is partially reusable without becoming Production acceptance. |
| H15 | Supported: candidate selection is premature until prerequisites close. |
| H16 | Supported: evidence inventory/eligibility audit is the smallest next responsibility after criteria freeze. |

## Falsification N1-N17

| ID | Result |
| --- | --- |
| N1 | Not triggered: accepted docs did not contain a complete contract; criteria design was required. |
| N2 | Not triggered: no proposed hard criterion contradicts accepted Product behavior. |
| N3 | Not triggered: structural preferences remain PREFERENCE, not MUST-PASS. |
| N4 | Not triggered: current hard safety and persistence boundaries remain mandatory. |
| N5 | Not triggered: PP-INCOMPARABLE is preserved. |
| N6 | Not triggered: PP-PREF-EQUIVALENT does not produce a winner. |
| N7 | Not triggered: visual acceptance is explicitly incomplete. |
| N8 | Not triggered: settling/routing/label effects are explicitly included as evidence classes. |
| N9 | Not triggered: no unsupported numeric threshold was invented. |
| N10 | Not triggered: K3 is control-only. |
| N11 | Not triggered: alias reuse is conditional on downstream identity. |
| N12 | Not triggered: TA2 `o(V)` affects only materially dependent future candidates. |
| N13 | Not triggered: research-only evidence is not automatic Production PASS. |
| N14 | Not triggered: no candidate selection occurs in Design1. |
| N15 | Not triggered: no weighted score or win count is introduced. |
| N16 | Not triggered: Production source change was not required. |
| N17 | Not triggered: protected state was preserved. |

## Roadmap and knowledge boundary

The roadmap is updated minimally to record the criteria freeze, hard/
preference/visual/runtime separation, evidence classes, prerequisite ordering,
deferred candidate selection, and the exact next checkpoint. Unrelated
priorities are not reordered.

The following reusable principles are recorded as a **Knowledge Candidate: YES**
in this result document only:

- define Production readiness before selecting a Production candidate;
- keep hard validity, structural preference, visual acceptance, and runtime
  compatibility distinct;
- preserve partial-preference incomparability;
- reuse research evidence without automatically promoting it to acceptance; and
- track readiness by evidence completeness rather than aggregate ranking.

No `ai-knowledge` file is modified or promoted by this checkpoint.

## Validation

No browser, runner, objective, visual acceptance, benchmark, new clone, or
Production implementation was run or changed for Design1.

Read-only application gates were run against Original LiaisonScape:

- `npm.cmd test`: PASS, 280/280;
- `npm.cmd run lint`: PASS;
- `npm.cmd run build`: PASS;
- `git diff --check`: PASS.

e2r-spec gates:

- `npm.cmd run validate`: PASS;
- `git diff --check`: PASS.

## Production boundary

- Production candidate selected: **NO**
- Candidate PR-C1+ assessed: **NO**
- Production source changed: **NO**
- Samples changed: **NO**
- Witnesses changed: **NO**
- TA semantics changed: **NO**
- Objective rerun: **NO**
- Visual acceptance: **NO**
- Benchmark: **NO**
- New clone: **NO**
- FP1/F2 changed: **NO**
- Solver changed: **NO**
- Settling/routing/labels/UI changed: **NO**
- Dataset/Core/Extension/schema changed: **NO**
- Push/tag/release/deploy/publication: **NONE**

## Final decision

Production-readiness Design1 is complete. Candidate evaluation may proceed only
through the bounded evidence audit named above. The next checkpoint is recorded
and the process stops here; it is not auto-started.
