# History 2.x and Relative Time Candidate Cross-Audit 1

Date: 2026-09-18

Status: Research/design record; first candidate specifications and schemas plus
bounded Validator support implemented; candidates remain non-Stable.

## Decision normalization checkpoint — 2026-09-18

The earlier cross-audit listed several items under “Human decisions still
required” even though their responsibility boundary is already supported by
the current normative specification or accepted research. This section is the
current checkpoint state. “Accepted” below means an accepted candidate
specification/design boundary, not Stable registry promotion or runtime
implementation authorization.

### Accepted or already established

- History `1.0.0` remains stable and Core-Object-focused. It does not absorb
  Event-to-Event Relative Time, causality, presentation order, or pixel
  position.
- History 2.0.0 is the same-identifier, same-responsibility major-version
  candidate for the registered `history` Extension. The candidate schema,
  explicit upgrade contract, and Feature declarations are defined in
  `extensions/history-extension-2.0-draft.md`; Stable registration and runtime
  adoption are not selected.
- Relative Time remains a separate Extension candidate. Core Relation is a
  structural carrier and the Extension owns temporal meaning; Relation names
  are not semantic inference inputs.
- The candidate Relation orientation is recorded authoring/reference
  orientation: `sourceId` is the selected reference and `targetId` is the
  described Object. Internal normalization must not rewrite Dataset
  orientation.
- One Relation carries one Relative Time assertion. Multiple independent
  assertions use separate Relations and are not automatically merged.
- `bounded-point` and `temporal-extent` are distinct meanings. A fake Core
  Event is not created merely to encode a boundary.
- Approximation is not a fourth temporal shape. The initial candidate applies
  it to a Temporal Position, including a position used as `earliest`, `latest`,
  or a known extent boundary. Assertion-level approximation of a whole bounded
  point or temporal extent remains deferred research.
- `same-instant` is distinct from same Calendar day/month/year. Calendar
  granule relations are distinct from elapsed offsets and calendar arithmetic.
- Recorded and Derived information remain separate. Derived results are not
  automatically written back, and conflicts do not trigger automatic winner
  selection, deletion, or correction.
- Structural validity, temporal conflict, and presentation order remain
  separate responsibilities.
- Basic strict `before` transitivity and basic `within` containment
  transitivity are accepted semantic derivation rules when all required
  premises and compatible scopes are established. Their conclusions are
  Derived, not automatically stored facts. Shape, uncertainty, and boundary
  applicability; direct/transitive storage; provenance; closure strategy; and
  solver/runtime behavior remain open.

### Open after the first schema candidate

The candidate schemas resolve the initial payload, version, Feature, boundary,
Calendar-default, elapsed-offset, and preservation contracts. Remaining work
includes:

- Stable maturity/registration decisions and future version evolution;
- application UX for explicit History `1.0.0` to `2.0.0` upgrade;
- temporal diagnostic codes, severity, and Validator implementation;
- derivation applicability across uncertainty, bounded points, and boundaries;
- advanced Calendar contracts and semantic support negotiation; and
- stronger portable provenance and round-trip mechanisms beyond the candidate
  preservation requirements.

### Deferred research, not schema blockers

These remain explicitly deferred and must not be treated as hidden blockers
for the initial candidate boundary:

- Temporal Frame owner, origin representation, multiple frames, and
  common-origin coordinate serialization;
- scientific-scale numeric representation and extreme dynamic range;
- explicit overlaps / same-temporal-extent authoring;
- boundary-relative offsets and compound elapsed durations;
- advanced solver and derivation provenance;
- Derived-to-Recorded adoption workflow;
- causality, worldlines, branching timelines, and parallel-world semantics;
- final application UI and visualization scale.

This normalization and the subsequent specification checkpoint do not promote
either candidate to Stable maturity or authorize Validator/application runtime
implementation.

## Subsequent bounded Validator checkpoint — 2026-09-19

The e2r-validator now has read-only, exact-version-gated support for the
candidate runtime boundary. History `2.0.0` structural validation covers the
candidate assertion forms and Feature declaration completeness. Relative Time
`0.1.0` is validated only on Core Relations with intact endpoints. Structural
violations are errors; clearly comparable temporal contradictions and
unsupported Calendar identifiers are warnings; unsupported exact versions and
unknown Features remain uninterpreted.

