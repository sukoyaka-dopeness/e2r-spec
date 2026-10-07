# ParameterPlotter public Product and deployment readiness checkpoint

Date: 2026-10-04
Status: **Human-approved capability direction / lifecycle and authoring policies HUMAN-DECIDED / Dimension Assessment Extension Candidate 0.1.0 HUMAN-ADOPTED (not Stable) / bounded successor functional behavior HUMAN-ACCEPTED at source `b9a8e1fee6499c191c66033296e98965d777684e` / current local source `111be04898f354efe92856dfdd355ca89845fa59` includes post-acceptance workspace-action and accessibility corrections / Codex 390px real-browser review of all four views PASS / current local readiness documentation `7280f1fd77d2e1df24e247e680314b3d3c4d2f97` / Product UI audit `e6733aad51cd083e54329a6d59a9de5f364186d3` / current source has no new Human functional acceptance / browser storage failure injection NOT RUN / not published / other Product policies remain open**

## Purpose and authority

This checkpoint records Product decision preparation and the resulting
Human-selected boundaries after the accepted Candidate B first slice. The
dated audit and decision-preparation sections remain evidence from their
original checkpoints. The initial implementation status below is a dated
snapshot; the current functional acceptance status is recorded in the
2026-10-06 section and linked acceptance record. Nothing here reopens
Prototype 2 or Candidate B acceptance, registers the Candidate as Stable, or
authorizes release or deployment.

Human approved moving ParameterPlotter toward an externally usable E2R
application with production Validator integration, Dataset Entity edit and
delete, Temporary Entity promotion, Dataset Save/Export, comparison-work
retention and recovery beyond a browser session, visible storage failure,
public application shell, and eventual external deployment. That original
capability direction named Temporary Entity promotion; Human later superseded
it as the normal new-Entity path by deciding on direct Dataset Entity
creation. Human has also selected the Dataset Entity deletion policy and the
comparison-work persistence/recovery policy recorded below. Exact artifact and storage details, other successor policies,
shell composition, host, public URL, product name, and release identity remain
open. Human later adopted the Dimension Assessment Extension Candidate 0.1.0;
it is not Stable. Its bounded production Validator/runtime integration is
functionally Human-accepted for local source revision
`b9a8e1fee6499c191c66033296e98965d777684e` and has not been published.
The later local commits `a27b6ef5056291cbe1c5a2ff80e69a43c55aa5c8`,
`35e8a8c1612d4aa9ce00feef75f255d4d5a6776d`, and
`623b73b77d055be7f38d8d87ba109e7c8947c0a3` update the direct Dataset Entity
Description placeholder, implement the Human-decided endpoint-label
presentation, and suppress separators for empty label fields, respectively.
Automated regression coverage passes; none changes the Human-accepted behavior
baseline. A Codex 390px real-browser review of all four views passed, including
Radar spoke additions and Quadrant axis selection. This does not constitute
new Human functional acceptance.

The earlier decisions remain intact:

- Candidate B first Product slice is **HUMAN-ACCEPTED** with its original
  single-user, read-only-Dataset, session-only application-local boundary.
- Prototype 2 remains **HUMAN-ACCEPTED / CLOSED**, with **19 Human PASS / 0
  PENDING / B3 NOT RUN**. B3 remains an accepted browser-evidence limitation,
  not a PASS.
- The production application source is `sukoyaka-dopeness/e2r-parameter-plotter`.
  The inspected public `main` is at documentation HEAD
  `785e70177975d682ce0e97bb97636f978d6362f2`, following source baseline
  `e31c67af3f89a23f959d151091e8f144f413624d`.
- Human later adopted the Dimension Assessment Extension Candidate 0.1.0,
  described below. It is not Stable. Production Validator support and
  ParameterPlotter runtime integration are functionally Human-accepted at
  Human-accepted source revision is `b9a8e1fee6499c191c66033296e98965d777684e`;
  verified post-acceptance local source is `623b73b77d055be7f38d8d87ba109e7c8947c0a3`;
  [acceptance record](../../../e2r-parameter-plotter/docs/successor-human-acceptance-2026-10-06.md)
  and implementation details remain local and unpublished.
  Dataset write-back is not a separate non-portable mechanism: Candidate
  Dimensions and Assessments are Dataset data, while release identity, tag,
  and deployment remain unadopted or unperformed.

## Read-only audit baseline

| Repository | Inspected revision | Relevant evidence |
|---|---|---|
| e2r-parameter-plotter | `785e70177975d682ce0e97bb97636f978d6362f2` (`main`); runtime source baseline `e31c67a` | `model.js`, `README.md`, `index.html`, `docs/first-slice-boundary.md`, `.github/workflows/check.yml` |
| NarrativeLine | `eb583720df89797a1acf682b5cea747bc25e0cc6` | `src/services/EntityService.ts`, `src/App.tsx`, `src/services/DatasetService.ts`, `docs/editing-model.md`, `docs/navigation.md`, `docs/user-guide-en.md`, `tests/ValidationService.test.js` |
| LiaisonScape | `b93e9762ca2baa7e29d0dac4b99bb27970f4b618` | `src/services/EntityService.ts`, `src/services/DatasetService.ts`, `src/App.tsx`, `docs/user-guide-en.md` |
| e2r-validator | `7c352ce9f5e3b47564059f40e3e9a905d6e7defb` | `package.json` version `0.7.0`, `src/index.js`, `src/core-validator.js`, `docs/diagnostic-contract.md`, `README.md` |
| e2r-hub | `a588cb9342064ec21d1de21cab466bcaac97beab` | `README.md`, `src/App.tsx` |
| e2r-spec | `5239004330214c731edd6e96f17e9fd8bf514881` | `spec/core.md`, application guidance, Dataset handoff/replacement records, ParameterPlotter decision packet and acceptance evidence |

The e2r-spec working tree also contains an existing modified
`docs/roadmap.md` and untracked `work/` inspection artifacts. They were left
untouched. The roadmap is the sole current planning authority; its existing
diff is not part of this checkpoint.

## Findings

### Validator is a read-only diagnostic dependency, not an authoring policy

The published `@sukoyaka-dopeness/e2r-validator@0.7.0` exposes
`validateDataset(value)`. Its result is valid when no diagnostic has severity
`error`; warnings are allowed. Diagnostics distinguish structural errors from
warnings such as unknown Core fields, unknown fields in recognized
Extensions, and unknown Extension names. Validation does not return a repaired
Dataset or mutate its input. Human-readable messages are not the stable
machine interface; consumers use diagnostic codes and paths.

NarrativeLine and LiaisonScape both depend on the Validator and route imports
through application Dataset services. Their user guidance says syntax/Core
errors stop opening while warning-only unknown Extensions can open. Export is
validated before a JSON download. This supplies reusable technical evidence,
but it does not decide whether a warning-only or unsupported Dataset may be
edited in ParameterPlotter, which operations may touch an affected object, or
whether an invalid-but-readable candidate should be opened read-only.

The current ParameterPlotter does not yet integrate the production package:
`package.json` has no Validator dependency, and `model.js` `readDataset()` only
checks the top-level collections, Entity IDs, and cross-collection ID
uniqueness. It does not validate Relation endpoints or Extensions. Production
Validator integration is therefore a real successor capability gap, not
merely a UI presentation task.

**Candidate:** adopt the same machine diagnostic boundary (errors versus
warnings) and keep validation read-only. Require a separate Product rule for
openability and authoring eligibility. Do not treat `valid: true` as proof
that every contained Extension is understood or safely editable.

### Entity edit-field allowlist  Ecurrent evidence

E2R Core gives every Core Object a required `id`, optional `name`, optional
`description`, and optional `extensions`. The ID identifies the object within
the Dataset; `name` is a short display label and `description` is longer text
with no Core-assigned content semantics. Core recommends preserving unknown
fields and Extensions where practical and modifying only Extensions an
application understands. These are interoperability and preservation
guidelines, not a ParameterPlotter field allowlist.

Current application evidence is narrow:

- NarrativeLine's Entity update path accepts `name` and `description` updates
  and spreads them onto the existing Entity record. The Entity Detail form
  passes both text values as entered on Save, including blank and
  whitespace-only strings. A read-only service-path check confirmed those
  values remain present in exported JSON and after import/reopen; the current
  Validator accepts both. Its tests exercise an unrelated Core-field edit
  while preserving opaque P1 Names payload and round-tripping it through
  export/reload.
- LiaisonScape's Entity update path edits only `name` and `description`, copies
  the existing Entity before updating it, and its tests verify unknown Core
  fields and an unknown Entity Extension survive. Its current clear behavior
  deletes optional fields when the submitted text trims to empty.
