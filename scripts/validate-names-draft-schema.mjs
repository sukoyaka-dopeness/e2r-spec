import { readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import Ajv2020 from "ajv/dist/2020.js";

const scriptDirectory = fileURLToPath(new URL(".", import.meta.url));
const repositoryRoot = join(scriptDirectory, "..");

function readJson(relativePath) {
  return JSON.parse(readFileSync(join(repositoryRoot, relativePath), "utf8"));
}

const validCases = [
  ["empty expressions", { expressions: [] }],
  ["minimal record", { expressions: [{ id: "N1", value: "Tokyo" }] }],
  ["metadata", { expressions: [{ id: "N1", value: "東京", language: "ja", script: "Jpan" }] }],
  ["equal values", { expressions: [{ id: "N1", value: "Tokyo" }, { id: "N2", value: "Tokyo" }] }],
  ["unknown properties and opaque null", { futurePayload: null, expressions: [{ id: "N1", value: " ", future: null }] }]
];

const invalidCases = [
  ["payload is not object", []],
  ["missing expressions", {}],
  ["expressions is not array", { expressions: {} }],
  ["member is not object", { expressions: ["N1"] }],
  ["missing id", { expressions: [{ value: "Tokyo" }] }],
  ["id is not string", { expressions: [{ id: 1, value: "Tokyo" }] }],
  ["empty id", { expressions: [{ id: "", value: "Tokyo" }] }],
  ["missing value", { expressions: [{ id: "N1" }] }],
  ["value is not string", { expressions: [{ id: "N1", value: 1 }] }],
  ["id is null", { expressions: [{ id: null, value: "Tokyo" }] }],
  ["value is null", { expressions: [{ id: "N1", value: null }] }],
  ["empty value", { expressions: [{ id: "N1", value: "" }] }],
  ["language is not string", { expressions: [{ id: "N1", value: "Tokyo", language: 123 }] }],
  ["language is null", { expressions: [{ id: "N1", value: "Tokyo", language: null }] }],
  ["script is not string", { expressions: [{ id: "N1", value: "Tokyo", script: null }] }],
  ["unrecognized member", { expressions: [{ id: "N1", opaqueFutureData: true }] }]
];

const schema = readJson("schemas/extensions/names-draft.schema.json");
const ajv = new Ajv2020({ allErrors: true, strict: true });
const validate = ajv.compile(schema);
let failures = 0;

for (const [name, document] of validCases) {
  if (!validate(document)) {
    failures += 1;
    console.error(`FAIL valid case ${name}:`, validate.errors);
  }
}
for (const [name, document] of invalidCases) {
  if (validate(document)) {
    failures += 1;
    console.error(`FAIL invalid case ${name}: expected rejection`);
  }
}
if (failures > 0) process.exitCode = 1;
else {
  console.log(`Names Draft schema validation passed: ${validCases.length} valid and ${invalidCases.length} invalid cases.`);
  console.log("Dataset-wide recognized-ID uniqueness is intentionally not tested by this local schema.");
}
