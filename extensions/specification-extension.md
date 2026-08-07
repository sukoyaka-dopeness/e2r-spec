# Specification Extension

The Specification Extension defines machine-readable descriptions of E2R specifications.

Unlike the Dictionary Extension, which describes the meaning of application data, the Specification Extension describes the structure, purpose, and behavior of specifications themselves.

This enables E2R to become increasingly self-describing and supports future AI-assisted specification development.

---

# Goals

The Specification Extension aims to:

- Describe Extensions in a structured form.
- Describe fields and their intended meaning.
- Record relationships between Extensions.
- Support automatic documentation generation.
- Support AI-assisted specification analysis.
- Support long-term evolution of the E2R ecosystem.

---

# Design Principles

The Core specification intentionally remains minimal.

The Specification Extension does not change the behavior of the Core.

Instead, it provides structured metadata about specifications so that applications, tools, and AI systems can better understand them.

---

# Extension Structure

Specification information is stored in the Dataset-level `specification`
Extension.

```text
extensions.specification
```

The value at `extensions.specification` directly contains the
Specification Extension data. The Core does not add a common `data` or
Extension `version` wrapper.

---

# Describing Extensions

A specification entry may describe an Extension.

Possible information includes:

- Name
- Version
- Status
- Purpose
- Author
- Dependencies
- Compatibility
- Documentation

Example:

```json
{
  "extensions": {
    "specification": {
      "history": {
        "name": "History Extension",
        "version": "1.0",
        "status": "stable"
      }
    }
  }
}
```

The `version` in this entry describes the version of the specification named
by the entry. It is not a common Specification Extension envelope field and it
does not replace the Dataset's top-level Core `version`.

---

# Describing Fields

Fields may include structured descriptions.

Possible information includes:

- Name
- Data type
- Required or optional
- Intended meaning
- Example values
- Validation guidance

Example:

```json
{
  "extensions": {
    "specification": {
      "field": {
        "time": {
          "type": "TimeObject",
          "required": false,
          "description": "Represents the primary historical time."
        }
      }
    }
  }
}
```

---

# Dependencies

Extensions may describe relationships with other Extensions.

Examples include:

- Requires
- Optional dependency
- Compatible with
- Supersedes
- Deprecated by

This information allows tools to understand the structure of an ecosystem without hard-coded knowledge.

---

# Stability

Specifications may describe their maturity.

Possible values include:

- Draft
- Experimental
- Stable
- Deprecated
- Archived

Applications may use this information when presenting available Extensions.

---

# Documentation

Specification entries may reference additional documentation.

Examples include:

- Markdown documents
- External URLs
- Example datasets
- Tutorials

The format is intentionally left application-defined.

---

# Relationship to Dictionary Extension

The Dictionary Extension describes the meaning of application data.

The Specification Extension describes the meaning of specifications themselves.

Together they allow both datasets and the specifications that define them to become increasingly self-describing.

---

# AI-assisted Specification Design

Future AI systems may use the Specification Extension to:

- Explain unfamiliar Extensions.
- Detect duplicated concepts.
- Suggest Extension boundaries.
- Recommend refactoring.
- Generate documentation.
- Compare specification versions.
- Analyze interoperability.

The Specification Extension is intended to provide structured information rather than prescribing implementation details.

---

# Future Directions

Possible future capabilities include:

- Self-describing specifications
- Automatic specification validation
- Extension dependency graphs
- AI-generated documentation
- AI-assisted Extension decomposition
- Evolutionary specification design
- Specification version comparison
- Specification interoperability analysis

The long-term vision is to support an ecosystem in which specifications can be understood, analyzed, and evolved by both humans and AI while remaining compatible with the minimal Core.

---

# Extension Naming (Reference)

The normative naming rules are defined in
[`spec/extension-naming.md`](../spec/extension-naming.md). The historical
guidance below is retained only as context and must not be treated as a second
source of truth.

Applications and organizations are encouraged to use clear and stable Extension names.

Extensions intended for long-term interoperability should avoid application-specific prefixes.

Examples:

- `history`
- `media`
- `embedding`

---

# Experimental Extensions

Before an Extension becomes stable, applications may use implementation-specific names.

Recommended prefixes include:

- `draft.`
- `experimental.`
- `vendor.`

Examples:

```json
{
  "extensions": {
    "draft.embedding": { ... },
    "experimental.timeline": { ... },
    "vendor.example.relationship-type": { ... }
  }
}
```

These prefixes communicate that the Extension is not yet intended as a stable, interoperable specification.

Applications should not assume compatibility between independently developed experimental Extensions, even if they share similar purposes.

---

# Extension Evolution

An Extension may evolve over time.

A typical lifecycle is:

```
draft
    ↓
experimental
    ↓
stable
```

Applications may also maintain vendor-specific Extensions indefinitely.

The E2R Specification does not require any particular lifecycle.

---

# Stable Extensions

Stable Extensions should use concise and implementation-independent names.

For example:

```
history
embedding
media
probability
```

Renaming an Extension after it has become widely adopted should be avoided whenever practical.

---

# Unknown Extensions

Applications SHOULD preserve unknown Extensions whenever practical.

Applications MUST ignore Extensions they do not understand when reading a
Dataset.

Ignoring an unknown Extension does not invalidate the remainder of the Dataset.

The naming guidance above is retained for historical context only. The
normative source is [`spec/extension-naming.md`](../spec/extension-naming.md).
This document is responsible for describing machine-readable specification
metadata, not for maintaining a second naming system.
