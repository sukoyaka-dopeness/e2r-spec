# LiaisonScape Automatic-Route Label-Halo Minimum-Clearance Boundary Audit

Date: 2026-09-01

Task: `E2R-LIAISONSCAPE-AUTOMATIC-ROUTE-LABEL-HALO-MINIMUM-CLEARANCE-BOUNDARY-AUDIT1`

Result: **PARTIAL — a lower-clearance interval is graph-consistent, but its
numeric boundary is not yet normatively justified.**

## Scope and safety boundary

This was a read-only boundary audit in the detached worktree
`C:/Users/extra/E2R/e2r-liaison-scape-halo-clearance-boundary`, based on
LiaisonScape `fd563340625fd3d88dc25baedc93c4f8fe69e5e7`. The temporary
candidate trace and Cmin selector were removed before cleanup.

No production runtime, routing policy, score weights, candidate range or step,
label placement, sample, parallel-edge policy, self-loop policy, interactive
preview, or persisted coordinate was changed. The dirty JA and EN Lighthouse
samples were read-only inputs. This audit does not select a production Cmin.

## Canonical replay and baseline gate

The temporary harness replayed the App pipeline: fixed and self routes first,
canonical ordinary Relation order, predecessor `occupiedPaths`, provisional
Node-label rectangles, and the live `routeGraphEdge` candidate generation.
The JA baseline reproduced the required current winners:

| Relation | Expected/current offset |
|---|---:|
| `clara-thomas-mentors` | -52 |
| `clara-thomas-supervises` | -76 |
| `sofia-archive` | -156 |
| `authority-lighthouse` | -24 |

The authority/lighthouse values in the attached task were rounded. The live
trace measured the three relevant minimum route-to-Node-label distances as
`5.809229397`, `12.840275385`, and `20.087102338` for offsets `0`, `-12`, and
`-24` respectively.

## Source geometric landmarks

The audit inventoried the existing source geometry before interpreting any
boundary:

| Landmark | Current source value or rule |
|---|---|
| Entity attachment shape | rounded rectangle, half-width `32`, half-height `32`, corner radius `12` |
| Node influence radius | `60` |
| Node-label placement | width derived from text, clamped `48..180`, plus `12` horizontal padding; height `20`, `34`, or `48`; 32 angular candidates |
| Node-label route hard clearance | `4` |
| Node-label route halo | width `16`, weight `8` |
| Route-label halo | width `20`, coefficient `20`; hard pressure `100000` in route arbitration |
| Label recovery clearance | `60` in the existing Node-label recovery helper |
| Self-loop orientation step | `PI / 18` |

These are implementation landmarks, not a normative minimum distance. No
existing source constant states that automatic routes must remain a chosen
distance from a Node-label rectangle. In particular, `6`, `8`, `10`, `12`,
`labelHeight / 2`, and the existing halo widths are not adopted as Cmin.

## Temporary Cmin semantics

The diagnostic used a symbolic `Cmin` only. A candidate was eligible when it
was Node-safe, occupied-path-safe, hard-label-safe, and its minimum distance
to every relevant Node-label rectangle was at least `Cmin`. Eligible
candidates were selected by:

1. smallest absolute offset;
2. lower halo pressure only when absolute offsets were equal;
3. deterministic candidate enumeration order.

If no candidate satisfied the symbolic boundary, the current arbitration was
used as a diagnostic fallback. This selector was not installed in the runtime.

## Authority/lighthouse boundary

The JA frontier is a direct, scene-derived breakpoint sequence:

| Cmin interval, using the live distances | Selected offset |
|---|---:|
| `0 <= Cmin <= 5.809229397` | `0` |
| `5.809229397 < Cmin <= 12.840275385` | `-12` |
| `12.840275385 < Cmin <= 20.087102338` | `-24` |

The first three hard-safe candidates are all free of Node pressure, occupied
path overlap, and hard Node-label rectangle intersection. Their halo pressures
are approximately `4027.559`, `1025.233`, and `0`. Thus, the current `-24`
winner is a zero-halo choice, while the lower-curvature `0` candidate is only
hard-safe and remains halo-positive.

