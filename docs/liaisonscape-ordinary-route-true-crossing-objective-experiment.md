# LiaisonScape Ordinary-Route True-Crossing Objective Experiment

Date: 2026-08-31

Status: bounded application experiment; non-normative

## Exact result

`TRADE-OFF — CROSSING REDUCTION COMPETES WITH NODE / LABEL SAFETY`

Root-cause classification: **CASE 4 — TRUE CROSSING PREFERENCE CAUSES
HARD-SAFETY TRADE-OFFS**.

True interior transverse crossing is a materially missing router signal, but
the tested threshold-free policy does not establish a usable Production
objective. On both English and Japanese Lighthouse, sequential X1 and the
full-context oracle reproduce Production exactly. The previously proven
crossing-reducing offsets remain available, but X1 rejects them because their
temporary routes intersect more provisional Node-label rectangles than the
Production winners. Future-route visibility is therefore not the limiting
factor in the target fixture.

Dense control does reduce H2 under X1, from `129` to `105` sequentially and
`104` with frozen full context, but changes `9/45` and `11/45` routes,
respectively, creates new crossing identities, and reduces minimum foreign-
Node clearance. One bounded repair reaches H2 `103` at much higher diagnostic
cost. That is not a stable Production boundary.

No Production source, routing, placement, label, candidate set, sample,
schema, or release state was changed. The selected next bounded checkpoint is:

`E2R-LIAISONSCAPE-ORDINARY-ROUTE-NODE-LABEL-CROSSING-PRIORITY-SEMANTICS-EXPERIMENT1`

It is selected only and is not started here.

## Preceding result and boundary

The preceding [Routing-Crossing Mixed-Cause Prioritization](liaisonscape-routing-crossing-mixed-cause-prioritization.md)
selected P1, router objective first. Its frozen-context candidate oracle found
that the current candidate set already contains two safe one-route
substitutions: beacon/lighthouse offset `120` reduces English Lighthouse H2 by
two, and Sofia/Archive offset `-120` reduces H2 by three. Fresh final routing
and label passes retained both benefits without final H1, H3, or H4 regression.

This checkpoint tested whether true-crossing-aware arbitration can select such
geometry without an arbitrary numeric crossing penalty. It did not change the
Production score, candidate enumeration, route order, self-loop handling,
parallel slots, drag behavior, Node positions, or samples. The temporary
harness was removed after measurement.

## Starting and protected state

LiaisonScape started on `main` at
`fd563340625fd3d88dc25baedc93c4f8fe69e5e7`, tracking `origin/main` and five
commits ahead. Its only dirty paths were the existing unaccepted EN/JA sample
candidates:

- `public/lighthouse-restoration-demo.en.e2r.json`
- `public/lighthouse-restoration-demo.ja.e2r.json`

They were not accepted, edited, overwritten, discarded, staged, or committed.
`e2r-spec` started on `main` at
`d891373b0bbdc19eda2e6baf5eb24c68db82cfee`, 36 commits ahead of
`origin/main`. Protected dirty
`sessions/E2R-Session-0052.md` and
`ai-knowledge/playbooks/e2r-edge-cdp-browser-diagnostic.md` were not edited,
staged, restored, or reset. `seededPositions` was not touched.

## Live candidate and objective model

The live model was reconfirmed from `viewport.ts` and presentation order in
`App.tsx`:

- ordinary non-parallel candidates: offset `0`, then preferred/opposite
  12-unit steps through `±192`; 33 candidates;
- parallel candidates: signed base `40 + 24 * (rank - 1)`, then 16
  preferred/opposite 12-unit expansions; 33 candidates;
- candidate paths: 41 samples;
- order: base first, then preferred and opposite at each increasing step;
- score: foreign-Node squared pressure within radius 60, multiplied by 100;
  sustained occupied-path proximity adds 10000; provisional-label pressure
  adds 100000 per hard intersection and uses a 20-unit halo; absolute offset
  adds `0.01 * abs(offset)`;
- tie: strict `<`, preserving the first equal-score candidate;
- parallel: retain canonical physical-side preference among fully safe
  candidates;
- manual offset: bypass automatic arbitration;
- order: fixed/self-loop routes first, then automatic ordinary routes in
  canonical source/target/id order.

