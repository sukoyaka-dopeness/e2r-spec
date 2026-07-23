# E2R Applications

This directory contains ideas, concepts, and design notes for applications built on top of the E2R Core Specification.

These documents are **not part of the E2R Core Specification**.
They do not define interoperability requirements and are not normative.

Their purpose is to preserve application ideas developed during the design of E2R without affecting the stability of the Core.

## Categories

### Timeline & Sequence

Applications focused on chronological information.

- Timeline Editor
- Historical Timeline
- Project Timeline

### Graph & Relationship

Applications that visualize and edit relationships between objects.

- Relationship Graph
- Knowledge Graph
- Organization Chart
- Family Tree

### Investigation & Analysis

Applications for collecting, organizing, and analyzing information.

- Investigation Board
- OSINT Workspace
- Research Database
- Citation Graph

### Creative & Worldbuilding

Applications for authors, game designers, and worldbuilders.

- Worldbuilding Database
- Character Manager
- Story Timeline
- Lore Management

### Knowledge Management

Applications for structured information management.

- Personal Knowledge Base
- Wiki Editor
- Concept Graph
- Technical Documentation

### AI-assisted Applications

Applications that use Large Language Models (LLMs) to assist editing, analysis, and data creation.

See `llm-integration.md`.

## Design Principle

Applications are free to define their own user interface, workflows, editing features, storage methods, and supported Extensions.

## Composable Datasets

E2R datasets are designed to be independently created and later combined.

Different users, organizations, or applications may create separate datasets describing different parts of the same domain.

Applications may support combining these datasets into a larger graph or timeline while preserving their original information.

Possible examples include:

- Merging independent family trees into a larger genealogy
- Combining historical timelines from multiple researchers
- Integrating organization charts from different departments
- Building collaborative worldbuilding projects
- Connecting independent investigation datasets
- Expanding knowledge graphs over time

The E2R Core Specification does not define merge behavior or conflict resolution.

How datasets are merged, validated, or edited is the responsibility of Applications.

## E2R Ecosystem

E2Rは単一のアプリケーションではなく、共通のDatasetを複数のアプリケーションが共有するエコシステムを想定している。

各アプリケーションはDatasetの一部を編集・解析・可視化する役割を担い、他のアプリケーションとJSONを介して連携できる。

例:

Character Generator
↓
人物Entityを生成

↓

Worldbuilding
↓
世界設定を編集

↓

Timeline
↓
時系列を整理

↓

Relationship Diagram
↓
人物・組織・場所の関係を可視化

↓

Feature Space Editor
↓
性格や概念空間を分析・編集

↓

Narrative Compiler
↓
物語構造を生成・編集

↓

LLM
↓
自然言語へ展開・要約・補完

↓

E2R Dataset
↓
更新された構造データを各アプリケーションへ戻す

各アプリケーションは独立して利用できる一方、同じDatasetを共有することで、一つの編集結果を他のアプリケーションがそのまま利用できる。

E2R Datasetは、このエコシステム全体における共通の中間表現（Intermediate Representation, IR）として機能する。

The only interoperability requirement is that Core-compatible datasets remain valid E2R datasets.
