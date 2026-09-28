# Relative Time 0.2.0 Sample Draft — Lantern Market

Status: **NON-PUBLIC CANDIDATE DRAFT / HUMAN REVIEW REQUIRED**

Dataset pair:

- [English](relative-time-0.2.0-lantern-market.en.e2r.json)
- [Japanese](relative-time-0.2.0-lantern-market.ja.e2r.json)

## Purpose and scenario

The fictional Lantern Market loses power during an evening market. Stallholders
light battery lanterns while an electrician isolates a damaged circuit. The
organizer reopens the market after both actions are complete.

Four undated Events and four Relative Time `0.2.0` `relative-position`
Relations express only the required partial order:

```text
                    ┌─ stallholders light lanterns ─┐
power outage ───────┤                                ├─ market reopens
                    └─ electrician isolates fault ──┘
```

The lantern setup and circuit isolation are unordered relative to one another,
so NarrativeLine can display them in the same Derived band. The other Core
Relations connect Events to the market or the people involved so that the same
Dataset remains a recognizable small graph in LiaisonScape. It contains no
History, Perspective, dates, or clock values.

## Draft and provenance boundary

This is an AI-assisted, project-created fictional draft prepared under Human
direction. The English/Japanese wording, localization, sample role, and
release provenance have not received final Human review. No external story,
images, or factual claims are intended. No Dataset license or redistribution
bucket is asserted here; steward review is required before any public exposure.

The files are not in NarrativeLine's built-in sample catalog, the Hub registry,
or the public Sample Gallery. Their presence here is not promotion or a release
authorization. Any later Hub inclusion requires a separate provenance and
rights review and Human decision.
