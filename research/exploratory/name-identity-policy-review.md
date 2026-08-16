# Name Identity Policy Review

Date: 2026-08-14

Status: Research gate; non-normative

## Purpose

The Name lifecycle review found that L1 is safest when a substantive
expression replacement creates a new identity. This bounded review examines
which changes may be substantive:

- text expression;
- language;
- script;
- naming-kind;
- context or community; and
- presentation metadata.

It does not define Name payload fields, an ID algorithm, a Names Extension, or a
Validator rule.

## Identity layers

The following concepts must remain separate:

```text
Core Object identity
Name record identity
Name expression value
Name-to-Object binding
language/script/naming-kind metadata
context or community applicability
external identity
presentation preference
```

Core `name` is a human-readable Core label and is not a Name record identity.
Equal text, equal URLs, or equal display output cannot establish identity
equivalence.

## Candidate identity policies

### Policy P1 — Expression identity

Name identity represents one substantive expression together with the
properties needed to distinguish it, potentially including language, script,
and naming-kind. A substantive change creates a new Name identity.

**Strengths**

- Historical applicability can continue to target the old expression.
- Alice→Bob, language changes, and script changes are visible identity events.
- Old and new records can coexist without generic redirect.

**Risks**

- The boundary between substantive and cosmetic metadata needs domain rules.
- Naming-kind and context may be incorrectly treated as expression identity
  when they are actually applicability qualifiers.
- Record count and replacement metadata increase.

### Policy P2 — Subject/binding identity

Name identity represents a stable Name-to-Object binding or enduring naming
subject. Expression, language, script, naming-kind, and context are mutable or
versioned values under that identity.

**Strengths**

- A stable binding is convenient for ordinary editing.
- Variants and translations can remain grouped.
- A separate expression-version model can preserve history.

**Risks**

- A reference to the stable binding does not identify which expression was
  historically applicable.
- Applicability, expression version, and current value need additional
  identity or snapshot semantics.
- It risks making one record an underdefined container for unrelated meanings.

### Policy P3 — Hybrid expression plus binding

An enduring binding identity and independently identifiable expression records
coexist. Historical applicability targets expression records; applications may
also navigate through the binding.

**Strengths**

- Separates “Name for this Object” from “this expression was used.”
- Supports translation, script variants, naming-kind, and replacement history.
- Makes historical value targeting explicit.

**Risks**

- Adds two identity layers and relationship rules.
- Binding-level assertions may be confused with expression-level assertions.
- It is larger than the current Name-specific baseline.

## Change classification

| Change | P1 expression identity | P2 binding identity | P3 hybrid | Current guardrail |
| --- | --- | --- | --- | --- |
| Cosmetic display note | Preserve ID | Preserve ID | Preserve binding/expression IDs | No historical rewrite |
| Text Alice→Bob | New ID | Same binding, value ambiguity | New expression ID | Treat as substantive unless proven otherwise |
| Language change | Usually new ID or explicit variant | Same binding, version/value needed | New expression/variant ID | Never infer equivalence |
| Script change | Usually new ID or explicit variant | Same binding, version/value needed | New expression/variant ID | Require explicit policy |
| Naming-kind change | New ID if it changes represented expression | Same binding only if domain says so | New expression or typed variant | Do not merge by text |
| Context/community change | Applicability qualifier unless expression differs | Binding/context value | Binding or applicability relation | Keep context distinct |
| External identifier change | Not Name identity by itself | Not Name identity by itself | Not Name identity by itself | External identity is separate |

“Usually” in this table is a research guardrail, not a final normative rule.

## Provisional policy

For independently referenceable Name records, adopt the following provisional
rule:

1. Preserve identity for cosmetic edits that do not change the represented
   expression.
2. Treat a substantive text, language, or script replacement as requiring a
   new identity or an explicit variant/version decision.
3. Do not infer that naming-kind or context changes are identity-preserving;
   require domain-specific classification.
4. Keep external identifiers and display preferences outside Name identity.
5. Preserve old applicability references and do not redirect them generically.
6. If a mutable identity is retained, require explicit value-level information
   when historical exact expression matters.

This is a conservative L1-oriented guardrail. It does not reject P2 or P3 for
future Names research.

## Diagnostic implications

An aware reader should distinguish:

- a resolved Name record identity;
- whether the current expression is the historically intended expression;
- whether language/script/naming-kind/context are supported;
- whether an explicit value-level datum exists; and
- lifecycle context such as retired or replaced.

These are separate axes. The five Target Reference resolver states remain
unchanged and must not be expanded with `historical-value-uncertain` or
`substantive-edit` states.

## Evidence required before final policy

Compare at least two Name-consuming workflows:

- historical timeline naming;
- multilingual or multiscript Entity naming;
- legal, official, or naming-kind-sensitive records; or
- research provenance that cites exact historical expressions.

The evidence should show whether P1 is sufficient, whether P2 grouping is
needed, and whether P3's second identity layer provides practical
interoperability value. It must include old-value preservation, unknown fields,
replacement, and partial-support behavior.

## Deferred questions

- exact language and script identity vocabulary;
- naming-kind semantics;
- context/community ownership;
- Name-to-Object binding representation;
- expression version and replacement metadata;
- value snapshot ownership and representation;
- external identifier mapping; and
- final Names Extension and temporal applicability integration.

## Next step

The multilingual and naming-kind fixture review is recorded in
`name-identity-multilingual-fixtures.md`, with internal notation at
`examples/research/names/name-identity-multilingual-fixtures.json`. The
read-only harness is:

- `research/exploratory/name-identity-multilingual-diagnostic-harness.mjs`
- `research/exploratory/name-identity-multilingual-diagnostic-harness.test.mjs`

Its six tests confirm that language/script do not prove equivalence,
naming-kind remains distinct from display preference, context requires an
explicit policy, Alice→Alicia preserves old meaning without redirect, and
unknown vocabulary remains preservable.

The two-workflow evidence checkpoint is recorded in
`name-identity-workflow-evidence.md`, with internal notation at
`examples/research/names/name-identity-workflow-evidence.json`. The read-only
harness is:

- `research/exploratory/name-identity-workflow-evidence-harness.mjs`
- `research/exploratory/name-identity-workflow-evidence-harness.test.mjs`

Its six tests confirm that P1 is the strongest current fit for historical
timeline naming, while P2/P3 provide grouping tradeoffs for multilingual
display/search without erasing variants.

The next decision is recorded in `name-grouping-design-gate.md`: multilingual
grouping warrants a separate, bounded Names design gate, while P1 remains the
conservative baseline and P2/P3 remain candidates only. No Name editing or
identity migration should be added to an application yet.
