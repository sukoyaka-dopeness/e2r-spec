# Lighthouse Dashed Showcase Implementation Result

- Date: 2026-08-30
- Status: `ACCEPTED — LIGHTHOUSE DASHED SHOWCASE IMPLEMENTATION`
- Trigger: accepted decision `ac21e7c docs: decide Lighthouse dashed showcase semantics`.
- Decision authority: `DASHED-A — EXISTING RELATION`, selecting `sofia-elias`.

## Public GitHub baseline

The public LiaisonScape EN/JA samples and `tests/lighthouse-sample.test.ts`
were inspected read-only. Public main remains the published baseline, with 26
Relations and without the locally accepted friendship, beacon-installation,
Presentation revision, and dashed implementation. The public e2r-spec
repository was also checked read-only. Local unpushed repositories are the
current implementation authority; public state is published history and may
lag it.

## Local canonical authority

The canonical samples are:

- `e2r-spec/examples/lighthouse-restoration-demo.en.e2r.json`
- `e2r-spec/examples/lighthouse-restoration-demo.ja.e2r.json`

The accepted ownership decision makes e2r-spec canonical and LiaisonScape's
`public/` files committed compatibility mirrors. The local pre-change state
was 10 Entities, 11 Events, 28 Relations, 14 visible Entity-to-Entity
Relations, and zero dashed Presentation records.

## Implemented change

Only the Dataset-level Presentation payload was changed for Relation key
`sofia-elias`:

```json
"sofia-elias": {
  "lineStyle": "dashed"
}
```

The Core Relation remains exactly Sofia → Elias with EN name `interviews` and
JA name `聞き取りをする`. No `arrowDisplay: "normal"` or explicit solid
style was materialized.

## Sample-local dashed rationale

In this Lighthouse sample, dashed identifies the bounded interview and
information-gathering interaction represented by Sofia interviewing Elias.
Friendship remains dotted, and ordinary work, structural, institutional, and
technical Relations remain solid. This is sample-local visual vocabulary, not
a global E2R Relation taxonomy or a meaning assigned to `dashed` generally.

## Core invariants

Entities, Events, Relations, IDs, endpoints, names, descriptions, Coordinates,
Dataset versions, dataset IDs, metadata, and Specification `uses` are
unchanged. No new Relation, spouse Relation, reciprocal Relation, Event, or
Entity was added. `SPOUSE-NO` remains preserved.

## EN/JA parity

EN and JA have identical Presentation relation keys, `arrowDisplay` tokens,
`lineStyle` tokens, and Presentation `specVersion`. Only localized Core names
remain different.

## Final Presentation payload

- `clara-lighthouse`: reverse
- `clara-maya`: bidirectional
- `sofia-elias`: dashed
- `thomas-maya-friends`: undirected + dotted
- `clara-thomas-supervises`: implicit normal/solid
- `beacon-lighthouse-installed-in`: implicit normal/solid

The final explicit relation-key set is:
`clara-lighthouse`, `clara-maya`, `sofia-elias`, and
`thomas-maya-friends`.

## Relation counts

The final sample retains 10 Entities, 11 Events, 28 Relations, and 14 visible
Entity-to-Entity Relations. Exactly one Presentation relation is dashed
(`sofia-elias`) and exactly one is dotted (`thomas-maya-friends`).

## Lighthouse regression test update

The previous no-dashed assertion was replaced with exact assertions for the
`sofia-elias` dashed record, exactly one dashed key, and exactly one dotted key.
Assertions preserving friendship dotted/undirected, Clara/Maya
bidirectional, Clara/Lighthouse reverse, absent supervision Presentation, and
absent beacon-installation Presentation remain. EN/JA Presentation deep
equality remains required.

## Validator 0.4.0 validation

Local Validator 0.4.0 RC accepted both canonical samples with `valid=true`,
zero errors, and zero warnings. No unknown-extension,
specification-unavailable, extension-version-unspecified, Presentation error,
or orphan diagnostic was produced. Validator source, schema, tests, package,
and dependencies were not changed.

## All-public-sample validation

