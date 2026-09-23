# History 2 Deferred Shapes Authoring-Scope Research 1

Status: **EXPLORATORY / RESEARCH RESULT — NON-NORMATIVE**  
Research date: 2026-09-23  
Scope: compare deferred History 2 authoring shapes and identify unresolved
authoring boundaries. This result does not select or accept an implementation
scope.

## Question and disposition

What additional semantic, interaction, identity, preservation, and projection
contracts would be needed before `bounded-point`, `temporal-extent`, or
multiple assertions could be considered for user-facing authoring, beyond the
already accepted `position + circa` surface?

**Disposition:** all three remain deferred. Current evidence supports a
distinction between structural representability, read/preserve behavior, and
safe authoring; it does not establish that any deferred shape is authoring
ready. `bounded-point` has fewer concept families than the other two, but that
relative comparison is not a recommendation or Human scope decision.

## 1. Observed / Current Contract

### Authority and implementation matrix

| Evidence layer | Current finding | Authority / limit |
| --- | --- | --- |
| Stable History 1 | `extensions.history.time` describes temporal information for one Core Object; Civil Time granularity and the limited `temporalOrder` rule remain History 1 semantics. | Stable specification; not a general relation between objects or a Timeline rank. |
| History 2.0.0 draft | A declared Candidate payload uses a non-empty `assertions[]`; each assertion has a stable local `id` and a type. Multiple assertions may coexist, including disagreement, without a preferred/winning assertion. | Draft candidate, not Stable specification. |
| History 2 variants | `position`, `bounded-point` (earliest/latest for a point-like occurrence, not a duration), and `temporal-extent` (start/end Temporal Boundaries with occurrence state) are structurally described. | Candidate semantics in `extensions/history-extension-2.0-draft.md`. |
| History 2 JSON Schema | Represents the three variants and array shape; schema comments explicitly leave ID uniqueness, exact declaration/features, upgrade safety, and temporal diagnostics to additional validation. | Structural schema only; schema acceptance does not imply an authoring UX contract. |
| Stable profile registry | `history@2.0.0` remains Candidate. The only registered Stable profile is `position-circa`: exactly one `position` assertion, optionally position-level `circa`. Bounded-point, extent, and multiple assertions do not match it. | Adopted profile boundary. This Research does not reopen or enlarge it. |
| e2r-validator | Checks structural/declaration/feature conditions and emits temporal warnings for clearly reversed bounded-point or extent endpoints when comparable. It also has diagnostics for Relative Time graph conflicts/cycles. | Implementation evidence, not a new normative authoring or solver contract. A warning does not select, repair, or make a payload editable. |
| NarrativeLine History capability/service | Recognizes known Candidate assertion shapes for capability and preservation. The supported H2 Event Detail accessor requires exactly one `position` assertion; other candidate shapes and multiple assertions do not supply editor values and use the read-only fallback. | Application behavior, not specification authority. Generic candidate classification is read-only; the narrow accepted position-circa path is handled by its dedicated accessor. |
| NarrativeLine Timeline | The Event timeline date path consumes History 1 dates or the supported single H2 position. No inspected path projects bounded-point endpoints, temporal-extent boundaries, or a selected member of a multiple-assertion payload. | Current projection evidence only; no generalized ordering or placement contract is inferred. |
| LiaisonScape | No History 2 authoring or projection contract was established by the inspected evidence for this checkpoint. | Absence of located evidence is not proof that no other consumer exists. |

History 2 keeps temporal information local to one Core Object. Relative Time
is a separate Relation-carried responsibility. The separate Relative Time
Research remains exploratory/non-normative; its candidate semantics are not
imported into History 2 and do not authorize comparison, inference, or
write-back between these shapes.

### Preserve, read, author, display

These are separate capabilities. A consumer may recognize a payload or retain
it through import/export without providing an editor or a Timeline projection.
The History 2 draft requires writers to preserve untouched unknown data when
practical and to refuse an edit rather than claim a lossless round trip when
they cannot preserve it. NarrativeLine's observed read-only fallback is
consistent with this boundary; it is not evidence that deferred shapes are
fully rendered or authorable.