True transverse crossings are directly scored: **NO**. Future automatic
routes are visible when an earlier route is selected: **NO**.

## Baseline and crossing definition

Mode A reproduced the English Lighthouse baseline identically across repeated
runs:

- H0/H1/H2/H3/H4: `0/0/7/4/0`;
- route total: `1459.126`;
- minimum foreign-Node clearance: `18.615`;
- straight/curved ordinary routes: `6/6`;
- deterministic routes and H2 identities: **YES**.

The exact H2 set was:

1. `beacon-lighthouse-installed-in | clara-maya`
2. `beacon-lighthouse-installed-in | daniel-clara`
3. `beacon-lighthouse-installed-in | thomas-maya-friends`
4. `clara-thomas-mentors | sofia-archive`
5. `clara-thomas-supervises | sofia-archive`
6. `elias-clara | thomas-maya-friends`
7. `sofia-archive | thomas-maya-friends`

The diagnostic uses actual sampled route polylines and accepts only interior
transverse intersections. Shared-endpoint contacts, source/target boundary
contacts, intended parallel proximity, and non-intersecting near-passes are
excluded, matching the accepted H2 semantics. No helper was added to
Production.

## X1: dominance-gated true-crossing preference

For each automatic Relation, X1 first obtains the current Production winner
`B`. Candidate `C` is eligible only when all of these are non-worse than `B`:

1. actual foreign-Node penetration count;
2. actual provisional Node-label intersection count;
3. current occupied-path hard-overlap boolean;
4. manual and parallel invariants.

Among eligible candidates, X1 minimizes known true crossings, then current
Production score, then current deterministic candidate order. It uses no
numeric crossing weight. This distinguishes hard presentation failures from
soft pressure without inventing an exchange rate between crossings, Nodes,
and labels. X1 is a diagnostic policy, not a Production contract.

## Modes

- **A — current baseline:** current Production sequential routing.
- **B — sequential X1:** current route order; only prior routes, current
  Nodes, and provisional labels are visible.
- **C — full-context oracle:** all other baseline ordinary routes are frozen
  and visible while each current candidate set is evaluated under the same
  X1 gate. This is an upper bound, not a Production design.
- **D — one bounded repair:** after B, freeze all other current final routes
  and make at most one canonical sweep. A replacement must strictly lower
  total H2 without increasing H1/H3/H4. No convergence loop or second sweep is
  allowed.

D was not triggered for Lighthouse because B and C are identical. A single
Dense diagnostic sweep was run when its exact B/C gap appeared; no second
sweep was attempted.

## English Lighthouse A/B/C result

| Mode | H0/H1/H2/H3/H4 | resolved / new H2 | route total | clearance | straight/curved | changed routes |
|---|---|---|---:|---:|---:|---:|
| A | `0/0/7/4/0` | `0 / 0` | `1459.126` | `18.615` | `6/6` | `0/12` |
| B | `0/0/7/4/0` | `0 / 0` | `1459.126` | `18.615` | `6/6` | `0/12` |
| C | `0/0/7/4/0` | `0 / 0` | `1459.126` | `18.615` | `6/6` | `0/12` |
| D | not executed | not applicable | — | — | — | — |

All seven exact H2 identities remain unchanged. There is no crossing
migration. Every automatic offset remains the Production offset. In route
order these are `-88, -64, 0, 0, 0, -96, 0, 36, 0, 0, 132, -60`; absolute
offset shape is therefore unchanged. Beacon offset `120` selected: **NO**.
Sofia/Archive offset `-120` selected: **NO**.

### Required per-Relation trace

The table gives sequential B values. `eligible` is out of 33. Rejection counts
can overlap because one candidate may fail more than one gate. The selected
candidate is also the minimum-known-H2 eligible candidate in every row.

