# E2R入門

E2Rは、できごと、エンティティ、そしてそれらの関連付けを、ひとつのデータセットとして交換するための仕様です。JSONで表現できるため、人間だけでなくプログラムやAIシステムともデータをやりとりできます。

## 3つのCoreオブジェクト

- **できごと（Event）**：発生した出来事、活動、変化など。
- **エンティティ（Entity）**：人物、組織、場所、物、文書、ソフトウェア、概念など、存在するもの。
- **関連付け（Relation）**：2つのできごとやエンティティをつなぐ有向の接続。

データセット全体を入れるJSON文書が**Dataset**です。Datasetは基本要素と拡張情報をまとめる入れ物であり、Event・Entity・Relationと同じ種類のオブジェクトではありません。

E2Rの基本仕様（Core）は、これらの構造と識別子を定めます。関連付けが何を意味するか、日付をどう解釈するか、画面にどう表示するかは、拡張機能やアプリケーションが定めます。

## データセットと最小JSON

データセットは、基本仕様のバージョンと、できごと・エンティティ・関連付けの配列を持つJSON文書です。基本仕様では、これらの配列は空でも必須です。

```json
{
  "version": "1.0",
  "entities": [],
  "events": [],
  "relations": []
}
```

例えば、EventとEntityをRelationで結ぶと次のようになります。

```json
{
  "version": "1.0",
  "events": [{"id": "event-1", "name": "月面着陸"}],
  "entities": [{"id": "entity-1", "name": "Apollo 11"}],
  "relations": [{"id": "relation-1", "sourceId": "event-1", "targetId": "entity-1"}]
}
```

## CoreとExtension

**Core**は、異なるアプリケーションがデータを交換するために必要な最小限の共通ルールです。**Extension（拡張機能）**は、日時、タイトル、座標、意味、表示など、Coreに含めない情報を追加します。

例えば、History ExtensionはEventの日時を記録し、Metadata ExtensionはDatasetのタイトルを記録できます。未知のExtensionは、対応していないアプリケーションでもCore Datasetを読み込めるよう無視でき、可能な限り保持されます。

## E2RとAI

E2R JSONは、人間、アプリケーション、AIの間で共有できる構造化された中間表現です。自然言語の依頼をそのままアプリケーションごとの形式に変換するのではなく、まず共通のDatasetとして整理することで、同じ情報を複数の処理に再利用できます。

例えば、ユーザーが次のように依頼できます。

> この年表を印刷用PDFにして。

アプリケーションは年表をE2R Datasetとして保存し、そのJSONをLLMに渡して、印刷向けのレイアウトや文章を生成できます。同じDatasetを使って、例えば次のような処理もできます。

- 重要なEventを年代順に要約する
- 登場するEntityとRelationを抽出して、人物相関図の説明文を作る
- 日付がないEventや孤立したEntityを見つけ、確認事項として列挙する
- 対象読者に合わせて、子ども向け説明、展示用キャプション、講義資料を作る
- PDF、プレゼンテーション、Webページ、冊子、Timeline（年表）、Relation図を生成する

このように、E2Rは人間とAIが情報を受け渡すときの「中間言語」のように機能できます。AIは自然言語の指示を受け取り、E2R Datasetを読み書きし、別のアプリケーションは同じDatasetを異なる表示や出力へ変換できます。データをアプリケーション固有の画面状態に閉じ込めず、JSONとして保存できることが重要です。

AIがDatasetを生成または編集した後は、ValidatorでCoreと対応するExtensionの構造を検証できます。検証に失敗した場合は、エラーをAIや利用者へ返して修正し、再度検証する処理も構成できます。Validatorは構造と仕様適合性を確認するものであり、AIが作った歴史的事実や文章の内容が正しいことを自動的に保証するものではありません。

これはE2Rが特定のAIやPDF形式を必須にするという意味ではありません。E2Rはデータの構造と交換方法を定め、AIによる解釈や出力形式は利用するアプリケーションやワークフローが決めます。

## 初心者向け用語

| 用語 | 意味 |
| --- | --- |
| Dataset | Event、Entity、Relationを含むデータ全体 |
| Event | 発生したできごと |
| Entity | 存在する人物、物、場所、組織、文書、ソフトウェア、概念など |
| Relation | EventまたはEntity間の有向接続 |
| Core | 交換に必要な最小限の共通仕様 |
| Extension | Coreに追加する独立した情報やルール |
| ID | Dataset内でオブジェクトを識別する文字列 |

## NarrativeLineとの関係

NarrativeLineは、E2R Datasetを編集・表示するアプリケーションの一例です。Timeline（年表）やフォームはアプリケーションの表示であり、E2R Coreそのものではありません。

## さらに詳しく

実際のJSON例は、[空のDataset](../examples/empty-dataset.json)、[Eventの例](../examples/single-event.json)、[Event・Entity・Relationの例](../examples/event-with-entity.json)を参照してください。

詳細なルールは、[E2R Core仕様](../spec/core.md)と各拡張機能の仕様を参照してください。アプリケーションで扱うDatasetは、必要に応じてValidatorで検証できます。