## 2. Existing Accepted Authoring Boundary

**H2-POSITION-CIRCA is ACCEPTED / CLOSED** for its bounded surface only:
one H2 `position` assertion per History payload, with optional
position-level `approximation: "circa"`, explicit atomic Dataset-wide H1 to H2
upgrade, safe editing/declaration synchronization, and the accepted
non-fabricating recorded-position Event Timeline projection.

History 2.0.0 itself remains Candidate / non-Stable. The Stable maturity
belongs to the registered `history@2.0.0 / position-circa` profile, not to all
H2 features. The closure explicitly excludes bounded-point, temporal-extent,
multiple-assertion authoring, Relative Time authoring/solving, Entity or
Relation History authoring UI, H2-to-H1 conversion, and Stable promotion.
This Research treats that closure as fixed evidence and does not reassess it.

The roadmap and Session 0094 still contain the pre-task **NOT STARTED**
handoff snapshot. This document records the Research result now produced, but
does not edit or synchronize those files. Their status text therefore remains
an unsynchronized historical project-state record pending a separate
documentation decision; it must not be read as evidence that this Research
was not performed, nor as acceptance of its findings.

## 3. Deferred-shape comparison

| Shape | Candidate data meaning | Current validation / app evidence | Additional authoring and display contract not established |
| --- | --- | --- | --- |
| `bounded-point` | A point-like occurrence constrained by `earliest` and `latest`; it is not an interval of persistence. Each endpoint is a Temporal Position and may carry position-level approximation. | Schema represents it. Validator may warn when comparable bounds are clearly reversed; uncertain, approximate, partial-granularity, or mismatched-basis cases are not thereby resolved. NarrativeLine recognizes/preserves known candidate payloads but does not provide bounded-point editor values or Timeline bounds projection. | Two endpoint editors and user language that distinguishes uncertainty about a point from duration; allowed precision/approximation combinations; what to do with missing or incomparable bounds; diagnostic severity and correction responsibility; non-midpoint list/Timeline presentation; sorting behavior without inventing a point date. Whether a usable read-only display is enough before authoring is also undecided. |
| `temporal-extent` | A persistence extent with `start` and `end` Temporal Boundaries. Each boundary has `occurred`, `not-occurred`, or `unknown`, and may have a position. A position on `not-occurred` can describe a schedule/future/fiction; current clock time must not rewrite occurrence. Inclusive/exclusive membership is not defined. | Schema represents the boundary shape. Validator may warn for clearly reversed comparable positions but does not settle boundary occurrence semantics or rewrite either boundary. NarrativeLine has no extent editor or inspected extent Timeline projection; unsupported candidate use follows read-only fallback. | Separate start/end and occurrence controls; explanation for all occurrence × position combinations; what open/unknown positions mean in detail and Timeline views; date order versus occurrence state; inclusive/exclusive semantics if needed; schedules/future/fiction without wall-clock mutation; warnings and non-destructive correction flow. This is not a generic date range and not a bounded-point variant. |
| Multiple assertions | Several independently identified claims may coexist and disagree; the draft defines no preferred or winning assertion. Local assertion IDs are stable within one payload and must not be array-index-derived. | Schema permits an array of assertions. Validator checks shape, uniqueness/declarations and diagnoses some temporal conditions, but it does not choose a winner. NarrativeLine's editor accessor rejects arrays other than exactly one supported position; its read-only fallback avoids selecting the first item. | How claims are listed, distinguished, created, edited, deleted, and reordered; identity generation/preservation across edits and import/export; provenance/source/attribution and whether assertions mean competing reports or separate observations; behavior when one sibling is unsupported or malformed; atomic partial-edit rules; no-winner presentation and Timeline policy. This has the largest identity/provenance and preservation surface. |

Comparatively, bounded-point introduces two bounds around one occurrence and
an explicit point-not-duration distinction. Temporal extent adds a different
concept family—boundary occurrence states and extent display. Multiple
assertions changes the collection-level interaction and identity problem,
which can combine with either shape. This is a complexity comparison from the
listed contracts, not a ranking of product value or a chosen implementation
sequence.

