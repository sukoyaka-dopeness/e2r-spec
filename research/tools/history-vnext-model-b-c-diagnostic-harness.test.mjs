import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import {
  assessModelBCase,
  PROFILES,
} from "./history-vnext-model-b-c-diagnostic-harness.mjs";

const fixtureUrl = new URL(
  "../../examples/research/history-vnext/model-b-c-conceptual-fixtures.json",
  import.meta.url,
);
const fixture = JSON.parse(await readFile(fixtureUrl, "utf8"));

function caseById(id) {
  return fixture.cases.find((fixtureCase) => fixtureCase.id === id);
}

test("exposes exactly the three research reader profiles", () => {
  assert.deepEqual([...PROFILES], [
    "profile-b-full",
    "profile-b-names-only",
    "profile-c-applicability-only",
  ]);
  assert.equal(fixture.profiles.length, 3);
});

test("Model B full interprets Name meaning and reuses temporal capability", () => {
  const result = assessModelBCase("profile-b-full", caseById("one-name-one-interval"));

  assert.equal(result.interpretation, "interpret-name-with-temporal-capability");
  assert.equal(result.preservation, "preserve");
});

test("Names-only profile preserves unsupported temporal data without inventing it", () => {
  const result = assessModelBCase("profile-b-names-only", caseById("successive-names"));

  assert.equal(result.interpretation, "interpret-name-preserve-unsupported-temporal");
  assert.equal(result.preservation, "preserve");
});

test("Applicability-only profile does not infer a shared used/valid contract", () => {
  const result = assessModelBCase("profile-c-applicability-only", caseById("used-versus-valid"));

  assert.equal(result.interpretation, "no-shared-contract");
  assert.equal(result.preservation, "preserve");
});

test("overlapping Names remain coexistence rather than automatic conflict", () => {
  const result = assessModelBCase("profile-b-full", caseById("overlapping-names"));

  assert.equal(result.interpretation, "interpret-name-with-temporal-capability");
  assert.match(result.note, /Names owns domain meaning/);
});

test("Alice-to-Bob edit keeps historical value meaning unresolved", () => {
  for (const profileId of PROFILES) {
    const result = assessModelBCase(profileId, caseById("alice-to-bob-substantive-edit"));
    assert.equal(result.interpretation, "historical-value-unresolved");
    assert.equal(result.preservation, "preserve-and-report");
  }
});

test("unknown and missing reference diagnostics remain independent", () => {
  const result = assessModelBCase("profile-b-full", caseById("independent-unknown-and-missing"));

  assert.equal(result.interpretation, "independent-reference-diagnostics");
  assert.match(result.note, /unknown and missing remain distinct/);
});

test("later Claim and Evidence are explicit enrichment", () => {
  const result = assessModelBCase("profile-b-full", caseById("later-claim-evidence"));

  assert.equal(result.interpretation, "explicit-enrichment-only");
  assert.equal(result.preservation, "preserve");
});

test("unknown profile or case is preserved and reported", () => {
  assert.deepEqual(
    assessModelBCase("future-profile", { id: "future-case" }),
    {
      interpretation: "malformed",
      preservation: "preserve-and-report",
      note: "profile and fixture case are required",
    },
  );
  assert.equal(
    assessModelBCase("profile-b-full", { id: "future-case" }).preservation,
    "preserve-and-report",
  );
});