- These are application precedents, not a commitment for ParameterPlotter.
  Their blank-field behavior differs: NarrativeLine keeps a present empty or
  whitespace-only string; LiaisonScape removes the optional field for
  empty/whitespace input.
- The registered Stable Extension list contains Metadata and History.
  Neither supplies a clear ParameterPlotter-owned Entity-edit field. Other
  Entity-level payloads found in the repository include Draft, Candidate, or
  experimental responsibilities such as Names, Coordinate, and layout intent.
  Their existence does not make them suitable for ParameterPlotter authoring.
- The published ParameterPlotter first slice does not implement Dataset Entity
  editing. No production behavior currently settles its field set or clear
  semantics.

The existing Validator decision constrains every candidate: a mutation may be
enabled only where the operation is shown to preserve unsupported/opaque data
and satisfy that operation's safety conditions. Unknown data may not be
repaired, normalized, dropped, or rewritten. Dataset Export revalidates and
blocks on errors; that export rule does not itself choose editable fields.

### Dataset Entity edit-field allowlist alternatives  Ehistorical preparation

| Candidate | Initial authoring scope | Benefits | Costs and boundaries |
|---|---|---|---|
| **A. Core labels only** | Edit `name` and `description`; keep `id` immutable; preserve `extensions`, other known/unknown fields, and unrelated Dataset content unchanged. | Fits the narrow field scope used by NarrativeLine and LiaisonScape and the two optional human-readable Core fields; does not take ownership of Extension semantics. | Its Human-decided blank behavior differs from NarrativeLine's current behavior. Opaque sibling preservation must still be established for each edit operation. No Extension payload editing is included. |
| **B. Core labels plus explicitly named Extension fields** | Include `name`/`description` plus a finite list of fields from selected Entity-level Extension payloads. | Can serve a concrete ParameterPlotter task that the Core labels cannot. | Adds responsibility for each Extension's exact version, validation, field-level preservation, and unsupported sibling data. Current registry/app evidence does not identify an Entity Extension field that ParameterPlotter must own; selecting one would need explicit rationale and named scope. |
| **C. Arbitrary Entity JSON editing** | Permit edits to arbitrary Core/Extension fields. | Maximum flexibility for unusual Datasets. | Conflicts with operation-level eligibility, opaque-data safety, and current application precedent; requires users to author semantics the application may not understand. Not supported as an initial-scope candidate by current evidence. |

### Human decision: blank values for allowlisted Entity text fields

When `name` and/or `description` are in the eventual edit allowlist, saving an
empty or whitespace-only input removes that optional property instead of
storing a present empty string. Whitespace may be examined to determine
blankness. This decision does not set whether nonblank text is trimmed or
otherwise normalized. Omitting an unchanged field from an update payload must
preserve its existing value.

This decision concerns only blank semantics for `name` / `description`. It
does not select the overall edit-field allowlist, define Extension-field
removal, `null`, arbitrary JSON editing, or Temporary Entity promotion.

At preparation time, Candidate A, with immutable IDs and preservation of all
unedited properties, was recommended as the smallest ownership surface. No
specific known Extension field was supported by evidence as required for this
app. The recommendation and alternatives below are retained as the historical
decision material; the subsequent Human decision is recorded next.

### Human decision: Dataset Entity edit-field allowlist  E2026-10-05

Human selected **Candidate A  ECore labels only** for initial ordinary Dataset
Entity editing:

> Ordinary Dataset Entity editing may change only `name` and `description`;
> `id` is immutable; all other known or unknown fields, Extensions, and
> unrelated Dataset content are preserved. Blank or whitespace-only values for
> either allowlisted field remove that optional property. Omitting an unchanged
> field leaves its stored value intact. Nonblank trimming/normalization remains
> a separate decision. Future Extension authoring requires a separate Human
> decision naming the Extension and fields.

No Extension field authoring or arbitrary Entity JSON editing is included.
Any future Extension-field addition requires a separate Human decision naming
the Extension, version, field, and need. Per-operation opaque-data
preservation must be demonstrated when implementation is authorized;
nonblank normalization and future E2R-wide Research remain separate and do
not reopen this allowlist decision.

### NarrativeLine blank-value behavior audit  E2026-10-05

In the current NarrativeLine Entity Detail form, both text controls are passed
to `handleUpdateEntity()` on **Save Entity** exactly as entered. That handler
forwards the values to `updateEntity()`, which spreads the supplied updates
onto the existing Entity. The normal form submits both keys, so a blank input
stores `""` and whitespace-only input stores that exact whitespace string;
neither removes the optional property. The low-level service does not trim or
delete on its own. Omitting a key in a direct service update leaves the prior
value unchanged because the existing Entity is spread first.

`exportDatasetJson()` validates and JSON-stringifies the current Dataset.
A read-only execution of the same service path for both empty and whitespace-
only values confirmed Export succeeds, emitted the fields as present strings,
and `importDatasetJson()` restored those exact values. Core validation does
not impose nonempty constraints on Entity `name` / `description`. No real
browser session was needed to determine this source-defined form-to-service
path; this is runtime-code evidence, not a Human visual acceptance. The
behavior differs from LiaisonScape's blank-clears behavior and is not a
Cross-App convention.

### Entity deletion policy comparison  E2026-10-04 audit snapshot; superseded

LiaisonScape's current `assessEntityDeletion` refuses deletion when any
incident Relation exists. Its UI directs the user to remove or review those
Relations first; it does not cascade.

NarrativeLine has conflicting evidence. `docs/navigation.md` and
`docs/architecture.md` describe connected-Relation cleanup. However, current
`src/services/EntityService.ts` filters only the Entity, `src/App.tsx`
invokes that service directly, and `tests/ValidationService.test.js` asserts
that connected Relations remain. The Validator treats a Relation whose
endpoint no longer resolves as an error. Thus the current source/test behavior
does not match those documentation statements and can leave an invalid Dataset
after deleting a referenced Entity. No NarrativeLine change is made here.

At this audit snapshot, the documentation conflict meant neither app should be
copied as a finished deletion contract. The candidate policies recorded then
were:

1. **Refuse while referenced (recommended conservative candidate):** retain
   the Entity until known Core and supported references have been resolved.
   This avoids silently deleting other recorded facts, but may require a
   reference-resolution workflow.
2. **Resolve individually:** show each known reference and let the user remove
   or edit it before retrying deletion. This is safer and more informative,
   with a larger workflow and focus/draft burden.
3. **Explicit cascade:** confirm and remove a defined set of connected
   records. This is direct, but risks losing meaningful Relations or
   references; unknown Extension references cannot reliably be enumerated.

The audit did not adopt any policy. Human resolved only the ParameterPlotter
Dataset Entity deletion policy on 2026-10-05, as recorded in the current
decision section below. The NarrativeLine source/history evidence was later
reconciled by its documentation-only commit `29b15c09bd91181cbba27dcb5203fec331dae142`;
the old NarrativeLine conflict described in this 2026-10-04 snapshot is not
current evidence.

### Human decision resolution: Dataset Entity deletion  E2026-10-05

ParameterPlotter does not own Relation lifecycle or provide general Relation
editing. A Dataset Entity with any incident Relation cannot be deleted. The
application must neither cascade-delete those Relations nor leave dangling
Relation endpoints. When deletion is attempted, it must identify the blocking
Relations sufficiently for the user to know which objects prevent deletion.

A targeted LiaisonScape inspect handoff is optional and conditional: offer it
only when the handoff can resolve the exact Relation against the same current
Dataset state. Source Dataset URL absence, URL/current-Dataset mismatch,
modified or pending source state, or uncertain Relation identity makes the
handoff unavailable. In that case, explain that the Relation must be resolved
first and keep Entity deletion blocked. The handoff conveys inspect intent; it
does not authorize recipient mutation or confirmation. ParameterPlotter does
not add a general Relation editor or deletion workflow.

The cross-application rationale is application-level Product reasoning, not an
E2R-wide normative rule. LiaisonScape is Relation-first and resolves blockers
through its Relation workflow. NarrativeLine exposes incident Relations at the
Entity deletion point and supports individual resolution because Relation is
not its primary editing surface. ParameterPlotter owns Entity comparison but
not Relation lifecycle, so its boundary is blocker visibility plus safe
handoff. The shared safety rationale is to avoid both invalid dangling
Relations and silent Relation deletion as a side effect.

