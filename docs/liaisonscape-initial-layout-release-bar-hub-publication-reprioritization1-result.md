# LiaisonScape Initial Layout Release-Bar / Hub Publication Re-prioritization 1

Date: 2026-09-15

## Disposition

`RELEASE BAR RE-PRIORITIZED / INITIAL LAYOUT RESEARCH MOVED OFF THE HUB
CRITICAL PATH`

This is a release-scope and roadmap checkpoint, not a new layout algorithm
checkpoint. The evidence supports separating the Hub/publication bar from the
unfinished general Initial Layout research:

1. Representative Sample Release-Quality Acceptance;
2. General / Complex Dataset Practicality Gate.

The first gate is the next checkpoint. The second gate follows only after the
representative sample bar is directly evaluated.

The Initial Layout research is not declared complete, and the current
research candidate is not adopted. Quality solver remains `HOLD / NOT
ESTABLISHED`, production provider remains `NOT ESTABLISHED`, Product
integration/default remains `HOLD`, and Human Review for the research
candidates remains `NOT READY`.

## Source-first current state

The current local source and accepted records establish the following:

- `e2r-spec/examples/` contains eight canonical public-sample variants:
  Apollo 11, Ashen Crown, Titanic, and Lighthouse in EN/JA;
- LiaisonScape `public/` contains only the Lighthouse EN/JA compatibility
  mirror, and its normal Home sample loader opens that pair;
- LiaisonScape has a development-only acceptance-fixture endpoint for named
  Titanic, Apollo 11, and Lighthouse EN/JA cases. This endpoint reads the
  canonical e2r-spec examples and does not add a production sample UI, copy
  fixture data into Product assets, or change Dataset semantics;
- the accepted Lighthouse public-sample refresh has canonical/mirror parity
  and Validator compatibility, but public GitHub/deployment propagation is a
  separate release-time/public-sync boundary;
- the most recent Actual Product human-acceptance record is partial: Lighthouse
  was observed, while Titanic/Apollo were previously unconfirmed in that run.
  The bounded fixture-access checkpoint later demonstrated safe Product-path
  loading for Titanic/Apollo, but same-payload Save/reopen and complete visual
  acceptance remain unconfirmed.

These distinctions prevent the repository's canonical sample inventory, the
LiaisonScape runtime sample inventory, the dev-only acceptance inventory, and
the Hub URL inventory from being treated as one number.

## Release Gate 1 — Representative Sample Quality Acceptance

This is a release-facing Product gate, not a research benchmark. It asks
whether the representative sample set is usable in the Actual Product surface
with ordinary controls.

Minimum evidence:

- representative EN/JA samples open through the trustworthy Product path;
- no obvious Node-body overlap or avoidable label collision at the initial
  view;
- topology and primary graph structure are understandable at first view;
- ordinary pan and zoom allow inspection of the graph;
- ordinary representative samples do not present the current research
  residual as an obvious release-quality failure;
- the acceptance records the exact sample, locale, source path, Product
  route, and whether the result used stored Coordinates, current Product
  placement, or an explicit diagnostic opt-in;
- acceptance does not imply that arbitrary Dataset Auto Layout is solved.

The current status is `OPEN / NOT CLOSED`. Lighthouse has prior provisional
Actual Product evidence. Titanic and Apollo have a safe dev-only acquisition
path and prior Product-path observations, but a fresh bounded release-quality
acceptance with the exact sample/locale matrix and any required same-payload
reopen remains to be performed. Ashen Crown is canonical in e2r-spec but is
not currently exposed by the LiaisonScape normal sample loader and therefore
must not be silently marked PASS.

Sample-specific human-reviewed stored Coordinates may be accepted as a
fallback for a representative public sample if explicitly identified and
recorded. This is not a substitute for general Dataset Auto Layout and must
not change canonical Dataset content, persistence semantics, or the ordinary
unknown-Dataset path.

## Release Gate 2 — General / Complex Dataset Practicality

This gate is separate from representative sample acceptance. It asks whether
an unknown or user-provided Dataset can begin use with a Fast Initial Placement
and, where needed, an explicit High-quality Auto Layout operation.

The gate should measure practical behavior across bounded canonical, dense,
long-label, and difficult controls, including:

- time to usable first view for Fast Initial Placement;
- time to useful HQ improvement when the user explicitly requests it;
- stable UI behavior while HQ work runs, including the established Worker
  isolation boundary;
- whole-result or safe fallback behavior on unsafe, over-budget, or failed
  HQ work;
- preservation of stored/authored Coordinates and existing Product
  ownership boundaries.

The current roadmap may describe a target as `roughly / on the order of 10
seconds` for practical HQ work. This is not a hard browser-independent SLA.
It must not be converted into a `10.000 sec hard deadline` without fixture,
hardware, browser, Worker-overhead, and workload-envelope evidence.

The current status is `NOT STARTED AS A RELEASE GATE`. Existing worker,
verification, benchmark, and bounded-solver measurements are architecture and
feasibility evidence; they do not by themselves establish this release gate.

## What remains research, not a Hub blocker

The following remain valid post-release or later-quality tracks unless new
release evidence shows an ordinary representative failure:

- single-connected extreme stress cases such as 14 Nodes / 49 Relations with
  long labels;
- owner-aware Relation-label and route-corridor refinement;
- stronger occupied-geometry convergence and nonzero readable clearance;
- HQ metric refinement and broader solver portfolios;
- Adaptive Initial Placement Cascade;
- perfect label packing or complete dense Relation ownership resolution.

The extreme stress fixture remains valuable as a diagnostic control. Its
failure is not automatically an Initial Layout Release blocker. Conversely,
the research residual must not be hidden by declaring the general Dataset
gate passed without measuring unknown/complex input behavior.

## Responsibility and safety boundary

Fast Initial Placement owns a bounded, derived Node-geometry start state.
Explicit High-quality Auto Layout, if later exposed, remains a separate
operation with its existing Product-authoritative routing, Parallel/Incident,
endpoint-plan, Relation-label, Self-loop, verification, and cancellation
boundaries.

The checkpoint does not authorize:

- adopting the current quality solver or any research provider;
- changing Product defaults or the normal sample loader;
- moving routing or final label placement into Structural Placement;
- using curated sample Coordinates as a general Auto Layout replacement;
- changing Dataset content, stored Coordinates, persistence, dirty-state, or
  Save Coordinates;
- starting Adaptive Initial Placement Cascade;
- pushing, tagging, releasing, deploying, or publishing.

## Re-prioritized roadmap

The current release bar is:

1. complete a bounded Representative Sample Release-Quality Acceptance;
2. record the exact PASS / PARTIAL / NOT READY matrix without inheriting old
   Human Review evidence;
3. complete a General / Complex Dataset Practicality Gate with a practical,
   non-SLA time target;
4. only then decide whether unresolved Initial Layout research leaves the Hub
   critical path or continues as post-release quality work.

No Product source was changed in this checkpoint. No knowledge candidate is
added: this is a LiaisonScape/e2r-spec release-scope decision grounded in
repository-local evidence and existing accepted boundaries.
