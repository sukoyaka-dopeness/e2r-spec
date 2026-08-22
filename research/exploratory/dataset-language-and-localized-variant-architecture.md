# Dataset Language and Localized Variant Architecture

Status: Exploratory research / non-normative

This document records research questions around Dataset content language,
localized Dataset variants, object alignment, Dictionary vocabulary, and
Semantic meaning. It does not change the E2R Core, register an Extension, or
define a schema.

## Responsibility separation

The following concepts are related but distinct:

1. Application UI locale: the language used by an application interface.
2. Dataset content language: the language or languages used by Dataset content.
3. Localized variant relationship: a relationship between separate Dataset
   artifacts prepared as language variants.
4. Object identity inside one Dataset: a Dataset-local Core Object identifier.
5. Object alignment across variants: evidence that two local objects correspond
   in curated localized counterparts.
6. Dictionary vocabulary language: the language of a vocabulary label or entry.
7. Semantic identity/meaning: the domain meaning represented by a semantic
   assertion or vocabulary concept.
8. Presentation language: the language selected for rendering by an application.
9. Hub locale: the current language of Hub itself.
10. Shared-link requested locale: a presentation-language request carried by a
    URL to a recipient application.

No single `locale` field should silently represent all of these concerns.
The Cross-App Locale design remains focused on application presentation and
shared-link recipient preference. This research does not redefine it.

## Dataset content language

A Dataset-level description of content language could help a Dataset describe
itself outside Hub. Potential uses include catalog filtering, user notices when
Dataset and UI languages differ, and future translation workflow discovery.

Illustrative names such as `contentLanguages` and
`primaryContentLanguage` are research placeholders only. They are not adopted
field names.

The strongest current candidate is a small descriptive addition to the Metadata
Extension in a future version, if the requirement remains limited to statements
such as “this Dataset predominantly contains Japanese content” or “this
Dataset contains Japanese and English content.” Metadata already owns
Dataset-level descriptive and identifying information and is designed to remain
separate from Core structure.

This candidate must not cause an application to select its UI locale or choose
a Dataset variant automatically. Japanese UI with an English Dataset and
English UI with a Japanese Dataset remain valid.

## Metadata versus a separate responsibility

Metadata is a natural candidate when the value is descriptive catalog
information about one Dataset artifact. A separate localization-related
responsibility becomes more likely if requirements include:

* translation counterpart or localization-family relationships;
* source/original language and translation status;
* per-object or field-level language mapping;
* fallback or selection rules for multilingual values;
* localization provenance;
* merge, split, or structural alignment claims between Dataset artifacts.

These requirements should not be forced into a simple Metadata field. They may
eventually require a localization-specific Extension, Dataset lineage or
provenance model, or external catalog metadata. The owner is unresolved.

No new Extension is proposed in this checkpoint.

## Evidence from current localized samples

The current EN/JA canonical pairs provide concrete evidence for a useful
non-normative convention:

| Pair | EN Dataset ID | JA Dataset ID | EN counts (Entity/Event/Relation) | JA counts | Shared Object IDs |
| --- | --- | --- | --- | --- | ---: |
| Apollo 11 | `apollo-11-mission-en-v1` | `apollo-11-mission-ja-v1` | 9/12/66 | 9/12/66 | 87 |
| Ashen Crown | `ashen-crown-en-v1` | `ashen-crown-ja-v1` | 10/12/57 | 10/12/57 | 79 |
| Titanic | `titanic-final-voyage-en-v1` | `titanic-final-voyage-ja-v1` | 13/18/40 | 13/18/40 | 71 |

For these three pairs, all Entity, Event, and Relation local IDs match while
the Dataset IDs differ. Names and other human-readable values are localized,
and structural correspondence is preserved.

This is fixture evidence, not a normative guarantee for arbitrary Datasets.
The convention should be preserved for curated localized samples because it
enables useful comparison without implying global identity.

## Dataset IDs

The current preferred hypothesis is that localized files remain distinct
Dataset artifacts and retain distinct Dataset IDs. This is appropriate because
the files may be edited, distributed, versioned, or structurally changed
independently. A Dataset ID must not imply that two artifacts are byte-identical
or that their translation state is synchronized.

No Dataset IDs are changed by this research.

## Object ID alignment boundary

For curated localized counterparts, preserving a local Object ID when the
underlying structural object remains the same is a useful authoring convention.
It can support side-by-side viewing, synchronized selection, structural diff,
translation completeness checks, and future assisted translation.

However, the same Object ID in two arbitrary Datasets does not establish
cross-Dataset identity. Core Object IDs remain Dataset-local unless an explicit
future Dataset relationship supplies additional alignment evidence.

Therefore:

```text
same Object ID alone != global cross-Dataset identity
```

An application must not merge, replace, or synchronize objects solely because
their local IDs happen to match.

## Localized counterpart relationship

Before matching local IDs can be used as alignment evidence, the two Dataset
artifacts should be known to be curated localized counterparts. Possible future
representations include:

* Dataset-level Metadata describing a localization family;
* a localization-specific Extension;
* provenance or Dataset lineage describing source and derived artifact;
* external catalog metadata that relates independently published files.

