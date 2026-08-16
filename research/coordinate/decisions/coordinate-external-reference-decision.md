# Coordinate External Reference Decision

Date: 2026-08-13

Status: Accepted non-normative design record; incorporated into Coordinate
draft `0.1.0`

## Purpose

This memo resolves the second bounded design task after the Coordinate
maturity review:

> What is the relationship between a Dataset-local Coordinate Space and an
> external coordinate reference definition, and which definition prevails
> when they cannot both be used?

It defines design input for the future
`draft.github.sukoyaka-dopeness.coordinate` candidate. It does not change the
frozen experimental prototype, define the draft schema, migrate a Dataset, or
register a Stable Extension.

## Decision summary

The Dataset-local Space and Component definitions remain the operational
source of truth for E2R serialization, references, structural validation, and
offline inspection. An `externalReference` is an optional, exact binding to an
external definition. It supplements the local definition; it never silently
overrides or replaces it.

The draft will add an optional Component-level `externalComponent` binding.
This binding associates one local Component ID with one exact component or
axis identifier from the Space's `externalReference`. A Space-level reference
without these bindings provides external context but does not establish a
generic component mapping.

Resolution is optional. An unresolved or conflicting external binding does not
make the E2R Core Dataset invalid and does not erase locally valid Coordinate
values. It does prevent processors from claiming external interpretation,
conversion, or write compatibility through that binding.

## D1. Local definitions remain self-contained

A Space continues to define its local Component IDs and the descriptors needed
to inspect its recorded values without network access. Object Coordinate
values remain keyed by those local Component IDs.

External definitions must not become a second required source for:

- resolving `spaceId` or Component keys;
- checking finite values and locally recorded bounds;
- preserving unknown or unsupported data;
- displaying raw IDs, descriptors, and numbers; or
- establishing E2R Core validity.

The external definition may supply additional semantics to a processor that
supports and trusts it, but Dataset-local references remain usable when that
definition is unavailable.

## D2. External identity is exact and opaque

An `externalReference` retains the required non-empty strings `authority` and
`identifier`. The ordered pair is its identity for Coordinate processing.
Processors compare both parsed strings exactly and case-sensitively, using the
same no-normalization rule as local identifiers.

A processor must not infer identity from:

- a similar URI path;
- a redirected network location;
- a familiar authority name;
- the unqualified tail of an identifier; or
- display labels returned by a registry.

The `identifier` may happen to be a URI, but Coordinate does not require it to
be dereferenceable and does not assign URI-resolution behavior to it.

A write-capable profile must be bound to an exact external definition. If the
reference denotes a mutable or version-ambiguous definition and the processor
cannot establish the exact semantics it implemented, the external binding is
read-only.

## D3. Components need explicit external bindings

The first draft design will permit this optional Component field:

```text
externalComponent: non-empty string
```

`externalComponent` is valid only in a Space that has an
`externalReference`. It is an opaque identifier scoped by that exact external
reference. Within one Space, two local Components must not claim the same
`externalComponent` unless a later, explicitly versioned model defines a
non-bijective mapping.

For a direct binding, the complete identity is:

```text
(externalReference.authority,
 externalReference.identifier,
 component.externalComponent)
```

The local Component ID remains the key used in E2R Coordinate values. The
external binding does not rename it.

Processors must not derive `externalComponent` from:

- the local Component ID;
- `name`;
- `positiveDirection`;
- object-member order;
- the number of Components; or
- a likely geographic convention.

Consequently, `externalReference` without `externalComponent` values is a
context-only reference for a generic Coordinate processor. A specialized
application may still recognize it through private application knowledge, but
that does not make the persisted Dataset mapping self-describing.

## D4. Explicit local values prevail for E2R processing

Local fields and the external definition have different jobs. The local fields
control E2R structure and the values actually stored. The external reference
asserts that selected local Components correspond to selected external
components.

An external definition must not silently replace a local:

- Space or Component ID;
- `kind`;
- `unit`;
- `positiveDirection`;
- `minimum`, `maximum`, or `period`; or
- recorded Coordinate value.

When local and external metadata disagree, the processor preserves and applies
the locally recorded E2R constraints. It marks the external binding unusable
for the operation and reports a Coordinate-layer diagnostic. It must not
silently reinterpret or rewrite the local data to match the external source.

This precedence is deliberately similar to the OGC WKT rule that explicitly
supplied definition attributes take precedence over conflicting identifier
metadata. Coordinate adopts the safety principle, not the WKT data model.

## D5. Resolution has four distinct states

A processor treats an external binding as one of these states:

1. **Absent**: local compatibility rules apply; no external semantics are
   claimed.
2. **Unresolved**: the exact reference is recorded, but no trusted definition
   is locally available. The processor may inspect and preserve the local
   Coordinate but must not claim external interpretation or conversion.
3. **Verified**: the processor recognizes the exact reference and verifies the
   explicit Component bindings and required descriptors. External-aware reads
   may proceed within that capability profile.
4. **Conflicting**: a trusted definition is available, but one or more claimed
   bindings or required descriptors disagree. Local data remains available;
   the external binding is unusable and external-aware writes are refused.

Failure to reach the network is an unresolved state, not structural
nonconformance. A malformed local `externalReference` or malformed
`externalComponent` is instead a structural Coordinate draft error.

