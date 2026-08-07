import { readFileSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import Ajv2020 from "ajv/dist/2020.js";

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const repositoryRoot = join(scriptDirectory, "..");
const schemaPath = "schemas/extensions/history.schema.json";

const validCases = [
  "examples/history/year.json",
  "examples/history/year-month.json",
  "examples/history/full-date.json",
  "examples/history/full-date-time.json",
  "examples/history/tokyo-new-year.json",
  "examples/history/apollo-11-lunar-landing.json"
];

const invalidCases = [
  ["day-without-month.json", "dependentRequired"],
  ["empty-time-object.json", "anyOf"],
  ["hour-out-of-range.json", "maximum"],
  ["invalid-offset-format.json", "pattern"],
  ["legacy-order.json", "false schema"],
  ["month-without-year.json", "dependentRequired"],
  ["offset-without-timezone.json", "dependentRequired"],
  ["temporal-order-not-integer.json", "type"],
  ["timezone-without-minute.json", "dependentRequired"],
  ["timezone-without-offset.json", "dependentRequired"]
];

const invalidDirectory = "examples/invalid/extensions/history";

function readJson(relativePath) {
  const absolutePath = join(repositoryRoot, relativePath);
  const source = readFileSync(absolutePath, "utf8").replace(/^\uFEFF/, "");
  return JSON.parse(source);
}

function formatErrors(ajv, errors) {
  return ajv.errorsText(errors, { separator: "; " });
}

let failureCount = 0;

function reportFailure(label, message) {
  failureCount += 1;
  console.error(`FAIL ${label}: ${message}`);
}

const schema = readJson(schemaPath);
const ajv = new Ajv2020({ allErrors: true, strict: true });
const validateHistory = ajv.compile(schema);

const declaredInvalidFiles = invalidCases.map(([fileName]) => fileName).sort();
const discoveredInvalidFiles = readdirSync(join(repositoryRoot, invalidDirectory))
  .filter((fileName) => fileName.endsWith(".json"))
  .sort();

if (JSON.stringify(declaredInvalidFiles) !== JSON.stringify(discoveredInvalidFiles)) {
  reportFailure(
    "invalid fixture manifest",
    `declared ${JSON.stringify(declaredInvalidFiles)}, found ${JSON.stringify(discoveredInvalidFiles)}`
  );
}

for (const relativePath of validCases) {
  const document = readJson(relativePath);
  const history = document?.extensions?.history;

  if (history === undefined) {
    reportFailure(relativePath, "extensions.history is missing");
    continue;
  }

  if (!validateHistory(history)) {
    reportFailure(relativePath, formatErrors(ajv, validateHistory.errors));
    continue;
  }

  console.log(`PASS valid   ${relativePath}`);
}

for (const [fileName, expectedKeyword] of invalidCases) {
  const relativePath = `${invalidDirectory}/${fileName}`;
  const history = readJson(relativePath);

  if (validateHistory(history)) {
    reportFailure(relativePath, "expected rejection, but validation succeeded");
    continue;
  }

  const errors = validateHistory.errors ?? [];
  const keywords = new Set(errors.map((error) => error.keyword));

  if (!keywords.has(expectedKeyword)) {
    reportFailure(
      relativePath,
      `expected keyword ${JSON.stringify(expectedKeyword)}, received ${formatErrors(ajv, errors)}`
    );
    continue;
  }

  console.log(`PASS invalid ${relativePath} (${expectedKeyword})`);
}

if (failureCount > 0) {
  console.error(`History schema validation failed with ${failureCount} error(s).`);
  process.exitCode = 1;
} else {
  console.log(
    `History schema validation passed: ${validCases.length} valid and ${invalidCases.length} invalid example(s).`
  );
}
