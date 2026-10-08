import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import Ajv2020 from "ajv/dist/2020.js";

const EXTENSION_ID = "draft.github.sukoyaka-dopeness.dimension-assessment";
const SPECIFICATION_ID = "draft.github.sukoyaka-dopeness.specification";
const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const repositoryRoot = join(scriptDirectory, "..");
const schemas = new Map([
  ["0.1.0", JSON.parse(readFileSync(join(repositoryRoot, "schemas/extensions/dimension-assessment-candidate.schema.json"), "utf8"))],
  ["0.2.0", JSON.parse(readFileSync(join(repositoryRoot, "schemas/extensions/dimension-assessment-candidate-0.2.0.schema.json"), "utf8"))],
]);
const example = JSON.parse(readFileSync(join(repositoryRoot, "examples/dimension-assessment-candidate/basic.json"), "utf8"));
const ajv = new Ajv2020({ allErrors: true, strict: true });
const validators = new Map([...schemas].map(([version, schema]) => [version, ajv.compile(schema)]));

function semanticIssues(dataset) {
  const issues = [];
  const payload = dataset.extensions?.[EXTENSION_ID];
  const dimensions = new Map();
  const entityIds = new Set((dataset.entities ?? []).map((entity) => entity.id));
  const specification = dataset.extensions?.[SPECIFICATION_ID];

  for (const [index, dimension] of payload.dimensions.entries()) {
    const path = `/extensions/${EXTENSION_ID}/dimensions/${index}`;
    if (dimensions.has(dimension.id)) {
      issues.push({ code: "dimension_assessment_dimension_id_duplicate", path: `${path}/id` });
      continue;
    }
    dimensions.set(dimension.id, dimension);

    if (!Number.isFinite(dimension.min) || !Number.isFinite(dimension.max)) {
      issues.push({ code: "dimension_assessment_bounds_not_finite", path });
    } else if (dimension.min >= dimension.max) {
      issues.push({ code: "dimension_assessment_bounds_not_ordered", path });
    }

    if (
      dimension.integerOnly === true
      && Number.isFinite(dimension.min)
      && Number.isFinite(dimension.max)
      && Math.ceil(dimension.min) > Math.floor(dimension.max)
    ) {
      issues.push({ code: "dimension_assessment_no_integer_candidate", path });
    }

    const hasLowLabel = Object.hasOwn(dimension, "lowLabel");
    const hasHighLabel = Object.hasOwn(dimension, "highLabel");
    if (hasLowLabel !== hasHighLabel) {
      issues.push({ code: "dimension_assessment_endpoint_labels_unpaired", path });
    }
  }

  const seenPairs = new Set();
  for (const [index, assessment] of payload.assessments.entries()) {
    const path = `/extensions/${EXTENSION_ID}/assessments/${index}`;
    const pair = JSON.stringify([assessment.entityId, assessment.dimensionId]);
    if (seenPairs.has(pair)) {
      issues.push({ code: "dimension_assessment_pair_duplicate", path });
    }
    seenPairs.add(pair);

    if (!entityIds.has(assessment.entityId)) {
      issues.push({ code: "dimension_assessment_entity_unresolved", path: `${path}/entityId` });
    }

    const dimension = dimensions.get(assessment.dimensionId);
    if (!dimension) {
      issues.push({ code: "dimension_assessment_dimension_unresolved", path: `${path}/dimensionId` });
      continue;
    }

    if (!Number.isFinite(assessment.value)) {
      issues.push({ code: "dimension_assessment_value_not_finite", path: `${path}/value` });
      continue;
    }

    if (assessment.value < dimension.min || assessment.value > dimension.max) {
      issues.push({ code: "dimension_assessment_value_out_of_range", path: `${path}/value` });
    }
    if (dimension.integerOnly === true && !Number.isInteger(assessment.value)) {
      issues.push({ code: "dimension_assessment_value_not_integer", path: `${path}/value` });
    }
  }

  if (specification) {
    const uses = Array.isArray(specification.uses) ? specification.uses : [];
    const declarations = uses.filter((entry) => (
      typeof entry === "object"
      && entry !== null
      && !Array.isArray(entry)
      && entry.extension === EXTENSION_ID
    ));
    if (declarations.length !== 1) {
      issues.push({ code: "dimension_assessment_specification_declaration_count", path: `/extensions/${SPECIFICATION_ID}/uses` });
    } else if (declarations[0].version !== payload.specVersion) {
      issues.push({ code: "dimension_assessment_specification_version_conflict", path: `/extensions/${SPECIFICATION_ID}/uses` });
    }
  }

  return issues;
}

