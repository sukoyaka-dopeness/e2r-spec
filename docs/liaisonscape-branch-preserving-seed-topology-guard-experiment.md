# LiaisonScape Branch-Preserving Seed Topology Guard Experiment

## E2R-LIAISONSCAPE-BRANCH-PRESERVING-SEED-TOPOLOGY-GUARD-EXPERIMENT1

Date: 2026-08-30

### Exact result

`PARTIAL — STRUCTURAL GUARD PROTECTS CYCLE / CHAIN BUT DOES NOT RELIABLY REJECT MULTI-HUB GRAPHS`

A threshold-free `G2 AND G4` candidate selected the branch-preserving C seed
for Lighthouse, a star, and a branching tree while retaining current A for a
chain, cycle, dense mesh, and equal-degree two-hub graph. It reproduced the
previous Lighthouse benefit and prevented the known cycle and equal-two-hub
regressions. It nevertheless accepted an unequal two-hub graph and a
cross-linked-branch graph. The former settled below the live 96-unit clearance
boundary; the latter became over four times as large. The candidate is useful
diagnostic evidence, not a safe production guard.

### Starting state and protected evidence

LiaisonScape started at `fd56334 feat: improve coordinate-less initial
placement`, on `main`, five commits ahead of `origin/main`. Its only dirty
paths were the existing, unaccepted three-iteration Lighthouse Coordinate
candidates:

- `public/lighthouse-restoration-demo.en.e2r.json`
- `public/lighthouse-restoration-demo.ja.e2r.json`

The dirty Coordinate values were:

| Entity | x | y |
|---|---:|---:|
| archive | 151.046920670966 | -3.68562649063309 |
| authority | 284.5128309405446 | 44.340475413503626 |
| beacon | 174.5622824919825 | 320.91484144128066 |
| clara | 178.84313362742665 | 165.89126921030368 |
| daniel | 487.9709381879728 | 160.21765010630185 |
| elias | 42.4400569342025 | 269.626455731914 |
| lighthouse | 313.82660808145147 | 162.61310754556743 |
| maya | 258.741071632049 | 266.17010272930145 |
| sofia | -1.3252821186594277 | 157.23966629997994 |
| thomas | 56.74351465924065 | 56.54154693400477 |

The experiment did not accept, commit, discard, overwrite, or replace either
sample. `e2r-spec` started at `ee6a7f5 docs: test external seed multi-hop
counterfactual`, 32 commits ahead of `origin/main`. The protected dirty
`sessions/E2R-Session-0052.md` remained outside every edit and staging action.
No relevant accepted topology-guard rule was found in `ai-knowledge`; the live
source, accepted application records, and new counterfactual remain the
authority.

### Preceding causal result

The preceding external-seed experiment established:

```text
PARTIAL - MULTI-HOP SEED HELPS LIGHTHOUSE BUT REGRESSES CYCLIC / MULTI-HUB GRAPHS
```

Its temporary seed round trip was bit-identical. Candidate C, a
branch-preserving parent-sector seed, changed Lighthouse POST-3 from seven
ordinary crossings and `1 / 5` label-label/label-Node intersections to
`0 / 0 / 0`. It also exposed material cycle and two-hub regressions. This
checkpoint asks only whether topology can select C or current A safely; it does
not change C, the solver, routing, labels, or persistence.

### Pure topology and root semantics

The guard uses the same graph boundary as the production seed:

- seed Nodes are Entities only;
- Relations with an Event endpoint are not graph edges;
- ordinary adjacency is undirected for geometry;
- duplicate endpoint pairs, including parallel Relations, count as one
  distinct neighbor;
- self-Relations do not add a neighbor or alter components;
- direction, labels, descriptions, locale, coordinates, routing, and label
  geometry are not inputs; and
- the root is maximum distinct-neighbor degree with lexical Entity ID as the
  deterministic tie-break.

The live source therefore selects `clara`. Its degree is five; the
second-highest degree is three. `clara` is the unique maximum.

### Guard family

- **G1 — articulation:** removing the selected root leaves more than one
  connected component.
- **G2 — true branching:** removing the selected root leaves at least three
  components. Three is the categorical distinction between a two-way path
  split and branching, not a visual score threshold.
- **G3 — root partition purity:** every post-root component contains exactly
  one original root neighbor.
- **G4 — unique maximum:** only the selected root has the maximum distinct-
  neighbor degree.

Proposed G5, “no root-independent path between different root neighbors,” is
mathematically equivalent to G3 under this undirected adjacency. It was
collapsed rather than retained as a duplicate guard. Biconnected/block-cut
analysis was not needed to expose the candidate's limitation.

G1 alone accepts a chain. G2 removes that false positive. G3 rejects cycle and
dense reconnection, but also rejects Lighthouse. G4 rejects the equal two-hub
case but cannot reject a slightly unequal two-hub graph. The smallest candidate
that accepts Lighthouse while covering the principal categorical negatives is
therefore:

