# E2R Visual Evidence Early Smoke Check Policy

Date: 2026-09-08

Status: `ACCEPTED PROCESS POLICY / NON-NORMATIVE`

## Purpose

Visual-output work must include a lightweight human visual sanity check before
the work becomes expensive to regenerate or formally review. This policy is a
process boundary for application and evidence workflows. It does not change
the E2R Core, an Extension, Browser Evidence semantics, or a formal acceptance
contract.

## Decision

Before a visual workflow enters a high-cost stage such as a large candidate
matrix, long real-browser capture, or formal review, the responsible workflow
should inspect the first trustworthy visual output, or a deliberately small
set when one output is not representative. The check is intended to detect
gross defects early, not to select a candidate or issue acceptance.

The lightweight check may be skipped only when no trustworthy visual output is
available at that point or when the work is demonstrably cheap to repeat. The
workflow records that reason instead of silently treating the check as passed.

## Diagnostic and authoritative boundaries

The following stages remain distinct:

```text
diagnostic visual smoke check
authoritative Human Review
ranking
selection
formal acceptance
```

A smoke check records observations such as `SMOKE-PASS`, `DEFECT-SEEN`, or
`INDETERMINATE`. It does not create VSR criterion judgments, a review result,
a ranking, a winner, or a PR-3 decision. Conversely, a prohibition on formal
acceptance does not prohibit ordinary diagnostic inspection.

Machine results such as capture success, hashes, integrity, telemetry,
cleanup, quiescence, and schema validation establish machine properties only.
They do not establish readable labels, usable viewport extent, recognizable
initial presentation, or other human visual properties.

## Minimum procedure

1. Identify the next expensive visual stage and choose one trustworthy output
   that is representative of its viewport, locale, and presentation path.
2. Preserve the source output and record its identity, path, hash, viewport,
   and relevant run or fixture binding before inspecting it.
3. Inspect the actual output at its intended viewport and ordinary viewer
   zoom. Check at least label readability, content scale, viewport use,
   clipping or displacement, and whether the graph, timeline, or diagram is
   recognizable.
4. Record only direct observations. Do not turn an observation into a root
   cause such as a fit, camera, layout, or coordinate-normalization bug until
   separate evidence establishes that cause.
5. If a gross defect is visible, stop the expensive stage and open a bounded
   diagnostic or correction checkpoint. Do not repair the source or rewrite
   historical evidence as part of the smoke check.
6. Proceed to the expensive stage only when the smoke check has no unresolved
   gross defect, or when the responsible workflow has recorded why the check
   was legitimately skipped.

The check should remain small. One representative output is normally enough
to catch a global scale, viewport, clipping, or displacement failure. Add
another output only when locale, fixture role, rendering path, or state could
materially change the visual risk.

## Presentation and evidence handling

The inspected output must be a trustworthy rendered output, not a source-only
inference or a metadata substitute. A crop, zoom, or annotation may be made to
explain an observation, but it is a derived presentation and must be labeled
as such. It must not be added to an authoritative artifact index or used as a
replacement for the source image.

The smoke check does not authorize B1/V3 reruns, new lineage creation, ranking,
selection, formal acceptance, publication, or release actions. Those actions
retain their existing authorities.

## Prompt and task-design principle

Instructions for Codex or another agent should state the positive objective
and only the safety boundaries needed to protect irreversible actions,
historical evidence, security-sensitive state, or external publication. They
should explicitly distinguish “do not issue formal acceptance” from “do not
inspect for diagnosis.” Large lists of unrelated prohibitions should not close
an otherwise safe, low-cost inspection path.

## Fresh12 process evidence

Fresh12 provides the motivating process example. Its B1/V3 execution,
integrity, artifact binding, and review start gate passed. The first inspected
cell nevertheless showed a gross visual problem: effectively unreadable
labels, extreme shrinkage relative to the 1280x900 viewport, and a narrow
diagonal distribution with extensive unused space. The canonical Human Review
result therefore became `BLOCKED` at 1/80 cells.

This establishes the process lesson that machine PASS and formal-review
readiness are insufficient substitutes for an early visual smoke check. It
does not, by itself, prove the implementation root cause or authorize a
source correction. The canonical Fresh12 review result and all Fresh12
artifacts remain immutable.

## Relationship to existing authority

This policy is additive to the VSR visual criteria and the
`VSR-REVIEW-RESULT-v1` authority. A smoke check may precede formal Human
Review; it must not be represented as that review. The authoritative review
result remains write-once, and ranking, selection, formal PR-3 acceptance, and
publication remain separate checkpoints.

Application-specific workflows may refine representative-sample choice and
record format. This policy does not prescribe a universal pixel threshold or
a fixed repository file layout.
