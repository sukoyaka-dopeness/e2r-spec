# Datasetを段階的に作る

この文書はE2R Datasetの構造を段階的に紹介するための解説です。規範的な要件は[E2R Core仕様](../spec/core.md)、[History Extension](../extensions/history-extension.md)、[Metadata Extension](../extensions/metadata-extension.md)を参照してください。完全な参照ファイルは、[空のDataset](../examples/empty-dataset.json)、[Eventの例](../examples/single-event.json)、[Event・Entity・Relationの例](../examples/event-with-entity.json)です。

## 1. 最小のDatasetから始める

すべてのDatasetには、Coreのバージョンと3つの配列があります。まだCore Objectがない場合でも、配列は存在します。

```json
{
  "version": "1.0",
  "entities": [],
  "events": [],
  "relations": []
}
```

空のDatasetも有効です。3つの配列は、どのアプリケーションでも同じ基本的な入れ物の形を使えるようにするため必須です。

## 2. Eventを追加する

Eventは、起きたことを表します。Coreでは`id`が必須で、`name`は人間が読める任意のラベルです。時間情報はCoreのEventに必須ではありません。

```json
{
  "id": "event-1",
  "name": "月面着陸"
}
```

このObjectをDatasetの`events`配列へ入れます。`id`は、EntityやRelationを含むDataset全体で一意でなければなりません。

## 3. Entityを追加する

Entityは、人物、組織、場所、物、文書、ソフトウェア、概念など、存在するものを表します。

```json
{
  "id": "entity-1",
  "name": "Apollo 11"
}
```

このObjectを`entities`配列へ入れます。同じDatasetにEventとEntityを置くだけでは、両者はまだ接続されません。

## 4. Relationを追加する

Relationは、同じDataset内の2つのCore Objectを接続します。ここではEventとEntityを接続します。

```json
{
  "id": "relation-1",
  "sourceId": "event-1",
  "targetId": "entity-1"
}
```

これを`relations`配列へ入れます。接続先と接続元にはEventまたはEntityを指定できますが、Relationは指定できません。方向は構造上のものであり、参加者、親子、所属、原因などの意味をCoreが定めるものではありません。自己Relationも有効です。

## 5. History情報を追加する

History Extensionは、Coreと分けて時間情報を記録します。Dataset-levelの`extensions`ではなく、対象Eventの`extensions`へ追加します。

```json
{
  "id": "event-1",
  "name": "月面着陸",
  "extensions": {
    "history": {
      "time": {
        "year": 1969,
        "month": 7,
        "day": 20
      }
    }
  }
}
```

`time`にあるフィールドが、記録された精度を表します。省略されたフィールドは未知であり、補ってはいけません。History Extension v1は先発グレゴリオ暦を使うため、同じ情報を表す独自の暦フィールドを追加しません。

## 6. Dataset Metadataを追加する

Metadataは、個別のEvent、Entity、RelationではなくDataset全体を説明します。Dataset-levelに置きます。

```json
{
  "extensions": {
    "metadata": {
      "datasetId": "example-lunar-landing",
      "title": "月面着陸の例"
    }
  }
}
```

どちらのフィールドも任意です。`datasetId`がある場合、通常の編集、読み込み、書き出しでは保持します。タイトルは識別子ではありません。

## 7. Datasetを検証する

Validatorを使うと、Coreと対応するExtensionの構造を検証できます。診断にはエラー、警告、JSON内の位置を含められます。Validatorは読み取り専用であり、Datasetを修復・書き換えません。

検証で確認できるのは構造と対応する仕様への適合です。歴史的主張などの内容が事実として正しいかどうかは確認しません。

## 8. Datasetを再利用する

この[Historyの精度が混在する例](../examples/mixed-history-precision.json)では、`precision`フィールドを追加せず、年・月・日・分・秒のEventを1つのDatasetに入れています。

完成したDatasetは、対応するアプリケーションで再度開き、JSONとして交換し、別のワークフローへ構造化入力として渡せます。たとえばNarrativeLineはEvent中心のTimeline情報を表示できます。LinkscapeはEntity中心の関係グラフアプリケーションとして設計されていますが、設計文書は現在利用できる実装を保証するものではありません。AIや別のアプリケーションもDatasetを使って分析や出力を提案できますが、その結果にはワークフロー側の責任があります。
