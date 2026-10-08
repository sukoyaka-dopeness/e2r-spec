import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const EXTENSION_ID = "draft.github.sukoyaka-dopeness.dimension-assessment";
const SPECIFICATION_ID = "draft.github.sukoyaka-dopeness.specification";
const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const repositoryRoot = join(scriptDirectory, "..");
const approvalPath = join(repositoryRoot, "docs/parameterplotter/ashen-crown-candidate-0.2.0-canonical-content-approval-2026-10-08.md");
const japanesePath = join(repositoryRoot, "examples/ashen-crown.ja.e2r.json");
const englishPath = join(repositoryRoot, "examples/ashen-crown.en.e2r.json");

function readJson(path) {
  return JSON.parse(readFileSync(path, "utf8"));
}

function parseApprovedDimensions(markdown) {
  const finalSection = markdown.split("## Final wording approved by Human")[1];
  assert.ok(finalSection, "Human-approved final wording section exists");
  const table = finalSection.split("### `ashen.command`")[0];
  const approved = new Map();

  for (const line of table.split(/\r?\n/)) {
    if (!line.startsWith("| `ashen.")) continue;
    const cells = line.split("|").map((cell) => cell.trim());
    const id = cells[1].replaceAll("`", "");
    const [lowLabel, highLabel] = cells[6].split(" / ");
    assert.ok(lowLabel && highLabel, `approved endpoint labels parse for ${id}`);
    approved.set(id, {
      name: cells[3],
      lowLabel,
      highLabel,
    });
  }

  for (const [id, dimension] of approved) {
    const heading = `### \`${id}\``;
    const headingIndex = finalSection.indexOf(heading);
    assert.notEqual(headingIndex, -1, `description heading exists for ${id}`);
    const nextHeading = finalSection.indexOf("\n### `", headingIndex + heading.length);
    const section = finalSection.slice(headingIndex, nextHeading === -1 ? undefined : nextHeading);
    const paragraph = section.match(/\*\*JA Description:\*\* ([\s\S]*?)(?:\r?\n\s*\r?\n|$)/)?.[1];
    assert.ok(paragraph, `Human-approved JA Description exists for ${id}`);
    dimension.description = paragraph.trim().split(/\r?\n/).map((line) => line.trim()).join(" ");
  }

  return approved;
}

function assessmentPairs(dataset) {
  const payload = dataset.extensions[EXTENSION_ID];
  return payload.assessments
    .map(({ entityId, dimensionId, value }) => JSON.stringify([entityId, dimensionId, value]))
    .sort();
}

const approval = readFileSync(approvalPath, "utf8");
const japanese = readJson(japanesePath);
const english = readJson(englishPath);
const approved = parseApprovedDimensions(approval);
const japanesePayload = japanese.extensions[EXTENSION_ID];
const englishPayload = english.extensions[EXTENSION_ID];

assert.equal(approved.size, 7, "seven Human-approved localized Dimensions are present");
assert.equal(japanese.entities.length, 10);
assert.equal(japanese.events.length, 12);
assert.equal(japanese.relations.length, 57);
assert.equal(english.entities.length, 10);
assert.equal(english.events.length, 12);
assert.equal(english.relations.length, 57);
assert.equal(japanesePayload.specVersion, "0.2.0");
assert.equal(englishPayload.specVersion, "0.2.0");
assert.equal(japanesePayload.dimensions.length, 7);
assert.equal(englishPayload.dimensions.length, 7);
assert.equal(japanesePayload.assessments.length, 70);
assert.equal(englishPayload.assessments.length, 70);
assert.deepEqual(assessmentPairs(japanese), assessmentPairs(english));

for (let index = 0; index < 7; index += 1) {
  const ja = japanesePayload.dimensions[index];
  const en = englishPayload.dimensions[index];
  const expected = approved.get(ja.id);
  assert.ok(expected, `Human-approved localization exists for ${ja.id}`);

  for (const field of ["name", "lowLabel", "highLabel", "description"]) {
    const actual = ja[field];
    assert.equal(typeof actual, "string", `${ja.id}.${field} is a string`);
    assert.ok(/[^\x00-\x7F]/u.test(actual), `${ja.id}.${field} retains non-ASCII Japanese text`);
    assert.ok(!actual.includes("?"), `${ja.id}.${field} contains no replacement question marks`);
    assert.equal(actual, expected[field], `${ja.id}.${field} exactly matches Human-approved wording`);
  }

  assert.equal(ja.id, en.id);
  assert.equal(ja.min, en.min);
  assert.equal(ja.max, en.max);
  assert.equal(ja.integerOnly, en.integerOnly);
  assert.equal(ja.id, ["ashen.command", "ashen.combat", "ashen.information", "ashen.arcane", "ashen.healing", "ashen.diplomacy", "ashen.concord"][index]);
}

for (const dataset of [japanese, english]) {
  const payload = dataset.extensions[EXTENSION_ID];
  const specification = dataset.extensions[SPECIFICATION_ID];
  const uses = specification.uses.filter((entry) => entry.extension === EXTENSION_ID);
  assert.equal(uses.length, 1);
  assert.equal(uses[0].version, "0.2.0");
  assert.deepEqual(new Set(payload.assessments.map((assessment) => assessment.entityId)), new Set(dataset.entities.map((entity) => entity.id)));
  assert.deepEqual(new Set(payload.assessments.map((assessment) => assessment.dimensionId)), new Set(payload.dimensions.map((dimension) => dimension.id)));
}

console.log("Ashen Crown JA Dimension localization matches all 28 Human-approved strings; EN/JA Candidate parity and 70 assessments pass.");