| Relation | winner -> selected | eligible | known H2 | Production score | rejected Node / label / occupied / parallel | decision |
|---|---:|---:|---:|---:|---:|---|
| `beacon-lighthouse-installed-in` | `-60 -> -60` | 7 | 0 | `0.600` | `19/10/0/0` | reference `120` fails label gate |
| `clara-maya` | `0 -> 0` | 20 | 1 | `0` | `9/0/6/0` | winner remains first X1 minimum |
| `clara-thomas-mentors` | `-64 -> -64` | 12 | 0 | `0.640` | `10/17/0/17` | winner and physical side retained |
| `clara-thomas-supervises` | `-88 -> -88` | 10 | 0 | `0.880` | `10/16/3/16` | winner and physical side retained |
| `daniel-clara` | `-96 -> -96` | 6 | 1 | `14044.703` | `18/18/3/0` | winner remains X1 minimum |
| `elias-clara` | `0 -> 0` | 20 | 0 | `0` | `7/0/9/0` | winner remains first X1 minimum |
| `sofia-archive` | `36 -> 36` | 2 | 2 | `91659.736` | `14/27/2/0` | reference `-120` fails label gate |
| `thomas-maya-friends` | `132 -> 132` | 7 | 3 | `1.320` | `11/18/6/0` | winner remains X1 minimum |

Under C, known crossing counts change because all frozen routes are visible,
but the eligible sets and winners do not. In particular, beacon `-60` sees
three crossings and candidate `120` sees one; Sofia/Archive `36` sees three
and candidate `-120` sees zero. Full context still cannot select either
reference candidate.

### Why the proven references are rejected

| Relation candidate | hard Node | provisional-label intersections | occupied hard overlap | C known H2 | X1 result |
|---|---:|---:|---|---:|---|
| beacon `120` | 0 | 1, versus winner 0 | false | 1, versus winner 3 | ineligible: label gate |
| Sofia/Archive `-120` | 0 | 2, versus winner 0 | false | 0, versus winner 3 | ineligible: label gate |

Their Production scores are `457425.557` and `505085.433`. The preceding
fresh-presentation oracle found no final H1/H3/H4 regression, so the present
gate is conservatively protecting provisional-label rectangles rather than
detecting a proven final-label failure. This does not authorize weakening the
gate: it isolates the unresolved priority semantics.

The two parallel Relations retain offsets `-64` and `-88`; their two crossings
with Sofia/Archive remain. No parallel-slot identity changes, and neither
parallel H2 is resolved from the other route side.

## Future visibility and order diagnostic

B and C have no target-fixture gap: zero changed Relations and the same seven
H2 identities. There are therefore no exact future Relations that C can expose
to unlock an X1-eligible candidate. The reference candidates are blocked by
the label gate before future visibility can matter.

A one-time reversed ordinary-order B diagnostic retained all seven H2
identities but produced H3 `5`, H4 `2`, route total `1478.224`, and changed
three offsets: mentor `-64 -> -124`, supervise `-88 -> -64`, and
Thomas/Maya `132 -> 120`. This confirms order sensitivity in route/label
presentation without demonstrating H2 benefit. Production order was not
changed.

## Locale and controls

### Japanese Lighthouse

A, B, and C are identical at H0/H1/H2/H3/H4 `0/0/4/1/0`, route total
`1513.914`, clearance `23.492`, and straight/curved `5/7`; no route changes and
no migration occur. D is not executed. Beacon `120` again fails the
provisional-label gate with one intersection. The prioritization conclusion is
the same as EN: **YES**.

The retained exact H2 identities are the three beacon pairs with Clara/Maya,
Daniel/Clara, and Thomas/Maya, plus
`elias-clara | thomas-maya-friends`.

### Cross-linked branch control

A, B, and C are identical at `0/0/1/0/0`, route total `1069.192`, clearance
`28.193`, and straight/curved `3/6`. The retained H2 is
`r001-r-b | r008-a1-b1`; there is no migration. The previously found safe
`r008-a1-b1` offset `-132` has no Node penetration or occupied hard overlap
and would see zero crossings in C, but has one provisional-label intersection
versus winner `36` with zero. X1 rejects it at the same gate as Lighthouse.

### Dense complete-10 control

All 45 ordinary Relations were evaluated; no sampling was used.

| Mode | H0/H1/H2/H3/H4 | resolved / new identities | route total | clearance | straight/curved | changed fraction |
|---|---|---|---:|---:|---:|---:|
| A | `0/4/129/0/0` | — | `6052.582` | `-4.510` | `13/32` | — |
| B | `0/3/105/0/0` | `31 / 7` | `6228.783` | `-23.881` | `13/32` | `9/45` (`20.0%`) |
| C | `0/3/104/0/0` | `36 / 11` | `6049.122` | `-23.881` | `11/34` | `11/45` (`24.4%`) |
| D, one sweep | `0/3/103/0/0` | `33 / 7` versus A | `6213.694` | `-23.881` | `13/32` | `10/45` (`22.2%`) |

