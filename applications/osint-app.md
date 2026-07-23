# OSINT Application

This document describes ideas for an Open Source Intelligence (OSINT) application built on the E2R Core Specification.

This document is informational and is not part of the E2R Core Specification.

## Purpose

The OSINT Application assists users in collecting, organizing, correlating, and analyzing information obtained from publicly available sources.

Rather than storing isolated records, the application connects information into a structured network using E2R datasets.

## Core Concepts

Identifiable objects are represented as Entities.

Observed activities are represented as Events.

Connections between objects are represented as Relations.

## Possible Entities

Examples include:

- Person
- Organization
- Company
- Government agency
- Website
- Domain
- Email address
- Phone number
- Social media account
- IP address
- Cryptocurrency address
- Vehicle
- Device
- File
- Document
- Image
- Video
- Location

Applications may support additional object types through Extensions.

## Possible Events

Examples include:

- Publication
- Registration
- Employment
- Ownership change
- Communication
- Financial transaction
- Website update
- Travel
- Meeting
- Account creation

Applications may define additional event types through Extensions.

## Relationship Analysis

Applications may visualize relationships such as:

- Owns
- Controls
- Employs
- Associated with
- Communicates with
- References
- Located at
- Registered to
- Connected to

Applications may define additional relationship types through Extensions.

## Source Management

Applications may associate collected information with one or more information sources.

Examples include:

- Public websites
- Government databases
- News articles
- Academic publications
- Corporate documents
- Public registries

Source management is application-specific.

## Timeline Analysis

Applications may reconstruct timelines from collected Events.

Possible capabilities include:

- Chronological reconstruction
- Activity history
- Relationship evolution
- Event comparison

## Dataset Integration

Information may originate from multiple independent datasets.

Applications may support:

- Incremental collection
- Community-maintained datasets
- Dataset merging
- Duplicate detection
- Cross-reference analysis

Merge behavior is application-specific.

## LLM-assisted Workflow

Applications may export selected subsets of a dataset together with prompts for manual use with external Large Language Models.

Possible assistance includes:

- Entity extraction
- Event extraction
- Relation suggestion
- Duplicate detection
- Timeline reconstruction
- Investigation summaries

Returned JSON may be validated before merging.

## Typical Use Cases

Examples include:

- Open source intelligence
- Journalism
- Corporate investigations
- Historical research
- Academic research
- Security analysis
- Threat intelligence

## Relationship to the Core

The OSINT Application operates entirely on standard E2R Entities, Events, and Relations.

Collection methods, source evaluation, visualization, analysis techniques, and investigation workflows are application-specific.
