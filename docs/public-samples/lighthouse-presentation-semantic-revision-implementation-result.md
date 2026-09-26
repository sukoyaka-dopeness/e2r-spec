# Lighthouse Presentation Semantic Revision Implementation Result

- Date: 2026-08-30
- Status: `ACCEPTED — LIGHTHOUSE PRESENTATION SEMANTIC REVISION`
- Trigger: accepted decision `7522186`.

## Authority and ownership

e2r-spec is the canonical owner; LiaisonScape `public/` is the committed
compatibility mirror. Public GitHub samples and package metadata were checked
read-only and are published evidence only; local accepted source is
authoritative. The public sample currently lags these unpublished local
changes.

## Final semantic revision

The canonical EN/JA Datasets retain 10 Entities, 11 Events, and 28 Relations.
Core IDs, endpoints, Coordinates, Events, Dataset versions, and the
Beacon/Lighthouse relation are unchanged. No spouse or reciprocal friendship
Relation was added.

- Friendship: EN `friends with`; JA `友人`.
- Friendship Presentation: `arrowDisplay: "undirected"`,
  `lineStyle: "dotted"`.
- `clara-thomas-supervises`: explicit Presentation record removed; effective
  display is implicit normal/solid.
- `clara-maya`: `arrowDisplay: "bidirectional"`.
- `clara-lighthouse`: `arrowDisplay: "reverse"` preserved.
- `beacon-lighthouse-installed-in`: no explicit Presentation record.

The final relation-keyed Presentation payload is:

```json
{
  "clara-lighthouse": { "arrowDisplay": "reverse" },
  "clara-maya": { "arrowDisplay": "bidirectional" },
  "thomas-maya-friends": {
    "arrowDisplay": "undirected",
    "lineStyle": "dotted"
  }
}
```

Normal and solid defaults remain omitted. EN/JA Presentation keys and tokens
are identical; only localized human-readable strings differ.

## Validation and mirrors

Validator 0.4.0 RC validated both revised canonical samples as valid with zero
errors and zero warnings, including no unknown-extension,
specification-unavailable, extension-version-unspecified, malformed
Presentation, or orphan diagnostics. The accepted all-public-sample inventory
also remains warning-free; only Lighthouse content changed in this checkpoint.

Canonical/mirror parity passed. SHA-256 values are:

- EN: `8e7ff01da21125c0179718e3a5ca36175e798590b212fa2409f9389a0465243a`
- JA: `fc29851206217494aa023dfcc258310ac989b9b6050450944c6f110f36aaa83c`

## LiaisonScape and NarrativeLine verification

The Lighthouse regression test now asserts the revised JA friendship label,
dotted friendship, absent supervision record, bidirectional Clara/Maya,
reverse Clara/Lighthouse, no dashed showcase, 28 Relations, and retained
Specification declaration. LiaisonScape passed 274 tests, lint, and build.
NarrativeLine passed 222 tests, lint, and build and preserved the revised
Presentation Extension, bidirectional collaboration, dotted friendship, and
Specification `uses` declaration through its existing round-trip boundary.

## Real Browser visual evidence

The local LiaisonScape browser smoke showed `友人`, a visibly dotted friendship
line, solid `監督する`, arrowheads at both ends for `協働する`, and the reverse
Clara/Lighthouse arrow. The graph remained readable with 10 Entities and 14
visible Entity-to-Entity Relations; node-label route avoidance and automatic
placement showed no regression. The known old installed Validator dependency
still displayed `unknown_extension` and `specification_unavailable`; this is
classified as `KNOWN — CONSUMER VALIDATOR DEPENDENCY NOT YET UPDATED`, not a
sample semantic failure.

## Contract impact and commits

No runtime source, CSS, schema, Validator, package dependency, or serialized
Core contract beyond the intended sample-local Presentation/name revision was
changed. Presentation remains sample-local visual vocabulary, not E2R
semantic typing.

Commits:

- e2r-spec canonical: `901c890 feat: refine Lighthouse presentation sample`
- LiaisonScape mirror/test: `0e56345 chore: sync Lighthouse presentation revision`
- this result: pending `docs: accept Lighthouse presentation revision`

Validator package publication: **NOT PERFORMED**.
LiaisonScape dependency update: **NOT PERFORMED**.
NarrativeLine dependency update: **NOT PERFORMED**.
Public Sample Formal Acceptance: **NOT RESUMED**.

## Exclusions and STOP boundary

Lighthouse routing/placement runtime work was not reopened. No other sample,
Coordinate, Entity/Event/Relation topology, or consumer was changed. Push,
tag, npm publish, deploy, Cross-App release audit, Research audit, and app
version decision remain not started. All commits are local and unpushed.
