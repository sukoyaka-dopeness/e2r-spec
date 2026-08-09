# AI Workflow Research Backlog

Status: Research backlog

This document records experiments and open questions about AI-assisted E2R
workflows. It is informative. It does not define an E2R Extension, require AI
use, or make factual claims about Dataset content.

## Boundary

The Validator checks supported structural and specification requirements. It
does not edit input data and does not establish the factual correctness or
interpretation of a Dataset.

An AI-assisted workflow is therefore a pattern rather than an E2R capability:

```text
Natural-language request or source material
                  |
                  v
                 AI
                  |
                  v
             E2R Dataset
                  |
                  v
              Validator
             /         \
          valid       errors
            |           |
            v           v
          use     AI or human proposes a repair
                          |
                          v
                      Validator
```

Human review remains responsible for deciding whether content is factually
supported and appropriate for its purpose. Agreement among multiple AI systems
or the mere presence of information on the Web is not factual verification.

## Experiments

### Dataset generation

Test whether an LLM can produce a useful E2R Dataset from natural language or
source material. Observe Core structure, identifier handling, History
precision, Relation construction, Extension preservation, Validator results,
and factual quality separately.

### Dataset expansion

Ask an LLM to propose additions to an existing Dataset. Check whether it
preserves existing objects and Extensions, reuses matching Entities, avoids
duplicate Events, avoids inventing dates or precision, and produces suitable
Relations.

### Validator-guided repair

Give an intentionally invalid Dataset and the Validator's machine-readable
diagnostics to an LLM. Measure whether reported errors are repaired without
changing unrelated data, discarding unknown fields or Extensions, or
introducing new errors.

Early experiments should prefer proposal and human approval over autonomous
modification. Identifier generation and persistent identity ownership require
separate investigation.

## Experiment record

Record at least:

- experiment ID and date;
- purpose, input Dataset, source material, prompt, and model/environment;
- AI output and Validator output;
- human review and final result; and
- observations about structural and content quality.

Store original inputs and outputs whenever practical. Report structural and
content outcomes separately, for example: `Structural result: valid` and
`Content review: required`.

## Prompt recipes

Prompt recipes should be derived from experiments, not treated as a prior
standard. A recipe should state what an AI may change, require preservation of
unrelated data and opaque unknown Extensions, prohibit invented temporal
precision, and distinguish a proposed change from an approved Dataset edit.

## Related research

Provenance, sources, citations, external identifiers, Wikidata import, and
external vocabulary mapping need focused research before Dataset-level
standardization. In particular, distinguish:

- provenance: where a value or Object came from;
- evidence: what supports a factual claim; and
- external identity: how an E2R Object corresponds to an external identifier.

E2R internal identifiers must not be silently replaced with external
identifiers. Research should first establish interoperable use cases and
requirements.
