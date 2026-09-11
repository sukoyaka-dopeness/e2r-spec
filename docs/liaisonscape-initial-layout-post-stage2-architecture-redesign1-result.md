# LiaisonScape Initial-Layout Stage-2 Architecture Redesign 1

Date: 2026-09-12

Status: REUSABLE EXACT DEPENDENCY CONTRACT NOT ESTABLISHED; PIVOT REQUIRED; RELEASE BLOCKER REMAINS

## Scope and retained reference

This checkpoint investigates whether the Product presentation evaluator can
expose an exact or conservative reusable dependency contract for a Node move.
The goal is to reduce repeated authoritative evaluation without changing
original sequential acceptance semantics or moving routing/label authority into
Initial Layout.

The retained ECR3 reference was audited on the six canonical coordinate-less
cells: Lighthouse EN/JA, Titanic EN/JA, and Apollo EN/JA. The audit used the
existing full presentation evaluator, original candidate order, adaptive
prioritization in full-audit mode, and the existing dependency trace. It did
not re-adopt incremental replay as an authority.

## Dependency closure audit

For each hard-feasible relaxation candidate, the audit compared the full
presentation result with a replay that reused the unchanged route prefix before
the earliest traced dirty route and recomputed the remaining suffix. This is a
dependency-closure probe, not a quality shortcut. A skipped candidate was not
treated as non-improving.

| Fixture / locale | Candidates | Route changed | Remote route propagation | Exact replay | Reused prefix / replayed suffix route items |
| --- | ---: | ---: | ---: | ---: | ---: |
| Lighthouse EN | 143 | 143 (100.0%) | 26 (18.2%) | 44 (30.8%) | 783 / 1,219 |
| Lighthouse JA | 146 | 146 (100.0%) | 10 (6.8%) | 44 (30.1%) | 807 / 1,237 |
| Titanic EN | 186 | 179 (96.2%) | 37 (19.9%) | 46 (24.7%) | 750 / 1,482 |
| Titanic JA | 193 | 186 (96.4%) | 69 (35.8%) | 75 (38.9%) | 863 / 1,453 |
| Apollo EN | 140 | 140 (100.0%) | 46 (32.9%) | 50 (35.7%) | 475 / 1,065 |
| Apollo JA | 131 | 131 (100.0%) | 22 (16.8%) | 35 (26.7%) | 460 / 981 |

Exactness was only 24.7–38.9%. Every mismatch in this audit was attributed by
the existing comparator to `first-route-geometry`. This is earlier than the
Relation-label or Node-label stages, so widening only label closure cannot
repair the mismatch. A representative Titanic EN mismatch reused route `r4`
as an apparently unchanged prefix, but the full and replayed first-pass route
geometry still diverged. The trace therefore does not yet capture a sufficient
route-decision dependency boundary.

The reused prefix represented only approximately 30.1–39.5% of the profiled
route items; approximately 60.5–69.9% remained in the replayed suffix. Because
the evaluator processes occupied paths in order, a changed route can alter the
inputs of later routes, which then feed Relation-label placement and Node-label
feedback. Remote propagation was present in every locale, with accepted remote
propagation also observed in five of the six cells.

## Runtime potential

The audit's evaluator-only timings show only a modest potential even before
the exactness failure is considered:

| Fixture / locale | Full audited evaluator ms | Replay evaluator ms | Replay time reduction |
| --- | ---: | ---: | ---: |
| Lighthouse EN | 2,247 | 2,057 | 8.4% |
| Lighthouse JA | 2,321 | 2,097 | 9.7% |
| Titanic EN | 3,087 | 2,850 | 7.7% |
| Titanic JA | 2,679 | 2,452 | 8.5% |
| Apollo EN | 1,305 | 1,139 | 12.7% |
| Apollo JA | 1,254 | 1,143 | 8.9% |

These are diagnostic full-vs-replay evaluator timings and include trace/replay
instrumentation; they are not a Product startup claim. They indicate that a
partial closure is not sufficiently small or exact to be a release reuse path.
An exact closure can be obtained by invalidating the entire ordered route
pipeline and all downstream labels/feedback, but that is the full evaluator
and has no runtime benefit.

## Contract decision

The current evidence establishes the following boundary:

```text
exact reusable route closure           = not established
conservative closure with benefit      = not established
observed partial replay exactness      = 24.7%–38.9%
observed replay evaluator reduction    = 7.7%–12.7%
safe exact fallback                    = recompute the full ordered pipeline
```

The prior incremental replay failure is explained by the same dependency
shape: a Node move can affect an early route decision, and the ordered
occupied-path state then affects remote routes and downstream label feedback.
The existing trace identifies changed outputs after the fact, but it does not
provide a pre-evaluation closure certificate that is safe for skipping.

Because the full-audit arm does not prune or reorder, its selected trajectory,
selected digest, score, and hard metrics remain the ECR3 reference result in all
six cells. No new selected output was introduced, and the ECR3 Actual Product
human ACCEPT remains limited to ECR3 rather than being extended to a new
candidate.

## Decision and next architecture direction

```text
dependency contract                  = NOT ESTABLISHED
exactness                            = insufficient for partial closure
closure size                         = usually majority of ordered route work
runtime potential                    = modest and instrumentation-bound
new authoritative-call reduction     = NONE adopted
human review                         = not required; no new candidate retained
disposition                          = PIVOT
```

The next direction should be bounded state-space or Stage-2 architecture
redesign rather than further ad hoc replay widening. A viable future design
needs either a formally reusable route-decision dependency contract, or a
search formulation whose authoritative state is independently composable. Full
Product presentation remains the quality authority until such a contract is
proven. No new provider, shortcut, or Product default candidate is proposed in
this checkpoint.

## Preserved boundaries and validation

- Original sequential acceptance semantics and full Product presentation
  authority were preserved.
- Product default/adoption, canonical samples, accepted coordinate
  canonicalization, stored/mixed/coordinate-less authority, and persistence
  semantics were not changed.
- Routing, Relation-label, Node-label, Self-loop, connector, glyph, and CSS
  authority remain downstream presentation responsibilities.
- ECR3 Actual Product human ACCEPT was not extended to a new candidate.
- Historical Fresh evidence, Fresh12 canonical Human Review, and governed
  lineage were not changed.
- No push, tag, release, deploy, or publication was performed.

Validation:

- six-cell dependency-closure audit: PASS;
- LiaisonScape suite: 368/368 PASS;
- lint: PASS;
- production build: PASS;
- E2R-SPEC `npm run validate`: PASS;
- staged diff check: PASS.