function check(label, dataset, expected, version = dataset.extensions?.[EXTENSION_ID]?.specVersion) {
  const payload = dataset.extensions?.[EXTENSION_ID];
  const validatePayload = validators.get(version);
  if (!validatePayload) {
    console.error(`FAIL ${label}: no exact Candidate schema for ${version}`);
    return false;
  }
  const schemaValid = validatePayload(payload);
  const issues = schemaValid ? semanticIssues(dataset) : [];
  const valid = schemaValid && issues.length === 0;
  if (valid !== expected) {
    const details = schemaValid
      ? issues.map((issue) => `${issue.code} at ${issue.path}`).join(", ")
      : ajv.errorsText(validatePayload.errors);
    console.error(`FAIL ${label}: expected ${expected ? "valid" : "invalid"}; ${details}`);
    return false;
  }
  console.log(`PASS ${expected ? "valid" : "invalid"} ${label}`);
  return true;
}

const cases = [
  ["example: ranges, optional metadata, and explicit zero", example, true],
  ["inclusive negative fractional range has valid integer candidates", {
    version: "1.0", entities: [{ id: "e" }, { id: "e-2" }], events: [], relations: [],
    extensions: { [EXTENSION_ID]: { specVersion: "0.1.0", dimensions: [{ id: "d", name: "D", min: -2.7, max: 3.6, integerOnly: true }], assessments: [{ entityId: "e", dimensionId: "d", value: -2 }, { entityId: "e-2", dimensionId: "d", value: 3 }] } },
  }, true],
  ["no integer candidate in inclusive range", {
    version: "1.0", entities: [], events: [], relations: [],
    extensions: { [EXTENSION_ID]: { specVersion: "0.1.0", dimensions: [{ id: "d", name: "D", min: 0.2, max: 0.8, integerOnly: true }], assessments: [] } },
  }, false],
  ["equal bounds", {
    version: "1.0", entities: [], events: [], relations: [],
    extensions: { [EXTENSION_ID]: { specVersion: "0.1.0", dimensions: [{ id: "d", name: "D", min: 1, max: 1 }], assessments: [] } },
  }, false],
  ["reversed bounds", {
    version: "1.0", entities: [], events: [], relations: [],
    extensions: { [EXTENSION_ID]: { specVersion: "0.1.0", dimensions: [{ id: "d", name: "D", min: 2, max: 1 }], assessments: [] } },
  }, false],
  ["assessment outside inclusive range", {
    version: "1.0", entities: [{ id: "e" }], events: [], relations: [],
    extensions: { [EXTENSION_ID]: { specVersion: "0.1.0", dimensions: [{ id: "d", name: "D", min: 0, max: 1 }], assessments: [{ entityId: "e", dimensionId: "d", value: 1.1 }] } },
  }, false],
  ["fractional assessment on integer-only Dimension", {
    version: "1.0", entities: [{ id: "e" }], events: [], relations: [],
    extensions: { [EXTENSION_ID]: { specVersion: "0.1.0", dimensions: [{ id: "d", name: "D", min: 0, max: 2, integerOnly: true }], assessments: [{ entityId: "e", dimensionId: "d", value: 1.5 }] } },
  }, false],
  ["unresolved Entity", {
    version: "1.0", entities: [], events: [], relations: [],
    extensions: { [EXTENSION_ID]: { specVersion: "0.1.0", dimensions: [{ id: "d", name: "D", min: 0, max: 1 }], assessments: [{ entityId: "missing", dimensionId: "d", value: 0 }] } },
  }, false],
  ["unresolved Dimension", {
    version: "1.0", entities: [{ id: "e" }], events: [], relations: [],
    extensions: { [EXTENSION_ID]: { specVersion: "0.1.0", dimensions: [], assessments: [{ entityId: "e", dimensionId: "missing", value: 0 }] } },
  }, false],
  ["duplicate Dimension ID", {
    version: "1.0", entities: [], events: [], relations: [],
    extensions: { [EXTENSION_ID]: { specVersion: "0.1.0", dimensions: [{ id: "d", name: "D", min: 0, max: 1 }, { id: "d", name: "Other", min: 0, max: 2 }], assessments: [] } },
  }, false],
  ["duplicate Entity-Dimension pair", {
    version: "1.0", entities: [{ id: "e" }], events: [], relations: [],
    extensions: { [EXTENSION_ID]: { specVersion: "0.1.0", dimensions: [{ id: "d", name: "D", min: 0, max: 1 }], assessments: [{ entityId: "e", dimensionId: "d", value: 0 }, { entityId: "e", dimensionId: "d", value: 1 }] } },
  }, false],
  ["unpaired endpoint label", {
    version: "1.0", entities: [], events: [], relations: [],
    extensions: { [EXTENSION_ID]: { specVersion: "0.1.0", dimensions: [{ id: "d", name: "D", min: 0, max: 1, lowLabel: "Low" }], assessments: [] } },
  }, false],
  ["Specification Extension version conflict", {
    version: "1.0", entities: [], events: [], relations: [],
    extensions: {
      [EXTENSION_ID]: { specVersion: "0.1.0", dimensions: [], assessments: [] },
      [SPECIFICATION_ID]: { specVersion: "0.1.0", uses: [{ extension: EXTENSION_ID, version: "0.2.0" }] },
    },
  }, false],
];

