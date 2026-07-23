# Investigation Application

This document describes ideas for an investigation application built on the E2R Core Specification.

This document is informational and is not part of the E2R Core Specification.

## Purpose

The Investigation Application assists users in organizing evidence, reconstructing events, and analyzing relationships during investigations.

The application is intended for both fictional and real-world investigations.

## Core Concepts

People, organizations, locations, objects, and documents are represented as Entities.

Incidents, observations, discoveries, communications, and other occurrences are represented as Events.

Connections between objects are represented as Relations.

## Investigation Workflow

Applications may support workflows such as:

- Collect evidence
- Record observations
- Build timelines
- Connect related objects
- Analyze relationship networks
- Organize competing hypotheses

## Evidence Management

Applications may organize information including:

- Documents
- Images
- Audio
- Video
- Physical evidence
- Witness statements
- Notes

Storage methods are application-specific.

## Timeline Reconstruction

Applications may reconstruct chronological sequences from available Events.

Possible capabilities include:

- Event ordering
- Missing event detection
- Alternative timelines
- Timeline comparison

## Relationship Analysis

Applications may visualize and analyze:

- Communication
- Ownership
- Employment
- Meetings
- Financial connections
- Family relationships
- Organizational structures

Applications may define additional relationship types through Extensions.

## Hypothesis Management

Applications may support multiple competing hypotheses without requiring a single definitive interpretation.

Different hypotheses may coexist within the same investigation.

## Collaboration

Applications may support collaborative investigations through independently created datasets.

Multiple investigators may contribute separate datasets that are later combined.

Merge behavior is application-specific.

## LLM-assisted Workflow

Applications may export investigation subsets together with prompts for manual use with external Large Language Models.

Possible assistance includes:

- Timeline reconstruction
- Relationship suggestions
- Contradiction detection
- Missing evidence identification
- Investigation summaries

Returned JSON may be validated before merging.

## Typical Use Cases

Examples include:

- Criminal investigations
- Journalism
- Historical research
- Accident analysis
- Fiction writing
- Intelligence analysis

## Relationship to the Core

The Investigation Application builds entirely upon standard E2R Entities, Events, and Relations.

Investigation methods, reasoning processes, visualization, and user workflows are application-specific.