The implementation emits only bounded two-edge `before` and `within` Derived
evidence with premise paths. It does not create Relations, write Derived facts
back, normalize endpoints, select a winner, compute full closure, or run a
general temporal solver. This is Validator support, not Stable registration,
application writer/migration behavior, or release authorization. See the
validator's diagnostic contract for the candidate code namespace and result
shape. Advanced Calendar semantics, uncertainty-sensitive derivation,
provenance, and broader runtime policy remain open or deferred.

## Purpose and baseline

This record consolidates a candidate History `2.x` design and a separate
Relative Time Extension candidate, then audits their semantic, compatibility,
derivation, conflict, partial-understanding, and presentation boundaries.

The normative authorities remain `extensions/history-extension.md`,
`spec/core.md`, `spec/extension-naming.md`,
`extensions/specification-extension.md`, the current candidate specifications
and schemas, and the current Validator implementation. This cross-audit is
itself non-normative: it does not register an Extension, promote a candidate to
Stable, or authorize a writer, solver, runtime migration, or release. The
candidate contracts are defined in the companion History 2.0.0 and Relative
Time 0.1.0 documents.

History `1.0.0` remains stable and owns temporal information about one Core
Object through `extensions.history.time`: `year`, `month`, `day`, `hour`,
`minute`, `second`, `timeZone`, `offset`, and `temporalOrder`.
`temporalOrder` remains limited relative comparison when recorded time does not
distinguish Objects. It is not a duration, Relation graph, or presentation
order. History `1.0.0` explicitly excludes intervals, durations, approximate
expressions, Event-to-Event constraints, alternative calendars, and custom
Timeline presentation semantics.

## History 2.x candidate

### Responsibility

History remains responsible for temporal information known about a Core Object.
It does not absorb Event-to-Event Relative Time, causality, presentation
ordering, pixel position, or general temporal-frame reasoning merely because
those concerns use time vocabulary.

`History 2.x` is the research name for the accepted same-identifier
major-version direction of the registered `history` Extension. This direction
depends on preserving History's existing responsibility: temporal information
known about a Core Object. A future temporal responsibility with materially
different ownership would require its own naming analysis, but that possibility
does not reopen the identifier for this History 2.x candidate.

### Assertion model

The candidate uses locally identifiable temporal assertions rather than an
automatic canonical winner:

```text
History 2.x candidate: assertions[]
Temporal assertion: id, type, type-specific temporal payload
```

Multiple recorded assertions may coexist. No automatic `preferred`,
`canonical`, or `winner` field is selected. Provenance, Citation, confidence,
adoption, and competing-claim semantics remain separate research concerns.

### Candidate temporal shapes

| Shape | Meaning | Disposition |
| --- | --- | --- |
| `position` | One point-like temporal position | Baseline capability candidate |
| `bounded-point` | Point-like occurrence constrained by earliest/latest positions | Candidate Feature |
| `temporal-extent` | Period during which the Core Object exists or continues | Candidate Feature |

Illustrative, non-normative payload fragments are:

```json
{"id":"time-1","type":"position","position":{"year":1900}}
```

```json
{"id":"time-2","type":"bounded-point","earliest":{"year":1900},"latest":{"year":1904}}
```

```json
{"id":"time-3","type":"temporal-extent","start":{"occurrence":"occurred","position":{"year":1900}},"end":{"occurrence":"occurred","position":{"year":1904}}}
```

These examples do not establish field names, boundary inclusivity, or a final
payload. A bounded point is not the same semantic as an extent. A meaningful
boundary such as “war begins” may be a normal Core Event, but a fake Core Event
must not be created solely to encode every temporal boundary.

The earlier cross-audit used a four-state comparison with `known`,
`occurred-position-unknown`, `not-occurred`, and `occurrence-unknown`. That is
superseded historical research wording. The implemented candidate uses the
selected `occurrence` values `occurred`, `not-occurred`, and `unknown`, with an
optional `position` field. All structurally valid occurrence/position
combinations remain permitted.

