# Research Seed — On-Demand External Data, Vocabulary Fetch, and Human Name Generation

Date: 2026-08-15

Status: exploratory research seed

Normativity: non-normative

## Scope

This note records two related but not yet unified research topics:

1. an application fetching required vocabulary or descriptive data from an
   external provider when a concept is viewed or queried; and
2. an application generating fictional human-name candidates from historical
   or demographic name data.

The topics may share provider-facing mechanics, but this document does not
establish a common provider contract. It does not design an Extension, reopen
Names P1 or Grouping, authorize an application implementation, or authorize a
production writer, migration, repair, or Core `name` synchronization.

## Common conceptual pipeline

Both topics can be explored as:

```text
external source → provider adapter → query/fetch → normalization
                 → candidate/result → application use
```

Potentially shared concerns include provider identity, query parameters,
source/version metadata, licensing and attribution, caching, rate limiting,
reproducibility, and failure handling. The semantic responsibility remains
consumer-specific: a vocabulary provider supplies external information, while
a name generator selects candidates. Neither provider replaces E2R ownership
of meanings or records.

## Online-first browser applications

An online browser application may reasonably fetch data on demand instead of
bundling every external dataset locally. Network availability and provider
availability are separate assumptions. A design must distinguish at least:

- network unavailable;
- provider unavailable or timeout;
- rate limiting;
- identifier not found;
- response-format change; and
- provider dataset/version change.

Failure must not be silently interpreted as “the concept does not exist” or
“the generated name is unavailable.” Caching may improve performance,
reproducibility, and resilience, but cache policy is an open application
question rather than an offline-first requirement in this research seed.

## On-demand vocabulary fetch

When an application needs to display or explain a referenced concept, it may
look in a local cache and, on a miss, request only the required information
from an external vocabulary provider. A conceptual result may contain:

- canonical external identifier;
- human-readable label and description;
- language and alternative labels;
- broader, narrower, or related concepts when supplied;
- provider/source identity;
- source version or revision when available; and
- retrieval timestamp.

This is an application/service pattern, not a schema decision. An unresolved
question is how much information, if any, should be materialized into an E2R
Dataset: an identifier only, a minimal label, or a versioned snapshot.

## Human-name generation

The proposed generator is an application-side candidate generator, not a
Names Extension responsibility:

```text
source → provider → candidate pool → generator → generated candidate
                                      → user/application acceptance
                                      → eventual E2R representation
```

Candidate pools preserve source-derived facts such as name, rank, observed
count, jurisdiction, reference year, and provenance. A generator may provide
random or weighted selection, rarity preferences, exclusions, and a
deterministic seed. A generated candidate does not become an E2R record until
the application deliberately adopts it under the applicable existing
responsibilities.

### Given names

Given-name generation can query historical data by an approximate birth-year
range rather than deriving a single birth year from age. A target date, age,
jurisdiction, source category, rarity preference, and seed may produce a
candidate pool and weighted selection. This research does not change the
History schema or assert that age uniquely determines birth year.

### Surnames

Surname pools may be based on census population frequency, registration data,
or another explicitly identified basis. Provider metadata should preserve the
jurisdiction, dataset, reference year, population/registration basis, rank,
and count. Population-weighted mode is realistic but heavily favors common
surnames; separate common/typical/uncommon/rare modes may be more useful for a
fictional generator. Arbitrary inverse-frequency weighting should be tested,
not assumed, because it can overproduce the long tail.

Given-name and surname pools should not be combined without considering
jurisdiction, language, region, historical period, and source population.
Those compatibility constraints must not silently infer a character's
race, ethnicity, or other personal attribute.

## Candidate source directions

Initial source candidates for a bounded pilot include:

- U.S. Social Security Administration baby-name statistics for year-indexed
  given names;
- U.S. Census Bureau 2010 frequently occurring surnames for a long-tail
  surname pool;
- Office for National Statistics and National Records of Scotland datasets;
- Ireland's Central Statistics Office baby-name data;
- JMnedict/ENAMDICT as a Japanese proper-name candidate universe, subject to
  license review; and
- Wikimedia Japanese dumps as attestation or enrichment evidence, not as a
  population-frequency source.

Source-specific licensing, redistribution, automated-access policy,
suppression/privacy rules, update cadence, and version metadata require
separate verification. This note does not authorize scraping.

## Determinism and provenance

Reproducing a generated result may require more than a seed. Relevant inputs
may include provider identity, source dataset/version, normalized query,
generator algorithm version, and seed. A provider dataset update can change a
result even when the seed is unchanged. This connects to existing
deterministic-generation and Source/Citation research, but does not modify
those decisions.

## Candidate pool and generator separation

Keeping source normalization and candidate-pool construction separate from
selection algorithms allows the same pool to support given names, surnames,
places, occupations, or other application attributes. A future provider
abstraction should be tested against concrete source-specific adapters before
being treated as a shared architecture.

## Bounded pilot sequence

1. U.S. given-name pilot using year/range, source category, rarity preference,
   and seed.
2. U.S. surname pilot using the 2010 Census dataset and rarity modes.
3. Combine the two only as an application demonstration, preserving source
   metadata and avoiding demographic inference.
4. Test a second jurisdiction to expose source-specific normalization.
5. Test whether the same provider-facing mechanics can support on-demand
   vocabulary lookup.
6. Defer Japanese-name work until licensing, frequency, attestation, and
   surname/given-name separation are separately researched.

## Open questions

- What should an application materialize when an external identifier is
  displayed repeatedly: identifier, label, snapshot, or provider version?
- Which cache scope is appropriate: memory, session, IndexedDB, or none?
- How should provider failure be presented in the UI?
- How should approximate birth-year ranges be selected and blended?
- How should rarity buckets be derived from rank/count without distorting the
  tail?
- How much compatibility checking is useful without demographic inference?
- Which source metadata must accompany an adopted generated candidate?
- Is a shared provider-facing abstraction genuinely reusable across vocabulary
  lookup and name generation?

## Non-goals and closure boundary

This seed does not authorize a new Extension, External Data or Provider
Specification, Names P2/P3, Names Grouping selection, production name
writing, Core synchronization, Provenance payload design, Semantic/Dictionary
schema design, scraping, or application implementation. Any of those topics
requires its own bounded decision.
