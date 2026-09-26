import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { isDeepStrictEqual } from "node:util";

import Ajv2020 from "ajv/dist/2020.js";

const EXTENSION_ID = "draft.github.sukoyaka-dopeness.relative-time";
const VERSION = "0.2.0";
const SPECIFICATION_ID = "draft.github.sukoyaka-dopeness.specification";
const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const repositoryRoot = join(scriptDirectory, "..");
const schemaPath = "schemas/extensions/relative-time-0.2.0.schema.json";
const validPath = "examples/relative-time-0.2-draft/all-families.json";
const invalidPayloadPath = "examples/invalid/extensions/relative-time-0.2-draft/invalid-payloads.json";

function readJson(relativePath) {
  const source = readFileSync(join(repositoryRoot, relativePath), "utf8").replace(/^\uFEFF/, "");
  return JSON.parse(source);
}

function relativeTimePayloads(document) {
  return (document.relations ?? [])
    .map((relation) => relation.extensions?.[EXTENSION_ID])
    .filter((payload) => payload !== undefined);
}

function usedFeatures(payloads) {
  return [...new Set(payloads.map(({ type }) => type))].sort();
}

function datasetIssues(document) {
  const issues = [];
  const misplaced = [document, ...(document.entities ?? []), ...(document.events ?? [])]
    .some((object) => object.extensions?.[EXTENSION_ID] !== undefined);
  if (misplaced) issues.push("relation_only_placement");

  const payloads = relativeTimePayloads(document);
  const declarations = document.extensions?.[SPECIFICATION_ID]?.uses?.filter(
    (declaration) => declaration.extension === EXTENSION_ID,
  ) ?? [];
  if (declarations.length !== 1) {
    issues.push("declaration_count");
  } else {
    const declaration = declarations[0];
    if (declaration.version !== VERSION) issues.push("exact_version");
    if (!isDeepStrictEqual([...(declaration.features ?? [])].sort(), usedFeatures(payloads))) {
      issues.push("feature_declaration");
    }
  }

  const objectIds = new Set([
    ...(document.entities ?? []).map(({ id }) => id),
    ...(document.events ?? []).map(({ id }) => id),
  ]);
  for (const relation of document.relations ?? []) {
    if (relation.extensions?.[EXTENSION_ID] === undefined) continue;
    if (!objectIds.has(relation.sourceId) || !objectIds.has(relation.targetId)) {
      issues.push("endpoint_integrity");
    }
  }
  return issues;
}

let failures = 0;
function fail(label, message) {
  failures += 1;
  console.error(`FAIL ${label}: ${message}`);
}

const ajv = new Ajv2020({ allErrors: true, strict: true });
const validatePayload = ajv.compile(readJson(schemaPath));
const validDocument = readJson(validPath);
const payloads = relativeTimePayloads(validDocument);

if (payloads.length !== 12) {
  fail(validPath, `expected 12 representative assertions, found ${payloads.length}`);
} else {
  const badPayload = payloads.find((payload) => !validatePayload(payload));
  if (badPayload) fail(validPath, ajv.errorsText(validatePayload.errors));
  else if (datasetIssues(validDocument).length > 0) {
    fail(validPath, JSON.stringify(datasetIssues(validDocument)));
  } else {
    console.log(`PASS valid ${validPath} (12 assertions across five Features)`);
  }
}

const invalidPayloads = readJson(invalidPayloadPath);
for (const [index, payload] of invalidPayloads.entries()) {
  if (validatePayload(payload)) fail(`${invalidPayloadPath}[${index}]`, "expected schema rejection");
  else console.log(`PASS invalid ${invalidPayloadPath}[${index}] (schema)`);
}

const wrongVersion = structuredClone(validDocument);
wrongVersion.extensions[SPECIFICATION_ID].uses[0].version = "0.1.0";
if (!datasetIssues(wrongVersion).includes("exact_version")) {
  fail("wrong-version declaration", "expected exact_version issue");
} else console.log("PASS invalid wrong-version declaration (exact-version boundary)");

const incompleteFeatures = structuredClone(validDocument);
incompleteFeatures.extensions[SPECIFICATION_ID].uses[0].features.pop();
if (!datasetIssues(incompleteFeatures).includes("feature_declaration")) {
  fail("incomplete Feature declaration", "expected feature_declaration issue");
} else console.log("PASS invalid incomplete Feature declaration (Dataset structure)");

const misplacedPayload = structuredClone(validDocument);
misplacedPayload.events[0].extensions = {
  [EXTENSION_ID]: { type: "relative-position", relation: "before" },
};
if (!datasetIssues(misplacedPayload).includes("relation_only_placement")) {
  fail("non-Relation placement", "expected relation_only_placement issue");
} else console.log("PASS invalid non-Relation placement (Dataset structure)");

const brokenEndpoint = structuredClone(validDocument);
brokenEndpoint.relations[0].targetId = "missing-object";
if (!datasetIssues(brokenEndpoint).includes("endpoint_integrity")) {
  fail("unresolved endpoint", "expected endpoint_integrity issue");
} else console.log("PASS invalid unresolved endpoint (Core structure)");

if (failures > 0) {
  console.error(`Relative Time 0.2.0 validation failed with ${failures} error(s).`);
  process.exitCode = 1;
} else {
  console.log("Relative Time 0.2.0 structural validation passed; no temporal truth evaluation is performed.");
}