Approximation is treated as a capability applied to a Temporal Position, not
as a fourth mutually exclusive shape. In the initial candidate it may qualify
the direct `position`, an `earliest` or `latest` position, or a known `start`
or `end` position. Whether a whole bounded-point assertion or temporal-extent
assertion can itself be approximate remains deferred research.

Temporal positions should reuse Civil Time / Instant distinctions, contiguous
granularity, missing-field meaning, and time-zone discipline from History
`1.0.0` where applicable. In the 2.0.0 candidate, `temporalOrder` is placed
only on a `position` assertion. It is not a general Temporal Position field,
bounded-point/extent-boundary field, Presentation order, or Relative Time.

### Common-origin Temporal Frame

A shared-origin timeline is a possible future History-related responsibility:
one frame may identify a named epoch or referenced Event as origin, while
Events carry coordinates such as `10^-32 seconds`, `10^-6 seconds`, or `13.8
billion years` within that frame.

This is a coordinate against one frame, not a requirement to create a Core
Relation between the origin and every Event. Origin identity, frame scope,
scale/unit semantics, multiple frames, and whether `t = 0` is itself an Event
remain open. The extreme dynamic range creates a precision and lossless
serialization research requirement; floating point, decimal, scientific
notation, rational values, and mantissa/exponent forms are not selected.

Semantic coordinates remain separate from linear, logarithmic,
segmented/broken, or zoomable Timeline presentation. Pixel distance cannot
become a recorded duration or fabricated History date.

## Relative Time Extension candidate

Relative Time describes temporal relationships between Core Objects. It does
not replace the primary History position of either Object. Core Relation is a
structural carrier; the Relative Time Extension owns the temporal meaning. A
Relation `name` or description is never interpreted as a temporal type by
inference.

The candidate authoring/reference orientation is:

```text
sourceId = user-selected reference/base Object
targetId = Object described relative to that reference
```

If A is before B and B is selected as reference, the recorded orientation is
`sourceId = B`, `targetId = A`, `semantic = before`. Internal solver
normalization must not rewrite the recorded orientation merely for lexical
ordering. Symmetric semantics do not justify swapping endpoints.

The initial candidate is one Relative Time assertion per Core Relation. If a
pair has multiple independent assertions, use multiple Relations rather than
one payload containing unrelated semantic values. Duplicate assertions are not
automatically merged.

### Candidate Feature families

| Family | Candidate semantics |
| --- | --- |
| `relative-position` | `before`, `after`, `same-instant` |
| `containment` | `within`, initially point-to-extent or extent-to-extent questions |
| `calendar-granule-relation` | same/previous/next/N year, month, day, or other granule |
| `elapsed-offset` | positive elapsed value with before/after direction and unit |

These families answer different questions. `next month` means membership in
the next Calendar month granule, not adding exactly one calendar month as a
duration. Calendar arithmetic, including January 31 plus one month, is outside
the initial candidate unless a separate Calendar contract defines it.
`+3 calendar days` and `+72 elapsed hours` are not equivalent by default.
Compound durations and implicit zero-as-`same-instant` normalization are not
initially selected.

The initial applicability scope is deliberately narrow: point-to-point
`before`/`after`/`same-instant` or granule/elapsed relations, point-to-extent
`within`, and extent-to-extent relations only after boundary semantics are
defined. “Before” for two extents must use an explicit rule such as
`end(A) before start(B)`, not display order.

## Cross-audit

### Recorded versus Derived

If History records `A = 1900` and `B = 1901`, `A before B` may be a derived
consequence, but no Relative Time Relation is created automatically. If a
Relative Time Relation records `A before B`, a consumer must not invent a
History date for either Object. Derived values require guaranteed premises,
provenance, and explicit adoption before being written as recorded facts.

Candidate derivations include:

| Recorded input | Possible result | Boundary |
| --- | --- | --- |
| A before B; B before C | A before C | Derived when strict meanings and compatible scopes are established |
| A within C; C within W | A within W | Derived when containment meanings and compatible scopes are established |
| A same-day B; B before C | A before C | not derivable from same-day alone |
| A same-instant B; B before C | A before C | requires explicit same-instant semantics |
| B = 1901; B before D; D before C; C = 1902 | D is bounded between inputs | exact date must not be invented |
| A = 10^-32s; C = 10^-6s; A before B; B before C | A < B < C | requires compatible frame/order semantics |

