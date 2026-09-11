# LiaisonScape Initial-Layout Bounded Provider Contract Audit 1

Date: 2026-09-11

Status: CONTRACT CORRECTED; OPT-IN EVALUATION READY, PRODUCT ADOPTION HOLD

## Finding

The audit found one real contract mismatch. Candidate generation filtered
Relations to the Product-visible Entity projection, but the fallback helper
reused the raw input Relation array. The normal auto-layout implementation
itself ignored hidden endpoints, so the mismatch was not visible in the first
fixture results, but the provider boundary was not explicit or self-contained.

The fallback now receives the same projected Relation set as the candidate
path. Hidden Event/non-Entity endpoints therefore cannot affect either branch,
and fallback preserves the same graph-input authority as candidate generation.

## Terminology correction

The previous default result identity
`post-structural-relaxation-v1-prototype` was misleading: its implementation
was a bounded Node/label-envelope refinement and did not implement the
diagnostic Post materializer. It is now named
`label-envelope-v1-prototype`.

The coarse strategy remains explicitly named
`coarse-objective-prototype-v1`. Its objective is presentation-informed but
geometric and diagnostic-only; it is not presentation-independent, and it is
not the Post materializer. Routing, Relation-label placement, feedback, and
rendering remain outside the provider authority.

## Validation

- Product-visible Relation projection is now shared by candidate and fallback.
- Default provider output identity no longer claims Post equivalence.
- Coarse provider identity remains distinct from both the default envelope
  prototype and the diagnostic Post candidate.
- LiaisonScape tests: `350/350 PASS`.
- Lint: PASS.
- Production build: PASS.
- `git diff --check`: PASS.

## Classification

### PROVEN

- The fallback/candidate graph-input boundary is now aligned in code.
- Provider identity distinguishes the simplified envelope prototype, the
  coarse proxy prototype, and the diagnostic Post materializer.
- No Product default, App integration, routing, label, connector, or
  persistence behavior changed.

### STRONGLY SUPPORTED

- The provider contract is sufficiently explicit for opt-in Actual Product
  evaluation of the coarse strategy.
- Whole-result fallback remains the safe behavior for unsafe or budget-limited
  candidates.

### UNRESOLVED

- Post equivalence and coarse-specific visual-defect absence;
- arbitrary Dataset generality and larger/stress runtime behavior;
- stored/mixed-coordinate integration in the normal Product authority;
- Product adoption of either prototype.

## State

```text
provider contract audit       = PASS after correction
opt-in Actual Product eval    = READY AS NEXT GATE
Product default integration   = NOT STARTED
Product adoption              = HOLD
historical Fresh evidence     = UNCHANGED
new governed Fresh lineage    = NOT STARTED
push/release/deploy           = NOT PERFORMED
```