This establishes that a minimum-clearance boundary can be expressed exactly
from scene geometry for this Relation. It does not establish which boundary
should be normative: the intervals are separated by candidate landmarks, not
by an existing semantic token or a graph-independent presentation rule.

## JA full ordinary-route scan

The scan covered all 12 ordinary Entity-to-Entity routes, including the
parallel Clara/Thomas Relations.

| Metric | Current | Symbolic Cmin = 0 |
|---|---:|---:|
| Straight / curved | 5 / 7 | 6 / 6 |
| Ordinary route length | 1513.914 | 1512.800 |
| True interior crossings (H2) | 4 | 4 |
| PNR / FNR | 1 / 1 | 1 / 1 |
| Node-body conflicts | 0 | 0 |
| Node-label/Node-label conflicts | 0 | 0 |
| Node-label/Relation-label conflicts | 0 | 0 |
| Minimum foreign-Node clearance | 23.492 | 23.492 |

Only `authority-lighthouse` changed at symbolic Cmin `0`; its offset changed
from `-24` to `0`. The H2 identities were unchanged. The small route-length
decrease is incidental because route length is not part of the diagnostic
selector.

Across the JA graph, hard-safe candidate distances produced 96 distinct
breakpoints spanning approximately `1.550` to `72.000`. They are dense and
Relation-specific. Raising Cmin also changes Clara/Thomas choices: the first
additional changes occur at approximately `25.675` and `31.352`, while the
authority frontier continues through many further breakpoints. There is no
shared graph-wide gap that isolates only the desired lower-curvature case.

## EN bounded comparison

The EN replay is a bounded cross-locale check, not a second baseline gate. Its
current authority/lighthouse route is already straight at offset `0`; its
relevant distances for offsets `0`, `-12`, and `-24` are approximately
`30.411`, `23.454`, and `16.199`. Its hard-safe breakpoints begin at
`0.543`, `2.722`, `8.279`, `9.709`, and `16.199` for that frontier.

The EN full scan produced 89 distinct graph breakpoints, also spanning roughly
`0.543` to `72.000`. Symbolic Cmin `0` changed the Clara/Thomas offsets but
did not improve the already-straight authority route. JA and EN therefore do
not provide a shared cross-locale numeric Cmin or a common boundary with the
same presentation effect.

## Interpretation and decision

The result is **PARTIAL**:

- **B1 / B2:** hard-safe clearance breakpoints are observable and reproducible
  from live scene geometry; the authority frontier has a useful lower,
  intermediate, and zero-halo sequence.
- **B3:** there is no natural graph-wide JA gap; breakpoint distributions are
  Relation-specific.
- **B4:** there is no shared JA/EN boundary with the same effect.
- **B5:** symbolic Cmin `0` recovers one JA straight route, but does not reduce
  H2 crossings or address the Clara/Thomas hard-label frontier.
- **B6:** occupied-path, Node-safety, and hard-label controls remain intact.
- **B7:** no normative value can be selected without inventing a new semantic
  presentation rule.
- **B8:** the audit does not establish a production acceptance threshold.

Primary decision: **3 — adopt a boundary only after a separate semantic
experiment defines what minimum Node-label clearance means.** Do not promote
the symbolic selector, choose a magic Cmin, or remove the existing halo
arbitration in this checkpoint.

The evidence also favors keeping the boundary question separate from the
remaining causes: mentors is still hard-label constrained, supervises is
occupied-path constrained, and the parallel/self-loop presentation issues are
not explained by a single clearance threshold.

## Selected next checkpoint

The selected follow-up is:

`E2R-LIAISONSCAPE-AUTOMATIC-ROUTE-HARD-LABEL-CORRIDOR-BOUNDARY-AUDIT1`

It should inspect the hard-label corridor responsible for the mentors
frontier before any Cmin semantics are proposed. If a future cross-locale
experiment identifies a natural shared clearance gap, a separate
`...MINIMUM-LABEL-CLEARANCE-SEMANTICS-EXPERIMENT1` may be reconsidered.

## Cleanup and verification boundary

The temporary source instrumentation, harness, JSON output, and worktree were
removed. LiaisonScape received no commit. The existing interactive preview,
localhost server, dirty samples, seeded positions, and protected
`E2R-Session-0052.md` were preserved.
