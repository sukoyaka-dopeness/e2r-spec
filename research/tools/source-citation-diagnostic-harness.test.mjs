import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { classifyCitationReferences } from "./source-citation-diagnostic-harness.mjs";

const fixtureUrl = new URL(
  "../../examples/research/source-citation/conceptual-roundtrip.json",
  import.meta.url,
);
const dataset = JSON.parse(await readFile(fixtureUrl, "utf8"));
const fixture = dataset.extensions["research.fixture.source-citation"];

const context = {
  namespaces: {
    core: {
      targetKinds: ["event"],
      targets: dataset.events.map((event) => ({ kind: "event", id: event.id })),
    },
    "research.fixture.sources": {
      targetKinds: ["record"],
      targets: fixture.sourceRecords.map((source) => ({
        kind: "record",
        id: source.researchId,
      })),
    },
    "research.fixture.claims": {
      targetKinds: ["record"],
      targets: [{
        kind: "record",
        id: fixture.laterEpistemicAddition.claim.researchId,
      }],
    },
  },
};

function citation(researchId) {
  return fixture.citationAssociations.find((candidate) => candidate.researchId === researchId);
}

test("classifies Source and Event references independently without an aggregate state", () => {
  const result = classifyCitationReferences(citation("citation-5"), context);

  assert.equal(result.sourceReference.state, "unknown");
  assert.equal(result.citationTargetReference.state, "resolved");
  assert.deepEqual(Object.keys(result), ["sourceReference", "citationTargetReference"]);
});

test("resolves one reusable Source for two Event Citations", () => {
  for (const researchId of ["citation-1", "citation-2"]) {
    const result = classifyCitationReferences(citation(researchId), context);
    assert.equal(result.sourceReference.state, "resolved");
    assert.equal(result.citationTargetReference.state, "resolved");
  }

  assert.equal(citation("citation-1").sourceReference.localId, "source-1");
  assert.equal(citation("citation-2").sourceReference.localId, "source-1");
});

test("keeps equal Source descriptions as distinct resolved identities", () => {
  const source2 = fixture.sourceRecords.find((source) => source.researchId === "source-2");
  const source3 = fixture.sourceRecords.find((source) => source.researchId === "source-3");

  assert.equal(source2.description, source3.description);
  assert.notEqual(source2.researchId, source3.researchId);
  assert.equal(classifyCitationReferences(citation("citation-3"), context).sourceReference.state, "resolved");
  assert.equal(classifyCitationReferences(citation("citation-4"), context).sourceReference.state, "resolved");
});

test("keeps a resolved Source separate from a missing Event target", () => {
  const result = classifyCitationReferences(citation("citation-6"), context);

  assert.equal(result.sourceReference.state, "resolved");
  assert.equal(result.citationTargetReference.state, "missing");
  assert.deepEqual(result, {
    sourceReference: {
      state: "resolved",
      reason: "exactly one target matches",
    },
    citationTargetReference: {
      state: "missing",
      reason: "known target identity is absent",
    },
  });
});

test("does not mutate Citation references while classifying them", () => {
  const association = citation("citation-6");
  const before = structuredClone(association);

  classifyCitationReferences(association, context);

  assert.deepEqual(association, before);
});

test("keeps later Claim and Evidence separate from the unchanged Citation", () => {
  const addition = fixture.laterEpistemicAddition;
  const originalCitation = citation(addition.unchangedCitationResearchId);

  assert.equal(originalCitation.semantics, "weak-citation-only");
  assert.equal(addition.evidence.sourceReference.localId, originalCitation.sourceReference.localId);
  assert.equal(addition.evidence.claimReference.localId, addition.claim.researchId);
  assert.equal("citationReference" in addition.evidence, false);
  assert.equal(classifyCitationReferences(originalCitation, context).sourceReference.state, "resolved");
});

test("classifies absent Citation references as malformed without guessing", () => {
  const result = classifyCitationReferences({}, context);

  assert.equal(result.sourceReference.state, "malformed");
  assert.equal(result.citationTargetReference.state, "malformed");
});
