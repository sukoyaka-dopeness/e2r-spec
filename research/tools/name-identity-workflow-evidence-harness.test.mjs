import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { assessNameWorkflow, POLICIES, WORKFLOWS } from "./name-identity-workflow-evidence-harness.mjs";

const fixture = JSON.parse(await readFile(
  new URL("../../examples/research/names/name-identity-workflow-evidence.json", import.meta.url),
  "utf8",
));

test("exposes the two concrete workflows and three policies", () => {
  assert.equal(fixture.workflows.length, 2);
  assert.deepEqual([...POLICIES], ["P1-expression", "P2-binding", "P3-hybrid"]);
  assert.deepEqual([...WORKFLOWS], ["historical-timeline-naming", "multilingual-display-search"]);
});

test("P1 is the strongest current fit for historical timeline naming", () => {
  assert.deepEqual(assessNameWorkflow("P1-expression", "historical-timeline-naming"), {
    status: "strongest-current-fit",
    preservation: "preserve-old-expression",
  });
});

test("P2 historical naming remains conditional on version or snapshot", () => {
  assert.equal(assessNameWorkflow("P2-binding", "historical-timeline-naming").status, "conditional-on-version-or-snapshot");
});

test("P3 supports historical naming with additional identity complexity", () => {
  assert.equal(assessNameWorkflow("P3-hybrid", "historical-timeline-naming").status, "strong-but-larger");
});

test("P1 preserves multilingual variants but needs grouping", () => {
  assert.deepEqual(assessNameWorkflow("P1-expression", "multilingual-display-search"), {
    status: "strong-preservation-needs-grouping",
    preservation: "preserve-variants",
  });
});

test("P2 and P3 provide grouping tradeoffs without erasing variants", () => {
  assert.equal(assessNameWorkflow("P2-binding", "multilingual-display-search").preservation, "preserve-variants");
  assert.equal(assessNameWorkflow("P3-hybrid", "multilingual-display-search").preservation, "preserve-variants");
});
