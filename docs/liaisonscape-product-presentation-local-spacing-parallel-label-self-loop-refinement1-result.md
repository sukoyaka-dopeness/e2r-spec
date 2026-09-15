# LiaisonScape Product Presentation Local Spacing + Parallel/Label/Self-loop Refinement 1

Date: 2026-09-16

## Checkpoint purpose

This bounded checkpoint re-evaluates Product presentation after the current
Structural Placement research. It does not create a new global placement
solver. The existing Frontier-12 `parallel-self-loop-control` geometry was
used as the control, with the broad Node topology and ordering retained.

The diagnostic experiment compared:

- current positions with the normal Product route policy;
- the same positions with the existing development-only `bundle-16`, `pair-16`,
  and `corridor-aware-16` route variants;
- bounded alpha/beta local spacing at 1.15x and 1.30x pair distance;
- twelve diagnostic Self-loop angle/radius probes.

The experiment is recorded in the LiaisonScape artifact
[`result-summary.json`](../../e2r-liaison-scape/experimental/product-presentation-local-spacing-parallel-label-self-loop-refinement1/result-summary.json).
The Actual Product smoke surface is indexed in
[`visual-evidence-index.md`](../../e2r-liaison-scape/experimental/product-evaluation-seam/product-presentation-local-spacing-parallel-label-self-loop-refinement1/visual-evidence-index.md).

## Evidence

### Current geometry and local spacing

The control geometry retained all eight Node identities and the same broad
ordering. Alpha/beta distance was 173 source units. The bounded local probes
changed only that pair: 198.95 units at 1.15x and 224.90 units at 1.30x.

Spacing alone produced a useful but limited signal. At 1.15x with the normal
route policy, alpha/beta moved from the effective 1:3 physical-side result to
2:2, with no measured occupied-path conflict and no crossing. However, the
minimum forward endpoint angular separation fell from 0.866 to 0.765 radians,
the median route length increased from 112.77 to 120, and one ownership
ambiguity remained. At 1.30x the separation fell further to 0.684 radians and
two ownership ambiguities were measured. The larger extent was not a quality
winner.

This means local Node spacing can create capacity, but it does not by itself
establish better Parallel endpoint allocation or Relation-label ownership.
It also does not change the Self-loop orientation.

### Product-owned Parallel route refinement

The same current Node geometry with `bundle-16` (and the equivalent measured
pair/corridor variants on this fixture) produced a 2:2 alpha/beta physical-side
distribution, increased endpoint separation to 1.149 radians, removed the
measured ownership ambiguity, and preserved zero crossings and zero final
route-conflict count. The trade-off was a lower median ownership margin
(31.32 to 13.36 source units) and a modest median route-length increase to
116.24. The Actual Product smoke showed a visibly wider four-lane bundle with
more immediate reverse-direction and label association, without a gross
ordinary-route, Node-collision, or Self-loop break.

This is evidence for a Product-owned local route-presentation direction, not
permission to force side symmetry. The source route arbitration still owns
occupied-path and label-pressure feasibility, and the development-only variant
has not been adopted as a Product default.

### Relation labels

The current Product label placer already places labels directly on or very
near the owner path when a safe candidate exists: the measured median owner
path distance was 0 in the control and route-variant probes. The residual is
not simply excessive global clearance. It is the competing need to avoid other
routes, labels, and Node bodies. Widening the bundle improved the measured
ownership ambiguity count in the control, but reduced the aggregate foreign
route margin. Therefore, a label-only “move closer” rule is not established.

The correct boundary remains Product final Relation-label placement. No label
authority moved into Structural Placement.

### Self-loop

The automatic Self-loop selector starts from
`preferred = -Math.PI / 2 + parallelIndex % 3 * 2*Math.PI/3`, samples 36
orientations at 10-degree steps, and scores Node pressure plus a small
preferred-angle penalty. On epsilon in this control, the selected orientation
was exactly `-Math.PI/2` (upper), with no Node-pressure evidence strong enough
to dislodge that preference. This explains the observed upper bias without
showing that the selector lacks angular candidates.

The twelve manual angle/radius probes demonstrated that right, down, and left
geometries can be constructed without a final occupied-path conflict on this
fixture. They also changed label and route-length trade-offs. These are
diagnostic-only manual overrides, not an automatic Self-loop candidate or
Human Review evidence. A safe orientation-selection refinement therefore was
not established in this checkpoint.

