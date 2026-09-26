# LiaisonScape Frontier-12 Candidate-Set Extraction / Product-Selector Parity & Standalone Characterization 1

Date: 2026-09-16

## Final classification

`BLOCKED: CURRENT RESEARCH RUNNER IS NOT A BOUNDED EXTRACTABLE MODULE`

Architecture A remains canonical: Frontier should own candidate-set generation
and Product should own downstream selection. However, this checkpoint did not
perform the extraction because the current source does not expose the structural
generator as a module boundary that can be moved without a substantial refactor.

## Source-backed finding

`tools/generic-crossing-search.mjs` contains the recovered lineage, but its
Frontier path is a private, process-level runner. `productionStructuralFrontier`
closes over `graph`, `edges`, environment-derived configuration, and numerous
private candidate-pool/search helpers. The same runner later performs
Product-authoritative `presentationMetrics`, eligibility/sorting, and final
canonicalization.

The structural candidate pool can be conceptually separated, but extracting it
requires moving a large dependency region, introducing an explicit input/config
contract, and guarding the current CLI/reporting execution. Copying the logic
into a new module would create a second Frontier implementation and invalidate
the executable-provenance/parity goal. That is not a bounded behavior-preserving
change.

## What was not claimed

No candidate-set module, Product selector adapter, solver-only timing, or new
parity test was added. Existing lineage evidence remains the prior 10
file-backed plus 3 dense synthetic exact family/fingerprint replay. It includes
the complete research runner and does not prove an extracted boundary.

The saved Human Review result remains `QUALIFIED`; no provider reselection or
quality retuning occurred. Production remains `settleInitialPlacement`.

## Required next implementation decision

The next extraction checkpoint must be authorized as a structural refactor with
one shared implementation and an explicit dependency boundary. It should:

1. move the structural candidate generator without duplicating it;
2. separate normalized serializable input from runner globals;
3. preserve candidate identity/order and add candidate-set parity;
4. retain Product selection as a downstream stage; and
5. only then measure Frontier generation and Product selection separately.

Until that refactor is scoped and verified, Worker/cooperative/Cancel and
transient preview decisions remain premature. No production source behavior was
changed in this checkpoint.
