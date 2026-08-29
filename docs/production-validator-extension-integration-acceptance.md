# Production Validator Extension Integration Acceptance

- Date: 2026-08-30
- Status: `ACCEPTED / COMPLETE`
- Bounded scope: Production Validator の既存 Coordinate validation と
  Presentation Draft `0.1.0` validation integration
- Design1: `production-validator-extension-integration-design.md`
- Orphan policy: `presentation-orphan-relation-validation-policy-decision.md`
- Result: `production-validator-extension-integration-result.md`
- Validator commit: `4f5001e feat: validate liaison extension data`

## Production surface and evidence

Validator の primary production-facing surface は CLI
(`src/cli.js`) であり、browser UI は存在しない。Node.js `v20` 系の live
workspace で temporary JSON files を CLI に渡し、JSON output、exit code、
input SHA-256 を確認した。証拠ラベルは `REAL-CLI`、実装/test/source確認は
`AUTOMATED` または `READ-ONLY-INSPECTION` とした。CLI/UI smoke は CLI として
実施済みで、browser UI は `NOT APPLICABLE`。

Design1 の候補 scope と result の実装 scope に差はない。Coordinate は新規
変更ではなく既存 Prototype/Draft behavior を integration baseline として
維持し、Presentation validator と dispatch、tests を追加した。

## Acceptance matrix

| Item | Result / evidence |
|---|---|
| A1 valid Core | PASS — REAL-CLI, exit 0, valid true |
| A2 invalid Core | PASS — REAL-CLI, exit 1, Core error preserved |
| A3 unknown unrelated Extension | PASS — REAL-CLI, warning only, valid true, unchanged |
| B1 valid arrowDisplay | PASS — REAL-CLI |
| B2 valid lineStyle | PASS — REAL-CLI |
| B3 arrowDisplay + lineStyle | PASS — REAL-CLI |
| C1 unknown arrow token | PASS — REAL-CLI, accepted/preserved |
| C2 unknown line token | PASS — AUTOMATED, accepted/preserved |
| C3 unknown Presentation field | PASS — REAL-CLI, accepted/preserved |
| D1 single orphan | PASS — REAL-CLI, `presentation_orphan_relation` warning, valid true |
| D2 live sibling + orphan | PASS — REAL-CLI, orphan only diagnosed |
| D3 multiple orphans | PASS — REAL-CLI, one warning per ID |
| E1 malformed live record | PASS — REAL-CLI, error and no orphan warning |
| E2 malformed orphan record | PASS — REAL-CLI, shape error plus separate orphan warning; invalid |
| F1 unsupported Presentation version | PASS — REAL-CLI, warning only, no deep inspection |
| G1 known deletion cleanup state | PASS — AUTOMATED, LiaisonScape 269-test baseline and lifecycle tests |
| G2 pre-existing orphan preserved | PASS — REAL-CLI, valid warning, SHA-256 unchanged |
| H Coordinate | PASS — REAL-CLI valid Coordinate Draft sample; existing Prototype/Draft matrix AUTOMATED |
| I1 warning-only | PASS — REAL-CLI, exit 0 / valid true |
| I2 error + warning | PASS — REAL-CLI, exit 1 / valid false; both diagnostics retained |
| J1 input bytes unchanged | PASS — REAL-CLI, before/after SHA-256 identical |
| J2 no cleanup side effect | PASS — REAL-CLI, orphan record remained in file |
| K diagnostic usability | PASS — REAL-CLI, severity, extension path, and Relation ID are visible |
| L repeated smoke | PASS — REAL-CLI, valid/warning/invalid sequence without state leakage |

## Accepted behavior

Orphan Presentation Relation IDs are `ORPHAN-C — WARNING`: Dataset validity remains
true. The stable diagnostic is `presentation_orphan_relation`; its JSON Pointer
identifies the Presentation Extension and exact Relation-ID record. This is an
application-owned semantic association/stale-data signal, not Core Relation
referential integrity. A malformed record remains an error independently.

The repair policy is `REPAIR-1 — NEVER AUTO-REPAIR`. Validator diagnostics do not
delete orphan records, migrate Coordinate data, rewrite unknown tokens, normalize
payloads, or serialize a replacement Dataset. Known Relation deletion cleanup in
LiaisonScape remains a separate explicit lifecycle responsibility. Unknown
Presentation fields/tokens and unrelated unknown Extensions remain
forward-compatible and preserved.

## Automated baseline

- Validator: `npm.cmd run validate` PASS; 105 tests and 3 fixture tests
- LiaisonScape: 269 tests PASS; lint PASS; build PASS
- e2r-spec: `npm.cmd run validate` PASS
- commit/show and diff checks: PASS

## Scope boundaries

Schema impact: none. Presentation `specVersion`: unchanged. LiaisonScape runtime,
roadmap, Hub, Handoff, and NarrativeLine: unchanged. Automatic repair is not
implemented. Public Sample Refresh is NOT started. Known limitations are future
Presentation versions, manual cleanup UI, and machine-readable schema evolution.
Next checkpoint is NOT started.
