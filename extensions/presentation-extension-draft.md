# LiaisonScape Presentation Extension Draft

Status: Draft candidate

Draft Extension identifier: `draft.github.sukoyaka-dopeness.liaisonscape-presentation`

Draft specification version: `0.1.0`

This document defines a candidate Dataset-contained Presentation Extension for
LiaisonScape-authored visual presentation intent. It currently specifies two
independent Relation properties: arrow display and line style. The Extension
is not registered as Stable, and no machine-readable JSON Schema is introduced
by this checkpoint.

The key words MUST, MUST NOT, REQUIRED, SHOULD, SHOULD NOT, and MAY are to be
interpreted as requirements of this draft only.

---

## Responsibility and non-goals

This Extension owns LiaisonScape-authored, Dataset-carried presentation
properties that alter how canonical E2R objects are visually presented without
redefining Core semantics.

Version `0.1.0` specifies Relation arrow display and Relation line style. The
four arrow-display values control whether and in which direction arrow
indication is rendered between the Relation's two canonically ordered
endpoints. The line-style values control the visible pattern of the Relation
line itself. The two properties are independent and may be combined freely.

This Extension does not own:

- Core Relation semantics, `sourceId`, or `targetId`;
- Relation names or descriptions;
- Entity or Event identity;
- Coordinate values;
- route, curvature, self-loop, or label geometry;
- node placement, viewport geometry, zoom, or pan;
- selection, hover, focus, modal, locale, or gesture state;
- arbitrary application preferences; or
- the route's geometry, hit area, or interaction path.

The Extension does not define a generic style bag. Each additional visual
responsibility requires its own explicitly named and specified property.

---

## Identifier, version, and placement

The exact draft identifier is both the Extension identity and the payload key:

```text
extensions["draft.github.sukoyaka-dopeness.liaisonscape-presentation"]
```

The `draft` prefix and reverse-domain authority follow the live E2R naming
rules for an unregistered developing Extension. `0.1.0` is an exact draft
specification version using the existing `MAJOR.MINOR.PATCH` convention. It is
not the Dataset Core `version`, a Dataset revision, or a version of LiaisonScape
runtime code.

When present, the Dataset-level payload MUST contain `specVersion: "0.1.0"`
and a non-empty `relations` object. Entity, Event, and Relation Core objects
do not carry a repeated `specVersion` for this Extension. A future supported
Specification Extension declaration MAY additionally declare this exact
Extension/version pair; that declaration does not replace the payload's own
bootstrap.

The Extension is a draft candidate, not a Stable Extension. Promotion,
registration, machine-readable schema, and incompatible future evolution
require separate decisions.

---

## Payload shape and addressing

The canonical payload uses one Dataset-level object containing an ID-keyed map
of Relation presentation records:

```json
{
  "extensions": {
    "draft.github.sukoyaka-dopeness.liaisonscape-presentation": {
      "specVersion": "0.1.0",
      "relations": {
        "relation-1": {
          "arrowDisplay": "reverse",
          "lineStyle": "dashed"
        }
      }
    }
  }
}
```

`relations` is a JSON object, not an array and not a second parallel
addressing form. Each property name is the exact canonical Relation ID in the
same Dataset. The key is case-sensitive, must be a non-empty string, and MUST
NOT be derived from endpoint IDs, endpoint order, Relation name, array index,
or rendered geometry.

One self-Relation ID therefore has one independently addressable presentation
record. Parallel Relations with identical endpoint pairs remain independent
because each has a distinct Relation ID.

A Relation record is an object. `arrowDisplay` is optional because omission
means Normal. A record MUST contain at least one recognized non-default field
or preserved unknown field; an empty record is non-canonical and MUST NOT be
written by a canonical writer.

Unknown fields at the Extension, `relations`, and Relation-record levels MUST
be ignored for supported `0.1.0` behavior and SHOULD be preserved whenever
practical. Unknown-field preservation does not make the field understood or
part of this draft's supported vocabulary.

---

## Arrow display property and tokens

