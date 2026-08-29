# E2R-RELATION-ENDPOINT-VOCABULARY-AUDIT1 — Relation endpoint vocabulary audit

Date: 2026-08-29

Status: **VOCABULARY MODEL PARTIALLY ACCEPTED / SPECIFIC TERMS STILL
UNRESOLVED**

## Scope and authority

This is a bounded research and vocabulary audit. It does not change the Core,
an Extension, a schema, an application runtime, application copy, or endpoint
editing behavior.

The accepted prerequisite is the presentation-only directionality decision in
`b3d7c05` and the follow-up section of
`research/exploratory/relation-direction-and-arrow-appearance.md`:

```text
sourceId = A
targetId = B
display choice != semantic mutation
```

Normal, Reverse, Undirected, and Bidirectional are presentation choices. None
of them swaps canonical roles or authorizes semantic text mutation. Therefore a
visually reversed graph must not relabel canonical Source as Target or
canonical Target as Source.

The normative and responsibility authorities inspected were:

- `spec/core.md` — `sourceId` and `targetId`, Entity/Event endpoint validity,
  Relation direction as structural, and the absence of Core domain meaning;
- `spec/philosophy.md` — Core, Semantic, Presentation, Layout, Perspective,
  and Application View State boundaries;
- `spec/rationale.md` — minimal Core, no Relation type, and Extension-first
  reasoning;
- `extensions/history-extension.md` and
  `extensions/specification-extension.md` — confirmation that this audit does
  not add temporal or schema responsibility;
- `docs/application-design-principles.md` and
  `docs/application-recommendations.md` — application-owned workflow,
  presentation, derived state, and interoperability guidance;
- `research/exploratory/relation-direction-and-arrow-appearance.md` — accepted
  presentation-only directionality model;
- `docs/relation-endpoint-ui-directionality-follow-up.md` — historical
  endpoint vocabulary and directionality planning, including superseded
  wording; and
- `docs/roadmap.md` — current roadmap status and the separate endpoint-vocabulary
  audit boundary.

The relevant reusable guidance inspected in `ai-knowledge` was
`playbooks/e2r-user-guide-writing.md`. It supports ordinary Japanese prose
using `つながり` for the Relation object while allowing application-specific
labels where the UI responsibility differs. No accepted workspace decision
selects a Relation endpoint label. The protected diagnostic playbook was not
modified.

## Live source inventory

The audit used the live filesystem in the four repositories, not uploaded
source snapshots. Occurrences were classified as technical identifiers,
canonical role labels, generic summaries, target-only descriptions, visual
direction language, or Relation-object vocabulary.

| Repository and live surface | Material vocabulary or identifier | Responsibility classification |
| --- | --- | --- |
| e2r-spec `spec/core.md` and related research | `sourceId`, `targetId`, `source`, `target`, `endpoint` | Core/technical identifier and canonical structural roles; not UI replacement candidates |
| e2r-spec `docs/relation-endpoint-ui-directionality-follow-up.md` | `Source`, `Target`, historical Japanese endpoint candidates, and the distinction from `Relation` | Planning/history evidence; not runtime authority |
| LiaisonScape `src/components/CreationDialog.tsx`, `src/components/RelationDetailDialog.tsx`, `src/i18n.ts` | English `Source Entity`, `Target Entity`, `Select source`, `Select target`; Japanese `接続元のエンティティ`, `接続先のエンティティ`, `接続元を選択`, `接続先を選択` | Canonical role labels for Entity-only authoring and Relation Detail |
| LiaisonScape `src/components/EntityDetailDialog.tsx`, `src/related-relation-display.ts`, `src/i18n.ts` | English `Related Relations`, `Source`, `Target`; Japanese `関連する Relation`, `始点`, `終点` | Related-Relation summary with canonical role rows; values can resolve to Entity or Event |
| LiaisonScape `src/components/EntityDeletionResolutionDialog.tsx`, `src/i18n.ts` | English `Connected Relations`, `Connections to remove`; Japanese `接続しているつながり` and compact `source → target` identity | Generic incident-Relation group plus compact endpoint summary |
| LiaisonScape `src/services/RelationService.ts` | `sourceId`, `targetId`; Entity-only changed-endpoint checks; Event endpoint read/preservation | Technical authoring responsibility; not generic endpoint vocabulary |
| LiaisonScape tests and accepted docs | Source/Target selectors, Entity/Event endpoint preservation, blocker identity | Contract evidence, not a new vocabulary decision |
| NarrativeLine `src/services/RelationPresentationService.ts` | `source`, `target`, `endpoints`, combined `source → target` labels | Derived presentation data; canonical roles remain available |
| NarrativeLine `src/screens/EntityDetailScreen.tsx` and deletion tests | `Relation Name`, `Source`, `Target`; Japanese `つながりの名前`, `始点`, `終点`; `connection` prose | Destructive-review surface with explicit canonical role rows |
| NarrativeLine `src/screens/EventDetailScreen.tsx` and `EntityPickerScreen.tsx` | `connected Relations`, `direct Relation`, `Keep Association` | Event/Entity context summaries; no generic endpoint-group label |
| NarrativeLine current user-facing vocabulary | English `Relation`; Japanese `つながり` | Relation object vocabulary, not endpoint vocabulary |
| Hub `src/App.tsx` and `tests/appUiIntegration.test.ts` | `relationship diagram`, `relationships`, `Dataset source` | Public application description; `Dataset source` is not Relation source |