The accepted Cross-App Handoff contracts provide a bounded safety reference;
they do not fix ParameterPlotter's URL shape or component structure. A handoff
must target canonical Relation identity and a retrievable Dataset snapshot
matching the current source. It must not present a stale source snapshot as
current or bypass existing modified/pending-work protections. If those
conditions cannot be satisfied without a new cross-app protocol, omit the
handoff and retain the blocker. No new protocol is authorized here.

The Dataset Entity deletion decision does not determine Entity creation.
Human subsequently decided that new Entities are created directly as Dataset
Entities and that Temporary Entities are not part of the normal successor
workflow. The earlier promotion identity decision is retained below as
historical evidence under its then-current premise; it does not define the
current creation path. Legacy Candidate B Temporary workspace handling is
decided separately below. The edit-field
allowlist, Validator policy, and comparison-work persistence are recorded in
their own decision sections. No implementation is authorized by these
documentation decisions.

### Temporary Entity promotion is a new identity/lifecycle operation  Ehistorical preparation

The accepted ParameterPlotter slice has no promotion operation. NarrativeLine
and LiaisonScape can create Dataset Entities and generate unique Core Object
IDs, but neither inspected application provides a comparable transition from
an application-local Entity that already owns comparison values to a Dataset
Entity.

Promotion must define whether the temporary identity is retained when it is
valid and collision-free or replaced by a newly allocated Dataset ID, how the
existing comparison values remain associated, what happens to view-local
references, and what cancellation or partial-failure means. The application
can keep comparison values application-owned without making them portable E2R
facts, but then it needs an explicit mapping from the promoted Dataset Entity
to those local values. Human decision is required before implementing
promotion. A candidate is an atomic transition that allocates or retains one
unique Dataset ID and preserves the local value association; its ID rule still
needs selection.

### Temporary Entity promotion  Ebounded Human decision preparation (2026-10-05; historical)

The production source at `sukoyaka-dopeness/e2r-parameter-plotter` HEAD
`785e70177975d682ce0e97bb97636f978d6362f2` is the accepted Candidate B
first-slice implementation, not a promotion implementation. In `main.js`,
the Entity form creates application-local IDs as `temp:` plus
`crypto.randomUUID()` and checks them against current Entity IDs. `model.js`
stores comparison values by Entity ID (`values[entityId][dimensionId]`), and
`views.js` keys selection/presentation by that identity. The Entity menu still
renders “Add to Dataset · unavailable E there is no promotion workflow or test
covering an identity/value transition.

The Core requires each `id` to be a non-empty string unique across all Entity,
Event, and Relation objects in one Dataset; it does not require global
uniqueness or prescribe an ID format. Application recommendations encourage
stable IDs, list UUIDv7 and ULID as examples, and recommend preserving existing
IDs wherever practical. They do not say that an application-local `temp:` ID
must or must not become a Dataset ID. Promotion therefore needs a Product
choice about continuity, while implementation must still check the full
Dataset object-ID set rather than only Entity IDs.

The current state shape makes the continuity trade-off concrete: values are
keyed by Entity ID, while selection, Quadrant waiting/placement, Radar
secondary selection, and Matrix row order also refer to Entity IDs. Retaining
the ID can keep these associations direct. Allocating a new ID requires
remapping the values and every live identity-based reference as one coherent
transition; otherwise the visible promoted Entity could lose its comparison
values or become duplicated in a view. These are application-local
associations and do not make comparison values portable E2R facts.

Promotion also crosses the selected artifact boundary. The promoted Entity
becomes part of the active Dataset and therefore belongs in a later E2R Dataset
JSON export; its application-local Dimensions and comparison values do not
thereby become Dataset facts. The self-contained ParameterPlotter workspace
backup remains the recovery artifact that pairs a Dataset dependency snapshot
with application-local work. Exact dirty-state accounting and export/backup UI
remain separate open decisions, but promotion must not conflate these two
artifacts or imply that Dataset export carries comparison values.

Human decision candidates:

| Candidate | Identity behavior | Continuity and failure responsibility | Main trade-off |
|---|---|---|---|
| **A. Retain the Temporary ID when eligible** | Promote using the existing ID only if it is valid and unique across every Core Object in the active Dataset; otherwise promotion is unavailable. | Values and ID-based view references can remain attached without remapping. The UI must explain an ineligible ID and preserve the Temporary Entity. | Strongest continuity and least remapping, but promotion may be blocked by an ID collision or future eligibility rule. The current generated `temp:` UUID form is non-empty, but uniqueness against Events/Relations is not currently checked at Temporary creation. |
| **B. Always allocate a new Dataset ID** | Keep the Temporary ID application-local and assign a separate unique ID to the new Dataset Entity. | Promotion must atomically transfer the temporary value association and update selected/waiting/secondary/Matrix references; it must avoid leaving both identities as competing representations of the same user-visible Entity. | Clear separation between temporary and Dataset identities, but adds mapping/remapping work and risks breaking apparent continuity if any reference is missed. No particular ID format is selected by this candidate. |
| **C. Conditional continuity with safe fallback** | Retain the existing ID when it passes the Dataset-wide validity/uniqueness check; otherwise allocate a new unique Dataset ID. | The same atomic association/remapping guarantees as B are needed on the fallback path; when preparation fails, retain the original Temporary Entity and its values. | Avoids a predictable collision block while preserving identity in ordinary cases, but yields two identity outcomes and requires understandable handling when a new ID is assigned. |

All candidates need the same successful end state: one Dataset Entity for the
promoted subject, with the Temporary status ended, rather than two separately
listed Entities that appear to represent the same subject. Human should also
confirm the promotion field-copy boundary. The smallest candidate is to copy
the Temporary Entity's current `name` and optional `description`, omit its
application-only Temporary marker, and preserve unrelated Dataset content.
The ordinary edit allowlist (`name`, `description`, immutable `id`) does not
automatically settle this creation operation. Blank handling for allowlisted
text is already decided; nonblank trim/normalization is not. No Extension field
or arbitrary JSON authoring is implied.

The global persistence decision already allows current-session editing to
continue in visible degraded/unsaved state if browser-local persistence fails.
That covers a persistence write failure after an in-memory operation has been
applied; it does not by itself define whether promotion's Dataset mutation,
Temporary Entity removal, local-value association, and view references form
one all-or-nothing in-memory operation. A bounded promotion decision should
state that partial identity/value transitions are not exposed, and distinguish
preparation/activation failure (leave the Temporary Entity and Dataset as
they were) from a later persistence failure (apply under the selected degraded
/ unsaved policy, preserving the previous persisted copy under the existing
restore rule). The technical transaction mechanism remains an implementation
matter.

No current repository evidence makes an Extension field necessary for
promotion, and no E2R-wide ID format or new portable value model is required
to frame the choice. The candidates and recommendation above are historical
pre-decision material. Human selected Candidate C and settled the field-copy
and all-or-nothing boundaries in the following historical workflow decision.
A later decision removed Temporary Entity creation and promotion from the
normal successor workflow; neither the recommendation nor Candidate C is a
current creation requirement. No implementation is authorized by this prep.

### Historical Human decision: Temporary Entity promotion identity and value continuity  E2026-10-05

This decision was adopted for a workflow where a new comparison Entity began
as Temporary and could later be promoted. Human later superseded that premise
for ordinary new Entity creation. Preserve this decision as historical Product
evidence; it does not require a normal promotion capability and does not
determine how legacy Temporary records are handled.

Human selected **Candidate C  Econditional continuity with safe fallback**.
Promotion retains the Temporary Entity's existing ID when it is valid and
unique across every Core Object in the active Dataset. Only when it cannot be
safely reused does promotion assign a new unique Dataset Entity ID. This is an
application-level continuity policy; it does not prescribe an E2R-wide ID
format or define portable Temporary ID semantics.

The initial Dataset Entity fields created by promotion are `name` and, when
present, `description`. The application-only Temporary marker is omitted.
Dimensions, comparison values, selection, placement, view state, and other
ParameterPlotter-owned data are not copied into the Dataset. Comparison values
remain application-local workspace data associated with the same logical
promoted subject; if the ID changes, identity-based values and references
continue to follow that subject. No Extension or arbitrary JSON authoring is
included, and nonblank text trim/normalization remains undecided.

Promotion is user-visible **all-or-nothing** across Dataset Entity addition,
ending Temporary status, local comparison-value association, and necessary
identity-based reference updates. A failure before preparation/activation
completes leaves the Dataset, Temporary Entity, values, and references as they
were; no partial promotion or duplicate subject is exposed. If promotion has
been applied in memory and only browser-local persistence fails, the existing
degraded/unsaved policy applies. This decision does not change persistence or
restore behavior.

