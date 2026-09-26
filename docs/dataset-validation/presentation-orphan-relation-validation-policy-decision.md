# Presentation Orphan Relation Validation Policy Decision

- Date: 2026-08-29
- Status: `DECIDED`
- Scope: Presentation Extension の orphan Relation-ID に関する spec policy のみ

## Why this decision is required

Production Validator integration design (`42197e1`, `6bbd544`) は、Core
Relation が存在しない Presentation `relations[relationId]` の扱いが未決定
だったため BLOCKED だった。本書で severity/validity と repair policy を
独立に確定する。runtime、schema、roadmap は変更しない。

## Authority / prior checkpoints

LiaisonScape `d74b176` と e2r-spec `20e78d3` は、明示的に削除された既知の
Relation の Presentation record だけを cleanup し、sibling、unknown data、
他 Extension、既存の unrelated orphan は保持する。これは lifecycle の
cleanup であり、orphan の validity 判定ではない。Presentation Draft は
構造、既知値、未知値の保存を定めるが、Relation-ID 解決は JSON Schema の
外側である。Validator の現行 contract は `error`/`warning` のみで、未知
Extension は warning だが Dataset を invalid にしない。

## Definition and distinctions

Orphan とは、Presentation Extension の `relations` map に record があり、
その map key の Relation ID が Core Dataset の `relations` に存在しない
状態をいう。record の JSON shape が不正な場合は別問題であり、shape error
を orphan policy により valid 化してはならない。既知 Relation の明示削除
cleanup は因果関係が確定した write-time lifecycle 処理であり、任意の
pre-existing orphan を掃除する global garbage collection ではない。

Presentation key は Core の `sourceId`/`targetId` の referential-integrity
constraint そのものではなく、application-owned semantic association で
ある。従って target 不在は shape invalid ではなく semantic inconsistency
または stale-data signal であり、Core Dataset 全体を reject するほどの
error ではない。

## Data preservation and forward compatibility

unknown fields、future `arrowDisplay`/`lineStyle` tokens、sibling records、
他 Extension は保持する。orphan だからといって将来意味を持つ data が
不要とは証明できないため、diagnostic はしても自動削除しない。

## O1-O8 analysis

- O1 known fields only: orphan signal として warning。Dataset は valid。
- O2 unknown future property: warning は key association に限り、property
  を解釈・削除しない。Dataset は valid。
- O3 unknown future token: token の未知性は error でなく、orphan の場合だけ
  warning。token は保持する。
- O4 live sibling + orphan: live record は通常どおり扱い、orphan のみ個別
  warning。全体 reject や sibling cleanup はしない。
- O5 orphan only: warning 一件以上、Dataset は valid。空 envelope 化や削除
  はしない。
- O6 multiple orphans: orphan key ごとに deterministic な warning。自動掃除
  はしない。
- O7 shape-invalid orphan: shape diagnostic と orphan diagnostic は独立可能。
  shape error により Dataset は invalid、orphan policy は malformed data を
  valid 化しない。
- O8 unsupported Presentation `specVersion`: support-state warning として
  扱い、現行 version の semantic orphan inspection はしない。orphan policy
  を unsupported-version handling に適用しない。

## Severity options and chosen outcome

ORPHAN-A（無診断）は lifecycle 上 stale signal を隠すため不採用。
ORPHAN-B（informational）は現行 diagnostic contract に存在しない。
ORPHAN-D（error）は Presentation key を Core constraint とみなす強い規範
根拠がなく、採用しない。ORPHAN-E は本 decision で解消する。

**Chosen: ORPHAN-C — WARNING.**

orphan は Dataset を invalid にしないが、既知 Relation deletion 後は通常
残らないため、現在の lifecycle から見て stale/unintended state と判断する
価値がある。warning は cleanup 候補を user/tool に示す signal であり、Core
validity の失敗ではない。

## Repair options and chosen outcome

**Chosen: REPAIR-1 — NEVER AUTO-REPAIR.**

Validator は diagnostic-only とし、Dataset bytes、import/open/export data、
Presentation record を変更しない。warning の強さは削除の安全性を証明
しない。LiaisonScape の known explicit Relation deletion cleanup は、既知
target に因果的に結び付いた別責務であり、この policy と矛盾しない。

Manual cleanup は diagnostic message/consumer UI で「cleanup candidate」と
示してよいが、今回その UI/tool は設計・実装しない。自動削除、global GC、
未知 data の正規化は行わない。

## Diagnostic requirements

次の Validator implementation では既存 severity model を利用できる。

- candidate code: `presentation_orphan_relation`
- severity: `warning`
- path: `/extensions/draft.github.sukoyaka-dopeness.liaisonscape-presentation/relations/<escaped-relation-id>`
- message semantics: Presentation record の key が Core Relation に存在しない
- relation ID: path に RFC 6901 escaped key を含める。必要なら `relatedIds`
  にその ID を含める
- extension ID: path に含める
- Dataset validity: malformed shape error がなければ `valid: true`

既存の `diagnostic` は error/warning を表現できるため、warning/info
architecture の変更は不要。ただし Presentation-specific semantic validator
と、Core Relation ID 集合を参照する Extension-level post-pass が必要になる。

## Boundaries and impacts

- Unsupported version: warning のみ。unsupported payload を現行 rules で検査しない。
- Unknown token/field: preserve-first。未知であることだけで invalid にしない。
- Schema impact: none。
- Presentation `specVersion` impact: none。
- LiaisonScape runtime impact: none。
- ownership/provenance field、tombstone、Core 変更: none。

## Design1 unblock status

**UNBLOCKED.** severity と repair policy が確定したため、直前の Production
Validator integration design を block していた orphan policy blocker は解消
した。ただし本書は次の implementation を開始しない。次 checkpoint でのみ
Validator-specific validator、diagnostics、fixtures を実装対象として扱える。

## Known limitations

この decision は Presentation Draft `0.1.0` の orphan policy に限定する。
unsupported future versions の内部意味、別 Extension の参照 policy、UI の
具体的な manual cleanup interaction は決定しない。

## Exclusions

Validator runtime/tests、LiaisonScape runtime、Presentation/Coordinate schema、
roadmap、ai-knowledge、Hub、NarrativeLine、sample refresh、version、release、
push/deploy は変更しない。

## Next implementation checkpoint NOT started

Production Validator implementation、automatic repair、orphan cleanup runtime、
および次の checkpoint は開始していない。