The correct owner is unresolved. A future relationship would need to distinguish
translation, adaptation, fork, revision, and unrelated coincidence. It should
also preserve source/provenance and allow structural divergence.

## Structural divergence hypothesis

The following is a candidate authoring rule for future research only.

Preserve a local Object ID when wording, name, or description changes are
translations/localizations and the semantic subject and substantive Event or
Relation identity remain the same.

Use a different local Object ID when an object is split or merged, its semantic
subject changes, a Relation meaning changes, an Event identity materially
changes, or the localized artifact intentionally restructures the content.

These rules are not yet precise enough for validation or automatic alignment.
Translation is not guaranteed to be perfect semantic equivalence, especially for
cultural, legal, historical, or ambiguous terminology.

## Relationship with Names

Names P1 already treats names as object-local data with optional language and
script information. This supports a possible single Dataset containing
multilingual names/content.

Separate EN/JA Dataset variants remain a different workflow: each artifact can
present one localized view while preserving corresponding local IDs. The models
can coexist:

* one Dataset with multilingual Names;
* separate localized Dataset variants;
* a hybrid Dataset plus localized counterpart workflow.

Stable object identity and language-tagged Names are complementary, not
substitutes. A translated Name does not by itself prove that two arbitrary
objects or terms are semantically identical.

## Dictionary multilingual responsibility

The current Dictionary direction concerns reusable semantic dictionaries,
vocabulary identity, localized labels, and future external vocabulary mapping.
Dictionary entries may provide localized labels, but this does not make a
Japanese label automatically equivalent to an English label.

The current research hypothesis is that vocabulary entries in different
languages should be first-class vocabulary data. Future distinctions may
include concept/vocabulary identity, preferred and alternative labels,
language-tagged labels, translated labels, external mappings, and mapping type.

The Dictionary should preserve enough provenance and scope to avoid inferring
semantic equivalence from identical text or from an apparent translation.
Schema and identity rules remain open.

## Semantic multilingual responsibility

The Semantic direction concerns semantic assertions, vocabulary identity,
Relation typing, and external mappings. A useful hypothesis is that semantic
meaning should remain language-independent where possible, while human-readable
labels describing that meaning may be multilingual:

```text
semantic concept X
  English label
  Japanese label
```

This is not a universal Concept model. Some language-specific terms genuinely
distinguish different concepts, and translation may be approximate. Future
tooling should preserve vocabulary identity, language, provenance, mapping
type, and possibly confidence or status before asserting semantic equality.

## Future translation and comparison tooling

The current sample alignment convention could support future tooling such as:

* opening EN and JA artifacts side by side;
* synchronizing selected Entity, Event, or Relation by curated aligned ID;
* showing source and target text together;
* detecting untranslated or missing objects;
* detecting structural divergence;
* suggesting machine-assisted translations;
* checking Relation structure across variants; and
* comparing translation revisions.

These are future research opportunities, not Initial Public Release blockers
and not permissions granted by matching IDs alone.

## Relationship to current locale startup work

The immediate locale work remains separate and higher priority:

* recipient-preference experiments concern application UI presentation requested
  by a shared URL;
* content-language research concerns what language Dataset content uses;
* localized-counterpart research concerns relationships between Dataset
  artifacts.

Dataset language research must not be added to the current locale parser,
recipient conflict Dialog, or Handoff semantics. Hub's current choice of EN/JA
sample URLs is acceptable as product curation, not a universal rule that UI
locale determines Dataset language.

## Risks and open questions

Open questions include:

* whether descriptive content language belongs in Metadata vNext or another
  Dataset-level responsibility;
* how a localized counterpart relationship records source, family, revision,
  adaptation, and provenance;
* how to represent split/merge and partial alignment;
* how Names, Dictionary, and Semantic mappings expose language without making
  translation equal identity;
* whether external catalog metadata is sufficient for independently published
  variants; and
* what evidence is required before any field or Extension is formalized.

Primary risks are accidental UI/Dataset coupling, treating local IDs as global
identity, overclaiming translation equivalence, and placing language semantics
in Metadata before the broader responsibility boundary is clear.

## Non-goals

This document does not:

* add or rename Dataset fields;
* define `contentLanguages` or `primaryContentLanguage`;
* create a localization, lineage, Dictionary, or Semantic schema;
* change Core or Extension validation;
* change Dataset IDs or Object IDs;
* modify Hub, NarrativeLine, LiaisonScape, Validator, or Dataset files; or
* make Dataset language metadata an Initial Public Release blocker.

## Future evidence needed

Before formalization, gather:

1. more curated EN/JA or multilingual Dataset pairs, including deliberate
   structural divergence;
2. catalog and application use cases that need content-language metadata;
3. examples distinguishing translation, adaptation, fork, and revision;
4. Names/Dictionary/Semantic examples with ambiguous or non-equivalent terms;
5. cross-application preservation and unknown-field evidence; and
6. a reviewed owner for counterpart lineage/alignment claims.

Until then, preserve the current sample convention as useful fixture practice
and keep all language responsibilities explicitly separate.
