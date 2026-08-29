# E2R Relation Endpoint Vocabulary Surface Adoption Audit

## E2R-RELATION-ENDPOINT-VOCABULARY-SURFACE-AUDIT1

Date: 2026-08-29

Status: **VOCABULARY ACCEPTED / LIAISONSCAPE BLOCKER FOLLOW-UP ACCEPTED**

## Scope and authorities

This is a documentation-only audit of current user-facing Relation and
endpoint presentations. It applies the accepted vocabulary model without
changing runtime copy, behavior, tests, schemas, or application repositories.

The audit uses the live repositories and the following e2r-spec authorities:

* `67f6305 docs: accept English endpoint vocabulary`;
* `601eec7 docs: accept つながり先 endpoint vocabulary`;
* [Relation endpoint vocabulary audit](relation-endpoint-vocabulary-audit.md);
* [Relation direction and arrow appearance](relation-direction-and-arrow-appearance.md);
* [roadmap](../../docs/roadmap.md).

The accepted conceptual terms are:

* Relation object: EN `Relation`, JA `つながり`;
* generic direction-neutral endpoint concept: EN `Connected objects`, JA
  `つながり先`;
* technical/specification vocabulary: `Endpoints`;
* canonical structural roles: `Source` / `Target`, backed by `sourceId` /
  `targetId`.

`Connected objects` and `つながり先` describe the objects participating in a
Relation. They do not replace Source/Target where stored direction matters,
and their acceptance does not require a literal label on every surface.

## Audit method and exclusions

The live source was checked in LiaisonScape, NarrativeLine, and Hub. The
inspection covered localization/message maps, rendered components, endpoint
presentation services, and directly related tests or source references.

The following were classified as non-UI occurrences and excluded from
vocabulary adoption targets:

* `sourceId`, `targetId`, `source`, `target`, and `endpoints` property or
  variable names;
* TypeScript types and service names;
* test fixture fields and assertions;
* schema/Core terminology, comments, and validation diagnostics;
* internal graph and endpoint geometry terminology.

No live user-facing occurrence of `Connected objects`, `Connected object`,
`つながり先`, or `Endpoints` was found in the inspected application source.
This audit therefore evaluates where the accepted concept would help, rather
than treating its absence as a copy defect.

## Live surfaces inspected

### LiaisonScape

* `src/App.tsx` — Relation Detail wiring and Entity/Relation selection flow;
* `src/components/CreationDialog.tsx` — Relation Create controls;
* `src/components/RelationDetailDialog.tsx` — Relation Detail and Edit;
* `src/components/EntityDetailDialog.tsx` — related-Relation list;
* `src/components/EntityDeletionResolutionDialog.tsx` — deletion blockers;
* `src/related-relation-display.ts` — endpoint object and blocker identity
  derivation;
* `src/services/RelationService.ts` — endpoint resolution and Entity-only
  changed-endpoint validation;
* `src/i18n.ts` — EN/JA runtime messages.

### NarrativeLine

* `src/services/RelationPresentationService.ts` — compact Relation identity,
  Source, Target, and combined endpoint presentation data;
* `src/screens/EntityDetailScreen.tsx` — Related Events and Entity deletion
  blockers;
* `src/screens/EventDetailScreen.tsx` — Related Entities and Event deletion /
  association dialogs;
* `src/screens/EntityPickerScreen.tsx` — context-relative related-Entity
  selection;
* `src/i18n/messages.ts` — presentation message map (no endpoint-specific
  generic label found).

### Hub

* `src/App.tsx` and `tests/appUiIntegration.test.ts` — public application and
  sample descriptions.

Hub uses `relationship diagram`, `relationships`, and `Dataset source`; no
Relation endpoint terminology is present. There is no runtime adoption target
in Hub.

## Surface findings

### LiaisonScape Relation Create/Edit

Current EN copy is `Source Entity`, `Target Entity`, `Select source`, and
`Select target`. Current JA copy is `接続元のエンティティ`, `接続先のエンティティ`,
`接続元を選択`, and `接続先を選択`.

