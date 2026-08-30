# LiaisonScape Relation-Label Foreign-Edge Ownership Audit

- Date: 2026-08-30
- Checkpoint: `E2R-LIAISONSCAPE-RELATION-LABEL-FOREIGN-EDGE-OWNERSHIP-FIX1`
- Scope: audit / diagnostic only

## Exact result

`NOT JUSTIFIED - CURRENT LABEL CANDIDATES ALREADY CLEARLY FAVOR OWNER EDGE`

The current automatic label placement was measured against the Lighthouse
stored coordinates. No selected label candidate was nearer to a foreign
Relation route than to its owning route in the representative cases. The
existing candidate set and collision rules therefore provide no evidence for
an owner-vs-foreign scoring fix. No runtime change was made.

## Current pipeline

`App.tsx` passes the owning Relation route as `samples` to `placeEdgeLabel`,
then passes occupied labels, foreign Node positions, and other Relation paths
for collision checks. The helper generates along-edge samples
`[20,16,24,12,28,8,32,4,36]` and normal offsets `[0,-24,24,-40,40]`.
Candidate selection uses label, Node, and other-edge collision pressure,
existing normal-distance recovery, along-edge preference, and previous
placement stability. It does not currently use a foreign-route distance
score; adding one would be a new visual trade-off and is not justified by
the measured state.

Manual label anchors, manual routes, stored Presentation, and self-loop
geometry remain outside automatic ownership recovery. Route geometry itself
was not changed.

## Lighthouse measurement

Routes were generated from the current English Lighthouse sample and labels
were placed in Relation order with the production helper. Distances below are
minimum distances from the label center to sampled route points.

| Relation / label | Owner distance | Nearest foreign Relation | Foreign distance | Result |
|---|---:|---|---:|---|
| `clara-thomas-supervises` / supervises | 0.0 | `clara-thomas-mentors` | 48.6 | owner clear |
| `clara-thomas-mentors` / mentors | 24.0 | `clara-thomas-supervises` | 72.6 | owner clear |
| `clara-maya` / works with | 0.0 | `clara-thomas-supervises` | 47.7 | owner clear |
| `daniel-clara` / coordinates with | 0.0 | `clara-lighthouse` | 59.7 | owner clear |
| `clara-lighthouse` / leads restoration of | 24.0 | `daniel-clara` | 37.4 | owner nearer |
| `beacon-lighthouse-installed-in` / is installed in | 0.0 | `maya-beacon` | 37.0 | owner clear |

The remaining ordinary Relations also retained owner-nearest placements.
No manual label anchor was present for these representative sample labels.
There is no tracked label-position snapshot or historical pixel baseline, so
stronger visual claims would not be evidence-backed.

## Synthetic and causal classification

The requested Case 1 condition—an existing legal candidate where a foreign
Relation is nearer while another legal candidate clearly favors the owner—was
not reproduced with the production helper. Existing tests already cover
midpoint and along-edge recovery, other-edge collision avoidance, parallel
edge label separation, normal-distance recovery, manual anchors, and label
visual state.

Classification: `CASE 4 - CURRENT SELECTED LABEL ALREADY HAS OWNER AS CLEARLY
NEAREST`. If future evidence shows all legal candidates are similarly
ambiguous, that is a candidate-set or route-congestion issue; if a foreign
route is nearer because of a crossing, it belongs to crossing/routing work,
not an automatic foreign-distance score.

No new foreign-distance weight, ratio, margin, threshold, global label solver,
or route solver was introduced. Normal-distance and along-edge recovery
remain unchanged, as do manual/Owned Presentation semantics.

## Boundaries and verification

No LiaisonScape runtime file, test, sample, CSS, Coordinate/Presentation
payload, schema, Core, Extension, Validator, or release metadata was changed.
Reverse-endpoint normalization, parallel obstacle side preservation, and
foreign-node clearance remain CLOSED / NOT REGRESSED. Self-loop, crossing,
label recovery beyond this ownership audit, and NarrativeLine Display-Order
remain separate.

- LiaisonScape baseline: 279/279 tests passed.
- Lint: PASS.
- Build: PASS.
- `git diff --check`: PASS.
- No runtime commit was created.
- Temporary diagnostics were command-line only and left no repository files.
- Protected dirty `sessions/E2R-Session-0052.md` was preserved.
- No push, tag, release, deploy, or publication was performed.
