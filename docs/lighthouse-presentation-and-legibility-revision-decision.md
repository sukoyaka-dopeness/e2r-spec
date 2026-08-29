# Lighthouse Presentation and Legibility Revision Decision

- Date: 2026-08-30
- Status: `READY — LIGHTHOUSE PRESENTATION AND LEGIBILITY REVISION DEFINED`
- Scope: decision and diagnostic only. No JSON, runtime, routing, label code,
  Coordinate, Validator, schema, or application change is authorized.

## Triggering browser observations and user feedback

The current Lighthouse sample is readable overall, but the Japanese
`旧港の灯台` node-label is visibly crossed by an Edge. The user also observed
that `friends with` is better represented by `友人`, and that a dashed
`supervises` line suggests a distinction that is not semantically justified.
The sample should show a coherent visual vocabulary, not merely enumerate every
Presentation token.

## Public GitHub evidence and local source authority

The public LiaisonScape repository was inspected read-only for its published
Lighthouse EN/JA samples and graph implementation. The public repository may
lag local unpushed work. The local accepted source is authoritative here:
LiaisonScape `9eef66d`, e2r-spec sample implementation `88893ee`, and the
Validator 0.4.0 RC `07f476e`. The local source routes Edges from node geometry,
then places node labels separately; route scoring includes nodes and relation
paths but does not establish a persisted node-label obstacle contract.

Relevant accepted evidence includes the Layout persistence responsibility
decision and automatic-layout experiments 1E and 1K: automatic routes and
automatic labels are Derived, direct label movement is only an Owned candidate,
and no Layout serialization is currently defined.

## Presentation contract

### Friendship label and line style

Keep EN `friends with`; change the JA display name to `友人`. Keep the Core
direction `thomas -> maya`, and keep `arrowDisplay: "undirected"`. Add the
sample-local `lineStyle: "dotted"`. This expresses a reciprocal-looking
friendship without adding a reciprocal Core Relation.

### Supervises and mentors

Both `clara-thomas-supervises` and `clara-thomas-mentors` are ordinary
professional relations and should render as implicit solid lines. Remove the
explicit dashed Presentation property from `clara-thomas-supervises`; do not
serialize `lineStyle: "solid"`.

### Spouse decision

`SPOUSE-NO`. No spouse Relation is added. The Daniel/Clara candidate would add
a personal claim not established by the sample and would place two different
relations between the same pair, increasing visual ambiguity. No alternative
candidate is necessary. Dashed remains a valid supported token but need not be
used by this sample.

### Bidirectional decision

Select `clara-maya` (`works with`) as the one bidirectional candidate because
the wording naturally implies mutual collaboration. Keep its Core endpoints
unchanged and add only `arrowDisplay: "bidirectional"`. Do not change
`daniel-clara`; coordination is not sufficiently explicit two-way interaction.

### Reverse decision

Keep `clara-lighthouse` with `arrowDisplay: "reverse"`. This is an intentional
Presentation display choice and does not change its canonical Core source or
target.

## Sample-local visual vocabulary

This is sample-local visual vocabulary, not E2R semantic typing. Presentation
is not semantic typing. Ordinary project/system relations use implicit solid;
friendship uses dotted and undirected; an explicitly mutual collaboration may
use bidirectional; `clara-lighthouse` demonstrates reverse; no spouse style is
introduced. Unknown applications must not infer relationship classes from
these visual properties.

## Token coverage

| Token | Final state |
|---|---|
| `normal` | implicit on ordinary relations; explicit unused |
| `reverse` | explicit on `clara-lighthouse` |
| `undirected` | explicit on `thomas-maya-friends` |
| `bidirectional` | explicit on `clara-maya` |
| `solid` | implicit on ordinary relations; explicit unused |
| `dashed` | unused |
| `dotted` | explicit on `thomas-maya-friends` |

## Final Relation count and target table

The count remains 28. No topology change is authorized.

| Relation ID | Core source | Core target | EN | JA | arrowDisplay | lineStyle | action |
|---|---|---|---|---|---|---|---|
| `thomas-maya-friends` | `thomas` | `maya` | friends with | 友人 | undirected | dotted | revise label and add dotted |
| `clara-thomas-supervises` | `clara` | `thomas` | supervises | 監督する | normal (implicit) | solid (implicit) | remove dashed |
| `clara-thomas-mentors` | `clara` | `thomas` | mentors | mentors | normal (implicit) | solid (implicit) | keep implicit |
| `clara-lighthouse` | `clara` | `lighthouse` | leads restoration of | 修復を率いる | reverse | solid (implicit) | keep |
| `clara-maya` | `clara` | `maya` | works with | 協働する | bidirectional | solid (implicit) | add bidirectional |
| `daniel-clara` | `daniel` | `clara` | coordinates with | 調整する | normal (implicit) | solid (implicit) | keep |