These controls select the values that become `sourceId` and `targetId`.
Canonical Source/Target information is required. Replacing either control
with `Connected objects` / `つながり先` would hide the stored role and is not
appropriate. The controls are currently Entity-only by authoring policy, so
their Entity noun is not an endpoint-type defect on this surface.

Recommendation: **KEEP CANONICAL**.

No surrounding generic heading or summary is needed; the two role controls
already communicate the complete responsibility directly.

### LiaisonScape Relation Detail

The live role labels are the same `Source Entity` / `Target Entity` in EN and
`接続元のエンティティ` / `接続先のエンティティ` in JA. When both endpoints
are Entities, the surface edits the canonical roles. When an endpoint is an
Event, the service resolves and displays it in read-only Detail while the
component still uses those Entity-specific labels.

Canonical Source/Target remains necessary. A generic `Connected objects` row
would remove role information and would not solve the type-noun problem.

Recommendation: **SEPARATE ACCURACY FIX**.

The smallest likely correction direction is to make the read-only mixed
endpoint labels type-neutral (`Source` / `Target`) or explicitly type-aware,
while retaining Entity-specific authoring controls if that authoring policy is
unchanged. This is an independent accuracy follow-up; it is not a generic
vocabulary adoption and is not implemented here.

### LiaisonScape Entity Detail / related Relations

The group heading is EN `Related Relations:` and JA `関連する Relation:`. Each
card shows Relation name plus explicit Source and Target rows: EN `Relation
name`, `Source`, `Target`; JA `つながりの名前`, `始点`, `終点`. The derived values
resolve both Entity and Event objects.

This surface both summarizes incident Relations and exposes role information
that helps interpret each Relation. `Connected objects` / `つながり先` would
duplicate the two role rows without improving the existing summary.

Recommendation: **NO CHANGE**.

The current EN/JA difference is a surface-language difference, not a loss of
semantic parity: both identify the Relation and preserve both canonical roles.

### LiaisonScape Entity deletion blockers

The blocker group is EN `Connected Relations` and JA `接続しているつながり`;
the accessible group label is EN `Connections to remove` and JA `削除するつながり`.
Each blocker preserves Relation identity, a compact ordered `source → target`
summary, an ID hint when needed, and an `Inspect Relation` / `つながりを確認`
action.

This is destructive review. The group labels name incident Relations, not
endpoint objects, and the ordered summary is useful for identifying exactly
which Relation blocks deletion. Adding a generic endpoint heading would be
redundant and could dilute deletion clarity.

Recommendation: **KEEP CANONICAL**.

No generic adoption is appropriate here. The existing no-cascade and explicit
inspection/removal semantics remain unchanged.

### Superseding decision — LiaisonScape Entity deletion blockers

The preceding `KEEP CANONICAL` finding is preserved as the historical result of
this audit. After direct visual review of the live deletion-resolution modal and
reconsideration under the accepted presentation-only directionality model, that
classification is superseded for this LiaisonScape surface only.

The current accepted outcome is:

**LIAISONSCAPE DELETION-BLOCKER GENERIC ENDPOINT PRESENTATION ACCEPTED /
RUNTIME IMPLEMENTATION READY**

The blocker card's responsibility is to identify the blocking Relation and both
connected endpoint objects clearly before destructive action. It does not need
to teach or expose the canonical `sourceId` / `targetId` roles. The Relation
name, both endpoint object identities, individual Relation inspection, explicit
removal, and the Entity-deletion block remain the safety mechanisms.

The accepted conceptual card structure is:

* EN: `Name` + Relation name; then two `Connected object` + endpoint value rows;
* JA: `名前` + Relation name; then two `つながり先` + endpoint value rows.

`Connected object` is singular because each row identifies one endpoint object;
it is surface-specific grammar derived from the accepted generic concept
`Connected objects`, not a new vocabulary model. The Japanese `つながり先` is
direction-neutral and remains valid for Entity and Event values.

The primary endpoint identity should no longer depend on one compressed
`A → B` line. The two endpoint values may retain the existing stable canonical
display order. Presentation-neutral labels do not swap endpoints and do not
mutate `sourceId` or `targetId`.

