# ChatGPT Handoff — Target Reference Diagnostic Draft

Date: 2026-08-14

Status: Review handoff; non-normative

## Review scope

This is a deliberately bounded review of the internal target-reference draft.
The reviewer should challenge the separation between reference resolution and
owner-specific lifecycle meaning, not design a final E2R payload.

The review must not reopen the four Agenda handoffs, change Core, register an
Extension, select an ID algorithm, or define Validator severity codes.

## Files to provide to ChatGPT

Provide these files in this order:

1. `research/target-reference/decisions/target-reference-draft-representation.md`
2. `research/target-reference/evidence/target-reference-lifecycle-diagnostic-matrix.md`
3. `research/target-reference/tools/target-reference-diagnostic-harness.mjs`
4. `research/target-reference/tools/target-reference-diagnostic-harness.test.mjs`
5. `research/target-reference/decisions/target-reference-model-comparison.md`

The first four are the review target. The fifth is context for why the
owner-namespace plus local-identity model is currently provisional.

## Prompt to send

```text
添付した5ファイルは、E2RのTarget Referenceについて作成した
非規範の内部ドラフトです。今回は限定レビューをお願いします。

レビュー対象は次の一点です。

「参照の解決」と「所有Extension固有のライフサイクル意味」を分離した
現在の設計、およびread-only診断ハーネスの分類が妥当か。

特に次を確認してください。

1. malformed / unknown / missing / resolved / ambiguous の5分類に
   欠落や重複がないか
2. delete / replacement / merge / split / ID reuseに対する
   preserve・report・rejectという安全側の応答が、過剰な一般化に
   なっていないか
3. 「自動redirectしない」「自動cascadeしない」「split先を自動選択
   しない」という方針に反例があるか
4. field slotとfield valueの区別が、現在のドラフト表現とテストで
   十分に表現できているか
5. Dataset-level targetをprofile capabilityとして扱う方針に問題が
   ないか
6. unknown namespaceを扱えないアプリが、データを保持したまま
   unknownとして報告する設計が十分か
7. ハーネスの実装が、まだ決めてはいけないPayloadやExtension意味を
   無意識に固定していないか

出力は次の形式にしてください。

- 妥当な点
- 過剰に一般化している点
- 欠落している診断状態またはライフサイクルケース
- ハーネス実装上の問題
- 文書の最小修正案
- 今は決めてはいけないこと
- 次に確認すべき最小のfixture

JSON Schema、正式Extension ID、ID生成方式、Core変更、Validatorの
severity codeは提案しないでください。
また、4議題全体への差し戻しや、Epistemic / History / Namesの再設計へ
議論を拡張しないでください。
```

## How to return the result

The returned review should be treated as an architectural challenge, not as
authority. Codex will compare it with the current research documents and
accept only changes that preserve:

- Core minimality;
- unknown-data round-trip preservation;
- the distinction between structural invalidity and unresolved meaning; and
- owner-specific lifecycle responsibility.

If the reviewer proposes a new state, it must include a concrete case that
cannot be represented by the current five states. If it proposes an automatic
operation, it must explain why that operation is safe across independent
Extensions.

## Expected next step after review

Codex will produce a short disposition with three categories:

1. accepted clarification;
2. research question to defer; and
3. rejected overreach.

Only after that disposition will the research harness or fixtures be changed.
