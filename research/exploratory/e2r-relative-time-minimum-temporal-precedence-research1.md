# E2R Relative Time Minimum Temporal-Precedence Research 1

Status: EXPLORATORY / RESEARCH RESULT — NON-NORMATIVE

Date: 2026-09-23

## Purpose and boundary

This research compares the current Core and Stable History authority with the
History 2 and Relative Time draft candidates, the cross-audit, the Validator,
and application evidence. It prepares a minimum temporal-precedence contract
for Human review; it does not adopt one.

The Relative Time minimum-contract Research is completed as an exploratory
checkpoint only. History 2 deferred-shapes authoring-scope Research remains a
separate, unstarted task. No schema, Validator, service, UI, Timeline, roadmap,
or Session status was changed. The 2026-09-18 addenda remain exploratory and
non-normative.

## 1. Observed / Current Contract

### Authority and evidence matrix

| Evidence | Current authority/status | What it establishes for this question |
| --- | --- | --- |
| `spec/core.md` | Stable Core | Relation endpoints are directed structurally, but Core assigns no meaning to direction. Self-relations and cycles are valid. Core collections have no required order. |
| `extensions/history-extension.md` | Stable History 1.0.0 | History records temporal information about one Core Object. `temporalOrder` is a limited relative temporal comparison when recorded time cannot distinguish objects; it is not presentation order and cannot reverse already-distinct chronological values. Missing Civil Time fields stay unknown. |
| `extensions/history-extension-2.0-draft.md` | Non-Stable candidate | History 2 retains per-object temporal responsibility; has `position`, `bounded-point`, `temporal-extent`, and multiple assertions. `temporalOrder` is only on a `position` assertion. Contradictory assertions may coexist; no winner is chosen. It does not define Event-to-Event Relative Time. |
| `extensions/relative-time-extension-draft.md` and `schemas/extensions/relative-time-draft.schema.json` | Draft 0.1.0, not Stable or registered | Candidate payload families and orientation are documented. One Relation carries one assertion. Source is the selected reference/base; target is described relative to source. The schema checks payload shape, not precedence consistency. |
| `research/history-vnext/decisions/history-2x-relative-time-cross-audit1.md` | Non-normative candidate cross-audit | Distinguishes Recorded from Derived, proposes basic strict `before` transitivity, and describes a bounded candidate conflict model. Its “accepted” language is explicitly acceptance of a candidate design boundary, not Stable registration or runtime authorization. |
| `e2r-validator/src/temporal-diagnostics.js` and `test/temporal-diagnostics.test.js` | Current implementation evidence in sibling Validator repository | Exact-version-gated structural validation, endpoint/placement/Feature checks, selected warnings, and read-only bounded Derived output. This is narrower than a general solver and is not Stable specification authority. |
| NarrativeLine `src/services/HistoryService.ts`, `tests/History2Boundary.test.js` | Current application behavior evidence | Timeline sorting uses recorded date/precision, applicable `temporalOrder`, and deterministic ID fallback; it does not consume Relative Time for ordering. Import/export preservation test round-trips Relative Time payloads without using them for History or Timeline behavior. |
| Roadmap and Session 0094 | Current project-state/handoff records | Relative Time minimum-contract Research was NOT STARTED before this checkpoint. History 2 deferred-shapes Research remains NOT STARTED. Neither record adopts this result automatically. |
| `research/exploratory/e2r-causal-relative-order-and-undated-event-placement.md` and `research/exploratory/e2r-multidimensional-history-temporal-perspectives.md` | Exploratory, non-normative; dated snapshots/addenda | Useful prior questions and boundaries, not adopted conclusions. The older Causal base text is a 2026-09-02 snapshot and must not override later draft, Validator, or current project-state evidence. |

The Knowledge index routes History/temporal topics to scoped hypotheses. The
matching History-related entry inspected is an application-local React
navigation hypothesis, unrelated to temporal precedence; it supplies no such
rule. No workspace-level Knowledge decision was used to elevate a candidate to
authority.

The 2026-09-02 Causal snapshot discusses cycle/SCC detection as future work
and describes an ordinary acyclic chronology case. That is not a current
normative instruction to reject a Dataset: the current Validator warns on
detected cycles while preserving structural validity, and the later draft
separates temporal diagnostics from schema validity. Neither implementation
nor draft settles every self-loop, scope, or conflict policy.

### Candidate source / target direction

In the Relative Time draft, `sourceId` is the reference/base Object and
`targetId` is the Object described relative to it. The semantic value describes
the target relative to the source. Thus the Relation's structural arrow is not
itself the precedence arrow:

