# Source/Citation Research Fixture

This directory contains a non-normative preservation fixture for the Gate 3
Source/Citation responsibility review.

`conceptual-roundtrip.json` is a Core-shaped E2R Dataset with deliberately
opaque `research.fixture.*` Extension data. It is not a Stable Extension
example and does not define candidate payload keys, Extension identifiers,
versions, Feature boundaries, or writer behavior.

Applications may use the file to test preservation of unknown Extension data.
Passing such a test demonstrates round-trip preservation only. It does not
demonstrate semantic support for Source, Citation, Claim, or Evidence.

The expected conceptual interpretation is documented in
`research/source-citation/evidence/source-citation-conceptual-fixtures.md`.

The isolated read-only diagnostic harness is
`research/source-citation/tools/source-citation-diagnostic-harness.mjs`. Passing its tests does
not make the research notation an Extension payload.
