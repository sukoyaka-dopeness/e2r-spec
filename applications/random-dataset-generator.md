# Random Dataset Generator

This document describes a reference application that generates E2R datasets automatically.

The application is intended for testing, benchmarking, demonstration, and experimentation.

Unlike an editor, its primary purpose is to produce datasets rather than modify existing ones.

---

# Goals

The Random Dataset Generator should make it easy to create datasets of various sizes and structures.

Generated datasets should be compatible with the E2R Core Specification.

Optional Extensions may also be generated.

---

# Typical Use Cases

- Benchmarking applications
- Stress testing
- Demonstrating E2R features
- Testing unknown Extension compatibility
- Generating sample datasets
- Producing datasets for AI experiments

---

# Dataset Size

The application should support configurable dataset sizes.

For example:

- Small
- Medium
- Large
- Custom

Typical parameters may include:

- number of Entities
- number of Events
- number of Relations

---

# Generation Modes

Multiple generation strategies may be supported.

Examples include:

## Random

Objects are generated using pseudo-random algorithms.

No semantic consistency is required.

This mode is useful for stress testing.

---

## Structured

Objects are generated according to predefined templates.

Examples include:

- family tree
- historical timeline
- organization
- bibliography
- fictional world

This mode produces more realistic datasets.

---

## AI-Assisted

An LLM generates a high-level scenario.

The generator then converts that scenario into an E2R dataset.

The LLM is responsible for semantic content.

The generator is responsible for producing a valid dataset.

---

# Extension Generation

Extensions may be generated independently from the Core.

Examples include:

- History Extension
- Coordinate Extension
- Dictionary Extension
- Layout Extension

Applications should also be tested using intentionally unknown Extensions.

---

# Unknown Extensions

The generator should optionally create Extensions that are not defined by E2R.

These Extensions help verify that applications correctly preserve unknown data.

Example:

```json
{
  "extensions": {
    "example-company-extension": {
      "internalScore": 42
    }
  }
}
```

---

# Deterministic Generation

Generation should optionally accept a random seed.

Using the same seed should reproduce identical datasets.

This enables reproducible benchmarks.

---

# Validation

Generated datasets should be validated before export.

The generator should ensure that:

- referenced IDs exist
- Relations are valid
- Core objects satisfy the specification
- generated JSON is well-formed

---

# Export

Generated datasets may be exported as JSON.

Future versions may support multiple output formats.

---

# Relationship to Benchmarking

This application complements the Benchmark documents.

Rather than storing benchmark datasets manually, datasets may be generated automatically.

This allows systematic evaluation across many dataset sizes and structures.

---

# Future Possibilities

Future versions may support:

- realistic historical simulations
- procedural world generation
- AI-assisted dataset generation
- synthetic benchmark suites
- Extension mutation
- dataset evolution
- branch generation
- distributed dataset generation

These features are outside the scope of an initial implementation.