| Payload semantic | Meaning under the draft's orientation | Strict precedence edge, if applicable |
| --- | --- | --- |
| `before`, source S, target T | T is before S | T → S (`T ≺ S`) |
| `after`, source S, target T | T is after S | S → T (`S ≺ T`) |
| `same-instant`, source S, target T | T and S are asserted to be at the same instant | No strict edge; candidate equality assertion |

Example: to assert A before B, record B as the source/reference and A as the
target with `relation: "before"`. Reversing endpoints to make a graph algorithm
convenient would change the recorded orientation and is not justified by the
draft.

The current Validator test exercises this mapping: a `before` payload with
source B and target A produces the normalized diagnostic edge A → B. For
`after`, the current Validator maps the reverse semantic direction. Core by
itself defines neither mapping; it comes from the Relative Time draft.

### What the current Validator actually does

The sibling `e2r-validator` currently:

- activates semantics only for the locally supported exact Relative Time
  version and declared Features;
- validates payload variant fields, Relation-only placement, declarations,
  and endpoint integrity separately from temporal diagnostics;
- maps `before` / `after` into directed strict-before edges;
- warns (without making the Dataset invalid) for a recorded reverse pair and
  for detected strict cycles, retaining the input Dataset;
- emits only bounded two-edge `before` and `within` Derived evidence with
  premise paths; it does not create Relations, mutate payloads, calculate
  arbitrary transitive closure, or select a conflict winner; and
- preserves unsupported Calendar meaning and does not derive from it.

The implementation does not currently:

- interpret `same-instant` as an equality class, use it in transitive
  derivation, or report its conflict with a strict `before` edge;
- compare Relative Time assertions against History 1 positions,
  History 1 `temporalOrder`, or History 2 positions/bounds;
- warn on an exact duplicate same-direction Relation assertion; or
- report a one-edge self-loop as a strict cycle (the current cycle detector
  requires a path of at least two edges).

These are observations of current code and tests, not endorsements of every
omission. The Validator's warning behavior also demonstrates that a temporal
conflict is not currently treated as a structural Core error. It does not by
itself establish a normative conflict policy.

### History and application boundary

History 1.0.0 stores each object's Civil Time and optional limited
`temporalOrder`. It leaves omitted precision unknown. `temporalOrder` is not a
pairwise Relation graph, equality marker, general precedence algebra, or
arbitrary Timeline rank.

History 2.0.0 is a draft candidate for per-object position assertions and
additional shapes. It explicitly keeps `temporalOrder` at the position
assertion level and keeps multiple assertions without choosing a winner. It
does not replace pairwise Relative Time or establish how relative constraints
interact with each History shape.

| History representation | Candidate interaction with `before` / `after` | Current evidence / limit |
| --- | --- | --- |
| H1 full or partial Civil Time | May provide independently recorded temporal evidence for comparison | H1 preserves precision; exact compatibility requires comparable basis and granularity. Validator does not cross-compare Relative Time with H1. |
| H1 `temporalOrder` only | May coexist with explicit pairwise assertions | No mapping between the scalar and Relation graph is defined. Do not infer edges or rewrite either representation. |
| H2 `position` | Per-object position may be an anchor for a pairwise assertion | Candidate comparison must account for precision, approximation, and time basis. Cross-comparison is not implemented. |
| H2 `bounded-point` | A point-like occurrence has earliest/latest bounds | Constraint propagation needs bound/uncertainty semantics; current cross-audit defers it. No Relative Time comparison is implemented. |
| H2 `temporal-extent` | Could relate to another point/extent only with explicit boundary interpretation | Extent `before` requires a rule such as `end(A) before start(B)`; boundary inclusion and unknown/not-occurred cases remain unresolved. |
| H2 multiple assertions | Relative evidence may coexist with multiple per-object claims | H2 has no winner selection. Pairing, conflict attribution, and provenance across claims are unresolved; no cross-comparison is implemented. |
| No History / undated object | A direct pairwise assertion can express relative order without an absolute date | It supplies no date or absolute coordinate. A read-only relative view is only a future possibility. |
| Unknown / unsupported History shape or version | Preserve opaque data; do not evaluate unsupported semantics | Exact-version/Feature gating exists in the Validator; no semantic comparison is licensed. |

This matrix records candidate compatibility questions, not a compatibility
guarantee. In particular, structural acceptance of two payloads does not prove
that their temporal scopes are comparable.

NarrativeLine's current History comparator does not read Relative Time. Its
History boundary test imports and exports a Dataset containing all Relative
Time draft families and asserts exact payload preservation while stating that
the payload is not used for History or Timeline behavior. No current
application writer, automatic History date/order update, or Timeline adoption
from Relative Time was found in the inspected NarrativeLine or LiaisonScape
source/tests. This is a source inspection finding, not a claim that no future
application could implement a read-only view.

## 2. Minimum Contract Candidate

