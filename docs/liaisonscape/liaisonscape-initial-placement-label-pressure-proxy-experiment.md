# LiaisonScape Initial Placement Label-Pressure Proxy Experiment

## E2R-LIAISONSCAPE-INITIAL-PLACEMENT-LABEL-PRESSURE-PROXY-EXPERIMENT1

Date: 2026-08-30

### Exact result

`RESEARCH REQUIRED - LABEL PRESSURE IS TOO ROUTE-DEPENDENT FOR A STRAIGHT-CHORD PROXY`

The audit confirms that actual label pressure can be measured after production
routing, but a Node-coordinate-plus-topology proxy cannot predict it reliably
without either duplicating label measurement/geometry or making the proxy
route-dependent. Neither is suitable for an unreviewed initial-placement
objective in this checkpoint.

### Existing pipeline

The production sequence is `Relation -> routeGraphEdge -> placeEdgeLabel`.
`placeEdgeLabel` derives text width, candidate anchors along the route, normal
offsets, label-label overlap, label-Node pressure, other-edge pressure, and
movement stability. Manual label placement and self-loop handling are separate
owned/presentation concerns.

Route-independent information exists only partially: the internal text-width
calculation and fixed label height can estimate a footprint. The semantic
anchor, tangent/normal, candidate positions, occupied labels, and occupied edge
paths require route samples and therefore cannot be derived from Node centers
and topology alone.

### Candidate definitions

- L1: overlap of coarse chord-axis label rectangles
- L2: coarse label rectangle versus foreign Node body intersection
- L3: pairwise coarse label overlap area
- L4: raw chord-span versus label-width ratio, diagnostic only

No new margin, safety threshold, weighted energy, or production weight was
introduced. Self-loops, parallel Relations, shared endpoints, and manual label
positions were not silently folded into the ordinary proxy.

### Lighthouse comparison

The existing three-iteration materialized candidate remains the control and is
unchanged. A coarse chord label rectangle can identify obvious synthetic
label-label and label-Node overlaps, and separated synthetic labels produce
zero actual overlap. Long-versus-short labels also demonstrate that footprint
size matters. However, on Lighthouse the ranking is not stable against the
production route: route curvature, candidate sample selection, occupied-path
ordering, and foreign-edge pressure can move a label without changing the
coarse chord footprint.

Consequently, L1/L2/L3/L4 do not establish that the G3 central visual concern
is captured, and no production label-quality ranking or locale-independent
placement ranking is claimed. A label-aware initial placement would also need
an explicit decision about whether localized label dimensions may influence
Derived Node positions; that decision was not made here.

### Synthetic controls and cost

Actual-overlap, separated-label, label-Node-collision, and long/short-label
controls demonstrate the basic capability of rectangle diagnostics. A
high-degree hub exposes the central-pressure case, but does not select an
objective without a compactness rule. A naive proxy would be O(E² + E×V),
cheap enough computationally, yet its explanatory value is insufficient.

The production route and label helpers remain read-only ground truth. Direct
use inside the Node solver would create the previously identified feedback
loop and would make label text/locale part of initial placement. No solver,
routing, label, iteration, sample, or Runtime change was made. The existing
uncommitted three-iteration Lighthouse Coordinate candidate remains untouched.

### Decision and next step

Edge-only and coarse label-only proxies do not jointly justify a combined
production objective. The reserved next research boundary is a separately
specified coarse presentation proxy or the degree-centered outward-placement
hypothesis; neither is implemented here.

Verification: runtime baseline remains 280/280 tests, lint, and build passed;
`e2r-spec` validation and `git diff --check` passed.