After success there is exactly one Dataset Entity for the promoted subject;
its Temporary representation ends, while comparison values and necessary view
continuity remain application-local. Dataset Export and the self-contained
ParameterPlotter workspace backup keep their already-decided, distinct
responsibilities. This decision does not adopt portable
Dimension/value/Observation semantics or change ordinary Dataset Entity edit,
deletion, Validator, persistence, or restore policies. Implementation remains
unauthorized.

### Human decision: direct Dataset Entity creation lifecycle  E2026-10-05

Human decided that the ordinary new-Entity workflow creates a Dataset Entity
directly. It does not first create a Temporary Entity, and Temporary Entity
creation/promotion is not part of the normal successor Product workflow. This
does not move Dimensions, comparison values, selection, placement, view state,
or other ParameterPlotter workspace data into the Dataset. Comparison work
in the existing workspace remains application-local and is not automatically
converted into portable Dataset facts by this creation decision. The later
Candidate separately defines portable Dimensions and explicit Dataset
Assessments. A future need for a
Dataset-independent comparison subject or “what-if EEntity requires a separate
capability proposal and Human decision; none is adopted now.

This decision does not specify the creation form, ID generation method/format,
nonblank text normalization, or runtime implementation. The promotion ID,
field-copy, and all-or-nothing rules above remain historical decisions under
the earlier Temporary-to-Dataset workflow premise; they are not requirements
for the normal direct-creation path.

The accepted Candidate B source at
`sukoyaka-dopeness/e2r-parameter-plotter` HEAD
`785e70177975d682ce0e97bb97636f978d6362f2` creates `temp:` IDs, stores
`tempEntities` in its `sessionStorage` workspace, and restores that field in
`model.js`. Existing session/workspace state can therefore contain Temporary
Entities. How a successor runtime preserves, converts, removes, or otherwise
handles those legacy records is not decided here and must return to Human
before compatibility or migration behavior is implemented.

### Save/Export and workspace persistence are distinct artifacts

NarrativeLine and LiaisonScape's `Export E2R JSON` validates and downloads the
current Dataset while leaving the app open. It does not overwrite the
originally imported local file. The accepted cross-application Dataset
Replacement Safety design distinguishes:

- `datasetModified`: current E2R Dataset differs from the active clean
  baseline;
- `pendingUserWork`: meaningful app-authored work not yet committed to that
  Dataset; and
- `recoverableSessionState`: state that may help after interruption, which
  does not itself prove durability or remove replacement/exit protection.

That design's D1-D7 rules are authority for NarrativeLine/LiaisonScape, not an
already adopted ParameterPlotter contract. It is a strong candidate because
Dataset edits, local comparison work, and recovery are now separate concerns.
An E2R JSON download must not be presented as saving a browser workspace, and
a browser-local write must not be presented as a user-controlled Dataset
export.

### Current ParameterPlotter storage has a confirmed silent failure path

The current production `model.js` writes its session record with
`try { sessionStorage.setItem(...) } catch {}`. A browser storage exception is
silently swallowed. The accepted Candidate B boundary disclosed session loss,
but did not accept silent failure as a successor behavior. The newly approved
direction explicitly requires that storage failure become visible.

Any durable persistence plan therefore needs a user-visible distinction among
successfully persisted work, in-memory work that has not been persisted, and
failure to persist. Human still needs to decide whether the app may continue
editing in memory after persistence failure, should block further changes, or
offer a recovery/export route. Quota, browser privacy settings, disabled
storage, and interrupted writes are technical failure cases; they do not by
themselves select the product policy. This is a successor-slice requirement,
not a reason to reopen Candidate B acceptance.

### Public shell and deployment are capabilities, not a cross-app template

NarrativeLine and LiaisonScape are independently owned applications with
Home/acquisition paths, locale controls, guides, samples, credits, repository
and license references. Their composition and editing workflows differ. Hub
describes itself as an ecosystem entry point and links applications, samples,
the specification, and Validator; it is not an application runtime, storage
service, or required route for direct use. The current Hub application list
does not include ParameterPlotter.

The ParameterPlotter repository currently uses browser-native ES modules and a
local static HTTP server with no backend or third-party runtime dependency.
Its workflow runs the read-only `check` command; there is no deployment
workflow, live site, tag, or release in the inspected repository. This makes
static hosting technically plausible for a single-user browser-local design,
but deployment has not been tested. The host, public URL, base path, CI
deployment permission, and live-revision verification remain choices for a
later deployment checkpoint. Hub listing is optional and separate.

The approved shell capability can be satisfied with app-specific, accessible
entry/help/identity surfaces. Existing applications provide examples, not a
requirement to copy every Header, Footer, locale switch, sample gallery, or
Home layout. Exact shell composition can be designed after data workflows are
clear; legal software license, source repository link, user guide, supported
Dataset acquisition, and explicit persistence/recovery explanation need to be
available before inviting external use.

## Capability dependencies

```text
Choose Dataset/workspace ownership and retention promise
    ├── workspace persistence, restore, replacement, and failure UX
    └── distinguish application workspace save from E2R Dataset export

Choose validator/open/authoring eligibility
    └── bounded Entity edit/delete and Dataset export validation
         ├── Entity field allowlist and opaque-data preservation
         ├── implement the approved Relation-blocker visibility / safe-handoff boundary
          └── ordinary direct Dataset Entity creation; Temporary creation is out of normal workflow

Persist + mutate + export boundaries
    └── responsive public shell, guide/sample/error states, external
        acceptance, then choose and verify a deployment target
```

Shell scaffolding, license/repository links, and a user guide can be developed
in parallel once their exact copy is ready, but cannot substitute for the
data-lifecycle decisions. Deployment can wait until persistence and dataset
round-trip behavior have browser acceptance evidence.

## Human decisions and candidates

### Decision 1  EWhat exactly is persisted and how can the user recover it?

This is the first gate. It determines whether comparison work is app-local or
portable, how it survives browser closure, and whether Save/Export names refer
to one or several artifacts.

| Candidate | User guarantee | Benefits | Cost / unresolved edge |
|---|---|---|---|
| **A. Browser-local durable workspace** | Work is restored in the same browser profile/origin after ordinary session end. E2R Dataset edits are separately exported as E2R JSON. | Keeps local comparison facts outside portable E2R; simple static hosting; aligns with the single-user boundary. | Browser storage can be cleared, evicted, unavailable, or quota-limited; same-browser-only is weaker than a user-held backup. Must state the limit and surface failures. |
| **B. App-specific workspace file** | User explicitly exports/imports a ParameterPlotter workspace for recovery/reuse. E2R Dataset export remains a separate file. | User-controlled backup and transfer without adopting portable E2R semantics. | Requires a versioned app-owned package, how it carries or identifies the Dataset, conflict/replacement behavior, and preservation rules. It is not an E2R Dataset. |
| **C. Portable E2R representation** | Comparison work travels as part of an E2R Dataset and can be understood by other tools. | Strongest E2R interoperability. | At the 2026-10-04 decision gate it lacked Human-approved Dimension/value/Observation semantics and was not selected; the later Dimension Assessment Candidate is recorded separately below. |
| **D. Browser-local workspace plus app-specific backup** | Ordinary same-origin restore plus explicit workspace backup/import; edited Dataset is separately exported as E2R JSON. | Strongest fit for recovery/reuse while keeping application facts distinct from E2R facts. | More state, versioning, conflict and support burden; must not blur the workspace backup with E2R JSON. |

**Earlier recommendation, superseded by the decision below:** D fit a promise
that included recovery after browser storage was cleared or work on another
device; A was the narrower same-browser-profile choice. Human has now selected
the equivalent combined promise as candidate C in the decision packet below.
In all cases, E2R Dataset Export and ParameterPlotter workspace backup remain
visibly distinct operations and artifacts.

The 2026-10-05 packet below renames the user-facing choices for clarity: this
table's A maps to packet A, B maps to packet B, and D maps to packet C. The portable E2R candidate in this earlier table was excluded from the
immediate recovery-promise choice at that time. Human later adopted the separate
Dimension Assessment Candidate 0.1.0 below; it does not make the workspace
backup itself an E2R Dataset or automatically convert workspace-only data.

### Human decision: persistence and recovery promise  E2026-10-05

Human selected **C: browser-local persistence plus user-managed
ParameterPlotter workspace backup/import**. The candidates below describe
Product guarantees, not storage-engine choices; A and B were not selected.