## D6. External-aware writing fails closed

A processor may update a Component in an externally referenced Space only when
all ordinary write-compatibility conditions are satisfied and its explicit
capability profile also:

1. supports the exact external-reference pair;
2. uses a trusted, exact definition rather than a guessed or mutable one;
3. recognizes the Component's exact `externalComponent` binding;
4. verifies the binding's unit, direction, cyclic behavior, and applicable
   domain constraints; and
5. preserves every unsupported local and external binding unchanged.

If any condition is absent, unresolved, or conflicting, the requested value
remains unchanged. Merely being able to display the local number does not
authorize a write.

Coordinate does not perform implicit unit conversion. A processor that offers
a conversion or transformation must implement an explicit, identified
operation and must not present the result as exact compatibility of the source
Components.

## D7. Descriptor and constraint agreement

For a direct verified binding:

- a locally recorded `unit`, `positiveDirection`, or `period` must agree with
  the semantics required by the processor's exact external profile;
- absence is not silently filled from the network for write authorization;
- a local range may be narrower than the external domain and remains the
  enforced E2R write constraint; and
- a local range known to permit values outside the supported external domain
  prevents generic external-aware writing.

Lexically different unit or direction descriptors are not assumed equivalent.
A processor may support an explicit vocabulary mapping, but that mapping is
part of its declared capability, not an inference made by Coordinate.

Human-readable names may differ without creating a conflict because they do
not authorize interpretation or writing.

## D8. Axis order does not enter the Coordinate payload

External coordinate systems may define a significant axis sequence. E2R
Coordinate values are keyed objects, so JSON member order remains irrelevant.
The explicit `externalComponent` binding identifies each corresponding axis or
component without converting the E2R values into an ordered tuple.

An application that calls an external API using ordered tuples is responsible
for arranging values in that API's required order after it has verified all
bindings. It must not treat the order of local Component definitions or values
as that sequence.

## D9. Offline and trust behavior

Ordinary reading, preservation, and validation remain offline-capable. A
processor may satisfy external verification from a bundled, cached, or locally
configured definition. Coordinate does not require live registry access.

If a processor resolves a reference over a network, registry responses are
untrusted input. Retrieval policy, caching, redirects, authentication, and
resource limits are application concerns. Resolution must not mutate the
Dataset automatically.

The Validator may check the local structure and known built-in profiles. It
must not make generic Coordinate validity depend on a remote service.

## D10. Prototype migration does not infer bindings

Frozen prototype `0.1.0` has `externalReference` but no Component-level
external binding. An explicit migration may carry the exact reference and
local Component definitions into the draft, but the migrated reference is
context-only until verified `externalComponent` values are added.

Migration must not infer bindings from prototype names such as `longitude` and
`latitude`, from `east` and `north`, or from object-member order. A supporting
application or user may explicitly add verified bindings as a separate,
reviewable migration action.

The prototype payload and fixture remain unchanged by this decision.

## Illustrative draft shape

The following is design illustration, not a draft fixture or schema:

```json
{
  "id": "harbor-geographic",
  "kind": "geographic-2d",
  "externalReference": {
    "authority": "OGC",
    "identifier": "http://www.opengis.net/def/crs/OGC/1.3/CRS84"
  },
  "components": {
    "longitude": {
      "externalComponent": "Lon",
      "unit": "degree",
      "positiveDirection": "east"
    },
    "latitude": {
      "externalComponent": "Lat",
      "unit": "degree",
      "positiveDirection": "north"
    }
  }
}
```

The local keys remain `longitude` and `latitude`. `Lon` and `Lat` are explicit
external-axis bindings for the cited CRS84 definition, not names inferred by
Coordinate.

## Informative standards comparison

- [OGC Abstract Specification Topic 2](https://docs.ogc.org/as/18-005r4/18-005r4.html)
  treats axes, their units, directions, and sequence as part of a coordinate
  system definition. Coordinate records explicit local bindings instead of
  assuming that local keys reproduce an external tuple.
- [OGC WKT for Coordinate Reference Systems](https://docs.ogc.org/is/12-063r5/12-063r5.html)
  makes coordinate-system axis order significant and gives explicitly supplied
  attributes precedence when identifier metadata conflicts. Coordinate uses
  those points as safety evidence, not as a claim of WKT conformance.
- [OGC SWE Common 3.0](https://docs.ogc.org/is/24-014/24-014.html)
  identifies an axis through a reference frame plus an axis identifier.
  Coordinate's external-reference pair plus `externalComponent` follows the
  same separation of concerns without adopting the SWE payload.

## Consequences incorporated into the first draft

The draft schema and text therefore:

- keep Dataset-local Components required;
- define exact `authority` and `identifier` comparison;
- add optional, scoped, unique `externalComponent` bindings;
- distinguish structural validity from external resolution state;
- make external-aware writes fail closed;
- prohibit inferred axis mapping and implicit conversion; and
- define context-only migration for prototype external references.

## Subsequent implementation status

`coordinate-version-and-space-evolution-decision.md` now supplies the
unambiguous bootstrap and Space-identity rules. Their combined rules are now
incorporated into `../extensions/coordinate-extension-draft.md`, its schema,
fixtures, and explicit prototype migration contract.
