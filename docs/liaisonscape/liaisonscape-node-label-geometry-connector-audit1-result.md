# LiaisonScape Node-label Geometry and Connector Audit 1

Date: 2026-09-13

Checkpoint: `E2R-LIAISONSCAPE-NODE-LABEL-CONNECTOR-VISIBILITY-AUDIT1`

Disposition: `PASS / BOUNDED PRESENTATION FIX`

This checkpoint audits the Node-owned label geometry used by LiaisonScape and
applies a bounded connector-attachment fix. It does not change Initial Layout,
Global Placement 3, routing authority, persistence, or Product default
behavior.

## Current geometry contracts

| Responsibility | Current implementation before this checkpoint |
| --- | --- |
| Visual rendering | `App.tsx` renders one SVG title and zero to two description `<text>` elements. Both use a 4px white outline (`paint-order: stroke`) and baseline offsets of `4`, `-3/12`, or `-15/0/15`. |
| Collision / obstacle | `placeNodeLabel` returns a centered `LabelRect`; its width is the estimated content width plus 12px, clamped to 48–180px, and its height is 20/34/48px. The same rectangle is consumed by route and label placement, including the 4px hard clearance and 16px route halo. |
| Hit / interaction | The transparent `.label-drag-hit` SVG rectangle uses the same `LabelRect` width/height and follows manual placement through the translated `x/y`. Existing pointer, hover, context-menu, and drag ownership remain on this group. |
| Connector attachment | `App.tsx` previously intersected the ray from the Node center with the near side of the full `LabelRect`. The line is painted before the transparent hit rectangle and outlined text. |

The apparent large lower/side margin was not a visible background: the hit
rectangle is transparent. It was the combination of a conservative collision /
hit footprint, baseline-positioned text, and a connector that stopped at that
footprint rather than at the visible text-plus-outline envelope. The extra
horizontal 8px total (when the 48px minimum is not active) is intentional
collision/hit conservatism. The 20/34/48px vertical values are also not safe to
shrink blindly: the three-line title can already extend slightly beyond the
top of the conservative rectangle under the deterministic font estimate.

## Bounded fix

`src/viewport.ts` now exposes `getNodeLabelTextGeometry`, which centralizes the
description wrapping, baselines, conservative `LabelRect` dimensions, and a
smaller deterministic visual envelope corresponding to estimated text plus the
existing 4px outline. `placeNodeLabel` consumes the same dimensions that the
SVG renderer consumes, eliminating a possible renderer/placement drift.

`nodeLabelConnectorEndpoint` uses the near-side intersection of the Node-to-label
ray with that visual envelope. Therefore a transparent collision/hit rectangle
no longer makes a diagonal or upper connector appear to stop short of the
glyphs. The collision and hit rectangle remain unchanged; this deliberately
avoids transferring an ink-bound estimate into Product route authority.

### Node-side attachment follow-up

The former App-side connector start was `direction * 33`, which modeled a
virtual circle and could place the visible line inside the 64x64, `rx=12` Node.
The connector now calls the shared `getEntityAttachment` dispatch with the
exported `ENTITY_ATTACHMENT_SHAPE` and the Node-to-label direction. Cardinal
starts are therefore 32px from the center and diagonal starts follow the
rounded-rectangle corner arc. This is the same attachment contract used by
ordinary Relation routing.

The shape is a discriminated contract rather than a rendering-type test. A
future circle, ellipse, polygon, or simplified attachment hull can add a shape
variant and its boundary primitive behind `getEntityAttachment`; callers such
as Relation routing and Node-label connectors keep the same center/direction /
shape interface. Complex SVG rendering need not be treated as its own
attachment geometry unless an explicit shape variant is added.

Relation-owned labels remain on their existing contract. No Relation-label,
route, self-loop, connector layer, glyph, or CSS authority was moved into
Initial Layout.

## Validation and Product-surface check

- LiaisonScape `npm test`: **375/375 PASS**.
- LiaisonScape `npm run lint`: **PASS**.
- LiaisonScape `npm run build`: **PASS**.
- LiaisonScape `git diff --check`: **PASS**.
- The six Global Placement 3 diagnostic review cells were opened through the
  normal Product rendering surface: Lighthouse EN/JA (10/10 Nodes and
  Node-labels), Titanic EN/JA (13/13), and Apollo EN/JA (9/9). Each loaded
  without a Product error, and every displayed Node had one Node-label group
  and one connector in the inspected surface.