```text
G = G2 AND G4, evaluated per connected component
PASS -> C parent-sector seed
FAIL -> current A seed
```

### Lighthouse root-removal structure

The Lighthouse Entity graph has ten Nodes, eleven unique ordinary endpoint
pairs, one connected component, and cyclomatic number two
(`11 - 10 + 1`). Removing `clara` creates three components:

| Component | Nodes | Root-neighbor count | Root neighbors |
|---|---|---:|---|
| 1 | `archive`, `elias`, `sofia` | 1 | `elias` |
| 2 | `authority`, `beacon`, `lighthouse`, `maya`, `thomas` | 3 | `lighthouse`, `maya`, `thomas` |
| 3 | `daniel` | 1 | `daniel` |

`clara` is an articulation point and produces categorical branching, but the
second component contains root-independent paths among three root neighbors.
Thus Lighthouse results are:

| Fact | Result |
|---|---|
| Root / degree | `clara` / 5 |
| Second-highest degree | 3 |
| Unique maximum | yes |
| Components before / after removal | 1 / 3 |
| Cross-branch path | yes: `lighthouse`, `maya`, `thomas` reconnect |
| Local cycles / cyclomatic number | yes / 2 |
| G1 | PASS |
| G2 | PASS |
| G3 / equivalent G5 | FAIL |
| G4 | PASS |
| G2 AND G3 | FAIL |
| G2 AND G4 | PASS |
| G2 AND G3 AND G4 | FAIL |

G3's failure is decisive: perfect root-partition purity is not the condition
under which C helped Lighthouse.

### Static classification matrix

Desired classifications are experiment controls, not semantics. `A` means
accept C and `R` means retain current A.

| Graph | Desired | G1 | G2 | G3 | G4 | G2∧G3 | G2∧G4 | G2∧G3∧G4 |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| Lighthouse | A | A | A | R | A | R | A | R |
| Star | A | A | A | A | A | A | A | A |
| Branching tree | A | A | A | A | A | A | A | A |
| Chain | R | A | R | A | R | R | R | R |
| Simple cycle | R | R | R | R | R | R | R | R |
| Equal two-hub | R | A | A | A | R | A | R | R |
| Unequal two-hub | R | A | A | A | A | A | **A** | A |
| Dense mesh | R | R | R | R | R | R | R | R |
| Branches with local cycle | A | A | A | A | A | A | A | A |
| Cross-linked branches | R | A | A | R | A | R | **A** | R |
| Secondary hub in one branch | A | A | A | A | A | A | A | A |
| Disconnected star + cycle | mixed | mixed | mixed | mixed | mixed | mixed | mixed | mixed |

G2 AND G4 has two static unsafe false positives: unequal two-hub and
cross-linked branches. It has no declared-control false negative. Adding G3
removes the cross-linked false positive but creates the more important
Lighthouse false negative and still accepts unequal two-hub.

### Temporary external-seed control

The previous temporary seam was recreated exactly: a complete finite
`initialPositions` option replaced only the internal seed map before the
unchanged force loop. The normal production caller supplied no option. The
temporary test captured current `iterations: 0` positions, re-injected them,
and compared normal and injected POST-3 coordinates.

```text
temporary seam recreated: YES
external-seed round-trip equivalent: YES
maximum coordinate delta: 0
guard changes only seed strategy: YES
```

The seam, test harness, and generated JSON were removed after measurement.

### Guard-aware POST-3 counterfactual

Each component used C only when G2 AND G4 passed; otherwise it used A. The
settler remained three iterations. Lighthouse used production English labels,
production route ordering, `routeGraphEdge`, `placeEdgeLabel`, and
`placeNodeLabel`. Synthetic diagnostics used canonical IDs as neutral labels.
The guard itself saw none of those labels or geometries.

Values in `A / C / guarded` order show that guarded output is exactly one of
the two strategies, not a fallback chain.