The eight current canonical public sample variants (Apollo EN/JA, Ashen Crown
EN/JA, Titanic EN/JA, and Lighthouse EN/JA) were validated with the local
Validator. All were valid with zero errors and zero warnings.

## Canonical/mirror parity

`npm run validate:public-sample-mirrors` passed with byte-identical canonical
and LiaisonScape mirror files and EN/JA structural parity.

## SHA-256

- EN: `c67107bca0a007a399f164317da2d330f7b15f5e2609a1b5b2fcdf9f44e6c386`
- JA: `7de771caf8c75f5868034c5e4790bc473f7d0ef21d40f7178307bf39b0173aca`

## LiaisonScape automated gates

LiaisonScape passed 274 tests, lint, and build. No runtime or CSS change was
made.

## NarrativeLine round-trip gate

NarrativeLine passed 222 tests, lint, and build. Its existing round-trip
boundary preserved the Presentation Extension and its declaration.

## Hub gate

Hub test, lint, and build passed. No Hub change was made.

## Real Browser visual evidence

The current local LiaisonScape JA Lighthouse screen displayed 10 Entities and
14 visible connections, including `聞き取りをする`. Browser DOM/CSS
inspection confirmed the dashed SVG route had computed `stroke-dasharray:
8px, 5px`; the existing friendship remained present as the dotted route. The
graph was not blank, the supervision route remained solid, Clara/Maya remained
bidirectional, and Clara/Lighthouse remained reverse. Dashed and dotted were
distinct at the representative 76% working zoom. No Node movement, Coordinate
change, route retuning, or new obvious overlap was observed.

## Known consumer Validator warning boundary

The browser still shows the known old-consumer warnings `unknown_extension` and
`specification_unavailable`, caused by the installed Validator dependency
range. They are not a failure of this sample implementation. No unrelated
runtime error appeared.

## Node-label route avoidance regression status

No regression was observed. Existing node-label route avoidance remains
unchanged and no routing or label code was modified.

## Auto Layout boundary

Explicit Auto Layout / Re-layout remains R2 and was not addressed. No Clara
central placement, topology scoring, graph-wide movement, or crossing
optimization was performed.

## Superseded historical clause

The implementation supersedes only the historical sample-local statement that
there was no dashed showcase and the previous Lighthouse test assertion that
no dashed Presentation existed. Historical decision/result documents were not
rewritten.

## Remaining release residuals

Lighthouse sample user-intent R1: **CLOSED**. Remaining R1 from
`liaisonscape-validator-release-residual-audit.md`: **0**. This does not mean
the full release is accepted.

## Modified files

e2r-spec:

- `examples/lighthouse-restoration-demo.en.e2r.json`
- `examples/lighthouse-restoration-demo.ja.e2r.json`
- this result document

LiaisonScape:

- `public/lighthouse-restoration-demo.en.e2r.json`
- `public/lighthouse-restoration-demo.ja.e2r.json`
- `tests/lighthouse-sample.test.ts`

No other files were modified by this checkpoint.

## Commits

- e2r-spec canonical: `d5ba6a8 feat: add dashed Lighthouse presentation example`
- LiaisonScape mirror/test: `e8d476f chore: sync Lighthouse dashed presentation`
- e2r-spec result: pending `docs: accept Lighthouse dashed showcase`

## Publication boundary

Validator publication: **NOT STARTED**. No npm publish, tag, push, or deploy was
performed.

## Consumer integration boundary

Consumer dependency updates: **NOT STARTED**. LiaisonScape and NarrativeLine
remain on their existing dependency ranges.

## Public Sample Formal Acceptance boundary

Public Sample Formal Acceptance: **NOT RESUMED**. It may be considered only in
a later bounded checkpoint after this implementation result.

## Exclusions

No Validator, schema, package, dependency, runtime, CSS, Coordinate, Event,
Core Relation, NarrativeLine, Hub, roadmap, provenance, or ai-knowledge file
was changed. Explicit Auto Layout, Final Release Audit, Research Audit,
consumer integration, publication, and deployment remain not started.
