# LiaisonScape Capability Handoff Relation Inspect Implementation

**Checkpoint:** `XAPP-CAPABILITY-HANDOFF6-LS-RECIPIENT-INSPECT1`

**Date:** 2026-08-28

**Status:** **IMPLEMENTED / AUTOMATED GREEN / BOUNDED BROWSER SMOKE PASS**

**Runtime revision:** LiaisonScape `0f7fe1c` (`feat: receive Relation inspect Handoff`)

This record covers the first recipient-only implementation slice from the
accepted Capability Handoff contracts. It adds targeted `relation.inspect`
receipt to LiaisonScape and leaves sender behavior, capability publication,
deletion intent, and the E2R specification model unchanged.

## Scope

Implemented:

- targeted flat-fragment parsing beside the existing Dataset Handoff v0 path;
- strict controlled-field validation and explicit parse results;
- reuse of existing HTTPS Dataset acquisition and validation;
- exact canonical Relation ID resolution, including graph-hidden Relations;
- optional exact `targetObjectType` checking;
- recipient-side support for `relation.inspect` only;
- safe landing on the existing Relation Detail surface;
- non-destructive targeted failure messages in EN and JA; and
- focused parser, resolver, and production App integration tests.

Not implemented:

- `relation.delete` Handoff behavior;
- opening Delete Confirmation from Handoff;
- Relation or Entity mutation from Handoff;
- NarrativeLine sender behavior;
- LiaisonScape sender behavior;
- a capability table or registry;
- Hub changes;
- modified/local Dataset transfer automation;
- Export/Open workflow changes;
- third-party discovery or network registration;
- Core, Extension, Dataset schema, or Validator changes;
- endpoint-separator mojibake correction; or
- dialog-spacing correction.

## Accepted contract authority

The implementation is bounded by:

- [Cross-App Capability Handoff Discovery Audit](cross-app-capability-handoff-discovery-audit.md);
- [Cross-App Capability Handoff Target Contract](cross-app-capability-handoff-target-contract.md);
- [Cross-App Capability Handoff URL/Transport Contract](cross-app-capability-handoff-url-transport-contract.md);
- [Cross-App Capability Handoff Current Dataset Transfer Design](cross-app-capability-handoff-current-dataset-transfer-design.md); and
- [Cross-App Capability Handoff Implementation Readiness](cross-app-capability-handoff-implementation-readiness.md).

The accepted transport is a flat fragment containing the existing HTTPS
`datasetUrl`, canonical full `targetObjectId`, optional exact-case
`targetObjectType`, `requiredCapability`, and `targetContractVersion=1`.
Handoff remains intent rather than a command. Targeted processing is startup
only, and successful or failed targeted metadata remains inspectable in the
URL until an explicit local/sample/new replacement clears it.

The Handoff3 wording about safe automatic navigation is satisfied here as
non-destructive navigation to a recognizable Relation Detail surface. It does
not authorize automatic deletion, confirmation, focus of a dangerous action,
or any other mutation.

## Runtime revision

The runtime implementation is committed at LiaisonScape `0f7fe1c`. The
pre-change baseline was `34d8164` with 216 passing tests. The implementation
revision has 223 passing tests.

## Architecture and responsibility boundary

The change follows the accepted responsibility-based modularization decision:

| Responsibility | Owner | Implementation result |
| --- | --- | --- |
| Fragment transport and controlled-field validation | `src/dataset-handoff.ts` | Added targeted parse result while preserving the v0 parser. |
| Canonical target resolution | `src/capability-handoff.ts` | Added a pure exact Relation resolver. |
| Dataset acquisition and validation | Existing `App.tsx` and `services/DatasetService.ts` | Reused without a second fetch or Dataset parser. |
| Startup orchestration | `App.tsx` | Processes one startup intent and stages post-acceptance landing. |
| Relation Detail presentation | Existing workflow and `RelationDetailDialog.tsx` | Reused without a new Handoff-specific dialog. |
| Capability check | `App.tsx` recipient branch | `relation.inspect` is the only fulfilled capability. |
| User-facing failure copy | `src/i18n.ts` | Added localized targeted failure messages. |