The exact candidate spellings `謗･邯壼・`, `蟋狗せ`, and `邨らせ` were not
found in current application runtime source. They occur in e2r-spec historical
or research records and must not be treated as evidence that the live apps
currently use those literal strings. The live NarrativeLine runtime uses the
correct `始点` and `終点` strings, while live LiaisonScape uses `接続元` /
`接続先` in its Entity-specific authoring labels and `始点` / `終点` in its
related-Relation labels.

## Conceptual terminology model

The following three-way split is coherent and should be retained:

1. **Relation object** — the connected assertion/object itself. Technical and
   English application vocabulary is `Relation`; ordinary Japanese prose and
   current application UI use `つながり` where appropriate.
2. **Generic endpoint group** — information about both objects connected by a
   Relation, without claiming that either one is the canonical target. This is
   a useful conceptual responsibility for summaries and group headings.
3. **Canonical structural roles** — `Source` and `Target`, backed by
   `sourceId` and `targetId`. These are required whenever the user needs to
   know what canonical structure is being authored, inspected, validated, or
   acted on.

Visual direction is a fourth, separate concept. Normal, Reverse, Undirected,
and Bidirectional presentation must not alter the second or third concepts.
Reverse visual presentation therefore never changes `Source = A` / `Target =
B` into `Source = B` / `Target = A`.

The split is responsibility-based rather than a requirement that every
surface use identical strings. A grouped summary may use generic wording,
while an input or technical Detail surface must preserve canonical roles.

## Generic endpoint group analysis

The generic concept is accepted, but the literal vocabulary is not yet
accepted.

### Japanese candidate `謗･邯壼・`

As a concept, the candidate is intended to mean the set of objects connected by
the Relation. It must not mean only `targetId`, and it must not replace
canonical Source/Target labels on authoring or technical surfaces. That semantic
boundary remains coherent under Reverse, Undirected, and Bidirectional
presentation.

However, the exact candidate is not present in live application source and is
represented by a corrupted-looking or historical spelling in the supplied
research material. There is therefore no live Cross-App evidence that ordinary
users understand it as a neutral group of both endpoints. It remains a
candidate, not an accepted Japanese UI label. The candidate also must be
checked against contexts where one endpoint is an Event; an Entity-specific
expansion such as “endpoint Entity” would be inaccurate there.

No current live source occurrence was found where this candidate means only
the canonical target side. The current conflict is prospective rather than a
confirmed target-only runtime bug: accepting the generic concept later would
make any target-specific use of the same literal ambiguous, so target-only
surfaces must continue to use an explicitly directional role until separately
reviewed.

### English candidate `Endpoints`

`Endpoints` is technically understandable and useful as a research term, but
it is not sufficiently established as an ordinary-user label across the
audited surfaces. `Connected objects` may be clearer for a neutral summary,
while `Connected to` may fit a sentence or a context-specific field. These are
grammatical alternatives rather than a single universal replacement.

Conclusion: retain `Endpoints` as a tentative conceptual candidate only. A
later bounded copy decision should choose wording by surface and audience,
including whether the surface needs to identify both objects, a relation to a
selected object, or a canonical role.

## Canonical Source and Target analysis

`sourceId` and `targetId` are technical identifiers and remain authoritative.
They are not candidates for UI vocabulary replacement.

English `Source` and `Target` are sufficiently clear in the audited technical,
creation, Detail, and blocker contexts. `Source Entity` and `Target Entity` are
correct for LiaisonScape's current Entity-only Relation creation/editing
scope. They are not automatically correct for a read-only Relation whose
endpoint is an Event.