The exact serialized property name is `arrowDisplay`. It describes a visual
arrow indication and does not imply that canonical Relation direction is being
edited. The exact lowercase serialized tokens are:

| Token | Presentation meaning for endpoint A then endpoint B | Core effect |
| --- | --- | --- |
| `normal` | Show A toward B | None |
| `reverse` | Show B toward A visually | None; do not swap endpoints |
| `undirected` | Show A and B without arrow indication | None; does not create an undirected Relation |
| `bidirectional` | Show arrow indication in both directions | None; does not create reciprocal Relations |

Endpoint A remains the stable first displayed object in canonical source order;
endpoint B remains the stable second displayed object in canonical target order.
The display value never changes `sourceId`, `targetId`, Relation text, object
IDs, or semantic Extension data.

## Relation line-style property and tokens

The exact serialized property name is `lineStyle`. It describes the visible
pattern of the Relation's own line or stroke. It does not describe arrow
direction, Core direction, route geometry, line color, line width, opacity,
visibility, selection emphasis, or interaction behavior.

The exact lowercase serialized tokens are:

| Token | Presentation meaning | Core effect |
| --- | --- | --- |
| `solid` | Continuous line pattern | None |
| `dashed` | Repeating dashed line pattern | None |
| `dotted` | Repeating dotted line pattern | None |

The tokens express presentation intent, not CSS/SVG dash arrays or other
rendering mechanics. Every line-style token is valid with every
`arrowDisplay` token. For example, Reverse + dashed, Bidirectional + dotted,
and Undirected + solid are ordinary combinations; neither property implies a
value for the other.

---

## Absence, defaults, and canonical writing

Absence of the Extension, absence of a Relation ID entry, or absence of
`arrowDisplay` means `normal`: render the canonical source-to-target direction
when direction is shown. Absence of `lineStyle` means `solid`.

The canonical writer MUST omit the default rather than materialize
`"arrowDisplay": "normal"`. If a user selects Normal after a non-default
choice, the writer removes `arrowDisplay`. If that leaves the Relation record
with no other recognized or preserved field, it removes the Relation record.
If no Relation record remains, it omits the entire Presentation Extension.

An input Dataset containing an explicit `normal` value is readable, but a
canonical writer SHOULD remove that redundant value during an explicit edit of
the same supported record. It MUST NOT rewrite unrelated data merely because a
Dataset is opened, viewed, or exported.

The canonical writer therefore uses these empty-state rules:

1. empty Relation presentation records are prohibited from canonical output;
2. an Extension with no Relation records is omitted from canonical output; and
3. opening or rendering a default does not create either empty state.

For line style, the canonical writer MUST omit `lineStyle` when its effective
value is `solid`. Selecting Solid after Dashed or Dotted removes `lineStyle`.
If that leaves the Relation record with no other recognized or preserved field,
the writer removes the Relation record; if no Relation record remains, it
omits the entire Presentation Extension. Unknown fields MUST prevent
destructive record or Extension removal.

---

## Unknown tokens and unsupported fields

If `arrowDisplay` contains an unrecognized token, a Presentation-aware reader
MUST:

1. keep the Core Relation usable;
2. leave `sourceId` and `targetId` untouched;
3. render the safe canonical Normal fallback; and
4. preserve the original unknown token whenever practical.

Rendering fallback and serialized preservation are separate. A reader MUST NOT
silently replace an unknown token with `normal` merely because it cannot render
it. A writer MUST NOT edit an unsupported record as though the unknown token
were understood; an explicit user replacement may later create a supported
value under a separate authoring operation.

If `lineStyle` contains an unrecognized non-empty token, a
Presentation-aware reader MUST render the safe `solid` fallback and SHOULD
preserve the original token whenever practical. It MUST NOT silently replace
the stored token merely because it cannot render it. An unrelated edit, such
as changing Relation name or `arrowDisplay`, MUST preserve the unknown
`lineStyle` token. An explicit line-style edit may replace it with `dashed` or
`dotted`; selecting `solid` applies the canonical omission rule for that
property. Unknown fields in the same Relation record remain preserved.

