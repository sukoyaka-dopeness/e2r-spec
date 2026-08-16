import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { assessNameIdentityCase, POLICIES } from "./name-identity-multilingual-diagnostic-harness.mjs";

const fixture = JSON.parse(await readFile(
  new URL("../../examples/research/names/name-identity-multilingual-fixtures.json", import.meta.url),
  "utf8",
));

function fixtureCase(id) {
  return fixture.cases.find((candidate) => candidate.id === id);
}

test("exposes the three identity policies", () => {
  assert.deepEqual([...POLICIES], ["P1-expression", "P2-binding", "P3-hybrid"]);
  assert.equal(fixture.policies.length, 3);
});

test("language and script do not prove pronunciation or identity equivalence", () => {
  for (const policy of POLICIES) {
    assert.equal(assessNameIdentityCase(policy, fixtureCase("english-japanese")).preservation, "preserve");
    assert.match(assessNameIdentityCase(policy, fixtureCase("original-transliteration")).note, /do not prove equivalence/);
  }
});

test("naming-kind remains distinct from display preference", () => {
  assert.equal(
    assessNameIdentityCase("P2-binding", fixtureCase("short-legal-naming-kind")).interpretation,
    "typed-variant-under-binding",
  );
  assert.equal(
    assessNameIdentityCase("P1-expression", fixtureCase("short-legal-naming-kind")).interpretation,
    "distinct-naming-kind-expression",
  );
});

test("context requires explicit policy", () => {
  assert.equal(
    assessNameIdentityCase("P3-hybrid", fixtureCase("community-context")).interpretation,
    "explicit-context-policy-required",
  );
});

test("historical Alice to Alicia preserves old meaning without redirect", () => {
  assert.equal(
    assessNameIdentityCase("P1-expression", fixtureCase("historical-alice-alicia")).interpretation,
    "new-expression-identity-or-variant",
  );
  assert.equal(
    assessNameIdentityCase("P2-binding", fixtureCase("historical-alice-alicia")).interpretation,
    "version-or-value-datum-required",
  );
  assert.equal(
    assessNameIdentityCase("P3-hybrid", fixtureCase("historical-alice-alicia")).preservation,
    "preserve-no-redirect",
  );
});

test("unknown language and script metadata remains preservable", () => {
  for (const policy of POLICIES) {
    const result = assessNameIdentityCase(policy, fixtureCase("unknown-language-script"));
    assert.equal(result.interpretation, "preserve-unknown-vocabulary");
    assert.equal(result.preservation, "preserve");
  }
});
