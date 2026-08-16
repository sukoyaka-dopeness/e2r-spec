# ChatGPT Handoff — Field Slot and Value-Level Assertion Ownership

Date: 2026-08-14

Status: Review handoff; non-normative

## Review scope

This is the second bounded review following the Target Reference diagnostic
review. The only question is how to keep a stable field-slot reference
distinct from an assertion about the value that was present in that slot.

Do not reopen Core, History vNext, Names, Epistemic Claim, or the general
target-reference model. Do not define a final payload or decide which future
Extension owns value snapshots. The purpose is to identify the smallest honest
conceptual boundary and useful fixtures.

## Files to provide to ChatGPT

Provide these files in this order:

1. `research/target-reference/decisions/target-reference-draft-representation.md`
2. `research/target-reference/evidence/target-reference-conceptual-fixtures.md`
3. `research/target-reference/tools/target-reference-diagnostic-harness.mjs`
4. `research/target-reference/tools/target-reference-diagnostic-harness.test.mjs`
5. `research/target-reference/decisions/target-reference-chatgpt-review-disposition.md`

The first four are the review target. The fifth records the already accepted
boundary between resolver states and lifecycle context.

## Prompt to send

```text
添付した5ファイルは、E2RのTarget Reference研究における
field slotとvalue-level assertionの区別を検討する非規範ドラフトです。
今回はこの境界だけを限定レビューしてください。

確認したいケースは次のとおりです。

1. Entity/Event/Extension-owned recordのfield slotを参照するケース
2. field slotの現在値が Alice から Bob に変更されるケース
3. 過去に存在した Alice という値についてのClaimまたはAssessmentを
   保持するケース
4. field slotだけを対象にする主張と、特定の値を対象にする主張が
   混同されないための最小条件
5. value-level assertionをReference本体の一部にせず、companion datum、
   Claim、snapshot recordなど別の情報として扱う場合の比較

特に次を評価してください。

- 「field slotのidentity」と「slotに現在格納されたvalue」は分離できて
  いるか
- 現在値の編集で過去の主張がsilent rewriteされないか
- EventやExtension-owned recordにも適用できる、Entityに偏らないか
- resolverの5状態とvalue-level assertionの意味を混ぜていないか
- 現在の研究用ハーネスのテストで不足している最小fixtureは何か

出力は次の形式にしてください。

- 妥当な点
- まだ混同している概念
- 最小限必要な情報境界
- 反例（Alice → Bobの編集、record replacement、field削除など）
- ハーネスへの最小テスト追加案
- 今は決めてはいけないこと

JSON Schema、正式Extension ID、Claim/Evidence/Assessmentの最終分割、
Core変更、Validator severity codeは提案しないでください。
また、Target Reference全体や4議題の再設計へ議論を拡張しないでください。
```

## Return handling

The returned review should be treated as a challenge to the conceptual
boundary. Codex will accept only changes that preserve:

- stable slot identity without pretending it is a historical value;
- explicit value-level information without forcing one future owner;
- unchanged resolver states; and
- preservation of unknown data and historical references.

After the review, Codex will create a short disposition and, if justified, add
only the smallest isolated harness fixture. No application or Validator
integration is authorized by this handoff.
