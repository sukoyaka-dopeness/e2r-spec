# E2R Session 0055 - Bounded Screening Formulation / Finalist Recall 1

Date: 2026-09-14

## Scope

This session records a bounded finalist-screening checkpoint after Bounded
Quality-Solver Benchmark 1. It does not add a placement solver family or
change Product integration, routing, labels, Self-loops, endpoint planning,
viewport behavior, Dataset/persistence, coordinate authority, or manual
semantics.

## Completed checkpoint

The same 12 fixtures and 39 bounded operations reproduced the previous cheap
top-4 exact-best recall at `20/26`. A deterministic lexicographic formulation
using only candidate geometry and Dataset graph/label-demand signals improved
top-4 exact-best recall to `24/26`, retained at least one Product top-3
candidate in `26/26`, and retained all 24 oracle baseline-improving operations.

The simulated Product evaluation count fell from 311 oracle candidates to 104
K=4 finalists. Measured oracle Product presentation time was `32,324.28ms`;
the proportional finalist estimate was `10,685.15ms`. Cheap screening measured
about `1.216ms` median and `4.682ms` maximum.

Two meaningful failures remain in `dense-k7-7` and `dense-k5-9`. The missed
Product-best and retained grid candidates are indistinguishable under the
tested cheap geometry summaries while Product routing differs by nine and
seven crossings. K=6 does not recover them. Pareto and family-diverse
retention performed worse than the lexicographic rule.

Classification: `B. RECALL IMPROVED BUT NOT CLOSED`.

The next valid architecture question is a narrowly gated one/two-candidate
complete Product probe for cheap-equivalent or high-risk classes. Cheap-only
production selection, quality solver/provider selection, Product integration,
Actual Product visual review, and Human Review do not advance.

## Standing status

- execution split: `PROVISIONALLY ADOPT`;
- quality solver: `HOLD / NOT ESTABLISHED`;
- Product integration/default: `HOLD`;
- production provider: `NOT ESTABLISHED`;
- Adaptive Cascade: `INACTIVE`;
- Human Review: `NOT READY`; and
- Initial Layout Release blocker: `OPEN`.

The authoritative result is recorded in
`docs/liaisonscape-bounded-screening-finalist-recall1-result.md`.

Existing unrelated dirty work from Session 0054 remains preserved. No push,
tag, release, deploy, or publication was performed.

`SESSION-0055 CHECKPOINT - SCREENING RECALL IMPROVED; DENSE CHEAP-EQUIVALENCE
BOUNDARY OPEN`