This structure remains compatible with Normal, Reverse, Undirected, and
Bidirectional graph presentation because it identifies the Relation name and
the two connected objects without requiring the user to reconcile Source/Target
with an arrow appearance. Canonical direction remains intact elsewhere.

This decision does not supersede canonical labels in Relation Create, Relation
Edit, or technical Relation Detail. Relation Detail remains EN `Source` /
`Target` and JA `始点` / `終点`, as accepted by LiaisonScape commit
`334c931 fix: make Relation endpoint roles type-neutral`.

The endpoint rows are type-neutral and therefore valid for both Entity and
Event values. They must not be labelled `Entity`, `Source Entity`, `Target
Entity`, or `Connected Entity`. Existing self-Relation semantics remain intact:
one blocking Relation may show the same endpoint value in both rows. Parallel
Relations remain distinct blocker cards. Existing `Inspect Relation`, removal,
and `Keep Entity` actions remain unchanged, as does the action hierarchy.

This is a LiaisonScape-only runtime candidate. NarrativeLine's deletion-blocker
`KEEP CANONICAL` finding remains a later, separate cross-app parity review; it
is not superseded here.

### NarrativeLine Relation presentation

`RelationPresentationService` derives a compact primary identity of the form
`Relation name: source → target`, plus separate `source`, `target`, and
combined `endpoints` values for consumers. It does not render a generic
endpoint heading or localize one.

The compact ordered expression already presents both endpoint objects without
adding a verbose label. In contexts where role distinction is material, the
derived Source/Target values remain available. A generic label would not
improve the current compact presentation.

Recommendation: **NO CHANGE**.

The `endpoints` property is internal presentation data, not runtime adoption
of the technical word `Endpoints`.

### NarrativeLine Entity Detail

The related-object section is EN `Related Events` / `No related events.` and
JA `関連するできごと` / `関連するできごとはありません。`. It displays only
Events related to the selected Entity; it does not display Relation identity
or endpoint role rows.

This is a context-relative one-other-object list, but the object type is
intentional and the current heading is more informative than a generic
endpoint heading. No singular `Connected object` or `つながり先` literal is
authorized by this audit.

Recommendation: **NO CHANGE**.

### NarrativeLine Event Detail

The related-object section is EN `Related Entities` / `No related entities.`
and JA `関連エンティティ` / `関連するエンティティはありません。`. The
Event-to-Entity association workflow also uses `Add Related Entity` /
`関連エンティティを追加`.

These surfaces intentionally present Entity objects related to the selected
Event. They do not claim that every possible Relation endpoint is an Entity;
they describe the concrete Entity-oriented workflow. Event deletion copy uses
`connected Relations` / `関連する関係`, which names the incident Relation
group rather than an endpoint type.

Recommendation: **NO CHANGE**.

The current copy is type-accurate for the rendered list and does not need a
generic endpoint label.

### NarrativeLine Entity deletion blockers

The blocker heading is EN `Review connections before deleting` and JA
`つながりを確認してください`. The group label is EN `Connections to remove`
and JA `削除するつながり`. Each blocker has EN `Relation Name`, `Source`, and
`Target`; JA `つながりの名前`, `始点`, and `終点`, followed by explicit remove,
cancel, and keep actions.

This surface has the same destructive-review responsibility as LiaisonScape.
The explicit role rows are necessary to identify a blocking Relation before a
destructive action. The displayed endpoint values can be Entity or Event and
the labels do not hard-code `Entity`.

Recommendation: **KEEP CANONICAL**.

The difference from LiaisonScape's compact blocker identity is a justified
presentation difference within the same safety responsibility; both preserve
Relation identity and canonical role information.

### NarrativeLine EntityPicker / single-other-endpoint context

The picker uses EN `Add Related Entity` / `Select an Entity to associate with
this Event.` and JA `関連エンティティを追加` / `このできごとに関連付けるエンティティを
選択してください。`. It presents a concrete Entity selection action, not a
neutral endpoint summary.

Recommendation: **NO CHANGE**.