B changes `r026`, `r027`, `r028`, `r034`, `r038`, `r040`, `r041`, `r043`,
and `r044`. Its net H2 reduction is 24, but seven new identities prove
migration. C gains only one additional net crossing over B. Five sequential
decisions have later invisible crossing partners (`r007`, `r009`, `r011`,
`r021`, and `r022`), so future visibility exists in Dense but does not explain
the Lighthouse no-op. D gains two H2 over B without H1/H3/H4 count regression,
but requires one expensive post-pass and retains clearance regression. No
second sweep was attempted.

### No-conflict controls

Chain and cycle remain deterministic no-ops in A/B/C, each at
H0/H1/H2/H3/H4 `0/0/0/0/0`. Chain retains route total `908.456`, clearance
`30.647`, and straight/curved `4/5`; cycle retains `928.853`, `28.149`, and
`6/4`. D is not executed. X1 does not disturb either no-conflict graph.

All repeated A/B/C selections, routes, and H2 identities are deterministic.
The single Dense D result is also deterministic across its repeated run.

## Dynamic boundary

The requested dynamic check is gated on material static Lighthouse
improvement. B produces none, so the 11-step beacon trajectory was **not
executed** under X1. No new statement about moving-Node continuity is inferred.

For context only, the preceding measured Production baseline was offset
`-60` for seven samples then `156` for four, one candidate flip near 70%,
maximum control-point amplification `277.899x`, and maximum route-interior
amplification `166.850x`. X1 did not statically change the route, and there is
no evidence in this checkpoint that it worsens drag continuity. Static route
quality and drag continuity remain separate questions.

## Diagnostic performance

These are single unoptimized diagnostic-harness timings; intersection-test
counts are the more stable comparison. No spatial index, early exit, or
Production optimization was added.

| Fixture | A ms / tests | B ms / tests | C ms / tests | D ms / tests | B/A | C/A | D/A |
|---|---:|---:|---:|---:|---:|---:|---:|
| Lighthouse EN | `74.325 / 127227` | `157.794 / 3093775` | `114.702 / 5062636` | — | `2.123x` | `1.543x` | — |
| sparse 25, 28 Relations | `201.189 / 946126` | `667.925 / 25326224` | `581.470 / 42722778` | — | `3.320x` | `2.890x` | — |
| sparse 50, 58 Relations | `840.834 / 4243089` | `3207.266 / 114894996` | `2601.370 / 195257229` | — | `3.814x` | `3.094x` | — |
| dense 10, 45 Relations | `355.588 / 1145504` | `1032.334 / 34595320` | `834.149 / 64725019` | `2992.808 / 344876258` | `2.903x` | `2.346x` | `8.416x` |

The sparse fixtures are deterministic chains plus a five-hop chord from every
fifth Node. Performance is substantial enough to require a separate design if
quality semantics are ever supported, but the present quality trade-off stops
the Production path before optimization.

## Conclusion and Production implication

- true crossing is a materially missing objective signal: **YES**;
- sequential X1 is sufficient: **NO**;
- future visibility materially limits the Lighthouse result: **NO**;
- bounded repair materially helps: **NO on the target; NOT TESTED for
  Lighthouse because its B/C gap is zero, while the Dense sensitivity gains
  only two additional H2 at `8.416x` baseline diagnostic cost**;
- hard Node safety is preserved by X1: **YES**;
- provisional-label safety is preserved by X1: **YES**, conservatively;
- Dense is stable enough for Production-oriented investigation: **NO**;
- drag continuity is worsened: **NO; the dynamic gate was not met, so no new
  trajectory claim is made**;
- Production implementation is justified now: **NO**.

The evidence distinguishes a missing signal from a selected objective. Safe
final crossing reductions exist, but the tested hard dominance policy cannot
choose them because provisional-label and crossing priorities are unresolved.
Relaxing that dominance or assigning a numeric weight here would be arbitrary.
The next checkpoint must isolate Node/label/crossing priority semantics; it
must not start a crossing-aware Production implementation.

The EN/JA sample candidates remain unaccepted and uncommitted.
`seededPositions` cleanup remains a separate checkpoint.
