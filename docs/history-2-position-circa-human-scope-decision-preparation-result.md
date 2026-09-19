# H2-POSITION-CIRCA — Human Scope Decision / Timeline Semantics Closure

Date: 2026-09-19

Status: **SUPERSEDED BY BOUNDED SCOPE CLOSURE**

The recommendation recorded here was subsequently approved, implemented, and
accepted for the bounded H2-POSITION-CIRCA surface. The final authority for
current status is the [Dataset-wide H1 to H2 upgrade scope closure
result](history-2-dataset-wide-h1-to-h2-upgrade-scope-closure-result.md), which
records `H2-POSITION-CIRCA: ACCEPTED / CLOSED` while retaining History 2.0.0
as a non-Stable Candidate. The proposal and decision analysis below remain
historical evidence and are not rewritten wholesale.

> Historical checkpoint: the recommendation and pending-decision language below
> describes the pre-implementation state. It is superseded for current status
> by the linked bounded-scope closure result; the retained `RECOMMENDED` /
> `REQUIRED` wording is not an open decision.

## Scope and classification

This is a documentation-only decision-preparation checkpoint. It does not
authorize a History 2 writer, Timeline behavior, schema change, Validator
change, sample change, or NarrativeLine runtime work.

The preceding [History 2 User-Facing Authoring Scope result](history-2-user-facing-authoring-scope-result.md)
proposed **H2-POSITION-CIRCA** as the smallest meaningful public History 2
slice:

- one History `2.0.0` Candidate `position` assertion;
- optional position-level `approximation: "circa"`; and
- explicit History `1.0.0` to `2.0.0` upgrade only when the H2-only capability
  is selected.

The recommendation in this document is **RECOMMENDED FOR ACCEPTANCE / HUMAN
APPROVAL REQUIRED**. It is not an accepted product capability. The accepted
NarrativeLine `NL-H2-R1` recognition, preservation, and edit-refusal boundary
remains closed.

## Implementation follow-up

