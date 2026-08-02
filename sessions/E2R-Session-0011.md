# sessions/E2R-Session-0011.md

# E2R Session 0011

Date: 2026-08-02

## Summary

NarrativeLine MVPの編集フローを一通り実装した。

Home → Timeline → Event Detail の画面遷移が完成し、Event Detail画面で編集した内容をTimelineへ反映できるようになった。

---

## Completed

### Event Detail Screen

* EventDetailScreenを編集画面として利用する方針に決定
* datasetとselectedEventをPropsで受け取るよう変更
* Eventを検索して表示する実装を追加
* Date
* Name
* Description
  を編集可能に変更
* 「Timelineに反映」ボタンを追加
* Timelineへ戻る処理を実装
* Related Entities領域を追加（プレースホルダー）

現在のレイアウト

* Event Detail
* Date
* Name
* Description
* Related Entities
* ← Timeline
* Timelineに反映

---

### Timeline

TimelineからEvent Detailへ遷移できるようになった。

編集後はTimelineへ戻り、最後に編集したEventが選択状態のまま維持される。

---

### Navigation

画面遷移

Home
→ Timeline
→ Event Detail

が一通り完成。

NavigationServiceを利用した画面遷移へ統一。

---

### Editing

handleUpdateEventへ

* date
* name
* description

を追加。

Event DetailからTimelineへ反映可能になった。

---

## UI Decisions

### Bottom Action Bar

画面下部を共通UIとする。

左側

* 戻る

右側

* 現在の画面で追加・保存する操作

例

Timeline

← Home　　　　　　　　Add Event

Event Detail

← Timeline　　　Timelineに反映

将来

Entity Detail

← Event　　　　　Add Relation

という配置で統一する。

将来的にはスクロールしても常に表示される固定フッター化を検討する。

---

### Event Detail

Descriptionの下へRelated Entities領域を配置する。

将来

* Entity一覧
* Add Entity

を配置する予定。

---

### Delete Button

Delete Eventは画面上部固定でも下部固定でもなく、通常スクロール内に配置する。

誤操作防止のため、主要ナビゲーションからは分離する。

---

### Timeline Philosophy

Timelineは「年表」であることを最優先とする。

Timelineへ大量のEntity情報は表示しない。

表示候補

* Date
* Event Name
* Description（1行程度）
* （必要ならTags）

Entity一覧は表示しない。

Entityは

Timeline
→ Event Detail
→ Entity Detail

という導線で閲覧する。

---

### Event Selection

今後の候補として

「選択」と「編集」を分離する。

現在

クリック
→ Event Detail

将来案

クリック
→ 選択のみ

選択中のみ

* Edit
* Delete
* Duplicate

などの操作を表示する。

これにより

* Entity
* Relation

画面とも操作体系を統一できる。

---

## Future Architecture

Event DetailにはAdd Eventを置かない。

Add EventはTimeline専用操作とする。

Event Detailでは

Add Entity

のみ提供する予定。

---

## Future Feature

Related Entities

現在

(No related entities)

のみ表示。

今後

* Entity一覧
* Entity Detailへの遷移
* Add Entity

を追加する。

---

## Data Management

未保存変更管理（isDirty）の導入を検討。

Datasetが変更されたら

isDirty = true

JSON書き出し後

isDirty = false

Datasetを破棄する操作（New Dataset、Open Datasetなど）の直前のみ

「未保存の変更があります。書き出しますか？」

ダイアログを表示する。

Homeへ戻るだけでは警告を表示しない。

---

## Refactoring (After MVP)

MVP中は実装速度を優先する。

以下はMVP完成後に実施する。

* EventServiceの分離
* 共通Update型の導入
* AppState整理
* Service責務整理
* isDirty管理
* Event/Entity共通UI整理

---

## Next Session

優先候補

1. Timelineの選択UI改善（選択と編集の分離）
2. Event削除
3. Related Entities一覧表示
4. Entity Detail画面への遷移
5. Entity作成機能