If a Relation record contains a future field, the current reader may still use
its supported `arrowDisplay` value and MUST preserve the future field whenever
practical. For example, the following is an opaque future-field case only; it
does not define a line-style property or value:

```json
{
  "arrowDisplay": "reverse",
  "futurePresentationProperty": { "opaque": true }
}
```

This forward-compatibility rule does not create a generic `styles`,
`properties`, or `misc` bag. Future properties require explicit names,
responsibilities, and versioned contract decisions.

---

## Orphan records and Relation deletion

An ID-keyed record whose Relation ID is absent from the current Dataset is a
non-canonical but preservable orphan. A Presentation-aware reader MUST ignore
it for rendering and MUST NOT treat it as a Core validity failure. It SHOULD
report a Presentation diagnostic when diagnostics are available, while
preserving the record on unrelated round trips whenever practical.

When LiaisonScape explicitly deletes Relation `R`, its canonical writer MUST
remove the Presentation record keyed by `R` in the same committed Dataset
transition. If that removal empties `relations`, the writer MUST omit the
entire Extension. This is presentation metadata cleanup only and does not
change Relation deletion semantics.

---

## Dataset lifecycle and dirty state

Dataset replacement replaces the current Presentation Extension state with the
incoming Dataset's state. LiaisonScape MUST NOT merge old Relation display
records into a newly acquired Dataset or maintain a browser-global preference
for them.

The Extension is Dataset-carried. E2R JSON export MUST carry it, and import or
reopen MUST restore supported values. Copying or transferring the Dataset
should preserve its payload. An application that does not understand this
Extension may ignore its visual meaning while preserving the unknown Extension
data under the general E2R preservation boundary.

Changing the effective arrow display is an authored Dataset Presentation
mutation and therefore sets the current equivalent of `datasetModified`.
Selecting the already-effective value is not a new mutation. Selecting Normal
is a mutation when it removes a previously stored non-default value. A future
undo/redo implementation should treat these as Dataset presentation edits;
undo/redo itself is outside this draft checkpoint.

---

## Relation Detail and application intent

The future ordinary Relation Detail order is:

1. `Name`
2. `Connected object` for endpoint A in canonical source order
3. `Arrow display`
4. `Line style`
5. `Connected object` for endpoint B in canonical target order
6. `Description`

The two presentation controls form one connection-presentation block between
the endpoint rows. This order does not change canonical Source/Target roles,
Relation creation, or the Detail technical view. The selected visible English
label is `Line style`; the selected visible Japanese label is `線のスタイル`.
The initial control family is a native select with textual options: `Solid`,
`Dashed`, and `Dotted` in English; `実線`, `破線`, and `点線` in Japanese. Any
future visual line samples MUST retain an accessible textual name and MUST NOT
make the distinction depend on pixels alone.

Line style is initially edited from Relation Detail only. Relation Creation
does not gain a line-style control: a newly created Relation with no explicit
property uses the default solid appearance.

## Version decision for line style

Adding `lineStyle` does not change the Presentation Extension version. The
contract remains Draft candidate `0.1.0` under the existing identifier.

This is an additive, optional Relation-record property in the same
Dataset-contained Relation-ID map. The current draft already reserves
separately named future Presentation properties, permits unknown Relation
fields structurally, and requires practical preservation of unknown fields.
Older `0.1.0` readers can therefore ignore and preserve `lineStyle` while
continuing to interpret `arrowDisplay`. A later schema checkpoint MUST
standardize the field and its known token vocabulary in the machine-readable
schema; that schema update is separate from this contract decision. A version
bump is reserved for an incompatible meaning, placement, or compatibility
change rather than this additive field.

## Rendering and geometry boundary

Future runtime support MUST apply `lineStyle` only to the visible Relation
line/stroke path. It MUST NOT automatically apply the pattern to the edge
halo, hit area, selection hit target, route geometry, label, or arrowhead fill
and shape. Selection may continue to alter visual emphasis such as line width
as an application concern. The relation-creation preview is a separate
interaction affordance and is not a stored Relation line style.

