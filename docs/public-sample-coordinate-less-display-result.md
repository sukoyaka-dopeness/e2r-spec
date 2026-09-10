# Public Sample Coordinate-less Display Result

- Date: 2026-09-11
- Status: `IMPLEMENTED / LOCAL VERIFICATION PASS`
- Scope: Hub-linked public Sample Datasets consumed by LiaisonScape

## Decision

The Hub-linked public samples are distributed without saved LiaisonScape
Coordinate or placement data. This makes the public sample path exercise the
current LiaisonScape automatic initial-placement behavior instead of replaying
curated positions from the Dataset.

This is a public-sample distribution decision, not adoption of an initial-layout
research candidate. Automatic placement remains Derived application state;
explicit user save remains the existing Coordinate writer boundary.

The earlier coordinate-less comparison audit recorded that stored Lighthouse
coordinates were preferable to the then-current derived presentation. That
historical research result is preserved. This checkpoint intentionally changes
the public-sample exercise contract so the automatic-placement experience is
available for user inspection; it does not claim that the current algorithm is
the final layout-quality solution.

## Public source inventory

Hub's current five sample cards reference ten locale-specific Dataset URLs:

| Sample pair | Source used by Hub | Coordinate-less action |
|---|---|---|
| Berlin Wall EN/JA | NarrativeLine `src/sample/` | already coordinate-less; unchanged |
| Apollo 11 EN/JA | e2r-spec `examples/` | removed Dataset and Entity Coordinate payloads |
| Lighthouse EN/JA | LiaisonScape `public/` compatibility URL; e2r-spec is canonical | removed payloads from canonical and mirror |
| Ashen Crown EN/JA | e2r-spec `examples/` | removed Dataset and Entity Coordinate payloads |
| Titanic Final Voyage EN/JA | e2r-spec `examples/` | removed Dataset and Entity Coordinate payloads |

Hub URL references and application routing were not changed. The existing
Lighthouse raw URL remains compatible, and its mirror remains byte-identical
to the e2r-spec canonical file after the change.

## Preservation boundary

Only the draft Coordinate extension, its per-Entity values, and the matching
Specification `uses` declarations were removed from the eight e2r-spec public
files and the two Lighthouse mirror files. Core `Dataset`, `Entity`, `Event`,
and `Relation` content, localized text, Metadata, History, and Lighthouse
Presentation payloads were retained. Berlin Wall was not edited.

Coordinate schemas, Coordinate examples, diagnostic fixtures, visual research
fixtures, and historical/governed evidence were not changed. No runtime routing,
label, feedback, or initial-layout implementation was changed.

## Verification

- all ten Hub-linked JSON files parse;
- eight e2r-spec canonical pairs contain no Coordinate extension or placement
  values;
- Berlin Wall remains coordinate-less;
- Lighthouse canonical and compatibility mirror remain byte-identical;
- EN/JA structural parity remains intact;
- production Validator, e2r-spec validation, LiaisonScape tests/lint/build, and
  Hub tests/lint/build are required gates;
- actual LiaisonScape Product inspection opens the Lighthouse sample in EN and
  JA and shows the localized application surface, including the automatic
  placement path; transient loading text is validated by the existing delayed
  loading integration coverage.

Historical governed evidence and the canonical Fresh12 Human Review result are
unchanged. No new governed Fresh lineage, push, tag, release, deployment, or
publication was started.