## 4. Unsupported / Unsafe Assumptions

- JSON Schema acceptance or Validator recognition means the feature is safe
  for user-facing authoring.
- Read/preserve behavior means users can inspect each temporal fact
  meaningfully, or that the application can safely edit it.
- A reversed-bound warning is a complete contradiction policy, automatic
  correction instruction, or permission to discard/choose an endpoint.
- `bounded-point` can be rendered as a midpoint or as duration; either would
  add meaning not present in its candidate definition.
- `temporal-extent` is interchangeable with `bounded-point`, or occurrence
  can be derived from the current computer clock.
- Array order identifies the most reliable, preferred, latest, or canonical
  assertion. The draft explicitly supplies no winner.
- Assertion ID may be regenerated from array position, or changing order may
  change assertion identity.
- The presence of a single apparent supported assertion permits silently
  dropping or normalizing unsupported siblings.
- A Timeline sort key, visible date, or layout position may be generated from
  endpoints or from a selected assertion without an explicit projection rule.
- Relative Time pairwise assertions can be merged into per-object History,
  compared against History assertions, or written back as a date/order.
- History 1 `temporalOrder` is a substitute for any deferred H2 shape or a
  general Timeline rank.
- Current NarrativeLine event behavior establishes Entity/Relation authoring
  or cross-application behavior.

## 5. Human Decision Points

These are unresolved decision categories, not recommendations or priority
changes. The first two are prerequisites to any shape-specific authoring
proposal; later items apply when relevant to a candidate.

1. **Authoring scope and capability declaration:** whether to study or accept a
   bounded authoring slice at all, and how any future supported slice is
   declared/profiled while `history@2.0.0` remains Candidate. No deferred shape
   is accepted here.
2. **Read/preserve/display threshold:** whether a future writer may proceed
   with a safe editor while some payloads remain read-only, and what minimum
   faithful read-only presentation must exist first. Preservation alone is
   not enough to imply comprehensible display.
3. **Shape semantics and validation:** for bounded-point, what endpoint
   incomparability, approximation, and reversed-bound feedback means; for
   temporal extent, how occurrence states and unknown positions are explained
   and whether any further boundary semantics are required. The draft's
   existing rules are evidence, but no new rules are selected here.
4. **Projection and ordering:** whether each shape receives any Timeline
   projection, label, or sorting participation. Any choice must avoid
   fabricated dates/midpoints and keep display projection separate from
   persisted assertions. No choice is made here.
5. **Multiple-assertion identity and provenance:** what assertions represent,
   how IDs persist, what source/provenance is available, and how users inspect
   disagreements. A winner-selection policy is not implied and would require
   explicit Human authorization.
6. **Partial support and atomicity:** exact refusal/preservation behavior for
   unsupported siblings, malformed payloads, unsafe declarations, and edits
   that cannot preserve untouched data; whether a user can modify one
   assertion while retaining all siblings without silent normalization.
7. **Object coverage and migration:** whether any later authoring applies to
   Event only or also Entity/Relation, and whether it requires an explicit
   conversion workflow. Existing H1/H2 migration and accepted
   position-circa boundaries are not changed by this Research.

The checkpoint does not order these Human decisions beyond their logical
dependencies. It does not change existing roadmap priority or authorize
implementation.

## 6. Minimum research conclusion

Current evidence establishes candidate data structures, some structural and
temporal diagnostics, and a narrow accepted single-position writer. It does
not establish complete user-facing contracts for any deferred shape.

As a comparative observation only, `bounded-point` appears to have a narrower
new semantic surface than `temporal-extent` or multiple assertions, but its
authoring readiness remains unproven: bounds, ambiguity, warning response,
display, and ordering remain unresolved. Temporal extent needs a distinct
boundary/occurrence model. Multiple assertions add collection-level identity,
provenance, disagreement, and preservation concerns and are not reducible to
choosing one array element. These observations do not select bounded-point or
any other implementation scope.

## 7. Impact boundary if separately considered later

A future Human-approved scope could require coordinated review of:

