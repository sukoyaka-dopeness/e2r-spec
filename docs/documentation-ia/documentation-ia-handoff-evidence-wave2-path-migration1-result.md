# Capability / Dataset Handoff Evidence Wave 2 Path Migration Result

- Date: 2026-09-26
- Status: COMPLETE — BOUNDED PATH MIGRATION
- Scope: The Human-approved 13-document Wave 2A manifest only; path placement
  and reference repair. No runtime work or status reconciliation.
- Authority: Each moved document remains its own design, implementation,
  acceptance, or result authority. This record documents the path migration.
- Related records: [Wave 2 preparation](documentation-ia-application-workstream-foldering-wave2-preparation1.md),
  [Documentation Plan](documentation-plan.md), [Documentation Hub](../README.md).

## Result

All 13 approved documents were moved in one migration wave to their
responsibility landing zones. Their document content, checkpoint status,
authority, scope, and ownership were not consolidated or reconciled. The
folders provide physical navigation only.

### Cross-App-owned — 5 documents

| Previous path | Current path |
| --- | --- |
| `docs/cross-app-capability-handoff-discovery-audit.md` | `docs/cross-app/cross-app-capability-handoff-discovery-audit.md` |
| `docs/cross-app-capability-handoff-implementation-readiness.md` | `docs/cross-app/cross-app-capability-handoff-implementation-readiness.md` |
| `docs/cross-app-capability-handoff-nl-ls-real-edge-acceptance.md` | `docs/cross-app/cross-app-capability-handoff-nl-ls-real-edge-acceptance.md` |
| `docs/cross-app-capability-handoff-public-deployment-parity-readiness.md` | `docs/cross-app/cross-app-capability-handoff-public-deployment-parity-readiness.md` |
| `docs/cross-app-capability-handoff-public-nl-ls-acceptance.md` | `docs/cross-app/cross-app-capability-handoff-public-nl-ls-acceptance.md` |

The records retain their distinct audit/readiness, current-source acceptance,
public-parity, and public NL-to-LS acceptance statements. In particular,
public deployment parity remains a separate status from current-source and
public E2E acceptance; this move creates no new authorization.

### NarrativeLine-owned — 5 documents

| Previous path | Current path |
| --- | --- |
| `docs/narrativeline-dataset-handoff-nl-h1a-startup-acquisition-acceptance.md` | `docs/narrativeline/narrativeline-dataset-handoff-nl-h1a-startup-acquisition-acceptance.md` |
| `docs/narrativeline-dataset-handoff-nl-h1b-fragment-lifecycle-acceptance.md` | `docs/narrativeline/narrativeline-dataset-handoff-nl-h1b-fragment-lifecycle-acceptance.md` |
| `docs/narrativeline-dataset-handoff-v0-formal-completion-acceptance.md` | `docs/narrativeline/narrativeline-dataset-handoff-v0-formal-completion-acceptance.md` |
| `docs/narrativeline-capability-handoff-sender-implementation.md` | `docs/narrativeline/narrativeline-capability-handoff-sender-implementation.md` |
| `docs/narrativeline-capability-handoff-sender-runtime-implementation.md` | `docs/narrativeline/narrativeline-capability-handoff-sender-runtime-implementation.md` |

The H1A/H1B acceptances, bounded Dataset Handoff v0 completion, earlier
`BLOCKED / NO RUNTIME CHANGE` sender checkpoint, and later automated-green /
partial-smoke runtime evidence remain separate records. The later checkpoint
does not rewrite the earlier one or establish broader public acceptance.

### LiaisonScape-owned — 3 documents

| Previous path | Current path |
| --- | --- |
| `docs/dataset-handoff-v0-liaison-scape-implementation-result.md` | `docs/liaisonscape/dataset-handoff-v0-liaison-scape-implementation-result.md` |
| `docs/liaisonscape-capability-handoff-relation-inspect-implementation.md` | `docs/liaisonscape/liaisonscape-capability-handoff-relation-inspect-implementation.md` |
| `docs/liaisonscape-capability-handoff-relation-delete-intent-implementation.md` | `docs/liaisonscape/liaisonscape-capability-handoff-relation-delete-intent-implementation.md` |

Dataset Handoff v0, Relation inspect, and Relation delete intent remain
separate recipient capabilities. Delete intent remains non-destructive intent
to reach a user-facing surface, not deletion execution or general deletion
acceptance.

## Reference and navigation repair

The current e2r-spec Markdown and session references were rescanned against
the exact 13-file manifest. Repairs were limited to links and plain path
citations made stale by the new locations, including references in:

- the existing four-document Cross-App design-contract packet and sender
  authorization record;
- the moved Cross-App and application-owned Handoff records;
- the broad `docs/roadmap-history/release-and-cross-app-chronology.md`;
- the root Dataset Handoff design and Dataset Replacement Safety result;
- the Hub Public Entry IA and the separate NarrativeLine presentation
  follow-up; and
- session records 0045 and 0052.

Relative links from the moved Cross-App discovery audit to sibling-repository
source files were adjusted for the added directory depth. No sibling
repository was edited. A repository scan found no direct candidate-document
basename references in the NarrativeLine, LiaisonScape, or Validator
workspaces. NarrativeLine and LiaisonScape remain dirty worktrees and were
left untouched. This scan does not assert the absence of external deep links.

The Documentation Hub, Documentation Plan, and Wave 2 preparation navigation
now point to this result. The preparation remains the original candidate
manifest; this result records the later execution disposition.

## Preserved exclusions and authority boundaries

The root `docs/cross-app/dataset-handoff-v0-design.md`, LiaisonScape public-recipient
deployment result, NarrativeLine Relation blocker presentation follow-up,
Locale, Cross-App Relation Deletion, release/provenance material, and Validator
0.4.0 candidate were not moved. Wave 2B was not performed.

No Roadmap content or planning status changed. No specification, schema,
runtime, application, sample, test, sibling repository, or `work/` content was
changed. No push, deploy, tag, release, publication, or external write was
performed.