The root component remains the lifecycle composition point. Parsing and
resolution do not become inline URL or Dataset mutation logic. The landing
effect waits for the exact accepted Dataset object before calling the existing
`openRelationDetail` workflow, so a staged replacement cannot open a target
against the old Dataset.

## Parser implementation

`parseTargetedDatasetHandoffFragment` distinguishes:

1. no Handoff;
2. ordinary v0 Dataset Handoff;
3. valid targeted Handoff; and
4. structurally invalid targeted Handoff.

Controlled values are decoded exactly once. Controlled-field duplicates,
malformed percent encoding, missing required values, unsupported target types,
unsupported capabilities, and invalid target contract versions fail explicitly.
The parser accepts the transport vocabulary `relation.inspect` and
`relation.delete`; only the former is fulfilled by this checkpoint.

The existing `parseDatasetHandoffFragment` behavior remains available and is
used for ordinary fragments without targeted fields. Existing v0 URL tests
remain green. Unknown auxiliary fields are not converted into capability
metadata or application actions.

## Dataset Handoff v0 compatibility

An ordinary fragment containing only `datasetUrl` continues through the
existing HTTPS validation, credential omission, fetch, JSON parse, Dataset
validation, replacement, and startup behavior. Target fields are not
injected into the old v0 result.

The recipient does not add a second acquisition path. Target resolution starts
only after `loadDataset` has accepted the fetched Dataset. Acquisition or
Dataset validation failure prevents target resolution, Relation Detail
opening, and mutation.

When a user explicitly accepts a local, sample, new, or file-open replacement,
`clearDatasetHandoffFragment` removes `datasetUrl` and all targeted fields in
one existing `replaceState` operation while preserving unrelated fields such as
`locale`. A successful or failed Handoff itself leaves its metadata in the
current URL, as required by the accepted transport contract.

## Relation resolution

`resolveRelationTarget` searches the accepted Dataset by the canonical full ID
and never uses a name, short ID, prefix, endpoint label, graph visibility, or
array position. It can resolve a Relation connected to an Event even when that
Relation is hidden from the Entity graph.

The optional type hint must match the actual Dataset-wide object type. A
Relation capability request whose ID resolves to an Entity or Event is also a
target-type mismatch, even when the optional hint is absent. Missing targets
and type mismatches do not select a substitute Object and do not mutate the
Dataset.

## `relation.inspect` landing

After a valid Dataset, exact Relation, matching type, and supported capability
are confirmed, LiaisonScape lands on the existing `RelationDetailDialog`.
The Relation ID, name, and endpoint presentation therefore use existing
recognition semantics. No new target-specific presentation surface or CSS was
introduced.

The landing is inspect-only:

- no Relation mutation;
- no Entity mutation;
- no Dataset mutation;
- no Entity deletion-resolution flow;
- no `relation.delete` action;
- no Delete Confirmation opening; and
- no dangerous Delete-button autofocus.

The existing Detail controls remain available for ordinary explicit user
interaction after landing. This checkpoint does not change their existing
edit/delete semantics.

## Failure handling

Targeted failures are non-destructive and remain separate from ordinary v0
acquisition failures:

| Condition | Result |
| --- | --- |
| malformed or incomplete targeted metadata | targeted invalid result and no target action |
| missing or invalid Dataset URL | existing v0 Handoff failure |
| Dataset fetch, JSON, or validation failure | existing acquisition/open failure |
| missing Relation ID in accepted Dataset | localized target-not-found message; Dataset may remain available |
| type mismatch | localized target-type-mismatch message; no Detail landing |
| `relation.delete` request | localized unsupported-capability message; no delete flow |
| unknown capability | targeted parser failure; no silent downgrade |

