# sessions/E2R-Session-0012.md

# E2R Session 0012

## 概要

NarrativeLine のMVP実装を継続した。

Timeline画面からEvent Detail画面への編集フローを整理し、EventServiceへのリファクタリングを開始した。

また、Core ID、HumanID、Extension識別子について設計議論を行った。

---

# 実装

## EventService導入

Eventの更新・削除ロジックを App.tsx から EventService.ts へ移動した。

目的は画面とデータ操作の責務を分離することである。

現在 EventService が担当する処理は以下。

* updateEvent()
* deleteEvent()

App.tsx は画面遷移とState管理のみを担当する構成へ近づいた。

---

## Entity Detail画面

Entity Detail画面を追加した。

現在は最低限の表示のみ実装されている。

* Entity名
* Entity ID
* Timelineへ戻る

今後編集機能を追加予定。

---

## Timeline画面

Timelineへ編集ボタン（✏）を追加した。

今後は

* 行クリック → Event選択
* 編集ボタン → Event Detail

という責務へ分離する予定。

これにより「選択」と「編集」を明確に区別できる。

---

# UI設計

## Relation一覧

NarrativeLine(MVP)ではRelation一覧画面は作成しない。

Relationは内部データとして扱い、

* Event Detail → Related Entities
* Entity Detail → Related Events

という形でユーザーへ提示する。

ユーザーはRelationそのものではなく、Relationから導かれる情報を利用する。

---

## Entity Detail

Entity DetailにはRelated Eventsを表示する予定。

遷移イメージ。

Timeline

↓

Event Detail

↓

Entity Detail

↓

Related Events

↓

Event Detail

これによりEventとEntityを双方向に探索できる。

---

# ID設計

Core IDについて議論した。

候補は以下。

## 案A

Entity/Event/RelationなどのIDを

event-001

のようなHuman IDとする。

メリット

* 人間が読める
* デバッグしやすい

デメリット

* Merge時の衝突
* 将来的な同期に弱い

---

## 案B

Core IDはULIDなどの永続IDとする。

Human向け表示は別属性(HumanID)とする。

例

Core ID

01K3...

Human ID

event-001

こちらの方が長期運用・マージ・分散編集との相性が良い。

現時点ではこちらが有力候補。

---

# Extension識別子

Extension識別子について議論した。

候補1

名前空間方式

例

dev.sukoyaka.history

候補2

Extension自身もCore Objectとして扱い、ULIDを持つ方式。

この場合

* Extensionも永続ID
* Human向け識別名
* Version
* Author

などを保持できる。

現時点では結論を保留。

ExtensionもCore Objectとして扱う設計はE2Rの思想との整合性が高い可能性がある。

---

# Dictionary

将来的なDictionaryにはDictionary自身の永続IDを付与する。

DatasetはDictionaryをID参照する。

これにより

* 辞書の再利用
* 辞書単体配布
* 辞書更新

が容易になる。

---

# 今後の実装予定

優先順位

1. Timelineの「選択」と「編集」の完全分離

2. Event DetailからEntity Detailへの遷移完成

3. Entity DetailからRelated Eventsへの遷移

4. Entity編集

5. EntityService導入

6. DatasetService導入

---

# 検討事項

* HumanIDのExtensionへの適用方法
* ExtensionをCore Objectとするか
* Relative Order Extensionの仕様
* EventとEntityを結ぶRelation表現
* Dictionary仕様
* 複数Dataset対応
