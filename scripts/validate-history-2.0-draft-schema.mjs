import { readFileSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { isDeepStrictEqual } from "node:util";

import Ajv2020 from "ajv/dist/2020.js";

const HISTORY_ID = "history";
const HISTORY_VERSION = "2.0.0";
const SPECIFICATION_ID = "draft.github.sukoyaka-dopeness.specification";
const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const repositoryRoot = join(scriptDirectory, "..");
const schemaPath = "schemas/extensions/history-2.0-draft.schema.json";
const history10SchemaPath = "schemas/extensions/history.schema.json";
const validDirectory = "examples/history-2.0-draft";
const invalidDirectory = "examples/invalid/extensions/history-2.0-draft";

const validCases = [
  "bounded-point.json",
  "multiple-and-approximation.json",
  "position-temporal-order.json",
  "position.json",
  "temporal-extent-boundaries.json",
];

const invalidCases = [
  ["assertion-level-approximation.json", "schema"],
  ["duplicate-assertion-id.json", "history_2_assertion_id_duplicate"],
  ["malformed-boundary-occurrence.json", "schema"],
  ["malformed-temporal-position.json", "schema"],
  ["missing-discriminator.json", "schema"],
  ["missing-payload.json", "schema"],
  ["time-and-assertions.json", "schema"],
  ["wrong-payload-for-type.json", "schema"],
];

function readJson(relativePath) {
  const source = readFileSync(join(repositoryRoot, relativePath), "utf8").replace(/^\uFEFF/, "");
  return JSON.parse(source);
}

function isObject(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function allCoreObjects(document) {
  return [
    ...(document.entities ?? []),
    ...(document.events ?? []),
    ...(document.relations ?? []),
  ];
}

function historyPayloads(document) {
  return allCoreObjects(document)
    .map((object) => object.extensions?.[HISTORY_ID])
    .filter((payload) => payload !== undefined);
}

function usedFeatures(payloads) {
  const features = new Set();
  for (const payload of payloads) {
    if (payload.assertions.length > 1) features.add("multiple-assertions");
    for (const assertion of payload.assertions) {
      if (assertion.type === "bounded-point") features.add("bounded-point");
      if (assertion.type === "temporal-extent") features.add("temporal-extent");
      const positions = [
        assertion.position,
        assertion.earliest,
        assertion.latest,
        assertion.start?.position,
        assertion.end?.position,
      ];
      if (positions.some((position) => position?.approximation !== undefined)) {
        features.add("approximation");
      }
    }
  }
  return [...features].sort();
}

function semanticIssues(document) {
  const issues = [];
  const payloads = historyPayloads(document);

  for (const payload of payloads) {
    const ids = new Set();
    for (const assertion of payload.assertions) {
      if (ids.has(assertion.id)) {
        issues.push("history_2_assertion_id_duplicate");
      }
      ids.add(assertion.id);
    }
  }

  const declarations = document.extensions?.[SPECIFICATION_ID]?.uses?.filter(
    (declaration) => declaration.extension === HISTORY_ID,
  ) ?? [];
  if (declarations.length !== 1) {
    issues.push("history_2_declaration_count");
    return issues;
  }
  const declaration = declarations[0];
  if (declaration.version !== HISTORY_VERSION) {
    issues.push("history_2_declaration_version");
  }
  const declaredFeatures = [...(declaration.features ?? [])].sort();
  if (!isDeepStrictEqual(declaredFeatures, usedFeatures(payloads))) {
    issues.push("history_2_feature_declaration_mismatch");
  }
  return issues;
}

let failureCount = 0;
function fail(label, message) {
  failureCount += 1;
  console.error(`FAIL ${label}: ${message}`);
}

const ajv = new Ajv2020({ allErrors: true, strict: true });
const validateHistory20 = ajv.compile(readJson(schemaPath));
const validateHistory10 = ajv.compile(readJson(history10SchemaPath));

const discoveredValid = readdirSync(join(repositoryRoot, validDirectory))
  .filter((fileName) => fileName.endsWith(".json"))
  .sort();
if (!isDeepStrictEqual(discoveredValid, [...validCases].sort())) {
  fail("valid fixture manifest", `declared ${JSON.stringify(validCases)}, found ${JSON.stringify(discoveredValid)}`);
}

const discoveredInvalid = readdirSync(join(repositoryRoot, invalidDirectory))
  .filter((fileName) => fileName.endsWith(".json"))
  .sort();
if (!isDeepStrictEqual(discoveredInvalid, invalidCases.map(([fileName]) => fileName).sort())) {
  fail("invalid fixture manifest", `declared ${JSON.stringify(invalidCases)}, found ${JSON.stringify(discoveredInvalid)}`);
}

for (const fileName of validCases) {
  const relativePath = `${validDirectory}/${fileName}`;
  const document = readJson(relativePath);
  const payloads = historyPayloads(document);
  if (payloads.length === 0) {
    fail(relativePath, "no History payload found");
    continue;
  }
  const invalidPayload = payloads.find((payload) => !validateHistory20(payload));
  if (invalidPayload) {
    fail(relativePath, ajv.errorsText(validateHistory20.errors));
    continue;
  }
  const issues = semanticIssues(document);
  if (issues.length > 0) {
    fail(relativePath, `semantic issues: ${JSON.stringify(issues)}`);
    continue;
  }
  console.log(`PASS valid   ${relativePath}`);
}

for (const [fileName, expected] of invalidCases) {
  const relativePath = `${invalidDirectory}/${fileName}`;
  const payload = readJson(relativePath);
  const schemaValid = validateHistory20(payload);
  if (expected === "schema") {
    if (schemaValid) fail(relativePath, "expected schema rejection");
    else console.log(`PASS invalid ${relativePath} (schema)`);
    continue;
  }
  if (!schemaValid) {
    fail(relativePath, `expected semantic rejection, schema failed: ${ajv.errorsText(validateHistory20.errors)}`);
    continue;
  }
  const fakeDocument = {
    entities: [],
    events: [{ id: "fixture", extensions: { history: payload } }],
    relations: [],
    extensions: {
      [SPECIFICATION_ID]: {
        uses: [{ extension: HISTORY_ID, version: HISTORY_VERSION, features: ["multiple-assertions"] }],
      },
    },
  };
  const issues = semanticIssues(fakeDocument);
  if (!issues.includes(expected)) fail(relativePath, `expected ${expected}, received ${JSON.stringify(issues)}`);
  else console.log(`PASS invalid ${relativePath} (semantic:${expected})`);
}

const invalidDeclarationPath = "examples/invalid/extensions/history-2.0-draft-dataset/feature-declaration-mismatch.json";
const invalidDeclaration = readJson(invalidDeclarationPath);
const declarationPayloads = historyPayloads(invalidDeclaration);
if (declarationPayloads.some((payload) => !validateHistory20(payload))) {
  fail(invalidDeclarationPath, `payload schema failed: ${ajv.errorsText(validateHistory20.errors)}`);
} else if (!semanticIssues(invalidDeclaration).includes("history_2_feature_declaration_mismatch")) {
  fail(invalidDeclarationPath, "expected feature declaration mismatch");
} else {
  console.log(`PASS invalid ${invalidDeclarationPath} (semantic:history_2_feature_declaration_mismatch)`);
}

const upgradeInputPath = `${validDirectory}/upgrade/history-1.0-input.json`;
const upgradeOutputPath = `${validDirectory}/upgrade/history-2.0-output.json`;
const refusalPath = `${validDirectory}/upgrade/unknown-field-refusal.json`;
const upgradeInput = readJson(upgradeInputPath);
const upgradeOutput = readJson(upgradeOutputPath);
const inputTime = upgradeInput.events[0].extensions.history.time;
const outputHistory = upgradeOutput.events[0].extensions.history;
const outputAssertion = outputHistory.assertions[0];
const { temporalOrder, ...expectedPosition } = inputTime;

if (!validateHistory10(upgradeInput.events[0].extensions.history)) {
  fail(upgradeInputPath, `History 1.0 input invalid: ${ajv.errorsText(validateHistory10.errors)}`);
} else if (!validateHistory20(outputHistory)) {
  fail(upgradeOutputPath, `History 2.0 output invalid: ${ajv.errorsText(validateHistory20.errors)}`);
} else if (!isDeepStrictEqual(outputAssertion.position, expectedPosition) || outputAssertion.temporalOrder !== temporalOrder) {
  fail("explicit upgrade evidence", "known History 1.0 fields were not preserved by the fixture projection");
} else if (outputHistory.time !== undefined || semanticIssues(upgradeOutput).length > 0) {
  fail("explicit upgrade evidence", "output retained time or has declaration issues");
} else {
  console.log(`PASS upgrade ${upgradeInputPath} -> ${upgradeOutputPath}`);
}

const knownTimeFields = new Set([
  "year", "month", "day", "hour", "minute", "second", "timeZone", "offset", "temporalOrder",
]);
const refusalTime = readJson(refusalPath).events[0].extensions.history.time;
const unknownFields = Object.keys(refusalTime).filter((field) => !knownTimeFields.has(field));
if (unknownFields.length === 0) {
  fail(refusalPath, "expected an unknown source field");
} else {
  console.log(`PASS refuse  ${refusalPath} (unknown source fields: ${unknownFields.join(", ")})`);
}

if (failureCount > 0) {
  console.error(`History 2.0 draft validation failed with ${failureCount} error(s).`);
  process.exitCode = 1;
} else {
  console.log(`History 2.0 draft validation passed: ${validCases.length} valid, ${invalidCases.length + 1} invalid, and upgrade safety evidence.`);
}