The following is a bounded candidate for a future normative decision, not an
accepted contract:

1. A direct Relative Time assertion is recorded evidence attached to its
   Relation. Under the current draft orientation, its semantic meaning is
   interpreted from `sourceId` and `targetId`; neither Relation names nor
   presentation order supply missing temporal meaning.
2. `before` denotes strict precedence in the asserted temporal scope;
   `after` is its inverse. Strict precedence does not mean causation, elapsed
   duration, or a particular calendar date.
3. `same-instant` is distinct from strict precedence and from membership in
   the same calendar granule. It contributes no `before` edge by itself.
   Whether it is a transitive/equivalence relation and how it interacts with
   other assertions remains a Human decision.
4. The supported strict-before evidence need not be total. If neither direction
   is established, the two objects are incomparable on the available evidence;
   incomparability is not a contradiction and does not authorize an invented
   order.
5. A direct assertion and a derived consequence remain distinguishable.
   Derived evidence should identify its premises and remain read-only unless a
   later explicit adoption workflow is authorized. It must not automatically
   create or rewrite Relations.
6. Cycles and incompatible assertions are evidence of temporal conflict, not
   permission to delete, rewrite, merge, or choose a winning user-authored
   assertion. A future validator may report them while preserving the Dataset;
   whether any case is a warning, error, or refusal remains to be decided.
7. Relative Time does not automatically create, repair, or replace History
   Civil Time, History 1 `temporalOrder`, History 2 assertions, or Dataset
   order. No date, timestamp, or total order is fabricated from precedence.
8. A read-only view may use supported precedence edges to show relative
   constraints for an undated Event, but must not present a total ordering when
   evidence is partial, hide conflict, or persist a derived placement as a
   recorded fact. This is only a possible downstream application of the
   candidate, not current Timeline behavior.

Items 1–2 follow the present draft's candidate direction and vocabulary.
Items 3–8 are proposed safety boundaries that require Human review before
normative adoption. In particular, item 6 deliberately does not prescribe
Validator severity or rejection policy.

### Candidate fixture inventory (not implemented tests)

| Case | Minimal evidence | Research question / candidate expectation |
| --- | --- | --- |
| Direction | B(source) → A(target), `before` | The described target A precedes reference B. Reverse storage is not implied. |
| Inverse | A(source) → B(target), `after` | Same strict edge A ≺ B as the direction case, if inverse normalization is adopted. |
| Same instant | A(source), B(target), `same-instant` | No strict edge. Test distinctness from same-day and interaction with A ≺ C. |
| Same-day | A and B have only the same H1 calendar day | No same-instant or strict order follows from the shared granule alone. |
| Self-reference | A→A with `before`, then with `same-instant` | Core structurally permits self-Relations; decide whether strict self-precedence is a conflict and whether same-instant self-assertion is vacuous. Current Validator misses a one-edge strict loop. |
| Duplicate | Two distinct Relations assert the same A ≺ B | Decide whether this is merely redundant independent recorded evidence, a diagnostic, or identity/provenance-sensitive; do not auto-merge. |
| Direct contradiction | A ≺ B and B ≺ A | Current Validator emits a temporal-conflict warning and preserves both. Decide normative severity and expected consumer behavior. |
| Longer cycle | A ≺ B, B ≺ C, C ≺ A | Current Validator warns and suppresses its bounded Derived output for the cyclic graph. Decide conflict boundary; do not equate with Core structural invalidity without a decision. |
| Incomparability | A ≺ B and A ≺ C, with no B/C relation | B and C remain incomparable; any screen-specific stable layout must not be presented as an asserted temporal fact. |
| History contradiction | recorded A position later than B, plus A ≺ B | No current cross-comparison exists. Compare only when precision, temporal basis, approximation, and History shape make the facts genuinely comparable. |

## 3. Rejected / Unsupported Assumptions

- Core Relation direction alone means “earlier-to-later.” Its direction has no
  Core semantics.
- A Relation name such as `before`, `causes`, or `then` safely types the edge.
- `same-instant` means same day/month/year, is identical to `before` with a
  zero offset, or may be silently normalized into a strict edge.
- Every pair of Events has a known order, or a partial precedence graph must be
  completed into a total order.
- A structurally valid payload proves semantic comparability across History
  precision, approximation, bounded points, temporal extents, calendars, or
  perspectives.
- `temporalOrder` can encode arbitrary pairwise constraints, simultaneous
  Events, or Relative Time; nor does a Relative Time edge authorize rewriting
  it.
- A cycle must make the whole Core Dataset invalid. Core explicitly allows
  Relation cycles; semantic diagnostics and structural validity are distinct.
- Duplicate assertions are equivalent in provenance or safe to merge solely
  because their endpoints and payloads match.
