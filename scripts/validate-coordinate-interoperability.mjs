import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  exportDatasetJson,
  importDatasetJson,
} from "../../e2r-narrative-line/src/services/DatasetService.ts";
import { readObjectCoordinates } from "../../e2r-narrative-line/src/services/CoordinateService.ts";
import {
  applyStoredCoordinates,
  getStoredCoordinates,
} from "../../e2r-liaison-scape/src/dataset.ts";
import {
  loadDataset,
  prepareDatasetForExport,
  serializeDataset,
} from "../../e2r-liaison-scape/src/services/DatasetService.ts";
import { validateDataset } from "../../e2r-validator/src/index.js";

const coordinateId = "experimental.github.sukoyaka-dopeness.coordinate";
const specificationId = "draft.github.sukoyaka-dopeness.specification";
const unknownExtensionId = "example.future";
const targetObjectId = "entity-lighthouse";
const targetSpaceId = "liaisonscape-graph";
const targetPosition = { x: 112, y: 204 };

const fixture = JSON.parse(await readFile(
  new URL("../examples/cross-application-demo.json", import.meta.url),
  "utf8",
));

function validatorPass(label, dataset, { expectUnknownExtension = false } = {}) {
  const result = validateDataset(dataset);
  assert.equal(
    result.valid,
    true,
    `${label} failed E2R Validator: ${JSON.stringify(result.diagnostics)}`,
  );
  if (expectUnknownExtension) {
    assert.ok(
      result.diagnostics.some(({ code }) => code === "unknown_extension"),
      `${label} no longer reports the preserved unknown Extension`,
    );
  }
  return result;
}

function objectById(dataset, collection, id) {
  const value = dataset[collection].find((candidate) => candidate.id === id);
  assert.ok(value, `Missing ${collection} object ${id}`);
  return value;
}

function setTargetCoordinate(dataset, position) {
  const object = objectById(dataset, "entities", targetObjectId);
  const payload = object.extensions[coordinateId];
  const coordinate = payload.coordinates.find(({ spaceId }) => spaceId === targetSpaceId);
  assert.ok(coordinate, `Missing ${targetSpaceId} coordinate`);
  coordinate.values.x = position.x;
  coordinate.values.y = position.y;
}

function expectedAfterCoordinateEdit(dataset) {
  const expected = structuredClone(dataset);
  setTargetCoordinate(expected, targetPosition);
  return expected;
}

function assertCoreIdentityPreserved(before, after, label) {
  for (const collection of ["entities", "events", "relations"]) {
    assert.deepEqual(
      after[collection].map(({ id }) => id),
      before[collection].map(({ id }) => id),
      `${label} changed ${collection} identity or order`,
    );
  }
}