Basic strict `before` transitivity and basic `within` containment transitivity
are selected semantic derivation rules. Applicability to uncertain positions,
bounded points, extents, open boundaries, or unsupported semantics remains
unselected, as do storage, provenance, closure, solver, and runtime evaluation
policies.

### Compatibility matrix

| History shape | Relative relationship | Initial disposition |
| --- | --- | --- |
| position | before / after | meaningful; precision and scope rules required |
| position | bounded point | meaningful bound comparison; deferred |
| position | extent / within | meaningful when extent boundaries are defined |
| bounded point | bounded point | boundary and uncertainty rules required |
| bounded point | extent | containment candidate |
| extent | extent | boundary semantics unresolved |
| any shape | calendar granule | Calendar semantics required; no automatic arithmetic |
| any shape | elapsed offset | compatible scale/unit semantics required |
| unknown / unsupported | any relation | preserve and report unsupported; do not infer |

Schema shape validity and semantic applicability remain separate. A
structurally valid combination may still be unresolved, unsupported, or in
temporal conflict.

### Calendar and conflict examples

If B is January 2026 and A is constrained to B's next month, the candidate
result is membership in February 2026, not generic “add one month.” A further
day-31 requirement has no valid February date and should be diagnosed as a
temporal/calendar conflict, not normalized silently.

If two History assertions say A is 1900 and 1902, and a Relative Relation says
A before B where B is 1901, the consumer must not silently delete an assertion,
select a canonical winner, or delete the Relation. Source/Citation, confidence,
and adoption may resolve such a conflict later.

Candidate conflicts include reversed known order, cycles, extent start after
end, incompatible containment, impossible calendar granules, incompatible
frame scales/origins, and unsupported or ambiguous targets. Recorded values do
not automatically outrank Relations, and Relations do not automatically
outrank recorded values. Structural validity and temporal conflict remain
separate; Validator severity is not selected here.

### Presentation separation

Recorded temporal fact, derived temporal bound, presentation order, and pixel
position remain separate. Changing presentation order must not create or delete
a Relative Time Relation. Positioning an undated Event must not create a
fictional History date. A log scale or zoom operation changes the projection,
not the semantic coordinate.

## Compatibility and partial understanding

The Specification Extension declares exact Extension versions and Features
actually used. Features should be used only where independent partial support
has practical interoperability value. `position` must not be split into
year/month/day/hour Features merely because those are fields.

An old consumer may ignore an unknown Extension or field and preserve it when
practical, but must not claim semantic support, flatten an extent into one
date, turn a Relation into presentation order, or fabricate a Civil Time from
a constraint. Unsupported exact versions and unknown Features require
preservation without semantic activation.

Round-trip research must cover old consumers of History 2.x assertions,
Relative Time Relation payloads, position-only and relative-position-only
partial consumers, unsupported versions, unknown Feature declarations, and
opaque sibling Extensions. Unknown-data preservation is not semantic support;
a consumer that reconstructs objects may still lose future assertions.

## Remaining decisions after the first schema candidate

The implemented candidates leave Stable registration, application runtime
adoption, explicit-upgrade UX, diagnostic policy beyond the bounded Validator
subset, advanced derivation scope, advanced Calendar contracts, and portable
provenance/round-trip mechanisms open. These are not reasons to reopen the
initial schema decisions.

## Deferred and final boundary

Deferred: Temporal Frame payload, scientific-scale serialization, explicit
overlaps / same-extent authoring, boundary-relative offsets, compound elapsed
durations, advanced solver/provenance, Derived-to-Recorded adoption,
causality, worldlines, branching timelines, and application UI.

The specification checkpoint adds History `2.0.0` and Relative Time `0.1.0`
candidate prose, schemas, fixtures, and repository-local validation. The later
Validator checkpoint is read-only and exact-version gated; it changes no Stable
registry entry, application, public sample Dataset, or release artifact.
History `1.0.0` remains stable. Temporal Frame, advanced numeric
representation, solver, and UI remain outside the candidates.
