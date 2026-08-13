import { readFileSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { isDeepStrictEqual } from "node:util";

import Ajv2020 from "ajv/dist/2020.js";

const COORDINATE_ID = "draft.github.sukoyaka-dopeness.coordinate";
const PROTOTYPE_ID = "experimental.github.sukoyaka-dopeness.coordinate";
const SPECIFICATION_ID = "draft.github.sukoyaka-dopeness.specification";
const SPECIFICATION_VERSION = "0.1.0";

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const repositoryRoot = join(scriptDirectory, "..");
const schemaPath = "schemas/extensions/coordinate-draft.schema.json";
const invalidDirectory = "examples/invalid/extensions/coordinate-draft";
const validDirectory = "examples/coordinate-draft";

const validCases = [
  "examples/coordinate-draft/basic.json",
  "examples/coordinate-draft/external-reference.json",
  "examples/coordinate-draft/opaque-identifiers.json",
  "examples/coordinate-draft/prototype-migration-output.json",
  "examples/coordinate-draft/with-specification-declaration.json",
];

const invalidCases = [
  ["component-bounds-inverted.json", "semantic", "coordinate_draft_component_bounds_inverted"],
  ["dataset-format-version-present.json", "schema", "false schema"],
  ["dataset-payload-missing.json", "schema", "required"],
  ["duplicate-external-component.json", "semantic", "coordinate_draft_external_component_duplicate"],
  ["duplicate-object-coordinate.json", "semantic", "coordinate_draft_object_space_duplicate"],
  ["duplicate-space-id.json", "semantic", "coordinate_draft_space_id_duplicate"],
  ["external-component-without-reference.json", "schema", "not"],
  ["missing-spec-version.json", "schema", "required"],
  ["object-spec-version-present.json", "schema", "false schema"],
  ["prototype-field-substitution.json", "schema", "required"],
  ["relation-scope.json", "schema", "false schema"],
  ["specification-declaration-duplicate.json", "semantic", "coordinate_draft_version_declaration_duplicate"],
  ["specification-declaration-missing.json", "semantic", "coordinate_draft_version_declaration_missing"],
  ["specification-version-conflict.json", "semantic", "coordinate_draft_version_declaration_conflict"],
  ["unresolved-component.json", "semantic", "coordinate_draft_component_unresolved"],
  ["unresolved-space.json", "semantic", "coordinate_draft_space_unresolved"],
  ["value-out-of-range.json", "semantic", "coordinate_draft_value_out_of_range"],
  ["whitespace-space-id.json", "schema", "pattern"],
];

function readJson(relativePath) {
  const absolutePath = join(repositoryRoot, relativePath);
  const source = readFileSync(absolutePath, "utf8").replace(/^\uFEFF/, "");
  return JSON.parse(source);
}

function isObject(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function addIssue(issues, code, path) {
  issues.push({ code, path });
}

function pointerSegment(value) {
  return String(value).replaceAll("~", "~0").replaceAll("/", "~1");
}

function semanticIssues(document) {
  const issues = [];
  const payload = document.extensions?.[COORDINATE_ID];
  const spaces = new Map();

  for (const [spaceIndex, space] of payload.spaces.entries()) {
    const spacePath = `/extensions/${COORDINATE_ID}/spaces/${spaceIndex}`;
    if (spaces.has(space.id)) {
      addIssue(issues, "coordinate_draft_space_id_duplicate", `${spacePath}/id`);
      continue;
    }

    const components = new Map(Object.entries(space.components));
    spaces.set(space.id, { components, path: spacePath });

    const externalComponents = new Set();
    for (const [componentId, component] of components) {
      const componentPath = `${spacePath}/components/${pointerSegment(componentId)}`;
      if (
        typeof component.minimum === "number"
        && typeof component.maximum === "number"
        && component.minimum > component.maximum
      ) {
        addIssue(issues, "coordinate_draft_component_bounds_inverted", componentPath);
      }
      if (component.externalComponent !== undefined) {
        if (externalComponents.has(component.externalComponent)) {
          addIssue(
            issues,
            "coordinate_draft_external_component_duplicate",
            `${componentPath}/externalComponent`,
          );
        } else {
          externalComponents.add(component.externalComponent);
        }
      }
    }
  }

  function validateObjectCoordinates(objects, collectionName) {
    for (const [objectIndex, object] of objects.entries()) {
      const objectPayload = object.extensions?.[COORDINATE_ID];
      if (!objectPayload) continue;

      const seenSpaces = new Set();
      for (const [coordinateIndex, coordinate] of objectPayload.coordinates.entries()) {
        const coordinatePath = `/${collectionName}/${objectIndex}/extensions/${COORDINATE_ID}/coordinates/${coordinateIndex}`;
        if (seenSpaces.has(coordinate.spaceId)) {
          addIssue(issues, "coordinate_draft_object_space_duplicate", `${coordinatePath}/spaceId`);
          continue;
        }
        seenSpaces.add(coordinate.spaceId);

        const space = spaces.get(coordinate.spaceId);
        if (!space) {
          addIssue(issues, "coordinate_draft_space_unresolved", `${coordinatePath}/spaceId`);
          continue;
        }

        for (const [componentId, value] of Object.entries(coordinate.values)) {
          const component = space.components.get(componentId);
          const valuePath = `${coordinatePath}/values/${pointerSegment(componentId)}`;
          if (!component) {
            addIssue(issues, "coordinate_draft_component_unresolved", valuePath);
            continue;
          }
          if (
            (typeof component.minimum === "number" && value < component.minimum)
            || (typeof component.maximum === "number" && value > component.maximum)
          ) {
            addIssue(issues, "coordinate_draft_value_out_of_range", valuePath);
          }
        }
      }
    }
  }

  validateObjectCoordinates(document.entities, "entities");
  validateObjectCoordinates(document.events, "events");

  const specification = document.extensions?.[SPECIFICATION_ID];
  if (
    isObject(specification)
    && specification.specVersion === SPECIFICATION_VERSION
    && Array.isArray(specification.uses)
  ) {
    const declarations = specification.uses.filter(
      (candidate) => isObject(candidate) && candidate.extension === COORDINATE_ID,
    );
    if (declarations.length === 0) {
      addIssue(
        issues,
        "coordinate_draft_version_declaration_missing",
        `/extensions/${SPECIFICATION_ID}/uses`,
      );
    } else if (declarations.length > 1) {
      addIssue(
        issues,
        "coordinate_draft_version_declaration_duplicate",
        `/extensions/${SPECIFICATION_ID}/uses`,
      );
    } else if (declarations[0].version !== payload.specVersion) {
      addIssue(
        issues,
        "coordinate_draft_version_declaration_conflict",
        `/extensions/${SPECIFICATION_ID}/uses`,
      );
    }
  }

  return issues;
}

function formatErrors(ajv, errors) {
  return ajv.errorsText(errors, { separator: "; " });
}

function expectedPrototypeMigration(source) {
  const result = structuredClone(source);
  const objects = [result, ...result.entities, ...result.events];
  for (const object of objects) {
    const prototype = object.extensions?.[PROTOTYPE_ID];
    if (!prototype) continue;
    const draft = structuredClone(prototype);
    if (object === result) {
      delete draft.formatVersion;
      draft.specVersion = "0.1.0";
    }
    object.extensions[COORDINATE_ID] = draft;
    delete object.extensions[PROTOTYPE_ID];
  }
  return result;
}

function hasUnknownFields(value, allowed) {
  return Object.keys(value).some((field) => !allowed.has(field));
}

function prototypeMigrationRefusal(source) {
  const allObjects = [source, ...source.entities, ...source.events, ...source.relations];
  if (allObjects.some((object) => object.extensions?.[COORDINATE_ID] !== undefined)) {
    return "coordinate_draft_migration_target_exists";
  }

  const datasetPayload = source.extensions?.[PROTOTYPE_ID];
  if (datasetPayload && hasUnknownFields(datasetPayload, new Set(["formatVersion", "spaces"]))) {
    return "coordinate_draft_migration_unknown_source_field";
  }

  for (const space of datasetPayload?.spaces ?? []) {
    if (hasUnknownFields(space, new Set(["id", "name", "kind", "components", "externalReference"]))) {
      return "coordinate_draft_migration_unknown_source_field";
    }
    if (
      space.externalReference
      && hasUnknownFields(space.externalReference, new Set(["authority", "identifier"]))
    ) {
      return "coordinate_draft_migration_unknown_source_field";
    }
    for (const component of Object.values(space.components ?? {})) {
      if (
        hasUnknownFields(
          component,
          new Set(["name", "unit", "positiveDirection", "minimum", "maximum", "period"]),
        )
      ) {
        return "coordinate_draft_migration_unknown_source_field";
      }
    }
  }

  for (const object of [...source.entities, ...source.events]) {
    const objectPayload = object.extensions?.[PROTOTYPE_ID];
    if (!objectPayload) continue;
    if (hasUnknownFields(objectPayload, new Set(["coordinates"]))) {
      return "coordinate_draft_migration_unknown_source_field";
    }
    for (const coordinate of objectPayload.coordinates ?? []) {
      if (hasUnknownFields(coordinate, new Set(["spaceId", "values"]))) {
        return "coordinate_draft_migration_unknown_source_field";
      }
    }
  }

  return undefined;
}

let failureCount = 0;

function reportFailure(label, message) {
  failureCount += 1;
  console.error(`FAIL ${label}: ${message}`);
}

const schema = readJson(schemaPath);
const ajv = new Ajv2020({ allErrors: true, strict: true });
const validateCoordinateDraft = ajv.compile(schema);

const declaredValidFiles = validCases.map((relativePath) => relativePath.split("/").at(-1)).sort();
const discoveredValidFiles = readdirSync(join(repositoryRoot, validDirectory))
  .filter((fileName) => fileName.endsWith(".json"))
  .sort();

if (JSON.stringify(declaredValidFiles) !== JSON.stringify(discoveredValidFiles)) {
  reportFailure(
    "valid fixture manifest",
    `declared ${JSON.stringify(declaredValidFiles)}, found ${JSON.stringify(discoveredValidFiles)}`,
  );
}

const declaredInvalidFiles = invalidCases.map(([fileName]) => fileName).sort();
const discoveredInvalidFiles = readdirSync(join(repositoryRoot, invalidDirectory))
  .filter((fileName) => fileName.endsWith(".json"))
  .sort();

if (JSON.stringify(declaredInvalidFiles) !== JSON.stringify(discoveredInvalidFiles)) {
  reportFailure(
    "invalid fixture manifest",
    `declared ${JSON.stringify(declaredInvalidFiles)}, found ${JSON.stringify(discoveredInvalidFiles)}`,
  );
}

for (const relativePath of validCases) {
  const document = readJson(relativePath);
  if (!validateCoordinateDraft(document)) {
    reportFailure(relativePath, formatErrors(ajv, validateCoordinateDraft.errors));
    continue;
  }

  const issues = semanticIssues(document);
  if (issues.length > 0) {
    reportFailure(relativePath, `semantic issues: ${JSON.stringify(issues)}`);
    continue;
  }

  console.log(`PASS valid   ${relativePath}`);
}

const prototypeMigrationSource = readJson("examples/coordinate/external-reference.json");
const prototypeMigrationOutput = readJson("examples/coordinate-draft/prototype-migration-output.json");
if (prototypeMigrationRefusal(prototypeMigrationSource) !== undefined) {
  reportFailure("prototype migration fixture", "supported source was unexpectedly refused");
} else if (!isDeepStrictEqual(expectedPrototypeMigration(prototypeMigrationSource), prototypeMigrationOutput)) {
  reportFailure(
    "prototype migration fixture",
    "output is not the exact atomic known-field migration projection",
  );
} else {
  console.log("PASS migrate examples/coordinate/external-reference.json -> examples/coordinate-draft/prototype-migration-output.json");
}

const migrationRefusalCases = [
  [
    "examples/coordinate/migration-refusal/unknown-prototype-field.json",
    "coordinate_draft_migration_unknown_source_field",
  ],
  [
    "examples/coordinate/migration-refusal/existing-draft-payload.json",
    "coordinate_draft_migration_target_exists",
  ],
];

for (const [relativePath, expectedCode] of migrationRefusalCases) {
  const code = prototypeMigrationRefusal(readJson(relativePath));
  if (code !== expectedCode) {
    reportFailure(relativePath, `expected refusal ${expectedCode}, received ${String(code)}`);
  } else {
    console.log(`PASS refuse  ${relativePath} (${expectedCode})`);
  }
}

for (const [fileName, layer, expected] of invalidCases) {
  const relativePath = `${invalidDirectory}/${fileName}`;
  const document = readJson(relativePath);
  const schemaValid = validateCoordinateDraft(document);

  if (layer === "schema") {
    if (schemaValid) {
      reportFailure(relativePath, "expected schema rejection, but validation succeeded");
      continue;
    }
    const keywords = new Set((validateCoordinateDraft.errors ?? []).map((error) => error.keyword));
    if (!keywords.has(expected)) {
      reportFailure(
        relativePath,
        `expected schema keyword ${JSON.stringify(expected)}, received ${formatErrors(ajv, validateCoordinateDraft.errors)}`,
      );
      continue;
    }
  } else {
    if (!schemaValid) {
      reportFailure(relativePath, `expected semantic rejection, schema failed: ${formatErrors(ajv, validateCoordinateDraft.errors)}`);
      continue;
    }
    const codes = new Set(semanticIssues(document).map(({ code }) => code));
    if (!codes.has(expected)) {
      reportFailure(
        relativePath,
        `expected semantic code ${JSON.stringify(expected)}, received ${JSON.stringify([...codes])}`,
      );
      continue;
    }
  }

  console.log(`PASS invalid ${relativePath} (${layer}:${expected})`);
}

if (failureCount > 0) {
  console.error(`Coordinate draft validation failed with ${failureCount} error(s).`);
  process.exitCode = 1;
} else {
  console.log(
    `Coordinate draft validation passed: ${validCases.length} valid and ${invalidCases.length} invalid example(s).`,
  );
}
