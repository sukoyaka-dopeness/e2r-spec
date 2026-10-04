# ParameterPlotter Dimension/value semantics research checkpoint

Date: 2026-10-02

Status: **PRODUCT RESPONSIBILITY HUMAN-APPROVED / BOUNDED APPLICATION-LOCAL PROTOTYPE 2 HUMAN-ACCEPTED / CLOSED / 19 HUMAN PASS / 0 PENDING / B3 NOT RUN**

## Purpose and authority

This checkpoint records the approved Product responsibility and the research
questions that informed the bounded, application-local Prototype 2 experiment.
The later implementation and Human choices that resolve its local range-entry
and out-of-range questions, including final bounded-scope acceptance/closure,
are recorded in the
[Prototype 2 implementation result](../prototypes/parameterplotter-1/prototype-2-bounded-implementation-result-2026-10-02.md).
This closure does not adopt portable semantics.

The [Prototype 1 checkpoint](../prototypes/parameterplotter-1/prototype-1-checkpoint-2026-10-02.md)
and the [Research overview](multi-visualization-application-pre-implementation-research.md)
retain the preceding evidence and its status progression. Current planning
remains in the [Roadmap](../../docs/roadmap.md#current-status-index-2026-10-02).

## Human-approved Product responsibility

Human approved this direction on 2026-10-02:

> One workspace compares selected E2R Entities using explicitly defined
> Dimensions and inspects the same application-local temporary
> Entity–Dimension values through Profile, Radar, Quadrant, and Matrix.

This adopts a Product responsibility for research and future bounded
application work. The shared values remain application-local session data;
they are not a portable Observation model. Prototype 1's imported Dataset
remains read-only. The approval does not adopt Dataset write-back/export,
portable Dimension/value semantics, an Extension, schema, Validator,
canonical application repository, production architecture, or formal
product/release name.

## Research direction: per-Dimension MIN/MAX and optional unit

Prototype 1's fixed `-1..+1` value range is evidence about that prototype
only. It is not a portable rule or a default carried forward. A bounded
Prototype 2 experiment may give each temporary Dimension its own candidate
MIN and MAX, allow an optional free-text unit, and accept recorded values in
that candidate range. No field names, storage shape, default, validation
contract, or portable representation are selected here.

The numeric cases should be chosen to test different display geometry and
data-entry edges, not to endorse any unit or scale as generally correct. A
useful fixture set includes:

- an asymmetric range containing zero, such as `-4..9`;
- a positive-only range excluding zero, such as `1..8`;
- a negative-only range, such as `-9..-2`;
- a small-magnitude range and a large-magnitude range;
- values at both endpoints and between them, plus a value outside the
  candidate range to observe the prototype's behavior;
- an explicit numeric zero and an unassessed/null value where the existing
  application-local distinction applies.

The experiment should record whether these cases make the comparison task
clear across Profile, Radar, Quadrant, and Matrix. Endpoint inclusion,
out-of-range handling, numeric precision, validation, and defaults remain
open; the fixture list does not decide them.

## Unit as optional free text

Treat a unit as optional descriptive text. Do not assume it is a short symbol
or suffix: `kg`, `%`, and `°C` are possible short entries, while a descriptive
phrase must also remain representable. Unit conversion, SI normalization,
currency conversion, unit parsing, and dimensional analysis are outside this
research responsibility.

Prototype 2 may evaluate an application-local technical length guard to
prevent input or rendering from becoming unbounded. Any such guard is an
implementation safeguard for this experiment, not a portable semantic limit
or adopted maximum. The experiment should compare presentation options such
as full text in an editor or secondary metadata, wrapping where space allows,
and truncation on compact surfaces with a way to inspect the full value. It
should observe readability and layout in each projection without requiring
the entire unit phrase to remain visible at all times. No canonical display
placement or truncation rule is chosen here.

## Recorded values and derived presentation positions

The application-local recorded number and a projection's display position
have different responsibilities. A projection may derive a normalized
position from a Dimension's candidate MIN/MAX for Radar or Quadrant, while
retaining the recorded value unchanged in the application-local value data.
That derived position is presentation state; it does not rewrite the value
or establish a portable normalization contract.

Prototype 2 should make the mapping observable across asymmetric,
zero-excluding, negative-only, and very small/large candidate ranges. It
should examine whether endpoints, center/baseline, and intermediate values
are understandable across projections, and what users see for null and
out-of-range values. Whether to clamp, extrapolate, reject, or otherwise
handle out-of-range values is an experiment question, not a decision in this
checkpoint. A visible position must not imply a portable interpretation of
"higher", zero, or comparability between unlike Dimensions.

## Human observation questions for Prototype 2

During the bounded experiment, observe:

1. Whether people can enter and compare values when Dimensions have
   different candidate MIN/MAX, including negative-only, positive-only,
   asymmetric, zero-excluding, and different-magnitude ranges.
2. Whether endpoints and intermediate values remain legible and consistent
   between the recorded number and each projection's derived position.
3. Whether zero and null/unassessed remain visibly distinct in the existing
   application-local interaction.
4. Whether out-of-range values and endpoint behavior need a further Human
   decision before they can be represented safely in an experiment.
5. Whether an optional short symbol or descriptive unit phrase is useful,
   where full text should be inspectable, and how compact surfaces should
   handle long text.
6. Whether an application-local technical text-length guard is needed, and
   what observed UI failure it prevents, without turning the chosen value
   into a portable contract.
7. Whether one recorded value can be understood independently from
   projection-specific normalized positions, especially when ranges differ.

These questions gather evidence. They do not resolve precision,
directionality, portable zero semantics, missing-state taxonomy, or a
normalization contract.

## Explicitly unresolved and deferred

This checkpoint does not adopt or decide:

- precision, rounding, or directionality / what "higher" means;
- portable zero semantics;
- a portable distinction among missing, unknown, inapplicable, and
  unassessed;
- normalization rules, endpoint policy, range defaults, or validation;
- assessor, time, provenance, or multiple observations;
- portable Dimension identity or vocabulary;
- a Recorded Observation model or a portable Dimension/value contract;
- Extension, schema, Validator, Dataset write-back, or export;
- canonical application repository, production architecture/framework,
  formal product name, or release identity;
- Radar's permanent 8-versus-10 spoke policy.

These remain separate Human decisions or future Research topics. Prototype 1
continues to use `-1..+1` and its accepted local null-versus-zero behavior;
this checkpoint does not alter its runtime.

## Gate for Prototype 2

No further Product-responsibility decision is needed to begin a bounded,
application-local Prototype 2 experiment with per-Dimension candidate
MIN/MAX and optional free-text unit. The Human-approved responsibility and
the scope above provide that direction. The experiment must keep recorded
values local, treat projection positions as derived presentation, and avoid
portable contracts or changes to Dataset/Core/Extension/schema/Validator.
Return to Human review before implementation if the experiment requires a
portable semantic choice, a default or validation contract, Dataset mutation,
or any other boundary listed as deferred above.

At the time this research checkpoint was prepared, it did not start the
experiment and changed no runtime, Dataset, Core, Extension, schema,
Validator, or production repository. The subsequent bounded implementation
changes only the local prototype runtime and is recorded separately.

## Subsequent Prototype 2 implementation and Human range decisions — 2026-10-02

Human directed the local experiment to require finite MIN/MAX with MIN < MAX
for each new Dimension, without a default. Only pre-existing Dimensions that
lack explicit bounds use the legacy `-1..+1` compatibility range, and loading
does not migrate or rewrite those records. Direct value entry accepts the
inclusive range and rejects out-of-range input without clamping. If a range
edit makes a stored value out of range, the value is retained and the local
UI marks it explicitly without assigning a normal plotted position.

Unit remains optional free text. The implementation uses a local 240-character
input safeguard, allows descriptive phrases, and performs no parsing or
conversion. Recorded values remain session-local; Profile, Radar, Quadrant,
and Matrix present the same values, while Radar/Quadrant derive coordinates
from each Dimension's bounds.

See the [implementation result](../prototypes/parameterplotter-1/prototype-2-bounded-implementation-result-2026-10-02.md)
for verification and Human browser checks. No portable range/default,
precision, directionality, normalization, zero/missing taxonomy, provenance,
observation, Dataset persistence, Extension, schema, Validator, production
architecture, or product-name decision is made here.

### Historical random-only refinement snapshot — superseded

The following paragraph records the earlier implementation snapshot only.
Its random-only boundary and statement about no integer-only Dimension are
superseded by the subsequent Human decision below; the Matrix position
correction remains current.

The subsequent bounded Matrix commit position correction and Profile
random-only integer option are recorded in the implementation result's
[latest refinements](../prototypes/parameterplotter-1/prototype-2-bounded-implementation-result-2026-10-02.md#latest-bounded-refinements--2026-10-02).
They add no integer-only Dimension, precision, step, rounding, or portable
contract. Implementation is complete; Human browser evaluation, including
those follow-ups, remains pending. Prototype 2 is not accepted or closed.

This preserves the earlier random-only refinement boundary; the subsequent
Human decision below supersedes it for integer value responsibility.

## Subsequent Human decision: Dimension-local integer constraint — 2026-10-02

Human subsequently approved an application-local integer-only property on each
temporary Dimension, applying to every new value-authoring commit. This
supersedes the Profile-global random-only option in the earlier refinement
record. Existing decimals are retained without automatic repair, identified
as violations, and excluded from ordinary plot positions until corrected or
the constraint is removed. Unconstrained Dimensions remain decimal-capable.
The runtime implementation and Human review cases are in the
[current implementation result](../prototypes/parameterplotter-1/prototype-2-bounded-implementation-result-2026-10-02.md#current-dimension-local-integer-constraint--2026-10-02).
At this dated decision snapshot, implementation was complete and Human browser
evaluation remained pending. The later closure section below supersedes that
status. This decision does not adopt portable integer/precision/step/rounding semantics,
an Observation model, or any Dataset/schema/Extension/Validator change.

## Related records

- [Prototype 1 checkpoint](../prototypes/parameterplotter-1/prototype-1-checkpoint-2026-10-02.md)
- [ParameterPlotter Research overview](multi-visualization-application-pre-implementation-research.md)
- [Session 0101](../../sessions/0100-0199/E2R-Session-0101.md)
- [Current Roadmap status](../../docs/roadmap.md#current-status-index-2026-10-02)

## Subsequent decimal-random refinement

During Human evaluation, integer-only random was observed to produce integers, but unconstrained random exposed binary interpolation tails. The subsequent [bounded refinement](../prototypes/parameterplotter-1/prototype-2-bounded-implementation-result-2026-10-02.md#decimal-random-refinement--2026-10-02) retains endpoint fractional digits including trailing zeros as a local random/display hint. It does not constrain direct input, rewrite existing values, supersede integer-only, or adopt a portable/general precision model. At the time this refinement was recorded, I1 and the overall Prototype 2 evaluation remained pending; the current Human-accepted/closed status and case results are in the [evaluation guide](../prototypes/parameterplotter-1/prototype-2-human-browser-evaluation-2026-10-02.md) and [closure result](../prototypes/parameterplotter-1/prototype-2-bounded-implementation-result-2026-10-02.md). The earlier deferred precision statements remain the boundary for portable/general semantics, not a prohibition of this subsequent Human-approved local hint.

## Subsequent Human acceptance and closure — 2026-10-04

Human accepted and closed the bounded application-local Prototype 2 scope with
canonical status **19 Human PASS / 0 PENDING / B3 NOT RUN**. B3 remains NOT RUN
because there is no genuine Prototype 1 legacy-session fixture. Human accepted
the missing legacy-session browser evidence as a limitation; it is not
compatibility Human PASS, and no artificial fixture was created. The detailed
acceptance authority is the [implementation and closure result](../prototypes/parameterplotter-1/prototype-2-bounded-implementation-result-2026-10-02.md).

This closure changes no research disposition: portable Dimension/value and
Observation contracts, normalization, provenance, Dataset write-back/export,
Core/Extension/schema/Validator changes, production architecture/repository,
product name and release identity remain unadopted or deferred.
