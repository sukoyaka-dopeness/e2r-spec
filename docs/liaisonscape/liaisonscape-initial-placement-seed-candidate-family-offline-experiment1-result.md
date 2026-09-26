# LiaisonScape Initial-placement Seed Candidate-family Offline Experiment 1 Result

Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-CANDIDATE-FAMILY-OFFLINE-EXPERIMENT1`
Date: 2026-09-02

## Result

Result: **CASE 1 / EXACT RESULT 1+2+3 / DECISION A**.

The exact N-only F1-ALG family removed the bounded candidate-space GEO-0/GEO-3
capacity failure in the required offline corpus, while the current-mapping
failures remain a separate assignment problem. F0 reproduced the expected
fixed-direction contrast: Lighthouse and Ashen were F-SET feasible despite the
known current assignment failures, while G7 and the high-R controls crossed the
fixed-direction capacity boundary. This validates the exact safety-floor
diagnostic only; F1-ALG is not a Production layout design.

## Experiment boundary

The independent variable was candidate family only. F-SET was the primary level:
existence of an injective Node-to-position assignment satisfying every GEO-0 and
GEO-3 predicate. F-MAP-CURRENT was not used as an acceptance criterion and was
not measured because reproducing the current mapping would add assignment
ownership assumptions without changing the primary result.

No visual output, edge length, compactness, crossing, label, route, settling,
packing, score, threshold, or runtime behavior was evaluated.

## Harness and exact semantics

A disposable detached worktree was used:

`C:\Users\extra\E2R\e2r-liaison-scape-seed-candidate-family-offline-experiment1`

The temporary harness used Node built-ins only. No dependency was installed.
Topology was derived from Entity Nodes and valid Entity-to-Entity Relations,
ignoring direction, collapsing parallel pairs, and excluding self-relations.
Triangle motifs and shared motif-neighbor sets were derived from that simple
graph. No labels, locale, coordinates, Presentation, Events, or stored layout
positions were used.

F0 was reconstructed source-exactly: one center, eight positions per ring,
slot angle `0, 45, ..., 315` degrees, ring index increasing after each group of
eight, and radius proportional to the ring index. The authoritative model used
exact `Q(sqrt(2))` coefficients, with a common positive scale normalized away.
No floating epsilon was authoritative.

F1-ALG used exactly `P_i = (i, i²)` for `i = 0 ... N-1`, represented by exact
BigInt integers. Its determinant proof is:

`det(P_j-P_i, P_k-P_i) = (j-i)(k-i)(k-j)`,

which is nonzero for distinct indices. Therefore no three points are collinear.
The same fact implies that from any candidate point no two other points lie on
the same directed ray. A bounded enumeration at `N = 3, 6, 10, 17, 25`
confirmed zero duplicate points, zero collinear triples, and zero same-ray
groups.

The exact same-directed-ray predicate was `cross(u,v)=0 && dot(u,v)>0` for
nonzero vectors. Opposite rays were not conflicts. F1-ALG therefore received
F-SET=YES by family proof for every graph in the run; injectivity was separately
confirmed by its distinct point count.

## Family results

| Family | Input | Representation | Count | ID-neutral | No three collinear | Direction saturation | F-SET method | Production |
|---|---|---|---:|---|---|---|---|---|
| F0 | `N` plus source-exact ring construction | exact `Q(sqrt(2))` | `N` | diagnostic only | NO in general | center saturates at 8 | exact search/proof | NO |
| F1-ALG | `N` only | BigInt `(i,i²)` | `N` | YES | YES by proof | none observed | family proof | NO |

### F0 capacity measurements

| N | Candidate count | Center rays | Same-ray groups | Maximum multiplicity |
|---:|---:|---:|---:|---:|
| 9 | 9 | 8 | 8 | 2 |
| 10 | 10 | 8 | 10 | 3 |
| 17 | 17 | 8 | 24 | 4 |
| 25 | 25 | 8 | 40 | 6 |

Total candidate count grows, but the center's distinct ray vocabulary remains
eight. This is the relevant saturation boundary, not a claim that F0 has only
eight total positions.

## Corpus results

The raw corpus contained 8 root example files, grouped into 4 unique topologies
with 4 EN/JA locale-duplicate groups and no parsing exclusions.

| Graph/control | N | Edges | Motifs | Shared Nodes | max R | F0 F-SET | F1 F-SET | F0 method |
|---|---:|---:|---:|---:|---:|---|---|---|
| Apollo 11 | 9 | 11 | 0 | 0 | 0 | YES | YES | exact search |
| Ashen Crown | 10 | 17 | 7 | 9 | 6 | YES | YES | exact search |
| Lighthouse Restoration | 10 | 11 | 1 | 3 | 2 | YES | YES | exact search |
| Titanic Final Voyage | 13 | 11 | 0 | 0 | 0 | YES | YES | exact search |
| path-17 | 17 | 16 | 0 | 0 | 0 | YES | YES | exact search |
| star-17 | 17 | 16 | 0 | 0 | 0 | YES | YES | exact search |
| K3 | 3 | 3 | 1 | 3 | 2 | YES | YES | exact search |
| K6 | 6 | 15 | 20 | 6 | 5 | NO | YES | exact search |
| zero-triangle bipartite | 6 | 9 | 0 | 0 | 0 | YES | YES | exact search |

Additional bounded controls:

| Control | N | Motifs | max R | F0 | F1 |
|---|---:|---:|---:|---|---|
| G7: one shared Node, 16 motif neighbors, 8 paired motifs | 17 | 8 | 16 | NO, exact capacity proof | YES, family proof |
| multi-high `{6,6}` | 8 | 6 | 6 | NO, exact search | YES, family proof |
| high-R 8 | 9 | 8 | 8 | YES | YES |
| high-R 9 | 10 | 9 | 9 | NO, exact capacity proof | YES |
| high-R 16 | 17 | 16 | 16 | NO, exact capacity proof | YES |
| high-R 24 | 25 | 24 | 24 | NO, exact capacity proof | YES |

Lighthouse and Ashen preserve the crucial distinction: the existing current
mapping can fail while F0 itself has an admissible assignment. G7 is different:
its shared Node needs 16 distinct motif-neighbor rays, while every possible
role in the 17-point F0 set has fewer than 16 distinct rays; this is an exact
capacity impossibility, not an assignment-only failure. Zero-motif path, star,
and dense bipartite controls passed for both families. K3 and K6 demonstrate
the single-motif and motif-dense boundaries. Same-`N` controls demonstrate that
Node count is not validation demand: path-17 has `R=0`, while G7 has `R=16`.

## Invariance and controls

The actual harness passed the following representative exact checks:

| Transformation/control | F0 | F1 | Topology | F-SET |
|---|---|---|---|---|
| ID reverse rename | PASS | PASS | PASS | PASS |
| ID cyclic rename | PASS | PASS | PASS | PASS |
| Entity reverse | PASS | PASS | PASS | PASS |
| Relation reverse | PASS | PASS | PASS | PASS |
| Entity + Relation reverse | PASS | PASS | PASS | PASS |
| translation | PASS | PASS | PASS | PASS |
| positive integer scale | PASS | PASS | PASS | PASS |
| exact 90-degree rotation | PASS | PASS | PASS | PASS |
| axis reflection | PASS | PASS | PASS | PASS |
| EN/JA duplicate grouping | PASS | PASS | PASS | PASS |

The prior validation record additionally covered deterministic rename and order
invariance for Lighthouse, Ashen, G7, multi-high-R, and K3. No named orbit
privilege was introduced. A full graph automorphism-to-Euclidean-isometry
requirement was not imposed.

## Measurements and oracle status

M1 candidate count, M2 distinct count, M3 per-point directional capacity, M4
same-ray groups, M5 maximum multiplicity, M6 exact collinear triples, M7 F-SET,
M8 GEO-0 violation existence, and M9 GEO-3 violation existence were covered by
the harness or the family/capacity proofs. No scalar score, threshold, or visual
metric was used. No UNKNOWN result occurred. Operational cutoff was not used
for required proof-resolved controls; cutoff would not have been classified as
NO.

H1 through H5 were **SUPPORTED**. N1 through N7 were **NOT TRIGGERED**. The
result is a representational safety-floor result only and does not establish
that F1-ALG is visually good, compact, low-crossing, label-safe, or suitable
for Production.

## Cleanup and state

The temporary harness, scratch output, copied/generated data, and detached
worktree were removed after evidence capture. No package or dependency change
was made. LiaisonScape main retained its original dirty sample state; preview
and ai-knowledge were unchanged.

The selected next checkpoint is exactly:

`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-GENERATION-ASSIGNMENT-RESPONSIBILITY-AUDIT1`

It is selected only and is not started by this record. The next checkpoint
should separate topology-derived structural ordering, quality-neutral tie
handling, candidate-family construction, and Node-to-position assignment before
any runtime seed experiment.
