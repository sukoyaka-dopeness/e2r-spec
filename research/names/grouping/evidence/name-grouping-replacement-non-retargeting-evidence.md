# Names Grouping — Replacement Non-Retargeting Evidence

Date: 2026-08-14

Status: Research evidence checkpoint; non-normative

## Scenario

Grouping rationale `R1` contains P1 expressions `N1`, `N2`, and `N3`.
Expression `N2 = Tokyo` undergoes a substantive replacement, producing new
expression identity `N4`. `N4` may share Entity, language, script, or similar
text with `N2`.

## Required behavior

- preserve the original `N2` membership reference;
- do not automatically retarget membership to `N4`;
- do not infer replacement from Entity, language, script, or text similarity;
- keep a later missing `N2` target distinguishable from `N4`; and
- preserve rationale `R1` without creating new grouping meaning.

This is a representation-independent guardrail. It does not define replacement,
redirect, lifecycle, or migration semantics.

Fixture: `../../../../../../../examples/research/names/name-grouping-replacement-non-retargeting.json`