| Product promise | What the user can expect | Main loss boundary and added responsibility |
|---|---|---|
| **A. Browser-local persistence only** | Comparison work is retained for later use in the same browser profile and application origin, subject to browser storage availability. | Clearing site data, browser eviction, profile/device loss, or unavailable storage can remove or prevent recovery. This is not a user-held backup and does not promise transfer to another device. |
| **B. User-managed ParameterPlotter workspace backup/import only** | The user can create and later restore a separate ParameterPlotter workspace artifact, including on another browser/device when they retain the artifact. | Recovery depends on the user's copy and its freshness. Product responsibility includes explaining what it contains, how it relates to the source Dataset, import compatibility, and safe replacement of current work. It does not itself provide automatic continuity between visits. |
| **C. Browser-local persistence plus workspace backup/import  ESELECTED** | Ordinary same-profile/origin continuity plus a user-controlled recovery/transfer path independent of browser storage. The workspace backup is self-contained for comparison-work restoration and includes the E2R Dataset snapshot needed by that workspace. | Provides the approved application-local recovery promise without portable E2R semantics, while adding backup freshness, restore, compatibility, replacement, and support responsibilities alongside browser-storage failure handling. |

The embedded Dataset snapshot is a dependency snapshot used to restore the
ParameterPlotter workspace. It does not make comparison Dimensions or values
E2R Dataset facts and is not a substitute for `Export E2R JSON`, which remains
the separate portable Dataset artifact and operation.

If browser-local persistence fails, editing may continue for the current
session in a clearly visible degraded/unsaved state. The application must
distinguish successfully retained work from work that exists only in memory,
warn that memory-only work may be lost, and expose a workspace-backup recovery
route when backup creation is available. It must not silently treat a failed
write as success or disable editing solely because the browser write failed.
Exact warning UI and retry timing remain later details; editing continuation
in the degraded state is decided.

At this 2026-10-05 persistence decision, portable E2R representation was
not the default mechanism for workspace recovery. Human later separately
adopted Dimension Assessment Candidate 0.1.0; that Candidate does not replace
the self-contained workspace backup or make workspace-only presentation and
selection state portable.

### Workspace backup and E2R Dataset Export boundary

Treat these as separate artifacts unless a future portable-model decision
explicitly changes the boundary. `Export E2R JSON` concerns the Dataset: the
existing E2R applications validate and download a Dataset snapshot; browser
download initiation does not overwrite the imported local file or prove that
the user retained it. The selected ParameterPlotter workspace backup concerns
application-owned comparison work and its embedded Dataset dependency snapshot;
it must not be presented as an E2R Dataset.

The selected workspace artifact is self-contained for comparison-work
restoration and includes the E2R Dataset dependency snapshot. Candidate
application-local content includes Dimensions and their settings, temporary
Entity identity, and Entity-Dimension values (including null versus explicit
zero and retained values that currently violate a local constraint/range).
Whether it also restores view/selection state remains open. The embedded
snapshot does not turn temporary comparison values into portable Dataset facts
or enable Dataset write-back.

### Persistence failure and loss visibility

Under any option that writes browser storage, the application must not imply
that work is saved when storage is unavailable or a write fails. At minimum,
the user needs to distinguish successfully retained work from current
in-memory work that has not been retained, be told that the latter may be
lost, and be told whether a workspace backup or other recovery copy exists.
Failure to create or import a workspace backup likewise must not be reported
as success. Human has decided that browser-storage write failure permits
current-session editing only in a visible degraded/unsaved state; the precise
status presentation and retry behavior remain open. Existing Dataset
Replacement Safety offers useful concepts—Dataset changes, pending
application work, and recoverable session state are independent—but its
D1-D7 contract applies to NarrativeLine/LiaisonScape and has not been adopted
as ParameterPlotter behavior.

### Human decision: Workspace Import / Restore replacement safety  E2026-10-05

Human selected **whole-workspace replacement**. Import/Restore activates the
backup's embedded E2R Dataset dependency snapshot together with its associated
application-local comparison work as one workspace. The active Dataset may
therefore change to the backup's snapshot. Restore does not merge Dimensions,
Temporary Entities, or Entity-Dimension values with the current workspace;
merge and its identity/conflict semantics are outside the initial scope unless
Human separately approves them later.

| Candidate | User-visible guarantee | Loss / merge responsibility | Failure behavior and Dataset meaning |
|---|---|---|---|
| **A. Whole-workspace replacement  ESELECTED** | A successful restore makes the imported Dataset snapshot and its associated application-local comparison work the active workspace as one unit. | No merge/conflict rules are part of the initial scope. The imported Dataset snapshot may differ from the current Dataset; restore switches to the snapshot included in the backup. If current work may be lost, explicit loss confirmation allows Cancel or Discard and Restore; a separate backup is optional and not required to succeed. | Pre-activation read, parse, eligibility, or activation-preparation failure does not partially replace the active workspace or damage the prior browser-local persisted copy. If persistence fails after a valid restore is activation-ready, apply it as active in-memory degraded/unsaved work and retain the prior persisted copy until the new workspace is successfully written. |
| **B. Merge into the current workspace  ENOT ADOPTED; OUT OF INITIAL SCOPE** | Would combine imported work with the active workspace while retaining some current content. | Would require Dataset identity/snapshot mismatch, Dimension identity and duplicate handling, Temporary Entity identity, value collision, and divergent Dataset-version semantics. | Merge and partial-merge failure behavior are not designed or adopted. A later proposal requires a separate Human decision. |

The current states that a restore policy distinguishes are:

- **Active Dataset:** the Dataset currently open, which may differ from the
  snapshot embedded in the imported backup and may contain in-memory changes
  since it was opened or last exported as E2R JSON.
- **Active comparison work:** current application-local Dimensions,
  temporary Entities, and values associated with that active Dataset; some
  work may be newer than the browser-local persisted copy.
- **Browser-local persisted copy:** the most recent comparison workspace
  successfully written to browser storage; it may be older than current
  in-memory work.
- **Degraded/unsaved in-memory work:** changes made after the last successful
  browser write, which may be lost if the session ends.
- **Imported backup:** the user-selected workspace artifact and its embedded
  Dataset dependency snapshot; it is a proposed restore source, not yet active.

The selected all-or-nothing boundary applies before activation: if the incoming
workspace cannot be safely prepared for activation, restore has not occurred;
the current active workspace is retained and the pre-restore browser-local
persisted copy is not partially overwritten or damaged. Partial restore is not
a Product behavior.

**Human decision  Eprotect current work before replacement:** when the current
Dataset has changes, comparison work is present, or memory-only degraded /
unsaved work exists, restore requires explicit confirmation that current work
will be lost. The user may cancel or explicitly choose **Discard and Restore**.
A current-workspace backup may be offered as an optional recovery route when
available, but successful backup is not a prerequisite; backup failure does
not prohibit an explicit discard-and-restore choice.

**Human decision  Epersistence failure after activation is ready:** if the
incoming workspace passes read, parse, eligibility, and activation
preparation, but the browser-local persistence write then fails, apply the
restore as the active in-memory workspace and show it as degraded / unsaved.
Do not report saved success; tell the user that reload or browser closure may
lose the memory-only restored workspace. Preserve the pre-restore
browser-local persisted copy until the new restored workspace is successfully
persisted. This outcome is **restore applied, persistence failed**, not an
invalid restore.

Existing Dataset Replacement Safety provides relevant evidence: replacement
is a workspace/document lifecycle operation; modified Dataset content,
pending application work, and recoverable session state are distinct; and
replacement confirmation occurs before current state is replaced. Its D1-D7
rules are accepted for NarrativeLine/LiaisonScape only and do not decide
ParameterPlotter's guard or actions. The accepted Cross-App transfer design
also rejects merge as a transfer shortcut, but that is transfer guidance, not
a ParameterPlotter workspace-restore decision.

**Remaining Human decisions:**

- Exact confirmation warning and interaction, optional backup placement/copy,
  and retry behavior.
- Browser storage technology/API, persistence cadence, and workspace artifact
  format/schema/versioning.
- Whether presentation state is included in backups.
- Exact Dataset Save/Export/exit contract, public shell/hosting, product name,
  release identity, deployment, and Hub listing.

The replacement model, current-work loss guard, and pre-activation plus
post-activation failure outcomes are decided. No runtime implementation is
authorized by this decision record.

The persistence guarantee, self-contained backup with embedded Dataset
snapshot, separation from E2R Dataset Export, and degraded editing after a
browser-storage write failure are decided. Exact serialization, included
presentation state, backup freshness display, import conflict/replacement
behavior, and failure warning/retry presentation remain open or unadopted
as listed below. The later Dimension Assessment Candidate is recorded in its
own decision section.

### Decision 2  EWhich Dataset mutations are allowed, and what happens to references?

