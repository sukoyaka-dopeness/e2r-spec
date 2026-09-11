# LiaisonScape Initial-Layout ECR3 Adaptive Post Actual-Product Human Acceptance 1

Date: 2026-09-12

Status: ACCEPT; ECR3 VISUAL GATE PASSED; PRODUCT ADOPTION AND RELEASE REMAIN
BLOCKED

## Scope and review boundary

This checkpoint is the human visual review of the ECR3
`adaptive-cheap-ranking` candidate. It compares three coordinate arms through
the same LiaisonScape Actual Product surface:

1. `current`: the existing Product placement;
2. `full-post`: the CR2 retained reference, with full presentation evaluation;
3. `adaptive-post`: ECR3 order-preserving adaptive retention.

The reviewed cells were canonical coordinate-less Lighthouse, Titanic, and
Apollo 11 payloads in EN and JA. The dev-only ECR3 surface generates the
selected Post coordinates from the canonical fixture on the Vite server and
passes only those derived coordinates into the existing `App` before viewport
fit. Dataset parse and acceptance, graph construction, Product routing,
Relation-label placement, viewport, selection, and Entity drag remain the
normal App path. No Dataset payload was changed or saved.

The ECR3 surface is an observation seam, not a Product provider or adoption
path. It is available only in the Vite development server and accepts a
whitelisted fixture, locale, and arm. The canonical fixture files remain the
single source for both Dataset and candidate generation.

## Human visual observations

| Cell | Current | Full Post | Adaptive Post | Human result |
| --- | --- | --- | --- | --- |
| Lighthouse EN | Compact central cluster; several route/label corridors are harder to scan. | Evenly distributed nodes and clearer long corridors; labels readable. | Same Post direction; slightly more stretched/lower fit than full Post, but labels and routes remained readable. | ACCEPT |
| Lighthouse JA | Readable Japanese text, with denser central scanning. | More separated structure and readable Japanese labels. | Natural distributed structure; no clipping, new overlap, or candidate-only crossing observed. | ACCEPT |
| Titanic EN | Strong RMS Titanic hub crowding and reduced scanability. | Wide radial organization with better surrounding-node separation. | Retained the wide radial organization and readability; no additional crowding or clipping. | ACCEPT |
| Titanic JA | Compact hub with harder-to-follow relations. | Distributed arrangement with improved scanability. | Distributed and stable Japanese layout; the exact arrangement differs, but no new candidate-only defect was observed. | ACCEPT |
| Apollo EN | Central overlap/crowding makes several labels harder to follow. | Clear separated ring-like organization and readable labels. | Visually close to full Post; node, route, and label readability retained. | ACCEPT |
| Apollo JA | Compact central cluster and repeated relation-label pressure. | Separated arrangement with readable Japanese labels. | Same separated direction and usable viewport; repeated-label behavior is shared presentation behavior. | ACCEPT |

Across all six adaptive cells, Node cohesion, spacing, spread, viewport fit,
Node-label readability, Relation-label readability, and route readability were
acceptable for continued research. The adaptive arm was not pixel-equivalent
to full Post: Lighthouse EN showed the clearest extra spread/lower fit, and
the machine-selected digest/trajectory differs by design. That difference did
not produce a human-observed candidate-only usability regression in this
review.

## Interaction observation

On Titanic EN adaptive, selecting the central RMS Titanic Entity displayed the
normal Product selection state and automatic Node-label ownership. Dragging
that Entity produced the normal Product route and Relation-label recomputation;
the surrounding relation presentation remained usable. The existing temporary
dirty message appeared and Save Coordinates became enabled, demonstrating the
normal interaction boundary. Save was not invoked, so this checkpoint does not
create persistence evidence or change the Dataset.

The remaining selection/drag/viewport behavior is still owned by `App`. No
adaptive-specific routing, Relation-label, Self-loop, connector, glyph, or CSS
authority was introduced.

## Machine evidence relationship

The preceding ECR3 matched audit remains the machine boundary. Adaptive
retention reduced full evaluations by 12.4%--31.9% and retained full-improving
candidates at 52.9%--85.2%; Titanic JA was the weakest recall cell. Adaptive
selected output differed from CR2 in all six cells. Hard presentation metrics
were zero in the measured cells, but extent, fitScale, and route lengths
changed. Human acceptance therefore establishes visual acceptability for this
candidate, not CR2 equivalence or release safety.

The Lighthouse EN machine trade-off (higher selected score than CR2 in the
prior measurement and a more spread/lower-fit output) corresponds to a visible
layout trade-off, but not to a human-observed regression severe enough to
reject the candidate. This remains an unresolved optimization risk.

## Responsibility boundary

The following observations are not attributed to ECR3 Initial Layout:

- Titanic parallel-edge and long Relation-label presentation;
- repeated labels near dense hubs;
- Self-loop angle tendency;
- connector or other downstream glyph/CSS behavior.

These behaviors were observed through the same Product presentation pipeline
and were shared by the arms or already belong to the presentation track. No
known presentation defect was fixed in this checkpoint.

## Decision

```text
ECR3 adaptive Post visual quality       = ACCEPT
full Post visual direction retained     = YES, in all six reviewed cells
candidate-only visual regression        = NOT OBSERVED
ECR3 visual gate                        = PASSED FOR CONTINUED RESEARCH
Product default behavior                = UNCHANGED
Product default adoption                = HOLD
Initial Layout Release blocker          = STILL BLOCKED
Actual Product acceptance scope         = ECR3 visual review only
```

This ACCEPT does not connect ECR3 to the Product default, does not claim Post
equivalence, and does not remove the runtime Release blocker. The next work
may investigate further acceleration or a release-oriented runtime target,
with human review retained as a required gate.

## Preserved boundaries and validation

- Stored, mixed, coordinate-less, Derived, dirty-state, Save Coordinates, and
  same-payload reopen semantics were not changed.
- Canonical samples, accepted final-coordinate canonicalization, historical
  Fresh evidence, Fresh12 canonical Human Review, and governed lineage were
  not changed.
- No routing, Relation-label, Node-label, Self-loop, or connector fix was
  included.
- No push, tag, release, deploy, or publication was performed.

The LiaisonScape validation result for the bounded seam was:

- full test suite: 368/368 PASS;
- lint: PASS;
- production build: PASS;
- ECR3 seam syntax/type validation: PASS;
- E2R-SPEC validation: PASS;
- staged diff check: PASS.