Self-Relations use the same `solid`, `dashed`, or `dotted` property on the same
routed loop path without changing loop orientation or radius. Parallel
Relations are addressed independently by Relation ID and may use different
line styles. Presentation records remain stored even when a Relation is
currently hidden from the graph or has an Event endpoint; current graph
visibility does not determine serialization or editability.

Changing line style never changes `sourceId`, `targetId`, Relation identity,
Relation name or description, endpoint identity, route geometry, label
position, or semantic data. It is a Presentation mutation only when the user
explicitly adopts it; opening or rendering the default must not materialize
`solid`.

---

## Minimal serialization examples

The following fragments show the canonical behavior. In every case the Core
Relation endpoints remain unchanged.

### A. No Presentation Extension: default Normal

```json
{
  "relations": [
    { "id": "r-normal", "sourceId": "a", "targetId": "b" }
  ]
}
```

### B. One Reverse Relation

```json
{
  "relations": [
    { "id": "r-reverse", "sourceId": "a", "targetId": "b" }
  ],
  "extensions": {
    "draft.github.sukoyaka-dopeness.liaisonscape-presentation": {
      "specVersion": "0.1.0",
      "relations": { "r-reverse": { "arrowDisplay": "reverse" } }
    }
  }
}
```

### C. One Undirected Relation

```json
{
  "relations": [
    { "id": "r-undirected", "sourceId": "a", "targetId": "b" }
  ],
  "extensions": {
    "draft.github.sukoyaka-dopeness.liaisonscape-presentation": {
      "specVersion": "0.1.0",
      "relations": { "r-undirected": { "arrowDisplay": "undirected" } }
    }
  }
}
```

### D. One Bidirectional Relation

```json
{
  "relations": [
    { "id": "r-both", "sourceId": "a", "targetId": "b" }
  ],
  "extensions": {
    "draft.github.sukoyaka-dopeness.liaisonscape-presentation": {
      "specVersion": "0.1.0",
      "relations": { "r-both": { "arrowDisplay": "bidirectional" } }
    }
  }
}
```

### E. Parallel Relations with different display modes

```json
{
  "relations": [
    { "id": "r-parallel-1", "sourceId": "a", "targetId": "b" },
    { "id": "r-parallel-2", "sourceId": "a", "targetId": "b" }
  ],
  "extensions": {
    "draft.github.sukoyaka-dopeness.liaisonscape-presentation": {
      "specVersion": "0.1.0",
      "relations": {
        "r-parallel-1": { "arrowDisplay": "normal" },
        "r-parallel-2": { "arrowDisplay": "undirected" }
      }
    }
  }
}
```

The explicit `normal` in this example illustrates readable input; canonical
output removes it and omits the now-empty record for `r-parallel-1`.

### F. Self-Relation

```json
{
  "relations": [
    { "id": "r-self", "sourceId": "a", "targetId": "a" }
  ],
  "extensions": {
    "draft.github.sukoyaka-dopeness.liaisonscape-presentation": {
      "specVersion": "0.1.0",
      "relations": { "r-self": { "arrowDisplay": "reverse" } }
    }
  }
}
```

The self-Relation remains one Core Relation with one ID and one presentation
record; no reciprocal Relation is implied.

### G. Unknown field preservation example

```json
{
  "extensions": {
    "draft.github.sukoyaka-dopeness.liaisonscape-presentation": {
      "specVersion": "0.1.0",
      "relations": {
        "r-future": {
          "arrowDisplay": "reverse",
          "futurePresentationProperty": { "opaque": true }
        }
      }
    }
  }
}
```

The unknown field is illustrative opaque data only. It is not a selected future
line-style contract.

---

## Compatibility boundary

An unsupported or unknown Extension identifier, unsupported exact version, or
unknown Presentation property must not redefine the Core Dataset. A consumer
that does not support this draft may ignore the payload and continue using the
canonical Relation. It SHOULD preserve the payload whenever practical and
MUST NOT claim support for an unsupported exact version.

This draft is a serialization contract design checkpoint only. It does not
change Core, current Extension schemas, Validator behavior, Dataset samples,
LiaisonScape runtime, NarrativeLine runtime, or Hub behavior.