The capability direction authorizes Entity edit/delete in principle. Dataset
Entity editing and deletion boundaries are Human-decided as follows:

- **Editable fields: DECIDED  ECandidate A, Core labels only.** Ordinary
  Dataset Entity edits may change `name` and `description`; `id` is immutable;
  other known/unknown fields, Extensions, and unrelated Dataset content must
  be retained. Blank or whitespace-only text removes the optional field, and
  omission of an unchanged field preserves its stored value. Nonblank
  normalization remains open. Extension authoring requires a separate
  decision naming its Extension, version, fields, and need.
- **Delete with incident Relations: DECIDED.** Block Dataset Entity deletion
  while any incident Relation remains; expose enough Relation identity to
  recognize the blockers; do not cascade or leave dangling endpoints; and do
  not offer a targeted LiaisonScape inspect handoff unless exact Relation and
  current-Dataset safety can be established. This is an application-level
  policy, not an E2R-wide rule. Unknown/unsupported Dataset authoring
  eligibility remains under Decision 3 and is not settled by this deletion
  decision.
- **New Entity creation lifecycle: DECIDED  Ecreate Dataset Entities
  directly.** Temporary Entity creation/promotion is outside the normal
  successor workflow. Dimensions, comparison values, selection, placement,
  and view state remain workspace-owned; this decision does not copy them into
  the Dataset. The later Dimension Assessment Candidate separately defines
  portable Dataset Dimensions and explicit Assessments; it does not
  automatically convert existing workspace data. The previous
  conditional-promotion decision is historical under its earlier workflow
  premise; it is not a current creation requirement.

The deletion/reference policy, Dataset Entity edit-field allowlist, and
direct Dataset Entity creation lifecycle are decided. The Candidate B runtime
stores and reloads `tempEntities` through `sessionStorage`; this is historical
runtime evidence, not a successor compatibility requirement. Human
subsequently decided that the successor provides no compatibility guarantee
for Candidate B session-only workspaces and does not migrate, auto-promote,
convert, or restore legacy `tempEntities`. The successor may start new workspace
state; no migration UI, rescue guarantee, or concrete fresh-start mechanism is
adopted. No Temporary Entity promotion is required in the normal workflow.

### Human decision: Validator open / authoring policy  E2026-10-05

The Validator is a read-only diagnostic dependency, not a Product policy
engine. Its `valid` result is false when any diagnostic has severity `error`;
warnings do not make it invalid. Warnings can indicate support limitations,
including unknown Extensions or unsupported versions, and the Validator
preserves unknown payloads without interpreting or repairing them. Therefore
`valid: true` does not prove that ParameterPlotter understands every payload
or that every mutation is safe. The terms *warning*, *unsupported*, and
*invalid* describe different diagnostic facts and should not be collapsed into
one open decision.

Repository evidence:

- Validator `docs/specification-interoperability.md` defines error versus
  warning severity and explicitly describes read-only preservation of unknown
  payloads, declarations, definitions, and fields.
- NarrativeLine and LiaisonScape import flows accept a Dataset when their
  validation result is valid; warning-only data can open, while validation
  errors do not become the editable active Dataset. LiaisonScape's export
  checks diagnostics and blocks on errors while allowing a warning-bearing
  export. These are application precedents, not a binding ParameterPlotter
  contract.
- Current ParameterPlotter has no production Validator dependency. Its
  existing parser performs only limited structural checks, so it supplies no
  evidence for the successor eligibility policy.

Human decided:

- A Dataset with any Validator `error` is not eligible for editable authoring.
- An error-invalid but parseable Dataset may open in a diagnostic read-only
  inspection mode, clearly distinguished from the normal editable workspace.
- Warning-only Datasets are not rejected wholesale. Supported authoring may
  proceed when its safety is established, and warnings remain visible.
- Unsupported / opaque content is governed per operation rather than making
  the entire Dataset mechanically read-only. An operation is allowed only
  when it is shown to preserve the unsupported content and meet the safety
  conditions relevant to that operation. If preservation or eligibility
  cannot be established, disable that operation and use read-only fallback
  where needed.
- Unknown / opaque content must not be repaired, normalized, dropped, or
  rewritten to make an operation eligible.
- Dataset Export revalidates before execution and is blocked by any Validator
  `error`. Warnings remain visible but do not alone block Export. A future
  diagnostic-specific block requires separate Human decision supported by
  evidence of an actual loss risk.

This Validator policy does not itself define Temporary Entity promotion; the
separate promotion policy is Human-decided above. Dataset Entity editable
fields are decided in the preceding decision section. This policy also does
not specify implementation-specific eligibility classifiers or guarantee
that every operation can be proven safe for every opaque payload.

Do not repair, normalize, drop, or rewrite unknown data to make an operation
eligible. The existing E2R Dataset Entity deletion policy and workspace
replacement decisions remain unchanged. This decision preparation does not
authorize Validator integration or runtime changes.

### Decision 4  ESave, Export, and replacement language

The Product distinction is decided; exact labels and flows remain open:

- **Dataset export:** validate and download an E2R JSON file; do not imply the
  browser overwrote the original local file.
- **Workspace save/recovery:** persist or export/import application-owned
  comparison data according to Decision 1; keep the workspace artifact distinct
  from E2R Dataset JSON. The later Dimension Assessment Candidate defines
  separate Dataset-portable Dimension Assessment data; it does not make
  workspace-only state portable.
- **Replacement/exit:** protect both unsaved Dataset changes and unsaved
  comparison work; recovery does not automatically cancel a loss warning.

The existing D1-D7 Dataset Replacement Safety model is a useful design basis:
track Dataset modification, pending application work, and recoverable session
state independently; require successful export before treating a download as
completed; do not let recovery state bypass replacement/exit protection. It
is not adopted wholesale as ParameterPlotter's exact contract. Exact
replacement behavior when one artifact has been exported/backed up but the
other has not remains undecided.

### Decision 5  EPublic shell, hosting, and release identity

**Can wait until the workflows are specified and accepted.** The approved
direction requires an externally usable shell and eventual deployment, but
does not require now choosing:

- exact Home/Header/Footer composition or which locales/examples ship;
- static host or deployment provider, public URL, or base path;
- formal product name, version, or release identity;
- Hub listing (optional ecosystem discovery, not a runtime dependency).

Before deployment, require Human review of shell content and accessibility,
real Dataset import/edit/export/reopen behavior, persistence and failure
behavior, replacement/exit protections, narrow and keyboard use, licensing,
CI deployment boundary, base-path asset loading, and the live revision. No
such deployment checks have been run or accepted by this checkpoint.

## Minimum next Human decision set

The persistence/recovery gate is decided as C above. Whole-workspace
replacement and pre-activation all-or-nothing failure safety are also decided.
The current-work loss guard and post-activation-ready storage-failure outcome
are now Human-decided. Preserve the pre-restore browser-local persisted copy
until the restored workspace is successfully persisted. An optional
current-work backup is not a prerequisite for explicit Discard and Restore.

The Dataset Entity edit-field allowlist and blank handling, and direct Dataset
Entity creation lifecycle, are decided above. The historical Temporary
promotion decision is not a current workflow requirement. The Validator
open/authoring policy is also decided and must not be reopened by this
checkpoint. The accepted Candidate B runtime historically persisted and
reloaded `tempEntities`; Human has decided that successor compatibility and
migration are not guaranteed and that legacy Temporary records are not
migrated, auto-promoted, converted, or restored. Remaining
Product policy gates and their sequencing have not been selected here.
Exact confirmation/backup UX, artifact format, browser storage, cadence/retry,
included presentation state, Dataset Save/Export/exit details, public shell,
hosting, product name, and release identity also remain unresolved. This
checkpoint does not rank or resolve those decisions. Dataset Entity deletion
and persistence/recovery policies are already decided and must not be
reopened.

No single framework, visualization library, fixed directory structure, or
production architecture decision is currently evidenced as a blocker. Apply
the accepted responsibility-based, incremental modularization policy rather
than selecting layout or framework for its own sake.

### Human decision: Dimension Assessment Extension Candidate 0.1.0 - 2026-10-05

Human adopted the **Dimension Assessment Extension** Candidate, identifier
`draft.github.sukoyaka-dopeness.dimension-assessment`, exact version `0.1.0`.
The complete Candidate contract is the authority in
[extensions/dimension-assessment-extension-candidate.md](../../extensions/dimension-assessment-extension-candidate.md).
The Dataset-level payload defines Extension-local stable Dimensions and
explicit Entity Assessments, identified by the (`entityId`, `dimensionId`)
pair and limited to one Assessment per pair. Dimension ranges are finite,
inclusive hard bounds; integer-only Dimensions require an integer within the
range. An absent Assessment is unassessed and zero is an ordinary numeric
value. Optional unit text carries no parsing or conversion semantics, and
endpoint labels are both-or-neither.

