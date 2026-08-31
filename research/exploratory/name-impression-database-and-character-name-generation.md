# Perceived Name Impression Database and Character Name Generation

Date: 2026-09-01

Status: Research seed / exploratory / non-normative

## Purpose

This research seed explores a database that records perceived impressions of
character names for use by a future character-name generator. It does not
define Core behavior, reopen Names P1, register an Extension, select a source,
or authorize implementation.

The intended research question is whether a name candidate can be described by
repeatable human-perception signals that help a generator match a character
brief. The result must remain distinct from demographic or historical facts
about the people who use that name.

## Core research distinction

The database must keep these claims separate:

- **Demographic or historical fact:** an observed frequency, cohort, period,
  region, or source record associated with a name.
- **Perceived name impression:** a respondent's or cohort's impression of how a
  name sounds or feels.

A perception score is not evidence that people with the name have the rated
  traits. A name that respondents perceive as old-fashioned, masculine, or
  intellectual must not be presented as a demographic fact about its bearers.
Respondent locale, language, age cohort, region, cultural background, media
exposure, historical period, and stereotype effects are possible sources of
bias and must be recorded or bounded in later research.

## Candidate source survey

Future source research may examine separate pools for Japanese and English:

- surname / family name sources; and
- given name sources.

Possible source classes include official statistics, census-like frequency
data, public baby-name datasets, historical name lists, genealogy records,
licensed onomastics data, and open structured sources such as Wikidata. This
checkpoint performs no web fetch and makes no claim that any source is
available, representative, redistributable, or suitable.

Any later source inventory should record, at minimum:

- source identity and publisher;
- URL or dataset identity;
- language, country or region, and script;
- observed period and retrieval date;
- revision or version;
- license, redistribution permission, and attribution;
- offline/cache behavior;
- duplicate and spelling normalization; and
- romanization or transliteration rules.

## Perception dimensions

An exploratory rating interface may test two-axis or multi-axis profiles. The
following bipolar dimensions are hypotheses, not semantic fields of the E2R
Core:

- old-fashioned ↔ modern;
- masculine ↔ feminine; and
- physical ↔ mental / intellectual.

Quadrant, slider, and radar presentations should be compared for respondent
clarity and repeatability. A rating describes perceived name impression, not a
person's gender, age, body, ability, or personality.

## Possible generator workflow

A future research prototype could evaluate:

```text
character brief
  -> target impression vector
  -> surname candidate ranking
     + given-name candidate ranking
  -> combination and optional diversity rule
  -> optional deterministic seed
  -> generated character name
```

The generator may use perceived impression, source facts, or both as separate
signals. It must not silently convert frequency into impression or impression
into demographic truth. Combination effects between surname and given name
remain open research questions.

## Deterministic-generation connection

The existing exploratory [Deterministic Generation](deterministic-generation.md)
research is relevant if a future name generator promises repeatable output.
That connection is only a research direction. A later purpose-specific
generator experiment should define its Engine version, normalized inputs,
parameters, optional seed, output equality, dependency scope, and failure
containment. It should return a validated proposal or delta rather than mutate
an E2R Dataset directly.

Determinism does not make generated names Owned Dataset facts. An intentional
application workflow would be required before adoption, and any adopted name
would remain subject to the responsible Core or Extension rules.

## E2R and Names P1 boundary

This seed may use E2R Entities, Relations, Events, or an external analytical
table as a dogfood fixture, but it does not decide which representation is
appropriate. It does not:

- change the Core `name` contract;
- add surname or given-name grouping semantics to Core;
- reopen or activate Names P1;
- authorize a Names writer;
- define an impression Extension or a universal Generation Extension; or
- make a rating, source frequency, or generator result interoperable Dataset
  truth.

The future research database may remain separate from E2R until ownership,
privacy, bias, source licensing, and interoperability questions are answered.

## Privacy and bias boundary

Respondent research should minimize personally identifying information. Raw
respondent identity should not be joined to a name database without an
explicit, justified policy. Cohort metadata should be minimized, and aggregate
release should be evaluated for re-identification risk.

The research must report sampling limits and stereotype effects rather than
presenting an aggregate perception score as objective truth. Japanese and
English results should not be merged without preserving language, script, and
cohort context.

## Open research questions

1. Which licensed or open Japanese and English surname/given-name sources are
   usable under their actual redistribution terms?
2. Can historical frequency and perceived age impression be measured as
   separate signals?
3. Are respondent ratings sufficiently repeatable within a defined cohort?
4. How do locale, cohort, region, script, and romanization change scores?
5. Does a surname-plus-given-name combination have an interaction effect?
6. Which interface best communicates uncertainty: quadrant, slider, or radar?
7. What bias disclosure is necessary for a character-generation workflow?
8. Can a deterministic, seed-controlled prototype reproduce its declared
   result without network access?

## Initial experiment ideas

These are future ideas only:

- N1: a small licensed Japanese given-name pool, two axes, and a small
  respondent set;
- N2: quadrant versus slider/radar repeatability for the same names;
- N3: surname-plus-given-name composition effects;
- N4: English historical frequency versus perceived age; and
- N5: Japanese perceived age versus any available historical/source proxy.

## Validation and next boundary

This document is a research seed and requires no schema or application
validation beyond repository Markdown and roadmap consistency. It does not
authorize source acquisition, web fetching, an app, a schema, a writer, or a
release change. A future implementation proposal must first define source
rights, privacy, measurement protocol, and the responsibility boundary with
Names P1.
