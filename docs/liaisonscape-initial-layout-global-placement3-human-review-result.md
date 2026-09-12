# LiaisonScape Initial-Layout Global Placement 3 Browser Inspection

Date: 2026-09-12

Status: MACHINE/BROWSER INSPECTION ONLY; READY FOR USER HUMAN REVIEW; PRODUCT DEFAULT AND RELEASE BLOCKER UNCHANGED

## Review boundary

This entry was previously described as completed Actual Product human visual
review. An evidence audit found that the observations were made by Codex using
browser automation; the comparison URLs were not handed to the user and no
user visual acceptance was performed. The prior acceptance wording is
therefore withdrawn.

The browser inspection compared the new `global-placement3` arm with the retained
ECR3 `adaptive-post` arm in the Actual Product review seam. The candidate is
the bounded viewport-anisotropic placement (`x=0.88`, `y=1.12`, structural
centroid based) with Stage 2 bypassed. Each cell was opened through the
canonical fixture endpoint and rendered by the ordinary Product `App` path,
including viewport fit, routing, Relation-label placement, Node-label
rendering, and connector/self-loop presentation. The diagnostic arm does not
save the in-memory coordinates; Save Coordinates remained disabled.

The non-authoritative browser inspection used a stable browser surface at
approximately 1127 by 1096 CSS pixels. These observations are diagnostic
context only; they are not user human acceptance evidence.

## Six-cell Codex browser observations (non-authoritative)

| Cell | Browser observation | Observation |
| --- | --- | --- |
| Lighthouse EN | MIXED / readable | The candidate had a clean, more open route arrangement and no new crossing or label clipping. However, fit was visibly lower (about 51% versus 60% for ECR3), so Nodes and labels were smaller and less comfortable to read. |
| Lighthouse JA | MIXED / readable | Japanese labels remained legible and the graph stayed usable, with no candidate-only overlap. The lower fit and slightly reduced screen Node separation made the text/Node footprint less comfortable than ECR3. |
| Titanic EN | MIXED / readable | The candidate reduced the central spatial pressure and routes remained traceable, but the fit fell to about 41% versus 46% and the smaller labels weakened readability. The known parallel-edge/long-label presentation behavior was not treated as an Initial Layout defect. |
| Titanic JA | ACCEPTABLE; positive | The 56.8px to 123.2px screen Node separation improvement was perceptually useful: the central Titanic hub and surrounding Nodes were easier to scan. Relation labels and route corridors remained readable; no excessive stretch, clipping, or candidate-only crossing was observed. |
| Apollo EN | ACCEPTABLE; positive | The candidate used the available viewport well, with larger readable Nodes and labels than ECR3 in this cell. Curved/straight routes and the central labels remained traceable without a new candidate-only defect. |
| Apollo JA | ACCEPTABLE; positive | Japanese Node and Relation labels remained readable with useful spacing. The vertically redistributed layout did not create an unusable stretch or route/label collision; downstream presentation behavior was consistent with the reference. |

## Attribution and candidate-only regression

No discrete candidate-only routing, Relation-label, Node-label, self-loop,
connector, clipping, or viewport failure was observed. The principal
candidate-specific visual cost was a fit/readability trade-off in the
Lighthouse EN/JA and Titanic EN cells: the anisotropic extent lowered fitScale
and made the rendered footprint smaller even where graph-space or screen
separation improved. This is a real human-observed candidate trade-off, but
not evidence that routing or label authority moved into Initial Layout.

Titanic JA is a genuine positive case rather than a machine-only result. Its
large screen separation made the hub easier to scan while preserving readable
routes and labels. Apollo EN/JA also showed acceptable positive spacing. The
mixed Lighthouse/Titanic EN cells prevent claiming that one fixed anisotropic
transform is a quality-safe six-cell formulation.

The Stage-2 bypass remains plausible as a bounded research arm: review did
not reveal a new defect that specifically requires Stage 2 repair or
relaxation. It is not accepted as a universal Product replacement because
the fitScale/readability trade-off still needs a formulation change.

## Audited status and handoff

```text
Codex browser inspection quality            = MIXED / NON-AUTHORITATIVE
user human visual acceptance                = NOT PERFORMED
Titanic JA readability improvement          = OBSERVED BY CODEX; USER CONFIRMATION REQUIRED
candidate-only discrete visual regression   = NOT OBSERVED IN BROWSER INSPECTION
candidate-specific readability trade-off   = OBSERVED IN LIGHTHOUSE EN/JA, TITANIC EN
full ECR3 visual direction retained         = UNCONFIRMED BY USER
Stage-2 bypass                              = RETAIN AS DIAGNOSTIC HYPOTHESIS, NOT ADOPTION
candidate disposition                       = UNDECIDED PENDING USER REVIEW
handoff status                              = READY FOR USER HUMAN REVIEW
Initial Layout Release blocker              = STILL BLOCKED
Product default/adoption                   = HOLD / UNCHANGED
```

The previous `RETUNE` wording is not a completed candidate disposition; it is
retained only as a provisional interpretation of the browser inspection. The
next bounded study may reduce the anisotropic transform or make it
viewport-targeted with a readability/fit floor, while preserving the Titanic
JA separation benefit. It should not use fixture-specific coordinates. A new
candidate must receive a fresh machine comparison and fresh human review;
the ECR3 human ACCEPT is not inherited.

The user-facing comparison URLs and review instructions are recorded in
`liaisonscape-initial-layout-global-placement3-human-review-handoff.md`.
Acceptance must remain open until the user reports observations for the six
fixture/locale cells.

## Preserved boundaries

- Product default and Product adoption were not changed.
- The canonical fixtures and accepted coordinate canonicalization were not
  changed.
- Routing, Relation-label, Node-label, self-loop, connector, glyph, and CSS
  authority remain downstream Product responsibilities.
- Known presentation-track behavior was not fixed or reassigned to Initial
  Layout.
- Persistence, stored/mixed/coordinate-less authority, dirty-state, and Save
  Coordinates semantics were not changed.
- Historical Fresh evidence, Fresh12 canonical Human Review, and governed
  lineage were not changed.
- No push, tag, release, deploy, or publication was performed.
