# Future Ideas

This document records ideas that may become future applications, Extensions, or supporting tools for the E2R ecosystem.

This document is informational and is not part of the E2R Core Specification.

Ideas listed here are exploratory and should not be interpreted as planned features.

## AI-assisted Editing

Possible future capabilities include:

- Entity generation
- Event generation
- Relation generation
- Dataset expansion
- Dataset summarization
- Consistency analysis
- Duplicate detection
- Merge assistance
- Migration assistance

## Scenario Generation

Generate complete fictional datasets from high-level descriptions.

Examples include:

- Detective stories
- Fantasy worlds
- Historical simulations
- Science fiction settings

## Character Simulation

Use existing datasets to infer:

- Personality
- Motivation
- Future actions
- Behavioral consistency
- Character development

## Dataset Evolution

Applications may assist long-term collaborative growth of datasets.

Possible capabilities include:

- Incremental expansion
- Community-maintained datasets
- Distributed editing
- Partial dataset exchange

## Evidence Networks

Represent knowledge as interconnected claims supported or contradicted by evidence.

Possible applications include:

- Science
- Law
- History
- Journalism
- Intelligence analysis

## Automatic Benchmark Generation

Generate benchmark datasets automatically.

Examples include:

- Timeline datasets
- Relationship graphs
- Family trees
- Organization structures
- Fictional worlds

Generated datasets may be reviewed before inclusion in official benchmark collections.

## Intelligent Navigation

Future applications may assist users by:

- Recommending related objects
- Discovering hidden connections
- Identifying missing information
- Explaining complex structures

## Visualization Research

Possible future visualization techniques include:

- Three-dimensional graphs
- Geographic visualization
- Temporal graph animation
- Mixed timeline and graph views
- Virtual reality exploration

## Dataset Federation

Future applications may browse multiple independent datasets as a unified information space while preserving their original ownership.

## Ecosystem Growth

The E2R ecosystem is intended to support independent applications built by different developers.

Applications may share datasets while providing different user experiences, editing workflows, and Extensions.

The E2R Core Specification intentionally leaves these possibilities open.

## Embedding Extension

EntityやEventをベクトル空間上へ配置するExtension。

想定用途

- 類似Entity検索
- 遠い概念同士の組み合わせ提案
- クラスタ分析
- 孤立した概念の発見
- AIによる創作支援
- 概念マップ表示

Coreには含めず、Embeddingを利用する実装が任意で利用するExtensionとする。

## Semantic Projection View

E2RのEntityやEventを多次元特徴空間へ配置し、各種Viewとして投影するExtension群。

想定例

- Embedding View
- 4象限View
- クラスタView
- PCA / UMAP / t-SNEによる意味空間表示
- AIによる新規Relation候補の提示
- 孤立Entityや概念ギャップの検出

Embeddingはその一実装例とし、Extensionは投影方法やモデルに依存しない設計を目指す。

## Feature Space Editor

Feature Space Editorは、EntityやEventを任意の特徴空間へ配置・編集するためのViewである。

Embedding ExtensionのようにAIが自動生成した意味空間を表示する用途だけでなく、ユーザーが独自の評価軸を定義し、配置結果をデータへ反映する用途も想定する。

### 想定用途

- 4象限グラフ
- 性格マップ
- 勢力マップ
- 感情マップ
- 政治思想マップ
- 世界観分析
- キャラクター分析

### 特徴

Feature Space Editorでは、軸は固定ではなく自由に定義できる。

例:

- 内向 ←→ 外向
- 理性 ←→ 感情
- 善 ←→ 悪
- 保守 ←→ 革新
- 忠誠 ←→ 野心

評価軸はExtensionによって定義されてもよく、AIが生成してもよい。

### Embedding Extensionとの関係

Embedding ExtensionはFeature Space Editorを実現する一つの入力源である。

例えば、

1. Embedding ExtensionがEntityを意味空間へ自動配置する。
2. Feature Space Editorでユーザーが配置を調整する。
3. 調整結果をCharacter Extensionなどへ反映する。
4. 他のE2Rアプリケーションが更新後のデータを利用する。

### 将来的な活用例

- AIが新規Entityの配置候補を提案する。
- 世界観全体の偏りや空白領域を可視化する。
- 孤立したEntityや概念を発見する。
- キャラクター生成アプリで大量生成した人物を分析・整理する。
- Feature Space Editorで調整した結果を世界観設定アプリへ反映する。
- Feature Spaceを他のView（Timeline、Knowledge Graphなど）と組み合わせて利用する。

Feature Space Editorは、E2Rデータを「編集するView」であると同時に、「解析結果を編集へフィードバックするView」としても位置付けられる。

## Game Analysis and Replay

E2Rはゲームプレイの状態や履歴を記録するフォーマットとしても利用できる。

想定用途

- TRPGリプレイ
- キャンペーン管理
- 人狼ゲーム分析
- ボードゲームのプレイログ
- カードゲーム対戦ログ
- 将棋・囲碁などの棋譜
- AIによる対局・セッション分析

ゲーム内の駒、カード、プレイヤー、NPC、アイテムなどはEntityとして表現できる。

ターン、フェーズ、行動、判定、戦闘などはEventとして記録できる。

所有、攻撃、協力、依存などの関係はRelationとして表現できる。

ゲーム終了後は、同一のE2Rデータから年表、相関図、統計、リプレイなど複数のViewを生成できる。

将来的にはゲームルール自体をE2Rで記述し、AIによるゲーム分析やルール検証へ応用することも考えられる。
