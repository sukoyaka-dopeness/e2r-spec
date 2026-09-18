import { readFileSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { isDeepStrictEqual } from "node:util";

import Ajv2020 from "ajv/dist/2020.js";

const RELATIVE_TIME_ID = "draft.github.sukoyaka-dopeness.relative-time";
const RELATIVE_TIME_VERSION = "0.1.0";
const SPECIFICATION_ID = "draft.github.sukoyaka-dopeness.specification";
const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const repositoryRoot = join(scriptDirectory, "..");
const schemaPath = "schemas/extensions/relative-time-draft.schema.json";
const validPath = "examples/relative-time-draft/all-families.json";
const invalidDirectory = "examples/invalid/extensions/relative-time-draft";

const invalidCases = [
  "fractional-elapsed.json",
  "irrelevant-fields.json",
  "malformed-displacement.json",
  "malformed-granularity.json",
  "negative-elapsed.json",
  "unknown-type.json",
  "unsupported-elapsed-day.json",
  "zero-elapsed.json",
];

function readJson(relativePath) {
  const source = readFileSync(join(repositoryRoot, relativePath), "utf8").replace(/^\uFEFF/, "");
  return JSON.parse(source);
}

function payloadsOnRelations(document) {
  return (document.relations ?? [])
    .map((relation) => relation.extensions?.[RELATIVE_TIME_ID])
    .filter((payload) => payload !== undefined);
}

function usedFeatures(payloads) {
  return [...new Set(payloads.map((payload) => payload.type))].sort();
}

function semanticIssues(document) {
  const issues = [];
  const misplaced = [document, ...(document.entities ?? []), ...(document.events ?? [])]
    .some((object) => object.extensions?.[RELATIVE_TIME_ID] !== undefined);
  if (misplaced) issues.push("relative_time_non_relation_placement");

  const payloads = payloadsOnRelations(document);
  const declarations = document.extensions?.[SPECIFICATION_ID]?.uses?.filter(
    (declaration) => declaration.extension === RELATIVE_TIME_ID,
  ) ?? [];
  if (declarations.length !== 1) {
    issues.push("relative_time_declaration_count");
  } else {
    const declaration = declarations[0];
    if (declaration.version !== RELATIVE_TIME_VERSION) {
      issues.push("relative_time_declaration_version");
    }
    const declaredFeatures = [...(declaration.features ?? [])].sort();
    if (!isDeepStrictEqual(declaredFeatures, usedFeatures(payloads))) {
      issues.push("relative_time_feature_declaration_mismatch");
    }
  }

  const endpointIds = new Set([
    ...(document.entities ?? []).map(({ id }) => id),
    ...(document.events ?? []).map(({ id }) => id),
  ]);
  for (const relation of document.relations ?? []) {
    if (relation.extensions?.[RELATIVE_TIME_ID] === undefined) continue;
    if (!endpointIds.has(relation.sourceId) || !endpointIds.has(relation.targetId)) {
      issues.push("relative_time_endpoint_unresolved");
    }
  }
  return issues;
}

let failureCount = 0;
function fail(label, message) {
  failureCount += 1;
  console.error(`FAIL ${label}: ${message}`);
}

const ajv = new Ajv2020({ allErrors: true, strict: true });
const validatePayload = ajv.compile(readJson(schemaPath));
const validDocument = readJson(validPath);
const validPayloads = payloadsOnRelations(validDocument);

if (validPayloads.length !== 10) {
  fail(validPath, `expected 10 Relative Time payloads, found ${validPayloads.length}`);
} else {
  const invalidPayload = validPayloads.find((payload) => !validatePayload(payload));
  if (invalidPayload) fail(validPath, ajv.errorsText(validatePayload.errors));
  else if (semanticIssues(validDocument).length > 0) fail(validPath, JSON.stringify(semanticIssues(validDocument)));
  else console.log(`PASS valid   ${validPath} (10 representative assertions)`);
}

const discoveredInvalid = readdirSync(join(repositoryRoot, invalidDirectory))
  .filter((fileName) => fileName.endsWith(".json"))
  .sort();
if (!isDeepStrictEqual(discoveredInvalid, [...invalidCases].sort())) {
  fail("invalid fixture manifest", `declared ${JSON.stringify(invalidCases)}, found ${JSON.stringify(discoveredInvalid)}`);
}

for (const fileName of invalidCases) {
  const relativePath = `${invalidDirectory}/${fileName}`;
  if (validatePayload(readJson(relativePath))) {
    fail(relativePath, "expected schema rejection");
  } else {
    console.log(`PASS invalid ${relativePath} (schema)`);
  }
}

const invalidDatasetCases = [
  ["feature-declaration-mismatch.json", "relative_time_feature_declaration_mismatch"],
  ["non-relation-placement.json", "relative_time_non_relation_placement"],
];
for (const [fileName, expected] of invalidDatasetCases) {
  const relativePath = `examples/invalid/extensions/relative-time-draft-dataset/${fileName}`;
  const issues = semanticIssues(readJson(relativePath));
  if (!issues.includes(expected)) fail(relativePath, `expected ${expected}, received ${JSON.stringify(issues)}`);
  else console.log(`PASS invalid ${relativePath} (semantic:${expected})`);
}

if (failureCount > 0) {
  console.error(`Relative Time draft validation failed with ${failureCount} error(s).`);
  process.exitCode = 1;
} else {
  console.log(`Relative Time draft validation passed: 10 valid assertions and ${invalidCases.length + invalidDatasetCases.length} invalid cases.`);
}
