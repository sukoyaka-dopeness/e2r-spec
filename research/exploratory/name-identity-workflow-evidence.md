# Name Identity Workflow Evidence

Date: 2026-08-14

Status: Research evidence checkpoint; non-normative

Related research:

- `name-identity-policy-review.md`
- `name-identity-multilingual-fixtures.md`
- `name-lifecycle-and-historical-value-ownership.md`

## Purpose

This checkpoint compares P1 expression identity, P2 binding identity, and P3
hybrid identity against two concrete Names-consuming workflows:

1. historical timeline naming; and
2. multilingual Entity display and search.

The comparison measures practical interoperability value. It does not select a
final Names payload, identity algorithm, Extension, or migration behavior.

## Workflow A — Historical timeline naming

### User need

A timeline application displays the Name expression that applied to an Entity
during a historical interval. A later expression replacement must not rewrite
the old historical display.

### Required meaning

```text
Expression N1 was applicable to Entity E during I1.
Expression N2 was applicable to Entity E during I2.
```

The target must identify the expression whose historical meaning is intended,
not merely a mutable Name-to-Entity binding.

### Policy comparison

| Policy | Interoperability value | Main burden | Result |
| --- | --- | --- | --- |
| P1 expression identity | Old and new expressions resolve independently; old applicability remains stable | Substantive edit classification and replacement records | Strongest current fit |
| P2 binding identity | One binding is easy to navigate, but historical expression requires version or snapshot | Value-level ownership and version selection | Conditional; unsafe without explicit value data |
| P3 hybrid | Stable binding plus expression-level historical targets | Two identity layers and binding rules | Strong but larger than needed |

### Evidence result

P1 provides the smallest direct reproduction of the historical workflow. P3
adds useful grouping only if the application must navigate an enduring binding
separately from expressions. P2 does not preserve historical expression value
by identity alone.

## Workflow B — Multilingual Entity display and search

### User need

An application displays and searches an Entity using English, Japanese,
original-script, transliterated, short, and official expressions. The user may
group variants under one Entity while retaining language, script, naming-kind,
and context distinctions.

### Required meaning

```text
Expressions N-en, N-ja, and N-translit are usable representations associated
with Entity E; they are not necessarily the same expression identity.
```

Display preference and search matching must not merge identities or rewrite
historical applicability.

### Policy comparison

| Policy | Interoperability value | Main burden | Result |
| --- | --- | --- | --- |
| P1 expression identity | Clearly preserves language/script/naming-kind variants | Requires explicit grouping or binding relation for convenient navigation | Strong preservation, weaker grouping convenience |
| P2 binding identity | Naturally groups variants for display/search | Historical and expression-level meaning requires versions or snapshots | Strong grouping, conditional historical safety |
| P3 hybrid | Provides grouping and expression-level identity together | Additional identity and relationship vocabulary | Best feature coverage, highest complexity |

### Evidence result

P2 or P3 may provide practical grouping value that P1 alone does not. This
does not make the variants one identity: grouping and expression identity must
remain separate. The current evidence does not show that every Dataset needs a
stable binding layer, so P3 is not promoted as the default.

## Cross-workflow comparison

| Requirement | Historical timeline | Multilingual display/search | Policy pressure |
| --- | --- | --- | --- |
| Preserve old expression after edit | Essential | Useful | P1/P3 favored |
| Group variants under one Entity | Helpful | Essential in many applications | P2/P3 favored |
| Independent historical applicability target | Essential | Sometimes needed | P1/P3 favored |
| Simple current editing | Less important | Important | P2 favored |
| Low identity complexity | Important | Important | P1 favored |
| Explicit value snapshot burden | Avoid if possible | Usually avoid | P1/P3 favored |

## Provisional evidence conclusion

The workflows show a real tradeoff rather than one universally superior policy:

- P1 is the safest default for independently referenceable historical Name
  expressions.
- P2 has practical value for grouping multilingual variants, but it requires
  explicit expression version or value-level semantics before historical use is
  safe.
- P3 combines both benefits, but its second identity layer needs evidence that
  the grouping value justifies the added interoperability burden.

The current recommendation remains a conservative P1-oriented baseline, with
P2/P3 as workflow-specific research candidates. A future Names design may
support grouping without making grouping identity equivalent to expression
identity.

## Preservation and partial support

A reader that understands only P1 must preserve P2/P3 grouping or binding data
as unknown or unsupported rather than flattening variants into one Name. A
reader that understands P2/P3 must preserve P1 expression identities and old
applicability references.

Unknown language/script/naming-kind metadata is not a missing Name. Current
value edits do not rewrite historical value data. Replacement, merge, split,
retirement, and deletion remain owner-specific lifecycle operations; generic
readers do not redirect or cascade.

## Deferred questions

- whether multilingual grouping is a sufficiently broad interoperability need;
- Name-to-Entity binding representation;
- expression version and replacement metadata;
- value snapshot ownership;
- naming-kind and context vocabularies;
- search matching and display preference responsibilities; and
- final Names Extension and temporal applicability integration.

## Research fixture

The internal workflow evidence notation is:

- `examples/research/names/name-identity-workflow-evidence.json`

It is not an E2R Dataset or a final identity policy.

## Next step

Use a read-only workflow evidence harness to verify the policy matrix and then
decide whether P2/P3 grouping warrants a separate Names design gate. Do not add
Name grouping or migration behavior to an application yet.
