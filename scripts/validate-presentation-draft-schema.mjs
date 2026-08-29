import { readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

import Ajv2020 from "ajv/dist/2020.js";

const scriptDirectory = fileURLToPath(new URL(".", import.meta.url));
const repositoryRoot = join(scriptDirectory, "..");
const schemaPath = "schemas/extensions/presentation-draft.schema.json";

const validCases = [
  ["normal by extension and relation absence", { specVersion: "0.1.0" }],
  ["empty relations structurally tolerated", { specVersion: "0.1.0", relations: {} }],
  ["reverse", { specVersion: "0.1.0", relations: { "r-reverse": { arrowDisplay: "reverse" } } }],
  ["undirected", { specVersion: "0.1.0", relations: { "r-undirected": { arrowDisplay: "undirected" } } }],
  ["bidirectional", { specVersion: "0.1.0", relations: { "r-both": { arrowDisplay: "bidirectional" } } }],
  [
    "parallel Relation IDs with distinct modes",
    {
      specVersion: "0.1.0",
      relations: {
        "r-parallel-1": { arrowDisplay: "normal" },
        "r-parallel-2": { arrowDisplay: "undirected" },
      },
    },
  ],
  ["self Relation ID", { specVersion: "0.1.0", relations: { "r-self": { arrowDisplay: "reverse" } } }],
  [
    "unknown token and field preserved structurally",
    {
      specVersion: "0.1.0",
      relations: {
        "r-future": {
          arrowDisplay: "future-mode",
          futurePresentationProperty: { opaque: true },
        },
      },
    },
  ],
  ["lineStyle solid", { specVersion: "0.1.0", relations: { r1: { lineStyle: "solid" } } }],
  ["lineStyle dashed", { specVersion: "0.1.0", relations: { r1: { lineStyle: "dashed" } } }],
  ["lineStyle dotted", { specVersion: "0.1.0", relations: { r1: { lineStyle: "dotted" } } }],
  [
    "arrow and lineStyle are independent",
    { specVersion: "0.1.0", relations: { r1: { arrowDisplay: "reverse", lineStyle: "dashed" } } },
  ],
  ["unknown lineStyle token remains valid", { specVersion: "0.1.0", relations: { r1: { lineStyle: "future-pattern" } } }],
  [
    "lineStyle with unknown sibling field",
    { specVersion: "0.1.0", relations: { r1: { lineStyle: "dotted", futureProperty: 123 } } },
  ],
];

const invalidCases = [
  ["missing specVersion", {}],
  ["wrong specVersion", { specVersion: "0.2.0" }],
  ["relations is not an object", { specVersion: "0.1.0", relations: [] }],
  ["Relation record is not an object", { specVersion: "0.1.0", relations: { r1: [] } }],
  ["empty Relation record", { specVersion: "0.1.0", relations: { r1: {} } }],
  ["arrowDisplay is not a string", { specVersion: "0.1.0", relations: { r1: { arrowDisplay: 1 } } }],
  ["arrowDisplay is empty", { specVersion: "0.1.0", relations: { r1: { arrowDisplay: "" } } }],
  ["lineStyle is empty", { specVersion: "0.1.0", relations: { r1: { lineStyle: "" } } }],
  ["lineStyle is null", { specVersion: "0.1.0", relations: { r1: { lineStyle: null } } }],
  ["lineStyle is not a string", { specVersion: "0.1.0", relations: { r1: { lineStyle: 123 } } }],
  ["lineStyle is an object", { specVersion: "0.1.0", relations: { r1: { lineStyle: {} } } }],
  ["Relation ID is whitespace", { specVersion: "0.1.0", relations: { " ": { arrowDisplay: "reverse" } } }],
];

function readJson(relativePath) {
  return JSON.parse(readFileSync(join(repositoryRoot, relativePath), "utf8"));
}

function formatErrors(ajv, errors) {
  return ajv.errorsText(errors, { separator: "; " });
}

const schema = readJson(schemaPath);
const ajv = new Ajv2020({ allErrors: true, strict: true });
const validate = ajv.compile(schema);
let failureCount = 0;

for (const [name, document] of validCases) {
  if (!validate(document)) {
    failureCount += 1;
    console.error(`FAIL valid case ${name}: ${formatErrors(ajv, validate.errors)}`);
  } else {
    console.log(`PASS valid   ${name}`);
  }
}

for (const [name, document] of invalidCases) {
  if (validate(document)) {
    failureCount += 1;
    console.error(`FAIL invalid case ${name}: expected rejection`);
  } else {
    console.log(`PASS invalid ${name}`);
  }
}

if (failureCount > 0) {
  console.error(`Presentation Draft schema validation failed with ${failureCount} error(s).`);
  process.exitCode = 1;
} else {
  console.log(
    `Presentation Draft schema validation passed: ${validCases.length} valid and ${invalidCases.length} invalid cases.`,
  );
  console.log(
    "Relation-ID resolution, orphan diagnostics, and canonical default/empty-state omission remain outside JSON Schema.",
  );
}
