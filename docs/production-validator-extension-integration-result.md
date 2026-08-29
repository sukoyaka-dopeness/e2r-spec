# Production Validator Extension Integration Result

- Date: 2026-08-29
- Status: `IMPLEMENTED — AUTOMATED GATE PASS`
- Scope: Production Validator の Coordinate 現行契約確認と LiaisonScape
  Presentation Draft `0.1.0` の read-only validation integration
- Design1 authority: `production-validator-extension-integration-design.md`
- Orphan policy authority: `presentation-orphan-relation-validation-policy-decision.md`

## Baselines and implementation

Validator baseline `49b2751` から、`4f5001e feat: validate liaison extension data`
を実装した。変更ファイルは次の3つだけである。

- `e2r-validator/src/presentation-validator.js`
- `e2r-validator/src/extension-validator.js`
- `e2r-validator/test/extension-validator.test.js`

既存の central Extension dispatch に Presentation-specific validator を登録
した。Core validator は変更していない。既存の Coordinate Prototype/Draft
validator はそのまま exact version、malformed error、unsupported warning、
unknown member preservation、reference/range validation を提供する。

## Diagnostic and policy behavior

Presentation `0.1.0` の envelope、relations map、record、arrowDisplay、
lineStyle を検証する。known tokens は受理し、unknown non-empty tokens と
unknown fields は保持可能な opaque data として受理する。

確定 policy は `ORPHAN-C — WARNING`。Core Relation のない Presentation
record は `presentation_orphan_relation` warning を出すが、Dataset は valid
のままである。path は RFC 6901 pointer で record を指す。malformed record
には別の error を出し、orphan warning と分離する。unsupported Presentation
version は `presentation_version_unsupported` warning とし、内部 semantic
検査を行わない。

Repair policy は `REPAIR-1 — NEVER AUTO-REPAIR`。Validator は diagnostic-only
で、Dataset bytes、unknown token/field、record、Extension を変更しない。
unknown unrelated Extension は従来どおり warning かつ valid のままである。
manual cleanup candidate の提示は consumer 側の将来責務であり、本実装では
UI 文言を追加していない。

既知 Relation の明示削除時に LiaisonScape が record を cleanup する
`d74b176` の lifecycle とは責務が異なる。Validator は global orphan GC を
行わない。

## V1–V25 coverage

| IDs | Result |
|---|---|
| V1–V3 | Core success/failure と unknown Extension regression PASS |
| V4–V11 | 既存 Coordinate Prototype/Draft tests and fixtures PASS |
| V12–V19 | Presentation known values、malformed、unknown values/fields、unsupported version PASS |
| V20–V24 | orphan warning、validity、malformed separation、preservation、known-deletion compatibility PASS |
| V25 | canonical empty/default behavior remains schema/runtime boundary; no serialization mutation introduced |

Validator automated suite は 105 tests、fixture suite は 3 testsで全 PASS。
追加テストは valid live + orphan、unknown future token/property、input
non-mutation、malformed + orphan separation、unsupported version boundary を
カバーする。CLI/UI smoke は `Manual/CLI smoke: NOT PERFORMED` とする。

## Verification and boundaries

- Validator `npm.cmd run validate`: PASS（lint、105 tests、3 fixture tests）
- Validator `git diff --check`: PASS
- LiaisonScape: 269 tests、lint、build PASS。runtime unchanged
- e2r-spec `npm.cmd run validate`: PASS
- schema impact: none
- LiaisonScape runtime impact: none
- Hub/Handoff impact: none
- roadmap impact: none

Known limitations: Presentation schema の machine-readable 変更、future
version の semantic validation、manual cleanup UI、automatic repair は今回
扱わない。Coordinate canonical/legacy migration と conflict repair も
application boundary のままである。

次の Production Validator implementation checkpoint は開始していない。
Public Sample Refresh、Hub/Handoff、version decision、release、push、deploy
も開始していない。