- Two-edge Validator output is full transitive closure or a general solver.
- Relative Time can generate a missing Civil Time, exact date, History
  `temporalOrder`, or persisted Timeline position.
- A causal Relation implies temporal precedence, or temporal precedence implies
  causation.

## 4. Human Decision Points

Before normative adoption, Human review is needed for:

1. **Assertion scope and target:** whether `before` concerns an Event's
   occurrence, another Core Object's temporal position, or a future named
   perspective; how a Relation is grounded when an object has multiple History
   assertions.
2. **Same-instant:** whether it denotes a symmetric/transitive equivalence
   class, only an explicitly asserted pair, or another bounded relation; how
   same-instant plus strict-before and same-instant plus History evidence are
   diagnosed.
3. **Strict-order laws and conflicts:** irreflexivity, inverse normalization,
   transitivity, self-loop handling, cycle and reverse-pair severity, and
   whether cycles remain valid-but-warned or ever block an operation.
4. **Duplicates and identity:** whether repeated assertions remain independent
   Relations, how duplicate evidence is recognized, and whether provenance is
   required before any redundancy diagnostic or consolidation.
5. **History compatibility:** applicability to H1 partial Civil Time and
   `temporalOrder`; H2 `position`, `bounded-point`, `temporal-extent`, and
   multiple/contested assertions; uncertainty and boundary rules; and what is
   comparable without inventing precision.
6. **Inference envelope:** whether transitivity is normative; maximum required
   derivation depth/closure; premises, scope, and provenance in derived output;
   and whether consumers may expose derivation without explicit user request.
7. **Undated display:** whether a read-only partial-order view is desirable,
   how incomparable nodes are laid out without implying order, and how
   contradictory or unsupported evidence is surfaced. No write-back follows
   from any display choice.

These points are ordered by semantic dependency, not by an adopted project
priority. They do not start the separate History 2 deferred-shapes Research.

## 5. Impact Boundary if a Candidate Is Adopted Later

Potentially affected, but unchanged here:

- Relative Time draft prose and schema (`extensions/relative-time-extension-draft.md`,
  `schemas/extensions/relative-time-draft.schema.json`);
- exact-version structural and semantic diagnostics, Derived result shape,
  and fixtures in `e2r-validator`;
- NarrativeLine's read-only Relative Time capability boundary, History
  comparator, Dataset preservation, and any future explicit Timeline projection;
- application readiness/preservation boundaries and potentially LiaisonScape
  only if a future accepted use case establishes relevance.

History 1.0.0 and the Core need not change merely to add a separate Extension
candidate. Any Core or Stable History edit would be a distinct Human decision.
History 2 deferred-shapes authoring scope, migration, and multiple-assertion
identity/provenance remain out of this checkpoint. Causal order and Temporal
Perspectives remain separate/deferred.

## Sources inspected

- `spec/core.md`
- `extensions/history-extension.md`
- `extensions/history-extension-2.0-draft.md`
- `extensions/relative-time-extension-draft.md`
- `schemas/extensions/history.schema.json`
- `schemas/extensions/history-2.0-draft.schema.json`
- `schemas/extensions/relative-time-draft.schema.json`
- `scripts/validate-relative-time-draft-schema.mjs`
- `research/history-vnext/decisions/history-2x-relative-time-cross-audit1.md`
- `research/exploratory/e2r-causal-relative-order-and-undated-event-placement.md`
- `research/exploratory/e2r-multidimensional-history-temporal-perspectives.md`
- `docs/roadmap.md`; `sessions/E2R-Session-0094.md`
- `e2r-validator/src/temporal-diagnostics.js`, `src/extension-validator.js`,
  `test/temporal-diagnostics.test.js`, and `docs/diagnostic-contract.md`
- NarrativeLine `src/services/HistoryService.ts` and
  `tests/History2Boundary.test.js`
- Relevant Relative Time payload / preservation scans in LiaisonScape source
  and tests; no semantic consumer or writer was found.

## Validation and disposition

- `npm.cmd run validate` in e2r-spec: PASS.
- `npm.cmd run validate:relative-time-draft` in e2r-spec: PASS (10 valid
  representative assertions and 10 invalid cases).
- `npm.cmd test` in e2r-validator: PASS (123 tests).
- `node --test test/temporal-diagnostics.test.js` in e2r-validator: PASS
  (11 tests).
- No application test suite was run; application evidence above is source/test
  inspection only.
- No schema, Validator, application, roadmap, or Session file was changed.
- The roadmap and Session 0094 remain unchanged. Their NOT STARTED handoff is
  the recorded pre-checkpoint status; this standalone result is now available
  for Human review but does not itself update those records or imply normative
  adoption, implementation, or project closure.