The selected Entity or Event context can establish one participant, but that
does not by itself require a singular generic label. The current type-specific
action is clearer and no `Connected object` / `つながり先` wording is needed.

## Required surface matrix

| App | Surface | Current EN | Current JA | Responsibility | Recommendation | Why |
| --- | --- | --- | --- | --- | --- | --- |
| LiaisonScape | Relation Create | `Source Entity`; `Target Entity`; `Select source`; `Select target` | `接続元のエンティティ`; `接続先のエンティティ`; `接続元を選択`; `接続先を選択` | Select values written to `sourceId` / `targetId` | KEEP CANONICAL | Generic wording would hide stored roles; Entity-only authoring is intentional. |
| LiaisonScape | Relation Edit / Detail, Entity endpoints | `Source Entity`; `Target Entity` | `接続元のエンティティ`; `接続先のエンティティ` | Edit or show canonical roles for Entity endpoints | KEEP CANONICAL | Role distinction remains necessary and type noun is accurate for this branch. |
| LiaisonScape | Relation Detail, mixed/Event endpoint | `Source Entity`; `Target Entity` | `接続元のエンティティ`; `接続先のエンティティ` | Read-only inspection of an endpoint that may be an Event | SEPARATE ACCURACY FIX | Entity noun can be inaccurate; generic endpoint wording is not the fix. |
| LiaisonScape | Entity Detail related Relations | `Related Relations:`; `Relation name`; `Source`; `Target` | `関連する Relation:`; `つながりの名前`; `始点`; `終点` | Summarize incident Relations and preserve role rows | NO CHANGE | Existing summary plus role rows already communicates the concept. |
| LiaisonScape | Entity deletion blockers | `Connected Relations`; `Connections to remove`; compact `source → target` | `接続しているつながり`; `削除するつながり`; compact `source → target` | Individually identify Relations before removal | KEEP CANONICAL (historical; superseded below) | Historical finding preserved; the bounded LiaisonScape follow-up accepts surface-specific generic endpoint rows. |
| NarrativeLine | Relation presentation | Compact `Relation name: source → target`; derived `source`, `target`, `endpoints` | Same compact object-name expression; no generic label | Present Relation identity in cards/summaries | NO CHANGE | Compact ordered presentation is clearer than adding a generic label. |
| NarrativeLine | Entity Detail related Events | `Related Events`; `No related events.` | `関連するできごと`; `関連するできごとはありません。` | Show the other object type in an Entity context | NO CHANGE | Type-specific list is accurate; no generic heading is needed. |
| NarrativeLine | Event Detail related Entities | `Related Entities`; `No related entities.`; `Add Related Entity` | `関連エンティティ`; `関連するエンティティはありません。`; `関連エンティティを追加` | Show/select concrete Entity associations for an Event | NO CHANGE | Concrete workflow is clearer and type-accurate. |
| NarrativeLine | Entity deletion blockers | `Relation Name`; `Source`; `Target`; `Connections to remove` | `つながりの名前`; `始点`; `終点`; `削除するつながり` | Preserve Relation identity and roles before deletion | KEEP CANONICAL | Explicit role rows are required for deletion safety. |
| NarrativeLine | Event deletion / association dialogs | `connected Relations`; `Keep Association`; `Remove Association` | `関連する関係`; `関連付けを残す`; `関連付けを解除` | Explain incident Relation deletion or Entity association removal | NO CHANGE | Names Relation/association responsibility, not endpoint type. |
| NarrativeLine | EntityPicker | `Add Related Entity`; `Select an Entity to associate with this Event.` | `関連エンティティを追加`; `このできごとに関連付けるエンティティを選択してください。` | Select a concrete related Entity | NO CHANGE | A generic singular endpoint term would reduce clarity. |
| Hub | Public app/sample descriptions | No Relation endpoint term; `relationship diagram`, `relationships`, `Dataset source` | No Relation endpoint term in inspected source | Public navigation and descriptions | NO CHANGE | No runtime adoption target in Hub. |

## Generic-heading and parity conclusions

### Group heading versus role row

The accepted generic concept is suitable in principle for a newly introduced
neutral group heading whose responsibility is “these are the objects
participating in this Relation.” No inspected current surface needs that new
heading:

