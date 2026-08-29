# Lighthouse Semantic Enrichment Decision

- Date: 2026-08-30
- Status: `READY — LIGHTHOUSE SEMANTIC ENRICHMENT DEFINED`
- Scope: decide the bounded Core Relation additions and Presentation mapping for
  the next Lighthouse public-sample implementation. No Dataset is changed here.

## Why

The current fictional Lighthouse Dataset already explains that the Beacon System
is equipment inside the lighthouse, but it has no direct Beacon/Lighthouse
Relation. The requested refresh also requires a friendship example. These two
additions make the graph semantically richer while preserving the existing
topology and keeping the sample intentionally non-exhaustive.

## Public GitHub evidence

The public LiaisonScape repository was checked read-only and contains the live
EN/JA Lighthouse files at:

- [English Lighthouse sample](https://github.com/sukoyaka-dopeness/e2r-liaison-scape/blob/main/public/lighthouse-restoration-demo.en.e2r.json)
- [Japanese Lighthouse sample](https://github.com/sukoyaka-dopeness/e2r-liaison-scape/blob/main/public/lighthouse-restoration-demo.ja.e2r.json)

The public e2r-spec Specification document was also checked. The local
accepted working tree is authoritative for later unpushed decisions. The
Presentation Draft is currently present in the local accepted specification
tree; its public GitHub path was not available during this read-only check.

## Local accepted authority

The applicable local decisions are `OWNERSHIP-B` / `MIGRATE-LIGHTHOUSE-FIRST`
from `docs/public-sample-canonical-ownership-decision.md` and `MIRROR-1` for
the future LiaisonScape compatibility copies. The earlier semantics decision
kept Lighthouse topology unchanged and selected reverse/dashed Presentation
showcases. The explicit current user requirements in this checkpoint supersede
that earlier “no Core topology change” boundary only for the two Relations
decided below. The accepted Validator integration result is
`docs/production-validator-presentation-specification-support-fix-result.md`.

The current accepted commits are e2r-spec `7f0327f` and Validator `231ab2f`.

## Current Entity-to-Entity Relation inventory

The live EN/JA files have the same Entity-to-Entity topology and currently
contain:

| Relation ID | source | target | relationship class |
|---|---|---|---|
| `clara-thomas-supervises` | `clara` | `thomas` | project responsibility |
| `clara-thomas-mentors` | `clara` | `thomas` | mentorship |
| `clara-maya` | `clara` | `maya` | collaboration |
| `elias-clara` | `elias` | `clara` | advisory |
| `sofia-elias` | `sofia` | `elias` | interview/documentation |
| `daniel-clara` | `daniel` | `clara` | collaboration/coordination |
| `maya-beacon` | `maya` | `beacon` | maintenance |
| `sofia-archive` | `sofia` | `archive` | collaboration |
| `clara-lighthouse` | `clara` | `lighthouse` | project responsibility |
| `beacon-self-monitor` | `beacon` | `beacon` | self-system behavior |
| `beacon-self-calibrate` | `beacon` | `beacon` | self-system behavior |
| `authority-lighthouse` | `authority` | `lighthouse` | administration |

Event-to-Entity Relations are excluded from this inventory. Existing rows are
not renamed, deleted, reversed, or duplicated.

## User friendship requirement

The sample must include Thomas Hale and Maya Reed as friends. This is a natural
fictional relationship distinct from Clara’s supervision/mentorship of Thomas,
Clara’s collaboration with Maya, and Maya’s maintenance of the Beacon System.
It is useful as a graph example and is naturally shown with an undirected
Presentation appearance.

### Friendship alternatives

- Two reciprocal Core Relations would duplicate one fact solely for visual
  symmetry and unnecessarily densify the graph.
- A directed “knows” or “works with” Relation would weaken the requested
  friendship meaning.
- One directed Core Relation plus `arrowDisplay: "undirected"` preserves Core
  direction while expressing reciprocal visual appearance.

### Friendship decision

Accept exactly one Relation:

- ID: `thomas-maya-friends`
- source: `thomas`
- target: `maya`
- EN name: `friends with`
- JA name: `友人である`
- description: none

Only Thomas → Maya is stored. No reciprocal `maya-thomas-friends` Relation is
authorized. Reciprocity is Presentation intent, not a second Core fact.

## Beacon/Lighthouse observed gap

The current `beacon` Entity is named “Beacon System” and described as “The
lighting and monitoring equipment inside the lighthouse.” The current
`lighthouse` Entity is “Old Harbor Lighthouse”. Despite that direct
inside-the-building statement, no Core Relation connects these Entities.

### Beacon/Lighthouse alternatives

| Candidate | Direction | EN | Assessment |
|---|---|---|---|
| B1 | beacon → lighthouse | `is installed in` | Directly matches equipment inside the building without claiming ownership or architectural decomposition. |
| B2 | beacon → lighthouse | `is part of` | Too broad; could imply organizational or conceptual membership rather than physical installation. |
| B3 | lighthouse → beacon | `contains` | Understandable, but places the building as subject and makes the equipment’s relation less direct in the graph. |
| B4 | beacon → lighthouse | another location phrase | No clearer bounded wording is supported by the current Dataset than B1. |

### Beacon/Lighthouse decision

Accept B1:

- ID: `beacon-lighthouse-installed-in`
- source: `beacon`
- target: `lighthouse`
- EN name: `is installed in`
- JA name: `設置されている`
- description: none

This is a containment/location-style statement supported by the existing
description, understandable without an ontology, and does not overclaim that
the Beacon System is the whole lighthouse or that it owns the building.

## Additional Relation audit

The obvious candidates were checked against the inventory and current story:

- Clara / Harbor Authority is already represented indirectly by
  `lead-appointed` → `authority` and `lead-appointed` → `clara`, while a new
  direct administrative or appointment edge would overstate the requested
  bounded enrichment.
- Thomas, Maya, and Elias already connect to the restoration through existing
  Relations and Events; direct Lighthouse edges are not necessary.
- Sofia / Archive already has `sofia-archive`.
- Daniel / Harbor Authority has no clearly necessary distinct fact beyond the
  existing community coordination story.

No third Entity-to-Entity Relation is clearly necessary. The final count is
`ENRICH-2`, exactly two new Relations.

## Final exact Relation contract

| Relation | Decision | ID | source | target | EN name | JA name | Presentation |
|---|---|---|---|---|---|---|---|
| Thomas/Maya friendship | add | `thomas-maya-friends` | `thomas` | `maya` | `friends with` | `友人である` | `arrowDisplay: "undirected"` |
| Beacon/Lighthouse | add | `beacon-lighthouse-installed-in` | `beacon` | `lighthouse` | `is installed in` | `設置されている` | none |
| Optional third Relation | none authorized | — | — | — | — | — | — |
| Clara/Lighthouse | keep existing | `clara-lighthouse` | `clara` | `lighthouse` | `leads restoration of` | `修復を率いる` | `arrowDisplay: "reverse"` |
| Clara/Thomas supervision | keep existing | `clara-thomas-supervises` | `clara` | `thomas` | `supervises` | `監督する` | `lineStyle: "dashed"` |

Neither new Relation has a description. The endpoint names and Relation names
are sufficient, and adding prose would not materially improve the sample.

## Presentation reconciliation

The accepted existing choices remain unchanged:

- Reverse: `clara-lighthouse` keeps `arrowDisplay: "reverse"`.
- Dashed: `clara-thomas-supervises` keeps `lineStyle: "dashed"`.
- Undirected: the new `thomas-maya-friends` receives
  `arrowDisplay: "undirected"`.

The Beacon/Lighthouse Relation receives no explicit Presentation property. Its
Core direction is sufficiently understandable as written. `bidirectional` and
`dotted` remain unused; token coverage is not the goal.

The educational model is therefore: ordinary Core direction for Beacon →
Lighthouse; a Presentation arrow override for Clara → Lighthouse; one Core
friendship with undirected visual intent; and an independent dashed line-style
example for supervision. Presentation does not alter Core `sourceId` or
`targetId`.

## Specification declaration requirement

The future canonical EN/JA Datasets already use the Specification Extension
for metadata, history, and Coordinate Draft. Because the future payload also
uses Presentation, its `uses` array MUST additionally contain:

```json
{
  "extension": "draft.github.sukoyaka-dopeness.liaisonscape-presentation",
  "version": "0.1.0"
}
```

No Presentation `features` entry is authorized. Under P0-B, the payload’s own
`specVersion` bootstraps Presentation payload validation, but a Dataset using
the Specification Extension must declare the exact Presentation version for
warning-free local support. Validator `231ab2f` recognizes this exact pair.

## Coordinate/routing boundary

No existing Entity Coordinate changes are decided. No new manual coordinates,
Relation routes, or route geometry are persisted. LiaisonScape derives routing
for the two new Relations.

## Dataset identifiers/version boundary

Do not change the Core `version`, Dataset IDs, Presentation version, or
Coordinate version merely because Relations are added. No existing project
policy requires an identifier change in this checkpoint.

## Exact next implementation files

The next implementation may target only this bounded set:

- `e2r-spec/examples/lighthouse-restoration-demo.en.e2r.json`
- `e2r-spec/examples/lighthouse-restoration-demo.ja.e2r.json`
- `e2r-liaison-scape/public/lighthouse-restoration-demo.en.e2r.json`
- `e2r-liaison-scape/public/lighthouse-restoration-demo.ja.e2r.json`
- `e2r-spec/examples/README.md` if canonical/mirror roles need recording
- one implementation result document
- the accepted mirror-parity script/package command, if required by MIRROR-1

## Exact future Relation diff

Append the following two Core Relation objects to both localized Datasets,
with only the `name` values localized as specified above and with no
`description` fields:

```json
[
  {
    "id": "thomas-maya-friends",
    "name": "friends with",
    "sourceId": "thomas",
    "targetId": "maya"
  },
  {
    "id": "beacon-lighthouse-installed-in",
    "name": "is installed in",
    "sourceId": "beacon",
    "targetId": "lighthouse"
  }
]
```

The Japanese file uses `友人である` and `設置されている` for the two names.
No existing Relation changes.

## Exact future Presentation payload

The future Dataset-level Presentation Extension should be:

```json
{
  "draft.github.sukoyaka-dopeness.liaisonscape-presentation": {
    "specVersion": "0.1.0",
    "relations": {
      "clara-lighthouse": { "arrowDisplay": "reverse" },
      "clara-thomas-supervises": { "lineStyle": "dashed" },
      "thomas-maya-friends": { "arrowDisplay": "undirected" }
    }
  }
}
```

The Beacon/Lighthouse Relation is intentionally omitted from this payload.
EN/JA Presentation payloads must be identical.

## Validator expectation

With the exact Specification `uses` declaration, future EN/JA samples should
validate without Specification support warnings, Presentation warnings, or
orphan warnings. Core endpoint resolution, preservation, and localized names
remain implementation checks. Unknown Extension preservation remains required.

## Canonical/mirror ownership

Under `OWNERSHIP-B`, e2r-spec becomes the canonical authoring owner. Under
`MIRROR-1`, LiaisonScape `public/` contains committed compatibility mirrors.
Canonical files are updated first, then mirrors are synchronized and checked
for parity. Existing Hub URLs remain unchanged until a separate bounded URL
decision.

## Exclusions and next implementation state

This decision does not edit Lighthouse JSON, mirrors, README, provenance,
schema, Presentation Draft, Specification Draft, Core, Validator, roadmap,
runtime apps, Hub, or ai-knowledge. It does not choose coordinates or routes,
bump versions, or start release/deployment work.

The next JSON implementation is **NOT STARTED**. Research audit, Cross-App
release audit, app version decision, push, and deploy are also **NOT STARTED**.