The six-cell check is machine/browser inspection, not a new external human
acceptance. Node positions, routing inputs, Relation-label inputs, viewport
semantics, and Dataset state were not changed. The existing Apollo drag-route
regression tests also pass after the fix, providing a non-regression check for
manual movement and route presentation.

## Responsibility and result

The conservative `LabelRect` remains the collision and hit authority. The
smaller visual envelope is used only for connector attachment, which addresses
the visibility issue without changing route eligibility or manual placement
semantics. The Global Placement 3 canonical fixture surfaces are therefore
presentation-neutral for nodes, routes, labels, viewport, selection, and
Dataset behavior, with the intended connector endpoint improvement only.

Result:

```text
Node-label geometry audit             = PASS
Node-label connector visibility fix  = PASS / bounded
collision footprint tightening       = NOT ADOPTED (route safety preserved)
manual placement / hit semantics     = UNCHANGED
Global Placement 3 regression        = NOT OBSERVED in automated/browser checks
Initial Layout authority             = UNCHANGED
Product default / adoption           = UNCHANGED / HOLD
```

Further ink-based collision tightening remains a separate research question;
this checkpoint does not reopen that Production decision.

Node-side attachment follow-up result:

```text
former Node start                  = direction * 33 (virtual circle)
current Node start                 = getEntityAttachment + ENTITY_ATTACHMENT_SHAPE
rounded-rectangle cardinal         = exact 32px boundary
rounded-rectangle diagonal         = corner-aware boundary intersection
connector z-order workaround       = not required
Relation attachment consistency    = PASS
```

## Node-label connector presentation follow-up

Date: 2026-09-13

Checkpoint: `E2R-LIAISONSCAPE-NODE-LABEL-CONNECTOR-PRESENTATION-FOLLOWUP1`

Result: `PASS / BOUNDED PRESENTATION FIX`

The remaining rectangular impression was caused by using one axis-aligned
`visualBounds` rectangle for every multiline label. That rectangle is still a
valid enclosing fallback, but a short line could inherit a longer sibling's
width when the connector ray approached it diagonally or from the side.

`NodeLabelTextGeometry` now exposes deterministic `visualLines`, one envelope
per rendered title/description line, using the existing text-width estimate
plus the existing white outline. `nodeLabelConnectorEndpoint` first intersects
the Node-to-label ray with the nearest applicable line envelope. If the ray
passes through the gap between disjoint line envelopes, it conservatively uses
the prior enclosing `visualBounds` boundary; it never falls back to the Node
center. `LabelRect` remains the collision/hit geometry and is not recombined
with this visual attachment geometry.

The connector is now a direct child painted before connection affordances and
the `.entity-body`; the label group remains after the body. Thus selected or
focused Node body styling and visible connection handles paint over the
auxiliary connector. Selection/focus remains application view state and does
not enter Dataset or layout semantics.

Product-surface inspection opened the six Global Placement 3 canonical cells
through the ordinary review surface: Lighthouse EN/JA (10 labels/connectors),
Titanic EN/JA (13), and Apollo EN/JA (9). All loaded without Product errors;
the Titanic JA surface rendered the multiline Japanese labels and connectors,
and a selected Lighthouse Node retained the expected body-over-connector DOM
order. The automated Product rendering test also asserts connector < body <
label-group order. Existing routing, label placement, relation presentation,
manual placement, persistence, and Global Placement 3 semantics were not
changed. This is browser inspection plus automated evidence, not a new user
human acceptance.

Validation:

- targeted graph/UI tests: **139/139 PASS**
- full LiaisonScape test suite: **376/376 PASS**
- `npm run lint`: **PASS**
- `npm run build`: **PASS**
- `git diff --check`: **PASS**
- E2R-SPEC `npm run validate`: **PASS**

Disposition:

```text
per-line visual attachment             = PASS / bounded
selection/focus layering               = PASS / connector under affordances
collision / hit / routing authority    = UNCHANGED
Global Placement 3 regression          = NOT OBSERVED
Product default / adoption             = UNCHANGED / HOLD
Initial Layout Release blocker         = UNCHANGED / OPEN
```
