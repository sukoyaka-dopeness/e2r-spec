# P1 Name Expression — Entity Discovery Evidence

Date: 2026-08-14

Status: Bounded conceptual evidence; non-normative

## Question

Can an application discover the same Entity through any of its independently
addressable P1 expressions, without treating the expressions as one identity?

## Scope

The conceptual search operation maps exact expression values `東京`, `Tokyo`,
and `Tōkyō` to Entity `E1`. It does not define ranking, preferred display,
fuzzy matching, transliteration equivalence, Grouping, or naming-kind
semantics.

## Evidence boundary

This is a read-only conceptual harness, not an implemented search index or
application integration test. It demonstrates only independent expression
discovery through explicit values.

Fixture: `../../../../examples/research/names/name-expression-p1-entity-discovery.json`
