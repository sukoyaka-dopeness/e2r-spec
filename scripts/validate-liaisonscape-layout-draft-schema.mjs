import { readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

import Ajv2020 from "ajv/dist/2020.js";

const scriptDirectory = fileURLToPath(new URL(".", import.meta.url));
const repositoryRoot = join(scriptDirectory, "..");
const schemaPath = "schemas/extensions/liaisonscape-layout-draft.schema.json";

const validCases = [
  ["no active Pins", { specVersion: "0.1.0" }],
  [
    "one Entity Pin with explicit Coordinate Space",
    { specVersion: "0.1.0", entities: { "entity-1": { pinned: true, spaceId: "liaisonscape-graph" } } },
  ],
  [
    "multiple Entity Pins in separate Spaces",
    {
      specVersion: "0.1.0",
      entities: {
        "entity-1": { pinned: true, spaceId: "liaisonscape-graph" },
        "entity-2": { pinned: true, spaceId: "harbor-site-plan" },
      },
    },
  ],
  [
    "unknown future fields are structurally preserved",
    {
      specVersion: "0.1.0",
      entities: { "entity-1": { pinned: true, spaceId: "liaisonscape-graph", futureConstraint: { opaque: true } } },
      futureLayoutProperty: "opaque",
    },
  ],
];

const invalidCases = [
  ["missing specVersion", {}],
  ["wrong specVersion", { specVersion: "0.2.0" }],
  ["entities is not an object", { specVersion: "0.1.0", entities: [] }],
  ["Entity ID is whitespace", { specVersion: "0.1.0", entities: { " ": { pinned: true, spaceId: "liaisonscape-graph" } } }],
  ["Entity Pin record is not an object", { specVersion: "0.1.0", entities: { "entity-1": [] } }],
  ["pinned field is missing", { specVersion: "0.1.0", entities: { "entity-1": { spaceId: "liaisonscape-graph" } } }],
  ["pinned false is not a Pin record", { specVersion: "0.1.0", entities: { "entity-1": { pinned: false, spaceId: "liaisonscape-graph" } } }],
  ["spaceId is missing", { specVersion: "0.1.0", entities: { "entity-1": { pinned: true } } }],
  ["spaceId is whitespace", { specVersion: "0.1.0", entities: { "entity-1": { pinned: true, spaceId: " " } } }],
  ["spaceId is not a string", { specVersion: "0.1.0", entities: { "entity-1": { pinned: true, spaceId: 1 } } }],
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
    console.error(`FAIL invalid ${name}: expected rejection`);
  } else {
    console.log(`PASS invalid ${name}`);
  }
}

if (failureCount > 0) {
  console.error(`LiaisonScape Layout Draft schema validation failed with ${failureCount} error(s).`);
  process.exitCode = 1;
} else {
  console.log(
    `LiaisonScape Layout Draft schema validation passed: ${validCases.length} valid and ${invalidCases.length} invalid cases.`,
  );
  console.log(
    "Coordinate anchor compatibility, orphan diagnostics, atomic Save Coordinates behavior, and canonical omission remain semantic responsibilities described by the draft.",
  );
}