The Candidate does not define a general Observation/measurement model,
assessor, timestamp, evidence/provenance, multiple observations, or
arbitrary numeric Entity properties. Normalized values, chart geometry,
selection, and view state remain derived/application-owned. ParameterPlotter's
Human-decided Rescale behavior is an application authoring option, not a
normative mutation algorithm. Dataset/Dimension references and values must
remain valid; dependent Assessments are removed with an allowed parent
Dimension/Entity deletion or the deletion is refused.

This is a Human-adopted Candidate, not a Stable Extension. The repository
schema and focused semantic validation are specification-side checks, not
production E2R Validator support. No application runtime, Dataset
write-back/export flow, cross-consumer interoperability acceptance, or Stable
promotion is established by this decision. Prototype 2 closure and the
historical Candidate B first-slice acceptance are unchanged.

## Separate follow-ups and scope boundary

The Prototype 2 Quadrant resize-then-scroll connector issue and waiting-Entity
plot-click discoverability remain separate follow-ups. No production evidence
in this read-only audit establishes either as a blocker to the newly approved
capability direction. Do not elevate or fix them without a direct workflow
impact and a bounded Human decision.

This checkpoint changes no runtime, tests, Dataset, Core, Extension, schema,
Validator, application behavior, or public service. The 2026-10-05 Human
decisions select the bounded application-level Dataset Entity deletion policy
and comparison-work persistence/recovery policy; implementation remains
unauthorized. This checkpoint does not authorize production implementation,
local storage migration, a technical artifact format, a new portable E2R
model, exact Save/Export or replacement flows, product naming, release,
hosting, deployment, or Hub publication.

## Human decision: Legacy Candidate B Temporary workspace compatibility - 2026-10-05

Human decided that Candidate B's session-only workspace state has no
successor compatibility guarantee. The successor runtime does not migrate
legacy workspaces containing `tempEntities`, and it does not automatically
promote, convert, or restore legacy Temporary Entities. It may start with new
workspace state. No compatibility importer, migration UI, or recovery guarantee
for personally retained Temporary data is adopted.

This decision follows Candidate B's original browser-session lifetime and
absence of durability or recovery guarantees. Temporary Entity creation and
promotion are already outside the normal successor workflow. The earlier
conditional promotion identity/field-copy/all-or-nothing decision remains
historical evidence under its original premise; it is not a legacy migration
requirement. This decision does not select browser storage keys/versioning,
workspace serialization, or a concrete fresh-start implementation, and it
does not change portable data semantics or Dataset mutation policy.

## Historical pre-runtime gate: Dataset and workspace lifecycle protection - 2026-10-05