* LiaisonScape related-Relation and blocker groups already name Relations and
  show useful role information;
* NarrativeLine Entity/Event sections intentionally name the concrete object
  type or use compact Relation identity;
* adding a generic heading would not remove ambiguity that users currently
  have.

The role-row responsibility is different: `Source` / `Target` and the current
Japanese role vocabulary remain where the stored direction or canonical
identity matters, including Relation Detail. The accepted LiaisonScape
deletion-blocker decision is a bounded exception because that surface reviews
safe Relation identity rather than canonical direction. One layer must not
replace the other.

### Single-other-endpoint contexts

NarrativeLine Entity Detail and Event Detail are context-relative lists, but
they intentionally filter to `Related Events` or `Related Entities`. The
selected object establishes the context and the list's concrete type is more
useful than a generic singular label. No singular generic runtime copy is
currently justified.

### EN/JA parity

Literal symmetry is not required. The relevant parity is preserved:

* both locales retain the Source/Target distinction where it matters;
* both locales show the same number and kind of endpoint objects per surface;
* both retain type accuracy in the concrete Entity/Event lists;
* both preserve Relation identity and explicit destructive-review clarity.

The accepted conceptual pair remains EN `Connected objects` / JA `つながり先`,
but neither needs to be inserted solely to make labels look parallel.

### Cross-app parity

* LiaisonScape Create/Edit and NarrativeLine presentation are different
  responsibilities, so different copy is justified.
* LiaisonScape and NarrativeLine deletion blockers have the same safety
  responsibility but different current presentation structures. LiaisonScape
  now has an accepted surface-specific generic endpoint follow-up, while
  NarrativeLine remains `KEEP CANONICAL`; cross-app parity is still a separate
  future review and neither decision changes endpoint semantics or actions.
* The current conceptual vocabulary is aligned even where literal labels are
  intentionally different.

## Future implementation grouping

The audit finds one bounded LiaisonScape deletion-blocker implementation
candidate with a present review-safety benefit. The following separate
candidates remain scoped by the live findings:

### Candidate A — LiaisonScape mixed-endpoint label accuracy

Audit and, if accepted separately, correct the read-only Relation Detail
labels that currently say `Source Entity` / `Target Entity` when an Event
endpoint is displayed. Keep canonical role information and keep Entity-only
authoring constraints distinct. This is an accuracy fix, not adoption of
`Connected objects` / `つながり先`.

### Candidate B — Cross-app destructive-review parity

If later needed, compare the LiaisonScape compact blocker identity with
NarrativeLine's explicit role rows and decide whether any bounded parity change
improves review safety. Do not add generic headings merely for vocabulary
uniformity, and do not weaken existing explicit removal/inspection behavior.

There is no Candidate C for generic heading replacement because no current
surface was found where the accepted generic term improves clarity enough to
justify runtime copy change.

## Outcome

**VOCABULARY ACCEPTED / LIAISONSCAPE BLOCKER FOLLOW-UP ACCEPTED**

The accepted EN/JA generic endpoint concepts are reserved for a future neutral
summary or group-heading surface if one is actually introduced, with the
accepted LiaisonScape deletion-blocker rows as the explicit surface-specific
exception. Current Source/Target controls and Relation Detail rows remain
canonical. Current type-specific Entity/Event surfaces should remain
type-specific. The LiaisonScape deletion-blocker follow-up is implementation
ready but not yet implemented, and NarrativeLine parity remains separate.

No runtime copy, application behavior, deletion behavior, visual directionality,
Core, Extension, schema, Validator, Hub, or ai-knowledge file was modified by
this audit; the accepted LiaisonScape follow-up remains a documentation-only
runtime candidate.

## LS-RELATION-DETAIL-PRESENTATION-DIRECTIONALITY-DECISION1 — Superseding decision

Date: 2026-08-29

Status: **RELATION DETAIL SURFACE-SPECIFIC GENERIC + PRESENTATION CONTROL
ACCEPTED / RUNTIME NOT READY**

### Historical finding and narrow supersession