const commonCases = cases.slice(0, -1);
const versionedCases = commonCases.map(([label, dataset, expected]) => {
  const versioned = structuredClone(dataset);
  const payload = versioned.extensions[EXTENSION_ID];
  payload.specVersion = "0.2.0";
  const specification = versioned.extensions[SPECIFICATION_ID];
  if (specification?.uses) {
    for (const declaration of specification.uses) {
      if (declaration.extension === EXTENSION_ID) declaration.version = "0.2.0";
    }
  }
  return [`0.2.0 ${label}`, versioned, expected];
});

const descriptionBase = {
  version: "1.0", entities: [{ id: "e" }], events: [], relations: [],
  extensions: { [EXTENSION_ID]: { specVersion: "0.2.0", dimensions: [{ id: "d", name: "D", min: 0, max: 1 }], assessments: [{ entityId: "e", dimensionId: "d", value: 0 }] } },
};
function withDescription(description) {
  const dataset = structuredClone(descriptionBase);
  dataset.extensions[EXTENSION_ID].dimensions[0].description = description;
  return dataset;
}
const descriptionCases = [
  ["0.2.0 Description omitted", descriptionBase, true],
  ["0.2.0 multiline Description", withDescription("Scale meaning.\nOverall story premise."), true],
  ["0.2.0 Markdown characters are plain text", withDescription("**Literal markup** is still text."), true],
  ["0.2.0 long Description has no fixed upper limit", withDescription(`a${"b".repeat(10000)}`), true],
  ["0.2.0 empty Description", withDescription(""), false],
  ["0.2.0 whitespace-only Description", withDescription(" \t\n "), false],
  ["0.2.0 Description must be a string", withDescription({ text: "not plain text" }), false],
  ["0.2.0 Specification Extension version conflict", { ...structuredClone(descriptionBase), extensions: { ...structuredClone(descriptionBase.extensions), [SPECIFICATION_ID]: { specVersion: "0.1.0", uses: [{ extension: EXTENSION_ID, version: "0.1.0" }] } } }, false],
];

const exampleWithDescription = structuredClone(example);
exampleWithDescription.extensions[EXTENSION_ID].dimensions[0].description = "not permitted in 0.1.0";
const crossVersionCases = [
  ["0.2.0 payload rejected by 0.1.0 schema", descriptionBase, false, "0.1.0"],
  ["0.1.0 payload rejected by 0.2.0 schema", example, false, "0.2.0"],
  ["0.1.0 schema rejects Description field", exampleWithDescription, false, "0.1.0"],
];

const allCases = [...cases, ...versionedCases, ...descriptionCases];
const failed = allCases.filter(([label, dataset, expected]) => !check(label, dataset, expected))
  .concat(crossVersionCases.filter(([label, dataset, expected, version]) => !check(label, dataset, expected, version)));
if (failed.length > 0) {
  console.error(`Dimension Assessment Candidate validation failed with ${failed.length} case(s).`);
  process.exitCode = 1;
} else {
  console.log(`Dimension Assessment Candidate 0.1.0/0.2.0 payload and semantic checks passed (${allCases.length + crossVersionCases.length} cases).`);
}