This section preserves its original decision-preparation state. Human later
selected the Dataset mutation / Export baseline, replacement and exit
protection, and bounded Candidate authoring policies summarized in the
[current implementation checkpoint](#current-successor-implementation-checkpoint-2026-10-05).
Its proposals and “not authorized Ewording below describe that earlier gate,
not current status.

Status: **Decision preparation only; no lifecycle policy is adopted by this
section.** The Dimension Assessment Candidate 0.1.0 is Human-adopted portable
Dataset data. An applied mutation to a Dimension or Assessment changes the
active E2R Dataset, just as an applied Core Entity mutation does. Dataset
Export, browser-local persistence, and ParameterPlotter workspace backup are
distinct operations and recovery claims.

The Cross-App [Dataset Replacement Safety design](../../docs/cross-app/dataset-replacement-safety-design.md)
defines useful concepts (`datasetModified`, `pendingUserWork`, and
`recoverableSessionState`) and export-baseline behavior for NarrativeLine and
LiaisonScape. Its D1-D7 contract is not currently an adopted ParameterPlotter
contract. Reuse of those concepts is a recommendation below, not an assertion
that the applications share one policy. Current application evidence supports
the conceptual separation: NarrativeLine compares the current Dataset with an
accepted baseline in `src/services/DatasetBaselineService.ts`, tracks pending
work separately in `src/services/PendingWorkService.ts`, and refreshes the
baseline only after successful export handoff in `src/App.tsx`. LiaisonScape
derives replacement actions from Dataset modification and pending work in
`src/dataset-replacement-safety.ts`; it likewise keeps Export transition and
pending work separate. These are application precedents, not ParameterPlotter
decisions.

### Human decision 1: Dataset modification and Export baseline

Product boundary already fixed: Export E2R JSON is the portable Dataset
artifact; a workspace backup contains a Dataset dependency snapshot plus
application-owned comparison work and is not an E2R Dataset export. The
Candidate's dimensions and assessments are Dataset content. Presentation
selection and derived chart positions are not Candidate data.

The remaining choice is how to represent Dataset cleanliness and what
successful Export means for the active baseline:

| Choice | Product meaning | Trade-off |
| --- | --- | --- |
| **A. Separate Dataset baseline from workspace recovery (recommended)** | Treat applied Core and Dimension Assessment mutations as `datasetModified`. A successfully generated and handed-off E2R JSON download refreshes the baseline to that Dataset snapshot and clears only `datasetModified`; it does not claim the user retained the file and does not clear separate workspace-only pending work or change browser-persistence/backup status. | Matches Dataset semantics and the Cross-App conceptual precedent while keeping the user's local-file retention outside what the browser can verify. |
| **B. Export does not refresh the baseline** | Keep the Dataset marked modified until another explicit application checkpoint confirms the user's intended baseline. | Avoids interpreting browser download initiation as retention, but needs a separate confirmation mechanism and adds a new Product interaction not otherwise evidenced. |
| **C. One combined saved/unsaved state** | Treat Dataset Export, browser persistence, and workspace backup as interchangeable ways to mark the whole workspace saved. | Simpler status model, but incorrectly implies that E2R JSON contains application-only work or that browser storage is a portable Dataset artifact. |

Recommended classification if A is selected: after an edit is applied to the
active Dataset, Entity, Dimension, and Assessment create/edit/delete all
contribute to `datasetModified`. A draft not yet applied to the Dataset is
separate pending user work. View/selection state is not Dataset modification.
Successful Export clears only the Dataset-dirty part; it cannot export or
commit an unapplied draft. The Validator policy already requires revalidation
before Export, blocking on errors and retaining warnings without blocking on
warning presence alone. The engineering representation need not use these
literal names or booleans.

### Human decision 2: Replacement, exit, and the three recovery states

The existing Workspace Restore decision already requires whole-workspace
replacement, explicit loss confirmation when current work may be lost, Cancel
or Discard and Restore, and all-or-nothing pre-activation failure. A separate
backup is optional. The post-activation storage-write failure outcome is
already decided as active in-memory degraded/unsaved work while retaining the
previous persisted copy. Those decisions are unchanged here. What remains is
the broader Dataset-open/replacement and application-exit contract, including
how browser persistence and either artifact affect protection.

Keep these facts separate:

- **Dataset Export:** a portable E2R Dataset snapshot; not evidence that
  workspace-only work is backed up or that the user retained the download.
- **Browser-local persistence:** an origin/profile recovery copy; not Dataset
  Export or a user-managed backup.
- **Workspace backup:** a user-managed ParameterPlotter artifact with its
  embedded Dataset snapshot and comparison work; not Dataset Export.
- **Current in-memory state:** may contain changes absent from one or more of
  those copies, particularly in degraded/unsaved mode.

The minimum policy choice is how those independent facts guard opening/replacing
a Dataset, restoring a workspace, and leaving/reloading the application:

| Choice | User protection | Trade-off |
| --- | --- | --- |
| **A. Independent loss signals (recommended)** | Protect any active Dataset change or authored work that the requested operation would discard. Successful Dataset Export clears only Dataset modification; successful workspace backup creates a recovery copy but does not mark the E2R Dataset exported; browser persistence is reported separately. Recoverability alone does not silently waive a loss confirmation. Apply the already-decided restore confirmation to Workspace Restore; Human should confirm whether Dataset open/replacement and exit use the same guard principle. | Strongly preserves artifact boundaries and prevents a successful operation on one copy from implying safety for another. May require more than one status/action in a confirmation. |
| **B. Recoverability waives replacement/exit protection** | Permit replacement/exit without the corresponding warning when the current workspace is browser-persisted or has a successful backup. | Reduces interruption, but a browser-local copy is not portable, a backup may be stale, and neither means the current Dataset was exported. Requires explicit freshness and recovery assumptions. |
| **C. Always require explicit confirmation for any changed current workspace** | Any Dataset mutation or comparison-work change triggers the same confirmation regardless of browser persistence, export, or backup; action outcomes remain separate. | Easiest safety rule to explain, but may warn even when the requested operation would preserve the work or when a verified recovery copy exists. |

Under recommended A, the following cases remain distinct rather than collapsing
to one “saved Eflag: E2R export succeeds while workspace-only drafts/state
remain; workspace backup succeeds while the active Dataset has changes not
exported as E2R JSON; browser persistence succeeds while no user-managed backup
exists; and browser persistence fails while active memory contains the only
copy. Whether a successful browser-persisted state suppresses an ordinary-exit
warning, and whether Dataset replacement uses the same explicit-loss action
set already selected for Workspace Restore, are Human decisions—not inferred
from the Cross-App design.

### Backup scope and implementation discretion

Already decided: a workspace backup is self-contained for restoring its
Dataset dependency snapshot together with associated comparison work. The
Dimension Assessment Candidate makes authored Dimensions and Assessments part
of that Dataset snapshot; it does not convert selection, placement, chart
geometry, or other view state into portable E2R data. Exact inclusion of view,
selection, active-view, ordering, and transient interaction state in the
workspace artifact remains open. It can be deferred from a minimum authored-
data recovery slice if that omission is made explicit; promising exact visual
session restoration would require a separate Product decision. The adopted
minimum already includes the Dataset snapshot carrying portable Dimensions
and Assessments plus the associated comparison work. It does not imply a
backup of every transient view or browser state.

### Candidate authoring and runtime authorization  Ehistorical preparation

Human subsequently selected bounded Candidate authoring and authorized the
first successor implementation. The original comparison and authorization
boundary below remain historical preparation evidence.

Human adoption of Candidate 0.1.0 establishes the portable data contract; it
does not establish production Validator integration or authorize a
ParameterPlotter runtime implementation. The Candidate itself requires
separate implementation and interoperability evidence. Whether ordinary
successor workflows should author that Candidate is therefore an explicit
implementation-scope gate, even though the portable semantics are decided.

| Choice | Initial successor responsibility | Trade-off |
| --- | --- | --- |
| **A. Bounded Candidate authoring (recommended for a comparison product)** | Author Dimensions and Entity Assessments using Candidate 0.1.0; treat applied mutations as Dataset changes, enforce the adopted Validator/preservation policy, and provide validated Dataset Export. | Completes the selected comparison task with portable authored data, but requires production Validator support and careful opaque-data preservation. It does not imply Stable registration or broader portable semantics. |
| **B. Candidate consumption only** | Open, inspect, and compare existing Candidate data; defer creating/editing/deleting Dimensions and Assessments. | Reduces initial mutation risk but leaves the product unable to author its central portable comparison data until a later Human decision. |

Neither Candidate adoption nor prior application-local Prototype evidence is
runtime implementation authorization. Human must authorize the bounded
successor implementation scope before source changes begin. Under A, no new
semantic rule is needed for Dimension/Assessment payload shape, hard bounds,
references, Rescale, or Validator errors/warnings; the remaining lifecycle
choices are the two decisions above. Under B, the product must still decide
whether read-only inspection is part of the initial runtime scope before that
work begins.

Once the two lifecycle policies above are selected, these are engineering
choices rather than Human gates unless implementation evidence exposes a new
user-visible trade-off: storage APIs and keys, serialization mechanics,
internal module boundaries, literal dirty-flag representation, retry timing
within the already-decided degraded state, and implementation of a validated
download handoff. No choice of API or module layout can change which artifact
is portable, what it contains by Product promise, or which data-loss cases
must be disclosed.

No decision in this preparation authorizes runtime work. Before a lifecycle-
complete successor implementation, Human must decide the Dataset dirty/Export
baseline, the Dataset replacement/exit protection policy, and whether the
first authorized slice includes Candidate authoring or only Candidate
consumption. Exact view-state backup is not a blocker if initial recovery is
explicitly limited to the Dataset and associated comparison work; it requires
a separate decision only if exact visual-session restoration is promised.
Candidate B and Prototype 2 historical boundaries remain unchanged.

## Initial successor implementation checkpoint - 2026-10-05 (historical status)

Human has selected the Candidate authoring scope and Dataset/workspace
lifecycle policies described in the preceding historical preparation. The
first bounded successor implementation is now in progress locally in
`e2r-parameter-plotter` and `e2r-validator`; the changes are uncommitted and
unpublished, and have not received successor Human acceptance. Supporting
implementation and verification details are in the
[implementation result](parameterplotter-successor-first-bounded-implementation-result-2026-10-05.md).

The local implementation writes Dimension Assessment Candidate `0.1.0` data
to the Dataset, uses local production Validator support, and separates applied
Dataset mutations, unapplied drafts, transient presentation state, E2R Dataset
Export baseline, browser-local persistence, and user-managed Workspace Backup.
It includes direct Dataset Entity CRUD, Dimension/Assessment authoring,
reviewed Rescale, diagnostic read-only handling for Validator errors,
validated Export, whole-workspace backup/restore, replacement/exit loss
protection, and visible degraded/unsaved handling. It does not migrate legacy
Candidate B Temporary workspace state. At that checkpoint, Candidate Stable
registration, cross-consumer interoperability acceptance, Human acceptance,
release, and deployment remained separate. The later local functional
acceptance is recorded below.

## Successor functional Human Acceptance - 2026-10-06

**HUMAN-ACCEPTED / FUNCTIONALLY CLOSED FOR THE TESTED LOCAL WORKTREE.** Human
and Codex real-browser evidence covers Dataset replacement and loss
protection, Dataset Export baseline and reopen, workspace persistence and
backup/restore, Entity and Candidate authoring, numeric and range validation,
reviewed Rescale, warning-only opaque Extension preservation, and diagnostic
read-only handling for Validator errors. Human also confirmed pending-draft
Reload protection in Edge: Cancel retained the draft; continuing Reload
discarded only the draft and restored the saved clean workspace. The detailed
case matrix and exact evidence classifications are in the
[successor functional acceptance record](../../../e2r-parameter-plotter/docs/successor-human-acceptance-2026-10-06.md).

Final Gate passed: ParameterPlotter syntax and 46/46 tests, Validator 136/136
tests, e2r-spec validation including 13 Candidate cases, vendored Validator
synchronization, and `git diff --check`. Browser-local storage failure
injection was not run in a live browser; its degraded-state and previous-copy
preservation behavior is covered by automated tests and remains an explicit
evidence limitation. No unresolved functional FAIL remains in the accepted
scope. The tested ParameterPlotter source is fixed at local commit
`b9a8e1fee6499c191c66033296e98965d777684e`; its acceptance record is fixed in
local ParameterPlotter documentation commit
`be8a08dcdc5ff18c63ca4951e89b0a7178db0caf`. Current verified local source
`623b73b77d055be7f38d8d87ba109e7c8947c0a3` includes the post-acceptance copy
and endpoint-label presentation corrections; it does not alter the accepted
source baseline. A Codex 390px review of all four views passed as follow-up
evidence, without changing Human acceptance. Latest status documentation is
local commit `dd3c03bafdd74cc9b0e358eb7d36a9afd10f5d09`. Browser-storage
failure injection remains NOT RUN, and the successor source/docs remain
unpublished.
This status does not make Candidate `0.1.0` Stable and does not
authorize release, tag, deployment, Pages, or Hub publication. Cross-consumer
interoperability and Stable review remain separate gates.

## Product / UI completion audit - 2026-10-07

The local implementation checkpoint `111be04898f354efe92856dfdd355ca89845fa59` groups Open E2R Dataset, Workspace Restore, E2R JSON Export, and Workspace Backup under a non-primary More disclosure while preserving the three separate artifact/lifecycle responsibilities. This is post-Acceptance correction only; functional Human Acceptance remains fixed at `b9a8e1fee6499c191c66033296e98965d777684e`. The audit and its 54-test validation are recorded in [ParameterPlotter documentation](../../../e2r-parameter-plotter/docs/product-ui-completion-audit-2026-10-07.md) and local documentation commit `e6733aad51cd083e54329a6d59a9de5f364186d3`. The More disclosure has desktop-sized Edge evidence only; the previous 390px view audit does not cover it. Home/startup responsibilities, EN/JA scope and terminology, sample content/provenance, Footer/Credits and identity, and Dataset-title authoring remain open. The successor source is unpublished; no push, release, or deployment is authorized by this audit.