Japanese `接続元` and `接続先` clearly describe directional origin/destination
in LiaisonScape's Entity-only authoring controls. Japanese `始点` and `終点`
clearly separate canonical role rows in the current LiaisonScape related-
Relation surface and NarrativeLine blocker surface. They should not be treated
as automatic bugs merely because a generic endpoint group may be useful
elsewhere.

The exact historical strings `蟋狗せ` and `邨らせ` are not live NarrativeLine
runtime vocabulary; the live values are `始点` and `終点`. The historical
records correctly distinguish those strings as Source/Target role labels, but
they do not authorize a new replacement. Any future correction or copy change
must remain separate from this audit and must not be inferred from the generic
endpoint candidate.

## Surface-specific findings

### Relation Create/Edit

LiaisonScape Relation creation uses two selectors that write `sourceId` and
`targetId`. The explicit Source/Target distinction is required here; a generic
endpoint-group label would make stored direction unknowable. The current
Entity-only restriction is an authoring decision recorded separately, while
Event endpoints remain preservable and inspectable. No replacement is proposed.

LiaisonScape Relation Detail also exposes canonical source/target selectors
when editing Entity-to-Entity Relations and keeps Event-endpoint Relations
read-only. A follow-up implementation audit should consider making the
read-only labels type-neutral when an Event endpoint is present, since
`Source Entity` / `Target Entity` can overstate the endpoint type. This is a
surface-accuracy follow-up, not permission to change the current runtime.

NarrativeLine does not expose a Relation Create/Edit surface in the audited
screens. Its Entity and Event screens inspect or remove existing associations;
their wording must not be used to redesign LiaisonScape authoring selectors.

### Relation Detail and technical surfaces

Canonical role information is necessary in Relation Detail because the user
may inspect or edit the values that become `sourceId` and `targetId`. Technical
identifiers remain `sourceId`, `targetId`, and Relation ID. A generic endpoint
heading may supplement such a Detail view later, but must not replace the
canonical rows.

No final Detail UI vocabulary is selected here.

### Entity Detail, blocker, and related-Relation surfaces

LiaisonScape Entity Detail presents related Relations with separate Source and
Target rows, while its deletion-resolution dialog uses a generic “Connected
Relations” group and compact `source → target` identity. NarrativeLine's Entity
deletion blocker uses explicit independently wrappable Relation Name, Source,
and Target rows, while its service also derives a combined endpoint string.

These differences are not automatically accidental drift: the two apps have
different screen and workflow responsibilities. They are nevertheless a
genuine conceptual parity follow-up because both surfaces can support
destructive review. The shared requirement is role truthfulness, not identical
markup or literal labels. Generic endpoint wording may be suitable for a group
heading, but the card must retain canonical roles when endpoint identity affects
which Relation the user is reviewing or removing.

### Event and non-Entity endpoints

Core Relations may connect Entity or Event objects. LiaisonScape's current
creation/editing scope is Entity-only, but its Relation lookup and display code
resolves both Entity and Event objects, and its docs explicitly preserve Event
endpoints. NarrativeLine's Relation presentation service also resolves the
combined endpoint set and its Event screens describe connected Relations.

Accordingly, a generic endpoint concept should say “objects” or otherwise stay
type-neutral unless a surface is genuinely Entity-only. `Endpoints` is more
accurate than an Entity-specific generic label, but ordinary-user copy still
needs a separate decision. `Source Entity` / `Target Entity` remain scoped to
the current Entity-only authoring controls, not a universal endpoint label.

## Visual-directionality boundary

The accepted presentation-only directionality model is independent of
vocabulary selection:

| Visual mode | Canonical role labels | Vocabulary conclusion |
| --- | --- | --- |
| Normal `A -> B` | Source = A, Target = B | Show canonical roles where the surface needs them |
| Reverse `A <- B` | Source = A, Target = B | Never relabel fields to Source = B / Target = A |
| Undirected `A — B` | Source = A, Target = B | Generic wording may describe reduced visual emphasis, not changed roles |
| Bidirectional `A <-> B` | Source = A, Target = B | Do not imply two Relations or symmetric Core structure through labels |

The application must not use a visual mode to infer endpoint swaps, semantic
text changes, reciprocal Relations, or a generic-to-target reinterpretation.
Canonical source/target remains available to semantic, technical, Detail,
validation, and editing surfaces regardless of visual presentation.

## Cross-app parity and public documentation

The audited difference between LiaisonScape's Entity-specific authoring labels,
its related-Relation Source/Target rows, and NarrativeLine's blocker-card rows
is currently explainable by surface responsibility. The use of `Relation` in
English and `つながり` in ordinary Japanese prose is conceptually aligned.
The compact combined `source → target` strings in both applications are derived
summaries and do not replace the canonical fields.