## Exact future Presentation payload

```json
{
  "draft.github.sukoyaka-dopeness.liaisonscape-presentation": {
    "specVersion": "0.1.0",
    "relations": {
      "clara-lighthouse": { "arrowDisplay": "reverse" },
      "clara-maya": { "arrowDisplay": "bidirectional" },
      "thomas-maya-friends": {
        "arrowDisplay": "undirected",
        "lineStyle": "dotted"
      }
    }
  }
}
```

`clara-thomas-supervises` is intentionally absent. The future EN/JA payloads
must be structurally identical.

## Old Harbor Lighthouse collision reproduction

The collision was reproduced in the current local LiaisonScape Japanese
sample at the ordinary browser view used for the observation: approximately a
1280×720 viewport and the app's displayed 76% graph zoom. The label rectangle
for `lighthouse` overlaps the rendered route corridor; the visible crossing is
the route into `lighthouse`, with the crossing set consisting of
`clara-lighthouse`, `authority-lighthouse`, and the newly derived
`beacon-lighthouse-installed-in` path near the label. The important evidence is
that the path crosses the readable label region, not merely its transparent
interaction rectangle.

The same geometry is possible in EN, although the shorter English label makes
the overlap less conspicuous. It remains possible at 100% and after Display
Reset because the stored node Coordinates and deterministic derived geometry
are unchanged. Reload reproduces the arrangement. No Coordinate was saved or
modified during this diagnostic.

## Collision ownership and classification

Primary owner: **L2 — DERIVED RELATION ROUTING**. The current route solver
accounts for node geometry and occupied route paths, while automatic node-label
placement is calculated separately. There is no accepted persisted manual
label position or label-obstacle ownership mechanism that a canonical sample
can use.

Classification: **VISUAL-BOTH**. The Lighthouse Coordinates expose the case,
but the missing label-region exclusion is a general derived-routing weakness.
This exact readable-glyph crossing is an acceptance issue for the flagship
sample. Public Sample Formal Acceptance remains blocked until the selected
bounded remedy is verified.

## Temporary remedy experiments and selected remedy

R1/R2 (moving sample or neighboring Coordinates) are legitimate temporary
experiments only, but are not selected now: they can trade this crossing for
new crossings and would conceal the runtime ownership issue. R3 is unavailable
because no supported canonical manual label-placement payload exists. R5 is
rejected because the crossing is through readable text. R4 is selected:
diagnose and, if confirmed, improve derived route avoidance of node-label
occupied regions. No implementation is part of this checkpoint.

## Exact next bounded implementation route

`COLLISION-NEXT-RUNTIME`: run one LiaisonScape routing/node-label avoidance
checkpoint that measures label rectangles and route intersections in EN and JA,
adds focused regression coverage, and tests a minimal derived-routing remedy.
Only after that result may a separate sample implementation decide whether any
Coordinate adjustment is still needed. No JSON or mirror change is authorized
in this checkpoint.

## Validator 0.4.0 impact

`VALIDATOR 0.4.0 RC UNAFFECTED`. All revised Presentation tokens are already
supported. Label/Edge collision is rendering geometry, not Validator semantics;
no Validator source or package change is required.

## Superseded and preserved decisions

This decision supersedes the affected sample-local assumptions that JA
friendship must be `友人である`, friendship has no line style, supervision is
dashed, and dotted/bidirectional must remain unused. It does not rewrite the
historical decision document.

Preserved: `beacon-lighthouse-installed-in`, all Core endpoint semantics,
canonical e2r-spec ownership, mirrors, Specification declaration, Presentation
ID/version, existing Coordinates, S3/provenance, and the Validator 0.4.0 RC.

## Exclusions and STOP boundary

Implementation is **NOT STARTED**. No JSON, mirror, runtime, test, routing,
label code, Coordinate, schema, roadmap, provenance, app, Validator,
NarrativeLine, Hub, or ai-knowledge file was modified. Public Sample Formal
Acceptance remains paused. Validator publication, consumer dependency update,
research audit, Cross-App release audit, app-version decision, push, tag, and
deploy remain NOT STARTED.