The explicitly bounded H2-POSITION-CIRCA scope was subsequently authorized for
NarrativeLine implementation. NarrativeLine records the resulting capability
as **IMPLEMENTED / AUTOMATED GREEN / HUMAN ACCEPTANCE REQUIRED** in
[`h2-position-circa-bounded-authoring-implementation-result.md`](https://github.com/sukoyaka-dopeness/e2r-narrative-line/blob/main/docs/h2-position-circa-bounded-authoring-implementation-result.md).
This follow-up does not make History 2.0.0 Stable, change the candidate
schema, or close the remaining human product-acceptance decision.

## Authority and repository evidence

The decision is based on current repository evidence, in this order:

1. `extensions/history-extension-2.0-draft.md` and
   `schemas/extensions/history-2.0-draft.schema.json` in `e2r-spec`;
2. `examples/history-2.0-draft/position.json` and the approximation fixtures;
3. the local History 2 draft validation and upgrade/refusal checks;
4. NarrativeLine `HistoryCapabilityService`, `HistoryService`, Event mutation,
   declaration handling, and accepted `NL-H2-R1` evidence;
5. the current `e2r-spec` roadmap and the preceding user-facing scope result.

History 2.0.0 remains a non-Stable candidate. Relative Time remains a
separate responsibility. No source-level implementation decision below
promotes either candidate.

## Current boundary that must not be reopened

The accepted NarrativeLine boundary currently does all of the following:

- edits Stable History `1.0.0` only;
- recognizes the exact History `2.0.0` Candidate shape but keeps it
  read-only;
- keeps unknown, unsupported, and mixed History shapes read-only;
- preserves Candidate History, declarations, unknown fields, and Relative Time
  payloads through safe unrelated edit/export paths;
- does not infer a midpoint, date, `temporalOrder`, Relative Time relation, or
  Derived fact; and
- does not create a History 2 declaration or perform migration automatically.

This checkpoint must not turn any of those accepted behaviors into a defect.

## Decision 1 — approximate Timeline ordering

`approximation` qualifies a Temporal Position. It is not a bounded point,
temporal extent, confidence interval, probability, or hidden range. The
candidate specification does not define a semantic interval for `circa 1900`.

### Option A — recorded-position presentation key

Use the recorded Civil Time fields as a deterministic Timeline presentation
key, while visibly labeling the result as approximate.

Example presentation order:

```text
1899
circa 1900
1901
```

This does not assert that the approximate Event occurred exactly in 1900 or
that it precedes/follows either neighboring Event as a recorded temporal fact.
It only gives the application a stable projection based on the value the user
actually recorded.

### Option B — exclude approximate positions from normal exact chronology

Show the approximate Event separately or outside the exact chronological
ordering. This avoids implying exact order, but it makes the primary Timeline
less useful and requires a new grouping/fallback presentation model.

### Option C — derive a range, midpoint, or confidence ordering

Treat `circa` as an interval, midpoint, confidence range, or inferred
ordering. This is not supported by the current History 2 candidate and would
fabricate meaning that the Dataset does not record.

### Recommended direction

Recommend **Option A with an explicit non-semantic presentation contract**:

- sort the display copy by the recorded position fields and existing
  granularity rules;
- do not convert `circa` into a range, midpoint, finer precision, or
  confidence value;
- show the approximation marker in the primary visible date label, not only
  in a tooltip;
- do not claim that the projection establishes a new temporal relation;
- use existing recorded `temporalOrder` only as a preserved, bounded tie-break
  after recorded fields when the supported contract permits it; never create or
  rewrite it to make the display sort; and
- keep Event ID as the final deterministic tie-breaker when no recorded order
  distinguishes the display items.

Option A is recommended because it is the smallest deterministic projection
consistent with the existing Timeline while preserving the distinction
between recorded semantics and visual order. Human approval is still required
because the candidate specification alone does not authorize this projection.

## Decision 2 — approximate Timeline label and presentation contract

The first implementation, if approved, must satisfy this semantic contract:

- exact positions retain the normal recorded-date presentation;
- approximate positions visibly use localized approximate wording, such as
  `circa 1900` in English and an equivalent clearly approximate Japanese
  label;
- `circa 1900`, `circa 1900-05`, and `circa 1900-05-12` preserve the recorded
  granularity and do not invent a day, midnight, second, or Instant;
- exact and approximate values are distinguishable in the primary label and
  accessible representation;
- missing month/day/hour/minute/second fields remain missing; and
- the UI does not expose raw schema fields as the user's only explanation of
  the behavior.

The initial slice must not add confidence intervals, early/mid/late labels,
calendar changes, Time Zone or UTC-offset interpretation, or a Timeline
redesign. Copy polish and screenshot acceptance belong to the later bounded
implementation checkpoint after this contract is approved.

## Decision 3 — explicit History 1 to History 2 upgrade

The current specification establishes this boundary:

```text
Stable-expressible edit       -> remain History 1.0.0
H2-only capability selected   -> explicit upgrade to History 2.0.0
Open/read                     -> no migration
Unsafe/unknown payload        -> refuse the History edit
```

Recommended UX boundary:

1. Opening or ordinary exact editing of a Stable History Event never upgrades
   it.
2. Selecting an approximate-date action is the explicit user request for the
   H2-only capability.
3. Before the first mutation, the application explains that the Dataset
   representation and exact Extension declaration will change, then requires
   a clear confirmation or equivalent explicit commit step.
4. Confirmation atomically creates one `position` assertion, moves known
   Civil Time fields unchanged, preserves `temporalOrder` if present at its
   new assertion-level location, adds `approximation` and the exact Feature
   declaration, and removes `history.time`.
5. Cancel leaves the persisted History 1 Dataset unchanged and does not create
   a partial draft upgrade.
6. Unknown source fields that cannot be preserved with established meaning
   cause the upgrade to be refused; the application must not claim a lossless
   conversion while discarding them.

The user should choose a user-facing action such as “Mark date as approximate”
or an equivalent localized label. Raw `2.0.0` declaration editing is not part
of the authoring experience.

## Decision 4 — H2 to H1 downgrade when `circa` is removed

The candidate representation has a local assertion ID that History 1 does not
have. Automatically converting an existing H2 assertion back to H1 can
therefore cause representation churn and lose that assertion identity.

Recommended boundary:

- If the user selects and then cancels `circa` before an H1 save is committed,
  keep the Dataset in H1 and perform no upgrade.
- If a persisted H2 one-position Event has `circa` removed, keep the Event in
  History 2 as an exact `position` assertion. Remove only the approximation
  field and the now-unused `approximation` Feature.
- Do not automatically downgrade H2 to H1 merely because no H2-only Feature
  remains.
- A later explicit “return to History 1” conversion may be considered as a
  separate decision. It must disclose representation change and possible
  assertion-ID loss, and must preserve all known H1-compatible fields
  atomically.

This keeps the first implementation narrow and makes data-shape changes
explicit instead of treating a Feature toggle as permission for a hidden
migration.

## Decision 5 — History removal and declaration cleanup

For the approved one-assertion surface, removing the only History 2 assertion
should produce no empty History payload and no stale declaration:

- remove the Event's `extensions.history` payload when no assertion remains;
- remove the `history` entry from the Specification Extension `uses` array;
- preserve unrelated Event extensions and unrelated `uses` entries;
- if the Specification Extension has no remaining useful `uses`,
  `definitions`, `lifecycle`, or `evolution` content, remove its container as
  one atomic cleanup; otherwise preserve the container and its remaining
  information; and
- never synthesize Stable `history.time` merely because History 2 data was
  removed.

The cleanup rule follows the Specification Extension's completeness contract:
a declaration must not name an Extension whose payload is absent. It does not
authorize removal of unrelated declarations or Dataset-level metadata.

## Decision 6 — exact supported H2 position editing boundary

The first writer should support only the exact, fully understood shape:

- one `position` assertion;
- required `year` with the existing contiguous Civil Time granularity;
- optional `month`, `day`, `hour`, `minute`, `second`, `timeZone`, and `offset`
  according to existing History rules;
- optional position-level `approximation: "circa"`; and
- optional existing assertion-level `temporalOrder`, preserved but not
  authored or regenerated by the UI.

The writer must preserve the existing local assertion ID and must not derive
it from array position. It must update the assertion and exact Feature
declaration atomically.

The following remain whole-History read-only/refusal boundaries for the first
writer:

- multiple assertions;
- `bounded-point`;
- `temporal-extent`;
- unknown assertion or position members;
- unknown or unsupported Features;
- unsupported exact History versions;
- mixed `time` plus `assertions` payloads; and
- any payload whose declaration does not exactly match the understood shape.

Unrelated Name, Description, Relation, and Extension edits may continue only
through the already accepted preservation path. No unsupported sibling may be
selected, flattened, deleted, or silently rewritten.

## `temporalOrder` preservation and sorting boundary

`temporalOrder` is not a new authoring control in H2-POSITION-CIRCA.

- Existing H2 assertion-level values are preserved byte-for-byte in meaning
  when the assertion is edited.
- The UI does not create, renumber, or rewrite `temporalOrder` to repair a
  Timeline projection.
- A later Timeline consumer may use a preserved value only under the same
  limited recorded-position tie-break contract, after recorded position
  fields and before Event ID.
- Approximation does not change the recorded position into an exact position
  and does not grant permission to infer a new order.
- Presentation order remains a derived view; it is never written back as a
  History assertion or Relative Time Relation.

## Public capability decision

There is no current repository or schema blocker to considering
H2-POSITION-CIRCA. The remaining blocker is a human semantic/product decision:
whether the bounded Option A presentation contract is acceptable, especially
for approximate values near exact neighboring Events.

Recommended outcome:

```text
H2-POSITION-CIRCA
RECOMMENDED FOR ACCEPTANCE
/ HUMAN APPROVAL REQUIRED
```

If the human decision rejects Option A and does not select an equally bounded
alternative, the public capability should remain **DO NOT ACCEPT YET** and
NarrativeLine should keep Candidate History read-only. Runtime implementation
must not begin from an unresolved ordering contract.

## Next implementation checkpoint, if approved

Only after explicit human acceptance, the next checkpoint may be one bounded
NarrativeLine implementation surface covering:

1. a single-position H2 capability policy and narrow mutation service;
2. explicit H1-to-H2 upgrade confirmation and atomic declaration update;
3. position-level `circa` persistence and safe removal;
4. the approved non-fabricating Timeline label/order projection;
5. refusal/preservation for unknown, unsupported, mixed, and multiple-shape
   History; and
6. focused service, declaration, round-trip, H1 compatibility, EN/JA,
   keyboard/focus, narrow, Real Chrome, and human semantic/visual acceptance.

That checkpoint must not include bounded-point, temporal-extent, multiple
assertions, Relative Time, generalized `temporalOrder` editing, a Timeline
redesign, sample refresh, or public release work.

## Documentation and change boundary

This result is placed in the `docs/` root under the current documentation
placement policy. The existing History 2 authoring scope result remains the
scope authority and links to this decision preparation. The roadmap receives
only a short current-status entry.

No new `e2r-ai-knowledge` entry is created. This is a repository-specific
scope proposal pending human approval, not yet a reusable workspace decision.

No source, runtime, test, CSS, locale, schema, sample Dataset, Validator,
LiaisonScape, or NarrativeLine file is changed by this checkpoint.
