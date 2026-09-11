# LiaisonScape Initial-Layout Post Omit-Fine Visual Acceptance 1

Date: 2026-09-11

Status: ACCEPTABLE FOR FURTHER RESEARCH; RELEASE CANDIDATE NOT ESTABLISHED

## Comparison boundary

This checkpoint reviewed three coordinate arms through the same Actual Product
renderer and the same canonical coordinate-less Dataset path:

1. `current` Product placement.
2. `post-structural-relaxation-finalist-limit-2-v1`, the prior accelerated
   Post candidate.
3. `post-structural-relaxation-omit-fine-v1`, the new diagnostic candidate
   using the finalist limit of 2 while omitting only the 6-unit relaxation
   pass.

The reviewed cells were Lighthouse EN/JA and Titanic EN/JA. The existing
`geometry-inspection1` seam clones the canonical Dataset in memory, replaces
only coordinate values, and sends that clone through the ordinary Product
canvas, routing, Relation-label, viewport, and rendering pipeline. It does
not save the clone or replace Product authority. Full
`post-structural-relaxation-v1` is referenced from the prior human-acceptance
checkpoint; this checkpoint does not claim a new full-Post rerun.

## Human visual observations

### Lighthouse EN

| Arm | Observation |
| --- | --- |
| current | Compact central arrangement. Several routes and labels compete for the same central corridor, making the graph harder to scan. |
| finalist-limit=2 | Broad, stable arrangement with readable Node and Relation labels and improved corridor separation; fit was approximately 61%. |
| finalist-limit=2 + omit-fine | Visibly different from limit2, including the measured maximum position delta of about 87 units, but still an even, readable arrangement. The main graph, central corridor, self-loops, and long labels remained usable; no omit-fine-only crossing, Node overlap, label clipping, or excessive-spread failure was observed. Fit was approximately 62%. |

The Lighthouse EN machine score remains a counter-signal: the omit-fine
selected score was approximately 49.2k versus approximately 52.2k for the
limit2 paired result. Human review did not find a corresponding new visual
regression. The difference is therefore recorded as a quality/selection trade-
off, not as equivalence evidence.

### Lighthouse JA

| Arm | Observation |
| --- | --- |
| current | More compact and more difficult to scan through the central relation area. Japanese labels remained readable. |
| finalist-limit=2 | More separated graph structure with readable Japanese labels and no candidate-only defect. |
| finalist-limit=2 + omit-fine | Natural distributed arrangement, readable Japanese labels, and stable self-loop presentation. No omit-fine-only overlap, clipping, crossing, or viewport failure was observed. |

The omit-fine direction remained consistent with the prior Post preference.

### Titanic EN

| Arm | Observation |
| --- | --- |
| current | Strong central RMS Titanic hub crowding. The surrounding entities and relation labels are harder to follow. |
| finalist-limit=2 | Wider radial organization and better separation around the hub; the existing long-label behavior remains visible. |
| finalist-limit=2 + omit-fine | Wide, readable organization comparable in quality direction to limit2. The central hub remained scannable at the observed fit, and no omit-fine-only crowding, clipping, or overlap was observed. |

The known Titanic parallel-Edge and long-Relation-label behavior remains a
downstream presentation issue and is not counted as an Initial Layout failure.

### Titanic JA

| Arm | Observation |
| --- | --- |
| current | More compact central structure; Japanese relation paths require more scanning. |
| finalist-limit=2 | Distributed arrangement with improved separation and readable labels. |
| finalist-limit=2 + omit-fine | Distributed and stable at approximately 68% fit. Labels remained readable, and no omit-fine-only visual defect or excessive-spread failure was observed. |

The Post direction over current was retained in this locale.

## Machine evidence and runtime

The paired diagnostic measurements were:

| Fixture / locale | limit2 wall time | omit-fine wall time | omit-fine full evaluations | omit-fine selected score |
| --- | ---: | ---: | ---: | ---: |
| Apollo EN | 8,686.95 ms | 6,598.36 ms | 245 | 1,014.2519 |
| Apollo JA | 8,311.39 ms | 6,395.76 ms | 237 | 992.9188 |
| Lighthouse EN | 11,351.05 ms | 8,944.14 ms | 226 | 49,194.5437 |
| Lighthouse JA | 11,703.91 ms | 8,948.28 ms | 232 | 31,488.9007 |
| Titanic EN | 13,341.93 ms | 9,535.84 ms | 272 | 1,546.1128 |
| Titanic JA | 13,107.69 ms | 9,320.76 ms | 279 | 1,079.7321 |

Omit-fine reduced paired wall time by roughly 21–29% and removed the final
fine relaxation stage. All six machine runs retained the selected family and
the reported zero-crossing, zero-label-hit, and zero-node-overlap safety
metrics. These metrics support continued bounded research, but they do not
replace the human visual observations above.

## Responsibility boundary

Routing, Relation-label placement and recovery, self-loop geometry, connector
visibility, and glyph/CSS rendering were held in the common Product pipeline.
The known Titanic parallel-Edge/long-label behavior, self-loop angle tendency,
and connector/layering questions remain presentation-track observations. The
existing roadmap item `E2R-LIAISONSCAPE-NODE-LABEL-CONNECTOR-VISIBILITY-AUDIT1`
already records the connector follow-up, so no duplicate roadmap entry or fix
was added here.

The reviewed locale differences changed text footprint and viewport fit as
expected. They did not reveal an omit-fine-only failure. The Lighthouse EN
coordinate delta is real and visually observable as a different arrangement,
but this review did not find a quality-breaking consequence.

## Decision

```text
accelerated omit-fine visual quality  = ACCEPTABLE FOR FURTHER RESEARCH
full Post visual direction retained   = YES FOR REVIEWED CELLS; NO EQUIVALENCE CLAIM
omit-fine disposition                  = CONTINUE ACCELERATION WITH ADAPTIVE FINE-PASS HYPOTHESIS
omit-fine-only visual regression       = NOT OBSERVED
Initial Layout Release blocker        = STILL BLOCKED
Product default adoption              = HOLD
Product default behavior              = UNCHANGED
```

The result supports continuing finalist acceleration research. The next
bounded hypothesis should preserve omit-fine's runtime reduction while using a
small adaptive fine pass or a presentation-independent dispersion guard only
for cases resembling the Lighthouse EN trade-off. That work requires a new
machine profile and a new Actual Product human comparison. This checkpoint
does not retune the parked coarse objective, add a new large search, connect a
candidate to Product default, or declare the approximately 6.4–9.5 second
runtime release-ready.

## Unconfirmed and preserved boundaries

- This is not a formal Release acceptance and does not close the Initial
  Layout Release blocker.
- Apollo EN/JA were not newly human-reviewed in this checkpoint; their machine
  runs are included for runtime context only. Earlier human evidence remains
  separate.
- Exhaustive drag, Save Coordinates, same-payload reopen, stored/mixed
  authority, and fallback acceptance were not re-run here; they belong to the
  already accepted opt-in integration/persistence checkpoints.
- Product default and normal initial-placement behavior are unchanged.
- Persistence, dirty-state, fallback, and stored/mixed/coordinate-less
  authority are unchanged.
- Coarse remains parked and is not restored as the quality authority.
- No known routing, label, self-loop, connector, or CSS/glyph defect was fixed.
- Canonical fixtures, historical Fresh evidence, Fresh12 canonical Human
  Review, and governed lineage were not changed.
- No push, tag, release, deploy, or publication was performed.
