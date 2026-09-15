# LiaisonScape Bounded Label-Capacity / Screen-Scale / Ownership Formulation Refinement 1

Date: 2026-09-15

## Result

Classification: `D. MULTI-COMPONENT BENEFIT CONFIRMED / SINGLE-COMPONENT FORMULATION OPEN`.

The probe preserved the useful label-capacity direction and added a bounded
screen/ownership gate. It created viable improvements for multi-component
dense and Japanese fixtures, but the same formulation did not produce a
jointly safe candidate for a single connected dense core. Actual Product
inspection confirms that the remaining single-component failure is not solved
by component repacking or local capacity expansion alone.

## Formulation

Three deterministic variants were evaluated:

- `fit-constrained`: lower local expansion, 2D grouping/packing, and a
  baseline-relative fit budget;
- `ownership-corridor`: stronger spacing for long Relation labels and
  inter-group corridor demand;
- `joint-bounded`: the combined bounded local expansion, 2D packing, fit
  budget, and ownership diagnostics.

The internal grouping uses deterministic farthest-seed local groups inside
each connected component. It does not make connected components an authority
boundary and does not move routing, endpoint-plan, Parallel/Incident,
Relation-label, Node-label, Self-loop, viewport, or styling authority into
Structural Placement.

The screen-space gate uses the repository's Product viewport envelope
(`800 x 500`, existing fit padding) and compares candidates against the
current selection. It records effective text scale, label occupancy,
viewport-relative extent, post-fit Node separation, post-fit label dimensions,
and continuous owner-route minus nearest-foreign-route margin. A candidate is
jointly safe only when it meets the baseline-relative fit budget and does not
regress overlap, foreign-route, or ownership-ambiguity counts. Otherwise the
current candidate is retained for the preview control.

This is a diagnostic candidate gate, not production metric weighting or a
production solver objective.

## Evidence

| Fixture | Components | Current fit | Best probe fit | Current overlap/foreign/ambiguity | Best probe overlap/foreign/ambiguity | Jointly safe |
|---|---:|---:|---:|---:|---:|---:|
| canonical 8/10 | 2 | 0.885 | 0.809 | 0 / 0 / 0 | 0 / 0 / 1 | 0 |
| dense 14/49 | 3 | 0.481 | 0.635 | 13 / 46 / 39 | 6 / 74 / 39 | 0 |
| Japanese label-heavy 10/20 | 3 | 0.537 | 0.601 | 4 / 44 / 15 | 3 / 31 / 15 | 2 |
| single-connected dense-label 14/49 | 1 | 0.641 | 0.581 | 69 / 186 / 42 | 56 / 285 / 46 | 0 |
| Parallel/Incident 10/18 | 3 | 0.537 | 0.623 | 0 / 9 / 9 | 0 / 3 / 7 | 1 |
| Self-loop 8/11 | 2 | 0.885 | 0.809 | 0 / 0 / 0 | 1 / 0 / 0 | 0 |

The multi-component result confirms that 2D packing and local capacity
regions can preserve screen fit while reducing some label pressure. Japanese
best-probe foreign-route hits fall from `44` to `31`, with fit increasing from
`0.537` to `0.601`. Dense best-probe fit increases from `0.481` to `0.635`
and overlap falls from `13` to `6`, but foreign-route hits increase from `46`
to `74`; therefore it is an informative tradeoff, not a safe candidate.

The single-connected control is the decisive boundary. The best probe lowers
label overlap `69 -> 56`, but fit falls below the dynamic budget and
foreign-route hits rise `186 -> 285`, with ambiguity `42 -> 46`. The
formulation cannot create separated ownership corridors inside this connected
core without introducing route/label coupling that the Node candidate does not
own.

The continuous ownership margin is useful as a diagnostic signal. Dense best
probe has a negative median margin (`-1.3` screen units), while Japanese best
probe is `0`; neither supports a reliable ownership association. This signal
must remain diagnostic until a Product-authoritative Relation-label follow-up
defines how margin is interpreted.

## Actual Product smoke

The exact candidates were inspected in the real App renderer through the
operation-local, read-only preview and fitted with the Product viewport reset.
This was not formal acceptance.

- dense joint-bounded: `64%`; local separation and topology visibility
  improved, but route/label association remained crowded;
- Japanese ownership-corridor: `60%`; labels were less collision-prone, but
  long Relation-label association remained difficult;
- single-connected joint-bounded: `58%`; the graph remained a narrow
  label/route mass and visibly failed readability/ownership;
- canonical: the selection gate retained the current candidate at `88%`,
  clean and readable;
- Parallel/Incident joint-bounded: `62%`, lanes and fan-out remained readable;
- Self-loop: the gate retained the current candidate at `88%`, with the loop
  clear. This is smoke only, not Self-loop acceptance.

The smoke confirms that diagnostic graph-space improvements do not imply
screen-space ownership readability for a connected core.

## Responsibility and decision

The remaining single-connected failure is attributed to coupled capacity:

- Structural Placement: can provide local geometry diversity and bounded
  extent, but did not solve route ownership in the connected core;
- ordinary routing and Relation-label presentation: remain the direct source
  of the foreign-route and association residual;
- endpoint-plan / Parallel/Incident: unchanged and not implicated as an
  authority regression;
- viewport: exposes a real information-density constraint but is not changed;
- combined coupling: a Node-only candidate cannot guarantee an ownership
  corridor when many Product-authoritative routes and labels share one core.

No production metric, provider, default, Dataset, persistence, dirty-state,
Save Coordinates, or manual semantics changed. Worker execution remains
`ESTABLISHED IN TESTED ENVELOPE`; browser wall-time remains
`NOT ESTABLISHED`.

## Readiness and next position

- label-capacity signal: `VALID`;
- multi-component screen/ownership refinement: `PROMISING / BOUNDED`;
- single-connected formulation: `OPEN`;
- quality solver: `HOLD / NOT ESTABLISHED`;
- production provider: `NOT ESTABLISHED`;
- Product integration/default: `HOLD`;
- Human Review: `NOT READY`;
- Initial Layout Release blocker: `OPEN`.

The next bounded work should not increase expansion intensity. It should
decide whether a Product-authoritative Relation-label ownership/corridor
formulation can expose a bounded request back to candidate generation, or
whether the connected-core boundary should remain outside single-placement
quality claims. Adaptive Cascade and formal Human Review do not follow from
this checkpoint.

No workspace knowledge candidate is promoted: the conclusion is specific to
the current LiaisonScape Product renderer and tested synthetic envelope.

`CHECKPOINT COMPLETE - MULTI-COMPONENT CAPACITY BENEFIT CONFIRMED; SINGLE
CONNECTED OWNERSHIP CAPACITY REMAINS OPEN`
