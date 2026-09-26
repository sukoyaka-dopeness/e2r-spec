# LiaisonScape Near-Center Winner Discontinuity Experiment

Date: 2026-09-01

This read-only experiment used the canonical App route order, provisional label
geometry, occupied paths, and live `routeGraphEdge`. A temporary observer read
candidate results; no score or candidate logic was copied or changed.

The four baseline winners were reproduced exactly: mentors `-52`, supervises
`-76`, sofia/archive `-156`, and authority/lighthouse `-24`.

| Relation | near-center observation | primary loss signal |
|---|---|---|
| clara-thomas-mentors | offsets 40 and 52 exist and are non-label safe, but score label pressure is 204600+ | Node-label pressure |
| clara-thomas-supervises | -40 exists but occupied overlap is true; -52 also occupied | occupied path + label halo |
| sofia-archive | 0 through 48 are Node/label unsafe; 60 is first non-label-safe candidate | Node pressure + label pressure |
| authority-lighthouse | 0 is non-label-safe but label pressure is 4027; current -24 wins | label pressure |

The static frontier therefore contains intermediate candidates; the observed
large route offsets are not explained by a near-center candidate-space gap.
The winning sequence remained stable under the bounded ±1/±2/±4/±8 source
perturbations in this static replay, so the reported temporal drag behavior was
not proven. The probe nevertheless shows a discrete selection frontier, not a
smooth curvature objective.

Result: **F7 / MIXED — different Relations lose near-center candidates for
different reasons**. The closest interpretation of the manual impression is a
selection problem involving label and occupied-path safety cliffs, with
geometric absolute offset amplification; it is not evidence for a normalized
curvature production score. No production change is justified.

The selected next checkpoint is
`E2R-LIAISONSCAPE-AUTOMATIC-ROUTE-NEAR-CENTER-LABEL-PRESSURE-CONTINUITY-EXPERIMENT1`.
Parallel, self-loop, label movement, and drag policy remain separate.