| Graph | Guard strategy | Area A / C / G | Minimum Node A / C / G | Crossing A / C / G | Route length A / C / G | Foreign-Node clearance A / C / G | Label-L / Label-N A → C |
|---|---|---:|---:|---:|---:|---:|---:|
| Lighthouse | C | 158,826 / 293,324 / 293,324 | 100.414 / 141.431 / 141.431 | 7 / 0 / 0 | 1,459 / 1,716 / 1,716 | 18.597 / 37.150 / 37.150 | 1/5 → 0/0 |
| Star | C | 91,421 / 92,757 / 92,757 | 125.241 / 163.636 / 163.636 | 0 / 0 / 0 | 599 / 639 / 639 | 26.938 / 76.996 / 76.996 | 0/0 → 0/0 |
| Branching tree | C | 278,781 / 423,940 / 423,940 | 97.489 / 168.291 / 168.291 | 3 / 0 / 0 | 1,926 / 1,439 / 1,439 | 27.782 / 81.837 / 81.837 | 0/3 → 0/0 |
| Chain | A | 162,619 / 0 / 162,619 | 113.952 / 163.797 / 113.952 | 0 / 0 / 0 | 908 / 961 / 908 | 30.623 / 163.797 / 30.623 | 0/0 → 0/0 |
| Cycle | A | 162,109 / 0 / 162,109 | 120.589 / 119.760 / 120.589 | 0 / 0 / 0 | 929 / 2,270 / 929 | 28.086 / -2.541 / 28.086 | 0/0 → 0/0 |
| Equal two-hub | A | 163,878 / 171,918 / 163,878 | 99.718 / 85.155 / 99.718 | 0 / 0 / 0 | 1,030 / 1,058 / 1,030 | 29.578 / 32.701 / 29.578 | 0/0 → 0/0 |
| Unequal two-hub | **C** | 197,528 / 142,482 / 142,482 | 120.812 / **75.802** / 75.802 | 0 / 0 / 0 | 1,255 / 1,026 / 1,026 | 26.932 / 31.573 / 31.573 | 0/1 → 0/3 |
| Dense mesh | A | 97,511 / 52,785 / 97,511 | 78.098 / 73.573 / 78.098 | 129 / 151 / 129 | 6,053 / 4,346 / 6,053 | -4.537 / 1.849 / -4.537 | 43/48 → 79/65 |
| Local-cycle branches | C | 87,723 / 160,094 / 160,094 | 109.539 / 151.685 / 151.685 | 0 / 0 / 0 | 598 / 879 / 879 | 30.440 / 37.344 / 37.344 | 0/5 → 0/5 |
| Cross-linked branches | **C** | 102,744 / **429,673** / 429,673 | 104.353 / 147.602 / 147.602 | 1 / 0 / 0 | 1,069 / 1,388 / 1,388 | 28.177 / 63.961 / 63.961 | 0/5 → 0/4 |
| Secondary hub in branch | C | 99,271 / 161,172 / 161,172 | 97.693 / 102.393 / 102.393 | 0 / 0 / 0 | 822 / 980 / 980 | 29.659 / 41.028 / 41.028 | 0/4 → 0/1 |

Connected-distance medians/maxima for the critical cases were:

| Graph | A median / max | C median / max | Guarded median / max |
|---|---:|---:|---:|
| Lighthouse | 163.908 / 309.180 | 164.470 / 270.627 | 164.470 / 270.627 |
| Cycle | 128.138 / 290.879 | 172.770 / 1,447.200 | 128.138 / 290.879 |
| Equal two-hub | 152.942 / 272.659 | 164.216 / 193.887 | 152.942 / 272.659 |
| Unequal two-hub | 164.193 / 245.124 | 163.926 / 195.355 | 163.926 / 195.355 |
| Cross-linked branches | 158.977 / 215.850 | 172.311 / 426.774 | 172.311 / 426.774 |

For a disconnected star plus cycle, per-component selection was `C + A`.
Guarded output retained minimum Node distance `120.589`, zero crossing, route
length `1,677`, and foreign-Node clearance `28.086`. Applying C to both
components instead produced a 3.236-unit cross-component nearest distance,
nine crossings, route length `3,311`, and `-2.541` foreign clearance. The guard
can be evaluated component-wise without inventing new relative packing, though
production component packing remains a separate concern.

### Safety and false classification analysis

- **Lighthouse:** C selected; `0 / 0 / 0` crossing/label result reproduced
  exactly. The preceding benefit is confirmed.
- **Cycle:** C rejected; route `2,270` and clearance `-2.541` regressions were
  avoided by retaining A (`929`, `28.086`).
- **Chain:** C rejected, avoiding its collinear single-root hierarchy.
- **Dense mesh:** C rejected, avoiding the increase from 129 to 151 crossings
  and from `43 / 48` to `79 / 65` label intersections.
- **Equal two-hub:** G4 rejected C and avoided the previous 85.155 minimum
  distance.
- **Unequal two-hub:** G4 passed. C created a 75.802 minimum distance and
  increased label-Node intersections from one to three. This is an unsafe
  false positive.
- **Cross-linked branches:** G2 still passed because four apparent branches
  became three post-root components after one cross-link. C removed one
  crossing but increased area 318%, route length 30%, and maximum connected
  distance 98%. It visually encodes separate sectors despite the cross-link.
  This is the second unsafe false positive.
- **Local cycle:** accepted, proving that `any cycle -> reject` would be too
  conservative. C improved spacing but increased area and route length while
  leaving label intersections unchanged; acceptance is safe but not evidence
  of material benefit.
