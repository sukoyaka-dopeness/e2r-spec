# E2R Session Freeze
Date: 2026-07-21
Status: FIXED
Scope: Core Data Model Part 2 (Relation) + Core Design Decisions

## Core Philosophy

### Minimal Core
- Coreは世界中の実装で共通して必要となる概念のみを定義する。
- 用途固有の概念はExtensionで定義する。

### Extension First
- Coreは用途を限定しない。
- History・Semantic・Calendarなどの機能はExtensionとして追加する。

### Single Source of Truth
- 導出可能な情報は保存しない。
- 事実のみを保存し、状態や期間は必要に応じて導出する。

---

# Entity

## Responsibility

Entityは持続的な存在を表す。

---

# Event

## Responsibility

Eventは時間の中で発生する出来事・変化を表す。

## Core Rules

- Eventはdateを必須としない。
- 日時不明のEventを許可する。

理由:
- 神話
- 創作
- 年代不詳
- 未来
などを自然に扱うため。

---

# Relation

## Responsibility

RelationはEntityまたはEvent同士の意味的な関連を表す。

## Required Fields

- id
- source
- target

## Optional Fields

- label
- description
- properties
- extensions

## Rules

### Source / Target

- Entity→Entity を許可
- Entity→Event を許可
- Event→Entity を許可
- Event→Event を許可

### Relation→Relation

禁止

理由:
Coreを単純に保つため。

### Self Relation

許可

### Cyclic Relation

許可

### Multiple Relations

同一Source・Target間に複数Relationを許可する。

### Relation Properties

許可

### Relation ID

必須

### Relation Lifecycle

Coreでは規定しない。

ライフサイクルは各Extensionまたは実装が定義する。

---

# Core Field Decisions

## label

Coreで定義する。

理由:
- 人間可読性が大きく向上する。
- ほぼ全ての実装で必要となる。

## description

Coreの任意フィールドとする。

理由:
- 説明文は多くの実装で有用。
- ただし存在を必須とはしない。

---

# Core Design Decisions

## Entityに生没年などを保持しない

誕生・死亡などはEventとして保持する。

生没期間などはEvent列から導出する。

例:

- 誕生
- 復活
- 死亡

のような複数回の状態変化も自然に表現できる。

---

# Extension Notes (FIXED)

## Semantic Extension

責務:

- EventやRelationの意味を定義する。

例:

- birth
- death
- marriage
- resurrection

Coreは意味を知らない。

Semantic Extensionが意味を提供する。

### UI

イベント種別はIDEのコード補完のような入力方式を推奨する。

- 自由入力可能
- 既知Semanticを候補表示
- 未知語も入力可能

プルダウン固定方式は採用しない。

---

## History Extension

責務:

時間・時系列・順序を扱う。

Coreでは扱わない。

History Extensionでは以下を扱う予定。

- Chronology
- Display Order
- Narrative Order
- 曖昧日付
- Calendar連携
- 暦法切替
- ファンタジー暦
- 期間導出

History Extensionは「時間拡張」というより「時系列・順序拡張」と考える。

---

## Calendar Extension

History Extensionから参照される独立Extension。

例:

- Gregorian
- Julian
- 和暦
- ファンタジー暦

暦定義が存在しなくてもデータ保存は可能。

解釈可能なアプリのみ暦を解釈する。

---

# Future TODO

## Entity

- 必須フィールド
- 任意フィールド
- Property設計

## Event

- 必須フィールド
- 任意フィールド
- Property設計

## Property

- Core Property
- Extension Property
- Custom Property

## JSON Examples

- Minimal
- History
- Genealogy
- Bible
- Fantasy

## Session Status

**Status:** Closed

This session has been consolidated into the repository.

The design decisions and outcomes discussed in this session have been reflected in the following documents:

- `/README.md`
- `/spec/philosophy.md`
- `/spec/rationale.md`
- `/benchmark/`
- `/extensions/README.md`
- `/examples/README.md`
- `/applications/README.md`

This session remains as a historical design record.

Future discussions should use the repository documents above as the primary reference.

### Repository snapshot after this session

- README established.
- Core philosophy documented.
- Design rationale introduced.
- Benchmark Suite structure created.
- Extension index created.
- Example index created.
- Application roadmap created.
