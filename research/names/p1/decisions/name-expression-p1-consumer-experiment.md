# P1 Name Expression — Minimal Consumer Experiment

Date: 2026-08-14

Status: Proposed evidence experiment; non-normative

## Consumer

A NarrativeLine-like reader displays an Entity using independent
P1 expressions such as `東京`, `Tokyo`, and `Tōkyō`. The experiment does not
write or infer Grouping.

The fixture's `kind` marker is an opaque research annotation only; this
experiment does not define a naming-kind vocabulary.

The opaque round-trip check is a conceptual preservation contract, not an
integration test of a real Names-unaware serializer. Entity search discovery
is also outside this harness and requires a separate bounded experiment.

## Questions

- Can each expression remain independently addressable?
- Can language/script metadata be preserved without identity inference?
- Does a previously classified non-substantive edit that leaves the intended
  expression unchanged retain expression identity?
- Does a substantive replacement create a new identity without retargeting old
  references?
- Can a Core-only or Names-unaware reader preserve the data opaquely?

## Boundary

This experiment tests P1 expression usability only. It does not define search
ranking, display preference, Grouping, context ownership, naming-kind vocabulary, temporal
applicability, Payload, or Extension ID.

## Conceptual fixture

`../../../../examples/research/names/name-expression-p1-consumer-experiment.json`

Read-only harness:

- `tools/name-expression-p1-consumer-experiment-harness.mjs`
- `tools/name-expression-p1-consumer-experiment-harness.test.mjs`
