# Historical Ecosystem

## Purpose

E2R is designed not only as a data format, but also as the foundation of a historical data ecosystem.

The ecosystem allows multiple datasets describing the same people, places, and events to coexist without requiring a single authoritative interpretation.

This enables applications to compare, merge, and analyze different historical perspectives while preserving their original viewpoints.

---

# Multiple Perspectives

History is rarely represented by a single universally accepted narrative.

Different datasets may represent different viewpoints, including:

- Academic history
- Local history
- National history
- Religious traditions
- Historical fiction
- Alternate history
- Fantasy worlds
- AI-generated hypotheses

These datasets are expected to coexist within the E2R ecosystem.

---

# Node-level Confidence

Confidence is associated with individual Core Objects rather than an entire Dataset.

Different Events describing the same historical occurrence may have different confidence values depending on the dataset.

For example:

Dataset A

Event
"The assassination of Person X"

confidence = 0.98

Dataset B

Equivalent Event (linked by aliasAs)

confidence = 0.41

Both datasets may be internally consistent.

The confidence value represents the confidence within the viewpoint represented by that dataset.

---

# aliasAs

The aliasAs relationship indicates that two Nodes are intended to represent the same real-world concept or occurrence.

aliasAs does not imply that:

- descriptions are identical
- interpretations are identical
- confidence values are identical

It only establishes semantic equivalence between Nodes.

---

# Future Possibilities

Possible future applications include:

- Cross-dataset comparison
- Dataset merging
- Viewpoint analysis
- Provenance tracking
- Historical debate visualization
- Parallel history exploration
- Fiction and historical comparison

---

# Design Philosophy

E2R intentionally separates:

- identity
- interpretation
- confidence

Identity may be shared through aliasAs.

Interpretation belongs to each Dataset.

Confidence is therefore viewpoint-dependent rather than globally defined.