- the History 2 candidate text and any separately registered maturity profile;
- the History 2 schema and declaration/Feature validation;
- Validator structural checks, diagnostics, and tests;
- application capability classification, safe read/edit/preserve boundaries,
  and atomic mutation services;
- user-facing controls, localized explanation, keyboard/narrow behavior,
  refusal/cancel behavior, and export/reload round trips;
- Timeline/read-only projections and sorting, if any; and
- fixtures/examples that distinguish supported and deferred capabilities.

This is an impact inventory, not authorization to modify any of those areas.
It does not include Relative Time inference/cross-comparison, Causal order,
Temporal Perspectives, or a reopening of accepted History 2 work.

## 8. Sources inspected and validation

### Sources inspected

- `extensions/history-extension.md` — Stable History 1 authority.
- `extensions/history-extension-2.0-draft.md` — Candidate payload, shape,
  features, preservation, and explicit-upgrade requirements.
- `schemas/extensions/history-2.0-draft.schema.json` — structural shape
  coverage and limits stated in its schema comment.
- `spec/extension-profile-maturity.md` and
  `spec/extension-profile-maturity-registry.json` — profile maturity boundary.
- `docs/history-2-user-facing-authoring-scope-result.md` — earlier comparative
  design options, treated as historical research rather than current
  acceptance.
- `docs/history-2-dataset-wide-h1-to-h2-upgrade-scope-closure-result.md` —
  current accepted/closed H2-POSITION-CIRCA boundary and exclusions.
- `docs/roadmap.md` and `sessions/E2R-Session-0094.md` — current closure and
  NOT STARTED handoff status.
- `C:/Users/extra/E2R/e2r-narrative-line/src/services/HistoryCapabilityService.ts`,
  `History2Service.ts`, `EventDetailScreen.tsx`, `TimelineScreen.tsx`, and
  focused History 2 tests — application recognition, editor, projection, and
  read-only evidence.
- `C:/Users/extra/E2R/e2r-validator/src/temporal-diagnostics.js`,
  `test/temporal-diagnostics.test.js`, and `test/history-profile.test.js` —
  implementation diagnostics and profile tests.
- `C:/Users/extra/E2R/ai-knowledge/INDEX.md` — topic routing. Its only matching
  History hypothesis concerns React navigation/browser History side effects,
  not temporal History authoring; it was excluded as irrelevant authority.
- The committed Relative Time precedence Research result — used only to
  maintain the boundary that its candidate is exploratory and is not imported
  as History 2 semantics.

### Validation performed

On 2026-09-23, `npm.cmd run validate` passed in e2r-spec, including the
History 2 draft examples and `position-circa` registry gate. In e2r-validator,
`node --test test/temporal-diagnostics.test.js test/history-profile.test.js`
passed 17/17 tests. In NarrativeLine,
`node --test tests/HistoryCapabilityService.test.js tests/History2Boundary.test.js tests/history2ReadOnlyIntegration.test.js`
passed 31/31 tests. These are implementation/consistency checks, not evidence
that deferred authoring is accepted. The document was also checked for
Markdown structure, source references, and whitespace; the two trailing
spaces on the Status and Research date lines are intentional Markdown hard
breaks.

This checkpoint changes no normative specification, schema, Validator,
application source, UI, test, roadmap, Session, or `work/` artifact. The result
remains descriptive and non-normative regardless of test outcome.

## 9. Final disposition

- `position + circa`: **ACCEPTED / CLOSED** for its existing bounded scope;
  not reopened.
- `bounded-point`: **DEFERRED; comparative candidate only; not authoring-ready
  by evidence in this Research**.
- `temporal-extent`: **DEFERRED; distinct semantics and UX remain unselected**.
- Multiple assertions: **DEFERRED; identity/provenance/no-winner/editing
  contracts remain unresolved**.
- Relative Time minimum contract: exploratory/non-normative; no History 2
  cross-comparison or write-back adopted.
- Roadmap and Session 0094: not changed; their pre-task NOT STARTED snapshot
  remains unsynchronized with this result.
- No implementation scope selected; Human review required before any follow-up
  specification or implementation work.
