# E2Rで何ができるか

E2Rは、Event・Entity・RelationからなるDatasetを表現し交換するためのJSON仕様です。1つのDatasetを、複数のアプリケーションやワークフローで再利用できます。E2R自体がTimeline、相関図、PDF、事実確認を実行するわけではなく、アプリケーションやワークフローがDatasetを使ってそれらを実現します。

## 1つのDatasetを再利用する

同じDatasetには、起きたこと、関係する人物や場所、そしてそれらの接続を記録できます。TimelineアプリケーションはEventとHistory情報を中心に扱い、グラフアプリケーションはEntityとRelationを中心に扱えます。どちらでもCoreの構造は同じです。

## 目的に応じて構造を選ぶ

| 目的 | 主な構造 | アプリケーションやワークフローでできること |
| --- | --- | --- |
| 起きたことを記録する | Event | 発生、行為、移行、変化を表す。 |
| Eventを時系列に置く | Event + History Extension | 記録された時間情報をTimelineに表示する。 |
| 人物・組織・場所・物を表す | Entity | 同じ対象を複数の接続で再利用する。 |
| Core Objectを接続する | Relation | 2つのEventまたはEntityがつながることを表す。 |
| Datasetにタイトルを付ける | Metadata Extensionの`title` | 人間が読めるタイトルを表示・提案する。 |
| Datasetを通常の交換中に識別する | Metadata Extensionの`datasetId` | ある場合にDataset識別子を保つ。 |
| 関係を探索する | Entity + Relation | Entity中心の関係グラフを支える。 |
| AIへ構造化入力を渡す | E2R Dataset | 分析、要約、変換案などに使う。 |
| 対応する構造ルールを確認する | Dataset + Validator | Coreや対応Extensionの適合性エラーを見つける。 |

`datasetId`と`title`は任意のMetadataフィールドです。Core要件を満たすDatasetは、どちらがなくても有効です。

## Coreを増やさずに情報を加える

Coreは「何が存在するか」「何が起きたか」「何が接続されているか」という構造上の問いを扱います。Extensionは、Coreが標準化する必要のない情報を加えます。たとえばHistory Extensionは時間情報を、Metadata ExtensionはDataset全体のタイトルや識別情報を記録します。

アプリケーションは、認識しないExtensionを読むときには無視し、可能な限り保持します。これにより、同じCoreデータを、同じ機能を持たない専門ツール間でも交換できます。

## アプリケーションやワークフローで交換する

NarrativeLineは、E2R DatasetをEvent中心のTimelineとして編集・表示するアプリケーションです。LiaisonScapeは、Entity中心の関係グラフとして見るために設計されているreference applicationです。リポジトリは作成されていますが、この設計説明は特定の実装がすぐ利用できるという意味ではありません。

Datasetは、AIや別のアプリケーションに構造化入力として渡すこともできます。説明、プレゼンテーション、PDFなど何を作るかは、そのワークフローが決めます。出力形式はE2R自体が定めるものではありません。

## 構造を検証し、内容を確認する

ValidatorはCoreと対応するExtensionの構造を検証します。入力を書き換えずにエラーや警告を報告できます。検証に通っても、歴史的主張、出典、AIが生成した文章の内容が事実として正しいとは限りません。これらには、根拠を確認する工程と人間の判断が必要です。

## 次に読むもの

[Datasetを段階的に作る](dataset-walkthrough-ja.md)でDatasetの作成手順を確認し、規範的な要件は[E2R Core仕様](../spec/core.md)を参照してください。
