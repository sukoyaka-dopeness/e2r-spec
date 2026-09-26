# LiaisonScape Presentation / Relation Display Reconciliation Result

Date: 2026-09-24

Status: **ROADMAP RECONCILED TO AVAILABLE EVIDENCE; NO NEW PRODUCT ACCEPTANCE CLAIM**

## Scope and authority

This bounded reconciliation covers the Relation Detail presentation decisions,
the Dataset-contained Presentation Draft and schema, LiaisonScape's
`arrowDisplay` / `lineStyle` implementation checkpoints, and target-only
Presentation cleanup on explicit Relation deletion. It does not change any
design, schema, implementation, or acceptance decision.

Authority remains separated by responsibility:

- Accepted design choices and their chronology: [Relation Direction and Arrow
  Appearance research](../../research/exploratory/relation-direction-and-arrow-appearance.md).
- Current candidate contract: [LiaisonScape Presentation Extension Draft](../../extensions/presentation-extension-draft.md).
- Structural payload validation: [Presentation Draft schema](../../schemas/extensions/presentation-draft.schema.json)
  and `npm run validate:presentation-draft`.
- Validator implementation evidence: [Production Validator integration
  result](../validator/production-validator-extension-integration-result.md) and
  [acceptance](../validator/production-validator-extension-integration-acceptance.md).
- Relation-deletion lifecycle disposition: [Presentation cleanup result](liaisonscape-presentation-relation-deletion-cleanup-result.md).
- Current planning entry point: [Roadmap](../roadmap.md), which remains the sole
  current-planning authority.

The Draft remains a Draft candidate, not a Stable Extension. Application
implementation does not promote it, broaden its contract, or change E2R
authority.

## Reconciled status by dimension

| Dimension | Evidence and bounded status |
| --- | --- |
| Human-selected design | The linked research records accepted Presentation-only directionality, the narrowed `Arrow display` label and information order, Presentation ownership, and independent line-style meaning. These are design decisions, not evidence of runtime acceptance. |
| Serialization and schema | The E2R Draft defines the `0.1.0` candidate, Relation-ID map, `arrowDisplay` and `lineStyle`, defaults, preservation, and lifecycle contract. The machine-readable schema includes both fields. The Extension remains non-Stable. |
| Validator | Separate E2R result/acceptance records cover production Validator handling. This does not establish LiaisonScape UI acceptance. |
| LiaisonScape implementation | The sibling repository history at HEAD `8c53cb8` contains committed checkpoints: `367236f` reader/writer; `76f8d32` Arrow display UI; `d717552` line-style reader/writer and UI; and `d74b176` target-only deletion cleanup. Their commits include corresponding tests. This establishes committed implementation and test additions, not a fresh test run in this reconciliation. |
| Human acceptance of the runtime feature | No standalone Human runtime-feature acceptance record was identified in the checked authorities. This result does not infer one from implementation, tests, or sample usage. |
| Roadmap checkpoint | The stale “runtime remains future” sequencing statements are superseded as planning snapshots by the committed implementation evidence. This documentation reconciliation records implementation status only; it does not claim a new application acceptance checkpoint. |

## Working-tree and verification limits

The sibling repository was inspected read-only. At inspection it had existing
modified and untracked files, including changes in `src/App.tsx`, localization,
styles, and tests. Those working-tree changes were not used to establish the
committed feature status and were not modified. The dedicated
`presentation-extension.test.ts` and `src/presentation-extension.ts` were not
listed as dirty. No LiaisonScape tests, lint, build, or browser run was started
by this checkpoint; test additions in the feature commits are evidence of
coverage being authored, not of a test run here.

The Presentation headings in `docs/roadmap.md` retain their identities and
anchors. This result is linked from each compressed checkpoint. No links or
anchors were redirected, and no application, schema, Validator, test, or
sample file was changed.

## Disposition

Roadmap detail for these completed decision/schema/implementation stages is
compressed to authority pointers. Current planning must continue to distinguish
accepted design from committed implementation and from Human runtime
acceptance. The latter remains unclaimed unless a dedicated authority records
it. The Presentation Draft remains non-Stable; no product adoption, schema
change, or further implementation authorization is created here.