No live Hub source or guide establishes a conflicting Relation endpoint
vocabulary. Hub uses “relationship diagram” and “relationships” for its public
application description; its “Dataset source” phrase refers to the Dataset
source, not a Relation Source endpoint. No Hub guide rewrite is needed from
this audit. If a literal generic endpoint term is later accepted, public-guide
alignment can be reviewed in that separate implementation/copy checkpoint.

## Implementation boundary for a later checkpoint

The conceptual model is ready for a bounded terminology decision, not for
runtime implementation. A later checkpoint may separately decide:

- a user-understandable English generic phrase by grammatical surface;
- a verified Japanese generic endpoint term and its Entity/Event neutrality;
- whether a generic heading is needed at all on each surface;
- type-neutral read-only labels for Event endpoints in LiaisonScape Detail; and
- whether similar destructive-review surfaces should share role separation or
  only the same conceptual responsibility.

That later work must not rename `sourceId`, `targetId`, Relation IDs, or Core
roles; must not relabel Source/Target because of Reverse, Undirected, or
Bidirectional presentation; and must not modify the current endpoint-separator
or other unrelated encoding records.

## Decision matrix

| Concept | Canonical meaning | EN direction | JA direction | Typical surfaces | Audit conclusion |
| --- | --- | --- | --- | --- | --- |
| Relation object | The Relation itself | `Relation` | `つながり` in ordinary user-facing prose | graph, Detail, list, creation | Accepted concept and current split |
| Generic endpoint group | Both connected Entity/Event objects | `Endpoints` tentative; `Connected objects` / `Connected to` context candidates | `謗･邯壼・` candidate only; live literal not established | summaries and group headings | Concept accepted; literal terms unresolved |
| Canonical source role | Stored `sourceId` | `Source` / scoped `Source Entity` | `接続元` or `始点` by surface; historical `蟋狗せ` not live | create/edit, Detail, technical, blocker | Canonical role retained; no automatic replacement |
| Canonical target role | Stored `targetId` | `Target` / scoped `Target Entity` | `接続先` or `終点` by surface; historical `邨らせ` not live | create/edit, Detail, technical, blocker | Canonical role retained; no generic-target conflation |
| Visual direction | Presentation only | Deferred control vocabulary | Deferred control vocabulary | future graph controls | Separate from endpoint vocabulary |

## Final outcome

**VOCABULARY MODEL PARTIALLY ACCEPTED / SPECIFIC TERMS STILL UNRESOLVED**

The conceptual separation between Relation object, generic endpoint group,
canonical Source/Target roles, and visual directionality is coherent across the
audited applications. The generic group must cover both connected objects and
must never silently mean only `targetId`. Canonical Source/Target remains
necessary for authoring, technical inspection, validation, and any operation
whose stored direction matters. Visual Reverse, Undirected, and Bidirectional
never relabel those roles.

The exact English generic label and Japanese `謗･邯壼・` candidate remain
unresolved. No target-only runtime conflict was found for the Japanese generic
candidate because it is not used in current application source; the risk is a
future ambiguity if one literal is assigned both generic and target-only roles.
Event endpoint applicability and LiaisonScape's Entity-specific read-only
labels are follow-up findings, not runtime changes in this checkpoint.

No application copy, endpoint vocabulary, visual-directionality UI, Core,
Extension, schema, Hub, Validator, or ai-knowledge file was modified by this
audit record.

## E2R-RELATION-ENDPOINT-VOCABULARY-JA1 — Japanese generic endpoint decision

Date: 2026-08-29

Status: **JAPANESE GENERIC ENDPOINT UI VOCABULARY ACCEPTED / ENGLISH GENERIC
VOCABULARY REMAINS UNRESOLVED**

### Relationship to the historical audit

The preceding `885adc7` audit remains historical evidence with outcome
**VOCABULARY MODEL PARTIALLY ACCEPTED / SPECIFIC TERMS STILL UNRESOLVED**. It
left the Japanese generic literal unresolved while considering technical and
direction-neutral alternatives, including the historical candidate
`謗･邯壼・`. This follow-up does not rewrite that history. It records the new
explicit product decision for one Japanese generic UI term only.

### Accepted Japanese generic term

The accepted Japanese generic endpoint UI vocabulary is:

**`つながり先`**

