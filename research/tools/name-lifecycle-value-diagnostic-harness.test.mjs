import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { assessNameLifecycleCase, MODELS } from "./name-lifecycle-value-diagnostic-harness.mjs";

const fixture = JSON.parse(await readFile(
  new URL("../../examples/research/names/name-lifecycle-value-fixtures.json", import.meta.url),
  "utf8",
));

function fixtureCase(id) {
  return fixture.cases.find((candidate) => candidate.id === id);
}

test("exposes the two lifecycle models", () => {
  assert.deepEqual([...MODELS], [
    "L1-immutable-expression-identity",
    "L2-mutable-with-explicit-snapshot",
  ]);
});

test("cosmetic edits preserve identity under both models", () => {
  for (const model of MODELS) {
    assert.equal(assessNameLifecycleCase(model, fixtureCase("cosmetic-metadata-edit")).interpretation, "identity-preserved");
  }
});

test("L1 creates a new identity for Alice-to-Bob while L2 exposes unresolved value meaning", () => {
  assert.equal(
    assessNameLifecycleCase("L1-immutable-expression-identity", fixtureCase("alice-to-bob-substantive-replacement")).interpretation,
    "new-identity-for-bob",
  );
  assert.equal(
    assessNameLifecycleCase("L2-mutable-with-explicit-snapshot", fixtureCase("alice-to-bob-substantive-replacement")).interpretation,
    "historical-value-unresolved-without-snapshot",
  );
});

test("language and script changes require explicit identity policy", () => {
  for (const model of MODELS) {
    assert.equal(assessNameLifecycleCase(model, fixtureCase("language-or-script-change")).interpretation, "explicit-identity-policy-required");
  }
});

test("old and new applicability do not redirect", () => {
  assert.equal(
    assessNameLifecycleCase("L1-immutable-expression-identity", fixtureCase("old-and-new-applicability")).preservation,
    "preserve-no-redirect",
  );
});

test("explicit L2 snapshot remains separate from resolver classification", () => {
  assert.equal(
    assessNameLifecycleCase("L2-mutable-with-explicit-snapshot", fixtureCase("explicit-l2-value-snapshot")).interpretation,
    "current-reference-plus-separate-value-datum",
  );
});

test("lifecycle and resolver states remain independent", () => {
  assert.equal(
    assessNameLifecycleCase("L1-immutable-expression-identity", fixtureCase("unknown-missing-retired-replaced")).interpretation,
    "independent-lifecycle-and-resolution",
  );
});

test("later Claim and Evidence are explicit enrichment", () => {
  assert.equal(
    assessNameLifecycleCase("L2-mutable-with-explicit-snapshot", fixtureCase("later-claim-evidence")).interpretation,
    "explicit-enrichment-only",
  );
});