The preceding Relation Detail findings remain valid historical evidence. The
earlier accuracy work correctly replaced the inaccurate Entity-specific
`Source Entity` / `Target Entity` wording with type-neutral canonical
`Source` / `Target` labels, and the modal consistency audit correctly found no
material inconsistency under the then-current responsibility model.

This section supersedes only the current Relation Detail presentation
recommendation because a new product direction now intends Relation Detail to
host a future presentation-direction choice. When a user can choose Normal,
Reverse, Undirected, or Bidirectional visual presentation, primary Source/
Target copy can make a presentation-only reverse visual appear to contradict
the canonical labels. The new direction is therefore a product-level
information-architecture decision, not a claim that the earlier accuracy fix
was wrong.

### Accepted Relation Detail structure

Ordinary Relation Detail is now defined as **ordinary Relation inspection plus
presentation configuration**. Its primary questions are: what is this
Relation, which objects does it connect, and how should it be shown? The
ordinary primary view should not require the user to reason about `sourceId`,
`targetId`, canonical Source, or canonical Target. A future explicitly
technical surface may expose those concepts; this decision does not design
that surface.

The accepted conceptual structure is:

| Row | Japanese | English |
| --- | --- | --- |
| 1 | `名前` + Relation name | `Name` + Relation name |
| 2 | `つながり先` + endpoint A | `Connected object` + endpoint A |
| Control | `つながりの表示` + future visual control | `EN display-control label: unresolved` + future visual control |
| 3 | `つながり先` + endpoint B | `Connected object` + endpoint B |

The singular English `Connected object` is accepted for each endpoint row as
surface-specific grammar derived from the accepted conceptual vocabulary
`Connected objects`. The conceptual English vocabulary is not reopened.
Endpoint names appear once, above and below the control; the control must not
repeat them in a compressed `A → B` label.

The Japanese control concept is accepted as `つながりの表示`, not
`矢印の種類` or another arrow-only term, because one accepted mode is
non-directional and the control changes the visual presentation of the Relation
rather than only its arrowhead. No English control label is accepted in this
checkpoint. Candidate translations such as `Relation direction`, `Direction`,
`Arrow type`, `Relation display`, `Connection display`, and `Appearance` remain
unresolved and must not be silently selected by implementation.

### Endpoint order and presentation-only semantics

For the current canonical Dataset `sourceId = A`, `targetId = B`, the upper
endpoint row remains the current canonical source object A and the lower row
remains the current canonical target object B. This is a stable presentation
anchor, not a user-facing Source/Target label and not a visual-direction-
dependent reorder. No `connected object 1/2`, alphabetical reorder, or mode-
dependent swap is accepted.

Relative to the two visible rows, the conceptual modes are:

| Mode | Conceptual result | Semantic effect |
| --- | --- | --- |
| Normal | Show A toward B (`A → B`) | Presentation only; canonical A/B unchanged |
| Reverse | Show B toward A (`A ← B`) | Presentation only; do not swap `sourceId`/`targetId` |
| Undirected | Show the Relation without directional emphasis (`A — B`) | Does not create an undirected Core Relation |
| Bidirectional | Show the Relation in both directions (`A ↔ B`) | Does not create reciprocal or duplicate Relations |

Selecting a mode must not mutate `sourceId`, `targetId`, Relation name,
Relation description, Entity/Event names, IDs, Core semantics, or Extension
semantics. If no presentation setting exists, Normal remains the default
visual reflecting canonical source toward canonical target.

### Boundaries and readiness

Relation Create/Edit remains a separate canonical Source/Target responsibility
and is not changed by this decision. Entity Detail's related-Relation cards
remain a separate follow-up candidate and are not silently converted here. The
accepted LiaisonScape deletion-blocker rows remain `Name` plus two `Connected
object` rows, with no visual-direction control.

Persistence ownership remains unresolved. A future choice may be transient
LiaisonScape view state or another presentation-oriented mechanism, but no
Core field, Extension, schema, or persistence contract is selected. The exact
English control label is also unresolved. Consequently, this decision is
**not runtime implementation ready** and authorizes no application change.