- **Secondary hub inside one branch:** accepted. Minimum distance stayed above
  96 and label-Node intersections fell from four to one, though compactness
  regressed. A categorical ban on every secondary hub would therefore create
  avoidable false negatives.

The unequal two-hub and legitimate nested-hub controls expose the unresolved
boundary. Both are tree-like root partitions with a unique maximum root and a
high-degree child branch. Declaring one “multi-hub” and the other “nested
branching” requires a degree, size, balance, or presentation threshold, or
semantic knowledge. None is justified here.

Unsafe false positives for G2 AND G4: **2**. Declared-control false negatives:
**0**. G2 AND G3 would remove one false positive but reject Lighthouse, so it
is not a safer replacement for this objective.

### Available real-sample descriptors

Only local files were used, read-only. Entity-only topology produced:

| Sample/component | Nodes | Root | Degree / second | Components after root | G2 | G3 | G4 | G2∧G4 | Cyclomatic |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| Apollo 11 | 9 | `columbia` | 4 / 4 | 2 | FAIL | FAIL | FAIL | REJECT | 3 |
| Ashen Crown | 10 | `elara` | 6 / 5 | 1 | FAIL | FAIL | PASS | REJECT | 8 |
| Titanic main | 12 | `titanic` | 9 / 2 | 9 | PASS | PASS | PASS | ACCEPT | 0 |
| Titanic isolated | 1 | `californian` | 0 / 0 | 0 | FAIL | FAIL | PASS | REJECT | 0 |

These descriptors show that the candidate does not merely accept every real
sample. They do not establish presentation quality because no external seed
was injected into these reference files and no file was modified.

### Determinism, order invariance, and cost

Reversing both Entity and Relation arrays produced the same roots, guard
decisions, selected strategy, and exact seed coordinates. Repeated runs were
also exact. The guard is locale-, label-, coordinate-, direction-, parallel-
multiplicity-, and self-loop-independent.

Median local timings over 100 deterministic runs were:

| Graph | Nodes / Relations | Guard | Guarded seed | Three-iteration settle |
|---|---:|---:|---:|---:|
| Lighthouse | 10 / 14 | 0.019 ms | 0.040 ms | 0.050 ms |
| Sparse generated | 25 / 46 | 0.098 ms | 0.098 ms | 0.142 ms |
| Sparse generated | 50 / 96 | 0.193 ms | 0.183 ms | 0.460 ms |
| Dense generated | 50 / 1,225 | 1.009 ms | 1.023 ms | 0.978 ms |

Simple BFS/DFS root removal is `O(V + E)` after adjacency construction; root
selection adds canonical ordering. It is sufficiently cheap in absolute terms
for these controls, though on dense input it is comparable to the current
three-iteration solver rather than universally cheaper. No Tarjan or block-cut
framework was needed.

### Causal answer and guard classification

The root causal question is answered **NO** in its strict form. C does not
succeed exactly when a single root connects pure independent branches:
Lighthouse is not partition-pure, while unequal two-hub and cross-linked graphs
pass G2 AND G4 and still regress. True branching and a unique root are useful
signals, not a sufficient safety boundary.

Guard classification is **GUARD CASE 4: SIMPLE STRUCTURAL GUARD WORKS FOR
LIGHTHOUSE/CYCLE/CHAIN BUT NOT ALL MULTI-HUB CASES**.

- Threshold-free sufficient guard established: no
- Lighthouse accepted safely: yes
- Cycle protected: yes
- Chain protected: yes
- Equal two-hub protected: yes
- Unequal multi-hub protected: no
- Dense mesh protected: yes
- Local-cycle branch accepted: yes, with mixed benefit
- Cross-linked branch rejected: no
- Nested secondary hub accepted when safe: yes
- Production guarded implementation justified next: no

The next bounded checkpoint, if pursued, is
`E2R-LIAISONSCAPE-UNEQUAL-MULTI-HUB-REJECTION-IDENTIFIABILITY-EXPERIMENT1`.
It should test whether unequal multi-hub risk can be distinguished from
legitimate nested branching without arbitrary ratios, labels, semantics, or
coordinates. No production guard or seed implementation should precede that
answer.

### End state and validation

- Production Runtime changed at end: no
- Production seed changed: no
- Force constants changed: no
- Iteration count changed: no
- Routing changed: no
- Labels changed: no
- Runtime commit: none
- Sample formally changed: no
- Existing Lighthouse candidate remains uncommitted: yes
- Temporary seam, test bridge, helper, or output remaining: none
- LiaisonScape tests: 280/280 passed
- LiaisonScape lint: passed
- LiaisonScape build: passed
- LiaisonScape `git diff --check`: passed
- `seededPositions` cleanup touched: no
- Push, tag, release, deploy, and publication: none
