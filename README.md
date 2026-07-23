# E2R-SPEC

## What is E2R?

E2R-SPEC (Entity–Event–Relation Specification) is an open specification for representing narratives, histories, knowledge graphs, investigations, and other interconnected information using a minimal core model.

## Goals

Single Source of Truth
Minimal Core
Extensible by design
Multiple views from the same data

## Design Principles

https://github.com/sukoyaka-dopeness/e2r-spec/blob/main/spec/philosophy.md

## Repository Structure

spec/
Core specification and design philosophy

extensions/
Standard and candidate extensions

benchmark/
Validation scenarios for the specification

examples/
Reference datasets and examples

applications/
Example applications based on E2R

sessions/
Archived design sessions

## Current Status

E2R-SPEC is currently under active design. The core concepts and design philosophy are being established before the JSON format is finalized.

## Roadmap

Core specification

JSON format

Standard extensions

Reference datasets

Reference applications

Version 1.0

## License

License information will be added before the first public release.

## Sessions

- E2R-Session-0001.md (Core Principles)
- E2R-Session-0002.md (Core JSON Design: Dataset)

---
One narrative, many views.
A minimal specification for interconnected narratives.

## Ecosystem

E2R is designed as the foundation of an ecosystem rather than a single application.

Timeline editors, relationship diagrams, worldbuilding tools, knowledge management systems, AI-assisted editors, and future applications can all exchange information through a common E2R Dataset.

By using a shared Intermediate Representation (IR), applications remain loosely coupled while allowing users to build flexible workflows tailored to their own use cases.
