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

## Documentation

Start with the [Documentation Hub](docs/README.md). It links to Japanese and
English introductions, Dataset walkthroughs, specifications, applications, and
research material.

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

E2R-SPEC uses a role-based licensing map. Project-authored specification and
documentation prose is CC BY 4.0; standalone schemas and code-like artifacts
are MIT; eligible project-created examples and machine-readable data are CC0
1.0. Third-party or imported material keeps its source terms. See
[LICENSE.md](LICENSE.md) and [the public sample provenance record](docs/public-sample-provenance.md).

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

## Reference Applications

E2R-SPEC is developed together with practical applications.

These applications are not only consumers of the specification but also serve as validation platforms for its design.

Building real applications helps identify missing abstractions, unnecessary complexity, and opportunities for improvement.

Current reference applications include:

- NarrativeLine — timeline editing and visualization
- Relationship Graph — relationship editing and graph visualization

The specification and the applications evolve together through this iterative design process.

---

# Repository Structure

This repository consists of several complementary components.

## Core Specification

The `spec/` directory defines the normative E2R Core Specification.

## Extensions

The `extensions/` directory defines optional specifications that extend the Core while remaining interoperable.

## Examples

The `examples/` directory provides reference datasets demonstrating the specification and its Extensions.

## Applications

The `applications/` directory describes reference applications built on E2R.

These documents illustrate how the specification can be applied in practical software, including editors, browsers, generators, and analysis tools.

## Benchmark

The `benchmark/` directory contains ideas and datasets for evaluating interoperability, scalability, and application behavior.

## Research

The `research/` directory contains exploratory documents discussing long-term ideas related to the E2R ecosystem.

These documents are intentionally non-normative and are not part of the specification.
