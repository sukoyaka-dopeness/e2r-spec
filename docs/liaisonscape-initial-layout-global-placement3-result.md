# LiaisonScape Initial-Layout Global Placement 3

Date: 2026-09-12

Status: VIEWPORT-ANISOTROPIC CANDIDATE MACHINE-PROMISING; READY FOR ACTUAL PRODUCT HUMAN REVIEW; RELEASE BLOCKER REMAINS

## Scope

Global Spacing 2 showed that centered uniform expansion is largely cancelled
by viewport fitting. This checkpoint tests a different bounded formulation:
viewport-anisotropic placement. Around the structural centroid, the diagnostic
arm applies a generic axis transform of `x=0.88`, `y=1.12`, then uses the
existing Product routing, Relation-label, Node-label, feedback, hard-safety,
and viewport-fit functions. The Stage-2-off arm deliberately measures whether
the transformed structural result can make Stage-2 unnecessary; it does not
move any presentation authority into Initial Layout.

The transform is diagnostic-only and is not connected to Product startup,
default behavior, persistence, or coordinate authority.

## Formulation choice

The Actual Product viewport has an approximately 608 by 308 usable area after
its 96-unit padding, with an aspect ratio near 1.97. Uniform scaling preserves
the graph aspect and therefore often leaves the limiting fit axis unchanged.
The first alternative tested was a small, bounded anisotropic redistribution:
compress one world axis while expanding the other. This changes the shape that
the fixed viewport fit sees, rather than asking fit to scale an unchanged
aspect ratio. Both axis orientations were probed on all six cells. The
`y=1.12, x=0.88` orientation was retained as the more promising probe; the
opposite orientation generally produced longer screen routes and was not
selected for the next review.

## Matched screen-space comparison

The ECR3 reference used `finalist-limit=2`, exact geometry reuse,
`adaptive-cheap-ranking`, and `omit-fine`. The candidate used the same
diagnostic pipeline, with `viewport-anisotropic`, `x=0.88`, `y=1.12`, and
Stage-2 disabled. Values are fresh sequential measurements; elapsed time is
host-sensitive.

| Cell | ECR3 full / Stage 2 | Anisotropic full / Stage 2 | E2E ms ECR3 to candidate | Screen Node separation px | Screen near-20 routes | Route max px | Hard defects |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Lighthouse EN | 198 / 154 | 45 / 1 | 3,606 to 1,070 | 79.1 to 85.2 | 6 to 4 | 335.0 to 247.8 | none |
| Lighthouse JA | 196 / 152 | 45 / 1 | 3,704 to 1,056 | 86.7 to 85.2 | 5 to 4 | 341.9 to 247.8 | none |
| Titanic EN | 190 / 146 | 45 / 1 | 3,343 to 988 | 61.6 to 68.5 | 5 to 6 | 317.9 to 259.6 | none |
| Titanic JA | 190 / 146 | 45 / 1 | 3,018 to 988 | 56.8 to 123.2 | 6 to 4 | 232.8 to 229.4 | none |
| Apollo EN | 163 / 103 | 61 / 1 | 1,886 to 882 | 100.8 to 123.2 | 2 to 1 | 214.2 to 240.4 | none |
| Apollo JA | 180 / 120 | 61 / 1 | 2,043 to 907 | 99.9 to 123.2 | 5 to 3 | 223.0 to 239.3 | none |

The candidate changed the selected digest in all six cells, so it is a new
candidate and does not inherit the ECR3 human ACCEPT. Titanic JA is the key
positive case: the previous 56.8px minimum separation increased to 123.2px,
and the screen-near route count decreased from six to four. This is not fit
cancellation. Titanic EN also gains Node separation, although its near-label
count increases by one. Lighthouse JA has a small Node-separation regression.

Screen label-corridor clearance remained a trade-off: Titanic JA decreased
from 14.6px to 6.7px, Lighthouse EN from 13.9px to 11.0px, while Titanic EN
decreased slightly from 12.5px to 11.5px. Apollo EN decreased from 21.1px to
16.5px. These values are not hard failures, but they require direct Product
visual review for Relation-label and route readability.

## Stage-2 and full-presentation volume

The Stage-2-off candidate used one final authoritative presentation evaluation
per structural result and no relaxation. Its full-evaluation count was 45 for
Lighthouse/Titanic and 61 for Apollo, versus ECR3's 163-198. The resulting E2E
range was 0.882-1.070 seconds. All six selected results had zero crossings,
zero Relation-label route hits, zero Node-label overlap, and zero graph-space
hard `labelNear20` defects in the corrected run.

For contrast, allowing existing Stage-2 to run on the anisotropic starting
state did not provide a useful reduction. Its Stage-2 counts were 169, 188,
153, 131, 117, and 119 for Lighthouse EN/JA, Titanic EN/JA, and Apollo EN/JA
respectively, with Lighthouse EN/JA producing Relation-label route hits.
The full arm therefore does not justify retaining Stage-2 for this formulation
without further review. The promising property is the bounded structural
placement itself, not a claim that the full Post relaxation is equivalent.

## Stage-2-off authority boundary

The candidate's single evaluation still runs the Product presentation
derivation for the transformed positions, including routed Edges, Relation-
labels, Node-label placement, feedback, and viewport-fit metrics. It omits the
iterative repair/relaxation search only as an explicit diagnostic arm. This
preserves the distinction between using presentation metrics to audit a
candidate and transferring routing or label ownership to Initial Layout.

## Decision

```text
formulation                         = bounded viewport-anisotropic placement (x=.88, y=1.12)
Titanic JA fit cancellation         = escaped; 56.8px -> 123.2px screen separation
six-cell screen-space quality       = machine-mixed but promising
Stage-2 reduction                   = approximately 99% of Stage-2 calls in the diagnostic arm
selected-output retention           = NO; all six digests changed
candidate-only hard regression      = none observed in the Stage-2-off arm
human visual review                 = REQUIRED; candidate is READY FOR ACTUAL PRODUCT HUMAN REVIEW
disposition                         = CONTINUE to human visual review, not adoption
```

Human review must specifically inspect Node-label and Relation-label
readability, route corridors, excessive visual stretch, and whether the strong
Titanic JA separation is perceptually useful. Machine metrics do not close
that gate. The opposite anisotropic orientation and the Stage-2-full arm are
not retained as accepted behavior.

## Boundaries and validation

- Product default/adoption, canonical samples, accepted coordinate
  canonicalization, persistence, and stored/mixed/coordinate-less authority
  were unchanged.
- Routing, Relation-label, Node-label, Self-loop, connector, glyph, and CSS
  authority remain downstream Product responsibilities.
- ECR3 human ACCEPT was not inherited by this candidate.
- Historical Global Spacing evidence, Fresh evidence, Fresh12 canonical Human
  Review, and governed lineage were not changed.
- No push, tag, release, deploy, or publication was performed.

Validation:

- LiaisonScape suite: 371/371 PASS;
- lint: PASS;
- production build: PASS;
- E2R-SPEC `npm run validate`: PASS;
- diff check: PASS.

The Initial Layout Release blocker remains active. Product default behavior
remains unchanged. The next bounded step is Actual Product human review of the
anisotropic Stage-2-off candidate; it is not Product adoption.
