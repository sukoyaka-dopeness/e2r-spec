# ParameterPlotter old Tab C — historical disposition

Status: **HUMAN-ADOPTED DISPOSITION / ROOT CAUSE UNRESOLVED** (2026-10-19).

## Evidence and changed operating model

The [original four-tab Human Browser observation](../../../e2r-parameter-plotter/docs/stale-writer-export-reload-recovery-verification-2026-10-11.md) records that Tab C's Continue Editing was followed by replacement-refusal and save-stopped notices. Its triggering path and root cause were not established; the later C8/C10 attempts were not valid reproduction or PASS evidence. The historical M1-C6 recovery acceptance explicitly excluded this transition.

The later [Single Active Editor contract](parameterplotter-single-active-editor-design-2026-10-14.md) replaced the ordinary two-editable-tab model with an owner and dedicated non-owner view. Its [bounded formal acceptance](parameterplotter-single-active-editor-final-acceptance-decision-packet-2026-10-17.md) did not resolve the old Tab C cause. In a separate 2026-10-19 Human Browser report for the current SAE normal route (reported ParameterPlotter source `6a22ac0aeedf9d3a7310d4d826ddb8963564fe54`), Tab A applied a test title and showed Saved locally; Tab B showed non-owner guidance without ordinary editing controls; Tab A returned through Home and Continue Editing with its title retained while B remained non-owner. No new Tab C-like refusal/save-stop notification was reported in that bounded two-tab run. The screenshots support visible UI only; the navigation sequence and absence of a new notice are Human-reported operations. This does not identify the old root cause or cover every ownership/timing condition.

## Human decision

Human adopted these separate conclusions:

1. Keep the old Tab C as a historical incident with root cause **UNRESOLVED**. Do not label it FIXED, RESOLVED, or CLOSED.
2. Keep the current SAE normal-route Human Browser PASS limited to its reported two-tab operations, independent of the old incident and of wider Cross-Context Workspace Safety.
3. The old incident is **not an independent blocker to ParameterPlotter Product Acceptance at this time**. This is a disposition of the historical evidence, not a claim that the old cause was found or every current race is safe.

Cross-Context Workspace Safety overall remains **PENDING**. ParameterPlotter Product Acceptance remains **PENDING** and Public Release **NO-GO**. A new reproducible data-loss, ownership, or save-status contradiction in the current SAE model would require its own safety evaluation; this decision does not pre-accept such a result.
