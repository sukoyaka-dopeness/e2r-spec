# LiaisonScape Capability Handoff Relation Delete Intent Implementation

**Checkpoint:** `XAPP-CAPABILITY-HANDOFF7-LS-RECIPIENT-DELETE-INTENT1`

## Status

**IMPLEMENTED / AUTOMATED GREEN / BOUNDED BROWSER SMOKE PASS**

This is recipient-side compatibility for the accepted `relation.delete` intent.
It is not full Cross-App Capability Handoff acceptance and does not reopen the
closed Cross-App Relation deletion capability.

## Scope

LiaisonScape accepts the targeted Dataset Handoff fields already defined by the
target and URL/transport contracts, resolves the exact Relation, and opens the
existing Relation Detail surface. The existing explicit Delete action remains
available to the user. No sender, Hub, capability table, schema, or transfer
behavior is changed.

## Accepted contract authority

The implementation follows:

- [Cross-App Capability Handoff Target Contract](cross-app-capability-handoff-target-contract.md);
- [Cross-App Capability Handoff URL/Transport Contract](cross-app-capability-handoff-url-transport-contract.md);
- [Cross-App Capability Handoff Current Dataset Transfer Design](cross-app-capability-handoff-current-dataset-transfer-design.md);
- [Cross-App Capability Handoff Implementation Readiness](cross-app-capability-handoff-implementation-readiness.md);
- [LiaisonScape Capability Handoff Relation Inspect Implementation](liaisonscape-capability-handoff-relation-inspect-implementation.md); and
- [Cross-App Relation Deletion Capability Closure](cross-app-relation-deletion-capability-closure.md).

## Runtime revision

LiaisonScape commit `95a8c56` (`feat: receive Relation delete Handoff intent`).

## relation.delete semantics

`relation.delete` is an intent to reach a safe Relation recognition and deletion
surface. It is not a delete command. The recipient sequence is unchanged:
parse, acquire, validate and accept the Dataset, resolve the canonical target,
check the optional type hint, check capability support, land on Relation Detail,
and wait for user interaction.

The pure recipient capability boundary now explicitly supports exactly
`relation.inspect` and `relation.delete`. Unknown capability values remain
unsupported and do not silently fall back to inspection.

## relation.inspect prerequisite

The accepted contract requires safe inspection/presentation before deletion.
LiaisonScape fulfills that prerequisite by landing both `relation.inspect` and
`relation.delete` on the same existing Relation Detail surface. The primary
capability remains `relation.delete`; the implementation does not add a
separate prerequisite URL parameter or rewrite the transport token.

## Safe Relation Detail landing

The existing Dataset Handoff v0 acquisition and targeted parser are reused. A
valid target is resolved by exact canonical `targetObjectId`; an optional
`targetObjectType=Relation` is checked as a consistency hint. The existing
Relation Detail presents the target's endpoints, name, description, and
technical Object ID, including the existing handling for graph-hidden Relations.

## Explicit deletion boundary

Receiving the Handoff does not open Delete Confirmation, arm a destructive
state, click or submit the Delete control, inject keyboard events, or mutate the
Dataset. The existing Relation deletion workflow is entered only after the user
explicitly activates the existing Delete action; its existing Confirmation,
Cancel, focus restoration, and Dataset update behavior are reused unchanged.

## Focus safety

No new autofocus was added. The targeted landing does not focus the destructive
Delete action. Existing safe focus behavior remains owned by the existing
dialog and deletion components after the user explicitly starts that workflow.

## Dataset mutation safety

The Handoff intent is runtime transport state only. It is not written into the
Dataset Core, Extensions, Relation object, or metadata. Landing leaves Entity,
Event, and Relation counts, target identity, unknown Extensions, and the
Dataset-modified state unchanged. Reload does not restore a pending Delete
Confirmation or destructive arming state.

## v0 / inspect regression

Ordinary `datasetUrl`-only Handoff parsing and startup behavior remain intact.
The existing `relation.inspect` exact-target landing test remains green. The
existing resolver tests continue to cover duplicate-name exact identity and a
graph-hidden/Event-related Relation without selecting a substitute.

## Failure handling

Missing targets and type mismatches use the existing non-destructive targeted
failure path: no Relation Detail landing, no Delete workflow, and no mutation.
Malformed targeted fields, unsupported target-contract versions, and unknown
capability tokens remain parser failures; they do not fall back to either
`relation.inspect` or `relation.delete`.

## Tests

The LiaisonScape full gate passed with **225 tests**, lint, build, and
`git diff --check`. Focused coverage includes:

- explicit support for `relation.inspect` and `relation.delete`, with an
  unknown capability rejected;
- valid targeted `relation.delete` landing on the exact Relation Detail;
- no Relation or Entity confirmation on landing;
- Delete control present but not initially focused;
- explicit user Delete opening the existing Relation Confirmation; and
- preservation of the existing targeted parser and v0/inspect tests.

The test environment emitted the pre-existing WebSocket port `24678` warning;
all tests passed.

## Edge smoke

A dedicated Edge/CDP session used the public Lighthouse Dataset URL and target
Relation `clara-thomas-supervises` with `targetObjectType=Relation`,
`requiredCapability=relation.delete`, and `locale=ja`.

Programmatic DOM/CDP evidence showed:

- exact Relation Detail opened and Object ID matched;
- the graph remained `10 エンティティ · 12 つながり`;
- Relation and Entity confirmations were absent on landing;
- Delete existed but was not the active element;
- native dialog state was verified `closed` after the explicit helper probe;
- explicit Delete opened the existing Relation Confirmation, with the target
  Relation still represented in the graph;
- Cancel closed Confirmation without deleting the Relation; and
- reload restored the Detail without Confirmation. Back returned to Home and
  Forward restored the targeted Detail without a navigation loop.

The earlier bounded Edge smoke for `relation.inspect` remains the regression
evidence for that capability. This is DOM/CDP and native-dialog evidence, not
formal visual Cross-App acceptance.

## Explicit exclusions

This checkpoint does not change:

- NarrativeLine sender behavior;
- LiaisonScape sender behavior or a first-party capability table;
- Hub routing, discovery, registry, or third-party discovery;
- modified/local Dataset transfer or Export-to-Open behavior;
- Relation Detail, Relation deletion workflow, CSS, i18n, EntityService, or
  RelationService semantics;
- Core, Extension, Dataset, schema, or Validator behavior;
- endpoint-separator mojibake or dialog-spacing presentation findings; or
- Cross-App Formal Acceptance.

## Next bounded step

The next bounded step is NarrativeLine sender-side implementation: use the
existing accepted current-Dataset/source-URL safety boundary to construct a
targeted Handoff for an explicit sender action. It must preserve the recipient
boundary established here and must not auto-delete, auto-confirm, or bypass
recipient verification.

## Knowledge Candidate Check

No new `ai-knowledge` entry is created. The accepted contract and existing
application-boundary guidance are sufficient evidence for this implementation
record. The pre-existing dirty CDP diagnostic playbook remains untouched.