Ordinary epsilon incident Relations and the gamma/delta balanced Parallel
control remained intact in the Product smoke. No Self-loop routing authority
was moved or reopened.

### Viewport

`fitGraphView` currently fits Node centers with a fixed 800x500 contract, while
the diagnostic envelope also includes routes and labels. The measured
post-node-fit occupied-center offsets were small but non-zero, and the
presentation envelope was not the same as the Node-only envelope. In the
Actual Product surface, the operation-local preview initially appeared small
and left-biased; invoking the real Product `Reset view` reached 100% and
visually centered the graph in the graph surface for both current and widened
bundle views.

The evidence therefore isolates an initial preview/canvas framing difference
from a demonstrated Reset centering defect. No viewport fix was adopted, and
Node geometry was not moved to compensate for camera behavior.

## Responsibility attribution

| Residual or observation | Attribution |
| --- | --- |
| Alpha/beta broad ordering and pair distance | Structural Placement input geometry; bounded local spacing can influence capacity but is not a global replacement. |
| 1:3 side result in the normal policy | Product Parallel/reverse route arbitration under occupied-path and Relation-label pressure. |
| Wider 2:2 bundle in `bundle-16` | Product-owned development route presentation variant; not a new Incident allocator or endpoint-plan authority. |
| Label owner ambiguity and foreign-route margin | Product Relation-label placement coupled with route geometry and local capacity. |
| Self-loop upper bias | Product Self-loop selector's preferred orientation and weak angular preference penalty; not Structural Placement. |
| Initial small/left-biased preview vs centered Reset | Viewport/preview initialization framing; not evidence for changing Node ordering. |
| Cross-responsibility trade-offs | Node spacing, route arbitration, label placement, and Self-loop geometry interact; no single metric is sufficient. |

Parallel/Incident architecture remains closed. The current Product path still
does not call the experimental Incident allocator or expose endpoint-plan
output. Ordinary routing, endpoint attachment, final Relation-label placement,
Node-label placement, Self-loop routing, viewport/camera, persistence, and
Save Coordinates remain in their existing authorities.

## Outcome and readiness

The checkpoint is classified:

**A/B/C combined: LOCAL PRODUCT ROUTE-PRESENTATION DIRECTION PROMISING;
SPACING HELPS CAPACITY BUT ROUTING/LABEL TRADE-OFF REMAINS; SELF-LOOP
REFINEMENT NOT ESTABLISHED.**

The strongest bounded signal is current geometry plus the Product-owned
development-only widened bundle policy. It is worth a narrowly scoped follow-up
only if the policy is re-expressed as a tested bounded Product presentation
candidate with reverse, incident, label-heavy, and Self-loop coexistence
controls. It is not a production provider or default.

There is no new Human Review candidate. The checkpoint remains `NOT READY` for
formal visual acceptance. The visual smoke was sufficient to detect no gross
break in the widened bundle, but it is not acceptance. Self-loop angle/radius
and any viewport change require separate bounded checkpoints.

Standing statuses remain:

- Product default/adoption: `HOLD`;
- production provider: `NOT ESTABLISHED`;
- quality solver: `HOLD / NOT ESTABLISHED`;
- Human Review: `NOT READY`;
- Initial Layout Release blocker: `OPEN`;
- Adaptive Initial Placement Cascade: inactive.

## Changed files and validation

LiaisonScape added the diagnostic tool, JSON artifact, Actual Product preview
seam, visual-evidence index, and a bounded artifact test. The normal Product
source, Dataset, stored/authored Coordinates, persistence, defaults, and
provider were not changed. The existing unrelated dirty files were preserved.

Validation completed:

- diagnostic tool regenerated the artifact successfully;
- LiaisonScape `npm run lint` passed;
- `git diff --check` passed for the owned changes;
- Actual Product current/refined smoke and Reset inspection completed;
- no push, tag, release, deploy, publish, reset, stash, clean, rebase, squash,
  or amend was performed.

No new reusable knowledge candidate is warranted: this remains
repository-local, single-control evidence and should stay in the checkpoint
document until independently confirmed.
