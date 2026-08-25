# E2R Self-Description — Machine-Readable Dogfood

`examples/e2r-self-description.json` is an informative, experimental
Machine-Readable Dogfood Dataset: **E2R describing E2R using E2R**.

It is intentionally small and current-focused. It represents E2R Core, the
two registered Stable Extensions (Metadata and History), selected Draft or
Experimental Extensions, the reference applications, the Validator, and the
Hub entry point. The ordinary `describes` Relation from `E2R Self-Description`
to `E2R` is content-level self-description; it is not Lineage self-reference.

The Dataset has identity `e2r-self-description-0.1.0` and Core version `1.0`.
It declares Lineage Draft `0.1.0` as a `derived` child of the earlier L0
prototype Dataset `l0-e2r-lineage-self-description`. This is a distinct parent
identity and is not a reference to the new Dataset itself.

The artifact is intended for:

- NarrativeLine timeline reading of the bounded milestone Events;
- LiaisonScape graph reading of the ecosystem Entities and Relations; and
- e2r-validator validation of Core, Metadata, and Lineage Draft structure.

The descriptive Relation words (`extends`, `implements`, `validates`, `uses`,
and `milestone`) are ordinary domain vocabulary, not a new machine-semantic
Relation Extension. The artifact does not attempt to encode the complete E2R
specification, every historical commit, or Source/Citation claims.

Normative authority remains the E2R specification documents and registered
specification artifacts. This Dataset does not become normative merely because
it is encoded in E2R. NarrativeLine and LiaisonScape are not required to
interpret Lineage semantics; they may preserve the unsupported payload
opaquely.

The artifact is local and not yet published through E2R Hub. A future Hub
surface may offer open, validate, and view-JSON actions after public URL,
redistribution status, final user-facing wording, and the eventual
standards/document licensing decision are resolved. No license is selected by
this artifact.
