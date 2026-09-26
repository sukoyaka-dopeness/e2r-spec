# LiaisonScape Automatic Display Placement Final Bake-off 1

Date: 2026-09-16
Status: bounded candidate decision; production integration remains a separate工程

## Decision

Frontier-family is the current single-provider integration candidate for
coordinate-less Dataset automatic display. This checkpoint does not switch the
production default. Frontier is recommended for the next explicit integration
and visual-review preparation step, subject to the documented dense/runtime
risks below.

## Comparison set and pruning

The final comparison retains three existing current-source lineages:

- Frontier-12, including the current viewport-anisotropic spacing lineage;
- Post / constrained relaxation;
- G3 / structural portfolio lineage, including the current `.88 / 1.12`
  spacing and Stage-2-disabled form.

Topology-aware free-form is retained as a diagnostic lineage where it appears
in the shared comparison, but is not a competitive automatic-display provider:
it introduces canonical/public crossing regressions and label-route residuals
under the Product-authoritative gate. Historical Fast is not re-run: current
source and prior evidence place it as internal/emergency fallback material,
not a quality-competitive normal display provider. Explicit Auto Layout
portfolio selection is outside this checkpoint.

## Fixture matrix and evidence

The current-source comparison uses the same Dataset IDs, labels, locales,
renderer, and Product authorities for:

| Class | Fixtures |
| --- | --- |
| canonical/public | Lighthouse EN/JA, Apollo EN/JA, Titanic EN |
| label-heavy / locale | label-heavy JA-10 |
| dense topology | dense-k7-7 |

The comparison artifact is:

`e2r-liaison-scape/experimental/frontier-g3-post-current-source-comparison1/result-summary.json`

It records current-source candidate materialization, hard gates, Product
metrics, selection, and elapsed time. Existing Frontier Actual Product visual
sweep and Product preview artifacts provide the visual evidence boundary;
they show strong public/canonical geometry and no gross renderer or interaction
failure, while dense/long-label controls retain visible label-corridor and
congestion risks. This is sufficient to prepare a formal review candidate, not
to declare Human Review complete.

## Bake-off result

Frontier has the best overall evidence for automatic display:

- zero crossing and Node-overlap regressions on the canonical/public controls;
- deterministic current-source materialization and repeated-result evidence;
- generally balanced extent/aspect and stronger Product-authoritative
  selection than free-form alternatives;
- lower observed candidate-generation/presentation cost than Post and G3 in
  the comparison, approximately 0.62–0.77 seconds on the public controls and
  approximately 1.52 seconds on label-heavy JA.

Post remains a meaningful diagnostic comparator. It can improve compactness or
crossing/spacing on individual controls, but has higher cost and does not
consistently improve the full Product result. G3 contributes candidate
diversity and spacing variation, but does not establish a better single
automatic-display contract. Free-form is rejected by hard crossing gates in
canonical/public evidence.

The dense control is the limiting envelope. Frontier remains the strongest
candidate, but the full Product presentation still exposes label-corridor
deficits, short-hop/congestion trade-offs, and approximately multi-second
execution (about 4.0 seconds in the recorded dense comparison). This is not
an acceptable basis for claiming an unrestricted performance guarantee.

## Classification

`A/B/C QUALIFIED: FRONTIER SINGLE-PROVIDER CANDIDATE ESTABLISHED FOR NEXT INTEGRATION / DENSE PRESENTATION AND PERFORMANCE RISKS REMAIN`

The evidence is sufficient to close the candidate bake-off without inventing
another solver family. It is not sufficient to silently change the production
default, claim all dense graphs are acceptable, or skip visual acceptance.

## Provider and fallback position

Recommended next state:

- Frontier: sole normal automatic-display integration candidate;
- Fast: internal/emergency fallback only, unless a future reliability case
  specifically requires it;
- Post/G3/free-form: retained as research comparators, not normal providers;
- current production switch: not performed here.

## Remaining risks and follow-up

- formal visual review of Frontier across public, locale, label-heavy, and
  dense controls;
- dense/long-label Product presentation quality and runtime boundary;
- integration-specific lifecycle and reset/error fallback checks;
- explicit operational policy for when a bounded fallback is used.

Node-label recovery, Product settling, Self-loop joint collision quality,
Explicit Auto Layout, Workerization, and Adaptive Cascade remain separate
tracks.

## Validation

Current-source comparison and existing focused placement tests were reviewed;
no production source was changed. LiaisonScape full tests, lint, and build
passed; `e2r-spec` validation and `git diff --check` passed.