function runApplicationRoundTrip(source, label, { expectUnknownExtension = false } = {}) {
  const validatorOptions = { expectUnknownExtension };
  validatorPass(`${label}: source`, source, validatorOptions);

  const narrativeImport = importDatasetJson(JSON.stringify(source));
  assert.equal(narrativeImport.isValid, true, `${label}: NarrativeLine rejected source`);
  assert.ok(narrativeImport.dataset, `${label}: NarrativeLine returned no Dataset`);
  assert.equal(
    narrativeImport.migration,
    undefined,
    `${label}: this current-format fixture unexpectedly entered Legacy Migration`,
  );
  assert.deepEqual(
    narrativeImport.dataset,
    source,
    `${label}: NarrativeLine Import lost or changed source information`,
  );
  validatorPass(`${label}: NarrativeLine import`, narrativeImport.dataset, validatorOptions);

  const sourceSnapshot = structuredClone(narrativeImport.dataset);
  const narrativeExport = exportDatasetJson(narrativeImport.dataset);
  assert.equal(narrativeExport.isValid, true, `${label}: NarrativeLine export failed`);
  assert.ok(narrativeExport.json, `${label}: NarrativeLine returned no JSON`);
  assert.deepEqual(
    narrativeImport.dataset,
    sourceSnapshot,
    `${label}: NarrativeLine export mutated the editing Dataset`,
  );
  const narrativeExportDataset = JSON.parse(narrativeExport.json);
  validatorPass(`${label}: NarrativeLine Export JSON`, narrativeExportDataset, validatorOptions);
  // These two concrete fixtures do not require an Export-time declaration change:
  // the canonical fixture already has a complete declaration, while the unknown
  // Extension fixture cannot receive a complete declaration without guessing.
  const expectedNarrativeExport = structuredClone(source);
  assert.deepEqual(
    narrativeExportDataset,
    expectedNarrativeExport,
    `${label}: NarrativeLine Export lost or changed source information`,
  );

  const liaisonImport = loadDataset(narrativeExport.json);
  assert.ok(liaisonImport.dataset, `${label}: LiaisonScape rejected NarrativeLine JSON: ${JSON.stringify(liaisonImport.diagnostics)}`);
  validatorPass(`${label}: LiaisonScape import`, liaisonImport.dataset, validatorOptions);
  assert.deepEqual(
    liaisonImport.dataset,
    narrativeExportDataset,
    `${label}: LiaisonScape Import changed serialized input`,
  );

  const positions = getStoredCoordinates(liaisonImport.dataset);
  assert.ok(positions[targetObjectId], `${label}: LiaisonScape did not read target position`);
  const liaisonEdited = applyStoredCoordinates(liaisonImport.dataset, {
    ...positions,
    [targetObjectId]: targetPosition,
  });
  assert.notEqual(liaisonEdited, liaisonImport.dataset, `${label}: Coordinate edit was not applied`);
  validatorPass(`${label}: LiaisonScape Coordinate edit`, liaisonEdited, validatorOptions);

  const expectedEdited = expectedAfterCoordinateEdit(narrativeExportDataset);
  assert.deepEqual(
    liaisonEdited,
    expectedEdited,
    `${label}: LiaisonScape changed data outside the selected Coordinate values`,
  );

  const liaisonExportDataset = prepareDatasetForExport(liaisonEdited);
  const liaisonJson = serializeDataset(liaisonExportDataset);
  const parsedLiaisonExport = JSON.parse(liaisonJson);
  validatorPass(`${label}: LiaisonScape Export JSON`, parsedLiaisonExport, validatorOptions);
  assert.deepEqual(
    parsedLiaisonExport,
    expectedEdited,
    `${label}: LiaisonScape export changed data outside the allowed Coordinate values`,
  );

  const narrativeReimport = importDatasetJson(liaisonJson);
  assert.equal(narrativeReimport.isValid, true, `${label}: NarrativeLine rejected LiaisonScape JSON`);
  assert.ok(narrativeReimport.dataset, `${label}: NarrativeLine returned no re-imported Dataset`);
  validatorPass(`${label}: NarrativeLine re-import`, narrativeReimport.dataset, validatorOptions);
  assert.deepEqual(
    narrativeReimport.dataset,
    expectedEdited,
    `${label}: NarrativeLine re-import changed the LiaisonScape export`,
  );
  assert.deepEqual(
    narrativeReimport.dataset,
    expectedAfterCoordinateEdit(source),
    `${label}: final round-trip lost or changed source information outside the allowed Coordinate values`,
  );
  assertCoreIdentityPreserved(source, narrativeReimport.dataset, label);

  const readbackObject = objectById(narrativeReimport.dataset, "entities", targetObjectId);
  const coordinateRead = readObjectCoordinates(narrativeReimport.dataset, readbackObject);
  assert.equal(coordinateRead.status, "available", `${label}: NarrativeLine could not read saved Coordinates`);
  assert.deepEqual(
    coordinateRead.coordinates.find(({ spaceId }) => spaceId === targetSpaceId)?.values
      .map(({ id, value }) => ({ id, value })),
    [{ id: "x", value: targetPosition.x }, { id: "y", value: targetPosition.y }],
    `${label}: NarrativeLine read a different LiaisonScape position`,
  );

  if (expectUnknownExtension) {
    assert.deepEqual(
      narrativeReimport.dataset.extensions[unknownExtensionId],
      source.extensions[unknownExtensionId],
      `${label}: unknown Dataset Extension payload was not preserved`,
    );
    const unknownOwnerBefore = objectById(source, "entities", "entity-community");
    const unknownOwnerAfter = objectById(narrativeReimport.dataset, "entities", "entity-community");
    assert.deepEqual(
      unknownOwnerAfter.extensions[unknownExtensionId],
      unknownOwnerBefore.extensions[unknownExtensionId],
      `${label}: unknown object Extension payload was not preserved`,
    );
    assert.equal(
      Object.hasOwn(narrativeReimport.dataset.extensions, specificationId),
      false,
      `${label}: an incomplete Specification declaration was introduced`,
    );
  } else {
    assert.deepEqual(
      narrativeReimport.dataset.extensions[specificationId],
      source.extensions[specificationId],
      `${label}: existing Specification declaration changed`,
    );
  }

  const beforeOtherSpace = objectById(source, "entities", targetObjectId)
    .extensions[coordinateId].coordinates.find(({ spaceId }) => spaceId === "harbor-site-plan");
  const afterOtherSpace = objectById(narrativeReimport.dataset, "entities", targetObjectId)
    .extensions[coordinateId].coordinates.find(({ spaceId }) => spaceId === "harbor-site-plan");
  assert.deepEqual(afterOtherSpace, beforeOtherSpace, `${label}: another Coordinate Space changed`);
  assert.deepEqual(
    narrativeReimport.dataset.extensions.metadata,
    source.extensions.metadata,
    `${label}: Dataset Metadata changed`,
  );
  assert.deepEqual(
    objectById(narrativeReimport.dataset, "events", "event-survey").extensions.history,
    objectById(source, "events", "event-survey").extensions.history,
    `${label}: another writer's History payload changed`,
  );
}

assert.ok(fixture.extensions?.metadata, "Canonical fixture needs Dataset Metadata");
assert.ok(fixture.extensions?.[specificationId], "Canonical fixture needs an existing Specification declaration");
assert.ok(
  objectById(fixture, "entities", targetObjectId).extensions?.[coordinateId],
  "Canonical fixture needs the stable Coordinate Extension",
);
runApplicationRoundTrip(fixture, "declared cross-app round-trip");

const unknownExtensionFixture = structuredClone(fixture);
delete unknownExtensionFixture.extensions[specificationId];
unknownExtensionFixture.extensions[unknownExtensionId] = {
  futureData: { keep: true, sequence: ["opaque", 7] },
};
objectById(unknownExtensionFixture, "entities", "entity-community").extensions[unknownExtensionId] = {
  vendorRecord: { untouched: [false, "opaque"] },
};
const unknownDiagnostics = validatorPass("unknown Extension fixture", unknownExtensionFixture).diagnostics;
assert.ok(
  unknownDiagnostics.some(({ code }) => code === "unknown_extension"),
  "Unknown Extension scenario did not exercise the Validator's unknown_extension diagnostic",
);
runApplicationRoundTrip(unknownExtensionFixture, "unknown Extension round-trip", {
  expectUnknownExtension: true,
});

console.log(
  "Coordinate JSON interoperability passed: NarrativeLine Import/Export -> LiaisonScape Import/Coordinate edit/Export -> NarrativeLine re-Import; declared and unknown Extension cases validated.",
);
