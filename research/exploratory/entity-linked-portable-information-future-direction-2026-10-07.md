# Entity-linked portable information: future direction and Research context

Date: 2026-10-07

Status: **HUMAN-STATED FUTURE DIRECTION / RESEARCH CONTEXT — NON-NORMATIVE / NO NEW PORTABLE SEMANTICS ADOPTED**

## Purpose and authority

This record preserves the future application and data-model direction clarified
by Human after the [Entity-linked portable information responsibility audit](entity-portable-information-responsibility-audit-2026-10-07.md).
That audit remains a bounded responsibility audit and decision-preparation
record; this Research context does not convert its open questions into adopted
owners, schemas, or interoperability rules.

The E2R Core and registered Extensions remain specification authority. The
[Dimension Assessment Extension Candidate 0.1.0](../../extensions/dimension-assessment-extension-candidate.md)
remains Human-adopted and non-Stable, with its existing assessment-only
semantics unchanged. Nothing here authorizes runtime, sample, Core, Extension,
schema, or Validator changes.

## Future information direction

The future direction is to let an Entity carry multiple simultaneous
Classification or Concept assignments, for example `Person`, `Character`,
`Human`, and `Knight`, or `Sword`, `Artifact`, and `Character`. These examples
are not a Classification taxonomy or a proposed payload. Classification will
not by itself require particular Dimensions or Quantities: being a Person does
not mandate Height, and being a Sword does not mandate Length.

Applications may eventually offer useful parameter sets or comparison
contexts such as Person View, Sword View, or Castle View. Whether these are
portable templates, recommendations, applicability data, or only
ParameterPlotter configuration remains open.

ParameterPlotter's intended comparison responsibility is broader than
visualizing assessments alone: future product work may need to compare numeric
parameters that include absolute quantities such as age, height, weight,
distance, amounts possessed, money, or fictional reserves. These examples do
not belong in Dimension Assessment Candidate 0.1.0 by implication. The
responsibility split among Quantity, Measurement, and Observation remains a
Human/specification decision gate.

A future Character Sheet is a possible consumer that presents diverse
numeric and non-numeric information about one Entity. It is not currently a
dedicated schema owner or a reason to introduce a universal Attribute or
Property bag. It may aggregate several independently owned responsibilities,
including Classification, Quantity, Assessment, History, Relation, Semantic /
Dictionary, and Source / Citation / Provenance. Research must determine
whether existing owners suffice or a separate portable owner is needed for
information not covered by them.

Source, Citation, Evidence, Provenance, and Confidence are potential
cross-cutting responsibilities that may need to target Assessments,
Quantities, Classifications, or other portable facts. The time at which a fact
holds or a classification applies must remain distinct from the time it was
recorded, measured, or assessed.

## Research probe and sample boundary

The Ashen Crown is the selected main concrete sample direction for
ParameterPlotter and a possible future Character Sheet, and may serve as a
cross-consumer probe. Its narrative descriptions do not authorize inferring
Dimension, Assessment, Quantity, or Classification facts. Any such semantic
sample data must be Human-authored or Human-approved. No sample Dataset content
is changed by this record.

## Current ParameterPlotter Product decisions

Human selected **ParameterPlotter** as the formal Product name. Dataset title
editing is in the initial Product and must use the existing Metadata
responsibility; no new top-level Dataset name is introduced. The Ashen Crown is
the selected main sample direction, without selecting or authoring its
semantic values.

The selected Japanese core UI terms are:

| English | Japanese |
| --- | --- |
| Dimension | 評価軸 (軸 in narrow context) |
| Assessment | 値 |
| Profile | プロファイル |
| Radar | レーダー |
| Quadrant | 四象限|
| Matrix | マトリクス |

This vocabulary does not settle all dialog, confirmation, error, or empty
state copy. Those strings require actual comparison with NarrativeLine and
LiaisonScape. Home and Dataset acquisition should follow their current
application pattern: show Continue Editing only when recoverable browser-local
work exists, and provide New Dataset, Open E2R Dataset, and Open Sample
Dataset. Shell styling should follow accepted/current NarrativeLine and
LiaisonScape evidence rather than create a third visual language. Exact CSS
tokens, DOM, and breakpoints remain implementation choices.

### Superseding persistence and portable-save direction

Browser-local automatic persistence and same-browser/profile recovery remain
in the initial Product. **Download Workspace Backup and Restore Workspace
Backup are removed from the initial Product direction.** The prior Human
decision selecting browser-local persistence plus a self-contained
user-managed Workspace Backup/Restore is superseded as current policy; its
dated decision record remains historical evidence.

Portable saving and exchange use **E2R Dataset JSON**. Same-browser/profile
continuity and incident recovery use browser-local persistence. These are
separate responsibilities: browser-local persistence is not a portable
Dataset export, and Dataset JSON does not promise restoration of
application-only presentation state. The existing requirement to make storage
failure visible and never present memory-only work as saved remains. Exact
retry and degraded-recovery UX is not decided here.

Dataset replacement, reload, and exit protection already selected for
loss-sensitive work remains in force. Removing Workspace Backup does not
remove explicit loss warnings or turn browser-local save status into E2R
Dataset Export status. It also does not create a new recovery guarantee after
browser storage is unavailable or lost.

Workspace Backup/Restore removal was Human-accepted for ParameterPlotter source
`34f72fad67b9d59b011dbad3880ff0f5a09a0f45`; the [acceptance record](../../../e2r-parameter-plotter/docs/workspace-backup-removal-human-acceptance-2026-10-07.md)
records the Human browser evidence and the checks not run. The earlier broad
successor functional acceptance remains tied to its recorded source revision
and does not transfer to this correction. Formal Product identity was applied
later at local source `2940b3fbf390e185781f3844f263bfe9401757c5`; that identity
correction has not received a new broad functional acceptance. Browser storage
failure injection remains NOT RUN.

## Open Research and Human decision gates

The following remain open and are not settled by this future-direction record
or by the preceding audit:

- whether a generic Attribute/common value carrier is needed;
- how Assessment, Quantity, Measurement, and Observation responsibilities
  divide;
- portable Classification representation and its relationship to Dictionary
  / Semantic;
- how Source / Citation / Provenance targets facts and at what granularity;
- whether parameter applicability or saved comparison templates are portable
  or application configuration;
- whether a Character Sheet can aggregate existing owners or needs another
  portable owner;
- how fact validity time differs from recording, measurement, and assessment
  time in any future owner;
- exact cross-app wording and sample semantic content/provenance;
- exact browser-local storage-failure recovery and retry behavior.

These questions must be researched and returned for Human decisions before
their semantics are specified. This record adopts no new portable semantics,
identifier, version, schema, migration, or implementation.
