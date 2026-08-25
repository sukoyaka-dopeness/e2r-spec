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

## Curated development chronology

The Dataset is a bounded chronology snapshot through L7 and S1 on
2026-08-25. It is curated from committed E2R session logs and dated result or
decision documents; Git history is used only as a secondary ordering and
existence cross-check. It is not an exhaustive commit history and does not
claim that every implementation, acceptance, research checkpoint, package
publication, or distribution event is represented.

The selected milestones are:

1. 2026-08-05 — History Extension 1.0.0 established.
2. 2026-08-08 — NarrativeLine MVP completed.
3. 2026-08-08 — E2R Validator MVP integrated.
4. 2026-08-16 — LiaisonScape first distribution completed.
5. 2026-08-18 — E2R Hub first distribution completed.
6. 2026-08-25 — Lineage Draft and its bounded evidence milestones.
7. 2026-08-25 — E2R Self-Description dogfood created.

The four existing Lineage Events remain stable and are dated 2026-08-25.
Same-day Lineage milestones use `temporalOrder` only where the documented L0
through L7 phase sequence establishes relative order; no clock time or
timezone is invented. The two 2026-08-08 milestones use the same bounded
ordering approach from the Session 0021/0020 completion sequence. The S1
standards-licensing research checkpoint is deferred because it is governance
research rather than a technical milestone needed to explain the artifact.

The chronology adds History data to the current Events without changing the
Dataset identity `e2r-self-description-0.1.0`. It remains informative,
experimental, non-normative dogfood; normative authority remains the
specification documents and registered specification artifacts.
