# History 2 Dataset-wide H1 to H2 Upgrade Scope Closure

Date: 2026-09-19

Status: **BOUNDED SCOPE ACCEPTED / CLOSED**

Scope: Pre-implementation contract for an explicit atomic Dataset-wide
History `1.0.0` to History `2.0.0` Candidate upgrade.

Authority: The History specifications and schemas are authoritative for data
semantics. Current NarrativeLine and Validator source provide implementation
and acceptance evidence. This result is non-normative, and closes only the
accepted H2-POSITION-CIRCA bounded application scope.

Related records:

- [`history-2-position-circa-human-scope-decision-preparation-result.md`](./temporal/history-2-position-circa-human-scope-decision-preparation-result.md)
- [NarrativeLine H2-POSITION-CIRCA declaration blocker result](https://github.com/sukoyaka-dopeness/e2r-narrative-line/blob/main/docs/h2-position-circa-declaration-blocker-fix-result.md)
- [`roadmap.md`](roadmap.md)

The pre-implementation recommendation and human-decision language below is
retained as chronology. The final closure section supersedes its earlier
`RECOMMENDED` / `REQUIRED` status language.

## Decision summary

The current specifications contain a lossless conversion contract for a
known-field H1 Time Object that contains `year`. No schema or Validator change
is required for that conversion. The next NarrativeLine implementation may be
bounded as one explicit, atomic Dataset-wide operation, subject to human
approval of this scope.

The operation must inspect every History payload on every Core Object, not
only Events shown by NarrativeLine. It may proceed only from a pure supported
H1 state. It must refuse any input for which all History data and the complete
Specification Extension declaration cannot be converted safely.

## Authority and evidence

- `extensions/history-extension.md` defines H1 Civil Time, granularity,
  `timeZone`/`offset`, `temporalOrder`, unknown-field preservation, and legacy
  `order` reader compatibility.
- `extensions/history-extension-2.0-draft.md` defines the H2 assertion shape,
  local stable assertion IDs, exact Dataset declaration, explicit upgrade,
  field movement, no-upgrade-on-open rule, and refusal when unknown source
  meaning cannot be preserved.
- `extensions/specification-extension.md` makes one exact declaration apply to
  all occurrences of an Extension in the Dataset and requires declaration
  completeness across Dataset, Entity, Event, and Relation payloads.
- `schemas/extensions/history.schema.json` and
  `schemas/extensions/history-2.0-draft.schema.json` establish the structural
  H1/H2 shapes.
- `scripts/validate-history-2.0-draft-schema.mjs` and the upgrade fixtures
  verify known-field movement, local ID uniqueness, Feature synchronization,
  and unknown-field refusal.
- Current e2r-validator source collects Extension occurrences across the
  Dataset and all Core Objects, rejects Dataset-level H2 History, and applies
  H2 validation to Core Object occurrences.
- Current NarrativeLine `History2Service` performs an immutable Event-local
  conversion; `HistoryCapabilityService` and
  `SpecificationDeclarationService` currently aggregate History only from
  Events. The latter is insufficient for Dataset-wide History applicability.

The searched workspace Knowledge History entry concerns React browser-history
side effects and does not apply to this Dataset migration contract. No
Knowledge rule was used as specification authority.

## Upgrade population

E2R Core defines three Core Object types: Entity, Event, and Relation. Both
History versions record temporal information about one Core Object. Therefore
preflight and conversion must traverse:

```text
dataset.entities[*].extensions.history
dataset.events[*].extensions.history
dataset.relations[*].extensions.history
```

The Dataset container itself is not a Core Object and is not an H2 History
payload target. A Dataset-level `extensions.history` occurrence is outside the
candidate scope and must cause refusal rather than migration.

Objects without a History payload are untouched. Other Core fields and other
Extension payloads are outside the conversion and must remain unchanged.

## Exact H1 to exact H2 mapping

For each eligible H1 payload:

```text
extensions.history.time.year       -> assertions[0].position.year
extensions.history.time.month      -> assertions[0].position.month
extensions.history.time.day        -> assertions[0].position.day
extensions.history.time.hour       -> assertions[0].position.hour
extensions.history.time.minute     -> assertions[0].position.minute
extensions.history.time.second     -> assertions[0].position.second
extensions.history.time.timeZone   -> assertions[0].position.timeZone
extensions.history.time.offset     -> assertions[0].position.offset
extensions.history.time.temporalOrder
                                      -> assertions[0].temporalOrder
```

The assertion is `type: "position"`. Known Civil Time fields move unchanged;
omitted fields remain omitted. The H1 `time` member is removed only in the
atomic successful result. The target Object selected by the user additionally
receives `position.approximation: "circa"`; every other converted position
remains exact.

`temporalOrder` retains its H1 meaning and moves to assertion level. It must
not move inside `position` and must not be reinterpreted as presentation order.
A Time Object containing only `temporalOrder` cannot be converted because an
H2 Temporal Position requires `year`; its presence refuses the whole upgrade.

The legacy draft field `order` is not eligible. H1 permits a migration-aware
reader to interpret it, but current writers must not emit it and there is no
accepted lossless Dataset-wide conversion contract for retaining both its
legacy spelling and H2 meaning. It therefore causes preflight refusal.

## Assertion ID creation

Each converted payload receives one new non-empty assertion-local ID.

- uniqueness is required only within that one History payload;
- the ID must remain stable after creation and through later edits;
- it must not be inferred from the assertion array index;
- it is not a Core Object ID and cannot be a Relation endpoint;
- the specification does not require determinism, UUIDs, or a particular
  generation algorithm.

The implementation may generate the ID once during migration and preserve it
thereafter. A stable prefixed value derived from the owning Core Object ID is
compatible with the current one-assertion conversion, but the bare Core Object
ID should not be reused in a way that presents it as the same identity. The
algorithm remains application-local and must avoid a collision with any ID
already present in the same payload. Index-derived IDs are prohibited.

## Eligible source states

### Pure declared H1

Upgrade is eligible when exactly one valid Specification declaration identifies
History `1.0.0`, every History occurrence is an eligible known-field H1 payload,
and the complete declaration can be updated without losing unknown content.

### Legacy H1 without a Specification Extension

The Specification Extension says such payloads have an unspecified version,
while current NarrativeLine intentionally treats an undeclared known `time`
payload as Stable-compatible. The recommended compatibility boundary is to
allow upgrade only when every History occurrence has the exact eligible H1
shape and NarrativeLine can create a complete exact Specification Extension
declaration for every Extension used by the Dataset. This does not retroactively
claim that the input was formally declared H1; it recognizes the accepted
legacy shape as migration input.

Human approval is required for this legacy-input recommendation. If it is not
approved, implementation must restrict upgrade to explicitly declared H1.

### Pure supported H2

A Dataset already declared at exact History `2.0.0` with supported payloads and
exact Features does not run H1-to-H2 migration. Existing H2 position editing,
including circa on/off, remains the H2 path.

### Mixed, unknown, or unsupported state

No repair migration is permitted. H1 `time` mixed with H2 `assertions`, H1 and
H2 payloads under one declaration, unsupported versions or Features,
undeclared candidate-shaped payloads, malformed declarations, and declaration/
payload mismatches all refuse the operation without mutation.

## Preflight refusal boundary

Preflight must complete before confirmation and must refuse the whole upgrade
when any of the following is present:

- a History occurrence outside Entity, Event, or Relation;
- a non-object, malformed, or structurally/semantically invalid H1 payload;
- a History payload without exactly one `time` object;
- a `time` object without `year`, including `temporalOrder`-only History;
- any unknown member on the History payload or Time Object;
- legacy `order`, whether alone or alongside `temporalOrder`;
- invalid Civil Time dependencies, values, date, time-zone/offset pairing, or
  offset form according to the existing H1 contract;
- an unsupported, unknown, duplicate, or malformed History declaration;
- unsupported or undeclared History Features;
- any existing H2 or mixed H1/H2 representation in the H1 upgrade path;
- a malformed or unsupported Specification Extension bootstrap;
- inability to produce a complete Specification Extension `uses` declaration
  for every Extension occurrence without guessing an unknown version;
- any condition that would require dropping, interpreting, or rewriting
  unknown data.

Unknown members are refused even though readers normally ignore and preserve
them. The H1-to-H2 representation change cannot establish their meaning in the
new version, and the accepted safety direction forbids silently discarding
them. Other untouched Extension data may remain byte-semantically equivalent;
it is not itself a refusal unless declaration completeness cannot be retained.

## Atomicity and application responsibility

The operation has one all-or-nothing Dataset result:

```text
read current Dataset snapshot
-> preflight every History occurrence and declaration dependency
-> show confirmation only after successful preflight
-> build a new Dataset value off-state
-> convert every eligible H1 payload
-> apply circa to the requested target position
-> synchronize the single History declaration and exact used Features
-> validate the complete candidate result
-> commit one Dataset state
```

No intermediate Dataset state may be published. An exception or failed final
validation leaves the original Dataset and all drafts unchanged. NarrativeLine
already uses immutable Dataset-returning services and one React Dataset state;
the implementation should add a Dataset-level migration service and commit its
successful result once. It must not loop through UI-level Event updates or
change the declaration before all payloads have converted.

## Trigger, confirmation, and drafts

Opening, viewing, ordinary exact date/time editing, saving, exporting, and
reloading without H2-only use retain H1. The trigger is the user's attempt to
save the first H2-only capability, currently marking an exact position as
approximately `circa`. Merely toggling a draft control must not mutate the
Dataset.

The confirmation must communicate at minimum:

- approximation needs the History 2 representation;
- all existing compatible History dates in this Dataset will be updated to
  that representation;
- their recorded date/time meaning and precision will be preserved; and
- Cancel makes no Dataset-wide change.

It should say History representation rather than imply a change to the entire
E2R Dataset format. Final EN/JA copy and visual polish belong to implementation
and acceptance.

Current Event Detail keeps name, description, date/time, and approximation in
a local draft until Save. The implementation must preflight and confirm before
clearing that draft. Cancel closes confirmation while retaining all unsaved
fields and leaves the Dataset H1. Confirm applies the current validated date/
time draft and unrelated Event field edits together with the migration in one
committed Dataset result. Whether preflight runs immediately before or during
the Save request is an implementation detail; Dataset mutation before Confirm
is not permitted.

## Export and post-upgrade behavior

- H1 opened and exported without H2-only use remains H1 in representation and
  declaration semantics.
- Cancel followed by Export remains H1.
- A successful upgrade exports only H2 `assertions` payloads and one exact H2
  declaration with the Features actually used Dataset-wide.
- Byte-for-byte identity is not required, but unrelated data and semantic
  granularity must be preserved.
- Turning circa off removes only `approximation` and its now-unused Feature.
  The exact position remains H2; no automatic H2-to-H1 downgrade occurs.
- Having zero circa values after upgrade does not trigger downgrade.

## History removal and declaration cleanup

Removing History from one Core Object must recompute History usage across
Entity, Event, and Relation. If any H2 History payload remains, the H2
declaration remains and its Features are recomputed Dataset-wide. Only after
the last History payload is removed may the History declaration be removed.
The surrounding Specification Extension is removed only when its existing
cleanup contract permits that without deleting other declarations, definitions,
lifecycle/evolution content, or unknown members.

Current NarrativeLine cleanup checks the edited Event-local result and can
remove the History declaration immediately. That responsibility must be
replaced with Dataset-wide occurrence and Feature aggregation.

## Timeline compatibility

Option A remains unchanged. Fully H2 exact and circa positions use recorded
Civil Time as a deterministic presentation key. Conversion copies exact H1
Civil Time and `temporalOrder` without manufacturing a range, midpoint,
confidence, Derived relation, or semantic before/after claim. Consequently,
the presentation meaning of eligible exact H1 Events is preserved.

Entity and Relation History is part of migration safety but does not thereby
become a NarrativeLine Timeline item.

## Schema and Validator impact

No History schema, Candidate specification, or Validator change is required
for the recommended scope. The existing H2 candidate already defines the
conversion, assertion IDs, exact declaration, Features, Core Object scope, and
unknown-data refusal boundary. Existing Validator behavior can validate the
complete converted Dataset.

A future implementation may add application tests and Validator-backed final
validation fixtures, but must not weaken or reinterpret the normative schema.
If implementation discovers a source shape that cannot be classified by the
contract above, it must stop rather than introduce an application-only
conversion rule.

## NarrativeLine responsibility disposition

Retain:

- supported single H2 position editing and circa on/off;
- Option A Timeline projection;
- explicit confirmation timing at Save;
- immutable Dataset updates and pending-work protection;
- refusal/read-only behavior for unknown, unsupported, and mixed states;
- preservation of an existing assertion ID during later H2 edits.

Replace or generalize:

- Event-local H1-to-H2 conversion with a Dataset-level preflight and converter;
- Event-only History scans with Entity/Event/Relation scans;
- Event-derived Feature synchronization with Dataset-wide aggregation;
- assertion ID creation tied specifically to `eventId` with a Core-Object-
  applicable local-ID helper;
- declaration cleanup based on one edited Event with all-occurrence cleanup;
- draft clearing before the Dataset-level operation has succeeded.

The current mixed-state refusal remains valuable as a guard, but it is no
longer the successful upgrade path for ordinary multi-History H1 Datasets.

## Proposed next implementation checkpoint

Implement one NarrativeLine-owned Dataset-level service and its orchestration:

1. classify the complete Dataset into eligible H1, supported H2, or refusal;
2. preflight all Entity/Event/Relation History occurrences and declaration
   completeness;
3. build and validate one atomic H2 Dataset result with stable local IDs;
4. apply the requested target Event draft and circa marker in that result;
5. commit once after explicit confirmation;
6. recompute declaration Features and removal cleanup Dataset-wide;
7. cover success, Cancel, and refusal with focused and full automated gates.

No Entity/Relation History authoring UI, H2-to-H1 conversion, new H2 Feature,
schema, Validator, sample, Relative Time, CSS, or browser-infrastructure work
belongs to that checkpoint.

## Later real-browser acceptance matrix

After implementation and the separate browser-connector diagnosis:

- migrate a pure H1 Dataset containing 1899/1900/1901 exact positions and
  confirm exact-H2 / circa-H2 / exact-H2 output;
- Cancel with unsaved date/time, name, and description edits and verify both
  the H1 Dataset and local draft are retained;
- refuse a Dataset with one unsafe History occurrence without partial change;
- export H1 without migration and H2 after successful migration;
- turn circa off and confirm the Dataset remains H2;
- export, reload, and re-import the upgraded Dataset;
- remove one of several History payloads, then the final payload, and verify
  declaration/Feature cleanup;
- review EN/JA, keyboard/focus behavior, desktop, and narrow layout.

The browser connector timeout cause is outside this checkpoint. Port `24678`
is not identified as its cause.

## Human decisions required

Human approval is required before implementation for:

1. the complete strict, Dataset-wide atomic scope in this result;
2. allowing undeclared but exact known-shape legacy H1 payloads as migration
   input when a complete declaration can be created safely; and
3. the proposed minimum confirmation semantics, with final copy deferred.

If decision 2 is rejected, only explicitly declared H1 is eligible. No other
normative or algorithmic fork was found: assertion ID generation can remain an
application-local implementation choice inside the stated constraints.

## Classification

> Historical pre-implementation classification — retained for chronology and
> superseded by the final bounded-scope acceptance section below.

**DATASET-WIDE H1 TO H2 HISTORY UPGRADE — SCOPE RECOMMENDED / HUMAN APPROVAL
REQUIRED**

Implementation, automated migration gates, browser diagnosis, real-browser
acceptance, and human acceptance remain later checkpoints.

## Final bounded-scope acceptance and closure — 2026-09-19

The implementation and acceptance checkpoints described above are now
complete for the explicitly bounded H2-POSITION-CIRCA surface. The final
status is:

```text
H2-POSITION-CIRCA: ACCEPTED / CLOSED
History 2.0.0: Candidate / NON-STABLE
```

The accepted scope is limited to one History `2.0.0` `position` assertion
with optional position-level `approximation: "circa"`, explicit atomic H1 to
H2 upgrade confirmation, safe H2 exact editing, Dataset-wide declaration and
Feature synchronization, the non-fabricating recorded-Civil-Time Timeline
projection, and safe removal/declaration cleanup for the accepted surface.

Final evidence reconciled for closure includes:

- H1 open, ordinary exact edit/save, explicit circa upgrade, confirmation
  Cancel/Escape/backdrop/inside-click/focus behavior, and unsafe preflight
  refusal with draft and Dataset preservation;
- Entity, Event, and Relation Dataset-wide conversion and atomicity;
- circa OFF without H2 to H1 downgrade, including last-circa Feature cleanup;
- EN/JA, locale switching, keyboard/focus, narrow layout, export/reload/
  re-import, and History removal acceptance;
- the multi-H2 exact-edit regression repair, with automated and Real Browser
  verification that an unrelated circa payload keeps the Dataset-wide
  `approximation` Feature declaration; and
- unknown, unsupported, and mixed History refusal/read-only behavior plus the
  Relative Time preservation boundary. Relative Time remains preservation-only:
  it is not accepted as authoring, semantic Timeline ordering, or Derived
  writeback.

The Relative Time live browser checkpoint imported the canonical
`examples/relative-time-draft/all-families.json` through the normal file input.
All 11 Events remained undated in the Timeline, no Dataset mutation or
runtime error was observed, and the page returned to a clean Home state. The
browser download artifact was not directly captured in that run because the
download observer timed out; the existing automated export validation and
JSON round-trip equality remain the direct payload-preservation evidence.
This tooling boundary does not change the live import/presentation result or
claim a raw artifact that was not obtained.

The following remain explicitly outside this closure and are not accepted:

- bounded-point, temporal-extent, or multiple-assertion authoring;
- Relative Time authoring, solving, semantic ordering, or Derived writeback;
- H2 to H1 conversion/downgrade;
- Entity or Relation History authoring UI;
- History 2 Stable promotion; and
- release, deployment, publication, or public-sample support.

No new reusable Knowledge entry is needed. Edge recovery, dedicated CDP
viewport automation, and workspace hygiene are already recorded in their
respective guidance. This closure records application-specific evidence and
does not promote those observations into new general Knowledge.

The earlier classification is therefore superseded by
**H2-POSITION-CIRCA: ACCEPTED / CLOSED** for this bounded scope only.
