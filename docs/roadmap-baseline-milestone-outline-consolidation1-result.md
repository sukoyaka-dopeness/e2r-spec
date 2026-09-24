# Roadmap baseline milestone outline consolidation 1 — result

Date: 2026-09-25

Status: **BOUNDED OUTLINE CONSOLIDATION COMPLETE / CURRENT BASELINE AND
EVIDENCE BOUNDARIES PRESERVED**

## Scope and authority

This checkpoint applies the Human-selected Roadmap anchor policy following
`c11319b` (`docs: canonicalize E2R-wide milestone planning`). It consolidates
only the five completed baseline milestone headings listed below. `docs/roadmap.md`
remains the sole current-planning authority. Dedicated specification,
acceptance, result, and maturity records remain the detailed evidence
authorities.

## Outline change

Before this change, `docs/roadmap.md` had 5,119 physical lines and 378 ATX
headings. The following five headings were grouped under one concise H3,
`Completed baseline milestones 1–5`, in the Current baseline section:

- `Completed design milestone 1: Specification Extension redesign`;
- `Completed implementation milestone 2: Validator interoperability model`;
- `Completed evidence milestone 3: Coordinate prototype`;
- `Completed design milestone 4: Coordinate draft 0.1.0`;
- `Completed implementation milestone 5: read-only Validator support`.

The consolidated summary preserves each milestone's recorded status and
boundary: Specification Extension Draft `0.1.0` is not Stable; Validator
interoperability is limited to its recorded read-only boundary; Coordinate
Prototype `0.1.0` remains a frozen experimental baseline, not Stable;
Coordinate Draft `0.1.0` remains a Draft candidate; and read-only Validator
recognition authorizes neither application writing nor migration. All prior
authority pointers remain present in the grouped summary.

After the change, the roadmap has 5,116 physical lines and 374 ATX headings.
The net change is four fewer headings; line count is not treated as the goal.
`Application evidence track`, its active Layout persistence experiment, and
the Cross-application checkpoint remain separate and unchanged.

## Anchor and reference review

A canonical-workspace scan for Markdown links to the five removed heading
anchors found no inbound matches in readable workspace files. This supports
removing those specific generated anchors under the Human-selected policy;
it is not a claim that external deep links do not exist. The old headings are
not retained as blank compatibility anchors. No other heading or anchor was
changed by this checkpoint.

All dedicated link targets in the consolidated summary were checked to exist.
No History migration was needed: the milestone summary remains relevant to
the current baseline because it states present maturity and non-authorization
boundaries.

## Validation and limits

- `git diff --check` passed.
- `npm run validate` passed.
- The roadmap H2 `Application evidence track` and all of its active/open
  responsibilities remain in place.
- No Stable promotion, application writing, migration, runtime, schema, or
  semantic decision was made. No sibling repository was changed.

This result records only outline consolidation; it does not authorize a wider
Roadmap restructuring or History taxonomy change.