`つながり先` means a direction-neutral UI concept for an object participating
at either endpoint of a Relation when the surface does not need to distinguish
canonical Source from canonical Target. It may cover an Entity endpoint, an
Event endpoint, or another endpoint object kind permitted by E2R semantics.
It is not Entity-only and it is not target-only.

This is a vocabulary decision, not a schema or identity model. It must not
introduce numbered endpoint semantics such as “つながり先 1” and
“つながり先 2” as replacements for Source and Target.

### Relation and endpoint distinction

The terms remain separate:

```text
つながり    = the Relation object itself
つながり先  = a generic object participating at either endpoint
```

`つながり先` must not rename the Relation object, become a synonym for
Relation, or replace the established ordinary Japanese Relation vocabulary
`つながり`. A future surface may conceptually describe a `つながり` and its
`つながり先`, without implying that the generic term identifies a canonical
target.

Where type information is useful, a surface may add Entity or Event
information alongside the generic concept. Exact copy, layout, and placement
are not selected here.

### Canonical Source/Target boundary

`つながり先` is not a replacement for canonical Source or Target when the UI
must communicate what will be stored as `sourceId` or `targetId`. Explicit
Source/Target terminology remains necessary for:

- Relation Create and Relation Edit;
- semantic or technical Relation Detail;
- validation and diagnostic surfaces; and
- any control directly determining `sourceId` or `targetId`.

The existing Japanese canonical-role candidates and labels remain separate and
are not globally resolved by this decision. In particular, `蟋狗せ` and
`邨らせ` remain historical vocabulary records, while the current live
application labels are surface-specific. The historical `謗･邯壼・` candidate
is not the selected generic endpoint term and is not silently converted into
`つながり先` in this checkpoint.

### Visual-directionality compatibility

For the canonical Relation:

```text
sourceId = A
targetId = B
```

`つながり先` remains direction-neutral under every accepted presentation:

```text
Normal:       A -> B
Reverse:      A <- B
Undirected:   A — B
Bidirectional: A <-> B
```

In every case, A and B may be discussed generically as `つながり先` when the
surface does not need canonical roles. This does not make Source and Target
disappear, swap, or become semantic aliases. A Reverse visual must not turn
Source = A / Target = B into Source = B / Target = A, and no visual mode may
infer a semantic mutation.

### English remains a separate question

Accepting `つながり先` does not accept a one-to-one English translation. The
English generic UI term remains unresolved among `Endpoints`, `Connected
objects`, and surface-specific wording such as `Connected to`. The English
decision requires its own audience and grammatical-surface review.

Japanese acceptance therefore does not upgrade the overall vocabulary audit
to Outcome A. The conceptual model is narrowed and improved, but English
generic wording and some surface-specific copy remain open.

### Implementation status and encoding boundary

This decision does not authorize runtime copy replacement. Current application
surfaces may continue to use Source/Target, `接続元`/`接続先`, `始点`/`終点`,
`つながり`, or other responsibility-specific wording until a later bounded
implementation audit determines where `つながり先` is actually appropriate.

The directly relevant Research file was checked as UTF-8. No new encoding
corruption was found in the decision or terminology sections. Historical and
candidate spellings such as `謗･邯壼・`, `蟋狗せ`, and `邨らせ` are retained as
research evidence where referenced; no repository-wide encoding cleanup or
unrelated endpoint-label correction is part of this checkpoint.

### Updated terminology matrix

| Concept | EN | JA | Status |
| --- | --- | --- | --- |
| Relation object | `Relation` | `つながり` | Accepted |
| Generic endpoint concept | Unresolved: `Endpoints`, `Connected objects`, or surface-specific wording | `つながり先` | JA accepted / EN unresolved |
| Canonical Source role | `Source` | Existing canonical-role vocabulary; not replaced here | Retained |
| Canonical Target role | `Target` | Existing canonical-role vocabulary; not replaced here | Retained |
| Visual direction | Separate presentation vocabulary | Separate presentation vocabulary | Presentation-only; not selected here |

## Narrowed outcome

**Japanese generic endpoint UI vocabulary accepted: `つながり先`.**

The overall audit remains:

**VOCABULARY MODEL PARTIALLY ACCEPTED / SPECIFIC TERMS STILL UNRESOLVED**

The accepted Japanese term is direction-neutral, covers Entity/Event-capable
endpoint objects, remains distinct from `つながり`, and never replaces
canonical Source/Target roles. The English generic literal, exact surface
placement, and any runtime adoption remain separate follow-ups.

No application runtime, application copy, visual-directionality UI, endpoint
editing behavior, Core, Extension, schema, Validator, Hub, or ai-knowledge file
was modified by this decision.