The UI does not collapse target parsing, acquisition, target resolution, and
capability failure into a success-like ordinary opening. A valid Dataset may
become the active workspace while the target-specific failure is reported;
the requested capability is never claimed as fulfilled.

## Destructive-action safety

The URL is never interpreted as an imperative deletion command. The existing
Relation Detail Delete control remains behind the existing explicit action and
confirmation workflow. `relation.delete` is intentionally not supported by
this runtime revision, so it cannot silently downgrade to inspect and cannot
open a destructive surface.

No Dataset, Relation, Entity, Event, Extension, draft, baseline, or pending
work state is changed by successful `relation.inspect` receipt. The only
state transition is presentation selection after Dataset acceptance.

## Locale and History boundary

Target IDs, type tokens, capability tokens, and version metadata remain
locale-independent. The parser ignores locale for target meaning and keeps
unrelated locale fragment data intact. Existing locale startup/selection
ownership is unchanged; this checkpoint does not add locale-fragment
consumption.

Target processing is startup-only. No `hashchange` listener or second History
router was added. Existing application Back/Forward state does not refetch or
re-resolve a target. Reload is a new startup and may process the retained URL
again. No cleanup-only history entry is created.

## Tests

The runtime revision adds:

- targeted parser coverage for ordinary v0 compatibility, Unicode and
  reserved-character IDs, malformed encoding, duplicates, missing fields,
  unsupported types/capabilities, version handling, and cleanup;
- pure resolver coverage for exact IDs, graph-hidden Relations, missing targets,
  type mismatch, duplicate names, and opaque Extension preservation; and
- production App integration coverage for Dataset acquisition, exact Relation
  Detail landing, locale-fragment coexistence, and absence of delete
  confirmations.

The full LiaisonScape gate passed:

```text
npm test       223 passed / 0 failed
npm run lint   PASS
npm run build  PASS
git diff --check PASS
```

The test run emitted the pre-existing `WebSocket server error: Port 24678 is
already in use` diagnostic from the existing test environment, but all 223
tests passed.

## Browser smoke

After the automated gates, a dedicated Edge session used the deployed HTTPS
public Lighthouse Dataset URL and targeted Relation
`clara-thomas-supervises` with `targetObjectType=Relation` and
`requiredCapability=relation.inspect`.

Observed programmatic evidence:

- the Dataset loaded through the existing v0 fetch path;
- the exact Relation Detail surface opened;
- the technical Object ID was `clara-thomas-supervises`;
- no Relation or Entity confirmation dialog was present;
- the target and Dataset fragment remained in the URL; and
- the active element was `BODY`, not a destructive control.

The stabilized CDP helper initially reports native-dialog state `unknown`.
After its explicit no-dialog probe, state was `closed` and
`visualManualAllowed` was `true`. This is bounded implementation-checkpoint
evidence, not formal cross-app acceptance. No delete behavior, sender
behavior, or full Real Edge matrix was run here.

## Explicit exclusions

This checkpoint does not reopen or change:

- Cross-App Relation deletion closure;
- the static capability table decision;
- NarrativeLine or Hub source;
- current Dataset modified/local Export/Open behavior;
- capability discovery, registry, or third-party routing;
- Core, Extensions, schemas, or Validator;
- endpoint-separator mojibake; or
- generic dialog-spacing findings.

## Next bounded step

The next bounded checkpoint is `XAPP-CAPABILITY-HANDOFF7-LS-DELETE-INTENT1`:
evaluate whether `relation.delete` can land on the same safe Relation Detail
surface while keeping Delete Confirmation closed, requiring explicit user
action, and preserving all existing mutation safeguards. That checkpoint must
not be conflated with sender implementation, capability-table publication, or
full Cross-App acceptance.

## Knowledge Candidate Check

No new `ai-knowledge` entry is created. This is one repository's implementation
evidence for accepted Handoff, Dataset safety, History, application boundary,
and modularization decisions. The existing dirty CDP playbook remains
untouched.
