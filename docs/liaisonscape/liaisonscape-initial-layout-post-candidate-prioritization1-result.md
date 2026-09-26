# LiaisonScape Initial-Layout Post Candidate Prioritization 1

Date: 2026-09-11

Status: CHEAP SIGNAL IS LIGHTWEIGHT; QUALITY-PRESERVING PRIORITIZATION NOT YET ESTABLISHED

## Scope and baseline

This checkpoint evaluates a lightweight candidate-priority and dependency-risk
guard for the diagnostic `post-structural-relaxation-v1` search. The reference
is the existing `finalist-limit=2 + omit-fine` search. The experiment is
single-Node relaxation only and does not change Product initial placement.

The diagnostic mode is enabled only with:

```text
E2R_RELAXATION_PRIORITIZATION=cheap-ranking
E2R_RELAXATION_PRIORITY_TOP_K=2
```

The audit mode adds:

```text
E2R_RELAXATION_PRIORITIZATION_AUDIT=1
E2R_RELAXATION_DEPENDENCY_TRACE=1
```

With the mode unset, the existing search is unchanged. In prototype mode,
cheap geometry and existing pressure information only decide which candidates
are sent to authoritative full presentation evaluation. Accepted moves and
the selected result still come from full presentation evaluation. The cheap
signal is not a replacement quality authority.

## Actual candidate and signal cost

The current single-Node `omit-fine` relaxation generates eight directions at
each of two steps for each target Node. On the canonical Lighthouse and
Titanic examples, this produced 160–208 hard-feasible candidate plans in
20–26 Node/step groups before dynamic search-state effects.

The priority signal uses no new routing, Relation-label placement, replay, or
renderer call. It compares straight-edge crossings, incident edge-length
change, short-hop and long-edge penalties, local Node clearance, existing
pressure weight, and a bounded proximity check from the moved Node's segment
to already-derived remote route samples. The latter is a risk estimate only;
it is not used as a rejection proof.

Audit planning cost was 5.5–9.0 ms per reviewed fixture/locale, or roughly
0.03–0.05 ms per considered plan. This is materially below the approximately
23–25 ms cost of one full presentation evaluation and avoids repeating the
previous 9.5–11.5 ms local-screen evaluator structure.

## Audit result

The existing full search was used as ground truth. `top-k` recall below is the
fraction of full-improving candidate decisions whose cheap rank was within the
specified rank. The guard retained candidates whose estimated dependency risk
was at least 3, even when they were outside top-2.

| Fixture / locale | Plans considered | Full-improving decisions | Top-1 recall | Top-2 recall | Top-4 recall | Guard-retained | Remote-propagation decisions / retained |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Lighthouse EN | 160 | 30 | 10.0% | 16.7% | 40.0% | 50 | 26 / 23 |
| Lighthouse JA | 160 | 27 | 14.8% | 33.3% | 55.6% | 48 | 10 / 8 |
| Titanic EN | 208 | 38 | 15.8% | 36.8% | 71.1% | 12 | 37 / 8 |
| Titanic JA | 192 | 17 | 5.9% | 17.6% | 64.7% | 33 | 69 / 37 |

The signal has some directional information, especially for Titanic EN at
top-4, but it is not stable across locale or fixture. The low Lighthouse EN
and Titanic JA recall is material. The remote guard also does not reliably
identify all remote-propagation-sensitive candidates: Titanic EN retained only
8 of 37 such audit decisions, while Titanic JA retained 37 of 69.

## Bounded prototype result

The prototype retained top-2 per Node/step group plus the risk guard. It did
not bypass full validation for retained candidates, and its result remains a
diagnostic search result only.

| Fixture / locale | Baseline wall / full evals | Prototype wall / full evals | Full-eval reduction | Wall reduction | Baseline score | Prototype score | Score change |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Lighthouse EN | 11,195 ms / 226 | 8,565 ms / 173 | 23.5% | 23.5% | 69,923 | 72,818 | +4.1% |
| Lighthouse JA | 11,355 ms / 232 | 8,372 ms / 172 | 25.9% | 26.3% | 43,189 | 43,223 | +0.1% |
| Titanic EN | 14,023 ms / 272 | 7,214 ms / 153 | 43.8% | 48.6% | 1,731 | 2,087 | +20.6% |
| Titanic JA | 13,594 ms / 279 | 8,285 ms / 178 | 36.2% | 39.0% | 1,023 | 1,076 | +5.1% |

The prototype considered 160–208 plans and sent 64–90 plans to the priority
stage, skipping 70–144 full validations. The priority-planning overhead was
approximately 7–12 ms per run. Selected results retained zero reported
crossings, Relation-label route hits, label-near metrics, label overlap, and
Node overlap in these machine runs; those hard metrics do not establish
human-observed Post quality. Selected positions changed from the baseline,
so machine score alone cannot establish quality retention.

## Attribution and human gate

The experiment confirms that candidate prioritization can reduce full
presentation work without invoking the renderer approximation itself. It does
not establish that the selected cheap-ranked path preserves the human-accepted
Post direction. The Lighthouse EN and Titanic EN score changes, together with
the audit recall variation, are sufficient to keep an Actual Product human
comparison mandatory for any future retained candidate.

No Actual Product visual acceptance was performed for this diagnostic result.
The required future review remains current versus omit-fine Post versus the
candidate on Lighthouse EN/JA and Titanic EN/JA, including Node cohesion,
spacing, spread, viewport fit, Node-label and Relation-label readability,
crossing/crowding, and candidate-only regressions. Existing parallel Edge,
long Relation-label, Self-loop angle, and connector/rendering issues remain
downstream presentation-track observations and were not changed here.

## Research direction

```text
cheap signal cost                  = promisingly low
top-2 improvement recall            = insufficient and fixture/locale-sensitive
top-4 improvement recall            = insufficient for a safe gate
dependency guard                   = useful as a risk signal, not a safe reject
full evaluation reduction          = 23.5–43.8% in this probe
net wall-time effect               = 23.5–48.6% faster in this probe
selected-result quality evidence   = machine-only; positions differ; human review required
prototype disposition              = RETUNE OR ALTERNATIVE
preferred next direction           = full-evaluation cost reduction or adaptive fine-pass
roughly 2-second planning target   = not approached; prototype remains 7.2–8.6 seconds
Initial Layout Release blocker     = STILL BLOCKED
Product default adoption           = HOLD
Product default behavior           = UNCHANGED
```

The evidence does not justify returning the cheap signal to final quality
authority, widening the guard ad hoc, or restoring the parked coarse
objective. A next experiment should either make the expensive presentation
evaluation itself cheaper while preserving its authority, or use an adaptive
fine-pass whose recall is measured against the same full-search ground truth.
The current priority prototype is not a reason to claim Post equivalence or to
connect a research candidate to the normal Product initial-placement path.

## Preserved boundaries

- Product default, Product adoption, and normal Product initial placement are
  unchanged.
- Stored/mixed/coordinate-less authority, Derived ownership, dirty-state, Save
  Coordinates, same-payload reopen, and fallback contracts are unchanged.
- Routing, Relation-label, Self-loop, connector, and renderer authority remain
  downstream presentation responsibilities.
- Coarse remains parked and is not restored as quality authority.
- No known presentation defect was fixed, and no App.tsx refactor was done.
- Canonical fixtures, historical Fresh evidence, Fresh12 canonical Human
  Review, and governed lineage were not changed.
- No push, tag, release, deploy, or publication was performed.
